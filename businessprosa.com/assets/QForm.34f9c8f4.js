import{c as E,h as P}from"./render.239685c4.js";import{r as q,q as A,s as B,o as I,h as R,g as V,x as S,u as Q,p as j,ad as D}from"./index.a3f01b2f.js";import{a as O}from"./QInput.93c19c61.js";import{b as k}from"./Ripple.c29294a6.js";var z=E({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(a,{slots:F,emit:l}){const C=V(),u=q(null);let s=0;const i=[];function d(e){const r=typeof e=="boolean"?e:a.noErrorFocus!==!0,f=++s,x=(t,o)=>{l("validation"+(t===!0?"Success":"Error"),o)},h=t=>{const o=t.validate();return typeof o.then=="function"?o.then(n=>({valid:n,comp:t}),n=>({valid:!1,comp:t,err:n})):Promise.resolve({valid:o,comp:t})};return(a.greedy===!0?Promise.all(i.map(h)).then(t=>t.filter(o=>o.valid!==!0)):i.reduce((t,o)=>t.then(()=>h(o).then(n=>{if(n.valid===!1)return Promise.reject(n)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return f===s&&x(!0),!0;if(f===s){const{comp:o,err:n}=t[0];if(n!==void 0&&console.error(n),x(!1,o),r===!0){const p=t.find(({comp:g})=>typeof g.focus=="function"&&k(g.$)===!1);p!==void 0&&p.comp.focus()}}return!1})}function m(){s++,i.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function v(e){e!==void 0&&S(e);const r=s+1;d().then(f=>{r===s&&f===!0&&(a.onSubmit!==void 0?l("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function b(e){e!==void 0&&S(e),l("reset"),Q(()=>{m(),a.autofocus===!0&&a.noResetFocus!==!0&&c()})}function c(){O(()=>{if(u.value===null)return;const e=u.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),r=>r.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}j(D,{bindComponent(e){i.push(e)},unbindComponent(e){const r=i.indexOf(e);r>-1&&i.splice(r,1)}});let y=!1;return A(()=>{y=!0}),B(()=>{y===!0&&a.autofocus===!0&&c()}),I(()=>{a.autofocus===!0&&c()}),Object.assign(C.proxy,{validate:d,resetValidation:m,submit:v,reset:b,focus:c,getValidationComponents:()=>i}),()=>R("form",{class:"q-form",ref:u,onSubmit:v,onReset:b},P(F.default))}});export{z as Q};
