# Divider Component

> A divider used to separate content, typically used at the bottom of a page as a "no more" hint

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-divider text="Divider"></hy-divider>
```

### Set Dashed Line

- Use `dashed` to specify a dashed line

```html
<template>
    <hy-divider text="Moonset" dashed></hy-divider>
</template>
```

### Set Hairline

- Use `hairline` to specify a thin line

```html
<template>
    <!-- Thin line -->
    <hy-divider text="Moonset" hairline></hy-divider>
    <!-- Thick line -->
    <hy-divider text="Moonset" :hairline="false"></hy-divider>
</template>
```

### Replace Text with a Dot

- Use `dot` to replace the text with a dot

```html
<template>
    <hy-divider dot></hy-divider>
</template>
```

### Set Text Alignment (Left/Right)

- Use `textPosition` to specify the text alignment
    - `left`: text aligned to the left
    - `center`: text centered (default)
    - `right`: text aligned to the right

```html
<template>
    <hy-divider text="Moonset" textPosition="left"></hy-divider>
    <hy-divider text="Moonset" textPosition="right"></hy-divider>
</template>
```

### Set Text Color and Line Color

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
| hairline | Whether to use a thin line | `boolean` | true |
| dot | Whether to replace the text with a dot; takes precedence over the text field | `boolean` | false |
| textPosition | Position of the text content | `center`\|`left`\|`right` | center |
| textSize | Text size; numeric values default to px | `string` \| `number` | 14 |
| textColor | Text color | `string` | #909399 |
| lineColor | Line color | `string` | #dcdfe6 |
| loadingIcon | Icon for the loading state | `string` | LOADING |
| loadMoreText | Prompt before loading | `string` | Load more |
| loadingText | Loading prompt | `string` | Loading... |
| noMoreText | "No more" prompt | `string` | No more data |
| marginTop | Distance from the previous element; numeric values default to px | `string` \| `number` | 0 |
| marginBottom | Distance from the next element; numeric values default to px | `string` \| `number` | 0 |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| click      | Click event | -                   |

### CSS Variables

| Variable Name                | Description       | Default                            |
| ---------------------------- | ----------------- | ---------------------------------- |
| `--hy-divider-min-height`    | Minimum height    | `35px`                             |
| `--hy-divider-text-color`    | Text/dot color    | Follows `--hy-text-color--3`       |
| `--hy-divider-dot-font-size` | Dot font size     | Follows `--hy-font-size-sm` (24rpx) |

<demo-model url="pages-design/divider/divider"></demo-model>