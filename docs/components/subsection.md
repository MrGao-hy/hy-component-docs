# Subsection 分段器组件
> 该分段器一般用于用户从几个选项中选择某一个的场景

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [subsection组件](https://uiadmin.net/uview-plus/components/subsection.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-subsection :list="list"></hy-subsection>
<!-- 单个组件引入 -->
<HySubsection :list="list"></HySubsection>
```
```ts
import { HyButton } from "hy-app";
import { ref } from "vue";

const list = ref(['未付款', '待评价', '已付款']);
const list_1 = ref([{ name: "全部"}, { name: "未核销" }, { name: "已核销" }]);
```

## 基本使用示例
- `mode`值为`button`时为按钮类型
- `mode`值为`subsection`时为分段器形式
```html
<template>
    <hy-subsection :list="list" mode="button"></hy-subsection>
    <hy-subsection :list="list" mode="subsection"></hy-subsection>
</template>
```

## 颜色配置
- 通过`activeColor`配置激活选项的文字颜色
- 通过`inactiveColor`配置未激活选项的文字颜色
- 通过`bgColor`配置背景颜色，mode为button时有效（默认 '#eeeeef' ）
```html
<template>
    <hy-subsection
        :list="list"
        activeColor="#f56c6c"
        inactiveColor="blue"
        bgColor="red"
    ></hy-subsection>
</template>
```

## API

| 参数            | 说明                    | 类型                       | 默认值                 |
|---------------|-----------------------|--------------------------|---------------------|
| list          | 选项的数组，形式见上方"基本使用"     | `array`                  | -                   |
| fieldNames    | list自定义键值             | `object`                 | -                   |
| activeColor   | 激活时的颜色                | `string`                 | ColorConfig.success |
| inactiveColor | 未激活时的颜色               | `string`                 | #303133             |
| mode          | 模式选择，见上方"模式选择"说明      | `button` \| `subsection` | button              |
| fontSize      | 字体大小，单位px             | `string` \| `number`     | 12                  |
| bold          | 激活选项的字体是否加粗           | `boolean`                | true                |
| bgColor       | 组件背景颜色，mode为button时有效 | `string`                 | #eeeeef             |
| keyName       | 从list元素对象中读取的键名       | `string`                 | name                |

## fieldNames
| 参数    | 说明    | 类型       | 默认值   |
|-------|-------|----------|-------|
| label | 显示的文本 | `string` | name  |
| value | 需要传的值 | `string` | value |

## Events

| 事件名    | 说明           | 回调参数              |
|--------|--------------|-------------------|
| change | 分段器选项发生改变时触发 | index：选项的index索引值 |