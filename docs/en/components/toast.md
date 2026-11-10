# Toast Message Prompt Component

> The Toast component is mainly used for eye-catching prompt effects such as message notifications, loading indicators, and operation result feedback, providing a rich variety of APIs.

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- Since elements cannot be created via JS in uni, you need to place the toast component in the page and open it via ref
- Use the `useToast()` hook function to create a toast instance, which supports global invocation
- `toast.loading()` must be closed manually by calling `toast.close()`, otherwise it will not close automatically
- When `duration` is set to `-1`, it will not close automatically
- The `icon` property supports a boolean value (shows the default icon), a string (custom icon name), or an icon property object value
- The component communicates via the global events `__hy_toast_open__` and `__hy_toast_close__`
- It is recommended to add the `<hy-toast></hy-toast>` tag in the page's root component

:::

## :japanese_castle: Basic Usage Example

```html
<!-- Add the component in the page -->
<template>
    <view>
        <hy-toast></hy-toast>
        <!-- Other content -->
    </view>
</template>
```

```typescript
import { useToast } from '@hy-app/ui';
import { onMounted } from 'vue';

const toast = useToast();

onMounted(() => {
    toast.success('Operation successful');
});
```

### Multiple Types of Prompts

```typescript
// Default prompt (no icon)
toast.show('Default prompt message');

// Info prompt
toast.info('This is an info prompt');

// Success prompt
toast.success('Operation successful');

// Error prompt
toast.error('Operation failed');

// Warning prompt
toast.warning('Warning message');

// Primary color prompt
toast.primary('Important message');
```

### Loading Prompt

```typescript
// Show loading prompt (default text "Loading...")
toast.loading();

// Custom loading text
toast.loading('Loading, please wait...');

// Auto close after 5 seconds
setTimeout(() => {
    toast.close();
}, 5000);
```

### Custom Configuration

```typescript
// Custom display position
toast.success('Top prompt', { position: 'top' });
toast.success('Bottom prompt', { position: 'bottom' });
toast.success('Centered prompt', { position: 'center' }); // default

// Custom display duration
toast.info('Closes in 3 seconds', { duration: 3000 });

// No auto close
toast.info('Manual close', { duration: -1 });

// Show overlay (prevents touch pass-through)
toast.success('Prompt', { overlay: true });

// Hide overlay (allows touch pass-through)
toast.success('Prompt', { overlay: false });

// Custom icon (string: icon name)
toast.info('Custom icon', { icon: 'star' });

// Custom icon (object: can set size, color, etc.)
toast.info('Custom icon', {
    icon: { name: 'time', size: '24', color: '#2979ff' },
});

// Callback function
toast.success('Operation successful', {
    complete: () => {
        console.log('toast closed');
    },
});
```

### Complete Example

```html
<template>
    <view class="demo">
        <hy-toast></hy-toast>
        <hy-button text="Show success prompt" @click="showSuccess"></hy-button>
        <hy-button text="Show loading prompt" @click="showLoading"></hy-button>
    </view>
</template>

<script setup lang="ts">
    import { useToast } from '@hy-app/ui';

    const toast = useToast();

    const showSuccess = () => {
        toast.success('Operation successful', {
            duration: 2000,
            position: 'bottom',
            complete: () => {
                console.log('Prompt closed');
            },
        });
    };

    const showLoading = () => {
        toast.loading('Loading data...', { position: 'center' });

        // Simulate an async operation
        setTimeout(() => {
            toast.close();
            toast.success('Loading complete');
        }, 3000);
    };
</script>
```

## API

### Options

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| message | Text to display | `string` | - |
| type | Theme type | `'error' \| 'warning' \| 'success' \| 'primary' \| 'info'` | info |
| icon | Icon name or boolean (true shows the default icon) | `string \| boolean` | false |
| loading | Whether in loading state | `boolean` | false |
| loadMode | Loading icon mode | `'circle' \| 'spinner' \| 'semicircle'` | circle |
| overlay | Whether to prevent touch pass-through | `boolean` | false |
| cover | Whether to show the overlay | `boolean` | false |
| position | Position where the toast appears | `'top' \| 'center' \| 'bottom'` | center |
| duration | Display duration (ms), no auto close when set to -1 | `number` | 2000 |
| complete | Callback function fired after completion | `Function` | - |

### Methods

| Method  | Description                            | Parameters                                 |
| ------- | -------------------------------------- | ------------------------------------------ |
| show    | Show default toast (no icon)           | `message: string, options?: ToastOptions`  |
| info    | Show info prompt (with icon)           | `message: string, options?: ToastOptions`  |
| success | Show success prompt (with icon)        | `message: string, options?: ToastOptions`  |
| error   | Show error prompt (with icon)          | `message: string, options?: ToastOptions`  |
| warning | Show warning prompt (with icon)        | `message: string, options?: ToastOptions`  |
| primary | Show primary color prompt (with icon)  | `message: string, options?: ToastOptions`  |
| loading | Show loading prompt (manual close required) | `message?: string, options?: ToastOptions` |
| close   | Close all toasts                       | -                                          |

### Typings

::: details Type Definitions

```typescript
/** Toast configuration options */
export interface ToastOptions {
    /** Text to display */
    message?: string;
    /** Theme type: primary, success, error, warning, info */
    type?: string;
    /** Position where the toast appears: top, center, bottom */
    position?: string;
    /** Icon to display (true shows the default icon, string is a custom icon name, object is icon property configuration) */
    icon?: boolean | string | { name: string; size?: string | number; color?: string };
    /** Whether to show the overlay (prevents touch pass-through) */
    overlay?: boolean;
    /** Whether in loading state */
    loading?: boolean;
    /** Loading icon mode: circle, spinner, semicircle */
    loadMode?: string;
    /** Display duration (ms), no auto close when set to -1 */
    duration?: number;
    /** Callback function fired after completion */
    complete?: Function | null;
}
```

:::

### CSS Variables

| Variable                       | Description                          | Default                                 |
| ------------------------------ | ------------------------------------ | --------------------------------------- |
| `--hy-toast-z-index`           | Z-index                              | `11000`                                 |
| `--hy-toast-padding`           | Padding                              | `20rpx 32rpx`                           |
| `--hy-toast-radius`            | Border radius                        | `16rpx`                                 |
| `--hy-toast-bg-color`          | Background color (with icon mode)    | `#585858`                               |
| `--hy-toast-max-width`         | Max width                            | `600rpx`                                |
| `--hy-toast-box-shadow`        | Shadow                               | `0 8rpx 24rpx rgba(0, 0, 0, 0.15)`      |
| `--hy-toast-loading-padding`   | Loading mode padding                 | `40rpx`                                 |
| `--hy-toast-icon-size`         | Icon size                            | `40rpx`                                 |
| `--hy-toast-icon-margin-right` | Icon right margin                    | `16rpx`                                 |
| `--hy-toast-text-max-width`    | Text max width                       | `480rpx`                                |
| `--hy-toast-default-bg-color`  | Default mode background color        | `rgba(0, 0, 0, 0.75)`                   |
| `--hy-toast-icon-radius`       | Icon border radius                   | Follows `--hy-radius-semicircle` (100px) |
| `--hy-toast-text-color`        | Text color                           | `#ffffff`                               |
| `--hy-toast-text-font-size`    | Text font size                       | Follows `--hy-font-size-base` (28rpx)    |

<demo-model url="pages-design/toast/toast"></demo-model>