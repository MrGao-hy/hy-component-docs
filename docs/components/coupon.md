# Coupon 优惠券组件

> Coupon 组件用于展示和管理优惠券信息，支持多种类型的优惠券展示，包括满减券、折扣券和无门槛券等，提供灵活的自定义选项以满足不同业务场景需求。

## 平台差异说明
| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|------------|--------------|
| ✔        | ✔  | ✔          | ✔            |

## 组件特性

- **多类型支持**：支持满减券、折扣券和无门槛券等多种优惠券类型展示
- **灵活自定义**：提供丰富的自定义选项，包括背景色、按钮样式、状态管理等
- **状态管理**：内置支持多种优惠券状态，如未使用、已使用、已过期、已兑换等
- **视觉效果**：支持自定义样式、阴影和特殊的凹孔效果设计
- **事件回调**：提供完善的事件回调机制，方便处理优惠券的点击和使用操作

## 使用场景

- **会员中心**：展示用户已获得和可领取的优惠券列表
- **商品详情页**：展示当前商品可用的优惠券
- **订单结算页**：选择和应用优惠券的界面
- **营销活动页**：新用户注册或特定活动的优惠券领取场景

## 基本使用

:::code-group
```vue [模板]
<template>
  <hy-coupon
    title="新品优惠券"
    amount="10"
    description="这是用于新品测试用的"
    date-desc="长期有效"
    type="moneyOff"
    status="unused"
    :btnMode="btnMode"
    :disabled-status="['used', 'expired', 'redeemed']"
    @used="onUse"
  />
</template>
```
```ts [脚本]
import { ref } from 'vue';

const btnMode = ref('button');

const onUse = () => {
  // 使用优惠券的逻辑
};
```
:::

## 自定义背景色

通过设置`bg-color`属性可以自定义优惠券的背景色，支持纯色、渐变色或复杂的CSS背景样式。

### 使用渐变背景

```vue
<template>
  <hy-coupon
    title="新品优惠券"
    amount="10"
    description="这是用于新品测试用的"
    date-desc="长期有效"
    type="moneyOff"
    status="unused"
    :disabled-status="['used', 'expired', 'redeemed']"
    bg-color="linear-gradient(135deg, #7b61ff 0%, #4134c1 100%)"
    @used="onUse"
  />
</template>
```

### 使用自定义样式创建中间凹孔效果

如果需要创建中间凹孔效果，可以使用复杂的CSS背景样式：

