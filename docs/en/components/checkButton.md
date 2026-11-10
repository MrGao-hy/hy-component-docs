# CheckButton Checkbox Button Component

> This component internally implements checkbox and radio buttons by wrapping the tag component

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<template>
    <!-- Global usage -->
    <hy-check-button v-model="value" :columns="columns"></hy-check-button>
</template>

<script lang="ts" setup>
    import { reactive, ref } from 'vue';

    const value = ref('');
    const columns = reactive([
        { label: 'Teacher', value: 0 },
        { label: 'Nurse', value: 1 },
        { label: 'Flight Attendant', value: 2 },
        { label: 'Writer', value: 3 },
        { label: 'Influencer', value: 4 },
        { label: 'Scientist', value: 5 },
    ]);
</script>
```

## Theme Color

- Configure the theme color via `type`
    - `primary`: Info button (default)
    - `success`: Primary button
    - `info`: Default button
    - `warning`: Warning button
    - `error`: Danger button

::: code-group

```html [vue]
<hy-check-button v-model="value" :columns="columns" :type="type"></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from 'vue';

const value = ref('');
const type = ref<HyApp.ThemeType>('primary');

const columns = reactive([
    { label: 'Teacher', value: 0 },
    { label: 'Nurse', value: 1 },
    { label: 'Flight Attendant', value: 2 },
    { label: 'Writer', value: 3 },
    { label: 'Influencer', value: 4 },
    { label: 'Scientist', value: 5 },
]);
```

:::

## Configure Button Size

- Configure the button size via `size`
    - `large` Large
    - `medium` Medium
    - `small` Small

::: code-group

```html [vue]
<hy-check-button v-model="value" :columns="columns" :type="type"></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from 'vue';

const value = ref('');
const type = ref<HyApp.SizeType>('medium');

const columns = reactive([
    { label: 'Teacher', value: 0 },
    { label: 'Nurse', value: 1 },
    { label: 'Flight Attendant', value: 2 },
    { label: 'Writer', value: 3 },
    { label: 'Influencer', value: 4 },
    { label: 'Scientist', value: 5 },
]);
```

:::

## Configure Shape

- Set the button shape via the `shape` value;
    - `square` for square (default)
    - `circle` for rounded

::: code-group

```html [vue]
<hy-check-button v-model="value" :columns="columns" :shape="shape"></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from 'vue';

const value = ref('');
const type = ref<HyApp.ShapeType>('square');

const columns = reactive([
    { label: 'Teacher', value: 0 },
    { label: 'Nurse', value: 1 },
    { label: 'Flight Attendant', value: 2 },
    { label: 'Writer', value: 3 },
    { label: 'Influencer', value: 4 },
    { label: 'Scientist', value: 5 },
]);
```

:::

## Radio Button

- Set `selectType` to `radio` for single selection

::: code-group

```html [vue]
<hy-check-button v-model="value" :columns="columns" selectType="radio"></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from 'vue';

const value = ref('');

const columns = reactive([
    { label: 'Teacher', value: 0 },
    { label: 'Nurse', value: 1 },
    { label: 'Flight Attendant', value: 2 },
    { label: 'Writer', value: 3 },
    { label: 'Influencer', value: 4 },
    { label: 'Scientist', value: 5 },
]);
```

:::

## Checkbox Button

- Set `selectType` to `checkbox` for multiple selection

::: code-group

```html [vue]
<hy-check-button v-model="value" :columns="columns" selectType="checkbox"></hy-check-button>
```

```ts [index.ts]
import { reactive, ref } from 'vue';

const value = ref([0]);

const columns = reactive([
    { label: 'Teacher', value: 0 },
    { label: 'Nurse', value: 1 },
    { label: 'Flight Attendant', value: 2 },
    { label: 'Writer', value: 3 },
    { label: 'Influencer', value: 4 },
    { label: 'Scientist', value: 5 },
]);
```

:::

## API

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Selected value[^1] | `string`\|`number`\| `(string\|number)[]` | - |
| columns | List data | `array` | - |
| fieldNames | Custom keys for columns | `object` | \{label: "label",value: "value",checked: "checked"\} |
| selectType | Single or multiple selection[^2] | `checkbox`\|`radio` | checkbox |
| disabled | Disabled | `boolean` | false |
| col | Sets the column layout of child elements, refer to the CSS property grid-template-columns | `string` | repeat(3, 1fr) |
| gap | Sets the gap between rows, default unit is px for numeric values | `string`\| `number` | 10px |
| type | Tag type[^3] | `error`\|`warning`\|`success` \|`primary`\|`info` | primary |
| size | Tag size[^4] | `small`\|`medium`\|`large` | medium |
| shape | Shape of the tag[^5] | `circle`\|`square` | square |

## columns

| Parameter | Description | Type | Default |
| -------- | ----------- | --------- | ------ |
| label    | Displayed text content | `string`  | -      |
| value    | Value       | `string`  | -      |
| checked  | Whether selected | `boolean` | -      |
| disabled | Whether disabled | `boolean` | -      |

## API

| Parameter | Description | Type | Default |
| ------- | ---------------------------------- | -------- | ------- |
| label   | Custom text key of columns | `string` | label   |
| value   | Custom value key of columns | `string` | value   |
| checked | Custom checked key of columns | `string` | checked |

## Events

| Event Name | Description | Callback Parameters |
| ------ | ------------------- | -------- |
| change | Triggered on selection | -        |

## Slots

| Slot Name | Description | Received Value |
| ------ | ---- | ------ |
| name   | -    | -      |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-check-button-border-width` | Border width | `2rpx` |
| `--hy-check-button-hover-opacity` | Pressed opacity | `0.8` |
| `--hy-check-button-padding-small` | small padding | `10rpx 16rpx` |
| `--hy-check-button-padding-medium` | medium padding | `16rpx 20rpx` |
| `--hy-check-button-padding-large` | large padding | `20rpx 24rpx` |
| `--hy-check-button-font-size-small` | small font size (line-height follows accordingly) | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-check-button-font-size-medium` | medium font size (line-height follows accordingly) | Follows `--hy-font-size-base` (28rpx) |
| `--hy-check-button-font-size-large` | large font size (line-height follows accordingly) | Follows `--hy-font-size-md` (32rpx) |
| `--hy-check-button-radius-circle` | Circle border radius | Follows `--hy-radius-semicircle` (100px) |
| `--hy-check-button-radius-square` | Square border radius | Follows `--hy-radius-sm` (8rpx) |
| `--hy-check-button-disabled-color` | Disabled text color | Follows `--hy-text-color--disabled` |
| `--hy-check-button-disabled-border-color` | Disabled state border color | Follows `--hy-background--disabled` |

[^1]: When `selectType` is set to `radio`, v-model must be a string/number; when set to `checkbox`, `v-model` must be an array

[^2]: `checkbox`: multiple selection; `radio`: single selection

[^3]: `error`: #fa3534; `warning`: #ff9900; `success`: #19be6b; `primary`: #2979ff; `info`: #909399;

[^4]: `normal`: default size; `large`: large size; `small`: small size;

[^5]: `circle`: semicircular on both ends; `square`: square with rounded corners

<demo-model url="pages-design/checkButton/checkButton"></demo-model>