# Warn Alert Component

> Alert for displaying information that requires attention.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-warn text="Moon sets, crows cry, frost fills the sky"></hy-warn>
```

### Theme Configuration

- Use `showIcon` to set whether to display the icon, which makes the message type more prominent.

::: tip Note

In the current version, the icons are built-in Hy icons. Different icons are displayed according to the `type` parameter and cannot be customized.

:::

```html
<template>
    <hy-warn text="The wind blows chill, the Yi River cold" show-icon type="success"></hy-warn>
    <hy-warn text="The wind blows chill, the Yi River cold" show-icon type="primary"></hy-warn>
    <hy-warn text="The wind blows chill, the Yi River cold" show-icon type="error"></hy-warn>
    <hy-warn text="The wind blows chill, the Yi River cold" show-icon type="info"></hy-warn>
</template>
```

### Closable Alert

- The `closable` parameter configures whether the alert can be closed

```html
<template>
    <hy-warn text="The wind blows chill, the Yi River cold" closable></hy-warn>
</template>
```

### Dark or Light Background Color

```html
<template>
    <!-- Light -->
    <hy-warn text="The wind blows chill, the Yi River cold" theme="light"></hy-warn>
    <!-- Dark -->
    <hy-warn text="The wind blows chill, the Yi River cold" theme="dark"></hy-warn>
</template>
```

## API

### Warn Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Displayed text | `string` | - |
| type | Preset color to use | `error`\|`warning`\|`success` \|`primary`\|`info` | warning |
| description | Auxiliary text, lighter in color and smaller in font size than title, optional | `string` | - |
| closable | Close button (defaults to an X icon) | `boolean` | false |
| showIcon | Whether to display the auxiliary icon on the left | `boolean` | false |
| theme | Display in dark or light mode | `light` \| `dark` | dark |
| center | Whether the text is centered | `boolean` | false |
| fontSize | Font size | `string` \| `number` | 14 |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| click  | Triggered when the component is clicked | -        |
| close  | Triggered when the component is closed | -        |

### CSS Variables

| Variable                    | Description              | Default                       |
| --------------------------- | ------------------------ | ----------------------------- |
| `--hy-warn-title-font-size` | Title font size          | `14px`                        |
| `--hy-warn-desc-font-size`  | Description font size    | `14px`                        |
| `--hy-warn-close-top`       | Close button top margin  | `11px`                        |
| `--hy-warn-close-right`     | Close button right margin| `10px`                        |
| `--hy-warn-radius`          | Container border radius  | Follows `--hy-radius-sm` (8rpx) |
| `--hy-warn-text-color`      | Title/description color  | `#fff`                        |

<demo-model url="pages-design/warn/warn"></demo-model>