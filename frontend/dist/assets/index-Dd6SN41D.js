import{a,ab as V,Z as nt,R as y,u as ot,a8 as w,e as T,g as at,h as G,i as le,a0 as Oe,bY as de,as as rt,bZ as Se,aO as lt,ak as it,v as E,aB as st,ao as ct,al as dt,ag as ee,ap as ut,aL as ft,aD as Ee,aa as mt,aP as gt,A as Ct}from"./index-DI72K1XZ.js";import{O as ie,b7 as Pe,p as we,b8 as vt,K as ue,I as bt,aB as se,C as Ne,i as yt,c as Te,o as xt,N as pt,J as ht,E as $t,j as k,b9 as Ot,aP as St,aQ as Et,ba as Pt,bb as wt,bc as Nt,bd as Tt,be as Rt}from"./erpOs-B3R6MilN.js";import{d as It,p as fe,i as jt}from"./ErpApp-HUt-6-NE.js";import{i as Bt}from"./fade-P-cNJMmO.js";function Mt(){const[e,t]=a.useState([]),o=a.useCallback(n=>(t(r=>[].concat(V(r),[n])),()=>{t(r=>r.filter(l=>l!==n))}),[]);return[e,o]}function me(e){return!!(e&&e.then)}const zt=e=>{const{type:t,children:o,prefixCls:n,buttonProps:r,close:l,autoFocus:f,emitEvent:d,isSilent:s,quitOnNullishReturnValue:c,actionFn:i}=e,u=a.useRef(!1),v=a.useRef(null),[g,h]=nt(!1),C=function(){l==null||l.apply(void 0,arguments)};a.useEffect(()=>{let m=null;return f&&(m=setTimeout(()=>{var x;(x=v.current)===null||x===void 0||x.focus()})),()=>{m&&clearTimeout(m)}},[]);const $=m=>{me(m)&&(h(!0),m.then(function(){h(!1,!0),C.apply(void 0,arguments),u.current=!1},x=>{if(h(!1,!0),u.current=!1,!(s!=null&&s()))return Promise.reject(x)}))},b=m=>{if(u.current)return;if(u.current=!0,!i){C();return}let x;if(d){if(x=i(m),c&&!me(x)){u.current=!1,C(m);return}}else if(i.length)x=i(l),u.current=!1;else if(x=i(),!x){C();return}$(x)};return a.createElement(ie,Object.assign({},Pe(t),{onClick:b,loading:g,prefixCls:n},r,{ref:v}),o)},Re=zt,K=y.createContext({}),{Provider:Ie}=K,Ft=()=>{const{autoFocusButton:e,cancelButtonProps:t,cancelTextLocale:o,isSilent:n,mergedOkCancel:r,rootPrefixCls:l,close:f,onCancel:d,onConfirm:s}=a.useContext(K);return r?y.createElement(Re,{isSilent:n,actionFn:d,close:function(){f==null||f.apply(void 0,arguments),s==null||s(!1)},autoFocus:e==="cancel",buttonProps:t,prefixCls:`${l}-btn`},o):null},ge=Ft,Ht=()=>{const{autoFocusButton:e,close:t,isSilent:o,okButtonProps:n,rootPrefixCls:r,okTextLocale:l,okType:f,onConfirm:d,onOk:s}=a.useContext(K);return y.createElement(Re,{isSilent:o,type:f||"primary",actionFn:s,close:function(){t==null||t.apply(void 0,arguments),d==null||d(!0)},autoFocus:e==="ok",buttonProps:n,prefixCls:`${r}-btn`},l)},Ce=Ht;var je=a.createContext({});function ve(e,t,o){var n=t;return!n&&o&&(n="".concat(e,"-").concat(o)),n}function be(e,t){var o=e["page".concat(t?"Y":"X","Offset")],n="scroll".concat(t?"Top":"Left");if(typeof o!="number"){var r=e.document;o=r.documentElement[n],typeof o!="number"&&(o=r.body[n])}return o}function Lt(e){var t=e.getBoundingClientRect(),o={left:t.left,top:t.top},n=e.ownerDocument,r=n.defaultView||n.parentWindow;return o.left+=be(r),o.top+=be(r,!0),o}const At=a.memo(function(e){var t=e.children;return t},function(e,t){var o=t.shouldUpdate;return!o});var ye={width:0,height:0,overflow:"hidden",outline:"none"},Dt={outline:"none"},Be=y.forwardRef(function(e,t){var o=e.prefixCls,n=e.className,r=e.style,l=e.title,f=e.ariaId,d=e.footer,s=e.closable,c=e.closeIcon,i=e.onClose,u=e.children,v=e.bodyStyle,g=e.bodyProps,h=e.modalRender,C=e.onMouseDown,$=e.onMouseUp,b=e.holderRef,m=e.visible,x=e.forceRender,p=e.width,N=e.height,O=e.classNames,S=e.styles,F=y.useContext(je),A=F.panel,D=ot(b,A),z=a.useRef(),q=a.useRef(),B=a.useRef();y.useImperativeHandle(t,function(){return{focus:function(){var W;(W=B.current)===null||W===void 0||W.focus()},changeActive:function(W){var te=document,Y=te.activeElement;W&&Y===q.current?z.current.focus():!W&&Y===z.current&&q.current.focus()}}});var R={};p!==void 0&&(R.width=p),N!==void 0&&(R.height=N);var H;d&&(H=y.createElement("div",{className:w("".concat(o,"-footer"),O==null?void 0:O.footer),style:T({},S==null?void 0:S.footer)},d));var L;l&&(L=y.createElement("div",{className:w("".concat(o,"-header"),O==null?void 0:O.header),style:T({},S==null?void 0:S.header)},y.createElement("div",{className:"".concat(o,"-title"),id:f},l)));var _=a.useMemo(function(){return at(s)==="object"&&s!==null?s:s?{closeIcon:c??y.createElement("span",{className:"".concat(o,"-close-x")})}:{}},[s,c]),Z=we(_,!0),U;s&&(U=y.createElement("button",G({type:"button",onClick:i,"aria-label":"Close"},Z,{className:"".concat(o,"-close")}),_.closeIcon));var I=y.createElement("div",{className:w("".concat(o,"-content"),O==null?void 0:O.content),style:S==null?void 0:S.content},U,L,y.createElement("div",G({className:w("".concat(o,"-body"),O==null?void 0:O.body),style:T(T({},v),S==null?void 0:S.body)},g),u),H);return y.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":l?f:null,"aria-modal":"true",ref:D,style:T(T({},r),R),className:w(o,n),onMouseDown:C,onMouseUp:$},y.createElement("div",{tabIndex:0,ref:z,style:ye,"aria-hidden":"true"}),y.createElement("div",{ref:B,tabIndex:-1,style:Dt},y.createElement(At,{shouldUpdate:m||x},h?h(I):I)),y.createElement("div",{tabIndex:0,ref:q,style:ye,"aria-hidden":"true"}))}),Me=a.forwardRef(function(e,t){var o=e.prefixCls,n=e.title,r=e.style,l=e.className,f=e.visible,d=e.forceRender,s=e.destroyOnClose,c=e.motionName,i=e.ariaId,u=e.onVisibleChanged,v=e.mousePosition,g=a.useRef(),h=a.useState(),C=le(h,2),$=C[0],b=C[1],m={};$&&(m.transformOrigin=$);function x(){var p=Lt(g.current);b(v?"".concat(v.x-p.left,"px ").concat(v.y-p.top,"px"):"")}return a.createElement(Oe,{visible:f,onVisibleChanged:u,onAppearPrepare:x,onEnterPrepare:x,forceRender:d,motionName:c,removeOnLeave:s,ref:g},function(p,N){var O=p.className,S=p.style;return a.createElement(Be,G({},e,{ref:t,title:n,ariaId:i,prefixCls:o,holderRef:N,style:T(T(T({},S),r),m),className:w(l,O)}))})});Me.displayName="Content";function _t(e){var t=e.prefixCls,o=e.style,n=e.visible,r=e.maskProps,l=e.motionName,f=e.className;return a.createElement(Oe,{key:"mask",visible:n,motionName:l,leavedClassName:"".concat(t,"-mask-hidden")},function(d,s){var c=d.className,i=d.style;return a.createElement("div",G({ref:s,style:T(T({},i),o),className:w("".concat(t,"-mask"),c,f)},r))})}function Wt(e){var t=e.prefixCls,o=t===void 0?"rc-dialog":t,n=e.zIndex,r=e.visible,l=r===void 0?!1:r,f=e.keyboard,d=f===void 0?!0:f,s=e.focusTriggerAfterClose,c=s===void 0?!0:s,i=e.wrapStyle,u=e.wrapClassName,v=e.wrapProps,g=e.onClose,h=e.afterOpenChange,C=e.afterClose,$=e.transitionName,b=e.animation,m=e.closable,x=m===void 0?!0:m,p=e.mask,N=p===void 0?!0:p,O=e.maskTransitionName,S=e.maskAnimation,F=e.maskClosable,A=F===void 0?!0:F,D=e.maskStyle,z=e.maskProps,q=e.rootClassName,B=e.classNames,R=e.styles,H=a.useRef(),L=a.useRef(),_=a.useRef(),Z=a.useState(l),U=le(Z,2),I=U[0],j=U[1],W=vt();function te(){de(L.current,document.activeElement)||(H.current=document.activeElement)}function Y(){if(!de(L.current,document.activeElement)){var P;(P=_.current)===null||P===void 0||P.focus()}}function Je(P){if(P)Y();else{if(j(!1),N&&H.current&&c){try{H.current.focus({preventScroll:!0})}catch{}H.current=null}I&&(C==null||C())}h==null||h(P)}function ne(P){g==null||g(P)}var J=a.useRef(!1),oe=a.useRef(),ke=function(){clearTimeout(oe.current),J.current=!0},et=function(){oe.current=setTimeout(function(){J.current=!1})},ce=null;A&&(ce=function(ae){J.current?J.current=!1:L.current===ae.target&&ne(ae)});function tt(P){if(d&&P.keyCode===ue.ESC){P.stopPropagation(),ne(P);return}l&&P.keyCode===ue.TAB&&_.current.changeActive(!P.shiftKey)}return a.useEffect(function(){l&&(j(!0),te())},[l]),a.useEffect(function(){return function(){clearTimeout(oe.current)}},[]),a.createElement("div",G({className:w("".concat(o,"-root"),q)},we(e,{data:!0})),a.createElement(_t,{prefixCls:o,visible:N&&l,motionName:ve(o,O,S),style:T(T({zIndex:n},D),R==null?void 0:R.mask),maskProps:z,className:B==null?void 0:B.mask}),a.createElement("div",G({tabIndex:-1,onKeyDown:tt,className:w("".concat(o,"-wrap"),u,B==null?void 0:B.wrapper),ref:L,onClick:ce,style:T(T(T({zIndex:n},i),R==null?void 0:R.wrapper),{},{display:I?null:"none"})},v),a.createElement(Me,G({},e,{onMouseDown:ke,onMouseUp:et,ref:_,closable:x,ariaId:W,prefixCls:o,visible:l&&I,onClose:ne,onVisibleChanged:Je,motionName:ve(o,$,b)}))))}var ze=function(t){var o=t.visible,n=t.getContainer,r=t.forceRender,l=t.destroyOnClose,f=l===void 0?!1:l,d=t.afterClose,s=t.panelRef,c=a.useState(o),i=le(c,2),u=i[0],v=i[1],g=a.useMemo(function(){return{panel:s}},[s]);return a.useEffect(function(){o&&v(!0)},[o]),!r&&f&&!u?null:a.createElement(je.Provider,{value:g},a.createElement(bt,{open:o||r||u,autoDestroy:!1,getContainer:n,autoLock:o||u},a.createElement(Wt,G({},t,{destroyOnClose:f,afterClose:function(){d==null||d(),v(!1)}}))))};ze.displayName="Dialog";const Vt=()=>rt()&&window.document.documentElement,Gt=()=>{const{cancelButtonProps:e,cancelTextLocale:t,onCancel:o}=a.useContext(K);return y.createElement(ie,Object.assign({onClick:o},e),t)},xe=Gt,qt=()=>{const{confirmLoading:e,okButtonProps:t,okType:o,okTextLocale:n,onOk:r}=a.useContext(K);return y.createElement(ie,Object.assign({},Pe(o),{loading:e,onClick:r},t),n)},pe=qt;function Fe(e,t){return y.createElement("span",{className:`${e}-close-x`},t||y.createElement(Ne,{className:`${e}-close-icon`}))}const He=e=>{const{okText:t,okType:o="primary",cancelText:n,confirmLoading:r,onOk:l,onCancel:f,okButtonProps:d,cancelButtonProps:s,footer:c}=e,[i]=se("Modal",Se()),u=t||(i==null?void 0:i.okText),v=n||(i==null?void 0:i.cancelText),g={confirmLoading:r,okButtonProps:d,cancelButtonProps:s,okTextLocale:u,cancelTextLocale:v,okType:o,onOk:l,onCancel:f},h=y.useMemo(()=>g,V(Object.values(g)));let C;return typeof c=="function"||typeof c>"u"?(C=y.createElement(y.Fragment,null,y.createElement(xe,null),y.createElement(pe,null)),typeof c=="function"&&(C=c(C,{OkBtn:pe,CancelBtn:xe})),C=y.createElement(Ie,{value:h},C)):C=c,y.createElement(lt,{disabled:!1},C)};function he(e){return{position:e,inset:0}}const Ut=e=>{const{componentCls:t,antCls:o}=e;return[{[`${t}-root`]:{[`${t}${o}-zoom-enter, ${t}${o}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${t}${o}-zoom-leave ${t}-content`]:{pointerEvents:"none"},[`${t}-mask`]:Object.assign(Object.assign({},he("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${t}-hidden`]:{display:"none"}}),[`${t}-wrap`]:Object.assign(Object.assign({},he("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${t}-root`]:Bt(e)}]},Xt=e=>{const{componentCls:t}=e;return[{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl"},[`${t}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[t]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{maxWidth:"calc(100vw - 16px)",margin:`${E(e.marginXS)} auto`},[`${t}-centered`]:{[t]:{flex:1}}}}},{[t]:Object.assign(Object.assign({},st(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${E(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${t}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${t}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${t}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${E(e.modalCloseBtnSize)}`,justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalCloseIconHoverColor,backgroundColor:e.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:e.colorBgTextActive}},ct(e)),[`${t}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${E(e.borderRadiusLG)} ${E(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${t}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding},[`${t}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${t}-open`]:{overflow:"hidden"}})},{[`${t}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${t}-confirm-body`]:{marginBottom:"auto"}}}]},Zt=e=>{const{componentCls:t}=e;return{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl",[`${t}-confirm-body`]:{direction:"rtl"}}}}},Le=e=>{const t=e.padding,o=e.fontSizeHeading5,n=e.lineHeightHeading5;return dt(e,{modalHeaderHeight:e.calc(e.calc(n).mul(o).equal()).add(e.calc(t).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},Ae=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,contentPadding:e.wireframe?0:`${E(e.paddingMD)} ${E(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${E(e.padding)} ${E(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${E(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${E(e.paddingXS)} ${E(e.padding)}`:0,footerBorderTop:e.wireframe?`${E(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${E(e.borderRadiusLG)} ${E(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${E(e.padding*2)} ${E(e.padding*2)} ${E(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM}),De=it("Modal",e=>{const t=Le(e);return[Xt(t),Zt(t),Ut(t),yt(t,"zoom")]},Ae,{unitless:{titleLineHeight:!0}});var Kt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let re;const Qt=e=>{re={x:e.pageX,y:e.pageY},setTimeout(()=>{re=null},100)};Vt()&&document.documentElement.addEventListener("click",Qt,!0);const Yt=e=>{var t;const{getPopupContainer:o,getPrefixCls:n,direction:r,modal:l}=a.useContext(ee),f=I=>{const{onCancel:j}=e;j==null||j(I)},d=I=>{const{onOk:j}=e;j==null||j(I)},{prefixCls:s,className:c,rootClassName:i,open:u,wrapClassName:v,centered:g,getContainer:h,focusTriggerAfterClose:C=!0,style:$,visible:b,width:m=520,footer:x,classNames:p,styles:N}=e,O=Kt(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles"]),S=n("modal",s),F=n(),A=Te(S),[D,z,q]=De(S,A),B=w(v,{[`${S}-centered`]:!!g,[`${S}-wrap-rtl`]:r==="rtl"}),R=x!==null&&a.createElement(He,Object.assign({},e,{onOk:d,onCancel:f})),[H,L]=It(fe(e),fe(l),{closable:!0,closeIcon:a.createElement(Ne,{className:`${S}-close-icon`}),closeIconRender:I=>Fe(S,I)}),_=jt(`.${S}-content`),[Z,U]=xt("Modal",O.zIndex);return D(a.createElement(pt,null,a.createElement(ht,{status:!0,override:!0},a.createElement($t.Provider,{value:U},a.createElement(ze,Object.assign({width:m},O,{zIndex:Z,getContainer:h===void 0?o:h,prefixCls:S,rootClassName:w(z,i,q,A),footer:R,visible:u??b,mousePosition:(t=O.mousePosition)!==null&&t!==void 0?t:re,onClose:f,closable:H,closeIcon:L,focusTriggerAfterClose:C,transitionName:k(F,"zoom",e.transitionName),maskTransitionName:k(F,"fade",e.maskTransitionName),className:w(z,c,l==null?void 0:l.className),style:Object.assign(Object.assign({},l==null?void 0:l.style),$),classNames:Object.assign(Object.assign(Object.assign({},l==null?void 0:l.classNames),p),{wrapper:w(B,p==null?void 0:p.wrapper)}),styles:Object.assign(Object.assign({},l==null?void 0:l.styles),N),panelRef:_}))))))},_e=Yt,Jt=e=>{const{componentCls:t,titleFontSize:o,titleLineHeight:n,modalConfirmIconSize:r,fontSize:l,lineHeight:f,modalTitleHeight:d,fontHeight:s,confirmBodyPadding:c}=e,i=`${t}-confirm`;return{[i]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${i}-body-wrapper`]:Object.assign({},ft()),[`&${t} ${t}-body`]:{padding:c},[`${i}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:r,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(s).sub(r).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(d).sub(r).equal()).div(2).equal()}},[`${i}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS},[`${e.iconCls} + ${i}-paragraph`]:{maxWidth:`calc(100% - ${E(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${i}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:o,lineHeight:n},[`${i}-content`]:{color:e.colorText,fontSize:l,lineHeight:f},[`${i}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${i}-error ${i}-body > ${e.iconCls}`]:{color:e.colorError},[`${i}-warning ${i}-body > ${e.iconCls},
        ${i}-confirm ${i}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${i}-info ${i}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${i}-success ${i}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},kt=ut(["Modal","confirm"],e=>{const t=Le(e);return[Jt(t)]},Ae,{order:-1e3});var en=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function We(e){const{prefixCls:t,icon:o,okText:n,cancelText:r,confirmPrefixCls:l,type:f,okCancel:d,footer:s,locale:c}=e,i=en(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let u=o;if(!o&&o!==null)switch(f){case"info":u=a.createElement(Pt,null);break;case"success":u=a.createElement(Et,null);break;case"error":u=a.createElement(St,null);break;default:u=a.createElement(Ot,null)}const v=d??f==="confirm",g=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[h]=se("Modal"),C=c||h,$=n||(v?C==null?void 0:C.okText:C==null?void 0:C.justOkText),b=r||(C==null?void 0:C.cancelText),m=Object.assign({autoFocusButton:g,cancelTextLocale:b,okTextLocale:$,mergedOkCancel:v},i),x=a.useMemo(()=>m,V(Object.values(m))),p=a.createElement(a.Fragment,null,a.createElement(ge,null),a.createElement(Ce,null)),N=e.title!==void 0&&e.title!==null,O=`${l}-body`;return a.createElement("div",{className:`${l}-body-wrapper`},a.createElement("div",{className:w(O,{[`${O}-has-title`]:N})},u,a.createElement("div",{className:`${l}-paragraph`},N&&a.createElement("span",{className:`${l}-title`},e.title),a.createElement("div",{className:`${l}-content`},e.content))),s===void 0||typeof s=="function"?a.createElement(Ie,{value:x},a.createElement("div",{className:`${l}-btns`},typeof s=="function"?s(p,{OkBtn:Ce,CancelBtn:ge}):p)):s,a.createElement(kt,{prefixCls:t}))}const tn=e=>{const{close:t,zIndex:o,afterClose:n,open:r,keyboard:l,centered:f,getContainer:d,maskStyle:s,direction:c,prefixCls:i,wrapClassName:u,rootPrefixCls:v,bodyStyle:g,closable:h=!1,closeIcon:C,modalRender:$,focusTriggerAfterClose:b,onConfirm:m,styles:x}=e,p=`${i}-confirm`,N=e.width||416,O=e.style||{},S=e.mask===void 0?!0:e.mask,F=e.maskClosable===void 0?!1:e.maskClosable,A=w(p,`${p}-${e.type}`,{[`${p}-rtl`]:c==="rtl"},e.className),[,D]=mt(),z=a.useMemo(()=>o!==void 0?o:D.zIndexPopupBase+wt,[o,D]);return a.createElement(_e,{prefixCls:i,className:A,wrapClassName:w({[`${p}-centered`]:!!e.centered},u),onCancel:()=>{t==null||t({triggerCancel:!0}),m==null||m(!1)},open:r,title:"",footer:null,transitionName:k(v||"","zoom",e.transitionName),maskTransitionName:k(v||"","fade",e.maskTransitionName),mask:S,maskClosable:F,style:O,styles:Object.assign({body:g,mask:s},x),width:N,zIndex:z,afterClose:n,keyboard:l,centered:f,getContainer:d,closable:h,closeIcon:C,modalRender:$,focusTriggerAfterClose:b},a.createElement(We,Object.assign({},e,{confirmPrefixCls:p})))},nn=e=>{const{rootPrefixCls:t,iconPrefixCls:o,direction:n,theme:r}=e;return a.createElement(Ee,{prefixCls:t,iconPrefixCls:o,direction:n,theme:r},a.createElement(tn,Object.assign({},e)))},Ve=nn,X=[];let Ge="";function qe(){return Ge}const on=e=>{var t,o;const{prefixCls:n,getContainer:r,direction:l}=e,f=Se(),d=a.useContext(ee),s=qe()||d.getPrefixCls(),c=n||`${s}-modal`;let i=r;return i===!1&&(i=void 0),y.createElement(Ve,Object.assign({},e,{rootPrefixCls:s,prefixCls:c,iconPrefixCls:d.iconPrefixCls,theme:d.theme,direction:l??d.direction,locale:(o=(t=d.locale)===null||t===void 0?void 0:t.Modal)!==null&&o!==void 0?o:f,getContainer:i}))};function Q(e){const t=gt(),o=document.createDocumentFragment();let n=Object.assign(Object.assign({},e),{close:d,open:!0}),r;function l(){for(var c=arguments.length,i=new Array(c),u=0;u<c;u++)i[u]=arguments[u];const v=i.some(g=>g&&g.triggerCancel);e.onCancel&&v&&e.onCancel.apply(e,[()=>{}].concat(V(i.slice(1))));for(let g=0;g<X.length;g++)if(X[g]===d){X.splice(g,1);break}Nt(o)}function f(c){clearTimeout(r),r=setTimeout(()=>{const i=t.getPrefixCls(void 0,qe()),u=t.getIconPrefixCls(),v=t.getTheme(),g=y.createElement(on,Object.assign({},c));Tt(y.createElement(Ee,{prefixCls:i,iconPrefixCls:u,theme:v},t.holderRender?t.holderRender(g):g),o)})}function d(){for(var c=arguments.length,i=new Array(c),u=0;u<c;u++)i[u]=arguments[u];n=Object.assign(Object.assign({},n),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),l.apply(this,i)}}),n.visible&&delete n.visible,f(n)}function s(c){typeof c=="function"?n=c(n):n=Object.assign(Object.assign({},n),c),f(n)}return f(n),X.push(d),{destroy:d,update:s}}function Ue(e){return Object.assign(Object.assign({},e),{type:"warning"})}function Xe(e){return Object.assign(Object.assign({},e),{type:"info"})}function Ze(e){return Object.assign(Object.assign({},e),{type:"success"})}function Ke(e){return Object.assign(Object.assign({},e),{type:"error"})}function Qe(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function an(e){let{rootPrefixCls:t}=e;Ge=t}var rn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const ln=(e,t)=>{var o,{afterClose:n,config:r}=e,l=rn(e,["afterClose","config"]);const[f,d]=a.useState(!0),[s,c]=a.useState(r),{direction:i,getPrefixCls:u}=a.useContext(ee),v=u("modal"),g=u(),h=()=>{var m;n(),(m=s.afterClose)===null||m===void 0||m.call(s)},C=function(){d(!1);for(var m=arguments.length,x=new Array(m),p=0;p<m;p++)x[p]=arguments[p];const N=x.some(O=>O&&O.triggerCancel);s.onCancel&&N&&s.onCancel.apply(s,[()=>{}].concat(V(x.slice(1))))};a.useImperativeHandle(t,()=>({destroy:C,update:m=>{c(x=>Object.assign(Object.assign({},x),m))}}));const $=(o=s.okCancel)!==null&&o!==void 0?o:s.type==="confirm",[b]=se("Modal",Ct.Modal);return a.createElement(Ve,Object.assign({prefixCls:v,rootPrefixCls:g},s,{close:C,open:f,afterClose:h,okText:s.okText||($?b==null?void 0:b.okText:b==null?void 0:b.justOkText),direction:s.direction||i,cancelText:s.cancelText||(b==null?void 0:b.cancelText)},l))},sn=a.forwardRef(ln);let $e=0;const cn=a.memo(a.forwardRef((e,t)=>{const[o,n]=Mt();return a.useImperativeHandle(t,()=>({patchElement:n}),[]),a.createElement(a.Fragment,null,o)}));function dn(){const e=a.useRef(null),[t,o]=a.useState([]);a.useEffect(()=>{t.length&&(V(t).forEach(f=>{f()}),o([]))},[t]);const n=a.useCallback(l=>function(d){var s;$e+=1;const c=a.createRef();let i;const u=new Promise($=>{i=$});let v=!1,g;const h=a.createElement(sn,{key:`modal-${$e}`,config:l(d),ref:c,afterClose:()=>{g==null||g()},isSilent:()=>v,onConfirm:$=>{i($)}});return g=(s=e.current)===null||s===void 0?void 0:s.patchElement(h),g&&X.push(g),{destroy:()=>{function $(){var b;(b=c.current)===null||b===void 0||b.destroy()}c.current?$():o(b=>[].concat(V(b),[$]))},update:$=>{function b(){var m;(m=c.current)===null||m===void 0||m.update($)}c.current?b():o(m=>[].concat(V(m),[b]))},then:$=>(v=!0,u.then($))}},[]);return[a.useMemo(()=>({info:n(Xe),success:n(Ze),error:n(Ke),warning:n(Ue),confirm:n(Qe)}),[]),a.createElement(cn,{key:"modal-holder",ref:e})]}var un=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const fn=e=>{const{prefixCls:t,className:o,closeIcon:n,closable:r,type:l,title:f,children:d,footer:s}=e,c=un(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:i}=a.useContext(ee),u=i(),v=t||i("modal"),g=Te(u),[h,C,$]=De(v,g),b=`${v}-confirm`;let m={};return l?m={closable:r??!1,title:"",footer:"",children:a.createElement(We,Object.assign({},e,{prefixCls:v,confirmPrefixCls:b,rootPrefixCls:u,content:d}))}:m={closable:r??!0,title:f,footer:s!==null&&a.createElement(He,Object.assign({},e)),children:d},h(a.createElement(Be,Object.assign({prefixCls:v,className:w(C,`${v}-pure-panel`,l&&b,l&&`${b}-${l}`,o,$,g)},c,{closeIcon:Fe(v,n),closable:r},m)))},mn=Rt(fn);function Ye(e){return Q(Ue(e))}const M=_e;M.useModal=dn;M.info=function(t){return Q(Xe(t))};M.success=function(t){return Q(Ze(t))};M.error=function(t){return Q(Ke(t))};M.warning=Ye;M.warn=Ye;M.confirm=function(t){return Q(Qe(t))};M.destroyAll=function(){for(;X.length;){const t=X.pop();t&&t()}};M.config=an;M._InternalPanelDoNotUseOrYouWillBeFired=mn;const yn=M;export{yn as M};