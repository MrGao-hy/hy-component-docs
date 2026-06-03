# Keyboard 键盘组件
> 虚拟键盘组件，支持数字键盘、车牌号键盘、身份证键盘等多种模式，可自定义头部和按键。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

### 2. v-model 绑定

组件使用 `v-model:show` 控制显示，`v-model` 绑定输入值：

```html
<hy-keyboard
    v-model:show="showKeyboard"   <!-- 控制显示/隐藏 -->
    v-model="inputValue"          <!-- 绑定输入的值 -->
    v-model:car-lang="carLang"    <!-- 在mode为car时候有效，切换中英文 -->
></hy-keyboard>
```

### 3. 车牌号键盘模式

车牌号键盘支持两种模式：

| 模式 | 属性 | 说明 | 使用场景 |
|------|------|------|----------|
| 非受控模式 | 传 `auto-switch-lang` | 组件内部自动管理语言切换 | 简单场景，开箱即用 |
| 受控模式 | 传 `v-model:car-lang` | 手动控制语言切换 | 需要在父组件监听或控制语言 |

**非受控模式示例：**
```html
<!-- 设置 auto-switch-lang 自动切换 -->
<hy-keyboard mode="car" v-model="value" auto-switch-lang></hy-keyboard>
```

**受控模式示例：**
```html
<hy-keyboard
    mode="car"
    v-model="value"
    v-model:car-lang="carLang"
></hy-keyboard>
```

```ts
const carLang = ref<'zh' | 'en'>('zh')

// 手动控制切换逻辑
const handleInput = (val: string) => {
    if (val.length === 1) {
        carLang.value = 'en'
    }
}

const handleDelete = () => {
    if (carControlledValue.value.length === 1) {
        carLang.value = 'zh'
    }
}
```

### 4. custom 模式说明

`custom` 模式的键盘右侧有固定的侧边栏，包含删除键和关闭键：

- 侧边栏的删除键和关闭键**始终显示**，不需要额外配置
- 如果需要自定义额外按键位置，可以使用 `extra-key` 属性

```html
<!-- custom 模式：底部有自定义键，右侧有固定删除和关闭键 -->
<hy-keyboard
    mode="custom"
    v-model="value"
    :extra-key="['00', '.']"
    close-text="完成"
></hy-keyboard>
```

### 5. extraKey 属性

`extraKey` 支持两种格式：

```html
<!-- 字符串：单个额外按键，显示在 0 左侧 -->
<hy-keyboard mode="custom" extra-key="+"></hy-keyboard>

<!-- 数组：多个额外按键 (custom模式有效) -->
<hy-keyboard mode="custom" :extra-key="['.', '00']"></hy-keyboard>
```

### 6. showDotKey 属性

控制是否显示小数点键，默认显示：

```html
<!-- 不显示小数点 -->
<hy-keyboard :show-dot-key="false"></hy-keyboard>

<!-- 显示小数点 (默认) -->
<hy-keyboard :show-dot-key="true"></hy-keyboard>
```

### 7. randomKeyOrder 属性

设置为 `true` 后，数字按键顺序会随机打乱：

```html
<hy-keyboard :random-key-order="true"></hy-keyboard>
```

::: tip 注意
随机顺序只在键盘**每次显示时**生成一次，键盘打开期间点击按键不会改变其他按键位置。
:::

### 8. close 事件处理

点击关闭按钮或蒙层时，会触发 `close` 事件，但**不会自动关闭键盘**，需要手动处理：

```html
<hy-keyboard
    v-model:show="showKeyboard"
    @close="showKeyboard = false"
></hy-keyboard>
```

### 9. 身份证键盘

身份证键盘自动包含 `X` 键，建议配合 `maxlength` 使用：

```html
<hy-keyboard mode="idcard" :maxlength="18"></hy-keyboard>
```

## :japanese_castle:基本使用示例

### 默认数字键盘

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    close-text="完成"
    @input="handleInput"
    @delete="handleDelete"
    @close="handleClose"
></hy-keyboard>
```

```ts
const showKeyboard = ref(false)
const value = ref('')

const handleInput = (val: string) => {
    console.log('输入:', val)
}

const handleDelete = () => {
    console.log('删除')
}

const handleClose = () => {
    console.log('关闭')
    showKeyboard.value = false
}
```

### 带右侧栏的键盘

```html
<hy-keyboard
    v-model:show="showKeyboard"
    v-model="value"
    mode="custom"
    close-text="完成"
    @input="handleInput"
    @delete="handleDelete"
    @close="handleClose"
></hy-keyboard>
```

### 身份证键盘

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="idcard"
    v-model="value"
    @input="handleInput"
    @delete="handleDelete"
    @close="handleClose"
></hy-keyboard>
```

### 车牌号键盘(非受控模式)

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="car"
    auto-switch-lang="true"
    v-model="value"
    @input="handleInput"
    @delete="handleDelete"
    @close="handleClose"
></hy-keyboard>
```

### 车牌号键盘(受控模式)

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="car"
    v-model="value"
    v-model:car-lang="carLang"
    @input="handleInput"
    @delete="handleDelete"
    @close="handleClose"
></hy-keyboard>
```

