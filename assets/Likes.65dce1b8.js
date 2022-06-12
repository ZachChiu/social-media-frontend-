import{T as P}from"./Title.292c2a98.js";import{I as b,d as y,L as w,E as I}from"./EmptyCard.9f4bcfe7.js";import{_ as v,e as T,u as E,f as _,r as f,o as i,c as d,b as l,a as x,n as B,t as Y,p as j,q as D,g as M,x as O,F as g,h as C,m as h}from"./index.531b88c4.js";import{p as L}from"./posts.525b409d.js";import"./Avatar.57711b14.js";const S={components:{Info:b},props:{post:{type:Object,default(){return{}}}},setup(o,{emit:e}){const s=T(),t=E(),m=_(()=>s.getters["users/user"]),n=_(()=>o.post.likes.includes(m.value._id)),r=()=>{t.push({name:"personal-wall",params:{userId:o.post.user._id}})},a=_(()=>`\u767C\u6587\u6642\u9593\uFF1A ${y(o.post.createdAt).format("YYYY/MM/DD mm:ss")}`);return{dayjs:y,hasLikePost:n,subText:a,onClickPersonal:r,toggleLike:()=>{o.post.isLoading||(n.value?e("unlike-post",o.post._id):e("like-post",o.post._id))},onClick2Post:()=>{t.push({name:"post",params:{postId:o.post._id}})}}}},F={class:"card p-4 flex items-end justify-between"},N={class:"flex items-center"},V={class:"flex items-center text-center"},q={key:0,class:"fa-solid fa-spinner text-primary animate-spin-slow text-xl"},z={key:1,class:"fa-regular fa-thumbs-up text-xl"},A={class:"text-sm font-bold"},R=l("i",{class:"fa-regular fa-circle-right text-xl"},null,-1),U=l("p",{class:"text-sm font-bold"},"\u67E5\u770B",-1),G=[R,U];function H(o,e,s,t,m,n){const r=f("Info");return i(),d("div",F,[l("div",N,[x(r,{username:s.post.user.name,avatar:s.post.user.photo,"sub-text":t.subText,onOnClickPersonal:t.onClickPersonal},null,8,["username","avatar","sub-text","onOnClickPersonal"])]),l("div",V,[l("div",{class:B(["mr-5 md:mr-9 cursor-pointer hover:text-gray flex flex-col items-center",t.hasLikePost?"text-primary":"text-secondary"]),onClick:e[0]||(e[0]=(...a)=>t.toggleLike&&t.toggleLike(...a))},[s.post.isLoading?(i(),d("i",q)):(i(),d("i",z)),l("p",A,Y(t.hasLikePost?"\u53D6\u6D88":"\u6309\u8B9A"),1)],2),l("div",{class:"cursor-pointer text-dark hover:text-gray",onClick:e[1]||(e[1]=(...a)=>t.onClick2Post&&t.onClick2Post(...a))},G)])])}var J=v(S,[["render",H]]);const K={components:{Title:P,LikesCard:J,LoadingCard:w,EmptyCard:I},setup(){const o=j();let e=D(!1),s=M([]);const t=async()=>{try{e.value=!0;const n=await L.getLikeList();s.push(...n)}catch{o.error("\u8F09\u5165\u6309\u8B9A\u8CBC\u6587\u5931\u6557\uFF0C\u8ACB\u91CD\u65B0\u6574\u7406")}finally{e.value=!1}},m=async(n,r)=>{let a={};const c=s.findIndex(k=>k._id===n);s[c].isLoading=!0;try{r==="like"?a=await L.likePost(n):a=await L.unlikePost(n),s[c].likes=a.data.likes}catch{o.error(r==="like"?"\u53D6\u6D88\u6309\u8B9A\u5931\u6557":"\u6309\u8B9A\u5931\u6557")}finally{s[c].isLoading=!1}};return O(()=>{t()}),{likeList:s,isLoading:e,toggleLike:m}}};function Q(o,e,s,t,m,n){const r=f("Title"),a=f("LoadingCard"),c=f("EmptyCard"),k=f("LikesCard");return i(),d(g,null,[x(r,{title:"\u6211\u6309\u8B9A\u7684\u8CBC\u6587"}),t.isLoading?(i(),d(g,{key:0},C(3,(p,u)=>x(a,{key:u,class:"mb-4 last:mb-0"})),64)):t.likeList.length===0?(i(),h(c,{key:1,state:"\u7121\u6309\u8B9A\u4EFB\u4F55\u8CBC\u6587"})):(i(!0),d(g,{key:2},C(t.likeList,p=>(i(),h(k,{key:p._id,post:p,class:"mb-4 last:mb-0",onUnlikePost:e[0]||(e[0]=u=>t.toggleLike(u,"unlike")),onLikePost:e[1]||(e[1]=u=>t.toggleLike(u,"like"))},null,8,["post"]))),128))],64)}var et=v(K,[["render",Q]]);export{et as default};
