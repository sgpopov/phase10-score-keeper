import{d as m,o as l,a as n,t as u,e as i,f as r}from"./index.a8eaf3ac.js";const d={key:0,for:"first-name",class:"block text-sm font-medium text-gray-700"},p=["type","value","min","step"],g=m({name:"TextField",props:{label:{type:[String,Boolean]},id:null,type:null,modelValue:null,min:null,max:null,step:null},emits:["update:modelValue"],setup(a,{emit:o}){const e=a,s=t=>{o("update:modelValue",t.target.value)};return(t,c)=>(l(),n("div",null,[e.label?(l(),n("label",d,u(e.label),1)):i("",!0),r("input",{type:e.type,name:"first-name",value:e.modelValue,id:"first-name",autocomplete:"given-name",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",min:e.min,step:e.type==="number"?e.step:void 0,onInput:s},null,40,p)]))}});export{g as _};
