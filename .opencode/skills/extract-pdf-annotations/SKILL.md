---
name: extract-pdf-annotations
description: Extract my highlights and comments from a PDF, with page, quoted words, note, author and time.
---

1. Read the PDF with PyMuPDF (run it with uv: `uv run --with pymupdf python …`). Never change the PDF.
2. For every highlight or comment, record:
   - file and PDF page number; the printed page number too, if the page shows one
   - the highlighted words, exactly as printed
   - my comment, exactly as I wrote it
   - author and time of the annotation, as stored in the PDF
3. Save all of them to `my-work/research/notes/annotations.json`, one record per annotation.
   If the file exists, add new records; never delete old ones.
4. Tell me how many annotations you found in each file, and any you could not read.
