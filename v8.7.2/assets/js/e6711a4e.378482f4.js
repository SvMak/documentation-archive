"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[81],{76891:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>R,contentTitle:()=>b,default:()=>w,frontMatter:()=>v,metadata:()=>N,toc:()=>g});var a=t(74848),i=t(28453),l=(t(96540),t(34164)),r=t(95068),n=t(65965),c=t(11470),d=t(19365),o=t(28774),m=t(17613),h=t(15867);const u={card:"card_HhZo",cardDescription:"cardDescription_Mc_5"};function x(e){let{item:s}=e;return(0,a.jsx)(o.A,{className:(0,l.A)("card",u.card),to:s.href,children:(0,a.jsx)("div",{className:"card__header",children:(0,a.jsxs)("div",{className:"avatar",children:[(0,a.jsx)("div",{children:(0,a.jsx)(m.sq,{className:"avatar__photo"})}),(0,a.jsxs)("div",{className:"avatar__intro",children:[(0,a.jsx)("div",{className:"avatar__name",children:s.label}),(0,a.jsxs)("small",{className:(0,l.A)("avatar__subtitle",u.cardDescription),children:[(0,a.jsx)(h.Ml5,{}),s.date??""]})]})]})})})}const p={sectionList:"sectionList_slGM"};function j(e){let{items:s,limit:t=12}=e;return(0,a.jsx)("section",{className:p.section,children:(0,a.jsxs)(c.A,{lazy:!0,children:[(0,a.jsx)(d.A,{value:"latest-releases",label:"Latest Releases",default:!0,children:(0,a.jsx)("ul",{className:p.sectionList,children:s.slice(0,t).map(((e,s)=>(0,a.jsx)("li",{children:(0,a.jsx)(x,{item:e})},`release-${s}`)))})}),(0,a.jsx)(d.A,{value:"all-releases",label:"All Releases",children:(0,a.jsx)("ul",{className:p.sectionList,children:s.map(((e,s)=>(0,a.jsx)("li",{children:(0,a.jsx)(x,{item:e})},`release-${s}`)))})})]})})}function _(e){let{className:s,isReleases:t}=e;const i=(0,r.$S)();return(0,a.jsx)(f,{items:i.items,className:s,isReleases:t})}function f(e){const{items:s,className:t,isReleases:i=!1}=e;if(!s)return(0,a.jsx)(_,{...e});const c=i?function(e){return e.filter((e=>"releases/index"!==e.docId)).map((e=>{const s=e.docId.split("releases/")[1].slice(0,10);return{...e,date:s}})).sort(((e,s)=>e.date>s.date?-1:1))}(s):s,d=(0,r.d1)(c);return(0,a.jsx)(a.Fragment,{children:i?(0,a.jsx)(j,{items:d}):(0,a.jsx)("section",{className:(0,l.A)("row",t),children:d.map(((e,s)=>(0,a.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,a.jsx)(n.A,{item:e})},s)))})})}const v={title:"Release notes",description:"JHipster releases notes - latest updates, bug fixes",sidebar_class_name:"hidden",hide_table_of_contents:!0},b=void 0,N={id:"releases/index",title:"Release notes",description:"JHipster releases notes - latest updates, bug fixes",source:"@site/docs/releases/index.mdx",sourceDirName:"releases",slug:"/releases/",permalink:"/documentation-archive/v8.7.2/releases/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/index.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release notes",description:"JHipster releases notes - latest updates, bug fixes",sidebar_class_name:"hidden",hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Showcase of JHipster apps",permalink:"/documentation-archive/v8.7.2/showcase/"},next:{title:"Release 0.0.28",permalink:"/documentation-archive/v8.7.2/2013/11/29/jhipster-release-0.0.28.html"}},R={},g=[];function A(e){return(0,a.jsx)(f,{isReleases:!0})}function w(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(A,{...e})}):A()}}}]);