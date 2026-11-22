# Warn Alert Component

> Alert prompt that displays information requiring attention.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-warn text="The moon sets, crows cry, frost fills the sky"></hy-warn>
```

### Theme Configuration

- Use `showIcon` to set whether to display an icon, which makes the message type more prominent.

::: tip Note

In the current version, the icons are built-in Hy icons that change according to the `type` parameter and cannot be customized.

:::

```html
<template>
    <hy-warn text="The wind blows bleak, the Yi River is cold" show-icon type="success"></hy-warn>
    <hy-warn text="The wind blows bleak, the Yi River is cold" show-icon type="primary"></hy-warn>
    <hy-warn text="The wind blows bleak, the Yi River is cold" show-icon type="error"></hy-warn>
    <hy-warn text="The wind blows bleak, the Yi River is cold" show-icon type="info"></hy-warn>
</template>
```

### Closable Alert

- The `closable` parameter configures whether the alert can be closed

```html
<template>
    <hy-warn text="The wind blows bleak, the Yi River is cold" closable></hy-warn>
</template>
```

### Dark or Light Background Color

```html
<template>
    <!-- Light -->
    <hy-warn text="The wind blows bleak, the Yi River is cold" theme="light"></hy-warn>
    <!-- Dark -->
    <hy-warn text="The wind blows bleak, the Yi River is cold" theme="dark"></hy-warn>
</template>
```

## API

### Warn Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Displayed text | `string` | - |
| type | Uses preset colors | `error`\|`warning`\|`success` \|`primary`\|`info` | warning |
| description | Auxiliary text, with a lighter color and smaller font size than the title, optional | `string` | - |
| closable | Close button (defaults to a cross icon) | `boolean` | false |
| showIcon | Whether to display the auxiliary icon on the left | `boolean` | false |
| theme | Dark or light display | `light` \| `dark` | dark |
| center | Whether the text is centered | `boolean` | false |
| fontSize | Font size | `string` \| `number` | 14 |
| customClass | Custom external class name | `string` | - |
| customStyle | Define external styles to be used | `CSSProperties` | - |

### Events

| Event Name | Description | Callback Parameters |
| ------ | -------------- | -------- |
| click  | Triggered when the component is clicked | -        |
| close  | Triggered when the component is closed | -        |

### Warn Slots

| Slot Name | Description | Accepted Values |
| ------ | -------------- | ------ |
| right  | Custom right-side content | -      |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-warn-title-font-size` | Title font size | `14px` |
| `--hy-warn-desc-font-size` | Description font size | `14px` |
| `--hy-warn-line-height` | Title/description line height, and left icon size | `21px` |
| `--hy-warn-close-right` | Close button right margin | `10px` |
| `--hy-warn-radius` | Container border radius | Follows `--hy-radius-sm` (8rpx) |
| `--hy-warn-text-color` | Title/description color | `#fff` |
| `--hy-warn-error` | Danger color | Follows `--hy-error` |
| `--hy-warn-error-light` | Light danger color | Follows `--hy-error-light` |
| `--hy-warn-icon-margin` | Icon right margin | Follows `--hy-border-margin-padding-sm` |
| `--hy-warn-info` | Info color | Follows `--hy-info` |
| `--hy-warn-info-light` | Light info color | Follows `--hy-info-light` |
| `--hy-warn-padding` | Overall alert padding | Follows `--hy-border-margin-padding-base` |
| `--hy-warn-primary` | Primary color | Follows `--hy-primary` |
| `--hy-warn-primary-light` | Light primary color | Follows `--hy-primary-light` |
| `--hy-warn-success` | Success color | Follows `--hy-success` |
| `--hy-warn-success-light` | Light success color | Follows `--hy-success-light` |
| `--hy-warn-warning` | Warning color | Follows `--hy-warning` |
| `--hy-warn-warning-light` | Light warning color | Follows `--hy-warning-light` |

<demo-model url="pages-design/warn/warn"></demo-model>