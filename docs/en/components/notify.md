# Notify Message Prompt Component

> This component is generally used in scenarios where a notification slides down from the top of the page and then automatically retracts.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- When `duration` is 0, the message prompt will not disappear automatically; you need to manually call the `close` method to close it
- On H5, the navigation bar height (44px) is reserved by default; other platforms are not affected
- When `safeAreaInsetTop` is set to true, the top status bar height is automatically reserved

:::

## :japanese_castle: Basic Usage Examples

### Basic Usage

```html
<template>
    <hy-notify ref="notifyRef" message="I am a message prompt"></hy-notify>
    <hy-button text="Show Notification" @click="showNotify"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';

    const notifyRef = ref();

    const showNotify = () => {
        notifyRef.value.show({
            message: 'This is a message prompt',
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
    <hy-button text="Success Prompt" @click="showSuccess"></hy-button>
    <hy-button text="Warning Prompt" @click="showWarning"></hy-button>
    <hy-button text="Error Prompt" @click="showError"></hy-button>
    <hy-button text="Info Prompt" @click="showInfo"></hy-button>
</template>

<script setup>
    import { ref } from 'vue';

    const notifyRef = ref();

    const showSuccess = () => {
        notifyRef.value.show({
            type: 'success',
            message: 'Operation succeeded',
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
            message: 'Disappears automatically after 5 seconds',
            duration: 5000,
        });
    };

    const showPermanent = () => {
        notifyRef.value.show({
            message: 'Close manually',
            duration: 0, // Does not disappear automatically when set to 0
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
    <hy-button text="Custom Colors" @click="showCustomStyle"></hy-button>
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
            message: 'Callback executes after 3 seconds',
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

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Whether to show the notification | `boolean` | false |
| top | Distance from the top (44px by default on H5) | `number` | 0 |
| type | Theme type | `primary`\|`success`\|`warning`\|`error`\|`info` | primary |
| color | Font color | `string` | #ffffff |
| bgColor | Background color | `string` | - |
| icon | Custom icon name | `string` | - |
| message | Text content to display | `string` | - |
| duration | Display duration; does not disappear when set to 0, unit: ms | `number` | 3000 |
| fontSize | Font size; default unit is px for numeric values | `number` \| `string` | 15 |
| safeAreaInsetTop | Whether to reserve top safe area (status bar height) | `boolean` | false |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Methods

| Method | Description                          | Parameter Type  |
| ------ | ------------------------------------ | --------------- |
| show   | Show the notification and load config | `NotifyOptions` |
| close  | Close the notification               | -               |

### NotifyOptions Configuration

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| top | Distance from the top | `number` | 0 |
| type | Theme type | `primary`\|`success`\|`warning`\|`error`\|`info` | primary |
| color | Font color | `string` | #ffffff |
| bgColor | Background color | `string` | - |
| icon | Custom icon name | `string` | - |
| message | Text content to display | `string` | - |
| duration | Display duration; does not disappear when set to 0, unit: ms | `number` | 3000 |
| fontSize | Font size; default unit is px for numeric values | `number` \| `string` | 15 |
| safeAreaInsetTop | Whether to reserve top safe area | `boolean` | false |
| complete | Callback function after closing | `() => void` | - |

### Slots

| Slot Name | Description             | Accepted Value |
| --------- | ----------------------- | -------------- |
| icon      | Custom notification icon | -              |

## typings

::: details Type Definitions

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

### CSS Variables

| Variable | Description | Default |
| --- | --- | --- |
| `--hy-notify-font-size` | Text font size | Follows `--hy-font-size-base` (28rpx) |

<demo-model url="pages-design/notify/notify"></demo-model>