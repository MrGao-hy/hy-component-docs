# Swiper Carousel Component

> This component is typically used in scenarios such as navigation carousels and advertisement displays. It works out of the box and offers the following features:
>
> - Custom indicator modes with configurable indicator styles
> - 3D carousel effects to meet different development needs
> - Configurable title display, covering various application scenarios
> - Supports loading states and embedded videos, providing comprehensive and rich functionality

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-swiper :list="list"></hy-swiper>
<!-- Import a single component -->
<HySwiper :list="list"></HySwiper>
```

```ts
import { HySwiper } from '@hy-app/ui';
import { ref } from 'vue';

const list = ref([
    'https://img0.baidu.com/it/u=1913990970,584854398&fm=253&id=1',
    'http://mms2.baidu.com/it/u=204741874,3444396868&fm=253&id=2',
    'https://img2.baidu.com/it/u=3042825715,659259329&fm=253&id=3',
    'https://img2.baidu.com/it/u=109690972,2214958998&fm=253&id=4',
    'http://mms0.baidu.com/it/u=2161107790,808970254&fm=253&id=5',
    'https://img2.baidu.com/it/u=4211554685,400408647&fm=253&id=6',
    'https://img2.baidu.com/it/u=2237681987,1998118702&fm=253&id=7',
    'https://img1.baidu.com/it/u=2494879897,1602792615&fm=253&id=8',
]);
```

### Object Usage Instructions

::: tip Tips

- If the array contains objects, the image address is taken from the key `url`
- If the array contains objects and you want to change the key `url` to `image`, you need to set `keyName` to `image`
- `title` is the text content displayed by the carousel; you must first set the carousel property `showTitle` to `true`
- Fill in `poster` when the url content is a video
- When `type` is `video`, a video is displayed; when `type` is `image`, an image is displayed; images are displayed by default

:::

```html
<template>
    <hy-swiper :list="list" showTitle :autoplay="false" circular></hy-swiper>
</template>

<script setup>
    import { reactive } from 'vue';

    // Use reactive to create a reactive array of objects
    const list = reactive([
        {
            url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
            title: "Last night's stars, last night's wind; west of the painted tower, east of the cassia hall",
            type: 'video',
        },
        {
            url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
            title: "No colorful phoenix wings to fly side by side, yet hearts linked as one",
        },
        {
            url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
            title: "Who feels the west wind's chill alone; rustling yellow leaves close the lattice window, dwelling on the past in the setting sun",
        },
    ]);
</script>
```

### Loading

- Add the `loading` property to achieve the loading state

```html
<template>
    <hy-swiper :list="list" loading></hy-swiper>
</template>
```

### Custom Indicator

- If you want to customize the indicator in the form of dots or numbers, refer to the following example:

::: details Click to view the full code

```vue
<template>
    <hy-swiper :list="list">
        <template #indicator="{ current, length }">
            <view class="indicator">
                <text>{{ current }}</text>
                <text>/</text>
                <text>{{ length }}</text>
            </view>
        </template>
    </hy-swiper>
</template>

<script setup>
    import { reactive } from 'vue';

    const list = reactive([
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    ]);
</script>

<style lang="scss">
    .indicator {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 90rpx;
        height: 40rpx;
        background: rgba(128, 128, 128, 0.7);
        border-radius: $hy-border-radius-semicircle;
        color: #fff;
    }
</style>
```

:::

### 3D Playback

- In real-world development, a plain carousel may not meet your needs. The swiper component provides a card-style carousel API. You can refer to the example below to implement this feature:

::: details Click to view the full code

```html
<template>
    <!-- #ifndef APP-NVUE || MP-TOUTIAO -->
    <view class="u-demo-block">
        <text class="u-demo-block__title">Card Style</text>
        <hy-swiper
            :list="list3"
            previousMargin="30"
            nextMargin="30"
            circular
            :autoplay="false"
            radius="5"
            bgColor="#ffffff"
        ></hy-swiper>
    </view>
    <!-- #endif -->
</template>

