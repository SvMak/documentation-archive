"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[475],{77351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(74848),r=n(28453);const o={title:"Running Protractor e2e tests within IntelliJ IDEA",slug:"/tips/031_tip_e2e_intellij.html",last_update:{date:new Date("2018-04-14T03:57:00.000Z")}},s=void 0,l={id:"tips/tip_e2e_intellij",title:"Running Protractor e2e tests within IntelliJ IDEA",description:"Tip submitted by @SudharakaP and @yelhouti",source:"@site/docs/tips/031_tip_e2e_intellij.mdx",sourceDirName:"tips",slug:"/tips/031_tip_e2e_intellij.html",permalink:"/documentation-archive/v8.7.1/tips/031_tip_e2e_intellij.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tips/031_tip_e2e_intellij.mdx",tags:[],version:"current",lastUpdatedAt:152367822e4,sidebarPosition:31,frontMatter:{title:"Running Protractor e2e tests within IntelliJ IDEA",slug:"/tips/031_tip_e2e_intellij.html",last_update:{date:"2018-04-14T03:57:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Configure Redis leader follower(master-slave) replication",permalink:"/documentation-archive/v8.7.1/tips/030_tip_redis_replication.html"},next:{title:"Time Drift in Docker",permalink:"/documentation-archive/v8.7.1/tips/032_tip_time_drift_docker.html"}},a={},c=[];function h(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Tip submitted by ",(0,i.jsx)(t.a,{href:"https://github.com/SudharakaP",children:"@SudharakaP"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/yelhouti",children:"@yelhouti"})]})}),"\n",(0,i.jsxs)(t.p,{children:["This tip applies for JHipster v6.8.0 or above. By default, a JHipster project will have the following ",(0,i.jsx)(t.code,{children:"beforeLanuch"}),"\nfunction within the Protractor configuration file (",(0,i.jsx)(t.code,{children:"src/test/javascript/protractor.conf.js"}),")."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"beforeLaunch: function() {\n  require('ts-node').register({\n    project: 'tsconfig.e2e.json'\n  });\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This will work well if Protractor tests are executed by running ",(0,i.jsx)(t.code,{children:"npm run e2e"})," in the root folder of the project."]}),"\n",(0,i.jsxs)(t.p,{children:["However, IntelliJ Ultimate also supports ",(0,i.jsx)(t.a,{href:"https://www.jetbrains.com/help/idea/protractor.html#ws_protractor_running",children:"running Protractor tests within the IDE"}),".\nIf you want to use this method you will have to alter the ",(0,i.jsx)(t.code,{children:"beforeLanuch"})," function as shown below;"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"beforeLaunch: function() {\n  require('ts-node').register({\n    project: '../../../tsconfig.e2e.json'\n  });\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["so that IntelliJ will know where to find the ",(0,i.jsx)(t.code,{children:"tsconfig.e2e.json"})," file."]}),"\n",(0,i.jsxs)(t.p,{children:["Note that after altering the ",(0,i.jsx)(t.code,{children:"protractor.conf.js"})," file as above, ",(0,i.jsx)(t.code,{children:"npm run e2e"})," will not work anymore so you'll have to\nrollback if you plan on using e2e tests using npm again."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);