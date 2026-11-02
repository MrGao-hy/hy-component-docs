# Button Component

> This component is internally implemented as a secondary encapsulation based on the uni-app basic button component

## :pushpin: Platform Differences

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ---------- | ------------ |
| ✔        | ✔   | ✔          | ✔            |

## :warning: Notes

### 1. Click Event

Please use the `@click` event for button clicks, **do not use `@tap`**, as `@tap` is invalid in the WeChat Mini Program:

```html
<!-- Correct -->
<hy-button text="Click" @click="onClick"></hy-button>

<!-- Incorrect -->
<hy-button text="Click" @tap="onClick"></hy-button>
```

### 2. icon Prop

The `icon` prop supports passing an icon configuration object:

```html
<!-- Using built-in icon -->
<hy-button text="Delete" :icon="{ name: IconConfig.DELETE }"></hy-button>

<!-- Using custom icon -->
<hy-button text="Delete" :icon="{ name: 'delete', customPrefix: 'icon' }"></hy-button>
```

### 3. stop Event Propagation

By default, `stop` is `true`, which stops event propagation. To allow propagation, set `stop="false"`:

```html
<hy-button text="Allow propagation" :stop="false" @click="onClick"></hy-button>
```

### 4. Throttle Feature

You can set the button click throttle time via `throttleTime` to prevent repeated clicks:

```html
<!-- Can only be clicked once within 3 seconds -->
<hy-button text="Submit" :throttle-time="3000" @click="onSubmit"></hy-button>
```

### 5. Open Capabilities

The component has integrated all open capabilities of the uni-app button component. Refer to the official documentation for usage:

```html
<!-- Get user info -->
<hy-button open-type="getUserInfo" @getuserinfo="onGetUserInfo">Get Info</hy-button>

<!-- Get phone number -->
<hy-button open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">Get Phone Number</hy-button>
```

## :japanese_castle: Basic Usage Examples

```html
<template>
    <!-- Global usage -->
    <hy-button text="Basic button"></hy-button>

    <!-- Using slot -->
    <hy-button>Slot content</hy-button>
</template>
```

### Setting Button Colors

```html
<template>
    <hy-button type="info" text="Default button"></hy-button>
    <hy-button type="success" text="Success button"></hy-button>
    <hy-button type="primary" text="Primary button"></hy-button>
    <hy-button type="error" text="Danger button"></hy-button>
    <hy-button type="warning" text="Warning button"></hy-button>

    <!-- Gradient button -->
    <hy-button text="Gradient" color="linear-gradient(to right, red, blue)"></hy-button>
</template>
```

### Plain Buttons

```html
<template>
    <hy-button type="info" text="Plain button" plain></hy-button>
    <hy-button type="success" text="Plain success" plain></hy-button>
    <hy-button type="primary" text="Plain primary" plain></hy-button>
    <hy-button type="error" text="Plain danger" plain></hy-button>
    <hy-button type="warning" text="Plain warning" plain></hy-button>

    <!-- Gradient plain button -->
    <hy-button text="Gradient plain" color="linear-gradient(to right, red, blue)" plain></hy-button>
</template>
```

### Setting Button Icons

```html
<template>
    <!-- Delete icon -->
    <hy-button type="error" text="Delete" :icon="{ name: IconConfig.DELETE }"></hy-button>

    <!-- Custom icon -->
    <hy-button
        type="error"
        text="Delete"
        plain
        :icon="{ name: 'delete', customPrefix: 'icon' }"
    ></hy-button>

    <!-- Loading button -->
    <hy-button type="success" text="Loading" loading></hy-button>

    <!-- Custom loading text -->
    <hy-button type="primary" loading loading-text="Submitting"></hy-button>
</template>

<script setup>
    import { IconConfig } from 'hy-app';
</script>
```

### Button Shapes

```html
<template>
    <hy-button type="success" text="Square button" shape="square"></hy-button>
    <hy-button type="success" text="Round button" shape="circle"></hy-button>
</template>
```

### Button Sizes

```html
<template>
    <hy-button type="success" text="Large button" size="large"></hy-button>
    <hy-button type="success" text="Default button" size="medium"></hy-button>
    <hy-button type="success" text="Small button" size="small"></hy-button>
    <hy-button type="success" text="Mini button" size="mini"></hy-button>
</template>
```

