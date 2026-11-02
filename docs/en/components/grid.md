# Grid Layout Component

> The grid component is generally used in scenarios where multiple items of the same type are displayed simultaneously. You can add badge components or icons to grid items, and it can also be extended into a horizontally swipeable carousel. Platform Differences

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-gird :list="list"></hy-gird>
```

```ts
import { IconConfig } from '@hy-app/ui';
import { ref } from 'vue';

// Create reactive data
const list = ref([
    {
        icon: IconConfig.CRY_FILL,
        name: 'Puppy',
    },
    {
        icon: 'https://img1.baidu.com/it/u=563605416,3386931726&fm=253',
        name: 'Kitten',
    },
    {
        icon: 'star',
        name: 'Chick',
    },
]);
```

### Setting the Gap

```html
<!-- Global usage -->
<hy-gird :list="list" gap="10px"></hy-gird>
```

### Setting the Number of Grid Columns

```html
<!-- Global usage -->
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

    // Create reactive data
    const list = ref([
        {
            url: IconConfig.CRY_FILL,
            title: 'Puppy',
        },
        {
            url: 'https://img1.baidu.com/it/u=563605416,3386931726&fm=253',
            title: 'Kitten',
        },
        {
            url: 'star',
            title: 'Chick',
        },
    ]);
</script>
```

## API

### Grid Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| list | Dataset | `GridItemVo[]` | - |
| col | Number of grid columns | `number` | 4 |
| size | Icon size, defaults to px for numeric values | `number`\|`string` | 4 |
| customKeys | Custom keys | `CustomKeysVo` | \{name: 'name',icon: 'icon'\} |
| border | Whether to show grid borders | `boolean` | false |
| itemHeight | Height of a single grid cell, defaults to px for numeric values | `string` \| `number` | 100px |
| align | Grid alignment; determines left, center, or right alignment when there are few items | `center`\|`left`\|`right` | left |
| gap | Spacing, defaults to px for numeric values | `string` \| `number` | 0 |
| bgColor | Background color of the grid | `string` | transparent |
| iconProps | Icon property API configuration, see [Icon API](./icon#api) for details | `HyIconProps` | - |
| customStyle | Custom external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description         | Callback Parameters                     |
| ------ | ------------ | ---------------------------- |
| click  | Triggered when a grid cell is clicked | (item: GridItemVo \| string) |

### Slots

| Slot Name  | Description     | Received Values                       |
| ------- | -------- | ---------------------------- |
| default | Default slot | record: GridItemVo \| string |

### Typings

::: details Type Description

```ts
type GridItemVo = {
    /**
     * Icon name or image URL
     * */
    icon?: string;
    /**
     * Name
     * */
    name?: string;
    /**
     * Icon property API configuration
     * */
    iconProps?: Partial<HyIconProps>;
    /**
     * Custom content key-value pairs
     * */
    [key: string]: any;
};

type CustomKeysVo = {
    /**
     * Custom name key
     * */
    name: string;
    /**
     * Custom icon key
     * */
    icon: string;
};
```

:::

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-grid-hover-opacity` | Opacity of a grid cell when pressed | `0.7` |
| `--hy-grid-border` | Grid cell border (right and bottom borders are synchronized) | Follows `--hy-border-line` |

<demo-model url="pages-design/grid/grid"></demo-model>