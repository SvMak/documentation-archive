"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[7354],{84055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(74848),s=n(28453);const a={title:"Using DTOs",slug:"/using-dtos/",last_update:{date:new Date("2015-05-28T23:41:00.000Z")}},r=void 0,o={id:"core-tasks/using-dtos",title:"Using DTOs",description:"Introduction",source:"@site/docs/core-tasks/using-dtos.mdx",sourceDirName:"core-tasks",slug:"/using-dtos/",permalink:"/documentation-archive/v8.7.3/using-dtos/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/core-tasks/using-dtos.mdx",tags:[],version:"current",lastUpdatedAt:143285646e4,frontMatter:{title:"Using DTOs",slug:"/using-dtos/",last_update:{date:"2015-05-28T23:41:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Creating an entity",permalink:"/documentation-archive/v8.7.3/creating-an-entity/"},next:{title:"Managing relationships",permalink:"/documentation-archive/v8.7.3/managing-relationships/"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"How DTOs work in JHipster",id:"how-dtos-work-in-jhipster",level:2},{value:"Using MapStruct to map DTOs and entities",id:"using-mapstruct-to-map-dtos-and-entities",level:2},{value:"Configuring your IDE for MapStruct",id:"configuring-your-ide-for-mapstruct",level:2},{value:"Advanced MapStruct usage",id:"advanced-mapstruct-usage",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"By default, JHipster uses its domain objects (typically JPA entities) directly in its REST endpoints.\nThis has a lot of benefits, the main one being that the code is easier to understand as it contains fewer layers."}),"\n",(0,i.jsx)(t.p,{children:"For complex use cases, however, you might want to use Data Transfer Objects (or DTOs) that will be exposed by the REST endpoints. Those objects add an extra layer on top of the domain objects, and are specifically tuned for the REST layer: their main benefit is that they can aggregate several domain objects."}),"\n",(0,i.jsx)(t.h2,{id:"how-dtos-work-in-jhipster",children:"How DTOs work in JHipster"}),"\n",(0,i.jsx)(t.p,{children:"When generating a JHipster entity, you have the option to add a service layer: the DTO option will only be available if you choose to have a service layer, as it needs that layer to handle the mapping (if you are using JPA, this is because the service layer is transactional, so lazy-loading will work)."}),"\n",(0,i.jsx)(t.p,{children:"Once you have selected to have a service layer, you will have the option to generate a DTO for the entity. If you select that option:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A DTO will be generated, and it will be mapped on the underlying entity."}),"\n",(0,i.jsxs)(t.li,{children:["It will aggregate many-to-one relationships, only using the ID and the field used to display it in your client-side framework (Angular, for example). As a result, a many-to-one relationship to the ",(0,i.jsx)(t.code,{children:"User"})," entity will add a ",(0,i.jsx)(t.code,{children:"userId"})," field and a ",(0,i.jsx)(t.code,{children:"userLogin"})," field to the DTO."]}),"\n",(0,i.jsxs)(t.li,{children:["It will ignore one-to-many relationships and many-to-many relationships on the non-owner side: this matches the way entities work (they have a ",(0,i.jsx)(t.code,{children:"@JsonIgnore"})," annotation on those fields)."]}),"\n",(0,i.jsxs)(t.li,{children:["For a many-to-many relationship on the owner side: it will use DTOs from the other entity and use them in a ",(0,i.jsx)(t.code,{children:"Set"}),". Thus, this can only work if the other entity also uses DTOs."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"using-mapstruct-to-map-dtos-and-entities",children:"Using MapStruct to map DTOs and entities"}),"\n",(0,i.jsx)(t.p,{children:"As DTOs look a lot like entities, it's a frequent requirement to have a solution to map them automatically with each other."}),"\n",(0,i.jsxs)(t.p,{children:["The selected solution in JHipster is to use ",(0,i.jsx)(t.a,{href:"http://mapstruct.org/",children:"MapStruct"}),". It is an annotation processor, plugged into the Java compiler, that will generate the required mapping automatically."]}),"\n",(0,i.jsx)(t.p,{children:"We have found it very clean and efficient, and liked that it does not use reflection (which is bad for performance when used as heavily as in a mapper)."}),"\n",(0,i.jsx)(t.h2,{id:"configuring-your-ide-for-mapstruct",children:"Configuring your IDE for MapStruct"}),"\n",(0,i.jsx)(t.p,{children:"MapStruct is an annotation processor, and as such it should also be set up to be run automatically when your IDE compiles the project."}),"\n",(0,i.jsxs)(t.p,{children:["If you are using Maven, you need to activate the ",(0,i.jsx)(t.code,{children:"IDE"})," maven profile in your IDE. Gradle users don't need to apply anything IDE-specific."]}),"\n",(0,i.jsxs)(t.p,{children:["Instructions for activating the profile are included in ",(0,i.jsx)(t.a,{href:"/configuring-ide/",children:"Configuring your IDE"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"advanced-mapstruct-usage",children:"Advanced MapStruct usage"}),"\n",(0,i.jsxs)(t.p,{children:["MapStruct mappers are configured as Spring Beans, and support dependency injection. One nice tip is that you can inject a ",(0,i.jsx)(t.code,{children:"Repository"})," into a mapper, so you can fetch a managed JPA entity from the mapper, using its ID."]}),"\n",(0,i.jsxs)(t.p,{children:["Here is an example code, fetching a ",(0,i.jsx)(t.code,{children:"User"})," entity:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'@Mapper\npublic abstract class CarMapper {\n\n    @Inject\n    private UserRepository userRepository;\n\n    @Mapping(source = "user.id", target = "userId")\n    @Mapping(source = "user.login", target = "userLogin")\n    public abstract CarDTO carToCarDTO(Car car);\n\n    @Mapping(source = "userId", target = "user")\n    public abstract Car carDTOToCar(CarDTO carDTO);\n\n    public User userFromId(Long id) {\n        if (id == null) {\n            return null;\n        }\n        return userRepository.findOne(id);\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);