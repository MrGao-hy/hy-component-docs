# Modal Component

> A popup modal, commonly used for message alerts, message confirmation, and completing specific interactions within the current page.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

::: warning Notes

- When `closeOnClickOverlay` is enabled, clicking the overlay only triggers the `close` event; it does not automatically close the modal. You need to handle the closing logic yourself
- The `asyncClose` and `asyncCancelClose` properties have been replaced by the `loading` and `autoClose` properties in the current implementation
- When a custom slot is passed, the `content` property becomes ineffective
- When customizing popup components on the current page, it is recommended to explicitly pass `:message="false"` to `hy-modal`, declaring it as an independent modal, to prevent button clicks from being taken over by the global message callback and becoming unresponsive

:::

## :japanese_castle: Basic Usage Examples

### Basic Modal

```html
<template>
    <view>
        <hy-button text="打开模态框" @click="show = true"></hy-button>
        <hy-modal v-model="show" content="这是一个基础模态框"></hy-modal>
    </view>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Modal with Title

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
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### With Cancel Button

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
    import { ref } from 'vue';

    const show = ref(false);

    const onConfirm = () => {
        uni.showToast({
            title: '已确认',
            icon: 'success',
        });
        show.value = false;
    };
</script>
```

### Swapping Button Positions

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
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Close on Overlay Click

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
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Controlling Modal Width

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
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Async Close (with Loading State)

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
    import { ref } from 'vue';

    const show = ref(false);
    const loading = ref(false);

    const onAsyncConfirm = () => {
        loading.value = true;
        // 模拟异步操作
        setTimeout(() => {
            uni.showToast({
                title: '操作成功',
                icon: 'success',
            });
            loading.value = false;
            show.value = false;
        }, 2000);
    };
</script>
```

### Modal with Form

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
                    <input v-model="formData.name" class="form-input" placeholder="请输入名称" />
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
    import { ref, reactive } from 'vue';

    const show = ref(false);
    const loading = ref(false);
    const formData = reactive({
        name: '',
        desc: '',
    });

    const onSubmit = () => {
        if (!formData.name) {
            uni.showToast({
                title: '请填写名称',
                icon: 'none',
            });
            return;
        }

        loading.value = true;
        setTimeout(() => {
            uni.showToast({
                title: '提交成功',
                icon: 'success',
            });
            loading.value = false;
            show.value = false;
        }, 1500);
    };
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

### Custom Button Styles

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
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Disabling the Zoom Effect

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
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Custom Border Radius

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
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

## :confetti_ball: Coexistence of Global Messages and Custom Modals

`useMessage()` injects a global message state into all descendant components, and needs to be paired with a `hy-modal` carrying the `message` property as a driver instance to render popups.

However, when a **global message driver instance** and a **custom modal** coexist on the same page, the custom `hy-modal` is also within the injection scope: if it is mistakenly identified as the driver instance, its visibility will follow the global state and its button clicks will be taken over by the global callbacks, manifesting as `v-model` not working and no response when clicking the confirm/cancel buttons.

In this case, explicitly passing `:message="false"` to the custom modal declares it as an independent modal that fully relies on `v-model` and the `confirm`/`cancel` events, unaffected by the hijacking of the globally injected state.

### Complete Example

```html
<template>
    <view>
        <hy-button text="全局消息确认" @click="onGlobalConfirm"></hy-button>
        <hy-button text="打开自定义模态框" @click="show = true"></hy-button>

        <!-- 全局消息驱动实例：由 message.alert / message.confirm 控制 -->
        <hy-modal message></hy-modal>

        <!-- 自定义模态框：显式声明 :message="false"，不受全局注入状态影响 -->
        <hy-modal
            v-model="show"
            title="填写信息"
            content="这是一个独立的自定义模态框"
            show-cancel-button
            @confirm="onConfirm"
            @cancel="show = false"
        ></hy-modal>
    </view>
</template>

<script setup>
    import { ref } from 'vue';
    import { useMessage } from '@hy-app/ui';

    const show = ref(false);

    // 在页面（或公共布局组件）中调用一次，向后代组件提供全局消息状态
    const message = useMessage();

    const onGlobalConfirm = async () => {
        const confirmed = await message.confirm({
            title: '删除确认',
            content: '确定要删除这条数据吗？',
        });
        if (confirmed) {
            uni.showToast({ title: '已删除', icon: 'success' });
        }
    };

    const onConfirm = () => {
        uni.showToast({ title: '自定义模态框已确认', icon: 'none' });
        show.value = false;
    };
