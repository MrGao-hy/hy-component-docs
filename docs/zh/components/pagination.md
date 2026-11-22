# Pagination 分页组件

> 当数据量过多时，使用分页分解数据。

## :pushpin:平台差异说明

| APP(vue) | H5  | 微信小程序 | 支付宝小程序 |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:基本使用示例

```html
<template>
    <hy-pagination v-model="basicPage" :total="50" :page-size="10"></hy-pagination>
</template>
```

```ts
import { ref } from 'vue';

/** 基础用法：总条数 50、每页 10 条，共 5 页 */
const basicPage = ref<number>(5);
```

### 极简模式

- 通过设置`mode`为`simple`，仅展示当前页/总页数与上下页按钮，适合空间紧凑的场景；默认为`multi`完整页码模式

```html
<template>
    <hy-pagination v-model="simplePage" mode="simple" :total="120" :page-size="10"></hy-pagination>
</template>
```

### 显示省略号

- 通过设置`pageCount`，控制页码按钮数量（不含上一页、下一页与省略号），页数超出窗口时展示省略号

```html
<template>
    <hy-pagination
        v-model="ellipsisPage"
        :total="130"
        :page-size="10"
        :page-count="3"
    ></hy-pagination>
</template>
```

### 图标按钮

- 通过设置`show-icon`，上一页、下一页展示为Icon图标

```html
<template>
    <hy-pagination v-model="iconPage" show-icon :total="50" :page-size="10"></hy-pagination>
</template>
```

### 显示总条数

- 通过设置`show-message`，展示总条数

```html
<template>
    <hy-pagination v-model="messagePage" :total="999" show-message></hy-pagination>
</template>
```

### 一页展示数

- 通过设置`pageSize`，设置每页展示数量

```html
<template>
    <hy-pagination v-model="sizePage" :total="999" :page-size="20"></hy-pagination>
</template>
```

### 设置展示文字

- 通过设置`prevText`，设置上一页按钮文本
- 通过设置`nextText`，设置下一页按钮文本
- 通过设置`ellipsisText`，设置页码省略号文本

```html
<template>
    <hy-pagination
        v-model="textPage"
        :total="999"
        prevText="上"
        nextText="下"
        ellipsisText="···"
    ></hy-pagination>
</template>
```

### 自定义插槽

- 通过`page`插槽自定义页码内容，作用域提供`text`（页码文本）与`active`（是否当前页）
- 通过`prev-text`、`next-text`插槽自定义上一页、下一页内容

```vue
<template>
    <hy-pagination v-model="slotPage" :total="50" :page-size="10">
        <template #page="{ text, active }">
            <text
                class="pagination-slot__page"
                :class="{ 'pagination-slot__page--active': active }"
            >
                {{ text }}
            </text>
        </template>
        <template #prev-text>
            <text class="pagination-slot__arrow">←</text>
        </template>
        <template #next-text>
            <text class="pagination-slot__arrow">→</text>
        </template>
    </hy-pagination>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    /** 自定义插槽：页码、上一页、下一页均通过插槽渲染 */
    const slotPage = ref<number>(3);
</script>

<style scoped lang="scss">
    /* page 插槽示例：自定义页码字号与字重 */
    .pagination-slot__page {
        font-size: 30rpx;
        font-weight: 500;

        &--active {
            font-weight: 700;
        }
    }

    /* prev-text / next-text 插槽示例：用箭头替代默认文字 */
    .pagination-slot__arrow {
        font-size: 32rpx;
    }
</style>
```

### 直接指定总页数

- 不传`total`时，可通过`totalPage`直接指定总页数

```html
<template>
    <hy-pagination v-model="countPage" :total-page="8"></hy-pagination>
</template>
```

### 自定义样式

