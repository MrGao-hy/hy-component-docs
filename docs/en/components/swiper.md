# Swiper Carousel Component

> This component is generally used for navigation carousels, advertisement displays, and similar scenarios. It works out of the box and has the following features:
>
> - Custom indicator modes with configurable indicator styles
> - 3D carousel effect to meet different development needs
> - Configurable title display, covering various application scenarios
> - Supports loading states and video embedding, offering rich and comprehensive functionality

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-swiper :list="list"></hy-swiper>
<!-- Import single component -->
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

- If the array contains objects, the image is taken from the image address under the `url` key
- If the array contains objects and you want to change the `url` key in the object to `image`, you need to set `keyName` to `image`
- `title` is the text content displayed by the carousel; you must first set the carousel property `showTitle` to `true`
- `poster` should be filled in when the content is a video url
- `type` set to `video` displays a video, and `type` set to `image` displays an image; images are displayed by default

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
            title: '昨夜星辰昨夜风，画楼西畔桂堂东',
            type: 'video',
        },
        {
            url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
            title: '身无彩凤双飞翼，心有灵犀一点通',
        },
        {
            url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
            title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
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

- If you need to customize the indicator in the form of dots or numbers, please refer to the following example:

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

- In actual development, a regular carousel may not meet your development needs. The swiper component provides a card-style carousel API. You can refer to the following example to implement this feature

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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| list | Can be an array of strings or an array of objects; see "[Object Usage Instructions](#object-usage-instructions)" above for object details | `array` | - |
| indicator | Whether to show the panel indicator | `boolean` | false |
| indicatorActiveColor | The active color of the indicator | `string` | #FFFFFF |
| indicatorInactiveColor | The inactive color of the indicator | `string` | rgba(255, 255, 255, 0.35) |
| indicatorStyle | Indicator style; can be positioned via bottom, left, right | `CSSProperties` | - |
| indicatorMode | Indicator mode | `line` \| `dot` | line |
| autoplay | Whether to switch automatically | `boolean` | true |
| current | The index of the current slider | `number` \| `string` | 0 |
| currentItemId | The item-id of the current slider; cannot be specified together with current | `string` | - |
| interval | Time interval for automatic slider switching (ms) | `number` | 3000 |
| duration | Time required for the slider switching animation (ms); not supported on nvue | `number` | 300 |
| circular | Whether to loop back to the beginning after reaching the end | `boolean` | false |
| previousMargin | Front margin; can be used to reveal a small part of the previous item; not supported on nvue and Alipay; default unit px for numeric values | `string` \| `number` | 0 |
| nextMargin | Back margin; can be used to reveal a small part of the next item; not supported on nvue and Alipay; default unit px for numeric values | `string` \| `number` | 0 |
| acceleration | When enabled, multiple screens are swiped consecutively based on the swipe speed; not supported on Alipay | `boolean` | false |
| displayMultipleItems | Number of sliders displayed simultaneously; not supported on nvue or Alipay Mini Program | `number` | 1 |
| easingFunction | Specifies the swiper transition easing animation type; only effective on WeChat Mini Program | `default`\|`linear`\|`easeInCubic` \|`easeOutCubic`\|`easeInOutCubic` | default |
| keyName | The property key name for the url in the list array | `string` | url |
| imgMode | The cropping mode of the image; see the uniapp basic component [image](https://uniapp.dcloud.net.cn/component/image.html) | `string` | aspectFill |
| height | Component height; default unit px for numeric values | `string` \| `number` | 130 |
| bgColor | Background color | `string` | - |
| radius | Component corner radius; default unit px for numeric values | `string` \| `number` | 4 |
| loading | Whether it is loading | `boolean` | false |
| showTitle | Whether to display the title; requires the array objects to have a title property | `boolean` | false |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| click  | Triggered when the carousel is clicked | index: the index of the clicked image, starting from 0 |
| change | Triggered when the carousel switches (automatically or manually) | index: the index of the image switched to, starting from 0 |

### Slots

| Slot Name | Description | Received Values            |
| --------- | ----------- | --------------------------- |
| default   | -           | record: object value, index: index |
| indicator | -           | -                           |

### CSS Variables

| Variable Name                      | Description                            | Default                                |
| ---------------------------------- | -------------------------------------- | -------------------------------------- |
| `--hy-swiper-title-font-size`      | Title font size                        | `28rpx`                                |
| `--hy-swiper-title-bg`             | Title background color                 | `rgba(0, 0, 0, 0.3)`                   |
| `--hy-swiper-indicator-height`     | Indicator bar height                   | `4px`                                  |
| `--hy-swiper-indicator-bar-width`  | Indicator bar thumb width              | `22px`                                 |
| `--hy-swiper-dot-size`             | Dot size                               | `5px`                                  |
| `--hy-swiper-dot-active-width`     | Active dot width                       | `12px`                                 |
| `--hy-swiper-title-color`          | Title color                            | `#ffffff`                              |
| `--hy-swiper-indicator-bar-radius` | Line indicator thumb corner radius     | Follows `--hy-radius-semicircle` (100px) |
| `--hy-swiper-indicator-bar-bg`     | Line indicator thumb background        | `#ffffff`                              |
| `--hy-swiper-dot-radius`           | Dot indicator corner radius            | Follows `--hy-radius-semicircle` (100px) |

<demo-model url="pages-design/swiper/swiper"></demo-model>