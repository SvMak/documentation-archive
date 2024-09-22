"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[8404],{80470:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(74848),o=n(28453);const r={title:"Configuring Intellij IDEA",slug:"/configuring-ide-idea/",last_update:{date:new Date("2015-11-28T17:13:00.000Z")}},l=void 0,d={id:"environment/configuring-ide/configuring-ide-idea",title:"Configuring Intellij IDEA",description:"Open your project",source:"@site/docs/environment/configuring-ide/configuring-ide-idea.mdx",sourceDirName:"environment/configuring-ide",slug:"/configuring-ide-idea/",permalink:"/documentation-archive/v8.7.1/configuring-ide-idea/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/environment/configuring-ide/configuring-ide-idea.mdx",tags:[],version:"current",lastUpdatedAt:144873078e4,frontMatter:{title:"Configuring Intellij IDEA",slug:"/configuring-ide-idea/",last_update:{date:"2015-11-28T17:13:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Eclipse with Gradle",permalink:"/documentation-archive/v8.7.1/configuring-ide-eclipse-gradle/"},next:{title:"Visual Studio Code",permalink:"/documentation-archive/v8.7.1/configuring-ide-visual-studio-code/"}},s={},c=[{value:"Open your project",id:"open-your-project",level:2},{value:"Exclude directories",id:"exclude-directories",level:2},{value:"Spring Support (not available in Community Edition)",id:"spring-support-not-available-in-community-edition",level:2},{value:"Application &quot;hot restart&quot; with Spring Boot devtools",id:"application-hot-restart-with-spring-boot-devtools",level:2},{value:"Maven IDE profile",id:"maven-ide-profile",level:2},{value:"Gradle",id:"gradle",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"open-your-project",children:"Open your project"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Open your project normally"}),"\n",(0,t.jsx)(i.li,{children:"Maven should be detected, and your project will build automatically"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:'If you want more control on your setup, you can also choose "Import project".'}),"\n",(0,t.jsx)(i.h2,{id:"exclude-directories",children:"Exclude directories"}),"\n",(0,t.jsxs)(i.p,{children:["If you use Git, initialize your project (",(0,t.jsx)(i.code,{children:"git init && git add . && git commit -m 'Initial commit'"}),"), Intellij IDEA will automatically exclude directories which are ignored by Git (so you don't have anything to do)."]}),"\n",(0,t.jsx)(i.p,{children:"To exclude directories manually:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Right-click on the ",(0,t.jsx)(i.code,{children:"node_modules/"})," folder"]}),"\n",(0,t.jsx)(i.li,{children:'Select "Mark Directory As" and select "Excluded"'}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Exclude",src:n(83544).A+"",width:"400",height:"129"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Note:"})," If you are using Intellij IDEA Ultimate and would like to use IDEA to code the frontend you should ",(0,t.jsx)(i.strong,{children:"not"})," exclude ",(0,t.jsx)(i.code,{children:"node_modules"})," folder. Otherwise\nyou will not have any code assistance for the frontend code!"]}),"\n",(0,t.jsx)(i.h2,{id:"spring-support-not-available-in-community-edition",children:"Spring Support (not available in Community Edition)"}),"\n",(0,t.jsxs)(i.p,{children:["To add Spring support to many of the JHipster modules from a new project first go to ",(0,t.jsx)(i.code,{children:"File \u2192 Project Structure"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Project Structure",src:n(58035).A+"",width:"250",height:"146"})}),"\n",(0,t.jsxs)(i.p,{children:["Then go to the Modules tab, click on the ",(0,t.jsx)(i.code,{children:"+"}),' button, and then click on "Spring" to add Spring code assistance to your project.']}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Spring",src:n(7274).A+"",width:"300",height:"263"})}),"\n",(0,t.jsxs)(i.p,{children:["It will tell you there are unmapped Spring configuration files, click on the ",(0,t.jsx)(i.code,{children:"+"})," sign on the  bottom right (not the original one) and select all the Spring files that belong to your project, clicking the folder is enough to select everything."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Spring Application Context",src:n(91941).A+"",width:"300",height:"328"})}),"\n",(0,t.jsxs)(i.p,{children:["After that click ",(0,t.jsx)(i.code,{children:"OK"}),", and Spring should be configured with proper code assistance."]}),"\n",(0,t.jsxs)(i.p,{children:["Now click on the original ",(0,t.jsx)(i.code,{children:"+"})," button which you used to add Spring in the first place, and add Hibernate.\nYou do not need to add any files on this one, adding it there will give you Hibernate based code assistance. Remember to click ",(0,t.jsx)(i.code,{children:"OK"})," on the Project structure dialog."]}),"\n",(0,t.jsx)(i.p,{children:"You should now have Spring support for most of the codebase. You have to repeat this step every time you start a new project, as these settings are project-specific."}),"\n",(0,t.jsx)(i.h2,{id:"application-hot-restart-with-spring-boot-devtools",children:'Application "hot restart" with Spring Boot devtools'}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/using-boot-devtools.html",children:"Spring Boot devtools"}),' is configured by JHipster, and will "hot restart" your application when classes from your project are compiled. This is a must-have feature, as it makes your application updated on the fly.']}),"\n",(0,t.jsx)(i.p,{children:'By default IntelliJ IDEA does not automatically compile files when the application is running. To enable the "Compile on save" feature:'}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.code,{children:"File -> Settings -> Build, Execution, Deployment -> Compiler"}),' and enable "Make project automatically"']}),"\n",(0,t.jsxs)(i.li,{children:["Open the Action window :","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Linux : ",(0,t.jsx)(i.code,{children:"CTRL+SHIFT+A"})]}),"\n",(0,t.jsxs)(i.li,{children:["Mac OSX : ",(0,t.jsx)(i.code,{children:"SHIFT+COMMAND+A"})]}),"\n",(0,t.jsxs)(i.li,{children:["Windows : ",(0,t.jsx)(i.code,{children:"CTRL+ALT+SHIFT+/"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Enter ",(0,t.jsx)(i.code,{children:"Registry..."})," and enable ",(0,t.jsx)(i.code,{children:"compiler.automake.allow.when.app.running"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Note: For IntelliJ IDEA version 2021.2"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.code,{children:"File -> Settings -> Build, Execution, Deployment -> Compiler"}),' and enable "Build project automatically"']}),"\n",(0,t.jsxs)(i.li,{children:["Go to ",(0,t.jsx)(i.code,{children:"File -> Advanced Settings -> Compiler"}),' and enable "Allow auto-make to start even if developed application is currently running"']}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"maven-ide-profile",children:"Maven IDE profile"}),"\n",(0,t.jsxs)(i.p,{children:["If you are using Maven, you need to activate the ",(0,t.jsx)(i.code,{children:"IDE"})," profile in IntelliJ. This is used for applying IDE-specific tweaks\nwhich currently only includes applying the MapStruct annotation processor."]}),"\n",(0,t.jsxs)(i.p,{children:['Open the "Maven Projects" tool window (View -> Tool Windows), check the ',(0,t.jsx)(i.code,{children:"IDE"})," maven profile to activate it."]}),"\n",(0,t.jsx)(i.h2,{id:"gradle",children:"Gradle"}),"\n",(0,t.jsxs)(i.p,{children:["In order to get the best out-of-the-box experience with Gradle you should delegate all ",(0,t.jsx)(i.a,{href:"https://www.jetbrains.com/idea/whatsnew/#v2017-3-gradle",children:"IDE build/run actions to Gradle"})," directly. With this setting annotation processing is automatically configured and you won't have duplicated classes when mixing IDE and cli builds. If you are using an older version ( < 2016.3) you have to enable annotation processing manually."]})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},83544:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/configuring_ide_idea_1-4501b483dced0bef0361a683449b88e6.png"},58035:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/configuring_ide_idea_2-9c654df08c21cdc232ad3f7edc691f91.png"},7274:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/configuring_ide_idea_3-85dd2504f83f4e043aad88b263bb3b28.png"},91941:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/configuring_ide_idea_4-caba1e09ab1f5c3fe3ffdddf7f1cbdd8.png"},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>d});var t=n(96540);const o={},r=t.createContext(o);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);