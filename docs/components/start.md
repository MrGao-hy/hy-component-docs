# 华玥组件库
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

## :cactus: 安装组件
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


## :deciduous_tree: 导入使用组件
```html
<!-- 然后在所需页面直接使用 -->
<hy-input></hy-input>
```

> 在pages.json文件引入全局组件库
```json [./src/pages.json]
{
  "easycom": {
    "custom": {
      "^hy-(.*)": "hy-app/components/hy-$1/hy-$1.vue"
    }
  }
}
```

## :chicken: 导入scss文件
> 在uni.scss最顶部引入这些文件
```scss [./uni.scss]
@use "hy-app/index.scss" as *;
```
