# Form Component (hy-form)

> A simple and easy-to-use form component consisting of two components, `hy-form` and `hy-form-item`, supporting form validation, data binding, and more. This form component system provides you with a complete, flexible, and easy-to-use form solution that can meet most form development needs.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :japanese_castle: Component Features

- ✅ Two-way binding of form data
- ✅ Form validation (required, length, type, custom validation)
- ✅ Real-time validation and blur validation
- ✅ Supports multiple form controls
- ✅ Flexible label layout
- ✅ Error message display
- ✅ Form reset and validation clearing

::: danger Notes

1. The form component uses `provide/inject` for data communication, so make sure the `hy-form-item` component is used inside `hy-form`
2. Validation rules support the array format, allowing multiple validation rules to be set
3. A custom validation function returning `true` means validation passed; returning `false` or a string means validation failed
4. Form data is automatically two-way bound, so no manual data synchronization is needed
5. Real-time validation and blur validation are supported, and the validation timing can be controlled via the `trigger` property

:::

### ✅ Form Validation System

- **Required Validation** - Supports the `required` attribute
- **Length Validation** - Supports the `min` and `max` attributes
- **Type Validation** - Supports phone number, email, and password format validation
- **Custom Validation** - Supports custom validation functions
- **Trigger Timing** - Supports validation triggered by `blur` and `change` events

### ✅ Flexible Layout

- Supports label position settings (`left` / `top`)
- Supports custom label width
- Supports label alignment settings

### ✅ Error Message Display

- Displays validation error messages in real time
- Supports clearing validation and resetting the form

### ✅ Rich API

- `validate()` - Validate the form
- `resetFields()` - Reset the form
- `clearValidate()` - Clear validation
- `submit()` - Submit the form

## Validation System

### Validation Types

1. **Required Validation**

    ```javascript
    { required: true, message: 'Please enter username' }
    ```

2. **Length Validation**

    ```javascript
    { min: 2, max: 20, message: 'Length must be between 2 and 20 characters' }
    ```

3. **Type Validation**

    ```javascript
    { type: 'phone', message: 'Please enter a valid phone number' }
    { type: 'email', message: 'Please enter a valid email format' }
    { type: 'password', message: 'Invalid password format' }
    ```

4. **Custom Validation**
    ```javascript
    {
      validator: (value: string) => {
        if (value !== formData.password) {
          return 'The two passwords do not match'
        }
        return true
      }
    }
    ```
5. **Trigger Timing**
    ```ts
    { required: true, message: 'Please enter username', trigger: ['blur', 'change'] }
    ```

### Validation Triggers

- **Real-time Validation** - Triggered when data changes
- **Blur Validation** - Triggered when focus is lost
- **Manual Validation** - Call the `validate()` method

## Style Design

### Responsive Layout

- Supports label position switching (left/top)
- Adaptive label width
- Real-time error message display

### Visual Feedback

- Red asterisk marker for required fields
- Error messages displayed in red text
- Error state styles for form controls

## Usage Recommendations

1. **Form Data Management**
    - Use `reactive` to create reactive form data
    - Avoid modifying form data directly; operate through component methods

2. **Validation Rule Design**
    - Set validation trigger timing appropriately
    - Provide clear error messages
    - Use custom validation to handle complex logic

3. **Performance Optimization**
    - Avoid complex computations in validation functions
    - Use validation trigger timing wisely
    - Clean up unnecessary validation rules promptly

4. **User Experience**
    - Provide instant validation feedback
    - Clear error message hints
    - Support form reset and validation clearing

## Extensibility

This form component is designed with good extensibility:

1. **Supports new form controls** - Just place new controls inside form items
2. **Supports new validation types** - New validation rules can be added to the validation system
3. **Supports custom styles** - Styles can be customized via CSS variables and class names
4. **Supports internationalization** - Error messages can support multiple languages

## :japanese_castle: Basic Usage Example

```vue
<template>
    <hy-form ref="formRef" :model="formData" :rules="rules" label-width="80px">
        <hy-form-item label="Username" prop="username" required>
            <hy-input v-model="formData.username" placeholder="Please enter username" />
        </hy-form-item>

        <hy-form-item label="Phone Number" prop="phone" required>
            <hy-input v-model="formData.phone" type="number" placeholder="Please enter phone number" />
        </hy-form-item>

        <hy-form-item label="Gender" prop="gender">
            <hy-radio v-model="formData.gender" :columns="genderOptions" />
        </hy-form-item>
    </hy-form>
</template>

<script setup lang="ts">
    import { reactive, ref } from 'vue';

    const formData = reactive({
        username: '',
        phone: '',
        gender: '',
    });

    const rules = {
        username: [
            { required: true, message: 'Please enter username', trigger: ['blur', 'change'] },
            {
                min: 2,
                max: 20,
                message: 'Username must be between 2 and 20 characters',
                trigger: ['blur', 'change'],
            },
        ],
        phone: [
            { required: true, message: 'Please enter phone number', trigger: ['blur', 'change'] },
            { type: 'phone', message: 'Please enter a valid phone number', trigger: ['blur', 'change'] },
        ],
    };

    const formRef = ref();

    const handleSubmit = (data: any) => {
        console.log('Form data:', data);
    };
</script>
```

