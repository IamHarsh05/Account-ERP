import{aT as t}from"./index--J6gaKqH.js";import{C as m}from"./CrudModule-CJrOhOOI.js";import{D as o}from"./index-DeKHaI76.js";import{V as c}from"./erpOs-CMKQyu82.js";import"./index-DV57aTJh.js";import"./actions-Bt69AeFc.js";import"./index-sTiArh6c.js";import"./helpers-B3L87vXg.js";import"./index-CEBP3NLi.js";import"./ErpApp-BEAjmWaO.js";import"./fade-B7XK0E1_.js";import"./index-BcAYd26p.js";import"./useDate-BUBJ-65Y.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-CK9jXVuP.js";import"./countryList-BECIveE_.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-BXLypoqc.js";import"./DeleteOutlined-DpfJlTkJ.js";import"./ArrowRightOutlined-BulyMten.js";import"./Table-BPtJoJS3.js";import"./PlusOutlined-D3iknlFd.js";import"./index-BZxXnXFt.js";import"./index-BX5vAKpM.js";import"./index-4jR6Bdm1.js";import"./index-CGa66d7n.js";import"./index-B4MtrW3q.js";const r={name:{type:"string",required:!0},expenseCategory:{type:"async",label:"Expense Category",displayLabels:["expenseCategory","name"],dataIndex:["expenseCategory","name"],entity:"expensecategory",required:!0},currency:{type:"selectCurrency"},total:{type:"currency",required:!0},description:{type:"textarea"},ref:{type:"string"}};function k(){const e=c(),p="expense",i={displayLabels:["name"],searchFields:"name"},n=["name"],s={PANEL_TITLE:e("Expense"),DATATABLE_TITLE:e("Expense_list"),ADD_NEW_ENTITY:e("add_new_Expense"),ENTITY_NAME:e("Expense")},a={...{entity:p,...s},fields:r,searchConfig:i,deleteModalLabels:n};return t.jsx(m,{createForm:t.jsx(o,{fields:r}),updateForm:t.jsx(o,{fields:r}),config:a})}export{k as default};
