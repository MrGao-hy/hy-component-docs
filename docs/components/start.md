# 华玥组件库

::: tip
针对移动端项目，uniapp+vue3，需要使用到 uview-plus 组件库
:::

::: info 温馨提示
node(推荐) >= 16.14.0
:::

## 下载scss
::: code-group
```shell [npm]
$ npm install sass
```

```shell [pnpm]
$ pnpm install sass
```

```shell [cnpm]
$ cnpm install sass
```

```shell [yarn]
$ yarn install sass
```
:::

## 下载dayjs
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
$ yarn install dayjs
```
:::

## 安装组件
::: code-group
```shell [npm]
$ npm install hfyk-app
```

```shell [pnpm]
$ pnpm install hfyk-app
```

```shell [cnpm]
$ cnpm install hfyk-app
```

```shell [yarn]
$ yarn install hfyk-app
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
