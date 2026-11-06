以下為兩場工作坊所包含的工作坊模組（第一場 M1–M6，第二場 M7–M12）；各模組完全按照大家提出的研究需要與研究場景設計，並增加了對內工作台核查與對外成果呈現等環節。關於課前需要準備的工作，請看下方[課前準備](#preparation)。

### 第一場 · 11 月 6 日（週五）14:30–16:30 · 六個模組（已完成）

第一場實際講授的六個模組，是一條研究的循環；所有示範的材料、skill 與結果都在 [DH 工作區](https://github.com/boan-anbo/art-ai-workshop-2026)裡（見上方[課後更新](#update)）。

<h4 id="module-m1">M1　模型與 harness</h4>

<strong>約 35 分鐘</strong>

怎樣讀模型排行榜與模型卡（價格、token、context）；從聊天到 agent：什麼是 harness、工具調用如何運作；模型是智力，不是知識庫，要配上材料與核查；工作區、OpenCode 與 OpenCode Go 的設定；訓練資料從哪裡來，以及隱私：資料去了哪裡、怎樣降低風險。

工具：[OpenCode](https://opencode.ai) · [OpenCode Go](https://opencode.ai/go) · [Artificial Analysis](https://artificialanalysis.ai)｜指南：[模型](https://www.dhguide.org/models) · [與 agent 協作](https://www.dhguide.org/working-with-agents)

<h4 id="module-m2">M2　筆記</h4>

<strong>約 10 分鐘</strong>

兩種文件：整理好的思路（Design Doc）與過程紀錄（Log）；Markdown 的七種記號；純文字為什麼經得起時間；用一個真實的問題（嶺南從哪裡開始？）讓 agent 記下發現與下一步。

工具：[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) · [VS Code](https://code.visualstudio.com)

<h4 id="module-m3">M3　找材料</h4>

<strong>約 15 分鐘</strong>

按材料選搜索方式：內建網頁搜索、API（OpenAlex、大都會博物館）、Google Scholar（自己搜，或用第三方 API）、只為人設計的網站則用瀏覽器（Chrome MCP 或 agent-browser，注意權限與隱私）；下載、整理、記錄搜過哪裡。

工具：[OpenAlex](https://openalex.org) · [Met API](https://metmuseum.github.io/)｜指南：[工具](https://www.dhguide.org/tools)

<h4 id="module-m4">M4　Skill</h4>

<strong>約 10 分鐘</strong>

把方法寫成 skill：與 prompt 的區別；什麼時候該寫；短、用平常話、可以組合（例如 format-paper → chicago-style）；讓 agent 替你寫，再像老師一樣測試與修改；使用與分享別人的 skill。

指南：[Agent Skills](https://www.dhguide.org/agent-skills)

<h4 id="module-m5">M5　在材料裡搜</h4>

<strong>約 25 分鐘</strong>

直接請 agent 擴展關鍵詞搜索；搜不到的材料：OCR 與視覺大模型轉寫（兩者錯法不同：OCR 的錯看得見，模型會編）；把圖片變成文字描述再搜；關鍵詞與語義檢索（embedding）的區別；抽象主題的提要；用 review sheet 壓縮命中結果，再決定精讀哪裡。

工具：[PaddleOCR](https://aistudio.baidu.com/paddleocr) · [OpenRouter](https://openrouter.ai)｜指南：[數位化](https://www.dhguide.org/digitization) · [視覺](https://www.dhguide.org/vision)

<h4 id="module-m6">M6　精讀與綜合</h4>

<strong>約 18 分鐘</strong>

在 PDF 上精讀與批註（頁碼、不被鎖死、時間戳）；用 skill 提取批註，整理成標明出處、作者與時間的筆記；分清原文、你、學者與 AI 的聲音；加上自己的判斷，寫出綜合表；留給下週的挑戰：你怎樣核實自己的結論？

工具：[Adobe Acrobat Reader](https://get.adobe.com/reader/) · [Git](https://git-scm.com)｜指南：[標註](https://www.dhguide.org/annotation)

### 第二場 · 11 月 13 日（週五）14:30–16:30 · M7–M12

<h4 id="module-m7">M7　透過 API Calls 提取高解析度結構化數據</h4>

<strong>14:30–14:50 · 約 20 分鐘</strong>

講解如何透過獨立 <strong>API Calls</strong>（控制分塊粒度並注入背景 Context）提取結構化數據；注意在提取階段<strong>不要過早定死 Schema</strong>，而是先把<strong>數據及元數據（Data & Metadata）盡量提取充分</strong>並保留原文索引，方便後續隨時回原文做二次提取與分析。

工具：[Python](https://www.python.org)＋[uv](https://docs.astral.sh/uv/) · [OpenRouter API](https://openrouter.ai/docs/quickstart) · JSON／CSV｜指南：[提取](https://www.dhguide.org/extraction)

<h4 id="module-m8">M8　迭代數據建模（Iterative Modeling）、關係型資料庫建庫與核查</h4>

<strong>14:50–15:10 · 約 20 分鐘</strong>

按<strong>「迭代建模 → 建成[關係型資料庫（Relational Database）](https://en.wikipedia.org/wiki/Relational_database)→ 集中核查」</strong>推進；講解關係型資料庫的分表、關聯與 Schema 遷移，並在建庫後結合原文定位器（Trace）與 `LLM-as-a-Judge` 進行系統核查。

工具：[關係型資料庫簡介](https://en.wikipedia.org/wiki/Relational_database) · [SQLite](https://www.sqlite.org/) · Trace 定位器 · `LLM-as-a-Judge`｜指南：[提取](https://www.dhguide.org/extraction) · [研究](https://www.dhguide.org/research)

<h4 id="module-m9">M9　跨媒介模式分析與語義檢索系統</h4>

<strong>15:10–15:30 · 約 20 分鐘</strong>

展示建庫後如何把數據用起來：演示<strong>尋找具體母題（Concrete Motifs）</strong>與<strong>尋找抽象概念（Abstract Ideas）</strong>兩種跨媒介模式分析，並運用 Text / Visual <strong>Embeddings</strong> 將個人語料與圖集做成自己的檢索系統。

工具：[OpenRouter Embeddings](https://openrouter.ai/docs/api-reference/embeddings) · [OpenRouter Vision](https://openrouter.ai/docs/guides/overview/multimodal/image-understanding)｜指南：[向量](https://www.dhguide.org/vectors) · [語義搜尋](https://www.dhguide.org/semantic-search) · [圖像搜尋](https://www.dhguide.org/image-search)

<h4 id="module-m10">M10　歷史／社會網絡、GIS 與史料約束下的 2D/3D 空間預演（歷史模擬）</h4>

<strong>15:30–15:50 · 約 20 分鐘</strong>

在基礎庫之上回原文做專門提取與應用：展示<strong>歷史與社會網絡（Network Analysis）</strong>及 <strong>GIS 空間映射</strong>，並重點講解<strong>「史料約束下的 2D/3D 空間預演與歷史模擬（Historical Simulation）」</strong>——如何在史料證據約束下區分有據、推論與補全，將大工程拆成小塊迭代推進。

工具：[Blender](https://www.blender.org)＋[Blender MCP（`ahujasid/blender-mcp`）](https://github.com/ahujasid/blender-mcp) · [Tripo](https://www.tripo3d.ai)／[騰訊混元 3D](https://3d.hunyuan.tencent.com) · [Godot](https://godotengine.org)（推薦）／[Unity](https://unity.com)／[團結引擎](https://unity.cn)／[Unreal Engine](https://www.unrealengine.com)｜指南：[關係](https://www.dhguide.org/relations) · [地圖](https://www.dhguide.org/maps) · [重建](https://www.dhguide.org/reconstruction)

<h4 id="module-m11">M11　研究工作台（Workbench）、全系統證據鏈與對內展示核查</h4>

<strong>15:50–16:10 · 約 20 分鐘</strong>

將資料、筆記與模型匯聚成研究者自己的<strong>研究工作台（Workbench，即對內的展示與審視介面）</strong>，現場演示如何透過 Workbench 同時檢視材料、核查全系統證據鏈與版本紀錄，隨時追查任何一條數據、文字或場景物件的原始出處。

工具：研究工作台（Workbench） · [Git Blame](https://git-scm.com/docs/git-blame) · [SQLite](https://www.sqlite.org/)｜指南：[與 agent 協作](https://www.dhguide.org/working-with-agents) · [重建](https://www.dhguide.org/reconstruction)

<h4 id="module-m12">M12　對外學術成果展示與輸出：LaTeX／論文、投影片與研究網站架構</h4>

<strong>16:10–16:30 · 約 20 分鐘</strong>

與 M11 對內的 Workbench 相對應，M12 講研究完成後面向讀者的<strong>對外展示與正式輸出</strong>：（1）<strong>寫成論文</strong>（首推 <strong>[LaTeX](https://www.latex-project.org/)</strong> 或 [Markdown](https://www.markdownguide.org/cheat-sheet/) 自動化排版與引文管理）；（2）<strong>做成投影片（PowerPoint / Slides）</strong>；（3）<strong>做成對外發布的研究平台／網站</strong>（前端與後端、靜態伺服器、全文檢索與真實數據鏈）。

工具：[LaTeX](https://www.latex-project.org/)／[Markdown](https://www.markdownguide.org/cheat-sheet/)／[Pandoc](https://pandoc.org/) · [Slidev](https://sli.dev/) · [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/) · [deck.gl](https://deck.gl) · [Three.js](https://threejs.org)｜指南：[工具](https://www.dhguide.org/tools) · [與 agent 協作](https://www.dhguide.org/working-with-agents)
