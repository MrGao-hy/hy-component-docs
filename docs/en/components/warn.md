# Warn Alert Component

> Alert component for displaying information that requires attention.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-warn text="月落乌啼霜满天"></hy-warn>
```

### Theme Configuration

- Use `showIcon` to set whether to display the icon, which makes the message type more prominent.

::: tip Note

In the current version, the icons are built-in Hy icons that vary based on the `type` parameter and cannot be customized.

:::

```html
<template>
    <hy-warn text="风萧萧兮易水寒" show-icon type="success"></hy-warn>
    <hy-warn text="风萧萧兮易水寒" show-icon type="primary"></hy-warn>
    <hy-warn text="风萧萧兮易水寒" show-icon type="error"></hy-warn>
    <hy-warn text="风萧萧兮易水寒" show-icon type="info"></hy-warn>
</template>
```

### Closable Alert

- The `closable` parameter configures whether the alert can be closed

```html
<template>
    <hy-warn text="风萧萧兮易水寒" closable></hy-warn>
</template>
```

### Dark or Light Background

```html
<template>
    <!-- Light -->
    <hy-warn text="风萧萧兮易水寒" theme="light"></hy-warn>
    <!-- Dark -->
    <hy-warn text="风萧萧兮易水寒" theme="dark"></hy-warn>
</template>
```

## API

### Warn Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Displayed text | `string` | - |
| type | Use preset colors | `error`\|`warning`\|`success` \|`primary`\|`info` | warning |
| description | Auxiliary text, lighter in color and smaller in font size than title, optional | `string` | - |
| closable | Close button (defaults to an X icon) | `boolean` | false |
| showIcon | Whether to show the auxiliary icon on the left | `boolean` | false |
| theme | Dark or light display | `light` \| `dark` | dark |
| center | Whether text is centered | `boolean` | false |
| fontSize | Font size | `string` \| `number` | 14 |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| click  | Triggered when the component is clicked | -        |
| close  | Triggered when the component is closed | -        |

### CSS Variables

| Variable Name | Description | Default |
| --- | --- | --- |
| `--hy-warn-title-font-size` | Title font size | `14px` |
| `--hy-warn-desc-font-size` | Description font size | `14px` |
| `--hy-warn-close-top` | Close button top margin | `11px` |
| `--hy-warn-close-right` | Close button right margin | `10px` |
| `--hy-warn-radius` | Container border radius | Follows `--hy-radius-sm` (8rpx) |
| `--hy-warn-text-color` | Title/description color | `#fff` |

<demo-model url="pages-design/warn/warn"></demo-model>