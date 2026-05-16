# LLMs.txt

::: tip 说明
llms.txt 是一个面向大型语言模型（LLMs）的标准文本文件，可以理解为 AI 时代的 robots.txt，但用途完全不同。
- **robots.txt：**用于告诉搜索引擎“哪些页面可以被爬取”
- **llms.txt：**用于告诉 AI“这个网站的内容结构是什么、重点在哪里

通过 `llms.txt`，你可以为 AI 工具提供结构化的文档入口，帮助它更高效地理解你的组件库，包括组件说明、示例代码以及最佳实践等内容。
:::

## Cursor
在 `Cursor` 中：

打开 `Indexing & Docs` 设置

将 `https://hy-design-uni/llms-full.txt` 添加到Docs

在ai输入框 @Docs 然后选择你刚刚创建的文档，将文档引入上下文

这样，AI 在生成代码或回答问题时，会优先参考你的组件库文档。

[详细了解 Cursor 中的 @Docs 功能]()

## TRAE

在 `TRAE` 中：

点击右上角设置
打开**「上下文 / 文档集」**设置

将 `https://hy-design-uni/llms-full.txt` 添加到文档集

在ai输入框 @Docs 然后选择你刚刚创建的文档，将文档引入上下文

[详细了解 TRAE 中的 #Docs 功能](https://docs.trae.ai/ide/number-sign/)
## 其他工具
任何满足以下条件的工具都可以直接使用：

支持 llms.txt 标准

支持通过 URL 导入文档

你可以将 llms.txt 添加到：

Docs（文档集）
Rules（规则配置）
Knowledge Base（知识库）

从而让 AI 更准确地理解你的组件库（如 hy-app）。