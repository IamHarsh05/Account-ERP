import{aT as o}from"./index-DI72K1XZ.js";import{d as i}from"./index-B6gtKTDi.js";import{t as u}from"./statusTagColor-DxbKI3gy.js";import"./index-9G2_kVOv.js";import{V as f}from"./erpOs-B3R6MilN.js";import{E as x}from"./selectors-CRtDAfPw.js";import{E as T}from"./index-DwidV51u.js";import{a as g,u as y}from"./useDate-CS5tDnm-.js";import{T as E}from"./index-I1yM4LNH.js";import"./ErpApp-HUt-6-NE.js";import"./index-BpwyeUIF.js";import"./useDebounce-vTjGJh2M.js";import"./actions-DQAqwx4V.js";import"./index-KrFx5yLV.js";import"./Table-DrawsWH-.js";import"./FilePdfOutlined-CzTWXTge.js";import"./DeleteOutlined-BYAuHBt7.js";import"./ArrowRightOutlined-D5Iwk8iQ.js";import"./helpers-CKtVo9ND.js";import"./PlusOutlined-CUDX8_ZB.js";import"./index-Dd6SN41D.js";import"./fade-P-cNJMmO.js";import"./currency.es-9OAR_aOO.js";function b({config:t}){return o.jsx(x,{children:o.jsx(T,{config:t})})}function G(){const t=f(),{dateFormat:a}=g(),m="quote",{moneyFormatter:n}=y(),l={entity:"client",displayLabels:["name"],searchFields:"name"},s=["number","client.name"],c=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Date"),dataIndex:"date",render:e=>i(e).format(a)},{title:t("expired Date"),dataIndex:"expiredDate",render:e=>i(e).format(a)},{title:t("Sub Total"),dataIndex:"subTotal",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>n({amount:e,currency_code:r.currency})},{title:t("Total"),dataIndex:"total",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,r)=>n({amount:e,currency_code:r.currency})},{title:t("Status"),dataIndex:"status",render:e=>{let r=u(e);return o.jsx(E,{color:r.color,children:e&&t(r.label)})}}],d={PANEL_TITLE:t("proforma invoice"),DATATABLE_TITLE:t("proforma invoice_list"),ADD_NEW_ENTITY:t("add_new_proforma invoice"),ENTITY_NAME:t("proforma invoice")},p={...{entity:m,...d},dataTableColumns:c,searchConfig:l,deleteModalLabels:s};return o.jsx(b,{config:p})}export{G as default};
