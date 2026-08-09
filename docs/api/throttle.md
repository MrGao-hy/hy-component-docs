# throttle & debounce 节流防抖工具

## 概念说明

- **节流**：规定时间内，只触发一次。适合抢购等高频点击场景。
- **防抖**：连续操作中，只有最后一次操作后在指定时间内没有再操作才有效。适合搜索框输入等场景。

## 函数列表

### throttle(fn, wait?, immediate?) => void

节流函数，规定时间内只触发一次。

**参数**

| 参数名    | 类型     | 必填 | 默认值 | 说明               |
| --------- | -------- | ---- | ------ | ------------------ |
| fn        | function | 是   | -      | 触发回调执行的函数 |
| wait      | number   | 否   | 500    | 时间间隔，单位 ms  |
| immediate | boolean  | 否   | true   | 是否立即执行       |

**返回值**

| 类型 | 说明     |
| ---- | -------- |
| void | 无返回值 |

**示例**

```typescript
import { throttle } from '@hy-app/ui';

const throttleFn = throttle(() => {
    console.log('执行了');
}, 2000);
```

---

### debounce(fn, wait?) => void

防抖函数，连续操作中只有最后一次操作后指定时间内没有再操作才有效。

**参数**

| 参数名 | 类型     | 必填 | 默认值 | 说明               |
| ------ | -------- | ---- | ------ | ------------------ |
| fn     | function | 是   | -      | 触发回调执行的函数 |
| wait   | number   | 否   | 500    | 时间间隔，单位 ms  |

**返回值**

| 类型 | 说明     |
| ---- | -------- |
| void | 无返回值 |

**示例**

```typescript
import { debounce } from '@hy-app/ui';

const debounceFn = debounce(() => {
    console.log('执行了');
}, 2000);
```
