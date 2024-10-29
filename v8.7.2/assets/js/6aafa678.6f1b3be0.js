"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[2913],{60938:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=i(74848),t=i(28453);const s={title:"Upgrading an application",slug:"/upgrading-an-application/",gitgraph:"http://jsfiddle.net/lordlothar99/tqp9gyu3",last_update:{date:new Date("2024-04-08T00:00:00.000Z")}},a=" Upgrading an application",o={id:"core-tasks/upgrading-an-application",title:"Upgrading an application",description:"Summary",source:"@site/docs/core-tasks/upgrading-an-application.mdx",sourceDirName:"core-tasks",slug:"/upgrading-an-application/",permalink:"/documentation-archive/v8.7.2/upgrading-an-application/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/core-tasks/upgrading-an-application.mdx",tags:[],version:"current",lastUpdatedAt:17125344e5,frontMatter:{title:"Upgrading an application",slug:"/upgrading-an-application/",gitgraph:"http://jsfiddle.net/lordlothar99/tqp9gyu3",last_update:{date:"2024-04-08T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Internationalization",permalink:"/documentation-archive/v8.7.2/installing-new-languages/"},next:{title:"Securing your app",permalink:"/documentation-archive/v8.7.2/security/"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"Option 1 - Automatic Upgrade",id:"option-1---automatic-upgrade",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Running the upgrade sub-generator",id:"running-the-upgrade-sub-generator",level:3},{value:"Upgrading from JHipster 7 and previous versions",id:"upgrading-from-jhipster-7-and-previous-versions",level:3},{value:"Graphical view of the upgrade process",id:"graphical-view-of-the-upgrade-process",level:3},{value:"Step-by-step explanation of the upgrade process",id:"step-by-step-explanation-of-the-upgrade-process",level:3},{value:"Specific steps on first upgrade",id:"specific-steps-on-first-upgrade",level:3},{value:"Advice",id:"advice",level:4},{value:"Option 2 - Manual Upgrade",id:"option-2---manual-upgrade",level:2},{value:"Hints about renamed files",id:"hints-about-renamed-files",level:3},{value:"See your own changes",id:"see-your-own-changes",level:3},{value:"See JHipster changes",id:"see-jhipster-changes",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"-upgrading-an-application",children:[(0,r.jsx)("i",{class:"fa fa-level-up"})," Upgrading an application"]})}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#option-1---automatic-upgrade",children:"Option 1 - Automatic Upgrade"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#option-2---manual-upgrade",children:"Option 2 - Manual Upgrade"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"option-1---automatic-upgrade",children:"Option 1 - Automatic Upgrade"}),"\n",(0,r.jsx)(n.p,{children:"This is helpful to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Have the latest JHipster features in an existing application"}),"\n",(0,r.jsx)(n.li,{children:"Get the changes when there is an important bug fix or security update"}),"\n",(0,r.jsx)(n.li,{children:"Retain your changes in your codebase, and merge them with newly generated code"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Please read this page carefully before doing an upgrade, to understand how the upgrade process works"})}),"\n",(0,r.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.p,{children:["For this sub-generator to work you need to have ",(0,r.jsx)(n.code,{children:"git"})," installed from ",(0,r.jsx)(n.a,{href:"http://git-scm.com/",children:"http://git-scm.com"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"running-the-upgrade-sub-generator",children:"Running the upgrade sub-generator"}),"\n",(0,r.jsx)(n.p,{children:"Go into the application's root directory:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"cd myJHipsterProject/"})}),"\n",(0,r.jsx)(n.p,{children:"To upgrade your application, type:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"npx generator-jhipster@latest upgrade"})}),"\n",(0,r.jsx)(n.p,{children:"An alternative is to use global installation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install -g generator-jhipster@latest\njhipster upgrade\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here are the options you can pass:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--skip-checks"})," - Disable checks during project regeneration"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--silent"})," - Hides output of the generation process"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"upgrading-from-jhipster-7-and-previous-versions",children:"Upgrading from JHipster 7 and previous versions"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/jhipster/generator-jhipster-migrate",children:"migrate blueprint"})," is an advanced version of the upgrade sub-generator. If you need to upgrade a JHipster 7 app, it's recommended you use the migrate blueprint. For example, let's assume you have a 7.9.3 app."]}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"jhipster-migrate"})," to upgrade to the latest version. Resolve conflicts, commit, and celebrate!"]}),"\n",(0,r.jsx)(n.p,{children:"For a working example, see the following pull requests from the 21-Points Health project."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/mraible/21-points/pull/248",children:"Upgrade to JHipster 7.9.4"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/mraible/21-points/pull/249",children:"Upgrade to JHipster 8.2.1"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"graphical-view-of-the-upgrade-process",children:"Graphical view of the upgrade process"}),"\n",(0,r.jsx)(n.p,{children:"Here is how the upgrade process works graphically (read the sections below to have a textual explanation):"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Git graph showing each invocation of &#39;npx jhipster upgrade&#39; and the commits on jhipster_upgrade branch",src:i(2434).A+"",width:"3840",height:"746"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(59972).A+"",children:"Raw .mermaid file"})}),"\n",(0,r.jsxs)(n.p,{children:["Please note that the ",(0,r.jsx)(n.code,{children:"jhipster_upgrade"})," branch will be created orphan on your project, although it doesn't display correctly on the above graph."]}),"\n",(0,r.jsx)(n.h3,{id:"step-by-step-explanation-of-the-upgrade-process",children:"Step-by-step explanation of the upgrade process"}),"\n",(0,r.jsx)(n.p,{children:"Below are the steps processed by the JHipster upgrade sub-generator:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Check if there is a new version of JHipster available (not applicable if you are using ",(0,r.jsx)(n.code,{children:"--force"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Check if the application is already initialized as a ",(0,r.jsx)(n.code,{children:"git"})," repository, or else JHipster will initialize one for you and commit the current codebase to the master branch."]}),"\n",(0,r.jsx)(n.li,{children:"Check to ensure that there are no un-committed local changes in the repository. The process will exit if there are un-committed changes found."}),"\n",(0,r.jsxs)(n.li,{children:["Check if a ",(0,r.jsx)(n.code,{children:"jhipster_upgrade"}),' branch exists. If not, a branch is created: details about this step is provided in the "Specific steps on first upgrade" section.']}),"\n",(0,r.jsxs)(n.li,{children:["Checkout the ",(0,r.jsx)(n.code,{children:"jhipster_upgrade"})," branch."]}),"\n",(0,r.jsx)(n.li,{children:"Upgrade JHipster to the latest available version globally."}),"\n",(0,r.jsx)(n.li,{children:"Clean the current project directory."}),"\n",(0,r.jsxs)(n.li,{children:["Re-generate the application using the ",(0,r.jsx)(n.code,{children:"jhipster --force"})," command."]}),"\n",(0,r.jsxs)(n.li,{children:["Commit the generated code to the ",(0,r.jsx)(n.code,{children:"jhipster_upgrade"})," branch."]}),"\n",(0,r.jsxs)(n.li,{children:["Merge the ",(0,r.jsx)(n.code,{children:"jhipster_upgrade"})," branch back to the original branch from where the ",(0,r.jsx)(n.code,{children:"npx jhipster upgrade"})," command was launched."]}),"\n",(0,r.jsx)(n.li,{children:"Now you need to proceed with resolving merge conflicts if there are any."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Congratulations, your application is now upgraded with the latest version of JHipster!"}),"\n",(0,r.jsx)(n.h3,{id:"specific-steps-on-first-upgrade",children:"Specific steps on first upgrade"}),"\n",(0,r.jsx)(n.p,{children:"On the first run of the JHipster upgrade sub-generator, in order to avoid erasing all your changes, some additional steps are run:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"jhipster_upgrade"})," branch is created orphan (it has no parent)."]}),"\n",(0,r.jsx)(n.li,{children:"The whole application is generated (using your current JHipster version)."}),"\n",(0,r.jsxs)(n.li,{children:["A block-merge commit is made on the ",(0,r.jsx)(n.code,{children:"master"})," branch: no alteration is made on your codebase on the ",(0,r.jsx)(n.code,{children:"master"})," branch; this is a practical way to record in Git that the HEAD of ",(0,r.jsx)(n.code,{children:"master"})," is up-to-date with the current JHipster version."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"advice",children:"Advice"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Don't commit anything on the ",(0,r.jsx)(n.code,{children:"jhipster_upgrade"})," branch. This branch is dedicated to the JHipster upgrade sub-generator: each time the sub-generator is run, a new commit will be created."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you are updating from a very old version (example from 5.0.0 to latest) we suggest updating gradually between each minor/patch version and performing tests to make sure the application works as expected."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["There are some helpful approaches from the JHipster community around designing the application in such a way that makes the update process easier, and reduces the amount of merge conflicts. We recommend using ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Gg5CYoBdpVo",children:"JHipster Side-by-Side approach"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"option-2---manual-upgrade",children:"Option 2 - Manual Upgrade"}),"\n",(0,r.jsx)(n.p,{children:"For a manual upgrade, first upgrade your version of JHipster with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install -g generator-jhipster\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Delete your project ",(0,r.jsx)(n.code,{children:"node_modules"})," folder and then run ",(0,r.jsx)(n.code,{children:"jhipster"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"rm -rf node_modules\njhipster\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also update your project and all its entities by running"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"jhipster --force\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also update your entities individually by running the ",(0,r.jsx)(n.code,{children:"entity"})," sub-generator, i.e., if your entity is named ",(0,r.jsx)(n.em,{children:"Foo"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"jhipster entity Foo\n"})}),"\n",(0,r.jsx)(n.h3,{id:"hints-about-renamed-files",children:"Hints about renamed files"}),"\n",(0,r.jsxs)(n.p,{children:["Sometimes files may be renamed in the generator. If you want to see Git rename detection result then you can run ",(0,r.jsx)(n.code,{children:"git add"})," (",(0,r.jsx)(n.code,{children:"git add ."})," stages all) and view changes after that with your favorite Git client."]}),"\n",(0,r.jsxs)(n.p,{children:["If many files are renamed then you may want to increase ",(0,r.jsx)(n.code,{children:"diff.renameLimit"})," in Git config to make Git rename detection work as expected. For example ",(0,r.jsx)(n.code,{children:"git config --replace-all diff.renameLimit 10000"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["By default Git rename detection uses similarity threshold 50%. To see less similar files as renamed, you can use option ",(0,r.jsx)(n.code,{children:"--find-renames=<n>"})," in Git commands. For example ",(0,r.jsx)(n.code,{children:"git diff --staged --find-renames=30"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"see-your-own-changes",children:"See your own changes"}),"\n",(0,r.jsx)(n.p,{children:"If you would like to see changes you have done after generating project you can follow the steps described below."}),"\n",(0,r.jsxs)(n.p,{children:["Clone your project into the new folder with ",(0,r.jsx)(n.code,{children:"git clone"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Delete all files and folders from cloned project except ",(0,r.jsx)(n.code,{children:".git"}),", ",(0,r.jsx)(n.code,{children:".jhipster"})," and ",(0,r.jsx)(n.code,{children:".yo-rc.json"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Find out what JHipster version you used last time to generate your project: look at the ",(0,r.jsx)(n.code,{children:".yo-rc.json"})," in the project root folder, find out the value of the ",(0,r.jsx)(n.code,{children:"jhipsterVersion"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Install JHipster version you used last time you generated your project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install -g generator-jhipster@jhipsterVersionYouUsedLastTime\n"})}),"\n",(0,r.jsx)(n.p,{children:"Regenerate your project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"jhipster --force --skip-install\n"})}),"\n",(0,r.jsxs)(n.p,{children:["With ",(0,r.jsx)(n.code,{children:"git diff"})," you can now see all your changes as reverted. If you would like to see all your changes as added then you can commit all to Git and then revert the last commit."]}),"\n",(0,r.jsx)(n.h3,{id:"see-jhipster-changes",children:"See JHipster changes"}),"\n",(0,r.jsx)(n.p,{children:"If you would like to see changes done by JHipster you can follow the steps described below."}),"\n",(0,r.jsx)(n.p,{children:"Generate project with JHipster version you used last time to generate your project:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"create a new folder"}),"\n",(0,r.jsxs)(n.li,{children:["copy your project ",(0,r.jsx)(n.code,{children:".yo-rc.json"})," file and ",(0,r.jsx)(n.code,{children:".jhipster"})," folder into this new folder"]}),"\n",(0,r.jsxs)(n.li,{children:["find out what JHipster version you used last time to generate your project: look at the ",(0,r.jsx)(n.code,{children:".yo-rc.json"}),", find out the value of the ",(0,r.jsx)(n.code,{children:"jhipsterVersion"})]}),"\n",(0,r.jsxs)(n.li,{children:["install JHipster version you used last time to generate your project: ",(0,r.jsx)(n.code,{children:"npm install -g generator-jhipster@jhipsterVersionYouUsedLastTime"})]}),"\n",(0,r.jsxs)(n.li,{children:["in the created folder run: ",(0,r.jsx)(n.code,{children:"jhipster --skip-install"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Generate project with the latest JHipster:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"create a new folder"}),"\n",(0,r.jsxs)(n.li,{children:["copy your project ",(0,r.jsx)(n.code,{children:".yo-rc.json"})," file and ",(0,r.jsx)(n.code,{children:".jhipster"})," folder into this new folder"]}),"\n",(0,r.jsxs)(n.li,{children:["install the latest JHipster version: ",(0,r.jsx)(n.code,{children:"npm install -g generator-jhipster"})]}),"\n",(0,r.jsxs)(n.li,{children:["in the created folder run: ",(0,r.jsx)(n.code,{children:"jhipster --skip-install"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Compare those 2 folders with your favorite file and folder compare tool to see changes done by JHipster."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},59972:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/files/jhipster_upgrade-ff20ab50b97262e92754206aff997b01.mermaid"},2434:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/upgrade_gitgraph-dc4496d2d1af8ea66651e61b879c1641.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(96540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);