</script>
```

::: tip Tips

- It is recommended to call `useMessage()` once in a common layout component and mount `<hy-modal />` there; all pages using that layout share the same global message instance;
- Do not bind `v-model` to the global message driver instance; its visibility is entirely controlled by `message.alert` / `message.confirm`;
- When a custom modal on the same page has unresponsive clicks or a non-working `v-model`, first check whether `:message="false"` was accidentally omitted.

:::

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Whether to show the modal | `boolean` | false |
| message | Whether to act as the driver instance for the `useMessage` global message; when `true`, visibility and callbacks are controlled by `message.alert` / `message.confirm`; when `false`, it is an independent modal relying on `v-model` and the `confirm`/`cancel` events, unaffected by the globally injected state | `boolean` | false |
| title | Title content | `string` | - |
| content | Modal content; ineffective if slot content is passed | `string` | - |
| confirmText | Text of the confirm button | `string` | Confirm |
| cancelText | Text of the cancel button | `string` | Cancel |
| showConfirmButton | Whether to show the confirm button | `boolean` | true |
| showCancelButton | Whether to show the cancel button | `boolean` | false |
| confirmColor | Color of the confirm button | `string` | - |
| cancelColor | Color of the cancel button | `string` | - |
| buttonReverse | Swap the positions of the confirm and cancel buttons | `boolean` | false |
| zoom | Whether to enable zoom mode | `boolean` | true |
| round | Modal border radius; supports number, px, and rpx units | `string`\|`number` | 16 |
| autoClose | Whether to automatically close after clicking the confirm button | `boolean` | true |
| loading | Whether to show the loading state | `boolean` | false |
| closeOnClickOverlay | Whether clicking the overlay is allowed to close the Modal (Note: the close event must be handled by yourself; the close callback is only executed when the overlay is clicked after closeOnClickOverlay is enabled) | `boolean` | false |
| negativeTop | Upward offset value; applies a negative margin-top to shift the modal upward, avoiding overlap with the keyboard; the default unit for numbers is px | `number` | 0 |
| width | Modal width; percentages are not supported; the default unit for numbers is px, and rpx is supported | `string`\|`number` | 550rpx |
| contentTextAlign | Text alignment; optional values: left, center, right | `string` | left |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event   | Description                                                        | Callback Parameters |
| ------- | ------------------------------------------------------------------ | ------------------- |
| confirm | Triggered when the confirm button is clicked                       | -                   |
| cancel  | Triggered when the cancel button is clicked                        | -                   |
| close   | Triggered when closing via overlay click; only effective when closeOnClickOverlay is true | -        |

### Slots

| Slot          | Description                                                                      | Accepted Values |
| ------------- | -------------------------------------------------------------------------------- | --------------- |
| default       | Custom content; overrides the content property                                   | -               |
| confirmButton | Custom button, used for scenarios requiring button-based authorization in WeChat Mini Program popups | -    |

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-modal-max-width` | Maximum popup width | `650rpx` |
| `--hy-modal-radius` | Border radius | Follows `--hy-radius-base` (20rpx) |
| `--hy-modal-title-padding-top` | Title top padding | `25px` |
| `--hy-modal-content-padding` | Content padding | `20px` |
| `--hy-modal-button-group-padding` | Button group padding | `20px` |
| `--hy-modal-confirm-button-padding` | Confirm button area padding | `0 25px 15px` |
| `--hy-modal-button-height` | Button height | `43px` |
| `--hy-modal-button-font-size` | Button font size | `16px` |
| `--hy-modal-title-font-size` | Title font size | Follows `--hy-font-size-base` (28rpx) |
| `--hy-modal-title-color` | Title color | Follows `--hy-text-color` |
| `--hy-modal-content-font-size` | Content font size | Follows `--hy-font-size-sm` (24rpx) |
| `--hy-modal-content-color` | Content color | Follows `--hy-text-color--grey` |
| `--hy-modal-button-confirm-color` | Confirm button color | `#FFFFFF` |
| `--hy-modal-button-cancel-color` | Cancel button color | Follows `--hy-text-color` |
| `--hy-modal-button-cancel-background` | Cancel button background color | Follows `--hy-background--empty` |
| `--hy-modal-button-gap` | Gap between the two bottom buttons | Follows `--hy-border-margin-padding-lg` |
| `--hy-modal-primary` | Theme color | Follows `--hy-primary` |

<demo-model url="pages-design/modal/modal"></demo-model>