# hooks Combinational API

## useShare Global Applet Configuration Sharing

### useShare(options?) => { onShareAppMessage, onShareTimeline }

Global configuration for applet sharing, returning sharing methods for page exposure.

**Parameters**

| Parameter Name | Type   | Required | Default | Description                 |
| -------------- | ------ | ---- | ------ | ------------------------ |
| options        | object | No   | -      | Sharing configuration         |
| options.title  | string | No   | -      | Title name             |
| options.path   | string | No   | -      | Applet path           |
| options.friendImageUrl | string | No   | -      | Cover image for sharing with friends   |
| options.timelineImageUrl | string | No   | -      | Cover image for sharing to Moments |

**Return Value**

| Type   | Description                                           |
| ------ | ---------------------------------------------- |
| object | Contains onShareAppMessage and onShareTimeline methods |

**Example**

```typescript
import { useShare } from '@hy-app/ui';

const { onShareAppMessage, onShareTimeline } = useShare({
    title: 'HuaYuan Component Library',
    path: '/pages/index/index',
    friendImageUrl: '/static/share_friend.png',
    timelineImageUrl: '/static/share_timeline.png',
});

defineExpose({
    onShareAppMessage,
    onShareTimeline,
});
```

---

## useToast Global Prompt Messages

### useToast() => ToastInstance

Global prompt message combinational API, providing various types of message prompts.

**Return Value**

| Type | Description |
| --- | ---------------------------------------------- |
| ToastInstance | Toast instance, including show, info, success, error, warning, primary, loading, close methods |

**ToastInstance Methods**

| Method Name  | Parameter               | Description         |
| ------- | ------------------ | ------------ |
| show    | message, options?  | Default prompt     |
| info    | message, options?  | Information prompt |
| success | message, options?  | Success prompt     |
| error   | message, options?  | Error prompt     |
| warning | message, options?  | Warning prompt     |
| primary | message, options?  | Theme prompt     |
| loading | message?, options? | Loading          |
| close   | -                  | Close all prompts |

**options Parameter**

| Parameter Name   | Type              | Required | Default | Description                                             |
| -------- | ----------------- | ---- | ------ | ------------------------------------------------ |
| message  | string            | Yes   | -      | Displayed text information                             |
| type     | string            | No   | -      | Theme type: primary, success, error, warning, info |
| position | string            | No   | -      | Toast appearance position: top, center, bottom            |
| icon     | boolean \| string | No   | -      | Displayed icon                                       |
| overlay  | boolean           | No   | -      | Prevents touch penetration                             |
| duration | number            | No   | -      | Time (milliseconds)                                     |

**Example**

```typescript
import { useToast } from '@hy-app/ui';

const toast = useToast();

toast.success('Operation successful!');
toast.error('Operation failed');
toast.loading('Loading...');
```

---

## useMessage Prompt Message Combination API

### useMessage() => MessageInstance

Prompt message combinational API, providing alert and confirm methods.

**Return Value**

| Type            | Description                                     |
| --------------- | ---------------------------------------- |
| MessageInstance | Message instance, including alert and confirm methods |

**MessageInstance Methods**

| Method Name  | Parameter               | Description     |
| ------- | ------------------ | -------- |
| alert   | message \| options | Alert dialog |
| confirm | message \| options | Confirmation dialog |

**options Parameter**

| Parameter Name            | Type     | Required | Default | Description             |
| ----------------- | -------- | ---- | ------ | ---------------- |
| title             | string   | No   | -      | Dialog title         |
| content           | string   | Yes   | -      | Dialog content         |
| confirmText       | string   | No   | -      | Confirm button text     |
| cancelText        | string   | No   | -      | Cancel button text     |
| showConfirmButton | boolean  | No   | -      | Whether to show the confirm button |
| showCancelButton  | boolean  | No   | -      | Whether to show the cancel button |
| confirmColor      | string   | No   | -      | Confirm button color     |
| cancelColor       | string   | No   | -      | Cancel button color     |
| confirm           | function | No   | -      | Click callback for the confirm button |
| cancel            | function | No   | -      | Click callback for the cancel button |

**Example**

```typescript
import { useMessage } from '@hy-app/ui';

const message = useMessage();

const result = await message.confirm({
    title: 'Delete Confirmation',
    content: 'Are you sure you want to delete?',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
});
```

---

## useTouch Touch Event Combination API

### useTouch() => TouchInstance

Touch event combinational API, used to track and analyze user touch operations.

**Return Value**

| Type          | Description       |
| ------------- | ----------------- |
| TouchInstance | Touch instance |

**TouchInstance Properties and Methods**

| Name       | Type     | Description             |
| ---------- | -------- | ---------------- |
| touchStart | function | Touch start handling function |
| touchMove  | function | Touch move handling function |
| direction  | ref      | Touch direction         |
| deltaX     | ref      | Horizontal displacement |
| deltaY     | ref      | Vertical displacement |
| offsetX    | ref      | Horizontal offset       |
| offsetY    | ref      | Vertical offset         |

**Example**

```typescript
import { useTouch } from '@hy-app/ui';

const { touchStart, touchMove, direction, deltaX, deltaY } = useTouch();
```

---

## useShakeService Shake Sensor Combination API

### useShakeService(threshold?) => { startShakeListener, stopShakeListener }

Shake sensor combinational API, to monitor and implement shake feature by device acceleration.

**Parameters**

| Parameter Name    | Type   | Required | Default | Description       |
| ----------------- | ------ | ---- | ------ | ---------- |
| threshold | number | No   | -      | Shake threshold |

**Return Value**

| Type   | Description                                              |
| ------ | ------------------------------------------------- |
| object | Contains startShakeListener and stopShakeListener methods |

**Example**

```typescript
import { useShakeService } from '@hy-app/ui';

const { startShakeListener, stopShakeListener } = useShakeService();

startShakeListener(() => {
    console.log('Shake triggered');
});
```

---

## useTranslate Internationalization Translation Combination API

### useTranslate(module?) => { t }

Internationalization translation combinational API, for implementing multilingual switching in components or pages.

**Parameters**

| Parameter Name | Type   | Required | Default | Description         |
| ------ | ------ | ---- | ------ | ------------ |
| module | string | No   | -      | Language package module name |

**Return Value**

| Type   | Description            |
| ------ | --------------- |
| object | Contains t translation method |

**Example**

```typescript
import { useTranslate } from '@hy-app/ui';

const { t } = useTranslate('common');

console.log(t('hello'));
console.log(t('welcome', 'HuaYuan'));
```

---

## useQueue Queue Management Combination API

### useQueue() => QueueInstance

Queue management combinational API, for managing component display order and mutual exclusion close logic.

**Return Value**

| Type          | Description       |
| ------------- | ----------------- |
| QueueInstance | Queue instance |

**QueueInstance Methods**

| Method Name          | Parameter      | Description                       |
| --------------- | --------- | -------------------------- |
| pushToQueue     | component | Add component to queue             |
| removeFromQueue | component | Remove component from queue             |
| closeOther      | component | Close all components except the current component |
| closeOutside    | -         | Close all components               |

**Example**

```typescript
import { useQueue } from '@hy-app/ui';

const { pushToQueue, removeFromQueue, closeOther } = useQueue();

pushToQueue(popupRef.value);
closeOther(popupRef.value);
```