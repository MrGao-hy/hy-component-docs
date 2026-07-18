# Grid 宫格布局组件
> 宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件(badge)，或者图标等，也可以扩展为左右滑动的轮播形式。 平台差异

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-gird :list="list"></hy-gird>
```
```ts
import { IconConfig } from "@hy-app/ui"
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

### 设置间距

```html
<!-- 全局使用 -->
<hy-gird :list="list" gap="10px"></hy-gird>
```

### 设置宫格列数
```html
<!-- 全局使用 -->
<hy-gird :list="list" col="5"></hy-gird>
```

### 自定义插槽

```html
<template>
    <hy-grid :list="list">
        <template #default="{record}">
            <hy-image :src="record.url" width="80" height="80"></hy-image>
            <text>record.title</text>
        </template>
    </hy-grid>
</template>

<script setup="">
    import { IconConfig } from "@hy-app/ui"
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
### Grid Props

| 参数          | 说明                              | 类型                        | 默认值                           |
|-------------|---------------------------------|---------------------------|-------------------------------|
| list        | 数据集                             | `GridItemVo[]`            | -                             |
| col         | 宫格的列数                           | `number`                  | 4                             |
| size        | 图标大小                            | `number`\|`string`        | 4                             |
| customKeys  | 自定义键值                           | `CustomKeysVo`            | \{name: 'name',icon: 'icon'\} |
| border      | 是否显示宫格的边框                       | `boolean`                 | false                         |
| itemHeight  | 单个宫格高度                          | `string` \| `number`      | 100px                         |
| align       | 格对齐方式，表现为数量少的时候，靠左，居中，还是靠右      | `center`\|`left`\|`right` | left                          |
| gap         | 间隔                              | `string` \| `number`      | 0                             |
| bgColor     | 宫格的背景颜色                         | `string`                  | transparent                   |
| iconProps   | 图标属性api配置，详见[图标Api](./icon#api) | `HyIconProps`             | -                             |
| customStyle | 自定义需要用到的外部样式                    | `CSSProperties`           | -                             |
| customClass | 自定义外部类名                         | `string`                  | -                             |

### Events

| 事件名   | 说明     | 回调参数                         |
|-------|--------|------------------------------|
| click | 点击宫格触发 | (item: GridItemVo \| string) |

### Slots

| 插槽名     | 说明   | 接收值                          |
|---------|------|------------------------------|
| default | 默认插槽 | record: GridItemVo \| string |

### Typings
:::details 类型说明
```ts
type GridItemVo = {
    /**
     * 图标名称或图片地址
     * */
    icon?: string
    /**
     * 名称
     * */
    name?: string
    /**
     * 图标属性api配置
     * */
    iconProps?: Partial<HyIconProps>
    /**
     * 自定义内容键值对
     * */
    [key: string]: any
}

type CustomKeysVo = {
    /**
     * 自定义标题键名
     * */
    name: string
    /**
     * 自定义icon键名
     * */
    icon: string
}
```
:::

<demo-model url="pages-design/grid/grid"></demo-model>
