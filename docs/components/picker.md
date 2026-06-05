# Picker 选择器组件

> 此选择器用于单列、多列、多列联动的选择场景。

## :pushpin:平台差异说明

| APP(vue) | H5  | 微信小程序 | 支付宝小程序 |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning:注意事项

:::warning 注意事项
- `hasInput` 为 `true` 时，通过点击输入框打开选择器，无需设置 `show` 属性
- `modelValue` 在单列模式下为字符串或数字，多列模式下为数组
- 多列联动需要在 `change` 事件中调用 `setColumnValues` 方法更新后续列数据
- `columns` 参数支持一维数组（单列）或二维数组（多列）
- `popupMode` 目前仅支持 `bottom` 和 `top` 两种模式
:::

## :japanese_castle:基本使用示例

### 基础使用（单列模式）

```html
<template>
    <hy-picker :show="show" :columns="columns" @confirm="onConfirm"></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="打开选择器" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const show = ref(false)
    const value = ref('')
    const columns = reactive([['中国', '美国', '日本', '韩国']])

    const onConfirm = (e) => {
        value.value = e.value.join('')
        show.value = false
    }
</script>
```

### 通过输入框打开

```html
<template>
    <hy-picker
        v-model="value"
        has-input
        :columns="columns"
        :input="{ placeholder: '请选择国家' }"
        @confirm="onConfirm"
    ></hy-picker>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const value = ref('')
    const columns = reactive([['中国', '美国', '日本']])

    const onConfirm = (e) => {
        console.log('选中:', e.value)
    }
</script>
```

### 多列模式

```html
<template>
    <hy-picker
        v-model="value"
        has-input
        :columns="columns"
        separator="-"
        @confirm="onConfirm"
    ></hy-picker>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const value = ref([])
    const columns = reactive([
        ['周一', '周二', '周三', '周四', '周五'],
        ['上午', '下午', '晚上'],
        ['9:00', '10:00', '11:00', '14:00', '15:00', '16:00']
    ])

    const onConfirm = (e) => {
        console.log('选中:', e.value)
    }
</script>
```

### 多列联动

```html
<template>
    <hy-picker
        v-model="value"
        ref="pickerRef"
        has-input
        :columns="columns"
        @change="onChange"
        @confirm="onConfirm"
    ></hy-picker>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const pickerRef = ref(null)
    const value = ref([])

    const columns = reactive([
        ['中国', '美国'],
        ['北京', '上海', '广州']
    ])

    const cityData = reactive({
        中国: ['北京', '上海', '广州', '深圳'],
        美国: ['纽约', '洛杉矶', '芝加哥', '休斯顿']
    })

    const onChange = (e) => {
        const { columnIndex, value } = e
        if (columnIndex === 0) {
            const selectedCountry = value[0]
            pickerRef.value.setColumnValues(1, cityData[selectedCountry])
        }
    }

    const onConfirm = (e) => {
        console.log('联动选择:', e.value)
    }
</script>
```

### 对象数据格式

```html
<template>
    <hy-picker
        v-model="value"
        has-input
        :columns="columns"
        label-key="label"
        value-key="value"
        @confirm="onConfirm"
    ></hy-picker>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const value = ref('')
    const columns = reactive([
        [
            { label: '雪月夜', value: 2021 },
            { label: '冷夜雨', value: 804 },
            { label: '清风颂', value: 305 }
        ]
    ])

    const onConfirm = (e) => {
        console.log('选中:', e.value)
    }
</script>
```

### 自定义弹窗位置

```html
<template>
    <hy-picker :show="show" :columns="columns" popup-mode="top" @confirm="onConfirm"></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="顶部弹窗" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const show = ref(false)
    const value = ref('')
    const columns = reactive([['选项1', '选项2', '选项3']])

    const onConfirm = (e) => {
        value.value = e.value.join('')
        show.value = false
    }
</script>
```

### 自定义工具栏按钮

