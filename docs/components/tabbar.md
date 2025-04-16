# 底部导航栏组件

::: tip
业务自定义的
:::

## 使用示例

```html
<template>
  <yk-tabbar :list="list"></yk-tabbar>
</template>
```

```javascript
const list = [
    {
        key: 0,
        label: "首页",
        icon: "home",
        iconUrl: ""
    },
    {
        key: 1,
        label: "工具栏",
        icon: "grid",
        iconUrl: ""
    },
    {
        key: 2,
        label: "我的",
        icon: "account",
        iconUrl: ""
    }
]
```

## API

| 参数          | 说明          | 类型     | 默认值                                       | 可选值 |
|-------------|-------------|--------|-------------------------------------------|-----|
| current     | tab 当前值     | number | 0                                         | -   |
| textColor   | 文字颜色        | string | #FFFFFF                                   | -   |
| bgColor     | 底部导航栏背景颜色   | string | linear-gradient(155deg, #192b6e, #a6307c) | -   |
| activeColor | 点击突出按钮的背景颜色 | string | linear-gradient(0deg, #ffa576,#0951eb)    | -   |
| list        | 导航栏列表       | array  | -                                         | -   |
