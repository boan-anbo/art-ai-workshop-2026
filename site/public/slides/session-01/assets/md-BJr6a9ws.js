import{ac as n,j as e}from"./index-D6mnwzia.js";import{D as i}from"./default-BYGIK3Df.js";import{e as l,f as o,S as h}from"./layoutHelper-wLbn8Mmg.js";import"./modules/file-saver-C5aOAFwN.js";/* empty css                      */import"./slidev/academic-react-C6rKkPeO.js";function f({children:a}){const{$frontmatter:r}=n(),t=e.jsxs(e.Fragment,{children:[e.jsx("h1",{"data-v-slidev-66":"",children:"The skill behind it: a plain-text file, in plain language."}),e.jsxs("div",{"data-v-slidev-66":"",className:"file",children:[e.jsx("div",{"data-v-slidev-66":"",className:"file-bar",children:".opencode/skills/scholarly-search/SKILL.md"}),e.jsxs("pre",{"data-v-slidev-66":"",children:[`
---
name: scholarly-search
`,e.jsx("span",{"data-v-slidev-66":"",className:"hl",children:"description: Find scholarship on a research question. Prefer OpenAlex"}),`
`,e.jsx("span",{"data-v-slidev-66":"",className:"hl",children:"  by API; Google Scholar through a third-party search API, or by me."}),`
---
 
Search for scholarship on the question I give you.
 
- Prefer OpenAlex: query its API with my key; save the raw results
  in my-work/sources/processed/.
- Decide whether the search needs expanding: other names of the
  subject, other languages, older spellings.
- For Google Scholar and similar sites, use a third-party search API
  (such as Serper) if one is set up; otherwise suggest queries.
- Make a reading list: year, title, author, link.
- Record every search in research/log.md, and what was not searched.
- Never describe a work you have not opened.
`]})]}),e.jsx(h,{name:"read",children:e.jsx("p",{"data-v-slidev-66":"",children:"A skill is a short plain-text file: a name, a one-line description the agent keeps in mind, and the steps it reads when a task matches."})})]}),s=l(t.props.children);return e.jsx(i,{...o(r,65),slots:s,children:s.default||a})}export{f as default};
