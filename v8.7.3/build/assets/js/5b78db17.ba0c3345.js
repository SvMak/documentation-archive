"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4877],{64561:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var s=r(74848),t=r(28453);const n={title:"JHipster Registry",slug:"/jhipster-registry/",last_update:{date:new Date("2019-02-01T00:00:00.000Z")}},o=void 0,a={id:"microservices/jhipster-registry",title:"JHipster Registry",description:"deprecated - Use Consul instead",source:"@site/docs/microservices/jhipster-registry.mdx",sourceDirName:"microservices",slug:"/jhipster-registry/",permalink:"/documentation-archive/v8.7.3/jhipster-registry/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/microservices/jhipster-registry.mdx",tags:[],version:"current",lastUpdatedAt:15489792e5,frontMatter:{title:"JHipster Registry",slug:"/jhipster-registry/",last_update:{date:"2019-02-01T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Consul",permalink:"/documentation-archive/v8.7.3/consul/"},next:{title:"Creating microservices",permalink:"/documentation-archive/v8.7.3/creating-microservices/"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Spring profiles",id:"spring-profiles",level:3},{value:"Using the pre-packaged JAR file",id:"using-the-pre-packaged-jar-file",level:3},{value:"Building from source",id:"building-from-source",level:3},{value:"Using Docker",id:"using-docker",level:3},{value:"Running in the cloud",id:"running-in-the-cloud",level:3},{value:"Service discovery with Eureka",id:"service-discovery-with-eureka",level:2},{value:"Application configuration with Spring Cloud Config",id:"application-configuration-with-spring-cloud-config",level:2},{value:"Using encrypted configuration values",id:"using-encrypted-configuration-values",level:2},{value:"Administration dashboards",id:"administration-dashboards",level:2},{value:"The metrics dashboard",id:"the-metrics-dashboard",level:3},{value:"The health dashboard",id:"the-health-dashboard",level:3},{value:"The configuration dashboard",id:"the-configuration-dashboard",level:3},{value:"The logs dashboard",id:"the-logs-dashboard",level:3},{value:"Securing the JHipster Registry",id:"securing-the-jhipster-registry",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"deprecated"})," - Use Consul instead"]}),"\n",(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(i.p,{children:["The JHipster Registry is a runtime application, provided by the JHipster team. Like the JHipster generator, it is an Open Source, Apache 2-licensed application, and its source code is available on GitHub under the JHipster organization at ",(0,s.jsx)(i.a,{href:"https://github.com/jhipster/jhipster-registry",children:"jhipster/jhipster-registry"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"The JHipster Registry has three main purposes:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["It is a ",(0,s.jsx)(i.a,{href:"https://cloud.spring.io/spring-cloud-netflix/spring-cloud-netflix.html",children:"Eureka server"}),", that provides as a discovery server for applications. This server maintains and distributes a dynamic list of available application instances that are then used by the microservices to do HTTP requests routing and load balancing."]}),"\n",(0,s.jsxs)(i.li,{children:["It is a ",(0,s.jsx)(i.a,{href:"https://cloud.spring.io/spring-cloud-config/spring-cloud-config.html",children:"Spring Cloud Config server"}),", that provide runtime configuration to all applications."]}),"\n",(0,s.jsx)(i.li,{children:"It is an administration server, with dashboards to monitor and manage applications."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"All those features are packaged into one convenient application with a modern Angular-based user interface."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:r(24509).A+"",width:"791",height:"500"})}),"\n",(0,s.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(i.h3,{id:"spring-profiles",children:"Spring profiles"}),"\n",(0,s.jsxs)(i.p,{children:["The JHipster Registry uses the usual JHipster ",(0,s.jsx)(i.code,{children:"dev"})," and ",(0,s.jsx)(i.code,{children:"prod"})," Spring profiles, as well as the standard ",(0,s.jsx)(i.code,{children:"composite"})," from Spring Cloud Config (See ",(0,s.jsx)(i.a,{href:"https://cloud.spring.io/spring-cloud-config/multi/multi__spring_cloud_config_server.html#composite-environment-repositories",children:"official documentation"}),")."]}),"\n",(0,s.jsx)(i.p,{children:"As a result:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Using the ",(0,s.jsx)(i.code,{children:"dev"})," profile will run the JHipster Registry with the ",(0,s.jsx)(i.code,{children:"dev"})," and the ",(0,s.jsx)(i.code,{children:"composite"})," profiles. The ",(0,s.jsx)(i.code,{children:"dev"})," profile will load the Spring Cloud configuration from the filesystem, looking for the ",(0,s.jsx)(i.code,{children:"central-config"})," directory, which is relative to the running directory, defined in ",(0,s.jsx)(i.code,{children:"src/main/resources/config/bootstrap.yml"})," file."]}),"\n",(0,s.jsxs)(i.li,{children:["Using the ",(0,s.jsx)(i.code,{children:"prod"})," profile will run the JHipster Registry with the ",(0,s.jsx)(i.code,{children:"prod"})," and the ",(0,s.jsx)(i.code,{children:"composite"})," profiles. The ",(0,s.jsx)(i.code,{children:"prod"})," profile will load the Spring Cloud configuration from a Git repository, which is by default ",(0,s.jsx)(i.a,{href:"https://github.com/jhipster/jhipster-registry-sample-config",children:"https://github.com/jhipster/jhipster-registry-sample-config"}),". In a real-world usage, this repository should be changed, either by reconfiguring it in the ",(0,s.jsx)(i.code,{children:"src/main/resources/config/bootstrap-prod.yml"})," file, or by reconfiguring the ",(0,s.jsx)(i.code,{children:"spring.cloud.config.server.composite"})," Spring property."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Once the JHipster Registry is running, you can check its configuration in the ",(0,s.jsx)(i.code,{children:"Configuration > Cloud Config"})," menu. Please note that if you can't log in, it might be because the JWT signature key is not correctly set up, which is a sign that your configuration isn't good."]}),"\n",(0,s.jsx)(i.h3,{id:"using-the-pre-packaged-jar-file",children:"Using the pre-packaged JAR file"}),"\n",(0,s.jsxs)(i.p,{children:["The JHipster Registry is available as an executable JAR file on our ",(0,s.jsx)(i.a,{href:"https://github.com/jhipster/jhipster-registry/releases",children:"Releases page"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Download the JAR file, and run it as a usual JHipster application, using the profile you want to use (see the previous section about profiles). For example, to run it using a Spring Cloud Config configuration stored in the ",(0,s.jsx)(i.code,{children:"central-config"})," directory:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"java -jar jhipster-registry-<version>.jar --spring.security.user.password=admin --jhipster.security.authentication.jwt.secret=my-secret-key-which-should-be-changed-in-production-and-be-base64-encoded --spring.cloud.config.server.composite.0.type=native --spring.cloud.config.server.composite.0.search-locations=file:./central-config\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Note that it is important to provide a JWT secret key to the registry on startup, either via the ",(0,s.jsx)(i.code,{children:"JHIPSTER_SECURITY_AUTHENTICATION_JWT_SECRET"})," environment variable or with arguments as shown above. Another possible way is to set this value in the ",(0,s.jsx)(i.code,{children:"application.yml"})," file of your centralized configuration source (which is loaded on startup by all your applications including the registry)."]}),"\n",(0,s.jsxs)(i.p,{children:["Please note that since JHipster 5.3.0 we have a new ",(0,s.jsx)(i.code,{children:"jhipster.security.authentication.jwt.base64-secret"})," property, which is more secure, but as you might still use older releases\nwe use ",(0,s.jsx)(i.code,{children:"jhipster.security.authentication.jwt.secret"})," in this documentation. More information on those properties is available in our ",(0,s.jsx)(i.a,{href:"/security/",children:"security documentation"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Similarly, to run the registry with the ",(0,s.jsx)(i.code,{children:"prod"})," profile, adapt the arguments to your setup, for example:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"java -jar jhipster-registry-<version>.jar --spring.profiles.active=prod --spring.security.user.password=admin --jhipster.security.authentication.jwt.secret=my-secret-key-which-should-be-changed-in-production-and-be-base64-encoded --spring.cloud.config.server.composite.0.type=git --spring.cloud.config.server.composite.0.uri=https://github.com/jhipster/jhipster-registry-sample-config\n\njava -jar jhipster-registry-<version>.jar --spring.profiles.active=prod --spring.security.user.password=admin --jhipster.security.authentication.jwt.secret=my-secret-key-which-should-be-changed-in-production-and-be-base64-encoded --spring.cloud.config.server.composite.0.type=git --spring.cloud.config.server.composite.0.uri=https://github.com/jhipster/jhipster-registry --spring.cloud.config.server.composite.0.search-paths=central-config\n"})}),"\n",(0,s.jsx)(i.h3,{id:"building-from-source",children:"Building from source"}),"\n",(0,s.jsxs)(i.p,{children:["The JHipster Registry can be cloned/forked/downloaded directly from ",(0,s.jsx)(i.a,{href:"https://github.com/jhipster/jhipster-registry",children:"jhipster/jhipster-registry"}),". As the JHipster Registry is also a JHipster-generated application, you can run it like any other JHipster application:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["run it in development with ",(0,s.jsx)(i.code,{children:"./mvnw"})," (for the Java server) and ",(0,s.jsx)(i.code,{children:"npm start"})," (for managing the front-end), it will use by default the ",(0,s.jsx)(i.code,{children:"dev"})," profile and it will be available at ",(0,s.jsx)(i.a,{href:"http://127.0.0.1:8761/",children:"http://127.0.0.1:8761/"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["use ",(0,s.jsx)(i.code,{children:"./mvnw -Pprod package"})," to package it in production, and generate the usual JHipster executable JAR file. You can then run the JAR file using the ",(0,s.jsx)(i.code,{children:"dev"})," or ",(0,s.jsx)(i.code,{children:"prod"})," Spring profile, for example: ",(0,s.jsx)(i.code,{children:"java -jar jhipster-registry-<version>.jar --spring.profiles.active=prod"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Please note that to use the ",(0,s.jsx)(i.code,{children:"dev"})," and ",(0,s.jsx)(i.code,{children:"composite"})," profile, you need to have a ",(0,s.jsx)(i.code,{children:"central-config"})," directory with your configuration, so if you run ",(0,s.jsx)(i.code,{children:"java -jar jhipster-registry-<version>.jar --spring.profiles.active=dev"}),", you need to have that directory set up."]}),"\n",(0,s.jsx)(i.h3,{id:"using-docker",children:"Using Docker"}),"\n",(0,s.jsxs)(i.p,{children:["If you'd rather run the JHipster Registry from a Docker image, it is available on Docker Hub at ",(0,s.jsx)(i.a,{href:"https://hub.docker.com/r/jhipster/jhipster-registry/",children:"jhipster/jhipster-registry"}),". A docker-compose file to run this image is already present within each microservice ",(0,s.jsx)(i.code,{children:"src/main/docker"})," directory:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["run ",(0,s.jsx)(i.code,{children:"docker-compose -f src/main/docker/jhipster-registry.yml up"})," to start the JHipster Registry. It will be available on port ",(0,s.jsx)(i.code,{children:"8761"})," of your Docker host, so if it runs on your machine it should be at ",(0,s.jsx)(i.a,{href:"http://127.0.0.1:8761/",children:"http://127.0.0.1:8761/"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Please read our ",(0,s.jsx)(i.a,{href:"/docker-compose/",children:"Docker Compose documentation"})," for more information on using the JHipster Registry with Docker Compose."]}),"\n",(0,s.jsx)(i.h3,{id:"running-in-the-cloud",children:"Running in the cloud"}),"\n",(0,s.jsx)(i.p,{children:"You can run a JHipster Registry instance in the cloud. This is mandatory in production, but this can also be useful in development (there is no need to run it on your laptop)."}),"\n",(0,s.jsxs)(i.p,{children:["Please read ",(0,s.jsx)(i.a,{href:"/microservices-in-production/",children:'the "microservices in production" documentation'})," to learn how to deploy the JHipster Registry to Heroku."]}),"\n",(0,s.jsx)(i.h2,{id:"service-discovery-with-eureka",children:"Service discovery with Eureka"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:r(49903).A+"",width:"780",height:"339"})}),"\n",(0,s.jsxs)(i.p,{children:["The JHipster Registry is a ",(0,s.jsx)(i.a,{href:"https://github.com/Netflix/eureka",children:"Netflix Eureka server"}),", that provides service discovery for all applications."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"This is very useful for microservices architectures: this is how the gateways know which microservices are available, and which instances are up"}),"\n",(0,s.jsxs)(i.li,{children:["For all applications, including monoliths, this is how the Hazelcast distributed cache can automatically scale, see ",(0,s.jsx)(i.a,{href:"/using-cache/",children:"the Hazelcast cache documentation"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"application-configuration-with-spring-cloud-config",children:"Application configuration with Spring Cloud Config"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:r(22670).A+"",width:"792",height:"474"})}),"\n",(0,s.jsxs)(i.p,{children:["The JHipster Registry is a ",(0,s.jsx)(i.a,{href:"http://cloud.spring.io/spring-cloud-config/spring-cloud-config.html",children:"Spring Config Server"}),": when applications are launched they will first connect to the JHipster Registry to get their configuration. This is true for both gateways and microservices."]}),"\n",(0,s.jsxs)(i.p,{children:["This configuration is a Spring Boot configuration, like the one found in the JHipster ",(0,s.jsx)(i.code,{children:"application-*.yml"})," files, but it is stored in a central server, so it is easier to manage."]}),"\n",(0,s.jsx)(i.p,{children:"On startup, your gateways and microservices app will query the Registry's config server and overwrite their local properties with the ones defined there."}),"\n",(0,s.jsxs)(i.p,{children:["Two kinds of configurations sources are available (defined by the ",(0,s.jsx)(i.code,{children:"spring.cloud.config.server.composite"})," property):"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["A ",(0,s.jsx)(i.code,{children:"native"})," configuration, which is used by default in development (using the JHipster ",(0,s.jsx)(i.code,{children:"dev"})," profile), and which uses the local filesystem."]}),"\n",(0,s.jsxs)(i.li,{children:["A ",(0,s.jsx)(i.code,{children:"Git"})," configuration, which is used by default in production (using the JHipster ",(0,s.jsx)(i.code,{children:"prod"})," profile), and which stores the configuration in a Git server. This allows to tag, branch or rollback configurations using the usual Git tools, which are very powerful in this use-case."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["To manage your centralized configuration you need to add ",(0,s.jsx)(i.code,{children:"appname-profile.yml"})," files in your configuration source where ",(0,s.jsx)(i.strong,{children:"appname"})," and ",(0,s.jsx)(i.strong,{children:"profile"})," correspond to the application's name and current profile of the service that you want to configure.\nFor example, adding properties in a ",(0,s.jsx)(i.code,{children:"gateway-prod.yml"})," file will set those properties only for the application named ",(0,s.jsx)(i.strong,{children:"gateway"})," started with a ",(0,s.jsx)(i.strong,{children:"prod"})," profile. Moreover, properties defined in ",(0,s.jsx)(i.code,{children:"application[-dev|prod].yml"})," will be set for all your applications."]}),"\n",(0,s.jsxs)(i.p,{children:["As the Gateway routes are configured using Spring Boot, they can also be managed using the Spring Config Server, for example you could map application ",(0,s.jsx)(i.code,{children:"app1-v1"})," to the ",(0,s.jsx)(i.code,{children:"/app1"})," URL in your ",(0,s.jsx)(i.code,{children:"v1"})," branch, and map application ",(0,s.jsx)(i.code,{children:"app1-v2"})," to the ",(0,s.jsx)(i.code,{children:"/app1"})," URL in your ",(0,s.jsx)(i.code,{children:"v2"})," branch. This is a good way of upgrading microservices without any downtime for end-users."]}),"\n",(0,s.jsx)(i.h2,{id:"using-encrypted-configuration-values",children:"Using encrypted configuration values"}),"\n",(0,s.jsxs)(i.p,{children:["The JHipster Registry has a specific ",(0,s.jsx)(i.code,{children:"configuration > encryption"})," page to allow encryption and decryption of configuration values."]}),"\n",(0,s.jsx)(i.p,{children:"To encrypt configuration values (for example, database passwords) you need to:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["download the ",(0,s.jsx)(i.a,{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html",children:"JCE"})," and install it by following the instructions in the downloaded files (this is only required if you are using the Oracle JDK)."]}),"\n",(0,s.jsxs)(i.li,{children:["set the ",(0,s.jsx)(i.code,{children:"encrypt.key"})," property in ",(0,s.jsx)(i.code,{children:"bootstrap.yml"})," (not ",(0,s.jsx)(i.code,{children:"application.yml"}),") or use the ",(0,s.jsx)(i.code,{children:"ENCRYPT_KEY"})," environment variable with your symmetric key passphrase."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["If everything is setup correctly, you should be able to use the specific ",(0,s.jsx)(i.code,{children:"Configuration > Encryption"})," page, and also send POST requests to ",(0,s.jsx)(i.code,{children:"/config/encrypt"})," and ",(0,s.jsx)(i.code,{children:"/config/decrypt"})," endpoints with the text you want to manipulate in the ",(0,s.jsx)(i.code,{children:"body"})," of the requests."]}),"\n",(0,s.jsxs)(i.p,{children:["For example: ",(0,s.jsx)(i.code,{children:"curl localhost:8761/config/encrypt -d mypassword"})]}),"\n",(0,s.jsxs)(i.p,{children:["The cipher text must be placed in any ",(0,s.jsx)(i.code,{children:"*.yml"})," configuration file, in the form ",(0,s.jsx)(i.code,{children:"password= '{cipher}myciphertextafterencryotion'"}),' and it will be decrypted by the config server before sending it to its clients. This way your configuration files (stored in Git or stored "natively" on your filesystem) do not have plain text values.']}),"\n",(0,s.jsxs)(i.p,{children:["For more information, please refer to Spring Cloud Config's ",(0,s.jsx)(i.a,{href:"http://cloud.spring.io/spring-cloud-config/spring-cloud-config.html#_encryption_and_decryption",children:"Encryption and Decryption documentation"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"administration-dashboards",children:"Administration dashboards"}),"\n",(0,s.jsx)(i.p,{children:"The JHipster Registry provides administration dashboards, which are used for all application types. As soon as an application registers on the Eureka server, it will become available in the dashboards."}),"\n",(0,s.jsx)(i.p,{children:"In order to access sensitive information from the applications, the JHipster Registry will use a JWT token (this is why the JHipster Registry only works for applications using JWT). The JWT key used to sign the request should be the same for the applications and the JHipster Registry: as by default the JHipster Registry configures applications through Spring Cloud Config, this should work out-of-the-box, as it will send the same key to all applications."}),"\n",(0,s.jsx)(i.h3,{id:"the-metrics-dashboard",children:"The metrics dashboard"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:r(60483).A+"",width:"1901",height:"972"})}),"\n",(0,s.jsx)(i.p,{children:"The metrics dashboard uses Micrometer to give a detailed view of the application performance."}),"\n",(0,s.jsx)(i.p,{children:"It gives metrics on:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"the JVM"}),"\n",(0,s.jsx)(i.li,{children:"HTTP requests"}),"\n",(0,s.jsx)(i.li,{children:"cache usage"}),"\n",(0,s.jsx)(i.li,{children:"database connection pool"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"By clicking on the Expand button next to the JVM thread metrics, you will get a stacktrace of the running application, which is very useful to find out blocked threads."}),"\n",(0,s.jsx)(i.p,{children:"Note: As we switched the JHipster Registry to monitor metrics coming from Micrometer instead of Dropwizard metrics, it implies that all JHipster application generated with version 5.7.2 or older should be migrated to Micrometer to be monitored with the JHipster Registry. If you don't want to migrate your applications, please use JHipster Registry v4.0.6 or older."}),"\n",(0,s.jsxs)(i.p,{children:["To migrate your applications, you can use the ",(0,s.jsx)(i.a,{href:"/upgrading-an-application/",children:"JHipster upgrade sub-generator"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"the-health-dashboard",children:"The health dashboard"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:r(68544).A+"",width:"400",height:"319"})}),"\n",(0,s.jsx)(i.p,{children:"The health dashboard uses Spring Boot Actuator's health endpoint to give health information on various parts of the application.\nMany health checks are provided out-of-the-box by Spring Boot Actuator, and you can add application-specific health checks."}),"\n",(0,s.jsx)(i.h3,{id:"the-configuration-dashboard",children:"The configuration dashboard"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:r(51070).A+"",width:"788",height:"500"})}),"\n",(0,s.jsx)(i.p,{children:"The configuration dashboard uses Spring Boot Actuator's configuration endpoint to give a full view of the Spring configuration of the current application."}),"\n",(0,s.jsx)(i.h3,{id:"the-logs-dashboard",children:"The logs dashboard"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:r(17631).A+"",width:"800",height:"511"})}),"\n",(0,s.jsx)(i.p,{children:"The logs dashboard allows to manage at runtime the Logback configuration of the running application.\nYou can change the log level of Java package by clicking on a button, which is very convenient both in development and in production."}),"\n",(0,s.jsx)(i.h2,{id:"securing-the-jhipster-registry",children:"Securing the JHipster Registry"}),"\n",(0,s.jsx)(i.p,{children:'The JHipster Registry is secured by default. You can login using the usual "admin/admin" login and password that are used in normal JHipster applications.'}),"\n",(0,s.jsx)(i.p,{children:'Applications also connect to the JHipster Registry using that same "admin" user, but use HTTP Basic authentication. So if your microservices cannot access the registry, and you see some "401 authentication error" messages, it is because you have misconfigured those applications.'}),"\n",(0,s.jsx)(i.p,{children:"In order to secure your JHipster Registry:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:['You must change the default "admin" password. This password is set using the standard Spring Boot property ',(0,s.jsx)(i.code,{children:"spring.security.user.password"}),", so you can use the usual Spring Boot mechanisms to modify it: you could modify the project's ",(0,s.jsx)(i.code,{children:"application-*.yml"})," files, or add a ",(0,s.jsx)(i.code,{children:"SPRING_SECURITY_USER_PASSWORD"})," environment variable. The ",(0,s.jsx)(i.a,{href:"/docker-compose/",children:"Docker Compose sub-generator"})," uses the environment variable method."]}),"\n",(0,s.jsx)(i.li,{children:"As your applications will connect to the registry using HTTP, it is very important to secure that connection channel. There are many ways to do it, and the easiest one is probably to use HTTPS."}),"\n"]})]})}function l(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},24509:(e,i,r)=>{r.d(i,{A:()=>s});const s=r.p+"assets/images/jhipster-registry-animation-2c29efea44bbf2ab6ec3cc607350d90d.gif"},51070:(e,i,r)=>{r.d(i,{A:()=>s});const s=r.p+"assets/images/jhipster-registry-configuration-763ae47a9829b76a8f84d3defcd987f4.png"},49903:(e,i,r)=>{r.d(i,{A:()=>s});const s=r.p+"assets/images/jhipster-registry-eureka-39321c6e7f82bd332ce8c6dcdc903515.png"},68544:(e,i,r)=>{r.d(i,{A:()=>s});const s=r.p+"assets/images/jhipster-registry-health-0bc11920a46df81b59ed6e176fa12a77.png"},17631:(e,i,r)=>{r.d(i,{A:()=>s});const s=r.p+"assets/images/jhipster-registry-logs-13a6b699bffb8de7943f4263ea3a0d1d.png"},60483:(e,i,r)=>{r.d(i,{A:()=>s});const s=r.p+"assets/images/jhipster-registry-metrics-e30bdd9d302d0c760613f86a6427da08.png"},22670:(e,i,r)=>{r.d(i,{A:()=>s});const s=r.p+"assets/images/jhipster-registry-spring-cloud-config-d4a8210f45d1e61ad3a7320b02050fac.png"},28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>a});var s=r(96540);const t={},n=s.createContext(t);function o(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);