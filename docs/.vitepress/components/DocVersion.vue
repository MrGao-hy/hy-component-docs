<template>
    <div class="tag" v-if="version">{{ version }}</div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    const version = ref('');

    // 模块级缓存：SPA 路由切换时共享同一次请求结果，避免重复请求
    let versionPromise: Promise<string> | null = null;
    const getLatestVer = () => {
        versionPromise ??= fetch('https://registry.npmjs.org/@hy-app/ui/latest')
            .then((r) => r.json())
            .then((d) => d.version as string)
            .catch(() => ''); // 网络异常时静默降级，不展示版本号
        return versionPromise;
    };

    // 仅在客户端请求，避免 SSR 构建期间发起网络请求导致构建失败
    onMounted(async () => {
        version.value = await getLatestVer();
    });
</script>

<style lang="scss" scoped>
    .tag {
        margin-left: 8px;
        padding: 0 4px;
        height: 20px;
        line-height: 20px;
        border-radius: 4px;
        border: 1px solid rgb(64, 158, 255);
        font-size: 12px;
        color: rgb(64, 158, 255);
    }
</style>
