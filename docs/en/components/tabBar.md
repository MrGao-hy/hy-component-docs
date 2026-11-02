# Bottom Navigation Bar Component

> A bottom navigation bar used to switch between different pages.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :japanese_castle: Basic Usage

::: code-group

```html [Template]
<hy-tabbar-group v-model="current" @change="onChange">
    <hy-tabbar-item title="Home" icon="home"></hy-tabbar-item>
    <hy-tabbar-item title="Categories" icon="class"></hy-tabbar-item>
    <hy-tabbar-item title="Mine" icon="mine"></hy-tabbar-item>
</hy-tabbar-group>

<!-- Wrapped component template -->
<hy-tabbar v-model="fixedCurrent" :list="list" activeColor="red"></hy-tabbar>
```

```ts [Script]
import { ref } from 'vue';

const current = ref(0);
const fixedCurrent = ref('0');
const list = [
    { name: 'Home', icon: IconConfig.HOME },
    { name: 'Categories', icon: IconConfig.HOME },
    { name: 'Cart', icon: IconConfig.HOME, badge: 10 },
    { name: 'Mine', icon: IconConfig.HOME },
];
```

:::

```javascript
import { IconConfig } from '@hy-app/ui';

const list = [
    { name: 'Home', icon: IconConfig.HOME },
    { name: 'Categories', icon: IconConfig.HOME },
    { name: 'Cart', icon: IconConfig.HOME, badge: 10 },
    { name: 'Mine', icon: IconConfig.HOME },
];
```

### Badge Indicator

- `badgeProp`: Receives the badge parameter

::: tip Note

When `isDot` is `true`, `value` must have a value; if there is no number, you can fill in `true`, otherwise it will not be displayed.

:::

```html
<hy-tabbar-group
    :custom-style="{ marginBottom: '20px' }"
    :badgeProps="{ isDot: true }"
    v-model="current"
    @change="onChange"
>
    <hy-tabbar-item title="Home" icon="home"></hy-tabbar-item>
    <hy-tabbar-item title="Categories" icon="class"></hy-tabbar-item>
    <hy-tabbar-item title="Mine" icon="mine" :value="true"></hy-tabbar-item>
</hy-tabbar-group>

<hy-tabbar-group v-model="current" @change="onChange">
    <hy-tabbar-item title="Home" icon="home" :value="10"></hy-tabbar-item>
    <hy-tabbar-item title="Categories" icon="class"></hy-tabbar-item>
    <hy-tabbar-item title="Mine" icon="mine"></hy-tabbar-item>
</hy-tabbar-group>
```

### Rounded Navigation Bar

```html
<hy-tabbar-group v-model="current" @change="onChange" shape="circle">
    <hy-tabbar-item title="Home" icon="home"></hy-tabbar-item>
    <hy-tabbar-item title="Categories" icon="class"></hy-tabbar-item>
    <hy-tabbar-item title="Mine" icon="mine"></hy-tabbar-item>
</hy-tabbar-group>
```

### Rounded Navigation Bar

```html
<hy-tabbar-group v-model="current" @change="onChange" activeColor="red" inactiveColor="green">
    <hy-tabbar-item title="Home" icon="home"></hy-tabbar-item>
    <hy-tabbar-item title="Categories" icon="class"></hy-tabbar-item>
    <hy-tabbar-item title="Mine" icon="mine"></hy-tabbar-item>
</hy-tabbar-group>
```

### icon Slot

```html
<hy-tabbar-group v-model="current" @change="onChange">
    <hy-tabbar-item title="Home" icon="home">
        <template #icon>
            <hy-image :src="config.avatar" width="30" height="30"></hy-image>
        </template>
    </hy-tabbar-item>
    <hy-tabbar-item title="Categories" icon="class"></hy-tabbar-item>
    <hy-tabbar-item title="Mine" icon="mine"></hy-tabbar-item>
</hy-tabbar-group>
```

## API

### TabBar Props

