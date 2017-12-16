/**
 * Created by lhm on 2017/11/27.
 */

Renderer.delimiters = ["{%", "%}"];

var App = {
    eventDisabled: false,

    renderNavBar: function (container, home) {
        var template =
            '<span class="fa fa-reorder nav-icon menu-icon" target="#left-nav"></span>' +

            (!!home ? '<a href="./home.html"><span class="fa fa-home nav-icon"></span></a>' : '' ) +

            '<span class="fa fa-search nav-icon search-icon"></span>';

        $(container).html(template)
    },

    renderLeftNav: function (container) {
        var template =
            '<ul>' +
            ' <li><a href="{% href %}">' +
            '  <div class="left-nav-icon">' +
            '    <div class="text">{% text %}</div>' +
            '  </div>' +
            ' </li></a>' +
            '</ul>';

        var data = [
            {
                href: "./product_introduce.html",
                text: "产品介绍"
            },
            {
                href: "./health_articles.html",
                text: "健康文章"
            },
            {
                text: "合作学会"
            },
            {
                text: "活动中心"
            },
            {
                text: "商务合作",
                href: "./cooperation.html"
            },
            {
                href: "./connect.html",
                text: "联系我们"
            },
            {
                href: "./disclaimer.html",
                text: "免责声明"
            }
        ];

        var result = template.replace(/<ul>(.+)<\/ul>/g, function (_, $1) {
            return "<ul>" + (new Renderer($1).compile(data)) + "</ul>"
        });

        result += "<div style='position: absolute;bottom: 10px;left:10%;width: 80%;margin: 0 auto'><p style='font-size: 12px;color: #ffffff'>沪ICP备16027203号</p><img src='./imgs/renzheng.jpg' style='width: 100%'></div>";

        $(container).html(result)
    },

    disableEvent: function () {
        this.eventDisabled = true
    },

    enableEvent: function () {
        this.eventDisabled = false
    },

    attachEvent: function () {
        var $menuIcon = $(".menu-icon"),
            $searchIcon = $(".search-icon"),
            $leftNav = $($menuIcon.attr("target"));
        $menuIcon.on("touchend", function () {
            if (this.eventDisabled) return;
            $leftNav.animate({
                left: 0
            })
        }.bind(this));

        $(document.body).on("click", function () {
            if (this.eventDisabled) return;

            if ($leftNav.css("left") !== "0px") return;
            $leftNav.animate({
                left: "-40%"
            })
        }.bind(this));

        $searchIcon.on("touchend", function () {
            if (this.eventDisabled) return;
            //询问框
            layer.open({
                shadeClose: false,
                content: '<textarea rows="3"  style="width:100%;-webkit-appearance: none;outline: none;border-radius: 0;border-color: #9B9C9E;border-width: 1px;resize:none" placeholder="输入搜索内容"></textarea>',
                btn: ['搜索', '取消']
            });
        }.bind(this));
    },

    initRightNav: function (container, data) {  //type data interface { active : bool | void , title : string , href : string}[]
        if (!Array.isArray(data))return;

        var top = 65,
            activeOffset = 130,
            normalOffset = 100;

        data.forEach(function (d) {
            if (!d) return;
            var $li = $("<li>");

            var rowCount = d.title.length;

            if (/\w{2}/.test(d.title)) { //如果有包含两个字母连着的
                rowCount--
            }

            $li
                .addClass("right-nav-list")
                .addClass("mr-" + rowCount)
                .css("top", top);

            var $a = $("<a>");

            $a.attr("href", d.href)
                .html(d.title || "");

            $li.append($a);

            if (!!d.active) {
                // 如果当前是 选中的 那么下一个 top+activeOffset
                top += activeOffset;
                $li.addClass("active");
            } else {
                top += normalOffset;
            }

            $(container).append($li)
        })
    }
};
