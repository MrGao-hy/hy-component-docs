# Coupon Component

> The Coupon component is used to display and manage coupon information. It supports displaying multiple types of coupons, including money-off coupons, discount coupons, and no-threshold coupons, and provides flexible customization options to meet different business scenario needs.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## Component Features

- **Multiple Type Support**: Supports displaying various coupon types, including money-off coupons, discount coupons, and no-threshold coupons
- **Flexible Customization**: Provides rich customization options, including background color, button styles, status management, and more
- **Status Management**: Built-in support for multiple coupon statuses, such as unused, used, expired, and redeemed
- **Visual Effects**: Supports custom styles, shadows, and a special notch effect design
- **Event Callbacks**: Provides a comprehensive event callback mechanism, making it easy to handle coupon click and use operations

## :japanese_castle: Basic Usage Example

```html [template]
<template>
    <hy-coupon
        title="New Product Coupon"
        amount="10"
        description="This is for new product testing"
        date-desc="Valid long-term"
        type="moneyOff"
        status="unused"
        btnMode="button"
        :disabled-status="['used', 'expired', 'redeemed']"
        @used="onUse"
    />
</template>
```

### Custom Background Color

You can customize the coupon's background color by setting the `bg-color` attribute, which supports solid colors, gradients, or complex CSS background styles.

#### 1. Using a Gradient Background

```html
<template>
    <hy-coupon
        title="New Product Coupon"
        amount="10"
        description="This is for new product testing"
        date-desc="Valid long-term"
        type="moneyOff"
        status="unused"
        :disabled-status="['used', 'expired', 'redeemed']"
        bg-color="linear-gradient(135deg, #7b61ff 0%, #4134c1 100%)"
        @used="onUse"
    />
</template>
```

#### 2. Using Custom Styles to Create a Notch Effect in the Middle

If you need to create a notch effect in the middle, you can use complex CSS background styles:

```html [template]
<template>
    <hy-coupon
        title="New Product Coupon"
        amount="10"
        description="This is for new product testing"
        date-desc="Valid long-term"
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
        // Logic for using the coupon
    };
</script>
```

::: tip Tip

- 15rpx controls the size of the notch
- 60px and 51px control the heights of the top and bottom sections, which can be adjusted as needed to avoid gaps

:::

### Coupon Types

The Coupon component supports three main coupon types for display. The following shows how to display different coupon types at the same time:

#### Supported Coupon Types

| Type       | Description        | Example                      |
| ---------- | ------------------ | ---------------------------- |
| moneyOff   | Money-off coupon   | ¥20 off orders over ¥100     |
| discount   | Discount coupon    | 20% off storewide            |
| fixedAmount | No-threshold coupon | Instant ¥10 off, no minimum spend |

#### Multiple Coupon Types Display Example

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
            name: 'New User Exclusive Money-Off Coupon',
            type: 'moneyOff',
            status: 'unused',
            description: '¥20 off orders over ¥100, valid storewide',
            minSpend: 100,
            value: 20,
            validFrom: '2024-01-01T00:00:00',
            validTo: '2024-12-31T23:59:59',
        },
        {
            id: '2',
            name: 'Fresh Produce 20% Off Coupon',
            type: 'discount',
            status: 'unused',
            description: 'Only valid for the fresh produce category, max discount of ¥50',
            minSpend: 50,
            value: 8, // Represents 20% off
            maxDiscount: 50,
            validFrom: '2024-01-01T00:00:00',
            validTo: '2024-12-31T23:59:59',
        },
        {
            id: '3',
            name: '¥10 No-Threshold Coupon',
            type: 'fixedAmount',
            status: 'unused',
            description: 'No minimum spend required, valid storewide',
            value: 10,
            validFrom: '2023-01-01T00:00:00',
            validTo: '2023-12-31T23:59:59',
        },
    ]);

    const onUse = (item: ICoupon) => {
        console.log('Use coupon:', item);
    };
</script>
```

## API

### Coupon Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Coupon title | `string` | - |
| type | Coupon type: moneyOff: money-off coupon, discount: discount coupon, fixedAmount: no-threshold coupon | `moneyOff`\|`discount`\|`fixedAmount` | - |
| typeText | Text description of the coupon type below the amount | `string` | - |
| status | Coupon status | `string` | - |
| disabledStatus | Coupon disabled statuses | `array` | - |
| description | Coupon description | `string` | - |
| desEllipsis | Number of lines before the description is truncated; none means no truncation, a number indicates the line at which truncation begins | `string`\|`number` | none |
| amount | Coupon amount | `string`\|`number` | - |
| unit | Coupon unit; uses the default value if not set | `string` | - |
| startDate | Coupon start time | `string` | - |
| endDate | Coupon end time | `string` | - |
| format | Time format | `string` | yyyy-MM-dd |
| dateDesc | Date description; if not set, displays the range from start time to end time | `string` | - |
| bgColor | Background color | `string` | - |
| boxShadow | Whether to show shadow | `boolean` | false |
| btnMode | Button type | `text`\|`button`\|`none` | button |
| btnText | Button text | `string` | Claim Now |
| buttonProp | [Button props API](./button#API) | `HyButtonProps` | - |
| customStyle | Defines external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| click      | Triggered when the coupon is clicked | - |
| used       | Triggered when using the coupon is clicked | - |

### Slots

| Slot Name | Description | Accepted Values |
| --------- | ----------- | --------------- |
| left      | Custom amount slot | - |
| right     | Custom right-side details slot | - |
| button    | Custom button slot | - |

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-coupon-box-width` | Width of the left amount area | `180rpx` |
| `--hy-coupon-bg-height` | Background height | `166rpx` |
| `--hy-coupon-radius` | Card border radius | `16rpx` |
| `--hy-coupon-value-font-size` | Amount font size | `64rpx` |
| `--hy-coupon-suffix-font-size` | Amount unit font size | `28rpx` |
| `--hy-coupon-name-font-size` | Coupon name font size | `30rpx` |
| `--hy-coupon-desc-font-size` | Description text font size | `22rpx` |
| `--hy-coupon-tag-width` | Status tag width | `120rpx` |
| `--hy-coupon-tag-font-size` | Status tag font size | `26rpx` |
| `--hy-coupon-tag-bg` | Status tag background color | `#ffd16d` |
| `--hy-coupon-tag-color` | Status tag text color | `#d43c33` |

<demo-model url="pages-design/coupon/coupon"></demo-model>