| Parameter   | Description                    | Type             | Default Value |
| ----------- | ------------------------------ | ---------------- | ------------- |
| modelValue  | Index of the selected item     | `number`         | 0             |
| list        | Navigation bar data collection | `TabBarListVo[]` | []            |
| fixed       | Whether to fix at the bottom   | `boolean`        | true          |
| placeholder | Whether to show a placeholder element | `boolean` | false         |
| color       | Icon and font color            | `string`         | -             |
| baseBgColor | Track color                    | `string`         | -             |
| bgColor     | Background color               | `string`         | -             |
| activeColor | Active circle background color | `string`         | -             |
| badgeProps  | Badge [API properties](./badge#api) | `HyBadgeProps` | -            |
| customStyle | Define external styles to be used | `CSSProperties` | -           |
| customClass | Custom external class name     | `string`         | -             |

#### list

| Parameter | Description              | Type   | Default Value |
| --------- | ------------------------ | ------ | ------------- |
| name      | tabBar name              | string | -             |
| icon      | Icon name or image       | string | -             |
| badge     | Badge value              | number | -             |

### TabBarGroup Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| modelValue | Index of the selected item | `number` | 0 |
| fixed | Whether to fix at the bottom | `boolean` | false |
| border | Whether to show the top border | `boolean` | true |
| placeholder | Whether to show a placeholder element | `boolean` | true |
| shape | Shape of the navigation bar | `string` | 'square' |
| bgColor | Background color | `string` | - |
| activeColor | Active color | `string` | - |
| inactiveColor | Inactive color | `string` | - |
| safeAreaInsetBottom | Bottom safe area adaptation - mainly for iPhone X and newer models | `boolean` | true |
| iconSize | Icon size | `string`\|`number` | - |
| fontSize | Font size | `string`\|`number` | - |
| badgeProps | Partial badge properties | `HyBadgeProps` | - |
| zIndex | z-index level | `number` | 10086 |
| customStyle | Define external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### TabBarItem Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| icon | Icon | `string` | - |
| title | Title | `string` | - |
| name | Unique identifier | `string`\|`number` | - |
| value | Badge display value; when the badge is a dot, value must be set to `true` or have a value | `string`\|`number`\|`boolean` | - |

## Events

### TabBar Emits

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| change | Updates the selected index | value: number |

### TabBarGroup Emits

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| change | Updates the selected index | \{value: string \| number} |

## Slots

### TabBar Slots

::: tip Note

The tabBar icon slot has no effect in mini programs.

:::

| Slot Name | Description | Accepted Value |
| --------- | ----------- | -------------- |
| icon      | Icon slot   | -              |

### TabBarItem Slots

| Slot Name | Description | Accepted Value |
| --------- | ----------- | -------------- |
| icon      | Icon slot   | -              |

### Typings

::: details Type Description

```ts
export interface TabBarItem {
    /**
     * Title
     * */
    name: string;
    /**
     * Icon or image
     * */
    icon: string;
    /**
     * Badge value
     * */
    badge?: number;
}
```

:::

### CSS Variables

#### hy-tabbar

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-tabbar-height` | Height | `60px` (bottom safe area is automatically added) |
| `--hy-tabbar-radius` | Top border radius | `15rpx 15rpx 0 0` |
| `--hy-tabbar-padding` | Padding | `0 20rpx` |
| `--hy-tabbar-item-width` | Item width | `60px` |
| `--hy-tabbar-indicator-size` | Indicator size | `50px` |
| `--hy-tabbar-circle-size` | Raised circle size | `40px` |

#### hy-tabbar-group

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-tabbar-group-height` | Height | `100rpx` |
| `--hy-tabbar-group-z-index` | Z-index level | `500` |
| `--hy-tabbar-group-radius` | Capsule mode border radius | Follows `--hy-radius-semicircle` (100px) |
| `--hy-tabbar-group-border` | Top border | Follows `--hy-border-line` |

#### hy-tabbar-item

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-tabbar-item-icon-size` | Icon size | `40rpx` |
| `--hy-tabbar-item-title-font-size` | Title font size | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-tabbar-item-inactive-color` | Inactive color | Follows `--hy-text-color--grey` |

<demo-model url="pages-design/tabBar/tabBar"></demo-model>