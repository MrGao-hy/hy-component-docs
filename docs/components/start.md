# 华玥组件库 hy-app 使用教程
::: info 温馨提示
node(推荐) >= 16.14.0
sass(推荐) 1.53.0<=sass<=1.78.0
:::

## :rocket: 下载scss(没有的话需要安装)
::: tip 提示
华玥组件库使用的是`scss`，所有对于没有使用`scss`插件的需要安装`scss`插件
:::
::: code-group
```shell [npm]
$ npm install -D sass@1.53.0
```

```shell [pnpm]
$ pnpm add -D sass@1.53.0
```

```shell [cnpm]
$ cnpm install -D sass@1.53.0
```

```shell [yarn]
$ yarn add -D sass@1.53.0
```
:::

## :rainbow:下载dayjs(没有的话需要安装)
::: tip 提示
由于时间选择器使用到`dayjs`，所有在使用时候需要下载`dayjs`，否则会报错
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

## :cactus: 安装hy-app
::: code-group
```shell [npm]
$ npm install hy-app
```

```shell [pnpm]
$ pnpm add hy-app
```

```shell [cnpm]
$ cnpm install hy-app
```

```shell [yarn]
$ yarn install hy-app
```
:::

## 配置全局组件自动引入
修改项目根目录下的 ./src/pages.json 文件，添加如下 easycom 配置：
```json [./src/pages.json]
{
  "easycom": {
    "custom": {
      "^hy-(.*)": "hy-app/components/hy-$1/hy-$1.vue" // [!code focus]
    }
  }
}
```

## :chicken: 全局导入组件库样式（修改 uni.scss）
> 华玥组件库的全局样式、主题变量、组件基础样式需统一导入，否则组件会丢失样式效果。
```scss [./uni.scss]
@use "hy-app/index.scss" as *;
```

## :deciduous_tree: 页面上使用组件
```html
<template>
    <!-- 然后在所需页面直接使用 -->
    <hy-input></hy-input>
</template>
```
