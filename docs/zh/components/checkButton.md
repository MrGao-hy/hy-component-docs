# CheckButton 复选框按钮组件

> 该组件内部实现以tag二次封装按钮复选框和单选框

## :pushpin:平台差异说明

| APP(vue) | H5  | 微信小程序 | 支付宝小程序 |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:基本使用示例

```html
<template>
    <!-- 全局使用 -->
    <hy-check-button v-model="value" :columns="columns"></hy-check-button>
</template>

<script lang="ts" setup>
    import { reactive, ref } from 'vue';

    const value = ref('');
    const columns = reactive([
        { label: '老师', value: 0 },
        { label: '护士', value: 1 },
        { label: '空姐', value: 2 },
        { label: '作家', value: 3 },
        { label: '网红', value: 4 },
        { label: '科学家', value: 5 },
    ]);
</script>
```

## 主题色

- 通过`type`设置配置主题色
    - `primary`：信息按钮（默认）
    - `success`：主要按钮
    - `info`：默认按钮
    - `warning`：警告按钮
    - `error`：危险按钮

::: code-group

```html [vue]
<hy-check-button v-model="value" :columns="columns" :type="type"></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from 'vue';

const value = ref('');
const type = ref<HyApp.ThemeType>('primary');

const columns = reactive([
    { label: '老师', value: 0 },
    { label: '护士', value: 1 },
    { label: '空姐', value: 2 },
    { label: '作家', value: 3 },
    { label: '网红', value: 4 },
    { label: '科学家', value: 5 },
]);
```

:::

## 配置按钮大小

- 通过`size`设置配置按钮大小
    - `large` 大的
    - `medium` 中等的
    - `small` 小的

::: code-group

```html [vue]
<hy-check-button v-model="value" :columns="columns" :type="type"></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from 'vue';

const value = ref('');
const type = ref<HyApp.SizeType>('medium');

const columns = reactive([
    { label: '老师', value: 0 },
    { label: '护士', value: 1 },
    { label: '空姐', value: 2 },
    { label: '作家', value: 3 },
    { label: '网红', value: 4 },
    { label: '科学家', value: 5 },
]);
```

:::

## 配置形状

- 通过`shape`值设置按钮形状;
    - `square`为方形（默认）
    - `circle`为圆角

::: code-group

```html [vue]
<hy-check-button v-model="value" :columns="columns" :shape="shape"></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from 'vue';

const value = ref('');
const type = ref<HyApp.ShapeType>('square');

const columns = reactive([
    { label: '老师', value: 0 },
    { label: '护士', value: 1 },
    { label: '空姐', value: 2 },
    { label: '作家', value: 3 },
    { label: '网红', value: 4 },
    { label: '科学家', value: 5 },
]);
```

:::

## 单选按钮

- 通过`selectType`设置为`radio`

::: code-group

```html [vue]
<hy-check-button v-model="value" :columns="columns" selectType="radio"></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from 'vue';

const value = ref('');

const columns = reactive([
    { label: '老师', value: 0 },
    { label: '护士', value: 1 },
    { label: '空姐', value: 2 },
    { label: '作家', value: 3 },
    { label: '网红', value: 4 },
    { label: '科学家', value: 5 },
]);
```

:::

## 多选按钮

- 通过`selectType`设置为`checkbox`

::: code-group

```html [vue]
<hy-check-button v-model="value" :columns="columns" selectType="checkbox"></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from 'vue';

const value = ref([0]);

const columns = reactive([
    { label: '老师', value: 0 },
    { label: '护士', value: 1 },
    { label: '空姐', value: 2 },
    { label: '作家', value: 3 },
    { label: '网红', value: 4 },
    { label: '科学家', value: 5 },
]);
```

:::

## API

### CheckButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 选中得值[^1] | `string`\|`number`\| `(string\|number)[]` | - |
| columns | 列表数据 | `array` | - |
| fieldNames | 自定义columns对应得键 | `object` | \{label: "label",value: "value",checked: "checked"\} |
| selectType | 单选还是多选[^2] | `checkbox`\|`radio` | checkbox |
| disabled | 禁用 | `boolean` | false |
| col | 设置子元素列排序，参考css属性值grid-template-columns | `string` | repeat(3, 1fr) |
| gap | 设置每行间距，数值默认单位px | `string`\| `number` | 10px |
| type | 标签类型[^3] | `error`\|`warning`\|`success` \|`primary`\|`info` | primary |
| size | 标签的大小[^4] | `small`\|`medium`\|`large` | medium |
| shape | tag的形状[^5] | `circle`\|`square` | square |
| customStyle | 定义需要用到的外部样式 | `CSSProperties` | - |
| customClass | 自定义外部类名 | `string` | - |

#### columns

| 参数     | 说明         | 类型      | 默认值 |
| -------- | ------------ | --------- | ------ |
| label    | 显示文本内容 | `string`  | -      |
| value    | 值           | `string`  | -      |
| checked  | 是否选中     | `boolean` | -      |
| disabled | 是否禁用     | `boolean` | -      |

#### fieldNames

| 参数    | 说明                  | 类型     | 默认值  |
| ------- | --------------------- | -------- | ------- |
| label   | 自定义columns的文本键 | `string` | label   |
| value   | 自定义columns的值键   | `string` | value   |
| checked | 自定义columns的选中键 | `string` | checked |

### Events

| 事件名 | 说明     | 回调参数 |
| ------ | -------- | -------- |
| change | 选择触发 | -        |

### Slots

| 插槽名 | 说明 | 接收值 |
| ------ | ---- | ------ |
| name   | -    | -      |

### CSS 变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| `--hy-check-button-border-width` | 边框宽度 | `2rpx` |
| `--hy-check-button-hover-opacity` | 按压透明度 | `0.8` |
| `--hy-check-button-padding-small` | small 内边距 | `10rpx 16rpx` |
| `--hy-check-button-padding-medium` | medium 内边距 | `16rpx 20rpx` |
| `--hy-check-button-padding-large` | large 内边距 | `20rpx 24rpx` |
| `--hy-check-button-font-size-small` | small 字号（行高同步跟随） | 跟随 `--hy-font-size-sm`（24rpx） |
| `--hy-check-button-font-size-medium` | medium 字号（行高同步跟随） | 跟随 `--hy-font-size-base`（28rpx） |
| `--hy-check-button-font-size-large` | large 字号（行高同步跟随） | 跟随 `--hy-font-size-md`（32rpx） |
| `--hy-check-button-radius-circle` | 圆形圆角 | 跟随 `--hy-radius-semicircle`（100px） |
| `--hy-check-button-radius-square` | 方形圆角 | 跟随 `--hy-radius-sm`（8rpx） |
| `--hy-check-button-disabled-color` | 禁用文字颜色 | 跟随 `--hy-text-color--disabled` |
| `--hy-check-button-disabled-border-color` | 禁用态边框颜色 | 跟随 `--hy-background--disabled` |

[^1]: `selectType`设置为`radio`时候v-model必须传是字符串/数字，设置为`checkbox`时候`v-model`必须传数组

[^2]: `checkbox`：多选；`radio`：单选

[^3]: `error`：#fa3534；`warning`：#ff9900；`success`：#19be6b；`primary`：#2979ff； `info`：#909399；

[^4]: `normal`：默认尺寸；`large`：大尺寸； `small`：小尺寸；

[^5]: `circle`：两边半圆形； `square`：方形，带圆角

<demo-model url="pages-design/checkButton/checkButton"></demo-model>
