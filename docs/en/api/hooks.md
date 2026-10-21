# Hooks Composition API

## useShare Mini Program Global Share Configuration

### useShare(options?) => { onShareAppMessage, onShareTimeline }

Configures global sharing for the Mini Program and returns sharing methods to be exposed by pages.

**Parameters**

| Parameter                | Type   | Required | Default | Description                              |
| ------------------------ | ------ | -------- | ------- | ---------------------------------------- |
| options                  | object | No       | -       | Share configuration                      |
| options.title            | string | No       | -       | Title name                               |
| options.path             | string | No       | -       | Mini Program path                        |
| options.friendImageUrl   | string | No       | -       | Cover image for sharing with friends     |
| options.timelineImageUrl | string | No       | -       | Cover image for sharing to Moments       |

**Return Value**

| Type   | Description                                            |
| ------ | ------------------------------------------------------ |
| object | Contains the onShareAppMessage and onShareTimeline methods |

**Example**

1. Single page usage
When a page needs custom share content, register it in `<script setup>` together with hooks from `@dcloudio/uni-app`:
```typescript [Index.vue]
<script setup lang="ts">
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import { useShare } from '@hy-app/ui'

const share = useShare({
  title: 'Page Title',
  path: '/pages/index/index',
  friendImageUrl: '/static/share-friend.png',
  timelineImageUrl: '/static/share-timeline.png'
})

// Registered at the page level; takes precedence over the global mixin's default sharing
onShareAppMessage(share.onShareAppMessage)
onShareTimeline(share.onShareTimeline)
</script>
```

2. Global usage
> Once registered globally, the "Forward to Friend / Share to Moments" options in the WeChat Mini Program's top-right menu become available, so you don't need to write it separately for each page.
```typescript [main.ts]
import { useShare } from '@hy-app/ui';

app.mixin(
  useShare({
    title: 'Hy Component Library'
  })
)
```

---

## useToast Global Toast Messages

### useToast() => ToastInstance

A Composition API for global toast messages, providing multiple types of message prompts.

**Return Value**

| Type | Description |
| --- | --- |
| ToastInstance | Toast instance, including the show, info, success, error, warning, primary, loading, and close methods |

**ToastInstance Methods**

| Method  | Parameters         | Description        |
| ------- | ------------------ | ------------------ |
| show    | message, options?  | Default toast      |
| info    | message, options?  | Info toast         |
| success | message, options?  | Success toast      |
| error   | message, options?  | Error toast        |
| warning | message, options?  | Warning toast      |
| primary | message, options?  | Primary toast      |
| loading | message?, options? | Loading            |
| close   | -                  | Close all toasts   |

**options Parameters**

| Parameter | Type              | Required | Default | Description                                       |
| --------- | ----------------- | -------- | ------- | ------------------------------------------------- |
| message   | string            | Yes      | -       | Text message to display                           |
| type      | string            | No       | -       | Theme type: primary, success, error, warning, info |
| position  | string            | No       | -       | Position where the toast appears: top, center, bottom |
| icon      | boolean \| string | No       | -       | Icon to display                                   |
| overlay   | boolean           | No       | -       | Whether to prevent touch pass-through             |
| duration  | number            | No       | -       | Duration (in milliseconds)                        |

**Example**

```typescript
import { useToast } from '@hy-app/ui';

const toast = useToast();

toast.success('Operation successful!');
toast.error('Operation failed');
toast.loading('Loading...');
```

---

## useMessage Message Dialog Composition API

### useMessage() => MessageInstance

A Composition API for message dialogs, providing the alert and confirm methods.

::: warning Note

`useMessage()` only injects the global message state into descendant components. A `hy-modal` carrying the `message` attribute must be mounted in the calling component's template as the driver instance for the dialog to render:

