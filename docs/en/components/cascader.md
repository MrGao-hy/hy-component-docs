# Cascader <Badge type="tip">^0.7.0</Badge>

> The cascader selector is used for selecting data with multiple levels, supporting both static data and async loading modes.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage

```html
<template>
    <hy-cell>
        <hy-cell-item
            title="选择地区"
            :value="selectedValue.label.join(' / ')"
            @click="showCascader = true"
        ></hy-cell-item>
    </hy-cell>
    <hy-cascader
        v-model="selectedValue"
        v-model:show="showCascader"
        :options="options"
        @confirm="onConfirm"
    ></hy-cascader>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const showCascader = ref(false);
    const selectedValue = ref({ value: [], label: [] });

    const options = ref([
        {
            value: 'gansu',
            label: '甘肃省',
            children: [
                {
                    value: 'jinchang',
                    label: '金昌市',
                    children: [
                        { value: 'jinchuan', label: '金川区' },
                        { value: 'yongchang', label: '永昌县' },
                    ],
                },
            ],
        },
    ]);

    const onConfirm = (params) => {
        console.log('确认选择:', params);
        showCascader.value = false;
    };
</script>
```

### With Input Field

```html
<hy-cascader
    v-model="selectedValue"
    :options="options"
    has-input
    title="请选择地址"
    placeholder="请选择地区"
></hy-cascader>
```

### Custom Key Names

```html
<hy-cascader
    v-model="selectedValue"
    :options="options"
    labelKey="name"
    valueKey="code"
    childrenKey="areas"
></hy-cascader>
```

```ts
const options = ref([
    {
        code: '1001',
        name: '北京市',
        areas: [{ code: '100101', name: '朝阳区' }],
    },
]);
```

### Async Loading

```html
<hy-cascader
    v-model="selectedValue"
    v-model:show="showCascader"
    :lazy-load="lazyLoad"
    title="异步加载示例"
></hy-cascader>
```

```ts
const lazyLoad = (option: any, tabIndex: number, resolve: (children: any[]) => void) => {
    // 模拟异步加载
    setTimeout(() => {
        const children = [
            { value: '1', label: '选项1' },
            { value: '2', label: '选项2', isLeaf: true },
        ];
        resolve(children);
    }, 800);
};
```

## API

### Cascader Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Currently selected value | `CascaderValue` | `{ value: [], label: [] }` |
| show | Whether to show the cascader popup | `boolean` | false |
| options | Data source of the cascader | `CascaderOption[]` | - |
| showToolbar | Whether to show the top toolbar | `boolean` | true |
| title | Top title | `string` | - |
| placeholder | Placeholder text of the input field | `string` | 请选择 |
| closeOnClickOverlay | Whether to close when clicking the overlay | `boolean` | false |
| zIndex | z-index value of the popup layer | `number` | 10076 |
| hasInput | Whether to show the input field | `boolean` | false |
| input | Input field configuration | `HyInputProps` | - |
| separator | Separator used for multiple selection | `string` | / |
| valueKey | Key corresponding to the option value | `string` | value |
| labelKey | Key corresponding to the option label | `string` | label |
| childrenKey | Key corresponding to the option children | `string` | children |
| lazyLoad | Callback function for async loading child nodes; providing it enables async loading mode | `CascaderLazyLoad` | - |
| isLeafKey | Key in the option object that identifies a leaf node | `string` | isLeaf |
| customStyle | Custom external styles | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name        | Description              | Callback Parameters |
| ----------------- | ------------------------ | ------------------- |
| close             | Triggered when the popup closes | -            |
| cancel            | Triggered when the selection is cancelled | -      |
| confirm           | Triggered when the selection is confirmed | `CascaderEmitValue` |
| update:show       | Triggered when the popup visibility changes | `boolean` |
| update:modelValue | Triggered when the value changes | `CascaderValue` |

### Slots

| Slot Name | Description                              | Props |
| --------- | ---------------------------------------- | ----- |
| default   | Default slot, custom input field content | -     |

### Typings

::: details Type Definitions

```ts
export interface CascaderOption {
    value: string | number;
    label: string;
    children?: CascaderOption[];
    disabled?: boolean;
    isLeaf?: boolean;
    [key: string]: any;
}

export interface CascaderValue {
    value: (string | number)[];
    label: string[];
}

export interface CascaderEmitValue {
    value: (string | number)[];
    label: string[];
    selectedOptions: CascaderOption[];
}

export type CascaderLazyLoad = (
    option: CascaderOption | null,
    tabIndex: number,
    resolve: (children: CascaderOption[]) => void
) => void;
```

:::

### CSS Variables

| Variable Name | Description | Default |
| --- | --- | --- |
| `--hy-cascader-close-size` | Close button size | `60rpx` |
| `--hy-cascader-loading-z-index` | Loading overlay z-index | `10` |
| `--hy-cascader-title-font-size` | Title font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-cascader-title-color` | Title color | Follows `--hy-text-color` |
| `--hy-cascader-item-font-size` | Option font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-cascader-item-color` | Option color | Follows `--hy-text-color` |
| `--hy-cascader-border` | Divider line at the bottom of the title bar | Follows `--hy-border-line` |
| `--hy-cascader-border-width-lg` | Large border width | Follows `--hy-border-width-lg` |
| `--hy-cascader-font-weight-bold` | Bold font weight | Follows `--hy-font-weight-bold` |
| `--hy-cascader-header-padding` | Header padding | Follows `--hy-border-margin-padding-base` |
| `--hy-cascader-item-active-background` | Background color of the selected option | Follows `--hy-background--hover` |
| `--hy-cascader-item-padding-x` | Horizontal padding of options | Follows `--hy-border-margin-padding-base` |
| `--hy-cascader-item-padding-y` | Vertical padding of options | Follows `--hy-border-margin-padding-lg` |
| `--hy-cascader-primary` | Primary color | Follows `--hy-primary` |

<demo-model url="pages-design/cascader/cascader"></demo-model>