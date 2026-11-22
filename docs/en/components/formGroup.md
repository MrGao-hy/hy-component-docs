# FormGroup Form Component

> This component is generally used for quickly building form scenarios. It can configure Input fields, Select popups, perform form validation, and more.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Basic Usage Example

::: code-group

```html [vue]
<!-- 全局使用 -->
<hy-form-group :columns="columns" :formData="formData"></hy-form-group>
```

```ts [index.ts]
import { reactive, ref } from 'vue';
import { HyWarn, FormTypeEnum } from 'hy-app';
import type { FormColumnsType } from 'hy-app';

const formData: AnyObject = reactive({
    custom: '自定义值',
    isShow: true,
    sex: '1',
});
const formRef = ref<InstanceType<typeof HyForm>>(null);

const columns: FormColumnsType[] = reactive([
    {
        field: 'name',
        label: '名字',
        type: FormTypeEnum.TEXT,
        rules: {
            required: true,
            message: '没有填内容',
            trigger: ['blur'],
        },
    },
    {
        field: 'sex',
        label: '性别',
        type: FormTypeEnum.RADIO,
        actions: [
            { label: '女', value: '0' },
            { label: '男', value: '1' },
        ],
        rules: {
            required: true,
            message: '没有填内容',
            trigger: ['blur', 'change'],
        },
    },
    {
        field: 'phone',
        label: '手机号',
        type: FormTypeEnum.TEXT,
        rules: [
            {
                required: true,
                message: '请输入您的手机号',
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
        label: '密码',
        type: FormTypeEnum.PASSWORD,
        rules: {
            type: 'password',
            trigger: ['blur', 'change'],
        },
    },
    {
        field: 'isShow',
        label: '是否禁用',
        type: FormTypeEnum.SWITCH,
    },
    {
        field: 'time',
        label: '日期',
        type: FormTypeEnum.DATE,
        border: 'bottom',
        rules: {
            required: true,
            message: '请输入您的日期',
            trigger: ['blur', 'change'],
        },
    },
    {
        field: 'address',
        label: '地址',
        type: FormTypeEnum.ADDRESS,
        rules: {
            required: true,
            message: '请输入您的地址',
            trigger: ['blur', 'change'],
        },
    },
    {
        field: 'select',
        label: '选择学历',
        type: FormTypeEnum.SELECT,
        select: [
            [
                { text: '小学', id: '1' },
                { text: '初中', id: '2' },
                { text: '高中', id: '3' },
                { text: '大学', id: '4' },
            ],
        ],
        rules: {
            required: true,
            message: '请输入您的学历',
            trigger: ['blur', 'change'],
        },
    },
    {
        field: 'age',
        label: '年龄',
        type: FormTypeEnum.NUMBER,
        rules: [
            {
                required: true,
                message: '请输入您的年龄',
                trigger: ['blur', 'change'],
            },
            {
                required: true,
                message: '不能小于最小值',
                min: 10,
                trigger: ['blur', 'change'],
            },
            {
                message: '不能大于最大值',
                max: 20,
                trigger: ['change'],
            },
        ],
    },
    {
        field: 'remark',
        label: '备注',
        type: FormTypeEnum.TEXTAREA,
        rules: {
            required: true,
            message: '请输入您的地址',
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

WeChat Mini Program difference: WeChat Mini Programs cannot set slots dynamically, so custom slots are not supported. The documentation will be updated if another solution becomes available.

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
        label: '自定义内容',
        type: FormTypeEnum.CUSTOM,
        rules: {
            required: true,
            message: '请输入您的自定义内容',
            trigger: ['blur', 'change'],
        },
    },
]);
```

:::

## API

