import{aT as a}from"./index--J6gaKqH.js";import{d as i}from"./index-BcAYd26p.js";import{V as c}from"./erpOs-CMKQyu82.js";import{t as d}from"./statusTagColor-DxbKI3gy.js";import{a as f,u as T}from"./useDate-BUBJ-65Y.js";import"./index-sTiArh6c.js";import{E as g}from"./selectors-APkanmoC.js";import{E as I}from"./index-ByHvi8Mg.js";import{C as E}from"./ErpApp-BEAjmWaO.js";import{T as l}from"./index-BXLypoqc.js";import"./currency.es-9OAR_aOO.js";import"./index-BZxXnXFt.js";import"./useDebounce-CK9jXVuP.js";import"./actions-DqrCK4Yp.js";import"./index-KrFx5yLV.js";import"./Table-BPtJoJS3.js";import"./FilePdfOutlined-dEavOBWy.js";import"./DeleteOutlined-DpfJlTkJ.js";import"./ArrowRightOutlined-BulyMten.js";import"./helpers-B3L87vXg.js";import"./PlusOutlined-D3iknlFd.js";import"./index-CEBP3NLi.js";import"./fade-B7XK0E1_.js";function _({config:t}){const n=c();return a.jsx(g,{children:a.jsx(I,{config:t,extra:[{label:n("Record Payment"),key:"recordPayment",icon:a.jsx(E,{})}]})})}function H(){const t=c(),{dateFormat:n}=f(),m="invoice",{moneyFormatter:o}=T(),s={entity:"client",displayLabels:["name"],searchFields:"name"},p=["number","client.name"],u=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Date"),dataIndex:"date",render:e=>i(e).format(n)},{title:t("expired Date"),dataIndex:"expiredDate",render:e=>i(e).format(n)},{title:t("Total"),dataIndex:"total",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>o({amount:e,currency_code:r.currency})},{title:t("paid"),dataIndex:"credit",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>o({amount:e,currency_code:r.currency})},{title:t("Status"),dataIndex:"status",render:e=>{let r=d(e);return a.jsx(l,{color:r.color,children:e&&t(r.label)})}},{title:t("Payment"),dataIndex:"paymentStatus",render:e=>{let r=d(e);return a.jsx(l,{color:r.color,children:e&&t(e)})}},{title:t("Created By"),dataIndex:["createdBy","name"]}],x={PANEL_TITLE:t("invoice"),DATATABLE_TITLE:t("invoice_list"),ADD_NEW_ENTITY:t("add_new_invoice"),ENTITY_NAME:t("invoice"),RECORD_ENTITY:t("record_payment")},y={...{entity:m,...x},dataTableColumns:u,searchConfig:s,deleteModalLabels:p};return a.jsx(_,{config:y})}export{H as default};