import{C as k}from"./Common.f18daec5.js";import{P as g}from"./PageHeader.d7a07c3a.js";import{_ as h,f as v,u as L,G as B,i as w,o as t,g as x,w as C,b as y,h as c,d as e,c as o,D as _,F as u,t as i}from"./app.307c2685.js";const D={class:"links-wrapper"},F={class:"link-group"},P={class:"content"},$=["href"],b=["src"],N={class:"sitename"},T={class:"desc"},V=v({__name:"Links",setup(E){const a=L(),p=B(),d=w(()=>{var r;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(r=a.value.pageText)==null?void 0:r.links),s});return(s,r)=>(t(),x(k,null,{page:C(()=>[y(g,{"page-info":c(d)},null,8,["page-info"]),e("div",D,[(t(!0),o(u,null,_(c(p).links,(l,m)=>(t(),o("div",{key:`link-group-${m}`,class:"link-section"},[e("h2",null,i(l.title),1),e("div",F,[(t(!0),o(u,null,_(l.items,(n,f)=>(t(),o("div",{key:`link-${f}`,class:"link-item"},[e("div",P,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,b),e("span",N,i(n.sitename),1),e("div",T,i(n.desc),1)],8,$)])]))),128))])]))),128))])]),_:1}))}});var S=h(V,[["__file","Links.vue"]]);export{S as default};
