# DatetimePicker 时间选择器组件
> 此选择器用于时间日期选择

::: danger 注意
注意：请先执行 `npm i dayjs` 安装依赖。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

:::warning 注意事项
- `minDate` 和 `maxDate` 参数需要传入时间戳（毫秒），而非日期字符串
- 微信小程序不支持通过props传递函数参数，`formatter` 需要通过 `setFormatter` 方法设置
- `hasInput` 设置为 `true` 时，组件会自带输入框，点击输入框可打开选择器
- `mode` 支持多种格式，详见下方说明
- `minHour`、`maxHour`、`minMinute`、`maxMinute` 仅在 `mode=time` 时有效
:::

## :japanese_castle:基本使用示例

### 通过内部输入框打开

```html
<template>
    <hy-datetime-picker v-model="value" has-input></hy-datetime-picker>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 通过外部按钮打开

```html
<template>
    <view>
        <hy-button @click="showPicker = true" :text="value || '选择日期'"></hy-button>
        <hy-datetime-picker
            v-model="value"
            v-model:show="showPicker"
            mode="date"
        ></hy-datetime-picker>
    </view>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
    const showPicker = ref(false)
</script>
```

### 各种时间模式
- `datetime`: 选择日期格式YYYY-MM-DD HH:mm:ss
- `date`: 选择日期格式YYYY-MM-DD
- `time`: 选择日期格式HH:mm
- `year-month`: 选择日期格式YYYY-MM
- `month-day`: 选择日期格式MM-DD
- `hour-minute`: 选择日期格式HH:mm
- `minute-second`: 选择日期格式mm:ss
```html
<template>
    <view>
        <!-- 完整时间 -->
        <hy-datetime-picker v-model="value1" has-input></hy-datetime-picker>

        <!-- 年月日 -->
        <hy-datetime-picker v-model="value2" has-input mode="date"></hy-datetime-picker>

        <!-- 年月 -->
        <hy-datetime-picker v-model="value3" has-input mode="year-month"></hy-datetime-picker>

        <!-- 月日 -->
        <hy-datetime-picker v-model="value4" has-input mode="month-day"></hy-datetime-picker>

        <!-- 时间(时分秒) -->
        <hy-datetime-picker v-model="value5" has-input mode="time"></hy-datetime-picker>

        <!-- 小时/分 -->
        <hy-datetime-picker v-model="value6" has-input mode="hour-minute"></hy-datetime-picker>

        <!-- 分/秒 -->
        <hy-datetime-picker v-model="value7" has-input mode="minute-second"></hy-datetime-picker>
    </view>
</template>

<script setup>
    import { ref } from 'vue'

    const value1 = ref('')
    const value2 = ref('')
    const value3 = ref('')
    const value4 = ref('')
    const value5 = ref('')
    const value6 = ref('')
    const value7 = ref('')
</script>
```

### 设置最大值最小值

```html
<template>
    <view>
        <hy-datetime-picker
            has-input
            v-model="value"
            :minDate="minDate"
            :maxDate="maxDate"
            mode="datetime"
        ></hy-datetime-picker>
    </view>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const value = ref(Date.now())
    // 设置可选范围为过去一年到未来一年
    const minDate = computed(() => {
        return new Date(new Date().getFullYear() - 1, 0, 1).getTime()
    })
    const maxDate = computed(() => {
        return new Date(new Date().getFullYear() + 1, 11, 31).getTime()
    })
</script>
```

### 时间自定义格式化

```html
<template>
    <view>
        <hy-datetime-picker
            ref="datetimePickerRef"
            :show="show"
            v-model="value"
            mode="datetime"
            :formatter="formatter"
        ></hy-datetime-picker>
        <hy-button @click="show = true">打开</hy-button>
    </view>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const show = ref(false)
    const value = ref(Date.now())
    const datetimePickerRef = ref(null)

    const formatter = (type, value) => {
        if (type === 'year') {
            return `${value}年`
        }
        if (type === 'month') {
            return `${value}月`
        }
        if (type === 'day') {
            return `${value}日`
        }
        return value
    }

    onMounted(() => {
        // 微信小程序需要用此写法
        // datetimePickerRef.value.setFormatter(formatter);
    })
</script>
```

### 自定义按钮文字和颜色

```html
<template>
    <hy-datetime-picker
        has-input
        v-model="value"
        cancelText="取消选择"
        confirmText="确认选择"
        cancelColor="#999999"
        confirmColor="#f56c6c"
    ></hy-datetime-picker>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 自定义输入框样式

