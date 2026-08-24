# LLMs.txt

::: tip Instructions

llms.txt is a standard text file for large language models (LLMs), which can be understood as the robots.txt of the AI era, but with a completely different purpose.

- **robots.txt:** Used to inform search engines "which pages can be crawled"
- **llms.txt:** Used to inform AI "what the structure of the website's content is and what the focal points are"

Through `llms.txt`, you can provide structured document entry points for AI tools, helping them understand your component library more efficiently, including component descriptions, example code, and best practices.

:::

## Cursor

In `Cursor`:

1. Open the `Indexing & Docs` settings.
2. Add `https://hy-design-uni/llms-full.txt` to Docs.
3. In the AI input box, type @Docs and then select the document you just created to introduce it into the context.

This way, AI will prioritize your component library documentation when generating code or answering questions.

[Learn more about the @Docs feature in Cursor](<>)

## TRAE

In `TRAE`:

1. Click the upper right corner settings to open the **"Context / Document Set"** settings.
2. Add `https://hy-design-uni/llms-full.txt` to the document set.
3. In the AI input box, type @Docs and then select the document you just created to introduce it into the context.

[Learn more about the #Docs feature in TRAE](https://docs.trae.ai/ide/number-sign/)

## Other Tools

Any tool that meets the following conditions can be used directly:

- Supports the llms.txt standard
- Supports importing documents via URL

You can add llms.txt to:

- Docs (Document Set)
- Rules (Rule Configuration)
- Knowledge Base

This allows AI to more accurately understand your component library (such as hy-app).