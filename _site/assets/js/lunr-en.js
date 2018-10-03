var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "What is an Adapter",
      excerpt: "Minimal Mistakes has been developed as a Jekyll theme gem for easier use. It is also 100% compatible with GitHub...",
      categories: ["Developing Adapter for APPSeCONNECT"],
      tags: ["developers"],
      id: 0
    });
    
  
    idx.add({
      title: "How to develop an Adapter",
      excerpt: "\n",
      categories: ["Developing Adapter for APPSeCONNECT"],
      tags: ["developers"],
      id: 1
    });
    
  
    idx.add({
      title: "How to test an Adapter",
      excerpt: "\n",
      categories: ["Developing Adapter for APPSeCONNECT"],
      tags: ["developers,reseller"],
      id: 2
    });
    
  
    idx.add({
      title: "What is an Resource",
      excerpt: "\n",
      categories: ["Developing Resources for APPSeCONNECT"],
      tags: ["developers"],
      id: 3
    });
    
  
    idx.add({
      title: "How to develop an Resource",
      excerpt: "\n",
      categories: ["Developing Resources for APPSeCONNECT"],
      tags: ["developers"],
      id: 4
    });
    
  
    idx.add({
      title: "How to test an Resource",
      excerpt: "\n",
      categories: ["Developing Resources for APPSeCONNECT"],
      tags: ["developers"],
      id: 5
    });
    
  
    idx.add({
      title: "Overview of AppseConnect",
      excerpt: "APPSeCONNECT is provider of both hybrid and cloud hosted applications which can connect two or more applications irrespective of ERP,...",
      categories: ["Home"],
      tags: ["developers"],
      id: 6
    });
    
  
    idx.add({
      title: "Getting started to APPSeCONNECT",
      excerpt: "CUSTOMER PROFILE INFORMATION This section enables you to quickly access your profile after logging into the application. This is where...",
      categories: ["home"],
      tags: ["developers"],
      id: 7
    });
    
  
    idx.add({
      title: "Overview of Workflows",
      excerpt: "Workflow is group of instructions to the integration service in APPSeCONNECT. APPSeCONNECT workflow application can be considered as a strong...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 8
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow A flow or...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 9
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "Workflow is a visual representation of a business process integration, which helps you as an user to orchestrate a business...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 10
    });
    
  
    idx.add({
      title: "Quickstart guide to your first workflow",
      excerpt: "Introduction This section will guide you through workflow creation &amp; configuration in simple steps. Steps to create Workflow By reading...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 11
    });
    
  
    idx.add({
      title: "Nodes and Link overview",
      excerpt: "Workflow in APPSeCONNECT generates flow that executes integration endpoints one by one through our Micro-service architecture and updates business data...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 12
    });
    
  
    idx.add({
      title: "Quickstart guide to debug workflows",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 13
    });
    
  
    idx.add({
      title: "GET Node",
      excerpt: "GET node is used for getting data from an application by using the API provided by the application. When we...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 14
    });
    
  
    idx.add({
      title: "Choosing applications for integration",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 15
    });
    
  
    idx.add({
      title: "PROCESS Node",
      excerpt: "PROCESS node is used for transforming data from one format to another format based on the mapping logic specified for...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 16
    });
    
  
    idx.add({
      title: "Deploying And Executing",
      excerpt: "Markdown file\n",
      categories: [],
      tags: [],
      id: 17
    });
    
  
    idx.add({
      title: "POST Node",
      excerpt: "POST node is used for pushing data to an application based on the API provided by the application.You need to...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 18
    });
    
  
    idx.add({
      title: "FILTER Node",
      excerpt: "This node is used to fetch a subset of data from an original data packet based on the criteria specified...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 19
    });
    
  
    idx.add({
      title: "Basic Workflow for Customer Downloading",
      excerpt: "Use Case Name - Creating a Basic Workflow for Customer Downloading. Brief Description – This is a basic workflow where...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 20
    });
    
  
    idx.add({
      title: "DELAY Node",
      excerpt: "DELAY node is used to delay or stop an execution flow for a specific period. For example, I have an...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 21
    });
    
  
    idx.add({
      title: "Workflow for sales order",
      excerpt: "• Use Case Name - Creating a Workflow for sales order • Brief Description – This is a workflow where...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 22
    });
    
  
    idx.add({
      title: "Workflow Showing Product upload with stock sync",
      excerpt: "title: “Workflow showing product upload and stock sync” toc: true tag: developers category: “Workflow” — • Use Case Name -...",
      categories: [],
      tags: [],
      id: 23
    });
    
  
    idx.add({
      title: "FAQs",
      excerpt: "FAQ is the best way to address frequently asked questions about your business, of course. This section contains list of...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 24
    });
    
  
    idx.add({
      title: "HALT/RESUME Node",
      excerpt: "HALT and RESUME nodes are used in a combination. We implement HALT node to halt the execution of the current...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 25
    });
    
  
    idx.add({
      title: "Working with Loops",
      excerpt: "In APPSeCONNECT Workflow using a Self-loop, we can repeatedly execute an individual node without affecting the other nodes that are...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 26
    });
    
  
    idx.add({
      title: "Merge Node",
      excerpt: "This node is used to merge smaller data chunks into a single data packet. Like a SPLITTER node, it also...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 27
    });
    
  
    idx.add({
      title: "Rule Node",
      excerpt: "This node is used for decision making during workflow execution. A rule can be applied on a single chunk of...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 28
    });
    
  
    idx.add({
      title: "Sequencer Node",
      excerpt: "This node is used to order elements by a certain attribute. This node can be applied to any collection of...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 29
    });
    
  
    idx.add({
      title: "Splitter Node",
      excerpt: "This node is used to split a data packet into smaller chunks for processing in small batches. There are three...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 30
    });
    
  
    idx.add({
      title: "Quickstart guide to your first workflow",
      excerpt: "• Use Case Name - Workflow creation and task execution with delay execution filter • Brief Description – This workflow...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 31
    });
    
  
    idx.add({
      title: "Workflow Actions",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 32
    });
    
  
    idx.add({
      title: "Sending Emails",
      excerpt: "This node is used to send an email notification to a user during workflow execution. For example, using this node...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 33
    });
    
  
    idx.add({
      title: "Generating Support tickets",
      excerpt: "Using this node user can create a support ticket during workflow execution. For example, after data is pushed to an...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 34
    });
    
  
    idx.add({
      title: "Webhook callback",
      excerpt: "The concept of a WebHook is simple. A webhook occurs when something happens; it is a simple event-notification via HTTP...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 35
    });
    
  
    idx.add({
      title: "Storing Files",
      excerpt: "Using this node user can store data in text file during workflow execution for future reference. Created file will be...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 36
    });
    
  
    idx.add({
      title: "Quickstart guide to your first workflow",
      excerpt: "• Use Case Name - Workflow creation and task configuration with data filteration • Brief Description – This workflow enables...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 37
    });
    
  
    idx.add({
      title: "Quickstart guide to your first workflow",
      excerpt: "• Use Case Name - Workflow showing task configuration with splitter rule • Brief Description – This workflow enables the...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 38
    });
    
  
    idx.add({
      title: "Workflow showing task configuration with acknowledgement data",
      excerpt: "• Use Case Name - Workflow showing task configuration with acknowledgement data • Brief Description – This workflow enables the...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 39
    });
    
  
    idx.add({
      title: "Workflow showing salescycle with post and post task inputs",
      excerpt: "• Use Case Name - Workflow creation of sales cycle with post and post task inputs • Brief Description –...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 40
    });
    
  
    idx.add({
      title: "Overview of API Management",
      excerpt: "Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 41
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our API management system. Webhook API -...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 42
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 43
    });
    
  
    idx.add({
      title: "Common Use Cases for API management",
      excerpt: "APIs are tje central to any application development process. As data forms an important part of any business it is...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 44
    });
    
  
    idx.add({
      title: "Quickstart guide to create web proxies",
      excerpt: "Proxies are the full REST (Representational State Transfer) services which allows to create proxy over a set of existing data...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 45
    });
    
  
    idx.add({
      title: "Create API to Connect On-premise Database",
      excerpt: "APIs is required when you don’t have an existing API for your data source. To implement new APIs, you might...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 46
    });
    
  
    idx.add({
      title: "Quickstart guide to create webhook APIs",
      excerpt: "Webhooks are custom callbacks from an application which is generated by the caller and data is pushed to all of...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 47
    });
    
  
    idx.add({
      title: "Policy Overview",
      excerpt: "Policies are hooks to an API which you can punch at differnt levels of execution. They are powerful capabilities to...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 48
    });
    
  
    idx.add({
      title: "Quota for a Key policy",
      excerpt: "The Rate-limit quota policy prevents an API usage spikes on per user basis, such that if the same API is...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 49
    });
    
  
    idx.add({
      title: "Filter Request by IP policy",
      excerpt: "The IP Restrict Policy is used to restrict the access of an API Proxy by limiting the number of IP...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 50
    });
    
  
    idx.add({
      title: "Validate http headers policy",
      excerpt: "Validate HTTP Header policy inspects each HTTP Request whether the HTTP Request contains a particular Request Header or a specified...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 51
    });
    
  
    idx.add({
      title: "Compression Policy",
      excerpt: "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 52
    });
    
  
    idx.add({
      title: "Response content format identification policy",
      excerpt: "Reponse Content Format policy inspects Content-Type for each HTTP request header and based upon the identification,it modifies the response content....",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 53
    });
    
  
    idx.add({
      title: "Configuring APPSeCONNECT for API Hosting",
      excerpt: "APPSeCONNECT is a platform which allows hosting of APIs such that the hosted APIs could run independently. Configuring APPSeConnect For...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 54
    });
    
  
    idx.add({
      title: "Choose Applications from catalog",
      excerpt: "API Proxies are API services which one can create to connect to a remote data source or multiple data sources....",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 55
    });
    
  
    idx.add({
      title: "Connecting an API to any data source",
      excerpt: "In today’s world,organizations are having multiple data sources.With distrubuted architechture in place,these data sources are existing independently and scatteredly.It can...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 56
    });
    
  
    idx.add({
      title: "Deploy and publish APIs to different environments",
      excerpt: "Deploying and publishing API is one of the primary concern after you have successfully configured an API on your API...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 57
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "What is an Adapter",
        "url": "http://localhost:4000/developing%20adapter%20for%20appseconnect/What-is-an-Adapter/",
        "excerpt": "Minimal Mistakes has been developed as a Jekyll theme gem for easier use. It is also 100% compatible with GitHub...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to develop an Adapter",
        "url": "http://localhost:4000/developing%20adapter%20for%20appseconnect/How-to-develop-an-Adapter/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to test an Adapter",
        "url": "http://localhost:4000/developing%20adapter%20for%20appseconnect/How-to-test-an-Adapter/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "What is an Resource",
        "url": "http://localhost:4000/developing%20resources%20for%20appseconnect/What-is-a-Resourse/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to develop an Resource",
        "url": "http://localhost:4000/developing%20resources%20for%20appseconnect/How-to-develop-an-Resourse/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to test an Resource",
        "url": "http://localhost:4000/developing%20resources%20for%20appseconnect/How-to-test-an-Resourse/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of AppseConnect",
        "url": "http://localhost:4000/home/home/",
        "excerpt": "APPSeCONNECT is provider of both hybrid and cloud hosted applications which can connect two or more applications irrespective of ERP,...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Getting started to APPSeCONNECT",
        "url": "http://localhost:4000/home/getting-started/",
        "excerpt": "CUSTOMER PROFILE INFORMATION This section enables you to quickly access your profile after logging into the application. This is where...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Workflows",
        "url": "http://localhost:4000/workflow/overview/",
        "excerpt": "Workflow is group of instructions to the integration service in APPSeCONNECT. APPSeCONNECT workflow application can be considered as a strong...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Important Terminologies",
        "url": "http://localhost:4000/workflow/Terminologies/",
        "excerpt": "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow A flow or...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Architecture",
        "url": "http://localhost:4000/workflow/architecture-design-runtime/",
        "excerpt": "Workflow is a visual representation of a business process integration, which helps you as an user to orchestrate a business...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to your first workflow",
        "url": "http://localhost:4000/workflow/steps-to-create-your-first-workflow/",
        "excerpt": "Introduction This section will guide you through workflow creation &amp; configuration in simple steps. Steps to create Workflow By reading...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Nodes and Link overview",
        "url": "http://localhost:4000/workflow/workflow-nodes-and-links/",
        "excerpt": "Workflow in APPSeCONNECT generates flow that executes integration endpoints one by one through our Micro-service architecture and updates business data...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to debug workflows",
        "url": "http://localhost:4000/workflow/activating-prepackaged-workflow/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "GET Node",
        "url": "http://localhost:4000/workflow/working-with-get/",
        "excerpt": "GET node is used for getting data from an application by using the API provided by the application. When we...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Choosing applications for integration",
        "url": "http://localhost:4000/workflow/choosing-apps-for-integration/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "PROCESS Node",
        "url": "http://localhost:4000/workflow/working-with-process/",
        "excerpt": "PROCESS node is used for transforming data from one format to another format based on the mapping logic specified for...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deploying And Executing",
        "url": "http://localhost:4000/deploying-and-executing/",
        "excerpt": "Markdown file\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "POST Node",
        "url": "http://localhost:4000/workflow/working-with-post/",
        "excerpt": "POST node is used for pushing data to an application based on the API provided by the application.You need to...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "FILTER Node",
        "url": "http://localhost:4000/workflow/working-with-filter/",
        "excerpt": "This node is used to fetch a subset of data from an original data packet based on the criteria specified...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Basic Workflow for Customer Downloading",
        "url": "http://localhost:4000/workflow/basic-workflow-customer-download/",
        "excerpt": "Use Case Name - Creating a Basic Workflow for Customer Downloading. Brief Description – This is a basic workflow where...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "DELAY Node",
        "url": "http://localhost:4000/workflow/working-with-delay/",
        "excerpt": "DELAY node is used to delay or stop an execution flow for a specific period. For example, I have an...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow for sales order",
        "url": "http://localhost:4000/workflow/workflow-creation-for-add-salesorder/",
        "excerpt": "• Use Case Name - Creating a Workflow for sales order • Brief Description – This is a workflow where...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow Showing Product upload with stock sync",
        "url": "http://localhost:4000/workflow-showing-product-upload-with-stock-sync/",
        "excerpt": "title: “Workflow showing product upload and stock sync” toc: true tag: developers category: “Workflow” — • Use Case Name -...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "FAQs",
        "url": "http://localhost:4000/workflow/faqs/",
        "excerpt": "FAQ is the best way to address frequently asked questions about your business, of course. This section contains list of...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "HALT/RESUME Node",
        "url": "http://localhost:4000/workflow/working-with-halt-resume/",
        "excerpt": "HALT and RESUME nodes are used in a combination. We implement HALT node to halt the execution of the current...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Loops",
        "url": "http://localhost:4000/workflow/working-with-loops/",
        "excerpt": "In APPSeCONNECT Workflow using a Self-loop, we can repeatedly execute an individual node without affecting the other nodes that are...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Merge Node",
        "url": "http://localhost:4000/workflow/working-with-merger/",
        "excerpt": "This node is used to merge smaller data chunks into a single data packet. Like a SPLITTER node, it also...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Rule Node",
        "url": "http://localhost:4000/workflow/working-with-rule/",
        "excerpt": "This node is used for decision making during workflow execution. A rule can be applied on a single chunk of...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sequencer Node",
        "url": "http://localhost:4000/workflow/working-with-sequencer/",
        "excerpt": "This node is used to order elements by a certain attribute. This node can be applied to any collection of...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Splitter Node",
        "url": "http://localhost:4000/workflow/working-with-splitter/",
        "excerpt": "This node is used to split a data packet into smaller chunks for processing in small batches. There are three...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to your first workflow",
        "url": "http://localhost:4000/workflow/delay-execution-in-workflow/",
        "excerpt": "• Use Case Name - Workflow creation and task execution with delay execution filter • Brief Description – This workflow...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow Actions",
        "url": "http://localhost:4000/workflow/generating-actions/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sending Emails",
        "url": "http://localhost:4000/workflow/generating-notification-emails/",
        "excerpt": "This node is used to send an email notification to a user during workflow execution. For example, using this node...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Generating Support tickets",
        "url": "http://localhost:4000/workflow/generating-notification-support-ticket/",
        "excerpt": "Using this node user can create a support ticket during workflow execution. For example, after data is pushed to an...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Webhook callback",
        "url": "http://localhost:4000/workflow/generating-notification-webhooks/",
        "excerpt": "The concept of a WebHook is simple. A webhook occurs when something happens; it is a simple event-notification via HTTP...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Storing Files",
        "url": "http://localhost:4000/workflow/generating-storage-action/",
        "excerpt": "Using this node user can store data in text file during workflow execution for future reference. Created file will be...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to your first workflow",
        "url": "http://localhost:4000/workflow/workflow-filter-node-customer-download/",
        "excerpt": "• Use Case Name - Workflow creation and task configuration with data filteration • Brief Description – This workflow enables...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to your first workflow",
        "url": "http://localhost:4000/workflow/process-to-configure-customer-with-splitter/",
        "excerpt": "• Use Case Name - Workflow showing task configuration with splitter rule • Brief Description – This workflow enables the...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow showing task configuration with acknowledgement data",
        "url": "http://localhost:4000/workflow/process-to-configure-a-task-with-acknowledgement/",
        "excerpt": "• Use Case Name - Workflow showing task configuration with acknowledgement data • Brief Description – This workflow enables the...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow showing salescycle with post and post task inputs",
        "url": "http://localhost:4000/workflow/workflow-showing-salescycle-with-post-and-post-taskinput/",
        "excerpt": "• Use Case Name - Workflow creation of sales cycle with post and post task inputs • Brief Description –...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of API Management",
        "url": "http://localhost:4000/api-management/overview/",
        "excerpt": "Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Important Terminologies",
        "url": "http://localhost:4000/api-management/Terminologies/",
        "excerpt": "This article demonstrates the important terminologies that you need to consider while using our API management system. Webhook API -...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Architecture",
        "url": "http://localhost:4000/api-management/architecture-design-runtime-Copy/",
        "excerpt": "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Common Use Cases for API management",
        "url": "http://localhost:4000/api-management/common-use-cases-on-api-management/",
        "excerpt": "APIs are tje central to any application development process. As data forms an important part of any business it is...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to create web proxies",
        "url": "http://localhost:4000/api-management/steps-to-create-proxy-endpoint/",
        "excerpt": "Proxies are the full REST (Representational State Transfer) services which allows to create proxy over a set of existing data...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create API to Connect On-premise Database",
        "url": "http://localhost:4000/api-management/create-api-using-custom-datasource/",
        "excerpt": "APIs is required when you don’t have an existing API for your data source. To implement new APIs, you might...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to create webhook APIs",
        "url": "http://localhost:4000/api-management/steps-to-create-webhook-endpoint/",
        "excerpt": "Webhooks are custom callbacks from an application which is generated by the caller and data is pushed to all of...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Policy Overview",
        "url": "http://localhost:4000/api-management/policies/",
        "excerpt": "Policies are hooks to an API which you can punch at differnt levels of execution. They are powerful capabilities to...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quota for a Key policy",
        "url": "http://localhost:4000/api-management/quota-per-user-key/",
        "excerpt": "The Rate-limit quota policy prevents an API usage spikes on per user basis, such that if the same API is...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Filter Request by IP policy",
        "url": "http://localhost:4000/api-management/ip-restrict/",
        "excerpt": "The IP Restrict Policy is used to restrict the access of an API Proxy by limiting the number of IP...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Validate http headers policy",
        "url": "http://localhost:4000/api-management/validate-http-header/",
        "excerpt": "Validate HTTP Header policy inspects each HTTP Request whether the HTTP Request contains a particular Request Header or a specified...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Compression Policy",
        "url": "http://localhost:4000/api-management/compression-apply/",
        "excerpt": "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Response content format identification policy",
        "url": "http://localhost:4000/api-management/response-content-format/",
        "excerpt": "Reponse Content Format policy inspects Content-Type for each HTTP request header and based upon the identification,it modifies the response content....",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Configuring APPSeCONNECT for API Hosting",
        "url": "http://localhost:4000/api-management/configure-appseconnect-for-apis/",
        "excerpt": "APPSeCONNECT is a platform which allows hosting of APIs such that the hosted APIs could run independently. Configuring APPSeConnect For...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Choose Applications from catalog",
        "url": "http://localhost:4000/api-management/choosing-backend-apps/",
        "excerpt": "API Proxies are API services which one can create to connect to a remote data source or multiple data sources....",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Connecting an API to any data source",
        "url": "http://localhost:4000/api-management/connecting-to-a-data-source/",
        "excerpt": "In today’s world,organizations are having multiple data sources.With distrubuted architechture in place,these data sources are existing independently and scatteredly.It can...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deploy and publish APIs to different environments",
        "url": "http://localhost:4000/api-management/deployments-and-environments/",
        "excerpt": "Deploying and publishing API is one of the primary concern after you have successfully configured an API on your API...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
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
