# Form 表单组件
> 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [form组件](https://uiadmin.net/uview-plus/components/form.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 使用示例

```html
<!-- 全局使用 -->
<hy-form :columns="columns" :formData="formData"></hy-form>
<!-- 单个组件引入 -->
<HyForm :columns="columns" :formData="formData"></HyForm>
```

```ts
import { reactive, ref } from "vue";
import { HyWarn, FormTypeEnum, HyForm, HyInput, HyButton } from "hfyk-app";
import type { FormColumnsType } from "hfyk-app";

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
    formRef.value.handleSubmit().then((res) => {
        console.log(res);
    });
};
```

## 自定义插槽

```html
<template>
    <HyForm
            ref="formRef"
            :columns="columns"
            :form-data="formData"
            labelWidth="90"
    >
        <template #default="{ record, errorStyle }">
            <HyInput
                v-model="formData[record.field]"
                :custom-style="errorStyle"
            ></HyInput>
        </template>
    </HyForm>
</template>

<script setup lang="ts">
    import { reactive } from "vue";
    import { FormTypeEnum, HyForm, HyInput } from "hfyk-app";
    import type { FormColumnsType } from "hfyk-app";
    
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
</script>
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
