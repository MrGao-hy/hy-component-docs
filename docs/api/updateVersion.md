# appInit app版本更新

> `appInit` 是一个用于 UniApp 应用版本更新管理的工具类，提供版本检查、下载更新包、安装更新等功能。

## 接口定义

### UpdateVersionOptions

版本更新配置选项接口：

| 参数名          | 类型                                             | 必填 | 说明                                  |
|--------------|------------------------------------------------|----|-------------------------------------|
| version      | `string`                                       | 是  | 最新版本号（如 `1.0.1`）                    |
| description  | `string`                                       | 是  | 更新内容描述                              |
| url          | `string`                                       | 是  | Android 更新包下载地址（支持 `.apk` 和 `.wgt`） |
| force        | `boolean`                                      | 否  | 是否强制更新，默认 `false`                   |
| iosStoreUrl  | `string`                                       | 否  | iOS App Store 跳转地址                  |
| onProgress   | `(progress: OnProgressDownloadResult) => void` | 否  | 下载进度回调                              |
| beforeUpdate | `(version: string) => boolean \| void`         | 否  | 更新前回调，返回 `false` 可阻止更新              |
| onSuccess    | `() => void`                                   | 否  | 更新成功回调                              |
| onFail       | `(error: string) => void`                      | 否  | 更新失败回调                              |
| onConfirm    | `() => void`                                   | 否  | 用户点击确认按钮回调                          |
| onCancel     | `() => void`                                   | 否  | 用户点击取消按钮回调                          |

### OnProgressDownloadResult

下载进度结果（UniApp 原生类型）：

| 参数名                       | 类型       | 说明             |
|---------------------------|----------|----------------|
| progress                  | `number` | 下载进度百分比（0-100） |
| totalBytesWritten         | `number` | 已下载字节数         |
| totalBytesExpectedToWrite | `number` | 预期总字节数         |

## 检查并执行版本更新。
### updateVersion(options)

**参数**：
- `options`: `UpdateVersionOptions` - 更新配置选项

**返回值**：`void`

**执行流程**：
1. 获取当前应用版本号
2. 与服务端版本号进行比较
3. 如果服务端版本更高，弹出更新提示弹窗
4. 用户确认后根据平台进行更新（iOS 跳转 App Store，Android 下载安装包）

### 基础用法

```typescript
import { appInit } from '@hy-app/ui'

appInit.updateVersion({
    version: '1.0.1',
    description: '1. 修复了已知bug\n2. 优化了性能\n3. 新增功能',
    url: 'https://example.com/app.apk'
})
```


### 进阶用法

```typescript
import { appInit } from '@hy-app/ui'

appInit.updateVersion({
    version: '2.0.0',
    description: '重大更新：\n- 全新UI设计\n- 新增多项功能\n- 性能大幅优化',
    url: 'https://example.com/app.wgt',
    force: true,  // 强制更新，不显示取消按钮
    iosStoreUrl: 'https://apps.apple.com/cn/app/xxx/id1234567890',

    // 更新前回调，可阻止更新
    beforeUpdate: (version) => {
        console.log(`即将更新到版本: ${version}`)
        // return false 可阻止更新
    },

    // 点击确认按钮
    onConfirm: () => {
        console.log('用户确认更新')
    },

    // 点击取消按钮
    onCancel: () => {
        console.log('用户取消更新')
    },

    // 下载进度
    onProgress: (res) => {
        console.log(`下载进度: ${res.progress}%`)
    },

    // 更新成功
    onSuccess: () => {
        console.log('更新成功')
    },

    // 更新失败
    onFail: (error) => {
        console.error('更新失败:', error)
    }
})
```


## 版本号比较方法。
### compareVersion(serverVersion, localVersion)


**参数**：
- `serverVersion`: `string` - 服务端版本号
- `localVersion`: `string` - 本地版本号

**返回值**：`number`
- `1`: 服务端版本更高
- `0`: 版本相同
- `-1`: 本地版本更高

### 基本用法

```typescript
import { appInit } from '@hy-app/ui'

const result = appInit.compareVersion('1.2.0', '1.1.9')
// result === 1 表示服务端版本更高

if (result === 1) {
    // 需要更新
} else if (result === 0) {
    // 已是最新版本
} else {
    // 本地版本更高
}
```

## 下载更新包（内部方法）。
### downloadApp(downloadUrl, callbacks)

**参数**：
- `downloadUrl`: `string` - 下载地址
- `callbacks`: `{ onProgress?, onSuccess?, onFail? }` - 回调函数

**支持的文件格式**：
- `.wgt`: UniApp 热更新包
- `.apk`: Android 安装包
## 平台差异处理

### iOS 平台
- 调用 `plus.runtime.openURL()` 跳转至 App Store
- 需要提前配置 `iosStoreUrl` 参数
- 若未配置 `iosStoreUrl`，会提示用户配置地址

### Android 平台
- 支持 `.apk` 整包更新和 `.wgt` 热更新
- 自动识别文件格式并选择安装方式
- `.wgt` 更新后会自动重启应用

## 注意事项

1. **依赖条件**：该模块依赖 UniApp 的 `plus` API，仅能在 App 端运行
2. **文件格式**：Android 更新包支持 `.apk` 和 `.wgt` 两种格式，系统会自动识别
3. **强制更新**：设置 `force: true` 时，弹窗不显示取消按钮，用户必须更新
4. **热更新**：`.wgt` 热更新后会自动重启应用，建议在更新前保存用户数据
5. **回调顺序**：`onConfirm`/`onCancel` → `onProgress`（下载中）→ `onSuccess`/`onFail`
