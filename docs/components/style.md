# 内置样式
::: warning 温馨提示
由于华玥的内置样式均是写在scss文件中的，您在使用的时候，请确保要给页面的style标签加上lang="scss"属性，否则可能会报错。
:::

## 样式引入
:::code-group
```scss  [uni.scss]
/* 这是全部展开引入,可以在全局引入 */
@use "hy-app/index.scss" as *;
```

```scss [使用案例.scss]
.custom-style {
  background: $hy-background;
  color: $hy-text-color;
}
```
:::

:::code-group
```scss  [index.scss]
/* 这是别名引入，需要在当下组件引入 */
@use "hy-app/index.scss" as hy;

.custom-style {
  background: hy.$hy-background;
  color: hy.$hy-text-color;
}
```
:::


## 设置组件默认主题色
```scss
page {
  --hy-theme-color: red;
}
```

## 根据不同主题设置不同颜色
::: tip 注意
为了实现根据主题动态调整不同环境下的颜色，可以在页面的最外层使用一个`ConfigProvider`组件来包裹整个页面内容。通过这种方式，
`ConfigProvider`能够统一管理主题相关的配置，从而确保整个应用的颜色风格能够根据主题设置进行动态切换，实现一致的视觉效果。
:::
> 通过如下设置可以设置暗色和亮色两种主题下的公共颜色
```scss
/* 亮色 */
page .hy-theme--light {
  --hy-text-color: #000000;
  --hy-background: #f8f8f8;
}
/* 暗色 */
page .hy-theme--dark {
  --hy-text-color: #ffffff;
  --hy-background: #1b1b1f;
}
```

## Mixin 混入详解

### `flex($direction)` - Flex 布局

```scss
@include flex(row);    // 横向布局
@include flex(column); // 纵向布局
```

### `lineEllipsis` - 单行超出隐藏

```scss
@include lineEllipsis;
// 等同于
// overflow: hidden;
// text-overflow: ellipsis;
// white-space: nowrap;
```

### `multiEllipsis($lineNumber)` - 多行超出隐藏

```scss
@include multiEllipsis(3);
// 限制显示 3 行，超出显示省略号
```

## 函数使用

### `themeColor($theme-color, $type, $mix-color)` - 主题色处理

```scss
// 变暗
$color-dark: themeColor($hy-primary, 'dark');

// 变亮
$color-light: themeColor($hy-primary, 'light');

// 使用混色
$color-mix: themeColor($hy-primary, '', '#2b85e4');
```

### `resultColor($deg, $theme-color, $set, $color-list, $per-list)` - 渐变色生成

```scss
// 生成渐变色
$gradient: resultColor(
  90deg,
  $hy-primary,
  ('dark', 'light'),
  (#2b85e4, #ecf5ff),
  (0%, 100%)
);
// 结果: linear-gradient(90deg, #2b85e4 0%, #ecf5ff 100%)
```

