# inside 内部工具函数

## 功能介绍

`inside` 模块提供组件开发中常用的内部工具函数，包括 BEM 命名、错误提示、延迟执行和 UUID 生成等。

- `bem` - 生成符合 BEM 规范的组件类名
- `error` - 开发环境错误提示
- `sleep` - 延迟执行（Promise 形式）
- `guid` - 生成全局唯一标识符

## 引入方式

```typescript
import { bem, error, sleep, guid } from '@/package/libs/utils/inside'
```

## API 文档

### bem(name, props, fixed, change?)

生成 BEM 规范类名。

**参数**：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| name | `string` | 组件名称 |
| props | `Record<string, any>` | 组件属性对象 |
| fixed | `string[]` | 固定存在的类名数组 |
| change | `string[]` | 可变类名数组 |

**返回值**：`string | string[]` 类名字符串或数组

### error(err)

开发环境错误提示。

**参数**：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| err | `string` | 错误内容 |

### sleep(value?)

延迟执行。

**参数**：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | `number` | `100` | 延迟毫秒数 |

**返回值**：`Promise<void>`

### guid(len?, firstU?, radix?)

生成 UUID。

**参数**：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| len | `number` | `32` | UUID 长度 |
| firstU | `boolean` | `true` | 是否以 'hy' 开头 |
| radix | `number \| null` | `null` | 基数（2-36），null 则使用默认字符集 |

**返回值**：`string` UUID 字符串

## 使用示例

### bem 用法

```typescript
import { bem } from '@/package/libs/utils/inside'

const props = {
    type: 'primary',
    size: 'large',
    plain: true
}

// 生成固定类名
const fixed = ['type', 'size']
const result = bem('button', props, fixed)
console.log(result)
// 'hy-button--primary hy-button--size hy-button--type__plain'
```

### error 用法

```typescript
import { error } from '@/package/libs/utils/inside'

// 仅在开发环境显示错误
error('这是一个错误提示')
// 华玥组件提示：这是一个错误提示
```

### sleep 用法

```typescript
import { sleep } from '@/package/libs/utils/inside'

// 延迟 1 秒
await sleep(1000)
console.log('1 秒后执行')

// 默认延迟 100ms
await sleep()
console.log('100ms 后执行')
```

### guid 用法

```typescript
import { guid } from '@/package/libs/utils/inside'

// 默认生成 32 位以 hy 开头的 UUID
const id1 = guid()
console.log(id1) // 'hy7f8a2b1c3d4e5f6...'

// 生成 16 位 UUID
const id2 = guid(16)
console.log(id2) // 'hy7f8a2b1c3d4'

// 不以 hy 开头
const id3 = guid(16, false)
console.log(id3) // '7f8a2b1c3d4e5f6'

// 使用 36 进制（可选字符更多）
const id4 = guid(32, true, 36)
```

## 注意事项

1. `bem` 返回值在小程序平台是字符串，支付宝/头条平台是数组
2. `error` 仅在 `NODE_ENV === 'development'` 时输出
3. `guid` 首字母会被替换为 'u' 以确保可用作 id 或 class
