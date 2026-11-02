# Dropdown

> A dropdown menu component used to display filter conditions or selection options, with support for multi-level menu selection.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Note

- This component must be used together with `hy-dropdown` and `hy-dropdown-item`
- `hy-dropdown-item` must be nested inside `hy-dropdown`
- Use `v-model` to two-way bind the selected item's `value`
- Items in the array passed via the `menus` prop must contain `label` and `value` fields
- Clicking a menu item automatically closes other expanded menus

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-dropdown>
        <hy-dropdown-item
            title="全部"
            :menus="options1"
            v-model="value1"
            @change="handleChange"
        ></hy-dropdown-item>
        <hy-dropdown-item
            title="国漫"
            :menus="options_2"
            v-model="value_2"
            @change="handleChange"
        ></hy-dropdown-item>
        <hy-dropdown-item
            title="国家"
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
        { label: '全部商品', value: 1 },
        { label: '折扣商品', value: 2 },
        { label: '团购商品', value: 3 },
    ]);

    const options_2 = ref([
        { label: '西行记', value: 1 },
        { label: '斗破苍穹', value: 2 },
        { label: '吞噬星空', value: 3 },
        { label: '斗罗大陆', value: 4 },
        { label: '偷心九月天', value: 5 },
    ]);

    const options_3 = ref([
        { label: '中国', value: 1 },
        { label: '日本', value: 2 },
        { label: '韩国', value: 3 },
        { label: '美国', value: 4 },
    ]);

    const handleChange = (item, index) => {
        console.log('选中:', item.label, '索引:', index);
    };
</script>
```

### Custom Colors

```html
<template>
    <hy-dropdown activeColor="#4F8EF7" inactiveColor="#999999">
        <hy-dropdown-item title="分类" :menus="options" v-model="value"></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref();
    const options = ref([
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
    ]);
</script>
```

### Custom Menu Height and Font Size

```html
<template>
    <hy-dropdown :height="50" titleSize="18">
        <hy-dropdown-item title="菜单" :menus="options" v-model="value"></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref();
    const options = ref([
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
    ]);
</script>
```

### Disable an Item

```html
<template>
    <hy-dropdown>
        <hy-dropdown-item title="可选菜单" :menus="options" v-model="value"></hy-dropdown-item>
        <hy-dropdown-item
            title="禁用菜单"
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
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
    ]);
</script>
```

### Show Bottom Border

```html
<template>
    <hy-dropdown borderBottom>
        <hy-dropdown-item title="菜单" :menus="options" v-model="value"></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref();
    const options = ref([
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
    ]);
</script>
```

### Custom Icon

```html
<template>
    <hy-dropdown menuIcon="arrow-up" :menuIconSize="16">
        <hy-dropdown-item title="菜单" :menus="options" v-model="value"></hy-dropdown-item>
    </hy-dropdown>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const value = ref();
    const options = ref([
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
    ]);
</script>
```

## API

### Dropdown Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| height | Height of the title menu; numbers default to px | `string`\|`number` | 40 |
| borderBottom | Whether the title menu shows a bottom border | `boolean` | false |
| sticky | Whether to use fixed positioning | `boolean` | true |
| activeColor | Color of the title and option tabs when selected | `string` | - |
| inactiveColor | Color of the title and option tabs when not selected | `string` | #606266 |
| titleSize | Font size of the title and option tabs when selected; numbers default to px | `string`\|`number` | - |
| closeOnClickMask | Close the popup when the mask is clicked | `boolean` | true |
| menuIcon | Icon name shown on the right side of the title menu | `string` | ARROW_DOWN_FILL |
| menuIconSize | Size of the icon on the right side of the title menu; numbers default to px | `string`\|`number` | 14 |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |

### DropdownItem Props

| Prop     | Description                    | Type               | Default |
| -------- | ----------------------- | ------------------ | ------ |
| v-model  | Two-way binding of the selected item's value | `string`\|`number` | -      |
| title    | Menu item title              | `string`           | -      |
| menus    | Option data                | `array`            | []     |
| disabled | Whether clicks are disabled            | `boolean`          | false  |

### Events

| Event | Description               | Callback Parameters                                  |
| ------ | ------------------ | ----------------------------------------- |
| change | Triggered when an option is clicked | `item: DropdownMenuItem`, `index: number` |

## Slots

### Dropdown Slots

| Slot  | Description           | Accepted Values |
| ------- | -------------- | ------ |
| default | Dropdown menu item content | -      |

### DropdownItem Slots

| Slot  | Description             | Accepted Values |
| ------- | ---------------- | ------ |
| default | Custom menu item content | -      |

## Typings

::: details Type Definitions

```ts
export interface DropdownMenuItem {
    /** 展示标题 */
    label: string;
    /** 值 */
    value: string | number;
}
```

:::

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-dropdown-item-border` | List item divider | Follows `--hy-border-line` |

<demo-model url="pages-design/dropdown/dropdown"></demo-model>