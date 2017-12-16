/**
 * Created by lhm on 2017/11/25.
 */
function RenderOptions(selector, data) {
    this.selector = selector;
    this.data = data || {};
}

//进一步封装 初始化模版
var renderFactory = {
    renders: [],
    init: function () {
        this.renders.forEach(function (render) {
            var $selector = $(render.selector);
            var result = new Renderer($selector.html()).compile(render.data);
            $selector.html(result)
        })
    },

    register: function () {
        // accept RenderOptions list
        [].push.apply(this.renders, arguments);
        return this
    }
};
