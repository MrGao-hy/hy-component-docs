# @hy-app/mcp

:::tip What it does

`MCP` connects the component library's real API data to AI assistants. It automatically queries component properties, events, and usage while coding, preventing AI from fabricating components or APIs that don't exist.

:::

## Installation

```bash
# Install globally
npm install -g @hy-app/mcp

# Or use npx (no installation required)
npx @hy-app/mcp
```

## Available Tools

| Tool Name                  | Description                                       |
| -------------------------- | ------------------------------------------------- |
| `search_components`        | Search components, supports fuzzy matching by Chinese and English names |
| `get_component_api`        | Get component API (Props/Events/Slots)            |
| `get_component_examples`   | Get component usage example code                  |
| `check_platform_support`   | Check component platform compatibility            |
| `get_hook_doc`             | Get Hook documentation (useToast, useShare, etc.) |
| `get_tool_doc`             | Get utility function documentation (http, throttle, etc.) |
| `get_guide`                | Get development guides (theme, internationalization, etc.) |
| `validate_component_usage` | Validate whether component usage is correct       |

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

### Option 2: After global installation

```json
{
    "mcpServers": {
        "hy-app": {
            "command": "hy-app-mcp"
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
Does the Form component support Alipay Mini Programs?

# Get usage examples
Give me the loading example code for the Loading component

# Validate code
Check whether this code has any attribute errors:
<hy-button type="primary" size="big" @click="handleClick">
```

---

## Trae Configuration

### Option 1: After global installation

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

---

## Qoder Configuration

Qoder (including the Chinese version Qoder CN) connects via the built-in MCP management page in the settings panel:

Click the user avatar in the top-right corner (or use the shortcut `Ctrl + Shift + ,`; on macOS it's `⌘ + ⇧ + ,`) to open **Personal Settings**, then select **MCP Servers** in the left navigation. You can also navigate there via **Settings → Other Settings → Qoder CN → Personal Settings → MCP Servers**.

### Option 1: Add via My Servers (recommended, no installation required)

1. Find the configuration file `mcp.json` and click the "Open" button;
2. Add the following configuration to the `mcp.json` file:

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

3. Close the file and click **Save**. When `hy-app` appears in the list with a "Connected" status, the connection is successful; expand the entry to view the list of available tools.

### Option 2: After global installation

```json
{
    "mcpServers": {
        "hy-app": {
            "command": "hy-app-mcp"
        }
    }
}
```

:::tip Note for Windows users

- For the npx method, it is recommended to include the `-y` parameter to skip the installation confirmation on first run, preventing the process from hanging in STDIO mode;
- If `npx` fails to start, run `npm install -g @hy-app/mcp` first, then switch to the `hy-app-mcp` command from Option 2.

:::

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
    "section": "optional: props | events | slots | all, defaults to all",
    "detail": "optional: whether to return full details, defaults to true. Set to false to reduce tokens, returning only name/type/default/enum",
    "includeExamples": "optional: whether to include example code, defaults to false"
}
```

### get_component_examples

Get component usage example code.

```json
{
    "componentName": "button",
    "feature": "optional, filter by feature keyword",
    "listOnly": "optional, return only the list of titles, defaults to false"
}
```

### check_platform_support

Check component platform compatibility.

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
    "includeExamples": "optional, defaults to false"
}
```

### get_tool_doc

Get utility function documentation.

```json
{
    "name": "http",
    "includeExamples": "optional, defaults to false"
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

## Token Optimization Notes

This MCP service is optimized for token consumption in AI editors:

- **get_component_api** does not return example code by default; use `includeExamples=true` or call `get_component_examples` separately to retrieve them
- **get_component_api** supports a `detail=false` compact mode that returns only `{name, type, default, enum}`, ideal for quick lookups
- **get_hook_doc / get_tool_doc** do not return example code by default
- **get_component_examples** supports `listOnly=true` to first view the list of titles, then fetch specific code as needed
- **search_components** returns concise summaries with a maximum of 10 results
- Component names support the `hy-` prefix; both `hy-list` and `list` will match the List component