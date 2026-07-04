# inside 内部工具函数

## 功能介绍

`inside` 模块提供组件开发中常用的内部工具函数，包括 BEM 命名、错误提示、延迟执行和 UUID 生成等。

- `bem` - 生成符合 BEM 规范的组件类名
- `error` - 开发环境错误提示
- `sleep` - 延迟执行（Promise 形式）
- `guid` - 生成全局唯一标识符

## bem(name, props, fixed, change?)
> 生成 BEM 规范类名。

### 入参参数
- `name` 组件名称
- `props` 组件属性对象
- `fixed` 固定存在的类名数组
- `change` 可变类名数组
- 
### 使用示例
```typescript
import { bem } from 'hy-app'

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

## error(err)
> 开发环境错误提示。
### 入参参数
- err 错误内容
### 使用示例
```typescript
import { error } from 'hy-app'

// 仅在开发环境显示错误
error('这是一个错误提示')
// 华玥组件提示：这是一个错误提示
```


## sleep(value?)
> 延迟执行。
### 入参参数
- `value` 延迟毫秒数
### 使用示例

```typescript
import { sleep } from 'hy-app'

// 延迟 1 秒
await sleep(1000)
console.log('1 秒后执行')

// 默认延迟 100ms
await sleep()
console.log('100ms 后执行')
```

## 注意事项

1. `bem` 返回值在小程序平台是字符串，支付宝/头条平台是数组
2. `error` 仅在 `NODE_ENV === 'development'` 时输出
3. `guid` 首字母会被替换为 'u' 以确保可用作 id 或 class
