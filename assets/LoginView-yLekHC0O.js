import{r as a,a as v,b as e,B as b,i as f,v as g,t as w,h as _,g as r,k as I,o as p}from"./vendor-xI_S6KZC.js";import{_ as M,u as R}from"./index-CPDE6DI5.js";const S={class:"box"},U={class:"login-container"},L={class:"form-group"},N={class:"form-group"},q={key:0,class:"error-message"},z={key:0,class:"countdown"},A={__name:"LoginView",setup(D){const c=R(),n=a(""),l=a(""),s=a(""),m=a(!1),u=a(5),i=I(),k=()=>{i.back()},x=async()=>{try{const o=/^[a-zA-Z0-9_]{6,}$/,t=/^[a-zA-Z0-9.]{6,}$/;if(!o.test(n.value)){s.value="用户名必须至少6个字符长, 可以包含字母、数字和下划线_。";return}if(!t.test(l.value)){s.value="密码必须至少6个字符长, 可以包含字母、数字和小数点.。";return}n.value.length>0&&l.value.length>0?(C(),s.value="",m.value=!0,y()):s.value="无效的用户名或密码"}catch(o){s.value="登录过程中发生错误: "+o.message}},y=()=>{const o=setInterval(()=>{u.value--,u.value<=0&&(clearInterval(o),i.push("/"))},1e3)},V=()=>{i.push("/")};function C(){c.setUser({name:n.value})}function B(){c.logout(),s.value="已退出账号"}return(o,t)=>(p(),v("div",S,[e("div",U,[e("div",{class:"btn_box"},[e("button",{type:"button",id:"back_btn",class:"btn_top",onClick:k}," < "),e("button",{type:"button",id:"logout_btn",class:"btn_top",onClick:B}," 注销 ")]),t[9]||(t[9]=e("h2",null,"登录",-1)),e("form",{onSubmit:b(x,["prevent"])},[e("div",L,[t[2]||(t[2]=e("label",{for:"username"},"用户名:",-1)),f(e("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=d=>n.value=d),required:""},null,512),[[g,n.value]])]),e("div",N,[t[3]||(t[3]=e("label",{for:"password"},"密码:",-1)),f(e("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=d=>l.value=d),required:""},null,512),[[g,l.value]])]),s.value?(p(),v("div",q,w(s.value),1)):_("",!0),t[4]||(t[4]=e("div",{class:"btn_box"},[e("button",{type:"reset",class:"btn"},"重置"),e("button",{type:"submit",class:"btn"},"登录")],-1))],32),m.value?(p(),v("div",z,[e("p",null,[t[5]||(t[5]=r(" 登录成功,将在 ")),e("span",null,w(u.value),1),t[6]||(t[6]=r(" 秒后自动跳转... "))]),e("p",null,[t[7]||(t[7]=r(" 如果未自动跳转, 请")),e("a",{href:"#",onClick:b(V,["prevent"])},"点击这里"),t[8]||(t[8]=r("跳转。 "))])])):_("",!0)])]))}},$=M(A,[["__scopeId","data-v-c99373cc"]]);export{$ as default};
