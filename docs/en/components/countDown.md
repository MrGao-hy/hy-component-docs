# CountDown Component

> This component is typically used for the deadline of an activity. Through the changing numbers, it gives users a clear sense of time and prompts them to take a specific action.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage

```html
<!-- Global usage -->
<hy-count-down time="3600 * 30 * 1000"></hy-count-down>
```

### Custom Format

- Customize the format by setting `format`

```html
<template>
    <hy-count-down :time="30 * 60 * 60 * 1000" format="DD days HH hours mm min ss sec"></hy-count-down>
</template>
```

### Millisecond Rendering

- Enable millisecond rendering by setting `millisecond`
- The `format` value must include milliseconds

```html
<template>
    <hy-count-down time="3600 * 30 * 1000" format="HH:mm:ss:SSS" millisecond></hy-count-down>
</template>
```

### Custom Styles

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

| Parameter   | Description                                  | Type      | Default  |
| ----------- | -------------------------------------------- | --------- | -------- |
| time        | Countdown duration, in ms                    | `number`  | 0        |
| format      | Time format[^1]                              | `string`  | HH:mm:ss |
| autoStart   | Whether to start the countdown automatically | `boolean` | true     |
| millisecond | Whether to display milliseconds in countdown | `boolean` | false    |

### Events

| Event Name | Description                                            | Callback Parameters |
| ---------- | ------------------------------------------------------ | ------------------- |
| change     | Triggered during the countdown as the time changes     | time: remaining time |
| finish     | Countdown finished                                     | -                   |

### Methods

| Method Name | Description       |
| ----------- | ----------------- |
| start       | Start countdown   |
| pause       | Pause countdown   |
| reset       | Reset countdown   |

[^1] `DD`-day, `HH`-hour, `mm`-minute, `ss`-second, `SSS`-millisecond

<demo-model url="pages-design/countDown/countDown"></demo-model>