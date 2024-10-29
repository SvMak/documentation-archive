"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[44],{27313:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=t(74848),i=t(28453);const n={title:"Release 5.4.0",slug:"/2018/10/03/jhipster-release-5.4.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release v5.4.0",o={id:"releases/2018-10-03-jhipster-release-5.4.0",title:"Release 5.4.0",description:"This release comes with 89 fixed issues and closed pull requests, including 8 bug bounties that were paid thanks to our bug bounty program. If your company benefits from JHipster, wants great visibility in our community, or wants the ability to choose which tickets deserve bug bounties, please consider sponsoring the project.",source:"@site/docs/releases/2018-10-03-jhipster-release-5.4.0.mdx",sourceDirName:"releases",slug:"/2018/10/03/jhipster-release-5.4.0.html",permalink:"/documentation-archive/v8.7.2/2018/10/03/jhipster-release-5.4.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2018-10-03-jhipster-release-5.4.0.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 5.4.0",slug:"/2018/10/03/jhipster-release-5.4.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 5.3.4",permalink:"/documentation-archive/v8.7.2/2018/09/17/jhipster-release-5.3.4.html"},next:{title:"Release 5.4.1",permalink:"/documentation-archive/v8.7.2/2018/10/04/jhipster-release-5.4.1.html"}},h={},l=[{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"jhipster-release-v540",children:"JHipster release v5.4.0"})}),"\n",(0,r.jsxs)(s.p,{children:["This release comes with 89 fixed issues and closed pull requests, including ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A5.4.0+is%3Aclosed+label%3A%24100",children:"8 bug bounties"})," that were paid thanks to our ",(0,r.jsx)(s.a,{href:"https://www.jhipster.tech/bug-bounties/",children:"bug bounty program"}),". If your company benefits from JHipster, wants great visibility in our community, or wants the ability to choose which tickets deserve bug bounties, please consider ",(0,r.jsx)(s.a,{href:"https://www.jhipster.tech/sponsors/",children:"sponsoring the project"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Here are the most important changes for this release:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Migration to ",(0,r.jsx)(s.a,{href:"https://github.com/GoogleContainerTools/jib",children:"Jib"})," for creating Docker images (",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8352",children:"#8352"}),") thanks to ",(0,r.jsx)(s.a,{href:"https://github.com/danielpetisme",children:"Daniel Petisme"}),". This is a huge improvement over the Docker Maven plugin that we were using, but as a result the command to create an image as changed, and that will impact everyone! Please use now ",(0,r.jsx)(s.code,{children:"./mvnw package -Pprod jib:dockerBuild"})," or ",(0,r.jsx)(s.code,{children:"./gradlew -Pprod bootWar jibDockerBuild"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Support for relationships in MongoDB  (",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/7944",children:"#7944"}),"), thanks to ",(0,r.jsx)(s.a,{href:"https://github.com/ivangsa",children:"Iv\xe1n Garc\xeda Sainz-Aja"}),". Relationships work with Angular and React, and also with the JHipster Domain Language (JDL) exactly as they do with an SQL database. This is a very impressive achievement, and probably one of our most requested features!"]}),"\n",(0,r.jsxs)(s.li,{children:["Upgrade to the ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/jhipster-console/releases/tag/v4.0.0",children:"JHipster Console 4.0.0"})," thanks to ",(0,r.jsx)(s.a,{href:"https://github.com/PierreBesson",children:"Pierre Besson"}),". This includes many new features, the most impressive one being that you can now jump directly from the Zipkin UI to Kibana (and back again!), allowing you to easily spot where your microservices spend time."]}),"\n",(0,r.jsxs)(s.li,{children:["Upgrade to Istio 1.x, as well as many improvements in the Istio configuration (",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8321",children:"#8321"}),") thanks to ",(0,r.jsx)(s.a,{href:"https://github.com/srinivasa-vasu",children:"Srinivasa Vasu"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Upgrade to the latest Keycloak (",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8432",children:"#8432"}),") and Traefik (",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8427",children:"#8427"}),") versions."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,r.jsxs)(s.p,{children:["As always, ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A5.4.0+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,r.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,r.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,r.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,r.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,r.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,r.jsx)(s.em,{children:"Foo"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,r.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,r.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a bug on our ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,r.jsxs)(s.li,{children:["Post a question on ",(0,r.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Contact ",(0,r.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var r=t(96540);const i={},n=r.createContext(i);function a(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);