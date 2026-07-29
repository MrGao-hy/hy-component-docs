# hooks 组合式 API

## useShare 小程序全局配置分享

### useShare(options?) => { onShareAppMessage, onShareTimeline }

小程序全局配置分享，返回分享方法用于页面暴露。

**参数**

| 参数名                   | 类型   | 必填 | 默认值 | 说明                 |
| ------------------------ | ------ | ---- | ------ | -------------------- |
| options                  | object | 否   | -      | 分享配置             |
| options.title            | string | 否   | -      | 标题名称             |
| options.path             | string | 否   | -      | 小程序路径           |
| options.friendImageUrl   | string | 否   | -      | 分享朋友的封面图片   |
| options.timelineImageUrl | string | 否   | -      | 分享朋友圈的封面图片 |

**返回值**

| 类型   | 说明                                           |
| ------ | ---------------------------------------------- |
| object | 包含 onShareAppMessage 和 onShareTimeline 方法 |

**示例**

```typescript
import { useShare } from "@hy-app/ui";

const { onShareAppMessage, onShareTimeline } = useShare({
  title: "华玥组件库",
  path: "/pages/index/index",
  friendImageUrl: "/static/share friend.png",
  timelineImageUrl: "/static/share_timeline.png",
});

defineExpose({
  onShareAppMessage,
  onShareTimeline,
});
```

---

## useToast 全局提示消息

### useToast() => ToastInstance

全局提示消息组合式 API，提供多种类型的消息提示。

**返回值**

| 类型          | 说明                                                                               |
| ------------- | ---------------------------------------------------------------------------------- |
| ToastInstance | Toast 实例，包含 show、info、success、error、warning、primary、loading、close 方法 |

**ToastInstance 方法**

| 方法名  | 参数               | 说明         |
| ------- | ------------------ | ------------ |
| show    | message, options?  | 默认提示     |
| info    | message, options?  | 信息提示     |
| success | message, options?  | 成功提示     |
| error   | message, options?  | 错误提示     |
| warning | message, options?  | 警告提示     |
| primary | message, options?  | 主题提示     |
| loading | message?, options? | 加载中       |
| close   | -                  | 关闭所有提示 |

**options 参数**

| 参数名   | 类型              | 必填 | 默认值 | 说明                                             |
| -------- | ----------------- | ---- | ------ | ------------------------------------------------ |
| message  | string            | 是   | -      | 显示文本信息                                     |
| type     | string            | 否   | -      | 主题类型：primary，success，error，warning，info |
| position | string            | 否   | -      | toast 出现的位置：top，center，bottom            |
| icon     | boolean \| string | 否   | -      | 显示的图标                                       |
| overlay  | boolean           | 否   | -      | 是否防止触摸穿透                                 |
| duration | number            | 否   | -      | 时间（毫秒）                                     |

**示例**

```typescript
import { useToast } from "@hy-app/ui";

const toast = useToast();

toast.success("操作成功！");
toast.error("操作失败");
toast.loading("加载中...");
```

---

## useMessage 消息弹窗组合式 API

### useMessage() => MessageInstance

消息弹窗组合式 API，提供 alert 和 confirm 方法。

**返回值**

| 类型            | 说明                                     |
| --------------- | ---------------------------------------- |
| MessageInstance | Message 实例，包含 alert 和 confirm 方法 |

**MessageInstance 方法**

| 方法名  | 参数               | 说明     |
| ------- | ------------------ | -------- |
| alert   | message \| options | 警告弹窗 |
| confirm | message \| options | 确认弹窗 |

**options 参数**

