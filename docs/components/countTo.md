# CountTo 数字滚动组件
> 该组件一般用于需要滚动数字到某一个值的场景，目标要求是一个递增的值。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [countTo组件](https://uiadmin.net/uview-plus/components/countTo.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-count-to time="3600 * 30 * 1000"></hy-count-to>
<!-- 单个组件引入 -->
<HyCountTo  time="3600 * 30 * 1000"></HyButton>
```
```ts
import { HyCountTo } from "hy-app"
```

## 显示小数点
- 通过设置`decimals`来设置几位小数点
```html
<template>
    <hy-count-to :endVal="1542221" :decimals="2"></hy-count-to>
</template>
```

## 千分位分隔符
- 通过设置`separator`来设置千分位分隔符
```html
<template>
    <hy-count-to :endVal="1542221" separator=","></hy-count-to>
</template>
```


## 设置滚动时间
- 通过设置`duration`来设置滚动时长
```html
<template>
    <hy-count-to :endVal="1542221" :duration="10000"></hy-count-to>
</template>
```


## 设置字体
- 通过设置`bold`把字体变粗
- 通过设置`fontSize`设置字体大小
- 通过设置`color`设置字体颜色
```html
<template>
    <hy-count-to :endVal="154" bold fontSize="40" color="#31E749"></hy-count-to>
</template>
```

## 手动控制
:::code-group
```html [vue]
<hy-count-to
        ref="countToRef"
        :endVal="1542222"
        :duration="10000"
        :autoplay="false"
></hy-count-to>
<view class="hy-flex">
    <hy-button text="开始" type="success" @click="start"></hy-button>
    <hy-button text="暂停" type="error" @click="pause"></hy-button>
    <hy-button text="继续" type="info" @click="resume"></hy-button>
</view>
```

```ts [.ts]
import HyCountTo from "hy-app/components/hy-count-to/hy-count-to.vue";
import { ref } from "vue";


const countToRef = ref<InstanceType<typeof HyCountTo>>();

const start = () => {
  if (countToRef.value) {
      countToRef.value.start();
  }
};

const pause = () => {
  if (countToRef.value) {
      countToRef.value.pause();
  }
};

const resume = () => {
  if (countToRef.value) {
      countToRef.value.resume();
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

| 参数        | 说明                 | 类型                 | 默认值     |
|-----------|--------------------|--------------------|---------|
| startVal  | 开始值                | `number`           | 0       |
| endVal    | 结束值                | `number`           | 0       |
| duration  | 滚动过程所需的时间，单位ms     | `number`           | 2000    |
| autoplay  | 是否自动开始滚动           | `boolean`          | true    |
| decimals  | 要显示的小数位数，见上方说明     | `number`           | 0       |
| useEasing | 滚动结束时，是否缓动结尾，见上方说明 | `boolean`          | true    |
| decimal   | 十进制分割              | `string`           | ,       |
| color     | 字体颜色               | `string`           | #606266 |
| fontSize  | 字体大小，单位px          | `string`\|`number` | 22      |
| bold      | 字体是否加粗             | `boolean`          | false   |
| separator | 千位分隔符，见上方说明        | `string`           | -       |

## Events

| 事件名 | 说明          | 回调参数 |
|-----|-------------|------|
| end | 数值滚动到目标值时触发 | -    |

## Methods

| 事件名     | 说明                      |
|---------|-------------------------|
| start   | 开始滚动                    |
| pause   | 暂停滚动                    |
| resume  | 从暂停时的值开始滚动              |
| reStart | 暂定状态，重新再开始滚动；或者滚动状态下，暂停 |

[^1] `DD`-日，`HH`-时，`mm`-分，`ss`-秒，`SSS`-毫秒

<demo-model url="pages-design/countTo/countTo"></demo-model>