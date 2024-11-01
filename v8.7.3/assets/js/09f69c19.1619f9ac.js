"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[2624],{5526:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(74848),n=s(28453);const i={title:"Release 1.6.0",slug:"/2014/10/31/jhipster-release-1.6.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 1.6.0",o={id:"releases/2014-10-31-jhipster-release-1.6.0",title:"Release 1.6.0",description:"JHipster gives you Spring Boot + AngularJS working together in one handy Yeoman generator.",source:"@site/docs/releases/2014-10-31-jhipster-release-1.6.0.mdx",sourceDirName:"releases",slug:"/2014/10/31/jhipster-release-1.6.0.html",permalink:"/documentation-archive/v8.7.3/2014/10/31/jhipster-release-1.6.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2014-10-31-jhipster-release-1.6.0.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 1.6.0",slug:"/2014/10/31/jhipster-release-1.6.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 1.5.0",permalink:"/documentation-archive/v8.7.3/2014/10/29/jhipster-release-1.5.0.html"},next:{title:"Release 1.7.0",permalink:"/documentation-archive/v8.7.3/2014/11/05/jhipster-release-1.7.0.html"}},h={},l=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"jhipster-release-160",children:"JHipster release 1.6.0"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"JHipster gives you Spring Boot + AngularJS working together in one handy Yeoman generator."})}),"\n",(0,r.jsx)(t.h2,{id:"whats-new",children:"What's new"}),"\n",(0,r.jsx)(t.p,{children:"Lots of exciting stuff in the new release! Here are the most important improvements:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Integration tests are much, much quicker (on our specific test suite, we went from ",(0,r.jsx)(t.strong,{children:"1 minutes 45 seconds"})," to ",(0,r.jsx)(t.strong,{children:"11 seconds"}),"! Yes, that's faster). They now reuse the Spring application context (see the ",(0,r.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/commit/c825bf0ec6a05bffa1925fff9d2208d0cb4c13bc",children:"related commit"}),") instead of creating a new one."]}),"\n",(0,r.jsxs)(t.li,{children:["WARNING, ",(0,r.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/681",children:"#681"})," is a small change but has a lot of consequences. It gives us much better security, but as we have changed the algorithm, it means that if you upgrade an existing application your users will need to have new passwords."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/702",children:"#702"}),' is an improvement over one-to-many and many-to-many relationships to handle entities with some upper case letters in their names (like "priceList")']}),"\n",(0,r.jsx)(t.li,{children:"We upgraded AngularJS and Angular Translate to more recent versions"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/701",children:"#701"})," was causing compilation errors when using OAuth2 with an SQL database"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["And as always, ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A1.6.0+is%3Aclosed",children:"you can check all the closed tickets here"})}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsx)(t.p,{children:"Update your version of JHipster with:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,r.jsx)(t.p,{children:"And then you can update your project when you run again"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"yo jhipster\n"})}),"\n",(0,r.jsx)(t.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,r.jsx)(t.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Contact ",(0,r.jsx)(t.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n",(0,r.jsxs)(t.li,{children:["Add a bug on our ",(0,r.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,r.jsxs)(t.li,{children:["Post a question on ",(0,r.jsx)(t.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var r=s(96540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);