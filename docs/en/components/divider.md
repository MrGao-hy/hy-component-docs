# Divider Component

> A divider line for separating content, typically used for the "No more" prompt at the bottom of a page

## :pushpin:Platform Compatibility Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage Examples

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
    <!--Thin line-->
    <hy-divider text="Moonset" hairline></hy-divider>
    <!--Thick line-->
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

### Setting Text Alignment

- Use `textPosition` to align the text to the left or right
    - `left`: text aligned to the left
    - `center`: text centered (default)
    - `right`: text aligned to the right

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

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| text | Text content | `string`\|`loadMore`\| `loading`\|`noMore` | - |
| dashed | Whether to use a dashed line | `boolean` | false |
| hairline | Whether to use a thin line (hairline) | `boolean` | true |
| dot | Whether to replace the text with a dot, takes precedence over the text field | `boolean` | false |
| textPosition | Position of the text content | `center`\|`left`\|`right` | center |
| textSize | Text size, default unit is px for numeric values | `string` \| `number` | 14 |
| textColor | Text color | `string` | #909399 |
| lineColor | Line color | `string` | #dcdfe6 |
| loadMoreText | Prompt text before loading | `string` | Load more |
| loadingText | Prompt text while loading | `string` | Loading... |
| noMoreText | Prompt text when there is no more data | `string` | No more data |
| marginTop | Distance from the previous element, default unit is px for numeric values | `string` \| `number` | 0 |
| marginBottom | Distance from the next element, default unit is px for numeric values | `string` \| `number` | 0 |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### CSS Variables

| Variable Name                | Description     | Default Value                        |
| ---------------------------- | -------------- | ------------------------------------ |
| `--hy-divider-min-height`    | Minimum height | `35px`                               |
| `--hy-divider-text-color`    | Text/dot color | Follows `--hy-text-color--3`            |
| `--hy-divider-dot-font-size` | Dot font size  | Follows `--hy-font-size-sm` (24rpx)    |
| `--hy-divider-dot-margin`    | Dot left/right margin | Follows `--hy-border-margin-padding-sm` |
| `--hy-divider-text-margin`   | Text left/right margin | Follows `--hy-border-margin-padding-sm` |

<demo-model url="pages-design/divider/divider"></demo-model>