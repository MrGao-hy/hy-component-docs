# 全局配置主题

## 样式引入

:::code-group

```scss [uni.scss]
/* 这是全部展开引入,可以在全局引入 */
@use "@hy-app/ui/index.scss" as *;
```

```scss [使用案例.scss]
.custom-style {
  background: $hy-background;
  color: $hy-text-color;
}
```

:::

:::code-group

```scss [index.scss]
/* 这是别名引入，需要在当下组件引入 */
@use "@hy-app/ui/index.scss" as hy;

.custom-style {
  background: hy.$hy-background;
  color: hy.$hy-text-color;
}
```

:::

## 全局修改组件主题样式

### 基础配置
```scss
/* uni.scss */
page {
  --hy-text-color: #000000;
  --hy-theme-color: red;
  --hy-background: #f6f6f6;
  ...
}
````

### config-provider设置theme时配置

::: tip 注意
当你的组件在公共页面外层包含了`hy-config-provider`这个组件，然后`theme`属性设置了`light`或者`dark`值，你就需要按照下面的做更改
:::

> 通过如下设置可以设置暗色和亮色两种主题下的公共颜色

```scss
/* 亮色 uni.scss */
page .hy-theme--light {
  --hy-text-color: #000000;
  --hy-background: #f8f8f8;
}
/* 暗色 uni.scss */
page .hy-theme--dark {
  --hy-text-color: #ffffff;
  --hy-background: #1b1b1f;
}
```

## 主题CSS变量

### 主色调

| 使用变量                   | CSS 变量                  | 默认值       | 说明   |
|------------------------|-------------------------|-----------|------|
| `$hy-primary`          | `--hy-primary`          | `#2979ff` | 主色   |
| `$hy-primary-dark`     | `--hy-primary-dark`     | `#2b85e4` | 主色深色 |
| `$hy-primary-disabled` | `--hy-primary-disabled` | `#a0cfff` | 主色禁用 |
| `$hy-primary-light`    | `--hy-primary-light`    | `#ecf5ff` | 主色浅色 |

### 警告色

| 使用变量                   | CSS 变量                  | 默认值       | 说明    |
|------------------------|-------------------------|-----------|-------|
| `$hy-warning`          | `--hy-warning`          | `#ff9900` | 警告色   |
| `$hy-warning-dark`     | `--hy-warning-dark`     | `#f29100` | 警告色深色 |
| `$hy-warning-disabled` | `--hy-warning-disabled` | `#fcbd71` | 警告色禁用 |
| `$hy-warning-light`    | `--hy-warning-light`    | `#fdf6ec` | 警告色浅色 |

### 成功色

| 使用变量                   | CSS 变量                  | 默认值       | 说明    |
|------------------------|-------------------------|-----------|-------|
| `$hy-success`          | `--hy-success`          | `#19be6b` | 成功色   |
| `$hy-success-dark`     | `--hy-success-dark`     | `#18b566` | 成功色深色 |
| `$hy-success-disabled` | `--hy-success-disabled` | `#71d5a1` | 成功色禁用 |
| `$hy-success-light`    | `--hy-success-light`    | `#dbf1e1` | 成功色浅色 |

### 错误色

| 使用变量                 | CSS 变量                | 默认值       | 说明    |
|----------------------|-----------------------|-----------|-------|
| `$hy-error`          | `--hy-error`          | `#fa3534` | 错误色   |
| `$hy-error-dark`     | `--hy-error-dark`     | `#dd6161` | 错误色深色 |
| `$hy-error-disabled` | `--hy-error-disabled` | `#fab6b6` | 错误色禁用 |
| `$hy-error-light`    | `--hy-error-light`    | `#fef0f0` | 错误色浅色 |

### 信息色

