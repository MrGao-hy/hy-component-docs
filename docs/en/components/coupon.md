# Coupon Component

> The Coupon component is used to display and manage coupon information. It supports displaying multiple coupon types, including money-off coupons, discount coupons, and no-threshold coupons, and provides flexible customization options to meet the needs of different business scenarios.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## Component Features

- **Multiple type support**: Supports displaying various coupon types, including money-off coupons, discount coupons, and no-threshold coupons
- **Flexible customization**: Provides rich customization options, including background color, button styles, status management, and more
- **Status management**: Built-in support for multiple coupon statuses, such as unused, used, expired, and redeemed
- **Visual effects**: Supports custom styles, shadows, and a special notch effect design
- **Event callbacks**: Provides a complete event callback mechanism, making it easy to handle coupon click and usage actions

## :japanese_castle: Basic Usage Example

```html [模板]
<template>
    <hy-coupon
        title="新品优惠券"
        amount="10"
        description="这是用于新品测试用的"
        date-desc="长期有效"
        type="moneyOff"
        status="unused"
        btnMode="button"
        :disabled-status="['used', 'expired', 'redeemed']"
        @used="onUse"
    />
</template>
```

### Custom Background Color

You can customize the coupon's background color by setting the `bg-color` property. It supports solid colors, gradients, or complex CSS background styles.

#### 1. Using a Gradient Background

```html
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

#### 2. Using Custom Styles to Create a Middle Notch Effect

If you need to create a middle notch effect, you can use complex CSS background styles:

```html [模板]
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

<script lang="ts" setup>
    import { ref } from 'vue';

    const bgColor = {
        background: `
    radial-gradient(circle at 180rpx top, transparent 15rpx, #00c6ff 0) top / 100% 60px no-repeat,
    radial-gradient(circle at 180rpx bottom, transparent 15rpx, #00c6ff 0) bottom / 100% 51px no-repeat
  `,
    };

    const onUse = () => {
        // 使用优惠券的逻辑
    };
</script>
```

::: tip Tips

- 15rpx controls the size of the notch
- 60px and 51px control the heights of the top and bottom sections; adjust them as needed to avoid gaps

:::

### Coupon Types

The Coupon component supports three main coupon types. The example below shows how to display different coupon types at the same time:

#### Supported Coupon Types

| Type        | Description        | Example                    |
| ----------- | ------------------ | -------------------------- |
| moneyOff    | Money-off coupon   | ¥20 off orders over ¥100   |
| discount    | Discount coupon    | 20% off storewide          |
| fixedAmount | No-threshold coupon| ¥10 off, no minimum spend  |

#### Example of Displaying Multiple Coupon Types

```html
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

<script lang="ts" setup>
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
            validTo: '2024-12-31T23:59:59',
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
            validTo: '2024-12-31T23:59:59',
        },
        {
            id: '3',
            name: '无门槛10元券',
            type: 'fixedAmount',
            status: 'unused',
            description: '无最低消费限制，全场通用',
            value: 10,
            validFrom: '2023-01-01T00:00:00',
            validTo: '2023-12-31T23:59:59',
        },
    ]);

    const onUse = (item: ICoupon) => {
        console.log('使用优惠券:', item);
    };
</script>
```

## API

### Coupon Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Coupon title | `string` | - |
| type | Coupon type: moneyOff: money-off coupon, discount: discount coupon, fixedAmount: no-threshold coupon | `moneyOff`\|`discount`\|`fixedAmount` | - |
| typeText | Text description of the coupon type below the amount | `string` | - |
| status | Coupon status | `string` | - |
| disabledStatus | Disabled statuses for the coupon | `array` | - |
| description | Coupon description | `string` | - |
| desEllipsis | Number of lines before the description is truncated; `none` means no truncation, a number indicates the line count at which truncation begins | `string`\|`number` | none |
| amount | Coupon amount | `string`\|`number` | - |
| unit | Coupon unit; the default value is used if not set | `string` | - |
| startDate | Coupon start time | `string` | - |
| endDate | Coupon end time | `string` | - |
| format | Time format | `string` | yyyy-MM-dd |
| dateDesc | Date description; if not set, the start time to end time range is used | `string` | - |
| bgColor | Background color | `string` | - |
| boxShadow | Whether to show a shadow | `boolean` | false |
| btnMode | Button type | `text`\|`button`\|`none` | button |
| btnText | Button text | `string` | Claim Now |
| buttonProp | [Button props API](./button#API) | `HyButtonProps` | - |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event | Description | Callback Parameters |
| ------ | ----------------------------------- | -------- |
| click  | Triggered when the coupon is clicked | -        |
| used   | Triggered when the use button is clicked | -        |

### Slots

| Slot   | Description                     | Accepted Values |
| ------ | ------------------------------- | --------------- |
| left   | Custom amount slot              | -               |
| right  | Custom right-side details slot  | -               |
| button | Custom button slot              | -               |

### CSS Variables

| Variable                       | Description                    | Default  |
| ------------------------------ | ------------------------------ | -------- |
| `--hy-coupon-box-width`        | Width of the left amount area  | `180rpx` |
| `--hy-coupon-bg-height`        | Background height              | `166rpx` |
| `--hy-coupon-radius`           | Card border radius             | `16rpx`  |
| `--hy-coupon-value-font-size`  | Amount font size               | `64rpx`  |
| `--hy-coupon-suffix-font-size` | Amount unit font size          | `28rpx`  |
| `--hy-coupon-name-font-size`   | Coupon name font size          | `30rpx`  |
| `--hy-coupon-desc-font-size`   | Description text font size     | `22rpx`  |
| `--hy-coupon-tag-width`        | Status tag width               | `120rpx` |
| `--hy-coupon-tag-font-size`    | Status tag font size           | `26rpx`  |
| `--hy-coupon-tag-bg`           | Status tag background color    | `#ffd16d`|
| `--hy-coupon-tag-color`        | Status tag text color          | `#d43c33`|

<demo-model url="pages-design/coupon/coupon"></demo-model>