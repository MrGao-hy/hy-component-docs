# SubmitBar 提交订单栏组件
> SubmitBar 提交订单栏组件是一个用于商城应用的核心功能组件，主要应用于商品详情页底部，提供快捷操作栏以引导用户完成购买流程。组件支持丰富的自定义配置，可根据业务需求灵活调整样式与功能。

::: tip 组件说明
该组件为商城核心业务组件，提供完整的底部操作栏解决方案，支持多平台适配与丰富的交互定制。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 组件特性

- **固定底部**：组件默认固定在页面底部，确保操作入口始终可见
- **自定义样式**：支持按钮颜色、文字、形状等丰富的自定义选项，支持渐变色
- **图标与徽标**：支持左侧菜单图标配置，并可添加徽标提示新消息或商品数量
- **灵活布局**：支持显示/隐藏左右按钮，以及通过插槽自定义内容展示

## 使用场景

- **商品详情页**：底部固定展示价格和购买按钮，方便用户快速下单
- **购物车页面**：底部汇总显示总价和结算按钮，提升购物流程转化率
- **订单确认页**：展示订单总览和提交按钮，引导用户完成交易
- **多商品比较页**：固定底部提供批量操作或购买入口

## :japanese_castle:基本使用示例

::: code-group
```html [模板]
<!-- 全局使用 -->
<hy-submit-bar :menus="menus"></hy-submit-bar>
<!-- 单个组件引入 -->
<HySubmitBar :menus="menus"></HySubmitBar>
```

```ts [脚本]
import { HySubmitBar } from "hy-app"
import { reactive } from "vue"
import { IconConfig } from "hy-app" // 导入图标配置

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
:::

## 隐藏按钮
- 通过设置`show-left-btn`隐藏左边按钮
- 通过设置`show-right-btn`隐藏右边按钮

::: code-group
```html [模板]
<!-- 隐藏左边按钮 -->
<hy-submit-bar :menus="menus" :show-left-btn="false"></hy-submit-bar>
<!-- 隐藏右边按钮 -->
<hy-submit-bar :menus="menus" :show-right-btn="false"></hy-submit-bar>
```

```ts [脚本]
import { HySubmitBar } from "hy-app"
import { reactive } from "vue"
import { IconConfig } from "hy-app"

const menus = reactive([
    { icon: IconConfig.HOME, text: "首页" },
    { icon: IconConfig.CUSTOMER_SERVICE, text: "客服" },
    { icon: IconConfig.SHOPPING_CART, text: "购物车" }
]);
```
:::

## 定义按钮形式
- 通过设置`textColor`按钮文字颜色
- 通过设置`leftBtnText`左边按钮文本
- 通过设置`rightBtnText`右边按钮文本
- 通过设置`leftBtnColor`左边按钮颜色
- 通过设置`rightBtnColor`右边按钮颜色
- 通过设置`shape`按钮形状
  - `circle`半圆
  - `square`方形

::: code-group
```html [模板]
<!-- 自定义按钮样式示例 -->
<hy-submit-bar :menus="menus" textColor="#FFFFFF" left-btn-text="购买" 
  left-btn-color="linear-gradient(to right, #4bfcfc, #FB39F5)" shape="circle"></hy-submit-bar>

<!-- 不同形状按钮示例 -->
<hy-submit-bar :menus="menus" textColor="#FFFFFF" right-btn-text="下单" 
  right-btn-color="linear-gradient(to right, #23ee2c, #FB39F5)" shape="square"></hy-submit-bar>
```

```ts [脚本]
import { HySubmitBar } from "hy-app"
import { reactive } from "vue"
import { IconConfig } from "hy-app"

const menus = reactive([
    { icon: IconConfig.HOME, text: "首页" },
    { icon: IconConfig.CUSTOMER_SERVICE, text: "客服" },
    { icon: IconConfig.SHOPPING_CART, text: "购物车" }
]);
```
:::

## 右边icon内容设置
- 通过设置`menus`里的内容值定义icon图标、文字和徽标值（样式）
  - `icon`库里图标
  - `text`文本内容
  - `badge`徽标值，使用api查看[徽标数API](./badge.md#api)
- 通过设置`iconColor`icon颜色
- 通过设置`iconLabelColor`文字颜色

::: code-group
```html [模板]
<!-- 自定义图标和徽标 -->
<hy-submit-bar :menus="menus" 
  iconColor="#ff6b8b"
  iconLabelColor="#666666"></hy-submit-bar>

<!-- 隐藏左边按钮 -->
<hy-submit-bar :menus="menus" :show-left-btn="false"></hy-submit-bar>
```

```ts [脚本]
import { HySubmitBar } from "hy-app"
import { reactive } from "vue"
import { IconConfig } from "hy-app"

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
:::


## API

| 参数             | 说明              | 类型                 | 默认值       |
|----------------|-----------------|--------------------|-----------|
| menus          | 左侧菜单栏           | `array`            | -         |
| fixed          | 是否固定在底部            | `boolean`          | true      |
| border         | 是否显示顶部边框          | `boolean`          | true      |
| leftLoading    | 加载左侧按钮loading   | `boolean`          | false     |
| rightLoading   | 加载右侧按钮loading   | `boolean`          | false     |
| iconColor      | 左侧icon的颜色       | `string`           | -         |
| iconLabelColor | 左侧文字的颜色         | `string`           | #909193FF |
| textColor      | 右侧按钮文字颜色        | `string`           | -         |
| showLeftBtn    | 是否显示左边按钮          | `boolean`          | true      |
| showRightBtn   | 是否显示右边按钮          | `boolean`          | true      |
| leftBtnText    | 左侧按钮文字          | `string`           | 加入购物车     |
| rightBtnText   | 右侧按钮文字          | `string`           | 立即购买      |
| leftBtnColor   | 左侧按钮颜色，支持渐变色    | `string`           | #ed3f14   |
| rightBtnColor  | 有侧按钮颜色，支持渐变色    | `string`           | #ff7900   |
| shape          | 按钮的形状           | `circle`\|`square` | circle    |
| warn           | 按钮点击节流时长(单位：ms) | `number`           | 300       |
| customStyle    | 定义需要用到的外部样式     | `CSSProperties`    | -         |

#### Menus
| 参数    | 说明                               | 类型           | 默认值 |
|-------|----------------------------------|--------------|-----|
| icon  | 图标名称                           | `string`     | -   |
| text  | 菜单项文本                               | `string`     | -   |
| badge | 徽标属性，详情查看[徽标数API](./badge.md#api) | `BadgeProps` | -   |

## Events

| 事件名       | 说明     | 回调参数                                    |
|-----------|--------|-----------------------------------------|
| click     | 点击按钮时触发   | index: number                           |
| menuClick | 点击左侧菜单项时触发 | temp: SubmitBarIconMenus, index: number |

## Slots

| 插槽名   | 说明      | 接收值 |
|-------|---------|-----|
| left  | 左侧自定义内容 | -   |
| right | 右侧自定义内容 | -   |


<demo-model url="pages-design/submitBar/submitBar"></demo-model>