| 使用变量                | CSS 变量               | 默认值       | 说明    |
|---------------------|----------------------|-----------|-------|
| `$hy-info`          | `--hy-info`          | `#909399` | 信息色   |
| `$hy-info-dark`     | `--hy-info-dark`     | `#82848a` | 信息色深色 |
| `$hy-info-disabled` | `--hy-info-disabled` | `#c8c9cc` | 信息色禁用 |
| `$hy-info-light`    | `--hy-info-light`    | `#f4f4f5` | 信息色浅色 |

### 文字颜色

| 使用变量                          | CSS 变量                         | 默认值                  | 说明      |
|-------------------------------|--------------------------------|----------------------|---------|
| `$hy-text-color`              | `--hy-text-color`              | `#3c3c43`            | 基础文字    |
| `$hy-text-color--2`           | `--hy-text-color--2`           | `#67676c`            | 次要文字/提示 |
| `$hy-text-color--3`           | `--hy-text-color--3`           | `#929295`            | 浅色提示    |
| `$hy-text-color--4`           | `--hy-text-color--4`           | `rgba(0, 0, 0, 0.1)` | 极浅色     |
| `$hy-text-color--grey`        | `--hy-text-color--grey`        | `#999`               | 辅助灰色    |
| `$hy-text-color--placeholder` | `--hy-text-color--placeholder` | `#808080`            | 占位符     |
| `$hy-text-color--disabled`    | `--hy-text-color--disabled`    | `#c0c0c0`            | 禁用状态    |
| `$hy-text-color-hover`        | `--hy-text-color-hover`        | `#58595b`            | 悬停状态    |

### 字体大小

| 使用变量                 | CSS 变量                | 默认值     | 说明   |
|----------------------|-----------------------|---------|------|
| `$hy-font-size-xs`   | `--hy-font-size-xs`   | `20rpx` | 超小字体 |
| `$hy-font-size-sm`   | `--hy-font-size-sm`   | `24rpx` | 小号字体 |
| `$hy-font-size-base` | `--hy-font-size-base` | `28rpx` | 基础字体 |
| `$hy-font-size-md`   | `--hy-font-size-md`   | `32rpx` | 中等字体 |
| `$hy-font-size-lg`   | `--hy-font-size-lg`   | `36rpx` | 大号字体 |
| `$hy-font-size-xl`   | `--hy-font-size-xl`   | `40rpx` | 超大字体 |
| `$hy-font-size-xxl`  | `--hy-font-size-xxl`  | `48rpx` | 特大字体 |

### 字体样式

| 使用变量                     | CSS 变量                    | 默认值   | 说明   |
|--------------------------|---------------------------|-------|------|
| `$hy-font-weight-normal` | `--hy-font-weight-normal` | `400` | 正常字重 |
| `$hy-font-weight-medium` | `--hy-font-weight-medium` | `500` | 中等字重 |
| `$hy-font-weight-bold`   | `--hy-font-weight-bold`   | `600` | 粗体   |

### 行高

| 使用变量                   | CSS 变量                  | 默认值   | 说明   |
|------------------------|-------------------------|-------|------|
| `$hy-line-height-sm`   | `--hy-line-height-sm`   | `1.4` | 小行高  |
| `$hy-line-height-base` | `--hy-line-height-base` | `1.5` | 基础行高 |
| `$hy-line-height-lg`   | `--hy-line-height-lg`   | `1.8` | 大行高  |

### 图标颜色

| 使用变量             | CSS 变量            | 默认值       | 说明   |
|------------------|-------------------|-----------|------|
| `$hy-icon-color` | `--hy-icon-color` | `#606266` | 默认图标 |

### 背景颜色

