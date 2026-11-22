# Transition Animation Component

> This component is used for animation transition effects of components.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-transition :show="show">
    <view class="transition">Content</view>
</hy-transition>
```

```ts
import { ref } from 'vue';

const show = ref(true);
```

### Animation Mode

> By setting `mode`
>
> - `fade` Fade in
> - `fade-up` Slide up with fade in
> - `fade-down` Slide down with fade in
> - `fade-left` Slide left with fade in
> - `fade-right` Slide right with fade in
> - `slide-up` Slide up entrance
> - `slide-down` Slide down entrance
> - `slide-left` Slide left entrance
> - `slide-right` Slide right entrance
> - `zoom-in` Zoom in entrance
> - `zoom-out` Zoom out entrance
> - `rotate` Rotate entrance
> - `flip-x` 3D flip entrance on X axis
> - `flip-y` 3D flip entrance on Y axis
> - `bounce` Bounce entrance

```html
<template>
    <hy-transition :show="show" mode="zoom-in"></hy-transition>
</template>
```

### Animation Transition

> By setting `timingFunction`
>
> - `linear`: The transition effect runs at the same speed from start to end, equivalent to cubic-bezier(0,0,1,1).
> - `ease`: The transition effect starts slowly, then speeds up, and finally ends slowly. This is the default value, equivalent to cubic-bezier(0.25,0.1,0.25,1).
> - `ease-in`: The transition effect starts slowly and then gradually speeds up, equivalent to cubic-bezier(0.42,0,1,1).
> - `ease-out`: The transition effect starts fast and then gradually slows down, equivalent to cubic-bezier(0,0,0.58,1).
> - `ease-in-out`: The transition effect starts slowly, speeds up in the middle, and then slows down at the end, equivalent to cubic-bezier(0.42,0,0.58,1).

```html
<template>
    <hy-transition :show="show" timingFunction="linear"></hy-transition>
</template>
```

## API

### Transition Props

| Parameter      | Description                                     | Type            | Default  |
| -------------- | ----------------------------------------------- | --------------- | -------- |
| show           | Whether to show the component                   | `boolean`       | false    |
| mode           | Animation mode to use, see above for details    | `string`        | fade     |
| duration       | Animation execution time, in ms                 | `number`        | 300      |
| stop           | Whether to prevent click event bubbling         | `boolean`       | false    |
| lockScroll     | Whether to prevent touch scroll penetration     | `boolean`       | false    |
| timingFunction | Animation timing function, see above for details | `string`        | ease-out |
| customStyle    | Define external styles to be used               | `CSSProperties` | -        |
| customClass    | Custom external class name                      | `string`        | -        |
| stop           | Whether to prevent click event bubbling         | `boolean`       | false    |

### Events

| Event Name  | Description             | Callback Parameters |
| ----------- | ----------------------- | ------------------- |
| beforeEnter | Triggered before enter  | -                   |
| enter       | Triggered during enter  | -                   |
| afterEnter  | Triggered after enter   | -                   |
| beforeLeave | Triggered before leave  | -                   |
| leave       | Triggered during leave  | -                   |
| afterLeave  | Triggered after leave   | -                   |
| click       | Triggered on click      | -                   |

### Slots

| Slot Name | Description | Value Received |
| --------- | ----------- | -------------- |
| default   | -           | -              |

<demo-model url="pages-design/transition/transition"></demo-model>