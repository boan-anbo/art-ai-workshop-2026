以下為兩場工作坊所包含的工作坊模組（第一場 M1–M6，第二場 M7–M12）；各模組完全按照大家提出的研究需要與研究場景設計，並增加了對內工作台核查與對外成果呈現等環節。關於課前需要準備的工作，請看下方[課前準備](#preparation)。

### 第一場 · 11 月 6 日（週五）14:30–16:30 · M1–M6

<h4 id="module-m1">M1　基礎環境 Setup、下載工作區與 Coding Agent 入門</h4>

<strong>14:30–14:45 · 約 15 分鐘</strong>

先註冊 GitHub 並把工作坊倉庫下載（clone）到本地，配置好 OpenCode（推薦在 OpenCode Plan 中選用熱門的 <strong>DeepSeek V4.2 High／Max</strong>、<strong>DeepSeek V4.1 Flash</strong> 或 <strong>GLM-5.3／GLM-5.3 Flash</strong>）與 OpenRouter 基礎環境；重點帶大家跑通 Coding Agent 的基本工作方式，並簡介什麼是 Skill。

工具：[GitHub](https://github.com) · [OpenCode](https://opencode.ai) · [OpenRouter](https://openrouter.ai) · [VS Code](https://code.visualstudio.com)｜指南：[入門](https://www.dhguide.org/start) · [模型](https://www.dhguide.org/models) · [與 agent 協作](https://www.dhguide.org/working-with-agents)

<h4 id="module-m2">M2　研究構思、Markdown 筆記（Design Doc & Log）與 Agent Skill</h4>

<strong>14:45–15:05 · 約 20 分鐘</strong>

講如何用 [Markdown](https://www.markdownguide.org/cheat-sheet/) 寫想法筆記並與 Agent 配合（如口述想法讓 Agent 整理紀錄，或對已有筆記做索引），區分<strong>整理好的思路文檔（Design Doc）</strong>與<strong>過程紀錄（Log）</strong>，並講解如何把反覆使用的規範與流程寫成自然語言 <strong>Agent Skill</strong>。

工具：[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) · [OpenCode](https://opencode.ai) · Agent Skills｜指南：[Agent Skills](https://www.dhguide.org/agent-skills) · [研究](https://www.dhguide.org/research)

<h4 id="module-m3">M3　使用瀏覽器收集材料與批量下載整理</h4>

<strong>15:05–15:20 · 約 15 分鐘</strong>

展示如何讓 Agent 接入日常 [Chrome 瀏覽器](https://www.google.com/chrome/)，在資料庫與館藏網站搜尋線索、協助<strong>批量下載（Batch Download）</strong>材料並自動整理歸檔到工作區目錄。

工具：[Google Chrome](https://www.google.com/chrome/) · [Met API](https://metmuseum.github.io/) · [AIC API](https://api.artic.edu/docs/)｜指南：[工具](https://www.dhguide.org/tools)

<h4 id="module-m4">M4　數位化：圖像處理（含 IIIF）、OCR（報紙與手稿）與圖像描述</h4>

<strong>15:20–15:50 · 約 30 分鐘</strong>

分三步講授材料數位化與初步處理：（1）<strong>圖像處理與 [IIIF](https://en.wikipedia.org/wiki/International_Image_Interoperability_Framework)</strong>；（2）<strong>OCR</strong>（以歷史報紙與手稿為例）；（3）<strong>圖像描述（Image Description）</strong>，用多模態模型為視覺材料生成可檢索的文字描述。

工具：[Python](https://www.python.org) · [IIIF（Wikipedia 簡介）](https://en.wikipedia.org/wiki/International_Image_Interoperability_Framework) · [OpenRouter Vision](https://openrouter.ai/docs/guides/overview/multimodal/image-understanding) · [PaddleOCR](https://www.paddleocr.ai)｜指南：[數位化](https://www.dhguide.org/digitization) · [視覺](https://www.dhguide.org/vision)

<h4 id="module-m5">M5　原位標註（文本與視覺轉 PDF）、機械提取與 Git 版本歸屬追蹤</h4>

<strong>15:50–16:15 · 約 25 分鐘</strong>

（1）<strong>原位標註與機械提取</strong>：文本與轉為 PDF 的視覺材料都可在任意位置高亮或框選批註，再用腳本將批註與局部一併提取出來，與 Markdown 筆記打通；（2）<strong>討論與歸屬追蹤（Git Setup）</strong>：與 AI 討論時要求生成內容寫入獨立紀錄、不混入原稿，並透過 Git／GitHub 追蹤每次改動歸屬。

工具：[Adobe Acrobat Reader（PDF 閱讀器）](https://get.adobe.com/reader/) · [Python](https://www.python.org) · [Git](https://git-scm.com)／[GitHub](https://github.com)｜指南：[標註](https://www.dhguide.org/annotation) · [與 agent 協作](https://www.dhguide.org/working-with-agents)

<h4 id="module-m6">M6　視覺構思與圖像生成：HTML、SVG 與 OpenRouter 生圖 API</h4>

<strong>16:15–16:30 · 約 15 分鐘</strong>

在構思與探索階段，區分什麼時候用 <strong>[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)</strong>、什麼時候用 <strong>[SVG（向量結構圖）](https://developer.mozilla.org/en-US/docs/Web/SVG)</strong>、什麼時候用 <strong>AI 生圖（Image Generation）</strong>，並演示透過 OpenRouter API 調用生圖模型輔助構思。

工具：[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) · [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) · [OpenRouter 圖像生成 API](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)｜指南：[視覺](https://www.dhguide.org/vision)

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
