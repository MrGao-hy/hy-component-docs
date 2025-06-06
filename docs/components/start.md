# 华玥组件库
::: info 温馨提示
node(推荐) >= 16.14.0
:::

## 下载scss(没有的话需要安装)
::: tip 提示
华玥组件库使用的是`scss`，所有对于没有使用`scss`插件的需要安装`scss`插件
:::
::: code-group
```shell [npm]
$ npm install sass -D
```

```shell [pnpm]
$ pnpm install sass -D
```

```shell [cnpm]
$ cnpm install sass -D
```

```shell [yarn]
$ yarn add sass -D
```
:::

## 下载dayjs(没有的话需要安装)
::: tip 提示
由于时间选择器使用到`dayjs`，所有在使用时候需要下载`dayjs`，否则会报错
:::
::: code-group
```shell [npm]
$ npm install dayjs
```

```shell [pnpm]
$ pnpm install dayjs
```

```shell [cnpm]
$ cnpm install dayjs
```

```shell [yarn]
$ yarn add dayjs
```
:::

## 安装组件
::: code-group
```shell [npm]
$ npm install hy-app
```

```shell [pnpm]
$ pnpm install hy-app
```

```shell [cnpm]
$ cnpm install hy-app
```

```shell [yarn]
$ yarn install hy-app
```
:::

## 按需引入组件

```html
<yk-input></yk-input>
```

```javascript
import { ykInput } from 'hy-app'
```

## 如何全局引入组件

###### 1. 如果你只想在h5使用，你可以这么引入
::: tip 温馨提示
这种会增加主包体积，不推荐微信小程序使用
:::

```ts [./src/main.ts]
import { createSSRApp } from "vue";
import App from "./App.vue";
import { install } from "hy-app";

export function createApp() {
    const app = createSSRApp(App);
    app.use(install);
    return {
        app
    };
}
```

###### 2. 如果你想按需加载。你可以这个全局定义
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