| 使用变量                                     | CSS 变量                                    | 默认值                   | 说明        |
|------------------------------------------|-------------------------------------------|-----------------------|-----------|
| `$hy-background`                         | `--hy-background`                         | `#f8f8f8`             | 页面背景      |
| `$hy-background--2`                      | `--hy-background--2`                      | `#ffffff`             | 卡片/弹窗背景   |
| `$hy-background--3`                      | `--hy-background--3`                      | `#646566`             | 深色背景      |
| `$hy-background--container`              | `--hy-background--container`              | `#ffffff`             | 容器背景      |
| `$hy-background--disabled`               | `--hy-background--disabled`               | `#f5f5f5`             | 禁用背景      |
| `$hy-background--track`                  | `--hy-background--track`                  | `#f6f6f6`             | 轨道背景      |
| `$hy-background--empty`                  | `--hy-background--empty`                  | `#f3f3f3`             | 空状态背景     |
| `$hy-background--skeleton`               | `--hy-background--skeleton`               | `#EEEEEE`             | 骨架屏背景色    |
| `$hy-background--hover`                  | `--hy-background--hover`                  | `rgba(0, 0, 0, 0.1)`  | 点击状态背景    |
| `$hy-background-mask`                    | `--hy-background-mask`                    | `rgba(0, 0, 0, 0.5)`  | 遮罩        |
| `$hy-background--active`                 | `--hy-background--active`                 | `#FFFFFF`             | 选中背景色     |
| `$hy-background--close`                  | `--hy-background--close`                  | `#f0f0f0`             | 关闭背景色     |
| `$hy-background--box`                    | `--hy-background--box`                    | `#FFFFFF`             | 盒子背景色     |
| `$hy-background--line`                   | `--hy-background--line`                   | `rgba(0, 0, 0, 0.15)` | 细线背景色     |
| `$hy-background--table-header`           | `--hy-background--table-header`           | `#FAFAFA`             | 表头背景色     |
| `$hy-background-image--mask--two-flanks` | `--hy-background-image--mask--two-flanks` | -                     | 向两边形成雾霾形状 |

### 图片尺寸

| 使用变量                | CSS 变量               | 默认值      |
|---------------------|----------------------|----------|
| `$hy-img-size-sm`   | `--hy-img-size-sm`   | `45rpx`  |
| `$hy-img-size-base` | `--hy-img-size-base` | `80rpx`  |
| `$hy-img-size-lg`   | `--hy-img-size-lg`   | `120rpx` |

### 头像尺寸

| 使用变量                   | CSS 变量                  | 默认值      |
|------------------------|-------------------------|----------|
| `$hy-avatar-size-sm`   | `--hy-avatar-size-sm`   | `80rpx`  |
| `$hy-avatar-size-base` | `--hy-avatar-size-base` | `100rpx` |
| `$hy-avatar-size-lg`   | `--hy-avatar-size-lg`   | `120rpx` |

### 透明度

| 使用变量                   | CSS 变量                  | 默认值   | 说明     |
|------------------------|-------------------------|-------|--------|
| `$hy-opacity-disabled` | `--hy-opacity-disabled` | `0.3` | 禁用态透明度 |

### 圆角

| 使用变量                    | CSS 变量                   | 默认值     | 说明   |
|-------------------------|--------------------------|---------|------|
| `$hy-radius-no`         | `--hy-radius-no`         | `0`     | 无圆角  |
| `$hy-radius-sm`         | `--hy-radius-sm`         | `8rpx`  | 小圆角  |
| `$hy-radius-base`       | `--hy-radius-base`       | `20rpx` | 默认圆角 |
| `$hy-radius-lg`         | `--hy-radius-lg`         | `32rpx` | 大圆角  |
| `$hy-radius-circle`     | `--hy-radius-circle`     | `50%`   | 圆形   |
| `$hy-radius-semicircle` | `--hy-radius-semicircle` | `100px` | 半圆   |

### 间距

