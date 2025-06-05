# 底部导航栏组件

::: tip
自定义
:::

## 使用示例

```html
<template>
  <hy-tabBar :list="list"></hy-tabBar>
</template>
```

```javascript
import { IconConfig } from "hy-app";

const list = [
    { name: "首页", icon: IconConfig.HOME },
    { name: "分类", icon: IconConfig.HOME },
    { name: "购物车", icon: IconConfig.HOME },
    { name: "我的", icon: IconConfig.HOME },
];
```

## API

| 参数          | 说明          | 类型     | 默认值     | 可选值 |
|-------------|-------------|--------|---------|-----|
| modelValue  | tab 当前值     | number | 0       | -   |
| list        | 导航栏列表       | array  | -       | -   |
| textColor   | 文字颜色        | string | #FFFFFF | -   |
| bgColor     | 底部导航栏背景颜色   | string | -       | -   |
| activeColor | 点击突出按钮的背景颜色 | string | -       | -   |

<demo-model url="pages/components/tabBar/tabBar"></demo-model>
