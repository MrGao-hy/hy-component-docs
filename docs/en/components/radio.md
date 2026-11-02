# Radio Component

> The radio component is generally used in scenarios where a selection among multiple options is required. It is fully functional and easy to use.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

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

You can set `shape` to `square` or `circle` to render the selection box as a square or a circle

```html
<hy-radio v-model="value" :columns="columns" shape="square"></hy-radio>
<hy-radio v-model="value" :columns="columns" shape="circle"></hy-radio>
```

### Custom Color

```html
<hy-radio v-model="value" :columns="columns" activeColor="red"></hy-radio>
```

### Layout Direction

You can set `placement` to `row` or `column` to arrange the radios horizontally or vertically

```html
<hy-radio v-model="value" :columns="columns" placement="row"></hy-radio>
<hy-radio v-model="value" :columns="columns" placement="column"></hy-radio>
```

### Horizontal Layout with Icon Positioning

You can set `iconPlacement` to `left` or `right` to align the check icon to the left or to the right

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

- `label`: Custom label text; the passed value is `label`
- `icon`: Custom icon inside the selection box; the passed values are `iconColor` and `iconSize`

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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Two-way bound value | `string`\|`number` | - |
| columns | Accepts an array of options | `CheckboxColumnsVo[]` | - |
| fieldNames | Custom keys for the columns fields | `IFieldNames` | \{label: "label",value: "value",checked: "checked"\} |
| shape | Shape of the selection box[^1] | `circle`\|`square` | circle |
| size | Size of the selection box[^2] | `string`\|`number` | medium |
| disabled | Whether to disable | `boolean` | false |
| activeColor | Color in the selected state | `string` | - |
| inactiveColor | Color in the unselected state | `string` | #c8c9cc |
| iconSize | Icon size; numeric values default to px | `string`\|`number` | 20 |
| iconColor | Icon color | `string` | - |
| label | Label hint text | `string` | - |
| labelSize | Label font size, in px | `string`\|`number` | - |
| labelColor | Label color | `string` | - |
| iconPlacement | Alignment of the check icon | `left`\|`right` | left |
| borderBottom | Whether to show an underline when arranged vertically | `boolean` | false |
| labelDisabled | Whether clicking the label text to select the radio is disabled | `boolean` | false |
| placement | Layout[^3] | `row`\|`column` | row |
| customStyle | External styles to apply | `CSSProperties` | - |

### Events

| Event | Description | Callback Parameters |
| --- | --- | --- |
| change | Triggered when the state of any radio changes; the callback is an object | detail = array( [each element is the value of a selected radio] ) |

### Slots

| Slot | Description              | Passed Value                  |
| ------ | ----------------- | --------------------- |
| icon   | Custom `icon` content  | iconColor \| iconSize |
| label  | Custom `label` content | record                |

### typing

::: details Type Description

```ts
interface CheckboxColumnsVo extends FieldNamesType {
    /**
     * Text content to display
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
     * Custom label key for columns
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

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-radio-margin` | Outer margin | `5px` |
| `--hy-radio-radius-square` | Border radius of the square dot frame | `3px` |
| `--hy-radio-disabled-checked-opacity` | Opacity when disabled and checked | `0.5` |
| `--hy-radio-label-color` | Label text color | Follows `--hy-text-color` |
| `--hy-radio-font-size` | Label font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-radio-disabled-color` | Disabled text color | Follows `--hy-text-color--disabled` |
| `--hy-radio-border` | Dot frame border | Follows `--hy-border-line` |

[^1]: `circle`: semicircles on both sides; `square`: square with rounded corners

[^2]: `normal`: default size; `large`: large size; `small`: small size;

[^3]: `row`: horizontal; `column`: vertical

<demo-model url="pages-design/radio/radio"></demo-model>