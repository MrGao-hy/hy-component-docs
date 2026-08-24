# Badge Component

> This component is generally used to display the number of unread messages at the top-right corner of an icon, prompting users to click. It comes in two forms: a dot and a circle containing text.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-badge :value="10"></hy-badge>
```

### Set the Badge Type to a Dot

- Set the dot by setting `isDot` to true

```html
<template>
    <hy-badge :value="12" isDot></hy-badge>
</template>
```

### Corner Shape

- Set the badge shape via `shape`
    - `circle`: all four corners are rounded
    - `horn`: the bottom-left corner is a right angle

```html
<template>
    <hy-badge :value="123" shape="circle"></hy-badge>
    <hy-badge :value="123" shape="horn"></hy-badge>
</template>
```

### Set the Number Display Mode

- `overflow` is determined based on the `max` field; when exceeded, it displays `${max}+`
- `ellipsis` is determined based on `max`; when exceeded, it displays `${max}...`
- `limit` uses `1000` as the threshold; when the value exceeds 1000, it displays `${value/1000}K`, e.g., `2.2k`, `3.34w`, with up to 2 decimal places

```html
<template>
    <hy-badge numberType="overflow" :value="9999"></hy-badge>
    <hy-badge numberType="ellipsis" :value="9999"></hy-badge>
    <hy-badge numberType="limit" :value="123456"></hy-badge>
</template>
```

### Display Theme Colors

- Set the theme color via `type`
- `primary`: theme info
- `success`: theme primary
- `error`: theme danger
- `warning`: theme warning
- `info`: theme default
- Set the background color via `bg-color`

```html
<template>
    <hy-badge :value="12" type="primary"></hy-badge>
    <hy-badge :value="12" type="error"></hy-badge>
    <hy-badge :value="12" type="info"></hy-badge>
    <hy-badge :value="12" type="success"></hy-badge>
    <hy-badge :value="12" type="warning"></hy-badge>
    <hy-badge :value="12" bg-color="#800080"></hy-badge>
</template>
```

### Inverted Colors

- Set the `inverted` property to `true`

::: tip Friendly Reminder

If inverting a custom color, you need to set `color` to the custom color

:::

```html
<hy-badge :value="12" type="primary" inverted></hy-badge>
<hy-badge :value="12" type="error" inverted></hy-badge>
<hy-badge :value="12" type="info" inverted></hy-badge>
<hy-badge :value="12" type="success" inverted></hy-badge>
<hy-badge :value="12" type="warning" inverted></hy-badge>
<hy-badge :value="12" color="#800080" inverted></hy-badge>
```

### Inverted Colors

::: warning Note

This component uses absolute positioning internally by default, so you need to set position: relative on the badge's parent component (element), then adjust the `offset` values (an array with two elements: the first is the top value, the second is the right value, in rpx units, can be negative, e.g., "[-10, -10]") to position it appropriately. If you don't need the component's default automatic absolute positioning, simply set the absolute parameter to false.

:::

::: code-group

```html [vue]
<view class="relative">
    <hy-badge :value="12" absolute :offset="[-8, 50]"></hy-badge>
    <hy-avatar
        size="large"
        shape="square"
        src="https://img0.baidu.com/it/u=3196617431,1263013381&fm=253"
    ></hy-avatar>
</view>
```

```scss [index.scss]
.relative {
    position: relative;
}
```

:::

## API

### Badge Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| isDot | Does not display a number, only a small dot | `boolean` | - |
| value | The number to display; shown as ${overflowCount}+ when greater than overflowCount, hidden when 0 and show-zero is false | `number` | - |
| show | Whether the component is displayed | `boolean` | true |
| max | Maximum value; displays '{max}+' when exceeded | `number` | 999 |
| zIndex | Maximum stacking level | `number` | 999 |
| type | Theme type | `error` \| `warning` \| `success` \| `primary` \| `info` | error |
| showZero | Whether to display the Badge when the value is 0 | `boolean` | false |
| bgColor | Background color; takes priority over type, so if set, the type parameter will be ignored | `string` | - |
| color | Font color | `string` | #ffffff |
| shape | Badge shape: circle - all four corners are rounded, horn - the bottom-left corner is a right angle | `circle` \| `horn` | circle |
| numberType | Sets the number display mode; see documentation above for details | `overflow` \| `ellipsis` \| `limit` | overflow |
| offset | Sets the badge's position offset in the format [x, y], i.e., the top and right values; only effective when absolute is true | `array` | - |
| inverted | Whether to invert the background and font colors | `boolean` | false |
| absolute | Whether the component is absolutely positioned | `boolean` | false |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

<demo-model url="pages-design/badge/badge"></demo-model>