# Menu Sidebar Navigation Component

> A vertically displayed navigation bar used to switch between different content areas.

## :pushpin:Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage Examples

```html
<!-- Global usage -->
<hy-menu :list="list"></hy-menu>
```

```ts
const list = [
    { title: 'Rice with Toppings', icon: IconConfig.PHOTO },
    { title: 'Stir-fried Dishes', value: 'title', disabled: true },
    { title: 'Rice Noodles & Noodles', value: 'showCancelButton' },
    { title: 'Burger & Pizza', value: 'buttonReverse' },
    { title: 'Drinks & Desserts', value: 'buttonReverse' },
    { title: 'Pastry, Porridge & Dumplings', value: 'buttonReverse' },
    { title: 'Snacks & Malatang', value: 'buttonReverse' },
    { title: 'Chinese Food', value: 'buttonReverse' },
    { title: 'Western Food', value: 'buttonReverse' },
    { title: 'Feast', value: 'buttonReverse' },
];
```

## Setting Different Widths

- Set the width via the `width` property

```html
<template>
    <hy-menu :list="list" width="150"></hy-menu>
</template>
```

## Setting the Selected Color

- Set the selected color via the `color` property

```html
<template>
    <hy-menu :list="list" color="red"></hy-menu>
</template>
```

## Anchor Model

::: code-group

```vue [vue]
<template>
    <hy-menu v-model="current" :list="list" color="red" @change="onChange"></hy-menu>

    <scroll-view
        class="scroll-view"
        scroll-y
        scroll-with-animation
        :scroll-top="scrollTop"
        :throttle="false"
        @scroll="onScroll"
    >
        <view :class="['item', `item--${item.id}`]" v-for="(item, index) in data" :key="index">
            <view class="hy-title">
                <text class="text">{{ item.name }}</text>
            </view>
            <view class="hy-container">
                <hy-grid
                    :list="item.children"
                    :col="2"
                    :custom-keys="{ icon: 'url', name: 'name' }"
                    :icon-config="{ size: 50 }"
                ></hy-grid>
            </view>
        </view>
    </scroll-view>
</template>
```

```ts [.ts]
import { computed, onMounted, ref } from 'vue';
import { data } from './data';
import { IconConfig, debounce, getRect, type MenuParamsVo } from '@hy-app/ui';

interface ItemTopVo {
    id: string | number;
    top: number;
}

const scrollTop = ref<number>(0);
const itemScrollTop = ref<ItemTopVo[]>([]);
const current = ref<string | number>(1);
const list = [
    { id: 1, title: 'Rice with Toppings', icon: IconConfig.PHOTO },
    { id: 2, title: 'Stir-fried Dishes', value: 'title', disabled: true },
    { id: 3, title: 'Rice Noodles & Noodles', value: 'showCancelButton', badge: 6 },
    { id: 4, title: 'Burger & Pizza', value: 'buttonReverse' },
    { id: 5, title: 'Drinks & Desserts', value: 'buttonReverse' },
    { id: 6, title: 'Pastry, Porridge & Dumplings', value: 'buttonReverse' },
    { id: 7, title: 'Snacks & Malatang', value: 'buttonReverse' },
    { id: 8, title: 'Chinese Food', value: 'buttonReverse' },
    { id: 9, title: 'Western Food', value: 'buttonReverse' },
    { id: 10, title: 'Feast', value: 'buttonReverse' },
];

onMounted(() => {
    list.forEach((item) => {
        getRect(`.item--${item.id}`).then((rect) => {
            itemScrollTop.value.push({
                id: item.id,
                top: rect.top,
            });
        });
    });
});

function onScroll(e: any) {
    const { scrollTop } = e.detail;
    // Prevent changing the current value while the change event is executing
    if (execute.value) {
        debounce(() => (execute.value = false));
        return;
    }

    const res = itemScrollTop.value
        .sort((a, b) => b.top - a.top)
        .find((item) => scrollTop >= item.top);
    current.value = res?.id || 1;
}

const onChange = (temp: MenuParamsVo) => {
    const res: ItemTopVo | undefined = itemScrollTop.value.find((item) => item.id === temp.id);
    scrollTop.value = res?.top || 0;
};
```

