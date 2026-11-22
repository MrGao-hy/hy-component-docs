# BackTop Component

> This component is designed for long pages. After scrolling a certain distance, a back-to-top button appears, allowing users to quickly return to the top of the page.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

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

- You can use the `top` parameter to change the scroll distance at which the back-to-top button appears

```html
<template>
    <hy-back-top :scroll-top="scrollTop" top="600"></hy-back-top>
</template>
```

### Customizing the Back-to-Top Icon and Prompt

- Use `icon` to change the icon of the back-to-top button; it can be a built-in icon from the Hy Component Library or an image path
- Use the `text` parameter to change the text prompt of the back-to-top button. If you need to change the text color and size, you can use the customStyle parameter

```html
<template>
    <hy-back-top :scroll-top="scrollTop" :icon="{ name: 'arrow-up' }" text="Back"></hy-back-top>
</template>
```

## API

### BackTop Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Button shape | `circle`\|`square` | circle |
| icon | Custom icon property collection, see [Icon API](./icon#api) for details; uses the built-in TO_TOP icon when not set | `HyIconProps` | - |
| text | Prompt text of the back-to-top button | `string` | - |
| duration | Transition duration of the return-to-top process, in ms | `number` | 500 |
| scrollTop | Scroll distance of the page | `number` | 0 |
| top | Scroll distance required before the button is displayed; the default unit for numeric values is px | `number`\|`string` | 400 |
| bottom | Distance from the back button position to the bottom of the screen; the default unit for numeric values is px | `number`\|`string` | 100 |
| right | Distance from the back button position to the right edge of the screen; the default unit for numeric values is px | `number`\|`string` | 20 |
| z-index | Z-index (stacking level) of the back-to-top button | `number` | 888 |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| click      | Triggered when the button is clicked | - |

### Slots

| Slot Name | Description | Accepted Values |
| --------- | ----------- | --------------- |
| default   | Custom content | - |

### CSS Variables

| Variable Name                  | Description                       | Default                   |
| ------------------------------ | --------------------------------- | ------------------------- |
| `--hy-back-top-tips-font-size` | Font size of the prompt text      | `24rpx`                   |
| `--hy-back-top-size`           | Size of the back-to-top container | `40px`                    |
| `--hy-back-top-background`     | Background color of the back-to-top button | Follows `--hy-background--3` |
| `--hy-back-top-square-radius`  | Border radius of the back-to-top button | Follows `--hy-radius-sm`  |

<demo-model url="pages-design/backTop/backTop"></demo-model>