"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[8081],{39499:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(74848),n=t(28453);const r={title:"The JHipster API Gateway",slug:"/api-gateway/",last_update:{date:new Date("2024-06-03T00:00:00.000Z")}},a="The JHipster API Gateway",o={id:"microservices/api-gateway",title:"The JHipster API Gateway",description:"JHipster can generate API gateways. A gateway is a normal JHipster application, so you can use the usual JHipster options and development workflows on that project, but it also acts as the entrance to your microservices. More specifically, it provides HTTP routing and load balancing, quality of service, security and API documentation for all microservices.",source:"@site/docs/microservices/api-gateway.mdx",sourceDirName:"microservices",slug:"/api-gateway/",permalink:"/documentation-archive/v8.7.3/api-gateway/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/microservices/api-gateway.mdx",tags:[],version:"current",lastUpdatedAt:17173728e5,frontMatter:{title:"The JHipster API Gateway",slug:"/api-gateway/",last_update:{date:"2024-06-03T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/documentation-archive/v8.7.3/microservices-architecture/"},next:{title:"Consul",permalink:"/documentation-archive/v8.7.3/consul/"}},c={},l=[{value:"Architecture diagram",id:"architecture-diagram",level:2},{value:"HTTP requests routing using the gateway",id:"http-requests-routing-using-the-gateway",level:2},{value:"Security",id:"security",level:2},{value:"JWT (JSON Web Token)",id:"jwt-json-web-token",level:3},{value:"OpenID Connect",id:"openid-connect",level:3},{value:"Automatic documentation",id:"automatic-documentation",level:2},{value:"Rate limiting",id:"rate-limiting",level:2},{value:"Access control policy",id:"access-control-policy",level:2},{value:"Enabling TLS for Gateway Security",id:"enabling-tls-for-gateway-security",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"the-jhipster-api-gateway",children:"The JHipster API Gateway"})}),"\n",(0,s.jsx)(i.p,{children:"JHipster can generate API gateways. A gateway is a normal JHipster application, so you can use the usual JHipster options and development workflows on that project, but it also acts as the entrance to your microservices. More specifically, it provides HTTP routing and load balancing, quality of service, security and API documentation for all microservices."}),"\n",(0,s.jsx)(i.h2,{id:"architecture-diagram",children:"Architecture diagram"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Diagram",src:t(57294).A+"",width:"1444",height:"860"})}),"\n",(0,s.jsx)(i.h2,{id:"http-requests-routing-using-the-gateway",children:"HTTP requests routing using the gateway"}),"\n",(0,s.jsx)(i.p,{children:"When the gateways and the microservices are launched, they will register themselves in the Consul service registry."}),"\n",(0,s.jsxs)(i.p,{children:["The gateway will automatically proxy all requests to the microservices, using their application name: for example, when microservices ",(0,s.jsx)(i.code,{children:"app1"})," is registered, it is available on the gateway on the ",(0,s.jsx)(i.code,{children:"/services/app1"})," URL."]}),"\n",(0,s.jsxs)(i.p,{children:["For example, if your gateway is running on ",(0,s.jsx)(i.code,{children:"localhost:8080"}),", you could point to ",(0,s.jsx)(i.a,{href:"http://localhost:8080/services/app1/api/foos",children:"http://localhost:8080/services/app1/api/foos"})," to\nget the ",(0,s.jsx)(i.code,{children:"foos"})," resource served by microservice ",(0,s.jsx)(i.code,{children:"app1"}),". If you're trying to do this with your Web browser, don't forget REST resources are secured by default in JHipster, so you need to send the correct JWT header (see the point on security below), or remove the security on those URLs in the microservice's ",(0,s.jsx)(i.code,{children:"SecurityConfiguration"})," class."]}),"\n",(0,s.jsxs)(i.p,{children:["If several instances of the same service are running, the gateway will get those instances from the Service Registry and load balance HTTP requests using ",(0,s.jsx)(i.a,{href:"https://www.consul.io/use-cases/load-balancing",children:"Consul"}),". You can access a detailed list of running microservices, including their IP addresses, Git version, status, and more, at ",(0,s.jsx)(i.a,{href:"http://localhost:8080/api/gateway/routes",children:"http://localhost:8080/api/gateway/routes"}),". This endpoint is secured for protection."]}),"\n",(0,s.jsx)(i.p,{children:'Each gateway has a specific "admin > gateway" menu, where opened HTTP routes and microservices instances can be monitored.'}),"\n",(0,s.jsx)(i.h2,{id:"security",children:"Security"}),"\n",(0,s.jsxs)(i.p,{children:["Standard JHipster security options are detailed on ",(0,s.jsx)(i.a,{href:"/security/",children:"this security documentation page"}),". However, securing a microservice architecture has some specific tunings and options, which are detailed here."]}),"\n",(0,s.jsx)(i.h3,{id:"jwt-json-web-token",children:"JWT (JSON Web Token)"}),"\n",(0,s.jsx)(i.p,{children:"JWT (JSON Web Token) is an industry standard, easy-to-use method for securing applications in a microservices architecture."}),"\n",(0,s.jsxs)(i.p,{children:["JHipster uses the ",(0,s.jsx)(i.a,{href:"https://github.com/jwtk/jjwt",children:"JJWT library"}),", provided by Okta, for implementing JWT."]}),"\n",(0,s.jsx)(i.p,{children:"Tokens are generated by the gateway, and sent to the underlying microservices: as they share a common secret key, microservices are able to validate the token, and authenticate users using that token."}),"\n",(0,s.jsx)(i.p,{children:"Those tokens are self-sufficient: they have both authentication and authorization information, so microservices do not need to query a database or an external system. This is important in order to ensure a scalable architecture."}),"\n",(0,s.jsx)(i.p,{children:"For security to work, a JWT secret token must be shared between all applications."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["For each application the default token is unique, and generated by JHipster. It is stored in the ",(0,s.jsx)(i.code,{children:".yo-rc.json"})," file."]}),"\n",(0,s.jsxs)(i.li,{children:["Tokens are configured with the ",(0,s.jsx)(i.code,{children:"jhipster.security.authentication.jwt.secret"})," key in the ",(0,s.jsx)(i.code,{children:"src/main/resources/config/application.yml"})," file."]}),"\n",(0,s.jsxs)(i.li,{children:["To share this key between all your applications, copy the key from your gateway to all the microservices, or share it using ",(0,s.jsx)(i.a,{href:"/consul/",children:"JHipster's specific configuration of the Consul K/V store"}),". This is one of the main reasons why people use those central configuration servers."]}),"\n",(0,s.jsx)(i.li,{children:"A good practice is to have a different key in development and production."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"openid-connect",children:"OpenID Connect"}),"\n",(0,s.jsxs)(i.p,{children:["JHipster provides OpenID Connect support, as detailed ",(0,s.jsx)(i.a,{href:"/security/#oauth-20-and-openid-connect",children:"in our OpenID Connect documentation"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["When selecting this option, you will use Keycloak by default, and you will probably want to run your complete microservice architecture using Docker Compose: be sure to read our ",(0,s.jsx)(i.a,{href:"/docker-compose/",children:"Docker Compose documentation"}),", and configure correctly your ",(0,s.jsx)(i.code,{children:"/etc/hosts"})," for Keycloak."]}),"\n",(0,s.jsx)(i.p,{children:"When using OpenID Connect, the JHipster gateway will send OAuth2 tokens to microservices, which will accept those tokens as they are also connected to Keycloak."}),"\n",(0,s.jsx)(i.p,{children:"Unlike JWT, those tokens are not self-sufficient, and should be stateful, which causes following issues:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["A performance issue in microservices: as it is very common to look for the current user's security information (otherwise we wouldn't be using any security option from the beginning), each microservice will call the OpenID Connect server to get that data. So in a normal setup, those calls will be made by each microservice, each time they get a request, and this will quickly cause a performance issue.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If you have selected a caching option (",(0,s.jsx)(i.a,{href:"/using-cache/",children:'here is the "Using a cache" documentation'}),") when generating your JHipster microservice, a specific ",(0,s.jsx)(i.code,{children:"CachedUserInfoTokenServices"})," Spring Bean will be generated, which will cache those calls. When properly tuned, this will remove the performance issue."]}),"\n",(0,s.jsxs)(i.li,{children:['If you want more information on this "user info" request, it is configured using the standard Spring Boot configuration key ',(0,s.jsx)(i.code,{children:"security.oauth2.resource.userInfoUri"})," in your ",(0,s.jsx)(i.code,{children:"src/main/resources/application.yml"})," configuration file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"automatic-documentation",children:"Automatic documentation"}),"\n",(0,s.jsx)(i.p,{children:"The gateway exposes the Swagger API definitions of the services it proxifies so you can benefit from all useful tools like Swagger UI and swagger-codegen."}),"\n",(0,s.jsx)(i.p,{children:'The "admin > API" menu of a gateway has a specific drop-down list, showing the gateway\'s API and all the APIs from the registered microservices.'}),"\n",(0,s.jsx)(i.p,{children:"Using this drop-down list, all microservices APIs are automatically documented, and testable from the gateway."}),"\n",(0,s.jsx)(i.p,{children:"When using a secured API, security tokens are automatically added to the Swagger UI interface, so all requests work out-of-the-box."}),"\n",(0,s.jsx)(i.h2,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,s.jsxs)(i.p,{children:["This is an advanced feature that uses ",(0,s.jsx)(i.a,{href:"https://github.com/vladimir-bukhtoyarov/bucket4j",children:"Bucket4j"})," and ",(0,s.jsx)(i.a,{href:"https://hazelcast.com/",children:"Hazelcast"})," to provide quality of service on microservices."]}),"\n",(0,s.jsx)(i.p,{children:"Gateways provide rate-limiting features, so the number of REST requests can be limited:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"by IP address (for anonymous users)"}),"\n",(0,s.jsx)(i.li,{children:"by user login (for logged-in users)"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["JHipster will then use ",(0,s.jsx)(i.a,{href:"https://github.com/vladimir-bukhtoyarov/bucket4j",children:"Bucket4j"})," and ",(0,s.jsx)(i.a,{href:"https://hazelcast.com/",children:"Hazelcast"})," to calculate request counts, and will send HTTP 429 (too many requests) errors when the limit is exceeded. The default limit per user is 100,000 API calls per hour."]}),"\n",(0,s.jsx)(i.p,{children:"This is an important feature, to protect a microservice architecture from being flooded by a specific user's requests."}),"\n",(0,s.jsx)(i.p,{children:"As the gateway secures the REST endpoints, it has full access to the user's security information, so it can be extended to provide specific rate limits depending on the user's security roles."}),"\n",(0,s.jsxs)(i.p,{children:["To enable rate limiting, open up the ",(0,s.jsx)(i.code,{children:"application-dev.yml"})," or ",(0,s.jsx)(i.code,{children:"application-prod.yml"})," file and set ",(0,s.jsx)(i.code,{children:"enabled"})," to ",(0,s.jsx)(i.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"jhipster:\n    gateway:\n        rate-limiting:\n            enabled: true\n"})}),"\n",(0,s.jsx)(i.p,{children:"Data is stored in Hazelcast, so it is possible to scale gateways as long as the Hazelcast distributed cache is configured, which should work out-of-the-box:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"All gateways have Hazelcast configured by default"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If you want to add more rules, or modify the existing rules, you need to code them in the ",(0,s.jsx)(i.code,{children:"RateLimitingFilter"})," class. Examples of modifications could be:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Lowering the limit of HTTP calls"}),"\n",(0,s.jsx)(i.li,{children:"Adding limits per minute or per day"}),"\n",(0,s.jsx)(i.li,{children:'Removing all limits for "admin" users'}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"access-control-policy",children:"Access control policy"}),"\n",(0,s.jsxs)(i.p,{children:["By default all registered microservices are available through the gateway. If you want to exclude a specific API from being exposed through the gateway, you can use the gateway's specific access control policy filter. It is configurable using the ",(0,s.jsx)(i.code,{children:"jhipster.gateway.authorized-microservices-endpoints"})," key in the ",(0,s.jsx)(i.code,{children:"application-*.yml"})," files:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"jhipster:\n    gateway:\n        authorized-microservices-endpoints: # Access Control Policy, if left empty for a route, all endpoints will be accessible\n            app1: /api,/v2/api-docs # recommended dev configuration\n"})}),"\n",(0,s.jsxs)(i.p,{children:["For example, if you only want the ",(0,s.jsx)(i.code,{children:"/api/foo"})," endpoint of microservice ",(0,s.jsx)(i.code,{children:"bar"})," to be available:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"jhipster:\n    gateway:\n        authorized-microservices-endpoints:\n            bar: /api/foo\n"})}),"\n",(0,s.jsx)(i.h2,{id:"enabling-tls-for-gateway-security",children:"Enabling TLS for Gateway Security"}),"\n",(0,s.jsxs)(i.p,{children:["By default, the gateway operates over unsecured HTTP. For production environments, it's recommended to enable TLS for enhanced security. To do this, uncomment the provided code snippet, under ",(0,s.jsx)(i.code,{children:"application-prod.yml"}),". This will utilize a self-signed TLS certificate located in ",(0,s.jsx)(i.code,{children:"config/tls"})," with the filename ",(0,s.jsx)(i.code,{children:"keystore.p12"}),", or you can specify your own keystore with a predefined password."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"server:\n    port: 443\n    ssl:\n      key-store: classpath:config/tls/keystore.p12\n        key-store-password: password\n        key-store-type: PKCS12\n          key-alias: selfsigned\n        # The ciphers suite enforce the security by deactivating some old and deprecated SSL cipher, this list was tested against SSL Labs (https://www.ssllabs.com/ssltest/)\n        ciphers: TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 ,TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 ,TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 ,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_DHE_RSA_WITH_AES_128_CBC_SHA256,TLS_DHE_RSA_WITH_AES_128_CBC_SHA,TLS_DHE_RSA_WITH_AES_256_CBC_SHA256,TLS_DHE_RSA_WITH_AES_256_CBC_SHA,TLS_RSA_WITH_AES_128_GCM_SHA256,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_256_CBC_SHA256,TLS_RSA_WITH_AES_128_CBC_SHA,TLS_RSA_WITH_AES_256_CBC_SHA,TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA,TLS_RSA_WITH_CAMELLIA_256_CBC_SHA,TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA,TLS_RSA_WITH_CAMELLIA_128_CBC_SHA\n"})}),"\n",(0,s.jsx)(i.p,{children:"Keep in mind that enabling TLS on the server might introduce some performance overhead. If possible, consider using a load balancer outside the gateway with SSL termination to handle encryption, which can help mitigate this performance impact."})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},57294:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/microservices_architecture_detail.006-70aebcaa49982afb023cfb895f110ffe.jpg"},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var s=t(96540);const n={},r=s.createContext(n);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);