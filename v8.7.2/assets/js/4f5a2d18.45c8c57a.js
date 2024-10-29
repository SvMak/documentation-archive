"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[2310],{23970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(74848),i=n(28453);const r={title:"Release 2.23.1",slug:"/2015/11/10/jhipster-release-2.23.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},o="JHipster release 2.23.1",a={id:"releases/2015-11-10-jhipster-release-2.23.1",title:"Release 2.23.1",description:"JHipster gives you Spring Boot + AngularJS working together in one handy Yeoman generator.",source:"@site/docs/releases/2015-11-10-jhipster-release-2.23.1.mdx",sourceDirName:"releases",slug:"/2015/11/10/jhipster-release-2.23.1.html",permalink:"/documentation-archive/v8.7.2/2015/11/10/jhipster-release-2.23.1.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2015-11-10-jhipster-release-2.23.1.mdx",tags:[],version:"current",lastUpdatedAt:1725972057e3,frontMatter:{title:"Release 2.23.1",slug:"/2015/11/10/jhipster-release-2.23.1.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 2.23.0",permalink:"/documentation-archive/v8.7.2/2015/10/23/jhipster-release-2.23.0.html"},next:{title:"Release 2.24.0",permalink:"/documentation-archive/v8.7.2/2015/11/20/jhipster-release-2.24.0.html"}},h={},d=[{value:"Documentation",id:"documentation",level:2},{value:"What&#39;s new",id:"whats-new",level:2},{value:"Most important bug fixes",id:"most-important-bug-fixes",level:2},{value:"OAuth2 authentication",id:"oauth2-authentication",level:3},{value:"Cloud Foundry deployment",id:"cloud-foundry-deployment",level:3},{value:"Wrong HTTP cache headers in production",id:"wrong-http-cache-headers-in-production",level:3},{value:"Closed tickets",id:"closed-tickets",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"jhipster-release-2231",children:"JHipster release 2.23.1"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"JHipster gives you Spring Boot + AngularJS working together in one handy Yeoman generator."})}),"\n",(0,s.jsx)(t.h2,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsxs)(t.p,{children:["Looking for the (old) JHipster v2.x documentation? It's ",(0,s.jsx)(t.a,{href:"https://www.jhipster.tech/documentation-archive/",children:"Here"}),"!"]}),"\n",(0,s.jsx)(t.h2,{id:"whats-new",children:"What's new"}),"\n",(0,s.jsx)(t.p,{children:"This is a bug-fix release, which solves a number of issues from version 2.23.0 and updates a few libraries."}),"\n",(0,s.jsx)(t.h2,{id:"most-important-bug-fixes",children:"Most important bug fixes"}),"\n",(0,s.jsx)(t.h3,{id:"oauth2-authentication",children:"OAuth2 authentication"}),"\n",(0,s.jsxs)(t.p,{children:["OAuth2 authentication was broken when the new Spring Boot 1.3.0 devtools were selected (issue ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/2291",children:"#2291"}),"). So we have removed, for the moment, our ",(0,s.jsx)(t.code,{children:"CustomUserDetails"})," class, which was causing the issue: discussion is still under way on how we will solve this in the long term."]}),"\n",(0,s.jsx)(t.h3,{id:"cloud-foundry-deployment",children:"Cloud Foundry deployment"}),"\n",(0,s.jsxs)(t.p,{children:["Deployment to Cloud Foundry was broken (issue ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/2225",children:"#2225"}),"), as there is an incompatibility between Spring Boot 1.3.0 and Cloud Foundry (see the Cloud Foundry issue ",(0,s.jsx)(t.a,{href:"https://github.com/cloudfoundry/cli/issues/411",children:"here"}),'). For the moment we have removed the "executable" flag on our generated WAR files, and have updated the documentation accordingly (you can\'t run the WAR files directly with ',(0,s.jsx)(t.code,{children:"./my_application.war"}),", you need to do ",(0,s.jsx)(t.code,{children:"java -jar my_application.war"}),"instead)."]}),"\n",(0,s.jsx)(t.h3,{id:"wrong-http-cache-headers-in-production",children:"Wrong HTTP cache headers in production"}),"\n",(0,s.jsxs)(t.p,{children:["Our HTTP cache headers where wrong in production (issue ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/2239",children:"#2239"}),"). We have corrected then, and have now excellent performance in production back again!"]}),"\n",(0,s.jsx)(t.h2,{id:"closed-tickets",children:"Closed tickets"}),"\n",(0,s.jsxs)(t.p,{children:["As always, ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A2.23.1+is%3Aclosed",children:"you can check all the closed tickets here"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,s.jsx)(t.p,{children:"Update your version of JHipster with:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,s.jsx)(t.p,{children:"And then you can update your project when you run again"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"yo jhipster\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can also update your entities by running again the entity sub-generator, for example if your entity is named ",(0,s.jsx)(t.em,{children:"Foo"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"yo jhipster:entity Foo\n"})}),"\n",(0,s.jsx)(t.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,s.jsx)(t.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Contact ",(0,s.jsx)(t.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n",(0,s.jsxs)(t.li,{children:["Add a bug on our ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,s.jsxs)(t.li,{children:["Post a question on ",(0,s.jsx)(t.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);