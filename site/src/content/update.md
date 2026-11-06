<p class="update-date"><strong>2026 年 11 月 6 日，第一場之後。</strong>今天上課用到的所有內容，都已放進 DH 工作區。下面三件事：工作區在哪裡、一步一步裝好 OpenCode 並開始使用、隱私設定。</p>

<p class="update-slides"><strong>第一場投影片：</strong>完整版（含講稿與所有圖片）在 <a href="https://anbo.me/slides/2026/cuhkarthistory/">anbo.me/slides/2026/cuhkarthistory</a>（帳號與密碼見課堂通知）。另有一份可以自己保留的公開版（不含講稿，部分只限課堂使用的圖片已移除）：<a href="/art-ai-workshop-2026/slides/session-01/">投影片</a> · <a href="/art-ai-workshop-2026/slides/session-01/read/">閱讀版（單頁，方便交給 agent）</a>。這份公開版也在工作區裡：<code>site/public/slides/session-01/</code>，下載工作區就一起保留下來。</p>

<p class="update-slides"><strong>給 agent 的版本：</strong>完整投影片（含講稿）的純 Markdown，每張圖一個連結：<a href="https://anbo.me/slides/2026/cuhkarthistory/agent/slides.md">slides.md</a>，或整包下載 <a href="https://anbo.me/slides/2026/cuhkarthistory/agent/session-01-agent.zip">session-01-agent.zip</a>（同樣用課堂的帳號密碼）。最簡單的用法：下載 zip，解壓到 <code>my-work/sources/raw/</code>，然後對 agent 說「read @my-work/sources/raw/agent/slides.md」。也可以把網址和帳號密碼交給 agent，請它用 <code>curl -u 帳號:密碼 網址</code> 下載。</p>

### 1　DH 工作區在哪裡

