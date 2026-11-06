---
name: transcribe-faithfully
description: Transcribe one page image exactly, through a vision model on OpenRouter.
---

Send one page per call, with this prompt:

> Transcribe this page faithfully.
> Copy the text exactly as printed, in its original script.
> Keep the line breaks.
> Do not correct, modernise, translate or complete anything.
> Where a character cannot be read, write [?].
> Output only the transcription.

Save the result to `my-work/sources/processed/<image name>.transcription.md`, with the source, the scan page and the model at the top; never overwrite an earlier transcription. (`session-01/examples/research/transcribe.py` does exactly this.) Never overwrite anything in `sources/raw/`.
