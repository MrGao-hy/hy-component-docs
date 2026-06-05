# CodeInput 验证码输入组件
> 该组件一般用于验证用户短信验证码的场景，也可以结合华玥的键盘组件使用

## :pushpin:平台差异说明

| APP(vue) | H5  | 微信小程序 | 支付宝小程序 |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning:注意事项

:::warning 注意事项
- `disabledKeyboard` 设置为 `true` 时，点击输入框不会唤起系统键盘，适合配合自定义键盘使用
- `dot` 参数设置为 `true` 时，输入内容会用圆点替代显示，但事件回调会返回真实值
- `mode` 支持 `box`（盒子模式）和 `line`（底部横线模式）两种模式
- `disabledDot` 参数控制是否禁止输入小数点，默认为 `true`（禁止输入）
:::

## :japanese_castle:基本使用示例

```html
<template>
    <hy-code-input v-model="value"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 自定义长度

```html
<template>
    <hy-code-input v-model="value" :maxlength="4"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 格子间距

```html
<template>
    <hy-code-input v-model="value" :space="20"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 用圆点替代输入内容

```html
<template>
    <hy-code-input v-model="value" dot></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 线形模式

```html
<template>
    <hy-code-input v-model="value" mode="line"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 调整颜色

```html
<template>
    <hy-code-input v-model="value" color="#f56c6c" borderColor="#f56c6c"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 细边框

```html
<template>
    <hy-code-input v-model="value" hairline></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 自动获取焦点

```html
<template>
    <hy-code-input v-model="value" focus></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 无边框

```html
<template>
    <hy-code-input v-model="value" :border="false" size="50"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')
</script>
```

### 与自定义键盘联动

当需要使用自定义键盘时，需要设置 `disabledKeyboard` 为 `true`，防止系统键盘与自定义键盘冲突。点击输入框获取焦点时自动打开自定义键盘。

```html
<template>
    <view>
        <hy-code-input
            v-model="keyboardValue"
            :disabledKeyboard="true"
            mode="box"
            @finish="handleFinish"
            @focus="showKeyboard = true"
        ></hy-code-input>

        <hy-keyboard
            v-model:show="showKeyboard"
            mode="default"
            v-model="keyboardValue"
            :show-dot-key="false"
            close-text="完成"
            @close="showKeyboard = false"
        ></hy-keyboard>
    </view>
</template>

<script setup>
    import { ref } from 'vue'

    const keyboardValue = ref('')
    const showKeyboard = ref(false)

    const handleFinish = (value) => {
        console.log('输入完成:', value)
        showKeyboard.value = false
        uni.showToast({
            title: `输入完成: ${value}`,
            icon: 'none'
        })
    }
</script>
```

### 监听输入事件

```html
<template>
    <hy-code-input v-model="value" @change="handleChange" @finish="handleFinish"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')

    const handleChange = (value) => {
        console.log('输入内容改变:', value)
    }

    const handleFinish = (value) => {
        console.log('输入完成:', value)
    }
</script>
```

### 监听焦点事件

```html
<template>
    <hy-code-input v-model="value" @focus="handleFocus" @blur="handleBlur"></hy-code-input>
</template>

<script setup>
    import { ref } from 'vue'

    const value = ref('')

    const handleFocus = () => {
        console.log('输入框获取焦点')
        // 可以在这里打开自定义键盘
    }

    const handleBlur = () => {
        console.log('输入框失去焦点')
    }
</script>
```

## API

### CodeInput Props

| 参数               | 说明               | 类型                 | 默认值   |
|------------------|------------------|--------------------|-------|
| v-model          | 预置值              | `string`\|`number` | -     |
| adjustPosition   | 键盘弹起时，是否自动上推页面   | `boolean`          | true  |
| maxlength        | 输入字符个数           | `number`           | 6     |
| border           | 无边框输入框           | `boolean`          | true  |
| dot              | 是否用圆点填充          | `boolean`          | true  |
| mode             | 模式选择，见上方"基本使用"说明 | `box`\|`line`      | box   |
| hairline         | 是否细边框            | `boolean`          | false |
| space            | 字符间的距离           | `number`           | 10    |
| focus            | 是否自动获取焦点         | `boolean`          | false |
| bold             | 字体和输入横线是否加粗      | `boolean`          | false |
| color            | 字体颜色             | `string`           | -     |
| fontSize         | 字体大小，单位rpx       | `string`\|`number` | 18    |
| size             | 输入框的大小，宽等于高      | `string`\|`number` | 35    |
| disabledKeyboard | 禁止点击输入框唤起系统键盘    | `boolean`          | false |
| borderColor      | 边框和线条颜色          | `string`           | -     |
| disabledDot      | 是否禁止输入"."符号      | `boolean`          | true  |
| customStyle      | 自定义需要用到的外部样式     | `CSSProperties`    | -     |
| customClass      | 自定义外部类名          | `string`           | -     |

### Events

| 事件名    | 说明                         | 回调参数         |
|--------|----------------------------|--------------|
| change | 输入内容发生改变时触发，具体见上方说明        | value：当前输入的值 |
| finish | 输入字符个数达maxlength值时触发，见上方说明 | value：当前输入的值 |
| focus  | 输入框获取焦点时触发                 | -            |
| blur   | 输入框失去焦点时触发                 | -            |

<demo-model url="pages-design/codeInput/codeInput"></demo-model>
