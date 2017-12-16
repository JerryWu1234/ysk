!function ($) {
    $(function () {
        //上：横幅
        // App.renderLeftNav("#left-nav");
        // App.attachEvent();

        var model = [
            {
                img: "./imgs/carousel/LucRo不知道.png",
                kls: "active"
            },
            {
                img: "./imgs/carousel/LucRo动力学.png"
            },
            {
                img: "./imgs/carousel/LucRo经典.png"
            },
            {
                img: "./imgs/carousel/LucRo运动.png"
            },
            {
                img: "./imgs/carousel/压力板.jpg"
            },
            {
                img: "./imgs/carousel/工厂1.jpg"
            },
            {
                img: "./imgs/carousel/工厂2.jpg"
            },
            {
                img: "./imgs/carousel/工厂3.jpg"
            },
            {
                img: "./imgs/carousel/康复仪.jpg"
            },
            {
                img: "./imgs/carousel/足底扫描仪.jpg"
            }
        ];

        var template =
            '<div class="item {%kls%}">' +
            '   <img src="{%img%}" >' +
            '</div>';

        $(".carousel-inner").html(new Renderer(template).compile(model));


        //下：图片列表
        var contentModel = [
            {
                img: "./imgs/content/1.png",
                nav: {
                    title: "LucRo",
                    subTitle: "糖尿病预防",
                    bgColor: "#ED720B"
                }
            },
            {
                img: "./imgs/content/2.png",
                nav: {
                    title: "YSK",
                    subTitle: "中老年保护",
                    bgColor: "#00A0EA"
                }
            },
            {
                img: "./imgs/content/3.png",
                nav: {
                    title: "MyShoe",
                    subTitle: "3D技术设置",
                    bgColor: "#EA0001",
					moreHref:'detail_2.html',
                }
            },
            {
                img: "./imgs/content/4.png",
                nav: {
                    title: "Schein Works",
                    subTitle: "压力检测设备",
                    bgColor: "#73D7A1",
					moreHref:"detal_1.html",
                }
            }
        ];

        var contentTemplate =
            '<div class="content">' +
            ' <img src="{%img%}" style="width: 100%;">' +
            ' <div class="nav" style="background-color: {%nav.bgColor%}">' +
            '   <div class="title" style="">{%nav.title%}</div>' +
            '   <div class="subTitle" style="">{%nav.subTitle%}</div>' +
            '   <div style="position: absolute;bottom: 10px;text-align: center">' +
            '    <img src="./imgs/shop.png" style="width: 40px;">' +
            '    <a href="{%nav.moreHref%}"><img src="./imgs/user.png" style="width: 40px;margin-top:10px" alt=""></a>' +
            '  </div>' +
            ' </div>' +
            '</div>';

        $(".content-warp").html(new Renderer(contentTemplate).compile(contentModel));

        var $carousel = $("#carousel"),
            $item = $(".item"),
            $searchIcon = $(".search-icon");

        function carousel() {
            return $carousel.carousel.apply($carousel, arguments)
        }

        $carousel.carousel({
            interval: 4000
        });

        $item.on("touchstart", function () {
            carousel("pause")
        }).on("touchend", function () {
            carousel("cycle");
        });
        var $menuIcon = $(".menu-icon"),
            $leftNav = $("#left-nav"),
            $main = $("#main")

        $menuIcon.on("touchend", function () {
            if (this.eventDisabled) return;
            $leftNav.animate({
                left: "0"
            });
            $main.animate({
                left: "30%"
            })
        }.bind(this));

        $(document.body).on("click", function () {
            if ($leftNav.css("left") !== "0px") return;
            $leftNav.animate({
                left: "-30%"
            });
            $main.animate({
                left: "0"
            })
        }.bind(this));

    });

}(jQuery)

