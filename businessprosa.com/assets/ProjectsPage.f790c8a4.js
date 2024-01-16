import{Q as A,a as b}from"./QTabs.3ecb15f9.js";import{Q as v,a as g}from"./QTabPanels.b70aa453.js";import{_ as h,z as _,A as a,B as o,E as e,J as x,r as f,C as r,D as n,F as c,G as p,N as j}from"./index.a3f01b2f.js";import"./Ripple.c29294a6.js";import"./render.239685c4.js";import"./uid.42677368.js";import"./use-timeout.80c85433.js";import"./use-dark.e9560130.js";import"./selection.211406c4.js";const P={class:"projects-page-partial"},w={class:"column"},y=["src","alt"],C={class:"project-name"},F={class:"text-bold no-margin full-width"},V=_({__name:"ProjectsPagePartial",props:{project:null},setup(d){const t=d;return(s,i)=>(a(),o("div",P,[e("div",w,[e("img",{src:t.project.img,class:"q-mb-md rounded-borders",alt:t.project.title},null,8,y),e("div",C,[e("h6",F,x(t.project.title),1)])])]))}});var k=h(V,[["__scopeId","data-v-30c5597d"]]);const B={class:"container services-page"},z=e("div",{class:"header text-center"},[e("h1",null,"\u0645\u0634\u0627\u0631\u064A\u0639\u0646\u0627"),e("p",{class:"text-h6"}," \u064A\u0633\u0639\u062F\u0646\u0627 \u062A\u0648\u0627\u0635\u0644\u0643 \u0645\u0639\u0646\u0627 \u0644\u0644\u0631\u062F \u0639\u0644\u064A \u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A\u0643 \u0627\u0648 \u0644\u0628\u062D\u062B \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0639\u0645\u0644 \u0645\u0639\u0627 \u0648\u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0639\u0644\u064A \u062A\u0637\u0648\u064A\u0631 \u0634\u0631\u062A\u0643\u062A\u0643 ")],-1),Q={class:"main"},$={class:"items-center justify-center flex no-wrap q-mb-lg"},D={class:"flex projects-wrapper"},H=_({__name:"ProjectsPage",setup(d){const t=f(1),s=[{id:1,title:"\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0645\u0628\u0627\u062F\u0631\u0627\u062A",img:"https://static.exploremelon.com/bznspro/initiative.webp",cat:"\u0627\u0644\u0631\u064A\u0627\u062F\u0629 \u0648\u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631"},{id:2,title:"\u0645\u0635\u0646\u0639 \u0627\u0644\u0628\u0627\u0644\u0648\u0646\u0627\u062A",img:"https://static.exploremelon.com/bznspro/baloon.webp",cat:"\u062F\u0631\u0627\u0633\u0629 \u0648\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0633\u0648\u0642"},{id:3,title:"\u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0627\u0644\u062A\u062C\u0627\u0631\u064A ",img:"https://static.exploremelon.com/bznspro/invest.webp",cat:" \u062D\u0635\u0635 \u0648 \u0627\u0633\u0647\u0645 \u0627\u0644\u0634\u0631\u0643\u0627\u062A "},{id:4,title:"\u0645\u062A\u062C\u0631 \u0627\u0644\u0645\u0643\u062A\u0628\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629",img:"https://static.exploremelon.com/bznspro/ebook.webp",cat:"\u0646\u0645\u0648\u0630\u062C \u0639\u0645\u0644 \u062A\u062C\u0627\u0631\u064A "},{id:5,title:"\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",img:"https://static.exploremelon.com/bznspro/prdesign.webp",cat:"\u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0648\u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631"}],i=[{cat:{id:1,name:"\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0633\u062A\u0634\u0627\u0631\u064A\u0629"},projects:s},{cat:{id:2,name:"\u0645\u0634\u0627\u0631\u064A\u0639 \u0645\u0627\u0644\u064A\u0629"},projects:s},{cat:{id:3,name:"\u0645\u0634\u0627\u0631\u064A\u0639 \u062A\u0633\u0648\u064A\u0642"},projects:s},{cat:{id:4,name:"\u062A\u0637\u0648\u064A\u0631  \u0627\u0644\u0634\u0631\u0643\u0627\u062A"},projects:s}];return(T,l)=>(a(),o("div",B,[z,e("div",Q,[e("div",$,[r(A,{dense:"",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),"active-bg-color":"blue","active-color":"white","outside-arrows":"","inline-label":"",class:"cats flex-grow"},{default:n(()=>[(a(),o(c,null,p(i,u=>r(b,{key:u.cat.id,name:u.cat.id,label:u.cat.name},null,8,["name","label"])),64))]),_:1},8,["modelValue"])]),r(v,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=u=>t.value=u),animated:""},{default:n(()=>[(a(),o(c,null,p(i,u=>r(g,{key:u.cat.id,name:u.cat.id},{default:n(()=>[e("div",D,[(a(!0),o(c,null,p(u.projects,m=>(a(),j(k,{key:m.id,project:m},null,8,["project"]))),128))])]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])])]))}});export{H as default};
