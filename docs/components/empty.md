# 空状态组件

::: tip
需要在最外层包裹一层 view，并且 view 有宽度和高度
:::

## 平台差异说明

| APP | H5 | 微信小程序 |
|---|---|----|
|✔| ✔  | ✔     |

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

| 参数        | 说明           | 类型             | 默认值   | 可选值 |
| ----------- | -------------- | ---------------- | -------- | ------ |
| show        | 是否显示空状态 | boolean          | false    | true   |
| imageUrl    | 空状态图片     | string           | -        | -      |
| imageSize   | 图片大小       | string \| number | null     | -      |
| description | 提示文字信息   | string           | 暂无数据 | -      |
| imgTop      | 图片 top 高度  | string \| number | 0        | -      |
