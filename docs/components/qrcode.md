# Qrcode 二维码组件
> 根据提供的字符串前端JS生成二维码展示

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [qrcode组件](https://uiadmin.net/uview-plus/components/qrcode.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-qrcode text="https://gxh151.top"></hy-qrcode>
<!-- 单个组件引入 -->
<HyQrcode text="https://gxh151.top"></HyQrcode>
```
```ts
import { HyQrcode } from "hy-app"
```

## 加载状态
> 由于二维码使用前端JS计算生成，因此会有一个计算时间。
- `showLoading`参数配置是否显示加载状态
- `loadingText`参数配置加载文字
```html
<template>
    <hy-qrcode text="https://gxh151.top" showLoading loadingText="loading..."></hy-qrcode>
</template>
```

## 基本使用示例

```html
<template>
    <hy-qrcode text="https://gxh151.top"></hy-qrcode>
</template>
```

## 二维码自定义颜色

```html
<template>
    <hy-qrcode text="https://gxh151.top" background="red" foreground="#214283" pdGround="greed"></hy-qrcode>
</template>
```

## 二维码中间图标
- 通过设置`icon`设置二维码中间图标,可以为图片或者组件内置icon
```html
<template>
    <hy-qrcode icon="https://pic1.imgdb.cn/item/67628833d0e0a243d4e5d22b.webp"></hy-qrcode>
</template>
```

## API

| 参数              | 说明                             | 类型                 | 默认值                                           |
|-----------------|--------------------------------|--------------------|-----------------------------------------------|
| cid             | 实例ID字符串(如果有多个二维码组件必须设置不一样的cid) | `string`           | "hy-qrcode-canvas" + Math.random().toString() |
| size            | 二维码大小                          | `string`\|`number` | 200                                           |
| text            | 二维码内容                          | `string`           | -                                             |
| show            | 是否显示二维码                        | `boolean`          | true                                          |
| background      | 二维码背景色                         | `string`           | -                                             |
| foreground      | 二维码颜色                          | `string`           | #000000                                       |
| pdGround        | 定位角点颜色                         | `string`           | #000000                                       |
| lv              | 容错级别                           | `number`           | 3                                             |
| usingComponents | 是否是自定义组件                       | `boolean`          | true                                          |
| icon            | 二维码中间图标                        | `string`           | -                                             |
| iconSize        | 二维码中间图标大小                      | `string`\|`number` | 40                                            |
| showLoading     | 显示加载状态                         | `boolean`          | true                                          |
| loadingText     | 加载中提示语                         | `string`           | 二维码生成中                                        |
| allowPreview    | 是否预览                           | `boolean`          | false                                         |
| customStyle     | 定义需要用到的外部样式                    | `CSSProperties`    | -                                             |

## Events

| 事件名       | 说明      | 回调参数          |
|-----------|---------|---------------|
| result    | 二维码生成成功 | res: 生成成功返回数据 |
| preview   | 打开图片事件  | url: 图片地址     |
| longPress | 长按事件    | -             |

<demo-model url="pages/components/qrcode/qrcode"></demo-model>