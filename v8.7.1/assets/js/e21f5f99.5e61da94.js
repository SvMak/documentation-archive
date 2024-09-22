"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4004],{42620:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=o(74848),i=o(28453);const r={title:"Consul",slug:"/consul/",last_update:{date:new Date("2017-05-03T00:00:00.000Z")}},s=void 0,a={id:"microservices/consul",title:"Consul",description:"Consul overview",source:"@site/docs/microservices/consul.mdx",sourceDirName:"microservices",slug:"/consul/",permalink:"/documentation-archive/v8.7.1/consul/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/microservices/consul.mdx",tags:[],version:"current",lastUpdatedAt:14937696e5,frontMatter:{title:"Consul",slug:"/consul/",last_update:{date:"2017-05-03T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"API Gateway",permalink:"/documentation-archive/v8.7.1/api-gateway/"},next:{title:"JHipster Registry",permalink:"/documentation-archive/v8.7.1/jhipster-registry/"}},l={},c=[{value:"Consul overview",id:"consul-overview",level:2},{value:"Architecture diagram",id:"architecture-diagram",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Application configuration with Consul",id:"application-configuration-with-consul",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"consul-overview",children:"Consul overview"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.consul.io/",children:"Consul"})," is used as the default service registry solution.\nCompared to Eureka it has a number of advantages:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"It is easier to operate in a multi-node cluster than Eureka."}),"\n",(0,n.jsx)(t.li,{children:"It favors consistency over availability so changes in the state of your cluster are propagated more quickly."}),"\n",(0,n.jsxs)(t.li,{children:["Consul service discovery can interoperate with existing applications through its ",(0,n.jsx)(t.a,{href:"https://www.consul.io/docs/agent/dns.html",children:"DNS interface"})," or ",(0,n.jsx)(t.a,{href:"https://www.consul.io/docs/agent/http.html",children:"HTTP API"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"architecture-diagram",children:"Architecture diagram"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Diagram",src:o(30807).A+"",width:"1024",height:"768"})}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,n.jsx)(t.p,{children:"To get started with developing applications that rely on a Consul registry, you can start a Consul instance in a docker container:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["run ",(0,n.jsx)(t.code,{children:"docker-compose -f src/main/docker/consul.yml up"})," to start a Consul server in ",(0,n.jsx)(t.code,{children:"dev"})," mode. Consul will then be available on port ",(0,n.jsx)(t.code,{children:"8500"})," of your Docker host, so if it runs on your machine it should be at ",(0,n.jsx)(t.a,{href:"http://127.0.0.1:8500/",children:"http://127.0.0.1:8500/"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can also use the ",(0,n.jsx)(t.a,{href:"/docker-compose/#generating-a-custom-docker-compose-configuration-for-multiple-applications",children:"Docker Compose subgenerator"})," to generate a docker configuration for several consul-enabled applications."]}),"\n",(0,n.jsx)(t.h2,{id:"application-configuration-with-consul",children:"Application configuration with Consul"}),"\n",(0,n.jsxs)(t.p,{children:["If you have chosen the Consul option when generating your JHipster microservice or gateway app, they will be automatically configured to retrieve their configuration from Consul's ",(0,n.jsx)(t.strong,{children:"Key/Value store"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The Key/Value (K/V) store can be modified using either its UI available at ",(0,n.jsx)(t.a,{href:"http://localhost:8500/v1/kv/",children:"http://localhost:8500/v1/kv/"})," or its ",(0,n.jsx)(t.a,{href:"https://www.consul.io/intro/getting-started/kv.html",children:"REST API"}),". However changes made this way are temporary and will be lost on Consul server/cluster shutdown.\nSo, in order to help you interact with the Key/Value store and manage your configuration as YAML files, the JHipster Team has developed a small tool: the ",(0,n.jsx)(t.a,{href:"https://github.com/jhipster/consul-config-loader",children:"consul-config-loader"}),".\nThe ",(0,n.jsx)(t.strong,{children:"consul-config-loader"})," is automatically configured when starting Consul from the ",(0,n.jsx)(t.code,{children:"consul.yml"})," docker-compose file but it can also be run as a standalone tool.\nIt can be run in two modes:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["a ",(0,n.jsx)(t.strong,{children:"dev"})," mode, where YAML files from the ",(0,n.jsx)(t.code,{children:"central-server-config"})," directory are automatically loaded into Consul. Moreover any change to this directory will be immediately synchronized with Consul."]}),"\n",(0,n.jsxs)(t.li,{children:["a ",(0,n.jsx)(t.strong,{children:"prod"})," mode, that uses Git2Consul to setup the YAML files contained in a Git repository as a configuration source for the Key/Value store."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Note that as with the JHipster Registry, your configuration files will need to be named ",(0,n.jsx)(t.code,{children:"appname-profile.yml"})," where appname and profile correspond to the application\u2019s name and profile of the service that you want to configure. For example, adding properties in a ",(0,n.jsx)(t.code,{children:"consulapp-prod.yml"})," file will set those properties only for the application named ",(0,n.jsx)(t.code,{children:"consulapp"})," started with a ",(0,n.jsx)(t.code,{children:"prod"})," profile. Moreover, properties defined in ",(0,n.jsx)(t.code,{children:"application.yml"})," will be set for all your applications."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},30807:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/microservices_architecture_detail.003-6614761d8041858756099ddcbfa80443.png"},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(96540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);