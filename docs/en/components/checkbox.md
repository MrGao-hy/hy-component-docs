# Checkbox Component

> The checkbox component is generally used in scenarios requiring multiple selections. It is fully functional and easy to use

## :pushpin: Platform Difference Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<template>
    <!-- Global usage -->
    <hy-checkbox v-model="value" :columns="columns"></hy-checkbox>

    <!-- Separate components -->
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

### Standalone Single

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

You can set the checkbox to square or circular by setting `shape` to `square` or `circle`

```html
<hy-checkbox v-model="value" :columns="columns" shape="square"></hy-checkbox>
<hy-checkbox v-model="value" :columns="columns" shape="circle"></hy-checkbox>
```

### Custom Color

```html
<hy-checkbox v-model="value" :columns="columns" activeColor="red"></hy-checkbox>
```

### Arrangement

You can set the checkboxes to horizontal or vertical arrangement by setting `placement` to `row` or `column`

```html
<hy-checkbox v-model="value" :columns="columns" placement="row"></hy-checkbox>
<hy-checkbox v-model="value" :columns="columns" placement="column"></hy-checkbox>
```

### Horizontal Two-Ends Arrangement

You can set the alignment of the checkbox icon to left-aligned or right-aligned by setting iconPlacement to left or right

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

- `label`: custom label text, passed value is `label`
- `icon`: custom icon inside the option box, passed values are `iconColor` and `iconSize`

```html
<template>
    <hy-checkbox v-model="value" :columns="columns">
        <template #label="{ label }">
            <view>{{label}}</view>
        </template>
        <template #icon="{ iconColor, iconSize }">
            <view>{{iconColor}}</view>
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
| columns | Receives array value | `array` | - |
| fieldNames | Custom keys for columns | `object` | \{label: "label",value: "value",checked: "checked"\} |
| shape | Checkbox shape[^1] | `circle`\|`square` | square |
| size | Checkbox size[^2] | `small`\|`medium`\|`large` \|`string`\|`number` | medium |
| disabled | Whether disabled | `boolean` | false |
| activeColor | Color in selected state | `string` | - |
| inactiveColor | Color in unselected state | `string` | #c8c9cc |
| iconSize | Icon size, default unit is px for numeric values | `string`\|`number` | 20 |
| iconColor | Icon color | `string` | - |
| labelSize | label font size, default unit is px for numeric values | `string`\|`number` | - |
| labelColor | label color | `string` | - |
| iconPlacement | Alignment of the checkbox icon | `left`\|`right` | left |
| borderBottom | Whether to show the bottom line in vertical arrangement | `boolean` | false |
| labelDisabled | Whether to disable selecting the checkbox by clicking the label | `boolean` | false |
| placement | Layout method[^3] | `row`\|`column` | row |
| customStyle | Define external styles to be used | `CSSProperties` | - |

### CheckboxGroup Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Two-way binding value, array type | `(string\|number)[]`\|`boolean` | - |
| shape | Checkbox shape[^1] | `circle`\|`square` | square |
| size | Checkbox size[^2] | `small`\|`medium`\|`large`\|`string`\|`number` | medium |
| disabled | Whether disabled | `boolean` | false |
| activeColor | Color in selected state | `string` | - |
| inactiveColor | Color in unselected state | `string` | #c8c9cc |
| iconSize | Icon size, unit is px | `string`\|`number` | 20 |
| iconColor | Icon color | `string` | - |
| labelSize | label font size, unit is px | `string`\|`number` | - |
| labelColor | label color | `string` | - |
| iconPlacement | Alignment of the checkbox icon | `left`\|`right` | left |
| borderBottom | Whether to show the bottom line in vertical arrangement | `boolean` | false |
| labelDisabled | Whether to disable selecting the checkbox by clicking the label | `boolean` | false |
| placement | Layout method[^3] | `row`\|`column` | row |
| customStyle | Define external styles to be used | `CSSProperties` | - |

### CheckboxItem Props

| Parameter | Description        | Type      | Default |
| -------- | ------------------ | --------- | ------- |
| value    | Binding value      | `string`  | -       |
| label    | label text         | `string`  | -       |
| checked  | Whether selected by default | `boolean` | false   |
| disabled | Whether disabled   | `boolean` | false   |

## columns

| Parameter | Description          | Type      | Default |
| -------- | ------------------- | --------- | ------- |
| label    | Display text content | `string`  | -       |
| value    | Value               | `string`  | -       |
| checked  | Whether selected    | `boolean` | -       |
| disabled | Whether disabled    | `boolean` | -       |

## API

| Parameter | Description                 | Type     | Default |
| --------- | --------------------------- | -------- | ------- |
| label     | Custom text key for columns | `string` | label   |
| value     | Custom value key for columns | `string` | value   |
| checked   | Custom checked key for columns | `string` | checked |

## CheckboxItem Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| change | Triggered when the state of any checkbox changes, the callback is an object | detail = array( [elements are the values of the selected checkboxes] ) |

## CheckboxItem Slots

| Slot Name | Description          | Passed Value          |
| --------- | -------------------- | --------------------- |
| icon      | Custom `icon` content | iconColor \| iconSize |
| label     | Custom `label` content | record                |

[^1]: `circle`: both ends are semicircular; `square`: square with rounded corners

[^2]: `normal`: default size; `large`: large size; `small`: small size;

[^3]: `row`: horizontal; `column`: vertical

<demo-model url="pages-design/checkbox/checkbox"></demo-model>