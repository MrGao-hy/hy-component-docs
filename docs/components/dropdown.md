# Dropdown 下拉菜单组件

> 下拉菜单组件，用于展示筛选条件或选择操作，支持多级菜单选择。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

:::warning
- 该组件必须结合 `hy-dropdown` 和 `hy-dropdown-item` 一起使用
- `hy-dropdown-item` 必须嵌套在 `hy-dropdown` 内部使用
- 通过 `v-model` 双向绑定选中项的 `value` 值
- `menus` 属性传入的数组项必须包含 `label` 和 `value` 字段
- 点击某个菜单项会自动关闭其他已展开的菜单
  :::

## :japanese_castle:基本使用示例

### 基础用法

```html
<template>
    <hy-dropdown>
        <hy-dropdown-item
            title="全部"
            :menus="options1"
            v-model="value1"
            @change="handleChange"
        ></hy-dropdown-item>
        <hy-dropdown-item
            title="国漫"
            :menus="options_2"
            v-model="value_2"
            @change="handleChange"
        ></hy-dropdown-item>
        <hy-dropdown-item
            title="国家"
            :menus="options_3"
            v-model="value_3"
            @change="handleChange"
        ></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref()
const value_2 = ref()
const value_3 = ref()

const options1 = ref([
    { label: '全部商品', value: 1 },
    { label: '折扣商品', value: 2 },
    { label: '团购商品', value: 3 }
])

const options_2 = ref([
    { label: '西行记', value: 1 },
    { label: '斗破苍穹', value: 2 },
    { label: '吞噬星空', value: 3 },
    { label: '斗罗大陆', value: 4 },
    { label: '偷心九月天', value: 5 }
])

const options_3 = ref([
    { label: '中国', value: 1 },
    { label: '日本', value: 2 },
    { label: '韩国', value: 3 },
    { label: '美国', value: 4 }
])

const handleChange = (item, index) => {
    console.log('选中:', item.label, '索引:', index)
}
</script>
```

### 自定义颜色

```html
<template>
    <hy-dropdown activeColor="#4F8EF7" inactiveColor="#999999">
        <hy-dropdown-item
            title="分类"
            :menus="options"
            v-model="value"
        ></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
const options = ref([
    { label: '选项1', value: 1 },
    { label: '选项2', value: 2 }
])
</script>
```

### 自定义菜单高度和字体大小

```html
<template>
    <hy-dropdown :height="50" titleSize="18">
        <hy-dropdown-item
            title="菜单"
            :menus="options"
            v-model="value"
        ></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
const options = ref([
    { label: '选项1', value: 1 },
    { label: '选项2', value: 2 }
])
</script>
```

### 禁用某一项

```html
<template>
    <hy-dropdown>
        <hy-dropdown-item
            title="可选菜单"
            :menus="options"
            v-model="value"
        ></hy-dropdown-item>
        <hy-dropdown-item
            title="禁用菜单"
            :menus="options"
            v-model="disabledValue"
            disabled
        ></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
const disabledValue = ref()
const options = ref([
    { label: '选项1', value: 1 },
    { label: '选项2', value: 2 }
])
</script>
```

### 显示下边框

```html
<template>
    <hy-dropdown borderBottom>
        <hy-dropdown-item
            title="菜单"
            :menus="options"
            v-model="value"
        ></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
const options = ref([
    { label: '选项1', value: 1 },
    { label: '选项2', value: 2 }
])
</script>
```

### 自定义图标

```html
<template>
    <hy-dropdown menuIcon="arrow-up" :menuIconSize="16">
        <hy-dropdown-item
            title="菜单"
            :menus="options"
            v-model="value"
        ></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
const options = ref([
    { label: '选项1', value: 1 },
    { label: '选项2', value: 2 }
])
</script>
```

## API

### Dropdown Props

| 参数           | 说明                                    | 类型                 | 默认值             |
|--------------|---------------------------------------|--------------------|-----------------|
| height       | 标题菜单的高度，单位px                          | `string`\|`number` | 40              |
| borderBottom | 标题菜单是否显示下边框                           | `boolean`          | false           |
| sticky       | 是否固定定位                                 | `boolean`          | true            |
| activeColor  | 标题和选项卡选中的颜色                           | `string`           | -               |
| inactiveColor| 标题和选项卡未选中的颜色                          | `string`           | #606266         |
| menuIcon     | 标题菜单右侧的图标名称                           | `string`           | ARROW_DOWN_FILL |
| menuIconSize | 标题菜单右侧图标的大小，单位px                      | `string`\|`number` | 14              |
| customStyle  | 自定义需要用到的外部样式                          | `CSSProperties`    | -               |

### DropdownItem Props

| 参数       | 说明           | 类型                 | 默认值   |
|----------|--------------|--------------------|-------|
| v-model  | 双向绑定选中项的value值 | `string`\|`number` | -     |
| title    | 菜单项标题        | `string`           | -     |
| menus    | 选项数据         | `array`            | []    |
| disabled | 是否禁用点击       | `boolean`          | false |

### Events

| 事件名    | 说明                      | 回调参数                              |
|--------|-------------------------|-----------------------------------|
| change | 点击某个选项时触发             | `item: DropdownMenuItem`, `index: number` |

## Slots

### Dropdown Slots

| 插槽名     | 说明           | 接收值 |
|---------|--------------|-----|
| default | 下拉菜单项内容     | -   |

### DropdownItem Slots

| 插槽名     | 说明           | 接收值 |
|---------|--------------|-----|
| default | 自定义菜单项内容   | -   |

## Typings

:::details 类型说明

```ts
export interface DropdownMenuItem {
    /** 展示标题 */
    label: string
    /** 值 */
    value: string | number
}
```

:::

<demo-model url="pages-design/dropdown/dropdown"></demo-model>
