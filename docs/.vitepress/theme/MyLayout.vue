<template>
    <Layout>
        <!-- 文档下面的评论 -->
        <template #doc-after>
            <div id="gitalk-container"></div>
        </template>
        <!-- 侧边导航栏，用来放广告位的 -->
        <template #sidebar-nav-before>
            <AdvertisingPosition />
        </template>

        <!--    <Analytics />-->
        <!-- 头部logo的后面插槽 -->
        <template #nav-bar-title-after>
            <DocVersion />
        </template>
        <!-- 头部导航栏内容左侧 -->
        <template #layout-top>
            <MouseFollower />
            <MouseClick />
        </template>
        <template #doc-footer-before>
            <BackTop />
        </template>
        <template #not-found>
            <NoPage />
        </template>
    </Layout>
</template>

<script lang="ts" setup>
    import DefaultTheme from 'vitepress/theme';
    import { inject } from '@vercel/analytics';

    const { Layout } = DefaultTheme;
    import { watch, nextTick, onMounted, onUnmounted } from 'vue';
    import { useRouter } from 'vitepress';
    import createGitalk from '../gitalk';

    const { route } = useRouter();
    // 使用@vercel/analytics监听完整访客量
    inject();

    let observer: IntersectionObserver | null = null;

    const renderGitalk = () => {
        const container = document.getElementById('gitalk-container');
        if (container) {
            container.innerHTML = '';
            createGitalk(route.path);
        }
    };

    const initGitalk = () => {
        if (typeof window === 'undefined') return;
        const container = document.getElementById('gitalk-container');
        if (!container) return;

        // 懒加载：评论区接近视口才加载 gitalk（约 100kB+），否则等滚动触发
        if (container.getBoundingClientRect().top < window.innerHeight + 200) {
            renderGitalk();
            return;
        }

        observer?.disconnect();
        observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    observer?.disconnect();
                    observer = null;
                    renderGitalk();
                }
            },
            { rootMargin: '200px' }
        );
        observer.observe(container);
    };

    onMounted(() => {
        initGitalk();
        watch(
            () => route.path,
            () => {
                nextTick(() => {
                    initGitalk();
                });
            }
        );
    });

    onUnmounted(() => {
        observer?.disconnect();
        observer = null;
    });
</script>
