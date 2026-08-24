# Notify Message Notification Component

> This component is generally used for scenarios where a notification slides down from the top of the page and then automatically retracts.

## :pushpin: Platform Difference Notes

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

::: warning Notes

- When `duration` is 0, the message notification will not automatically disappear; you need to manually call the `close` method to close it
- On H5, the navigation bar height (44px) is automatically reserved by default; other platforms are not affected
- When `safeAreaInsetTop` is set to true, the top status bar height will be automatically reserved

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-notify ref="notifyRef" message="I am a message notification"></hy-notify>
    <hy-button text="Show Notification" @click="showNotify"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';

    const notifyRef = ref();

    const showNotify = () => {
        notifyRef.value.show({
            message: 'This is a message notification',
        });
    };
</script>
```

### Controlling Display via v-model

```html
<template>
    <hy-notify v-model="show" message="Message content"></hy-notify>
    <hy-button text="Toggle Display" @click="show = !show"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>
```

### Different Theme Types

```html
<template>
    <hy-notify ref="notifyRef"></hy-notify>
    <hy-button text="Success Notification" @click="showSuccess"></hy-button>
    <hy-button text="Warning Notification" @click="showWarning"></hy-button>
    <hy-button text="Error Notification" @click="showError"></hy-button>
    <hy-button text="Info Notification" @click="showInfo"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';

    const notifyRef = ref();

    const showSuccess = () => {
        notifyRef.value.show({
            type: 'success',
            message: 'Operation successful',
        });
    };

    const showWarning = () => {
        notifyRef.value.show({
            type: 'warning',
            message: 'Warning message',
        });
    };

    const showError = () => {
        notifyRef.value.show({
            type: 'error',
            message: 'Operation failed',
        });
    };

    const showInfo = () => {
        notifyRef.value.show({
            type: 'info',
            message: 'Info message',
        });
    };
</script>
```

### Custom Display Duration

```html
<template>
    <hy-notify ref="notifyRef"></hy-notify>
    <hy-button text="Show for 5 Seconds" @click="showLongNotify"></hy-button>
    <hy-button text="Show Permanently" @click="showPermanent"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';

    const notifyRef = ref();

    const showLongNotify = () => {
        notifyRef.value.show({
            message: 'Automatically disappears after 5 seconds',
            duration: 5000,
        });
    };

    const showPermanent = () => {
        notifyRef.value.show({
            message: 'Close manually',
            duration: 0, // Does not auto-hide when set to 0
        });
    };

    // Close manually
    const closeNotify = () => {
        notifyRef.value.close();
    };
</script>
```

### Custom Styles

```html
<template>
    <hy-notify ref="notifyRef"></hy-notify>
    <hy-button text="Custom Color" @click="showCustomStyle"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';

    const notifyRef = ref();

    const showCustomStyle = () => {
        notifyRef.value.show({
            message: 'Custom color and size',
            color: '#fff',
            bgColor: '#4F8EF7',
            fontSize: 16,
            top: 100,
        });
    };
</script>
```

### Reserving Top Safe Area

```html
<template>
    <hy-notify ref="notifyRef"></hy-notify>
    <hy-button text="Show Notification" @click="showNotify"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';

    const notifyRef = ref();

    const showNotify = () => {
        notifyRef.value.show({
            message: 'Automatically adapts to the status bar',
            safeAreaInsetTop: true,
        });
    };
</script>
```

### Custom Icon

```html
<template>
    <hy-notify ref="notifyRef">
        <template #icon>
            <hy-icon :name="IconConfig.REMIND" color="#ffd700"></hy-icon>
        </template>
    </hy-notify>
    <hy-button text="Show Notification with Icon" @click="showNotify"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';
    import { IconConfig } from 'hy-app';

    const notifyRef = ref();

    const showNotify = () => {
        notifyRef.value.show({
            message: 'Custom icon example',
        });
    };
</script>
```

### With Callback Function

```html
<template>
    <hy-notify ref="notifyRef"></hy-notify>
    <hy-button text="Show Notification" @click="showNotify"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';

    const notifyRef = ref();

    const showNotify = () => {
        notifyRef.value.show({
            message: 'Execute callback after 3 seconds',
            duration: 3000,
            complete: () => {
                uni.showToast({
                    title: 'Notification closed',
                    icon: 'none',
                });
            },
        });
    };
</script>
```

## API

### Notify Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| modelValue | Whether to show the notification | `boolean` | false |
| top | Distance from the top (44px by default on H5) | `number` | 0 |
| type | Theme type | `primary`\|`success`\|`warning`\|`error`\|`info` | primary |
| color | Font color | `string` | #ffffff |
| bgColor | Background color | `string` | - |
| icon | Custom icon name | `string` | - |
| message | Text content to display | `string` | - |
| duration | Display duration; does not disappear when set to 0, in ms | `number` | 3000 |
| fontSize | Font size; numeric values default to px | `number` \| `string` | 15 |
| safeAreaInsetTop | Whether to reserve top safe area (status bar height) | `boolean` | false |
| customStyle | Custom external styles to be applied | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Methods

| Method Name | Description               | Parameter Type        |
| ------ | ------------------ | --------------- |
| show   | Show the notification and load the configuration | `NotifyOptions` |
| close  | Close the notification           | -               |

### NotifyOptions Configuration

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| top | Distance from the top | `number` | 0 |
| type | Theme type | `primary`\|`success`\|`warning`\|`error`\|`info` | primary |
| color | Font color | `string` | #ffffff |
| bgColor | Background color | `string` | - |
| icon | Custom icon name | `string` | - |
| message | Text content to display | `string` | - |
| duration | Display duration; does not disappear when set to 0, in ms | `number` | 3000 |
| fontSize | Font size; numeric values default to px | `number` \| `string` | 15 |
| safeAreaInsetTop | Whether to reserve top safe area | `boolean` | false |
| complete | Callback function after closing | `() => void` | - |

### Slots

| Slot Name | Description           | Accepted Value |
| ------ | -------------- | ------ |
| icon   | Custom notification icon | -      |

## typings

::: details Type Description

```ts
type NotifyType = 'primary' | 'success' | 'warning' | 'error' | 'info';

interface NotifyOptions {
    /** Distance from the top */
    top?: number;
    /** Theme type */
    type?: NotifyType;
    /** Font color */
    color?: string;
    /** Background color */
    bgColor?: string;
    /** Custom icon */
    icon?: string;
    /** Text content to display */
    message?: string;
    /** Display duration; does not disappear when set to 0 */
    duration?: number;
    /** Font size */
    fontSize?: number | string;
    /** Whether to reserve top safe area */
    safeAreaInsetTop?: boolean;
    /** Callback function after closing */
    complete?: () => void;
}
```

:::

<demo-model url="pages-design/notify/notify"></demo-model>