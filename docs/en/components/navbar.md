# Navbar Custom Navigation Bar Component

> This component is generally used in special cases where a custom navigation bar is needed. It is generally recommended to use the navigation bar that comes with uni-app.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-navbar title="Personal Center"></hy-navbar>
```

## Preventing Collapse

- By configuring `placeholder`, an element of equal height is generated when fixed at the top to prevent collapse

```html
<template>
    <hy-navbar title="Personal Center" placeholder></hy-navbar>
</template>
```

## Background Color

```html
<template>
    <hy-navbar title="Personal Center" bgColor="#001f3f"></hy-navbar>
</template>
```

## Fixed at the Top

- By configuring `field`, the navbar is fixed at the top

```html
<template>
    <hy-navbar title="Personal Center" fixed></hy-navbar>
</template>
```

## Basic Usage Example

- Define the navbar title by configuring `title`
- Define the left icon of the navbar by configuring `leftIcon`
- Define the left text of the navbar by configuring `leftText`
- Define the right text of the navbar by configuring `rightText`
- Define the right icon of the navbar by configuring `rightIcon`

```html
<template>
    <hy-navbar
        title="Document"
        :leftIcon="IconConfig.LEFT"
        leftText="Back"
        rightText="Address"
        :rightIcon="IconConfig.MAP"
    ></hy-navbar>
</template>

<script setup>
    import { IconConfig } from 'hy-app';
</script>
```

## Custom Left Slot

```html
<template>
    <hy-navbar title="Custom Slot" :fixed="false" bg-color="#F8F8F8">
        <template #left>
            <view class="u-nav-slot">
                <hy-icon :name="IconConfig.LEFT" size="16"></hy-icon>
                <hy-line direction="column" :hairline="false" length="16" margin="0 8px"></hy-line>
                <hy-icon name="home" size="15"></hy-icon>
            </view>
        </template>
    </hy-navbar>
</template>

<style lang="scss">
    .u-nav-slot {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 100px;
        border: 1rpx solid gainsboro;
        padding: 3px 7px;
        opacity: 0.8;
    }
</style>
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| safeAreaInsetTop | Whether to enable top safe area adaptation | `boolean` | true |
| placeholder | When fixed at the top, whether to generate an element of equal height to prevent collapse | `boolean` | false |
| fixed | Whether the navbar is fixed at the top | `boolean` | true |
| border | Whether to display a bottom border at the bottom of the navbar | `boolean` | false |
| leftIcon | Name of the left back icon | `string` | IconConfig.LEFT |
| leftText | Prompt text on the left | `string` | - |
| rightText | Prompt text on the right | `string` | - |
| rightIcon | Name of the right icon | `string` | - |
| title | Navbar title; if set to an empty string, the title placeholder area will be hidden | `string` | - |
| bgColor | Navbar background setting | `string` | - |
| titleWidth | Maximum width of the navbar title; overflowing content will be hidden with an ellipsis, unit rpx | `string`\|`number` | 400rpx |
| height | Navbar height (excluding the status bar height, which is automatically added internally), default unit px for numeric values | `string`\|`number` | 44px |
| leftIconSize | Size of the left back icon, default unit px for numeric values | `string`\|`number` | 20 |
| leftIconColor | Color of the left back icon | `string` | - |
| autoBack | Whether to automatically return to the previous page when the left area (back icon) is clicked | `boolean` | false |
| titleStyle | Title style, in object or string form | `CSSProperties` | - |
| customStyle | Custom external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| leftClick  | Left area clicked | -        |
| rightClick | Right area clicked | -        |

### Slots

| Slot Name | Description | Accepted Values |
| --------- | ----------- | --------------- |
| left   | Custom content for the left section | -      |
| right  | Custom content for the right section | -      |
| center | Custom content for the center section | -      |

### CSS Variables

| Variable Name                 | Description | Default Value                        |
| ----------------------------- | ----------- | ------------------------------------ |
| `--hy-navbar-z-index`         | Z-index level | `9999`                             |
| `--hy-navbar-height`          | Height      | `44px`                               |
| `--hy-navbar-text-font-size`  | Left/right text font size | `15px`                |
| `--hy-navbar-title-font-size` | Center title font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-navbar-sub-font-size`   | Center subtitle font size | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-navbar-sub-color`       | Center subtitle color | Follows `--hy-text-color--grey`   |

<demo-model url="pages-design/navbar/navbar"></demo-model>