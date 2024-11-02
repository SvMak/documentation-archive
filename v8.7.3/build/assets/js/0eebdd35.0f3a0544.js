"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[3123],{58791:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=n(74848),s=n(28453);const r={title:"How to create a new Authority",slug:"/tips/025_tip_create_new_authority.html",last_update:{date:new Date("2018-10-05T18:20:00.000Z")}},o=void 0,a={id:"tips/tip_create_new_authority",title:"How to create a new Authority",description:"Tip submitted by @Tonterias",source:"@site/docs/tips/025_tip_create_new_authority.mdx",sourceDirName:"tips",slug:"/tips/025_tip_create_new_authority.html",permalink:"/documentation-archive/v8.7.3/tips/025_tip_create_new_authority.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tips/025_tip_create_new_authority.mdx",tags:[],version:"current",lastUpdatedAt:15387636e5,sidebarPosition:25,frontMatter:{title:"How to create a new Authority",slug:"/tips/025_tip_create_new_authority.html",last_update:{date:"2018-10-05T18:20:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Enabling Social Login with OAuth2",permalink:"/documentation-archive/v8.7.3/tips/024_tip_enabling_social_login_with_oauth2.html"},next:{title:"Issue of @OneToOne with @MapsId and how to avoid it",permalink:"/documentation-archive/v8.7.3/tips/026_tip_issue_of_onetoone_with_mapsid_how_to_avoid_it.html"}},c={},h=[];function l(t){const e={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["Tip submitted by ",(0,i.jsx)(e.a,{href:"https://github.com/Tonterias",children:"@Tonterias"})]})}),"\n",(0,i.jsxs)(e.p,{children:["Let's say that you need a new authority besides the given ones of ADMIN and USER. Let the new authority be called ",(0,i.jsx)(e.code,{children:"ROLE_EXAMPLE_AUTHORITY"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"Modify AuthoritiesConstants.java file to include your new authority/authorities:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'/**\n * Constants for Spring Security authorities.\n */\npublic final class AuthoritiesConstants {\n\n\tpublic static final String ADMIN = "ROLE_ADMIN";\n\n\tpublic static final String USER = "ROLE_USER";\n\n\tpublic static final String ANONYMOUS = "ROLE_ANONYMOUS";\n\t\n\tpublic static final String EXAMPLE_AUTHORITY = "ROLE_EXAMPLE_AUTHORITY";\n\n\tprivate AuthoritiesConstants() {\n\t}\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["Do not forget to include your new role in your ",(0,i.jsx)(e.code,{children:"authority.csv"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-csv",children:"name\nROLE_ADMIN\nROLE_USER\nROLE_ANONYMOUS\nROLE_EXAMPLE_AUTHORITY\n"})}),"\n",(0,i.jsx)(e.p,{children:"With that, you will be able to use it in your SecurityConfiguration.java:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@Override\npublic void configure(HttpSecurity http) throws Exception {\n\t// @formatter:off\n\thttp\n\t\t.csrf()\n\t\t.disable()\n\t\t...\n\t...\n\t.and()\n\t\t.authorizeRequests()\n\t\t...\n\t\t.antMatchers("/newresource/**").hasAuthority(AuthoritiesConstants.ROLE_EXAMPLE_AUTHORITY)\n...\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["And in your Controller layer (e.g. ",(0,i.jsx)(e.code,{children:"FrontPageConfigResource.java"}),"):"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'@DeleteMapping("/order-items/{id}")\n@Timed\n@PreAuthorize("hasAuthority(\'ROLE_EXAMPLE_AUTHORITY\')")\npublic ResponseEntity<Void> deleteOrderItem(@PathVariable Long id) {\n\t...\n}\n'})}),"\n",(0,i.jsxs)(e.p,{children:["And in your Angular html files: ",(0,i.jsx)(e.code,{children:"jhiHasAnyAuthority=[\u2018ROLE_ADMIN\u2019, \u2018ROLE_EXAMPLE_AUTHORITY\u2019 ...]"})]}),"\n",(0,i.jsx)(e.p,{children:"And in your Angular routes:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"export const messageRoute: Routes = [\n\t{\n\t\tpath: 'message',\n\t\tcomponent: MessageComponent,\n\t\tdata: {\n\t\t\tauthorities: ['ROLE_EXAMPLE_AUTHORITY'],\n\t\t\tpageTitle: 'Messages'\n\t\t},\n\t\tcanActivate: [UserRouteAccessService]\n\t}\n];\n"})}),"\n",(0,i.jsxs)(e.p,{children:["The open-source example is at JhipsterPress: ",(0,i.jsx)(e.a,{href:"https://github.com/Tonterias/JhipsterPress",children:"https://github.com/Tonterias/JhipsterPress"})]})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);