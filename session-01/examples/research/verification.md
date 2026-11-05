# Verification report — `my-work/research/draft.tex`

Date: 6 November 2026
Scope: every sentence in the draft carrying a `\cite` command.
Method: citation keys resolved through `my-work/research/references.md`; each claim checked against the processed page text and, where a page image exists, against the page image itself (`my-work/sources/raw/ccc-1908-p12.png`). The draft was not edited.

Source keys used:

- `ccc1908` → `my-work/sources/processed/ccc-1908-p12.txt` (printed p. 9 / scan p. 12)
- `corbett1963` → `my-work/sources/processed/corbett-1963-p31.txt` (p. 31)

## Summary

| # | Draft line | Claim | Cite | Verdict |
|---|---|---|---|---|
| 1 | 2 | College opened 3 June 1899 with six students | ccc1908, p. 9 | **VERIFIED** |
| 2 | 3 | June 1900 moved to Macao, and then to Hong Kong | ccc1908, p. 9 | **OVERCLAIM** |
| 3 | 4 | Corbett gives the same date for the move | corbett1963, p. 31 | **UNSUPPORTED** |
| 4 | 5 | Returned to Canton in 1904 | ccc1908, p. 9 | **OVERCLAIM** |

No `WRONG PAGE` and no `QUOTE DRIFT` findings: both cited page numbers match the pages in the references file, and no quoted wording is altered (the draft quotes nothing directly).

---

## 1. Line 2 — opening date and first enrolment

> The College opened on 3 June 1899 with six students.\cite[9]{ccc1908}

**Verdict: VERIFIED**

Source, `ccc-1908-p12.txt` line 4:

> "With its new organization the College opened June 3, 1899, with six students."

The date, the year and the number of students all match exactly. The page image confirms the reading: the line runs across the two text columns interrupted by the portrait of Rev. Oscar F. Wisner, and the printed folio "9" is visible at the foot of the page, so the `[9]` locator is correct.

---

## 2. Line 3 — the move of 1900

> In June 1900 it moved to Macao, and then to Hong Kong.\cite[9]{ccc1908}

**Verdict: OVERCLAIM**

The first clause is supported; the second is not. Source, `ccc-1908-p12.txt` line 4:

> "In June of 1900, on account of the disturbed condition of China, the school was moved to Macao, a Portuguese settlement near Hongkong, where it remained until removed to its present location in 1904."

The page gives one move only: Canton → Macao, in June 1900. Hong Kong appears solely as a geographical reference — Macao is "a Portuguese settlement near Hongkong" — and the next clause says the school stayed in Macao until 1904. There is no second move to Hong Kong on this page. The draft turns a place name used for orientation into a destination, which invents a leg of the journey.

Suggestions (not applied): either drop "and then to Hong Kong", or rephrase to reflect the page, e.g. "In June 1900 it moved to Macao, a Portuguese settlement near Hong Kong, where it remained until 1904."

---

## 3. Line 4 — Corbett's date

> Corbett gives the same date for the move.\cite[31]{corbett1963}

**Verdict: UNSUPPORTED** (the source says the opposite)

Source, `corbett-1963-p31.txt` line 4:

> "Early in July the situation became so alarming that the College, both faculty and students, was hastily transferred to Macao, where the first"

Corbett dates the transfer to **early July**, not June, and offers no day of the month; the comparison "the same date" is therefore false on both counts. The transcription breaks off mid-sentence ("where the first"), so the page is not complete, but nothing in the surviving text could supply a June date.

This is also a substantive disagreement worth flagging in the draft rather than smoothing over: the 1908 promotional pamphlet says June 1900, the 1963 history says early July. The most likely reading is that the decision/upheaval is dated to June in one account and the actual removal to early July in the other, but that reconciliation is an inference, not something either page states.

Suggestions (not applied): "Corbett, by contrast, dates the transfer to early July 1900" — and, if the discrepancy matters to the argument, say so explicitly.

---

## 4. Line 5 — return to Canton

> It returned to Canton in 1904.\cite[9]{ccc1908}

**Verdict: OVERCLAIM**

Source, `ccc-1908-p12.txt` line 4:

> "where it remained until removed to its present location in 1904."

The page dates the removal to 1904 but describes the destination only as "its present location"; it does not name Canton in that sentence, and it does not use the language of return. "Canton" is supplied by the reader from the surrounding context — the 1894 Pati School is placed "in the suburbs of Canton" earlier on the same page, and the enrolment figures that follow are given "In 1905, at Canton". Those details make the inference safe, but they are not the cited sentence, and a reader checking the citation for "returned to Canton in 1904" will not find it there word for word.

Suggestions (not applied): "It removed to its present location, Canton, in 1904" with a note that Canton is named on the same page in the 1905 enrolment sentence, or widen the locator to the page and phrase the sentence as an inference.

---

## Notes on what was checked and what was not

- Page images: only `ccc-1908-p12.png` exists in `my-work/sources/raw/`; the Corbett page is available as processed text only, so its wording rests on the transcription, which is marked "checked on the page image" in its header.
- Both `[9]` locators point to the printed folio, which is the convention recorded in `references.md`; no page-number mismatch was found.
- The `\section{Beginnings}` heading carries no citation and was not assessed.
- No claim in the draft required a `QUOTE DRIFT` verdict, since the draft paraphrases throughout and quotes no source wording.
