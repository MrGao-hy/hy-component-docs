# encryptData & decryptData Encryption & Decryption Tool

::: tip Tip

The encryption method is a simple encryption using base64. This method can be directly cracked and should not be used for important data that requires encryption. It is recommended to use md5 encryption for important data.

:::

## Function List

### encryptData(data) => string

Encrypts an object or string using base64.

**Parameters**

| Parameter Name | Type             | Required | Default Value | Description               |
| -------------- | ---------------- | --------- | ------------ | ---------------------- |
| data           | object \| string | Yes       | -            | The object or string to be encrypted |

**Return Value**

| Type   | Description                  |
| ------ | --------------------- |
| string | The string after base64 encryption |

**Example**

```typescript
import { encryptData } from '@hy-app/ui';

const encryptObj = encryptData({ name: 'Encrypted Object' });
const encryptStr = encryptData('Encrypted String');
```

---

### decryptData(encryptedVal) => any

Decrypts base64 encrypted data, restoring it to the original data.

**Parameters**

| Parameter Name       | Type   | Required | Default Value | Description               |
| -------------- | ------ | --------- | ------------ | ------------------ |
| encryptedVal | string | Yes       | -            | The encrypted data to be decrypted |

**Return Value**

| Type | Description             |
| ---- | ---------------- |
| any  | The original data after decryption |

**Example**

```typescript
import { decryptData } from '@hy-app/ui';

const decryptVal = decryptData('DSSFFGfh234nr');
```