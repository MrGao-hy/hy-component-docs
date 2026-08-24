# CountTo Number Scrolling Component

> This component is generally used in scenarios where a number needs to be scrolled to a specific value; the target is required to be an incrementing value.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-count-to time="3600 * 30 * 1000"></hy-count-to>
```

### Display Decimal Points

- Set the number of decimal places by configuring `decimals`

```html
<template>
    <hy-count-to :endVal="1542221" :decimals="2"></hy-count-to>
</template>
```

### Thousand Separator

- Set the thousand separator by configuring `separator`

```html
<template>
    <hy-count-to :endVal="1542221" separator=","></hy-count-to>
</template>
```

### Set Scrolling Duration

- Set the scrolling duration by configuring `duration`

```html
<template>
    <hy-count-to :endVal="1542221" :duration="10000"></hy-count-to>
</template>
```

### Set Font

- Make the font bold by setting `bold`
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
        countToRef.value.pause();
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

| Parameter | Description                                              | Type               | Default |
| --------- | -------------------------------------------------------- | ------------------ | ------- |
| startVal  | Start value                                              | `number`           | 0       |
| endVal    | End value                                                | `number`           | 0       |
| duration  | Time required for the scrolling process, in ms           | `number`           | 2000    |
| autoplay  | Whether to start scrolling automatically                 | `boolean`          | true    |
| decimals  | Number of decimal places to display, see above           | `number`           | 0       |
| useEasing | Whether to ease at the end when scrolling finishes, see above | `boolean`      | true    |
| decimal   | Decimal separator                                        | `string`           | ,       |
| color     | Font color                                               | `string`           | #606266 |
| fontSize  | Font size, default unit is px for numeric values         | `string`\|`number` | 22      |
| bold      | Whether the font is bold                                 | `boolean`          | false   |
| separator | Thousand separator, see above                            | `string`           | -       |

### Events

| Event Name | Description                                    | Callback Parameters |
| ---------- | --------------------------------------------- | ------------------- |
| end        | Triggered when the value scrolls to the target value | -        |

### Methods

| Event Name | Description                                                                |
| ---------- | --------------------------------------------------------------------------- |
| start      | Start scrolling                                                             |
| pause      | Pause scrolling                                                             |
| resume     | Resume scrolling from the paused value                                      |
| reStart    | While paused, restart scrolling from the beginning; or while scrolling, pause |

[^1] `DD`-day, `HH`-hour, `mm`-minute, `ss`-second, `SSS`-millisecond

<demo-model url="pages-design/countTo/countTo"></demo-model>