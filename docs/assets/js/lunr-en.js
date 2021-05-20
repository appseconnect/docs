var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  

  
  

  
  
    idx.add({
      title: "SDK Overview",
      excerpt: "APPSeCONNECT is a generic platform that helps a developer as well as an integration consultant to work on specific application,...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 0
    });
    
  
    idx.add({
      title: "Overview on adapter development",
      excerpt: "Adapter in terms of APPSeCONNECT is a piece of software component external to the application core is plugged in to...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 1
    });
    
  
    idx.add({
      title: "Overview on plugin development",
      excerpt: "Plugins are a piece of software which lets to tightly couple with the platform to enhance the platform and /...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 2
    });
    
  
    idx.add({
      title: "Overview on policies development",
      excerpt: "Policies are special modules which hooks over an Http pipeline of API execution. In addition to prebuilt policies, APPSeCONNECT also...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 3
    });
    
  
    idx.add({
      title: "Implementing Pull and Push functions",
      excerpt: "It is evident that implementating adapter requires extensive knowledge about the API which you want to connect to, such that...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 4
    });
    
  
    idx.add({
      title: "Implementing Event-driven integration",
      excerpt: "An integration is generally scheduled at an interval or a specific time such that the data is pulled from the...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 5
    });
    
  
    idx.add({
      title: "How to design an interface for Credentials",
      excerpt: "APPSeCONNECT adapter development SDK allows one to implement and create user interface for credentials. In case of OnPremise agent, you...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 6
    });
    
  
    idx.add({
      title: "Developing APPResource Methods",
      excerpt: "Application resources are special methods that can be added on the adapter code using the interface IAppResources which can be...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 7
    });
    
  
    idx.add({
      title: "Handling various events of Adapter",
      excerpt: "APPSeCONNECT provides a number of events which you as a developer can hook into, to write code specially when the...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 8
    });
    
  
    idx.add({
      title: "How to test an Adapter",
      excerpt: "Adapter development is a common practice, and one of the most challenging thing to do is to debug an adapter...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 9
    });
    
  
    idx.add({
      title: "Implementing Action filter Parser",
      excerpt: "Action filters are special hierarchical key-value data store for each integration points which provides functionality to have hierarchy and can...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 10
    });
    
  
    idx.add({
      title: "Logging and Tracing",
      excerpt: "Adapter works on background always to communicate data between application and APPSeCONNECT. As there are a large part of code...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 11
    });
    
  
    idx.add({
      title: "Storing Transactional Data",
      excerpt: "Adapter supports a number of storages which you can make use of to perform various tasks. For an adapter developer,...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 12
    });
    
  
    idx.add({
      title: "Create User Defined Appresource Functions",
      excerpt: "Implementing User Specific Business Integrations often requires usage of User Defined Appresource Functions that enables you to provide customized expressions...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 13
    });
    
  
    idx.add({
      title: "User Defined Functions overview",
      excerpt: "Processflow is now featured to add User Defined Cloud Appresource functions from the designer page that lets you Create, list...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 14
    });
    
  
    idx.add({
      title: "Q1 Release Version 3.4.0",
      excerpt: "Product Release Version: 3.4.0 Release notes were published and last revised in March 2017. APPSeCONNECT welcomes you in the first...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 15
    });
    
  
    idx.add({
      title: "Q2 Release Version 3.5.0",
      excerpt: "Product Release Version: 3.5.0 Release notes were published and last revised in July 2017. As our tagline states Empower your...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 16
    });
    
  
    idx.add({
      title: "Q3 Release Version 3.6.0",
      excerpt: "Product Release Version: 3.6.0 Release notes were published and last revised in October 2017. With fall closing in, APPSeCONNECT welcomes...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 17
    });
    
  
    idx.add({
      title: "Q4 Release Version 3.7.0",
      excerpt: "Product Release Version: 3.7.0 Release notes were published and last revised on January 2018 With a whole year of learning...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 18
    });
    
  
    idx.add({
      title: "APPSeCONNECT 2017 Release",
      excerpt: "This section will give you detailed decsription of 2017 releases. Presently the enlisted sections under 2017 Release is given under...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 19
    });
    
  
    idx.add({
      title: "Q1 Release Version 3.8.0",
      excerpt: "Product Release Version: 3.8.0 Release notes were published and last revised in April 2018. Updates in this release includes introduction...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 20
    });
    
  
    idx.add({
      title: "Q2 Release Version 3.9.0",
      excerpt: "Product Release Version: 3.9.0 Release notes were published and last revised in June 2018. Updates in this release includes New...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 21
    });
    
  
    idx.add({
      title: "Q3 Release Version 4.0.0",
      excerpt: "Product Release Version: 4.0.0 Release notes were published and last revised in October 2018. Updates in this release include New...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 22
    });
    
  
    idx.add({
      title: "Q4 Release Version 4.1.0",
      excerpt: "Product Release Version: 4.1.0 Release notes were published on January 2019 and last revised in December 2018. Updates in this...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 23
    });
    
  
    idx.add({
      title: "APPSeCONNECT 2018 Release",
      excerpt: "This section will give you detailed decsription of 2018 releases. Presently the enlisted sections under 2018 Release is given under...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 24
    });
    
  
    idx.add({
      title: "Overview of API Management",
      excerpt: "Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 25
    });
    
  
    idx.add({
      title: "Steps to Register URL",
      excerpt: "Steps to Register URL If you do not have a registered URL with APPSeCONNECT you have to Register a URL...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 26
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our API management system. Webhook API -...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 27
    });
    
  
    idx.add({
      title: "Steps to User Authentication",
      excerpt: "User Authentication is now done in the API Level to ensure Authenticated Approach when working with Proxy API, Swagger Documentation...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 28
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 29
    });
    
  
    idx.add({
      title: "Quickstart guides to create APIs",
      excerpt: "APPSeCONNECT API Management APPSeCONNECT being an API management platform allows to create, manage, deploy, maintain APIs for an organization such...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 30
    });
    
  
    idx.add({
      title: "Common Use Cases for API management",
      excerpt: "APIs are tje central to any application development process. As data forms an important part of any business it is...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 31
    });
    
  
    idx.add({
      title: "Getting Started",
      excerpt: "Every process requires static steps to begin with. APPSeCONNECT is a robust iPaaS product and users are advised to follow...",
      categories: ["Getting Started"],
      tags: ["developers"],
      id: 32
    });
    
  
    idx.add({
      title: "Overview of UseCase",
      excerpt: "Transformation signifies the execution and the communication of the business processes where information and values are passed from one attribute...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 33
    });
    
  
    idx.add({
      title: " Creating proxy endpoint",
      excerpt: "Proxies are the full REST (Representational State Transfer) services which allows to create proxy over a set of existing data...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 34
    });
    
  
    idx.add({
      title: "Creating Realtime API using Webhook",
      excerpt: "Webhooks are custom callbacks from an application which is generated by the caller and data is pushed to all of...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 35
    });
    
  
    idx.add({
      title: "Create Api Using Custom Datasource",
      excerpt: "title: “Create API to Connect On-premise Database” toc: true tag: developers APIs is required when you don’t have an existing...",
      categories: [],
      tags: [],
      id: 36
    });
    
  
    idx.add({
      title: "Overview of APPSeCONNECT",
      excerpt: "APPSeCONNECT is provider of both hybrid and cloud hosted applications which can connect two or more applications irrespective of ERP,...",
      categories: ["Getting Started"],
      tags: ["developers"],
      id: 37
    });
    
  
    idx.add({
      title: "Transformation",
      excerpt: "This document will help you to understand and work with the MAPPING and TRANSFORMATION functionality in APPSeCONNECT portal. Primarily transformation...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 38
    });
    
  
    idx.add({
      title: "Basics of Source-Destination Mapping",
      excerpt: "Mapping triggers the transformation process between the Source and the Destination Applications. Source and destination schemas are mapped in the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 39
    });
    
  
    idx.add({
      title: "Steps to define logic over destination mapping",
      excerpt: "Mapping Levels Mapping is done at various level of Input Packet. Refer here Mapping at Attribute Level The user/implementer can...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 40
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "Workflow is a visual representation of a business process integration, which helps you as an user to orchestrate a business...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 41
    });
    
  
    idx.add({
      title: "Overview of Workflows",
      excerpt: "Workflow is group of instructions to the integration service in APPSeCONNECT. APPSeCONNECT workflow application can be considered as a strong...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 42
    });
    
  
    idx.add({
      title: "Create Api Connecting To Api",
      excerpt: "\ntitle: “Create API proxy existing API”\ntoc: true\ntag: developers\n",
      categories: [],
      tags: [],
      id: 43
    });
    
  
    idx.add({
      title: "Terminology",
      excerpt: "Users of APPSeCONNECT requires the knowledge of common terminologies that the user can come across, while working with the integration...",
      categories: ["Getting Started"],
      tags: ["developers"],
      id: 44
    });
    
  
    idx.add({
      title: "Quickstart to Workflows",
      excerpt: "Workflows are the diagrammatic representation of a business process. As an organization, you can have a number of business processes...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 45
    });
    
  
    idx.add({
      title: "Steps to choose your workflow",
      excerpt: "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 46
    });
    
  
    idx.add({
      title: "Policy Overview",
      excerpt: "Policies are hooks to an API which you can punch at differnt levels of execution. They are powerful capabilities to...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 47
    });
    
  
    idx.add({
      title: "Throttling policy",
      excerpt: "Throttling policy prevents an API usage spikes on per API version basis, such that if the same API is getting...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 48
    });
    
  
    idx.add({
      title: "Create API to consume Webhooks",
      excerpt: "\n",
      categories: ["API-Management"],
      tags: ["developers","usecases"],
      id: 49
    });
    
  
    idx.add({
      title: "User Registration",
      excerpt: "Visitor’s Free Request Trial You can request a free trial version of APPSeCONNECT by visting the portal of APPSeCONNECT and...",
      categories: ["Getting Started"],
      tags: ["developers"],
      id: 50
    });
    
  
    idx.add({
      title: "Steps to create your first workflow",
      excerpt: "Introduction This section will guide you through workflow creation &amp; configuration in simple steps. By reading this section of the...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 51
    });
    
  
    idx.add({
      title: "Filter Request by IP policy",
      excerpt: "The IP Restrict Policy is used to restrict the access of an API Proxy by limiting the number of IP...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 52
    });
    
  
    idx.add({
      title: "Accessing Portal",
      excerpt: "Accessing Portal The APPSeCONNECT portal is the web based interface where you can access APPSeCONNECT application for integration, with the...",
      categories: ["Accessing Portal"],
      tags: ["developers"],
      id: 53
    });
    
  
    idx.add({
      title: "Nodes and Link overview",
      excerpt: "Workflow in APPSeCONNECT generates flow that executes integration endpoints one by one through our Micro-service architecture and updates business data...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 54
    });
    
  
    idx.add({
      title: "GET Node",
      excerpt: "What is Get Node? GET node is used for getting data from an application by using the API provided by...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 55
    });
    
  
    idx.add({
      title: "PROCESS Node",
      excerpt: "What is Process Node? PROCESS node is used for transforming data from one format to another format based on the...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 56
    });
    
  
    idx.add({
      title: "Attribute Mapping of workflow",
      excerpt: "For every integration between the application, the business logic is required. Mapping triggers the process between the source and the...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 57
    });
    
  
    idx.add({
      title: "Validate http headers policy",
      excerpt: "Validate HTTP Header policy inspects each HTTP Request whether the HTTP Request contains a particular Request Header and the corresponding...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 58
    });
    
  
    idx.add({
      title: "Working with Apps",
      excerpt: "This section gives the overall idea about choosing application, configuring connection, environment setup and execution of the sync process. Step...",
      categories: ["Getting Started"],
      tags: ["developers"],
      id: 59
    });
    
  
    idx.add({
      title: "POST Node",
      excerpt: "What is Post Node? POST node is used for pushing data to an application based on the API provided by...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 60
    });
    
  
    idx.add({
      title: "Scheduling, Deploying & Executing workflows",
      excerpt: "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 61
    });
    
  
    idx.add({
      title: "Compression Policy",
      excerpt: "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 62
    });
    
  
    idx.add({
      title: "Configuring Connectors",
      excerpt: "This section gives the overall idea about configuring connection, touchpoint creation, lookup addition, environment setup and execution of the sync...",
      categories: ["Getting Started"],
      tags: ["developers"],
      id: 63
    });
    
  
    idx.add({
      title: "FILTER Node",
      excerpt: "What is filter node? This node is used to fetch a subset of data from an original data packet based...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 64
    });
    
  
    idx.add({
      title: "Data-view process of workflow snapshot",
      excerpt: "Snapshot in Workflow gives complete overview of the transactions made through it. A transaction in workflow means an an unique...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 65
    });
    
  
    idx.add({
      title: "Resuming Workflows",
      excerpt: "Functionality of Resuming Workflows Executing the process is a vital part when integrating any applications. With APPSeCONNECT, integrations are done...",
      categories: ["Resuming Workflows"],
      tags: ["developers"],
      id: 66
    });
    
  
    idx.add({
      title: "Response content type conversion policy",
      excerpt: "Reponses Content type conversion policy is a type of outbound policy. It can be configured for the output format such...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 67
    });
    
  
    idx.add({
      title: "DELAY Node",
      excerpt: "What is Delay node? DELAY node is used to delay or stop an execution flow for a specific period. For...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 68
    });
    
  
    idx.add({
      title: "Debugging workflows",
      excerpt: "As workflow provides end to end business flow mapping, debugging and changing workflow mapping and links is often a business...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 69
    });
    
  
    idx.add({
      title: "Configuring APPSeCONNECT for API Hosting",
      excerpt: "APPSeCONNECT is a platform which allows hosting of APIs such that the hosted APIs could run independently. This section of...",
      categories: ["API-Management"],
      tags: ["developers","implementation"],
      id: 70
    });
    
  
    idx.add({
      title: "Decision Node",
      excerpt: "What is Decision Node? In Business, you may not have time for redundant data or data which is of no...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 71
    });
    
  
    idx.add({
      title: "Workflow Elements",
      excerpt: "Why do you need element? A Workflow is designed using elements that helps in integrating data graphically. Elements are generally...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 72
    });
    
  
    idx.add({
      title: "HALT/RESUME Node",
      excerpt: "What is halt-resume node HALT and RESUME nodes are used in a combination. We implement HALT node to halt the...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 73
    });
    
  
    idx.add({
      title: "Decision Node",
      excerpt: "What is Decision Node? This node is used for decision making during workflow execution. A decision can be applied on...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 74
    });
    
  
    idx.add({
      title: "Merger Node",
      excerpt: "What is Merger Node? This node is used to merge smaller data chunks into a single data packet. Like a...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 75
    });
    
  
    idx.add({
      title: "Sequencer Node",
      excerpt: "What is Sequencer Node? This node is used to order elements by a certain attribute. This node can be applied...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 76
    });
    
  
    idx.add({
      title: "Splitter Node",
      excerpt: "What is Splitter Node? This node is used to split a data packet into smaller chunks for processing in small...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 77
    });
    
  
    idx.add({
      title: "Choose Applications from catalog",
      excerpt: "API Proxies are API services which one can create to connect to a remote data source or multiple data sources....",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 78
    });
    
  
    idx.add({
      title: "Workflow Actions",
      excerpt: "Why do you need action? Workflow is capable of generating action by placing an action node directly on the workflow...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 79
    });
    
  
    idx.add({
      title: "Generating Support tickets",
      excerpt: "Support Ticket Notification Using this node user can create a support ticket during workflow execution. For example, after data is...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 80
    });
    
  
    idx.add({
      title: "Webhook callback",
      excerpt: "Webhook Callback Action The concept of a WebHook is simple. A webhook occurs when something happens; it is a simple...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 81
    });
    
  
    idx.add({
      title: "Storing Files",
      excerpt: "Storage Action Using this node user can store data in text file during workflow execution for future reference. Created file...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 82
    });
    
  
    idx.add({
      title: "Connecting an API to any data source",
      excerpt: "In today’s world,organizations are having multiple data sources.With distrubuted architechture in place,these data sources are existing independently and scatteredly.It can...",
      categories: ["API-Management"],
      tags: ["developers","implementation"],
      id: 83
    });
    
  
    idx.add({
      title: "Process Property",
      excerpt: "Why do you need process property? In APPSeCONNECT Workflow, users/implementers get the extra privilege to add special properties for better...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 84
    });
    
  
    idx.add({
      title: "Deploy and publish APIs to different environments",
      excerpt: "Deploying and publishing API is one of the primary concern after you have successfully configured an API on your API...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 85
    });
    
  
    idx.add({
      title: "Working with Loops",
      excerpt: "What is Loop Node? In APPSeCONNECT Workflow using a Self-loop, we can repeatedly execute an individual node without affecting the...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 86
    });
    
  
    idx.add({
      title: "Basic Workflow for Customer Downloading",
      excerpt: "Use Case Name Basic Workflow for Customer Downloading. Brief Description This is a basic workflow where the user can download...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 87
    });
    
  
    idx.add({
      title: "Common Use Cases for Workflow management",
      excerpt: "Workflow Use Cases for specific business scenario Workflow signifies the definition, execution, and automation of business processes where tasks and...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 88
    });
    
  
    idx.add({
      title: "Delay execution workflow",
      excerpt: "Use Case Name Workflow with delay execution filter Brief Description This workflow enables the user to configure a task and...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 89
    });
    
  
    idx.add({
      title: "Workflow creation & execution with splitter",
      excerpt: "Use Case Name Workflow showing task configuration with splitter rule Brief Description This workflow enables the user to add business...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 90
    });
    
  
    idx.add({
      title: "Workflow for adding sales order",
      excerpt: "Use Case Name Creating a Workflow for sales order Brief Description This is a workflow where the user can add...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 91
    });
    
  
    idx.add({
      title: " Workflow execution with data filteration",
      excerpt: "Use Case Name Workflow creation with data filteration Brief Description This workflow enables the user to add customer in Ecommerce...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 92
    });
    
  
    idx.add({
      title: "Workflow for product upload and stock sync",
      excerpt: "Use Case Name Workflow creation with Product upload and stock synchronization-post task scenario Brief Description This workflow enables the user...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 93
    });
    
  
    idx.add({
      title: " Workflow execution with acknowledgement data",
      excerpt: "Use Case Name Workflow showing task configuration with acknowledgement data Brief Description This workflow enables the user to add payment...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 94
    });
    
  
    idx.add({
      title: "Workflow showing salescycle with post and post task inputs",
      excerpt: "Use Case Name Workflow creation of sales cycle with post and post task inputs Brief Description This workflow enables the...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 95
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow A flow or...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 96
    });
    
  
    idx.add({
      title: "Functionality of Resuming Workflow",
      excerpt: "Use Case Name Basic Workflow Implementation for determining Resumable Workflow Brief Description This is a basic workflow implemented for the...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 97
    });
    
  
    idx.add({
      title: "Frequently asked questions",
      excerpt: "FAQ is the best way to address frequently asked questions about your business, of course. This section contains list of...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 98
    });
    
  
    idx.add({
      title: "Troubleshooting of Workflows",
      excerpt: "This topic describes common problems that can occur when you develop and test a workflow in AEC Portal. Given below...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 99
    });
    
  
    idx.add({
      title: "Frequently asked questions",
      excerpt: "FAQ is the best way to address frequently asked questions about your business. This section contains list of questions and...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 100
    });
    
  
    idx.add({
      title: "Create API to Quota Management Access Restriction",
      excerpt: "Use Case Name API to Quota Management Access Restriction Brief Description This is a api which the user can create...",
      categories: ["API-Management"],
      tags: ["developers","usecases"],
      id: 101
    });
    
  
    idx.add({
      title: "Create Swagger Documentation",
      excerpt: "Swagger is an Open Source Framework for the documentation of API. Swagger is a tools which enables you to generate,...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 102
    });
    
  
    idx.add({
      title: "Overview of Deployment",
      excerpt: "The APPSeCONNECT Platform either for cloud or on-premise integration is a fully integrated solution that enables organizations to design, develop,...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 103
    });
    
  
    idx.add({
      title: "Getting started with deployment",
      excerpt: "This section lets you get started with the deploying processes and components to an environment for APPSeCONNECT. APPSeCONNECT Components for...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 104
    });
    
  
    idx.add({
      title: "Deployment Configuration",
      excerpt: "APPSeCONNECT is of Hybrid Architecture and the data can be integrated both on the CLOUD PORTAL and in OP Agent....",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 105
    });
    
  
    idx.add({
      title: "Environment Overview",
      excerpt: "APPSeCONNECT platform enables you to create and manage multiple deployment environment for your application integration needs. As an user, you...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 106
    });
    
  
    idx.add({
      title: "Environment Management",
      excerpt: "Pre-requisites To visit the ENVIRONMENT page in portal, navigate to Deploy &gt; Environments. It is recommended that user should upgrade/install...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 107
    });
    
  
    idx.add({
      title: "Overview of Plugin",
      excerpt: "A plugin is any kind of an addon or an extension software component that adds a specific feature to an...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 108
    });
    
  
    idx.add({
      title: "Agent Blocking & Unblocking",
      excerpt: "APPSeCONNECT is of Hybrid Architecture and the data can be integrated both from the CLOUD PORTAL as well as from...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 109
    });
    
  
    idx.add({
      title: "HANA Plugin",
      excerpt: "Working with SAP HANA Database requires SAP HANA Plugin that needs to be installed in the agent. HANA Plugin is...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 110
    });
    
  
    idx.add({
      title: "MYSQL Plugin",
      excerpt: "Working with MySQL Database requires MySQL Plugin that needs to be installed in the agent. MySQL Plugin is now pre-packaged...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 111
    });
    
  
    idx.add({
      title: "Cors policy",
      excerpt: "Cross-Origin Resource Sharing (CORS) Policy is a mechanism which allows restriction to domain access. Domains configured by the User is...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 112
    });
    
  
    idx.add({
      title: "OLEDB Plugin",
      excerpt: "Plugin for AEC Database of Agent to Support any DBMS at client side/client server such that AEC can support databases...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 113
    });
    
  
    idx.add({
      title: "Overview of Application Connectors",
      excerpt: "An Application connectors are Pre-built optimized solution developed by APPSeCONNECT backend developer team and tested in real-life scenarios. If you...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 114
    });
    
  
    idx.add({
      title: "Priority",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Priority, such as...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 115
    });
    
  
    idx.add({
      title: "Shopify",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your choosen application is Shopify, such as...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 116
    });
    
  
    idx.add({
      title: "Overview of Custom Connectors",
      excerpt: "APPSeCONNECT requires connectivity to the application such that it can retrieve or send data to the application or data sources....",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 117
    });
    
  
    idx.add({
      title: "Overview of Connectors",
      excerpt: "AEC Connectors acts like a bridge to create connection between applications that connects different data sources both on-premise or in...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 118
    });
    
  
    idx.add({
      title: "Magento2",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your choosen application is Magento 2, providing...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 119
    });
    
  
    idx.add({
      title: "Prestashop",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Prestashop, credentials need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 120
    });
    
  
    idx.add({
      title: "Salesforce",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Salesforce, credentials need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 121
    });
    
  
    idx.add({
      title: "SAP Business One",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is SAP Business One,...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 122
    });
    
  
    idx.add({
      title: "Shipstation",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Shipstation, credentials need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 123
    });
    
  
    idx.add({
      title: "Overview of Technology Connectors",
      excerpt: "Connectors are part of the communication bridge that connects different data sources both on-premise or in cloud (exposed to WWW)...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 124
    });
    
  
    idx.add({
      title: "Overview of OLEDB Adapters",
      excerpt: "Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate and adapt with the AEC Portal....",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 125
    });
    
  
    idx.add({
      title: "Settings",
      excerpt: "Settings panel of AEC Agent enables to change the default settings after the initial setup and installation of the agent....",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 126
    });
    
  
    idx.add({
      title: "Prerequisite",
      excerpt: "Adapter represents an interface between an APP and APPSeCONNECT. An adapter is the most important component which connects your app...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 127
    });
    
  
    idx.add({
      title: "Adding Credentials",
      excerpt: "How to add credentials for Cloud Integration: Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 128
    });
    
  
    idx.add({
      title: "Troubleshooting",
      excerpt: "While executing the integration process on the OP Agent, you may face Techno-Functionality errors common to executing the agent. Given...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 129
    });
    
  
    idx.add({
      title: "Development Guidelines",
      excerpt: "Pascal Case and CamelCase Pascal Casing - First character of all words are Upper Case and other characters are lower...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 130
    });
    
  
    idx.add({
      title: "Using Filters for Integration",
      excerpt: "Users can define Filters for integration scenario as per business requirements for the GET, POST and PUT operation. This section...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 131
    });
    
  
    idx.add({
      title: "Version & Library Function Update",
      excerpt: "This section of the document provides you the full details of using Assembly Version Extraction and the process of uploading...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 132
    });
    
  
    idx.add({
      title: "Upgradation & Migration",
      excerpt: "With every update AEC Agent need upgradation to a higher version without losing any data in the agent. This upgradation...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 133
    });
    
  
    idx.add({
      title: "Best practices",
      excerpt: "Let us discuss some of the Do’s and Don’ts that one need to maintain while developing an Adapter in APPSeCONNECT...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 134
    });
    
  
    idx.add({
      title: "Postrequisites",
      excerpt: "An admin or an end-user can upload updated adapter to an existing app such that the adapter can be changed...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 135
    });
    
  
    idx.add({
      title: "Upgrading and Re-versioning",
      excerpt: "APPSeCONNECT Component Version Pattern contains four numbers, which convey the following information: Pattern- (1st-Number).(2nd-Number).(3rd-Number).(4th-Number) From left to right the numbers...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 136
    });
    
  
    idx.add({
      title: "Deploying",
      excerpt: "Environment section of APPSeCONNECT allows the user to deploy configurations and adapters. In case of APPSeCONNECT, you will automatically get...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 137
    });
    
  
    idx.add({
      title: "Using parameters to an API",
      excerpt: "This Document provides the details and the functionality aspect of the API components to define static and dynamic criterias for...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 138
    });
    
  
    idx.add({
      title: "Simple Product Add NAV to Mage2 Multiconnection",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will enable the users understand how the...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 139
    });
    
  
    idx.add({
      title: "Simple Product Update Nav-Mage2 MultiConnection",
      excerpt: "Executing the process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 140
    });
    
  
    idx.add({
      title: "Uniconta",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Uniconta credentials need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 141
    });
    
  
    idx.add({
      title: "ZohoCRM V2.0",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is ZohoCRMV2 credentials need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 142
    });
    
  
    idx.add({
      title: "Grouping of Conditions",
      excerpt: "What is Grouping of Conditions Mapping can have multiple condition that are interlinked or grouped. Scenario might require more than...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 143
    });
    
  
    idx.add({
      title: "Adding Product in Priority",
      excerpt: "Prerequisites for adding products: You need a valid Priority Account. Steps to Add Products in Priority: Login to the Priority...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 144
    });
    
  
    idx.add({
      title: "Updating Inventory in Priority",
      excerpt: "Prerequisites for Updating Inventory Need to have a valid Priority Account. Need to have the product registered before updating the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 145
    });
    
  
    idx.add({
      title: "Adding Product in Sage300",
      excerpt: "Prerequisites for adding Product/Items in SAGE 300 Need to have a valid SAGE 300 account. Steps to Add Product/Items in...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 146
    });
    
  
    idx.add({
      title: "Updating Inventory in Sage300",
      excerpt: "Prerequisites for Updating Inventory in SAGE300 Need a valid SAGE 300 account. Need the server access to SAGE 300. Need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 147
    });
    
  
    idx.add({
      title: "Adding Account in Zoho",
      excerpt: "Prerequisites Need to have a valid ZOHO CRM account. Steps to add new Customer/Accounts in Priority Login to the ZOHO...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 148
    });
    
  
    idx.add({
      title: "Troubleshooting",
      excerpt: "Prerequisites for Intergration Scenarios View the Generated Packet to know where the error occurred (GET or PROCESS or POST). View...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 149
    });
    
  
    idx.add({
      title: "Getting Started",
      excerpt: "Getting started section of the mapping will help you to understand the main areas you should be familiar with before...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 150
    });
    
  
    idx.add({
      title: "Types of Mapping",
      excerpt: "APPSeCONNECT Mapping Types are given below: 1. Hard Coded Mapping - Hardcoded mapping is implemented when it is required that...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 151
    });
    
  
    idx.add({
      title: "Types of Variable",
      excerpt: "Working with Variables in APPSeCONNECT To facilitate touchpoint mapping, variables stores the data that can be used later in the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 152
    });
    
  
    idx.add({
      title: "Understanding Attribute Mapping",
      excerpt: "Behind every application integration, there is a business logic. APPSeCONNECT stores this integration logic in the form of data. Attribute...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 153
    });
    
  
    idx.add({
      title: "Understanding XML and Xpath",
      excerpt: "Understanding XML XML stands for eXtensible Markup Language. XML was designed to store and transport data. It is a textual...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 154
    });
    
  
    idx.add({
      title: "Understanding Components of Mapping",
      excerpt: "Mapping triggers the transformation process between the Source and the Destination Applications. Source and destination schemas are mapped in the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 155
    });
    
  
    idx.add({
      title: "Steps to Customize Prebuilt Mapping/Attribute mapping",
      excerpt: "The data coming from the source schema requires to be transformed individually such that it matches the format of the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 156
    });
    
  
    idx.add({
      title: "Understanding Touchpoint Dependencies",
      excerpt: "Use Case Name Touchpoint Dependency Brief Description Touchpoints are the point of action which when triggered transfers informations between the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 157
    });
    
  
    idx.add({
      title: "Understanding Mapping & Syntax",
      excerpt: "APPSeCONNECT has its own set of vocabulary or syntax, functions that help its users to customize the pre-defined touchpoints as...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 158
    });
    
  
    idx.add({
      title: "Advance Mapping through Custom Renderer",
      excerpt: "Use Case Name Advanced Mapping Through Renderer Brief Description This feature enables the user to alter the default XML structure...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 159
    });
    
  
    idx.add({
      title: "Mapping from Schema 1 to Schema 2",
      excerpt: "Use-Case Name Attribute Mapping with Schema 1 (OLEDB Technology APP) and Schema 2 (REST Application - Magento 2) Brief Description...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 160
    });
    
  
    idx.add({
      title: "Defining and Mapping Variables with Functions",
      excerpt: "Here you will understand the process of defining Variables (any variables that stores the data that can be used later...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 161
    });
    
  
    idx.add({
      title: "Enabling Tracking data in Transformation",
      excerpt: "Use Case Name Enabling Tracking in transformation. Brief Description Tracking is a feature in APPSeCONNECT which lets the user view...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 162
    });
    
  
    idx.add({
      title: "Implementing Xpath in Mapping",
      excerpt: "Use Case Name Handling XPATH in Mapping Brief Description XPATH is an essential concept that is required when implementing mapping...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 163
    });
    
  
    idx.add({
      title: "Using Lookups Mapping for Value Interchange",
      excerpt: "Use Case Name Using Lookups Mapping for Value Interchange Brief Description Lookups Mapping is a feature in APPSeCONNECT which enables...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 164
    });
    
  
    idx.add({
      title: "Handling Dependent data",
      excerpt: "Data dependency is a concept which requires the data which are mutually dependent on one another to be kept in...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 165
    });
    
  
    idx.add({
      title: "Handling Incremental data",
      excerpt: "This is a very common scenario where syncing records incrementally in one direction between two applications, occurs. An incremental (or...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 166
    });
    
  
    idx.add({
      title: "Using library methods/AppResource Function",
      excerpt: "Appresource Functions are the functions in APPSeCONNECT that are written in the adapter (APPSeCONNECT supports calling external functions written in...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 167
    });
    
  
    idx.add({
      title: "Using Tips & Tricks",
      excerpt: "Transformation is one vital concept when it comes to integrating applications. Errors can make the Integration process go wrong and...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 168
    });
    
  
    idx.add({
      title: "Working with Schema, Action & Filter",
      excerpt: "Knowing Schema, Actions &amp; Filters The user can view the schemas and the action present or can also add schema...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 169
    });
    
  
    idx.add({
      title: "Sage300",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is SAGE 300, credentials...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 170
    });
    
  
    idx.add({
      title: "Uploading Plugins or Extensions",
      excerpt: "Integrating with WooCommerce, requires an APPSeCONNECT Plugin/Extension to be uploaded and installed in the WooCommerce Website. This document demonstrates as...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 171
    });
    
  
    idx.add({
      title: "WooCommerce",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is WooCommerce, credentials need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 172
    });
    
  
    idx.add({
      title: "Adding Employee in BambooHR",
      excerpt: "Prerequisites Need to have a valid account in BambooHR Steps to add a new employee in BambooHR Login to the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 173
    });
    
  
    idx.add({
      title: "BambooHR",
      excerpt: "Application configuration is an essential activity before starting the process of integration. If your choosen application is Bamboo HR, such...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 174
    });
    
  
    idx.add({
      title: "Dynamics NAV",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Microsoft Dynamics Business...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 175
    });
    
  
    idx.add({
      title: "Generic NAV 2009R2 Extension",
      excerpt: "Here you will get the step by step process to use NAV 2009R2 Extension as and when required in the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 176
    });
    
  
    idx.add({
      title: "Generic NAV 2015 Extension",
      excerpt: "Here you will get the step by step process to use NAV 2015 Extension as and when required in the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 177
    });
    
  
    idx.add({
      title: "Generic NAV 2016 Extension",
      excerpt: "Here you will get the step by step process to use NAV 2016 Extension as and when required in the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 178
    });
    
  
    idx.add({
      title: "Generic NAV 2017 MultiConnection Extension",
      excerpt: "Here you will get the step by step process to use NAV 2017 Extension as and when required in the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 179
    });
    
  
    idx.add({
      title: "Simple Product Add Mage2 Multi to Nav",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 180
    });
    
  
    idx.add({
      title: "Rule",
      excerpt: "If the user wants to perform some ACTIONS based on the type of events encountered during agent execution such as...",
      categories: ["Rule"],
      tags: ["developers"],
      id: 181
    });
    
  
    idx.add({
      title: "Choosing & Activating Rule",
      excerpt: "Rules are specialized tokens that are initiated to track and record the error events developed while executing the Sync Process....",
      categories: ["Rule"],
      tags: ["developers"],
      id: 182
    });
    
  
    idx.add({
      title: "Overview of Pre-Configured Rule",
      excerpt: "Pre-configured rules are the rules that comes pre-packaged with your Account. Users/Implementers needs to choose the pre-configured rules from the...",
      categories: ["Rule"],
      tags: ["developers"],
      id: 183
    });
    
  
    idx.add({
      title: "Overview of Integration",
      excerpt: "APPSeCONNECT provides a single integration platform through which one can connect various Business Applications like ERP system, CRM, Accounting Applications,...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 184
    });
    
  
    idx.add({
      title: "Configurable Product Add Nav-Mage2 Multiconnection",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 185
    });
    
  
    idx.add({
      title: "SAPB1-Magento2",
      excerpt: "This section of the document will given you an overview of SAP B1- Magento 2 Integration and the subsequent chapters...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 186
    });
    
  
    idx.add({
      title: "Business Partner Add",
      excerpt: "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 187
    });
    
  
    idx.add({
      title: "Inventory Update",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 188
    });
    
  
    idx.add({
      title: "Order Add",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 189
    });
    
  
    idx.add({
      title: "Product Add",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 190
    });
    
  
    idx.add({
      title: "Invoice Add",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 191
    });
    
  
    idx.add({
      title: "SAPB1 On-Premise Add-on 3.1.x Installation OR Upgrade",
      excerpt: "This article explains the add­on setup procedure in SAP B1 to facilitate SAP B1 integration with other applications using APPSeCONNECT....",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 192
    });
    
  
    idx.add({
      title: "Configurable Product Update Nav-Magento2 MultiConnection",
      excerpt: "Executing the process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 193
    });
    
  
    idx.add({
      title: "Q1 Release Version 4.2.0",
      excerpt: "Product Release Version: 4.2.0 Release notes were published and last revised in March 2019. Updates in this release includes introduction...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 194
    });
    
  
    idx.add({
      title: "Q2 Release Version 4.3.0",
      excerpt: "Product Release Version: 4.3.0 Release notes were published and last revised in June 2019. Updates in this release includes New...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 195
    });
    
  
    idx.add({
      title: "Q3 Release Version 4.4.0",
      excerpt: "Product Release Version: 4.4.0 Release notes were published and last revised in September 2019. Updates in this release includes New...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 196
    });
    
  
    idx.add({
      title: "Q4 Release Version 4.5.0",
      excerpt: "Product Release Version: 4.5.0 Release notes were published and last revised in January 2020. Updates in this release include New...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 197
    });
    
  
    idx.add({
      title: "Customer Add Magento2-NAV Multiconnection",
      excerpt: "Executing the Process is a vital part when integrating any applications. This document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 198
    });
    
  
    idx.add({
      title: "Customer Add NAV-Magento2 Multiconnection",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 199
    });
    
  
    idx.add({
      title: "Pre-Configured Rule for Detailed Sync Report",
      excerpt: "Scenario Workflows are scheduled for it to run as per the requirement. Workflows can either have the result as Success...",
      categories: ["Rule"],
      tags: ["developers"],
      id: 200
    });
    
  
    idx.add({
      title: "Default Rule for Morning Report",
      excerpt: "Requirement of the Rule APPSeCONNECT Morning Report updates the users about the data synchronization status for each connection, on daily...",
      categories: ["Rule"],
      tags: ["developers"],
      id: 201
    });
    
  
    idx.add({
      title: "Overview of Default Rule",
      excerpt: "Default rules are the rules that are predefined on APPSeCONNECT. User/Implementers cannot choose these rules and will not get any...",
      categories: ["Rule"],
      tags: ["developers"],
      id: 202
    });
    
  
    idx.add({
      title: "Contact Person Add NAV to Magento 2(Multiconnection)",
      excerpt: "Executing the process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 203
    });
    
  
    idx.add({
      title: "Contact Person Add/ Update Mage2 multistore to NAV",
      excerpt: "Executing the process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 204
    });
    
  
    idx.add({
      title: "Inventory Update NAV-Mage2 Multiconnection",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 205
    });
    
  
    idx.add({
      title: "Add Invoice NAV-Mage2 Multiconnection",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 206
    });
    
  
    idx.add({
      title: "NAV-Magento 2 Multiple Connection",
      excerpt: "This section of the document will given you an overview of NAV- Magento2 Mutliple Connection Integration and the subsequent chapters...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 207
    });
    
  
    idx.add({
      title: "Add Sales Order Magento2 Multiconnection-NAV",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 208
    });
    
  
    idx.add({
      title: "Add Shipment NAV-Mage2 MultiConnection",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 209
    });
    
  
    idx.add({
      title: "APPSeCONNECT 2019 Release",
      excerpt: "This section will give you detailed description of 2019 releases. Presently the enlisted sections under 2019 Release is given under...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 210
    });
    
  
    idx.add({
      title: "APPSeCONNECT 2020 Release",
      excerpt: "This section will give you detailed description of 2019 releases. Presently the enlisted sections under 2020 Release is given under...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 211
    });
    
  
    idx.add({
      title: "Authentication & Authorization of REST Adapters",
      excerpt: "APPSeCONNECT REST Adapter provides a detailed way for consuming external RESTful APIs including secure APIs. COMMUNICATION BETWEEN CLIENT AND SERVER...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 212
    });
    
  
    idx.add({
      title: "Basic Authentication ",
      excerpt: "Process to Configure Basic Authentication in Rest Adapter - On Premise To configure the Basic Authentication Type for Rest Adapter...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 213
    });
    
  
    idx.add({
      title: "OAuth1.0 Authentication",
      excerpt: "Prerequisites for configuring Oauth 1.0 in On Premise Agent You need to have a valid credentials to the portal. You...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 214
    });
    
  
    idx.add({
      title: "OAuth2.0 Authentication",
      excerpt: "Process to Configure OAuth2.0 Rest Adapter - On Premise To configure the OAuth2.0 Authentication type for Rest Adapter follow the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 215
    });
    
  
    idx.add({
      title: "Overview of Rest Adapters",
      excerpt: "HTTP based endpoint connector is a pre-packaged software package which provides seamless connectivity to RESTful APIs and leverage to communicate...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 216
    });
    
  
    idx.add({
      title: "Using Filters for Integration",
      excerpt: "Users can define Filters for integration scenario as per business requirements for the GET, POST and PUT operation for REST...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 217
    });
    
  
    idx.add({
      title: "Mapping and Transformation",
      excerpt: "Given below is the mapping details for Rest Adapter required for data Integration. Basic prerequisite for Mapping: (A) Here the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 218
    });
    
  
    idx.add({
      title: " Listing of Advance Workflow",
      excerpt: "Listing of Advance Workflow section provides the option of creating folders for organizing the advance workflows with respect to the...",
      categories: ["Advance Workflow"],
      tags: ["developers"],
      id: 219
    });
    
  
    idx.add({
      title: "Designing & Executing Advance Workflow",
      excerpt: "This section provides the functionality to implement your business scenario by designing the workflow. On clicking the Create Workflow button...",
      categories: ["Advance Workflow"],
      tags: ["developers"],
      id: 220
    });
    
  
    idx.add({
      title: "Deploying Advance Workflow",
      excerpt: "Created/Edited Advanced workflows needs to be deployed to the environment in order to execute the integration process. Users of APPSeCONNECT,...",
      categories: ["Advance Workflow"],
      tags: ["developers"],
      id: 221
    });
    
  
    idx.add({
      title: "Saving & Restoring Revised Advance Workflow",
      excerpt: "Users/Implementers of APPSeCONNECT requires to edit and modify workflows frequently as per the business requirement. Advance Workflows is enabled with...",
      categories: ["Advance Workflow"],
      tags: ["developers"],
      id: 222
    });
    
  
    idx.add({
      title: "Working with Decision Node",
      excerpt: "What is Decision Node Significance of Decision Node is implemented when fetching or synchronising data based on certain criteria or...",
      categories: ["Advance Workflow"],
      tags: ["developers"],
      id: 223
    });
    
  
    idx.add({
      title: "Working with Delay Node",
      excerpt: "What is Delay Node DELAY node is used to delay or stop an execution flow for a specific period (in...",
      categories: ["Advance Workflow"],
      tags: ["developers"],
      id: 224
    });
    
  
    idx.add({
      title: "Troubleshooting for Rest",
      excerpt: "Troubleshooting Scenario 1 Even after updating subscription, Update Configuration and Update adapters, credential page for the respective app shows exhausted....",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 225
    });
    
  
    idx.add({
      title: "Security",
      excerpt: "APPSeCONNECT platform accomplishes the integration of your most serious business information and business processes with the utmost security. The application...",
      categories: ["Security"],
      tags: ["developers"],
      id: 226
    });
    
  
    idx.add({
      title: "Global Data Protection Regulations",
      excerpt: "The list of GDPR (Global Data Protection Regulations) policies is given below which our product imparts to the user for...",
      categories: ["GDPR"],
      tags: ["developers"],
      id: 227
    });
    
  
    idx.add({
      title: "Overview of ProcessFlow",
      excerpt: "APPSeCONNECT processflows suite features an extensive interface that provide the ability to easily create digital maps to make out robust...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 228
    });
    
  
    idx.add({
      title: "Quickstart to Designing processflow",
      excerpt: "Processflows are the diagrammatic representation of a business process. As an organization, you can have a number of business processes...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 229
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "Processflow is a visual representation of a business process integration, which helps you as an user to orchestrate a business...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 230
    });
    
  
    idx.add({
      title: "Important Terminology",
      excerpt: "This document demonstrates the important terminologies that you need to consider while using ProcessFlows ProcessFlow Folder It is one the...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 231
    });
    
  
    idx.add({
      title: "Designer",
      excerpt: "This section enables the user to implement business scenarios by designing processflows. Here user would get the detailed usability of...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 232
    });
    
  
    idx.add({
      title: "Organising ProcessFlow",
      excerpt: "This section provides the option of creating folders for organizing the ProcessFlows with respect to the business requirements for any...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 233
    });
    
  
    idx.add({
      title: "Steps to Create a ProcessFlow",
      excerpt: "This section of the documentation will guide the user with the process of Creating &amp; Saving new processflows. The steps...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 234
    });
    
  
    idx.add({
      title: "Generating Temporary License for Organization",
      excerpt: "Partners &amp; Developers or any other user (except the client) can now, no longer be able to login into the...",
      categories: ["License Management"],
      tags: ["developers"],
      id: 235
    });
    
  
    idx.add({
      title: "License Management",
      excerpt: "License key-based authentication approach is security enhancement for your on-premise and cloud integrations. This mechanism authenticates users who tries to...",
      categories: ["License Management"],
      tags: ["developers"],
      id: 236
    });
    
  
    idx.add({
      title: "Deploy, Execute & Undeploy",
      excerpt: "Created or Edited processflows needs to be deployed to the environment in order to execute the integration process. Users, now...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 237
    });
    
  
    idx.add({
      title: "Redeploy",
      excerpt: "Redeploying processflow functionality allows you to re-deploy an existing processflows (deployed/deployed and executed) to the same environment in order to...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 238
    });
    
  
    idx.add({
      title: "Sync Info & Retry",
      excerpt: "Execution of a processflow is vital process for transforming data from source to destination application. In real-time, execution of processflow...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 239
    });
    
  
    idx.add({
      title: "Data view of Snapshot",
      excerpt: "Snapshot in processflow gives complete overview of the transactions that was executed. A transaction in processflow defines an execution of...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 240
    });
    
  
    idx.add({
      title: "Export and Import Lookup",
      excerpt: "Repositories in APPSeCONNECT provides the user to create and manage Lookup types in form of tables for the organisation. As...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 241
    });
    
  
    idx.add({
      title: "Delete Processflow",
      excerpt: "Deleting option enables you to delete a processflow once you have designed it, deployed it or executed it. Deletion is...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 242
    });
    
  
    idx.add({
      title: "Lookup in Processflow Mapping",
      excerpt: "Once the Collection and the Reference tables are created, users can implement those lookups in the attribute mapping for the...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 243
    });
    
  
    idx.add({
      title: "Creating Lookup Repository Masterdata",
      excerpt: "Repositories in APPSeCONNECT provides the user to create and manage Lookup types in form of tables for the organisation. Lookups...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 244
    });
    
  
    idx.add({
      title: "Steps to Define logic over Destination Mapping",
      excerpt: "Mapping in APPSeCONNECT is done so that a Source Application can communicate with the Destination Application. APPSeCONNECT, introduces a new...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 245
    });
    
  
    idx.add({
      title: "Attribute Mapping of Processflows",
      excerpt: "The data coming from the source schema requires to be transformed individually such that it matches the format of the...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 246
    });
    
  
    idx.add({
      title: "Defining variables in Mapping",
      excerpt: "Here you will understand the process of defining Variables (any variables that stores the data that can be used later...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 247
    });
    
  
    idx.add({
      title: "Implementing Xpath in Mapping",
      excerpt: "XPATH is an essential concept that is required when implementing mapping and transformations. XPATH access nodes in a hierarchical structure...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 248
    });
    
  
    idx.add({
      title: "Defining & Implementing Namespace",
      excerpt: "Namespace is a technique that defines a set of unique names within an XML file, consisting of several XML elements...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 249
    });
    
  
    idx.add({
      title: "Advance Mapping through Custom Renderer",
      excerpt: "Renderer enables the user to alter the default XML structure which and when required through rendering. In case of Complex...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 250
    });
    
  
    idx.add({
      title: "Pre-Configured Rule of Mail Notification of Errors",
      excerpt: "Scenario Integrations are scheduled to run automatically and for users its effecient to send reports for scheduled process that either...",
      categories: ["Rule"],
      tags: ["developers"],
      id: 251
    });
    
  
    idx.add({
      title: "Lightspeed",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Salesforce, credentials need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 252
    });
    
  
    idx.add({
      title: "Nodes and Link overview",
      excerpt: "Given below is the list of elements you will be able to use in APPSeCONNECT processflow. You can use the...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 253
    });
    
  
    idx.add({
      title: "Working with Mapper",
      excerpt: "When working with Process Flows, it is essential to map the attributes and the entities of both source and destination...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 254
    });
    
  
    idx.add({
      title: "Processflow APP",
      excerpt: "Why do you need APPS? For transforming data from one application to another you need to drag Application nodes to...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 255
    });
    
  
    idx.add({
      title: "Working with GET",
      excerpt: "What is Get Node? GET node is used for getting data from an application by using their API Endpoints provided...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 256
    });
    
  
    idx.add({
      title: "Working with POST",
      excerpt: "What is POST Node? POST node is used for pushing transformed data to the destination application by using API Endpoints...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 257
    });
    
  
    idx.add({
      title: "Cloud Appresource Functions",
      excerpt: "Appresource Functions are the functions in APPSeCONNECT that are written in the adapter which is used for the data transformation...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 258
    });
    
  
    idx.add({
      title: "APPSeCONNECT 2021 Release",
      excerpt: "This section will give you detailed description of 2021 releases. Presently the enlisted sections under 2021 Release is given under...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 259
    });
    
  
    idx.add({
      title: "Splitter Node",
      excerpt: "What is Splitter Node? This node is used to split a data packet into smaller chunks for processing in small...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 260
    });
    
  
    idx.add({
      title: "Selfloop",
      excerpt: "What is Loop node In APPSeCONNECT Processflow using a Self-loop, we can repeatedly execute an individual node without affecting the...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 261
    });
    
  
    idx.add({
      title: "Sage300-Magento2 B2C",
      excerpt: "This section of the document will given you an overview of SAGE 300 - Magento 2 Integration and the subsequent...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 262
    });
    
  
    idx.add({
      title: "Shopify-Sage300",
      excerpt: "This section of the document will given you an overview of SAGE 300 - Shopify Integration and the subsequent chapters...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 263
    });
    
  
    idx.add({
      title: "Customer Add from Magento2 to SAGE 300",
      excerpt: "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 264
    });
    
  
    idx.add({
      title: "Customer Add from Shopify to SAGE 300",
      excerpt: "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration/Sage-Shopify"],
      tags: ["developers"],
      id: 265
    });
    
  
    idx.add({
      title: "Customer Update from Shopify to SAGE 300",
      excerpt: "Executing the Process is a vital part when integrating any applications. This document will let the users integrate updated customers...",
      categories: ["Integration/Sage-Shopify"],
      tags: ["developers"],
      id: 266
    });
    
  
    idx.add({
      title: "Customer Update from Magento2 to SAGE300",
      excerpt: "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 267
    });
    
  
    idx.add({
      title: "I/C Product Add from SAGE300 to Magento2",
      excerpt: "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 268
    });
    
  
    idx.add({
      title: "I/C Product Add from SAGE 300 to Shopify",
      excerpt: "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration/Sage-Shopify"],
      tags: ["developers"],
      id: 269
    });
    
  
    idx.add({
      title: "I/C Inventory Update from SAGE 300 to Magento2",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 270
    });
    
  
    idx.add({
      title: "I/C Inventory Update from SAGE 300 to Shopify",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration/Sage-Shopify"],
      tags: ["developers"],
      id: 271
    });
    
  
    idx.add({
      title: "Sales Order Add from Shopify to SAGE 300",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration/Sage-Shopify"],
      tags: ["developers"],
      id: 272
    });
    
  
    idx.add({
      title: "Sales Order Add from Magento 2 to SAGE 300",
      excerpt: "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 273
    });
    
  
    idx.add({
      title: "Shipment Add from SAGE 300 to Shopify",
      excerpt: "Configuring and Executing the workflow for integration requires multiples steps to perform. This section of the document will let the...",
      categories: ["Integration/Sage-Shopify"],
      tags: ["developers"],
      id: 274
    });
    
  
    idx.add({
      title: "Invoice  Add from SAGE 300 to Magento2",
      excerpt: "Executing the process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 275
    });
    
  
    idx.add({
      title: "Shipment Add from SAGE 300 to Magento2",
      excerpt: "Executing the process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 276
    });
    
  
    idx.add({
      title: "Q1 Release Version 1.0.0-1.3.0",
      excerpt: "During this phase we were working on features and mainly on stability of the product. We have just launched into...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 277
    });
    
  
    idx.add({
      title: "Q2 Release Version 1.4.0",
      excerpt: "Product Release Version: 1.4.0 In this release we wanted to make APPSeCONNECT smooth and provide a stable release of the...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 278
    });
    
  
    idx.add({
      title: "Q3 Release Version 2.0.0",
      excerpt: "Product Release Version: 2.0.0 This is a major release of APPSeCONNECT where we have fixed our APPSeCONNECT SDK and released...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 279
    });
    
  
    idx.add({
      title: "Q4 Release Version 2.1.0",
      excerpt: "Product Release Version: 2.1.0 This release focusses mainly on removing bugs from the product and enhancing the already existing components...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 280
    });
    
  
    idx.add({
      title: "Q1 Release Version 4.6.0",
      excerpt: "Product Release Version: 4.6.0 Release notes were published and last revised in May 2020. Updates in this release include New...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 281
    });
    
  
    idx.add({
      title: "Protocol Implementation for Applications",
      excerpt: "Applications are built with protocols for making them communicate with network resources and other applications. Application like SAP Business One...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 282
    });
    
  
    idx.add({
      title: "Release Notes",
      excerpt: "Discover whats going on in APPSeCONNECT. Explore the most recent features and updates and learn more about the product enhancements,...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 283
    });
    
  
    idx.add({
      title: "2020-Q2 Version 1.0 Hotfix Release Note",
      excerpt: "This document highlights the details of hotfix(s) done for the 2020 Q2 Release. This hotfix release introduces few minor improvements...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 284
    });
    
  
    idx.add({
      title: "2020-Q2 Version 2.0 Hotfix Release Note",
      excerpt: "This document highlights the details of V2.0 hotfix(s) done for the 2020 Q2 Release. This hotfix release introduces few minor...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 285
    });
    
  
    idx.add({
      title: "Q2 Release Version 4.7.0",
      excerpt: "Product Release Version: 4.7.0 Release notes were published and last revised in July 2020. Updates in this release include New...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 286
    });
    
  
    idx.add({
      title: "Managing - Schema & Attributes",
      excerpt: "The user can view the schemas present in an app and can also add schema and import schemas and attributes...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 287
    });
    
  
    idx.add({
      title: "Working with Capture Variables",
      excerpt: "APPSeCONNECT processflow allows you to create variables that captures certain values that can be reused in any part of the...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 288
    });
    
  
    idx.add({
      title: "Delay Node",
      excerpt: "What is Delay node? API request may have a limitation of accepting one request per second. So for implementing GET...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 289
    });
    
  
    idx.add({
      title: "Technology App creation Within processflow",
      excerpt: "Processflow is the advanced sync flow feature that will enable you sync node specific data from an application to multiple...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 290
    });
    
  
    idx.add({
      title: "APPSeCONNECT 2014 Release Notes",
      excerpt: "This section will give you detailed decsription of 2014 releases. Product Release Version: 2.1.0 Product Release Version: 2.0.0 Product Release...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 291
    });
    
  
    idx.add({
      title: "APPSeCONNECT 2015 Release Notes",
      excerpt: "This section will give you detailed decsription of 2015 releases. Product Release Version: 2.5.0 Product Release Version: 2.4.0 Product Release...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 292
    });
    
  
    idx.add({
      title: " APPSeCONNECT 2016 Release",
      excerpt: "This section will give you detailed decsription of 2016 releases. Product Release Version: 3.3.0 Product Release Version: 3.2.0 Product Release...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 293
    });
    
  
    idx.add({
      title: "Link Order Sequencing",
      excerpt: "Link Ordering of Nodes for Sequential Execution processflow being the advanced sync flow feature of APPSeCONNECT, allows you to create...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 294
    });
    
  
    idx.add({
      title: "Q1 Release Version 3.0.0",
      excerpt: "Product Release Version: 3.0.0 Release notes were published and last revised in April 2016. We started the new year with...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 295
    });
    
  
    idx.add({
      title: "Q2 Release Version 3.1.0",
      excerpt: "Product Release Version: 3.1.0 As per our schedule, we are trying to continuously improve our platform with newer features. We...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 296
    });
    
  
    idx.add({
      title: "Q3 Release Version 3.2.0",
      excerpt: "Product Release Version: 3.2.0 APPSeCONNECT being the only integration platform to support end to end business process provider, we are...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 297
    });
    
  
    idx.add({
      title: "Q4 Release Version 3.3.0",
      excerpt: "Product Release Version: 3.3.0 APPSeCONNECT focusses on delivering more and more flexibility, power and ease to its users. We try...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 298
    });
    
  
    idx.add({
      title: "Managing - Action, Action Filters & Error Filters",
      excerpt: "Actions are certain tasks like getting data from an application or sending data to an application based on specific API...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 299
    });
    
  
    idx.add({
      title: "Q1 Release Version 2.2.0",
      excerpt: "Product Release Version: 2.2.0 During the first quarter of 2015 product cycle, we wanted to give you some interesting features....",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 300
    });
    
  
    idx.add({
      title: "Q2 Release Version 2.3.0",
      excerpt: "Product Release Version: 2.3.0 This release mainly focusses on providing a number of new features which our users thought to...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 301
    });
    
  
    idx.add({
      title: "Q3 Release Version 2.4.0",
      excerpt: "Product Release Version: 2.4.0 This release mainly focusses on enhancing the APPSeCONNECT usage by providing more automation from base and...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 302
    });
    
  
    idx.add({
      title: "Q4 Release Version 2.5.0",
      excerpt: "Product Release Version: 2.5.0 Bug bash release focusses mainly on removing bugs from the product and enhancing the already existing...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 303
    });
    
  
    idx.add({
      title: "Processflow Packaging",
      excerpt: "Processflow Packaging is a concept of zipping multiple ProcessFlows or Processflow folders from one organisation to another. Processflow being the...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 304
    });
    
  
    idx.add({
      title: "Viewing, Installing & Re-Installing processflow Packages",
      excerpt: "Once you are shared with packages from other organisation, you need to install the packages before working with the Processflows...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 305
    });
    
  
    idx.add({
      title: "Package Sharing",
      excerpt: "Packaging of processflows have enabled the users to zip multiple processflows. The main goal to create packages was to share...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 306
    });
    
  
    idx.add({
      title: "APPSeCONNECT Glossary",
      excerpt: "APPSeCONNECT APPSeCONNECT is an Integration Platform through which one can connect Enterprise Business Applications, like Back Office ERP systems (SAP...",
      categories: ["Glossary"],
      tags: ["developers"],
      id: 307
    });
    
  
    idx.add({
      title: "Glossary",
      excerpt: "Here you will view the list of Glossary which is enlisted in the section. Read our full glossary to learn...",
      categories: ["Glossary"],
      tags: ["developers"],
      id: 308
    });
    
  
    idx.add({
      title: "Company Add from Magento2 to SAGE 300",
      excerpt: "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
      categories: ["Integration"],
      tags: ["developers"],
      id: 309
    });
    
  
    idx.add({
      title: "ZohoBooks",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Zohobooks credentials need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 310
    });
    
  
    idx.add({
      title: "Packaging Overview",
      excerpt: "Zipping up of multiple files in packages makes it easy to reuse and share with different users. Huge set of...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 311
    });
    
  
    idx.add({
      title: "Merger Node",
      excerpt: "What is Merger Node? Merger Node integrates data documents into a single data packet, in order to avoid multiple hits...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 312
    });
    
  
    idx.add({
      title: "Unfinished Deployment",
      excerpt: "Unfinished Deployment functionality enables the user to track the undeployed processflows, and inturn aids you to check the status of...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 313
    });
    
  
    idx.add({
      title: "Q3 Release Version 4.8.0",
      excerpt: "Product Release Version: 4.8.0 Release notes were published and last revised in October 2020. Updates in this release include New...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 314
    });
    
  
    idx.add({
      title: "SAP Business One Service Layer",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is SAP Business One...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 315
    });
    
  
    idx.add({
      title: "Copy Processflow",
      excerpt: "Processflows in APPSeCONNECT is a very robust feature that helps you integrate your applications with ease. It always beneficial to...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 316
    });
    
  
    idx.add({
      title: "2020-Q3 Version 1.0 Hotfix Release Note",
      excerpt: "This document highlights the details of hotfix(s) done for the 2020 Q3 Release. This hotfix release introduces few minor improvements...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 317
    });
    
  
    idx.add({
      title: "Working with Return Response Node",
      excerpt: "What is Return Response Node? Return Response Node is a confirmation node that returns back an acknowledgement information to your...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 318
    });
    
  
    idx.add({
      title: "Working with Start Node",
      excerpt: "What is Start Node? Start Node node intitates the ignition of the Start process and Trigger Type of the ProcessFlow....",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 319
    });
    
  
    idx.add({
      title: "Generic NAV 2013R2 Extension",
      excerpt: "Here you will get the step by step process to use NAV 2015 Extension as and when required in the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 320
    });
    
  
    idx.add({
      title: "Function Code Validation",
      excerpt: "This section of the document will allow you to gain knowledge on the code editor and the validation process the...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 321
    });
    
  
    idx.add({
      title: "Lisitng & Editing User Defined Appresource Functions",
      excerpt: "End Users will be listed with the Functions that they have created in the UDF Listing window. Every functions listed...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 322
    });
    
  
    idx.add({
      title: "User Defined Runtime  Filter",
      excerpt: "As ActionFilters are the commands for the applications to perform specific integration operations. Using ProcessFlows, you can now implement Runtime...",
      categories: ["Processflow"],
      tags: ["developers"],
      id: 323
    });
    
  
    idx.add({
      title: "Q1 Release Version 4.10.0",
      excerpt: "Product Release Version: 4.10.0 Release notes were published and last revised in April 2021. Updates in this release include New...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 324
    });
    
  
    idx.add({
      title: "2021-Q1 Version 1.0 Hotfix Release Note",
      excerpt: "This document highlights the details of hotfix(s) done for the 2021 Q1 Release. This hotfix release introduces few improvements and...",
      categories: ["release-notes"],
      tags: ["developers"],
      id: 325
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
  
    
    
    
  
    
    
    
      
      {
        "title": "SDK Overview",
        "url": "/sdk/Overview-of-SDK/",
        "excerpt": "APPSeCONNECT is a generic platform that helps a developer as well as an integration consultant to work on specific application,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview on adapter development",
        "url": "/sdk/overview-adapters/",
        "excerpt": "Adapter in terms of APPSeCONNECT is a piece of software component external to the application core is plugged in to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview on plugin development",
        "url": "/sdk/overview-plugins/",
        "excerpt": "Plugins are a piece of software which lets to tightly couple with the platform to enhance the platform and /...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview on policies development",
        "url": "/sdk/overview-policies/",
        "excerpt": "Policies are special modules which hooks over an Http pipeline of API execution. In addition to prebuilt policies, APPSeCONNECT also...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Implementing Pull and Push functions",
        "url": "/sdk/Implementing-adapter-basic-functionalities/",
        "excerpt": "It is evident that implementating adapter requires extensive knowledge about the API which you want to connect to, such that...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Implementing Event-driven integration",
        "url": "/sdk/Implementing-event-driven-integration/",
        "excerpt": "An integration is generally scheduled at an interval or a specific time such that the data is pulled from the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to design an interface for Credentials",
        "url": "/sdk/Designing-and-Mapping-Credentials/",
        "excerpt": "APPSeCONNECT adapter development SDK allows one to implement and create user interface for credentials. In case of OnPremise agent, you...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Developing APPResource Methods",
        "url": "/sdk/Developing-AppResources/",
        "excerpt": "Application resources are special methods that can be added on the adapter code using the interface IAppResources which can be...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Handling various events of Adapter",
        "url": "/sdk/Handling-Events/",
        "excerpt": "APPSeCONNECT provides a number of events which you as a developer can hook into, to write code specially when the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to test an Adapter",
        "url": "/sdk/How-to-test-an-Adapter/",
        "excerpt": "Adapter development is a common practice, and one of the most challenging thing to do is to debug an adapter...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Implementing Action filter Parser",
        "url": "/sdk/Implementing-Actionfilter-Parsers/",
        "excerpt": "Action filters are special hierarchical key-value data store for each integration points which provides functionality to have hierarchy and can...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Logging and Tracing",
        "url": "/sdk/Logging-and-Tracking/",
        "excerpt": "Adapter works on background always to communicate data between application and APPSeCONNECT. As there are a large part of code...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Storing Transactional Data",
        "url": "/sdk/storing-transactional-data/",
        "excerpt": "Adapter supports a number of storages which you can make use of to perform various tasks. For an adapter developer,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create User Defined Appresource Functions",
        "url": "/processflow/Create-User-Defined-Functions/",
        "excerpt": "Implementing User Specific Business Integrations often requires usage of User Defined Appresource Functions that enables you to provide customized expressions...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "User Defined Functions overview",
        "url": "/processflow/overview-of-user-defined-functions/",
        "excerpt": "Processflow is now featured to add User Defined Cloud Appresource functions from the designer page that lets you Create, list...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q1 Release Version 3.4.0",
        "url": "/release-notes/2017-Q1/",
        "excerpt": "Product Release Version: 3.4.0 Release notes were published and last revised in March 2017. APPSeCONNECT welcomes you in the first...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q2 Release Version 3.5.0",
        "url": "/release-notes/2017-Q2/",
        "excerpt": "Product Release Version: 3.5.0 Release notes were published and last revised in July 2017. As our tagline states Empower your...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q3 Release Version 3.6.0",
        "url": "/release-notes/2017-Q3/",
        "excerpt": "Product Release Version: 3.6.0 Release notes were published and last revised in October 2017. With fall closing in, APPSeCONNECT welcomes...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q4 Release Version 3.7.0",
        "url": "/release-notes/2017-Q4/",
        "excerpt": "Product Release Version: 3.7.0 Release notes were published and last revised on January 2018 With a whole year of learning...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "APPSeCONNECT 2017 Release",
        "url": "/release-notes/2017/",
        "excerpt": "This section will give you detailed decsription of 2017 releases. Presently the enlisted sections under 2017 Release is given under...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q1 Release Version 3.8.0",
        "url": "/release-notes/2018-Q1/",
        "excerpt": "Product Release Version: 3.8.0 Release notes were published and last revised in April 2018. Updates in this release includes introduction...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q2 Release Version 3.9.0",
        "url": "/release-notes/2018-Q2/",
        "excerpt": "Product Release Version: 3.9.0 Release notes were published and last revised in June 2018. Updates in this release includes New...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q3 Release Version 4.0.0",
        "url": "/release-notes/2018-Q3/",
        "excerpt": "Product Release Version: 4.0.0 Release notes were published and last revised in October 2018. Updates in this release include New...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q4 Release Version 4.1.0",
        "url": "/release-notes/2018-Q4/",
        "excerpt": "Product Release Version: 4.1.0 Release notes were published on January 2019 and last revised in December 2018. Updates in this...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "APPSeCONNECT 2018 Release",
        "url": "/release-notes/2018/",
        "excerpt": "This section will give you detailed decsription of 2018 releases. Presently the enlisted sections under 2018 Release is given under...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of API Management",
        "url": "/api-management/overview/",
        "excerpt": "Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to Register URL",
        "url": "/api-management/Steps-to-register-url/",
        "excerpt": "Steps to Register URL If you do not have a registered URL with APPSeCONNECT you have to Register a URL...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Important Terminologies",
        "url": "/api-management/Terminologies/",
        "excerpt": "This article demonstrates the important terminologies that you need to consider while using our API management system. Webhook API -...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to User Authentication",
        "url": "/api-management/Steps-to-user-authentication/",
        "excerpt": "User Authentication is now done in the API Level to ensure Authenticated Approach when working with Proxy API, Swagger Documentation...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Architecture",
        "url": "/api-management/architecture-design-runtime/",
        "excerpt": "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guides to create APIs",
        "url": "/api-management/quickstart-guides-to-api-management/",
        "excerpt": "APPSeCONNECT API Management APPSeCONNECT being an API management platform allows to create, manage, deploy, maintain APIs for an organization such...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Common Use Cases for API management",
        "url": "/api-management/common-use-cases-on-api-management/",
        "excerpt": "APIs are tje central to any application development process. As data forms an important part of any business it is...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Getting Started",
        "url": "/getting%20started/getting-started/",
        "excerpt": "Every process requires static steps to begin with. APPSeCONNECT is a robust iPaaS product and users are advised to follow...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of UseCase",
        "url": "/transformation/overview-usecase/",
        "excerpt": "Transformation signifies the execution and the communication of the business processes where information and values are passed from one attribute...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": " Creating proxy endpoint",
        "url": "/api-management/steps-to-create-proxy-endpoint/",
        "excerpt": "Proxies are the full REST (Representational State Transfer) services which allows to create proxy over a set of existing data...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Creating Realtime API using Webhook",
        "url": "/api-management/steps-to-create-webhook-endpoint/",
        "excerpt": "Webhooks are custom callbacks from an application which is generated by the caller and data is pushed to all of...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create Api Using Custom Datasource",
        "url": "/create-api-using-custom-datasource/",
        "excerpt": "title: “Create API to Connect On-premise Database” toc: true tag: developers APIs is required when you don’t have an existing...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of APPSeCONNECT",
        "url": "/getting%20started/overview/",
        "excerpt": "APPSeCONNECT is provider of both hybrid and cloud hosted applications which can connect two or more applications irrespective of ERP,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Transformation",
        "url": "/transformation/overview/",
        "excerpt": "This document will help you to understand and work with the MAPPING and TRANSFORMATION functionality in APPSeCONNECT portal. Primarily transformation...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Basics of Source-Destination Mapping",
        "url": "/transformation/basic-of-source-destination-mapping/",
        "excerpt": "Mapping triggers the transformation process between the Source and the Destination Applications. Source and destination schemas are mapped in the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to define logic over destination mapping",
        "url": "/transformation/define-logic-over-destination-mapping/",
        "excerpt": "Mapping Levels Mapping is done at various level of Input Packet. Refer here Mapping at Attribute Level The user/implementer can...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Architecture",
        "url": "/workflow/architecture-design-runtime/",
        "excerpt": "Workflow is a visual representation of a business process integration, which helps you as an user to orchestrate a business...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Workflows",
        "url": "/workflow/overview/",
        "excerpt": "Workflow is group of instructions to the integration service in APPSeCONNECT. APPSeCONNECT workflow application can be considered as a strong...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create Api Connecting To Api",
        "url": "/create-api-connecting-to-api/",
        "excerpt": "\ntitle: “Create API proxy existing API”\ntoc: true\ntag: developers\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Terminology",
        "url": "/getting%20started/terminology/",
        "excerpt": "Users of APPSeCONNECT requires the knowledge of common terminologies that the user can come across, while working with the integration...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart to Workflows",
        "url": "/workflow/quickstart-guides-to-workflow-management/",
        "excerpt": "Workflows are the diagrammatic representation of a business process. As an organization, you can have a number of business processes...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to choose your workflow",
        "url": "/workflow/steps-to-choose-your-workflow/",
        "excerpt": "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Policy Overview",
        "url": "/api-management/policies/",
        "excerpt": "Policies are hooks to an API which you can punch at differnt levels of execution. They are powerful capabilities to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Throttling policy",
        "url": "/api-management/quota-per-user-key/",
        "excerpt": "Throttling policy prevents an API usage spikes on per API version basis, such that if the same API is getting...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create API to consume Webhooks",
        "url": "/api-management/create-api-connecting-to-webhook-Copy/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "User Registration",
        "url": "/getting%20started/user-registration/",
        "excerpt": "Visitor’s Free Request Trial You can request a free trial version of APPSeCONNECT by visting the portal of APPSeCONNECT and...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to create your first workflow",
        "url": "/workflow/steps-to-create-your-first-workflow/",
        "excerpt": "Introduction This section will guide you through workflow creation &amp; configuration in simple steps. By reading this section of the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Filter Request by IP policy",
        "url": "/api-management/ip-restrict/",
        "excerpt": "The IP Restrict Policy is used to restrict the access of an API Proxy by limiting the number of IP...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Accessing Portal",
        "url": "/accessing%20portal/accessing-portal/",
        "excerpt": "Accessing Portal The APPSeCONNECT portal is the web based interface where you can access APPSeCONNECT application for integration, with the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Nodes and Link overview",
        "url": "/workflow/workflow-nodes-and-links/",
        "excerpt": "Workflow in APPSeCONNECT generates flow that executes integration endpoints one by one through our Micro-service architecture and updates business data...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "GET Node",
        "url": "/workflow/working-with-get/",
        "excerpt": "What is Get Node? GET node is used for getting data from an application by using the API provided by...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "PROCESS Node",
        "url": "/workflow/working-with-process/",
        "excerpt": "What is Process Node? PROCESS node is used for transforming data from one format to another format based on the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Attribute Mapping of workflow",
        "url": "/workflow/attribute-mapping-workflow/",
        "excerpt": "For every integration between the application, the business logic is required. Mapping triggers the process between the source and the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Validate http headers policy",
        "url": "/api-management/validate-http-header/",
        "excerpt": "Validate HTTP Header policy inspects each HTTP Request whether the HTTP Request contains a particular Request Header and the corresponding...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Apps",
        "url": "/getting%20started/configurations/",
        "excerpt": "This section gives the overall idea about choosing application, configuring connection, environment setup and execution of the sync process. Step...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "POST Node",
        "url": "/workflow/working-with-post/",
        "excerpt": "What is Post Node? POST node is used for pushing data to an application based on the API provided by...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Scheduling, Deploying & Executing workflows",
        "url": "/workflow/deploying-and-executing/",
        "excerpt": "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Compression Policy",
        "url": "/api-management/compression-apply/",
        "excerpt": "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Configuring Connectors",
        "url": "/getting%20started/configurations-for-integration/",
        "excerpt": "This section gives the overall idea about configuring connection, touchpoint creation, lookup addition, environment setup and execution of the sync...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "FILTER Node",
        "url": "/workflow/working-with-filter/",
        "excerpt": "What is filter node? This node is used to fetch a subset of data from an original data packet based...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Data-view process of workflow snapshot",
        "url": "/workflow/list-of-snapshot/",
        "excerpt": "Snapshot in Workflow gives complete overview of the transactions made through it. A transaction in workflow means an an unique...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Resuming Workflows",
        "url": "/resuming%20workflows/resuming-workflows/",
        "excerpt": "Functionality of Resuming Workflows Executing the process is a vital part when integrating any applications. With APPSeCONNECT, integrations are done...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Response content type conversion policy",
        "url": "/api-management/response-content-format/",
        "excerpt": "Reponses Content type conversion policy is a type of outbound policy. It can be configured for the output format such...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "DELAY Node",
        "url": "/workflow/working-with-delay/",
        "excerpt": "What is Delay node? DELAY node is used to delay or stop an execution flow for a specific period. For...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Debugging workflows",
        "url": "/workflow/debugging-a-workflow/",
        "excerpt": "As workflow provides end to end business flow mapping, debugging and changing workflow mapping and links is often a business...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Configuring APPSeCONNECT for API Hosting",
        "url": "/api-management/configure-appseconnect-for-apis/",
        "excerpt": "APPSeCONNECT is a platform which allows hosting of APIs such that the hosted APIs could run independently. This section of...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Decision Node",
        "url": "/processflow/working-with-decision/",
        "excerpt": "What is Decision Node? In Business, you may not have time for redundant data or data which is of no...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow Elements",
        "url": "/workflow/generating-elements/",
        "excerpt": "Why do you need element? A Workflow is designed using elements that helps in integrating data graphically. Elements are generally...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "HALT/RESUME Node",
        "url": "/workflow/working-with-halt-resume/",
        "excerpt": "What is halt-resume node HALT and RESUME nodes are used in a combination. We implement HALT node to halt the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Decision Node",
        "url": "/workflow/working-with-decision/",
        "excerpt": "What is Decision Node? This node is used for decision making during workflow execution. A decision can be applied on...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Merger Node",
        "url": "/workflow/working-with-merger/",
        "excerpt": "What is Merger Node? This node is used to merge smaller data chunks into a single data packet. Like a...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sequencer Node",
        "url": "/workflow/working-with-sequencer/",
        "excerpt": "What is Sequencer Node? This node is used to order elements by a certain attribute. This node can be applied...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Splitter Node",
        "url": "/workflow/working-with-splitter/",
        "excerpt": "What is Splitter Node? This node is used to split a data packet into smaller chunks for processing in small...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Choose Applications from catalog",
        "url": "/api-management/choosing-backend-apps/",
        "excerpt": "API Proxies are API services which one can create to connect to a remote data source or multiple data sources....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow Actions",
        "url": "/workflow/generating-actions/",
        "excerpt": "Why do you need action? Workflow is capable of generating action by placing an action node directly on the workflow...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Generating Support tickets",
        "url": "/workflow/generating-notification-support-ticket/",
        "excerpt": "Support Ticket Notification Using this node user can create a support ticket during workflow execution. For example, after data is...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Webhook callback",
        "url": "/workflow/generating-notification-webhooks/",
        "excerpt": "Webhook Callback Action The concept of a WebHook is simple. A webhook occurs when something happens; it is a simple...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Storing Files",
        "url": "/workflow/generating-storage-action/",
        "excerpt": "Storage Action Using this node user can store data in text file during workflow execution for future reference. Created file...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Connecting an API to any data source",
        "url": "/api-management/connecting-to-a-data-source/",
        "excerpt": "In today’s world,organizations are having multiple data sources.With distrubuted architechture in place,these data sources are existing independently and scatteredly.It can...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Process Property",
        "url": "/workflow/process-property/",
        "excerpt": "Why do you need process property? In APPSeCONNECT Workflow, users/implementers get the extra privilege to add special properties for better...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deploy and publish APIs to different environments",
        "url": "/api-management/deployments-and-environments/",
        "excerpt": "Deploying and publishing API is one of the primary concern after you have successfully configured an API on your API...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Loops",
        "url": "/workflow/working-with-loops/",
        "excerpt": "What is Loop Node? In APPSeCONNECT Workflow using a Self-loop, we can repeatedly execute an individual node without affecting the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Basic Workflow for Customer Downloading",
        "url": "/workflow/basic-workflow-customer-download/",
        "excerpt": "Use Case Name Basic Workflow for Customer Downloading. Brief Description This is a basic workflow where the user can download...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Common Use Cases for Workflow management",
        "url": "/workflow/common-use-cases-on-workflow-management/",
        "excerpt": "Workflow Use Cases for specific business scenario Workflow signifies the definition, execution, and automation of business processes where tasks and...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Delay execution workflow",
        "url": "/workflow/delay-execution-in-workflow/",
        "excerpt": "Use Case Name Workflow with delay execution filter Brief Description This workflow enables the user to configure a task and...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow creation & execution with splitter",
        "url": "/workflow/process-to-configure-customer-with-splitter/",
        "excerpt": "Use Case Name Workflow showing task configuration with splitter rule Brief Description This workflow enables the user to add business...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow for adding sales order",
        "url": "/workflow/workflow-creation-for-add-salesorder/",
        "excerpt": "Use Case Name Creating a Workflow for sales order Brief Description This is a workflow where the user can add...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": " Workflow execution with data filteration",
        "url": "/workflow/workflow-filter-node-customer-download/",
        "excerpt": "Use Case Name Workflow creation with data filteration Brief Description This workflow enables the user to add customer in Ecommerce...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow for product upload and stock sync",
        "url": "/workflow/workflow-showing-product-upload-with-stock-sync/",
        "excerpt": "Use Case Name Workflow creation with Product upload and stock synchronization-post task scenario Brief Description This workflow enables the user...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": " Workflow execution with acknowledgement data",
        "url": "/workflow/process-to-configure-a-task-with-acknowledgement/",
        "excerpt": "Use Case Name Workflow showing task configuration with acknowledgement data Brief Description This workflow enables the user to add payment...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow showing salescycle with post and post task inputs",
        "url": "/workflow/workflow-showing-salescycle-with-post-and-post-taskinput/",
        "excerpt": "Use Case Name Workflow creation of sales cycle with post and post task inputs Brief Description This workflow enables the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Important Terminologies",
        "url": "/workflow/Terminologies/",
        "excerpt": "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow A flow or...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Functionality of Resuming Workflow",
        "url": "/workflow/workflow-showing-resume-functionality/",
        "excerpt": "Use Case Name Basic Workflow Implementation for determining Resumable Workflow Brief Description This is a basic workflow implemented for the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Frequently asked questions",
        "url": "/workflow/faqs/",
        "excerpt": "FAQ is the best way to address frequently asked questions about your business, of course. This section contains list of...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Troubleshooting of Workflows",
        "url": "/workflow/Troubleshooting/",
        "excerpt": "This topic describes common problems that can occur when you develop and test a workflow in AEC Portal. Given below...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Frequently asked questions",
        "url": "/api-management/faqs-api-management/",
        "excerpt": "FAQ is the best way to address frequently asked questions about your business. This section contains list of questions and...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create API to Quota Management Access Restriction",
        "url": "/api-management/create-api-quotamanagement-to-restriction-access/",
        "excerpt": "Use Case Name API to Quota Management Access Restriction Brief Description This is a api which the user can create...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create Swagger Documentation",
        "url": "/api-management/steps-to-create-swagger-documentation/",
        "excerpt": "Swagger is an Open Source Framework for the documentation of API. Swagger is a tools which enables you to generate,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Deployment",
        "url": "/deployment/overview/",
        "excerpt": "The APPSeCONNECT Platform either for cloud or on-premise integration is a fully integrated solution that enables organizations to design, develop,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Getting started with deployment",
        "url": "/deployment/gettingstarted-with-deployment/",
        "excerpt": "This section lets you get started with the deploying processes and components to an environment for APPSeCONNECT. APPSeCONNECT Components for...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deployment Configuration",
        "url": "/deployment/Deployment-Configuration/",
        "excerpt": "APPSeCONNECT is of Hybrid Architecture and the data can be integrated both on the CLOUD PORTAL and in OP Agent....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Environment Overview",
        "url": "/deployment/Environment-Overview/",
        "excerpt": "APPSeCONNECT platform enables you to create and manage multiple deployment environment for your application integration needs. As an user, you...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Environment Management",
        "url": "/deployment/Environment-Management/",
        "excerpt": "Pre-requisites To visit the ENVIRONMENT page in portal, navigate to Deploy &gt; Environments. It is recommended that user should upgrade/install...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Plugin",
        "url": "/deployment/Overview-of-Plugin/",
        "excerpt": "A plugin is any kind of an addon or an extension software component that adds a specific feature to an...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Agent Blocking & Unblocking",
        "url": "/deployment/Agent-Blocking-and-Unblocking/",
        "excerpt": "APPSeCONNECT is of Hybrid Architecture and the data can be integrated both from the CLOUD PORTAL as well as from...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "HANA Plugin",
        "url": "/deployment/hana-plugin-installation/",
        "excerpt": "Working with SAP HANA Database requires SAP HANA Plugin that needs to be installed in the agent. HANA Plugin is...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "MYSQL Plugin",
        "url": "/deployment/MYSQL-plugin-installation/",
        "excerpt": "Working with MySQL Database requires MySQL Plugin that needs to be installed in the agent. MySQL Plugin is now pre-packaged...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Cors policy",
        "url": "/api-management/cors/",
        "excerpt": "Cross-Origin Resource Sharing (CORS) Policy is a mechanism which allows restriction to domain access. Domains configured by the User is...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "OLEDB Plugin",
        "url": "/deployment/OLE-db-plugin-installation/",
        "excerpt": "Plugin for AEC Database of Agent to Support any DBMS at client side/client server such that AEC can support databases...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Application Connectors",
        "url": "/connectors/overview-of-application-connectors/",
        "excerpt": "An Application connectors are Pre-built optimized solution developed by APPSeCONNECT backend developer team and tested in real-life scenarios. If you...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Priority",
        "url": "/connectors/Priority/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is Priority, such as...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Shopify",
        "url": "/connectors/shopify/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your choosen application is Shopify, such as...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Custom Connectors",
        "url": "/connectors/overview-of-custom-connectors/",
        "excerpt": "APPSeCONNECT requires connectivity to the application such that it can retrieve or send data to the application or data sources....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Connectors",
        "url": "/connectors/Overview-of-Connectors/",
        "excerpt": "AEC Connectors acts like a bridge to create connection between applications that connects different data sources both on-premise or in...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Magento2",
        "url": "/connectors/magento2/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your choosen application is Magento 2, providing...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Prestashop",
        "url": "/connectors/Prestashop/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is Prestashop, credentials need...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Salesforce",
        "url": "/connectors/Salesforce/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is Salesforce, credentials need...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "SAP Business One",
        "url": "/connectors/Sap-Business-One/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is SAP Business One,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Shipstation",
        "url": "/connectors/Shipstation/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is Shipstation, credentials need...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Technology Connectors",
        "url": "/connectors/Overview-of-technology-connectors/",
        "excerpt": "Connectors are part of the communication bridge that connects different data sources both on-premise or in cloud (exposed to WWW)...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of OLEDB Adapters",
        "url": "/connectors/Overview-of-OLEDB-Adapter/",
        "excerpt": "Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate and adapt with the AEC Portal....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Settings",
        "url": "/deployment/settings/",
        "excerpt": "Settings panel of AEC Agent enables to change the default settings after the initial setup and installation of the agent....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Prerequisite",
        "url": "/sdk/Prerequisites/",
        "excerpt": "Adapter represents an interface between an APP and APPSeCONNECT. An adapter is the most important component which connects your app...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Adding Credentials",
        "url": "/connectors/OLEDB-Credentials/",
        "excerpt": "How to add credentials for Cloud Integration: Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Troubleshooting",
        "url": "/deployment/Troubleshooting/",
        "excerpt": "While executing the integration process on the OP Agent, you may face Techno-Functionality errors common to executing the agent. Given...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Development Guidelines",
        "url": "/sdk/Development-Guidelines/",
        "excerpt": "Pascal Case and CamelCase Pascal Casing - First character of all words are Upper Case and other characters are lower...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Using Filters for Integration",
        "url": "/connectors/OLEDB-using-filters/",
        "excerpt": "Users can define Filters for integration scenario as per business requirements for the GET, POST and PUT operation. This section...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Version & Library Function Update",
        "url": "/connectors/Version-Extraction-For-Adapter-Upload/",
        "excerpt": "This section of the document provides you the full details of using Assembly Version Extraction and the process of uploading...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Upgradation & Migration",
        "url": "/deployment/upgradation-and-migration/",
        "excerpt": "With every update AEC Agent need upgradation to a higher version without losing any data in the agent. This upgradation...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Best practices",
        "url": "/sdk/Dos-and-Donts-for-SDK/",
        "excerpt": "Let us discuss some of the Do’s and Don’ts that one need to maintain while developing an Adapter in APPSeCONNECT...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Postrequisites",
        "url": "/sdk/testing-and-uploading-adapter-to-appseconnect-cloud/",
        "excerpt": "An admin or an end-user can upload updated adapter to an existing app such that the adapter can be changed...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Upgrading and Re-versioning",
        "url": "/sdk/upgrading-and-reversioning-adapters/",
        "excerpt": "APPSeCONNECT Component Version Pattern contains four numbers, which convey the following information: Pattern- (1st-Number).(2nd-Number).(3rd-Number).(4th-Number) From left to right the numbers...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deploying",
        "url": "/sdk/deploying-the-connectivity/",
        "excerpt": "Environment section of APPSeCONNECT allows the user to deploy configurations and adapters. In case of APPSeCONNECT, you will automatically get...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Using parameters to an API",
        "url": "/api-management/steps-to-assign-parameter-per-actionfilter/",
        "excerpt": "This Document provides the details and the functionality aspect of the API components to define static and dynamic criterias for...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Simple Product Add NAV to Mage2 Multiconnection",
        "url": "/integration/simple-productadd/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will enable the users understand how the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Simple Product Update Nav-Mage2 MultiConnection",
        "url": "/integration/simpleprdct-update/",
        "excerpt": "Executing the process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Uniconta",
        "url": "/connectors/uniconta/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is Uniconta credentials need...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "ZohoCRM V2.0",
        "url": "/connectors/zohocrmv2/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is ZohoCRMV2 credentials need...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Grouping of Conditions",
        "url": "/transformation/grouping-of-condition/",
        "excerpt": "What is Grouping of Conditions Mapping can have multiple condition that are interlinked or grouped. Scenario might require more than...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Adding Product in Priority",
        "url": "/connectors/adding-product-in-priority/",
        "excerpt": "Prerequisites for adding products: You need a valid Priority Account. Steps to Add Products in Priority: Login to the Priority...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Updating Inventory in Priority",
        "url": "/connectors/updating-Inventory-in-priority/",
        "excerpt": "Prerequisites for Updating Inventory Need to have a valid Priority Account. Need to have the product registered before updating the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Adding Product in Sage300",
        "url": "/connectors/adding-product-in-sage/",
        "excerpt": "Prerequisites for adding Product/Items in SAGE 300 Need to have a valid SAGE 300 account. Steps to Add Product/Items in...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Updating Inventory in Sage300",
        "url": "/connectors/updating-Inventory-in-sage/",
        "excerpt": "Prerequisites for Updating Inventory in SAGE300 Need a valid SAGE 300 account. Need the server access to SAGE 300. Need...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Adding Account in Zoho",
        "url": "/connectors/adding-account-in-zoho/",
        "excerpt": "Prerequisites Need to have a valid ZOHO CRM account. Steps to add new Customer/Accounts in Priority Login to the ZOHO...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Troubleshooting",
        "url": "/transformation/troubleshooting/",
        "excerpt": "Prerequisites for Intergration Scenarios View the Generated Packet to know where the error occurred (GET or PROCESS or POST). View...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Getting Started",
        "url": "/transformation/getting-started-with-mapping/",
        "excerpt": "Getting started section of the mapping will help you to understand the main areas you should be familiar with before...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Types of Mapping",
        "url": "/transformation/types-of-mapping/",
        "excerpt": "APPSeCONNECT Mapping Types are given below: 1. Hard Coded Mapping - Hardcoded mapping is implemented when it is required that...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Types of Variable",
        "url": "/transformation/types-of-variable/",
        "excerpt": "Working with Variables in APPSeCONNECT To facilitate touchpoint mapping, variables stores the data that can be used later in the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Understanding Attribute Mapping",
        "url": "/transformation/understanding-attribute-mapping/",
        "excerpt": "Behind every application integration, there is a business logic. APPSeCONNECT stores this integration logic in the form of data. Attribute...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Understanding XML and Xpath",
        "url": "/transformation/understanding-xml-and-xpath/",
        "excerpt": "Understanding XML XML stands for eXtensible Markup Language. XML was designed to store and transport data. It is a textual...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Understanding Components of Mapping",
        "url": "/transformation/understanding-components-of-mapping/",
        "excerpt": "Mapping triggers the transformation process between the Source and the Destination Applications. Source and destination schemas are mapped in the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to Customize Prebuilt Mapping/Attribute mapping",
        "url": "/transformation/steps-to-cutomize-prebuilt-mapping/",
        "excerpt": "The data coming from the source schema requires to be transformed individually such that it matches the format of the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Understanding Touchpoint Dependencies",
        "url": "/transformation/understanding-touchpoint-dependencies/",
        "excerpt": "Use Case Name Touchpoint Dependency Brief Description Touchpoints are the point of action which when triggered transfers informations between the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Understanding Mapping & Syntax",
        "url": "/transformation/understanding-mapping-syntax/",
        "excerpt": "APPSeCONNECT has its own set of vocabulary or syntax, functions that help its users to customize the pre-defined touchpoints as...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Advance Mapping through Custom Renderer",
        "url": "/transformation/advance-mapping-through-custom-renderer/",
        "excerpt": "Use Case Name Advanced Mapping Through Renderer Brief Description This feature enables the user to alter the default XML structure...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Mapping from Schema 1 to Schema 2",
        "url": "/transformation/creating-a-mapping-from-schema1-schema2/",
        "excerpt": "Use-Case Name Attribute Mapping with Schema 1 (OLEDB Technology APP) and Schema 2 (REST Application - Magento 2) Brief Description...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Defining and Mapping Variables with Functions",
        "url": "/transformation/defining-variables-and-functions/",
        "excerpt": "Here you will understand the process of defining Variables (any variables that stores the data that can be used later...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Enabling Tracking data in Transformation",
        "url": "/transformation/enable-tracking-fields/",
        "excerpt": "Use Case Name Enabling Tracking in transformation. Brief Description Tracking is a feature in APPSeCONNECT which lets the user view...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Implementing Xpath in Mapping",
        "url": "/transformation/implementing-path-in-mapping/",
        "excerpt": "Use Case Name Handling XPATH in Mapping Brief Description XPATH is an essential concept that is required when implementing mapping...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Using Lookups Mapping for Value Interchange",
        "url": "/transformation/using-lookups-for-value-exchange/",
        "excerpt": "Use Case Name Using Lookups Mapping for Value Interchange Brief Description Lookups Mapping is a feature in APPSeCONNECT which enables...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Handling Dependent data",
        "url": "/transformation/handling-dependent-data/",
        "excerpt": "Data dependency is a concept which requires the data which are mutually dependent on one another to be kept in...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Handling Incremental data",
        "url": "/transformation/handling-incremental-data/",
        "excerpt": "This is a very common scenario where syncing records incrementally in one direction between two applications, occurs. An incremental (or...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Using library methods/AppResource Function",
        "url": "/transformation/using-library-methods/",
        "excerpt": "Appresource Functions are the functions in APPSeCONNECT that are written in the adapter (APPSeCONNECT supports calling external functions written in...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Using Tips & Tricks",
        "url": "/transformation/using-tips-and-tricks/",
        "excerpt": "Transformation is one vital concept when it comes to integrating applications. Errors can make the Integration process go wrong and...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Schema, Action & Filter",
        "url": "/transformation/working-with-schemas-action-filter/",
        "excerpt": "Knowing Schema, Actions &amp; Filters The user can view the schemas and the action present or can also add schema...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sage300",
        "url": "/connectors/sage300/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is SAGE 300, credentials...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Uploading Plugins or Extensions",
        "url": "/connectors/woocommerce-pluginextension-upload/",
        "excerpt": "Integrating with WooCommerce, requires an APPSeCONNECT Plugin/Extension to be uploaded and installed in the WooCommerce Website. This document demonstrates as...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "WooCommerce",
        "url": "/connectors/woocommerce/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is WooCommerce, credentials need...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Adding Employee in BambooHR",
        "url": "/connectors/adding-employee-bamboohr/",
        "excerpt": "Prerequisites Need to have a valid account in BambooHR Steps to add a new employee in BambooHR Login to the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "BambooHR",
        "url": "/connectors/bamboohr/",
        "excerpt": "Application configuration is an essential activity before starting the process of integration. If your choosen application is Bamboo HR, such...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Dynamics NAV",
        "url": "/connectors/Dynamicsnav/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is Microsoft Dynamics Business...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Generic NAV 2009R2 Extension",
        "url": "/connectors/generic-nav2009-R2-extension/",
        "excerpt": "Here you will get the step by step process to use NAV 2009R2 Extension as and when required in the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Generic NAV 2015 Extension",
        "url": "/connectors/generic-nav2015-extension/",
        "excerpt": "Here you will get the step by step process to use NAV 2015 Extension as and when required in the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Generic NAV 2016 Extension",
        "url": "/connectors/generic-nav2016-extension/",
        "excerpt": "Here you will get the step by step process to use NAV 2016 Extension as and when required in the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Generic NAV 2017 MultiConnection Extension",
        "url": "/connectors/generic-nav2017-mutliconnectionextension/",
        "excerpt": "Here you will get the step by step process to use NAV 2017 Extension as and when required in the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Simple Product Add Mage2 Multi to Nav",
        "url": "/integration/simple-productadd-mage2tonav/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Rule",
        "url": "/rule/overview-of-rule/",
        "excerpt": "If the user wants to perform some ACTIONS based on the type of events encountered during agent execution such as...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Choosing & Activating Rule",
        "url": "/rule/choose-rule/",
        "excerpt": "Rules are specialized tokens that are initiated to track and record the error events developed while executing the Sync Process....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Pre-Configured Rule",
        "url": "/rule/preconfigured-rule-overview/",
        "excerpt": "Pre-configured rules are the rules that comes pre-packaged with your Account. Users/Implementers needs to choose the pre-configured rules from the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Integration",
        "url": "/integration/overview/",
        "excerpt": "APPSeCONNECT provides a single integration platform through which one can connect various Business Applications like ERP system, CRM, Accounting Applications,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Configurable Product Add Nav-Mage2 Multiconnection",
        "url": "/integration/configproduct-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "SAPB1-Magento2",
        "url": "/integration/SAPB1-Magento2/",
        "excerpt": "This section of the document will given you an overview of SAP B1- Magento 2 Integration and the subsequent chapters...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Business Partner Add",
        "url": "/integration/business-partneradd/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Inventory Update",
        "url": "/integration/inventoryupdate/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Order Add",
        "url": "/integration/order-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Product Add",
        "url": "/integration/productadd/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Invoice Add",
        "url": "/integration/sap-invoice-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "SAPB1 On-Premise Add-on 3.1.x Installation OR Upgrade",
        "url": "/connectors/Sap-Business-Addon/",
        "excerpt": "This article explains the add­on setup procedure in SAP B1 to facilitate SAP B1 integration with other applications using APPSeCONNECT....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Configurable Product Update Nav-Magento2 MultiConnection",
        "url": "/integration/configprdt-update/",
        "excerpt": "Executing the process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q1 Release Version 4.2.0",
        "url": "/release-notes/2019-Q1/",
        "excerpt": "Product Release Version: 4.2.0 Release notes were published and last revised in March 2019. Updates in this release includes introduction...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q2 Release Version 4.3.0",
        "url": "/release-notes/2019-Q2/",
        "excerpt": "Product Release Version: 4.3.0 Release notes were published and last revised in June 2019. Updates in this release includes New...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q3 Release Version 4.4.0",
        "url": "/release-notes/2019-Q3/",
        "excerpt": "Product Release Version: 4.4.0 Release notes were published and last revised in September 2019. Updates in this release includes New...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q4 Release Version 4.5.0",
        "url": "/release-notes/2019-Q4/",
        "excerpt": "Product Release Version: 4.5.0 Release notes were published and last revised in January 2020. Updates in this release include New...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Customer Add Magento2-NAV Multiconnection",
        "url": "/integration/customeradd-mage2tonav/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Customer Add NAV-Magento2 Multiconnection",
        "url": "/integration/customeradd-navtomage2/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Pre-Configured Rule for Detailed Sync Report",
        "url": "/rule/preconfigured-rule-for-detailed-sync-report/",
        "excerpt": "Scenario Workflows are scheduled for it to run as per the requirement. Workflows can either have the result as Success...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Default Rule for Morning Report",
        "url": "/rule/default-rule-for-morning-report/",
        "excerpt": "Requirement of the Rule APPSeCONNECT Morning Report updates the users about the data synchronization status for each connection, on daily...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Default Rule",
        "url": "/rule/default-rule-overview/",
        "excerpt": "Default rules are the rules that are predefined on APPSeCONNECT. User/Implementers cannot choose these rules and will not get any...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Contact Person Add NAV to Magento 2(Multiconnection)",
        "url": "/integration/contactperson-add/",
        "excerpt": "Executing the process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Contact Person Add/ Update Mage2 multistore to NAV",
        "url": "/integration/contactperson-addupdate/",
        "excerpt": "Executing the process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Inventory Update NAV-Mage2 Multiconnection",
        "url": "/integration/inventory-update/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Add Invoice NAV-Mage2 Multiconnection",
        "url": "/integration/invoice-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "NAV-Magento 2 Multiple Connection",
        "url": "/integration/nav-magento/",
        "excerpt": "This section of the document will given you an overview of NAV- Magento2 Mutliple Connection Integration and the subsequent chapters...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Add Sales Order Magento2 Multiconnection-NAV",
        "url": "/integration/sales-order/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Add Shipment NAV-Mage2 MultiConnection",
        "url": "/integration/shipment/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "APPSeCONNECT 2019 Release",
        "url": "/release-notes/2019/",
        "excerpt": "This section will give you detailed description of 2019 releases. Presently the enlisted sections under 2019 Release is given under...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "APPSeCONNECT 2020 Release",
        "url": "/release-notes/2020/",
        "excerpt": "This section will give you detailed description of 2019 releases. Presently the enlisted sections under 2020 Release is given under...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Authentication & Authorization of REST Adapters",
        "url": "/connectors/Authentication-and-Authorization/",
        "excerpt": "APPSeCONNECT REST Adapter provides a detailed way for consuming external RESTful APIs including secure APIs. COMMUNICATION BETWEEN CLIENT AND SERVER...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Basic Authentication ",
        "url": "/connectors/BasicAuthentication/",
        "excerpt": "Process to Configure Basic Authentication in Rest Adapter - On Premise To configure the Basic Authentication Type for Rest Adapter...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "OAuth1.0 Authentication",
        "url": "/connectors/OAuth1.0/",
        "excerpt": "Prerequisites for configuring Oauth 1.0 in On Premise Agent You need to have a valid credentials to the portal. You...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "OAuth2.0 Authentication",
        "url": "/connectors/OAuth2.0/",
        "excerpt": "Process to Configure OAuth2.0 Rest Adapter - On Premise To configure the OAuth2.0 Authentication type for Rest Adapter follow the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Rest Adapters",
        "url": "/connectors/Overview-of-GenericRest-Adapters/",
        "excerpt": "HTTP based endpoint connector is a pre-packaged software package which provides seamless connectivity to RESTful APIs and leverage to communicate...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Using Filters for Integration",
        "url": "/connectors/Filters-for-Integration/",
        "excerpt": "Users can define Filters for integration scenario as per business requirements for the GET, POST and PUT operation for REST...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Mapping and Transformation",
        "url": "/connectors/Mapping-and-Transformation/",
        "excerpt": "Given below is the mapping details for Rest Adapter required for data Integration. Basic prerequisite for Mapping: (A) Here the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": " Listing of Advance Workflow",
        "url": "/advance%20workflow/listing-adv-workflow/",
        "excerpt": "Listing of Advance Workflow section provides the option of creating folders for organizing the advance workflows with respect to the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Designing & Executing Advance Workflow",
        "url": "/advance%20workflow/designing-executing-adv-workflow/",
        "excerpt": "This section provides the functionality to implement your business scenario by designing the workflow. On clicking the Create Workflow button...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deploying Advance Workflow",
        "url": "/advance%20workflow/deploying-adv-workflow/",
        "excerpt": "Created/Edited Advanced workflows needs to be deployed to the environment in order to execute the integration process. Users of APPSeCONNECT,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Saving & Restoring Revised Advance Workflow",
        "url": "/advance%20workflow/saving-and-restoring-revised-adv-workflow/",
        "excerpt": "Users/Implementers of APPSeCONNECT requires to edit and modify workflows frequently as per the business requirement. Advance Workflows is enabled with...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Decision Node",
        "url": "/advance%20workflow/working-with-decision-node/",
        "excerpt": "What is Decision Node Significance of Decision Node is implemented when fetching or synchronising data based on certain criteria or...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Delay Node",
        "url": "/advance%20workflow/working-with-delay-node/",
        "excerpt": "What is Delay Node DELAY node is used to delay or stop an execution flow for a specific period (in...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Troubleshooting for Rest",
        "url": "/connectors/Troubleshooting-Rest/",
        "excerpt": "Troubleshooting Scenario 1 Even after updating subscription, Update Configuration and Update adapters, credential page for the respective app shows exhausted....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Security",
        "url": "/security/security/",
        "excerpt": "APPSeCONNECT platform accomplishes the integration of your most serious business information and business processes with the utmost security. The application...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Global Data Protection Regulations",
        "url": "/gdpr/GDPR/",
        "excerpt": "The list of GDPR (Global Data Protection Regulations) policies is given below which our product imparts to the user for...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of ProcessFlow",
        "url": "/processflow/overview-of-processflow/",
        "excerpt": "APPSeCONNECT processflows suite features an extensive interface that provide the ability to easily create digital maps to make out robust...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart to Designing processflow",
        "url": "/processflow/Quickstart-guide-to-processflow/",
        "excerpt": "Processflows are the diagrammatic representation of a business process. As an organization, you can have a number of business processes...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Architecture",
        "url": "/processflow/Architecture/",
        "excerpt": "Processflow is a visual representation of a business process integration, which helps you as an user to orchestrate a business...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Important Terminology",
        "url": "/processflow/Terminology/",
        "excerpt": "This document demonstrates the important terminologies that you need to consider while using ProcessFlows ProcessFlow Folder It is one the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Designer",
        "url": "/processflow/designer-processflow/",
        "excerpt": "This section enables the user to implement business scenarios by designing processflows. Here user would get the detailed usability of...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Organising ProcessFlow",
        "url": "/processflow/processflow-listing-page/",
        "excerpt": "This section provides the option of creating folders for organizing the ProcessFlows with respect to the business requirements for any...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to Create a ProcessFlow",
        "url": "/processflow/creating-processflow/",
        "excerpt": "This section of the documentation will guide the user with the process of Creating &amp; Saving new processflows. The steps...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Generating Temporary License for Organization",
        "url": "/license%20management/license-generation/",
        "excerpt": "Partners &amp; Developers or any other user (except the client) can now, no longer be able to login into the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "License Management",
        "url": "/license%20management/license-management/",
        "excerpt": "License key-based authentication approach is security enhancement for your on-premise and cloud integrations. This mechanism authenticates users who tries to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deploy, Execute & Undeploy",
        "url": "/processflow/deploying-and-executing-processfloww/",
        "excerpt": "Created or Edited processflows needs to be deployed to the environment in order to execute the integration process. Users, now...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Redeploy",
        "url": "/processflow/redeploying-processflow/",
        "excerpt": "Redeploying processflow functionality allows you to re-deploy an existing processflows (deployed/deployed and executed) to the same environment in order to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sync Info & Retry",
        "url": "/processflow/retry-processflow/",
        "excerpt": "Execution of a processflow is vital process for transforming data from source to destination application. In real-time, execution of processflow...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Data view of Snapshot",
        "url": "/processflow/snapshot-processflow/",
        "excerpt": "Snapshot in processflow gives complete overview of the transactions that was executed. A transaction in processflow defines an execution of...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Export and Import Lookup",
        "url": "/processflow/export-and-import-lookup/",
        "excerpt": "Repositories in APPSeCONNECT provides the user to create and manage Lookup types in form of tables for the organisation. As...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Delete Processflow",
        "url": "/processflow/delete-processflow/",
        "excerpt": "Deleting option enables you to delete a processflow once you have designed it, deployed it or executed it. Deletion is...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Lookup in Processflow Mapping",
        "url": "/processflow/implementing-lookup-in-mapping/",
        "excerpt": "Once the Collection and the Reference tables are created, users can implement those lookups in the attribute mapping for the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Creating Lookup Repository Masterdata",
        "url": "/processflow/Lookup-repository-masterdata/",
        "excerpt": "Repositories in APPSeCONNECT provides the user to create and manage Lookup types in form of tables for the organisation. Lookups...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to Define logic over Destination Mapping",
        "url": "/processflow/steps-to-define-logic-over-destination-mapping/",
        "excerpt": "Mapping in APPSeCONNECT is done so that a Source Application can communicate with the Destination Application. APPSeCONNECT, introduces a new...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Attribute Mapping of Processflows",
        "url": "/processflow/customising-attribute-mapping/",
        "excerpt": "The data coming from the source schema requires to be transformed individually such that it matches the format of the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Defining variables in Mapping",
        "url": "/processflow/defining-variables-in-processflow-mapping/",
        "excerpt": "Here you will understand the process of defining Variables (any variables that stores the data that can be used later...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Implementing Xpath in Mapping",
        "url": "/processflow/xpath-in-processflow-mapping/",
        "excerpt": "XPATH is an essential concept that is required when implementing mapping and transformations. XPATH access nodes in a hierarchical structure...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Defining & Implementing Namespace",
        "url": "/processflow/namespace-mapper/",
        "excerpt": "Namespace is a technique that defines a set of unique names within an XML file, consisting of several XML elements...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Advance Mapping through Custom Renderer",
        "url": "/processflow/advance-mapping-render-processflow/",
        "excerpt": "Renderer enables the user to alter the default XML structure which and when required through rendering. In case of Complex...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Pre-Configured Rule of Mail Notification of Errors",
        "url": "/rule/error-mail-notification/",
        "excerpt": "Scenario Integrations are scheduled to run automatically and for users its effecient to send reports for scheduled process that either...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Lightspeed",
        "url": "/connectors/Lightspeed/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is Salesforce, credentials need...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Nodes and Link overview",
        "url": "/processflow/processflow-nodes-and-links/",
        "excerpt": "Given below is the list of elements you will be able to use in APPSeCONNECT processflow. You can use the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Mapper",
        "url": "/processflow/working-with-mapper/",
        "excerpt": "When working with Process Flows, it is essential to map the attributes and the entities of both source and destination...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Processflow APP",
        "url": "/processflow/processflow-app/",
        "excerpt": "Why do you need APPS? For transforming data from one application to another you need to drag Application nodes to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with GET",
        "url": "/processflow/working-with-GET/",
        "excerpt": "What is Get Node? GET node is used for getting data from an application by using their API Endpoints provided...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with POST",
        "url": "/processflow/working-with-POST/",
        "excerpt": "What is POST Node? POST node is used for pushing transformed data to the destination application by using API Endpoints...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Cloud Appresource Functions",
        "url": "/processflow/cloud-appresource-functions/",
        "excerpt": "Appresource Functions are the functions in APPSeCONNECT that are written in the adapter which is used for the data transformation...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "APPSeCONNECT 2021 Release",
        "url": "/release-notes/2021/",
        "excerpt": "This section will give you detailed description of 2021 releases. Presently the enlisted sections under 2021 Release is given under...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Splitter Node",
        "url": "/processflow/working-with-processflow-splitter/",
        "excerpt": "What is Splitter Node? This node is used to split a data packet into smaller chunks for processing in small...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Selfloop",
        "url": "/processflow/working-with-processflow-selfloop/",
        "excerpt": "What is Loop node In APPSeCONNECT Processflow using a Self-loop, we can repeatedly execute an individual node without affecting the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sage300-Magento2 B2C",
        "url": "/integration/sage300-magento2/",
        "excerpt": "This section of the document will given you an overview of SAGE 300 - Magento 2 Integration and the subsequent...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Shopify-Sage300",
        "url": "/integration/shopify-sage300/",
        "excerpt": "This section of the document will given you an overview of SAGE 300 - Shopify Integration and the subsequent chapters...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Customer Add from Magento2 to SAGE 300",
        "url": "/integration/customer-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Customer Add from Shopify to SAGE 300",
        "url": "/integration/sage-shopify/customer-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Customer Update from Shopify to SAGE 300",
        "url": "/integration/sage-shopify/customer-update/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This document will let the users integrate updated customers...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Customer Update from Magento2 to SAGE300",
        "url": "/integration/customer-update/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "I/C Product Add from SAGE300 to Magento2",
        "url": "/integration/ic-product-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "I/C Product Add from SAGE 300 to Shopify",
        "url": "/integration/sage-shopify/ic-product-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "I/C Inventory Update from SAGE 300 to Magento2",
        "url": "/integration/ic-inventory-update/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "I/C Inventory Update from SAGE 300 to Shopify",
        "url": "/integration/sage-shopify/ic-inventory-update/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sales Order Add from Shopify to SAGE 300",
        "url": "/integration/sage-shopify/sales-order-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sales Order Add from Magento 2 to SAGE 300",
        "url": "/integration/sales-order-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This Document will let the users to understand how...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Shipment Add from SAGE 300 to Shopify",
        "url": "/integration/sage-shopify/ic-shipment-add/",
        "excerpt": "Configuring and Executing the workflow for integration requires multiples steps to perform. This section of the document will let the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Invoice  Add from SAGE 300 to Magento2",
        "url": "/integration/ic-invoice-add/",
        "excerpt": "Executing the process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Shipment Add from SAGE 300 to Magento2",
        "url": "/integration/ic-shipment-add/",
        "excerpt": "Executing the process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q1 Release Version 1.0.0-1.3.0",
        "url": "/release-notes/2014-Q1/",
        "excerpt": "During this phase we were working on features and mainly on stability of the product. We have just launched into...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q2 Release Version 1.4.0",
        "url": "/release-notes/2014-Q2/",
        "excerpt": "Product Release Version: 1.4.0 In this release we wanted to make APPSeCONNECT smooth and provide a stable release of the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q3 Release Version 2.0.0",
        "url": "/release-notes/2014-Q3/",
        "excerpt": "Product Release Version: 2.0.0 This is a major release of APPSeCONNECT where we have fixed our APPSeCONNECT SDK and released...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q4 Release Version 2.1.0",
        "url": "/release-notes/2014-Q4/",
        "excerpt": "Product Release Version: 2.1.0 This release focusses mainly on removing bugs from the product and enhancing the already existing components...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q1 Release Version 4.6.0",
        "url": "/release-notes/2020-Q1/",
        "excerpt": "Product Release Version: 4.6.0 Release notes were published and last revised in May 2020. Updates in this release include New...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Protocol Implementation for Applications",
        "url": "/processflow/protocol-implementation/",
        "excerpt": "Applications are built with protocols for making them communicate with network resources and other applications. Application like SAP Business One...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Release Notes",
        "url": "/release-notes/overview/",
        "excerpt": "Discover whats going on in APPSeCONNECT. Explore the most recent features and updates and learn more about the product enhancements,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "2020-Q2 Version 1.0 Hotfix Release Note",
        "url": "/release-notes/2020-Q2-V1.0-Hotfix/",
        "excerpt": "This document highlights the details of hotfix(s) done for the 2020 Q2 Release. This hotfix release introduces few minor improvements...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "2020-Q2 Version 2.0 Hotfix Release Note",
        "url": "/release-notes/2020-Q2-V2.0-Hotfix/",
        "excerpt": "This document highlights the details of V2.0 hotfix(s) done for the 2020 Q2 Release. This hotfix release introduces few minor...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q2 Release Version 4.7.0",
        "url": "/release-notes/2020-Q2/",
        "excerpt": "Product Release Version: 4.7.0 Release notes were published and last revised in July 2020. Updates in this release include New...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Managing - Schema & Attributes",
        "url": "/processflow/adding-schema-actions/",
        "excerpt": "The user can view the schemas present in an app and can also add schema and import schemas and attributes...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Capture Variables",
        "url": "/processflow/working-with-variable/",
        "excerpt": "APPSeCONNECT processflow allows you to create variables that captures certain values that can be reused in any part of the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Delay Node",
        "url": "/processflow/working-with-processflow-delay/",
        "excerpt": "What is Delay node? API request may have a limitation of accepting one request per second. So for implementing GET...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Technology App creation Within processflow",
        "url": "/processflow/technology-app-creation-using-processflow/",
        "excerpt": "Processflow is the advanced sync flow feature that will enable you sync node specific data from an application to multiple...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "APPSeCONNECT 2014 Release Notes",
        "url": "/release-notes/2014/",
        "excerpt": "This section will give you detailed decsription of 2014 releases. Product Release Version: 2.1.0 Product Release Version: 2.0.0 Product Release...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "APPSeCONNECT 2015 Release Notes",
        "url": "/release-notes/2015/",
        "excerpt": "This section will give you detailed decsription of 2015 releases. Product Release Version: 2.5.0 Product Release Version: 2.4.0 Product Release...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": " APPSeCONNECT 2016 Release",
        "url": "/release-notes/2016/",
        "excerpt": "This section will give you detailed decsription of 2016 releases. Product Release Version: 3.3.0 Product Release Version: 3.2.0 Product Release...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Link Order Sequencing",
        "url": "/processflow/link-order-sequencing/",
        "excerpt": "Link Ordering of Nodes for Sequential Execution processflow being the advanced sync flow feature of APPSeCONNECT, allows you to create...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q1 Release Version 3.0.0",
        "url": "/release-notes/2016-Q1/",
        "excerpt": "Product Release Version: 3.0.0 Release notes were published and last revised in April 2016. We started the new year with...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q2 Release Version 3.1.0",
        "url": "/release-notes/2016-Q2/",
        "excerpt": "Product Release Version: 3.1.0 As per our schedule, we are trying to continuously improve our platform with newer features. We...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q3 Release Version 3.2.0",
        "url": "/release-notes/2016-Q3/",
        "excerpt": "Product Release Version: 3.2.0 APPSeCONNECT being the only integration platform to support end to end business process provider, we are...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q4 Release Version 3.3.0",
        "url": "/release-notes/2016-Q4/",
        "excerpt": "Product Release Version: 3.3.0 APPSeCONNECT focusses on delivering more and more flexibility, power and ease to its users. We try...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Managing - Action, Action Filters & Error Filters",
        "url": "/processflow/manage-actions-actionfilters-errorfilters/",
        "excerpt": "Actions are certain tasks like getting data from an application or sending data to an application based on specific API...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q1 Release Version 2.2.0",
        "url": "/release-notes/2015-Q1/",
        "excerpt": "Product Release Version: 2.2.0 During the first quarter of 2015 product cycle, we wanted to give you some interesting features....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q2 Release Version 2.3.0",
        "url": "/release-notes/2015-Q2/",
        "excerpt": "Product Release Version: 2.3.0 This release mainly focusses on providing a number of new features which our users thought to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q3 Release Version 2.4.0",
        "url": "/release-notes/2015-Q3/",
        "excerpt": "Product Release Version: 2.4.0 This release mainly focusses on enhancing the APPSeCONNECT usage by providing more automation from base and...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q4 Release Version 2.5.0",
        "url": "/release-notes/2015-Q4/",
        "excerpt": "Product Release Version: 2.5.0 Bug bash release focusses mainly on removing bugs from the product and enhancing the already existing...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Processflow Packaging",
        "url": "/processflow/processflow-packaging/",
        "excerpt": "Processflow Packaging is a concept of zipping multiple ProcessFlows or Processflow folders from one organisation to another. Processflow being the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Viewing, Installing & Re-Installing processflow Packages",
        "url": "/processflow/processflow-package-installation/",
        "excerpt": "Once you are shared with packages from other organisation, you need to install the packages before working with the Processflows...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Package Sharing",
        "url": "/processflow/processflow-package-sharing/",
        "excerpt": "Packaging of processflows have enabled the users to zip multiple processflows. The main goal to create packages was to share...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "APPSeCONNECT Glossary",
        "url": "/glossary/appseconnect-glossary/",
        "excerpt": "APPSeCONNECT APPSeCONNECT is an Integration Platform through which one can connect Enterprise Business Applications, like Back Office ERP systems (SAP...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Glossary",
        "url": "/glossary/glossary/",
        "excerpt": "Here you will view the list of Glossary which is enlisted in the section. Read our full glossary to learn...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Company Add from Magento2 to SAGE 300",
        "url": "/integration/company-add/",
        "excerpt": "Executing the Process is a vital part when integrating any applications. This section of the document will let the users...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "ZohoBooks",
        "url": "/connectors/zohobooks/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is Zohobooks credentials need...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Packaging Overview",
        "url": "/processflow/processflow-packaging-overview/",
        "excerpt": "Zipping up of multiple files in packages makes it easy to reuse and share with different users. Huge set of...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Merger Node",
        "url": "/processflow/working-with-revamped-merger/",
        "excerpt": "What is Merger Node? Merger Node integrates data documents into a single data packet, in order to avoid multiple hits...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Unfinished Deployment",
        "url": "/processflow/unfinished-deployment/",
        "excerpt": "Unfinished Deployment functionality enables the user to track the undeployed processflows, and inturn aids you to check the status of...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q3 Release Version 4.8.0",
        "url": "/release-notes/2020-Q3/",
        "excerpt": "Product Release Version: 4.8.0 Release notes were published and last revised in October 2020. Updates in this release include New...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "SAP Business One Service Layer",
        "url": "/connectors/Sap-Business-One-Service-Layer/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is SAP Business One...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Copy Processflow",
        "url": "/processflow/copy-processflow/",
        "excerpt": "Processflows in APPSeCONNECT is a very robust feature that helps you integrate your applications with ease. It always beneficial to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "2020-Q3 Version 1.0 Hotfix Release Note",
        "url": "/release-notes/2020-Q3-V1.0-Hotfix/",
        "excerpt": "This document highlights the details of hotfix(s) done for the 2020 Q3 Release. This hotfix release introduces few minor improvements...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Return Response Node",
        "url": "/processflow/working-with-Return-Response-Node/",
        "excerpt": "What is Return Response Node? Return Response Node is a confirmation node that returns back an acknowledgement information to your...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Start Node",
        "url": "/processflow/working-with-Start-Node/",
        "excerpt": "What is Start Node? Start Node node intitates the ignition of the Start process and Trigger Type of the ProcessFlow....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Generic NAV 2013R2 Extension",
        "url": "/connectors/generic-nav2013-R2-extension/",
        "excerpt": "Here you will get the step by step process to use NAV 2015 Extension as and when required in the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Function Code Validation",
        "url": "/processflow/Function-Code-Validation/",
        "excerpt": "This section of the document will allow you to gain knowledge on the code editor and the validation process the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Lisitng & Editing User Defined Appresource Functions",
        "url": "/processflow/Listing-Editing-user-defined-functions/",
        "excerpt": "End Users will be listed with the Functions that they have created in the UDF Listing window. Every functions listed...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "User Defined Runtime  Filter",
        "url": "/processflow/User-Defined-Dynamic-Filter/",
        "excerpt": "As ActionFilters are the commands for the applications to perform specific integration operations. Using ProcessFlows, you can now implement Runtime...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Q1 Release Version 4.10.0",
        "url": "/release-notes/2021-Q1/",
        "excerpt": "Product Release Version: 4.10.0 Release notes were published and last revised in April 2021. Updates in this release include New...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "2021-Q1 Version 1.0 Hotfix Release Note",
        "url": "/release-notes/2021-Q1-V1.0-Hotfix/",
        "excerpt": "This document highlights the details of hotfix(s) done for the 2021 Q1 Release. This hotfix release introduces few improvements and...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      }
    
  ]

$(document).ready(function () {
    $('input#search').on('keyup', function () { 
        $("#searchFound").addClass('hideBox');
    var resultdiv = $('#results');
    var query = $(this).val();
        var result = idx.search(query);
        if (result.length == 0) {
            $("#searchNotFound").removeClass('hideBox');
            $("#results").addClass('hideBox');
            return false;
        }
        $("#searchNotFound").addClass('hideBox');
        $("#results").removeClass('hideBox');
    resultdiv.empty();
        resultdiv.prepend('<p class="results__found">' + result.length + ' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
