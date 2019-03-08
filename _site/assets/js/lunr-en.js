var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  

  
  
    idx.add({
      title: "Adapter",
      excerpt: "This course will help in developing initial platform understanding…\n",
      categories: [],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "Environment",
      excerpt: "This help you understanding the debugging option to maintain environments…\n",
      categories: [],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "Platform",
      excerpt: "Understanding rules and notification framework in APPSeCONNECT…\n",
      categories: [],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Rules",
      excerpt: "This course will help in developing initial platform understanding…\n",
      categories: [],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Touchpoint",
      excerpt: "This course will help in developing initial platform understanding…\n",
      categories: [],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Workflow",
      excerpt: "This course will help in developing initial platform understanding…\n",
      categories: [],
      tags: [],
      id: 5
    });
    
  

  
  
    idx.add({
      title: "SDK Overview",
      excerpt: "APPSeCONNECT is a generic platform that helps a developer as well as an integration consultant to work on specific application,...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 6
    });
    
  
    idx.add({
      title: "Overview on adapter development",
      excerpt: "Adapter in terms of APPSeCONNECT is a piece of software component external to the application core is plugged in to...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 7
    });
    
  
    idx.add({
      title: "Overview on plugin development",
      excerpt: "Plugins are a piece of software which lets to tightly couple with the platform to enhance the platform and /...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 8
    });
    
  
    idx.add({
      title: "Overview on policies development",
      excerpt: "Policies are special modules which hooks over an Http pipeline of API execution. In addition to prebuilt policies, APPSeCONNECT also...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 9
    });
    
  
    idx.add({
      title: "Implementing Pull and Push functions",
      excerpt: "It is evident that implementating adapter requires extensive knowledge about the API which you want to connect to, such that...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 10
    });
    
  
    idx.add({
      title: "Implementing Event-driven integration",
      excerpt: "An integration is generally scheduled at an interval or a specific time such that the data is pulled from the...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 11
    });
    
  
    idx.add({
      title: "How to design an interface for Credentials",
      excerpt: "APPSeCONNECT adapter development SDK allows one to implement and create user interface for credentials. In case of OnPremise agent, you...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 12
    });
    
  
    idx.add({
      title: "Developing APPResource Methods",
      excerpt: "Application resources are special methods that can be added on the adapter code using the interface IAppResources which can be...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 13
    });
    
  
    idx.add({
      title: "Handling various events of Adapter",
      excerpt: "APPSeCONNECT provides a number of events which you as a developer can hook into, to write code specially when the...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 14
    });
    
  
    idx.add({
      title: "How to test an Adapter",
      excerpt: "Adapter development is a common practice, and one of the most challenging thing to do is to debug an adapter...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 15
    });
    
  
    idx.add({
      title: "Implementing Action filter Parser",
      excerpt: "Action filters are special hierarchical key-value data store for each integration points which provides functionality to have hierarchy and can...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 16
    });
    
  
    idx.add({
      title: "Logging and Tracing",
      excerpt: "Adapter works on background always to communicate data between application and APPSeCONNECT. As there are a large part of code...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 17
    });
    
  
    idx.add({
      title: "Storing Transactional Data",
      excerpt: "Adapter supports a number of storages which you can make use of to perform various tasks. For an adapter developer,...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 18
    });
    
  
    idx.add({
      title: "Overview of API Management",
      excerpt: "Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 19
    });
    
  
    idx.add({
      title: "Steps to Register URL",
      excerpt: "Steps to Register URL If you do not have a registered URL with APPSeCONNECT you have to Register a URL...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 20
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our API management system. Webhook API -...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 21
    });
    
  
    idx.add({
      title: "Steps to User Authentication",
      excerpt: "User Authentication is now done in the API Level to ensure Authenticated Approach when working with Proxy API, Swagger Documentation...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 22
    });
    
  
    idx.add({
      title: "Overview of APPSeCONNECT",
      excerpt: "APPSeCONNECT is provider of both hybrid and cloud hosted applications which can connect two or more applications irrespective of ERP,...",
      categories: [],
      tags: ["developers"],
      id: 23
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 24
    });
    
  
    idx.add({
      title: "Quickstart guides to create APIs",
      excerpt: "API Management of APPSeCONNECT helps an organization to create, maintain and publish APIs for their various data sources such that...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 25
    });
    
  
    idx.add({
      title: "Common Use Cases for API management",
      excerpt: "APIs are tje central to any application development process. As data forms an important part of any business it is...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 26
    });
    
  
    idx.add({
      title: "Getting Started to APPSeCONNECT",
      excerpt: "CUSTOMER PROFILE INFORMATION This section enables you to quickly access your profile after logging into the application. This is where...",
      categories: [],
      tags: ["developers"],
      id: 27
    });
    
  
    idx.add({
      title: " Creating proxy endpoint",
      excerpt: "Proxies are the full REST (Representational State Transfer) services which allows to create proxy over a set of existing data...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 28
    });
    
  
    idx.add({
      title: " Creating Webhook endpoint",
      excerpt: "Webhooks are custom callbacks from an application which is generated by the caller and data is pushed to all of...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 29
    });
    
  
    idx.add({
      title: "Create Api Using Custom Datasource",
      excerpt: "title: “Create API to Connect On-premise Database” toc: true tag: developers APIs is required when you don’t have an existing...",
      categories: [],
      tags: [],
      id: 30
    });
    
  
    idx.add({
      title: "Transformation",
      excerpt: "This document will help you to understand and work with the MAPPING and TRANSFORMATION functionality in APPSeCONNECT portal. Primarily transformation...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 31
    });
    
  
    idx.add({
      title: "Basics of Source-Destination Mapping",
      excerpt: "Mapping triggers the transformation process between the Source and the Destination Applications. Source and destination schemas are mapped in the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 32
    });
    
  
    idx.add({
      title: "Steps to define logic over destination mapping",
      excerpt: "Steps to define logic over destination mapping Mapping in APPSeCONNECT is done so that a Source Application can communicate with...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 33
    });
    
  
    idx.add({
      title: "Grouping of Conditions",
      excerpt: "What is Grouping of Conditions Mapping can have multiple condition that are interlinked or grouped. Scenario might require more than...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 34
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "Workflow is a visual representation of a business process integration, which helps you as an user to orchestrate a business...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 35
    });
    
  
    idx.add({
      title: "Overview of Workflows",
      excerpt: "Workflow is group of instructions to the integration service in APPSeCONNECT. APPSeCONNECT workflow application can be considered as a strong...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 36
    });
    
  
    idx.add({
      title: "Create Api Connecting To Api",
      excerpt: "\ntitle: “Create API proxy existing API”\ntoc: true\ntag: developers\n",
      categories: [],
      tags: [],
      id: 37
    });
    
  
    idx.add({
      title: "Quickstart guides to create Workflow",
      excerpt: "Workflows are the diagrammatic representation of a business process. As an organization, you can have a number of business processes...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 38
    });
    
  
    idx.add({
      title: "Steps to choose your workflow",
      excerpt: "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 39
    });
    
  
    idx.add({
      title: "Policy Overview",
      excerpt: "Policies are hooks to an API which you can punch at differnt levels of execution. They are powerful capabilities to...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 40
    });
    
  
    idx.add({
      title: "Throttling policy",
      excerpt: "Throttling policy prevents an API usage spikes on per API version basis, such that if the same API is getting...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 41
    });
    
  
    idx.add({
      title: "Create API to consume Webhooks",
      excerpt: "\n",
      categories: ["API-Management"],
      tags: ["developers","usecases"],
      id: 42
    });
    
  
    idx.add({
      title: "Steps to create your first workflow",
      excerpt: "Introduction This section will guide you through workflow creation &amp; configuration in simple steps. By reading this section of the...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 43
    });
    
  
    idx.add({
      title: "Filter Request by IP policy",
      excerpt: "The IP Restrict Policy is used to restrict the access of an API Proxy by limiting the number of IP...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 44
    });
    
  
    idx.add({
      title: "Deploying & Executing workflows",
      excerpt: "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 45
    });
    
  
    idx.add({
      title: "Data-view process of workflow snapshot",
      excerpt: "Snapshot in Workflow gives complete overview of the transactions made through it. A transaction in workflow means an an unique...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 46
    });
    
  
    idx.add({
      title: "Nodes and Link overview",
      excerpt: "Workflow in APPSeCONNECT generates flow that executes integration endpoints one by one through our Micro-service architecture and updates business data...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 47
    });
    
  
    idx.add({
      title: "GET Node",
      excerpt: "What is Get Node? GET node is used for getting data from an application by using the API provided by...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 48
    });
    
  
    idx.add({
      title: "PROCESS Node",
      excerpt: "What is Process Node? PROCESS node is used for transforming data from one format to another format based on the...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 49
    });
    
  
    idx.add({
      title: "Attribute Mapping of workflow",
      excerpt: "An implementer will be able to have a source to destination mapping, such that complex data transformation could be performed...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 50
    });
    
  
    idx.add({
      title: "Validate http headers policy",
      excerpt: "Validate HTTP Header policy inspects each HTTP Request whether the HTTP Request contains a particular Request Header and the corresponding...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 51
    });
    
  
    idx.add({
      title: "POST Node",
      excerpt: "What is Post Node? POST node is used for pushing data to an application based on the API provided by...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 52
    });
    
  
    idx.add({
      title: "Debugging workflows",
      excerpt: "As workflow provides end to end business flow mapping, debugging and changing workflow mapping and links is often a business...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 53
    });
    
  
    idx.add({
      title: "Compression Policy",
      excerpt: "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 54
    });
    
  
    idx.add({
      title: "FILTER Node",
      excerpt: "What is filter node? This node is used to fetch a subset of data from an original data packet based...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 55
    });
    
  
    idx.add({
      title: "Response content type conversion policy",
      excerpt: "Reponses Content type conversion policy is a type of outbound policy. It can be configured for the output format such...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 56
    });
    
  
    idx.add({
      title: "DELAY Node",
      excerpt: "What is Delay node? DELAY node is used to delay or stop an execution flow for a specific period. For...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 57
    });
    
  
    idx.add({
      title: "Configuring APPSeCONNECT for API Hosting",
      excerpt: "APPSeCONNECT is a platform which allows hosting of APIs such that the hosted APIs could run independently. Configuring APPSeConnect For...",
      categories: ["API-Management"],
      tags: ["developers","implementation"],
      id: 58
    });
    
  
    idx.add({
      title: "Decision Node",
      excerpt: "What is Decision Node? This node is used for decision making during workflow execution. A decision can be applied on...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 59
    });
    
  
    idx.add({
      title: "HALT/RESUME Node",
      excerpt: "What is halt-resume node HALT and RESUME nodes are used in a combination. We implement HALT node to halt the...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 60
    });
    
  
    idx.add({
      title: "Working with Loops",
      excerpt: "What is Loop Node? In APPSeCONNECT Workflow using a Self-loop, we can repeatedly execute an individual node without affecting the...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 61
    });
    
  
    idx.add({
      title: "Merge Node",
      excerpt: "What is Merge Node? This node is used to merge smaller data chunks into a single data packet. Like a...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 62
    });
    
  
    idx.add({
      title: "Sequencer Node",
      excerpt: "What is Sequencer Node? This node is used to order elements by a certain attribute. This node can be applied...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 63
    });
    
  
    idx.add({
      title: "Splitter Node",
      excerpt: "What is Splitter Node? This node is used to split a data packet into smaller chunks for processing in small...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 64
    });
    
  
    idx.add({
      title: "Choose Applications from catalog",
      excerpt: "API Proxies are API services which one can create to connect to a remote data source or multiple data sources....",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 65
    });
    
  
    idx.add({
      title: "Workflow Actions",
      excerpt: "Why do you need action? Workflow is capable of generating action by placing an action node directly on the workflow...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 66
    });
    
  
    idx.add({
      title: "Sending Emails",
      excerpt: "Email Action Notification This node is used to send an email notification to a user during workflow execution. For example...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 67
    });
    
  
    idx.add({
      title: "Generating Support tickets",
      excerpt: "Support Ticket Notification Using this node user can create a support ticket during workflow execution. For example, after data is...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 68
    });
    
  
    idx.add({
      title: "Webhook callback",
      excerpt: "Webhook Callback Action The concept of a WebHook is simple. A webhook occurs when something happens; it is a simple...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 69
    });
    
  
    idx.add({
      title: "Storing Files",
      excerpt: "Storage Action Using this node user can store data in text file during workflow execution for future reference. Created file...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 70
    });
    
  
    idx.add({
      title: "Connecting an API to any data source",
      excerpt: "In today’s world,organizations are having multiple data sources.With distrubuted architechture in place,these data sources are existing independently and scatteredly.It can...",
      categories: ["API-Management"],
      tags: ["developers","implementation"],
      id: 71
    });
    
  
    idx.add({
      title: "Deploy and publish APIs to different environments",
      excerpt: "Deploying and publishing API is one of the primary concern after you have successfully configured an API on your API...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 72
    });
    
  
    idx.add({
      title: "Basic Workflow for Customer Downloading",
      excerpt: "Use Case Name Basic Workflow for Customer Downloading. Brief Description This is a basic workflow where the user can download...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 73
    });
    
  
    idx.add({
      title: "Common Use Cases for Workflow management",
      excerpt: "Workflow Use Cases for specific business scenario Workflow signifies the definition, execution, and automation of business processes where tasks and...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 74
    });
    
  
    idx.add({
      title: "Delay execution workflow",
      excerpt: "Use Case Name Workflow with delay execution filter Brief Description This workflow enables the user to configure a task and...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 75
    });
    
  
    idx.add({
      title: "Workflow creation & execution with splitter",
      excerpt: "Use Case Name Workflow showing task configuration with splitter rule Brief Description This workflow enables the user to add business...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 76
    });
    
  
    idx.add({
      title: "Workflow for adding sales order",
      excerpt: "Use Case Name Creating a Workflow for sales order Brief Description This is a workflow where the user can add...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 77
    });
    
  
    idx.add({
      title: " Workflow execution with data filteration",
      excerpt: "Use Case Name Workflow creation with data filteration Brief Description This workflow enables the user to add customer in Ecommerce...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 78
    });
    
  
    idx.add({
      title: "Workflow for product upload and stock sync",
      excerpt: "Use Case Name Workflow creation with Product upload and stock synchronization-post task scenario Brief Description This workflow enables the user...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 79
    });
    
  
    idx.add({
      title: " Workflow execution with acknowledgement data",
      excerpt: "Use Case Name Workflow showing task configuration with acknowledgement data Brief Description This workflow enables the user to add payment...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 80
    });
    
  
    idx.add({
      title: "Workflow showing salescycle with post and post task inputs",
      excerpt: "Use Case Name Workflow creation of sales cycle with post and post task inputs Brief Description This workflow enables the...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 81
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow A flow or...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 82
    });
    
  
    idx.add({
      title: "Frequently asked questions",
      excerpt: "FAQ is the best way to address frequently asked questions about your business, of course. This section contains list of...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 83
    });
    
  
    idx.add({
      title: "Troubleshooting of Workflows",
      excerpt: "This topic describes common problems that can occur when you develop and test a workflow in AEC Portal. Given below...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 84
    });
    
  
    idx.add({
      title: "Frequently asked questions",
      excerpt: "FAQ is the best way to address frequently asked questions about your business. This section contains list of questions and...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 85
    });
    
  
    idx.add({
      title: "Create API to Quota Management Access Restriction",
      excerpt: "Use Case Name API to Quota Management Access Restriction Brief Description This is a api which the user can create...",
      categories: ["API-Management"],
      tags: ["developers","usecases"],
      id: 86
    });
    
  
    idx.add({
      title: "Create Swagger Documentation",
      excerpt: "Swagger is an Open Source Framework for the documentation of API. Swagger is a tools which enables you to generate,...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 87
    });
    
  
    idx.add({
      title: "Overview of Deployment",
      excerpt: "The APPSeCONNECT Platform either for cloud or on-premise integration is a fully integrated solution that enables organizations to design, develop,...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 88
    });
    
  
    idx.add({
      title: "Getting started with deployment",
      excerpt: "This section lets you get started with the deploying processes and components to an environment for APPSeCONNECT. APPSeCONNECT Components for...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 89
    });
    
  
    idx.add({
      title: "Deployment Configuration",
      excerpt: "APPSeCONNECT is of Hybrid Architecture and the data can be integrated both on the CLOUD PORTAL and in OP Agent....",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 90
    });
    
  
    idx.add({
      title: "Environment Overview",
      excerpt: "Environment is the area in the AEC portal where an user can configure and control the agents that are being...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 91
    });
    
  
    idx.add({
      title: "Overview of Plugin",
      excerpt: "A plugin is any kind of an addon or an extension software component that adds a specific feature to an...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 92
    });
    
  
    idx.add({
      title: "Agent Blocking & Unblocking",
      excerpt: "APPSeCONNECT is of Hybrid Architecture and the data can be integrated both from the CLOUD PORTAL as well as from...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 93
    });
    
  
    idx.add({
      title: "HANA Plugin",
      excerpt: "Working with SAP HANA Database requires SAP HANA Plugin that needs to be installed in the agent. HANA Plugin is...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 94
    });
    
  
    idx.add({
      title: "MYSQL Plugin",
      excerpt: "Working with MySQL Database requires MySQL Plugin that needs to be installed in the agent. MySQL Plugin is now pre-packaged...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 95
    });
    
  
    idx.add({
      title: "Cors policy",
      excerpt: "Cross-Origin Resource Sharing (CORS) Policy is a mechanism which allows restriction to domain access. Domains configured by the User is...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 96
    });
    
  
    idx.add({
      title: "OLEDB Plugin",
      excerpt: "Plugin for AEC Database of Agent to Support any DBMS at client side/client server such that AEC can support databases...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 97
    });
    
  
    idx.add({
      title: "Overview of Application Connectors",
      excerpt: "An Application connectors are Pre-built optimized solution developed by APPSeCONNECT backend developer team and tested in real-life scenarios. If you...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 98
    });
    
  
    idx.add({
      title: "Priority",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Priority, such as...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 99
    });
    
  
    idx.add({
      title: "Shopify",
      excerpt: "Application configuration is an intregal activity prior to the process of integration. If your choosen application is Shopify, such as...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 100
    });
    
  
    idx.add({
      title: "Overview of Custom Connectors",
      excerpt: "APPSeCONNECT requires connectivity to the application such that it can retrieve or send data to the application or data sources....",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 101
    });
    
  
    idx.add({
      title: "Overview of Connectors",
      excerpt: "AEC Connectors acts like a bridge to create connection between applications that connects different data sources both on-premise or in...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 102
    });
    
  
    idx.add({
      title: "Magento2",
      excerpt: "Application configuration is an intregal activity prior to the process of integration. If your choosen application is Magento 2, providing...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 103
    });
    
  
    idx.add({
      title: "Overview of Technology Connectors",
      excerpt: "Connectors are part of the communication bridge that connects different data sources both on-premise or in cloud (exposed to WWW)...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 104
    });
    
  
    idx.add({
      title: "Overview of OLEDB Adapters",
      excerpt: "Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate and adapt with the AEC Portal....",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 105
    });
    
  
    idx.add({
      title: "Settings",
      excerpt: "Settings panel of AEC Agent enables to change the default settings after the initial setup and installation of the agent....",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 106
    });
    
  
    idx.add({
      title: "Prerequisite",
      excerpt: "Adapter represents an interface between an APP and APPSeCONNECT. An adapter is the most important component which connects your app...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 107
    });
    
  
    idx.add({
      title: "Adding Credentials",
      excerpt: "How to add credential for On-premise integration Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 108
    });
    
  
    idx.add({
      title: "Troubleshooting",
      excerpt: "While executing the integration process on the OP Agent, you may face Techno-Functionality errors common to executing the agent. Given...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 109
    });
    
  
    idx.add({
      title: "Development Guidelines",
      excerpt: "Pascal Case and CamelCase Pascal Casing - First character of all words are Upper Case and other characters are lower...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 110
    });
    
  
    idx.add({
      title: "Using Filters for Integration",
      excerpt: "Users can define Filters for integration scenario as per business requirements for the GET, POST and PUT operation. This section...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 111
    });
    
  
    idx.add({
      title: "Version & Library Function Update",
      excerpt: "This section of the document provides you the full details of using Assembly Version Extraction and the process of uploading...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 112
    });
    
  
    idx.add({
      title: "Upgradation & Migration",
      excerpt: "With every update AEC Agent need upgradation to a higher version without losing any data in the agent. This upgradation...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 113
    });
    
  
    idx.add({
      title: "Best practices",
      excerpt: "Let us discuss some of the Do’s and Don’ts that one need to maintain while developing an Adapter in APPSeCONNECT...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 114
    });
    
  
    idx.add({
      title: "Postrequisites",
      excerpt: "An admin or an end-user can upload updated adapter to an existing app such that the adapter can be changed...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 115
    });
    
  
    idx.add({
      title: "Upgrading and Re-versioning",
      excerpt: "APPSeCONNECT Component Version Pattern contains four numbers, which convey the following information: Pattern- (1st-Number).(2nd-Number).(3rd-Number).(4th-Number) From left to right the numbers...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 116
    });
    
  
    idx.add({
      title: "Deploying",
      excerpt: "Environment section of APPSeCONNECT allows the user to deploy configurations and adapters. In case of APPSeCONNECT, you will automatically get...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 117
    });
    
  
    idx.add({
      title: "Using parameters to an API",
      excerpt: "This Document provides the details and the functionality aspect of the API components to define static and dynamic criterias for...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 118
    });
    
  
    idx.add({
      title: "Uniconta",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Uniconta credentials need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 119
    });
    
  
    idx.add({
      title: "ZohoCRMV2.0",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is ZohoCRMV2 credentials need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 120
    });
    
  
    idx.add({
      title: "Adding Product in Priority",
      excerpt: "Prerequisites for adding products: You need a valid Priority Account. Steps to Add Products in Priority: Login to the Priority...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 121
    });
    
  
    idx.add({
      title: "Updating Inventory in Priority",
      excerpt: "Prerequisites for Updating Inventory Need to have a valid Priority Account. Need to have the product registered before updating the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 122
    });
    
  
    idx.add({
      title: "Adding Product in Sage300",
      excerpt: "Prerequisites for adding Product/Items in SAGE 300 Need to have a valid SAGE 300 account. Steps to Add Product/Items in...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 123
    });
    
  
    idx.add({
      title: "Updating Inventory in Sage300",
      excerpt: "Prerequisites for Updating Inventory in SAGE300 Need a valid SAGE 300 account. Need the server access to SAGE 300. Need...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 124
    });
    
  
    idx.add({
      title: "Adding Account in Zoho",
      excerpt: "Prerequisites Need to have a valid ZOHO CRM account. Need to have a customer for registering. Steps to add new...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 125
    });
    
  
    idx.add({
      title: "Troubleshooting",
      excerpt: "Prerequisites for Intergration Scenarios View the Generated Packet to know where the error occurred (GET or PROCESS or POST). View...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 126
    });
    
  
    idx.add({
      title: "Troubleshooting",
      excerpt: "Prerequisites for Intergration Scenarios View the Generated Packet to know where the error occurred (GET or PROCESS or POST). View...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 127
    });
    
  
    idx.add({
      title: "Getting Started",
      excerpt: "Getting started section of the mapping will help you to understand the main areas you should be familiar with before...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 128
    });
    
  
    idx.add({
      title: "Types of Mapping",
      excerpt: "APPSeCONNECT Mapping Types are given below: 1. Hard Coded Mapping - Hardcoded mapping is implemented when it is required that...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 129
    });
    
  
    idx.add({
      title: "Understanding Attribute Mapping",
      excerpt: "Behind every application integration, there is a business logic. APPSeCONNECT stores this integration logic in the form of data. Attribute...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 130
    });
    
  
    idx.add({
      title: "Understanding XML and Xpath",
      excerpt: "Understanding XML XML stands for eXtensible Markup Language. XML was designed to store and transport data. It is a textual...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 131
    });
    
  
    idx.add({
      title: "Understanding Components of Mapping",
      excerpt: "Mapping triggers the transformation process between the Source and the Destination Applications. Source and destination schemas are mapped in the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 132
    });
    
  
    idx.add({
      title: "Steps to Customize Prebuilt Mapping/Attribute mapping",
      excerpt: "The data coming from the source schema requires to be transformed individually such that it matches the format of the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 133
    });
    
  
    idx.add({
      title: "Understanding Touchpoint Dependencies",
      excerpt: "Touchpoints are the point of action which when triggered transfers informations between the schema/entities. This happens when the attributes of...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 134
    });
    
  
    idx.add({
      title: "Getting Started with Mapping",
      excerpt: "\n",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 135
    });
    
  
    idx.add({
      title: "Advance Mapping through Custom Renderer",
      excerpt: "Use Case Name Advanced Mapping Through Renderer Brief Description This feature enables the user to alter the default XML structure...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 136
    });
    
  
    idx.add({
      title: "Mapping from Schema 1 to Schema 2",
      excerpt: "Use-Case Name Attribute Mapping with Schema 1 (OLEDB Technology APP) and Schema 2 (REST Application - Magento 2) Brief Description...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 137
    });
    
  
    idx.add({
      title: "Enabling Tracking in Transformation",
      excerpt: "Use Case Name Enabling Tracking in transformation. Brief Description Tracking is a feature in APPSeCONNECT which lets the user view...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 138
    });
    
  
    idx.add({
      title: "Handling Variables and Functions",
      excerpt: "Use Case Name Handling Root Variables and Functions Brief Description Root Variables are the variables that stores the data that...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 139
    });
    
  
    idx.add({
      title: "Using Lookups Mapping for Value Interchange",
      excerpt: "Use Case Name Using Lookups Mapping for Value Interchange Brief Description Lookups Mapping is a feature in APPSeCONNECT which enables...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 140
    });
    
  
    idx.add({
      title: "Handling Delta - data",
      excerpt: "\n",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 141
    });
    
  
    idx.add({
      title: "Handling Dependent data",
      excerpt: "\n",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 142
    });
    
  
    idx.add({
      title: "Using library methods",
      excerpt: "\n",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 143
    });
    
  
    idx.add({
      title: "Working with Schema, Action & Filter ",
      excerpt: "Knowing Schema, Actions &amp; Filters The user can view the schemas and the action present or can also add schema...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 144
    });
    
  
    idx.add({
      title: "Adding Employee in BambooHR",
      excerpt: "Prerequisites Need to have a valid account in BambooHR Steps to add a new employee in BambooHR Login to the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 145
    });
    
  
    idx.add({
      title: "BambooHR",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your choosen application is Bamboo HR, such...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 146
    });
    
  
    idx.add({
      title: "SAP Business One",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is SAP Business One,...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 147
    });
    
  
    idx.add({
      title: "Dynamics NAV Business Central",
      excerpt: "Application configuration is an integral activity prior to the process of integration. If your chosen application is Microsoft Dynamics Business...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 148
    });
    
  
    idx.add({
      title: "Generic NAV 2009R2 Extension",
      excerpt: "Here you will get the step by step process to use NAV 2009R2 Extension as and when required in the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 149
    });
    
  
    idx.add({
      title: "Generic NAV 2015 Extension",
      excerpt: "Here you will get the step by step process to use NAV 2015 Extension as and when required in the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 150
    });
    
  
    idx.add({
      title: null,
      excerpt: "Integrating with WooCommerce, requires an APPSeCONNECT Plugin/Extension to be uploaded and installed in the WooCommerce Website. This document demonstrates as...",
      categories: [],
      tags: null,
      id: 151
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
  
    
    
    
      
      {
        "title": "Adapter",
        "url": "/sources/listcourses/adapter",
        "excerpt": "This course will help in developing initial platform understanding…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Environment",
        "url": "/sources/listcourses/environment",
        "excerpt": "This help you understanding the debugging option to maintain environments…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Platform",
        "url": "/sources/listcourses/platform",
        "excerpt": "Understanding rules and notification framework in APPSeCONNECT…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Rules",
        "url": "/sources/listcourses/rules",
        "excerpt": "This course will help in developing initial platform understanding…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Touchpoint",
        "url": "/sources/listcourses/touchpoint",
        "excerpt": "This course will help in developing initial platform understanding…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow",
        "url": "/sources/workflow-course/",
        "excerpt": "This course will help in developing initial platform understanding…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
  
    
    
    
      
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
        "title": "Overview of APPSeCONNECT",
        "url": "/home/",
        "excerpt": "APPSeCONNECT is provider of both hybrid and cloud hosted applications which can connect two or more applications irrespective of ERP,...",
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
        "excerpt": "API Management of APPSeCONNECT helps an organization to create, maintain and publish APIs for their various data sources such that...",
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
        "title": "Getting Started to APPSeCONNECT",
        "url": "/getting-started/",
        "excerpt": "CUSTOMER PROFILE INFORMATION This section enables you to quickly access your profile after logging into the application. This is where...",
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
        "title": " Creating Webhook endpoint",
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
        "excerpt": "Steps to define logic over destination mapping Mapping in APPSeCONNECT is done so that a Source Application can communicate with...",
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
        "title": "Quickstart guides to create Workflow",
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
        "title": "Deploying & Executing workflows",
        "url": "/workflow/deploying-and-executing/",
        "excerpt": "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
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
        "excerpt": "An implementer will be able to have a source to destination mapping, such that complex data transformation could be performed...",
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
        "title": "POST Node",
        "url": "/workflow/working-with-post/",
        "excerpt": "What is Post Node? POST node is used for pushing data to an application based on the API provided by...",
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
        "title": "Compression Policy",
        "url": "/api-management/compression-apply/",
        "excerpt": "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
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
        "title": "Configuring APPSeCONNECT for API Hosting",
        "url": "/api-management/configure-appseconnect-for-apis/",
        "excerpt": "APPSeCONNECT is a platform which allows hosting of APIs such that the hosted APIs could run independently. Configuring APPSeConnect For...",
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
        "title": "HALT/RESUME Node",
        "url": "/workflow/working-with-halt-resume/",
        "excerpt": "What is halt-resume node HALT and RESUME nodes are used in a combination. We implement HALT node to halt the...",
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
        "title": "Merge Node",
        "url": "/workflow/working-with-merger/",
        "excerpt": "What is Merge Node? This node is used to merge smaller data chunks into a single data packet. Like a...",
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
        "title": "Sending Emails",
        "url": "/workflow/generating-notification-emails/",
        "excerpt": "Email Action Notification This node is used to send an email notification to a user during workflow execution. For example...",
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
        "title": "Deploy and publish APIs to different environments",
        "url": "/api-management/deployments-and-environments/",
        "excerpt": "Deploying and publishing API is one of the primary concern after you have successfully configured an API on your API...",
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
        "url": "/deployment/Enviornment-Overview/",
        "excerpt": "Environment is the area in the AEC portal where an user can configure and control the agents that are being...",
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
        "url": "/connectors/priority/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is Priority, such as...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Shopify",
        "url": "/connectors/shopify/",
        "excerpt": "Application configuration is an intregal activity prior to the process of integration. If your choosen application is Shopify, such as...",
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
        "excerpt": "Application configuration is an intregal activity prior to the process of integration. If your choosen application is Magento 2, providing...",
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
        "excerpt": "How to add credential for On-premise integration Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to...",
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
        "title": "Uniconta",
        "url": "/connectors/uniconta/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is Uniconta credentials need...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "ZohoCRMV2.0",
        "url": "/connectors/zohocrmv2/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is ZohoCRMV2 credentials need...",
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
        "excerpt": "Prerequisites Need to have a valid ZOHO CRM account. Need to have a customer for registering. Steps to add new...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Troubleshooting",
        "url": "/transformation/appresource-functions/",
        "excerpt": "Prerequisites for Intergration Scenarios View the Generated Packet to know where the error occurred (GET or PROCESS or POST). View...",
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
        "excerpt": "Touchpoints are the point of action which when triggered transfers informations between the schema/entities. This happens when the attributes of...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Getting Started with Mapping",
        "url": "/transformation/understanding-mapping-syntax/",
        "excerpt": "\n",
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
        "title": "Enabling Tracking in Transformation",
        "url": "/transformation/enable-tracking-fields/",
        "excerpt": "Use Case Name Enabling Tracking in transformation. Brief Description Tracking is a feature in APPSeCONNECT which lets the user view...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Handling Variables and Functions",
        "url": "/transformation/handling-variables-and-functions/",
        "excerpt": "Use Case Name Handling Root Variables and Functions Brief Description Root Variables are the variables that stores the data that...",
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
        "title": "Handling Delta - data",
        "url": "/transformation/handling-delta-data/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Handling Dependent data",
        "url": "/transformation/handling-dependent-data/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Using library methods",
        "url": "/transformation/using-library-methods/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Schema, Action & Filter ",
        "url": "/transformation/working-with-schemas-action-filter/",
        "excerpt": "Knowing Schema, Actions &amp; Filters The user can view the schemas and the action present or can also add schema...",
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
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your choosen application is Bamboo HR, such...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "SAP Business One",
        "url": "/connectors/sap-business-one/",
        "excerpt": "Application configuration is an integral activity prior to the process of integration. If your chosen application is SAP Business One,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Dynamics NAV Business Central",
        "url": "/connectors/dynamicsnav-business-central/",
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
        "title": null,
        "url": "/2019-03-04-woocommerce-plugin-extension-upload/",
        "excerpt": "Integrating with WooCommerce, requires an APPSeCONNECT Plugin/Extension to be uploaded and installed in the WooCommerce Website. This document demonstrates as...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      }
    
  ]

$(document).ready(function () {
    $('input#search').on('keyup', function () {
        debugger;
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
