# hooks Composition API

## useShare Mini Program Global Share Configuration

### useShare(options?) => { onShareAppMessage, onShareTimeline }

Configures sharing globally for the mini program; returns share methods to be exposed on pages.

**Parameters**

| Parameter Name            | Type   | Required | Default | Description                          |
| ------------------------ | ------ | ---- | ------ | -------------------- |
| options                  | object | No   | -      | Share configuration             |
| options.title            | string | No   | -      | Title name             |
| options.path             | string | No   | -      | Mini program path           |
| options.friendImageUrl   | string | No   | -      | Cover image for sharing with friends   |
| options.timelineImageUrl | string | No   | -      | Cover image for sharing to Moments   |

**Return Value**

| Type   | Description                                            |
| ------ | ----------------------------------------------------- |
| object | Contains the onShareAppMessage and onShareTimeline methods |

**Example**

1. Single page usage
When a page needs to customize its share content, register it in `<script setup>` together with the hooks from `@dcloudio/uni-app`:
```typescript [Index.vue]
<script setup lang="ts">
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import { useShare } from '@hy-app/ui'

const share = useShare({
  title: '页面标题',
  path: '/pages/index/index',
  friendImageUrl: '/static/share-friend.png',
  timelineImageUrl: '/static/share-timeline.png'
})

// 注册到页面级，优先于全局 mixin 的默认分享
onShareAppMessage(share.onShareAppMessage)
onShareTimeline(share.onShareTimeline)
</script>
```

2. Global usage
> After global registration, the "Forward to Friend / Share to Moments" options in the WeChat mini program's top-right menu become available, without needing to write them separately for each page.
```typescript [main.ts]
import { useShare } from '@hy-app/ui';

app.mixin(
  useShare({
    title: '华玥组件库'
  })
)
```

---

## useToast Global Toast Messages

### useToast() => ToastInstance

A global toast message composable API that provides multiple types of message prompts.

**Return Value**

| Type | Description |
| --- | --- |
| ToastInstance | Toast instance, containing the show, info, success, error, warning, primary, loading, and close methods |

**ToastInstance Methods**

| Method  | Parameters         | Description      |
| ------- | ------------------ | ---------------- |
| show    | message, options?  | Default toast    |
| info    | message, options?  | Info toast       |
| success | message, options?  | Success toast    |
| error   | message, options?  | Error toast      |
| warning | message, options?  | Warning toast    |
| primary | message, options?  | Primary toast    |
| loading | message?, options? | Loading          |
| close   | -                  | Close all toasts |

**options Parameters**

| Parameter  | Type              | Required | Default | Description                                             |
| ---------- | ----------------- | -------- | ------ | ------------------------------------------------------- |
| message    | string            | Yes      | -      | Text message to display                                 |
| type       | string            | No       | -      | Theme type: primary, success, error, warning, info      |
| position   | string            | No       | -      | Position where the toast appears: top, center, bottom   |
| icon       | boolean \| string | No       | -      | Icon to display                                         |
| overlay    | boolean           | No       | -      | Whether to prevent touch pass-through                   |
| duration   | number            | No       | -      | Duration (in milliseconds)                              |

**Example**

```typescript
import { useToast } from '@hy-app/ui';

const toast = useToast();

toast.success('操作成功！');
toast.error('操作失败');
toast.loading('加载中...');
```

---

## useMessage Message Dialog Composable API

### useMessage() => MessageInstance

A message dialog composable API that provides alert and confirm methods.

**Return Value**

| Type            | Description                                       |
| --------------- | ------------------------------------------------- |
| MessageInstance | Message instance, containing the alert and confirm methods |

**MessageInstance Methods**

| Method  | Parameters         | Description    |
| ------- | ------------------ | -------------- |
| alert   | message \| options | Alert dialog   |
| confirm | message \| options | Confirm dialog |

**options Parameters**

