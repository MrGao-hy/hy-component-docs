# Global Configuration Theme

## Style Import

::: code-group

```scss [uni.scss]
/* This is a fully expanded import, which can be imported globally */
@use '@hy-app/ui/index.scss' as *;
```

```scss [Usage Example.scss]
.custom-style {
    background: $hy-background;
    color: $hy-text-color;
}
```

:::

::: code-group

```scss [index.scss]
/* This is an aliased import, which needs to be imported in the current component */
@use '@hy-app/ui/index.scss' as hy;

.custom-style {
    background: hy.$hy-background;
    color: hy.$hy-text-color;
}
```

:::

## Globally Modify Component Theme Styles

### Basic Configuration

```scss
/* uni.scss */
page {
  --hy-text-color: #000000;
  --hy-theme-color: red;
  --hy-background: #f6f6f6;
  ...
}
```

### Configuration when config-provider sets theme

::: tip Note

When your components on a common page are wrapped with the `hy-config-provider` component, and the `theme` property is set to `light` or `dark`, you need to make the following changes

:::

> With the following settings, you can set the common colors for both dark and light themes

```scss
/* Light uni.scss */
page .hy-theme--light {
    --hy-text-color: #000000;
    --hy-background: #f8f8f8;
}
/* Dark uni.scss */
page .hy-theme--dark {
    --hy-text-color: #ffffff;
    --hy-background: #1b1b1f;
}
```

## Theme CSS Variables

### Primary Color

| Usage Variable          | CSS Variable             | Default Value | Description          |
| ---------------------- | ----------------------- | --------- | -------- |
| `$hy-primary`          | `--hy-primary`          | `#2979ff` | Primary color     |
| `$hy-primary-dark`     | `--hy-primary-dark`     | `#2b85e4` | Primary dark     |
| `$hy-primary-disabled` | `--hy-primary-disabled` | `#a0cfff` | Primary disabled |
| `$hy-primary-light`    | `--hy-primary-light`    | `#ecf5ff` | Primary light    |

### Warning Color

| Usage Variable          | CSS Variable             | Default Value | Description          |
| ---------------------- | ----------------------- | --------- | ---------- |
| `$hy-warning`          | `--hy-warning`          | `#ff9900` | Warning color     |
| `$hy-warning-dark`     | `--hy-warning-dark`     | `#f29100` | Warning dark     |
| `$hy-warning-disabled` | `--hy-warning-disabled` | `#fcbd71` | Warning disabled |
| `$hy-warning-light`    | `--hy-warning-light`    | `#fdf6ec` | Warning light    |

### Success Color

| Usage Variable          | CSS Variable             | Default Value | Description          |
| ---------------------- | ----------------------- | --------- | ---------- |
| `$hy-success`          | `--hy-success`          | `#19be6b` | Success color     |
| `$hy-success-dark`     | `--hy-success-dark`     | `#18b566` | Success dark     |
| `$hy-success-disabled` | `--hy-success-disabled` | `#71d5a1` | Success disabled |
| `$hy-success-light`    | `--hy-success-light`    | `#dbf1e1` | Success light    |

### Error Color

| Usage Variable        | CSS Variable           | Default Value | Description          |
| -------------------- | --------------------- | --------- | ---------- |
| `$hy-error`          | `--hy-error`          | `#fa3534` | Error color     |
| `$hy-error-dark`     | `--hy-error-dark`     | `#dd6161` | Error dark     |
| `$hy-error-disabled` | `--hy-error-disabled` | `#fab6b6` | Error disabled |
| `$hy-error-light`    | `--hy-error-light`    | `#fef0f0` | Error light    |

### Info Color

| Usage Variable       | CSS Variable          | Default Value | Description          |
| ------------------- | -------------------- | --------- | ---------- |
| `$hy-info`          | `--hy-info`          | `#909399` | Info color     |
| `$hy-info-dark`     | `--hy-info-dark`     | `#82848a` | Info dark     |
| `$hy-info-disabled` | `--hy-info-disabled` | `#c8c9cc` | Info disabled |
| `$hy-info-light`    | `--hy-info-light`    | `#f4f4f5` | Info light    |

### Text Color

| Usage Variable | CSS Variable | Default Value | Description |
| --- | --- | --- | --- |
| `$hy-text-color` | `--hy-text-color` | `#3c3c43` | Basic text |
| `$hy-text-color--2` | `--hy-text-color--2` | `#67676c` | Secondary text/hint |
| `$hy-text-color--3` | `--hy-text-color--3` | `#929295` | Light hint |
| `$hy-text-color--4` | `--hy-text-color--4` | `rgba(0, 0, 0, 0.1)` | Extremely light |
| `$hy-text-color--grey` | `--hy-text-color--grey` | `#999` | Auxiliary gray |
| `$hy-text-color--placeholder` | `--hy-text-color--placeholder` | `#808080` | Placeholder |
| `$hy-text-color--disabled` | `--hy-text-color--disabled` | `#c0c0c0` | Disabled state |
| `$hy-text-color-hover` | `--hy-text-color-hover` | `#58595b` | Hover state |

