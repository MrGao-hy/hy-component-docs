# Checkbox

> The checkbox component is generally used in scenarios where multiple selections are needed. It is fully functional and easy to use.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

```html
<template>
    <!-- Global usage -->
    <hy-checkbox v-model="value" :columns="columns"></hy-checkbox>

    <!-- Split components -->
    <hy-checkbox-group v-model="value2">
        <hy-checkbox-item value="f" label="Ferrari" :checked="true"></hy-checkbox-item>
        <hy-checkbox-item value="l" label="Lamborghini"></hy-checkbox-item>
        <hy-checkbox-item value="b" label="Bugatti"></hy-checkbox-item>
        <hy-checkbox-item value="a" label="Aston Martin"></hy-checkbox-item>
    </hy-checkbox-group>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    const columns = [
        {
            label: 'Apple',
            value: 'apply',
        },
        {
            label: 'Banana',
            value: 'banana',
        },
    ];
    const value = ref(['apply']);
    const value2 = ref(['']);
</script>
```

### Custom columns Keys

```html
<template>
    <hy-checkbox v-model="value" :columns="columns" :fieldNames="fieldNames"></hy-checkbox>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    const columns = [
        {
            name: 'Apple',
            value_1: 'apply',
        },
        {
            name: 'Banana',
            value_1: 'banana',
        },
    ];
    const value = ref([]);
    const fieldNames = ref({
        label: 'name',
        value: 'value_1',
        checked: 'checked',
    });
</script>
```

### Single Item Usage

```html
<template>
    <hy-checkbox v-model="value" :columns="columns"></hy-checkbox>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    const value = ref(false);

    const columns = [
        {
            name: 'Remember password',
            value: 1,
        },
    ];
</script>
```

### Custom Shape

You can set the checkbox to square or round by setting `shape` to `square` or `circle`

```html
<hy-checkbox v-model="value" :columns="columns" shape="square"></hy-checkbox>
<hy-checkbox v-model="value" :columns="columns" shape="circle"></hy-checkbox>
```

### Custom Color

```html
<hy-checkbox v-model="value" :columns="columns" activeColor="red"></hy-checkbox>
```

### Arrangement

You can arrange the checkboxes horizontally or vertically by setting `placement` to `row` or `column`

```html
<hy-checkbox v-model="value" :columns="columns" placement="row"></hy-checkbox>
<hy-checkbox v-model="value" :columns="columns" placement="column"></hy-checkbox>
```

### Icon Alignment in Horizontal Layout

You can set the checkbox icon alignment to left or right by setting iconPlacement to `left` or `right`

```html
<hy-checkbox v-model="value" :columns="columns" iconPlacement="right" placement="row"></hy-checkbox>
<hy-checkbox v-model="value" :columns="columns" iconPlacement="left" placement="row"></hy-checkbox>
```

### Disabled

```html
<template>
    <!-- Disable all -->
    <hy-checkbox v-model="value" :columns="columns" disabled></hy-checkbox>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    const columns = [
        {
            label: 'Apple',
            value: 'apply',
            disabled: true, // Disable a single item
        },
        {
            label: 'Banana',
            value: 'banana',
        },
    ];
    const value = ref(['apply']);
</script>
```

### Slots

- `label`: Custom label text, the passed value is `record`
- `icon`: Custom icon inside the option box, the passed values are `isChecked` and `iconSize`

```html
<template>
    <hy-checkbox v-model="value" :columns="columns">
        <template #label="{ record }">
            <view>{{record}}</view>
        </template>
        <template #icon="{ isChecked, iconSize }">
            <view>{{isChecked}}</view>
            <view>{{iconSize}}</view>
        </template>
    </hy-checkbox>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    const columns = [
        {
            label: 'Apple',
            value: 'apply',
        },
        {
            label: 'Banana',
            value: 'banana',
        },
    ];
    const value = ref(['apply']);
</script>
```

## API

