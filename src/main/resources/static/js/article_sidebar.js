
/*@author :hly
@github :github.com/SiriusHly
@blog :blog.csdn.net/Sirius_hly
@date :2018/8/14*/
/*文档*/
/*http://www.jq22.com/demo/jQuery-slimScroll-141223223505/*/
var handleSlimScroll = function () {
    "use strict";
   $('#article_edit').slimScroll({

       height:700,
       railVisible: true,
       railColor: '#ff0b56'
    });


    $('#my-scrollbar').slimScroll({
        height: '100%',
        railVisible: true,
        railColor: '#ff0f04'
    });

};

var handleSidebarMenu = function () {
    "use strict";
    $(".sidebar .nav > .has-sub > a").click(function () {
        /*查找下一个为sub-menu的同胞元素*/
        var e = $(this).next(".sub-menu");
        /*var t = ".sidebar .nav > li.has-sub > .sub-menu";
        $(t).not(e).slideUp(250);*/
        /*在显示和隐藏状态之间切换，0.25秒*/
        $(e).slideToggle(250)
    });

};

/*JQ控制不同方向的滑动：https://www.jb51.net/article/52347.htm*/
var handlesSidebarStatus = function () {
    "use strict";
    $("#sidebar-button").click(function () {
        var $lefty=$("#sidebar");
        $lefty.animate({
            left:parseInt($lefty.css('left'),10)==0 ? - $lefty.outerWidth()+10 : 0
        });
    });
    
};

var App = function () {
    "use strict";
    return {
        init: function () {
            handleSidebarMenu();
            handleSlimScroll();
            handlesSidebarStatus();
        }
    }
}()