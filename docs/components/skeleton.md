# hy-skeleton 骨架屏
> 用于等待加载内容所展示的占位图形组合，有动态效果加载效果，减少用户等待焦虑。

::: tip 温馨提示
本项目参考了 Wot-UI 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 Wot-UI 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考Wot-UI的 [skeleton组件](https://wot-ui.cn/component/sticky.html) 的代码实现。
:::

::: warning 注意事项
1. `loading` 属性为 `undefined` 或 `true` 时显示骨架屏，为 `false` 时显示插槽内容
2. `rowCol` 属性优先级高于 `theme` 属性，如果设置了 `rowCol`，将忽略 `theme` 的配置
3. 动画效果会增加一定的性能开销，在性能敏感的场景建议关闭动画
4. 组件支持虚拟化 host 和全局样式，可以方便地集成到现有项目中
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

默认使用 `text` 主题，显示文本骨架屏。
```html
<hy-skeleton />
```

## 不同主题
支持四种主题：`text`、`avatar`、`paragraph`、`image`。
::: tip 提示
- **text**: 文本主题，默认显示单行文本
- **avatar**: 头像主题，显示一个圆形头像
- **image**: 图片主题，显示一个矩形图片占位
- **paragraph**: 段落主题，显示多行文本，最后一行宽度为 55%
:::
```html
<hy-skeleton theme="text" />
<hy-skeleton theme="avatar" />
<hy-skeleton theme="paragraph" />
<hy-skeleton theme="image" />
```

## 加载状态
通过 `loading` 属性控制骨架屏的显示与隐藏，`loading` 为 `true` 时显示骨架屏，为 `false` 时显示实际内容。
```html
<hy-skeleton :loading="loading">
  <view>实际内容</view>
</hy-skeleton>
```

## 动画效果
支持两种动画效果：`gradient`（渐变加载动画）和 `flashed`（闪烁加载动画）。
```html
<hy-skeleton animation="gradient" />
<hy-skeleton animation="flashed" />
```

## 自定义行列
通过 `rowCol` 属性可以自定义骨架屏的行列数量、宽度、高度、间距等。
```html
<!-- 示例一：三行骨架图，第一行一列，第二行一列，第三行两列 -->
<hy-skeleton :rowCol="[1, 1, 2]" />

<!-- 示例二：自定义第三行的宽度为 100px -->
<hy-skeleton :rowCol="[1, 1, { width: '100px' }]" />

<!-- 示例三：第三行有两列，且自定义宽度、高度和间距 -->
<hy-skeleton :rowCol="[1, 2, [{ width: '100px', height: '20px' }, { width: '200px', height: '20px', marginLeft: '10px' }]]" />
```

## 完整示例

```html
<template>
  <view>
    <hy-skeleton
      theme="avatar"
      :loading="loading"
      animation="gradient"
      :rowCol="[
        1,
        [
          { width: '24%', height: '16px', marginRight: '16px' },
          { width: '76%', height: '16px' }
        ]
      ]"
    >
      <view>加载完成的内容</view>
    </hy-skeleton>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)
</script>
```

## API

### Props

| 参数          | 说明                                            | 类型                                                               | 默认值  |
|-------------|-----------------------------------------------|------------------------------------------------------------------|------|
| theme       | 骨架图风格，可选值：`text`、`avatar`、`paragraph`、`image` | `string`                                                         | text |
| rowCol      | 用于设置行列数量、宽度高度、间距等                             | `Array<number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` | -    |
| loading     | 是否为加载状态，为 `true` 时显示骨架屏，为 `false` 时显示实际内容     | `boolean`                                                        | true |
| animation   | 动画效果，可选值：`gradient`（渐变）、`flashed`（闪烁），为空则无动画  | `string`                                                         | -    |
| customStyle | 定义需要用到的外部样式                                   | `CSSProperties`                                                  | -    |
| customClass | 自定义外部类名                                       | `string`                                                         | -    |

### SkeletonRowColObj 类型

`rowCol` 数组中的对象类型，支持以下属性：

| 属性              | 说明                                          | 类型                 |
|-----------------|---------------------------------------------|--------------------|
| type            | 形状类型，可选值：`rect`（矩形）、`circle`（圆形）、`text`（文本） | `string`           |
| size            | 尺寸（同时设置宽高）                                  | `string`\|`number` |
| width           | 宽度                                          | `string`\|`number` |
| height          | 高度                                          | `string`\|`number` |
| margin          | 外边距                                         | `string`\|`number` |
| marginLeft      | 左外边距                                        | `string`\|`number` |
| marginRight     | 右外边距                                        | `string`\|`number` |
| borderRadius    | 圆角                                          | `string`\|`number` |
| background      | 背景色                                         | `string`           |
| backgroundColor | 背景色                                         | `string`           |

## Slots

| 插槽名     | 说明         | 接收值 |
|---------|------------|-----|
| default | 加载完成时显示的内容 | -   |

<demo-model url="pages/components/skeleton/skeleton"></demo-model>

