# BackTop 返回顶部组件
> 该组件一个用于长页面，滑动一定距离后，出现返回顶部按钮，方便快速返回顶部的场景。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [backTop组件](https://uiadmin.net/uview-plus/components/backTop.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-back-top :scroll-top="scrollTop"></hy-back-top>
<!-- 单个组件引入 -->
<HyBackTop :scroll-top="scrollTop"></HyBackTop>
```
```ts
import { HyBackTop } from "hy-app";
import { onPageScroll } from '@dcloudio/uni-app';

// 创建响应式数据 scrollTop  
const scrollTop = ref(0);

// onPageScroll 方法来更新 scrollTop 的值  
onPageScroll((e) => {
    scrollTop.value = e.scrollTop;
});
```

## 改变返回顶部按钮的出现时机
- 可以通过`top`参数，修改页面滚动多少距离时，出现返回顶部的按钮
```html
<template>
    <hy-back-top :scroll-top="scrollTop" top="600"></hy-back-top>
</template>
```

## 自定义返回顶部的图标和提示
- 通过`icon`修改返回顶部按钮的图标，可以是华悦组件内置的图标，或者图片路径
- 通过`text`参数修改返回顶部按钮的文字提示信息，如果需要修改文字的颜色和大小，可以通过customStyle参数
```html
<template>
    <hy-back-top :scroll-top="scrollTop" icon="arrow-up" text="返回"></hy-back-top>
</template>
```

## API

| 参数          | 说明                       | 类型                   | 默认值                                   |
|-------------|--------------------------|----------------------|---------------------------------------|
| mode        | 按钮形状                     | `circle` \| `square` | circle                                |
| icon        | 图标，详见[图标Api](./icon#api) | `string`             | IconConfig.DOWNLOAD                   |
| text        | 返回顶部按钮的提示文字              | `string`             | -                                     |
| duration    | 返回顶部过程中的过渡时间，单位ms        | `number`             | 500                                   |
| scrollTop   | 页面的滚动距离                  | `number`             | 0                                     |
| top         | 滚动条滑动多少距离时显示，单位px        | `number` \| `string` | 400                                   |
| bottom      | 返回按钮位置到屏幕底部的距离，单位px      | `number` \| `string` | 100                                   |
| right       | 返回按钮位置到屏幕右边的距离，单位px      | `number` \| `string` | 20                                    |
| z-index     | 返回顶部按钮的层级                | `number`             | 888                                   |
| customStyle | 按钮外层的自定义样式               | `CSSProperties`      | \{transform: "rotate(180deg)"\}       |

## Events

| 事件名   | 说明   | 回调参数 |
|-------|------|------|
| click | 点击按钮 | -    |

## Slots

| 插槽名     | 说明    | 接收值 |
|---------|-------|-----|
| default | 自定义内容 | -   |


<demo-model url="pages/components/backTop/backTop"></demo-model>