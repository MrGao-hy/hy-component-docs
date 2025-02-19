# 我的组件库

::: tip

针对移动端项目，uniapp+vue3，需要使用到 uview-plus 组件库
:::

## 按需引入组件

```html
<yk-login></yk-login>
```

```javascript
import ykLogin from 'hfyk-app/components/yk-login/yk-login.vue'
```

## 如何全局引入组件

```html
<!-- 然后在所需页面直接使用 -->
<yk-login></yk-login>
```

```json
// 在pages.json文件引入全局组件库
{
  "easycom": {
    "custom": {
      "^yk-(.*)": "hfyk-app/components/yk-$1/yk-$1.vue"
    }
  }
}
```
