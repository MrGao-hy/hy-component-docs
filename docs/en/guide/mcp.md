# @hy-app/mcp

The Hy-app Component Library (hy-app) MCP Server provides component document query support for AI editors, helping AI use hy-app components accurately.

## Installation

```bash
# Global installation
npm install -g @hy-app/mcp

# Or use npx (no installation required)
npx @hy-app/mcp
```

## Available Tools

| Tool Name           | Description                                    |
| -------------------- | ---------------------------------------------- |
| `search_components`  | Search for components, supporting fuzzy matching by Chinese and English names |
| `get_component_api`  | Get component API (Props/Events/Slots)          |
| `get_component_examples` | Get component usage example code                |
| `check_platform_support` | Query component platform compatibility           |
| `get_hook_doc`       | Get Hook documentation (useToast, useShare, etc.) |
| `get_tool_doc`       | Get tool function documentation (http, throttle, etc.) |
| `get_guide`          | Get development guide (themes, internationalization, etc.) |
| `validate_component_usage` | Validate component usage correctness          |

---

## Cursor Configuration

Open Cursor Settings → MCP, and add the following configuration:

### Method One: Using npx (recommended, no installation required)

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

### Method Two: After Global Installation

```json
{
    "mcpServers": {
        "hy-app": {
            "command": "hy-app-mcp"
        }
    }
}
```

### Method Three: Local Installation in Project

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

Configuration file location:

- **Windows**: `%APPDATA%\Cursor\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
- **macOS**: `~/Library/Application Support/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

You can also directly edit the configuration in Cursor by pressing `Cmd/Ctrl + Shift + P` → Enter `MCP` → Click `Edit MCP Settings`.

### Cursor Usage Example

In the Cursor dialog:

```
# Search for a component
Help me find a modal dialog component

# View component API
Get the Props information of the Button component

# Check platform compatibility
Does the Form component support Alipay Mini Program?

# Get usage examples
Give me the loading example code for the Loading component

# Validate code
Check if there are any property errors in this code:
<hy-button type="primary" size="big" @click="handleClick">
```

---

## Trae Configuration

### Method One: After Global Installation

Open Trae Settings → Dialog → MCP Configuration:

```json
{
    "mcpServers": {
        "hy-app": {
            "command": "hy-app-mcp"
        }
    }
}
```

### Method Two: Using npx

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

### Trae Usage Example

Directly ask in the Trae dialog, and AI will automatically call the MCP tool:

```
# Example 1: Understand component usage
I want to use the Picker component from hy-app in my project, help me generate a basic selector code

# Example 2: Platform compatibility check
My project needs to run on WeChat Mini Program, can the Radio component be used?

# Example 3: Hook usage
Teach me how to use the useToast Hook to implement a global prompt

# Example 4: Theme customization
I want to change the theme color of the component library to #FF6600, what should I do?

# Example 5: Code validation
Help me check if the usage of this hy-input is correct:
<hy-input v-model="value" type="email" :clearable="true" placeholder="Please enter email" />
```

---

## Detailed Tool Description

### search_components

Search for components and return a list of matching components.

```json
{
    "componentName": "Search keyword",
    "category": "Optional, category filtering"
}
```

### get_component_api

Get component API documentation.

```json
{
    "componentName": "button",
    "section": "Optional: props | events | slots | all, default all",
    "detail": "Optional: whether to return full details, default true. Set to false to reduce token, only return name/type/default/enum",
    "includeExamples": "Optional: whether to include example code, default false"
}
```

### get_component_examples

Get component usage example code.

```json
{
    "componentName": "button",
    "feature": "Optional, filter by functional keywords",
    "listOnly": "Optional, return title list only, default false"
}
```

### check_platform_support

Query component platform compatibility.

```json
{
    "componentName": "button",
    "platform": "Optional: app | h5 | weixin | alipay"
}
```

### get_hook_doc

Get Hook documentation.

```json
{
    "name": "useToast",
    "includeExamples": "Optional, default false"
}
```

### get_tool_doc

Get tool function documentation.

```json
{
    "name": "http",
    "includeExamples": "Optional, default false"
}
```

### get_guide

Get development guide.

```json
{
    "topic": "theme | locale | style | intro",
    "query": "Optional, search for specific content"
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

## Token Optimization Description

This MCP service has optimized the token consumption for AI editors:

- **get_component_api** does not return example code by default, and you need to use `includeExamples=true` or call `get_component_examples` separately to obtain it
- **get_component_api** supports `detail=false` to enter a streamlined mode, which only returns `{name, type, default, enum}` and is suitable for quick referencing
- **get_hook_doc / get_tool_doc** does not return example code by default
- **get_component_examples** supports `listOnly=true` to first view the title list, and then obtain the specific code as needed
- **search_components** returns a streamlined summary, with up to 10 results at most
- Component names support the `hy-` prefix, `hy-list` and `list` can both match the List component