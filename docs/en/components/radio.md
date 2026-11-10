# radio Component

> The radio component is generally used in scenarios where a single choice needs to be made from multiple options. This component is fully functional and easy to use

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage

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

You can set `shape` to `square` or `circle` to make the radio square or round

```html
<hy-radio v-model="value" :columns="columns" shape="square"></hy-radio>
<hy-radio v-model="value" :columns="columns" shape="circle"></hy-radio>
```

### Custom Color

```html
<hy-radio v-model="value" :columns="columns" activeColor="red"></hy-radio>
```

### Arrangement

You can set `placement` to `row` or `column` to arrange the radios horizontally or vertically

```html
<hy-radio v-model="value" :columns="columns" placement="row"></hy-radio>
<hy-radio v-model="value" :columns="columns" placement="column"></hy-radio>
```

### Horizontal Alignment

You can set `iconPlacement` to `left` or `right` to align the check icon of the radio to the left or right

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
| columns | Accepts an array of values | `CheckboxColumnsVo[]` | - |
| fieldNames | Custom keys for receiving columns | `IFieldNames` | \{label: "label",value: "value",checked: "checked"\} |
| shape | Radio shape[^1] | `circle`\|`square` | circle |
| size | Radio size[^2] | `string`\|`number` | medium |
| disabled | Whether to disable | `boolean` | false |
| activeColor | Color in selected state | `string` | - |
| inactiveColor | Color in unselected state | `string` | #c8c9cc |
| iconSize | Icon size, numeric values default to px | `string`\|`number` | 20 |
| iconColor | Icon color | `string` | - |
| label | Label text | `string` | - |
| labelSize | Label font size, in px | `string`\|`number` | - |
| labelColor | Label color | `string` | - |
| iconPlacement | Alignment of the check icon | `left`\|`right` | left |
| borderBottom | Whether to show the bottom divider line in vertical layout | `boolean` | false |
| labelDisabled | Whether to disable selecting the radio by clicking the label text | `boolean` | false |
| placement | Layout method[^3] | `row`\|`column` | row |
| customStyle | Custom external styles to apply | `CSSProperties` | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| change | Triggered when any radio's state changes; the callback is an object | detail = array( [elements are the values of the selected radios] ) |

### Slots

| Slot Name | Description            | Passed Values         |
| --------- | ---------------------- | --------------------- |
| icon      | Custom `icon` content  | iconColor \| iconSize |
| label     | Custom `label` content | record                |

### typing

::: details Type Definitions

```ts
interface CheckboxColumnsVo extends FieldNamesType {
    /**
     * Display text content
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

| Variable Name                         | Description                              | Default Value                       |
| ------------------------------------- | ---------------------------------------- | ----------------------------------- |
| `--hy-radio-margin`                   | Outer margin                             | `5px`                               |
| `--hy-radio-radius-square`            | Border radius of the square dot box      | `3px`                               |
| `--hy-radio-disabled-checked-opacity` | Opacity of checked state when disabled   | `0.5`                               |
| `--hy-radio-label-color`              | Label text color                         | Follows `--hy-text-color`           |
| `--hy-radio-font-size`                | Label font size                          | Follows `--hy-font-size-base` (28rpx) |
| `--hy-radio-disabled-color`           | Disabled text color                      | Follows `--hy-text-color--disabled` |
| `--hy-radio-border`                   | Dot box border                           | Follows `--hy-border-line`          |

[^1]: `circle`: semicircular on both ends; `square`: square with rounded corners

[^2]: `normal`: default size; `large`: large size; `small`: small size;

[^3]: `row`: horizontal; `column`: vertical

<demo-model url="pages-design/radio/radio"></demo-model>