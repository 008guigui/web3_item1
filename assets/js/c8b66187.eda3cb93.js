"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6366],{61403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));a(16758);const r={},o="Dante Network",l={unversionedId:"Applications/Dante_Network",id:"Applications/Dante_Network",title:"Dante Network",description:"- Team Name: Dante Network",source:"@site/docs/Applications/Dante_Network.md",sourceDirName:"Applications",slug:"/Applications/Dante_Network",permalink:"/Grants-Program/Applications/Dante_Network",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"DNFT Protocol",permalink:"/Grants-Program/Applications/DNFT"},next:{title:"Datagen Project",permalink:"/Grants-Program/Applications/Datagen_Project"}},s={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Highlights",id:"highlights",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members &amp; experience",id:"team-members--experience",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team members&#39; repos:",id:"team-members-repos",level:4},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Demo Vedio",id:"demo-vedio",level:3},{value:"Demo",id:"demo",level:3},{value:"Tasting SDK",id:"tasting-sdk",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Service expression layer,  message verification &amp; router credibility evaluation algorithms, basic off-chain routers, basic SDK",id:"milestone-1--service-expression-layer--message-verification--router-credibility-evaluation-algorithms-basic-off-chain-routers-basic-sdk",level:3},{value:"Milestone 2 \u2014 parallel router scheduling algorithms, SQoS, off-chain routers, SDK, testnet",id:"milestone-2--parallel-router-scheduling-algorithms-sqos-off-chain-routers-sdk-testnet",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dante-network"},"Dante Network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Dante Network"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xc92314a5f62FA54b272612804C9Ac70AC139F7B0 (Ethereum ERC20 USDT)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"We are sincerely applying for a grant from Web3 Foundation to build an infrastructure to help multi-chains currently in web3 be connected together just as OSI did for the internet in web2. We call this infrastructure Dante Network."),(0,i.kt)("p",null,"Dante Network is a middleware to empower multiple ecosystems to interoperate and interconnect in web3. In Dante Network, we define and offer a general protocol stack to realize interoperability and interconnection. This is an infrastructure bringing innovative experiences in web3, just as internet protocol is for today\u2019s internet. With this infrastructure, participants in web3 can make general message transmission and contract invocation between multi-chains."),(0,i.kt)("p",null,"We will cooperate with the smart contract platforms in Polkadot/Kusama to build and deploy our protocol stack, such that the whole Polkadot/Kusama ecosystem can interoperate with public chains temporarily not able to access XCMP generally. For example, more general than token, general information can be sent from contracts on Ethereum to Crust with the help of our protocol stack deployed on Moonriver and XCMP of Polkadot/Kusama."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Dante Network will build a multi-chain Collaboration protocol stack along with an implementation of it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Firstly, Dante protocol stack will be implemented as smart contracts deployed on multi-chains including more than one smart contract platform in the Polkadot ecosystem, through which DApps' in the Polkadot ecosystem can send or receive general messages, to or from contracts deployed on chains outside. Besides, Contracts deployed on different chains can call each other as convenient as they did in the same chain."),(0,i.kt)("li",{parentName:"ul"},'Secondly, we will build off-chain routers called "Adaption nodes" to make the underlying information routing. Anyone can participate in Dante Network by deploying an "Adaption node" with their own private key.'),(0,i.kt)("li",{parentName:"ul"},"Thirdly, we will provide SDKs covering multiple technology stacks for DApp developers to make multi-chain interoperations more convenient and easier. The technology stacks will include Rust (OAK in Polkadot, and Near, ICP outside), Solidity (Moonriver, Shiden in Polkadot, and EVM chains outside), Cadence (Flow), etc.")),(0,i.kt)("p",null,"More details of the project are as follows: "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Architecture"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/dantenetwork/Pitch-Deck/blob/main/images/%5BEN%5DDante%20Pitch%20Deck3.7_06.jpg",alt:"Architecture"})),(0,i.kt)("p",null,"Generally, the protocol stack includes three layers, the \u201cService Presentation Layer\u201d, the \u201cSecurity Quality Layer\u201d, and the \u201cConsensus Verification Layer\u201d. We make a concrete implementation of these."),(0,i.kt)("p",null,"The \u201cService Presentation Layer\u201d is at the top of the protocol stack. They have defined the message organization protocol, the invocation method, and the service interfaces, which can be analogous to \u201cRESTful Web Service\u201d and \u201cHTTPS\u201d in web2. This makes developers of web3 DApps easier to construct. We will bring privacy transaction technology into our protocol stack to help protect the privacy of behavior and data on chain."),(0,i.kt)("p",null,"The \u201cSecurity Quality Layer\u201d is the next down from the top, which defines a collection of security mechanisms that can be chosen according to the demand of the application. \u201cSQoS\u201d defines the concrete mechanisms of routing, verification, privacy, authority, etc. This can be analogous to the \u201cQoS\u201d in TCP/IP protocol cluster. "),(0,i.kt)("p",null,"The \u201cConsensus Verification Layer\u201d is the bottom layer of the protocol stack, which is especially for web3. The verification algorithms include commitment verification and belief verification, which can be adapted to a wider range of scenarios in web3. And besides, a \u201cParallel Route Scheduling\u201d algorithm is within the protocol responsible for the selection of the routers, along with which are the algorithms include evaluation, incentives, and challenge. At the bottom of this layer, they define a \u201cPhysical\u201d protocol defining the standard behavior of the routing node(named \u201cAdaption node\u201d officially), which is just analogous to the \u201cPhysical Layer\u201d of OSI. "),(0,i.kt)("p",null,'That\u2019s the overview of the protocol stack in Dante Network. We think it can be regard as the \u201cInternet protocol\u201d of Web3. The implementation of the protocol stack can be embedded in public chains as the smart contract along with the off-chain "Adaption node". That\u2019s just like the TCP/IP protocol cluster embedded in operating systems to construct the computer network along with the routers.'),(0,i.kt)("h4",{id:"highlights"},"Highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multi-ecosystem barrier-free Collaboration (Including a Token, and more than a Token): Provide a general data verification protocol to execute the circulation of the Token, the comprehensive sensing of information, and the free collaboration of DApps among multi-chains just like the \u201cinternet\u201d."),(0,i.kt)("li",{parentName:"ul"},"A dynamic balance between security, scalability, and decentralization: Provide an SQoS mechanism to customize to various scenarios just like the QoS in TCP/IP protocol cluster.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Technology stack")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ink!, Rust"),(0,i.kt)("li",{parentName:"ul"},"node.js")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/dantenetwork/Pitch-Deck/blob/main/images/%5BEN%5DDante%20Pitch%20Deck3.7_05.jpg",alt:"ecosystem fit"})),(0,i.kt)("p",null,"Polkadot/Kusama creates an interesting and great thing that various chains in its ecosystem with different abilities can be connected and cooperate with each other. We cannot agree on this philosophy more. The future of web3 would be in a multi-chains world, and currently, besides Polkadot ecosystem, there also has been lots of chains with special abilities, some of which are very famous and have made great success already (such as Ethereum, Solana, Avalanche, Near, etc.), some of which are really special (such as Flow, PlatON, Arweave, etc.). Although chains in Polkadot/Kusuma can make general communications with each other with XCMP, there's no way general and convenient enough for them to interact with chains outside of Polkadot. "),(0,i.kt)("p",null,"Aligned with the philosophy of Polkadot/Kusama, Dante Network provides a suitable method to connect Polkadot/Kusama with the other chains of the web3 world. Unlike current Token bridges from Polkadot to other ecosystems, more general than token, we provide a general message distribution and contracts invocation mechanism between Polkadot and other ecosystems. With Dante Network, every participant in Polkadot can enjoy not only the services provided by chains within the Polkadot ecosystem but also a wider range of services provided by the whole web3 world. And more users outside of Polkadot can visit services and resources within the Polkadot ecosystem without leaving their familiar environment. "),(0,i.kt)("p",null,"In general, Dante Network will help Polkadot to expand its boundaries."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members--experience"},"Team members & experience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Shawn Zheng (Tech leader of Dante Network)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Worked for a state-owned enterprise (Fortune 500) engaged in the security business for 10+ years."),(0,i.kt)("li",{parentName:"ul"},"Full-stack engineer in information security, AI, blockchain, etc."),(0,i.kt)("li",{parentName:"ul"},"Hackathon winner as a team tech leader: ",(0,i.kt)("a",{parentName:"li",href:"https://devpost.com/software/universal-trusted-cross-chain-bridge"},"Near Metabuild Hackathon"),", ",(0,i.kt)("a",{parentName:"li",href:"https://forum.latticex.foundation/t/topic/5676"},"PlatON Dorahacks"),";"),(0,i.kt)("li",{parentName:"ul"},"Github: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/xiyu1984"},"https://github.com/xiyu1984")),(0,i.kt)("li",{parentName:"ul"},"Mail: ",(0,i.kt)("a",{parentName:"li",href:"mailto:xiyuzheng1984@gmail.com"},"xiyuzheng1984@gmail.com")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Zack Wu (Full-stack Dev in web3, core dev in Dante Network)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"EOS, PlatON technical community senior participant (output 40 technical articles, help EOS, PlatON fix many bugs)."),(0,i.kt)("li",{parentName:"ul"},"Technical mentor for EOS 1st Hong Kong Hackathon Live."),(0,i.kt)("li",{parentName:"ul"},"Technical leader of EOS Genesis node eosiomeetone, the largest node in Asia in terms of traffic when the main network was launched, with TPS 8k+."),(0,i.kt)("li",{parentName:"ul"},"Senior full-stack engineer (worked in Go, Snowball)."),(0,i.kt)("li",{parentName:"ul"},"Hackathon winner: ",(0,i.kt)("a",{parentName:"li",href:"https://devpost.com/software/universal-trusted-cross-chain-bridge"},"Near Metabuild Hackathon"),", ",(0,i.kt)("a",{parentName:"li",href:"https://forum.latticex.foundation/t/topic/5676"},"PlatON Dorahacks"),";"),(0,i.kt)("li",{parentName:"ul"},"Github main page: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wuyahuang"},"https://github.com/wuyahuang"),"."),(0,i.kt)("li",{parentName:"ul"},"Technical articles: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/meet-one/documentation"},"https://github.com/meet-one/documentation"),"."),(0,i.kt)("li",{parentName:"ul"},"Mail: ",(0,i.kt)("a",{parentName:"li",href:"mailto:wuyahuang@gmail.com"},"wuyahuang@gmail.com")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"George Huang (Full-stack Dev in web3, core dev in Dante Network)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"2Senior participant of PlatON technical community ported Chainlink project for PlatON and exported several technical articles."),(0,i.kt)("li",{parentName:"ul"},"Built and maintained Polkadot, Kusama, PlatON, Ethereum2.0, ChainX, and other project nodes"),(0,i.kt)("li",{parentName:"ul"},"Crust, Phala project node data center leader, responsible for project operations and maintenance, and the development of operations and maintenance-related tools."),(0,i.kt)("li",{parentName:"ul"},"10 years as a full-stack engineer in finance, games, education, etc."),(0,i.kt)("li",{parentName:"ul"},"Hackathon winner: ",(0,i.kt)("a",{parentName:"li",href:"https://devpost.com/software/universal-trusted-cross-chain-bridge"},"Near Metabuild Hackathon"),", ",(0,i.kt)("a",{parentName:"li",href:"https://forum.latticex.foundation/t/topic/5676"},"PlatON Dorahacks"),";"),(0,i.kt)("li",{parentName:"ul"},"Github: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/virgil2019"},"https://github.com/virgil2019"),"."),(0,i.kt)("li",{parentName:"ul"},"Mail: ",(0,i.kt)("a",{parentName:"li",href:"mailto:hht2015ily@gmail.com"},"hht2015ily@gmail.com")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kay Lin (Full-stack Dev in web3, core dev in Dante Network)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A state-owned enterprise medical alliance chain development, as well as the construction and maintenance of distributed storage network, related SDK development."),(0,i.kt)("li",{parentName:"ul"},"Years of experience in blockchain, a deep participant in EOS, PlatON, and other communities, exporting technical articles, and modifying bugs."),(0,i.kt)("li",{parentName:"ul"},"Participate in EOS node maintenance, EOS DApp development."),(0,i.kt)("li",{parentName:"ul"},"Hackathon winner: ",(0,i.kt)("a",{parentName:"li",href:"https://devpost.com/software/universal-trusted-cross-chain-bridge"},"Near Metabuild Hackathon"),", ",(0,i.kt)("a",{parentName:"li",href:"https://forum.latticex.foundation/t/topic/5676"},"PlatON Dorahacks"),";"),(0,i.kt)("li",{parentName:"ul"},"GitHub: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kay404"},"https://github.com/kay404"),"."),(0,i.kt)("li",{parentName:"ul"},"Mail: ",(0,i.kt)("a",{parentName:"li",href:"mailto:kay20475@gmail.com"},"kay20475@gmail.com")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"James Fan (Full-stack Dev in web3, core dev in Dante Network)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Over 10 years of working experience in various aspects of computer programming, analysis, development, and testing."),(0,i.kt)("li",{parentName:"ul"},"EOS, Fluence, Nervos technical community participant."),(0,i.kt)("li",{parentName:"ul"},"Full-stack engineer(worked in Go/Rust/C++/Javascript)"),(0,i.kt)("li",{parentName:"ul"},"Hackathon winner: ",(0,i.kt)("a",{parentName:"li",href:"https://gitcoin.co/issue/fluencelabs/sovereign-data-hackathon/1/100026738"},"FluenceLabs gitcoin hackathon"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.nervos.org/blog/nervos-gitcoin-hackathon-winners-announced"},"nervos gitcoin hackathon"),". "),(0,i.kt)("li",{parentName:"ul"},"Github: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fsy412"},"https://github.com/fsy412")),(0,i.kt)("li",{parentName:"ul"},"Mail: ",(0,i.kt)("a",{parentName:"li",href:"mailto:fsy412@gmail.com"},"fsy412@gmail.com"))))),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Shawn Zheng"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:DanteDev01@hotmail.com"},"DanteDev01@hotmail.com"),", ",(0,i.kt)("a",{parentName:"li",href:"mailto:xiyuzheng1984@gmail.com"},"xiyuzheng1984@gmail.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.dantechain.com/"},"https://www.dantechain.com/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Twitter:")," ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/DanteNetwork"},"https://twitter.com/DanteNetwork")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Medium:")," ",(0,i.kt)("a",{parentName:"li",href:"https://dante-network.medium.com/"},"https://dante-network.medium.com/")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Telegram:")," ",(0,i.kt)("a",{parentName:"li",href:"https://t.me/DanteNetworkEN"},"https://t.me/DanteNetworkEN")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:murphy_l@dantechain.com"},"murphy_l@dantechain.com")," ")),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:"),"\n5001 BEACH ROAD\n","#"," 07-37\nGOLDEN MILE COMPLEX\nSINGAPORE (199588)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," KVANACE TECHNOLOGY FOUNDATION LTD.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Our technical team consists of several experienced full-stack engineers and scientists. Each member has many years of technical experience. Our members have a lot of experience in the web3 world. They are deep participants in several technical communities, hackathon winners, and node service providers for Polkadot/Kusama, EOS, and PlatON."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dantenetwork"},"Github Organization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dantenetwork/cross-chain-demo/tree/develop"},"Demo Repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dantenetwork/solidity-contract-template"},"SDK Repo"))),(0,i.kt)("h4",{id:"team-members-repos"},"Team members' repos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/xiyu1984"},"Shawn Z")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wuyahuang"},"Zack W")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/virgil2019"},"George H")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kay404"},"Kay L")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fsy412"},"James F"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("h3",{id:"demo-vedio"},"Demo Vedio"),(0,i.kt)("p",null,"The principle of Dante protocol stack can be seen below:\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=CYXx4O8Xgcs"},"https://www.youtube.com/watch?v=CYXx4O8Xgcs")),(0,i.kt)("h3",{id:"demo"},"Demo"),(0,i.kt)("p",null,"Everyone can try a simple demo at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dantenetwork/cross-chain-demo/tree/develop"},"Demo")),(0,i.kt)("h3",{id:"tasting-sdk"},"Tasting SDK"),(0,i.kt)("p",null,"We\u2019ve published a tasting version of the dev SDK for multi-chain DApp developers at:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dantenetwork/solidity-contract-template/tree/develop"},"tasting SDK")),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  3 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USD. ")),(0,i.kt)("h3",{id:"milestone-1--service-expression-layer--message-verification--router-credibility-evaluation-algorithms-basic-off-chain-routers-basic-sdk"},"Milestone 1 \u2014 Service expression layer,  message verification & router credibility evaluation algorithms, basic off-chain routers, basic SDK"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can use the the SDK of Dante smart contract developed in ink! to build their own Omnichain DApps. At this stage, the tutorial will cover how to make message communications and contract invocations between Polkadot\u2019s smart contract parachains and other chains(like Ethereum).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that explains what was done as part of the grant. And we will publish a series of articles that explains how Dante Protocol Stack works from a high-level perspective. The content of the articles will be consistent with the functions at this stage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"(ink!)smart contracts: Service expression layer"),(0,i.kt)("td",{parentName:"tr",align:null},"Development and testing of Service expression layer on some of Polkadot\u2019s smart contract parachains (Astar/Edgeware); Demos for communication and interoperation between one of Polkadot\u2019s smart contract platforms and Ethereum, Near, Avalanche.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"(ink!)smart contracts: message verification algorithm"),(0,i.kt)("td",{parentName:"tr",align:null},"Development and testing of verification algorithms of the consensus verification layer on some of Polkadot\u2019s smart contract parachains (Astar/Edgeware) and other chains including Ethereum, Near, Avalanche, Flow, PlatON. Verification contracts deployed on testnet. Demos for information verification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"(ink!)smart contracts: router credibility evaluation algorithm"),(0,i.kt)("td",{parentName:"tr",align:null},"Development and testing of the credibility evaluation algorithms of the consensus verification layer; Selection of growth function and decrease function suitable for smart contract on-chain is the key point; Router behavior evaluation contracts deployed on testnet; Demos for router evaluation according to their behaviors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"off-chain routers: general message sharing"),(0,i.kt)("td",{parentName:"tr",align:null},"Development and testing of the basic abilities of the off-chain router, including general message encoding and decoding, message delivery between multi-chains; Demos for some of Polkadot's smart-contracts parachain, along with Ethereum, Near, PlatON, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"(Rust)SDK: general message sharing"),(0,i.kt)("td",{parentName:"tr",align:null},"Build an early-stage SDK including a general message sending and receiving interface. Adapted to some of Polkadot's smart-contracts parachain, along with Ethereum, Near, PlatON, etc.")))),(0,i.kt)("h3",{id:"milestone-2--parallel-router-scheduling-algorithms-sqos-off-chain-routers-sdk-testnet"},"Milestone 2 \u2014 parallel router scheduling algorithms, SQoS, off-chain routers, SDK, testnet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPLv3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can use the the SDK of Dante smart contract developed in ink! to build their own Omnichain DApps. At this stage, the tutorial will cover how to use SQoS to balance security and scalability when making multi-chain operations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that explains what was done as part of the grant. And we will publish a series of articles that explains how Dante Protocol Stack works from a high-level perspective. The content of the articles will be consistent with the functions at this stage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"(ink!)smart contracts: parallel router scheduling algorithm"),(0,i.kt)("td",{parentName:"tr",align:null},"Development and testing of parallel router scheduling algorithms of the consensus verification layer; Suitable randomness is the key point; Scheduling contracts deployed on testnet. Demos for router scheduling, a router with high credibility will have a higher probability to be chosen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"(ink!)smart contracts: SQoS"),(0,i.kt)("td",{parentName:"tr",align:null},"Development, and testing of the SQoS (Security Quality of Service) mechanisms including hidden & reveal, challenge confirm, error rollback, verification threshold, authority context, etc. Multi-chain message contracts deployed on testnet. Demos for showing each of the SQoS items.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"off-chain routers: SQoS"),(0,i.kt)("td",{parentName:"tr",align:null},"SQoS abilities related to off-chain routers, including hidden & reveal, challenge confirm, error rollback, verification threshold, authority context, etc.  Adapted to some of smart contract parachain in Polkadot, along with Ethereum, Near, PlatON, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"(Rust)SDK: contracts invocation; SQoS"),(0,i.kt)("td",{parentName:"tr",align:null},"Interface of contracts invocation between multi-chains and setting of SQoS;  Adapted to some of smart contract parachain in Polkadot, along with Ethereum, Near, PlatON, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"testnet"),(0,i.kt)("td",{parentName:"tr",align:null},"The testing for the basic abilities of the whole protocol stack. Demos for the whole abilities. Launch the testnet of Dante Network.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"After the ",(0,i.kt)("inlineCode",{parentName:"p"},"ink!")," version of the Dante protocol stack is fully tested, we would like to implement a ",(0,i.kt)("inlineCode",{parentName:"p"},"pallet")," version for Polkadot ecosystems. Anyone who is integrating it can communicate with other ecosystems conveniently."),(0,i.kt)("p",null,"Our next step is to work with many application-based projects to iterate our SDK for developers based on their needs, making web3's multi-chain interaction easier."),(0,i.kt)("p",null,"At the same time, we will continue to improve and update our protocol stack as we use it. We will invite more project parties, developers, and end-users to participate and give their valuable suggestions."),(0,i.kt)("p",null,"Security is the most important point in this field, so it will be fully tested on the testnet. And there will also be some targeted hackathon events related to security."),(0,i.kt)("p",null,"Dante Network will be a long-term project because our final goal is to provide a simple, easy-to-use, secure infrastructure. At that time, the interactions between most of the chains in web3 will be as convenient as the interactions with terminal devices in web2 through the internet. "),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,"We highly endorse the philosophy of Web3 Foundation. We think the web3 world is expected to be an \u201cinternet\u201d of multi-chains, each of which can provide its own special features and every participant can share it worldwide. So there should be a kind of infrastructure that can provide consistent and convenient multi-chain interoperability for DApps in Web3 so that they can focus on their application business. At that time, DApps can serve the whole web3 market instead of staying in some certain ecosystem. "),(0,i.kt)("p",null,"In our idea, we think different chains are like realms in mythology. There are barriers for users to having universal transportation to travel around the different realms. And there is Bifrost to open a teleport between realms, but it is neither cheap nor easy.  So inspired by this, we want to grow a \u201cWorld Tree\u201d that supports open and collaborative ecosystems in web3. "),(0,i.kt)("p",null,"It can take roots in the computing resources and storage infrastructures in web3 and web2 to provide orderly resource scheduling. And it can grow by offering non-differentiated data collaboration services for DApps in web3 and providing valid resources. This is why we have the Dante Network."))}h.isMDXComponent=!0}}]);