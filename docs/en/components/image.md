# Image Component

> This component is an enhanced version of the uni-app image component. In addition to inheriting the original features, it also supports fade-in animation, loading state, load failure prompts, border radius values, and shapes.

## :pushpin: Platform Compatibility

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

- Set the image width via the `width` property
- Set the image height via the `height` property

```html
<template>
    <hy-image
        src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
        width="100"
        height="100"
    ></hy-image>
</template>
```

::: tip Note: When `mode="widthFix"`, the image height adapts automatically to the width, so the `height` property cannot control the height. To fix the height, set it via `customStyle`:

```html
<template>
    <hy-image
        src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
        mode="widthFix"
        width="200"
        :custom-style="{ height: '372rpx' }"
    ></hy-image>
</template>
```

:::

### Setting Border Radius

- Set the image shape via the `shape` property
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

### Previewing Large Images

- Set `previewImage` to true to enable large image preview

```html
<template>
    <hy-image
        src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"
        previewImage
    ></hy-image>
</template>
```

### Setting the Fade-in Effect

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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| src | Image URL, **strongly recommended** to use an absolute or network path | `string` | - |
| mode | Crop mode, see [image component](https://uniapp.dcloud.net.cn/component/image.html) for details | `string` | aspectFill |
| width | Width, default unit px for numeric values | `string`\|`number` | 200 |
| height | Height, default unit px for numeric values | `string`\|`number` | 150 |
| shape | Image shape[^1] | `circle`\|`square` | square |
| radius | Border radius, default unit px for numeric values | `string`\|`number` | 0 |
| lazyLoad | Whether to lazy load, only effective on WeChat Mini Program, App, Baidu Mini Program, and ByteDance Mini Program | `boolean` | true |
| showMenuByLongPress | Whether to enable showing the mini program code recognition menu when long-pressing the image, only effective on WeChat Mini Program | `boolean` | true |
| errorIcon | Icon shown on load failure, or a small image | `string` | ATTENTION |
| showLoading | Whether to show the loading icon or a custom slot | `boolean` | true |
| showError | Whether to show the error icon or a custom slot | `boolean` | true |
| fade | Whether to enable the fade-in effect | `boolean` | true |
| duration | Transition duration used with the fade property, in ms | `number` | 500 |
| bgColor | Background color, used when loading images on dark pages to blend with the background color | `string` | - |
| indistinct | Blur the image by applying a blur style to it | `boolean` | false |
| previewImage | Whether to preview the image | `boolean` | false |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event | Description          | Callback Parameters |
| ----- | -------------------- | ------------------- |
| click | Triggered when the image is clicked | - |
| error | Triggered when the image fails to load | err: error message |
| load  | Triggered when the image loads successfully | e |

### Slots

| Slot    | Description                    | Value |
| ------- | ------------------------------ | ----- |
| loading | Custom loading prompt content  | -     |
| error   | Custom failure prompt content  | -     |

### CSS Variables

| Variable                            | Description                          | Default                       |
| ----------------------------------- | ------------------------------------ | ----------------------------- |
| `--hy-image-width`                  | Default width                        | `250px`                       |
| `--hy-image-height`                 | Default height                       | `200px`                       |
| `--hy-image-placeholder-color`      | Loading/failure placeholder color    | Follows `--hy-text-color--grey` |
| `--hy-image-placeholder-background` | Loading/failure placeholder background color | Follows `--hy-background--empty` |

[^1]: `circle`: both sides are semicircular; `square`: square

<demo-model url="pages-design/image/image"></demo-model>