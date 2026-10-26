<!--
    DemoModel：手机模拟器（iPhone Pro 风格在线演示壳）
    用途：页面右侧固定的真机预览壳——铛金属机身、实体侧键、灵动岛、毛玻璃状态栏（实时时钟）
          与 Home Indicator；内置 iframe 加载 H5 演示页，并同步明暗主题（THEME）与中英文语言（LANG）、
          将 PC 鼠标点击转换为触摸事件传给 iframe（SIMULATED_TOUCH）。
    用法：已在 theme/index.ts 全局注册，文档中写 <demo-model url="pages-design/xxx/xxx" />。
    环境：开发环境 iframe 指向 localhost:8070，线上指向 h5.hy-design-uni.top。
-->
<template>
    <div class="demo-model-wrap" :class="{ 'is-dark': isDark }">
        <!-- 左侧实体按键：操作键 / 音量+ / 音量- -->
        <span class="side-btn side-btn--action"></span>
        <span class="side-btn side-btn--volume-up"></span>
        <span class="side-btn side-btn--volume-down"></span>
        <!-- 右侧实体按键：电源键 -->
        <span class="side-btn side-btn--power"></span>

        <!-- 机身（钛金属外壳） -->
        <div class="demo-model">
            <div class="screen">
                <!-- 状态栏 -->
                <div class="status-bar">
                    <span class="status-bar__time">{{ nowTime }}</span>
                    <div class="status-bar__icons">
                        <img
                            class="status-bar__logo"
                            :src="isDark ? logoDark : logoLight"
                            alt="logo"
                        />
                        <svg
                            class="status-bar__icon"
                            viewBox="0 0 18 12"
                            width="16"
                            height="10"
                            aria-hidden="true"
                            fill="currentColor"
                        >
                            <rect x="0.5" y="7.5" width="3" height="4" rx="1" />
                            <rect x="5" y="5" width="3" height="6.5" rx="1" />
                            <rect x="9.5" y="2.5" width="3" height="9" rx="1" />
                            <rect x="14" y="0" width="3" height="11.5" rx="1" />
                        </svg>
                        <svg
                            class="status-bar__icon"
                            viewBox="0 0 16 12"
                            width="14"
                            height="10"
                            aria-hidden="true"
                        >
                            <path
                                d="M1.7 4.9A9.5 9.5 0 0 1 14.3 4.9"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                                stroke-linecap="round"
                            />
                            <path
                                d="M3.9 7.1A6.4 6.4 0 0 1 12.1 7.1"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                                stroke-linecap="round"
                            />
                            <circle cx="8" cy="10.2" r="1.3" fill="currentColor" />
                        </svg>
                        <img
                            class="status-bar__battery"
                            :src="isDark ? batteryDark : batteryLight"
                            alt="battery"
                        />
                    </div>
                </div>

                <!-- 灵动岛 -->
                <div class="dynamic-island"></div>

                <!-- 主体 -->
                <div class="model-content">
                    <iframe
                        id="demo-modal"
                        ref="h5Iframe"
                        :src="href"
                        class="iframe"
                        title="组件在线演示"
                        frameborder="0"
                        scrolling="no"
                        style="touch-action: none"
                    ></iframe>
                </div>

                <!-- Home Indicator -->
                <div class="home-indicator"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
    import logoDark from '/images/hy_logo_dark.png';
    import logoLight from '/images/hy_logo_light.png';
    import batteryDark from '/images/battery_dark.png';
    import batteryLight from '/images/battery_light.png';
    import { useData } from 'vitepress';

    interface IProps {
        url: string;
        prefix?: string;
    }

    const props = withDefaults(defineProps<IProps>(), {
        url: '/',
        prefix: '/web/#',
    });
    const { isDark, lang } = useData();
    const baseUrl = ref(
        import.meta.env.DEV ? 'http://localhost:8070/#/' : 'https://h5.hy-design-uni.top/#/'
    );
    const href = computed(() => {
        return props.url.indexOf('http') === 0 ? props.url : `${baseUrl.value}${props.url}`;
    });
    const h5Iframe = ref<HTMLIFrameElement | null>(null);

    // 实时时钟：每 30s 校准一次，避免长时间停留后时间过期
    const now = ref(new Date());
    let timeTimer: ReturnType<typeof setInterval> | undefined;
    const nowTime = computed(() => {
        const hours = String(now.value.getHours()).padStart(2, '0');
        const minutes = String(now.value.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    });

    // iframe 目标源：postMessage 必须限定来源，避免使用 '*' 带来安全风险
    const targetOrigin = computed(() => {
        try {
            return new URL(href.value).origin;
        } catch {
            return location.origin;
        }
    });

    // 传递是否暗黑主题值
    const postTheme = () => {
        h5Iframe.value?.contentWindow?.postMessage(
            {
                type: 'THEME',
                isDark: isDark.value,
            },
            targetOrigin.value
        );
    };

    // 传递当前文档语言（zh-Hans / en-US），H5 端据此切换中英文
    const postLang = () => {
        console.log(lang.value, '===');
        h5Iframe.value?.contentWindow?.postMessage(
            {
                type: 'LANG',
                lang: lang.value,
            },
            targetOrigin.value
        );
    };

    watch(isDark, postTheme);
    watch(lang, postLang);

    const handleIframeLoad = () => {
        postTheme();
        postLang();
    };

    // 监听 PC 端 pointerdown
    const handlePointerDown = (e: PointerEvent) => {
        const iframe = h5Iframe.value;
        if (!iframe) return;

        // 只处理 iframe 区域
        const rect = iframe.getBoundingClientRect();
        if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        ) {
            return;
        }

        // 计算 iframe 内部坐标
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 发送伪造 touch 事件到 iframe
        iframe.contentWindow?.postMessage(
            {
                type: 'SIMULATED_TOUCH',
                event: {
                    type: 'touchstart',
                    clientX: x,
                    clientY: y,
                },
            },
            targetOrigin.value
        );
    };

    onMounted(() => {
        timeTimer = setInterval(() => (now.value = new Date()), 30_000);
        h5Iframe.value?.addEventListener('load', handleIframeLoad);
        window.addEventListener('pointerdown', handlePointerDown);
    });

    onUnmounted(() => {
        if (timeTimer) clearInterval(timeTimer);
        h5Iframe.value?.removeEventListener('load', handleIframeLoad);
        window.removeEventListener('pointerdown', handlePointerDown);
    });
