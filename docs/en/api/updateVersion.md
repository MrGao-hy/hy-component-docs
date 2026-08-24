# appInit Version Update Tool

`appInit` is a utility class used for managing version updates in UniApp applications.

## Interface Definitions

### UpdateVersionOptions

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| version | string | Yes | Latest version number (e.g., `1.0.1`) |
| description | string | Yes | Description of update content |
| url | string | Yes | Android update package download address (supports `.apk` and `.wgt`) |
| force | boolean | No | Whether to force update, default `false` |
| iosStoreUrl | string | No | iOS App Store jump address |
| onProgress | (progress: OnProgressDownloadResult) => void | No | Download progress callback |
| beforeUpdate | (version: string) => boolean \| void | No | Callback before update, return `false` to prevent update |
| onSuccess | () => void | No | Callback after successful update |
| onFail | (error: string) => void | No | Callback after update failure |
| onConfirm | () => void | No | Callback when the user clicks the confirm button |
| onCancel | () => void | No | Callback when the user clicks the cancel button |

### OnProgressDownloadResult

| Parameter Name | Type | Description |
| ------------------------- | ------ | ----------------------- |
| progress                  | number | Download progress percentage (0-100) |
| totalBytesWritten         | number | Number of bytes written |
| totalBytesExpectedToWrite | number | Expected total number of bytes |

## Function List

### updateVersion(options) => void

Check and execute application version updates, supporting iOS and Android platforms.

**Parameters**

| Parameter Name | Type | Required | Default | Description |
| ------- | -------------------- | ---- | ------ | ------------ |
| options | UpdateVersionOptions | Yes | - | Update configuration options |

**Return Value**

| Type | Description |
| ---- | -------- |
| void | No return value |

**Example**

```typescript
import { appInit } from '@hy-app/ui';

appInit.updateVersion({
    version: '1.0.1',
    description: '1. Fixed known bugs\n2. Optimized performance',
    url: 'https://example.com/app.apk',
    force: true,
    onProgress: (res) => {
        console.log(`Download progress: ${res.progress}%`);
    },
});
```

---

### compareVersion(serverVersion, localVersion) => number

Compare the sizes of two version numbers.

**Parameters**

| Parameter Name | Type | Required | Default | Description |
| ------------- | ------ | ---- | ------ | ------------ |
| serverVersion | string | Yes | - | Server version number |
| localVersion  | string | Yes | - | Local version number |

**Return Value**

| Type | Description |
| ---- | --------------------------------------------------- |
| number | `1` Server version is higher, `0` Versions are the same, `-1` Local version is higher |

**Example**

```typescript
import { appInit } from '@hy-app/ui';

const result = appInit.compareVersion('1.2.0', '1.1.9');

if (result === 1) {
    // Needs to be updated
}
```

---

### downloadApp(downloadUrl, callbacks) => void

Download the update package, supporting .wgt and .apk formats.

**Parameters**

| Parameter Name | Type | Required | Default | Description |
| ----------- | ------------------------------------ | ---- | ------ | -------- |
| downloadUrl | string | Yes | - | Download address |
| callbacks   | { onProgress?, onSuccess?, onFail? } | No | - | Callback functions |

**Return Value**

| Type | Description |
| ---- | -------- |
| void | No return value |