### Validation Rules Example

```javascript
const rules = {
  // Basic validation
  username: [
    { required: true, message: 'Please enter username', trigger: ['blur', 'change'] },
    { min: 2, max: 20, message: 'Username must be between 2 and 20 characters', trigger: ['blur', 'change'] }
  ],

  // Type validation
  phone: [
    { required: true, message: 'Please enter phone number', trigger: ['blur', 'change'] },
    { type: 'phone', message: 'Please enter a valid phone number', trigger: ['blur', 'change'] }
  ],

  // Custom validation
  confirmPassword: [
    { required: true, message: 'Please confirm password' },
    {
      validator: (value: string) => {
        if (value !== formData.password) {
          return 'The two passwords do not match'
        }
        return true
      }
    }
  ],

  // Trigger timing control
  email: [
    {
      type: 'email',
      message: 'Please enter a valid email format',
      trigger: ['blur', 'change']
    }
  ]
}
```

### Complete Example

::: details Click to view the complete example

```vue
<template>
    <view class="form-demo">
        <hy-form
            ref="formRef"
            :model="formData"
            :rules="rules"
            label-width="100px"
            label-position="left"
        >
            <hy-form-item label="Username" prop="username" required>
                <hy-input v-model="formData.username" placeholder="Please enter username" />
            </hy-form-item>

            <hy-form-item label="Phone Number" prop="phone" required>
                <hy-input v-model="formData.phone" type="number" placeholder="Please enter phone number" />
            </hy-form-item>

            <hy-form-item label="Email" prop="email">
                <hy-input v-model="formData.email" placeholder="Please enter email" />
            </hy-form-item>

            <hy-form-item label="Gender" prop="gender">
                <hy-radio v-model="formData.gender" :columns="genderOptions" />
            </hy-form-item>

            <hy-form-item label="Hobbies" prop="hobbies">
                <hy-check-button
                    v-model="formData.hobbies"
                    :columns="hobbyOptions"
                    select-type="multiple"
                />
            </hy-form-item>

            <hy-form-item label="Remarks" prop="remark">
                <hy-textarea v-model="formData.remark" placeholder="Please enter remarks" />
            </hy-form-item>
        </hy-form>

        <view class="form-actions">
            <hy-button type="primary" @click="handleSubmit">Submit</hy-button>
            <hy-button @click="handleReset">Reset</hy-button>
        </view>
    </view>
</template>

<script setup lang="ts">
    import { reactive, ref } from 'vue';

    const formData = reactive({
        username: '',
        phone: '',
        email: '',
        gender: '',
        hobbies: [],
        remark: '',
    });

    const rules = {
        username: [
            { required: true, message: 'Please enter username' },
            {
                min: 2,
                max: 20,
                message: 'Username must be between 2 and 20 characters',
                trigger: ['change', 'blur'],
            },
        ],
        phone: [
            { required: true, message: 'Please enter phone number' },
            { type: 'phone', message: 'Please enter a valid phone number', trigger: ['change', 'blur'] },
        ],
        email: [{ type: 'email', message: 'Please enter a valid email format', trigger: ['change', 'blur'] }],
    };

    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ];

    const hobbyOptions = [
        { label: 'Reading', value: 'reading' },
        { label: 'Music', value: 'music' },
        { label: 'Sports', value: 'sports' },
    ];

    const formRef = ref();

    const handleSubmit = () => {
        const result = formRef.value?.submit();
        if (result) {
            console.log('Form submitted successfully:', result);
        }
    };

    const handleReset = () => {
        formRef.value?.resetFields();
    };
</script>
```

:::

### Encapsulating a Form Component

::: details Click to view the complete example

