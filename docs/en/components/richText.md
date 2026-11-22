# RichText Rich Text Parser Component

> This component is generally used for rich text parsing scenarios, such as parsing article content, product details, various strings containing native HTML tags, etc. Its functionality overlaps with the official uni-app rich-text component, but there are also differences.

::: tip Friendly Reminder

This component is implemented based on the parser of the excellent open-source work [mp-html](https://github.com/jin-yufeng/mp-html) v2.5.2, and is rendered by the native rich-text. This component only retains the commonly used core capabilities; some mp-html extension configurations are not included. Functionality is subject to the API in this document.

:::

## :pushpin:Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :japanese_castle:Basic Usage Example

```html
<!-- Global usage -->
<hy-rich-text :content="content"></hy-rich-text>
<!-- Import as a single component -->
<HyRichText :content="content"></HyRichText>
```

```ts
import { HyRichText } from '@hy-app/ui';

const content = `<p>Dew turns white from this night on; the moon shines bright over my hometown</p>
<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" alt="Image Description" />`;
```

## Complex Example

::: code-group

```html [vue]
<template>
    <hy-rich-text :content="parseContent" :tag-style="tagStyle" selectable></hy-rich-text>
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
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">Long table, can scroll horizontally independently</div>
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
        拼<rp>(</rp><rt>pin</rt><rp>)</rp>
        音<rp>(</rp><rt>yin</rt><rp>)</rp>
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
      <big>Larger</big>
      &nbsp;&nbsp;<span>Normal</span>
      &nbsp;&nbsp;<small>Smaller</small>
    </p>
    <h2 style="margin-top: 0.5em;">Large Heading</h2>
    <h3 style="margin-top: 0.5em;">Medium Heading</h3>
    <h4 style="margin-top: 0.5em;">Small Heading</h4>
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">Link</span>
    </section>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="#">Jump to top</a>&nbsp;&nbsp;&nbsp;<a href="#list">Jump to list</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">Anchor link, will scroll to the corresponding position</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="https://github.com/jin-yufeng/mp-html">External link</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">External link, will copy the link</div>
  </section>
  <section style="margin-top: 1.5em; text-align: center;">
    <a href="/pages-design/icon/icon">Internal link</a>
    <div style="font-size: 12px; color: gray; margin-top: 5px;">Internal link, will navigate to the page</div>
  </section>
  <section style="text-align: center; margin: 0px auto; margin-top: 2em">
    <section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;">
      <span style="font-size: 18px; color: #595959;">Image</span>
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

### Instance Methods

- After obtaining the component instance via `ref`, you can call `setContent` to set/append content, `getText` to get plain text, and `getRect` to get the content size

```vue
<template>
    <hy-rich-text ref="richTextRef" :content="content"></hy-rich-text>
    <button @click="onAppend">Append Content at the End</button>
    <button @click="onQuery">Get Text and Size</button>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const richTextRef = ref();

    /** Append a section of html at the end */
    const onAppend = () => {
        richTextRef.value?.setContent('<p>Appended content</p>', true);
    };

    /** Get plain text content and content size */
    const onQuery = () => {
        console.log(richTextRef.value?.getText());
        richTextRef.value?.getRect().then((rect) => {
            console.log(rect.width, rect.height);
        });
    };
</script>
```

## API

### RichText Props

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| content | The html string to render | `string` | `''` |
| containerStyle | Style of the container | `string` | `''` |
| domain | Main domain, used to concatenate links | `string` | `''` |
| selectable | Whether to enable long-press copy (passing `'force'` forces it on for iOS) | `boolean \| string` | false |
| setTitle | Whether to set the content of the title tag as the page title | `boolean \| string` | true |
| tagStyle | Default styles of tags | `Record<string, string>` | `{}` |
| customClass | Custom external class name | `string` | `''` |
| customStyle | Define the external styles to be used | `string \| Record<string, string>` | `''` |

## Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| load | Triggered when the DOM structure has finished loading | - |
| ready | Triggered when the rendered height is stable (no height change within 350ms) | `rect: Partial<HyRichTextRect>`, content size and position |
| click | Triggered when the container is clicked | - |
| tap | Triggered when the container is clicked | - |

### Methods

The following methods can be called after obtaining the component instance via `ref`.

| Method Name | Description | Type |
| --- | --- | --- |
| setContent | Set content; appends to the end when `append` is `true` | `(content: string, append?: boolean) => void` |
| getText | Get text content | `(nodes?: any[]) => string` |
| getRect | Get content size and position | `() => Promise<HyRichTextRect>` |

`HyRichTextRect` structure:

| Field                       | Type     | Description     |
| --------------------------- | -------- | --------------- |
| left / right / top / bottom | `number` | Content position |
| width / height              | `number` | Content size     |

### Slots

| Slot Name | Description                            | Accepted Value |
| --------- | -------------------------------------- | -------------- |
| default   | Default slot, used for custom content  | -              |

<demo-model url="pages-design/richText/richText"></demo-model>