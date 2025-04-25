# Empty 内容为空组件
> 该组件用于需要加载内容，但是加载的第一页数据就为空，提示一个"没有内容"的场景， 我们精心挑选了十几个场景的图标，方便您使用。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [empty组件](https://uiadmin.net/uview-plus/components/empty.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-empty></hy-empty>
<!-- 单个组件引入 -->
<HyEmpty></HyEmpty>
```
```ts
import { HyEmpty } from "hy-app"
```

## 显示、配置按钮
- `btnText` 显示按钮文本
- `btnSize` 按钮大小
- `btnShape` 按钮形状
- `btnPlain` 按钮是否镂空
- `navigateUrl` 跳转页面
```html
<template>
    <hy-empty btnText="去购物" btnSize="mini" btnShape="circle" btnPlain navigateUrl="/pages/abc/Index"></hy-empty>
</template>
```

## 配置提示文字
- `desSize` 提示文本大小
- `desColor` 提示文本颜色
```html
<template>
    <hy-empty desColor="red" desSize="10px"></hy-empty>
</template>
```

## 插槽

```html
<template>
    <hy-empty>
        <template #description>
            自定义内容
        </template>
    </hy-empty>
</template>
```

## API

| 参数          | 说明           | 类型                                                | 默认值                                                     |
|-------------|--------------|---------------------------------------------------|---------------------------------------------------------|
| show        | 是否显示组件       | `boolean`                                         | true                                                    |
| imageUrl    | 空状态icon图片    | `string`                                          | https://pic.imgdb.cn/item/6737057ad29ded1a8c6f843b.webp |
| zIndex      | 组件层级         | `number`                                          | 889                                                     |
| width       | icon图片宽度     | `string`\|`number`                                | 350                                                     |
| height      | icon图片高度     | `string`\|`number`                                | auto                                                    |
| description | 提示信息         | `string`                                          | 暂无数据                                                    |
| desSize     | 提示信息大小       | `string`\|`number`                                | 15                                                      |
| desColor    | 提示信息颜色       | `string`                                          | #5e6d82                                                 |
| imgMargin   | icon图片margin | `string`                                          | -                                                       |
| btnText     | 按钮文字         | `string`                                          | -                                                       |
| btnSize     | 按钮尺寸[^1]     | `normal`\|`large`\| `small`\|`mini`               | normal                                                  |
| btnType     | 按钮的预置样式[^2]  | `error`\|`warning`\|`success` \|`primary`\|`info` | primary                                                 |
| btnShape    | 按钮形状[^3]     | `circle`\|`square`                                | square                                                  |
| btnPlain    | 按钮是否镂空，背景色透明 | `boolean`                                         | false                                                   |
| navigateUrl | 跳转地址         | `string`                                          | -                                                       |
| customStyle | 自定义输入框外部样式   | `CSSProperties`                                   | -                                                       |

## Events

| 事件名   | 说明 | 回调参数 |
|-------|----|------|
| click | -  | -    |

## slots

| 插槽名         | 说明 | 接收值 |
|-------------|----|-----|
| default     | -  | -   |
| description | -  | -   |

[^1]: `normal`：默认尺寸；`large`：大尺寸； `small`：小尺寸；`mini`：迷你尺寸
[^2]: `error`：#fa3534；`warning`：#ff9900；`success`：#19be6b；`primary`：#2979ff； `info`：#909399；
[^3]: `circle`：两边为半圆；`square`：方形带圆角

<demo-model url="pages/components/empty/empty"></demo-model>