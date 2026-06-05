# Upload 上传组件
> 该组件用于上传文件场景，支持图片、视频等多种文件类型的上传

## :pushpin:平台差异说明

| APP(vue) | H5 | 微信小程序 | 支付宝小程序 |
|----------|----|-------|--------|
| ✔        | ✔  | ✔     | ✔      |

## :japanese_castle:基本使用示例

```html
<!-- 全局使用 -->
<hy-upload :fileList="list"></hy-upload>
```

### 基础上传

:::code-group
```html [vue]
<template>
    <hy-upload :fileList="list" @afterRead="afterRead"></hy-upload>
</template>
```

```ts [index.ts]
import { ref } from "vue";
import type { FileVo } from "@/package/components/hy-upload/typing";

const list = ref<FileVo[]>([]);

const afterRead = (event: any) => {
    const file = event.file;
    list.value.push({
        status: 'loading',
        message: '上传中',
        url: file.url,
        schedule: 0
    });
    // 模拟上传进度
    let progress = 0;
    const timer = setInterval(() => {
        progress += 10;
        list.value[0].schedule = progress;
        if (progress >= 100) {
            clearInterval(timer);
            list.value[0].status = 'success';
            list.value[0].message = '上传成功';
        }
    }, 200);
}
```
:::

### 限制上传数量

通过`maxCount`设置最大上传数量，默认52张。

```html
<hy-upload :fileList="list" :maxCount="3" @afterRead="afterRead"></hy-upload>
```

### 多张图片上传

设置`multiple`开启多选模式，部分安卓机型不支持。

:::code-group
```html [vue]
<hy-upload :fileList="list" multiple @afterRead="afterRead"></hy-upload>
```

```ts [index.ts]
import { ref } from "vue";
import type { FileVo } from "@/package/components/hy-upload/typing";
import { isArray } from "@/package";

const list = ref<FileVo[]>([]);

const afterRead = (event: any) => {
    const files = event.file;
    if (isArray(files)) {
        files.forEach((item) => {
            list.value.push({
                status: 'loading',
                message: '上传中',
                url: item.url,
                schedule: 0
            });
            // 模拟单个文件上传
            const index = list.value.findIndex(v => v.url === item.url);
            let progress = 0;
            const timer = setInterval(() => {
                progress += 10;
                list.value[index].schedule = progress;
                if (progress >= 100) {
                    clearInterval(timer);
                    list.value[index].status = 'success';
                    list.value[index].message = '上传成功';
                }
            }, 200);
        });
    }
}
```
:::

### 限制文件大小

通过`maxSize`设置单个文件的最大大小，单位为字节（byte）。

```html
<template>
    <hy-upload 
        :fileList="list" 
        :maxSize="500000" 
        @afterRead="afterRead"
        @oversize="onOversize"
    ></hy-upload>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FileVo } from "@/package/components/hy-upload/typing";

const list = ref<FileVo[]>([]);

const afterRead = (event) => {
    // 处理上传逻辑
};

const onOversize = () => {
    uni.showToast({
        title: '图片超出500KB限制',
        icon: 'none'
    });
}
</script>
```

### 上传视频

设置`accept="video"`限制只上传视频文件。

```html
<template>
    <hy-upload 
        :fileList="list" 
        accept="video"
        :maxDuration="30"
        @afterRead="afterRead"
    ></hy-upload>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FileVo } from "@/package/components/hy-upload/typing";

const list = ref<FileVo[]>([]);

const afterRead = (event) => {
    const file = event.file as FileVo;
    list.value.push({
        type: 'video',
        status: 'success',
        message: '上传成功',
        url: file.url
    });
}
</script>
```

### 自定义上传按钮

使用默认插槽自定义上传按钮样式。

```html
<template>
    <hy-upload :fileList="list" @afterRead="afterRead">
        <view class="custom-upload-btn">
            <hy-icon name="plus" color="#999" size="32"></hy-icon>
            <text class="custom-upload-text">点击上传</text>
        </view>
    </hy-upload>
</template>

<style scoped lang="scss">
.custom-upload-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 160rpx;
    height: 160rpx;
    border: 2rpx dashed #d9d9d9;
    border-radius: 12rpx;

    .custom-upload-text {
        font-size: 24rpx;
        color: #999;
        margin-top: 8rpx;
    }
}
</style>
```

### 自定义触发区域

使用`trigger`插槽自定义触发上传的区域。

