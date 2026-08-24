## addUnit & getPx Unit Conversion Tool

## Function List

### addUnit(value: string \| number, unit?: string) => string

Adds a unit to the value. If the value already contains a unit, it is returned directly.

**Parameters**

| Parameter Name | Type             | Required | Default Value | Description             |
| -------------- | ---------------- | -------- | ------------ | ------------------------ |
| value          | string \| number | Yes      | -             | The value that needs to be added a unit |
| unit           | string           | No       | px           | The name of the unit to add |

**Return Value**

| Type   | Description               |
| ------ | ------------------------ |
| string | The string after adding the unit |

**Example**

```typescript
import { addUnit } from '@hy-app/ui';

const unit_1 = addUnit(20); // 20px
const unit_2 = addUnit('20rpx'); // 20rpx
const unit_3 = addUnit('10', 'rpx'); // 10rpx
```

---

### getPx(value: string \| number, unit?: boolean) => string \| number

Converts rpx or upx units to px units.

**Parameters**

| Parameter Name | Type             | Required | Default Value | Description             |
| -------------- | ---------------- | -------- | ------------ | ------------------------ |
| value          | string \| number | Yes      | -             | The value that needs to be converted |
| unit           | boolean          | No       | false        | Whether to add the px unit |

**Return Value**

| Type             | Description           |
| ---------------- | --------------------- |
| string \| number | The converted px value |

**Example**

```typescript
import { getPx } from '@hy-app/ui';

const unit_1 = getPx(20, true); // 20px
const unit_2 = getPx('20px'); // 20
const unit_3 = getPx('20rpx'); // 10
const unit_4 = getPx('20upx', true); // 10px
```