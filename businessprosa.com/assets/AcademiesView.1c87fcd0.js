import{Q as I,a as b}from"./QBreadcrumbs.97bd4ec1.js";import{Q as x,a as g}from"./QTabs.c35ded81.js";import{Q as M}from"./QSeparator.9005cca9.js";import{Q as w,a as n}from"./QTabPanels.20ceb305.js";import{Q as z}from"./Ripple.31ab956e.js";import{Q as p}from"./QItemSection.48c7c622.js";import{Q as _,a as f}from"./QList.7ebc097f.js";import{Q as H,a as h}from"./QSplitter.d2fae6cb.js";import{Q as U}from"./QBtn.ce794246.js";import{z as N,r as k,c as Q,A as o,B as d,E as u,C as A,D as t,J as i,L as a,F as c,G as m,ah as S,N as v,I as F}from"./index.32ca4d4b.js";import"./render.44ecb383.js";import"./uid.42677368.js";import"./use-timeout.6c1c5bf8.js";import"./use-dark.37039ca5.js";import"./selection.6a1e1918.js";import"./TouchPan.2da046bf.js";const j={class:"programms-single"},$={class:"header bg-secondary"},G={class:"container"},P={class:"header_wrapper"},R={class:"header-info text-white"},Y={class:"title"},J=["innerHTML"],K={class:"img"},X=["src"],O={class:"content"},W={class:"container"},Z={class:"content_wrapper"},uu={class:"tabs"},Au=u("div",{class:"text-h6 q-my-lg"},"\u0627\u0644\u0648\u0635\u0641",-1),eu=["innerHTML"],tu=u("div",{class:"text-h6 q-my-lg"},"\u0627\u0647\u062F\u0627\u0641 \u0627\u0644\u062F\u0648\u0631\u0629",-1),lu=u("div",{class:"text-h6 q-my-lg"},"\u0641\u064A\u062F\u064A\u0648 \u062A\u0639\u0631\u064A\u0641\u064A",-1),au=["src"],su=u("div",{class:"text-h6 q-my-lg"},"\u062E\u0637\u0629 \u0627\u0644\u062F\u0648\u0631\u0629",-1),ou={class:"info"},iu=u("div",{class:"info-head text-center desktop"},[u("div",{class:"text-center"},"\u062E\u0628\u064A\u0631 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0627\u0639\u0645\u0627\u0644"),u("div",{class:"flex q-mt-sm"},[u("h5",{class:"text-secondary text-center text-bold no-margin"}," \u0627\u062D\u0645\u062F \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u0645\u0646\u0647\u0628\u064A ")])],-1),ru={class:"info-head mobile"},nu=u("div",{class:"text-center q-pt-sm"},"\u0627\u062D\u0645\u062F \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u0645\u0646\u0647\u0628\u064A",-1),du={class:"flex q-mt-sm"},cu={class:"text-secondary q-pa-sm text-center text-bold no-margin"},mu={class:"info-body"},Fu={class:"value"},pu={class:"text-center q-my-xl text-h6"},_u=u("div",{class:"text-h6"},"\u0627\u0644\u0648\u0635\u0641",-1),fu=["innerHTML"],hu=u("div",{class:"text-h6"},"\u0627\u0647\u062F\u0627\u0641 \u0627\u0644\u062F\u0648\u0631\u0629",-1),vu=u("div",{class:"text-h6"},"td]d, juvdtd",-1),Cu=["src"],bu=u("div",{class:"text-h6"},"\u062E\u0637\u0629 \u0627\u0644\u062F\u0648\u0631\u0629",-1),Uu=N({__name:"AcademiesView",setup(yu){const V=S(),y=k(30),{params:D}=V,r=k("description"),E=[{value:"\u0627\u0644\u0648\u0635\u0641",key:"description"},{value:"\u0627\u0647\u062F\u0627\u0641 \u0627\u0644\u062F\u0648\u0631\u0629",key:"goals"},{value:"\u0641\u064A\u062F\u064A\u0648 \u062A\u0639\u0631\u064A\u0641\u064A",key:"whattolearn"},{value:"\u062E\u0637\u0629 \u0627\u0644\u062F\u0648\u0631\u0629",key:"plan"}],q=[{key:"hours",value:"\u0639\u062F\u062F \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u062F\u0648\u0631\u0629"},{key:"date",value:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062F\u0648\u0631\u0629"},{key:"time",value:"\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u062F\u0648\u0631\u0629"},{key:"location",value:"\u0645\u0643\u0627\u0646 \u0627\u0644\u062F\u0648\u0631\u0629"}],B={id:2,title:"\u062F\u0648\u0631\u0629 \u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0641\u0639\u0651\u0627\u0644\u0629",day:22,month:"\u064A\u0648\u0644\u064A\u0648",img:"https://static.exploremelon.com/bznspro/progs/single2.png",price:480,breif:"\u062A\u0647\u062F\u0641 \u0647\u0630\u0647 \u0627\u0644\u062F\u0648\u0631\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 \u0625\u0644\u0649 \u062A\u0632\u0648\u064A\u062F \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0628\u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u0648\u0636\u0639 \u062E\u0637\u0637 \u0623\u0639\u0645\u0627\u0644 \u0646\u0627\u062C\u062D\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062A. \u0633\u062A\u062A\u0639\u0644\u0645 \u0643\u064A\u0641\u064A\u0629 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0633\u0648\u0642\u060C \u0648\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u062C\u0645\u0647\u0648\u0631 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u060C \u0648\u0648\u0636\u0639 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u062A\u0633\u0648\u064A\u0642\u060C \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0648\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0623\u062F\u0627\u0621. \u0633\u062A\u062A\u0644\u0642\u0649 \u0623\u062F\u0648\u0627\u062A \u0648\u0645\u0646\u0647\u062C\u064A\u0627\u062A \u0639\u0645\u0644\u064A\u0629 \u0644\u0644\u062A\u062E\u0637\u064A\u0637 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630\u060C \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0627\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646 \u0627\u0644\u062F\u0631\u0648\u0633 \u0627\u0644\u0645\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0627\u062C\u062D\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u062C\u0627\u0644.",description:"<p>\u062A\u0647\u062F\u0641 \u0647\u0630\u0647 \u0627\u0644\u062F\u0648\u0631\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 \u0625\u0644\u0649 \u062A\u0632\u0648\u064A\u062F \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0628\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u0628\u0646\u0627\u0621 \u062E\u0637\u0637 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0646\u0627\u062C\u062D\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062A. \u0633\u062A\u062A\u0639\u0644\u0645 \u0643\u064A\u0641\u064A\u0629 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0633\u0648\u0642\u060C \u0648\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u062C\u0645\u0647\u0648\u0631 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u060C \u0648\u0648\u0636\u0639 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u062A\u0633\u0648\u064A\u0642\u060C \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0648\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0623\u062F\u0627\u0621. \u0633\u062A\u062A\u0644\u0642\u0649 \u0623\u062F\u0648\u0627\u062A \u0648\u0645\u0646\u0647\u062C\u064A\u0627\u062A \u0639\u0645\u0644\u064A\u0629 \u0644\u0644\u062A\u062E\u0637\u064A\u0637 \u0648\u0627\u0644\u062A\u0646\u0641\u064A\u0630\u060C \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0627\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646 \u0627\u0644\u062F\u0631\u0648\u0633 \u0627\u0644\u0645\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0646\u0627\u062C\u062D\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u062C\u0627\u0644.</p>",subscribers:0,hours:0,date:"",location:"",time:"",note:"",goals:[],whattolearn:[],video:"IG4-i4XTFr0",plan:[]},T={id:1,video:"mvhR_luALaA",title:"\u062F\u0648\u0631\u0629 \u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0631\u0642\u0645\u064A",img:"https://static.exploremelon.com/bznspro/progs/single3.png",price:575,day:15,month:"\u064A\u0648\u0644\u064A\u0648",discount:40,discountExpiresAt:"10 \u064A\u0648\u0644\u064A\u0648",breif:" \u062A\u0631\u0643\u0632 \u0627\u0644\u0648\u0631\u0634\u0629 \u0639\u0644\u0649 \u062A\u0637\u0648\u064A\u0631 \u0648\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u0648\u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0627\u0644\u0631\u064A\u0627\u062F\u064A \u0648\u0627\u0644\u062A\u0641\u0648\u0642 \u0628\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u062A\u0634\u062C\u064A\u0639 \u0627\u0644\u062A\u0641\u0643\u064A\u0631 \u0627\u0644\u062E\u0644\u0627\u0642 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A \u0644\u062A\u062D\u0642\u064A\u0642 \u0623\u0641\u0643\u0627\u0631 \u062C\u062F\u064A\u062F\u0629 \u0648\u062C\u0631\u064A\u0626\u0629 \u062A\u062A\u0648\u0627\u0641\u0642 \u0645\u0639 \u062A\u0637\u0644\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644",description:`<p>\u062A\u0631\u0643\u0632 \u0627\u0644\u0648\u0631\u0634\u0629 \u0639\u0644\u0649 \u062A\u0637\u0648\u064A\u0631 \u0648\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0625\u0628\u062F\u0627\u0639 \u0648\u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0627\u0644\u0631\u064A\u0627\u062F\u064A \u0648\u0627\u0644\u062A\u0641\u0648\u0642 \u0628\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u062A\u0634\u062C\u064A\u0639 \u0627\u0644\u062A\u0641\u0643\u064A\u0631 \u0627\u0644\u062E\u0644\u0627\u0642 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A \u0644\u062A\u062D\u0642\u064A\u0642 \u0623\u0641\u0643\u0627\u0631 \u062C\u062F\u064A\u062F\u0629 \u0648\u062C\u0631\u064A\u0626\u0629 \u062A\u062A\u0648\u0627\u0641\u0642 \u0645\u0639 \u062A\u0637\u0644\u0639\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644.</p>

<p>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0647\u0648 \u0645\u0633\u0627\u0642 \u0645\u062C\u0627\u0646\u064A \u0645\u0642\u062F\u0651\u0645 \u0645\u0646 \u0625\u062F\u0631\u0627\u0643 \u064A\u0633\u0627\u0639\u062F \u0627\u0644\u0645\u062A\u0639\u0644\u0645 \u0639\u0644\u0649 \u0627\u0633\u062A\u064A\u0639\u0627\u0628 \u0623\u0647\u0645 \u0627\u0644\u0645\u0641\u0627\u0647\u064A\u0645 \u0648\u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0627\u0644\u0645\u062A\u0639\u0644\u0642\u0629 \u0628\u0645\u0648\u0636\u0648\u0639 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A\u060C \u0644\u064A\u062A\u0645\u0643\u0646 \u0645\u0646 \u0634\u0642 \u0637\u0631\u064A\u0642\u0647 \u0627\u0644\u0645\u0647\u0646\u064A \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u062C\u0627\u0644 \u0628\u0646\u062C\u0627\u062D \u0648\u0645\u0645\u0627\u0631\u0633\u0629 \u0645\u0633\u0624\u0648\u0644\u064A\u0627\u062A\u0647 \u0648\u0635\u0644\u0627\u062D\u064A\u0627\u062A\u0647 \u0628\u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0635\u062D\u064A\u062D \u0648\u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0648\u0627\u0644\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u064A\u0646. \u0625\u0636\u0627\u0641\u0629\u064B \u0625\u0644\u0649 \u0630\u0644\u0643\u060C \u064A\u0648\u0636\u062D \u0627\u0644\u0645\u0633\u0627\u0642 \u0623\u0647\u0645\u064A\u0629 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0627\u0644\u0623\u062C\u0632\u0627\u0621 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0641\u064A\u0647\u0627 \u0648\u0643\u064A\u0641\u064A\u0629 \u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0624\u0633\u0633\u0629.</p>

<p>\u062A\u0643\u0645\u0646 \u0623\u0647\u0645\u064A\u0629 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0641\u064A \u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u062A\u0643\u0627\u0645\u0644 \u0628\u064A\u0646 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0629\u060C \u0648\u062A\u064F\u0639\u064E\u062F \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0636\u064A\u0639 \u0627\u0644\u0647\u0627\u0645\u0629 \u0627\u0644\u062A\u064A \u062A\u064F\u0639\u0646\u0649 \u0628\u0647\u0627 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0643\u0628\u0631\u0649 \u062A\u062F\u0648\u0631 \u062A\u0641\u0627\u0635\u064A\u0644 \u0639\u0645\u0644\u0647\u0627 \u062D\u0648\u0644 \u0643\u064A\u0641\u064A\u0629 \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0628\u0636\u0627\u0626\u0639 \u0648\u0627\u0644\u0633\u0644\u0639 \u0644\u062A\u0634\u0645\u0644 \u0639\u062F\u062F\u0627\u064B \u0645\u0646 \u0627\u0644\u062C\u0648\u0627\u0646\u0628\u060C \u0627\u0628\u062A\u062F\u0627\u0621\u064B \u0645\u0646 \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A \u0648\u0627\u0644\u0645\u062E\u0627\u0632\u0646 \u0648\u062D\u062A\u0649 \u062A\u062D\u0633\u064A\u0646 \u0648\u062A\u0637\u0648\u064A\u0631 \u0623\u062F\u0627\u0621 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0641\u064A \u0627\u0644\u0634\u0631\u0643\u0627\u062A.</p>

<p>\u062A\u064F\u0645\u062B\u0644 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u062D\u0644\u0642\u0629 \u0627\u0644\u0648\u0635\u0644 \u0628\u064A\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0643\u0628\u0631\u0649\u060C \u0648\u0645\u0646 \u0627\u0644\u0636\u0631\u0648\u0631\u064A \u062C\u062F\u0627\u064B \u0627\u0644\u0648\u0639\u064A \u0627\u0644\u062A\u0627\u0645 \u0628\u062C\u0645\u064A\u0639 \u0645\u0647\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0648\u0645\u0633\u0624\u0648\u0644\u064A\u0627\u062A \u0645\u062F\u064A\u0631 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0643\u064A \u062A\u0633\u064A\u0631 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0628
`,subscribers:148,hours:25,date:"15  \u064A\u0648\u0644\u064A\u0648 2023 ",location:"\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 ( \u0627\u0644\u0631\u064A\u0627\u0636 )",time:"  4.00 \u0645 - 09.00 \u0645",note:"",goals:["\u062A\u0648\u0641\u064A\u0631 \u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u062A\u0646\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 \u0627\u0644\u0645\u0643\u062B\u0641\u0629 \u0644\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0648\u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0648\u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0648\u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0641\u064A \u0628\u0646\u0627\u0621 \u062E\u0637\u0637 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0646\u0627\u062C\u062D\u0629.","\u062A\u0639\u0632\u064A\u0632 \u0642\u062F\u0631\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0639\u0644\u0649 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0623\u062F\u0648\u0627\u062A \u0642\u064A\u0627\u0633 \u0627\u0644\u0623\u062F\u0627\u0621 \u0648\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0644\u062A\u062D\u0642\u064A\u0642 \u062A\u062D\u0633\u064A\u0646 \u0645\u0633\u062A\u0645\u0631 \u0648\u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u0645\u0628\u0646\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u062D\u0642\u0627\u0626\u0642.","\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u062A\u0641\u0627\u0648\u0636 \u0648\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062C\u0645\u0627\u0639\u064A \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064A \u0646\u0642\u0627\u0634\u0627\u062A \u0646\u0634\u0637\u0629 \u0648\u0645\u062D\u0627\u0643\u0627\u0629 \u0639\u0645\u0644\u064A\u0629 \u0644\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u062A\u0639\u0644\u0645 \u0648\u0628\u0646\u0627\u0621 \u0634\u0628\u0643\u0627\u062A \u0639\u0644\u0627\u0642\u0627\u062A \u0645\u0647\u0646\u064A\u0629 \u0642\u0648\u064A\u0629.","\u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0628\u0623\u062D\u062F\u062B \u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627 \u0641\u064A \u0646\u0645\u0630\u062C\u0629 \u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0648\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0644\u062A\u062D\u0642\u064A\u0642 \u062A\u0641\u0648\u0642 \u0631\u064A\u0627\u062F\u064A \u0641\u064A \u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629","\u062A\u0645\u0643\u064A\u0646 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0645\u0646 \u0648\u0636\u0639 \u062E\u0637\u0637 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0633\u0648\u0642 \u0648\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0648\u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0644\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u0646\u062C\u0627\u062D \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645 \u0641\u064A \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629"],whattolearn:["\u0641\u0647\u0645 \u0648\u062A\u0637\u0628\u064A\u0642 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0641\u0639\u0651\u0627\u0644 \u0627\u0644\u0644\u0641\u0638\u064A \u0648\u063A\u064A\u0631 \u0627\u0644\u0644\u0641\u0638\u064A \u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u062A\u0641\u0627\u0639\u0644 \u0648\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0641\u064A \u0628\u064A\u0626\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644","\u0627\u0643\u062A\u0633\u0627\u0628 \u0648\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0639\u0627\u0637\u0641\u064A \u0644\u0641\u0647\u0645 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0639\u0631 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u062A\u0639\u0627\u0645\u0644 \u0628\u0641\u0639\u0627\u0644\u064A\u0629 \u0645\u0639 \u0627\u0644\u0622\u062E\u0631\u064A\u0646 \u0641\u064A \u0633\u064A\u0627\u0642 \u0627\u0644\u0639\u0645\u0644","\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0623\u062F\u0648\u0627\u062A \u062A\u062E\u0637\u064A\u0637 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u062A\u0637\u0648\u064A\u0631 \u062E\u0637\u0637 \u0645\u0634\u0627\u0631\u064A\u0639 \u0641\u0639\u0651\u0627\u0644\u0629 \u0644\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u0623\u0647\u062F\u0627\u0641 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0648\u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0628\u0643\u0641\u0627\u0621\u0629","\u0627\u0644\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0646\u0645\u0630\u062C\u0629 \u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u062D\u062F\u064A\u062B\u0629 \u0644\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u062A\u0637\u0628\u064A\u0642\u0647\u0627 \u0641\u064A \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u062A\u0637\u0648\u064A\u0631 \u062D\u0644\u0648\u0644 \u0625\u0628\u062F\u0627\u0639\u064A\u0629","\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062D\u0644\u064A\u0644 \u0648\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0648\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0623\u062F\u0648\u0627\u062A \u0642\u064A\u0627\u0633 \u0627\u0644\u0623\u062F\u0627\u0621 \u0644\u062A\u062D\u0642\u064A\u0642 \u062A\u062D\u0633\u064A\u0646 \u0645\u0633\u062A\u0645\u0631 \u0648\u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u0645\u0628\u0646\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"],plan:[{title:"\u0645\u062D\u0627\u0643\u0627\u0629 \u0639\u0645\u0644\u064A\u0629",breif:"\u062A\u062C\u0631\u0628\u0629 \u0639\u0645\u0644\u064A\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u062A\u0645\u0646\u062D\u0643 \u0627\u0644\u0641\u0631\u0635\u0629 \u0644\u0644\u062A\u0639\u0644\u0645 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0645\u062D\u0627\u0643\u0627\u0629 \u0623\u0648\u0636\u0627\u0639 \u0648\u0638\u0631\u0648\u0641 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629"},{title:"\u0623\u062F\u0648\u0627\u062A \u0642\u064A\u0627\u0633",breif:"\u062A\u0639\u0644\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0642\u064A\u0627\u0633 \u0627\u0644\u0641\u0639\u0627\u0644\u0629 \u0644\u062A\u062D\u0644\u064A\u0644 \u0623\u062F\u0627\u0621 \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u0645\u0628\u0646\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"},{title:"\u0646\u0642\u0627\u0634\u0627\u062A \u0646\u0634\u0637\u0629",breif:"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064A \u0646\u0642\u0627\u0634\u0627\u062A \u0645\u0641\u0635\u0644\u0629 \u0648\u062A\u0628\u0627\u062F\u0644 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0648\u0627\u0644\u0622\u0631\u0627\u0621 \u0645\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0627\u0644\u0622\u062E\u0631\u064A\u0646 \u0644\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u062A\u0639\u0644\u0645 \u0648\u062A\u0648\u0633\u064A\u0639 \u0627\u0644\u0645\u062F\u0627\u0631\u0643"},{title:"\u0634\u0628\u0643\u0629 \u0639\u0644\u0627\u0642\u0627\u062A",breif:"\u0628\u0646\u0627\u0621 \u0639\u0644\u0627\u0642\u0627\u062A \u0642\u0648\u064A\u0629 \u0648\u0645\u0641\u064A\u062F\u0629 \u0645\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0648\u0627\u0644\u0645\u062D\u0627\u0636\u0631\u064A\u0646 \u0648\u0627\u0644\u062E\u0628\u0631\u0627\u0621 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u062A\u0648\u0633\u064A\u0639 \u0634\u0628\u0643\u062A\u0643 \u0627\u0644\u0645\u0647\u0646\u064A\u0629"},{title:"\u0646\u0645\u0630\u062C\u0629 \u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0628\u0648\u0627\u0633\u0637\u0629 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A (AI)",breif:"\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062A\u0642\u0646\u064A\u0627\u062A \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0627\u0644\u0635\u064A\u062D\u0627\u062A \u0648\u062A\u0648\u062C\u064A\u0647 \u0639\u0645\u0644\u064A\u0629 \u0627\u062A\u062E\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0644\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0641\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639"}]},l=Q(()=>D.id=="1"?T:B);return Q(()=>{if(!l.value.discount)return l.value.price;const C=l.value.price*(l.value.discount/100);return l.value.price-C}),(C,s)=>(o(),d("div",j,[u("div",$,[u("div",G,[u("div",P,[u("div",R,[A(I,null,{default:t(()=>[A(b,{label:"\u0627\u0644\u0628\u0631\u0627\u0645\u062C"}),A(b,{label:"\u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0627\u0639\u0645\u0627\u0644 "}),A(b,{label:"\u062F\u0648\u0631\u0629 \u0628\u0646\u0627\u0621 \u062E\u0637\u0637 \u0627\u0644\u0627\u0639\u0645\u0627\u0644"})]),_:1}),u("h2",Y,i(a(l).title),1),u("p",{innerHTML:a(l).breif,class:"text-h5"},null,8,J)]),u("div",K,[u("img",{src:a(l).img,alt:""},null,8,X)])])])]),u("div",O,[u("div",W,[u("div",Z,[u("div",uu,[A(x,{dense:"",modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=e=>r.value=e),"active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:t(()=>[(o(),d(c,null,m(E,e=>A(g,{key:e.key,name:e.key,label:e.value},null,8,["name","label"])),64))]),_:1},8,["modelValue"]),A(M),A(w,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=e=>r.value=e),animated:""},{default:t(()=>[A(n,{name:"description"},{default:t(()=>[Au,u("div",{innerHTML:a(l).description},null,8,eu)]),_:1}),A(n,{name:"goals"},{default:t(()=>[tu,A(_,{clicable:"",class:"text-left q-ml-xl"},{default:t(()=>[(o(!0),d(c,null,m(a(l).goals,e=>(o(),v(f,{key:e,class:"q-mb-md"},{default:t(()=>[A(p,{avatar:""},{default:t(()=>[A(z,{color:"secondary",name:"img:https://static.exploremelon.com/bznspro/chevron.svg",size:"lg"})]),_:1}),A(p,null,{default:t(()=>[F(i(e),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),A(n,{name:"whattolearn"},{default:t(()=>[lu,u("iframe",{width:"100%",height:"400",src:`https://www.youtube.com/embed/${a(l).video}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,au)]),_:1}),A(n,{name:"plan"},{default:t(()=>[su,A(_,{separator:"",class:"text-left q-ml-xl"},{default:t(()=>[(o(!0),d(c,null,m(a(l).plan,e=>(o(),v(f,{key:e.title,class:"q-py-xl"},{default:t(()=>[A(p,null,{default:t(()=>[A(h,{class:"text-blue q-mb-md text-h5"},{default:t(()=>[F(i(e.title),1)]),_:2},1024),A(h,{class:"text-h6"},{default:t(()=>[F(i(e.breif),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),u("div",ou,[iu,u("div",ru,[nu,u("div",du,[u("h5",cu,i(a(l).title),1)])]),u("div",mu,[(o(),d(c,null,m(q,e=>u("div",{class:"flex q-py-md text-h6 justify-between",key:e.key},[u("span",null,i(e.value),1),u("span",Fu,i(a(l)[e.key]),1)])),64)),u("p",pu,i(a(l).note),1),A(U,{color:"primary",size:"xl",label:"\u0633\u062C\u0644 \u0627\u0644\u0627\u0646",class:"btn",onClick:s[2]||(s[2]=()=>C.$router.push({name:"programms-checkout",params:a(D)}))})])])]),A(H,{modelValue:y.value,"onUpdate:modelValue":s[5]||(s[5]=e=>y.value=e),class:"mobile-items",style:{height:"250px"}},{before:t(()=>[A(x,{modelValue:r.value,"onUpdate:modelValue":s[3]||(s[3]=e=>r.value=e),vertical:"",class:"text-teal"},{default:t(()=>[(o(),d(c,null,m(E,(e,L)=>A(g,{key:L,name:e.key,label:e.value},null,8,["name","label"])),64))]),_:1},8,["modelValue"])]),after:t(()=>[A(w,{modelValue:r.value,"onUpdate:modelValue":s[4]||(s[4]=e=>r.value=e),animated:""},{default:t(()=>[A(n,{name:"description"},{default:t(()=>[_u,u("div",{innerHTML:a(l).description},null,8,fu)]),_:1}),A(n,{name:"goals"},{default:t(()=>[hu,A(_,{clicable:"",class:"text-left"},{default:t(()=>[(o(!0),d(c,null,m(a(l).goals,e=>(o(),v(f,{key:e,class:"q-mb-md"},{default:t(()=>[A(p,null,{default:t(()=>[F(i(e),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),A(n,{name:"whattolearn"},{default:t(()=>[vu,u("iframe",{width:"100%",height:"400",src:`https://www.youtube.com/embed/${a(l).video}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,Cu)]),_:1}),A(n,{name:"plan"},{default:t(()=>[bu,A(_,{separator:"",class:"text-left"},{default:t(()=>[(o(!0),d(c,null,m(a(l).plan,e=>(o(),v(f,{key:e.title,class:"q-py-xl"},{default:t(()=>[A(p,null,{default:t(()=>[A(h,{class:"text-blue q-mb-md text-h5"},{default:t(()=>[F(i(e.title),1)]),_:2},1024),A(h,{class:"text-h6"},{default:t(()=>[F(i(e.breif),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])])]))}});export{Uu as default};
