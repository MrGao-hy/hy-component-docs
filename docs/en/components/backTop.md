# BackTop Component

> This component is used for long pages. After scrolling a certain distance, a back-to-top button appears, making it convenient to quickly return to the top of the page.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<template>
    <!-- Global usage -->
    <hy-back-top :scroll-top="scrollTop"></hy-back-top>
</template>

<script lang="ts" setup="">
    import { onPageScroll } from '@dcloudio/uni-app';

    // Create reactive data scrollTop
    const scrollTop = ref(0);

    // Use the onPageScroll method to update the value of scrollTop
    onPageScroll((e) => {
        scrollTop.value = e.scrollTop;
    });
</script>
```

### Changing When the Back-to-Top Button Appears

- You can use the `top` parameter to modify how far the page must scroll before the back-to-top button appears

```html
<template>
    <hy-back-top :scroll-top="scrollTop" top="600"></hy-back-top>
</template>
```

### Customizing the Back-to-Top Icon and Prompt

- Use `icon` to change the icon of the back-to-top button, which can be a built-in icon from the Hy Component Library or an image path
- Use the `text` parameter to change the text prompt of the back-to-top button. If you need to change the color and size of the text, you can use the customStyle parameter

```html
<template>
    <hy-back-top :scroll-top="scrollTop" icon="arrow-up" text="返回"></hy-back-top>
</template>
```

## API

### BackTop Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Button shape | `circle`\|`square` | circle |
| icon | Icon, see [Icon API](./icon#api) for details | `string` | IconConfig.DOWNLOAD |
| text | Prompt text of the back-to-top button | `string` | - |
| duration | Transition duration of the back-to-top process, in ms | `number` | 500 |
| scrollTop | Page scroll distance | `number` | 0 |
| top | Scroll distance at which the button is displayed, default unit px | `number`\|`string` | 400 |
| bottom | Distance from the back button position to the bottom of the screen, default unit px | `number`\|`string` | 100 |
| right | Distance from the back button position to the right edge of the screen, default unit px | `number`\|`string` | 20 |
| z-index | Stacking level of the back-to-top button | `number` | 888 |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ------ | -------- | -------- |
| click  | Button click | -        |

### Slots

| Slot Name | Description | Accepted Values |
| ------- | ---------- | ------ |
| default | Custom content | -      |

### CSS Variables

| Variable Name | Description | Default |
| ------------------------------ | ------------ | ------ |
| `--hy-back-top-tips-font-size` | Prompt text font size | `12px` |

<demo-model url="pages-design/backTop/backTop"></demo-model>