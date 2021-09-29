(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[460],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),k=r,m=p["".concat(i,".").concat(k)]||p[k]||d[k]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3940:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),s=["components"],c={},i="Mock Interface",l={unversionedId:"write-test/mock",id:"write-test/mock",isDocsHomePage:!1,title:"Mock Interface",description:"You can unit test your application logic using the mock database interface.",source:"@site/docs/06-write-test/02-mock.md",sourceDirName:"06-write-test",slug:"/write-test/mock",permalink:"/SeaORM/docs/write-test/mock",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/06-write-test/02-mock.md",version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1632199510,formattedLastUpdatedAt:"9/21/2021",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Robust & Correct",permalink:"/SeaORM/docs/write-test/testing"},next:{title:"Using SQLite",permalink:"/SeaORM/docs/write-test/sqlite"}},u=[{value:"Mocking Query Result",id:"mocking-query-result",children:[]},{value:"Mocking Execution Result",id:"mocking-execution-result",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mock-interface"},"Mock Interface"),(0,o.kt)("p",null,"You can unit test your application logic using the mock database interface."),(0,o.kt)("p",null,"The mock database has no data in it, so you have to define the expected data to be returned when CRUD operations are performed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The query result should be provided to support select operations"),(0,o.kt)("li",{parentName:"ul"},"The exec result should be provided to support insert, update and delete operations")),(0,o.kt)("p",null,"To ensure the correctness of your application logic you can also validate the transaction log in the mock database."),(0,o.kt)("p",null,"Checkout how we write unit tests using mock connection ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/executor/paginator.rs#L159"},"here"),"."),(0,o.kt)("h2",{id:"mocking-query-result"},"Mocking Query Result"),(0,o.kt)("p",null,"We create a mock database for Postgres with ",(0,o.kt)("inlineCode",{parentName:"p"},"MockDatabase::new(DatabaseBackend::Postgres)"),". Then, query results were prepared using ",(0,o.kt)("inlineCode",{parentName:"p"},"append_query_results")," method. Note that we passed a vector of vector to it, representing multiple query results each with more than one models. Finally, convert it into connection and use it to perform CRUD operations just like a normal live connection."),(0,o.kt)("p",null,"One thing special about ",(0,o.kt)("inlineCode",{parentName:"p"},"MockDatabase")," is that you can check the transaction log of it. Any SQL query run on the mock database will be recorded, you can validate each of it to ensure the correctness of your application logic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(test)]\nmod tests {\n    use sea_orm::{\n        entity::prelude::*, entity::*, tests_cfg::*,\n        DatabaseBackend, MockDatabase, Transaction,\n    };\n\n    #[async_std::test]\n    async fn test_find_cake() -> Result<(), DbErr> {\n        // Create MockDatabase with mock query results\n        let db = MockDatabase::new(DatabaseBackend::Postgres)\n            .append_query_results(vec![\n                // First query result\n                vec![cake::Model {\n                    id: 1,\n                    name: "New York Cheese".to_owned(),\n                }],\n                // Second query result\n                vec![\n                    cake::Model {\n                        id: 1,\n                        name: "New York Cheese".to_owned(),\n                    },\n                    cake::Model {\n                        id: 2,\n                        name: "Chocolate Forest".to_owned(),\n                    },\n                ],\n            ])\n            .into_connection();\n\n        // Find a cake from MockDatabase\n        // Return the first query result\n        assert_eq!(\n            cake::Entity::find().one(&db).await?,\n            Some(cake::Model {\n                id: 1,\n                name: "New York Cheese".to_owned(),\n            })\n        );\n\n        // Find all cakes from MockDatabase\n        // Return the second query result\n        assert_eq!(\n            cake::Entity::find().all(&db).await?,\n            vec![\n                cake::Model {\n                    id: 1,\n                    name: "New York Cheese".to_owned(),\n                },\n                cake::Model {\n                    id: 2,\n                    name: "Chocolate Forest".to_owned(),\n                },\n            ]\n        );\n\n        // Checking transaction log\n        assert_eq!(\n            db.into_transaction_log(),\n            vec![\n                Transaction::from_sql_and_values(\n                    DatabaseBackend::Postgres,\n                    r#"SELECT "cake"."id", "cake"."name" FROM "cake" LIMIT $1"#,\n                    vec![1u64.into()]\n                ),\n                Transaction::from_sql_and_values(\n                    DatabaseBackend::Postgres,\n                    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#,\n                    vec![]\n                ),\n            ]\n        );\n\n        Ok(())\n    }\n}\n')),(0,o.kt)("h2",{id:"mocking-execution-result"},"Mocking Execution Result"),(0,o.kt)("p",null,"This is very similar to mocking query result, the differences are that we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"append_exec_results")," method here and we perform insert, update and delete operations here in the unit test. The ",(0,o.kt)("inlineCode",{parentName:"p"},"append_exec_results")," method takes vector of ",(0,o.kt)("inlineCode",{parentName:"p"},"MockExecResult")," each represents the exec result of the corresponding operation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(test)]\nmod tests {\n    use sea_orm::{\n        entity::prelude::*, entity::*, tests_cfg::*,\n        DatabaseBackend, MockDatabase, MockExecResult, Transaction,\n    };\n\n    #[async_std::test]\n    async fn test_insert_cake() -> Result<(), DbErr> {\n        // Create MockDatabase with mock execution result\n        let db = MockDatabase::new(DatabaseBackend::Postgres)\n            .append_exec_results(vec![\n                MockExecResult {\n                    last_insert_id: 15,\n                    rows_affected: 1,\n                },\n            ])\n            .into_connection();\n\n        // Prepare the ActiveModel\n        let apple = cake::ActiveModel {\n            name: Set("Apple Pie".to_owned()),\n            ..Default::default()\n        };\n\n        // Insert the ActiveModel into MockDatabase\n        let insert_result = apple.insert(&db).await?;\n\n        // Checking last insert id\n        assert_eq!(insert_result.last_insert_id, 15);\n\n        // Checking transaction log\n        assert_eq!(\n            db.into_transaction_log(),\n            vec![\n                Transaction::from_sql_and_values(\n                    DatabaseBackend::Postgres,\n                    r#"INSERT INTO "cake" ("name") VALUES ($1)"#,\n                    vec!["Apple Pie".into()]\n                ),\n            ]\n        );\n\n        Ok(())\n    }\n}\n')))}p.isMDXComponent=!0}}]);