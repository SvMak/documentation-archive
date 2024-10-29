"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[7307],{8728:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=r(74848),n=r(28453);const i={title:"Release 4.5.3",slug:"/2017/06/09/jhipster-release-4.5.3.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 4.5.3",l={id:"releases/2017-06-09-jhipster-release-4.5.3",title:"Release 4.5.3",description:"What's new",source:"@site/docs/releases/2017-06-09-jhipster-release-4.5.3.mdx",sourceDirName:"releases",slug:"/2017/06/09/jhipster-release-4.5.3.html",permalink:"/documentation-archive/v8.7.2/2017/06/09/jhipster-release-4.5.3.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2017-06-09-jhipster-release-4.5.3.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 4.5.3",slug:"/2017/06/09/jhipster-release-4.5.3.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 4.5.2",permalink:"/documentation-archive/v8.7.2/2017/05/29/jhipster-release-4.5.2.html"},next:{title:"Release 4.5.4",permalink:"/documentation-archive/v8.7.2/2017/06/16/jhipster-release-4.5.4.html"}},h={},o=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"jhipster-release-453",children:"JHipster release 4.5.3"})}),"\n",(0,t.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,t.jsx)(s.p,{children:"This is the third patch release for JHipster v4.5.0."}),"\n",(0,t.jsx)(s.p,{children:"Here are the highlights of this release:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Upgrade to Spring Boot 1.5.4, released yesterday, which corrects a security vulnerability - see ticket ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5893",children:"#5893"})]}),"\n",(0,t.jsxs)(s.li,{children:["Use of Jackson's Afterburner module, which includes some excellent performance enhancements for everyone! Some basic tests show a 5% gain in all applications, and ",(0,t.jsx)(s.a,{href:"http://technicalrex.com/2015/02/27/performance-playground-jackson-vs-protocol-buffers-part-2",children:"here is a more complete report"})," - see commit ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/commit/01cc743af3f30939d1e9ee13012c865dffd6c46e",children:"01cc743af3f30939d1e9ee13012c865dffd6c46e"})]}),"\n",(0,t.jsxs)(s.li,{children:["Many Angular 4 updates, including Progressive Web App support! - see PR ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5880",children:"#5880"})," and PR ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/5878",children:"#5878"})]}),"\n",(0,t.jsxs)(s.li,{children:["Missed update in Elasticsearch after update user via service/UserService.updateUser - see ticket ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5867",children:"#5867"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,t.jsxs)(s.p,{children:["As always, ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A4.5.3+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,t.jsxs)(s.p,{children:["WARNING we have many reports that automatic upgrade do not work well, see ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5883",children:"#5883"}),". This depends on your specific configuration, so if you have trouble with this:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'You can still do a "manual upgrade" (see below)'}),"\n",(0,t.jsxs)(s.li,{children:["If you find anything helpful for us, please send us comments on ticket ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/5883",children:"#5883"})]}),"\n",(0,t.jsx)(s.li,{children:"If you have time and want to help, don't hesitate to contribute on this part!"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,t.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"yo jhipster:upgrade\n"})}),"\n",(0,t.jsx)(s.p,{children:"Please note that with our new JHipster CLI release, the new command will be:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,t.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,t.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,t.jsx)(s.em,{children:"Foo"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,t.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,t.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a bug on our ",(0,t.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,t.jsxs)(s.li,{children:["Post a question on ",(0,t.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Contact ",(0,t.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>l});var t=r(96540);const n={},i=t.createContext(n);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);