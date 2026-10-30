# @hy-app/mcp


:::tip 它是干嘛的

`MCP` 可以将组件库的真实 API 数据接入 AI 助手。编码时自动查询组件的属性、事件和用法，避免 AI 凭空编造不存在的组件或 API。

:::

## 安装

```bash
# 全局安装
npm install -g @hy-app/mcp

# 或使用 npx（无需安装）
npx @hy-app/mcp
```

## 可用工具

| 工具名                     | 说明                                    |
| -------------------------- | --------------------------------------- |
| `search_components`        | 搜索组件，支持中英文名称模糊匹配        |
| `get_component_api`        | 获取组件 API（Props/Events/Slots）      |
| `get_component_examples`   | 获取组件使用示例代码                    |
| `check_platform_support`   | 查询组件平台兼容性                      |
| `get_hook_doc`             | 获取 Hook 文档（useToast、useShare 等） |
| `get_tool_doc`             | 获取工具函数文档（http、throttle 等）   |
| `get_guide`                | 获取开发指南（主题、国际化等）          |
| `validate_component_usage` | 校验组件用法是否正确                    |

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

---

## Qoder 配置

Qoder（含中文版 Qoder CN）通过设置面板内置的 MCP 管理页接入：

点击右上角用户头像（或使用快捷键 `Ctrl + Shift + ,`，macOS 为 `⌘ + ⇧ + ,`）打开 **个人设置**，在左侧导航中选择 **MCP 服务器**；也可以依次点击 **设置 → 其他设置 → Qoder CN → 个人设置 → MCP 服务器** 进入。

### 方式一：My Servers 添加（推荐，无需安装）

1. 找到配置文件 `mcp.json`，点击「打开」按钮；
2. 将以下配置填入 `mcp.json` 文件：
```json
{
    "mcpServers": {
        "hy-app": {
            "command": "npx",
            "args": ["-y", "@hy-app/mcp"]
        }
    }
}
```

3. 关闭文件并点击 **Save** 保存。列表中出现 `hy-app` 且状态显示「已连接」即代表连接成功，展开条目可查看可用的工具列表。

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

:::tip Windows 用户注意

- npx 方式建议带 `-y` 参数，跳过首次运行的安装确认，避免 STDIO 模式下进程卡住；
- 若 `npx` 启动失败，可先执行 `npm install -g @hy-app/mcp`，再改用方式二的 `hy-app-mcp` 命令。

:::

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
