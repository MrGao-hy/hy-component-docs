# CountTo Number Scrolling Component

> This component is generally used in scenarios where a number needs to be scrolled to a certain value, and the target is required to be an increasing value.

## :pushpin:Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage Examples

```html
<!-- Global usage -->
<hy-count-to time="3600 * 30 * 1000"></hy-count-to>
```

### Displaying Decimal Points

- Set the number of decimal places by configuring `decimals`

```html
<template>
    <hy-count-to :endVal="1542221" :decimals="2"></hy-count-to>
</template>
```

### Thousands Separator

- Set the thousands separator by configuring `separator`

```html
<template>
    <hy-count-to :endVal="1542221" separator=","></hy-count-to>
</template>
```

### Setting Scroll Duration

- Set the scrolling duration by configuring `duration`

```html
<template>
    <hy-count-to :endVal="1542221" :duration="10000"></hy-count-to>
</template>
```

### Setting the Font

- Make the font bold by configuring `bold`
- Set the font size by configuring `fontSize`
- Set the font color by configuring `color`

```html
<template>
    <hy-count-to :endVal="154" bold fontSize="40" color="#31E749"></hy-count-to>
</template>
```

### Manual Control

::: code-group

```html [vue]
<hy-count-to ref="countToRef" :endVal="1542222" :duration="10000" :autoplay="false"></hy-count-to>
<view class="hy-flex">
    <hy-button text="Start" type="success" @click="start"></hy-button>
    <hy-button text="Pause" type="error" @click="pause"></hy-button>
    <hy-button text="Resume" type="info" @click="resume"></hy-button>
</view>
```

```ts [.ts]
import HyCountTo from 'hy-app/components/hy-count-to/hy-count-to.vue';
import { ref } from 'vue';

const countToRef = ref<InstanceType<typeof HyCountTo>>();

const start = () => {
    if (countToRef.value) {
        countToRef.value.start();
    }
};

const pause = () => {
    if (countToRef.value) {
        countToRef.value.stop();
    }
};

const resume = () => {
    if (countToRef.value) {
        countToRef.value.resume();
    }
};
```

```scss [.scss]
.hy-flex {
    display: flex;
    justify-content: space-around;
}
```

:::

## API

### CountTo

| Parameter   | Description                                          | Type               | Default |
| ----------- | ---------------------------------------------------- | ------------------ | ------- |
| startVal    | Start value                                          | `number`           | 0       |
| endVal      | End value                                            | `number`           | 0       |
| duration    | Time required for the scrolling process, in ms       | `number`           | 2000    |
| autoplay    | Whether to start scrolling automatically             | `boolean`          | true    |
| decimals    | Number of decimal places to display, see above       | `number`           | 0       |
| useEasing   | Whether to ease at the end when scrolling finishes, see above | `boolean`  | true    |
| decimal     | Decimal separator                                    | `string`           | ,       |
| color       | Font color                                           | `string`           | #606266 |
| fontSize    | Font size, default unit px when numeric              | `string`\|`number` | 22      |
| bold        | Whether the font is bold                             | `boolean`          | false   |
| separator   | Thousands separator, see above                       | `string`           | -       |
| customClass | Custom external class name                           | `string`           | -       |
| customStyle | Define external styles to be used                    | `CSSProperties`    | -       |

### Events

| Event Name | Description                                    | Callback Parameters |
| ---------- | ---------------------------------------------- | ------------------- |
| end        | Triggered when the value scrolls to the target | -                   |

### Methods

| Method Name | Description                     |
| ----------- | -------------------------------- |
| start       | Start scrolling the number      |
| stop        | Stop scrolling                  |
| resume      | Resume scrolling (when paused)  |
| reStart     | Restart or pause scrolling      |
| reset       | Reset to the initial value      |

### CSS Variables

| Variable Name         | Description      | Default                |
| --------------------- | ---------------- | ---------------------- |
| `--hy-count-to-color` | Number text color | Follows `--hy-text-color` |

[^1] `DD`-day, `HH`-hour, `mm`-minute, `ss`-second, `SSS`-millisecond

<demo-model url="pages-design/countTo/countTo"></demo-model>