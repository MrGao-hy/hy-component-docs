# LLMs.txt

::: tip What is it for

llms.txt is a standard text file designed for Large Language Models (LLMs). You can think of it as the robots.txt of the AI era, but with a completely different purpose.

- **robots.txt:** used to tell search engines "which pages can be crawled"
- **llms.txt:** used to tell AI "what the content structure of this website is and where the key points are"

Through `llms.txt`, you can provide AI tools with a structured documentation entry point, helping them understand your component library more efficiently, including component descriptions, example code, and best practices.

:::

## Cursor

In `Cursor`:

Open the `Indexing & Docs` settings

Add `https://hy-design-uni/llms-full.txt` to Docs

In the AI input box, type @Docs and select the document you just created to bring it into context

This way, when generating code or answering questions, the AI will prioritize referencing your component library documentation.

[Learn more about the @Docs feature in Cursor]()

## TRAE

In `TRAE`:

Click the settings icon in the top right corner to open the \*\*"Context / Docs"\*\* settings

Add `https://hy-design-uni/llms-full.txt` to the document set

In the AI input box, type @Docs and select the document you just created to bring it into context

[Learn more about the #Docs feature in TRAE](https://docs.trae.ai/ide/number-sign/)

## Other Tools

Any tool that meets the following conditions can be used directly:

Supports the llms.txt standard

Supports importing documents via URL

You can add llms.txt to:

Docs (Document Sets), Rules (Rule Configuration), Knowledge Base

This enables AI to understand your component library (such as hy-app) more accurately.