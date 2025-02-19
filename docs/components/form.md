# 表单组件

::: tip
上传图片目前还是有问题，待优化
:::

## 使用示例

```html
<template>
  <yk-form :columns="columns" :formData="formData"></yk-form>
</template>
```

```javascript
import { TypeEnum } from "hfyk-app";

const sexList = [
	{
		name: "男生",
		value: "1",
	},
	{
		name: "女生",
		value: "0",
	}
];
const constellationList = [
	[
		"水瓶座",
		"双鱼座",
		"白羊座",
		"金牛座",
		"双子座",
		"巨蟹座",
		"狮子座",
		"处女座",
		"天秤座",
		"天蝎座",
		"射手座",
		"摩羯座",
	],
];
const columns = [
	{ field: "name", label: "用户名", type: TypeEnum.INPUT },
	{
		field: "avatar",
		label: "网络头像",
		type: TypeEnum.UPLOAD
	},
	{ field: "address", label: "省/市/县", type: TypeEnum.ADDRESS },
	{ field: "sex", label: "性别", type: TypeEnum.RADIO, actions: sexList },
  { field: "birthDate", label: "出生日期", type: TypeEnum.DATE, mode: "date" },
	{
		field: "constellation",
		label: "星座",
		type: TypeEnum.SELECT,
		column: constellationList,
	},
	{ field: "isShow", label: "是否显示", type: TypeEnum.SWITCH },
  { field: "detail", label: "详情", type: TypeEnum.DETAIL },
  { field: "textarea", label: "备注", type: TypeEnum.TEXTAREA }
];

const formData = {
  name: "",
  avatar: "",
  address: "",
  sex: 0,
  birthDate: "",
  constellation: "",
  isShow: false,
  detail: "",
  textarea: ""
}
```

## API

| 参数          | 说明                 | 类型    | 默认值 | 可选值                                           |
| ------------- | -------------------- | ------- | ------ | ------------------------------------------------ |
| labelPosition | 表单域提示文字的位置 | string  | left   | left - 左侧、top - 上方                          |
| labelWidth    | label 宽度           | string  | auto   | 数字 - 固定值、auto - 自适应                     |
| right         | 输入值是否右对齐     | boolean | false  | true                                             |
| labelAlign    | lable 字体的对齐方式 | string  | left   | left - 左对齐、center - 中间对齐、right - 右对齐 |
| columns       | 表单配置             | array   | -      | -                                                |
| formData      | 表单值               | object  | -      | -                                                |
| formRules     | 表单效验             | object  | -      | -                                                |

### columns

| 参数        | 说明                                                   | 类型    | 默认值   | 可选值                                                          |
| ----------- | ------------------------------------------------------ | ------- | -------- | --------------------------------------------------------------- |
| label       | 文字描述                                               | string  | -        | -                                                               |
| field       | 字段名                                                 | string  | -        | -                                                               |
| required    | 是否需要校验，只显示红星，需要和 formRules 搭配        | boolean | false    | true                                                            |
| right       | 内容右固定                                             | boolean | false    | true                                                            |
| type        | 表单类型                                               | enum    | -        | 见下示例                                                        |
| maxCount    | 文件上传最大数（type 为 upload 时候）                  | number  | -        | -                                                               |
| disabled    | 是否禁用                                               | boolean | false    | true                                                            |
| placeholder | 输入框为空时的占位符                                   | string  | -        | -                                                               |
| clearable   | 显示清除输入框 icon                                    | boolean | false    | true                                                            |
| readonly    | 是否只读                                               | boolean | false    | true                                                            |
| column      | type = select 时候必填(参考 uview-plus 得 Picker 组件) | array   | -        | -                                                               |
| actions     | type = radio 时候必填(参考 uview-plus 得 radio 组件)   | string  | -        | -                                                               |
| shape       | 输入框形状(type 等于 input)                            | enum    | square   | CIRCLE - 半圆，<br>SQUARE - 方块                                |
| border      | 边框类型(type 等于 input)                              | enum    | surround | SURROUND - 四周边框，<br> BOTTOM - 底部边框，<br> NONE - 无边框 |
| mode        | 日期展示的格式（type 等于 date 选填）                  | enum    | -        | 见下示例                                                        |

### type 类型

- `UPLOAD` 上传文件
- `INPUT` 普通输入框
- `NUMBER` 数字输入框
- `PASSWORD` 密码输入框
- `ID_CARD` 身份证 id 输入框
- `RADIO` 单选
- `DATE` 时间选择器
- `SELECT` 选择器
- `ADDRESS` 地址选择器
- `SWITCH` 开关
- `DETAIL` 详情
- `TEXTAREA` 文本域

### mode 类型

- `DATETIME` yyyy-MM-dd HH:mm:SS
- `DATE` yyyy-MM-dd
- `TIME` hh:MM:ss
- `YEAR_MONTH` yyyy-MM
