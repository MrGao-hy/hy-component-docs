# Textarea 文本域组件
> 用于输入多行文本信息,聊天输入框等。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [textarea组件](https://uiadmin.net/uview-plus/components/textarea.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-textarea v-model="value"></hy-textarea>
<!-- 单个组件引入 -->
<HyTextarea v-model="value"></HyTextarea>
```
```javascript
import { HyTextarea } from "hy-app"
import { ref } from 'vue';

const value = ref('');
```

## 字数统计
设置`count`属性实现字数统计
```html
<hy-textarea v-model="value" placeholder="请输入内容" count ></hy-textarea>
```
```javascript
import { ref } from 'vue';  

const value = ref('统计字数');  
```

## 自动增高
设置`autoHeight`属性实现自动增高
```html
<hy-textarea v-model="value" autoHeight></hy-textarea>
```
```javascript
import { ref } from 'vue';  

const value = ref('统计字数');  
```

## 禁用状态
设置`count`属性实现字数统计
```html
<hy-textarea v-model="value" disabled></hy-textarea>
```
```javascript
import { ref } from 'vue';  

const value = ref('统计字数');  
```

## 格式化处理
如有需要，可以通过`formatter`参数编写自定义格式化规则。
::: warning 注意
微信小程序不支持通过`props`传递函数参数，所以组件内部暴露了一个`setFormatter`方法用于设置格式化方法，注意在页面的`onMounted`生命周期获取`ref`再操作。
:::
```html
<hy-textarea v-model="value" :formatter="formatter" ref="textareaRef"></hy-textarea>
```
```javascript
import { ref, onMounted } from 'vue';  

const value = ref('过滤数据');
const textareaRef = ref(null);

// 格式化方法  
const formatter = (val) => {
    // 让输入框只能输入数值，过滤其他字符  
    return val.replace(/[^0-9]/ig, "");
};

// 生命周期钩子，使用 onMounted 替代 onReady  
onMounted(() => {
    textareaRef.value.setFormatter(formatter);
});  
```

## API

| 参数                    | 说明                                                 | 类型                           | 默认值                  |
|-----------------------|----------------------------------------------------|------------------------------|----------------------|
| modelValue            | 输入框的内容                                             | `string`                     | -                    |
| placeholder           | 输入框为空时占位符                                          | `string`                     | -                    |
| height                | 输入框高度                                              | `number`                     | 70                   |
| confirmType           | 设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效                   | `string`                     | done                 |
| disabled              | 是否禁用                                               | `boolean`                    | false                |
| count                 | 是否显示统计字数                                           | `boolean`                    | false                |
| focus                 | 是否自动获取焦点，nvue不支持，H5取决于浏览器的实现                       | `boolean`                    | false                |
| autoHeight            | 是否自动增加高度                                           | `boolean`                    | false                |
| fixed                 | 如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true | `boolean`                    | false                |
| cursorSpacing         | 指定光标与键盘的距离                                         | `number`                     | 0                    |
| cursor                | 指定focus时的光标位置                                      | `string`                     | -                    |
| showConfirmBar        | 是否显示键盘上方带有”完成“按钮那一栏，                               | `boolean`                    | true                 |
| selectionStart        | 光标起始位置，自动聚焦时有效，需与selection-end搭配使用                 | `number`                     | -1                   |
| selectionEnd          | 光标结束位置，自动聚焦时有效，需与selection-start搭配使用               | `number`                     | -1                   |
| adjustPosition        | 键盘弹起时，是否自动上推页面                                     | `boolean`                    | true                 |
| disableDefaultPadding | 是否去掉 iOS 下的默认内边距，只微信小程序有效                          | `boolean`                    | false                |
| holdKeyboard          | focus时，点击页面的时候不收起键盘，只微信小程序有效                       | `boolean`                    | false                |
| maxlength             | 最大输入长度，设置为 -1 的时候不限制最大长度                           | `number`                     | 140                  |
| border                | 边框类型[^1]                                           | `surround`\|`bottom`\|`none` | surround             |
| placeholderClass      | 指定placeholder的样式类[^2]                              | `string`                     | textarea-placeholder |
| placeholderStyle      | 指定placeholder的样式，字符串/对象形式，如"color: red;"           | `CSSProperties`              | -                    |
| formatter             | 输入过滤或格式化函数[^3]                                     | `function`                   | null                 |

## Methods
| 方法名          | 说明                     |
|--------------|------------------------|
| setFormatter | 为兼容微信小程序而暴露的内部方法，见上方说明 |

## Events
| 事件名                  | 说明                   | 回调参数  |
|----------------------|----------------------|-------|
| focus                | 输入框聚焦时触发             | e     |
| blur                 | 输入框失去焦点时触发           | e     |
| linechange           | 输入框行数变化时调用           | e     |
| change               | 当键盘输入时，触发 input 事件   | value |
| confirm              | 点击完成时， 触发 confirm 事件 | e     |
| keyboardheightchange | 键盘高度发生变化的时候触发此事件     | e     |

[^1]: `surround`：四周边框；`bottom`：底部有边框；`none`：无边框
[^2]: 注意页面或组件的style中写了scoped时，需要在类名前写/deep/
[^3]: 如需兼容微信小程序，则只能通过setFormatter方法


<demo-model url="pages/components/textarea/textarea"></demo-model>