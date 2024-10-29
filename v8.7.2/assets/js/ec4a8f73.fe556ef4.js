"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[5230],{16005:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var r=t(74848),n=t(28453);const i={title:"Release 4.14.0",slug:"/2018/01/30/jhipster-release-4.14.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},l="JHipster release 4.14.0",a={id:"releases/2018-01-30-jhipster-release-4.14.0",title:"Release 4.14.0",description:"What's new",source:"@site/docs/releases/2018-01-30-jhipster-release-4.14.0.mdx",sourceDirName:"releases",slug:"/2018/01/30/jhipster-release-4.14.0.html",permalink:"/documentation-archive/v8.7.2/2018/01/30/jhipster-release-4.14.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2018-01-30-jhipster-release-4.14.0.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 4.14.0",slug:"/2018/01/30/jhipster-release-4.14.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 4.13.3",permalink:"/documentation-archive/v8.7.2/2018/01/09/jhipster-release-4.13.3.html"},next:{title:"Release 4.14.1",permalink:"/documentation-archive/v8.7.2/2018/02/27/jhipster-release-4.14.1.html"}},o={},h=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"jhipster-release-4140",children:"JHipster release 4.14.0"})}),"\n",(0,r.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,r.jsx)(s.p,{children:"The big news is that this is the last 4.x release from the master branch. Starting now, our focus will be JHipster 5, and JHipster 4 will be in maintenance mode: we will do patches if necessary, but the main development work will be on JHipster 5."}),"\n",(0,r.jsx)(s.p,{children:'For the record, JHipster 5 will focus on Spring Boot 2 and on React. Angular will still be a first-class citizen, but AngularJS will be excluded from the main project (you will still be able to use AngularJS as an external "blueprint", which is a new system that will be published with JHipster 5).'}),"\n",(0,r.jsx)(s.p,{children:"Here are the highlights of this release:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Upgrade to Spring Security 4.2.4 to fix ",(0,r.jsx)(s.a,{href:"http://spring.io/blog/2018/01/30/cve-2017-8030-spring-security-5-0-1-4-2-4-4-1-5-released",children:"CVE-2017-8030"})," - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/7059",children:"#7059"})]}),"\n",(0,r.jsxs)(s.li,{children:["Migrate to the new HttpClientModule from Angular 4.3 - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6281",children:"#6281"})]}),"\n",(0,r.jsxs)(s.li,{children:["Upgrade to Angular 5.2 and Bootstrap 4.0.0 - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/7005",children:"#7005"})]}),"\n",(0,r.jsxs)(s.li,{children:["Upgrade to Angular CLI to 1.6.6 - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/7052",children:"#7052"})]}),"\n",(0,r.jsxs)(s.li,{children:["Heroku deployments can now be made directly through Git - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/7045",children:"#7045"})]}),"\n",(0,r.jsxs)(s.li,{children:['React support is still "experimental", so you need to run ',(0,r.jsx)(s.code,{children:"jhipster --experimental"})," to enable React support. This is not complete yet, but we are quickly moving forward, so you can already have a good taste of JHipster 5 here. And if you're a React expert, don't hesitate to contribute!"]}),"\n",(0,r.jsxs)(s.li,{children:["Generate i18n mouseover/tooltip help from JDL comments - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6797",children:"#6797"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,r.jsxs)(s.p,{children:["As always, ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A4.14.0+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,r.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,r.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,r.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,r.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,r.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,r.jsx)(s.em,{children:"Foo"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,r.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,r.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a bug on our ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,r.jsxs)(s.li,{children:["Post a question on ",(0,r.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Contact ",(0,r.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>a});var r=t(96540);const n={},i=r.createContext(n);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);