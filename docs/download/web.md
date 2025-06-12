# :cactus: 前端软件工具

## :speedboat: 下载软件集合

- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- [Vscode开发软件](https://code.visualstudio.com/Download)
- [Webstorm开发软件（非免费）](https://webstorm.p2hp.com/)
- [HBuildX开发软件](https://www.dcloud.io/hbuilderx.html)
- [Snipaste截图工具](https://zh.snipaste.com/)
- [postman接口测试工具](https://identity.getpostman.com/)

## :ferry: 前端常用工具
- [websocket测试工具](http://www.websocket-test.com/)
- [api测试工具](https://app.apifox.com/)
- [json格式工具](https://www.json.cn/)
- [数字统计工具](https://tools.manmankan.com/zishutongji/)
- [图片压缩工具](https://yasuo.xunjiepdf.com/img/?eqid=c814e2b40000796a00000006648fad3f)
- [英语大小写转换](https://app.xunjiepdf.com/yinwen)
- [时间戳转换](http://shijianchuo.wiicha.com/)
- [菜鸟工具canvas运行](https://www.runoob.com/try/try.php?filename=tryhtml5_canvas_quadraticcurveto)
- [草料生成二维码](https://cli.im/)
- [图片互相转换base64](https://www.67tool.com/images/convert/base64)
- [英语大小写转换](https://app.xunjiepdf.com/yinwen)
- [英语大小写转换](https://app.xunjiepdf.com/yinwen)
- [英语大小写转换](https://app.xunjiepdf.com/yinwen)

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