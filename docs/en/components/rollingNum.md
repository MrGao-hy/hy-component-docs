# RollingNum Rolling Number Component

> Rolling number component, used to implement an animation effect where numbers smoothly scroll from an initial value (all 0s) to a target value. When the number changes, it first displays a string of all 0s with the same length as the target value, then transitions to the target value through a smooth scrolling animation.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## Features

- ✅ Supports custom number size, color, and font weight
- ✅ Supports setting scroll direction (up, down, alternating)
- ✅ Supports setting animation duration and delay step
- ✅ Automatically generates an initial value (all 0s) of matching length based on the target value's length
- ✅ Supports special characters (non-numeric characters are displayed directly and do not participate in scrolling)

## FAQ

### Q: Why does it display all 0s first when the number changes?

A: This is a design feature of the component, used to achieve a scrolling animation effect from the initial state to the target state, enhancing the visual experience.

### Q: How do I adjust the scrolling speed?

A: You can control the duration of the entire scrolling animation by adjusting the `duration` property. The smaller the value, the faster the scrolling.

### Q: How are special characters displayed?

A: Non-numeric characters (such as decimal points, currency symbols, etc.) are displayed directly and do not participate in the scrolling animation.

## :japanese_castle: Basic Usage Example

```vue
<template>
    <view class="demo">
        <hy-rolling-num :value="num" :size="'48rpx'" :color="'#1989fa'" />
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    // Initial value is 0; when updated to 234564, it will first display 000000, then scroll to 234564
    const num = ref(234564);
</script>
```

### Custom Configuration

```html
<hy-rolling-num
    :value="num"
    :size="'36rpx'"
    :color="'#ff6b6b'"
    :font-weight="'bold'"
    :duration="2"
    :scroll-direction="'down'"
    :stop-order="'right-to-left'"
    :delay-step="0.15"
/>
```

### Custom Styles

::: code-group

```html [Template]
<template>
    <hy-rolling-num
        :value="val5"
        size="60rpx"
        height="120rpx"
        color="#fff"
        custom-class="myClass"
    />
</template>
```

```scss [Styles]
:deep(.myClass) {
    display: grid;
    gap: 10px;
    .hy-rolling-num__column {
        background: #007aff;
        width: 90rpx;
        border-radius: 10rpx;
    }
}
```

:::

### Changing the Number Length

```html
<template>
    <view>
        <button @click="changeValue(234)">Show 234</button>
        <button @click="changeValue(987654321)">Show 987654321</button>
        <hy-rolling-num :value="displayValue" />
        <!-- Clicking the first button: displays 000 -> 234 -->
        <!-- Clicking the second button: displays 000000000 -> 987654321 -->
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const displayValue = ref(0);

    const changeValue = (val: number) => {
        displayValue.value = val;
    };
</script>
```

## Props

### rollingNum Props

| Parameter       | Description                                          | Type               | Default |
| --------------- | ---------------------------------------------------- | ------------------ | ------- |
| value           | Number or string value to display                    | `string`\|`number` | 0       |
| size            | Number font size                                     | `string`\|`number` | 32rpx   |
| color           | Number color                                         | `string`           | #333    |
| fontWeight      | Font weight                                          | `string`\|`number` | normal  |
| height          | Height of a single number                            | `string`\|`number` | 40rpx   |
| duration        | Scrolling animation duration (seconds)               | `number`           | 1.5     |
| letterSpacing   | Number spacing, default unit is px                   | `string`\|`number` | 0       |
| scrollDirection | Scroll direction: up, down, or alternating           | `string`           | up      |
| stopOrder       | Scroll stop order: left to right or right to left    | `string`           | ltr     |
| delayStep       | Delay interval for each number's scrolling (seconds) | `number`           | 0.1     |
| customStyle     | External styles to be applied                        | `CSSProperties`    | -       |
| customClass     | Custom external class name                           | `string`           | -       |

<demo-model url="pages-design/rollingNum/rollingNum"></demo-model>