# Parse 富文本解析器组件
> 该组件一般用于富文本解析场景，比如解析文章内容，商品详情，带原生HTML标签的各类字符串等，此组件和uni-app官方的rich-text组件功能有重合之处，但是也有不同的地方。

::: tip 温馨提示
此组件源于开源的优秀作品[mp-html](https://github.com/jin-yufeng/mp-html)，本文档只对重要的功能进行介绍，如果需要更详细的说明，请参考[mp-html官方文档](https://jin-yufeng.github.io/mp-html/#/overview/feature)。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-parse :content="content"></hy-parse>
<!-- 单个组件引入 -->
<HyParse :content="content"></HyParse>
```
```ts
import { HyParse } from "hy-app"

const content = `<p>露从今夜白，月是故乡明</p>
<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" alt="Image Description" />`
```

## 复杂示例
:::code-group
```html [vue]
<template>
    <hy-parse :content="parseContent" :tag-style="tagStyle" lazy-load scroll-table selectable use-anchor></hy-parse>
</template>

<script setup>
    import parseContent from "./content.js";

    const tagStyle = {
        table: 'box-sizing: border-box; border-top: 1px solid #dfe2e5; border-left: 1px solid #dfe2e5;',
        th: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
        td: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
        li: 'margin: 5px 0;'
    }
</script>
```

```javascript [content.js]
/**
 * @fileoverview 用于测试的 html 内容
 */
export default `<title>富文本示例</title>
<div>
  <section style="text-align: center; margin: 0px auto;">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">表格</span>
    </section>
  </section>
  <section style="margin-top: 1.5em;">
    <table width="100%" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>标题 1</th>
          <th>标题 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">内容 1</td>
          <td align="center">内容 2</td>
        </tr>
        <tr style="background-color: #f6f8fa;">
          <td align="center">内容 3</td>
          <td align="center"><a>链接</a></td>    
        </tr>
        <tr>
          <td align="center">内容 5</td>
          <td align="center">内容 6</td>
        </tr>
      </tbody>
    </table>
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">普通表格</div>
  </section>
  <section style="margin-top: 1.5em;">
    <table width="500px" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>标题 1</th>
          <th>标题 2</th>
          <th>标题 3</th>
          <th>标题 4</th>
          <th>标题 5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">内容 1</td>
          <td align="center">内容 2</td>
          <td align="center">内容 3</td>
          <td align="center">内容 4</td>
          <td align="center">内容 5</td>
        </tr>
        <tr style="background-color: #f6f8fa;">
          <td align="center"><a>链接</a></td>
          <td align="center">内容 7</td>
          <td align="center">内容 8</td>
          <td align="center">内容 9</td>
          <td align="center">内容 10</td>
        </tr>
        <tr>
          <td align="center">内容 11</td>
          <td align="center">内容 12</td>
          <td align="center">内容 13</td>
          <td align="center">内容 14</td>
          <td align="center">内容 15</td>
        </tr>
      </tbody>
    </table>
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">长表格，可以单独横向滚动</div>
  </section>
  <section style="margin-top: 1.5em;">
    <table width="100%" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th align="center">标题 1</th>
          <th align="center">标题 2</th>
          <th align="center">标题 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center" colspan="2">内容 1</td>
          <td align="center" rowspan="2">内容 2</td>
        </tr>
        <tr>
          <td align="center" rowspan="2">内容 3</td>
          <td align="center">内容 4</td>
        </tr>
        <tr>
          <td align="center" colspan="2">内容 5</td>
        </tr>
        <tr>
          <td align="center">内容 6</td>
          <td align="center">内容 7</td>
          <td align="center"><a>链接</a></td>
        </tr>
      </tbody>
    </table>
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">含有合并单元格的表格</div>
  </section>
  <section id="list" style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">列表</span>
    </section>
  </section>
  <section style="margin-top: 1.5em;">
    <ol style="margin-bottom: 1.5em;">
      <li>这是第一条列表项</li>
      <li>这是第二条列表项</li>
      <li>这是第三条 <a>链接</a></li>
    </ol>
    <ol type="A" style="margin-bottom: 1.5em;">
      <li>这是第一条列表项</li>
      <li>这是第二条列表项</li>
      <li>这是第三条 <a>链接</a></li>
    </ol>
    <ol type="I" style="margin-bottom: 1.5em;">
      <li>这是第一条列表项</li>
      <li>这是第二条列表项</li>
      <li>这是第三条 <a>链接</a></li>
    </ol>
    <ul>
      <li>第一级无序列表</li>
      <li>第一级无序列表
        <ul>
          <li>第二级无序列表</li>
          <li>第二级无序列表
            <ul>
              <li>第三级无序列表</li>
              <li>第三级 <a>链接</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>    
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">文本</span>
    </section>
  </section>
  <section style="margin-top: 1.5em;">
    <p style="margin-bottom: 1em;">
      <ruby>
        拼<rp>(</rp><rt>pin</rt><rp>)</rp>
        音<rp>(</rp><rt>yin</rt><rp>)</rp>
      </ruby>
      &nbsp;&nbsp;<i>斜体</i>
      &nbsp;&nbsp;<b>粗体</b>
      &nbsp;&nbsp;上标<sup>1</sup>
      &nbsp;&nbsp;下标<sub>2</sub>
    </p>
    <p style="margin-bottom: 1em;">
      <span style="text-decoration: overline;">上划线</span>
      &nbsp;&nbsp;<s>中划线</s>
      &nbsp;&nbsp;<u>下划线</u>
    </p>
    <p>
      <big>大一号</big>
      &nbsp;&nbsp;<span>正常</span>
      &nbsp;&nbsp;<small>小一号</small>
    </p>
    <h2 style="margin-top: 0.5em;">大标题</h2>
    <h3 style="margin-top: 0.5em;">中标题</h3>
    <h4 style="margin-top: 0.5em;">小标题</h4>
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">链接</span>
    </section>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="#">跳转到顶部</a>&nbsp;&nbsp;&nbsp;<a href="#list">跳转到列表</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">锚点链接，将滚动到对应位置</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="https://github.com/jin-yufeng/mp-html">外部链接</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">外部链接，将复制链接</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="/pages/components/icon/icon">内部链接</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">内部链接，将跳转页面</div>
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">图片</span>
    </section>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <img src="https://img1.baidu.com/it/u=1103489443,5694801&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=833" original-src="/demo.jpg?sign=af7082bed28711177bd952dbab67373e&t=1609059255">
    <div style="font-size: 12px; color: gray; margin-top: 5px;">点击预览高清图</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <svg width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;">
      <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
      </path>
    </svg>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">svg 动画</div>
  </section>
</div>`

```
:::

## API

| 参数             | 说明                               | 类型              | 默认值   |
|----------------|----------------------------------|-----------------|-------|
| content        | 要显示的富文本字符串                       | `string`        | -     |
| copyLink       | 是否允许外部链接被点击时自动复制                 | `boolean`       | true  |
| domain         | 主域名，设置后将给链接自动拼接上主域名或协议名          | `string`        | -     |
| errorImg       | 图片出错时的占位图链接                      | `string`        | -     |
| lazyLoad       | 是否开启图片懒加载，nvue不支持此属性             | `boolean`       | true  |
| loadingImg     | 图片加载完成前的占位图，详见 占位图               | `string`        | -     |
| pauseVideo     | 是否在播放一个视频时自动暂停其它视频               | `boolean`       | true  |
| previewImg     | 是否开启图片被点击时自动预览                   | `boolean`       | true  |
| scrollTable    | 是否自动给 table 添加一个滚动层（使表格可以单独横向滚动） | `boolean`       | false |
| selectable     | 是否开启长按复制内容                       | `boolean`       | false |
| setTitle       | 是否自动将 title 标签的内容设置到页面标题         | `boolean`       | true  |
| showImgMenu    | 是否开启图片被长按时显示菜单                   | `boolean`       | true  |
| useAnchor      | 是否使用页面内锚点                        | `boolean`       | false |
| tagStyle       | 设置标签的默认样式                        | `CSSProperties` | -     |
| containerStyle | 样式设置代替bgColor                    | `CSSProperties` | -     |

## Events

| 事件名     | 说明          | 回调参数                                                                             |
|---------|-------------|----------------------------------------------------------------------------------|
| load    | dom 加载完成时触发 | 所有节点被添加到节点树中时触发，无返回值，可以调用 api                                                    |
| ready   | 渲染完成时触发     | 返回 boundingClientRect 的查询结果（包含宽高、位置等信息），所有图片（除懒加载）加载完成时才会触发，图片较大时可能 延时较长         |
| error   | 出错时触发       | 返回一个 object，其中 source 是错误来源，errMsg 为错误信息，target 包含出错标签的具体信息                      |
| imgTap  | 图片被点击时触发    | 返回一个 object，其中 src 是图片链接，ignore 是一个函数，在事件中调用将不进行预览；可用于阻挡 onShow 的调用              |
| linkTap | 在链接被点击时触发   | 返回一个 object，其中包含了被点击的 a 标签的所有属性，ignore 是一个函数，在事件中调用后将不自动跳转/复制；可在该事件中进行下载文档等进一步操作 |

<demo-model url="pages/components/parse/parse"></demo-model>