import{aT as t}from"./index-DI72K1XZ.js";import{C as n}from"./CrudModule-CRG3mzCL.js";import{D as r}from"./index-CIu_IEhr.js";import{V as s}from"./erpOs-B3R6MilN.js";import"./index-DUYC9e4t.js";import"./actions-DvWFcVna.js";import"./index-9G2_kVOv.js";import"./helpers-CKtVo9ND.js";import"./index-Dd6SN41D.js";import"./ErpApp-HUt-6-NE.js";import"./fade-P-cNJMmO.js";import"./index-B6gtKTDi.js";import"./useDate-CS5tDnm-.js";import"./currency.es-9OAR_aOO.js";import"./useDebounce-vTjGJh2M.js";import"./countryList-BkzvTOVb.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-I1yM4LNH.js";import"./DeleteOutlined-BYAuHBt7.js";import"./ArrowRightOutlined-D5Iwk8iQ.js";import"./Table-DrawsWH-.js";import"./PlusOutlined-CUDX8_ZB.js";import"./index-BpwyeUIF.js";import"./index-HHWxeuBm.js";import"./index-BFcM-ptJ.js";import"./index-BNv12PYu.js";import"./index-pFThQwj7.js";const o={type:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"people",label:"people",color:"magenta"},{value:"company",label:"company",color:"blue"}],required:!0,hasFeedback:!0},name:{type:"string",disableForForm:!0},country:{type:"country",disableForForm:!0},phone:{type:"phone",disableForForm:!0},email:{type:"email",disableForForm:!0},people:{type:"search",label:"people",entity:"people",redirectLabel:"Add New Person",withRedirect:!0,urlToRedirect:"/people",displayLabels:["firstname","lastname"],searchFields:"firstname,lastname",dataIndex:["people","firstname"],disableForTable:!0,feedback:"people"},company:{type:"search",label:"company",entity:"company",redirectLabel:"Add New Company",withRedirect:!0,urlToRedirect:"/company",displayLabels:["name"],searchFields:"name",dataIndex:["company","name"],disableForTable:!0,feedback:"company"}};function B(){const e=s(),a="client",i={displayLabels:["name"],searchFields:"name"},p=["name"],m={PANEL_TITLE:e("client"),DATATABLE_TITLE:e("client_list"),ADD_NEW_ENTITY:e("add_new_client"),ENTITY_NAME:e("client")},l={...{entity:a,...m},fields:o,searchConfig:i,deleteModalLabels:p};return t.jsx(n,{createForm:t.jsx(r,{fields:o}),updateForm:t.jsx(r,{fields:o}),config:l})}export{B as default};
