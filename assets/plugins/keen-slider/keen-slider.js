/**
 * keen-slider 5.4.0
 * The HTML touch slider carousel with the most native feeling you will get.
 * https://keen-slider.io
 * Copyright 2020-2021 Eric Beyer <contact@ericbeyer.de>
 * License: MIT
 * Released on: 2021-01-16
 */

! function(t, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).KeenSlider = n() }(this, (function() { "use strict";

    function t(t, n, e) { return n in t ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = e, t }

    function n(t, n) { var e = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
            n && (r = r.filter((function(n) { return Object.getOwnPropertyDescriptor(t, n).enumerable }))), e.push.apply(e, r) } return e }

    function e(e) { for (var r = 1; r < arguments.length; r++) { var i = null != arguments[r] ? arguments[r] : {};
            r % 2 ? n(Object(i), !0).forEach((function(n) { t(e, n, i[n]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t)) })) } return e }

    function r(t) { return function(t) { if (Array.isArray(t)) return i(t) }(t) || function(t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, n) { if (!t) return; if ("string" == typeof t) return i(t, n); var e = Object.prototype.toString.call(t).slice(8, -1); "Object" === e && t.constructor && (e = t.constructor.name); if ("Map" === e || "Set" === e) return Array.from(t); if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return i(t, n) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function i(t, n) {
        (null == n || n > t.length) && (n = t.length); for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e]; return r }

    function o(t) { return Array.prototype.slice.call(t) }

    function a(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document; return "function" == typeof t ? o(t()) : "string" == typeof t ? o(n.querySelectorAll(t)) : t instanceof HTMLElement != !1 ? [t] : t instanceof NodeList != !1 ? t : [] }

    function u(t, n, e) { return Math.min(Math.max(t, n), e) } return Math.sign || (Math.sign = function(t) { return (t > 0) - (t < 0) || +t }),
        function(t) { var n, i, o, c, f, s, l, d, h, v, p, m, b, g, w, y, M, O, S, j, A, k, x, E, P, T, D, L, C, X, Y, z, H = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                I = "data-keen-slider-moves",
                V = "data-keen-slider-v",
                q = [],
                F = null,
                W = !1,
                _ = !1,
                K = 0,
                N = [];

            function R(t, n, e) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                t.addEventListener(n, e, r), q.push([t, n, e, r]) }

            function U(t) { if (O && S === J(t) && ut()) { var e = Z(t).x; if (!nt(t) && E) return B(t);
                    E && (Wt(), j = e, n.setAttribute(I, !0), E = !1), t.cancelable && t.preventDefault(), Xt(x(j - e, $t) * (ft() ? -1 : 1), t.timeStamp), j = e } }

            function $(t) { O || !ut() || tt(t.target) || (O = !0, E = !0, S = J(t), nt(t), ht(), M = v, j = Z(t).x, Xt(0, t.timeStamp), ot("dragStart")) }

            function B(t) { O && S === J(t, !0) && ut() && (n.removeAttribute(I), O = !1, mt(), ot("dragEnd")) }

            function G(t) { return t.changedTouches }

            function J(t) { var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    e = n ? G(t) : Q(t); return e ? e[0] ? e[0].identifier : "error" : "default" }

            function Q(t) { return t.targetTouches }

            function Z(t) { var n = Q(t); return { x: lt() ? n ? n[0].screenY : t.pageY : n ? n[0].screenX : t.pageX, timestamp: t.timeStamp } }

            function tt(t) { return t.hasAttribute(y.preventEvent) }

            function nt(t) { var n = Q(t); if (!n) return !0; var e = n[0],
                    r = lt() ? e.clientY : e.clientX,
                    i = lt() ? e.clientX : e.clientY,
                    o = void 0 !== A && void 0 !== k && Math.abs(k - i) <= Math.abs(A - r); return A = r, k = i, o }

            function et(t) { ut() && O && t.preventDefault() }

            function rt() { R(window, "orientationchange", Pt), R(window, "resize", (function() { return Et() })), R(n, "dragstart", (function(t) { ut() && t.preventDefault() })), R(n, "mousedown", $), R(y.cancelOnLeave ? n : window, "mousemove", U), y.cancelOnLeave && R(n, "mouseleave", B), R(window, "mouseup", B), R(n, "touchstart", $, { passive: !0 }), R(n, "touchmove", U, { passive: !1 }), R(n, "touchend", B, { passive: !0 }), R(n, "touchcancel", B, { passive: !0 }), R(window, "wheel", et, { passive: !1 }) }

            function it() { q.forEach((function(t) { t[0].removeEventListener(t[1], t[2], t[3]) })), q = [] }

            function ot(t) { y[t] && y[t]($t) }

            function at() { return y.centered }

            function ut() { return void 0 !== i ? i : y.controls }

            function ct() { return y.loop && o > 1 }

            function ft() { return y.rtl }

            function st() { return !y.loop && y.rubberband }

            function lt() { return !!y.vertical }

            function dt() { P = window.requestAnimationFrame(vt) }

            function ht() { P && (window.cancelAnimationFrame(P), P = null), T = null }

            function vt(t) { T || (T = t); var n = t - T,
                    e = pt(n); if (n >= L) return Xt(D - X, !1), z ? z() : void ot("afterChange"); var r = Yt(e); if (0 === r || ct() || st() || Y) { if (0 !== r && st() && !Y) return Mt();
                    X += e, Xt(e, !1), dt() } else Xt(e - r, !1) }

            function pt(t) { return D * C(t / L) - X }

            function mt() { switch (ot("beforeChange"), y.mode) {
                    case "free":
                        wt(); break;
                    case "free-snap":
                        yt(); break;
                    case "snap":
                    default:
                        bt() } }

            function bt() { gt((1 === l && 0 !== p ? M : v) + Math.sign(p)) }

            function gt(t, n) { var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.duration,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = function(t) { return 1 + --t * t * t * t * t };
                Ot(Vt(t = It(t, r, i)), e, o, n) }

            function wt() { if (0 === b) return !(!Yt(0) || ct()) && gt(v); var t = y.friction / Math.pow(Math.abs(b), -.5);
                Ot(Math.pow(b, 2) / t * Math.sign(b), 6 * Math.abs(b / t), (function(t) { return 1 - Math.pow(1 - t, 5) })) }

            function yt() { if (0 === b) return gt(v); var t = y.friction / Math.pow(Math.abs(b), -.5),
                    n = Math.pow(b, 2) / t * Math.sign(b),
                    e = 6 * Math.abs(b / t),
                    r = (K + n) / (s / l);
                Ot((-1 === p ? Math.floor(r) : Math.ceil(r)) * (s / l) - K, e, (function(t) { return 1 - Math.pow(1 - t, 5) })) }

            function Mt() { if (ht(), 0 === b) return gt(v, !0); var t = .04 / Math.pow(Math.abs(b), -.5),
                    n = Math.pow(b, 2) / t * Math.sign(b),
                    e = function(t) { return --t * t * t + 1 },
                    r = b;
                Ot(n, 3 * Math.abs(r / t), e, !0, (function() { Ot(Vt(It(v)), 500, e, !0) })) }

            function Ot(t, n, e, r, i) { ht(), D = t, X = 0, L = n, C = e, Y = r, z = i, T = null, dt() }

            function St(e) { var r = a(t);
                r.length && (n = r[0], Et(e), rt(), ot("mounted")) }

            function jt() { var t, n = H.breakpoints || []; for (var r in n) window.matchMedia(r).matches && (t = r); if (t === F) return !0; var i = (F = t) ? n[F] : H;
                i.breakpoints && F && delete i.breakpoints, y = e(e(e({}, Ut), H), i), W = !0, h = null, xt() }

            function At(t) { return "function" == typeof t ? t() : u(t, 1, Math.max(ct() ? o - 1 : o, 1)) }

            function kt() { jt(), _ = !0, ot("created") }

            function xt(t, n) { t && (H = t), n && (F = null), Tt(), St(n) }

            function Et(t) { var e = window.innerWidth; if (jt() && (e !== h || t)) { h = e; var r = y.slides; "number" == typeof r ? (f = null, o = r) : (f = a(r, n), o = f ? f.length : 0); var i = y.dragSpeed;
                    x = "function" == typeof i ? i : function(t) { return t * i }, s = lt() ? n.offsetHeight : n.offsetWidth, l = At(y.slidesPerView), d = u(y.spacing, 0, s / (l - 1) - 1), s += d, c = at() ? (s / 2 - s / l / 2) / s : 0, Lt(); var p = !_ || W && y.resetSlide ? y.initial : v;
                    Rt(ct() ? p : zt(p)), lt() && n.setAttribute(V, !0), W = !1 } }

            function Pt(t) { Et(), setTimeout(Et, 500), setTimeout(Et, 2e3) }

            function Tt() { it(), Ct(), n && n.hasAttribute(V) && n.removeAttribute(V), ot("destroyed") }

            function Dt() { f && f.forEach((function(t, n) { var e = g[n].distance * s - n * (s / l - d / l - d / l * (l - 1)),
                        r = lt() ? 0 : e,
                        i = lt() ? e : 0,
                        o = "translate3d(".concat(r, "px, ").concat(i, "px, 0)");
                    t.style.transform = o, t.style["-webkit-transform"] = o })) }

            function Lt() { f && f.forEach((function(t) { var n = "calc(".concat(100 / l, "% - ").concat(d / l * (l - 1), "px)");
                    lt() ? (t.style["min-height"] = n, t.style["max-height"] = n) : (t.style["min-width"] = n, t.style["max-width"] = n) })) }

            function Ct() { if (f) { var t = ["transform", "-webkit-transform"];
                    t = [].concat(r(t), lt ? ["min-height", "max-height"] : ["min-width", "max-width"]), f.forEach((function(n) { t.forEach((function(t) { n.style.removeProperty(t) })) })) } }

            function Xt(t) { var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
                Ft(t, e), n && (t = Kt(t)), K += t, _t() }

            function Yt(t) { var n = s * (o - 1 * (at() ? 1 : l)) / l,
                    e = K + t; return e > n ? e - n : e < 0 ? e : 0 }

            function zt(t) { return u(t, 0, o - 1 - (at() ? 0 : l - 1)) }

            function Ht() { var t = Math.abs(w),
                    n = K < 0 ? 1 - t : t; return { direction: p, progressTrack: n, progressSlides: n * o / (o - 1), positions: g, position: K, speed: b, relativeSlide: (v % o + o) % o, absoluteSlide: v, size: o, slidesPerView: l, widthOrHeight: s } }

            function It(t) { var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; return ct() ? n ? qt(t, e) : t : zt(t) }

            function Vt(t) { return -(-s / l * t + K) }

            function qt(t, n) { var e = (v % o + o) % o,
                    r = e < (t = (t % o + o) % o) ? -e - o + t : -(e - t),
                    i = e > t ? o - e + t : t - e,
                    a = n ? Math.abs(r) <= i ? r : i : t < e ? r : i; return v + a }

            function Ft(t, n) { clearTimeout(m); var e = Math.sign(t); if (e !== p && Wt(), p = e, N.push({ distance: t, time: n }), m = setTimeout((function() { N = [], b = 0 }), 50), (N = N.slice(-6)).length <= 1 || 0 === p) return b = 0; var r = N.slice(0, -1).reduce((function(t, n) { return t + n.distance }), 0),
                    i = N[N.length - 1].time,
                    o = N[0].time;
                b = u(r / (i - o), -10, 10) }

            function Wt() { N = [] }

            function _t() { w = ct() ? K % (s * o / l) / (s * o / l) : K / (s * o / l), Nt(); for (var t = [], n = 0; n < o; n++) { var e = (1 / o * n - (w < 0 && ct() ? w + 1 : w)) * o / l + c;
                    ct() && (e += e > (o - 1) / l ? -o / l : e < -o / l + 1 ? o / l : 0); var r = 1 / l,
                        i = e + r,
                        a = i < r ? i / r : i > 1 ? 1 - (i - 1) * l / 1 : 1;
                    t.push({ portion: a < 0 || a > 1 ? 0 : a, distance: ft() ? -1 * e + 1 - r : e }) }
                g = t, Dt(), ot("move") }

            function Kt(t) { if (ct()) return t; var n = Yt(t); if (!st()) return t - n; if (0 === n) return t; var e; return t * (e = n / s, (1 - Math.abs(e)) * (1 - Math.abs(e))) }

            function Nt() { var t = Math.round(K / (s / l));
                t !== v && (!ct() && (t < 0 || t > o - 1) || (v = t, ot("slideChanged"))) }

            function Rt(t) { ot("beforeChange"), Xt(Vt(t), !1), ot("afterChange") } var Ut = { centered: !1, breakpoints: null, controls: !0, dragSpeed: 1, friction: .0025, loop: !1, initial: 0, duration: 500, preventEvent: "data-keen-slider-pe", slides: ".keen-slider__slide", vertical: !1, resetSlide: !1, slidesPerView: 1, spacing: 0, mode: "snap", rtl: !1, rubberband: !0, cancelOnLeave: !0 },
                $t = { controls: function(t) { i = t }, destroy: Tt, refresh: function(t) { xt(t, !0) }, next: function() { gt(v + 1, !0) }, prev: function() { gt(v - 1, !0) }, moveToSlide: function(t, n) { gt(t, !0, n) }, moveToSlideRelative: function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            e = arguments.length > 2 ? arguments[2] : void 0;
                        gt(t, !0, e, !0, n) }, resize: function() { Et(!0) }, details: function() { return Ht() }, options: function() { var t = e({}, y); return delete t.breakpoints, t } }; return kt(), $t } }));
//# sourceMappingURL=keen-slider.js.map