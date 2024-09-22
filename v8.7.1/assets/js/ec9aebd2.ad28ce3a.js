"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[3726],{7662:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var r=t(74848),n=t(28453);const i={title:"Release 4.8.2",slug:"/2017/09/15/jhipster-release-4.8.2.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},l="JHipster release 4.8.2",a={id:"releases/2017-09-15-jhipster-release-4.8.2",title:"Release 4.8.2",description:"What's new",source:"@site/docs/releases/2017-09-15-jhipster-release-4.8.2.mdx",sourceDirName:"releases",slug:"/2017/09/15/jhipster-release-4.8.2.html",permalink:"/documentation-archive/v8.7.1/2017/09/15/jhipster-release-4.8.2.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2017-09-15-jhipster-release-4.8.2.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 4.8.2",slug:"/2017/09/15/jhipster-release-4.8.2.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 4.8.1",permalink:"/documentation-archive/v8.7.1/2017/09/13/jhipster-release-4.8.1.html"},next:{title:"Release 4.9.0",permalink:"/documentation-archive/v8.7.1/2017/09/28/jhipster-release-4.9.0.html"}},h={},o=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"jhipster-release-482",children:"JHipster release 4.8.2"})}),"\n",(0,r.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,r.jsxs)(s.p,{children:["This is a patch release for JHipster 4.8, mostly to fix an issue concerning building a Docker image with Gradle (see ticket ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6348",children:"#6348"}),")."]}),"\n",(0,r.jsx)(s.p,{children:"We also updated:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"ng-bootstrap to the latest 1.0.0-beta.4 release"}),"\n",(0,r.jsx)(s.li,{children:"Spring Boot to the latest 1.5.7 release"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,r.jsxs)(s.p,{children:["As always, ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A4.8.2+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,r.jsxs)(s.p,{children:["WARNING ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5966",children:"this has been fixed recently"}),", so if you have trouble with this:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'You can still do a "manual upgrade" (see below)'}),"\n",(0,r.jsxs)(s.li,{children:["If you find anything helpful for us, please send us comments on ticket ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5883",children:"#5883"})]}),"\n",(0,r.jsx)(s.li,{children:"If you have time and want to help, don't hesitate to contribute on this part!"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,r.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,r.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,r.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,r.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,r.jsx)(s.em,{children:"Foo"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,r.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,r.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a bug on our ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,r.jsxs)(s.li,{children:["Post a question on ",(0,r.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Contact ",(0,r.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>a});var r=t(96540);const n={},i=r.createContext(n);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);