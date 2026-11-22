# Index-Bar Component

> An index bar component for quickly locating list content, supporting both tap and swipe interactions, and compatible with Mini Program and App platforms.
>
> The component takes over the scroll container internally. Content is passed in via the default slot, group titles are marked with `hy-index-anchor`, and the active index is automatically synced while scrolling, with anchor sticky positioning.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage

Place the list content into the `hy-index-bar` default slot, and mark each group's title with `hy-index-anchor`; index values are collected automatically, so there is no need to manually pass in `indexList`.

```html
<template>
    <hy-index-bar v-model="activeIndex">
        <view v-for="item in contactList" :key="item.index" class="contact-group">
            <hy-index-anchor :index="item.index" />
            <view v-for="(contact, idx) in item.list" :key="idx" class="contact-item">
                {{ contact.name }}
            </view>
        </view>
    </hy-index-bar>
</template>

<script setup>
    import { ref } from 'vue';

    const contactList = ref([
        { index: 'A', list: [{ name: 'A Jie' }, { name: 'A Ming' }] },
        { index: 'B', list: [{ name: 'Bei Bei' }, { name: 'Bao Bao' }] },
        // More data...
    ]);

    // The currently active index, automatically synced by the index bar on scroll/click
    const activeIndex = ref('');
</script>

<style lang="scss" scoped>
    .contact-group {
        margin-bottom: 40rpx;
    }

    .contact-item {
        font-size: 28rpx;
        padding: 20rpx 0;
        border-bottom: 1rpx solid #eee;
    }
</style>
```

::: tip The index bar container requires a definite height in order to scroll properly. `height` defaults to filling its parent (`100%`); if the parent's height is undetermined, specify it via `customStyle`, for example deducting the navigation bar placeholder on H5: `{ height: 'calc(100vh - 44px)' }`. :::

### Disabling Anchor Sticky Positioning

Anchor sticky positioning is enabled by default; when scrolling to a group, the anchor is fixed at the top of the scroll container. Disable it via `sticky`:

```html
<hy-index-bar v-model="activeIndex" :sticky="false">
    <hy-index-anchor v-for="item in indexList" :key="item" :index="item" />
</hy-index-bar>
```

### Hiding the Toast

Use `show-toast` to control whether the index letter toast bubble is displayed.

```html
<hy-index-bar v-model="activeIndex" :show-toast="false">
    <hy-index-anchor v-for="item in indexList" :key="item" :index="item" />
</hy-index-bar>
```

### Index Bar Position

Use `position` to set the index bar position. Optional values are `left` and `right`, with `right` as the default.

```html
<hy-index-bar v-model="activeIndex" position="left">...</hy-index-bar>
```

### Custom Styles

```html
<hy-index-bar
    v-model="activeIndex"
    :index-color="'#666'"
    :active-index-color="'#007AFF'"
    :index-bg-color="'transparent'"
    :active-index-bg-color="'#e0e0e0'"
    :index-size="14"
    :width="30"
    :height="'80%'"
    :custom-style="{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }"
>
    ...
</hy-index-bar>
```

### Manually Specifying the Index List

By default, index values are automatically collected from the `hy-index-anchor` elements inside the slot. If you need to customize the index bar's displayed items (e.g., a different order from the anchors, or showing only a subset of indexes), you can manually specify `indexList`, which supports string/number arrays or object arrays.

```js
// String array
const indexList = ['A', 'B', 'C', 'D'];

// Object array: index is the index value, title is the heading, data is the list data
const indexList = [
    { index: 'A', title: 'A', data: [...] },
    { index: 'B', title: 'B', data: [...] }
];
```

```html
<hy-index-bar v-model="activeIndex" :index-list="indexList">...</hy-index-bar>
```

### Using Anchors Independently

`hy-index-anchor` can also be used standalone, without the index bar. In this case, `active` controls the active state and `sticky` controls the sticky positioning.

```html
<hy-index-anchor :index="'A'" :active="true" :sticky="true" :offset-top="0" />
```

### Complete Code

::: code-group

```vue [vue]
<template>
    <hy-index-bar
        v-model="currentActiveIndex"
        :position="position"
        :show-toast="showToast"
        :custom-style="barCustomStyle"
    >
        <view v-for="item in indexList" :key="item.index" class="hy-index-section">
            <!-- Index anchor: auto-registered once placed in the slot; sticks to top and highlights when scrolled to the corresponding group -->
            <hy-index-anchor :index="item.index" />
            <view class="hy-index-section__container">
                <view
                    v-for="(city, cityIndex) in item.data"
                    :key="cityIndex"
                    class="hy-index-section__item"
                >
                    {{ city }}
                </view>
            </view>
        </view>
    </hy-index-bar>
</template>
```

```ts [index.ts]
import { ref, computed } from 'vue';
import type { CSSProperties } from 'vue';

// Index bar position
const position = ref<'left' | 'right'>('right');
// Whether to show the toast
const showToast = ref<boolean>(true);
// The currently active index, automatically synced by the index bar on scroll/click
const currentActiveIndex = ref<string>('');
// The index bar container requires a definite height; on H5, deduct the navigation bar placeholder, otherwise scrolling will fall through to the page level
const barCustomStyle = { height: '100vh' } as CSSProperties;
// #ifdef H5
barCustomStyle.height = 'calc(100vh - 44px)';
// #endif

const cityData = {
    A: ['Anqing', 'Anyang', 'Anshan', 'Anshun', 'Ankang', 'Aksu', 'Altay'],
    B: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chongqing', 'Chengdu', 'Hangzhou', 'Wuhan', "Xi'an"],
    C: ['Changchun', 'Changzhou', 'Changsha', 'Chengdu', 'Chongqing', 'Fuzhou'],
    D: ['Dalian', 'Dongguan', 'Dezhou', 'Datong', 'Daqing', 'Dali'],
    // More data...
};

// Convert to the index list format; index values are auto-collected by anchors, no need to pass in index-list manually
const indexList = computed(() =>
    Object.keys(cityData)
        .sort()
        .map((key) => ({ index: key, title: key, data: cityData[key] }))
);
```

