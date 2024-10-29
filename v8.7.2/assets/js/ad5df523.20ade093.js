"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[1957],{61844:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(74848),o=i(28453);const s={title:"Configuring Visual Studio Code",slug:"/configuring-ide-visual-studio-code/",last_update:{date:new Date("2016-09-15T17:13:00.000Z")}},r=void 0,a={id:"environment/configuring-ide/configuring-ide-visual-studio-code",title:"Configuring Visual Studio Code",description:"Visual Studio Code is an Open Source text editor made by Microsoft. It has excellent support for TypeScript, so many people want to use it for developing Angular 2 applications.",source:"@site/docs/environment/configuring-ide/configuring-ide-visual-studio-code.mdx",sourceDirName:"environment/configuring-ide",slug:"/configuring-ide-visual-studio-code/",permalink:"/documentation-archive/v8.7.2/configuring-ide-visual-studio-code/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/environment/configuring-ide/configuring-ide-visual-studio-code.mdx",tags:[],version:"current",lastUpdatedAt:147395958e4,frontMatter:{title:"Configuring Visual Studio Code",slug:"/configuring-ide-visual-studio-code/",last_update:{date:"2016-09-15T17:13:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Intellij IDEA",permalink:"/documentation-archive/v8.7.2/configuring-ide-idea/"},next:{title:"Netbeans",permalink:"/documentation-archive/v8.7.2/configuring-ide-netbeans/"}},d={},c=[{value:"Yeoman Support",id:"yeoman-support",level:2},{value:"Java Code Support",id:"java-code-support",level:2},{value:"Common tasks: compiling, running and packaging the code",id:"common-tasks-compiling-running-and-packaging-the-code",level:2},{value:"Application &quot;hot restart&quot; with Spring Boot devtools",id:"application-hot-restart-with-spring-boot-devtools",level:2},{value:"Custom settings",id:"custom-settings",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Visual Studio Code is an Open Source text editor made by Microsoft. It has excellent support for TypeScript, so many people want to use it for developing Angular 2 applications."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screenshot",src:i(72126).A+"",width:"600",height:"450"})}),"\n",(0,t.jsx)(n.h2,{id:"yeoman-support",children:"Yeoman Support"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Warning! At the time of this writing, this extension is broken"})}),"\n",(0,t.jsx)(n.p,{children:"Visual Studio Code has a Yeoman extension, which should help you run JHipster commands."}),"\n",(0,t.jsx)(n.p,{children:"You can install it by using the Visual Studio Code marketplace:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screenshot",src:i(92501).A+"",width:"440",height:"161"})}),"\n",(0,t.jsx)(n.h2,{id:"java-code-support",children:"Java Code Support"}),"\n",(0,t.jsx)(n.p,{children:"Visual Studio Code has a Java extension developed by Red Hat. It has a good Java support, using Maven or Gradle."}),"\n",(0,t.jsx)(n.p,{children:"You can install it by using the Visual Studio Code marketplace:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screenshot",src:i(80876).A+"",width:"440",height:"162"})}),"\n",(0,t.jsx)(n.h2,{id:"common-tasks-compiling-running-and-packaging-the-code",children:"Common tasks: compiling, running and packaging the code"}),"\n",(0,t.jsx)(n.p,{children:"The Visual Studio Code Java extension can't be used to run commands: it can't compile, run the code, or package the application."}),"\n",(0,t.jsx)(n.p,{children:"For all those tasks, there are 2 solutions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use the terminal, for instance the internal terminal provided by Visual Studio Code, to run those commands manually"}),"\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.a,{href:"/jhipster-app",children:"JHipster App"}),", which offers a graphical interface for all those commands. ",(0,t.jsx)(n.strong,{children:"Note:"})," JHipster App is deprecated."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"application-hot-restart-with-spring-boot-devtools",children:'Application "hot restart" with Spring Boot devtools'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/using-boot-devtools.html",children:"Spring Boot devtools"}),' is configured by JHipster, and will "hot restart" your application when classes from your project are compiled. This is a must-have feature, as it makes your application updated on the fly.']}),"\n",(0,t.jsx)(n.p,{children:"To use it within Visual Studio Code, you need to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Run your application in a terminal, typically by typing ",(0,t.jsx)(n.code,{children:"./mvnw"})]}),"\n",(0,t.jsxs)(n.li,{children:["In another terminal, compile your application: ",(0,t.jsx)(n.code,{children:"./mvnw compile"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the first terminal, your JHipster application should automatically redeploy, and use your new code."}),"\n",(0,t.jsx)(n.p,{children:"If you use the JHipster App, this is only a matter of clicking on 2 buttons (one for running the application, the other for compiling it), and your application will automatically redeploy in the same way."}),"\n",(0,t.jsx)(n.h2,{id:"custom-settings",children:"Custom settings"}),"\n",(0,t.jsxs)(n.p,{children:["For best performance, it's recommended to exclude some folders, in your project's ",(0,t.jsx)(n.code,{children:".vscode"})," folder create a ",(0,t.jsx)(n.code,{children:"settings.json"})," file as below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    // Configure glob patterns for excluding files and folders.\n    "files.exclude": {\n        "**/.git": true,\n        "**/.gradle": true,\n        "**/.idea": true,\n        "**/.mvn": true,\n        "**/.svn": true,\n        "**/.hg": true,\n        "**/.DS_Store": true\n    },\n    // Configure glob patterns for excluding files and folders in searches. Inherits all glob patterns from the files.exclude setting.\n    "search.exclude": {\n        "**/node": true,\n        "**/node_modules": true,\n        "**/bower_components": true,\n        "**/build": true,\n        "**/target": true\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},72126:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/configuring_ide_visual_studio_code_1-c65f45c343899f6829e79cce634cf7dc.png"},92501:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/configuring_ide_visual_studio_code_2-6ab4b3ab5cda182c347568904f8c8ec5.png"},80876:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/configuring_ide_visual_studio_code_3-fdcbdb0c441bf81d147c7b19eb7a466e.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);