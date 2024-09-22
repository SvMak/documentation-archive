"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[2315],{15084:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var t=r(74848),n=r(28453);const i={title:"Release 7.4.1",slug:"/2021/12/03/jhipster-release-7.4.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},l="JHipster release v7.4.1",a={id:"releases/2021-12-03-jhipster-release-7.4.1",title:"Release 7.4.1",description:"This is a patch release with 134 closed tickets and merged pull requests.",source:"@site/docs/releases/2021-12-03-jhipster-release-7.4.1.mdx",sourceDirName:"releases",slug:"/2021/12/03/jhipster-release-7.4.1.html",permalink:"/documentation-archive/v8.7.1/2021/12/03/jhipster-release-7.4.1.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2021-12-03-jhipster-release-7.4.1.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 7.4.1",slug:"/2021/12/03/jhipster-release-7.4.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 7.4.0",permalink:"/documentation-archive/v8.7.1/2021/11/19/jhipster-release-7.4.0.html"},next:{title:"Release 7.5.0",permalink:"/documentation-archive/v8.7.1/2022/01/02/jhipster-release-7.5.0.html"}},d={},h=[{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function o(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"jhipster-release-v741",children:"JHipster release v7.4.1"})}),"\n",(0,t.jsxs)(s.p,{children:["This is a patch release with ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A7.4.1+is%3Aclosed",children:"134 closed tickets and merged pull requests"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The important fixes and improvements:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Force reactive when gateway application type is selected - ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/17093",children:"#17093"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix jhipster entity for vue - ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/17091",children:"#17091"})]}),"\n",(0,t.jsxs)(s.li,{children:["Improvements to microfrontend support - ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/17128",children:"#17128"})]}),"\n",(0,t.jsx)(s.li,{children:"Many libraries upgrades"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,t.jsxs)(s.p,{children:["As always, ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A7.4.1+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,t.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,t.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,t.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,t.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,t.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,t.jsx)(s.em,{children:"Foo"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,t.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,t.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a bug on our ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,t.jsxs)(s.li,{children:["Post a question on ",(0,t.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Contact ",(0,t.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>a});var t=r(96540);const n={},i=t.createContext(n);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);