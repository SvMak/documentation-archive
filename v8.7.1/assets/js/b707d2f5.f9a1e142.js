"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[1352],{60800:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var i=t(74848),r=t(28453);const n={title:"Release 5.0.0-beta.3",slug:"/2018/06/18/jhipster-release-5.0.0-beta.3.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release v5.0.0-beta.3",l={id:"releases/2018-06-18-jhipster-release-5.0.0-beta.3",title:"Release 5.0.0-beta.3",description:"This is a specific security release on top of our v5.0.0-beta.2 release from last week, as 2 important security issues have been fixed on Spring Boot 2.0.3.",source:"@site/docs/releases/2018-06-18-jhipster-release-5.0.0-beta.3.mdx",sourceDirName:"releases",slug:"/2018/06/18/jhipster-release-5.0.0-beta.3.html",permalink:"/documentation-archive/v8.7.1/2018/06/18/jhipster-release-5.0.0-beta.3.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2018-06-18-jhipster-release-5.0.0-beta.3.mdx",tags:[],version:"current",lastUpdatedAt:172695718e4,frontMatter:{title:"Release 5.0.0-beta.3",slug:"/2018/06/18/jhipster-release-5.0.0-beta.3.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 5.0.0-beta.2",permalink:"/documentation-archive/v8.7.1/2018/06/13/jhipster-release-5.0.0-beta.2.html"},next:{title:"Release 4.14.5",permalink:"/documentation-archive/v8.7.1/2018/06/19/jhipster-release-4.14.5.html"}},o={},h=[{value:"Do you want to know more?",id:"do-you-want-to-know-more",level:2},{value:"How to install",id:"how-to-install",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"jhipster-release-v500-beta3",children:"JHipster release v5.0.0-beta.3"})}),"\n",(0,i.jsx)(s.p,{children:"This is a specific security release on top of our v5.0.0-beta.2 release from last week, as 2 important security issues have been fixed on Spring Boot 2.0.3."}),"\n",(0,i.jsxs)(s.p,{children:["Please note that Spring Boot 2.0.3 also breaks the way Ehcache works with JHipster: many thanks to ",(0,i.jsx)(s.a,{href:"https://github.com/henri-tremblay",children:"Henri Tremblay"})," from the Ehcache team who did an incredible job in fixing the issue during the week-end!"]}),"\n",(0,i.jsxs)(s.p,{children:["More information on this Spring Boot 2.0.3 upgrade (including the Ehcache issue) is available on ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/7783",children:"#7783"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"This BETA version is not available through the usual channels as this is a beta release, please read below for more information!"})}),"\n",(0,i.jsx)(s.h2,{id:"do-you-want-to-know-more",children:"Do you want to know more?"}),"\n",(0,i.jsxs)(s.p,{children:["JHipster 5 will be showcased at the upcoming ",(0,i.jsx)(s.a,{href:"https://jhipster-conf.github.io/",children:"JHipster Conf"})," where most of the core development team will present their work. Join us in Paris on June, 21st!"]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-install",children:"How to install"}),"\n",(0,i.jsxs)(s.p,{children:["As this a beta version, we are using a ",(0,i.jsx)(s.code,{children:"beta"})," tag on NPM."]}),"\n",(0,i.jsx)(s.p,{children:"To install JHipster v5.0.0-beta.3 using Yarn, please type:"}),"\n",(0,i.jsx)(s.p,{children:"yarn global add generator-jhipster@beta"}),"\n",(0,i.jsx)(s.p,{children:"If you are using NPM:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"npm install -g generator-jhipster@beta\n"})}),"\n",(0,i.jsx)(s.p,{children:"It is also available using the JHipster Docker image, as it is automatically built from our source code."}),"\n",(0,i.jsx)(s.p,{children:"However, as this is a BETA release it will not be available using our other usual channels like:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://start.jhipster.tech",children:"JHipster Online"})}),"\n",(0,i.jsx)(s.li,{children:"Homebrew"}),"\n",(0,i.jsx)(s.li,{children:"Chocolatey"}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/jhipster/jhipster-devbox",children:"JHipster Devbox"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["You also won\u2019t be able to use the ",(0,i.jsx)(s.code,{children:"jhipster upgrade"})," sub-generator, as it won\u2019t \u201csee\u201d the BETA release, which is distributed through a specific beta channel on NPM."]}),"\n",(0,i.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,i.jsxs)(s.p,{children:["As always, ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A5.0.0-beta.3+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,i.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Add a bug on our ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,i.jsxs)(s.li,{children:["Post a question on ",(0,i.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Contact ",(0,i.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var i=t(96540);const r={},n=i.createContext(r);function a(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);