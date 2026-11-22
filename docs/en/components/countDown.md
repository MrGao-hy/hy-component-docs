# CountDown Countdown Component

> This component is generally used for the deadline of an event. Through the changing numbers, it gives users a clear perception of time and prompts them to perform a certain action.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-count-down time="3600 * 30 * 1000"></hy-count-down>
```

### Custom Format

- Customize the format by setting `format`

```html
<template>
    <hy-count-down :time="30 * 60 * 60 * 1000" format="DD days HH hours mm minutes ss seconds"></hy-count-down>
</template>
```

### Millisecond-Level Rendering

- Customize the format by setting `millisecond`
- The `format` value must include the millisecond part

```html
<template>
    <hy-count-down time="3600 * 30 * 1000" format="HH:mm:ss:SSS" millisecond></hy-count-down>
</template>
```

### Custom Style

::: code-group

```html [vue]
<hy-count-down :time="30 * 60 * 60 * 1000" autoStart>
    <template #default="{ record: timeData }">
        <view class="time">
            <view class="time__custom">
                <text class="time__custom__item">
                    {{ timeData.hours > 10 ? timeData.hours : "0" + timeData.hours }}
                </text>
            </view>
            <text class="time__doc">:</text>
            <view class="time__custom">
                <text class="time__custom__item">{{ timeData.minutes }}</text>
            </view>
            <text class="time__doc">:</text>
            <view class="time__custom">
                <text class="time__custom__item">{{ timeData.seconds }}</text>
            </view>
        </view>
    </template>
</hy-count-down>
```

```scss [.scss]
@import 'hy-app/index.scss';
.time {
    display: flex;
    align-items: center;

    &__custom {
        margin-top: 4px;
        width: 22px;
        height: 22px;
        background-color: $hy-primary;
        border-radius: 4px;
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
        justify-content: center;
        align-items: center;

        &__item {
            color: #fff;
            font-size: 12px;
            text-align: center;
        }
    }

    &__doc {
        color: $hy-primary;
        padding: 0 4px;
    }

    &__item {
        color: #606266;
        font-size: 15px;
        margin-right: 4px;
    }
}
```

:::

### Manual Control

::: code-group

```html [vue]
<hy-count-down
    ref="countDownRef"
    :time="10 * 1000"
    format="ss:SSS"
    :autoStart="false"
    millisecond
></hy-count-down>
<view class="hy-flex">
    <hy-button text="Reset" type="info" @click="reset"></hy-button>
    <hy-button text="Start" type="success" @click="start"></hy-button>
    <hy-button text="Pause" type="error" @click="pause"></hy-button>
</view>
```

```ts [.ts]
import HyCountDown from 'hy-app/components/hy-count-down/hy-count-down.vue';
import { ref } from 'vue';

const countDownRef = ref<InstanceType<typeof HyCountDown>>();

const start = () => {
    if (countDownRef.value) {
        countDownRef.value.start();
    }
};

const pause = () => {
    if (countDownRef.value) {
        countDownRef.value.pause();
    }
};

const reset = () => {
    if (countDownRef.value) {
        countDownRef.value.reset();
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

### CountDown Props

| Parameter   | Description                                   | Type            | Default Value |
| ----------- | --------------------------------------------- | --------------- | ------------- |
| time        | Countdown duration, in ms                     | `number`        | 0             |
| format      | Time format[^1]                               | `string`        | HH:mm:ss      |
| autoStart   | Whether to start the countdown automatically  | `boolean`       | true          |
| millisecond | Whether to show the countdown in milliseconds | `boolean`       | false         |
| customClass | Custom external class name                    | `string`        | -             |
| customStyle | Define the external styles to be used         | `CSSProperties` | -             |

### Events

| Event Name | Description                                             | Callback Parameter   |
| ---------- | ------------------------------------------------------- | -------------------- |
| change     | Triggered when the countdown changes during the process | time: remaining time |
| finish     | Countdown finished                                      | -                    |

### Methods

| Name  | Description      |
| ----- | ---------------- |
| start | Start countdown  |
| pause | Pause countdown  |
| reset | Reset countdown  |

### CountDown Slots

| Slot Name | Description | Accepted Value | | --- | --- | --- | --- | | default | Default slot, used for custom content | - |

### CSS Variables

| Variable Name                 | Description | Default Value |
| ----------------------------- | ----------- | ------------- |
| `--hy-count-down-font-size`   | Font size   | `15px`        |
| `--hy-count-down-line-height` | Line height | `22px`        |

[^1] `DD`-day, `HH`-hour, `mm`-minute, `ss`-second, `SSS`-millisecond

<demo-model url="pages-design/countDown/countDown"></demo-model>