- 通过[CSS 变量](#css-变量)在祖先节点覆盖主题色、圆角与单元格背景

```vue
<template>
    <view class="pagination-custom">
        <hy-pagination v-model="customPage" :total="999"></hy-pagination>
    </view>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const customPage = ref<number>(1);
</script>

<style lang="scss">
    .pagination-custom {
        /* 覆盖主题色、单元格圆角与轨道背景 */
        --hy-pagination-primary: #1bbfe8;
        --hy-pagination-radius: 44rpx;
        --hy-pagination-background: transparent;
    }
</style>
```

## API

### Pagination Props

| 参数          | 说明                                         | 类型                  | 默认值  |
| ------------- | -------------------------------------------- | --------------------- | ------- |
| v-model       | 当前页                                       | `number`              | 1       |
| mode          | 分页模式                                     | `'simple' \| 'multi'` | `multi` |
| totalPage     | 总页数，如果有total，则优先使用total计算页数 | `number`              | 1       |
| pageCount     | 页码按钮数量，不含上一页、下一页与省略号     | `number`              | 5       |
| showIcon      | 上一页、下一页是否使用图标                   | `boolean`             | false   |
| showMessage   | 是否展示总条数                               | `boolean`             | false   |
| total         | 总条数                                       | `number`              | 0       |
| pageSize      | 每页条数                                     | `number`              | 10      |
| prevText      | 上一页文本                                   | `string`              | 上一页  |
| nextText      | 下一页文本                                   | `string`              | 下一页  |
| ellipsisText  | 省略号文本                                   | `string`              | `...`   |
| hideIfOnePage | 总页数只有一页时是否隐藏                     | `boolean`             | true    |
| customStyle   | 定义需要用到的外部样式                       | `CSSProperties`       | -       |
| customClass   | 自定义外部类名                               | `string`              | -       |

### Events

| 事件名 | 说明       | 回调参数             |
| ------ | ---------- | -------------------- |
| change | 值修改事件 | value: value为当前数 |

### Slots

| 插槽名    | 说明                 | 接收值                                        |
| --------- | -------------------- | --------------------------------------------- |
| page      | 自定义页码内容       | `{ text: string \| number, active: boolean }` |
| prev-text | 自定义上一页按钮内容 | -                                             |
| next-text | 自定义下一页按钮内容 | -                                             |

### CSS 变量

#### 尺寸

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--hy-pagination-item-height` | 单元格高度，满足移动端最小触控区域（44px） | `88rpx` |
| `--hy-pagination-item-width` | 页码单元格最小宽度 | `72rpx` |
| `--hy-pagination-nav-width` | 上一页、下一页单元格最小宽度 | `144rpx` |
| `--hy-pagination-gap` | 单元格间距，保证相邻触控目标不粘连 | `16rpx` |
| `--hy-pagination-radius` | 单元格圆角 | `12rpx` |
| `--hy-pagination-font-size` | 字号 | 跟随 `--hy-font-size-base`（28rpx） |
| `--hy-pagination-content-padding` | 内容区内边距 | 跟随 `--hy-border-margin-padding-base` |

#### 颜色

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--hy-pagination-primary` | 主题色 | 跟随 `--hy-primary` |
| `--hy-pagination-background` | 单元格背景，浅色轨道底，保证点击区域可辨识 | 跟随 `--hy-background--track` |
| `--hy-pagination-text-color` | 页码文字颜色，浅色/暗黑主题下都有足够对比度 | 跟随 `--hy-text-color--grey` |
| `--hy-pagination-nav-color` | 上一页、下一页文字颜色 | 跟随 `--hy-text-color` |
| `--hy-pagination-disabled-color` | 禁用文字颜色 | 跟随 `--hy-text-color--disabled` |
| `--hy-pagination-disabled-background` | 禁用背景色 | 跟随 `--hy-background--disabled` |
| `--hy-pagination-ellipsis-color` | 省略号颜色 | 跟随 `--hy-text-color--3` |
| `--hy-pagination-message-color` | 信息文字颜色 | 跟随 `--hy-text-color--3` |

<demo-model url="pages-design/pagination/pagination"></demo-model>
