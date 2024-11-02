"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[8280],{47431:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>h,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var t=s(74848),i=s(28453);const n={title:"Release 8.6.0",slug:"/2024/06/24/jhipster-release-8.6.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},h="JHipster release v8.6.0",l={id:"releases/2024-06-24-jhipster-release-8.6.0",title:"Release 8.6.0",description:"This is a minor release for JHipster v8.",source:"@site/docs/releases/2024-06-24-jhipster-release-8.6.0.mdx",sourceDirName:"releases",slug:"/2024/06/24/jhipster-release-8.6.0.html",permalink:"/documentation-archive/v8.7.3/2024/06/24/jhipster-release-8.6.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2024-06-24-jhipster-release-8.6.0.mdx",tags:[],version:"current",lastUpdatedAt:172695718e4,frontMatter:{title:"Release 8.6.0",slug:"/2024/06/24/jhipster-release-8.6.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 8.5.0",permalink:"/documentation-archive/v8.7.3/2024/05/30/jhipster-release-8.5.0.html"},next:{title:"Release 8.7.0",permalink:"/documentation-archive/v8.7.3/2024/08/26/jhipster-release-8.7.0.html"}},a={},o=[{value:"What&#39;s new?",id:"whats-new",level:2},{value:"\ud83d\udcbb Frontend",id:"computer-frontend",level:3},{value:"\ud83d\udcdc Others",id:"scroll-others",level:3},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to install",id:"how-to-install",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"jhipster-release-v860",children:"JHipster release v8.6.0"})}),"\n",(0,t.jsx)(r.p,{children:"This is a minor release for JHipster v8."}),"\n",(0,t.jsxs)(r.p,{children:["It includes ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=is:closed+milestone:8.6.0",children:"216 closed issues and pull requests on the main branch"})," after the 8.5.0 release."]}),"\n",(0,t.jsx)(r.h2,{id:"whats-new",children:"What's new?"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Upgrade to Spring Boot 3.3.1 (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26490",children:"#26490"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Upgrade to Angular 18 (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26213",children:"#26213"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Add Java 22 support (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/25645",children:"#25645"})," and ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26495",children:"#26495"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Upgrade to Maven v3.9.8 (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26452",children:"#26452"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Upgrade to Gradle v8.8 (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26329",children:"#26329"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Upgrade to Node v20.15.0 (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26494",children:"#26494"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Upgrade to Keycloak 25.0.0 (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26420",children:"#26420"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Fix Gatling: remove deprecated plugin configuration option (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26493",children:"#26493"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Unnecessary ",(0,t.jsx)(r.code,{children:"npmw"})," variables (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26436",children:"#26436"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Docker Compose version is obsolete (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26438",children:"#26438"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Always add ",(0,t.jsx)(r.code,{children:"ci:server:await"})," script (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26393",children:"#26393"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Fix MySQL 8.4.0 so it starts in Docker (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26359",children:"#26359"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Don't add annotations to inner classes (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26345",children:"#26345"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Upgrade to MariaDB 11.4.2 (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26346",children:"#26346"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Sonar: UserDTO overrides ",(0,t.jsx)(r.code,{children:"equals()"})," and should therefore also override ",(0,t.jsx)(r.code,{children:"hashCode()"})," (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26325",children:"#26325"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Loggers should be 'private static final' (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26532",children:"#26532"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(r.h3,{id:"computer-frontend",children:["\ud83d\udcbb"," Frontend"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["[Angular] Fix deprecated signature for ",(0,t.jsx)(r.code,{children:"tableRow.injector.get"})," (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26516",children:"#26516"})," and ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26529",children:"#26529"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Angular] Sonar: Fields that are only assigned in the constructor should be readonly (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26514",children:"#26514"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Angular] ",(0,t.jsx)(r.code,{children:"throwError()"})," function is deprecated (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26515",children:"#26515"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Angular] Rename Jhipster to JHipster (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26512",children:"#26512"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Angular] HttpClientTestingModule is deprecated (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26511",children:"#26511"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Angular] Fix input fields style on Bootswatch Quartz theme (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26507",children:"#26507"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Angular] Sonar: InfiniteScrollModule is deprecated (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26465",children:"#26465"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Angular] Sonar: HttpClientModule is deprecated (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26464",children:"#26464"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Angular] Fix deprecated RxJS method (throwError) (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26336",children:"#26336"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Angular] Fix deprecated method (angular/core/testing) (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26335",children:"#26335"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Angular] Use signal contentChild (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26334",children:"#26334"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[React] Fix OAuth2 login and logout issues (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26384",children:"#26384"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["The documentation should recommend using ",(0,t.jsx)(r.code,{children:"./npmw"})," instead of requiring Node be installed (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26437",children:"#26437"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Fix initial text direction setting (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26406",children:"#26406"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Avoid filtering out relationships where entities support filtering (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26357",children:"#26357"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["Cleanup ",(0,t.jsx)(r.code,{children:".eslintignore"})," (",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/pull/26453",children:"#26453"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(r.h3,{id:"scroll-others",children:["\ud83d\udcdc"," Others"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Several internal improvements and blueprint optimizations"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,t.jsxs)(r.p,{children:["See the ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/releases/tag/v8.6.0",children:"GitHub 8.6.0 release notes"})," for more details."]}),"\n",(0,t.jsxs)(r.p,{children:["As always, ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=is:closed+milestone:8.6.0",children:"you can view all closed tickets and merged pull requests"})}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"how-to-install",children:"How to install"}),"\n",(0,t.jsx)(r.p,{children:"To install JHipster v8.6.0:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"npm install -g generator-jhipster\n"})}),"\n",(0,t.jsx)(r.p,{children:"It is also available using the JHipster Docker image, as it is automatically built from our source code."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://start.jhipster.tech",children:"JHipster Online"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/jhipster/jhipster-devbox",children:"JHipster Devbox"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Automatic upgrade"})}),"\n",(0,t.jsxs)(r.p,{children:["For an automatic upgrade, use the ",(0,t.jsx)(r.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,t.jsx)(r.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,t.jsx)(r.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"jhipster upgrade\n"})}),"\n",(0,t.jsxs)(r.p,{children:["You can also use the ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster-migrate",children:"migrate blueprint"})," for more advanced upgrade features."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"npm i -g generator-jhipster-migrate\njhipster-migrate\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Manual upgrades"})}),"\n",(0,t.jsx)(r.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,t.jsx)(r.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"jhipster\n"})}),"\n",(0,t.jsx)(r.p,{children:"Since JHipster 8.0, this command will update your project and all its entities."}),"\n",(0,t.jsxs)(r.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,t.jsx)(r.em,{children:"Foo"}),", use:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"jhipster entity Foo\n"})}),"\n",(0,t.jsx)(r.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,t.jsx)(r.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Add a bug on our ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,t.jsxs)(r.li,{children:["Post a question on ",(0,t.jsx)(r.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n",(0,t.jsxs)(r.li,{children:["Create a new discussion on ",(0,t.jsx)(r.a,{href:"https://github.com/jhipster/generator-jhipster/discussions",children:"GitHub"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Contact ",(0,t.jsx)(r.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>h,x:()=>l});var t=s(96540);const i={},n=t.createContext(i);function h(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:h(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);