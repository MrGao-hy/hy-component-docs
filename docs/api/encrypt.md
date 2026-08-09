# encryptData & decryptData 加密解密工具

::: tip 温馨提示

该加密方式是通过 base64 进行简单加密，如果重要数据需要加密不能使用此方法，该加密方式可被直接破解。重要数据建议使用 md5 加密。

:::

## 函数列表

### encryptData(data) => string

使用 base64 对对象或字符串进行加密处理。

**参数**

| 参数名 | 类型             | 必填 | 默认值 | 说明                   |
| ------ | ---------------- | ---- | ------ | ---------------------- |
| data   | object \| string | 是   | -      | 需要加密的对象或字符串 |

**返回值**

| 类型   | 说明                  |
| ------ | --------------------- |
| string | base64 加密后的字符串 |

**示例**

```typescript
import { encryptData } from '@hy-app/ui';

const encryptObj = encryptData({ name: '加密对象' });
const encryptStr = encryptData('加密字符串');
```

---

### decryptData(encryptedVal) => any

对 base64 加密的数据进行解密，还原为原始数据。

**参数**

| 参数名       | 类型   | 必填 | 默认值 | 说明               |
| ------------ | ------ | ---- | ------ | ------------------ |
| encryptedVal | string | 是   | -      | 需要解密的加密数据 |

**返回值**

| 类型 | 说明             |
| ---- | ---------------- |
| any  | 解密后的原始数据 |

**示例**

```typescript
import { decryptData } from '@hy-app/ui';

const decryptVal = decryptData('DSSFFGfh234nr');
```
