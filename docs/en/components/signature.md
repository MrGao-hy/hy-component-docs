# Signature Component

> Used for signature scenarios, a signature component implemented based on Canvas. Provides basic signing, history records, pen pressure effects, and other features.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- If the exported image is not clear, you can set exportScale to 2 or higher.

:::

### 1. Unable to Draw in a Popup

::: warning Cause

- When used in a WeChat Mini Program popup, if the popup has not opened but the component's `onMounted` has already executed, initialization will fail. You need to call the initialization method again after the popup opens:

:::

```html
<template>
    <hy-button text="Open Popup" @click="onOpen"></hy-button>
    <hy-popup v-model:show="show">
        <hy-signature ref="signatureRef"></hy-signature>
    </hy-popup>
</template>
```

```ts
const signatureRef = ref<>()
const show = ref(false)

const onOpen = () => {
  show.value = true;
  setTimeout(() => signatureRef.value?.init(), 500)
}
```

## :japanese_castle: Basic Usage Examples

```html
<!-- Global usage -->
<hy-signature></hy-signature>
```

### Custom Brush

- Set the stroke width by configuring `lineWidth`
- Set the stroke color by configuring `pen-color`

```html
<template>
    <hy-signature pen-color="red" :lineWidth="5"></hy-signature>
</template>
```

### History Operations

- Enable or disable history operations by configuring `enableHistory`

```html
<template>
    <hy-signature enableHistory></hy-signature>
</template>
```

### Custom Pen Pressure Parameters

- Enable pen pressure mode via `pressure` to simulate real handwriting. In pen pressure mode, stroke thickness varies with writing speed.
- `min-width`: the minimum stroke width, i.e., the line thickness when writing fast
- `max-width`: the maximum stroke width, i.e., the line thickness when writing slowly
- `min-speed`: the speed threshold, used to adjust pressure sensitivity

```html
<template>
    <hy-signature pressure :min-width="1" :max-width="6" :min-speed="1.5"></hy-signature>
</template>
```

### Custom Buttons

- Customize the bottom buttons via the `footer` slot.

```html
<template>
    <hy-signature enableHistory>
        <template #footer="{ clear, confirm, currentStep, restore, revoke, historyList }">
            <hy-button block @click="changeDisabled" v-if="disabled">Start Signing</hy-button>
            <block v-if="!disabled">
                <hy-button size="small" plain @click="revoke" :disabled="currentStep <= 0">
                    Undo
                </hy-button>
                <hy-button
                    size="small"
                    plain
                    @click="restore"
                    :disabled="currentStep >= historyList.length"
                >
                    Redo
                </hy-button>
                <hy-button size="small" plain @click="clear">Clear</hy-button>
                <hy-button size="small" @click="confirm">Confirm</hy-button>
            </block>
        </template>
    </hy-signature>
</template>
```

### Landscape Signature Page

You can implement a landscape signature page by configuring the page's `pageOrientation`

::: code-group

```vue [vue]
<template>
    <view class="landscape-signature">
        <hy-signature
            v-if="inited"
            :height="height"
            :width="width"
            enable-history
            pressure
            background-color="#f5f5f5"
            @confirm="handleConfirm"
        >
            <template #footer="{ clear, confirm, restore, revoke, canUndo, canRedo }">
                <view class="custom-actions">
                    <view class="button-group">
                        <hy-button size="small" plain @click="revoke" :disabled="!canUndo">
                            Undo
                        </hy-button>
                        <hy-button size="small" plain @click="restore" :disabled="!canRedo">
                            Redo
                        </hy-button>
                        <hy-button size="small" plain @click="clear">Clear</hy-button>
                        <hy-button size="small" type="primary" @click="confirm">Done</hy-button>
                    </view>
                </view>
            </template>
        </hy-signature>
    </view>
</template>
```

```ts [.ts]
import { sleep } from '@hy-app/ui';

const height = ref(0);
const width = ref(0);
const inited = ref(false);

onMounted(() => {
    const { windowWidth, windowHeight } = uni.getSystemInfoSync();
    width.value = windowWidth - 48;
    height.value = windowHeight - 48;
    sleep(100).then(() => {
        inited.value = true;
    });
});
```

```scss [.scss]
.landscape-signature {
    height: 100vh;
    // #ifdef H5
    height: calc(100vh - 44px);
    // #endif
    background: #fff;
    position: relative;
    padding: 24px 0;
    padding-left: 48px;
    box-sizing: border-box;

    .custom-actions {
        position: fixed;
        left: 0;
        top: 50%;
        width: 48px;
        transform: translateY(-50%) rotate(90deg);
        transform-origin: center;
        z-index: 10;

        .button-group {
            display: flex;
            flex-direction: row;
            gap: 12px;
            white-space: nowrap;
            width: max-content;
            transform: translateX(-50%);
        }
    }
}
```

:::

## API

### Signature Props

| Parameter         | Description                                   | Type               | Default |
| ----------------- | --------------------------------------------- | ------------------ | ------- |
| pen-color         | Signature pen color                           | `string`           | #000000 |
| line-width        | Signature pen width                           | `number`           | 3       |
| height            | Canvas height, default unit px for numbers    | `number`\|`string` | -       |
| width             | Canvas width, default unit px for numbers     | `number`\|`string` | -       |
| clear-text        | Text of the clear button                      | `string`           | -       |
| confirm-text      | Text of the confirm button                    | `string`           | -       |
| file-type         | Exported image type                           | `string`           | png     |
| quality           | Exported image quality (0-1)                  | `number`           | 1       |
| export-scale      | Scale ratio of the exported image             | `number`           | 1       |
| disabled          | Whether to disable the signature pad          | `boolean`          | false   |
| background-color  | Background color of the canvas                | `string`           | -       |
| disable-scroll    | Whether to disable canvas scrolling           | `boolean`          | true    |
| enable-history    | Whether to enable history                     | `boolean`          | false   |
| step              | History step size                             | `number`           | 1       |
| pressure          | Whether to enable pen pressure mode           | `boolean`          | false   |
| min-width         | Minimum width in pen pressure mode            | `number`           | 2       |
| max-width         | Maximum width in pen pressure mode            | `number`           | 6       |
| min-speed         | Speed threshold in pen pressure mode          | `number`           | 1.5     |

### Events

| Event Name | Description                       | Callback Parameters   |
| ---------- | --------------------------------- | --------------------- |
| start      | Triggered when signing starts     | event: TouchEvent     |
| end        | Triggered when signing ends       | event: TouchEvent     |
| signing    | Triggered during signing          | event: TouchEvent     |
| confirm    | Triggered on signature confirm    | result: SignatureResult |
| clear      | Triggered when signature is cleared | -                   |

### Methods

| Name    | Description                  | Parameters            |
| ------- | ---------------------------- | --------------------- |
| init    | Initialize the signature pad | forceUpdate?: boolean |
| confirm | Confirm the signature        | -                     |
| clear   | Clear the signature          | -                     |
| restore | Redo the previous step       | -                     |
| revoke  | Undo the previous step       | -                     |

### Slots

| Slot Name | Description           | Received Values                                          |
| --------- | --------------------- | -------------------------------------------------------- |
| footer    | Custom bottom buttons | clear, confirm, restore, revoke, currentStep, historyList |

<demo-model url="pages-design/signature/signature"></demo-model>