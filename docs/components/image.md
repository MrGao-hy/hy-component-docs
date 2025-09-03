# Image 图片组件
> 此组件为uni-app的image组件的加强版，在继承了原有功能外，还支持淡入动画、加载中、加载失败提示、圆角值和形状等。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [image组件](https://uiadmin.net/uview-plus/components/image.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-image src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"></hy-image>
<!-- 单个组件引入 -->
<HyImage src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg"></HyImage>
```
```ts
import { HyImage } from "hy-app"
```

## 设置大小
- 通过配置`width`设置图片宽度
- 通过配置`height`设置图片高度
```html
<template>
    <hy-image src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg" width="100" height="100"></hy-image>
</template>
```

## 设置圆角
- 通过配置`shape`设置图片形状
  - `circle`：圆形
  - `square`：方形
```html
<template>
    <hy-image src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg" width="100" height="100" shape="circle"></hy-image>
</template>
```

## 预览大图
- 通过配置`previewImage`设置为true可以预览大图
```html
<template>
    <hy-image src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg" previewImage></hy-image>
</template>
```

## 设置淡入特效
- 通过配置`fade`设置为true可以产生动画（默认为true）
```html
<template>
    <hy-image src="https://q9.itc.cn/q_70/images03/20250211/6ee1b8e0f4704083ba715986c8c3795f.jpeg" fade></hy-image>
</template>
```

## API

| 参数                  | 说明                                                                  | 类型                 | 默认值        |
|---------------------|---------------------------------------------------------------------|--------------------|------------|
| src                 | 图片地址，**强烈建议**使用绝对或者网络路径                                             | `string`           | -          |
| mode                | 裁剪模式，详见[image组件](https://uniapp.dcloud.net.cn/component/image.html) | `string`           | aspectFill |
| width               | 宽度，单位任意，如果为数值，默认单位px                                                | `string`\|`number` | 200        |
| height              | 高度，单位任意，如果为数值，默认单位px                                                | `string`\|`number` | 150        |
| shape               | 图片形状[^1]                                                            | `circle`\|`square` | square     |
| radius              | 圆角，默认单位px                                                           | `string`\|`number` | 0          |
| lazyLoad            | 是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效                                    | `boolean`          | true       |
| showMenuByLongPress | 是否开启长按图片显示识别小程序码菜单，仅微信小程序有效                                         | `boolean`          | true       |
| loadingIcon         | 加载中的图标，或者小图片                                                        | `string`           | LOADING    |
| errorIcon           | 加载失败的图标，或者小图片                                                       | `string`           | NOTICE     |
| showLoading         | 是否显示加载中的图标或者自定义的slot                                                | `boolean`          | true       |
| showError           | 是否显示加载错误的图标或者自定义的slot                                               | `boolean`          | true       |
| fade                | 是否需要淡入效果                                                            | `boolean`          | true       |
| webp                | 只支持网络资源，只对微信小程序有效                                                   | `boolean`          | false      |
| duration            | 搭配fade参数的过渡时间，单位ms                                                  | `number`           | 500        |
| bgColor             | 背景颜色，用于深色页面加载图片时，为了和背景色融合                                           | `string`           | -          |
| indistinct          | 模糊图片，给图片加上模糊样式                                                      | `boolean`          | false      |
| previewImage        | 是否预览图片                                                              | `boolean`          | false      |
| customStyle         | 自定义需要用到的外部样式                                                        | `CSSProperties`    | -          |
| customClass         | 自定义外部类名                                                             | `string`           | -          |

## Events

| 事件名   | 说明        | 回调参数      |
|-------|-----------|-----------|
| click | 点击图片时触发   | -         |
| error | 图片加载失败时触发 | err: 错误信息 |
| load  | 图片加载成功时触发 | e         |

## Slots

| 插槽名     | 说明          | 接收值 |
|---------|-------------|-----|
| loading | 自定义加载中的提示内容 | -   |
| error   | 自定义失败的提示内容  | -   |



[^1]: `circle`：两边为半圆；`square`：方形

<demo-model url="pages/components/image/image"></demo-model>