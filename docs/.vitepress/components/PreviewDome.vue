<template>
    <a-flex wrap="wrap" gap="29" justify="center">
        <!-- h5网页 -->
        <a-card hoverable style="width: 210px">
            <img :src="h5QrCode" />
            <template #actions>
                <div class="platform-name">
                    华玥UI（H5）
                    <p class="platform-tips">请使用微信或浏览器扫码</p>
                </div>
            </template>
        </a-card>

        <!-- 微信小程序 -->
        <a-card hoverable style="width: 210px">
            <img :src="weixinQrCode" />
            <template #actions>
                <div class="platform-name">
                    华玥UI（微信小程序）
                    <p class="platform-tips">请使用微信扫描二维码</p>
                </div>
            </template>
        </a-card>

        <!-- 支付宝小程序 -->
        <a-card hoverable style="width: 210px">
            <img :src="aliQrCode" />
            <template #actions>
                <div class="platform-name">
                    华玥UI（支付宝小程序）
                    <p class="platform-tips">请使用支付宝扫描二维码</p>
                </div>
            </template>
        </a-card>

        <!-- App程序 -->
        <a-card hoverable style="width: 210px">
            <img :src="appQrCode" />
            <template #actions>
                <div class="platform-name">
                    华玥UI（安卓）
                    <p class="platform-tips">请使用微信或浏览器扫码下载</p>
                </div>
            </template>
        </a-card>

        <!-- 鸿蒙程序 -->
        <a-card hoverable style="width: 210px">
            <img :src="harmonyQrCode" />
            <template #actions>
                <div class="platform-name">
                    华玥UI（鸿蒙）
                    <p class="platform-tips">请使用微信或浏览器扫码下载</p>
                </div>
            </template>
        </a-card>

        <!-- 抖音小程序 -->
        <a-card hoverable style="width: 210px">
            <img :src="appQrCode" />
            <template #actions>
                <div class="platform-name">
                    华玥UI（抖音小程序）
                    <p class="platform-tips">请使用抖音扫描二维码</p>
                </div>
            </template>
        </a-card>
    </a-flex>
</template>

<script setup lang="ts">
    import { Flex as AFlex, Card as ACard } from 'ant-design-vue';

    const h5QrCode = '/images/qrcode/h5_qrcode.png';
    const weixinQrCode = '/images/qrcode/weixin_qrcode.png';
    const aliQrCode = '/images/qrcode/ali_qrcode.jpg';
    const appQrCode = '/images/qrcode/app_qrcode.png';
    const harmonyQrCode = '/images/qrcode/harmonyOS_qrcode.png';
</script>

<style scoped lang="scss">
    img {
        width: 120px;
        height: 120px;
        margin: 10px auto;
    }
    .ant-flex {
        .ant-card {
            background-color: var(--vp-c-gray-1);
            border: none;

            .platform-name {
                font-size: 16px;
                position: relative;
                color: var(--vp-c-text-1);
            }

            .platform-tips {
                text-align: center;
                margin: auto;
                font-size: 12px;
                color: var(--vp-c-text-2);
            }

            :deep(.ant-card-actions) {
                background-color: var(--vp-c-gray-3);
                border-top: 1px solid var(--vp-c-divider);
            }
        }
    }
</style>
