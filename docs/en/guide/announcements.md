::: tip Cause

The `scoped` styles of Vue Single File Components conflict with the mini-program component style isolation mechanism, preventing external style classes from penetrating into the component's internals.

:::

### :one: Page Solution

In uni-app, use the deep selector `:deep()` to force penetration through the double-layer style isolation:

```html
<template>
    <!-- Reference the component and pass in custom-class -->
    <hy-button custom-class="my-button">Confirm Submission</hy-button>
</template>

<style lang="scss" scoped>
    /* ✅ Correct: Use :deep() to wrap the custom-class class name */
    :deep(.my-button) {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 20rpx;
    }

    /* ⚠️ Wrong: Writing the class name directly will be isolated by scoped */
    .my-button {
        /* This syntax is invalid */
        background: red;
    }
</style>
```

### :two: Customizing Component Library Styles Within the Current Component

> When using `Hy components` inside custom components, you need to enable the `styleIsolation: 'shared'` option

**For `Vue 3.2` and below, you can enable the `styleIsolation: 'shared'` option with the following configuration:**

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

**In `Vue 3.3+`, you can enable the `styleIsolation: 'shared'` option via `defineOptions`:**

```vue
<script lang="ts" setup>
    defineOptions({
        options: {
            styleIsolation: 'shared',
        },
    });
</script>
```

## :bulb: Issue 3: If the following warning appears when running or compiling the project:

```shell
Deprecation Warning [legacy-js-api]:
The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
```

This is a new deprecation notice introduced in `Dart Sass 1.79+`; it is not a project runtime error. The legacy JavaScript API (render / renderSync) has been officially deprecated and will be completely removed in `Dart Sass 2.0`.

If your project uses Vite 5.4+ or Vite 6+, it is recommended to enable the new Sass compiler in vite.config.ts:

```ts
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                // Use the new Sass Compiler API
                api: 'modern-compiler',
            },
        },
    },
});
```

## 💡 Issue 4: Autocomplete is not available for hy-app theme variables in editors such as VS Code, Trae, and Cursor

This is because editors cannot recognize Sass variables from node_modules by default. Please install the `Some Sass` extension first. Once installed, reopen the project, and you will get features such as autocomplete and hover hints for hy-app theme variables.

## Issue 5: When using hy-button in the WeChat Mini Program, tapping the button triggers event bubbling

You can use `tap.stop` to prevent click event bubbling:

```html
<hy-button text="Button" @tap.stop="click1($event)"></hy-button>
```