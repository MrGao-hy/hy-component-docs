# Coupon Component

> The Coupon component is used to display and manage coupon information, supporting the display of multiple coupon types, including money-off coupons, discount coupons, and no-threshold coupons, with flexible customization options to meet the needs of different business scenarios.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## Component Features

- **Multiple Type Support**: Supports displaying various coupon types, such as money-off coupons, discount coupons, and no-threshold coupons
- **Flexible Customization**: Provides rich customization options, including background color, button styles, status management, and more
- **Status Management**: Built-in support for multiple coupon statuses, such as unused, used, expired, redeemed, etc.
- **Visual Effects**: Supports custom styles, shadows, and a special notch effect design
- **Event Callbacks**: Provides a complete event callback mechanism, making it easy to handle coupon click and usage operations

## :japanese_castle: Basic Usage Example

```html [Template]
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

You can customize the coupon's background color by setting the `bg-color` property, which supports solid colors, gradients, or complex CSS background styles.

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

#### 2. Using Custom Styles to Create a Middle Notch Effect

If you need to create a middle notch effect, you can use complex CSS background styles:

```html [Template]
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

::: tip Friendly Reminder

- 15rpx controls the size of the notch
- 60px and 51px control the heights of the top and bottom sections, which can be adjusted as needed to avoid gaps

:::

### Coupon Types

The Coupon component supports three main types of coupon display. The following shows how to display different types of coupons at the same time:

#### Supported Coupon Types

| Type        | Description     | Example           |
| ----------- | -------- | -------------- |
| moneyOff    | Money-off coupon   | ¥20 off orders over ¥100  |
| discount    | Discount coupon   | 20% off storewide        |
| fixedAmount | No-threshold coupon | ¥10 off with no minimum spend |

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
            description: 'Only valid for the fresh produce category, with a maximum discount of ¥50',
            minSpend: 50,
            value: 8, // Represents a 20% discount
            maxDiscount: 50,
            validFrom: '2024-01-01T00:00:00',
            validTo: '2024-12-31T23:59:59',
        },
        {
            id: '3',
            name: 'No-Threshold ¥10 Coupon',
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
| disabledStatus | Disabled statuses for the coupon | `array` | - |
| description | Coupon description | `string` | - |
| desEllipsis | Number of lines before the description is truncated; none means no truncation, a number indicates the line at which truncation begins | `string`\|`number` | none |
| amount | Coupon amount | `string`\|`number` | - |
| unit | Coupon unit; the default value is used if not set | `string` | - |
| startDate | Coupon start time | `string` | - |
| endDate | Coupon end time | `string` | - |
| format | Time format | `string` | yyyy-MM-dd |
| dateDesc | Date description; if not provided, the period from start time to end time is used | `string` | - |
| bgColor | Background color | `string` | - |
| boxShadow | Whether to show a shadow | `boolean` | false |
| btnMode | Button type | `text`\|`button`\|`none` | button |
| btnText | Button text | `string` | Claim Now |
| buttonProp | [Button props API](./button#API) | `HyButtonProps` | - |
| customStyle | Defines external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description           | Callback Parameters |
| ------ | -------------- | -------- |
| click  | Coupon clicked     | -        |
| used   | Use coupon button clicked | -        |

### Slots

| Slot Name | Description               | Received Values |
| ------ | ------------------ | ------ |
| left   | Custom amount slot     | -      |
| right  | Custom right-side detail slot | -      |
| button | Custom button slot     | -      |

<demo-model url="pages-design/coupon/coupon"></demo-model>