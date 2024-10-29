"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[5023],{96069:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(74848),n=r(28453);const i={title:"Release 5.7.1",slug:"/2018/12/14/jhipster-release-5.7.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release v5.7.1",o={id:"releases/2018-12-14-jhipster-release-5.7.1",title:"Release 5.7.1",description:"This is a patch release on JHipster 5.7.0, which was released last month, and which includes 140 closed tickets and merged pull requests.",source:"@site/docs/releases/2018-12-14-jhipster-release-5.7.1.mdx",sourceDirName:"releases",slug:"/2018/12/14/jhipster-release-5.7.1.html",permalink:"/documentation-archive/v8.7.2/2018/12/14/jhipster-release-5.7.1.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2018-12-14-jhipster-release-5.7.1.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 5.7.1",slug:"/2018/12/14/jhipster-release-5.7.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 5.7.0",permalink:"/documentation-archive/v8.7.2/2018/11/12/jhipster-release-5.7.0.html"},next:{title:"Release 5.7.2",permalink:"/documentation-archive/v8.7.2/2018/12/21/jhipster-release-5.7.2.html"}},l={},d=[{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"jhipster-release-v571",children:"JHipster release v5.7.1"})}),"\n",(0,t.jsxs)(s.p,{children:["This is a patch release on JHipster 5.7.0, which was released last month, and which includes ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A5.7.1+is%3Aclosed",children:"140 closed tickets and merged pull requests"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Most of those changes are minor bug fixes, typos and formatting errors, and also some libraries upgrades."}),"\n",(0,t.jsxs)(s.p,{children:["The biggest new feature here is our new artwork, which includes our new inclusive images and logos! For more information on this artwork, have a look at our specific ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/jhipster-artwork",children:"JHipster artwork repository"}),'. For your information, the image used on each generated project is now selected from a hash of your project name: as a result, you will get a random image from our "JHipster family", and that image will stay the same when you re-generate your project, unless you modify the project name.']}),"\n",(0,t.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,t.jsxs)(s.p,{children:["As always, ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A5.7.1+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,t.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,t.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,t.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,t.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,t.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,t.jsx)(s.em,{children:"Foo"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,t.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,t.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a bug on our ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,t.jsxs)(s.li,{children:["Post a question on ",(0,t.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Contact ",(0,t.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>o});var t=r(96540);const n={},i=t.createContext(n);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);