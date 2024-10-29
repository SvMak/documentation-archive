"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[2091],{65765:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>h,metadata:()=>r,toc:()=>c});var s=i(74848),t=i(28453);const h={title:"Using Oh-My-Zsh",slug:"/oh-my-zsh/",last_update:{date:new Date("2016-07-25T18:40:00.000Z")}},o=void 0,r={id:"environment/shell-plugins/oh-my-zsh",title:"Using Oh-My-Zsh",description:"If you are using Linux or Mac OS X, Oh-My-Zsh is a great tool to manage your ZSH configuration.",source:"@site/docs/environment/shell-plugins/oh-my-zsh.mdx",sourceDirName:"environment/shell-plugins",slug:"/oh-my-zsh/",permalink:"/documentation-archive/v8.7.2/oh-my-zsh/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/environment/shell-plugins/oh-my-zsh.mdx",tags:[],version:"current",lastUpdatedAt:1469472e6,frontMatter:{title:"Using Oh-My-Zsh",slug:"/oh-my-zsh/",last_update:{date:"2016-07-25T18:40:00.000Z"}},sidebar:"docsSidebar",previous:{title:"JHipster Shell Plugins",permalink:"/documentation-archive/v8.7.2/shell-plugins/"},next:{title:"Fisher JHipster plugin",permalink:"/documentation-archive/v8.7.2/fisher/"}},l={},c=[{value:"Oh-My-Zsh JHipster plugin",id:"oh-my-zsh-jhipster-plugin",level:2},{value:"Recommended plugins",id:"recommended-plugins",level:2},{value:"Other installation methods",id:"other-installation-methods",level:2},{value:"Antigen",id:"antigen",level:3},{value:"zgen",id:"zgen",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["If you are using Linux or Mac OS X, ",(0,s.jsx)(n.a,{href:"http://ohmyz.sh/",children:"Oh-My-Zsh"})," is a great tool to manage your ZSH configuration."]}),"\n",(0,s.jsx)(n.p,{children:"Most of the JHipster development team uses Oh-My-Zsh, and if you see people using shortcuts in their terminal, the magic comes from here!"}),"\n",(0,s.jsx)(n.h2,{id:"oh-my-zsh-jhipster-plugin",children:"Oh-My-Zsh JHipster plugin"}),"\n",(0,s.jsxs)(n.p,{children:["The JHipster Oh-My-Zsh plugin is available on GitHub at ",(0,s.jsx)(n.a,{href:"https://github.com/jhipster/jhipster-oh-my-zsh-plugin",children:"https://github.com/jhipster/jhipster-oh-my-zsh-plugin"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Currently it only adds shortcuts (full list ",(0,s.jsx)(n.a,{href:"https://github.com/jhipster/jhipster-oh-my-zsh-plugin/blob/main/jhipster.plugin.zsh",children:"here"}),"), but we welcome contributions to have better auto-completion!"]}),"\n",(0,s.jsx)(n.p,{children:"It is not part (yet) of the official plugin list, so you need to install it manually:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Edit your ",(0,s.jsx)(n.code,{children:"~/.zshrc"})," and add ",(0,s.jsx)(n.code,{children:"jhipster"})," to the list of plugins to enable:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"plugins=( ... jhipster )"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the command line, change to ",(0,s.jsx)(n.em,{children:"oh-my-zsh"}),"'s custom plugin directory and clone the repository:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cd ~/.oh-my-zsh/custom/plugins && git clone https://github.com/jhipster/jhipster-oh-my-zsh-plugin.git jhipster && cd && . ~/.zshrc"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"recommended-plugins",children:"Recommended plugins"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"git"}),", ",(0,s.jsx)(n.code,{children:"docker"})," and ",(0,s.jsx)(n.code,{children:"docker-compose"})," plugins are usually useful with JHipster."]}),"\n",(0,s.jsxs)(n.p,{children:["So your plugins section in your ",(0,s.jsx)(n.code,{children:".zshrc"})," file would be:"]}),"\n",(0,s.jsx)(n.p,{children:"plugins=(git docker docker-compose jhipster)"}),"\n",(0,s.jsx)(n.h2,{id:"other-installation-methods",children:"Other installation methods"}),"\n",(0,s.jsx)(n.h3,{id:"antigen",children:"Antigen"}),"\n",(0,s.jsxs)(n.p,{children:["If you're using ",(0,s.jsx)(n.a,{href:"https://github.com/zsh-users/antigen",children:"Antigen"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"antigen bundle jhipster/jhipster-oh-my-zsh-plugin"})," to your ",(0,s.jsx)(n.code,{children:".zshrc"})," where you've listed your other plugins."]}),"\n",(0,s.jsxs)(n.li,{children:["Close and reopen your Terminal/iTerm window to ",(0,s.jsx)(n.strong,{children:"refresh context"})," and use the plugin. Alternatively, you can run ",(0,s.jsx)(n.code,{children:"antigen bundle jhipster/jhipster-oh-my-zsh-plugin"})," in a running shell to have antigen clone and load ",(0,s.jsx)(n.em,{children:"jhipster"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"zgen",children:"zgen"}),"\n",(0,s.jsxs)(n.p,{children:["If you're using ",(0,s.jsx)(n.a,{href:"https://github.com/tarjoilija/zgen",children:"zgen"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"zgen load jhipster/jhipster-oh-my-zsh-plugin"})," to your ",(0,s.jsx)(n.code,{children:".zshrc"})," along with your other ",(0,s.jsx)(n.code,{children:"zgen load"})," commands."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"rm ${ZGEN_INIT}/init.zsh && zgen save"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const t={},h=s.createContext(t);function o(e){const n=s.useContext(h);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(h.Provider,{value:n},e.children)}}}]);