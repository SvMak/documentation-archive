"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[3984],{91098:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(74848),r=i(28453);const o={title:"Monitoring your JHipster Applications",slug:"/monitoring/",last_update:{date:new Date("2023-07-12T00:00:00.000Z")}},s=void 0,a={id:"production/monitoring",title:"Monitoring your JHipster Applications",description:"JHipster provides several options to monitor your applications at runtime.",source:"@site/docs/production/monitoring.mdx",sourceDirName:"production",slug:"/monitoring/",permalink:"/documentation-archive/v8.7.3/monitoring/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/production/monitoring.mdx",tags:[],version:"current",lastUpdatedAt:168912e7,frontMatter:{title:"Monitoring your JHipster Applications",slug:"/monitoring/",last_update:{date:"2023-07-12T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Using in production",permalink:"/documentation-archive/v8.7.3/production/"},next:{title:"Docker Hub",permalink:"/documentation-archive/v8.7.3/docker-hub/"}},c={},d=[{value:"Generated dashboards",id:"generated-dashboards",level:2},{value:"The metrics dashboard",id:"the-metrics-dashboard",level:3},{value:"The health dashboard",id:"the-health-dashboard",level:3},{value:"The logs dashboard",id:"the-logs-dashboard",level:3},{value:"Security Metrics",id:"security-metrics",level:2},{value:"JHipster Registry",id:"jhipster-registry",level:2},{value:"ELK (Elasticsearch, Logstash, Kibana) Stack",id:"elk-elasticsearch-logstash-kibana-stack",level:2},{value:"Forwarding logs to Logstash",id:"forwarding-logs-to-logstash",level:3},{value:"Forwarding metrics to a supported third party monitoring system (JMX, Prometheus)",id:"forwarding-metrics-to-a-supported-third-party-monitoring-system-jmx-prometheus",level:2},{value:"Zipkin",id:"zipkin",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"JHipster provides several options to monitor your applications at runtime."}),"\n",(0,n.jsx)(t.h2,{id:"generated-dashboards",children:"Generated dashboards"}),"\n",(0,n.jsx)(t.p,{children:"For monoliths and gateways, JHipster generates several dashboards to monitor each application.\nThose dashboards are available at runtime, and are the easiest way to do some monitoring."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"JHipster Metrics page",src:i(84971).A+"",width:"1887",height:"909"})}),"\n",(0,n.jsx)(t.h3,{id:"the-metrics-dashboard",children:"The metrics dashboard"}),"\n",(0,n.jsx)(t.p,{children:"The metrics dashboard uses Micrometer to give a detailed view of the application performance."}),"\n",(0,n.jsx)(t.p,{children:"It gives metrics on:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the JVM"}),"\n",(0,n.jsx)(t.li,{children:"HTTP requests"}),"\n",(0,n.jsx)(t.li,{children:"cache usage"}),"\n",(0,n.jsx)(t.li,{children:"database connection pool"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"By clicking on the Expand button next to the JVM thread metrics, you will get a thread dump of the running application, which is very useful to find out blocked threads."}),"\n",(0,n.jsx)(t.h3,{id:"the-health-dashboard",children:"The health dashboard"}),"\n",(0,n.jsx)(t.p,{children:"The health dashboard uses Spring Boot Actuator's health endpoint to give health information on various parts of the application. Many health checks are provided out-of-the-box by Spring Boot Actuator, and you can add application-specific health checks."}),"\n",(0,n.jsx)(t.h3,{id:"the-logs-dashboard",children:"The logs dashboard"}),"\n",(0,n.jsx)(t.p,{children:"The logs dashboard allows to manage at runtime the Logback configuration of the running application.\nYou can change the log level of a Java package by clicking on a button, which is very convenient both in development and in production."}),"\n",(0,n.jsx)(t.h2,{id:"security-metrics",children:"Security Metrics"}),"\n",(0,n.jsx)(t.p,{children:"JHipster tracks JWT-related security metrics in projects that uses JWT authentication type."}),"\n",(0,n.jsxs)(t.p,{children:["In particular, JHipster tracks token validation errors count (i.e. invalid tokens count) as a custom meter named ",(0,n.jsx)(t.code,{children:"security.authentication.invalid-tokens"}),", and the causes of such validation errors with the following meter tags:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"invalid-signature"}),": the JWT signature verification has failed;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"expired"}),": the JWT has expired;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"unsupported"}),": the JWT format does not match the format expected by the application;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"malformed"}),": the JWT was not correctly constructed."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["These metrics are not available in the generated dashboards, but they are exposed as application metrics and can be ",(0,n.jsx)(t.a,{href:"#forwarding-metrics-to-a-supported-third-party-monitoring-system-jmx-prometheus",children:"forwarded to a third-party monitoring system"})," for visualization."]}),"\n",(0,n.jsx)(t.h2,{id:"jhipster-registry",children:"JHipster Registry"}),"\n",(0,n.jsxs)(t.p,{children:["The JHipster Registry has ",(0,n.jsx)(t.a,{href:"/jhipster-registry",children:"its own documentation page here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"It mostly provides the same monitoring dashboards as in the previous section, but it works on a separate server. As such, it is a bit more complex to set up, but it is highly recommended to have dashboards running outside of the running application: otherwise, they won't be available when there is an application error."}),"\n",(0,n.jsx)(t.h2,{id:"elk-elasticsearch-logstash-kibana-stack",children:"ELK (Elasticsearch, Logstash, Kibana) Stack"}),"\n",(0,n.jsx)(t.p,{children:"The ELK stack is often used for log aggregation and search, it consists of the following components:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.elastic.co/products/elasticsearch",children:"Elasticsearch"})," for indexing the data (logs and metrics)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.elastic.co/products/logstash",children:"Logstash"})," to manage and process the logs received from the applications"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.elastic.co/products/kibana",children:"Kibana"})," to visualize the logs with a nice interface"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["JHipster supports forwarding logs to Logstash, however as of JHipster version 7, we do not provide any ELK stack docker deployment and ready to use dashboards. This used to be part of the ",(0,n.jsx)(t.a,{href:"https://github.com/jhipster/jhipster-console",children:"JHipster Console"})," subproject that is no longer maintained. We advise existing users to migrate to another ELK solution."]})}),"\n",(0,n.jsx)(t.h3,{id:"forwarding-logs-to-logstash",children:"Forwarding logs to Logstash"}),"\n",(0,n.jsxs)(t.p,{children:["To configure a JHipster application to forward their logs to Logstash, enable logstash logging in their ",(0,n.jsx)(t.code,{children:"application-dev.yml"})," or ",(0,n.jsx)(t.code,{children:"application-prod.yml"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"jhipster:\n    logging:\n        logstash:\n            enabled: true\n            host: localhost\n            port: 5000\n            queueSize: 512\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To collect those logs, on the Logstash side, a simple ",(0,n.jsx)(t.code,{children:"logstash.conf"})," file can be provided :"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'input {\n    tcp {\n        port => "5000"\n        type => syslog\n        codec => json_lines\n    }\n}\n\noutput {\n    elasticsearch {\n        hosts => ["${ELASTICSEARCH_HOST}:${ELASTICSEARCH_PORT}"]\n        index => "logs-%{+YYYY.MM.dd}"\n    }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For more information on how to setup the ELK stack, please refer to the ",(0,n.jsx)(t.a,{href:"https://www.elastic.co/guide/en/elastic-stack/current/index.html",children:"official Elastic documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"forwarding-metrics-to-a-supported-third-party-monitoring-system-jmx-prometheus",children:"Forwarding metrics to a supported third party monitoring system (JMX, Prometheus)"}),"\n",(0,n.jsxs)(t.p,{children:["JHipster exposes application metrics in the ",(0,n.jsx)(t.a,{href:"https://prometheus.io/",children:"Prometheus"})," format by default.\nIt is exposed under ",(0,n.jsx)(t.code,{children:"management/prometheus"}),".\nForwarding metrics to alternative systems is also supported via ",(0,n.jsx)(t.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-metrics",children:"spring boot actuator"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you would like to disable exposing the metrics endpoint you can disable it in ",(0,n.jsx)(t.code,{children:"src/main/resources/application.yml"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"management:\n    prometheus:\n        export:\n            enabled: false\n"})}),"\n",(0,n.jsx)(t.p,{children:"The prometheus endpoint is unprotected by default. If you want to protect it via spring security you can do so by adding basic auth to the prometheus endpoint\nas prometheus can work with scraping endpoint protected by basic auth."}),"\n",(0,n.jsxs)(t.p,{children:["Create a new configuration file (e.g. ",(0,n.jsx)(t.code,{children:"BasicAuthConfiguration.java"}),")."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'@Configuration\n@Order(1)\n@ConditionalOnProperty(prefix = "management", name = "metrics.export.prometheus.enabled")\npublic class BasicAuthConfiguration {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .antMatcher("/management/prometheus/**")\n            .authorizeRequests()\n            .anyRequest().hasAuthority(AuthoritiesConstants.ADMIN)\n            .and()\n            .httpBasic().realmName("jhipster")\n            .and()\n            .sessionManagement()\n            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n            .and().csrf().disable();\n        return http.build();\n    }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["You can log in with the default ",(0,n.jsx)(t.code,{children:"admin/admin"}),". You must add following configuration to you prometheus configuration such that prometheus can still scrape your application."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'basic_auth:\n    username: "admin"\n    password: "admin"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["You can start a preconfigured Grafana and Prometheus instance on our local machine via ",(0,n.jsx)(t.code,{children:"docker-compose -f src/main/docker/monitoring.yml up -d"})," to have a look at the\nprovisioned ",(0,n.jsx)(t.a,{href:"https://grafana.com/grafana/dashboards/4701",children:"jvm/micrometer dashboard"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Grafana Micrometer Dashboard",src:i(9329).A+"",width:"800",height:"412"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Unlike in previous JHipster versions, JHipster 5.8 metrics reporting only support JMX and Prometheus out of the box. Please have a look to the Metrics official documentation for instructions on how to setup other reporters like ",(0,n.jsx)(t.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-metrics-export-graphite",children:"Graphite"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"zipkin",children:"Zipkin"}),"\n",(0,n.jsxs)(t.p,{children:["JHipster applications can integrate with ",(0,n.jsx)(t.a,{href:"http://zipkin.io/",children:"Zipkin"})," through ",(0,n.jsx)(t.a,{href:"https://github.com/spring-projects/spring-boot/blob/main/spring-boot-project/spring-boot-docs/src/docs/asciidoc/actuator/tracing.adoc",children:"Spring Boot Actuator Tracing"})," to provide distributed tracing for your microservice architecture. To enable Zipkin tracing, package your application with the ",(0,n.jsx)(t.code,{children:"zipkin"})," maven/gradle profile. This will trigger span reporting to the Zipkin server and also add correlation IDs (TraceId, SpanId and ParentId) to request headers and logs."]}),"\n",(0,n.jsx)(t.p,{children:"Zipkin also provide a service dependency graph feature that lets you visualize the dependencies between microservices over time."}),"\n",(0,n.jsxs)(t.p,{children:["For more information on how to setup your application to report traces to Zipkin, refer to ",(0,n.jsx)(t.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.micrometer-tracing",children:"Spring Boot Production-ready Features"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},84971:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/jhipster_metrics_page-91ba13b000b7d63ee3fb32422f90c7c1.png"},9329:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/monitoring_grafana_micrometer-df95849acc2af3a99004014bfa7d5f5e.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);