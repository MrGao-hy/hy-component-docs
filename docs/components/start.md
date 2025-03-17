# 我的组件库

::: tip

针对移动端项目，uniapp+vue3，需要使用到 uview-plus 组件库
:::

## 按需引入组件

```html
<yk-input></yk-input>
```

```javascript
import { ykInput } from 'hfyk-app'
```

## 如何全局引入组件

###### 如果你只想在h5使用，你可以这么引入
::: tip 温馨提示
这种会增加主包体积，不推荐微信小程序使用
:::

```javascript
import { createSSRApp } from "vue";
import App from "./App.vue";
import { install } from "hfyk-app";

export function createApp() {
    const app = createSSRApp(App);
    app.use(install);
    return {
        app
    };
}
```

###### 如果你想按需加载。你可以这个全局定义
```html
<!-- 然后在所需页面直接使用 -->
<yk-input></yk-input>
```

> 在pages.json文件引入全局组件库
```json
{
  "easycom": {
    "custom": {
      "^yk-(.*)": "hfyk-app/components/yk-$1/yk-$1.vue"
    }
  }
}
```
