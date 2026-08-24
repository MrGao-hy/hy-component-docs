# Textarea Component

> Used for entering multi-line text content, such as chat input boxes, remarks, and other scenarios.

## :pushpin: Platform Compatibility

| APP(vue) | H5  | WeChat Mini Program | Alipay Mini Program |
| -------- | --- | ------------------- | ------------------- |
| ✔        | ✔   | ✔                   | ✔                   |

## :warning: Notes

::: warning Notes

- `modelValue` is used for two-way binding of the input content
- The `focus` attribute sets automatic focus; not supported on nvue, and on H5 it depends on the browser implementation
- The `formatter` attribute is used for formatting input content, but WeChat Mini Program does not support passing functions via props; you need to use the `setFormatter` method
- The `border` attribute supports three types: `surround` (border on all sides), `bottom` (bottom border), `none` (no border)
- When `maxlength` is set to `-1`, there is no limit on the maximum length
- The component supports `hy-form` form validation when used with `form-item`

:::

## :japanese_castle: Basic Usage

```html
<!-- Global usage -->
<hy-textarea v-model="value" placeholder="Please enter content"></hy-textarea>
```

```typescript
import { ref } from 'vue';

const value = ref('');
```

### Border Types

Set the border type via the `border` attribute:

```html
<!-- Border on all sides (default) -->
<hy-textarea v-model="value1" border="surround" placeholder="Border on all sides"></hy-textarea>

<!-- Bottom border -->
<hy-textarea v-model="value2" border="bottom" placeholder="Bottom border"></hy-textarea>

<!-- No border -->
<hy-textarea v-model="value3" border="none" placeholder="No border"></hy-textarea>
```

### Character Count

Set the `count` attribute to display the character count:

```html
<hy-textarea v-model="value" placeholder="Please enter content" count></hy-textarea>
```

### Auto Height

Set the `autoHeight` attribute to automatically increase the input height:

```html
<hy-textarea v-model="value" autoHeight placeholder="Please enter content" count></hy-textarea>
```

### Disabled State

Set the `disabled` attribute to disable the input:

```html
<hy-textarea v-model="value" disabled placeholder="Disabled state"></hy-textarea>
```

### Auto Focus

Set the `focus` attribute to automatically gain focus:

```html
<hy-textarea v-model="value" :focus="isFocus" placeholder="Auto focus"></hy-textarea>
```

```typescript
import { ref } from 'vue';

const isFocus = ref(true);
```

## Custom Styles

Customize styles via `customStyle` or `customClass`:

```html
<hy-textarea
    v-model="value"
    placeholder="Custom style"
    height="120"
    :customStyle="{ backgroundColor: '#f5f5f5', borderRadius: '10px' }"
></hy-textarea>
```

### Formatting

Format input content via the `formatter` attribute:

```html
<hy-textarea v-model="value" :formatter="formatter" placeholder="Numbers only"></hy-textarea>
```

```typescript
import { ref } from 'vue';

const value = ref('');

// Formatter: only allows digits
const formatter = (val: string) => {
    return val.replace(/[^0-9]/g, '');
};
```

### Using with Forms

The component supports `hy-form` form validation:

```html
<hy-form ref="formRef">
    <hy-form-item label="Remark" prop="remark">
        <hy-textarea
            v-model="formData.remark"
            placeholder="Please enter a remark"
            :maxlength="200"
            count
        ></hy-textarea>
    </hy-form-item>
</hy-form>
```

```typescript
import { ref, reactive } from 'vue';

const formRef = ref();
const formData = reactive({
    remark: '',
});

const rules = {
    remark: [
        { required: true, message: 'Please enter a remark' },
        { min: 5, message: 'Remark must be at least 5 characters' },
    ],
};
```

### Chat Input Scenario

Combine with other components to create a chat input effect:

```html
<view class="chat-input">
    <hy-textarea
        v-model="message"
        autoHeight
        :maxlength="500"
        confirmType="send"
        placeholder="Type a message..."
        @confirm="sendMessage"
    ></hy-textarea>
    <hy-button type="primary" size="small" @click="sendMessage">Send</hy-button>
</view>
```

## API

### Textarea Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| modelValue | Content of the input | `string` | - |
| placeholder | Placeholder shown when the input is empty | `string` | - |
| placeholderClass | Style class for the placeholder[^1] | `string` | textarea-placeholder |
| placeholderStyle | Styles for the placeholder, in object form | `string` | - |
| height | Height of the input; numbers default to px | `string \| number` | 70 |
| confirmType | Sets the text of the button at the bottom-right corner of the keyboard; only effective on WeChat Mini Program, App-vue, and H5 | `string` | done |
| disabled | Whether to disable | `boolean` | false |
| count | Whether to show the character count | `boolean` | false |
| focus | Whether to automatically gain focus; not supported on nvue, and on H5 it depends on the browser implementation | `boolean` | false |
| autoHeight | Whether to automatically increase the height | `boolean` | false |
| fixed | If the textarea is inside a position:fixed area, you need to explicitly set fixed to true | `boolean` | false |
| cursorSpacing | Distance between the cursor and the keyboard | `number` | 0 |
| cursor | Cursor position when focused | `number` | - |
| showConfirmBar | Whether to show the bar above the keyboard containing the "Done" button | `boolean` | true |
| selectionStart | Cursor start position; effective with auto focus, must be used together with selection-end | `number` | -1 |
| selectionEnd | Cursor end position; effective with auto focus, must be used together with selection-start | `number` | -1 |
| adjustPosition | Whether to automatically push the page up when the keyboard pops up | `boolean` | true |
| disableDefaultPadding | Whether to remove the default inner padding on iOS; only effective on WeChat Mini Program | `boolean` | false |
| holdKeyboard | When focused, the keyboard is not dismissed when tapping the page; only effective on WeChat Mini Program | `boolean` | false |
| maxlength | Maximum input length; when set to -1, there is no limit on the maximum length | `number` | 140 |
| border | Border type[^2] | `surround \| bottom \| none` | surround |
| formatter | Input filtering or formatting function[^3] | `function` | - |
| customStyle | External styles to apply | `CSSProperties` | - |
| customClass | Custom external class name | `string` | - |

### Events

| Event Name           | Description                                        | Callback        |
| -------------------- | -------------------------------------------------- | --------------- |
| focus                | Triggered when the input gains focus               | `event`         |
| blur                 | Triggered when the input loses focus               | `event`         |
| lineChange           | Triggered when the number of lines changes         | `event`         |
| change               | Triggered when typing on the keyboard              | `value: string` |
| update:modelValue    | Triggered on keyboard input                        | `value: string` |
| confirm              | Triggered when the Done button is tapped           | `event`         |
| keyboardheightchange | Triggered when the keyboard height changes         | `event`         |

[^1]: Note: when scoped is used in the page or component's style, you need to prepend `/deep/` to the class name

[^2]: `surround`: border on all sides; `bottom`: bottom border only; `none`: no border

[^3]: WeChat Mini Program does not support passing functions via props; it is recommended to use the `formatter` attribute directly in the page (on other platforms)

<demo-model url="pages-design/textarea/textarea"></demo-model>