<script setup>
    import { reactive } from 'vue';

    const list3 = reactive([
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    ]);
</script>
```

:::

## API

### Swiper Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| list | Can be an array of strings or an array of objects; see "[Object Usage Instructions](#object-usage-instructions)" above for object details | `array` | - |
| indicator | Whether to show the panel indicator | `boolean` | false |
| indicatorActiveColor | Color of the active indicator | `string` | #FFFFFF |
| indicatorInactiveColor | Color of the inactive indicator | `string` | rgba(255, 255, 255, 0.35) |
| indicatorStyle | Indicator style; can be positioned via bottom, left, right | `CSSProperties` | - |
| indicatorMode | Indicator mode | `line` \| `dot` | line |
| autoplay | Whether to switch automatically | `boolean` | true |
| current | Index of the current slider item | `number` \| `string` | 0 |
| currentItemId | The item-id of the current slider item; cannot be specified at the same time as current | `string` | - |
| interval | Time interval for automatic slider switching (ms) | `number` | 3000 |
| duration | Duration of the slider transition (ms); not supported on nvue | `number` | 300 |
| circular | Whether to loop back to the beginning after reaching the end | `boolean` | false |
| previousMargin | Front margin; can be used to reveal a small portion of the previous item; not supported on nvue and Alipay; the default unit for numeric values is px | `string` \| `number` | 0 |
| nextMargin | Back margin; can be used to reveal a small portion of the next item; not supported on nvue and Alipay; the default unit for numeric values is px | `string` \| `number` | 0 |
| acceleration | When enabled, multiple screens are swiped through consecutively based on swipe speed; not supported on Alipay | `boolean` | false |
| displayMultipleItems | Number of slider items displayed simultaneously; not supported on nvue or Alipay Mini Program | `number` | 1 |
| easingFunction | Specifies the easing animation type for swiper transitions; only effective on WeChat Mini Program | `default`\|`linear`\|`easeInCubic` \|`easeOutCubic`\|`easeInOutCubic` | default |
| keyName | The property key name for the url in the list array | `string` | url |
| imgMode | Image cropping mode; see the uniapp basic component [image](https://uniapp.dcloud.net.cn/component/image.html) | `string` | aspectFill |
| height | Component height; the default unit for numeric values is px | `string` \| `number` | 130 |
| bgColor | Background color | `string` | - |
| radius | Component border radius; the default unit for numeric values is px | `string` \| `number` | 4 |
| loading | Whether it is in the loading state | `boolean` | false |
| showTitle | Whether to show the title; requires the title property in the array objects | `boolean` | false |

### Events

| Event Name | Description | Callback Parameters |
| ------ | ---------------------------------- | ---------------------------------- |
| click  | Triggered when the carousel is clicked | index: the index of the clicked image, starting from 0 |
| change | Triggered when the carousel switches (automatically or manually) | index: the index of the image switched to, starting from 0 |

### Slots

| Slot Name | Description | Received Values            |
| --------- | ---- | -------------------------- |
| default   | -    | record: object value, index: index |
| indicator | -    | -                          |

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-swiper-title-font-size` | Title font size | `28rpx` |
| `--hy-swiper-title-bg` | Title background color | `rgba(0, 0, 0, 0.3)` |
| `--hy-swiper-indicator-height` | Indicator bar height | `4px` |
| `--hy-swiper-indicator-bar-width` | Indicator bar thumb width | `22px` |
| `--hy-swiper-dot-size` | Dot size | `5px` |
| `--hy-swiper-dot-active-width` | Active dot width | `12px` |
| `--hy-swiper-title-color` | Title color | `#ffffff` |
| `--hy-swiper-indicator-bar-radius` | Line indicator thumb border radius | Follows `--hy-radius-semicircle` (100px) |
| `--hy-swiper-indicator-bar-bg` | Line indicator thumb background | `#ffffff` |
| `--hy-swiper-dot-radius` | Dot indicator border radius | Follows `--hy-radius-semicircle` (100px) |

<demo-model url="pages-design/swiper/swiper"></demo-model>