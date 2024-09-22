"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4002],{73719:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var r=o(74848),s=o(28453);const i={title:"Deploying to Heroku",slug:"/heroku/",last_update:{date:new Date("2023-12-19T00:00:00.000Z")}},t=void 0,a={id:"production/heroku",title:"Deploying to Heroku",description:"This sub-generator allows deployment of your JHipster application to the Heroku cloud.",source:"@site/docs/production/heroku.mdx",sourceDirName:"production",slug:"/heroku/",permalink:"/documentation-archive/v8.7.1/heroku/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/production/heroku.mdx",tags:[],version:"current",lastUpdatedAt:1702944e6,frontMatter:{title:"Deploying to Heroku",slug:"/heroku/",last_update:{date:"2023-12-19T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Deploying to Clever Cloud",permalink:"/documentation-archive/v8.7.1/clever-cloud/"},next:{title:"Deploying to Kubernetes",permalink:"/documentation-archive/v8.7.1/kubernetes/"}},l={},h=[{value:"Running the sub-generator",id:"running-the-sub-generator",level:2},{value:"Changing the Java version",id:"changing-the-java-version",level:2},{value:"Deploying your application",id:"deploying-your-application",level:2},{value:"Updating your deployed application",id:"updating-your-deployed-application",level:3},{value:"Using git option",id:"using-git-option",level:4},{value:"Using jar option",id:"using-jar-option",level:4},{value:"Preparing a new jar",id:"preparing-a-new-jar",level:5},{value:"Pushing to production",id:"pushing-to-production",level:5},{value:"Deploying Docker to Heroku",id:"deploying-docker-to-heroku",level:2},{value:"Deploying Microservices",id:"deploying-microservices",level:2},{value:"Using security with your JHipster Registry on Heroku",id:"using-security-with-your-jhipster-registry-on-heroku",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Using Elasticsearch",id:"using-elasticsearch",level:3},{value:"More information",id:"more-information",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This sub-generator allows deployment of your JHipster application to the ",(0,r.jsx)(n.a,{href:"https://www.heroku.com/",children:"Heroku cloud"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.heroku.com/",children:(0,r.jsx)(n.img,{alt:"Heroku",src:o(38208).A+"",width:"78",height:"87"})})}),"\n",(0,r.jsx)(n.h2,{id:"running-the-sub-generator",children:"Running the sub-generator"}),"\n",(0,r.jsxs)(n.p,{children:["Before running the sub-generator, you must install the ",(0,r.jsx)(n.a,{href:"https://cli.heroku.com/",children:"Heroku CLI"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You must also ",(0,r.jsx)(n.a,{href:"http://signup.heroku.com/",children:"create a Heroku account"})," and log in with the CLI by running the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"**$ heroku login**\nEnter your Heroku credentials.\nEmail: YOUR_EMAIL\nPassword (typing will be hidden): YOUR_PASSWORD\nAuthentication successful.\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["As of ",(0,r.jsx)(n.a,{href:"https://blog.heroku.com/next-chapter",children:"November 2022 Heroku does not offer a completely free tier"})," anymore.\nThis means you will need a properly ",(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/account-verification",children:"verified Heroku account"}),"\nand deploying an application using the smallest dyno options and the smallest Postgres size will cost you around ",(0,r.jsx)(n.strong,{children:"$12 per month"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The Heroku sub-generator creates an application using ",(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/dyno-types",children:"free dynos"})," with add-ons matching your selected configuration."]}),"\n",(0,r.jsx)(n.p,{children:"We support the following addons:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.heroku.com/postgres",children:"Heroku Postgres"})," when using PostgreSQL"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://elements.heroku.com/addons/jawsdb",children:"JawsDB"})," when using MySQL or MariaDB"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://elements.heroku.com/addons/heroku-redis",children:"Heroku Redis"})," when ",(0,r.jsx)(n.a,{href:"/using-cache/#caching-with-redis",children:"using Redis"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://elements.heroku.com/addons/memcachier",children:"MemCachier"})," when ",(0,r.jsx)(n.a,{href:"/using-cache/#caching-with-memcached",children:"using Memcached"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://elements.heroku.com/addons/bonsai",children:"Bonsai Elasticsearch"})," when ",(0,r.jsx)(n.a,{href:"/using-elasticsearch/",children:"using Elasticsearch"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://elements.heroku.com/addons/okta",children:"Okta"})," when ",(0,r.jsx)(n.a,{href:"/security/#oauth-20-and-openid-connect",children:"using OAuth2/OIDC (optional)"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To deploy your application to Heroku, run this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"jhipster heroku\n"})}),"\n",(0,r.jsx)(n.p,{children:'This should package your application in "production" mode, create an Heroku application with a database, upload your code, and start the application.'}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"That if your application is a microservice, you will be prompted to provide a registry URL. Scroll down to learn how to do this."})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Please be aware that your application must start under 90 seconds, or it will be shutdown.\nDepending on the platform load, starting under 90 seconds is not guaranteed!"})}),"\n",(0,r.jsx)(n.h2,{id:"changing-the-java-version",children:"Changing the Java version"}),"\n",(0,r.jsxs)(n.p,{children:["You can select the Java version when executing the Heroku sub-generator.\nBy default this will be Java 11.\nYou can find all on Heroku ",(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/java-support#supported-java-versions",children:"supported Java version in the official documentation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to change the Java version e.g. from ",(0,r.jsx)(n.code,{children:"11"})," to ",(0,r.jsx)(n.code,{children:"14"})," later you need to change it in ",(0,r.jsx)(n.code,{children:"system.properties"})," in your projects root folder:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"java.runtime.version=14\n"})}),"\n",(0,r.jsx)(n.p,{children:"When you redeploy your application it will use Java 14."}),"\n",(0,r.jsx)(n.h2,{id:"deploying-your-application",children:"Deploying your application"}),"\n",(0,r.jsxs)(n.p,{children:["By default the application will be ",(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/git",children:"deployed via git"}),".\nThis means you push your code and Heroku will build and deploy it on their servers.\nIf you can't or don't want to push code to someone else's server you can use the jar option and ",(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/deploying-executable-jar-files",children:"deploy an executable jar"}),".\nHeroku also supports ",(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/container-registry-and-runtime",children:"deploying a docker image"}),", but the sub-generator does not support this option yet."]}),"\n",(0,r.jsx)(n.h3,{id:"updating-your-deployed-application",children:"Updating your deployed application"}),"\n",(0,r.jsx)(n.h4,{id:"using-git-option",children:"Using git option"}),"\n",(0,r.jsx)(n.p,{children:"When deploying via git a new remote has been created called heroku.\nTo deploy new code you need to push the changes to the heroku remote:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git push heroku master\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This assumes you have run the generator on the machine you are executing this command from.\nIf you have not, you will need to follow the ",(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/git#for-an-existing-heroku-app",children:"instructions for creating a Heroku remote"}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"using-jar-option",children:"Using jar option"}),"\n",(0,r.jsx)(n.p,{children:"When you selected to deploy an executable jar you need to create the updated jar and deploy the new file to Heroku."}),"\n",(0,r.jsx)(n.h5,{id:"preparing-a-new-jar",children:"Preparing a new jar"}),"\n",(0,r.jsx)(n.p,{children:"When your application is already deployed, you can prepare a new deployment with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./mvnw package -Pprod -DskipTests\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or when using gradle:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./gradlew -Pprod bootJar -x test\n"})}),"\n",(0,r.jsx)(n.h5,{id:"pushing-to-production",children:"Pushing to production"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This assumes you have run the generator on the machine you are executing this command from.\nIf you have not, you will need to follow the instructions for installing the ",(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/deploying-executable-jar-files",children:"Heroku Java CLI"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"To push to production, type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku deploy:jar target/*.jar\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or when using gradle:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku deploy:jar build/libs/*jar\n"})}),"\n",(0,r.jsx)(n.h2,{id:"deploying-docker-to-heroku",children:"Deploying Docker to Heroku"}),"\n",(0,r.jsxs)(n.p,{children:["You can deploy your app as a Docker container to Heroku too. While this works, there's no Heroku setup and configuration that happens, so you have to do that manually. This documentation assumes you've already run ",(0,r.jsx)(n.code,{children:"jhipster heroku"})," to deploy your app and therefore leverages the integration and add-on provisioning that this process performs."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": If you're using a version of JHipster that's prior to v6.10.2, you'll need to add the following to ",(0,r.jsx)(n.code,{children:"src/main/resources/config/application-heroku.yml"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"server:\n  port: ${PORT:8080}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Build your Docker image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./mvnw package -Pprod verify jib:dockerBuild\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you're using Gradle:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./gradlew -Pprod bootJar jibDockerBuild\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can test it out locally using Docker Compose."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker-compose -f src/main/docker/app.yml up\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once you've confirmed everything works, create a new app on Heroku, and add it as a remote."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku apps:create\ngit remote add docker https://git.heroku.com/<your-new-app>.git\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then run the commands below to deploy your JHipster app as a Docker image. Be sure to replace the ",(0,r.jsx)(n.code,{children:"<...>"})," placeholders with your Heroku app name. If you don't know your app name, run ",(0,r.jsx)(n.code,{children:"heroku apps"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku container:login\ndocker tag space registry.heroku.com/<heroku-app>/web\ndocker push registry.heroku.com/<heroku-app>/web\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku container:login\ndocker tag space registry.heroku.com/fast-peak-70014/web\ndocker push registry.heroku.com/fast-peak-70014/web\n"})}),"\n",(0,r.jsxs)(n.p,{children:["At this point, you can use the PostgreSQL and Okta add-ons you've already configured. Run the following command to get the identifiers of the add-ons from the ",(0,r.jsx)(n.code,{children:"heroku"})," remote that you first deployed to."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku addons --remote heroku\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you can attach these instances to your new application."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku addons:attach <postgresql-addon-name> --remote docker\nheroku addons:attach <okta-addon-name> --remote docker\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When you use ",(0,r.jsx)(n.code,{children:"jhipster heroku"})," to deploy your application, it properly configures the database for you. However, when deploying it as a Docker container, none of that happens. Therefore, you need to set a few configuration variables so your Docker container can talk to PostgreSQL. First, run the following command to get the PostgreSQL URL."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku config:get DATABASE_URL --remote docker\n"})}),"\n",(0,r.jsx)(n.p,{children:"This command will retrieve a value with the following syntax:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"postgres://username:password@address\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, set the database environment variables to match the keys that are in ",(0,r.jsx)(n.code,{children:"application-heroku.yml"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku config:set JDBC_DATABASE_URL=jdbc:postgresql://<address> --remote docker\nheroku config:set JDBC_DATABASE_USERNAME=<username> --remote docker\nheroku config:set JDBC_DATABASE_PASSWORD=<password> --remote docker\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set the max amount of Java memory to use and specify the Spring profiles."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku config:set JAVA_OPTS=-Xmx256m\nheroku config:set SPRING_PROFILES_ACTIVE=prod,heroku\n"})}),"\n",(0,r.jsx)(n.p,{children:"Run the command below to open your browser and navigate to your app."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku open --remote docker\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Copy the URL of your app and log in to your Okta developer account. Go to ",(0,r.jsx)(n.strong,{children:"Applications"})," > ",(0,r.jsx)(n.strong,{children:"Web"})," > ",(0,r.jsx)(n.strong,{children:"General"})," and add the URL to Login and Logout redirect URIs. Make sure the login redirect URI ends with ",(0,r.jsx)(n.code,{children:"/login/oauth2/code/oidc"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Now you should be able to release your container and start the app."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku container:release web --remote docker\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can watch the logs to see if your container started successfully."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku logs --tail --remote docker\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now you should be able to open your app, click the ",(0,r.jsx)(n.strong,{children:"sign in"})," link, and authenticate!"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku open --remote docker\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": You will ",(0,r.jsx)(n.strong,{children:"NOT"})," be able to login to your JHipster app using the admin account the Okta add-on provisions. To make sure you're not logged in with that account, we suggest you use a new private window to log in."]}),"\n",(0,r.jsxs)(n.p,{children:["If you test your Dockerized JHipster app on ",(0,r.jsx)(n.a,{href:"https://securityheaders.com",children:"securityheaders.com"}),", you'll see it scores an ",(0,r.jsx)(n.strong,{children:"A"}),"!"]}),"\n",(0,r.jsx)(n.h2,{id:"deploying-microservices",children:"Deploying Microservices"}),"\n",(0,r.jsxs)(n.p,{children:["JHipster microservices require Consul or JHipster Registry as described in the ",(0,r.jsx)(n.a,{href:"/microservices-architecture/",children:"Doing microservices with JHipster"})," documentation. You can deploy a JHipster registry to Heroku by clicking this button:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://dashboard.heroku.com/new?&template=https%3A%2F%2Fgithub.com%2Fjhipster%2Fjhipster-registry",children:(0,r.jsx)(n.img,{src:"https://camo.githubusercontent.com/c0824806f5221ebb7d25e559568582dd39dd1170/68747470733a2f2f7777772e6865726f6b7563646e2e636f6d2f6465706c6f792f627574746f6e2e706e67",alt:"Deploy to Heroku"})})}),"\n",(0,r.jsxs)(n.p,{children:["Once the registry is deployed, you can run the ",(0,r.jsx)(n.code,{children:"jhipster heroku"})," command against your microservice or gateway. The Heroku sub-generator will prompt you for the URL of your registry, which will be in the form ",(0,r.jsx)(n.code,{children:"https://[appname].herokuapp.com"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"A registry running on Heroku has a few limitations, including:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The registry will only work with native configuration (and not Git config)."}),"\n",(0,r.jsx)(n.li,{children:"The registry service cannot be scaled up to multiple dynos to provide redundancy. You must deploy multiple applications (i.e. click the button more than once). This is because Eureka requires distinct URLs to synchronize in-memory state between instances."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"using-security-with-your-jhipster-registry-on-heroku",children:"Using security with your JHipster Registry on Heroku"}),"\n",(0,r.jsx)(n.p,{children:"To get the automatically-generated admin password on the JHipster Registry, type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"heroku config:get JHIPSTER_PASSWORD\n"})}),"\n",(0,r.jsx)(n.p,{children:"To use this password, update all of your microservices and your gateway to use the credentials for the registry by running this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'heroku config:set JHIPSTER_REGISTRY_URL="https://admin:[password]@[appname].herokuapp.com"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(n.p,{children:['If your application is stopped by Heroku when your Liquibase changelog is being applied, your database will be marked as "locked" by Liquibase. You will need to manually clean the lock table. On Postgres, you make sure you have a ',(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/heroku-postgresql#local-setup",children:"local Postgres client installed"})," and run the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'heroku pg:psql -c "update databasechangeloglock set locked=false;"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Heroku has a default boot-timeout limit of 90 seconds. If your app takes longer than this, Heroku will stop the process, which may leave the database in a locked state. If the problem is persistent, try contacting ",(0,r.jsx)(n.a,{href:"http://help.heroku.com",children:"Heroku Support"})," to request a longer boot limit for your app."]}),"\n",(0,r.jsx)(n.h3,{id:"using-elasticsearch",children:"Using Elasticsearch"}),"\n",(0,r.jsxs)(n.p,{children:["The Bonsai used addon with the free sandbox plan does ",(0,r.jsx)(n.a,{href:"https://docs.bonsai.io/article/139-which-versions-bonsai-supports",children:"only support Elasticsearch 7.10.x"}),".\nThis might lead to some ",(0,r.jsx)(n.a,{href:"https://github.com/jhipster/generator-jhipster/issues/10003",children:"incompatibilities"})," depending in the Spring Data and ",(0,r.jsx)(n.a,{href:"https://github.com/jhipster/generator-jhipster/issues/18650",children:"JHipster versions you are using"}),".\nJHipster ",(0,r.jsx)(n.a,{href:"https://github.com/jhipster/generator-jhipster/pull/18774",children:"enforces bonsai compatible Elasticsearch"})," dependencies (e.g. clients) when deploying to Heroku."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["If you are willing to use a ",(0,r.jsx)(n.strong,{children:"paid"})," addon you can use the ",(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/foundelasticsearch",children:"official Elastic Cloud integration"})," to get access to the latest Elasticsearch version and features."]})}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/kissaten/jhipster-example",children:"Example Application"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/deployment.html#cloud-deployment-heroku",children:"Spring Boot Heroku documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/free-dyno-hours",children:"Heroku free dyno documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://devcenter.heroku.com/articles/java-support#supported-java-versions",children:"Heroku Java support documentation"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},38208:(e,n,o)=>{o.d(n,{A:()=>r});const r="data:image/png;base64,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"},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>a});var r=o(96540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);