| 参数名            | 类型     | 必填 | 默认值 | 说明             |
| ----------------- | -------- | ---- | ------ | ---------------- |
| title             | string   | 否   | -      | 弹窗标题         |
| content           | string   | 是   | -      | 弹窗内容         |
| confirmText       | string   | 否   | -      | 确认按钮文本     |
| cancelText        | string   | 否   | -      | 取消按钮文本     |
| showConfirmButton | boolean  | 否   | -      | 是否显示确认按钮 |
| showCancelButton  | boolean  | 否   | -      | 是否显示取消按钮 |
| confirmColor      | string   | 否   | -      | 确认按钮颜色     |
| cancelColor       | string   | 否   | -      | 取消按钮颜色     |
| confirm           | function | 否   | -      | 确认按钮点击回调 |
| cancel            | function | 否   | -      | 取消按钮点击回调 |

**示例**

```typescript
import { useMessage } from "@hy-app/ui";

const message = useMessage();

const result = await message.confirm({
  title: "删除确认",
  content: "确定要删除吗？",
  confirmText: "确定",
  cancelText: "取消",
});
```

---

## useTouch 触摸事件组合式 API

### useTouch() => TouchInstance

触摸事件组合式 API，用于跟踪和分析用户的触摸操作。

**返回值**

| 类型          | 说明       |
| ------------- | ---------- |
| TouchInstance | Touch 实例 |

**TouchInstance 属性和方法**

| 名称       | 类型     | 说明             |
| ---------- | -------- | ---------------- |
| touchStart | function | 触摸开始处理函数 |
| touchMove  | function | 触摸移动处理函数 |
| direction  | ref      | 触摸方向         |
| deltaX     | ref      | 水平位移         |
| deltaY     | ref      | 垂直位移         |
| offsetX    | ref      | 水平偏移         |
| offsetY    | ref      | 垂直偏移         |

**示例**

```typescript
import { useTouch } from "@hy-app/ui";

const { touchStart, touchMove, direction, deltaX, deltaY } = useTouch();
```

---

## useShakeService 摇一摇传感器组合式 API

### useShakeService(threshold?) => { startShakeListener, stopShakeListener }

摇一摇传感器组合式 API，监听设备加速度实现摇一摇功能。

**参数**

| 参数名    | 类型   | 必填 | 默认值 | 说明       |
| --------- | ------ | ---- | ------ | ---------- |
| threshold | number | 否   | -      | 摇一摇阈值 |

**返回值**

| 类型   | 说明                                              |
| ------ | ------------------------------------------------- |
| object | 包含 startShakeListener 和 stopShakeListener 方法 |

**示例**

```typescript
import { useShakeService } from "@hy-app/ui";

const { startShakeListener, stopShakeListener } = useShakeService();

startShakeListener(() => {
  console.log("摇一摇触发");
});
```

---

## useTranslate 国际化翻译组合式 API

### useTranslate(module?) => { t }

国际化翻译组合式 API，用于在组件或页面中实现多语言切换。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明         |
| ------ | ------ | ---- | ------ | ------------ |
| module | string | 否   | -      | 语言包模块名 |

**返回值**

| 类型   | 说明            |
| ------ | --------------- |
| object | 包含 t 翻译方法 |

**示例**

```typescript
import { useTranslate } from "@hy-app/ui";

const { t } = useTranslate("common");

console.log(t("hello"));
console.log(t("welcome", "华玥"));
```

---

## useQueue 队列管理组合式 API

### useQueue() => QueueInstance

队列管理组合式 API，用于管理组件的显示顺序和互斥关闭逻辑。

**返回值**

| 类型          | 说明       |
| ------------- | ---------- |
| QueueInstance | Queue 实例 |

**QueueInstance 方法**

| 方法名          | 参数      | 说明                       |
| --------------- | --------- | -------------------------- |
| pushToQueue     | component | 添加组件到队列             |
| removeFromQueue | component | 从队列移除组件             |
| closeOther      | component | 关闭除当前组件外的所有组件 |
| closeOutside    | -         | 关闭所有组件               |

**示例**

```typescript
import { useQueue } from "@hy-app/ui";

const { pushToQueue, removeFromQueue, closeOther } = useQueue();

pushToQueue(popupRef.value);
closeOther(popupRef.value);
```