:::code-group
```vue [模板]
<template>
  <hy-coupon
    title="新品优惠券"
    amount="10"
    description="这是用于新品测试用的"
    date-desc="长期有效"
    type="moneyOff"
    status="unused"
    :disabled-status="['used', 'expired', 'redeemed']"
    :bgColor="bgColor"
    @used="onUse"
  />
</template>
```
```ts [脚本]
import { ref } from 'vue';

const bgColor = {
  background: `
    radial-gradient(circle at 180rpx top, transparent 15rpx, #00c6ff 0) top / 100% 60px no-repeat,
    radial-gradient(circle at 180rpx bottom, transparent 15rpx, #00c6ff 0) bottom / 100% 51px no-repeat
  `
};

const onUse = () => {
  // 使用优惠券的逻辑
};
```
:::

:::tip 提示
- 15rpx 控制凹孔的大小
- 60px 和 51px 控制上下两部分的高度，可根据需要调整以避免出现缝隙
:::

## 优惠券类型

Coupon 组件支持三种主要类型的优惠券展示，下面展示了如何同时展示不同类型的优惠券：

### 支持的优惠券类型

| 类型 | 说明 | 示例 |
|------|------|------|
| moneyOff | 满减券 | 满100元减20元 |
| discount | 折扣券 | 全场8折 |
| fixedAmount | 无门槛券 | 无门槛立减10元 |

### 多类型优惠券展示示例

:::code-group
```vue [模板]
<template>
  <div class="coupon-list">
    <hy-coupon
      v-for="item in list"
      :key="item.id"
      :title="item.name"
      :amount="item.value"
      :description="item.description"
      :startDate="item.validFrom"
      :endDate="item.validTo"
      :type="item.type"
      :status="item.status"
      :btnMode="btnMode"
      :disabled-status="['used', 'expired', 'redeemed']"
      :boxShadow="boxShadow"
      :custom-style="{ marginBottom: '20px' }"
      @used="onUse"
    />
  </div>
</template>
```
```ts [脚本]
import { ref } from 'vue';
import type { ICoupon } from '@hy/components';

const btnMode = ref('button');
const boxShadow = ref(true);

const list = ref<ICoupon[]>([
  {
    id: '1',
    name: '新人专享满减券',
    type: 'moneyOff',
    status: 'unused',
    description: '满100元减20元，全场通用',
    minSpend: 100,
    value: 20,
    validFrom: '2024-01-01T00:00:00',
    validTo: '2024-12-31T23:59:59'
  },
  {
    id: '2',
    name: '生鲜8折优惠券',
    type: 'discount',
    status: 'unused',
    description: '仅限生鲜品类使用，最高优惠50元',
    minSpend: 50,
    value: 8, // 代表8折
    maxDiscount: 50,
    validFrom: '2024-01-01T00:00:00',
    validTo: '2024-12-31T23:59:59'
  },
  {
    id: '3',
    name: '无门槛10元券',
    type: 'fixedAmount',
    status: 'unused',
    description: '无最低消费限制，全场通用',
    value: 10,
    validFrom: '2023-01-01T00:00:00',
    validTo: '2023-12-31T23:59:59'
  }
]);

const onUse = (item: ICoupon) => {
  console.log('使用优惠券:', item);
};
```
:::


## API

| 参数             | 说明                                               | 类型                                    | 默认值          |
|----------------|--------------------------------------------------|---------------------------------------|--------------|
| title          | 优惠券标题                                            | `string`                              | ''           |
| type           | 优惠券类型：moneyOff：满减券，discount：折扣券，fixedAmount：无门槛券 | `moneyOff`\|`discount`\|`fixedAmount` | ''           |
| typeText       | 金额底部优惠券类型文字描述                                    | `string`                              | ''           |
| status         | 优惠券状态                                            | `string`                              | ''           |
| disabledStatus | 优惠券禁用状态                                          | `array`                               | ''           |
| description    | 优惠券描述                                            | `string`                              | ''           |
| amount         | 优惠券金额                                            | `string`\|`number`                    | ''           |
| unit           | 优惠券单位，没有就用默认值                                    | `string`                              | ''           |
| startDate      | 优惠券开始时间                                          | `string`                              | ''           |
| endDate        | 优惠券结束时间                                          | `string`                              | ''           |
| format         | 时间格式                                             | `string`                              | 'yyyy-MM-dd' |
| dateDesc       | 日期描述，没有日期描述就用开始时间到结束时间                           | `string`                              | ''           |
| bgColor        | 背景色                                              | `string`                              | ''           |
| boxShadow      | 是否显示阴影                                           | `boolean`                             | false        |
| btnMode        | 按钮类型                                             | `text`\|`button`                      | 'button'     |
| btnText        | 按钮文字                                             | `string`                              | '立即领取'       |
| buttonProp     | [按钮属性api](./button#API)                          | `HyButtonProps`                       | \{\}         |
| customStyle    | 定义需要用到的外部样式                                      | `CSSProperties`                       | ''           |
| customClass    | 自定义外部类名                                          | `string`                              | ''           |

## Events

| 事件名   | 说明      | 回调参数 |
|-------|---------|------|
| click | 点击优惠券   | -    |
| used  | 点击使用优惠券 | -    |

## Slots

| 插槽名    | 说明        | 接收值 |
|--------|-----------|-----|
| left   | 自定义金额插槽   | -   |
| right  | 自定义右边详情插槽 | -   |
| button | 自定义按钮插槽   | -   |


<demo-model url="pages/components/coupon/coupon"></demo-model>
