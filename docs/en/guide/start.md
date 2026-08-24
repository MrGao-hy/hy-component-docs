# Huayue Component Library hy-app Usage Guide

::: info Warm Tips

- Recommended node (recommended) >= 16.14.0, sass (recommended)
- 1.53.0 <= sass <= 1.101.0

:::

## :rocket: Download scss (install if not already installed)

::: tip Warm Tips

The Huayue Component Library uses `scss`, so for those who haven't installed the `scss` plugin, it is necessary to install it.

:::

::: code-group

```shell [npm]
$ npm install -D sass@1.78.0
```

```shell [pnpm]
$ pnpm add -D sass@1.78.0
```

```shell [cnpm]
$ cnpm install -D sass@1.78.0
```

```shell [yarn]
$ yarn add -D sass@1.78.0
```

:::

## :rainbow: Download dayjs (install if not already installed)

::: tip Warm Tips

Since the time selector uses `dayjs`, it is necessary to download `dayjs` when using it. Otherwise, an error will occur.

:::

::: code-group

```shell [npm]
$ npm install dayjs
```

```shell [pnpm]
$ pnpm add dayjs
```

```shell [cnpm]
$ cnpm install dayjs
```

```shell [yarn]
$ yarn add dayjs
```

:::

## :cactus: Install hy-app

::: warning Important Notice

As of 2026-07-13, `hy-app` has stopped further iteration updates since version `v0.7.4`. It will no longer add new features or fix issues. Please download and migrate to the new version `@hy-app/ui`.

:::

::: code-group

```shell [npm]
$ npm install @hy-app/ui
```

```shell [pnpm]
$ pnpm add @hy-app/ui
```

```shell [cnpm]
$ cnpm install @hy-app/ui
```

```shell [yarn]
$ yarn install @hy-app/ui
```

:::

## Configure global component auto-import

Modify the `./src/pages.json` file in the project root directory and add the following easycom configuration:

```json [./src/pages.json]
{
    "easycom": {
        "custom": {
            "^hy-(.*)": "@hy-app/ui/components/hy-$1/hy-$1.vue" // [!code focus]
        }
    }
}
```

## Make Volar/VS Code recognize components

> VS Code and trae can provide property hints, type checking, and automatic completion for components.

```json tsconfig.json
{
    "compilerOptions": {
        "types": ["@hy-app/ui/global"]
    }
}
```

## :chicken: Globally import component library styles (modify uni.scss)

> The global styles, theme variables, and basic component styles of the Huayue Component Library need to be imported uniformly; otherwise, the components may lose their style effects.

```scss [./uni.scss]
@use '@hy-app/ui/index.scss' as *;
```

## :deciduous_tree: Use components on pages

```html
<template>
    <!-- Use the components directly on the required page -->
    <hy-input></hy-input>
</template>
```