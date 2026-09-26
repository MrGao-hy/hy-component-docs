import type { HeadConfig } from 'vitepress';

/**
 * 文档语言自动切换模块
 *
 * - `langRedirectHead`：注入 head 的首屏内联脚本，页面渲染前根据浏览器语言（默认跟随系统语言）跳转，避免语言闪烁
 * - `trackLocalePreference`：主题路由钩子中调用，用户手动切换语言后记录偏好，之后不再自动跳转
 *
 * 跳转规则（/zh 与 /en 目录页面一一对应）：
 * - en 浏览器访问 `/` 或 `/zh/xxx` -> `/en/` 或 `/en/xxx`
 * - zh 浏览器访问 `/en/xxx` -> `/zh/xxx`（首页则回 `/`）
 */

// 用户手动切换语言时写入的 key，首屏脚本检测到后不再自动重定向
const LOCALE_KEY = 'hy-locale';
// 每个标签页会话只自动重定向一次，避免来回跳
const REDIRECTED_KEY = 'hy-locale-redirected';

type Locale = 'en' | 'zh';

/** 根据路径判断语言：/en/* 为英文，其余（含首页 /）归为中文 */
const getLocale = (path: string): Locale => (/^\/en(\/|$)/.test(path) ? 'en' : 'zh');

/** head 配置项：首屏语言检测 + 跳转脚本 */
export const langRedirectHead: HeadConfig = [
    'script',
    {},
    String.raw`(function () {
  try {
    // 用户手动切换过语言，或本会话已重定向过，则不再自动跳转
    if (localStorage.getItem('${LOCALE_KEY}')) return;
    if (sessionStorage.getItem('${REDIRECTED_KEY}')) return;
    var lang = ((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
    var path = location.pathname;
    var inEn = path === '/en' || path.indexOf('/en/') === 0;
    var target = '';
    if (lang.indexOf('en') === 0 && !inEn) {
      // 首页 / 中文页面 -> 对应英文页面
      target = path === '/' ? '/en/' : '/en' + path.replace(/^\/zh(?=\/$)/, '');
    } else if (lang.indexOf('zh') === 0 && inEn) {
      // 英文页面 -> 对应中文页面
      var p = path.replace(/^\/en(?=\/$)/, '/zh');
      target = p === '/zh' || p === '/zh/' ? '/' : p;
    }
    if (target && target !== path) {
      sessionStorage.setItem('${REDIRECTED_KEY}', '1');
      location.replace(target + location.search + location.hash);
    }
  } catch (e) {}
})();`,
];

// 上一次已知语言，用于识别"跨语言切换"（即用户手动切换）
let lastKnownLocale: Locale | null = null;

/**
 * 在主题 router.onAfterRouteChange 中调用：
 * 检测到路由跨语言切换（用户点了语言下拉框）时，写入 localStorage 偏好
 */
export function trackLocalePreference(to?: string): void {
    if (typeof window === 'undefined') return;
    if (lastKnownLocale === null) {
        // 首次调用时以当前页面语言为基准，避免把首屏跳转/外链进入误判为手动切换
        lastKnownLocale = getLocale(window.location.pathname);
    }
    const locale = getLocale(to || window.location.pathname);
    if (locale !== lastKnownLocale) {
        localStorage.setItem(LOCALE_KEY, locale);
        lastKnownLocale = locale;
    }
}
