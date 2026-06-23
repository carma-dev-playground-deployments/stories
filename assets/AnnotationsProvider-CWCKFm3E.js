import{j as m}from"./jsx-runtime-DCY474Ph.js";import{F as pe,t as pt,u as Ct,v as ft,w as Nt,x as bt,y as xt,z as St,b as vt,r as ht,A as Tt,B as It,C as At,D as kt,E as Et}from"./index-D6Fn_fDf.js";import{r as I}from"./index-f9CH5uyH.js";import{T as Lt}from"./ua-parser-CoZqYcpw.js";import{n as Rt,o as Pt,p as Ot}from"./lib-DPZCw3rx.js";import{f as Le,C as T,r as qt}from"./index-Bwr7gTdO.js";import"./index-o4jIgCFn.js";import{n as Bt,o as Mt,S as _t,p as wt,f as Ft,q as _n,s as Dt,t as zt,v as Ht,w as jt,l as $t}from"./useLineSegmentVisualizers-8bvqhvHA.js";import{C as y,b as $e,a5 as Wt,n as Vt,o as Gt,c as dn,j as Ut,k as Xt}from"./Elevation-CH-2wSJY.js";import{c as Yt,a as Kt,b as Zt,d as Jt}from"./useCesiumPointMoveGizmo-DgFyITGo.js";import"./useCesiumFovWheelZoom-MDG4Mey0.js";import"./maplibre-gl-Mry-7x4X.js";import"./geodetic-BlUMYLim.js";import{n as wn}from"./angle-normalization-D3Clryc1.js";import{c as cn,P as J,b as Ce}from"./angles-B5wuhJLI.js";import{i as Qt}from"./carma-guards-B4aLupIb.js";import{c as We}from"./CoordinateAdapters-SEUNtbYh.js";/* empty css                                      */import{S as ea}from"./Scene-BLD066l6.js";import{r as na}from"./config-Dmwkjj5z.js";import"./svgProjection-DC0AVwLB.js";const Re={de:{backspace:"Rücktaste",escape:"Esc",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Esc",shift:"Shift"}},ta=e=>e||(Rt||Pt?"macos":Ot?"windows":"other"),aa=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Re[n]?Re[n]:Re.en},ra=(e,n)=>e==="macos"?"⌫":`← ${n.backspace}`,Te={LABEL:"label",VISUALIZER:"visualizer"},ia=Te,Ve=e=>`[${e}="true"]`,mn="data-annotation-label-overlay-root",gn="data-annotation-visualizer-overlay-root",Fn="data-annotation-visualizer-overlay-container",oa=Ve(Fn),sa=Object.freeze({[Te.LABEL]:{rootAttribute:mn,containerAttribute:Bt,rootSelector:Ve(mn),containerSelector:Mt},[Te.VISUALIZER]:{rootAttribute:gn,containerAttribute:Fn,rootSelector:Ve(gn),containerSelector:oa}}),la=e=>sa[e],ua=(e,n=Te.LABEL)=>{var i,l;const{rootSelector:t,containerSelector:a}=la(n);let r=e.canvas.parentElement,o=r;for(;r;){if(r.matches(a))return r;const u=(i=r.querySelector)==null?void 0:i.call(r,a);if(u instanceof HTMLElement)return u;if(r.matches(t))return r;const s=(l=r.querySelector)==null?void 0:l.call(r,t);if(s instanceof HTMLElement)return s;o=r,r=r.parentElement}return o},da=ua,E={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",STYLE:"style",DELETE:"delete"},O=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),P=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),b=Object.freeze({heading:T.ACCENT_MEASUREMENTS,panelSurface:T.NEUTRAL_SURFACE_SUBTLE,panelBorder:T.NEUTRAL_BORDER_SUBTLE,shadowBase:T.NEUTRAL_BLACK,bodyText:T.NEUTRAL_TEXT_PRIMARY,mutedText:T.NEUTRAL_TEXT_MUTED,linkText:T.WUPP_BLUE,fieldText:T.NEUTRAL_TEXT_STRONG,fieldBorder:T.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:T.NEUTRAL_BORDER_INPUT,fieldFocusBackground:T.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:T.STATE_FOCUS_OUTLINE,titleText:T.NEUTRAL_TEXT_STRONG}),Pe=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),ca=Object.freeze({defaultPixelWidth:430,headingColor:b.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:Le(b.panelSurface,Pe.panelSurface),border:`${P.hairlineBorderWidthRem} solid ${Le(b.panelBorder,Pe.panelBorder)}`,boxShadow:`${Le(b.shadowBase,Pe.panelInsetShadow)} 0 ${P.panelInsetShadowYOffsetRem} ${P.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${P.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${P.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${O.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:T.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${O.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:T.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${O.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,readOnly:!1,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:O.rootFontSizeRem,lineHeight:1.4,color:b.bodyText},bodyTextClassName:`text-[${O.rootFontSizeRem}] leading-[1.4] text-[${b.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${b.mutedText}]`,linkTextClassName:`text-[${b.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:T.ACCENT_NEUTRALS,actionIconHoverColor:T.ACCENT_NEUTRALS_HOVER,actionIconFontSize:null,hiddenActionIds:[],fieldTextClassName:`text-[${b.fieldText}]`,fieldBorderClassName:`border-[${P.hairlineBorderWidthRem}] border-[${b.fieldBorder}]`,fieldInputBorderClassName:`border-[${P.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${b.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:O.headingFontSizeRem,fontWeight:O.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${b.titleText}]/80 ${O.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${P.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${b.titleText}]/80 placeholder:text-[${b.titleText}]/50 focus:bg-[${b.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}] ${O.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${P.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${b.fieldBorder}] bg-white/85 text-[${b.titleText}]/80 placeholder:text-[${b.titleText}]/80 focus:bg-[${b.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}] ${O.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:O.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${P.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${P.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${P.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}] px-2 py-1`}),ue=e=>({...ca,...e}),N={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},ma="select",Pi="planar-biggest-triangle",Oi="planar-pca",qi="planar-trapezoid",Dn=e=>e===N.AREA_GROUND||e===N.AREA_VERTICAL||e===N.AREA_PLANAR,ga=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},Ge=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[N.AREA_VERTICAL]:[112,168,255],[N.AREA_GROUND]:[107,188,123],[N.AREA_PLANAR]:[239,223,145]}}),zn=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,Je=e=>Ge.rgb255ByType[e],Bi=(e,n)=>zn(Je(e),n?Ge.selectedFillAlpha:Ge.fillAlpha),ya=(e,n)=>zn(Je(e),n),k={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},F=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},labelTextRgb255:[248,250,252],shortLabelRgb255ByType:{[N.POINT]:[200,200,200],[N.DISTANCE]:[102,126,234],[N.POLYLINE]:[226,178,60],[N.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[k.DIRECT]:[255,255,255],[k.VERTICAL]:[111,168,255],[k.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),$=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[N.POINT]:.92,[N.DISTANCE]:.95,[N.POLYLINE]:.95,[N.LABEL]:.95,area:.95},lineComponentByKind:{[k.DIRECT]:1,[k.VERTICAL]:.96,[k.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[k.DIRECT]:.34,[k.VERTICAL]:.54,[k.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),W=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,G=(e,n=$.alpha.text[e])=>W(F.textRgb255[e],n),ve=(e=$.alpha.surfaceStroke)=>W(F.surfaceRgb255.stroke,e),pa=(e=$.alpha.surfaceStroke)=>W(F.surfaceRgb255.accent,e),Oe=(e,n=$.alpha.lineComponentByKind[e])=>W(F.lineComponentRgb255ByKind[e],n),qe=(e,n=$.alpha.lineComponentLabelAccentByKind[e])=>W(F.lineComponentRgb255ByKind[e],n),U=e=>Dn(e)?ya(e,$.alpha.shortLabelBackgroundByType.area):W(F.shortLabelRgb255ByType[e],$.alpha.shortLabelBackgroundByType[e]),Mi=e=>Dn(e)?Je(e):F.shortLabelRgb255ByType[e],yn=(e,n=$.alpha.selection[e])=>W(F.selectionRgb255[e],n),Ca=(e=1)=>W(F.labelTextRgb255,e),Y=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),z={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},fa={[N.POINT]:{prefix:"",counterStyle:z.NUMERIC,backgroundColor:U(N.POINT),textColor:G("dark")},[N.DISTANCE]:{prefix:"",counterStyle:z.ALPHABETIC,backgroundColor:U(N.DISTANCE),textColor:G("light")},[N.POLYLINE]:{prefix:"L",counterStyle:z.NUMERIC,backgroundColor:U(N.POLYLINE),textColor:G("dark")},[N.AREA_GROUND]:{prefix:"A",counterStyle:z.NUMERIC,backgroundColor:U(N.AREA_GROUND),textColor:G("light")},[N.AREA_PLANAR]:{prefix:"D",counterStyle:z.NUMERIC,backgroundColor:U(N.AREA_PLANAR),textColor:G("light")},[N.AREA_VERTICAL]:{prefix:"F",counterStyle:z.NUMERIC,backgroundColor:U(N.AREA_VERTICAL),textColor:G("light")},[N.LABEL]:{prefix:"T",counterStyle:z.NUMERIC,backgroundColor:U(N.LABEL),textColor:G("light")}},_i=(e,n,t=fa)=>{const a=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,o=a.counterStyle===z.ALPHABETIC?ga(r-1):`${r}`;return`${a.prefix}${o}`},Qe=1e-12,Na=1e-6,wi=(e,n)=>e.map(t=>y.add(t,n,new y)),ba=(e,n,t=new y)=>{const a=y.magnitudeSquared(n);if(a<=Qe)return y.clone(e,t);const r=y.dot(e,n)/a;return y.subtract(e,y.multiplyByScalar(n,r,new y),t)},xa=(e,n,t,a=new y)=>{const r=y.magnitudeSquared(t);if(r<=Qe)return y.clone(e,a);const o=y.subtract(e,n,new y),i=y.dot(o,t)/r;return y.subtract(e,y.multiplyByScalar(t,i,new y),a)},Fi=(e,n,t)=>{const a=y.magnitude(t);if(a<=Na)return 0;const r=y.subtract(e,n,new y);return y.dot(r,t)/a},Sa=(e,n,t,a=new y)=>{const r=y.subtract(n,e,new y),o=y.subtract(t,e,new y),i=y.cross(r,o,a);return y.magnitudeSquared(i)<=Qe?null:y.normalize(i,a)},va=0,ha=e=>e??va,Ta=e=>({longitude:cn(e.longitude),latitude:cn(e.latitude),altitude:e.height}),Ia=e=>{const n=$e.fromCartesian(e);return Ta(n)},pn=Object.freeze({componentEpsilonMeters:.05}),Aa=(e,n,t)=>{const a=Sa(e,n,t);return a?{anchorECEF:y.clone(e),normalECEF:a}:null},Cn=(e,n)=>xa(e,n.anchorECEF,n.normalECEF),Hn=(e,n)=>{const t=Wt(e),a=y.subtract(n,e,new y),r=y.dot(a,t),o=y.multiplyByScalar(t,r,new y),i=ba(a,t),l=y.magnitude(i),u=Math.abs(r);if(l<pn.componentEpsilonMeters||u<pn.componentEpsilonMeters)return null;const s=y.add(e,i,new y),c=y.add(e,o,new y),p=y.add(e,t,new y),d=Aa(e,p,s);return{adjacentHorizontalCorner:d?Cn(s,d):s,adjacentVerticalCorner:d?Cn(c,d):c}},Di=(e,n)=>{const t=Hn(e,n);if(!t)return 0;const a=y.distance(e,t.adjacentHorizontalCorner),r=y.distance(e,t.adjacentVerticalCorner);return a*r},fn=Object.freeze({tooltipZIndex:1700,triggerClassName:"inline-flex items-center text-[16px] leading-none"}),H=({actionId:e,title:n,icon:t,onClick:a,dataTestId:r,className:o,ariaLabel:i,disabled:l=!1,visualOptions:u})=>{var g;const s=ue(u),[c,p]=I.useState(!1),d=`${s.actionIconClassName}${o?` ${o}`:""}${l?" cursor-not-allowed opacity-50":" cursor-pointer"}`,f={color:c&&!l?s.actionIconHoverColor:s.actionIconColor};s.actionIconFontSize!==null&&(f.fontSize=s.actionIconFontSize);const C=(g=s.renderActionIcon)==null?void 0:g.call(s,{actionId:e,icon:t,className:d,style:f,dataTestId:r,ariaLabel:i,disabled:l});return m.jsx(Lt,{title:n,zIndex:fn.tooltipZIndex,getPopupContainer:S=>{const v=S instanceof HTMLElement?S:document.body;return s.resolveActionTooltipPopupContainer(v)},children:m.jsx("span",{onClick:S=>{if(l){S.stopPropagation();return}a(S)},onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),className:fn.triggerClassName,"aria-label":i,"aria-disabled":l,children:C??m.jsx(pe,{className:d,style:f,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};H.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`},description:""}}};const ka=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",editStyle:"Darstellung bearbeiten",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),Ea=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:a,onExport:r,onToggleVisibility:o,onToggleLock:i,onEditStyle:l,onDelete:u,onSetReference:s,visualOptions:c,dataTestIdPrefix:p,dataTestIds:d})=>{const f={...ka,...t},C=new Set((c==null?void 0:c.hiddenActionIds)??[]),g=S=>!C.has(S);return m.jsxs("div",{className:"flex items-center gap-2",children:[g(E.FLY_TO)?m.jsx(H,{actionId:E.FLY_TO,title:f.flyTo,icon:pt,onClick:a,dataTestId:(d==null?void 0:d.flyTo)??`${p}-flyto-btn`,visualOptions:c}):null,g(E.EXPORT)?m.jsx(H,{actionId:E.EXPORT,title:f.exportGeoJson,icon:Ct,onClick:r,dataTestId:(d==null?void 0:d.export)??`${p}-export-geojson-btn`,visualOptions:c}):null,g(E.VISIBILITY)?m.jsx(H,{actionId:E.VISIBILITY,title:e?f.show:f.hide,icon:e?ft:Nt,onClick:o,dataTestId:(d==null?void 0:d.visibility)??`${p}-toggle-visibility-btn`,visualOptions:c}):null,s&&g(E.REFERENCE)?m.jsx(H,{actionId:E.REFERENCE,title:f.setReference,icon:bt,onClick:s,dataTestId:(d==null?void 0:d.reference)??`${p}-set-reference-btn`,visualOptions:c}):null,g(E.LOCK)?m.jsx(H,{actionId:E.LOCK,title:n?f.unlock:f.lock,icon:n?xt:St,onClick:i,dataTestId:(d==null?void 0:d.lock)??`${p}-toggle-lock-btn`,visualOptions:c}):null,l&&g(E.STYLE)?m.jsx(H,{actionId:E.STYLE,title:f.editStyle,icon:vt,onClick:l,visualOptions:c}):null,g(E.DELETE)?m.jsx(H,{actionId:E.DELETE,title:n?f.deleteLocked:f.delete,icon:ht,onClick:u,dataTestId:(d==null?void 0:d.delete)??`${p}-delete-btn`,disabled:n,visualOptions:c}):null]})};Ea.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  flyTo: string;
  exportGeoJson: string;
  show: string;
  hide: string;
  setReference: string;
  lock: string;
  unlock: string;
  editStyle: string;
  delete: string;
  deleteLocked: string;
}`,signature:{properties:[{key:"flyTo",value:{name:"string",required:!0}},{key:"exportGeoJson",value:{name:"string",required:!0}},{key:"show",value:{name:"string",required:!0}},{key:"hide",value:{name:"string",required:!0}},{key:"setReference",value:{name:"string",required:!0}},{key:"lock",value:{name:"string",required:!0}},{key:"unlock",value:{name:"string",required:!0}},{key:"editStyle",value:{name:"string",required:!0}},{key:"delete",value:{name:"string",required:!0}},{key:"deleteLocked",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  flyTo: string;
  exportGeoJson: string;
  show: string;
  hide: string;
  setReference: string;
  lock: string;
  unlock: string;
  editStyle: string;
  delete: string;
  deleteLocked: string;
}>`}],raw:"Partial<AnnotationInfoBoxActionLabels>"},description:""},onFlyTo:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onExport:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onToggleVisibility:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onToggleLock:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onEditStyle:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},onSetReference:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: ReactMouseEvent<HTMLElement, MouseEvent>
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`},description:""},dataTestIdPrefix:{required:!0,tsType:{name:"string"},description:""},dataTestIds:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  flyTo: string;
  export: string;
  visibility: string;
  reference: string;
  lock: string;
  delete: string;
}`,signature:{properties:[{key:"flyTo",value:{name:"string",required:!0}},{key:"export",value:{name:"string",required:!0}},{key:"visibility",value:{name:"string",required:!0}},{key:"reference",value:{name:"string",required:!0}},{key:"lock",value:{name:"string",required:!0}},{key:"delete",value:{name:"string",required:!0}}]}}],raw:`Partial<{
  flyTo: string;
  export: string;
  visibility: string;
  reference: string;
  lock: string;
  delete: string;
}>`},description:""}}};const re={TEXT:"text",ACTION:"action",ALERT:"alert"},te={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift"},fe={INFO:"info",WARNING:"warning"},Z={INFO:"info",WARNING:"warning"},B={STANDARD:"standard",COMPACT:"compact"},La="#00d9ff",Ra="rgba(0, 217, 255, 0.2)",Pa="#004b5c",Oa="#ef4444",qa="rgba(239, 68, 68, 0.18)",Ba="#7f1d1d",Ma=()=>typeof navigator>"u"?void 0:navigator.language,Be={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},_a=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Be[n]?Be[n]:Be.en},jn={margin:"0 0 0.9rem"},Ie="1em",$n="max-content minmax(0, 1fr)",wa={display:"grid",gridTemplateColumns:$n,columnGap:Ie,rowGap:"0.58rem",alignItems:"start"},Fa={...jn,gridColumn:"1 / -1"},Wn={[B.STANDARD]:{display:"grid",gridTemplateColumns:$n,columnGap:Ie,alignItems:"baseline",margin:"0 0 0.58rem",lineHeight:1.28},[B.COMPACT]:{display:"contents"}},en={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22rem",whiteSpace:"nowrap"},Ue={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.2rem",whiteSpace:"nowrap"},Da={lineHeight:1},Xe={[Z.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Ra,color:Pa},[Z.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:qa,color:Ba}},za={[Z.INFO]:{...Xe[Z.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Ie,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[Z.WARNING]:{...Xe[Z.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Ie,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},Ha={minWidth:0,fontWeight:600,lineHeight:1.28},ja={[B.STANDARD]:{minWidth:0,whiteSpace:"nowrap"},[B.COMPACT]:{minWidth:0,lineHeight:1.28}},$a=e=>e===B.COMPACT?e:B.STANDARD,Wa=e=>typeof e=="string"||e.kind===re.TEXT,Nn=e=>typeof e!="string"&&e.kind===re.ALERT,Va=e=>{const n=e.findIndex(Wa);if(n<=0)return e;const t=e.slice(0,n),a=t.filter(Nn);return a.length===0?e:[...t.filter(r=>!Nn(r)),e[n],...a,...e.slice(n+1)]},Vn={display:"inline-flex",minWidth:"1.85rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:"0.74em",fontWeight:700,lineHeight:1,padding:"0.16rem 0.32rem"},Ga={...Vn,gap:"0.22rem"},Ua={display:"inline-flex",minWidth:"1.35rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",lineHeight:1},Xa={[fe.INFO]:{color:La},[fe.WARNING]:{color:Oa}},xe=(e,n)=>{const t=typeof e=="string"?e:e.text;return m.jsx("p",{style:n===B.COMPACT?Fa:jn,children:t},t)},he=e=>m.jsx("span",{style:Vn,children:e}),bn=e=>m.jsxs("span",{style:Ga,children:[m.jsx(pe,{icon:At}),m.jsx("span",{children:e})]}),Ye=e=>m.jsx("span",{style:Ua,children:m.jsx(pe,{style:Xa[e],icon:e===fe.WARNING?Tt:It})}),Ya=e=>Ye(e===Z.WARNING?fe.WARNING:fe.INFO),Ka=(e,n)=>he(ra(e,n)),Za=(e,n,t,a)=>{switch(e){case te.CLICK:return bn(a.click);case te.DOUBLE_CLICK:return bn(a.doubleClick);case te.ENTER:return he("Enter");case te.BACKSPACE:return Ka(t,n);case te.ESCAPE:return he(n.escape);case te.SHIFT:return he(n.shift)}},xn=(e,n,t,a)=>m.jsx("span",{style:en,children:e.map((r,o)=>m.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[o>0?m.jsx("span",{children:"+"}):null,Za(r,n,t,a)]},`${r}-${o}`))}),Ja=(e,n,t,a,r,o)=>o===B.COMPACT?m.jsxs("span",{style:Ue,children:[e?Ye(e):null,n.map((i,l)=>m.jsxs("span",{style:Ue,children:[l>0?m.jsx("span",{style:Da,children:r.alternative}):null,xn(i,t,a,r)]},`${i.join("+")}-${l}`))]}):m.jsxs("span",{style:en,children:[e?Ye(e):null,n.map((i,l)=>m.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[l>0?m.jsx("span",{children:r.alternative}):null,xn(i,t,a,r)]},`${i.join("+")}-${l}`))]}),Ke=(e,n,t,a,r,o)=>m.jsxs("div",{"data-testid":"annotation-help-action",style:Wn[o],children:[Ja(e.indicator,e.inputAlternatives,t,a,r,o),m.jsx("span",{style:ja[o],children:e.description})]},`${e.inputAlternatives.map(i=>i.join("+")).join("-")}-${n}`),Sn=(e,n,t,a,r,o)=>{const i=e.actions??[],l=o===B.COMPACT?za[e.severity]:Xe[e.severity];return m.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:l,children:[m.jsxs("div",{style:Wn[o],children:[m.jsx("span",{style:o===B.COMPACT?Ue:en,children:Ya(e.severity)}),m.jsx("span",{style:Ha,children:e.text})]}),i.map((u,s)=>Ke(u,s,t,a,r,o))]},`${e.severity}-${e.text}-${n}`)},Qa=({items:e,layout:n,locale:t,platform:a})=>{const r=$a(n),o=t??Ma(),i=aa(o),l=ta(a),u=_a(o),s=Va(e);if(r===B.COMPACT){const p=s.map((d,f)=>typeof d=="string"||d.kind===re.TEXT?xe(d,r):d.kind===re.ALERT?Sn(d,f,i,l,u,r):Ke(d,f,i,l,u,r));return m.jsx("div",{"data-testid":"annotation-help-content",style:wa,children:p})}const c=s.map((p,d)=>typeof p=="string"||p.kind===re.TEXT?xe(p,r):p.kind===re.ALERT?Sn(p,d,i,l,u,r):Ke(p,d,i,l,u,r));return m.jsx(m.Fragment,{children:c})};Qa.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""}}};const er=({items:e,className:n,visualOptions:t})=>{const a=ue(t),r=a.subtitleTextClassName.split(/\s+/).filter(o=>o.length>0&&!o.startsWith("px-")).join(" ");return m.jsx("dl",{className:`m-0 flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((o,i)=>m.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[m.jsx("dt",{className:r,style:a.subtitleTextStyle,children:o.label}),m.jsx("dd",{className:"m-0 leading-[1.25]",children:o.value})]},o.id??i))})};er.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const nr=({children:e,className:n,style:t,visualOptions:a})=>{const r=ue(a);return m.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};nr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const tr=Object.freeze({entrySingular:"Messung",entryPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),vn=(e,n)=>`${e} ${e===1?n.entrySingular:n.entryPlural} ${n.availableSuffix}`.trim(),ar=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:a,labels:r,onFlyToAll:o,onPrevious:i,onNext:l,visualOptions:u})=>{var C,g;const s=ue(u),c={...tr,...r};if(e<=0&&!t)return null;const p={fontSize:s.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},d=((C=s.navigationControlLabels)==null?void 0:C.previous)??m.jsx(pe,{icon:kt}),f=((g=s.navigationControlLabels)==null?void 0:g.next)??m.jsx(pe,{icon:Et});return m.jsxs(m.Fragment,{children:[t?m.jsx("div",{className:`${s.navigationInstructionContainerClassName} ${s.mutedTextClassName}`,children:m.jsx("span",{children:t})}):null,e>0?m.jsx("div",{className:s.navigationAvailabilityContainerClassName,children:o?m.jsx("button",{type:"button",className:`${s.linkTextClassName} cursor-pointer`,onClick:o,style:{border:"none",background:"transparent",padding:0},children:a??vn(e,c)}):m.jsx("span",{className:s.linkTextClassName,children:a??vn(e,c)})}):null,e>0?m.jsxs("div",{className:s.navigationSummaryContainerClassName,children:[m.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${s.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:p,"aria-label":c.previousAriaLabel,children:d}),m.jsxs("span",{className:"mx-4",children:[n+1," ",c.counterSeparator," ",e]}),m.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${s.linkTextClassName}`,onClick:l,"data-test-id":"switch-measurement-right",style:p,"aria-label":c.nextAriaLabel,children:f})]}):null]})};ar.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  entrySingular: string;
  entryPlural: string;
  availableSuffix: string;
  previousAriaLabel: string;
  nextAriaLabel: string;
  counterSeparator: string;
}`,signature:{properties:[{key:"entrySingular",value:{name:"string",required:!0}},{key:"entryPlural",value:{name:"string",required:!0}},{key:"availableSuffix",value:{name:"string",required:!0}},{key:"previousAriaLabel",value:{name:"string",required:!0}},{key:"nextAriaLabel",value:{name:"string",required:!0}},{key:"counterSeparator",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  entrySingular: string;
  entryPlural: string;
  availableSuffix: string;
  previousAriaLabel: string;
  nextAriaLabel: string;
  counterSeparator: string;
}>`}],raw:"Partial<AnnotationInfoBoxNavigationLabels>"},description:""},onFlyToAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevious:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`},description:""}}};const rr=({children:e,className:n,style:t,visualOptions:a})=>{const r=ue(a);return m.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};rr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const ae=e=>e.trim(),_=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),ce=e=>ae(e).slice(0,_.shortLabelMaxLength),ir=e=>e.slice(0,_.shortLabelMaxLength),or=({value:e,placeholder:n,onCommit:t,readOnly:a=!1,shortLabelValue:r,shortLabelPlaceholder:o,onShortLabelCommit:i,visualOptions:l})=>{const u=ue(l),[s,c]=I.useState(()=>ae(e)),[p,d]=I.useState(()=>ce(r??"")),f=I.useRef(null),C=I.useRef(null),g=_.shortLabelMaxLength+_.shortLabelWidthPaddingCh,S=Math.min(Math.max(ae(p||o||"").length+_.shortLabelWidthPaddingCh,_.shortLabelMinWidthCh),g);I.useEffect(()=>{c(ae(e))},[e]),I.useEffect(()=>{d(ce(r??""))},[r]);const v=h=>{if(a){c(ae(e));return}const R=ae(h);c(R),t(R)},D=h=>{if(!i||a){d(ce(r??""));return}const R=ce(h);if(!R){const yt=ce(r??"");d(yt);return}d(R),i(R)},ne=h=>{h.stopPropagation()},dt=h=>{var R;h.key==="Enter"&&(h.preventDefault(),(R=f.current)==null||R.blur())},ct=h=>{var R;h.key==="Enter"&&(h.preventDefault(),(R=C.current)==null||R.blur())},mt={...u.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},gt={...u.titleTextStyle,borderRadius:_.borderRadiusRem,flex:"0 1 auto",width:`${S}ch`,minWidth:`${_.shortLabelMinWidthCh}ch`,maxWidth:`min(${g}ch, 100%)`,fieldSizing:"content"};return m.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:ne,onClick:ne,children:[m.jsx("input",{ref:f,type:"text",value:s,placeholder:n,readOnly:a,"aria-readonly":a,className:u.titleInputClassName,style:mt,onMouseDown:ne,onClick:ne,onChange:h=>c(h.target.value),onBlur:h=>v(h.target.value),onKeyDown:dt}),i?m.jsx("input",{ref:C,type:"text",value:p,placeholder:o,readOnly:a,"aria-readonly":a,maxLength:_.shortLabelMaxLength,className:u.shortLabelInputClassName,style:gt,onMouseDown:ne,onClick:ne,onChange:h=>d(ir(h.target.value)),onBlur:h=>D(h.target.value),onKeyDown:ct}):null]})};or.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
  props: AnnotationInfoBoxActionIconRenderProps
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  actionId: AnnotationInfoBoxActionId;
  icon: IconDefinition;
  className: string;
  style: CSSProperties;
  dataTestId?: string;
  ariaLabel?: string;
  disabled: boolean;
}`,signature:{properties:[{key:"actionId",value:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]",required:!0}},{key:"icon",value:{name:"IconDefinition",required:!0}},{key:"className",value:{name:"string",required:!0}},{key:"style",value:{name:"CSSProperties",required:!0}},{key:"dataTestId",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}},required:!1}},{key:"fieldTextClassName",value:{name:"string",required:!0}},{key:"fieldBorderClassName",value:{name:"string",required:!0}},{key:"fieldInputBorderClassName",value:{name:"string",required:!0}},{key:"fieldFocusBackgroundClassName",value:{name:"string",required:!0}},{key:"fieldFocusOutlineClassName",value:{name:"string",required:!0}},{key:"subtleFieldBackgroundClassName",value:{name:"string",required:!0}},{key:"titleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"titleTextClassName",value:{name:"string",required:!0}},{key:"titleInputClassName",value:{name:"string",required:!0}},{key:"shortLabelInputClassName",value:{name:"string",required:!0}},{key:"navigationInstructionContainerClassName",value:{name:"string",required:!0}},{key:"navigationAvailabilityContainerClassName",value:{name:"string",required:!0}},{key:"navigationSummaryContainerClassName",value:{name:"string",required:!0}},{key:"navigationLinkFontSize",value:{name:"string",required:!0}},{key:"navigationControlLabels",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  previous: ReactNode;
  next: ReactNode;
}`,signature:{properties:[{key:"previous",value:{name:"ReactNode",required:!0}},{key:"next",value:{name:"ReactNode",required:!0}}]}}],raw:`Readonly<{
  previous: ReactNode;
  next: ReactNode;
}>`,required:!1}},{key:"inlineFieldButtonClassName",value:{name:"string",required:!0}},{key:"colorInputClassName",value:{name:"string",required:!0}},{key:"inlineActionButtonClassName",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  defaultPixelWidth: number;
  headingColor: string;
  headerStyle: CSSProperties;
  bodyPanelStyle: CSSProperties;
  resolveActionTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  headerForegroundClassName: string;
  headerTitleClassName: string;
  subtitleContainerClassName: string;
  subtitleTextStyle: CSSProperties;
  subtitleTextClassName: string;
  subtitleMetaTextStyle: CSSProperties;
  subtitleMetaTextClassName: string;
  showSubtitleMetaText: boolean;
  readOnly: boolean;
  bodyContainerClassName: string;
  bodyTextStyle: CSSProperties;
  bodyTextClassName: string;
  emptyContentLineStyle: CSSProperties;
  emptyContentLineClassName: string;
  mutedTextClassName: string;
  linkTextClassName: string;
  actionIconClassName: string;
  actionIconColor: string;
  actionIconHoverColor: string;
  actionIconFontSize: string | null;
  hiddenActionIds: readonly AnnotationInfoBoxActionId[];
  renderActionIcon?: (
    props: AnnotationInfoBoxActionIconRenderProps
  ) => ReactNode;
  fieldTextClassName: string;
  fieldBorderClassName: string;
  fieldInputBorderClassName: string;
  fieldFocusBackgroundClassName: string;
  fieldFocusOutlineClassName: string;
  subtleFieldBackgroundClassName: string;
  titleTextStyle: CSSProperties;
  titleTextClassName: string;
  titleInputClassName: string;
  shortLabelInputClassName: string;
  navigationInstructionContainerClassName: string;
  navigationAvailabilityContainerClassName: string;
  navigationSummaryContainerClassName: string;
  navigationLinkFontSize: string;
  navigationControlLabels?: Readonly<{
    previous: ReactNode;
    next: ReactNode;
  }>;
  inlineFieldButtonClassName: string;
  colorInputClassName: string;
  inlineActionButtonClassName: string;
}>`},description:""}}};const sr={AUTHORING:"authoring",EXTERNAL:"external"},zi={RELATIVE:"relative",ABSOLUTE:"absolute"},Gn=e=>new Set(e.filter(n=>n.annotationRole===sr.EXTERNAL||n.readOnly||n.locked).flatMap(n=>n.nodeIds)),Me=e=>e.reduce((n,t)=>{const a=t.match(/(\d+)$/),r=a?Number(a[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),Hi=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),K=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),a=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(l=>t.has(l))))})).filter(i=>i.nodeIds.length>0),r=new Set(a.flatMap(i=>i.nodeIds)),o=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...a,...o]},hn=6378137,lr=.1,_e=e=>e*Math.PI/180,ur=(e,n)=>{const t=_e(n.latitude-e.latitude),a=_e(n.longitude-e.longitude),r=_e((e.latitude+n.latitude)/2),o=a*Math.cos(r)*hn,i=t*hn,l=n.altitude-e.altitude;return Math.hypot(o,i,l)},dr=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,cr=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:a,linkToNodeId:r})=>{const o=e.find(C=>C.id===t)??null,i=Array.from(new Set(a.filter(Boolean)));if(!o||i.length===0)return[...n];const l=new Set(i),u=n.find(C=>C.nodeIds.includes(t))??null,s=dr(r),c=s&&!l.has(s)?n.find(C=>C.nodeIds.includes(s))??null:null;return c!==null&&!c.nodeIds.some(C=>l.has(C))?K({nodes:e,nodeLinks:n.map(C=>C.id===c.id?{...C,nodeIds:Array.from(new Set([...C.nodeIds,...i]))}:{...C,nodeIds:C.nodeIds.filter(g=>!l.has(g))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(C=>u.nodeIds.includes(C.id)&&!l.has(C.id)).some(C=>ur(C.coordinate,o.coordinate)>lr)?K({nodes:e,nodeLinks:n.map(C=>C.id===u.id?{...C,nodeIds:C.nodeIds.filter(g=>!l.has(g))}:{...C})}):[...n]},mr=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:a,selectedAnnotationIds:r=[],preferredMovedNodeIds:o})=>{const i=n.find(g=>g.id===e)??null;if(!i)return{targetNode:null,targetLinkedNodeGroup:null,movedNodeIds:[]};const l=t.find(g=>g.nodeIds.includes(e))??null,u=(l==null?void 0:l.nodeIds)??[e],s=Array.from(new Set((o??[]).filter(g=>u.includes(g)))),c=new Set(r.filter(Boolean)),p=new Set(a.filter(g=>c.has(g.id)).flatMap(g=>g.nodeIds)),d=u.filter(g=>p.has(g)),f=s.length>0?s:d.length>0?d:[...u],C=Gn(a);return{targetNode:i,targetLinkedNodeGroup:l,movedNodeIds:f.filter(g=>!C.has(g))}},gr=(e={})=>{const{initialToolType:n=ma,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},yr=({nodeIds:e,closed:n,nextEdgeNumericSuffix:t})=>{const a=[];let r=t;for(let l=0;l<e.length-1;l+=1){const u=e[l],s=e[l+1];!u||!s||(r+=1,a.push({id:`edge-${r}`,startNodeId:u,endNodeId:s}))}const o=e[0],i=e[e.length-1];return n&&e.length>=3&&o&&i&&(r+=1,a.push({id:`edge-${r}`,startNodeId:i,endNodeId:o})),a},pr=Yt({name:"annotationsRuntime",initialState:gr(),reducers:{replaceState:(e,n)=>n.payload,setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},setNextShortLabelCounterByToolType:(e,n)=>{e.settingsState.nextShortLabelCounterByToolType={...e.settingsState.nextShortLabelCounterByToolType,[n.payload.toolType]:Math.max(1,n.payload.nextCounter)}},setSelectedAnnotationId:(e,n)=>{const t=n.payload,a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t?[t]:[],e.infoBoxState.activeAnnotationId=t},setSelectedAnnotationIds:(e,n)=>{const t=Array.from(new Set(n.payload.filter(Boolean))),a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t,e.infoBoxState.activeAnnotationId=t[t.length-1]??null},appendAnnotationEntities:(e,n)=>{if(e.nodes.push(...n.payload.nodes),n.payload.linkedNodeGroups.forEach(t=>{const a=e.linkedNodeGroups.find(r=>r.id===t.id);if(!a){e.linkedNodeGroups.push({id:t.id,nodeIds:[...t.nodeIds]});return}a.nodeIds=Array.from(new Set([...a.nodeIds,...t.nodeIds]))}),e.edges.push(...n.payload.edges),e.annotationEntries.push({...n.payload.annotationEntry,nodeIds:[...n.payload.annotationEntry.nodeIds],edgeIds:[...n.payload.annotationEntry.edgeIds]}),e.linkedNodeGroups=K({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),n.payload.selectAnnotationId!==void 0){const t=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=t,e.selectionState.selectedAnnotationIds=n.payload.selectAnnotationId?[n.payload.selectAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.selectAnnotationId??null}},removeAnnotationById:(e,n)=>{const{annotationId:t,nextSelectedAnnotationId:a}=n.payload,r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(s=>s.id===t))return;e.annotationEntries=e.annotationEntries.filter(s=>s.id!==t);const i=new Set(e.annotationEntries.flatMap(s=>s.nodeIds)),l=new Set(e.annotationEntries.flatMap(s=>s.edgeIds));if(e.nodes=e.nodes.filter(s=>i.has(s.id)),e.linkedNodeGroups=K({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(s=>l.has(s.id)),e.selectionState.previousSelectedAnnotationId=r,e.settingsState.elevationReferenceAnnotationId===t&&(e.settingsState.elevationReferenceAnnotationId=null),a!==void 0){e.selectionState.selectedAnnotationIds=a?[a]:[],e.infoBoxState.activeAnnotationId=a??null;return}const u=e.selectionState.selectedAnnotationIds.filter(s=>s!==t);e.selectionState.selectedAnnotationIds=u,e.infoBoxState.activeAnnotationId=u[u.length-1]??null},removeAnnotationsByIds:(e,n)=>{const t=new Set(n.payload.annotationIds);if(t.size===0)return;const a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(u=>t.has(u.id)))return;e.annotationEntries=e.annotationEntries.filter(u=>!t.has(u.id));const o=new Set(e.annotationEntries.flatMap(u=>u.nodeIds)),i=new Set(e.annotationEntries.flatMap(u=>u.edgeIds));if(e.nodes=e.nodes.filter(u=>o.has(u.id)),e.linkedNodeGroups=K({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(u=>i.has(u.id)),e.selectionState.previousSelectedAnnotationId=a,e.settingsState.elevationReferenceAnnotationId&&t.has(e.settingsState.elevationReferenceAnnotationId)&&(e.settingsState.elevationReferenceAnnotationId=null),n.payload.nextSelectedAnnotationId!==void 0){e.selectionState.selectedAnnotationIds=n.payload.nextSelectedAnnotationId?[n.payload.nextSelectedAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.nextSelectedAnnotationId??null;return}const l=e.selectionState.selectedAnnotationIds.filter(u=>!t.has(u));e.selectionState.selectedAnnotationIds=l,e.infoBoxState.activeAnnotationId=l[l.length-1]??null},updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:a,selectedAnnotationIds:r=[],movedNodeIds:o,linkToNodeId:i}=n.payload,{targetNode:l,movedNodeIds:u}=mr({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedAnnotationIds:r,preferredMovedNodeIds:o});if(!l)return;const s=new Set(u);if(u.length===0)return;const c=Gn(e.annotationEntries),p=i&&!c.has(i)?i:null;e.nodes.forEach(d=>{s.has(d.id)&&(d.coordinate=a)}),e.linkedNodeGroups=cr({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:l.id,movedNodeIds:u,linkToNodeId:p})},insertNodeIntoMeasurementEdge:(e,n)=>{const{annotationId:t,startNodeId:a,endNodeId:r,coordinate:o}=n.payload,i=e.annotationEntries.find(v=>v.id===t);if(!i)return;const l=i.nodeIds.findIndex((v,D)=>v===a&&i.nodeIds[D+1]===r),u=l>=0?l+1:i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===a&&i.nodeIds[0]===r?i.nodeIds.length:-1;if(u<0)return;const s=new Map(e.edges.map(v=>[v.id,v])),c=i.edgeIds.findIndex(v=>{const D=s.get(v);return(D==null?void 0:D.startNodeId)===a&&D.endNodeId===r}),p=c>=0?i.edgeIds[c]:null,d=p?s.get(p):void 0;if(!d||c<0)return;const f=`node-${Me(e.nodes.map(v=>v.id))+1}`,C=`edge-${Me(e.edges.map(v=>v.id))+1}`;e.nodes.push({id:f,coordinate:o}),e.linkedNodeGroups=K({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:f,nodeIds:[f]}]}),d.endNodeId=f;const g={id:C,startNodeId:f,endNodeId:r},S=e.edges.findIndex(v=>v.id===p);S>=0?e.edges.splice(S+1,0,g):e.edges.push(g),i.nodeIds=[...i.nodeIds.slice(0,u),f,...i.nodeIds.slice(u)],i.edgeIds=[...i.edgeIds.slice(0,c+1),C,...i.edgeIds.slice(c+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:a}=n.payload,r=e.annotationEntries.find(s=>s.id===t);if(!r||!r.nodeIds.includes(a))return;const o=r.nodeIds.filter(s=>s!==a);if(o.length===r.nodeIds.length)return;const i=new Set(r.edgeIds),l=yr({nodeIds:o,closed:!!r.closed,nextEdgeNumericSuffix:Me(e.edges.map(s=>s.id))});r.nodeIds=o,r.edgeIds=l.map(s=>s.id),e.edges=[...e.edges.filter(s=>!i.has(s.id)),...l];const u=new Set(e.annotationEntries.flatMap(s=>s.nodeIds));e.nodes=e.nodes.filter(s=>u.has(s.id)),e.linkedNodeGroups=K({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:a,shortLabel:r,shortLabelSource:o,shortLabelCounter:i,hidden:l,locked:u,annotationRole:s,readOnly:c,labelAppearance:p,elevationDisplayMode:d,distanceAnchorCoordinateSelection:f,distanceTriangleAnchorCoordinateRole:C}=n.payload,g=e.annotationEntries.find(S=>S.id===t);g&&(a!==void 0&&(g.displayName=a),r!==void 0&&(g.shortLabel=r),o!==void 0&&(g.shortLabelSource=o),i!==void 0&&(g.shortLabelCounter=i),l!==void 0&&(g.hidden=l),u!==void 0&&(g.locked=u),s!==void 0&&(g.annotationRole=s),c!==void 0&&(g.readOnly=c),p!==void 0&&(g.labelAppearance={...g.labelAppearance??{},...p}),d!==void 0&&(g.elevationDisplayMode=d),f!==void 0&&(g.distanceAnchorCoordinateSelection=f),C!==void 0&&(g.distanceTriangleAnchorCoordinateRole=C))}}}),{appendAnnotationEntities:ji,removeAnnotationById:$i,removeAnnotationsByIds:Wi,removeNodeFromAnnotation:Vi,setElevationReferenceAnnotationId:Gi,setNextShortLabelCounterByToolType:Ui,setPointTemporaryMode:Xi,insertNodeIntoMeasurementEdge:Yi,updateNodeCoordinateById:Ki,updateAnnotationEntryById:Zi,replaceState:Ji,setAnnotationToolType:Qi,setSelectedAnnotationId:eo,setSelectedAnnotationIds:no}=pr.actions,nn=I.createContext(null);Kt(nn);const Cr=Zt(nn);Jt(nn);const to=()=>Cr(),Ze=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8"}),fr=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,Nr=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},ao=(e,n=Ze)=>({strokeWidthPx:fr(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:Nr(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern)}),Tn=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),x={colors:{neutral:ve(1),accent:ve(1),preview:ve(Tn.previewAlpha),surface:qt(Tn.surfaceAlpha),transparent:"transparent",components:{direct:Oe(k.DIRECT),vertical:Oe(k.VERTICAL),horizontal:Oe(k.HORIZONTAL)},componentLabelAccents:{direct:qe(k.DIRECT),vertical:qe(k.VERTICAL),horizontal:qe(k.HORIZONTAL)}},sizes:{edgeStrokeWidth:Ze.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:Ze.overlayDashPattern}},Un=Object.freeze({edge:Object.freeze({stroke:x.colors.accent,strokeWidth:x.sizes.edgeStrokeWidth,overlayDashPattern:x.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:x.sizes.pointPixelSize,fill:x.colors.transparent,outline:x.colors.surface,outlineWidth:x.sizes.pointOutlineWidth})}),Xn=Object.freeze({edge:Object.freeze({stroke:x.colors.neutral}),point:Object.freeze({outline:x.colors.neutral})}),br=(e,n={})=>({...e,...n}),xr=(e,n={})=>({...e,...n}),ro=e=>br(e,Xn.edge),io=e=>xr(e,Xn.point),In=Ca(),se=Object.freeze({style:Object.freeze({DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"}),label:Object.freeze({textColor:In}),selection:Object.freeze({highlightPalette:Object.freeze({backgroundColor:yn("background"),hoverBackgroundColor:yn("hoverBackground"),textColor:In,glowColor:ve(1),glowRadiusPx:5,preserveFillOnSelection:!0})}),lineLabel:Object.freeze({backgroundStyle:Object.freeze({SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"})})}),Sr=Y.fontSizePx.pointLabel,vr=e=>`${e/Sr}rem`,ie=Object.freeze({fontFamily:Y.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:vr(Y.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:Y.fontWeight.medium,badgeFontWeight:Y.fontWeight.medium,headingFontWeight:Y.fontWeight.semibold,sectionTitleFontWeight:Y.fontWeight.semibold}),hr={NONE:"none",MOVE_ON_LINE:"move-on-line"},q=Object.freeze({appearance:Object.freeze({themeStyle:se.style.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:ie.fontFamily,fontWeight:ie.lineLabelFontWeight}),background:Object.freeze({style:se.lineLabel.backgroundStyle.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:hr.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),tn=Object.freeze({verticalFlippedBaselineOffsetPx:0,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5}),an=e=>{var n,t;return{appearance:{...q.appearance,...e==null?void 0:e.appearance},text:{...q.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&q.text.echo===void 0?void 0:{...q.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...q.background,...e==null?void 0:e.background},surface:{...q.surface,...e==null?void 0:e.surface},layout:{...q.layout,...e==null?void 0:e.layout},collision:{...q.collision,...e==null?void 0:e.collision}}},ye=Object.freeze({lineStrokeWidthPx:x.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:9,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,directLineColor:x.colors.components.direct,verticalLineColor:x.colors.components.vertical,horizontalLineColor:x.colors.components.horizontal,draftChainColor:x.colors.preview}),me=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),Se=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),Tr=Object.freeze({fontSize:"20px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:12,textEchoShadow:"0 0 4px rgba(2, 6, 23, 0.8), 0 0 12px rgba(2, 6, 23, 0.77), 0 0 24px rgba(2, 6, 23, 0.64)"}),Ir=Object.freeze({[se.style.BRIGHT_ON_DARK]:"15, 23, 42",[se.style.DARK_ON_BRIGHT]:"255, 255, 255"}),ge=(e,n)=>{const t=document.createElement(e);return t.className=n,t},X=({element:e,value:n,property:t,unit:a,min:r,max:o})=>{if(typeof n!="number"||!Number.isFinite(n))return;const i=r===void 0?n:Math.max(n,r),l=o===void 0?i:Math.min(i,o);e.style.setProperty(t,`${l}${a??""}`)},Ar=({element:e,backdrop:n,surface:t,accentColor:a,visualOptions:r=q})=>{var i,l,u,s,c,p,d,f,C,g,S,v;e.style.setProperty("--carma-annotation-text-overlay-font-family",r.text.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(r.text.fontWeight)),a&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",a),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=r.background.style,typeof r.background.surfaceAlpha=="number"&&Number.isFinite(r.background.surfaceAlpha)&&!((i=r.background.color)!=null&&i.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${Ir[r.appearance.themeStyle]}, ${Math.min(Math.max(r.background.surfaceAlpha,0),1)})`);const o=r.background.showBackdrop!==!1;n.style.display=o?"block":"none",t.style.display=o?"block":"none",(l=r.text.color)!=null&&l.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-color",r.text.color),(u=r.text.blendMode)!=null&&u.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-blend-mode",r.text.blendMode),(s=r.background.color)!=null&&s.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",r.background.color),(c=r.background.blendMode)!=null&&c.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-blend-mode",r.background.blendMode),(p=r.surface.blendMode)!=null&&p.trim()&&e.style.setProperty("--carma-annotation-text-overlay-surface-blend-mode",r.surface.blendMode),(f=(d=r.text.echo)==null?void 0:d.color)!=null&&f.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-color",r.text.echo.color),(g=(C=r.text.echo)==null?void 0:C.blendMode)!=null&&g.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blend-mode",r.text.echo.blendMode),X({element:e,value:(S=r.text.echo)==null?void 0:S.blurPx,property:"--carma-annotation-text-overlay-text-echo-blur-px",unit:"px",min:0}),X({element:e,value:(v=r.text.echo)==null?void 0:v.opacity,property:"--carma-annotation-text-overlay-text-echo-opacity",min:0,max:1}),X({element:e,value:r.background.blurPx,property:"--carma-annotation-text-overlay-surface-blur-px",unit:"px",min:0}),X({element:e,value:r.background.brightnessPct,property:"--carma-annotation-text-overlay-surface-brightness-pct",unit:"%",min:0}),X({element:e,value:r.background.saturatePct,property:"--carma-annotation-text-overlay-surface-saturate-pct",unit:"%",min:0}),X({element:e,value:r.background.radiusEx,property:"--carma-annotation-text-overlay-backdrop-radius",unit:"ex",min:0}),X({element:e,value:r.background.edgeBlurPx,property:"--carma-annotation-text-overlay-surface-edge-blur-px",unit:"px",min:0}),(typeof r.surface.paddingBlockEx=="number"||typeof r.surface.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${typeof r.surface.paddingBlockEx=="number"&&Number.isFinite(r.surface.paddingBlockEx)?Math.max(r.surface.paddingBlockEx,0):Se.paddingBlockEx}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${typeof r.surface.paddingInlineEx=="number"&&Number.isFinite(r.surface.paddingInlineEx)?Math.max(r.surface.paddingInlineEx,0):Se.paddingInlineEx}ex`)),(typeof r.background.insetBlockEx=="number"||typeof r.background.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${typeof r.background.insetBlockEx=="number"&&Number.isFinite(r.background.insetBlockEx)?r.background.insetBlockEx:Se.backdropInsetBlockEx}ex ${typeof r.background.insetInlineEx=="number"&&Number.isFinite(r.background.insetInlineEx)?r.background.insetInlineEx:Se.backdropInsetInlineEx}ex`)},kr=(e,n)=>{n&&(n.fontSize&&e.style.setProperty("--carma-annotation-text-overlay-font-size",n.fontSize),n.fontWeight!==void 0&&e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(n.fontWeight)),n.letterSpacing&&e.style.setProperty("--carma-annotation-text-overlay-letter-spacing",n.letterSpacing),typeof n.textEchoBlurPx=="number"&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blur-px",`${n.textEchoBlurPx}px`),n.textEchoShadow&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-shadow",n.textEchoShadow))},Yn=({accentColor:e,visualOptions:n,styleOptions:t})=>{const a=ge("div",me.root),r=ge("div",me.backdrop),o=ge("div",me.surface),i=ge("div",me.textEcho),l=ge("div",me.text);return i.dataset.annotationTextOverlayTextEcho="true",l.dataset.annotationTextOverlayText="foreground",Ar({element:a,backdrop:r,surface:o,textEcho:i,text:l,accentColor:e,visualOptions:n}),kr(a,t),a.append(r,o,i,l),a},Er=e=>e.querySelector('[data-annotation-text-overlay-text="foreground"]'),Lr=e=>e.querySelector('[data-annotation-text-overlay-text-echo="true"]'),Kn=(e,n)=>{const t=Er(e),a=Lr(e);t&&t.textContent!==n&&(t.textContent=n),a&&a.textContent!==n&&(a.textContent=n)},ke=(e,n)=>{Object.assign(e.style,n)},An=Object.freeze({className:"carma-annotation-overlay-line-label",frameClassName:"carma-annotation-overlay-line-label__frame"}),Rr=Object.freeze({direct:{labelOffsetPx:ye.lineLabelOffsetPx},vertical:{labelOffsetPx:ye.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:tn.verticalFlippedBaselineOffsetPx,labelRotationMode:_t.CLOCKWISE},horizontal:{labelOffsetPx:ye.lineLabelOffsetPx}}),kn=(e,n)=>{const t=document.createElement(e);return t.className=n,t},Pr=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:q.layout.shortEdgeOffsetPx},Zn=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",Or=e=>Zn(e)==="vertical",qr=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...Rr[e],anchorRatio:t===void 0?void 0:Ft(t),getLabelOutsideReferencePoint:n?()=>({x:n.x,y:n.y}):void 0}),Br=({x:e,y:n,angleRad:t,anchor:a})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${a==="left"?"translate(0%, -50%)":a==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,Mr=(e,n,t=ia.LABEL)=>{const a=da(e,t);if(!a)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",ke(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),a.appendChild(r),r},oo=Mr,_r=e=>{e==null||e.remove()},so=_r,lo=e=>{const n=new Vt,t=n.update.bind(n);return n.update=a=>{if(!(a.passes.pick&&!a.passes.render))return t(a)},e.primitives.add(n),n},uo=(e,n)=>{if(!(!n||!Qt(e)))try{if(typeof n.isDestroyed=="function"&&n.isDestroyed())return;e.primitives.remove(n)}catch{}},Jn=e=>Gt.fromType("Color",{color:dn.fromCssColorString(e)??dn.WHITE}),co=(e,n,t,a)=>({polyline:e.add({id:n,positions:[y.ZERO,y.ZERO],width:(a==null?void 0:a.width)??ye.lineStrokeWidthPx,material:Jn(t),show:!1}),colorCss:t}),mo=(e,n)=>{e.colorCss!==n&&(e.polyline.material=Jn(n),e.colorCss=n)},go=e=>{e.polyline.show=!1},yo=(e,n)=>{e.polyline.positions=[...n],e.polyline.show=n.length>=2},we=(e,n)=>{const t=an(n),a=kn("div",An.className),r=kn("div",An.frameClassName),o=Yn({accentColor:e,visualOptions:t});return a.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(o),a.appendChild(r),a},po=e=>{const n=an(e),t=we(x.colors.componentLabelAccents.direct,n);t.dataset.annotationOverlayLineLabelKind="direct";const a=we(x.colors.componentLabelAccents.vertical,n);a.dataset.annotationOverlayLineLabelKind="vertical";const r=we(x.colors.componentLabelAccents.horizontal,n);return r.dataset.annotationOverlayLineLabelKind="horizontal",{direct:t,vertical:a,horizontal:r}},En=(e,n)=>{if(!(n!=null&&n.screenPosition)){e.style.display="none";return}Kn(e,n.text),e.style.display="inline-grid",e.style.transform=`translate(${Math.round(n.screenPosition.x)}px, ${Math.round(n.screenPosition.y)}px) translate(-50%, -50%)`},Co=({overlayLayer:e,accentColor:n,visualOptions:t})=>{const a=Yn({accentColor:n,visualOptions:an(t),styleOptions:Tr});return a.dataset.annotationOverlayLineLabelKind="area",ke(a,{position:"absolute",left:"0",top:"0",display:"none",willChange:"transform"}),e==null||e.appendChild(a),{setState:r=>En(a,r),clear:()=>En(a,null),destroy:()=>a.remove()}},fo=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},Qn=(e,n)=>{ke(e,{width:`${n.pixelSize}px`,height:`${n.pixelSize}px`,border:`${n.outlineWidth}px solid ${n.outline}`,background:n.fill})},wr=(e=Un.point)=>{const n=document.createElement("div");return ke(n,{position:"absolute",left:"0",top:"0",display:"none",borderRadius:"999px",transform:"translate(-50%, -50%)",boxSizing:"border-box",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",willChange:"transform"}),Qn(n,e),n},Fr=({overlayLayer:e,pointMarkers:n,count:t,style:a})=>{for(;n.length<t;){const r=wr(a);n.push(r),e.appendChild(r)}},No=e=>{e.forEach(n=>{n.style.display="none"})},bo=({scene:e,overlayLayer:n,pointMarkers:t,coordinates:a,style:r=Un.point})=>{Fr({overlayLayer:n,pointMarkers:t,count:a.length,style:r}),a.forEach((o,i)=>{const l=t[i];if(!l)return;Qn(l,r);const u=ea.worldToWindowCoordinates(e,We(o));if(!Ut(u)){l.style.display="none";return}l.style.display="block",l.style.transform=`translate(${Math.round(u.x)}px, ${Math.round(u.y)}px) translate(-50%, -50%)`}),t.slice(a.length).forEach(o=>{o.style.display="none"})},Dr=e=>wn(e>J||e<-J?e+Ce:e),zr=e=>{let n=wn(e);return n>J?n=n-Ce:n<-J&&(n=n+Ce),n},Hr=({angleRad:e,lineSide:n})=>Math.abs(Math.abs(e)-J)>tn.verticalBaselineAngleEpsilonRad?e:n==="left"?J:-J,jr=({deltaX:e,deltaY:n,lineSide:t,flipReadingDirection:a,forceHorizontal:r})=>{if(r)return 0;const o=Dr(Math.atan2(n,e)),i=a?o>=0?o-Ce:o+Ce:o;return Hr({angleRad:zr(i),lineSide:t})},$r=({start:e,end:n,kind:t,outsideReferencePoint:a,shortEdgeOffsetPx:r=q.layout.shortEdgeOffsetPx,useShortEdgeRules:o=!0,flipReadingDirection:i=!1,previousShouldFlip:l=!1,anchorRatio:u})=>{const s=wt({svgLine:{start:{x:e.x,y:e.y},end:{x:n.x,y:n.y}},options:qr({kind:t,outsideReferencePoint:a,anchorRatio:u}),previousShouldFlip:l,sideSwitchThresholdPx:tn.sideHysteresisPx});if(!s)return null;const c=n.x-e.x,p=n.y-e.y;if(o&&s.lineLengthPx<ye.lineLabelMinLengthPx){const d=s.normalX>=0,f=d?"left":"right";return{x:s.midX+s.normalX*r,y:s.midY+s.normalY*r,angleRad:jr({deltaX:c,deltaY:p,lineSide:f,flipReadingDirection:i,forceHorizontal:!0}),anchor:d?"left":"right",anchorRatio:s.anchorRatio,isShortEdge:!0,shouldFlip:s.shouldFlip,normalX:s.normalX,normalY:s.normalY}}return{x:s.textX,y:s.textY,angleRad:s.angleRad,anchor:"center",anchorRatio:s.anchorRatio,isShortEdge:!1,shouldFlip:s.shouldFlip,normalX:s.normalX,normalY:s.normalY}},xo=({element:e,text:n,start:t,end:a,outsideReferencePoint:r,flipReadingDirection:o=!1,anchorRatio:i})=>{const l=$r({start:t,end:a,kind:Zn(e),outsideReferencePoint:r,shortEdgeOffsetPx:Pr(e),useShortEdgeRules:Or(e),flipReadingDirection:o,anchorRatio:i,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!l){e.style.display="none";return}Kn(e,n),e.style.display="block",e.dataset.annotationOverlayLineLabelShortEdge=l.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${l.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=l.shouldFlip?"1":"0",e.style.transform=Br(l)},So=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),vo=()=>({cartographicA:new $e,cartographicB:new $e,auxiliaryPoint:new y,auxiliaryScreen:new Xt}),ho=({scene:e,anchorPointECEF:n,targetPointECEF:t,scratch:a})=>{const r=e.globe.ellipsoid,o=r.cartesianToCartographic(n,a.cartographicA),i=r.cartesianToCartographic(t,a.cartographicB);return!o||!i?null:y.fromRadians(o.longitude,o.latitude,i.height??0,r,a.auxiliaryPoint)},To=e=>{const n=Ia(e);return{longitude:n.longitude,latitude:n.latitude,altitude:ha(n.altitude)}},Io=({firstCorner:e,oppositeCorner:n})=>{const t=We(e),a=We(n),r=Hn(t,a);return r?[t,r.adjacentHorizontalCorner,a,r.adjacentVerticalCorner,t]:null},Wr=Object.freeze({longPressDurationMs:320}),Vr=({interactive:e,onClick:n,onHoverChange:t,onLongPress:a,longPressDurationMs:r=Wr.longPressDurationMs,markerStyle:o})=>{const[i,l]=I.useState(!1),u=I.useRef(void 0),s=I.useRef(!1),c=I.useCallback(()=>{u.current!==void 0&&(window.clearTimeout(u.current),u.current=void 0)},[]),p=I.useCallback(S=>{if(S.stopPropagation(),S.button!==0||!a){c();return}s.current=!1,c(),u.current=window.setTimeout(()=>{s.current=!0,a()},r)},[c,r,a]),d=I.useCallback(()=>{c()},[c]),f=I.useCallback(S=>{if(S.stopPropagation(),s.current){s.current=!1;return}n==null||n()},[n]),C=I.useCallback(()=>{l(!0),t==null||t(!0)},[t]),g=I.useCallback(()=>{c(),l(!1),t==null||t(!1)},[c,t]);return I.useEffect(()=>c,[c]),m.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:m.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${_n.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:Dt(),boxShadow:i?zt():"none",filter:i?Ht():"none",...o},onClick:e?f:void 0,onMouseDown:e?p:void 0,onMouseUp:e?d:void 0,onMouseEnter:e?C:void 0,onMouseLeave:e?g:void 0})})};Vr.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Ao={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},ko={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},Eo={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},Lo={GROUND:"ground",COPLANAR:"coplanar"},Gr={MIN:1,MAX:1400,LOG_SCALE:64};Object.freeze({layoutConfig:na(void 0),markerPixelSize:10,markerOutlineWidth:x.sizes.pointOutlineWidth,stemColor:x.colors.surface,activeMoveGizmoLabelZIndex:Gr.MAX+1});Object.freeze({...jt({markerDiameterPx:x.sizes.pointPixelSize,markerStrokeWidthPx:x.sizes.pointOutlineWidth}),tickColor:_n.colors.surfaceStrong,minOverlayZIndex:$t.zIndex.interactionHandleFloor});Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:pa(),straightHitTargetPx:20})});function de(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function be(e,n){var t=Object.create(e.prototype);for(var a in n)t[a]=n[a];return t}function V(){}var ee=.7,le=1/ee,Ur=/^#([0-9a-f]{3})$/,Xr=/^#([0-9a-f]{6})$/,Yr=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Kr=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Zr=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Jr=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Qr=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,ei=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};de(V,rn,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function rn(e){var n;return e=(e+"").trim().toLowerCase(),(n=Ur.exec(e))?(n=parseInt(n[1],16),new A(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=Xr.exec(e))?Rn(parseInt(n[1],16)):(n=Yr.exec(e))?new A(n[1],n[2],n[3],1):(n=Kr.exec(e))?new A(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Zr.exec(e))?Pn(n[1],n[2],n[3],n[4]):(n=Jr.exec(e))?Pn(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Qr.exec(e))?On(n[1],n[2]/100,n[3]/100,1):(n=ei.exec(e))?On(n[1],n[2]/100,n[3]/100,n[4]):Ln.hasOwnProperty(e)?Rn(Ln[e]):e==="transparent"?new A(NaN,NaN,NaN,0):null}function Rn(e){return new A(e>>16&255,e>>8&255,e&255,1)}function Pn(e,n,t,a){return a<=0&&(e=n=t=NaN),new A(e,n,t,a)}function on(e){return e instanceof V||(e=rn(e)),e?(e=e.rgb(),new A(e.r,e.g,e.b,e.opacity)):new A}function et(e,n,t,a){return arguments.length===1?on(e):new A(e,n,t,a??1)}function A(e,n,t,a){this.r=+e,this.g=+n,this.b=+t,this.opacity=+a}de(A,et,be(V,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new A(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?ee:Math.pow(ee,e),new A(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function On(e,n,t,a){return a<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new M(e,n,t,a)}function ni(e){if(e instanceof M)return new M(e.h,e.s,e.l,e.opacity);if(e instanceof V||(e=rn(e)),!e)return new M;if(e instanceof M)return e;e=e.rgb();var n=e.r/255,t=e.g/255,a=e.b/255,r=Math.min(n,t,a),o=Math.max(n,t,a),i=NaN,l=o-r,u=(o+r)/2;return l?(n===o?i=(t-a)/l+(t<a)*6:t===o?i=(a-n)/l+2:i=(n-t)/l+4,l/=u<.5?o+r:2-o-r,i*=60):l=u>0&&u<1?0:i,new M(i,l,u,e.opacity)}function ti(e,n,t,a){return arguments.length===1?ni(e):new M(e,n,t,a??1)}function M(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}de(M,ti,be(V,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new M(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ee:Math.pow(ee,e),new M(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,a=t+(t<.5?t:1-t)*n,r=2*t-a;return new A(Fe(e>=240?e-240:e+120,r,a),Fe(e,r,a),Fe(e<120?e+240:e-120,r,a),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function Fe(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var nt=Math.PI/180,tt=180/Math.PI,Ae=18,at=.95047,rt=1,it=1.08883,ot=4/29,oe=6/29,st=3*oe*oe,ai=oe*oe*oe;function sn(e){if(e instanceof w)return new w(e.l,e.a,e.b,e.opacity);if(e instanceof j){var n=e.h*nt;return new w(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof A||(e=on(e));var t=je(e.r),a=je(e.g),r=je(e.b),o=De((.4124564*t+.3575761*a+.1804375*r)/at),i=De((.2126729*t+.7151522*a+.072175*r)/rt),l=De((.0193339*t+.119192*a+.9503041*r)/it);return new w(116*i-16,500*(o-i),200*(i-l),e.opacity)}function ri(e,n,t,a){return arguments.length===1?sn(e):new w(e,n,t,a??1)}function w(e,n,t,a){this.l=+e,this.a=+n,this.b=+t,this.opacity=+a}de(w,ri,be(V,{brighter:function(e){return new w(this.l+Ae*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new w(this.l-Ae*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=rt*ze(e),n=at*ze(n),t=it*ze(t),new A(He(3.2404542*n-1.5371385*e-.4985314*t),He(-.969266*n+1.8760108*e+.041556*t),He(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function De(e){return e>ai?Math.pow(e,1/3):e/st+ot}function ze(e){return e>oe?e*e*e:st*(e-ot)}function He(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function je(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ii(e){if(e instanceof j)return new j(e.h,e.c,e.l,e.opacity);e instanceof w||(e=sn(e));var n=Math.atan2(e.b,e.a)*tt;return new j(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function oi(e,n,t,a){return arguments.length===1?ii(e):new j(e,n,t,a??1)}function j(e,n,t,a){this.h=+e,this.c=+n,this.l=+t,this.opacity=+a}de(j,oi,be(V,{brighter:function(e){return new j(this.h,this.c,this.l+Ae*(e??1),this.opacity)},darker:function(e){return new j(this.h,this.c,this.l-Ae*(e??1),this.opacity)},rgb:function(){return sn(this).rgb()}}));var lt=-.14861,ln=1.78277,un=-.29227,Ee=-.90649,Ne=1.97294,qn=Ne*Ee,Bn=Ne*ln,Mn=ln*un-Ee*lt;function si(e){if(e instanceof Q)return new Q(e.h,e.s,e.l,e.opacity);e instanceof A||(e=on(e));var n=e.r/255,t=e.g/255,a=e.b/255,r=(Mn*a+qn*n-Bn*t)/(Mn+qn-Bn),o=a-r,i=(Ne*(t-r)-un*o)/Ee,l=Math.sqrt(i*i+o*o)/(Ne*r*(1-r)),u=l?Math.atan2(i,o)*tt-120:NaN;return new Q(u<0?u+360:u,l,r,e.opacity)}function li(e,n,t,a){return arguments.length===1?si(e):new Q(e,n,t,a??1)}function Q(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}de(Q,li,be(V,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new Q(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ee:Math.pow(ee,e),new Q(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*nt,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),a=Math.cos(e),r=Math.sin(e);return new A(255*(n+t*(lt*a+ln*r)),255*(n+t*(un*a+Ee*r)),255*(n+t*(Ne*a)),this.opacity)}}));const ut=et(T.ACCENT_MEASUREMENTS).brighter(.1);ut.opacity=.5;const ui=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:ut.toString(),colorPrimary:T.ACCENT_MEASUREMENTS,lineColor:x.colors.surface,textColor:se.label.textColor}),L=Object.freeze({scheme:ui,fontFamily:ie.fontFamily,contentFontWeight:ie.lineLabelFontWeight,badgeFontWeight:ie.badgeFontWeight,selection:se.selection.highlightPalette}),Ro=e=>L,Po=Object.freeze({fontSize:ie.rootFontSizeRem,fontFamily:L.fontFamily,fontWeight:L.contentFontWeight,lineColor:L.scheme.lineColor,textBackgroundColor:L.scheme.colorPrimaryReduced,textColor:L.scheme.textColor,markerBackgroundColor:L.scheme.colorPrimary,markerTextColor:L.scheme.textColor,selectedBackgroundColor:L.selection.backgroundColor,selectedTextColor:L.selection.textColor,selectedGlowColor:L.selection.glowColor,selectedGlowRadiusPx:L.selection.glowRadiusPx,preserveFillOnSelection:L.selection.preserveFillOnSelection,hoverBackgroundColor:L.selection.hoverBackgroundColor,markerPixelSize:x.sizes.pointPixelSize,markerOutlineWidth:x.sizes.pointOutlineWidth});I.createContext(null);export{vo as $,Qa as A,yo as B,lo as C,co as D,er as E,E as F,xa as G,ba as H,Sa as I,sr as J,Mr as K,_r as L,Lo as M,ia as N,wi as O,ko as P,oo as Q,Ao as R,so as S,No as T,bo as U,Fi as V,ao as W,ya as X,Co as Y,Bi as Z,ho as _,B as a,an as a0,we as a1,Io as a2,To as a3,Di as a4,br as a5,xr as a6,ro as a7,io as a8,Eo as a9,Un as aa,Ia as ab,ha as ac,_i as ad,L as ae,te as af,Pi as ag,Oi as ah,qi as ai,Z as aj,Hi as ak,Y as al,Po as am,Mi as an,F as ao,to as ap,Zi as aq,Gi as ar,zi as as,fa as at,ma as au,Hn as av,et as aw,rn as ax,Vr as ay,re as b,ca as c,se as d,ue as e,rr as f,or as g,Ea as h,nr as i,ar as j,Oe as k,k as l,x as m,xo as n,hr as o,q as p,po as q,Ro as r,fo as s,ie as t,ye as u,So as v,N as w,uo as x,go as y,mo as z};