```javascript [data.js]
export const data = [
    {
        id: 1,
        name: 'Rice with Toppings',
        children: [
            {
                key: '1-1',
                name: 'Mushroom Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '1-2',
                name: 'Beef & Shiitake Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '1-3',
                name: 'Yu-Xiang Shredded Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '1-4',
                name: 'Minced Pork & Eggplant Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '1-5',
                name: 'Braised Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '1-6',
                name: 'Pig Trotter Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
        ],
    },
    {
        id: 3,
        name: 'Rice Noodles & Noodles',
        children: [
            {
                key: '3-1',
                name: 'Mushroom Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '3-2',
                name: 'Beef & Shiitake Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '3-3',
                name: 'Yu-Xiang Shredded Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '3-4',
                name: 'Minced Pork & Eggplant Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '3-5',
                name: 'Braised Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '3-6',
                name: 'Pig Trotter Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
        ],
    },
    {
        id: 4,
        name: 'Burger & Pizza',
        children: [
            {
                key: '4-1',
                name: 'Mushroom Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '4-2',
                name: 'Beef & Shiitake Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '4-3',
                name: 'Yu-Xiang Shredded Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '4-4',
                name: 'Minced Pork & Eggplant Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '4-5',
                name: 'Braised Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '4-6',
                name: 'Pig Trotter Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
        ],
    },
    {
        id: 5,
        name: 'Drinks & Desserts',
        children: [
            {
                key: '5-1',
                name: 'Mushroom Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '5-2',
                name: 'Beef & Shiitake Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '5-3',
                name: 'Yu-Xiang Shredded Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '5-4',
                name: 'Minced Pork & Eggplant Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '5-5',
                name: 'Braised Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '5-6',
                name: 'Pig Trotter Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
        ],
    },
    {
        id: 6,
        name: 'Pastry, Porridge & Dumplings',
        children: [
            {
                key: '6-1',
                name: 'Mushroom Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '6-2',
                name: 'Beef & Shiitake Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '6-3',
                name: 'Yu-Xiang Shredded Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '6-4',
                name: 'Minced Pork & Eggplant Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '6-5',
                name: 'Braised Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '6-6',
                name: 'Pig Trotter Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
        ],
    },
    {
        id: 7,
        name: 'Snacks & Malatang',
        children: [
            {
                key: '7-1',
                name: 'Mushroom Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '7-2',
                name: 'Beef & Shiitake Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '7-3',
                name: 'Yu-Xiang Shredded Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '7-4',
                name: 'Minced Pork & Eggplant Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '7-5',
                name: 'Braised Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '7-6',
                name: 'Pig Trotter Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
        ],
    },
    {
        id: 8,
        name: 'Chinese Food',
        children: [
            {
                key: '8-1',
                name: 'Mushroom Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '8-2',
                name: 'Beef & Shiitake Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '8-3',
                name: 'Yu-Xiang Shredded Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '8-4',
                name: 'Minced Pork & Eggplant Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '8-5',
                name: 'Braised Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '8-6',
                name: 'Pig Trotter Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
        ],
    },
    {
        id: 9,
        name: 'Western Food',
        children: [
            {
                key: '9-1',
                name: 'Mushroom Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '9-2',
                name: 'Beef & Shiitake Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '9-3',
                name: 'Yu-Xiang Shredded Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '9-4',
                name: 'Minced Pork & Eggplant Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '9-5',
                name: 'Braised Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '9-6',
                name: 'Pig Trotter Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
        ],
    },
    {
        id: 10,
        name: 'Feast',
        children: [
            {
                key: '10-1',
                name: 'Mushroom Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '10-2',
                name: 'Beef & Shiitake Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '10-3',
                name: 'Yu-Xiang Shredded Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '10-4',
                name: 'Minced Pork & Eggplant Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '10-5',
                name: 'Braised Pork Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
            {
                key: '10-6',
                name: 'Pig Trotter Rice Bowl',
                url: 'https://gips2.baidu.com/it/u=987818134,4255615059&fm=3003&app=3003&f=JPEG',
            },
        ],
    },
];
```

