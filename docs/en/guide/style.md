# Built-in Styles

::: warning Tip

Since Huayue's built-in styles are written in SCSS files, please ensure that you add the `lang="scss"` attribute to the page's `style` tag when using them. Otherwise, you may encounter errors.

:::

##Mixin Detailed Explanation

### `flex($direction)` - Flex Layout

```scss
@include flex(row); // Horizontal layout
@include flex(column); // Vertical layout
```

### `lineEllipsis` - Single Line Overflow Hidden

```scss
@include lineEllipsis;
// Equivalent to
// overflow: hidden;
// text-overflow: ellipsis;
// white-space: nowrap;
```

### `multiEllipsis($lineNumber)` - Multi-line Overflow Hidden

::: tip Tip

**Required Conditions for Effectiveness**: The element using this mixin must be set with `width` or `max-width`, otherwise, truncation and ellipsis will not take effect!

:::

```scss
@include multiEllipsis(3);
// Limits display to 3 lines, showing ellipsis for overflow
```

## Function Usage

### `themeColor($theme-color, $type, $mix-color)` - Theme Color Processing

```scss
// Darken
$color-dark: themeColor($hy-primary, '', 'dark');

// Lighten
$color-light: themeColor($hy-primary, '', 'light');

// Use mixed color
$color-mix: themeColor($hy-primary, '', '#2b85e4');
```

### `resultColor($deg, $theme-color, $set, $color-list, $per-list)` - Gradient Color Generation

```scss
// Generate gradient color
$gradient: resultColor(90deg, $hy-primary, ('dark', 'light'), (#2b85e4, #ecf5ff), (0%, 100%));
// Result: linear-gradient(90deg, #2b85e4 0%, #ecf5ff 100%)
```