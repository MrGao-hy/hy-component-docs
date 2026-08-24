# Slider Component

> This component is generally used in forms for scenarios where a user manually selects a value within a range.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- 全局使用 -->
<hy-slider v-model="value"></hy-slider>
```

```ts
import { ref } from 'vue';

const value = ref(30);
```

### Setting Maximum and Minimum Values

Using `min` and `max`, you can set the maximum and minimum values selectable by the slider

```html
<template>
    <hy-slider v-model="value" min="30" max="80"></hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(30);
</script>
```

### Setting the Step Value

::: warning Note

Please note that the step must be evenly divisible by the max value; otherwise, you may encounter a situation where the slider cannot reach the maximum value

:::

```html
<template>
    <hy-slider v-model="value" step="20"></hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(30);
</script>
```

### Using in Containers That Are Initially Hidden, Such as Popups

::: warning Note

Please note that in this scenario, you should add a v-if to the slider so that it is rendered only when the popup is shown. This ensures the slider's dimensions are calculated correctly.

:::

```html
<template>
    <hy-popup v-model:show="popupShow">
        <view class="slot-content" style="width: 100%">
            <hy-slider v-if="popupShow" v-model="sliderValue" min="1" max="4" showValue></hy-slider>
        </view>
    </hy-popup>
    <hy-button type="primary" @click="popupShow = !popupShow" text="打开遮罩框"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';
    const popupShow = ref(false);
    const sliderValue = ref(4);
</script>
```

### Disabled State

```html
<template>
    <hy-slider v-model="value" disabled></hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(30);
</script>
```

### Custom Slider Thumb

```html
<template>
    <hy-slider v-model="value">
        <template #default>
            <view>
                <svg
                    t="1722094047017"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="11063"
                    width="32"
                    height="32"
                >
                    <path
                        d="M965.12 469.333333c-81.493333-90.88-230.186667-149.333333-378.453333-149.333333h-6.826667a193.28 193.28 0 0 0-289.493333-109.226667 188.373333 188.373333 0 0 0-51.2 47.36 42.666667 42.666667 0 0 0-2.773334 45.653334 42.666667 42.666667 0 0 0 42.666667 21.333333A149.333333 149.333333 0 0 1 384 355.626667l-16.426667 6.4A42.666667 42.666667 0 0 0 341.333333 401.28v221.44A42.666667 42.666667 0 0 0 367.36 661.333333l16.64 7.466667a150.4 150.4 0 0 1-106.666667 30.506667 42.666667 42.666667 0 0 0-42.666666 21.333333 42.666667 42.666667 0 0 0 2.773333 45.866667 187.946667 187.946667 0 0 0 51.2 47.36 194.56 194.56 0 0 0 103.893333 29.653333A192 192 0 0 0 580.053333 704h6.613334c149.333333 0 296.96-58.666667 378.453333-149.333333a64 64 0 0 0 0-85.333334z m-535.68-130.773333a192 192 0 0 0-155.946667-55.04 146.133333 146.133333 0 0 1 39.68-36.693333 152.533333 152.533333 0 0 1 176.213334 10.24 149.333333 149.333333 0 0 1 46.293333 65.28 615.04 615.04 0 0 0-104.746667 18.346666 20.053333 20.053333 0 0 0-1.493333-2.133333zM489.173333 768a152.32 152.32 0 0 1-176.213333 10.24 135.893333 135.893333 0 0 1-38.826667-36.266667 192 192 0 0 0 155.093334-55.466666 21.333333 21.333333 0 0 0 2.133333-3.84 615.466667 615.466667 0 0 0 104.533333 18.346666A149.333333 149.333333 0 0 1 489.173333 768z m444.16-242.133333C859.52 608.213333 723.413333 661.333333 586.666667 661.333333a546.773333 546.773333 0 0 1-202.666667-38.613333V401.28A549.76 549.76 0 0 1 586.666667 362.666667c136.746667 0 272.853333 53.12 346.666666 135.466666a21.333333 21.333333 0 0 1 0 27.733334z"
                        fill="#CE4141"
                        p-id="11064"
                    ></path>
                    <path
                        d="M682.666667 426.666667a85.333333 85.333333 0 1 0 85.333333 85.333333 85.333333 85.333333 0 0 0-85.333333-85.333333z m0 128a42.666667 42.666667 0 1 1 42.666666-42.666667 42.666667 42.666667 0 0 1-42.666666 42.666667zM128 448h149.333333a21.333333 21.333333 0 0 0 0-42.666667H128a21.333333 21.333333 0 0 0 0 42.666667zM298.666667 597.333333a21.333333 21.333333 0 0 0-21.333334-21.333333H192a21.333333 21.333333 0 0 0 0 42.666667h85.333333a21.333333 21.333333 0 0 0 21.333334-21.333334zM298.666667 512a21.333333 21.333333 0 0 0-21.333334-21.333333H64a21.333333 21.333333 0 0 0 0 42.666666h213.333333a21.333333 21.333333 0 0 0 21.333334-21.333333z"
                        fill="#CE4141"
                        p-id="11065"
                    ></path>
                    <path
                        d="M448 426.666667m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
                        fill="#CE4141"
                        p-id="11066"
                    ></path>
                    <path
                        d="M448 512m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
                        fill="#CE4141"
                        p-id="11067"
                    ></path>
                    <path
                        d="M448 597.333333m-21.333333 0a21.333333 21.333333 0 1 0 42.666666 0 21.333333 21.333333 0 1 0-42.666666 0Z"
                        fill="#CE4141"
                        p-id="11068"
                    ></path>
                </svg>
            </view>
        </template>
    </hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(30);
