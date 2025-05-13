<template>
  <a-flex wrap="wrap" gap="large">
    <a-card hoverable style="width: 240px">
      <img src="/public/images/h5_qrcode.png" />
      <template #actions>
        <div class="platform-name">
          华玥UI（H5）
          <p class="platform-tips">微信或浏览器扫码</p>
        </div>
      </template>
    </a-card>
    <a-card hoverable style="width: 240px">
      <img src="/public/images/mini_qrcode.png" />
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
import {Flex as AFlex, Card as ACard} from "ant-design-vue"
</script>

<style scoped lang="scss">
img {
  width: 130px;
  margin: 10px auto;
}
.platform-name {
  font-size: 16px;
  position: relative;
}

.platform-tips {
  text-align: center;
  margin: auto;
  font-size: 12px;
}

</style>