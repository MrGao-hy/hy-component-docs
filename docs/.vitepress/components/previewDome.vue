<template>
  <a-flex wrap="wrap" gap="large">
    <a-card hoverable style="width: 240px">
      <img :src="h5QrCode" />
      <template #actions>
        <div class="platform-name">
          华玥UI（H5）
          <p class="platform-tips">微信或浏览器扫码</p>
        </div>
      </template>
    </a-card>
    <a-card hoverable style="width: 240px">
      <img :src="miniQrCode" />
      <template #actions>
        <div class="platform-name">
          华玥UI（小程序）
          <p class="platform-tips">小程序二维码</p>
        </div>
      </template>
    </a-card>
  </a-flex>
</template>

<script setup lang="ts">
import {Flex as AFlex, Card as ACard} from "ant-design-vue";

import h5QrCode from "/images/h5_qrcode.png"
import miniQrCode from "/images/mini_qrcode.png"
</script>

<style scoped lang="scss">
img {
  width: 130px;
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