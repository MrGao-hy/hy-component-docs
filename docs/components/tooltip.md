# Tooltip 长按提示组件
> Tooltip组件主要用于长按操作，类似微信的长按气泡

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [tooltip组件](https://uiadmin.net/uview-plus/components/tooltip.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例
```html
<!-- 全局使用 -->
<hy-tooltip text="复制内容"></hy-tooltip>
<!-- 单个组件引入 -->
<HyTooltip text="复制内容"></HyTooltip>
```
```ts
import { HyTooltip } from "hy-app"
```

## 下方显示
```html
<template>
    <hy-tooltip text="复制内容" direction="bottom"></hy-tooltip>
</template>
```

## 高亮选中文本背景色
```html
<template>
    <hy-tooltip text="复制" bgColor="#e3e4e6"></hy-tooltip>
</template>
```

## 扩展按钮
```html
<template>
    <hy-tooltip text="复制" :buttons="['扩展']"></hy-tooltip>
</template>
```

## API

| 参数        | 说明                       | 类型                   | 默认值         |
|-----------|--------------------------|----------------------|-------------|
| text      | 需要显示的提示文字                | `string`             | -           |
| copyText  | 点击复制按钮时，复制的文本，为空则使用text值 | `string`             | -           |
| size      | 文本大小                     | `string` \| `number` | 14          |
| color     | 字体颜色                     | `string`             | #606266     |
| bgColor   | 弹出提示框时，文本的背景色            | `string`             | transparent |
| direction | 弹出提示的方向，top-上方，bottom-下方 | `top` \| `bottom`    | top         |
| zIndex    | 弹出提示的z-index             | `number`             | 10071       |
| showCopy  | 是否显示复制按钮                 | `boolean`            | true        |
| buttons   | 扩展的按钮组                   | `array`              | -           |
| overlay   | 是否显示透明遮罩以防止触摸穿透          | `boolean`            | true        |
| showToast | 是否显示复制成功或者失败的toast       | `boolean`            | true        |

## Events

| 事件名   | 说明     | 回调参数           |
|-------|--------|----------------|
| click | 点击触发事件 | index：被点击按钮的索引 |