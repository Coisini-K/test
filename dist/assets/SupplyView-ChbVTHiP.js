import{_ as k,u as U,L as B,C,d as j,S as x,R as G,a as M,v as f,s as V,p as N,b as h,m as q,e as E,g as w,r as F,n as I,c as S,f as P,h as J,A,i as O,j as Q}from"./index--y9bxv4C.js";import{o as t,a,b as r,t as i,F as d,e as R,l as T,r as y,c as W,f as u,u as X,h as $,O as Y}from"./vendor-BEBZZ-e9.js";const z={class:"new-supplies"},H=["onClick"],K={class:"name"},Z={class:"name-num1"},ee={class:"name-num2"},se={__name:"SupplyUlRight",props:{supplies:{type:Array,default:()=>[]},vegetables:{type:Array,default:()=>[]}},setup(g){function m(p){p?window.location.href=p:window.location.href="https://www.cnhnb.com/supply/"}return(p,_)=>{var c;return t(),a("div",z,[r("h2",null,"新供应·"+i(((c=g.vegetables[6])==null?void 0:c.name)||"蔬菜分类"),1),r("ul",null,[(t(!0),a(d,null,R(g.supplies,(l,v)=>(t(),a("li",{key:v,class:"supply-item",onClick:b=>m(l.url)},[r("span",K,[r("p",Z,i(l.name||"商品名称"),1),r("p",ee,i(l.price||"价格")+"/"+i(l.unit||"单位"),1)])],8,H))),128))])])}}},te=k(se,[["__scopeId","data-v-4daa82c1"]]),ae={class:"about-box"},le=["id"],oe={__name:"SupplyView",setup(g){const m=U(),p=()=>{const s=[{name:"蔬菜",isActive:!0},{name:"农具",isActive:!1},{name:"粮食",isActive:!1},{name:"种子",isActive:!1},{name:"农副",isActive:!1}];s.forEach((o,e)=>{o.target=`#section-${e*2}`}),m.setBar(s)};T(()=>{p()});const _=[new URL("/assets/1-D88c1UqN.jpg",import.meta.url).href,new URL("/assets/2-BJRSoAld.jpg",import.meta.url).href,new URL("/assets/3-Dq9srXw0.jpg",import.meta.url).href,new URL("/assets/4-CiuEQboW.jpg",import.meta.url).href],c=y(!0),l=y("最新成交"),v=y(b());function b(){const s=new Date,o=s.getFullYear(),e=String(s.getMonth()+1).padStart(2,"0"),n=String(s.getDate()).padStart(2,"0");return`${o}-${e}-${n}`}const D=W(()=>{const s=f.slice(0,1).map(()=>[{vegetables:f,supplies:V,type:"supply"},{products:N,vegetables:f,type:"product"}]).flat(),o=[{vegetables:h,supplies:q,type:"supply"},{products:E,vegetables:h,type:"product"}],e=[{vegetables:w,supplies:F,type:"supply"},{products:I,vegetables:w,type:"product"}],n=[{vegetables:S,supplies:P,type:"supply"},{products:J,vegetables:S,type:"product"}],L=[{vegetables:A,supplies:O,type:"supply"},{products:Q,vegetables:A,type:"product"}];return[...s,...o,...e,...n,...L]});return(s,o)=>(t(),a(d,null,[r("div",ae,[u(C,{slides:_,interval:3e3,class:"carousel"}),u(B,{deals:X(j),title:c.value,info:l.value,date:v.value,class:"latestDeals"},null,8,["deals","title","info","date"])]),(t(!0),a(d,null,R(D.value,(e,n)=>(t(),a("div",{key:`section-${n}`,class:"app-box",id:`section-${n}`},[e.type==="supply"?(t(),a(d,{key:0},[u(x,{vegetables:e.vegetables,shadow:!0},null,8,["vegetables"]),u(te,{supplies:e.supplies,vegetables:e.vegetables},null,8,["supplies","vegetables"])],64)):$("",!0),e.type==="product"?(t(),Y(G,{key:1,products:e.products,vegetables:e.vegetables,title:!0},null,8,["products","vegetables"])):$("",!0)],8,le))),128)),u(M)],64))}},pe=k(oe,[["__scopeId","data-v-39709a72"]]);export{pe as default};