</script>
```

### Range Selection

```html
<template>
    <hy-slider isRange showValue v-model:rangeValue="value"></hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref([20, 80]);
</script>
```

### Customizing the Overall Style of the Slider

- Use inactive-color to configure the background color of the track
- Use active-color to configure the background color of the selected portion
- Use block-width to configure the width of the slider thumb (height equals width)
- Use block-color to configure the color of the slider thumb button
- Use height to configure the height of the slider track, in rpx

```html
<template>
    <hy-slider v-model="value" inactive-color="red"></hy-slider>
    <hy-slider v-model="value" active-color="red"></hy-slider>
    <hy-slider v-model="value" :block-width="10"></hy-slider>
    <hy-slider v-model="value" block-color="red"></hy-slider>
    <hy-slider v-model="value" :height="4"></hy-slider>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref(30);
</script>
```

## API

### Slider Props

| Parameter     | Description                                            | Type                 | Default |
| ------------- | ------------------------------------------------------ | -------------------- | ------- |
| v-model       | Two-way binding of the slider's selected value         | `number`             | 0       |
| blockSize     | Size of the slider thumb                               | `number`             | 18      |
| min           | Minimum selectable value                               | `number`             | 1       |
| max           | Maximum selectable value                               | `number`             | 100     |
| step          | Step size of the selection                             | `number`             | 1       |
| activeColor   | Color of the active portion of the progress bar        | `string`             | -       |
| inactiveColor | Background color of the progress bar                   | `string`             | -       |
| blockColor    | Background color of the slider thumb                   | `string`             | -       |
| showValue     | Whether to display the current value                   | `boolean`            | false   |
| blockStyle    | Custom style for the slider thumb, in object form      | `CSSProperties`      | -       |
| height        | Height of the progress bar, numeric values default px  | `string` \| `number` | 2px     |
| isRange       | Enable dual-thumb mode                                 | `boolean`            | false   |
| useNative     | Whether to render the uni-app framework's built-in component | `boolean`       | false   |
| rangeValue    | Two-way binding value for dual thumbs, in array form   | `array`              | [0, 0]  |
| customStyle   | Define external styles to be applied                  | `CSSProperties`      | -       |

### Events

| Event Name | Description                         | Callback Parameter |
| ---------- | ----------------------------------- | ------------------ |
| changing   | Triggered event (during dragging)   | value: current value |
| change     | Triggered event                     | value: current value |
| start      | Start sliding                       | value: current value |

<demo-model url="pages-design/slider/slider"></demo-model>