```ts
const carLang = ref<'zh' | 'en'>('zh')

const handleInput = (val: string) => {
    if (val.length === 1) {
        carLang.value = 'en'
    }
    console.log('车牌号输入:', val)
}

const handleDelete = () => {
    if (carControlledValue.value.length === 1) {
        carLang.value = 'zh'
    }
    console.log('车牌号删除:', carControlledValue.value)
}
```

## :gear:键盘配置

### 不显示小数点

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    :show-dot-key="false"
    close-text="完成"
></hy-keyboard>
```

### 自定义额外按键

```html
<!-- 单个额外按键 -->
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    extra-key="+"
    close-text="完成"
></hy-keyboard>

<!-- 多个额外按键(custom模式) -->
<hy-keyboard
    v-model:show="showKeyboard"
    mode="custom"
    v-model="value"
    :extra-key="['00', '.']"
    close-text="完成"
></hy-keyboard>
```

### 随机数字键盘

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    :random-key-order="true"
    close-text="完成"
></hy-keyboard>
```

## :label:自定义头部

### 带标题的键盘

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    title="标题"
    close-text="完成"
></hy-keyboard>
```

### Slot自定义标题

```html
<hy-keyboard
    v-model:show="showKeyboard"
    mode="default"
    v-model="value"
    close-text="完成"
>
    <template #title>
        <view class="custom-title">
            <text class="custom-title-text">自定义标题</text>
        </view>
    </template>
</hy-keyboard>
```

```scss
.custom-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &-text {
        font-size: 32rpx;
        font-weight: 500;
        color: #333;
    }
}
```

## :test_tube:完整示例页面

:::details 打开示例页面
```vue
<template>
    <the-root-page>
        <!-- 组件类型 -->
        <view class="hy-title">组件类型</view>
        <view class="hy-subtitle">键盘类型</view>
        <hy-cell>
            <hy-cell-item
                title="默认键盘"
                clickable
                @click="showDefaultKeyboard = true"
            ></hy-cell-item>
            <hy-cell-item
                title="带右侧栏的键盘"
                clickable
                @click="showSidebarKeyboard = true"
            ></hy-cell-item>
            <hy-cell-item
                title="身份证键盘"
                clickable
                @click="showIdcardKeyboard = true"
            ></hy-cell-item>
            <hy-cell-item
                title="车牌号键盘(非受控)"
                clickable
                @click="showCarUncontrolledKeyboard = true"
            ></hy-cell-item>
            <hy-cell-item
                title="车牌号键盘(受控)"
                clickable
                @click="showCarControlledKeyboard = true"
            ></hy-cell-item>
        </hy-cell>

        <!-- 组件变体 -->
        <view class="hy-title">组件变体</view>
        <view class="hy-subtitle">标题与额外按键</view>
        <hy-cell>
            <hy-cell-item
                title="带标题的键盘"
                clickable
                @click="showTitleKeyboard = true"
            ></hy-cell-item>
            <hy-cell-item
                title="slot自定义标题"
                clickable
                @click="showSlotTitleKeyboard = true"
            ></hy-cell-item>
            <hy-cell-item
                title="多个额外按键"
                clickable
                @click="showMultipleExtraKeyboard = true"
            ></hy-cell-item>
            <hy-cell-item
                title="随机数字键盘"
                clickable
                @click="showRandomKeyboard = true"
            ></hy-cell-item>
        </hy-cell>

        <!-- 自定义配置 -->
        <view class="hy-title">自定义配置</view>
        <view class="hy-subtitle">小数点与按键控制</view>
        <hy-cell>
            <hy-cell-item
                title="不显示小数点"
                clickable
                @click="showNoDotKeyboard = true"
            ></hy-cell-item>
            <hy-cell-item
                title="自定义额外按键"
                clickable
                @click="showCustomExtraKeyboard = true"
            ></hy-cell-item>
        </hy-cell>

        <!-- 键盘组件 -->
        <hy-keyboard
            v-model:show="showDefaultKeyboard"
            mode="default"
            v-model="defaultValue"
            close-text="完成"
        ></hy-keyboard>

        <hy-keyboard
            v-model:show="showSidebarKeyboard"
            v-model="sidebarValue"
            mode="custom"
            close-text="完成"
        ></hy-keyboard>

        <hy-keyboard
            v-model:show="showIdcardKeyboard"
            mode="idcard"
            v-model="idcardValue"
        ></hy-keyboard>

        <hy-keyboard
            v-model:show="showCarUncontrolledKeyboard"
            mode="car"
            auto-switch-lang="true"
            v-model="carUncontrolledValue"
        ></hy-keyboard>

        <hy-keyboard
            v-model:show="showCarControlledKeyboard"
            mode="car"
            v-model="carControlledValue"
            v-model:car-lang="carLang"
        ></hy-keyboard>

        <hy-keyboard
            v-model:show="showTitleKeyboard"
            mode="default"
            v-model="titleValue"
            title="标题"
            close-text="完成"
        ></hy-keyboard>

        <hy-keyboard
            v-model:show="showSlotTitleKeyboard"
            mode="default"
            v-model="slotTitleValue"
            close-text="完成"
        >
            <template #title>
                <view class="custom-title">
                    <text class="custom-title-text">自定义标题</text>
                </view>
            </template>
        </hy-keyboard>

        <hy-keyboard
            v-model:show="showMultipleExtraKeyboard"
            mode="custom"
            v-model="multipleExtraValue"
            :extra-key="['00', '.']"
            close-text="完成"
        ></hy-keyboard>

        <hy-keyboard
            v-model:show="showRandomKeyboard"
            mode="default"
            v-model="randomValue"
            :random-key-order="true"
            close-text="完成"
        ></hy-keyboard>

        <hy-keyboard
            v-model:show="showNoDotKeyboard"
            mode="default"
            v-model="noDotValue"
            :show-dot-key="false"
            close-text="完成"
        ></hy-keyboard>

        <hy-keyboard
            v-model:show="showCustomExtraKeyboard"
            mode="default"
            v-model="customExtraValue"
            extra-key="+"
            close-text="完成"
        ></hy-keyboard>
    </the-root-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CarKeyboardLang } from '@/package/components/hy-keyboard/typing'

