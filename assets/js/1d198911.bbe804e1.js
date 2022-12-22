"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3236],{22866:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));a(30828);const r={},i="PolkaJ Android Support",o={unversionedId:"Applications/polkaj_android_support",id:"Applications/polkaj_android_support",title:"PolkaJ Android Support",description:"Team Name:* Nathan Schwermann",source:"@site/docs/Applications/polkaj_android_support.md",sourceDirName:"Applications",slug:"/Applications/polkaj_android_support",permalink:"/Grants-Program/Applications/polkaj_android_support",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Polkadot.js NoCode Plugin",permalink:"/Grants-Program/Applications/polkadotjs_no_code"},next:{title:"Polkakeeper Grant Proposal",permalink:"/Grants-Program/Applications/polkakeeper"}},p={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Client refactoring",id:"milestone-1-client-refactoring",level:3},{value:"Milestone 2 OkHttp / Java 8 Compatible",id:"milestone-2-okhttp--java-8-compatible",level:3},{value:"Milestone 3 Android and Kotlin",id:"milestone-3-android-and-kotlin",level:3},{value:"Future Plans",id:"future-plans",level:2}],m={toc:d};function s(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"polkaj-android-support"},"PolkaJ Android Support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Nathan Schwermann"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0x454cfAa623A629CC0b4017aEb85d54C42e91479d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/301#issuecomment-1168484070"},"Terminated"))),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("p",null,"This proposal is a follow-up to the PolkaJ grant ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/pull/12"},"https://github.com/w3f/Open-Grants-Program/pull/12"),"\nI am not affiliated with the original team, but I have spoken with them about this propoal and they have encouraged me to submit it."),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The PolkaJ java client is built using Java 11 APIs and native x86 code which can not run on Android.\nThis project proposal will make the necessary changes to support the Android platform as well as provide examples."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"We will make the following changes and additions to the PolkaJ project in order to support Android versions 7 and up."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Build script changes to also compile the rust code to ARM in addition to x86 based on the target"),(0,l.kt)("li",{parentName:"ul"},"Make necessary changes to JNI code to support ARM when needed and remove Java 9 dependency"),(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"RpcCallAdapter")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"SubscriptionCallAdapter")," to client Builder interface"),(0,l.kt)("li",{parentName:"ul"},"Refactor ",(0,l.kt)("inlineCode",{parentName:"li"},"polkaj-api-http")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"polkaj-api-ws")," which both use Java 11 and can not be used on Android to implement the new Call and Subscription Factory apis"),(0,l.kt)("li",{parentName:"ul"},"Extract and refactor tests from ",(0,l.kt)("inlineCode",{parentName:"li"},"polkaj-api-http")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"polkaj-api-ws")," to be reusable for any implementations of the factory as well as additional coverage for Builder changes to support factories"),(0,l.kt)("li",{parentName:"ul"},"Add new module ",(0,l.kt)("inlineCode",{parentName:"li"},"polkaj-okhttp")," which will implement ",(0,l.kt)("inlineCode",{parentName:"li"},"RpcCallAdapter")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"SubscriptionCallAdapter")," using ",(0,l.kt)("a",{parentName:"li",href:"https://square.github.io/okhttp/"},"okhttp"),", the most widely adopted http client used in the Android development community."),(0,l.kt)("li",{parentName:"ul"},"Unit test against shared tests for java.net versions of factories, with the same or higher code coverage."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"polkaj-ktx")," modules adding support kotlin extensions and coroutine support"),(0,l.kt)("li",{parentName:"ul"},"Example Android app, uses existing command line examples in Android GUI"),(0,l.kt)("li",{parentName:"ul"},"Update documentation for build script changes and for examples on each platform"),(0,l.kt)("li",{parentName:"ul"},"Fix broken balance example on OSX"),(0,l.kt)("li",{parentName:"ul"},"Add new artifacts polkaj-schnorrkel_android.jar, polkaj-okhttp.jar")),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"This is an improvement and addition to an existing project."),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nathan Schwermann")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Nathan Schwermann"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:schwiz@gmail.com"},"schwiz@gmail.com"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,"Individual / Sole Proprietor"),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"I have ten years of experience in Android client development in the telecom and payment industries. I have led and maintained development on applications with millions of monthly active users."),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nschwermann"},"https://github.com/nschwermann"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/nathanschwermann/"},"https://www.linkedin.com/in/nathanschwermann/"))),(0,l.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"I have completed parts 1, 1b, 2a, 5, 90% complete 3a and 50% 4a from milestone 1.")),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 Months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 21,000 DAI")),(0,l.kt)("h3",{id:"milestone-1-client-refactoring"},"Milestone 1 Client refactoring"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month (2 weeks left after re-approval of milestone delivery)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 7,000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and update the existing examples documentation with api changes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"We will maintain or improve current code coverage.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"schnorrkel module remove Java 9 dependency"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1b."),(0,l.kt)("td",{parentName:"tr",align:null},"schnorrkel module Mac OS Compatibility"),(0,l.kt)("td",{parentName:"tr",align:null},"Fix native library loading on mac")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2a."),(0,l.kt)("td",{parentName:"tr",align:null},"api-base: Factories"),(0,l.kt)("td",{parentName:"tr",align:null},"We will add common Builder interface with added components for RpcCallFactory and SubscriptionFactory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2b."),(0,l.kt)("td",{parentName:"tr",align:null},"api-base: Factory Tests"),(0,l.kt)("td",{parentName:"tr",align:null},"We will extract existing http/ws tests to new common factory tests suite")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3a."),(0,l.kt)("td",{parentName:"tr",align:null},"api-http: Factory"),(0,l.kt)("td",{parentName:"tr",align:null},"Refactor to implement RpcCallFactory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3b."),(0,l.kt)("td",{parentName:"tr",align:null},"api-http: Tests"),(0,l.kt)("td",{parentName:"tr",align:null},"Unit tests 90% coverage Integration tests with api base previously extracted from this module")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4a."),(0,l.kt)("td",{parentName:"tr",align:null},"api-ws: Factory"),(0,l.kt)("td",{parentName:"tr",align:null},"Refactor to implement SubscriptionCallAdapter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4b."),(0,l.kt)("td",{parentName:"tr",align:null},"api-ws: Tests"),(0,l.kt)("td",{parentName:"tr",align:null},"Unit tests 90% coverage Integration tests with api base previously extracted from this module")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"examples"),(0,l.kt)("td",{parentName:"tr",align:null},"Fix Balance example not working on OSX")))),(0,l.kt)("h3",{id:"milestone-2-okhttp--java-8-compatible"},"Milestone 2 OkHttp / Java 8 Compatible"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 7,000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and documentation for using okhttp module.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Will have 90% code coverage Unit tests and Integration test with api base")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"polkaj-api-okhttp module"),(0,l.kt)("td",{parentName:"tr",align:null},"Will add new module with RpcCallFactory and SubscriptionFactory implementations. Adds new artifact polkaj-okhttp.jar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Example"),(0,l.kt)("td",{parentName:"tr",align:null},"Will update examples and example documentation to allow switching between okhttp and http/ws socket implementations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"schnorrkel module Android Compatibility"),(0,l.kt)("td",{parentName:"tr",align:null},"Will build RUST code for ARM adds new artifact polkaj-schnorrkel_android.jar")))),(0,l.kt)("h3",{id:"milestone-3-android-and-kotlin"},"Milestone 3 Android and Kotlin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 7,000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and documentation for using kotlin module and including polkaj inside an Android project.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Will have 90% code coverage Unit tests and Integration test with api base")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"polkaj-ktx module"),(0,l.kt)("td",{parentName:"tr",align:null},"Will include support for Kotlin coroutines and additional kotlin convenience methods")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2a."),(0,l.kt)("td",{parentName:"tr",align:null},"Example"),(0,l.kt)("td",{parentName:"tr",align:null},"Will port desktop examples into an Android app with a simple GUI to select each example and allow user input where possible")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2b."),(0,l.kt)("td",{parentName:"tr",align:null},"Example blog"),(0,l.kt)("td",{parentName:"tr",align:null},"Will write blog post and submit to medium explaining new changes to PolkaJ made to support Android and a walk through guide how to integrate PolkaJ into your Android project.")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"I will continue to look for use cases where Android can be used in the polka dot network. I am excited to see the future and hope to remain involved."))}s.isMDXComponent=!0}}]);