```html
<template>
    <hy-picker
        :show="show"
        :columns="columns"
        cancel-text="取消选择"
        confirm-text="确认选择"
        cancel-color="#999999"
        confirm-color="#4F8EF7"
        title="自定义标题"
        @confirm="onConfirm"
        @cancel="onCancel"
    ></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="自定义按钮" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const show = ref(false)
    const value = ref('')
    const columns = reactive([['选项A', '选项B', '选项C']])

    const onConfirm = (e) => {
        value.value = e.value.join('')
        show.value = false
    }

    const onCancel = () => {
        show.value = false
    }
</script>
```

### 自定义输入框样式

```html
<template>
    <hy-picker
        v-model="value"
        has-input
        :columns="columns"
        :input="{ 
            placeholder: '请选择',
            fontSize: 16,
            prefixIcon: 'calendar',
            border: false
        }"
    ></hy-picker>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const value = ref('')
    const columns = reactive([['选项1', '选项2', '选项3']])
</script>
```

### 设置默认选中项

```html
<template>
    <hy-picker
        :show="show"
        :columns="columns"
        :defaultIndex="[1, 2]"
        @confirm="onConfirm"
    ></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="默认选中" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const show = ref(false)
    const value = ref('')
    const columns = reactive([
        ['A', 'B', 'C', 'D'],
        ['1', '2', '3', '4']
    ])

    const onConfirm = (e) => {
        value.value = e.value.join(' / ')
        show.value = false
    }
</script>
```

### 禁用点击遮罩关闭

```html
<template>
    <hy-picker
        :show="show"
        :columns="columns"
        :closeOnClickOverlay="false"
        title="必须点击按钮关闭"
        @confirm="onConfirm"
    ></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="禁用遮罩关闭" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const show = ref(false)
    const value = ref('')
    const columns = reactive([['选项1', '选项2', '选项3']])

    const onConfirm = (e) => {
        value.value = e.value.join('')
        show.value = false
    }
</script>
```

### 自定义插槽内容

```html
<template>
    <hy-picker v-model="value" has-input :columns="columns" title="自定义标题" ref="pickerRef">
        <!-- 自定义输入框内容 -->
        <template #default>
            <view class="custom-input">
                <text>自定义内容: {{ value }}</text>
            </view>
        </template>

        <!-- 自定义工具栏右侧 -->
        <template #toolbar-right>
            <hy-button text="保存" size="small" @click="handleSave"></hy-button>
        </template>

        <!-- 工具栏下方自定义区域 -->
        <template #toolbar-bottom>
            <view class="toolbar-tip">
                <text>请选择您的选项</text>
            </view>
        </template>
    </hy-picker>
</template>

<script setup>
    import { ref, reactive } from 'vue'

    const pickerRef = ref(null)
    const value = ref('')
    const columns = reactive([['选项1', '选项2', '选项3']])

    const handleSave = () => {
        console.log('保存:', value.value)
        pickerRef.value.onConfirm()
    }
</script>
```

## API

### Picker Props

