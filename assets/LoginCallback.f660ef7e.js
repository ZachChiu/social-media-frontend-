import{_ as n,p as c,e as u,u as i,d as p,o as l,c as m}from"./index.e9d10c37.js";const d={setup(){const t=c(),e=u(),s=i(),o=p(),{token:a}=o.query;async function r(){e.commit("env/setIsPageLoading",!0);try{e.commit("users/setJWT",{jwt:a}),await e.dispatch("users/getUser"),s.push({name:"posts-wall"})}catch{t.error("\u767B\u5165\u5931\u6557\uFF0C\u8ACB\u91CD\u65B0\u767B\u5165"),s.push({name:"sign-in"})}finally{e.commit("env/setIsPageLoading",!1)}}return r(),{}}};function f(t,e,s,o,a,r){return l(),m("div")}var h=n(d,[["render",f]]);export{h as default};
