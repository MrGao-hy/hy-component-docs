# CheckButton 复选框按钮组件
> 该组件内部实现以tag二次封装按钮复选框和单选框

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [tag组件](https://uiadmin.net/uview-plus/components/tag.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-check-button text="月落"></hy-check-button>
<!-- 单个组件引入 -->
<HyCheckButton type="primary">按钮</HyCheckButton>
```
```ts
import { HyCheckButton } from "hfyk-app"
```

## API

| 参数         | 说明                                   | 类型                                                | 默认值                                                  |
|------------|--------------------------------------|---------------------------------------------------|------------------------------------------------------|
| v-model    | 选中得值，radio是字符串，checkbox是数组           | `string`\|`string[]`                              | -                                                    |
| columns    | 列表数据                                 | `array`                                           | -                                                    |
| fieldNames | 自定义columns对应得键                       | `object`                                          | \{label: "label",value: "value",checked: "checked"\} |
| selectType | 选择单选框还是复选框（checkbox-复选框，radio-单选框）   | `checkbox`\|`radio`                               | checkbox                                             |
| disabled   | 禁用                                   | `boolean`                                         | false                                                |
| col        | 每行几列，每列等宽                            | `string`                                          | repeat(3, 1fr)                                       |
| gap        | 设置每行间距,需要加单位                         | `string`\| `number`                               | 10px                                                 |
| type       | 标签类型                                 | `error`\|`warning`\|`success` \|`primary`\|`info` | primary                                              |
| size       | 标签的大小                                | `small`\|`medium`\|`large`                        | medium                                               |
| shape      | tag的形状，circle（两边半圆形）, square（方形，带圆角） | `circle`\|`square`                                | square                                               |

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
|-------|----|------|
| click | -  | -    |

## slots

| 插槽名  | 说明 | 接收值 |
|------|----|----|
| name | -  | -  |