```vue
<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { type FormColumnsType, FormTypeEnum, type RulesVo } from 'hy-app';

    interface IColumns extends FormColumnsType {
        /**
         * Whether individual validation is needed
         * */
        valid?: boolean;
    }

    interface IProps {
        columns: IColumns[];
        formData: AnyObject;
        rules?: RulesVo | RulesVo[];
        labelWidth?: number | string;
        border?: 'none' | 'round' | 'bottom';
    }

    const props = withDefaults(defineProps<IProps>(), {});
    const formRef = ref();
    const itemRef = ref();
    const showPassword = ref(false);
    const isInput = computed(() => {
        return (temp: string) => {
            return [
                FormTypeEnum.TEXT,
                FormTypeEnum.PASSWORD,
                FormTypeEnum.NUMBER,
                'digit',
            ].includes(temp);
        };
    });

    /**
     * Validate the form
     * */
    const validate = () => {
        return new Promise((resolve, reject) => {
            formRef.value
                .validate()
                .then((isValid: boolean) => resolve(isValid))
                .catch((allErrors: AnyObject) => reject(allErrors));
        });
    };

    defineExpose({
        validate,
        formRef,
        itemRef,
    });
</script>

<template>
    <hy-form ref="formRef" :model="formData" :label-width="labelWidth" :rules="rules">
        <hy-form-item
            v-for="item in columns"
            :key="item.field"
            :label="item.label"
            :prop="item.field"
            ref="itemRef"
        >
            <template v-if="isInput(item.type)">
                <hy-input
                    v-model="formData[item.field]"
                    :prefix-icon="item.input.prefixIcon"
                    :suffix-icon="item.input.suffixIcon"
                    type="text"
                    :placeholder="item.input.placeholder"
                    :border="border"
                    clearable
                    :password="item.type === 'password' && !showPassword"
                    :custom-style="item.input.customStyle"
                    :custom-class="item.input.customClass"
                ></hy-input>
            </template>

            <template v-if="item.type === 'textarea'">
                <hy-textarea
                    v-model="formData[item.field]"
                    :placeholder="item.textarea.placeholder"
                    :border="border"
                    clearable
                ></hy-textarea>
            </template>

            <template v-if="item.type === FormTypeEnum.RADIO">
                <hy-radio
                    v-model="formData[item.field]"
                    :columns="item.actions"
                    size="small"
                ></hy-radio>
            </template>

            <template v-if="item.type === FormTypeEnum.SELECT">
                <hy-picker
                    v-model="formData[item.field]"
                    has-input
                    :columns="item.select"
                    closeOnClickOverlay
                    :input="item.input"
                ></hy-picker>
            </template>

            <template v-if="item.type === FormTypeEnum.DETAIL">
                <text>{{ formData[item.field] }}</text>
            </template>

            <template v-if="item.type === FormTypeEnum.CUSTOM">
                <slot name="custom"></slot>
            </template>
        </hy-form-item>
    </hy-form>
</template>

<style lang="scss" scoped></style>
```

:::

### Usage Example

::: code-group

```vue [.vue]
<template>
    <!-- Form area -->
    <the-form
        ref="registerRef"
        :columns="registerFormColumns"
        :form-data="formData"
        :rules="registerFormRules"
    >
        <template #custom>
            <hy-input
                v-model="formData.code"
                type="number"
                placeholder="Please enter the verification code"
                :maxlength="6"
                :custom-style="{ height: '80rpx', flex: 1 }"
            >
                <template #suffix>
                    <hy-button
                        class="code-button"
                        type="success"
                        :disabled="countdown > 0"
                        @click="getVerificationCode"
                    >
                        {{ codeText }}
                    </hy-button>
                </template>
            </hy-input>
        </template>
    </the-form>
</template>
```

