"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[9345],{79980:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var r=t(74848),s=t(28453);const c={title:"Doing microservices with JHipster",slug:"/microservices-architecture/",last_update:{date:new Date("2024-06-03T00:00:00.000Z")}},n="Doing microservices with JHipster",a={id:"microservices/microservices-architecture",title:"Doing microservices with JHipster",description:"Microservices vs Monolithic architecture",source:"@site/docs/microservices/microservices-architecture.mdx",sourceDirName:"microservices",slug:"/microservices-architecture/",permalink:"/documentation-archive/v8.7.1/microservices-architecture/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/microservices/microservices-architecture.mdx",tags:[],version:"current",lastUpdatedAt:17173728e5,frontMatter:{title:"Doing microservices with JHipster",slug:"/microservices-architecture/",last_update:{date:"2024-06-03T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Deploying to Kubernetes",permalink:"/documentation-archive/v8.7.1/kubernetes/"},next:{title:"API Gateway",permalink:"/documentation-archive/v8.7.1/api-gateway/"}},o={},h=[{value:"Microservices vs Monolithic architecture",id:"microservices-vs-monolithic-architecture",level:2},{value:"Microservices architecture overview",id:"microservices-architecture-overview",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"doing-microservices-with-jhipster",children:"Doing microservices with JHipster"})}),"\n",(0,r.jsx)(i.h2,{id:"microservices-vs-monolithic-architecture",children:"Microservices vs Monolithic architecture"}),"\n",(0,r.jsx)(i.p,{children:"The first question JHipster will ask you is the kind of application you want to generate. You have the choice between two architecture styles:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:'A "monolithic" architecture uses a single, one-size-fits-all application, which contains both the front-end code, and the back-end Spring Boot code.'}),"\n",(0,r.jsx)(i.li,{children:'A "microservices" architecture splits the front-end and the back-end, so that it\'s easier for your application to scale and survive infrastructure issues.'}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:'A "monolithic" application is much easier to work on, so if you don\'t have any specific requirements, this is the option we recommend, and our default option.'}),"\n",(0,r.jsx)(i.h2,{id:"microservices-architecture-overview",children:"Microservices architecture overview"}),"\n",(0,r.jsx)(i.p,{children:"The JHipster microservices architecture works in the following way:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["A ",(0,r.jsx)(i.a,{href:"/api-gateway/",children:"gateway"})," is a JHipster-generated application (using the microservice gateway type) designed to handle web traffic and serve an Angular, React, or Vue application. While you can have multiple gateways following the ",(0,r.jsx)(i.a,{href:"https://www.thoughtworks.com/insights/blog/bff-soundcloud",children:"Backends for Frontends pattern"}),", it's not required. The gateway is built on the Spring Cloud Gateway library and supports both MVC and WebFlux frameworks."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/consul/",children:"Consul"})," is a service discovery service, as well as a key/value store."]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.a,{href:"/jhipster-registry/",children:"JHipster Registry"})," is a runtime application on which all applications registers and get their configuration from. It also provides runtime monitoring dashboards. It can be used as an alternative to Consul. ",(0,r.jsx)(i.em,{children:"(deprecated)"})]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/creating-microservices/",children:"Microservices"})," are JHipster-generated applications (using application type ",(0,r.jsx)(i.code,{children:"microservice application"})," when you generate them), that handle REST requests. They are stateless, and several instances of them can be launched in parallel to handle heavy loads."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"This diagram illustrates a microservices architecture utilizing JHipster, incorporating key technologies such as Netflix OSS, Spring Cloud, and Docker. It features a gateway for handling web traffic and user authentication, microservices for backend operations, and comprehensive monitoring and logging with tools like OpenTelemetry, Elasticsearch, Logstash, and Kibana."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Diagram",src:t(69172).A+"",width:"1444",height:"939"})})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},69172:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/microservices_architecture_updated-30af4d7a248f5f41e5c8b5f4c6f7352c.png"},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>a});var r=t(96540);const s={},c=r.createContext(s);function n(e){const i=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(c.Provider,{value:i},e.children)}}}]);