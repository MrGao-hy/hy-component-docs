# Picker Component

> This picker is used for single-column, multi-column, and multi-column linked selection scenarios.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

::: warning Notes

- When `hasInput` is `true`, the picker is opened by clicking the input box, so there is no need to set the `show` property
- `modelValue` is a string or number in single-column mode, and an array in multi-column mode
- Multi-column linking requires calling the `setColumnValues` method in the `change` event to update the data of subsequent columns
- The `columns` parameter supports a one-dimensional array (single column) or a two-dimensional array (multiple columns)
- `popupMode` currently only supports two modes: `bottom` and `top`

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage (Single-Column Mode)

```html
<template>
    <hy-picker :show="show" :columns="columns" @confirm="onConfirm"></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="打开选择器" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const value = ref('');
    const columns = reactive([['中国', '美国', '日本', '韩国']]);

    const onConfirm = (e) => {
        value.value = e.value.join('');
        show.value = false;
    };
</script>
```

### Open via Input Box

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
    import { ref, reactive } from 'vue';

    const value = ref('');
    const columns = reactive([['中国', '美国', '日本']]);

    const onConfirm = (e) => {
        console.log('选中:', e.value);
    };
</script>
```

### Multi-Column Mode

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
    import { ref, reactive } from 'vue';

    const value = ref([]);
    const columns = reactive([
        ['周一', '周二', '周三', '周四', '周五'],
        ['上午', '下午', '晚上'],
        ['9:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    ]);

    const onConfirm = (e) => {
        console.log('选中:', e.value);
    };
</script>
```

### Multi-Column Linking

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
    import { ref, reactive } from 'vue';

    const pickerRef = ref(null);
    const value = ref([]);

    const columns = reactive([
        ['中国', '美国'],
        ['北京', '上海', '广州'],
    ]);

    const cityData = reactive({
        中国: ['北京', '上海', '广州', '深圳'],
        美国: ['纽约', '洛杉矶', '芝加哥', '休斯顿'],
    });

    const onChange = (e) => {
        const { columnIndex, value } = e;
        if (columnIndex === 0) {
            const selectedCountry = value[0];
            pickerRef.value.setColumnValues(1, cityData[selectedCountry]);
        }
    };

    const onConfirm = (e) => {
        console.log('联动选择:', e.value);
    };
</script>
```

### Object Data Format

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
    import { ref, reactive } from 'vue';

    const value = ref('');
    const columns = reactive([
        [
            { label: '雪月夜', value: 2021 },
            { label: '冷夜雨', value: 804 },
            { label: '清风颂', value: 305 },
        ],
    ]);

    const onConfirm = (e) => {
        console.log('选中:', e.value);
    };
</script>
```

### Custom Popup Position

```html
<template>
    <hy-picker :show="show" :columns="columns" popup-mode="top" @confirm="onConfirm"></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="顶部弹窗" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const value = ref('');
    const columns = reactive([['选项1', '选项2', '选项3']]);

    const onConfirm = (e) => {
        value.value = e.value.join('');
        show.value = false;
    };
</script>
```

### Custom Toolbar Buttons

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
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const value = ref('');
    const columns = reactive([['选项A', '选项B', '选项C']]);

    const onConfirm = (e) => {
        value.value = e.value.join('');
        show.value = false;
    };

    const onCancel = () => {
        show.value = false;
    };
</script>
```

### Custom Input Box Style

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
    import { ref, reactive } from 'vue';

    const value = ref('');
    const columns = reactive([['选项1', '选项2', '选项3']]);
</script>
```

### Set Default Selection

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
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const value = ref('');
    const columns = reactive([
        ['A', 'B', 'C', 'D'],
        ['1', '2', '3', '4'],
    ]);

    const onConfirm = (e) => {
        value.value = e.value.join(' / ');
        show.value = false;
    };
</script>
```

### Disable Closing via Overlay Click

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
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const value = ref('');
    const columns = reactive([['选项1', '选项2', '选项3']]);

    const onConfirm = (e) => {
        value.value = e.value.join('');
        show.value = false;
    };
</script>
```

### Custom Slot Content

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
    import { ref, reactive } from 'vue';

    const pickerRef = ref(null);
    const value = ref('');
    const columns = reactive([['选项1', '选项2', '选项3']]);

    const handleSave = () => {
        console.log('保存:', value.value);
        pickerRef.value.onConfirm();
    };
