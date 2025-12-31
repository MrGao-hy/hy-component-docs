# 空状态组件
> 该组件内部实现以uni-app的基础button组件为基础，进行二次封装

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [button组件](https://uiadmin.net/uview-plus/components/button.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-button text="月落"></hy-button>
<!-- 单个组件引入 -->
<HyButton type="primary">按钮</HyButton>
```
```ts
import { HyButton } from "hy-app"
```

## 基本使用示例
- 通过设置``啊啊啊
```html
<template>
    <hy-button text="月落"></hy-button>
</template>
```

## API

| 参数        | 说明           | 类型             | 默认值 |
| ----------- | -------------- | ---------------- |-----|
| show        | 是否显示空状态 | `boolean`          | -   |

## Events

| 事件名   | 说明 | 回调参数 |
|-------|----|------|
| click | -  | -    |

## Methods

| 事件名     | 说明                 | 参数 |
|---------|--------------------|----|
| refresh | 刷新组件状态，通常用于内容高度变化后 | -  |

## Slots

| 插槽名  | 说明 | 接收值 |
|------|----|----|
| default | -  | -  |

`circle`\|`square`
`small`\|`medium`\|`large`
`error`\|`warning`\|`success`\|`primary`\|`info`
`bottom`\|`center`\|`left`\|`right`\|`top`
`row`\|`column`
`surround`\|`bottom`\|`none`

[^1]: `normal`：默认尺寸；`large`：大尺寸； `small`：小尺寸；`mini`：迷你尺寸
[^2]: `error`：#fa3534；`warning`：#ff9900；`success`：#19be6b；`primary`：#2979ff； `info`：#909399；
[^3]: `circle`：两边为半圆；`square`：方形带圆角
[^4]: `row`：横向；`column`：纵向

<demo-model url="pages/components/avatar/avatar"></demo-model>