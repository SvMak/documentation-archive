"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[9371],{414:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=t(74848),s=t(28453);const r={title:"Creating microservices",slug:"/creating-microservices/",last_update:{date:new Date("2024-06-03T00:00:00.000Z")}},a=void 0,o={id:"microservices/creating-microservices",title:"Creating microservices",description:"Microservices are a type of JHipster application, that have no front-end (the Angular front-end must be generated on a gateway), and which work with the Consul to be configured, discovered, and managed.",source:"@site/docs/microservices/creating-microservices.mdx",sourceDirName:"microservices",slug:"/creating-microservices/",permalink:"/documentation-archive/v8.7.2/creating-microservices/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/microservices/creating-microservices.mdx",tags:[],version:"current",lastUpdatedAt:17173728e5,frontMatter:{title:"Creating microservices",slug:"/creating-microservices/",last_update:{date:"2024-06-03T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"JHipster Registry",permalink:"/documentation-archive/v8.7.2/jhipster-registry/"},next:{title:"Microservices in production",permalink:"/documentation-archive/v8.7.2/microservices-in-production/"}},c={},l=[{value:"Entities in a microservices architecture",id:"entities-in-a-microservices-architecture",level:2},{value:"Generating entities",id:"generating-entities",level:2},{value:"Microfrontends",id:"microfrontends",level:2},{value:"Distributed caching with Hazelcast",id:"distributed-caching-with-hazelcast",level:2},{value:"Microservices with no database",id:"microservices-with-no-database",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Microservices are a type of JHipster application, that have no front-end (the Angular front-end must be generated on a ",(0,n.jsx)(i.a,{href:"/api-gateway/",children:"gateway"}),"), and which work with the ",(0,n.jsx)(i.a,{href:"/consul/",children:"Consul"})," to be configured, discovered, and managed."]}),"\n",(0,n.jsx)(i.h2,{id:"entities-in-a-microservices-architecture",children:"Entities in a microservices architecture"}),"\n",(0,n.jsx)(i.p,{children:"The User entity is not generated in a microservice when using JWT or DTO. When OAuth 2.0 is used, there is a mechanism in the microservice to extract user data from the token and save it to the microservice's database. So for JWT and DTO you can not use and/or define a relationship with the User entity because it exists only in the gateway's database."}),"\n",(0,n.jsx)(i.p,{children:"Relationships between entities from different microservices are not supported."}),"\n",(0,n.jsx)(i.h2,{id:"generating-entities",children:"Generating entities"}),"\n",(0,n.jsxs)(i.p,{children:["For entities in a microfrontend see ",(0,n.jsx)(i.a,{href:"#microfrontends",children:"Microfrontends"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Using the ",(0,n.jsx)(i.a,{href:"/creating-an-entity/",children:"entity sub-generator"})," works a little bit differently in a microservices architecture, as the front-end and the back-end codes are not located in the same application."]}),"\n",(0,n.jsxs)(i.p,{children:["First, generate the entities in the microservice applications: this works as usual, and you can also use ",(0,n.jsx)(i.a,{href:"/jhipster-uml/",children:"JHipster UML"})," or ",(0,n.jsx)(i.a,{href:"https://start.jhipster.tech/jdl-studio/",children:"JDL Studio"})," to help you generate complex entities and relationships. As microservices don't have a front-end, no UI code will be generated."]}),"\n",(0,n.jsx)(i.p,{children:"Then, on the gateway(s), run the entity sub-generator again. A new question will appear at the beginning, which is specific to gateways:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"You will have the choice either to generate a new entity normally (a gateway is also a standard JHipster application, so this would work like for a monolith application), or use an existing JHipster configuration from a microservice."}),"\n",(0,n.jsx)(i.li,{children:"If you choose to generate the entity from a microservice, you will need to enter the path to this microservice on your local computer, and then JHipster will generate the front-end code on the gateway."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"microfrontends",children:"Microfrontends"}),"\n",(0,n.jsxs)(i.p,{children:["JHipster's microfrontends implementation uses ",(0,n.jsx)(i.a,{href:"https://module-federation.io/",children:"Module Federation"})," and allows the frontend entities implementation to be located in the microservice instead of in the gateway."]}),"\n",(0,n.jsx)(i.p,{children:"A gateway is still required to be running in development due to the authentication process."}),"\n",(0,n.jsxs)(i.p,{children:["You can find more information about starting microfrontends using gateway or alone in the generated README. See ",(0,n.jsx)(i.a,{href:"https://github.com/mraible/jhipster-micro-frontends",children:"jhipster-micro-frontends"})," for an example."]}),"\n",(0,n.jsx)(i.h2,{id:"distributed-caching-with-hazelcast",children:"Distributed caching with Hazelcast"}),"\n",(0,n.jsx)(i.p,{children:"If your application uses an SQL database, JHipster proposes a different 2nd-level caching solution with microservices:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"JHipster's default caching solution with microservices is Hazelcast"}),"\n",(0,n.jsx)(i.li,{children:"You can still choose Ehcache (the default solution with monolith applications) or Caffeine or choose not to use a cache at all"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"This solution is the default with microservices, as in this architecture the idea is that you will scale your services:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"with a local cache, your service instances won't have a synchronized cache, resulting in incorrect data"}),"\n",(0,n.jsx)(i.li,{children:"without any cache, the burden of scaling will be pushed to the database, which won't be very good at it (unless you use our Cassandra option)"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Using Hazelcast with microservices will result in a specific configuration:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"At start-up, your application will connect to the Service Registry to find if other instances of the same service are running"}),"\n",(0,n.jsxs)(i.li,{children:["With the ",(0,n.jsx)(i.code,{children:"dev"})," profile, JHipster will create a cluster of those instances on localhost (",(0,n.jsx)(i.code,{children:"127.0.0.1"}),"),  using a different port per instance. By default, the Hazelcast port is ",(0,n.jsx)(i.code,{children:"your application's port + 5701"})," (so if your application's port is ",(0,n.jsx)(i.code,{children:"8081"}),", Hazelcast will use port ",(0,n.jsx)(i.code,{children:"13782"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:["With the ",(0,n.jsx)(i.code,{children:"prod"})," profile, JHipster will create a cluster with all the other nodes it finds, using the default Hazelcast port (",(0,n.jsx)(i.code,{children:"5701"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"microservices-with-no-database",children:"Microservices with no database"}),"\n",(0,n.jsx)(i.p,{children:"Microservices applications can be created without a database. This is because microservices are small and do not have user-management code."}),"\n",(0,n.jsx)(i.p,{children:"A microservice without a database is very small, and could be used to connect to a specific back-end like a legacy system or serve as a proxy to other services outside your realm."})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var n=t(96540);const s={},r=n.createContext(s);function a(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);