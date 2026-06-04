# Modal 模态框组件
> 弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

- `closeOnClickOverlay` 开启后，点击遮罩只会触发 `close` 事件，不会自动关闭模态框，需要自行处理关闭逻辑
- `asyncClose` 和 `asyncCancelClose` 属性在当前实现中已通过 `loading` 和 `autoClose` 属性替代
- 当传入自定义插槽时，`content` 属性将失效

## :japanese_castle:基本使用示例

### 基础模态框

```html
<template>
    <view>
        <hy-button text="打开模态框" @click="show = true"></hy-button>
        <hy-modal v-model="show" content="这是一个基础模态框"></hy-modal>
    </view>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 带标题的模态框

```html
<template>
    <view>
        <hy-button text="打开带标题的模态框" @click="show = true"></hy-button>
        <hy-modal 
            v-model="show" 
            title="系统通知"
            content="这是一条重要通知，请仔细阅读。"
            @confirm="show = false"
        ></hy-modal>
    </view>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 带取消按钮

```html
<template>
    <view>
        <hy-button text="打开带取消按钮的模态框" @click="show = true"></hy-button>
        <hy-modal 
            v-model="show" 
            title="提示"
            content="确定要执行此操作吗？"
            show-cancel-button
            @confirm="onConfirm"
            @cancel="show = false"
        ></hy-modal>
    </view>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)

const onConfirm = () => {
    uni.showToast({
        title: '已确认',
        icon: 'success'
    })
    show.value = false
}
</script>
```

### 对调按钮位置

```html
<template>
    <view>
        <hy-button text="打开对调按钮的模态框" @click="show = true"></hy-button>
        <hy-modal 
            v-model="show" 
            title="提示"
            content="取消按钮在右边，确认按钮在左边"
            show-cancel-button
            button-reverse
            @confirm="show = false"
            @cancel="show = false"
        ></hy-modal>
    </view>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 点击遮罩关闭

```html
<template>
    <view>
        <hy-button text="点击遮罩关闭" @click="show = true"></hy-button>
        <hy-modal 
            v-model="show" 
            title="提示"
            content="点击遮罩区域可以关闭模态框"
            close-on-click-overlay
            @close="show = false"
        ></hy-modal>
    </view>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 控制模态框宽度

```html
<template>
    <view>
        <hy-button text="自定义宽度" @click="show = true"></hy-button>
        <hy-modal 
            v-model="show" 
            title="自定义宽度"
            content="模态框宽度为 400rpx"
            width="400rpx"
            @confirm="show = false"
        ></hy-modal>
    </view>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 异步关闭（带loading状态）

```html
<template>
    <view>
        <hy-button text="异步关闭" @click="show = true"></hy-button>
        <hy-modal 
            v-model="show" 
            title="提交中"
            content="正在处理您的请求，请稍候..."
            :auto-close="false"
            :loading="loading"
            @confirm="onAsyncConfirm"
        ></hy-modal>
    </view>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const loading = ref(false)

const onAsyncConfirm = () => {
    loading.value = true
    // 模拟异步操作
    setTimeout(() => {
        uni.showToast({
            title: '操作成功',
            icon: 'success'
        })
        loading.value = false
        show.value = false
    }, 2000)
}
</script>
```

### 带表单的模态框

```html
<template>
    <view>
        <hy-button text="打开表单弹窗" @click="show = true"></hy-button>
        <hy-modal 
            v-model="show" 
            title="填写信息"
            :auto-close="false"
            :loading="loading"
            @confirm="onSubmit"
            @cancel="show = false"
        >
            <view class="form-content">
                <view class="form-item">
                    <text class="form-label">名称</text>
                    <input 
                        v-model="formData.name" 
                        class="form-input" 
                        placeholder="请输入名称"
                    />
                </view>
                <view class="form-item">
                    <text class="form-label">描述</text>
                    <textarea 
                        v-model="formData.desc" 
                        class="form-textarea" 
                        placeholder="请输入描述"
                    />
                </view>
            </view>
        </hy-modal>
    </view>
</template>

<script setup>
import { ref, reactive } from 'vue'

const show = ref(false)
const loading = ref(false)
const formData = reactive({
    name: '',
    desc: ''
})

const onSubmit = () => {
    if (!formData.name) {
        uni.showToast({
            title: '请填写名称',
            icon: 'none'
        })
        return
    }
    
    loading.value = true
    setTimeout(() => {
        uni.showToast({
            title: '提交成功',
            icon: 'success'
        })
        loading.value = false
        show.value = false
    }, 1500)
}
</script>

