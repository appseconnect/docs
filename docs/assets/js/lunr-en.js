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
