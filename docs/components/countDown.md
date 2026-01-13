# CountDown 倒计时组件
> 该组件一般使用于某个活动的截止时间上，通过数字的变化，给用户明确的时间感受，提示用户进行某一个行为操作。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [countDown组件](https://uiadmin.net/uview-plus/components/countDown.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-count-down time="3600 * 30 * 1000"></hy-count-down>
<!-- 单个组件引入 -->
<HyCountDown  time="3600 * 30 * 1000"></HyButton>
```
```ts
import { HyCountDown } from "hy-app"
```

## 自定义格式
- 通过设置`format`来自定义格式
```html
<template>
    <hy-count-down
            :time="30 * 60 * 60 * 1000"
            format="DD天HH时mm分ss秒"
    ></hy-count-down>
</template>
```

## 毫秒级渲染
- 通过设置`millisecond`来自定义格式
- `format`这个值必须设置毫秒级
```html
<template>
    <hy-count-down time="3600 * 30 * 1000" format="HH:mm:ss:SSS" millisecond></hy-count-down>
</template>
```

## 自定义样式
:::code-group 
```html [vue]
<hy-count-down :time="30 * 60 * 60 * 1000" autoStart>
  <template #default="{ record: timeData }">
    <view class="time">
      <view class="time__custom">
        <text class="time__custom__item">{{
          timeData.hours > 10 ? timeData.hours : "0" + timeData.hours
          }}</text>
      </view>
      <text class="time__doc">:</text>
      <view class="time__custom">
        <text class="time__custom__item">{{ timeData.minutes }}</text>
      </view>
      <text class="time__doc">:</text>
      <view class="time__custom">
        <text class="time__custom__item">{{ timeData.seconds }}</text>
      </view>
    </view>
  </template>
</hy-count-down>
```

```scss [.scss]
@import "hy-app/index.scss";
.time {
  display: flex;
  align-items: center;

  &__custom {
    margin-top: 4px;
    width: 22px;
    height: 22px;
    background-color: $hy-primary;
    border-radius: 4px;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;

    &__item {
      color: #fff;
      font-size: 12px;
      text-align: center;
    }
  }

  &__doc {
    color: $hy-primary;
    padding: 0 4px;
  }

  &__item {
    color: #606266;
    font-size: 15px;
    margin-right: 4px;
  }
}
```
:::

## 手动控制
:::code-group
```html [vue]
<hy-count-down
        ref="countDownRef"
        :time="10 * 1000"
        format="ss:SSS"
        :autoStart="false"
        millisecond
>
</hy-count-down>
<view class="hy-flex">
    <hy-button text="重置" type="info" @click="reset"></hy-button>
    <hy-button text="开始" type="success" @click="start"></hy-button>
    <hy-button text="暂停" type="error" @click="pause"></hy-button>
</view>
```

```ts [.ts]
import HyCountDown from "hy-app/components/hy-count-down/hy-count-down.vue";
import { ref } from "vue";


const countDownRef = ref<InstanceType<typeof HyCountDown>>();

const start = () => {
  if (countDownRef.value) {
    countDownRef.value.start();
  }
};

const pause = () => {
  if (countDownRef.value) {
    countDownRef.value.pause();
  }
};

const reset = () => {
  if (countDownRef.value) {
    countDownRef.value.reset();
  }
};
```

```scss [.scss]
.hy-flex {
  display: flex;
  justify-content: space-around;
}
```
:::


## API

| 参数          | 说明         | 类型        | 默认值      |
|-------------|------------|-----------|----------|
| time        | 倒计时时长，单位ms | `number`  | 0        |
| format      | 时间格式[^1]   | `string`  | HH:mm:ss |
| autoStart   | 是否自动开始倒计时  | `boolean` | true     |
| millisecond | 是否展示毫秒倒计时  | `boolean` | false    |

## Events

| 事件名    | 说明           | 回调参数        |
|--------|--------------|-------------|
| change | 过程中，倒计时变化时触发 | time: 剩余的时间 |
| finish | 倒计时结束        | -           |

## Methods

| 事件名   | 说明    |
|-------|-------|
| start | 开始倒计时 |
| pause | 暂停倒计时 |
| reset | 重置倒计时 |

[^1] `DD`-日，`HH`-时，`mm`-分，`ss`-秒，`SSS`-毫秒

<demo-model url="pages-design/countDown/countDown"></demo-model>