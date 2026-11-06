#!/usr/bin/env python3
"""Search OpenAlex for works, save the raw answer, print a short reading list.

Usage:
    python openalex_search.py "Canton Christian College curriculum"

Uses your free OpenAlex key if OPENALEX_API_KEY is set, in the environment
or in .env at the workspace root (get one at
https://openalex.org/settings/api); without a key, searches may be slowed
or refused at busy times. Raw results go to my-work/sources/processed/.
"""

import json
import os
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path


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


def main() -> None:
    if len(sys.argv) < 2:
        sys.exit('Usage: python openalex_search.py "your search words"')
    query = sys.argv[1]
    params = {"search": query, "per-page": "25"}
    key = read_env("OPENALEX_API_KEY")
    if key:
        params["api_key"] = key
    url = "https://api.openalex.org/works?" + urllib.parse.urlencode(params)
    with urllib.request.urlopen(url, timeout=60) as r:
        data = json.load(r)

    out = workspace_root() / "my-work" / "sources" / "processed"
    out.mkdir(parents=True, exist_ok=True)
    slug = re.sub(r"[^a-z0-9]+", "-", query.lower()).strip("-")[:60] or "search"
    target = free_name(out / f"openalex-{slug}.json")
    target.write_text(json.dumps(data, ensure_ascii=False, indent=1))

    print(f'{data["meta"]["count"]} works for "{query}"; raw results in {target}')
    for w in data["results"][:10]:
        authors = ", ".join(a["author"]["display_name"] for a in w.get("authorships", [])[:2])
        print(f'{w.get("publication_year")} | {authors} | {w.get("display_name")}')
    print("Check each one before you use it: the first hit can be irrelevant.")


if __name__ == "__main__":
    main()