### Setting Various Button States

```html
<template>
    <!-- Hairline button -->
    <hy-button text="Hairline button" :hairline="true"></hy-button>

    <!-- Borderless button -->
    <hy-button text="Borderless button" :border="false"></hy-button>

    <!-- Disabled button -->
    <hy-button text="Disabled button" :disabled="true"></hy-button>

    <!-- Disabled state (with loading) -->
    <hy-button text="Disabled" :disabled="true" loading></hy-button>
</template>
```

### Throttle Control

```html
<template>
    <!-- Can only be clicked once within 3 seconds -->
    <hy-button type="primary" text="Submit" :throttle-time="3000" @click="onSubmit"></hy-button>
</template>

<script setup>
    const onSubmit = () => {
        uni.showToast({
            title: 'Submitted successfully',
            icon: 'success',
        });
    };
</script>
```

### Custom Styles

```html
<template>
    <!-- Custom padding -->
    <hy-button text="Custom style" :custom-style="{ padding: '20rpx 40rpx' }"></hy-button>

    <!-- Custom class name -->
    <hy-button text="Custom class name" custom-class="my-button"></hy-button>
</template>

<style lang="scss" scoped>
    :deep(.my-button) {
        border-radius: 10rpx;
        box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
    }
</style>
```

### Open Capabilities

```html
<template>
    <!-- Get user info -->
    <hy-button
        open-type="getUserInfo"
        type="primary"
        text="Get user info"
        @getuserinfo="onGetUserInfo"
    ></hy-button>

    <!-- Get phone number -->
    <hy-button
        open-type="getPhoneNumber"
        type="primary"
        text="Get phone number"
        @getphonenumber="onGetPhoneNumber"
    ></hy-button>

    <!-- Open customer service -->
    <hy-button open-type="contact" text="Contact support" @contact="onContact"></hy-button>

    <!-- Open settings -->
    <hy-button open-type="openSetting" text="Open settings" @opensetting="onOpenSetting"></hy-button>
</template>

<script setup>
    const onGetUserInfo = (e) => {
        console.log('User info:', e);
    };

    const onGetPhoneNumber = (e) => {
        console.log('Phone number:', e);
    };

    const onContact = () => {
        console.log('Open customer service');
    };

    const onOpenSetting = () => {
        console.log('Open settings');
    };
</script>
```

### Integration of Open Capabilities Across Mini Programs

