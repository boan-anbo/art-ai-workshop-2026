# AI與藝術史工作坊 · AI & Art History Workshop 2026

先看網站（工作坊模組、課前準備清單與對同學課前問題的回覆）：**[https://boan-anbo.github.io/art-ai-workshop-2026/](https://boan-anbo.github.io/art-ai-workshop-2026/)**

有其他問題？直接到 **[GitHub Issues 提問](https://github.com/boan-anbo/art-ai-workshop-2026/issues/new?template=question.yml)** 或發郵件至 [boan@ln.edu.hk](mailto:boan@ln.edu.hk)。

Start here before Session 1 (Friday, 6 November 2026): **[session-01/instructions.md](session-01/instructions.md)**

---

## Core Working Rule (核心工作原則)

> **Do everything through your coding agent + 30-minute stop rule:**
> Do not look for a tutorial and follow it by hand. Tell your coding agent (OpenCode, Claude Code, or Codex) what you are trying to do, give it the official URL, let it work, and make it explain what it is doing as it goes. If something breaks or gets stuck for more than **30 minutes**, stop and bring the exact error message in `my-work/questions.md`.

---

## Pre-Workshop Checklist at a Glance (課前準備速覽)

Full instructions and integrated test examples are on the **[workshop website (`#preparation`)](https://boan-anbo.github.io/art-ai-workshop-2026/#preparation)** and in **[session-01/instructions.md](session-01/instructions.md)**.

### A. Required for Everyone (全員必備)

1. **Coding Agent (必備)**: Install **[OpenCode](https://opencode.ai)** and subscribe to **[OpenCode Go](https://opencode.ai/go)** (US$10/month, cancel any time; recommended popular models inside the OpenCode plan: **DeepSeek V4.2 High/Max**, **DeepSeek V4.1 Flash**, or **GLM-5.3 / GLM-5.3 Flash**; other models are more expensive but may offer stronger thinking capabilities)—**unless** you already use your own coding agent such as **Claude Code** or **Codex**, in which case keep using yours.
2. **OpenRouter API Key with US$5–10 Credit (必備)**: Register at **[OpenRouter](https://openrouter.ai)**, create an API key, and **top up US$5–10**. One single account and API key covers text/vision LLMs, image generation (Google Nano Banana 2 `google/gemini-3.1-flash-image`, OpenAI GPT Image, ByteDance Seedream 即夢, Black Forest Labs FLUX), AND embeddings. *(Note: OpenCode Go is your agent subscription; OpenRouter is pay-as-you-go credit for direct API calls.)*
3. **GitHub + Git + VS Code (必備)**: Register on **[GitHub](https://github.com)** with a long-term personal email, fork and clone this repository, and install **[VS Code](https://code.visualstudio.com)** (plus **[GitHub Desktop](https://desktop.github.com)** if you prefer a GUI).
4. **Local Runtimes via Your Agent (必備)**: Ask your coding agent to verify or install **Python 3 + [`uv`](https://docs.astral.sh/uv/)** and **[Node.js LTS](https://nodejs.org)** so it can run scripts, API calls, and MCP servers locally.
5. **Your Research Materials, Everyday Browser & Laptop (必備)**: Bring your laptop, charger, Chrome browser, a PDF viewer that supports highlights/box annotations, and **10–20 public/non-sensitive images and/or 1–2 PDFs** from your own research (placed in `my-work/sources/raw/`).

### B. Optional by Research & Creative Track (按方向選裝 · 大型軟件請預先下載)

- **3D Modelling (3D 建模與場景操作)**: Install **[Blender](https://www.blender.org)** + **[Blender MCP (`ahujasid/blender-mcp`)](https://github.com/ahujasid/blender-mcp)**.
- **Generative 3D (AI 圖像轉 3D 模型)**: Register on **[Tencent Hunyuan 3D (騰訊混元 3D)](https://3d.hunyuan.tencent.com)** or **[Tripo](https://www.tripo3d.ai)** (other alternatives: **Meshy**, **Rodin**).
- **Virtual Environments / Historical Simulation / Games (虛擬展廳與歷史空間模擬)**: Pre-install **one** engine before the workshop because downloads are large: **[Godot](https://godotengine.org) (Recommended 推薦)**, **[Unity](https://unity.com)** (or **[Tuanjie Engine 團結引擎](https://unity.cn)**, Unity's China edition), or **[Unreal Engine](https://www.unrealengine.com)**.

---

## Standard 4-Part Project Folder Layout (`my-work/`)

Inside `my-work/`, organise your materials and outputs using our standard 4-folder research layout:

```text
my-work/
├── self-introduction.example.md   # Copy to self-introduction.md
├── questions.md                   # Running log of questions or 30-minute stop errors
├── sources/
│   ├── raw/                       # 1. Untouched original images & PDFs (never edit in place)
│   └── processed/                 # 2. OCR text, crops, translations & extracted CSV tables
├── research/                      # 3. Notes (Design Docs & Logs), skills & drafts
└── artifacts/                     # 4. Git-ignored large files (.glb, .blend, image batches, game exports, SQLite DBs)
```

---

## The Two Sessions (12 Modules · `M1`–`M12`)

1. **Session 1 (`M1`–`M6`)** — Friday 6 November 2026, 2:30–4:30 PM (Hong Kong time):
   - **`M1` (14:30–14:45)**: Environment Setup, GitHub Clone & Coding Agent Basics
   - **`M2` (14:45–15:05)**: Research Ideation, Markdown Notes (`Design Doc` & `Log`) & Agent Skills
   - **`M3` (15:05–15:20)**: Browser Collection & Automated Batch Downloading/Organizing
   - **`M4` (15:20–15:50)**: Digitization: Image Processing (incl. IIIF), OCR (Newspapers & Manuscripts) & Image Description
   - **`M5` (15:50–16:15)**: In-Place Annotation (Texts & Visuals-to-PDF), Mechanical Extraction & Git Attribution Tracking
   - **`M6` (16:15–16:30)**: Visual Ideation & Generation: HTML, SVG & OpenRouter Image Generation APIs
   - Instructions: **[session-01/instructions.md](session-01/instructions.md)**
2. **Session 2 (`M7`–`M12`)** — Friday 13 November 2026, 2:30–4:30 PM (Hong Kong time):
   - **`M7` (14:30–14:50)**: High-Resolution Structured Data Extraction via API Calls (extracting thorough data & metadata without prematurely locking down the schema)
   - **`M8` (14:50–15:10)**: Iterative Data Modeling, Relational Database Construction & Verification
   - **`M9` (15:10–15:30)**: Cross-Media Pattern Analysis (Concrete Motifs & Abstract Ideas) & Semantic Search Systems
   - **`M10` (15:30–15:50)**: Historical/Social Networks, GIS & Source-Constrained 2D/3D Spatial Preview (Historical Simulation)
   - **`M11` (15:50–16:10)**: Research Workbench (對內展示與核查台) & End-to-End Evidence-Chain Verification
   - **`M12` (16:10–16:30)**: External Research Output & Publishing: LaTeX/Markdown Papers, Slide Decks & Web Research Platforms
   - Instructions: **[session-02/instructions.md](session-02/instructions.md)**

---

## Updating the Website (Maintainers Only)

Public Q&A is written once, one question per file in `site/src/content/qa/`, alongside `site/src/content/preparation.md` and `site/src/content/workshops.md`. For website maintainers: use Node 22 (deployment uses 22.14.0), then inside `site/`:

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

Changes to `site/` on this repository's `main` branch are checked, built, and published to GitHub Pages through GitHub Actions. Participant forks do not deploy to the instructor's website.
