# 登录组件

## 使用示例

```html
<yk-login :loginType="1"></yk-login>
```

## 自定义校验规则

```html
<yk-login :customUserValidator="customUserValidator"></yk-login>
```

```js
import { ref } from "vue"
const customUserValidator = ref({
  // 自定义验证函数，见上说明
  validator: (rule, value, callback) => {
    // 上面有说，返回true表示校验通过，返回false表示不通过
    return /^[1][0-9]{10}$/.test(value);
  },
  message: "手机号码不正确",
  trigger: ["change", "blur"]
})
```

## 数量校验规则

```html
<yk-login :userNumValidator="userNumValidator"></yk-login>
```

```js
import { ref } from "vue"
const userNumValidator = ref({
  min: 6,
  max: 20,
  message: "长度在6-20个字符之间",
  trigger: ["blur", "change"]
})
```

## API

| 参数                   | 说明                                  | 类型            | 默认值               | 可选值                           |
|----------------------|-------------------------------------|---------------|-------------------|-------------------------------|
| logo                 | 登录 logo，传图片地址                       | string        | -                 | -                             |
| loginType            | 登录类型                                | string\number | 0                 | 1-用户密码登录、2-手机验证码登录、其他数值-两者都可以 |
| themeColor           | 主题颜色                                | string        | #20D56E           | -                             |
| prefix               | 浏览器缓存密码和账号前缀                        | string        | -                 | -                             |
| isShowPwd            | 是否需要显示密码按钮                          | boolean       | false             | true-需要显示密码按钮、false-不需要显示密码按钮 |
| menu                 | 底部小菜单栏                              | array         | ["立即注册", "忘记密码？"] | -                             |
| userPlaceholder      | 用户名占位内容                             | string        | -                 | -                             |
| pwdPlaceholder       | 密码占位内容                              | string        | -                 | -                             |
| customUserValidator  | 自定义用户名校验规则,参考 uview-plus 表单校验（密码登录） | object        | -                 | -                             |
| customPwdValidator   | 自定义密码校验规则,参考 uview-plus 表单校验（密码登录）  | object        | -                 | -                             |
| userNumValidator     | 用户名输入数量校验（密码登录）                     | object        | -                 | -                             |
| pwdNumValidator      | 密码输入数量校验（密码登录）                      | object        | -                 | -                             |
| customPhoneValidator | 自定义手机号校验规则（手机号登录）                   | object        | -                 | -                             |

<demo-model url="pages/components/login/login"></demo-model>
