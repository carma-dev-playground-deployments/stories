import{j as f}from"./jsx-runtime-DCY474Ph.js";import{I as xr,J as br,K as Sr,F as Re,L as hr,M as vr,N as Tr,O as Ir,P as Ar,Q as kr,S as Er,o as Lr,H as Rr,T as Pr,U as Or,V as _r,W as qr,X as wr}from"./lib-Dbha7IBg.js";import{r as A,a as Yn,R as Mr}from"./index-f9CH5uyH.js";import{T as Br}from"./ua-parser-0-IaBt0J.js";import{f as tn,C as k,r as Fr}from"./index-Bwr7gTdO.js";import"./index-o4jIgCFn.js";import{n as Dr,o as zr,S as Hr,p as jr,f as $r,q as Ot,s as Wr,t as Vr,v as Ur,w as Gr,l as Xr}from"./useLineSegmentVisualizers-8bvqhvHA.js";import{C,b as xn,a5 as Yr,n as Kr,o as Zr,c as Kn,j as Jr,k as Qr}from"./custom-shaders-Df_jyG5g.js";import"./useCesiumFovWheelZoom-r0U4S9WH.js";import"./maplibre-gl-Mry-7x4X.js";import"./geodetic-BlUMYLim.js";import{n as _t}from"./angle-normalization-D3Clryc1.js";import{c as Zn,P as de,b as Pe}from"./angles-B5wuhJLI.js";import{i as ea}from"./carma-guards-DtWGPuBd.js";import{c as bn}from"./CoordinateAdapters-BYl7LSVW.js";/* empty css                                      */import{S as na}from"./Scene-Fk39SsbL.js";import{r as ta}from"./config-Dmwkjj5z.js";import"./useCesiumPointMoveGizmo-DUlL_iMH.js";import"./svgProjection-DC0AVwLB.js";const rn={de:{backspace:"Rücktaste",escape:"Esc",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Esc",shift:"Shift"}},ra=e=>e||(xr||br?"macos":Sr?"windows":"other"),aa=e=>{const n=e==null?void 0:e.split("-")[0];return n&&rn[n]?rn[n]:rn.en},ia=(e,n)=>e==="macos"?"⌫":`← ${n.backspace}`,$e={LABEL:"label",VISUALIZER:"visualizer"},oa=$e,Sn=e=>`[${e}="true"]`,Jn="data-annotation-label-overlay-root",Qn="data-annotation-visualizer-overlay-root",qt="data-annotation-visualizer-overlay-container",sa=Sn(qt),la=Object.freeze({[$e.LABEL]:{rootAttribute:Jn,containerAttribute:Dr,rootSelector:Sn(Jn),containerSelector:zr},[$e.VISUALIZER]:{rootAttribute:Qn,containerAttribute:qt,rootSelector:Sn(Qn),containerSelector:sa}}),ua=e=>la[e],da=(e,n=$e.LABEL)=>{var i,s;const{rootSelector:t,containerSelector:r}=ua(n);let a=e.canvas.parentElement,o=a;for(;a;){if(a.matches(r))return a;const u=(i=a.querySelector)==null?void 0:i.call(a,r);if(u instanceof HTMLElement)return u;if(a.matches(t))return a;const l=(s=a.querySelector)==null?void 0:s.call(a,t);if(l instanceof HTMLElement)return l;o=a,a=a.parentElement}return o},ca=da,O={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",STYLE:"style",DELETE:"delete"},D=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),M=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),h=Object.freeze({heading:k.ACCENT_MEASUREMENTS,panelSurface:k.NEUTRAL_SURFACE_SUBTLE,panelBorder:k.NEUTRAL_BORDER_SUBTLE,shadowBase:k.NEUTRAL_BLACK,bodyText:k.NEUTRAL_TEXT_PRIMARY,mutedText:k.NEUTRAL_TEXT_MUTED,linkText:k.WUPP_BLUE,fieldText:k.NEUTRAL_TEXT_STRONG,fieldBorder:k.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:k.NEUTRAL_BORDER_INPUT,fieldFocusBackground:k.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:k.STATE_FOCUS_OUTLINE,titleText:k.NEUTRAL_TEXT_STRONG}),an=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),ma=Object.freeze({defaultPixelWidth:430,headingColor:h.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:tn(h.panelSurface,an.panelSurface),border:`${M.hairlineBorderWidthRem} solid ${tn(h.panelBorder,an.panelBorder)}`,boxShadow:`${tn(h.shadowBase,an.panelInsetShadow)} 0 ${M.panelInsetShadowYOffsetRem} ${M.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${M.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${M.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${D.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:k.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${D.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:k.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${D.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,readOnly:!1,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:D.rootFontSizeRem,lineHeight:1.4,color:h.bodyText},bodyTextClassName:`text-[${D.rootFontSizeRem}] leading-[1.4] text-[${h.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${h.mutedText}]`,linkTextClassName:`text-[${h.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:k.ACCENT_NEUTRALS,actionIconHoverColor:k.ACCENT_NEUTRALS_HOVER,actionIconFontSize:null,hiddenActionIds:[],fieldTextClassName:`text-[${h.fieldText}]`,fieldBorderClassName:`border-[${M.hairlineBorderWidthRem}] border-[${h.fieldBorder}]`,fieldInputBorderClassName:`border-[${M.hairlineBorderWidthRem}] border-[${h.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${h.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${h.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:D.headingFontSizeRem,fontWeight:D.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${h.titleText}]/80 ${D.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${M.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${h.titleText}]/80 placeholder:text-[${h.titleText}]/50 focus:bg-[${h.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${h.fieldFocusOutline}] ${D.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${M.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${h.fieldBorder}] bg-white/85 text-[${h.titleText}]/80 placeholder:text-[${h.titleText}]/80 focus:bg-[${h.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${h.fieldFocusOutline}] ${D.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:D.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${M.hairlineBorderWidthRem}] border-[${h.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${M.hairlineBorderWidthRem}] border-[${h.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${M.hairlineBorderWidthRem}] border-[${h.fieldInputBorder}] px-2 py-1`}),Te=e=>({...ma,...e}),b={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},ga="select",xs="planar-biggest-triangle",bs="planar-pca",Ss="planar-trapezoid",wt=e=>e===b.AREA_GROUND||e===b.AREA_VERTICAL||e===b.AREA_PLANAR,ya=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},hn=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[b.AREA_VERTICAL]:[112,168,255],[b.AREA_GROUND]:[107,188,123],[b.AREA_PLANAR]:[239,223,145]}}),Mt=([e,n,t],r)=>`rgba(${e}, ${n}, ${t}, ${r})`,qn=e=>hn.rgb255ByType[e],hs=(e,n)=>Mt(qn(e),n?hn.selectedFillAlpha:hn.fillAlpha),fa=(e,n)=>Mt(qn(e),n),P={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},K=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},labelTextRgb255:[248,250,252],shortLabelRgb255ByType:{[b.POINT]:[200,200,200],[b.DISTANCE]:[102,126,234],[b.POLYLINE]:[226,178,60],[b.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[P.DIRECT]:[255,255,255],[P.VERTICAL]:[111,168,255],[P.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),ee=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[b.POINT]:.92,[b.DISTANCE]:.95,[b.POLYLINE]:.95,[b.LABEL]:.95,area:.95},lineComponentByKind:{[P.DIRECT]:1,[P.VERTICAL]:.96,[P.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[P.DIRECT]:.34,[P.VERTICAL]:.54,[P.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),ne=([e,n,t],r)=>`rgba(${e}, ${n}, ${t}, ${r})`,re=(e,n=ee.alpha.text[e])=>ne(K.textRgb255[e],n),He=(e=ee.alpha.surfaceStroke)=>ne(K.surfaceRgb255.stroke,e),pa=(e=ee.alpha.surfaceStroke)=>ne(K.surfaceRgb255.accent,e),on=(e,n=ee.alpha.lineComponentByKind[e])=>ne(K.lineComponentRgb255ByKind[e],n),sn=(e,n=ee.alpha.lineComponentLabelAccentByKind[e])=>ne(K.lineComponentRgb255ByKind[e],n),ae=e=>wt(e)?fa(e,ee.alpha.shortLabelBackgroundByType.area):ne(K.shortLabelRgb255ByType[e],ee.alpha.shortLabelBackgroundByType[e]),vs=e=>wt(e)?qn(e):K.shortLabelRgb255ByType[e],et=(e,n=ee.alpha.selection[e])=>ne(K.selectionRgb255[e],n),Ca=(e=1)=>ne(K.labelTextRgb255,e),oe=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),Z={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},Na={[b.POINT]:{prefix:"",counterStyle:Z.NUMERIC,backgroundColor:ae(b.POINT),textColor:re("dark")},[b.DISTANCE]:{prefix:"",counterStyle:Z.ALPHABETIC,backgroundColor:ae(b.DISTANCE),textColor:re("light")},[b.POLYLINE]:{prefix:"L",counterStyle:Z.NUMERIC,backgroundColor:ae(b.POLYLINE),textColor:re("dark")},[b.AREA_GROUND]:{prefix:"A",counterStyle:Z.NUMERIC,backgroundColor:ae(b.AREA_GROUND),textColor:re("light")},[b.AREA_PLANAR]:{prefix:"D",counterStyle:Z.NUMERIC,backgroundColor:ae(b.AREA_PLANAR),textColor:re("light")},[b.AREA_VERTICAL]:{prefix:"F",counterStyle:Z.NUMERIC,backgroundColor:ae(b.AREA_VERTICAL),textColor:re("light")},[b.LABEL]:{prefix:"T",counterStyle:Z.NUMERIC,backgroundColor:ae(b.LABEL),textColor:re("light")}},Ts=(e,n,t=Na)=>{const r=t[e],a=Number.isFinite(n)&&n>0?Math.floor(n):1,o=r.counterStyle===Z.ALPHABETIC?ya(a-1):`${a}`;return`${r.prefix}${o}`},wn=1e-12,xa=1e-6,Is=(e,n)=>e.map(t=>C.add(t,n,new C)),ba=(e,n,t=new C)=>{const r=C.magnitudeSquared(n);if(r<=wn)return C.clone(e,t);const a=C.dot(e,n)/r;return C.subtract(e,C.multiplyByScalar(n,a,new C),t)},Sa=(e,n,t,r=new C)=>{const a=C.magnitudeSquared(t);if(a<=wn)return C.clone(e,r);const o=C.subtract(e,n,new C),i=C.dot(o,t)/a;return C.subtract(e,C.multiplyByScalar(t,i,new C),r)},As=(e,n,t)=>{const r=C.magnitude(t);if(r<=xa)return 0;const a=C.subtract(e,n,new C);return C.dot(a,t)/r},ha=(e,n,t,r=new C)=>{const a=C.subtract(n,e,new C),o=C.subtract(t,e,new C),i=C.cross(a,o,r);return C.magnitudeSquared(i)<=wn?null:C.normalize(i,r)},va=0,Ta=e=>e??va,Ia=e=>({longitude:Zn(e.longitude),latitude:Zn(e.latitude),altitude:e.height}),Aa=e=>{const n=xn.fromCartesian(e);return Ia(n)},nt=Object.freeze({componentEpsilonMeters:.05}),ka=(e,n,t)=>{const r=ha(e,n,t);return r?{anchorECEF:C.clone(e),normalECEF:r}:null},tt=(e,n)=>Sa(e,n.anchorECEF,n.normalECEF),Bt=(e,n)=>{const t=Yr(e),r=C.subtract(n,e,new C),a=C.dot(r,t),o=C.multiplyByScalar(t,a,new C),i=ba(r,t),s=C.magnitude(i),u=Math.abs(a);if(s<nt.componentEpsilonMeters||u<nt.componentEpsilonMeters)return null;const l=C.add(e,i,new C),d=C.add(e,o,new C),m=C.add(e,t,new C),c=ka(e,m,l);return{adjacentHorizontalCorner:c?tt(l,c):l,adjacentVerticalCorner:c?tt(d,c):d}},ks=(e,n)=>{const t=Bt(e,n);if(!t)return 0;const r=C.distance(e,t.adjacentHorizontalCorner),a=C.distance(e,t.adjacentVerticalCorner);return r*a},rt=Object.freeze({tooltipZIndex:1700,triggerClassName:"inline-flex items-center text-[16px] leading-none"}),J=({actionId:e,title:n,icon:t,onClick:r,dataTestId:a,className:o,ariaLabel:i,disabled:s=!1,visualOptions:u})=>{var g;const l=Te(u),[d,m]=A.useState(!1),c=`${l.actionIconClassName}${o?` ${o}`:""}${s?" cursor-not-allowed opacity-50":" cursor-pointer"}`,p={color:d&&!s?l.actionIconHoverColor:l.actionIconColor};l.actionIconFontSize!==null&&(p.fontSize=l.actionIconFontSize);const y=(g=l.renderActionIcon)==null?void 0:g.call(l,{actionId:e,icon:t,className:c,style:p,dataTestId:a,ariaLabel:i,disabled:s});return f.jsx(Br,{title:n,zIndex:rt.tooltipZIndex,getPopupContainer:S=>{const v=S instanceof HTMLElement?S:document.body;return l.resolveActionTooltipPopupContainer(v)},children:f.jsx("span",{onClick:S=>{if(s){S.stopPropagation();return}r(S)},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),className:rt.triggerClassName,"aria-label":i,"aria-disabled":s,children:y??f.jsx(Re,{className:c,style:p,icon:t,"data-test-id":a,"aria-hidden":i?void 0:!0})})})};J.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Ea=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",editStyle:"Darstellung bearbeiten",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),La=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:r,onExport:a,onToggleVisibility:o,onToggleLock:i,onEditStyle:s,onDelete:u,onSetReference:l,visualOptions:d,dataTestIdPrefix:m,dataTestIds:c})=>{const p={...Ea,...t},y=new Set((d==null?void 0:d.hiddenActionIds)??[]),g=S=>!y.has(S);return f.jsxs("div",{className:"flex items-center gap-2",children:[g(O.FLY_TO)?f.jsx(J,{actionId:O.FLY_TO,title:p.flyTo,icon:hr,onClick:r,dataTestId:(c==null?void 0:c.flyTo)??`${m}-flyto-btn`,visualOptions:d}):null,g(O.EXPORT)?f.jsx(J,{actionId:O.EXPORT,title:p.exportGeoJson,icon:vr,onClick:a,dataTestId:(c==null?void 0:c.export)??`${m}-export-geojson-btn`,visualOptions:d}):null,g(O.VISIBILITY)?f.jsx(J,{actionId:O.VISIBILITY,title:e?p.show:p.hide,icon:e?Tr:Ir,onClick:o,dataTestId:(c==null?void 0:c.visibility)??`${m}-toggle-visibility-btn`,visualOptions:d}):null,l&&g(O.REFERENCE)?f.jsx(J,{actionId:O.REFERENCE,title:p.setReference,icon:Ar,onClick:l,dataTestId:(c==null?void 0:c.reference)??`${m}-set-reference-btn`,visualOptions:d}):null,g(O.LOCK)?f.jsx(J,{actionId:O.LOCK,title:n?p.unlock:p.lock,icon:n?kr:Er,onClick:i,dataTestId:(c==null?void 0:c.lock)??`${m}-toggle-lock-btn`,visualOptions:d}):null,s&&g(O.STYLE)?f.jsx(J,{actionId:O.STYLE,title:p.editStyle,icon:Lr,onClick:s,visualOptions:d}):null,g(O.DELETE)?f.jsx(J,{actionId:O.DELETE,title:n?p.deleteLocked:p.delete,icon:Rr,onClick:u,dataTestId:(c==null?void 0:c.delete)??`${m}-delete-btn`,disabled:n,visualOptions:d}):null]})};La.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Ne={TEXT:"text",ACTION:"action",ALERT:"alert"},pe={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift"},Oe={INFO:"info",WARNING:"warning"},ue={INFO:"info",WARNING:"warning"},j={STANDARD:"standard",COMPACT:"compact"},Ra="#00d9ff",Pa="rgba(0, 217, 255, 0.2)",Oa="#004b5c",_a="#ef4444",qa="rgba(239, 68, 68, 0.18)",wa="#7f1d1d",Ma=()=>typeof navigator>"u"?void 0:navigator.language,ln={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},Ba=e=>{const n=e==null?void 0:e.split("-")[0];return n&&ln[n]?ln[n]:ln.en},Ft={margin:"0 0 0.9rem"},We="1em",Dt="max-content minmax(0, 1fr)",Fa={display:"grid",gridTemplateColumns:Dt,columnGap:We,rowGap:"0.58rem",alignItems:"start"},Da={...Ft,gridColumn:"1 / -1"},zt={[j.STANDARD]:{display:"grid",gridTemplateColumns:Dt,columnGap:We,alignItems:"baseline",margin:"0 0 0.58rem",lineHeight:1.28},[j.COMPACT]:{display:"contents"}},Mn={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22rem",whiteSpace:"nowrap"},vn={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.2rem",whiteSpace:"nowrap"},za={lineHeight:1},Tn={[ue.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Pa,color:Oa},[ue.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:qa,color:wa}},Ha={[ue.INFO]:{...Tn[ue.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:We,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[ue.WARNING]:{...Tn[ue.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:We,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},ja={minWidth:0,fontWeight:600,lineHeight:1.28},$a={[j.STANDARD]:{minWidth:0,whiteSpace:"nowrap"},[j.COMPACT]:{minWidth:0,lineHeight:1.28}},Wa=e=>e===j.COMPACT?e:j.STANDARD,Va=e=>typeof e=="string"||e.kind===Ne.TEXT,at=e=>typeof e!="string"&&e.kind===Ne.ALERT,Ua=e=>{const n=e.findIndex(Va);if(n<=0)return e;const t=e.slice(0,n),r=t.filter(at);return r.length===0?e:[...t.filter(a=>!at(a)),e[n],...r,...e.slice(n+1)]},Ht={display:"inline-flex",minWidth:"1.85rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:"0.74em",fontWeight:700,lineHeight:1,padding:"0.16rem 0.32rem"},Ga={...Ht,gap:"0.22rem"},Xa={display:"inline-flex",minWidth:"1.35rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",lineHeight:1},Ya={[Oe.INFO]:{color:Ra},[Oe.WARNING]:{color:_a}},Fe=(e,n)=>{const t=typeof e=="string"?e:e.text;return f.jsx("p",{style:n===j.COMPACT?Da:Ft,children:t},t)},je=e=>f.jsx("span",{style:Ht,children:e}),it=e=>f.jsxs("span",{style:Ga,children:[f.jsx(Re,{icon:_r}),f.jsx("span",{children:e})]}),In=e=>f.jsx("span",{style:Xa,children:f.jsx(Re,{style:Ya[e],icon:e===Oe.WARNING?Pr:Or})}),Ka=e=>In(e===ue.WARNING?Oe.WARNING:Oe.INFO),Za=(e,n)=>je(ia(e,n)),Ja=(e,n,t,r)=>{switch(e){case pe.CLICK:return it(r.click);case pe.DOUBLE_CLICK:return it(r.doubleClick);case pe.ENTER:return je("Enter");case pe.BACKSPACE:return Za(t,n);case pe.ESCAPE:return je(n.escape);case pe.SHIFT:return je(n.shift)}},ot=(e,n,t,r)=>f.jsx("span",{style:Mn,children:e.map((a,o)=>f.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[o>0?f.jsx("span",{children:"+"}):null,Ja(a,n,t,r)]},`${a}-${o}`))}),Qa=(e,n,t,r,a,o)=>o===j.COMPACT?f.jsxs("span",{style:vn,children:[e?In(e):null,n.map((i,s)=>f.jsxs("span",{style:vn,children:[s>0?f.jsx("span",{style:za,children:a.alternative}):null,ot(i,t,r,a)]},`${i.join("+")}-${s}`))]}):f.jsxs("span",{style:Mn,children:[e?In(e):null,n.map((i,s)=>f.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[s>0?f.jsx("span",{children:a.alternative}):null,ot(i,t,r,a)]},`${i.join("+")}-${s}`))]}),An=(e,n,t,r,a,o)=>f.jsxs("div",{"data-testid":"annotation-help-action",style:zt[o],children:[Qa(e.indicator,e.inputAlternatives,t,r,a,o),f.jsx("span",{style:$a[o],children:e.description})]},`${e.inputAlternatives.map(i=>i.join("+")).join("-")}-${n}`),st=(e,n,t,r,a,o)=>{const i=e.actions??[],s=o===j.COMPACT?Ha[e.severity]:Tn[e.severity];return f.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:s,children:[f.jsxs("div",{style:zt[o],children:[f.jsx("span",{style:o===j.COMPACT?vn:Mn,children:Ka(e.severity)}),f.jsx("span",{style:ja,children:e.text})]}),i.map((u,l)=>An(u,l,t,r,a,o))]},`${e.severity}-${e.text}-${n}`)},ei=({items:e,layout:n,locale:t,platform:r})=>{const a=Wa(n),o=t??Ma(),i=aa(o),s=ra(r),u=Ba(o),l=Ua(e);if(a===j.COMPACT){const m=l.map((c,p)=>typeof c=="string"||c.kind===Ne.TEXT?Fe(c,a):c.kind===Ne.ALERT?st(c,p,i,s,u,a):An(c,p,i,s,u,a));return f.jsx("div",{"data-testid":"annotation-help-content",style:Fa,children:m})}const d=l.map((m,c)=>typeof m=="string"||m.kind===Ne.TEXT?Fe(m,a):m.kind===Ne.ALERT?st(m,c,i,s,u,a):An(m,c,i,s,u,a));return f.jsx(f.Fragment,{children:d})};ei.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""}}};const ni=({items:e,className:n,visualOptions:t})=>{const r=Te(t),a=r.subtitleTextClassName.split(/\s+/).filter(o=>o.length>0&&!o.startsWith("px-")).join(" ");return f.jsx("dl",{className:`m-0 flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((o,i)=>f.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[f.jsx("dt",{className:a,style:r.subtitleTextStyle,children:o.label}),f.jsx("dd",{className:"m-0 leading-[1.25]",children:o.value})]},o.id??i))})};ni.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const ti=({children:e,className:n,style:t,visualOptions:r})=>{const a=Te(r);return f.jsx("div",{className:`${a.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...a.subtitleMetaTextStyle,...t},children:e})};ti.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const ri=Object.freeze({entrySingular:"Messung",entryPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),lt=(e,n)=>`${e} ${e===1?n.entrySingular:n.entryPlural} ${n.availableSuffix}`.trim(),ai=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:r,labels:a,onFlyToAll:o,onPrevious:i,onNext:s,visualOptions:u})=>{var y,g;const l=Te(u),d={...ri,...a};if(e<=0&&!t)return null;const m={fontSize:l.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},c=((y=l.navigationControlLabels)==null?void 0:y.previous)??f.jsx(Re,{icon:qr}),p=((g=l.navigationControlLabels)==null?void 0:g.next)??f.jsx(Re,{icon:wr});return f.jsxs(f.Fragment,{children:[t?f.jsx("div",{className:`${l.navigationInstructionContainerClassName} ${l.mutedTextClassName}`,children:f.jsx("span",{children:t})}):null,e>0?f.jsx("div",{className:l.navigationAvailabilityContainerClassName,children:o?f.jsx("button",{type:"button",className:`${l.linkTextClassName} cursor-pointer`,onClick:o,style:{border:"none",background:"transparent",padding:0},children:r??lt(e,d)}):f.jsx("span",{className:l.linkTextClassName,children:r??lt(e,d)})}):null,e>0?f.jsxs("div",{className:l.navigationSummaryContainerClassName,children:[f.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:m,"aria-label":d.previousAriaLabel,children:c}),f.jsxs("span",{className:"mx-4",children:[n+1," ",d.counterSeparator," ",e]}),f.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${l.linkTextClassName}`,onClick:s,"data-test-id":"switch-measurement-right",style:m,"aria-label":d.nextAriaLabel,children:p})]}):null]})};ai.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const ii=({children:e,className:n,style:t,visualOptions:r})=>{const a=Te(r);return f.jsx("div",{className:`${a.bodyContainerClassName} ${a.bodyTextClassName}${n?` ${n}`:""}`,style:{...a.bodyTextStyle,...t},children:e})};ii.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const Ce=e=>e.trim(),G=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),Ae=e=>Ce(e).slice(0,G.shortLabelMaxLength),oi=e=>e.slice(0,G.shortLabelMaxLength),si=({value:e,placeholder:n,onCommit:t,readOnly:r=!1,shortLabelValue:a,shortLabelPlaceholder:o,onShortLabelCommit:i,visualOptions:s})=>{const u=Te(s),[l,d]=A.useState(()=>Ce(e)),[m,c]=A.useState(()=>Ae(a??"")),p=A.useRef(null),y=A.useRef(null),g=G.shortLabelMaxLength+G.shortLabelWidthPaddingCh,S=Math.min(Math.max(Ce(m||o||"").length+G.shortLabelWidthPaddingCh,G.shortLabelMinWidthCh),g);A.useEffect(()=>{d(Ce(e))},[e]),A.useEffect(()=>{c(Ae(a??""))},[a]);const v=N=>{if(r){d(Ce(e));return}const R=Ce(N);d(R),t(R)},B=N=>{if(!i||r){c(Ae(a??""));return}const R=Ae(N);if(!R){const nn=Ae(a??"");c(nn);return}c(R),i(R)},x=N=>{N.stopPropagation()},I=N=>{var R;N.key==="Enter"&&(N.preventDefault(),(R=p.current)==null||R.blur())},L=N=>{var R;N.key==="Enter"&&(N.preventDefault(),(R=y.current)==null||R.blur())},$={...u.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},F={...u.titleTextStyle,borderRadius:G.borderRadiusRem,flex:"0 1 auto",width:`${S}ch`,minWidth:`${G.shortLabelMinWidthCh}ch`,maxWidth:`min(${g}ch, 100%)`,fieldSizing:"content"};return f.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:x,onClick:x,children:[f.jsx("input",{ref:p,type:"text",value:l,placeholder:n,readOnly:r,"aria-readonly":r,className:u.titleInputClassName,style:$,onMouseDown:x,onClick:x,onChange:N=>d(N.target.value),onBlur:N=>v(N.target.value),onKeyDown:I}),i?f.jsx("input",{ref:y,type:"text",value:m,placeholder:o,readOnly:r,"aria-readonly":r,maxLength:G.shortLabelMaxLength,className:u.shortLabelInputClassName,style:F,onMouseDown:x,onClick:x,onChange:N=>c(oi(N.target.value)),onBlur:N=>B(N.target.value),onKeyDown:L}):null]})};si.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};var jt={exports:{}},$t={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=A;function li(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ui=typeof Object.is=="function"?Object.is:li,di=Me.useSyncExternalStore,ci=Me.useRef,mi=Me.useEffect,gi=Me.useMemo,yi=Me.useDebugValue;$t.useSyncExternalStoreWithSelector=function(e,n,t,r,a){var o=ci(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=gi(function(){function u(p){if(!l){if(l=!0,d=p,p=r(p),a!==void 0&&i.hasValue){var y=i.value;if(a(y,p))return m=y}return m=p}if(y=m,ui(d,p))return y;var g=r(p);return a!==void 0&&a(y,g)?y:(d=p,m=g)}var l=!1,d,m,c=t===void 0?null:t;return[function(){return u(n())},c===null?void 0:function(){return u(c())}]},[n,t,r,a]);var s=di(e,o[0],o[1]);return mi(function(){i.hasValue=!0,i.value=s},[s]),yi(s),s};jt.exports=$t;var fi=jt.exports,V="default"in Yn?Mr:Yn,ut=Symbol.for("react-redux-context"),dt=typeof globalThis<"u"?globalThis:{};function pi(){if(!V.createContext)return{};const e=dt[ut]??(dt[ut]=new Map);let n=e.get(V.createContext);return n||(n=V.createContext(null),e.set(V.createContext,n)),n}var me=pi(),Ci=()=>{throw new Error("uSES not initialized!")};function Bn(e=me){return function(){return V.useContext(e)}}var Wt=Bn(),Vt=Ci,Ni=e=>{Vt=e},xi=(e,n)=>e===n;function bi(e=me){const n=e===me?Wt:Bn(e),t=(r,a={})=>{const{equalityFn:o=xi,devModeChecks:i={}}=typeof a=="function"?{equalityFn:a}:a,{store:s,subscription:u,getServerState:l,stabilityCheck:d,identityFunctionCheck:m}=n();V.useRef(!0);const c=V.useCallback({[r.name](y){return r(y)}}[r.name],[r,d,i.stabilityCheck]),p=Vt(u.addNestedSub,s.getState,l||s.getState,c,o);return V.useDebugValue(p),p};return Object.assign(t,{withTypes:()=>t}),t}var Si=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hi=typeof navigator<"u"&&navigator.product==="ReactNative";Si||hi?V.useLayoutEffect:V.useEffect;function Fn(e=me){const n=e===me?Wt:Bn(e),t=()=>{const{store:r}=n();return r};return Object.assign(t,{withTypes:()=>t}),t}var vi=Fn();function Ti(e=me){const n=e===me?vi:Fn(e),t=()=>n().dispatch;return Object.assign(t,{withTypes:()=>t}),t}Ni(fi.useSyncExternalStoreWithSelector);const Ii={AUTHORING:"authoring",EXTERNAL:"external"},Es={RELATIVE:"relative",ABSOLUTE:"absolute"},Ut=e=>new Set(e.filter(n=>n.annotationRole===Ii.EXTERNAL||n.readOnly||n.locked).flatMap(n=>n.nodeIds)),un=e=>e.reduce((n,t)=>{const r=t.match(/(\d+)$/),a=r?Number(r[1]):Number.NaN;return Number.isFinite(a)?Math.max(n,a):n},0),Ls=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),le=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),r=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(s=>t.has(s))))})).filter(i=>i.nodeIds.length>0),a=new Set(r.flatMap(i=>i.nodeIds)),o=e.filter(i=>!a.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...r,...o]},ct=6378137,Ai=.1,dn=e=>e*Math.PI/180,ki=(e,n)=>{const t=dn(n.latitude-e.latitude),r=dn(n.longitude-e.longitude),a=dn((e.latitude+n.latitude)/2),o=r*Math.cos(a)*ct,i=t*ct,s=n.altitude-e.altitude;return Math.hypot(o,i,s)},Ei=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,Li=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:r,linkToNodeId:a})=>{const o=e.find(y=>y.id===t)??null,i=Array.from(new Set(r.filter(Boolean)));if(!o||i.length===0)return[...n];const s=new Set(i),u=n.find(y=>y.nodeIds.includes(t))??null,l=Ei(a),d=l&&!s.has(l)?n.find(y=>y.nodeIds.includes(l))??null:null;return d!==null&&!d.nodeIds.some(y=>s.has(y))?le({nodes:e,nodeLinks:n.map(y=>y.id===d.id?{...y,nodeIds:Array.from(new Set([...y.nodeIds,...i]))}:{...y,nodeIds:y.nodeIds.filter(g=>!s.has(g))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(y=>u.nodeIds.includes(y.id)&&!s.has(y.id)).some(y=>ki(y.coordinate,o.coordinate)>Ai)?le({nodes:e,nodeLinks:n.map(y=>y.id===u.id?{...y,nodeIds:y.nodeIds.filter(g=>!s.has(g))}:{...y})}):[...n]};function Ri(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function Pi(e){return Ri(e)&&"type"in e&&typeof e.type=="string"}var Gt=Symbol.for("immer-nothing"),mt=Symbol.for("immer-draftable"),q=Symbol.for("immer-state");function H(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Se=Object.getPrototypeOf;function ge(e){return!!e&&!!e[q]}function Y(e){var n;return e?Xt(e)||Array.isArray(e)||!!e[mt]||!!((n=e.constructor)!=null&&n[mt])||Ke(e)||Ze(e):!1}var Oi=Object.prototype.constructor.toString();function Xt(e){if(!e||typeof e!="object")return!1;const n=Se(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Oi}function Ve(e,n){Ye(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,r)=>n(r,t,e))}function Ye(e){const n=e[q];return n?n.type_:Array.isArray(e)?1:Ke(e)?2:Ze(e)?3:0}function kn(e,n){return Ye(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Yt(e,n,t){const r=Ye(e);r===2?e.set(n,t):r===3?e.add(t):e[n]=t}function _i(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function Ke(e){return e instanceof Map}function Ze(e){return e instanceof Set}function se(e){return e.copy_||e.base_}function En(e,n){if(Ke(e))return new Map(e);if(Ze(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const t=Xt(e);if(n===!0||n==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(e);delete r[q];let a=Reflect.ownKeys(r);for(let o=0;o<a.length;o++){const i=a[o],s=r[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(r[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Se(e),r)}else{const r=Se(e);if(r!==null&&t)return{...e};const a=Object.create(r);return Object.assign(a,e)}}function Dn(e,n=!1){return Je(e)||ge(e)||!Y(e)||(Ye(e)>1&&(e.set=e.add=e.clear=e.delete=qi),Object.freeze(e),n&&Object.entries(e).forEach(([t,r])=>Dn(r,!0))),e}function qi(){H(2)}function Je(e){return Object.isFrozen(e)}var wi={};function ye(e){const n=wi[e];return n||H(0,e),n}var _e;function Kt(){return _e}function Mi(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function gt(e,n){n&&(ye("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Ln(e){Rn(e),e.drafts_.forEach(Bi),e.drafts_=null}function Rn(e){e===_e&&(_e=e.parent_)}function yt(e){return _e=Mi(_e,e)}function Bi(e){const n=e[q];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function ft(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[q].modified_&&(Ln(n),H(4)),Y(e)&&(e=Ue(n,e),n.parent_||Ge(n,e)),n.patches_&&ye("Patches").generateReplacementPatches_(t[q].base_,e,n.patches_,n.inversePatches_)):e=Ue(n,t,[]),Ln(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==Gt?e:void 0}function Ue(e,n,t){if(Je(n))return n;const r=n[q];if(!r)return Ve(n,(a,o)=>pt(e,r,n,a,o,t)),n;if(r.scope_!==e)return n;if(!r.modified_)return Ge(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const a=r.copy_;let o=a,i=!1;r.type_===3&&(o=new Set(a),a.clear(),i=!0),Ve(o,(s,u)=>pt(e,r,a,s,u,t,i)),Ge(e,a,!1),t&&e.patches_&&ye("Patches").generatePatches_(r,t,e.patches_,e.inversePatches_)}return r.copy_}function pt(e,n,t,r,a,o,i){if(ge(a)){const s=o&&n&&n.type_!==3&&!kn(n.assigned_,r)?o.concat(r):void 0,u=Ue(e,a,s);if(Yt(t,r,u),ge(u))e.canAutoFreeze_=!1;else return}else i&&t.add(a);if(Y(a)&&!Je(a)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ue(e,a),(!n||!n.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Ge(e,a)}}function Ge(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Dn(n,t)}function Fi(e,n){const t=Array.isArray(e),r={type_:t?1:0,scope_:n?n.scope_:Kt(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=r,o=zn;t&&(a=[r],o=qe);const{revoke:i,proxy:s}=Proxy.revocable(a,o);return r.draft_=s,r.revoke_=i,s}var zn={get(e,n){if(n===q)return e;const t=se(e);if(!kn(t,n))return Di(e,t,n);const r=t[n];return e.finalized_||!Y(r)?r:r===cn(e.base_,n)?(mn(e),e.copy_[n]=On(r,e)):r},has(e,n){return n in se(e)},ownKeys(e){return Reflect.ownKeys(se(e))},set(e,n,t){const r=Zt(se(e),n);if(r!=null&&r.set)return r.set.call(e.draft_,t),!0;if(!e.modified_){const a=cn(se(e),n),o=a==null?void 0:a[q];if(o&&o.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(_i(t,a)&&(t!==void 0||kn(e.base_,n)))return!0;mn(e),Pn(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return cn(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,mn(e),Pn(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=se(e),r=Reflect.getOwnPropertyDescriptor(t,n);return r&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:r.enumerable,value:t[n]}},defineProperty(){H(11)},getPrototypeOf(e){return Se(e.base_)},setPrototypeOf(){H(12)}},qe={};Ve(zn,(e,n)=>{qe[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});qe.deleteProperty=function(e,n){return qe.set.call(this,e,n,void 0)};qe.set=function(e,n,t){return zn.set.call(this,e[0],n,t,e[0])};function cn(e,n){const t=e[q];return(t?se(t):e)[n]}function Di(e,n,t){var a;const r=Zt(n,t);return r?"value"in r?r.value:(a=r.get)==null?void 0:a.call(e.draft_):void 0}function Zt(e,n){if(!(n in e))return;let t=Se(e);for(;t;){const r=Object.getOwnPropertyDescriptor(t,n);if(r)return r;t=Se(t)}}function Pn(e){e.modified_||(e.modified_=!0,e.parent_&&Pn(e.parent_))}function mn(e){e.copy_||(e.copy_=En(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var zi=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,r)=>{if(typeof n=="function"&&typeof t!="function"){const o=t;t=n;const i=this;return function(u=o,...l){return i.produce(u,d=>t.call(this,d,...l))}}typeof t!="function"&&H(6),r!==void 0&&typeof r!="function"&&H(7);let a;if(Y(n)){const o=yt(this),i=On(n,void 0);let s=!0;try{a=t(i),s=!1}finally{s?Ln(o):Rn(o)}return gt(o,r),ft(a,o)}else if(!n||typeof n!="object"){if(a=t(n),a===void 0&&(a=n),a===Gt&&(a=void 0),this.autoFreeze_&&Dn(a,!0),r){const o=[],i=[];ye("Patches").generateReplacementPatches_(n,a,o,i),r(o,i)}return a}else H(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(i,...s)=>this.produceWithPatches(i,u=>n(u,...s));let r,a;return[this.produce(n,t,(i,s)=>{r=i,a=s}),r,a]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Y(e)||H(8),ge(e)&&(e=Hi(e));const n=yt(this),t=On(e,void 0);return t[q].isManual_=!0,Rn(n),t}finishDraft(e,n){const t=e&&e[q];(!t||!t.isManual_)&&H(9);const{scope_:r}=t;return gt(r,n),ft(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const a=n[t];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}t>-1&&(n=n.slice(t+1));const r=ye("Patches").applyPatches_;return ge(e)?r(e,n):this.produce(e,a=>r(a,n))}};function On(e,n){const t=Ke(e)?ye("MapSet").proxyMap_(e,n):Ze(e)?ye("MapSet").proxySet_(e,n):Fi(e,n);return(n?n.scope_:Kt()).drafts_.push(t),t}function Hi(e){return ge(e)||H(10,e),Jt(e)}function Jt(e){if(!Y(e)||Je(e))return e;const n=e[q];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=En(e,n.scope_.immer_.useStrictShallowCopy_)}else t=En(e,!0);return Ve(t,(r,a)=>{Yt(t,r,Jt(a))}),n&&(n.finalized_=!1),t}var w=new zi,Qt=w.produce;w.produceWithPatches.bind(w);w.setAutoFreeze.bind(w);w.setUseStrictShallowCopy.bind(w);w.applyPatches.bind(w);w.createDraft.bind(w);w.finishDraft.bind(w);function Ct(e,n){function t(...r){if(n){let a=n(...r);if(!a)throw new Error(U(0));return{type:e,payload:a.payload,..."meta"in a&&{meta:a.meta},..."error"in a&&{error:a.error}}}return{type:e,payload:r[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=r=>Pi(r)&&r.type===e,t}function Nt(e){return Y(e)?Qt(e,()=>{}):e}function xt(e,n,t){if(e.has(n)){let a=e.get(n);return t.update&&(a=t.update(a,n,e),e.set(n,a)),a}if(!t.insert)throw new Error(U(10));const r=t.insert(n,e);return e.set(n,r),r}function er(e){const n={},t=[];let r;const a={addCase(o,i){const s=typeof o=="string"?o:o.type;if(!s)throw new Error(U(28));if(s in n)throw new Error(U(29));return n[s]=i,a},addMatcher(o,i){return t.push({matcher:o,reducer:i}),a},addDefaultCase(o){return r=o,a}};return e(a),[n,t,r]}function ji(e){return typeof e=="function"}function $i(e,n){let[t,r,a]=er(n),o;if(ji(e))o=()=>Nt(e());else{const s=Nt(e);o=()=>s}function i(s=o(),u){let l=[t[u.type],...r.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return l.filter(d=>!!d).length===0&&(l=[a]),l.reduce((d,m)=>{if(m)if(ge(d)){const p=m(d,u);return p===void 0?d:p}else{if(Y(d))return Qt(d,c=>m(c,u));{const c=m(d,u);if(c===void 0){if(d===null)return d;throw new Error(U(9))}return c}}return d},s)}return i.getInitialState=o,i}var Wi=Symbol.for("rtk-slice-createasyncthunk");function Vi(e,n){return`${e}/${n}`}function Ui({creators:e}={}){var t;const n=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[Wi];return function(a){const{name:o,reducerPath:i=o}=a;if(!o)throw new Error(U(11));const s=(typeof a.reducers=="function"?a.reducers(Yi()):a.reducers)||{},u=Object.keys(s),l={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(x,I){const L=typeof x=="string"?x:x.type;if(!L)throw new Error(U(12));if(L in l.sliceCaseReducersByType)throw new Error(U(13));return l.sliceCaseReducersByType[L]=I,d},addMatcher(x,I){return l.sliceMatchers.push({matcher:x,reducer:I}),d},exposeAction(x,I){return l.actionCreators[x]=I,d},exposeCaseReducer(x,I){return l.sliceCaseReducersByName[x]=I,d}};u.forEach(x=>{const I=s[x],L={reducerName:x,type:Vi(o,x),createNotation:typeof a.reducers=="function"};Zi(I)?Qi(L,I,d,n):Ki(L,I,d)});function m(){const[x={},I=[],L=void 0]=typeof a.extraReducers=="function"?er(a.extraReducers):[a.extraReducers],$={...x,...l.sliceCaseReducersByType};return $i(a.initialState,F=>{for(let N in $)F.addCase(N,$[N]);for(let N of l.sliceMatchers)F.addMatcher(N.matcher,N.reducer);for(let N of I)F.addMatcher(N.matcher,N.reducer);L&&F.addDefaultCase(L)})}const c=x=>x,p=new Map;let y;function g(x,I){return y||(y=m()),y(x,I)}function S(){return y||(y=m()),y.getInitialState()}function v(x,I=!1){function L(F){let N=F[x];return typeof N>"u"&&I&&(N=S()),N}function $(F=c){const N=xt(p,I,{insert:()=>new WeakMap});return xt(N,F,{insert:()=>{const R={};for(const[nn,Nr]of Object.entries(a.selectors??{}))R[nn]=Gi(Nr,F,S,I);return R}})}return{reducerPath:x,getSelectors:$,get selectors(){return $(L)},selectSlice:L}}const B={name:o,reducer:g,actions:l.actionCreators,caseReducers:l.sliceCaseReducersByName,getInitialState:S,...v(i),injectInto(x,{reducerPath:I,...L}={}){const $=I??i;return x.inject({reducerPath:$,reducer:g},L),{...B,...v($,!0)}}};return B}}function Gi(e,n,t,r){function a(o,...i){let s=n(o);return typeof s>"u"&&r&&(s=t()),e(s,...i)}return a.unwrapped=e,a}var Xi=Ui();function Yi(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function Ki({type:e,reducerName:n,createNotation:t},r,a){let o,i;if("reducer"in r){if(t&&!Ji(r))throw new Error(U(17));o=r.reducer,i=r.prepare}else o=r;a.addCase(e,o).exposeCaseReducer(n,o).exposeAction(n,i?Ct(e,i):Ct(e))}function Zi(e){return e._reducerDefinitionType==="asyncThunk"}function Ji(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Qi({type:e,reducerName:n},t,r,a){if(!a)throw new Error(U(18));const{payloadCreator:o,fulfilled:i,pending:s,rejected:u,settled:l,options:d}=t,m=a(e,o,d);r.exposeAction(n,m),i&&r.addCase(m.fulfilled,i),s&&r.addCase(m.pending,s),u&&r.addCase(m.rejected,u),l&&r.addMatcher(m.settled,l),r.exposeCaseReducer(n,{fulfilled:i||De,pending:s||De,rejected:u||De,settled:l||De})}function De(){}function U(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const eo=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:r,selectedAnnotationIds:a=[],preferredMovedNodeIds:o})=>{const i=n.find(g=>g.id===e)??null;if(!i)return{targetNode:null,targetLinkedNodeGroup:null,movedNodeIds:[]};const s=t.find(g=>g.nodeIds.includes(e))??null,u=(s==null?void 0:s.nodeIds)??[e],l=Array.from(new Set((o??[]).filter(g=>u.includes(g)))),d=new Set(a.filter(Boolean)),m=new Set(r.filter(g=>d.has(g.id)).flatMap(g=>g.nodeIds)),c=u.filter(g=>m.has(g)),p=l.length>0?l:c.length>0?c:[...u],y=Ut(r);return{targetNode:i,targetLinkedNodeGroup:s,movedNodeIds:p.filter(g=>!y.has(g))}},no=(e={})=>{const{initialToolType:n=ga,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},to=({nodeIds:e,closed:n,nextEdgeNumericSuffix:t})=>{const r=[];let a=t;for(let s=0;s<e.length-1;s+=1){const u=e[s],l=e[s+1];!u||!l||(a+=1,r.push({id:`edge-${a}`,startNodeId:u,endNodeId:l}))}const o=e[0],i=e[e.length-1];return n&&e.length>=3&&o&&i&&(a+=1,r.push({id:`edge-${a}`,startNodeId:i,endNodeId:o})),r},ro=Xi({name:"annotationsRuntime",initialState:no(),reducers:{replaceState:(e,n)=>n.payload,setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},setNextShortLabelCounterByToolType:(e,n)=>{e.settingsState.nextShortLabelCounterByToolType={...e.settingsState.nextShortLabelCounterByToolType,[n.payload.toolType]:Math.max(1,n.payload.nextCounter)}},setSelectedAnnotationId:(e,n)=>{const t=n.payload,r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=r,e.selectionState.selectedAnnotationIds=t?[t]:[],e.infoBoxState.activeAnnotationId=t},setSelectedAnnotationIds:(e,n)=>{const t=Array.from(new Set(n.payload.filter(Boolean))),r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=r,e.selectionState.selectedAnnotationIds=t,e.infoBoxState.activeAnnotationId=t[t.length-1]??null},appendAnnotationEntities:(e,n)=>{if(e.nodes.push(...n.payload.nodes),n.payload.linkedNodeGroups.forEach(t=>{const r=e.linkedNodeGroups.find(a=>a.id===t.id);if(!r){e.linkedNodeGroups.push({id:t.id,nodeIds:[...t.nodeIds]});return}r.nodeIds=Array.from(new Set([...r.nodeIds,...t.nodeIds]))}),e.edges.push(...n.payload.edges),e.annotationEntries.push({...n.payload.annotationEntry,nodeIds:[...n.payload.annotationEntry.nodeIds],edgeIds:[...n.payload.annotationEntry.edgeIds]}),e.linkedNodeGroups=le({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),n.payload.selectAnnotationId!==void 0){const t=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=t,e.selectionState.selectedAnnotationIds=n.payload.selectAnnotationId?[n.payload.selectAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.selectAnnotationId??null}},removeAnnotationById:(e,n)=>{const{annotationId:t,nextSelectedAnnotationId:r}=n.payload,a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(l=>l.id===t))return;e.annotationEntries=e.annotationEntries.filter(l=>l.id!==t);const i=new Set(e.annotationEntries.flatMap(l=>l.nodeIds)),s=new Set(e.annotationEntries.flatMap(l=>l.edgeIds));if(e.nodes=e.nodes.filter(l=>i.has(l.id)),e.linkedNodeGroups=le({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(l=>s.has(l.id)),e.selectionState.previousSelectedAnnotationId=a,e.settingsState.elevationReferenceAnnotationId===t&&(e.settingsState.elevationReferenceAnnotationId=null),r!==void 0){e.selectionState.selectedAnnotationIds=r?[r]:[],e.infoBoxState.activeAnnotationId=r??null;return}const u=e.selectionState.selectedAnnotationIds.filter(l=>l!==t);e.selectionState.selectedAnnotationIds=u,e.infoBoxState.activeAnnotationId=u[u.length-1]??null},removeAnnotationsByIds:(e,n)=>{const t=new Set(n.payload.annotationIds);if(t.size===0)return;const r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(u=>t.has(u.id)))return;e.annotationEntries=e.annotationEntries.filter(u=>!t.has(u.id));const o=new Set(e.annotationEntries.flatMap(u=>u.nodeIds)),i=new Set(e.annotationEntries.flatMap(u=>u.edgeIds));if(e.nodes=e.nodes.filter(u=>o.has(u.id)),e.linkedNodeGroups=le({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(u=>i.has(u.id)),e.selectionState.previousSelectedAnnotationId=r,e.settingsState.elevationReferenceAnnotationId&&t.has(e.settingsState.elevationReferenceAnnotationId)&&(e.settingsState.elevationReferenceAnnotationId=null),n.payload.nextSelectedAnnotationId!==void 0){e.selectionState.selectedAnnotationIds=n.payload.nextSelectedAnnotationId?[n.payload.nextSelectedAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.nextSelectedAnnotationId??null;return}const s=e.selectionState.selectedAnnotationIds.filter(u=>!t.has(u));e.selectionState.selectedAnnotationIds=s,e.infoBoxState.activeAnnotationId=s[s.length-1]??null},updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:r,selectedAnnotationIds:a=[],movedNodeIds:o,linkToNodeId:i}=n.payload,{targetNode:s,movedNodeIds:u}=eo({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedAnnotationIds:a,preferredMovedNodeIds:o});if(!s)return;const l=new Set(u);if(u.length===0)return;const d=Ut(e.annotationEntries),m=i&&!d.has(i)?i:null;e.nodes.forEach(c=>{l.has(c.id)&&(c.coordinate=r)}),e.linkedNodeGroups=Li({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:s.id,movedNodeIds:u,linkToNodeId:m})},insertNodeIntoMeasurementEdge:(e,n)=>{const{annotationId:t,startNodeId:r,endNodeId:a,coordinate:o}=n.payload,i=e.annotationEntries.find(v=>v.id===t);if(!i)return;const s=i.nodeIds.findIndex((v,B)=>v===r&&i.nodeIds[B+1]===a),u=s>=0?s+1:i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===r&&i.nodeIds[0]===a?i.nodeIds.length:-1;if(u<0)return;const l=new Map(e.edges.map(v=>[v.id,v])),d=i.edgeIds.findIndex(v=>{const B=l.get(v);return(B==null?void 0:B.startNodeId)===r&&B.endNodeId===a}),m=d>=0?i.edgeIds[d]:null,c=m?l.get(m):void 0;if(!c||d<0)return;const p=`node-${un(e.nodes.map(v=>v.id))+1}`,y=`edge-${un(e.edges.map(v=>v.id))+1}`;e.nodes.push({id:p,coordinate:o}),e.linkedNodeGroups=le({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:p,nodeIds:[p]}]}),c.endNodeId=p;const g={id:y,startNodeId:p,endNodeId:a},S=e.edges.findIndex(v=>v.id===m);S>=0?e.edges.splice(S+1,0,g):e.edges.push(g),i.nodeIds=[...i.nodeIds.slice(0,u),p,...i.nodeIds.slice(u)],i.edgeIds=[...i.edgeIds.slice(0,d+1),y,...i.edgeIds.slice(d+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:r}=n.payload,a=e.annotationEntries.find(l=>l.id===t);if(!a||!a.nodeIds.includes(r))return;const o=a.nodeIds.filter(l=>l!==r);if(o.length===a.nodeIds.length)return;const i=new Set(a.edgeIds),s=to({nodeIds:o,closed:!!a.closed,nextEdgeNumericSuffix:un(e.edges.map(l=>l.id))});a.nodeIds=o,a.edgeIds=s.map(l=>l.id),e.edges=[...e.edges.filter(l=>!i.has(l.id)),...s];const u=new Set(e.annotationEntries.flatMap(l=>l.nodeIds));e.nodes=e.nodes.filter(l=>u.has(l.id)),e.linkedNodeGroups=le({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:r,shortLabel:a,shortLabelSource:o,shortLabelCounter:i,hidden:s,locked:u,annotationRole:l,readOnly:d,labelAppearance:m,elevationDisplayMode:c,distanceAnchorCoordinateSelection:p,distanceTriangleAnchorCoordinateRole:y}=n.payload,g=e.annotationEntries.find(S=>S.id===t);g&&(r!==void 0&&(g.displayName=r),a!==void 0&&(g.shortLabel=a),o!==void 0&&(g.shortLabelSource=o),i!==void 0&&(g.shortLabelCounter=i),s!==void 0&&(g.hidden=s),u!==void 0&&(g.locked=u),l!==void 0&&(g.annotationRole=l),d!==void 0&&(g.readOnly=d),m!==void 0&&(g.labelAppearance={...g.labelAppearance??{},...m}),c!==void 0&&(g.elevationDisplayMode=c),p!==void 0&&(g.distanceAnchorCoordinateSelection=p),y!==void 0&&(g.distanceTriangleAnchorCoordinateRole=y))}}}),{appendAnnotationEntities:Rs,removeAnnotationById:Ps,removeAnnotationsByIds:Os,removeNodeFromAnnotation:_s,setElevationReferenceAnnotationId:qs,setNextShortLabelCounterByToolType:ws,setPointTemporaryMode:Ms,insertNodeIntoMeasurementEdge:Bs,updateNodeCoordinateById:Fs,updateAnnotationEntryById:Ds,replaceState:zs,setAnnotationToolType:Hs,setSelectedAnnotationId:js,setSelectedAnnotationIds:$s}=ro.actions,Hn=A.createContext(null);Fn(Hn);const ao=Ti(Hn);bi(Hn);const Ws=()=>ao(),_n=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8"}),io=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,oo=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},Vs=(e,n=_n)=>({strokeWidthPx:io(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:oo(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern)}),bt=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),T={colors:{neutral:He(1),accent:He(1),preview:He(bt.previewAlpha),surface:Fr(bt.surfaceAlpha),transparent:"transparent",components:{direct:on(P.DIRECT),vertical:on(P.VERTICAL),horizontal:on(P.HORIZONTAL)},componentLabelAccents:{direct:sn(P.DIRECT),vertical:sn(P.VERTICAL),horizontal:sn(P.HORIZONTAL)}},sizes:{edgeStrokeWidth:_n.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:_n.overlayDashPattern}},nr=Object.freeze({edge:Object.freeze({stroke:T.colors.accent,strokeWidth:T.sizes.edgeStrokeWidth,overlayDashPattern:T.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:T.sizes.pointPixelSize,fill:T.colors.transparent,outline:T.colors.surface,outlineWidth:T.sizes.pointOutlineWidth})}),tr=Object.freeze({edge:Object.freeze({stroke:T.colors.neutral}),point:Object.freeze({outline:T.colors.neutral})}),so=(e,n={})=>({...e,...n}),lo=(e,n={})=>({...e,...n}),Us=e=>so(e,tr.edge),Gs=e=>lo(e,tr.point),St=Ca(),he=Object.freeze({style:Object.freeze({DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"}),label:Object.freeze({textColor:St}),selection:Object.freeze({highlightPalette:Object.freeze({backgroundColor:et("background"),hoverBackgroundColor:et("hoverBackground"),textColor:St,glowColor:He(1),glowRadiusPx:5,preserveFillOnSelection:!0})}),lineLabel:Object.freeze({backgroundStyle:Object.freeze({SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"})})}),uo=oe.fontSizePx.pointLabel,co=e=>`${e/uo}rem`,xe=Object.freeze({fontFamily:oe.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:co(oe.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:oe.fontWeight.medium,badgeFontWeight:oe.fontWeight.medium,headingFontWeight:oe.fontWeight.semibold,sectionTitleFontWeight:oe.fontWeight.semibold}),mo={NONE:"none",MOVE_ON_LINE:"move-on-line"},z=Object.freeze({appearance:Object.freeze({themeStyle:he.style.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:xe.fontFamily,fontWeight:xe.lineLabelFontWeight}),background:Object.freeze({style:he.lineLabel.backgroundStyle.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:mo.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),jn=Object.freeze({verticalFlippedBaselineOffsetPx:0,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5}),$n=e=>{var n,t;return{appearance:{...z.appearance,...e==null?void 0:e.appearance},text:{...z.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&z.text.echo===void 0?void 0:{...z.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...z.background,...e==null?void 0:e.background},surface:{...z.surface,...e==null?void 0:e.surface},layout:{...z.layout,...e==null?void 0:e.layout},collision:{...z.collision,...e==null?void 0:e.collision}}},Le=Object.freeze({lineStrokeWidthPx:T.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:9,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,directLineColor:T.colors.components.direct,verticalLineColor:T.colors.components.vertical,horizontalLineColor:T.colors.components.horizontal,draftChainColor:T.colors.preview}),ke=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),ze=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),go=Object.freeze({fontSize:"20px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:12,textEchoShadow:"0 0 4px rgba(2, 6, 23, 0.8), 0 0 12px rgba(2, 6, 23, 0.77), 0 0 24px rgba(2, 6, 23, 0.64)"}),yo=Object.freeze({[he.style.BRIGHT_ON_DARK]:"15, 23, 42",[he.style.DARK_ON_BRIGHT]:"255, 255, 255"}),Ee=(e,n)=>{const t=document.createElement(e);return t.className=n,t},ie=({element:e,value:n,property:t,unit:r,min:a,max:o})=>{if(typeof n!="number"||!Number.isFinite(n))return;const i=a===void 0?n:Math.max(n,a),s=o===void 0?i:Math.min(i,o);e.style.setProperty(t,`${s}${r??""}`)},fo=({element:e,backdrop:n,surface:t,accentColor:r,visualOptions:a=z})=>{var i,s,u,l,d,m,c,p,y,g,S,v;e.style.setProperty("--carma-annotation-text-overlay-font-family",a.text.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(a.text.fontWeight)),r&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",r),e.dataset.annotationThemeStyle=a.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=a.background.style,typeof a.background.surfaceAlpha=="number"&&Number.isFinite(a.background.surfaceAlpha)&&!((i=a.background.color)!=null&&i.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${yo[a.appearance.themeStyle]}, ${Math.min(Math.max(a.background.surfaceAlpha,0),1)})`);const o=a.background.showBackdrop!==!1;n.style.display=o?"block":"none",t.style.display=o?"block":"none",(s=a.text.color)!=null&&s.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-color",a.text.color),(u=a.text.blendMode)!=null&&u.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-blend-mode",a.text.blendMode),(l=a.background.color)!=null&&l.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",a.background.color),(d=a.background.blendMode)!=null&&d.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-blend-mode",a.background.blendMode),(m=a.surface.blendMode)!=null&&m.trim()&&e.style.setProperty("--carma-annotation-text-overlay-surface-blend-mode",a.surface.blendMode),(p=(c=a.text.echo)==null?void 0:c.color)!=null&&p.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-color",a.text.echo.color),(g=(y=a.text.echo)==null?void 0:y.blendMode)!=null&&g.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blend-mode",a.text.echo.blendMode),ie({element:e,value:(S=a.text.echo)==null?void 0:S.blurPx,property:"--carma-annotation-text-overlay-text-echo-blur-px",unit:"px",min:0}),ie({element:e,value:(v=a.text.echo)==null?void 0:v.opacity,property:"--carma-annotation-text-overlay-text-echo-opacity",min:0,max:1}),ie({element:e,value:a.background.blurPx,property:"--carma-annotation-text-overlay-surface-blur-px",unit:"px",min:0}),ie({element:e,value:a.background.brightnessPct,property:"--carma-annotation-text-overlay-surface-brightness-pct",unit:"%",min:0}),ie({element:e,value:a.background.saturatePct,property:"--carma-annotation-text-overlay-surface-saturate-pct",unit:"%",min:0}),ie({element:e,value:a.background.radiusEx,property:"--carma-annotation-text-overlay-backdrop-radius",unit:"ex",min:0}),ie({element:e,value:a.background.edgeBlurPx,property:"--carma-annotation-text-overlay-surface-edge-blur-px",unit:"px",min:0}),(typeof a.surface.paddingBlockEx=="number"||typeof a.surface.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${typeof a.surface.paddingBlockEx=="number"&&Number.isFinite(a.surface.paddingBlockEx)?Math.max(a.surface.paddingBlockEx,0):ze.paddingBlockEx}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${typeof a.surface.paddingInlineEx=="number"&&Number.isFinite(a.surface.paddingInlineEx)?Math.max(a.surface.paddingInlineEx,0):ze.paddingInlineEx}ex`)),(typeof a.background.insetBlockEx=="number"||typeof a.background.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${typeof a.background.insetBlockEx=="number"&&Number.isFinite(a.background.insetBlockEx)?a.background.insetBlockEx:ze.backdropInsetBlockEx}ex ${typeof a.background.insetInlineEx=="number"&&Number.isFinite(a.background.insetInlineEx)?a.background.insetInlineEx:ze.backdropInsetInlineEx}ex`)},po=(e,n)=>{n&&(n.fontSize&&e.style.setProperty("--carma-annotation-text-overlay-font-size",n.fontSize),n.fontWeight!==void 0&&e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(n.fontWeight)),n.letterSpacing&&e.style.setProperty("--carma-annotation-text-overlay-letter-spacing",n.letterSpacing),typeof n.textEchoBlurPx=="number"&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blur-px",`${n.textEchoBlurPx}px`),n.textEchoShadow&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-shadow",n.textEchoShadow))},rr=({accentColor:e,visualOptions:n,styleOptions:t})=>{const r=Ee("div",ke.root),a=Ee("div",ke.backdrop),o=Ee("div",ke.surface),i=Ee("div",ke.textEcho),s=Ee("div",ke.text);return i.dataset.annotationTextOverlayTextEcho="true",s.dataset.annotationTextOverlayText="foreground",fo({element:r,backdrop:a,surface:o,textEcho:i,text:s,accentColor:e,visualOptions:n}),po(r,t),r.append(a,o,i,s),r},Co=e=>e.querySelector('[data-annotation-text-overlay-text="foreground"]'),No=e=>e.querySelector('[data-annotation-text-overlay-text-echo="true"]'),ar=(e,n)=>{const t=Co(e),r=No(e);t&&t.textContent!==n&&(t.textContent=n),r&&r.textContent!==n&&(r.textContent=n)},Qe=(e,n)=>{Object.assign(e.style,n)},ht=Object.freeze({className:"carma-annotation-overlay-line-label",frameClassName:"carma-annotation-overlay-line-label__frame"}),xo=Object.freeze({direct:{labelOffsetPx:Le.lineLabelOffsetPx},vertical:{labelOffsetPx:Le.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:jn.verticalFlippedBaselineOffsetPx,labelRotationMode:Hr.CLOCKWISE},horizontal:{labelOffsetPx:Le.lineLabelOffsetPx}}),vt=(e,n)=>{const t=document.createElement(e);return t.className=n,t},bo=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:z.layout.shortEdgeOffsetPx},ir=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",So=e=>ir(e)==="vertical",ho=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...xo[e],anchorRatio:t===void 0?void 0:$r(t),getLabelOutsideReferencePoint:n?()=>({x:n.x,y:n.y}):void 0}),vo=({x:e,y:n,angleRad:t,anchor:r})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${r==="left"?"translate(0%, -50%)":r==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,To=(e,n,t=oa.LABEL)=>{const r=ca(e,t);if(!r)return null;const a=document.createElement("div");return a.id=n,a.dataset.annotationOverlayLayer="true",Qe(a,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),r.appendChild(a),a},Xs=To,Io=e=>{e==null||e.remove()},Ys=Io,Ks=e=>{const n=new Kr,t=n.update.bind(n);return n.update=r=>{if(!(r.passes.pick&&!r.passes.render))return t(r)},e.primitives.add(n),n},Zs=(e,n)=>{if(!(!n||!ea(e)))try{if(typeof n.isDestroyed=="function"&&n.isDestroyed())return;e.primitives.remove(n)}catch{}},or=e=>Zr.fromType("Color",{color:Kn.fromCssColorString(e)??Kn.WHITE}),Js=(e,n,t,r)=>({polyline:e.add({id:n,positions:[C.ZERO,C.ZERO],width:(r==null?void 0:r.width)??Le.lineStrokeWidthPx,material:or(t),show:!1}),colorCss:t}),Qs=(e,n)=>{e.colorCss!==n&&(e.polyline.material=or(n),e.colorCss=n)},el=e=>{e.polyline.show=!1},nl=(e,n)=>{e.polyline.positions=[...n],e.polyline.show=n.length>=2},gn=(e,n)=>{const t=$n(n),r=vt("div",ht.className),a=vt("div",ht.frameClassName),o=rr({accentColor:e,visualOptions:t});return r.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),a.append(o),r.appendChild(a),r},tl=e=>{const n=$n(e),t=gn(T.colors.componentLabelAccents.direct,n);t.dataset.annotationOverlayLineLabelKind="direct";const r=gn(T.colors.componentLabelAccents.vertical,n);r.dataset.annotationOverlayLineLabelKind="vertical";const a=gn(T.colors.componentLabelAccents.horizontal,n);return a.dataset.annotationOverlayLineLabelKind="horizontal",{direct:t,vertical:r,horizontal:a}},Tt=(e,n)=>{if(!(n!=null&&n.screenPosition)){e.style.display="none";return}ar(e,n.text),e.style.display="inline-grid",e.style.transform=`translate(${Math.round(n.screenPosition.x)}px, ${Math.round(n.screenPosition.y)}px) translate(-50%, -50%)`},rl=({overlayLayer:e,accentColor:n,visualOptions:t})=>{const r=rr({accentColor:n,visualOptions:$n(t),styleOptions:go});return r.dataset.annotationOverlayLineLabelKind="area",Qe(r,{position:"absolute",left:"0",top:"0",display:"none",willChange:"transform"}),e==null||e.appendChild(r),{setState:a=>Tt(r,a),clear:()=>Tt(r,null),destroy:()=>r.remove()}},al=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},sr=(e,n)=>{Qe(e,{width:`${n.pixelSize}px`,height:`${n.pixelSize}px`,border:`${n.outlineWidth}px solid ${n.outline}`,background:n.fill})},Ao=(e=nr.point)=>{const n=document.createElement("div");return Qe(n,{position:"absolute",left:"0",top:"0",display:"none",borderRadius:"999px",transform:"translate(-50%, -50%)",boxSizing:"border-box",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",willChange:"transform"}),sr(n,e),n},ko=({overlayLayer:e,pointMarkers:n,count:t,style:r})=>{for(;n.length<t;){const a=Ao(r);n.push(a),e.appendChild(a)}},il=e=>{e.forEach(n=>{n.style.display="none"})},ol=({scene:e,overlayLayer:n,pointMarkers:t,coordinates:r,style:a=nr.point})=>{ko({overlayLayer:n,pointMarkers:t,count:r.length,style:a}),r.forEach((o,i)=>{const s=t[i];if(!s)return;sr(s,a);const u=na.worldToWindowCoordinates(e,bn(o));if(!Jr(u)){s.style.display="none";return}s.style.display="block",s.style.transform=`translate(${Math.round(u.x)}px, ${Math.round(u.y)}px) translate(-50%, -50%)`}),t.slice(r.length).forEach(o=>{o.style.display="none"})},Eo=e=>_t(e>de||e<-de?e+Pe:e),Lo=e=>{let n=_t(e);return n>de?n=n-Pe:n<-de&&(n=n+Pe),n},Ro=({angleRad:e,lineSide:n})=>Math.abs(Math.abs(e)-de)>jn.verticalBaselineAngleEpsilonRad?e:n==="left"?de:-de,Po=({deltaX:e,deltaY:n,lineSide:t,flipReadingDirection:r,forceHorizontal:a})=>{if(a)return 0;const o=Eo(Math.atan2(n,e)),i=r?o>=0?o-Pe:o+Pe:o;return Ro({angleRad:Lo(i),lineSide:t})},Oo=({start:e,end:n,kind:t,outsideReferencePoint:r,shortEdgeOffsetPx:a=z.layout.shortEdgeOffsetPx,useShortEdgeRules:o=!0,flipReadingDirection:i=!1,previousShouldFlip:s=!1,anchorRatio:u})=>{const l=jr({svgLine:{start:{x:e.x,y:e.y},end:{x:n.x,y:n.y}},options:ho({kind:t,outsideReferencePoint:r,anchorRatio:u}),previousShouldFlip:s,sideSwitchThresholdPx:jn.sideHysteresisPx});if(!l)return null;const d=n.x-e.x,m=n.y-e.y;if(o&&l.lineLengthPx<Le.lineLabelMinLengthPx){const c=l.normalX>=0,p=c?"left":"right";return{x:l.midX+l.normalX*a,y:l.midY+l.normalY*a,angleRad:Po({deltaX:d,deltaY:m,lineSide:p,flipReadingDirection:i,forceHorizontal:!0}),anchor:c?"left":"right",anchorRatio:l.anchorRatio,isShortEdge:!0,shouldFlip:l.shouldFlip,normalX:l.normalX,normalY:l.normalY}}return{x:l.textX,y:l.textY,angleRad:l.angleRad,anchor:"center",anchorRatio:l.anchorRatio,isShortEdge:!1,shouldFlip:l.shouldFlip,normalX:l.normalX,normalY:l.normalY}},sl=({element:e,text:n,start:t,end:r,outsideReferencePoint:a,flipReadingDirection:o=!1,anchorRatio:i})=>{const s=Oo({start:t,end:r,kind:ir(e),outsideReferencePoint:a,shortEdgeOffsetPx:bo(e),useShortEdgeRules:So(e),flipReadingDirection:o,anchorRatio:i,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!s){e.style.display="none";return}ar(e,n),e.style.display="block",e.dataset.annotationOverlayLineLabelShortEdge=s.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${s.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=s.shouldFlip?"1":"0",e.style.transform=vo(s)},ll=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),ul=()=>({cartographicA:new xn,cartographicB:new xn,auxiliaryPoint:new C,auxiliaryScreen:new Qr}),dl=({scene:e,anchorPointECEF:n,targetPointECEF:t,scratch:r})=>{const a=e.globe.ellipsoid,o=a.cartesianToCartographic(n,r.cartographicA),i=a.cartesianToCartographic(t,r.cartographicB);return!o||!i?null:C.fromRadians(o.longitude,o.latitude,i.height??0,a,r.auxiliaryPoint)},cl=e=>{const n=Aa(e);return{longitude:n.longitude,latitude:n.latitude,altitude:Ta(n.altitude)}},ml=({firstCorner:e,oppositeCorner:n})=>{const t=bn(e),r=bn(n),a=Bt(t,r);return a?[t,a.adjacentHorizontalCorner,r,a.adjacentVerticalCorner,t]:null},_o=Object.freeze({longPressDurationMs:320}),qo=({interactive:e,onClick:n,onHoverChange:t,onLongPress:r,longPressDurationMs:a=_o.longPressDurationMs,markerStyle:o})=>{const[i,s]=A.useState(!1),u=A.useRef(void 0),l=A.useRef(!1),d=A.useCallback(()=>{u.current!==void 0&&(window.clearTimeout(u.current),u.current=void 0)},[]),m=A.useCallback(S=>{if(S.stopPropagation(),S.button!==0||!r){d();return}l.current=!1,d(),u.current=window.setTimeout(()=>{l.current=!0,r()},a)},[d,a,r]),c=A.useCallback(()=>{d()},[d]),p=A.useCallback(S=>{if(S.stopPropagation(),l.current){l.current=!1;return}n==null||n()},[n]),y=A.useCallback(()=>{s(!0),t==null||t(!0)},[t]),g=A.useCallback(()=>{d(),s(!1),t==null||t(!1)},[d,t]);return A.useEffect(()=>d,[d]),f.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:f.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${Ot.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:Wr(),boxShadow:i?Vr():"none",filter:i?Ur():"none",...o},onClick:e?p:void 0,onMouseDown:e?m:void 0,onMouseUp:e?c:void 0,onMouseEnter:e?y:void 0,onMouseLeave:e?g:void 0})})};qo.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const gl={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},yl={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},fl={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},pl={GROUND:"ground",COPLANAR:"coplanar"},wo={MIN:1,MAX:1400,LOG_SCALE:64};Object.freeze({layoutConfig:ta(void 0),markerPixelSize:10,markerOutlineWidth:T.sizes.pointOutlineWidth,stemColor:T.colors.surface,activeMoveGizmoLabelZIndex:wo.MAX+1});Object.freeze({...Gr({markerDiameterPx:T.sizes.pointPixelSize,markerStrokeWidthPx:T.sizes.pointOutlineWidth}),tickColor:Ot.colors.surfaceStrong,minOverlayZIndex:Xr.zIndex.interactionHandleFloor});Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:pa(),straightHitTargetPx:20})});function Ie(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Be(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function te(){}var fe=.7,ve=1/fe,Mo=/^#([0-9a-f]{3})$/,Bo=/^#([0-9a-f]{6})$/,Fo=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Do=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,zo=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Ho=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,jo=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,$o=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,It={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ie(te,Wn,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function Wn(e){var n;return e=(e+"").trim().toLowerCase(),(n=Mo.exec(e))?(n=parseInt(n[1],16),new E(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=Bo.exec(e))?At(parseInt(n[1],16)):(n=Fo.exec(e))?new E(n[1],n[2],n[3],1):(n=Do.exec(e))?new E(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=zo.exec(e))?kt(n[1],n[2],n[3],n[4]):(n=Ho.exec(e))?kt(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=jo.exec(e))?Et(n[1],n[2]/100,n[3]/100,1):(n=$o.exec(e))?Et(n[1],n[2]/100,n[3]/100,n[4]):It.hasOwnProperty(e)?At(It[e]):e==="transparent"?new E(NaN,NaN,NaN,0):null}function At(e){return new E(e>>16&255,e>>8&255,e&255,1)}function kt(e,n,t,r){return r<=0&&(e=n=t=NaN),new E(e,n,t,r)}function Vn(e){return e instanceof te||(e=Wn(e)),e?(e=e.rgb(),new E(e.r,e.g,e.b,e.opacity)):new E}function lr(e,n,t,r){return arguments.length===1?Vn(e):new E(e,n,t,r??1)}function E(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}Ie(E,lr,Be(te,{brighter:function(e){return e=e==null?ve:Math.pow(ve,e),new E(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?fe:Math.pow(fe,e),new E(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function Et(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new W(e,n,t,r)}function Wo(e){if(e instanceof W)return new W(e.h,e.s,e.l,e.opacity);if(e instanceof te||(e=Wn(e)),!e)return new W;if(e instanceof W)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,a=Math.min(n,t,r),o=Math.max(n,t,r),i=NaN,s=o-a,u=(o+a)/2;return s?(n===o?i=(t-r)/s+(t<r)*6:t===o?i=(r-n)/s+2:i=(n-t)/s+4,s/=u<.5?o+a:2-o-a,i*=60):s=u>0&&u<1?0:i,new W(i,s,u,e.opacity)}function Vo(e,n,t,r){return arguments.length===1?Wo(e):new W(e,n,t,r??1)}function W(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}Ie(W,Vo,Be(te,{brighter:function(e){return e=e==null?ve:Math.pow(ve,e),new W(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?fe:Math.pow(fe,e),new W(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,a=2*t-r;return new E(yn(e>=240?e-240:e+120,a,r),yn(e,a,r),yn(e<120?e+240:e-120,a,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function yn(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var ur=Math.PI/180,dr=180/Math.PI,Xe=18,cr=.95047,mr=1,gr=1.08883,yr=4/29,be=6/29,fr=3*be*be,Uo=be*be*be;function Un(e){if(e instanceof X)return new X(e.l,e.a,e.b,e.opacity);if(e instanceof Q){var n=e.h*ur;return new X(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof E||(e=Vn(e));var t=Nn(e.r),r=Nn(e.g),a=Nn(e.b),o=fn((.4124564*t+.3575761*r+.1804375*a)/cr),i=fn((.2126729*t+.7151522*r+.072175*a)/mr),s=fn((.0193339*t+.119192*r+.9503041*a)/gr);return new X(116*i-16,500*(o-i),200*(i-s),e.opacity)}function Go(e,n,t,r){return arguments.length===1?Un(e):new X(e,n,t,r??1)}function X(e,n,t,r){this.l=+e,this.a=+n,this.b=+t,this.opacity=+r}Ie(X,Go,Be(te,{brighter:function(e){return new X(this.l+Xe*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new X(this.l-Xe*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=mr*pn(e),n=cr*pn(n),t=gr*pn(t),new E(Cn(3.2404542*n-1.5371385*e-.4985314*t),Cn(-.969266*n+1.8760108*e+.041556*t),Cn(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function fn(e){return e>Uo?Math.pow(e,1/3):e/fr+yr}function pn(e){return e>be?e*e*e:fr*(e-yr)}function Cn(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Nn(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Xo(e){if(e instanceof Q)return new Q(e.h,e.c,e.l,e.opacity);e instanceof X||(e=Un(e));var n=Math.atan2(e.b,e.a)*dr;return new Q(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Yo(e,n,t,r){return arguments.length===1?Xo(e):new Q(e,n,t,r??1)}function Q(e,n,t,r){this.h=+e,this.c=+n,this.l=+t,this.opacity=+r}Ie(Q,Yo,Be(te,{brighter:function(e){return new Q(this.h,this.c,this.l+Xe*(e??1),this.opacity)},darker:function(e){return new Q(this.h,this.c,this.l-Xe*(e??1),this.opacity)},rgb:function(){return Un(this).rgb()}}));var pr=-.14861,Gn=1.78277,Xn=-.29227,en=-.90649,we=1.97294,Lt=we*en,Rt=we*Gn,Pt=Gn*Xn-en*pr;function Ko(e){if(e instanceof ce)return new ce(e.h,e.s,e.l,e.opacity);e instanceof E||(e=Vn(e));var n=e.r/255,t=e.g/255,r=e.b/255,a=(Pt*r+Lt*n-Rt*t)/(Pt+Lt-Rt),o=r-a,i=(we*(t-a)-Xn*o)/en,s=Math.sqrt(i*i+o*o)/(we*a*(1-a)),u=s?Math.atan2(i,o)*dr-120:NaN;return new ce(u<0?u+360:u,s,a,e.opacity)}function Zo(e,n,t,r){return arguments.length===1?Ko(e):new ce(e,n,t,r??1)}function ce(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}Ie(ce,Zo,Be(te,{brighter:function(e){return e=e==null?ve:Math.pow(ve,e),new ce(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?fe:Math.pow(fe,e),new ce(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*ur,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(e),a=Math.sin(e);return new E(255*(n+t*(pr*r+Gn*a)),255*(n+t*(Xn*r+en*a)),255*(n+t*(we*r)),this.opacity)}}));const Cr=lr(k.ACCENT_MEASUREMENTS).brighter(.1);Cr.opacity=.5;const Jo=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:Cr.toString(),colorPrimary:k.ACCENT_MEASUREMENTS,lineColor:T.colors.surface,textColor:he.label.textColor}),_=Object.freeze({scheme:Jo,fontFamily:xe.fontFamily,contentFontWeight:xe.lineLabelFontWeight,badgeFontWeight:xe.badgeFontWeight,selection:he.selection.highlightPalette}),Cl=e=>_,Nl=Object.freeze({fontSize:xe.rootFontSizeRem,fontFamily:_.fontFamily,fontWeight:_.contentFontWeight,lineColor:_.scheme.lineColor,textBackgroundColor:_.scheme.colorPrimaryReduced,textColor:_.scheme.textColor,markerBackgroundColor:_.scheme.colorPrimary,markerTextColor:_.scheme.textColor,selectedBackgroundColor:_.selection.backgroundColor,selectedTextColor:_.selection.textColor,selectedGlowColor:_.selection.glowColor,selectedGlowRadiusPx:_.selection.glowRadiusPx,preserveFillOnSelection:_.selection.preserveFillOnSelection,hoverBackgroundColor:_.selection.hoverBackgroundColor,markerPixelSize:T.sizes.pointPixelSize,markerOutlineWidth:T.sizes.pointOutlineWidth});A.createContext(null);export{ul as $,ei as A,nl as B,Ks as C,Js as D,ni as E,O as F,Sa as G,ba as H,ha as I,Ii as J,To as K,Io as L,pl as M,oa as N,Is as O,yl as P,Xs as Q,gl as R,Ys as S,il as T,ol as U,As as V,Vs as W,fa as X,rl as Y,hs as Z,dl as _,j as a,$n as a0,gn as a1,ml as a2,cl as a3,ks as a4,so as a5,lo as a6,Us as a7,Gs as a8,fl as a9,nr as aa,Aa as ab,Ta as ac,Ts as ad,_ as ae,pe as af,xs as ag,bs as ah,Ss as ai,ue as aj,Ls as ak,oe as al,Nl as am,vs as an,K as ao,Ws as ap,Ds as aq,qs as ar,Es as as,Na as at,ga as au,Bt as av,lr as aw,Wn as ax,qo as ay,Ne as b,ma as c,he as d,Te as e,ii as f,si as g,La as h,ti as i,ai as j,on as k,P as l,T as m,sl as n,mo as o,z as p,tl as q,Cl as r,al as s,xe as t,Le as u,ll as v,b as w,Zs as x,el as y,Qs as z};
