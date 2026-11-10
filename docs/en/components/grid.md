# Grid Layout Component

> The Grid component is generally used for scenarios where multiple items of the same type need to be displayed at the same time. You can add a badge component or icons to grid items, and it can also be extended into a left-right swipeable carousel. Platform Differences

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Examples

```html
<!-- 全局使用 -->
<hy-gird :list="list"></hy-gird>
```

```ts
import { IconConfig } from '@hy-app/ui';
import { ref } from 'vue';

// 创建响应式数据
const list = ref([
    {
        icon: IconConfig.CRY_FILL,
        name: '小狗',
    },
    {
        icon: 'https://img1.baidu.com/it/u=563605416,3386931726&fm=253',
        name: '小猫',
    },
    {
        icon: 'star',
        name: '小鸡',
    },
]);
```

### Set Gap

```html
<!-- 全局使用 -->
<hy-gird :list="list" gap="10px"></hy-gird>
```

### Set the Number of Grid Columns

```html
<!-- 全局使用 -->
<hy-gird :list="list" col="5"></hy-gird>
```

### Custom Slot

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
    import { IconConfig } from '@hy-app/ui';
    import { ref } from 'vue';

    // 创建响应式数据
    const list = ref([
        {
            url: IconConfig.CRY_FILL,
            title: '小狗',
        },
        {
            url: 'https://img1.baidu.com/it/u=563605416,3386931726&fm=253',
            title: '小猫',
        },
        {
            url: 'star',
            title: '小鸡',
        },
    ]);
</script>
```

## API

### Grid Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| list | Data set | `GridItemVo[]` | - |
| col | Number of grid columns | `number` | 4 |
| size | Icon size; numbers use px by default | `number`\|`string` | 4 |
| customKeys | Custom key names | `CustomKeysVo` | \{name: 'name',icon: 'icon'\} |
| border | Whether to show the grid border | `boolean` | false |
| itemHeight | Height of a single grid item; numbers use px by default | `string` \| `number` | 100px |
| align | Grid alignment; determines whether items align left, center, or right when there are few items | `center`\|`left`\|`right` | left |
| gap | Spacing; numbers use px by default | `string` \| `number` | 0 |
| bgColor | Background color of the grid | `string` | transparent |
| iconProps | Icon props API configuration; see [Icon API](./icon#api) for details | `HyIconProps` | - |
| customStyle | Custom external styles | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| click | Triggered when a grid item is clicked | (item: GridItemVo \| string) |

### Slots

| Slot Name | Description | Received Values |
| --------- | ----------- | --------------- |
| default | Default slot | record: GridItemVo \| string |

### Typings

::: details Type Description

```ts
type GridItemVo = {
    /**
     * 图标名称或图片地址
     * */
    icon?: string;
    /**
     * 名称
     * */
    name?: string;
    /**
     * 图标属性api配置
     * */
    iconProps?: Partial<HyIconProps>;
    /**
     * 自定义内容键值对
     * */
    [key: string]: any;
};

type CustomKeysVo = {
    /**
     * 自定义标题键名
     * */
    name: string;
    /**
     * 自定义icon键名
     * */
    icon: string;
};
```

:::

### CSS Variables

| Variable Name | Description | Default |
| ------------- | ----------- | ------- |
| `--hy-grid-hover-opacity` | Opacity of a grid item when pressed | `0.7` |
| `--hy-grid-border` | Grid border (right and bottom borders are synchronized) | Follows `--hy-border-line` |

<demo-model url="pages-design/grid/grid"></demo-model>