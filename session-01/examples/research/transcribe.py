#!/usr/bin/env python3
"""Transcribe one page image faithfully through a vision model on OpenRouter.

Usage:
    python transcribe.py my-work/sources/raw/memoir-p2-col12.png
    python transcribe.py page.png --model google/gemini-3.8-flash

Needs OPENROUTER_API_KEY in the environment (or in a .env file at the
workspace root). The result goes to my-work/sources/processed/ as
<image name>.transcription.md; nothing is overwritten, and the original
image is never changed. Run it from anywhere inside the workspace.
"""

import argparse
import base64
import json
import mimetypes
import os
import sys
import urllib.request
from datetime import date
from pathlib import Path

PROMPT = """Transcribe this page faithfully.
Copy the text exactly as printed, in its original script.
Keep the line breaks.
Do not correct, modernise, translate or complete anything.
Where a character cannot be read, write [?].
Output only the transcription."""


def workspace_root() -> Path:
    """The folder that holds AGENTS.md: the workspace, wherever this script is run from."""
    for parent in Path(__file__).resolve().parents:
        if (parent / "AGENTS.md").exists():
            return parent
    return Path.cwd()


def read_env(name: str) -> str | None:
    """Read a key from the environment, or from .env at the workspace root."""
    if os.environ.get(name):
        return os.environ[name]
    env = workspace_root() / ".env"
    if env.exists():
        for line in env.read_text().splitlines():
            if line.startswith(name + "="):
                return line.split("=", 1)[1].strip() or None
    return None


def free_name(path: Path) -> Path:
    """Never overwrite: add -2, -3 … if the file already exists."""
    n = 2
    candidate = path
    while candidate.exists():
        candidate = path.with_name(f"{path.stem}-{n}{path.suffix}")
        n += 1
    return candidate


def read_key() -> str:
    key = read_env("OPENROUTER_API_KEY")
    if not key:
        sys.exit("Set OPENROUTER_API_KEY first (see .env.example).")
    return key


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("image")
    ap.add_argument("--model", default="google/gemini-3.8-flash")
    ap.add_argument("--out", default=None, help="default: my-work/sources/processed in the workspace")
    args = ap.parse_args()

    image = Path(args.image)
    mime = mimetypes.guess_type(image.name)[0] or "image/png"
    data = base64.b64encode(image.read_bytes()).decode()
    body = {
        "model": args.model,
        "temperature": 0,
        "messages": [{"role": "user", "content": [
            {"type": "text", "text": PROMPT},
            {"type": "image_url", "image_url": {"url": f"data:{mime};base64,{data}"}},
        ]}],
    }
    req = urllib.request.Request(
        "https://openrouter.ai/api/v1/chat/completions",
        data=json.dumps(body).encode(),
        headers={"Authorization": f"Bearer {read_key()}", "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=300) as r:
        reply = json.load(r)
    text = reply["choices"][0]["message"]["content"]

    out = Path(args.out) if args.out else workspace_root() / "my-work" / "sources" / "processed"
    out.mkdir(parents=True, exist_ok=True)
    target = free_name(out / f"{image.stem}.transcription.md")
    header = f"<!-- source: {image} · model: {reply.get('model', args.model)} · {date.today()} -->\n\n"
    target.write_text(header + text + "\n")
    print(f"Saved {target}")


if __name__ == "__main__":
    main()
