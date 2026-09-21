# addUnit & getPx 单位转换工具

## 函数列表

### addUnit(value, unit?) => string

为数值添加单位，如果值已包含单位则直接返回。

**参数**

| 参数名 | 类型             | 必填 | 默认值 | 说明             |
| ------ | ---------------- | ---- | ------ | ---------------- |
| value  | string \| number | 是   | -      | 需要添加单位的值 |
| unit   | string           | 否   | px     | 添加的单位名     |

**返回值**

| 类型   | 说明               |
| ------ | ------------------ |
| string | 添加单位后的字符串 |

**示例**

```typescript
import { addUnit } from '@hy-app/ui';

const unit_1 = addUnit(20); // 20px
const unit_2 = addUnit('20rpx'); // 20rpx
const unit_3 = addUnit('10', 'rpx'); // 10rpx
```

---

### getPx(value, unit?) => string \| number

将 rpx 或 upx 单位转换为 px 单位。

**参数**

| 参数名 | 类型             | 必填 | 默认值 | 说明             |
| ------ | ---------------- | ---- | ------ | ---------------- |
| value  | string \| number | 是   | -      | 需要转换的值     |
| unit   | boolean          | 否   | false  | 是否添加 px 单位 |

**返回值**

| 类型             | 说明           |
| ---------------- | -------------- |
| string \| number | 转换后的 px 值 |

**示例**

```typescript
import { getPx } from '@hy-app/ui';

const unit_1 = getPx(20, true); // 20px
const unit_2 = getPx('20px'); // 20
const unit_3 = getPx('20rpx'); // 10
const unit_4 = getPx('20upx', true); // 10px
```
