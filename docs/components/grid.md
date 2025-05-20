# Grid 宫格布局组件
> 宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件(badge)，或者图标等，也可以扩展为左右滑动的轮播形式。 平台差异

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [grid组件](https://uiadmin.net/uview-plus/components/grid.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|-----|----|-------|
| ✔   | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-gird :list="list"></hy-gird>
<!-- 单个组件引入 -->
<HyGrid :list="list"></HyGrid>
```
```ts
import { HyGrid, IconConfig } from "hy-app"
import { ref } from 'vue';

// 创建响应式数据  
const list = ref([
    {
        icon: IconConfig.CRY_FILL,
        name: '小狗'
    },
    {
        icon: 'https://img1.baidu.com/it/u=563605416,3386931726&fm=253',
        name: '小猫'
    },
    {
        icon: 'star',
        name: '小鸡'
    },
]);  
```

## 自定义插槽

```html
<template>
    <hy-grid :list="list">
        <template #default="{record}">
            {{record.url}}
            {{record.title}}
        </template>
    </hy-grid>
</template>

<script setup="">
    import { IconConfig } from "hy-app"
    import { ref } from 'vue';

    // 创建响应式数据  
    const list = ref([
        {
            url: IconConfig.CRY_FILL,
            title: '小狗'
        },
        {
            url: 'https://img1.baidu.com/it/u=563605416,3386931726&fm=253',
            title: '小猫'
        },
        {
            url: 'star',
            title: '小鸡'
        },
    ]);
</script>
```

## API

| 参数          | 说明                              | 类型                        | 默认值         |
|-------------|---------------------------------|---------------------------|-------------|
| list        | 数据集                             | `array`                   | -           |
| col         | 宫格的列数                           | `number`                  | 4           |
| border      | 是否显示宫格的边框                       | `boolean`                 | false       |
| itemHeight  | 单个宫格高度                          | `string` \| `number`      | 100px       |
| align       | 格对齐方式，表现为数量少的时候，靠左，居中，还是靠右      | `center`\|`left`\|`right` | left        |
| gap         | 间隔                              | `string` \| `number`      | 0px         |
| bgColor     | 宫格的背景颜色                         | `string`                  | transparent |
| iconConfig  | 图标属性api配置，详见[图标Api](./icon#api) | `HyIconProps`             | -           |
| customStyle | 定义需要用到的外部样式                     | `CSSProperties`           | -           |

## list
> 或者自定义添加其他键，通过插槽自定义内容

| 参数         | 说明                              | 类型            | 默认值 |
|------------|---------------------------------|---------------|-----|
| icon       | 图片或者icon                        | `string`      | -   |
| name       | 名称                              | `string`      | -   |
| iconConfig | 图标属性api配置，详见[图标Api](./icon#api) | `HyIconProps` | -   |

## Events

| 事件名   | 说明 | 回调参数 |
|-------|---|------|
| click | 点击宫格触发  | item |

## Slots

| 插槽名     | 说明   | 接收值    |
|---------|------|--------|
| default | 默认插槽 | record |

<demo-model url="pages/components/grid/grid"></demo-model>