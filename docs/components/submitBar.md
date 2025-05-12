# SubmitBar 提交订单栏组件
> 该布局一般用于商品详情页底部引导用户快速购买商品的场景，开发者可以根据自己的需求修改布局结构和样式， 该组件依赖于uview-plus框架，请在安装uview-plus的情况下使用。

::: tip 温馨提示
此组件用于商城业务组件，可以根据自己需求自定义
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-submit-bar :menus="menus"></hy-submit-bar>
<!-- 单个组件引入 -->
<HySubmitBar :menus="menus"></HySubmitBar>
```
```ts
import { HySubmitBar } from "hy-app"

const menus = reactive([
    { icon: IconConfig.HOME, text: "首页" },
    { icon: IconConfig.CUSTOMER_SERVICE, text: "客服" },
    {
        icon: IconConfig.SHOPPING_CART,
        text: "购物车",
        badge: { value: 10 },
    },
]);
```

## 隐藏按钮
- 通过设置`show-left-btn`隐藏左边按钮
- 通过设置`show-right-btn`隐藏右边按钮
```html
<!-- 隐藏左边按钮 -->
<hy-submit-bar :menus="menus" :show-left-btn="false"></hy-submit-bar>
<!-- 隐藏右边按钮 -->
<hy-submit-bar :menus="menus" :show-right-btn="false"></hy-submit-bar>
```

## 定义按钮形式
- 通过设置`textColor`按钮文字颜色
- 通过设置`leftBtnText`左边按钮文本
- 通过设置`rightBtnText`右边按钮文本
- 通过设置`leftBtnColor`左边按钮颜色
- 通过设置`rightBtnColor`右边按钮颜色
- 通过设置`shape`按钮形状
  - `circle`半圆
  - `square`方形
```html
<!-- 隐藏左边按钮 -->
<hy-submit-bar :menus="menus" textColor="#FFFFFF" left-btn-text="购买" left-btn-color="linear-gradient(to right, #4bfcfc, #FB39F5)" shape="circle"></hy-submit-bar>
<!-- 隐藏右边按钮 -->
<hy-submit-bar :menus="menus" textColor="#FFFFFF" right-btn-text="下单" left-btn-color="linear-gradient(to right, #23ee2c, #FB39F5)" shape="square"></hy-submit-bar>
```

## 右边icon内容设置
- 通过设置`menus`里的内容值定义icon图标、文字和徽标值（样式）
  - `icon`库里图标
  - `text`文本内容
  - `badge`徽标集合，使用api查看[徽标数API](./badge.md#api)
- 通过设置`iconColor`icon颜色
- 通过设置`iconLabelColor`隐藏右边按钮
```html
<!-- 隐藏左边按钮 -->
<hy-submit-bar :menus="menus" :show-left-btn="false"></hy-submit-bar>
<!-- 隐藏右边按钮 -->
<hy-submit-bar :menus="menus" :show-right-btn="false"></hy-submit-bar>
```
```ts [index.ts]
import { HySubmitBar } from "hy-app"

const menus = reactive([
    { icon: IconConfig.HOME, text: "首页" },
    { icon: IconConfig.CUSTOMER_SERVICE, text: "客服" },
    {
        icon: IconConfig.SHOPPING_CART,
        text: "购物车",
        badge: { value: 10, type: 'success' },
    },
]);
```


## API

| 参数             | 说明              | 类型                 | 默认值       |
|----------------|-----------------|--------------------|-----------|
| menus          | 左边菜单栏           | `array`            | -         |
| fixed          | 绝对定位            | `boolean`          | true      |
| border         | 是否显示边框          | `boolean`          | true      |
| leftLoading    | 加载左边按钮loading   | `boolean`          | false     |
| rightLoading   | 加载右边按钮loading   | `boolean`          | false     |
| iconColor      | 左边icon的颜色       | `string`           | -         |
| iconLabelColor | 左边文字的颜色         | `string`           | #909193FF |
| textColor      | 右边按钮文字颜色        | `string`           | -         |
| showLeftBtn    | 显示左边按钮          | `boolean`          | true      |
| showRightBtn   | 显示右边按钮          | `boolean`          | true      |
| leftBtnText    | 左边按钮文字          | `string`           | 加入购物车     |
| rightBtnText   | 右边按钮文字          | `string`           | 立即购买      |
| leftBtnColor   | 左边按钮颜色，支持渐变色    | `string`           | #ed3f14   |
| rightBtnColor  | 有边按钮颜色，支持渐变色    | `string`           | #ff7900   |
| shape          | 按钮的形状           | `circle`\|`square` | circle    |
| warn           | 按钮点击节流时长(单位：ms) | `number`           | 300       |
| customStyle    | 定义需要用到的外部样式     | `CSSProperties`    | -         |

## Menus
| 参数    | 说明                               | 类型           | 默认值 |
|-------|----------------------------------|--------------|-----|
| icon  | icon图标                           | `string`     | -   |
| text  | 文本                               | `string`     | -   |
| badge | 徽标值，详情查看[徽标数API](./badge.md#api) | `BadgeProps` | -   |

## Events

| 事件名       | 说明     | 回调参数        |
|-----------|--------|-------------|
| click     | 点击按钮   | index: 点击索引 |
| menuClick | 点击左边图标 | index: 点击索引 |

## Slots

| 插槽名   | 说明      | 接收值 |
|-------|---------|-----|
| left  | 左边自定义插槽 | -   |
| right | 右边自定义插槽 | -   |


<demo-model url="pages/components/submitBar/submitBar"></demo-model>