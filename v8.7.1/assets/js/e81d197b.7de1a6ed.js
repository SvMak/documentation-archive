"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[7762],{61560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(74848),s=n(28453);const a={title:"Dynamic environment variables in the front end",slug:"/tips/033_tip_dynamic_env_variables.html",last_update:{date:new Date("2020-07-01T10:50:00.000Z")}},r=void 0,o={id:"tips/tip_dynamic_env_variables",title:"Dynamic environment variables in the front end",description:"Tip submitted by @yelhouti",source:"@site/docs/tips/033_tip_dynamic_env_variables.mdx",sourceDirName:"tips",slug:"/tips/033_tip_dynamic_env_variables.html",permalink:"/documentation-archive/v8.7.1/tips/033_tip_dynamic_env_variables.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tips/033_tip_dynamic_env_variables.mdx",tags:[],version:"current",lastUpdatedAt:15936006e5,sidebarPosition:33,frontMatter:{title:"Dynamic environment variables in the front end",slug:"/tips/033_tip_dynamic_env_variables.html",last_update:{date:"2020-07-01T10:50:00.000Z"}}},c={},d=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Tip submitted by ",(0,i.jsx)(t.a,{href:"https://github.com/yelhouti",children:"@yelhouti"})]})}),"\n",(0,i.jsx)(t.p,{children:"Let's say you need to update the value of a variable in the front end after your code have been compiled. (ex: your IdP Url, the email to use for contacts...)"}),"\n",(0,i.jsxs)(t.p,{children:["One way is to have it as part of your application.yml and have the backend return it to the front using a new custom endpoint, the same way we do in: ",(0,i.jsx)(t.code,{children:"AuthInfoResource.java"})," when using OAuth2."]}),"\n",(0,i.jsxs)(t.p,{children:["Another way that removes the need for this endpoint and offers better flexibility and less code is to have a new file called ",(0,i.jsx)(t.code,{children:"env.js"})," that looks like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"window.__env = window.__env || {};\nwindow.__env.myDynamicVariable = 'http://127.0.0.1:8090';\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The code below creates a global ",(0,i.jsx)(t.code,{children:"__env"})," variable if not already declared."]}),"\n",(0,i.jsx)(t.p,{children:"it can be accessed in your angular files but we recommend exposing it through constants.ts like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"@ts-ignore\nexport const MY_DYNAMIC_VARIABLE = window.__env.myDynamicVariable;\n"})}),"\n",(0,i.jsx)(t.p,{children:"When using kubernetes, a file with this format can be mounted as a configMap, this is why we keep such a simple key value syntax."}),"\n",(0,i.jsxs)(t.p,{children:["Now we need to make sure that ",(0,i.jsx)(t.code,{children:"index.html"})," loads it by adding the script tag in the ",(0,i.jsx)(t.code,{children:"<head>"})," like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'    ...\n    \x3c!-- jhipster-needle-add-resources-to-root - JHipster will add new resources here --\x3e\n    <script src="env.js"><\/script>\n'})}),"\n",(0,i.jsx)(t.p,{children:"and we tell webpack to copy it, as is, with the packaged code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// jhipster-needle-add-assets-to-webpack - JHipster will add/remove third-party resources in this array\n{ from: './<%= MAIN_SRC_DIR %>env.js', to: 'env.js' },\n"})}),"\n",(0,i.jsxs)(t.p,{children:["We recommend adding the file to the ",(0,i.jsx)(t.code,{children:".eslintignore.ejs"})," for the clean syntax:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"src/main/webapp/env.js\n"})}),"\n",(0,i.jsx)(t.p,{children:"Next step is to work on a blueprint that does all of this."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);