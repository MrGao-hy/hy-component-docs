# Overlay Component

> Create an overlay to emphasize specific page elements and prevent users from interacting with content beneath the overlay. Commonly used in popup scenarios.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-overlay :show="show" @click="show = false"></hy-overlay>
```

```ts
import { ref } from 'vue';

const show = ref(true);
```

### Setting Opacity

- Set the `opacity` value to adjust the overlay's opacity, with a range of 0~1

```html
<template>
    <hy-overlay :show="show" :opacity="0.1"></hy-overlay>
    <hy-overlay :show="show" :opacity="0.9"></hy-overlay>
</template>
```

### Custom Slots

You can embed any content on the overlay through the default slot

::: tip Note

If you don't want the click event of the slot content to bubble up to the overlay, add @tap.stop to the specified element

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

| Parameter           | Description                                             | Type            | Default |
| ------------------- | ------------------------------------------------------- | --------------- | ------- |
| show                | Whether to show the overlay                             | `boolean`       | false   |
| zIndex              | z-index level                                           | `number`        | 10070   |
| duration            | Animation duration, in milliseconds                     | `number`        | 300     |
| opacity             | Opacity value, used as the fourth parameter of rgba     | `number`        | 0.5     |
| LockScroll`v0.6.4`  | Whether to lock page scrolling                          | `boolean`       | true    |
| customStyle         | Custom external styles to be applied                    | `CSSProperties` | -       |
| customClass         | Custom external class name                              | `string`        | -       |

### Events

| Event Name | Description                          | Callback Parameters |
| ---------- | ------------------------------------ | ------------------- |
| click      | Triggered when the overlay is clicked | -                   |

### Slots

| Slot Name | Description                                             | Accepted Values |
| --------- | ------------------------------------------------------- | --------------- |
| default   | Default slot, used to embed content on top of the overlay | -               |

### CSS Variables

| Variable Name | Description             | Default Value          |
| ------------- | ----------------------- | ---------------------- |
| `--hy-overlay-bg` | Overlay background color | `rgba(0, 0, 0, 0.7)` |

<demo-model url="pages-design/overlay/overlay"></demo-model>