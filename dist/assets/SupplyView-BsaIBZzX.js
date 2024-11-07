import{_ as S,o as t,c as a,a as r,t as c,F as d,r as h,b as g,d as C,e as p,w as L,f as P,u as R,g as w,h as j,C as B,i as G,L as M,j as b,k as T,S as O,l as A,m as N,R as z,v as k,s as F,p as U,n as $,q,x as H,y as D,z as Y,A as J,B as E,D as K,E as Q,G as V,H as W,I as X}from"./index-Dme4JMM3.js";const Z={class:"new-supplies"},ee=["onClick"],te={class:"name"},se={class:"name-num1"},ae={class:"name-num2"},oe={__name:"SupplyUlRight",props:{supplies:{type:Array,default:()=>[]},vegetables:{type:Array,default:()=>[]}},setup(y){function _(n){n?window.location.href=n:window.location.href="https://www.cnhnb.com/supply/"}return(n,f)=>{var u;return t(),a("div",Z,[r("h2",null,"新供应·"+c(((u=y.vegetables[6])==null?void 0:u.name)||"蔬菜分类"),1),r("ul",null,[(t(!0),a(d,null,h(y.supplies,(o,m)=>(t(),a("li",{key:m,class:"supply-item",onClick:v=>_(o.url)},[r("span",te,[r("p",se,c(o.name||"商品名称"),1),r("p",ae,c(o.price||"价格")+"/"+c(o.unit||"单位"),1)])],8,ee))),128))])])}}},le=S(oe,[["__scopeId","data-v-be9c3944"]]),re={class:"container"},ne={__name:"SectionsModule",setup(y){const _=g([{title:"新手指南",links:[{text:"注册账户",to:"/register"},{text:"平台功能",to:"/features"},{text:"在线交易",to:"/transactions"},{text:"买家保障",to:"/buyer-protection"}]},{title:"产品服务",links:[{text:"找供应",to:"/find-supply"},{text:"找采购",to:"/find-purchase"},{text:"看行情",to:"/market-trends"},{text:"发布供应",to:"/post-supply"},{text:"一件代发",to:"/dropshipping"}]},{title:"合作联系",links:[{text:"客户服务 400-008-6888",to:"/customer-service"},{text:"商务洽谈 0731-88189999",to:"/business-talks"},{text:"媒体合作 0731-88189999",to:"/media-cooperation"},{text:"惠农网知识产权综合服务平台",to:"/intellectual-property-platform"},{text:"惠农网乡村振兴合作专区",to:"/rural-revitalization-zone"}]},{title:"关于我们",links:[{text:"关于我们",to:"/about-us"},{text:"惠农大事件",to:"/major-events"},{text:"服务协议",to:"/service-agreement"},{text:"隐私政策",to:"/privacy-policy"},{text:"规则说明",to:"/rules-explanation"}]}]);return(n,f)=>{const u=C("router-link");return t(),a("div",re,[(t(!0),a(d,null,h(_.value,(o,m)=>(t(),a("div",{key:m,class:"section"},[r("h2",null,c(o.title),1),r("ul",null,[(t(!0),a(d,null,h(o.links,(v,x)=>(t(),a("li",{key:x},[p(u,{to:v.to},{default:L(()=>[P(c(v.text),1)]),_:2},1032,["to"])]))),128))])]))),128))])}}},ue=S(ne,[["__scopeId","data-v-b5a1e11a"]]),ie={class:"about-box"},pe=["id"],ce={__name:"SupplyView",setup(y){const _=R(),n=()=>{const s=[{name:"蔬菜",isActive:!0},{name:"农具",isActive:!1},{name:"粮食",isActive:!1},{name:"种子",isActive:!1},{name:"农副",isActive:!1}];s.forEach((l,e)=>{l.target=`#section-${e*2}`}),_.setBar(s)};w(()=>{n()});const f=g([]);w(async()=>{const s=Object.assign({"/src/assets/images/supply/carousel/1.jpg":()=>b(()=>import("./1-d7Nh1Lkx.js"),[],import.meta.url),"/src/assets/images/supply/carousel/2.jpg":()=>b(()=>import("./2-k8B_5w6I.js"),[],import.meta.url),"/src/assets/images/supply/carousel/3.jpg":()=>b(()=>import("./3-DDJjUp6S.js"),[],import.meta.url),"/src/assets/images/supply/carousel/4.jpg":()=>b(()=>import("./4-B53R3qVb.js"),[],import.meta.url)});for(const l in s){const e=await s[l]();f.value.push(e.default)}});const u=g(!0),o=g("最新成交"),m=g(v());function v(){const s=new Date,l=s.getFullYear(),e=String(s.getMonth()+1).padStart(2,"0"),i=String(s.getDate()).padStart(2,"0");return`${l}-${e}-${i}`}const x=j(()=>{const s=k.slice(0,1).map(()=>[{vegetables:k,supplies:F,type:"supply"},{products:U,vegetables:k,type:"product"}]).flat(),l=[{vegetables:$,supplies:q,type:"supply"},{products:H,vegetables:$,type:"product"}],e=[{vegetables:D,supplies:Y,type:"supply"},{products:J,vegetables:D,type:"product"}],i=[{vegetables:E,supplies:K,type:"supply"},{products:Q,vegetables:E,type:"product"}],I=[{vegetables:V,supplies:W,type:"supply"},{products:X,vegetables:V,type:"product"}];return[...s,...l,...e,...i,...I]});return(s,l)=>(t(),a(d,null,[r("div",ie,[p(B,{slides:f.value,interval:3e3,class:"carousel"},null,8,["slides"]),p(M,{deals:G(T),title:u.value,info:o.value,date:m.value,class:"latestDeals"},null,8,["deals","title","info","date"])]),(t(!0),a(d,null,h(x.value,(e,i)=>(t(),a("div",{key:`section-${i}`,class:"app-box",id:`section-${i}`},[e.type==="supply"?(t(),a(d,{key:0},[p(O,{vegetables:e.vegetables,shadow:!0},null,8,["vegetables"]),p(le,{supplies:e.supplies,vegetables:e.vegetables},null,8,["supplies","vegetables"])],64)):A("",!0),e.type==="product"?(t(),N(z,{key:1,products:e.products,vegetables:e.vegetables,title:!0},null,8,["products","vegetables"])):A("",!0)],8,pe))),128)),p(ue)],64))}},_e=S(ce,[["__scopeId","data-v-3ca71c31"]]);export{_e as default};