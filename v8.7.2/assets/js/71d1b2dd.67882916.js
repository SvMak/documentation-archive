"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4942],{83602:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=r(74848),n=r(28453);const i={title:"Release 4.6.1",slug:"/2017/07/10/jhipster-release-4.6.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 4.6.1",l={id:"releases/2017-07-10-jhipster-release-4.6.1",title:"Release 4.6.1",description:"What's new",source:"@site/docs/releases/2017-07-10-jhipster-release-4.6.1.mdx",sourceDirName:"releases",slug:"/2017/07/10/jhipster-release-4.6.1.html",permalink:"/documentation-archive/v8.7.2/2017/07/10/jhipster-release-4.6.1.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2017-07-10-jhipster-release-4.6.1.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 4.6.1",slug:"/2017/07/10/jhipster-release-4.6.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 4.6.0",permalink:"/documentation-archive/v8.7.2/2017/07/06/jhipster-release-4.6.0.html"},next:{title:"Release 4.6.2",permalink:"/documentation-archive/v8.7.2/2017/07/19/jhipster-release-4.6.2.html"}},h={},o=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"jhipster-release-461",children:"JHipster release 4.6.1"})}),"\n",(0,t.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,t.jsx)(s.p,{children:"This is the first patch release for JHipster v4.6.0. This is a recommended upgrade for everyone, here are the most important changes:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Upgrade to Webpack 3 - this gives an enormous boost in performance, and this is why this is a recommended upgrade. See ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/6049",children:"#6049"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Fix the Gradle build on Windows - see ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6064",children:"#6064"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Fix Angular 4 deployment on Heroku - see ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6059",children:"#6059"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,t.jsxs)(s.p,{children:["As always, ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A4.6.1+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,t.jsxs)(s.p,{children:["WARNING ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5966",children:"this has been fixed very recently"}),", so if you have trouble with this:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'You can still do a "manual upgrade" (see below)'}),"\n",(0,t.jsxs)(s.li,{children:["If you find anything helpful for us, please send us comments on ticket ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5883",children:"#5883"})]}),"\n",(0,t.jsx)(s.li,{children:"If you have time and want to help, don't hesitate to contribute on this part!"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,t.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,t.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,t.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,t.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,t.jsx)(s.em,{children:"Foo"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,t.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,t.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a bug on our ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,t.jsxs)(s.li,{children:["Post a question on ",(0,t.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Contact ",(0,t.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>l});var t=r(96540);const n={},i=t.createContext(n);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);