"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[7689],{83638:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(74848),t=n(28453);const s={title:"Using JHipster in production",slug:"/production/",last_update:{date:new Date("2021-03-08T12:00:00.000Z")}},o=void 0,a={id:"production/production",title:"Using JHipster in production",description:"JHipster generates a fully production-ready, optimized and secured application. This section describes the more important options - if you are in hurry, run a normal production build, but don't forget to read the security section!",source:"@site/docs/production/production.mdx",sourceDirName:"production",slug:"/production/",permalink:"/documentation-archive/v8.7.3/production/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/production/production.mdx",tags:[],version:"current",lastUpdatedAt:16152048e5,frontMatter:{title:"Using JHipster in production",slug:"/production/",last_update:{date:"2021-03-08T12:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Setting up Jenkins 2",permalink:"/documentation-archive/v8.7.3/setting-up-ci-jenkins2/"},next:{title:"Monitoring",permalink:"/documentation-archive/v8.7.3/monitoring/"}},c={},l=[{value:"Building a production package",id:"building-a-production-package",level:2},{value:"Testing a production build",id:"testing-a-production-build",level:3},{value:"Building an executable JAR / WAR file",id:"building-an-executable-jar--war-file",level:3},{value:"With Maven",id:"with-maven",level:4},{value:"With Gradle",id:"with-gradle",level:4},{value:"Running in production",id:"running-in-production",level:2},{value:"Executing the JAR file without an application server",id:"executing-the-jar-file-without-an-application-server",level:3},{value:"Running the application in a Docker container",id:"running-the-application-in-a-docker-container",level:3},{value:"Run as a service",id:"run-as-a-service",level:3},{value:"Performance optimizations",id:"performance-optimizations",level:2},{value:"Cache tuning",id:"cache-tuning",level:3},{value:"HTTP/2 support",id:"http2-support",level:3},{value:"GZipping",id:"gzipping",level:3},{value:"Cache headers",id:"cache-headers",level:3},{value:"Generating an optimized JavaScript application with Webpack",id:"generating-an-optimized-javascript-application-with-webpack",level:3},{value:"Security",id:"security",level:2},{value:"Securing the default user and admin accounts",id:"securing-the-default-user-and-admin-accounts",level:3},{value:"HTTPS support",id:"https-support",level:3},{value:"HTTPS configuration with JHipster",id:"https-configuration-with-jhipster",level:4},{value:"HTTPS configuration with a front-end proxy",id:"https-configuration-with-a-front-end-proxy",level:4},{value:"Custom Context Path",id:"custom-context-path",level:3},{value:"Monitoring",id:"monitoring",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"JHipster generates a fully production-ready, optimized and secured application. This section describes the more important options - if you are in hurry, run a normal production build, but don't forget to read the security section!"}),"\n",(0,r.jsx)(i.h2,{id:"building-a-production-package",children:"Building a production package"}),"\n",(0,r.jsx)(i.h3,{id:"testing-a-production-build",children:"Testing a production build"}),"\n",(0,r.jsx)(i.p,{children:"This allows to test a production build from Maven, without building a real package."}),"\n",(0,r.jsxs)(i.p,{children:['To use JHipster in "production" mode, use the pre-configured ',(0,r.jsx)(i.code,{children:"prod"})," profile. With Maven, please run:"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"./mvnw -Pprod"})}),"\n",(0,r.jsx)(i.p,{children:"When using Gradle, please run:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"./gradlew -Pprod"})}),"\n",(0,r.jsx)(i.p,{children:"This profile will compile, test and package your application with all productions settings."}),"\n",(0,r.jsxs)(i.p,{children:['If you want more information on the available profiles, please go the section titled "',(0,r.jsx)(i.a,{href:"/profiles",children:"Development and Production profiles"}),'".']}),"\n",(0,r.jsx)(i.h3,{id:"building-an-executable-jar--war-file",children:"Building an executable JAR / WAR file"}),"\n",(0,r.jsx)(i.h4,{id:"with-maven",children:"With Maven"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:'To package the application as a "production" JAR, please type:'}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"./mvnw -Pprod clean verify"})}),"\n",(0,r.jsxs)(i.p,{children:["This will generate a file ",(0,r.jsx)(i.code,{children:"target/jhipster-0.0.1-SNAPSHOT.jar"}),' (if your application is called "jhipster").']}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:'To package the application as a "production" WAR:'}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Modify the ",(0,r.jsx)(i.code,{children:"pom.xml"})," to change the application packaging to ",(0,r.jsx)(i.code,{children:"war"})," like:"]}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-diff",children:"-    <packaging>jar</packaging>\n+    <packaging>war</packaging>\n"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Modify the ",(0,r.jsx)(i.code,{children:"pom.xml"})," to change the scope of ",(0,r.jsx)(i.code,{children:"spring-boot-starter-undertow"})," dependency to ",(0,r.jsx)(i.code,{children:"provided"})," like:"]}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-diff",children:"    <id>prod</id>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-undertow</artifactId>\n+           <scope>provided</scope>\n        </dependency>\n    </dependencies>\n"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["To generate an executable ",(0,r.jsx)(i.code,{children:"war"})," along the original ",(0,r.jsx)(i.code,{children:"war"}),", type command:"]}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"./mvnw -Pprod clean verify\n"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:'This will generate these files (if your application is called "jhipster"):'}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"target/jhipster-0.0.1-SNAPSHOT.war"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"target/jhipster-0.0.1-SNAPSHOT.war.original"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["That when building a JAR or WAR file with the ",(0,r.jsx)(i.code,{children:"prod"})," profile, the generated archive will not include the ",(0,r.jsx)(i.code,{children:"dev"})," assets."]})}),"\n",(0,r.jsx)(i.h4,{id:"with-gradle",children:"With Gradle"}),"\n",(0,r.jsx)(i.p,{children:'To package the application as a "production" JAR, please type:'}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"./gradlew -Pprod clean bootJar"})}),"\n",(0,r.jsxs)(i.p,{children:["This will generate a file ",(0,r.jsx)(i.code,{children:"build/libs/jhipster-0.0.1-SNAPSHOT.jar"}),' (if your application is called "jhipster").']}),"\n",(0,r.jsx)(i.p,{children:'To package the application as a "production" WAR, please type:'}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"./gradlew -Pprod -Pwar clean bootWar"})}),"\n",(0,r.jsx)(i.h2,{id:"running-in-production",children:"Running in production"}),"\n",(0,r.jsx)(i.h3,{id:"executing-the-jar-file-without-an-application-server",children:"Executing the JAR file without an application server"}),"\n",(0,r.jsx)(i.p,{children:"Instead of deploying to an application server, many people find it easier to have a single executable JAR file."}),"\n",(0,r.jsx)(i.p,{children:'With the JAR file generated in the previous step, you can run it in "production" mode by typing (on Mac OS X or Linux):'}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"./jhipster-0.0.1-SNAPSHOT.jar"})}),"\n",(0,r.jsx)(i.p,{children:"If you are on Windows, use:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"java -jar jhipster-0.0.1-SNAPSHOT.jar"})}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["That this JAR file uses the profile we selected when building it. As it was built using the ",(0,r.jsx)(i.code,{children:"prod"})," file in the previous section, it will therefore run with the ",(0,r.jsx)(i.code,{children:"prod"})," profile."]})}),"\n",(0,r.jsx)(i.h3,{id:"running-the-application-in-a-docker-container",children:"Running the application in a Docker container"}),"\n",(0,r.jsx)(i.p,{children:"JHipster has first-class support for Docker: it bundles your executable JAR file in a Docker image, and run it inside Docker."}),"\n",(0,r.jsxs)(i.p,{children:["To learn how to package your application with Docker, please read our ",(0,r.jsx)(i.a,{href:"/docker-compose",children:"Docker Compose documentation"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"run-as-a-service",children:"Run as a service"}),"\n",(0,r.jsxs)(i.p,{children:["It is also possible to run the Jar as a Linux service, and you may want to force in your ",(0,r.jsx)(i.code,{children:"pom.xml"})," file before packaging. To do it, add the following property inside ",(0,r.jsx)(i.code,{children:"<configuration>"})," of ",(0,r.jsx)(i.code,{children:"spring-boot-maven-plugin"})," plugin."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-xml",children:"<embeddedLaunchScriptProperties>\n    <mode>service</mode>\n</embeddedLaunchScriptProperties>\n"})}),"\n",(0,r.jsx)(i.p,{children:"Next, setup your init.d with:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"ln -s jhipster-0.0.1-SNAPSHOT.jar /etc/init.d/jhipster"})}),"\n",(0,r.jsx)(i.p,{children:"Secure your application with:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"chown jhuser:jhuser jhipster-0.0.1-SNAPSHOT.jar sudo chattr +i your-app.jar"})}),"\n",(0,r.jsxs)(i.p,{children:["Considering ",(0,r.jsx)(i.code,{children:"jhuser"})," a non-root OS account that will run the application, then the application can be run this way:"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"service jhipster start|stop|restart"})}),"\n",(0,r.jsxs)(i.p,{children:["There are many other options that you can find in ",(0,r.jsx)(i.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/deployment-install.html",children:"Spring Boot documentation"}),", including more security steps and Windows service."]}),"\n",(0,r.jsx)(i.h2,{id:"performance-optimizations",children:"Performance optimizations"}),"\n",(0,r.jsx)(i.h3,{id:"cache-tuning",children:"Cache tuning"}),"\n",(0,r.jsx)(i.p,{children:"If you selected a cache provider when generating your application, it has been automatically configured for you by JHipster."}),"\n",(0,r.jsx)(i.p,{children:"However, the default cache values are quite low, so the application can run on modest hardware, and as those values should be tuned depending on your application's specific business requirements."}),"\n",(0,r.jsx)(i.p,{children:"Please read:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/using-cache",children:'The JHipster "using cache" documentation'})," to learn more about the caching provider you have selected, and how it can be tuned"]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.a,{href:"#monitoring",children:"last section on monitoring"}),", so you can fine-tune your cache according to your application's real-world usage"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"http2-support",children:"HTTP/2 support"}),"\n",(0,r.jsxs)(i.p,{children:["JHipster supports HTTP/2 using the ",(0,r.jsx)(i.code,{children:"jhipster.http.version"})," property, which is configured in the ",(0,r.jsx)(i.code,{children:"application-prod.yml"})," file."]}),"\n",(0,r.jsx)(i.p,{children:"To enable HTTP/2, you need to:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Set ",(0,r.jsx)(i.code,{children:"jhipster.http.version: V_2_0"})]}),"\n",(0,r.jsxs)(i.li,{children:["Configure HTTPS (see this documentation's ",(0,r.jsx)(i.a,{href:"#security",children:"security section"}),"), as browsers force to use HTTPS with HTTP/2"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"gzipping",children:"GZipping"}),"\n",(0,r.jsxs)(i.p,{children:["Within an executable JAR file, which uses the ",(0,r.jsx)(i.code,{children:"prod"})," profile, JHipster configures GZip compression on your Web resources."]}),"\n",(0,r.jsxs)(i.p,{children:["By default, compression will work on all static resources (HTML, CSS, JavaScript) and on all REST requests. You can have more information on this configuration by looking at the ",(0,r.jsx)(i.code,{children:"server.compression.*"})," keys in the Spring Boot application properties, configured in the ",(0,r.jsx)(i.code,{children:"application-prod.yml"})," file."]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:'That GZipping is done by the application server, so this section only applies if you use the "executable JAR" option described above. If you run your application in an external application server, you will need to configure it separately.'})}),"\n",(0,r.jsx)(i.h3,{id:"cache-headers",children:"Cache headers"}),"\n",(0,r.jsxs)(i.p,{children:["With the ",(0,r.jsx)(i.code,{children:"prod"})," profile, JHipster configures a Servlet filter that puts specific HTTP cache headers on your static resources (JavaScript, CSS, fonts...) so they are cached by browsers and proxies."]}),"\n",(0,r.jsx)(i.h3,{id:"generating-an-optimized-javascript-application-with-webpack",children:"Generating an optimized JavaScript application with Webpack"}),"\n",(0,r.jsxs)(i.p,{children:["This step is automatically triggered when you build your project with the ",(0,r.jsx)(i.code,{children:"prod"})," profile. If you want to run it without launching a Maven build, please run:"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"npm run build"})}),"\n",(0,r.jsxs)(i.p,{children:["This will use ",(0,r.jsx)(i.a,{href:"https://webpack.github.io/",children:"Webpack"})," to process all your static resources (CSS, TypeScript, HTML, JavaScript, images...) in order to generate an optimized client-side application."]}),"\n",(0,r.jsx)(i.p,{children:"During this process, Webpack will compile the TypeScript code into JavaScript code, and will also generate source maps, so the client-side application can still be debugged."}),"\n",(0,r.jsxs)(i.p,{children:["Those optimized assets will be generated in ",(0,r.jsx)(i.code,{children:"target/classes/static"})," for Maven or ",(0,r.jsx)(i.code,{children:"build/resources/main/static"})," for Gradle, and will be included in your final production JAR."]}),"\n",(0,r.jsxs)(i.p,{children:["This code will be served when you run the application with the ",(0,r.jsx)(i.code,{children:"prod"})," profile."]}),"\n",(0,r.jsx)(i.h2,{id:"security",children:"Security"}),"\n",(0,r.jsx)(i.h3,{id:"securing-the-default-user-and-admin-accounts",children:"Securing the default user and admin accounts"}),"\n",(0,r.jsxs)(i.p,{children:["JHipster comes with some default users generated for you. In production, you ",(0,r.jsx)(i.strong,{children:"should"})," change those default passwords!"]}),"\n",(0,r.jsxs)(i.p,{children:["Please follow our ",(0,r.jsx)(i.a,{href:"/security",children:"security documentation"})," to learn how to change those passwords, and secure your application."]}),"\n",(0,r.jsx)(i.h3,{id:"https-support",children:"HTTPS support"}),"\n",(0,r.jsx)(i.p,{children:"HTTPS can be configured directly in your JHipster application, or using a specific front-end proxy."}),"\n",(0,r.jsx)(i.h4,{id:"https-configuration-with-jhipster",children:"HTTPS configuration with JHipster"}),"\n",(0,r.jsxs)(i.p,{children:["HTTPS is configured using Spring Security's standard ",(0,r.jsx)(i.code,{children:"server.ssl"})," configuration keys in your ",(0,r.jsx)(i.code,{children:"application-prod.yml"})," file."]}),"\n",(0,r.jsx)(i.p,{children:"To enable SSL, generate a certificate using:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"keytool -genkey -alias <your-application> -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore keystore.p12 -validity 3650\n"})}),"\n",(0,r.jsxs)(i.p,{children:["You can also use Let's Encrypt using ",(0,r.jsx)(i.a,{href:"https://community.letsencrypt.org/t/tutorial-java-keystores-jks-with-lets-encrypt/34754",children:"this tutorial"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Then, modify the ",(0,r.jsx)(i.code,{children:"server.ssl"})," properties so your ",(0,r.jsx)(i.code,{children:"application-prod.yml"})," configuration looks like:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-yaml",children:"server:\n  port: 443\n  ssl:\n    key-store: keystore.p12\n    key-store-password: <your-password>\n    keyStoreType: PKCS12\n    keyAlias: <your-application>\n    ciphers: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384, TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384, TLS_DHE_RSA_WITH_AES_128_GCM_SHA256, TLS_DHE_RSA_WITH_AES_256_GCM_SHA384, TLS_DHE_RSA_WITH_AES_128_CBC_SHA, TLS_DHE_RSA_WITH_AES_256_CBC_SHA, TLS_DHE_RSA_WITH_AES_128_CBC_SHA256, TLS_DHE_RSA_WITH_AES_256_CBC_SHA256\n    enabled-protocols: TLSv1.2\n"})}),"\n",(0,r.jsxs)(i.p,{children:["The ciphers suite enforce the security by deactivating some old and deprecated SSL ciphers, this list was tested against ",(0,r.jsx)(i.a,{href:"https://www.ssllabs.com/ssltest/",children:"SSL Labs"})]}),"\n",(0,r.jsxs)(i.p,{children:["Once ",(0,r.jsx)(i.code,{children:"server.ssl.ciphers"})," property is enabled JHipster will force the order on Undertow with this property (true by default) : ",(0,r.jsx)(i.code,{children:"jhipster.http.useUndertowUserCipherSuitesOrder"})]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"enabled-protocols"})," deactivate old SSL protocols."]}),"\n",(0,r.jsx)(i.p,{children:"Then, the final touch for achieving the perfect forward secrecy. Add the following flag at the JVM startup :"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"-Djdk.tls.ephemeralDHKeySize=2048\n"})}),"\n",(0,r.jsxs)(i.p,{children:["For testing your configuration you can go to ",(0,r.jsx)(i.a,{href:"https://www.ssllabs.com/ssltest/",children:"SSL Labs"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"If everything is OK, you will get A+"}),"\n",(0,r.jsx)(i.h4,{id:"https-configuration-with-a-front-end-proxy",children:"HTTPS configuration with a front-end proxy"}),"\n",(0,r.jsx)(i.p,{children:"There are many solutions to setup a front-end HTTPS proxy in front of a JHipster application."}),"\n",(0,r.jsx)(i.p,{children:"One of the most common solution would be to use the Apache HTTP server, you can set it up with Let's Encrypt:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Install Apache and Let's Encrypt: ",(0,r.jsx)(i.code,{children:"apt-get install -y apache2 python-certbot-apache"})]}),"\n",(0,r.jsxs)(i.li,{children:["Configure Let's Encrypt: ",(0,r.jsx)(i.code,{children:"certbot --apache -d <your-domain.com> --agree-tos -m <your-email> --redirect"})]}),"\n",(0,r.jsxs)(i.li,{children:["Configure auto-renewal of SSL certificates: add ",(0,r.jsx)(i.code,{children:"10 3 * * * /usr/bin/certbot renew --quiet"})," in your crontab"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"custom-context-path",children:"Custom Context Path"}),"\n",(0,r.jsxs)(i.p,{children:["You can specify a context path for your Spring Boot backend by passing in a ",(0,r.jsx)(i.code,{children:"server.servlet.context-path"})," parameter and value:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"java -jar jhipster.jar --server.servlet.context-path=/jhipster/\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Or, you can add this configuration to ",(0,r.jsx)(i.code,{children:"application.yml"}),":"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-yaml",children:"---\nserver:\n  servlet:\n    context-path: /jhipster/\n"})}),"\n",(0,r.jsx)(i.p,{children:"For frontend bundlers, the context path is a build-time configuration."}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Angular"})," frontends can be configured using:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"angular.json"}),": ",(0,r.jsx)(i.code,{children:"projects -> * your project name -> architect -> build -> options -> baseHref : '/jhipster/'"})]}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"ng build --base-href '/jhipster/'"})}),"\n",(0,r.jsxs)(i.li,{children:["Use ",(0,r.jsx)(i.a,{href:"https://angular.io/api/common/APP_BASE_HREF",children:"APP_BASE_HREF"})]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["For ",(0,r.jsx)(i.strong,{children:"Webpack-based"})," frontends, you can configure using:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Webpack configuration file:"}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-js",children:"new HtmlWebpackPlugin({\n    ...\n    base: '/jhipster/'\n})\n"})}),"\n",(0,r.jsx)(i.p,{children:"Others modifications may be necessary, like configuring your development server and adjusting iframes in pages like swagger-ui."}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["That using a relative base path like ",(0,r.jsx)(i.code,{children:"./"})," is possible, but you must adjust other configurations to be compatible with it."]})}),"\n",(0,r.jsx)(i.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,r.jsxs)(i.p,{children:["JHipster comes with full monitoring support from ",(0,r.jsx)(i.a,{href:"https://micrometer.io/",children:"Micrometer"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"In development, Metrics data will be available through JMX: launch your JConsole and you will be able to access it"}),"\n",(0,r.jsxs)(i.p,{children:["In production, your application expose its metrics data on an endpoint that a ",(0,r.jsx)(i.a,{href:"https://prometheus.io/docs/introduction/overview/",children:"Prometheus server"})," can scrape at regular intervals, depending on what you have configured."]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var r=n(96540);const t={},s=r.createContext(t);function o(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);