### Checkbox Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Two-way binding value, array type | `(string\|number)[]` \|`boolean` | - |
| columns | Accepts an array value | `array` | - |
| fieldNames | Custom keys for receiving columns | `object` | \{label: "label",value: "value",checked: "checked"\} |
| shape | Checkbox shape[^1] | `circle`\|`square` | square |
| size | Checkbox size[^2] | `small`\|`medium`\|`large` \|`string`\|`number` | medium |
| disabled | Whether to disable | `boolean` | false |
| activeColor | Color in the selected state | `string` | - |
| inactiveColor | Color in the unselected state; follows the CSS variable `--hy-checkbox-icon-color` when not set | `string` | - |
| iconSize | Icon size, defaults to px for numeric values | `string`\|`number` | 20 |
| labelSize | Label font size, defaults to px for numeric values | `string`\|`number` | - |
| labelColor | Label color | `string` | - |
| iconPlacement | Alignment of the checkbox icon | `left`\|`right` | left |
| borderBottom | Whether to show the underline in vertical layout | `boolean` | false |
| labelDisabled | Whether to disable selecting the checkbox by clicking the label | `boolean` | false |
| placement | Layout direction[^3] | `row`\|`column` | row |
| customStyle | Defines external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### CheckboxGroup Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Two-way binding value, array type | `(string\|number)[]`\|`boolean` | - |
| shape | Checkbox shape[^1] | `circle`\|`square` | square |
| size | Checkbox size[^2] | `small`\|`medium`\|`large`\|`string`\|`number` | medium |
| disabled | Whether to disable | `boolean` | false |
| activeColor | Color in the selected state | `string` | - |
| inactiveColor | Color in the unselected state; follows the CSS variable `--hy-checkbox-icon-color` when not set | `string` | - |
| iconSize | Icon size, in px | `string`\|`number` | 20 |
| labelSize | Label font size, in px | `string`\|`number` | - |
| labelColor | Label color | `string` | - |
| iconPlacement | Alignment of the checkbox icon | `left`\|`right` | left |
| borderBottom | Whether to show the underline in vertical layout | `boolean` | false |
| labelDisabled | Whether to disable selecting the checkbox by clicking the label | `boolean` | false |
| placement | Layout direction[^3] | `row`\|`column` | row |
| customStyle | Defines external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### CheckboxItem Props

| Parameter   | Description                          | Type               | Default |
| ----------- | ------------------------------------ | ------------------ | ------ |
| value       | Bound value                          | `string`\|`number` | -      |
| label       | Label text                           | `string`           | -      |
| checked     | Whether selected by default          | `boolean`          | false  |
| disabled    | Whether to disable                   | `boolean`          | false  |
| customStyle | Defines external styles to be used   | `CSSProperties`    | -      |
| customClass | Custom external class name           | `string`           | -      |

#### columns

| Parameter | Description          | Type      | Default |
| -------- | ------------- | --------- | ------ |
| label    | Displayed text content | `string`  | -      |
| value    | Value         | `string`  | -      |
| checked  | Whether selected | `boolean` | -      |
| disabled | Whether to disable | `boolean` | -      |

### fieldNames

| Parameter | Description                      | Type     | Default |
| ------- | ------------------------ | -------- | ------- |
| label   | Custom text key of columns    | `string` | label   |
| value   | Custom value key of columns   | `string` | value   |
| checked | Custom checked key of columns | `string` | checked |

## CheckboxItem Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| change | Triggered when the state of any checkbox changes; the callback is an object | detail = array( [elements are the values of the selected checkboxes] ) |

### Checkbox Slots

| Slot Name | Description                          | Passed Values         |
| ------- | ------------------------ | --------------------- |
| icon    | Custom `icon` content          | isChecked \| iconSize |
| label   | Custom `label` content         | record                |
| default | Default slot for custom content | -                     |

### CheckboxItem Slots

| Slot Name | Description           | Passed Values |
| ------ | ------------ | --------- |
| icon   | Custom `icon` content | isChecked |
| label  | Custom `label` content | record    |

### CSS Variables

| Variable Name | Description | Default |
| --- | --- | --- |
| `--hy-checkbox-margin` | Outer margin | `5px` |
| `--hy-checkbox-disabled-opacity` | Disabled state opacity | `0.5` |
| `--hy-checkbox-font-size` | Label font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-checkbox-disabled-color` | Disabled text color | Follows `--hy-text-color--disabled` |
| `--hy-checkbox-label-line-height` | Option text line height; shrinks the line box to center-align text with the icon box | `1.2` |
| `--hy-checkbox-icon-margin` | Right outer margin of the checkbox icon | Follows `--hy-border-margin-padding-sm` |
| `--hy-checkbox-label-margin` | Right outer margin of the option text | Follows `--hy-border-margin-padding-sm` |
| `--hy-checkbox-icon-check-color` | Icon selected color | Follows `--hy-primary` |
| `--hy-checkbox-icon-color` | Unselected icon color | `#c8c9cc` |

[^1]: `circle`: semi-circles on both sides; `square`: square with rounded corners

[^2]: `normal`: default size; `large`: large size; `small`: small size;

[^3]: `row`: horizontal; `column`: vertical

<demo-model url="pages-design/checkbox/checkbox"></demo-model>