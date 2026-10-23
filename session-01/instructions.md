# Session 1 · Pre-Workshop Preparation, Workflow Principles & Warm-Up

Prepare before **Friday, 6 November 2026, 2:30–4:30 PM (Hong Kong time)**.

Chinese reading guide & Q&A website: **[https://boan-anbo.github.io/art-ai-workshop-2026/#preparation](https://boan-anbo.github.io/art-ai-workshop-2026/#preparation)**

> **Core Habit — Do Everything Through Your Coding Agent + 30-Minute Stop Rule:**
> **Do not look for a tutorial and follow it by hand.** Tell your coding agent (OpenCode, Claude Code, or Codex) what you are trying to do, give it the official URL, let it work, and make it explain what it is doing as it goes. If something breaks or gets stuck for more than **30 minutes**, stop immediately and paste the exact step and error message into `my-work/questions.md`.

Complete **Part A (Required for Everyone)** first. Then check **Part B (Optional by Interest Track)** and pre-install only the tools that match your research or creative direction. Do not wait until classroom Wi-Fi to download large 3D or game-engine installers.

---

## Part A · Required for Everyone (全員必備)

### 1. Coding Agent (Required · 核心工作環境)

- **Install OpenCode**: [https://opencode.ai](https://opencode.ai) (terminal version recommended; desktop version also fine).
- **Subscribe to OpenCode Go**: [https://opencode.ai/go](https://opencode.ai/go) — **US$10 / month**, cancel any time. Inside the OpenCode plan (switch via `/models`), we recommend the currently popular **DeepSeek V4.2 (High / Max)** or **DeepSeek V4.1 Flash** models, or **GLM-5.3** and **GLM-5.3 Flash** (other models are more expensive, though some may offer stronger thinking capabilities when needed).
- **Exception — if you already use your own coding agent**: If you already use and pay for **Claude Code** or **Codex**, keep using yours. You do **not** need to buy OpenCode Go on top of an existing coding agent.

### 2. OpenRouter Account & API Key (Required & Critical · 必備且關鍵，請預先儲值 US$5–10)

- **Register at OpenRouter**: [https://openrouter.ai](https://openrouter.ai)
- **Create an API key** (`https://openrouter.ai/settings/keys`) and **top up US$5–10** (`https://openrouter.ai/settings/credits`).
- **Why this is essential and well worth the money**:
  - **OpenCode Go** is your coding agent's own subscription; **OpenRouter** is the unified pay-as-you-go API your scripts and tools call directly during the workshop. They are separate accounts.
  - One single OpenRouter account and API key covers **all three model capabilities** we use across the workshop:
    1. **Text & vision LLMs** — reading scanned pages, newspaper/manuscript OCR, multilingual comparison, and structured extraction ([image-input guide](https://openrouter.ai/docs/guides/overview/multimodal/image-understanding)).
       - **3-Step OCR Order**:
         1. Start with **LLM Vision API** via OpenRouter (e.g., multimodal vision models / DeepSeek Vision);
         2. Try **PaddleOCR API** if newspaper or manuscript layout needs improvement;
         3. Use **OpenCode's built-in vision** only as a last resort.
    2. **Image generation** — evidence-constrained visual reconstruction and creative iteration, including **Google Nano Banana 2 (`google/gemini-3.1-flash-image`)**, **OpenAI GPT Image**, **ByteDance Seedream (即夢)**, and **Black Forest Labs FLUX** ([image-generation guide](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)).
    3. **Embeddings** — text and multimodal similarity search and clustering across your own research materials ([embeddings API](https://openrouter.ai/docs/api_reference/embeddings)).
  - Having one key avoids registering and topping up three or four separate model platforms.
- **Keep your key private**: Save it in a local `.env` file (`OPENROUTER_API_KEY=sk-or-...`) or environment variable. Never paste it into files that get pushed to GitHub.

### 3. GitHub Account, Git & VS Code (Required · 工作區與版本控制)

- **GitHub account**: [https://github.com](https://github.com) — register with a **personal email address** you will still have ten years from now (not your university email, which expires after graduation).
- **Git**: command-line `git`, or **GitHub Desktop** ([https://desktop.github.com](https://desktop.github.com)) as a visual point-and-click option.
- **VS Code**: [https://code.visualstudio.com](https://code.visualstudio.com) — for viewing Markdown notes, CSV tables, and diffs alongside your coding agent.
- **PDF reader supporting highlights and box annotations**: Your existing PDF viewer (macOS Preview, Adobe Acrobat Reader, PDF Expert, Zotero PDF reader, etc.) is fine as long as you can highlight passages and draw boxes on pages.

### 4. Local Runtimes for Agent Scripts & MCP (`Python 3 + uv` and `Node.js`)

You do **not** need to know how to program in Python or JavaScript. Your coding agent uses these local runtimes behind the scenes to call OpenRouter, build small tables/databases, run web viewers, and connect MCP tools:

- **Python 3 + `uv`**: [https://docs.astral.sh/uv/](https://docs.astral.sh/uv/)
- **Node.js (LTS)**: [https://nodejs.org](https://nodejs.org)

Instead of installing and configuring them by hand, open your coding agent and ask it to set them up and verify them for you (see **Part C · Verification** below).

### 5. Bring to the Workshop & Standard 4-Part Project Layout (`my-work/`)

- **Your laptop and charger** (plus a three-button mouse if you plan to work in 3D, and your **everyday Chrome browser** so we can practice human-in-the-loop browser collaboration on library/museum databases).
- **A small folder of your own public / non-sensitive research materials**:
  - **10–20 images** (paintings, manuscripts, seals, woodblock prints, porcelain, bronzes, exhibition or installation documentation; you may also include 2–3 phone photos of physical book/catalogue pages to test batch image cleanup) and/or **1–2 PDFs** (archaeological reports, archival pages, exhibition catalogues, or a theoretical/philosophical book with its Table of Contents and Index pages).
  - Use **public or non-sensitive materials only**—nothing unpublished, restricted, or confidential that should not be sent to an online API.
- **Organise your materials using the 4-part folder structure inside `my-work/`**:
  1. `my-work/sources/raw/` — **Untouched originals** (put your 10–20 images and 1–2 PDFs here; never edit them in place).
  2. `my-work/sources/processed/` — **OCR text, image crops, translations, and extracted CSV tables** (always linked back to `raw/`).
  3. `my-work/research/` — **Reading notes, method definitions, side-by-side comparison notes, and drafts**.
  4. `my-work/artifacts/` — **Git-ignored large files** (`.glb`/`.blend` 3D models, generated image batches, game exports, SQLite DBs, and embeddings).

---

## Part B · Pre-Workshop Setup by Interest Track (按研究與創作方向選裝)

Pick only the tracks that interest you. **Download large installers at home before the workshop.**

### 1. 3D Modelling (如對 3D 建模、器物／建築結構與場景組裝感興趣)

- **Install Blender**: [https://www.blender.org](https://www.blender.org) (current LTS/stable release).
- **Install Blender MCP (`ahujasid/blender-mcp`)**: [https://github.com/ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp).
  - Install and enable `addon.py` inside Blender's Preferences → Add-ons (listening on `127.0.0.1:9876`), and let your coding agent run `uvx blender-mcp` to connect.

### 2. Generative 3D (如對 AI 圖像轉 3D 模型／文物與空間生成感興趣)

- Register an account on **one** of these image-to-3D / text-to-3D platforms:
  - **Tencent Hunyuan 3D (騰訊混元 3D)**: [https://3d.hunyuan.tencent.com](https://3d.hunyuan.tencent.com) — **Chinese interface & free daily quota friendly**, very convenient for generating `.glb`/`.obj` models directly from reference images or prompts.
  - **Tripo**: [https://www.tripo3d.ai](https://www.tripo3d.ai) — **new accounts receive free trial credits** and it supports PayPal / web studio / API.
  - *(Other optional alternatives if you already use them: **Meshy**, **Rodin**.)*

### 3. Virtual Environments, Digital Heritage & Games (如對虛擬展廳、數位文化遺產、歷史空間模擬或互動遊戲感興趣)

- **Pre-install ONE engine before the workshop** (installers are **several GB to 20+ GB** and cannot be downloaded quickly over classroom Wi-Fi):
  - **Godot Engine (Recommended 推薦)**: [https://godotengine.org](https://godotengine.org) — open-source, lightweight, fastest to download and start, and very friendly for coding agent scripts.
  - **Unity**: [https://unity.com](https://unity.com) — widely used for 3D exhibitions and walkthroughs. **Chinese / region-friendly alternative**: if Unity Hub sign-in or network fails in your region, install **Tuanjie Engine (團結引擎, Unity China edition)**: [https://unity.cn](https://unity.cn).
  - **Unreal Engine**: [https://www.unrealengine.com](https://www.unrealengine.com) — highest visual fidelity for architectural/heritage scenes, but requires a strong GPU and 20+ GB of free disk space.

---

## Part C · Session 1 Modules (`M1`–`M6`) & Core Methodological Rules (第一場 6 個模組與核心原則)

### Session 1 Schedule (`M1`–`M6` · Friday 6 November 2026, 14:30–16:30)

1. **`M1` · Environment Setup, GitHub Clone & Coding Agent Basics (`14:30–14:45`, 15 min)**:
   - Register GitHub, clone the workshop repository, and configure OpenCode + OpenRouter; focus on how a Coding Agent works and briefly introduce Skills (before diving into Git or Skills later).
2. **`M2` · Research Ideation, Markdown Notes (`Design Doc` & `Log`) & Agent Skills (`14:45–15:05`, 20 min)**:
   - Write research ideation notes in Markdown and collaborate with the Agent (dictating ideas for the agent to organize, or having the agent index written notes); distinguish **structured thinking (`Design Doc`)** from **process records (`Log`)**; learn to write reusable **Agent Skills** for documents and workflows.
3. **`M3` · Browser Collection & Batch Downloading/Organizing (`15:05–15:20`, 15 min)**:
   - Connect your agent to the browser (using your everyday Chrome browser) to search archives and demonstrate **batch downloading (批量下載)** with automatic organization into your workspace folders.
4. **`M4` · Digitization: Image Processing (incl. IIIF), OCR (Newspapers & Manuscripts) & Image Description (`15:20–15:50`, 30 min)**:
   - (a) Image processing & IIIF; (b) OCR illustrated with two representative cases—**Historical Newspapers (報紙)** and **Manuscripts (手稿)**; (c) generating searchable **Image Descriptions (圖像描述)** for visual materials.
5. **`M5` · In-Place Annotation (Texts & Visuals-to-PDF), Mechanical Extraction & Git Attribution Tracking (`15:50–16:15`, 25 min)**:
   - (a) Highlight or annotate texts/archives directly; **convert visual materials to PDF as well (while keeping the raw originals)** so you can box/locate any region and **mechanically extract both annotations and image crops** into Markdown; (b) discuss ideas with AI while keeping AI outputs strictly in their own logs, and **set up Git / GitHub** so every commit clearly records who wrote what.
6. **`M6` · Visual Ideation & Generation: HTML, SVG & OpenRouter Image Generation APIs (`16:15–16:30`, 15 min)**:
   - Understand when to use **HTML**, **SVG**, or **Image Generation** for visual ideation, and call image generation models directly via the **OpenRouter API**.

### Core Methodological Rules for Session 1

In Session 1, every OCR, translation, visual description, and research note follows **two non-negotiable rules**:

1. **Whose idea is this? (這個想法是誰的？)**
   - In `my-work/research/`, explicitly distinguish between:
     - What the primary source directly shows or states;
     - Your own observation, question, or interpretation;
     - Another scholar's published argument;
     - An AI model's candidate description or hypothesis.
2. **Where did this information come from? (這條資訊從哪裡來？)**
   - Never let an OCR pass, summary, or translation strip away the source locator. Every extracted passage or visual note in `my-work/sources/processed/` and `my-work/research/` must keep its **filename + page/folio number + image region/crop**.

---

## Part D · After Installation: 3 Examples to Try with Your Coding Agent (安裝完成後：用這三個例子試一試)

Do all of these **through your coding agent** (OpenCode, Claude Code, or Codex). Do not follow a manual tutorial step by step: copy the prompt to your agent, let it run the check, and ask it to explain what it is doing.

### Example 1 · Verify Local Tools (`git`, `python3`, `uv`, `node`) & Set Up the 4-Folder Workspace

Ask your coding agent:

```text
Please check whether git, python3, uv, and node are installed on my computer. If any of them is missing, help me install it and explain each step in plain language. Then verify that my-work/ has the four folders (sources/raw, sources/processed, research, artifacts) and show me how a script reads from sources/raw and writes a small CSV to sources/processed.
```

### Example 2 · Test Your OpenRouter API Key (Text/Vision, Image Generation & Embeddings)

After saving your OpenRouter key in a local `.env` file (`OPENROUTER_API_KEY=sk-or-...`) inside your workspace, ask your coding agent:

```text
Read OPENROUTER_API_KEY from my local .env file (never print or commit the key itself). Verify that .env and my-work/artifacts/ are ignored by git. Then run a tiny check against OpenRouter to confirm my key and credit balance work for (1) a text/vision LLM, (2) an image generation model (such as google/gemini-3.1-flash-image / Nano Banana 2, GPT Image, Seedream, or FLUX), and (3) an embeddings model, saving any test output in my-work/artifacts/.
```

### Example 3 · Clone Your Workshop Fork (or Optional: Connect Blender + Official `blender-mcp`)

Ask your coding agent:

```text
Please help me fork https://github.com/boan-anbo/art-ai-workshop-2026 into my own GitHub account, clone my fork onto my computer, and verify my git status and remote URLs. (If I also installed Blender for 3D work, help me set up Blender MCP from https://github.com/ahujasid/blender-mcp on 127.0.0.1:9876 via uvx blender-mcp and test reading the active Blender scene.)
```

---

## Questions & Troubleshooting (30-Minute Stop Rule)

Keep a running file `my-work/questions.md`. Whenever something makes no sense or an installation stops with an error for more than 20–30 minutes, stop, paste the exact question or error there, and commit it. We will open each session from these files—not understanding something is a useful deliverable here, not an embarrassment.

For questions you want discussed before the workshop, [post directly in GitHub Issues](https://github.com/boan-anbo/art-ai-workshop-2026/issues/new?template=question.yml) in Chinese or English.
