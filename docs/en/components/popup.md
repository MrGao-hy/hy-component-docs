# Popup Component

> A popup layer container used to display dialogs, information prompts, and other content. It supports popping up from the top, bottom, left, right, and center. The component only provides the container; the internal content is customized by the user.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- The component only provides the popup container; the internal content must be customized by the user
- When `mode="center"`, the zoom animation is enabled by default and can be disabled via the `zoom` prop
- The `round` prop only takes effect for `mode="top"`, `mode="bottom"`, and `mode="center"`
- When `closeOnClickOverlay` is set to `true`, clicking the overlay only triggers the `close` event and does not automatically hide the popup; you need to handle it manually in the event callback
- `closeIconPos` currently only supports two positions: `top-left` and `top-right`

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-button text="Open popup 1" @click="show1 = true"></hy-button>
    <hy-button text="Open popup 2" @click="show2 = true"></hy-button>

    <!-- Manual control: pass the state via :show, and manually set it to false in the @close callback -->
    <hy-popup :show="show1" @close="show1 = false">
        <view class="popup-content">
            <text>This is the popup content</text>
            <hy-button text="Close" @click="show1 = false"></hy-button>
        </view>
    </hy-popup>

    <!-- Two-way binding: use v-model:show, the state is synced automatically when closing, no need to listen to close -->
    <hy-popup v-model:show="show2">
        <view class="popup-content">
            <text>This is the popup content</text>
            <hy-button text="Close" @click="show2 = false"></hy-button>
        </view>
    </hy-popup>
</template>

<script setup>
    import { ref } from 'vue';

    const show1 = ref(false);
    const show2 = ref(false);
</script>

<style lang="scss" scoped>
    .popup-content {
        padding: 40rpx;
        background: #fff;
        border-radius: 16rpx 16rpx 0 0;
    }
</style>
```

### Setting the Popup Direction

```html
<template>
    <!-- Pop up from the top -->
    <hy-popup :show="showTop" mode="top" @close="showTop = false">
        <view class="popup-top">Top popup content</view>
    </hy-popup>

    <!-- Pop up from the bottom -->
    <hy-popup :show="showBottom" mode="bottom" @close="showBottom = false">
        <view class="popup-bottom">Bottom popup content</view>
    </hy-popup>

    <!-- Pop up from the center -->
    <hy-popup :show="showCenter" mode="center" @close="showCenter = false">
        <view class="popup-center">Centered popup content</view>
    </hy-popup>

    <!-- Pop up from the left -->
    <hy-popup :show="showLeft" mode="left" @close="showLeft = false">
        <view class="popup-left">Left popup content</view>
    </hy-popup>

    <!-- Pop up from the right -->
    <hy-popup :show="showRight" mode="right" @close="showRight = false">
        <view class="popup-right">Right popup content</view>
    </hy-popup>
</template>
```

### Custom Overlay Style

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="Custom overlay"></hy-cell-item>
    </hy-cell>

    <hy-popup
        :show="show"
        mode="center"
        :overlayOpacity="0.3"
        :overlayStyle="{ backgroundColor: '#000' }"
        @close="show = false"
    >
        <view class="popup-content">
            <text>Custom overlay opacity and color</text>
        </view>
    </hy-popup>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Disable Closing on Overlay Click

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="Disable closing via overlay"></hy-cell-item>
    </hy-cell>

    <hy-popup
        :show="show"
        :closeOnClickOverlay="false"
        title="You must click the button to close"
        @close="show = false"
    >
        <view class="popup-content">
            <text>Clicking the overlay cannot close the popup</text>
            <hy-button text="Close popup" @click="show = false"></hy-button>
        </view>
    </hy-popup>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Show Close Icon

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="With close icon"></hy-cell-item>
    </hy-cell>

    <hy-popup :show="show" :closeable="true" closeIconPos="top-right" @close="show = false">
        <view class="popup-content">
            <text>Click the icon in the upper right corner to close the popup</text>
        </view>
    </hy-popup>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Set Rounded Corners

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="Popup with rounded corners"></hy-cell-item>
    </hy-cell>

    <hy-popup :show="show" :round="20" @close="show = false">
        <view class="popup-content">
            <text>Rounded corner popup content</text>
        </view>
    </hy-popup>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Disable Zoom Animation

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="Disable zoom animation"></hy-cell-item>
    </hy-cell>

    <hy-popup :show="show" mode="center" :zoom="false" @close="show = false">
        <view class="popup-content">
            <text>Centered popup without zoom animation</text>
        </view>
    </hy-popup>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Custom Style

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="Custom style"></hy-cell-item>
    </hy-cell>

    <hy-popup
        :show="show"
        mode="center"
        bgColor="#f5f5f5"
        :customStyle="{ width: '600rpx', padding: '40rpx' }"
        customClass="custom-popup"
        @close="show = false"
    >
        <view class="popup-content">
            <text>Custom background color and style</text>
        </view>
    </hy-popup>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>

<style lang="scss" scoped>
    .custom-popup {
        border-radius: 20rpx;
    }
</style>
```

