"use strict";(self.webpackChunkjhipster_website=self.webpackChunkjhipster_website||[]).push([[6215],{87794:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(74848),o=i(28453);const r={title:"Managing relationships",slug:"/managing-relationships/",last_update:{date:new Date("2020-11-25T09:07:00.000Z")}},s=void 0,a={id:"core-tasks/managing-relationships",title:"Managing relationships",description:"When JPA is used, the entity sub-generator can create relationships between entities.",source:"@site/docs/core-tasks/managing-relationships.mdx",sourceDirName:"core-tasks",slug:"/managing-relationships/",permalink:"/documentation-archive/v8.7.2/managing-relationships/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhipster/jhipster.github.io/tree/main/docs/core-tasks/managing-relationships.mdx",tags:[],version:"current",lastUpdatedAt:160629522e4,frontMatter:{title:"Managing relationships",slug:"/managing-relationships/",last_update:{date:"2020-11-25T09:07:00.000Z"}},sidebar:"docsSidebar",previous:{title:" Creating DTOs",permalink:"/documentation-archive/v8.7.2/using-dtos/"},next:{title:"Internationalization",permalink:"/documentation-archive/v8.7.2/installing-new-languages/"}},h={},l=[{value:"Presentation",id:"presentation",level:2},{value:"JHipster UML and JDL Studio",id:"jhipster-uml-and-jdl-studio",level:2},{value:"Available relationships",id:"available-relationships",level:2},{value:"A bidirectional one-to-many relationship",id:"a-bidirectional-one-to-many-relationship",level:2},{value:"A bidirectional many-to-one relationship",id:"a-bidirectional-many-to-one-relationship",level:2},{value:"A unidirectional many-to-one relationship",id:"a-unidirectional-many-to-one-relationship",level:2},{value:"A unidirectional one-to-many relationship",id:"a-unidirectional-one-to-many-relationship",level:2},{value:"Two one-to-many relationships on the same two entities",id:"two-one-to-many-relationships-on-the-same-two-entities",level:2},{value:"A many-to-many relationship",id:"a-many-to-many-relationship",level:2},{value:"A one-to-one relationship",id:"a-one-to-one-relationship",level:2},{value:"A unidirectional one-to-one relationship",id:"a-unidirectional-one-to-one-relationship",level:2},{value:"Using JPA Derived Identifiers(@MapsId) for one-to-one relationship",id:"using-jpa-derived-identifiersmapsid-for-one-to-one-relationship",level:3},{value:"Setting fetching data strategy to eager (FetchType.EAGER)",id:"setting-fetching-data-strategy-to-eager-fetchtypeeager",level:2},{value:"Embedded Entities for Couchbase and MongoDB",id:"embedded-entities-for-couchbase-and-mongodb",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["When JPA is used, the ",(0,t.jsx)(n.a,{href:"/creating-an-entity",children:"entity sub-generator"})," can create relationships between entities."]}),"\n",(0,t.jsx)(n.h2,{id:"presentation",children:"Presentation"}),"\n",(0,t.jsxs)(n.p,{children:["Relationships only work when JPA is used. If you choose to use ",(0,t.jsx)(n.a,{href:"/using-cassandra",children:"Cassandra"})," they won't be available. In case you use ",(0,t.jsx)(n.a,{href:"/using-mongodb/",children:"MongoDB"}),", ",(0,t.jsx)(n.a,{href:"/using-couchbase/",children:"Couchbase"})," or ",(0,t.jsx)(n.a,{href:"/using-neo4j",children:"Neo4j"})," relations have a different semantics, but they are all available to be used. For more information about Couchbase and MongoDB relationships please refer to ",(0,t.jsx)(n.a,{href:"#embedded-entities-for-couchbase-and-mongodb",children:"Embedded Entities for Couchbase and MongoDB"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"A relationship works between two entities, and JHipster will generate the code for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Managing this relationship with JPA in the generated entities"}),"\n",(0,t.jsx)(n.li,{children:"Creating the correct Liquibase changelog, in order for the relationship to exist in the database"}),"\n",(0,t.jsx)(n.li,{children:"Generating the Angular/React front-end so you can manage this relationship graphically in the user interface"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"jhipster-uml-and-jdl-studio",children:"JHipster UML and JDL Studio"}),"\n",(0,t.jsx)(n.p,{children:"This page describes how to create relationships with JHipster using the standard command-line interface.  If you want to create many entities and relationships, you might prefer to use a graphical tool."}),"\n",(0,t.jsx)(n.p,{children:"In that case, three options are available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://start.jhipster.tech/jdl-studio/",children:"JDL Studio"}),", our online tool to create entities and relationships using our domain-specific language."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/jhipster-ide/",children:"JHipster IDE"}),", a plugin that provides textual editing support of JDL files for popular IDEs."]}),"\n",(0,t.jsxs)(n.li,{children:["Deprecated: ",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.a,{href:"/jhipster-uml/",children:"JHipster UML"}),", which allows you to use an UML editor."]})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can generate entities with relationships from a JDL file using the ",(0,t.jsx)(n.code,{children:"jdl"})," sub-generator, by running ",(0,t.jsx)(n.code,{children:"jhipster jdl your-jdl-file.jh"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"available-relationships",children:"Available relationships"}),"\n",(0,t.jsx)(n.p,{children:"As we use JPA, the usual one-to-many, many-to-one, many-to-many and one-to-one relationships are available."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"User"})," entity"]})}),"\n",(0,t.jsxs)(n.p,{children:["Information about it is located ",(0,t.jsx)(n.a,{href:"/user-entity",children:"here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A small warning about entity & relationship generation"}),": in the following examples, you'll notice that compilation\n",(0,t.jsx)(n.em,{children:"may"})," fail in some cases because destination entities aren't generated and that's normal (this warning can be ignored)."]})}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to avoid that:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Generate the entities first, then the relationships"}),"\n",(0,t.jsx)(n.li,{children:"Use the JDL"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"a-bidirectional-one-to-many-relationship",children:"A bidirectional one-to-many relationship"}),"\n",(0,t.jsxs)(n.p,{children:["Let's start with two entities, a ",(0,t.jsx)(n.code,{children:"Owner"})," and a ",(0,t.jsx)(n.code,{children:"Car"}),". A owner can have many cars, and a car can have only one owner."]}),"\n",(0,t.jsx)(n.p,{children:"So this is a one-to-many relationship (one owner has many cars) on one side, and a many-to-one relationship (many cars have one owner) on the other side:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Owner (1) <-----\x3e (*) Car\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that after generating the entity, the generator will inform you that some errors occurred while generating\nthe files. That's normal as the destination entity has not yet been generated, so you can safely ignore this warning."}),"\n",(0,t.jsxs)(n.p,{children:["We will create the ",(0,t.jsx)(n.code,{children:"Owner"})," first. Here are the relevant JHipster questions for the ",(0,t.jsx)(n.code,{children:"Owner"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Owner\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Car\n? What is the name of the relationship? car\n? What is the type of the relationship? one-to-many\n? What is the name of this relationship in the other entity? owner\n"})}),"\n",(0,t.jsx)(n.p,{children:"Please note that we selected the default options concerning the names of the relationships."}),"\n",(0,t.jsxs)(n.p,{children:["Now we can generate the ",(0,t.jsx)(n.code,{children:"Car"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Car\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Owner\n? What is the name of the relationship? owner\n? What is the type of the relationship? many-to-one\n? When you display this relationship with Angular, which field from 'Owner' do you want to use? id\n"})}),"\n",(0,t.jsx)(n.p,{children:"The same can be achieved using the below JDL as well"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Owner\nentity Car\n\nrelationship OneToMany {\n  Owner{car} to Car{owner}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["That's it, you now have a one-to-many relationship between those two entities! On the generated Angular/React client UI you will have a dropdown in ",(0,t.jsx)(n.code,{children:"Car"})," to select a ",(0,t.jsx)(n.code,{children:"Owner"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"a-bidirectional-many-to-one-relationship",children:"A bidirectional many-to-one relationship"}),"\n",(0,t.jsx)(n.p,{children:"This is equivalent to the bidirectional one-to-many relationship after inversing the sides in the JDL file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Owner\nentity Car\n\nrelationship ManyToOne {\n  Car{owner} to Owner{car}\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"a-unidirectional-many-to-one-relationship",children:"A unidirectional many-to-one relationship"}),"\n",(0,t.jsxs)(n.p,{children:["In the previous example we had a bidirectional relationship: from a ",(0,t.jsx)(n.code,{children:"Car"})," instance you could find its owner, and from a ",(0,t.jsx)(n.code,{children:"Owner"})," instance you could get all of its cars."]}),"\n",(0,t.jsx)(n.p,{children:"A many-to-one unidirectional relationship means that the cars know their owner, but not the opposite."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Owner (1) <----- (*) Car\n"})}),"\n",(0,t.jsx)(n.p,{children:"You would do that relationship for two reasons:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"From a business point of view, you only use your entities in this way. So you don't want to have an API that allows developers to do something which doesn't make sense."}),"\n",(0,t.jsxs)(n.li,{children:["You have a small performance gain when using the ",(0,t.jsx)(n.code,{children:"Owner"})," entity (as it won't have to manage the collection of cars)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In that case, you would still create the ",(0,t.jsx)(n.code,{children:"Owner"})," first, this time with no relationship:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Owner\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? No\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And then the ",(0,t.jsx)(n.code,{children:"Car"})," entity, as in the previous example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Car\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Owner\n? What is the name of the relationship? owner\n? What is the type of the relationship? many-to-one\n? When you display this relationship with Angular, which field from 'Owner' do you want to use? id\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will work as in the previous example, but you won't be able to add or remove cars from the ",(0,t.jsx)(n.code,{children:"Owner"})," entity. On the generated Angular/React client UI you will have a dropdown in ",(0,t.jsx)(n.code,{children:"Car"})," to select a ",(0,t.jsx)(n.code,{children:"Owner"}),".\nThis is the corresponding JDL:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Owner\nentity Car\n\nrelationship ManyToOne {\n  Car{owner} to Owner\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"a-unidirectional-one-to-many-relationship",children:"A unidirectional one-to-many relationship"}),"\n",(0,t.jsxs)(n.p,{children:["A one-to-many unidirectional relationship means that the ",(0,t.jsx)(n.code,{children:"Owner"})," instance can get its collection of cars, but not the opposite. It is the opposite from the previous example."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Owner (1) -----\x3e (*) Car\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This type of relationship is not provided by default in JHipster at the moment, see ",(0,t.jsx)(n.a,{href:"https://github.com/jhipster/generator-jhipster/issues/1569",children:"#1569"})," for more information."]}),"\n",(0,t.jsx)(n.p,{children:"You have two solutions for this:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Do a bidirectional mapping, and use it without modification: this is our recommended approach, as it is much simpler"}),"\n",(0,t.jsxs)(n.li,{children:["Do a bidirectional mapping, and then modify it to transform it into a unidirectional mapping:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['Remove the "mappedBy" attribute on your ',(0,t.jsx)(n.code,{children:"@OneToMany"})," annotation"]}),"\n",(0,t.jsxs)(n.li,{children:["Generate the required join table: you can do a ",(0,t.jsx)(n.code,{children:"mvn liquibase:diff"})," to generate that table, see the ",(0,t.jsx)(n.a,{href:"/development/",children:"documentation about using Liquibase diff"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This is not supported with JDL as it isn't in JHipster."}),"\n",(0,t.jsx)(n.h2,{id:"two-one-to-many-relationships-on-the-same-two-entities",children:"Two one-to-many relationships on the same two entities"}),"\n",(0,t.jsxs)(n.p,{children:["For this example, a ",(0,t.jsx)(n.code,{children:"Person"})," can be the owner of many cars and can also be the driver of many cars:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Person (1) <---owns-----\x3e (*) Car\nPerson (1) <---drives---\x3e (*) Car\n"})}),"\n",(0,t.jsx)(n.p,{children:"For this we need to use the relationship names, which we have left with their default values in the previous examples."}),"\n",(0,t.jsxs)(n.p,{children:["Generate the ",(0,t.jsx)(n.code,{children:"Person"})," entity, which has two one-to-many relationships to the ",(0,t.jsx)(n.code,{children:"Car"})," entity:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Person\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Car\n? What is the name of the relationship? ownedCar\n? What is the type of the relationship? one-to-many\n? What is the name of this relationship in the other entity? owner\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Car\n? What is the name of the relationship? drivenCar\n? What is the type of the relationship? one-to-many\n? What is the name of this relationship in the other entity? driver\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Generate the ",(0,t.jsx)(n.code,{children:"Car"})," entity, which use the same relationship name has was configured in the ",(0,t.jsx)(n.code,{children:"Person"})," entity:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Car\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Person\n? What is the name of the relationship? owner\n? What is the type of the relationship? many-to-one\n? When you display this relationship with Angular, which field from 'Person' do you want to use? id\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Person\n? What is the name of the relationship? driver\n? What is the type of the relationship? many-to-one\n? When you display this relationship with Angular, which field from 'Person' do you want to use? id\n"})}),"\n",(0,t.jsx)(n.p,{children:"The same can be achieved using the below JDL as well"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Person\nentity Car\n\nrelationship OneToMany {\n  Person{ownedCar} to Car{owner}\n}\n\nrelationship OneToMany {\n  Person{drivenCar} to Car{driver}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"Car"})," can now have a driver and a owner, which are both ",(0,t.jsx)(n.code,{children:"Person"})," entities. On the generated Angular/React client UI you will dropdowns in ",(0,t.jsx)(n.code,{children:"Car"})," to select a ",(0,t.jsx)(n.code,{children:"Person"})," for ",(0,t.jsx)(n.code,{children:"owner"})," field and ",(0,t.jsx)(n.code,{children:"driver"})," field."]}),"\n",(0,t.jsx)(n.h2,{id:"a-many-to-many-relationship",children:"A many-to-many relationship"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"Driver"})," can drive many cars, but a ",(0,t.jsx)(n.code,{children:"Car"})," can also have many drivers."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Driver (*) <-----\x3e (*) Car\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At the database level, this means we will have a join table between the ",(0,t.jsx)(n.code,{children:"Driver"})," and the ",(0,t.jsx)(n.code,{children:"Car"})," tables."]}),"\n",(0,t.jsxs)(n.p,{children:["For JPA, one of those two entities will need to manage the relationship: in our case, that would be the ",(0,t.jsx)(n.code,{children:"Car"})," entity, which will be responsible to add or remove drivers."]}),"\n",(0,t.jsx)(n.p,{children:"Please note that, after generating the entity, the generator will inform you that some errors occurred while generating\nthe files. That's normal as the destination entity has not yet been generated, so you can safely ignore this warning."}),"\n",(0,t.jsxs)(n.p,{children:["Let us generate the non-owning side of the relationship, the ",(0,t.jsx)(n.code,{children:"Driver"}),", with a many-to-many relationship:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Driver\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Car\n? What is the name of the relationship? car\n? What is the type of the relationship? many-to-many\n? Is this entity the owner of the relationship? No\n? What is the name of this relationship in the other entity? driver\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then generate the ",(0,t.jsx)(n.code,{children:"Car"}),", with the owning side of the many-to-many relationship:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Car\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Driver\n? What is the name of the relationship? driver\n? What is the type of the relationship? many-to-many\n? Is this entity the owner of the relationship? Yes\n? What is the name of this relationship in the other entity? car\n? When you display this relationship on client-side, which field from 'Driver' do you want to use? This field will be displayed as a String, so it cannot be a Blob id\n"})}),"\n",(0,t.jsx)(n.p,{children:"The same can be achieved using the below JDL as well"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Driver\nentity Car\n\nrelationship ManyToMany {\n  Car{driver} to Driver{car}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["That's it, you now have a many-to-many relationship between those two entities! On the generated Angular/React client UI you will have a multi-select dropdown in ",(0,t.jsx)(n.code,{children:"Car"})," to select multiple ",(0,t.jsx)(n.code,{children:"Driver"})," since ",(0,t.jsx)(n.code,{children:"Car"})," is the owning side."]}),"\n",(0,t.jsx)(n.h2,{id:"a-one-to-one-relationship",children:"A one-to-one relationship"}),"\n",(0,t.jsxs)(n.p,{children:["Following our example, a one-to-one relationship would mean that a ",(0,t.jsx)(n.code,{children:"Driver"})," can drive only one ",(0,t.jsx)(n.code,{children:"Car"}),", and a ",(0,t.jsx)(n.code,{children:"Car"})," can only have one ",(0,t.jsx)(n.code,{children:"Driver"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Driver (1) <-----\x3e (1) Car\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Let us create the non-owning side of the relationship, in our case the ",(0,t.jsx)(n.code,{children:"Driver"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Driver\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Car\n? What is the name of the relationship? car\n? What is the type of the relationship? one-to-one\n? Is this entity the owner of the relationship? No\n? What is the name of this relationship in the other entity? driver\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then generate the ",(0,t.jsx)(n.code,{children:"Car"}),", which owns the relationship:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Car\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Driver\n? What is the name of the relationship? driver\n? What is the type of the relationship? one-to-one\n? Is this entity the owner of the relationship? Yes\n? Do you want to use JPA Derived Identifier - @MapsId? No\n? What is the name of this relationship in the other entity? car\n? When you display this relationship on client-side, which field from 'Driver' do you want to use? This field will be displayed as a String, so it cannot be a Blob id\n"})}),"\n",(0,t.jsx)(n.p,{children:"The same can be achieved using the below JDL as well"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Driver\nentity Car\n\nrelationship OneToOne {\n  Car{driver} to Driver{car}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["That's it, you now have a one-to-one relationship between those two entities! On the generated Angular/React client UI you will have a dropdown in ",(0,t.jsx)(n.code,{children:"Car"})," to select a ",(0,t.jsx)(n.code,{children:"Driver"})," since ",(0,t.jsx)(n.code,{children:"Car"})," is the owning side."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#using-jpa-derived-identifiersmapsid-for-one-to-one-relationship",children:"More information on using one-to-one with JPA Derived Identifiers"})}),"\n",(0,t.jsx)(n.h2,{id:"a-unidirectional-one-to-one-relationship",children:"A unidirectional one-to-one relationship"}),"\n",(0,t.jsxs)(n.p,{children:["A unidirectional one-to-one relationship means that the ",(0,t.jsx)(n.code,{children:"citizen"})," instance can get its passport, but the ",(0,t.jsx)(n.code,{children:"passport"})," instance can't get to its owner."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Citizen (1) -----\x3e (1) Passport\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Generate the ",(0,t.jsx)(n.code,{children:"Passport"})," entity first, without any relationship to its owner:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Passport\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? No\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, generate the ",(0,t.jsx)(n.code,{children:"Citizen"})," entity:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jhipster entity Citizen\n...\nGenerating relationships to other entities\n? Do you want to add a relationship to another entity? Yes\n? What is the name of the other entity? Passport\n? What is the name of the relationship? passport\n? What is the type of the relationship? one-to-one\n? Is this entity the owner of the relationship? Yes\n? Do you want to use JPA Derived Identifier - @MapsId? No\n? What is the name of this relationship in the other entity? citizen\n? When you display this relationship with Angular, which field from 'Passport' do you want to use? id\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After doing this, a ",(0,t.jsx)(n.code,{children:"Citizen"})," possesses a passport, but no ",(0,t.jsx)(n.code,{children:"Citizen"})," instance is defined in ",(0,t.jsx)(n.code,{children:"Passport"}),". On the generated Angular/React client UI you will have a dropdown in ",(0,t.jsx)(n.code,{children:"Citizen"})," to select a ",(0,t.jsx)(n.code,{children:"Passport"})," since ",(0,t.jsx)(n.code,{children:"Citizen"})," is the owning side.\nThis is the corresponding JDL:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Citizen\nentity Passport\n\nrelationship OneToOne {\n  Citizen{passport} to Passport\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-jpa-derived-identifiersmapsid-for-one-to-one-relationship",children:"Using JPA Derived Identifiers(@MapsId) for one-to-one relationship"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://javaee.github.io/javaee-spec/javadocs/javax/persistence/MapsId.html",children:"JPA Derived Identifiers"})," can be used to have ",(0,t.jsx)(n.a,{href:"https://vladmihalcea.com/the-best-way-to-map-a-onetoone-relationship-with-jpa-and-hibernate/",children:"the most efficient mapping"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This is the corresponding JDL for previous uni-directional one-to-one example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Citizen\nentity Passport\n\nrelationship OneToOne {\n  Citizen{passport} to @Id Passport\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is the corresponding JDL for previous bi-directional one-to-one example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Driver\nentity Car\n\nrelationship OneToOne {\n  Car{driver} to @Id Driver{car}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["However, based on business requirements, there might be cases where this should be avoided because it has following constraint:\n",(0,t.jsx)(n.strong,{children:"Once the id(primary key) is set at owning side, it is not changeable using JPA/Hibernate. You should not change it anyway."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Here are a few suggestions regarding usage:"})}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"@MapsId"})," when:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dependent - if the owning side (child entity) seems tightly dependent on the non-owning (parent entity)."}),"\n",(0,t.jsx)(n.li,{children:"Association value is never meant to be changed - if you are never going to change the id(primary key) of the child entity once it is set."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"class User{}\nclass Profile{ @OneToOne @MapsId private User user; } // profile is only meant for that user\nclass Preferences{ @OneToOne @MapsId private User user; } // preference is only meant for that user\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once a profile or a preference is created for a user, it will never change to refer to another user."}),"\n",(0,t.jsxs)(n.p,{children:["Do not use  ",(0,t.jsx)(n.code,{children:"@MapsId"})," when:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Not dependent - If the owning side (child entity) seems not dependent on the non-owning (parent entity)"}),"\n",(0,t.jsx)(n.li,{children:"Association value is meant to be changed - if you think that the child entity is going to refer to another parent entity in future."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'class Car{ @OneToOne @JoinColumn(name="current_driver_id") Driver currentDriver} // car can be drived by another driver in future\nclass Driver{@OneToOne(mappedBy = "currentDriver") Car drivingCar} // driver drives another car in future\n'})}),"\n",(0,t.jsx)(n.p,{children:"Both car and driver association value may change in future."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["There is ",(0,t.jsxs)(n.a,{href:"/tips/026_tip_issue_of_onetoone_with_mapsid_how_to_avoid_it.html",children:["a known issue regarding using ",(0,t.jsx)(n.code,{children:"@OneToOne"})," with ",(0,t.jsx)(n.code,{children:"@MapsId"})," and how to avoid it"]}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"setting-fetching-data-strategy-to-eager-fetchtypeeager",children:"Setting fetching data strategy to eager (FetchType.EAGER)"}),"\n",(0,t.jsx)(n.p,{children:"All the relationships use the default JPA FetchType:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OneToMany: LAZY"}),"\n",(0,t.jsx)(n.li,{children:"ManyToOne: EAGER"}),"\n",(0,t.jsx)(n.li,{children:"ManyToMany: LAZY"}),"\n",(0,t.jsx)(n.li,{children:"OneToOne: EAGER"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["There is ",(0,t.jsx)(n.a,{href:"https://github.com/jhipster/generator-jhipster/issues/10981",children:"a known issue of NPE during JSON deserialization"})," due to eager fetch type. If you would like to set either ",(0,t.jsx)(n.code,{children:"OneToMany"})," or ",(0,t.jsx)(n.code,{children:"ManyToMany"})," relationship to ",(0,t.jsx)(n.code,{children:"FetchType.EAGER"}),", you can use one of the following solutions:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"@JsonInclude(JsonInclude.Include.NON_EMPTY)"})," on the relationship"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'@OneToMany(mappedBy = "parent", fetch = FetchType.EAGER)\n@JsonInclude(JsonInclude.Include.NON_EMPTY)\nprivate Set<Child> child = new HashSet<>();\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Return null if the collection is empty when fetching the resource in the backend"}),"\n",(0,t.jsx)(n.li,{children:"Using DTO and handle the edge case of empty collection"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"embedded-entities-for-couchbase-and-mongodb",children:"Embedded Entities for Couchbase and MongoDB"}),"\n",(0,t.jsxs)(n.p,{children:["Couchbase and MongoDB supports relationships through embedded documents. For more information regarding embedded documents in MongoDB refer to ",(0,t.jsx)(n.a,{href:"https://docs.mongodb.com/manual/applications/data-models-relationships/",children:"https://docs.mongodb.com/manual/applications/data-models-relationships/"})," and for Couchbase refer to ",(0,t.jsx)(n.a,{href:"https://docs.couchbase.com/server/5.1/data-modeling/modeling-relationships.html",children:"https://docs.couchbase.com/server/5.1/data-modeling/modeling-relationships.html"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can define embedded documents simply by using ",(0,t.jsx)(n.code,{children:"@embedded"}),". For example to define a one-to-one relationship;"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Country {\n  countryName String\n}\n\n@embedded\nentity Region {\n  regionName String\n}\n\n\nrelationship OneToOne {\n  Country to Region\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Similarly, for a one-to-many relationship,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"entity Country {\n  countryName String\n}\n\n@embedded\nentity Region {\n  regionName String\n}\n\n\nrelationship OneToMany {\n  Country to Region\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For a many-to-many relationship you can simply use the ",(0,t.jsx)(n.code,{children:"@embedded"})," keyword in both directions;"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"@embedded\n  entity Country {\n  countryName String\n}\n\n@embedded\nentity Region {\n  regionName String\n}\n\n\nrelationship ManyToMany {\n  Country to Region\n}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);