import{ac as n,j as e}from"./index-DL0jsxY9.js";import{D as i}from"./default-DfD4E5fS.js";import{e as l,f as d,S as o}from"./layoutHelper-Cs3kI60C.js";import"./modules/file-saver-C5aOAFwN.js";/* empty css                      */import"./slidev/academic-react-C6rKkPeO.js";function x({children:s}){const{$frontmatter:t}=n(),r=e.jsxs(e.Fragment,{children:[e.jsx("h1",{"data-v-slidev-84":"",children:"A vision model can transcribe too: OpenCode writes the request."}),e.jsxs("div",{"data-v-slidev-84":"",className:"body",children:[e.jsxs("div",{"data-v-slidev-84":"",className:"term",children:[e.jsx("div",{"data-v-slidev-84":"",className:"term-bar",children:e.jsx("span",{"data-v-slidev-84":"",children:"OpenCode · art-ai-workshop-2026"})}),e.jsxs("pre",{"data-v-slidev-84":"",children:[`
`,e.jsx("span",{"data-v-slidev-84":"",className:"you",children:"Transcribe @my-work/sources/raw/shangbao-1923-c05.jpg"}),`
`,e.jsx("span",{"data-v-slidev-84":"",className:"you",children:"with Gemini Flash through OpenRouter, using the"}),`
`,e.jsx("span",{"data-v-slidev-84":"",className:"you",children:"transcribe-faithfully prompt. My key is in"}),`
`,e.jsx("span",{"data-v-slidev-84":"",className:"you",children:"OPENROUTER_API_KEY."}),`
 
`,e.jsx("span",{"data-v-slidev-84":"",className:"tool",children:"← Write"}),` my-work/research/transcribe.py
`,e.jsx("span",{"data-v-slidev-84":"",className:"blk",children:"$ python my-work/research/transcribe.py …c05.jpg"}),`
`,e.jsx("span",{"data-v-slidev-84":"",className:"ok",children:"Saved sources/processed/shangbao-1923-c05.txt"}),`
`,e.jsx("span",{"data-v-slidev-84":"",className:"dim",children:"▣ Build · DeepSeek V4.1 Flash"}),`
`]}),e.jsx("div",{"data-v-slidev-84":"",className:"term-foot",children:"Build · DeepSeek V4.1 Flash · OpenCode Go · max"})]}),e.jsx("div",{"data-v-slidev-84":"",className:"json","data-src":"POST openrouter.ai/api/v1/chat/completions",children:e.jsxs("pre",{"data-v-slidev-84":"",children:[`
{
  "model": "google/gemini-3.8-flash",
  "temperature": 0,
  "messages": [{ "role": "user", "content": [
    { "type": "text", "text":
      "Transcribe this page faithfully. Copy the text exactly, in its original script. Keep the line breaks. `,e.jsx("span",{"data-v-slidev-84":"",className:"hl",children:"Do not correct, modernise, translate or complete anything."}),` Write [?] for a character you cannot read." },
    { "type": "image_url",
      "image_url": { "url": "data:image/jpeg;base64,…" } }
  ]}]
}
`]})})]}),e.jsx(o,{name:"read",children:e.jsx("p",{"data-v-slidev-84":"",children:"A vision model can transcribe a page. Ask OpenCode to send the image to a model through OpenRouter with your key; it writes the request: model, temperature 0, a faithful-transcription prompt and the image."})})]}),a=l(r.props.children);return e.jsx(i,{...d(t,83),slots:a,children:a.default||s})}export{x as default};
