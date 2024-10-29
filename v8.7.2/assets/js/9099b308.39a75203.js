"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[1083],{45026:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var n=s(74848),i=s(28453);const r={title:"Release 0.11.0",slug:"/2014/02/19/jhipster-release-0.11.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 0.11.0",o={id:"releases/2014-02-19-jhipster-release-0.11.0",title:"Release 0.11.0",description:"JHipster gives you Yeoman + Maven + Spring + AngularJS all working together in one handy generator.",source:"@site/docs/releases/2014-02-19-jhipster-release-0.11.0.mdx",sourceDirName:"releases",slug:"/2014/02/19/jhipster-release-0.11.0.html",permalink:"/documentation-archive/v8.7.2/2014/02/19/jhipster-release-0.11.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2014-02-19-jhipster-release-0.11.0.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 0.11.0",slug:"/2014/02/19/jhipster-release-0.11.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 0.10.1",permalink:"/documentation-archive/v8.7.2/2014/02/19/jhipster-release-0.10.1.html"},next:{title:"Release 0.12.0",permalink:"/documentation-archive/v8.7.2/2014/03/27/jhipster-release-0.12.0.html"}},l={},h=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"jhipster-release-0110",children:"JHipster release 0.11.0"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"JHipster gives you Yeoman + Maven + Spring + AngularJS all working together in one handy generator."})}),"\n",(0,n.jsx)(t.h2,{id:"whats-new",children:"What's new"}),"\n",(0,n.jsx)(t.p,{children:"This is the most important version we have done, ever. More than one month of work to give you full hot reloading of your Java code."}),"\n",(0,n.jsx)(t.p,{children:"We do not know of any other solution that goes this far, as we have hot reloading working from the database (the tables are automatically updated) to the JavaScript application!"}),"\n",(0,n.jsx)(t.p,{children:"Hot reload is specifically impressive as you can:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Add or modify any Spring bean (JHipster handles autowiring, aspects, caching... all automatically!)"}),"\n",(0,n.jsx)(t.li,{children:"Add or modify Spring Data JPA repositories or Spring MVC REST endpoints"}),"\n",(0,n.jsx)(t.li,{children:"Add new JPA entities (Hibernate is updated, and we even generate the Liquibase changeset automatically, and update the database accordingly!)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"All those are possible thanks to a lot of very complex code that is generated inside your application: in the future, we will probably release this as a separate library."}),"\n",(0,n.jsx)(t.p,{children:"This version also comes with some less important changes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Many improvements on the Metrics page"}),"\n",(0,n.jsx)(t.li,{children:"All Grunt libraries are now fixed, as we had to many issues with broken JavaScript libraries. This is the same thing we have done with Bower in the previous release"}),"\n",(0,n.jsx)(t.li,{children:'We have switched from HSQLDB to H2, as it provides a nice Web console, available with the "/console" URL of your application. This allows you to check that hot reload really updated your database!'}),"\n",(0,n.jsx)(t.li,{children:"Several bugfixes, most noticeably in the Atmosphere code"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,n.jsx)(t.p,{children:"Update your version of JHipster with:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,n.jsx)(t.p,{children:"And then you can update your project when you run again"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"yo jhipster\n"})}),"\n",(0,n.jsx)(t.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,n.jsx)(t.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Contact ",(0,n.jsx)(t.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n",(0,n.jsxs)(t.li,{children:["Add a bug on our ",(0,n.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,n.jsxs)(t.li,{children:["Post a question on ",(0,n.jsx)(t.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);