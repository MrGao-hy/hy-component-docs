# Menu Sidebar Navigation Component

> A vertically displayed navigation bar, used for switching between different content areas.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-menu :list="list"></hy-menu>
```

```ts
const list = [
    { title: 'Rice Bowls', icon: IconConfig.PHOTO },
    { title: 'Stir-Fried Dishes', value: 'title', disabled: true },
    { title: 'Rice Noodles & Noodles', value: 'showCancelButton' },
    { title: 'Burgers & Pizza', value: 'buttonReverse' },
    { title: 'Drinks & Desserts', value: 'buttonReverse' },
    { title: 'Dim Sum, Porridge, Dumplings & Wontons', value: 'buttonReverse' },
    { title: 'Snacks & Malatang', value: 'buttonReverse' },
    { title: 'Chinese Food', value: 'buttonReverse' },
    { title: 'Western Food', value: 'buttonReverse' },
    { title: 'Feasts', value: 'buttonReverse' },
];
```

## Setting Different Widths

- Set the width via the `width` prop

```html
<template>
    <hy-menu :list="list" width="150"></hy-menu>
</template>
```

## Setting the Selected Color

- Set the selected color via the `color` prop

```html
<template>
    <hy-menu :list="list" color="red"></hy-menu>
</template>
```

## Anchor Mode

::: code-group

```vue [vue]
<template>
    <hy-config-provider :custom-style="themeColor" :theme="darkMode">
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
    </hy-config-provider>
</template>
```

```ts [.ts]
import { computed, onMounted, ref } from 'vue';
import { useThemeStore } from '@/store';
import { data } from './data';
import { IconConfig, debounce } from '@hy-app/ui';

// Components
import HyMenu from '@/package/components/hy-menu/hy-menu.vue';
import HyGrid from '@/package/components/hy-grid/hy-grid.vue';
import HyConfigProvider from '@/package/components/hy-config-provider/hy-config-provider.vue';
import type { MenuParamsVo } from '@/package/components/hy-menu/typing';
import { getRect } from '@/package';

const themeStore = useThemeStore();

interface ItemTopVo {
    id: string | number;
    top: number;
}

const { themeColor, darkMode } = themeStore;
const scrollTop = ref<number>(0);
const itemScrollTop = ref<ItemTopVo[]>([]);
const current = ref<string | number>(1);
const list = [
    { id: 1, title: 'Rice Bowls', icon: IconConfig.PHOTO },
    { id: 2, title: 'Stir-Fried Dishes', value: 'title', disabled: true },
    { id: 3, title: 'Rice Noodles & Noodles', value: 'showCancelButton', badge: 6 },
    { id: 4, title: 'Burgers & Pizza', value: 'buttonReverse' },
    { id: 5, title: 'Drinks & Desserts', value: 'buttonReverse' },
    { id: 6, title: 'Dim Sum, Porridge, Dumplings & Wontons', value: 'buttonReverse' },
    { id: 7, title: 'Snacks & Malatang', value: 'buttonReverse' },
    { id: 8, title: 'Chinese Food', value: 'buttonReverse' },
    { id: 9, title: 'Western Food', value: 'buttonReverse' },
    { id: 10, title: 'Feasts', value: 'buttonReverse' },
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
    // Prevent the current value from being changed while the change event is executing
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
        name: 'Rice Bowls',
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
        name: 'Burgers & Pizza',
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
        name: 'Dim Sum, Porridge, Dumplings & Wontons',
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
        name: 'Feasts',
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
.hy-config-provider {
    display: flex;
}
.scroll-view {
    padding: 20rpx;
}
```

:::

## API

### Menu Props

| Parameter   | Description                                        | Type               | Default |
| ----------- | -------------------------------------------------- | ------------------ | ------- |
| list        | Menu data set                                      | `MenuParamsVo[]`   | -       |
| id          | Bound unique key                                   | `string`           | id      |
| color       | Selected color                                     | `string`           | -       |
| width       | Width of the sidebar menu bar, default unit is px  | `number`\|`string` | 120     |
| icon        | Icon property set, see [Icon API](./icon#api)      | `HyIconProps`      | -       |
| badge       | Badge property set, see [Badge API](./badge#api)   | `HyBadgeProps`     | -       |
| customStyle | Custom external styles to be applied               | `CSSProperties`    | -       |
| customClass | Custom external class name                         | `string`           | -       |

### Events

| Event  | Description                       | Callback Parameters                   |
| ------ | --------------------------------- | ------------------------------------- |
| change | Triggered when an option switches | (temp: MenuParamsVo, index: number)   |

### Slots

| Slot    | Description   | Parameters |
| ------- | ------------- | ---------- |
| default | Custom title  | -          |
| icon    | Custom icon   | -          |

## Typings

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

| Variable                     | Description                             | Default                                    |
| ---------------------------- | --------------------------------------- | ------------------------------------------ |
| `--hy-menu-max-width`        | Maximum menu width                      | `260rpx`                                   |
| `--hy-menu-indicator-width`  | Selected indicator width                | `4px`                                      |
| `--hy-menu-indicator-height` | Selected indicator height               | `15px`                                     |
| `--hy-menu-indicator-radius` | Selected indicator border radius        | Follows `--hy-radius-semicircle` (100px)   |
| `--hy-menu-title-font-size`  | Title font size (line height follows)   | Follows `--hy-font-size-base` (28rpx)      |
| `--hy-menu-disabled-color`   | Disabled text color                     | Follows `--hy-text-color--disabled`        |

<demo-model url="pages-design/menu/menu"></demo-model>