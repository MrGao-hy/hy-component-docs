# Internationalization <Badge type="tip">^0.6.0</Badge>

::: warning Notice

The npm package published for the component library is uncompiled vue and ts, and Vite caches pre-built dependencies in `node_modules/.vite`. The internationalization implementation of the component library is based on reactive data sharing. During the dev phase, pages may use internationalization data from pre-built artifacts, while the component library uses its internal internationalization data. Therefore, when the component library is not imported in uni_modules mode, you need to add the following configuration to `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
    optimizeDeps: {
        exclude:
            process.env.UNI_PLATFORM === 'h5' && process.env.NODE_ENV === 'development'
                ? ['hy-app']
                : [],
    },
});
```

Use `[optimizeDeps.exclude](https://cn.vitejs.dev/config/dep-optimization-options#optimizedeps-exclude)` to force exclude the `hy-app` module in pre-building. No handling is required in uni_modules mode.

:::

## Using Other Languages

We achieve multilingual support through the Locale component. The `Locale.use` method can be used to switch the currently used language.

```ts
import { Locale } from 'hy-app';
// Import English language package
import enUS from 'hy-app/locale/lang/en-US';

Locale.use('en-US', enUS);
```

## Overriding Language Packages

You can modify and extend the text through the `Locale.add` method, as shown below:

```ts
import { Locale } from 'hy-app';

const messages = {
    'zh-CN': {
        calendar: {
            title: '请选择日期', // Change '选择日期' to '请选择日期'
        },
    },
};

Locale.add(messages);
```

## Supported Languages

| Language | Filename | Version |
| -------- | -------- | ------ |
| Simplified Chinese | zh-CN | v0.6.0 |
| English | en-US | v0.6.0 |