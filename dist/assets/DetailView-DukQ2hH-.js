import{r as i,a as m,b as s,t as v,u,i as b,v as k,P as h,g as P,F as w,e as j,k as q,o as _,n as F}from"./vendor-BEBZZ-e9.js";import{_ as M,k as N}from"./index--y9bxv4C.js";const R="/assets/back-BrqCTv69.png",U={cellspacing:"0",class:"mockup_table"},$={class:"mockup_tr"},E={rowspan:"7"},L=["src"],A={colspan:"4",class:"tr_one tr_head"},G={class:"head_span"},H={colspan:"3",class:"tr_two Price"},J={class:"tr_tr_there"},K={class:"td"},O={class:"td"},Q={class:"div"},W=["src","onClick"],X={__name:"DetailView",setup(Y){const f=q(),n=N().items,g=i(n.image||"@/assets/images/aos/1.webp");let r=n.price;const l=i({1:1,2:1}),c=i(["src/assets/images/aos/1.webp","src/assets/images/aos/2.webp","src/assets/images/aos/3.webp","src/assets/images/aos/4.webp","src/assets/images/aos/5.webp","src/assets/images/aos/6.webp"]),a=i(0),C=e=>{l.value[e]<999&&(l.value[e]++,r=l.value[e]*n.price)},x=e=>{l.value[e]>1?(l.value[e]--,r=l.value[e]*n.price):alert("必须选择一件")},I=e=>{a.value=e,d()},V=()=>{a.value--,a.value<0&&(a.value=c.value.length-1),d()},B=()=>{a.value++,a.value>=c.value.length&&(a.value=0),d()},d=()=>{const e=c.value[a.value];g.value=e},T=()=>{alert("收藏成功")},y=()=>{alert("已下单")},D=()=>{alert("已加入购物车")},S=()=>{f.back()};return(e,t)=>(_(),m(w,null,[s("div",{class:"back_bt"},[s("button",{id:"go-back-btn",onClick:S},t[4]||(t[4]=[s("img",{src:R},null,-1)]))]),s("table",U,[s("tr",$,[s("td",E,[s("img",{src:g.value||"@/assets/images/aos/1.webp",class:"mockup_img"},null,8,L)])]),s("tr",null,[s("td",A,[s("span",G,v(u(n).title),1)])]),s("tr",null,[t[5]||(t[5]=s("td",{colspan:"1",class:"tr_one"},"单价",-1)),s("td",H,v(u(n).price)+"元/"+v(u(n).unit),1)]),t[8]||(t[8]=s("tr",null,[s("td",{class:"tr_one"},"服务"),s("td",{colspan:"3",class:"tr_two"},"七天无理由退货·晚发必赔·极速退款")],-1)),t[9]||(t[9]=s("tr",null,[s("td",{class:"tr_one"},"物流"),s("td",{colspan:"3",class:"tr_two"},"浙江金华")],-1)),s("tr",null,[t[7]||(t[7]=s("td",{rowspan:"2",class:"tr_one"},"数量",-1)),s("td",J,[b(s("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=o=>h(r)?r.value=o:r=o),disabled:""},null,512),[[k,u(r)]]),t[6]||(t[6]=P("元 "))]),s("td",K,[s("a",{href:"javascript:;",class:"decrement",onClick:t[1]||(t[1]=o=>x("1"))},"-"),b(s("input",{type:"text",class:"itxt","onUpdate:modelValue":t[2]||(t[2]=o=>l.value[1]=o)},null,512),[[k,l.value[1],void 0,{number:!0}]]),s("a",{href:"javascript:;",class:"increment",onClick:t[3]||(t[3]=o=>C("1"))},"+")])]),t[10]||(t[10]=s("tr",null,[s("td",{class:"tr_there"},"938件可售")],-1)),s("tr",null,[s("td",O,[s("button",{class:"left_button",onClick:V},"<"),s("div",Q,[(_(!0),m(w,null,j(c.value,(o,p)=>(_(),m("img",{key:p,src:o,class:F({selected:a.value===p}),onClick:z=>I(p)},null,10,W))),128))]),s("button",{class:"right_button",onClick:B},">")]),s("td",{colspan:"4"},[s("div",{class:"button_one"},[s("button",{class:"collection",onClick:T}," ⭐收藏 "),s("button",{class:"purchase",onClick:y}," 🕹️立即购买 "),s("button",{class:"cart",onClick:D}," 🛒加入购物车 ")])])])])],64))}},es=M(X,[["__scopeId","data-v-aee1872c"]]);export{es as default};
