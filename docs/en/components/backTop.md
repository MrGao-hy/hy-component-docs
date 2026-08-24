# BackTop Back-to-Top Component

> This component is used for long pages. After scrolling a certain distance, a back-to-top button appears, making it convenient to quickly return to the top of the page.

## :pushpin: Platform Compatibility

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

    // Create the reactive data scrollTop
    const scrollTop = ref(0);

    // Use the onPageScroll method to update the value of scrollTop
    onPageScroll((e) => {
        scrollTop.value = e.scrollTop;
    });
</script>
```

### Changing When the Back-to-Top Button Appears

- You can use the `top` parameter to change how far the page must scroll before the back-to-top button appears

```html
<template>
    <hy-back-top :scroll-top="scrollTop" top="600"></hy-back-top>
</template>
```

### Customizing the Back-to-Top Icon and Prompt

- Use `icon` to change the icon of the back-to-top button; it can be a built-in icon from the Huayue component library, or an image path
- Use the `text` parameter to change the text prompt of the back-to-top button. If you need to change the text's color and size, use the customStyle parameter

```html
<template>
    <hy-back-top :scroll-top="scrollTop" icon="arrow-up" text="Back"></hy-back-top>
</template>
```

## API

### BackTop Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| mode | Button shape | `circle`\|`square` | circle |
| icon | Icon, see [Icon API](./icon#api) for details | `string` | IconConfig.DOWNLOAD |
| text | Prompt text of the back-to-top button | `string` | - |
| duration | Transition duration during the return to top, in ms | `number` | 500 |
| scrollTop | Scroll distance of the page | `number` | 0 |
| top | Scroll distance required before the button is shown; numeric values default to px | `number`\|`string` | 400 |
| bottom | Distance from the back button position to the bottom of the screen; numeric values default to px | `number`\|`string` | 100 |
| right | Distance from the back button position to the right edge of the screen; numeric values default to px | `number`\|`string` | 20 |
| z-index | Stacking level of the back-to-top button | `number` | 888 |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description     | Callback Parameters |
| ------ | -------- | -------- |
| click  | Triggered when the button is clicked | -        |

### Slots

| Slot Name  | Description       | Accepted Values |
| ------- | ---------- | ------ |
| default | Custom content | -      |

<demo-model url="pages-design/backTop/backTop"></demo-model>