"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[7598],{50050:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(74848),n=s(28453);const r={title:"Release 2.23.0",slug:"/2015/10/23/jhipster-release-2.23.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},o="JHipster release 2.23.0",a={id:"releases/2015-10-23-jhipster-release-2.23.0",title:"Release 2.23.0",description:"JHipster gives you Spring Boot + AngularJS working together in one handy Yeoman generator.",source:"@site/docs/releases/2015-10-23-jhipster-release-2.23.0.mdx",sourceDirName:"releases",slug:"/2015/10/23/jhipster-release-2.23.0.html",permalink:"/documentation-archive/v8.7.2/2015/10/23/jhipster-release-2.23.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2015-10-23-jhipster-release-2.23.0.mdx",tags:[],version:"current",lastUpdatedAt:1725972057e3,frontMatter:{title:"Release 2.23.0",slug:"/2015/10/23/jhipster-release-2.23.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 2.22.0",permalink:"/documentation-archive/v8.7.2/2015/10/06/jhipster-release-2.22.0.html"},next:{title:"Release 2.23.1",permalink:"/documentation-archive/v8.7.2/2015/11/10/jhipster-release-2.23.1.html"}},l={},d=[{value:"Documentation",id:"documentation",level:2},{value:"What&#39;s new",id:"whats-new",level:2},{value:"We have moved to Spring Boot 1.3.0.RC1",id:"we-have-moved-to-spring-boot-130rc1",level:2},{value:"We have removed Java 7",id:"we-have-removed-java-7",level:2},{value:"Social login",id:"social-login",level:2},{value:"H2 disk-based support",id:"h2-disk-based-support",level:2},{value:"BDD support",id:"bdd-support",level:2},{value:"Closed tickets",id:"closed-tickets",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function h(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"jhipster-release-2230",children:"JHipster release 2.23.0"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"JHipster gives you Spring Boot + AngularJS working together in one handy Yeoman generator."})}),"\n",(0,t.jsx)(i.h2,{id:"documentation",children:"Documentation"}),"\n",(0,t.jsxs)(i.p,{children:["Looking for the (old) JHipster v2.x documentation? It's ",(0,t.jsx)(i.a,{href:"https://www.jhipster.tech/documentation-archive/",children:"Here"}),"!"]}),"\n",(0,t.jsx)(i.h2,{id:"whats-new",children:"What's new"}),"\n",(0,t.jsxs)(i.p,{children:["This is a ",(0,t.jsx)(i.strong,{children:"huge"})," release, with 95 closed tickets, and a lot of code changed, be warned!"]}),"\n",(0,t.jsx)(i.h2,{id:"we-have-moved-to-spring-boot-130rc1",children:"We have moved to Spring Boot 1.3.0.RC1"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A lot of code has been removed as it's now included in Spring Boot"}),"\n",(0,t.jsxs)(i.li,{children:["We have followed the ",(0,t.jsx)(i.a,{href:"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-1.3.0-RC1-Release-Notes",children:"Spring Boot 1.3 migration guide"}),", so if you are upgrading from an older JHipster version, it's a good idea to have a look at it, in order to understand what we did"]}),"\n",(0,t.jsx)(i.li,{children:'Spring Boot devtools are now running by default in "dev" mode: you now have hot-reload of your application (without restarting the JVM). This is an incredible improvement, as you will quickly notice!'}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"we-have-removed-java-7",children:"We have removed Java 7"}),"\n",(0,t.jsx)(i.p,{children:"This is following last release's deprecation of Java 7."}),"\n",(0,t.jsx)(i.p,{children:"This allowed us to remove Joda Time and use instead Java 8's new Date and Time API."}),"\n",(0,t.jsx)(i.h2,{id:"social-login",children:"Social login"}),"\n",(0,t.jsx)(i.p,{children:'A long-awaited addition is the possibility to use "social login", such as Google, Facebook or Twitter.'}),"\n",(0,t.jsx)(i.h2,{id:"h2-disk-based-support",children:"H2 disk-based support"}),"\n",(0,t.jsx)(i.p,{children:"You can now use H2's disk-persistence mechanism. This is not yet fully working with Windows and with liquibase-hibernate, but this is a good step forward."}),"\n",(0,t.jsx)(i.h2,{id:"bdd-support",children:"BDD support"}),"\n",(0,t.jsx)(i.p,{children:"Initial support for Behavior-driven development using Cucumber is now available at application generation."}),"\n",(0,t.jsx)(i.h2,{id:"closed-tickets",children:"Closed tickets"}),"\n",(0,t.jsxs)(i.p,{children:["As always, ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A2.23.0+is%3Aclosed",children:"you can check all the closed tickets here"})}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsx)(i.p,{children:"Update your version of JHipster with:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,t.jsx)(i.p,{children:"And then you can update your project when you run again"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"yo jhipster\n"})}),"\n",(0,t.jsxs)(i.p,{children:["You can also update your entities by running again the entity sub-generator, for example if your entity is named ",(0,t.jsx)(i.em,{children:"Foo"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"yo jhipster:entity Foo\n"})}),"\n",(0,t.jsx)(i.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,t.jsx)(i.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Contact ",(0,t.jsx)(i.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n",(0,t.jsxs)(i.li,{children:["Add a bug on our ",(0,t.jsx)(i.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,t.jsxs)(i.li,{children:["Post a question on ",(0,t.jsx)(i.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>a});var t=s(96540);const n={},r=t.createContext(n);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);