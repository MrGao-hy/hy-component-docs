# Subsection 分段器组件

> 分段器组件，用于在多个选项中进行单选切换的场景。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

:::warning 注意事项
- `list` 属性支持三种形式：字符串数组、数字数组、对象数组
- 对象数组项默认使用 `name` 和 `value` 字段，可通过 `customKeys` 自定义
- `mode` 为 `button` 时背景颜色 `bgColor` 有效，`mode` 为 `subsection` 时无效
- `current` 属性设置默认选中的索引（从 0 开始）
- 使用 `v-model` 绑定时，值为选中项的 `value` 值（字符串或数字）
:::

## :japanese_castle:基本使用示例

### 字符串数组形式

```html
<template>
    <hy-subsection :list="list" v-model="value"></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('未付款')
const list = ['未付款', '待评价', '已付款']
</script>
```

### 数字数组形式

```html
<template>
    <hy-subsection :list="list" v-model="value"></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
const list = [0, 1, 2]
</script>
```

### 对象数组形式

```html
<template>
    <hy-subsection :list="list" v-model="value"></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('all')
const list = [
    { name: '全部', value: 'all' },
    { name: '未核销', value: 'unused' },
    { name: '已核销', value: 'used' }
]
</script>
```

### 默认选中项

```html
<template>
    <hy-subsection :list="list" v-model="value" :current="1"></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('待评价')
const list = ['未付款', '待评价', '已付款']
</script>
```

## 模式选择

### 按钮模式（默认）

```html
<template>
    <hy-subsection :list="list" v-model="value" mode="button"></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('选项一')
const list = ['选项一', '选项二', '选项三']
</script>
```

### 分段器模式

```html
<template>
    <hy-subsection :list="list" v-model="value" mode="subsection"></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('选项一')
const list = ['选项一', '选项二', '选项三']
</script>
```

## 颜色配置

### 自定义激活颜色

```html
<template>
    <hy-subsection 
        :list="list" 
        v-model="value" 
        activeColor="#f56c6c"
        mode="subsection"
    ></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('未付款')
const list = ['未付款', '待评价', '已付款']
</script>
```

### 自定义激活和未激活颜色

```html
<template>
    <hy-subsection
        :list="list"
        v-model="value"
        activeColor="#4F8EF7"
        inactiveColor="#999999"
        mode="subsection"
    ></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('选项一')
const list = ['选项一', '选项二', '选项三']
</script>
```

### 自定义背景颜色（按钮模式）

```html
<template>
    <hy-subsection
        :list="list"
        v-model="value"
        bgColor="#F5F5F5"
        mode="button"
    ></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('未付款')
const list = ['未付款', '待评价', '已付款']
</script>
```

## 字体配置

### 自定义字体大小

```html
<template>
    <hy-subsection
        :list="list"
        v-model="value"
        :fontSize="14"
        mode="subsection"
    ></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('选项一')
const list = ['选项一', '选项二', '选项三']
</script>
```

### 激活字体不加粗

```html
<template>
    <hy-subsection
        :list="list"
        v-model="value"
        :bold="false"
        mode="subsection"
    ></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('选项一')
const list = ['选项一', '选项二', '选项三']
</script>
```

## 自定义键名

### 使用 customKeys 自定义字段

```html
<template>
    <hy-subsection 
        :list="list" 
        v-model="value" 
        :customKeys="{ name: 'title', value: 'id' }"
    ></hy-subsection>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1)
const list = [
    { title: '全部', id: 1 },
    { title: '待付款', id: 2 },
    { title: '已完成', id: 3 }
]
</script>
```

## 事件监听

### 监听选项变化

```html
<template>
    <view>
        <hy-subsection 
            :list="list" 
            v-model="value" 
            @change="handleChange"
        ></hy-subsection>
        <view class="current-value">当前选中：{{ value }}</view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('未付款')
const list = ['未付款', '待评价', '已付款']

const handleChange = (index: number) => {
    console.log('选中索引:', index)
    console.log('选中值:', value.value)
}
</script>

<style lang="scss" scoped>
.current-value {
    margin-top: 20rpx;
    padding: 20rpx;
    background: #f5f5f5;
    border-radius: 8rpx;
}
</style>
```

### 配合内容切换

```html
<template>
    <view>
        <hy-subsection 
            :list="list" 
            v-model="value"
            mode="subsection"
        ></hy-subsection>
        <view class="content-box">
            <view v-if="value === 'all'">显示全部内容</view>
            <view v-else-if="value === 'unused'">显示未核销内容</view>
            <view v-else>显示已核销内容</view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('all')
const list = [
    { name: '全部', value: 'all' },
    { name: '未核销', value: 'unused' },
    { name: '已核销', value: 'used' }
]
</script>

<style lang="scss" scoped>
.content-box {
    padding: 30rpx;
    background: #fff;
}
</style>
```

## API

### Subsection Props

| 参数                   | 说明                         | 类型                   | 默认值                              |
|----------------------|----------------------------|----------------------|----------------------------------|
| modelValue / v-model | 选中项的值                      | `string` \| `number` | -                                |
| current              | 默认选中的索引（从 0 开始）            | `number`             | 0                                |
| list                 | 选项数组                       | `SubSectionVo[]`     | []                               |
| customKeys           | list 的键值映射                 | `object`             | { name: 'name', value: 'value' } |
| activeColor          | 激活时的颜色                     | `string`             | -                                |
| inactiveColor        | 未激活时的颜色                    | `string`             | -                                |
| mode                 | 模式，`button` 或 `subsection` | `string`             | button                           |
| fontSize             | 字体大小，单位 px                 | `number`             | 12                               |
| bold                 | 激活选项的字体是否加粗                | `boolean`            | true                             |
| bgColor              | 组件背景颜色（button 模式有效）        | `string`             | -                                |
| customStyle          | 定义需要用到的外部样式                | `CSSProperties`      | -                                |
| customClass          | 自定义外部类名                    | `string`             | -                                |

### Events

| 事件名               | 说明        | 回调参数                      |
|-------------------|-----------|---------------------------|
| change            | 选项发生改变时触发 | `index: number`           |
| update:modelValue | 选中值改变时触发  | `value: string \| number` |

### Slots

| 插槽名   | 说明      | 接收值                               |
|-------|---------|-----------------------------------|
| default | 默认插槽   | -                                 |

### Typings

:::details 类型说明

```ts
export interface SubSectionItemVo extends AnyObject {
    /** 显示文本 */
    name: string
    /** 对应值 */
    value: string | number
    /** 扩展字段 */
    [key: string]: any
}

export type SubSectionVo = string | number | SubSectionItemVo
```

:::

<demo-model url="pages-design/subsection/subsection"></demo-model>
