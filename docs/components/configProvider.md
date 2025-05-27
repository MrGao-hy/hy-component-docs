# ConfigProvider 全局配置

## 深色模式
> 将 ConfigProvider 组件的 theme 属性设置为 dark，可以开启深色模式。 深色模式会全局生效，使页面上的所有 Wot 组件变为深色风格。
::: tip 提示
值得注意的是，开启华玥组件的深色模式只会影响华玥组件的 UI，并不会影响全局的文字颜色或背景颜色，你可以参考以下 CSS 来设置一些全局样式：
```vue
.hy-theme--dark body {
  color: #f5f5f5;
  background-color: black;
}
```
:::
```vue
<hy-config-provider theme="dark">...</hy-config-provider>
```

## 定制主题
> 华玥组件通过丰富的 CSS 变量 来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果。

### 通过 ConfigProvider 覆盖
```vue
<hy-config-provider themeColor="#2979ff" themeLightColor="#ecf5ff">...</hy-config-provider>
```
### 通过 CSS 覆盖
这些变量的默认值被定义在 page 节点上，如果要转 H5，默认值被定义在 :root 节点上
```scss
:root,
page {
  --hy-success: red;
  --hy-warning: yellow;
}
```

<demo-model url="pages/components/configProvider/configProvider"></demo-model>