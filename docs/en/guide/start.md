# Hy Component Library hy-app Usage Tutorial

::: info Friendly Reminder

- Friendly reminder: node (recommended) >= 16.14.0, sass (recommended)
- 1.53.0<=sass<=1.101.0

:::

## :rocket: Download scss (install if not already installed)

::: tip Friendly Reminder

The Hy Component Library uses `scss`, so anyone who doesn't have the `scss` plugin installed needs to install it. The version must be higher than `1.78.0`

:::

::: code-group

```shell [npm]
$ npm install -D sass@1.98.0
```

```shell [pnpm]
$ pnpm add -D sass@1.98.0
```

```shell [cnpm]
$ cnpm install -D sass@1.98.0
```

```shell [yarn]
$ yarn add -D sass@1.98.0
```

:::

## :rainbow: Download dayjs (install if not already installed)

::: tip Friendly Reminder

Note: Since the time picker uses `dayjs`, you need to install `dayjs` when using it, otherwise errors will occur

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

## :cactus: Install @hy-app/ui

::: warning Important Notice

2026-07-13 `hy-app` has ceased further iterative updates as of `v0.7.4` and will no longer add features or fix issues. Please download and migrate to the brand-new version `@hy-app/ui`.

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

## Configure Global Component Auto-Import

Modify the ./src/pages.json file in the project root directory and add the following easycom configuration:

```json [./src/pages.json]
{
    "easycom": {
        "custom": {
            "^hy-(.*)": "@hy-app/ui/components/hy-$1/hy-$1.vue" // [!code focus]
        }
    }
}
```

## Make Volar/VS Code Recognize Components

> VS Code and Trae can provide component property hints, type checking, and auto-completion

```json tsconfig.json
{
    "compilerOptions": {
        "types": ["@hy-app/ui/global"]
    }
}
```

## :chicken: Globally Import Component Library Styles (Modify uni.scss)

> The Hy Component Library's global styles, theme variables, and component base styles must be imported together, otherwise components will lose their styling effects.

```scss [./uni.scss]
@use '@hy-app/ui/index.scss' as *;
```

## :deciduous_tree: Using Components on Pages

```html
<template>
    <!-- Then use it directly on any page you need -->
    <hy-input></hy-input>
</template>
```