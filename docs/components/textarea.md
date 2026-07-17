# Textarea 文本域组件
> 用于输入多行文本信息，如聊天输入框、备注等场景。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

:::warning 注意事项
- `modelValue` 用于双向绑定输入框内容
- `focus` 属性设置自动获取焦点，nvue 不支持，H5 取决于浏览器的实现
- `formatter` 属性用于输入内容格式化，但微信小程序不支持通过 props 传递函数，需使用 `setFormatter` 方法
- `border` 属性支持三种类型：`surround`（四周边框）、`bottom`（底部边框）、`none`（无边框）
- `maxlength` 设置为 `-1` 时不限制最大长度
- 组件支持 `hy-form` 表单验证，通过 `form-item` 使用
:::

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-textarea v-model="value" placeholder="请输入内容"></hy-textarea>
```

```typescript
import { ref } from 'vue'

const value = ref('')
```

### 边框类型

通过 `border` 属性设置边框类型：

```html
<!-- 四周边框（默认） -->
<hy-textarea v-model="value1" border="surround" placeholder="四周边框"></hy-textarea>

<!-- 底部边框 -->
<hy-textarea v-model="value2" border="bottom" placeholder="底部边框"></hy-textarea>

<!-- 无边框 -->
<hy-textarea v-model="value3" border="none" placeholder="无边框"></hy-textarea>
```

### 字数统计

设置 `count` 属性显示字数统计：

```html
<hy-textarea v-model="value" placeholder="请输入内容" count></hy-textarea>
```

### 自动增高

设置 `autoHeight` 属性实现输入框高度自动增高：

```html
<hy-textarea v-model="value" autoHeight placeholder="请输入内容" count></hy-textarea>
```

### 禁用状态

设置 `disabled` 属性禁用输入框：

```html
<hy-textarea v-model="value" disabled placeholder="禁用状态"></hy-textarea>
```

### 自动聚焦

设置 `focus` 属性自动获取焦点：

```html
<hy-textarea v-model="value" :focus="isFocus" placeholder="自动聚焦"></hy-textarea>
```

```typescript
import { ref } from 'vue'

const isFocus = ref(true)
```

## 自定义样式

通过 `customStyle` 或 `customClass` 自定义样式：

```html
<hy-textarea 
    v-model="value" 
    placeholder="自定义样式"
    height="120"
    :customStyle="{ backgroundColor: '#f5f5f5', borderRadius: '10px' }"
></hy-textarea>
```

### 格式化处理

通过 `formatter` 属性实现输入内容格式化：

```html
<hy-textarea v-model="value" :formatter="formatter" placeholder="只能输入数字"></hy-textarea>
```

```typescript
import { ref } from 'vue'

const value = ref('')

// 格式化方法：只允许输入数字
const formatter = (val: string) => {
    return val.replace(/[^0-9]/g, '')
}
```

### 配合表单使用

组件支持 `hy-form` 表单验证：

```html
<hy-form ref="formRef">
    <hy-form-item label="备注" prop="remark">
        <hy-textarea 
            v-model="formData.remark" 
            placeholder="请输入备注信息"
            :maxlength="200"
            count
        ></hy-textarea>
    </hy-form-item>
</hy-form>
```

```typescript
import { ref, reactive } from 'vue'

const formRef = ref()
const formData = reactive({
    remark: ''
})

const rules = {
    remark: [
        { required: true, message: '请输入备注信息' },
        { min: 5, message: '备注至少5个字符' }
    ]
}
```

### 聊天输入框场景

结合其他组件实现聊天输入框效果：

```html
<view class="chat-input">
    <hy-textarea 
        v-model="message" 
        autoHeight 
        :maxlength="500"
        confirmType="send"
        placeholder="输入消息..."
        @confirm="sendMessage"
    ></hy-textarea>
    <hy-button type="primary" size="small" @click="sendMessage">发送</hy-button>
</view>
```

## API

### Textarea Props

| 参数                    | 说明                                                        | 类型                           | 默认值                  |
|-----------------------|-----------------------------------------------------------|------------------------------|----------------------|
| modelValue            | 输入框的内容                                                    | `string`                     | -                    |
| placeholder           | 输入框为空时占位符                                                 | `string`                     | -                    |
| placeholderClass      | 指定 placeholder 的样式类[^1]                                   | `string`                     | textarea-placeholder |
| placeholderStyle      | 指定 placeholder 的样式，对象形式                                   | `string`                     | -                    |
| height                | 输入框高度                                                     | `string \| number`           | 70                   |
| confirmType           | 设置键盘右下角按钮的文字，仅微信小程序、App-vue 和 H5 有效                       | `string`                     | done                 |
| disabled              | 是否禁用                                                      | `boolean`                    | false                |
| count                 | 是否显示统计字数                                                  | `boolean`                    | false                |
| focus                 | 是否自动获取焦点，nvue 不支持，H5 取决于浏览器的实现                            | `boolean`                    | false                |
| autoHeight            | 是否自动增加高度                                                  | `boolean`                    | false                |
| fixed                 | 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true | `boolean`                    | false                |
| cursorSpacing         | 指定光标与键盘的距离                                                | `number`                     | 0                    |
| cursor                | 指定 focus 时的光标位置                                           | `number`                     | -                    |
| showConfirmBar        | 是否显示键盘上方带有"完成"按钮那一栏                                       | `boolean`                    | true                 |
| selectionStart        | 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用                      | `number`                     | -1                   |
| selectionEnd          | 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用                    | `number`                     | -1                   |
| adjustPosition        | 键盘弹起时，是否自动上推页面                                            | `boolean`                    | true                 |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距，只微信小程序有效                                 | `boolean`                    | false                |
| holdKeyboard          | focus 时，点击页面的时候不收起键盘，只微信小程序有效                             | `boolean`                    | false                |
| maxlength             | 最大输入长度，设置为 -1 的时候不限制最大长度                                  | `number`                     | 140                  |
| border                | 边框类型[^2]                                                  | `surround \| bottom \| none` | surround             |
| formatter             | 输入过滤或格式化函数[^3]                                            | `function`                   | -                    |
| customStyle           | 定义需要用到的外部样式                                               | `CSSProperties`              | -                    |
| customClass           | 自定义外部类名                                                   | `string`                     | -                    |

### Events

| 事件名                  | 说明                  | 回调参数            |
|----------------------|---------------------|-----------------|
| focus                | 输入框聚焦时触发            | `event`         |
| blur                 | 输入框失去焦点时触发          | `event`         |
| lineChange           | 输入框行数变化时触发          | `event`         |
| change               | 当键盘输入时，触发 change 事件 | `value: string` |
| update:modelValue    | 当键盘输入时，触发 input 事件  | `value: string` |
| confirm              | 点击完成时，触发 confirm 事件 | `event`         |
| keyboardheightchange | 键盘高度发生变化的时候触发此事件    | `event`         |


[^1]: 注意页面或组件的 style 中写了 scoped 时，需要在类名前写 `/deep/`

[^2]: `surround`：四周边框；`bottom`：底部有边框；`none`：无边框

[^3]: 微信小程序不支持通过 props 传递函数，建议在页面中直接使用 `formatter` 属性（其他平台）

<demo-model url="pages-design/textarea/textarea"></demo-model>
