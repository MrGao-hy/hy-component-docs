# @hy-app/mcp

华玥组件库 (hy-app) MCP 服务器，为 AI 编辑器提供组件文档查询支持，帮助 AI 准确使用 hy-app 组件。

## 安装

```bash
# 全局安装
npm install -g @hy-app/mcp

# 或使用 npx（无需安装）
npx @hy-app/mcp
```

## 可用工具

| 工具名                        | 说明                              |
|----------------------------|---------------------------------|
| `search_components`        | 搜索组件，支持中英文名称模糊匹配                |
| `get_component_api`        | 获取组件 API（Props/Events/Slots）    |
| `get_component_examples`   | 获取组件使用示例代码                      |
| `check_platform_support`   | 查询组件平台兼容性                       |
| `get_hook_doc`             | 获取 Hook 文档（useToast、useShare 等） |
| `get_tool_doc`             | 获取工具函数文档（http、throttle 等）       |
| `get_guide`                | 获取开发指南（主题、国际化等）                 |
| `validate_component_usage` | 校验组件用法是否正确                      |

---

## Cursor 配置

打开 Cursor 设置 → MCP，添加以下配置：

### 方式一：使用 npx（推荐，无需安装）

```json
{
  "mcpServers": {
    "hy-app": {
      "command": "npx",
      "args": ["@hy-app/mcp"]
    }
  }
}
```

### 方式二：全局安装后

```json
{
  "mcpServers": {
    "hy-app": {
      "command": "hy-app-mcp"
    }
  }
}
```

### 方式三：项目本地安装

```json
{
  "mcpServers": {
    "hy-app": {
      "command": "node",
      "args": ["./node_modules/@hy-app/mcp/dist/index.js"]
    }
  }
}
```

配置文件位置：
- **Windows**: `%APPDATA%\Cursor\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
- **macOS**: `~/Library/Application Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

也可以在 Cursor 中通过 `Cmd/Ctrl + Shift + P` → 输入 `MCP` → 点击 `Edit MCP Settings` 直接编辑。

### Cursor 使用示例

在 Cursor 对话框中：

```
# 搜索组件
帮我找一个弹窗组件

# 查看组件 API
获取 Button 组件的 Props 信息

# 查看平台兼容性
Form 组件支持支付宝小程序吗？

# 获取使用示例
给我 Loading 组件的加载中示例代码

# 校验代码
检查这段代码是否有属性错误：
<hy-button type="primary" size="big" @click="handleClick">
```

---

## Trae 配置

### 方式一：全局安装后

打开 Trae 设置 → 对话 → MCP 配置：

```json
{
  "mcpServers": {
    "hy-app": {
      "command": "hy-app-mcp"
    }
  }
}
```

### 方式二：使用 npx

```json
{
  "mcpServers": {
    "hy-app": {
      "command": "npx",
      "args": ["@hy-app/mcp"]
    }
  }
}
```

### Trae 使用示例

在 Trae 对话框中直接提问，AI 会自动调用 MCP 工具：

```
# 示例 1：了解组件用法
我想在项目中使用 hy-app 的 Picker 组件，帮我生成一个基础选择器的代码

# 示例 2：平台兼容性检查
我的项目需要运行在微信小程序上，Radio 组件能用吗？

# 示例 3：Hook 使用
教我用 useToast Hook 实现一个全局提示

# 示例 4：主题定制
我想把组件库的主题色改为 #FF6600，应该怎么做？

# 示例 5：代码校验
帮我检查这段 hy-input 的用法是否正确：
<hy-input v-model="value" type="email" :clearable="true" placeholder="请输入邮箱" />
```

---

## 工具详细说明

### search_components

搜索组件，返回匹配的组件列表。

```json
{
  "componentName": "搜索关键词",
  "category": "可选，分类过滤"
}
```

### get_component_api

获取组件 API 文档。

```json
{
  "componentName": "button",
  "section": "可选：props | events | slots | all，默认 all",
  "detail": "可选：是否返回完整详情，默认 true。设为 false 可减少 token，只返回 name/type/default/enum",
  "includeExamples": "可选：是否包含示例代码，默认 false"
}
```

### get_component_examples

获取组件使用示例代码。

```json
{
  "componentName": "button",
  "feature": "可选，按功能关键词过滤",
  "listOnly": "可选，只返回标题列表，默认 false"
}
```

### check_platform_support

查询组件平台兼容性。

```json
{
  "componentName": "button",
  "platform": "可选：app | h5 | weixin | alipay"
}
```

### get_hook_doc

获取 Hook 文档。

```json
{
  "name": "useToast",
  "includeExamples": "可选，默认 false"
}
```

### get_tool_doc

获取工具函数文档。

```json
{
  "name": "http",
  "includeExamples": "可选，默认 false"
}
```

### get_guide

获取开发指南。

```json
{
  "topic": "theme | locale | style | intro",
  "query": "可选，搜索特定内容"
}
```

### validate_component_usage

校验组件用法。

```json
{
  "componentName": "button",
  "code": "<hy-button type='error' size='big' @click='handleClick'>"
}
```

---

## Token 优化说明

本 MCP 服务针对 AI 编辑器的 token 消耗做了优化：

- **get_component_api** 默认不返回示例代码，需通过 `includeExamples=true` 或单独调用 `get_component_examples` 获取
- **get_component_api** 支持 `detail=false` 精简模式，只返回 `{name, type, default, enum}`，适合快速查阅
- **get_hook_doc / get_tool_doc** 默认不返回示例代码
- **get_component_examples** 支持 `listOnly=true` 先查看标题列表，再按需获取具体代码
- **search_components** 返回精简摘要，最多 10 条结果
- 组件名支持 `hy-` 前缀，`hy-list` 和 `list` 都能匹配到 List 组件
