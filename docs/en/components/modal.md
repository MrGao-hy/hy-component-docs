# Modal

> A popup modal, commonly used for message alerts, message confirmation, and completing specific interactions within the current page.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- When `closeOnClickOverlay` is enabled, clicking the overlay only triggers the `close` event and does not automatically close the modal; you need to handle the closing logic yourself
- The `asyncClose` and `asyncCancelClose` properties have been replaced by the `loading` and `autoClose` properties in the current implementation
- When a custom slot is passed in, the `content` property will be ignored
- When customizing popup components on the current page, it is recommended to explicitly pass `:message="false"` to `hy-modal` to declare it as an independent modal, preventing button clicks from being taken over by the global message callback and becoming ineffective

:::

## :japanese_castle: Basic Usage Examples

### Basic Modal

```html
<template>
    <view>
        <hy-button text="Open Modal" @click="show = true"></hy-button>
        <hy-modal v-model="show" content="This is a basic modal"></hy-modal>
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
        <hy-button text="Open Modal with Title" @click="show = true"></hy-button>
        <hy-modal
            v-model="show"
            title="System Notice"
            content="This is an important notice, please read it carefully."
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
        <hy-button text="Open Modal with Cancel Button" @click="show = true"></hy-button>
        <hy-modal
            v-model="show"
            title="Notice"
            content="Are you sure you want to perform this operation?"
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
            title: 'Confirmed',
            icon: 'success',
        });
        show.value = false;
    };
</script>
```

### Swap Button Positions