```html
<template>
    <hy-upload :fileList="list" @afterRead="afterRead">
        <template #trigger>
            <view class="custom-trigger">
                <hy-icon name="upload" color="#2979ff" size="48"></hy-icon>
                <text class="custom-trigger-text">拖拽或点击上传</text>
            </view>
        </template>
    </hy-upload>
</template>

<style scoped lang="scss">
.custom-trigger {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200rpx;
    border: 2rpx dashed #2979ff;
    border-radius: 12rpx;
    background: rgba(41, 121, 255, 0.05);

    .custom-trigger-text {
        font-size: 28rpx;
        color: #2979ff;
        margin-top: 12rpx;
    }
}
</style>
```

### 禁用状态

设置`disabled`禁用上传功能。

```html
<template>
    <hy-upload :fileList="list" disabled>
        <view class="disabled-btn">
            <hy-icon name="lock" color="#ccc" size="24"></hy-icon>
            <text class="disabled-text">上传已禁用</text>
        </view>
    </hy-upload>
</template>
```

### 隐藏删除按钮

设置`deletable="false"`隐藏删除按钮。

```html
<hy-upload :fileList="list" :deletable="false" @afterRead="afterRead"></hy-upload>
```

### 自定义尺寸

通过`width`和`height`自定义上传区域的尺寸。

```html
<hy-upload 
    :fileList="list" 
    :width="120" 
    :height="120" 
    upload-text="大尺寸"
    @afterRead="afterRead"
></hy-upload>
```

### 上传失败状态

设置`status="failed"`显示上传失败状态。

```html
<template>
    <hy-upload :fileList="list"></hy-upload>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FileVo } from "@/package/components/hy-upload/typing";

const list = ref<FileVo[]>([
    {
        status: 'failed',
        message: '上传失败',
        url: ''
    }
]);
</script>
```

### 图片裁剪模式

通过`imageMode`设置预览图片的裁剪模式，与image组件的mode属性一致。

```html
<hy-upload :fileList="list" imageMode="aspectFit"></hy-upload>
```

### 控制预览

通过`previewFullImage`控制是否显示全屏预览功能。

```html
<hy-upload :fileList="list" :previewFullImage="false"></hy-upload>
```

### 选择模式

通过`capture`设置图片或视频的拾取模式。

```html
<!-- 仅从相册选择 -->
<hy-upload :fileList="list" :capture="['album']"></hy-upload>

<!-- 仅从相机拍摄 -->
<hy-upload :fileList="list" :capture="['camera']"></hy-upload>

<!-- 相册和相机都支持 -->
<hy-upload :fileList="list" :capture="['album', 'camera']"></hy-upload>
```

### 原图/压缩图

通过`sizeType`控制所选图片的尺寸类型。

```html
<!-- 只选择原图 -->
<hy-upload :fileList="list" :sizeType="['original']"></hy-upload>

<!-- 只选择压缩图 -->
<hy-upload :fileList="list" :sizeType="['compressed']"></hy-upload>

<!-- 原图和压缩图都支持 -->
<hy-upload :fileList="list" :sizeType="['original', 'compressed']"></hy-upload>
```

## API
### Upload Props

