課前準備分為<strong>必備項目</strong>與<strong>按方向選裝項目</strong>（點擊每一項展開具體安裝與配置說明，並註明每項的用途）：

### 必備項目

<details class="prep-item" id="prep-01">
<summary><span class="prep-heading"><span class="prep-badge">【必備】</span><span class="prep-title">01 Coding Agent（OpenCode 或 Claude Code／Codex）</span></span><span class="prep-purpose">用於在本機讀寫檔案、執行腳本與協助完成工作坊所有實作</span></summary>

安裝 [OpenCode](https://opencode.ai)（建議 terminal 版，desktop 版也可以），並訂閱 [OpenCode Go](https://opencode.ai/go)：<strong>US$10／月，可隨時取消</strong>。

<strong>OpenCode 內推薦使用的熱門模型：</strong> 連接 OpenCode Plan（OpenCode Go／Zen，在終端機輸入 `/connect` 連接後以 `/models` 切換）後，目前在 OpenCode 裡最推薦大家選用的主力模型包括：
- <strong>DeepSeek 系列</strong>：<strong>DeepSeek V4.1 Flash（選 High 或 Maximum 檔位）</strong>；
- <strong>GLM 系列</strong>：<strong>GLM-5.3</strong> 或輕量高速的 <strong>GLM-5.3 Flash</strong>。

日常讀寫檔案、跑腳本可優先用這些高性價比模型；其他部分模型雖然價格較貴，但思考與複雜推理能力可能更好一些，可按具體任務需要切換。<strong>如果你已經在使用自己的 coding agent，例如 Claude Code 或 Codex，請繼續使用，不必另買 OpenCode Go。</strong> 需要的是能在本機讀寫檔案、執行工具的 agent。

<strong>從設定到練習，都透過你的 coding agent 做。</strong> 不要自己上網找教學一步一步手動設定。直接告訴你的 coding agent 你想做甚麼，把官方網址給它，讓它執行並要求它邊做邊用白話解釋每一步在做甚麼。<strong>如果某一步卡住超過 30 分鐘，立即停下來，把具體錯誤訊息記進 `my-work/questions.md` 帶到課堂。</strong> 不需要一直重試到成功才來上課。

<p class="prep-check"><strong>完成後檢查：</strong>能在終端機或桌面端與 Agent 正常對話，並讓它讀取或列出目前資料夾內的檔案。</p>

</details>

<details class="prep-item" id="prep-02">
<summary><span class="prep-heading"><span class="prep-badge">【必備】</span><span class="prep-title">02 OpenRouter API Key（預先儲值 US$5–10）</span></span><span class="prep-purpose">用於課堂程式直接呼叫多模態視覺、OCR、圖像生成與向量檢索模型</span></summary>

<strong>所有人都需要</strong>註冊 [OpenRouter](https://openrouter.ai)、建立 API key，並預先<strong>儲值 US$5–10</strong>。請不要把這一步留到課堂才處理。

這筆小額儲值很值得準備：同一帳戶與 API key 能支援文字／LLM 呼叫、圖像生成，以及 embeddings。圖像生成可選 <strong>Google Nano Banana 2（`google/gemini-3.1-flash-image`）</strong>、<strong>OpenAI GPT Image</strong>、<strong>ByteDance Seedream（即夢）</strong> 和 <strong>Black Forest Labs FLUX</strong>；都可透過同一個 OpenRouter key 呼叫，無須為每類模型另開一個帳戶。Embeddings 可用於文字或圖像的相似檢索；不同模型的輸入與能力不同，實作時按任務選擇。

<strong>OpenCode Go 是 coding agent 的模型訂閱；OpenRouter 是課堂程式直接呼叫模型的按用量儲值，兩筆費用分開。</strong> 即使使用自己的 Claude Code 或 Codex，也需要準備 OpenRouter。

API key 只在自己的本機設定，不要放進 Git、公開筆記、截圖或 GitHub Issues。下方有可交給 agent 的測試提示。

<strong>掃描件的 OCR 測試次序</strong>

把原圖與官方說明交給 coding agent，先處理一頁掃描件或手稿，再和原圖核對。不必一次把所有方法都裝好。

1. <strong>先用 LLM Vision API</strong>：透過 [OpenRouter 的多模態圖像輸入](https://openrouter.ai/docs/guides/overview/multimodal/image-understanding)，選能接收圖像的模型；已有 DeepSeek API 的同學也可按其[Vision 官方說明](https://api-docs.deepseek.com/guides/vision/)試做。
2. <strong>結果仍需改善才試 PaddleOCR API</strong>：尤其是一頁掃描件或手稿效果不理想時，把 [PaddleOCR 官方 API 文件](https://www.paddleocr.ai/main/version3.x/inference_deployment/serving/paddleocr_official_api/overview.html)交給 agent，選一小段比較。這不是保證它一定比前一步準確。
3. <strong>最後才用 OpenCode 內建的視覺能力</strong>作後備，不把 agent 當下的看圖結果直接當成核准文字。

前一步已合用就不必往下試。每次保留原圖、OCR 版本、檔名與頁面／區域定位，錯字或未知字回原圖確認。

<p class="prep-check"><strong>完成後檢查：</strong>帳戶已顯示 US$5–10 儲值餘額，並能讓 Agent 透過本機 <code>.env</code> 成功呼叫一次簡單的文字或圖像生成測試。</p>

</details>

<details class="prep-item" id="prep-03">
<summary><span class="prep-heading"><span class="prep-badge">【必備】</span><span class="prep-title">03 GitHub 帳戶、Git 與工作坊倉庫下載</span></span><span class="prep-purpose">用於下載工作坊資料夾並追蹤檔案版本與人機修改紀錄</span></summary>

用會長期保留的<strong>私人電郵</strong>註冊 [GitHub](https://github.com)。安裝 [Git](https://git-scm.com)；偏好圖形介面的同學可用 [GitHub Desktop](https://desktop.github.com)。

把 [workshop repository](https://github.com/boan-anbo/art-ai-workshop-2026) <strong>fork 到自己的帳戶，再 clone 自己的 fork 到本機</strong>。記下自己的 fork URL，並請 agent 確認本機路徑及 remote。

<p class="prep-check"><strong>完成後檢查：</strong>已在自己 GitHub 帳號下看到 fork 出的倉庫，且本機成功 <code>git clone</code> 出 <code>art-ai-workshop-2026</code> 資料夾。</p>

</details>

<details class="prep-item" id="prep-04">
<summary><span class="prep-heading"><span class="prep-badge">【必備】</span><span class="prep-title">04 VS Code 與支援高亮／框選批註的 PDF 閱讀器</span></span><span class="prep-purpose">用於閱讀 Markdown 筆記、查看資料表及在 PDF 上做原位標註與提取</span></summary>

安裝 [VS Code](https://code.visualstudio.com)（配合 [Markdown 語法速查表](https://www.markdownguide.org/cheat-sheet/)），並準備支援高亮及任意框選批註的 PDF 閱讀器（例如免費的 [Adobe Acrobat Reader](https://get.adobe.com/reader/)、[PDFgear](https://www.pdfgear.com/) 或 macOS 內建「預覽程式」）。已有合用的閱讀器便可，不必另買。第一場會練習讓筆記跟着材料，返回具體頁面或圖像位置（見 [01.3](#q-01-3)）。

<p class="prep-check"><strong>完成後檢查：</strong>能用 VS Code 打開剛剛 clone 下來的工作坊資料夾，並能用 PDF 閱讀器打開一份 PDF 做一處高亮與框選批註。</p>

</details>

<details class="prep-item" id="prep-05">
<summary><span class="prep-heading"><span class="prep-badge">【必備】</span><span class="prep-title">05 Python 3、uv 與 Node.js 本機執行環境</span></span><span class="prep-purpose">供 Coding Agent 在本機自動執行資料處理腳本、API 呼叫與網頁工具</span></summary>

準備 [Python 3](https://www.python.org)、[uv](https://docs.astral.sh/uv/) 與 [Node.js](https://nodejs.org)。它們讓 agent 執行本機提取腳本、API 呼叫、CSV／[關係型資料庫（SQLite）](https://en.wikipedia.org/wiki/Relational_database)整理、網頁／[Three.js](https://threejs.org) viewer 和 MCP 工具。

<strong>不需要先學會寫 Python 或 JavaScript。</strong> 先安裝好環境，讓 agent 檢查版本與位置；它會協助使用。不要重裝或覆蓋原本可用的環境。

<p class="prep-check"><strong>完成後檢查：</strong>讓 Agent 在終端機檢查 <code>python3</code>、<code>uv</code> 與 <code>node</code> 版本，三者皆能正常回報版本號。</p>

</details>

<details class="prep-item" id="prep-06">
<summary><span class="prep-heading"><span class="prep-badge">【必備】</span><span class="prep-title">06 個人研究材料與日常瀏覽器</span></span><span class="prep-purpose">用於課堂現場測試瀏覽器收集、批量下載、數位化與結構化提取</span></summary>

帶 <strong>10–20 張圖像及／或 1–2 份 PDF</strong>，選自己研究或創作中的公開、非敏感材料，例如圖像、歷史文獻、器物或空間記錄。不帶不願交由線上模型處理的私人、敏感或未發表內容。

也可選帶 <strong>2–3 張手機實拍、未裁切的整頁書頁／手稿照片</strong>，練習白平衡、去斜與局部比較；研究理論或長篇報告的同學，可帶一本含<strong>目錄（TOC）與索引（Index）</strong>的 PDF，練習分章研究綱要。沿用上面的公開、非敏感材料範圍。

準備平日使用的 <strong>[Chrome 瀏覽器](https://www.google.com/chrome/)</strong>，確認自己能正常登入所需的圖書館或資料庫。課堂瀏覽器協作時，<strong>帳號登入及真人驗證由自己處理，再交回 agent 繼續</strong>；不用把帳戶密碼交給 agent。

帶自己的手提電腦和充電器。自己的練習放在 fork 的 `my-work/`，讓 agent 按四類位置整理；已有檔案先保留，不自動搬移或覆寫。

- <strong>`my-work/sources/raw/`</strong>：未修改的原圖與 PDF；永遠不就地編輯原件。
- <strong>`my-work/sources/processed/`</strong>：OCR 文字、裁切圖、清理或提取後的表格；每份仍連回原件與頁面／圖像位置。
- <strong>`my-work/research/`</strong>：閱讀筆記、研究設計、草稿與成果；記下自己的判斷、AI 建議與別人論點的區別。
- <strong>`my-work/artifacts/`</strong>：由 Git 忽略的大型檔案，例如 `.glb`／`.blend` 模型、高解像圖像批次、遊戲匯出、SQLite 資料庫與 embeddings。另在研究筆記中記錄來源與產生方法。

API key 和大型輸出不進 Git：讓 agent 檢查 `.env`、`artifacts/`、`*.glb`、`*.blend` 等排除設定。小型 CSV 和可長期保存的研究文字可留版本；大型提取輸出放 `artifacts/`，以連結接回 `sources/processed/` 的索引。

<p class="prep-check"><strong>完成後檢查：</strong><code>my-work/sources/raw/</code> 內已放入自己的測試圖像或 PDF，且 Chrome 瀏覽器能正常打開所需的資料庫網頁。</p>

</details>

### 按方向選裝項目

<details class="prep-item" id="prep-07">
<summary><span class="prep-heading"><span class="prep-badge">【選裝】</span><span class="prep-title">07 Blender 與 Blender MCP</span></span><span class="prep-purpose">適用於需要進行 3D 建模與場景操作的同學</span></summary>

安裝 [Blender](https://www.blender.org) 及社群最廣泛使用的開源 [Blender MCP（`ahujasid/blender-mcp`）](https://github.com/ahujasid/blender-mcp)。只需在 Blender 內安裝並啟用其 `addon.py` 插件（監聽本機 `127.0.0.1:9876`），並讓 coding agent 透過 `uvx blender-mcp` 啟動 MCP server 連接即可（見下方測試提示）。

<p class="prep-check"><strong>完成後檢查：</strong>Blender 能正常啟動並在 Add-ons 中勾選啟用 Blender MCP，且 Agent 能連上本機讀取目前場景資訊。</p>

</details>

<details class="prep-item" id="prep-08">
<summary><span class="prep-heading"><span class="prep-badge">【選裝】</span><span class="prep-title">08 生成式 3D 平台（騰訊混元 3D 或 Tripo）</span></span><span class="prep-purpose">適用於需要將參考圖像快速轉為 3D 模型初稿的同學</span></summary>

可先選 <strong>[騰訊混元 3D](https://3d.hunyuan.tencent.com)</strong>，中文介面方便，適合想先從免費試用額度開始的同學；也可選 <strong>[Tripo](https://www.tripo3d.ai)</strong>，新帳戶有免費試用額度（亦支援 PayPal 付款；試用額度及目前可用付款方式以帳戶與結帳頁為準）。其他選擇包括 [Meshy](https://www.meshy.ai) 和 [Rodin](https://hyper3d.ai/rodin)。先試一個平台即可；這與編輯模型的 Blender 是不同用途。

<p class="prep-check"><strong>完成後檢查：</strong>已能登入騰訊混元 3D 或 Tripo，並能上傳一張測試圖看到生成介面與可用額度。</p>

</details>

<details class="prep-item" id="prep-09">
<summary><span class="prep-heading"><span class="prep-badge">【選裝】</span><span class="prep-title">09 虛擬環境與遊戲引擎（推薦 Godot，或 Unity／團結引擎／Unreal）</span></span><span class="prep-purpose">適用於需要搭建虛擬展廳或歷史空間模擬的同學；安裝包較大，請預先下載</span></summary>

推薦預先安裝 <strong>[Godot](https://godotengine.org)</strong>（輕量開源、跨平台且對 Agent 腳本協作非常友善）；也可按習慣選 [Unity](https://unity.com) 或 [Unreal Engine](https://www.unrealengine.com)。<strong>如果 Unity Hub 因網絡或登入問題不能使用，改用 [Tuanjie 團結引擎](https://unity.cn)，即 Unity 的中國版。</strong> 下載很大，請提前完成；不用全部安裝。

<p class="prep-check"><strong>完成後檢查：</strong>引擎已下載安裝完成，能新建並打開一個空白測試專案而不報錯。</p>

</details>
