"use strict";


$(function () {

    var l = $(window);
    var s = $("#languages div");
    var r = $("link[title]");
    var o = $("#categories");
    var f = $("#styles");

    function c() {
        var c = l.height();
        o.css("max-height", c / 4);
        o.perfectScrollbar("update");
        f.height(c - f.position().top - 20), f.perfectScrollbar("update")
    }

    function t(c) {
        s.each(function (t, i) {
            var e = $(i);
            if (e.hasClass(c)) {
                var a = e.find("code");
                a.hasClass("hljs") || hljs.highlightBlock(a.get(0)), e.show()
            } else e.hide()
        });
        $(document).scrollTop(0)
    }

    function i(c) {
        return "common" === c ? "" : "misc" === c ? "z" : "all" === c ? "zz" : c
    }

    function e() {
        var c, e, a = {};
        s.each(function (c, t) {
            t.className || (t.className += "misc"), t.className += " all";
            t.className.split(" ").forEach(function (c) {
                a[c] = (a[c] || 0) + 1
            })
        });
        e = Object.keys(a), e.sort(function (c, t) {
            return c = i(c), t = i(t), t > c ? -1 : c > t ? 1 : 0
        });
        e.forEach(function (c) {
            o.append('<li data-category="' + c + '">' + c + " (" + a[c] + ")</li>")
        });
        c = o.find("li"), c.click(function () {
            var i = $(this);
            c.removeClass("current"), i.addClass("current"), t(i.data("category"))
        });
        c.first().click();
        o.perfectScrollbar()
    }

    function a(c) {
        r.each(function (t, i) {
            i.disabled = i.title !== c
        })
    }

    function n() {
        r.each(function (c, t) {
            f.append("<li>" + t.title + "</li>")
        });
        var c = f.find("li");
        c.click(function () {
            var t = $(this);
            c.removeClass("current"), t.addClass("current"), a(t.text())
        }), c.first().click(), f.perfectScrollbar()
    }

    e()
    n()
    l.resize(c)
    c()
})