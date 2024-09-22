"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[559],{30948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var i=n(74848),r=n(28453);const s={title:"Registering a user with additional information",slug:"/tips/022_tip_registering_user_with_additional_information.html",last_update:{date:new Date("2017-02-15T22:30:00.000Z")}},a="Registering a user with additional information",o={id:"tips/tip_registering_user_with_additional_information",title:"Registering a user with additional information",description:"Tip submitted by @Paul-Etienne",source:"@site/docs/tips/022_tip_registering_user_with_additional_information.mdx",sourceDirName:"tips",slug:"/tips/022_tip_registering_user_with_additional_information.html",permalink:"/documentation-archive/v8.7.1/tips/022_tip_registering_user_with_additional_information.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tips/022_tip_registering_user_with_additional_information.mdx",tags:[],version:"current",lastUpdatedAt:14871978e5,sidebarPosition:22,frontMatter:{title:"Registering a user with additional information",slug:"/tips/022_tip_registering_user_with_additional_information.html",last_update:{date:"2017-02-15T22:30:00.000Z"}}},d={},h=[{value:"Creating a new entity in a One to One relationship with JHI_User",id:"creating-a-new-entity-in-a-one-to-one-relationship-with-jhi_user",level:2},{value:"Updating the register HTML page to take this change into account",id:"updating-the-register-html-page-to-take-this-change-into-account",level:2},{value:"Updating ManagedUserVM",id:"updating-manageduservm",level:2},{value:"Updating the registerAccount() function from AccountResource",id:"updating-the-registeraccount-function-from-accountresource",level:2},{value:"Updating the createUser() function from UserService",id:"updating-the-createuser-function-from-userservice",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"registering-a-user-with-additional-information",children:"Registering a user with additional information"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Tip submitted by ",(0,i.jsx)(t.a,{href:"https://github.com/Paul-Etienne",children:"@Paul-Etienne"})]})}),"\n",(0,i.jsx)(t.p,{children:"If we need to store more information concerning a user than what JHipster provides by default, a few tweaks are needed."}),"\n",(0,i.jsx)(t.p,{children:"To illustrate this, let's assume we want to store the user's phone number."}),"\n",(0,i.jsx)(t.h2,{id:"creating-a-new-entity-in-a-one-to-one-relationship-with-jhi_user",children:"Creating a new entity in a One to One relationship with JHI_User"}),"\n",(0,i.jsx)(t.p,{children:"The best way to add information that is not handled by the default JHipster User is by using composition in a new entity linked to it with a One to One relationship."}),"\n",(0,i.jsx)(t.p,{children:"After this entity is created, let's call it UserExtra, the best way to handle its id is by mapping it to the JHI_User's one. This way, our UserExtra will have the same id as the User's, accelerating the different requests.\nTo achieve this, you will need to use the @MapsId annotation :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'public class UserExtra implements Serializable {\n\n    private static final long serialVersionUID = 1L;\n\n    @Id\n    private Long id;\n\n    @Column(name = "phone")\n    private String phone;\n\n    @OneToOne\n    @MapsId\n    private User user;\n    ...\n\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Note that the @GeneratedValue annotation on the id needs to be removed."}),"\n",(0,i.jsx)(t.h2,{id:"updating-the-register-html-page-to-take-this-change-into-account",children:"Updating the register HTML page to take this change into account"}),"\n",(0,i.jsx)(t.p,{children:"Now that an entity exists to store the phone number, we need to add an input in the register form to ask for the user's phone number."}),"\n",(0,i.jsx)(t.p,{children:"Nothing easier than that, just update webapp/app/account/register/register.html to add an input field bound to the variable already used to store the basic information (vm.registerAccount) :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'<input class="form-control" id="phone" ng-model="vm.registerAccount.phone" placeholder="{{\'global.form.phone.placeholder\' | translate}}" />\n'})}),"\n",(0,i.jsx)(t.h2,{id:"updating-manageduservm",children:"Updating ManagedUserVM"}),"\n",(0,i.jsx)(t.p,{children:"The registerAccount() function from java/com.mycompany.myapp/web/rest/AccountResource is the one receiving the request from the registration page.\nIts only parameter is a ManagedUserVM object containing the information initially contained in the vm.registerAccount variable from the client."}),"\n",(0,i.jsx)(t.p,{children:"This ManagedUserVM class located in web/rest/vm has to be updated as well so that it holds the phone number sent by the client. The only thing to do here is adding the phone number attribute and its getter :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"public class ManagedUserVM extends UserDTO {\n\n    // Default attributes omitted for brevity\n\n    private String phone;\n\n    ...\n\n    public String getPhone() {\n        return phone;\n    }\n\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"updating-the-registeraccount-function-from-accountresource",children:"Updating the registerAccount() function from AccountResource"}),"\n",(0,i.jsx)(t.p,{children:"The registerAccount() function now receives a ManagedUserVM object that also contains the phone number of the user. The only thing left to do is saving this phone number into a new UserExtra associated with the JHipster User."}),"\n",(0,i.jsx)(t.p,{children:"To do so, we are going to add the phone parameter to the createUser() function from UserService. But first, add this parameter where this function is called in registerAccount() :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'public ResponseEntity<?> registerAccount(@Valid @RequestBody ManagedUserVM managedUserVM) {\n\n    HttpHeaders textPlainHeaders = new HttpHeaders();\n    textPlainHeaders.setContentType(MediaType.TEXT_PLAIN);\n\n    return userRepository.findOneByLogin(managedUserVM.getLogin().toLowerCase())\n        .map(user -> new ResponseEntity<>("login already in use", textPlainHeaders, HttpStatus.BAD_REQUEST))\n        .orElseGet(() -> userRepository.findOneByEmail(managedUserVM.getEmail())\n            .map(user -> new ResponseEntity<>("e-mail address already in use", textPlainHeaders, HttpStatus.BAD_REQUEST))\n            .orElseGet(() -> {\n                User user = userService\n                    .createUser(managedUserVM.getLogin(), managedUserVM.getPassword(),\n                        managedUserVM.getFirstName(), managedUserVM.getLastName(),\n                        managedUserVM.getEmail().toLowerCase(), managedUserVM.getLangKey(),\n                        managedUserVM.getPhone());\n\n                mailService.sendActivationEmail(user);\n                return new ResponseEntity<>(HttpStatus.CREATED);\n            })\n    );\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"updating-the-createuser-function-from-userservice",children:"Updating the createUser() function from UserService"}),"\n",(0,i.jsx)(t.p,{children:"Finally, we update the service layer function that saves the JHI_User to now save the UserExtra as well. Rather than updating the existing function, I suggest you create a new one with the additional parameter. This way, updating the test classes isn't necessary."}),"\n",(0,i.jsx)(t.p,{children:"Do not forget to inject the UserExtra repositories :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'@Inject\nprivate UserExtraRepository userExtraRepository;\n\n@Inject\nprivate UserExtraSearchRepository userExtraSearchRepository;\n\n...\n\npublic User createUser(String login, String password, String firstName, String lastName, String email,\n                           String langKey, String phone) {\n\n    User newUser = new User();\n    Authority authority = authorityRepository.findOne(AuthoritiesConstants.USER);\n    Set<Authority> authorities = new HashSet<>();\n    String encryptedPassword = passwordEncoder.encode(password);\n    newUser.setLogin(login);\n    // new user gets initially a generated password\n    newUser.setPassword(encryptedPassword);\n    newUser.setFirstName(firstName);\n    newUser.setLastName(lastName);\n    newUser.setEmail(email);\n    newUser.setLangKey(langKey);\n    // new user is not active\n    newUser.setActivated(false);\n    // new user gets registration key\n    newUser.setActivationKey(RandomUtil.generateActivationKey());\n    authorities.add(authority);\n    newUser.setAuthorities(authorities);\n    userRepository.save(newUser);\n    userSearchRepository.save(newUser);\n    log.debug("Created Information for User: {}", newUser);\n\n    // Create and save the UserExtra entity\n    UserExtra newUserExtra = new UserExtra();\n    newUserExtra.setUser(newUser);\n    newUserExtra.setPhone(phone);\n    userExtraRepository.save(newUserExtra);\n    userExtraSearchRepository.save(newUserExtra);\n    log.debug("Created Information for UserExtra: {}", newUserExtra);\n\n    return newUser;\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"And it's done !"})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);