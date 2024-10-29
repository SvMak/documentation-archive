"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[4190],{3749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(74848),o=n(28453);const r={title:"Static API documentation",slug:"/tips/008_tips_static_swagger_docs.html",last_update:{date:new Date("2015-07-31T18:40:00.000Z")}},c=void 0,s={id:"tips/tips_static_swagger_docs",title:"Static API documentation",description:"Tip submitted by @atomfrede",source:"@site/docs/tips/008_tips_static_swagger_docs.mdx",sourceDirName:"tips",slug:"/tips/008_tips_static_swagger_docs.html",permalink:"/documentation-archive/v8.7.2/tips/008_tips_static_swagger_docs.html",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/tips/008_tips_static_swagger_docs.mdx",tags:[],version:"current",lastUpdatedAt:1438368e6,sidebarPosition:8,frontMatter:{title:"Static API documentation",slug:"/tips/008_tips_static_swagger_docs.html",last_update:{date:"2015-07-31T18:40:00.000Z"}}},a={},d=[{value:"Static API documentation with Swagger2Markup",id:"static-api-documentation-with-swagger2markup",level:2},{value:"Add required dependencies, plugins and test class",id:"add-required-dependencies-plugins-and-test-class",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Create index.adoc file",id:"create-indexadoc-file",level:2},{value:"Generate static documentation",id:"generate-static-documentation",level:2},{value:"More",id:"more",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Tip submitted by ",(0,i.jsx)(t.a,{href:"https://github.com/atomfrede",children:"@atomfrede"})]})}),"\n",(0,i.jsx)(t.h2,{id:"static-api-documentation-with-swagger2markup",children:"Static API documentation with Swagger2Markup"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["You should use the new ",(0,i.jsx)(t.a,{href:"https://github.com/atomfrede/generator-jhipster-swagger2markup",children:"swagger2markup"})," module instead of following this tip! See the ",(0,i.jsx)(t.a,{href:"https://www.jhipster.tech/modules/marketplace/",children:"JHipster Marketplace"})," for details about the module system."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to generate static API documentation (and combine it with hand-written documentation), ",(0,i.jsx)(t.a,{href:"https://swagger2markup.readme.io/",children:"Swagger2Markup"})," provides an easy way to combine auto-generated API documentation produced by\nSwagger with hand-written documentation into an up-to-date, easy-to-read, on- and offline user guide in HTML, PDF and EPUB."]}),"\n",(0,i.jsx)(t.h2,{id:"add-required-dependencies-plugins-and-test-class",children:"Add required dependencies, plugins and test class"}),"\n",(0,i.jsx)(t.h3,{id:"maven",children:"Maven"}),"\n",(0,i.jsx)(t.p,{children:"Add the following to your project dependencies:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>io.springfox</groupId>\n    <artifactId>springfox-staticdocs</artifactId>\n    <version>${springfox.version}</version>\n    <scope>test</scope>\n</dependency>\n"})}),"\n",(0,i.jsx)(t.p,{children:"Add the following to the plugin section:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:"<plugin>\n  <groupId>org.asciidoctor</groupId>\n  <artifactId>asciidoctor-maven-plugin</artifactId>\n  <version>1.5.2</version>\n  <executions>\n    <execution>\n      <id>output-html</id>\n      <phase>test</phase>\n      <goals>\n        <goal>process-asciidoc</goal>\n      </goals>\n      <configuration>\n        <backend>html5</backend>\n        <outputDirectory>${project.build.directory}/docs/html</outputDirectory>\n      </configuration>\n    </execution>\n    <execution>\n      <id>output-pdf</id>\n      <phase>test</phase>\n      <goals>\n        <goal>process-asciidoc</goal>\n      </goals>\n      <configuration>\n        <backend>pdf</backend>\n        <outputDirectory>${project.build.directory}/docs/pdf</outputDirectory>\n      </configuration>\n    </execution>\n  </executions>\n  <dependencies>\n    <dependency>\n      <groupId>org.asciidoctor</groupId>\n      <artifactId>asciidoctorj-pdf</artifactId>\n      <version>1.5.0-alpha.8</version>\n    </dependency>\n  </dependencies>\n  <configuration>\n    <sourceDirectory>src/docs/asciidoc</sourceDirectory>\n    <sourceDocumentName>index.adoc</sourceDocumentName>\n    <attributes>\n      <doctype>book</doctype>\n      <toc>left</toc>\n      <toclevels>2</toclevels>\n      <generated>${project.build.directory}/docs/asciidoc/generated</generated>\n    </attributes>\n  </configuration>\n</plugin>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"src/test/rest"})," create a new class called ",(0,i.jsx)(t.code,{children:"Swagger2MarkupTest"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'@RunWith(SpringJUnit4ClassRunner.class)\n@SpringApplicationConfiguration(classes = Application.class)\n@WebAppConfiguration\n@IntegrationTest\npublic class Swagger2MarkupTest {\n\n    private static final String API_URI = "/v2/api-docs";\n\n    @Inject\n    private WebApplicationContext context;\n\n    private MockMvc mockMvc;\n\n    private File projectDir;\n\n    @Before\n    public void setup() throws IOException {\n        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();\n\n        ClassPathResource pathfileRes = new ClassPathResource("config/application.yml");\n        projectDir = pathfileRes.getFile().getParentFile().getParentFile().getParentFile().getParentFile();\n    }\n\n    @Test\n    public void convertSwaggerToAsciiDoc() throws Exception {\n        Swagger2MarkupResultHandler.Builder builder = Swagger2MarkupResultHandler\n            .outputDirectory(outputDirForFormat("asciidoc"));\n        mockMvc.perform(get(API_URI).accept(APPLICATION_JSON))\n            .andDo(builder.build())\n            .andExpect(status().isOk());\n\n    }\n\n    private String outputDirForFormat(String format) throws IOException {\n        return new File(projectDir, "target/docs/" + format + "/generated").getAbsolutePath();\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"gradle",children:"Gradle"}),"\n",(0,i.jsx)(t.p,{children:"Add the following dependency to your project dependencies:"}),"\n",(0,i.jsx)(t.p,{children:"testCompile group: 'io.springfox', name:'springfox-staticdocs', version: springfox_version"}),"\n",(0,i.jsx)(t.p,{children:"Add the following to your build script dependencies:"}),"\n",(0,i.jsx)(t.p,{children:"classpath 'org.asciidoctor:asciidoctor-gradle-plugin:1.5.2'\nclasspath 'org.asciidoctor:asciidoctorj-pdf:1.5.0-alpha.8'"}),"\n",(0,i.jsxs)(t.p,{children:["Apply the ",(0,i.jsx)(t.code,{children:"asciidoctor convert"})," plugin:"]}),"\n",(0,i.jsx)(t.p,{children:"apply plugin: 'org.asciidoctor.convert'"}),"\n",(0,i.jsx)(t.p,{children:"Add the following to generate HTML and PDF:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"ext {\n    generatedAsciidoc = file(\"${buildDir}/docs/asciidoc/generated\")\n}\n\nasciidoctor {\n    dependsOn test\n    sources {\n        include 'index.adoc'\n    }\n    backends = ['html5', 'pdf']\n    attributes = [\n        doctype: 'book',\n        toc: 'left',\n        toclevels: '2',\n        numbered: '',\n        sectlinks: '',\n        sectanchors: '',\n        hardbreaks: '',\n        generated: generatedAsciidoc\n    ]\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"src/test/rest"})," create a new class called ",(0,i.jsx)(t.code,{children:"Swagger2MarkupTest"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'@RunWith(SpringJUnit4ClassRunner.class)\n@SpringApplicationConfiguration(classes = Application.class)\n@WebAppConfiguration\n@IntegrationTest\npublic class Swagger2MarkupTest {\n\n    private static final String API_URI = "/v2/api-docs";\n\n    @Inject\n    private WebApplicationContext context;\n\n    private MockMvc mockMvc;\n\n    private File projectDir;\n\n    @Before\n    public void setup() throws IOException {\n        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();\n\n        ClassPathResource pathfileRes = new ClassPathResource("config/application.yml");\n        projectDir = pathfileRes.getFile().getParentFile().getParentFile().getParentFile().getParentFile();\n    }\n\n    @Test\n    public void convertSwaggerToAsciiDoc() throws Exception {\n        Swagger2MarkupResultHandler.Builder builder = Swagger2MarkupResultHandler\n            .outputDirectory(outputDirForFormat("asciidoc"));\n        mockMvc.perform(get(API_URI).accept(APPLICATION_JSON))\n            .andDo(builder.build())\n            .andExpect(status().isOk());\n\n    }\n\n    private String outputDirForFormat(String format) throws IOException {\n        return new File(projectDir, "docs/" + format + "/generated").getAbsolutePath();\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"create-indexadoc-file",children:"Create index.adoc file"}),"\n",(0,i.jsxs)(t.p,{children:["Create ",(0,i.jsx)(t.code,{children:"index.adoc"})," in ",(0,i.jsx)(t.code,{children:"src/docs/asciidoc"})," with following content:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"include::{generated}/overview.adoc[]\ninclude::{generated}/paths.adoc[]\ninclude::{generated}/definitions.adoc[]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"generate-static-documentation",children:"Generate static documentation"}),"\n",(0,i.jsxs)(t.p,{children:["Your static documentation is generated during the test phase of your project. You find it in ",(0,i.jsx)(t.code,{children:"src/target/docs/html"})," or ",(0,i.jsx)(t.code,{children:"build/asciidoc/html5"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example documentation",src:n(77851).A+"",width:"800",height:"439"})}),"\n",(0,i.jsx)(t.h2,{id:"more",children:"More"}),"\n",(0,i.jsxs)(t.p,{children:["For more information (e.g. how to add hand-written documentation) see the ",(0,i.jsx)(t.a,{href:"https://swagger2markup.readme.io/",children:"official reference documentation"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},77851:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/008_tips_static_swagger_docs_01-efb9a6e3bd687dd15e440d65cdd28597.png"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var i=n(96540);const o={},r=i.createContext(o);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);