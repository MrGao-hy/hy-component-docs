# Navbar Custom Navigation Bar Component

> This component is generally used in special cases where a custom navigation bar is needed. In general, it is recommended to use the navigation bar that comes with uni-app.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-navbar title="Personal Center"></hy-navbar>
```

## Preventing Collapse

- By configuring `placeholder`, an element of equal height is generated when fixed at the top, to prevent collapse

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

## Fixed at Top

- By configuring `fixed`, the navigation bar is fixed at the top

```html
<template>
    <hy-navbar title="Personal Center" fixed></hy-navbar>
</template>
```

## Basic Usage Example

- Use `title` to define the navigation bar title
- Use `leftIcon` to define the left icon of the navigation bar
- Use `leftText` to define the left text of the navigation bar
- Use `rightText` to define the right text of the navigation bar
- Use `rightIcon` to define the right icon of the navigation bar

```html
<template>
    <hy-navbar
        title="Docs"
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
| fixed | Whether the navigation bar is fixed at the top | `boolean` | true |
| border | Whether to display a bottom border at the bottom of the navigation bar | `boolean` | false |
| leftIcon | Name of the left back icon | `string` | IconConfig.LEFT |
| leftText | Hint text on the left | `string` | - |
| rightText | Hint text on the right | `string` | - |
| rightIcon | Name of the right back icon | `string` | - |
| title | Navigation bar title; if set to an empty string, the title placeholder area will be hidden | `string` | - |
| bgColor | Navigation bar background setting | `string` | - |
| titleWidth | Maximum width of the navigation bar title; overflowing content is hidden with an ellipsis, unit rpx | `string`\|`number` | 400rpx |
| height | Navigation bar height (does not include the status bar height, which is added automatically internally), default unit px for numbers | `string`\|`number` | 44px |
| leftIconSize | Size of the left back icon, default unit px for numbers | `string`\|`number` | 20 |
| leftIconColor | Color of the left back icon | `string` | - |
| autoBack | Whether to automatically navigate back to the previous page when the left area (back icon) is clicked | `boolean` | false |
| titleStyle | Style of the title, in object or string form | `CSSProperties` | - |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name  | Description          | Callback Parameters |
| ----------- | -------------------- | ------------------- |
| leftClick   | Left area clicked    | -                   |
| rightClick  | Right area clicked   | -                   |

### Slots

| Slot Name | Description                        | Accepted Value |
| --------- | ---------------------------------- | -------------- |
| left      | Custom left section content        | -              |
| right     | Custom right section content       | -              |
| center    | Custom center content              | -              |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-navbar-z-index` | Stacking level | `9999` |
| `--hy-navbar-height` | Height | `44px` |
| `--hy-navbar-text-font-size` | Font size of left/right text | `15px` |
| `--hy-navbar-title-font-size` | Font size of the center title | Follows `--hy-font-size-base` (28rpx) |
| `--hy-navbar-sub-font-size` | Font size of the center subtitle | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-navbar-sub-color` | Color of the center subtitle | Follows `--hy-text-color--grey` |

<demo-model url="pages-design/navbar/navbar"></demo-model>