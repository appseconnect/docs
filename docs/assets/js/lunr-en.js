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
      title: "Overview of UseCase",
      excerpt: "Transformation signifies the execution and the communication of the business processes where information and values are passed from one attribute...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 6
    });
    
  
    idx.add({
      title: "Transformation",
      excerpt: "This document will help you to understand and work with the MAPPING and TRANSFORMATION functionality in APPSeCONNECT portal. Primarily transformation...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 7
    });
    
  
    idx.add({
      title: "Basics of Source-Destination Mapping",
      excerpt: "Mapping triggers the transformation process between the Source and the Destination Applications. Source and destination schemas are mapped in the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 8
    });
    
  
    idx.add({
      title: "Steps to define logic over destination mapping",
      excerpt: "Mapping in APPSeCONNECT is done so that a Source Application can communicate with the Destination Application. APPSeCONNECT, introduces a new...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 9
    });
    
  
    idx.add({
      title: "Grouping of Conditions",
      excerpt: "What is Grouping of Conditions Mapping can have multiple condition that are interlinked or grouped. Scenario might require more than...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 10
    });
    
  
    idx.add({
      title: "Troubleshooting",
      excerpt: "Prerequisites for Intergration Scenarios View the Generated Packet to know where the error occurred (GET or PROCESS or POST). View...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 11
    });
    
  
    idx.add({
      title: "Getting Started",
      excerpt: "Getting started section of the mapping will help you to understand the main areas you should be familiar with before...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 12
    });
    
  
    idx.add({
      title: "Types of Mapping",
      excerpt: "APPSeCONNECT Mapping Types are given below: 1. Hard Coded Mapping - Hardcoded mapping is implemented when it is required that...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 13
    });
    
  
    idx.add({
      title: "Types of Variable",
      excerpt: "Working with Variables in APPSeCONNECT To facilitate touchpoint mapping, variables stores the data that can be used later in the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 14
    });
    
  
    idx.add({
      title: "Understanding Attribute Mapping",
      excerpt: "Behind every application integration, there is a business logic. APPSeCONNECT stores this integration logic in the form of data. Attribute...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 15
    });
    
  
    idx.add({
      title: "Understanding XML and Xpath",
      excerpt: "Understanding XML XML stands for eXtensible Markup Language. XML was designed to store and transport data. It is a textual...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 16
    });
    
  
    idx.add({
      title: "Understanding Components of Mapping",
      excerpt: "Mapping triggers the transformation process between the Source and the Destination Applications. Source and destination schemas are mapped in the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 17
    });
    
  
    idx.add({
      title: "Steps to Customize Prebuilt Mapping/Attribute mapping",
      excerpt: "The data coming from the source schema requires to be transformed individually such that it matches the format of the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 18
    });
    
  
    idx.add({
      title: "Understanding Touchpoint Dependencies",
      excerpt: "Use Case Name Touchpoint Dependency Brief Description Touchpoints are the point of action which when triggered transfers informations between the...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 19
    });
    
  
    idx.add({
      title: "Understanding Mapping & Syntax",
      excerpt: "APPSeCONNECT has its own set of vocabulary or syntax, functions that help its users to customize the pre-defined touchpoints as...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 20
    });
    
  
    idx.add({
      title: "Advance Mapping through Custom Renderer",
      excerpt: "Use Case Name Advanced Mapping Through Renderer Brief Description This feature enables the user to alter the default XML structure...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 21
    });
    
  
    idx.add({
      title: "Mapping from Schema 1 to Schema 2",
      excerpt: "Use-Case Name Attribute Mapping with Schema 1 (OLEDB Technology APP) and Schema 2 (REST Application - Magento 2) Brief Description...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 22
    });
    
  
    idx.add({
      title: "Enabling Tracking data in Transformation",
      excerpt: "Use Case Name Enabling Tracking in transformation. Brief Description Tracking is a feature in APPSeCONNECT which lets the user view...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 23
    });
    
  
    idx.add({
      title: "Handling Variables and Functions",
      excerpt: "Use Case Name Handling Variables and Functions Brief Description Root Variables are the variables that stores the data that can...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 24
    });
    
  
    idx.add({
      title: "Implementing Xpath in Mapping",
      excerpt: "Use Case Name Handling XPATH in Mapping Brief Description XPATH is an essential concept that is required when implementing mapping...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 25
    });
    
  
    idx.add({
      title: "Using Lookups Mapping for Value Interchange",
      excerpt: "Use Case Name Using Lookups Mapping for Value Interchange Brief Description Lookups Mapping is a feature in APPSeCONNECT which enables...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 26
    });
    
  
    idx.add({
      title: "Handling Dependent data",
      excerpt: "Data dependency is a concept which requires the data which are mutually dependent on one another to be kept in...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 27
    });
    
  
    idx.add({
      title: "Handling Incremental data",
      excerpt: "This is a very common scenario where syncing records incrementally in one direction between two applications, occurs. An incremental (or...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 28
    });
    
  
    idx.add({
      title: "Using library methods/AppResource Function",
      excerpt: "Appresource Functions are the functions in APPSeCONNECT that are written in the adapter (APPSeCONNECT supports calling external functions written in...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 29
    });
    
  
    idx.add({
      title: "Using Tips & Tricks",
      excerpt: "Transformation is one vital concept when it comes to integrating applications. Errors can make the Integration process go wrong and...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 30
    });
    
  
    idx.add({
      title: "Working with Schema, Action & Filter",
      excerpt: "Knowing Schema, Actions &amp; Filters The user can view the schemas and the action present or can also add schema...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 31
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
        "title": "Overview of UseCase",
        "url": "/transformation/overview-usecase/",
        "excerpt": "Transformation signifies the execution and the communication of the business processes where information and values are passed from one attribute...",
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
        "excerpt": "Mapping in APPSeCONNECT is done so that a Source Application can communicate with the Destination Application. APPSeCONNECT, introduces a new...",
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
        "title": "Enabling Tracking data in Transformation",
        "url": "/transformation/enable-tracking-fields/",
        "excerpt": "Use Case Name Enabling Tracking in transformation. Brief Description Tracking is a feature in APPSeCONNECT which lets the user view...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Handling Variables and Functions",
        "url": "/transformation/handling-variables-and-functions/",
        "excerpt": "Use Case Name Handling Variables and Functions Brief Description Root Variables are the variables that stores the data that can...",
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
