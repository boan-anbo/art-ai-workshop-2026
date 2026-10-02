# AI Tools Workshop for Art Research 2026 · AI 與藝術研究

先看：[課前問答與 workshop 內容](https://boan-anbo.github.io/art-ai-workshop-2026/)。

有其他問題？直接到 [GitHub Issues 提問](https://github.com/boan-anbo/art-ai-workshop-2026/issues/new?template=question.yml)。

Start here: [Session 1, what to do before Friday, 6 November](session-01/instructions.md)

Workspace for a two-session hands-on workshop, November 2026. You will fork this repository and work in your own copy.

All instructions, materials, and updates for the workshop live in this repository. If something changes, it changes here first.

## The two sessions

1. **Vibe Coding for Art Research** — Friday 6 November 2026, 2:30–4:30 PM (Hong Kong time). Set up an AI coding agent on your own laptop and work from your own research questions and materials.
2. **Vibe Coding for Art Research Presentation** — Friday 13 November 2026, 2:30–4:30 PM (Hong Kong time). Detailed content will follow as we work through the questions.

The workshop's organisation develops from your questions. The [Q&A](site/src/content/qa/01-yuk-wong.md) connects each response to relevant workshop topics; further responses will be added here. Your own materials and work stay in a repository you own.

## What is in this repository

- `session-01/` and `session-02/` one folder per session, each with its own `instructions.md`, posted before the session
- `my-work/` where your own work goes, in your fork
- `AGENTS.md` the rules an agent follows inside this workspace
- `site/` the Astro reading website; public Q&A is maintained as Markdown here

Nothing else needs to be read in advance. Do the session 1 instructions, and we will open the rest together.

## Updating the website

Public Q&A is written once in `site/src/content/qa/` and rendered by Astro. The website uses Traditional Chinese, with the original English questions available to expand. Detailed instructor scripts are kept separately and are not part of this repository.

For website maintainers: use Node 22 (the deployment uses 22.14.0), then inside `site/`:

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

Changes to `site/` on this repository's `main` branch are checked, built and published to GitHub Pages through GitHub Actions. Forks do not deploy to the instructor's website.
