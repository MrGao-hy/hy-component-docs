# Loading 加载动画组件
> 此组件为一个小动画，目前用在华玥的loadMore加载更多等组件的正在加载状态场景。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [loadingIcon](https://uiadmin.net/uview-plus/components/loadingIcon.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-loading></hy-loading>
<!-- 单个组件引入 -->
<HyLoading type="primary"></HyLoading>
```
```ts
import { HyLoading } from "hy-app"
```

## 动画文字
- 通过配置`text`可以指定文字内容
- 通过配置`textSize`可以指定文字大小
```html
<template>
    <hy-loading text="加载中..." textSize="18"></hy-loading>
</template>
```

## 模式类型
- 通过配置`mode`可以指定模式
  - `spinner` 配置花瓣（默认）
  - `circle` 配置圆形
  - `semicircle` 配置半圆
```html
<template>
    <hy-loading mode="spinner"></hy-loading>
    <hy-loading mode="circle"></hy-loading>
    <hy-loading mode="semicircle"></hy-loading>
</template>
```

## 排列类型
- 通过配置`direction`可以指定文字和图标是否垂直排列
  - `row` 加载图标和文字横向排列
  - `column` 加载图标和文字竖立排列
```html
<template>
    <hy-loading text="加载中" direction="row"></hy-loading>
    <hy-loading text="加载中" direction="column"></hy-loading>
</template>
```

## 动画模式
- `timing-function`可以指定`mode`为`semicircle`或`circle`时动画里css中`animation-timing-function`的属性，默认为`ease-in-out`
```html
<template>
    <hy-loading timing-function="linear"></hy-loading>
</template>
```

## 动画运行时间
- 通过配置`duration`可以指定动画的运行周期时间
```html
<template>
    <hy-loading duration="2000"></hy-loading>
</template>
```

## 图标颜色
- 通过配置`color`可以指定动画活动区域的颜色。
- 通过配置`inactive-color`可以制定mode为circle时的暗边颜色
```html
<template>
    <hy-loading color="red"></hy-loading>
    <hy-loading mode="circle" color="red"></hy-loading>
</template>
```

## 图标尺寸
- 通过配置`size`设定尺寸，单位px，组件内把size值体现为组件的宽和高
```html
<template>
    <hy-loading size="36"></hy-loading>
</template>
```

## API

| 参数             | 说明                                                              | 类型                                                      | 默认值         |
|----------------|-----------------------------------------------------------------|---------------------------------------------------------|-------------|
| show           | 是否显示动画                                                          | `boolean`                                               | true        |
| color          | 图标颜色                                                            | `string`                                                | #909399     |
| textColor      | 提示文本颜色                                                          | `string`                                                | #909399     |
| direction      | 图标和文字是否垂直排列                                                     | `column`\|`row`                                         | row         |
| mode           | 模式选择[^1]                                                        | `spinner`\|`circle`\|`semicircle`                       | spinner     |
| size           | 加载图标的大小，单位px                                                    | `string` \| `number`                                    | 24          |
| textSize       | 加载文字的大小，单位px                                                    | `string` \| `number`                                    | 15          |
| text           | 文字内容                                                            | `string`                                                | -           |
| timingFunction | 指定animation-timing-function的css属性，但只支持mode为circle或semicircle才有效 | `ease-in-out`\|`ease-out`\| `ease-in`\|`linear`\|`ease` | ease-in-out |
| duration       | 动画执行周期时间，单位ms                                                   | `number`                                                | 1200        |
| inactiveColor  | 图标的暗边颜色, mode为circle 模式有效                                       | `string`                                                | -           |
| customStyle    | 定义需要用到的外部样式                                                     | `string`                                                | -           |
| customClass    | 自定义外部类名                                                         | `string`                                                | -           |


[^1]: `spinner`：花瓣形状；`circle`：圆形； `small`：小尺寸；`semicircle`：半圆

<demo-model url="pages/components/loading/loading"></demo-model>