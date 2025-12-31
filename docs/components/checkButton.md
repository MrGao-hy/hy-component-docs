# CheckButton 复选框按钮组件
> 该组件内部实现以tag二次封装按钮复选框和单选框

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [tag组件](https://uiadmin.net/uview-plus/components/tag.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-check-button v-model="value" :columns="columns"></hy-check-button>
<!-- 单个组件引入 -->
<HyCheckButton v-model="value" :columns="columns"></HyCheckButton>
```
```ts
import { reactive, ref } from "vue";
import { HyCheckButton } from "hy-app";

const value = ref("");
const columns = reactive([
    { label: "老师", value: 0 },
    { label: "护士", value: 1 },
    { label: "空姐", value: 2 },
    { label: "作家", value: 3 },
    { label: "网红", value: 4 },
    { label: "科学家", value: 5 },
]);
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
<hy-check-button
    v-model="value"
    :columns="columns"
    :type="type"
></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from "vue";

const value = ref("");
const type = ref<HyApp.ThemeType>("primary");

const columns = reactive([
    { label: "老师", value: 0 },
    { label: "护士", value: 1 },
    { label: "空姐", value: 2 },
    { label: "作家", value: 3 },
    { label: "网红", value: 4 },
    { label: "科学家", value: 5 },
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
<hy-check-button
    v-model="value"
    :columns="columns"
    :type="type"
></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from "vue";

const value = ref("");
const type = ref<HyApp.SizeType>("medium");

const columns = reactive([
    { label: "老师", value: 0 },
    { label: "护士", value: 1 },
    { label: "空姐", value: 2 },
    { label: "作家", value: 3 },
    { label: "网红", value: 4 },
    { label: "科学家", value: 5 },
]);
```
:::

## 配置形状
- 通过`shape`值设置按钮形状;
  - `square`为方形（默认）
  - `circle`为圆角
::: code-group
```html [vue]
<hy-check-button
    v-model="value"
    :columns="columns"
    :shape="shape"
></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from "vue";

const value = ref("");
const type = ref<HyApp.ShapeType>("square");

const columns = reactive([
    { label: "老师", value: 0 },
    { label: "护士", value: 1 },
    { label: "空姐", value: 2 },
    { label: "作家", value: 3 },
    { label: "网红", value: 4 },
    { label: "科学家", value: 5 },
]);
```
:::

## 单选按钮
- 通过`selectType`设置为`radio`
::: code-group
```html [vue]
<hy-check-button
    v-model="value"
    :columns="columns"
    selectType="radio"
></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from "vue";

const value = ref("");

const columns = reactive([
    { label: "老师", value: 0 },
    { label: "护士", value: 1 },
    { label: "空姐", value: 2 },
    { label: "作家", value: 3 },
    { label: "网红", value: 4 },
    { label: "科学家", value: 5 },
]);
```
:::

## 多选按钮
- 通过`selectType`设置为`checkbox`
::: code-group
```html [vue]
<hy-check-button
    v-model="value"
    :columns="columns"
    selectType="checkbox"
></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from "vue";

const value = ref([0]);

const columns = reactive([
    { label: "老师", value: 0 },
    { label: "护士", value: 1 },
    { label: "空姐", value: 2 },
    { label: "作家", value: 3 },
    { label: "网红", value: 4 },
    { label: "科学家", value: 5 },
]);
```
:::

## API

| 参数         | 说明             | 类型                                                | 默认值                                                  |
|------------|----------------|---------------------------------------------------|------------------------------------------------------|
| v-model    | 选中得值[^1]       | `string`\|`number`\| `(string\|number)[]`         | -                                                    |
| columns    | 列表数据           | `array`                                           | -                                                    |
| fieldNames | 自定义columns对应得键 | `object`                                          | \{label: "label",value: "value",checked: "checked"\} |
| selectType | 单选还是多选[^2]     | `checkbox`\|`radio`                               | checkbox                                             |
| disabled   | 禁用             | `boolean`                                         | false                                                |
| col        | 每行几列，每列等宽      | `string`                                          | repeat(3, 1fr)                                       |
| gap        | 设置每行间距,需要加单位   | `string`\| `number`                               | 10px                                                 |
| type       | 标签类型[^3]       | `error`\|`warning`\|`success` \|`primary`\|`info` | primary                                              |
| size       | 标签的大小[^4]      | `small`\|`medium`\|`large`                        | medium                                               |
| shape      | tag的形状[^5]     | `circle`\|`square`                                | square                                               |

## columns
| 参数       | 说明     | 类型        | 默认值 |
|----------|--------|-----------|-----|
| label    | 显示文本内容 | `string`  | -   |
| value    | 值      | `string`  | -   |
| checked  | 是否选中   | `boolean` | -   |
| disabled | 是否禁用   | `boolean` | -   |

## API
| 参数      | 说明             | 类型       | 默认值     |
|---------|----------------|----------|---------|
| label   | 自定义columns的文本键 | `string` | label   |
| value   | 自定义columns的值键  | `string` | value   |
| checked | 自定义columns的选中键 | `string` | checked |


## Events

| 事件名   | 说明 | 回调参数 |
|-------|---|------|
| change | 选择触发  | -    |

## Slots

| 插槽名  | 说明 | 接收值 |
|------|----|----|
| name | -  | -  |

[^1]: `selectType`设置为`radio`时候v-model必须传是字符串/数字，设置为`checkbox`时候`v-model`必须传数组
[^2]: `checkbox`：多选；`radio`：单选
[^3]: `error`：#fa3534；`warning`：#ff9900；`success`：#19be6b；`primary`：#2979ff； `info`：#909399；
[^4]: `normal`：默认尺寸；`large`：大尺寸； `small`：小尺寸；
[^5]: `circle`：两边半圆形； `square`：方形，带圆角

<demo-model url="pages/components/checkButton/checkButton"></demo-model>