# 金额组件（业务组件）

::: tip
业务组件,突出金额小数点前大，小数点后小
:::

## 使用示例

```html
<yk-price :text="100"></yk-price>
```

## API

| 参数     | 说明               | 类型             | 默认值 | 可选值 |
| -------- | ------------------ | ---------------- | ------ | ------ |
| text     | 金额值             | string           | 0.00   | -      |
| symbol   | 金额符号           | string           | ￥     | -      |
| num      | 保留小数点后几位数 | string \| number | 2      | -      |
| fontSize | 自定义样式         | object           | 22     | -      |
| weight   | 字体粗细           | string \| number | 500    | -      |
