# 表单组件 (hy-form)
> 一个简单易用的表单组件，包含 `hy-form` 和 `hy-form-item` 两个组件，支持表单验证、数据绑定等功能。
> 这个表单组件系统为你提供了一个完整、灵活、易用的表单解决方案，可以满足大部分表单开发需求。

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 组件特性

- ✅ 表单数据双向绑定
- ✅ 表单验证（必填、长度、类型、自定义验证）
- ✅ 实时验证和失焦验证
- ✅ 支持多种表单控件
- ✅ 灵活的标签布局
- ✅ 错误信息显示
- ✅ 表单重置和清除验证

::: danger 注意事项
1. 表单组件使用 `provide/inject` 进行数据通信，确保 `hy-form-item` 组件在 `hy-form` 内部使用
2. 验证规则支持数组形式，可以设置多个验证规则
3. 自定义验证函数返回 `true` 表示验证通过，返回 `false` 或字符串表示验证失败
4. 表单数据会自动双向绑定，无需手动处理数据同步
5. 支持实时验证和失焦验证，可以通过 `trigger` 属性控制验证时机
:::

### ✅ 表单验证系统
- **必填验证** - 支持 `required` 属性
- **长度验证** - 支持 `min` 和 `max` 属性
- **类型验证** - 支持手机号、邮箱、密码格式验证
- **自定义验证** - 支持自定义验证函数
- **触发时机** - 支持 `blur` 和 `change` 事件触发验证

### ✅ 灵活的布局
- 支持标签位置设置（`left` / `top`）
- 支持标签宽度自定义
- 支持标签对齐方式设置

### ✅ 错误信息显示
- 实时显示验证错误信息
- 支持清除验证和重置表单

### ✅ 丰富的 API
- `validate()` - 验证表单
- `resetFields()` - 重置表单
- `clearValidate()` - 清除验证
- `submit()` - 提交表单

## 验证系统

### 验证类型

1. **必填验证**
   ```javascript
   { required: true, message: '请输入用户名' }
   ```

2. **长度验证**
   ```javascript
   { min: 2, max: 20, message: '长度在 2 到 20 个字符' }
   ```

3. **类型验证**
   ```javascript
   { type: 'phone', message: '请输入正确的手机号' }
   { type: 'email', message: '请输入正确的邮箱格式' }
   { type: 'password', message: '密码格式不正确' }
   ```

4. **自定义验证**
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
5. **触发时机**
    ```ts
    { required: true, message: '请输入用户名', trigger: ['blur', 'change'] }
    ```

### 验证触发

- **实时验证** - 数据变化时触发
- **失焦验证** - 失去焦点时触发
- **手动验证** - 调用 `validate()` 方法

## 样式设计

### 响应式布局
- 支持标签位置切换（左侧/顶部）
- 自适应标签宽度
- 错误信息实时显示

### 视觉反馈
- 必填项红色星号标识
- 错误信息红色文字显示
- 表单控件错误状态样式

## 使用建议

1. **表单数据管理**
    - 使用 `reactive` 创建响应式表单数据
    - 避免直接修改表单数据，通过组件方法操作

2. **验证规则设计**
    - 合理设置验证触发时机
    - 提供清晰的错误提示信息
    - 使用自定义验证处理复杂逻辑

3. **性能优化**
    - 避免在验证函数中进行复杂计算
    - 合理使用验证触发时机
    - 及时清理不需要的验证规则

4. **用户体验**
    - 提供即时的验证反馈
    - 清晰的错误信息提示
    - 支持表单重置和清除验证


## 扩展性

这个表单组件设计具有良好的扩展性：

1. **支持新的表单控件** - 只需在表单项中放入新的控件即可
2. **支持新的验证类型** - 可以在验证系统中添加新的验证规则
3. **支持自定义样式** - 通过 CSS 变量和类名可以自定义样式
4. **支持国际化** - 错误信息可以支持多语言


## 基础用法

