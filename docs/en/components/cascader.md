# Cascader <Badge type="tip">^0.7.0</Badge>

> The cascader is used for selecting data with multiple levels, supporting both static data and lazy loading modes.

## :pushpin:Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :japanese_castle:Basic Usage

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

### Lazy Loading

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

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Currently selected value | `CascaderValue` | `{ value: [], label: [] }` |
| show | Whether to show the cascader popup | `boolean` | false |
| options | Data source of the cascader | `CascaderOption[]` | - |
| showToolbar | Whether to show the top toolbar | `boolean` | true |
| title | Top title | `string` | - |
| placeholder | Placeholder text of the input field | `string` | Please select |
| closeOnClickOverlay | Whether to close when the overlay is clicked | `boolean` | false |
| zIndex | z-index value of the popup layer | `number` | 10076 |
| hasInput | Whether to show the input field | `boolean` | false |
| input | Input field configuration | `HyInputProps` | - |
| separator | Separator used for multiple selection | `string` | / |
| valueKey | Key that corresponds to the option value | `string` | value |
| labelKey | Key that corresponds to the option label | `string` | label |
| childrenKey | Key that corresponds to the option children | `string` | children |
| lazyLoad | Callback function for asynchronously loading child nodes; providing it enables lazy loading mode | `CascaderLazyLoad` | - |
| isLeafKey | Key in the option object that identifies a leaf node | `string` | isLeaf |

### Events

| Event Name        | Description                              | Callback Parameters |
| ----------------- | ---------------------------------------- | ------------------- |
| close             | Triggered when the popup is closed       | -                   |
| cancel            | Triggered when the selection is canceled | -                   |
| confirm           | Triggered when the selection is confirmed | `CascaderEmitValue` |
| change            | Triggered when the value changes         | `CascaderEmitValue` |
| update:show       | Triggered when the popup visibility changes | `boolean`           |
| update:modelValue | Triggered when the value changes         | `CascaderValue`     |

### Slots

| Slot Name | Description                                    | Accepted Value |
| --------- | ---------------------------------------------- | -------------- |
| default   | Default slot, for customizing input content    | -              |

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

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-cascader-close-size` | Close button size | `60rpx` |
| `--hy-cascader-loading-z-index` | Loading overlay z-index | `10` |
| `--hy-cascader-title-font-size` | Title font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-cascader-title-color` | Title color | Follows `--hy-text-color` |
| `--hy-cascader-item-font-size` | Option font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-cascader-item-color` | Option color | Follows `--hy-text-color` |
| `--hy-cascader-border` | Divider line below the title bar | Follows `--hy-border-line` |

<demo-model url="pages-design/cascader/cascader"></demo-model>