## 主题变量使用
```scss
/* 主题是相关颜色 */
$hy-primary: var(--hy-theme-color, #2979ff) !default;
$hy-primary-dark: var(--hy-theme--dark, #2b85e4) !default;
$hy-primary-disabled: var(--hy-theme--disabled, #a0cfff) !default;
$hy-primary-light: var(--hy-theme--light, #ecf5ff) !default;

$hy-warning: var(--hy-warning, #ff9900) !default;
$hy-warning-dark: var(--hy-warning--dark, #f29100) !default;
$hy-warning-disabled: var(--hy-warning--disabled, #fcbd71) !default;
$hy-warning-light: var(--hy-warning--light, #fdf6ec) !default;

$hy-success: var(--hy-success, #19be6b) !default;
$hy-success-dark: var(--hy-success--dark, #18b566) !default;
$hy-success-disabled: var(--hy-success--disabled, #71d5a1) !default;
$hy-success-light: var(--hy-success--light, #dbf1e1) !default;

$hy-error: var(--hy-error, #fa3534) !default;
$hy-error-dark: var(--hy-error--dark, #dd6161) !default;
$hy-error-disabled: var(--hy-error--disabled, #fab6b6) !default;
$hy-error-light: var(--hy-error--light, #fef0f0) !default;

$hy-info: var(--hy-info, #909399) !default;
$hy-info-dark: var(--hy-info--dark, #82848a) !default;
$hy-info-disabled: var(--hy-info--disabled, #c8c9cc) !default;
$hy-info-light: var(--hy-info--light, #f4f4f5) !default;

/* 字体颜色 */
$hy-text-color: var(--hy-text-color, #3c3c43) !default; // 一般用于基础文字
$hy-text-color--2: var(--hy-text-color--2, #67676c) !default; // 一般用于提示
$hy-text-color--3: var(--hy-text-color--3, #929295) !default; // 一般用于浅色提示
$hy-text-color--4: var(--hy-text-color--4, rgba(0, 0, 0, 0.1)) !default; // 一般用于浅色
$hy-icon-color: var(--hy-icon-color, #606266) !default; // 一般用于icon
$hy-text-color--grey: var(--hy-text-color--grey, #999) !default; // 辅助灰色，如加载更多的提示信息
$hy-text-color--placeholder: var(--hy-text-color--placeholder, #808080) !default; // 输入框提示颜色
$hy-text-color--disabled: var(--hy-text-color--disabled, #c0c0c0) !default; // 禁用文字颜色
$hy-border-color: var(--hy-border-color, #c0c0c0) !default; // 边框颜色
$hy-text-color-hover: var(--hy-text-color-hover, #58595b)!default; // 点击状态文字颜色


/* 背景色 */
$hy-background: var(--hy-background, #f8f8f8) !default; // 背景色
$hy-background--2: var(--hy-background--2, #ffffff) !default; // 弹窗背景色
$hy-background--3: var(--hy-background--3, #646566) !default; // 弹窗背景色
$hy-background--container: var(--hy-background--container, #ffffff) !default; // 容器背景色
$hy-background--disabled: var(--hy-background--disabled, #F5F5F5); // 禁用背景色
$hy-background--track: var(--hy-background--track, #F6F6F6) !default; // 轨道背景色
$hy-background--empty: var(--hy-background--empty, #F3F3F3) !default; // 搜索背景色
$hy-background--hover: var(--hy-background--hover, rgba(0,0,0,0.1)) !default; // 点击状态
$hy-light-background-mask: var(--hy-light-background-mask, rgba(0, 0, 0, 0.5)); //遮罩颜色
$hy-background--active: var(--hy-background--active, #131313); // 选中背景色

/* 文字尺寸 */
$hy-font-size-sm: 24rpx; // 提示文字大小
$hy-font-size-base: 32rpx; // 基本文字大小
$hy-font-size-lg: 40rpx; // 标题文字大小


/* 边框颜色 */
$hy-border-color-light: var(--hy-border-color-light, #c8c7cc) !default;
$hy-border-color: var(--hy-border-color, #c2c2c4) !default;
$hy-border-color--2: var(--hy-border-color--2, #c9cacc) !default;

/* 图片尺寸 */
$hy-img-size-sm: var(--hy-img-size-sm, 45rpx) !default;
$hy-img-size-base: var(--hy-img-size-base, 80rpx) !default;
$hy-img-size-lg: var(--hy-img-size-lg, 120rpx) !default;

/* 头像大小 */
$hy-avatar-size-sm: var(--hy-avatar-size-sm, 80rpx) !default;
$hy-avatar-size-base: var(--hy-avatar-size-base, 100rpx) !default;
$hy-avatar-size-lg: var(--hy-avatar-size-lg, 120rpx) !default;

/* 透明度 */
$hy-opacity-disabled: var(--hy-opacity-disabled, 0.3) !default; // 组件禁用态的透明度

/* 盒子的圆角 */
$hy-border-radius-no: var(--hy-border-radius-no, 0) !default;
$hy-border-radius-sm: var(--hy-border-radius-sm, 8rpx) !default;
$hy-border-radius-base: var(--hy-border-radius-base, 20rpx) !default;
$hy-border-radius-lg: var(--hy-border-radius-lg, 32rpx) !default;
$hy-border-radius-circle: var(--hy-border-radius-circle, 50%) !default;
$hy-border-radius-semicircle: var(--hy-border-radius-semicircle, 100px) !default;
/* 盒子阴影 */
$hy-box-shadow: var(--hy-box-shadow, 0 0 10rpx 4rpx rgba(0, 0, 0, 0.16)) !default;
/* 盒内盒外间距 */
$hy-border-margin-padding-sm: var(--hy-border-margin-padding-sm, 10rpx) !default;
$hy-border-margin-padding-base: var(--hy-border-margin-padding-base, 20rpx) !default;
$hy-border-margin-padding-lg: var(--hy-border-margin-padding-lg, 30rpx) !default;
/* 底部线条 */
$hy-border-line: var(--hy-border-line, 1px solid #c2c2c4) !default;
```