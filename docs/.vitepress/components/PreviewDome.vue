<!--
    PreviewDome：多平台预览二维码卡片
    用途：以网格卡片形式展示华玥UI 各端（H5 / 微信、支付宝、抖音小程序 / 安卓 / 鸿蒙）
          的在线预览或下载二维码，用户扫码即可体验或下载对应客户端。
    用法：已在 theme/index.ts 全局注册，文档中直接写 <PreviewDome /> 即可。
    维护：新增平台只需在下方 platforms 数组中追加一项（name / tip / qr）。
-->
<template>
    <div class="preview-grid">
        <div v-for="platform in platforms" :key="platform.name" class="preview-card">
            <div class="preview-qr">
                <img :src="platform.qr" :alt="`${platform.name}二维码`" loading="lazy" />
            </div>
            <div class="preview-meta">
                <p class="platform-name">{{ platform.name }}</p>
                <p class="platform-tips">{{ platform.tip }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    // 各平台在线预览入口：新增平台只需在数组中追加一项
    // TODO: 抖音小程序暂缺专属二维码，临时复用安卓下载码
    const platforms = [
        { name: '华玥UI（H5）', tip: '请使用微信或浏览器扫码', qr: '/images/qrcode/h5_qrcode.png' },
        {
            name: '华玥UI（微信小程序）',
            tip: '请使用微信扫描二维码',
            qr: '/images/qrcode/weixin_qrcode.png',
        },
        {
            name: '华玥UI（支付宝小程序）',
            tip: '请使用支付宝扫描二维码',
            qr: '/images/qrcode/ali_qrcode.jpg',
        },
        {
            name: '华玥UI（安卓）',
            tip: '请使用微信或浏览器扫码下载',
            qr: '/images/qrcode/app_qrcode.png',
        },
        {
            name: '华玥UI（鸿蒙）',
            tip: '请使用微信或浏览器扫码下载',
            qr: '/images/qrcode/harmonyOS_qrcode.png',
        },
        {
            name: '华玥UI（抖音小程序）',
            tip: '请使用抖音扫描二维码',
            qr: '/images/qrcode/app_qrcode.png',
        },
    ];
</script>

<style scoped lang="scss">
    .preview-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 20px;
        margin: 24px 0;
    }

    .preview-card {
        display: flex;
        flex-direction: column;
        max-width: 240px;
        padding: 16px 16px 14px;
        text-align: center;
        background-color: var(--vp-c-bg-soft);
        border: 1px solid var(--vp-c-divider);
        border-radius: 12px;
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;

        &:hover {
            transform: translateY(-4px);
            border-color: rgba(1, 190, 255, 0.5);
            box-shadow: 0 12px 32px rgba(1, 190, 255, 0.15);
        }
    }

    /* 白底容器保证二维码在明暗主题下都有足够扫码对比度 */
    .preview-qr {
        display: flex;
        justify-content: center;
        padding-bottom: 12px;

        img {
            width: 130px;
            height: 130px;
            padding: 6px;
            background-color: #ffffff;
            border-radius: 8px;
        }
    }

    .preview-meta {
        margin-top: auto;
        padding-top: 12px;
        border-top: 1px dashed var(--vp-c-divider);
    }

    .platform-name {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--vp-c-text-1);
    }

    .platform-tips {
        margin: 6px 0 0;
        font-size: 12px;
        color: var(--vp-c-text-2);
    }

    @media (prefers-reduced-motion: reduce) {
        .preview-card,
        .preview-card:hover {
            transition: none;
            transform: none;
        }
    }
</style>
