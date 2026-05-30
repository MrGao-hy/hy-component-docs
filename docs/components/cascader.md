# Cascader 级联选择器
> 级联选择器用于多层级数据的选择，支持静态数据和异步加载两种模式。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

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
import { ref } from 'vue'

const showCascader = ref(false)
const selectedValue = ref({ value: [], label: [] })

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
                    { value: 'yongchang', label: '永昌县' }
                ]
            }
        ]
    }
])

const onConfirm = (params) => {
    console.log('确认选择:', params)
    showCascader.value = false
}
</script>
```

## 带输入框

```html
<hy-cascader
    v-model="selectedValue"
    :options="options"
    has-input
    title="请选择地址"
    placeholder="请选择地区"
></hy-cascader>
```

## 自定义键名

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
        areas: [
            { code: '100101', name: '朝阳区' }
        ]
    }
])
```

## 异步加载

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
            { value: '2', label: '选项2', isLeaf: true }
        ]
        resolve(children)
    }, 800)
}
```

## API

| 参数                  | 说明                        | 类型                 | 默认值                        |
|---------------------|---------------------------|--------------------|----------------------------|
| modelValue          | 当前选中的值                    | `CascaderValue`    | `{ value: [], label: [] }` |
| show                | 是否显示级联选择器弹窗               | `boolean`          | false                      |
| options             | 级联选择器数据源                  | `CascaderOption[]` | -                          |
| showToolbar         | 是否显示顶部工具栏                 | `boolean`          | true                       |
| title               | 顶部标题                      | `string`           | -                          |
| placeholder         | 输入框占位提示文字                 | `string`           | 请选择                        |
| closeOnClickOverlay | 点击遮罩层是否关闭                 | `boolean`          | false                      |
| zIndex              | 弹出层的 z-index 值            | `number`           | 10076                      |
| hasInput            | 是否显示输入框                   | `boolean`          | false                      |
| input               | 输入框配置                     | `HyInputProps`     | -                          |
| separator           | 多选时的分隔符                   | `string`           | /                          |
| valueKey            | 选项值对应的 key                | `string`           | value                      |
| labelKey            | 选项标签对应的 key               | `string`           | label                      |
| childrenKey         | 选项子级对应的 key               | `string`           | children                   |
| lazyLoad            | 异步加载子节点的回调函数，提供后将启用异步加载模式 | `CascaderLazyLoad` | -                          |
| isLeafKey           | 选项对象中，标识叶子节点的 key         | `string`           | isLeaf                     |

## Events

| 事件名           | 说明               | 回调参数                 |
|----------------|------------------|----------------------|
| close          | 弹窗关闭时触发         | -                    |
| cancel         | 取消选择时触发         | -                    |
| confirm        | 确认选择时触发         | `CascaderEmitValue`  |
| change         | 值改变时触发          | `CascaderEmitValue`  |
| update:show    | 弹窗显示状态改变时触发     | `boolean`            |
| update:modelValue | 值改变时触发        | `CascaderValue`      |

## Slots

| 插槽名     | 说明   | 接收值                          |
|---------|------|------------------------------|
| default | 默认插槽，自定义输入框内容 | -                            |

## typings
:::details 类型说明
```ts
export interface CascaderOption {
    value: string | number
    label: string
    children?: CascaderOption[]
    disabled?: boolean
    isLeaf?: boolean
    [key: string]: any
}

export interface CascaderValue {
    value: (string | number)[]
    label: string[]
}

export interface CascaderEmitValue {
    value: (string | number)[]
    label: string[]
    selectedOptions: CascaderOption[]
}

export type CascaderLazyLoad = (
    option: CascaderOption | null,
    tabIndex: number,
    resolve: (children: CascaderOption[]) => void
) => void
```
:::

<demo-model url="pages-design/cascader/cascader"></demo-model>