"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[719],{98679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(74848),s=n(28453);const r={title:"Doing API-First development",slug:"/doing-api-first-development/",last_update:{date:new Date("2024-08-29T00:00:00.000Z")}},o=" Doing API-First development",a={id:"options/doing-api-first-development",title:"Doing API-First development",description:'When generating a JHipster application and prompted "Which other technologies would you like to use?" choose the API first development using OpenAPI-generator option to leverage the OpenAPI-generator, as shown below:',source:"@site/docs/options/doing-api-first-development.mdx",sourceDirName:"options",slug:"/doing-api-first-development/",permalink:"/documentation-archive/v8.7.3/doing-api-first-development/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/options/doing-api-first-development.mdx",tags:[],version:"current",lastUpdatedAt:17248896e5,frontMatter:{title:"Doing API-First development",slug:"/doing-api-first-development/",last_update:{date:"2024-08-29T00:00:00.000Z"}},sidebar:"docsSidebar",previous:{title:"Using Websockets",permalink:"/documentation-archive/v8.7.3/using-websockets/"},next:{title:"Using a cache",permalink:"/documentation-archive/v8.7.3/using-cache/"}},l={},d=[{value:"Rationale for API-First development",id:"rationale-for-api-first-development",level:2},{value:"Default Configuration",id:"default-configuration",level:2},{value:"Using the openapi-generator-maven-plugin",id:"using-the-openapi-generator-maven-plugin",level:2},{value:"Developing an API with the OpenAPI Specification",id:"developing-an-api-with-the-openapi-specification",level:3},{value:"Pro Tip",id:"pro-tip",level:4},{value:"JHipster&#39;s Layered Architecture and Technical Structure Tests by ArchUnit",id:"jhipsters-layered-architecture-and-technical-structure-tests-by-archunit",level:3},{value:"Implementation Guide",id:"implementation-guide",level:2},{value:"The Pet Store v3",id:"the-pet-store-v3",level:3},{value:"Generating the Server Sources",id:"generating-the-server-sources",level:3},{value:"Validate tooling",id:"validate-tooling",level:3},{value:"Review the Generated Classes",id:"review-the-generated-classes",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Implement the Delegate",id:"implement-the-delegate",level:4},{value:"Create the API package",id:"create-the-api-package",level:5},{value:"Override the methods of the PetApi",id:"override-the-methods-of-the-petapi",level:5},{value:"Pro Tip",id:"pro-tip-1",level:5},{value:"Test Drive the Implementation",id:"test-drive-the-implementation",level:4},{value:"Mocking Endpoints in Development",id:"mocking-endpoints-in-development",level:3},{value:"Override the default constructor of the Delegate Implementation",id:"override-the-default-constructor-of-the-delegate-implementation",level:4},{value:"Authentication",id:"authentication",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"-doing-api-first-development",children:[(0,i.jsx)("i",{class:"fa fa-search"})," Doing API-First development"]})}),"\n",(0,i.jsxs)(t.p,{children:['When generating a JHipster application and prompted "Which other technologies would you like to use?" choose the ',(0,i.jsx)(t.code,{children:"API first development using OpenAPI-generator"})," option to leverage the ",(0,i.jsx)(t.a,{href:"https://github.com/OpenAPITools/openapi-generator",children:"OpenAPI-generator"}),", as shown below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"# ... other prompts answered ...\n? Which other technologies would you like to use? (Press <space> to select, <a> to toggle all, <i> to invert selection,\nand <enter> to proceed)\n \u25ef Apache Kafka as asynchronous messages broker\n \u25ef Apache Pulsar as asynchronous messages broker\n\u276f\u25c9 API first development using OpenAPI-generator\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This option will configure the build tool, ",(0,i.jsx)(t.a,{href:"https://openapi-generator.tech/docs/plugins",children:"Maven or Gradle"}),", to generate API code from an OpenAPI (Swagger) Specification (OAS) file. Both Swagger v2 and OpenAPI v3 formats are supported."]}),"\n",(0,i.jsx)(t.h2,{id:"rationale-for-api-first-development",children:"Rationale for API-First development"}),"\n",(0,i.jsx)(t.p,{children:'In API first development, also called "Contract First Development," the API specification is written first and then code is generated from the API specification. Contrast this with generating the documentation from the code.'}),"\n",(0,i.jsx)(t.p,{children:"API first development provides the following advantages:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The API is designed for the consumers and not as a consequence of the implementation."}),"\n",(0,i.jsx)(t.li,{children:"The specification file can be used to mock new server endpoints in development further decoupling the frontend and backend."}),"\n",(0,i.jsx)(t.li,{children:"Use of the specification file does not require a live server."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"default-configuration",children:"Default Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["This HOWTO will use JHipster's default configuration that leverages Spring's Delegate Pattern. The generated code by the ",(0,i.jsx)(t.a,{href:"https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/spring.md",children:"OpenAPI Generator for Spring"})," will produce the models and delegates for implementation."]}),"\n",(0,i.jsxs)(t.p,{children:["The plugin's default configuration is shown below (Maven) and defined in the project level ",(0,i.jsx)(t.code,{children:"build"})," profile of the ",(0,i.jsx)(t.code,{children:"pom.xml"}),". The configuration is adapted for Gradle projects by JHipster."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<plugin>\n    \x3c!--\n        Plugin that provides API-first development using openapi-generator-cli to\n        generate Spring-MVC endpoint stubs at compile time from an OpenAPI definition file\n    --\x3e\n    <groupId>org.openapitools</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n    <version>${openapi-generator-maven-plugin.version}</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputSpec>${project.basedir}/src/main/resources/swagger/api.yml</inputSpec>\n                <generatorName>spring</generatorName>\n                <apiPackage>demo.jhipster.myapp.web.api</apiPackage>\n                <modelPackage>demo.jhipster.myapp.service.api.dto</modelPackage>\n                <supportingFilesToGenerate>ApiUtil.java</supportingFilesToGenerate>\n                <skipValidateSpec>false</skipValidateSpec>\n                <configOptions>\n                    \x3c!-- the delegatePattern is only available to the spring generator --\x3e\n                    <delegatePattern>true</delegatePattern>\n                    <title>jhipster</title>\n                    <useSpringBoot3>true</useSpringBoot3>\n                </configOptions>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u2139\ufe0f JHipster users are always encouraged to adapt the build tooling to the specifics of the environment or the standards adopted within an organization. JHipster puts a project on the right foundation with tools and practices that have been tested at scale. If the JHipster's use of the Spring Delegate pattern is not the standard for an organization the ",(0,i.jsx)(t.code,{children:"configOption:delegatePattern"})," can be removed (the default is ",(0,i.jsx)(t.code,{children:"false"}),")."]}),"\n",(0,i.jsx)(t.p,{children:"As always, users are expected to understand the implications of changes to JHipster's default behavior. Just as JHipster cannot teach users how to use Spring, changes to Spring may result in behavior that cannot not be documented by JHipster."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"using-the-openapi-generator-maven-plugin",children:"Using the openapi-generator-maven-plugin"}),"\n",(0,i.jsxs)(t.p,{children:["The OpenAPI Specification (OAS) file is read by the generator from the defined file in the plugin's ",(0,i.jsx)(t.code,{children:"inputSpec"})," element. JHipster's default location for the OAS is ",(0,i.jsx)(t.code,{children:"src/main/resources/swagger/api.yml"}),". The plugin generates interfaces and Data Transfer Objects (DTOs) from the OAS for implementation. The interfaces have default methods which respond with a ",(0,i.jsx)(t.code,{children:"501 Not implemented"})," HTTP status and an empty body."]}),"\n",(0,i.jsx)(t.h3,{id:"developing-an-api-with-the-openapi-specification",children:"Developing an API with the OpenAPI Specification"}),"\n",(0,i.jsxs)(t.p,{children:["This guide will use the classic Pet Store specification from OpenAPI for simplicity as writing an OAS is beyond the scope of this guide. API developers can write an OAS and place it in ",(0,i.jsx)(t.code,{children:"src/main/resources/swagger/api.yml"})," using a tool such as ",(0,i.jsx)(t.a,{href:"http://editor.swagger.io",children:"swagger-editor"}),". Many IDEs provide OAS tools for editing as well."]}),"\n",(0,i.jsx)(t.h4,{id:"pro-tip",children:"Pro Tip"}),"\n",(0,i.jsxs)(t.p,{children:["JHipster, when choosing ",(0,i.jsx)(t.code,{children:"API first development using OpenAPI-generator"}),", provides a Docker Compose descriptor for the Swagger Editor at ",(0,i.jsx)(t.code,{children:"src/main/docker/swagger-editor.yml"}),". To use this editor locally, run ",(0,i.jsx)(t.code,{children:"docker compose -f src/main/docker/swagger-editor.yml up -d"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"jhipsters-layered-architecture-and-technical-structure-tests-by-archunit",children:"JHipster's Layered Architecture and Technical Structure Tests by ArchUnit"}),"\n",(0,i.jsxs)(t.p,{children:["Prior to implementing the delegates generated by the OpenAPI Generator plugin, take a moment to review and understand JHipster's layered architecture design. This architecture is tested by ",(0,i.jsx)(t.a,{href:"https://www.archunit.org/motivation",children:"TNG Tech's ArchUnit"})," and defined in ",(0,i.jsx)(t.code,{children:"src/test/java/com/mycompany/myapp/TechnicalStructureTest.java"}),". Proper implementation of the delegate classes must be followed so as not to violate this layered architecture."]}),"\n",(0,i.jsx)(t.h2,{id:"implementation-guide",children:"Implementation Guide"}),"\n",(0,i.jsx)(t.h3,{id:"the-pet-store-v3",children:"The Pet Store v3"}),"\n",(0,i.jsxs)(t.p,{children:["Hereafter, this guide will be based on a ",(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(54521).A+"",children:"JHipster-ready version of Expanded Pet Store v3"})," from the OpenAPI Initiative (",(0,i.jsx)(t.a,{href:"https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore-expanded.yaml",children:"found here"}),"). This JHipster-version sets the ",(0,i.jsx)(t.code,{children:"server:url"})," to the JHipster defaults of ",(0,i.jsx)(t.code,{children:"http://localhost:8081/api"})," (where the port defaults to ",(0,i.jsx)(t.code,{children:"8081"})," and the generated controller has a base path of ",(0,i.jsx)(t.code,{children:"/api"}),", matching the default ",(0,i.jsx)(t.code,{children:"SecurityConfiguration#filterChain(HttpSecurity,  MvcRequestMatcher.Builder)"})," implementation)."]}),"\n",(0,i.jsx)(t.h3,{id:"generating-the-server-sources",children:"Generating the Server Sources"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"./mvnw generate-sources\n"})}),"\n",(0,i.jsx)(t.p,{children:"Or for gradle:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"./gradlew openApiGenerate\n"})}),"\n",(0,i.jsx)(t.h3,{id:"validate-tooling",children:"Validate tooling"}),"\n",(0,i.jsxs)(t.p,{children:["Validate that the generated classes in ",(0,i.jsx)(t.code,{children:"target/generated-sources"})," are on the classpath for implementation. Most IDEs look for and, automatically, configure these directories. Refer to the IDE's documentation to resolve any issues."]}),"\n",(0,i.jsx)(t.h3,{id:"review-the-generated-classes",children:"Review the Generated Classes"}),"\n",(0,i.jsxs)(t.p,{children:["Take a moment to review the ",(0,i.jsx)(t.code,{children:"generated-sources"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"target/generated-sources\n\u2514\u2500\u2500 openapi\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 main\n            \u2514\u2500\u2500 java\n                \u2514\u2500\u2500 demo\n                    \u2514\u2500\u2500 jhipster\n                        \u251c\u2500\u2500 service\n                        \u2502   \u2514\u2500\u2500 api\n                        \u2502       \u2514\u2500\u2500 dto\n                        \u2502           \u251c\u2500\u2500 Error.java\n                        \u2502           \u251c\u2500\u2500 NewPet.java\n                        \u2502           \u2514\u2500\u2500 Pet.java\n                        \u2514\u2500\u2500 web\n                            \u2514\u2500\u2500 api\n                                \u251c\u2500\u2500 ApiUtil.java\n                                \u251c\u2500\u2500 PetsApi.java\n                                \u251c\u2500\u2500 PetsApiController.java\n                                \u2514\u2500\u2500 PetsApiDelegate.java\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:['\u26a0\ufe0fThe OpenAPI Generator is responsible for the creation of DTOs ("models") and delegates. Implementations MUST not be placed in the ',(0,i.jsx)(t.code,{children:"target/generated-sources"}),". These classes are subject to generation at anytime and SHOULD NOT be committed to source control."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.p,{children:"The following steps will be repeated as needed for each delegate implementation:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#implement-the-delegate",children:"Implement the Delegate"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#test-drive-the-implementation",children:"Test Drive the Implementation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#mocking-endpoints-in-development",children:"Mocking Endpoints in Development"})}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"implement-the-delegate",children:"Implement the Delegate"}),"\n",(0,i.jsxs)(t.p,{children:["The implementation class will use the Spring ",(0,i.jsx)(t.code,{children:"@Service"})," annotation."]}),"\n",(0,i.jsx)(t.h5,{id:"create-the-api-package",children:"Create the API package"}),"\n",(0,i.jsxs)(t.p,{children:["Create the ",(0,i.jsx)(t.code,{children:"api"})," package in the ",(0,i.jsx)(t.code,{children:"web"})," layer, i.e., ",(0,i.jsx)(t.code,{children:"mkdir -p src/main/java/demo/jhipster/web/api"}),". See ",(0,i.jsx)(t.a,{href:"#pro-tip-1",children:"Pro Tip"}),"."]}),"\n",(0,i.jsx)(t.h5,{id:"override-the-methods-of-the-petapi",children:"Override the methods of the PetApi"}),"\n",(0,i.jsxs)(t.p,{children:["The OpenAPI Generator creates ",(0,i.jsx)(t.code,{children:"@RequestMapping"})," methods in the ",(0,i.jsx)(t.code,{children:"demo.jhipster.web.api.PetApi"})," interface for each ",(0,i.jsx)(t.code,{children:"paths"})," element defined in the OAS using the ",(0,i.jsx)(t.code,{children:"operationId"}),". The writing of the OAS is beyond the scope of this guide, but observe in the ",(0,i.jsx)(t.code,{children:"demo.jhipster.web.api.PetApi"})," each ",(0,i.jsx)(t.code,{children:"@RequestMapping"})," annotation and the generated method. A notable example is the ",(0,i.jsx)(t.code,{children:"operationId: find by pet id"})," and the resulting interface method of ",(0,i.jsx)(t.code,{children:"findPetById"}),", overridden in the example that follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'package demo.jhipster.web.api;\n\nimport demo.jhipster.service.api.dto.Pet;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.stereotype.Service;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\n@Service\npublic class PetsApiDelegateImpl implements PetsApiDelegate {\n\n    private final List<Pet> pets = new ArrayList<>();\n\n   @Override\n    public ResponseEntity<Pet> findPetById(Long id) {\n        Pet pet = getPets().stream().filter(p -> id.equals(p.getId())).findAny().orElse(null);\n        if (pet != null) {\n            return ResponseEntity.ok(pet);\n        }\n        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);\n    }\n\n    private List<Pet> getPets() {\n        Pet pet0 = new Pet();\n        pet0.setId(1L);\n        pet0.setName("Chessie Cat");\n        pet0.setTag("cat");\n        pets.add(pet0);\n        return pets;\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h5,{id:"pro-tip-1",children:"Pro Tip"}),"\n",(0,i.jsxs)(t.p,{children:["If the OpenAPI Generator is not producing the types or code desired, review the documentation. The JHipster default settings are generically adapted to most APIs. Consider reviewing the ",(0,i.jsx)(t.code,{children:"importMappings"})," and ",(0,i.jsx)(t.code,{children:"typeMappings"})," ",(0,i.jsx)(t.a,{href:"https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-maven-plugin",children:"options of the provided plugin"})," for additional flexibility."]}),"\n",(0,i.jsx)(t.h4,{id:"test-drive-the-implementation",children:"Test Drive the Implementation"}),"\n",(0,i.jsx)(t.p,{children:'Perform the following in a terminal (or "command prompt"):'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'./mvnw # start the server, also try \'npm run app:start\', see the package.json for more scripts!\ncurl -H "Accept: application/json" http://localhost:8081/api/pets/1\n{\n  "name" : "Chessie Cat",\n  "tag" : "cat",\n  "id" : 1\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"mocking-endpoints-in-development",children:"Mocking Endpoints in Development"}),"\n",(0,i.jsxs)(t.p,{children:["Providing the ",(0,i.jsx)(t.code,{children:"NativeWebRequest"})," bean to the Delegate interface can return example response bodies for the methods that have not been overridden. The endpoints still respond with a ",(0,i.jsx)(t.code,{children:"501 Not Implemented"})," HTTP status code, but the example response may be useful for mocking endpoints before the actual implementation."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u2139\ufe0f The OAS sample provides example bodies as documented. The ",(0,i.jsx)(t.code,{children:"schemas"})," for each operation MUST define an ",(0,i.jsx)(t.code,{children:"example"})," for the OpenAPI Generator to produce the response bodies. The following snippet is helpful:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"# ...\n# trimmed for brevity\ncomponents:\n  schemas:\n    Pet:\n      allOf:\n        - $ref: '#/components/schemas/NewPet'\n        # trimmed for brevity\n      example:\n        name: Chessie Cat\n        id: 1\n        tag: cat\n"})}),"\n",(0,i.jsx)(t.h4,{id:"override-the-default-constructor-of-the-delegate-implementation",children:"Override the default constructor of the Delegate Implementation"}),"\n",(0,i.jsxs)(t.p,{children:["With the OAS properly defined, add the ",(0,i.jsx)(t.code,{children:"NativeWebRequest"})," to the implementation as shown below. Each step is shown in the example implementation below and follows:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Add ",(0,i.jsx)(t.code,{children:"NativeWebRequest request"})," property to the implementation."]}),"\n",(0,i.jsxs)(t.li,{children:["Override the default no-args constructor,",(0,i.jsx)(t.code,{children:"public PetsApiDelegateImpl(NativeWebRequest request){...}"})]}),"\n",(0,i.jsxs)(t.li,{children:["Override the ",(0,i.jsx)(t.code,{children:"demo.jhipster.web.api.PetsApiDelegate#getRequest()"})," returning the ",(0,i.jsx)(t.code,{children:"Optional<NativeWebRequest>"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"package demo.jhipster.web.api;\n\nimport demo.jhipster.service.api.dto.Pet;\n// imports trimmed for brevity\n\n@Service\npublic class PetsApiDelegateImpl implements PetsApiDelegate {\n\n    private final NativeWebRequest request;\n    private final List<Pet> pets = new ArrayList<>();\n\n    public PetsApiDelegateImpl(NativeWebRequest request) {\n        this.request = request;\n    }\n\n    /**\n     * Provides the NativeWebRequest to the implementation class.\n     */\n    @Override\n    public Optional<NativeWebRequest> getRequest() {\n        return Optional.ofNullable(request);\n    }\n\n    @Override\n    public ResponseEntity<Pet> findPetById(Long id) {\n        // previously shown above\n    }\n\n    /**\n     * Implements the method used at the RequestMapping of /pets in the PetsApi.\n     * <p>\n     * Returns an HTTP Status of 501 Not Implemented with an example response body defined\n     * OpenAPI Specification file and generated by the OpenAPI Generator for Spring.\n     */\n    @Override\n    public ResponseEntity<List<Pet>> findPets(List<String> tags, Integer limit) {\n        return PetsApiDelegate.super.findPets(tags, limit);\n    }\n\n    private List<Pet> getPets() {\n        // previously shown above\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:['Restart the server and observe the following in a terminal (or "command prompt") with ',(0,i.jsx)(t.code,{children:"curl"})," or other HTTP tooling, e.g., Insomina, Postman, httpie:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'$ curl -H "Accept: application/json" http://localhost:8081/api/pets/1\n {\n  "name" : "Chessie Cat",\n  "tag" : "cat",\n  "id" : 1\n}\n$ curl -H "Accept: application/json" http://localhost:8081/api/pets?tags=cat\n*   Trying [::1]:8081...\n* Connected to localhost (::1) port 8081\n> GET /api/pets?tags=cat HTTP/1.1\n> Host: localhost:8081\n> User-Agent: curl/8.4.0\n> Accept: application/json\n>\n< HTTP/1.1 501 Not Implemented\n# additional headers trimmed for brevity\n< Content-Type: application/json; charset=UTF-8\n< Content-Length: 108\n<\n{ [108 bytes data]\n* Connection #0 to host localhost left intact\n[ { "name" : "Chessie Cat", "id" : 1, "tag" : "cat" }, { "name" : "Chessie Cat", "id" : 1, "tag" : "cat" } ]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The example body is returned though the HTTP Status of the response is ",(0,i.jsx)(t.code,{children:"501 Not Implemented"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsxs)(t.p,{children:["JHipster, by default, secures ",(0,i.jsx)(t.code,{children:"/api/**"})," in ",(0,i.jsx)(t.code,{children:"demo.jhipster.config.SecurityConfiguration#filterChain(HttpSecurity,  MvcRequestMatcher.Builder)"})," requiring authentication, e.g., ",(0,i.jsx)(t.code,{children:'.requestMatchers(mvc.pattern("/api/**")).authenticated()'}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Authentication is beyond the scope of this guide. However, review of the ",(0,i.jsx)(t.code,{children:"demo.jhipster.security.jwt.TokenAuthenticationIT"})," integration test can provide some insight into testing authentication in Insomina, Postman, curl, and other HTTP tools. For example, it is possible to generate a JWT Bearer token using Docker as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"docker run --rm --name jwt-cli bitnami/jwt-cli encode \\\n-S b64:<JHIPSTER_JWT_SECRET> \\\n-P 'auth=[\"ROLE_ADMIN\"]' \\\n-e=$(date -v+60S +%s) \\ # man date; produce an epoch system time + 60 seconds, macOS date command shown\n-s anonymous \\\n-A HS512 \\\n--no-typ\n"})}),"\n",(0,i.jsx)(t.p,{children:"This will generate a Bearer token for API calls, as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'curl -v -H "Accept: application/json" -H "Authorization: Bearer <ENCODED_TOKEN>" http://localhost:8081/api/pets/1\n'})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},54521:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/api-40c5069781f35fadefd73234d59b04ec.yml"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);