# 空状态组件
> 该组件内部实现以uni-app的基础button组件为基础，进行二次封装

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [button组件](https://uiadmin.net/uview-plus/components/button.html) 的代码实现。
:::

## 平台差异说明

| APP | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-button text="月落"></hy-button>
<!-- 单个组件引入 -->
<HyButton type="primary">按钮</HyButton>
```
```ts
import { HyButton } from "hfyk-app"
```

## API

| 参数        | 说明           | 类型             | 默认值 | 可选值 |
| ----------- | -------------- | ---------------- |-----|-----|
| show        | 是否显示空状态 | `boolean`          | -   | -   |

## Events

| 事件名   | 说明 | 回调参数 |
|-------|----|------|
| click | -  | -    |
