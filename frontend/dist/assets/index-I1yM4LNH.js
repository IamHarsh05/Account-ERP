import{ak as J,aB as K,v as k,al as Y,B as Z,a as n,ag as _,a8 as O,ap as L,ar as ee,bL as oe}from"./index-DI72K1XZ.js";import{k as re,l as te,ap as le,aq as ae}from"./erpOs-B3R6MilN.js";import{d as ne,p as H}from"./ErpApp-HUt-6-NE.js";const se=e=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:o,componentCls:r,calc:c}=e,a=c(o).sub(l).equal(),u=c(t).sub(l).equal();return{[r]:Object.assign(Object.assign({},K(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:a,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${k(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:u,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:a}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},I=e=>{const{lineWidth:t,fontSizeIcon:l,calc:o}=e,r=e.fontSizeSM;return Y(e,{tagFontSize:r,tagLineHeight:k(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(l).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},P=e=>({defaultBg:new Z(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),M=J("Tag",e=>{const t=I(e);return se(t)},P);var ce=function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(l[o[r]]=e[o[r]]);return l};const ie=n.forwardRef((e,t)=>{const{prefixCls:l,style:o,className:r,checked:c,onChange:a,onClick:u}=e,d=ce(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:m,tag:g}=n.useContext(_),f=h=>{a==null||a(!c),u==null||u(h)},C=m("tag",l),[y,S,i]=M(C),$=O(C,`${C}-checkable`,{[`${C}-checkable-checked`]:c},g==null?void 0:g.className,r,S,i);return y(n.createElement("span",Object.assign({},d,{ref:t,style:Object.assign(Object.assign({},o),g==null?void 0:g.style),className:$,onClick:f})))}),de=ie,ge=e=>re(e,(t,l)=>{let{textColor:o,lightBorderColor:r,lightColor:c,darkColor:a}=l;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:c,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:a,borderColor:a},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),ue=L(["Tag","preset"],e=>{const t=I(e);return ge(t)},P);function Ce(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const v=(e,t,l)=>{const o=Ce(l);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${l}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},pe=L(["Tag","status"],e=>{const t=I(e);return[v(t,"success","Success"),v(t,"processing","Info"),v(t,"error","Error"),v(t,"warning","Warning")]},P);var be=function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(l[o[r]]=e[o[r]]);return l};const me=(e,t)=>{const{prefixCls:l,className:o,rootClassName:r,style:c,children:a,icon:u,color:d,onClose:m,bordered:g=!0,visible:f}=e,C=be(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:y,direction:S,tag:i}=n.useContext(_),[$,h]=n.useState(!0),W=ee(C,["closeIcon","closable"]);n.useEffect(()=>{f!==void 0&&h(f)},[f]);const N=te(d),j=le(d),x=N||j,q=Object.assign(Object.assign({backgroundColor:d&&!x?d:void 0},i==null?void 0:i.style),c),s=y("tag",l),[F,R,A]=M(s),D=O(s,i==null?void 0:i.className,{[`${s}-${d}`]:x,[`${s}-has-color`]:d&&!x,[`${s}-hidden`]:!$,[`${s}-rtl`]:S==="rtl",[`${s}-borderless`]:!g},o,r,R,A),B=b=>{b.stopPropagation(),m==null||m(b),!b.defaultPrevented&&h(!1)},[,X]=ne(H(e),H(i),{closable:!1,closeIconRender:b=>{const G=n.createElement("span",{className:`${s}-close-icon`,onClick:B},b);return oe(b,G,p=>({onClick:z=>{var T;(T=p==null?void 0:p.onClick)===null||T===void 0||T.call(p,z),B(z)},className:O(p==null?void 0:p.className,`${s}-close-icon`)}))}}),Q=typeof C.onClick=="function"||a&&a.type==="a",E=u||null,U=E?n.createElement(n.Fragment,null,E,a&&n.createElement("span",null,a)):a,w=n.createElement("span",Object.assign({},W,{ref:t,className:D,style:q}),U,X,N&&n.createElement(ue,{key:"preset",prefixCls:s}),j&&n.createElement(pe,{key:"status",prefixCls:s}));return F(Q?n.createElement(ae,{component:"Tag"},w):w)},V=n.forwardRef(me);V.CheckableTag=de;const ye=V;export{ye as T};
