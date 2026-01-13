# Warn 警告提示组件
> 警告提示，展现需要关注的信息。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [alert组件](https://uiadmin.net/uview-plus/components/alert.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-warn text="月落"></hy-warn>
<!-- 单个组件引入 -->
<HyWarn type="primary">按钮</HyWarn>
```
```ts
import { HyWarn } from "hy-app"
```

## 基本使用示例
- 通过`showIcon`设置是否显示图标，作用是让信息类型更加醒目。
::: tip 注意 
当前版本图标为华悦内置图标，根据`type`参数显示不同的图标，无法自定义。
:::
```html
<template>
    <hy-warn text="风萧萧兮易水寒" show-icon type="success"></hy-warn>
    <hy-warn text="风萧萧兮易水寒" show-icon type="primary"></hy-warn>
    <hy-warn text="风萧萧兮易水寒" show-icon type="error"></hy-warn>
    <hy-warn text="风萧萧兮易水寒" show-icon type="info"></hy-warn>
</template>
```

## 可关闭的警告提示
- `closable`参数配置是否可关闭
```html
<template>
    <hy-warn text="风萧萧兮易水寒" closable></hy-warn>
</template>
```

## 背景色深色或者浅色

```html
<template>
    <!--浅色-->
    <hy-warn text="风萧萧兮易水寒" theme="light"></hy-warn>
    <!--深色-->
    <hy-warn text="风萧萧兮易水寒" theme="dark"></hy-warn>
</template>
```

## API

| 参数          | 说明                          | 类型                                                | 默认值     |
|-------------|-----------------------------|---------------------------------------------------|---------|
| title       | 显示的文字                       | `string`                                          | -       |
| type        | 使用预设的颜色                     | `error`\|`warning`\|`success` \|`primary`\|`info` | warning |
| description | 辅助性文字，颜色比title浅一点，字号也小一点，可选 | `string`                                          | -       |
| closable    | 关闭按钮(默认为叉号icon图标)           | `boolean`                                         | false   |
| showIcon    | 是否显示左边的辅助图标                 | `boolean`                                         | false   |
| theme       | 显示的暗色或者亮色                   | `light` \| `dark`                                 | dark    |
| center      | 文字是否居中                      | `boolean`                                         | false   |
| fontSize    | 字体大小                        | `string` \| `number`                              | 14      |

## Events

| 事件名   | 说明      | 回调参数 |
|-------|---------|------|
| click | 点击组件时触发 | -    |
| close | 关闭组件时触发 | -    |


<demo-model url="pages-design/warn/warn"></demo-model>