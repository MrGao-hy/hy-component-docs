# Transition 动画组件
> 该组件用于组件的动画过渡效果。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [transition组件](https://uiadmin.net/uview-plus/components/transition.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-transition :show="show">
    <view class="transition">我是内容</view>
</hy-transition>
<!-- 单个组件引入 -->
<HyTransition :show="show">
    <view class="transition">我是内容</view>
</HyTransition>
```
```ts
import { HyTransition } from "hy-app";
import { ref } from 'vue';

const show = ref(true);
```

## 动画模式
> 通过设置`mode`
> - `fade` 淡入
> - `fade-up` 上滑淡入
> - `fade-down` 下滑淡入
> - `fade-left` 左滑淡入
> - `fade-right` 右滑淡入
> - `slide-up` 上滑进入
> - `slide-down` 下滑进入
> - `slide-left` 左滑进入
> - `slide-right` 右滑进入
> - `zoom-in` 缩放
> - `zoom-out` 缩放

```html
<template>
    <hy-transition :show="show" mode="zoom-in"></hy-transition>
</template>
```

## 动画过渡
> 通过设置`timingFunction`
> - `linear`：过渡效果以相同的速度从开始到结束，相当于 cubic-bezier(0,0,1,1)。
> - `ease`：过渡效果以慢速开始，然后加速，最后再慢速结束，是默认值，相当于 cubic-bezier(0.25,0.1,0.25,1)。
> - `ease-in`：过渡效果以慢速开始，然后逐渐加速，相当于 cubic-bezier(0.42,0,1,1)。
> - `ease-out`：过渡效果以快速开始，然后逐渐减速，相当于 cubic-bezier(0,0,0.58,1)。
> - `ease-in-out`：过渡效果以慢速开始，加速到中间，然后减速结束，相当于 cubic-bezier(0.42,0,0.58,1)。

```html
<template>
    <hy-transition :show="show" timingFunction="linear"></hy-transition>
</template>
```

## API

| 参数             | 说明              | 类型              | 默认值      |
|----------------|-----------------|-----------------|----------|
| show           | 是否展示组件          | `boolean`       | false    |
| mode           | 使用的动画模式，见上方说明   | `string`        | fade     |
| duration       | 动画的执行时间，单位ms    | `number`        | 300      |
| timingFunction | 使用的动画过渡函数，见上方说明 | `string`        | ease-out |
| customStyle    | 定义需要用到的外部样式     | `CSSProperties` | -        |

## Events

| 事件名         | 说明    | 回调参数 |
|-------------|-------|------|
| beforeEnter | 进入前触发 | -    |
| enter       | 进入中触发 | -    |
| afterEnter  | 进入后触发 | -    |
| beforeLeave | 离开前触发 | -    |
| leave       | 离开中触发 | -    |
| afterLeave  | 离开后触发 | -    |

## slots

| 插槽名     | 说明 | 接收值 |
|---------|----|-----|
| default | -  | -   |


<demo-model url="pages/components/transition/transition"></demo-model>