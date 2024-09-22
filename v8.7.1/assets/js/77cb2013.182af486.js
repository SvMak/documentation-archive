"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[6380],{52398:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(74848),r=n(28453);const s={title:"Docker and Docker Compose",slug:"/docker-compose/",last_update:{date:new Date("2016-12-01T00:00:00.000Z")}},c=void 0,a={id:"environment/docker-compose",title:"Docker and Docker Compose",description:"Using Docker and Docker Compose is highly recommended in development, and is also a good solution in production.",source:"@site/docs/environment/docker-compose.mdx",sourceDirName:"environment",slug:"/docker-compose/",permalink:"/documentation-archive/v8.7.1/docker-compose/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/environment/docker-compose.mdx",tags:[],version:"current",lastUpdatedAt:14805504e5,frontMatter:{title:"Docker and Docker Compose",slug:"/docker-compose/",last_update:{date:"2016-12-01T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Netbeans",permalink:"/documentation-archive/v8.7.1/configuring-ide-netbeans/"},next:{title:"JHipster Shell Plugins",permalink:"/documentation-archive/v8.7.1/shell-plugins/"}},t={},l=[{value:"Description",id:"description",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Building and running a Docker image of your application",id:"building-and-running-a-docker-image-of-your-application",level:2},{value:"Generating a custom Docker-Compose configuration for multiple applications",id:"generating-a-custom-docker-compose-configuration-for-multiple-applications",level:2},{value:"Working with databases",id:"working-with-databases",level:2},{value:"MySQL, MariaDB, PostgreSQL, Oracle, MongoDB, Couchbase, Neo4j or Cassandra",id:"mysql-mariadb-postgresql-oracle-mongodb-couchbase-neo4j-or-cassandra",level:3},{value:"MongoDB Cluster Mode",id:"mongodb-cluster-mode",level:3},{value:"Couchbase Cluster Mode",id:"couchbase-cluster-mode",level:3},{value:"Cassandra",id:"cassandra",level:3},{value:"Cassandra in development",id:"cassandra-in-development",level:4},{value:"Cassandra in production:",id:"cassandra-in-production",level:4},{value:"Microsoft SQL Server",id:"microsoft-sql-server",level:3},{value:"Elasticsearch",id:"elasticsearch",level:2},{value:"Sonar",id:"sonar",level:2},{value:"Keycloak",id:"keycloak",level:2},{value:"Common commands",id:"common-commands",level:2},{value:"List the containers",id:"list-the-containers",level:3},{value:"Docker stats for containers",id:"docker-stats-for-containers",level:3},{value:"Scale a container",id:"scale-a-container",level:3},{value:"Stop containers",id:"stop-containers",level:3},{value:"Delete a container",id:"delete-a-container",level:3},{value:"Adding memory parameters to Dockerfile",id:"adding-memory-parameters-to-dockerfile",level:3},{value:"Adding memory parameters to docker-compose.yml",id:"adding-memory-parameters-to-docker-composeyml",level:3}];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"Using Docker and Docker Compose is highly recommended in development, and is also a good solution in production."}),"\n",(0,i.jsx)(o.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsxs)(o.p,{children:["This Docker configuration is used to run your generated application(s) inside a container image. It's completely different from the ",(0,i.jsx)(o.a,{href:"/installation/",children:"Docker setup"})," that JHipster also provides, which is for running the JHipster generator inside a container"]})}),"\n",(0,i.jsx)(o.p,{children:"JHipster provides a complete Docker support, in order to:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Facilitate development, as you can start a full infrastructure with a single command, even when using a complex microservices architecture"}),"\n",(0,i.jsx)(o.li,{children:"For people using Docker Swarm, deploying to production directly, as it uses the same Docker Compose configuration"}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["One great feature of using Docker Compose is that you can scale your containers, using the ",(0,i.jsx)(o.code,{children:"docker-compose scale"})," command. This is very interesting if you use JHipster with ",(0,i.jsx)(o.a,{href:"#building-and-running-a-docker-image-of-your-application",children:"a microservices architecture"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["When generating your application, JHipster generates for you several Docker Compose configurations to help you run your application with third-party services, for example a database. Those files are located inside folder ",(0,i.jsx)(o.code,{children:"src/main/docker/"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(o.p,{children:"You have to install Docker and Docker Compose:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"https://docs.docker.com/installation/#installation",children:"Docker"})}),"\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"https://docs.docker.com/compose/install",children:"Docker Compose"})}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Docker now requires creating an account to the docker store to download Docker for Mac and Docker for Windows. To bypass this"}),"\n",(0,i.jsx)(o.admonition,{type:"tip",children:(0,i.jsx)(o.p,{children:"On Windows and Mac OS X, Kitematic is an easy-to-use graphical interface provided with the Docker Toolbox, which will makes using Docker a lot easier."})}),"\n",(0,i.jsx)(o.admonition,{type:"warning",children:(0,i.jsx)(o.p,{children:"If you are using Docker Machine on Mac or Windows, your Docker daemon has only limited access to your OS X or Windows file system. Docker Machine tries to auto-share your /Users (OS X) or C:\\Users&lt;username> (Windows) directory. So you have to create the project folder under this directory to avoid any issues."})}),"\n",(0,i.jsxs)(o.p,{children:["If you encounter the error ",(0,i.jsx)(o.code,{children:"npm ERR! Error: EACCES: permission denied"})," when installing JHipster UML (or any unbundled package), your container may not have ",(0,i.jsx)(o.code,{children:"sudo"})," installed (for instance, sudo isn't bundled with Ubuntu Xenial)."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Solution 1"})}),"\n",(0,i.jsxs)(o.p,{children:["The NPM documentation recommends not installing any NPM package as root. Follow the ",(0,i.jsx)(o.a,{href:"https://docs.npmjs.com/getting-started/fixing-npm-permissions",children:"official documentation"})," to fix this."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Solution 2"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"docker container exec -u root -it jhipster bash"}),","]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"npm install -g YOUR_PACKAGE"}),","]}),"\n",(0,i.jsxs)(o.li,{children:["then exit and log into the container normally: ",(0,i.jsx)(o.code,{children:"docker container exec -it jhipster bash"})]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"building-and-running-a-docker-image-of-your-application",children:"Building and running a Docker image of your application"}),"\n",(0,i.jsxs)(o.p,{children:["To build a Docker image of your application using ",(0,i.jsx)(o.a,{href:"https://github.com/GoogleContainerTools/jib",children:"Jib"})," connecting to the local Docker daemon:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["NPM: ",(0,i.jsx)(o.code,{children:"npm run java:docker"}),", on Apple Silicon: ",(0,i.jsx)(o.code,{children:"npm run java:docker:arm64"})]}),"\n",(0,i.jsxs)(o.li,{children:["Maven: ",(0,i.jsx)(o.code,{children:"./mvnw package -Pprod verify jib:dockerBuild"})]}),"\n",(0,i.jsxs)(o.li,{children:["Gradle: ",(0,i.jsx)(o.code,{children:"./gradlew -Pprod bootJar jibDockerBuild"})]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"To build a Docker image of your application without Docker and push it directly into your Docker registry, run:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Maven: ",(0,i.jsx)(o.code,{children:"./mvnw package -Pprod verify jib:build -Djib.to.image=<dockerhub-username>/<artifact-id>"})]}),"\n",(0,i.jsxs)(o.li,{children:["Gradle: ",(0,i.jsx)(o.code,{children:"./gradlew -Pprod bootJar jib -Djib.to.image=<dockerhub-username>/<artifact-id>"})]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"If this doesn't work out of the box for you, refer to the Jib documentation for configurations details, specifically regarding how to set up authentication to a Docker registry:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"https://github.com/GoogleContainerTools/jib/tree/master/jib-maven-plugin#configuration",children:"Jib maven plugin documentation"})}),"\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"https://github.com/GoogleContainerTools/jib/tree/master/jib-gradle-plugin#configuration",children:"Jib gradle plugin documentation"})}),"\n"]}),"\n",(0,i.jsxs)(o.admonition,{type:"warning",children:[(0,i.jsx)(o.p,{children:"Due to the way Jib works, it will first try to pull the latest version of the base Docker image from the configured Docker registry. This is on purpose as in a CI environment you must ensure that you always build on top of the latest patched base image."}),(0,i.jsxs)(o.p,{children:["However in a local environment, this might fail your build if jib cannot access the Docker registry. A workaround for this is to use the ",(0,i.jsx)(o.code,{children:"--offline"})," flag and will fix the issue as long as jib has already pulled the base Docker image in its cache."]}),(0,i.jsxs)(o.p,{children:["With Maven, type: ",(0,i.jsx)(o.code,{children:"./mvnw -Pprod package verify jib:dockerBuild --offline"}),"\nWith Gradle, type: ",(0,i.jsx)(o.code,{children:"./gradlew -Pprod bootJar jibDockerBuild --offline"})]}),(0,i.jsxs)(o.p,{children:["If jib has not already pulled the base Docker image in its cache, to do it, you need to modify the pom.xml (in case of Maven) or the docker.gradle (in case of Gradle) by adding ",(0,i.jsx)(o.code,{children:"docker://"}),' as prefix of your base image (at the "image" tag, nested in the "from" tag).']}),(0,i.jsxs)(o.p,{children:["Example: ",(0,i.jsx)(o.code,{children:"docker://imagename:latest"}),"\nIn this way jib puts the image present in your local docker daemon in its cache."]})]}),"\n",(0,i.jsxs)(o.p,{children:["To run this image, use the Docker Compose configuration located in the ",(0,i.jsx)(o.code,{children:"src/main/docker"})," folder of your application:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/app.yml up"})}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"This command will start up your application and the services it relies on (database, search engine, Consul, JHipster Registry...)."}),"\n",(0,i.jsxs)(o.p,{children:["If you chose OAuth 2.0 for authentication, be sure to read our ",(0,i.jsx)(o.a,{href:"#keycloak",children:"Keycloak section on this documentation"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"generating-a-custom-docker-compose-configuration-for-multiple-applications",children:"Generating a custom Docker-Compose configuration for multiple applications"}),"\n",(0,i.jsxs)(o.p,{children:["If your architecture is composed of several JHipster applications, you can use the specific ",(0,i.jsx)(o.code,{children:"docker-compose"})," sub-generator, which will generate a global Docker Compose configuration for all selected applications. This will allow you to deploy and scale your complete architecture with one command.\nTo use the ",(0,i.jsx)(o.code,{children:"docker-compose"})," subgenerator:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"You need to have all your monolith(s), gateway(s) and microservices in the same directory."}),"\n",(0,i.jsxs)(o.li,{children:["Create another directory, for example ",(0,i.jsx)(o.code,{children:"mkdir docker-compose"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:["Go into that directory: ",(0,i.jsx)(o.code,{children:"cd docker-compose"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:["Run the sub-generator: ",(0,i.jsx)(o.code,{children:"jhipster docker-compose"}),"."]}),"\n",(0,i.jsx)(o.li,{children:"The sub-generator will ask you which application you want to have in your architecture, and if you want to setup monitoring with ELK or Prometheus."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["This will generate a global Docker Compose configuration, type ",(0,i.jsx)(o.code,{children:"docker-compose up"})," to run it, and have all your services running at once."]}),"\n",(0,i.jsx)(o.p,{children:"In the case of a microservice architecture, this configuration will also pre-configure Consul or JHipster Registry, that will configure your services automatically:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Those services will wait until the Consul (or JHipster Registry) is running to start. This can be configured in your ",(0,i.jsx)(o.code,{children:"bootstrap-prod.yml"})," file using the ",(0,i.jsx)(o.code,{children:"spring.cloud[.consul].config.fail-fast"})," and ",(0,i.jsx)(o.code,{children:"spring.cloud[.consul].config.retry"})," keys."]}),"\n",(0,i.jsx)(o.li,{children:"The registry will configure your applications, for example it will share the JWT secret token between all services."}),"\n",(0,i.jsxs)(o.li,{children:["Scaling each service is done using Docker Compose, for example type ",(0,i.jsx)(o.code,{children:"docker-compose scale test-app=4"}),' to have 4 instances of application "test" running. Those instances will be automatically load-balanced by the gateway(s), and will automatically join the same Hazelcast cluster (if Hazelcast is your Hibernate 2nd-level cache).']}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"working-with-databases",children:"Working with databases"}),"\n",(0,i.jsx)(o.h3,{id:"mysql-mariadb-postgresql-oracle-mongodb-couchbase-neo4j-or-cassandra",children:"MySQL, MariaDB, PostgreSQL, Oracle, MongoDB, Couchbase, Neo4j or Cassandra"}),"\n",(0,i.jsxs)(o.p,{children:["Running ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/app.yml up"})," already starts up your database automatically."]}),"\n",(0,i.jsx)(o.p,{children:"If you only want to start your database, and not the other services, use the Docker Compose configuration of your database:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["With MySQL: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/mysql.yml up"})]}),"\n",(0,i.jsxs)(o.li,{children:["With MariaDB: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/mariadb.yml up"})]}),"\n",(0,i.jsxs)(o.li,{children:["With PostgreSQL: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/postgresql.yml up"})]}),"\n",(0,i.jsxs)(o.li,{children:["With Oracle: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/oracle.yml up"})]}),"\n",(0,i.jsxs)(o.li,{children:["With MongoDB: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/mongodb.yml up"})]}),"\n",(0,i.jsxs)(o.li,{children:["With Cassandra: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/cassandra.yml up"})]}),"\n",(0,i.jsxs)(o.li,{children:["With Couchbase: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/couchbase.yml up"})]}),"\n",(0,i.jsxs)(o.li,{children:["With Neo4j: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/neo4j.yml up"})]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"mongodb-cluster-mode",children:"MongoDB Cluster Mode"}),"\n",(0,i.jsx)(o.p,{children:"If you want to use MongoDB with a replica set or shards and a shared configuration between them, you need to build and set up manually MongoDB images.\nFollow these steps to do so:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Build the image: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/mongodb-cluster.yml build"})]}),"\n",(0,i.jsxs)(o.li,{children:["Run the database: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/mongodb-cluster.yml up -d"})]}),"\n",(0,i.jsxs)(o.li,{children:["Scale the MongoDB node service (you have to choose an odd number of nodes): ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/mongodb-cluster.yml scale <name_of_your_app>-mongodb-node=<X>"})]}),"\n",(0,i.jsxs)(o.li,{children:["Init the replica for mongo config server: ",(0,i.jsx)(o.code,{children:"docker exec -it <name_of_your_app>-mongodb-config mongo\xa0 --port 27019 --eval 'rs.initiate();'"})]}),"\n",(0,i.jsxs)(o.li,{children:["Init the replica set (parameter X is the number of nodes you input in the previous step, folder is the folder where the YML file is located, it's ",(0,i.jsx)(o.code,{children:"docker"})," by default): ",(0,i.jsx)(o.code,{children:"docker container exec -it <yml_folder_name>_<name_of_your_app>-mongodb-node_1 mongo --port 27018 --eval 'var param=<X>, folder=\"<yml_folder_name>\"' init_replicaset.js"})]}),"\n",(0,i.jsxs)(o.li,{children:["Init the shard: ",(0,i.jsx)(o.code,{children:"docker container exec -it <yml_folder_name>_<name_of_your_app>-mongodb_1 mongo --eval 'sh.addShard(\"rs1/<yml_folder_name>_<name_of_your_app>-mongodb-node_1:27018\")'"})]}),"\n",(0,i.jsxs)(o.li,{children:["Build a Docker image of your application: ",(0,i.jsx)(o.code,{children:"./mvnw -Pprod clean verify jib:dockerBuild"})," or ",(0,i.jsx)(o.code,{children:"./gradlew -Pprod clean bootJar jibDockerBuild"})]}),"\n",(0,i.jsxs)(o.li,{children:["Start your application: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/app.yml up -d <name_of_your_app>-app"})]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"If you want to add or remove some MongoDB nodes, repeat step 3 and 4."}),"\n",(0,i.jsx)(o.h3,{id:"couchbase-cluster-mode",children:"Couchbase Cluster Mode"}),"\n",(0,i.jsx)(o.p,{children:"If you want to use Couchbase with multiple nodes, you need to build and set up manually Couchbase images.\nFollow these steps to do so:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Build the image: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/couchbase-cluster.yml build"})]}),"\n",(0,i.jsxs)(o.li,{children:["Run the database: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/couchbase-cluster.yml up -d"})]}),"\n",(0,i.jsxs)(o.li,{children:["Scale the Couchbase node service (you have to choose an odd number of nodes): ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/couchbase-cluster.yml scale <name_of_your_app>-couchbase-node=<X>"})]}),"\n",(0,i.jsxs)(o.li,{children:["Build a Docker image of your application: ",(0,i.jsx)(o.code,{children:"./mvnw -Pprod clean verify jib:dockerBuild"})," or ",(0,i.jsx)(o.code,{children:"./gradlew -Pprod clean bootJar jibDockerBuild"})]}),"\n",(0,i.jsxs)(o.li,{children:["Start your application: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/app.yml up -d <name_of_your_app>-app"})]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"cassandra",children:"Cassandra"}),"\n",(0,i.jsx)(o.p,{children:"Unlike the other databases, where the schema migrations are applied by the application itself, Cassandra schema migrations are applied by a dedicated Docker container."}),"\n",(0,i.jsx)(o.h4,{id:"cassandra-in-development",children:"Cassandra in development"}),"\n",(0,i.jsxs)(o.p,{children:["To start a Cassandra cluster to run your application locally, you can use the docker_compose file for development use:\n",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/cassandra.yml up -d"})]}),"\n",(0,i.jsx)(o.p,{children:"Docker-compose will start 2 services:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"<name_of_your_app>-cassandra"}),":  a container with the Cassandra node contact point"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"<name_of_your_app>-cassandra-migration"}),": a container to automatically apply all CQL\xa0migrations scripts (create the Keyspace, create the tables, all data migrations, ...)"]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["See the ",(0,i.jsx)(o.a,{href:"/using-cassandra/",children:"Cassandra page"})," for more information on how to add new CQL scripts without restarting the local cluster."]}),"\n",(0,i.jsx)(o.h4,{id:"cassandra-in-production",children:"Cassandra in production:"}),"\n",(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.code,{children:"app.yml"})," docker-compose file uses ",(0,i.jsx)(o.code,{children:"cassandra-cluster.yml"})," to configure the cluster.\nThe application starts after few seconds (see ",(0,i.jsx)(o.em,{children:"JHIPSTER_SLEEP"})," variable) to gives the time to the cluster to start and the migrations to be applied."]}),"\n",(0,i.jsx)(o.p,{children:"One big difference between Cassandra and the other databases, is that you can scale your cluster with Docker Compose. To have X+1 nodes in your cluster, run:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/cassandra-cluster.yml scale <name_of_your_app>-cassandra-node=X"})}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"microsoft-sql-server",children:"Microsoft SQL Server"}),"\n",(0,i.jsx)(o.p,{children:"If you want to use the MSSQL Docker image with JHipster, there are a few steps to follow:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Increase the RAM available to Docker to at least 3.25GB"}),"\n",(0,i.jsxs)(o.li,{children:["Run the database: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/mssql.yml up -d"})]}),"\n",(0,i.jsx)(o.li,{children:"Create the database with a MSSQL client of your choice"}),"\n",(0,i.jsxs)(o.li,{children:["Start your application: ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/app.yml up -d <name_of_your_app>-app"})]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"elasticsearch",children:"Elasticsearch"}),"\n",(0,i.jsxs)(o.p,{children:["Running ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/app.yml up"})," already starts up your search engine automatically."]}),"\n",(0,i.jsx)(o.p,{children:"If you only want to start your Elasticsearch node, and not the other services, use its specific Docker Compose configuration:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/elasticsearch.yml up"})}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"sonar",children:"Sonar"}),"\n",(0,i.jsx)(o.p,{children:"A Docker Compose configuration is generated for running Sonar:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/sonar.yml up"})}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"To analyze your code, run Sonar on your project:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["With Maven: ",(0,i.jsx)(o.code,{children:"./mvnw initialize sonar:sonar"})]}),"\n",(0,i.jsxs)(o.li,{children:["With Gradle: ",(0,i.jsx)(o.code,{children:"./gradlew sonar"})]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["The Sonar reports will be available at: ",(0,i.jsx)(o.a,{href:"http://localhost:9000",children:"http://localhost:9000"})]}),"\n",(0,i.jsx)(o.h2,{id:"keycloak",children:"Keycloak"}),"\n",(0,i.jsxs)(o.p,{children:["If you chose OAuth 2.0 as your authentication, Keycloak is used as the default identity provider. Running ",(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/app.yml up"})," starts up Keycloak automatically."]}),"\n",(0,i.jsxs)(o.p,{children:["To make Keycloak work, you need to add the following line to your hosts file (",(0,i.jsx)(o.code,{children:"/etc/hosts"})," on Mac/Linux, ",(0,i.jsx)(o.code,{children:"c:\\Windows\\System32\\Drivers\\etc\\hosts"})," on Windows)."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"127.0.0.1\tkeycloak\n"})}),"\n",(0,i.jsxs)(o.p,{children:["This is because you will access your application with a browser on your machine (which name is localhost, or ",(0,i.jsx)(o.code,{children:"127.0.0.1"}),"), but inside Docker it will run in its own container, which name is ",(0,i.jsx)(o.code,{children:"keycloak"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"If you only want to start Keycloak, and not the other services, use its specific Docker Compose configuration:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/keycloak.yml up"})}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"common-commands",children:"Common commands"}),"\n",(0,i.jsx)(o.h3,{id:"list-the-containers",children:"List the containers"}),"\n",(0,i.jsxs)(o.p,{children:["You can use ",(0,i.jsx)(o.code,{children:"docker container ps -a"})," to list all the containers"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell",children:'$ docker container ps -a\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\nfc35e1090021        mysql               "/entrypoint.sh mysql"   4 seconds ago       Up 4 seconds        0.0.0.0:3306->3306/tcp   sampleApplication-mysql\n'})}),"\n",(0,i.jsx)(o.h3,{id:"docker-stats-for-containers",children:"Docker stats for containers"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"docker container stats"})," or ",(0,i.jsx)(o.code,{children:"docker container stats $(docker container ps --format={{.Names}})"})," to list all running containers with CPU, Memory, Networking I/O and Block I/O stats."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell",children:"$ docker container stats $(docker container ps --format={{.Names}})\nCONTAINER                 CPU %               MEM USAGE / LIMIT     MEM %               NET I/O               BLOCK I/O             PIDS\njhips-mysql               0.04%               221 MB / 7.966 GB     2.77%               66.69 kB / 36.78 kB   8.802 MB / 302.5 MB   37\n00compose_msmongo-app_1   0.09%               965.6 MB / 7.966 GB   12.12%              121.3 kB / 54.64 kB   89.84 MB / 14.88 MB   35\n00compose_gateway-app_1   0.39%               1.106 GB / 7.966 GB   13.89%              227.5 kB / 484 kB     117 MB / 28.84 MB     92\njhipster-registry         0.74%               1.018 GB / 7.966 GB   12.78%              120.2 kB / 126.4 kB   91.12 MB / 139.3 kB   63\ngateway-elasticsearch     0.27%               249.1 MB / 7.966 GB   3.13%               42.57 kB / 21.33 kB   48.16 MB / 4.096 kB   58\n00compose_jhips-app_1     0.29%               1.042 GB / 7.966 GB   13.08%              101.8 kB / 78.84 kB   70.08 MB / 13.5 MB    68\nmsmongo-mongodb           0.34%               44.8 MB / 7.966 GB    0.56%               49.72 kB / 48.08 kB   33.97 MB / 811 kB     18\ngateway-mysql             0.03%               202.7 MB / 7.966 GB   2.54%               60.84 kB / 31.22 kB   27.03 MB / 297 MB     37\n"})}),"\n",(0,i.jsx)(o.h3,{id:"scale-a-container",children:"Scale a container"}),"\n",(0,i.jsxs)(o.p,{children:["Run ",(0,i.jsx)(o.code,{children:"docker-compose scale test-app=4"}),' to have 4 instances of application "test" running.']}),"\n",(0,i.jsx)(o.h3,{id:"stop-containers",children:"Stop containers"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.code,{children:"docker-compose -f src/main/docker/app.yml stop"})}),"\n",(0,i.jsx)(o.p,{children:"You can also use directly Docker:"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.code,{children:"docker container stop <container_id>"})}),"\n",(0,i.jsx)(o.p,{children:"When you stop a container, the data is not deleted, unless you delete the container."}),"\n",(0,i.jsx)(o.h3,{id:"delete-a-container",children:"Delete a container"}),"\n",(0,i.jsx)(o.p,{children:"Be careful! All data will be deleted:"}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.code,{children:"docker container rm <container_id>"})}),"\n",(0,i.jsx)("h2",{id:"memory-tweaking",children:"Memory Tweaking"}),"\n",(0,i.jsxs)(o.p,{children:["In order to optimize memory usage for applications running in the container, you can setup Java memory parameters on ",(0,i.jsx)(o.code,{children:"Dockerfile"})," or ",(0,i.jsx)(o.code,{children:"docker-compose.yml"})]}),"\n",(0,i.jsx)(o.h3,{id:"adding-memory-parameters-to-dockerfile",children:"Adding memory parameters to Dockerfile"}),"\n",(0,i.jsx)(o.p,{children:"Set the environment variable."}),"\n",(0,i.jsx)(o.p,{children:"ENV JAVA_OPTS=-Xmx512m -Xms256m"}),"\n",(0,i.jsx)(o.h3,{id:"adding-memory-parameters-to-docker-composeyml",children:"Adding memory parameters to docker-compose.yml"}),"\n",(0,i.jsx)(o.p,{children:"This solution is desired over Dockerfile. In this way, you have a single control point for your memory configuration on all containers that compose your application."}),"\n",(0,i.jsxs)(o.p,{children:["Add the ",(0,i.jsx)(o.code,{children:"JAVA_OPTS"})," into ",(0,i.jsx)(o.code,{children:"environment"})," section."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-yaml",children:"environment:\n  - (...)\n  - JAVA_OPTS=-Xmx512m -Xms256m\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Depending on the Docker base image, ",(0,i.jsx)(o.code,{children:"JAVA_OPTS"})," won't work. In this case, try to use ",(0,i.jsx)(o.code,{children:"_JAVA_OPTIONS"})," instead:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-yaml",children:"environment:\n  - (...)\n  - _JAVA_OPTIONS=-Xmx512m -Xms256m\n"})})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function c(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);