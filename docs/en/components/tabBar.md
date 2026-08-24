# Bottom Navigation Bar Component

> Bottom navigation bar, used for switching between different pages.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

::: code-group

```html [Template]
<hy-tabbar-group v-model="current" @change="onChange">
    <hy-tabbar-item title="Home" icon="home"></hy-tabbar-item>
    <hy-tabbar-item title="Categories" icon="class"></hy-tabbar-item>
    <hy-tabbar-item title="Mine" icon="mine"></hy-tabbar-item>
</hy-tabbar-group>

<!-- Encapsulated component template -->
<hy-tabbar v-model="fixedCurrent" :list="list" activeColor="red"></hy-tabbar>
```

```ts [Script]
import { ref } from 'vue';

const current = ref(0);
const fixedCurrent = ref('0');
const list = [
    { name: 'Home', icon: IconConfig.HOME },
    { name: 'Categories', icon: IconConfig.HOME },
    { name: 'Shopping Cart', icon: IconConfig.HOME, badge: 10 },
    { name: 'Mine', icon: IconConfig.HOME },
];
```

:::

```javascript
import { IconConfig } from '@hy-app/ui';

const list = [
    { name: 'Home', icon: IconConfig.HOME },
    { name: 'Categories', icon: IconConfig.HOME },
    { name: 'Shopping Cart', icon: IconConfig.HOME, badge: 10 },
    { name: 'Mine', icon: IconConfig.HOME },
];
```

### Badge Notification

- `badgeProp`: Receives badge parameters

::: tip Note

When `isDot` is true, value must have a value; when there is no number, you can fill in true, otherwise it will not be displayed

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

| Parameter   | Description                            | Type             | Default |
| ----------- | -------------------------------------- | ---------------- | ------- |
| modelValue  | Index of the selected item             | `number`         | 0       |
| list        | Navigation bar data collection         | `TabBarListVo[]` | []      |
| fixed       | Whether fixed at the bottom            | `boolean`        | true    |
| placeholder | Whether to show a placeholder element  | `boolean`        | false   |
| color       | Icon and font color                    | `string`         | -       |
| baseBgColor | Track color                            | `string`         | -       |
| bgColor     | Background color                       | `string`         | -       |
| activeColor | Active circular background color       | `string`         | -       |
| badgeProps  | Badge [API properties](./badge#api)    | `HyBadgeProps`   | -       |
| customStyle | Define external styles to be used      | `CSSProperties`  | -       |
| customClass | Custom external class name             | `string`         | -       |

#### list

| Parameter | Description                    | Type   | Default |
| --------- | ------------------------------ | ------ | ------- |
| name      | tabBar name                    | string | -       |
| icon      | icon or image                  | string | -       |
| badge     | Badge value                    | number | -       |

### TabBarGroup Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Index of the selected item | `number` | 0 |
| fixed | Whether fixed at the bottom | `boolean` | false |
| border | Whether to show the top border | `boolean` | true |
| placeholder | Whether to show a placeholder element | `boolean` | true |
| shape | Shape of the navigation bar | `string` | 'square' |
| bgColor | Background color | `string` | - |
| activeColor | Active color | `string` | - |
| inactiveColor | Inactive color | `string` | - |
| safeAreaInsetBottom | Bottom safe area adaptation - mainly used for iPhone X and above models | `boolean` | true |
| iconSize | Icon size | `string`\|`number` | - |
| fontSize | Text size | `string`\|`number` | - |
| badgeProps | Badge properties | `HyBadgeProps` | - |
| zIndex | z-index level | `number` | 10086 |
| customStyle | Define external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### TabBarItem Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Icon | `string` | - |
| title | Title | `string` | - |
| name | Unique identifier | `string`\|`number` | - |
| value | Badge display value; when the badge is a dot, value must be set to true or have a value | `string`\|`number`\|`boolean` | - |

## Events

### TabBar Emits

| Event Name | Description | Callback Parameters |
| ------ | ------------ | ------------- |
| change | Update selected index | value: number |

### TabBarGroup Emits

| Event Name | Description | Callback Parameters |
| ------ | ------------ | -------------------------- |
| change | Update selected index | \{value: string \| number} |

## Slots

### TabBar Slots

::: tip Note

The tabBar icon slot has no effect in mini programs

:::

| Slot Name | Description | Parameters |
| ------ | -------- | ------ |
| icon   | Icon slot | -      |

### TabBarItem Slots

| Slot Name | Description | Parameters |
| ------ | -------- | ------ |
| icon   | Icon slot | -      |

### Typings

::: details Type Description

```ts
export interface TabBarItem {
    /**
     * Title
     * */
    name: string;
    /**
     * icon or image
     * */
    icon: string;
    /**
     * Badge value
     * */
    badge?: number;
}
```

:::

<demo-model url="pages-design/tabBar/tabBar"></demo-model>