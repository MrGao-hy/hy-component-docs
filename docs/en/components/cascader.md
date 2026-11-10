# Cascader <Badge type="tip">^0.7.0</Badge>

> The cascader is used for selecting multi-level hierarchical data, supporting both static data and async loading modes.

## :pushpin:Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle:Basic Usage

```html
<template>
    <hy-cell>
        <hy-cell-item
            title="Select Region"
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
            label: 'Gansu Province',
            children: [
                {
                    value: 'jinchang',
                    label: 'Jinchang City',
                    children: [
                        { value: 'jinchuan', label: 'Jinchuan District' },
                        { value: 'yongchang', label: 'Yongchang County' },
                    ],
                },
            ],
        },
    ]);

    const onConfirm = (params) => {
        console.log('Selection confirmed:', params);
        showCascader.value = false;
    };
</script>
```

### With Input

```html
<hy-cascader
    v-model="selectedValue"
    :options="options"
    has-input
    title="Please select an address"
    placeholder="Please select a region"
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
        name: 'Beijing',
        areas: [{ code: '100101', name: 'Chaoyang District' }],
    },
]);
```

### Async Loading

```html
<hy-cascader
    v-model="selectedValue"
    v-model:show="showCascader"
    :lazy-load="lazyLoad"
    title="Async Loading Example"
></hy-cascader>
```

```ts
const lazyLoad = (option: any, tabIndex: number, resolve: (children: any[]) => void) => {
    // Simulate async loading
    setTimeout(() => {
        const children = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2', isLeaf: true },
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
| options | Cascader data source | `CascaderOption[]` | - |
| showToolbar | Whether to show the top toolbar | `boolean` | true |
| title | Top title | `string` | - |
| placeholder | Input placeholder text | `string` | Please select |
| closeOnClickOverlay | Whether to close when clicking the overlay | `boolean` | false |
| zIndex | z-index value of the popup layer | `number` | 10076 |
| hasInput | Whether to show the input box | `boolean` | false |
| input | Input configuration | `HyInputProps` | - |
| separator | Separator for multiple selections | `string` | / |
| valueKey | Key corresponding to the option value | `string` | value |
| labelKey | Key corresponding to the option label | `string` | label |
| childrenKey | Key corresponding to the option children | `string` | children |
| lazyLoad | Callback function for async loading child nodes; providing it enables async loading mode | `CascaderLazyLoad` | - |
| isLeafKey | Key in the option object that identifies a leaf node | `string` | isLeaf |

### Events

| Event Name        | Description                | Callback Parameters |
| ----------------- | -------------------------- | ------------------- |
| close             | Triggered when popup closes | -                   |
| cancel            | Triggered when selection is cancelled | -                   |
| confirm           | Triggered when selection is confirmed | `CascaderEmitValue` |
| change            | Triggered when the value changes | `CascaderEmitValue` |
| update:show       | Triggered when the popup show state changes | `boolean`           |
| update:modelValue | Triggered when the value changes | `CascaderValue`     |

### Slots

| Name    | Description                                | Props |
| ------- | ------------------------------------------ | ----- |
| default | Default slot for custom input box content  | -     |

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

| Variable                        | Description                 | Default                              |
| ------------------------------- | --------------------------- | ------------------------------------ |
| `--hy-cascader-close-size`      | Close button size           | `60rpx`                              |
| `--hy-cascader-loading-z-index` | Loading overlay z-index     | `10`                                 |
| `--hy-cascader-title-font-size` | Title font size             | Follows `--hy-font-size-base` (28rpx) |
| `--hy-cascader-title-color`     | Title color                 | Follows `--hy-text-color`            |
| `--hy-cascader-item-font-size`  | Option font size            | Follows `--hy-font-size-base` (28rpx) |
| `--hy-cascader-item-color`      | Option color                | Follows `--hy-text-color`            |
| `--hy-cascader-border`          | Title bar bottom divider    | Follows `--hy-border-line`           |

<demo-model url="pages-design/cascader/cascader"></demo-model>