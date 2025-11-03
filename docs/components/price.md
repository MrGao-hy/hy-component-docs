# Price 金额组件
> 业务组件,突出金额小数点前大，小数点后小

::: tip

:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |


## 基本使用示例
```html
<!-- 全局使用 -->
<hy-price :text="price"></hy-price>
<!-- 单个组件引入 -->
<HyPrice :text="price"></HyPrice>
```
```ts
import { HyPrice } from "hy-app"

const price = 10
```

## 设置颜色
- 通过设置`color`制定文本颜色
```html
<template>
    <hy-price :text="price" color="#9CC53D"></hy-price>
</template>
```

## 设置大小
- 通过设置`size`制定文本大小
```html
<template>
    <hy-price :text="price" :size="20"></hy-price>
</template>
```

## 保留6位小数
- 通过设置`num`设置小数点后几位
```html
<template>
    <hy-price :text="price" :num="6"></hy-price>
</template>
```

## 设置前缀单位
- 通过设置`symbol`制定金额前缀单位
```html
<template>
    <hy-price :text="price" symbol="$"></hy-price>
</template>
```

## 设置粗细
- 通过设置`weight`制定文本粗细
```html
<template>
    <hy-price :text="price" :weight="900"></hy-price>
</template>
```

## 设置倾斜
- 通过设置`slant`制定文本是否倾斜
```html
<template>
    <hy-price :text="price" :slant="true"></hy-price>
</template>
```

## 设置比例1、1.2、1.6
- 通过设置`ratio`设置中间文字突出大小
```html
<template>
    <hy-price text="10.22" :ratio="1"></hy-price>
    <hy-price text="10.22" :ratio="1.2"></hy-price>
    <hy-price text="10.22"></hy-price>
    <hy-price text="10.22" :ratio="1.6"></hy-price>
</template>
```

## API

| 参数          | 说明           | 类型                   | 默认值     |
|-------------|--------------|----------------------|---------|
| text        | 金额值          | `string` \| `number` | 0.00    |
| symbol      | 金额符号         | `string`             | ￥       |
| ratio       | 比例大小         | `number`             | 1.4     |
| num         | 保留小数点后几位数    | `number`             | 2       |
| color       | 字体颜色         | `string`             | #FE3232 |
| size        | 字体大小         | `string` \| `number` | 12      |
| weight      | 字体粗细         | `number`             | 500     |
| slant       | 是否倾斜         | `boolean`            | false   |
| customStyle | 自定义需要用到的外部样式 | `CSSProperties`      | -       |
| customClass | 自定义外部类名      | `string`             | -       |

## Events

| 事件名       | 说明   | 回调参数      |
|-----------|------|-----------|
| click     | 点击金额 | text: 金额值 |

<demo-model url="pages/components/price/price"></demo-model>
