import{_,u as x,e as h,f as u,r as i,o as a,c,b as l,F as b,h as g,m as y,i as v,n as k,t as $,d as C,a as p}from"./index.531b88c4.js";import{H as S}from"./Header.4875a826.js";import{A as B}from"./Avatar.57711b14.js";const N={components:{Avatar:B},setup(){const o=x(),r=h(),n=u(()=>r.getters["users/user"]),t=u(()=>r.getters["users/userPhoto"]),d=u(()=>{var e;return[{img:t==null?void 0:t.value,value:"personal-wall",text:(e=n.value)==null?void 0:e.name},{icon:"fa-regular fa-bell",value:"following",text:"\u8FFD\u8E64\u540D\u55AE"},{icon:"fa-regular fa-thumbs-up",value:"likes",text:"\u6211\u6309\u8B9A\u7684\u8CBC\u6587"}]});return{router:o,navigations:d,user:n,userPhoto:t,onClickSideBar:e=>{switch(e){case"personal-wall":o.push({name:e,params:{userId:n.value._id}});break;default:o.push({name:e});break}}}}},V={class:"card py-8 px-6 w-full md:w-[280px] lg:w-[310px] font-bold sticky top-[100px] hidden md:block"},A={class:"transition"},H=["onClick"],R={class:"group-hover:text-primary transition"};function j(o,r,n,t,d,m){const e=i("Avatar");return a(),c("div",V,[l("button",{class:"btn-primary mb-6",onClick:r[0]||(r[0]=s=>t.router.push({name:"create-post"}))}," \u5F35\u8CBC\u52D5\u614B "),l("ul",A,[(a(!0),c(b,null,g(t.navigations,s=>(a(),c("li",{key:s.value,class:"group flex items-center mb-[22px] last:mb-0 cursor-pointer",onClick:f=>t.onClickSideBar(s.value)},[s.img?(a(),y(e,{key:0,avatar:s.img,size:"50"},null,8,["avatar"])):v("",!0),s.icon?(a(),c("i",{key:1,class:k(["w-[50px] h-[50px] transition group-hover:bg-primary group-hover:text-white mr-4 bg-info border border-gray rounded-full text-xl flex items-center justify-center",s.icon])},null,2)):v("",!0),l("span",R,$(s.text),1)],8,H))),128))])])}var z=_(N,[["render",j]]);const F={setup(){const o=x(),r=C(),n=u(()=>[{icon:"fa-solid fa-house",value:"posts-wall"},{icon:"fa-solid fa-bell",value:"following"},{icon:"fa-solid fa-thumbs-up",value:"likes"},{icon:"fa-solid fa-plus",value:"create-post"}]);return{router:o,route:r,navigations:n}}},L={class:"card py-2 px-6 w-full md:w-[280px] lg:w-[310px] font-bold sticky bottom-0 rounded-none"},D={class:"transition flex justify-center"},E=["onClick"];function I(o,r,n,t,d,m){return a(),c("div",L,[l("ul",D,[(a(!0),c(b,null,g(t.navigations,e=>(a(),c("li",{key:e.value,class:"flex items-center cursor-pointer mr-4 last:mr-0",onClick:s=>t.router.push({name:e.value})},[l("i",{class:k(["w-[50px] h-[50px] transition hover:bg-primary hover:text-white bg-info border border-gray rounded-full text-xl flex items-center justify-center",[e.icon,{"bg-primary text-white":t.route.name===e.value}]])},null,2)],8,E))),128))])])}var q=_(F,[["render",I]]);const G={components:{Header:S,Sidebar:z,Navigation:q},setup(){const o=h();return{user:u(()=>o.getters["users/user"])}}},J={class:"layout md:pb-10"},K={class:"h-[calc(100vh-128px)] overflow-auto md:h-auto md:overflow-visible"},M={class:"container flex items-start pt-10 pb-10 md:pb-0"},O={class:"flex-1 mr-0 md:mr-5"};function P(o,r,n,t,d,m){const e=i("Header"),s=i("RouterView"),f=i("Sidebar"),w=i("Navigation");return a(),c("div",J,[p(e),l("div",K,[l("div",M,[l("div",O,[p(s)]),p(f)])]),p(w,{class:"block md:hidden"})])}var W=_(G,[["render",P]]);export{W as default};
