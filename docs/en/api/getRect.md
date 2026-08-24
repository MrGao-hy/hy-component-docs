# getRect Node Layout Information Retrieval Tool

> This method wraps the `nodesRef.boundingClientRect` from uni, greatly simplifying the complexity of use. It internally uses Promise, allowing users to synchronously obtain node information.

::: tip Suggestion

Due to the limitations of `nodesRef.boundingClientRect`, the `left`, `top`, `right`, and `bottom` values in the result will change with page scrolling (relative to the screen window), but `width` and `height` are constant. It is generally recommended to use this method when obtaining node width and height.

:::

::: warning Note

- Since the elements are not yet fully created in the `onLoad` lifecycle, do not use this method in this lifecycle. It should be called in the `mounted` lifecycle.
- If the target to be queried is rendered after data is obtained from the server, this method should be called after data retrieval using `nextTick`.
- On the WeChat Mini Program platform, `getCurrentInstance()` must be passed in.
- In Alipay Mini Program, if multiple DOMs of the same element need to be retrieved, `const instance = getCurrentInstance()` must be written at the same level as the retrieval of the DOM.

:::

## Function List

### getRect(selector, all?, ins?) => `Promise<any | any[]>`

Retrieve the layout information of nodes corresponding to the specified selector, wrapped from uni's `nodesRef.boundingClientRect`.

**Parameters**

| Parameter Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| selector | string | Yes | - | Element node selector, which can be id or class, such as `"#user-name"` or `".box"` |
| all | boolean | No | false | Whether to return all node information. If true, an array is returned |
| ins | any | No | - | Node instance. It must be passed in for the Mini Program platform |

**Return Value**

| Type | Description |
| ----------------------- | ---------------------- |
| Promise<any \| any[]> | Node layout information object or array |

**Example**

```typescript
import { getRect } from '@hy-app/ui';

// Asynchronous use
getRect('.elClass').then((res) => {
    console.log(res);
});

// Synchronous use
const rectInfo = await getRect('.elClass');
console.log(rectInfo);

// WeChat Mini Program
const instance = getCurrentInstance();
const rect = await getRect('.elClass', false, instance);
```