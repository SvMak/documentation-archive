"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[8795],{12102:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>h,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=t(74848),i=t(28453);const n={title:"Release 3.7.0",slug:"/2016/09/12/jhipster-release-3.7.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},h="JHipster release 3.7.0",o={id:"releases/2016-09-12-jhipster-release-3.7.0",title:"Release 3.7.0",description:"What's new",source:"@site/docs/releases/2016-09-12-jhipster-release-3.7.0.mdx",sourceDirName:"releases",slug:"/2016/09/12/jhipster-release-3.7.0.html",permalink:"/documentation-archive/v8.7.1/2016/09/12/jhipster-release-3.7.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2016-09-12-jhipster-release-3.7.0.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 3.7.0",slug:"/2016/09/12/jhipster-release-3.7.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 3.6.1",permalink:"/documentation-archive/v8.7.1/2016/08/18/jhipster-release-3.6.1.html"},next:{title:"Release 3.7.1",permalink:"/documentation-archive/v8.7.1/2016/09/16/jhipster-release-3.7.1.html"}},a={},l=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets",id:"closed-tickets",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"jhipster-release-370",children:"JHipster release 3.7.0"})}),"\n",(0,r.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,r.jsxs)(s.p,{children:["This is a very big release with ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A3.7.0+is%3Aclosed",children:"more than 100 closed tickets and PRs"}),"! Here are the most important changes:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Breaking change"})," if you use i18n, because of ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/4076",children:"#4076"}),". As ",(0,r.jsx)(s.code,{children:"translate"})," is an HTML5 element (which is a boolean), we are now using ",(0,r.jsx)(s.code,{children:"data-translate"})," instead. To migrate your application, just do a search and replace from one attribute to the other, in all your HTML files."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Security issue"})," for people using the Twitter social login, without the rights to use the user's email address ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/4024",children:"#4024"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Migration to Undertow"})," is our biggest change - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/4054",children:"#4054"}),". This brings some very good performance enhancements in start up time and memory usage: this is good for everyone, but people doing microservices will benefit from it even more. With this change, JHipster uses nearly as much JBoss code (Undertow, Hibernate, Bean Validation, MapStruct) as Spring code!"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Upgrade to Gradle 3"}),", which is a huge change for people using Gradle - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/3994",children:"#3994"})]}),"\n",(0,r.jsxs)(s.li,{children:["Support for Feign clients using OAuth2 client - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/3662",children:"#3662"})]}),"\n",(0,r.jsxs)(s.li,{children:['New JHipster DevBox, which now uses the new "Bento" box - see ',(0,r.jsx)(s.a,{href:"https://github.com/jhipster/jhipster-devbox/pull/59",children:"jhipster-devbox/#59"})]}),"\n",(0,r.jsx)(s.li,{children:"Upgrade to JHipster Registry v2.5.0, which is an update of the JHipster Registry to use this JHipster v3.7.0 release (with Undertow support, etc)"}),"\n",(0,r.jsxs)(s.li,{children:["Upgrade to JHipster Console v1.3.1 - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/jhipster-console/releases/tag/v1.3.1",children:"JHipster Console v1.3.1 release notes"})]}),"\n",(0,r.jsxs)(s.li,{children:["Update to Spring Cloud Brixton.SR5 - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/4074",children:"#4074"})," ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/4094",children:"#4094"})]}),"\n",(0,r.jsxs)(s.li,{children:["Improvements to our Kubernetes sub-generator - see ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/4049",children:"#4049"})," and ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/4044",children:"#4044"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"closed-tickets",children:"Closed tickets"}),"\n",(0,r.jsxs)(s.p,{children:["As always, ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A3.7.0+is%3Aclosed",children:"you can check all closed tickets here"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,r.jsxs)(s.p,{children:["For an automatic upgrade, starting with JHipster v3.4.0, use the ",(0,r.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster:upgrade\n"})}),"\n",(0,r.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,r.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster --with-entities\n"})}),"\n",(0,r.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,r.jsx)(s.em,{children:"Foo"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"yo jhipster:entity Foo\n"})}),"\n",(0,r.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,r.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add a bug on our ",(0,r.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,r.jsxs)(s.li,{children:["Post a question on ",(0,r.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Contact ",(0,r.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>h,x:()=>o});var r=t(96540);const i={},n=r.createContext(i);function h(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:h(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);