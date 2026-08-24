# Navbar Custom Navigation Bar Component

> This component is generally used in special cases where a custom navigation bar is required. It is generally recommended to use the navigation bar that comes with uni-app.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<!-- 全局使用 -->
<hy-navbar title="个人中心"></hy-navbar>
```

## Preventing Collapse

- By configuring `placeholder`, an element of equal height is generated when fixed at the top, to prevent collapse

```html
<template>
    <hy-navbar title="个人中心" placeholder></hy-navbar>
</template>
```

## Background Color

```html
<template>
    <hy-navbar title="个人中心" bgColor="#001f3f"></hy-navbar>
</template>
```

## Fixed at Top

- By configuring `field`, the navigation bar is fixed at the top

```html
<template>
    <hy-navbar title="个人中心" fixed></hy-navbar>
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
        title="文档"
        :leftIcon="IconConfig.LEFT"
        leftText="返回"
        rightText="地址"
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
    <hy-navbar title="自定义插槽" :fixed="false" bg-color="#F8F8F8">
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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| safeAreaInsetTop | Whether to enable top safe area adaptation | `boolean` | true |
| placeholder | When fixed at the top, whether to generate an element of equal height to prevent collapse | `boolean` | false |
| fixed | Whether the navigation bar is fixed at the top | `boolean` | true |
| border | Whether to display a bottom border at the bottom of the navigation bar | `boolean` | false |
| leftIcon | Name of the left back icon | `string` | IconConfig.LEFT |
| leftText | Prompt text on the left | `string` | - |
| rightText | Prompt text on the right | `string` | - |
| rightIcon | Name of the right back icon | `string` | - |
| title | Navigation bar title; if set to an empty string, the title placeholder area will be hidden | `string` | - |
| bgColor | Navigation bar background setting | `string` | - |
| titleWidth | Maximum width of the navigation bar title; content that overflows will be hidden with an ellipsis, unit: rpx | `string`\|`number` | 400rpx |
| height | Navigation bar height (does not include the status bar height, which is automatically added internally); default unit for numeric values: px | `string`\|`number` | 44px |
| leftIconSize | Size of the left back icon; default unit for numeric values: px | `string`\|`number` | 20 |
| leftIconColor | Color of the left back icon | `string` | - |
| autoBack | Whether to automatically go back to the previous page when the left area (back icon) is clicked | `boolean` | false |
| titleStyle | Style of the title, in object or string form | `CSSProperties` | - |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

## Events

| Event Name  | Description           | Callback Parameters |
| ---------- | ------------ | -------- |
| leftClick  | Left area clicked | -        |
| rightClick | Right area clicked | -        |

## Slots

| Slot Name | Description                 | Accepted Values |
| ------ | ------------------ | ------ |
| left   | Custom content for the left section | -      |
| right  | Custom content for the right section | -      |
| center | Custom content for the center section | -      |

<demo-model url="pages-design/navbar/navbar"></demo-model>