import{u as r,r as l,b as i,j as t}from"./index-D6mnwzia.js";import{N as m}from"./NoteDisplay-C2qLJk6F.js";import"./modules/file-saver-C5aOAFwN.js";/* empty css                      */function h(){const{slides:o,total:n}=r();l.useEffect(()=>{const e=document.title;document.title=`Notes - ${i.title}`;const s=document.createElement("style");return s.textContent=`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`,document.head.appendChild(s),()=>{document.title=e,s.remove()}},[]);const a=l.useMemo(()=>o.flatMap(e=>{const s=e.meta?.slide;return s?.noteHTML?[{no:e.no,title:s.title,noteHTML:s.noteHTML}]:[]}),[o]);return t.jsx("div",{id:"page-root",children:t.jsxs("div",{className:"m-4",children:[t.jsxs("div",{className:"mb-10",children:[t.jsx("h1",{className:"text-4xl font-bold mt-2",children:i.title}),t.jsx("div",{className:"opacity-50",children:new Date().toLocaleString()})]}),a.map((e,s)=>t.jsxs("div",{className:"flex flex-col gap-4 break-inside-avoid-page",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-lg",children:t.jsxs("div",{className:"font-bold flex gap-2",children:[t.jsxs("div",{className:"opacity-50",children:[e.no,"/",n]}),e.title]})}),t.jsx(m,{noteHtml:e.noteHTML,className:"max-w-full"})]}),s<a.length-1&&t.jsx("hr",{className:"border-main mb-8"})]},e.no))]})})}export{h as default};
