# Line Component

> This component is generally used to display a line to separate content blocks. It has two modes: horizontal and vertical, and supports 0.5px hairlines. It is also very easy to use.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage

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

::: tip Tip

When setting the line to vertical, either the parent element must have a fixed width, or you need to set a value for `length` to resolve the issue of the line not being displayed.

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
    <!-- Hairline -->
    <hy-line hairline></hy-line>
    <!-- Thick line -->
    <hy-line :hairline="false"></hy-line>
</template>
```

## API

### Line Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| color | Line color | `string` | - |
| length | Length; when vertical it acts as height, when horizontal it acts as length. Can be a percentage, a value with an rpx unit, etc. | `string`\|`number` | 100% |
| direction | Line direction: row-horizontal, column-vertical | `row`\|`column` | row |
| hairline | Whether to display a hairline (thin line) | `boolean` | true |
| margin | Spacing between the line and the elements above, below, left, and right, in string form, e.g. "30rpx", "20rpx 30rpx"; default unit is px | `string` | 0 |
| dashed | Whether the line is dashed: false-solid, true-dashed | `boolean` | false |
| customStyle | Custom external styles | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### CSS Variables

| Variable Name     | Description | Default Value             |
| ----------------- | ----------- | ------------------------- |
| `--hy-line-color` | Line color  | Follows `--hy-border-color` |

<demo-model url="pages-design/line/line"></demo-model>