Hy Component Library has integrated all open capabilities of the uni-app [button component](https://uniapp.dcloud.net.cn/component/button.html) (as of 2025-04-14). Simply use them according to the uni-app documentation. If you find anything missing, please join our group to provide feedback.

## API

### Button Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| text | Button text | `string` | - |
| icon | Button icon configuration, see [Icon API](./icon#api) for details | `HyIconProps` | - |
| color | Button color, supports linear-gradient values | `string` | - |
| stop | Whether to stop event propagation | `boolean` | true |
| border | Whether to show the button border | `boolean` | true |
| hairline | Whether to show the button's hairline border | `boolean` | true |
| type | Button style type | `error`\|`warning`\|`success`\|`primary`\|`info` | primary |
| size | Button size | `small`\|`medium`\|`large`\|`mini` | medium |
| shape | Button shape, see description above | `circle`\|`square` | square |
| plain | Whether the button is plain, with transparent background | `boolean` | false |
| disabled | Whether disabled | `boolean` | false |
| loading | Whether the button is loading | `boolean` | false |
| loadingText | Loading prompt text | `string` | - |
| loadingMode | Loading icon type | `spinner`\|`circle`\|`semicircle` | spinner |
| loadingSize | Loading icon size | `string` \| `number` | 13 |
| openType | Open capability, see the uni-app documentation on the button component for details | `string` | - |
| scope | Used in Alipay Mini Program, effective when open-type is getAuthorize | `phoneNumber`\|`userInfo` | - |
| formType | Used for the `<form>` component; clicking triggers the submit/reset event of the `<form>` component respectively | `string` | - |
| appParameter | Parameters passed to the APP when opening it, effective when open-type=launchApp (Note: only valid for WeChat Mini Program and QQ Mini Program) | `string` | - |
| hoverStopPropagation | Specifies whether to prevent ancestor nodes of this node from showing the pressed state, valid for WeChat Mini Program (default true) | `boolean` | true |
| lang | Specifies the language of returned user info: zh_CN Simplified Chinese, zh_TW Traditional Chinese, en English | `string` | en |
| sessionFrom | Session source, effective when openType="contact" | `string` | - |
| sendMessageTitle | In-session message card title, effective when openType="contact" | `string` | - |
| sendMessagePath | Mini program path that the in-session message card navigates to when tapped, effective when openType="contact" | `string` | - |
| sendMessageImg | In-session message card image, effective when openType="contact" | `string` | - |
| showMessageCard | Whether to show the in-session message card. When set to true, a "mini programs that may be sent" prompt will appear in the lower right corner when the user enters the customer service session, allowing users to quickly send a mini program message by tapping it, effective when openType="contact" | `boolean` | false |
| dataName | Extra parameter, used for the mini program's data-xxx attribute, retrieved via target.dataset.name | `string` | - |
| throttleTime | Throttle; can only be triggered once within a given time, in milliseconds | `number` | 0 |
| hoverStartTime | How long after pressing before the pressed state appears, in milliseconds | `number` | 0 |
| hoverStayTime | How long the pressed state remains after the finger is released, in milliseconds | `number` | 200 |
| customStyle | Custom external styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name | Description | Callback Parameter | Platform |
| --- | --- | --- | --- |
| click | Button click; do not use the @tap event, as it is invalid in the WeChat Mini Program; returns the click event and its parameters | event | - |
| getphonenumber | Effective when open-type="getPhoneNumber" | event | WeChat Mini Program, Alipay Mini Program |
| getuserinfo | When the user taps this button, the obtained user info is returned; values retrieved from the detail of the return parameter are the same as uni.getUserInfo | event | WeChat Mini Program, Alipay Mini Program |
| error | Callback when an error occurs while using open capabilities | event | WeChat Mini Program |
| opensetting | Callback after the authorization settings page is opened and closed | event | WeChat Mini Program |
| launchapp | Callback when opening the APP succeeds | event | WeChat Mini Program |
| agreeprivacyauthorization | Callback for the user agreeing to the privacy agreement, effective when open-type="agreePrivacyAuthorization" | event | WeChat Mini Program |
| chooseavatar | Callback for obtaining the user avatar | event | WeChat Mini Program |
| contact | Customer service message callback | event | WeChat Mini Program |

### Slots

| Slot Name | Description | Accepted Value |
| ------- | -------- | ------ |
| default | Default slot | -      |

### CSS Variables

| Variable Name | Description | Default Value | Notes |
| --- | --- | --- | --- |
| `--hy-button-height` | Default size height | `40px` | medium size uses this value |
| `--hy-button-height-large` | large height | `50px` | |
| `--hy-button-height-small` | small height | `30px` | |
| `--hy-button-height-mini` | mini height | `22px` | |
| `--hy-button-font-size` | Default font size | `15px` | Takes precedence when the `text-size` prop is set |
| `--hy-button-font-size-medium` | medium font size | `14px` | Same as above |
| `--hy-button-font-size-small` | small font size | `12px` | Same as above |
| `--hy-button-font-size-mini` | mini font size | `10px` | Same as above |
| `--hy-button-padding-large` | large padding | `0 15px` | |
| `--hy-button-padding-medium` | medium padding | `0 12px` | |
| `--hy-button-padding-small` | small padding | `0 8px` | |
| `--hy-button-padding-mini` | mini padding | `0 8px` | |
| `--hy-button-min-width-small` | small minimum width | `60px` | Effective for non APP-NVUE |
| `--hy-button-min-width-mini` | mini minimum width | `50px` | Effective for non APP-NVUE |
| `--hy-button-radius` | Square button border radius (shape=square) | Follows `--hy-radius-sm` (8rpx) | For circle buttons, override `--hy-radius-semicircle` |
| `--hy-button-disabled-opacity` | Disabled opacity | `0.5` | |
| `--hy-button-hairline-width` | Hairline border width (hairline) | `0.5px` | |

<demo-model url="pages-design/button/button"></demo-model>