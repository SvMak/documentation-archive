"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[2892],{22701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var o=t(74848),r=t(28453);const s={title:"Deploying to Google Cloud Platform",displayed_sidebar:"docsSidebar",slug:"/gcp/",last_update:{date:new Date("2023-12-19T00:00:00.000Z")}},l=void 0,i={id:"gcp",title:"Deploying to Google Cloud Platform",description:"Google Cloud Platform",source:"@site/docs/gcp.mdx",sourceDirName:".",slug:"/gcp/",permalink:"/documentation-archive/v8.7.3/gcp/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/gcp.mdx",tags:[],version:"current",lastUpdatedAt:1702944e6,frontMatter:{title:"Deploying to Google Cloud Platform",displayed_sidebar:"docsSidebar",slug:"/gcp/",last_update:{date:"2023-12-19T00:00:00.000Z"}},sidebar:"docsSidebar"},c={},a=[{value:"Before you start",id:"before-you-start",level:2},{value:"Deploy to Google Kubernetes Engine",id:"deploy-to-google-kubernetes-engine",level:2},{value:"Enable HTTPS",id:"enable-https",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://cloud.google.com",children:(0,o.jsx)(n.img,{alt:"Google Cloud Platform",src:t(51388).A+"",width:"309",height:"80"})})}),"\n",(0,o.jsx)(n.p,{children:"You can deploy JHipster applications to Google Cloud Platform and run on:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Virtual machines with ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/compute/",children:"Google Compute Engine"})]}),"\n",(0,o.jsxs)(n.li,{children:["Containers in Kubernetes with ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/kubernetes-engine/",children:"Google Kubernetes Engine"})]}),"\n",(0,o.jsxs)(n.li,{children:["Platform as a Service with ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/appengine/",children:"Google App Engine"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can obtain ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/free",children:"Google Cloud Platform free trial"})," to deploy your applications. Please check the ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/free/",children:"Always Free"})," tiers for free usages up to the specified usage limits during and past the free trial."]}),"\n",(0,o.jsx)(n.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,o.jsxs)(n.p,{children:["Install and authenticate with the gcloud SDK on your local environment to access ",(0,o.jsx)(n.code,{children:"gcloud"})," CLI. For more information, visit this link:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://cloud.google.com/sdk/install",children:"Install gcloud SDK"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-to-google-kubernetes-engine",children:"Deploy to Google Kubernetes Engine"}),"\n",(0,o.jsx)(n.p,{children:"Google Kubernetes Engine is a fully managed Kubernetes cluster as a service. Once provisioned, you can deploy your containers and JHipster applications using standard Kubernetes commands."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Enable API: ",(0,o.jsx)(n.code,{children:"gcloud services enable container.googleapis.com containerregistry.googleapis.com"})]}),"\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.code,{children:"kubectl"})," CLI if not already installed: ",(0,o.jsx)(n.code,{children:"gcloud components install kubectl"})]}),"\n",(0,o.jsxs)(n.li,{children:["Create a new Google Kubernetes Engine cluster: ",(0,o.jsx)(n.code,{children:"gcloud container clusters create mycluster --zone us-central1-a --machine-type n1-standard-4"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["See GCP's ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/regions-zones/",children:"zones"})," and ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/machine-types/",children:"machine-types"})," for other options."]})}),"\n",(0,o.jsx)(n.p,{children:"Once the cluster is created, you can use JHipster Kubernetes generator to generate the deployment descriptors."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Generate Kubernetes deployment files: ",(0,o.jsx)(n.code,{children:"jhipster kubernetes"})]}),"\n",(0,o.jsx)(n.li,{children:"If you want to use Google Container Registry to publish container images in a private registry:"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"What should we use for the base Docker repository name"})," set to ",(0,o.jsx)(n.code,{children:"gcr.io/YOUR_PROJECT_ID"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Build the container image."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["If you use Google Container Registry, you can build directly to the registry without local Docker daemon: ",(0,o.jsx)(n.code,{children:"./mvnw package -Pprod jib:build"})]}),"\n",(0,o.jsxs)(n.li,{children:["Otherwise, build to Docker daemon: ",(0,o.jsx)(n.code,{children:"./mvnw package -Pprod jib:dockerBuild"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Deploy to Kubernetes cluster:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Apply the Kubernetes configurations: ",(0,o.jsx)(n.code,{children:"./kubectl-apply.sh"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For full Kubernetes generator features, see ",(0,o.jsx)(n.a,{href:"/kubernetes",children:"Deploying to Kubernetes"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"enable-https",children:"Enable HTTPS"}),"\n",(0,o.jsxs)(n.p,{children:["To enable HTTPS for your cluster, see Ray Tsang's ",(0,o.jsx)(n.a,{href:"https://spring-gcp.saturnism.me/deployment/kubernetes/load-balancing/external-load-balancing",children:"External Load Balancing docs"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can force the use of HTTPS by adding the following configuration to your ",(0,o.jsx)(n.code,{children:"SecurityConfiguration.java"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'// Spring MVC\nhttp.requiresChannel(channel -> channel\n    .requestMatchers(r -> r.getHeader("X-Forwarded-Proto") != null).requiresSecure());\n\n// WebFlux\nhttp.redirectToHttps(redirect -> redirect\n    .httpsRedirectWhen(e -> e.getRequest().getHeaders().containsKey("X-Forwarded-Proto")));\n'})}),"\n",(0,o.jsxs)(n.p,{children:["See Spring Security's ",(0,o.jsx)(n.a,{href:"https://docs.spring.io/spring-security/site/docs/5.5.x/reference/html5/#servlet-http-redirect",children:"Servlet"})," and ",(0,o.jsx)(n.a,{href:"https://docs.spring.io/spring-security/site/docs/5.5.x/reference/html5/#webflux-http-redirect",children:"WebFlux"})," documentation for more information."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},51388:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/logo-gcp-74e9ff5c52c57df840de801399fad2c3.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var o=t(96540);const r={},s=o.createContext(r);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);