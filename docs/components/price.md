# Price 金额组件
> 用于展示价格金额的业务组件，支持差异化展示小数点前后的数字大小，提升金额的视觉效果和可读性。

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 组件特性

- **差异化展示**：自动区分小数点前后数字大小，提升视觉层次
- **灵活配置**：支持自定义颜色、大小、粗细、倾斜等样式属性
- **多单位支持**：可自定义金额符号，适应不同货币需求
- **格式化控制**：支持设置保留小数位数，精确控制金额展示
- **响应式设计**：适配多平台，保持一致的视觉效果

## 使用场景

- **商品价格展示**：在商品列表和详情页中突出显示价格
- **订单金额展示**：在订单页面清晰展示各项金额信息
- **促销价格对比**：展示原价和折扣价，突出优惠力度
- **价格标签**：在营销活动页面作为价格标签使用

## 基本使用
:::code-group
```vue [模板]
<!-- 全局使用 -->
<hy-price :text="price"></hy-price>
<!-- 单个组件引入 -->
<HyPrice :text="price"></HyPrice>
```

```ts [脚本]
import { HyPrice } from "hy-app"

const price = 10
```
:::

## 设置颜色
:::code-group
```vue [模板]
<hy-price :text="price" color="#9CC53D"></hy-price>
```

```ts [脚本]
import { HyPrice } from "hy-app"

const price = 10
```
:::

## 设置大小
:::code-group
```vue [模板]
<hy-price :text="price" :size="20"></hy-price>
```

```ts [脚本]
import { HyPrice } from "hy-app"

const price = 10
```
:::

## 保留小数位
:::code-group
```vue [模板]
<hy-price :text="price" :num="6"></hy-price>
```

```ts [脚本]
import { HyPrice } from "hy-app"

const price = 10
```
:::

## 设置前缀单位
:::code-group
```vue [模板]
<hy-price :text="price" symbol="$"></hy-price>
```

```ts [脚本]
import { HyPrice } from "hy-app"

const price = 10
```
:::

## 设置粗细
:::code-group
```vue [模板]
<hy-price :text="price" :weight="900"></hy-price>
```

```ts [脚本]
import { HyPrice } from "hy-app"

const price = 10
```
:::

## 设置倾斜
:::code-group
```vue [模板]
<hy-price :text="price" :slant="true"></hy-price>
```

```ts [脚本]
import { HyPrice } from "hy-app"

const price = 10
```
:::

## 设置比例
:::code-group
```vue [模板]
<hy-price text="10.22" :ratio="1"></hy-price>
<hy-price text="10.22" :ratio="1.2"></hy-price>
<hy-price text="10.22"></hy-price>
<hy-price text="10.22" :ratio="1.6"></hy-price>
```

```ts [脚本]
import { HyPrice } from "hy-app"
```
:::

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
