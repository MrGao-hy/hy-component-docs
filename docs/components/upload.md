# Upload 上传组件
> 该组件用于上传文件场景

::: tip 温馨提示
本项目参考了 uView-Plus 开源项目的组件开发方式，基于 Vue 3 和 TypeScript 实现了自定义组件。目前该组件仍处于测试阶段。<br>
感谢 uView-Plus 开源项目及其团队成员的贡献，他们的组件开发思路为本项目提供了宝贵地参考。如果需要了解更多组件开发细节，可以参考uView-Plus的 [upload组件](https://uiadmin.net/uview-plus/components/upload.html) 的代码实现。
:::

## 平台差异说明

| APP(vue) | H5 | 微信小程序 |
|----------|----|-------|
| ✔        | ✔  | ✔     |

## 基本使用示例

```html
<!-- 全局使用 -->
<hy-upload :fileList="list"></hy-upload>
<!-- 单个组件引入 -->
<HyUpload :fileList="list"></HyUpload>
```
```ts
import { HyUpload } from "hy-app"
```

## 上传图片模拟状态

:::code-group
```html [vue]
<template>
    <hy-upload :fileList="list"></hy-upload>
</template>

```
```ts [index.ts]

import { FileVo } from "hy-app";
import { ref } from "vue";

const list = ref<FileVo[]>([
    {
        status: "success",
        message: "上传中",
        url: "https://img0.baidu.com/it/u=3196617431,1263013381&fm=253"
    }
]);

const afterRead = (event: any) => {
    let lists = event.file;
    let a = 0;
    list.value.push({
        status: "loading",
        message: "上传中",
        url: lists[0].url,
        schedule: a
    });
    const timer = setInterval(() => {
        a += 10;
        list.value[0].schedule = a;
    }, 200);
    setTimeout(() => {
        clearInterval(timer);
        list.value = [
            {
                status: "success",
                message: "上传成功",
                url: lists[0].url,
                schedule: 50
            }
        ];
    }, 3000);
}
```
:::


## 上传多张图片

:::code-group
```html [vue]
<hy-upload :fileList="list_1" @afterRead="afterRead_1" multiple></hy-upload>
```

```ts [index.ts]

import { FileVo } from "hy-app";
import { ref } from "vue";

const list = ref<FileVo[]>([]);

const afterRead = (event: any) => {
    let lists = event.file;
    lists.forEach((item) => {
        let a = 0;
        list_1.value.push({
            status: "loading",
            message: "上传中",
            url: item.url,
            schedule: a,
        });
        const index = list_1.value.findIndex((v) => v.url === item.url);
        const timer = setInterval(() => {
            a += 10;
            list_1.value[index].schedule = a;
        }, 300);
        setTimeout(() => {
            clearInterval(timer);
            list_1.value[index] = {
                status: "success",
                message: "上传成功",
                url: item.url,
                schedule: a,
            };
        }, 3000);
    });
}
```
:::

## API

| 参数                | 说明                                                     | 类型                                               | 默认值                         |
|-------------------|--------------------------------------------------------|--------------------------------------------------|-----------------------------|
| fileList          | 显示已上传的文件列表                                             | `array`                                          |                             |
| accept            | 接受的文件类型，file只支持H5（只有微信小程序才支持把accept配置为all、media）       | `all` \| `media` \| `image` \| `file` \| `video` | image                       |
| capture           | 图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头 | `string` \| `Array<'album'\|'camera'>`           | \['album', 'camera']        |
| compressed        | 当accept为video时生效，是否压缩视频，默认为true                        | `boolean`                                        | true	                       |
| camera            | 当accept为video时生效，可选值为back或front                        | `back` \| `front`                                | back                        |
| maxDuration       | 当accept为video时生效，拍摄视频最长拍摄时间，单位秒                        | `number`                                         | 60                          |
| uploadIcon        | 上传区域的图标，只能内置图标                                         | `string`                                         | IconConfig.                 |
| uploadIconColor   | 上传区域的图标的颜色                                             | `string`                                         | -                           |
| useBeforeRead     | 是否启用(显示/隐藏)组件                                          | `boolean`                                        | false                       |
| previewFullImage  | 是否预览图片                                                 | `boolean`                                        | true                        |
| maxCount          | 最大选择图片的数量                                              | `number`                                         | 52                          |
| disabled          | 是否启用(显示/隐藏)组件                                          | `boolean`                                        | false                       |
| imageMode         | 预览上传的图片时的裁剪模式，和image组件mode属性一致                         | `string`                                         | aspectFill                  |
| name              | 标识符，可以在回调函数的第二项参数中获取                                   | `string`                                         | file                        |
| sizeType          | original 原图，compressed 压缩图，默认二者都有，H5无效                 | `Array<'original' \| 'compressed'>`              | \['original', 'compressed'] |
| multiple          | 是否开启图片多选，部分安卓机型不支持                                     | `boolean`                                        | false                       |
| deletable         | 是否显示删除图片的按钮                                            | `boolean`                                        | true                        |
| maxSize           | 选择单个文件的最大大小，单位B(byte)，默认不限制                            | `number`                                         | Number.MAX_VALUE            |
| uploadText        | 上传区域的提示文字                                              | `string`                                         | -                           |
| width             | 内部预览图片区域和选择图片按钮的区域宽度，单位rpx，不能是百分比，或者auto               | `string` \| `number`                             | 80                          |
| height            | 内部预览图片区域和选择图片按钮的区域高度，单位rpx，不能是百分比，或者auto               | `string` \| `number`                             | 80                          |
| previewImage      | 是否在上传完成后展示预览图                                          | `boolean`                                        | true                        |
| autoDelete        | 自动删除无需手动@delete处理                                      | `boolean`                                        | false                       |
| autoUpload        | 自动上传无需@afterRead中处理                                    | `boolean`                                        | false                       |
| autoUploadApi     | 自动上传的接口                                                | `string`                                         | -                           |
| autoUploadDriver  | 自动上传驱动                                                 | `string`                                         | local                       |
| autoUploadAuthUrl | 自动上传OSS模式下，授权接口                                        | `string`                                         | -                           |
| autoUploadHeader  | 自动上传模式下，携带的额外header，一般为比如Authorization等。               | `object`                                         | -                           |
| getVideoThumb     | 视频上传后是否获取封面图                                           | `boolean`                                        | false                       |


## fileList

| 参数        | 说明         | 类型                             | 默认值 |
|-----------|------------|--------------------------------|-----|
| url       | 上传文件本地地址链接 | `string`                       | -   |
| type      | 上传文件类型     | `image`\|`video`\|`file`       | -   |
| thumb     | 上传文件本地地址链接 | `string`                       | -   |
| size      | 文件大小       | `number`                       | -   |
| isVideo   | 是否视频       | `boolean`                      | -   |
| isImage   | 是否图片       | `boolean`                      | -   |
| deletable | 是否显示删除按钮   | `boolean`                      | -   |
| status    | 上传时候状态     | `loading`\|`failed`\|`success` | -   |
| message   | 提示信息       | `string`                       | -   |
| schedule  | 进度条        | `string` \| `number`           | -   |


## Events

| 事件名          | 说明           | 回调参数                                                     |
|--------------|--------------|----------------------------------------------------------|
| afterRead    | 读取后的处理函数     | (file, lists, name)，错误信息                                 |
| beforeRead   | 读取前的处理函数     | (file, lists, name)，错误信息                                 |
| oversize	    | 图片大小超出最大允许大小 | (file, lists, name), name为通过props传递的index参数              |
| clickPreview | 全屏预览图片时触发    | (url, lists, name)，url为当前选中的图片地址，index为通过props传递的index参数 |
| delete       | 删除图片         | 传递index 回调 event 参数 包含index，file                         |

## Slots

| 插槽名     | 说明 | 接收值 |
|---------|----|-----|
| default | -  | -   |
| trigger | -  | -   |

<demo-model url="pages/components/upload/upload"></demo-model>
