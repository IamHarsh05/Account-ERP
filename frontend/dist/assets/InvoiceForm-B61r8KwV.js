import{aU as v,aT as e,a as r}from"./index-DI72K1XZ.js";import{d as f}from"./index-B6gtKTDi.js";import{A as E}from"./index-BpwyeUIF.js";import{I as O,M as m}from"./index-BGB9KXt_.js";import{ah as S,V as P,ac as c,aa as s,ae as a,$ as _,af as Y,ab as y,O as w}from"./erpOs-B3R6MilN.js";import{a as M}from"./useDate-CS5tDnm-.js";import{c as x}from"./calculate-Bl1nHP9U.js";import{S as B}from"./index-HHWxeuBm.js";import{S as Q}from"./index-BFcM-ptJ.js";import{I as N}from"./index-BNv12PYu.js";import{D as b}from"./index-pFThQwj7.js";import{P as I}from"./PlusOutlined-CUDX8_ZB.js";function ae({subTotal:l=0,current:i=null}){const{last_invoice_number:t}=v(S);return t===void 0?e.jsx(e.Fragment,{}):e.jsx(U,{subTotal:l,current:i})}function U({subTotal:l=0,current:i=null}){const t=P(),{dateFormat:p}=M(),{last_invoice_number:F}=v(S),[T,R]=r.useState(0),[u,j]=r.useState(0),[D,L]=r.useState(0),[A,C]=r.useState(()=>new Date().getFullYear()),[V,q]=r.useState(()=>F+1),k=n=>{j(n/100)};r.useEffect(()=>{if(i){const{taxRate:n=0,year:o,number:d}=i;j(n/100),C(o),q(d)}},[i]),r.useEffect(()=>{const n=x.add(x.multiply(l,u),l);L(Number.parseFloat(x.multiply(l,u))),R(Number.parseFloat(n))},[l,u]);const h=r.useRef(!1);return r.useEffect(()=>{h.current.click()},[]),e.jsxs(e.Fragment,{children:[e.jsxs(c,{gutter:[12,0],children:[e.jsx(s,{className:"gutter-row",span:8,children:e.jsx(a.Item,{name:"client",label:t("Client"),rules:[{required:!0}],children:e.jsx(E,{entity:"client",displayLabels:["name"],searchFields:"name",redirectLabel:"Add New Client",withRedirect:!0,urlToRedirect:"/customer"})})}),e.jsx(s,{className:"gutter-row",span:3,children:e.jsx(a.Item,{label:t("number"),name:"number",initialValue:V,rules:[{required:!0}],children:e.jsx(N,{min:1,style:{width:"100%"}})})}),e.jsx(s,{className:"gutter-row",span:3,children:e.jsx(a.Item,{label:t("year"),name:"year",initialValue:A,rules:[{required:!0}],children:e.jsx(N,{style:{width:"100%"}})})}),e.jsx(s,{className:"gutter-row",span:6,children:e.jsx(Q,{})}),e.jsx(s,{className:"gutter-row",span:4,children:e.jsx(a.Item,{label:t("status"),name:"status",rules:[{required:!1}],initialValue:"draft",children:e.jsx(_,{options:[{value:"draft",label:t("Draft")},{value:"pending",label:t("Pending")},{value:"sent",label:t("Sent")}]})})}),e.jsx(s,{className:"gutter-row",span:8,children:e.jsx(a.Item,{name:"date",label:t("Date"),rules:[{required:!0,type:"object"}],initialValue:f(),children:e.jsx(b,{style:{width:"100%"},format:p})})}),e.jsx(s,{className:"gutter-row",span:6,children:e.jsx(a.Item,{name:"expiredDate",label:t("Expire Date"),rules:[{required:!0,type:"object"}],initialValue:f().add(30,"days"),children:e.jsx(b,{style:{width:"100%"},format:p})})}),e.jsx(s,{className:"gutter-row",span:10,children:e.jsx(a.Item,{label:t("Note"),name:"notes",children:e.jsx(Y,{})})})]}),e.jsx(y,{dashed:!0}),e.jsxs(c,{gutter:[12,12],style:{position:"relative"},children:[e.jsx(s,{className:"gutter-row",span:5,children:e.jsx("p",{children:t("Item")})}),e.jsx(s,{className:"gutter-row",span:7,children:e.jsx("p",{children:t("Description")})}),e.jsxs(s,{className:"gutter-row",span:3,children:[e.jsx("p",{children:t("Quantity")})," "]}),e.jsx(s,{className:"gutter-row",span:4,children:e.jsx("p",{children:t("Price")})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx("p",{children:t("Total")})})]}),e.jsx(a.List,{name:"items",children:(n,{add:o,remove:d})=>e.jsxs(e.Fragment,{children:[n.map(g=>e.jsx(O,{remove:d,field:g,current:i},g.key)),e.jsx(a.Item,{children:e.jsx(w,{type:"dashed",onClick:()=>o(),block:!0,icon:e.jsx(I,{}),ref:h,children:t("Add field")})})]})}),e.jsx(y,{dashed:!0}),e.jsxs("div",{style:{position:"relative",width:" 100%",float:"right"},children:[e.jsxs(c,{gutter:[12,-5],children:[e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(a.Item,{children:e.jsx(w,{type:"primary",htmlType:"submit",icon:e.jsx(I,{}),block:!0,children:t("Save")})})}),e.jsx(s,{className:"gutter-row",span:4,offset:10,children:e.jsxs("p",{style:{paddingLeft:"12px",paddingTop:"5px",margin:0,textAlign:"right"},children:[t("Sub Total")," :"]})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(m,{readOnly:!0,value:l})})]}),e.jsxs(c,{gutter:[12,-5],children:[e.jsx(s,{className:"gutter-row",span:4,offset:15,children:e.jsx(a.Item,{name:"taxRate",rules:[{required:!0}],children:e.jsx(B,{value:u,onChange:k,entity:"taxes",outputValue:"taxValue",displayLabels:["taxName"],withRedirect:!0,urlToRedirect:"/taxes",redirectLabel:t("Add New Tax"),placeholder:t("Select Tax Value")})})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(m,{readOnly:!0,value:D})})]}),e.jsxs(c,{gutter:[12,-5],children:[e.jsx(s,{className:"gutter-row",span:4,offset:15,children:e.jsxs("p",{style:{paddingLeft:"12px",paddingTop:"5px",margin:0,textAlign:"right"},children:[t("Total")," :"]})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(m,{readOnly:!0,value:T})})]})]})]})}export{ae as I};