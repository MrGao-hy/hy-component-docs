# getRect 节点布局信息获取工具

> 此方法封装自 uni 的 `nodesRef.boundingClientRect`，极大简化了使用复杂度，内部使用 Promise，可以让用户同步获取节点信息。

::: tip 建议

受限于 `nodesRef.boundingClientRect`，其结果中的 `left`、`top`、`right`、`bottom` 会随着页面滚动而变化（相对于屏幕窗口），但 `width`、`height` 是恒定不变的。一般推荐在获取节点宽高时使用此方法。

:::

::: warning 注意

- 由于 `onLoad` 生命周期元素尚未创建完成，请勿在此生命周期使用此方法，应在 `mounted` 生命周期调用
- 如果要查询的目标是通过服务端获取数据后才渲染的，应在获取数据后通过 `nextTick` 调用此方法
- 在微信小程序端必须传入 `getCurrentInstance()`
- 在支付宝小程序里，如果获取多个相同元素的 dom，需要把 `const instance = getCurrentInstance()` 写在获取 dom 的同级

:::

## 函数列表

### getRect(selector, all?, ins?) => Promise&lt;any | any[]&gt;

获取指定选择器对应的节点布局信息，封装自 uni 的 nodesRef.boundingClientRect。

**参数**

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| selector | string | 是 | - | 元素节点选择器，可以是 id 或 class，如 `"#user-name"`、`".box"` |
| all | boolean | 否 | false | 是否返回全部节点信息，为 true 时返回数组 |
| ins | any | 否 | - | 节点实例，小程序端必须传 `getCurrentInstance()` |

**返回值**

| 类型                    | 说明                   |
| ----------------------- | ---------------------- |
| Promise\<any \| any[]\> | 节点布局信息对象或数组 |

**示例**

```typescript
import { getRect } from '@hy-app/ui';

// 异步使用
getRect('.elClass').then((res) => {
    console.log(res);
});

// 同步使用
const rectInfo = await getRect('.elClass');
console.log(rectInfo);

// 微信小程序
const instance = getCurrentInstance();
const rect = await getRect('.elClass', false, instance);
```
