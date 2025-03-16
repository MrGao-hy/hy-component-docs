# Textarea 文本域组件

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [textarea组件](https://uiadmin.net/uview-plus/components/textarea.html) 的代码实现。
:::

## 平台差异说明

| APP | H5 | 微信小程序 |
|---|---|----|
|✔| ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-textarea v-model="value"></hy-textarea>
<!-- 单个组件引入 -->
<HyTextarea v-model="value"></HyTextarea>
```
```javascript
import { HyTextarea } from "hfyk-app"
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

| 参数        | 说明         | 类型        | 默认值                  | 可选值                        |
| ----------- | ------------ |-----------|----------------------|----------------------------|
| modelValue      | 图片top高度  | `string`  | -                    | -                          |
| placeholder      | 图片top高度  | `string`  | -                    | -                          |
| height      | 图片top高度  | `number`  | 70                   | -                          |
| confirmType      | 图片top高度  | `string`  | done                 | -                          |
| disabled      | 图片top高度  | `boolean` | false                | -                          |
| count      | 图片top高度  | `boolean` | false                | -                          |
| focus      | 图片top高度  | `boolean` | false                | -                          |
| autoHeight      | 图片top高度  | `boolean` | false                | -                          |
| fixed      | 图片top高度  | `boolean` | false                | -                          |
| cursorSpacing      | 图片top高度  | `number`  | false                | -                          |
| cursor      | 图片top高度  | `string`  | -                    | -                          |
| showConfirmBar      | 图片top高度  | `boolean` | true                 | -                          |
| selectionStart      | 图片top高度  | `number`  | -1                   | -                          |
| selectionEnd      | 图片top高度  | `number`  | -1                   | -                          |
| adjustPosition      | 图片top高度  | `boolean` | true                 | -                          |
| disableDefaultPadding      | 图片top高度  | `boolean` | false                | -                          |
| holdKeyboard      | 图片top高度  | `boolean` | false                | -                          |
| maxlength      | 图片top高度  | `number`  | 140                  | -                          |
| border      | 图片top高度  | `string` | surround             | surround \| bottom \| none |
| placeholderClass      | 图片top高度  | `string` | textarea-placeholder | -                          |
| placeholderStyle      | 图片top高度  | `CSSProperties` | -                    | -                          |
| CSSProperties      | 图片top高度  | `CSSProperties` | -                    | -                          |
| formatter      | 图片top高度  | `boolean` | null                 | -                          |

## Methods
| 方法名          | 说明      |
|--------------|---------|
| setFormatter | 为兼容微信小程序而暴露的内部方法，见上方说明 |

## Events
| 事件名    | 说明      | 回调参数 |
|--------|---------|-----|
| focus | 输入框聚焦时触发 | e   |
| blur | 输入框失去焦点时触发 | e   |
| linechange | 输入框行数变化时调用 | e   |
| update:modelValue | 当键盘输入时，触发 input 事件 | e.detail.value    |
| confirm | 点击完成时， 触发 confirm 事件 | e   |
| keyboardheightchange | 键盘高度发生变化的时候触发此事件 | e   |