function mr_parallax() {
    "use strict";
    function a(a) {
        for (var b = 0; b < a.length; b++)
            if ("undefined" != typeof document.body.style[a[b]])
                return a[b];
        return null
    }
    function b() {
        var a,
            b = 0;
        return j() ? (b = jQuery(".viu").find("nav:first").outerHeight(!0), a = jQuery(".viu").find("nav:first").css("position"), ("absolute" === a || "fixed" === a) && (b = 0)) : b = jQuery(document).find("nav:first").outerHeight(!0), b
    }
    function c(a, b, c, d) {
        var e = a - 1;
        return e /= d, a /= d, e--, a--, c * (a * a * a * a * a + 1) + b - (c * (e * e * e * e * e + 1) + b)
    }
    function d() {
        if (F) {
            for (var a = k.length, b = f(); a--;)
                e(k[a], b, o, p);
            F = !1
        }
        s && (D += -v * c(u, 0, A, C), (D > B || -B > D) && (E.scrollBy(0, D), D = 0), u++, u > C && (u = 0, s = !1, t = !0, v = 0, w = 0, x = 0, D = 0)), l(d)
    }
    function e(a, b, c, d) {
        var e = j();
        e ? b + q - r > a.elemTop && b - r < a.elemBottom && (a.isFirstSection ? a.imageHolder.style[n] = c + b / 2 + d : a.imageHolder.style[n] = c + (b - a.elemTop - r) / 2 + d) : b + q > a.elemTop && b < a.elemBottom && (a.isFirstSection ? a.imageHolder.style[n] = c + b / 2 + d : a.imageHolder.style[n] = c + (b + q - a.elemTop) / 2 + d)
    }
    function f() {
        return E != window ? E.scrollTop : 0 === document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop
    }
    function g() {
        F = !0
    }
    function h(a) {
        G.mr_scrollAssist === !0 && (a.preventDefault && a.preventDefault(), v = a.notRealWheel ? -a.deltaY / 4 : 1 == a.deltaMode ? -a.deltaY / 3 : 100 === Math.abs(a.deltaY) ? -a.deltaY / 120 : -a.deltaY / 40, v = -y > v ? -y : v, v = v > y ? y : v, s = !0, u = z)
    }
    function i(a) {
        var b = {};
        return a && "[object Function]" === b.toString.call(a)
    }
    function j() {
        return "undefined" == typeof window.mr_variant ? !1 : !0
    }
    var k,
        l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
        m = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"],
        n = a(m),
        o = "translate3d(0,",
        p = "px,0)",
        q = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        r = 0,
        s = !1,
        t = !0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 2.2,
        z = 2,
        A = 350,
        B = 1,
        C = 35,
        D = 0,
        E = window,
        F = (j(), !1),
        G = this;
    this.mr_scrollAssist = $("body").hasClass("scroll-assist") ? !0 : !1, jQuery(document).ready(function() {
        G.documentReady()
    }), jQuery(window).load(function() {
        G.windowLoad()
    }), this.getScrollingState = function() {
        return u > 0 ? !0 : !1
    }, this.documentReady = function(a) {
        return q = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), jQuery("body").hasClass("parallax-2d") && (o = "translate(0,", p = "px)"), /Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) ? jQuery(".parallax").removeClass("parallax") : l && (G.profileParallaxElements(), G.setupParallax()), i(a) ? void a() : void 0
    }, this.windowLoad = function() {
        q = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), r = b(), window.mr_parallax.profileParallaxElements()
    }, this.setupParallax = function() {
        j() && (E = jQuery(".viu").get(0), "undefined" != typeof E && (E.scrollBy = function(a, b) {
            this.scrollTop += b, this.scrollLeft += a
        })), "undefined" != typeof E && (E.addEventListener("scroll", g, !1), window.addWheelListener(E, h, !1), window.addEventListener("resize", function() {
            q = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), r = b(), G.profileParallaxElements()
        }, !1), d())
    }, this.profileParallaxElements = function() {
        k = [], r = b();
        var a = j(),
            c = ".parallax > .background-image-holder, .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder";
        a && (c = ".viu .parallax > .background-image-holder, .viu .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder"), jQuery(c).each(function(b) {
            var c = jQuery(this).closest(".parallax"),
                d = a ? c.position().top : c.offset().top;
            k.push({
                section: c.get(0),
                outerHeight: c.outerHeight(),
                elemTop: d,
                elemBottom: d + c.outerHeight(),
                isFirstSection: c.is(":nth-of-type(1)") ? !0 : !1,
                imageHolder: jQuery(this).get(0)
            }), a ? a && (c.is(":nth-of-type(1)") ? G.mr_setTranslate3DTransform(jQuery(this).get(0), 0 === f() ? 0 : f() / 2) : G.mr_setTranslate3DTransform(jQuery(this).get(0), (f() - d - r) / 2)) : c.is(":nth-of-type(1)") ? G.mr_setTranslate3DTransform(jQuery(this).get(0), 0 === f() ? 0 : f() / 2) : G.mr_setTranslate3DTransform(jQuery(this).get(0), (f() + q - d) / 2)
        })
    }, this.mr_setTranslate3DTransform = function(a, b) {
        a.style[n] = o + b + p
    }
}
window.mr_parallax = new mr_parallax, function(a, b) {
    function c(b, c, g, h) {
        b[d](f + c, "wheel" == e ? g : function(b) {
            !b && (b = a.event);
            var c = {
                originalEvent: b,
                target: b.target || b.srcElement,
                type: "wheel",
                deltaMode: "MozMousePixelScroll" == b.type ? 0 : 1,
                deltaX: 0,
                deltaZ: 0,
                notRealWheel: 1,
                preventDefault: function() {
                    b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            };
            return "mousewheel" == e ? (c.deltaY = -1 / 40 * b.wheelDelta, b.wheelDeltaX && (c.deltaX = -1 / 40 * b.wheelDeltaX)) : c.deltaY = b.detail / 3, g(c)
        }, h || !1)
    }
    var d,
        e,
        f = "";
    a.addEventListener ? d = "addEventListener" : (d = "attachEvent", f = "on"), e = "onwheel" in b.createElement("div") ? "wheel" : "undefined" != typeof b.onmousewheel ? "mousewheel" : "DOMMouseScroll", a.addWheelListener = function(a, b, d) {
        c(a, e, b, d), "DOMMouseScroll" == e && c(a, "MozMousePixelScroll", b, d)
    }
}(window, document);


