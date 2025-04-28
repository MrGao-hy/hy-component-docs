<template>
  <div>
    <div class="demo-model">
      <div class="peak">
        <div class="sound"></div>
      </div>

      <!--  头部  -->
      <div class="status-bar">
        <div class="status-bar__left">
          <div class="status-bar__left--time">{{ nowTime }}</div>
        </div>
        <div class="status-bar__right">
          <img :width="24" src="/images/hy_logo_light.png"></img>
          <img :width="18" src="/images/battery_level.png"></img>
        </div>
      </div>
      <!--  头部  -->


      <!--  主体  -->
      <div class="model-content">
        <iframe id="demo-modal" :src="href" class="iframe" frameborder="0" scrolling="auto"></iframe>
      </div>
      <!--  主体  -->


      <!--  尾部  -->
      <div class="demo-model__footer">
        <div class="demo-model__footer--line"></div>
      </div>
      <!--  尾部  -->
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {Image} from "ant-design-vue";

interface IProps {
  url: string;
  prefix?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  url: "/",
  prefix: "/web/#"
})
const baseUrl = ref("https://gxh151.top/hy-ui/#/");
const href = computed(() => {
  return props.url.indexOf('http') === 0 ? props.url : `${baseUrl.value}${props.url}`;
})
const nowTime = computed(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}`;
})

</script>

<style scoped lang="scss">
.Helper{
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
}


.littleHelper{
  font-size: 42px;
  background-color: #fff;
  border-radius: 50%;
  margin: 2px;
  box-shadow: 0 0 10px 5px #0000000d;
  line-height: 1;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-model {
  font-size: 16px;
  background-color: #fff;
  width: 390px;
  position: fixed;
  z-index: 10;
  margin: 0;
  /* top: calc(3.6em + 3px); */
  top: calc((100vh - 560px - 3.6rem) / 2 + 3.6rem);
  box-sizing: border-box;
  overflow-y: auto;
  /* background-image: url(/iPhone_model.png); */
  /*background-image: url(/common/iPhone.png);*/
  background-repeat: no-repeat;
  background-size: 100%;
  box-shadow: 0 4px 25px 0 rgba(4, 40, 60, 0.18);
  border-radius: 30px;

  /* 头部样式 */
  .status-bar {
    width: 100%;
    height: 27px;
    background-color: #fff;
    position: absolute;
    z-index: 1;
    padding-top: 3px;
    box-sizing: border-box;

    &__left {
      &--time {
        position: absolute;
        font-size: 12px;
        left: 8%;
      }
    }

    &__right {
      position: absolute;
      width: 25%;
      height: 100%;
      right: 8%;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .peak {
    width: 50%;
    height: 27px;
    border-radius: 0 0 20px 20px;
    background-color: #e9e5f3;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;
    .sound {
      width: 58px;
      height: 6px;
      border-radius: 15px;
      background-color: #555;
      position: absolute;
      left: 50%;
      top: 0%;
      box-shadow: 0 4px 4px #444 inset;
      transform: translate(-50%);
    }
  }

  /* 主体部分 */
  .model-content {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 27px);
    padding-top: 27px;

    .iframe {
      height: 100%;
      width: 100%;
    }
  }

  /* 底部 */
  &__footer {
    background-color: transparent;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    z-index: 1000;
    &--line {
      position: absolute;
      width: 36%;
      height: 7px;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%);
      border-radius: 4px;
      background-color: #000;
    }
  }
}

@media screen and (min-width: 1200px) {
  .demo-model {
    width: 310px;
    height: calc(310px * 143.6 / 70.9);
  }

  .demo-model {
    top: calc((100vh - 110px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
    right: 0;
    margin-right: 0;
  }
}

@media (width<1280px) {
  .demo-model {
    height: calc(310px * 143.6 / 70.9);
    top: calc((100vh - 110px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
    right: 0;
    margin-right: 0;
  }
}
@media only screen and (max-device-width: 480px) {
  /* styles for mobile browsers smaller than 480px; (iPhone) */
  .demo-model {
    display: none;
  }
  .Helper{
    display: none;
  }
}
@media screen and (width<969px) {
  .demo-model {
    display: none;
  }
  .Helper{
    display: none;
  }
}

@media screen and (min-width: 1366px) {
  .demo-model {
    width: 330px;
    height: calc(330px * 2 + 60px);
    top: calc(50vh - 330px);
    right: 0;
    margin-right: 5px;
  }
}

@media screen and (min-width: 1500px) {
  .demo-model {
    width: 310px;
    height: calc(310px * 2 + 100px);
    top: calc((100vh - 310px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
    right: 0;
    margin-right: 66px;
  }
}

@media screen and (min-width: 1920px) {
  .demo-model {
    width: 330px;
    height: calc(330px * 143.6 / 70.9);
    top: calc((100vh - 330px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
    right: 0;
    margin-right: 77px;
  }
}
</style>
