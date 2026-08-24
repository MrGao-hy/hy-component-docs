# FormGroup Form Component

> This component is generally used for quickly building form scenarios. It can configure Input fields, Select popups, perform form validation, and more.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Basic Usage Example

::: code-group

```html [vue]
<!-- Global usage -->
<hy-form-group :columns="columns" :formData="formData"></hy-form-group>
```

```ts [index.ts]
import { reactive, ref } from 'vue';
import { HyWarn, FormTypeEnum } from 'hy-app';
import type { FormColumnsType } from 'hy-app';

const formData: AnyObject = reactive({
    custom: 'Custom value',
    isShow: true,
    sex: '1',
});
const formRef = ref<InstanceType<typeof HyForm>>(null);

const columns: FormColumnsType[] = reactive([
    {
        field: 'name',
        label: 'Name',
        type: FormTypeEnum.TEXT,
        rules: {
            required: true,
            message: 'No content entered',
            trigger: ['blur'],
        },
    },
    {
        field: 'sex',
        label: 'Gender',
        type: FormTypeEnum.RADIO,
        actions: [
            { label: 'Female', value: '0' },
            { label: 'Male', value: '1' },
        ],
        rules: {
            required: true,
            message: 'No content entered',
            trigger: ['blur', 'change'],
        },
    },
    {
        field: 'phone',
        label: 'Phone Number',
        type: FormTypeEnum.TEXT,
        rules: [
            {
                required: true,
                message: 'Please enter your phone number',
                trigger: ['blur', 'change'],
            },
            {
                type: 'phone',
                trigger: ['blur', 'change'],
            },
        ],
    },
    {
        field: 'password',
        label: 'Password',
        type: FormTypeEnum.PASSWORD,
        rules: {
            type: 'password',
            trigger: ['blur', 'change'],
        },
    },
    {
        field: 'isShow',
        label: 'Disabled',
        type: FormTypeEnum.SWITCH,
    },
    {
        field: 'time',
        label: 'Date',
        type: FormTypeEnum.DATE,
        border: 'bottom',
        rules: {
            required: true,
            message: 'Please enter your date',
            trigger: ['blur', 'change'],
        },
    },
    {
        field: 'address',
        label: 'Address',
        type: FormTypeEnum.ADDRESS,
        rules: {
            required: true,
            message: 'Please enter your address',
            trigger: ['blur', 'change'],
        },
    },
    {
        field: 'select',
        label: 'Select Education',
        type: FormTypeEnum.SELECT,
        select: [
            [
                { text: 'Primary School', id: '1' },
                { text: 'Junior High', id: '2' },
                { text: 'Senior High', id: '3' },
                { text: 'University', id: '4' },
            ],
        ],
        rules: {
            required: true,
            message: 'Please select your education',
            trigger: ['blur', 'change'],
        },
    },
    {
        field: 'age',
        label: 'Age',
        type: FormTypeEnum.NUMBER,
        rules: [
            {
                required: true,
                message: 'Please enter your age',
                trigger: ['blur', 'change'],
            },
            {
                required: true,
                message: 'Cannot be less than the minimum value',
                min: 10,
                trigger: ['blur', 'change'],
            },
            {
                message: 'Cannot exceed the maximum value',
                max: 20,
                trigger: ['change'],
            },
        ],
    },
    {
        field: 'remark',
        label: 'Remarks',
        type: FormTypeEnum.TEXTAREA,
        rules: {
            required: true,
            message: 'Please enter your address',
            trigger: ['blur', 'change'],
        },
    },
]);

const handleSubmit = () => {
    formRef.value.submit().then((res) => {
        console.log(res);
    });
};
```

:::

## Custom Slots

::: danger Note

WeChat Mini Program difference: WeChat Mini Programs cannot dynamically set slots, so custom slots are not supported. The documentation will be updated if other solutions become available.

:::

::: code-group

```vue
<template>
    <hy-form ref="formRef" :columns="columns" :form-data="formData" labelWidth="90">
        <template #custom="{ record, errorStyle }">
            <hy-input v-model="formData[record.field]" :custom-style="errorStyle"></hy-input>
        </template>
    </hy-form>
</template>
```

```ts [index.ts]
import { reactive } from 'vue';
import { FormTypeEnum, HyForm, HyInput } from 'hy-app';
import type { FormColumnsType } from 'hy-app';

const columns: FormColumnsType[] = reactive([
    {
        field: 'custom',
        label: 'Custom Content',
        type: FormTypeEnum.CUSTOM,
        rules: {
            required: true,
            message: 'Please enter your custom content',
            trigger: ['blur', 'change'],
        },
    },
]);
```

:::

## API

