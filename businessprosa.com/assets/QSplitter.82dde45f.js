import{c as C,h as c,d as A,a as D}from"./render.239685c4.js";import{c as a,h as s,r as _,w,u as L,g as M}from"./index.a3f01b2f.js";import{T as Q}from"./TouchPan.21eff605.js";import{u as j,a as O}from"./use-dark.e9560130.js";var F=C({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:r}){const l=a(()=>parseInt(e.lines,10)),o=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),m=a(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>s("div",{style:m.value,class:o.value},c(r.default))}}),P=C({name:"QSplitter",props:{...j,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:r,emit:l}){const{proxy:{$q:o}}=M(),m=O(e,o),d=_(null),v={before:_(null),after:_(null)},k=a(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(m.value===!0?" q-splitter--dark":"")),f=a(()=>e.horizontal===!0?"height":"width"),y=a(()=>e.reverse!==!0?"before":"after"),i=a(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function q(t){return(e.unit==="%"?t:Math.round(t))+e.unit}const g=a(()=>({[y.value]:{[f.value]:q(e.modelValue)}}));let S,b,V,x,u;function B(t){if(t.isFirst===!0){const h=d.value.getBoundingClientRect()[f.value];S=e.horizontal===!0?"up":"left",b=e.unit==="%"?100:h,V=Math.min(b,i.value[1],Math.max(i.value[0],e.modelValue)),x=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:o.lang.rtl===!0?-1:1)*(e.unit==="%"?h===0?0:100/h:1),d.value.classList.add("q-splitter--active");return}if(t.isFinal===!0){u!==e.modelValue&&l("update:modelValue",u),d.value.classList.remove("q-splitter--active");return}const n=V+x*(t.direction===S?-1:1)*t.distance[e.horizontal===!0?"y":"x"];u=Math.min(b,i.value[1],Math.max(i.value[0],n)),v[y.value].value.style[f.value]=q(u),e.emitImmediately===!0&&e.modelValue!==u&&l("update:modelValue",u)}const I=a(()=>[[Q,B,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function z(t,n){t<n[0]?l("update:modelValue",n[0]):t>n[1]&&l("update:modelValue",n[1])}return w(()=>e.modelValue,t=>{z(t,i.value)}),w(()=>e.limits,()=>{L(()=>{z(e.modelValue,i.value)})}),()=>{const t=[s("div",{ref:v.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:g.value.before},c(r.before)),s("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[A("div",{class:"q-splitter__separator-area absolute-full"},c(r.separator),"sep",e.disable!==!0,()=>I.value)]),s("div",{ref:v.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:g.value.after},c(r.after))];return s("div",{class:k.value,ref:d},D(r.default,t))}}});export{P as Q,F as a};