import{_ as V,B as D,q as W,a as I}from"./index-CPDE6DI5.js";import{r as n,o as r,a as o,b as e,F as w,e as M,t as m,s as U,c as $,i as k,U as B,V as S,v as E,W as N,f as p,u as T,X as F,w as j,E as z,g as A}from"./vendor-xI_S6KZC.js";import{E as L}from"./EchartsStore-DKkGkrEG.js";import{g as Y,P as q}from"./ProductNews-Bgm5tVPd.js";const O={class:"recommend-cates"},R=["href"],H={__name:"HotRecommend",setup(C){const l=n([{items:[{name:"苹果",url:"/purchase/apple"},{name:"柑桔",url:"/purchase/citrus"},{name:"鸡",url:"/purchase/chicken"},{name:"鸡蛋",url:"/purchase/egg"},{name:"红薯",url:"/purchase/sweetpotato"},{name:"猪副产品",url:"/purchase/pigbyproducts"},{name:"辣椒",url:"/purchase/chili"},{name:"鸡苗",url:"/purchase/chickensalvage"},{name:"土豆",url:"/purchase/potato"},{name:"生姜",url:"/purchase/ginger"},{name:"大蒜",url:"/purchase/garlic"},{name:"葡萄",url:"/purchase/grape"},{name:"大米",url:"/purchase/rice"},{name:"白菜",url:"/purchase/cabbage"},{name:"柚子",url:"/purchase/grapefruit"}]},{items:[{name:"甘蔗",url:"/purchase/sugarcane"},{name:"板栗",url:"/purchase/chestnut"},{name:"榴莲",url:"/purchase/durian"},{name:"大闸蟹",url:"/purchase/crab"},{name:"干玉米",url:"/purchase/corn"},{name:"有机肥",url:"/purchase/fertilizer"},{name:"西红柿",url:"/purchase/tomato"},{name:"核桃",url:"/purchase/walnut"},{name:"梨",url:"/purchase/pear"},{name:"大葱",url:"/purchase/scallion"},{name:"花生",url:"/purchase/peanut"},{name:"杀菌剂",url:"/purchase/fungicide"},{name:"羊",url:"/purchase/sheep"},{name:"山药",url:"/purchase/yam"},{name:"牛",url:"/purchase/cattle"}]},{items:[{name:"鱼苗",url:"/purchase/fishseed"},{name:"橙子",url:"/purchase/orange"},{name:"鲜枣",url:"/purchase/jujube"},{name:"杀虫剂",url:"/purchase/insecticide"},{name:"包菜",url:"/purchase/cabbage"},{name:"大豆",url:"/purchase/soybean"},{name:"鲜玉米",url:"/purchase/freshcorn"},{name:"鹅苗",url:"/purchase/gooseseed"},{name:"萝卜",url:"/purchase/radish"},{name:"干菜",url:"/purchase/driedvegetables"},{name:"鸭",url:"/purchase/duck"},{name:"休闲零食",url:"/purchase/snacks"},{name:"生蚝",url:"/purchase/oyster"},{name:"黄精",url:"/purchase/huangjing"}]}]);return(u,c)=>(r(),o("div",O,[e("ul",null,[c[0]||(c[0]=e("li",{class:"label-recommend"},"热门推荐",-1)),(r(!0),o(w,null,M(l.value,(i,_)=>(r(),o("li",{class:"sub-row",key:_},[(r(!0),o(w,null,M(i.items,(g,h)=>(r(),o("a",{key:h,href:g.url,target:"_blank",class:"third-cate-item link-expanded"},m(g.name),9,R))),128))]))),128))])]))}},X=V(H,[["__scopeId","data-v-61ad79c8"]]),G={class:"table-form"},J={class:"demo-form-inline"},K={class:"form-item"},Q=["value"],Z={class:"form-item"},ee={class:"form-item"},ae={class:"table-box"},te={class:"custom-table",style:{width:"100%"}},se=["onClick"],le={class:"pagination"},ne=["disabled"],re=["disabled"],oe={__name:"TableForm",setup(C){const l=n(1),u=n(10),c=n(0),i=n([]),_=n(!1),g=n(!1),h=n(1),b=s=>{s>=1&&s<=d.value&&(l.value=s,f())},f=async()=>{try{const s=v.value?v.value:"",a=await N.get(`${D}/purchase/query/${l.value}/${u.value}`,{params:{params:s}});i.value=a.data.data.list,c.value=a.data.data.total,l.value=a.data.data.pageNum}catch(s){console.log(`警告: ${s.message}`)}},v=n(""),x=n([]),P=async()=>{try{const s=await N.get(`${D}/city/list`);x.value=s.data.data.map(a=>({id:a.id,city:a.city}))}catch(s){console.log(`警告: ${s.message}`)}};U(()=>{f(),P()});const y=s=>{console.log("去报价抢单",s)},d=$(()=>Math.ceil(c.value/u.value));return(s,a)=>(r(),o("div",G,[e("div",null,[e("form",J,[e("div",K,[a[8]||(a[8]=e("label",null,"收货地区:",-1)),k(e("select",{"onUpdate:modelValue":a[0]||(a[0]=t=>v.value=t),onChange:f,size:"1"},[a[7]||(a[7]=e("option",{value:""},"不限地区",-1)),(r(!0),o(w,null,M(x.value,t=>(r(),o("option",{key:t.id,value:t.city},m(t.city),9,Q))),128))],544),[[B,v.value]])]),e("div",Z,[k(e("input",{type:"checkbox","onUpdate:modelValue":a[1]||(a[1]=t=>_.value=t)},null,512),[[S,_.value]]),a[9]||(a[9]=e("label",null,"最近7天发布",-1))]),e("div",ee,[k(e("input",{type:"checkbox","onUpdate:modelValue":a[2]||(a[2]=t=>g.value=t)},null,512),[[S,g.value]]),a[10]||(a[10]=e("label",null,"最近30天发布",-1))])])]),e("div",ae,[e("table",te,[a[11]||(a[11]=e("thead",null,[e("tr",null,[e("th",null,"采购品种"),e("th",null,"采购量"),e("th",null,"收货地"),e("th",null,"采购方"),e("th",null,"更新时间"),e("th",null,"采购等级"),e("th",null,"操作")])],-1)),e("tbody",null,[(r(!0),o(w,null,M(i.value,t=>(r(),o("tr",{key:t.id},[e("td",null,m(t.kName),1),e("td",null,m(t.amount),1),e("td",null,m(t.receipt),1),e("td",null,m(t.buyer),1),e("td",null,m(t.updateTime),1),e("td",null,m(t.level),1),e("td",null,[e("button",{class:"success-btn",onClick:we=>y(t)}," 去报价抢单 ",8,se)])]))),128))])])]),e("div",le,[e("button",{onClick:a[3]||(a[3]=t=>b(l.value-1)),disabled:l.value<=1}," 上一页 ",8,ne),e("span",null,"第 "+m(l.value)+" 页",1),e("button",{onClick:a[4]||(a[4]=t=>b(l.value+1)),disabled:l.value>=d.value}," 下一页 ",8,re),e("span",null,"共 "+m(d.value)+" 页",1),k(e("input",{type:"number","onUpdate:modelValue":a[5]||(a[5]=t=>h.value=t),min:"1",max:"totalPages"},null,512),[[E,h.value,void 0,{number:!0}]]),e("button",{onClick:a[6]||(a[6]=t=>b(h.value))},"跳转")])]))}},ue=V(oe,[["__scopeId","data-v-4a27f73a"]]),ce={class:"cloud"},ie={class:"box"},de={__name:"WordCloud",setup(C){const l=n([["玉米",6],["鸡蛋",9],["柑桔",7],["大米",8],["苹果",6],["红薯",7],["橙子",9]]),u=([,c])=>(c>5,"#000");return(c,i)=>(r(),o("div",ce,[i[0]||(i[0]=e("p",{class:"title"},"近7天热门采购榜",-1)),e("div",ie,[p(T(F),{words:l.value,color:u,spacing:1},null,8,["words"])])]))}},me=V(de,[["__scopeId","data-v-e7bb6d07"]]),pe={class:"container"},he={class:"list"},ve={class:"container_box"},_e={class:"left"},ge={class:"right"},be={class:"word"},fe={class:"echarts"},xe={class:"echarts_title"},ye={class:"product"},ke={class:"footer"},$e={__name:"ProcureView",setup(C){const l=Y(null,"MM-DD"),u=[25,26,24.5,27,25.5,27,26.5],c=$(()=>Math.round(Math.max(...u)*100)/100),i=$(()=>Math.round(Math.min(...u)*100)/100),_=$(()=>u.reduce((y,d)=>y+d,0)/u.length),h=Math.round(_.value*100)/100+"元/斤",b=n((c.value-i.value)/4),f=Math.round(c.value+b.value),v=Math.round(i.value-b.value),x=Math.round((f-v)/8),P=n({animation:!0,animationDuration:1e3,title:{text:"猫牙米",subtext:h,left:"left",textStyle:{fontSize:16,color:"#39bf3e"}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},feature:{saveAsImage:{},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{}}},grid:{top:"25%",left:"5%",right:"2%",bottom:"15%",containLabel:!0},xAxis:{type:"category",data:l.datesOfWeek},yAxis:{type:"value",min:f,max:v,interval:x},series:[{name:"价格",type:"line",smooth:!0,data:u,color:["#007bff"],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]});return(y,d)=>{const s=z("router-link");return r(),o("div",pe,[e("div",he,[p(X)]),e("div",ve,[e("div",_e,[p(ue)]),e("div",ge,[e("div",be,[p(me)]),e("div",fe,[e("div",xe,[d[1]||(d[1]=e("p",null,"行情动态",-1)),p(s,{to:"/market",class:"link"},{default:j(()=>d[0]||(d[0]=[A("更多 ❯")])),_:1})]),p(L,{options:P.value,height:"200px"},null,8,["options"])]),e("div",ye,[p(q,{news:T(W)},null,8,["news"])])])]),e("div",ke,[p(I)])])}}},De=V($e,[["__scopeId","data-v-753d0268"]]);export{De as default};