var lastId;
var tocMenu = $(".toc__menu");
var isTreeSelection = false;
// All list items
var menuItems = tocMenu.find("a");
// Anchors corresponding to menu items
var scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
});
$("#sidebarMenu")
    .on('changed.jstree', function (e, data) {
        if (data.action == 'select_node' && !isTreeSelection) {
            location.href = data.node.a_attr.href; 
        }
    })
    .on('loaded.jstree', function () {

        var instance = $('#sidebarMenu').jstree(true);
        m = instance._model.data;

        for (var i in m) {
            if (m.hasOwnProperty(i) && i !== '#' && m[i].a_attr.href && m[i].a_attr.href === location.pathname) {
                isTreeSelection = true;
                instance.select_node(i);
                break;
            }
        }

        //var node = $('#sidebarMenu').find('[data-url="' + location.pathname + '"]');
        //isTreeSelection = true;
        //$('#sidebarMenu').jstree('select_node', node.attr('id'));
    }).jstree();
var onScrollCallback = function () {
    var nav = $('.sidebar__right,.page');
    // Get container scroll position
    var fromTop = $(this).scrollTop();
    //var fromButtom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
    if (fromTop > 136) {
        nav.addClass("f-nav");
    } else {
        nav.removeClass("f-nav");
    }

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top - 100 < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .removeClass("active");

        var selectedMenu = menuItems.filter("[href*='" + id + "']");

        selectedMenu.addClass("active");
    }

};


$(document).ready(function () {

    $('#cssmenu').prepend('<div id="menu-button">Menu</div>');
    $('#cssmenu #menu-button').on('click', function () {
        var menu = $(this).next('ul');
        if (menu.hasClass('open')) {
            menu.removeClass('open');
        }
        else {
            menu.addClass('open');
        }
    });
    $(window).scroll(onScrollCallback);
});
window.onpopstate = function (e) {
    if (e.srcElement.location.hash.startsWith('#')) {
        return false;
    }
    if (e.state == null)
        return;
    selectTab(e.state.url);
};
var currentRequest;
var intervalObjects = {};
function ajaxCall(item, url, callback, errorcallback, options) {
    var global = false;
    var cacheTransaction = true;
    var progressState = 10;
    if (typeof options !== "undefined") {
        if (options.globalSettings) {
            global = options.globalSettings;
            blockui = options.blockui;
        }
        if (options.ajaxCache !== "undefined") {
            cacheTransaction = options.ajaxCache;
        }
    }
    if (currentRequest && currentRequest.readyState != 4) {
        currentRequest.abort();
        $('#globalprogress > div.progress-bar').width('100' + '%');
    }
    currentRequest = $.ajax({
        url: url,
        cache: cacheTransaction,
        global: global,
        xhr: function () {
            var xhr = new window.XMLHttpRequest();
            $('#globalprogress > div.progress-bar').show();
            if (intervalObjects && intervalObjects.globalProgressBar) {
                clearInterval(intervalObjects.globalProgressBar);
                $('#globalprogress > div.progress-bar').width(0 + "%");
            }

            var promise = setInterval(function () {
                if (progressState <= 60) {
                    $('#globalprogress > div.progress-bar').show();
                    $('#globalprogress > div.progress-bar').width(progressState + "%");
                    progressState = progressState + 1;
                }
                return progressState;
            }, 200);

            intervalObjects["globalProgressBar"] = promise;


            xhr.addEventListener("loadstart", function (e) {
                $('#globalprogress').show();
                $('#globalprogress > div.progress-bar').width(progressState + '%');
            });

            //Download progress
            xhr.addEventListener("progress", function (evt) {
                var percentComplete;
                if (evt.lengthComputable) {
                    percentComplete = (evt.loaded / evt.total) * 100;
                    //Do something with download progress
                    globalProgressBarHandler(percentComplete, promise);
                }
                else if (evt.total === 0) {  // Meaning Content Length is unknown to Client as Server is sending Zipped Response
                    globalProgressBarHandler(100, promise);
                }
            }, false);


            return xhr;
        },
        success: function (data, s, xhr) {
            if (callback) {
                callback(data, s, xhr);
            }
        },
        error: function (request, textStatus, errorThrown) {
            if (errorcallback) {
                errorcallback(request, textStatus, errorThrown);
            }
        },
        complete: function () {
            $('#globalprogress > div.progress-bar').width(0 + "%");
            $('#globalprogress > div.progress-bar').hide();
        }
    });
}
function globalProgressBarHandler(percentComplete, promise) {
    if (percentComplete && percentComplete >= 60) {
        $('#globalprogress > div.progress-bar').width(percentComplete + '%');
    }
    if (percentComplete == 100) {
        clearInterval(promise);
    }
}
function selectTab(url, e) {
    ajaxCall('.page', url, function (data, s, xhr) {
        menuItems = tocMenu.find("a");
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });
        var title = $(data).find('title').html();
        $(data).find('a:not([href^="https://"])').each(function () {
            $(this).click(function (event) {
                selectTab($(this).href(), event);
            });
        });

        $('.page').html($(data).find('.page').html());
        var tempDom = $('<div></div>').append($.parseHTML(data));
        document.title = tempDom.find('title').text();
        $('meta[name="description"]').attr('content', tempDom.find('meta[name="description"]').attr('content'));
        $('meta[name="keywords"]').attr('content', tempDom.find('meta[name="keywords"]').attr('content'));
        $('link[rel="canonical"]').attr('href', tempDom.find('link[rel="canonical"]').attr('href'));

        window.history.pushState({ url: url }, title, url);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        //remove all jsTree clicked
        $('a.jstree-clicked').removeClass('jstree-clicked');
        if (e)
            $(e.srcElement).addClass('jstree-clicked');
        else {
            $('a[href$="' + url + '"]').addClass('jstree-clicked');
        }
        console.log(url);
        tocMenu = $(".toc__menu");
        menuItems = tocMenu.find("a");
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = url;
                this.page.url = location.href;
                this.page.title = document.title; 
            }
        });

        $(window).scroll(onScrollCallback);
    }, function (request) {
        $('.page').html(request.responseText);
    }); 
    e.stopImmediatePropagation();
    e.preventDefault();
    return false;
}
function showMenu(o) {

    $(o).nextUntil(".nav__sub-title").slideToggle();

}
$(".nav__sub-title").click(function () {
    $(this).toggleClass("sidebaractive");
});
AOS.init({
    easing: 'ease-in-out-sine'
});