# Local Artifacts (`my-work/artifacts/`)

Put **large generated or binary files** here so they stay on your computer and out of Git:

- Generated 3D models (`.glb`, `.gltf`, `.fbx`, `.obj`, `.stl`) and Blender scenes (`.blend`, `.blend1`)
- High-resolution generated image batches or video/audio files
- Game engine exports or scene builds (Godot, Unity / Tuanjie, Unreal Engine)
- Local databases (`.sqlite`, `.db`, `.duckdb`), OCR JSON dumps, and embedding caches

Everything inside `my-work/artifacts/` (except this `README.md`) is ignored by `.gitignore`. Whenever you generate an artifact here, record its **source input, model, prompt/settings, date, and cost** in a Markdown note inside `my-work/research/`.
