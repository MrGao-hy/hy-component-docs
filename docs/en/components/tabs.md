# Tabs Component

> This is a tabs component. When there are many tabs, it can be configured to slide left and right; when there are few tabs, sliding can be disabled. One feature of this component is that when configured in scroll mode, the active tab automatically moves to the center of the component.

## :pushpin:Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage Examples

```html
<!-- Global usage -->
<hy-tabs :list="list"></hy-tabs>
```

```ts
const list = [{ name: 'All' }, { name: 'Not Redeemed' }, { name: 'Redeemed' }];
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
        { title: 'Not Redeemed', badge: { value: 5 } },
        { title: 'Redeemed' },
    ];
</script>
```

### Custom Read Key

- Customize the value to display via `keyName`

```html
<template>
    <hy-tabs :list="list" keyName="title"></hy-tabs>
</template>
<script setup>
    const list = [
        { title: 'All', content: { value: 123 } },
        { title: 'Not Redeemed' },
        { title: 'Redeemed' },
    ];
</script>
```

### Swiper Slot Custom Content

```html
<template>
    <hy-tabs :list="statusTabs" @clickTabs="clickTabs" @change="change">
        <template #default="{record}">{{record.value}}</template>
    </hy-tabs>
</template>

<script setup>
    const statusTabs = [
        { name: 'All', content: { value: 123 } },
        { name: 'Not Redeemed' },
        { name: 'Redeemed' },
    ];
    // Callback executed when a tab is clicked
    const clickTabs = () => {};
    // Callback function executed when the swiper slides
    const change = () => {};
</script>
```

### Custom Swiper

```html
<template>
    <hy-tabs :list="statusTabs" @clickTabs="clickTabs" @change="change">
        <template #main>
            <!--Custom content (without swiper)-->
        </template>
    </hy-tabs>
</template>

<script setup>
    const statusTabs = [{ name: 'All' }, { name: 'Not Redeemed' }, { name: 'Redeemed' }];
    // Callback executed when a tab is clicked
    const clickTabs = () => {};
    // Callback function executed when the swiper slides
    const change = () => {};
</script>
```

## API

### Tabs Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| current | Index of the currently selected tab | `number` | 0 |
| list | Tab array | `TabsItemVo[]` | - |
| keyName | Key name read from the list element objects | `string` | name |
| duration | Time required for the slider to move once, in ms | `number` | 300 |
| scrollable | Whether the menu is scrollable | `boolean` | false |
| lineWidth | Slider length; default unit for numeric values is px | `string`\|`number` | 20 |
| lineHeight | Slider height; default unit for numeric values is px | `string`\|`number` | 3 |
| lineColor | Slider color | `string` | - |
| lineBgSize | Slider background display size, used when the slider background is set to an image | `string`\|`number` | cover |
| activeStyle | Style of the menu when selected | `CSSProperties` | - |
| inactiveStyle | Style of the menu when not selected | `CSSProperties` | - |
| itemStyle | Style of the menu item | `string` | - |
| badgeProps | Global definition of [badge props](./badge#Api) (badge in list takes higher priority) | `BadgeProps` | - |
| swiperHeight | Swiper height; default unit for numeric values is px | `string`\|`number` | calc(100% - 44px) |
| isSwiper | Whether content swiping is enabled | `boolean` | false |
| iconStyle | Custom style for the icon on the left side of the tab | `CSSProperties` | - |
| customStyle | Define external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description         | Callback Parameters                        |
| --------- | ------------------ | ----------------------------------- |
| click     | Triggered when a tab is clicked     | item: TabsItemVo, index: tab index value |
| longPress | Triggered when a tab is long-pressed     | item: TabsItemVo, index: tab index value |
| change    | Triggered when the tab index changes | item: TabsItemVo, index: tab index value |

### Slots

| Slot Name | Description                  | Received Values                          |
| ------- | --------------------- | ------------------------------- |
| default | Custom content value for the swiper | record: TabsItemVo, index: index |
| left    | Slot for the overall left side          | -                               |
| icon    | Tab icon            | record: TabsItemVo, index: index |
| content | Tab content            | record: TabsItemVo, index: index |
| right   | Slot for the overall right side          | -                               |
| main    | Custom bottom swiper    | -                               |

### Typings

::: details Type Descriptions

```ts
export interface TabsItemVo {
    /**
     * Tab name
     * */
    name: string;
    /**
     * Props received by the badge
     * */
    badge?: HyBadgeProps;
    /**
     * Whether disabled
     * */
    disabled?: boolean;
    /**
     * Swiper content value
     * */
    content?: any;
    [key: string]: any;
}
```

:::

<demo-model url="pages-design/tabs/tabs"></demo-model>