- Do not bind `v-model` on the driver instance; its visibility is fully controlled by `message.alert` / `message.confirm`;
- If custom `hy-modal` instances also exist on the same page, explicitly pass `:message="false"` to them to prevent button clicks from being hijacked by the global callback and failing. See [Modal: Coexistence of Global Messages and Custom Modals](/en/components/modal.md#confetti-ball-coexistence-of-global-messages-and-custom-modals) for details.

:::

**Return Value**

| Type            | Description                                  |
| --------------- | -------------------------------------------- |
| MessageInstance | Message instance, including the alert and confirm methods |

**MessageInstance Methods**

| Method  | Parameters         | Description     |
| ------- | ------------------ | --------------- |
| alert   | message \| options | Alert dialog    |
| confirm | message \| options | Confirm dialog  |

**options Parameters**

| Parameter         | Type     | Required | Default | Description                    |
| ----------------- | -------- | -------- | ------- | ------------------------------ |
| title             | string   | No       | -       | Dialog title                   |
| content           | string   | Yes      | -       | Dialog content                 |
| confirmText       | string   | No       | -       | Confirm button text            |
| cancelText        | string   | No       | -       | Cancel button text             |
| showConfirmButton | boolean  | No       | -       | Whether to show the confirm button |
| showCancelButton  | boolean  | No       | -       | Whether to show the cancel button |
| confirmColor      | string   | No       | -       | Confirm button color           |
| cancelColor       | string   | No       | -       | Cancel button color            |
| confirm           | function | No       | -       | Confirm button click callback  |
| cancel            | function | No       | -       | Cancel button click callback   |

**Example**

```html
<template>
    <view>
        <hy-button text="Delete" @click="onRemove"></hy-button>

        <!-- Global message driver instance -->
        <hy-modal message></hy-modal>
    </view>
</template>

<script setup>
    import { useMessage } from '@hy-app/ui';

    const message = useMessage();

    const onRemove = async () => {
        const result = await message.confirm({
            title: 'Delete Confirmation',
            content: 'Are you sure you want to delete this?',
            confirmText: 'Confirm',
            cancelText: 'Cancel'
        });
        if (result) {
            uni.showToast({ title: 'Deleted', icon: 'success' });
        }
    };
</script>
```

---

## useTouch Touch Event Composition API

### useTouch() => TouchInstance

A Composition API for touch events, used to track and analyze user touch interactions.

**Return Value**

| Type          | Description   |
| ------------- | ------------- |
| TouchInstance | Touch instance |

**TouchInstance Properties and Methods**

| Name       | Type     | Description            |
| ---------- | -------- | ---------------------- |
| touchStart | function | Touch start handler    |
| touchMove  | function | Touch move handler     |
| direction  | ref      | Touch direction        |
| deltaX     | ref      | Horizontal delta       |
| deltaY     | ref      | Vertical delta         |
| offsetX    | ref      | Horizontal offset      |
| offsetY    | ref      | Vertical offset        |

**Example**

```typescript
import { useTouch } from '@hy-app/ui';

const { touchStart, touchMove, direction, deltaX, deltaY } = useTouch();
```

---

## useShakeService Shake Sensor Composition API

### useShakeService(threshold?) => { startShakeListener, stopShakeListener }

A Composition API for the shake sensor, implementing shake-to-activate functionality by listening to device acceleration.

**Parameters**

| Parameter | Type   | Required | Default | Description      |
| --------- | ------ | -------- | ------- | ---------------- |
| threshold | number | No       | -       | Shake threshold  |

**Return Value**

| Type   | Description                                                     |
| ------ | --------------------------------------------------------------- |
| object | Contains the startShakeListener and stopShakeListener methods   |

**Example**

```typescript
import { useShakeService } from '@hy-app/ui';

const { startShakeListener, stopShakeListener } = useShakeService();

startShakeListener(() => {
    console.log('Shake triggered');
});
```

---

## useTranslate Internationalization Composition API

### useTranslate(module?) => { t }

A Composition API for internationalization, used to implement multi-language switching in components or pages.

**Parameters**

| Parameter | Type   | Required | Default | Description              |
| --------- | ------ | -------- | ------- | ------------------------ |
| module    | string | No       | -       | Language pack module name |

**Return Value**

| Type   | Description               |
| ------ | ------------------------- |
| object | Contains the t translation method |

**Example**

```typescript
import { useTranslate } from '@hy-app/ui';

const { t } = useTranslate('common');

console.log(t('hello'));
console.log(t('welcome', 'Hy'));
```

---

## useQueue Queue Management Composition API

### useQueue() => QueueInstance

A Composition API for queue management, used to manage the display order of components and mutually exclusive closing logic.

**Return Value**

| Type          | Description    |
| ------------- | -------------- |
| QueueInstance | Queue instance |

**QueueInstance Methods**

| Method           | Parameters | Description                                   |
| ---------------- | ---------- | --------------------------------------------- |
| pushToQueue      | component  | Add a component to the queue                  |
| removeFromQueue  | component  | Remove a component from the queue             |
| closeOther       | component  | Close all components except the current one   |
| closeOutside     | -          | Close all components                          |

**Example**

```typescript
import { useQueue } from '@hy-app/ui';

const { pushToQueue, removeFromQueue, closeOther } = useQueue();

pushToQueue(popupRef.value);
closeOther(popupRef.value);
```