import{j as y}from"./jsx-runtime-DCY474Ph.js";import{F as Ce,r as Ct,s as ft,t as Nt,u as xt,v as bt,w as St,x as ht,y as vt,z as Tt,A as It,B as At,C as kt,D as Et}from"./index-B8kvWvtq.js";import{r as T}from"./index-f9CH5uyH.js";import{T as Lt}from"./ua-parser-CoZqYcpw.js";import{n as Rt,o as Pt,p as Ot}from"./lib-CgELrM4g.js";import{f as Re,C as v,r as qt}from"./index-l-cOiGX0.js";import"./index-o4jIgCFn.js";import{n as Mt,o as Bt,S as _t,p as wt,f as Ft,q as _n,s as Dt,t as zt,v as Ht,w as jt,l as $t}from"./useLineSegmentVisualizers-DISyK7Ov.js";import{C,b as Ge,a3 as Wt,n as Gt,o as Ut,c as gn,j as Vt,k as Xt}from"./Elevation-BpMX19vt.js";import{c as Yt,a as Kt,b as Zt,d as Jt}from"./useCesiumPointMoveGizmo-BD_L4rUi.js";import"./useCesiumFovWheelZoom-jU1MRybC.js";import"./maplibre-gl-DBjQz0JA.js";import"./geodetic-BlUMYLim.js";import{c as Qt}from"./clamp-co6UzHBn.js";import{e as ea,h as na,i as ta,s as aa,f as ra}from"./geometry2d-po7D64Uu.js";import{i as ia}from"./carma-guards-DZTu9-el.js";import{n as wn}from"./angle-normalization-D3Clryc1.js";import{c as yn,P as Q,b as fe}from"./angles-B5wuhJLI.js";import{c as Ue}from"./CoordinateAdapters-CEdXY6Q2.js";/* empty css                                      */import{S as oa}from"./Scene-Ca82XnUG.js";import{r as sa}from"./config-C2KVQAtz.js";import"./svgProjection-DC0AVwLB.js";const Pe={de:{backspace:"Rücktaste",escape:"Esc",shift:"Umschalt"},en:{backspace:"Backspace",escape:"Esc",shift:"Shift"}},la=e=>e||(Rt||Pt?"macos":Ot?"windows":"other"),da=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Pe[n]?Pe[n]:Pe.en},ua=(e,n)=>e==="macos"?"⌫":`← ${n.backspace}`,Ie={LABEL:"label",VISUALIZER:"visualizer"},ca=Ie,Ve=e=>`[${e}="true"]`,pn="data-annotation-label-overlay-root",Cn="data-annotation-visualizer-overlay-root",Fn="data-annotation-visualizer-overlay-container",ma=Ve(Fn),ga=Object.freeze({[Ie.LABEL]:{rootAttribute:pn,containerAttribute:Mt,rootSelector:Ve(pn),containerSelector:Bt},[Ie.VISUALIZER]:{rootAttribute:Cn,containerAttribute:Fn,rootSelector:Ve(Cn),containerSelector:ma}}),ya=e=>ga[e],pa=(e,n=Ie.LABEL)=>{var i,l;const{rootSelector:t,containerSelector:a}=ya(n);let r=e.canvas.parentElement,o=r;for(;r;){if(r.matches(a))return r;const d=(i=r.querySelector)==null?void 0:i.call(r,a);if(d instanceof HTMLElement)return d;if(r.matches(t))return r;const s=(l=r.querySelector)==null?void 0:l.call(r,t);if(s instanceof HTMLElement)return s;o=r,r=r.parentElement}return o},Ca=pa,R={FLY_TO:"flyTo",EXPORT:"export",VISIBILITY:"visibility",REFERENCE:"reference",LOCK:"lock",DELETE:"delete"},O=(()=>{const e="1rem",n="0.8571rem",t="1rem";return Object.freeze({rootFontSizeRem:e,supportFontSizeRem:n,headingFontSizeRem:t,headingFontWeight:600,headingTypographyClassName:`text-[${n}] font-semibold tracking-[0.03em]`,titleTypographyClassName:`text-[${t}] font-semibold leading-[1.25]`})})(),P=Object.freeze({borderRadiusRem:"0.2143rem",hairlineBorderWidthRem:"0.0357rem",panelInsetShadowYOffsetRem:"0.0714rem",panelInsetShadowBlurRem:"0.0714rem",panelBackdropBlurRem:"0.1429rem"}),x=Object.freeze({heading:v.ACCENT_MEASUREMENTS,panelSurface:v.NEUTRAL_SURFACE_SUBTLE,panelBorder:v.NEUTRAL_BORDER_SUBTLE,shadowBase:v.NEUTRAL_BLACK,bodyText:v.NEUTRAL_TEXT_PRIMARY,mutedText:v.NEUTRAL_TEXT_MUTED,linkText:v.WUPP_BLUE,fieldText:v.NEUTRAL_TEXT_STRONG,fieldBorder:v.NEUTRAL_BORDER_DEFAULT,fieldInputBorder:v.NEUTRAL_BORDER_INPUT,fieldFocusBackground:v.STATE_FOCUS_BACKGROUND_WARM,fieldFocusOutline:v.STATE_FOCUS_OUTLINE,titleText:v.NEUTRAL_TEXT_STRONG}),Oe=Object.freeze({panelSurface:.9,panelBorder:.9,panelInsetShadow:.02}),fa=Object.freeze({defaultPixelWidth:430,headingColor:x.heading,headerStyle:{},bodyPanelStyle:{backgroundColor:Re(x.panelSurface,Oe.panelSurface),border:`${P.hairlineBorderWidthRem} solid ${Re(x.panelBorder,Oe.panelBorder)}`,boxShadow:`${Re(x.shadowBase,Oe.panelInsetShadow)} 0 ${P.panelInsetShadowYOffsetRem} ${P.panelInsetShadowBlurRem} inset`,backdropFilter:`blur(${P.panelBackdropBlurRem})`,WebkitBackdropFilter:`blur(${P.panelBackdropBlurRem})`},resolveActionTooltipPopupContainer:e=>e.closest('[data-test-id="annotation-info-box"]')??e.ownerDocument.body,headerForegroundClassName:"text-white/80",headerTitleClassName:`truncate ${O.headingTypographyClassName}`,subtitleContainerClassName:"mb-0 w-full px-2 pt-[0.28em]",subtitleTextStyle:{color:v.ACCENT_NEUTRALS},subtitleTextClassName:`px-2 text-[${O.supportFontSizeRem}] leading-[1.1] font-semibold`,subtitleMetaTextStyle:{color:v.ACCENT_NEUTRALS},subtitleMetaTextClassName:`mt-[0.08em] whitespace-nowrap text-[${O.supportFontSizeRem}] leading-[1.1] font-semibold`,showSubtitleMetaText:!0,readOnly:!1,bodyContainerClassName:"px-2 pb-2 pt-1",bodyTextStyle:{fontSize:O.rootFontSizeRem,lineHeight:1.4,color:x.bodyText},bodyTextClassName:`text-[${O.rootFontSizeRem}] leading-[1.4] text-[${x.bodyText}]`,emptyContentLineStyle:{minHeight:"1.4em"},emptyContentLineClassName:"w-full",mutedTextClassName:`text-[${x.mutedText}]`,linkTextClassName:`text-[${x.linkText}]`,actionIconClassName:"transition-colors",actionIconColor:v.ACCENT_NEUTRALS,actionIconHoverColor:v.ACCENT_NEUTRALS_HOVER,actionIconFontSize:"16px",hiddenActionIds:[],fieldTextClassName:`text-[${x.fieldText}]`,fieldBorderClassName:`border-[${P.hairlineBorderWidthRem}] border-[${x.fieldBorder}]`,fieldInputBorderClassName:`border-[${P.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}]`,fieldFocusBackgroundClassName:`focus:bg-[${x.fieldFocusBackground}]`,fieldFocusOutlineClassName:`focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}]`,subtleFieldBackgroundClassName:"bg-white/85",titleTextStyle:{fontSize:O.headingFontSizeRem,fontWeight:O.headingFontWeight,lineHeight:1.25},titleTextClassName:`text-[${x.titleText}]/80 ${O.titleTypographyClassName}`,titleInputClassName:`min-w-0 w-auto max-w-full appearance-none [field-sizing:content] break-words rounded-[${P.borderRadiusRem}] border border-transparent bg-transparent px-0 py-[0.05em] text-[${x.titleText}]/80 placeholder:text-[${x.titleText}]/50 focus:bg-[${x.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}] ${O.titleTypographyClassName}`,shortLabelInputClassName:`shrink-0 w-auto appearance-none [field-sizing:content] border-[${P.hairlineBorderWidthRem}] px-[0.5ex] py-0 text-center tabular-nums border-[${x.fieldBorder}] bg-white/85 text-[${x.titleText}]/80 placeholder:text-[${x.titleText}]/80 focus:bg-[${x.fieldFocusBackground}] focus:outline focus:outline-2 focus:outline-[${x.fieldFocusOutline}] ${O.titleTypographyClassName}`,navigationInstructionContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationAvailabilityContainerClassName:"mt-1 flex w-full items-center justify-center px-2 pt-1",navigationSummaryContainerClassName:"mb-1 mt-0 flex w-full items-center justify-between px-2",navigationLinkFontSize:O.supportFontSizeRem,inlineFieldButtonClassName:`inline-flex h-5 w-5 items-center justify-center rounded border-[${P.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}]`,colorInputClassName:`h-6 w-8 cursor-pointer rounded border-[${P.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}] bg-transparent p-0`,inlineActionButtonClassName:`inline-flex items-center gap-1 rounded border-[${P.hairlineBorderWidthRem}] border-[${x.fieldInputBorder}] px-2 py-1`}),ce=e=>({...fa,...e}),ie=Object.freeze({lineLengthEpsilonPx:.001,referenceDistanceFactor:.2,flipThresholdPx:4,referenceMinDistancePx:24,referenceMaxDistancePx:48,insideBlendFactor:.35,elevationEpsilonMeters:.001,geometryEpsilonPx:1e-6,geometryEpsilonPxSquared:1e-6**2,polygonAreaEpsilonPx2:1e-6,interiorSampleGridResolution:18,minInteriorSampleGridResolution:6,inwardProbeStepsPx:[.5,1,2,4,8,12,16,24,32],polygonLabelPaddingXPx:6,polygonLabelPaddingYPx:4,polygonLabelMinAreaToLabelRatio:1.15,polylabelPrecisionPx:.5,polylabelMaxCellsToProcess:2e4,minSafeLabelDimensionPx:1}),Gi=(e,n,t,a=ie.referenceMinDistancePx,r=ie.referenceMaxDistancePx)=>{const o=ea({start:e,end:n,epsilon:ie.lineLengthEpsilonPx});if(!o)return null;const i=na(t,o.midpoint),d=ta(i,o.leftUnitNormal)>=0?1:-1,s=Qt(o.length*ie.referenceDistanceFactor,a,r),c=aa(o.leftUnitNormal,d*s);return ra(o.midpoint,c)},Na=({triangle:e,auxiliaryAltitudeMeters:n,highestAltitudeMeters:t,insideBlendFactor:a=ie.insideBlendFactor,elevationEpsilonMeters:r=ie.elevationEpsilonMeters})=>{const o=n<t-r?e.highest:e.aux;return{x:o.x+(e.centroid.x-o.x)*a,y:o.y+(e.centroid.y-o.y)*a}},N={POINT:"point",DISTANCE:"distance",POLYLINE:"polyline",AREA_GROUND:"area",AREA_PLANAR:"planar",AREA_VERTICAL:"vertical",LABEL:"label"},xa="select",Ui="planar-biggest-triangle",Vi="planar-pca",Xi="planar-trapezoid",Dn=e=>e===N.AREA_GROUND||e===N.AREA_VERTICAL||e===N.AREA_PLANAR,ba=e=>{if(!Number.isFinite(e)||e<0)return"A";let n=Math.floor(e),t="";do t=String.fromCharCode(65+n%26)+t,n=Math.floor(n/26)-1;while(n>=0);return t},Xe=Object.freeze({fillAlpha:.25,selectedFillAlpha:.35,rgb255ByType:{[N.AREA_VERTICAL]:[112,168,255],[N.AREA_GROUND]:[107,188,123],[N.AREA_PLANAR]:[239,223,145]}}),zn=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,tn=e=>Xe.rgb255ByType[e],Yi=(e,n)=>zn(tn(e),n?Xe.selectedFillAlpha:Xe.fillAlpha),Sa=(e,n)=>zn(tn(e),n),k={DIRECT:"direct",VERTICAL:"vertical",HORIZONTAL:"horizontal"},D=Object.freeze({textRgb255:{dark:[17,24,39],light:[255,255,255]},measurementTextRgb255:[248,250,252],shortLabelRgb255ByType:{[N.POINT]:[200,200,200],[N.DISTANCE]:[102,126,234],[N.POLYLINE]:[226,178,60],[N.LABEL]:[88,152,255]},surfaceRgb255:{stroke:[255,255,255],accent:[246,248,255]},lineComponentRgb255ByKind:{[k.DIRECT]:[255,255,255],[k.VERTICAL]:[111,168,255],[k.HORIZONTAL]:[188,194,102]},selectionRgb255:{background:[15,23,42],hoverBackground:[30,41,59],glow:[255,255,255]}}),$=Object.freeze({alpha:{text:{dark:.9,light:1},shortLabelBackgroundByType:{[N.POINT]:.92,[N.DISTANCE]:.95,[N.POLYLINE]:.95,[N.LABEL]:.95,area:.95},lineComponentByKind:{[k.DIRECT]:1,[k.VERTICAL]:.96,[k.HORIZONTAL]:.95},lineComponentLabelAccentByKind:{[k.DIRECT]:.34,[k.VERTICAL]:.54,[k.HORIZONTAL]:.5},selection:{background:.92,hoverBackground:.9,glow:1},surfaceStroke:.95}}),W=([e,n,t],a)=>`rgba(${e}, ${n}, ${t}, ${a})`,U=(e,n=$.alpha.text[e])=>W(D.textRgb255[e],n),ve=(e=$.alpha.surfaceStroke)=>W(D.surfaceRgb255.stroke,e),ha=(e=$.alpha.surfaceStroke)=>W(D.surfaceRgb255.accent,e),qe=(e,n=$.alpha.lineComponentByKind[e])=>W(D.lineComponentRgb255ByKind[e],n),Me=(e,n=$.alpha.lineComponentLabelAccentByKind[e])=>W(D.lineComponentRgb255ByKind[e],n),V=e=>Dn(e)?Sa(e,$.alpha.shortLabelBackgroundByType.area):W(D.shortLabelRgb255ByType[e],$.alpha.shortLabelBackgroundByType[e]),Ki=e=>Dn(e)?tn(e):D.shortLabelRgb255ByType[e],fn=(e,n=$.alpha.selection[e])=>W(D.selectionRgb255[e],n),va=(e=1)=>W(D.measurementTextRgb255,e),Y=Object.freeze({fontFamily:'"Helvetica Neue", Arial, Helvetica, sans-serif',fontWeight:{regular:400,medium:500,semibold:600},fontSizePx:{supportText:12,pointLabel:14,measurementLabel:16,compactBadge:10,distancePairLabel:11}}),H={NUMERIC:"numeric",ALPHABETIC:"alphabetic"},Ta={[N.POINT]:{prefix:"",counterStyle:H.NUMERIC,backgroundColor:V(N.POINT),textColor:U("dark")},[N.DISTANCE]:{prefix:"",counterStyle:H.ALPHABETIC,backgroundColor:V(N.DISTANCE),textColor:U("light")},[N.POLYLINE]:{prefix:"L",counterStyle:H.NUMERIC,backgroundColor:V(N.POLYLINE),textColor:U("dark")},[N.AREA_GROUND]:{prefix:"A",counterStyle:H.NUMERIC,backgroundColor:V(N.AREA_GROUND),textColor:U("light")},[N.AREA_PLANAR]:{prefix:"D",counterStyle:H.NUMERIC,backgroundColor:V(N.AREA_PLANAR),textColor:U("light")},[N.AREA_VERTICAL]:{prefix:"F",counterStyle:H.NUMERIC,backgroundColor:V(N.AREA_VERTICAL),textColor:U("light")},[N.LABEL]:{prefix:"T",counterStyle:H.NUMERIC,backgroundColor:V(N.LABEL),textColor:U("light")}},Zi=(e,n,t=Ta)=>{const a=t[e],r=Number.isFinite(n)&&n>0?Math.floor(n):1,o=a.counterStyle===H.ALPHABETIC?ba(r-1):`${r}`;return`${a.prefix}${o}`},an=1e-12,Ia=1e-6,Ji=(e,n)=>e.map(t=>C.add(t,n,new C)),Aa=(e,n,t=new C)=>{const a=C.magnitudeSquared(n);if(a<=an)return C.clone(e,t);const r=C.dot(e,n)/a;return C.subtract(e,C.multiplyByScalar(n,r,new C),t)},ka=(e,n,t,a=new C)=>{const r=C.magnitudeSquared(t);if(r<=an)return C.clone(e,a);const o=C.subtract(e,n,new C),i=C.dot(o,t)/r;return C.subtract(e,C.multiplyByScalar(t,i,new C),a)},Qi=(e,n,t)=>{const a=C.magnitude(t);if(a<=Ia)return 0;const r=C.subtract(e,n,new C);return C.dot(r,t)/a},Ea=(e,n,t,a=new C)=>{const r=C.subtract(n,e,new C),o=C.subtract(t,e,new C),i=C.cross(r,o,a);return C.magnitudeSquared(i)<=an?null:C.normalize(i,a)},La=0,Ra=e=>e??La,Pa=e=>({longitude:yn(e.longitude),latitude:yn(e.latitude),altitude:e.height}),Oa=e=>{const n=Ge.fromCartesian(e);return Pa(n)},Nn=Object.freeze({componentEpsilonMeters:.05}),qa=(e,n,t)=>{const a=Ea(e,n,t);return a?{anchorECEF:C.clone(e),normalECEF:a}:null},xn=(e,n)=>ka(e,n.anchorECEF,n.normalECEF),Hn=(e,n)=>{const t=Wt(e),a=C.subtract(n,e,new C),r=C.dot(a,t),o=C.multiplyByScalar(t,r,new C),i=Aa(a,t),l=C.magnitude(i),d=Math.abs(r);if(l<Nn.componentEpsilonMeters||d<Nn.componentEpsilonMeters)return null;const s=C.add(e,i,new C),c=C.add(e,o,new C),u=C.add(e,t,new C),m=qa(e,u,s);return{adjacentHorizontalCorner:m?xn(s,m):s,adjacentVerticalCorner:m?xn(c,m):c}},eo=(e,n)=>{const t=Hn(e,n);if(!t)return 0;const a=C.distance(e,t.adjacentHorizontalCorner),r=C.distance(e,t.adjacentVerticalCorner);return a*r},Ma=Object.freeze({tooltipZIndex:1700}),K=({actionId:e,title:n,icon:t,onClick:a,dataTestId:r,className:o,ariaLabel:i,disabled:l=!1,visualOptions:d})=>{var f;const s=ce(d),[c,u]=T.useState(!1),m=`${s.actionIconClassName}${o?` ${o}`:""}${l?" cursor-not-allowed opacity-50":" cursor-pointer"}`,p={fontSize:s.actionIconFontSize,color:c&&!l?s.actionIconHoverColor:s.actionIconColor},g=(f=s.renderActionIcon)==null?void 0:f.call(s,{actionId:e,icon:t,className:m,style:p,dataTestId:r,ariaLabel:i,disabled:l});return y.jsx(Lt,{title:n,zIndex:Ma.tooltipZIndex,getPopupContainer:I=>{const S=I instanceof HTMLElement?I:document.body;return s.resolveActionTooltipPopupContainer(S)},children:y.jsx("span",{onClick:I=>{if(l){I.stopPropagation();return}a(I)},onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),className:"inline-flex items-center leading-none","aria-label":i,"aria-disabled":l,children:g??y.jsx(Ce,{className:m,style:p,icon:t,"data-test-id":r,"aria-hidden":i?void 0:!0})})})};K.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActionIcon",props:{actionId:{required:!0,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_ACTION_IDS)[keyof typeof ANNOTATION_INFO_BOX_ACTION_IDS]"},description:""},title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"IconDefinition"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ReactMouseEvent<HTMLElement, MouseEvent>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",elements:[{name:"HTMLElement"},{name:"MouseEvent"}],raw:"ReactMouseEvent<HTMLElement, MouseEvent>"},name:"event"}],return:{name:"void"}}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Ba=Object.freeze({flyTo:"Zur Messung fliegen",exportGeoJson:"Als GeoJSON exportieren",show:"Einblenden",hide:"Ausblenden",setReference:"Als Referenzhöhe setzen",lock:"Sperren",unlock:"Entsperren",delete:"Löschen",deleteLocked:"Gesperrte Messung kann nicht gelöscht werden"}),_a=({hidden:e=!1,locked:n=!1,labels:t,onFlyTo:a,onExport:r,onToggleVisibility:o,onToggleLock:i,onDelete:l,onSetReference:d,visualOptions:s,dataTestIdPrefix:c,dataTestIds:u})=>{const m={...Ba,...t},p=new Set((s==null?void 0:s.hiddenActionIds)??[]),g=f=>!p.has(f);return y.jsxs("div",{className:"flex items-center gap-2",children:[g(R.FLY_TO)?y.jsx(K,{actionId:R.FLY_TO,title:m.flyTo,icon:Ct,onClick:a,dataTestId:(u==null?void 0:u.flyTo)??`${c}-flyto-btn`,visualOptions:s}):null,g(R.EXPORT)?y.jsx(K,{actionId:R.EXPORT,title:m.exportGeoJson,icon:ft,onClick:r,dataTestId:(u==null?void 0:u.export)??`${c}-export-geojson-btn`,visualOptions:s}):null,g(R.VISIBILITY)?y.jsx(K,{actionId:R.VISIBILITY,title:e?m.show:m.hide,icon:e?Nt:xt,onClick:o,dataTestId:(u==null?void 0:u.visibility)??`${c}-toggle-visibility-btn`,visualOptions:s}):null,d&&g(R.REFERENCE)?y.jsx(K,{actionId:R.REFERENCE,title:m.setReference,icon:bt,onClick:d,dataTestId:(u==null?void 0:u.reference)??`${c}-set-reference-btn`,visualOptions:s}):null,g(R.LOCK)?y.jsx(K,{actionId:R.LOCK,title:n?m.unlock:m.lock,icon:n?St:ht,onClick:i,dataTestId:(u==null?void 0:u.lock)??`${c}-toggle-lock-btn`,visualOptions:s}):null,g(R.DELETE)?y.jsx(K,{actionId:R.DELETE,title:n?m.deleteLocked:m.delete,icon:vt,onClick:l,dataTestId:(u==null?void 0:u.delete)??`${c}-delete-btn`,disabled:n,visualOptions:s}):null]})};_a.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxActions",props:{hidden:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const oe={TEXT:"text",ACTION:"action",ALERT:"alert"},ae={CLICK:"click",DOUBLE_CLICK:"double-click",ENTER:"enter",BACKSPACE:"backspace",ESCAPE:"escape",SHIFT:"shift"},Ne={INFO:"info",WARNING:"warning"},J={INFO:"info",WARNING:"warning"},M={STANDARD:"standard",COMPACT:"compact"},wa="#00d9ff",Fa="rgba(0, 217, 255, 0.2)",Da="#004b5c",za="#ef4444",Ha="rgba(239, 68, 68, 0.18)",ja="#7f1d1d",$a=()=>typeof navigator>"u"?void 0:navigator.language,Be={de:{alternative:"oder",click:"Klick",doubleClick:"2x Klick"},en:{alternative:"or",click:"Click",doubleClick:"Double click"}},Wa=e=>{const n=e==null?void 0:e.split("-")[0];return n&&Be[n]?Be[n]:Be.en},jn={margin:"0 0 0.9rem"},Ae="1em",$n="max-content minmax(0, 1fr)",Ga={display:"grid",gridTemplateColumns:$n,columnGap:Ae,rowGap:"0.58rem",alignItems:"start"},Ua={...jn,gridColumn:"1 / -1"},Wn={[M.STANDARD]:{display:"grid",gridTemplateColumns:$n,columnGap:Ae,alignItems:"baseline",margin:"0 0 0.58rem",lineHeight:1.28},[M.COMPACT]:{display:"contents"}},rn={display:"inline-flex",alignItems:"center",justifyContent:"flex-end",gap:"0.22rem",whiteSpace:"nowrap"},Ye={display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.2rem",whiteSpace:"nowrap"},Va={lineHeight:1},Ke={[J.INFO]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Fa,color:Da},[J.WARNING]:{margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0.56rem",borderRadius:4,background:Ha,color:ja}},Xa={[J.INFO]:{...Ke[J.INFO],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Ae,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"},[J.WARNING]:{...Ke[J.WARNING],display:"grid",gridColumn:"1 / -1",gridTemplateColumns:"subgrid",columnGap:Ae,rowGap:"0.58rem",margin:"-0.2rem 0 0.8rem",padding:"0.48rem 0"}},Ya={minWidth:0,fontWeight:600,lineHeight:1.28},Ka={[M.STANDARD]:{minWidth:0,whiteSpace:"nowrap"},[M.COMPACT]:{minWidth:0,lineHeight:1.28}},Za=e=>e===M.COMPACT?e:M.STANDARD,Ja=e=>typeof e=="string"||e.kind===oe.TEXT,bn=e=>typeof e!="string"&&e.kind===oe.ALERT,Qa=e=>{const n=e.findIndex(Ja);if(n<=0)return e;const t=e.slice(0,n),a=t.filter(bn);return a.length===0?e:[...t.filter(r=>!bn(r)),e[n],...a,...e.slice(n+1)]},Gn={display:"inline-flex",minWidth:"1.85rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",border:"1px solid rgba(0, 0, 0, 0.34)",borderRadius:"0.28rem",background:"rgba(255, 255, 255, 0.68)",boxShadow:"inset 0 -1px 0 rgba(0, 0, 0, 0.2)",color:"#1f2937",fontSize:"0.74em",fontWeight:700,lineHeight:1,padding:"0.16rem 0.32rem"},er={...Gn,gap:"0.22rem"},nr={display:"inline-flex",minWidth:"1.35rem",minHeight:"1.35rem",alignItems:"center",justifyContent:"center",lineHeight:1},tr={[Ne.INFO]:{color:wa},[Ne.WARNING]:{color:za}},Se=(e,n)=>{const t=typeof e=="string"?e:e.text;return y.jsx("p",{style:n===M.COMPACT?Ua:jn,children:t},t)},Te=e=>y.jsx("span",{style:Gn,children:e}),Sn=e=>y.jsxs("span",{style:er,children:[y.jsx(Ce,{icon:At}),y.jsx("span",{children:e})]}),Ze=e=>y.jsx("span",{style:nr,children:y.jsx(Ce,{style:tr[e],icon:e===Ne.WARNING?Tt:It})}),ar=e=>Ze(e===J.WARNING?Ne.WARNING:Ne.INFO),rr=(e,n)=>Te(ua(e,n)),ir=(e,n,t,a)=>{switch(e){case ae.CLICK:return Sn(a.click);case ae.DOUBLE_CLICK:return Sn(a.doubleClick);case ae.ENTER:return Te("Enter");case ae.BACKSPACE:return rr(t,n);case ae.ESCAPE:return Te(n.escape);case ae.SHIFT:return Te(n.shift)}},hn=(e,n,t,a)=>y.jsx("span",{style:rn,children:e.map((r,o)=>y.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[o>0?y.jsx("span",{children:"+"}):null,ir(r,n,t,a)]},`${r}-${o}`))}),or=(e,n,t,a,r,o)=>o===M.COMPACT?y.jsxs("span",{style:Ye,children:[e?Ze(e):null,n.map((i,l)=>y.jsxs("span",{style:Ye,children:[l>0?y.jsx("span",{style:Va,children:r.alternative}):null,hn(i,t,a,r)]},`${i.join("+")}-${l}`))]}):y.jsxs("span",{style:rn,children:[e?Ze(e):null,n.map((i,l)=>y.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.22rem"},children:[l>0?y.jsx("span",{children:r.alternative}):null,hn(i,t,a,r)]},`${i.join("+")}-${l}`))]}),Je=(e,n,t,a,r,o)=>y.jsxs("div",{"data-testid":"annotation-help-action",style:Wn[o],children:[or(e.indicator,e.inputAlternatives,t,a,r,o),y.jsx("span",{style:Ka[o],children:e.description})]},`${e.inputAlternatives.map(i=>i.join("+")).join("-")}-${n}`),vn=(e,n,t,a,r,o)=>{const i=e.actions??[],l=o===M.COMPACT?Xa[e.severity]:Ke[e.severity];return y.jsxs("div",{"data-testid":"annotation-help-alert","data-severity":e.severity,style:l,children:[y.jsxs("div",{style:Wn[o],children:[y.jsx("span",{style:o===M.COMPACT?Ye:rn,children:ar(e.severity)}),y.jsx("span",{style:Ya,children:e.text})]}),i.map((d,s)=>Je(d,s,t,a,r,o))]},`${e.severity}-${e.text}-${n}`)},sr=({items:e,layout:n,locale:t,platform:a})=>{const r=Za(n),o=t??$a(),i=da(o),l=la(a),d=Wa(o),s=Qa(e);if(r===M.COMPACT){const u=s.map((m,p)=>typeof m=="string"||m.kind===oe.TEXT?Se(m,r):m.kind===oe.ALERT?vn(m,p,i,l,d,r):Je(m,p,i,l,d,r));return y.jsx("div",{"data-testid":"annotation-help-content",style:Ga,children:u})}const c=s.map((u,m)=>typeof u=="string"||u.kind===oe.TEXT?Se(u,r):u.kind===oe.ALERT?vn(u,m,i,l,d,r):Je(u,m,i,l,d,r));return y.jsx(y.Fragment,{children:c})};sr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxHelpContent",props:{items:{required:!0,tsType:{name:"unknown"},description:""},layout:{required:!1,tsType:{name:"unknown[union]",raw:"(typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS)[keyof typeof ANNOTATION_INFO_BOX_HELP_LAYOUTS]"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},platform:{required:!1,tsType:{name:"KeyboardDisplayPlatform"},description:""}}};const lr=({items:e,className:n,visualOptions:t})=>{const a=ce(t),r=a.subtitleTextClassName.split(/\s+/).filter(o=>o.length>0&&!o.startsWith("px-")).join(" ");return y.jsx("dl",{className:`flex flex-wrap items-start tabular-nums${n?` ${n}`:""}`,style:{columnGap:"1.35rem",rowGap:"0.5rem"},children:e.map((o,i)=>y.jsxs("div",{className:"grid max-w-full min-w-[5rem] flex-[0_1_auto] grid-rows-[auto,auto] content-start items-start gap-y-[0.1em] text-left",children:[y.jsx("dt",{className:r,style:a.subtitleTextStyle,children:o.label}),y.jsx("dd",{className:"m-0 leading-[1.25]",children:o.value})]},o.id??i))})};lr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetricGrid",props:{items:{required:!0,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const dr=({children:e,className:n,style:t,visualOptions:a})=>{const r=ce(a);return y.jsx("div",{className:`${r.subtitleMetaTextClassName}${n?` ${n}`:""}`,style:{...r.subtitleMetaTextStyle,...t},children:e})};dr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxMetaText",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const ur=Object.freeze({measurementSingular:"Messung",measurementPlural:"Messungen",availableSuffix:"verfügbar",previousAriaLabel:"Vorherige Messung",nextAriaLabel:"Nächste Messung",counterSeparator:"von"}),Tn=(e,n)=>`${e} ${e===1?n.measurementSingular:n.measurementPlural} ${n.availableSuffix}`.trim(),cr=({totalEntries:e,currentIndex:n,instructionText:t,availabilityLabel:a,labels:r,onFlyToAllMeasurements:o,onPreviousMeasurement:i,onNextMeasurement:l,visualOptions:d})=>{var g,f;const s=ce(d),c={...ur,...r};if(e<=0&&!t)return null;const u={fontSize:s.navigationLinkFontSize,border:"none",background:"transparent",padding:0,userSelect:"none"},m=((g=s.navigationControlLabels)==null?void 0:g.previous)??y.jsx(Ce,{icon:kt}),p=((f=s.navigationControlLabels)==null?void 0:f.next)??y.jsx(Ce,{icon:Et});return y.jsxs(y.Fragment,{children:[t?y.jsx("div",{className:`${s.navigationInstructionContainerClassName} ${s.mutedTextClassName}`,children:y.jsx("span",{children:t})}):null,e>0?y.jsx("div",{className:s.navigationAvailabilityContainerClassName,children:o?y.jsx("button",{type:"button",className:`${s.linkTextClassName} cursor-pointer`,onClick:o,style:{border:"none",background:"transparent",padding:0},children:a??Tn(e,c)}):y.jsx("span",{className:s.linkTextClassName,children:a??Tn(e,c)})}):null,e>0?y.jsxs("div",{className:s.navigationSummaryContainerClassName,children:[y.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${s.linkTextClassName}`,onClick:i,"data-test-id":"switch-measurement-left",style:u,"aria-label":c.previousAriaLabel,children:m}),y.jsxs("span",{className:"mx-4",children:[n+1," ",c.counterSeparator," ",e]}),y.jsx("button",{type:"button",className:`renderAsLink cursor-pointer select-none ${s.linkTextClassName}`,onClick:l,"data-test-id":"switch-measurement-right",style:u,"aria-label":c.nextAriaLabel,children:p})]}):null]})};cr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxNavigation",props:{totalEntries:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""},instructionText:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},availabilityLabel:{required:!1,tsType:{name:"ReactNode"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const mr=({children:e,className:n,style:t,visualOptions:a})=>{const r=ce(a);return y.jsx("div",{className:`${r.bodyContainerClassName} ${r.bodyTextClassName}${n?` ${n}`:""}`,style:{...r.bodyTextStyle,...t},children:e})};mr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTextContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},visualOptions:{required:!1,tsType:{name:"Partial",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Partial<AnnotationInfoBoxVisualOptions>"},description:""}}};const re=e=>e.trim(),_=Object.freeze({borderRadiusRem:"0.2143rem",shortLabelMaxLength:64,shortLabelWidthPaddingCh:.5,shortLabelMinWidthCh:2.5}),ge=e=>re(e).slice(0,_.shortLabelMaxLength),gr=e=>e.slice(0,_.shortLabelMaxLength),yr=({value:e,placeholder:n,onCommit:t,readOnly:a=!1,shortLabelValue:r,shortLabelPlaceholder:o,onShortLabelCommit:i,visualOptions:l})=>{const d=ce(l),[s,c]=T.useState(()=>re(e)),[u,m]=T.useState(()=>ge(r??"")),p=T.useRef(null),g=T.useRef(null),f=_.shortLabelMaxLength+_.shortLabelWidthPaddingCh,I=Math.min(Math.max(re(u||o||"").length+_.shortLabelWidthPaddingCh,_.shortLabelMinWidthCh),f);T.useEffect(()=>{c(re(e))},[e]),T.useEffect(()=>{m(ge(r??""))},[r]);const S=h=>{if(a){c(re(e));return}const L=re(h);c(L),t(L)},z=h=>{if(!i||a){m(ge(r??""));return}const L=ge(h);if(!L){const pt=ge(r??"");m(pt);return}m(L),i(L)},te=h=>{h.stopPropagation()},ct=h=>{var L;h.key==="Enter"&&(h.preventDefault(),(L=p.current)==null||L.blur())},mt=h=>{var L;h.key==="Enter"&&(h.preventDefault(),(L=g.current)==null||L.blur())},gt={...d.titleTextStyle,flex:"0 1 auto",minWidth:"1ch",maxWidth:"100%",fieldSizing:"content"},yt={...d.titleTextStyle,borderRadius:_.borderRadiusRem,flex:"0 1 auto",width:`${I}ch`,minWidth:`${_.shortLabelMinWidthCh}ch`,maxWidth:`min(${f}ch, 100%)`,fieldSizing:"content"};return y.jsxs("div",{className:"inline-flex min-w-0 max-w-full flex-1 items-center",style:{columnGap:"0.35em"},onMouseDown:te,onClick:te,children:[y.jsx("input",{ref:p,type:"text",value:s,placeholder:n,readOnly:a,"aria-readonly":a,className:d.titleInputClassName,style:gt,onMouseDown:te,onClick:te,onChange:h=>c(h.target.value),onBlur:h=>S(h.target.value),onKeyDown:ct}),i?y.jsx("input",{ref:g,type:"text",value:u,placeholder:o,readOnly:a,"aria-readonly":a,maxLength:_.shortLabelMaxLength,className:d.shortLabelInputClassName,style:yt,onMouseDown:te,onClick:te,onChange:h=>m(gr(h.target.value)),onBlur:h=>z(h.target.value),onKeyDown:mt}):null]})};yr.__docgenInfo={description:"",methods:[],displayName:"AnnotationInfoBoxTitleInput",props:{value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},onCommit:{required:!0,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shortLabelValue:{required:!1,tsType:{name:"string"},description:""},shortLabelPlaceholder:{required:!1,tsType:{name:"string"},description:""},onShortLabelCommit:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},visualOptions:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const pr={AUTHORING:"authoring",EXTERNAL:"external"},no={RELATIVE:"relative",ABSOLUTE:"absolute"},Un=e=>new Set(e.filter(n=>n.annotationRole===pr.EXTERNAL||n.readOnly||n.locked).flatMap(n=>n.nodeIds)),_e=e=>e.reduce((n,t)=>{const a=t.match(/(\d+)$/),r=a?Number(a[1]):Number.NaN;return Number.isFinite(r)?Math.max(n,r):n},0),to=e=>new Map(e.flatMap(n=>n.nodeIds.map(t=>[t,n.id]))),Z=({nodes:e,nodeLinks:n})=>{const t=new Set(e.map(i=>i.id)),a=n.map(i=>({...i,nodeIds:Array.from(new Set(i.nodeIds.filter(l=>t.has(l))))})).filter(i=>i.nodeIds.length>0),r=new Set(a.flatMap(i=>i.nodeIds)),o=e.filter(i=>!r.has(i.id)).map(i=>({id:i.id,nodeIds:[i.id]}));return[...a,...o]},In=6378137,Cr=.1,we=e=>e*Math.PI/180,fr=(e,n)=>{const t=we(n.latitude-e.latitude),a=we(n.longitude-e.longitude),r=we((e.latitude+n.latitude)/2),o=a*Math.cos(r)*In,i=t*In,l=n.altitude-e.altitude;return Math.hypot(o,i,l)},Nr=e=>typeof e=="string"&&e.trim().length>0?e.trim():null,xr=({nodes:e,nodeLinks:n,nodeId:t,movedNodeIds:a,linkToNodeId:r})=>{const o=e.find(g=>g.id===t)??null,i=Array.from(new Set(a.filter(Boolean)));if(!o||i.length===0)return[...n];const l=new Set(i),d=n.find(g=>g.nodeIds.includes(t))??null,s=Nr(r),c=s&&!l.has(s)?n.find(g=>g.nodeIds.includes(s))??null:null;return c!==null&&!c.nodeIds.some(g=>l.has(g))?Z({nodes:e,nodeLinks:n.map(g=>g.id===c.id?{...g,nodeIds:Array.from(new Set([...g.nodeIds,...i]))}:{...g,nodeIds:g.nodeIds.filter(f=>!l.has(f))})}):!d||i.length===d.nodeIds.length?[...n]:e.filter(g=>d.nodeIds.includes(g.id)&&!l.has(g.id)).some(g=>fr(g.coordinate,o.coordinate)>Cr)?Z({nodes:e,nodeLinks:n.map(g=>g.id===d.id?{...g,nodeIds:g.nodeIds.filter(f=>!l.has(f))}:{...g})}):[...n]},br=({nodeId:e,nodes:n,linkedNodeGroups:t,annotationEntries:a,selectedMeasurementIds:r=[],preferredMovedNodeIds:o})=>{const i=n.find(f=>f.id===e)??null;if(!i)return{targetNode:null,targetLinkedNodeGroup:null,movedNodeIds:[]};const l=t.find(f=>f.nodeIds.includes(e))??null,d=(l==null?void 0:l.nodeIds)??[e],s=Array.from(new Set((o??[]).filter(f=>d.includes(f)))),c=new Set(r.filter(Boolean)),u=new Set(a.filter(f=>c.has(f.id)).flatMap(f=>f.nodeIds)),m=d.filter(f=>u.has(f)),p=s.length>0?s:m.length>0?m:[...d],g=Un(a);return{targetNode:i,targetLinkedNodeGroup:l,movedNodeIds:p.filter(f=>!g.has(f))}},Sr=(e={})=>{const{initialToolType:n=xa,initialPointTemporaryMode:t=!1}=e;return{annotationToolType:n,selectionState:{selectedAnnotationIds:[],previousSelectedAnnotationId:null},annotationEntries:[],nodes:[],linkedNodeGroups:[],edges:[],infoBoxState:{activeAnnotationId:null},settingsState:{pointTemporaryMode:t,elevationReferenceAnnotationId:null,nextShortLabelCounterByToolType:{}}}},hr=({nodeIds:e,closed:n,nextEdgeNumericSuffix:t})=>{const a=[];let r=t;for(let l=0;l<e.length-1;l+=1){const d=e[l],s=e[l+1];!d||!s||(r+=1,a.push({id:`edge-${r}`,startNodeId:d,endNodeId:s}))}const o=e[0],i=e[e.length-1];return n&&e.length>=3&&o&&i&&(r+=1,a.push({id:`edge-${r}`,startNodeId:i,endNodeId:o})),a},vr=Yt({name:"annotationsRuntime",initialState:Sr(),reducers:{replaceState:(e,n)=>n.payload,setAnnotationToolType:(e,n)=>{e.annotationToolType=n.payload},setPointTemporaryMode:(e,n)=>{e.settingsState.pointTemporaryMode=n.payload},setElevationReferenceAnnotationId:(e,n)=>{e.settingsState.elevationReferenceAnnotationId=n.payload},setNextShortLabelCounterByToolType:(e,n)=>{e.settingsState.nextShortLabelCounterByToolType={...e.settingsState.nextShortLabelCounterByToolType,[n.payload.toolType]:Math.max(1,n.payload.nextCounter)}},setSelectedAnnotationId:(e,n)=>{const t=n.payload,a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t?[t]:[],e.infoBoxState.activeAnnotationId=t},setSelectedAnnotationIds:(e,n)=>{const t=Array.from(new Set(n.payload.filter(Boolean))),a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=a,e.selectionState.selectedAnnotationIds=t,e.infoBoxState.activeAnnotationId=t[t.length-1]??null},appendAnnotationEntities:(e,n)=>{if(e.nodes.push(...n.payload.nodes),n.payload.linkedNodeGroups.forEach(t=>{const a=e.linkedNodeGroups.find(r=>r.id===t.id);if(!a){e.linkedNodeGroups.push({id:t.id,nodeIds:[...t.nodeIds]});return}a.nodeIds=Array.from(new Set([...a.nodeIds,...t.nodeIds]))}),e.edges.push(...n.payload.edges),e.annotationEntries.push({...n.payload.annotationEntry,nodeIds:[...n.payload.annotationEntry.nodeIds],edgeIds:[...n.payload.annotationEntry.edgeIds]}),e.linkedNodeGroups=Z({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),n.payload.selectAnnotationId!==void 0){const t=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;e.selectionState.previousSelectedAnnotationId=t,e.selectionState.selectedAnnotationIds=n.payload.selectAnnotationId?[n.payload.selectAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.selectAnnotationId??null}},removeAnnotationById:(e,n)=>{const{annotationId:t,nextSelectedAnnotationId:a}=n.payload,r=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(s=>s.id===t))return;e.annotationEntries=e.annotationEntries.filter(s=>s.id!==t);const i=new Set(e.annotationEntries.flatMap(s=>s.nodeIds)),l=new Set(e.annotationEntries.flatMap(s=>s.edgeIds));if(e.nodes=e.nodes.filter(s=>i.has(s.id)),e.linkedNodeGroups=Z({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(s=>l.has(s.id)),e.selectionState.previousSelectedAnnotationId=r,e.settingsState.elevationReferenceAnnotationId===t&&(e.settingsState.elevationReferenceAnnotationId=null),a!==void 0){e.selectionState.selectedAnnotationIds=a?[a]:[],e.infoBoxState.activeAnnotationId=a??null;return}const d=e.selectionState.selectedAnnotationIds.filter(s=>s!==t);e.selectionState.selectedAnnotationIds=d,e.infoBoxState.activeAnnotationId=d[d.length-1]??null},removeAnnotationsByIds:(e,n)=>{const t=new Set(n.payload.annotationIds);if(t.size===0)return;const a=e.selectionState.selectedAnnotationIds[e.selectionState.selectedAnnotationIds.length-1]??null;if(!e.annotationEntries.some(d=>t.has(d.id)))return;e.annotationEntries=e.annotationEntries.filter(d=>!t.has(d.id));const o=new Set(e.annotationEntries.flatMap(d=>d.nodeIds)),i=new Set(e.annotationEntries.flatMap(d=>d.edgeIds));if(e.nodes=e.nodes.filter(d=>o.has(d.id)),e.linkedNodeGroups=Z({nodes:e.nodes,nodeLinks:e.linkedNodeGroups}),e.edges=e.edges.filter(d=>i.has(d.id)),e.selectionState.previousSelectedAnnotationId=a,e.settingsState.elevationReferenceAnnotationId&&t.has(e.settingsState.elevationReferenceAnnotationId)&&(e.settingsState.elevationReferenceAnnotationId=null),n.payload.nextSelectedAnnotationId!==void 0){e.selectionState.selectedAnnotationIds=n.payload.nextSelectedAnnotationId?[n.payload.nextSelectedAnnotationId]:[],e.infoBoxState.activeAnnotationId=n.payload.nextSelectedAnnotationId??null;return}const l=e.selectionState.selectedAnnotationIds.filter(d=>!t.has(d));e.selectionState.selectedAnnotationIds=l,e.infoBoxState.activeAnnotationId=l[l.length-1]??null},updateNodeCoordinateById:(e,n)=>{const{nodeId:t,coordinate:a,selectedMeasurementIds:r=[],movedNodeIds:o,linkToNodeId:i}=n.payload,{targetNode:l,movedNodeIds:d}=br({nodeId:t,nodes:e.nodes,linkedNodeGroups:e.linkedNodeGroups,annotationEntries:e.annotationEntries,selectedMeasurementIds:r,preferredMovedNodeIds:o});if(!l)return;const s=new Set(d);if(d.length===0)return;const c=Un(e.annotationEntries),u=i&&!c.has(i)?i:null;e.nodes.forEach(m=>{s.has(m.id)&&(m.coordinate=a)}),e.linkedNodeGroups=xr({nodes:e.nodes,nodeLinks:e.linkedNodeGroups,nodeId:l.id,movedNodeIds:d,linkToNodeId:u})},insertNodeIntoMeasurementEdge:(e,n)=>{const{measurementId:t,startNodeId:a,endNodeId:r,coordinate:o}=n.payload,i=e.annotationEntries.find(S=>S.id===t);if(!i)return;const l=i.nodeIds.findIndex((S,z)=>S===a&&i.nodeIds[z+1]===r),d=l>=0?l+1:i.closed&&i.nodeIds.length>=3&&i.nodeIds[i.nodeIds.length-1]===a&&i.nodeIds[0]===r?i.nodeIds.length:-1;if(d<0)return;const s=new Map(e.edges.map(S=>[S.id,S])),c=i.edgeIds.findIndex(S=>{const z=s.get(S);return(z==null?void 0:z.startNodeId)===a&&z.endNodeId===r}),u=c>=0?i.edgeIds[c]:null,m=u?s.get(u):void 0;if(!m||c<0)return;const p=`node-${_e(e.nodes.map(S=>S.id))+1}`,g=`edge-${_e(e.edges.map(S=>S.id))+1}`;e.nodes.push({id:p,coordinate:o}),e.linkedNodeGroups=Z({nodes:e.nodes,nodeLinks:[...e.linkedNodeGroups,{id:p,nodeIds:[p]}]}),m.endNodeId=p;const f={id:g,startNodeId:p,endNodeId:r},I=e.edges.findIndex(S=>S.id===u);I>=0?e.edges.splice(I+1,0,f):e.edges.push(f),i.nodeIds=[...i.nodeIds.slice(0,d),p,...i.nodeIds.slice(d)],i.edgeIds=[...i.edgeIds.slice(0,c+1),g,...i.edgeIds.slice(c+1)]},removeNodeFromAnnotation:(e,n)=>{const{annotationId:t,nodeId:a}=n.payload,r=e.annotationEntries.find(s=>s.id===t);if(!r||!r.nodeIds.includes(a))return;const o=r.nodeIds.filter(s=>s!==a);if(o.length===r.nodeIds.length)return;const i=new Set(r.edgeIds),l=hr({nodeIds:o,closed:!!r.closed,nextEdgeNumericSuffix:_e(e.edges.map(s=>s.id))});r.nodeIds=o,r.edgeIds=l.map(s=>s.id),e.edges=[...e.edges.filter(s=>!i.has(s.id)),...l];const d=new Set(e.annotationEntries.flatMap(s=>s.nodeIds));e.nodes=e.nodes.filter(s=>d.has(s.id)),e.linkedNodeGroups=Z({nodes:e.nodes,nodeLinks:e.linkedNodeGroups})},updateAnnotationEntryById:(e,n)=>{const{annotationId:t,displayName:a,shortLabel:r,hidden:o,locked:i,annotationRole:l,readOnly:d,labelAppearance:s,elevationDisplayMode:c,distanceAnchorCoordinateSelection:u,distanceTriangleAnchorCoordinateRole:m}=n.payload,p=e.annotationEntries.find(g=>g.id===t);p&&(a!==void 0&&(p.displayName=a),r!==void 0&&(p.shortLabel=r),o!==void 0&&(p.hidden=o),i!==void 0&&(p.locked=i),l!==void 0&&(p.annotationRole=l),d!==void 0&&(p.readOnly=d),s!==void 0&&(p.labelAppearance={...p.labelAppearance??{},...s}),c!==void 0&&(p.elevationDisplayMode=c),u!==void 0&&(p.distanceAnchorCoordinateSelection=u),m!==void 0&&(p.distanceTriangleAnchorCoordinateRole=m))}}}),{appendAnnotationEntities:ao,removeAnnotationById:ro,removeAnnotationsByIds:io,removeNodeFromAnnotation:oo,setElevationReferenceAnnotationId:so,setNextShortLabelCounterByToolType:lo,setPointTemporaryMode:uo,insertNodeIntoMeasurementEdge:co,updateNodeCoordinateById:mo,updateAnnotationEntryById:go,replaceState:yo,setAnnotationToolType:po,setSelectedAnnotationId:Co,setSelectedAnnotationIds:fo}=vr.actions,on=T.createContext(null);Kt(on);const Tr=Zt(on);Jt(on);const No=()=>Tr(),Qe=Object.freeze({strokeWidthPx:1.5,overlayDashPattern:"8 8"}),Ir=(e,n)=>typeof e=="number"&&Number.isFinite(e)&&e>0?e:n,Ar=(e,n)=>{const t=e==null?void 0:e.trim();return t||n},xo=(e,n=Qe)=>({strokeWidthPx:Ir(e==null?void 0:e.strokeWidthPx,n.strokeWidthPx),overlayDashPattern:Ar(e==null?void 0:e.overlayDashPattern,n.overlayDashPattern)}),An=Object.freeze({previewAlpha:.9,surfaceAlpha:.92}),b={colors:{neutral:ve(1),accent:ve(1),preview:ve(An.previewAlpha),surface:qt(An.surfaceAlpha),transparent:"transparent",components:{direct:qe(k.DIRECT),vertical:qe(k.VERTICAL),horizontal:qe(k.HORIZONTAL)},componentLabelAccents:{direct:Me(k.DIRECT),vertical:Me(k.VERTICAL),horizontal:Me(k.HORIZONTAL)}},sizes:{edgeStrokeWidth:Qe.strokeWidthPx,pointPixelSize:10,pointOutlineWidth:1},patterns:{edgeDashPattern:Qe.overlayDashPattern}},Vn=Object.freeze({edge:Object.freeze({stroke:b.colors.accent,strokeWidth:b.sizes.edgeStrokeWidth,overlayDashPattern:b.patterns.edgeDashPattern}),point:Object.freeze({pixelSize:b.sizes.pointPixelSize,fill:b.colors.transparent,outline:b.colors.surface,outlineWidth:b.sizes.pointOutlineWidth})}),Xn=Object.freeze({edge:Object.freeze({stroke:b.colors.neutral}),point:Object.freeze({outline:b.colors.neutral})}),kr=(e,n={})=>({...e,...n}),Er=(e,n={})=>({...e,...n}),bo=e=>kr(e,Xn.edge),So=e=>Er(e,Xn.point),en={DARK_ON_BRIGHT:"dark-on-bright",BRIGHT_ON_DARK:"bright-on-dark"},Lr=Y.fontSizePx.pointLabel,Rr=e=>`${e/Lr}rem`,se=Object.freeze({fontFamily:Y.fontFamily,rootFontSizeRem:"1rem",supportFontSizeRem:Rr(Y.fontSizePx.supportText),headingFontSizeRem:"1rem",lineLabelFontWeight:Y.fontWeight.medium,badgeFontWeight:Y.fontWeight.medium,headingFontWeight:Y.fontWeight.semibold,sectionTitleFontWeight:Y.fontWeight.semibold}),Pr={SOFT_RECT_FADE:"soft-rect-fade",TEXT_ECHO_DARKEN:"text-echo-darken"},Or={NONE:"none",MOVE_ON_LINE:"move-on-line"},q=Object.freeze({appearance:Object.freeze({themeStyle:en.BRIGHT_ON_DARK}),text:Object.freeze({fontFamily:se.fontFamily,fontWeight:se.lineLabelFontWeight}),background:Object.freeze({style:Pr.TEXT_ECHO_DARKEN}),surface:Object.freeze({}),layout:Object.freeze({shortEdgeOffsetPx:-2}),collision:Object.freeze({allowEarlyRemoval:!0,resolutionStrategy:Or.MOVE_ON_LINE,anchorSlideStepRatio:.1,maxAnchorSlideDeltaRatio:.3})}),de=Object.freeze({horizontalLabelOffsetPx:7,verticalFlippedBaselineOffsetPx:6,verticalBaselineAngleEpsilonRad:1e-9,sideHysteresisPx:1.5,upperSideGapFactor:.15,upperSideGapNormalYEpsilon:.001}),sn=e=>{var n,t;return{appearance:{...q.appearance,...e==null?void 0:e.appearance},text:{...q.text,...e==null?void 0:e.text,echo:((n=e==null?void 0:e.text)==null?void 0:n.echo)===void 0&&q.text.echo===void 0?void 0:{...q.text.echo,...(t=e==null?void 0:e.text)==null?void 0:t.echo}},background:{...q.background,...e==null?void 0:e.background},surface:{...q.surface,...e==null?void 0:e.surface},layout:{...q.layout,...e==null?void 0:e.layout},collision:{...q.collision,...e==null?void 0:e.collision}}},F=Object.freeze({lineStrokeWidthPx:b.sizes.edgeStrokeWidth,layerZIndex:"1550",lineLabelOffsetPx:8,lineLabelMinLengthPx:44,geometryEpsilonMeters:.01,labelReferenceLineLengthEpsilonPx:.001,labelReferenceDistanceFactor:.2,labelReferenceMinDistancePx:24,labelReferenceMaxDistancePx:48,labelReferenceInsideBlendFactor:.35,labelSideSwitchThresholdPx:4,directLineColor:b.colors.components.direct,verticalLineColor:b.colors.components.vertical,horizontalLineColor:b.colors.components.horizontal,draftChainColor:b.colors.preview}),ye=Object.freeze({root:"carma-annotation-text-overlay",backdrop:"carma-annotation-text-overlay__backdrop",surface:"carma-annotation-text-overlay__surface",textEcho:"carma-annotation-text-overlay__text-echo",text:"carma-annotation-text-overlay__text"}),he=Object.freeze({paddingBlockEx:.25,paddingInlineEx:.65,backdropInsetBlockEx:-.35,backdropInsetInlineEx:-.75}),qr=Object.freeze({fontSize:"20px",letterSpacing:"5%",fontWeight:800,textEchoBlurPx:12,textEchoShadow:"0 0 4px rgba(2, 6, 23, 0.8), 0 0 12px rgba(2, 6, 23, 0.77), 0 0 24px rgba(2, 6, 23, 0.64)"}),Mr=Object.freeze({[en.BRIGHT_ON_DARK]:"15, 23, 42",[en.DARK_ON_BRIGHT]:"255, 255, 255"}),pe=(e,n)=>{const t=document.createElement(e);return t.className=n,t},X=({element:e,value:n,property:t,unit:a,min:r,max:o})=>{if(typeof n!="number"||!Number.isFinite(n))return;const i=r===void 0?n:Math.max(n,r),l=o===void 0?i:Math.min(i,o);e.style.setProperty(t,`${l}${a??""}`)},Br=({element:e,backdrop:n,surface:t,accentColor:a,visualOptions:r=q})=>{var i,l,d,s,c,u,m,p,g,f,I,S;e.style.setProperty("--carma-annotation-text-overlay-font-family",r.text.fontFamily),e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(r.text.fontWeight)),a&&e.style.setProperty("--carma-annotation-text-overlay-glow-color",a),e.dataset.annotationThemeStyle=r.appearance.themeStyle,e.dataset.annotationTextOverlayBackgroundStyle=r.background.style,typeof r.background.surfaceAlpha=="number"&&Number.isFinite(r.background.surfaceAlpha)&&!((i=r.background.color)!=null&&i.trim())&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",`rgba(${Mr[r.appearance.themeStyle]}, ${Math.min(Math.max(r.background.surfaceAlpha,0),1)})`);const o=r.background.showBackdrop!==!1;n.style.display=o?"block":"none",t.style.display=o?"block":"none",(l=r.text.color)!=null&&l.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-color",r.text.color),(d=r.text.blendMode)!=null&&d.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-blend-mode",r.text.blendMode),(s=r.background.color)!=null&&s.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-background",r.background.color),(c=r.background.blendMode)!=null&&c.trim()&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-blend-mode",r.background.blendMode),(u=r.surface.blendMode)!=null&&u.trim()&&e.style.setProperty("--carma-annotation-text-overlay-surface-blend-mode",r.surface.blendMode),(p=(m=r.text.echo)==null?void 0:m.color)!=null&&p.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-color",r.text.echo.color),(f=(g=r.text.echo)==null?void 0:g.blendMode)!=null&&f.trim()&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blend-mode",r.text.echo.blendMode),X({element:e,value:(I=r.text.echo)==null?void 0:I.blurPx,property:"--carma-annotation-text-overlay-text-echo-blur-px",unit:"px",min:0}),X({element:e,value:(S=r.text.echo)==null?void 0:S.opacity,property:"--carma-annotation-text-overlay-text-echo-opacity",min:0,max:1}),X({element:e,value:r.background.blurPx,property:"--carma-annotation-text-overlay-surface-blur-px",unit:"px",min:0}),X({element:e,value:r.background.brightnessPct,property:"--carma-annotation-text-overlay-surface-brightness-pct",unit:"%",min:0}),X({element:e,value:r.background.saturatePct,property:"--carma-annotation-text-overlay-surface-saturate-pct",unit:"%",min:0}),X({element:e,value:r.background.radiusEx,property:"--carma-annotation-text-overlay-backdrop-radius",unit:"ex",min:0}),X({element:e,value:r.background.edgeBlurPx,property:"--carma-annotation-text-overlay-surface-edge-blur-px",unit:"px",min:0}),(typeof r.surface.paddingBlockEx=="number"||typeof r.surface.paddingInlineEx=="number")&&(e.style.setProperty("--carma-annotation-text-overlay-padding-block",`${typeof r.surface.paddingBlockEx=="number"&&Number.isFinite(r.surface.paddingBlockEx)?Math.max(r.surface.paddingBlockEx,0):he.paddingBlockEx}ex`),e.style.setProperty("--carma-annotation-text-overlay-padding-inline",`${typeof r.surface.paddingInlineEx=="number"&&Number.isFinite(r.surface.paddingInlineEx)?Math.max(r.surface.paddingInlineEx,0):he.paddingInlineEx}ex`)),(typeof r.background.insetBlockEx=="number"||typeof r.background.insetInlineEx=="number")&&e.style.setProperty("--carma-annotation-text-overlay-backdrop-inset",`${typeof r.background.insetBlockEx=="number"&&Number.isFinite(r.background.insetBlockEx)?r.background.insetBlockEx:he.backdropInsetBlockEx}ex ${typeof r.background.insetInlineEx=="number"&&Number.isFinite(r.background.insetInlineEx)?r.background.insetInlineEx:he.backdropInsetInlineEx}ex`)},_r=(e,n)=>{n&&(n.fontSize&&e.style.setProperty("--carma-annotation-text-overlay-font-size",n.fontSize),n.fontWeight!==void 0&&e.style.setProperty("--carma-annotation-text-overlay-font-weight",String(n.fontWeight)),n.letterSpacing&&e.style.setProperty("--carma-annotation-text-overlay-letter-spacing",n.letterSpacing),typeof n.textEchoBlurPx=="number"&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-blur-px",`${n.textEchoBlurPx}px`),n.textEchoShadow&&e.style.setProperty("--carma-annotation-text-overlay-text-echo-shadow",n.textEchoShadow))},Yn=({accentColor:e,visualOptions:n,styleOptions:t})=>{const a=pe("div",ye.root),r=pe("div",ye.backdrop),o=pe("div",ye.surface),i=pe("div",ye.textEcho),l=pe("div",ye.text);return i.dataset.annotationTextOverlayTextEcho="true",l.dataset.annotationTextOverlayText="foreground",Br({element:a,backdrop:r,surface:o,textEcho:i,text:l,accentColor:e,visualOptions:n}),_r(a,t),a.append(r,o,i,l),a},wr=e=>e.querySelector('[data-annotation-text-overlay-text="foreground"]'),Fr=e=>e.querySelector('[data-annotation-text-overlay-text-echo="true"]'),Kn=(e,n)=>{const t=wr(e),a=Fr(e);t&&t.textContent!==n&&(t.textContent=n),a&&a.textContent!==n&&(a.textContent=n)},Ee=(e,n)=>{Object.assign(e.style,n)},nn=Object.freeze({className:"carma-annotation-overlay-line-label",frameClassName:"carma-annotation-overlay-line-label__frame"}),Dr=Object.freeze({direct:{},vertical:{labelOffsetPx:F.lineLabelOffsetPx,labelFlippedBaselineOffsetPx:de.verticalFlippedBaselineOffsetPx,labelRotationMode:_t.CLOCKWISE},horizontal:{labelOffsetPx:de.horizontalLabelOffsetPx}}),kn=(e,n)=>{const t=document.createElement(e);return t.className=n,t},zr=e=>e.querySelector(`.${nn.frameClassName}`),Hr=e=>{const n=e.dataset.annotationOverlayLineLabelShortEdgeOffsetPx,t=n?Number(n):Number.NaN;return Number.isFinite(t)?t:q.layout.shortEdgeOffsetPx},Zn=e=>e.dataset.annotationOverlayLineLabelKind==="vertical"||e.dataset.annotationOverlayLineLabelKind==="horizontal"?e.dataset.annotationOverlayLineLabelKind:"direct",jr=e=>Zn(e)==="vertical",$r=({kind:e,outsideReferencePoint:n,anchorRatio:t})=>({...Dr[e],anchorRatio:t===void 0?void 0:Ft(t),getLabelOutsideReferencePoint:n?()=>({x:n.x,y:n.y}):void 0}),Wr=({x:e,y:n,angleRad:t,anchor:a})=>`translate(${Math.round(e)}px, ${Math.round(n)}px) ${a==="left"?"translate(0%, -50%)":a==="right"?"translate(-100%, -50%)":"translate(-50%, -50%)"} rotate(${t}rad)`,Gr=(e,n,t=ca.LABEL)=>{const a=Ca(e,t);if(!a)return null;const r=document.createElement("div");return r.id=n,r.dataset.annotationOverlayLayer="true",Ee(r,{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",zIndex:"auto"}),a.appendChild(r),r},ho=Gr,Ur=e=>{e==null||e.remove()},vo=Ur,To=e=>{const n=new Gt,t=n.update.bind(n);return n.update=a=>{if(!(a.passes.pick&&!a.passes.render))return t(a)},e.primitives.add(n),n},Io=(e,n)=>{if(!(!n||!ia(e)))try{if(typeof n.isDestroyed=="function"&&n.isDestroyed())return;e.primitives.remove(n)}catch{}},Jn=e=>Ut.fromType("Color",{color:gn.fromCssColorString(e)??gn.WHITE}),Ao=(e,n,t,a)=>({polyline:e.add({id:n,positions:[C.ZERO,C.ZERO],width:(a==null?void 0:a.width)??F.lineStrokeWidthPx,material:Jn(t),show:!1}),colorCss:t}),ko=(e,n)=>{e.colorCss!==n&&(e.polyline.material=Jn(n),e.colorCss=n)},Eo=e=>{e.polyline.show=!1},Lo=(e,n)=>{e.polyline.positions=[...n],e.polyline.show=n.length>=2},Fe=(e,n)=>{const t=sn(n),a=kn("div",nn.className),r=kn("div",nn.frameClassName),o=Yn({accentColor:e,visualOptions:t});return a.dataset.annotationOverlayLineLabelShortEdgeOffsetPx=String(t.layout.shortEdgeOffsetPx),r.append(o),a.appendChild(r),a},Ro=e=>{const n=sn(e),t=Fe(b.colors.componentLabelAccents.direct,n);t.dataset.annotationOverlayLineLabelKind="direct";const a=Fe(b.colors.componentLabelAccents.vertical,n);a.dataset.annotationOverlayLineLabelKind="vertical";const r=Fe(b.colors.componentLabelAccents.horizontal,n);return r.dataset.annotationOverlayLineLabelKind="horizontal",{direct:t,vertical:a,horizontal:r}},En=(e,n)=>{if(!(n!=null&&n.screenPosition)){e.style.display="none";return}Kn(e,n.text),e.style.display="inline-grid",e.style.transform=`translate(${Math.round(n.screenPosition.x)}px, ${Math.round(n.screenPosition.y)}px) translate(-50%, -50%)`},Po=({overlayLayer:e,accentColor:n,visualOptions:t})=>{const a=Yn({accentColor:n,visualOptions:sn(t),styleOptions:qr});return a.dataset.annotationOverlayLineLabelKind="area",Ee(a,{position:"absolute",left:"0",top:"0",display:"none",willChange:"transform"}),e==null||e.appendChild(a),{setState:r=>En(a,r),clear:()=>En(a,null),destroy:()=>a.remove()}},Oo=e=>{e.direct.style.display="none",e.vertical.style.display="none",e.horizontal.style.display="none"},Qn=(e,n)=>{Ee(e,{width:`${n.pixelSize}px`,height:`${n.pixelSize}px`,border:`${n.outlineWidth}px solid ${n.outline}`,background:n.fill})},Vr=(e=Vn.point)=>{const n=document.createElement("div");return Ee(n,{position:"absolute",left:"0",top:"0",display:"none",borderRadius:"999px",transform:"translate(-50%, -50%)",boxSizing:"border-box",pointerEvents:"none",userSelect:"none",webkitUserSelect:"none",willChange:"transform"}),Qn(n,e),n},Xr=({overlayLayer:e,pointMarkers:n,count:t,style:a})=>{for(;n.length<t;){const r=Vr(a);n.push(r),e.appendChild(r)}},qo=e=>{e.forEach(n=>{n.style.display="none"})},Mo=({scene:e,overlayLayer:n,pointMarkers:t,coordinates:a,style:r=Vn.point})=>{Xr({overlayLayer:n,pointMarkers:t,count:a.length,style:r}),a.forEach((o,i)=>{const l=t[i];if(!l)return;Qn(l,r);const d=oa.worldToWindowCoordinates(e,Ue(o));if(!Vt(d)){l.style.display="none";return}l.style.display="block",l.style.transform=`translate(${Math.round(d.x)}px, ${Math.round(d.y)}px) translate(-50%, -50%)`}),t.slice(a.length).forEach(o=>{o.style.display="none"})},Yr=e=>wn(e>Q||e<-Q?e+fe:e),Kr=e=>{let n=wn(e);return n>Q?n=n-fe:n<-Q&&(n=n+fe),n},Zr=({angleRad:e,lineSide:n})=>Math.abs(Math.abs(e)-Q)>de.verticalBaselineAngleEpsilonRad?e:n==="left"?Q:-Q,Jr=({deltaX:e,deltaY:n,lineSide:t,flipReadingDirection:a,forceHorizontal:r})=>{if(r)return 0;const o=Yr(Math.atan2(n,e)),i=a?o>=0?o-fe:o+fe:o;return Zr({angleRad:Kr(i),lineSide:t})},Qr=({start:e,end:n,kind:t,outsideReferencePoint:a,shortEdgeOffsetPx:r=q.layout.shortEdgeOffsetPx,useShortEdgeRules:o=!0,flipReadingDirection:i=!1,previousShouldFlip:l=!1,anchorRatio:d})=>{const s=wt({svgLine:{start:{x:e.x,y:e.y},end:{x:n.x,y:n.y}},options:$r({kind:t,outsideReferencePoint:a,anchorRatio:d}),previousShouldFlip:l,sideSwitchThresholdPx:de.sideHysteresisPx});if(!s)return null;const c=n.x-e.x,u=n.y-e.y;if(o&&s.lineLengthPx<F.lineLabelMinLengthPx){const m=s.normalX>=0,p=m?"left":"right";return{x:s.midX+s.normalX*r,y:s.midY+s.normalY*r,angleRad:Jr({deltaX:c,deltaY:u,lineSide:p,flipReadingDirection:i,forceHorizontal:!0}),anchor:m?"left":"right",anchorRatio:s.anchorRatio,isShortEdge:!0,shouldFlip:s.shouldFlip,normalX:s.normalX,normalY:s.normalY}}return{x:s.textX,y:s.textY,angleRad:s.angleRad,anchor:"center",anchorRatio:s.anchorRatio,isShortEdge:!1,shouldFlip:s.shouldFlip,normalX:s.normalX,normalY:s.normalY}},Bo=({element:e,text:n,start:t,end:a,outsideReferencePoint:r,flipReadingDirection:o=!1,anchorRatio:i})=>{const l=Qr({start:t,end:a,kind:Zn(e),outsideReferencePoint:r,shortEdgeOffsetPx:Hr(e),useShortEdgeRules:jr(e),flipReadingDirection:o,anchorRatio:i,previousShouldFlip:e.dataset.annotationOverlayLineLabelNormalFlip==="1"});if(!l){e.style.display="none";return}Kn(e,n),e.style.display="block";const d=zr(e),s=!l.isShortEdge&&l.normalY<-de.upperSideGapNormalYEpsilon&&d?d.getBoundingClientRect().height*de.upperSideGapFactor:0,c=l.x+l.normalX*s,u=l.y+l.normalY*s;e.dataset.annotationOverlayLineLabelShortEdge=l.isShortEdge?"true":"false",e.dataset.annotationOverlayLineLabelAnchorRatio=`${l.anchorRatio}`,e.dataset.annotationOverlayLineLabelNormalFlip=l.shouldFlip?"1":"0",e.style.transform=Wr({...l,x:c,y:u})},ei=e=>Math.min(F.labelReferenceMaxDistancePx,Math.max(F.labelReferenceMinDistancePx,e)),De=({start:e,end:n,insidePoint:t,previousOutsideSign:a})=>{const r=n.x-e.x,o=n.y-e.y,i=Math.hypot(r,o);if(!Number.isFinite(i)||i<=F.labelReferenceLineLengthEpsilonPx)return null;const l=(e.x+n.x)*.5,d=(e.y+n.y)*.5,s=-o/i,c=r/i,u=(t.x-l)*s+(t.y-d)*c,m=u>=0?-1:1,p=a&&a!==m&&Math.abs(u)<F.labelSideSwitchThresholdPx?a:m,g=ei(i*F.labelReferenceDistanceFactor);return{outsideSign:p,referencePoint:{x:l+s*p*g,y:d+c*p*g}}},_o=({anchor:e,target:n,aux:t,anchorAltitudeMeters:a,targetAltitudeMeters:r,previousVerticalOutsideSign:o})=>{const i={x:e.x,y:e.y},l={x:n.x,y:n.y},d={x:t.x,y:t.y},s=a>=r?i:l,c={anchor:i,target:l,aux:d,highest:s,centroid:{x:(i.x+l.x+d.x)/3,y:(i.y+l.y+d.y)/3}},u=Na({triangle:c,auxiliaryAltitudeMeters:r,highestAltitudeMeters:Math.max(a,r),insideBlendFactor:F.labelReferenceInsideBlendFactor}),m=De({start:i,end:l,insidePoint:u}),p=De({start:d,end:l,insidePoint:u}),g=De({start:i,end:d,insidePoint:l,previousOutsideSign:o});return{directOutsideReferencePoint:(m==null?void 0:m.referencePoint)??null,verticalOutsideReferencePoint:(g==null?void 0:g.referencePoint)??null,horizontalOutsideReferencePoint:(p==null?void 0:p.referencePoint)??null,nextVerticalOutsideSign:g==null?void 0:g.outsideSign}},wo=({directLabelText:e,verticalLabelText:n,horizontalLabelText:t})=>({showVerticalLabel:n!==null&&n!==e,showHorizontalLabel:t!==null&&t!==e}),Fo=()=>({cartographicA:new Ge,cartographicB:new Ge,auxiliaryPoint:new C,auxiliaryScreen:new Xt}),Do=({scene:e,anchorPointECEF:n,targetPointECEF:t,scratch:a})=>{const r=e.globe.ellipsoid,o=r.cartesianToCartographic(n,a.cartographicA),i=r.cartesianToCartographic(t,a.cartographicB);return!o||!i?null:C.fromRadians(o.longitude,o.latitude,i.height??0,r,a.auxiliaryPoint)},zo=e=>{const n=Oa(e);return{longitude:n.longitude,latitude:n.latitude,altitude:Ra(n.altitude)}},Ho=({firstCorner:e,oppositeCorner:n})=>{const t=Ue(e),a=Ue(n),r=Hn(t,a);return r?[t,r.adjacentHorizontalCorner,a,r.adjacentVerticalCorner,t]:null},ni=Object.freeze({longPressDurationMs:320}),ti=({interactive:e,onClick:n,onHoverChange:t,onLongPress:a,longPressDurationMs:r=ni.longPressDurationMs,markerStyle:o})=>{const[i,l]=T.useState(!1),d=T.useRef(void 0),s=T.useRef(!1),c=T.useCallback(()=>{d.current!==void 0&&(window.clearTimeout(d.current),d.current=void 0)},[]),u=T.useCallback(I=>{if(I.stopPropagation(),I.button!==0||!a){c();return}s.current=!1,c(),d.current=window.setTimeout(()=>{s.current=!0,a()},r)},[c,r,a]),m=T.useCallback(()=>{c()},[c]),p=T.useCallback(I=>{if(I.stopPropagation(),s.current){s.current=!1;return}n==null||n()},[n]),g=T.useCallback(()=>{l(!0),t==null||t(!0)},[t]),f=T.useCallback(()=>{c(),l(!1),t==null||t(!1)},[c,t]);return T.useEffect(()=>c,[c]),y.jsx("div",{"data-runtime-point-marker-shell":"true",style:{position:"relative",width:"0px",height:"0px",overflow:"visible",pointerEvents:"none"},children:y.jsx("div",{"data-runtime-point-marker-circle":"true",style:{position:"absolute",left:"0px",top:"0px",transform:i?`translate(-50%, -50%) scale(${_n.hover.scale})`:"translate(-50%, -50%)",borderRadius:"999px",boxSizing:"border-box",pointerEvents:e?"auto":"none",cursor:e?"pointer":"default",transition:Dt(),boxShadow:i?zt():"none",filter:i?Ht():"none",...o},onClick:e?p:void 0,onMouseDown:e?u:void 0,onMouseUp:e?m:void 0,onMouseEnter:e?g:void 0,onMouseLeave:e?f:void 0})})};ti.__docgenInfo={description:"",methods:[],displayName:"PointMarkerOverlayShell",props:{interactive:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHoverChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},onLongPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},longPressDurationMs:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"pointMarkerVisualizerDefaults.longPressDurationMs",computed:!0}},markerStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const jo={RIGHTMOST_SCREEN_SPACE:"rightmost-screen-space",LEFTMOST_SCREEN_SPACE:"leftmost-screen-space"},$o={START_COORDINATE:"start-coordinate",END_COORDINATE:"end-coordinate"},Wo={POINT_LABEL:"point-label",LINE_BLEND:"line-blend"},Go={GROUND:"ground",COPLANAR:"coplanar"},ai={MIN:1,MAX:1400,LOG_SCALE:64};Object.freeze({layoutConfig:sa(void 0),markerPixelSize:10,markerOutlineWidth:b.sizes.pointOutlineWidth,stemColor:b.colors.surface,activeMoveGizmoLabelZIndex:ai.MAX+1});Object.freeze({...jt({markerDiameterPx:b.sizes.pointPixelSize,markerStrokeWidthPx:b.sizes.pointOutlineWidth}),tickColor:_n.colors.surfaceStrong,minOverlayZIndex:$t.zIndex.interactionHandleFloor});Object.freeze({cornerOverlay:Object.freeze({minBoxPx:20,paddingPx:6,targetRadiusPx:20,segments:20,strokeWidthPx:1.25,color:ha(),straightHitTargetPx:20})});function me(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function be(e,n){var t=Object.create(e.prototype);for(var a in n)t[a]=n[a];return t}function G(){}var ne=.7,ue=1/ne,ri=/^#([0-9a-f]{3})$/,ii=/^#([0-9a-f]{6})$/,oi=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,si=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,li=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,di=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,ui=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,ci=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};me(G,ln,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}});function ln(e){var n;return e=(e+"").trim().toLowerCase(),(n=ri.exec(e))?(n=parseInt(n[1],16),new A(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1)):(n=ii.exec(e))?Rn(parseInt(n[1],16)):(n=oi.exec(e))?new A(n[1],n[2],n[3],1):(n=si.exec(e))?new A(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=li.exec(e))?Pn(n[1],n[2],n[3],n[4]):(n=di.exec(e))?Pn(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=ui.exec(e))?On(n[1],n[2]/100,n[3]/100,1):(n=ci.exec(e))?On(n[1],n[2]/100,n[3]/100,n[4]):Ln.hasOwnProperty(e)?Rn(Ln[e]):e==="transparent"?new A(NaN,NaN,NaN,0):null}function Rn(e){return new A(e>>16&255,e>>8&255,e&255,1)}function Pn(e,n,t,a){return a<=0&&(e=n=t=NaN),new A(e,n,t,a)}function dn(e){return e instanceof G||(e=ln(e)),e?(e=e.rgb(),new A(e.r,e.g,e.b,e.opacity)):new A}function et(e,n,t,a){return arguments.length===1?dn(e):new A(e,n,t,a??1)}function A(e,n,t,a){this.r=+e,this.g=+n,this.b=+t,this.opacity=+a}me(A,et,be(G,{brighter:function(e){return e=e==null?ue:Math.pow(ue,e),new A(this.r*e,this.g*e,this.b*e,this.opacity)},darker:function(e){return e=e==null?ne:Math.pow(ne,e),new A(this.r*e,this.g*e,this.b*e,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var e=this.opacity;return e=isNaN(e)?1:Math.max(0,Math.min(1,e)),(e===1?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(e===1?")":", "+e+")")}}));function On(e,n,t,a){return a<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new B(e,n,t,a)}function mi(e){if(e instanceof B)return new B(e.h,e.s,e.l,e.opacity);if(e instanceof G||(e=ln(e)),!e)return new B;if(e instanceof B)return e;e=e.rgb();var n=e.r/255,t=e.g/255,a=e.b/255,r=Math.min(n,t,a),o=Math.max(n,t,a),i=NaN,l=o-r,d=(o+r)/2;return l?(n===o?i=(t-a)/l+(t<a)*6:t===o?i=(a-n)/l+2:i=(n-t)/l+4,l/=d<.5?o+r:2-o-r,i*=60):l=d>0&&d<1?0:i,new B(i,l,d,e.opacity)}function gi(e,n,t,a){return arguments.length===1?mi(e):new B(e,n,t,a??1)}function B(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}me(B,gi,be(G,{brighter:function(e){return e=e==null?ue:Math.pow(ue,e),new B(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ne:Math.pow(ne,e),new B(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,a=t+(t<.5?t:1-t)*n,r=2*t-a;return new A(ze(e>=240?e-240:e+120,r,a),ze(e,r,a),ze(e<120?e+240:e-120,r,a),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));function ze(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}var nt=Math.PI/180,tt=180/Math.PI,ke=18,at=.95047,rt=1,it=1.08883,ot=4/29,le=6/29,st=3*le*le,yi=le*le*le;function un(e){if(e instanceof w)return new w(e.l,e.a,e.b,e.opacity);if(e instanceof j){var n=e.h*nt;return new w(e.l,Math.cos(n)*e.c,Math.sin(n)*e.c,e.opacity)}e instanceof A||(e=dn(e));var t=We(e.r),a=We(e.g),r=We(e.b),o=He((.4124564*t+.3575761*a+.1804375*r)/at),i=He((.2126729*t+.7151522*a+.072175*r)/rt),l=He((.0193339*t+.119192*a+.9503041*r)/it);return new w(116*i-16,500*(o-i),200*(i-l),e.opacity)}function pi(e,n,t,a){return arguments.length===1?un(e):new w(e,n,t,a??1)}function w(e,n,t,a){this.l=+e,this.a=+n,this.b=+t,this.opacity=+a}me(w,pi,be(G,{brighter:function(e){return new w(this.l+ke*(e??1),this.a,this.b,this.opacity)},darker:function(e){return new w(this.l-ke*(e??1),this.a,this.b,this.opacity)},rgb:function(){var e=(this.l+16)/116,n=isNaN(this.a)?e:e+this.a/500,t=isNaN(this.b)?e:e-this.b/200;return e=rt*je(e),n=at*je(n),t=it*je(t),new A($e(3.2404542*n-1.5371385*e-.4985314*t),$e(-.969266*n+1.8760108*e+.041556*t),$e(.0556434*n-.2040259*e+1.0572252*t),this.opacity)}}));function He(e){return e>yi?Math.pow(e,1/3):e/st+ot}function je(e){return e>le?e*e*e:st*(e-ot)}function $e(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function We(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Ci(e){if(e instanceof j)return new j(e.h,e.c,e.l,e.opacity);e instanceof w||(e=un(e));var n=Math.atan2(e.b,e.a)*tt;return new j(n<0?n+360:n,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function fi(e,n,t,a){return arguments.length===1?Ci(e):new j(e,n,t,a??1)}function j(e,n,t,a){this.h=+e,this.c=+n,this.l=+t,this.opacity=+a}me(j,fi,be(G,{brighter:function(e){return new j(this.h,this.c,this.l+ke*(e??1),this.opacity)},darker:function(e){return new j(this.h,this.c,this.l-ke*(e??1),this.opacity)},rgb:function(){return un(this).rgb()}}));var lt=-.14861,cn=1.78277,mn=-.29227,Le=-.90649,xe=1.97294,qn=xe*Le,Mn=xe*cn,Bn=cn*mn-Le*lt;function Ni(e){if(e instanceof ee)return new ee(e.h,e.s,e.l,e.opacity);e instanceof A||(e=dn(e));var n=e.r/255,t=e.g/255,a=e.b/255,r=(Bn*a+qn*n-Mn*t)/(Bn+qn-Mn),o=a-r,i=(xe*(t-r)-mn*o)/Le,l=Math.sqrt(i*i+o*o)/(xe*r*(1-r)),d=l?Math.atan2(i,o)*tt-120:NaN;return new ee(d<0?d+360:d,l,r,e.opacity)}function xi(e,n,t,a){return arguments.length===1?Ni(e):new ee(e,n,t,a??1)}function ee(e,n,t,a){this.h=+e,this.s=+n,this.l=+t,this.opacity=+a}me(ee,xi,be(G,{brighter:function(e){return e=e==null?ue:Math.pow(ue,e),new ee(this.h,this.s,this.l*e,this.opacity)},darker:function(e){return e=e==null?ne:Math.pow(ne,e),new ee(this.h,this.s,this.l*e,this.opacity)},rgb:function(){var e=isNaN(this.h)?0:(this.h+120)*nt,n=+this.l,t=isNaN(this.s)?0:this.s*n*(1-n),a=Math.cos(e),r=Math.sin(e);return new A(255*(n+t*(lt*a+cn*r)),255*(n+t*(mn*a+Le*r)),255*(n+t*(xe*a)),this.opacity)}}));const dt=et(v.ACCENT_MEASUREMENTS).brighter(.1);dt.opacity=.5;const ut=va(),bi=Object.freeze({backgroundColor:fn("background"),hoverBackgroundColor:fn("hoverBackground"),textColor:ut,glowColor:ve(1),glowRadiusPx:5,preserveFillOnSelection:!0}),Si=Object.freeze({id:"accent-measurements",label:"Measurements · Accent",colorPrimaryReduced:dt.toString(),colorPrimary:v.ACCENT_MEASUREMENTS,lineColor:b.colors.surface,textColor:ut}),E=Object.freeze({scheme:Si,fontFamily:se.fontFamily,contentFontWeight:se.lineLabelFontWeight,badgeFontWeight:se.badgeFontWeight,selection:bi}),Uo=e=>E,Vo=Object.freeze({fontSize:se.rootFontSizeRem,fontFamily:E.fontFamily,fontWeight:E.contentFontWeight,lineColor:E.scheme.lineColor,textBackgroundColor:E.scheme.colorPrimaryReduced,textColor:E.scheme.textColor,markerBackgroundColor:E.scheme.colorPrimary,markerTextColor:E.scheme.textColor,selectedBackgroundColor:E.selection.backgroundColor,selectedTextColor:E.selection.textColor,selectedGlowColor:E.selection.glowColor,selectedGlowRadiusPx:E.selection.glowRadiusPx,preserveFillOnSelection:E.selection.preserveFillOnSelection,hoverBackgroundColor:E.selection.hoverBackgroundColor,markerPixelSize:b.sizes.pointPixelSize,markerOutlineWidth:b.sizes.pointOutlineWidth});T.createContext(null);export{Yi as $,sr as A,Ao as B,ka as C,Aa as D,Ea as E,ce as F,mr as G,yr as H,_a as I,dr as J,cr as K,pr as L,Gr as M,Ur as N,Go as O,ca as P,Ji as Q,jo as R,$o as S,ho as T,vo as U,qo as V,Mo as W,Qi as X,xo as Y,Sa as Z,Po as _,M as a,Do as a0,Fo as a1,sn as a2,Fe as a3,Ho as a4,zo as a5,eo as a6,Gi as a7,lr as a8,kr as a9,et as aA,ln as aB,ti as aC,Er as aa,bo as ab,So as ac,Wo as ad,Vn as ae,Oa as af,Ra as ag,Zi as ah,E as ai,ae as aj,Ui as ak,Vi as al,Xi as am,J as an,to as ao,Y as ap,Vo as aq,Ki as ar,D as as,No as at,go as au,so as av,no as aw,Ta as ax,xa as ay,Hn as az,oe as b,fa as c,bi as d,en as e,Pr as f,ut as g,qe as h,k as i,Bo as j,Or as k,q as l,b as m,Ro as n,Oo as o,F as p,_o as q,Uo as r,wo as s,se as t,N as u,Io as v,Eo as w,ko as x,Lo as y,To as z};
