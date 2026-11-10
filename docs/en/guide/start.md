# Hy Component Library @hy-app/ui Installation & Usage Tutorial

::: info Friendly Reminder

- Reminder: node (recommended) >= 16.14.0, sass (recommended)
- 1.78.0\<sass<=1.101.0

:::

## :zap: Quick Setup with Scaffolding <Badge type="danger" text="Recommended" />

> You can quickly initialize a project template based on **Vue3 + TypeScript + uni-app + Vite** with the Hy Component Library already integrated via the scaffold, with no need to configure everything from scratch.

```shell
$ pnpm create uni@latest -t hy-starter <your-project-name>
```

## :rocket: Download scss (Install It If You Don't Have It)

::: tip Friendly Reminder

The Hy Component Library uses `scss`, so if you are not using the `scss` plugin, you need to install it. The version must be higher than `1.78.0`.

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

## :rainbow: Download dayjs (Install It If You Don't Have It)

::: tip Friendly Reminder

Note: Since the time picker relies on `dayjs`, you need to install `dayjs` before using it, otherwise errors will occur.

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

2026-07-13: `hy-app` stopped receiving iterative updates as of `v0.7.4`. No new features will be added or issues fixed. Please download and migrate to the brand-new version `@hy-app/ui`.

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

```json [pages.json]
{
    "easycom": {
        "custom": {
            "^hy-(.*)": "@hy-app/ui/components/hy-$1/hy-$1.vue" // [!code focus]
        }
    }
}
```

## Enable Volar/VS Code to Recognize Components

```json [tsconfig.json]
{
    "compilerOptions": {
        "types": ["@hy-app/ui/global"] // [!code focus]
    }
}
```

## :chicken: Globally Import Component Library Styles (Modify uni.scss)

> The global styles, theme variables, and base component styles of the Hy Component Library must be imported all together; otherwise, components will lose their styling effects.

```scss [uni.scss]
@use '@hy-app/ui/index.scss' as *;
```

## :deciduous_tree: Use Components on Pages

```html [vue]
<template>
    <!-- Then use it directly on any page you need -->
    <hy-input></hy-input>
</template>
```