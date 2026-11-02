# Picker Component

> This picker is used for single-column, multi-column, and multi-column linkage selection scenarios.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- When `hasInput` is `true`, the picker opens by clicking the input box, so there is no need to set the `show` property
- `modelValue` is a string or number in single-column mode, and an array in multi-column mode
- Multi-column linkage requires calling the `setColumnValues` method in the `change` event to update the data of subsequent columns
- The `columns` parameter supports a one-dimensional array (single column) or a two-dimensional array (multiple columns)
- `popupMode` currently only supports two modes: `bottom` and `top`

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage (Single Column Mode)

```html
<template>
    <hy-picker :show="show" :columns="columns" @confirm="onConfirm"></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="Open Picker" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const value = ref('');
    const columns = reactive([['China', 'USA', 'Japan', 'Korea']]);

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
        :input="{ placeholder: 'Please select a country' }"
        @confirm="onConfirm"
    ></hy-picker>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const value = ref('');
    const columns = reactive([['China', 'USA', 'Japan']]);

    const onConfirm = (e) => {
        console.log('Selected:', e.value);
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
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        ['Morning', 'Afternoon', 'Evening'],
        ['9:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    ]);

    const onConfirm = (e) => {
        console.log('Selected:', e.value);
    };
</script>
```

### Multi-Column Linkage

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
        ['China', 'USA'],
        ['Beijing', 'Shanghai', 'Guangzhou'],
    ]);

    const cityData = reactive({
        China: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'],
        USA: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
    });

    const onChange = (e) => {
        const { columnIndex, value } = e;
        if (columnIndex === 0) {
            const selectedCountry = value[0];
            pickerRef.value.setColumnValues(1, cityData[selectedCountry]);
        }
    };

    const onConfirm = (e) => {
        console.log('Linked selection:', e.value);
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
            { label: 'Snowy Moon Night', value: 2021 },
            { label: 'Cold Night Rain', value: 804 },
            { label: 'Gentle Breeze', value: 305 },
        ],
    ]);

    const onConfirm = (e) => {
        console.log('Selected:', e.value);
    };
</script>
```

### Custom Popup Position

```html
<template>
    <hy-picker :show="show" :columns="columns" popup-mode="top" @confirm="onConfirm"></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="Top Popup" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const value = ref('');
    const columns = reactive([['Option 1', 'Option 2', 'Option 3']]);

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
        cancel-text="Cancel Selection"
        confirm-text="Confirm Selection"
        cancel-color="#999999"
        confirm-color="#4F8EF7"
        title="Custom Title"
        @confirm="onConfirm"
        @cancel="onCancel"
    ></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="Custom Buttons" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const value = ref('');
    const columns = reactive([['Option A', 'Option B', 'Option C']]);

    const onConfirm = (e) => {
        value.value = e.value.join('');
        show.value = false;
    };

    const onCancel = () => {
        show.value = false;
    };
</script>
```

### Custom Input Style

```html
<template>
    <hy-picker
        v-model="value"
        has-input
        :columns="columns"
        :input="{
            placeholder: 'Please select',
            fontSize: 16,
            prefixIcon: 'calendar',
            border: false
        }"
    ></hy-picker>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const value = ref('');
    const columns = reactive([['Option 1', 'Option 2', 'Option 3']]);
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
        <hy-cell-item title="Default Selection" :value="value"></hy-cell-item>
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

### Disable Close on Overlay Click

```html
<template>
    <hy-picker
        :show="show"
        :columns="columns"
        :closeOnClickOverlay="false"
        title="Must click a button to close"
        @confirm="onConfirm"
    ></hy-picker>
    <hy-cell clickable @click="show = true">
        <hy-cell-item title="Disable Overlay Close" :value="value"></hy-cell-item>
    </hy-cell>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const value = ref('');
    const columns = reactive([['Option 1', 'Option 2', 'Option 3']]);

    const onConfirm = (e) => {
        value.value = e.value.join('');
        show.value = false;
    };
</script>
```

### Custom Slot Content

```html
<template>
    <hy-picker v-model="value" has-input :columns="columns" title="Custom Title" ref="pickerRef">
        <!-- Custom input content -->
        <template #default>
            <view class="custom-input">
                <text>Custom content: {{ value }}</text>
            </view>
        </template>

        <!-- Custom toolbar right side -->
        <template #toolbar-right>
            <hy-button text="Save" size="small" @click="handleSave"></hy-button>
        </template>

        <!-- Custom area below the toolbar -->
        <template #toolbar-bottom>
            <view class="toolbar-tip">
                <text>Please select your options</text>
            </view>
        </template>
    </hy-picker>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const pickerRef = ref(null);
    const value = ref('');
    const columns = reactive([['Option 1', 'Option 2', 'Option 3']]);

    const handleSave = () => {
        console.log('Save:', value.value);
        pickerRef.value.onConfirm();
    };
</script>
```

## API

