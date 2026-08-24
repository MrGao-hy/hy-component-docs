# Empty Empty-State Component

> This component is used for scenarios where content needs to be loaded but the first page of loaded data is empty, displaying a "no content" prompt. We have carefully selected a dozen or so scenario-specific icons for your convenience.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-empty></hy-empty>
```

### Displaying and Configuring the Button

- `btnText` Text displayed on the button
- `btnSize` Button size
- `btnShape` Button shape
- `btnPlain` Whether the button is outlined
- `navigateUrl` Page to navigate to

```html
<template>
    <hy-empty
        btnText="Go Shopping"
        btnSize="mini"
        btnShape="circle"
        btnPlain
        navigateUrl="/pages/abc/Index"
    ></hy-empty>
</template>
```

### Configuring the Prompt Text

- `desSize` Prompt text size
- `desColor` Prompt text color

```html
<template>
    <hy-empty desColor="red" desSize="10px"></hy-empty>
</template>
```

### Custom Slots

```html
<template>
    <hy-empty>
        <template #description>Custom description content</template>
    </hy-empty>

    <hy-empty>
        <template>Custom default slot</template>
    </hy-empty>
</template>
```

## API

### Empty Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show the component | `boolean` | true |
| mode | Empty page content | `string` | content |
| imageUrl | Empty state icon image | `string` | - |
| zIndex | Component z-index | `number` | 889 |
| width | Image width, numbers default to px unit | `string`\|`number` | 240px |
| height | Image height, numbers default to px unit | `string`\|`number` | 240px |
| description | Prompt message | `string` | No data yet |
| desSize | Prompt message size, numbers default to px unit | `string`\|`number` | 15 |
| desColor | Prompt message color | `string` | - |
| imgMargin | Icon image margin | `string` | - |
| button | Collection of button properties, displayed when text has a value, see [Button API](./button#api) for details | `HyButtonProps` | - |
| navigateUrl | Navigation URL | `string` | - |
| customStyle | Custom outer style of the input box | `CSSProperties` | - |
| customClass | Custom outer class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ------ | ---------------- | -------- |
| click  | Function executed when the button is clicked | -        |

### Slots

| Slot Name   | Description                   | Accepted Values |
| ----------- | ------------------------------ | ------ |
| default     | Default slot                   | -      |
| description | Custom bottom description      | -      |

[^1]: `normal`: default size; `large`: large size; `small`: small size; `mini`: mini size

[^2]: `error`: #fa3534; `warning`: #ff9900; `success`: #19be6b; `primary`: #2979ff; `info`: #909399;

[^3]: `circle`: both ends are semicircular; `square`: square with rounded corners

<demo-model url="pages-design/empty/empty"></demo-model>