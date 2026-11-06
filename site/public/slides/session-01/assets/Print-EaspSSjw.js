import{u as x,r as o,q as p,t as u,j as e,o as f,C as g,e as k}from"./index-D6mnwzia.js";import{G as S,S as j,a as v}from"./SlideWrapper-D6PzUZzq.js";import"./modules/file-saver-C5aOAFwN.js";/* empty css                      */function W(){const{printRange:i,isPrintWithClicks:n}=x();return o.useEffect(()=>{const t=document.documentElement;return t.classList.add("print"),()=>t.classList.remove("print")},[]),o.useEffect(()=>{const t="slidev-print-styles";let s=document.getElementById(t);return s||(s=document.createElement("style"),s.id=t,document.head.appendChild(s)),s.textContent=`
      @page {
        size: ${p}px ${u}px;
        margin: 0;
      }
      @media print {
        .print-slide-container {
          width: ${p}px;
          height: ${u}px;
          page-break-after: always;
        }
      }
    `,()=>{s?.remove()}},[p,u]),e.jsxs("div",{id:"page-root",className:"print-page grid grid-cols-[1fr_max-content]",children:[e.jsx("div",{id:"print-container",className:"w-full h-full",style:{background:"var(--slidev-slide-container-background, black)"},children:e.jsx("div",{id:"print-content",children:i.map(t=>e.jsx(C,{route:f[t-1],slideWidth:p,slideHeight:u,withClicks:n},t))})}),e.jsx("div",{id:"twoslash-container"})]})}function C({route:i,slideWidth:n,slideHeight:t,withClicks:s}){const a=i?.meta,r=a?.slide?.frontmatter?.clicksStart??0,d=a?.clicks??0,h=o.useMemo(()=>{if(!s)return[g];const l=Math.max(0,d-r),m=[r];for(let c=1;c<=l;c++)m.push(c+r);return m},[s,r,d]);return e.jsx(e.Fragment,{children:h.map(l=>e.jsx($,{route:i,clicks:l,slideWidth:n,slideHeight:t},`${i.no}-${l}`))})}function $({route:i,clicks:n,slideWidth:t,slideHeight:s}){const a=i?.meta,r=a?.slide?.frontmatter?.clicksStart??0,d=o.useMemo(()=>k(()=>n,()=>{},r,a?.clicks),[n,r,a?.clicks]),h=o.useMemo(()=>{const m=i.no.toString().padStart(3,"0"),c=(n+1).toString().padStart(2,"0");return`${m}-${c}`},[i.no,n]),l=o.useRef(null);return e.jsxs("div",{id:h,ref:l,className:"print-slide-container bg-main relative overflow-hidden",style:{width:`${t}px`,height:`${s}px`,breakAfter:"page",transform:"translate(0, 0)"},children:[e.jsx(S,{}),e.jsx(j,{route:i,renderContext:"print",clicksContext:d,clicks:n}),e.jsx(v,{})]})}export{W as default};