```html
<template>
    <view>
        <hy-button text="Open Modal with Swapped Buttons" @click="show = true"></hy-button>
        <hy-modal
            v-model="show"
            title="Notice"
            content="The cancel button is on the right, the confirm button is on the left"
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
        <hy-button text="Close by Clicking Overlay" @click="show = true"></hy-button>
        <hy-modal
            v-model="show"
            title="Notice"
            content="Click the overlay area to close the modal"
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

### Control Modal Width

```html
<template>
    <view>
        <hy-button text="Custom Width" @click="show = true"></hy-button>
        <hy-modal
            v-model="show"
            title="Custom Width"
            content="The modal width is 400rpx"
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
        <hy-button text="Async Close" @click="show = true"></hy-button>
        <hy-modal
            v-model="show"
            title="Submitting"
            content="Processing your request, please wait..."
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
        // Simulate an async operation
        setTimeout(() => {
            uni.showToast({
                title: 'Operation Succeeded',
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
        <hy-button text="Open Form Modal" @click="show = true"></hy-button>
        <hy-modal
            v-model="show"
            title="Fill in Information"
            :auto-close="false"
            :loading="loading"
            @confirm="onSubmit"
            @cancel="show = false"
        >
            <view class="form-content">
                <view class="form-item">
                    <text class="form-label">Name</text>
                    <input v-model="formData.name" class="form-input" placeholder="Please enter a name" />
                </view>
                <view class="form-item">
                    <text class="form-label">Description</text>
                    <textarea
                        v-model="formData.desc"
                        class="form-textarea"
                        placeholder="Please enter a description"
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
                title: 'Please fill in the name',
                icon: 'none',
            });
            return;
        }

        loading.value = true;
        setTimeout(() => {
            uni.showToast({
                title: 'Submitted Successfully',
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
        <hy-button text="Custom Button Colors" @click="show = true"></hy-button>
        <hy-modal
            v-model="show"
            title="Custom Buttons"
            content="The confirm button is green, the cancel button is gray"
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

### Disable Zoom Effect

```html
<template>
    <view>
        <hy-button text="Disable Zoom Effect" @click="show = true"></hy-button>
        <hy-modal
            v-model="show"
            title="No Zoom Effect"
            content="No zoom animation when opening and closing"
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
        <hy-button text="Custom Border Radius" @click="show = true"></hy-button>
        <hy-modal
            v-model="show"
            title="Custom Border Radius"
            content="The border radius is 30rpx"
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

## :confetti_ball: Global Message and Custom Modal Coexistence

`useMessage()` injects a global message state into all descendant components, and requires a `hy-modal` carrying the `message` property to be paired with it as a driver instance to render popups.

However, when a **global message driver instance** and a **custom modal** coexist on the same page, the custom `hy-modal` is also within the injection scope: if it is mistakenly identified as the driver instance, its visibility will follow the global state and its button clicks will be taken over by the global callbacks, manifesting as `v-model` not working and the confirm/cancel buttons not responding to clicks.

In this case, explicitly passing `:message="false"` to the custom modal declares it as an independent modal, fully driven by `v-model` and the `confirm`/`cancel` events, unaffected by the globally injected state.

### Complete Example

```html
<template>
    <view>
        <hy-button text="Global Message Confirm" @click="onGlobalConfirm"></hy-button>
        <hy-button text="Open Custom Modal" @click="show = true"></hy-button>

        <!-- Global message driver instance: controlled by message.alert / message.confirm -->
        <hy-modal message></hy-modal>

        <!-- Custom modal: explicitly declared with :message="false", unaffected by the globally injected state -->
        <hy-modal
            v-model="show"
            title="Fill in Information"
            content="This is an independent custom modal"
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

    // Call once in the page (or a common layout component) to provide the global message state to descendant components
    const message = useMessage();

    const onGlobalConfirm = async () => {
        const confirmed = await message.confirm({
            title: 'Delete Confirmation',
            content: 'Are you sure you want to delete this record?'
        });
        if (confirmed) {
            uni.showToast({ title: 'Deleted', icon: 'success' });
        }
    };

    const onConfirm = () => {
        uni.showToast({ title: 'Custom modal confirmed', icon: 'none' });
        show.value = false;
    };
</script>
```

::: tip Tip

- It is recommended to call `useMessage()` uniformly in a common layout component and mount `<hy-modal />` there, so that all pages using that layout share the same global message instance;
- Do not bind `v-model` to the global message driver instance; its visibility is entirely controlled by `message.alert` / `message.confirm`;
- When a custom modal on the same page has unresponsive clicks or a non-working `v-model`, first check whether `:message="false"` is missing.

:::

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- |-------|
| modelValue | Whether to show the modal | `boolean` | false |
| message | Whether to act as the driver instance for the useMessage global message; when `true`, visibility and callbacks are controlled by `message.alert` / `message.confirm`; when `false`, it is an independent modal driven by `v-model` and the `confirm`/`cancel` events, unaffected by the globally injected state | `boolean` | false |
| title | Title content | `string` | -     |
| content | Modal content; if slot content is passed in, this parameter is invalid | `string` | -     |
| confirmText | Text of the confirm button | `string` | Confirm |
| cancelText | Text of the cancel button | `string` | Cancel |
| showConfirmButton | Whether to show the confirm button | `boolean` | true  |
| showCancelButton | Whether to show the cancel button | `boolean` | false |
| confirmColor | Color of the confirm button | `string` | -     |
| cancelColor | Color of the cancel button | `string` | -     |
| buttonReverse | Swap the positions of the confirm and cancel buttons | `boolean` | false |
| zoom | Whether to enable zoom mode | `boolean` | true  |
| round | Border radius of the modal; supports number, px, and rpx units | `string`\|`number` | 16    |
| autoClose | Whether to automatically close after clicking the confirm button | `boolean` | true  |
| loading | Whether to show the loading state | `boolean` | false |
| closeOnClickOverlay | Whether to allow closing the modal by clicking the overlay (Note: the close event needs to be handled by yourself; the close callback is only executed when the overlay is clicked after closeOnClickOverlay is enabled) | `boolean` | false |
| negativeTop | Upward offset value; applies a negative margin-top to shift upward, avoiding overlap with the keyboard; the default unit for numbers is px | `number` | 0     |
| width | Modal width; percentages are not supported; the default unit for numbers is px, and the rpx unit is supported | `string`\|`number` | 550rpx |
| confirmButtonShape | Style of the confirm button; when set, the cancel button will no longer be displayed; optional values: circle, square | `string` | -     |
| contentTextAlign | Text alignment; optional values: left, center, right | `string` | left  |
| customStyle | Custom external styles to be applied | `CSSProperties` | -     |
| customClass | Custom external class name | `string` | -     |

### Events

| Event Name | Description                                              | Callback Parameters |
| ------- | ------------------------------------------------- | -------- |
| confirm | Triggered when the confirm button is clicked                                | -        |
| cancel  | Triggered when the cancel button is triggered                                | -        |
| close   | Triggered when the modal is closed by clicking the overlay; only effective when closeOnClickOverlay is true | -        |

### Slots

| Slot Name        | Description                                                   | Accepted Values |
| ------------- | ------------------------------------------------------ | ------ |
| default       | Pass in custom content, overriding the content property                        | -      |
| confirmButton | Pass in a custom button, used for scenarios where authorization is granted via a button in WeChat Mini Program popups | -      |

<demo-model url="pages-design/modal/modal"></demo-model>