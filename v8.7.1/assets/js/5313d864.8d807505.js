"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4325],{3996:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var t=r(74848),n=r(28453);const i={title:"Release 4.6.0",slug:"/2017/07/06/jhipster-release-4.6.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},o="JHipster release 4.6.0",a={id:"releases/2017-07-06-jhipster-release-4.6.0",title:"Release 4.6.0",description:"What's new",source:"@site/docs/releases/2017-07-06-jhipster-release-4.6.0.mdx",sourceDirName:"releases",slug:"/2017/07/06/jhipster-release-4.6.0.html",permalink:"/documentation-archive/v8.7.1/2017/07/06/jhipster-release-4.6.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2017-07-06-jhipster-release-4.6.0.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 4.6.0",slug:"/2017/07/06/jhipster-release-4.6.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 4.5.6",permalink:"/documentation-archive/v8.7.1/2017/06/23/jhipster-release-4.5.6.html"},next:{title:"Release 4.6.1",permalink:"/documentation-archive/v8.7.1/2017/07/10/jhipster-release-4.6.1.html"}},l={},h=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"jhipster-release-460",children:"JHipster release 4.6.0"})}),"\n",(0,t.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Angular 4 is now out of beta"})}),"\n",(0,t.jsx)(s.p,{children:"Our Angular 4 support is now ready for production:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Our production build works fine, both on the client-side (AOT, tree shaking, etc.) and on the server-side (caching, gzipping, etc.). Our tests show huge improvements compared to our previous BETA releases (which were not suitable for production, that's why they were marked BETA). As a result, this new version is a recommended upgrade for anyone already using Angular 2 or Angular 4 with JHipster."}),"\n",(0,t.jsx)(s.li,{children:"Angular 4 is now our default option for JHipster. AngularJS 1 won't disappear soon, but we are not going to improve it in the future, and it will probably slowly die over the next months."}),"\n",(0,t.jsx)(s.li,{children:"Our goal is to support React in the future, and we will focus our development effort on this new option. At some point in the future, this means we should have both Angular and React as stable options. Help is highly welcome on that part, so if you are interested, don't hesitate to join the team on GitHub."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Other important news"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Upgrade to Gradle 4 (see ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5949",children:"#5949"}),"), which has some excellent performance improvements according to our initial tests."]}),"\n",(0,t.jsxs)(s.li,{children:["Farsi language support (see ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5961",children:"#5961"}),"), which means we do support right-to-left languages!"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Minor improvements"})}),"\n",(0,t.jsxs)(s.p,{children:["In total, this release has 72 closed tickets and pull requests, out of which 11 were marked ",(0,t.jsx)(s.code,{children:"invalid"}),". This is an improvement over the past releases, but please if you have a question or a bug, don't spam the development team and follow ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/blob/master/CONTRIBUTING.md",children:"our guidelines"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Deprecation warning (for module developers)"})}),"\n",(0,t.jsxs)(s.p,{children:["The JHipster Module sub generator is deprecated. We now recommend using commonJS or ES6 require/import to get ",(0,t.jsx)(s.code,{children:"generator-base"})," in order to use our Public API. See ",(0,t.jsx)(s.a,{href:"/modules/creating-a-module/",children:"creating a module"})," page for more details."]}),"\n",(0,t.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,t.jsxs)(s.p,{children:["As always, ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A4.6.0+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,t.jsxs)(s.p,{children:["WARNING ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5966",children:"this has been fixed very recently"}),", so if you have trouble with this:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'You can still do a "manual upgrade" (see below)'}),"\n",(0,t.jsxs)(s.li,{children:["If you find anything helpful for us, please send us comments on ticket ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5883",children:"#5883"})]}),"\n",(0,t.jsx)(s.li,{children:"If you have time and want to help, don't hesitate to contribute on this part!"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,t.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,t.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,t.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,t.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,t.jsx)(s.em,{children:"Foo"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,t.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,t.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a bug on our ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,t.jsxs)(s.li,{children:["Post a question on ",(0,t.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Contact ",(0,t.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>a});var t=r(96540);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);