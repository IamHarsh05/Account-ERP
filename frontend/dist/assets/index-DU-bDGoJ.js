import{aT as r}from"./index--J6gaKqH.js";import{C as n}from"./CrudModule-CJrOhOOI.js";import{D as e}from"./index-DeKHaI76.js";import{V as s}from"./erpOs-CMKQyu82.js";import"./index-DV57aTJh.js";import"./actions-Bt69AeFc.js";import"./index-sTiArh6c.js";import"./helpers-B3L87vXg.js";import"./index-CEBP3NLi.js";import"./ErpApp-BEAjmWaO.js";import"./fade-B7XK0E1_.js";import"./index-BcAYd26p.js";import"./useDate-BUBJ-65Y.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-CK9jXVuP.js";import"./countryList-BECIveE_.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-BXLypoqc.js";import"./DeleteOutlined-DpfJlTkJ.js";import"./ArrowRightOutlined-BulyMten.js";import"./Table-BPtJoJS3.js";import"./PlusOutlined-D3iknlFd.js";import"./index-BZxXnXFt.js";import"./index-BX5vAKpM.js";import"./index-4jR6Bdm1.js";import"./index-CGa66d7n.js";import"./index-B4MtrW3q.js";const o={name:{type:"string",required:!0},productCategory:{type:"async",label:"product Category",displayLabels:["productCategory","name"],dataIndex:["productCategory","name"],entity:"productcategory",required:!0},currency:{type:"selectCurrency"},price:{type:"currency",required:!0},description:{type:"textarea"},ref:{type:"string"}};function k(){const t=s(),i="product",p={displayLabels:["name"],searchFields:"name"},a=["name"],m={PANEL_TITLE:t("Product"),DATATABLE_TITLE:t("Product_list"),ADD_NEW_ENTITY:t("add_new_Product"),ENTITY_NAME:t("Product")},c={...{entity:i,...m},fields:o,searchConfig:p,deleteModalLabels:a};return r.jsx(n,{createForm:r.jsx(e,{fields:o}),updateForm:r.jsx(e,{fields:o}),config:c})}export{k as default};
