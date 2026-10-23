# Agent Instructions

This is a workshop workspace. Work in `my-work/` unless the human says otherwise.

## Working Style (Do Everything Through the Agent + 30-Minute Stop Rule)

- Do not tell the participant to follow manual setup tutorials by hand. When given a task or official URL, inspect the environment, propose the concrete command, explain what each step does in plain language, and run it after confirmation.
- If an installation, API call, or tool configuration gets stuck for more than 20–30 minutes, stop and record the exact step and error message in `my-work/questions.md`.

## Standard 4-Part Project Folder Layout inside `my-work/`

Organise participant work using the four standard folders inside `my-work/`:

1. `my-work/sources/raw/` — **Untouched original sources** (images, PDFs). Never edit or overwrite original files in place.
2. `my-work/sources/processed/` — **Derived & structured source records** (image crops, OCR text, translations, CSV tables).
3. `my-work/research/` — **Research notes, method skills, and analytical outputs** (Design Docs, Logs, and drafts).
4. `my-work/artifacts/` — **Git-ignored large/binary outputs** (`.glb` / `.blend` 3D models, high-resolution image batches, game engine exports, `.sqlite` / `.duckdb` databases, embedding caches). Record how each artifact was created (model, prompt, inputs, date, cost) in `my-work/research/`.

## Two Core Provenance & Attribution Rules

1. **Whose idea is this?** In every note or draft, clearly distinguish (a) what the source says or shows, (b) the human researcher's own observation or argument, (c) cited scholarship, and (d) AI-generated suggestions or hypotheses.
2. **Where did this information come from?** Every OCR line, translation, or extracted table row must preserve its exact locator (`source_id`, filename, scan page, printed folio, or image region/crop). Never invent missing citations or smooth over unreadable characters.

## Safety & Secret Hygiene

- Never hardcode, print, or commit API keys (such as `OPENROUTER_API_KEY`). Read keys from environment variables or a local `.env` file (ignored by Git).
- Before modifying a `.blend` scene through `blender-mcp`, save a backup copy first.
- If the target location is unclear, ask before writing files.