### Picker Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | The value echoed to the input box (required when hasInput is true) | `string`\|`number`\|`array` | - |
| show | Whether to show the picker (no need to set when hasInput is true) | `boolean` | false |
| popupMode | Popup display mode[^1] | `string` | bottom |
| separator | Multi-column separator | `string` | / |
| showToolbar | Whether to show the top toolbar | `boolean` | true |
| title | Top title | `string` | - |
| columns | Sets the data for each column; supports a one-dimensional array (single column) or a two-dimensional array (multiple columns) | `array` | [] |
| loading | Whether to show the loading state | `boolean` | false |
| itemHeight | Height of a single option in each column (px) | `number` | 44 |
| cancelText | Cancel button text | `string` | Cancel |
| confirmText | Confirm button text | `string` | Confirm |
| cancelColor | Cancel button color | `string` | #909193 |
| confirmColor | Confirm button color | `string` | - |
| visibleItemCount | Number of visible options per column | `number` | 5 |
| labelKey | Key name for the display text in option objects | `string` | label |
| valueKey | Key name for the value in option objects | `string` | value |
| closeOnClickOverlay | Whether clicking the overlay is allowed to close the picker | `boolean` | false |
| defaultIndex | Default index for each column | `array` | [] |
| immediateChange | Whether to trigger the change event immediately when the finger is released | `boolean` | true |
| zIndex | Popup z-index | `number` | 10076 |
| hasInput | Whether to show the input box | `boolean` | false |
| input | Input box configuration properties; takes effect when hasInput is true; see [Input API](./input#api) | `HyInputProps` | {} |
| toolbarRightSlot | Whether to enable the toolbar right slot (must be used with slot="toolbar-right") | `boolean` | false |

### Events

| Event Name | Description | Callback Parameters |
| ------- | ------------------------------ | ----------------------------------------------- |
| close   | Triggered when the picker is closed | -                                               |
| confirm | Triggered when the confirm button is clicked; returns the currently selected values | `{ indexs, value, values }`                     |
| change  | Triggered when the selected value changes | `{ columnIndex, index, indexs, value, values }` |
| cancel  | Triggered when the cancel button is clicked | -                                               |

### change Event Parameters

| Parameter    | Description                              | Type     |
| ----------- | ---------------------------------------- | -------- |
| columnIndex | Index of the column that changed         | `number` |
| index       | Index of the selected option in the current column | `number` |
| indexs      | Array of indices for all columns         | `array`  |
| value       | Currently selected values (array)        | `array`  |
| values      | Data for all columns (two-dimensional array) | `array`  |

### confirm Event Parameters

| Parameter | Description                              | Type    |
| --------- | ---------------------------------------- | ------- |
| indexs    | Array of indices for all columns         | `array` |
| value     | Currently selected values (array)        | `array` |
| values    | Data for all columns (two-dimensional array) | `array` |

### Methods

Call the following methods via ref:

| Method          | Description                          | Parameters                                                      |
| --------------- | ------------------------------------ | --------------------------------------------------------------- |
| setColumnValues | Sets the option data of the specified column | `columnIndex: number` column index, `values: array` new data |
| onConfirm       | Manually triggers confirm selection  | -                                                               |
| close           | Closes the picker popup              | -                                                               |

### Slots

| Slot Name | Description | Callback Parameters |
| --- | --- | --- |
| default | Custom input box content (takes effect when hasInput is true) | - |
| toolbar-right | Toolbar right content; must also set `toolbarRightSlot="true"` for it to take effect (WeChat Mini Program limitation) | - |
| toolbar-bottom | Custom area below the toolbar | - |

## typings

::: details Type Definitions

```ts
interface PickerColumnVo {
    /** Value (required) */
    value: string | number;
    /** Display text */
    label?: string;
    /** Custom attributes */
    [key: string]: any;
}

interface SelectValueVo {
    /** Currently selected values (array) */
    value: string[];
    /** Index of the selected option in the current column */
    index?: number;
    /** Array of indices for all columns */
    indexs?: number[];
    /** Data for all columns (two-dimensional array) */
    values?: Array<any>;
    /** Index of the column that changed */
    columnIndex?: number;
}

interface IPickerExpose {
    /** Set the values of a column */
    setColumnValues: (columnIndex: number, values: Array<string | PickerColumnVo>) => void;
    /** Manually trigger confirm selection */
    onConfirm: () => void;
    /** Close the picker popup */
    close: () => void;
}
```

:::

### CSS Variables

| Variable Name | Description | Default |
| --- | --- | --- |
| `--hy-picker-item-disabled-opacity` | Opacity of disabled options | `0.35` |
| `--hy-picker-loading-z-index` | Loading layer z-index | `1000` |
| `--hy-picker-title-font-size` | Top title font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-picker-title-color` | Top title color | Follows `--hy-text-color--grey` |
| `--hy-picker-item-color` | Option text color | Follows `--hy-text-color` |


[^1]: bottom: pops up from the bottom; top: pops up from the top

<demo-model url="pages-design/picker/picker"></demo-model>