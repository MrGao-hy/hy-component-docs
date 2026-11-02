# Form Component (hy-form)

> A simple and easy-to-use form component consisting of two components, `hy-form` and `hy-form-item`, with support for form validation, data binding, and more. This form component system provides you with a complete, flexible, and easy-to-use form solution that can meet most form development needs.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle: Component Features

- ✅ Two-way binding of form data
- ✅ Form validation (required, length, type, custom validation)
- ✅ Real-time and blur validation
- ✅ Support for various form controls
- ✅ Flexible label layout
- ✅ Error message display
- ✅ Form reset and validation clearing

::: danger Notes

1. The form component uses `provide/inject` for data communication; make sure the `hy-form-item` component is used inside `hy-form`
2. Validation rules support the array form, allowing multiple validation rules to be set
3. A custom validation function returns `true` to indicate the validation passed, and `false` or a string to indicate the validation failed
4. Form data is automatically two-way bound, so no manual data synchronization is needed
5. Real-time validation and blur validation are supported, and the validation timing can be controlled via the `trigger` property

:::

### ✅ Form Validation System

- **Required validation** - Supported via the `required` attribute
- **Length validation** - Supported via the `min` and `max` attributes
- **Type validation** - Supports phone number, email, and password format validation
- **Custom validation** - Supports custom validation functions
- **Trigger timing** - Supports validation triggered by `blur` and `change` events

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
    { required: true, message: '请输入用户名' }
    ```

2. **Length Validation**

    ```javascript
    { min: 2, max: 20, message: '长度在 2 到 20 个字符' }
    ```

3. **Type Validation**

    ```javascript
    { type: 'phone', message: '请输入正确的手机号' }
    { type: 'email', message: '请输入正确的邮箱格式' }
    { type: 'password', message: '密码格式不正确' }
    ```

4. **Custom Validation**
    ```javascript
    {
      validator: (value: string) => {
        if (value !== formData.password) {
          return '两次输入的密码不一致'
        }
        return true
      }
    }
    ```
5. **Trigger Timing**
    ```ts
    { required: true, message: '请输入用户名', trigger: ['blur', 'change'] }
    ```

### Validation Triggers

- **Real-time validation** - Triggered when data changes
- **Blur validation** - Triggered when focus is lost
- **Manual validation** - Call the `validate()` method

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
    - Avoid complex computations inside validation functions
    - Use validation trigger timing sensibly
    - Clean up unneeded validation rules in a timely manner

4. **User Experience**
    - Provide instant validation feedback
    - Clear error message prompts
    - Support form reset and validation clearing

## Extensibility

This form component is designed with excellent extensibility:

1. **Support for new form controls** - Simply place new controls inside form items
2. **Support for new validation types** - New validation rules can be added to the validation system
3. **Support for custom styles** - Styles can be customized via CSS variables and class names
4. **Support for internationalization** - Error messages can support multiple languages

## :japanese_castle: Basic Usage Example

```vue
<template>
    <hy-form ref="formRef" :model="formData" :rules="rules" label-width="80px">
        <hy-form-item label="用户名" prop="username" required>
            <hy-input v-model="formData.username" placeholder="请输入用户名" />
        </hy-form-item>

        <hy-form-item label="手机号" prop="phone" required>
            <hy-input v-model="formData.phone" type="number" placeholder="请输入手机号" />
        </hy-form-item>

        <hy-form-item label="性别" prop="gender">
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
            { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
            {
                min: 2,
                max: 20,
                message: '用户名长度在 2 到 20 个字符',
                trigger: ['blur', 'change'],
            },
        ],
        phone: [
            { required: true, message: '请输入手机号', trigger: ['blur', 'change'] },
            { type: 'phone', message: '请输入正确的手机号', trigger: ['blur', 'change'] },
        ],
    };

    const formRef = ref();

    const handleSubmit = (data: any) => {
        console.log('表单数据:', data);
    };
