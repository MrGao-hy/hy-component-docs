# Loading Animation Component

> This component is a small animation, currently used in Hy's loadMore (load more) and other components for their loading state scenarios.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-loading></hy-loading>
```

### Animation Text

- Configure `text` to specify the text content
- Configure `textSize` to specify the text size

```html
<template>
    <hy-loading text="Loading..." textSize="18"></hy-loading>
</template>
```

### Mode Types

- Configure `mode` to specify the mode
    - `spinner` petal shape (default)
    - `circle` ring loading style
    - `semicircle` semicircle loading style
    - `dots` bouncing dots loading style
    - `bars` sound wave bars loading style

```html
<template>
    <hy-loading mode="spinner"></hy-loading>
    <hy-loading mode="circle"></hy-loading>
    <hy-loading mode="semicircle"></hy-loading>
    <hy-loading mode="dots"></hy-loading>
    <hy-loading mode="bars"></hy-loading>
</template>
```

### Layout Types

- Configure `direction` to specify whether the text and icon are arranged vertically
    - `row` loading icon and text arranged horizontally
    - `column` loading icon and text arranged vertically

```html
<template>
    <hy-loading text="Loading" direction="row"></hy-loading>
    <hy-loading text="Loading" direction="column"></hy-loading>
</template>
```

### Animation Mode

- `timing-function` can specify the `animation-timing-function` CSS property of the animation when `mode` is `semicircle` or `circle`; the default is `ease-in-out`

```html
<template>
    <hy-loading timing-function="linear"></hy-loading>
</template>
```

### Animation Duration

- Configure `duration` to specify the animation cycle time

```html
<template>
    <hy-loading duration="2000"></hy-loading>
</template>
```

### Icon Color

- Configure `color` to specify the color of the animation's active area.
- Configure `inactive-color` to specify the dark edge color when mode is circle

```html
<template>
    <hy-loading color="red"></hy-loading>
    <hy-loading mode="circle" color="red"></hy-loading>
</template>
```

### Icon Size

- Configure `size` to set the size in px; within the component, the size value is applied as the component's width and height

```html
<template>
    <hy-loading size="36"></hy-loading>
</template>
```

## API

### Loading Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show the animation | `boolean` | true |
| color | Icon color | `string` | - |
| textColor | Hint text color | `string` | #909399 |
| direction | Whether the icon and text are arranged vertically | `column`\|`row` | row |
| mode | Mode selection[^1] | `spinner`\|`circle`\|`semicircle`\|`dots` \|`bars` | spinner |
| size | Size of the loading icon, default unit px for numeric values | `string` \| `number` | 24 |
| textSize | Size of the loading text, default unit px for numeric values | `string` \| `number` | 15 |
| text | Text content | `string` | - |
| timingFunction | Specifies the animation-timing-function CSS property, only effective when mode is circle or semicircle | `ease-in-out`\|`ease-out`\| `ease-in`\|`linear`\|`ease` | ease-in-out |
| duration | Animation execution cycle time, in ms | `number` | 1200 |
| inactiveColor | Dark edge color of the icon, effective when mode is circle | `string` | - |
| customStyle | Defines external styles to be applied | `string` | - |
| customClass | Custom external class name | `string` | - |

[^1]: `spinner`: petal shape; `circle`: circle; `small`: small size; `semicircle`: semicircle

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-loading-text-font-size` | Text font size | `14px` |
| `--hy-loading-text-line-height` | Text line height | `20px` |
| `--hy-loading-border-width` | Ring border width | `3px` |
| `--hy-loading-bg-color` | Ring track color | `#e5e5e5` |
| `--hy-loading-dots-gap` | Dot spacing | `6px` |
| `--hy-loading-bars-gap` | Bar spacing | `3px` |
| `--hy-loading-vertical-text-color` | Vertical text color | Follows `--hy-text-color--grey` |
| `--hy-loading-column-text-margin` | Top margin of vertically arranged text | Follows `--hy-border-margin-padding-base` |
| `--hy-loading-primary` | Theme color | Follows `--hy-primary` |
| `--hy-loading-row-text-margin` | Left margin of horizontally arranged text | Follows `--hy-border-margin-padding-base` |

<demo-model url="pages-design/loading/loading"></demo-model>