"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5357],{6152:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(95657);const i={},l="Interoperable State Machine Protocol",o={unversionedId:"applications/ismp",id:"applications/ismp",title:"Interoperable State Machine Protocol",description:"- Team Name: Polytope Labs",source:"@site/applications/ismp.md",sourceDirName:"applications",slug:"/applications/ismp",permalink:"/applications/ismp",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/ismp.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:2},{value:"Use cases",id:"use-cases",level:3},{value:"<strong><code>pallet-ismp</code></strong>",id:"pallet-ismp",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Research Publications",id:"research-publications",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team GitHub Profiles",id:"team-github-profiles",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 <code>ismp-rs</code>",id:"milestone-1--ismp-rs",level:3},{value:"Milestone 2 \u2014 <code>pallet-ismp</code>",id:"milestone-2--pallet-ismp",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},h="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interoperable-state-machine-protocol"},"Interoperable State Machine Protocol"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Polytope Labs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x486cbad2d704bc76f8d0cdda6aa93c94d53297b9 (Ethereum DAI)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 3")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Interoperable State Machine Protocol, or ISMP for short, is the product of our ",(0,r.kt)("a",{parentName:"p",href:"https://research.polytope.technology/state-(machine)-proofs"},"research")," into state proofs. We show that state-proof based interoperability is possible and more efficient as the messages no longer need to be routed through the relay chain and can be exchanged independent of it, while still maintaining the same level of trustlessness and security. This protocol allows not just for messaging but also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/issues/5087"},"state reads of other parachains")," in a trustless and secure manner."),(0,r.kt)("p",null,"Unfortunately, Parachain-to-Parachain communication today relies on the relay chain for message routing. This is highly inefficient and relieving the relay chain of this burden will allow for better Parachain throughput and scalability. We believe ISMP is the end-game for parachain interoperability, with the relevant ISMP modules, each parachain can send and receive messages and assets to and from other parachains which also have the ISMP modules. Seconded by Rob Habermeier on ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/rphmeier/status/1631448117634650114"},"twitter"),"."),(0,r.kt)("h2",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"ISMP is a simple protocol for state machines to send requests that can be handled by a counterparty chain. Akin to the HTTP paradigm in web2, parachains can issue GET-like requests for storage reads as well as POST-like requests for sending data."),(0,r.kt)("p",null,"Requests are stored in a ",(0,r.kt)("a",{parentName:"p",href:"https://research.polytope.technology/merkle-mountain-range-multi-proofs"},"merkle mountain range tree")," on the sending chain as this data structure provides some benefits, binary merkle trees have more compact proof sizes than patricia merkle tries, and in particular, merkle mountain range trees have much smaller proof sizes for recently inserted items in the tree. We believe this choice will enable higher bandwidth parachain ","<",">"," parachain messaging with smaller proof sizes."),(0,r.kt)("p",null,"ISMP will also support request timeouts, allowing for more safer parachain ","<",">"," parachain messaging."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?id=1t8Qow88En3-ZCW7P0LYjRnbSqzFS30be",alt:"Architecture"})),(0,r.kt)("h3",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,"For instance a user wanting to transfer their funds from parachain A to parachain B will initiate a post request on parachain A. This post request is stored in an mmr maintained in the state trie on parachain A. Parachain A's headers also contain the root for this mmr structure."),(0,r.kt)("p",null,"The user('s wallet) after observing that parachain A's headers have been finalized and made it's way into the relay chain state trie, can present a merkle proof of parachain A's header in the relay chain state trie which parachain B can verify using it's access to the latest relay chain state root. Next they present the mmr proof for the request which they had previously initiated on parachain A. After verifying this mmr proof, parachain B can \"execute\" the request. In this case minting the equivalent asset that was burnt on parachain A."),(0,r.kt)("p",null,"There are of course other use cases that can be built on POST requests, but this is the simplest case."),(0,r.kt)("p",null,"For GET requests, a different mechanism is at play. Perhaps a user wants to settle a bet they had made in a prediction market in parachain A. The data that is needed to settle this bet is on parachain B where we regard parachain B as the oracle parachain. The user initiates a GET request, with it's content the keys of the storage items they need to settle their bet. After initiating the request, the request is stored in the parachain A's mmr trie, but it is never relayed anywhere. Instead, the user('s wallet) then reads the state trie of parachain B and provides the state proof for the appropriate data that was requested."),(0,r.kt)("h3",{id:"pallet-ismp"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"pallet-ismp"))),(0,r.kt)("p",null,"This serves as the foundational element for state-proof based messaging between parachains, enabling state reads of the relay chain directly from any given parachain, granting the ability to verify incoming messages and data from other parachains under the shared security umbrella of the relay chain."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Custom crates")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ismp-rs")," - A set of primitives necessary for pallet-ismp",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISMPHost"),": Represents a state machine's core functionality"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISMPRouter"),": Embodies the request and response routing logic for parachain interactions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConsensusClient"),": Logic for consensus proof verification")))),(0,r.kt)("p",null,"This module can also serve as an alternative transport layer for XCM programs."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Currently messages are sent over the Relay Chain through opening HRMP channels but through ISMP we can increase the bandwidth of messaging between parachains without burdening the relay chain with these messages. This allows the relay chain to focus on its main task: enforcing the validity of parachain state transitions."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Leads: Seun Lanlege, David Salami"),(0,r.kt)("li",{parentName:"ul"},"Members: Damilare Akinlose, Femi Bankole, Jesse Chejieh")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Jesse Chejieh"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:jesse@polytope.technology"},"jesse@polytope.technology")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://research.polytope.technology/"},"research.polytope.technology"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," Harneys Fiduciary (Cayman) Limited, 4th Floor, Harbour Place, 103 South Church Street, Cayman Islands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Polytope Labs Ltd.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Polytope Labs is a collective of core blockchain engineers, researchers & scientists from varying blockchain protocol backgrounds passionate about the proliferation of networks over platforms and enabling this future through blockchain research, education, tooling and core infrastructure development."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Seun Lanlege - Founder, Mad Scientist at Polytope Labs and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/seeding/pull/33"},"Polkadot Fellowship Member"),". Previously core developer at Parity Tech, Worked on Ethereum and Polkadot with over 4 years of industry experience.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"David Salami - Scientist at Polytope Labs and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/seeding/pull/38"},"Polkadot Fellowship Member"),". Previously Senior Blockchain Engineer at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ComposableFi/"},"Composable Finance")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webb-tools"},"Webb"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Damilare Akinlose - Lab Intern at Polytope Labs and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/seeding/pull/41"},"Polkadot Fellowship Member"),". Previously Blockchain Engineer at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webb-tools"},"Webb"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Femi Bankole - Blockchain engineer at ",(0,r.kt)("a",{parentName:"p",href:"https://matchx.io/"},"Matchx_iot")," + ",(0,r.kt)("a",{parentName:"p",href:"https://www.mxc.org/"},"MXC Foundation")," and Lab Intern at Polytope Labs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Jesse Chejieh - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/seeding/pull/25"},"Polkadot Fellowship Member"),"."))),(0,r.kt)("h3",{id:"research-publications"},"Research Publications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://research.polytope.technology/consensus-proofs"},"Consensus Proofs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://research.polytope.technology/state-(machine)-proofs"},"State (Machine) Proofs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://research.polytope.technology/merkle-mountain-range-multi-proofs"},"Merkle Mountain Range Proofs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://research.polytope.technology/merkle-multi-proofs"},"Merkle Multi Proofs"))),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/polytope-labs/sync-committee-rs"},"sync-committee-rs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/polytope-labs/patricia-merkle-trie"},"Merkle Patricia Trie")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/polytope-labs/solidity-merkle-trees"},"Solidity Merkle Trees")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/polytope-labs/sc-simnode"},"Simnode"))),(0,r.kt)("h3",{id:"team-github-profiles"},"Team GitHub Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/seunlanlege/"},"Seun Lanlege")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Wizdave97/"},"David Salami")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dharjeezy/"},"Damilare Akinlose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iTranscend/"},"Femi Bankole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Doordashcon/"},"Jesse Chejieh"))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/seunlanlege/"},"Seun Lanlege")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/david-salami-188aa8170"},"David Salami")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/damilare-akinlose-6289b5b8"},"Damilare Akinlose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/femibankole"},"Femi Bankole")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jesse-chejieh-47020322a"},"Jesse Chejieh"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"State-proof based parachain messaging has been discussed on the ",(0,r.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/state-proof-based-parachain-parachain-messaging/2214/4"},"Polkadot Forum"),"."),(0,r.kt)("p",null,"And some Updates to cumulus, required for parachains to read the relay chain state has been ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/pull/2268"},"approved")),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4.5 Months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 75,000 USD")),(0,r.kt)("h3",{id:"milestone-1--ismp-rs"},"Milestone 1 \u2014 ",(0,r.kt)("inlineCode",{parentName:"h3"},"ismp-rs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1.5 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 30,000 USD")),(0,r.kt)("p",null,"In this milestone we develop the core primitives needed for pallet-ismp"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a README stating objectives of this ISMP primitive on the project repository.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test functionalities delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains what was achieved as part of the grant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0f."),(0,r.kt)("td",{parentName:"tr",align:null},"ISMP Specification"),(0,r.kt)("td",{parentName:"tr",align:null},"We will put together a technical specification detailing the ISMP protocol.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"1.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ismp-rs")),(0,r.kt)("td",{parentName:"tr",align:null},"Rust implementation of ISMP primitives for handling incoming messages to and from connected parachains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ISMPHost")),(0,r.kt)("td",{parentName:"tr",align:null},"State machine host functionality required to support ISMP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ISMPRouter")),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-component for routing incoming requests & response to the destination ISMP modules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1c."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ISMPModule")),(0,r.kt)("td",{parentName:"tr",align:null},"Interface modules/pallets must conform to in order to receive incoming ISMP requests/responses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1d."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ConsensusClient")),(0,r.kt)("td",{parentName:"tr",align:null},"Logic for consensus proof verification, In the case of parachains, we will leverage the relay chain as a ",(0,r.kt)("inlineCode",{parentName:"td"},"ConsensusClient")," through the new host functions in cumulus.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:null},"Request/Response proof verification"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-component for verifying membership of proofs of a request/response in a merkle mountain range tree.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:null},"Request Timeout verification"),(0,r.kt)("td",{parentName:"tr",align:null},"Verifying non-membership of a request in the state trie of a parachain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1e."),(0,r.kt)("td",{parentName:"tr",align:null},"Handlers"),(0,r.kt)("td",{parentName:"tr",align:null},"Logic for handling varying types of incoming messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CreateConsensusClient")),(0,r.kt)("td",{parentName:"tr",align:null},"Functionality for creating a consensus client on the receiving state machine.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ConsensusMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Functionality for handling consensus update messages from other state machines.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RequestMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Functionality for handling request messages from other state machines.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ResponseMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Functionality for handling response messages from other state machines.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TimeoutMessage")),(0,r.kt)("td",{parentName:"tr",align:null},"Functionality for handling request timeout messages from other state machines.")))),(0,r.kt)("h3",{id:"milestone-2--pallet-ismp"},"Milestone 2 \u2014 ",(0,r.kt)("inlineCode",{parentName:"h3"},"pallet-ismp")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 45,000 USD")),(0,r.kt)("p",null,"In this milestone we develop pallet-ismp"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a README stating objectives of this ISMP primitive on the project repository.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test functionalities delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"1.")),(0,r.kt)("td",{parentName:"tr",align:null},"pallet-ismp"),(0,r.kt)("td",{parentName:"tr",align:null},"Building the substrate pallet with above stated dependencies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"1b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Host"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ISMPHost")," implementation for the pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"1c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Router"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ISMPRouter")," implementation for the pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"1c.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ParachainConsensusClient")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ConsensusClient")," implementation for the pallet-ismp, utilizing the relay chain as consensus client for parachains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"1d.")),(0,r.kt)("td",{parentName:"tr",align:null},"RPC"),(0,r.kt)("td",{parentName:"tr",align:null},"This sub-crate will allow for users to query relevant ISMP data over RPC.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"1e.")),(0,r.kt)("td",{parentName:"tr",align:null},"Runtime-APIs"),(0,r.kt)("td",{parentName:"tr",align:null},"This sub-crate will expose relevant ISMP data from the runtime through runtime APIS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"1f.")),(0,r.kt)("td",{parentName:"tr",align:null},"Benchmarks"),(0,r.kt)("td",{parentName:"tr",align:null},"We will benchmark pallet-ismp, providing a benchmark crate for parachain teams to run so as to generate the proper weights for their runtime.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"We recognize the significant benefits that pallet-ismp offers to the ecosystem, and therefore, after the grant completion we plan to continue providing maintenance with support from the Polkadot/Kusama treasury."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/774"},"Solidity Trie Verifier")))}d.isMDXComponent=!0}}]);