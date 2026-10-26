<!--
    AdvertisingPosition：侧边栏广告位（赞助商卡片）
    用途：基于 VitePress 内置 VPSponsors 渲染赞助商展示位，并适配明暗主题底色。
    挂载：MyLayout 的 #sidebar-nav-before 插槽（侧边栏顶部）。
    维护：更换/新增赞助商只需修改下方 data 数组（name / url / img）。
-->
<script setup lang="ts">
    import { VPSponsors } from 'vitepress/theme';

    const data = [
        {
            tier: '成为赞助商',
            size: 'mini',
            items: [
                {
                    name: 'NuxtLabs',
                    url: 'https://nuxtlabs.com',
                    img: '/svg/nuxtlabs.svg',
                },
            ],
        },
    ];
</script>

<template>
    <VPSponsors mode="normal" :data="data" />
</template>

<style scoped lang="scss">
    :root .VPSponsors {
        --vp-c-bg-soft: #dddde34c;
    }
    .dark .VPSponsors {
        --vp-c-bg-soft: #202127;
    }
</style>
