::: tip Reason

The `scoped` style in Vue single-file components conflicts with the style isolation mechanism of mini-program components, causing external style classes to not penetrate into the component.

:::

### :one: Page Solution

In uni-app, use the deep selector `:deep()` to force penetration through double-layer style isolation:

```html
<template>
    <!-- Refer to the component and pass custom-class -->
    <hy-button custom-class="my-button">Confirm Submission</hy-button>
</template>

<style lang="scss" scoped>
    /* ✅ Correct: Wrap the custom-class with :deep() */
    :deep(.my-button) {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 20rpx;
    }

    /* ⚠️ Incorrect: Writing the class name directly will be isolated by scoped */
    .my-button {
        /* This method is ineffective */
        background: red;
    }
</style>
```

### :two: Custom Component Library Styles Inside the Current Component

> When using `Huayue Components` within a custom component, the `styleIsolation: 'shared'` option must be enabled.

**For Vue 3.2 and earlier versions, you can enable the `styleIsolation: 'shared'` option with the following configuration:**

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

**For Vue 3.3+ and above, you can enable the `styleIsolation: 'shared'` option with `defineOptions`:**

```vue
<script lang="ts" setup>
    defineOptions({
        options: {
            styleIsolation: 'shared',
        },
    });
</script>
```

## :bulb: Problem Three: If you encounter the following warning during runtime or compilation:

```shell
Deprecation Warning [legacy-js-api]:
The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
```

This is a deprecation warning introduced from Dart Sass 1.79+ and does not indicate a runtime error in the project. The legacy JavaScript API (render / renderSync) has been deprecated by the official and will be completely removed in Dart Sass 2.0.

If your project uses Vite 5.4+ or Vite 6+, it is recommended to enable the new Sass compiler in `vite.config.ts`:

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

## 💡 Problem Four: When using hy-app theme variables in VS Code, Trae, Cursor, etc. editors, auto-completion is not available

This is because the editor cannot default identify Sass variables in node_modules. Please install the `Some Sass` plugin first. After installation, please reopen the project, and you will be able to use the hy-app theme variables for auto-completion and hover hints.