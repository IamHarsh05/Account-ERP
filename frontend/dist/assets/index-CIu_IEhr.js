import{a as R,aU as f,aT as r}from"./index-DI72K1XZ.js";import{X as $,V as W,af as b,al as _,C as E,ae as u,$ as n}from"./erpOs-B3R6MilN.js";import{u as N,a as P}from"./useDate-CS5tDnm-.js";import{A as U}from"./index-BpwyeUIF.js";import{S as M}from"./index-HHWxeuBm.js";import{s as i}from"./index-KrFx5yLV.js";import{S as X}from"./index-BFcM-ptJ.js";import{S as z,c as G}from"./countryList-BkzvTOVb.js";import{I as L}from"./index-BNv12PYu.js";import{D as H}from"./index-pFThQwj7.js";import{T as j}from"./index-I1yM4LNH.js";function ae({fields:e,isUpdateForm:y=!1}){const[d,s]=R.useState(),h=f($);return r.jsx("div",{style:{direction:h},children:Object.keys(e).map(m=>{let l=e[m];if(y&&!l.disableForUpdate||!l.disableForForm){if(l.type==="selectCurrency")return r.jsx(X,{});if(l.name=m,l.label||(l.label=m),l.hasFeedback)return r.jsx(C,{feedback:d,setFeedback:s,field:l},m);if(d&&l.feedback){if(d==l.feedback)return r.jsx(C,{field:l},m)}else return r.jsx(C,{field:l},m)}})})}function C({field:e,feedback:y,setFeedback:d}){const s=W(),h=N(),{dateFormat:m}=P(),{TextArea:l}=b,V=()=>{var a;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:o[e.type]??"any"}],children:r.jsx(n,{showSearch:e.showSearch,defaultValue:e.defaultValue,style:{width:"100%"},children:(a=e.options)==null?void 0:a.map(t=>r.jsx(n.Option,{value:t.value,children:t.label},`${i.generate()}`))})})},S=()=>{var a;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:o[e.type]??"any"}],children:r.jsx(n,{defaultValue:e.defaultValue,style:{width:"100%"},children:(a=e.options)==null?void 0:a.map(t=>r.jsx(n.Option,{value:t.value,children:r.jsx(j,{bordered:!1,color:t.color,children:s(t.label)})},`${i.generate()}`))})})},q=({feedbackValue:a,lanchFeedback:t})=>{var c;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:o[e.type]??"any"}],children:r.jsx(n,{onSelect:p=>t(p),value:a,style:{width:"100%"},children:(c=e.options)==null?void 0:c.map(p=>r.jsx(n.Option,{value:p.value,children:s(p.label)},`${i.generate()}`))})})},F=()=>{var a;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:o[e.type]??"any"}],children:r.jsx(n,{showSearch:!0,defaultValue:e.defaultValue,filterOption:(t,c)=>((c==null?void 0:c.label)??"").toLowerCase().includes(t.toLowerCase()),filterSort:(t,c)=>((t==null?void 0:t.label)??"").toLowerCase().startsWith(((c==null?void 0:c.label)??"").toLowerCase()),style:{width:"100%"},children:(a=e.options)==null?void 0:a.map(t=>r.jsx(n.Option,{value:t.value,label:t.label,children:r.jsx(j,{bordered:!1,color:t.color,children:t.label})},`${i.generate()}`))})})},I=()=>{var a;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:o[e.type]??"any"}],children:r.jsx(n,{defaultValue:e.defaultValue,style:{width:"100%"},children:(a=e.options)==null?void 0:a.map(t=>r.jsx(n.Option,{value:t.value,children:r.jsx(j,{bordered:!1,color:t.color,children:s(t.label)})},`${i.generate()}`))})})},O=()=>{var a;return r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:o[e.type]??"any"}],children:r.jsx(n,{mode:"multiple",defaultValue:e.defaultValue,style:{width:"100%"},children:(a=e.options)==null?void 0:a.map(t=>r.jsx(n.Option,{value:t.value,children:t.label},`${i.generate()}`))})})},T=()=>r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:o[e.type]??"any"}],children:r.jsx(n,{showSearch:!0,defaultValue:e.defaultValue,optionFilterProp:"children",filterOption:(a,t)=>((t==null?void 0:t.label)??"").toLowerCase().includes(a.toLowerCase()),filterSort:(a,t)=>((a==null?void 0:a.label)??"").toLowerCase().startsWith(((t==null?void 0:t.label)??"").toLowerCase()),style:{width:"100%"},children:G.map(a=>r.jsxs(n.Option,{value:a.value,label:s(a.label),children:[(a==null?void 0:a.icon)&&(a==null?void 0:a.icon)+" ",s(a.label)]},a.value))})}),k=()=>r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:o[e.type]??"any"}],children:r.jsx(U,{entity:e.entity,displayLabels:e.displayLabels,searchFields:e.searchFields,outputValue:e.outputValue,withRedirect:e.withRedirect,urlToRedirect:e.urlToRedirect,redirectLabel:e.redirectLabel})}),D={select:r.jsx(V,{}),selectWithTranslation:r.jsx(S,{}),selectWithFeedback:r.jsx(q,{lanchFeedback:d,feedbackValue:y}),color:r.jsx(F,{}),tag:r.jsx(I,{}),array:r.jsx(O,{}),country:r.jsx(T,{}),search:r.jsx(k,{})},w={string:r.jsx(b,{autoComplete:"off",maxLength:e.maxLength,defaultValue:e.defaultValue}),url:r.jsx(b,{addonBefore:"http://",autoComplete:"off",placeholder:"www.example.com"}),textarea:r.jsx(l,{rows:4}),email:r.jsx(b,{autoComplete:"off",placeholder:"email@example.com"}),number:r.jsx(L,{style:{width:"100%"}}),phone:r.jsx(b,{style:{width:"100%"},placeholder:"+1 123 456 789"}),boolean:r.jsx(z,{checkedChildren:r.jsx(_,{}),unCheckedChildren:r.jsx(E,{}),defaultValue:!0}),date:r.jsx(H,{placeholder:s("select_date"),style:{width:"100%"},format:m}),async:r.jsx(M,{entity:e.entity,displayLabels:e.displayLabels,outputValue:e.outputValue,loadDefault:e.loadDefault,withRedirect:e.withRedirect,urlToRedirect:e.urlToRedirect,redirectLabel:e.redirectLabel}),currency:r.jsx(L,{className:"moneyInput",min:0,controls:!1,addonAfter:h.currency_position==="after"?h.currency_symbol:void 0,addonBefore:h.currency_position==="before"?h.currency_symbol:void 0})},o={string:"string",textarea:"string",number:"number",phone:"string",url:"url",website:"url",email:"email"},v=D[e.type];let x=w[e.type];return x||(x=w.string),v?r.jsx(r.Fragment,{children:v}):r.jsx(u.Item,{label:s(e.label),name:e.name,rules:[{required:e.required||!1,type:o[e.type]??"any"}],valuePropName:e.type==="boolean"?"checked":"value",children:x})}export{ae as D};
