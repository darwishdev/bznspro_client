import{Q as f}from"./QBtn.1fd30b21.js";import{Q as $,a as E}from"./QTabs.3ecb15f9.js";import{a as z,Q as P}from"./QTabPanels.b70aa453.js";import{_ as Q,z as k,A as e,B as i,E as u,J as l,F as p,G as _,N as v,C as s,r as V,a6 as g,D as d,L as F,ag as T}from"./index.a3f01b2f.js";import{P as S}from"./PostRecentPartial.b24a9b88.js";import{N,S as j,C as R}from"./carousel.es.b3c5c744.js";import"./Ripple.c29294a6.js";import"./render.239685c4.js";import"./uid.42677368.js";import"./use-timeout.80c85433.js";import"./use-dark.e9560130.js";import"./selection.211406c4.js";const I={class:"post"},L=["src","alt"],M={class:"post_content column justify-between q-pa-lg text-left"},U={class:"rounded-borders q-py-sm q-px-md bg-grey"},G={class:"text-weight-medium full-width q-mt-lg q-mb-md"},J={class:"rounded-borders q-py-sm q-px-md"},H={class:"text-h5 text-grey-7 q-mt-md"},K={class:"flex justify-between"},O={class:"flex"},W=k({__name:"PostPartial",props:{post:null},setup(C){const A=C;return(w,x)=>(e(),i("div",I,[u("img",{src:A.post.img,alt:A.post.name},null,8,L),u("div",M,[u("div",null,[u("span",U,l(A.post.cat),1),u("h4",G,l(A.post.name),1),u("span",J,l(A.post.date),1),u("p",H,l(A.post.breif),1)]),u("div",K,[u("div",O,[(e(!0),i(p,null,_(A.post.links,a=>(e(),v(f,{flat:"",round:"",key:a.icon,icon:a.icon},null,8,["icon"]))),128))]),s(f,{outline:"",color:"blue","icon-right":"arrow_back",label:"\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0632\u064A\u062F"})])])]))}});var X=Q(W,[["__scopeId","data-v-85e3560a"]]);const Y={class:"container blog-page"},Z=u("h1",null,"\u0627\u0644\u0645\u062F\u0648\u0646\u0629",-1),u6={class:"flex no-wrap"},t6={class:"latest-content column justify-center bg-grey q-pa-lg"},e6=u("span",{class:"text-h6 font-cairo"},"\u0627\u062D\u062F\u062B \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u062F\u0648\u0646\u0629",-1),A6={class:"text-bold q-my-lg"},s6={class:"text-h5 q-mt-md"},o6={class:"img"},a6=["src"],n6={class:"recents q-mt-xl"},i6=u("h4",{class:"underline"},"\u0627\u0644\u0627\u0643\u062B\u0631 \u0642\u0631\u0627\u0621\u0629",-1),l6={class:"main q-my-xl"},r6={class:"items-center flex no-wrap q-my-xl"},c6=u("span",{class:"text-h5"},"\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A ",-1),d6=u("h2",null,"helloa",-1),k6=k({__name:"BlogIndex",setup(C){const A=T(),w={itemsToShow:1,dir:"rtl",snapAlign:"left",wrapAround:!0},x={700:{itemsToShow:3,snapAlign:"left"}},a=V(1),y="\u064A\u0633\u0639\u062F\u0646\u0627 \u062A\u0648\u0627\u0635\u0644\u0643 \u0645\u0639\u0646\u0627 \u0644\u0644\u0631\u062F \u0639\u0644\u064A \u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A\u0643 \u0627\u0648 \u0644\u0628\u062D\u062B \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0639\u0645\u0644 \u0645\u0639\u0627 \u0648\u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0639\u0644\u064A \u062A\u0637\u0648\u064A\u0631 \u0634\u0631\u062A\u0643\u062A\u0643",r="Aug 24, 2020",c=[{icon:"facebook",url:"https://www.facebook.com/"},{icon:"ion-logo-twitter",url:"https://www.twitter.com/"},{icon:"ion-logo-instagram",url:"https://www.instagram.com/"}],D=[{id:1,name:"\u062A\u0633\u0648\u064A\u0642"},{id:2,name:"\u0627\u0633\u062A\u0634\u0627\u0631\u0629"},{id:3,name:"\u0627\u0639\u0645\u0627\u0644"}],m={id:1,cat_id:2,name:"\u0643\u064A\u0641 \u062A\u0633\u0627\u0647\u0645 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0641\u064A \u062A\u062D\u0633\u064A\u0646 \u0634\u0631\u0643\u062A\u0643",breif:"\u062A\u062A\u062C\u0647 \u0634\u0631\u0643\u0629 \u0628\u064A\u0632\u0646\u064A\u0633 \u0628\u0631\u0648 \u0646\u062D\u0648 \u0646\u0645\u0648 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0648\u0645\u0633\u062A\u062F\u0627\u0645 \u0645\u0633\u062A\u0647\u062F\u0641\u0629\u0627\u0632\u062F\u0647\u0627\u0631 \u0648\u0631\u0641\u0627\u0647\u064A\u0629 \u0645\u0648\u0638\u0641\u064A\u0647\u0627 \u0648\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064A \u0627\u0642\u062A\u0635\u0627\u062F \u0642\u0637\u0631 \u0627\u0644\u0645\u062A\u0646\u0627\u0645\u064A \u0623\u0646 \u062A\u0646\u062A\u0647\u064A \u0635\u0644\u0627\u062D\u064A\u0629 \u062A\u0623\u0634\u064A\u0631\u0629 \u0627\u0644\u062F\u062E\u0648\u0644 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643",cat:"\u0627\u0633\u062A\u0634\u0627\u0631\u0629",img:"https://static.exploremelon.com/bznspro/blog/main.png",date:r},B=[{id:1,cat_id:1,views:10,name:"\u0623\u0647\u0645\u064A\u0629 \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0631\u0642\u0645\u064A  \u0641\u064A \u0639\u0627\u0644\u0645 \u0627\u0644\u0628\u064A\u0632\u0646\u064A\u0633 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A",cat:"\u062A\u0633\u0648\u064A\u0642",img:"https://static.exploremelon.com/bznspro/blog/m1.png",date:r},{id:2,cat_id:2,views:10,name:"  \u0643\u064A\u0641 \u062A\u0637\u0648\u0631 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0625\u062F\u0627\u0631\u064A\u0629 \u0645\u0646 \u0645\u0634\u0631\u0648\u0639\u0643 \u0648\u0634\u0631\u0643\u062A\u0643",cat:"\u0627\u0633\u062A\u0634\u0627\u0631\u0629",img:"https://static.exploremelon.com/bznspro/blog/m2.png",date:r},{id:3,cat_id:3,views:10,name:"\u0643\u064A\u0641 \u0623\u0643\u0648\u0646 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0627\u0648\u0646\u0644\u0627\u064A\u0646 \u0648\u0643\u064A\u0641 \u062A\u0642\u0648\u0645 \u0628\u062D\u062C\u0632\u0647\u0627",cat:"\u0623\u0639\u0645\u0627\u0644",img:"https://static.exploremelon.com/bznspro/blog/m3.png",date:r}],q={1:[{id:3,cat_id:1,views:40,name:"\u0643\u064A\u0641\u064A\u0629 \u0628\u0646\u0627\u0621 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u0633\u0648\u064A\u0642\u064A\u0629 \u0641\u0639\u0651\u0627\u0644\u0629 \u0644\u062A\u062D\u0642\u064A\u0642 \u0646\u062C\u0627\u062D \u0645\u0633\u062A\u062F\u0627\u0645",cat:"\u062A\u0633\u0648\u064A\u0642",img:"https://static.exploremelon.com/bznspro/blog/3.png",breif:"\u0627\u0633\u062A\u0643\u0634\u0641 \u062E\u0637\u0648\u0627\u062A \u0628\u0646\u0627\u0621 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u0633\u0648\u064A\u0642\u064A\u0629 \u0641\u0639\u0651\u0627\u0644\u0629 \u0644\u062A\u062D\u0642\u064A\u0642 \u0646\u062C\u0627\u062D \u0645\u0633\u062A\u062F\u0627\u0645 \u0644\u0639\u0645\u0644\u0643. \u0627\u0643\u062A\u0633\u0628 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0636\u0631\u0648\u0631\u064A\u0629 \u0644\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u062C\u0645\u0647\u0648\u0631 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641 \u0648\u062A\u0631\u0648\u064A\u062C \u0645\u0646\u062A\u062C\u0627\u062A\u0643 \u0623\u0648 \u062E\u062F\u0645\u0627\u062A\u0643 \u0628\u0641\u0639\u0627\u0644\u064A\u0629.",date:"2023-12-08",links:c},{id:4,cat_id:1,views:45,name:"\u0623\u0641\u0636\u0644 \u0645\u0645\u0627\u0631\u0633\u0627\u062A \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0631\u0642\u0645\u064A \u0644\u0632\u064A\u0627\u062F\u0629 \u0631\u0624\u064A\u0629 \u0639\u0644\u0627\u0645\u062A\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629",cat:"\u062A\u0633\u0648\u064A\u0642",img:"https://static.exploremelon.com/bznspro/blog/4.png",breif:"\u0627\u0633\u062A\u0641\u062F \u0645\u0646 \u0623\u0641\u0636\u0644 \u0645\u0645\u0627\u0631\u0633\u0627\u062A \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0631\u0642\u0645\u064A \u0644\u062A\u0639\u0632\u064A\u0632 \u0631\u0624\u064A\u0629 \u0639\u0644\u0627\u0645\u062A\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629. \u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0643\u064A\u0641\u064A\u0629 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A \u0648\u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u062A\u062D\u0642\u064A\u0642 \u0623\u0642\u0635\u0649 \u0627\u0633\u062A\u0641\u0627\u062F\u0629.",date:"2023-12-07",links:c}],2:[{id:1,cat_id:2,views:10,name:"\u0643\u064A\u0641\u064A\u0629 \u062A\u062D\u0633\u064A\u0646 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0644\u0636\u0645\u0627\u0646 \u0646\u062C\u0627\u062D \u0645\u0634\u0631\u0648\u0639\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A",cat:"\u0627\u0639\u0645\u0627\u0644",img:"https://static.exploremelon.com/bznspro/blog/1.png",breif:"\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0645\u0627\u0631\u0633\u0627\u062A \u0644\u062A\u062D\u0633\u064A\u0646 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0636\u0645\u0627\u0646 \u0646\u062C\u0627\u062D \u0645\u0634\u0631\u0648\u0639\u0643 \u0627\u0644\u062A\u062C\u0627\u0631\u064A. \u0627\u0643\u062A\u0633\u0628 \u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u062A\u062E\u0637\u064A\u0637 \u0648\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0628\u0641\u0639\u0627\u0644\u064A\u0629\u060C \u0648\u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u0623\u0647\u062F\u0627\u0641 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u0644\u0646\u062C\u0627\u062D \u0639\u0645\u0644\u0643.",date:r,links:c},{id:2,cat_id:2,views:10,name:"\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0627\u0639\u0645\u0627\u0644 \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0628\u064A\u0632\u0646\u064A\u0633 \u0645\u0646",cat:"\u0627\u0639\u0645\u0627\u0644",img:"https://static.exploremelon.com/bznspro/blog/2.png",breif:"\u062A\u062A\u062C\u0647 \u0634\u0631\u0643\u0629 \u0628\u064A\u0632\u0646\u064A\u0633 \u0628\u0631\u0648 \u0646\u062D\u0648 \u0646\u0645\u0648 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0648\u0645\u0633\u062A\u062F\u0627\u0645 \u0645\u0633\u062A\u0647\u062F\u0641\u0629 \u0627\u0632\u062F\u0647\u0627\u0631 \u0648\u0631\u0641\u0627\u0647\u064A\u0629 \u0645\u0648\u0638\u0641\u064A\u0647\u0627 \u0648\u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0648\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064A \u0627\u0642\u062A\u0635\u0627\u062F \u0642\u0637\u0631 \u0627\u0644\u0645\u062A\u0646\u0627\u0645\u064A \u0623\u0646 \u062A\u0646\u062A\u0647\u064A \u0635\u0644\u0627\u062D\u064A\u0629 \u062A\u0623\u0634\u064A\u0631\u0629 \u0627\u0644\u062F\u062E\u0648\u0644 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643. \u062A\u062A\u0636\u0645\u0651\u0646 \u062E\u062F\u0645\u0627\u062A\u0646\u0627 \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062D\u0648\u0644 \u0627\u0644\u0648\u064F\u062C\u0647\u0627\u062A \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0648\u0627\u0644\u062C\u0627\u0645\u0639\u0627\u062A \u0648\u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0648\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0642\u0628\u0648\u0644 \u0648\u0623\u0645\u0627\u0643\u0646 \u0627\u0644\u0633\u0643\u0646 \u0648\u062A\u0623\u0634\u064A\u0631\u0627\u062A \u062F\u062E\u0648\u0644 \u0627\u0644\u0637\u0644\u0627\u0628",date:r,links:c}],3:[{id:5,cat_id:3,views:50,name:"\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0625\u062F\u0627\u0631\u064A\u0629 \u0644\u062A\u0637\u0648\u064A\u0631 \u0645\u0634\u0631\u0648\u0639\u0643",cat:"\u0627\u0633\u062A\u0634\u0627\u0631\u0629",img:"https://static.exploremelon.com/bznspro/blog/5.png",breif:"\u0627\u0643\u062A\u0633\u0628 \u0627\u0644\u0646\u0635\u0627\u0626\u062D \u0627\u0644\u0642\u064A\u0645\u0629 \u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0625\u062F\u0627\u0631\u064A\u0629 \u0648\u062A\u0637\u0648\u064A\u0631 \u0645\u0634\u0631\u0648\u0639\u0643 \u0628\u0641\u0639\u0627\u0644\u064A\u0629. \u0627\u0639\u0631\u0641 \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0643 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0645\u0627\u0644\u064A \u0648\u062A\u0646\u0641\u064A\u0630 \u062A\u062D\u0633\u064A\u0646\u0627\u062A \u0625\u062F\u0627\u0631\u064A\u0629 \u0644\u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u0646\u062C\u0627\u062D \u0641\u064A \u0623\u0639\u0645\u0627\u0644\u0643.",date:"2023-12-06",links:c},{id:6,cat_id:3,views:55,name:"\u0643\u064A\u0641\u064A\u0629 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0633\u062A\u0634\u0627\u0631\u064A\u064B\u0627 \u0623\u0648\u0646\u0644\u0627\u064A\u0646 \u0648\u062A\u0642\u062F\u064A\u0645 \u062E\u062F\u0645\u0627\u062A \u0641\u0639\u0651\u0627\u0644\u0629",cat:"\u0627\u0633\u062A\u0634\u0627\u0631\u0629",img:"https://static.exploremelon.com/bznspro/blog/6.png",breif:"\u0627\u0633\u062A\u0643\u0634\u0641 \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0643 \u0623\u0646 \u062A\u0635\u0628\u062D \u0627\u0633\u062A\u0634\u0627\u0631\u064A\u064B\u0627 \u0623\u0648\u0646\u0644\u0627\u064A\u0646 \u0646\u0627\u062C\u062D\u064B\u0627 \u0648\u062A\u0642\u062F\u064A\u0645 \u062E\u062F\u0645\u0627\u062A \u0641\u0639\u0651\u0627\u0644\u0629 \u0644\u0639\u0645\u0644\u0627\u0626\u0643. \u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0623\u0641\u0636\u0644 \u0627\u0644\u0637\u0631\u0642 \u0644\u0628\u0646\u0627\u0621 \u0633\u0645\u0639\u0629 \u062C\u064A\u062F\u0629 \u0648\u0643\u0633\u0628 \u062B\u0642\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0627\u062A.",date:"2023-12-05",links:c}]};function b(h){A.push({name:"blog-view",params:{id:h}})}return(h,o)=>(e(),i("div",Y,[u("div",{class:"header text-center"},[Z,u("p",{class:"text-h6"},l(y))]),u("div",{class:"latest",onClick:o[1]||(o[1]=g(t=>b(m.id),["prevent"]))},[u("div",u6,[u("div",t6,[e6,u("h4",A6,l(m.name),1),u("p",s6,l(m.breif),1),u("div",null,[s(f,{outline:"",label:"\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F",color:"blue",size:"xl",onClick:o[0]||(o[0]=g(t=>h.$router.push({name:"blog-view",params:{id:m.id}}),["prevent"]))})])]),u("div",o6,[u("img",{src:m.img,class:"full-height"},null,8,a6)])])]),u("div",n6,[i6,s(F(R),{settings:w,dir:"rtl",breakpoints:x},{addons:d(()=>[s(F(N))]),default:d(()=>[(e(),i(p,null,_(B,t=>s(F(j),{key:t.id},{default:d(()=>[(e(),v(S,{onClick:g(n=>b(t.id),["prevent"]),key:t.id,post:t},null,8,["onClick","post"]))]),_:2},1024)),64))]),_:1})]),u("div",l6,[u("div",r6,[c6,s($,{dense:"",modelValue:a.value,"onUpdate:modelValue":o[2]||(o[2]=t=>a.value=t),"active-bg-color":"blue","active-color":"white","outside-arrows":"","inline-label":"",class:"cats flex-grow wrap"},{default:d(()=>[(e(),i(p,null,_(D,t=>s(E,{key:t.id,name:t.id,label:t.name},null,8,["name","label"])),64))]),_:1},8,["modelValue"])]),(e(),i(p,null,_(D,t=>s(P,{key:t.id,modelValue:a.value,"onUpdate:modelValue":o[3]||(o[3]=n=>a.value=n),animated:""},{default:d(()=>[(e(!0),i(p,null,_(q[t.id],n=>(e(),v(z,{key:n.id,name:n.id},{default:d(()=>[s(X,{onClick:g(m6=>b(n.id),["prevent"]),post:n,class:"q-mt-xl"},null,8,["onClick","post"])]),_:2},1032,["name"]))),128)),d6]),_:2},1032,["modelValue"])),64))])]))}});export{k6 as default};