### Font Size

| Usage Variable        | CSS Variable           | Default Value | Description          |
| -------------------- | --------------------- | ------- | -------- |
| `$hy-font-size-xs`   | `--hy-font-size-xs`   | `20rpx` | Extra small font |
| `$hy-font-size-sm`   | `--hy-font-size-sm`   | `24rpx` | Small font |
| `$hy-font-size-base` | `--hy-font-size-base` | `28rpx` | Base font |
| `$hy-font-size-md`   | `--hy-font-size-md`   | `32rpx` | Medium font |
| `$hy-font-size-lg`   | `--hy-font-size-lg`   | `36rpx` | Large font |
| `$hy-font-size-xl`   | `--hy-font-size-xl`   | `40rpx` | Extra large font |
| `$hy-font-size-xxl`  | `--hy-font-size-xxl`  | `48rpx` | Extra extra large font |

### Font Style

| Usage Variable            | CSS Variable              | Default Value | Description          |
| ------------------------ | ------------------------- | ------ | -------- |
| `$hy-font-weight-normal` | `--hy-font-weight-normal` | `400`  | Normal weight |
| `$hy-font-weight-medium` | `--hy-font-weight-medium` | `500`  | Medium weight |
| `$hy-font-weight-bold`   | `--hy-font-weight-bold`   | `600`  | Bold     |

### Line Height

| Usage Variable          | CSS Variable             | Default Value | Description          |
| ---------------------- | ----------------------- | ------ | -------- |
| `$hy-line-height-sm`   | `--hy-line-height-sm`   | `1.4`  | Small line height   |
| `$hy-line-height-base` | `--hy-line-height-base` | `1.5`  | Base line height |
| `$hy-line-height-lg`   | `--hy-line-height-lg`   | `1.8`  | Large line height   |

### Icon Color

| Usage Variable       | CSS Variable         | Default Value | Description          |
| ---------------- | ----------------- | --------- | -------- |
| `$hy-icon-color` | `--hy-icon-color` | `#606266` | Default icon |

### Background Color

| Usage Variable | CSS Variable | Default Value | Description |
| --- | --- | --- | --- |
| `$hy-background` | `--hy-background` | `#f8f8f8` | Page background |
| `$hy-background--2` | `--hy-background--2` | `#ffffff` | Card/popup background |
| `$hy-background--3` | `--hy-background--3` | `#646566` | Dark background |
| `$hy-background--container` | `--hy-background--container` | `#ffffff` | Container background |
| `$hy-background--disabled` | `--hy-background--disabled` | `#f5f5f5` | Disabled background |
| `$hy-background--track` | `--hy-background--track` | `#f6f6f6` | Track background |
| `$hy-background--empty` | `--hy-background--empty` | `#f3f3f3` | Empty state background |
| `$hy-background--skeleton` | `--hy-background--skeleton` | `#EEEEEE` | Skeleton screen background |
| `$hy-background--hover` | `--hy-background--hover` | `rgba(0, 0, 0, 0.1)` | Tap state background |
| `$hy-background-mask` | `--hy-background-mask` | `rgba(0, 0, 0, 0.5)` | Mask |
| `$hy-background--active` | `--hy-background--active` | `#FFFFFF` | Selected background |
| `$hy-background--close` | `--hy-background--close` | `#f0f0f0` | Close background |
| `$hy-background--box` | `--hy-background--box` | `#FFFFFF` | Box background |
| `$hy-background--line` | `--hy-background--line` | `rgba(0, 0, 0, 0.15)` | Thin line background |
| `$hy-background--table-header` | `--hy-background--table-header` | `#FAFAFA` | Table header background |
| `$hy-background-image--mask--two-flanks` | `--hy-background-image--mask--two-flanks` | - | Forms a haze shape toward both sides |

### Image Size

| Usage Variable        | CSS Variable           | Default Value |
| ------------------- | -------------------- | -------- |
| `$hy-img-size-sm`   | `--hy-img-size-sm`   | `45rpx`  |
| `$hy-img-size-base` | `--hy-img-size-base` | `80rpx`  |
| `$hy-img-size-lg`   | `--hy-img-size-lg`   | `120rpx` |

### Avatar Size

| Usage Variable          | CSS Variable             | Default Value |
| ---------------------- | ----------------------- | -------- |
| `$hy-avatar-size-sm`   | `--hy-avatar-size-sm`   | `80rpx`  |
| `$hy-avatar-size-base` | `--hy-avatar-size-base` | `100rpx` |
| `$hy-avatar-size-lg`   | `--hy-avatar-size-lg`   | `120rpx` |

### Opacity

| Usage Variable          | CSS Variable             | Default Value | Description              |
| ---------------------- | ----------------------- | ------ | ------------ |
| `$hy-opacity-disabled` | `--hy-opacity-disabled` | `0.3`  | Disabled state opacity |

