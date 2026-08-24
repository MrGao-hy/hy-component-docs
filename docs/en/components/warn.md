# Warn Alert Component

> Alert prompt that displays information requiring attention.

## :pushpin: Platform Difference Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-warn text="The moon sets, crows caw, frost fills the sky"></hy-warn>
```

### Theme Configuration

- Use `showIcon` to set whether to display the icon, making the message type more prominent.

::: tip Note

The icons in the current version are built-in Huayue icons, displayed based on the `type` parameter, and cannot be customized.

:::

```html
<template>
    <hy-warn text="The wind soughs, the Yi River runs cold" show-icon type="success"></hy-warn>
    <hy-warn text="The wind soughs, the Yi River runs cold" show-icon type="primary"></hy-warn>
    <hy-warn text="The wind soughs, the Yi River runs cold" show-icon type="error"></hy-warn>
    <hy-warn text="The wind soughs, the Yi River runs cold" show-icon type="info"></hy-warn>
</template>
```

### Closable Alert

- The `closable` parameter configures whether it can be closed

```html
<template>
    <hy-warn text="The wind soughs, the Yi River runs cold" closable></hy-warn>
</template>
```

### Dark or Light Background Color

```html
<template>
    <!-- Light -->
    <hy-warn text="The wind soughs, the Yi River runs cold" theme="light"></hy-warn>
    <!-- Dark -->
    <hy-warn text="The wind soughs, the Yi River runs cold" theme="dark"></hy-warn>
</template>
```

## API

### Warn Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| title | Text to display | `string` | - |
| type | Use preset colors | `error`\|`warning`\|`success` \|`primary`\|`info` | warning |
| description | Auxiliary text, with a lighter color and smaller font size than the title, optional | `string` | - |
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

<demo-model url="pages-design/warn/warn"></demo-model>