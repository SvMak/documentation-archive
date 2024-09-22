"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[9074],{18627:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=i(74848),r=i(28453);const s={title:"JHipster Control Center",slug:"/jhipster-control-center/",last_update:{date:new Date("2020-10-20T00:00:00.000Z")}},o=void 0,c={id:"microservices/jhipster-control-center",title:"JHipster Control Center",description:"Overview",source:"@site/docs/microservices/jhipster-control-center.mdx",sourceDirName:"microservices",slug:"/jhipster-control-center/",permalink:"/documentation-archive/v8.7.1/jhipster-control-center/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/microservices/jhipster-control-center.mdx",tags:[],version:"current",lastUpdatedAt:1603152e6,frontMatter:{title:"JHipster Control Center",slug:"/jhipster-control-center/",last_update:{date:"2020-10-20T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Microservices in production",permalink:"/documentation-archive/v8.7.1/microservices-in-production/"},next:{title:"Official blueprints",permalink:"/documentation-archive/v8.7.1/modules/official-blueprints/"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"Specific Spring profiles",id:"specific-spring-profiles",level:2},{value:"Installation",id:"installation",level:2},{value:"Running locally",id:"running-locally",level:3},{value:"Step 1: Run server used by Spring Cloud discovery backend",id:"step-1-run-server-used-by-spring-cloud-discovery-backend",level:3},{value:"Step 2: Choose your authentication profile",id:"step-2-choose-your-authentication-profile",level:3},{value:"Step 3: Run the cloned project",id:"step-3-run-the-cloned-project",level:3},{value:"Running from Docker",id:"running-from-docker",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Authentication mechanism",id:"authentication-mechanism",level:2},{value:"<em><strong>JWT</strong></em>",id:"jwt",level:4},{value:"<em><strong>OAuth2</strong></em>",id:"oauth2",level:4},{value:"Features",id:"features",level:2},{value:"<em><strong>Instances</strong></em>",id:"instances",level:3},{value:"<em><strong>Metrics</strong></em>",id:"metrics",level:3},{value:"<em><strong>Health</strong></em>",id:"health",level:3},{value:"<em><strong>Configuration</strong></em>",id:"configuration",level:3},{value:"<em><strong>Logs</strong></em>",id:"logs",level:3},{value:"<em><strong>Logfile</strong></em>",id:"logfile",level:3},{value:"<em><strong>API</strong></em>",id:"api",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"The main purpose of JHipster Control Center is to monitor and manage applications."}),"\n",(0,t.jsxs)(n.p,{children:["All its features are packaged into one external application with a modern Vue user interface. Its source code is available on GitHub under the JHipster organization at ",(0,t.jsx)(n.a,{href:"https://github.com/jhipster/jhipster-control-center",children:"jhipster/jhipster-control-center"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(57763).A+"",width:"916",height:"450"})}),"\n",(0,t.jsx)(n.h2,{id:"specific-spring-profiles",children:"Specific Spring profiles"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["The Control Center uses the usual JHipster ",(0,t.jsx)(n.code,{children:"dev"})," and ",(0,t.jsx)(n.code,{children:"prod"})," Spring profiles. But, to work properly, it has to be started with a spring profile corresponding to a spring cloud discovery backend."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eureka"}),": Connect to an Eureka server and fetch its registered instances, configured in application-eureka.yml"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"consul"}),": Connect to a Consul server and fetch its registered instances, configured in application-consul.yml"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"static"}),": Uses a static list of instances provided as properties, configured in application-static.yml"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kubernetes"}),": Configured in application-kubernetes.yml"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is very useful for microservices architectures: this is how the Control Center know which microservices are available, and which instances are up."}),"\n",(0,t.jsxs)(n.p,{children:["For all applications, including monoliths, this is how the Hazelcast distributed cache can automatically scale, see ",(0,t.jsx)(n.a,{href:"/using-cache/",children:"the Hazelcast cache documentation"})]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.h3,{id:"running-locally",children:"Running locally"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"step-1-run-server-used-by-spring-cloud-discovery-backend",children:"Step 1: Run server used by Spring Cloud discovery backend"}),"\n",(0,t.jsxs)(n.p,{children:["Eureka and Consul docker-compose files exist under src/main/docker to ease testing the project (see ",(0,t.jsx)(n.a,{href:"#specific-spring-profiles",children:"specific spring profiles"}),")."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["for Consul: run ",(0,t.jsx)(n.code,{children:"docker-compose -f src/main/docker/consul.yml up -d"})]}),"\n",(0,t.jsxs)(n.li,{children:["for Eureka: run ",(0,t.jsx)(n.code,{children:"docker-compose -f src/main/docker/jhipster-registry.yml up -d"})]}),"\n",(0,t.jsxs)(n.li,{children:["for Kubernetes : see ",(0,t.jsx)(n.a,{href:"https://www.jhipster.tech/kubernetes/#deploying-to-kubernetes",children:"kubernetes documentation"})]}),"\n",(0,t.jsx)(n.li,{children:"Otherwise, to use a static list of instances, you can directly go to the next step."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"step-2-choose-your-authentication-profile",children:"Step 2: Choose your authentication profile"}),"\n",(0,t.jsxs)(n.p,{children:["There is 2 types of authentication (see ",(0,t.jsx)(n.a,{href:"#authentication-mechanism",children:"authentication mechanism"}),"):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JWT: This is the default authentication, if you choose this one, you have to do nothing."}),"\n",(0,t.jsxs)(n.li,{children:["OAuth2: To use OAuth2 authentication, you have to launch Keycloak. Run ",(0,t.jsx)(n.code,{children:"docker-compose -f src/main/docker/keycloak.yml up -d"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"step-3-run-the-cloned-project",children:"Step 3: Run the cloned project"}),"\n",(0,t.jsx)(n.p,{children:"Run the Control Center according to the specific spring profiles you want, here are some examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For development with JWT and Consul, run ",(0,t.jsx)(n.code,{children:"./mvnw -Dspring.profiles.active=consul,dev"})]}),"\n",(0,t.jsxs)(n.li,{children:["For development with JWT and Eureka, run",(0,t.jsx)(n.code,{children:"./mvnw -Dspring.profiles.active=eureka,dev"})]}),"\n",(0,t.jsxs)(n.li,{children:["For development with JWT and a static list of instances, run ",(0,t.jsx)(n.code,{children:"./mvnw -Dspring.profiles.active=static,dev"})]}),"\n",(0,t.jsxs)(n.li,{children:["For development with OAuth2 and Consul, run ",(0,t.jsx)(n.code,{children:"./mvnw -Dspring.profiles.active=consul,dev,oauth2"})]}),"\n",(0,t.jsxs)(n.li,{children:["For development with OAuth2 and Eureka, run ",(0,t.jsx)(n.code,{children:"./mvnw -Dspring.profiles.active=eureka,dev,oauth2"})]}),"\n",(0,t.jsxs)(n.li,{children:["To just start in development run ",(0,t.jsx)(n.code,{children:"./mvnw"})," and in another terminal run ",(0,t.jsx)(n.code,{children:"npm start"})," for hot reload of client side code"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"running-from-docker",children:"Running from Docker"}),"\n",(0,t.jsx)(n.p,{children:"A container image has been made available on Docker hub. To use it, run these commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"docker pull jhipster/jhipster-control-center"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"docker run -d --name jhcc -p 7419:7419 jhipster/jhipster-control-center:latest"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(n.p,{children:"This is a standard web application that connects to one or several JHipster applications through their management API endpoints. Those management endpoints can either be exposed on the standard API port (typically 8080, 8081, ...) or preferably on a dedicated management port (typically 9999) so that they are isolated from the outside world."}),"\n",(0,t.jsxs)(n.p,{children:["The Control Center use ",(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/",children:"Spring Cloud Gateway"})," for routing APIs and Spring Cloud LoadBalancer to provide client-side load-balancing in calls to another microservice (Ribbons is disabled by default to use implementation of load balancing by Spring Cloud LoadBalancer)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(47565).A+"",width:"612",height:"311"})}),"\n",(0,t.jsx)(n.h2,{id:"authentication-mechanism",children:"Authentication mechanism"}),"\n",(0,t.jsx)(n.p,{children:"In order to access to your applications, the JHipster Control Center use a specific security mechanism depending on the profile."}),"\n",(0,t.jsx)(n.h4,{id:"jwt",children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"JWT"})})}),"\n",(0,t.jsx)(n.p,{children:"This is a custom JHipster implementation. The JWT key used to sign the request should be the same for the applications and the Control Center: as by default the Control Center configures applications through Spring Cloud Config, this should work out-of-the-box, as it will send the same key to all applications."}),"\n",(0,t.jsx)(n.h4,{id:"oauth2",children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"OAuth2"})})}),"\n",(0,t.jsx)(n.p,{children:"This profile use a third-party authorization - authentication server like Keycloak (or Okta soon). The Control Center will use the OAuth2 protocol to generate a session in Keycloak when you connect to the Control Center."}),"\n",(0,t.jsxs)(n.p,{children:["Then, our security configuration, in Oauth2SecurityConfiguration.java, will use Spring Security's filter chain to get an authorization from Keycloak ang generate a Spring's Principal (current user) with ",(0,t.jsx)(n.code,{children:"http.oauth2Login()"}),". Afterwards, Spring Security's filter chain will apply ",(0,t.jsx)(n.code,{children:"http.oauth2ResourceServer().jwt().jwtAuthenticationConverter(jwtAuthenticationConverter())"})," to get an authentication with his roles. With this way, we can change our provider (Keycloak, Okta, etc.) easly."]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsx)(n.h3,{id:"instances",children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Instances"})})}),"\n",(0,t.jsx)(n.p,{children:"The JHipster Control Center provides a list of application's instances. As soon as an application registers on a server (consul or eureka), it will become available in the list."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(67274).A+"",width:"1430",height:"439"})}),"\n",(0,t.jsx)(n.h3,{id:"metrics",children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Metrics"})})}),"\n",(0,t.jsx)(n.p,{children:"The metrics page uses Micrometer to give a detailed view of the application performance."}),"\n",(0,t.jsx)(n.p,{children:"It gives metrics on:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the JVM"}),"\n",(0,t.jsx)(n.li,{children:"HTTP requests"}),"\n",(0,t.jsx)(n.li,{children:"cache usage"}),"\n",(0,t.jsx)(n.li,{children:"database connection pool"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By clicking on the Expand button next to the JVM thread metrics, you will get a stacktrace of the running application, which is very useful to find out blocked threads."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(25).A+"",width:"1418",height:"721"})}),"\n",(0,t.jsx)(n.h3,{id:"health",children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Health"})})}),"\n",(0,t.jsx)(n.p,{children:"The health page uses Spring Boot Actuator's health endpoint to give health information on various parts of the application."}),"\n",(0,t.jsx)(n.p,{children:"Many health checks are provided out-of-the-box by Spring Boot Actuator, and you can add application-specific health checks."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(63206).A+"",width:"1439",height:"720"})}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Configuration"})})}),"\n",(0,t.jsx)(n.p,{children:"The configuration page uses Spring Boot Actuator's configuration endpoint to give a full view of the Spring configuration of the current application."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(43896).A+"",width:"1426",height:"724"})}),"\n",(0,t.jsx)(n.h3,{id:"logs",children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Logs"})})}),"\n",(0,t.jsx)(n.p,{children:"The logs page allows to manage at runtime the Logback configuration of the running application."}),"\n",(0,t.jsx)(n.p,{children:"You can change the log level of Java package by clicking on a button, which is very convenient both in development and in production."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(449).A+"",width:"1427",height:"723"})}),"\n",(0,t.jsx)(n.h3,{id:"logfile",children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Logfile"})})}),"\n",(0,t.jsx)(n.p,{children:"The logfile page allows to see at runtime the log of the running application. By default it is disabled, you need to configure it. This message is display if the logfile is disabled:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"No available logfile. Please note that it is not available by default, you need to set up the Spring Boot properties below! \nPlease check:\n - if the microservice is up\n - if these properties are set: \n     - logging.file.path\n     - logging.file.name (to avoid using the same spring.log)\n\nSee:\n - https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-endpoints.html\n - https://docs.spring.io/spring-boot/docs/current/reference/html/howto-logging.html\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(65278).A+"",width:"1413",height:"721"})}),"\n",(0,t.jsx)(n.h3,{id:"api",children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"API"})})}),"\n",(0,t.jsx)(n.p,{children:"The API page allows to see all API documentation of your applications and test their endpoints through a single Swagger UI frame."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(52382).A+"",width:"1407",height:"868"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},57763:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/jhipster-control-center-animation-681ea173f2f40df0495b9e4d0171ef61.gif"},52382:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/jhipster-control-center-api-0af45faf6a6825995eb97a232812d92d.png"},47565:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/jhipster-control-center-architecture-98d790615fc1cd139a277225779242a3.png"},43896:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/jhipster-control-center-configuration-577594141542fb01a8545849add6fd41.png"},63206:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/jhipster-control-center-health-377ea451957eef63290cf00225a51d09.png"},67274:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/jhipster-control-center-instances-26943bb720ac1ea08ae645c955f00ce7.png"},65278:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/jhipster-control-center-logfile-dcae996257379bb02fb91f35a9226bba.png"},449:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/jhipster-control-center-logs-c2ab705fb2411c05b6976402867bfe61.png"},25:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/jhipster-control-center-metrics-496631985542f486992a6cb23211161a.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);