工作區就是這個 GitHub 倉庫：**[github.com/boan-anbo/art-ai-workshop-2026](https://github.com/boan-anbo/art-ai-workshop-2026)**。

- **下載**：打開上面的連結，按綠色的 **Code** 按鈕 → **Download ZIP**，解壓縮即可。會用 Git 的同學可以 `git clone`；已經 fork 過的同學，在自己的 fork 頁面按 **Sync fork** 取得最新內容。
- **裡面有甚麼**：
  - `.opencode/skills/`：今天介紹的 skill，例如 `scholarly-search`、`describe-image`、`transcribe-faithfully`、`format-paper` → `chicago-style`、`extract-pdf-annotations`、`verify-claims`；
  - `my-work/`：你的研究資料夾，已放好今天示範用的材料（1908 年小冊子一頁、回憶錄一列、兩張大都會博物館的畫）；
  - `session-01/examples/`：今天示範時 agent 產生的結果，可以拿來對照；
  - `AGENTS.md`：agent 每次開工前先讀的規則。
- **怎麼用**：在 OpenCode 裡打開這個資料夾（見下一節），然後直接用一句話請它做事，例如「use scholarly-search: find scholarship on …」。

### 2　一步一步：安裝 OpenCode、加入 key、開始使用

<ol class="update-steps">
<li>

**安裝 OpenCode。**

- **Mac**：打開「終端機」（Terminal），貼上下面一行，按 Enter：

  ```sh
  curl -fsSL https://opencode.ai/v2/install | bash
  ```

  完成後關掉終端機、重新打開，輸入 `opencode --version`，看到版本號就成功了。（已裝 Homebrew 的也可以用 `brew install anomalyco/tap/opencode-v2`。）
- **Windows**：建議先裝 WSL（Windows 裡的 Linux）。在開始選單找到 PowerShell，按右鍵「以系統管理員身分執行」，輸入 `wsl --install`，完成後重新開機；然後打開「Ubuntu」，在裡面貼上和 Mac 相同的那一行。Windows 的檔案在 WSL 裡位於 `/mnt/c/Users/你的使用者名稱/`。
- **不想用終端機**：到 [opencode.ai/download](https://opencode.ai/download) 下載桌面版（Mac、Windows 都有），之後在應用程式裡打開工作區資料夾即可。終端機版功能最完整，今天的示範都用終端機版。

</li>
<li>

**訂閱 OpenCode Go，取得 API key。**

- 打開 [opencode.ai](https://opencode.ai)，點右上角 **Console**，用 Google、GitHub 或電郵登入。

  ![opencode.ai 首頁右上角的 Console 連結](/art-ai-workshop-2026/assets/update/step1-console.png)
  ![OpenCode Console 登入頁](/art-ai-workshop-2026/assets/update/step2-signin.png)
  <p class="img-credit">截圖：opencode.ai，2026 年 11 月 6 日。</p>

- 在 Console 的 **Go** 頁面訂閱 OpenCode Go（US$10／月，可隨時取消）。
- 點右上角的頭像進入個人帳戶（Account），往下拉到 **Personal API keys**，按 **Add API key**，取個名字，然後複製以 `oc_sk_` 開頭的那一串。

  ![Personal API keys 下方的 Add API key 按鈕](/art-ai-workshop-2026/assets/update/step3-addkey.png)
  <p class="img-credit">截圖：opencode.ai，2026 年 11 月 6 日。</p>

- key 只貼進 OpenCode。不要放進聊天、截圖、筆記或 Git。

</li>
<li>

**在工作區裡打開 OpenCode，連上 key，選模型。**

- 在終端機進入工作區資料夾。最簡單的方法：先輸入 `cd`（後面加一個空格），再把解壓縮後的資料夾從 Finder／檔案總管**拖進終端機視窗**，按 Enter。（用 Download ZIP 下載的，資料夾名稱是 `art-ai-workshop-2026-main`；Windows 的 WSL 裡，「下載」資料夾在 `/mnt/c/Users/你的使用者名稱/Downloads/`。）
- 然後輸入 `opencode`，按 Enter：

  ```sh
  opencode
  ```

- 在 OpenCode 裡輸入 `/connect`，選 **OpenCode Go**，貼上剛才複製的 key，按 Enter。
- 輸入 `/models`，選 **DeepSeek V4.1 Flash**。（`ctrl+t` 可以切換思考檔位。）

</li>
<li>

**第一次使用：校對一份筆記。**

- 在輸入框打 `@lingnan`，選中 `my-work/research/lingnan-note.md`，再接着輸入：

  ```text
  Please proofread this note. Fix spelling and grammar only.
  ```

- 它改了四處（begun → began、Collage → College、were → was、move → moved），內容沒有改動，就代表一切都設定好了。

</li>
</ol>

同一步卡住超過 30 分鐘，就停下來，把具體的錯誤訊息記進 `my-work/questions.md`，或到 [GitHub Issues](https://github.com/boan-anbo/art-ai-workshop-2026/issues/new?template=question.yml) 提問。

### 3　隱私設定

在 OpenCode Console 打開 **Settings → Privacy**：

![OpenCode Console 的 Privacy 設定頁：Training 兩個開關都關閉；Regions 可選 Global 或 Europe & United States](/art-ai-workshop-2026/assets/update/opencode-privacy.png)
<p class="img-credit">截圖：opencode.ai，2026 年 11 月 6 日。</p>

- **Allow paid endpoints that train on request data**：關閉，不讓付費模型拿你的請求來訓練。
- **Allow free endpoints that train on request data**：關閉。免費模型可能會拿你的請求訓練；關閉後，所有免費模型都會停用。
- **Regions**：可選 Global，或只用 Europe & United States。注意這不保證資料存放在哪裡。

再配合課上的隱私清單：

- 不用中轉站；盡量用官方 API；
- 遇到「幫助改進我們的模型」，關閉；遇到「分享你的資料？」，選否；
- 對話裡不放私密內容：人名（可先換成代號）、key、密碼；
- 清理本機的對話紀錄，或存到妥善的地方；
- 需要絕對保密的材料，用本地模型，或學校提供的服務。

沒有人能保證你的資料或研究想法絕對安全；但知道資料去了哪裡，可以降低風險。
