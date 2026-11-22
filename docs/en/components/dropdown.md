# Dropdown Menu Component

> A dropdown menu component used to display filter conditions or selection options, with support for multi-level menu selection.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

::: warning Notes

- This component must be used together with `hy-dropdown` and `hy-dropdown-item`
- `hy-dropdown-item` must be nested inside `hy-dropdown`
- Use `v-model` to two-way bind the `value` of the selected item
- Each item in the array passed to the `menus` prop must contain `label` and `value` fields
- Clicking a menu item automatically closes other expanded menus

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-dropdown>
        <hy-dropdown-item
            title="All"
            :menus="options1"
            v-model="value1"
            @change="handleChange"
        ></hy-dropdown-item>
        <hy-dropdown-item
            title="Chinese Animation"
            :menus="options_2"
            v-model="value_2"
            @change="handleChange"
        ></hy-dropdown-item>
        <hy-dropdown-item
            title="Country"
            :menus="options_3"
            v-model="value_3"
            @change="handleChange"
        ></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value1 = ref();
    const value_2 = ref();
    const value_3 = ref();

    const options1 = ref([
        { label: 'All Products', value: 1 },
        { label: 'Discounted Products', value: 2 },
        { label: 'Group-buy Products', value: 3 },
    ]);

    const options_2 = ref([
        { label: 'Journey to the West', value: 1 },
        { label: 'Battle Through the Heavens', value: 2 },
        { label: 'Swallowed Star', value: 3 },
        { label: 'Soul Land', value: 4 },
        { label: 'Stealing Hearts in September', value: 5 },
    ]);

    const options_3 = ref([
        { label: 'China', value: 1 },
        { label: 'Japan', value: 2 },
        { label: 'South Korea', value: 3 },
        { label: 'United States', value: 4 },
    ]);

    const handleChange = (item, index) => {
        console.log('Selected:', item.label, 'Index:', index);
    };
</script>
```

### Custom Colors

```html
<template>
    <hy-dropdown activeColor="#4F8EF7" inactiveColor="#999999">
        <hy-dropdown-item title="Category" :menus="options" v-model="value"></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref();
    const options = ref([
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
    ]);
</script>
```

### Custom Menu Height and Font Size

```html
<template>
    <hy-dropdown :height="50" titleSize="18">
        <hy-dropdown-item title="Menu" :menus="options" v-model="value"></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref();
    const options = ref([
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
    ]);
</script>
```

### Disable an Item

```html
<template>
    <hy-dropdown>
        <hy-dropdown-item title="Selectable Menu" :menus="options" v-model="value"></hy-dropdown-item>
        <hy-dropdown-item
            title="Disabled Menu"
            :menus="options"
            v-model="disabledValue"
            disabled
        ></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref();
    const disabledValue = ref();
    const options = ref([
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
    ]);
</script>
```

### Show Bottom Border

```html
<template>
    <hy-dropdown borderBottom>
        <hy-dropdown-item title="Menu" :menus="options" v-model="value"></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref();
    const options = ref([
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
    ]);
</script>
```

### Custom Icon

```html
<template>
    <hy-dropdown menuIcon="arrow-up" :menuIconSize="16">
        <hy-dropdown-item title="Menu" :menus="options" v-model="value"></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref();
    const options = ref([
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
    ]);
</script>
```

## API

### Dropdown Props

| Prop             | Description                                                    | Type               | Default  |
| ---------------- | -------------------------------------------------------------- | ------------------ | -------- |
| height           | Height of the title menu; numeric values default to px         | `string`\|`number` | 40       |
| borderBottom     | Whether to show the bottom border of the title menu            | `boolean`          | false    |
| sticky           | Whether to use fixed positioning                               | `boolean`          | true     |
| activeColor      | Color of the selected title and tab                            | `string`           | -        |
| inactiveColor    | Color of the unselected title and tab                          | `string`           | #606266  |
| titleSize        | Font size of the selected title and tab; defaults to px        | `string`\|`number` | -        |
| closeOnClickMask | Close the popup when the mask is clicked                       | `boolean`          | true     |
| menuIcon         | Name of the icon on the right side of the title menu           | `string`           | DOWN_FILL |
| menuIconSize     | Size of the icon on the right side of the title menu; defaults to px | `string`\|`number` | 14  |
| customStyle      | Custom external styles                                         | `CSSProperties`    | -        |
| customClass      | Custom external class name                                     | `string`           | -        |

### DropdownItem Props

| Prop        | Description                                  | Type               | Default |
| ----------- | -------------------------------------------- | ------------------ | ------- |
| v-model     | Two-way binding of the selected item's value | `string`\|`number` | -       |
| title       | Menu item title                              | `string`           | -       |
| menus       | Option data                                  | `array`            | []      |
| disabled    | Whether clicks are disabled                  | `boolean`          | false   |
| customStyle | Custom external styles                       | `CSSProperties`    | -       |
| customClass | Custom external class name                   | `string`           | -       |

### Events

| Event Name | Description                    | Callback Parameters                             |
| ---------- | ------------------------------ | ----------------------------------------------- |
| change     | Triggered when an option is clicked | `item: DropdownMenuItem`, `index: number`  |

## Slots

### Dropdown Slots

| Slot Name | Description               | Accepted Values |
| --------- | ------------------------- | --------------- |
| default   | Dropdown menu item content | -               |

### DropdownItem Slots

| Slot Name | Description               | Accepted Values |
| --------- | ------------------------- | --------------- |
| default   | Custom menu item content  | -               |

## Typings

::: details Type Definitions

```ts
export interface DropdownMenuItem {
    /** Display label */
    label: string;
    /** Value */
    value: string | number;
}
```

:::

### CSS Variables

| Variable Name                          | Description                   | Default                                |
| -------------------------------------- | ----------------------------- | -------------------------------------- |
| `--hy-dropdown-item-border`            | List item divider             | Follows `--hy-border-line`             |
| `--hy-dropdown-background`             | Background color              | Follows `--hy-background`              |
| `--hy-dropdown-item-header-background` | Header background color       | Follows `--hy-background--container`   |
| `--hy-dropdown-item-header-padding`    | Header padding                | Follows `--hy-border-margin-padding-base` |
| `--hy-dropdown-item-icon-color`        | Icon color                    | Follows `--hy-icon-color`              |
| `--hy-dropdown-item-panel-background`  | Dropdown panel background color | Follows `--hy-background--container` |
| `--hy-dropdown-item-primary`           | Theme color                   | Follows `--hy-primary`                 |

<demo-model url="pages-design/dropdown/dropdown"></demo-model>