</script>
```

### Validation Rule Example

```javascript
const rules = {
  // 基础验证
  username: [
    { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
    { min: 2, max: 20, message: '用户名长度在 2 到 20 个字符', trigger: ['blur', 'change'] }
  ],

  // 类型验证
  phone: [
    { required: true, message: '请输入手机号', trigger: ['blur', 'change'] },
    { type: 'phone', message: '请输入正确的手机号', trigger: ['blur', 'change'] }
  ],

  // 自定义验证
  confirmPassword: [
    { required: true, message: '请确认密码' },
    {
      validator: (value: string) => {
        if (value !== formData.password) {
          return '两次输入的密码不一致'
        }
        return true
      }
    }
  ],

  // 触发时机控制
  email: [
    {
      type: 'email',
      message: '请输入正确的邮箱格式',
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
            <hy-form-item label="用户名" prop="username" required>
                <hy-input v-model="formData.username" placeholder="请输入用户名" />
            </hy-form-item>

            <hy-form-item label="手机号" prop="phone" required>
                <hy-input v-model="formData.phone" type="number" placeholder="请输入手机号" />
            </hy-form-item>

            <hy-form-item label="邮箱" prop="email">
                <hy-input v-model="formData.email" placeholder="请输入邮箱" />
            </hy-form-item>

            <hy-form-item label="性别" prop="gender">
                <hy-radio v-model="formData.gender" :columns="genderOptions" />
            </hy-form-item>

            <hy-form-item label="爱好" prop="hobbies">
                <hy-check-button
                    v-model="formData.hobbies"
                    :columns="hobbyOptions"
                    select-type="multiple"
                />
            </hy-form-item>

            <hy-form-item label="备注" prop="remark">
                <hy-textarea v-model="formData.remark" placeholder="请输入备注" />
            </hy-form-item>
        </hy-form>

        <view class="form-actions">
            <hy-button type="primary" @click="handleSubmit">提交</hy-button>
            <hy-button @click="handleReset">重置</hy-button>
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
            { required: true, message: '请输入用户名' },
            {
                min: 2,
                max: 20,
                message: '用户名长度在 2 到 20 个字符',
                trigger: ['change', 'blur'],
            },
        ],
        phone: [
            { required: true, message: '请输入手机号' },
            { type: 'phone', message: '请输入正确的手机号', trigger: ['change', 'blur'] },
        ],
        email: [{ type: 'email', message: '请输入正确的邮箱格式', trigger: ['change', 'blur'] }],
    };

    const genderOptions = [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' },
    ];

    const hobbyOptions = [
        { label: '阅读', value: 'reading' },
        { label: '音乐', value: 'music' },
        { label: '运动', value: 'sports' },
    ];

    const formRef = ref();

    const handleSubmit = () => {
        const result = formRef.value?.submit();
        if (result) {
            console.log('表单提交成功:', result);
        }
    };

    const handleReset = () => {
        formRef.value?.resetFields();
    };
</script>
```

:::

### Encapsulated Form Component

::: details Click to view the complete example

```vue
<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { type FormColumnsType, FormTypeEnum, type RulesVo } from 'hy-app';

    interface IColumns extends FormColumnsType {
        /**
         * 是否需要单个校验
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
     * 验证表单
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
    <!-- 表单区域 -->
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
                placeholder="请输入验证码"
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
// 表单数据
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
            placeholder: '请输入企业名称',
            prefixIcon: { name: 'qiye', customPrefix: 'icon' },
            customStyle: { height: '80rpx' },
        },
    },
    {
        field: 'creditCode',
        type: FormTypeEnum.NUMBER,
        input: {
            placeholder: '请输入统一社会信用代码（18位）',
            prefixIcon: { name: 'xinyongdaima', customPrefix: 'icon' },
            customStyle: { height: '80rpx' },
        },
    },
    {
        field: 'producingArea',
        type: FormTypeEnum.SELECT,
        select: [
            [
                { label: '无基地', value: '无基地' },
                { label: '种植基地', value: '种植基地' },
                { label: 'GAP基地', value: 'GAP基地' },
                { label: '趁鲜加工', value: '趁鲜加工' },
                { label: '养殖基地', value: '养殖基地' },
            ],
        ],
        input: {
            placeholder: '请选择产地信息',
            prefixIcon: { name: 'chandiguanli_icox', customPrefix: 'icon' },
            customStyle: { height: '80rpx' },
        },
    },
    {
        field: 'invoice',
        label: '发票信息：',
        type: FormTypeEnum.RADIO,
        actions: [
            {
                label: '普通发票',
                value: 'apply',
            },
            {
                label: '增值税发票',
                value: 'banana',
            },
        ],
    },
    {
        field: 'contactName',
        type: FormTypeEnum.TEXT,
        input: {
            placeholder: '请输入联系人姓名',
            prefixIcon: { name: IconConfig.MINE },
            customStyle: { height: '80rpx' },
        },
    },
    {
        field: 'contactUnit',
        type: FormTypeEnum.TEXT,
        input: {
            placeholder: '请输入联系人职务',
            prefixIcon: { name: 'zhiwu', customPrefix: 'icon' },
            customStyle: { height: '80rpx' },
        },
    },
    {
        field: 'contactPhone',
        type: FormTypeEnum.NUMBER,
        input: {
            placeholder: '请输入联系人手机号',
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
            message: '请输入企业名称',
            trigger: ['blur', 'change'],
        },
    ],
    creditCode: [
        {
            required: true,
            message: '请输入信用代码',
            trigger: ['blur', 'change'],
        },
    ],
    producingArea: {
        required: true,
        message: '请选择产地信息',
    },
    invoice: {
        required: true,
        message: '请选择发票类型',
    },
    contactName: [
        {
            required: true,
            message: '请输入联系人姓名',
            trigger: ['blur', 'change'],
        },
    ],
    contactUnit: [
        {
            required: true,
            message: '请输入联系人的职务',
            trigger: ['blur', 'change'],
        },
    ],
    contactPhone: [
        {
            required: true,
            message: '请输入联系人的手机号',
            trigger: ['blur', 'change'],
        },
        {
            type: 'phone',
            message: '请输入正确的手机号',
            trigger: ['blur', 'change'],
        },
    ],
});
```

:::

## API

### hy-form Props

| Parameter     | Description                  | Type                             | Default |
| ------------- | ---------------------------- | -------------------------------- | ------- |
| model         | Form data object             | `Record<string, any>`            | -       |
| rules         | Validation rules             | `FormItemRule`\|`FormItemRule[]` | -       |
| border        | Bottom border of the form    | `boolean`                        | false   |
| labelWidth    | Label width                  | `string` \| `number`             | `'auto'`|
| labelPosition | Label position               | `left` \| `top`                  | `'left'`|
| labelAlign    | Label alignment              | `left` \| `center` \| `right`    | `'left'`|

### hy-form-item Props

| Parameter | Description      | Type      | Default |
| -------- | ---------- | --------- | ------- |
| label    | Label text      | `string`  | -       |
| prop     | Form field name | `string`  | -       |
| required | Whether required | `boolean` | `false` |
| rules    | Validation rules | `any`     | `{}`    |

### FormItemRule

> The rules type is `{[key: string]: FormItemRule | FormItemRule[]}`

| Parameter | Description                         | Type                             | Default |
| --------- | ----------------------------------- | -------------------------------- | ------- |
| required  | Whether required                    | `boolean`                        | -       |
| message   | Message shown when validation fails | `string`                         | -       |
| min       | Minimum length                      | `number`                         | -       |
| max       | Maximum length                      | `number`                         | -       |
| type      | Validation type                     | `phone` \| `email` \| `password` | -       |
| trigger   | When validation is triggered        | `(blur \| change)[]`             | -       |
| validator | Custom validation function          | `Function`                       | -       |

## Events

### hy-form Events

| Event Name | Description                     | Callback Parameters                               |
| ---------- | ------------------------------- | ------------------------------------------------- |
| submit     | Triggered on form submit        | `(data: Record<string, any>)`                     |
| validate   | Triggered on form validation    | `(valid: boolean, errors: Record<string, string>)`|

### hy-form-item Events

| Event Name | Description                 | Callback Parameters |
| ---------- | --------------------------- | ------------------- |
| change     | Triggered when value changes | `(value: any)`      |
| blur       | Triggered on blur            | `(value: any)`      |

## Methods

### hy-form Methods

| Method Name   | Description    | Parameters           |
| ------------- | -------------- | -------------------- |
| validate      | Validate form  | -                    |
| resetFields   | Reset form     | -                    |
| clearValidate | Clear validation | `(fields?: string[])` |
| submit        | Submit form    | -                    |

### hy-form-item Methods

| Method Name   | Description      | Parameters                        |
| ------------- | ---------------- | --------------------------------- |
| validate      | Validate field   | `(trigger?: 'blur' \| 'change')`  |
| resetField    | Reset field      | -                                 |
| clearValidate | Clear validation | -                                 |

### CSS Variables

| Variable Name | Description | Default |
| --- | --- | --- |
| `--hy-form-item-margin-bottom` | Bottom outer margin | `16px` |
| `--hy-form-item-error-color` | Error message color | `#ff4d4f` |
| `--hy-form-item-error-font-size` | Error message font size | `12px` |
| `--hy-form-item-label-color` | Label text color | Follows `--hy-text-color` |

<demo-model url="pages-design/form/form"></demo-model>