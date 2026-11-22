# Flex Layout Component

> Flex provides spacing for block-level elements without adding a wrapper element itself. It is suitable for laying out child elements in vertical or horizontal directions, offering greater flexibility and control.

## :pushpin:Platform Compatibility

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

- Control the spacing between elements via `gap`. The first value in the array is the horizontal spacing, and the second is the vertical spacing

```html
<hy-flex :gap="10">
    <template v-for="item in 4">
        <hy-button size="small">Button</hy-button>
    </template>
</hy-flex>
```

### Auto Wrapping

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
| vertical | Whether the flex main axis is vertical, uses flex-direction: column | `boolean` | false |
| wrap | Sets whether elements are displayed in a single line or multiple lines | `boolean` | nowrap |
| justify | Sets the alignment of elements along the main axis[^1] | `string` | flex-start |
| align | Sets the alignment of elements along the cross axis[^2] | `string` | flex-start |
| flex | flex CSS shorthand property | `string` | initial |
| gap | Sets the gap between grid items, default unit is px | `string`\|`number`\|`number[]` | 0 |
| basis | Controls the initial size of child elements along the main axis | `string` | auto |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Flex Slots

| Slot Name | Description | Accepted Value | | --- | --- | --- | --- | | default | Default slot, used for custom content | - |

<demo-model url="pages-design/flex/flex"></demo-model>

[^1]: flex-start: left-aligned; center: center-aligned; flex-end: right-aligned; space-between: justified, with equal spacing between items; space-around: each item has equal spacing on both sides, and the spacing between items is twice the spacing between an item and the edge; space-evenly: all spacing is completely equal;

[^2]: flex-start: top-aligned; center: center-aligned; flex-end: bottom-aligned; stretch: stretched to fill the container; baseline: baseline-aligned;