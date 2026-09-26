<template>
    <section ref="scene" class="nf-scene" aria-label="404 页面不存在">
        <!-- 星空（视差层，客户端生成避免 SSR 水合不一致） -->
        <div class="nf-stars nf-layer" aria-hidden="true">
            <span v-for="star in stars" :key="star.id" class="nf-star" :style="star.style"></span>
        </div>

        <!-- 流星 -->
        <span class="nf-meteor nf-meteor-1" aria-hidden="true"></span>
        <span class="nf-meteor nf-meteor-2" aria-hidden="true"></span>

        <!-- 装饰行星（视差层） -->
        <div class="nf-planet nf-layer" aria-hidden="true">
            <svg viewBox="0 0 140 110" fill="none">
                <defs>
                    <linearGradient id="nf-planet-g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stop-color="#b07cff" />
                        <stop offset="1" stop-color="#6a5bff" />
                    </linearGradient>
                </defs>
                <!-- 星环（后侧） -->
                <ellipse
                    cx="70"
                    cy="55"
                    rx="56"
                    ry="16"
                    stroke="#7f9bd0"
                    stroke-width="7"
                    opacity="0.5"
                />
                <circle cx="70" cy="55" r="30" fill="url(#nf-planet-g)" />
                <!-- 陨石坑 -->
                <circle cx="59" cy="46" r="6" fill="#5f4bd6" opacity="0.55" />
                <circle cx="81" cy="64" r="4.5" fill="#5f4bd6" opacity="0.45" />
                <circle cx="84" cy="41" r="3" fill="#5f4bd6" opacity="0.5" />
                <!-- 星环（前侧） -->
                <path
                    d="M14 55 A56 16 0 0 0 126 55"
                    stroke="#9fb4e4"
                    stroke-width="7"
                    opacity="0.9"
                />
            </svg>
        </div>

        <!-- 主内容 -->
        <div class="nf-content">
            <!-- 漂浮的宇航员（视差层） -->
            <div class="nf-astro-wrap nf-layer" aria-hidden="true">
                <svg class="nf-astro" viewBox="0 0 240 290" fill="none">
                    <defs>
                        <linearGradient id="nf-suit" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stop-color="#ffffff" />
                            <stop offset="1" stop-color="#d7e1f0" />
                        </linearGradient>
                        <linearGradient id="nf-pack" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stop-color="#c2d1e6" />
                            <stop offset="1" stop-color="#a7b9d6" />
                        </linearGradient>
                        <radialGradient id="nf-visor" cx="0.35" cy="0.3" r="1">
                            <stop offset="0" stop-color="#3f5c9e" />
                            <stop offset="1" stop-color="#101c3f" />
                        </radialGradient>
                    </defs>

                    <!-- 背包天线 -->
                    <line
                        x1="76"
                        y1="128"
                        x2="60"
                        y2="96"
                        stroke="#a7b9d6"
                        stroke-width="5"
                        stroke-linecap="round"
                    />
                    <circle cx="59" cy="93" r="6" fill="#ff71d2" />
                    <!-- 背包 -->
                    <rect x="60" y="128" width="120" height="64" rx="20" fill="url(#nf-pack)" />

                    <!-- 腿 -->
                    <g class="nf-leg nf-leg-l">
                        <rect x="93" y="214" width="26" height="58" rx="13" fill="#e7edf6" />
                        <rect x="90" y="260" width="32" height="18" rx="9" fill="#c2d1e6" />
                    </g>
                    <g class="nf-leg nf-leg-r">
                        <rect x="121" y="214" width="26" height="58" rx="13" fill="#e7edf6" />
                        <rect x="118" y="260" width="32" height="18" rx="9" fill="#c2d1e6" />
                    </g>

                    <!-- 左臂（自然下垂摆动） -->
                    <g class="nf-arm-l">
                        <rect x="58" y="142" width="26" height="62" rx="13" fill="#dde6f2" />
                        <circle cx="71" cy="202" r="13" fill="#f4f8fc" />
                    </g>

                    <!-- 身体 -->
                    <rect x="80" y="130" width="80" height="92" rx="30" fill="url(#nf-suit)" />
                    <!-- 腰带 -->
                    <rect x="80" y="198" width="80" height="13" rx="6.5" fill="#c2d1e6" />
                    <rect x="112" y="200" width="16" height="9" rx="3" fill="#8fa5c6" />
                    <!-- 胸前控制面板 -->
                    <rect x="100" y="150" width="40" height="30" rx="8" fill="#182a55" />
                    <circle cx="111" cy="161" r="4" fill="#00ffc6" />
                    <circle cx="129" cy="161" r="4" fill="#fbbd12" />
                    <rect x="105" y="170" width="30" height="4" rx="2" fill="#4a6ab0" />

                    <!-- 右臂（挥手） -->
                    <g class="nf-arm-r">
                        <rect x="149" y="86" width="26" height="68" rx="13" fill="url(#nf-suit)" />
                        <circle cx="162" cy="82" r="14" fill="#f4f8fc" />
                    </g>

                    <!-- 头盔 -->
                    <rect x="102" y="118" width="36" height="16" rx="8" fill="#c2d1e6" />
                    <circle cx="120" cy="82" r="50" fill="url(#nf-suit)" />
                    <ellipse cx="120" cy="86" rx="36" ry="31" fill="url(#nf-visor)" />
                    <!-- 面罩高光 -->
                    <ellipse
                        cx="106"
                        cy="72"
                        rx="11"
                        ry="6.5"
                        transform="rotate(-22 106 72)"
                        fill="#eaf6ff"
                        opacity="0.85"
                    />
                    <circle cx="133" cy="99" r="3" fill="#7fb6ff" opacity="0.5" />
                    <path
                        d="M78 64 A50 50 0 0 1 106 36"
                        stroke="#ffffff"
                        stroke-opacity="0.75"
                        stroke-width="5"
                        stroke-linecap="round"
                    />
                </svg>
            </div>

            <h1 class="nf-code" :aria-label="isEn ? '404 page not found' : '404 页面未找到'">
                <span v-for="(digit, i) in '404'" :key="i" aria-hidden="true">{{ digit }}</span>
            </h1>
            <p class="nf-title">{{ t.title }}</p>
            <p class="nf-desc">{{ t.desc }}</p>

            <div class="nf-actions">
                <a class="nf-btn nf-btn-primary" :href="homeLink">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    {{ t.home }}
                </a>
                <button type="button" class="nf-btn nf-btn-ghost" @click="goBack">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <polyline points="9 14 4 9 9 4" />
                        <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                    </svg>
                    {{ t.back }}
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, computed, onMounted, onUnmounted } from 'vue';
    import { withBase, useRoute } from 'vitepress';

    const route = useRoute();
    // 英文区路径以 /en 开头，其余走中文根路径
    const isEn = computed(() => route.path.startsWith('/en'));
    const homeLink = computed(() => withBase(isEn.value ? '/en/' : '/'));

    const t = computed(() =>
        isEn.value
            ? {
                  title: 'Oops, lost in space!',
                  desc: 'The page you are looking for has drifted into an unknown galaxy.\nCheck the URL, or head back home and keep exploring.',
                  home: 'Back to Home',
                  back: 'Go Back',
              }
            : {
                  title: '哎呀，迷航了！',
                  desc: '你访问的页面似乎漂浮到了未知星域，\n检查一下网址，或返回首页继续探索吧。',
                  home: '返回首页',
                  back: '返回上一页',
              }
    );

    const scene = ref(null);
    const stars = ref([]);
    let rafId = 0;
    let reducedMotion = false;

    // 鼠标视差：写入 CSS 变量，rAF 节流
    function handleMove(e) {
        if (reducedMotion || !scene.value || rafId) return;
        const mx = (e.clientX / window.innerWidth - 0.5) * 2;
        const my = (e.clientY / window.innerHeight - 0.5) * 2;
        rafId = requestAnimationFrame(() => {
            rafId = 0;
            scene.value?.style.setProperty('--nf-mx', mx.toFixed(3));
            scene.value?.style.setProperty('--nf-my', my.toFixed(3));
        });
    }

    function goBack() {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = homeLink.value;
        }
    }

    onMounted(() => {
        reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // 星星仅在客户端生成，避免服务端渲染水合不一致
        stars.value = Array.from({ length: 72 }, (_, i) => {
            const size = Math.random() < 0.85 ? 2 : 3.5;
            const duration = 2.5 + Math.random() * 4;
            return {
                id: i,
                style: {
                    left: `${(Math.random() * 100).toFixed(2)}%`,
                    top: `${(Math.random() * 100).toFixed(2)}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDuration: `${duration.toFixed(2)}s`,
                    animationDelay: `${(-Math.random() * duration).toFixed(2)}s`,
                },
            };
        });

        if (!reducedMotion) {
            window.addEventListener('mousemove', handleMove, { passive: true });
        }
    });

    onUnmounted(() => {
        window.removeEventListener('mousemove', handleMove);
        if (rafId) cancelAnimationFrame(rafId);
    });
</script>

<style scoped>
    .nf-scene {
        /* 亮色主题变量 */
        --nf-star: #7b8ec4;
        --nf-star-glow: rgba(123, 142, 196, 0.7);
        --nf-meteor: rgba(70, 110, 200, 0.85);
        --nf-text-1: #10224e;
        --nf-text-2: #4a5c8f;
        --nf-grad: linear-gradient(180deg, #0090d0, #00b892);
        --nf-glow: rgba(1, 190, 255, 0.2);
        --nf-btn-ghost-bg: rgba(16, 34, 78, 0.05);
        --nf-btn-ghost-border: rgba(16, 34, 78, 0.18);
        --nf-btn-ghost-hover: rgba(16, 34, 78, 0.1);

        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        min-height: 100vh;
        padding: calc(var(--vp-nav-height) + 32px) 24px 64px;
        overflow: hidden;
        background:
            radial-gradient(1200px 600px at 70% -10%, rgba(1, 190, 255, 0.16), transparent 60%),
            radial-gradient(900px 500px at 12% 110%, rgba(0, 255, 198, 0.12), transparent 60%),
            linear-gradient(180deg, #eef4ff 0%, #e3ecff 55%, #d9e6ff 100%);
    }

    .dark .nf-scene {
        /* 暗色主题变量 */
        --nf-star: #ffffff;
        --nf-star-glow: rgba(255, 255, 255, 0.85);
        --nf-meteor: rgba(255, 255, 255, 0.95);
        --nf-text-1: #f2f6ff;
        --nf-text-2: #9fb0d8;
        --nf-grad: linear-gradient(180deg, #01beff, #00ffc6);
        --nf-glow: rgba(1, 190, 255, 0.35);
        --nf-btn-ghost-bg: rgba(255, 255, 255, 0.08);
        --nf-btn-ghost-border: rgba(255, 255, 255, 0.22);
        --nf-btn-ghost-hover: rgba(255, 255, 255, 0.16);

        background:
            radial-gradient(1200px 600px at 70% -10%, rgba(1, 190, 255, 0.14), transparent 60%),
            radial-gradient(900px 500px at 12% 110%, rgba(0, 255, 198, 0.08), transparent 60%),
            linear-gradient(180deg, #070b1c 0%, #0c1330 55%, #122048 100%);
    }

    /* 移动端补上固定导航栏的高度 */
    @media (min-width: 960px) {
        .nf-scene {
            min-height: calc(100vh - var(--vp-nav-height));
            padding-top: 24px;
        }
    }

    /* ---------------- 星空 ---------------- */
    .nf-stars {
        position: absolute;
        inset: 0;
    }

    .nf-star {
        position: absolute;
        border-radius: 50%;
        background: var(--nf-star);
        box-shadow: 0 0 6px 1px var(--nf-star-glow);
        animation: nf-twinkle ease-in-out infinite;
    }

    @keyframes nf-twinkle {
        0%,
        100% {
            opacity: 0.15;
            transform: scale(0.8);
        }
        50% {
            opacity: 0.9;
            transform: scale(1.25);
        }
    }

    /* ---------------- 流星 ---------------- */
    .nf-meteor {
        position: absolute;
        top: -20px;
        width: 150px;
        height: 2px;
        border-radius: 999px;
        background: linear-gradient(90deg, transparent, var(--nf-meteor));
        filter: drop-shadow(0 0 6px var(--nf-meteor));
        opacity: 0;
        pointer-events: none;
    }

    .nf-meteor-1 {
        left: 18%;
        transform: rotate(38deg);
        animation: nf-meteor-1 8s ease-in infinite;
    }

    .nf-meteor-2 {
        left: 45%;
        transform: rotate(30deg);
        animation: nf-meteor-2 11s ease-in infinite;
        animation-delay: 4.5s;
    }

    @keyframes nf-meteor-1 {
        0% {
            transform: translate3d(0, 0, 0) rotate(38deg);
            opacity: 0;
        }
        4% {
            opacity: 0.9;
        }
        16% {
            transform: translate3d(380px, 296px, 0) rotate(38deg);
            opacity: 0;
        }
        100% {
            transform: translate3d(380px, 296px, 0) rotate(38deg);
            opacity: 0;
        }
    }

    @keyframes nf-meteor-2 {
        0% {
            transform: translate3d(0, 0, 0) rotate(30deg);
            opacity: 0;
        }
        4% {
            opacity: 0.7;
        }
        14% {
            transform: translate3d(450px, 260px, 0) rotate(30deg);
            opacity: 0;
        }
        100% {
            transform: translate3d(450px, 260px, 0) rotate(30deg);
            opacity: 0;
        }
    }

    /* ---------------- 视差层 ---------------- */
    .nf-layer {
        transform: translate3d(
            calc(var(--nf-mx, 0) * var(--nf-depth, -8px)),
            calc(var(--nf-my, 0) * var(--nf-depth, -8px)),
            0
        );
        transition: transform 0.2s ease-out;
        will-change: transform;
    }

    .nf-stars.nf-layer {
        --nf-depth: -6px;
    }

    .nf-planet.nf-layer {
        --nf-depth: -14px;
    }

    .nf-astro-wrap.nf-layer {
        --nf-depth: -12px;
    }

    /* ---------------- 行星 ---------------- */
    .nf-planet {
        position: absolute;
        top: 12%;
        right: 8%;
        width: clamp(90px, 12vw, 150px);
        animation: nf-drift 9s ease-in-out infinite;
    }

    /* ---------------- 宇航员 ---------------- */
    .nf-astro-wrap {
        display: flex;
        justify-content: center;
    }

    .nf-astro {
        width: clamp(150px, 24vw, 200px);
        height: auto;
        filter: drop-shadow(0 24px 40px rgba(10, 20, 60, 0.18));
        animation: nf-float 6s ease-in-out infinite;
    }

    @keyframes nf-float {
        0%,
        100% {
            transform: translateY(0) rotate(-2deg);
        }
        50% {
            transform: translateY(-18px) rotate(2.5deg);
        }
    }

    @keyframes nf-drift {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-12px);
        }
    }

    /* 挥手的右臂 */
    .nf-arm-r {
        transform-box: view-box;
        transform-origin: 162px 152px;
        animation: nf-wave 2.8s ease-in-out infinite;
    }

    @keyframes nf-wave {
        0%,
        100% {
            transform: rotate(22deg);
        }
        50% {
            transform: rotate(44deg);
        }
    }

    /* 摆动的左臂与双腿 */
    .nf-arm-l {
        transform-box: view-box;
        transform-origin: 71px 148px;
        animation: nf-sway 5s ease-in-out infinite;
    }

    @keyframes nf-sway {
        0%,
        100% {
            transform: rotate(5deg);
        }
        50% {
            transform: rotate(-7deg);
        }
    }

    .nf-leg-l {
        transform-box: view-box;
        transform-origin: 106px 220px;
        animation: nf-leg-swing 6s ease-in-out infinite;
    }

    .nf-leg-r {
        transform-box: view-box;
        transform-origin: 134px 220px;
        animation: nf-leg-swing 6s ease-in-out infinite;
        animation-delay: -3s;
    }

    @keyframes nf-leg-swing {
        0%,
        100% {
            transform: rotate(4deg);
        }
        50% {
            transform: rotate(-4deg);
        }
    }

    /* ---------------- 文案内容 ---------------- */
    .nf-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -8px;
        text-align: center;
    }

    .nf-content > * {
        animation: nf-fade-up 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both;
    }

    .nf-content > *:nth-child(1) {
        animation-delay: 0.05s;
    }
    .nf-content > *:nth-child(2) {
        animation-delay: 0.15s;
    }
    .nf-content > *:nth-child(3) {
        animation-delay: 0.25s;
    }
    .nf-content > *:nth-child(4) {
        animation-delay: 0.32s;
    }
    .nf-content > *:nth-child(5) {
        animation-delay: 0.4s;
    }

    @keyframes nf-fade-up {
        from {
            opacity: 0;
            transform: translateY(24px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* 404 大数字：独立浮动 */
    .nf-code {
        display: flex;
        margin: 0;
        font-size: clamp(96px, 18vw, 168px);
        font-weight: 800;
        line-height: 1;
        letter-spacing: 0.04em;
    }

    .nf-code span {
        background: var(--nf-grad);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        filter: drop-shadow(0 12px 28px var(--nf-glow));
        animation: nf-bob 3.2s ease-in-out infinite;
    }

    .nf-code span:nth-child(2) {
        animation-delay: 0.35s;
    }
    .nf-code span:nth-child(3) {
        animation-delay: 0.7s;
    }

    @keyframes nf-bob {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-12px);
        }
    }

    .nf-title {
        margin: 16px 0 0;
        font-size: clamp(22px, 3.5vw, 32px);
        font-weight: 700;
        color: var(--nf-text-1);
    }

    .nf-desc {
        margin: 14px 0 0;
        font-size: 15px;
        line-height: 1.8;
        color: var(--nf-text-2);
        white-space: pre-line;
    }

    /* ---------------- 按钮 ---------------- */
    .nf-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 14px;
        margin-top: 30px;
    }

    .nf-btn {
        display: inline-flex;
        gap: 8px;
        align-items: center;
        padding: 12px 28px;
        border: 1px solid transparent;
        border-radius: 999px;
        font-size: 15px;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background-color 0.2s ease,
            border-color 0.2s ease;
    }

    .nf-btn svg {
        width: 17px;
        height: 17px;
    }

    .nf-btn:hover {
        transform: translateY(-2px);
    }

    .nf-btn:active {
        transform: translateY(0);
    }

    .nf-btn:focus-visible {
        outline: 2px solid #01beff;
        outline-offset: 3px;
    }

    .nf-btn-primary {
        color: #ffffff;
        background: linear-gradient(135deg, #01beff 0%, #00d2b4 100%);
        box-shadow: 0 8px 24px rgba(1, 190, 255, 0.35);
    }

    .nf-btn-primary:hover {
        box-shadow: 0 12px 32px rgba(1, 190, 255, 0.5);
    }

    .nf-btn-ghost {
        color: var(--nf-text-1);
        font-family: inherit;
        background: var(--nf-btn-ghost-bg);
        border-color: var(--nf-btn-ghost-border);
    }

    .nf-btn-ghost:hover {
        background: var(--nf-btn-ghost-hover);
    }

    /* ---------------- 无障碍：减弱动效 ---------------- */
    @media (prefers-reduced-motion: reduce) {
        .nf-scene,
        .nf-scene * {
            animation: none !important;
            transition: none !important;
        }

        .nf-meteor {
            display: none;
        }
    }
</style>