| Parameter      | Description                                          | Type                       | Default |
| -------------- | ---------------------------------------------------- | -------------------------- | ------- |
| columns        | Form field configuration                             | `array`                    | -       |
| formData       | Form values                                          | `object`                   | -       |
| labelPosition  | Position of the form label                           | `left`\|`top`              | left    |
| labelWidth     | Label width                                          | `string`\|`number`         | auto    |
| right          | Whether input values are right-aligned               | `boolean`                  | false   |
| labelAlign     | Alignment of the label text                          | `left`\|`center`\|`right`  | left    |
| border         | Show bottom underline for each form row              | `boolean`                  | false   |
| disabled       | Disable the form[^1]                                 | `boolean`                  | false   |
| input          | Collection of [Input API properties](./input#api)    | `HyInputProps`             | -       |
| textarea       | Collection of [Textarea API properties](./textarea#api) | `HyTextareaProps`       | -       |
| picker         | Collection of [Picker API properties](./picker#api)  | `HyPickerProps`            | -       |
| switchItem     | Collection of [Switch API properties](./switch#api)  | `HySwitchProps`            | -       |
| radio          | Collection of [Radio API properties](./radio#api)    | `HyRadioProps`             | -       |
| checkButton    | Collection of [CheckButton API properties](./checkButton#api) | `HyCheckButtonProps` | -       |

### columns

| Parameter  | Description                                                             | Type                          | Default |
| ---------- | ----------------------------------------------------------------------- | ----------------------------- | ------- |
| label      | Text description                                                        | `string`                      | -       |
| field      | Field name                                                              | `string`                      | -       |
| right      | Pin content to the right                                                | `boolean`                     | -       |
| type       | [Form type](./formGroup#type) (see the enumerated fields below).        | `enum`                        | -       |
| maxCount   | Maximum number of file uploads (when type is upload)                    | `number`                      | -       |
| select     | Picker configuration data collection[^2]                                | `string[][]`\|`{text:string;id:string}[][]` | - |
| actions    | Radio configuration data collection[^3]                                 | `string`                      | -       |
| mode       | Date display format (optional when type is date)                        | `enum`                        | -       |
| rules      | Validation rules                                                        | `object`\|`array`             | -       |
| input      | Collection of [Input API properties](./input#api)                       | `HyInputProps`                | -       |
| textarea   | Collection of [Textarea API properties](./textarea#api)                 | `HyTextareaProps`             | -       |
| picker     | Collection of [Picker API properties](./picker#api)                     | `HyPickerProps`               | -       |
| switchItem | Collection of [Switch API properties](./switch#api)                     | `HySwitchProps`               | -       |
| radio      | Collection of [Radio API properties](./radio#api)                       | `HyRadioProps`                | -       |
| checkButton| Collection of [CheckButton API properties](./checkButton#api)           | `HyCheckButtonProps`          | -       |

### actions

| Parameter | Description           | Type                | Default |
| --------- | --------------------- | ------------------- | ------- |
| label     | Displayed text content | `string`           | -       |
| value     | Retrieved value       | `string`\|`number`  | -       |
| checked   | Whether selected      | `boolean`           | -       |
| disabled  | Whether disabled      | `boolean`           | -       |

### rules

| Parameter | Description                                                         | Type                         | Default |
| --------- | ------------------------------------------------------------------- | ---------------------------- | ------- |
| required  | Whether required                                                    | `boolean`                    | -       |
| message   | Message shown when validation fails                                 | `string`                     | -       |
| trigger   | Form event validation                                               | `(blur\|change)[]`           | -       |
| min       | Minimum number of input characters                                  | `number`                     | -       |
| max       | Maximum number of input characters                                  | `number`                     | -       |
| type      | Phone number, email, or complex password validation                 | `phone`\|`email`\|`password` | -       |
| validator | Custom validation rule                                              | `Function`                   | -       |

### type Values

- `UPLOAD` File upload
- `TEXT` Regular text input
- `NUMBER` Number input
- `PASSWORD` Password input
- `ID_CARD` ID card input
- `RADIO` Radio
- `DATE` Time picker
- `SELECT` Selector
- `ADDRESS` Address picker
- `SWITCH` Switch
- `DETAIL` Detail
- `TEXTAREA` Textarea
- `CUSTOM` Custom slot

### mode Values

- `DATETIME` yyyy-MM-dd HH:mm:SS
- `DATE` yyyy-MM-dd
- `TIME` hh:MM:ss
- `YEAR_MONTH` yyyy-MM
- `MONTH_DAY` MM-dd
- `HOUR_MINUTE` HH:mm
- `MINUTE_SECOND` mm:SS

## Methods

| Method Name   | Description     | Parameters            |
| ------------- | --------------- | --------------------- |
| validate      | Validate the form | -                   |
| resetFields   | Reset the form    | -                   |
| clearValidate | Clear validation  | `(fields?: string[])` |
| submit        | Submit the form   | -                   |

[^1]: This disabled option takes priority over the disabled setting in columns

[^2]: Required when type = select (see the [HyPicker](./picker.md) component)

[^3]: Required when type = radio (see the [HyRadio](./radio.md) component)

<demo-model url="pages-design/formGroup/formGroup"></demo-model>