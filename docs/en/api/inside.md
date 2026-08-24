# Inside Internal Utility Functions

The `inside` module provides commonly used internal utility functions for component development.

## List of Functions

### bem(name, props, fixed?, change?) => string | string[]

Generates component class names in accordance with the BEM (Block Element Modifier) specification, facilitating CSS style management.

**Parameters**

| Parameter Name | Type     | Required | Default | Description               |
| -------------- | -------- | ---- | ------ | ------------------ |
| name   | string   | Yes | -      | Component name           |
| props  | object   | Yes | -      | Component properties object |
| fixed  | string[] | Yes | -      | Fixed class names that exist |
| change | string[] | No | -      | Variable class names array |

**Return Value**

| Type               | Description                                                |
| ------------------ | --------------------------------------------------- |
| string \| string[] | BEM specification class name string (WeChat Mini Program) or array (Alipay/Toutiao) |

**Example**

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

Displays error message prompts in the development environment, and only outputs when `NODE_ENV === 'development'`.

**Parameters**

| Parameter Name | Type   | Required | Default | Description     |
| -------------- | ------ | ---- | ------ | -------- |
| err    | string | Yes   | -      | Error content |

**Return Value**

| Type | Description     |
| ---- | -------- |
| void | No return value |

**Example**

```typescript
import { error } from '@hy-app/ui';

error('This is an error prompt');
// Huayue Component Prompt: This is an error prompt
```

---

### sleep(value?) => Promise<void>

Delays function execution, returns a Promise object, and can be used with `await` for waiting.

**Parameters**

| Parameter Name | Type   | Required | Default | Description       |
| -------------- | ------ | ---- | ------ | ---------- |
| value  | number | No | 100    | Delay milliseconds |

**Return Value**

| Type            | Description                       |
| --------------- | -------------------------- |
| Promise<void> | Promise object, usable with await |

**Example**

```typescript
import { sleep } from '@hy-app/ui';

await sleep(1000);
console.log('Executed after 1 second');

await sleep();
console.log('Executed after 100ms');
```

---

### guid(length?, firstU?, radix?) => string

Generates a globally unique identifier, with the first letter being replaced with 'u' to ensure it can be used as an id or class.

**Parameters**

| Parameter Name | Type           | Required | Default | Description            |
| -------------- | -------------- | ---- | ------ | --------------- |
| length | number \| null | No | 32     | Length of the guid     |
| firstU | boolean        | No | true   | First letter should be "u" |
| radix  | number         | No | 62     | Base used for generation |

**Return Value**

| Type   | Description           |
| ------ | -------------- |
| string | Globally unique identifier |

**Example**

```typescript
import { guid } from '@hy-app/ui';

const id = guid();
console.log(id);
```