### Border Radius

| Usage Variable          | CSS Variable             | Default Value | Description          |
| ----------------------- | ------------------------ | ------- | -------- |
| `$hy-radius-no`         | `--hy-radius-no`         | `0`     | No radius   |
| `$hy-radius-sm`         | `--hy-radius-sm`         | `8rpx`  | Small radius   |
| `$hy-radius-base`       | `--hy-radius-base`       | `20rpx` | Default radius |
| `$hy-radius-lg`         | `--hy-radius-lg`         | `32rpx` | Large radius   |
| `$hy-radius-circle`     | `--hy-radius-circle`     | `50%`   | Circle     |
| `$hy-radius-semicircle` | `--hy-radius-semicircle` | `100px` | Semicircle     |

### Spacing

| Usage Variable                         | CSS Variable                          | Default Value | Description          |
| -------------------------------- | --------------------------------- | ------- | -------- |
| `$hy-border-margin-padding-sm`   | `--hy-border-margin-padding-sm`   | `10rpx` | Small spacing   |
| `$hy-border-margin-padding-base` | `--hy-border-margin-padding-base` | `20rpx` | Default spacing |
| `$hy-border-margin-padding-lg`   | `--hy-border-margin-padding-lg`   | `30rpx` | Large spacing   |
| `$hy-border-margin-padding-xl`   | `--hy-border-margin-padding-xl`   | `48rpx` | Extra large spacing |
| `$hy-border-margin-padding-xxl`  | `--hy-border-margin-padding-xxl`  | `64rpx` | Extra extra large spacing |

### Border

| Usage Variable        | CSS Variable           | Default Value             | Description |
| ----------------- | ------------------ | ------------------- | ---- |
| `$hy-border-line` | `--hy-border-line` | `1px solid #e8e8e8` | Border |

### Border Color

| Usage Variable            | CSS Variable               | Default Value | Description          |
| ------------------------ | ------------------------- | --------- | -------- |
| `$hy-border-color`       | `--hy-border-color`       | `#c2c2c4` | Default border |
| `$hy-border-color-light` | `--hy-border-color-light` | `#c8c7cc` | Light border |
| `$hy-border-color--2`    | `--hy-border-color--2`    | `#c9cacc` | Secondary border color |

### Border Width

| Usage Variable          | CSS Variable             | Default Value | Description          |
| ----------------------- | ------------------------ | ------ | -------- |
| `$hy-border-width-xs`   | `--hy-border-width-xs`   | `1rpx` | Extra thin border |
| `$hy-border-width-sm`   | `--hy-border-width-sm`   | `2rpx` | Thin border   |
| `$hy-border-width-base` | `--hy-border-width-base` | `4rpx` | Base border |
| `$hy-border-width-lg`   | `--hy-border-width-lg`   | `8rpx` | Thick border   |

### Shadow Levels

| Usage Variable        | CSS Variable           | Default Value                             | Description            |
| ----------------- | ------------------ | ------------------------------------ | ---------- |
| `$hy-box-shadow`  | `--hy-box-shadow`  | `0 0 10rpx 4rpx rgba(0, 0, 0, 0.16)` | Default shadow   |
| `$hy-shadow-sm`   | `--hy-shadow-sm`   | `0 2rpx 8rpx rgba(0, 0, 0, 0.06)`    | Slight shadow     |
| `$hy-shadow-base` | `--hy-shadow-base` | `0 4rpx 16rpx rgba(0, 0, 0, 0.08)`   | Base shadow     |
| `$hy-shadow-lg`   | `--hy-shadow-lg`   | `0 8rpx 24rpx rgba(0, 0, 0, 0.12)`   | Strong shadow     |
| `$hy-shadow-xl`   | `--hy-shadow-xl`   | `0 12rpx 40rpx rgba(0, 0, 0, 0.16)`  | Extremely strong shadow |

### Opacity

| Usage Variable          | CSS Variable             | Default Value | Description              |
| ---------------------- | ----------------------- | ------ | ------------ |
| `$hy-opacity-xs`       | `--hy-opacity-xs`       | `0.1`  | Extremely low opacity   |
| `$hy-opacity-sm`       | `--hy-opacity-sm`       | `0.3`  | Low opacity     |
| `$hy-opacity-base`     | `--hy-opacity-base`     | `0.5`  | Medium opacity   |
| `$hy-opacity-lg`       | `--hy-opacity-lg`       | `0.7`  | High opacity     |
| `$hy-opacity-disabled` | `--hy-opacity-disabled` | `0.4`  | Disabled state opacity |

### Transition Curves

| Usage Variable | CSS Variable | Default Value | Description |
| --- | --- | --- | --- |
| `$hy-transition-ease` | `--hy-transition-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard curve |
| `$hy-transition-bounce` | `--hy-transition-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bounce curve |