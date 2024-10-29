"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[9442],{1575:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var i=t(74848),r=t(28453);const n={title:"Release 4.1.1",slug:"/2017/03/23/jhipster-release-4.1.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 4.1.1",l={id:"releases/2017-03-23-jhipster-release-4.1.1",title:"Release 4.1.1",description:"What's new",source:"@site/docs/releases/2017-03-23-jhipster-release-4.1.1.mdx",sourceDirName:"releases",slug:"/2017/03/23/jhipster-release-4.1.1.html",permalink:"/documentation-archive/v8.7.2/2017/03/23/jhipster-release-4.1.1.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2017-03-23-jhipster-release-4.1.1.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 4.1.1",slug:"/2017/03/23/jhipster-release-4.1.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 4.1.0",permalink:"/documentation-archive/v8.7.2/2017/03/20/jhipster-release-4.1.0.html"},next:{title:"JHipster introduces Bitcoin mining (April Fools 2017)",permalink:"/documentation-archive/v8.7.2/2017/04/01/jhipster-introduces-bitcoin-mining.html"}},o={},h=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"jhipster-release-411",children:"JHipster release 4.1.1"})}),"\n",(0,i.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,i.jsx)(s.p,{children:"This is the first patch release of JHipster 4.1.0."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["We have closed 32 issues and pull requests, but please note that ",(0,i.jsx)(s.strong,{children:"more than half"})," of the ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=is%3Aissue+milestone%3A4.1.1+is%3Aclosed",children:"closed tickets are marked invalid"}),". Please, follow our ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/blob/master/CONTRIBUTING.md",children:"guidelines"})," or we will close your tickets: invalid tickets make the whole team lose a lot of time, so if you want new patch releases and new cool features, you need to follow the project rules."]}),"\n",(0,i.jsxs)(s.li,{children:["With this release, the ",(0,i.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," is working again! As this is a small patch release, this is the good moment for everyone to test it! If you have it working (or not!), don't hesitate to tweet it and mention ",(0,i.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The most important bug fix on this release is ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5458",children:"#5458"}),", as this made errors in all applications using OAuth2. Concerning OAuth2, please note that only 0,46% of applications used this option during the last month: there have already been talks to remove this, as it has a big maintenance cost, for very few users. So if you like OAuth2, please help maintaining it!"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,i.jsxs)(s.p,{children:["As always, ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A4.1.1+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,i.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,i.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"yo jhipster:upgrade\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,i.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,i.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,i.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"yo jhipster\n"})}),"\n",(0,i.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"yo jhipster --with-entities\n"})}),"\n",(0,i.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,i.jsx)(s.em,{children:"Foo"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"yo jhipster:entity Foo\n"})}),"\n",(0,i.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,i.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Add a bug on our ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,i.jsxs)(s.li,{children:["Post a question on ",(0,i.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Contact ",(0,i.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var i=t(96540);const r={},n=i.createContext(r);function a(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);