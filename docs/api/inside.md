# inside 内部工具函数

`inside` 模块提供组件开发中常用的内部工具函数。

## 函数列表

### bem(name, props, fixed, change?) => string | string[]

生成符合 BEM 规范的组件类名，便于 CSS 样式管理。

**参数**

| 参数名 | 类型     | 必填 | 默认值 | 说明               |
| ------ | -------- | ---- | ------ | ------------------ |
| name   | string   | 是   | -      | 组件名称           |
| props  | object   | 是   | -      | 组件属性对象       |
| fixed  | string[] | 是   | -      | 固定存在的类名数组 |
| change | string[] | 否   | -      | 可变类名数组       |

**返回值**

| 类型               | 说明                                                |
| ------------------ | --------------------------------------------------- |
| string \| string[] | BEM 规范的类名字符串（小程序）或数组（支付宝/头条） |

**示例**

```typescript
import { bem } from '@hy-app/ui';

const props = {
    type: 'primary',
    size: 'large',
    plain: true,
};

const fixed = ['type', 'size'];
const result = bem('button', props, fixed);
console.log(result);
// 'hy-button--primary hy-button--size hy-button--type__plain'
```

---

### error(err) => void

开发环境下显示错误提示信息，仅在 NODE_ENV === 'development' 时输出。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明     |
| ------ | ------ | ---- | ------ | -------- |
| err    | string | 是   | -      | 错误内容 |

**返回值**

| 类型 | 说明     |
| ---- | -------- |
| void | 无返回值 |

**示例**

```typescript
import { error } from '@hy-app/ui';

error('这是一个错误提示');
// 华玥组件提示：这是一个错误提示
```

---

### sleep(value?) => Promise&lt;void&gt;

延迟执行函数，返回 Promise 对象，可用于 await 等待。

**参数**

| 参数名 | 类型   | 必填 | 默认值 | 说明       |
| ------ | ------ | ---- | ------ | ---------- |
| value  | number | 否   | 100    | 延迟毫秒数 |

**返回值**

| 类型            | 说明                       |
| --------------- | -------------------------- |
| Promise\<void\> | Promise 对象，可用于 await |

**示例**

```typescript
import { sleep } from '@hy-app/ui';

await sleep(1000);
console.log('1 秒后执行');

await sleep();
console.log('100ms 后执行');
```

---

### guid(length?, firstU?, radix?) => string

生成全局唯一标识符，首字母会被替换为 'u' 以确保可用作 id 或 class。

**参数**

| 参数名 | 类型           | 必填 | 默认值 | 说明            |
| ------ | -------------- | ---- | ------ | --------------- |
| length | number \| null | 否   | 32     | guid 的长度     |
| firstU | boolean        | 否   | true   | 首字母是否为"u" |
| radix  | number         | 否   | 62     | 生成的基数      |

**返回值**

| 类型   | 说明           |
| ------ | -------------- |
| string | 全局唯一标识符 |

**示例**

```typescript
import { guid } from '@hy-app/ui';

const id = guid();
console.log(id);
```