// 组件类型
const showDefaultKeyboard = ref(false)
const defaultValue = ref('')

const showSidebarKeyboard = ref(false)
const sidebarValue = ref('')

const showIdcardKeyboard = ref(false)
const idcardValue = ref('')

const showCarUncontrolledKeyboard = ref(false)
const carUncontrolledValue = ref('')

const showCarControlledKeyboard = ref(false)
const carControlledValue = ref('')
const carLang = ref<CarKeyboardLang>('zh')

// 组件变体
const showTitleKeyboard = ref(false)
const titleValue = ref('')

const showSlotTitleKeyboard = ref(false)
const slotTitleValue = ref('')

const showMultipleExtraKeyboard = ref(false)
const multipleExtraValue = ref('')

const showRandomKeyboard = ref(false)
const randomValue = ref('')

// 自定义配置
const showNoDotKeyboard = ref(false)
const noDotValue = ref('')

const showCustomExtraKeyboard = ref(false)
const customExtraValue = ref('')
</script>
```
:::

## API

### Keyboard Props

| 参数                  | 说明                                                            | 类型                     | 默认值      |
|---------------------|---------------------------------------------------------------|------------------------|----------|
| show                | 是否显示键盘                                                        | `boolean`              | false    |
| modelValue          | 绑定的值                                                          | `string`               | -        |
| title               | 标题                                                            | `string`               | -        |
| mode                | 键盘模式，可选值：default(数字键盘)、custom(自定义键盘)、car(车牌号键盘)、idcard(身份证键盘) | `string`               | default  |
| zIndex              | 层级                                                            | `number`               | 100      |
| maxlength           | 最大输入长度                                                        | `number`               | Infinity |
| showDeleteKey       | 是否显示删除键                                                       | `boolean`              | true     |
| showDotKey          | 是否显示小数点键                                                      | `boolean`              | true     |
| randomKeyOrder      | 是否随机键盘按键顺序                                                    | `boolean`              | false    |
| closeText           | 确认按钮文本                                                        | `string`               | -        |
| deleteText          | 删除按钮文本                                                        | `string`               | -        |
| closeButtonLoading  | 关闭按钮是否显示加载状态                                                  | `boolean`              | false    |
| modal               | 是否显示蒙层                                                        | `boolean`              | false    |
| hideOnClickOutside  | 是否在点击外部时收起键盘                                                  | `boolean`              | true     |
| lockScroll          | 是否锁定滚动                                                        | `boolean`              | true     |
| safeAreaInsetBottom | 是否在底部安全区域内                                                    | `boolean`              | true     |
| extraKey            | 额外按键，支持字符串或字符串数组                                              | `string` \| `string[]` | -        |
| carLang             | 车牌键盘语言模式，可选值：zh(省份)、en(字母)，不传则为非受控模式                          | `string`               | -        |
| autoSwitchLang      | 车牌键盘是否自动切换语言                                                  | `boolean`              | false    |
| customStyle         | 定义需要用到的外部样式                                                   | `CSSProperties`        | -        |
| customClass         | 自定义外部类名                                                       | `string`               | -        |

### Keyboard Events

| 事件名       | 说明               | 回调参数                          |
|-------------|--------------------|-----------------------------------|
| input       | 输入内容时触发     | text: 输入的字符                  |
| delete      | 删除内容时触发     | -                                 |
| close       | 关闭键盘时触发     | -                                 |
| update:show      | 可见状态改变时触发 | show: 当前可见状态              |
| update:modelValue | 值改变时触发      | value: 当前值                     |
| update:carLang    | 车牌语言改变时触发 | lang: 当前语言('zh'或'en')        |

### Keyboard Slots

| 插槽名    | 说明           | 接收值 |
|-----------|----------------|--------|
| title     | 自定义标题内容 | -      |


<demo-model url="pages-design/keyboard/keyboard"></demo-model>