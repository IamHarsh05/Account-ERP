import{a as s,b8 as W,aT as c}from"./index-DI72K1XZ.js";import{V as Z,ad as _,$ as l,aM as z,Z as B}from"./erpOs-B3R6MilN.js";import{u as F}from"./useDebounce-vTjGJh2M.js";function J({entity:x,displayLabels:b,searchFields:O,outputValue:a="_id",redirectLabel:j="Add New",withRedirect:u=!1,urlToRedirect:E="/",value:t,onChange:n}){const f=Z(),d={value:"redirectURL",label:`+ ${f(j)}`},[y,h]=s.useState([]),[A,C]=s.useState(void 0),r=s.useRef(!0),v=s.useRef(!1),[L,o]=s.useState(!1),[S,R]=s.useState(""),[p,N]=s.useState(""),T=W(),U=e=>{r.current=!1,n&&e&&n(e[a]||e),e==="redirectURL"&&u&&T(E)},[,q]=F(()=>{N(S)},500,[S]),D=async e=>await B.search({entity:x,options:e});let{onFetch:$,result:m,isSuccess:g,isLoading:k}=_();const w=e=>b.map(i=>e[i]).join(" ");s.useEffect(()=>{const i=D({q:p,fields:O});return $(i),()=>{q()}},[p]);const M=e=>{v.current=!0,o(!0),R(e)};return s.useEffect(()=>{g?h(m):o(!1)},[g,m]),s.useEffect(()=>{t&&r.current&&(h([t]),C(t[a]||t),n(t[a]||t),r.current=!1)},[t]),c.jsxs(l,{loading:k,showSearch:!0,allowClear:!0,placeholder:f("Search"),defaultActiveFirstOption:!1,filterOption:!1,notFoundContent:L?"... Searching":c.jsx(z,{}),value:A,onSearch:M,onClear:()=>{o(!1)},onChange:U,style:{minWidth:"220px"},children:[y.map(e=>c.jsx(l.Option,{value:e[a]||e,children:w(e)},e[a]||e)),u&&c.jsx(l.Option,{value:d.value,children:d.label})]})}export{J as A};