"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[3588],{56367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=t(74848),r=t(28453);const o={title:"Configuring HTML 5 mode",slug:"/tips/010_tip_configuring_html_5_mode.html",last_update:{date:new Date("2016-03-07T23:23:00.000Z")}},s="Configuring HTML 5 mode",d={id:"tips/tip_configuring_html_5_mode",title:"Configuring HTML 5 mode",description:"Tip submitted by @brevleq and updated by @wmarques",source:"@site/docs/tips/010_tip_configuring_html_5_mode.mdx",sourceDirName:"tips",slug:"/tips/010_tip_configuring_html_5_mode.html",permalink:"/documentation-archive/v8.7.2/tips/010_tip_configuring_html_5_mode.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tips/010_tip_configuring_html_5_mode.mdx",tags:[],version:"current",lastUpdatedAt:145739298e4,sidebarPosition:10,frontMatter:{title:"Configuring HTML 5 mode",slug:"/tips/010_tip_configuring_html_5_mode.html",last_update:{date:"2016-03-07T23:23:00.000Z"}}},a={},c=[{value:"HTML 5 Mode has been added to the generator since this pull request #9098, so you don&#39;t need to do any specific configuration anymore!",id:"html-5-mode-has-been-added-to-the-generator-since-this-pull-request-9098-so-you-dont-need-to-do-any-specific-configuration-anymore",level:4},{value:"Activate HTML 5 Mode",id:"activate-html-5-mode",level:2},{value:"Redirection filter",id:"redirection-filter",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configuring-html-5-mode",children:"Configuring HTML 5 mode"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Tip submitted by ",(0,i.jsx)(n.a,{href:"https://github.com/brevleq",children:"@brevleq"})," and updated by ",(0,i.jsx)(n.a,{href:"https://github.com/wmarques",children:"@wmarques"})]})}),"\n",(0,i.jsxs)(n.h4,{id:"html-5-mode-has-been-added-to-the-generator-since-this-pull-request-9098-so-you-dont-need-to-do-any-specific-configuration-anymore",children:["HTML 5 Mode has been added to the generator since this ",(0,i.jsx)(n.a,{href:"https://github.com/jhipster/generator-jhipster/pull/9098",children:"pull request #9098"}),", so you don't need to do any specific configuration anymore!"]}),"\n",(0,i.jsx)(n.p,{children:'As you may noticed, AngularJS uses a "#" in it\'s urls. HTML5Mode of AngularJS removes these "#" from URL.'}),"\n",(0,i.jsx)(n.h2,{id:"activate-html-5-mode",children:"Activate HTML 5 Mode"}),"\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.code,{children:"html5.mode.config.js"})," file in ",(0,i.jsx)(n.code,{children:"webapp/app/blocks/config/"})," directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    (function() {\n      'use strict';\n\n      angular\n        .module('<YourAppName>')\n        .config(html5ModeConfig);\n\n      html5ModeConfig.$inject = ['$locationProvider'];\n\n      function html5ModeConfig($locationProvider) {\n        $locationProvider.html5Mode({ enabled: true, requireBase: true });\n      }\n    })();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then open ",(0,i.jsx)(n.code,{children:"index.html"})," and add this line in ",(0,i.jsx)(n.code,{children:"head"})," tag:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    <base href="/">\n'})}),"\n",(0,i.jsx)(n.h2,{id:"redirection-filter",children:"Redirection filter"}),"\n",(0,i.jsx)(n.p,{children:"Now, to have relative paths links working correctly (ex. activation link sent to user e-mail) we will create a controller to forward the URI to index.html:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    @Controller\n    public class AngularJsForwardController {\n        @RequestMapping(value = "/**/{[path:[^\\\\.]*}")\n        public String redirect() {\n            return "forward:/";\n        }\n    }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Please note that this can cause conflicts with ",(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-endpoints.html",children:"Spring actuators URLs"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["That's why you have to edit urls of the ",(0,i.jsx)(n.code,{children:"metric.js"})," and ",(0,i.jsx)(n.code,{children:"health.js"}),". First, open ",(0,i.jsx)(n.code,{children:"webapp\\app\\admin\\health\\health.js"})," and change:"]}),"\n",(0,i.jsx)(n.p,{children:"url: '/health' -> url: '/apphealth'"}),"\n",(0,i.jsxs)(n.p,{children:["Then do the same with ",(0,i.jsx)(n.code,{children:"webapp\\app\\admin\\metrics\\metrics.js"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"url: '/metrics' -> url: '/appmetrics'"}),"\n",(0,i.jsxs)(n.p,{children:["Then if you use gulp , you must to edit the file ",(0,i.jsx)(n.code,{children:"gulp\\serve.js"})," and replace ",(0,i.jsx)(n.code,{children:"proxyRoutes"})," variable by:"]}),"\n",(0,i.jsx)(n.p,{children:"var proxyRoutes = [\n'/'\n];"}),"\n",(0,i.jsxs)(n.p,{children:["Finally, to make the home link in the navigation bar work, open ",(0,i.jsx)(n.code,{children:"webapp\\app\\layouts\\navbar\\navbar.html"})," and change:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    <a class="navbar-brand" href="#/"> -> <a class="navbar-brand" href="/">\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);