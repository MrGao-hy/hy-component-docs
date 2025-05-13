# Share 小程序分享

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ❌        | ❌  | ✔     |

::: tip 温馨提示
需要注意的是，小程序(uni)没有提供类似`getNavigationBarTitle`这样的接口，所以我们无法获取当前页面导航栏的标题，换言之，我们想要每个页面个性化的 分享标题，需要手动设置，否则默认为小程序的名称。
:::
::: info 注意
分享功能是默认关闭的，但是我们写好各项配置，您只要在main.js中引入对应的文件即可，我们没有默认引入，是因为某些用户并不需要此功能。
:::
打开小程序分享功能：
```ts [main.ts]
import {useShare} from 'hy-app';
import { createSSRApp } from "vue";
import App from "./App.vue";

export function createApp() {
    const app = createSSRApp(App);
    
    app.mixin(
        useShare({
            title: "华玥组件库",
        }),
    );
    
    return {
        app,
    };
}
```