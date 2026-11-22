# Tabs Component

> This component is a tabs component. When there are many tabs, it can be configured to scroll left and right; when there are few tabs, scrolling can be disabled. One feature of this component is that when configured in scroll mode, the active tab automatically moves to the center of the component.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-tabs :list="list"></hy-tabs>
```

```ts
const list = [{ name: 'All' }, { name: 'Unredeemed' }, { name: 'Redeemed' }];
```

### Displaying Badges

- Set badge properties via `badge`; refer directly to the [hy-badge](./badge.md) component property configuration

```html
<template>
    <hy-tabs :list="list"></hy-tabs>
</template>
<script setup>
    const list = [
        { title: 'All', badge: { isDot: true } },
        { title: 'Unredeemed', badge: { value: 5 } },
        { title: 'Redeemed' },
    ];
</script>
```

### Custom Read Key

- Use `keyName` to customize the value to be displayed

```html
<template>
    <hy-tabs :list="list" keyName="title"></hy-tabs>
</template>
<script setup>
    const list = [
        { title: 'All', content: { value: 123 } },
        { title: 'Unredeemed' },
        { title: 'Redeemed' },
    ];
</script>
```

### Custom Content via Swiper Slot

```html
<template>
    <hy-tabs :list="statusTabs" @clickTabs="clickTabs" @change="change">
        <template #default="{record}">{{record.value}}</template>
    </hy-tabs>
</template>

<script setup>
    const statusTabs = [
        { name: 'All', content: { value: 123 } },
        { name: 'Unredeemed' },
        { name: 'Redeemed' },
    ];
    // Callback executed when a tab is clicked
    const clickTabs = () => {};
    // Callback function executed when the swiper is swiped
    const change = () => {};
</script>
```

### Custom Swiper

```html
<template>
    <hy-tabs :list="statusTabs" @clickTabs="clickTabs" @change="change">
        <template #main>
            <!--Custom content (no swiper)-->
        </template>
    </hy-tabs>
</template>

<script setup>
    const statusTabs = [{ name: 'All' }, { name: 'Unredeemed' }, { name: 'Redeemed' }];
    // Callback executed when a tab is clicked
    const clickTabs = () => {};
    // Callback function executed when the swiper is swiped
    const change = () => {};
</script>
```

## API

### Tabs Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| current | Index of the currently selected tab | `number` | 0 |
| list | Array of tabs | `TabsItemVo[]` | - |
| keyName | Key name to read from the list element objects | `string` | name |
| duration | Time required for the slider to move once, in ms | `number` | 300 |
| scrollable | Whether the menu is scrollable | `boolean` | false |
| lineWidth | Slider length, default unit px for numeric values | `string`\|`number` | 20 |
| lineHeight | Slider height, default unit px for numeric values | `string`\|`number` | 3 |
| lineColor | Slider color | `string` | - |
| lineBgSize | Slider background display size, used when the slider background is set to an image | `string`\|`number` | cover |
| activeStyle | Style of the menu item when selected | `CSSProperties` | - |
| inactiveStyle | Style of the menu item when not selected | `CSSProperties` | - |
| itemStyle | Style of the menu item | `string` | - |
| badgeProps | Global definition of [badge props](./badge#Api) (badge in list takes higher priority) | `BadgeProps` | - |
| swiperHeight | Swiper height, default unit px for numeric values | `string`\|`number` | calc(100% - 44px) |
| isSwiper | Whether to show the content swiper | `boolean` | false |
| iconStyle | Custom style for the icon on the left side of the tab | `CSSProperties` | - |
| customStyle | Defines external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description               | Callback Parameters                            |
| --------- | ------------------ | ----------------------------------- |
| click     | Triggered when a tab is clicked     | item: TabsItemVo, index: tab index |
| longPress | Triggered when a tab is long-pressed     | item: TabsItemVo, index: tab index |
| change    | Triggered when the tab index changes | item: TabsItemVo, index: tab index |

### Methods

| Method | Description                   | Parameters |
| ------ | ---------------------- | ---- |
| resize | Calculates the distance of the slider from the left | -    |

### Slots

| Slot Name  | Description                     | Received Values                          |
| ------- | ------------------------ | ------------------------------- |
| default | Custom content value of the swiper    | record: TabsItemVo, index: index |
| left    | Slot on the left side of the whole component             | -                               |
| icon    | Icon of the tabs               | record: TabsItemVo, index: index |
| content | Content of the tabs               | record: TabsItemVo, index: index |
| right   | Slot on the right side of the whole component             | -                               |
| main    | Customize (replace) the bottom swiper       | -                               |
| line    | Custom slider (indicator line) content | -                               |

### Typings

::: details Type Description

```ts
export interface TabsItemVo {
    /**
     * tab name
     * */
    name: string;
    /**
     * props received by the badge
     * */
    badge?: HyBadgeProps;
    /**
     * whether disabled
     * */
    disabled?: boolean;
    /**
     * swiper content value
     * */
    content?: any;
    [key: string]: any;
}
```

:::

### CSS Variables

| Variable Name                   | Description        | Default                                |
| ------------------------------- | ------------------ | -------------------------------------- |
| `--hy-tabs-item-height`         | Tab item height           | `44px`                                 |
| `--hy-tabs-item-padding`        | Tab item padding         | `0 11px`                               |
| `--hy-tabs-font-size`           | Font size               | `15px`                                 |
| `--hy-tabs-line-width`          | Underline width         | `30px`                                 |
| `--hy-tabs-line-height`         | Underline height         | `3px`                                  |
| `--hy-tabs-text-color`          | Default tab text color       | Follows `--hy-text-color`                 |
| `--hy-tabs-text-active-color`   | Active tab text color       | Follows `--hy-text-color`                 |
| `--hy-tabs-line-radius`         | Underline border radius         | Follows `--hy-radius-semicircle` (100px) |
| `--hy-tabs-primary`             | Theme color             | Follows `--hy-primary`                    |
| `--hy-tabs-text-disabled-color` | Disabled tab text color | Follows `--hy-background--disabled`       |

<demo-model url="pages-design/tabs/tabs"></demo-model>