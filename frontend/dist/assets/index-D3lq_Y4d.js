import{aT as e}from"./index-DI72K1XZ.js";import{C as c}from"./CrudModule-CRG3mzCL.js";import{ae as r,af as l,V as x}from"./erpOs-B3R6MilN.js";import{I as i}from"./index-BNv12PYu.js";import"./index-DUYC9e4t.js";import"./actions-DvWFcVna.js";import"./index-9G2_kVOv.js";import"./helpers-CKtVo9ND.js";import"./index-Dd6SN41D.js";import"./ErpApp-HUt-6-NE.js";import"./fade-P-cNJMmO.js";import"./index-B6gtKTDi.js";import"./useDate-CS5tDnm-.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-vTjGJh2M.js";import"./countryList-BkzvTOVb.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-I1yM4LNH.js";import"./DeleteOutlined-BYAuHBt7.js";import"./ArrowRightOutlined-D5Iwk8iQ.js";import"./Table-DrawsWH-.js";import"./PlusOutlined-CUDX8_ZB.js";function n(){return e.jsxs(e.Fragment,{children:[e.jsx(r.Item,{label:"Product",name:"product",rules:[{required:!0,message:"Please input Product name!"}],children:e.jsx(l,{})}),e.jsx(r.Item,{label:"Quantity",name:"quantity",rules:[{required:!0,message:"Please input Quantity!",type:"number",min:0}],children:e.jsx(i,{})}),e.jsx(r.Item,{label:"Unit Price",name:"unitPrice",rules:[{required:!0,message:"Please input Unit Price!",type:"number",min:0}],children:e.jsx(i,{formatter:t=>`$ ${t}`,parser:t=>t.replace(/\$\s?|(,*)/g,"")})})]})}function Y(){const t=x(),o="inventory",a={displayLabels:["product"],searchFields:"product",outputValue:"_id"},u=["product","quantity","unitPrice"],s=[{title:t("Product"),dataIndex:"product"},{title:t("Quantity"),dataIndex:"quantity"},{title:t("Unit Price"),dataIndex:"unitPrice"}],m=[{title:t("Product"),dataIndex:["product"]},{title:t("Quantity"),dataIndex:["quantity"]},{title:t("Unit Price"),dataIndex:["unitPrice"]}],p={PANEL_TITLE:t("product"),DATATABLE_TITLE:t("product_list"),ADD_NEW_ENTITY:t("add_new_product"),ENTITY_NAME:t("product")},d={...{entity:o,...p},readColumns:s,dataTableColumns:m,searchConfig:a,deleteModalLabels:u};return e.jsx(c,{createForm:e.jsx(n,{}),updateForm:e.jsx(n,{isUpdateForm:!0}),config:d})}export{Y as default};
