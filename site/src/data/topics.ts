export const topics = [
  {
    id: 'source-discovery',
    number: '01',
    title: '資料發現',
    description: '材料入口、多語檢索、搜尋紀錄與覆蓋缺口。第一場共同練習。',
  },
  {
    id: 'visual-description',
    number: '02',
    title: '視覺材料的描述與檢索',
    description: '可見描述、跨媒介比較、整頁與局部檢索。第一場共同練習，第二場延伸。',
  },
  {
    id: 'notes',
    number: '03',
    title: '標註與筆記組織',
    description: '材料、計畫與概念筆記分開累積；PDF 標註與原材料保持聯繫。兩場都會使用。',
  },
  {
    id: 'agent-workflow',
    number: '04',
    title: 'Markdown、版本控制與 agent',
    description: '目的、材料、動作、輸出與核查；把有效程序寫成 skill。兩場共同工作方式。',
  },
  {
    id: 'verification', number: '05', title: '準確性與來源追蹤',
    description: '原圖、OCR、候選與研究主張分層；核對錯取、漏取及證據支持。兩場的共同基礎。',
  },
  {
    id: 'extraction', number: '06', title: '從材料到結構化記錄',
    description: '短單位提取、原詞與正規化、metadata、事件及多語異名。第二場共同練習。',
  },
  {
    id: 'mapping', number: '07', title: '地圖、年代與位置的不確定性',
    description: '同一批有來源的記錄轉成地圖；辨認座標、單位和古環境假設。第二場示範與延伸。',
  },
  {
    id: 'networks', number: '08', title: '流通、收藏與關係網絡',
    description: '一條線代表甚麼事件？分清共現、交易、擁有與借展。第二場示範與延伸。',
  },
  {
    id: 'rights', number: '09', title: '取得、分享與學術使用',
    description: '看得到、可下載、可交模型處理與可公開，是不同問題。第一場討論，兩場實作都要考慮。',
  },
  {
    id: 'research-design', number: '10', title: '問題、反例與創作實踐',
    description: '從自己的材料形成問題，設計小試驗，記錄創作迭代與反思。第一場起步，第二場收束。',
  },
] as const;

export type TopicId = (typeof topics)[number]['id'];
