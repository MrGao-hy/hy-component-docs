<template>
  <div>
    <div class="demo-model" v-if="isShow">
      <div class="model-content">
        <iframe id="demo-modal" :src="href" class="iframe" frameborder="0" scrolling="auto"></iframe>
      </div>
    </div>
    <div class="Helper" @click="toggle">
<!--      <img class="littleHelper" src="../../.vitepress/public/common/logo/tnkewo.jpg" alt="">-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '/'
    },
    prefix: {
      type: String,
      default: '/web/#'
    }
  },
  data() {
    return {
      // baseUrl: 'https://tuniao.ahuaaa.cn/#',
      baseUrl: 'https://gxh151.top/hy-ui/#/',
      isShow: true,
    }
  },
  methods: {
    //切换显示隐藏
    toggle() {
      this.isShow = !this.isShow;
    },
  },
  computed: {
    href() {
      // return this.url.indexOf('http') === 0 ? this.url : `${this.baseUrl}${this.url}`;
      console.log(`${this.baseUrl}${this.url}`)
      return this.url.indexOf('http') === 0 ? this.url : `${this.baseUrl}${this.url}`;
    }
  },
  created() {
  }
}
</script>

<style scoped>
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
  /*padding: 31px 15px 25px 15px;*/
  padding: 5px;
}

.model-content {
  box-sizing: border-box;
  height: 100%;
  border-bottom-left-radius: 30px;
}

.iframe {
  height: 100%;
  width: 100%;
  border-radius: 30px;
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
