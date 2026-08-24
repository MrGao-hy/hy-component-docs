# Flex Flexible Layout Component

> Flex provides spacing for block-level elements without adding a wrapper element itself. It is suitable for arranging child elements in vertical or horizontal directions, and offers greater flexibility and control.

## :pushpin:Platform Compatibility Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage Example

```html
<!-- Global usage -->
<hy-flex>
    <hy-button size="small">Submit</hy-button>
    <hy-button size="small" type="success">Review</hy-button>
    <hy-button size="small" type="error">Delete</hy-button>
</hy-flex>
```

### Setting Alignment

- Set the alignment along the main axis via `justify`
- Set the alignment along the cross axis via `align`

```html
<hy-flex justify="center" align="center">
    <hy-button size="small">Button</hy-button>
</hy-flex>
```

### Setting Spacing

- Control the spacing between elements via `gap`; the first value of the array is the horizontal spacing, and the second is the vertical spacing

```html
<hy-flex :gap="10">
    <template v-for="item in 4">
        <hy-button size="small">Button</hy-button>
    </template>
</hy-flex>
```

### Automatic Wrapping

- Enable automatic wrapping via `wrap`

```html
<hy-flex wrap="wrap" :gap="[15, 20]">
    <template v-for="item in 10">
        <hy-button size="small">Button</hy-button>
    </template>
</hy-flex>
```

## API

### Flex Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| vertical | Whether the flex main axis direction is vertical, using flex-direction: column | `boolean` | false |
| wrap | Sets whether elements are displayed in a single line or multiple lines | `boolean` | nowrap |
| justify | Sets the alignment of elements along the main axis[^1] | `string` | flex-start |
| align | Sets the alignment of elements along the cross axis[^2] | `string` | flex-start |
| flex | flex CSS shorthand property | `string` | initial |
| gap | Sets the gap between grids; the default unit for numeric values is px | `string`\|`number`\|`number[]` | 0 |
| basis | Controls the initial size of child elements along the main axis | `string` | auto |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

<demo-model url="pages-design/flex/flex"></demo-model>

[^1]: flex-start: left-aligned; center: centered; flex-end: right-aligned; space-between: justified, with equal spacing between items; space-around: equal spacing on both sides of each item, with the spacing between items being twice the spacing between items and the container edges; space-evenly: all spacing completely equal;

[^2]: flex-start: top-aligned; center: centered; flex-end: bottom-aligned; stretch: stretched to fill the container; baseline: baseline-aligned;