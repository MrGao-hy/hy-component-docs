# Coupon 优惠券组件
> 该组件一般用于优惠券领取使用场景

::: tip 温馨提示
优惠券用于大部分场景中，可以随意自定义
:::

## 平台差异说明
| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例
```html
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
```

## 设置背景色
- 通过设置`bg-color`来设置不同背景色
::: tip 注意
如果像设置和我一样中间凹进去的部分，你需要背景色这样写

**其中15rpx设置孔的大小，如果中间有条缝需要把60px设置更大些**
```css
{
    background:
            radial-gradient(circle at 180rpx top, transparent 15rpx, #00c6ff 0) top / 100% 60px
            no-repeat,
            radial-gradient(circle at 180rpx bottom, transparent 15rpx, #00c6ff 0) bottom / 100%
            51px no-repeat;
}
```
:::
```html
<hy-coupon
        title="新品优惠券"
        amount="10"
        description="这是用于新品测试用的"
        date-desc="长期有效"
        type="moneyOff"
        status="unused"
        :btnMode="btnMode"
        :disabled-status="['used', 'expired', 'redeemed']"
        bg-color="linear-gradient(135deg, #7b61ff 0%, #4134c1 100%)"
        @used="onUse"
/>
```

## 优惠券三种类型

```vue
<template>
  <template v-for="item in list" :key="item.id">
    <hy-coupon
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
  </template>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const list = ref([
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
      value: 8, // 80 代表 8折
      maxDiscount: 50,
      validFrom: '2024-01-01T00:00:00',
      validTo: '2024-12-31T23:59:59',
      applicableCategories: ['fresh']
    },
    {
      id: '3',
      name: '无门槛10元券',
      type: 'fixedAmount',
      status: 'unused',
      description: '无最低消费限制，全场通用',
      value: 100,
      validFrom: '2023-01-01T00:00:00',
      validTo: '2023-12-31T23:59:59'
    }
  ])
</script>
```


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
