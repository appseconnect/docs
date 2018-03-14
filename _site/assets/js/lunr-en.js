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
      excerpt: "hi\n\nWhats up?\nlink\n\n",
      categories: ["Adding Permission"],
      tags: ["administrators"],
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
      excerpt: "\n",
      categories: ["Adding Permission"],
      tags: ["administrators"],
      id: 14
    });
    
  
    idx.add({
      title: "What is a Subscription",
      excerpt: "\n",
      categories: ["Working with Subscription"],
      tags: ["administrators"],
      id: 15
    });
    
  
    idx.add({
      title: "How to change subscription",
      excerpt: "\n",
      categories: ["Working with Subscription"],
      tags: ["administrators"],
      id: 16
    });
    
  
    idx.add({
      title: "How to edit subscription",
      excerpt: "\n",
      categories: ["Working with Subscription"],
      tags: ["administrators"],
      id: 17
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "What is an Adapter",
        "url": "http://localhost:4000/developing%20adapter%20for%20appseconnect/What-is-an-Adapter/",
        "excerpt": "Minimal Mistakes has been developed as a Jekyll theme gem for easier use. It is also 100% compatible with GitHub...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to develop an Adapter",
        "url": "http://localhost:4000/developing%20adapter%20for%20appseconnect/How-to-develop-an-Adapter/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to test an Adapter",
        "url": "http://localhost:4000/developing%20adapter%20for%20appseconnect/How-to-test-an-Adapter/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "What is an Resource",
        "url": "http://localhost:4000/developing%20resources%20for%20appseconnect/What-is-a-Resourse/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to develop an Resource",
        "url": "http://localhost:4000/developing%20resources%20for%20appseconnect/How-to-develop-an-Resourse/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to test an Resource",
        "url": "http://localhost:4000/developing%20resources%20for%20appseconnect/How-to-test-an-Resourse/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "What is a Cloud",
        "url": "http://localhost:4000/working%20with%20appseconnect%20cloud/What-is-a-Cloud/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to work with the cloud",
        "url": "http://localhost:4000/working%20with%20appseconnect%20cloud/How-to-work-with-the-cloud/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to configure the cloud",
        "url": "http://localhost:4000/working%20with%20appseconnect%20cloud/How-to-configure-the-cloud/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to install APPSeCONNECT",
        "url": "http://localhost:4000/installation%20and%20configuration%20guide/How-to-install-APPSeCONNECT/",
        "excerpt": "Minimal Mistakes has been developed as a Jekyll theme gem for easier use. It is also 100% compatible with GitHub...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to install Agent",
        "url": "http://localhost:4000/installation%20and%20configuration%20guide/How-to-install-Agent/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to configure APPSeCONNECT",
        "url": "http://localhost:4000/installation%20and%20configuration%20guide/How-to-configure-APPSeCONNECT/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "What is a Permission",
        "url": "http://localhost:4000/adding%20permission/What-is-a-Permission/",
        "excerpt": "hi\n\nWhats up?\nlink\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to add permission",
        "url": "http://localhost:4000/adding%20permission/How-to-add-permission/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to revoke permission",
        "url": "http://localhost:4000/adding%20permission/How-to-revoke-permission/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "What is a Subscription",
        "url": "http://localhost:4000/working%20with%20subscription/What-is-a-Subscription/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to change subscription",
        "url": "http://localhost:4000/working%20with%20subscription/How-to-change-subscription/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "How to edit subscription",
        "url": "http://localhost:4000/working%20with%20subscription/How-to-edit-subscription/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
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
