# radio Component

> The checkbox component is generally used in scenarios that require multiple choices. This component is fully functional and easy to use

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

You can set the checkbox to a square or round shape by setting `shape` to `square` or `circle`

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

### Horizontal Alignment

You can set the alignment of the checkbox icon to left or right by setting iconPlacement to `left` or `right`

```html
<hy-radio v-model="value" :columns="columns" iconPlacement="right" placement="row"></hy-radio>
<hy-radio v-model="value" :columns="columns" iconPlacement="left" placement="row"></hy-radio>
```

### Disabled

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

- `label`: Custom label text, the passed value is `record`
- `icon`: Custom icon inside the option box, the passed values are `isChecked` and `iconSize`

```html
<hy-radio v-model="value" :columns="columns">
    <template #label="{ record }">
        <view>{{record}}</view>
    </template>
    <template #icon="{ isChecked, iconSize }">
        <view>{{isChecked}}</view>
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
| v-model | Two-way binding value, array type | `string`\|`number` | - |
| columns | Accepts an array value | `CheckboxColumnsVo[]` | - |
| fieldNames | Custom keys for receiving columns | `IFieldNames` | \{label: "label",value: "value",checked: "checked"\} |
| shape | Checkbox shape[^1] | `circle`\|`square` | circle |
| size | Checkbox size[^2] | `string`\|`number` | medium |
| disabled | Whether to disable | `boolean` | false |
| activeColor | Color in the selected state | `string` | - |
| inactiveColor | Color in the unselected state; follows the CSS variable `--hy-radio-icon-color` when not set | `string` | - |
| iconSize | Icon size, numeric values default to px | `string`\|`number` | 20 |
| labelSize | Font size of the label, in px | `string`\|`number` | - |
| labelColor | Color of the label | `string` | - |
| iconPlacement | Alignment of the check icon | `left`\|`right` | left |
| borderBottom | Whether to display the bottom border when arranged vertically | `boolean` | false |
| labelDisabled | Whether to disable selecting the checkbox by clicking the label | `boolean` | false |
| placement | Layout[^3] | `row`\|`column` | row |
| customStyle | Define external styles to be used | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| change | Triggered when the state of any radio changes; the callback is an object | detail = array( [elements are the values of the selected radios] ) |

### Slots

| Slot Name | Description              | Passed Values                  |
| ------ | ----------------- | --------------------- |
| icon   | Custom `icon` content  | isChecked \| iconSize |
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
     * Custom text key for columns
     * */
    label: string;
    /**
     * Custom value key for columns
     * */
    value: string;
    /**
     * Custom checked key for columns
     * */
    checked: string;
}
```

:::

### CSS Variables

| Variable Name | Description | Default Value |
| --- | --- | --- |
| `--hy-radio-margin` | Outer margin | `5px` |
| `--hy-radio-disabled-opacity` | Disabled state opacity | `0.5` |
| `--hy-radio-label-color` | Label text color | Follows `--hy-text-color` |
| `--hy-radio-font-size` | Label font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-radio-disabled-color` | Disabled text color | Follows `--hy-text-color--disabled` |
| `--hy-radio-group-margin-y` | Top and bottom margins of the vertical group | Follows `--hy-border-margin-padding-lg` |
| `--hy-radio-label-line-height` | Option text line height; shrinks the line box so the text center aligns with the icon box center | `1.2` |
| `--hy-radio-icon-margin` | Icon right outer margin | Follows `--hy-border-margin-padding-sm` |
| `--hy-radio-label-margin` | Option text right outer margin | Follows `--hy-border-margin-padding-sm` |
| `--hy-radio-icon-checked-color` | Icon selected color | Follows `--hy-primary` |
| `--hy-radio-icon-color` | Unselected icon color | `#c8c9cc` |

[^1]: `circle`: semicircles on both sides; `square`: square with rounded corners

[^2]: `normal`: default size; `large`: large size; `small`: small size;

[^3]: `row`: horizontal; `column`: vertical

<demo-model url="pages-design/radio/radio"></demo-model>