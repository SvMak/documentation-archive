"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[6391],{80723:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=i(74848),o=i(28453);const s={title:"Profiles",slug:"/profiles/",last_update:{date:new Date("2014-11-26T00:00:00.000Z")}},l=void 0,d={id:"development/profiles",title:"Profiles",description:"JHipster comes with two Spring profiles:",source:"@site/docs/development/profiles.mdx",sourceDirName:"development",slug:"/profiles/",permalink:"/documentation-archive/v8.7.3/profiles/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/development/profiles.mdx",tags:[],version:"current",lastUpdatedAt:141696e7,frontMatter:{title:"Profiles",slug:"/profiles/",last_update:{date:"2014-11-26T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Using in development",permalink:"/documentation-archive/v8.7.3/development/"},next:{title:"Common application properties",permalink:"/documentation-archive/v8.7.3/common-application-properties/"}},t={},a=[{value:"By default, JHipster will use the <code>dev</code> profile",id:"by-default-jhipster-will-use-the-dev-profile",level:2},{value:"In production, JHipster has to run with the <code>prod</code> profile",id:"in-production-jhipster-has-to-run-with-the-prod-profile",level:2},{value:"Spring profiles switches",id:"spring-profiles-switches",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["JHipster comes with two ",(0,r.jsx)(n.a,{href:"http://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-profiles.html",children:"Spring profiles"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dev"})," for development: it focuses on ease of development and productivity"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"prod"})," for production: it focuses on performance and scalability"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Those profiles come in two different configurations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The Maven/Gradle profiles are used at build time. For example ",(0,r.jsx)(n.code,{children:"./mvnw -Pprod package"})," or ",(0,r.jsx)(n.code,{children:"./gradlew -Pprod bootJar"})," will package a production application."]}),"\n",(0,r.jsx)(n.li,{children:"The Spring profiles work at run time. Some Spring beans will behave differently, depending on the profile."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Spring profiles are set by Maven/Gradle, so we have a consistency between the two methods: you will have a ",(0,r.jsx)(n.code,{children:"prod"})," profile on Maven/Gradle and Spring at the same time."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Note:"})," Spring profiles are used to configure the JHipster application properties, so you should be interested in reading our ",(0,r.jsx)(n.a,{href:"/common-application-properties",children:"common application properties documentation"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"by-default-jhipster-will-use-the-dev-profile",children:["By default, JHipster will use the ",(0,r.jsx)(n.code,{children:"dev"})," profile"]}),"\n",(0,r.jsx)(n.p,{children:'If you run the application without Maven/Gradle, launch the "Application" class (you can probably run it directly from your IDE by right-clicking on it).'}),"\n",(0,r.jsxs)(n.p,{children:["If you run the application with Maven, run ",(0,r.jsx)(n.code,{children:"./mvnw"})," to use our Maven Wrapper, or ",(0,r.jsx)(n.code,{children:"mvn"})," to use your own Maven installation."]}),"\n",(0,r.jsxs)(n.p,{children:["If you run the application with Gradle, run ",(0,r.jsx)(n.code,{children:"./gradlew"})," to use our Gradle Wrapper, or ",(0,r.jsx)(n.code,{children:"gradle"})," to use your own Gradle installation."]}),"\n",(0,r.jsxs)(n.p,{children:["When using Angular 2+ and Maven if you need to do a clean run with webpack compilation enabled for ",(0,r.jsx)(n.code,{children:"dev"})," profile you can pass the ",(0,r.jsx)(n.code,{children:"webapp"})," param as below"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./mvnw -Pdev,webapp\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," Gradle automatically runs webpack compilation in ",(0,r.jsx)(n.code,{children:"dev"})," profile if front end has changed (only at start up, for live reload use ",(0,r.jsx)(n.code,{children:"npm start"}),")."]}),"\n",(0,r.jsxs)(n.h2,{id:"in-production-jhipster-has-to-run-with-the-prod-profile",children:["In production, JHipster has to run with the ",(0,r.jsx)(n.code,{children:"prod"})," profile"]}),"\n",(0,r.jsx)(n.p,{children:"You can run JHipster in production directly using Maven or Gradle:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With Maven, run ",(0,r.jsx)(n.code,{children:"./mvnw -Pprod"})," (or ",(0,r.jsx)(n.code,{children:"mvn -Pprod"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["With Gradle, run ",(0,r.jsx)(n.code,{children:"./gradlew -Pprod"})," (or ",(0,r.jsx)(n.code,{children:"gradle -Pprod"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you want to package your application as an executable WAR file, you should provide Maven or Gradle with a profile. E.g.,:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With Maven, run ",(0,r.jsx)(n.code,{children:"./mvnw -Pprod package"})," (or ",(0,r.jsx)(n.code,{children:"mvn -Pprod package"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["With Gradle, run ",(0,r.jsx)(n.code,{children:"./gradlew -Pprod bootJar"})," (or ",(0,r.jsx)(n.code,{children:"gradle -Pprod bootJar"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When you run your production application from a WAR file, the default is to use the same profile(s) as used during packaging. If you want to override this, you can explicitly provide an alternative in VM argument:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"java -jar jhipster-0.0.1-SNAPSHOT.jar --spring.profiles.active=...\n"})}),"\n",(0,r.jsx)(n.h2,{id:"spring-profiles-switches",children:"Spring profiles switches"}),"\n",(0,r.jsx)(n.p,{children:"JHipster comes with three additional profiles used as switches:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api-docs"})," to enable swagger"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"no-liquibase"})," to disable liquibase"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tls"})," to enable TLS security and use the HTTP/2 protocol (see ",(0,r.jsx)(n.a,{href:"/tls",children:"the TLS and HTTP/2 documentation"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["These can be used along with both the ",(0,r.jsx)(n.code,{children:"dev"})," and ",(0,r.jsx)(n.code,{children:"prod"})," profiles. Please note that by default, the ",(0,r.jsx)(n.code,{children:"api-docs"})," profile is not enabled in ",(0,r.jsx)(n.code,{children:"prod"})," and enabled in ",(0,r.jsx)(n.code,{children:"dev"})," by setting the ",(0,r.jsx)(n.code,{children:"spring.profiles.group.dev"})," profile group property in ",(0,r.jsx)(n.code,{children:"application.yml"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"api-docs"}),", ",(0,r.jsx)(n.code,{children:"no-liquibase"}),", ",(0,r.jsx)(n.code,{children:"tls"})," are only used at runtime:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In your IDE, run your main application class with ",(0,r.jsx)(n.code,{children:"spring.profiles.active=dev,no-liquibase"})," (please note you need to include the ",(0,r.jsx)(n.code,{children:"dev"})," or ",(0,r.jsx)(n.code,{children:"prod"})," profile explicitly)"]}),"\n",(0,r.jsxs)(n.li,{children:["With a packaged application: ",(0,r.jsx)(n.code,{children:"./java -jar jhipster-0.0.1-SNAPSHOT.war --spring.profiles.active=prod,no-liquibase"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"With Maven, you can also use those profiles directly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./mvnw -Pprod,api-docs,no-liquibase\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./mvnw -Pdev,no-liquibase\n"})}),"\n",(0,r.jsx)(n.p,{children:"With Gradle, you can also use those profiles directly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./gradlew -Pprod -Papi-docs -Pno-liquibase\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./gradlew -Pno-liquibase\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var r=i(96540);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);