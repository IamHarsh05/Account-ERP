import{aT as r}from"./index--J6gaKqH.js";import{C as n}from"./CrudModule-CJrOhOOI.js";import{D as e}from"./index-DeKHaI76.js";import{c}from"./color-DHucoY0N.js";import{V as d}from"./erpOs-CMKQyu82.js";import"./index-DV57aTJh.js";import"./actions-Bt69AeFc.js";import"./index-sTiArh6c.js";import"./helpers-B3L87vXg.js";import"./index-CEBP3NLi.js";import"./ErpApp-BEAjmWaO.js";import"./fade-B7XK0E1_.js";import"./index-BcAYd26p.js";import"./useDate-BUBJ-65Y.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-CK9jXVuP.js";import"./countryList-BECIveE_.js";import"./index-KrFx5yLV.js";import"./index-BXLypoqc.js";import"./DeleteOutlined-DpfJlTkJ.js";import"./ArrowRightOutlined-BulyMten.js";import"./Table-BPtJoJS3.js";import"./PlusOutlined-D3iknlFd.js";import"./index-BZxXnXFt.js";import"./index-BX5vAKpM.js";import"./index-4jR6Bdm1.js";import"./index-CGa66d7n.js";import"./index-B4MtrW3q.js";const t={name:{type:"stringWithColor",required:!0},description:{type:"textarea",required:!0},color:{type:"color",options:[...c],required:!0},enabled:{type:"boolean",required:!0}};function v(){const o=d(),i="productcategory",m={displayLabels:["name"],searchFields:"name"},a=["name"],p={PANEL_TITLE:o("Product_Category"),DATATABLE_TITLE:o("Product_Category_list"),ADD_NEW_ENTITY:o("add_new_Product_Category"),ENTITY_NAME:o("Product_Category")},s={...{entity:i,...p},fields:t,searchConfig:m,deleteModalLabels:a};return r.jsx(n,{createForm:r.jsx(e,{fields:t}),updateForm:r.jsx(e,{fields:t}),config:s})}export{v as default};