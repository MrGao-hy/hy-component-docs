# Toast 消息提示组件
> Toast 组件主要用于消息通知、加载提示、操作结果提示等醒目提示效果，提供多种丰富的 API。

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :warning:注意事项

:::warning 注意事项
- 由于 uni 中无法通过 JS 创建元素，所以需要在页面中调用 toast 组件，再通过 ref 开启
- 使用 `useToast()` 钩子函数创建 toast 实例，支持全局调用
- `toast.loading()` 必须手动调用 `toast.close()` 关闭，否则不会自动关闭
- `duration` 设置为 `-1` 时不会自动关闭
- `icon` 属性支持布尔值（显示默认图标）或字符串（自定义图标名称）或icon的属性对象值
- 组件通过全局事件 `__hy_toast_open__` 和 `__hy_toast_close__` 进行通信
- 建议在页面根组件中添加 `<hy-toast></hy-toast>` 标签
  :::

## :japanese_castle:基本使用示例

```html
<!-- 在页面中添加组件 -->
<template>
    <view>
        <hy-toast></hy-toast>
        <!-- 其他内容 -->
    </view>
</template>
```

```typescript
import { useToast } from 'hy-app'
import { onMounted } from 'vue'

const toast = useToast()

onMounted(() => {
    toast.success('操作成功')
})
```

### 多种类型提示

```typescript
// 默认提示（无图标）
toast.show('默认提示信息')

// 信息提示
toast.info('这是一条信息提示')

// 成功提示
toast.success('操作成功')

// 错误提示
toast.error('操作失败')

// 警告提示
toast.warning('警告信息')

// 主题色提示
toast.primary('重要提示')
```

### 加载提示

```typescript
// 显示加载提示（默认文字"加载中..."）
toast.loading()

// 自定义加载文字
toast.loading('加载中，请稍候...')

// 5秒后自动关闭
setTimeout(() => {
    toast.close()
}, 5000)
```

### 自定义配置

```typescript
// 自定义显示位置
toast.success('顶部提示', { position: 'top' })
toast.success('底部提示', { position: 'bottom' })
toast.success('居中提示', { position: 'center' }) // 默认

// 自定义显示时长
toast.info('3 秒后关闭', { duration: 3000 })

// 不自动关闭
toast.info('手动关闭', { duration: -1 })

// 显示遮罩层（防止触摸穿透）
toast.success('提示', { overlay: true })

// 不显示遮罩层（允许触摸穿透）
toast.success('提示', { overlay: false })

// 自定义图标（字符串：图标名称）
toast.info('自定义图标', { icon: 'star' })

// 自定义图标（对象：可设置大小、颜色等）
toast.info('自定义图标', {
    icon: { name: 'time', size: '24', color: '#2979ff' }
})

// 回调函数
toast.success('操作成功', {
    complete: () => {
        console.log('toast 已关闭')
    }
})
```

### 完整示例

```html
<template>
    <view class="demo">
        <hy-toast></hy-toast>
        <hy-button text="显示成功提示" @click="showSuccess"></hy-button>
        <hy-button text="显示加载提示" @click="showLoading"></hy-button>
    </view>
</template>

<script setup lang="ts">
    import { useToast } from 'hy-app'

    const toast = useToast()

    const showSuccess = () => {
        toast.success('操作成功', {
            duration: 2000,
            position: 'bottom',
            complete: () => {
                console.log('提示已关闭')
            }
        })
    }

    const showLoading = () => {
        toast.loading('数据加载中...', { position: 'center' })

        // 模拟异步操作
        setTimeout(() => {
            toast.close()
            toast.success('加载完成')
        }, 3000)
    }
</script>
```

## API

### Options 参数

| 参数       | 说明                   | 类型                                                         | 默认值    |
|----------|----------------------|------------------------------------------------------------|--------|
| message  | 显示的文本                | `string`                                                   | -      |
| type     | 主题类型                 | `'error' \| 'warning' \| 'success' \| 'primary' \| 'info'` | info   |
| icon     | 图标名称或布尔值（true显示默认图标） | `string \| boolean`                                        | false  |
| loading  | 是否加载中状态              | `boolean`                                                  | false  |
| loadMode | 加载图标模式               | `'circle' \| 'spinner' \| 'semicircle'`                    | circle |
| overlay  | 是否防止触摸穿透             | `boolean`                                                  | false  |
| cover    | 是否显示遮罩层              | `boolean`                                                  | false  |
| position | toast 出现的位置          | `'top' \| 'center' \| 'bottom'`                            | center |
| duration | 展示时间（毫秒），-1 时不自动关闭   | `number`                                                   | 2000   |
| complete | 执行完后的回调函数            | `Function`                                                 | -      |

### Methods

| 方法名     | 说明              | 参数                                         |
|---------|-----------------|--------------------------------------------|
| show    | 显示默认 toast（无图标） | `message: string, options?: ToastOptions`  |
| info    | 显示信息提示（带图标）     | `message: string, options?: ToastOptions`  |
| success | 显示成功提示（带图标）     | `message: string, options?: ToastOptions`  |
| error   | 显示错误提示（带图标）     | `message: string, options?: ToastOptions`  |
| warning | 显示警告提示（带图标）     | `message: string, options?: ToastOptions`  |
| primary | 显示主题色提示（带图标）    | `message: string, options?: ToastOptions`  |
| loading | 显示加载提示（需手动关闭）   | `message?: string, options?: ToastOptions` |
| close   | 关闭所有 toast      | -                                          |

### Typings

:::details 类型说明

```typescript
/** Toast 配置选项 */
export interface ToastOptions {
    /** 显示文本 */
    message?: string
    /** 主题类型：primary, success, error, warning, info */
    type?: string
    /** toast 出现的位置：top, center, bottom */
    position?: string
    /** 显示的图标（true 显示默认图标，字符串为自定义图标名称，对象为图标属性配置） */
    icon?: boolean | string | { name: string; size?: string | number; color?: string }
    /** 是否显示遮罩层（防止触摸穿透） */
    overlay?: boolean
    /** 是否加载中状态 */
    loading?: boolean
    /** 加载图标模式：circle, spinner, semicircle */
    loadMode?: string
    /** 显示时间（毫秒），-1 不自动关闭 */
    duration?: number
    /** 执行完后的回调函数 */
    complete?: Function | null
}
```

:::

<demo-model url="pages-design/toast/toast"></demo-model>
