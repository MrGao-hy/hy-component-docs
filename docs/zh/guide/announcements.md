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
            styleIsolation: 'shared',
        },
    };
</script>
<script lang="ts" setup></script>
```

**`Vue 3.3+`可以通过`defineOptions`开启`styleIsolation: 'shared'`选项：**

```vue
<script lang="ts" setup>
    defineOptions({
        options: {
            styleIsolation: 'shared',
        },
    });
</script>
```

## :bulb: 问题三：如果在运行或编译项目时出现如下警告：

```shell
Deprecation Warning [legacy-js-api]:
The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
```

这是 `Dart Sass 1.79+` 开始新增的弃用提示，并不是项目运行错误。官方已经废弃了旧版 JavaScript API（render / renderSync），未来将在 `Dart Sass 2.0` 中彻底移除。

如果你的项目使用 Vite 5.4+ 或 Vite 6+，建议在 vite.config.ts 中启用 Sass 新版编译器：

```ts
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                // 使用 Sass 新版 Compiler API
                api: 'modern-compiler',
            },
        },
    },
});
```

## 💡 问题四：在 VS Code、Trae、Cursor 等编辑器中，使用 hy-app 主题变量时无法获得自动补全

这是因为编辑器默认无法识别node_modules的 Sass 变量。请先安装 `Some Sass` 插件，安装完成后重新打开项目，即可获得 hy-app 主题变量的自动补全、悬停提示等功能。

## 问题五：在微信小程序使用hy-button时候，点击按钮会触发冒泡事件
你可以使用`tap.stop`进行点击阻止冒泡事件
```html
<hy-button text="按钮" @tap.stop="click1($event)"></hy-button>
```
