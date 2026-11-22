# Badge Component

> This component is generally used to display the number of unread messages at the top-right corner of an icon, prompting users to click. It comes in two forms: a dot and a circle containing text. It supports two modes: **standalone use** and **wrapping content with the default slot**.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<template>
    <hy-badge :value="8"></hy-badge>
</template>
```

### Slot Usage

When a default slot is passed in, the component renders in wrapping form, with the badge automatically straddling the top-right corner of the content — no need to manually enable `absolute` positioning. Suitable for adding badges to avatars, icons, and similar content.

::: code-group

```html [vue]
<template>
    <hy-badge :value="8" border>
        <hy-avatar size="large" shape="square" :src="config.avatar"></hy-avatar>
    </hy-badge>
    <hy-badge is-dot border>
        <hy-avatar size="large" shape="circle" :src="config.avatar"></hy-avatar>
    </hy-badge>
</template>
```

```ts [index.ts]
const config = {
    avatar: 'https://cdn.example.com/avatar.png',
};
```

:::

- In slot mode, the badge position can be fine-tuned via `offset`, in the format `[top, right]`, in px.
- When no slot is passed, the badge remains in standalone form and can be positioned manually via `absolute` combined with `offset` (in this case `[top, left]`).

### Setting the Dot-Type Badge

Use `is-dot` to set the dot-type badge.

```html
<hy-badge is-dot></hy-badge>
```

### Corner Shape

Use `shape` to set the badge shape. Optional values: `circle` (round, default), `horn` (horn shape).

```html
<hy-badge :value="123" shape="circle"></hy-badge>
<hy-badge :value="123" shape="horn"></hy-badge>
```

### Setting the Number Display Mode

Use `number-type` to set how the number is displayed. Optional values:

- `overflow`: displays `{max}+` when exceeding `max`
- `ellipsis`: displays `...` when exceeding `max`
- `limit`: always displays the `max` number when exceeding `max`

```html
<hy-badge :value="1234" :max="99" number-type="overflow"></hy-badge>
```

### Theme Color

Use `type` to set the theme color. Optional values: `primary`, `success`, `info`, `warning`, `error`.

```html
<hy-badge :value="8" type="primary"></hy-badge>
<hy-badge :value="8" type="success"></hy-badge>
<hy-badge :value="8" type="warning"></hy-badge>
```

### Inverted Colors

Use `inverted` to invert the background and font colors.

```html
<hy-badge :value="8" inverted></hy-badge>
```

### White Border

Use `border` to display a white border.

```html
<hy-badge :value="8" border></hy-badge>
```

## API

### Badge Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| isDot | Whether to show a dot | `boolean` | false |
| value | Content to display | `string`\|`number` | 0 |
| show | Whether to show | `boolean` | true |
| max | Maximum value; when exceeded, handled according to `numberType` | `number` | 999 |
| zIndex | Stack level | `number` | 999 |
| type | Theme type, optional values: `error`, `warning`, `success`, `primary`, `info` | `string` | error |
| showZero | Whether to show the badge when the value is 0 | `boolean` | false |
| bgColor | Background color; takes priority over `type` — once set, `type` is ignored | `string` | - |
| color | Font color | `string` | - |
| shape | Badge shape, optional values: `circle`, `horn` | `string` | circle |
| border | Whether to show a white border | `boolean` | false |
| numberType | Number display mode, optional values: `overflow`, `ellipsis`, `limit` | `string` | overflow |
| offset | Position offset `[x, y]`, in px. In slot mode it is `[top, right]`, used to fine-tune the straddle position; in standalone mode it is `[top, left]` (effective when `absolute` is true) | `array` | - |
| inverted | Whether to invert the background and font colors | `boolean` | false |
| absolute | Whether to use absolute positioning; only effective in standalone use (when no default slot is passed). In slot mode, the badge is automatically positioned at the top-right corner of the content | `boolean` | false |
| customStyle | Custom external style | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| click | Triggered when the badge is clicked | event: Event - Event object |

### Slots

| Slot Name | Description | Accepted Values |
| --------- | ----------- | --------------- |
| default | Wraps content; when passed, the component renders in wrapping form, with the badge straddling the top-right corner of the content | - |

### CSS Variables

| Variable Name                  | Description            | Default Value                 |
| ------------------------------ | ---------------------- | ----------------------------- |
| `--hy-badge-dot-size`           | Dot size               | `8px`                         |
| `--hy-badge-text-font-size`     | Text font size         | `11px`                        |
| `--hy-badge-radius`             | Badge border radius    | Follows `--hy-radius-semicircle` |
| `--hy-badge-padding`            | Padding of non-dot badges | `2px 5px`                  |
| `--hy-badge-inverted-font-size` | Font size in inverted mode | `13px`                     |
| `--hy-badge-border-width`       | White border width     | `2px`                         |
| `--hy-badge-border-color`       | White border color     | Follows `--hy-background--2`  |

<demo-model url="pages-design/badge/badge"></demo-model>