```scss [.scss]
.scroll-view {
    padding: 20rpx;
}
```

:::

## API

### Menu Props

| Parameter   | Description                                            | Type               | Default |
| ----------- | ------------------------------------------------------ | ------------------ | ------- |
| list        | Menu dataset                                           | `MenuParamsVo[]`   | -       |
| id          | Bound unique key                                       | `string`           | id      |
| color       | Selected color                                         | `string`           | -       |
| width       | Width of the sidebar menu bar; default unit is px for numeric values | `number`\|`string` | 120 |
| icon        | Icon props; see [Icon API](./icon#api)                 | `HyIconProps`      | -       |
| badge       | Badge props; see [Badge API](./badge#api)              | `HyBadgeProps`     | -       |
| customStyle | Custom external styles to be applied                   | `CSSProperties`    | -       |
| customClass | Custom external class name                             | `string`           | -       |
| modelValue  | Current value                                          | `string`           | -       |

### Events

| Event Name         | Description                           | Callback Parameters                 |
| ------------------ | ------------------------------------- | ----------------------------------- |
| change             | Triggered when an option is switched  | (temp: MenuParamsVo, index: number) |
| update:modelValue | Triggered when the selected item changes | -                                |

### Slots

| Slot Name | Description   | Accepted Values |
| --------- | ------------- | --------------- |
| default   | Custom title  | -               |
| icon      | Custom icon   | -               |

### Typings

::: details Show type declarations

```ts
type MenuParamsVo = {
    /**
     *  Unique id
     * */
    id: string | number;
    /**
     *  Title
     * */
    title: string;
    /**
     *  Whether disabled
     * */
    disabled?: boolean;
    /**
     *  icon
     * */
    icon?: string;
    /**
     *  Badge value
     * */
    badge?: number;
    /**
     *  Key value
     * */
    [key: string]: string | number;
};
```

:::

### CSS Variables

| Variable Name | Description | Default |
| --- | --- | --- |
| `--hy-menu-max-width` | Maximum menu width | `260rpx` |
| `--hy-menu-indicator-width` | Width of the selected indicator bar | `4px` |
| `--hy-menu-indicator-height` | Height of the selected indicator bar | `15px` |
| `--hy-menu-indicator-radius` | Border radius of the selected indicator bar | Follows `--hy-radius-semicircle` (100px) |
| `--hy-menu-title-font-size` | Title font size (line-height follows accordingly) | Follows `--hy-font-size-base` (28rpx) |
| `--hy-menu-disabled-color` | Disabled text color | Follows `--hy-text-color--disabled` |
| `--hy-menu-background` | Overall menu background color | Follows `--hy-background--track` |
| `--hy-menu-item-active-background` | Menu item selected-state background color | Follows `--hy-background--active` |
| `--hy-menu-item-disabled-background` | Menu item disabled-state background color | Follows `--hy-background--disabled` |
| `--hy-menu-item-hover-background` | Menu item pressed-state background color | Follows `--hy-background--hover` |
| `--hy-menu-item-padding-x` | Horizontal padding of menu items | Follows `--hy-border-margin-padding-base` |
| `--hy-menu-item-padding-y` | Vertical padding of menu items | Follows `--hy-border-margin-padding-lg` |
| `--hy-menu-primary` | Primary theme color | Follows `--hy-primary` |

<demo-model url="pages-design/menu/menu"></demo-model>