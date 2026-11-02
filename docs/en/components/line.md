# Line Component

> This component is generally used to display a line for separating content blocks. It supports both horizontal and vertical modes, and can render 0.5px lines. It's also very simple to use.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Examples

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

When setting the line to vertical, either the parent element must have a fixed width, or you need to set a value for length to resolve the issue of the line not being displayed

:::

```html
<template>
    <!--Vertical-->
    <hy-line direction="column" length="100"></hy-line>
    <!--Horizontal-->
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
    <!--Thin line-->
    <hy-line hairline></hy-line>
    <!--Thick line-->
    <hy-line :hairline="false"></hy-line>
</template>
```

## API

### Line Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| color | The color of the line | `string` | - |
| length | Length, appears as height when vertical and as width when horizontal; can be a percentage, a value with rpx unit, etc. | `string`\|`number` | 100% |
| direction | Direction of the line, row-horizontal, column-vertical | `row`\|`column` | row |
| hairline | Whether to display a thin line | `boolean` | true |
| margin | The spacing between the line and surrounding elements, in string form, such as "30rpx", "20rpx 30rpx"; default unit is px | `string` | 0 |
| dashed | Whether to use a dashed line, false-solid line, true-dashed line | `boolean` | false |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-line-color` | Line color | Follows `--hy-border-color` |

<demo-model url="pages-design/line/line"></demo-model>