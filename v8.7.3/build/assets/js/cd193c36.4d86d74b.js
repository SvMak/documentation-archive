"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[2553],{6977:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=r(74848),n=r(28453);const i={title:"Release 4.10.0",slug:"/2017/10/17/jhipster-release-4.10.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 4.10.0",o={id:"releases/2017-10-17-jhipster-release-4.10.0",title:"Release 4.10.0",description:"What's new",source:"@site/docs/releases/2017-10-17-jhipster-release-4.10.0.mdx",sourceDirName:"releases",slug:"/2017/10/17/jhipster-release-4.10.0.html",permalink:"/documentation-archive/v8.7.3/2017/10/17/jhipster-release-4.10.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2017-10-17-jhipster-release-4.10.0.mdx",tags:[],version:"current",lastUpdatedAt:1730172698e3,frontMatter:{title:"Release 4.10.0",slug:"/2017/10/17/jhipster-release-4.10.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 4.9.0",permalink:"/documentation-archive/v8.7.3/2017/09/28/jhipster-release-4.9.0.html"},next:{title:"Release 4.10.1",permalink:"/documentation-archive/v8.7.3/2017/10/25/jhipster-release-4.10.1.html"}},l={},h=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Roadmap",id:"roadmap",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"jhipster-release-4100",children:"JHipster release 4.10.0"})}),"\n",(0,t.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["OpenID Connect support is now ready! This means you can now secure your JHipster application using an OpenID Connect provider such as ",(0,t.jsx)(s.a,{href:"http://www.keycloak.org/",children:"Keycloak"})," or ",(0,t.jsx)(s.a,{href:"https://www.okta.com",children:"Okta"}),". This also includes microservices security, using a Zuul proxy (in a JHipster gateway) or using Feign (to connect microservices together). This replaces our older OAuth2 support, as announced in our previous release. This is a huge work, so please be careful when using this first release. For more information, see ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6432",children:"#6432"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/6435",children:"#6435"})," and ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6519",children:"#6519"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:['As the entity sub-generator goes too far for some simple use-cases, we have a new Spring MVC REST controller sub-generator. For consistency reasons, we also renamed our "Service sub-generator" to become the Spring service sub-generator. Please note that we focus on the Spring Boot generators, as on the client-side you can use ',(0,t.jsx)(s.a,{href:"https://github.com/angular/angular-cli",children:"Angular CLI"})," with JHipster. For more information, see ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/6451",children:"#6451"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["After project generation, if Git is installed, the generator now automatically initializes a Git repository and commits the generated application. See ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6453",children:"#6453"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Our recent support for ",(0,t.jsx)(s.a,{href:"https://github.com/zalando/problem-spring-web",children:"Zalando problem-spring-web"})," had been greatly improved, for example with ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6404",children:"#6404"})," and ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/6411",children:"#6411"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,t.jsxs)(s.p,{children:["Two important new features are planned for our next ",(0,t.jsx)(s.code,{children:"4.11.0"})," release:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6086",children:"Couchbase support"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/6509",children:"Use jhipster-dependencies BOM"}),", that should greatly simplifies future application upgrades."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,t.jsxs)(s.p,{children:["As always, ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A4.10.0+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,t.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,t.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,t.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,t.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,t.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,t.jsx)(s.em,{children:"Foo"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,t.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,t.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a bug on our ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,t.jsxs)(s.li,{children:["Post a question on ",(0,t.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Contact ",(0,t.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>o});var t=r(96540);const n={},i=t.createContext(n);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);