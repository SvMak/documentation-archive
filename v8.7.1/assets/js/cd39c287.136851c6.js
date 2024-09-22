"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[5826],{36223:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=i(74848),t=i(28453);const l={title:"JHipster Domain Language (JDL) - Applications",slug:"/jdl/applications",last_update:{date:new Date("2019-10-27T12:00:00.000Z")}},r=void 0,c={id:"jdl/applications",title:"JHipster Domain Language (JDL) - Applications",description:"Syntax",source:"@site/docs/jdl/applications.mdx",sourceDirName:"jdl",slug:"/jdl/applications",permalink:"/documentation-archive/v8.7.1/jdl/applications",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/jdl/applications.mdx",tags:[],version:"current",lastUpdatedAt:15721776e5,frontMatter:{title:"JHipster Domain Language (JDL) - Applications",slug:"/jdl/applications",last_update:{date:"2019-10-27T12:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/documentation-archive/v8.7.1/jdl/getting-started"},next:{title:"Entities & fields",permalink:"/documentation-archive/v8.7.1/jdl/entities-fields"}},d={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Options in applications",id:"options-in-applications",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic example",id:"basic-example",level:3},{value:"More than one application",id:"more-than-one-application",level:3},{value:"With entities",id:"with-entities",level:3},{value:"With options",id:"with-options",level:3},{value:"Complete example breakdowns",id:"complete-example-breakdowns",level:2},{value:"Microservice workflow",id:"microservice-workflow",level:2},{value:"Available application configuration options",id:"available-application-configuration-options",level:2},{value:"See also",id:"see-also",level:2}];function o(e){const n={a:"a",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:"The application declaration is done as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jdl",children:"application {\n  config {\n    <application option name> <application option value>\n  }\n  [entities <application entity list>]\n  [<options>]\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Application configuration keys/values are specified under ",(0,s.jsx)(n.code,{children:"config"})," (which must be inside ",(0,s.jsx)(n.code,{children:"application"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"There can be 0, 1 or any application option as you want (provided they are valid)"}),"\n",(0,s.jsxs)(n.li,{children:["Entities that will be generated inside the application are listed via ",(0,s.jsx)(n.code,{children:"entities"}),", this is the recommended way to\ngenerate entities in applications.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This can be omitted but generating entities inside the app would require doing it:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"from another JDL file inside the app"}),"\n",(0,s.jsx)(n.li,{children:"or with the CLI"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"entities"})," keyword is optional: you can omit it, but every entity in the JDL file will be generated inside the\napplication"]}),"\n",(0,s.jsxs)(n.li,{children:["Applications can have regular options (like ",(0,s.jsx)(n.code,{children:"dto"})," or ",(0,s.jsx)(n.code,{children:"service"}),"), more information in the ",(0,s.jsx)(n.a,{href:"#options-in-applications",children:"next"})," section."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"options-in-applications",children:"Options in applications"}),"\n",(0,s.jsxs)(n.p,{children:["Option declarations (",(0,s.jsx)(n.code,{children:"dto"}),", ",(0,s.jsx)(n.code,{children:"service"}),", ",(0,s.jsx)(n.code,{children:"skipServer"}),", etc.) are supported in JDL applications, but with some rules."]}),"\n",(0,s.jsx)(n.p,{children:"Say we have this JDL file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jdl",children:"application {\n  config {\n    baseName app1\n  }\n  entities A, B, C\n  dto * with mapstruct\n}\n\napplication {\n  config {\n    baseName app2\n  }\n  entities C, D\n  paginate * with pagination except D \n}\n\napplication {\n  config {\n    baseName app3\n  }\n  entities * except A, B, C, D, F\n  service * with serviceClass\n}\n\nentity A\nentity B\nentity C\nentity D\nentity E\nentity F\n\npaginate * with infinite-scroll\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this sample, we can see a few things:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["There are 6 declared entities in the JDL file: ",(0,s.jsx)(n.code,{children:"A, B, C, D, E and F"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["We have 3 applications: ",(0,s.jsx)(n.code,{children:"app1, app2 and app3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app1"})," uses ",(0,s.jsx)(n.code,{children:"A, B and C"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app2"})," uses ",(0,s.jsx)(n.code,{children:"C and D"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app3"})," uses ",(0,s.jsx)(n.code,{children:"E"})," (",(0,s.jsx)(n.code,{children:"* except A, B, C, D, F"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Each of these applications declare options and a ",(0,s.jsx)(n.strong,{children:"global"})," option in also declared.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app1"})," uses ",(0,s.jsx)(n.code,{children:"dto"})," for ",(0,s.jsx)(n.code,{children:"A, B and C"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app2"})," uses ",(0,s.jsx)(n.code,{children:"paginate"})," for ",(0,s.jsx)(n.code,{children:"C"})," (because there's an exception)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app3"})," uses ",(0,s.jsx)(n.code,{children:"service"})," for ",(0,s.jsx)(n.code,{children:"E"})]}),"\n",(0,s.jsxs)(n.li,{children:["The global one also uses ",(0,s.jsx)(n.code,{children:"pagination"})," (for every entity)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here's how files are generated:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"A"}),": will use ",(0,s.jsx)(n.code,{children:"paginate with infinite-scroll"})," (the global option isn't overridden by a local one) and\n",(0,s.jsx)(n.code,{children:"dto with mapstruct"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"B"}),": will use the same options"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"C"}),": will also use the same options"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app2"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"C"}),": will use ",(0,s.jsx)(n.code,{children:"paginate with pagination"})," (and not ",(0,s.jsx)(n.code,{children:"infinite-scroll"}),", because the local one takes precedence)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"D"}),": will use ",(0,s.jsx)(n.code,{children:"paginate with infinite-scroll"})," as the previous option doesn't include ",(0,s.jsx)(n.code,{children:"D"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app3"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"E"}),": will ",(0,s.jsx)(n.code,{children:"paginate with infinite-scroll"})," and ",(0,s.jsx)(n.code,{children:"service E with serviceClass"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This example illustrates the ",(0,s.jsx)(n.strong,{children:"shadowing"})," principle. Global options are supported and will be used by every declared\napplication ",(0,s.jsx)(n.strong,{children:"unless"})," options are also declared in applications."]}),"\n",(0,s.jsxs)(n.p,{children:["Also note this snippet taken from the previous sample in ",(0,s.jsx)(n.code,{children:"app3"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jdl",children:"entities * except A, B, C, D, F\nservice * with serviceClass\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This basically means that ",(0,s.jsx)(n.code,{children:"app3"})," will only use ",(0,s.jsx)(n.code,{children:"E"})," and that the application's entities will use the ",(0,s.jsx)(n.code,{children:"service"})," option,\nthat means ",(0,s.jsx)(n.code,{children:"E"})," and not ",(0,s.jsx)(n.code,{children:"A to F"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, there the ",(0,s.jsx)(n.code,{children:"F"})," entity which isn't in any application and this entity will not be generated because of that."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note: all regular options are supported at the moment."})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"basic-example",children:"Basic example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jdl",children:"application {\n  config {\n    baseName exampleApp\n    applicationType gateway\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"more-than-one-application",children:"More than one application"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jdl",children:"application {\n  config {\n    baseName exampleApp1\n    applicationType microservice\n    serverPort 9001\n  }\n}\n\napplication {\n  config {\n    baseName exampleApp2\n    applicationType microservice\n    serverPort 9002\n  }\n}\n\napplication {\n  config {\n    baseName exampleApp3\n    applicationType gateway\n    serverPort 9000\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"with-entities",children:"With entities"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jdl",children:"application {\n  config {\n    baseName exampleApp1\n    applicationType microservice\n    serverPort 9001\n  }\n  entities A\n}\n\napplication {\n  config {\n    baseName exampleApp2\n    applicationType microservice\n    serverPort 9002\n  }\n  entities * except A\n}\n\nentity A\nentity B\nentity C\n"})}),"\n",(0,s.jsx)(n.h3,{id:"with-options",children:"With options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jdl",children:"application {\n  config {\n    baseName exampleApp1\n    applicationType microservice\n    serverPort 9001\n  }\n  entities A\n  dto A with mapstruct \n}\n\napplication {\n  config {\n    baseName exampleApp2\n    applicationType microservice\n    serverPort 9002\n  }\n  entities * except A\n  paginate C with pagination\n}\n\nentity A\nentity B\nentity C\n"})}),"\n",(0,s.jsx)(n.h2,{id:"complete-example-breakdowns",children:"Complete example breakdowns"}),"\n",(0,s.jsx)(n.p,{children:"Example 1:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jdl",children:"application {\n  config {\n    baseName myMonolith\n    applicationType monolith\n  }\n  entities * except C, D\n}\napplication {\n  config {\n    baseName myGateway\n    applicationType gateway\n    serverPort 9042\n  }\n  entities * except A, B\n}\napplication {\n  config {\n    baseName microserviceA\n    applicationType microservice\n  }\n  entities C\n}\napplication {\n  config {\n    baseName microserviceB\n    applicationType microservice\n    serverPort 8082\n  }\n  entities D\n}\nentity A\nentity B\nentity C\nentity D\ndto * with mapstruct\nservice * with serviceClass\npaginate D with pagination\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, several things will happen when generating these applications and folders:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Four applications will be created:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["myMonolith in ",(0,s.jsx)(n.code,{children:"./myMonolith"}),", with the server port ",(0,s.jsx)(n.code,{children:"8080"})]}),"\n",(0,s.jsxs)(n.li,{children:["myGateway in ",(0,s.jsx)(n.code,{children:"./myGateway"}),", with the server port ",(0,s.jsx)(n.code,{children:"9042"})]}),"\n",(0,s.jsxs)(n.li,{children:["microserviceA in ",(0,s.jsx)(n.code,{children:"./microserviceA"}),", with the server port ",(0,s.jsx)(n.code,{children:"8081"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Even though we didn't specify a server port, JHipster sets one by default."}),"\n",(0,s.jsxs)(n.li,{children:["For microservices, the default one is ",(0,s.jsx)(n.code,{children:"8081"})]}),"\n",(0,s.jsxs)(n.li,{children:["For gateways and monoliths, it's ",(0,s.jsx)(n.code,{children:"8080"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["microserviceB in ",(0,s.jsx)(n.code,{children:"./microserviceB"})," with the server port ",(0,s.jsx)(n.code,{children:"8082"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Four entities will be generated","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"A"})," and ",(0,s.jsx)(n.code,{children:"B"})," in the monolith"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"C"})," and ",(0,s.jsx)(n.code,{children:"D"})," both in the gateway","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"C"})," in the first microservice"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"D"})," in the second microservice"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"microservice"})," option is implicit for ",(0,s.jsx)(n.code,{children:"C"})," and ",(0,s.jsx)(n.code,{children:"D"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Because they get generated on the two microservices, this option will be set by default."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Options work the same way as before"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the generator sets default values if they aren't present (like the ",(0,s.jsx)(n.code,{children:"databaseType"}),").\nJHipster Core does the exact same things for you."]}),"\n",(0,s.jsx)(n.p,{children:"Example 2: with options"}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"#options-in-applications",children:"option section"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"microservice-workflow",children:"Microservice workflow"}),"\n",(0,s.jsxs)(n.p,{children:["Dealing with microservices is a almost tricky, but the JDL gives you some options to handle your entities as you see fit.\nWith the ",(0,s.jsx)(n.code,{children:"microservice <ENTITIES> with <MICROSERVICE_APP_NAME>"})," you can specify which entity gets generated in which microservice."]}),"\n",(0,s.jsx)(n.p,{children:"Take this setup for instance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"entity A\nentity B\nentity C\nmicroservice A with firstMS\nmicroservice B with secondMS\n"})}),"\n",(0,s.jsx)(n.p,{children:"Given two JHipster applications ('firstMS' and 'secondMS'), here's what you're going to get if you import the JDL file\nin the two applications:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In 'firstMS', entities ",(0,s.jsx)(n.code,{children:"A"})," and ",(0,s.jsx)(n.code,{children:"C"})," will be generated."]}),"\n",(0,s.jsxs)(n.li,{children:["In 'secondMS', entities ",(0,s.jsx)(n.code,{children:"B"})," and ",(0,s.jsx)(n.code,{children:"C"})," will be generated."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"C"})," gets generated in both because if there's no microservice option specifying where this entity gets generated, it\nwill be generated everywhere."]}),"\n",(0,s.jsx)(n.p,{children:"If you decide to import this JDL in a monolith app, every entity will be generated (monoliths don't have restriction\noptions in the JDL)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note: if you want to make the same entity be generated in two different microservices, you can write two JDL files\ninstead of updating the JDL file. Everytime."})}),"\n",(0,s.jsx)(n.p,{children:"The previous example couldn't have been written like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"entity A\nentity B\nentity C\nmicroservice * except B with firstMS\nmicroservice * except A with secondMS\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here's the result:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In 'firstMS', only the entity ",(0,s.jsx)(n.code,{children:"C"})," will be generated"]}),"\n",(0,s.jsxs)(n.li,{children:["In 'secondMS', entities ",(0,s.jsx)(n.code,{children:"B"})," and ",(0,s.jsx)(n.code,{children:"C"})," will be generated."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["It's because, at parsing-time, if an option overlaps with another, the latter takes precedence.\nYou can also create an entire microservice stack using JDL, ",(0,s.jsx)(n.a,{href:"https://medium.com/@deepu105/create-full-microservice-stack-using-jhipster-domain-language-under-30-minutes-ecc6e7fc3f77",children:"see this blog post"})," for example"]}),"\n",(0,s.jsx)(n.h2,{id:"available-application-configuration-options",children:"Available application configuration options"}),"\n",(0,s.jsx)(n.p,{children:"Here are the application options supported in the JDL:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Not what you're looking for? Check the ",(0,s.jsx)(n.a,{href:"/jdl/options#available-options",children:"regular options"}),"."]})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"JDL option name"}),(0,s.jsx)(n.th,{children:"Default value"}),(0,s.jsx)(n.th,{children:"Possible values"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"applicationType"}),(0,s.jsx)(n.td,{children:"monolith"}),(0,s.jsx)(n.td,{children:"monolith, microservice, gateway"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"authenticationType"}),(0,s.jsx)(n.td,{children:"jwt"}),(0,s.jsx)(n.td,{children:"jwt, session, oauth2"}),(0,s.jsx)(n.td,{children:"jwt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"baseName"}),(0,s.jsx)(n.td,{children:"jhipster"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.del,{children:"blueprint"})}),(0,s.jsx)(n.td,{children:"DEPRECATED"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.del,{children:"Name of an additional blueprint"})}),(0,s.jsxs)(n.td,{children:["See ",(0,s.jsx)(n.a,{href:"/jdl/applications#blueprints",children:"blueprints"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blueprints"}),(0,s.jsx)(n.td,{children:"[]"}),(0,s.jsxs)(n.td,{children:["Names of additional blueprints. See ",(0,s.jsx)(n.a,{href:"/modules/marketplace",children:"Marketplace"})," including custom blueprints internally published"]}),(0,s.jsxs)(n.td,{children:["Array of blueprints to use, e.g., ",(0,s.jsx)(n.code,{children:"[blueprint1, blueprint2]"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"buildTool"}),(0,s.jsx)(n.td,{children:"maven"}),(0,s.jsx)(n.td,{children:"maven, gradle"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cacheProvider"}),(0,s.jsx)(n.td,{children:"ehcache or hazelcast"}),(0,s.jsx)(n.td,{children:"caffeine, ehcache, hazelcast, infinispan, memcached, redis, no"}),(0,s.jsx)(n.td,{children:"ehcache for monoliths and gateways, hazelcast otherwise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientFramework"}),(0,s.jsx)(n.td,{children:"angularX"}),(0,s.jsx)(n.td,{children:"angularX, angular, react, vue, svelte, no"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientPackageManager"}),(0,s.jsx)(n.td,{children:"npm"}),(0,s.jsx)(n.td,{children:"npm"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientTheme"}),(0,s.jsx)(n.td,{children:"none"}),(0,s.jsx)(n.td,{children:"Something or none"}),(0,s.jsx)(n.td,{children:"You can put whatever value you want, provided you know it will work (like yeti)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientThemeVariant"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Something or primary"}),(0,s.jsx)(n.td,{children:"You can put whatever value you want, provided you know it will work (like dark, or light), can also be empty"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"databaseType"}),(0,s.jsx)(n.td,{children:"sql"}),(0,s.jsx)(n.td,{children:"sql, mongodb, cassandra, couchbase, no"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"devDatabaseType"}),(0,s.jsx)(n.td,{children:"h2Disk"}),(0,s.jsx)(n.td,{children:"h2Disk, h2Memory"}),(0,s.jsx)(n.td,{children:"* + the prod database type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dtoSuffix"}),(0,s.jsx)(n.td,{children:"DTO"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Suffix for DTOs. false for empty string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"enableHibernateCache"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"enableSwaggerCodegen"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"enableTranslation"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"entitySuffix"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Suffix for entities. false for empty string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"jhiPrefix"}),(0,s.jsx)(n.td,{children:"jhi"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"languages"}),(0,s.jsx)(n.td,{children:"[en, fr]"}),(0,s.jsx)(n.td,{children:"Languages available in JHipster"}),(0,s.jsx)(n.td,{children:"Braces are mandatory"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"messageBroker"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{children:"kafka, pulsar, no"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nativeLanguage"}),(0,s.jsx)(n.td,{children:"en"}),(0,s.jsx)(n.td,{children:"Any language supported by JHipster"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"packageName"}),(0,s.jsx)(n.td,{children:"com.mycompany.myapp"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Sets the packageFolder option"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"prodDatabaseType"}),(0,s.jsx)(n.td,{children:"mysql"}),(0,s.jsx)(n.td,{children:"mysql, mariadb, mssql, postgresql, oracle, no"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"reactive"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"searchEngine"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{children:"elasticsearch, couchbase, no"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"serverPort"}),(0,s.jsx)(n.td,{children:"8080, 8081 or 9999"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Depends on the app type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"serviceDiscoveryType"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{children:"consul, eureka, no"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"skipClient"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"skipServer"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"skipUserManagement"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"testFrameworks"}),(0,s.jsx)(n.td,{children:"[]"}),(0,s.jsx)(n.td,{children:"cypress, protractor, cucumber, gatling"}),(0,s.jsx)(n.td,{children:"Braces mandatory"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"websocket"}),(0,s.jsx)(n.td,{children:"no"}),(0,s.jsx)(n.td,{children:"spring-websocket, no"}),(0,s.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:["The regular options are available ",(0,s.jsx)(n.a,{href:"/jdl/options",children:"here"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(96540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);