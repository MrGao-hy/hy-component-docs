# ReadMore 展开阅读更多组件
> 该组件一般用于内容较长，预先收起一部分，点击展开全部内容的场景。

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [readMore组件](https://uiadmin.net/uview-plus/components/readMore.html) 的代码实现。
:::

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-read-more>
    <rich-text :nodes="content"></rich-text>
</hy-read-more>
<!-- 单个组件引入 -->
<HyReadMore>
    <rich-text :nodes="content"></rich-text>
</HyReadMore>
```
```ts
import { HyReadMore } from "hy-app";
import { ref } from 'vue';

const content = ref(`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`);  
```

## 配置展开高度
- 通过配置`showHeight`高度，单位px，只有slot传入的内容高度超出这个值，才会出现"展开阅读全文"字样的按钮
```html
<hy-read-more showHeight="600">
    <rich-text :nodes="content"></rich-text>
</hy-read-more>
```

## 自定义样式
::: warning 提示
此组件上边部分有一个白色虚化的阴影，用以将点击区域与文字内容进行融合，如果您不想要这个阴影，可以调整shadowStyle对象，此对象内部如下：
```javascript
{
    // #ifndef APP-NVUE
    backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
    // #endif
    // #ifdef APP-NVUE
    // nvue上不支持设置复杂的backgroundImage属性
    backgroundImage: "linear-gradient(to top, #fff, rgba(255, 255, 255, 0.5))",
    // #endif
    paddingTop: "100px",
    marginTop: "-100px",
}
```
:::
- 如果您不想要阴影，将`backgroundImage`设置为`none`即可，关于`paddingTop`和`marginTop`自行调整至合适数值即可。
```html
<template>
    <hy-read-more :shadowStyle="shadowStyle">
        <rich-text :nodes="content"></rich-text>
    </hy-read-more>
</template>

<script setup>
    import { reactive } from 'vue';

    const shadowStyle = reactive({
        backgroundImage: "none",
        paddingTop: "0",
        marginTop: "20rpx"
    });
</script>
```

## 异步初始化
::: warning 提示
有时候需要展示的内容是从后端获取的，组件内部的mounted生命周期初始化时，请求尚未回来，会导致 内容的高度在初始化有误差。可以在请求完毕渲染后(指的是this.$nextTick)，通过ref调用组件的init方法，重新初始化。
:::
```html
<template>
    <hy-read-more showHeight="600" ref="uReadMoreRef">
        <rich-text :nodes="content"></rich-text>
    </hy-read-more>
</template>

<script setup>
    import { ref, onMounted, nextTick } from 'vue';

    // 创建响应式数据  
    const content = ref('');

    // 创建组件引用  
    const uReadMoreRef = ref(null);

    // 模拟后端请求  
    async function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
      苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
      无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`);
            }, 2000);
        });
    }

    // 在组件挂载后调用  
    onMounted(async () => {
        await fetchData();
        content.value = text;

        // 等待 DOM 更新  
        await nextTick();

        // 调用子组件的 init 方法  
        if (uReadMoreRef.value) {
            uReadMoreRef.value.init();
        }
    });
</script>
```

## API

| 参数          | 说明                       | 类型                 | 默认值     |
|-------------|--------------------------|--------------------|---------|
| showHeight  | 内容超出此高度才会显示展开全文按钮，单位px   | `string`\|`number` | 400     |
| toggle      | 展开后是否显示收起按钮              | `boolean`          | false   |
| closeText   | 关闭时的提示文字                 | `string`           | 展开阅读全文	 |
| openText    | 展开时的提示文字                 | `string`           | 收起      |
| color       | 提示文字的颜色	                 | `string`           | -       |
| fontSize    | 提示文字的大小，默认单位px           | `string`\|`number` | 14      |
| textIndent  | 段落首行缩进的字符个数              | `string`           | 2em     |
| name        | 用于在open和close事件中当作回调参数返回 | `string`           | -       |
| shadowStyle | 对阴影的自定义处理，对象形式           | `CSSProperties`    | -       |
| customStyle | 定义需要用到的外部样式              | `CSSProperties`    | -       |

## Events

| 事件名   | 说明        | 回调参数                    |
|-------|-----------|-------------------------|
| open  | 内容被展开时触发  | name - props中传入的name参数值 |
| close | 内容被收起时触发	 | name - props中传入的name参数值 |

## Slots

| 插槽名     | 说明   | 接收值 |
|---------|------|-----|
| default | 默认插槽 | -   |


## Methods

| 插槽名  | 说明              |
|------|-----------------|
| init | 重新初始化组件内部高度计算过程 |

<demo-model url="pages/components/readMore/readMore"></demo-model>
