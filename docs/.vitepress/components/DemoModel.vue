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
          <img :width="24" :src="isDark ? logoDark : logoLight"></img>
          <img :width="18" :src="isDark ? batteryDark: batteryLight"></img>
        </div>
      </div>
      <!--  头部  -->


      <!--  主体  -->
      <div class="model-content">
        <iframe id="demo-modal" ref="h5Iframe" :src="href" class="iframe" frameborder="0" scrolling="auto" style="touch-action: none; overflow: auto;"></iframe>
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
import {computed, nextTick, onMounted, ref, watch} from "vue";
import logoDark from "/images/hy_logo_dark.png";
import logoLight from "/images/hy_logo_light.png";
import batteryDark from "/images/battery_dark.png";
import batteryLight from "/images/battery_light.png";
import { useData } from 'vitepress'

interface IProps {
  url: string;
  prefix?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  url: "/",
  prefix: "/web/#"
})
const { isDark } = useData()
const baseUrl = ref(import.meta.env.DEV ? 'http://localhost:5173/#/' : 'https://h5.hy-design-uni.top/#/');
const href = computed(() => {
  return props.url.indexOf('http') === 0 ? props.url : `${baseUrl.value}${props.url}`;
})
const h5Iframe = ref(null);
const nowTime = computed(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}`;
})

// 传递是否暗黑主题值
watch(
    () => isDark.value,
    (newValue) => {
      if(h5Iframe.value) {
        h5Iframe.value.contentWindow.postMessage(newValue, "*")
      }
    }
)

onMounted(() => {
  nextTick(() => {
    if(h5Iframe.value) {
      h5Iframe.value.onload = () => {
        h5Iframe.value.contentWindow.postMessage(isDark.value, "*")


      }

      // 监听 PC 端 pointerdown
      window.addEventListener("pointerdown", (e) => {
        // 只处理 iframe 区域
        const rect = h5Iframe.value.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right ||
            e.clientY < rect.top || e.clientY > rect.bottom) {
          return;
        }

        // 计算 iframe 内部坐标
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 发送伪造 touch 事件到 iframe
        h5Iframe.value.contentWindow?.postMessage({
          type: "SIMULATED_TOUCH",
          event: {
            type: "touchstart",
            clientX: x,
            clientY: y
          }
        }, "*");
    })
    }
  })
})

</script>

<style scoped lang="scss">
:deep(.aside-curtain) {
  display: none;
}
.Helper{
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
}


.littleHelper{
  font-size: 42px;
  background-color: var(--vp-sidebar-bg-color);
  border-radius: 50%;
  margin: 2px;
  //box-shadow: 0 0 10px 5px #0000000d;
  line-height: 1;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-model {
  --phone-aspect-ratio: 19.5 / 9;
  --phone-header-height: 27px;
  --phone-footer-height: 20px;
  font-size: 16px;
  background-color: var(--vp-sidebar-bg-color);
  width: 390px;
  position: fixed;
  z-index: 10086;
  right: 10px;
  box-sizing: border-box;
  overflow-y: auto;
  background-repeat: no-repeat;
  background-size: 100%;
  box-shadow: var(--vp-shadow-5);
  border-radius: 30px;

  /* 头部样式 */
  .status-bar {
    width: 100%;
    height: 27px;
    background-color: var(--vp-sidebar-bg-color);
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
    background-color: var(--vp-sidebar-bg-color);
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

@media only screen and (max-device-width: 480px) {
  .demo-model {
    display: none;
  }
  .Helper{
    display: none;
  }
}

@media screen and (width < 1069px) {
  .demo-model {
    display: none;
  }
  .Helper{
    display: none;
  }
}

@media screen and (min-width: 1069px) and (max-width: 1280px) {
  .demo-model {
    width: 300px;
    height: calc(300px * var(--phone-aspect-ratio) + var(--phone-header-height) + var(--phone-footer-height));
    bottom: calc(50vh - 32px - (300px * var(--phone-aspect-ratio) + var(--phone-header-height) + var(--phone-footer-height)) / 2);
  }
}

@media screen and (min-width: 1281px) and (max-width: 1366px) {
  .demo-model {
    width: 320px;
    height: calc(320px * var(--phone-aspect-ratio) + var(--phone-header-height) + var(--phone-footer-height));
    bottom: calc(50vh - 32px - (320px * var(--phone-aspect-ratio) + var(--phone-header-height) + var(--phone-footer-height)) / 2);
  }
}

@media screen and (min-width: 1367px) and (max-width: 1500px) {
  .demo-model {
    width: 300px;
    height: calc(300px * var(--phone-aspect-ratio) + var(--phone-header-height) + var(--phone-footer-height));
    bottom: calc(50vh - 32px - (300px * var(--phone-aspect-ratio) + var(--phone-header-height) + var(--phone-footer-height)) / 2);
  }
}

@media screen and (min-width: 1501px) and (max-width: 1920px) {
  .demo-model {
    width: 280px;
    height: calc(280px * var(--phone-aspect-ratio) + var(--phone-header-height) + var(--phone-footer-height));
    bottom: calc(50vh - 32px - (280px * var(--phone-aspect-ratio) + var(--phone-header-height) + var(--phone-footer-height)) / 2);
  }
}

@media screen and (min-width: 1921px) {
  .demo-model {
    width: 310px;
    height: calc(310px * var(--phone-aspect-ratio) + var(--phone-header-height) + var(--phone-footer-height));
    bottom: calc((100vh - 32px - (310px * var(--phone-aspect-ratio) + var(--phone-header-height) + var(--phone-footer-height)) - 3.6rem) / 2 + 3.6rem);
  }
}
</style>
