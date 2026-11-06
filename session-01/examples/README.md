# Session 1 · example outputs

What the agent produced in the slides (6 November 2026), kept for reference.
Run the same requests in your own `my-work/` and compare. Inputs are in `my-work/`.

| Module | Example |
|---|---|
| 2 · Notes | `research/design-doc.md`, `research/log.md` |
| 3 · Find sources | `research/reading-list.md`; `research/openalex_search.py` (one OpenAlex search, your own key); `met-search/` (a small search page on the Met's API) |
| 4 · Skills | the skills themselves, in `.opencode/skills/` (for example `scholarly-search`, `format-paper` → `chicago-style`) |
| 5 · Search within sources | `research/transcribe.py` (a page image → a vision model on OpenRouter, faithful-transcription prompt); `sources/processed/*.description.md` (real image descriptions of the two Met paintings, made with `describe-image`); `research/review-sheet.md`; `research/notes/synopses.md` |
| 6 · Read and synthesize | `research/notes/annotations.json` (what `extract-pdf-annotations` returns), `research/notes/macao.md` (notes that say where, whose and when), `research/notes/summary-beginnings.md`, `research/synthesis.md`, `research/verification.md` |

Some outputs are real runs; a few (the annotations, the notes on Macao, the synthesis)
are examples written to match the slides. Copy the shape, not the conclusions.
