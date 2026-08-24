## throttle & debounce Throttle and Debounce Tools

## Concept Explanation

- **Throttle**: Only trigger once within a specified time frame. Suitable for high-frequency click scenarios such as flash sales.
- **Debounce**: Only the last operation in a series of continuous operations is effective if there is no further operation within a specified time after the last operation. Suitable for scenarios such as search box input.

## Function List

### throttle(fn, wait?, immediate?) => void

Throttle function, triggers only once within a specified time frame.

**Parameters**

| Parameter Name | Type     | Required | Default Value | Description               |
| -------------- | -------- | -------- | ------------ | ------------------------ |
| fn             | function | Yes      | -             | The function to be executed when triggered |
| wait           | number   | No       | 500           | Time interval, in ms      |
| immediate      | boolean  | No       | true          | Whether to execute immediately |

**Return Value**

| Type | Description     |
| ---- | ----------------|
| void | No return value |

**Example**

```typescript
import { throttle } from '@hy-app/ui';

const throttleFn = throttle(() => {
    console.log('Executed');
}, 2000);
```

---

### debounce(fn, wait?) => void

Debounce function, only the last operation in a series of continuous operations is effective if there is no further operation within a specified time after the last operation.

**Parameters**

| Parameter Name | Type     | Required | Default Value | Description               |
| -------------- | -------- | -------- | ------------ | ------------------------ |
| fn             | function | Yes      | -             | The function to be executed when triggered |
| wait           | number   | No       | 500           | Time interval, in ms      |

**Return Value**

| Type | Description     |
| ---- | ----------------|
| void | No return value |

**Example**

```typescript
import { debounce } from '@hy-app/ui';

const debounceFn = debounce(() => {
    console.log('Executed');
}, 2000);
```