# Loading Animation Component

> This component is a small animation, currently used in Huayue's loadMore (load more) and other components for the loading state scenario.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-loading></hy-loading>
```

### Animation Text

- Specify the text content via the `text` prop
- Specify the text size via the `textSize` prop

```html
<template>
    <hy-loading text="Loading..." textSize="18"></hy-loading>
</template>
```

### Mode Types

- Specify the mode via the `mode` prop
    - `spinner` petal shape (default)
    - `circle` ring loading style
    - `semicircle` half-circle loading style
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

- Specify whether the text and icon are arranged vertically via the `direction` prop
    - `row` loading icon and text arranged horizontally
    - `column` loading icon and text arranged vertically

```html
<template>
    <hy-loading text="Loading" direction="row"></hy-loading>
    <hy-loading text="Loading" direction="column"></hy-loading>
</template>
```

### Animation Mode

- `timing-function` specifies the `animation-timing-function` CSS property of the animation when `mode` is `semicircle` or `circle`, defaulting to `ease-in-out`

```html
<template>
    <hy-loading timing-function="linear"></hy-loading>
</template>
```

### Animation Duration

- Specify the animation cycle duration via the `duration` prop

```html
<template>
    <hy-loading duration="2000"></hy-loading>
</template>
```

### Icon Color

- Specify the color of the animated active area via the `color` prop.
- Specify the dark edge color when mode is circle via the `inactive-color` prop

```html
<template>
    <hy-loading color="red"></hy-loading>
    <hy-loading mode="circle" color="red"></hy-loading>
</template>
```

### Icon Size

- Set the size via the `size` prop, in px; the component applies the size value as its width and height

```html
<template>
    <hy-loading size="36"></hy-loading>
</template>
```

## API

### Loading Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show the animation | `boolean` | true |
| color | Icon color | `string` | - |
| textColor | Hint text color | `string` | #909399 |
| direction | Whether the icon and text are arranged vertically | `column`\|`row` | row |
| mode | Mode selection[^1] | `spinner`\|`circle`\|`semicircle`\|`dots` \|`bars` | spinner |
| size | Size of the loading icon, default unit px | `string` \| `number` | 24 |
| textSize | Size of the loading text, default unit px | `string` \| `number` | 15 |
| text | Text content | `string` | - |
| timingFunction | Specifies the animation-timing-function CSS property, only effective when mode is circle or semicircle | `ease-in-out`\|`ease-out`\| `ease-in`\|`linear`\|`ease` | ease-in-out |
| duration | Animation cycle duration, in ms | `number` | 1200 |
| inactiveColor | Dark edge color of the icon, only effective in circle mode | `string` | - |
| customStyle | Define external styles to be applied | `string` | - |
| customClass | Custom external class name | `string` | - |

[^1]: `spinner`: petal shape; `circle`: circle; `small`: small size; `semicircle`: semicircle

<demo-model url="pages-design/loading/loading"></demo-model>