"use strict";

function _toConsumableArray(e) { return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread() }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance") }

function _iterableToArray(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }

function _arrayWithoutHoles(e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]; return n } }

function getMoveDirection(e, t, n, a) {
    if (isPhone) {
        var r = n - e,
            i = a - t;
        if (Math.abs(r) < 2 && Math.abs(i) < 2) return DIRECTIONS.UNDIRECTED;
        var o, s, d = (o = r, s = i, 180 * Math.atan2(s, o) / Math.PI);
        return -135 <= d && d <= -45 ? DIRECTIONS.UP : 45 < d && d < 135 ? DIRECTIONS.DOWN : 135 <= d && d <= 180 || -180 <= d && d < -135 ? DIRECTIONS.LEFT : -45 <= d && d <= 45 ? DIRECTIONS.RIGHT : DIRECTIONS.UNDIRECTED
    }
}

function loadIntro() { document[hiddenProperty] || loadIntro.loaded || (setTimeout(function() { $(".wrap").classList.add("in"), setTimeout(function() { $(".content-subtitle").innerHTML = "<span>".concat(_toConsumableArray(subtitle).join("</span><span>"), "</span>") }, 270) }, 0), loadIntro.loaded = !0) }

function switchPage() {
    if (!switchPage.switched) {
        var e = { intro: $(".content-intro"), path: $(".shape-wrap path"), shape: $("svg.shape") };
        e.shape.style.transformOrigin = "50% 0%", anime({ targets: e.intro, duration: 1100, easing: "easeInOutSine", translateY: "-200vh" }), anime({ targets: e.shape, scaleY: [{ value: [.8, 1.8], duration: 550, easing: "easeInQuad" }, { value: 1, duration: 550, easing: "easeOutQuad" }] }), anime({ targets: e.path, duration: 1100, easing: "easeOutQuad", d: e.path.getAttribute("pathdata:id"), complete: function(e) { canvas && (cancelAnimationFrame(animationID), canvas.parentElement.removeChild(canvas), canvas = null) } }), switchPage.switched = !0
    }
}
window.hiddenProperty = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null, window.DIRECTIONS = { UP: "UP", DOWN: "DOWN", LEFT: "LEFT", RIGHT: "RIGHT", UNDIRECTED: "UNDIRECTED" }, window.isPhone = /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent);
var signatureEl = $("#signature");

function getDayLight() {
    var e = new Date,
        t = e.getHours() - 12,
        n = t ? Math.abs(t) / t : 1,
        a = ((t += (60 * e.getMinutes() + e.getSeconds()) / 3600) / 4 - n) * n;
    return Math.min(1, Math.max(a, 0))
}

function setLightColor() { $("#page").style.backgroundColor = "rgba(85,85,85,".concat(getDayLight(), ")"), (new Date).getHours() < 17 && (signatureEl.style.color = "#666") }

function typeSignature() { typeSignature.count = typeSignature.count || 0, typeSignature.count <= signature.length ? (signatureEl.innerHTML = "".concat(signature.slice(0, typeSignature.count++), "|"), setTimeout(typeSignature, 100)) : signatureEl.innerHTML = signature }

function messenger(i) {
    var o = this,
        s = 0,
        d = 0,
        e = 0;
    o.init = function() { o.codeletters = "&#*+%?￡@§$", o.message = 0, o.currentLength = 0, o.fadeBuffer = !1, o.messages = ["..."], setTimeout(o.animateIn, 100) }, o.generateRandomString = function(e) { for (var t = ""; t.length < e;) t += o.codeletters.charAt(Math.floor(Math.random() * o.codeletters.length)); return t }, o.animateIn = function() {
        if (o.currentLength < o.messages[o.message].length) o.currentLength = o.currentLength + 2, o.currentLength > o.messages[o.message].length && (o.currentLength = o.messages[o.message].length), i.innerHTML = o.generateRandomString(o.currentLength), setTimeout(o.animateIn, 20);
        else {
            if (2 < ++e) return;
            setTimeout(o.animateFadeBuffer, 20)
        }
    }, o.animateFadeBuffer = function() {
        if (!1 === o.fadeBuffer) { o.fadeBuffer = []; for (var e = 0; e < o.messages[o.message].length; e++) o.fadeBuffer.push({ c: Math.floor(12 * Math.random()) + 1, l: o.messages[o.message].charAt(e) }) }
        for (var t = !1, n = "", a = 0; a < o.fadeBuffer.length; a++) {
            var r = o.fadeBuffer[a];
            0 < r.c ? (t = !0, r.c--, n += o.codeletters.charAt(Math.floor(Math.random() * o.codeletters.length))) : n += r.l
        }
        if (i.innerHTML = n, !0 === t) {
            if (15 == ++d) return typeSignature(), void(s = 3);
            if (!(d < 15)) return;
            setTimeout(o.animateFadeBuffer, 50)
        } else {
            if (2 < s) return;
            2 == ++s ? typeSignature() : o.cycleText()
        }
    }, o.cycleText = function() { o.message = o.message + 1, o.message >= o.messages.length && (o.message = 0), o.currentLength = 0, o.fadeBuffer = !1, i.innerHTML = "", setTimeout(o.animateIn, 200) }, o.init()
}

function loadMain() { loadMain.loaded || (setLightColor(), setTimeout(function() { $(".card-inner").classList.add("in"), new messenger(signatureEl) }, 400), loadMain.loaded = !0) }

function loadAll() { loadAll.loaded || (switchPage(), loadMain(), loadAll.loaded = !0) }
window.visibilityChangeEvent = hiddenProperty.replace(/hidden/i, "visibilitychange"), window.addEventListener(visibilityChangeEvent, loadIntro), window.addEventListener("DOMContentLoaded", loadIntro);
var enterEl = $(".enter");
enterEl.addEventListener("click", loadAll), enterEl.addEventListener("touchenter", loadAll), document.body.addEventListener("mousewheel", loadAll, { passive: !0 }), $(".arrow").addEventListener("mouseenter", loadAll), isPhone && (document.addEventListener("touchstart", function(e) { window.startx = e.touches[0].pageX, window.starty = e.touches[0].pageY }, { passive: !0 }), document.addEventListener("touchend", function(e) {
    var t, n;
    t = e.changedTouches[0].pageX, n = e.changedTouches[0].pageY, getMoveDirection(startx, starty, t, n) === DIRECTIONS.UP && loadAll()
}, { passive: !0 }));
