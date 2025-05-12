# 前端下载集合

## 下载工具

[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

## uniapp 前端项目下载插件

### 1.unplugin-vue-components/vite
[unplugin-vue-components/vite]("https://npmmirror.com/package/unplugin-vue-components/vite")
> 用于自动导入组件

```shell
$ pnpm i unplugin-vue-components -D
```

在vite.config.ts或vite.config.js中配置unplugin-vue-components
```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
    plugins: [
        vue(),
        Components({
            dirs: ['src/components'], // 指定需要自动导入的组件目录
            dts: 'src/components.d.ts', // 生成类型声明文件
            deep: true, // 是否递归扫描子目录，默认为 true
            extensions: ['.vue'], // 指定需要自动导入的文件扩展名，默认为 ['.vue']
        })
    ]
});
```