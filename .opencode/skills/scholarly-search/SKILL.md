---
name: scholarly-search
description: Search scholarship: OpenAlex by API; Google Scholar, Bing and Baidu by the researcher.
---

1. Search under every known name of the subject (e.g. Canton Christian College · 格致書院 · 嶺南學堂).
2. Query OpenAlex: `https://api.openalex.org/works?search=<terms>&per-page=10`. Save the raw JSON to `my-work/sources/processed/`.
3. For Google Scholar, Bing and Baidu: these sites do not allow automated search. Suggest queries in English and Chinese; the researcher searches and saves the results.
4. Make a reading list in `my-work/research/reading-list.md`: year, title, author, link.
5. Record every search (engine, query, date, number of hits) in `my-work/research/log.md`.
6. Never describe a work you have not opened.
