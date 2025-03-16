# 虚拟列表组件

::: tip 注意
为了优化滚动页面，防止卡顿
:::

## 使用示例

```html
<template>
    <yk-virtual-scroller></yk-virtual-scroller>
</template>

<style lang="scss">
.outer {
  width: 100px;
  height: 200px;
}
</style>
```

## API

| 参数        | 说明                    | 类型               | 默认值  | 可选值 |
| ----------- |-----------------------|------------------|------|-----|
| items        | 数据列表                  | array            | -    | -   |
| line    | 几列                    | number           | 1    | -   |
| keyField   | 每一项的唯一标识key,插槽为item必填 | string \| number | null | -   |
| load | 加载状态                  | string           | 暂无数据 | -   |
| itemHeight      | 每一项的高度                | string \| number | -    | -   |
| containerHeight      | 容器高度                  | number | -    | -   |
