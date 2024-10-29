"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[5347],{1178:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=n(74848),r=n(28453);const s={title:"Configuring Eclipse with Gradle",slug:"/configuring-ide-eclipse-gradle/",last_update:{date:new Date("2015-05-22T18:40:00.000Z")}},d=void 0,l={id:"environment/configuring-ide/configuring-ide-eclipse-gradle",title:"Configuring Eclipse with Gradle",description:"To get full Gradle support in eclipse you should install the buildship plugin.",source:"@site/docs/environment/configuring-ide/configuring-ide-eclipse-gradle.mdx",sourceDirName:"environment/configuring-ide",slug:"/configuring-ide-eclipse-gradle/",permalink:"/documentation-archive/v8.7.2/configuring-ide-eclipse-gradle/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/environment/configuring-ide/configuring-ide-eclipse-gradle.mdx",tags:[],version:"current",lastUpdatedAt:143232e7,frontMatter:{title:"Configuring Eclipse with Gradle",slug:"/configuring-ide-eclipse-gradle/",last_update:{date:"2015-05-22T18:40:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Eclipse with Maven",permalink:"/documentation-archive/v8.7.2/configuring-ide-eclipse/"},next:{title:"Intellij IDEA",permalink:"/documentation-archive/v8.7.2/configuring-ide-idea/"}},c={},o=[{value:"1. Import your project as a Gradle project",id:"1-import-your-project-as-a-gradle-project",level:2},{value:"2. Add apt generated source folder to build path",id:"2-add-apt-generated-source-folder-to-build-path",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["To get full Gradle support in eclipse you should install the ",(0,t.jsx)(i.a,{href:"https://gradle.org/eclipse/",children:"buildship plugin"}),".\nFor configuring the ",(0,t.jsx)(i.a,{href:"/configuring-ide-eclipse",children:"JavaScript"})," side you can follow the instructions for Maven."]}),"\n",(0,t.jsx)(i.h2,{id:"1-import-your-project-as-a-gradle-project",children:"1. Import your project as a Gradle project"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.code,{children:"File -> Import"})]}),"\n",(0,t.jsxs)(i.li,{children:["Choose ",(0,t.jsx)(i.code,{children:"Gradle Project"})]}),"\n",(0,t.jsx)(i.li,{children:"Select your projects root directory"}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.code,{children:"Next"})," and finish the wizard"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Import",src:n(61402).A+"",width:"642",height:"594"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Select",src:n(75217).A+"",width:"690",height:"853"})}),"\n",(0,t.jsx)(i.h2,{id:"2-add-apt-generated-source-folder-to-build-path",children:"2. Add apt generated source folder to build path"}),"\n",(0,t.jsx)(i.p,{children:"When using buildship gradles default outputfolder is filtered and not visible in your workspace.\nTherefore you need to remove it from eclipse's resource filter setting."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Right click on your project and select ",(0,t.jsx)(i.code,{children:"Properties"})]}),"\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.code,{children:"Resources"})]}),"\n",(0,t.jsxs)(i.li,{children:["Remove the entry ",(0,t.jsx)(i.code,{children:"build"})]}),"\n",(0,t.jsxs)(i.li,{children:["Select ",(0,t.jsx)(i.code,{children:"Java Build Path"})]}),"\n",(0,t.jsxs)(i.li,{children:["Click ",(0,t.jsx)(i.code,{children:"Add Folder..."})]}),"\n",(0,t.jsxs)(i.li,{children:["Check the path ",(0,t.jsx)(i.code,{children:"build/generated/source/apt/main"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Make sure the new source folder contains the correctly generated mapper implementations when running JHipster via eclipse."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Exclude",src:n(77352).A+"",width:"857",height:"657"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Buildpath",src:n(52519).A+"",width:"881",height:"771"})})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},61402:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/configuring_ide_eclipse_gradle_1-9063b443cf39e9214671aa4874d985a0.png"},75217:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/configuring_ide_eclipse_gradle_2-472dc7a8110300b35aab61727c684f63.png"},77352:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/configuring_ide_eclipse_gradle_3-fc7b65daa624a24e4d3db626ad4dbd28.png"},52519:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/configuring_ide_eclipse_gradle_4-eaeaabfc334b4c250fd963952799a810.png"},28453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function d(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);