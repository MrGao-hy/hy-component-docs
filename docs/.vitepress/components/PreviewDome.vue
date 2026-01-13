MouseFollower.vue<template>
  <a-flex wrap="wrap" gap="large" justify="space-around">
    <!-- h5页面 -->
    <a-card hoverable style="width: 210px">
      <img :src="h5QrCode" />
      <template #actions>
        <div class="platform-name">
          华玥UI（H5）
          <p class="platform-tips">请使用微信或浏览器扫码</p>
        </div>
      </template>
    </a-card>

    <!-- 微信页面 -->
    <a-card hoverable style="width: 210px">
      <img :src="weixinQrCode" />
      <template #actions>
        <div class="platform-name">
          华玥UI（微信小程序）
          <p class="platform-tips">请使用微信扫描二维码</p>
        </div>
      </template>
    </a-card>

    <!-- 支付宝页面 -->
    <a-card hoverable style="width: 210px">
      <img :src="aliQrCodeLight" />
      <template #actions>
        <div class="platform-name">
          华玥UI（支付宝小程序）
          <p class="platform-tips">请使用支付宝扫码二维码</p>
        </div>
      </template>
    </a-card>
  </a-flex>
</template>

<script setup lang="ts">
import {Flex as AFlex, Card as ACard} from "ant-design-vue";

import h5QrCode from "/images/h5_qrcode.png"
import weixinQrCode from "/images/weixin_qrcode.png"
import aliQrCodeDark from "/images/ali_qrcode_dark.jpg"
import aliQrCodeLight from "/images/ali_qrcode_light.jpg"
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