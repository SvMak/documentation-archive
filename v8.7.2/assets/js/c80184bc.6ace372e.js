"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[174],{33597:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var i=t(74848),r=t(28453);const n={title:"Release 5.0.0-beta.0",slug:"/2018/04/03/jhipster-release-5.0.0-beta.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},o="JHipster release v5.0.0-beta.0",l={id:"releases/2018-04-03-jhipster-release-5.0.0-beta.0",title:"Release 5.0.0-beta.0",description:"This is our first beta release for JHipster v5.",source:"@site/docs/releases/2018-04-03-jhipster-release-5.0.0-beta.0.mdx",sourceDirName:"releases",slug:"/2018/04/03/jhipster-release-5.0.0-beta.0.html",permalink:"/documentation-archive/v8.7.2/2018/04/03/jhipster-release-5.0.0-beta.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2018-04-03-jhipster-release-5.0.0-beta.0.mdx",tags:[],version:"current",lastUpdatedAt:172695718e4,frontMatter:{title:"Release 5.0.0-beta.0",slug:"/2018/04/03/jhipster-release-5.0.0-beta.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 4.14.1",permalink:"/documentation-archive/v8.7.2/2018/02/27/jhipster-release-4.14.1.html"},next:{title:"Release 4.14.2",permalink:"/documentation-archive/v8.7.2/2018/04/05/jhipster-release-4.14.2.html"}},a={},h=[{value:"What&#39;s new?",id:"whats-new",level:2},{value:"Documentation",id:"documentation",level:2},{value:"What\u2019s missing",id:"whats-missing",level:2},{value:"How to install",id:"how-to-install",level:2},{value:"How you can help",id:"how-you-can-help",level:2},{value:"Do you want to know more?",id:"do-you-want-to-know-more",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"jhipster-release-v500-beta0",children:"JHipster release v5.0.0-beta.0"})}),"\n",(0,i.jsx)(s.p,{children:"This is our first beta release for JHipster v5."}),"\n",(0,i.jsx)(s.p,{children:"Its main features are Spring Boot 2 support and React support (in addition to an improved Angular support!)."}),"\n",(0,i.jsxs)(s.p,{children:["It has ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A5.0.0-beta.0+is%3Aclosed",children:"350 closed tickets and pull requests on the main project"}),", so it is really a huge work."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"It is not available through the usual channels as this is a beta release, please read below for more information!"})}),"\n",(0,i.jsx)(s.h2,{id:"whats-new",children:"What's new?"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Spring Boot 2.0.0 support ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/7061",children:"#7061"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"All Spring libraries have been upgraded, including Spring Data, Spring Security and Spring Cloud"}),"\n",(0,i.jsx)(s.li,{children:"The Spring Boot configuration has also been upgraded"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Reactive support","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"New generator option to enable Spring Webflux support"}),"\n",(0,i.jsx)(s.li,{children:"Support for Spring Webflux in the Spring controller sub-generator"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["React support ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/6044",children:"#6044"})," (out of experimental status)","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Same features as our Angular support (including updates mentioned below regarding dialogs and entity folder structure)"}),"\n",(0,i.jsx)(s.li,{children:"Uses Redux for state management"}),"\n",(0,i.jsx)(s.li,{children:"Uses React Router v4 for routing"}),"\n",(0,i.jsx)(s.li,{children:"Written in Typescript"}),"\n",(0,i.jsx)(s.li,{children:"Webpack 4 is used for builds and is very similar to our Angular Webpack setup"}),"\n",(0,i.jsx)(s.li,{children:"Karma + Mocha + Chai unit tests with good coverage"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Improved Angular support","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["This includes a migration to Webpack 4, which gives a nice performance boost (it varies depending on your situation, but you can expect a noticeable positive impact) ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/7186",children:"#7186"})]}),"\n",(0,i.jsxs)(s.li,{children:["Lazy loading support for the admin modules ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/7235",children:"#7235"})]}),"\n",(0,i.jsxs)(s.li,{children:["Reworked entity create/edit screens, they are normal pages now instead of popup dialogs ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/7368",children:"#7368"})]}),"\n",(0,i.jsx)(s.li,{children:"Improved AOT setup"}),"\n",(0,i.jsxs)(s.li,{children:["The folder structure of entities have been improved, especially for microservices as now they are grouped by services. There is a ",(0,i.jsx)(s.code,{children:"--skip-ui-grouping"})," flag to retain the old behaviour ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/7079",children:"#7079"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Prettier support ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/6906",children:"#6906"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Both Angular and React now uses Prettier to format code."}),"\n",(0,i.jsxs)(s.li,{children:["This also adds ",(0,i.jsx)(s.a,{href:"https://github.com/typicode/husky",children:"Husky"})," and list-staged to enable pre-commit hooks"]}),"\n",(0,i.jsxs)(s.li,{children:["Please use the ",(0,i.jsx)(s.code,{children:"skip-commit-hook"})," flag to disable the pre-commit hooks when generating the application"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["JDL v2 with application generation support ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/7339",children:"#7339"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"As a result, the language evolved dramatically, and you can now build full applications using the JDL, and not just entities. This is a huge news if you want to share and reuse your JHipster configuration."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["New JHipster blueprints (still a work-in-progress)","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The blueprints system allows to easily extends and/or replace JHipster templates. This is how the new ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/jhipster-kotlin",children:"JHipster Kotlin"})," works. This isn\u2019t well-documented yet, but JHipster Kotlin already gives a nice working example."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Migration from PhantomJS to Puppeteer : as PhantomJS is not developed anymore ",(0,i.jsx)(s.a,{href:"https://github.com/ariya/phantomjs/issues/15344",children:"see the latest announcement from the maintainer"})," we have migrated our frontend tests to use the Headless Chromium browser provided by ",(0,i.jsx)(s.a,{href:"https://github.com/GoogleChrome/puppeteer",children:"Puppeteer"}),". If you encounter problems puppeteer, refer to their ",(0,i.jsx)(s.a,{href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md",children:"troubleshooting documentation"})]}),"\n",(0,i.jsxs)(s.li,{children:["New Sub-generator to deploy to AWS containers ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/7035",children:"#7035"})]}),"\n",(0,i.jsxs)(s.li,{children:["Removed AngularJS support","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"As we now focus on Angular 5+, we have removed our support for the older AngularJS 1.x"}),"\n",(0,i.jsx)(s.li,{children:"As a side effect support for Bower and Gulp also have been removed"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsx)(s.p,{children:"We have started to merge the JHipster v5 documentation on the main website:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"It is not yet complete, please don\u2019t hesitate to help if you find issues"}),"\n",(0,i.jsxs)(s.li,{children:["If you are using JHipster v4, don\u2019t forget we have ",(0,i.jsx)(s.a,{href:"https://www.jhipster.tech/documentation-archive/",children:"the full versioned archives available here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"whats-missing",children:"What\u2019s missing"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"We\u2019re mostly waiting for Spring Cloud to have a stable release compatible with Spring Boot 2.0.0. This is why this release depends on the Maven Spring milestone repository. If you are not using microservices (and so not using Spring Cloud), you\u2019re not concerned by this."}),"\n",(0,i.jsx)(s.li,{children:"A lot more tests, as we have changed many things. For Angular users: we have modified the project layout, but otherwise this shouldn\u2019t be a big upgrade for you, and you should be pretty safe with this beta release."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-install",children:"How to install"}),"\n",(0,i.jsx)(s.p,{children:"This is the first time we use a BETA tag on NPM, so please note this is new for everyone!"}),"\n",(0,i.jsx)(s.p,{children:"To install JHipster v5.0.0-beta.0 using Yarn, please type:"}),"\n",(0,i.jsx)(s.p,{children:"yarn global add generator-jhipster@beta"}),"\n",(0,i.jsx)(s.p,{children:"If you are using NPM:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"npm install -g generator-jhipster@beta\n"})}),"\n",(0,i.jsx)(s.p,{children:"It is also available using the JHipster Docker image, as it is automatically built from our source code."}),"\n",(0,i.jsx)(s.p,{children:"However, as this is a BETA release it will not be available using our other usual channels like:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://start.jhipster.tech",children:"JHipster Online"})}),"\n",(0,i.jsx)(s.li,{children:"Homebrew"}),"\n",(0,i.jsx)(s.li,{children:"Chocolatey"}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/jhipster/jhipster-devbox",children:"JHipster Devbox"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["You also won\u2019t be able to use the ",(0,i.jsx)(s.code,{children:"jhipster upgrade"})," sub-generator, as it won\u2019t \u201csee\u201d the BETA release, which is distributed through a specific beta channel on NPM."]}),"\n",(0,i.jsx)(s.h2,{id:"how-you-can-help",children:"How you can help"}),"\n",(0,i.jsxs)(s.p,{children:["If you find any issue, please ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues",children:"open a ticket"})," and follow our ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/blob/master/CONTRIBUTING.md",children:"guidelines"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["We are expecting to do a stable release in the next 2 weeks, but please remember that most people on the team are doing this on their free time. So if your company is benefiting from JHipster, you can also help by telling your boss to ",(0,i.jsx)(s.a,{href:"/sponsors/",children:"sponsor the project"})," - that money will be used to reward contributors, and help us to release even better versions, more quickly!"]}),"\n",(0,i.jsx)(s.h2,{id:"do-you-want-to-know-more",children:"Do you want to know more?"}),"\n",(0,i.jsxs)(s.p,{children:["All those new features will be showcased at the upcoming ",(0,i.jsx)(s.a,{href:"https://jhipster-conf.github.io/",children:"JHipster Conf"})," where most of the core development team will present their work. Join us in Paris on June, 21st!"]}),"\n",(0,i.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,i.jsxs)(s.p,{children:["As always, ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=milestone%3A5.0.0-beta.0+is%3Aclosed",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,i.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Add a bug on our ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,i.jsxs)(s.li,{children:["Post a question on ",(0,i.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Contact ",(0,i.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var i=t(96540);const r={},n=i.createContext(r);function o(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);