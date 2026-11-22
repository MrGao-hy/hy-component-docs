# Watermark Component

> Add a specified image or text on a page or component, which can be used for copyright protection, brand promotion, and other scenarios.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-watermark content="Hy Component Library"></hy-watermark>
```

### Image Watermark

- By setting `image`, specify a network image URL or a Base64 image
- `image-width`: watermark image width
- `image-height`: watermark image height

::: tip Note

The DingTalk Mini Program platform only supports network images

:::

```html
<template>
    <hy-watermark
        image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png"
        :image-width="38"
        :image-height="38"
    ></hy-watermark>
</template>
```

### Partial Watermark

- By setting `full-screen`, specify whether to use a full-screen watermark (if `full-screen` is false, it is a partial watermark).

```html
<template>
    <hy-watermark
        image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png"
        :full-screen="false"
    ></hy-watermark>
</template>
```

### Custom Z-index and Opacity

- By setting `image`, specify a network image URL or a Base64 image, and set the width and height of the watermark image via the image-width and image-height fields.

```html
<template>
    <hy-watermark image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png"></hy-watermark>
</template>
```

### Watermark Spacing

- By setting `gutterX`, set the spacing along the x-axis.
- By setting `gutterY`, set the spacing along the y-axis.

```html
<template>
    <hy-watermark
        image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png"
        :gutterX="40"
        :gutterY="40"
    ></hy-watermark>
</template>
```

### Canvas Width

- By setting `width`, set the canvas width of a single watermark.
- By setting `height`, set the canvas height of a single watermark.

```html
<template>
    <hy-watermark
        image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png"
        :width="200"
        :height="200"
    ></hy-watermark>
</template>
```

### Watermark Font Settings

- By setting `color`, set the watermark font color.
- By setting `size`, set the watermark font size.
- By setting `fontStyle`, set the watermark font style.
- By setting `fontWeight`, set the watermark font weight.
- By setting `fontFamily`, set the watermark font family.

```html
<template>
    <hy-watermark
        image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png"
        color="red"
        :size="23"
    ></hy-watermark>
</template>
```

### Watermark Rotation Angle

- By setting `rotate`, set the rotation angle of the watermark.

```html
<template>
    <hy-watermark
        image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png"
        :rotate="25"
    ></hy-watermark>
</template>
```

### Watermark Opacity

- By setting `opacity`, set the opacity of the watermark.

```html
<template>
    <hy-watermark
        image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png"
        :opacity="1"
    ></hy-watermark>
</template>
```

### Anti-deletion <Badge>^0.6.4</Badge>

- By setting `isAntiTheft`, prevent the watermark image from being deleted or tampered with.

```html
<template>
    <hy-watermark text="Hy Component Library" :isAntiTheft="true"></hy-watermark>
</template>
```

## API

### Watermark Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `string` | - |
| content | Displayed content | `string` | - |
| image | URL of the image to display, supports network images and base64 | `string` | - |
| imageHeight | Image height, default unit px | `number` | 50 |
| imageWidth | Image width, default unit px | `number` | 70 |
| gutterX | X-axis spacing, default unit px | `number` | 0 |
| gutterY | Y-axis spacing, default unit px | `number` | 0 |
| width | Canvas width, default unit px | `number` | 100 |
| height | Canvas height, default unit px | `number` | 100 |
| fullScreen | Whether it is a full-screen watermark | `boolean` | true |
| titleSize | Whether it is a full-screen watermark | `boolean` | true |
| titleColor | Whether it is a full-screen watermark | `boolean` | true |
| color | Watermark font color | `string` | #8c8c8c |
| size | Watermark font size, default unit px | `number` | 14 |
| fontStyle | Watermark font style (only supported on WeChat, Alipay, and H5) | `normal`\|`italic`\|`oblique` | normal |
| fontWeight | Watermark font weight (only supported on WeChat, Alipay, and H5) | `normal`\|`bold`\|`bolder` | normal |
| fontFamily | Watermark font family (only supported on WeChat, Alipay, and H5) | `string` | PingFang SC |
| rotate | Watermark rotation angle | `number` | -25 |
| zIndex | Custom z-index | `number` | 10086 |
| opacity | Custom opacity, value range 0~1 | `number` | 0.5 |
| isAntiTheft | Anti-deletion and anti-style-modification feature (supported since v0.6.4, effective on H5) | `boolean` | false |
| customStyle | Define external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

<demo-model url="pages-design/watermark/watermark"></demo-model>