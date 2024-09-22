"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[5448],{74457:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=t(74848),r=t(28453);const i={title:"Release 2.8.0",slug:"/2015/04/20/jhipster-release-2.8.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},a="JHipster release 2.8.0",o={id:"releases/2015-04-20-jhipster-release-2.8.0",title:"Release 2.8.0",description:"JHipster gives you Spring Boot + AngularJS working together in one handy Yeoman generator.",source:"@site/docs/releases/2015-04-20-jhipster-release-2.8.0.mdx",sourceDirName:"releases",slug:"/2015/04/20/jhipster-release-2.8.0.html",permalink:"/documentation-archive/v8.7.1/2015/04/20/jhipster-release-2.8.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2015-04-20-jhipster-release-2.8.0.mdx",tags:[],version:"current",lastUpdatedAt:1725972057e3,frontMatter:{title:"Release 2.8.0",slug:"/2015/04/20/jhipster-release-2.8.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 2.7.0",permalink:"/documentation-archive/v8.7.1/2015/04/03/jhipster-release-2.7.0.html"},next:{title:"Release 2.9.0",permalink:"/documentation-archive/v8.7.1/2015/04/24/jhipster-release-2.9.0.html"}},l={},h=[{value:"Documentation",id:"documentation",level:2},{value:"What&#39;s new",id:"whats-new",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"jhipster-release-280",children:"JHipster release 2.8.0"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"JHipster gives you Spring Boot + AngularJS working together in one handy Yeoman generator."})}),"\n",(0,n.jsx)(s.h2,{id:"documentation",children:"Documentation"}),"\n",(0,n.jsxs)(s.p,{children:["Looking for the (old) JHipster v2.x documentation? It's ",(0,n.jsx)(s.a,{href:"https://www.jhipster.tech/documentation-archive/",children:"Here"}),"!"]}),"\n",(0,n.jsx)(s.h2,{id:"whats-new",children:"What's new"}),"\n",(0,n.jsx)(s.p,{children:"This is a bug-fixing release."}),"\n",(0,n.jsx)(s.p,{children:"This is a 2.8.0 version, and not 2.7.1, to mark that we have made one big change in JHipster: we are changing the way we name our database tables!"}),"\n",(0,n.jsx)(s.p,{children:"This should normally not have any consequences to existing applications (thanks to JPA that adds a mapping layer on top of the database!), but it can be surprising to existing users."}),"\n",(0,n.jsxs)(s.p,{children:["This follows the discussion from ",(0,n.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/1278",children:"#1278"}),", as:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Previously, all tables in JHipster where prefixed with 'T_'. This was only because ",(0,n.jsx)(s.a,{href:"https://twitter.com/juliendubois",children:"Julien Dubois"})," is very old, and learned programming using the Hungarian notation. 20 years ago, without any syntax highlighting, he could easily know if he was using a table (prefixed by 'T_') or a view (prefixed by 'V_'). Of course using this notation is totally non-hipster, so we decided to remove it."]}),"\n",(0,n.jsx)(s.li,{children:"We now check for reserved keywords when an entity is being generated: you can't use Java, MySQL, PostgreSQL or Cassandra reserved keywords. We do not check MongoDB reserved keywords yet, because we didn't find a good list of keywords, but that should of course be added later."}),"\n",(0,n.jsx)(s.li,{children:"As a result of the two choices above, we had a new issue: as PostgreSQL uses the \"user\" keyword internally, we could not use a 'user' table to store our 'User' entity."}),"\n",(0,n.jsxs)(s.li,{children:["So our new tables names are as follows:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"All tables generated by default by JHipster (including the \"User\" table), are prefixed by 'JHI_'. So the 'User' table is in fact called 'JHI_USER'."}),"\n",(0,n.jsx)(s.li,{children:"All tables generated using the entity sub-generator have no prefix at all, but cannot contain a reserved keyword in the technologies you are using (if you don't use Cassandra, you can use a Cassandra reserved keyword)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"If those choices do not suit you, don't hesitate to send us comments, and remember that all this can be easily changed in your JPA mapping!"}),"\n",(0,n.jsxs)(s.p,{children:["And as always, ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A2.8.0+is%3Aclosed",children:"you can check all the closed tickets here"})}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,n.jsx)(s.p,{children:"Update your version of JHipster with:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,n.jsx)(s.p,{children:"And then you can update your project when you run again"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"yo jhipster\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You can also update your entities by running again the entity sub-generator, for example if your entity is named ",(0,n.jsx)(s.em,{children:"Foo"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"yo jhipster:entity Foo\n"})}),"\n",(0,n.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,n.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Contact ",(0,n.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n",(0,n.jsxs)(s.li,{children:["Add a bug on our ",(0,n.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,n.jsxs)(s.li,{children:["Post a question on ",(0,n.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var n=t(96540);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);