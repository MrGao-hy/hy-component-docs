# ActionSheet 操作菜单组件
> ActionSheet 组件用于从屏幕底部弹出操作菜单，提供清晰的选项列表供用户选择并返回结果。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [actionSheet组件](https://uiadmin.net/uview-plus/components/actionSheet.html) 的代码实现。
:::

## 适用场景

- 底部弹出式菜单选择（如分享、删除、操作选项等）
- 需要从多个选项中选择一个执行特定操作的场景
- 自定义操作面板（如分享到不同平台）
- 表单操作的快捷选项（如选择支付方式、配送方式等）

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-action-sheet v-model="show" :actions="actions"></hy-action-sheet>
<!-- 单个组件引入 -->
<HyActionSheet v-model="show" :actions="actions"></HyActionSheet>
```
```ts
import { HyActionSheet, IActionSheetAction } from "hy-app";
import { ref } from 'vue'
const show = ref(true);

const actions = ref<IActionSheetAction[]>([
    {
        name: '选项1'
    },
    {
        name: '选项2'
    },
    {
        name: '选项3'
    },
])
```

## 设置选项卡
- 通过在 `actions` 数组的对象中添加 `name` 属性,来显示选项文字
- 通过在 `actions` 数组的对象中添加 `loading` 属性,来显示加载动画
- 通过在 `actions` 数组的对象中添加 `disabled` 属性,来禁用点击事件
- 通过在 `actions` 数组的对象中添加 `sub` 属性,来显示小标题提示
- 通过在 `actions` 数组的对象中添加 `color` 属性,来设置字体颜色
:::code-group
```vue [vue]
<template>
    <hy-action-sheet v-model="show" :actions="actions"></hy-action-sheet>
</template>
```
```ts [.ts]
import { ref } from 'vue'
import type { IActionSheetAction } from "hy-app";
const show = ref(true);

const actions = ref<IActionSheetAction[]>([
    {
        name: '选项1',
        loading: true,
        color: "red"
    },
    {
        name: '选项2',
        disabled: true,
    },
    {
        name: '选项3',
        sub: '描述信息',
    },
])
```
:::

## 自定义面板
- 通过`panels`自定义分享页面
:::tip 提示
panels支持一维数组和二维数组
:::
:::code-group
```vue [vue]
<template>
    <hy-action-sheet v-model="show" :panels="panels" title="分享给" titleAlign="left"></hy-action-sheet>
</template>
```
```ts [.ts]
import { ref } from 'vue';

const show = ref(true);
const panels = ref([
    [
        {
            iconUrl:
                '//img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
            title: '微信好友',
        },
        {
            iconUrl:
                '//img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
            title: '微信好友',
        },
    ],
    [
        {
            iconUrl:
                '//img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
            title: '微信好友',
        },
        {
            iconUrl:
                '//img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
            title: '微信好友',
        },
    ],
])
```
:::

## 设置标题
- 通过`title`,显示标题
- 通过`titleAlign`设置标题位置
```html
<template>
    <hy-action-sheet v-model="show" title="我是标题" titleAlign="left"></hy-action-sheet>
</template>
```

## 显示取消按钮
- 通过`cancel-text`设置文字显示底部取消按钮
```html
<template>
    <hy-action-sheet v-model="show" :actions="actions" cancel-text="取消"></hy-action-sheet>
</template>

<script setup lang="ts">
    import type { IActionSheetAction } from "hy-app";
    import { ref } from 'vue'
    const show = ref(true);

    const actions = ref<IActionSheetAction[]>([
        {
            name: '选项1'
        },
        {
            name: '选项2'
        },
        {
            name: '选项3'
        },
    ])
</script>
```

## 自定义内容面板
```html
<template>
    <hy-action-sheet v-model="show" title="我是标题">
        我是内容
    </hy-action-sheet>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const show = ref(true);
</script>
```

## API

| 参数                  | 说明                                      | 类型                                                  | 默认值    |
|---------------------|-----------------------------------------|-----------------------------------------------------|--------|
| v-model             | 是否展示                                    | `boolean`                                           | false  |
| title               | 标题                                      | `string`                                            | -      |
| titleAlign          | 标题文字位置                                  | `center`\|`left`\|`right`                           | center |
| description         | 弹框动画持续时间                                | `number`                                            | 200    |
| actions             | 菜单选项                                    | `IActionSheetAction[]`                              | -      |
| panels              | 自定义面板项,可以为字符串数组，也可以为对象数组，如果为二维数组，则为多行展示 | `Array<IActionSheetPanel   \| IActionSheetPanel[]>` | -      |
| cancelText          | 取消按钮的文字，不为空时显示按钮                        | `string`                                            | -      |
| closeOnClickAction  | 点击某个菜单项时是否关闭弹窗                          | `boolean`                                           | true   |
| safeAreaInsetBottom | 是否开启底部安全区适配                             | `boolean`                                           | false  |
| closeOnClickOverlay | 点击遮罩是否允许关闭，见上方文档示例                      | `boolean`                                           | true   |
| round               | 圆角值                                     | `string` \| `number`                                | 20px   |
| zIndex              | 菜单层级                                    | `number`                                            | 100    |
| customStyle         | 自定义外部样式                                 | `CSSProperties`                                     | -      |
| customClass         | 自定义外部类名                                 | `string`                                            | -      |
| customHeaderClass   | 自定义标题类名                                 | `string`                                            | -      |

## actions

| 参数       | 说明    | 类型        | 默认值 |
|----------|-------|-----------|-----|
| name     | 选项名称  | `string`  | -   |
| sub      | 描述信息  | `string`  | -   |
| color    | 字体颜色  | `string`  | -   |
| disabled | 是否禁用  | `boolean` | -   |
| loading  | 是否加载中 | `boolean` | -   |

## panels

| 参数      | 说明   | 类型       | 默认值 |
|---------|------|----------|-----|
| name    | 名称   | `string` | -   |
| iconUrl | 图片地址 | `string` | -   |

## Events

| 事件名         | 说明           | 回调参数                                                                                            |
|-------------|--------------|-------------------------------------------------------------------------------------------------|
| select      | 点击选项时触发      | 菜单选项或自定义面板一维数组 （item: 选项对象, index: 选项下标），自定义面板二维数组（item: 选项对象, rowIndex: 选项行下标, colIndex 选项列下标） |
| open        | 弹出层打开时触发     | -                                                                                               |
| close       | 弹出层关闭时触发     | -                                                                                               |
| cancel      | 点击取消按钮时触发    | -                                                                                               |

## Slots

| 插槽名     | 说明     | 接收值 |
|---------|--------|-----|
| default | 面板默认插槽 | -   |


<demo-model url="pages/components/actionSheet/actionSheet"></demo-model>