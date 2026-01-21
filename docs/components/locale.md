# 国际化 <Badge type="tip" text="^0.6.0" />

:::warning 注意
目前组件库发布到 npm 上的包是未经编译的vue与ts，而 Vite 会将预构建的依赖项缓存到 node_modules/.vite，组件库的国际化的实现是基于reactive实现的数据共享，在dev阶段就会出现页面使用预构建产物中的国际化数据，而组件库使用组件库内部的国际化数据，所以在非uni_modules模式引入时，需要在vite.config.ts中增加以下配置:
```ts
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
    optimizeDeps: {
        exclude: process.env.UNI_PLATFORM === 'h5' && process.env.NODE_ENV === 'development' ? ['hy-app'] : []
    }
})
```
使用[optimizeDeps.exclude](https://cn.vitejs.dev/config/dep-optimization-options#optimizedeps-exclude)在预构建中强制排除hy-app模块，在uni_modules模式下，不需要做任何处理。
:::

## 使用其他语言
我们通过 Locale 组件实现多语言支持，使用 Locale.use 方法可以切换当前使用的语言。
```ts
import { Locale } from 'hy-app'
// 引入英文语言包
import enUS from 'hy-app/locale/lang/en-US'

Locale.use('en-US', enUS)
```

## 覆盖语言包
通过 Locale.add 方法可以实现文案的修改和扩展，示例如下：
```ts
import { Locale } from 'hy-app'

const messages = {
    'zh-CN': {
        calendar: {
            title: '请选择日期' // 将'选择日期'修改为'请选择日期'
        }
    }
}

Locale.add(messages)
```

## 支持的语言
| 语言   | 文件名    | 版本     |
|------|--------|--------|
| 简体中文 | 	zh-CN | v0.6.0 |
| 英语   | 	en-US | v0.6.0 |