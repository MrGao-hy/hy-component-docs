# Search 搜索组件

> 搜索组件，集成了常见搜索框所需功能，用户可以一键引入，开箱即用。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

- `showAction` 为 `true` 时显示右侧控件，点击触发 `confirm` 事件而非 `search` 事件
- `searchIcon` 支持传入 `false` 隐藏图标，或传入图标配置对象

## :japanese_castle:基本使用示例

### 基础用法

```html
<template>
    <hy-search v-model="keyword" @search="onSearch"></hy-search>
</template>

<script setup>
import { ref } from 'vue'

const keyword = ref('')

const onSearch = (event, value) => {
    console.log('搜索:', value)
}
</script>
```

### 设置输入框形状

```html
<template>
    <hy-search shape="circle"></hy-search>
    <hy-search shape="square"></hy-search>
</template>
```

### 设置输入框内文本位置

```html
<template>
    <hy-search inputAlign="left"></hy-search>
    <hy-search inputAlign="center"></hy-search>
    <hy-search inputAlign="right"></hy-search>
</template>
```

### 开启/禁用清除控件

```html
<template>
    <hy-search :clearable="true"></hy-search>
    <hy-search :clearable="false"></hy-search>
</template>
```

### 设置右侧控件

```html
<template>
    <hy-search :showAction="true" actionText="搜索"></hy-search>
</template>
```

### 带动画的右侧控件

```html
<template>
    <hy-search :showAction="true" actionText="搜索" animation></hy-search>
</template>
```

### 自定义样式

```html
<template>
    <hy-search 
        inputAlign="center" 
        borderColor="#ddd"
        :height="40"
        :disabled="false"
        bgColor="#f5f5f5"
        color="#333"
        placeholderColor="#999"
    ></hy-search>
</template>
```

### 自定义左侧图标

```html
<template>
    <hy-search :searchIcon="{ name: 'search' }"></hy-search>
    <hy-search :searchIcon="false"></hy-search>
</template>
```

### 设置最大输入长度

```html
<template>
    <hy-search :maxlength="20"></hy-search>
</template>
```

### 设置搜索标签

```html
<template>
    <hy-search label="搜索" v-model="keyword"></hy-search>
</template>

<script setup>
import { ref } from 'vue'

const keyword = ref('')
</script>
```

### 监听各种事件

```html
<template>
    <hy-search 
        v-model="keyword"
        @change="onChange"
        @search="onSearch"
        @confirm="onConfirm"
        @blur="onBlur"
        @focus="onFocus"
        @clear="onClear"
        @click="onClick"
        @clickIcon="onClickIcon"
    ></hy-search>
</template>

<script setup>
import { ref } from 'vue'

const keyword = ref('')

const onChange = (value) => {
    console.log('内容变化:', value)
}

const onSearch = (event, value) => {
    console.log('搜索:', value)
}

const onConfirm = (value) => {
    console.log('点击右侧控件:', value)
}

const onBlur = (event, value) => {
    console.log('失去焦点:', value)
}

const onFocus = (event, value) => {
    console.log('获得焦点:', value)
}

const onClear = () => {
    console.log('清空内容')
}

const onClick = () => {
    console.log('点击输入框（disabled为true时）')
}

const onClickIcon = (keyword) => {
    console.log('点击图标:', keyword)
}
</script>
```

## API

### Search Props

| 参数               | 说明                                                           | 类型                                     | 默认值              |
|------------------|--------------------------------------------------------------|----------------------------------------|------------------|
| v-model          | 双向绑定输入框搜索值                                                   | `string`                               | -                |
| shape            | 搜索框形状，`circle`-圆形，`square`-方形                                | `circle`\|`square`                     | circle           |
| bgColor          | 搜索框背景颜色                                                      | `string`                               | -                |
| placeholder      | 占位文字内容                                                       | `string`                               | 搜索内容             |
| confirmType      | 设置键盘右下角按钮的文字，兼容性详见 uni-app 文档                                | `send`\|`search`\|`next`\|`go`\|`done` | search           |
| clearable        | 是否启用清除控件                                                     | `boolean`                              | true             |
| autoFocus        | 是否自动获得焦点                                                     | `boolean`                              | false            |
| autoBlur         | 键盘收起时，是否自动失去焦点                                               | `boolean`                              | true             |
| adjustPosition   | 键盘弹起时，是否自动上推页面                                               | `boolean`                              | true             |
| showAction       | 是否显示右侧控件                                                     | `boolean`                              | true             |
| actionStyle      | 右侧控件的样式，对象形式                                                 | `CSSProperties`                        | {}               |
| actionText       | 右侧控件文字                                                       | `string`                               | 搜索               |
| inputAlign       | 输入框内容水平对齐方式，可选值：`left`、`center`、`right`                      | `string`                               | left             |
| inputStyle       | 自定义输入框样式，对象形式                                                | `CSSProperties`                        | {}               |
| disabled         | 是否禁用输入框                                                      | `boolean`                              | false            |
| borderColor      | 边框颜色，配置了颜色才会有边框                                              | `string`                               | transparent      |
| color            | 输入框字体颜色                                                      | `string`                               | -                |
| placeholderColor | placeholder 的颜色                                              | `string`                               | -                |
| searchIcon       | 输入框左边的图标属性集合，可以为 `false`（隐藏图标）或图标配置对象，详见 [图标Api](./icon#api) | `HyIconProps` \| `boolean`             | { name: SEARCH } |
| margin           | 组件与其他元素之间的距离，支持字符串（如 "30px"）或数字                              | `string` \| `number`                   | 0                |
| animation        | 是否开启动画，见上方说明                                                 | `boolean`                              | false            |
| maxlength        | 输入框最大能输入的长度，-1 为不限制长度                                        | `number`                               | -1               |
| height           | 输入框高度，单位 px                                                  | `number`                               | 30               |
| label            | 搜索框左边显示的文本信息                                                 | `string`                               | -                |
| customStyle      | 自定义需要用到的外部样式                                                 | `CSSProperties`                        | -                |
| customClass      | 自定义外部类名                                                      | `string`                               | -                |

### Events

| 事件名       | 说明                                    | 回调参数                                          |
|-----------|---------------------------------------|-----------------------------------------------|
| change    | 输入框内容发生变化时触发                          | `value: string` 输入框的值                         |
| search    | 用户确定搜索时触发（按回车键或键盘右下角的"搜索"键）           | `event: InputOnConfirmEvent`, `value: string` |
| confirm   | 用户点击右侧控件时触发                           | `value: string` 输入框的值                         |
| blur      | 输入框失去焦点时触发                            | `event: InputOnBlurEvent`, `keyword: string`  |
| focus     | 输入框获得焦点时触发                            | `event: InputOnFocusEvent`, `keyword: string` |
| clear     | 配置了 `clearable` 后，清空内容时触发             | -                                             |
| click     | `disabled` 为 `true` 时，点击输入框触发，用于跳转搜索页 | -                                             |
| clickIcon | 左侧图标点击时触发                             | `keyword: string` 当前输入框的值                     |


<demo-model url="pages-design/search/search"></demo-model>
