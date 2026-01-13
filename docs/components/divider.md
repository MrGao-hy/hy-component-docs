# Divider 分割线组件
> 区隔内容的分割线，一般用于页面底部"没有更多"的提示

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [divider组件](https://uiadmin.net/uview-plus/components/divider.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-divider text="月落"></hy-divider>
<!-- 单个组件引入 -->
<HyDivider text="月落"></HyDivider>
```
```ts
import { HyDivider } from "hy-app"
```

## 设置虚线
- 通过设置`dashed`指定虚线
```html
<template>
    <hy-divider text="月落" dashed></hy-divider>
</template>
```

## 设置细线
- 通过`hairline`指定细线
```html
<template>
    <!--细线-->
    <hy-divider text="月落" hairline></hy-divider>
    <!--粗线-->
    <hy-divider text="月落" :hairline="false"></hy-divider>
</template>
```

## 设置以点代替文字
- 通过设置`dot`指定以点代替文字
```html
<template>
    <hy-divider dot></hy-divider>
</template>
```

## 设置文本靠左靠右
- 通过设置`textPosition`指定文字靠左靠右
  - `left`：文字靠左
  - `center`：文字靠中间（默认）
  - `right`：文字靠右
```html
<template>
    <hy-divider text="月落" textPosition="left"></hy-divider>
    <hy-divider text="月落" textPosition="right"></hy-divider>
</template>
```

## 设置文本颜色和线条颜色
- 通过设置`textColor`和`lineColor`指定文字颜色、线条颜色
```html
<template>
    <hy-divider text="月落" textColor="#2979ff" lineColor="#ff0000"></hy-divider>
</template>
```

## API

| 参数           | 说明                    | 类型                                         | 默认值               |
|--------------|-----------------------|--------------------------------------------|-------------------|
| text         | 文本内容                  | `string`\|`loadMore`\| `loading`\|`noMore` | -                 |
| dashed       | 是否虚线                  | `boolean`                                  | false             |
| hairline     | 是否细线                  | `boolean`                                  | true              |
| dot          | 是否以点替代文字，优先于text字段起作用 | `boolean`                                  | false             |
| textPosition | 内容文本的位置               | `center`\|`left`\|`right`                  | center            |
| textSize     | 文本大小                  | `string` \| `number`                       | 14                |
| textColor    | 文本颜色                  | `string`                                   | #909399           |
| lineColor    | 线条颜色                  | `string`                                   | #dcdfe6           |
| loadingIcon  | 加载中状态的图标              | `string`                                   | LOADING |
| loadMoreText | 加载前的提示语               | `string`                                   | 加载更多              |
| loadingText  | 加载中提示语                | `string`                                   | 正在加载...           |
| noMoreText   | 没有更多的提示语              | `string`                                   | 没有更多了             |
| marginTop    | 与前一个元素的距离，单位px        | `string` \| `number`                       | 0                 |
| marginBottom | 与后一个元素的距离，单位px        | `string` \| `number`                       | 0                 |
| customStyle  | 自定义需要用到的外部样式          | `CSSProperties`                            | -                 |
| customClass  | 自定义外部类名               | `string`                                   | -                 |

## Events

| 事件名   | 说明   | 回调参数 |
|-------|------|------|
| click | 点击事件 | -    |

<demo-model url="pages-design/divider/divider"></demo-model>
