# Watermark 水印组件
> 在页面或组件上添加指定的图片或文字，可用于版权保护、品牌宣传等场景。

::: tip 温馨提示
本项目参考了 Wot-UI 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 Wot-UI 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考Wot-UI的 [watermark组件](https://wot-design-uni.cn/component/watermark.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-watermark content="华玥组件库"></hy-watermark>
<!-- 单个组件引入 -->
<HyWatermark content="华玥组件库"></HyWatermark>
```
```ts
import { HyWatermark } from "hy-app"
```

## 图片水印
- 通过设置`image`,设置网络图片地址或Base64图片
- `image-width`：水印图片宽度
- `image-height`：水印图片高度
::: tip 注意
钉钉小程序平台仅支持网络图片
:::
```html
<template>
    <hy-watermark image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png" :image-width="38" :image-height="38"></hy-watermark>
</template>
```

## 局部水印
- 通过设置`full-screen`,设置是否为全屏水印(`full-screen`为false则局部水印)。
```html
<template>
    <hy-watermark image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png" :full-screen="false"></hy-watermark>
</template>
```

## 自定义层级和透明度
- 通过设置`image`,设置网络图片地址或Base64图片, 通过image-width和image-height字段设置水印图片的宽高。
```html
<template>
    <hy-watermark image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png"></hy-watermark>
</template>
```

## 水印的间隔距离
- 通过设置`gutterX`,设置x轴间隔距离。
- 通过设置`gutterY`,设置y轴间隔距离。
```html
<template>
    <hy-watermark image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png" :gutterX="40" :gutterY="40"></hy-watermark>
</template>
```

## 画布宽度
- 通过设置`width`,设置单个水印画布宽度。
- 通过设置`height`,设置单个水印画布高度。
```html
<template>
    <hy-watermark image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png" :width="200" :height="200"></hy-watermark>
</template>
```

## 水印字体设置
- 通过设置`color`,设置水印字体颜色。
- 通过设置`size`,设置水印字体大小。
- 通过设置`fontStyle`,设置水印字体样式。
- 通过设置`fontWeight`,设置水印字体的粗细。
- 通过设置`fontFamily`,设置水印字体。
```html
<template>
    <hy-watermark image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png" color="red" :size="23"></hy-watermark>
</template>
```

## 水印旋转角度
- 通过设置`rotate`,设置水印旋转角度。
```html
<template>
    <hy-watermark image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png" :rotate="25"></hy-watermark>
</template>
```

## 水印透明度
- 通过设置`opacity`,设置水印旋转角度。
```html
<template>
    <hy-watermark image="https://pic1.imgdb.cn/item/67f8dfea88c538a9b5caea38.png" :opacity="1"></hy-watermark>
</template>
```

## API

| 参数          | 说明                    | 类型                            | 默认值         |
|-------------|-----------------------|-------------------------------|-------------|
| content     | 显示内容                  | `string`                      | -           |
| image       | 显示图片的地址，支持网络图片和base64 | `string`                      | -           |
| imageHeight | 图片高度                  | `number`                      | 50          |
| imageWidth  | 图片宽度                  | `number`                      | 70          |
| gutterX     | X轴间距，单位px             | `number`                      | 0           |
| gutterY     | Y轴间距，单位px             | `number`                      | 0           |
| width       | canvas画布宽度，单位px       | `number`                      | 100         |
| height      | canvas画布高度，单位px       | `number`                      | 100         |
| fullScreen  | 是否为全屏水印               | `boolean`                     | true        |
| color       | 水印字体颜色                | `string`                      | #8c8c8c     |
| size        | 水印字体大小，单位px           | `number`                      | 14          |
| fontStyle   | 水印字体样式（仅微信、支付宝和h5支持）  | `normal`\|`italic`\|`oblique` | normal      |
| fontWeight  | 水印字体的粗细（仅微信、支付宝和h5支持） | `normal`\|`bold`\|`bolder`    | normal      |
| fontFamily  | 水印字体系列（仅微信、支付宝和h5支持）  | `string`                      | PingFang SC |
| rotate      | 水印旋转角度                | `number`                      | -25         |
| zIndex      | 自定义层级                 | `number`                      | 10086       |
| opacity     | 自定义透明度，取值 0~1         | `number`                      | 0.5         |
| customStyle | 定义需要用到的外部样式           | `CSSProperties`               | -           |


<demo-model url="pages/components/watermark/watermark"></demo-model>