| 使用变量                             | CSS 变量                            | 默认值     | 说明   |
|----------------------------------|-----------------------------------|---------|------|
| `$hy-border-margin-padding-sm`   | `--hy-border-margin-padding-sm`   | `10rpx` | 小间距  |
| `$hy-border-margin-padding-base` | `--hy-border-margin-padding-base` | `20rpx` | 默认间距 |
| `$hy-border-margin-padding-lg`   | `--hy-border-margin-padding-lg`   | `30rpx` | 大间距  |
| `$hy-border-margin-padding-xl`   | `--hy-border-margin-padding-xl`   | `48rpx` | 超大间距 |
| `$hy-border-margin-padding-xxl`  | `--hy-border-margin-padding-xxl`  | `64rpx` | 特大间距 |

### 边框

| 使用变量              | CSS 变量             | 默认值                 | 说明 |
|-------------------|--------------------|---------------------|----|
| `$hy-border-line` | `--hy-border-line` | `1px solid #e8e8e8` | 边框 |

### 边框颜色

| 使用变量                     | CSS 变量                    | 默认值       | 说明   |
|--------------------------|---------------------------|-----------|------|
| `$hy-border-color`       | `--hy-border-color`       | `#c2c2c4` | 默认边框 |
| `$hy-border-color-light` | `--hy-border-color-light` | `#c8c7cc` | 浅色边框 |
| `$hy-border-color--2`    | `--hy-border-color--2`    | `#c9cacc` | 次边框色 |

### 边框宽度

| 使用变量                    | CSS 变量                   | 默认值    | 说明   |
|-------------------------|--------------------------|--------|------|
| `$hy-border-width-xs`   | `--hy-border-width-xs`   | `1rpx` | 超细边框 |
| `$hy-border-width-sm`   | `--hy-border-width-sm`   | `2rpx` | 细边框  |
| `$hy-border-width-base` | `--hy-border-width-base` | `4rpx` | 基础边框 |
| `$hy-border-width-lg`   | `--hy-border-width-lg`   | `8rpx` | 粗边框  |

### 阴影层级

| 使用变量              | CSS 变量             | 默认值                                  | 说明    |
|-------------------|--------------------|--------------------------------------|-------|
| `$hy-box-shadow`  | `--hy-box-shadow`  | `0 0 10rpx 4rpx rgba(0, 0, 0, 0.16)` | 默认阴影  |
| `$hy-shadow-sm`   | `--hy-shadow-sm`   | `0 2rpx 8rpx rgba(0, 0, 0, 0.06)`    | 轻微阴影  |
| `$hy-shadow-base` | `--hy-shadow-base` | `0 4rpx 16rpx rgba(0, 0, 0, 0.08)`   | 基础阴影  |
| `$hy-shadow-lg`   | `--hy-shadow-lg`   | `0 8rpx 24rpx rgba(0, 0, 0, 0.12)`   | 强烈阴影  |
| `$hy-shadow-xl`   | `--hy-shadow-xl`   | `0 12rpx 40rpx rgba(0, 0, 0, 0.16)`  | 极强烈阴影 |

### 透明度

| 使用变量                   | CSS 变量                  | 默认值   | 说明     |
|------------------------|-------------------------|-------|--------|
| `$hy-opacity-xs`       | `--hy-opacity-xs`       | `0.1` | 极低透明度  |
| `$hy-opacity-sm`       | `--hy-opacity-sm`       | `0.3` | 低透明度   |
| `$hy-opacity-base`     | `--hy-opacity-base`     | `0.5` | 中等透明度  |
| `$hy-opacity-lg`       | `--hy-opacity-lg`       | `0.7` | 高透明度   |
| `$hy-opacity-disabled` | `--hy-opacity-disabled` | `0.4` | 禁用态透明度 |

### 过渡曲线

| 使用变量                    | CSS 变量                   | 默认值                                 | 说明   |
|-------------------------|--------------------------|-------------------------------------|------|
| `$hy-transition-ease`   | `--hy-transition-ease`   | `cubic-bezier(0.4, 0, 0.2, 1)`      | 标准曲线 |
| `$hy-transition-bounce` | `--hy-transition-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 弹跳曲线 |
