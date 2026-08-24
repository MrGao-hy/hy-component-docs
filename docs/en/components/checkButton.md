# CheckButton Checkbox Button Component

> This component internally implements checkbox and radio buttons through secondary encapsulation of the tag component

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

## Configuring Button Size

- Configure the button size via `size`
    - `large`: Large
    - `medium`: Medium
    - `small`: Small

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

## Configuring Shape

- Set the button shape via the `shape` value;
    - `square`: Square (default)
    - `circle`: Rounded

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

- Set `selectType` to `radio`

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

- Set `selectType` to `checkbox`

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

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Selected value[^1] | `string`\|`number`\| `(string\|number)[]` | - |
| columns | List data | `array` | - |
| fieldNames | Custom keys for columns | `object` | \{label: "label",value: "value",checked: "checked"\} |
| selectType | Single or multiple selection[^2] | `checkbox`\|`radio` | checkbox |
| disabled | Disabled | `boolean` | false |
| col | Sets the column layout of child elements, refer to the CSS property value grid-template-columns | `string` | repeat(3, 1fr) |
| gap | Sets the row spacing; numeric values default to the unit px | `string`\| `number` | 10px |
| type | Tag type[^3] | `error`\|`warning`\|`success` \|`primary`\|`info` | primary |
| size | Tag size[^4] | `small`\|`medium`\|`large` | medium |
| shape | Shape of the tag[^5] | `circle`\|`square` | square |

## columns

| Prop     | Description        | Type      | Default |
| -------- | ------------------ | --------- | ------ |
| label    | Displayed text     | `string`  | -      |
| value    | Value              | `string`  | -      |
| checked  | Whether selected   | `boolean` | -      |
| disabled | Whether disabled   | `boolean` | -      |

## API

| Prop    | Description                     | Type     | Default |
| ------- | ------------------------------- | -------- | ------- |
| label   | Custom text key of columns      | `string` | label   |
| value   | Custom value key of columns     | `string` | value   |
| checked | Custom checked key of columns   | `string` | checked |

## Events

| Event Name | Description      | Callback Parameters |
| ---------- | ---------------- | ------------------- |
| change     | Triggered on selection | -            |

## Slots

| Slot Name | Description | Received Values |
| --------- | ----------- | --------------- |
| name       | -           | -               |

[^1]: When `selectType` is set to `radio`, `v-model` must be passed a string/number; when set to `checkbox`, `v-model` must be passed an array

[^2]: `checkbox`: multiple selection; `radio`: single selection

[^3]: `error`: #fa3534; `warning`: #ff9900; `success`: #19be6b; `primary`: #2979ff; `info`: #909399;

[^4]: `normal`: default size; `large`: large size; `small`: small size;

[^5]: `circle`: semicircular on both ends; `square`: square with rounded corners

<demo-model url="pages-design/checkButton/checkButton"></demo-model>