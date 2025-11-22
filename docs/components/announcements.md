## :bulb: 问题一： 在小程序中，组件自定义custom-class不生效
::: tip 原因
Vue 单文件组件的 `scoped` 样式与小程序组件样式隔离机制冲突，导致外部样式类无法穿透到组件内部。
:::

### 解决方案
在 uni-app 中使用深度选择器 `:deep()` 强制穿透双层样式隔离：
```html
<template>
  <!-- 引用组件并传入 custom-class -->
  <hy-button custom-class="my-button">确认提交</hy-button>
</template>

<style lang="scss" scoped>
/* ✅ 正确：使用 :deep() 包裹 custom-class 类名 */
:deep(.my-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20rpx;
}

/* ⚠️ 错误：直接写类名会被 scoped 隔离 */
.my-button {
  /* 此写法无效 */
  background: red;
}
</style>
```
