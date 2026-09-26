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
