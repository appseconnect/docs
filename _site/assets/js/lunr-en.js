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
      title: "What is a Permission",
      excerpt: "Permission is a set of previledges which lets the user access a feature or service in APPSeCONNECT platform. Permissions are...",
      categories: ["Handling Permission"],
      tags: ["developers"],
      id: 6
    });
    
  
    idx.add({
      title: "How to add permission",
      excerpt: "\n",
      categories: ["Adding Permission"],
      tags: ["administrators"],
      id: 7
    });
    
  
    idx.add({
      title: "How to revoke permission",
      excerpt: "To revoke permission you need to go to …\n",
      categories: ["Adding Permission"],
      tags: ["administrators"],
      id: 8
    });
    
  
    idx.add({
      title: "Overview of AppseConnect",
      excerpt: "APPSeCONNECT is provider of both hybrid and cloud hosted applications which can connect two or more applications irrespective of ERP,...",
      categories: ["AppseConnect and IPAAS"],
      tags: ["developers"],
      id: 9
    });
    
  
    idx.add({
      title: "Getting started to APPSeCONNECT",
      excerpt: "CUSTOMER PROFILE INFORMATION This section enables you to quickly access your profile after logging into the application. This is where...",
      categories: ["home"],
      tags: ["developers"],
      id: 10
    });
    
  
    idx.add({
      title: "Overview of Workflows",
      excerpt: "Workflow is group of instructions to the integration service in APPSeCONNECT. APPSeCONNECT workflow application can be considered as a strong...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 11
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow - A flow...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 12
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "Workflow in APPSeCONNECT generates flow\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 13
    });
    
  
    idx.add({
      title: "Quickstart guide to your first workflow",
      excerpt: "Introduction This section will guide you through workflow creation &amp; configuration in simple steps. Steps to create Workflow By reading...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 14
    });
    
  
    idx.add({
      title: "Nodes and Link overview",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 15
    });
    
  
    idx.add({
      title: "Quickstart guide to debug workflows",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 16
    });
    
  
    idx.add({
      title: "GET Node",
      excerpt: "To get data from an application, APPSeCONNECT uses GET node. A GET node is associated with a particular action which...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 17
    });
    
  
    idx.add({
      title: "Choosing applications for integration",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 18
    });
    
  
    idx.add({
      title: "PROCESS Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 19
    });
    
  
    idx.add({
      title: "Deploying And Executing",
      excerpt: "Markdown file\n",
      categories: [],
      tags: [],
      id: 20
    });
    
  
    idx.add({
      title: "POST Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 21
    });
    
  
    idx.add({
      title: "FILTER Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 22
    });
    
  
    idx.add({
      title: "Basic Workflow for Customer Downloading",
      excerpt: "Use Case Name - Creating a Basic Workflow for Customer Downloading. Brief Description – This is a basic workflow where...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 23
    });
    
  
    idx.add({
      title: "DELAY Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 24
    });
    
  
    idx.add({
      title: "Workflow for sales order",
      excerpt: "• Use Case Name - Workflow for sales order • Brief Description – This is a workflow where the user...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 25
    });
    
  
    idx.add({
      title: "Workflow Showing Product upload with stock sync",
      excerpt: "title: “Workflow showing product upload and stock sync” toc: true tag: developers category: “Workflow” — • Use Case Name -...",
      categories: [],
      tags: [],
      id: 26
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 27
    });
    
  
    idx.add({
      title: "HALT/RESUME Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 28
    });
    
  
    idx.add({
      title: "Working with Loops",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 29
    });
    
  
    idx.add({
      title: "Merge Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 30
    });
    
  
    idx.add({
      title: "Rule Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 31
    });
    
  
    idx.add({
      title: "Sequencer Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 32
    });
    
  
    idx.add({
      title: "Splitter Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 33
    });
    
  
    idx.add({
      title: "Quickstart guide to your first workflow",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 34
    });
    
  
    idx.add({
      title: "Quickstart guide to your first workflow",
      excerpt: "• Use Case Name - Workflow showing task configuration with data filteration • Brief Description – This workflow enables the...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 35
    });
    
  
    idx.add({
      title: "Quickstart guide to your first workflow",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 36
    });
    
  
    idx.add({
      title: "Quickstart guide to your first workflow",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 37
    });
    
  
    idx.add({
      title: "Workflow showing task configuration with acknowledgement data",
      excerpt: "• Use Case Name - Workflow showing task configuration with acknowledgement data • Brief Description – This workflow enables the...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 38
    });
    
  
    idx.add({
      title: "Workflow showing salescycle with post and post task inputs",
      excerpt: "• Use Case Name - Workflow creation of sales cycle with post and post task inputs • Brief Description –...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 39
    });
    
  
    idx.add({
      title: "Overview of API Management",
      excerpt: "Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 40
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our API management system. Webhook API -...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 41
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 42
    });
    
  
    idx.add({
      title: "Common Use Cases for API management",
      excerpt: "\n",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 43
    });
    
  
    idx.add({
      title: "Quickstart guide to create web proxies",
      excerpt: "Proxies are the full REST (Representational State Transfer) services which allows to create proxy over a set of existing data...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 44
    });
    
  
    idx.add({
      title: "Create API to Connect On-premise Database",
      excerpt: "\n",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 45
    });
    
  
    idx.add({
      title: "Quickstart guide to create webhook APIs",
      excerpt: "Webhooks are custom callbacks from an application which is generated by the caller and data is pushed to all of...",
      categories: ["API-Management"],
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
      title: "Quota for a Key policy",
      excerpt: "The Rate-limit quota policy prevents an API usage spikes on per user basis, such that if the same API is...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 48
    });
    
  
    idx.add({
      title: "Filter Request by IP policy",
      excerpt: "The IP Restrict Policy is used to restrict the access of an API Proxy by limiting the number of IP...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 49
    });
    
  
    idx.add({
      title: "Validate http headers policy",
      excerpt: "Validate HTTP Header policy inspects each HTTP Request whether the HTTP Request contains a particular Request Header or a specified...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 50
    });
    
  
    idx.add({
      title: "Compression Policy",
      excerpt: "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 51
    });
    
  
    idx.add({
      title: "Response content format identification policy",
      excerpt: "Reponse Content Format policy inspects Content-Type for each HTTP request header and based upon the identification,it modifies the response content....",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 52
    });
    
  
    idx.add({
      title: "Configuring APPSeCONNECT for API Hosting",
      excerpt: "APPSeCONNECT is a platform which allows hosting of APIs such that the hosted APIs could run independently. Configuring APPSeConnect For...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 53
    });
    
  
    idx.add({
      title: "Choose Applications from catalog",
      excerpt: "API Proxies are API services which one can create to connect to a remote data source or multiple data sources....",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 54
    });
    
  
    idx.add({
      title: "Connecting an API to any data source",
      excerpt: "In today’s world,organizations are having multiple data sources.With distrubuted architechture in place,these data sources are existing independently and scatteredly.It can...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 55
    });
    
  
    idx.add({
      title: "Deploy and publish APIs to different environments",
      excerpt: "\n",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 56
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
        "title": "What is a Permission",
        "url": "http://localhost:4000/handling%20permission/What-is-a-Permission/",
        "excerpt": "Permission is a set of previledges which lets the user access a feature or service in APPSeCONNECT platform. Permissions are...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to add permission",
        "url": "http://localhost:4000/adding%20permission/How-to-add-permission/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to revoke permission",
        "url": "http://localhost:4000/adding%20permission/How-to-revoke-permission/",
        "excerpt": "To revoke permission you need to go to …\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of AppseConnect",
        "url": "http://localhost:4000/appseconnect%20and%20ipaas/home/",
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
        "excerpt": "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow - A flow...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Architecture",
        "url": "http://localhost:4000/workflow/architecture-design-runtime/",
        "excerpt": "Workflow in APPSeCONNECT generates flow\n",
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
        "excerpt": "\n",
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
        "excerpt": "To get data from an application, APPSeCONNECT uses GET node. A GET node is associated with a particular action which...",
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
        "excerpt": "\n",
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
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "FILTER Node",
        "url": "http://localhost:4000/workflow/working-with-filter/",
        "excerpt": "\n",
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
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow for sales order",
        "url": "http://localhost:4000/workflow/workflow-creation-for-add-salesorder/",
        "excerpt": "• Use Case Name - Workflow for sales order • Brief Description – This is a workflow where the user...",
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
        "title": "Architecture",
        "url": "http://localhost:4000/workflow/faqs/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "HALT/RESUME Node",
        "url": "http://localhost:4000/workflow/working-with-halt-resume/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Loops",
        "url": "http://localhost:4000/workflow/working-with-loops/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Merge Node",
        "url": "http://localhost:4000/workflow/working-with-merger/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Rule Node",
        "url": "http://localhost:4000/workflow/working-with-rule/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sequencer Node",
        "url": "http://localhost:4000/workflow/working-with-sequencer/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Splitter Node",
        "url": "http://localhost:4000/workflow/working-with-splitter/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to your first workflow",
        "url": "http://localhost:4000/workflow/delay-execution-in-workflow/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to your first workflow",
        "url": "http://localhost:4000/workflow/workflow-filter-node-customer-download/",
        "excerpt": "• Use Case Name - Workflow showing task configuration with data filteration • Brief Description – This workflow enables the...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to your first workflow",
        "url": "http://localhost:4000/workflow/process-to-configure-customer-with-splitter/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to your first workflow",
        "url": "http://localhost:4000/workflow/executing-an-endpoint-before-another/",
        "excerpt": "\n",
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
        "url": "http://localhost:4000/api-management/architecture-design-runtime/",
        "excerpt": "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Common Use Cases for API management",
        "url": "http://localhost:4000/api-management/common-use-cases-on-api-management/",
        "excerpt": "\n",
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
        "excerpt": "\n",
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
        "excerpt": "\n",
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
