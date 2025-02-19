# 空状态组件

::: tip
需要在最外层包裹一层 view，并且 view 有宽度和高度
:::

## 使用示例

```html
<template>
  <view class="outer">
    <yk-empty></yk-empry>
  </view>
</template>

<style lang="scss" scoped>
.outer {
  width: 100px;
  height: 200px;
}
</style>
```

## API

| 参数        | 说明           | 类型             | 默认值   | 可选值 |
| ----------- | -------------- | ---------------- | -------- | ------ |
| show        | 是否显示空状态 | boolean          | false    | true   |
| imageUrl    | 空状态图片     | string           | -        | -      |
| imageSize   | 图片大小       | string \| number | null     | -      |
| description | 提示文字信息   | string           | 暂无数据 | -      |
| imgTop      | 图片 top 高度  | string \| number | 0        | -      |
