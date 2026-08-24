# Overlay Component

> Creates an overlay to emphasize specific page elements and prevent users from interacting with content beneath the overlay, typically used in modal scenarios

## :pushpin:Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle:Basic Usage Examples

```html
<!-- Global usage -->
<hy-overlay :show="show" @click="show = false"></hy-overlay>
```

```ts
import { ref } from 'vue';

const show = ref(true);
```

### Setting Opacity

- Set the `opacity` value to adjust the transparency of the overlay, with a range of 0~1

```html
<template>
    <hy-overlay :show="show" :opacity="0.1"></hy-overlay>
    <hy-overlay :show="show" :opacity="0.9"></hy-overlay>
</template>
```

### Custom Slots

Arbitrary content can be embedded on the overlay through the default slot

::: tip Note

If you don't want click events on the slot content to bubble up to the overlay, add @tap.stop to the specified element

:::

```html
<template>
    <hy-overlay :show="show" @click="show = false">
        <view class="warp">
            <view class="rect" @tap.stop></view>
        </view>
    </-overlay>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(true);
</script>

<style lang="sass" scoped>
    .warp {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .rect {
        width: 120px;
        height: 120px;
        background-color: #fff;
    }
</style>
```

## API

### Overlay Props

| Parameter           | Description                                     | Type            | Default |
| ------------------- | ----------------------------------------------- | --------------- | ------- |
| show                | Whether to show the overlay                     | `boolean`       | false   |
| zIndex              | z-index level                                   | `number`        | 10070   |
| duration            | Animation duration in milliseconds              | `number`        | 300     |
| opacity             | Opacity value, used as the 4th rgba parameter   | `number`        | 0.5     |
| LockScroll`v0.6.4`  | Whether to lock page scrolling                  | `boolean`       | true    |
| customStyle         | Custom external styles to be applied            | `CSSProperties` | -       |
| customClass         | Custom external class name                      | `string`        | -       |

### Events

| Event Name | Description                                      | Callback Parameters |
| ---------- | ------------------------------------------------ | ------------------- |
| click      | Emitted when the overlay is clicked              | -                   |

### Slots

| Slot Name | Description                                            | Received Value |
| --------- | ------------------------------------------------------ | -------------- |
| default   | Default slot, used to embed content on top of the overlay | -              |

<demo-model url="pages-design/overlay/overlay"></demo-model>