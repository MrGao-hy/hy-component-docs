# 内置样式

::: warning 温馨提示
由于华玥的内置样式均是写在scss文件中的，您在使用的时候，请确保要给页面的style标签加上lang="scss"属性，否则可能会报错。
:::

## Mixin 混入详解

### `flex($direction)` - Flex 布局

```scss
@include flex(row); // 横向布局
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

:::tip 提示
**生效必备条件**：使用该混合宏的元素，必须设置 width 或 max-width，否则截断、省略号完全不生效！
:::

```scss
@include multiEllipsis(3);
// 限制显示 3 行，超出显示省略号
```

## 函数使用

### `themeColor($theme-color, $type, $mix-color)` - 主题色处理

```scss
// 变暗
$color-dark: themeColor($hy-primary, "", "dark");

// 变亮
$color-light: themeColor($hy-primary, "", "light");

// 使用混色
$color-mix: themeColor($hy-primary, "", "#2b85e4");
```

### `resultColor($deg, $theme-color, $set, $color-list, $per-list)` - 渐变色生成

```scss
// 生成渐变色
$gradient: resultColor(
  90deg,
  $hy-primary,
  ("dark", "light"),
  (#2b85e4, #ecf5ff),
  (0%, 100%)
);
// 结果: linear-gradient(90deg, #2b85e4 0%, #ecf5ff 100%)
```