</script>
```

## API

### Picker Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | The value echoed back to the input box (must be set when hasInput is true) | `string`\|`number`\|`array` | - |
| show | Whether to show the picker (no need to set when hasInput is true) | `boolean` | false |
| popupMode | Popup display mode[^1] | `string` | bottom |
| separator | Multi-column separator | `string` | / |
| showToolbar | Whether to show the top action bar | `boolean` | true |
| title | Top title | `string` | - |
| columns | Sets the data for each column; supports a one-dimensional array (single column) or a two dimensional array (multiple columns) | `array` | [] |
| loading | Whether to show the loading state | `boolean` | false |
| itemHeight | Height of a single option in each column (px) | `number` | 44 |
| cancelText | Cancel button text | `string` | Cancel |
| confirmText | Confirm button text | `string` | Confirm |
| cancelColor | Cancel button color | `string` | #909193 |
| confirmColor | Confirm button color | `string` | - |
| visibleItemCount | Number of visible options per column | `number` | 5 |
| labelKey | Key name of the display text in the option object | `string` | label |
| valueKey | Key name of the value in the option object | `string` | value |
| closeOnClickOverlay | Whether clicking the overlay is allowed to close the picker | `boolean` | false |
| defaultIndex | Default indexes of each column | `array` | [] |
| immediateChange | Whether to trigger the change event immediately when the finger is released | `boolean` | true |
| zIndex | Popup z-index | `number` | 10076 |
| hasInput | Whether to show the input box | `boolean` | false |
| input | Input box configuration properties, effective when hasInput is true; see [Input API](./input#api) for details | `HyInputProps` | {} |
| toolbarRightSlot | Whether to enable the toolbar right slot (must be used together with slot="toolbar-right") | `boolean` | false |

### Events

| Event Name | Description                           | Callback Parameters                                        |
| ------- | ------------------------------ | ----------------------------------------------- |
| close   | Triggered when the picker is closed               | -                                               |
| confirm | Triggered when the confirm button is clicked, returning the currently selected values | `{ indexs, value, values }`                     |
| change  | Triggered when the selected value changes             | `{ columnIndex, index, indexs, value, values }` |
| cancel  | Triggered when the cancel button is clicked             | -                                               |

### change Event Parameters

| Parameter        | Description                     | Type     |
| ----------- | ------------------------ | -------- |
| columnIndex | Index of the column that changed         | `number` |
| index       | Selected index of the current column         | `number` |
| indexs      | Array of indexes for all columns         | `array`  |
| value       | Currently selected values (array)     | `array`  |
| values      | Data of all columns (two-dimensional array) | `array`  |

### confirm Event Parameters

| Parameter   | Description                     | Type    |
| ------ | ------------------------ | ------- |
| indexs | Array of indexes for all columns         | `array` |
| value  | Currently selected values (array)     | `array` |
| values | Data of all columns (two-dimensional array) | `array` |

### Methods

Call the following methods via ref:

| Method Name          | Description                 | Parameters                                                 |
| --------------- | -------------------- | ---------------------------------------------------- |
| setColumnValues | Set the option data of a specified column | `columnIndex: number` column index, `values: array` new data |
| onConfirm       | Manually trigger the confirm selection     | -                                                    |
| close           | Close the picker popup       | -                                                    |

### Slots

| Slot Name | Description | Callback Parameters |
| --- | --- | --- |
| default | Custom input box content (effective when hasInput is true) | - |
| toolbar-right | Content on the right side of the toolbar; `toolbarRightSlot="true"` must also be set for it to take effect (WeChat Mini Program limitation) | - |
| toolbar-bottom | Custom area below the toolbar | - |

## typings

::: details Type Definitions

```ts
interface PickerColumnVo {
    /** 值（必填） */
    value: string | number;
    /** 显示文本 */
    label?: string;
    /** 自定义属性 */
    [key: string]: any;
}

interface SelectValueVo {
    /** 当前选中的值（数组） */
    value: string[];
    /** 当前列选中的索引 */
    index?: number;
    /** 所有列的索引数组 */
    indexs?: number[];
    /** 所有列的数据（二维数组） */
    values?: Array<any>;
    /** 发生变化的列索引 */
    columnIndex?: number;
}

interface IPickerExpose {
    /** 设置某一列的值 */
    setColumnValues: (columnIndex: number, values: Array<string | PickerColumnVo>) => void;
    /** 手动触发确认选择 */
    onConfirm: () => void;
    /** 关闭选择器弹窗 */
    close: () => void;
}
```

:::

### CSS Variables

| Variable Name                              | Description           | Default                              |
| ----------------------------------- | -------------- | ----------------------------------- |
| `--hy-picker-item-disabled-opacity` | Opacity of disabled options | `0.35`                              |
| `--hy-picker-loading-z-index`       | Loading layer z-index     | `1000`                              |
| `--hy-picker-title-font-size`       | Top title font size   | Follows `--hy-font-size-base` (28rpx) |
| `--hy-picker-title-color`           | Top title color   | Follows `--hy-text-color--grey`        |
| `--hy-picker-item-color`            | Option text color   | Follows `--hy-text-color`              |

[^1]: bottom: pops up from the bottom; top: pops up from the top

<demo-model url="pages-design/picker/picker"></demo-model>