"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4878],{86218:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var i=s(74848),r=s(28453);const t={title:"How to remove the register account service",slug:"/tips/034_tip_remove_register_account_service.html",last_update:{date:new Date("2021-03-19T21:22:00.000Z")}},c=void 0,o={id:"tips/tip_remove_register_account_service",title:"How to remove the register account service",description:"Tip submitted by @apuntandoanulo",source:"@site/docs/tips/034_tip_remove_register_account_service.mdx",sourceDirName:"tips",slug:"/tips/034_tip_remove_register_account_service.html",permalink:"/documentation-archive/v8.7.2/tips/034_tip_remove_register_account_service.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tips/034_tip_remove_register_account_service.mdx",tags:[],version:"current",lastUpdatedAt:161618892e4,sidebarPosition:34,frontMatter:{title:"How to remove the register account service",slug:"/tips/034_tip_remove_register_account_service.html",last_update:{date:"2021-03-19T21:22:00.000Z"}},sidebar:"docsSidebar",previous:{title:"User entity management",permalink:"/documentation-archive/v8.7.2/user-entity/"},next:{title:"Combine generation and custom code",permalink:"/documentation-archive/v8.7.2/tips/035_tip_combine_generation_and_custom_code.html"}},l={},a=[{value:"1. On the back-end side",id:"1-on-the-back-end-side",level:2},{value:"2. On the front-end side",id:"2-on-the-front-end-side",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Tip submitted by ",(0,i.jsx)(n.a,{href:"https://github.com/apuntandoanulo",children:"@apuntandoanulo"})]})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Goal:"})," If you want to eliminate the possibility that users can create accounts and let only a previously registered user do it, remove the following fragments and lines of code that are indicated below:"]}),"\n",(0,i.jsx)(n.h2,{id:"1-on-the-back-end-side",children:"1. On the back-end side"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"1.1"})}),"  ",(0,i.jsx)(n.code,{children:"src\\main\\java\\ ... \\service\\UserService.java"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Remove the entire method ",(0,i.jsx)(n.code,{children:"public User registerUser(...)"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"1.2"})})," ",(0,i.jsx)(n.code,{children:"src\\main\\java\\ ... \\rest\\AccountResource.java"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Remove the entire method ",(0,i.jsx)(n.code,{children:'@PostMapping("/register")   public void registerAccount(...)'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2-on-the-front-end-side",children:"2. On the front-end side"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"2.1"})})," ",(0,i.jsx)(n.code,{children:"src\\main\\webapp\\app\\account"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Remove the entire folder ",(0,i.jsx)(n.code,{children:"register"})," that contains: ",(0,i.jsx)(n.code,{children:"register.component.html"}),", ",(0,i.jsx)(n.code,{children:"register.component.ts"}),", ",(0,i.jsx)(n.code,{children:"register.route.ts"}),", ",(0,i.jsx)(n.code,{children:"register.service.ts"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"2.2"})})," Go into ",(0,i.jsx)(n.code,{children:"src\\main\\webapp\\app\\account\\account.module.ts"})," and remove the following lines:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"import { RegisterComponent } from './register/register.component'; "})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"declarations"})," array -> ",(0,i.jsx)(n.code,{children:"RegisterComponent"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"2.3"})})," Go into ",(0,i.jsx)(n.code,{children:"src\\main\\webapp\\app\\account\\account.route.ts"})," and remove the following lines:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"import { registerRoute } from './register/register.route'; "})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"ACCOUNT_ROUTES"})," array -> ",(0,i.jsx)(n.code,{children:"registerRoute "})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"2.4"})})," Go into ",(0,i.jsx)(n.code,{children:"src\\main\\webapp\\app\\home\\home.component.html"})," and remove the following block:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="alert alert-warning" *ngSwitchCase="false">\n  <span jhiTranslate="global.messages.info.register.noaccount">You don\'t have an account yet?</span>&nbsp;\n  <a class="alert-link" routerLink="account/register" jhiTranslate="global.messages.info.register.link">Register a new account</a>\n</div>\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"2.5"})})," Go into ",(0,i.jsx)(n.code,{children:"src\\main\\webapp\\app\\layouts\\navbar\\navbar.component.html"})," and remove the following block:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<li *ngSwitchCase="false">\n  <a class="dropdown-item" routerLink="account/register" routerLinkActive="active" (click)="collapseNavbar()">\n      <fa-icon icon="user-plus" [fixedWidth]="true"></fa-icon>\n      <span jhiTranslate="global.menu.account.register">Register</span>\n  </a>\n</li>\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"2.6"})})," Go into ",(0,i.jsx)(n.code,{children:"src\\main\\webapp\\app\\shared\\login\\login.component.html"})," and remove the following block:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="alert alert-warning">\n  <span jhiTranslate="global.messages.info.register.noaccount">You don\'t have an account yet?</span>\n  <a class="alert-link" (click)="register()" jhiTranslate="global.messages.info.register.link">Register a new account</a>\n</div>\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"2.7"})})," Go into ",(0,i.jsx)(n.code,{children:"src\\main\\webapp\\app\\shared\\login\\login.component.ts"})," and remove the following block:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"register(): void {\n  this.activeModal.dismiss('to state register');\n  this.router.navigate(['/account/register']);\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"2.8"})})," Remove the messages files: ",(0,i.jsx)(n.code,{children:"src\\main\\webapp\\i18n\\ ... \\register.json"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"2.9"})})," ",(0,i.jsx)(n.code,{children:"src\\test\\javascript\\spec\\app\\account"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Remove the entire folder ",(0,i.jsx)(n.code,{children:"register"})," that contains: ",(0,i.jsx)(n.code,{children:"register.component.spec.ts"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var i=s(96540);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);