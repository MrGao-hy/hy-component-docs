# @hy-app/mcp


:::tip What it does

`MCP` connects the component library's real API data to AI assistants. While coding, it automatically queries component properties, events, and usage, preventing AI from fabricating components or APIs that don't exist.

:::

## Installation

```bash
# Install globally
npm install -g @hy-app/mcp

# Or use npx (no installation required)
npx @hy-app/mcp
```

## Available Tools

| Tool Name                  | Description                                            |
| -------------------------- | ------------------------------------------------------ |
| `search_components`        | Search components, supports fuzzy matching by Chinese and English names |
| `get_component_api`        | Get component API (Props/Events/Slots)                 |
| `get_component_examples`   | Get component usage example code                       |
| `check_platform_support`   | Query component platform compatibility                 |
| `get_hook_doc`             | Get Hook documentation (useToast, useShare, etc.)      |
| `get_tool_doc`             | Get utility function documentation (http, throttle, etc.) |
| `get_guide`                | Get development guides (theme, i18n, etc.)             |
| `validate_component_usage` | Validate whether component usage is correct            |

---

## Cursor Configuration

Open Cursor Settings → MCP, and add the following configuration:

### Option 1: Use npx (recommended, no installation required)

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

### Option 2: After installing globally

```json
{
    "mcpServers": {
        "hy-app": {
            "command": "hy-app-mcp"
        }
    }
}
```

### Option 3: Install locally in the project

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

Configuration file locations:

- **Windows**: `%APPDATA%\Cursor\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
- **macOS**: `~/Library/Application Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

You can also edit it directly in Cursor via `Cmd/Ctrl + Shift + P` → type `MCP` → click `Edit MCP Settings`.

### Cursor Usage Examples

In the Cursor chat:

```
# Search components
Help me find a popup component

# View component API
Get the Props information for the Button component

# Check platform compatibility
Does the Form component support Alipay Mini Program?

# Get usage examples
Give me the loading example code for the Loading component

# Validate code
Check whether this code has any property errors:
<hy-button type="primary" size="big" @click="handleClick">
```

---

## Trae Configuration

### Option 1: After installing globally

Open Trae Settings → Chat → MCP Configuration:

```json
{
    "mcpServers": {
        "hy-app": {
            "command": "hy-app-mcp"
        }
    }
}
```

### Option 2: Use npx

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

### Trae Usage Examples

Ask questions directly in the Trae chat, and the AI will automatically call MCP tools:

```
# Example 1: Learn component usage
I want to use the hy-app Picker component in my project, help me generate code for a basic picker

# Example 2: Platform compatibility check
My project needs to run on WeChat Mini Program, can I use the Radio component?

# Example 3: Hook usage
Show me how to use the useToast Hook to implement a global toast

# Example 4: Theme customization
I want to change the component library's theme color to #FF6600, how should I do that?

# Example 5: Code validation
Help me check whether this hy-input usage is correct:
<hy-input v-model="value" type="email" :clearable="true" placeholder="Please enter your email" />
```

---

## Tool Details

### search_components

Search components and return a list of matching components.

```json
{
    "componentName": "search keyword",
    "category": "optional, category filter"
}
```

### get_component_api

Get component API documentation.

```json
{
    "componentName": "button",
    "section": "optional: props | events | slots | all, default all",
    "detail": "optional: whether to return full details, default true. Set to false to reduce tokens, returning only name/type/default/enum",
    "includeExamples": "optional: whether to include example code, default false"
}
```

### get_component_examples

Get component usage example code.

```json
{
    "componentName": "button",
    "feature": "optional, filter by feature keyword",
    "listOnly": "optional, return only the title list, default false"
}
```

### check_platform_support

Query component platform compatibility.

```json
{
    "componentName": "button",
    "platform": "optional: app | h5 | weixin | alipay"
}
```

### get_hook_doc

Get Hook documentation.

```json
{
    "name": "useToast",
    "includeExamples": "optional, default false"
}
```

### get_tool_doc

Get utility function documentation.

```json
{
    "name": "http",
    "includeExamples": "optional, default false"
}
```

### get_guide

Get development guides.

```json
{
    "topic": "theme | locale | style | intro",
    "query": "optional, search for specific content"
}
```

### validate_component_usage

Validate component usage.

```json
{
    "componentName": "button",
    "code": "<hy-button type='error' size='big' @click='handleClick'>"
}
```

---

## Token Optimization

This MCP service is optimized for token consumption in AI editors:

- **get_component_api** does not return example code by default; retrieve it via `includeExamples=true` or by calling `get_component_examples` separately
- **get_component_api** supports a `detail=false` compact mode that returns only `{name, type, default, enum}`, ideal for quick lookups
- **get_hook_doc / get_tool_doc** do not return example code by default
- **get_component_examples** supports `listOnly=true` to first view the title list, then fetch specific code as needed
- **search_components** returns compact summaries, with up to 10 results
- Component names support the `hy-` prefix; both `hy-list` and `list` will match the List component