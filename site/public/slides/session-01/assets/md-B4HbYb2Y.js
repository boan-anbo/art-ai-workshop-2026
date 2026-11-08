import{ac as n,j as e}from"./index-Cyf7OyVt.js";import{D as l}from"./default-BCiSP4ZL.js";import{e as d,f as o,S as i}from"./layoutHelper-DjM2ocXH.js";import"./modules/file-saver-C5aOAFwN.js";/* empty css                      */import"./slidev/academic-react-C6rKkPeO.js";function x({children:a}){const{$frontmatter:r}=n(),t=e.jsxs(e.Fragment,{children:[e.jsx("h1",{"data-v-slidev-52":"",children:"Ask OpenCode to query OpenAlex for you."}),e.jsxs("div",{"data-v-slidev-52":"",className:"term",children:[e.jsx("div",{"data-v-slidev-52":"",className:"term-bar",children:e.jsx("span",{"data-v-slidev-52":"",children:"OpenCode · art-ai-workshop-2026"})}),e.jsxs("pre",{"data-v-slidev-52":"",children:[`
`,e.jsx("span",{"data-v-slidev-52":"",className:"you",children:'Search OpenAlex for "Canton Christian College curriculum" with curl'}),`
`,e.jsx("span",{"data-v-slidev-52":"",className:"you",children:"and save the first ten results to my-work/sources/processed/."}),`
 
`,e.jsx("span",{"data-v-slidev-52":"",className:"blk",children:'$ curl -s "https://api.openalex.org/works?search=Canton+Christian'}),`
`,e.jsx("span",{"data-v-slidev-52":"",className:"blk",children:'+College+curriculum&per-page=10" -o openalex-ccc-curriculum.json'}),`
 
Saved: my-work/sources/processed/openalex-ccc-curriculum.json
`,e.jsx("span",{"data-v-slidev-52":"",className:"hl",children:"Matches: 2,071"}),`
`,e.jsx("span",{"data-v-slidev-52":"",className:"dim",children:"▣ Build · DeepSeek V4.1 Flash · 1m 32s"}),`
`]}),e.jsx("div",{"data-v-slidev-52":"",className:"term-foot",children:"Build · DeepSeek V4.1 Flash · OpenCode Go · max"})]}),e.jsx(i,{name:"read",children:e.jsx("p",{"data-v-slidev-52":"",children:"OpenCode sends the OpenAlex query with curl and saves the first ten results as JSON; tonight the index reported 2,071 matches."})})]}),s=d(t.props.children);return e.jsx(l,{...o(r,51),slots:s,children:s.default||a})}export{x as default};