```scss [index.scss]
.hy-index-section {
    padding: $hy-border-margin-padding-base;

    @include e(item) {
        font-size: 28rpx;
        padding: $hy-border-margin-padding-base;
        border-bottom: $hy-border-line;
        &:last-child {
            border: none;
        }
    }

    @include e(container) {
        padding: $hy-border-margin-padding-base 0;
        border-radius: $hy-radius-base;
        background: $hy-background--container;
    }
}
```

:::

## API

### IndexBar Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | The currently active index value | `string`\|`number` | '' |
| indexList | Index list data, supports string/number arrays or object arrays; if not provided, index values of the `hy-index-anchor` elements inside the slot are collected automatically | `IIndexItem[]` | [] |
| sticky | Whether the anchor automatically sticks to top; when sticky, the anchor is fixed at the top of the scroll container | `boolean` | true |
| position | Index bar position, optional values: `left`, `right` | `left`\|`right` | right |
| showToast | Whether to display the index letter toast | `boolean` | true |
| indexColor | Index item color | `string` | - |
| activeIndexColor | Active index item color | `string` | - |
| indexBgColor | Index item background color | `string` | transparent |
| activeIndexBgColor | Active index item background color | `string` | - |
| indexSize | Index item size, numbers default to px | `number`\|`string` | 12 |
| height | Component container height, numbers default to px, defaults to filling the parent | `number`\|`string` | 100% |
| width | Index item width/height, numbers default to px | `number`\|`string` | 20 |
| customStyle | Custom external style | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

#### IIndexItem

| Field | Description                       | Type               |
| ----- | -------------------------- | ------------------ |
| index | Index value                     | `string`\|`number` |
| title | Title corresponding to the index             | `string`           |
| data  | List data corresponding to the index (optional) | `any[]`            |

`indexList` can also directly accept `string[]` or `number[]`.

### IndexAnchor Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| index | Index value, also serves as the anchor id and default title content (required) | `string`\|`number` | - |
| active | Whether the current index is active; only effective when used independently (not placed inside the `hy-index-bar` slot); when used with the index bar, the active state is driven by v-model | `boolean` | false |
| sticky | Whether sticky positioning is enabled; only effective when used independently, and only takes effect in the active state; when used with the index bar, the index bar's `sticky` takes precedence | `boolean` | true |
| offsetTop | Offset from the top of the scroll container when sticky, in px | `number`\|`string` | 0 |
| zIndex | z-index when sticky | `number`\|`string` | 1 |
| customStyle | Custom external style | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| click | Triggered when an index item is clicked | index: `string`\|`number` - the clicked index value; event: Event - the event object |
| scroll | Triggered when sliding on the index bar | index: `string`\|`number` - the index value currently slid to |
| update:modelValue | Triggered when the index value changes | index: `string`\|`number` - the current index value |

### Slots

| Slot  | Description                                                | Accepted Values |
| ------- | --------------------------------------------------- | ------ |
| default | Index bar list content; group titles are marked with `hy-index-anchor` | -      |

### CSS Variables

#### hy-index-bar

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-index-bar-z-index` | z-index | `999` |
| `--hy-index-bar-toast-size` | Toast bubble size | `50px` |
| `--hy-index-bar-index-color` | Index text color | Follows `--hy-text-color--3` |
| `--hy-index-bar-index-radius` | Index item border radius | Follows `--hy-radius-sm` (8rpx) |
| `--hy-index-bar-toast-color` | Toast bubble text color | `#ffffff` |
| `--hy-index-bar-toast-font-size` | Toast bubble font size | Follows `--hy-font-size-lg` (36rpx) |
| `--hy-index-bar-primary` | Active index theme color | Follows `--hy-primary` |
| `--hy-index-bar-index-active-background` | Index item selected background color | Follows `--hy-background--hover` |
| `--hy-index-bar-list-margin` | Index list right margin | Follows `--hy-border-margin-padding-base` |
| `--hy-index-bar-toast-background` | Toast bubble background color | Follows `--hy-background--empty` |

#### hy-index-anchor

| Variable                          | Description                 | Default                                 |
| ------------------------------- | -------------------- | -------------------------------------- |
| `--hy-index-anchor-text-color`  | Index title text color     | Follows `--hy-text-color`                 |
| `--hy-index-anchor-background`  | Index title background color       | Follows `--hy-background--container`      |
| `--hy-index-anchor-primary`     | Active index title text color | Follows `--hy-primary`                    |
| `--hy-index-anchor-font-size`   | Index title font size         | Follows `--hy-font-size-sm`               |
| `--hy-index-anchor-font-weight` | Index title font weight         | Follows `--hy-font-weight-medium`         |
| `--hy-index-anchor-padding-y`   | Index title vertical padding   | Follows `--hy-border-margin-padding-sm`   |
| `--hy-index-anchor-padding-x`   | Index title horizontal padding   | Follows `--hy-border-margin-padding-base` |
| `--hy-index-anchor-z-index`     | Sticky z-index             | `1`                                    |

<demo-model url="pages-design/indexBar/indexBar"></demo-model>