</script>

<style scoped lang="scss">
    /* ============ 定位容器：不做任何裁剪，保证实体按键能凸出机身 ============ */
    .demo-model-wrap {
        --shell-padding: 6px;
        --shell-radius: 40px;
        --screen-radius: 36px;
        --status-bar-height: 30px;
        --navbar-height: 64px;

        position: fixed;
        z-index: 29;
        right: 12px;
        top: calc(var(--navbar-height) + 12px);
        width: 320px;
        /* 屏幕按 393 x 852 真机比例，外加外壳内边距 */
        aspect-ratio: 415 / 874;
        max-height: calc(100vh - var(--navbar-height) - 24px);
    }

    /* ============ 机身外壳 ============ */
    .demo-model {
        position: relative;
        height: 100%;
        box-sizing: border-box;
        padding: var(--shell-padding);
        border-radius: var(--shell-radius);
        transition:
            background 0.35s ease,
            box-shadow 0.35s ease;

        /* 银钛：柔和的纵向过渡 */
        background: linear-gradient(180deg, #eceef1 0%, #c9ccd2 42%, #d8dbe0 100%);
        box-shadow:
            0 0 0 0.5px rgba(0, 0, 0, 0.13),
            0 2px 4px rgba(0, 0, 0, 0.08),
            0 12px 28px -8px rgba(0, 0, 0, 0.18),
            0 32px 64px -16px rgba(0, 0, 0, 0.26);

        /* 黑钛 */
        .demo-model-wrap.is-dark & {
            background: linear-gradient(180deg, #3a3a40 0%, #1a1a1e 42%, #28282e 100%);
            box-shadow:
                0 0 0 0.5px rgba(255, 255, 255, 0.09),
                0 2px 4px rgba(0, 0, 0, 0.4),
                0 12px 28px -8px rgba(0, 0, 0, 0.5),
                0 32px 64px -16px rgba(0, 0, 0, 0.6);
        }

        /* 金属反光线：沿圆角的一条由亮到暗的边线，钛合金质感的关键 */
        &::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.85) 0%,
                rgba(255, 255, 255, 0.1) 18%,
                rgba(255, 255, 255, 0) 50%,
                rgba(255, 255, 255, 0) 82%,
                rgba(255, 255, 255, 0.28) 100%
            );
            -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
        }
    }

    /* ============ 侧边实体按键（与机身同材质） ============ */
    .side-btn {
        position: absolute;
        width: 3.5px;
        border-radius: 2px;
        /* 银色金属：亮→银→暗，圆柱高光感 */
        background: linear-gradient(180deg, #e2e5e9 0%, #bfc3c9 55%, #a9adb4 100%);
        box-shadow: inset 0 0.5px 0.5px rgba(255, 255, 255, 0.5);

        .is-dark & {
            background: linear-gradient(180deg, #eef0f3 0%, #cdd1d7 55%, #b6bac1 100%);
            box-shadow: inset 0 0.5px 0.5px rgba(255, 255, 255, 0.6);
        }

        &--action {
            left: -3px;
            top: 22%;
            width: 3px;
            height: 24px;
        }

        &--volume-up {
            left: -3.5px;
            top: 28%;
            height: 52px;
        }

        &--volume-down {
            left: -3.5px;
            top: calc(28% + 62px);
            height: 52px;
        }

        &--power {
            right: -3.5px;
            top: 26%;
            height: 84px;
        }
    }

    /* ============ 屏幕 ============ */
    .screen {
        position: relative;
        height: 100%;
        border-radius: var(--screen-radius);
        background: var(--vp-sidebar-bg-color);
        overflow: hidden;
    }

    /* 状态栏：iOS 毛玻璃质感 */
    .status-bar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        height: var(--status-bar-height);
        box-sizing: border-box;
        padding: 3px 20px 0 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family:
            -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', 'PingFang SC',
            'Microsoft YaHei', sans-serif;
        font-size: 13px;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.2px;
        color: var(--vp-c-text-1);
        background: color-mix(in srgb, var(--vp-sidebar-bg-color) 72%, transparent);
        backdrop-filter: saturate(180%) blur(16px);
        -webkit-backdrop-filter: saturate(180%) blur(16px);

        &__icons {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        &__logo {
            display: block;
            height: 15px;
            width: auto;
        }

        &__battery {
            display: block;
            height: 12px;
            width: auto;
        }

        &__icon {
            display: block;
            color: var(--vp-c-text-1);
            opacity: 0.92;
        }
    }

    /* 灵动岛 */
    .dynamic-island {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        width: 70px;
        height: 11px;
        border-radius: 12px;
        background: #000;
        box-shadow:
            0 0 0 0.5px rgba(255, 255, 255, 0.08),
            inset 0 0.5px 1px rgba(255, 255, 255, 0.05);

        /* 前置摄像头 */
        &::after {
            content: '';
            position: absolute;
            right: 9px;
            top: 50%;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: radial-gradient(circle at 35% 35%, #1f2b47 0%, #06070c 65%);
        }
    }

    /* ============ 主体内容 ============ */
    .model-content {
        position: absolute;
        inset: 0;
        box-sizing: border-box;
        padding-top: var(--status-bar-height);

        .iframe {
            display: block;
            width: 100%;
            height: 100%;
            border: 0;
            overflow: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
                width: 0;
                height: 0;
            }
        }
    }

    /* Home Indicator */
    .home-indicator {
        position: absolute;
        bottom: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 4;
        width: 34%;
        max-width: 118px;
        height: 4px;
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.72);
        pointer-events: none;

        .is-dark & {
            background: rgba(255, 255, 255, 0.9);
        }
    }

    /* ============ 响应式：小屏隐藏 ============ */
    @media only screen and (max-device-width: 480px) {
        .demo-model-wrap {
            display: none;
        }
    }

    @media screen and (width < 1069px) {
        .demo-model-wrap {
            display: none;
        }
    }

    /* ============ 响应式：按视口宽度调整机身尺寸 ============ */
    @media screen and (min-width: 1069px) and (max-width: 1280px) {
        .demo-model-wrap {
            width: 280px;
        }
    }

    @media screen and (min-width: 1281px) and (max-width: 1366px) {
        .demo-model-wrap {
            width: 300px;
        }
    }

    @media screen and (min-width: 1367px) and (max-width: 1500px) {
        .demo-model-wrap {
            width: 320px;
        }
    }

    @media screen and (min-width: 1501px) and (max-width: 1920px) {
        .demo-model-wrap {
            width: 340px;
        }
    }

    @media screen and (min-width: 1921px) {
        .demo-model-wrap {
            width: 360px;
        }
    }
</style>
