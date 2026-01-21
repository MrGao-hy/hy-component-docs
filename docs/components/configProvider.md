# ConfigProvider 全局配置

::: tip 温馨提示
本项目参考了 Wot-UI 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。<br>
感谢 Wot-UI 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考Wot-UI的 [watermark组件](https://wot-ui.cn/component/config-provider.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 深色模式
> 将 ConfigProvider 组件的 theme 属性设置为 dark，可以开启深色模式。 深色模式会全局生效，使页面上的所有 Wot 组件变为深色风格。
::: tip 提示
值得注意的是，开启华玥组件的深色模式只会影响华玥组件的 UI，并不会影响全局的文字颜色或背景颜色，你可以参考以下 CSS 来设置一些全局样式：
```vue
.hy-theme--dark body {
  color: #f5f5f5;
  background-color: black;
}
```
:::
```vue
<hy-config-provider theme="dark">...</hy-config-provider>
```

## 定制主题
> 华玥组件通过丰富的 CSS 变量 来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果。

### 通过 ConfigProvider 覆盖
```vue
<hy-config-provider themeColor="#2979ff" themeLightColor="#ecf5ff">...</hy-config-provider>
```
### 通过 CSS 覆盖
这些变量的默认值被定义在 page 节点上，如果要转 H5，默认值被定义在 :root 节点上
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

## hy-config-provider 高度配置说明
hy-config-provider 组件默认会设置固定高度，以适配不同设备的安全区域，但该设置可能导致页面滚动事件 onPageScroll 无法触发。以下是详细的配置方式：
### 1. 组件默认高度（系统预设）
组件内置的高度计算逻辑如下，会自动适配顶部状态栏和底部安全区域：
```scss
.hy-config-provider {
  // 基础高度计算：视口高度 - 顶部状态栏高度
  height: calc(100vh - var(--window-top));
  // 兼容 iOS 旧版本安全区域（constant 已逐步废弃）
  height: calc(100vh - var(--window-top) - constant(safe-area-inset-bottom));
  // 兼容 iOS 新版本安全区域
  height: calc(100vh - var(--window-top) - env(safe-area-inset-bottom));
}
```
### 2. 自定义高度
若需要调整组件高度，直接通过组件的 height 属性覆盖默认值即可，示例：
```vue
<!-- 自定义固定高度 -->
<hy-config-provider height="800px">...</hy-config-provider>

<!-- 自定义百分比高度 -->
<hy-config-provider height="90%">...</hy-config-provider>
```
### 3. 解决 onPageScroll 事件不触发问题
由于组件默认的固定高度会限制页面滚动区域，导致 onPageScroll 滚动事件无法触发。如需恢复滚动事件，只需将高度设置为 auto，让组件高度自适应内容：
```vue
<hy-config-provider height="auto">...</hy-config-provider>
```

<demo-model url="pages-design/configProvider/configProvider"></demo-model>