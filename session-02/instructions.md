# Session 2 · From API Extraction & Relational Databases to Pattern Analysis, Historical Simulation, End-to-End Provenance & Publishing

Prepare before **Friday, 13 November 2026, 2:30–4:30 PM (Hong Kong time)**.

Chinese reading guide & two-session outline: **[https://boan-anbo.github.io/art-ai-workshop-2026/#workshops](https://boan-anbo.github.io/art-ai-workshop-2026/#workshops)**

## What We Will Do (Modules M7–M12)

Starting from your `my-work/sources/raw/` materials, your `my-work/sources/processed/` records, and your notes/skills from Session 1, we will cover six modules (`M7`–`M12`, aligned with **[Lingnan Guide to Digital and AI Humanities `dhguide.org`](https://www.dhguide.org)**):

1. **Module M7 · High-Resolution Structured Data Extraction via API Calls (`14:30–14:50`, 20 min)**:
   - Detailed walkthrough of extracting structured data via **independent API calls** (archival description, entity extraction, and full-text retention) ([`dhguide.org/extraction`](https://www.dhguide.org/extraction), [`dhguide.org/agent-skills`](https://www.dhguide.org/agent-skills)).
   - **Avoid locking down the schema prematurely during extraction**: extract thorough **data and metadata (數據及元數據)** alongside full-text locators so you can always return to the primary text for grounded secondary extractions and analysis.
2. **Module M8 · Iterative Data Modeling, Relational Database Construction & Verification (`14:50–15:10`, 20 min)**:
   - Follow the sequence **Iterative Modeling → Build Relational Database → Centralized Verification** ([`dhguide.org/extraction`](https://www.dhguide.org/extraction), [`dhguide.org/relations`](https://www.dhguide.org/relations)).
   - Understand what a **Relational Database** is (how to split tables, link foreign keys, and run schema migrations as new objects arrive), and perform verification (character-level Trace + `LLM-as-a-Judge`) once the database is built.
3. **Module M9 · Cross-Media Pattern Analysis & Semantic Search Systems (`15:10–15:30`, 20 min)**:
   - Put the database to work: have AI assist in identifying commonalities/patterns and write results to disk; demonstrate both **finding a concrete motif (找具體母題)** and **finding an abstract concept (找抽象概念)** across media.
   - Use **Text & Visual Embeddings** to turn your own corpus and image collection into a local search engine ([`dhguide.org/vectors`](https://www.dhguide.org/vectors), [`dhguide.org/semantic-search`](https://www.dhguide.org/semantic-search), [`dhguide.org/image-search`](https://www.dhguide.org/image-search)).
4. **Module M10 · Historical/Social Networks, GIS & Source-Constrained 2D/3D Spatial Preview (Historical Simulation) (`15:30–15:50`, 20 min)**:
   - Quick demonstration of **Historical/Social Networks** and **GIS Mapping** built by going back to indexed sources ([`dhguide.org/relations`](https://www.dhguide.org/relations), [`dhguide.org/maps`](https://www.dhguide.org/maps)).
   - Focus on **Source-Constrained 2D/3D Spatial Preview & Historical Simulation (歷史模擬)**: how to generate 2D/3D scenes under historical evidence constraints, distinguish what is evidenced, inferred, or invented, and break a complex reconstruction into small iterative chunks ([`dhguide.org/reconstruction`](https://www.dhguide.org/reconstruction)).
5. **Module M11 · Research Workbench (對內展示與核查台) & End-to-End Evidence-Chain Verification (`15:50–16:10`, 20 min)**:
   - Bring your materials, notes, and models together into a **Research Workbench (an internal presentation and inspection interface for the researcher)**, and use the Workbench to inspect sources and verify the end-to-end evidence chain and Git history across the entire system ([`dhguide.org/working-with-agents`](https://www.dhguide.org/working-with-agents), [`dhguide.org/reconstruction`](https://www.dhguide.org/reconstruction)).
6. **Module M12 · External Research Output & Publishing: LaTeX/Papers, Slide Decks & Web Research Platforms (`16:10–16:30`, 20 min)**:
   - While M11's Workbench is for internal inspection, M12 covers **external presentation and formal outputs** ([`dhguide.org/working-with-agents`](https://www.dhguide.org/working-with-agents), [`dhguide.org/tools`](https://www.dhguide.org/tools)):
     1. **Writing Papers**: **LaTeX** recommended (or Markdown; your Agent can also convert to Word, though LaTeX is strongly recommended for scholarly citations and layout);
     2. **Making Presentations**: generating **PowerPoint / Slide Decks**;
     3. **Building & Publishing a Research Platform / Website**: understanding frontend vs backend, what a **Static Server** is, where data is stored, full-text search, and auditing the real data chain.

## Bring to Session 2

- Your **coding agent** (OpenCode with OpenCode Go, or your own Claude Code / Codex) and your **funded OpenRouter API key** (stored locally in `.env`, never committed to Git).
- Your **Session 1 outputs** in `my-work/` (`sources/raw/`, `sources/processed/`, `research/`, and `my-work/questions.md`).
- **Pre-installed specialist software** for your chosen track (**Blender + `blender-mcp`**, **Tencent Hunyuan 3D / Tripo**, or **Godot [Recommended] / Unity / Tuanjie / Unreal Engine**).

If you have a new question before Session 2, [post directly in GitHub Issues](https://github.com/boan-anbo/art-ai-workshop-2026/issues/new?template=question.yml).
