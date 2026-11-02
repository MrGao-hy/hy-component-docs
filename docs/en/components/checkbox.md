# Checkbox Component

> The checkbox component is generally used in scenarios where multiple selections are needed. It is fully functional and easy to use.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage

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

### Single Item

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

You can arrange the checkboxes horizontally or vertically by setting `placement` to `row` or `column`

```html
<hy-checkbox v-model="value" :columns="columns" placement="row"></hy-checkbox>
<hy-checkbox v-model="value" :columns="columns" placement="column"></hy-checkbox>
```

### Horizontal Both-Ends Arrangement

You can set the alignment of the checkbox icon to left or right by setting iconPlacement to `left` or `right`

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

- `label`: Custom label text, the passed value is `label`
- `icon`: Custom icon inside the checkbox, the passed values are `iconColor` and `iconSize`

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
| columns | Accepts an array value | `array` | - |
| fieldNames | Custom keys for receiving columns | `object` | \{label: "label",value: "value",checked: "checked"\} |
| shape | Checkbox shape[^1] | `circle`\|`square` | square |
| size | Checkbox size[^2] | `small`\|`medium`\|`large` \|`string`\|`number` | medium |
| disabled | Whether to disable | `boolean` | false |
| activeColor | Color in the selected state | `string` | - |
| inactiveColor | Color in the unselected state | `string` | #c8c9cc |
| iconSize | Icon size, numbers default to px | `string`\|`number` | 20 |
| iconColor | Icon color | `string` | - |
| labelSize | Label font size, numbers default to px | `string`\|`number` | - |
| labelColor | Label color | `string` | - |
| iconPlacement | Alignment of the check icon | `left`\|`right` | left |
| borderBottom | Whether to show an underline in vertical layout | `boolean` | false |
| labelDisabled | Whether to prevent clicking the label to select the checkbox | `boolean` | false |
| placement | Layout[^3] | `row`\|`column` | row |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |

### CheckboxGroup Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Two-way binding value, array type | `(string\|number)[]`\|`boolean` | - |
| shape | Checkbox shape[^1] | `circle`\|`square` | square |
| size | Checkbox size[^2] | `small`\|`medium`\|`large`\|`string`\|`number` | medium |
| disabled | Whether to disable | `boolean` | false |
| activeColor | Color in the selected state | `string` | - |
| inactiveColor | Color in the unselected state | `string` | #c8c9cc |
| iconSize | Icon size, in px | `string`\|`number` | 20 |
| iconColor | Icon color | `string` | - |
| labelSize | Label font size, in px | `string`\|`number` | - |
| labelColor | Label color | `string` | - |
| iconPlacement | Alignment of the check icon | `left`\|`right` | left |
| borderBottom | Whether to show an underline in vertical layout | `boolean` | false |
| labelDisabled | Whether to prevent clicking the label to select the checkbox | `boolean` | false |
| placement | Layout[^3] | `row`\|`column` | row |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |

### CheckboxItem Props

| Parameter | Description | Type | Default |
| -------- | ------------- | --------- | ------ |
| value    | Binding value        | `string`  | -      |
| label    | Label text | `string`  | -      |
| checked  | Whether selected by default  | `boolean` | false  |
| disabled | Whether to disable      | `boolean` | false  |

## columns

| Parameter | Description | Type | Default |
| -------- | ------------ | --------- | ------ |
| label    | Displayed text content | `string`  | -      |
| value    | Value           | `string`  | -      |
| checked  | Whether selected     | `boolean` | -      |
| disabled | Whether to disable     | `boolean` | -      |

## API

| Parameter | Description | Type | Default  |
| ------- | --------------------- | -------- | ------- |
| label   | Custom text key for columns | `string` | label   |
| value   | Custom value key for columns   | `string` | value   |
| checked | Custom checked key for columns | `string` | checked |

## CheckboxItem Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| change | Triggered when any checkbox state changes, the callback is an object | detail = array( [elements are the values of the selected checkboxes] ) |

## CheckboxItem Slots

| Slot Name | Description | Passed Values |
| ------ | ----------------- | --------------------- |
| icon   | Custom `icon` content  | iconColor \| iconSize |
| label  | Custom `label` content | record                |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-checkbox-margin` | Outer margin | `5px` |
| `--hy-checkbox-radius-square` | Border radius of square checkbox | `3px` |
| `--hy-checkbox-disabled-checked-opacity` | Opacity when disabled and checked | `0.5` |
| `--hy-checkbox-font-size` | Label font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-checkbox-disabled-color` | Disabled text color | Follows `--hy-text-color--disabled` |
| `--hy-checkbox-border` | Checkbox border | Follows `--hy-border-line` |


[^1]: `circle`: both sides are semicircular; `square`: square with rounded corners

[^2]: `normal`: default size; `large`: large size; `small`: small size;

[^3]: `row`: horizontal; `column`: vertical

<demo-model url="pages-design/checkbox/checkbox"></demo-model>