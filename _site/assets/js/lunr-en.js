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
      title: "What is a Cloud",
      excerpt: "\n",
      categories: ["Working with APPSeCONNECT Cloud"],
      tags: ["implementers"],
      id: 6
    });
    
  
    idx.add({
      title: "How to work with the cloud",
      excerpt: "\n",
      categories: ["Working with APPSeCONNECT Cloud"],
      tags: ["implementers"],
      id: 7
    });
    
  
    idx.add({
      title: "How to configure the cloud",
      excerpt: "\n",
      categories: ["Working with APPSeCONNECT Cloud"],
      tags: ["implementers"],
      id: 8
    });
    
  
    idx.add({
      title: "How to install APPSeCONNECT",
      excerpt: "Minimal Mistakes has been developed as a Jekyll theme gem for easier use. It is also 100% compatible with GitHub...",
      categories: ["Installation and Configuration Guide"],
      tags: ["implementers","developers"],
      id: 9
    });
    
  
    idx.add({
      title: "How to install Agent",
      excerpt: "\n",
      categories: ["Installation and Configuration Guide"],
      tags: ["implementers"],
      id: 10
    });
    
  
    idx.add({
      title: "How to configure APPSeCONNECT",
      excerpt: "\n",
      categories: ["Installation and Configuration Guide"],
      tags: ["implementers"],
      id: 11
    });
    
  
    idx.add({
      title: "What is a Permission",
      excerpt: "Permission is a set of previledges which lets the user access a feature or service in APPSeCONNECT platform. Permissions are...",
      categories: ["Handling Permission"],
      tags: ["developers"],
      id: 12
    });
    
  
    idx.add({
      title: "How to add permission",
      excerpt: "\n",
      categories: ["Adding Permission"],
      tags: ["administrators"],
      id: 13
    });
    
  
    idx.add({
      title: "How to revoke permission",
      excerpt: "To revoke permission you need to go to …\n",
      categories: ["Adding Permission"],
      tags: ["administrators"],
      id: 14
    });
    
  
    idx.add({
      title: "How to setup your account with APPSeCONNECT",
      excerpt: "Installing and creating account with APPSeCONNECT is an effort. To install\n",
      categories: ["Installation and Configuration Guide"],
      tags: ["customer"],
      id: 15
    });
    
  
    idx.add({
      title: "What is a Subscription",
      excerpt: "\n",
      categories: ["Working with Subscription"],
      tags: ["administrators"],
      id: 16
    });
    
  
    idx.add({
      title: "Getting Started",
      excerpt: "CUSTOMER PROFILE INFORMATION This section enables you to quickly access your profile after logging into the application. This is where...",
      categories: [],
      tags: [],
      id: 17
    });
    
  
    idx.add({
      title: "How to change subscription",
      excerpt: "\n",
      categories: ["Working with Subscription"],
      tags: ["administrators"],
      id: 18
    });
    
  
    idx.add({
      title: "How to edit subscription",
      excerpt: "\n",
      categories: ["Working with Subscription"],
      tags: ["administrators"],
      id: 19
    });
    
  
    idx.add({
      title: "Overview of Workflows",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 20
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow Touchpoint Action Filters...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 21
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "API\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 22
    });
    
  
    idx.add({
      title: "Quickstart guide to your first workflow",
      excerpt: "Let\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 23
    });
    
  
    idx.add({
      title: "Quickstart guide to debug workflows",
      excerpt: "WebHooks are important concept\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 24
    });
    
  
    idx.add({
      title: "GET Node",
      excerpt: "To get data from an application, APPSeCONNECT uses GET node. A GET node is associated with a particular action which...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 25
    });
    
  
    idx.add({
      title: "Choosing applications for integration",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 26
    });
    
  
    idx.add({
      title: "PROCESS Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 27
    });
    
  
    idx.add({
      title: "POST Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 28
    });
    
  
    idx.add({
      title: "FILTER Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 29
    });
    
  
    idx.add({
      title: "DELAY Node",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 30
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 31
    });
    
  
    idx.add({
      title: "Overview of API Management",
      excerpt: "Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage...",
      categories: ["API Management"],
      tags: ["developers"],
      id: 32
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our API management system. Webhook API -...",
      categories: ["API Management"],
      tags: ["developers"],
      id: 33
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
      categories: ["API Management"],
      tags: ["developers"],
      id: 34
    });
    
  
    idx.add({
      title: "Quickstart guide to create web proxies",
      excerpt: "Let\n",
      categories: ["API Management"],
      tags: ["developers"],
      id: 35
    });
    
  
    idx.add({
      title: "Quickstart guide to create webhook APIs",
      excerpt: "WebHooks are important concept\n",
      categories: ["API Management"],
      tags: ["developers"],
      id: 36
    });
    
  
    idx.add({
      title: "Policy Overview",
      excerpt: "\n",
      categories: ["API Management"],
      tags: ["developers"],
      id: 37
    });
    
  
    idx.add({
      title: "Quota for a Key policy",
      excerpt: "The Rate-limit quota policy prevents an API usage spikes on per user basis, such that if the same API is...",
      categories: ["API Management"],
      tags: ["developers"],
      id: 38
    });
    
  
    idx.add({
      title: "Filter Request by IP policy",
      excerpt: "The IP Restrict Policy is used to restrict the access of an API Proxy by limiting the number of IP...",
      categories: ["API Management"],
      tags: ["developers"],
      id: 39
    });
    
  
    idx.add({
      title: "Validate http headers policy",
      excerpt: "Validate HTTP Header policy inspects each HTTP Request whether the HTTP Request contains a particular Request Header or a specified...",
      categories: ["API Management"],
      tags: ["developers"],
      id: 40
    });
    
  
    idx.add({
      title: "Compression Policy",
      excerpt: "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
      categories: ["API Management"],
      tags: ["developers"],
      id: 41
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
        "title": "What is a Cloud",
        "url": "http://localhost:4000/working%20with%20appseconnect%20cloud/What-is-a-Cloud/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to work with the cloud",
        "url": "http://localhost:4000/working%20with%20appseconnect%20cloud/How-to-work-with-the-cloud/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to configure the cloud",
        "url": "http://localhost:4000/working%20with%20appseconnect%20cloud/How-to-configure-the-cloud/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to install APPSeCONNECT",
        "url": "http://localhost:4000/installation%20and%20configuration%20guide/How-to-install-APPSeCONNECT/",
        "excerpt": "Minimal Mistakes has been developed as a Jekyll theme gem for easier use. It is also 100% compatible with GitHub...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to install Agent",
        "url": "http://localhost:4000/installation%20and%20configuration%20guide/How-to-install-Agent/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to configure APPSeCONNECT",
        "url": "http://localhost:4000/installation%20and%20configuration%20guide/How-to-configure-APPSeCONNECT/",
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
        "title": "How to setup your account with APPSeCONNECT",
        "url": "http://localhost:4000/installation%20and%20configuration%20guide/Setting-Up-Your-Profile/",
        "excerpt": "Installing and creating account with APPSeCONNECT is an effort. To install\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "What is a Subscription",
        "url": "http://localhost:4000/working%20with%20subscription/What-is-a-Subscription/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Getting Started",
        "url": "http://localhost:4000/getting-started/",
        "excerpt": "CUSTOMER PROFILE INFORMATION This section enables you to quickly access your profile after logging into the application. This is where...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to change subscription",
        "url": "http://localhost:4000/working%20with%20subscription/How-to-change-subscription/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to edit subscription",
        "url": "http://localhost:4000/working%20with%20subscription/How-to-edit-subscription/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Workflows",
        "url": "http://localhost:4000/workflow/overview/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Important Terminologies",
        "url": "http://localhost:4000/workflow/Terminologies/",
        "excerpt": "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow Touchpoint Action Filters...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Architecture",
        "url": "http://localhost:4000/workflow/architecture-design-runtime/",
        "excerpt": "API\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to your first workflow",
        "url": "http://localhost:4000/workflow/steps-to-create-your-first-workflow/",
        "excerpt": "Let\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to debug workflows",
        "url": "http://localhost:4000/workflow/monitoring-and-debugging-a-workflow/",
        "excerpt": "WebHooks are important concept\n",
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
        "title": "DELAY Node",
        "url": "http://localhost:4000/workflow/working-with-delay/",
        "excerpt": "\n",
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
        "title": "Overview of API Management",
        "url": "http://localhost:4000/api%20management/overview/",
        "excerpt": "Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Important Terminologies",
        "url": "http://localhost:4000/api%20management/Terminologies/",
        "excerpt": "This article demonstrates the important terminologies that you need to consider while using our API management system. Webhook API -...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Architecture",
        "url": "http://localhost:4000/api%20management/architecture-design-runtime/",
        "excerpt": "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to create web proxies",
        "url": "http://localhost:4000/api%20management/steps-to-create-proxy-endpoint/",
        "excerpt": "Let\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guide to create webhook APIs",
        "url": "http://localhost:4000/api%20management/steps-to-create-webhook-endpoint/",
        "excerpt": "WebHooks are important concept\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Policy Overview",
        "url": "http://localhost:4000/api%20management/policies/",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quota for a Key policy",
        "url": "http://localhost:4000/api%20management/quota-per-user-key/",
        "excerpt": "The Rate-limit quota policy prevents an API usage spikes on per user basis, such that if the same API is...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Filter Request by IP policy",
        "url": "http://localhost:4000/api%20management/ip-restrict/",
        "excerpt": "The IP Restrict Policy is used to restrict the access of an API Proxy by limiting the number of IP...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Validate http headers policy",
        "url": "http://localhost:4000/api%20management/validate-http-header/",
        "excerpt": "Validate HTTP Header policy inspects each HTTP Request whether the HTTP Request contains a particular Request Header or a specified...",
        "teaser":
          
            "http://localhost:4000/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Compression Policy",
        "url": "http://localhost:4000/api%20management/compression-apply/",
        "excerpt": "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
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