### Safe Area Adaptation

```html
<template>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="Safe area adaptation"></hy-cell-item>
    </hy-cell>

    <hy-popup
        :show="show"
        :safeAreaInsetBottom="true"
        :safeAreaInsetTop="true"
        @close="show = false"
    >
        <view class="popup-content">
            <text>Automatically adapts to the bottom safe area (iPhoneX and similar models)</text>
            <text>Automatically adapts to the top status bar</text>
        </view>
    </hy-popup>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

## API

### Popup Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show the popup | `boolean` | false |
| overlay | Whether to show the overlay | `boolean` | true |
| mode | Popup direction, optional values: `left`, `right`, `top`, `bottom`, `center` | `string` | bottom |
| duration | Animation transition duration for the overlay opening or closing, in ms | `number` | 300 |
| closeable | Whether to show the close icon | `boolean` | false |
| overlayStyle | Custom overlay style, generally used to modify the overlay color | `CSSProperties` | - |
| overlayOpacity | Overlay opacity, between 0-1, do not use together with overlayStyle | `number` | 0.5 |
| closeOnClickOverlay | Whether clicking the overlay closes the popup (Note: the close event needs to be handled by yourself; the close callback is only executed when the overlay is clicked after enabling closeOnClickOverlay) | `boolean` | true |
| zIndex | z-index value of the popup layer | `number` | 10086 |
| lockScroll | Whether to lock page scrolling | `boolean` | true |
| safeAreaInsetBottom | Whether to reserve bottom safe area distance for iPhoneX and similar models | `boolean` | true |
| safeAreaInsetTop | Whether to reserve top safe area distance (status bar height) | `boolean` | false |
| closeIconPos | Custom close icon position, optional values: `top-left`, `top-right` | `string` | top-right |
| round | Sets the rounded corner value, only effective for `mode=top | bottom | center` | `string` \| `number` | - |
| zoom | Whether to enable zoom when `mode=center` | `boolean` | true |
| bgColor | Background color, generally used for special popup content scenarios; set to `transparent` to remove the default white background | `string` | - |
| customStyle | Custom external styles to be applied | `CSSProperties` | {} |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name  | Description                                     | Callback Parameter    |
| ----------- | ----------------------------------------------- | --------------------- |
| open        | Triggered when the popup opens                  | -                     |
| close       | Triggered when the popup closes                 | -                     |
| click       | Triggered when the popup is clicked             | -                     |
| update:show | Triggered when the popup show/hide state changes | `visible: boolean`    |

### Slots

| Slot Name | Description      | Accepted Values |
| --------- | ---------------- | --------------- |
| default   | Popup content    | -               |

### CSS Variables

| Variable Name                    | Description                        | Default Value                        |
| -------------------------------- | ---------------------------------- | ------------------------------------ |
| `--hy-popup-z-index`             | z-index level                      | `9999`                               |
| `--hy-popup-radius`              | Border radius (round mode)         | Follows `--hy-radius-lg` (32rpx)     |
| `--hy-popup-close-hover-opacity` | Close button pressed opacity       | `0.4`                                |

<demo-model url="pages-design/popup/popup"></demo-model>