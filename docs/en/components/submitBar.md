# SubmitBar Order Submission Bar Component

> The SubmitBar order submission bar is a core functional component for e-commerce applications. It is mainly used at the bottom of product detail pages, providing a quick action bar that guides users through the purchase process. The component supports extensive customization options, allowing styles and functionality to be flexibly adjusted according to business requirements.

::: tip Component Description

This component is a core business component for e-commerce apps. It provides a complete bottom action bar solution, with multi-platform support and rich interaction customization.

:::

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## Component Features

- **Fixed Bottom**: The component is fixed to the bottom of the page by default, ensuring the action entry is always visible
- **Custom Styles**: Rich customization options for button color, text, shape, and more, with gradient color support
- **Icons & Badges**: Supports configuring left-side menu icons, with badges to indicate new messages or product quantities
- **Flexible Layout**: Supports showing/hiding the left and right buttons, as well as customizing content via slots

## :japanese_castle: Basic Usage Example

::: code-group

```html [Template]
<!-- Global usage -->
<hy-submit-bar :menus="menus"></hy-submit-bar>
```

```ts [Script]
import { reactive } from 'vue';
import { IconConfig } from 'hy-app'; // Import icon configuration

const menus = reactive([
    { icon: IconConfig.HOME, text: 'Home' },
    { icon: IconConfig.CUSTOMER_SERVICE, text: 'Customer Service' },
    {
        icon: IconConfig.SHOPPING_CART,
        text: 'Shopping Cart',
        badge: { value: 10 },
    },
]);
```

:::

### Hiding Buttons

- Hide the left button by setting `show-left-btn`
- Hide the right button by setting `show-right-btn`

::: code-group

```html [Template]
<!-- Hide the left button -->
<hy-submit-bar :menus="menus" :show-left-btn="false"></hy-submit-bar>
<!-- Hide the right button -->
<hy-submit-bar :menus="menus" :show-right-btn="false"></hy-submit-bar>
```

```ts [Script]
import { HySubmitBar } from 'hy-app';
import { reactive } from 'vue';
import { IconConfig } from 'hy-app';

const menus = reactive([
    { icon: IconConfig.HOME, text: 'Home' },
    { icon: IconConfig.CUSTOMER_SERVICE, text: 'Customer Service' },
    { icon: IconConfig.SHOPPING_CART, text: 'Shopping Cart' },
]);
```

:::

### Defining Button Styles

- Set the button text color via `textColor`
- Set the left button text via `leftBtnText`
- Set the right button text via `rightBtnText`
- Set the left button color via `leftBtnColor`
- Set the right button color via `rightBtnColor`
- Set the button shape via `shape`
    - `circle` semicircle
    - `square` square

::: code-group

```html [Template]
<!-- Custom button style example -->
<hy-submit-bar
    :menus="menus"
    textColor="#FFFFFF"
    left-btn-text="Buy"
    left-btn-color="linear-gradient(to right, #4bfcfc, #FB39F5)"
    shape="circle"
></hy-submit-bar>

<!-- Different button shape example -->
<hy-submit-bar
    :menus="menus"
    textColor="#FFFFFF"
    right-btn-text="Place Order"
    right-btn-color="linear-gradient(to right, #23ee2c, #FB39F5)"
    shape="square"
></hy-submit-bar>
```

```ts [Script]
import { HySubmitBar } from 'hy-app';
import { reactive } from 'vue';
import { IconConfig } from 'hy-app';

const menus = reactive([
    { icon: IconConfig.HOME, text: 'Home' },
    { icon: IconConfig.CUSTOMER_SERVICE, text: 'Customer Service' },
    { icon: IconConfig.SHOPPING_CART, text: 'Shopping Cart' },
]);
```

:::

### Right Icon Content Settings

- Define the icon, text, and badge value (style) by setting the items in `menus`
    - `icon` icon from the icon library
    - `text` text content
    - `badge` badge value, see the [Badge API](./badge.md#api) for usage
- Set the icon color via `iconColor`
- Set the text color via `iconLabelColor`

::: code-group

```html [Template]
<!-- Custom icons and badges -->
<hy-submit-bar :menus="menus" iconColor="#ff6b8b" iconLabelColor="#666666"></hy-submit-bar>

<!-- Hide the left button -->
<hy-submit-bar :menus="menus" :show-left-btn="false"></hy-submit-bar>
```

```ts [Script]
import { HySubmitBar } from 'hy-app';
import { reactive } from 'vue';
import { IconConfig } from 'hy-app';

const menus = reactive([
    { icon: IconConfig.HOME, text: 'Home' },
    { icon: IconConfig.CUSTOMER_SERVICE, text: 'Customer Service' },
    {
        icon: IconConfig.SHOPPING_CART,
        text: 'Shopping Cart',
        badge: { value: 10, type: 'success' },
    },
]);
```

:::

## API

### SubmitBar Props

| Parameter       | Description                                  | Type                   | Default     |
| -------------- | -------------------------------------------- | ---------------------- | ----------- |
| menus          | Left menu bar                                | `SubmitBarIconMenus[]` | -           |
| fixed          | Whether to fix to the bottom                 | `boolean`              | true        |
| border         | Whether to show the top border               | `boolean`              | true        |
| leftLoading    | Show loading on the left button              | `boolean`              | false       |
| rightLoading   | Show loading on the right button             | `boolean`              | false       |
| iconColor      | Color of the left icons                      | `string`               | -           |
| iconLabelColor | Color of the left text                       | `string`               | #909193FF   |
| textColor      | Text color of the right buttons              | `string`               | -           |
| showLeftBtn    | Whether to show the left button              | `boolean`              | true        |
| showRightBtn   | Whether to show the right button             | `boolean`              | true        |
| leftBtnText    | Left button text                             | `string`               | Add to Cart |
| rightBtnText   | Right button text                            | `string`               | Buy Now     |
| leftBtnColor   | Left button color, supports gradient colors  | `string`               | #ed3f14     |
| rightBtnColor  | Right button color, supports gradient colors | `string`               | #ff7900     |
| shape          | Shape of the buttons                         | `circle`\|`square`     | circle      |
| warn           | Button click throttle duration (unit: ms)    | `number`               | 300         |
| customStyle    | External styles to be applied                | `CSSProperties`        | -           |

### Events

| Event Name | Description                               | Callback Parameters                     |
| ---------- | ----------------------------------------- | --------------------------------------- |
| click      | Triggered when a button is clicked        | index: number                           |
| menuClick  | Triggered when a left menu item is clicked | temp: SubmitBarIconMenus, index: number |

### Slots

| Slot Name | Description                | Accepted Values |
| --------- | -------------------------- | --------------- |
| left      | Custom content on the left | -               |
| right     | Custom content on the right | -              |

### Typings

::: details Type Definitions

```ts
export interface SubmitBarIconMenus {
    /**
     * Icon
     * */
    icon: string;
    /**
     * Text
     * */
    text: string;
    /**
     * Badge value
     * */
    badge?: BadgeProps['badge'];
    [key: string]: any;
}
```

:::

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-submit-bar-left-font-size` | Left text font size | `20rpx` |
| `--hy-submit-bar-right-font-size` | Right price font size | `26rpx` |
| `--hy-submit-bar-right-width` | Right area width | `400rpx` |

<demo-model url="pages-design/submitBar/submitBar"></demo-model>