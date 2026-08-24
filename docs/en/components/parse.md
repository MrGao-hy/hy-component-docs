# Parse Rich Text Parser Component

> This component is generally used for rich text parsing scenarios, such as parsing article content, product details, and various strings containing native HTML tags. It overlaps in functionality with uni-app's official rich-text component, but also has some differences.

::: tip Friendly Tip

This component originates from the excellent open-source project [mp-html](https://github.com/jin-yufeng/mp-html). This documentation only introduces the key features. For more detailed information, please refer to the [official mp-html documentation](https://jin-yufeng.github.io/mp-html/#/overview/feature).

:::

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | -------------------- | ------------------- |
| ✔        | ✔   | ✔                    | ✔                   |

## :japanese_castle: Basic Usage Example

```html
<!-- Global usage -->
<hy-parse :content="content"></hy-parse>
<!-- Import in a single component -->
<HyParse :content="content"></HyParse>
```

```ts
import { HyParse } from '@hy-app/ui';

const content = `<p>Dew turns white from tonight on; the moon shines brightest over my hometown</p>
<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" alt="Image Description" />`;
```

## Complex Example

::: code-group

```html [vue]
<template>
    <hy-parse
        :content="parseContent"
        :tag-style="tagStyle"
        lazy-load
        scroll-table
        selectable
        use-anchor
    ></hy-parse>
</template>

<script setup>
    import parseContent from './content.js';

    const tagStyle = {
        table: 'box-sizing: border-box; border-top: 1px solid #dfe2e5; border-left: 1px solid #dfe2e5;',
        th: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
        td: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
        li: 'margin: 5px 0;',
    };
</script>
```

```javascript [content.js]
/**
 * @fileoverview HTML content used for testing
 */
export default `<title>Rich Text Example</title>
<div>
  <section style="text-align: center; margin: 0px auto;">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">Table</span>
    </section>
  </section>
  <section style="margin-top: 1.5em;">
    <table width="100%" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">Content 1</td>
          <td align="center">Content 2</td>
        </tr>
        <tr style="background-color: #f6f8fa;">
          <td align="center">Content 3</td>
          <td align="center"><a>Link</a></td>
        </tr>
        <tr>
          <td align="center">Content 5</td>
          <td align="center">Content 6</td>
        </tr>
      </tbody>
    </table>
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">Normal table</div>
  </section>
  <section style="margin-top: 1.5em;">
    <table width="500px" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
          <th>Header 4</th>
          <th>Header 5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">Content 1</td>
          <td align="center">Content 2</td>
          <td align="center">Content 3</td>
          <td align="center">Content 4</td>
          <td align="center">Content 5</td>
        </tr>
        <tr style="background-color: #f6f8fa;">
          <td align="center"><a>Link</a></td>
          <td align="center">Content 7</td>
          <td align="center">Content 8</td>
          <td align="center">Content 9</td>
          <td align="center">Content 10</td>
        </tr>
        <tr>
          <td align="center">Content 11</td>
          <td align="center">Content 12</td>
          <td align="center">Content 13</td>
          <td align="center">Content 14</td>
          <td align="center">Content 15</td>
        </tr>
      </tbody>
    </table>
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">Long table, can scroll horizontally on its own</div>
  </section>
  <section style="margin-top: 1.5em;">
    <table width="100%" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th align="center">Header 1</th>
          <th align="center">Header 2</th>
          <th align="center">Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center" colspan="2">Content 1</td>
          <td align="center" rowspan="2">Content 2</td>
        </tr>
        <tr>
          <td align="center" rowspan="2">Content 3</td>
          <td align="center">Content 4</td>
        </tr>
        <tr>
          <td align="center" colspan="2">Content 5</td>
        </tr>
        <tr>
          <td align="center">Content 6</td>
          <td align="center">Content 7</td>
          <td align="center"><a>Link</a></td>
        </tr>
      </tbody>
    </table>
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">Table with merged cells</div>
  </section>
  <section id="list" style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">List</span>
    </section>
  </section>
  <section style="margin-top: 1.5em;">
    <ol style="margin-bottom: 1.5em;">
      <li>This is the first list item</li>
      <li>This is the second list item</li>
      <li>This is the third <a>link</a></li>
    </ol>
    <ol type="A" style="margin-bottom: 1.5em;">
      <li>This is the first list item</li>
      <li>This is the second list item</li>
      <li>This is the third <a>link</a></li>
    </ol>
    <ol type="I" style="margin-bottom: 1.5em;">
      <li>This is the first list item</li>
      <li>This is the second list item</li>
      <li>This is the third <a>link</a></li>
    </ol>
    <ul>
      <li>First-level unordered list</li>
      <li>First-level unordered list
        <ul>
          <li>Second-level unordered list</li>
          <li>Second-level unordered list
            <ul>
              <li>Third-level unordered list</li>
              <li>Third-level <a>link</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">Text</span>
    </section>
  </section>
  <section style="margin-top: 1.5em;">
    <p style="margin-bottom: 1em;">
      <ruby>
        Pinyin<rp>(</rp><rt>pin-yin</rt><rp>)</rp>
      </ruby>
      &nbsp;&nbsp;<i>Italic</i>
      &nbsp;&nbsp;<b>Bold</b>
      &nbsp;&nbsp;Superscript<sup>1</sup>
      &nbsp;&nbsp;Subscript<sub>2</sub>
    </p>
    <p style="margin-bottom: 1em;">
      <span style="text-decoration: overline;">Overline</span>
      &nbsp;&nbsp;<s>Strikethrough</s>
      &nbsp;&nbsp;<u>Underline</u>
    </p>
    <p>
      <big>One size larger</big>
      &nbsp;&nbsp;<span>Normal</span>
      &nbsp;&nbsp;<small>One size smaller</small>
    </p>
    <h2 style="margin-top: 0.5em;">Large heading</h2>
    <h3 style="margin-top: 0.5em;">Medium heading</h3>
    <h4 style="margin-top: 0.5em;">Small heading</h4>
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">Links</span>
    </section>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="#">Jump to top</a>&nbsp;&nbsp;&nbsp;<a href="#list">Jump to list</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">Anchor link, will scroll to the corresponding position</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="https://github.com/jin-yufeng/mp-html">External link</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">External link, the link will be copied</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="/pages-design/icon/icon">Internal link</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">Internal link, will navigate to the page</div>
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">Images</span>
    </section>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <img src="https://img1.baidu.com/it/u=1103489443,5694801&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=833" original-src="/demo.jpg?sign=af7082bed28711177bd952dbab67373e&t=1609059255">
    <div style="font-size: 12px; color: gray; margin-top: 5px;">Click to preview the HD image</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <svg width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;">
      <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
      </path>
    </svg>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">SVG animation</div>
  </section>
</div>`;
```

:::

## API

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| content | The rich text string to display | `string` | - |
| copyLink | Whether external links are automatically copied when clicked | `boolean` | true |
| domain | Main domain; when set, the main domain or protocol name is automatically prepended to links | `string` | - |
| errorImg | Placeholder image link used when an image fails to load | `string` | - |
| lazyLoad | Whether to enable lazy loading for images; nvue does not support this property | `boolean` | true |
| loadingImg | Placeholder image shown before an image finishes loading; see Placeholder Image for details | `string` | - |
| pauseVideo | Whether to automatically pause other videos when one video is played | `boolean` | true |
| previewImg | Whether images are automatically previewed when clicked | `boolean` | true |
| scrollTable | Whether to automatically add a scrolling layer to tables (allows tables to scroll horizontally on their own) | `boolean` | false |
| selectable | Whether to enable copying content via long press | `boolean` | false |
| setTitle | Whether to automatically set the content of the title tag as the page title | `boolean` | true |
| showImgMenu | Whether to show a menu when an image is long-pressed | `boolean` | true |
| useAnchor | Whether to use in-page anchors | `boolean` | false |
| tagStyle | Set default styles for tags | `CSSProperties` | - |
| containerStyle | Style setting that replaces bgColor | `CSSProperties` | - |

## Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| load | Triggered when the DOM finishes loading | Triggered when all nodes have been added to the node tree; no return value; APIs can be called |
| ready | Triggered when rendering completes | Returns the boundingClientRect query result (including width, height, position, etc.); only triggered after all images (except lazy-loaded ones) have finished loading; may be delayed for large images |
| error | Triggered when an error occurs | Returns an object where source is the error source, errMsg is the error message, and target contains details about the tag where the error occurred |
| imgTap | Triggered when an image is clicked | Returns an object where src is the image link and ignore is a function; calling it within the event will skip the preview; can be used to block the onShow call |
| linkTap | Triggered when a link is clicked | Returns an object containing all attributes of the clicked a tag; ignore is a function; calling it within the event will prevent automatic navigation/copying; further operations such as downloading documents can be performed in this event |

<demo-model url="pages-design/parse/parse"></demo-model>