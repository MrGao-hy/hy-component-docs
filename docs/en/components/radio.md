# Radio Component

> The radio component is generally used for scenarios that require multiple selections. This component is fully featured and easy to use

## :pushpin:Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage Example

```html
<!-- Global usage -->
<hy-radio v-model="value" :columns="columns"></hy-radio>
```

```ts
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
const value = ref('apply');
```

### Custom columns Keys

```html
<hy-radio v-model="value" :columns="columns" :fieldNames="fieldNames"></hy-radio>
```

```ts
import { HyCheckobox } from 'hy-app';
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
const value = ref('');
const fieldNames = ref({
    label: 'name',
    value: 'value_1',
    checked: 'checked',
});
```

### Custom Shape

You can set the checkbox to a square or circle shape by setting `shape` to `square` or `circle`

```html
<hy-radio v-model="value" :columns="columns" shape="square"></hy-radio>
<hy-radio v-model="value" :columns="columns" shape="circle"></hy-radio>
```

### Custom Color

```html
<hy-radio v-model="value" :columns="columns" activeColor="red"></hy-radio>
```

### Arrangement

You can arrange the checkboxes horizontally or vertically by setting `placement` to `row` or `column`

```html
<hy-radio v-model="value" :columns="columns" placement="row"></hy-radio>
<hy-radio v-model="value" :columns="columns" placement="column"></hy-radio>
```

### Horizontal Justified Layout

You can set the alignment of the checkbox selection icon to left-aligned or right-aligned by setting iconPlacement to left or right

```html
<hy-radio v-model="value" :columns="columns" iconPlacement="right" placement="row"></hy-radio>
<hy-radio v-model="value" :columns="columns" iconPlacement="left" placement="row"></hy-radio>
```

### Disable

```html
<!-- Disable all -->
<hy-radio v-model="value" :columns="columns" disabled></hy-radio>
```

```ts
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
const value = ref('apply');
```

### Slots

- `label`: Custom label text, the passed value is `label`
- `icon`: Custom icon inside the option box, the passed values are `iconColor` and `iconSize`

```html
<hy-radio v-model="value" :columns="columns">
    <template #label="{ label }">
        <view>{{label}}</view>
    </template>
    <template #icon="{ iconColor, iconSize }">
        <view>{{iconColor}}</view>
        <view>{{iconSize}}</view>
    </template>
</hy-radio>
```

```ts
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
const value = ref('apply');
```

## API

### Radio Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| v-model | Two-way bound value, array type | `string`\|`number` | - |
| columns | Receives an array value | `CheckboxColumnsVo[]` | - |
| fieldNames | Custom keys for receiving columns | `IFieldNames` | \{label: "label",value: "value",checked: "checked"\} |
| shape | Checkbox shape[^1] | `circle`\|`square` | circle |
| size | Checkbox size[^2] | `string`\|`number` | medium |
| disabled | Whether disabled | `boolean` | false |
| activeColor | Color in selected state | `string` | - |
| inactiveColor | Color when unselected | `string` | #c8c9cc |
| iconSize | Icon size, default unit is px for numeric values | `string`\|`number` | 20 |
| iconColor | Icon color | `string` | - |
| label | Label hint text | `string` | - |
| labelSize | Label font size, in px | `string`\|`number` | - |
| labelColor | Label color | `string` | - |
| iconPlacement | Alignment of the check icon | `left`\|`right` | left |
| borderBottom | Whether to show the bottom line in vertical arrangement | `boolean` | false |
| labelDisabled | Whether to disable selecting the checkbox by clicking the label text | `boolean` | false |
| placement | Layout mode[^3] | `row`\|`column` | row |
| customStyle | Define external styles to be used | `CSSProperties` | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| change | Triggered when any radio's state changes, the callback is an object | detail = array( [elements are the values of the selected radios] ) |

### Slots

| Slot Name | Description              | Passed Values                  |
| ------ | ----------------- | --------------------- |
| icon   | Custom `icon` content  | iconColor \| iconSize |
| label  | Custom `label` content | record                |

### typing

::: details Type Description

```ts
interface CheckboxColumnsVo extends FieldNamesType {
    /**
     * Displayed text content
     * */
    label?: string;
    /**
     * Value
     * */
    value?: string | number;
    /**
     * Whether selected
     * */
    checked?: boolean;

    /**
     * Whether disabled
     * */
    disabled?: boolean;
}

export interface IFieldNames {
    /**
     * Custom text key of columns
     * */
    label: string;
    /**
     * Custom value key of columns
     * */
    value: string;
    /**
     * Custom checked key of columns
     * */
    checked: string;
}
```

:::

[^1]: `circle`: semicircular on both sides; `square`: square with rounded corners

[^2]: `normal`: default size; `large`: large size; `small`: small size;

[^3]: `row`: horizontal; `column`: vertical

<demo-model url="pages-design/radio/radio"></demo-model>