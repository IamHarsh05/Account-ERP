import{b7 as n,b9 as u,b8 as c,a,aU as d,aT as r,bh as E}from"./index-DI72K1XZ.js";import{ag as L,V as l}from"./erpOs-B3R6MilN.js";import"./index-9G2_kVOv.js";import{s as T,E as i}from"./selectors-CRtDAfPw.js";import{U as x}from"./UpdateItem-CyDLApZs.js";import{O as y}from"./OfferForm-qij7z3f4.js";import{e as p}from"./actions-DQAqwx4V.js";import"./index-B6gtKTDi.js";import"./ErpApp-HUt-6-NE.js";import"./calculate-Bl1nHP9U.js";import"./currency.es-9OAR_aOO.js";import"./index-KrFx5yLV.js";import"./statusTagColor-DxbKI3gy.js";import"./index-I1yM4LNH.js";import"./CloseCircleOutlined-D9rfMKrZ.js";import"./PlusOutlined-CUDX8_ZB.js";import"./index-BpwyeUIF.js";import"./useDebounce-vTjGJh2M.js";import"./index-HHWxeuBm.js";import"./color-DHucoY0N.js";import"./index-BGB9KXt_.js";import"./useDate-CS5tDnm-.js";import"./index-BNv12PYu.js";import"./DeleteOutlined-BYAuHBt7.js";import"./index-BFcM-ptJ.js";import"./index-pFThQwj7.js";function _({config:t}){const o=n(),{id:s}=u();c(),a.useLayoutEffect(()=>{o(p.read({entity:t.entity,id:s}))},[s]);const{result:e,isSuccess:m,isLoading:f=!0}=d(T);return a.useLayoutEffect(()=>{e&&o(p.currentAction({actionType:"update",data:e}))},[e]),f?r.jsx(i,{children:r.jsx(E,{})}):r.jsx(i,{children:m?r.jsx(x,{config:t,UpdateForm:y}):r.jsx(L,{entity:t.entity})})}function H(){const t=l(),o="offer",s={PANEL_TITLE:t("Offer Leads"),DATATABLE_TITLE:t("offer_list"),ADD_NEW_ENTITY:t("add_new_offer"),ENTITY_NAME:t("Offer Leads")},e={entity:o,...s};return r.jsx(_,{config:e})}export{H as default};
