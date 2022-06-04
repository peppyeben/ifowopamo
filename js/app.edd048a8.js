(function(){"use strict";var e={7785:function(e,n,t){var o=t(9242),r=t(3396);function a(e,n){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(t)}var u=t(89);const i={},l=(0,u.Z)(i,[["render",a]]);var s=l,c=t(678),f=t(7139);const p={class:"home w-1/2 mx-auto"},d={class:"m-auto flex flex-row justify-between p-2"},m=(0,r._)("span",{class:"text-white"},"Speed Date",-1),v=[m],w={class:"rounded bg-red-700 p-2",disabled:""},y={class:"text-white"},b={class:"m-auto flex flex-col p-2"},h=(0,r._)("span",{class:"text-white"},"Invest",-1),g=[h],x={key:0,class:"m-auto flex flex-col p-2"},_={key:1,class:"m-auto flex flex-col p-2"},O={class:"w-full text-left flex flex-col",id:"method"},k={scope:"row"},D={scope:"row"},I={scope:"row"};function j(e,n,t,a,u,i){return(0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("section",d,[(0,r._)("button",{class:"rounded bg-green-700 p-2",onClick:n[0]||(n[0]=(...e)=>a.increaseDay&&a.increaseDay(...e))},v),(0,r._)("button",w,[(0,r._)("span",y,(0,f.zw)(a.day),1)])]),(0,r._)("section",b,[(0,r.wy)((0,r._)("input",{type:"text",class:"appearance-none border border-b px-3 py-2",placeholder:"Enter a name","onUpdate:modelValue":n[1]||(n[1]=e=>a.username=e)},null,512),[[o.nr,a.username]]),(0,r.wy)((0,r._)("input",{type:"number",class:"appearance-none border border-b px-3 py-2",placeholder:"Enter amount to save","onUpdate:modelValue":n[2]||(n[2]=e=>a.amount=e)},null,512),[[o.nr,a.amount]]),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":n[3]||(n[3]=e=>a.selVal=e),class:"my-1",onChange:n[4]||(n[4]=(...e)=>a.showInfo&&a.showInfo(...e))},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.tiers,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.ROI},(0,f.zw)(e.tier),1)))),128))],544),[[o.bM,a.selVal]]),(0,r._)("button",{class:"rounded bg-red-400 p-2",onClick:n[5]||(n[5]=(...e)=>a.verify&&a.verify(...e))},g)]),null!=a.selVal?((0,r.wg)(),(0,r.iD)("section",x," Amount - "+(0,f.zw)(a.showInfo().money)+": "+(0,f.zw)(a.showInfo().ROI)+"% per week ",1)):(0,r.kq)("",!0),a.riders.length>0?((0,r.wg)(),(0,r.iD)("section",_,[(0,r._)("table",O,[(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.riders,((e,n)=>((0,r.wg)(),(0,r.iD)("tr",{class:"flex justify-between",key:n},[(0,r._)("td",k,(0,f.zw)(e.name),1),(0,r._)("td",D,(0,f.zw)(e.daySaved),1),(0,r._)("td",I,(0,f.zw)(e.tier),1)])))),128))])])])):(0,r.kq)("",!0)])}var H=t(65),V=t(4870),z={name:"HomeView",setup(){const e=(0,H.oR)(),n=(0,V.iH)(null),t=(0,V.iH)(null),o=(0,V.iH)(null),a=(0,V.iH)([]),u=(0,V.iH)(0),i=(0,V.iH)();function l(){if(null!=t.value&&null!=o.value.trim()){let e=Array.from(n.value).filter((e=>e.tier==t.value));if(i.value!=e[0].money)alert(`amount must be ${e[0].money}`);else{const e={name:o.value.trim(),tier:t.value,daySaved:u.value,amountSaved:u.value};a.value.push(e)}}}function s(){return Array.from(n.value).filter((e=>e.tier==t.value))[0]}function c(){u.value+=1}return(0,r.bv)((()=>{n.value=e.state.tiers})),{tiers:n,verify:l,selVal:t,username:o,showInfo:s,riders:a,day:u,increaseDay:c,amount:i}}};const R=(0,u.Z)(z,[["render",j]]);var C=R;const S=[{path:"/",name:"home",component:C}],A=(0,c.p7)({history:(0,c.PO)("/ifowopamo/"),routes:S});var E=A,M=(0,H.MT)({state:{tiers:[{tier:"tier1",money:1e4,ROI:7},{tier:"tier2",money:2e4,ROI:12},{tier:"tier3",money:3e4,ROI:25}]},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(s).use(M).use(E).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var u=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(i=!1,a<u&&(u=a));if(i){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,u=o[0],i=o[1],l=o[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var c=l(t)}for(n&&n(o);s<u.length;s++)a=u[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},o=self["webpackChunkifowopamo"]=self["webpackChunkifowopamo"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7785)}));o=t.O(o)})();
//# sourceMappingURL=app.edd048a8.js.map