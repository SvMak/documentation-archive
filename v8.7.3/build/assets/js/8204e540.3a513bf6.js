"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[3763],{37205:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=i(74848),o=i(28453);const n={title:"Issue of @OneToOne with @MapsId and how to avoid it",slug:"/tips/026_tip_issue_of_onetoone_with_mapsid_how_to_avoid_it.html",last_update:{date:new Date("2019-03-05T18:20:00.000Z")}},r=void 0,a={id:"tips/tip_issue_of_onetoone_with_mapsid_how_to_avoid_it",title:"Issue of @OneToOne with @MapsId and how to avoid it",description:"Tip submitted by @pmverma",source:"@site/docs/tips/026_tip_issue_of_onetoone_with_mapsid_how_to_avoid_it.mdx",sourceDirName:"tips",slug:"/tips/026_tip_issue_of_onetoone_with_mapsid_how_to_avoid_it.html",permalink:"/documentation-archive/v8.7.3/tips/026_tip_issue_of_onetoone_with_mapsid_how_to_avoid_it.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tips/026_tip_issue_of_onetoone_with_mapsid_how_to_avoid_it.mdx",tags:[],version:"current",lastUpdatedAt:155181e7,sidebarPosition:26,frontMatter:{title:"Issue of @OneToOne with @MapsId and how to avoid it",slug:"/tips/026_tip_issue_of_onetoone_with_mapsid_how_to_avoid_it.html",last_update:{date:"2019-03-05T18:20:00.000Z"}},sidebar:"docsSidebar",previous:{title:"How to create a new Authority",permalink:"/documentation-archive/v8.7.3/tips/025_tip_create_new_authority.html"},next:{title:"Increase integration test performance by lazy bean initialization",permalink:"/documentation-archive/v8.7.3/tips/027_tip_lazy_init_test_beans.html"}},d={},c=[{value:"The issue",id:"the-issue",level:3},{value:"Tips to avoid it",id:"tips-to-avoid-it",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["Tip submitted by ",(0,s.jsx)(t.a,{href:"https://github.com/pmverma",children:"@pmverma"})]})}),"\n",(0,s.jsxs)(t.p,{children:["Following is a known issue regarding using ",(0,s.jsx)(t.code,{children:"@OneToOne"})," with ",(0,s.jsx)(t.code,{children:"@MapsId"})," and some tips to avoid it."]}),"\n",(0,s.jsx)(t.h3,{id:"the-issue",children:"The issue"}),"\n",(0,s.jsxs)(t.p,{children:["Let's say you have a ",(0,s.jsx)(t.code,{children:"Preference"})," class which you have associated to ",(0,s.jsx)(t.code,{children:"User"})," with ",(0,s.jsx)(t.code,{children:"@OneToOne @MapsId"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"class Preference {\n    @OneToOne\n    @MapsId\n    private User user;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Normally with JHipster:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["When you add a ",(0,s.jsx)(t.code,{children:"preference"}),"  for a user, you will fill the data and select a user ",(0,s.jsx)(t.code,{children:"user01"})," login from dropdown and save."]}),"\n",(0,s.jsxs)(t.li,{children:["If you want to edit the same ",(0,s.jsx)(t.code,{children:"preference"}),", you will still have the option to select user and if you select ",(0,s.jsx)(t.code,{children:"user02"})," this time then backend side will have the ",(0,s.jsx)(t.code,{children:"user02"})," in ",(0,s.jsx)(t.code,{children:"preference"})," object for the whole request lifetime."]}),"\n",(0,s.jsxs)(t.li,{children:["Again if you reload the same ",(0,s.jsx)(t.code,{children:"preference"})," then you will see that ",(0,s.jsx)(t.code,{children:"user01"})," is there, not ",(0,s.jsx)(t.code,{children:"user02"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The incorrect part here is:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.code,{children:"user02"})," in ",(0,s.jsx)(t.code,{children:"preference"})," object in no.2 step."]})," The user object in ",(0,s.jsx)(t.code,{children:"preference"})," should always refer to ",(0,s.jsx)(t.code,{children:"user01"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For more information, take a look at ",(0,s.jsx)(t.a,{href:"https://github.com/jhipster/generator-jhipster/issues/9100",children:"https://github.com/jhipster/generator-jhipster/issues/9100"})]}),"\n",(0,s.jsx)(t.h3,{id:"tips-to-avoid-it",children:"Tips to avoid it"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Hide the dropdown and set the current user in ",(0,s.jsx)(t.code,{children:"preference"})," ",(0,s.jsx)(t.strong,{children:"at client side"})," programmatically. (Again this kind of solution is only valid for entities such as Preference, Settings, User Profile and so on, where having a dropdown to choose user does not makes sense. )"]}),"\n",(0,s.jsxs)(t.li,{children:["Hide the dropdown and set the current user in ",(0,s.jsx)(t.code,{children:"preference"})," ",(0,s.jsx)(t.strong,{children:"at server side"})," programmatically. (Again this kind of solution is only valid for entities such as Preference, Settings, User Profile and so on, where having a dropdown to choose user does not makes sense. JHipster have already provided a method to get current user.)"]}),"\n",(0,s.jsxs)(t.li,{children:["Validate and load the correct association value before doing any business logic on that user. (Again this is needed only if your logic depends on ",(0,s.jsx)(t.code,{children:"preference.getUser()"})]}),"\n",(0,s.jsx)(t.li,{children:"If you are using Hibernate 5.4.2 and later then you will get correct association value but only after entity merge operation has finished. So if your business logic is executed before entity merge operation, you have to take care of it otherwise you might get incorrect results."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var s=i(96540);const o={},n=s.createContext(o);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);