<style scoped>
.form-content {
    padding: 20rpx;
}

.form-item {
    margin-bottom: 30rpx;
}

.form-label {
    font-size: 28rpx;
    color: #333;
    display: block;
    margin-bottom: 15rpx;
}

.form-input {
    width: 100%;
    height: 80rpx;
    border: 1rpx solid #ddd;
    border-radius: 8rpx;
    padding: 0 20rpx;
    font-size: 28rpx;
}

.form-textarea {
    width: 100%;
    height: 160rpx;
    border: 1rpx solid #ddd;
    border-radius: 8rpx;
    padding: 20rpx;
    font-size: 28rpx;
}
</style>
```

### 自定义按钮样式

```html
<template>
    <view>
        <hy-button text="自定义按钮颜色" @click="show = true"></hy-button>
        <hy-modal 
            v-model="show" 
            title="自定义按钮"
            content="确认按钮为绿色，取消按钮为灰色"
            show-cancel-button
            confirm-color="#07c160"
            cancel-color="#999"
            @confirm="show = false"
            @cancel="show = false"
        ></hy-modal>
    </view>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 禁用缩放效果

```html
<template>
    <view>
        <hy-button text="禁用缩放效果" @click="show = true"></hy-button>
        <hy-modal 
            v-model="show" 
            title="无缩放效果"
            content="打开和关闭时没有缩放动画"
            :zoom="false"
            @confirm="show = false"
        ></hy-modal>
    </view>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 自定义圆角

```html
<template>
    <view>
        <hy-button text="自定义圆角" @click="show = true"></hy-button>
        <hy-modal 
            v-model="show" 
            title="自定义圆角"
            content="圆角为 30rpx"
            round="30rpx"
            @confirm="show = false"
        ></hy-modal>
    </view>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

## API

### Props

| 参数                  | 说明                                                                     | 类型                 | 默认值    |
|---------------------|------------------------------------------------------------------------|--------------------|--------|
| modelValue          | 是否显示模态框                                                                | `boolean`          | false  |
| title               | 标题内容                                                                   | `string`           | -      |
| content             | 模态框内容，如传入slot内容，则此参数无效                                                 | `string`           | -      |
| confirmText         | 确认按钮的文字                                                                | `string`           | 确认     |
| cancelText          | 取消按钮的文字                                                                | `string`           | 取消     |
| showConfirmButton   | 是否显示确认按钮                                                               | `boolean`          | true   |
| showCancelButton    | 是否显示取消按钮                                                               | `boolean`          | false  |
| confirmColor        | 确认按钮的颜色                                                                | `string`           | -      |
| cancelColor         | 取消按钮的颜色                                                                | `string`           | -      |
| buttonReverse       | 对调确认和取消的位置                                                             | `boolean`          | false  |
| zoom                | 是否开启缩放模式                                                               | `boolean`          | true   |
| round               | 模态框圆角，支持数值、px、rpx单位                                                    | `string`\|`number` | 16     |
| autoClose           | 点击确认按钮后是否自动关闭                                                          | `boolean`          | true   |
| loading             | 是否显示loading状态                                                          | `boolean`          | false  |
| closeOnClickOverlay | 是否允许点击遮罩关闭Modal（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） | `boolean`          | false  |
| negativeTop         | 往上偏移的值，给一个负的margin-top，往上偏移，避免和键盘重合的情况，单位任意，数值则默认为px单位                 | `number`           | 0      |
| width               | modal宽度，不支持百分比，可以数值，px，rpx单位                                           | `string`\|`number` | 550rpx |
| confirmButtonShape  | 确认按钮的样式，设置后将不会显示取消按钮，可选值：circle、square                                 | `string`           | -      |
| contentTextAlign    | 文案对齐方式，可选值：left、center、right                                           | `string`           | left   |
| customStyle         | 自定义需要用到的外部样式                                                           | `CSSProperties`    | -      |
| customClass         | 自定义外部类名                                                                | `string`           | -      |

### Events

| 事件名           | 说明                                   | 回调参数 |
|---------------|--------------------------------------|------|
| confirm       | 点击确认按钮时触发                            | -    |
| cancel        | 点击取消按钮时触发                            | -    |
| close         | 点击遮罩关闭时触发，closeOnClickOverlay为true有效 | -    |

### Slots

| 插槽名           | 说明                          | 接收值 |
|---------------|-----------------------------|-----|
| default       | 传入自定义内容，覆盖content属性         | -   |
| confirmButton | 传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景 | -   |

<demo-model url="pages-design/modal/modal"></demo-model>
