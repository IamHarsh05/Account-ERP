import{b7 as m,b9 as c,a as p,aU as u,aT as e,bh as d}from"./index--J6gaKqH.js";import{ag as E,V as l}from"./erpOs-CMKQyu82.js";import"./index-sTiArh6c.js";import{s as T,E as r}from"./selectors-APkanmoC.js";import{R as f}from"./ReadItem-jDiuWk7q.js";import{e as x}from"./actions-DqrCK4Yp.js";import"./index-BcAYd26p.js";import"./ErpApp-BEAjmWaO.js";import"./index-KrFx5yLV.js";import"./useDate-BUBJ-65Y.js";import"./currency.es-9OAR_aOO.js";import"./useMail-BYpEPpTx.js";import"./statusTagColor-DxbKI3gy.js";import"./index-BXLypoqc.js";import"./RetweetOutlined-CO65-IFC.js";import"./index-Bk5rgmMl.js";import"./index-Dis4Z6jn.js";import"./CloseCircleOutlined-BRDhjlcW.js";import"./FilePdfOutlined-dEavOBWy.js";function I({config:o}){const t=m(),{id:s}=c();p.useLayoutEffect(()=>{t(x.read({entity:o.entity,id:s}))},[s]);const{result:i,isSuccess:a,isLoading:n=!0}=u(T);return n?e.jsx(r,{children:e.jsx(d,{})}):e.jsx(r,{children:a?e.jsx(f,{config:o,selectedItem:i}):e.jsx(E,{entity:o.entity})})}function F(){const o="invoice",t=l(),s={PANEL_TITLE:t("invoice"),DATATABLE_TITLE:t("invoice_list"),ADD_NEW_ENTITY:t("add_new_invoice"),ENTITY_NAME:t("invoice"),RECORD_ENTITY:t("record_payment")},i={entity:o,...s};return e.jsx(I,{config:i})}export{F as default};
