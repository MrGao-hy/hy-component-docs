# FormGroup 表单组件
> 此组件一般用于快速搭建表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [form组件](https://uiadmin.net/uview-plus/components/form.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例
::: code-group

```html [vue]
<!-- 全局使用 -->
<hy-form-group :columns="columns" :formData="formData"></hy-form-group>
<!-- 单个组件引入 -->
<HyFormGroup :columns="columns" :formData="formData"></HyFormGroup>
```

```ts [index.ts]
import { reactive, ref } from "vue";
import { HyWarn, FormTypeEnum, HyForm, HyInput, HyButton } from "hy-app";
import type { FormColumnsType } from "hy-app";

const formData: AnyObject = reactive({
    custom: "自定义值",
    isShow: true,
    sex: "1"
});
const formRef = ref<InstanceType<typeof HyForm>>(null);

const columns: FormColumnsType[] = reactive([
    {
        field: "name",
        label: "名字",
        type: FormTypeEnum.TEXT,
        rules: {
            required: true,
            message: "没有填内容",
            trigger: ["blur"]
        }
    },
    {
        field: "sex",
        label: "性别",
        type: FormTypeEnum.RADIO,
        actions: [
            { label: "女", value: "0" },
            { label: "男", value: "1" }
        ],
        rules: {
            required: true,
            message: "没有填内容",
            trigger: ["blur", "change"]
        }
    },
    {
        field: "phone",
        label: "手机号",
        type: FormTypeEnum.TEXT,
        rules: [
            {
                required: true,
                message: "请输入您的手机号",
                trigger: ["blur", "change"]
            },
            {
                type: "phone",
                trigger: ["blur", "change"]
            }
        ]
    },
    {
        field: "password",
        label: "密码",
        type: FormTypeEnum.PASSWORD,
        rules: {
            type: "password",
            trigger: ["blur", "change"]
        }
    },
    {
        field: "isShow",
        label: "是否禁用",
        type: FormTypeEnum.SWITCH
    },
    {
        field: "time",
        label: "日期",
        type: FormTypeEnum.DATE,
        border: "bottom",
        rules: {
            required: true,
            message: "请输入您的日期",
            trigger: ["blur", "change"]
        }
    },
    {
        field: "address",
        label: "地址",
        type: FormTypeEnum.ADDRESS,
        rules: {
            required: true,
            message: "请输入您的地址",
            trigger: ["blur", "change"]
        }
    },
    {
        field: "select",
        label: "选择学历",
        type: FormTypeEnum.SELECT,
        select: [
            [
                { text: "小学", id: "1" },
                { text: "初中", id: "2" },
                { text: "高中", id: "3" },
                { text: "大学", id: "4" }
            ]
        ],
        rules: {
            required: true,
            message: "请输入您的学历",
            trigger: ["blur", "change"]
        }
    },
    {
        field: "age",
        label: "年龄",
        type: FormTypeEnum.NUMBER,
        rules: [
            {
                required: true,
                message: "请输入您的年龄",
                trigger: ["blur", "change"]
            },
            {
                required: true,
                message: "不能小于最小值",
                min: 10,
                trigger: ["blur", "change"]
            },
            {
                message: "不能大于最大值",
                max: 20,
                trigger: ["change"]
            }
        ]
    },
    {
        field: "remark",
        label: "备注",
        type: FormTypeEnum.TEXTAREA,
        rules: {
            required: true,
            message: "请输入您的地址",
            trigger: ["blur", "change"]
        }
    }
]);

const handleSubmit = () => {
    formRef.value.submit().then((res) => {
        console.log(res);
    });
};
```
:::

## 自定义插槽
::: danger 微信小程序差异
微信小程序不能动态设置插槽，所以不支持自定义插槽，后续有其他方法会更新文档
:::

::: code-group
```vue
<template>
    <hy-form
            ref="formRef"
            :columns="columns"
            :form-data="formData"
            labelWidth="90"
    >
        <template #custom="{ record, errorStyle }">
            <hy-input
                v-model="formData[record.field]"
                :custom-style="errorStyle"
            ></hy-input>
        </template>
    </hy-form>
</template>
```

```ts [index.ts]
import { reactive } from "vue";
import { FormTypeEnum, HyForm, HyInput } from "hy-app";
import type { FormColumnsType } from "hy-app";

const columns: FormColumnsType[] = reactive([
    {
        field: "custom",
        label: "自定义内容",
        type: FormTypeEnum.CUSTOM,
        rules: {
            required: true,
            message: "请输入您的自定义内容",
            trigger: ["blur", "change"]
        }
    }
]);
```
:::

## API

| 参数            | 说明                               | 类型                        | 默认值   |
|---------------|----------------------------------|---------------------------|-------|
| columns       | 表单字段配置                           | `array`                   | -     |
| formData      | 表单值                              | `object`                  | -     |
| labelPosition | 表单label的位置                       | `left`\|`top`             | left  |
| labelWidth    | label 宽度                         | `string`\|`number`        | auto  |
| right         | 输入值是否右对齐                         | `boolean`                 | false |
| labelAlign    | label 字体的对齐方式                    | `left`\|`center`\|`right` | left  |
| border        | 显示表单单行底部下划线                      | `boolean`                 | false |
| disabled      | 禁用表单[^1]                         | `boolean`                 | false |
| input         | [输入框属性api](./input#api)集合        | `HyInputProps`            | -     |
| textarea      | [文本域属性api](./textarea#api)集合     | `HyTextareaProps`         | -     |
| picker        | [选择器属性api](./picker#api)集合       | `HyPickerProps`           | -     |
| switchItem    | [开关属性api](./switch#api)集合        | `HySwitchProps`           | -     |
| radio         | [单选属性api](./radio#api)集合         | `HyRadioProps`            | -     |
| checkButton   | [选择按钮属性api](./checkButton#api)集合 | `HyCheckButtonProps`      | -     |

### columns

| 参数          | 说明                                   | 类型                                          | 默认值 |
|-------------|--------------------------------------|---------------------------------------------|-----|
| label       | 文字描述                                 | `string`                                    | -   |
| field       | 字段名                                  | `string`                                    | -   |
| right       | 内容右固定                                | `boolean`                                   | -   |
| type        | [表单类型](./formGroup#type)(见下面枚举出来字段)。 | `enum`                                      | -   |
| maxCount    | 文件上传最大数（type 为 upload 时候）            | `number`                                    | -   |
| select      | 选择器配置数据集合[^2]                        | `string[][]`\|`{text:string;id:string}[][]` | -   |
| actions     | 单选框配置数据集合[^3]                        | `string`                                    | -   |
| mode        | 日期展示的格式（type 等于 date 选填）             | `enum`                                      | -   |
| rules       | 校验规则                                 | `object`\|`array`                           | -   |
| input       | [输入框属性api](./input#api)集合            | `HyInputProps`                              | -   |
| textarea    | [文本域属性api](./textarea#api)集合         | `HyTextareaProps`                           | -   |
| picker      | [选择器属性api](./picker#api)集合           | `HyPickerProps`                             | -   |
| switchItem  | [开关属性api](./switch#api)集合            | `HySwitchProps`                             | -   |
| radio       | [单选属性api](./radio#api)集合             | `HyRadioProps`                              | -   |
| checkButton | [选择按钮属性api](./checkButton#api)集合     | `HyCheckButtonProps`                        | -   |

### actions

| 参数       | 说明     | 类型                 | 默认值 |
|----------|--------|--------------------|-----|
| label    | 显示文本内容 | `string`           | -   |
| value    | 获取的值   | `string`\|`number` | -   |
| checked  | 是否选中   | `boolean`          | -   |
| disabled | 是否禁用   | `boolean`          | -   |


### rules

| 参数        | 说明                | 类型                           | 默认值 |
|-----------|-------------------|------------------------------|-----|
| required  | 是否必填              | `boolean`                    | -   |
| message   | 校验不通过时的提示信息       | `string`                     | -   |
| trigger   | 表单事件校验            | `(blur\|change)[]`           | -   |
| min       | 最小输入内容个数          | `number`                     | -   |
| max       | 最大输入内容个数          | `number`                     | -   |
| type      | 手机号校验、邮箱校验、复杂密码校验 | `phone`\|`email`\|`password` | -   |
| validator | 自定义校验规则           | `Function`                   | -   |

### type 类型
- `UPLOAD` 上传文件
- `TEXT` 普通输入框
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
- `CUSTOM` 自定义插槽

### mode 类型

- `DATETIME` yyyy-MM-dd HH:mm:SS
- `DATE` yyyy-MM-dd
- `TIME` hh:MM:ss
- `YEAR_MONTH` yyyy-MM
- `MONTH_DAY` MM-dd
- `HOUR_MINUTE` HH:mm
- `MINUTE_SECOND` mm:SS


## Methods

| 方法名           | 说明   | 参数                    |
|---------------|------|-----------------------|
| validate      | 验证表单 | -                     |
| resetFields   | 重置表单 | -                     |
| clearValidate | 清除验证 | `(fields?: string[])` |
| submit        | 提交表单 | -                     |

[^1]: 这个禁用优先级高于columns里面的disabled
[^2]: type = select 时候必填(参考 [HyPicker](./picker.md) 组件)
[^3]: type = radio 时候必填(参考 [HyRadio](./radio.md) 组件)

<demo-model url="pages/components/formGroup/formGroup"></demo-model>


