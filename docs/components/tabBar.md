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
    { name: "购物车", icon: IconConfig.HOME, badge: 10 },
    { name: "我的", icon: IconConfig.HOME },
];
```

## API

| 参数          | 说明                              | 类型           | 默认值 |
|-------------|---------------------------------|--------------|-----|
| modelValue  | tab 当前值                         | number       | 0   |
| list        | 导航栏列表                           | array        | -   |
| color       | 文字和图标颜色                         | string       | -   |
| baseBgColor | 底部背景颜色（颜色设置必须要和页面背景颜色一样，才有重合感觉） | string       | -   |
| barBgColor  | 底部导航栏背景颜色                       | string       | -   |
| activeColor | 点击突出按钮的背景颜色                     | string       | -   |
| badge       | 徽标属性集合                          | HyBadgeProps | -   |

## list
| 参数    | 说明         | 类型     | 默认值 |
|-------|------------|--------|-----|
| name  | tabBar名称   | string | -   |
| icon  | icon图标或者图片 | string | -   |
| badge | 徽标值        | number | -   |

<demo-model url="pages/components/tabBar/tabBar"></demo-model>
