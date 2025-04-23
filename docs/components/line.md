# Line 线条组件
> 此组件一般用于显示一根线条，用于分隔内容块，有横向和竖向两种模式，且能设置0.5px线条，使用也很简单。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [line组件](https://uiadmin.net/uview-plus/components/line.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-line></hy-line>
<!-- 单个组件引入 -->
<HyLine></HyLine>
```
```ts
import { HyLine } from "hy-app"
```

## 自定义颜色
```html
<template>
    <hy-line color="#2979ff"></hy-line>
</template>
```

## 自定义线条方向
:::tips 温馨提示
在设置线为竖直时候要么父元素有固定宽度，否则需要给length设置值，解决不显示问题
:::
```html
<template>
    <!--竖向-->
    <hy-line direction="column" length="100"></hy-line>
    <!--横向-->
    <hy-line direction="row"></hy-line>
</template>
```

## 自定义线条长度
```html
<template>
    <hy-line length="50%"></hy-line>
</template>
```

## 虚线
```html
<template>
    <hy-line dashed color="red"></hy-line>
</template>
```

## 线的粗细
```html
<template>
    <!--细线-->
    <hy-line hairline></hy-line>
    <!--粗线-->
    <hy-line :hairline="false"></hy-line>
</template>
```

## API

| 参数          | 说明                                               | 类型                   | 默认值     |
|-------------|--------------------------------------------------|----------------------|---------|
| color       | 线条的颜色                                            | `string`             | #d6d7d9 |
| length      | 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带rpx单位的值等            | `string` \| `number` | 100%    |
| direction   | 线条的方向，row-横向，col-竖向                              | `row` \| 'column'    | row     |
| hairline    | 是否显示空状态                                          | `boolean`            | true    |
| margin      | 线条与上下左右元素的间距，字符串形式，如"30rpx"、"20rpx 30rpx"，默认单位px | `string`             | 0       |
| dashed      | 是否虚线，false-实线，true-虚线                            | `boolean`            | false   |
| customStyle | 定义需要用到的外部样式                                      | `CSSProperties`      | false   |