| 参数                | 说明                                                               | 类型                        | 默认值  |
| ------------------- | ------------------------------------------------------------------ | --------------------------- | ------- |
| modelValue          | 回显到输入框的值（hasInput为true时必须设置）                       | `string`\|`number`\|`array` | -       |
| show                | 是否显示选择器（hasInput为true时不用设置）                         | `boolean`                   | false   |
| popupMode           | 弹窗弹出模式[^1]                                                   | `string`                    | bottom  |
| separator           | 多列分隔符                                                         | `string`                    | /       |
| showToolbar         | 是否显示顶部操作栏                                                 | `boolean`                   | true    |
| title               | 顶部标题                                                           | `string`                    | -       |
| columns             | 设置每一列的数据，支持一维数组（单列）或二维数组（多列）           | `array`                     | []      |
| loading             | 是否显示加载中状态                                                 | `boolean`                   | false   |
| itemHeight          | 各列中单个选项的高度（px）                                         | `number`                    | 44      |
| cancelText          | 取消按钮文字                                                       | `string`                    | 取消    |
| confirmText         | 确认按钮文字                                                       | `string`                    | 确定    |
| cancelColor         | 取消按钮颜色                                                       | `string`                    | #909193 |
| confirmColor        | 确认按钮颜色                                                       | `string`                    | -       |
| visibleItemCount    | 每列可见选项数量                                                   | `number`                    | 5       |
| labelKey            | 选项对象中显示文本对应的键名                                       | `string`                    | label   |
| valueKey            | 选项对象中值对应的键名                                             | `string`                    | value   |
| closeOnClickOverlay | 是否允许点击遮罩关闭选择器                                         | `boolean`                   | false   |
| defaultIndex        | 各列默认索引                                                       | `array`                     | []      |
| immediateChange     | 是否在手指松开时立即触发change事件                                 | `boolean`                   | true    |
| zIndex              | 弹窗层级                                                           | `number`                    | 10076   |
| hasInput            | 是否显示输入框                                                     | `boolean`                   | false   |
| input               | 输入框配置属性，hasInput为true时生效，详见[输入框Api](./input#api) | `HyInputProps`              | {}      |
| toolbarRightSlot    | 是否启用工具栏右侧插槽（需配合slot="toolbar-right"使用）           | `boolean`                   | false   |

### Events

| 事件名  | 说明                           | 回调参数                                        |
| ------- | ------------------------------ | ----------------------------------------------- |
| close   | 关闭选择器时触发               | -                                               |
| confirm | 点击确定按钮，返回当前选择的值 | `{ indexs, value, values }`                     |
| change  | 当选择值变化时触发             | `{ columnIndex, index, indexs, value, values }` |
| cancel  | 点击取消按钮时触发             | -                                               |

### change 事件参数说明

| 参数        | 说明                     | 类型     |
| ----------- | ------------------------ | -------- |
| columnIndex | 发生变化的列索引         | `number` |
| index       | 当前列选中的索引         | `number` |
| indexs      | 所有列的索引数组         | `array`  |
| value       | 当前选中的值（数组）     | `array`  |
| values      | 所有列的数据（二维数组） | `array`  |

### confirm 事件参数说明

| 参数   | 说明                     | 类型    |
| ------ | ------------------------ | ------- |
| indexs | 所有列的索引数组         | `array` |
| value  | 当前选中的值（数组）     | `array` |
| values | 所有列的数据（二维数组） | `array` |

### Methods

通过 ref 调用以下方法：

| 方法名          | 说明                 | 参数                                                 |
| --------------- | -------------------- | ---------------------------------------------------- |
| setColumnValues | 设置指定列的选项数据 | `columnIndex: number` 列索引, `values: array` 新数据 |
| onConfirm       | 手动触发确认选择     | -                                                    |
| close           | 关闭选择器弹窗       | -                                                    |

### Slots

| 插槽名         | 说明                                                                            | 回调参数 |
| -------------- | ------------------------------------------------------------------------------- | -------- |
| default        | 自定义输入框内容（hasInput为true时生效）                                        | -        |
| toolbar-right  | 工具栏右侧内容，需同时设置 `toolbarRightSlot="true"` 才能生效（微信小程序限制） | -        |
| toolbar-bottom | 工具栏下方自定义区域                                                            | -        |

## typings

:::details 类型说明

```ts
interface PickerColumnVo {
    /** 值（必填） */
    value: string | number
    /** 显示文本 */
    label?: string
    /** 自定义属性 */
    [key: string]: any
}

interface SelectValueVo {
    /** 当前选中的值（数组） */
    value: string[]
    /** 当前列选中的索引 */
    index?: number
    /** 所有列的索引数组 */
    indexs?: number[]
    /** 所有列的数据（二维数组） */
    values?: Array<any>
    /** 发生变化的列索引 */
    columnIndex?: number
}

interface IPickerExpose {
    /** 设置某一列的值 */
    setColumnValues: (columnIndex: number, values: Array<string | PickerColumnVo>) => void
    /** 手动触发确认选择 */
    onConfirm: () => void
    /** 关闭选择器弹窗 */
    close: () => void
}
```

:::

<demo-model url="pages-design/picker/picker"></demo-model>

[^1]: bottom：底部弹出；top：顶部弹出
