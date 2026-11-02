# Image Component

> This component is an enhanced version of the uni-app image component. In addition to inheriting all the original features, it also supports fade-in animation, loading indicators, load failure hints, border radius values, and shapes.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage

```html
<!-- Global usage -->
<hy-image
    src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
></hy-image>
```

### Setting Size

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

### Setting Border Radius

- Set the image shape via the `shape` prop
    - `circle`: circle
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

### Previewing Full-size Image

- Set `previewImage` to true to enable full-size image preview

```html
<template>
    <hy-image
        src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
        previewImage
    ></hy-image>
</template>
```

### Setting Fade-in Effect

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

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| src | Image URL. It is **strongly recommended** to use an absolute or network path | `string` | - |
| mode | Crop mode. See [image component](https://uniapp.dcloud.net.cn/component/image.html) for details | `string` | aspectFill |
| width | Width, px by default for numeric values | `string`\|`number` | 200 |
| height | Height, px by default for numeric values | `string`\|`number` | 150 |
| shape | Image shape[^1] | `circle`\|`square` | square |
| radius | Border radius, px by default for numeric values | `string`\|`number` | 0 |
| lazyLoad | Whether to lazy load. Only effective on WeChat Mini Program, App, Baidu Mini Program, and ByteDance Mini Program | `boolean` | true |
| showMenuByLongPress | Whether to enable showing the mini program code recognition menu when long-pressing the image. Only effective on WeChat Mini Program | `boolean` | true |
| loadingIcon | Loading icon, or small image | `string` | LOADING |
| errorIcon | Load failure icon, or small image | `string` | NOTICE |
| showLoading | Whether to show the loading icon or a custom slot | `boolean` | true |
| showError | Whether to show the error icon or a custom slot | `boolean` | true |
| fade | Whether to enable the fade-in effect | `boolean` | true |
| webp | Only supports network resources. Only effective on WeChat Mini Program | `boolean` | false |
| duration | Transition duration used with the fade prop, in ms | `number` | 500 |
| bgColor | Background color, used to blend with the background when loading images on dark pages | `string` | - |
| indistinct | Blurred image, applies a blur style to the image | `boolean` | false |
| previewImage | Whether to preview the image | `boolean` | false |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event | Description | Callback Parameters |
| ------ | ------------------ | ------------- |
| click  | Triggered when the image is clicked | - |
| error  | Triggered when the image fails to load | err: error message |
| load   | Triggered when the image loads successfully | e |

### Slots

| Slot | Description | Accepted Values |
| ------- | ---------------------- | ------ |
| loading | Custom loading hint content | - |
| error   | Custom failure hint content | - |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-image-width` | Default width | `250px` |
| `--hy-image-height` | Default height | `200px` |
| `--hy-image-placeholder-color` | Loading/failure placeholder color | Follows `--hy-text-color--grey` |

[^1]: `circle`: both sides are semicircles; `square`: square

<demo-model url="pages-design/image/image"></demo-model>