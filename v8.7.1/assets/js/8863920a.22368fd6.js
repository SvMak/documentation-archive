"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[3478],{15842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=t(74848),s=t(28453);const o={title:"Using TLS and HTTP/2 in development",slug:"/tls/",last_update:{date:new Date("2018-10-04T00:00:00.000Z")}},r=void 0,d={id:"development/tls",title:"Using TLS and HTTP/2 in development",description:"Introduction",source:"@site/docs/development/tls.mdx",sourceDirName:"development",slug:"/tls/",permalink:"/documentation-archive/v8.7.1/tls/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/development/tls.mdx",tags:[],version:"current",lastUpdatedAt:15386112e5,frontMatter:{title:"Using TLS and HTTP/2 in development",slug:"/tls/",last_update:{date:"2018-10-04T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Customizing Bootstrap",permalink:"/documentation-archive/v8.7.1/customizing-bootstrap/"},next:{title:"Running tests",permalink:"/documentation-archive/v8.7.1/running-tests/"}},l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Using TLS and HTTP/2 with Spring Boot",id:"using-tls-and-http2-with-spring-boot",level:2},{value:"Using TLS and HTTP/2 with Angular or React or Vue.js",id:"using-tls-and-http2-with-angular-or-react-or-vuejs",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["This page is for using TLS and HTTP/2 in development (mainly for testing purposes). For production configuration, please read the ",(0,i.jsx)(n.a,{href:"/production/#security",children:"security section in the production documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["TLS is the protocol used when having an ",(0,i.jsx)(n.code,{children:"https://"})," URL, and it is required in order to use HTTP/2 on modern browsers."]}),"\n",(0,i.jsx)(n.p,{children:"It is useful to use those protocols when testing an application, mainly for performance reasons."}),"\n",(0,i.jsx)(n.h2,{id:"using-tls-and-http2-with-spring-boot",children:"Using TLS and HTTP/2 with Spring Boot"}),"\n",(0,i.jsxs)(n.p,{children:["JHipster has a specific configuration for configuring both TLS and HTTP/2 (see the ",(0,i.jsx)(n.a,{href:"/common-application-properties",children:"common application properties documentation"}),"), and in order to make things even simpler:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"JHipster generates a self-signed certificate at application generation"}),"\n",(0,i.jsxs)(n.li,{children:["A specific ",(0,i.jsx)(n.code,{children:"tls"})," profile is provided (see the ",(0,i.jsx)(n.a,{href:"/profiles",children:"profiles documentation"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In order to run JHipster with the provided self-signed certificate, with TLS and HTTP/2 enabled, you need to use the ",(0,i.jsx)(n.code,{children:"tls"})," profile:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["with Maven: ",(0,i.jsx)(n.code,{children:"./mvnw -Pdev,tls"})]}),"\n",(0,i.jsxs)(n.li,{children:["with Gradle: ",(0,i.jsx)(n.code,{children:"./gradlew -Ptls"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The application will be available on ",(0,i.jsx)(n.code,{children:"https://localhost:8080/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"As the certificate is self-signed, your browser will issue a warning, and you will need to ignore it (or import it) in order to access the application."}),"\n",(0,i.jsx)(n.h2,{id:"using-tls-and-http2-with-angular-or-react-or-vuejs",children:"Using TLS and HTTP/2 with Angular or React or Vue.js"}),"\n",(0,i.jsxs)(n.p,{children:["Instead of using ",(0,i.jsx)(n.code,{children:"npm start"})," in order to run the front-end (with Webpack and BrowserSync), run ",(0,i.jsx)(n.code,{children:"npm run start-tls"}),", and it will connect to the back-end running on ",(0,i.jsx)(n.code,{children:"https://localhost:8080/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Everything should then work the same as without TLS and HTTP/2."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);