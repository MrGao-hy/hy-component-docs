# 内置样式
::: warning 温馨提示
由于华玥的内置样式均是写在scss文件中的，您在使用的时候，请确保要给页面的style标签加上lang="scss"属性，否则可能会报错。
:::

## 使用配置
```ts  [./vite.config.ts]
css: {
    // 配置`scss`和`less`全局变量
    preprocessorOptions: {
        scss: {
            additionalData: '@import "hy-app/theme.scss";'
        }
    }
}
```

## 主题集合
```scss
/* 主题是相关颜色 */
$hy-primary: #2979ff;
$hy-primary-dark: #2b85e4;
$hy-primary-disabled: #a0cfff;
$hy-primary-light: #ecf5ff;

$hy-warning: #ff9900;
$hy-warning-dark: #f29100;
$hy-warning-disabled: #fcbd71;
$hy-warning-light: #fdf6ec;

$hy-success: #19be6b;
$hy-success-dark: #18b566;
$hy-success-disabled: #71d5a1;
$hy-success-light: #dbf1e1;

$hy-error: #fa3534;
$hy-error-dark: #dd6161;
$hy-error-disabled: #fab6b6;
$hy-error-light: #fef0f0;

$hy-info: #909399;
$hy-info-dark: #82848a;
$hy-info-disabled: #c8c9cc;
$hy-info-light: #f4f4f5;

/* 文字基本颜色 */
$hy-text-color: #333; //基本色
$hy-text-color-inverse: #fff; //反色
$hy-text-color-grey: #999; //辅助灰色，如加载更多的提示信息
$hy-text-color-placeholder: #808080;
$hy-text-color-disable: #c0c0c0;
$hy-text-color-light: rgba(192, 192, 192, 0.38);

$hy-tips-color: #909193FF;
$hy-color-disable-bg: #F5F5F5;
$hy-color-disable-icon:  #c8c9cc;

/* 文字尺寸 */
$hy-font-size-sm: 24rpx;
$hy-font-size-base: 28rpx;
$hy-font-size-lg: 32rpx;

/* 背景颜色 */
$hy-bg-color: #F8F8F8;
$hy-bg-color-disabled: #87BAF3;
$hy-bg-color-light: #a7cff9a5;
$hy-bg-color-grey: #f8f8f8;
$hy-bg-color-hover: #f1f1f1; //点击状态颜色
$hy-bg-color-mask: rgba(0, 0, 0, 0.5); //遮罩颜色
$hy-image-bg-color: #F3F3F3;

/* 文章场景相关 */
$hy-color-title: #2c405a; // 文章标题颜色
$hy-weight-title: 700;
$hy-font-size-title: 44rpx;
$hy-color-subtitle: #555555; // 二级标题颜色
$hy-font-size-subtitle: 38rpx;
$hy-color-paragraph: #3f536e; // 文章段落颜色
$hy-font-size-paragraph: 32rpx;
$hy-color-hint: #999; // 提示文字
$hy-font-size-hint: 26rpx;


/* 边框颜色 */
$k-border-color-light: #c8c7cc;
$hy-border-color: #c8c7cc66;

/* 图片尺寸 */
$hy-img-size-sm: 45rpx;
$hy-img-size-base: 80rpx;
$hy-img-size-lg: 120rpx;

/* 头像大小 */
$hy-avatar-size-sm: 80rpx;
$hy-avatar-size-base: 100rpx;
$hy-avatar-size-lg: 120rpx;

/* 透明度 */
$hy-opacity-disabled: 0.3; // 组件禁用态的透明度

/* 盒子的圆角 */
$hy-border-radius-sm: 6rpx;
$hy-border-radius-base: 12rpx;
$hy-border-radius-lg: 20rpx;
$hy-border-radius-circle: 50%;
/* 盒子阴影 */
$hy-box-shadow: 0 0 10rpx 4rpx rgba(0, 0, 0, 0.16);
/* 盒内盒外间距 */
$hy-border-margin-padding-sm: 10rpx;
$hy-border-margin-padding-base: 20rpx;
$hy-border-margin-padding-lg: 25rpx;
/* 底部线条 */
$hy-border-line: 1px solid #dadbde;
```