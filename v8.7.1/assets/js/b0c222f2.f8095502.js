"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[1698],{36227:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var l=s(74848),t=s(28453);const o={title:"Kubernetes and Google Cloud SQL",slug:"/tips/018_tip_kubernetes_and_google_cloud_sql.html",last_update:{date:new Date("2016-11-13T19:00:00.000Z")}},i=void 0,c={id:"tips/tip_kubernetes_and_google_cloud_sql",title:"Kubernetes and Google Cloud SQL",description:"Tip submitted by @bourdux",source:"@site/docs/tips/018_tip_kubernetes_and_google_cloud_sql.mdx",sourceDirName:"tips",slug:"/tips/018_tip_kubernetes_and_google_cloud_sql.html",permalink:"/documentation-archive/v8.7.1/tips/018_tip_kubernetes_and_google_cloud_sql.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tips/018_tip_kubernetes_and_google_cloud_sql.mdx",tags:[],version:"current",lastUpdatedAt:14790636e5,sidebarPosition:18,frontMatter:{title:"Kubernetes and Google Cloud SQL",slug:"/tips/018_tip_kubernetes_and_google_cloud_sql.html",last_update:{date:"2016-11-13T19:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"REPL with the remote shell (deprecated)",permalink:"/documentation-archive/v8.7.1/tips/017_tip_repl_with_the_remote_shell.html"},next:{title:"Boost performance of pagination with infinite scrolling using Slice",permalink:"/documentation-archive/v8.7.1/tips/019_tip_infinite_scroll_with_slice.html"}},r={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize gcloud and kubectl",id:"initialize-gcloud-and-kubectl",level:2},{value:"Create a Cloud SQL instance",id:"create-a-cloud-sql-instance",level:2},{value:"Create a container cluster",id:"create-a-container-cluster",level:2},{value:"Building and pushing the docker image",id:"building-and-pushing-the-docker-image",level:2},{value:"Get the credentials and register them with Kubernetes",id:"get-the-credentials-and-register-them-with-kubernetes",level:2},{value:"Modify the Kubernetes deployment config",id:"modify-the-kubernetes-deployment-config",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["Tip submitted by ",(0,l.jsx)(n.a,{href:"https://github.com/bourdux",children:"@bourdux"})]})}),"\n",(0,l.jsxs)(n.p,{children:["While it is already easy to deploy a JHipster application to ",(0,l.jsx)(n.a,{href:"https://cloud.google.com/container-engine/",children:"Google Container Engine"}),"\nusing the ",(0,l.jsx)(n.a,{href:"/kubernetes",children:"Kubernetes sub-generator"}),", the default behaviour is to create a Google Compute\nEngine VM for the database."]}),"\n",(0,l.jsxs)(n.p,{children:["If you want to take it one step further and use a fully-managed MySQL instance, you can use ",(0,l.jsx)(n.a,{href:"https://cloud.google.com/sql/",children:"Google Cloud SQL"}),".\nIt allows automated backups, maintenance, replication for high availability and nice scalability features."]}),"\n",(0,l.jsxs)(n.p,{children:["In this tip/tutorial, I will show you how you can deploy a JHipster application on Google Cloud that will use a Google\nCloud SQL database as a MySQL backend. In order to simplify the process, we will use a monolithic application. We will\nalso use a Maven build since it is my favourite one ",":p"]}),"\n",(0,l.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsx)(n.p,{children:"For this tutorial, you will need:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A Google Cloud Platform account. You can use a ",(0,l.jsx)(n.a,{href:"https://cloud.google.com/free-trial/",children:"60 day free trial"})," with $300 worth of free credit"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://cloud.google.com/sdk/",children:"Google Cloud SDK"})," since we will perform most of the operations from a terminal. I found the ",(0,l.jsx)(n.a,{href:"https://cloud.google.com/sdk/downloads#interactive",children:"interactive installer"})," quite convenient"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.docker.com/products/overview",children:"Docker"})}),"\n",(0,l.jsx)(n.li,{children:"A JHipster application using MySQL as production database"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"initialize-gcloud-and-kubectl",children:"Initialize gcloud and kubectl"}),"\n",(0,l.jsxs)(n.p,{children:["First of all, if you never used ",(0,l.jsx)(n.code,{children:"gcloud"}),", you need to initialize it with the following command:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud init\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"gcloud"})," allows you to perform most the operations you could do from the Google Cloud Web console from the comfort of\nyour terminal. First of all, let's install ",(0,l.jsx)(n.code,{children:"kubectl"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud components install kubectl\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"kubectl"})," is a command line interface for running commands against Kubernetes clusters. You can also install it directly\nfrom the ",(0,l.jsx)(n.a,{href:"http://kubernetes.io/docs/user-guide/prereqs/",children:"Kubernetes website"})," but overall I found the gcloud installation\nmore convenient."]}),"\n",(0,l.jsxs)(n.p,{children:["Now you need to create a google cloud project. For this purpose you will need to go through the web console, as gcloud\ndoes not allow you to create projects from CLI (not yet as it is an alpha feature). Alternatively you can use the ",(0,l.jsx)(n.a,{href:"https://cloud.google.com/resource-manager/docs/creating-project",children:"Resource\nManager API"}),"."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"https://console.cloud.google.com",children:"Google Cloud Platform Console"})]}),"\n",(0,l.jsxs)(n.li,{children:["Click ",(0,l.jsx)(n.strong,{children:"Create Project"})]}),"\n",(0,l.jsxs)(n.li,{children:["Pick a project name, click ",(0,l.jsx)(n.strong,{children:"Create"})," and note the project ID, and/or customize as you feel."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["For this tutorial, purpose I picked the name ",(0,l.jsx)(n.code,{children:"jhipster-kubernetes-cloud-sql"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Then you need to:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Enable ",(0,l.jsx)(n.a,{href:"https://console.cloud.google.com/billing",children:"billing"})," on the project"]}),"\n",(0,l.jsxs)(n.li,{children:["Enable ",(0,l.jsx)(n.a,{href:"https://console.cloud.google.com/projectselector/kubernetes/list",children:"Container Engine API"})," on the project"]}),"\n",(0,l.jsxs)(n.li,{children:["Enable ",(0,l.jsx)(n.a,{href:"https://console.cloud.google.com/apis/dashboard",children:"API Manager"})," for Compute Engine, Cloud SQL and Container Engine"]}),"\n",(0,l.jsxs)(n.li,{children:["Enable ",(0,l.jsx)(n.a,{href:"https://console.developers.google.com/apis/api/sqladmin/overview",children:"Google Cloud SQL API"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Finally you need to tell ",(0,l.jsx)(n.code,{children:"gcloud"})," on which project you are currently working:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud config set project jhipster-kubernetes-cloud-sql\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can also tell it where you want your instances to be created by default. I chose ",(0,l.jsx)(n.code,{children:"europe-west1-b"})," since I am a cheap\nEuropean :)"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud config set compute/zone europe-west1-b\n"})}),"\n",(0,l.jsx)(n.h2,{id:"create-a-cloud-sql-instance",children:"Create a Cloud SQL instance"}),"\n",(0,l.jsxs)(n.p,{children:["Then you need to create a Google Cloud SQL instance. You can do this via the web console, which is nice to get a good\nunderstanding on the available options or once again you can use ",(0,l.jsx)(n.code,{children:"gcloud"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud beta sql instances create jhipster-sqlcloud-db --region=europe-west1 --tier=db-f1-micro\\\n  --authorized-networks=`curl -s ifconfig.co` --backup-start-time=01:00 --enable-bin-log \\\n  --activation-policy=ALWAYS --storage-type=HDD --storage-size=10GB\n"})}),"\n",(0,l.jsxs)(n.p,{children:["With this command we create a SQL Cloud instance called ",(0,l.jsx)(n.code,{children:"jhipster-sql-cloud-db"})," in the ",(0,l.jsx)(n.code,{children:"europe-west1"})," region. We choose\nthe smallest machine type available. To see the full list of available tiers you can use ",(0,l.jsx)(n.code,{children:"gcloud sql tiers list"}),". Then we\nwhitelist our own ip for access with ",(0,l.jsx)(n.code,{children:"mysql"})," CLI, setup a backup time window starting from 1AM UTC, enable binary logging\nso we can go back in time if something goes wrong with the application. Finally we set the machine to be always activated\n(necessary as second generation machines are billed per use), set up a HDD storage (SSD is more performant but more\nexpensive) and set the storage size to the minimum size. Note: we need to use the beta gcloud client to create second\ngeneration SQL instances."]}),"\n",(0,l.jsx)(n.p,{children:"You can check that your instance started with the following command"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud sql instances list\nNAME                   REGION        TIER         ADDRESS         STATUS\njhipster-sqlcloud-db  europe-west1  db-f1-micro  146.148.21.155  RUNNABLE\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Since we whitelisted our IP address, we should be able to access to the DB instance with ",(0,l.jsx)(n.code,{children:"mysql"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"mysql --host=146.148.21.155 --user=root --password\n...\nmysql>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Since we're connected to the database let us create the application database and user. Since we will be using the\n",(0,l.jsx)(n.a,{href:"https://cloud.google.com/sql/docs/sql-proxy",children:"Cloud SQL proxy"})," to connect the SQL instance from our application container,\nthe user hostname can be set to ",(0,l.jsx)(n.code,{children:"cloudsqlproxy~%"})," if you want to only allow connections through the proxy. The application\nname for this tutorial is ",(0,l.jsx)(n.code,{children:"jhipsterGoogleCloudSql"})," so the database name should have the same name if we want to use the\nconfiguration generated by JHipster."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"mysql> CREATE DATABASE jhipstergooglecloudsql;\nQuery OK, 1 row affected (0,03 sec)\n\nmysql> CREATE USER 'jhipster'@'cloudsqlproxy~%';\nQuery OK, 0 rows affected (0,01 sec)\n\nmysql> GRANT ALL PRIVILEGES ON jhipstergooglecloudsql.* TO 'jhipster'@'cloudsqlproxy~%';\nQuery OK, 0 rows affected (0,01 sec)\n\nmysql> FLUSH PRIVILEGES;\nQuery OK, 0 rows affected (0,02 sec)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Do not forget to change the database user to jhipster in ",(0,l.jsx)(n.code,{children:"application-prod.yml"})]}),"\n",(0,l.jsx)(n.h2,{id:"create-a-container-cluster",children:"Create a container cluster"}),"\n",(0,l.jsxs)(n.p,{children:["Let us create a container cluster using ",(0,l.jsx)(n.a,{href:"https://cloud.google.com/container-engine/docs/",children:"GKE"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud container clusters create jhipster-sqlcloud-cluster --zone=europe-west1-b --machine-type=g1-small --num-nodes=1\n"})}),"\n",(0,l.jsx)(n.p,{children:"For this tutorial, we will use only 1 small node. In production, you will want at least 3 nodes :)"}),"\n",(0,l.jsx)(n.p,{children:"Let us then get kubectl get proper credentials for this cluster"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud container clusters get-credentials jhipster-sqlcloud-cluster\n\nFetching cluster endpoint and auth data.\nkubeconfig entry generated for jhipster-sqlcloud-cluster.\n"})}),"\n",(0,l.jsx)(n.h2,{id:"building-and-pushing-the-docker-image",children:"Building and pushing the docker image"}),"\n",(0,l.jsxs)(n.p,{children:["First of all run the ",(0,l.jsx)(n.a,{href:"/kubernetes",children:"Kubernetes sub-generator"}),'. Reply to the questions as usual but let us\nuse Container engine by pushing our docker image on Google Cloud. To the question "What should we use for the base Docker\nrepository name?", reply by ',(0,l.jsx)(n.code,{children:"gcr.io/jhipster-kubernetes-cloud-sql"}),". Replace with your project ID. For the docker image push\ncommand let us use ",(0,l.jsx)(n.code,{children:"gcloud docker -- push"})," in order to push to the project container repository."]}),"\n",(0,l.jsx)(n.p,{children:"Build your image"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"mvn package -Pprod jibDockerBuild\n"})}),"\n",(0,l.jsx)(n.p,{children:"Tag the image (replace with your jhipster application name). We use v1 as a tag to be able to easily deploy new versions\nof the application or rollback if something goes horribly wrong."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"docker image tag jhipstergooglecloudsql gcr.io/jhipster-kubernetes-cloud-sql/jhipstergooglecloudsql:v1\n"})}),"\n",(0,l.jsx)(n.p,{children:"You can then push the image to Google Container engine as follows:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud docker -- push gcr.io/jhipster-kubernetes-cloud-sql/jhipstergooglecloudsql:v1\n"})}),"\n",(0,l.jsx)(n.h2,{id:"get-the-credentials-and-register-them-with-kubernetes",children:"Get the credentials and register them with Kubernetes"}),"\n",(0,l.jsxs)(n.p,{children:["In order to use the Cloud SQL proxy, we will have to create credentials for our application and to register them to\nKubernetes. The full process is available in the ",(0,l.jsx)(n.a,{href:"https://cloud.google.com/sql/docs/container-engine-connect",children:"Cloud SQL container engine connection documentation"}),"\nbut let me summarize the commands here."]}),"\n",(0,l.jsx)(n.p,{children:"Create a service account for your JHipster application"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'gcloud iam service-accounts create jhipster-application --display-name="JHipster application"\n'})}),"\n",(0,l.jsx)(n.p,{children:"Get the full iam account name (email used to generate key)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud iam service-accounts list\nNAME                                    EMAIL\nJHipster application                    jhipster-application@jhipster-kubernetes-cloud-sql.iam.gserviceaccount.com\n"})}),"\n",(0,l.jsx)(n.p,{children:"Give editor access to the project to the service account"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud projects add-iam-policy-binding jhipster-kubernetes-cloud-sql \\\n  --member serviceAccount:jhipster-application@jhipster-kubernetes-cloud-sql.iam.gserviceaccount.com \\\n  --role roles/editor\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Create the key and store it in ",(0,l.jsx)(n.code,{children:"jhipster-credentials.json"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"gcloud iam service-accounts keys create \\\n  --iam-account jhipster-application@jhipster-kubernetes-cloud-sql.iam.gserviceaccount.com jhipster-credentials.json\n"})}),"\n",(0,l.jsx)(n.p,{children:"We will use this key later when"}),"\n",(0,l.jsxs)(n.p,{children:["Register the key with ",(0,l.jsx)(n.code,{children:"kubectl"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"kubectl create secret generic cloudsql-oauth-credentials --from-file=credentials.json=jhipster-credentials.json\n"})}),"\n",(0,l.jsx)(n.h2,{id:"modify-the-kubernetes-deployment-config",children:"Modify the Kubernetes deployment config"}),"\n",(0,l.jsx)(n.p,{children:"First of all you can delete the generated mysql deployment file since we are going with a Cloud SQL instance."}),"\n",(0,l.jsxs)(n.p,{children:["Then we need to change a few things in ",(0,l.jsx)(n.code,{children:"jhipstergooglecloudsql-deployment.yml"}),". First of all the Spring data source URL\nshould be changed to localhost since we will be using a Cloud SQL proxy:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"jdbc:mysql://localhost:3306/jhipstergooglecloudsql?useUnicode=true&characterEncoding=utf8&useSSL=false\n"})}),"\n",(0,l.jsx)(n.p,{children:"Then you can add the version number to the container image:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"image: gcr.io/jhipster-kubernetes-cloud-sql/jhipstergooglecloudsql:v1\n"})}),"\n",(0,l.jsx)(n.p,{children:"Then we need to add an entry to deploy the cloud sql proxy with the sidecar pattern:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'- image: b.gcr.io/cloudsql-docker/gce-proxy:1.05\n  name: cloudsql-proxy\n  command: ["/cloud_sql_proxy", "--dir=/cloudsql",\n            "-instances=jhipster-kubernetes-cloud-sql:europe-west1:jhipster-sqlcloud-db=tcp:3306",\n            "-credential_file=/secrets/cloudsql/credentials.json"]\n  volumeMounts:\n    - name: cloudsql-oauth-credentials\n      mountPath: /secrets/cloudsql\n      readOnly: true\n    - name: ssl-certs\n      mountPath: /etc/ssl/certs\n'})}),"\n",(0,l.jsx)(n.p,{children:"As we may have noted, we also need to provide SSL certificates to communicate with Google API so we can connect to our\nCloud SQL instance."}),"\n",(0,l.jsx)(n.p,{children:"And finally add the appropriate volumes:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"volumes:\n  - name: cloudsql-oauth-credentials\n    secret:\n      secretName: cloudsql-oauth-credentials\n  - name: ssl-certs\n    hostPath:\n      path: /etc/ssl/certs\n"})}),"\n",(0,l.jsx)(n.p,{children:"The full deployment file should now look like this:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: jhipstergooglecloudsql\nspec:\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: jhipstergooglecloudsql\n    spec:\n      containers:\n      - name: jhipstergooglecloudsql\n        image: gcr.io/jhipster-kubernetes-cloud-sql/jhipstergooglecloudsql:v1\n        env:\n        - name: SPRING_PROFILES_ACTIVE\n          value: prod\n        - name: SPRING_DATASOURCE_URL\n          value: jdbc:mysql://localhost:3306/jhipstergooglecloudsql?useUnicode=true&characterEncoding=utf8&useSSL=false\n        ports:\n        - containerPort: 8080\n      - image: b.gcr.io/cloudsql-docker/gce-proxy:1.05\n        name: cloudsql-proxy\n        command: ["/cloud_sql_proxy", "--dir=/cloudsql",\n                  "-instances=jhipster-kubernetes-cloud-sql:europe-west1:jhipster-sqlcloud-db=tcp:3306",\n                  "-credential_file=/secrets/cloudsql/credentials.json"]\n        volumeMounts:\n          - name: cloudsql-oauth-credentials\n            mountPath: /secrets/cloudsql\n            readOnly: true\n          - name: ssl-certs\n            mountPath: /etc/ssl/certs\n      volumes:\n        - name: cloudsql-oauth-credentials\n          secret:\n            secretName: cloudsql-oauth-credentials\n        - name: ssl-certs\n          hostPath:\n            path: /etc/ssl/certs\n'})}),"\n",(0,l.jsxs)(n.p,{children:["You can then deploy the cluster with ",(0,l.jsx)(n.code,{children:"kubectl apply"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'kubectl apply -f jhipstergooglecloudsql\n\ndeployment "jhipstergooglecloudsql" created\nservice "jhipstergooglecloudsql" created\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Then you can get the external IP through ",(0,l.jsx)(n.code,{children:"kubectl get services"})," and test your application"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"kubectl get services jhipstergooglecloudsql\nNAME                     CLUSTER-IP     EXTERNAL-IP     PORT(S)    AGE\njhipstergooglecloudsql   10.95.251.18   104.199.51.11   8080/TCP   1m\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var l=s(96540);const t={},o=l.createContext(t);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);