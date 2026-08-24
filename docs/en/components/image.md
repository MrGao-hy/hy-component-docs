# Image Component

> This component is an enhanced version of uni-app's image component. In addition to inheriting the original features, it also supports fade-in animation, loading state, load failure indicators, border radius values, and shapes.

## :pushpin:Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage Example

```html
<!-- Global usage -->
<hy-image
    src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
></hy-image>
```

### Set Size

- Set the image width via the `width` prop
- Set the image height via the `height` prop

```html
<template>
    <hy-image
        src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
        width="100"
        height="100"
    ></hy-image>
</template>
```

### Set Shape

- Set the image shape via the `shape` prop
    - `circle`: circular
    - `square`: square

```html
<template>
    <hy-image
        src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
        width="100"
        height="100"
        shape="circle"
    ></hy-image>
</template>
```

### Preview Full-size Image

- Set `previewImage` to true to enable full-size image preview

```html
<template>
    <hy-image
        src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
        previewImage
    ></hy-image>
</template>
```

### Set Fade-in Effect

- Set `fade` to true to enable the animation (true by default)

```html
<template>
    <hy-image
        src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
        fade
    ></hy-image>
</template>
```

## API

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| src | Image URL, **strongly recommended** to use an absolute or network path | `string` | - |
| mode | Crop mode, see [image component](https://uniapp.dcloud.net.cn/component/image.html) for details | `string` | aspectFill |
| width | Width, default unit px for numeric values | `string`\|`number` | 200 |
| height | Height, default unit px for numeric values | `string`\|`number` | 150 |
| shape | Image shape[^1] | `circle`\|`square` | square |
| radius | Border radius, default unit px for numeric values | `string`\|`number` | 0 |
| lazyLoad | Whether to enable lazy loading, only effective on WeChat Mini Program, App, Baidu Mini Program, and ByteDance Mini Program | `boolean` | true |
| showMenuByLongPress | Whether to enable the mini program code recognition menu on long press, only effective on WeChat Mini Program | `boolean` | true |
| loadingIcon | Loading icon or small image | `string` | LOADING |
| errorIcon | Error icon or small image | `string` | NOTICE |
| showLoading | Whether to show the loading icon or a custom slot | `boolean` | true |
| showError | Whether to show the error icon or a custom slot | `boolean` | true |
| fade | Whether to enable the fade-in effect | `boolean` | true |
| webp | Only supports network resources, only effective on WeChat Mini Program | `boolean` | false |
| duration | Transition duration used with the fade prop, in ms | `number` | 500 |
| bgColor | Background color, used when loading images on dark pages to blend with the background color | `string` | - |
| indistinct | Blur the image, applies a blur style to the image | `boolean` | false |
| previewImage | Whether to enable image preview | `boolean` | false |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

## Events

| Event Name | Description               | Callback Parameters      |
| ------ | ------------------ | ------------- |
| click  | Triggered when the image is clicked     | -             |
| error  | Triggered when the image fails to load | err: error message |
| load   | Triggered when the image loads successfully | e             |

## Slots

| Slot Name  | Description                   | Received Value |
| ------- | ---------------------- | ------ |
| loading | Custom loading indicator content | -      |
| error   | Custom failure indicator content   | -      |

[^1]: `circle`: semicircles on both sides; `square`: square

<demo-model url="pages-design/image/image"></demo-model>