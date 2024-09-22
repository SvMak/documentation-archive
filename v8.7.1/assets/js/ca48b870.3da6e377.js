"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[8824],{99120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(74848),i=n(28453);const s={title:"Creating a Blueprint",slug:"/modules/creating-a-blueprint/",last_update:{date:new Date("2015-12-05T18:40:00.000Z")}},l=void 0,a={id:"modules/creating-a-blueprint",title:"Creating a Blueprint",description:"A JHipster blueprint is a Yeoman generator that is composed from a specific JHipster sub-generator to extend the functionality of that sub-generator. The blueprint can override any defined getter of the sub generator and provide its own templates and functionality.",source:"@site/docs/modules/creating-a-blueprint.mdx",sourceDirName:"modules",slug:"/modules/creating-a-blueprint/",permalink:"/documentation-archive/v8.7.1/modules/creating-a-blueprint/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/modules/creating-a-blueprint.mdx",tags:[],version:"current",lastUpdatedAt:14493408e5,frontMatter:{title:"Creating a Blueprint",slug:"/modules/creating-a-blueprint/",last_update:{date:"2015-12-05T18:40:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Creating a module",permalink:"/documentation-archive/v8.7.1/modules/creating-a-module/"},next:{title:"Quarkus",permalink:"/documentation-archive/v8.7.1/blueprints/quarkus/"}},o={},p=[{value:"Using a blueprint",id:"using-a-blueprint",level:2},{value:"Generating the blueprint",id:"generating-the-blueprint",level:2},{value:"Local Blueprints",id:"local-blueprints",level:2},{value:"Developing",id:"developing",level:2},{value:"Priorities",id:"priorities",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["A JHipster blueprint is a Yeoman generator that is ",(0,r.jsx)(t.a,{href:"http://yeoman.io/authoring/composability.html",children:"composed"})," from a specific JHipster sub-generator to extend the functionality of that sub-generator. The blueprint can override any defined getter of the sub generator and provide its own templates and functionality."]}),"\n",(0,r.jsxs)(t.p,{children:["JHipster blueprints are listed on the ",(0,r.jsx)(t.a,{href:"/modules/marketplace/",children:"JHipster marketplace"})," with the ",(0,r.jsx)(t.code,{children:"jhipster-blueprint"})," label."]}),"\n",(0,r.jsx)(t.p,{children:"This allows to create third-party blueprints that can override a specific part of JHipster, say for example only the client side templates."}),"\n",(0,r.jsx)(t.h2,{id:"using-a-blueprint",children:"Using a blueprint"}),"\n",(0,r.jsx)(t.p,{children:"To use a blueprint, run the below command"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"jhipster --blueprints <blueprint name>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"generating-the-blueprint",children:"Generating the blueprint"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend to use the builtin ",(0,r.jsx)(t.code,{children:"generate-blueprint"})," generator to kickstart your blueprint"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"mkdir my-blueprint && cd my-blueprint\n\njhipster generate-blueprint\n"})}),"\n",(0,r.jsxs)(t.p,{children:["A JHipster blueprint must have ",(0,r.jsx)(t.code,{children:"generator-jhipster"})," as a dependency and should import the appropriate sub-generator to override it."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import chalk from 'chalk';\nimport ClientGenerator from 'generator-jhipster/generators/client';\n\nexport default class extends ClientGenerator {\n  constructor(args, opts, features) {\n    super(args, opts, features);\n\n    if (this.options.help) return;\n\n    if (!this.options.jhipsterContext) {\n      throw new Error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprints myBlueprint')}`);\n    }\n  }\n\n  get [ClientGenerator.INITIALIZING]() {\n    return {\n      // async preInitializingTemplateTask() {},\n      ...super._initializing(),\n      // async postInitializingTemplateTask() {},\n    };\n  }\n\n  // Others priorities omitted for brevity\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"local-blueprints",children:"Local Blueprints"}),"\n",(0,r.jsxs)(t.p,{children:["A local blueprint is implemented inside your project's ",(0,r.jsx)(t.code,{children:".blueprint"})," directory. It's detected and used by default."]}),"\n",(0,r.jsxs)(t.p,{children:["Kickstart using ",(0,r.jsx)(t.a,{href:"#generating-the-blueprint",children:"Generating the blueprint"})," or run:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"jhipster generate-blueprint --local-blueprint --sub-generators app --all-priorities\n"})}),"\n",(0,r.jsx)(t.p,{children:"Multiples sub-generators are useful for organizing multiples features. Local blueprints have a limited scope (the application), so a single sub-generator, the main one, is probably enough to customize your application (client and server)."}),"\n",(0,r.jsx)(t.h2,{id:"developing",children:"Developing"}),"\n",(0,r.jsx)(t.h3,{id:"priorities",children:"Priorities"}),"\n",(0,r.jsx)(t.p,{children:"There are multiple ways to customize a priority from JHipster."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Let JHipster handle the priority, blueprint doesn't override anything."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"get [Generator.INITIALIZING]() {\n  return super.initializing;\n}\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Override the entire priority, this is when the blueprint takes control of a priority."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"get [Generator.INITIALIZING]() {\n  return {\n    myCustomInitPriorityStep() {\n      // Do all your stuff here\n    },\n    myAnotherCustomInitPriorityStep(){\n      // Do all your stuff here\n    }\n  };\n}\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Partially override a priority, this is when the blueprint gets the priority from JHipster and customizes it."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"get [Generator.INITIALIZING]() {\n  return {\n    ...super._initializing(),\n    displayLogo() {\n      // override the displayLogo method from the initializing priority of JHipster\n    },\n    myCustomInitPriorityStep() {\n      // Do all your stuff here\n    },\n  };\n}\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsx)(t.li,{children:"Decorate a priority, this is when the blueprint runs custom steps before or after the priority coming from JHipster."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This is useful to customize properties that will be used during the priority to generate derived properties."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Run the blueprint steps before and/or after any parent steps\nget initializing() {\n  return {\n    myCustomPreInitStep() {\n      // Stuff to do BEFORE the JHipster steps\n      // Eg: set name that will generate nameCapitalized, nameLowercase, etc.\n    }\n    ...super._initializing(),\n    myCustomPostInitStep() {\n      // Stuff to do AFTER the JHipster steps\n    }\n  };\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);