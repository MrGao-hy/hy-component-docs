# radio 单选框组件
> 复选框组件一般用于需要多个选择的场景，该组件功能完整，使用方便

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [checkbox组件](https://uiadmin.net/uview-plus/components/radio.html) 的代码实现。
:::

## 平台差异说明

| APP | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-radio v-model="value" :columns="columns"></hy-radio>
<!-- 单个组件引入 -->
<HyRadio v-model="value" :columns="columns"></HyRadio>
```
```ts
import { HyRadio } from "hfyk-app";
import { ref } from "vue";

const columns = [
    {
        label: "苹果",
        value: "apply"
    },
    {
        label: "香蕉",
        value: "banana"
    }
];
const value = ref(["apply"]);
```

## 自定义columns键
```html
<hy-radio v-model="value" :columns="columns" :fieldNames="fieldNames"></hy-radio>
```
```ts
import { HyCheckobox } from "hfyk-app";
import { ref } from "vue";

const columns = [
    {
        name: "苹果",
        value_1: "apply"
    },
    {
        name: "香蕉",
        value_1: "banana"
    }
];
const value = ref([]);
const fieldNames = ref({
    label: "name",
    value: "value_1",
    checked: "checked"
})
```

## 自定义形状
可以通过设置`shape`为`square`或者`circle`，将复选框设置为方形或者圆形
```html
<hy-radio v-model="value" :columns="columns" shape="square" ></hy-radio>
<hy-radio v-model="value" :columns="columns" shape="circle" ></hy-radio>
```

## 自定义颜色
```html
<hy-radio v-model="value" :columns="columns" activeColor="red" ></hy-radio>
```

## 排列形式
可以通过设置`placement`为`row`或者`column`，将复选框设置为横向排列或者竖向排列
```html
<hy-radio v-model="value" :columns="columns" placement="row" ></hy-radio>
<hy-radio v-model="value" :columns="columns" placement="column" ></hy-radio>
```

## 横向两端排列形式
可以通过设置iconPlacement为left或者right，将复选框勾选图标的对齐设置为左对齐或者右对齐
```html
<hy-radio v-model="value" :columns="columns" iconPlacement="right" placement="row" ></hy-radio>
<hy-radio v-model="value" :columns="columns" iconPlacement="left" placement="row" ></hy-radio>
```

## 禁用
```html
<!-- 全部禁用 -->
<hy-radio v-model="value" :columns="columns" disabled ></hy-radio>
```
```ts
import { ref } from "vue";

const columns = [
    {
        label: "苹果",
        value: "apply",
        disabled: true // 禁用单个
    },
    {
        label: "香蕉",
        value: "banana"
    }
];
const value = ref(["apply"]);
```

## 插槽
- `label`：自定义label文本,传值为`label`
- `icon`：自定义选项框里icon,传值为`iconColor`和`iconSize`
```html
<hy-radio v-model="value" :columns="columns">
    <template #label="{ label }">
        <view>{{label}}</view>
    </template>
    <template #icon="{ iconColor, iconSize }">
        <view>{{iconColor}}</view>
        <view>{{iconSize}}</view>
    </template>
</hy-radio>
```
```ts
import { ref } from "vue";

const columns = [
    {
        label: "苹果",
        value: "apply"
    },
    {
        label: "香蕉",
        value: "banana"
    }
];
const value = ref(["apply"]);
```

## API

| 参数            | 说明                                           | 类型                   | 默认值                                                  | 可选值           |
|---------------|----------------------------------------------|----------------------|------------------------------------------------------|---------------|
| v-model       | 双向绑定值，数组类型                                   | `array`              | -                                                    | -             |
| columns       | 接收数组值                                        | `array`              | -                                                    | -             |
| fieldNames    | 自定义接收columns的键                               | `object`             | \{label: "label",value: "value",checked: "checked"\} | -             |
| shape         | 复选框形状                                        | `string`             | circle                                               | square \| circle    |
| size          | 复选框大小                                        | `string` \| `number` | 18                                                   | -             |
| disabled      | 是否禁用                                         | `boolean`            | false                                                | -             |
| activeColor   | 选中状态下的颜色                                     | `string`             | ColorConfig.primary                                  | -             |
| inactiveColor | 未选中的颜色                                       | `string`             | #c8c9cc                                              | -             |
| iconSize      | 图标的大小，单位px                                   | `string` \| `number` | 20                                                   | -             |
| iconColor     | 图标颜色                                         | `string`             | -                                                    | -             |
| label         | label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式 | `string`             | -                                                    | -             |
| labelSize     | label的字体大小，px单位                              | `string` \| `number` | -                                                    | -             |
| labelColor    | label的颜色                                     | `string`             | -                                                    | -             |
| iconPlacement | 勾选图标的对齐方式                                    | `string`             | left                                                 | left \| right |
| borderBottom  | 竖向配列时，是否显示下划线                                | `boolean`            | false                                                | -             |
| labelDisabled | 是否禁止点击提示语选中复选框                               | `string`             | -                                                    | -             |
| placement     | 布局方式                                         | `string`             | row                                                  | row \| column |
| customStyle   | 定义需要用到的外部样式                                  | `CSSProperties`      | -                                                    | -             |

## Events

| 事件名    | 说明                           | 回调参数                                      |
|--------|------------------------------|-------------------------------------------|
| change | 任一个radio状态发生变化时触发，回调为一个对象 | detail = array( [元素为被选中的radio的value] ) |

## Slots

| 插槽名   | 说明           |
|-------|--------------|
| icon  | 自定义`icon`内容  |
| label | 自定义`label`内容 |
