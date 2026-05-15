# LLMs.txt

::: tip
llms.txt 是一个面向大型语言模型（LLMs）的标准文本文件，可以理解为 AI 时代的 robots.txt，但用途完全不同。

robots.txt：用于告诉搜索引擎“哪些页面可以被爬取”
llms.txt：用于告诉 AI“这个网站的内容结构是什么、重点在哪里”

通过 llms.txt，你可以为 AI 工具提供结构化的文档入口，帮助它更高效地理解你的组件库，包括组件说明、示例代码以及最佳实践等内容。
:::

## 📦 可用资源
我们提供了两个不同粒度的入口，适用于不同场景：
:::code-group
llms.txt
提供组件库的整体结构概览，包含所有组件及其文档链接
👉 适合快速索引、轻量理解
llms-full.txt
提供完整文档内容，包括实现细节与示例代码
👉 适合深度理解、代码生成场景
🧠 在 AI 工具中使用
Cursor

在 Cursor 中：

打开 Indexing & Docs 设置
将 llms.txt 添加到 Docs
使用 @Docs 将文档引入上下文

这样，AI 在生成代码或回答问题时，会优先参考你的组件库文档。

TRAE

在 TRAE 中：

点击右上角设置
打开「上下文 / 文档集」设置
将 `https://hy-component-docs.vercel.app/llms-full.txt` 添加到文档集
使用 #Docs 引用文档内容
其他工具

任何满足以下条件的工具都可以直接使用：

支持 llms.txt 标准
支持通过 URL 导入文档

你可以将 llms.txt 添加到：

Docs（文档集）
Rules（规则配置）
Knowledge Base（知识库）

从而让 AI 更准确地理解你的组件库（如 Wot UI）。

🔄 替代方案：context7

如果你不想维护 llms.txt，也可以使用 context7 直接读取组件库文档。

它可以自动解析文档结构，同样适用于 AI 上下文注入场景。