```vue
<template>
  <hy-form
    ref="formRef"
    :model="formData"
    :rules="rules"
    label-width="80px"
  >
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
import { reactive, ref } from 'vue'

const formData = reactive({
  username: '',
  phone: '',
  gender: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
    { min: 2, max: 20, message: '用户名长度在 2 到 20 个字符', trigger: ['blur', 'change'] }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: ['blur', 'change'] },
    { type: 'phone', message: '请输入正确的手机号', trigger: ['blur', 'change'] }
  ]
}

const formRef = ref()

const handleSubmit = (data: any) => {
  console.log('表单数据:', data)
}
</script>
```

### 验证规则示例

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

## 完整示例

::: details 点我查看完整示例
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
import { reactive, ref } from 'vue'

const formData = reactive({
  username: '',
  phone: '',
  email: '',
  gender: '',
  hobbies: [],
  remark: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名' },
    { min: 2, max: 20, message: '用户名长度在 2 到 20 个字符', trigger: ['change', 'blur'] }
  ],
  phone: [
    { required: true, message: '请输入手机号' },
    { type: 'phone', message: '请输入正确的手机号', trigger: ['change', 'blur'] }
  ],
  email: [
    { type: 'email', message: '请输入正确的邮箱格式', trigger: ['change', 'blur'] }
  ]
}

const genderOptions = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' }
]

const hobbyOptions = [
  { label: '阅读', value: 'reading' },
  { label: '音乐', value: 'music' },
  { label: '运动', value: 'sports' }
]

const formRef = ref()

const handleSubmit = () => {
  const result = formRef.value?.submit()
  if (result) {
    console.log('表单提交成功:', result)
  }
}

const handleReset = () => {
  formRef.value?.resetFields()
}
</script>
```
:::

## API

### hy-form Props

| 参数            | 说明     | 类型                            | 默认值      |
|---------------|--------|-------------------------------|----------|
| model         | 表单数据对象 | `Record<string, any>`         | -        |
| rules         | 验证规则   | `FormItemRule`                | -        |
| border        | 表单底部边框 | `boolean`                     | false    |
| labelWidth    | 标签宽度   | `string` \| `number`          | `'auto'` |
| labelPosition | 标签位置   | `left` \| `top`               | `'left'` |
| labelAlign    | 标签对齐方式 | `left` \| `center` \| `right` | `'left'` |

### hy-form-item Props

| 参数       | 说明    | 类型        | 默认值     |
|----------|-------|-----------|---------|
| label    | 标签文本  | `string`  | -       |
| prop     | 表单字段名 | `string`  | -       |
| required | 是否必填  | `boolean` | `false` |
| rules    | 验证规则  | `any`     | `{}`    |

### FormItemRule
> rules类型`{[key: string]: FormItemRule | FormItemRule[]}`

| 参数        | 说明         | 类型                               | 默认值 |
|-----------|------------|----------------------------------|-----|
| required  | 是否必填       | `boolean`                        | -   |
| message   | 验证失败时的提示信息 | `string`                         | -   |
| min       | 最小长度       | `number`                         | -   |
| max       | 最大长度       | `number`                         | -   |
| type      | 验证类型       | `phone` \| `email` \| `password` | -   |
| trigger   | 触发验证的时机    | `(blur \| change)[]`             | -   |
| validator | 自定义验证函数    | `Function`                       | -   |

## Events

### hy-form Events

| 事件名      | 说明      | 回调参数                                               |
|----------|---------|----------------------------------------------------|
| submit   | 表单提交时触发 | `(data: Record<string, any>)`                      |
| validate | 表单验证时触发 | `(valid: boolean, errors: Record<string, string>)` |

### hy-form-item Events

| 事件名    | 说明     | 回调参数           |
|--------|--------|----------------|
| change | 值变化时触发 | `(value: any)` |
| blur   | 失焦时触发  | `(value: any)` |

## Methods

### hy-form Methods

| 方法名           | 说明   | 参数                    |
|---------------|------|-----------------------|
| validate      | 验证表单 | -                     |
| resetFields   | 重置表单 | -                     |
| clearValidate | 清除验证 | `(fields?: string[])` |
| submit        | 提交表单 | -                     |

### hy-form-item Methods

| 方法名           | 说明   | 参数                               |
|---------------|------|----------------------------------|
| validate      | 验证字段 | `(trigger?: 'blur' \| 'change')` |
| resetField    | 重置字段 | -                                |
| clearValidate | 清除验证 | -                                |

<demo-model url="pages/components/form/form"></demo-model>
