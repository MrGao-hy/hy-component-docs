# NoticeBar Scrolling Notice Component

> This component is used for scrolling notice scenarios, supporting multiple modes such as horizontal scrolling, vertical scrolling, and step scrolling.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- The `text` parameter supports either a string or an array; an array is recommended for carousel scrolling
- `url` and `mode="link"` must both be set to enable page navigation
- The `step` property only takes effect when `direction="row"`, enabling step-style scrolling
- The `disableTouch` property currently only supports App 2.5.5+, H5 2.5.5+, Alipay Mini Program, and ByteDance Mini Program

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-notice-bar text="Welcome to Hy Component Library"></hy-notice-bar>
</template>
```

### Array Content

```html
<template>
    <hy-notice-bar :text="textList"></hy-notice-bar>
</template>

<script setup>
    import { reactive } from 'vue';

    const textList = reactive(['Ji-ji and again ji-ji,', 'Mulan weaves facing the door.', 'No sound of loom and shuttle,', 'Only the daughter sighs.']);
</script>
```

### Closable Mode

```html
<template>
    <hy-notice-bar :text="textList" mode="closable"></hy-notice-bar>
</template>

<script setup>
    import { reactive } from 'vue';

    const textList = reactive(['This is a closable notice', 'Click the close button on the right to hide the notice']);
</script>
```

### Custom Scroll Speed

```html
<template>
    <hy-notice-bar :text="textList" :speed="150"></hy-notice-bar>
</template>

<script setup>
    import { reactive } from 'vue';

    const textList = reactive(['Scroll speed is 150px/s', 'The larger the speed value, the faster the scrolling']);
</script>
```

### Page Navigation

```html
<template>
    <hy-notice-bar text="Click to view details" mode="link" url="/pages/detail/index"></hy-notice-bar>
</template>
```

### Custom Navigation Type

```html
<template>
    <hy-notice-bar
        text="Go to home page"
        mode="link"
        url="/pages/index/index"
        link-type="switchTab"
    ></hy-notice-bar>
</template>
```

### Horizontal Step Scrolling

```html
<template>
    <hy-notice-bar :text="textList" step></hy-notice-bar>
</template>

<script setup>
    import { reactive } from 'vue';

    const textList = reactive(['First notice', 'Second notice', 'Third notice']);
</script>
```

### Vertical Scrolling

```html
<template>
    <hy-notice-bar :text="textList" direction="column"></hy-notice-bar>
</template>

<script setup>
    import { reactive } from 'vue';

    const textList = reactive(['First vertical scrolling notice', 'Second vertical scrolling notice', 'Third vertical scrolling notice']);
</script>
```

### Custom Style

```html
<template>
    <hy-notice-bar
        text="Notice with custom colors"
        color="#ff5722"
        bg-color="#fff3e0"
        :font-size="16"
    ></hy-notice-bar>
</template>
```

### Custom Icon

```html
<template>
    <hy-notice-bar
        text="Using a custom icon"
        :icon="{
            name: IconConfig.SCAN,
            color: 'red'
        }"
    ></hy-notice-bar>

    <hy-notice-bar text="Using a custom icon" :icon="IconConfig.SCAN"></hy-notice-bar>
</template>
```

### Text Alignment

```html
<template>
    <!-- Left aligned -->
    <hy-notice-bar text="Left aligned" justify-content="flex-start"></hy-notice-bar>

    <!-- Center aligned -->
    <hy-notice-bar text="Center aligned" justify-content="center"></hy-notice-bar>

    <!-- Right aligned -->
    <hy-notice-bar text="Right aligned" justify-content="flex-end"></hy-notice-bar>
</template>
```

### Disable Touch Swiping

```html
<template>
    <hy-notice-bar :text="textList" direction="column" :disable-touch="false"></hy-notice-bar>
</template>

<script setup>
    import { reactive } from 'vue';

    const textList = reactive(['Supports gesture swiping to switch', 'Swipe up or down to switch notices']);
</script>
```

### Listening to Events

```html
<template>
    <hy-notice-bar
        :text="textList"
        mode="closable"
        @click="handleClick"
        @close="handleClose"
    ></hy-notice-bar>
</template>

<script setup>
    import { reactive } from 'vue';

    const textList = reactive(['Clicking the notice triggers an event', 'Closing the notice also triggers an event']);

    const handleClick = (index) => {
        uni.showToast({
            title: `Clicked notice #${index + 1}`,
            icon: 'none',
        });
    };

    const handleClose = () => {
        uni.showToast({
            title: 'Notice closed',
            icon: 'none',
        });
    };
</script>
```

## API

### NoticeBar Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| text | Content to display, supports a string or an array | `string`\|`string[]` | - |
| direction | Notice scrolling mode, row-horizontal scrolling, column-vertical scrolling | `row` \| `column` | row |
| step | Whether to use step-style scrolling when direction = row | `boolean` | false |
| icon | Whether to show the left icon, accepts an icon name or an icon configuration object | `string`\|`HyIconProps` | NOTIFICATION_FILL |
| mode | Notice mode, link-shows right arrow, closable-shows a close icon on the right | `link` \| `closable` | - |
| color | Text color; the icon also uses this color | `string` | #ff9900 |
| bgColor | Background color | `string` | - |
| speed | Scroll speed for horizontal scrolling, i.e., how many px are scrolled per second; the larger the value, the faster the scrolling | `number` | 80 |
| fontSize | Font size, numbers default to px | `string` \| `number` | 14 |
| duration | Time for one scrolling cycle, in ms | `number` | 2000 |
| disableTouch | Whether to disable switching by hand swiping, only supported on App 2.5.5+, H5 2.5.5+, Alipay Mini Program, and ByteDance Mini Program | `boolean` | true |
| url | Page path to navigate to | `string` | - |
| linkType | Page navigation type, optional values: navigateTo, redirectTo, switchTab, reLaunch | `string` | navigateTo |
| justifyContent | Horizontal layout type of the text, optional values: flex-start, center, flex-end | `string` | flex-start |
| customStyle | Custom external styles | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description                            | Callback Parameters                          |
| ---------- | -------------------------------------- | -------------------------------------------- |
| click      | Triggered when the notice text is clicked | index: the index of the currently displayed text |
| close      | Triggered when the close icon on the right is clicked | -                                            |

### CSS Variables

| Variable                        | Description                    | Default                        |
| ------------------------------- | ------------------------------ | ------------------------------ |
| `--hy-notice-bar-padding`       | Padding                        | `9px 12px`                     |
| `--hy-notice-bar-bg`            | Background color               | `#fff6c8`                      |
| `--hy-notice-bar-font-size`     | Font size                      | `14px`                         |
| `--hy-notice-bar-swiper-height` | Line height for vertical scrolling | `16px`                      |
| `--hy-notice-bar-radius`        | Notice bar border radius       | Follows `--hy-radius-sm` (8rpx) |

<demo-model url="pages-design/noticeBar/noticeBar"></demo-model>