# Line Component

> This component is generally used to display a line for separating content blocks. It has two modes: horizontal and vertical, and supports 0.5px lines. It is also very easy to use.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-line></hy-line>
```

### Custom Color

```html
<template>
    <hy-line color="#2979ff"></hy-line>
</template>
```

### Custom Line Direction

::: tip Friendly Reminder

When setting the line to vertical, either the parent element must have a fixed width, or you need to set a value for length to resolve the issue of the line not being displayed.

:::

```html
<template>
    <!-- Vertical -->
    <hy-line direction="column" length="100"></hy-line>
    <!-- Horizontal -->
    <hy-line direction="row"></hy-line>
</template>
```

### Custom Line Length

```html
<template>
    <hy-line length="50%"></hy-line>
</template>
```

### Dashed Line

```html
<template>
    <hy-line dashed color="red"></hy-line>
</template>
```

### Line Thickness

```html
<template>
    <!-- Thin line -->
    <hy-line hairline></hy-line>
    <!-- Thick line -->
    <hy-line :hairline="false"></hy-line>
</template>
```

## API

### Line Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| color | The color of the line | `string` | - |
| length | Length, rendered as height when vertical, and as length when horizontal. Can be a percentage, a value with rpx unit, etc. | `string`\|`number` | 100% |
| direction | The direction of the line, row-horizontal, column-vertical | `row`\|`column` | row |
| hairline | Whether to display a thin line | `boolean` | true |
| margin | The spacing between the line and surrounding elements (top, bottom, left, right), in string form, such as "30rpx", "20rpx 30rpx", default unit is px | `string` | 0 |
| dashed | Whether the line is dashed, false-solid line, true-dashed line | `boolean` | false |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

<demo-model url="pages-design/line/line"></demo-model>