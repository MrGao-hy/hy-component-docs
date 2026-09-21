# appInit 版本更新工具

`appInit` 是用于 UniApp 应用版本更新管理的工具类。

## 接口定义

### UpdateVersionOptions

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| version | string | 是 | 最新版本号（如 `1.0.1`） |
| description | string | 是 | 更新内容描述 |
| url | string | 是 | Android 更新包下载地址（支持 `.apk` 和 `.wgt`） |
| force | boolean | 否 | 是否强制更新，默认 `false` |
| iosStoreUrl | string | 否 | iOS App Store 跳转地址 |
| onProgress | (progress: OnProgressDownloadResult) => void | 否 | 下载进度回调 |
| beforeUpdate | (version: string) => boolean \| void | 否 | 更新前回调，返回 `false` 可阻止更新 |
| onSuccess | () => void | 否 | 更新成功回调 |
| onFail | (error: string) => void | 否 | 更新失败回调 |
| onConfirm | () => void | 否 | 用户点击确认按钮回调 |
| onCancel | () => void | 否 | 用户点击取消按钮回调 |

### OnProgressDownloadResult

| 参数名                    | 类型   | 说明                    |
| ------------------------- | ------ | ----------------------- |
| progress                  | number | 下载进度百分比（0-100） |
| totalBytesWritten         | number | 已下载字节数            |
| totalBytesExpectedToWrite | number | 预期总字节数            |

## 函数列表

### updateVersion(options) => void

检查并执行应用版本更新，支持 iOS 和 Android 平台。

**参数**

| 参数名  | 类型                 | 必填 | 默认值 | 说明         |
| ------- | -------------------- | ---- | ------ | ------------ |
| options | UpdateVersionOptions | 是   | -      | 更新配置选项 |

**返回值**

| 类型 | 说明     |
| ---- | -------- |
| void | 无返回值 |

**示例**

```typescript
import { appInit } from '@hy-app/ui';

appInit.updateVersion({
    version: '1.0.1',
    description: '1. 修复了已知bug\n2. 优化了性能',
    url: 'https://example.com/app.apk',
    force: true,
    onProgress: (res) => {
        console.log(`下载进度: ${res.progress}%`);
    },
});
```

---

### compareVersion(serverVersion, localVersion) => number

比较两个版本号的大小。

**参数**

| 参数名        | 类型   | 必填 | 默认值 | 说明         |
| ------------- | ------ | ---- | ------ | ------------ |
| serverVersion | string | 是   | -      | 服务端版本号 |
| localVersion  | string | 是   | -      | 本地版本号   |

**返回值**

| 类型   | 说明                                                |
| ------ | --------------------------------------------------- |
| number | `1` 服务端版本更高，`0` 版本相同，`-1` 本地版本更高 |

**示例**

```typescript
import { appInit } from '@hy-app/ui';

const result = appInit.compareVersion('1.2.0', '1.1.9');

if (result === 1) {
    // 需要更新
}
```

---

### downloadApp(downloadUrl, callbacks) => void

下载更新包，支持 .wgt 和 .apk 格式。

**参数**

| 参数名      | 类型                                 | 必填 | 默认值 | 说明     |
| ----------- | ------------------------------------ | ---- | ------ | -------- |
| downloadUrl | string                               | 是   | -      | 下载地址 |
| callbacks   | { onProgress?, onSuccess?, onFail? } | 否   | -      | 回调函数 |

**返回值**

| 类型 | 说明     |
| ---- | -------- |
| void | 无返回值 |
