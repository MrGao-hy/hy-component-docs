import { defineConfig, type DefaultTheme } from 'vitepress';
import footnote from 'markdown-it-footnote';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';
import llmstxt from 'vitepress-plugin-llms';
// 导入vpi生成好的英文导航配置
import enLocale from './i18n/en.json';
import zhLocale from './i18n/zh.json';
// 根据浏览器语言自动切换文档语言（脚本逻辑见 lang-redirect.ts）
import { langRedirectHead } from './lang-redirect';

export default defineConfig({
    lang: 'zh-CN',
    title: '组件库',
    description:
        '华玥UI-是作者打造的开发者全成长周期开源平台，围绕效率、成就、变现三大用户价值布局平台能力，全力服务开发者，旨在成为开发者的好朋友。华玥历经多轮打磨雕刻，集海量高品质华玥模板、实时在线预览、多元化场景模板、轻便好学、易上手等多重优势于一身的开发神器，更自带免费开源可商用属性，为企业集团、公司团队、前端后端开发者、运营大佬、社交达人、学生小白提供了一个零成本的在线开发平台和资源库。',
    ignoreDeadLinks: true,
    sitemap: {
        hostname: 'https://www.hy-design-uni.top',
    },

    locales: {
        root: {
            label: '中文',
            lang: 'zh-CN',
            title: '华玥组件库',
            description: '华玥UI组件库官方文档',
            // ==========中文导航、侧边栏全部移到这里==========
            themeConfig: zhLocale as unknown as DefaultTheme.Config,
        },

        en: {
            label: 'English',
            lang: 'en-US',
            title: 'HY‑UI Docs',
            description: 'Official documentation for HuaYue‑UI',
            // 直接展开vpi翻译生成好的英文导航&侧边栏
            themeConfig: enLocale,
        },
    },

    // ---------------- 剩下公共配置（所有语言共享） ----------------
    themeConfig: {
        logo: {
            light: '/images/hy_logo_light.png',
            dark: '/images/hy_logo_dark.png',
        },
        search: {
            provider: 'algolia',
            options: {
                appId: 'V9DGA3FXG2',
                apiKey: 'ed4fa620b5ad0f03c1b4b5cc4070db81',
                indexName: 'hy-design-uni',
                askAi: {
                    assistantId: 'Y7gDNX5nDOtI',
                    sidePanel: {
                        panel: {
                            suggestedQuestions: true,
                        },
                    },
                },
            },
        },
        editLink: {
            pattern: 'https://github.com/MrGao-hy/hy-component-docs/edit/master/docs/:path',
        },
        lastUpdated: {
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium',
            },
        },
        outline: {
            level: [2, 3],
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/MrGao-hy/hy-design-uni' },
            { icon: 'gitee', link: 'https://gitee.com/MrGao-hy/hy-design-uni' },
            { icon: 'csdn', link: 'https://blog.csdn.net/weixin_68340504?type=blog' },
            { icon: 'qq', link: 'https://tool.gljlw.com/qqq/?qq=2036902768' },
        ],
        footer: {
            message: '',
            copyright:
                '华玥组件库 © 2025-present 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2024048852号-2</a>',
        },
    },
    head: [
        ['link', { rel: 'icon', href: '/images/hy_logo_light.png' }],
        ['meta', { name: 'algolia-site-verification', content: '375FCD1927B1F391' }],
        // 首屏语言检测脚本（渲染前执行，避免语言闪烁）
        langRedirectHead,
    ],
    markdown: {
        lineNumbers: true,
        config: (md) => {
            md.use(footnote);
            md.use(groupIconMdPlugin);
        },
    },
    vite: {
        server: {
            host: '0.0.0.0',
            port: 6699,
        },
        plugins: [groupIconVitePlugin(), llmstxt()],
        assetsInclude: ['**/*.ico'],
        build: {
            rollupOptions: {
                external: (id) => {
                    return /^https?:\/\//.test(id);
                },
            },
        },
    },
    outDir: '../dist',
});
