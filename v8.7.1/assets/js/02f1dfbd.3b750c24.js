"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[9554],{4214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=n(74848),s=n(28453);const r={title:"Release 2.5.0",slug:"/2015/03/01/jhipster-release-2.5.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 2.5.0",o={id:"releases/2015-03-01-jhipster-release-2.5.0",title:"Release 2.5.0",description:"JHipster gives you Spring Boot + AngularJS working together in one handy Yeoman generator.",source:"@site/docs/releases/2015-03-01-jhipster-release-2.5.0.mdx",sourceDirName:"releases",slug:"/2015/03/01/jhipster-release-2.5.0.html",permalink:"/documentation-archive/v8.7.1/2015/03/01/jhipster-release-2.5.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2015-03-01-jhipster-release-2.5.0.mdx",tags:[],version:"current",lastUpdatedAt:1725972057e3,frontMatter:{title:"Release 2.5.0",slug:"/2015/03/01/jhipster-release-2.5.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 2.4.0",permalink:"/documentation-archive/v8.7.1/2015/02/24/jhipster-release-2.4.0.html"},next:{title:"Release 2.5.1",permalink:"/documentation-archive/v8.7.1/2015/03/03/jhipster-release-2.5.1.html"}},l={},h=[{value:"Documentation",id:"documentation",level:2},{value:"What&#39;s new",id:"whats-new",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"jhipster-release-250",children:"JHipster release 2.5.0"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"JHipster gives you Spring Boot + AngularJS working together in one handy Yeoman generator."})}),"\n",(0,i.jsx)(t.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsxs)(t.p,{children:["Looking for the (old) JHipster v2.x documentation? It's ",(0,i.jsx)(t.a,{href:"https://www.jhipster.tech/documentation-archive/",children:"Here"}),"!"]}),"\n",(0,i.jsx)(t.h2,{id:"whats-new",children:"What's new"}),"\n",(0,i.jsxs)(t.p,{children:["The big news in this release is our ",(0,i.jsx)(t.a,{href:"http://gatling.io/",children:"Gatling"})," support, for doing performance tests of the generated entities!"]}),"\n",(0,i.jsx)(t.p,{children:"Our REST interfaces have also been improved:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The generated entities now use the PUT verb (",(0,i.jsx)(t.strong,{children:"warning"})," this could break some of your existing front-end code)"]}),"\n",(0,i.jsx)(t.li,{children:'The POST verb better follow HATEOAS principles and sends back the "location" header, giving back the URL of the generated entity'}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'We are also going to improve the "GET" verb and add pagination in a future release: of course when you do performance tests with Gatling, not having pagination is an issue! If you have some feedback on using pagination, thank you for sharing it! Here is our current roadmap:'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["On the backend, follow the principles used by the ",(0,i.jsx)(t.a,{href:"https://developer.github.com/v3/#pagination",children:"GitHub API"}),". You can have more information on doing pagination on a REST API on this ",(0,i.jsx)(t.a,{href:"http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api",children:"best practices document"})]}),"\n",(0,i.jsx)(t.li,{children:"Maybe we will use the pagination support from Spring Data, but we are not sure about this yet"}),"\n",(0,i.jsxs)(t.li,{children:["On the front-end, we will add ",(0,i.jsx)(t.a,{href:"http://bazalt-cms.com/ng-table/",children:"ngTable"})," support"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"User"})," entity, which is a special entity handled by JHipster, has been modified so you can do many-to-one relationships to it:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'This is a common requirement to have some entities linked to the user. For example, many "orders" could be linked to one "user".'}),"\n",(0,i.jsxs)(t.li,{children:["As usually you will want to restrict those entities to the current user, we also provide a helper Repository method, called ",(0,i.jsx)(t.em,{children:"findAllForCurrentUser()"})," which will be automatically generated"]}),"\n",(0,i.jsxs)(t.li,{children:["If you have a look at this method, you will see that we use the Spring Security Principal in a Spring Data JPA query. This is because we added ",(0,i.jsx)(t.a,{href:"https://spring.io/blog/2014/07/15/spel-support-in-spring-data-jpa-query-definitions",children:"SpEL support in Spring Data JPA"}),"!"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["And as always, ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A2.5.0+is%3Aclosed",children:"you can check all the closed tickets here"})}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,i.jsx)(t.p,{children:"Update your version of JHipster with:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,i.jsx)(t.p,{children:"And then you can update your project when you run again"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yo jhipster\n"})}),"\n",(0,i.jsx)(t.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,i.jsx)(t.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Contact ",(0,i.jsx)(t.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n",(0,i.jsxs)(t.li,{children:["Add a bug on our ",(0,i.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,i.jsxs)(t.li,{children:["Post a question on ",(0,i.jsx)(t.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);