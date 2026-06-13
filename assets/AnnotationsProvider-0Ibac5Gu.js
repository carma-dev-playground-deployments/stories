import{j as u}from"./jsx-runtime-DCY474Ph.js";import{F as pe,r as yt,s as pt,t as Ct,u as ft,v as Nt,w as bt,x as xt,y as St,z as vt,A as ht,B as It,C as Tt,D as At}from"./index-B8kvWvtq.js";import{r as I}from"./index-f9CH5uyH.js";import{T as kt}from"./ua-parser-CoZqYcpw.js";import{n as Et,o as Lt,p as Rt}from"./lib-CgELrM4g.js";import{f as Le,C as h,r as Pt}from"./index-l-cOiGX0.js";import"./index-o4jIgCFn.js";import{n as Ot,o as qt,S as Bt,p as Mt,f as _t,q as Mn,s as wt,t as Ft,v as Dt,w as zt,l as Ht}from"./useLineSegmentVisualizers-DBnygqk1.js";import{C as p,b as $e,a5 as jt,n as $t,o as Wt,c as un,j as Vt,k as Gt}from"./Elevation-DGN4pPTx.js";import{c as Ut,a as Xt,b as Yt,d as Kt}from"./useCesiumPointMoveGizmo-EfJt_uZo.js";import"./useCesiumFovWheelZoom-BtD7zgR5.js";import"./maplibre-gl-DBjQz0JA.js";import"./geodetic-BlUMYLim.js";import{n as _n}from"./angle-normalization-D3Clryc1.js";import{c as cn,P as J,b as Ce}from"./angles-B5wuhJLI.js";import{i as Zt}from"./carma-guards-CFf1uN_g.js";import{c as We}from"./CoordinateAdapters-Djsk4Mi1.js";/* empty css                                      */import{S as Jt}from"./Scene-BV14KkBC.js";import{r as Qt}from"./config-BkxWhwH9.js";import"./svgProjection-DC0AVwLB.js";const Re={de:{backspace:"Rücktaste",escape:"Esc",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Esc",shift:"Shift"}},ea=e=>e||(Et||Lt?"macos":Rt?"windows":"other"),na=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Re[n]?Re[n]:Re.en},ta=(e,n)=>e==="macos"?"⌫":`← ${n.backspace}`,Ie={LABEL:"label",VISUALIZER:"visualizer"},aa=Ie,Ve=e=>`[${e}="true"]`,mn="data-annotation-label-overlay-root",gn="data-annotation-visualizer-overlay-root",wn="data-annotation-visualizer-overlay-container",ra=Ve(wn),ia=Object.freeze({[Ie.LABEL]:{rootAttribute:mn,containerAttribute:Ot,rootSelector:Ve(mn),containerSelector:qt},[Ie.VISUALIZER]:{rootAttribute:gn,containerAttribute:wn,rootSelector:Ve(gn),containerSelector:ra}}),oa=e=>ia[e],sa=(e,n=Ie.LABEL)=>{var i,l;const{rootSelector:t,containerSelector:a}=oa(n);let r=e.canvas.parentElement,s=r;for(;r;){if(r.matches(a))return r;const d=(i=r.querySelector)==null?void 0:i.call(r,a);if(d instanceof HTMLElement)return d;if(r.matches(t))return r;const o=(l=r.querySelector)==null?void 0:l.call(r,t);if(o instanceof HTMLElement)return o;s=r,r=r.parentElement}return s},la=sa,R={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",DELETE:"delete"},O=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),P=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),b=Object.freeze({heading:h.ACCENT_MEASUREMENTS,panelSurface:h.NEUTRAL_SURFACE_SUBTLE,panelBorder:h.NEUTRAL_BORDER_SUBTLE,shadowBase:h.NEUTRAL_BLACK,bodyText:h.NEUTRAL_TEXT_PRIMARY,mutedText:h.NEUTRAL_TEXT_MUTED,linkText:h.WUPP_BLUE,fieldText:h.NEUTRAL_TEXT_STRONG,fieldBorder:h.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:h.NEUTRAL_BORDER_INPUT,fieldFocusBackground:h.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:h.STATE_FOCUS_OUTLINE,titleText:h.NEUTRAL_TEXT_STRONG}),Pe=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),da=Object.freeze({defaultPixelWidth:430,headingColor:b.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:Le(b.panelSurface,Pe.panelSurface),border:`${P.hairlineBorderWidthRem} solid ${Le(b.panelBorder,Pe.panelBorder)}`,boxShadow:`${Le(b.shadowBase,Pe.panelInsetShadow)} 0 ${P.panelInsetShadowYOffsetRem} ${P.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${P.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${P.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${O.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:h.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${O.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:h.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${O.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,readOnly:!1,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:O.rootFontSizeRem,lineHeight:1.4,color:b.bodyText},bodyTextClassName:`text-[${O.rootFontSizeRem}] leading-[1.4] text-[${b.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${b.mutedText}]`,linkTextClassName:`text-[${b.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:h.ACCENT_NEUTRALS,actionIconHoverColor:h.ACCENT_NEUTRALS_HOVER,actionIconFontSize:"16px",hiddenActionIds:[],fieldTextClassName:`text-[${b.fieldText}]`,fieldBorderClassName:`border-[${P.hairlineBorderWidthRem}] border-[${b.fieldBorder}]`,fieldInputBorderClassName:`border-[${P.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${b.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:O.headingFontSizeRem,fontWeight:O.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${b.titleText}]/80 ${O.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${P.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${b.titleText}]/80 placeholder:text-[${b.titleText}]/50 focus:bg-[${b.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}] ${O.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${P.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${b.fieldBorder}] bg-white/85 text-[${b.titleText}]/80 placeholder:text-[${b.titleText}]/80 focus:bg-[${b.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${b.fieldFocusOutline}] ${O.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:O.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${P.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${P.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${P.hairlineBorderWidthRem}] border-[${b.fieldInputBorder}] px-2 py-1`}),de=e=>({...da,...e}),N={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},ua="select",Ri="planar-biggest-triangle",Pi="planar-pca",Oi="planar-trapezoid",Fn=e=>e===N.AREA_GROUND||e===N.AREA_VERTICAL||e===N.AREA_PLANAR,ca=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},Ge=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[N.AREA_VERTICAL]:[112,168,255],[N.AREA_GROUND]:[107,188,123],[N.AREA_PLANAR]:[239,223,145]}}),Dn=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,Je=e=>Ge.rgb255ByType[e],qi=(e,n)=>Dn(Je(e),n?Ge.selectedFillAlpha:Ge.fillAlpha),ma=(e,n)=>Dn(Je(e),n),k={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},F=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},labelTextRgb255:[248,250,252],shortLabelRgb255ByType:{[N.POINT]:[200,200,200],[N.DISTANCE]:[102,126,234],[N.POLYLINE]:[226,178,60],[N.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[k.DIRECT]:[255,255,255],[k.VERTICAL]:[111,168,255],[k.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),j=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[N.POINT]:.92,[N.DISTANCE]:.95,[N.POLYLINE]:.95,[N.LABEL]:.95,area:.95},lineComponentByKind:{[k.DIRECT]:1,[k.VERTICAL]:.96,[k.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[k.DIRECT]:.34,[k.VERTICAL]:.54,[k.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),$=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,V=(e,n=j.alpha.text[e])=>$(F.textRgb255[e],n),ve=(e=j.alpha.surfaceStroke)=>$(F.surfaceRgb255.stroke,e),ga=(e=j.alpha.surfaceStroke)=>$(F.surfaceRgb255.accent,e),Oe=(e,n=j.alpha.lineComponentByKind[e])=>$(F.lineComponentRgb255ByKind[e],n),qe=(e,n=j.alpha.lineComponentLabelAccentByKind[e])=>$(F.lineComponentRgb255ByKind[e],n),G=e=>Fn(e)?ma(e,j.alpha.shortLabelBackgroundByType.area):$(F.shortLabelRgb255ByType[e],j.alpha.shortLabelBackgroundByType[e]),Bi=e=>Fn(e)?Je(e):F.shortLabelRgb255ByType[e],yn=(e,n=j.alpha.selection[e])=>$(F.selectionRgb255[e],n),ya=(e=1)=>$(F.labelTextRgb255,e),X=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),z={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},pa={[N.POINT]:{prefix:"",counterStyle:z.NUMERIC,backgroundColor:G(N.POINT),textColor:V("dark")},[N.DISTANCE]:{prefix:"",counterStyle:z.ALPHABETIC,backgroundColor:G(N.DISTANCE),textColor:V("light")},[N.POLYLINE]:{prefix:"L",counterStyle:z.NUMERIC,backgroundColor:G(N.POLYLINE),textColor:V("dark")},[N.AREA_GROUND]:{prefix:"A",counterStyle:z.NUMERIC,backgroundColor:G(N.AREA_GROUND),textColor:V("light")},[N.AREA_PLANAR]:{prefix:"D",counterStyle:z.NUMERIC,backgroundColor:G(N.AREA_PLANAR),textColor:V("light")},[N.AREA_VERTICAL]:{prefix:"F",counterStyle:z.NUMERIC,backgroundColor:G(N.AREA_VERTICAL),textColor:V("light")},[N.LABEL]:{prefix:"T",counterStyle:z.NUMERIC,backgroundColor:G(N.LABEL),textColor:V("light")}},Mi=(e,n,t=pa)=>{const a=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,s=a.counterStyle===z.ALPHABETIC?ca(r-1):`${r}`;return`${a.prefix}${s}`},Qe=1e-12,Ca=1e-6,_i=(e,n)=>e.map(t=>p.add(t,n,new p)),fa=(e,n,t=new p)=>{const a=p.magnitudeSquared(n);if(a<=Qe)return p.clone(e,t);const r=p.dot(e,n)/a;return p.subtract(e,p.multiplyByScalar(n,r,new p),t)},Na=(e,n,t,a=new p)=>{const r=p.magnitudeSquared(t);if(r<=Qe)return p.clone(e,a);const s=p.subtract(e,n,new p),i=p.dot(s,t)/r;return p.subtract(e,p.multiplyByScalar(t,i,new p),a)},wi=(e,n,t)=>{const a=p.magnitude(t);if(a<=Ca)return 0;const r=p.subtract(e,n,new p);return p.dot(r,t)/a},ba=(e,n,t,a=new p)=>{const r=p.subtract(n,e,new p),s=p.subtract(t,e,new p),i=p.cross(r,s,a);return p.magnitudeSquared(i)<=Qe?null:p.normalize(i,a)},xa=0,Sa=e=>e??xa,va=e=>({longitude:cn(e.longitude),latitude:cn(e.latitude),altitude:e.height}),ha=e=>{const n=$e.fromCartesian(e);return va(n)},pn=Object.freeze({componentEpsilonMeters:.05}),Ia=(e,n,t)=>{const a=ba(e,n,t);return a?{anchorECEF:p.clone(e),normalECEF:a}:null},Cn=(e,n)=>Na(e,n.anchorECEF,n.normalECEF),zn=(e,n)=>{const t=jt(e),a=p.subtract(n,e,new p),r=p.dot(a,t),s=p.multiplyByScalar(t,r,new p),i=fa(a,t),l=p.magnitude(i),d=Math.abs(r);if(l<pn.componentEpsilonMeters||d<pn.componentEpsilonMeters)return null;const o=p.add(e,i,new p),g=p.add(e,s,new p),c=p.add(e,t,new p),m=Ia(e,c,o);return{adjacentHorizontalCorner:m?Cn(o,m):o,adjacentVerticalCorner:m?Cn(g,m):g}},Fi=(e,n)=>{const t=zn(e,n);if(!t)return 0;const a=p.distance(e,t.adjacentHorizontalCorner),r=p.distance(e,t.adjacentVerticalCorner);return a*r},Ta=Object.freeze({tooltipZIndex:1700}),Y=({actionId:e,title:n,icon:t,onClick:a,dataTestId:r,className:s,ariaLabel:i,disabled:l=!1,visualOptions:d})=>{var f;const o=de(d),[g,c]=I.useState(!1),m=`${o.actionIconClassName}${s?` ${s}`:""}${l?" cursor-not-allowed opacity-50":" cursor-pointer"}`,C={fontSize:o.actionIconFontSize,color:g&&!l?o.actionIconHoverColor:o.actionIconColor},y=(f=o.renderActionIcon)==null?void 0:f.call(o,{actionId:e,icon:t,className:m,style:C,dataTestId:r,ariaLabel:i,disabled:l});return u.jsx(kt,{title:n,zIndex:Ta.tooltipZIndex,getPopupContainer:T=>{const S=T instanceof HTMLElement?T:document.body;return o.resolveActionTooltipPopupContainer(S)},children:u.jsx("span",{onClick:T=>{if(l){T.stopPropagation();return}a(T)},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),className:"inline-flex items-center leading-none","aria-label":i,"aria-disabled":l,children:y??u.jsx(pe,{className:m,style:C,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};Y.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  actionIconFontSize: string;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  actionIconFontSize: string;
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
}>`},description:""}}};const Aa=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),ka=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:a,onExport:r,onToggleVisibility:s,onToggleLock:i,onDelete:l,onSetReference:d,visualOptions:o,dataTestIdPrefix:g,dataTestIds:c})=>{const m={...Aa,...t},C=new Set((o==null?void 0:o.hiddenActionIds)??[]),y=f=>!C.has(f);return u.jsxs("div",{className:"flex items-center gap-2",children:[y(R.FLY_TO)?u.jsx(Y,{actionId:R.FLY_TO,title:m.flyTo,icon:yt,onClick:a,dataTestId:(c==null?void 0:c.flyTo)??`${g}-flyto-btn`,visualOptions:o}):null,y(R.EXPORT)?u.jsx(Y,{actionId:R.EXPORT,title:m.exportGeoJson,icon:pt,onClick:r,dataTestId:(c==null?void 0:c.export)??`${g}-export-geojson-btn`,visualOptions:o}):null,y(R.VISIBILITY)?u.jsx(Y,{actionId:R.VISIBILITY,title:e?m.show:m.hide,icon:e?Ct:ft,onClick:s,dataTestId:(c==null?void 0:c.visibility)??`${g}-toggle-visibility-btn`,visualOptions:o}):null,d&&y(R.REFERENCE)?u.jsx(Y,{actionId:R.REFERENCE,title:m.setReference,icon:Nt,onClick:d,dataTestId:(c==null?void 0:c.reference)??`${g}-set-reference-btn`,visualOptions:o}):null,y(R.LOCK)?u.jsx(Y,{actionId:R.LOCK,title:n?m.unlock:m.lock,icon:n?bt:xt,onClick:i,dataTestId:(c==null?void 0:c.lock)??`${g}-toggle-lock-btn`,visualOptions:o}):null,y(R.DELETE)?u.jsx(Y,{actionId:R.DELETE,title:n?m.deleteLocked:m.delete,icon:St,onClick:l,dataTestId:(c==null?void 0:c.delete)??`${g}-delete-btn`,disabled:n,visualOptions:o}):null]})};ka.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  flyTo: string;
  exportGeoJson: string;
  show: string;
  hide: string;
  setReference: string;
  lock: string;
  unlock: string;
  delete: string;
  deleteLocked: string;
}`,signature:{properties:[{key:"flyTo",value:{name:"string",required:!0}},{key:"exportGeoJson",value:{name:"string",required:!0}},{key:"show",value:{name:"string",required:!0}},{key:"hide",value:{name:"string",required:!0}},{key:"setReference",value:{name:"string",required:!0}},{key:"lock",value:{name:"string",required:!0}},{key:"unlock",value:{name:"string",required:!0}},{key:"delete",value:{name:"string",required:!0}},{key:"deleteLocked",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  flyTo: string;
  exportGeoJson: string;
  show: string;
  hide: string;
  setReference: string;
  lock: string;
  unlock: string;
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
  actionIconFontSize: string;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  actionIconFontSize: string;
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
}>`},description:""}}};const re={TEXT:"text",ACTION:"action",ALERT:"alert"},te={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift"},fe={INFO:"info",WARNING:"warning"},Z={INFO:"info",WARNING:"warning"},B={STANDARD:"standard",COMPACT:"compact"},Ea="#00d9ff",La="rgba(0, 217, 255, 0.2)",Ra="#004b5c",Pa="#ef4444",Oa="rgba(239, 68, 68, 0.18)",qa="#7f1d1d",Ba=()=>typeof navigator>"u"?void 0:navigator.language,Be={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},Ma=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Be[n]?Be[n]:Be.en},Hn={margin:"0 0 0.9rem"},Te="1em",jn="max-content minmax(0, 1fr)",_a={display:"grid",gridTemplateColumns:jn,columnGap:Te,rowGap:"0.58rem",alignItems:"start"},wa={...Hn,gridColumn:"1 / -1"},$n={[B.STANDARD]:{display:"grid",gridTemplateColumns:jn,columnGap:Te,alignItems:"baseline",margin:"0 0 0.58rem",lineHeight:1.28},[B.COMPACT]:{display:"contents"}},en={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22rem",whiteSpace:"nowrap"},Ue={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.2rem",whiteSpace:"nowrap"},Fa={lineHeight:1},Xe={[Z.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:La,color:Ra},[Z.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Oa,color:qa}},Da={[Z.INFO]:{...Xe[Z.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Te,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[Z.WARNING]:{...Xe[Z.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Te,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},za={minWidth:0,fontWeight:600,lineHeight:1.28},Ha={[B.STANDARD]:{minWidth:0,whiteSpace:"nowrap"},[B.COMPACT]:{minWidth:0,lineHeight:1.28}},ja=e=>e===B.COMPACT?e:B.STANDARD,$a=e=>typeof e=="string"||e.kind===re.TEXT,fn=e=>typeof e!="string"&&e.kind===re.ALERT,Wa=e=>{const n=e.findIndex($a);if(n<=0)return e;const t=e.slice(0,n),a=t.filter(fn);return a.length===0?e:[...t.filter(r=>!fn(r)),e[n],...a,...e.slice(n+1)]},Wn={display:"inline-flex",minWidth:"1.85rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:"0.74em",fontWeight:700,lineHeight:1,padding:"0.16rem 0.32rem"},Va={...Wn,gap:"0.22rem"},Ga={display:"inline-flex",minWidth:"1.35rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",lineHeight:1},Ua={[fe.INFO]:{color:Ea},[fe.WARNING]:{color:Pa}},xe=(e,n)=>{const t=typeof e=="string"?e:e.text;return u.jsx("p",{style:n===B.COMPACT?wa:Hn,children:t},t)},he=e=>u.jsx("span",{style:Wn,children:e}),Nn=e=>u.jsxs("span",{style:Va,children:[u.jsx(pe,{icon:It}),u.jsx("span",{children:e})]}),Ye=e=>u.jsx("span",{style:Ga,children:u.jsx(pe,{style:Ua[e],icon:e===fe.WARNING?vt:ht})}),Xa=e=>Ye(e===Z.WARNING?fe.WARNING:fe.INFO),Ya=(e,n)=>he(ta(e,n)),Ka=(e,n,t,a)=>{switch(e){case te.CLICK:return Nn(a.click);case te.DOUBLE_CLICK:return Nn(a.doubleClick);case te.ENTER:return he("Enter");case te.BACKSPACE:return Ya(t,n);case te.ESCAPE:return he(n.escape);case te.SHIFT:return he(n.shift)}},bn=(e,n,t,a)=>u.jsx("span",{style:en,children:e.map((r,s)=>u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[s>0?u.jsx("span",{children:"+"}):null,Ka(r,n,t,a)]},`${r}-${s}`))}),Za=(e,n,t,a,r,s)=>s===B.COMPACT?u.jsxs("span",{style:Ue,children:[e?Ye(e):null,n.map((i,l)=>u.jsxs("span",{style:Ue,children:[l>0?u.jsx("span",{style:Fa,children:r.alternative}):null,bn(i,t,a,r)]},`${i.join("+")}-${l}`))]}):u.jsxs("span",{style:en,children:[e?Ye(e):null,n.map((i,l)=>u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[l>0?u.jsx("span",{children:r.alternative}):null,bn(i,t,a,r)]},`${i.join("+")}-${l}`))]}),Ke=(e,n,t,a,r,s)=>u.jsxs("div",{"data-testid":"annotation-help-action",style:$n[s],children:[Za(e.indicator,e.inputAlternatives,t,a,r,s),u.jsx("span",{style:Ha[s],children:e.description})]},`${e.inputAlternatives.map(i=>i.join("+")).join("-")}-${n}`),xn=(e,n,t,a,r,s)=>{const i=e.actions??[],l=s===B.COMPACT?Da[e.severity]:Xe[e.severity];return u.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:l,children:[u.jsxs("div",{style:$n[s],children:[u.jsx("span",{style:s===B.COMPACT?Ue:en,children:Xa(e.severity)}),u.jsx("span",{style:za,children:e.text})]}),i.map((d,o)=>Ke(d,o,t,a,r,s))]},`${e.severity}-${e.text}-${n}`)},Ja=({items:e,layout:n,locale:t,platform:a})=>{const r=ja(n),s=t??Ba(),i=na(s),l=ea(a),d=Ma(s),o=Wa(e);if(r===B.COMPACT){const c=o.map((m,C)=>typeof m=="string"||m.kind===re.TEXT?xe(m,r):m.kind===re.ALERT?xn(m,C,i,l,d,r):Ke(m,C,i,l,d,r));return u.jsx("div",{"data-testid":"annotation-help-content",style:_a,children:c})}const g=o.map((c,m)=>typeof c=="string"||c.kind===re.TEXT?xe(c,r):c.kind===re.ALERT?xn(c,m,i,l,d,r):Ke(c,m,i,l,d,r));return u.jsx(u.Fragment,{children:g})};Ja.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""}}};const Qa=({items:e,className:n,visualOptions:t})=>{const a=de(t),r=a.subtitleTextClassName.split(/\s+/).filter(s=>s.length>0&&!s.startsWith("px-")).join(" ");return u.jsx("dl",{className:`flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((s,i)=>u.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[u.jsx("dt",{className:r,style:a.subtitleTextStyle,children:s.label}),u.jsx("dd",{className:"m-0 leading-[1.25]",children:s.value})]},s.id??i))})};Qa.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  actionIconFontSize: string;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  actionIconFontSize: string;
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const er=({children:e,className:n,style:t,visualOptions:a})=>{const r=de(a);return u.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};er.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  actionIconFontSize: string;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  actionIconFontSize: string;
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const nr=Object.freeze({entrySingular:"Messung",entryPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),Sn=(e,n)=>`${e} ${e===1?n.entrySingular:n.entryPlural} ${n.availableSuffix}`.trim(),tr=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:a,labels:r,onFlyToAll:s,onPrevious:i,onNext:l,visualOptions:d})=>{var y,f;const o=de(d),g={...nr,...r};if(e<=0&&!t)return null;const c={fontSize:o.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},m=((y=o.navigationControlLabels)==null?void 0:y.previous)??u.jsx(pe,{icon:Tt}),C=((f=o.navigationControlLabels)==null?void 0:f.next)??u.jsx(pe,{icon:At});return u.jsxs(u.Fragment,{children:[t?u.jsx("div",{className:`${o.navigationInstructionContainerClassName} ${o.mutedTextClassName}`,children:u.jsx("span",{children:t})}):null,e>0?u.jsx("div",{className:o.navigationAvailabilityContainerClassName,children:s?u.jsx("button",{type:"button",className:`${o.linkTextClassName} cursor-pointer`,onClick:s,style:{border:"none",background:"transparent",padding:0},children:a??Sn(e,g)}):u.jsx("span",{className:o.linkTextClassName,children:a??Sn(e,g)})}):null,e>0?u.jsxs("div",{className:o.navigationSummaryContainerClassName,children:[u.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${o.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:c,"aria-label":g.previousAriaLabel,children:m}),u.jsxs("span",{className:"mx-4",children:[n+1," ",g.counterSeparator," ",e]}),u.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${o.linkTextClassName}`,onClick:l,"data-test-id":"switch-measurement-right",style:c,"aria-label":g.nextAriaLabel,children:C})]}):null]})};tr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  actionIconFontSize: string;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  actionIconFontSize: string;
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
}>`},description:""}}};const ar=({children:e,className:n,style:t,visualOptions:a})=>{const r=de(a);return u.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};ar.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  actionIconFontSize: string;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  actionIconFontSize: string;
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const ae=e=>e.trim(),_=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),ce=e=>ae(e).slice(0,_.shortLabelMaxLength),rr=e=>e.slice(0,_.shortLabelMaxLength),ir=({value:e,placeholder:n,onCommit:t,readOnly:a=!1,shortLabelValue:r,shortLabelPlaceholder:s,onShortLabelCommit:i,visualOptions:l})=>{const d=de(l),[o,g]=I.useState(()=>ae(e)),[c,m]=I.useState(()=>ce(r??"")),C=I.useRef(null),y=I.useRef(null),f=_.shortLabelMaxLength+_.shortLabelWidthPaddingCh,T=Math.min(Math.max(ae(c||s||"").length+_.shortLabelWidthPaddingCh,_.shortLabelMinWidthCh),f);I.useEffect(()=>{g(ae(e))},[e]),I.useEffect(()=>{m(ce(r??""))},[r]);const S=v=>{if(a){g(ae(e));return}const L=ae(v);g(L),t(L)},D=v=>{if(!i||a){m(ce(r??""));return}const L=ce(v);if(!L){const gt=ce(r??"");m(gt);return}m(L),i(L)},ne=v=>{v.stopPropagation()},dt=v=>{var L;v.key==="Enter"&&(v.preventDefault(),(L=C.current)==null||L.blur())},ut=v=>{var L;v.key==="Enter"&&(v.preventDefault(),(L=y.current)==null||L.blur())},ct={...d.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},mt={...d.titleTextStyle,borderRadius:_.borderRadiusRem,flex:"0 1 auto",width:`${T}ch`,minWidth:`${_.shortLabelMinWidthCh}ch`,maxWidth:`min(${f}ch, 100%)`,fieldSizing:"content"};return u.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:ne,onClick:ne,children:[u.jsx("input",{ref:C,type:"text",value:o,placeholder:n,readOnly:a,"aria-readonly":a,className:d.titleInputClassName,style:ct,onMouseDown:ne,onClick:ne,onChange:v=>g(v.target.value),onBlur:v=>S(v.target.value),onKeyDown:dt}),i?u.jsx("input",{ref:y,type:"text",value:c,placeholder:s,readOnly:a,"aria-readonly":a,maxLength:_.shortLabelMaxLength,className:d.shortLabelInputClassName,style:mt,onMouseDown:ne,onClick:ne,onChange:v=>m(rr(v.target.value)),onBlur:v=>D(v.target.value),onKeyDown:ut}):null]})};ir.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  actionIconFontSize: string;
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
  actionIconFontSize: string;
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
}>`},description:""}}};const or={AUTHORING:"authoring",EXTERNAL:"external"},Di={RELATIVE:"relative",ABSOLUTE:"absolute"},Vn=e=>new Set(e.filter(n=>n.annotationRole===or.EXTERNAL||n.readOnly||n.locked).flatMap(n=>n.nodeIds)),Me=e=>e.reduce((n,t)=>{const a=t.match(/(\d+)$/),r=a?Number(a[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),zi=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),K=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),a=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(l=>t.has(l))))})).filter(i=>i.nodeIds.length>0),r=new Set(a.flatMap(i=>i.nodeIds)),s=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...a,...s]},vn=6378137,sr=.1,_e=e=>e*Math.PI/180,lr=(e,n)=>{const t=_e(n.latitude-e.latitude),a=_e(n.longitude-e.longitude),r=_e((e.latitude+n.latitude)/2),s=a*Math.cos(r)*vn,i=t*vn,l=n.altitude-e.altitude;return Math.hypot(s,i,l)},dr=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,ur=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:a,linkToNodeId:r})=>{const s=e.find(y=>y.id===t)??null,i=Array.from(new Set(a.filter(Boolean)));if(!s||i.length===0)return[...n];const l=new Set(i),d=n.find(y=>y.nodeIds.includes(t))??null,o=dr(r),g=o&&!l.has(o)?n.find(y=>y.nodeIds.includes(o))??null:null;return g!==null&&!g.nodeIds.some(y=>l.has(y))?K({nodes:e,nodeLinks:n.map(y=>y.id===g.id?{...y,nodeIds:Array.from(new Set([...y.nodeIds,...i]))}:{...y,nodeIds:y.nodeIds.filter(f=>!l.has(f))})}):!d||i.length===d.nodeIds.length?[...n]:e.filter(y=>d.nodeIds.includes(y.id)&&!l.has(y.id)).some(y=>lr(y.coordinate,s.coordinate)>sr)?K({nodes:e,nodeLinks:n.map(y=>y.id===d.id?{...y,nodeIds:y.nodeIds.filter(f=>!l.has(f))}:{...y})}):[...n]},cr=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:a,selectedAnnotationIds:r=[],preferredMovedNodeIds:s})=>{const i=n.find(f=>f.id===e)??null;if(!i)return{targetNode:null,targetLinkedNodeGroup:null,movedNodeIds:[]};const l=t.find(f=>f.nodeIds.includes(e))??null,d=(l==null?void 0:l.nodeIds)??[e],o=Array.from(new Set((s??[]).filter(f=>d.includes(f)))),g=new Set(r.filter(Boolean)),c=new Set(a.filter(f=>g.has(f.id)).flatMap(f=>f.nodeIds)),m=d.filter(f=>c.has(f)),C=o.length>0?o:m.length>0?m:[...d],y=Vn(a);return{targetNode:i,targetLinkedNodeGroup:l,movedNodeIds:C.filter(f=>!y.has(f))}},mr=(e={})=>{const{initialToolType:n=ua,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},gr=({nodeIds:e,closed:n,nextEdgeNumericSuffix:t})=>{const a=[];let r=t;for(let l=0;l<e.length-1;l+=1){const d=e[l],o=e[l+1];!d||!o||(r+=1,a.push({id:`edge-${r}`,startNodeId:d,endNodeId:o}))}const s=e[0],i=e[e.length-1];return n&&e.length>=3&&s&&i&&(r+=1,a.push({id:`edge-${r}`,startNodeId:i,endNodeId:s})),a},yr=Ut({name:"annotationsRuntime",initialState:mr(),reducers:{replaceState:(e,n)=>n.payload,setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},setNextShortLabelCounterByToolType:(e,n)=>{e.settingsState.nextShortLabelCounterByToolType={...e.settingsState.nextShortLabelCounterByToolType,[n.payload.toolType]:Math.max(1,n.payload.nextCounter)}},setSelectedAnnotationId:(e,n)=>{const t=n.payload,a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t?[t]:[],e.infoBoxState.activeAnnotationId=t},setSelectedAnnotationIds:(e,n)=>{const t=Array.from(new Set(n.payload.filter(Boolean))),a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t,e.infoBoxState.activeAnnotationId=t[t.length-1]??null},appendAnnotationEntities:(e,n)=>{if(e.nodes.push(...n.payload.nodes),n.payload.linkedNodeGroups.forEach(t=>{const a=e.linkedNodeGroups.find(r=>r.id===t.id);if(!a){e.linkedNodeGroups.push({id:t.id,nodeIds:[...t.nodeIds]});return}a.nodeIds=Array.from(new Set([...a.nodeIds,...t.nodeIds]))}),e.edges.push(...n.payload.edges),e.annotationEntries.push({...n.payload.annotationEntry,nodeIds:[...n.payload.annotationEntry.nodeIds],edgeIds:[...n.payload.annotationEntry.edgeIds]}),e.linkedNodeGroups=K({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),n.payload.selectAnnotationId!==void 0){const t=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=t,e.selectionState.selectedAnnotationIds=n.payload.selectAnnotationId?[n.payload.selectAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.selectAnnotationId??null}},removeAnnotationById:(e,n)=>{const{annotationId:t,nextSelectedAnnotationId:a}=n.payload,r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(o=>o.id===t))return;e.annotationEntries=e.annotationEntries.filter(o=>o.id!==t);const i=new Set(e.annotationEntries.flatMap(o=>o.nodeIds)),l=new Set(e.annotationEntries.flatMap(o=>o.edgeIds));if(e.nodes=e.nodes.filter(o=>i.has(o.id)),e.linkedNodeGroups=K({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(o=>l.has(o.id)),e.selectionState.previousSelectedAnnotationId=r,e.settingsState.elevationReferenceAnnotationId===t&&(e.settingsState.elevationReferenceAnnotationId=null),a!==void 0){e.selectionState.selectedAnnotationIds=a?[a]:[],e.infoBoxState.activeAnnotationId=a??null;return}const d=e.selectionState.selectedAnnotationIds.filter(o=>o!==t);e.selectionState.selectedAnnotationIds=d,e.infoBoxState.activeAnnotationId=d[d.length-1]??null},removeAnnotationsByIds:(e,n)=>{const t=new Set(n.payload.annotationIds);if(t.size===0)return;const a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(d=>t.has(d.id)))return;e.annotationEntries=e.annotationEntries.filter(d=>!t.has(d.id));const s=new Set(e.annotationEntries.flatMap(d=>d.nodeIds)),i=new Set(e.annotationEntries.flatMap(d=>d.edgeIds));if(e.nodes=e.nodes.filter(d=>s.has(d.id)),e.linkedNodeGroups=K({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(d=>i.has(d.id)),e.selectionState.previousSelectedAnnotationId=a,e.settingsState.elevationReferenceAnnotationId&&t.has(e.settingsState.elevationReferenceAnnotationId)&&(e.settingsState.elevationReferenceAnnotationId=null),n.payload.nextSelectedAnnotationId!==void 0){e.selectionState.selectedAnnotationIds=n.payload.nextSelectedAnnotationId?[n.payload.nextSelectedAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.nextSelectedAnnotationId??null;return}const l=e.selectionState.selectedAnnotationIds.filter(d=>!t.has(d));e.selectionState.selectedAnnotationIds=l,e.infoBoxState.activeAnnotationId=l[l.length-1]??null},updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:a,selectedAnnotationIds:r=[],movedNodeIds:s,linkToNodeId:i}=n.payload,{targetNode:l,movedNodeIds:d}=cr({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedAnnotationIds:r,preferredMovedNodeIds:s});if(!l)return;const o=new Set(d);if(d.length===0)return;const g=Vn(e.annotationEntries),c=i&&!g.has(i)?i:null;e.nodes.forEach(m=>{o.has(m.id)&&(m.coordinate=a)}),e.linkedNodeGroups=ur({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:l.id,movedNodeIds:d,linkToNodeId:c})},insertNodeIntoMeasurementEdge:(e,n)=>{const{annotationId:t,startNodeId:a,endNodeId:r,coordinate:s}=n.payload,i=e.annotationEntries.find(S=>S.id===t);if(!i)return;const l=i.nodeIds.findIndex((S,D)=>S===a&&i.nodeIds[D+1]===r),d=l>=0?l+1:i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===a&&i.nodeIds[0]===r?i.nodeIds.length:-1;if(d<0)return;const o=new Map(e.edges.map(S=>[S.id,S])),g=i.edgeIds.findIndex(S=>{const D=o.get(S);return(D==null?void 0:D.startNodeId)===a&&D.endNodeId===r}),c=g>=0?i.edgeIds[g]:null,m=c?o.get(c):void 0;if(!m||g<0)return;const C=`node-${Me(e.nodes.map(S=>S.id))+1}`,y=`edge-${Me(e.edges.map(S=>S.id))+1}`;e.nodes.push({id:C,coordinate:s}),e.linkedNodeGroups=K({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:C,nodeIds:[C]}]}),m.endNodeId=C;const f={id:y,startNodeId:C,endNodeId:r},T=e.edges.findIndex(S=>S.id===c);T>=0?e.edges.splice(T+1,0,f):e.edges.push(f),i.nodeIds=[...i.nodeIds.slice(0,d),C,...i.nodeIds.slice(d)],i.edgeIds=[...i.edgeIds.slice(0,g+1),y,...i.edgeIds.slice(g+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:a}=n.payload,r=e.annotationEntries.find(o=>o.id===t);if(!r||!r.nodeIds.includes(a))return;const s=r.nodeIds.filter(o=>o!==a);if(s.length===r.nodeIds.length)return;const i=new Set(r.edgeIds),l=gr({nodeIds:s,closed:!!r.closed,nextEdgeNumericSuffix:Me(e.edges.map(o=>o.id))});r.nodeIds=s,r.edgeIds=l.map(o=>o.id),e.edges=[...e.edges.filter(o=>!i.has(o.id)),...l];const d=new Set(e.annotationEntries.flatMap(o=>o.nodeIds));e.nodes=e.nodes.filter(o=>d.has(o.id)),e.linkedNodeGroups=K({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:a,shortLabel:r,hidden:s,locked:i,annotationRole:l,readOnly:d,labelAppearance:o,elevationDisplayMode:g,distanceAnchorCoordinateSelection:c,distanceTriangleAnchorCoordinateRole:m}=n.payload,C=e.annotationEntries.find(y=>y.id===t);C&&(a!==void 0&&(C.displayName=a),r!==void 0&&(C.shortLabel=r),s!==void 0&&(C.hidden=s),i!==void 0&&(C.locked=i),l!==void 0&&(C.annotationRole=l),d!==void 0&&(C.readOnly=d),o!==void 0&&(C.labelAppearance={...C.labelAppearance??{},...o}),g!==void 0&&(C.elevationDisplayMode=g),c!==void 0&&(C.distanceAnchorCoordinateSelection=c),m!==void 0&&(C.distanceTriangleAnchorCoordinateRole=m))}}}),{appendAnnotationEntities:Hi,removeAnnotationById:ji,removeAnnotationsByIds:$i,removeNodeFromAnnotation:Wi,setElevationReferenceAnnotationId:Vi,setNextShortLabelCounterByToolType:Gi,setPointTemporaryMode:Ui,insertNodeIntoMeasurementEdge:Xi,updateNodeCoordinateById:Yi,updateAnnotationEntryById:Ki,replaceState:Zi,setAnnotationToolType:Ji,setSelectedAnnotationId:Qi,setSelectedAnnotationIds:eo}=yr.actions,nn=I.createContext(null);Xt(nn);const pr=Yt(nn);Kt(nn);const no=()=>pr(),Ze=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8"}),Cr=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,fr=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},to=(e,n=Ze)=>({strokeWidthPx:Cr(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:fr(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern)}),hn=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),x={colors:{neutral:ve(1),accent:ve(1),preview:ve(hn.previewAlpha),surface:Pt(hn.surfaceAlpha),transparent:"transparent",components:{direct:Oe(k.DIRECT),vertical:Oe(k.VERTICAL),horizontal:Oe(k.HORIZONTAL)},componentLabelAccents:{direct:qe(k.DIRECT),vertical:qe(k.VERTICAL),horizontal:qe(k.HORIZONTAL)}},sizes:{edgeStrokeWidth:Ze.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:Ze.overlayDashPattern}},Gn=Object.freeze({edge:Object.freeze({stroke:x.colors.accent,strokeWidth:x.sizes.edgeStrokeWidth,overlayDashPattern:x.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:x.sizes.pointPixelSize,fill:x.colors.transparent,outline:x.colors.surface,outlineWidth:x.sizes.pointOutlineWidth})}),Un=Object.freeze({edge:Object.freeze({stroke:x.colors.neutral}),point:Object.freeze({outline:x.colors.neutral})}),Nr=(e,n={})=>({...e,...n}),br=(e,n={})=>({...e,...n}),ao=e=>Nr(e,Un.edge),ro=e=>br(e,Un.point),In=ya(),se=Object.freeze({style:Object.freeze({DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"}),label:Object.freeze({textColor:In}),selection:Object.freeze({highlightPalette:Object.freeze({backgroundColor:yn("background"),hoverBackgroundColor:yn("hoverBackground"),textColor:In,glowColor:ve(1),glowRadiusPx:5,preserveFillOnSelection:!0})}),lineLabel:Object.freeze({backgroundStyle:Object.freeze({SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"})})}),xr=X.fontSizePx.pointLabel,Sr=e=>`${e/xr}rem`,ie=Object.freeze({fontFamily:X.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:Sr(X.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:X.fontWeight.medium,badgeFontWeight:X.fontWeight.medium,headingFontWeight:X.fontWeight.semibold,sectionTitleFontWeight:X.fontWeight.semibold}),vr={NONE:"none",MOVE_ON_LINE:"move-on-line"},q=Object.freeze({appearance:Object.freeze({themeStyle:se.style.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:ie.fontFamily,fontWeight:ie.lineLabelFontWeight}),background:Object.freeze({style:se.lineLabel.backgroundStyle.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:vr.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),tn=Object.freeze({verticalFlippedBaselineOffsetPx:0,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5}),an=e=>{var n,t;return{appearance:{...q.appearance,...e==null?void 0:e.appearance},text:{...q.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&q.text.echo===void 0?void 0:{...q.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...q.background,...e==null?void 0:e.background},surface:{...q.surface,...e==null?void 0:e.surface},layout:{...q.layout,...e==null?void 0:e.layout},collision:{...q.collision,...e==null?void 0:e.collision}}},ye=Object.freeze({lineStrokeWidthPx:x.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:9,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,directLineColor:x.colors.components.direct,verticalLineColor:x.colors.components.vertical,horizontalLineColor:x.colors.components.horizontal,draftChainColor:x.colors.preview}),me=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),Se=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),hr=Object.freeze({fontSize:"20px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:12,textEchoShadow:"0 0 4px rgba(2, 6, 23, 0.8), 0 0 12px rgba(2, 6, 23, 0.77), 0 0 24px rgba(2, 6, 23, 0.64)"}),Ir=Object.freeze({[se.style.BRIGHT_ON_DARK]:"15, 23, 42",[se.style.DARK_ON_BRIGHT]:"255, 255, 255"}),ge=(e,n)=>{const t=document.createElement(e);return t.className=n,t},U=({element:e,value:n,property:t,unit:a,min:r,max:s})=>{if(typeof n!="number"||!Number.isFinite(n))return;const i=r===void 0?n:Math.max(n,r),l=s===void 0?i:Math.min(i,s);e.style.setProperty(t,`${l}${a??""}`)},Tr=({element:e,backdrop:n,surface:t,accentColor:a,visualOptions:r=q})=>{var i,l,d,o,g,c,m,C,y,f,T,S;e.style.setProperty("--carma-annotation-text-overlay-font-family",r.text.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(r.text.fontWeight)),a&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",a),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=r.background.style,typeof r.background.surfaceAlpha=="number"&&Number.isFinite(r.background.surfaceAlpha)&&!((i=r.background.color)!=null&&i.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${Ir[r.appearance.themeStyle]}, ${Math.min(Math.max(r.background.surfaceAlpha,0),1)})`);const s=r.background.showBackdrop!==!1;n.style.display=s?"block":"none",t.style.display=s?"block":"none",(l=r.text.color)!=null&&l.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-color",r.text.color),(d=r.text.blendMode)!=null&&d.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-blend-mode",r.text.blendMode),(o=r.background.color)!=null&&o.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",r.background.color),(g=r.background.blendMode)!=null&&g.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-blend-mode",r.background.blendMode),(c=r.surface.blendMode)!=null&&c.trim()&&e.style.setProperty("--carma-annotation-text-overlay-surface-blend-mode",r.surface.blendMode),(C=(m=r.text.echo)==null?void 0:m.color)!=null&&C.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-color",r.text.echo.color),(f=(y=r.text.echo)==null?void 0:y.blendMode)!=null&&f.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blend-mode",r.text.echo.blendMode),U({element:e,value:(T=r.text.echo)==null?void 0:T.blurPx,property:"--carma-annotation-text-overlay-text-echo-blur-px",unit:"px",min:0}),U({element:e,value:(S=r.text.echo)==null?void 0:S.opacity,property:"--carma-annotation-text-overlay-text-echo-opacity",min:0,max:1}),U({element:e,value:r.background.blurPx,property:"--carma-annotation-text-overlay-surface-blur-px",unit:"px",min:0}),U({element:e,value:r.background.brightnessPct,property:"--carma-annotation-text-overlay-surface-brightness-pct",unit:"%",min:0}),U({element:e,value:r.background.saturatePct,property:"--carma-annotation-text-overlay-surface-saturate-pct",unit:"%",min:0}),U({element:e,value:r.background.radiusEx,property:"--carma-annotation-text-overlay-backdrop-radius",unit:"ex",min:0}),U({element:e,value:r.background.edgeBlurPx,property:"--carma-annotation-text-overlay-surface-edge-blur-px",unit:"px",min:0}),(typeof r.surface.paddingBlockEx=="number"||typeof r.surface.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${typeof r.surface.paddingBlockEx=="number"&&Number.isFinite(r.surface.paddingBlockEx)?Math.max(r.surface.paddingBlockEx,0):Se.paddingBlockEx}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${typeof r.surface.paddingInlineEx=="number"&&Number.isFinite(r.surface.paddingInlineEx)?Math.max(r.surface.paddingInlineEx,0):Se.paddingInlineEx}ex`)),(typeof r.background.insetBlockEx=="number"||typeof r.background.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${typeof r.background.insetBlockEx=="number"&&Number.isFinite(r.background.insetBlockEx)?r.background.insetBlockEx:Se.backdropInsetBlockEx}ex ${typeof r.background.insetInlineEx=="number"&&Number.isFinite(r.background.insetInlineEx)?r.background.insetInlineEx:Se.backdropInsetInlineEx}ex`)},Ar=(e,n)=>{n&&(n.fontSize&&e.style.setProperty("--carma-annotation-text-overlay-font-size",n.fontSize),n.fontWeight!==void 0&&e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(n.fontWeight)),n.letterSpacing&&e.style.setProperty("--carma-annotation-text-overlay-letter-spacing",n.letterSpacing),typeof n.textEchoBlurPx=="number"&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blur-px",`${n.textEchoBlurPx}px`),n.textEchoShadow&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-shadow",n.textEchoShadow))},Xn=({accentColor:e,visualOptions:n,styleOptions:t})=>{const a=ge("div",me.root),r=ge("div",me.backdrop),s=ge("div",me.surface),i=ge("div",me.textEcho),l=ge("div",me.text);return i.dataset.annotationTextOverlayTextEcho="true",l.dataset.annotationTextOverlayText="foreground",Tr({element:a,backdrop:r,surface:s,textEcho:i,text:l,accentColor:e,visualOptions:n}),Ar(a,t),a.append(r,s,i,l),a},kr=e=>e.querySelector('[data-annotation-text-overlay-text="foreground"]'),Er=e=>e.querySelector('[data-annotation-text-overlay-text-echo="true"]'),Yn=(e,n)=>{const t=kr(e),a=Er(e);t&&t.textContent!==n&&(t.textContent=n),a&&a.textContent!==n&&(a.textContent=n)},ke=(e,n)=>{Object.assign(e.style,n)},Tn=Object.freeze({className:"carma-annotation-overlay-line-label",frameClassName:"carma-annotation-overlay-line-label__frame"}),Lr=Object.freeze({direct:{labelOffsetPx:ye.lineLabelOffsetPx},vertical:{labelOffsetPx:ye.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:tn.verticalFlippedBaselineOffsetPx,labelRotationMode:Bt.CLOCKWISE},horizontal:{labelOffsetPx:ye.lineLabelOffsetPx}}),An=(e,n)=>{const t=document.createElement(e);return t.className=n,t},Rr=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:q.layout.shortEdgeOffsetPx},Kn=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",Pr=e=>Kn(e)==="vertical",Or=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...Lr[e],anchorRatio:t===void 0?void 0:_t(t),getLabelOutsideReferencePoint:n?()=>({x:n.x,y:n.y}):void 0}),qr=({x:e,y:n,angleRad:t,anchor:a})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${a==="left"?"translate(0%, -50%)":a==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,Br=(e,n,t=aa.LABEL)=>{const a=la(e,t);if(!a)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",ke(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),a.appendChild(r),r},io=Br,Mr=e=>{e==null||e.remove()},oo=Mr,so=e=>{const n=new $t,t=n.update.bind(n);return n.update=a=>{if(!(a.passes.pick&&!a.passes.render))return t(a)},e.primitives.add(n),n},lo=(e,n)=>{if(!(!n||!Zt(e)))try{if(typeof n.isDestroyed=="function"&&n.isDestroyed())return;e.primitives.remove(n)}catch{}},Zn=e=>Wt.fromType("Color",{color:un.fromCssColorString(e)??un.WHITE}),uo=(e,n,t,a)=>({polyline:e.add({id:n,positions:[p.ZERO,p.ZERO],width:(a==null?void 0:a.width)??ye.lineStrokeWidthPx,material:Zn(t),show:!1}),colorCss:t}),co=(e,n)=>{e.colorCss!==n&&(e.polyline.material=Zn(n),e.colorCss=n)},mo=e=>{e.polyline.show=!1},go=(e,n)=>{e.polyline.positions=[...n],e.polyline.show=n.length>=2},we=(e,n)=>{const t=an(n),a=An("div",Tn.className),r=An("div",Tn.frameClassName),s=Xn({accentColor:e,visualOptions:t});return a.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(s),a.appendChild(r),a},yo=e=>{const n=an(e),t=we(x.colors.componentLabelAccents.direct,n);t.dataset.annotationOverlayLineLabelKind="direct";const a=we(x.colors.componentLabelAccents.vertical,n);a.dataset.annotationOverlayLineLabelKind="vertical";const r=we(x.colors.componentLabelAccents.horizontal,n);return r.dataset.annotationOverlayLineLabelKind="horizontal",{direct:t,vertical:a,horizontal:r}},kn=(e,n)=>{if(!(n!=null&&n.screenPosition)){e.style.display="none";return}Yn(e,n.text),e.style.display="inline-grid",e.style.transform=`translate(${Math.round(n.screenPosition.x)}px, ${Math.round(n.screenPosition.y)}px) translate(-50%, -50%)`},po=({overlayLayer:e,accentColor:n,visualOptions:t})=>{const a=Xn({accentColor:n,visualOptions:an(t),styleOptions:hr});return a.dataset.annotationOverlayLineLabelKind="area",ke(a,{position:"absolute",left:"0",top:"0",display:"none",willChange:"transform"}),e==null||e.appendChild(a),{setState:r=>kn(a,r),clear:()=>kn(a,null),destroy:()=>a.remove()}},Co=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},Jn=(e,n)=>{ke(e,{width:`${n.pixelSize}px`,height:`${n.pixelSize}px`,border:`${n.outlineWidth}px solid ${n.outline}`,background:n.fill})},_r=(e=Gn.point)=>{const n=document.createElement("div");return ke(n,{position:"absolute",left:"0",top:"0",display:"none",borderRadius:"999px",transform:"translate(-50%, -50%)",boxSizing:"border-box",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",willChange:"transform"}),Jn(n,e),n},wr=({overlayLayer:e,pointMarkers:n,count:t,style:a})=>{for(;n.length<t;){const r=_r(a);n.push(r),e.appendChild(r)}},fo=e=>{e.forEach(n=>{n.style.display="none"})},No=({scene:e,overlayLayer:n,pointMarkers:t,coordinates:a,style:r=Gn.point})=>{wr({overlayLayer:n,pointMarkers:t,count:a.length,style:r}),a.forEach((s,i)=>{const l=t[i];if(!l)return;Jn(l,r);const d=Jt.worldToWindowCoordinates(e,We(s));if(!Vt(d)){l.style.display="none";return}l.style.display="block",l.style.transform=`translate(${Math.round(d.x)}px, ${Math.round(d.y)}px) translate(-50%, -50%)`}),t.slice(a.length).forEach(s=>{s.style.display="none"})},Fr=e=>_n(e>J||e<-J?e+Ce:e),Dr=e=>{let n=_n(e);return n>J?n=n-Ce:n<-J&&(n=n+Ce),n},zr=({angleRad:e,lineSide:n})=>Math.abs(Math.abs(e)-J)>tn.verticalBaselineAngleEpsilonRad?e:n==="left"?J:-J,Hr=({deltaX:e,deltaY:n,lineSide:t,flipReadingDirection:a,forceHorizontal:r})=>{if(r)return 0;const s=Fr(Math.atan2(n,e)),i=a?s>=0?s-Ce:s+Ce:s;return zr({angleRad:Dr(i),lineSide:t})},jr=({start:e,end:n,kind:t,outsideReferencePoint:a,shortEdgeOffsetPx:r=q.layout.shortEdgeOffsetPx,useShortEdgeRules:s=!0,flipReadingDirection:i=!1,previousShouldFlip:l=!1,anchorRatio:d})=>{const o=Mt({svgLine:{start:{x:e.x,y:e.y},end:{x:n.x,y:n.y}},options:Or({kind:t,outsideReferencePoint:a,anchorRatio:d}),previousShouldFlip:l,sideSwitchThresholdPx:tn.sideHysteresisPx});if(!o)return null;const g=n.x-e.x,c=n.y-e.y;if(s&&o.lineLengthPx<ye.lineLabelMinLengthPx){const m=o.normalX>=0,C=m?"left":"right";return{x:o.midX+o.normalX*r,y:o.midY+o.normalY*r,angleRad:Hr({deltaX:g,deltaY:c,lineSide:C,flipReadingDirection:i,forceHorizontal:!0}),anchor:m?"left":"right",anchorRatio:o.anchorRatio,isShortEdge:!0,shouldFlip:o.shouldFlip,normalX:o.normalX,normalY:o.normalY}}return{x:o.textX,y:o.textY,angleRad:o.angleRad,anchor:"center",anchorRatio:o.anchorRatio,isShortEdge:!1,shouldFlip:o.shouldFlip,normalX:o.normalX,normalY:o.normalY}},bo=({element:e,text:n,start:t,end:a,outsideReferencePoint:r,flipReadingDirection:s=!1,anchorRatio:i})=>{const l=jr({start:t,end:a,kind:Kn(e),outsideReferencePoint:r,shortEdgeOffsetPx:Rr(e),useShortEdgeRules:Pr(e),flipReadingDirection:s,anchorRatio:i,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!l){e.style.display="none";return}Yn(e,n),e.style.display="block",e.dataset.annotationOverlayLineLabelShortEdge=l.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${l.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=l.shouldFlip?"1":"0",e.style.transform=qr(l)},xo=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),So=()=>({cartographicA:new $e,cartographicB:new $e,auxiliaryPoint:new p,auxiliaryScreen:new Gt}),vo=({scene:e,anchorPointECEF:n,targetPointECEF:t,scratch:a})=>{const r=e.globe.ellipsoid,s=r.cartesianToCartographic(n,a.cartographicA),i=r.cartesianToCartographic(t,a.cartographicB);return!s||!i?null:p.fromRadians(s.longitude,s.latitude,i.height??0,r,a.auxiliaryPoint)},ho=e=>{const n=ha(e);return{longitude:n.longitude,latitude:n.latitude,altitude:Sa(n.altitude)}},Io=({firstCorner:e,oppositeCorner:n})=>{const t=We(e),a=We(n),r=zn(t,a);return r?[t,r.adjacentHorizontalCorner,a,r.adjacentVerticalCorner,t]:null},$r=Object.freeze({longPressDurationMs:320}),Wr=({interactive:e,onClick:n,onHoverChange:t,onLongPress:a,longPressDurationMs:r=$r.longPressDurationMs,markerStyle:s})=>{const[i,l]=I.useState(!1),d=I.useRef(void 0),o=I.useRef(!1),g=I.useCallback(()=>{d.current!==void 0&&(window.clearTimeout(d.current),d.current=void 0)},[]),c=I.useCallback(T=>{if(T.stopPropagation(),T.button!==0||!a){g();return}o.current=!1,g(),d.current=window.setTimeout(()=>{o.current=!0,a()},r)},[g,r,a]),m=I.useCallback(()=>{g()},[g]),C=I.useCallback(T=>{if(T.stopPropagation(),o.current){o.current=!1;return}n==null||n()},[n]),y=I.useCallback(()=>{l(!0),t==null||t(!0)},[t]),f=I.useCallback(()=>{g(),l(!1),t==null||t(!1)},[g,t]);return I.useEffect(()=>g,[g]),u.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:u.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${Mn.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:wt(),boxShadow:i?Ft():"none",filter:i?Dt():"none",...s},onClick:e?C:void 0,onMouseDown:e?c:void 0,onMouseUp:e?m:void 0,onMouseEnter:e?y:void 0,onMouseLeave:e?f:void 0})})};Wr.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const To={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},Ao={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},ko={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},Eo={GROUND:"ground",COPLANAR:"coplanar"},Vr={MIN:1,MAX:1400,LOG_SCALE:64};Object.freeze({layoutConfig:Qt(void 0),markerPixelSize:10,markerOutlineWidth:x.sizes.pointOutlineWidth,stemColor:x.colors.surface,activeMoveGizmoLabelZIndex:Vr.MAX+1});Object.freeze({...zt({markerDiameterPx:x.sizes.pointPixelSize,markerStrokeWidthPx:x.sizes.pointOutlineWidth}),tickColor:Mn.colors.surfaceStrong,minOverlayZIndex:Ht.zIndex.interactionHandleFloor});Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:ga(),straightHitTargetPx:20})});function ue(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function be(e,n){var t=Object.create(e.prototype);for(var a in n)t[a]=n[a];return t}function W(){}var ee=.7,le=1/ee,Gr=/^#([0-9a-f]{3})$/,Ur=/^#([0-9a-f]{6})$/,Xr=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Yr=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Kr=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Zr=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Jr=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Qr=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,En={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ue(W,rn,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function rn(e){var n;return e=(e+"").trim().toLowerCase(),(n=Gr.exec(e))?(n=parseInt(n[1],16),new A(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=Ur.exec(e))?Ln(parseInt(n[1],16)):(n=Xr.exec(e))?new A(n[1],n[2],n[3],1):(n=Yr.exec(e))?new A(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Kr.exec(e))?Rn(n[1],n[2],n[3],n[4]):(n=Zr.exec(e))?Rn(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Jr.exec(e))?Pn(n[1],n[2]/100,n[3]/100,1):(n=Qr.exec(e))?Pn(n[1],n[2]/100,n[3]/100,n[4]):En.hasOwnProperty(e)?Ln(En[e]):e==="transparent"?new A(NaN,NaN,NaN,0):null}function Ln(e){return new A(e>>16&255,e>>8&255,e&255,1)}function Rn(e,n,t,a){return a<=0&&(e=n=t=NaN),new A(e,n,t,a)}function on(e){return e instanceof W||(e=rn(e)),e?(e=e.rgb(),new A(e.r,e.g,e.b,e.opacity)):new A}function Qn(e,n,t,a){return arguments.length===1?on(e):new A(e,n,t,a??1)}function A(e,n,t,a){this.r=+e,this.g=+n,this.b=+t,this.opacity=+a}ue(A,Qn,be(W,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new A(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?ee:Math.pow(ee,e),new A(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function Pn(e,n,t,a){return a<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new M(e,n,t,a)}function ei(e){if(e instanceof M)return new M(e.h,e.s,e.l,e.opacity);if(e instanceof W||(e=rn(e)),!e)return new M;if(e instanceof M)return e;e=e.rgb();var n=e.r/255,t=e.g/255,a=e.b/255,r=Math.min(n,t,a),s=Math.max(n,t,a),i=NaN,l=s-r,d=(s+r)/2;return l?(n===s?i=(t-a)/l+(t<a)*6:t===s?i=(a-n)/l+2:i=(n-t)/l+4,l/=d<.5?s+r:2-s-r,i*=60):l=d>0&&d<1?0:i,new M(i,l,d,e.opacity)}function ni(e,n,t,a){return arguments.length===1?ei(e):new M(e,n,t,a??1)}function M(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}ue(M,ni,be(W,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new M(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ee:Math.pow(ee,e),new M(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,a=t+(t<.5?t:1-t)*n,r=2*t-a;return new A(Fe(e>=240?e-240:e+120,r,a),Fe(e,r,a),Fe(e<120?e+240:e-120,r,a),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function Fe(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var et=Math.PI/180,nt=180/Math.PI,Ae=18,tt=.95047,at=1,rt=1.08883,it=4/29,oe=6/29,ot=3*oe*oe,ti=oe*oe*oe;function sn(e){if(e instanceof w)return new w(e.l,e.a,e.b,e.opacity);if(e instanceof H){var n=e.h*et;return new w(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof A||(e=on(e));var t=je(e.r),a=je(e.g),r=je(e.b),s=De((.4124564*t+.3575761*a+.1804375*r)/tt),i=De((.2126729*t+.7151522*a+.072175*r)/at),l=De((.0193339*t+.119192*a+.9503041*r)/rt);return new w(116*i-16,500*(s-i),200*(i-l),e.opacity)}function ai(e,n,t,a){return arguments.length===1?sn(e):new w(e,n,t,a??1)}function w(e,n,t,a){this.l=+e,this.a=+n,this.b=+t,this.opacity=+a}ue(w,ai,be(W,{brighter:function(e){return new w(this.l+Ae*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new w(this.l-Ae*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=at*ze(e),n=tt*ze(n),t=rt*ze(t),new A(He(3.2404542*n-1.5371385*e-.4985314*t),He(-.969266*n+1.8760108*e+.041556*t),He(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function De(e){return e>ti?Math.pow(e,1/3):e/ot+it}function ze(e){return e>oe?e*e*e:ot*(e-it)}function He(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function je(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function ri(e){if(e instanceof H)return new H(e.h,e.c,e.l,e.opacity);e instanceof w||(e=sn(e));var n=Math.atan2(e.b,e.a)*nt;return new H(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function ii(e,n,t,a){return arguments.length===1?ri(e):new H(e,n,t,a??1)}function H(e,n,t,a){this.h=+e,this.c=+n,this.l=+t,this.opacity=+a}ue(H,ii,be(W,{brighter:function(e){return new H(this.h,this.c,this.l+Ae*(e??1),this.opacity)},darker:function(e){return new H(this.h,this.c,this.l-Ae*(e??1),this.opacity)},rgb:function(){return sn(this).rgb()}}));var st=-.14861,ln=1.78277,dn=-.29227,Ee=-.90649,Ne=1.97294,On=Ne*Ee,qn=Ne*ln,Bn=ln*dn-Ee*st;function oi(e){if(e instanceof Q)return new Q(e.h,e.s,e.l,e.opacity);e instanceof A||(e=on(e));var n=e.r/255,t=e.g/255,a=e.b/255,r=(Bn*a+On*n-qn*t)/(Bn+On-qn),s=a-r,i=(Ne*(t-r)-dn*s)/Ee,l=Math.sqrt(i*i+s*s)/(Ne*r*(1-r)),d=l?Math.atan2(i,s)*nt-120:NaN;return new Q(d<0?d+360:d,l,r,e.opacity)}function si(e,n,t,a){return arguments.length===1?oi(e):new Q(e,n,t,a??1)}function Q(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}ue(Q,si,be(W,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new Q(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ee:Math.pow(ee,e),new Q(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*et,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),a=Math.cos(e),r=Math.sin(e);return new A(255*(n+t*(st*a+ln*r)),255*(n+t*(dn*a+Ee*r)),255*(n+t*(Ne*a)),this.opacity)}}));const lt=Qn(h.ACCENT_MEASUREMENTS).brighter(.1);lt.opacity=.5;const li=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:lt.toString(),colorPrimary:h.ACCENT_MEASUREMENTS,lineColor:x.colors.surface,textColor:se.label.textColor}),E=Object.freeze({scheme:li,fontFamily:ie.fontFamily,contentFontWeight:ie.lineLabelFontWeight,badgeFontWeight:ie.badgeFontWeight,selection:se.selection.highlightPalette}),Lo=e=>E,Ro=Object.freeze({fontSize:ie.rootFontSizeRem,fontFamily:E.fontFamily,fontWeight:E.contentFontWeight,lineColor:E.scheme.lineColor,textBackgroundColor:E.scheme.colorPrimaryReduced,textColor:E.scheme.textColor,markerBackgroundColor:E.scheme.colorPrimary,markerTextColor:E.scheme.textColor,selectedBackgroundColor:E.selection.backgroundColor,selectedTextColor:E.selection.textColor,selectedGlowColor:E.selection.glowColor,selectedGlowRadiusPx:E.selection.glowRadiusPx,preserveFillOnSelection:E.selection.preserveFillOnSelection,hoverBackgroundColor:E.selection.hoverBackgroundColor,markerPixelSize:x.sizes.pointPixelSize,markerOutlineWidth:x.sizes.pointOutlineWidth});I.createContext(null);export{we as $,Ja as A,de as B,ar as C,ir as D,ka as E,er as F,tr as G,or as H,Br as I,Mr as J,Eo as K,aa as L,_i as M,Ao as N,io as O,oo as P,fo as Q,To as R,No as S,wi as T,to as U,ma as V,po as W,qi as X,vo as Y,So as Z,an as _,B as a,Io as a0,ho as a1,Fi as a2,Qa as a3,Nr as a4,br as a5,ao as a6,ro as a7,ko as a8,Gn as a9,ha as aa,Sa as ab,Mi as ac,E as ad,te as ae,Ri as af,Pi as ag,Oi as ah,Z as ai,zi as aj,X as ak,Ro as al,Bi as am,F as an,no as ao,Ki as ap,Vi as aq,Di as ar,pa as as,ua as at,zn as au,Qn as av,rn as aw,Wr as ax,re as b,da as c,se as d,k as e,x as f,Oe as g,bo as h,vr as i,q as j,yo as k,Co as l,ye as m,xo as n,N as o,lo as p,mo as q,Lo as r,co as s,ie as t,go as u,so as v,uo as w,Na as x,fa as y,ba as z};
