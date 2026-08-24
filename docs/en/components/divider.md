# Divider Component

> A dividing line used to separate content, commonly used for the "no more" hint at the bottom of a page

## :pushpin:Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage

```html
<!-- 全局使用 -->
<hy-divider text="分割"></hy-divider>
```

### Setting a Dashed Line

- Use `dashed` to specify a dashed line

```html
<template>
    <hy-divider text="月落" dashed></hy-divider>
</template>
```

### Setting a Hairline

- Use `hairline` to specify a thin line

```html
<template>
    <!--细线-->
    <hy-divider text="月落" hairline></hy-divider>
    <!--粗线-->
    <hy-divider text="月落" :hairline="false"></hy-divider>
</template>
```

### Using a Dot Instead of Text

- Use `dot` to replace the text with a dot

```html
<template>
    <hy-divider dot></hy-divider>
</template>
```

### Setting Text Alignment

- Use `textPosition` to specify whether the text is aligned left or right
    - `left`: text aligned to the left
    - `center`: text centered (default)
    - `right`: text aligned to the right

```html
<template>
    <hy-divider text="月落" textPosition="left"></hy-divider>
    <hy-divider text="月落" textPosition="right"></hy-divider>
</template>
```

### Setting Text Color and Line Color

- Use `textColor` and `lineColor` to specify the text color and line color

```html
<template>
    <hy-divider text="月落" textColor="#2979ff" lineColor="#ff0000"></hy-divider>
</template>
```

## API

### Divider Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| text | Text content | `string`\|`loadMore`\| `loading`\|`noMore` | - |
| dashed | Whether to use a dashed line | `boolean` | false |
| hairline | Whether to use a hairline (thin line) | `boolean` | true |
| dot | Whether to use a dot instead of text; takes precedence over the text field | `boolean` | false |
| textPosition | Position of the text content | `center`\|`left`\|`right` | center |
| textSize | Text size; numeric values default to px | `string` \| `number` | 14 |
| textColor | Text color | `string` | #909399 |
| lineColor | Line color | `string` | #dcdfe6 |
| loadingIcon | Icon for the loading state | `string` | LOADING |
| loadMoreText | Prompt text shown before loading | `string` | Load more |
| loadingText | Prompt text shown while loading | `string` | Loading... |
| noMoreText | Prompt text shown when there is no more content | `string` | No more data |
| marginTop | Distance from the previous element; numeric values default to px | `string` \| `number` | 0 |
| marginBottom | Distance from the next element; numeric values default to px | `string` \| `number` | 0 |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ------ | -------- | -------- |
| click  | Click event | -        |

<demo-model url="pages-design/divider/divider"></demo-model>