| Parameter      | Description                                    | Type                       | Default |
| -------------- | ---------------------------------------------- | -------------------------- | ------- |
| columns        | Form field configuration                       | `array`                    | -       |
| formData       | Form values                                    | `object`                   | -       |
| labelPosition  | Position of the form label                     | `left`\|`top`              | left    |
| labelWidth     | Label width                                    | `string`\|`number`         | auto    |
| right          | Whether the input value is right-aligned       | `boolean`                  | false   |
| labelAlign     | Alignment of the label text                    | `left`\|`center`\|`right`  | left    |
| border         | Show a bottom underline for each form row      | `boolean`                  | false   |
| disabled       | Disable the form[^1]                           | `boolean`                  | false   |
| input          | Collection of [Input props API](./input#api)   | `HyInputProps`             | -       |
| textarea       | Collection of [Textarea props API](./textarea#api) | `HyTextareaProps`       | -       |
| picker         | Collection of [Picker props API](./picker#api) | `HyPickerProps`            | -       |
| switchItem     | Collection of [Switch props API](./switch#api) | `HySwitchProps`            | -       |
| radio          | Collection of [Radio props API](./radio#api)   | `HyRadioProps`             | -       |
| checkButton    | Collection of [CheckButton props API](./checkButton#api) | `HyCheckButtonProps` | -       |
| customClass    | Custom external class name                     | `string`                   | -       |
| customStyle    | External styles to be applied                  | `CSSProperties`            | -       |

### columns

| Parameter   | Description                                                       | Type                          | Default |
| ----------- | ----------------------------------------------------------------- | ----------------------------- | ------- |
| label       | Text description                                                  | `string`                      | -       |
| field       | Field name                                                        | `string`                      | -       |
| right       | Content fixed to the right                                        | `boolean`                     | -       |
| type        | [Form type](./formGroup#type) (see the enumerated fields below).  | `enum`                        | -       |
| maxCount    | Maximum number of file uploads (when type is upload)              | `number`                      | -       |
| select      | Picker configuration data collection[^2]                          | `string[][]`\|`{text:string;id:string}[][]` | - |
| actions     | Radio configuration data collection[^3]                           | `string`                      | -       |
| mode        | Date display format (optional when type is date)                  | `enum`                        | -       |
| rules       | Validation rules                                                  | `object`\|`array`             | -       |
| input       | Collection of [Input props API](./input#api)                      | `HyInputProps`                | -       |
| textarea    | Collection of [Textarea props API](./textarea#api)                | `HyTextareaProps`             | -       |
| picker      | Collection of [Picker props API](./picker#api)                    | `HyPickerProps`               | -       |
| switchItem  | Collection of [Switch props API](./switch#api)                    | `HySwitchProps`               | -       |
| radio       | Collection of [Radio props API](./radio#api)                      | `HyRadioProps`                | -       |
| checkButton | Collection of [CheckButton props API](./checkButton#api)          | `HyCheckButtonProps`          | -       |

### actions

| Parameter | Description            | Type                 | Default |
| --------- | ---------------------- | -------------------- | ------- |
| label     | Displayed text content | `string`             | -       |
| value     | The obtained value     | `string`\|`number`   | -       |
| checked   | Whether selected       | `boolean`            | -       |
| disabled  | Whether disabled       | `boolean`            | -       |

### rules

| Parameter | Description                                                        | Type                        | Default |
| --------- | ------------------------------------------------------------------ | --------------------------- | ------- |
| required  | Whether required                                                   | `boolean`                   | -       |
| message   | Error message shown when validation fails                          | `string`                    | -       |
| trigger   | Form event validation                                              | `(blur\|change)[]`          | -       |
| min       | Minimum number of input characters                                 | `number`                    | -       |
| max       | Maximum number of input characters                                 | `number`                    | -       |
| type      | Phone number validation, email validation, complex password validation | `phone`\|`email`\|`password` | -    |
| validator | Custom validation rule                                             | `Function`                  | -       |

### type Values

- `UPLOAD` File upload
- `TEXT` Regular input
- `NUMBER` Number input
- `PASSWORD` Password input
- `ID_CARD` ID card input
- `RADIO` Radio
- `DATE` Date picker
- `SELECT` Selector
- `ADDRESS` Address picker
- `SWITCH` Switch
- `DETAIL` Details
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

| Method        | Description      | Parameters            |
| ------------- | ---------------- | --------------------- |
| validate      | Validate the form | -                    |
| resetFields   | Reset the form    | -                     |
| clearValidate | Clear validation  | `(fields?: string[])` |
| submit        | Submit the form   | -                     |

[^1]: This disabled state takes precedence over the disabled property within columns.

[^2]: Required when type = select (see the [HyPicker](./picker.md) component).

[^3]: Required when type = radio (see the [HyRadio](./radio.md) component).

### FormGroup Slots

| Slot Name | Description                              | Received Values |
| --------- | ---------------------------------------- | --------------- |
| default   | Default slot, used for custom content    | -               |

<demo-model url="pages-design/formGroup/formGroup"></demo-model>