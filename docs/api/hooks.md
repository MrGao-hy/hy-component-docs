# hooks全局方法

## 小程序全局配置分享

**useShare()**
- `options` \<Object\> 传的参数
  - `title` \<String\> 标题名称;
  - `path` \<String\> 小程序路径;
  - `friendImageUrl` \<String\> 分享朋友的封面图片;
  - `timelineImageUrl` \<String\> 分享朋友圈的封面图片;

::: tip 温馨提示
需要注意的是，小程序(uni)没有提供类似`getNavigationBarTitle`这样的接口，所以我们无法获取当前页面导航栏的标题，换言之，我们想要每个页面个性化的 分享标题，需要手动设置，否则默认为小程序的名称。
:::
::: warning 注意
分享功能是默认关闭的，但是我们写好各项配置，您只要在main.js中引入对应的文件即可，我们没有默认引入，是因为某些用户并不需要此功能。
:::

### 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ❌        | ❌  | ✔     | ✔      |

### 配置小程序分享功能：
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

## 全局提示消息

**useToast()**

- `options` \<Object\> 传的参数
  - `message` \<String\>` 显示文本信息
  - `type` \<String\>` 主题类型：primary，success，error，warning，info
  - `position` \<String\>` toast出现的位置：top，center，bottom
  - `icon` \<Boolean | String\>` 显示的图标
  - `overlay` \<Boolean\>` 是否防止触摸穿透
  - `loading` \<Boolean\>` 是否加载中状态
  - `loadMode` \<String\>` 加载状态
  - `duration` \<Number\>` 时间（毫秒）
  - `complete` \<Function\>` 执行完后的回调函数

```ts
toast.show("默认提示"); // 默认提示（无图标）
toast.info("信息提示"); // 信息提示
toast.success("成功提示"); // 成功提示
toast.error("错误提示"); // 错误提示
toast.warning("警告提示"); // 警告提示
toast.primary("主题提示"); // 主题提示
toast.loading(); // 加载中
toast.close(); // 关闭所以提示
```


### 基础使用

```vue

<template>
  <hy-toast/>
</template>

<script setup lang="ts">
  import {useToast} from "hy-app";
  import {onMounted} from "vue";

  const toast = useToast();

  onMounted(() => {
    toast.show("消息提示")
  });
</script>
```

## 手动滑动

**useTouch()**

touchStart,
touchMove,