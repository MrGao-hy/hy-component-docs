# :cactus: 前端文档 / 软件 / 工具

## :monorail: 开发 & 下载

| 名称                                                                                 | 简介                         |
|------------------------------------------------------------------------------------|----------------------------|
| [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) | 小程序调试、预览与发布                |
| [支付宝开发者工具](https://opendocs.alipay.com/mini/ide/download)                          | 小程序调试、预览与发布                |
| [抖音开发者工具](https://developer.open-douyin.com/docs-page)                           | 小程序调试、预览与发布                |
| [VS Code](https://code.visualstudio.com/Download)                                  | 轻量级跨平台编辑器                  |
| [WebStorm](https://www.jetbrains.com/webstorm/)                                    | JetBrains 全家桶之专业前端 IDE（付费） |
| [HBuilderX](https://www.dcloud.io/hbuilderx.html)                                  | uni-app 官方推荐 IDE           |
| [Snipaste](https://zh.snipaste.com/)                                               | 轻量截图 + 贴图                  |
| [Postman](https://www.postman.com/downloads/)                                      | 接口调试、Mock、自动化测试            |

## :hammer_and_wrench: 常用在线工具

> 无需安装，打开即用，方便在线测试

- [WebSocket 测试](http://www.websocket-test.com/)
- [Apifox](https://app.apifox.com/) – API 设计 / 调试 / Mock
- [JSON 格式化](https://www.json.cn/)
- [字数统计](https://tools.manmankan.com/zishutongji/)
- [图片批量压缩](https://yasuo.xunjiepdf.com/img/)
- [视频转换gif图片](https://ezgif.com/)
- [大小写转换](https://app.xunjiepdf.com/yinwen)
- [时间戳互转](http://shijianchuo.wiicha.com/)
- [Canvas 在线运行](https://www.runoob.com/try/try.php?filename=tryhtml5_canvas_quadraticcurveto)
- [草料二维码](https://cli.im/)
- [图片 ↔ Base64](https://www.67tool.com/images/convert/base64)
- [百度 AI 去水印](https://image.baidu.com/search/index?tn=baiduimage&word=百度AI图片助手)
- [cloudflare域名代理](https://dash.cloudflare.com/)

## :books: 官方文档

| 技术栈        | 链接                                                                            |
|------------|-------------------------------------------------------------------------------|
| uni-app    | [https://uniapp.dcloud.net.cn/](https://uniapp.dcloud.net.cn/)                |
| Vite（中文）   | [https://cn.vitejs.dev/](https://cn.vitejs.dev/)                              |
| 微信小程序      | [https://developers.weixin.qq.com](https://developers.weixin.qq.com)          |
| TypeScript | 英文 [官方](https://www.typescriptlang.org/) / 中文 [社区](https://www.tsplain.cn/)   |
| VitePress  | [https://vitepress.dev/](https://vitepress.dev/)                              |
| uni-best   | [https://unibest.tech/](https://unibest.tech/)                                |
| Vue DocGen | [https://vue-styleguidist.github.io/](https://vue-styleguidist.github.io.io/) |

## :jigsaw: 教程精选

- [在 VitePress 站点中集成 Gitalk 评论](https://cloud.tencent.com/developer/article/2453691)
- [3D 中国地图省市区三级下钻](https://juejin.cn/post/7365831792428875813)
- [Vue 3 + TS 使用 VueDocGen 自动生成文档](https://blog.csdn.net/billku/article/details/149056009)
[tags.json](..%2F..%2Fdist%2Ftags.json)
## :rocket: uni-app 常用插件

### 1.unplugin-vue-components/vite
> 自动按需导入组件，告别手写 `import`。

[unplugin-vue-components/vite]("https://npmmirror.com/package/unplugin-vue-components/vite")

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