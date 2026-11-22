# Toast Message Prompt Component

> The Toast component is mainly used for eye-catching prompt effects such as message notifications, loading indicators, and operation result feedback, providing a rich variety of APIs.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Important Notes

::: warning Important Notes

- Since elements cannot be created via JS in uni, you need to include the toast component in the page and then open it via ref
- Use the `useToast()` hook function to create a toast instance, which supports global calls
- `toast.loading()` must be closed manually by calling `toast.close()`, otherwise it will not close automatically
- When `duration` is set to `-1`, it will not close automatically
- The `icon` property supports a boolean value (shows the default icon), a string (custom icon name), or an icon property object value
- The component communicates via the global events `__hy_toast_open__` and `__hy_toast_close__`
- It is recommended to add the `<hy-toast></hy-toast>` tag in the root component of the page

:::

## :japanese_castle: Basic Usage Example

```html
<!-- Add the component to the page -->
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
toast.show('Default message');

// Info prompt
toast.info('This is an info message');

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

// Close automatically after 5 seconds
setTimeout(() => {
    toast.close();
}, 5000);
```

### Custom Configuration

```typescript
// Custom display position
toast.success('Top prompt', { position: 'top' });
toast.success('Bottom prompt', { position: 'bottom' });
toast.success('Center prompt', { position: 'center' }); // Default

// Custom display duration
toast.info('Closes after 3 seconds', { duration: 3000 });

// No auto close
toast.info('Manual close', { duration: -1 });

// Show overlay mask (prevents touch-through)
toast.success('Prompt', { overlay: true });

// Hide overlay mask (allows touch-through)
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

### Toast Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| message | Displayed text | `string` | - |
| type | Theme type | `'error' \| 'warning' \| 'success' \| 'primary' \| 'info'` | info |
| icon | Icon name or boolean value (true shows the default icon) | `string \| boolean` | false |
| loading | Whether in loading state | `boolean` | false |
| loadMode | Loading icon mode | `'circle' \| 'spinner' \| 'semicircle'` | circle |
| overlay | Whether touch passes through | `boolean` | true |
| cover | Whether to show the overlay mask | `boolean` | false |
| position | Position where the toast appears | `'top' \| 'center' \| 'bottom'` | center |
| duration | Display duration (ms); does not auto-close when -1 | `number` | 2000 |
| zIndex | zIndex level | `number` | 110000 |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Options Parameters

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| message | Displayed text | `string` | - |
| type | Theme type | `'error' \| 'warning' \| 'success' \| 'primary' \| 'info'` | info |
| icon | Icon name or boolean value (true shows the default icon) | `string \| boolean` | false |
| loading | Whether in loading state | `boolean` | false |
| loadMode | Loading icon mode | `'circle' \| 'spinner' \| 'semicircle'` | circle |
| overlay | Whether to prevent touch-through | `boolean` | false |
| cover | Whether to show the overlay mask | `boolean` | false |
| position | Position where the toast appears | `'top' \| 'center' \| 'bottom'` | center |
| duration | Display duration (ms); does not auto-close when -1 | `number` | 2000 |
| complete | Callback function executed after completion | `Function` | - |

### Methods

| Method  | Description                        | Parameters                                 |
| ------- | ---------------------------------- | ------------------------------------------ |
| show    | Show default toast (no icon)       | `message: string, options?: ToastOptions`  |
| info    | Show info prompt (with icon)       | `message: string, options?: ToastOptions`  |
| success | Show success prompt (with icon)    | `message: string, options?: ToastOptions`  |
| error   | Show error prompt (with icon)      | `message: string, options?: ToastOptions`  |
| warning | Show warning prompt (with icon)    | `message: string, options?: ToastOptions`  |
| primary | Show primary color prompt (with icon) | `message: string, options?: ToastOptions`  |
| loading | Show loading prompt (must be closed manually) | `message?: string, options?: ToastOptions` |
| close   | Close all toasts                   | -                                          |
| hide    | Hide the Toast                     | -                                          |

### Typings

::: details Type Definitions

```typescript
/** Toast options */
export interface ToastOptions {
    /** Displayed text */
    message?: string;
    /** Theme type: primary, success, error, warning, info */
    type?: string;
    /** Position where the toast appears: top, center, bottom */
    position?: string;
    /** Icon to display (true shows the default icon, a string is a custom icon name, an object is icon property configuration) */
    icon?: boolean | string | { name: string; size?: string | number; color?: string };
    /** Whether to show the overlay mask (prevents touch-through) */
    overlay?: boolean;
    /** Whether in loading state */
    loading?: boolean;
    /** Loading icon mode: circle, spinner, semicircle */
    loadMode?: string;
    /** Display duration (ms); does not auto-close when -1 */
    duration?: number;
    /** Callback function executed after completion */
    complete?: Function | null;
}
```

:::

### CSS Variables

| Variable                       | Description                            | Default                                 |
| ------------------------------ | -------------------------------------- | --------------------------------------- |
| `--hy-toast-z-index`           | z-index level                          | `11000`                                 |
| `--hy-toast-padding`           | Padding                                | `20rpx 32rpx`                           |
| `--hy-toast-radius`            | Border radius                          | `16rpx`                                 |
| `--hy-toast-bg-color`          | Background color (icon mode)           | `#585858`                               |
| `--hy-toast-max-width`         | Max width                              | `600rpx`                                |
| `--hy-toast-box-shadow`        | Shadow                                 | `0 8rpx 24rpx rgba(0, 0, 0, 0.15)`      |
| `--hy-toast-loading-padding`   | Padding in loading mode                | `40rpx`                                 |
| `--hy-toast-icon-size`         | Icon size                              | `40rpx`                                 |
| `--hy-toast-icon-margin-right` | Icon right margin                      | `16rpx`                                 |
| `--hy-toast-text-max-width`    | Text max width                         | `480rpx`                                |
| `--hy-toast-default-bg-color`  | Background color in default mode       | `rgba(0, 0, 0, 0.75)`                   |
| `--hy-toast-icon-radius`       | Icon border radius                     | Follows `--hy-radius-semicircle` (100px) |
| `--hy-toast-text-color`        | Text color                             | `#ffffff`                               |
| `--hy-toast-text-font-size`    | Text font size                         | Follows `--hy-font-size-base` (28rpx)   |
| `--hy-toast-error`             | Danger color                           | Follows `--hy-error`                    |
| `--hy-toast-info`              | Info color                             | Follows `--hy-info`                     |
| `--hy-toast-primary`           | Primary color                          | Follows `--hy-primary`                  |
| `--hy-toast-success`           | Success color                          | Follows `--hy-success`                  |
| `--hy-toast-warning`           | Warning color                          | Follows `--hy-warning`                  |

<demo-model url="pages-design/toast/toast"></demo-model>