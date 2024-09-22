"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[8651],{61937:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>h,toc:()=>o});var t=s(74848),n=s(28453);const i={title:"Release 5.3.4",slug:"/2018/09/17/jhipster-release-5.3.4.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release v5.3.4",h={id:"releases/2018-09-17-jhipster-release-5.3.4",title:"Release 5.3.4",description:"This patch release follows v5.3.2 and v5.3.3 which were released today. We found issue #8351 which causes a compilation error for projects using criteria filtering on DTOs. As this is critical for people using this feature, we have released this patch as an emergency release.",source:"@site/docs/releases/2018-09-17-jhipster-release-5.3.4.mdx",sourceDirName:"releases",slug:"/2018/09/17/jhipster-release-5.3.4.html",permalink:"/documentation-archive/v8.7.1/2018/09/17/jhipster-release-5.3.4.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2018-09-17-jhipster-release-5.3.4.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 5.3.4",slug:"/2018/09/17/jhipster-release-5.3.4.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 5.3.3",permalink:"/documentation-archive/v8.7.1/2018/09/17/jhipster-release-5.3.3.html"},next:{title:"Release 5.4.0",permalink:"/documentation-archive/v8.7.1/2018/10/03/jhipster-release-5.4.0.html"}},l={},o=[{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"jhipster-release-v534",children:"JHipster release v5.3.4"})}),"\n",(0,t.jsxs)(r.p,{children:["This patch release follows v5.3.2 and v5.3.3 which were released today. We found issue ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/issues/8351",children:"#8351"})," which causes a compilation error for projects using criteria filtering on DTOs. As this is critical for people using this feature, we have released this patch as an emergency release."]}),"\n",(0,t.jsx)(r.p,{children:"For the record, here are the most important bug fixes and enhancements from release 5.3.2:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Full microservice stack generation using import-jdl ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8335/",children:"#8335"})]}),"\n",(0,t.jsxs)(r.li,{children:["Add a TLS profile (back and front) to run the development server in HTTPS ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8138",children:"#8138"})]}),"\n",(0,t.jsxs)(r.li,{children:["Angular: Use Mocha+Chai for end to end tests ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8197",children:"#8197"})]}),"\n",(0,t.jsxs)(r.li,{children:["Remove non-free and unused dependency to org.json",":json"," ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/issues/8206",children:"#8206"})]}),"\n",(0,t.jsxs)(r.li,{children:["Heroku: move Liquibase migrations to release phase ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8229",children:"#8229"})]}),"\n",(0,t.jsxs)(r.li,{children:["New languages: Bengali ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8255",children:"#8255"})," and Myanmar ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8317",children:"#8317"})]}),"\n",(0,t.jsxs)(r.li,{children:["Update spring-boot to 2.0.5 and dependencies ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/8273",children:"#8273"})]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Automatic upgrade"})}),"\n",(0,t.jsxs)(r.p,{children:["For an automatic upgrade, use the ",(0,t.jsx)(r.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,t.jsx)(r.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,t.jsx)(r.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"jhipster upgrade\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Manual upgrades"})}),"\n",(0,t.jsx)(r.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"yarn global upgrade generator-jhipster\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,t.jsx)(r.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"jhipster\n"})}),"\n",(0,t.jsx)(r.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"jhipster --with-entities\n"})}),"\n",(0,t.jsxs)(r.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,t.jsx)(r.em,{children:"Foo"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"jhipster entity Foo\n"})}),"\n",(0,t.jsx)(r.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,t.jsx)(r.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Add a bug on our ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,t.jsxs)(r.li,{children:["Post a question on ",(0,t.jsx)(r.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Contact ",(0,t.jsx)(r.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>h});var t=s(96540);const n={},i=t.createContext(n);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function h(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);