import{j as g}from"./jsx-runtime-DCY474Ph.js";import{F as pe,r as pt,s as yt,t as Ct,u as ft,v as Nt,w as xt,x as bt,y as St,z as ht,A as vt,B as Tt,C as It,D as At}from"./index-B8kvWvtq.js";import{r as T}from"./index-f9CH5uyH.js";import{T as kt}from"./ua-parser-CoZqYcpw.js";import{n as Et,o as Lt,p as Rt}from"./lib-CgELrM4g.js";import{f as Le,C as v,r as Pt}from"./index-l-cOiGX0.js";import"./index-o4jIgCFn.js";import{n as Ot,o as qt,S as Mt,p as Bt,f as _t,q as Bn,s as wt,t as Ft,v as Dt,w as zt,l as Ht}from"./useLineSegmentVisualizers-DISyK7Ov.js";import{C as y,b as We,a3 as jt,n as $t,o as Wt,c as mn,j as Gt,k as Ut}from"./Elevation-BpMX19vt.js";import{c as Vt,a as Xt,b as Yt,d as Kt}from"./useCesiumPointMoveGizmo-BD_L4rUi.js";import"./useCesiumFovWheelZoom-jU1MRybC.js";import"./maplibre-gl-DBjQz0JA.js";import"./geodetic-BlUMYLim.js";import{c as Zt}from"./clamp-co6UzHBn.js";import{e as Jt,h as Qt,i as ea,s as na,f as ta}from"./geometry2d-po7D64Uu.js";import{i as aa}from"./carma-guards-DZTu9-el.js";import{n as _n}from"./angle-normalization-D3Clryc1.js";import{c as gn,P as Q,b as ye}from"./angles-B5wuhJLI.js";import{c as Ge}from"./CoordinateAdapters-CEdXY6Q2.js";/* empty css                                      */import{S as ra}from"./Scene-Ca82XnUG.js";import{r as ia}from"./config-C2KVQAtz.js";import"./svgProjection-DC0AVwLB.js";const Re={de:{backspace:"Rücktaste",escape:"Esc",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Esc",shift:"Shift"}},oa=e=>e||(Et||Lt?"macos":Rt?"windows":"other"),sa=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Re[n]?Re[n]:Re.en},la=(e,n)=>e==="macos"?"⌫":`← ${n.backspace}`,Te={LABEL:"label",VISUALIZER:"visualizer"},ua=Te,Ue=e=>`[${e}="true"]`,pn="data-annotation-label-overlay-root",yn="data-annotation-visualizer-overlay-root",wn="data-annotation-visualizer-overlay-container",da=Ue(wn),ca=Object.freeze({[Te.LABEL]:{rootAttribute:pn,containerAttribute:Ot,rootSelector:Ue(pn),containerSelector:qt},[Te.VISUALIZER]:{rootAttribute:yn,containerAttribute:wn,rootSelector:Ue(yn),containerSelector:da}}),ma=e=>ca[e],ga=(e,n=Te.LABEL)=>{var i,l;const{rootSelector:t,containerSelector:a}=ma(n);let r=e.canvas.parentElement,o=r;for(;r;){if(r.matches(a))return r;const u=(i=r.querySelector)==null?void 0:i.call(r,a);if(u instanceof HTMLElement)return u;if(r.matches(t))return r;const s=(l=r.querySelector)==null?void 0:l.call(r,t);if(s instanceof HTMLElement)return s;o=r,r=r.parentElement}return o},pa=ga,P={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",DELETE:"delete"},q=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),O=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),x=Object.freeze({heading:v.ACCENT_MEASUREMENTS,panelSurface:v.NEUTRAL_SURFACE_SUBTLE,panelBorder:v.NEUTRAL_BORDER_SUBTLE,shadowBase:v.NEUTRAL_BLACK,bodyText:v.NEUTRAL_TEXT_PRIMARY,mutedText:v.NEUTRAL_TEXT_MUTED,linkText:v.WUPP_BLUE,fieldText:v.NEUTRAL_TEXT_STRONG,fieldBorder:v.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:v.NEUTRAL_BORDER_INPUT,fieldFocusBackground:v.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:v.STATE_FOCUS_OUTLINE,titleText:v.NEUTRAL_TEXT_STRONG}),Pe=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),ya=Object.freeze({defaultPixelWidth:430,headingColor:x.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:Le(x.panelSurface,Pe.panelSurface),border:`${O.hairlineBorderWidthRem} solid ${Le(x.panelBorder,Pe.panelBorder)}`,boxShadow:`${Le(x.shadowBase,Pe.panelInsetShadow)} 0 ${O.panelInsetShadowYOffsetRem} ${O.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${O.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${O.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${q.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:v.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${q.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:v.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${q.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:q.rootFontSizeRem,lineHeight:1.4,color:x.bodyText},bodyTextClassName:`text-[${q.rootFontSizeRem}] leading-[1.4] text-[${x.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${x.mutedText}]`,linkTextClassName:`text-[${x.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:v.ACCENT_NEUTRALS,actionIconHoverColor:v.ACCENT_NEUTRALS_HOVER,actionIconFontSize:"16px",hiddenActionIds:[],fieldTextClassName:`text-[${x.fieldText}]`,fieldBorderClassName:`border-[${O.hairlineBorderWidthRem}] border-[${x.fieldBorder}]`,fieldInputBorderClassName:`border-[${O.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${x.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:q.headingFontSizeRem,fontWeight:q.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${x.titleText}]/80 ${q.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${O.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${x.titleText}]/80 placeholder:text-[${x.titleText}]/50 focus:bg-[${x.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}] ${q.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${O.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${x.fieldBorder}] bg-white/85 text-[${x.titleText}]/80 placeholder:text-[${x.titleText}]/80 focus:bg-[${x.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}] ${q.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:q.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${O.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${O.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${O.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}] px-2 py-1`}),ue=e=>({...ya,...e}),ae=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,geometryEpsilonPx:1e-6,geometryEpsilonPxSquared:1e-6**2,polygonAreaEpsilonPx2:1e-6,interiorSampleGridResolution:18,minInteriorSampleGridResolution:6,inwardProbeStepsPx:[.5,1,2,4,8,12,16,24,32],polygonLabelPaddingXPx:6,polygonLabelPaddingYPx:4,polygonLabelMinAreaToLabelRatio:1.15,polylabelPrecisionPx:.5,polylabelMaxCellsToProcess:2e4,minSafeLabelDimensionPx:1}),ji=(e,n,t,a=ae.referenceMinDistancePx,r=ae.referenceMaxDistancePx)=>{const o=Jt({start:e,end:n,epsilon:ae.lineLengthEpsilonPx});if(!o)return null;const i=Qt(t,o.midpoint),u=ea(i,o.leftUnitNormal)>=0?1:-1,s=Zt(o.length*ae.referenceDistanceFactor,a,r),m=na(o.leftUnitNormal,u*s);return ta(o.midpoint,m)},Ca=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:a=ae.insideBlendFactor,elevationEpsilonMeters:r=ae.elevationEpsilonMeters})=>{const o=n<t-r?e.highest:e.aux;return{x:o.x+(e.centroid.x-o.x)*a,y:o.y+(e.centroid.y-o.y)*a}},N={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},fa="select",$i="planar-biggest-triangle",Wi="planar-pca",Gi="planar-trapezoid",Fn=e=>e===N.AREA_GROUND||e===N.AREA_VERTICAL||e===N.AREA_PLANAR,Na=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},Ve=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[N.AREA_VERTICAL]:[112,168,255],[N.AREA_GROUND]:[107,188,123],[N.AREA_PLANAR]:[239,223,145]}}),Dn=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,nn=e=>Ve.rgb255ByType[e],Ui=(e,n)=>Dn(nn(e),n?Ve.selectedFillAlpha:Ve.fillAlpha),xa=(e,n)=>Dn(nn(e),n),k={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},z=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},measurementTextRgb255:[248,250,252],shortLabelRgb255ByType:{[N.POINT]:[200,200,200],[N.DISTANCE]:[102,126,234],[N.POLYLINE]:[226,178,60],[N.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[k.DIRECT]:[255,255,255],[k.VERTICAL]:[111,168,255],[k.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),$=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[N.POINT]:.92,[N.DISTANCE]:.95,[N.POLYLINE]:.95,[N.LABEL]:.95,area:.95},lineComponentByKind:{[k.DIRECT]:1,[k.VERTICAL]:.96,[k.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[k.DIRECT]:.34,[k.VERTICAL]:.54,[k.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),W=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,U=(e,n=$.alpha.text[e])=>W(z.textRgb255[e],n),he=(e=$.alpha.surfaceStroke)=>W(z.surfaceRgb255.stroke,e),ba=(e=$.alpha.surfaceStroke)=>W(z.surfaceRgb255.accent,e),Oe=(e,n=$.alpha.lineComponentByKind[e])=>W(z.lineComponentRgb255ByKind[e],n),qe=(e,n=$.alpha.lineComponentLabelAccentByKind[e])=>W(z.lineComponentRgb255ByKind[e],n),V=e=>Fn(e)?xa(e,$.alpha.shortLabelBackgroundByType.area):W(z.shortLabelRgb255ByType[e],$.alpha.shortLabelBackgroundByType[e]),Vi=e=>Fn(e)?nn(e):z.shortLabelRgb255ByType[e],Cn=(e,n=$.alpha.selection[e])=>W(z.selectionRgb255[e],n),Sa=(e=1)=>W(z.measurementTextRgb255,e),Y=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),H={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},ha={[N.POINT]:{prefix:"",counterStyle:H.NUMERIC,backgroundColor:V(N.POINT),textColor:U("dark")},[N.DISTANCE]:{prefix:"",counterStyle:H.ALPHABETIC,backgroundColor:V(N.DISTANCE),textColor:U("light")},[N.POLYLINE]:{prefix:"L",counterStyle:H.NUMERIC,backgroundColor:V(N.POLYLINE),textColor:U("dark")},[N.AREA_GROUND]:{prefix:"A",counterStyle:H.NUMERIC,backgroundColor:V(N.AREA_GROUND),textColor:U("light")},[N.AREA_PLANAR]:{prefix:"D",counterStyle:H.NUMERIC,backgroundColor:V(N.AREA_PLANAR),textColor:U("light")},[N.AREA_VERTICAL]:{prefix:"F",counterStyle:H.NUMERIC,backgroundColor:V(N.AREA_VERTICAL),textColor:U("light")},[N.LABEL]:{prefix:"T",counterStyle:H.NUMERIC,backgroundColor:V(N.LABEL),textColor:U("light")}},Xi=(e,n,t=ha)=>{const a=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,o=a.counterStyle===H.ALPHABETIC?Na(r-1):`${r}`;return`${a.prefix}${o}`},tn=1e-12,va=1e-6,Yi=(e,n)=>e.map(t=>y.add(t,n,new y)),Ta=(e,n,t=new y)=>{const a=y.magnitudeSquared(n);if(a<=tn)return y.clone(e,t);const r=y.dot(e,n)/a;return y.subtract(e,y.multiplyByScalar(n,r,new y),t)},Ia=(e,n,t,a=new y)=>{const r=y.magnitudeSquared(t);if(r<=tn)return y.clone(e,a);const o=y.subtract(e,n,new y),i=y.dot(o,t)/r;return y.subtract(e,y.multiplyByScalar(t,i,new y),a)},Ki=(e,n,t)=>{const a=y.magnitude(t);if(a<=va)return 0;const r=y.subtract(e,n,new y);return y.dot(r,t)/a},Aa=(e,n,t,a=new y)=>{const r=y.subtract(n,e,new y),o=y.subtract(t,e,new y),i=y.cross(r,o,a);return y.magnitudeSquared(i)<=tn?null:y.normalize(i,a)},ka=0,Ea=e=>e??ka,La=e=>({longitude:gn(e.longitude),latitude:gn(e.latitude),altitude:e.height}),Ra=e=>{const n=We.fromCartesian(e);return La(n)},fn=Object.freeze({componentEpsilonMeters:.05}),Pa=(e,n,t)=>{const a=Aa(e,n,t);return a?{anchorECEF:y.clone(e),normalECEF:a}:null},Nn=(e,n)=>Ia(e,n.anchorECEF,n.normalECEF),zn=(e,n)=>{const t=jt(e),a=y.subtract(n,e,new y),r=y.dot(a,t),o=y.multiplyByScalar(t,r,new y),i=Ta(a,t),l=y.magnitude(i),u=Math.abs(r);if(l<fn.componentEpsilonMeters||u<fn.componentEpsilonMeters)return null;const s=y.add(e,i,new y),m=y.add(e,o,new y),c=y.add(e,t,new y),p=Pa(e,c,s);return{adjacentHorizontalCorner:p?Nn(s,p):s,adjacentVerticalCorner:p?Nn(m,p):m}},Zi=(e,n)=>{const t=zn(e,n);if(!t)return 0;const a=y.distance(e,t.adjacentHorizontalCorner),r=y.distance(e,t.adjacentVerticalCorner);return a*r},Oa=Object.freeze({tooltipZIndex:1700}),K=({actionId:e,title:n,icon:t,onClick:a,dataTestId:r,className:o,ariaLabel:i,disabled:l=!1,visualOptions:u})=>{var f;const s=ue(u),[m,c]=T.useState(!1),p=`${s.actionIconClassName}${o?` ${o}`:""}${l?" cursor-not-allowed opacity-50":" cursor-pointer"}`,d={fontSize:s.actionIconFontSize,color:m&&!l?s.actionIconHoverColor:s.actionIconColor},C=(f=s.renderActionIcon)==null?void 0:f.call(s,{actionId:e,icon:t,className:p,style:d,dataTestId:r,ariaLabel:i,disabled:l});return g.jsx(kt,{title:n,zIndex:Oa.tooltipZIndex,getPopupContainer:I=>{const S=I instanceof HTMLElement?I:document.body;return s.resolveActionTooltipPopupContainer(S)},children:g.jsx("span",{onClick:I=>{if(l){I.stopPropagation();return}a(I)},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),className:"inline-flex items-center leading-none","aria-label":i,"aria-disabled":l,children:C??g.jsx(pe,{className:p,style:d,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};K.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
}>`},description:""}}};const qa=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),Ma=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:a,onExport:r,onToggleVisibility:o,onToggleLock:i,onDelete:l,onSetReference:u,visualOptions:s,dataTestIdPrefix:m,dataTestIds:c})=>{const p={...qa,...t},d=new Set((s==null?void 0:s.hiddenActionIds)??[]),C=f=>!d.has(f);return g.jsxs("div",{className:"flex items-center gap-2",children:[C(P.FLY_TO)?g.jsx(K,{actionId:P.FLY_TO,title:p.flyTo,icon:pt,onClick:a,dataTestId:(c==null?void 0:c.flyTo)??`${m}-flyto-btn`,visualOptions:s}):null,C(P.EXPORT)?g.jsx(K,{actionId:P.EXPORT,title:p.exportGeoJson,icon:yt,onClick:r,dataTestId:(c==null?void 0:c.export)??`${m}-export-geojson-btn`,visualOptions:s}):null,C(P.VISIBILITY)?g.jsx(K,{actionId:P.VISIBILITY,title:e?p.show:p.hide,icon:e?Ct:ft,onClick:o,dataTestId:(c==null?void 0:c.visibility)??`${m}-toggle-visibility-btn`,visualOptions:s}):null,u&&C(P.REFERENCE)?g.jsx(K,{actionId:P.REFERENCE,title:p.setReference,icon:Nt,onClick:u,dataTestId:(c==null?void 0:c.reference)??`${m}-set-reference-btn`,visualOptions:s}):null,C(P.LOCK)?g.jsx(K,{actionId:P.LOCK,title:n?p.unlock:p.lock,icon:n?xt:bt,onClick:i,dataTestId:(c==null?void 0:c.lock)??`${m}-toggle-lock-btn`,visualOptions:s}):null,C(P.DELETE)?g.jsx(K,{actionId:P.DELETE,title:n?p.deleteLocked:p.delete,icon:St,onClick:l,dataTestId:(c==null?void 0:c.delete)??`${m}-delete-btn`,disabled:n,visualOptions:s}):null]})};Ma.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
}>`},description:""}}};const re={TEXT:"text",ACTION:"action",ALERT:"alert"},te={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift"},Ce={INFO:"info",WARNING:"warning"},J={INFO:"info",WARNING:"warning"},B={STANDARD:"standard",COMPACT:"compact"},Ba="#00d9ff",_a="rgba(0, 217, 255, 0.2)",wa="#004b5c",Fa="#ef4444",Da="rgba(239, 68, 68, 0.18)",za="#7f1d1d",Ha=()=>typeof navigator>"u"?void 0:navigator.language,Me={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},ja=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Me[n]?Me[n]:Me.en},Hn={margin:"0 0 0.9rem"},Ie="1em",jn="max-content minmax(0, 1fr)",$a={display:"grid",gridTemplateColumns:jn,columnGap:Ie,rowGap:"0.58rem",alignItems:"start"},Wa={...Hn,gridColumn:"1 / -1"},$n={[B.STANDARD]:{display:"grid",gridTemplateColumns:jn,columnGap:Ie,alignItems:"baseline",margin:"0 0 0.58rem",lineHeight:1.28},[B.COMPACT]:{display:"contents"}},an={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22rem",whiteSpace:"nowrap"},Xe={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.2rem",whiteSpace:"nowrap"},Ga={lineHeight:1},Ye={[J.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:_a,color:wa},[J.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Da,color:za}},Ua={[J.INFO]:{...Ye[J.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Ie,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[J.WARNING]:{...Ye[J.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Ie,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},Va={minWidth:0,fontWeight:600,lineHeight:1.28},Xa={[B.STANDARD]:{minWidth:0,whiteSpace:"nowrap"},[B.COMPACT]:{minWidth:0,lineHeight:1.28}},Ya=e=>e===B.COMPACT?e:B.STANDARD,Ka=e=>typeof e=="string"||e.kind===re.TEXT,xn=e=>typeof e!="string"&&e.kind===re.ALERT,Za=e=>{const n=e.findIndex(Ka);if(n<=0)return e;const t=e.slice(0,n),a=t.filter(xn);return a.length===0?e:[...t.filter(r=>!xn(r)),e[n],...a,...e.slice(n+1)]},Wn={display:"inline-flex",minWidth:"1.85rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:"0.74em",fontWeight:700,lineHeight:1,padding:"0.16rem 0.32rem"},Ja={...Wn,gap:"0.22rem"},Qa={display:"inline-flex",minWidth:"1.35rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",lineHeight:1},er={[Ce.INFO]:{color:Ba},[Ce.WARNING]:{color:Fa}},xe=(e,n)=>{const t=typeof e=="string"?e:e.text;return g.jsx("p",{style:n===B.COMPACT?Wa:Hn,children:t},t)},ve=e=>g.jsx("span",{style:Wn,children:e}),bn=e=>g.jsxs("span",{style:Ja,children:[g.jsx(pe,{icon:Tt}),g.jsx("span",{children:e})]}),Ke=e=>g.jsx("span",{style:Qa,children:g.jsx(pe,{style:er[e],icon:e===Ce.WARNING?ht:vt})}),nr=e=>Ke(e===J.WARNING?Ce.WARNING:Ce.INFO),tr=(e,n)=>ve(la(e,n)),ar=(e,n,t,a)=>{switch(e){case te.CLICK:return bn(a.click);case te.DOUBLE_CLICK:return bn(a.doubleClick);case te.ENTER:return ve("Enter");case te.BACKSPACE:return tr(t,n);case te.ESCAPE:return ve(n.escape);case te.SHIFT:return ve(n.shift)}},Sn=(e,n,t,a)=>g.jsx("span",{style:an,children:e.map((r,o)=>g.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[o>0?g.jsx("span",{children:"+"}):null,ar(r,n,t,a)]},`${r}-${o}`))}),rr=(e,n,t,a,r,o)=>o===B.COMPACT?g.jsxs("span",{style:Xe,children:[e?Ke(e):null,n.map((i,l)=>g.jsxs("span",{style:Xe,children:[l>0?g.jsx("span",{style:Ga,children:r.alternative}):null,Sn(i,t,a,r)]},`${i.join("+")}-${l}`))]}):g.jsxs("span",{style:an,children:[e?Ke(e):null,n.map((i,l)=>g.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[l>0?g.jsx("span",{children:r.alternative}):null,Sn(i,t,a,r)]},`${i.join("+")}-${l}`))]}),Ze=(e,n,t,a,r,o)=>g.jsxs("div",{"data-testid":"annotation-help-action",style:$n[o],children:[rr(e.indicator,e.inputAlternatives,t,a,r,o),g.jsx("span",{style:Xa[o],children:e.description})]},`${e.inputAlternatives.map(i=>i.join("+")).join("-")}-${n}`),hn=(e,n,t,a,r,o)=>{const i=e.actions??[],l=o===B.COMPACT?Ua[e.severity]:Ye[e.severity];return g.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:l,children:[g.jsxs("div",{style:$n[o],children:[g.jsx("span",{style:o===B.COMPACT?Xe:an,children:nr(e.severity)}),g.jsx("span",{style:Va,children:e.text})]}),i.map((u,s)=>Ze(u,s,t,a,r,o))]},`${e.severity}-${e.text}-${n}`)},ir=({items:e,layout:n,locale:t,platform:a})=>{const r=Ya(n),o=t??Ha(),i=sa(o),l=oa(a),u=ja(o),s=Za(e);if(r===B.COMPACT){const c=s.map((p,d)=>typeof p=="string"||p.kind===re.TEXT?xe(p,r):p.kind===re.ALERT?hn(p,d,i,l,u,r):Ze(p,d,i,l,u,r));return g.jsx("div",{"data-testid":"annotation-help-content",style:$a,children:c})}const m=s.map((c,p)=>typeof c=="string"||c.kind===re.TEXT?xe(c,r):c.kind===re.ALERT?hn(c,p,i,l,u,r):Ze(c,p,i,l,u,r));return g.jsx(g.Fragment,{children:m})};ir.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""}}};const or=({items:e,className:n,visualOptions:t})=>{const a=ue(t),r=a.subtitleTextClassName.split(/\s+/).filter(o=>o.length>0&&!o.startsWith("px-")).join(" ");return g.jsx("dl",{className:`flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((o,i)=>g.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[g.jsx("dt",{className:r,style:a.subtitleTextStyle,children:o.label}),g.jsx("dd",{className:"m-0 leading-[1.25]",children:o.value})]},o.id??i))})};or.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const sr=({children:e,className:n,style:t,visualOptions:a})=>{const r=ue(a);return g.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};sr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const lr=Object.freeze({measurementSingular:"Messung",measurementPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),vn=(e,n)=>`${e} ${e===1?n.measurementSingular:n.measurementPlural} ${n.availableSuffix}`.trim(),ur=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:a,labels:r,onFlyToAllMeasurements:o,onPreviousMeasurement:i,onNextMeasurement:l,visualOptions:u})=>{var C,f;const s=ue(u),m={...lr,...r};if(e<=0&&!t)return null;const c={fontSize:s.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},p=((C=s.navigationControlLabels)==null?void 0:C.previous)??g.jsx(pe,{icon:It}),d=((f=s.navigationControlLabels)==null?void 0:f.next)??g.jsx(pe,{icon:At});return g.jsxs(g.Fragment,{children:[t?g.jsx("div",{className:`${s.navigationInstructionContainerClassName} ${s.mutedTextClassName}`,children:g.jsx("span",{children:t})}):null,e>0?g.jsx("div",{className:s.navigationAvailabilityContainerClassName,children:o?g.jsx("button",{type:"button",className:`${s.linkTextClassName} cursor-pointer`,onClick:o,style:{border:"none",background:"transparent",padding:0},children:a??vn(e,m)}):g.jsx("span",{className:s.linkTextClassName,children:a??vn(e,m)})}):null,e>0?g.jsxs("div",{className:s.navigationSummaryContainerClassName,children:[g.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${s.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:c,"aria-label":m.previousAriaLabel,children:p}),g.jsxs("span",{className:"mx-4",children:[n+1," ",m.counterSeparator," ",e]}),g.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${s.linkTextClassName}`,onClick:l,"data-test-id":"switch-measurement-right",style:c,"aria-label":m.nextAriaLabel,children:d})]}):null]})};ur.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  measurementSingular: string;
  measurementPlural: string;
  availableSuffix: string;
  previousAriaLabel: string;
  nextAriaLabel: string;
  counterSeparator: string;
}`,signature:{properties:[{key:"measurementSingular",value:{name:"string",required:!0}},{key:"measurementPlural",value:{name:"string",required:!0}},{key:"availableSuffix",value:{name:"string",required:!0}},{key:"previousAriaLabel",value:{name:"string",required:!0}},{key:"nextAriaLabel",value:{name:"string",required:!0}},{key:"counterSeparator",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  measurementSingular: string;
  measurementPlural: string;
  availableSuffix: string;
  previousAriaLabel: string;
  nextAriaLabel: string;
  counterSeparator: string;
}>`}],raw:"Partial<AnnotationInfoBoxNavigationLabels>"},description:""},onFlyToAllMeasurements:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPreviousMeasurement:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextMeasurement:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
}>`},description:""}}};const dr=({children:e,className:n,style:t,visualOptions:a})=>{const r=ue(a);return g.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};dr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const ge=e=>e.trim(),w=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),be=e=>ge(e).slice(0,w.shortLabelMaxLength),cr=e=>e.slice(0,w.shortLabelMaxLength),mr=({value:e,placeholder:n,onCommit:t,shortLabelValue:a,shortLabelPlaceholder:r,onShortLabelCommit:o,visualOptions:i})=>{const l=ue(i),[u,s]=T.useState(()=>ge(e)),[m,c]=T.useState(()=>be(a??"")),p=T.useRef(null),d=T.useRef(null),C=w.shortLabelMaxLength+w.shortLabelWidthPaddingCh,f=Math.min(Math.max(ge(m||r||"").length+w.shortLabelWidthPaddingCh,w.shortLabelMinWidthCh),C);T.useEffect(()=>{s(ge(e))},[e]),T.useEffect(()=>{c(be(a??""))},[a]);const I=h=>{const R=ge(h);s(R),t(R)},S=h=>{if(!o)return;const R=be(h);if(!R){const gt=be(a??"");c(gt);return}c(R),o(R)},L=h=>{h.stopPropagation()},ut=h=>{var R;h.key==="Enter"&&(h.preventDefault(),(R=p.current)==null||R.blur())},dt=h=>{var R;h.key==="Enter"&&(h.preventDefault(),(R=d.current)==null||R.blur())},ct={...l.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},mt={...l.titleTextStyle,borderRadius:w.borderRadiusRem,flex:"0 1 auto",width:`${f}ch`,minWidth:`${w.shortLabelMinWidthCh}ch`,maxWidth:`min(${C}ch, 100%)`,fieldSizing:"content"};return g.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:L,onClick:L,children:[g.jsx("input",{ref:p,type:"text",value:u,placeholder:n,className:l.titleInputClassName,style:ct,onMouseDown:L,onClick:L,onChange:h=>s(h.target.value),onBlur:h=>I(h.target.value),onKeyDown:ut}),o?g.jsx("input",{ref:d,type:"text",value:m,placeholder:r,maxLength:w.shortLabelMaxLength,className:l.shortLabelInputClassName,style:mt,onMouseDown:L,onClick:L,onChange:h=>c(cr(h.target.value)),onBlur:h=>S(h.target.value),onKeyDown:dt}):null]})};mr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"defaultPixelWidth",value:{name:"number",required:!0}},{key:"headingColor",value:{name:"string",required:!0}},{key:"headerStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyPanelStyle",value:{name:"CSSProperties",required:!0}},{key:"resolveActionTooltipPopupContainer",value:{name:"signature",type:"function",raw:"(triggerNode: HTMLElement) => HTMLElement",signature:{arguments:[{type:{name:"HTMLElement"},name:"triggerNode"}],return:{name:"HTMLElement"}},required:!0}},{key:"headerForegroundClassName",value:{name:"string",required:!0}},{key:"headerTitleClassName",value:{name:"string",required:!0}},{key:"subtitleContainerClassName",value:{name:"string",required:!0}},{key:"subtitleTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleTextClassName",value:{name:"string",required:!0}},{key:"subtitleMetaTextStyle",value:{name:"CSSProperties",required:!0}},{key:"subtitleMetaTextClassName",value:{name:"string",required:!0}},{key:"showSubtitleMetaText",value:{name:"boolean",required:!0}},{key:"bodyContainerClassName",value:{name:"string",required:!0}},{key:"bodyTextStyle",value:{name:"CSSProperties",required:!0}},{key:"bodyTextClassName",value:{name:"string",required:!0}},{key:"emptyContentLineStyle",value:{name:"CSSProperties",required:!0}},{key:"emptyContentLineClassName",value:{name:"string",required:!0}},{key:"mutedTextClassName",value:{name:"string",required:!0}},{key:"linkTextClassName",value:{name:"string",required:!0}},{key:"actionIconClassName",value:{name:"string",required:!0}},{key:"actionIconColor",value:{name:"string",required:!0}},{key:"actionIconHoverColor",value:{name:"string",required:!0}},{key:"actionIconFontSize",value:{name:"string",required:!0}},{key:"hiddenActionIds",value:{name:"unknown",required:!0}},{key:"renderActionIcon",value:{name:"signature",type:"function",raw:`(
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
}>`},description:""}}};const Be=e=>e.reduce((n,t)=>{const a=t.match(/(\d+)$/),r=a?Number(a[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),Ji=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),Z=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),a=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(l=>t.has(l))))})).filter(i=>i.nodeIds.length>0),r=new Set(a.flatMap(i=>i.nodeIds)),o=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...a,...o]},Tn=6378137,gr=.1,_e=e=>e*Math.PI/180,pr=(e,n)=>{const t=_e(n.latitude-e.latitude),a=_e(n.longitude-e.longitude),r=_e((e.latitude+n.latitude)/2),o=a*Math.cos(r)*Tn,i=t*Tn,l=n.altitude-e.altitude;return Math.hypot(o,i,l)},yr=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,Cr=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:a,linkToNodeId:r})=>{const o=e.find(d=>d.id===t)??null,i=Array.from(new Set(a.filter(Boolean)));if(!o||i.length===0)return[...n];const l=new Set(i),u=n.find(d=>d.nodeIds.includes(t))??null,s=yr(r),m=s&&!l.has(s)?n.find(d=>d.nodeIds.includes(s))??null:null;return m&&!m.nodeIds.some(d=>l.has(d))?Z({nodes:e,nodeLinks:n.map(d=>d.id===m.id?{...d,nodeIds:Array.from(new Set([...d.nodeIds,...i]))}:{...d,nodeIds:d.nodeIds.filter(C=>!l.has(C))})}):!u||i.length===u.nodeIds.length?[...n]:e.filter(d=>u.nodeIds.includes(d.id)&&!l.has(d.id)).some(d=>pr(d.coordinate,o.coordinate)>gr)?Z({nodes:e,nodeLinks:n.map(d=>d.id===u.id?{...d,nodeIds:d.nodeIds.filter(C=>!l.has(C))}:{...d})}):[...n]},fr=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:a,selectedMeasurementIds:r=[],preferredMovedNodeIds:o})=>{const i=n.find(f=>f.id===e)??null;if(!i)return{targetNode:null,targetLinkedNodeGroup:null,movedNodeIds:[]};const l=t.find(f=>f.nodeIds.includes(e))??null,u=(l==null?void 0:l.nodeIds)??[e],s=Array.from(new Set((o??[]).filter(f=>u.includes(f)))),m=new Set(r.filter(Boolean)),c=new Set(a.filter(f=>m.has(f.id)).flatMap(f=>f.nodeIds)),p=u.filter(f=>c.has(f)),d=s.length>0?s:p.length>0?p:[...u],C=new Set(a.filter(f=>f.locked).flatMap(f=>f.nodeIds));return{targetNode:i,targetLinkedNodeGroup:l,movedNodeIds:d.filter(f=>!C.has(f))}},Nr=(e={})=>{const{initialToolType:n=fa,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},xr=({nodeIds:e,closed:n,nextEdgeNumericSuffix:t})=>{const a=[];let r=t;for(let l=0;l<e.length-1;l+=1){const u=e[l],s=e[l+1];!u||!s||(r+=1,a.push({id:`edge-${r}`,startNodeId:u,endNodeId:s}))}const o=e[0],i=e[e.length-1];return n&&e.length>=3&&o&&i&&(r+=1,a.push({id:`edge-${r}`,startNodeId:i,endNodeId:o})),a},br=Vt({name:"annotationsRuntime",initialState:Nr(),reducers:{replaceState:(e,n)=>n.payload,setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},setNextShortLabelCounterByToolType:(e,n)=>{e.settingsState.nextShortLabelCounterByToolType={...e.settingsState.nextShortLabelCounterByToolType,[n.payload.toolType]:Math.max(1,n.payload.nextCounter)}},setSelectedAnnotationId:(e,n)=>{const t=n.payload,a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t?[t]:[],e.infoBoxState.activeAnnotationId=t},setSelectedAnnotationIds:(e,n)=>{const t=Array.from(new Set(n.payload.filter(Boolean))),a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t,e.infoBoxState.activeAnnotationId=t[t.length-1]??null},appendAnnotationEntities:(e,n)=>{if(e.nodes.push(...n.payload.nodes),n.payload.linkedNodeGroups.forEach(t=>{const a=e.linkedNodeGroups.find(r=>r.id===t.id);if(!a){e.linkedNodeGroups.push({id:t.id,nodeIds:[...t.nodeIds]});return}a.nodeIds=Array.from(new Set([...a.nodeIds,...t.nodeIds]))}),e.edges.push(...n.payload.edges),e.annotationEntries.push({...n.payload.annotationEntry,nodeIds:[...n.payload.annotationEntry.nodeIds],edgeIds:[...n.payload.annotationEntry.edgeIds]}),e.linkedNodeGroups=Z({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),n.payload.selectAnnotationId!==void 0){const t=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=t,e.selectionState.selectedAnnotationIds=n.payload.selectAnnotationId?[n.payload.selectAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.selectAnnotationId??null}},removeAnnotationById:(e,n)=>{const{annotationId:t,nextSelectedAnnotationId:a}=n.payload,r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(s=>s.id===t))return;e.annotationEntries=e.annotationEntries.filter(s=>s.id!==t);const i=new Set(e.annotationEntries.flatMap(s=>s.nodeIds)),l=new Set(e.annotationEntries.flatMap(s=>s.edgeIds));if(e.nodes=e.nodes.filter(s=>i.has(s.id)),e.linkedNodeGroups=Z({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(s=>l.has(s.id)),e.selectionState.previousSelectedAnnotationId=r,e.settingsState.elevationReferenceAnnotationId===t&&(e.settingsState.elevationReferenceAnnotationId=null),a!==void 0){e.selectionState.selectedAnnotationIds=a?[a]:[],e.infoBoxState.activeAnnotationId=a??null;return}const u=e.selectionState.selectedAnnotationIds.filter(s=>s!==t);e.selectionState.selectedAnnotationIds=u,e.infoBoxState.activeAnnotationId=u[u.length-1]??null},removeAnnotationsByIds:(e,n)=>{const t=new Set(n.payload.annotationIds);if(t.size===0)return;const a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(u=>t.has(u.id)))return;e.annotationEntries=e.annotationEntries.filter(u=>!t.has(u.id));const o=new Set(e.annotationEntries.flatMap(u=>u.nodeIds)),i=new Set(e.annotationEntries.flatMap(u=>u.edgeIds));if(e.nodes=e.nodes.filter(u=>o.has(u.id)),e.linkedNodeGroups=Z({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(u=>i.has(u.id)),e.selectionState.previousSelectedAnnotationId=a,e.settingsState.elevationReferenceAnnotationId&&t.has(e.settingsState.elevationReferenceAnnotationId)&&(e.settingsState.elevationReferenceAnnotationId=null),n.payload.nextSelectedAnnotationId!==void 0){e.selectionState.selectedAnnotationIds=n.payload.nextSelectedAnnotationId?[n.payload.nextSelectedAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.nextSelectedAnnotationId??null;return}const l=e.selectionState.selectedAnnotationIds.filter(u=>!t.has(u));e.selectionState.selectedAnnotationIds=l,e.infoBoxState.activeAnnotationId=l[l.length-1]??null},updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:a,selectedMeasurementIds:r=[],movedNodeIds:o,linkToNodeId:i}=n.payload,{targetNode:l,movedNodeIds:u}=fr({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedMeasurementIds:r,preferredMovedNodeIds:o});if(!l)return;const s=new Set(u);u.length!==0&&(e.nodes.forEach(m=>{s.has(m.id)&&(m.coordinate=a)}),e.linkedNodeGroups=Cr({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:l.id,movedNodeIds:u,linkToNodeId:i}))},insertNodeIntoMeasurementEdge:(e,n)=>{const{measurementId:t,startNodeId:a,endNodeId:r,coordinate:o}=n.payload,i=e.annotationEntries.find(S=>S.id===t);if(!i)return;const l=i.nodeIds.findIndex((S,L)=>S===a&&i.nodeIds[L+1]===r),u=l>=0?l+1:i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===a&&i.nodeIds[0]===r?i.nodeIds.length:-1;if(u<0)return;const s=new Map(e.edges.map(S=>[S.id,S])),m=i.edgeIds.findIndex(S=>{const L=s.get(S);return(L==null?void 0:L.startNodeId)===a&&L.endNodeId===r}),c=m>=0?i.edgeIds[m]:null,p=c?s.get(c):void 0;if(!p||m<0)return;const d=`node-${Be(e.nodes.map(S=>S.id))+1}`,C=`edge-${Be(e.edges.map(S=>S.id))+1}`;e.nodes.push({id:d,coordinate:o}),e.linkedNodeGroups=Z({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:d,nodeIds:[d]}]}),p.endNodeId=d;const f={id:C,startNodeId:d,endNodeId:r},I=e.edges.findIndex(S=>S.id===c);I>=0?e.edges.splice(I+1,0,f):e.edges.push(f),i.nodeIds=[...i.nodeIds.slice(0,u),d,...i.nodeIds.slice(u)],i.edgeIds=[...i.edgeIds.slice(0,m+1),C,...i.edgeIds.slice(m+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:a}=n.payload,r=e.annotationEntries.find(s=>s.id===t);if(!r||!r.nodeIds.includes(a))return;const o=r.nodeIds.filter(s=>s!==a);if(o.length===r.nodeIds.length)return;const i=new Set(r.edgeIds),l=xr({nodeIds:o,closed:!!r.closed,nextEdgeNumericSuffix:Be(e.edges.map(s=>s.id))});r.nodeIds=o,r.edgeIds=l.map(s=>s.id),e.edges=[...e.edges.filter(s=>!i.has(s.id)),...l];const u=new Set(e.annotationEntries.flatMap(s=>s.nodeIds));e.nodes=e.nodes.filter(s=>u.has(s.id)),e.linkedNodeGroups=Z({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:a,shortLabel:r,hidden:o,locked:i,annotationRole:l,readOnly:u,labelAppearance:s,elevationDisplayMode:m,distanceAnchorCoordinateSelection:c,distanceTriangleAnchorCoordinateRole:p}=n.payload,d=e.annotationEntries.find(C=>C.id===t);d&&(a!==void 0&&(d.displayName=a),r!==void 0&&(d.shortLabel=r),o!==void 0&&(d.hidden=o),i!==void 0&&(d.locked=i),l!==void 0&&(d.annotationRole=l),u!==void 0&&(d.readOnly=u),s!==void 0&&(d.labelAppearance={...d.labelAppearance??{},...s}),m!==void 0&&(d.elevationDisplayMode=m),c!==void 0&&(d.distanceAnchorCoordinateSelection=c),p!==void 0&&(d.distanceTriangleAnchorCoordinateRole=p))}}}),{appendAnnotationEntities:Qi,removeAnnotationById:eo,removeAnnotationsByIds:no,removeNodeFromAnnotation:to,setElevationReferenceAnnotationId:ao,setNextShortLabelCounterByToolType:ro,setPointTemporaryMode:io,insertNodeIntoMeasurementEdge:oo,updateNodeCoordinateById:so,updateAnnotationEntryById:lo,replaceState:uo,setAnnotationToolType:co,setSelectedAnnotationId:mo,setSelectedAnnotationIds:go}=br.actions,rn=T.createContext(null);Xt(rn);const Sr=Yt(rn);Kt(rn);const po=()=>Sr(),Je=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8"}),hr=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,vr=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},yo=(e,n=Je)=>({strokeWidthPx:hr(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:vr(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern)}),In=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),b={colors:{neutral:he(1),accent:he(1),preview:he(In.previewAlpha),surface:Pt(In.surfaceAlpha),transparent:"transparent",components:{direct:Oe(k.DIRECT),vertical:Oe(k.VERTICAL),horizontal:Oe(k.HORIZONTAL)},componentLabelAccents:{direct:qe(k.DIRECT),vertical:qe(k.VERTICAL),horizontal:qe(k.HORIZONTAL)}},sizes:{edgeStrokeWidth:Je.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:Je.overlayDashPattern}},Gn=Object.freeze({edge:Object.freeze({stroke:b.colors.accent,strokeWidth:b.sizes.edgeStrokeWidth,overlayDashPattern:b.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:b.sizes.pointPixelSize,fill:b.colors.transparent,outline:b.colors.surface,outlineWidth:b.sizes.pointOutlineWidth})}),Un=Object.freeze({edge:Object.freeze({stroke:b.colors.neutral}),point:Object.freeze({outline:b.colors.neutral})}),Tr=(e,n={})=>({...e,...n}),Ir=(e,n={})=>({...e,...n}),Co=e=>Tr(e,Un.edge),fo=e=>Ir(e,Un.point),Qe={DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"},Ar=Y.fontSizePx.pointLabel,kr=e=>`${e/Ar}rem`,ie=Object.freeze({fontFamily:Y.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:kr(Y.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:Y.fontWeight.medium,badgeFontWeight:Y.fontWeight.medium,headingFontWeight:Y.fontWeight.semibold,sectionTitleFontWeight:Y.fontWeight.semibold}),Er={SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"},Lr={NONE:"none",MOVE_ON_LINE:"move-on-line"},M=Object.freeze({appearance:Object.freeze({themeStyle:Qe.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:ie.fontFamily,fontWeight:ie.lineLabelFontWeight}),background:Object.freeze({style:Er.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:Lr.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),se=Object.freeze({horizontalLabelOffsetPx:7,verticalFlippedBaselineOffsetPx:6,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5,upperSideGapFactor:.15,upperSideGapNormalYEpsilon:.001}),on=e=>{var n,t;return{appearance:{...M.appearance,...e==null?void 0:e.appearance},text:{...M.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&M.text.echo===void 0?void 0:{...M.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...M.background,...e==null?void 0:e.background},surface:{...M.surface,...e==null?void 0:e.surface},layout:{...M.layout,...e==null?void 0:e.layout},collision:{...M.collision,...e==null?void 0:e.collision}}},D=Object.freeze({lineStrokeWidthPx:b.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:8,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,labelReferenceLineLengthEpsilonPx:.001,labelReferenceDistanceFactor:.2,labelReferenceMinDistancePx:24,labelReferenceMaxDistancePx:48,labelReferenceInsideBlendFactor:.35,labelSideSwitchThresholdPx:4,directLineColor:b.colors.components.direct,verticalLineColor:b.colors.components.vertical,horizontalLineColor:b.colors.components.horizontal,draftChainColor:b.colors.preview}),ce=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),Se=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),Rr=Object.freeze({fontSize:"20px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:12,textEchoShadow:"0 0 4px rgba(2, 6, 23, 0.8), 0 0 12px rgba(2, 6, 23, 0.77), 0 0 24px rgba(2, 6, 23, 0.64)"}),Pr=Object.freeze({[Qe.BRIGHT_ON_DARK]:"15, 23, 42",[Qe.DARK_ON_BRIGHT]:"255, 255, 255"}),me=(e,n)=>{const t=document.createElement(e);return t.className=n,t},X=({element:e,value:n,property:t,unit:a,min:r,max:o})=>{if(typeof n!="number"||!Number.isFinite(n))return;const i=r===void 0?n:Math.max(n,r),l=o===void 0?i:Math.min(i,o);e.style.setProperty(t,`${l}${a??""}`)},Or=({element:e,backdrop:n,surface:t,accentColor:a,visualOptions:r=M})=>{var i,l,u,s,m,c,p,d,C,f,I,S;e.style.setProperty("--carma-annotation-text-overlay-font-family",r.text.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(r.text.fontWeight)),a&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",a),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=r.background.style,typeof r.background.surfaceAlpha=="number"&&Number.isFinite(r.background.surfaceAlpha)&&!((i=r.background.color)!=null&&i.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${Pr[r.appearance.themeStyle]}, ${Math.min(Math.max(r.background.surfaceAlpha,0),1)})`);const o=r.background.showBackdrop!==!1;n.style.display=o?"block":"none",t.style.display=o?"block":"none",(l=r.text.color)!=null&&l.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-color",r.text.color),(u=r.text.blendMode)!=null&&u.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-blend-mode",r.text.blendMode),(s=r.background.color)!=null&&s.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",r.background.color),(m=r.background.blendMode)!=null&&m.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-blend-mode",r.background.blendMode),(c=r.surface.blendMode)!=null&&c.trim()&&e.style.setProperty("--carma-annotation-text-overlay-surface-blend-mode",r.surface.blendMode),(d=(p=r.text.echo)==null?void 0:p.color)!=null&&d.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-color",r.text.echo.color),(f=(C=r.text.echo)==null?void 0:C.blendMode)!=null&&f.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blend-mode",r.text.echo.blendMode),X({element:e,value:(I=r.text.echo)==null?void 0:I.blurPx,property:"--carma-annotation-text-overlay-text-echo-blur-px",unit:"px",min:0}),X({element:e,value:(S=r.text.echo)==null?void 0:S.opacity,property:"--carma-annotation-text-overlay-text-echo-opacity",min:0,max:1}),X({element:e,value:r.background.blurPx,property:"--carma-annotation-text-overlay-surface-blur-px",unit:"px",min:0}),X({element:e,value:r.background.brightnessPct,property:"--carma-annotation-text-overlay-surface-brightness-pct",unit:"%",min:0}),X({element:e,value:r.background.saturatePct,property:"--carma-annotation-text-overlay-surface-saturate-pct",unit:"%",min:0}),X({element:e,value:r.background.radiusEx,property:"--carma-annotation-text-overlay-backdrop-radius",unit:"ex",min:0}),X({element:e,value:r.background.edgeBlurPx,property:"--carma-annotation-text-overlay-surface-edge-blur-px",unit:"px",min:0}),(typeof r.surface.paddingBlockEx=="number"||typeof r.surface.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${typeof r.surface.paddingBlockEx=="number"&&Number.isFinite(r.surface.paddingBlockEx)?Math.max(r.surface.paddingBlockEx,0):Se.paddingBlockEx}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${typeof r.surface.paddingInlineEx=="number"&&Number.isFinite(r.surface.paddingInlineEx)?Math.max(r.surface.paddingInlineEx,0):Se.paddingInlineEx}ex`)),(typeof r.background.insetBlockEx=="number"||typeof r.background.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${typeof r.background.insetBlockEx=="number"&&Number.isFinite(r.background.insetBlockEx)?r.background.insetBlockEx:Se.backdropInsetBlockEx}ex ${typeof r.background.insetInlineEx=="number"&&Number.isFinite(r.background.insetInlineEx)?r.background.insetInlineEx:Se.backdropInsetInlineEx}ex`)},qr=(e,n)=>{n&&(n.fontSize&&e.style.setProperty("--carma-annotation-text-overlay-font-size",n.fontSize),n.fontWeight!==void 0&&e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(n.fontWeight)),n.letterSpacing&&e.style.setProperty("--carma-annotation-text-overlay-letter-spacing",n.letterSpacing),typeof n.textEchoBlurPx=="number"&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blur-px",`${n.textEchoBlurPx}px`),n.textEchoShadow&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-shadow",n.textEchoShadow))},Vn=({accentColor:e,visualOptions:n,styleOptions:t})=>{const a=me("div",ce.root),r=me("div",ce.backdrop),o=me("div",ce.surface),i=me("div",ce.textEcho),l=me("div",ce.text);return i.dataset.annotationTextOverlayTextEcho="true",l.dataset.annotationTextOverlayText="foreground",Or({element:a,backdrop:r,surface:o,textEcho:i,text:l,accentColor:e,visualOptions:n}),qr(a,t),a.append(r,o,i,l),a},Mr=e=>e.querySelector('[data-annotation-text-overlay-text="foreground"]'),Br=e=>e.querySelector('[data-annotation-text-overlay-text-echo="true"]'),Xn=(e,n)=>{const t=Mr(e),a=Br(e);t&&t.textContent!==n&&(t.textContent=n),a&&a.textContent!==n&&(a.textContent=n)},ke=(e,n)=>{Object.assign(e.style,n)},en=Object.freeze({className:"carma-annotation-overlay-line-label",frameClassName:"carma-annotation-overlay-line-label__frame"}),_r=Object.freeze({direct:{},vertical:{labelOffsetPx:D.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:se.verticalFlippedBaselineOffsetPx,labelRotationMode:Mt.CLOCKWISE},horizontal:{labelOffsetPx:se.horizontalLabelOffsetPx}}),An=(e,n)=>{const t=document.createElement(e);return t.className=n,t},wr=e=>e.querySelector(`.${en.frameClassName}`),Fr=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:M.layout.shortEdgeOffsetPx},Yn=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",Dr=e=>Yn(e)==="vertical",zr=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({..._r[e],anchorRatio:t===void 0?void 0:_t(t),getLabelOutsideReferencePoint:n?()=>({x:n.x,y:n.y}):void 0}),Hr=({x:e,y:n,angleRad:t,anchor:a})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${a==="left"?"translate(0%, -50%)":a==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,jr=(e,n,t=ua.LABEL)=>{const a=pa(e,t);if(!a)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",ke(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),a.appendChild(r),r},No=jr,$r=e=>{e==null||e.remove()},xo=$r,bo=e=>{const n=new $t,t=n.update.bind(n);return n.update=a=>{if(!(a.passes.pick&&!a.passes.render))return t(a)},e.primitives.add(n),n},So=(e,n)=>{if(!(!n||!aa(e)))try{if(typeof n.isDestroyed=="function"&&n.isDestroyed())return;e.primitives.remove(n)}catch{}},Kn=e=>Wt.fromType("Color",{color:mn.fromCssColorString(e)??mn.WHITE}),ho=(e,n,t,a)=>({polyline:e.add({id:n,positions:[y.ZERO,y.ZERO],width:(a==null?void 0:a.width)??D.lineStrokeWidthPx,material:Kn(t),show:!1}),colorCss:t}),vo=(e,n)=>{e.colorCss!==n&&(e.polyline.material=Kn(n),e.colorCss=n)},To=e=>{e.polyline.show=!1},Io=(e,n)=>{e.polyline.positions=[...n],e.polyline.show=n.length>=2},we=(e,n)=>{const t=on(n),a=An("div",en.className),r=An("div",en.frameClassName),o=Vn({accentColor:e,visualOptions:t});return a.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(o),a.appendChild(r),a},Ao=e=>{const n=on(e),t=we(b.colors.componentLabelAccents.direct,n);t.dataset.annotationOverlayLineLabelKind="direct";const a=we(b.colors.componentLabelAccents.vertical,n);a.dataset.annotationOverlayLineLabelKind="vertical";const r=we(b.colors.componentLabelAccents.horizontal,n);return r.dataset.annotationOverlayLineLabelKind="horizontal",{direct:t,vertical:a,horizontal:r}},kn=(e,n)=>{if(!(n!=null&&n.screenPosition)){e.style.display="none";return}Xn(e,n.text),e.style.display="inline-grid",e.style.transform=`translate(${Math.round(n.screenPosition.x)}px, ${Math.round(n.screenPosition.y)}px) translate(-50%, -50%)`},ko=({overlayLayer:e,accentColor:n,visualOptions:t})=>{const a=Vn({accentColor:n,visualOptions:on(t),styleOptions:Rr});return a.dataset.annotationOverlayLineLabelKind="area",ke(a,{position:"absolute",left:"0",top:"0",display:"none",willChange:"transform"}),e==null||e.appendChild(a),{setState:r=>kn(a,r),clear:()=>kn(a,null),destroy:()=>a.remove()}},Eo=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},Zn=(e,n)=>{ke(e,{width:`${n.pixelSize}px`,height:`${n.pixelSize}px`,border:`${n.outlineWidth}px solid ${n.outline}`,background:n.fill})},Wr=(e=Gn.point)=>{const n=document.createElement("div");return ke(n,{position:"absolute",left:"0",top:"0",display:"none",borderRadius:"999px",transform:"translate(-50%, -50%)",boxSizing:"border-box",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",willChange:"transform"}),Zn(n,e),n},Gr=({overlayLayer:e,pointMarkers:n,count:t,style:a})=>{for(;n.length<t;){const r=Wr(a);n.push(r),e.appendChild(r)}},Lo=e=>{e.forEach(n=>{n.style.display="none"})},Ro=({scene:e,overlayLayer:n,pointMarkers:t,coordinates:a,style:r=Gn.point})=>{Gr({overlayLayer:n,pointMarkers:t,count:a.length,style:r}),a.forEach((o,i)=>{const l=t[i];if(!l)return;Zn(l,r);const u=ra.worldToWindowCoordinates(e,Ge(o));if(!Gt(u)){l.style.display="none";return}l.style.display="block",l.style.transform=`translate(${Math.round(u.x)}px, ${Math.round(u.y)}px) translate(-50%, -50%)`}),t.slice(a.length).forEach(o=>{o.style.display="none"})},Ur=e=>_n(e>Q||e<-Q?e+ye:e),Vr=e=>{let n=_n(e);return n>Q?n=n-ye:n<-Q&&(n=n+ye),n},Xr=({angleRad:e,lineSide:n})=>Math.abs(Math.abs(e)-Q)>se.verticalBaselineAngleEpsilonRad?e:n==="left"?Q:-Q,Yr=({deltaX:e,deltaY:n,lineSide:t,flipReadingDirection:a,forceHorizontal:r})=>{if(r)return 0;const o=Ur(Math.atan2(n,e)),i=a?o>=0?o-ye:o+ye:o;return Xr({angleRad:Vr(i),lineSide:t})},Kr=({start:e,end:n,kind:t,outsideReferencePoint:a,shortEdgeOffsetPx:r=M.layout.shortEdgeOffsetPx,useShortEdgeRules:o=!0,flipReadingDirection:i=!1,previousShouldFlip:l=!1,anchorRatio:u})=>{const s=Bt({svgLine:{start:{x:e.x,y:e.y},end:{x:n.x,y:n.y}},options:zr({kind:t,outsideReferencePoint:a,anchorRatio:u}),previousShouldFlip:l,sideSwitchThresholdPx:se.sideHysteresisPx});if(!s)return null;const m=n.x-e.x,c=n.y-e.y;if(o&&s.lineLengthPx<D.lineLabelMinLengthPx){const p=s.normalX>=0,d=p?"left":"right";return{x:s.midX+s.normalX*r,y:s.midY+s.normalY*r,angleRad:Yr({deltaX:m,deltaY:c,lineSide:d,flipReadingDirection:i,forceHorizontal:!0}),anchor:p?"left":"right",anchorRatio:s.anchorRatio,isShortEdge:!0,shouldFlip:s.shouldFlip,normalX:s.normalX,normalY:s.normalY}}return{x:s.textX,y:s.textY,angleRad:s.angleRad,anchor:"center",anchorRatio:s.anchorRatio,isShortEdge:!1,shouldFlip:s.shouldFlip,normalX:s.normalX,normalY:s.normalY}},Po=({element:e,text:n,start:t,end:a,outsideReferencePoint:r,flipReadingDirection:o=!1,anchorRatio:i})=>{const l=Kr({start:t,end:a,kind:Yn(e),outsideReferencePoint:r,shortEdgeOffsetPx:Fr(e),useShortEdgeRules:Dr(e),flipReadingDirection:o,anchorRatio:i,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!l){e.style.display="none";return}Xn(e,n),e.style.display="block";const u=wr(e),s=!l.isShortEdge&&l.normalY<-se.upperSideGapNormalYEpsilon&&u?u.getBoundingClientRect().height*se.upperSideGapFactor:0,m=l.x+l.normalX*s,c=l.y+l.normalY*s;e.dataset.annotationOverlayLineLabelShortEdge=l.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${l.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=l.shouldFlip?"1":"0",e.style.transform=Hr({...l,x:m,y:c})},Zr=e=>Math.min(D.labelReferenceMaxDistancePx,Math.max(D.labelReferenceMinDistancePx,e)),Fe=({start:e,end:n,insidePoint:t,previousOutsideSign:a})=>{const r=n.x-e.x,o=n.y-e.y,i=Math.hypot(r,o);if(!Number.isFinite(i)||i<=D.labelReferenceLineLengthEpsilonPx)return null;const l=(e.x+n.x)*.5,u=(e.y+n.y)*.5,s=-o/i,m=r/i,c=(t.x-l)*s+(t.y-u)*m,p=c>=0?-1:1,d=a&&a!==p&&Math.abs(c)<D.labelSideSwitchThresholdPx?a:p,C=Zr(i*D.labelReferenceDistanceFactor);return{outsideSign:d,referencePoint:{x:l+s*d*C,y:u+m*d*C}}},Oo=({anchor:e,target:n,aux:t,anchorAltitudeMeters:a,targetAltitudeMeters:r,previousVerticalOutsideSign:o})=>{const i={x:e.x,y:e.y},l={x:n.x,y:n.y},u={x:t.x,y:t.y},s=a>=r?i:l,m={anchor:i,target:l,aux:u,highest:s,centroid:{x:(i.x+l.x+u.x)/3,y:(i.y+l.y+u.y)/3}},c=Ca({triangle:m,auxiliaryAltitudeMeters:r,highestAltitudeMeters:Math.max(a,r),insideBlendFactor:D.labelReferenceInsideBlendFactor}),p=Fe({start:i,end:l,insidePoint:c}),d=Fe({start:u,end:l,insidePoint:c}),C=Fe({start:i,end:u,insidePoint:l,previousOutsideSign:o});return{directOutsideReferencePoint:(p==null?void 0:p.referencePoint)??null,verticalOutsideReferencePoint:(C==null?void 0:C.referencePoint)??null,horizontalOutsideReferencePoint:(d==null?void 0:d.referencePoint)??null,nextVerticalOutsideSign:C==null?void 0:C.outsideSign}},qo=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),Mo=()=>({cartographicA:new We,cartographicB:new We,auxiliaryPoint:new y,auxiliaryScreen:new Ut}),Bo=({scene:e,anchorPointECEF:n,targetPointECEF:t,scratch:a})=>{const r=e.globe.ellipsoid,o=r.cartesianToCartographic(n,a.cartographicA),i=r.cartesianToCartographic(t,a.cartographicB);return!o||!i?null:y.fromRadians(o.longitude,o.latitude,i.height??0,r,a.auxiliaryPoint)},_o=e=>{const n=Ra(e);return{longitude:n.longitude,latitude:n.latitude,altitude:Ea(n.altitude)}},wo=({firstCorner:e,oppositeCorner:n})=>{const t=Ge(e),a=Ge(n),r=zn(t,a);return r?[t,r.adjacentHorizontalCorner,a,r.adjacentVerticalCorner,t]:null},Jr=Object.freeze({longPressDurationMs:320}),Qr=({interactive:e,onClick:n,onHoverChange:t,onLongPress:a,longPressDurationMs:r=Jr.longPressDurationMs,markerStyle:o})=>{const[i,l]=T.useState(!1),u=T.useRef(void 0),s=T.useRef(!1),m=T.useCallback(()=>{u.current!==void 0&&(window.clearTimeout(u.current),u.current=void 0)},[]),c=T.useCallback(I=>{if(I.stopPropagation(),I.button!==0||!a){m();return}s.current=!1,m(),u.current=window.setTimeout(()=>{s.current=!0,a()},r)},[m,r,a]),p=T.useCallback(()=>{m()},[m]),d=T.useCallback(I=>{if(I.stopPropagation(),s.current){s.current=!1;return}n==null||n()},[n]),C=T.useCallback(()=>{l(!0),t==null||t(!0)},[t]),f=T.useCallback(()=>{m(),l(!1),t==null||t(!1)},[m,t]);return T.useEffect(()=>m,[m]),g.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:g.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${Bn.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:wt(),boxShadow:i?Ft():"none",filter:i?Dt():"none",...o},onClick:e?d:void 0,onMouseDown:e?c:void 0,onMouseUp:e?p:void 0,onMouseEnter:e?C:void 0,onMouseLeave:e?f:void 0})})};Qr.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Fo={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},Do={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},zo={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},Ho={GROUND:"ground",COPLANAR:"coplanar"},ei={MIN:1,MAX:1400,LOG_SCALE:64};Object.freeze({layoutConfig:ia(void 0),markerPixelSize:10,markerOutlineWidth:b.sizes.pointOutlineWidth,stemColor:b.colors.surface,activeMoveGizmoLabelZIndex:ei.MAX+1});Object.freeze({...zt({markerDiameterPx:b.sizes.pointPixelSize,markerStrokeWidthPx:b.sizes.pointOutlineWidth}),tickColor:Bn.colors.surfaceStrong,minOverlayZIndex:Ht.zIndex.interactionHandleFloor});Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:ba(),straightHitTargetPx:20})});function de(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Ne(e,n){var t=Object.create(e.prototype);for(var a in n)t[a]=n[a];return t}function G(){}var ne=.7,le=1/ne,ni=/^#([0-9a-f]{3})$/,ti=/^#([0-9a-f]{6})$/,ai=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,ri=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,ii=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,oi=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,si=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,li=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,En={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};de(G,sn,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function sn(e){var n;return e=(e+"").trim().toLowerCase(),(n=ni.exec(e))?(n=parseInt(n[1],16),new A(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=ti.exec(e))?Ln(parseInt(n[1],16)):(n=ai.exec(e))?new A(n[1],n[2],n[3],1):(n=ri.exec(e))?new A(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=ii.exec(e))?Rn(n[1],n[2],n[3],n[4]):(n=oi.exec(e))?Rn(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=si.exec(e))?Pn(n[1],n[2]/100,n[3]/100,1):(n=li.exec(e))?Pn(n[1],n[2]/100,n[3]/100,n[4]):En.hasOwnProperty(e)?Ln(En[e]):e==="transparent"?new A(NaN,NaN,NaN,0):null}function Ln(e){return new A(e>>16&255,e>>8&255,e&255,1)}function Rn(e,n,t,a){return a<=0&&(e=n=t=NaN),new A(e,n,t,a)}function ln(e){return e instanceof G||(e=sn(e)),e?(e=e.rgb(),new A(e.r,e.g,e.b,e.opacity)):new A}function Jn(e,n,t,a){return arguments.length===1?ln(e):new A(e,n,t,a??1)}function A(e,n,t,a){this.r=+e,this.g=+n,this.b=+t,this.opacity=+a}de(A,Jn,Ne(G,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new A(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?ne:Math.pow(ne,e),new A(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function Pn(e,n,t,a){return a<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new _(e,n,t,a)}function ui(e){if(e instanceof _)return new _(e.h,e.s,e.l,e.opacity);if(e instanceof G||(e=sn(e)),!e)return new _;if(e instanceof _)return e;e=e.rgb();var n=e.r/255,t=e.g/255,a=e.b/255,r=Math.min(n,t,a),o=Math.max(n,t,a),i=NaN,l=o-r,u=(o+r)/2;return l?(n===o?i=(t-a)/l+(t<a)*6:t===o?i=(a-n)/l+2:i=(n-t)/l+4,l/=u<.5?o+r:2-o-r,i*=60):l=u>0&&u<1?0:i,new _(i,l,u,e.opacity)}function di(e,n,t,a){return arguments.length===1?ui(e):new _(e,n,t,a??1)}function _(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}de(_,di,Ne(G,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new _(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ne:Math.pow(ne,e),new _(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,a=t+(t<.5?t:1-t)*n,r=2*t-a;return new A(De(e>=240?e-240:e+120,r,a),De(e,r,a),De(e<120?e+240:e-120,r,a),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function De(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var Qn=Math.PI/180,et=180/Math.PI,Ae=18,nt=.95047,tt=1,at=1.08883,rt=4/29,oe=6/29,it=3*oe*oe,ci=oe*oe*oe;function un(e){if(e instanceof F)return new F(e.l,e.a,e.b,e.opacity);if(e instanceof j){var n=e.h*Qn;return new F(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof A||(e=ln(e));var t=$e(e.r),a=$e(e.g),r=$e(e.b),o=ze((.4124564*t+.3575761*a+.1804375*r)/nt),i=ze((.2126729*t+.7151522*a+.072175*r)/tt),l=ze((.0193339*t+.119192*a+.9503041*r)/at);return new F(116*i-16,500*(o-i),200*(i-l),e.opacity)}function mi(e,n,t,a){return arguments.length===1?un(e):new F(e,n,t,a??1)}function F(e,n,t,a){this.l=+e,this.a=+n,this.b=+t,this.opacity=+a}de(F,mi,Ne(G,{brighter:function(e){return new F(this.l+Ae*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new F(this.l-Ae*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=tt*He(e),n=nt*He(n),t=at*He(t),new A(je(3.2404542*n-1.5371385*e-.4985314*t),je(-.969266*n+1.8760108*e+.041556*t),je(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function ze(e){return e>ci?Math.pow(e,1/3):e/it+rt}function He(e){return e>oe?e*e*e:it*(e-rt)}function je(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function $e(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function gi(e){if(e instanceof j)return new j(e.h,e.c,e.l,e.opacity);e instanceof F||(e=un(e));var n=Math.atan2(e.b,e.a)*et;return new j(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function pi(e,n,t,a){return arguments.length===1?gi(e):new j(e,n,t,a??1)}function j(e,n,t,a){this.h=+e,this.c=+n,this.l=+t,this.opacity=+a}de(j,pi,Ne(G,{brighter:function(e){return new j(this.h,this.c,this.l+Ae*(e??1),this.opacity)},darker:function(e){return new j(this.h,this.c,this.l-Ae*(e??1),this.opacity)},rgb:function(){return un(this).rgb()}}));var ot=-.14861,dn=1.78277,cn=-.29227,Ee=-.90649,fe=1.97294,On=fe*Ee,qn=fe*dn,Mn=dn*cn-Ee*ot;function yi(e){if(e instanceof ee)return new ee(e.h,e.s,e.l,e.opacity);e instanceof A||(e=ln(e));var n=e.r/255,t=e.g/255,a=e.b/255,r=(Mn*a+On*n-qn*t)/(Mn+On-qn),o=a-r,i=(fe*(t-r)-cn*o)/Ee,l=Math.sqrt(i*i+o*o)/(fe*r*(1-r)),u=l?Math.atan2(i,o)*et-120:NaN;return new ee(u<0?u+360:u,l,r,e.opacity)}function Ci(e,n,t,a){return arguments.length===1?yi(e):new ee(e,n,t,a??1)}function ee(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}de(ee,Ci,Ne(G,{brighter:function(e){return e=e==null?le:Math.pow(le,e),new ee(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ne:Math.pow(ne,e),new ee(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*Qn,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),a=Math.cos(e),r=Math.sin(e);return new A(255*(n+t*(ot*a+dn*r)),255*(n+t*(cn*a+Ee*r)),255*(n+t*(fe*a)),this.opacity)}}));const st=Jn(v.ACCENT_MEASUREMENTS).brighter(.1);st.opacity=.5;const lt=Sa(),fi=Object.freeze({backgroundColor:Cn("background"),hoverBackgroundColor:Cn("hoverBackground"),textColor:lt,glowColor:he(1),glowRadiusPx:5,preserveFillOnSelection:!0}),Ni=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:st.toString(),colorPrimary:v.ACCENT_MEASUREMENTS,lineColor:b.colors.surface,textColor:lt}),E=Object.freeze({scheme:Ni,fontFamily:ie.fontFamily,contentFontWeight:ie.lineLabelFontWeight,badgeFontWeight:ie.badgeFontWeight,selection:fi}),jo=e=>E,$o=Object.freeze({fontSize:ie.rootFontSizeRem,fontFamily:E.fontFamily,fontWeight:E.contentFontWeight,lineColor:E.scheme.lineColor,textBackgroundColor:E.scheme.colorPrimaryReduced,textColor:E.scheme.textColor,markerBackgroundColor:E.scheme.colorPrimary,markerTextColor:E.scheme.textColor,selectedBackgroundColor:E.selection.backgroundColor,selectedTextColor:E.selection.textColor,selectedGlowColor:E.selection.glowColor,selectedGlowRadiusPx:E.selection.glowRadiusPx,preserveFillOnSelection:E.selection.preserveFillOnSelection,hoverBackgroundColor:E.selection.hoverBackgroundColor,markerPixelSize:b.sizes.pointPixelSize,markerOutlineWidth:b.sizes.pointOutlineWidth});T.createContext(null);export{Bo as $,ir as A,ho as B,Ia as C,Ta as D,Aa as E,ue as F,dr as G,mr as H,Ma as I,sr as J,ur as K,jr as L,$r as M,Ho as N,ua as O,Yi as P,Do as Q,Fo as R,No as S,xo as T,Lo as U,Ro as V,Ki as W,yo as X,xa as Y,ko as Z,Ui as _,B as a,Mo as a0,on as a1,we as a2,wo as a3,_o as a4,Zi as a5,ji as a6,or as a7,Tr as a8,Ir as a9,Qr as aA,Co as aa,fo as ab,zo as ac,Gn as ad,Ra as ae,Ea as af,Xi as ag,E as ah,te as ai,$i as aj,Wi as ak,Gi as al,J as am,Ji as an,Y as ao,$o as ap,Vi as aq,z as ar,po as as,lo as at,ao as au,ha as av,fa as aw,zn as ax,Jn as ay,sn as az,re as b,ya as c,fi as d,Qe as e,Er as f,lt as g,Oe as h,k as i,Po as j,Lr as k,M as l,b as m,Ao as n,Eo as o,D as p,Oo as q,jo as r,qo as s,ie as t,N as u,So as v,To as w,vo as x,Io as y,bo as z};
