# Divider Component

> A divider line that separates content, typically used for the "no more" hint at the bottom of a page

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage

```html
<!-- Global usage -->
<hy-divider text="Divider"></hy-divider>
```

### Setting a Dashed Line

- Use `dashed` to specify a dashed line

```html
<template>
    <hy-divider text="Moonset" dashed></hy-divider>
</template>
```

### Setting a Hairline

- Use `hairline` to specify a thin line

```html
<template>
    <!-- Thin line -->
    <hy-divider text="Moonset" hairline></hy-divider>
    <!-- Thick line -->
    <hy-divider text="Moonset" :hairline="false"></hy-divider>
</template>
```

### Replacing Text with a Dot

- Use `dot` to replace the text with a dot

```html
<template>
    <hy-divider dot></hy-divider>
</template>
```

### Aligning Text Left or Right

- Use `textPosition` to align the text to the left or right
    - `left`: Text aligned left
    - `center`: Text centered (default)
    - `right`: Text aligned right

```html
<template>
    <hy-divider text="Moonset" textPosition="left"></hy-divider>
    <hy-divider text="Moonset" textPosition="right"></hy-divider>
</template>
```

### Setting Text Color and Line Color

- Use `textColor` and `lineColor` to specify the text color and line color

```html
<template>
    <hy-divider text="Moonset" textColor="#2979ff" lineColor="#ff0000"></hy-divider>
</template>
```

## API

### Divider Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| text | Text content | `string`\|`loadMore`\| `loading`\|`noMore` | - |
| dashed | Whether to use a dashed line | `boolean` | false |
| hairline | Whether to use a hairline (thin line) | `boolean` | true |
| dot | Whether to replace the text with a dot; takes precedence over the text field | `boolean` | false |
| textPosition | Position of the text content | `center`\|`left`\|`right` | center |
| textSize | Text size; numeric values default to px | `string` \| `number` | 14 |
| textColor | Text color | `string` | #909399 |
| lineColor | Line color | `string` | #dcdfe6 |
| loadingIcon | Icon for the loading state | `string` | LOADING |
| loadMoreText | Prompt text before loading | `string` | Load more |
| loadingText | Prompt text while loading | `string` | Loading... |
| noMoreText | Prompt text when there is no more content | `string` | No more data |
| marginTop | Distance from the previous element; numeric values default to px | `string` \| `number` | 0 |
| marginBottom | Distance from the next element; numeric values default to px | `string` \| `number` | 0 |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| click      | Click event | -                   |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-divider-min-height` | Minimum height | `35px` |
| `--hy-divider-text-color` | Text/dot color | Follows `--hy-text-color--3` |
| `--hy-divider-dot-font-size` | Dot font size | Follows `--hy-font-size-sm` (24rpx) |

<demo-model url="pages-design/divider/divider"></demo-model>