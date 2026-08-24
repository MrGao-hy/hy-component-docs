# Transition Animation Component

> This component is used for animation transition effects of components.

## :pushpin:Platform Compatibility Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle:Basic Usage Example

```html
<!-- Global usage -->
<hy-transition :show="show">
    <view class="transition">I am content</view>
</hy-transition>
```

```ts
import { ref } from 'vue';

const show = ref(true);
```

### Animation Modes

> By setting `mode`
>
> - `fade` fade in
> - `fade-up` slide up and fade in
> - `fade-down` slide down and fade in
> - `fade-left` slide left and fade in
> - `fade-right` slide right and fade in
> - `slide-up` slide up in
> - `slide-down` slide down in
> - `slide-left` slide in from left
> - `slide-right` slide in from right
> - `zoom-in` zoom in
> - `zoom-out` zoom out

```html
<template>
    <hy-transition :show="show" mode="zoom-in"></hy-transition>
</template>
```

### Animation Transition

> By setting `timingFunction`
>
> - `linear`: the transition effect runs at the same speed from start to end, equivalent to cubic-bezier(0,0,1,1).
> - `ease`: the transition effect starts slowly, then speeds up, and finally ends slowly. This is the default value, equivalent to cubic-bezier(0.25,0.1,0.25,1).
> - `ease-in`: the transition effect starts slowly and then gradually speeds up, equivalent to cubic-bezier(0.42,0,1,1).
> - `ease-out`: the transition effect starts quickly and then gradually slows down, equivalent to cubic-bezier(0,0,0.58,1).
> - `ease-in-out`: the transition effect starts slowly, speeds up in the middle, and then slows down at the end, equivalent to cubic-bezier(0.42,0,0.58,1).

```html
<template>
    <hy-transition :show="show" timingFunction="linear"></hy-transition>
</template>
```

## API

### Transition Props

| Parameter      | Description                                    | Type            | Default  |
| -------------- | ---------------------------------------------- | --------------- | -------- |
| show           | Whether to show the component                  | `boolean`       | false    |
| mode           | Animation mode to use, see above for details   | `string`        | fade     |
| duration       | Duration of the animation, in ms               | `number`        | 300      |
| timingFunction | Animation transition function, see above        | `string`        | ease-out |
| customStyle    | Define external styles to be used              | `CSSProperties` | -        |

### Events

| Event Name  | Description                  | Callback Parameters |
| ----------- | ---------------------------- | ------------------- |
| beforeEnter | Triggered before entering    | -                   |
| enter       | Triggered during entering    | -                   |
| afterEnter  | Triggered after entering     | -                   |
| beforeLeave | Triggered before leaving     | -                   |
| leave       | Triggered during leaving     | -                   |
| afterLeave  | Triggered after leaving      | -                   |

### Slots

| Slot Name | Description | Accepted Values |
| --------- | ----------- | --------------- |
| default   | -           | -               |

<demo-model url="pages-design/transition/transition"></demo-model>