| 参数               | 说明                                                     | 类型                               | 默认值                        |
|------------------|--------------------------------------------------------|----------------------------------|----------------------------|
| accept           | 接受的文件类型，file只支持H5（只有微信小程序才支持把accept配置为all、media）       | `string`                         | image                      |
| extension        | 根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。                           | `string[]`                       | []                         |
| capture          | 图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头 | `('album' \| 'camera')[]`        | ['album', 'camera']        |
| compressed       | 当accept为video时生效，是否压缩视频                                | `boolean`                        | true                       |
| camera           | 当accept为video时生效，可选值为back或front                        | `'back' \| 'front'`              | back                       |
| maxDuration      | 当accept为video时生效，拍摄视频最长拍摄时间，单位秒                        | `number`                         | 60                         |
| uploadIcon       | 上传区域的图标，只能内置图标                                         | `string`                         | IconConfig.UPLOAD          |
| uploadIconColor  | 上传区域的图标的颜色                                             | `string`                         | #D3D4D6                    |
| useBeforeRead    | 是否开启文件读取前事件                                            | `boolean`                        | false                      |
| previewFullImage | 是否显示组件自带的图片预览功能                                        | `boolean`                        | true                       |
| maxCount         | 最大上传数量                                                 | `number`                         | 52                         |
| disabled         | 是否禁用组件                                                 | `boolean`                        | false                      |
| imageMode        | 预览上传的图片时的裁剪模式，和image组件mode属性一致                         | `string`                         | aspectFill                 |
| name             | 标识符，可以在回调函数的第二项参数中获取                                   | `string`                         | ''                         |
| sizeType         | original 原图，compressed 压缩图，默认二者都有，H5无效                 | `('original' \| 'compressed')[]` | ['original', 'compressed'] |
| multiple         | 是否开启图片多选，部分安卓机型不支持                                     | `boolean`                        | false                      |
| deletable        | 是否显示删除图片的按钮                                            | `boolean`                        | true                       |
| maxSize          | 选择单个文件的最大大小，单位B(byte)，默认不限制                            | `number`                         | Number.MAX_VALUE           |
| fileList         | 显示已上传的文件列表                                             | `FileVo[]`                       | []                         |
| uploadText       | 上传区域的提示文字                                              | `string`                         | ''                         |
| width            | 内部预览图片区域和选择图片按钮的区域宽度，单位rpx                             | `string \| number`               | 80                         |
| height           | 内部预览图片区域和选择图片按钮的区域高度，单位rpx                             | `string \| number`               | 80                         |
| beforeRead       | 读取前的处理函数                                               | `(file, detail) => void`         | -                          |
| afterRead        | 读取后的处理函数                                               | `(file, detail) => void`         | -                          |
| customStyle      | 自定义需要用到的外部样式                                           | `CSSProperties`                  | -                          |

## fileList 数据结构

| 参数        | 说明         | 类型                                   | 默认值 |
|-----------|------------|--------------------------------------|-----|
| url       | 上传文件本地地址链接 | `string`                             | -   |
| type      | 上传文件类型     | `'image' \| 'video' \| 'file'`       | -   |
| thumb     | 缩略图地址      | `string`                             | -   |
| size      | 文件大小       | `number`                             | -   |
| isVideo   | 是否视频       | `boolean`                            | -   |
| isImage   | 是否图片       | `boolean`                            | -   |
| deletable | 是否显示删除按钮   | `boolean`                            | -   |
| status    | 上传状态       | `'loading' \| 'failed' \| 'success'` | -   |
| message   | 提示信息       | `string`                             | -   |
| schedule  | 上传进度       | `string \| number`                   | -   |

### Events

| 事件名          | 说明           | 回调参数                                                                                |
|--------------|--------------|-------------------------------------------------------------------------------------|
| afterRead    | 文件读取后的处理函数   | `{ file: FileVo \| FileVo[], name: string, index: number }`                         |
| beforeRead   | 文件读取前的处理函数   | `{ file: FileVo \| FileVo[], name: string, index: number, callback: (ok) => void }` |
| oversize     | 文件大小超出最大允许大小 | `{ file: FileVo \| FileVo[], name: string, index: number }`                         |
| clickPreview | 全屏预览图片时触发    | `{ file: FileVo, name: string, index: number }`                                     |
| delete       | 删除图片时触发      | `{ file: FileVo, name: string, index: number }`                                     |
| error        | 上传错误时触发      | `error: any`                                                                        |

### Slots

| 插槽名     | 说明         |
|---------|------------|
| default | 自定义上传按钮内容  |
| trigger | 自定义触发上传的区域 |

### Typings

:::details 类型说明
```ts
export interface FileVo {
    /** 上传文件本地地址链接 */
    url?: string
    /** 上传文件类型 */
    type?: 'image' | 'video' | 'file'
    /** 缩略图地址 */
    thumb?: string
    /** 文件大小 */
    size?: number
    /** 是否视频 */
    isVideo?: boolean
    /** 是否图片 */
    isImage?: boolean
    /** 是否显示删除按钮 */
    deletable?: boolean
    /** 上传状态 */
    status?: 'loading' | 'failed' | 'success'
    /** 提示信息 */
    message?: string
    /** 上传进度 */
    schedule?: string | number
}

export type ReadFunctionVo = (file: FileVo, detail: { name: string; index: number }) => void

export interface UploadFileParams {
    file: FileVo | FileVo[]
    name: string
    index: number
}
```
:::

<demo-model url="pages-design/upload/upload"></demo-model>

[^1]: all：全部类型；media：媒体；image：图片类型；file：文件类型；video：视频类型；