```ts [.ts]
// Form data
const formData = reactive({
    companyName: '',
    creditCode: '',
    producingArea: '',
    invoice: '',
    contactName: '',
    contactUnit: '',
    contactPhone: '',
    code: '',
});
const registerFormColumns = reactive([
    {
        field: 'companyName',
        type: FormTypeEnum.TEXT,
        input: {
            placeholder: 'Please enter the company name',
            prefixIcon: { name: 'qiye', customPrefix: 'icon' },
            customStyle: { height: '80rpx' },
        },
    },
    {
        field: 'creditCode',
        type: FormTypeEnum.NUMBER,
        input: {
            placeholder: 'Please enter the Unified Social Credit Code (18 digits)',
            prefixIcon: { name: 'xinyongdaima', customPrefix: 'icon' },
            customStyle: { height: '80rpx' },
        },
    },
    {
        field: 'producingArea',
        type: FormTypeEnum.SELECT,
        select: [
            [
                { label: 'No base', value: '无基地' },
                { label: 'Planting base', value: '种植基地' },
                { label: 'GAP base', value: 'GAP基地' },
                { label: 'Fresh processing', value: '趁鲜加工' },
                { label: 'Farming base', value: '养殖基地' },
            ],
        ],
        input: {
            placeholder: 'Please select origin information',
            prefixIcon: { name: 'chandiguanli_icox', customPrefix: 'icon' },
            customStyle: { height: '80rpx' },
        },
    },
    {
        field: 'invoice',
        label: 'Invoice Info:',
        type: FormTypeEnum.RADIO,
        actions: [
            {
                label: 'General Invoice',
                value: 'apply',
            },
            {
                label: 'VAT Invoice',
                value: 'banana',
            },
        ],
    },
    {
        field: 'contactName',
        type: FormTypeEnum.TEXT,
        input: {
            placeholder: 'Please enter the contact name',
            prefixIcon: { name: IconConfig.MINE },
            customStyle: { height: '80rpx' },
        },
    },
    {
        field: 'contactUnit',
        type: FormTypeEnum.TEXT,
        input: {
            placeholder: 'Please enter the contact position',
            prefixIcon: { name: 'zhiwu', customPrefix: 'icon' },
            customStyle: { height: '80rpx' },
        },
    },
    {
        field: 'contactPhone',
        type: FormTypeEnum.NUMBER,
        input: {
            placeholder: 'Please enter the contact phone number',
            prefixIcon: { name: IconConfig.TELEPHONE },
            customStyle: { height: '80rpx' },
        },
        valid: true,
    },
    {
        field: 'custom',
        type: FormTypeEnum.CUSTOM,
    },
]);
const registerFormRules = reactive({
    companyName: [
        {
            required: true,
            message: 'Please enter the company name',
            trigger: ['blur', 'change'],
        },
    ],
    creditCode: [
        {
            required: true,
            message: 'Please enter the credit code',
            trigger: ['blur', 'change'],
        },
    ],
    producingArea: {
        required: true,
        message: 'Please select origin information',
    },
    invoice: {
        required: true,
        message: 'Please select the invoice type',
    },
    contactName: [
        {
            required: true,
            message: 'Please enter the contact name',
            trigger: ['blur', 'change'],
        },
    ],
    contactUnit: [
        {
            required: true,
            message: "Please enter the contact's position",
            trigger: ['blur', 'change'],
        },
    ],
    contactPhone: [
        {
            required: true,
            message: "Please enter the contact's phone number",
            trigger: ['blur', 'change'],
        },
        {
            type: 'phone',
            message: 'Please enter a valid phone number',
            trigger: ['blur', 'change'],
        },
    ],
});
```

:::

## API

### hy-form Props

| Parameter     | Description             | Type                             | Default  |
| ------------- | ----------------------- | -------------------------------- | -------- |
| model         | Form data object        | `Record<string, any>`            | -        |
| rules         | Validation rules        | `FormItemRule`\|`FormItemRule[]` | -        |
| border        | Form bottom border      | `boolean`                        | false    |
| labelWidth    | Label width             | `string` \| `number`             | `'auto'` |
| labelPosition | Label position          | `left` \| `top`                  | `'left'` |
| labelAlign    | Label alignment         | `left` \| `center` \| `right`    | `'left'` |

### hy-form-item Props

| Parameter | Description      | Type      | Default |
| --------- | ---------------- | --------- | ------- |
| label     | Label text       | `string`  | -       |
| prop      | Form field name  | `string`  | -       |
| required  | Whether required | `boolean` | `false` |
| rules     | Validation rules | `any`     | `{}`    |

### FormItemRule

> The `rules` type is `{[key: string]: FormItemRule | FormItemRule[]}`

| Parameter | Description                          | Type                             | Default |
| --------- | ------------------------------------ | -------------------------------- | ------ |
| required  | Whether required                     | `boolean`                        | -      |
| message   | Message shown when validation fails  | `string`                         | -      |
| min       | Minimum length                       | `number`                         | -      |
| max       | Maximum length                       | `number`                         | -      |
| type      | Validation type                      | `phone` \| `email` \| `password` | -      |
| trigger   | When to trigger validation           | `(blur \| change)[]`             | -      |
| validator | Custom validation function           | `Function`                       | -      |

## Events

### hy-form Events

| Event Name | Description                    | Callback Parameters                                |
| ---------- | ------------------------------ | -------------------------------------------------- |
| submit     | Triggered on form submit       | `(data: Record<string, any>)`                      |
| validate   | Triggered on form validation   | `(valid: boolean, errors: Record<string, string>)` |

### hy-form-item Events

| Event Name | Description                  | Callback Parameters |
| ---------- | ---------------------------- | ------------------- |
| change     | Triggered when value changes | `(value: any)`      |
| blur       | Triggered on blur            | `(value: any)`      |

## Methods

### hy-form Methods

| Method        | Description      | Parameters           |
| ------------- | ---------------- | -------------------- |
| validate      | Validate the form | -                   |
| resetFields   | Reset the form    | -                   |
| clearValidate | Clear validation  | `(fields?: string[])` |
| submit        | Submit the form   | -                   |

### hy-form-item Methods

| Method        | Description       | Parameters                        |
| ------------- | ----------------- | --------------------------------- |
| validate      | Validate the field | `(trigger?: 'blur' \| 'change')` |
| resetField    | Reset the field    | -                                |
| clearValidate | Clear validation   | -                                |

<demo-model url="pages-design/form/form"></demo-model>