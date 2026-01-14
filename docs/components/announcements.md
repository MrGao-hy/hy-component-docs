## :bulb: 问题一： 在小程序中，组件自定义custom-class不生效
::: tip 原因
Vue 单文件组件的 `scoped` 样式与小程序组件样式隔离机制冲突，导致外部样式类无法穿透到组件内部。
:::

### :one:页面解决方案
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

### :two:当前组件里自定义组件库样式
> 在自定义组件中使用`华玥组件`时，需开启`styleIsolation: 'shared'`选项

**`Vue 3.2`及以下版本可以使用如下配置开启`styleIsolation: 'shared'`选项：**
```vue
<script lang="ts">
export default {
  options: {
    styleIsolation: 'shared'
  }
}
</script>
<script lang="ts" setup>
</script>
```

**`Vue 3.3+`可以通过`defineOptions`开启`styleIsolation: 'shared'`选项：**
```vue
<script lang="ts" setup>
defineOptions({
  options: {
    styleIsolation: 'shared'
  }
})
</script>
```

## :bulb: 问题三：Sass抛出大量错误和警告？
`Dart Sass 3.0.0`废弃了一批API，而组件库目前还未完全兼容，因此请确保你的`sass`版本为`1.78.0`及之前的版本。可以通过以下命令安装指定版本：
:::code-group
```shell [npm]
npm install sass@1.78.0 -D
```

```shell [pnpm]
pnpm install sass@1.78.0 -D
```

```shell [yarn]
yarn install sass@1.78.0 -D
```
:::
