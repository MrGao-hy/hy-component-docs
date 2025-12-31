# Steps 步骤条组件
> 该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [steps组件](https://uiadmin.net/uview-plus/components/steps.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-steps :list="list"></hy-steps>
<!-- 单个组件引入 -->
<HySteps :list="list"></HySteps>
```
```ts
import { HySteps } from "hy-app";
const list = ref([
    {title: "已下单", desc: "2024-10-13",},
    {title: "已发货", desc: "2024-10-13",},
    {title: "发货失败", desc: "2024-10-14", error: true},
])
```

## 步骤条模式
- 设置`dot`参数为true的话，将会以点状的形式展示步骤条样式。
```html
<template>
    <hy-steps :list="list" dot></hy-steps>
</template>
```

## 竖向模式
- 设置`direction`参数为为column的话，组件将会以竖向的形式展示步骤条内容。
```html
<template>
    <!--横向-->
    <hy-steps :list="list" direction="row"></hy-steps>
    <!--竖向-->
    <hy-steps :list="list" direction="column"></hy-steps>
</template>
```

## 自定义图标
- 通过`activeIcon`可以设置激活状态的图标
- 通过`inactiveIcon`可以设置非激活状态的图标
```html
<template>
    <hy-steps :list="list" :activeIcon="IconConfig.MAP" :inactiveIcon="IconConfig.LOADING"></hy-steps>
</template>

<script setup>
  import { IconConfig } from "hy-app";
</script>
```

## 通过插槽自定义右边内容
- 设置`dot`参数为true的话，将会以点状的形式展示步骤条样式。
```html
<template>
    <hy-steps :list="list">
        <template #content="{ record }">
            {{record}}
        </template>
    </hy-steps>
</template>
```

## API

| 参数            | 说明               | 类型                   | 默认值   |
|---------------|------------------|----------------------|-------|
| list          | 步骤条数据集合          | `array`              | -     |
| current       | 设置当前处于第几步        | `number`             | 0     |
| direction     | row-横向，column-竖向 | `row` \| `column`    | row   |
| activeColor   | 激活状态颜色           | `string`             | -     |
| inactiveColor | 未激活状态颜色          | `string`             | -     |
| activeIcon    | 激活状态的图标          | `string`             | -     |
| inactiveIcon  | 未激活状态图标          | `string`             | -     |
| dot           | 是否显示点类型          | `boolean`            | false |
| iconSize      | 图标大小             | `string` \| `number` | 17    |
| customStyle   | 定义需要用到的外部样式      | `CSSProperties`      | -     |

## list

| 参数    | 说明   | 类型        | 默认值 |
|-------|------|-----------|-----|
| title | 标题   | `string`  | -   |
| desc  | 描述   | `string`  | -   |
| error | 是否错误 | `boolean` | -   |


## Events

| 事件名   | 说明 | 回调参数 |
|-------|----|------|
| click | -  | -    |

## Slots

| 插槽名     | 说明          | 接收值                         |
|---------|-------------|-----------------------------|
| icon    | 自定义步骤左侧icon | index: 当前索引,error: 接收是否错误信息 |
| content | 自定步骤右侧整体内容  | item: 整体内容, index: 当前索引     |
| title   | 自定步骤右侧标题内容  | title: 标题内容， index: 当前索引    |
| desc    | 自定步骤右侧描述    | desc: 描述内容，index: 当前索引      |

<demo-model url="pages/components/steps/steps"></demo-model>