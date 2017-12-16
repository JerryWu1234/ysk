riot.tag2('footer', '<div class="footer" style="background-color: #01BCF1;margin-top: 25px"><div style="text-align: center"><a href="about_1.html"><img src="./imgs/about_us.png" style="width: 50px;" alt=""></a></div></div>', '', '', function(opts) {
});

riot.tag2('left-nav', '<ul id="left-nav"><li class="left-nav-list">糖尿病足预防</li><li class="left-nav-list">中老年保护</li><li class="left-nav-list">3d定制鞋</li><li class="left-nav-list"><a href="./detal_1.html" style="color: #ffffff">压力检测设备</a></li><li class="left-nav-list">合作学会</li><li class="left-nav-list">活动中心</li><li class="left-nav-list">关于我们</li></ul>', 'left-nav #left-nav,[data-is="left-nav"] #left-nav{ background-color: #EFEFEF; position: absolute; top: 70px; left: -30%; width: 30%; bottom: 0; } left-nav .left-nav-list,[data-is="left-nav"] .left-nav-list{ margin: 10px auto; list-style: none; width: 80px; height: 30px; line-height: 30px; text-align: center; border-radius: 5px; background: linear-gradient(to bottom, #97CDE7 5%, #010005); color: #ffffff; font-size: 8px; }', '', function(opts) {
});

riot.tag2('main-layout', '<div style="position: relative" id="main"><yield></yield></div>', '', '', function(opts) {
        this.on("mount", function () {
            var $menuIcon = $(".menu-icon"),
                $leftNav = $("#left-nav"),
                $main = $("#main");

            $menuIcon.on("touchend", function () {
                $leftNav.animate({
                    left: "0"
                });
                $main.animate({
                    left: "30%"
                })
            });

            $(document.body).on("click", function () {
                if ($leftNav.css("left") !== "0px") return;
                $leftNav.animate({
                    left: "-30%"
                });
                $main.animate({
                    left: "0"
                })
            });
        })
});

riot.tag2('nav-bar', '<div id="nav-bar"><span class="fa fa-reorder nav-icon menu-icon"></span><a href="./index.html"><span class="fa fa-home nav-icon"></span></a><span class="fa fa-search nav-icon search-icon"></span></div>', 'nav-bar #nav-bar,[data-is="nav-bar"] #nav-bar{ width: 100%; overflow: hidden; z-index: 501; } nav-bar #nav-bar .nav-icon,[data-is="nav-bar"] #nav-bar .nav-icon{ font-size: 30px; margin: 20px; } nav-bar #nav-bar .menu-icon,[data-is="nav-bar"] #nav-bar .menu-icon{ float: left; } nav-bar #nav-bar .search-icon,[data-is="nav-bar"] #nav-bar .search-icon{ float: right; }', '', function(opts) {
});

riot.tag2('tab', '<li class="{opts.active ? \'active\' : \'\'}"><div><yield></yield></div></li>', '', '', function(opts) {
});

riot.tag2('tabs', '<ul class="tabs"><yield></yield></ul>', 'tabs .tabs,[data-is="tabs"] .tabs{ background-color: #CBCBCB; margin-top: 50px; } tabs li,[data-is="tabs"] li{ font-weight: bold; padding: 10px 0; color: #ffffff; font-size: 10px; display: inline-block; text-align: center; width: 23%; } tabs li.active,[data-is="tabs"] li.active{ background-color: #5A5A5A; } tabs li.active div,[data-is="tabs"] li.active div{ background-color: #5A5A5A; border: 0 } tabs li div,[data-is="tabs"] li div{ width: 100%; border-right: 1px solid #747474; } tabs li:last-child div,[data-is="tabs"] li:last-child div{ border-right: 0 }', '', function(opts) {
        var children = this.tags
});
