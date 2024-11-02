"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[6595],{84961:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=t(74848),i=t(28453);const n={title:"Release 3.6.1",slug:"/2016/08/18/jhipster-release-3.6.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 3.6.1",o={id:"releases/2016-08-18-jhipster-release-3.6.1",title:"Release 3.6.1",description:"What's new",source:"@site/docs/releases/2016-08-18-jhipster-release-3.6.1.mdx",sourceDirName:"releases",slug:"/2016/08/18/jhipster-release-3.6.1.html",permalink:"/documentation-archive/v8.7.3/2016/08/18/jhipster-release-3.6.1.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2016-08-18-jhipster-release-3.6.1.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 3.6.1",slug:"/2016/08/18/jhipster-release-3.6.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 3.6.0",permalink:"/documentation-archive/v8.7.3/2016/08/17/jhipster-release-3.6.0.html"},next:{title:"Release 3.7.0",permalink:"/documentation-archive/v8.7.3/2016/09/12/jhipster-release-3.7.0.html"}},h={},l=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets",id:"closed-tickets",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"jhipster-release-361",children:"JHipster release 3.6.1"})}),"\n",(0,r.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,r.jsx)(s.p,{children:"This is a minor release, correcting a few bugs from yesterday's 3.6.0 release."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Several primary keys have had their length reduced because of ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/3996",children:"#3996"}),". This caused a bug with older (4.6) versions of MySQL, but those length were too big, so it's a good thing to reduce them if possible. If you have an existing database, you don't have to alter your tables: having a bigger PK doesn't do any harm, so migration is totally optional."]}),"\n",(0,r.jsxs)(s.li,{children:["The Elasticsearch Docker image has been upgraded to v2.3.5, which is its latest version, and which works with Spring Boot 1.4. See ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/4000",children:"#4000"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Kubernetes now uses the same image versions as Docker. See ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/4002",children:"#4002"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"closed-tickets",children:"Closed tickets"}),"\n",(0,r.jsxs)(s.p,{children:["As always, ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A3.6.1+is%3Aclosed",children:"you can check all closed tickets here"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsxs)(s.p,{children:["For an automatic upgrade, starting with JHipster v3.4.0, use the ",(0,r.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster:upgrade\n"})}),"\n",(0,r.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,r.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster --with-entities\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,r.jsx)(s.em,{children:"Foo"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster:entity Foo\n"})}),"\n",(0,r.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,r.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a bug on our ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,r.jsxs)(s.li,{children:["Post a question on ",(0,r.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Contact ",(0,r.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var r=t(96540);const i={},n=r.createContext(i);function a(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);