```html
<template>
    <hy-datetime-picker
        has-input
        v-model="value"
        :input="{ placeholder: '请选择日期时间', border: true }"
        customStyle="{ marginTop: '20rpx' }"
    ></hy-datetime-picker>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

## API
### DatetimePicker Props

| 参数                  | 说明                                              | 类型                                                                                                | 默认值                |
|---------------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------|--------------------|
| show                | 用于控制选择器的弹出与收起                                   | `boolean`                                                                                         | false              |
| v-model             | 绑定值                                             | `string` \| `number` \| `Date`                                                                    | -                  |
| mode                | 展示格式                                            | `date` \| `datetime` \| `time` \| `year-month` \| `month-day` \| `hour-minute` \| `minute-second` | datetime           |
| hasInput            | 是否自带input输入框                                    | `boolean`                                                                                         | false              |
| input               | 输入框属性集合，hasInput为true可填，详见[输入框Api](./input#api) | `HyInputProps`                                                                                    | -                  |
| format              | 输入框显示日期格式                                       | `string`                                                                                          | 'YYYY-MM-DD HH:mm' |
| popupMode           | 用于控制选择器的弹出方向                                    | `bottom` \| `center` \| `left` \| `right` \| `top`                                                | bottom             |
| showToolbar         | 是否显示顶部的操作栏                                      | `boolean`                                                                                         | true               |
| title               | 顶部标题                                            | `string`                                                                                          | -                  |
| maxDate             | 可选的最大时间（时间戳毫秒）                                  | `number`                                                                                          | 后10年               |
| minDate             | 可选的最小时间（时间戳毫秒）                                  | `number`                                                                                          | 前10年               |
| minHour             | 可选的最小小时，仅mode=time有效                            | `number`                                                                                          | 0                  |
| maxHour             | 可选的最大小时，仅mode=time有效                            | `number`                                                                                          | 23                 |
| minMinute           | 可选的最小分钟，仅mode=time有效                            | `number`                                                                                          | 0                  |
| maxMinute           | 可选的最大分钟，仅mode=time有效                            | `number`                                                                                          | 59                 |
| filter              | 选项过滤函数                                          | `function`                                                                                        | null               |
| formatter           | 选项格式化函数                                         | `function`                                                                                        | null               |
| loading             | 是否显示加载中状态                                       | `boolean`                                                                                         | false              |
| itemHeight          | 各列中，单个选项的高度                                     | `number`                                                                                          | 44                 |
| cancelText          | 取消按钮的文字                                         | `string`                                                                                          | 取消                 |
| confirmText         | 确认按钮的文字                                         | `string`                                                                                          | 确认                 |
| cancelColor         | 取消按钮的颜色                                         | `string`                                                                                          | #909193            |
| confirmColor        | 确认按钮的颜色                                         | `string`                                                                                          | #3c9cff            |
| visibleItemCount    | 每列中可见选项的数量                                      | `number`                                                                                          | 5                  |
| closeOnClickOverlay | 是否允许点击遮罩关闭选择器                                   | `boolean`                                                                                         | false              |
| defaultIndex        | 各列的默认索引                                         | `array`                                                                                           | -                  |
| toolbarRightSlot    | 是否右边插槽                                          | `boolean`                                                                                         | false              |
| customStyle         | 自定义输入框外部样式                                      | `CSSProperties`                                                                                   | -                  |
| customClass         | 自定义外部类名                                         | `string`                                                                                          | -                  |

### Events

| 事件名     | 说明              | 回调参数              |
|---------|-----------------|-------------------|
| close   | 关闭选择器时触发        | -                 |
| confirm | 点击确定按钮，返回当前选择的值 | `{ value, mode }` |
| change  | 当选择值变化时触发       | `{ value, mode }` |
| cancel  | 点击取消按钮          | -                 |

### Slots

| 插槽名            | 说明                                                            |
|----------------|---------------------------------------------------------------|
| toolbar-right  | 工具栏右侧内容，自定义右侧内容，因为微信小程序限制，需要同时设置 `toolbarRightSlot="true"` 生效 |
| toolbar-bottom | 输入框下方自定义区域                                                    |

### Methods

| 方法名          | 说明                         |
|--------------|----------------------------|
| setFormatter | 为兼容微信小程序而暴露的内部方法，用于设置格式化函数 |

### Typings

:::details 类型说明

```ts

type IParam = {
    /** 值 */
    value: string | number
    /** 时间模型 */
    mode: HyApp.DateModeEnum
}
```

:::

<demo-model url="pages-design/dateTimePicker/dateTimePicker"></demo-model>
