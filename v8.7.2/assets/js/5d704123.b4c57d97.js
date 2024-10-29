"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[1233],{16387:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>h,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var i=r(74848),t=r(28453);const n={title:"Release 7.0.0",slug:"/2021/03/21/jhipster-release-7.0.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},h="JHipster release v7.0.0",l={id:"releases/2021-03-21-jhipster-release-7.0.0",title:"Release 7.0.0",description:"This is our first stable release of JHipster v7!",source:"@site/docs/releases/2021-03-21-jhipster-release-7.0.0.mdx",sourceDirName:"releases",slug:"/2021/03/21/jhipster-release-7.0.0.html",permalink:"/documentation-archive/v8.7.2/2021/03/21/jhipster-release-7.0.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/releases/2021-03-21-jhipster-release-7.0.0.mdx",tags:[],version:"current",lastUpdatedAt:1724889693e3,frontMatter:{title:"Release 7.0.0",slug:"/2021/03/21/jhipster-release-7.0.0.html",displayed_sidebar:"docsSidebar",sidebar_class_name:"hidden"},sidebar:"docsSidebar",previous:{title:"Release 7.0.0-beta.1",permalink:"/documentation-archive/v8.7.2/2021/01/17/jhipster-release-7.0.0-beta.1.html"},next:{title:"Release 7.0.1",permalink:"/documentation-archive/v8.7.2/2021/04/02/jhipster-release-7.0.1.html"}},d={},o=[{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Most important new features and upgrades",id:"most-important-new-features-and-upgrades",level:2},{value:"Closed tickets and merged pull requests",id:"closed-tickets-and-merged-pull-requests",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Help and bugs",id:"help-and-bugs",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"jhipster-release-v700",children:"JHipster release v7.0.0"})}),"\n",(0,i.jsx)(s.p,{children:"This is our first stable release of JHipster v7!"}),"\n",(0,i.jsx)(s.p,{children:"Here is a summary of the release notes from our 2 beta releases of JHipster v7.0.0, updated with our latest changes."}),"\n",(0,i.jsx)(s.p,{children:"It includes a total of 2371 closed tickets and pull requests on the main project:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["825 closed tickets and pull requests: ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=is%3Aclosed+milestone%3A7.0.0",children:"v7.0.0"})]}),"\n",(0,i.jsxs)(s.li,{children:["226 closed tickets and pull requests: ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=is%3Aclosed+milestone%3A7.0.0-beta.1",children:"v7.0.0-beta.1"})]}),"\n",(0,i.jsxs)(s.li,{children:["1320 closed tickets and pull requests: ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=is%3Aclosed+milestone%3A7.0.0-beta.0",children:"v7.0.0-beta.0"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,i.jsx)(s.p,{children:"Related to Blueprints and Modules:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Remove getAllJhipsterConfig - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12023",children:"#12023"}),". Use getJhipsterConfig instead of getAllJhipsterConfig."]}),"\n",(0,i.jsxs)(s.li,{children:["Create jhipsterConfig for synchronised config and move configOptions to generator-base - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12026",children:"#12026"}),". generators-base-blueprint's jhipsterConfig field is now a proxy instead of a Storage object look at the PR description for migration."]}),"\n",(0,i.jsxs)(s.li,{children:["Updates to ",(0,i.jsx)(s.code,{children:"getXXXAppName()"})," methods on ",(0,i.jsx)(s.code,{children:"base-generator"})," ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12325",children:"#12325"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["added ",(0,i.jsx)(s.code,{children:"getFrontendAppName()"})," and ",(0,i.jsx)(s.code,{children:"frontendAppName"})," attribute"]}),"\n",(0,i.jsxs)(s.li,{children:["removed ",(0,i.jsx)(s.code,{children:"getAngularAppName()"})," and ",(0,i.jsx)(s.code,{children:"angularAppName"})," attribute"]}),"\n",(0,i.jsxs)(s.li,{children:["removed ",(0,i.jsx)(s.code,{children:"getAngularXName()"})," and ",(0,i.jsx)(s.code,{children:"angularXAppName"})," attribute"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Removed ",(0,i.jsx)(s.code,{children:"setup*Options()"})," operations","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["A replacement may not be required. Use ",(0,i.jsx)(s.code,{children:"load(App/Client/Server)Config"})," if needed."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"id"})," field is added to fields at jhipster 7.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Remove id fields if the blueprint/module doesn't support. ",(0,i.jsx)(s.code,{children:"this.fields = this.fields.filter(field => !field.id);"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Related to front:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Angular: follow closer Angular Style Guide - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/13125",children:"#13125"})]}),"\n",(0,i.jsxs)(s.li,{children:["React: tests next to the files they are testing ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/13425",children:"#13425"})]}),"\n",(0,i.jsxs)(s.li,{children:["Login page refactoring - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/11926",children:"#11926"})]}),"\n",(0,i.jsxs)(s.li,{children:["Replace moment by Day.js - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12575",children:"#12575"})]}),"\n",(0,i.jsxs)(s.li,{children:["Server common scripts - webpack profile replaced by webapp ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/13196",children:"#13196"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Related to backend:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Protect user api and create a filtered user api for relationships - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12374",children:"#12374"})]}),"\n",(0,i.jsxs)(s.li,{children:["Springfox 3 upgrade - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12133",children:"#12133"})," and ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/jhipster/pull/764",children:"jhipster/jhipster#764"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"swagger"})," maven profile becomes ",(0,i.jsx)(s.code,{children:"api-docs"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"jhipster.swagger"})," property becomes ",(0,i.jsx)(s.code,{children:"jhipster.api-docs"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"SwaggerCustomizer"})," becomes ",(0,i.jsx)(s.code,{children:"SpringfoxCustomizer"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"swaggerSpringfoxApiDocket"})," becomes ",(0,i.jsx)(s.code,{children:"openapiSpringfoxApiDocket"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"swaggerSpringfoxManagementDocket"})," becomes ",(0,i.jsx)(s.code,{children:"openAPISpringfoxManagementDocket"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["All generated Gateways are Reactive instead of Spring MVC - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/13855",children:"#13855"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Zuul is replaced by Spring Cloud Gateway"}),"\n",(0,i.jsx)(s.li,{children:"Ribbon is replaced by Spring Cloud Load Balancer"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Add id to PUT request - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/14139",children:"#14139"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Entities:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Change relationship table name - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/11025",children:"#11025"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"most-important-new-features-and-upgrades",children:"Most important new features and upgrades"}),"\n",(0,i.jsx)(s.p,{children:"New features"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Vue.js support - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12064",children:"#12064"})]}),"\n",(0,i.jsxs)(s.li,{children:["Cypress support - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12307",children:"#12307"})]}),"\n",(0,i.jsx)(s.li,{children:"JDL Studio V2"}),"\n",(0,i.jsxs)(s.li,{children:["JHipster Control Center - See the ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/jhipster-control-center",children:"project"})]}),"\n",(0,i.jsxs)(s.li,{children:["Prettier for Java - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12109",children:"#12109"})]}),"\n",(0,i.jsxs)(s.li,{children:["Angular CLI support - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/10539",children:"#10539"})]}),"\n",(0,i.jsxs)(s.li,{children:["Snyk support - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12441",children:"#12441"})]}),"\n",(0,i.jsxs)(s.li,{children:["Add support to --pk-type - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/13296",children:"#13296"})]}),"\n",(0,i.jsxs)(s.li,{children:["Add support to @MapstructExpression - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/13195",children:"#13195"})]}),"\n",(0,i.jsxs)(s.li,{children:["Support Neo4j with k8s subgenerator - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/13548",children:"#13548"})]}),"\n",(0,i.jsxs)(s.li,{children:["NPM 7 - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/13060",children:"#13060"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Entities"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["add support for custom ids - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/13258",children:"#13258"})]}),"\n",(0,i.jsxs)(s.li,{children:["Incremental Liquibase - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12178",children:"#12178"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Improvements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Angular 11 - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/13035",children:"#13035"})]}),"\n",(0,i.jsx)(s.li,{children:"Blueprint improvement"}),"\n",(0,i.jsx)(s.li,{children:"Webflux improvement"}),"\n",(0,i.jsxs)(s.li,{children:["Spring Boot 2.4 - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/13551",children:"#13551"})]}),"\n",(0,i.jsxs)(s.li,{children:["Java 11 by default - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12021",children:"#12021"})]}),"\n",(0,i.jsxs)(s.li,{children:["PostgreSQL as default database - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/11736",children:"#11736"})]}),"\n",(0,i.jsxs)(s.li,{children:["IntegrationTest annotation - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12460",children:"#12460"})]}),"\n",(0,i.jsxs)(s.li,{children:["Annotation to detect generated files - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12459",children:"#12459"})]}),"\n",(0,i.jsxs)(s.li,{children:["Remove system and anonymoususer - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/13043",children:"#13043"})]}),"\n",(0,i.jsxs)(s.li,{children:["Docker-Compose v3 - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12428",children:"#12428"})]}),"\n",(0,i.jsxs)(s.li,{children:["Typescript 4 - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12435",children:"#12435"})]}),"\n",(0,i.jsxs)(s.li,{children:["Webpack 5 for React and Vue - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/13615",children:"#13615"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Refactoring"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["JHipster library, with ",(0,i.jsx)(s.code,{children:"tech.jhipster"})," as package name - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12854",children:"#12854"})]}),"\n",(0,i.jsxs)(s.li,{children:["JHipster Core is merged with generator-jhipster - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/11694",children:"#11694"})]}),"\n",(0,i.jsxs)(s.li,{children:["ng-jhipster is merged with generator-jhipster - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/12909",children:"#12909"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Removed"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Removed audit page - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12024",children:"#12024"})]}),"\n",(0,i.jsxs)(s.li,{children:["Yarn support dropped - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12134",children:"#12134"})]}),"\n",(0,i.jsxs)(s.li,{children:["Remove deprecated JHipster Console (ELK) - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/pull/12414",children:"#12414"})]}),"\n",(0,i.jsxs)(s.li,{children:["UAA support dropped - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/13081",children:"#13081"})]}),"\n",(0,i.jsxs)(s.li,{children:["Traefik support dropped - ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues/14233",children:"#14233"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"closed-tickets-and-merged-pull-requests",children:"Closed tickets and merged pull requests"}),"\n",(0,i.jsxs)(s.p,{children:["As always, ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?q=is%3Aclosed+milestone%3A7.0.0",children:"you can check all closed tickets and merged pull requests here"})}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Automatic upgrade"})}),"\n",(0,i.jsxs)(s.p,{children:["For an automatic upgrade, use the ",(0,i.jsx)(s.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"})," on an existing application:"]}),"\n",(0,i.jsx)(s.p,{children:"Upgrade your version of JHipster:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,i.jsx)(s.p,{children:"And then run the upgrade sub-generator:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"jhipster upgrade\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Manual upgrades"})}),"\n",(0,i.jsx)(s.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"npm update -g generator-jhipster\n"})}),"\n",(0,i.jsxs)(s.p,{children:["If you have an existing project, it will still use the JHipster version with which it was generated.\nTo upgrade your project, you must first delete its ",(0,i.jsx)(s.code,{children:"node_modules"})," folder and then run:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"jhipster\n"})}),"\n",(0,i.jsx)(s.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"jhipster --with-entities\n"})}),"\n",(0,i.jsxs)(s.p,{children:["You can also update your entities one-by-one by running again the entity sub-generator, for example if your entity is named ",(0,i.jsx)(s.em,{children:"Foo"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"jhipster entity Foo\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Tips"})}),"\n",(0,i.jsx)(s.p,{children:"To generate your project with incremental Liquibase changelogs, you should use:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"jhipster --incremental-changelog\n"})}),"\n",(0,i.jsxs)(s.p,{children:["To generate your project with ",(0,i.jsx)(s.code,{children:"@GeneratedByJHipster"})," annotation in your Java classes, you should use:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"jhipster --with-generated-flag\n"})}),"\n",(0,i.jsx)(s.h2,{id:"help-and-bugs",children:"Help and bugs"}),"\n",(0,i.jsx)(s.p,{children:"If you find any issue with this release, don't hesitate to:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Add a bug on our ",(0,i.jsx)(s.a,{href:"https://github.com/jhipster/generator-jhipster/issues?state=open",children:"bug tracker"})]}),"\n",(0,i.jsxs)(s.li,{children:["Post a question on ",(0,i.jsx)(s.a,{href:"http://stackoverflow.com/tags/jhipster/info",children:"Stack Overflow"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"If the issue you have is an urgent bug or security issue, please:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Contact ",(0,i.jsx)(s.a,{href:"https://twitter.com/jhipster",children:"@jhipster"})," on Twitter"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>h,x:()=>l});var i=r(96540);const t={},n=i.createContext(t);function h(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:h(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);