| Parameter         | Type     | Required | Default | Description                    |
| ----------------- | -------- | -------- | ------ | ------------------------------ |
| title             | string   | No       | -      | Dialog title                   |
| content           | string   | Yes      | -      | Dialog content                 |
| confirmText       | string   | No       | -      | Confirm button text            |
| cancelText        | string   | No       | -      | Cancel button text             |
| showConfirmButton | boolean  | No       | -      | Whether to show the confirm button |
| showCancelButton  | boolean  | No       | -      | Whether to show the cancel button  |
| confirmColor      | string   | No       | -      | Confirm button color           |
| cancelColor       | string   | No       | -      | Cancel button color            |
| confirm           | function | No       | -      | Confirm button click callback  |
| cancel            | function | No       | -      | Cancel button click callback   |

**Example**

```typescript
import { useMessage } from '@hy-app/ui';

const message = useMessage();

const result = await message.confirm({
    title: '删除确认',
    content: '确定要删除吗？',
    confirmText: '确定',
    cancelText: '取消',
});
```

---

## useTouch Touch Event Composable API

### useTouch() => TouchInstance

A touch event composable API used to track and analyze user touch operations.

**Return Value**

| Type          | Description   |
| ------------- | ------------- |
| TouchInstance | Touch instance |

**TouchInstance Properties and Methods**

| Name       | Type     | Description              |
| ---------- | -------- | ------------------------ |
| touchStart | function | Touch start handler      |
| touchMove  | function | Touch move handler       |
| direction  | ref      | Touch direction          |
| deltaX     | ref      | Horizontal displacement  |
| deltaY     | ref      | Vertical displacement    |
| offsetX    | ref      | Horizontal offset        |
| offsetY    | ref      | Vertical offset          |

**Example**

```typescript
import { useTouch } from '@hy-app/ui';

const { touchStart, touchMove, direction, deltaX, deltaY } = useTouch();
```

---

## useShakeService Shake Sensor Composable API

### useShakeService(threshold?) => { startShakeListener, stopShakeListener }

A shake sensor composable API that implements shake detection by listening to device acceleration.

**Parameters**

| Parameter | Type   | Required | Default | Description      |
| --------- | ------ | -------- | ------ | ---------------- |
| threshold | number | No       | -      | Shake threshold  |

**Return Value**

| Type   | Description                                                    |
| ------ | ------------------------------------------------------------- |
| object | Contains the startShakeListener and stopShakeListener methods |

**Example**

```typescript
import { useShakeService } from '@hy-app/ui';

const { startShakeListener, stopShakeListener } = useShakeService();

startShakeListener(() => {
    console.log('摇一摇触发');
});
```

---

## useTranslate Internationalization Composable API

### useTranslate(module?) => { t }

An internationalization translation composable API used to implement multi-language switching in components or pages.

**Parameters**

| Parameter | Type   | Required | Default | Description               |
| --------- | ------ | -------- | ------ | ------------------------- |
| module    | string | No       | -      | Language pack module name |

**Return Value**

| Type   | Description                   |
| ------ | ----------------------------- |
| object | Contains the t translation method |

**Example**

```typescript
import { useTranslate } from '@hy-app/ui';

const { t } = useTranslate('common');

console.log(t('hello'));
console.log(t('welcome', '华玥'));
```

---

## useQueue Queue Management Composable API

### useQueue() => QueueInstance

A queue management composable API used to manage component display order and mutually exclusive closing logic.

**Return Value**

| Type          | Description    |
| ------------- | -------------- |
| QueueInstance | Queue instance |

**QueueInstance Methods**

| Method          | Parameters | Description                                  |
| --------------- | ---------- | -------------------------------------------- |
| pushToQueue     | component  | Add a component to the queue                 |
| removeFromQueue | component  | Remove a component from the queue            |
| closeOther      | component  | Close all components except the current one  |
| closeOutside    | -          | Close all components                         |

**Example**

```typescript
import { useQueue } from '@hy-app/ui';

const { pushToQueue, removeFromQueue, closeOther } = useQueue();

pushToQueue(popupRef.value);
closeOther(popupRef.value);
```