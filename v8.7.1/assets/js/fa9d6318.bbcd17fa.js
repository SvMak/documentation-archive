"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[5453],{59841:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(74848),s=i(28453);const o={title:"Setting up Jenkins 1 on Windows",slug:"/setting-up-ci-windows/",last_update:{date:new Date("2015-01-09T12:40:00.000Z")}},l=void 0,r={id:"tests-and-qa/setting-up-ci/setting-up-ci-windows",title:"Setting up Jenkins 1 on Windows",description:"Installing Jenkins",source:"@site/docs/tests-and-qa/setting-up-ci/setting-up-ci-windows.mdx",sourceDirName:"tests-and-qa/setting-up-ci",slug:"/setting-up-ci-windows/",permalink:"/documentation-archive/v8.7.1/setting-up-ci-windows/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tests-and-qa/setting-up-ci/setting-up-ci-windows.mdx",tags:[],version:"current",lastUpdatedAt:14208072e5,frontMatter:{title:"Setting up Jenkins 1 on Windows",slug:"/setting-up-ci-windows/",last_update:{date:"2015-01-09T12:40:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Jenkins 1 on Linux",permalink:"/documentation-archive/v8.7.1/setting-up-ci-linux/"},next:{title:"Setting up Jenkins 2",permalink:"/documentation-archive/v8.7.1/setting-up-ci-jenkins2/"}},a={},d=[{value:"Installing Jenkins",id:"installing-jenkins",level:2},{value:"Configuring Jenkins",id:"configuring-jenkins",level:2},{value:"Installing JDK 8",id:"installing-jdk-8",level:3},{value:"Installing Maven",id:"installing-maven",level:3},{value:"Installing PhantomJS",id:"installing-phantomjs",level:3},{value:"Installing NodeJS",id:"installing-nodejs",level:2}];function c(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"installing-jenkins",children:"Installing Jenkins"}),"\n",(0,t.jsxs)(e.p,{children:["Download the Jenkins Windows Installer from ",(0,t.jsx)(e.a,{href:"https://jenkins.io/",children:"https://jenkins.io/"})]}),"\n",(0,t.jsx)(e.p,{children:"The installer configures Jenkins to run as a service using the SYSTEM user which can be dangerous, it's safer to change the user's service to a non privileged one:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"http://antagonisticpleiotropy.blogspot.fr/2012/08/running-jenkins-in-windows-with-regular.html",children:"http://antagonisticpleiotropy.blogspot.fr/2012/08/running-jenkins-in-windows-with-regular.html"})}),"\n",(0,t.jsx)(e.h2,{id:"configuring-jenkins",children:"Configuring Jenkins"}),"\n",(0,t.jsx)(e.h3,{id:"installing-jdk-8",children:"Installing JDK 8"}),"\n",(0,t.jsx)(e.p,{children:"Through Jenkins administration, add a JDK 8 automatic installer."}),"\n",(0,t.jsx)(e.h3,{id:"installing-maven",children:"Installing Maven"}),"\n",(0,t.jsx)(e.p,{children:"Through Jenkins administration, add a Maven automatic installer from Apache's site."}),"\n",(0,t.jsx)(e.h3,{id:"installing-phantomjs",children:"Installing PhantomJS"}),"\n",(0,t.jsxs)(e.p,{children:["Install binaries from ",(0,t.jsx)(e.a,{href:"http://phantomjs.org/download.html",children:"http://phantomjs.org/download.html"})]}),"\n",(0,t.jsx)(e.p,{children:"Check that the executable is included in PATH:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"phantomjs --version\n2.1.1\n"})}),"\n",(0,t.jsx)(e.h2,{id:"installing-nodejs",children:"Installing NodeJS"}),"\n",(0,t.jsx)(e.p,{children:"Jenkins NodeJS plugin does not work on Windows, so we'll do a manual installation."}),"\n",(0,t.jsxs)(e.p,{children:["Download latest LTS (Long Term Support) 64-bit version from ",(0,t.jsx)(e.a,{href:"http://nodejs.org/",children:"http://nodejs.org/"})]}),"\n",(0,t.jsxs)(e.p,{children:["Don't install NodeJS to the default directory ",(0,t.jsx)(e.code,{children:"C:\\Program Files\\nodejs"})," as it requires administration rights, prefer a simpler path like ",(0,t.jsx)(e.code,{children:"c:\\nodejs"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Edit ",(0,t.jsx)(e.code,{children:"C:\\nodejs\\node_modules\\npm\\npmrc"})," to replace"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"prefix=${APPDATA}\\npm\n"})}),"\n",(0,t.jsx)(e.p,{children:"by"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"prefix=C:\\nodejs\\node_modules\\npm\n"})}),"\n",(0,t.jsx)(e.p,{children:"Add the 'C:\\nodejs\\node_modules\\npm' folder to the PATH environment variable, remove the one that was added by the installer: 'C:\\Users<user>\\AppData\\Roaming\\npm'"}),"\n",(0,t.jsxs)(e.p,{children:["npm may require Git, install it from ",(0,t.jsx)(e.a,{href:"https://git-for-windows.github.io/",children:"https://git-for-windows.github.io/"})]}),"\n",(0,t.jsx)(e.p,{children:"Add Bower and Gulp:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"npm install -g bower gulp\nbower --version\ngulp --version\n"})}),"\n",(0,t.jsxs)(e.p,{children:["It can be useful to have multiple versions of NodeJS on the same machine but ",(0,t.jsx)(e.code,{children:"nvm"})," equivalents on Windows focus more on development environment than continuous integration. So if a job requires another version of NodeJS, change its PATH variable."]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>r});var t=i(96540);const s={},o=t.createContext(s);function l(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);