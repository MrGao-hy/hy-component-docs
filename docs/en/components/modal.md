# Modal Component

> A popup modal, commonly used for message prompts, message confirmation, and completing specific interactive operations within the current page.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :warning: Notes

::: warning Notes

- When `closeOnClickOverlay` is enabled, clicking the overlay will only trigger the `close` event and will not automatically close the modal; you need to handle the closing logic yourself
- The `asyncClose` and `asyncCancelClose` properties have been replaced by the `loading` and `autoClose` properties in the current implementation
- When a custom slot is passed, the `content` property becomes invalid

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
            content="The cancel button is on the right, and the confirm button is on the left"
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
        <hy-button text="Close on Overlay Click" @click="show = true"></hy-button>
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
                title: 'Operation successful',
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
                title: 'Submitted successfully',
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
            content="The confirm button is green, and the cancel button is gray"
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

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Whether to show the modal | `boolean` | false |
| title | Title content | `string` | - |
| content | Modal content; invalid if slot content is passed | `string` | - |
| confirmText | Text of the confirm button | `string` | Confirm |
| cancelText | Text of the cancel button | `string` | Cancel |
| showConfirmButton | Whether to show the confirm button | `boolean` | true |
| showCancelButton | Whether to show the cancel button | `boolean` | false |
| confirmColor | Color of the confirm button | `string` | - |
| cancelColor | Color of the cancel button | `string` | - |
| buttonReverse | Swap the positions of the confirm and cancel buttons | `boolean` | false |
| zoom | Whether to enable zoom mode | `boolean` | true |
| round | Modal border radius; supports number, px, and rpx units | `string`\|`number` | 16 |
| autoClose | Whether to close automatically after clicking the confirm button | `boolean` | true |
| loading | Whether to show the loading state | `boolean` | false |
| closeOnClickOverlay | Whether to allow closing the modal by clicking the overlay (Note: the close event must be handled manually; the close callback is only triggered when clicking the overlay layer after closeOnClickOverlay is enabled) | `boolean` | false |
| negativeTop | Upward offset value; applies a negative margin-top to shift the modal upward, avoiding overlap with the keyboard; default unit is px | `number` | 0 |
| width | Modal width; percentages are not supported; default unit is px for numeric values, rpx is supported | `string`\|`number` | 550rpx |
| confirmButtonShape | Confirm button style; when set, the cancel button will not be displayed; optional values: circle, square | `string` | - |
| contentTextAlign | Text alignment; optional values: left, center, right | `string` | left |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameters |
| ---------- | ----------- | ------------------- |
| confirm | Triggered when the confirm button is clicked | - |
| cancel | Triggered when the cancel button is clicked | - |
| close | Triggered when closing by clicking the overlay; only valid when closeOnClickOverlay is true | - |

### Slots

| Slot Name | Description | Accepted Values |
| --------- | ----------- | --------------- |
| default | Pass custom content, overriding the content property | - |
| confirmButton | Pass a custom button, used in scenarios where authorization via button is required in WeChat Mini Program popups | - |

<demo-model url="pages-design/modal/modal"></demo-model>