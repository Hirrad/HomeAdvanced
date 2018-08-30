'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

///////////////////// Beginning of variablesBe

var TextWindows = {},
    elJs = void 0,
    elHtml = void 0,
    elWin = void 0,
    el = void 0,
    menuFirstLevel = void 0,
    jsText = void 0,
    htmlText = void 0,
    winText = void 0,
    elTask = void 0,
    winTask = void 0;

jsText = 'Тут будет js';
htmlText = 'Тут будет html';
winText = 'Тут будет Выводимая информация';
winTask = 'Задание';

el = document.querySelector('.menu__first-level').parentElement.children[1];
// elJs=document.querySelector('.conteinerWin__flex__js');
elJs = document.querySelector('.conteinerWin__flex__js > pre > code');
// elHtml=document.querySelector('.conteinerWin__flex__html');
elHtml = document.querySelector('.conteinerWin__flex__html > pre > code');
elWin = document.querySelector('.conteinerWin__text');
elTask = document.querySelector('.conteinerWin__task');

menuFirstLevel = document.querySelector('.menu__first-level');
elJs.innerHTML = jsText;
elHtml.innerHTML = htmlText;
// elWin.innerHTML = winText;
elTask.innerHTML = winTask;

//
/////////////////////End of variables
/////////////////// Start objects

function Dz(html, js, win, fun) {
    this.js = js;
    this.fun = fun;
    this.html = html;
    this.htmlBr = function (html) {
        return '<pre><code class="language-markup">' + html + '</code></pre>';
    };
    this.win = win;
    // this.jsBr = (function (js) {
    //     return js.replace(/;/g, ';<Br>');
    //
    // })(this.js);
    this.jsBr = function (js) {
        return '<pre><code class="language-javascript">' + js + '</code></pre>';
    }(this.js);
}

/////////////////// End of objects


//


///////////////////// beginning of events

el.addEventListener('click', function (e) {

    if (e.target.getAttribute('class') == 'menu__third-level finish') {
        var numberEl = e.target.parentElement.parentElement.parentElement.firstElementChild.dataset.number;
        var numberEl2 = e.target.dataset.number;
        elJs.textContent = TextWindows[numberEl + numberEl2].js;
        elHtml.textContent = TextWindows[numberEl + numberEl2].html;
        elTask.innerHTML = TextWindows[numberEl + numberEl2].win;
        TextWindows[numberEl + numberEl2].fun();
    }
});

menuFirstLevel.addEventListener('mouseover', function () {
    elJs.textContent = jsText;
    elHtml.innerHTML = htmlText;
    elTask.textContent = winTask;
    elWin.innerHTML = winText;
    console.clear();
});

///////////////////// end of events
var log = function log(el) {
    return console.log(el);
};
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
    } : t(e);
}("undefined" != typeof window ? window : undefined, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
    },
        y = function e(t) {
        return null != t && t === t.window;
    },
        v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) {
            n[i] && (o[i] = n[i]);
        }t.head.appendChild(o).parentNode.removeChild(o);
    }function x(e) {
        return null == e ? e + "" : "object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === 'undefined' ? 'undefined' : _typeof(e);
    }var b = "3.3.1",
        w = function w(e, t) {
        return new w.fn.init(e, t);
    },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
            return o.call(this);
        }, get: function get(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        }, pushStack: function pushStack(e) {
            var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
        }, each: function each(e) {
            return w.each(this, e);
        }, map: function map(e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t);
            }));
        }, slice: function slice() {
            return this.pushStack(o.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
            if (null != (e = arguments[s])) for (t in e) {
                n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            }
        }return a;
    }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
            throw new Error(e);
        }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
            var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
        }, isEmptyObject: function isEmptyObject(e) {
            var t;for (t in e) {
                return !1;
            }return !0;
        }, globalEval: function globalEval(e) {
            m(e);
        }, each: function each(e, t) {
            var n,
                r = 0;if (C(e)) {
                for (n = e.length; r < n; r++) {
                    if (!1 === t.call(e[r], r, e[r])) break;
                }
            } else for (r in e) {
                if (!1 === t.call(e[r], r, e[r])) break;
            }return e;
        }, trim: function trim(e) {
            return null == e ? "" : (e + "").replace(T, "");
        }, makeArray: function makeArray(e, t) {
            var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
        }, inArray: function inArray(e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
        }, merge: function merge(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
                e[i++] = t[r];
            }return e.length = i, e;
        }, grep: function grep(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
                (r = !t(e[o], o)) !== s && i.push(e[o]);
            }return i;
        }, map: function map(e, t, n) {
            var r,
                i,
                o = 0,
                s = [];if (C(e)) for (r = e.length; o < r; o++) {
                null != (i = t(e[o], o, n)) && s.push(i);
            } else for (o in e) {
                null != (i = t(e[o], o, n)) && s.push(i);
            }return a.apply([], s);
        }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
    });function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }var E = function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function D(e, t) {
            return e === t && (f = !0), 0;
        },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function O(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
                if (e[n] === t) return n;
            }return -1;
        },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function ee(e, t, n) {
            var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function ne(e, t) {
            return t ? "\0" === e ? '\uFFFD' : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            re = function re() {
            p();
        },
            ie = me(function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, { dir: "parentNode", next: "legend" });try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = { apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t));
                } : function (e, t) {
                    var n = e.length,
                        r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
                } };
        }function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
                    if (9 === T) {
                        if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                } else {
                    if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) {
                            h[s] = "#" + c + " " + ve(h[s]);
                        }v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
                    }if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r;
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id");
                    }
                }
            }return u(e.replace(B, "$1"), t, r, i);
        }function ae() {
            var e = [];function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
            }return t;
        }function se(e) {
            return e[b] = !0, e;
        }function ue(e) {
            var t = d.createElement("fieldset");try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }function le(e, t) {
            var n = e.split("|"),
                i = n.length;while (i--) {
                r.attrHandle[n[i]] = t;
            }
        }function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
                if (n === t) return -1;
            }return e ? 1 : -1;
        }function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
            };
        }function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i,
                        o = e([], n.length, t),
                        a = o.length;while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                    }
                });
            });
        }function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
        }, p = oe.setDocument = function (e) {
            var t,
                i,
                a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className");
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);return function (e) {
                    return e.getAttribute("id") === t;
                };
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);return n ? [n] : [];
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
                };
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n,
                        r,
                        i,
                        o = t.getElementById(e);if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        }
                    }return [];
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
            } : function (e, t) {
                var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n);
                    }return r;
                }return o;
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function (e, t) {
                if (t) while (t = t.parentNode) {
                    if (t === e) return !0;
                }return !1;
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
            } : function (e, t) {
                if (e === t) return f = !0, 0;var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) {
                    a.unshift(n);
                }n = t;while (n = n.parentNode) {
                    s.unshift(n);
                }while (a[r] === s[r]) {
                    r++;
                }return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
            }, d) : d;
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {}return oe(t, d, null, [e]).length > 0;
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t);
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne);
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, oe.uniqueSort = function (e) {
            var t,
                r = [],
                i = 0,
                o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) {
                    t === e[o] && (i = r.push(o));
                }while (i--) {
                    e.splice(r[i], 1);
                }
            }return c = null, e;
        }, i = oe.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
                        n += i(e);
                    }
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else while (t = e[r++]) {
                n += i(t);
            }return n;
        }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                }, CHILD: function CHILD(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
                }, PSEUDO: function PSEUDO(e) {
                    var t,
                        n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                } }, filter: { TAG: function TAG(e) {
                    var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
                        return !0;
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                }, CLASS: function CLASS(e) {
                    var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                }, CHILD: function CHILD(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode;
                    } : function (t, n, u) {
                        var l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;if (y) {
                            if (o) {
                                while (g) {
                                    p = t;while (p = p[g]) {
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    }h = g = "only" === e && !h && "nextSibling";
                                }return !0;
                            }if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];break;
                                    }
                                }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            }return (x -= i) === r || x % r == 0 && x / r >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(e, t) {
                    var n,
                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r,
                            o = i(e, t),
                            a = o.length;while (a--) {
                            e[r = O(e, o[a])] = !(n[r] = o[a]);
                        }
                    }) : function (e) {
                        return i(e, 0, n);
                    }) : i;
                } }, pseudos: { not: se(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
                        var o,
                            a = r(e, null, i, []),
                            s = e.length;while (s--) {
                            (o = a[s]) && (e[s] = !(t[s] = o));
                        }
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                    };
                }), has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0;
                    };
                }), contains: se(function (e) {
                    return e = e.replace(Z, ee), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                    };
                }), lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                        var n;do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
                    };
                }), target: function target(t) {
                    var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
                }, root: function root(e) {
                    return e === h;
                }, focus: function focus(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
                    var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
                }, selected: function selected(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                }, empty: function empty(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(e) {
                    return !r.pseudos.empty(e);
                }, header: function header(e) {
                    return Y.test(e.nodeName);
                }, input: function input(e) {
                    return G.test(e.nodeName);
                }, button: function button(e) {
                    var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
                }, text: function text(e) {
                    var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                }, first: he(function () {
                    return [0];
                }), last: he(function (e, t) {
                    return [t - 1];
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) {
                        e.push(n);
                    }return e;
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) {
                        e.push(n);
                    }return e;
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) {
                        e.push(r);
                    }return e;
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) {
                        e.push(r);
                    }return e;
                }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            r.pseudos[t] = fe(t);
        }for (t in { submit: !0, reset: !0 }) {
            r.pseudos[t] = pe(t);
        }function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
            var n,
                i,
                o,
                a,
                s,
                u,
                l,
                c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) {
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
                }if (!n) break;
            }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        };function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) {
                r += e[t].value;
            }return r;
        }function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;return t.first ? function (t, n, i) {
                while (t = t[r]) {
                    if (1 === t.nodeType || a) return e(t, n, i);
                }return !1;
            } : function (t, n, u) {
                var l,
                    c,
                    f,
                    p = [T, s];if (u) {
                    while (t = t[r]) {
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    }
                } else while (t = t[r]) {
                    if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                        if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
                    }
                }return !1;
            };
        }function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;while (i--) {
                    if (!e[i](t, n, r)) return !1;
                }return !0;
            } : e[0];
        }function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
                oe(e, t[r], n);
            }return n;
        }function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            }return a;
        }function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l,
                    c,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;while (c--) {
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                }if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;while (c--) {
                                (f = v[c]) && l.push(y[c] = f);
                            }i(null, v = [], l, u);
                        }c = v.length;while (c--) {
                            (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
            });
        }function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                return e === t;
            }, s, !0), f = me(function (e) {
                return O(t, e) > -1;
            }, s, !0), p = [function (e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
            }]; u < o; u++) {
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) {
                            if (r.relative[e[i].type]) break;
                        }return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
                    }p.push(n);
                }
            }return xe(p);
        }function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function o(_o, a, s, u, c) {
                var f,
                    h,
                    y,
                    v = 0,
                    m = "0",
                    x = _o && [],
                    b = [],
                    w = l,
                    C = _o || i && r.find.TAG("*", c),
                    E = T += null == w ? 1 : Math.random() || .1,
                    k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) {
                            if (y(f, a || d, s)) {
                                u.push(f);break;
                            }
                        }c && (T = E);
                    }n && ((f = !y && f) && v--, _o && x.push(f));
                }if (v += m, n && m !== v) {
                    h = 0;while (y = t[h++]) {
                        y(x, b, a, s);
                    }if (_o) {
                        if (v > 0) while (m--) {
                            x[m] || b[m] || (b[m] = j.call(u));
                        }b = we(b);
                    }L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                }return c && (T = E, l = w), x;
            };return n ? se(o) : o;
        }return s = oe.compile = function (e, t) {
            var n,
                r = [],
                i = [],
                o = S[e + " "];if (!o) {
                t || (t = a(e)), n = t.length;while (n--) {
                    (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                }(o = S(e, Ee(i, r))).selector = e;
            }return o;
        }, u = oe.select = function (e, t, n, i) {
            var o,
                u,
                l,
                c,
                f,
                p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
                    }
                }
            }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ue(function (e) {
            return null == e.getAttribute("disabled");
        }) || le(P, function (e, t, n) {
            var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), oe;
    }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function k(e, t, n) {
        var r = [],
            i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
            if (1 === e.nodeType) {
                if (i && w(e).is(n)) break;r.push(e);
            }
        }return r;
    },
        S = function S(e, t) {
        for (var n = []; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && n.push(e);
        }return n;
    },
        D = w.expr.match.needsContext;function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n;
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n;
        }) : w.filter(t, e, n);
    }w.filter = function (e, t, n) {
        var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType;
        }));
    }, w.fn.extend({ find: function find(e) {
            var t,
                n,
                r = this.length,
                i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++) {
                    if (w.contains(i[t], this)) return !0;
                }
            }));for (n = this.pushStack([]), t = 0; t < r; t++) {
                w.find(e, i[t], n);
            }return r > 1 ? w.uniqueSort(n) : n;
        }, filter: function filter(e) {
            return this.pushStack(j(this, e || [], !1));
        }, not: function not(e) {
            return this.pushStack(j(this, e || [], !0));
        }, is: function is(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
        } });var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
        var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
                    g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                }return this;
            }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
    }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
            var t = w(e, this),
                n = t.length;return this.filter(function () {
                for (var e = 0; e < n; e++) {
                    if (w.contains(this, t[e])) return !0;
                }
            });
        }, closest: function closest(e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                        o.push(n);break;
                    }
                }
            }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        }, index: function index(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        }, addBack: function addBack(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        } });function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) {}return e;
    }w.each({ parent: function parent(e) {
            var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
        }, parents: function parents(e) {
            return k(e, "parentNode");
        }, parentsUntil: function parentsUntil(e, t, n) {
            return k(e, "parentNode", n);
        }, next: function next(e) {
            return P(e, "nextSibling");
        }, prev: function prev(e) {
            return P(e, "previousSibling");
        }, nextAll: function nextAll(e) {
            return k(e, "nextSibling");
        }, prevAll: function prevAll(e) {
            return k(e, "previousSibling");
        }, nextUntil: function nextUntil(e, t, n) {
            return k(e, "nextSibling", n);
        }, prevUntil: function prevUntil(e, t, n) {
            return k(e, "previousSibling", n);
        }, siblings: function siblings(e) {
            return S((e.parentNode || {}).firstChild, e);
        }, children: function children(e) {
            return S(e.firstChild);
        }, contents: function contents(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
        } }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
        };
    });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
        var t = {};return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0;
        }), t;
    }w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function u() {
            for (i = i || e.once, r = t = !0; a.length; s = -1) {
                n = a.shift();while (++s < o.length) {
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                }
            }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        },
            l = { add: function add() {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    w.each(n, function (n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                    });
                }(arguments), n && !t && u()), this;
            }, remove: function remove() {
                return w.each(arguments, function (e, t) {
                    var n;while ((n = w.inArray(t, o, n)) > -1) {
                        o.splice(n, 1), n <= s && s--;
                    }
                }), this;
            }, has: function has(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0;
            }, empty: function empty() {
                return o && (o = []), this;
            }, disable: function disable() {
                return i = a = [], o = n = "", this;
            }, disabled: function disabled() {
                return !o;
            }, lock: function lock() {
                return i = a = [], n || t || (o = n = ""), this;
            }, locked: function locked() {
                return !!i;
            }, fireWith: function fireWith(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
            }, fire: function fire() {
                return l.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!r;
            } };return l;
    };function I(e) {
        return e;
    }function W(e) {
        throw e;
    }function $(e, t, n, r) {
        var i;try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }w.extend({ Deferred: function Deferred(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                i = { state: function state() {
                    return r;
                }, always: function always() {
                    return o.done(arguments).fail(arguments), this;
                }, "catch": function _catch(e) {
                    return i.then(null, e);
                }, pipe: function pipe() {
                    var e = arguments;return w.Deferred(function (t) {
                        w.each(n, function (n, r) {
                            var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                            });
                        }), e = null;
                    }).promise();
                }, then: function then(t, r, i) {
                    var o = 0;function a(t, n, r, i) {
                        return function () {
                            var s = this,
                                u = arguments,
                                l = function l() {
                                var e, l;if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                                }
                            },
                                c = i ? l : function () {
                                try {
                                    l();
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                                }
                            };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                        };
                    }return w.Deferred(function (e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                    }).promise();
                }, promise: function promise(e) {
                    return null != e ? w.extend(e, i) : i;
                } },
                o = {};return w.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];i[t[1]] = a.add, s && a.add(function () {
                    r = s;
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[t[0] + "With"] = a.fireWith;
            }), i.promise(o), t && t.call(o, o), o;
        }, when: function when(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function s(e) {
                return function (n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
                };
            };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) {
                $(i[n], s(n), a.reject);
            }return a.promise();
        } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t;
        });
    };var F = w.Deferred();w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e);
        }), this;
    }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
        } }), w.ready.then = F.then;function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
    }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function z(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;if ("object" === x(n)) {
            i = !0;for (s in n) {
                z(e, t, s, n[s], !0, o, a);
            }
        } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
            return l.call(w(e), n);
        })), t)) for (; s < u; s++) {
            t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
        X = /^-ms-/,
        U = /-([a-z])/g;function V(e, t) {
        return t.toUpperCase();
    }function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }var Y = function Y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };function Q() {
        this.expando = w.expando + Q.uid++;
    }Q.uid = 1, Q.prototype = { cache: function cache(e) {
            var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
        }, set: function set(e, t, n) {
            var r,
                i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
                i[G(r)] = t[r];
            }return i;
        }, get: function get(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
        }, access: function access(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        }, remove: function remove(e, t) {
            var n,
                r = e[this.expando];if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) {
                        delete r[t[n]];
                    }
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        }, hasData: function hasData(e) {
            var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
        } };var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
    }function ne(e, t, n) {
        var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = te(n);
            } catch (e) {}K.set(e, t, n);
        } else n = void 0;return n;
    }w.extend({ hasData: function hasData(e) {
            return K.hasData(e) || J.hasData(e);
        }, data: function data(e, t, n) {
            return K.access(e, t, n);
        }, removeData: function removeData(e, t) {
            K.remove(e, t);
        }, _data: function _data(e, t, n) {
            return J.access(e, t, n);
        }, _removeData: function _removeData(e, t) {
            J.remove(e, t);
        } }), w.fn.extend({ data: function data(e, t) {
            var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;while (n--) {
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    }J.set(o, "hasDataAttrs", !0);
                }return i;
            }return "object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) ? this.each(function () {
                K.set(this, e);
            }) : z(this, function (t) {
                var n;if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
                } else this.each(function () {
                    K.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        }, removeData: function removeData(e) {
            return this.each(function () {
                K.remove(this, e);
            });
        } }), w.extend({ queue: function queue(e, t, n) {
            var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
        }, dequeue: function dequeue(e, t) {
            t = t || "fx";var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function a() {
                w.dequeue(e, t);
            };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        }, _queueHooks: function _queueHooks(e, t) {
            var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n]);
                }) });
        } }), w.fn.extend({ queue: function queue(e, t) {
            var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
            });
        }, dequeue: function dequeue(e) {
            return this.each(function () {
                w.dequeue(this, e);
            });
        }, clearQueue: function clearQueue(e) {
            return this.queue(e || "fx", []);
        }, promise: function promise(e, t) {
            var n,
                r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function s() {
                --r || i.resolveWith(o, [o]);
            };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
                (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            }return s(), i.promise(t);
        } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function ae(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
    },
        se = function se(e, t, n, r) {
        var i,
            o,
            a = {};for (o in t) {
            a[o] = e.style[o], e.style[o] = t[o];
        }i = n.apply(e, r || []);for (o in t) {
            e.style[o] = a[o];
        }return i;
    };function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ? function () {
            return r.cur();
        } : function () {
            return w.css(e, t, "");
        },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;while (a--) {
                w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            }c *= 2, w.style(e, t, c + l), n = n || [];
        }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }var le = {};function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
    }function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
            (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        }for (o = 0; o < a; o++) {
            null != i[o] && (e[o].style.display = i[o]);
        }return e;
    }w.fn.extend({ show: function show() {
            return fe(this, !0);
        }, hide: function hide() {
            return fe(this);
        }, toggle: function toggle(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide();
            });
        } });var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
        var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
    }function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
        }
    }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
            if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
                a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) {
                    a = a.lastChild;
                }w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
            } else p.push(t.createTextNode(o));
        }f.textContent = "", d = 0;while (o = p[d++]) {
            if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
                c = 0;while (o = a[c++]) {
                    he.test(o.type || "") && n.push(o);
                }
            }
        }return f;
    }!function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
        return !0;
    }function ke() {
        return !1;
    }function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }function De(e, t, n, r, i, o) {
        var a, s;if ("object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t))) {
            "string" != typeof n && (r = r || n, n = void 0);for (s in t) {
                De(e, s, n, r, t[s], o);
            }return e;
        }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
            return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n);
        });
    }w.event = { global: {}, add: function add(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                }), l = (t = (t || "").match(M) || [""]).length;while (l--) {
                    d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
                }
            }
        }, remove: function remove(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;while (l--) {
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) {
                            c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
                    } else for (d in u) {
                        w.event.remove(e, d + t[l], n, r, !0);
                    }
                }w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        }, dispatch: function dispatch(e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) {
                u[n] = arguments[n];
            }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    }
                }return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        }, handlers: function handlers(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for (o = [], a = {}, n = 0; n < u; n++) {
                        void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                    }o.length && s.push({ elem: l, handlers: o });
                }
            }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        }, addProp: function addProp(e, t) {
            Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                }, set: function set(t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                } });
        }, fix: function fix(e) {
            return e[w.expando] ? e : new w.Event(e);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    if (this === Se() && this.blur) return this.blur(), !1;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
                }, _default: function _default(e) {
                    return N(e.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                } } } }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
    }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
            var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
            var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
        w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
                var n,
                    r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            } };
    }), w.fn.extend({ on: function on(e, t, n, r) {
            return De(this, e, t, n, r);
        }, one: function one(e, t, n, r) {
            return De(this, e, t, n, r, 1);
        }, off: function off(e, t, n) {
            var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e))) {
                for (i in e) {
                    this.off(i, t, e[i]);
                }return this;
            }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t);
            });
        } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
    }function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }function Pe(e, t) {
        var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};for (i in l) {
                    for (n = 0, r = l[i].length; n < r; n++) {
                        w.event.add(t, i, l[i][n]);
                    }
                }
            }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
        }
    }function Me(e, t) {
        var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }function Re(e, t, n, r) {
        t = a.apply([], t);var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
        });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
                l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            }if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
                l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
            }
        }return e;
    }function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
            n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        }return e;
    }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
            return e.replace(Ne, "<$1></$2>");
        }, clone: function clone(e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
                Me(o[r], a[r]);
            }if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
                Pe(o[r], a[r]);
            } else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
        }, cleanData: function cleanData(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events) for (r in t.events) {
                            i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        }n[J.expando] = void 0;
                    }n[K.expando] && (n[K.expando] = void 0);
                }
            }
        } }), w.fn.extend({ detach: function detach(e) {
            return Ie(this, e, !0);
        }, remove: function remove(e) {
            return Ie(this, e);
        }, text: function text(e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        }, append: function append() {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
            });
        }, prepend: function prepend() {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);t.insertBefore(e, t.firstChild);
                }
            });
        }, before: function before() {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        }, after: function after() {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        }, empty: function empty() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            }return this;
        }, clone: function clone(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t);
            });
        }, html: function html(e) {
            return z(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);try {
                        for (; n < r; n++) {
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        }t = 0;
                    } catch (e) {}
                }t && this.empty().append(e);
            }, null, e, arguments.length);
        }, replaceWith: function replaceWith() {
            var e = [];return Re(this, arguments, function (t) {
                var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
            }, e);
        } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
                n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            }return this.pushStack(r);
        };
    });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function $e(t) {
        var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
    },
        Be = new RegExp(oe.join("|"), "i");!function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
            }
        }function n(e) {
            return Math.round(parseFloat(e));
        }var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
                return t(), o;
            }, pixelBoxStyles: function pixelBoxStyles() {
                return t(), s;
            }, pixelPosition: function pixelPosition() {
                return t(), i;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return t(), u;
            }, scrollboxSize: function scrollboxSize() {
                return t(), a;
            } }));
    }();function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }function _e(e, t) {
        return { get: function get() {
                if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
            } };
    }var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;function Qe(e) {
        if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;while (n--) {
            if ((e = Ge[n] + t) in Ye) return e;
        }
    }function Je(e) {
        var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }function Ke(e, t, n) {
        var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        }return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
    }function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;if (We.test(i)) {
            if (!n) return i;i = "auto";
        }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
    }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");return "" === n ? "1" : n;
                    }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === 'undefined' ? 'undefined' : _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        }, css: function css(e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        } }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = { get: function get(e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r);
                });
            }, set: function set(e, n, r) {
                var i,
                    o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
            } };
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        w.cssHooks[e + t] = { expand: function expand(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                }return i;
            } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }), w.fn.extend({ css: function css(e, t) {
            return z(this, function (e, t, n) {
                var r,
                    i,
                    o = {},
                    a = 0;if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) {
                        o[t[a]] = w.css(e, t[a], !1, r);
                    }return o;
                }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
            }, e, t, arguments.length > 1);
        } });function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }w.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
        }, cur: function cur() {
            var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
        }, run: function run(e) {
            var t,
                n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
        } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
                var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            }, set: function set(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
            } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        } }, w.easing = { linear: function linear(e) {
            return e;
        }, swing: function swing(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }function st() {
        return e.setTimeout(function () {
            nt = void 0;
        }), nt = Date.now();
    }function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        }return t && (i.opacity = i.width = e), i;
    }function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
            if (r = i[o].call(n, t, e)) return r;
        }
    }function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s();
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
            });
        }));for (r in t) {
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
                }d[r] = y && y[r] || w.style(e, r);
            }
        }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l;
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1;for (r in d) {
                u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                    g || fe([e]), J.remove(e, "fxshow");for (r in d) {
                        w.style(e, r, d[r]);
                    }
                })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
            }
        }
    }function ft(e, t) {
        var n, r, i, o, a;for (n in e) {
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];for (n in o) {
                    n in e || (e[n] = o[n], t[n] = i);
                }
            } else t[r] = i;
        }
    }function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
            delete u.elem;
        }),
            u = function u() {
            if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
                l.tweens[o].run(r);
            }return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
        },
            l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
            }, stop: function stop(t) {
                var n = 0,
                    r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
                    l.tweens[n].run(1);
                }return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
            } }),
            c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) {
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        }return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
    }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
                var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
            }] }, tweener: function tweener(e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) {
                n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
            }
        }, prefilters: [ct], prefilter: function prefilter(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        } }), w.speed = function (e, t, n) {
        var r = e && "object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }, r;
    }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        }, animate: function animate(e, t, n, r) {
            var i = w.isEmptyObject(e),
                o = w.speed(t, n, r),
                a = function a() {
                var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
            };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        }, stop: function stop(e, t, n) {
            var r = function r(e) {
                var t = e.stop;delete e.stop, t(n);
            };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = w.timers,
                    a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
                    a[i] && a[i].stop && ot.test(i) && r(a[i]);
                }for (i = o.length; i--;) {
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                }!t && n || w.dequeue(this, e);
            });
        }, finish: function finish(e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t,
                    n = J.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = w.timers,
                    a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                }for (t = 0; t < a; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this);
                }delete n.finish;
            });
        } }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
        };
    }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), w.timers = [], w.fx.tick = function () {
        var e,
            t = 0,
            n = w.timers;for (nt = Date.now(); t < n.length; t++) {
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }n.length || w.fx.stop(), nt = void 0;
    }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start();
    }, w.fx.interval = 13, w.fx.start = function () {
        rt || (rt = !0, at());
    }, w.fx.stop = function () {
        rt = null;
    }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);r.stop = function () {
                e.clearTimeout(i);
            };
        });
    }, function () {
        var e = r.createElement("input"),
            t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
    }();var dt,
        ht = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        }, removeAttr: function removeAttr(e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        } }), w.extend({ attr: function attr(e, t, n) {
            var r,
                i,
                o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
        }, attrHooks: { type: { set: function set(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                } } }, removeAttr: function removeAttr(e, t) {
            var n,
                r = 0,
                i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) {
                e.removeAttribute(n);
            }
        } }), dt = { set: function set(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
        } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
            var i,
                o,
                a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
        };
    });var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        }, removeProp: function removeProp(e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        } }), w.extend({ prop: function prop(e, t, n) {
            var r,
                i,
                o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        }, propHooks: { tabIndex: { get: function get(e) {
                    var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
            var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
        }, set: function set(e) {
            var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this;
    });function vt(e) {
        return (e.match(M) || []).join(" ");
    }function mt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }w.fn.extend({ addClass: function addClass(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)));
            });if ((t = xt(e)).length) while (n = this[u++]) {
                if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;while (o = t[a++]) {
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    }i !== (s = vt(r)) && n.setAttribute("class", s);
                }
            }return this;
        }, removeClass: function removeClass(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)));
            });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) {
                if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;while (o = t[a++]) {
                        while (r.indexOf(" " + o + " ") > -1) {
                            r = r.replace(" " + o + " ", " ");
                        }
                    }i !== (s = vt(r)) && n.setAttribute("class", s);
                }
            }return this;
        }, toggleClass: function toggleClass(e, t) {
            var n = typeof e === 'undefined' ? 'undefined' : _typeof(e),
                r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t);
            }) : this.each(function () {
                var t, i, o, a;if (r) {
                    i = 0, o = w(this), a = xt(e);while (t = a[i++]) {
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    }
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(e) {
            var t,
                n,
                r = 0;t = " " + e + " ";while (n = this[r++]) {
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            }return !1;
        } });var bt = /\r/g;w.fn.extend({ val: function val(e) {
            var t,
                n,
                r,
                i = this[0];{
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + "";
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        } }), w.extend({ valHooks: { option: { get: function get(e) {
                    var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
                } }, select: { get: function get(e) {
                    var t,
                        n,
                        r,
                        i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;s.push(t);
                        }
                    }return s;
                }, set: function set(e, t) {
                    var n,
                        r,
                        i = e.options,
                        o = w.makeArray(t),
                        a = i.length;while (a--) {
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    }return n || (e.selectedIndex = -1), o;
                } } } }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = { set: function set(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
            } }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function Tt(e) {
        e.stopPropagation();
    };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
                        v.push(s), u = s;
                    }u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) {
                    h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                }return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
            }
        }, simulate: function simulate(e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
        } }), w.fn.extend({ trigger: function trigger(e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this);
            });
        }, triggerHandler: function triggerHandler(e, t) {
            var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
        } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function n(e) {
            w.event.simulate(t, e.target, w.event.fix(e));
        };w.event.special[t] = { setup: function setup() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
            }, teardown: function teardown() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
            } };
    });var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;w.parseXML = function (t) {
        var n;if (!t || "string" != typeof t) return null;try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
    };var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
        var i;if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == (typeof i === 'undefined' ? 'undefined' : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
        });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
            jt(e + "[" + i + "]", t[i], n, r);
        }
    }w.param = function (e, t) {
        var n,
            r = [],
            i = function i(e, t) {
            var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value);
        });else for (n in e) {
            jt(n, e[n], t, i);
        }return r.join("&");
    }, w.fn.extend({ serialize: function serialize() {
            return w.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
            }).filter(function () {
                var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
            }).map(function (e, t) {
                var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return { name: t.name, value: e.replace(Dt, "\r\n") };
                }) : { name: t.name, value: n.replace(Dt, "\r\n") };
            }).get();
        } });var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) {
                "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            }
        };
    }function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;function a(s) {
            var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
            }), u;
        }return a(t.dataTypes[0]) || !i["*"] && a("*");
    }function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};for (n in t) {
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        }return r && w.extend(!0, e, r), e;
    }function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        }if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
                u.unshift(i);break;
            }
        }if (u[0] in n) o = u[0];else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;break;
                }a || (a = i);
            }o = o || a;
        }if (o) return o !== u[0] && u.unshift(o), n[o];
    }function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
        }o = c.shift();while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
                    }
                }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                    t = a(t);
                } catch (e) {
                    return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                }
            }
        }return { state: "success", data: t };
    }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function ajax(t, n) {
            "object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && (n = t, t = void 0), n = n || {};var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
                    var t;if (c) {
                        if (!s) {
                            s = {};while (t = Ot.exec(a)) {
                                s[t[1].toLowerCase()] = t[2];
                            }
                        }t = s[e.toLowerCase()];
                    }return null == t ? null : t;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return c ? a : null;
                }, setRequestHeader: function setRequestHeader(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
                }, overrideMimeType: function overrideMimeType(e) {
                    return null == c && (h.mimeType = e), this;
                }, statusCode: function statusCode(e) {
                    var t;if (e) if (c) E.always(e[E.status]);else for (t in e) {
                        x[t] = [x[t], e[t]];
                    }return this;
                }, abort: function abort(e) {
                    var t = e || C;return i && i.abort(t), k(0, t), this;
                } };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
                E.setRequestHeader(p, h.headers[p]);
            }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout");
                }, h.timeout));try {
                    c = !1, i.send(b, k);
                } catch (e) {
                    if (c) throw e;k(-1, e);
                }
            } else k(-1, "No Transport");function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
            }return E;
        }, getJSON: function getJSON(e, t, n) {
            return w.get(e, t, n, "json");
        }, getScript: function getScript(e, t) {
            return w.get(e, void 0, t, "script");
        } }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
        };
    }), w._evalUrl = function (e) {
        return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
    }, w.fn.extend({ wrapAll: function wrapAll(e) {
            var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;while (e.firstElementChild) {
                    e = e.firstElementChild;
                }return e;
            }).append(this)), this;
        }, wrapInner: function wrapInner(e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t));
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
            });
        }, wrap: function wrap(e) {
            var t = g(e);return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e);
            });
        }, unwrap: function unwrap(e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes);
            }), this;
        } }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e);
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var _n, r;if (h.cors || Gt && !t.crossDomain) return { send: function send(i, o) {
                var a,
                    s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
                    s[a] = t.xhrFields[a];
                }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) {
                    s.setRequestHeader(a, i[a]);
                }_n = function n(e) {
                    return function () {
                        _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                    };
                }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        _n && r();
                    });
                }, _n = _n("abort");try {
                    s.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (_n) throw e;
                }
            }, abort: function abort() {
                _n && _n();
            } };
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
    }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
                return w.globalEval(e), e;
            } } }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, _n2;return { send: function send(i, o) {
                    t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
                        t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
                    }), r.head.appendChild(t[0]);
                }, abort: function abort() {
                    _n2 && _n2();
                } };
        }
    });var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
        } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i,
            o,
            a,
            s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments;
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
        }), "script";
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
    }, w.fn.load = function (e, t, n) {
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e]);
            });
        }), this;
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e);
        };
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem;
        }).length;
    }, w.offset = { setOffset: function setOffset(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = w.css(e, "position"),
                f = w(e),
                p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
        } }, w.fn.extend({ offset: function offset(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t);
            });var t,
                n,
                r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
        }, position: function position() {
            if (this[0]) {
                var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
                        e = e.parentNode;
                    }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
                }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var e = this.offsetParent;while (e && "static" === w.css(e, "position")) {
                    e = e.offsetParent;
                }return e || be;
            });
        } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
        var n = "pageYOffset" === t;w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e, r, arguments.length);
        };
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
        });
    }), w.each({ Height: "height", Width: "width" }, function (e, t) {
        w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
                    var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
                }, t, a ? i : void 0, a);
            };
        });
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), w.fn.extend({ hover: function hover(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        } }), w.fn.extend({ bind: function bind(e, t, n) {
            return this.on(e, null, t, n);
        }, unbind: function unbind(e, t) {
            return this.off(e, null, t);
        }, delegate: function delegate(e, t, n, r) {
            return this.on(t, e, n, r);
        }, undelegate: function undelegate(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        } }), w.proxy = function (e, t) {
        var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
            return e.apply(t || this, r.concat(o.call(arguments)));
        }, i.guid = e.guid = e.guid || w.guid++, i;
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0);
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w;
    });var Jt = e.jQuery,
        Kt = e.$;return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }, t || (e.jQuery = e.$ = w), w;
});

/**
 * jscolor - JavaScript Color Picker
 *
 * @link    http://jscolor.com
 * @license For open source use: GPLv3
 *          For commercial use: JSColor Commercial License
 * @author  Jan Odvarko
 * @version 2.0.5
 *
 * See usage examples at http://jscolor.com/examples/
 */

var colorJS = document.querySelector('[data-jscolor]');

colorJS.addEventListener('click', function (e) {
    // log(e.target);
    if (!window.jscolor) {
        window.jscolor = function () {
            //
            //

            var jsc = {

                register: function register() {
                    jsc.attachDOMReadyEvent(jsc.init);
                    jsc.attachEvent(document, 'mousedown', jsc.onDocumentMouseDown);
                    jsc.attachEvent(document, 'touchstart', jsc.onDocumentTouchStart);
                    jsc.attachEvent(window, 'resize', jsc.onWindowResize);
                },

                init: function init() {
                    if (jsc.jscolor.lookupClass) {
                        jsc.jscolor.installByClassName(jsc.jscolor.lookupClass);
                    }
                },

                tryInstallOnElements: function tryInstallOnElements(elms, className) {
                    var matchClass = new RegExp('(^|\\s)(' + className + ')(\\s*(\\{[^}]*\\})|\\s|$)', 'i');

                    for (var i = 0; i < elms.length; i += 1) {
                        if (elms[i].type !== undefined && elms[i].type.toLowerCase() == 'color') {
                            if (jsc.isColorAttrSupported) {
                                // skip inputs of type 'color' if supported by the browser
                                continue;
                            }
                        }
                        var m;
                        if (!elms[i].jscolor && elms[i].className && (m = elms[i].className.match(matchClass))) {
                            var targetElm = elms[i];
                            var optsStr = null;

                            var dataOptions = jsc.getDataAttr(targetElm, 'jscolor');
                            if (dataOptions !== null) {
                                optsStr = dataOptions;
                            } else if (m[4]) {
                                optsStr = m[4];
                            }

                            var opts = {};
                            if (optsStr) {
                                try {
                                    opts = new Function('return (' + optsStr + ')')();
                                } catch (eParseError) {
                                    jsc.warn('Error parsing jscolor options: ' + eParseError + ':\n' + optsStr);
                                }
                            }
                            targetElm.jscolor = new jsc.jscolor(targetElm, opts);
                        }
                    }
                },

                isColorAttrSupported: function () {
                    var elm = document.createElement('input');
                    if (elm.setAttribute) {
                        elm.setAttribute('type', 'color');
                        if (elm.type.toLowerCase() == 'color') {
                            return true;
                        }
                    }
                    return false;
                }(),

                isCanvasSupported: function () {
                    var elm = document.createElement('canvas');
                    return !!(elm.getContext && elm.getContext('2d'));
                }(),

                fetchElement: function fetchElement(mixed) {
                    return typeof mixed === 'string' ? document.getElementById(mixed) : mixed;
                },

                isElementType: function isElementType(elm, type) {
                    return elm.nodeName.toLowerCase() === type.toLowerCase();
                },

                getDataAttr: function getDataAttr(el, name) {
                    var attrName = 'data-' + name;
                    var attrValue = el.getAttribute(attrName);
                    if (attrValue !== null) {
                        return attrValue;
                    }
                    return null;
                },

                attachEvent: function attachEvent(el, evnt, func) {
                    if (el.addEventListener) {
                        el.addEventListener(evnt, func, false);
                    } else if (el.attachEvent) {
                        el.attachEvent('on' + evnt, func);
                    }
                },

                detachEvent: function detachEvent(el, evnt, func) {
                    if (el.removeEventListener) {
                        el.removeEventListener(evnt, func, false);
                    } else if (el.detachEvent) {
                        el.detachEvent('on' + evnt, func);
                    }
                },

                _attachedGroupEvents: {},

                attachGroupEvent: function attachGroupEvent(groupName, el, evnt, func) {
                    if (!jsc._attachedGroupEvents.hasOwnProperty(groupName)) {
                        jsc._attachedGroupEvents[groupName] = [];
                    }
                    jsc._attachedGroupEvents[groupName].push([el, evnt, func]);
                    jsc.attachEvent(el, evnt, func);
                },

                detachGroupEvents: function detachGroupEvents(groupName) {
                    if (jsc._attachedGroupEvents.hasOwnProperty(groupName)) {
                        for (var i = 0; i < jsc._attachedGroupEvents[groupName].length; i += 1) {
                            var evt = jsc._attachedGroupEvents[groupName][i];
                            jsc.detachEvent(evt[0], evt[1], evt[2]);
                        }
                        delete jsc._attachedGroupEvents[groupName];
                    }
                },

                attachDOMReadyEvent: function attachDOMReadyEvent(func) {
                    var fired = false;
                    var fireOnce = function fireOnce() {
                        if (!fired) {
                            fired = true;
                            func();
                        }
                    };

                    if (document.readyState === 'complete') {
                        setTimeout(fireOnce, 1); // async
                        return;
                    }

                    if (document.addEventListener) {
                        document.addEventListener('DOMContentLoaded', fireOnce, false);

                        // Fallback
                        window.addEventListener('load', fireOnce, false);
                    } else if (document.attachEvent) {
                        // IE
                        document.attachEvent('onreadystatechange', function () {
                            if (document.readyState === 'complete') {
                                document.detachEvent('onreadystatechange', arguments.callee);
                                fireOnce();
                            }
                        });

                        // Fallback
                        window.attachEvent('onload', fireOnce);

                        // IE7/8
                        if (document.documentElement.doScroll && window == window.top) {
                            var tryScroll = function tryScroll() {
                                if (!document.body) {
                                    return;
                                }
                                try {
                                    document.documentElement.doScroll('left');
                                    fireOnce();
                                } catch (e) {
                                    setTimeout(tryScroll, 1);
                                }
                            };
                            tryScroll();
                        }
                    }
                },

                warn: function warn(msg) {
                    if (window.console && window.console.warn) {
                        window.console.warn(msg);
                    }
                },

                preventDefault: function preventDefault(e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                    e.returnValue = false;
                },

                captureTarget: function captureTarget(target) {
                    // IE
                    if (target.setCapture) {
                        jsc._capturedTarget = target;
                        jsc._capturedTarget.setCapture();
                    }
                },

                releaseTarget: function releaseTarget() {
                    // IE
                    if (jsc._capturedTarget) {
                        jsc._capturedTarget.releaseCapture();
                        jsc._capturedTarget = null;
                    }
                },

                fireEvent: function fireEvent(el, evnt) {
                    if (!el) {
                        return;
                    }
                    if (document.createEvent) {
                        var ev = document.createEvent('HTMLEvents');
                        ev.initEvent(evnt, true, true);
                        el.dispatchEvent(ev);
                    } else if (document.createEventObject) {
                        var ev = document.createEventObject();
                        el.fireEvent('on' + evnt, ev);
                    } else if (el['on' + evnt]) {
                        // alternatively use the traditional event model
                        el['on' + evnt]();
                    }
                },

                classNameToList: function classNameToList(className) {
                    return className.replace(/^\s+|\s+$/g, '').split(/\s+/);
                },

                // The className parameter (str) can only contain a single class name
                hasClass: function hasClass(elm, className) {
                    if (!className) {
                        return false;
                    }
                    return -1 != (' ' + elm.className.replace(/\s+/g, ' ') + ' ').indexOf(' ' + className + ' ');
                },

                // The className parameter (str) can contain multiple class names separated by whitespace
                setClass: function setClass(elm, className) {
                    var classList = jsc.classNameToList(className);
                    for (var i = 0; i < classList.length; i += 1) {
                        if (!jsc.hasClass(elm, classList[i])) {
                            elm.className += (elm.className ? ' ' : '') + classList[i];
                        }
                    }
                },

                // The className parameter (str) can contain multiple class names separated by whitespace
                unsetClass: function unsetClass(elm, className) {
                    var classList = jsc.classNameToList(className);
                    for (var i = 0; i < classList.length; i += 1) {
                        var repl = new RegExp('^\\s*' + classList[i] + '\\s*|' + '\\s*' + classList[i] + '\\s*$|' + '\\s+' + classList[i] + '(\\s+)', 'g');
                        elm.className = elm.className.replace(repl, '$1');
                    }
                },

                getStyle: function getStyle(elm) {
                    return window.getComputedStyle ? window.getComputedStyle(elm) : elm.currentStyle;
                },

                setStyle: function () {
                    var helper = document.createElement('div');
                    var getSupportedProp = function getSupportedProp(names) {
                        for (var i = 0; i < names.length; i += 1) {
                            if (names[i] in helper.style) {
                                return names[i];
                            }
                        }
                    };
                    var props = {
                        borderRadius: getSupportedProp(['borderRadius', 'MozBorderRadius', 'webkitBorderRadius']),
                        boxShadow: getSupportedProp(['boxShadow', 'MozBoxShadow', 'webkitBoxShadow'])
                    };
                    return function (elm, prop, value) {
                        switch (prop.toLowerCase()) {
                            case 'opacity':
                                var alphaOpacity = Math.round(parseFloat(value) * 100);
                                elm.style.opacity = value;
                                elm.style.filter = 'alpha(opacity=' + alphaOpacity + ')';
                                break;
                            default:
                                elm.style[props[prop]] = value;
                                break;
                        }
                    };
                }(),

                setBorderRadius: function setBorderRadius(elm, value) {
                    jsc.setStyle(elm, 'borderRadius', value || '0');
                },

                setBoxShadow: function setBoxShadow(elm, value) {
                    jsc.setStyle(elm, 'boxShadow', value || 'none');
                },

                getElementPos: function getElementPos(e, relativeToViewport) {
                    var x = 0,
                        y = 0;
                    var rect = e.getBoundingClientRect();
                    x = rect.left;
                    y = rect.top;
                    if (!relativeToViewport) {
                        var viewPos = jsc.getViewPos();
                        x += viewPos[0];
                        y += viewPos[1];
                    }
                    return [x, y];
                },

                getElementSize: function getElementSize(e) {
                    return [e.offsetWidth, e.offsetHeight];
                },

                // get pointer's X/Y coordinates relative to viewport
                getAbsPointerPos: function getAbsPointerPos(e) {
                    if (!e) {
                        e = window.event;
                    }
                    var x = 0,
                        y = 0;
                    if (typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {
                        // touch devices
                        x = e.changedTouches[0].clientX;
                        y = e.changedTouches[0].clientY;
                    } else if (typeof e.clientX === 'number') {
                        x = e.clientX;
                        y = e.clientY;
                    }
                    return { x: x, y: y };
                },

                // get pointer's X/Y coordinates relative to target element
                getRelPointerPos: function getRelPointerPos(e) {
                    if (!e) {
                        e = window.event;
                    }
                    var target = e.target || e.srcElement;
                    var targetRect = target.getBoundingClientRect();

                    var x = 0,
                        y = 0;

                    var clientX = 0,
                        clientY = 0;
                    if (typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {
                        // touch devices
                        clientX = e.changedTouches[0].clientX;
                        clientY = e.changedTouches[0].clientY;
                    } else if (typeof e.clientX === 'number') {
                        clientX = e.clientX;
                        clientY = e.clientY;
                    }

                    x = clientX - targetRect.left;
                    y = clientY - targetRect.top;
                    return { x: x, y: y };
                },

                getViewPos: function getViewPos() {
                    var doc = document.documentElement;
                    return [(window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0), (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)];
                },

                getViewSize: function getViewSize() {
                    var doc = document.documentElement;
                    return [window.innerWidth || doc.clientWidth, window.innerHeight || doc.clientHeight];
                },

                redrawPosition: function redrawPosition() {

                    if (jsc.picker && jsc.picker.owner) {
                        var thisObj = jsc.picker.owner;

                        var tp, vp;

                        if (thisObj.fixed) {
                            // Fixed elements are positioned relative to viewport,
                            // therefore we can ignore the scroll offset
                            tp = jsc.getElementPos(thisObj.targetElement, true); // target pos
                            vp = [0, 0]; // view pos
                        } else {
                            tp = jsc.getElementPos(thisObj.targetElement); // target pos
                            vp = jsc.getViewPos(); // view pos
                        }

                        var ts = jsc.getElementSize(thisObj.targetElement); // target size
                        var vs = jsc.getViewSize(); // view size
                        var ps = jsc.getPickerOuterDims(thisObj); // picker size
                        var a, b, c;
                        switch (thisObj.position.toLowerCase()) {
                            case 'left':
                                a = 1;
                                b = 0;
                                c = -1;
                                break;
                            case 'right':
                                a = 1;
                                b = 0;
                                c = 1;
                                break;
                            case 'top':
                                a = 0;
                                b = 1;
                                c = -1;
                                break;
                            default:
                                a = 0;
                                b = 1;
                                c = 1;
                                break;
                        }
                        var l = (ts[b] + ps[b]) / 2;

                        // compute picker position
                        if (!thisObj.smartPosition) {
                            var pp = [tp[a], tp[b] + ts[b] - l + l * c];
                        } else {
                            var pp = [-vp[a] + tp[a] + ps[a] > vs[a] ? -vp[a] + tp[a] + ts[a] / 2 > vs[a] / 2 && tp[a] + ts[a] - ps[a] >= 0 ? tp[a] + ts[a] - ps[a] : tp[a] : tp[a], -vp[b] + tp[b] + ts[b] + ps[b] - l + l * c > vs[b] ? -vp[b] + tp[b] + ts[b] / 2 > vs[b] / 2 && tp[b] + ts[b] - l - l * c >= 0 ? tp[b] + ts[b] - l - l * c : tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l + l * c >= 0 ? tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l - l * c];
                        }

                        var x = pp[a];
                        var y = pp[b];
                        var positionValue = thisObj.fixed ? 'fixed' : 'absolute';
                        var contractShadow = (pp[0] + ps[0] > tp[0] || pp[0] < tp[0] + ts[0]) && pp[1] + ps[1] < tp[1] + ts[1];

                        jsc._drawPosition(thisObj, x, y, positionValue, contractShadow);
                    }
                },

                _drawPosition: function _drawPosition(thisObj, x, y, positionValue, contractShadow) {
                    var vShadow = contractShadow ? 0 : thisObj.shadowBlur; // px

                    jsc.picker.wrap.style.position = positionValue;
                    jsc.picker.wrap.style.left = x + 'px';
                    jsc.picker.wrap.style.top = y + 'px';

                    jsc.setBoxShadow(jsc.picker.boxS, thisObj.shadow ? new jsc.BoxShadow(0, vShadow, thisObj.shadowBlur, 0, thisObj.shadowColor) : null);
                },

                getPickerDims: function getPickerDims(thisObj) {
                    var displaySlider = !!jsc.getSliderComponent(thisObj);
                    var dims = [2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.width + (displaySlider ? 2 * thisObj.insetWidth + jsc.getPadToSliderPadding(thisObj) + thisObj.sliderSize : 0), 2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.height + (thisObj.closable ? 2 * thisObj.insetWidth + thisObj.padding + thisObj.buttonHeight : 0)];
                    return dims;
                },

                getPickerOuterDims: function getPickerOuterDims(thisObj) {
                    var dims = jsc.getPickerDims(thisObj);
                    return [dims[0] + 2 * thisObj.borderWidth, dims[1] + 2 * thisObj.borderWidth];
                },

                getPadToSliderPadding: function getPadToSliderPadding(thisObj) {
                    return Math.max(thisObj.padding, 1.5 * (2 * thisObj.pointerBorderWidth + thisObj.pointerThickness));
                },

                getPadYComponent: function getPadYComponent(thisObj) {
                    switch (thisObj.mode.charAt(1).toLowerCase()) {
                        case 'v':
                            return 'v';
                            break;
                    }
                    return 's';
                },

                getSliderComponent: function getSliderComponent(thisObj) {
                    if (thisObj.mode.length > 2) {
                        switch (thisObj.mode.charAt(2).toLowerCase()) {
                            case 's':
                                return 's';
                                break;
                            case 'v':
                                return 'v';
                                break;
                        }
                    }
                    return null;
                },

                onDocumentMouseDown: function onDocumentMouseDown(e) {
                    if (!e) {
                        e = window.event;
                    }
                    var target = e.target || e.srcElement;

                    if (target._jscLinkedInstance) {
                        if (target._jscLinkedInstance.showOnClick) {
                            target._jscLinkedInstance.show();
                        }
                    } else if (target._jscControlName) {
                        jsc.onControlPointerStart(e, target, target._jscControlName, 'mouse');
                    } else {
                        // Mouse is outside the picker controls -> hide the color picker!
                        if (jsc.picker && jsc.picker.owner) {
                            jsc.picker.owner.hide();
                        }
                    }
                },

                onDocumentTouchStart: function onDocumentTouchStart(e) {
                    if (!e) {
                        e = window.event;
                    }
                    var target = e.target || e.srcElement;

                    if (target._jscLinkedInstance) {
                        if (target._jscLinkedInstance.showOnClick) {
                            target._jscLinkedInstance.show();
                        }
                    } else if (target._jscControlName) {
                        jsc.onControlPointerStart(e, target, target._jscControlName, 'touch');
                    } else {
                        if (jsc.picker && jsc.picker.owner) {
                            jsc.picker.owner.hide();
                        }
                    }
                },

                onWindowResize: function onWindowResize(e) {
                    jsc.redrawPosition();
                },

                onParentScroll: function onParentScroll(e) {
                    // hide the picker when one of the parent elements is scrolled
                    if (jsc.picker && jsc.picker.owner) {
                        jsc.picker.owner.hide();
                    }
                },

                _pointerMoveEvent: {
                    mouse: 'mousemove',
                    touch: 'touchmove'
                },
                _pointerEndEvent: {
                    mouse: 'mouseup',
                    touch: 'touchend'
                },

                _pointerOrigin: null,
                _capturedTarget: null,

                onControlPointerStart: function onControlPointerStart(e, target, controlName, pointerType) {
                    var thisObj = target._jscInstance;

                    jsc.preventDefault(e);
                    jsc.captureTarget(target);

                    var registerDragEvents = function registerDragEvents(doc, offset) {
                        jsc.attachGroupEvent('drag', doc, jsc._pointerMoveEvent[pointerType], jsc.onDocumentPointerMove(e, target, controlName, pointerType, offset));
                        jsc.attachGroupEvent('drag', doc, jsc._pointerEndEvent[pointerType], jsc.onDocumentPointerEnd(e, target, controlName, pointerType));
                    };

                    registerDragEvents(document, [0, 0]);

                    if (window.parent && window.frameElement) {
                        var rect = window.frameElement.getBoundingClientRect();
                        var ofs = [-rect.left, -rect.top];
                        registerDragEvents(window.parent.window.document, ofs);
                    }

                    var abs = jsc.getAbsPointerPos(e);
                    var rel = jsc.getRelPointerPos(e);
                    jsc._pointerOrigin = {
                        x: abs.x - rel.x,
                        y: abs.y - rel.y
                    };

                    switch (controlName) {
                        case 'pad':
                            // if the slider is at the bottom, move it up
                            switch (jsc.getSliderComponent(thisObj)) {
                                case 's':
                                    if (thisObj.hsv[1] === 0) {
                                        thisObj.fromHSV(null, 100, null);
                                    }
                                    ;
                                    break;
                                case 'v':
                                    if (thisObj.hsv[2] === 0) {
                                        thisObj.fromHSV(null, null, 100);
                                    }
                                    ;
                                    break;
                            }
                            jsc.setPad(thisObj, e, 0, 0);
                            break;

                        case 'sld':
                            jsc.setSld(thisObj, e, 0);
                            break;
                    }

                    jsc.dispatchFineChange(thisObj);
                },

                onDocumentPointerMove: function onDocumentPointerMove(e, target, controlName, pointerType, offset) {
                    return function (e) {
                        var thisObj = target._jscInstance;
                        switch (controlName) {
                            case 'pad':
                                if (!e) {
                                    e = window.event;
                                }
                                jsc.setPad(thisObj, e, offset[0], offset[1]);
                                jsc.dispatchFineChange(thisObj);
                                break;

                            case 'sld':
                                if (!e) {
                                    e = window.event;
                                }
                                jsc.setSld(thisObj, e, offset[1]);
                                jsc.dispatchFineChange(thisObj);
                                break;
                        }
                    };
                },

                onDocumentPointerEnd: function onDocumentPointerEnd(e, target, controlName, pointerType) {
                    return function (e) {
                        var thisObj = target._jscInstance;
                        jsc.detachGroupEvents('drag');
                        jsc.releaseTarget();
                        // Always dispatch changes after detaching outstanding mouse handlers,
                        // in case some user interaction will occur in user's onchange callback
                        // that would intrude with current mouse events
                        jsc.dispatchChange(thisObj);
                    };
                },

                dispatchChange: function dispatchChange(thisObj) {
                    if (thisObj.valueElement) {
                        if (jsc.isElementType(thisObj.valueElement, 'input')) {
                            jsc.fireEvent(thisObj.valueElement, 'change');
                        }
                    }
                },

                dispatchFineChange: function dispatchFineChange(thisObj) {
                    if (thisObj.onFineChange) {
                        var callback;
                        if (typeof thisObj.onFineChange === 'string') {
                            callback = new Function(thisObj.onFineChange);
                        } else {
                            callback = thisObj.onFineChange;
                        }
                        callback.call(thisObj);
                    }
                },

                setPad: function setPad(thisObj, e, ofsX, ofsY) {
                    var pointerAbs = jsc.getAbsPointerPos(e);
                    var x = ofsX + pointerAbs.x - jsc._pointerOrigin.x - thisObj.padding - thisObj.insetWidth;
                    var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;

                    var xVal = x * (360 / (thisObj.width - 1));
                    var yVal = 100 - y * (100 / (thisObj.height - 1));

                    switch (jsc.getPadYComponent(thisObj)) {
                        case 's':
                            thisObj.fromHSV(xVal, yVal, null, jsc.leaveSld);
                            break;
                        case 'v':
                            thisObj.fromHSV(xVal, null, yVal, jsc.leaveSld);
                            break;
                    }
                },

                setSld: function setSld(thisObj, e, ofsY) {
                    var pointerAbs = jsc.getAbsPointerPos(e);
                    var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;

                    var yVal = 100 - y * (100 / (thisObj.height - 1));

                    switch (jsc.getSliderComponent(thisObj)) {
                        case 's':
                            thisObj.fromHSV(null, yVal, null, jsc.leavePad);
                            break;
                        case 'v':
                            thisObj.fromHSV(null, null, yVal, jsc.leavePad);
                            break;
                    }
                },

                _vmlNS: 'jsc_vml_',
                _vmlCSS: 'jsc_vml_css_',
                _vmlReady: false,

                initVML: function initVML() {
                    if (!jsc._vmlReady) {
                        // init VML namespace
                        var doc = document;
                        if (!doc.namespaces[jsc._vmlNS]) {
                            doc.namespaces.add(jsc._vmlNS, 'urn:schemas-microsoft-com:vml');
                        }
                        if (!doc.styleSheets[jsc._vmlCSS]) {
                            var tags = ['shape', 'shapetype', 'group', 'background', 'path', 'formulas', 'handles', 'fill', 'stroke', 'shadow', 'textbox', 'textpath', 'imagedata', 'line', 'polyline', 'curve', 'rect', 'roundrect', 'oval', 'arc', 'image'];
                            var ss = doc.createStyleSheet();
                            ss.owningElement.id = jsc._vmlCSS;
                            for (var i = 0; i < tags.length; i += 1) {
                                ss.addRule(jsc._vmlNS + '\\:' + tags[i], 'behavior:url(#default#VML);');
                            }
                        }
                        jsc._vmlReady = true;
                    }
                },

                createPalette: function createPalette() {

                    var paletteObj = {
                        elm: null,
                        draw: null
                    };

                    if (jsc.isCanvasSupported) {
                        // Canvas implementation for modern browsers

                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext('2d');

                        var drawFunc = function drawFunc(width, height, type) {
                            canvas.width = width;
                            canvas.height = height;

                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            var hGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);
                            hGrad.addColorStop(0 / 6, '#F00');
                            hGrad.addColorStop(1 / 6, '#FF0');
                            hGrad.addColorStop(2 / 6, '#0F0');
                            hGrad.addColorStop(3 / 6, '#0FF');
                            hGrad.addColorStop(4 / 6, '#00F');
                            hGrad.addColorStop(5 / 6, '#F0F');
                            hGrad.addColorStop(6 / 6, '#F00');

                            ctx.fillStyle = hGrad;
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            var vGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
                            switch (type.toLowerCase()) {
                                case 's':
                                    vGrad.addColorStop(0, 'rgba(255,255,255,0)');
                                    vGrad.addColorStop(1, 'rgba(255,255,255,1)');
                                    break;
                                case 'v':
                                    vGrad.addColorStop(0, 'rgba(0,0,0,0)');
                                    vGrad.addColorStop(1, 'rgba(0,0,0,1)');
                                    break;
                            }
                            ctx.fillStyle = vGrad;
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                        };

                        paletteObj.elm = canvas;
                        paletteObj.draw = drawFunc;
                    } else {
                        // VML fallback for IE 7 and 8

                        jsc.initVML();

                        var vmlContainer = document.createElement('div');
                        vmlContainer.style.position = 'relative';
                        vmlContainer.style.overflow = 'hidden';

                        var hGrad = document.createElement(jsc._vmlNS + ':fill');
                        hGrad.type = 'gradient';
                        hGrad.method = 'linear';
                        hGrad.angle = '90';
                        hGrad.colors = '16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0';

                        var hRect = document.createElement(jsc._vmlNS + ':rect');
                        hRect.style.position = 'absolute';
                        hRect.style.left = -1 + 'px';
                        hRect.style.top = -1 + 'px';
                        hRect.stroked = false;
                        hRect.appendChild(hGrad);
                        vmlContainer.appendChild(hRect);

                        var vGrad = document.createElement(jsc._vmlNS + ':fill');
                        vGrad.type = 'gradient';
                        vGrad.method = 'linear';
                        vGrad.angle = '180';
                        vGrad.opacity = '0';

                        var vRect = document.createElement(jsc._vmlNS + ':rect');
                        vRect.style.position = 'absolute';
                        vRect.style.left = -1 + 'px';
                        vRect.style.top = -1 + 'px';
                        vRect.stroked = false;
                        vRect.appendChild(vGrad);
                        vmlContainer.appendChild(vRect);

                        var drawFunc = function drawFunc(width, height, type) {
                            vmlContainer.style.width = width + 'px';
                            vmlContainer.style.height = height + 'px';

                            hRect.style.width = vRect.style.width = width + 1 + 'px';
                            hRect.style.height = vRect.style.height = height + 1 + 'px';

                            // Colors must be specified during every redraw, otherwise IE won't display
                            // a full gradient during a subsequential redraw
                            hGrad.color = '#F00';
                            hGrad.color2 = '#F00';

                            switch (type.toLowerCase()) {
                                case 's':
                                    vGrad.color = vGrad.color2 = '#FFF';
                                    break;
                                case 'v':
                                    vGrad.color = vGrad.color2 = '#000';
                                    break;
                            }
                        };

                        paletteObj.elm = vmlContainer;
                        paletteObj.draw = drawFunc;
                    }

                    return paletteObj;
                },

                createSliderGradient: function createSliderGradient() {

                    var sliderObj = {
                        elm: null,
                        draw: null
                    };

                    if (jsc.isCanvasSupported) {
                        // Canvas implementation for modern browsers

                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext('2d');

                        var drawFunc = function drawFunc(width, height, color1, color2) {
                            canvas.width = width;
                            canvas.height = height;

                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            var grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
                            grad.addColorStop(0, color1);
                            grad.addColorStop(1, color2);

                            ctx.fillStyle = grad;
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                        };

                        sliderObj.elm = canvas;
                        sliderObj.draw = drawFunc;
                    } else {
                        // VML fallback for IE 7 and 8

                        jsc.initVML();

                        var vmlContainer = document.createElement('div');
                        vmlContainer.style.position = 'relative';
                        vmlContainer.style.overflow = 'hidden';

                        var grad = document.createElement(jsc._vmlNS + ':fill');
                        grad.type = 'gradient';
                        grad.method = 'linear';
                        grad.angle = '180';

                        var rect = document.createElement(jsc._vmlNS + ':rect');
                        rect.style.position = 'absolute';
                        rect.style.left = -1 + 'px';
                        rect.style.top = -1 + 'px';
                        rect.stroked = false;
                        rect.appendChild(grad);
                        vmlContainer.appendChild(rect);

                        var drawFunc = function drawFunc(width, height, color1, color2) {
                            vmlContainer.style.width = width + 'px';
                            vmlContainer.style.height = height + 'px';

                            rect.style.width = width + 1 + 'px';
                            rect.style.height = height + 1 + 'px';

                            grad.color = color1;
                            grad.color2 = color2;
                        };

                        sliderObj.elm = vmlContainer;
                        sliderObj.draw = drawFunc;
                    }

                    return sliderObj;
                },

                leaveValue: 1 << 0,
                leaveStyle: 1 << 1,
                leavePad: 1 << 2,
                leaveSld: 1 << 3,

                BoxShadow: function () {
                    var BoxShadow = function BoxShadow(hShadow, vShadow, blur, spread, color, inset) {
                        this.hShadow = hShadow;
                        this.vShadow = vShadow;
                        this.blur = blur;
                        this.spread = spread;
                        this.color = color;
                        this.inset = !!inset;
                    };

                    BoxShadow.prototype.toString = function () {
                        var vals = [Math.round(this.hShadow) + 'px', Math.round(this.vShadow) + 'px', Math.round(this.blur) + 'px', Math.round(this.spread) + 'px', this.color];
                        if (this.inset) {
                            vals.push('inset');
                        }
                        return vals.join(' ');
                    };

                    return BoxShadow;
                }(),

                //
                // Usage:
                // var myColor = new jscolor(<targetElement> [, <options>])
                //

                jscolor: function jscolor(targetElement, options) {

                    // General options
                    //
                    this.value = null; // initial HEX color. To change it later, use methods fromString(), fromHSV() and fromRGB()
                    this.valueElement = targetElement; // element that will be used to display and input the color code
                    this.styleElement = targetElement; // element that will preview the picked color using CSS backgroundColor
                    this.required = true; // whether the associated text <input> can be left empty
                    this.refine = true; // whether to refine the entered color code (e.g. uppercase it and remove whitespace)
                    this.hash = false; // whether to prefix the HEX color code with # symbol
                    this.uppercase = true; // whether to show the color code in upper case
                    this.onFineChange = null; // called instantly every time the color changes (value can be either a function or a string with javascript code)
                    this.activeClass = 'jscolor-active'; // class to be set to the target element when a picker window is open on it
                    this.overwriteImportant = false; // whether to overwrite colors of styleElement using !important
                    this.minS = 0; // min allowed saturation (0 - 100)
                    this.maxS = 100; // max allowed saturation (0 - 100)
                    this.minV = 0; // min allowed value (brightness) (0 - 100)
                    this.maxV = 100; // max allowed value (brightness) (0 - 100)

                    // Accessing the picked color
                    //
                    this.hsv = [0, 0, 100]; // read-only  [0-360, 0-100, 0-100]
                    this.rgb = [255, 255, 255]; // read-only  [0-255, 0-255, 0-255]

                    // Color Picker options
                    //
                    this.width = 181; // width of color palette (in px)
                    this.height = 101; // height of color palette (in px)
                    this.showOnClick = true; // whether to display the color picker when user clicks on its target element
                    this.mode = 'HSV'; // HSV | HVS | HS | HV - layout of the color picker controls
                    this.position = 'bottom'; // left | right | top | bottom - position relative to the target element
                    this.smartPosition = true; // automatically change picker position when there is not enough space for it
                    this.sliderSize = 16; // px
                    this.crossSize = 8; // px
                    this.closable = false; // whether to display the Close button
                    this.closeText = 'Close';
                    this.buttonColor = '#000000'; // CSS color
                    this.buttonHeight = 18; // px
                    this.padding = 12; // px
                    this.backgroundColor = '#FFFFFF'; // CSS color
                    this.borderWidth = 1; // px
                    this.borderColor = '#BBBBBB'; // CSS color
                    this.borderRadius = 8; // px
                    this.insetWidth = 1; // px
                    this.insetColor = '#BBBBBB'; // CSS color
                    this.shadow = true; // whether to display shadow
                    this.shadowBlur = 15; // px
                    this.shadowColor = 'rgba(0,0,0,0.2)'; // CSS color
                    this.pointerColor = '#4C4C4C'; // px
                    this.pointerBorderColor = '#FFFFFF'; // px
                    this.pointerBorderWidth = 1; // px
                    this.pointerThickness = 2; // px
                    this.zIndex = 1000;
                    this.container = null; // where to append the color picker (BODY element by default)


                    for (var opt in options) {
                        if (options.hasOwnProperty(opt)) {
                            this[opt] = options[opt];
                        }
                    }

                    this.hide = function () {
                        if (isPickerOwner()) {
                            detachPicker();
                        }
                    };

                    this.show = function () {
                        drawPicker();
                    };

                    this.redraw = function () {
                        if (isPickerOwner()) {
                            drawPicker();
                        }
                    };

                    this.importColor = function () {
                        if (!this.valueElement) {
                            this.exportColor();
                        } else {
                            if (jsc.isElementType(this.valueElement, 'input')) {
                                if (!this.refine) {
                                    if (!this.fromString(this.valueElement.value, jsc.leaveValue)) {
                                        if (this.styleElement) {
                                            this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;
                                            this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;
                                            this.styleElement.style.color = this.styleElement._jscOrigStyle.color;
                                        }
                                        this.exportColor(jsc.leaveValue | jsc.leaveStyle);
                                    }
                                } else if (!this.required && /^\s*$/.test(this.valueElement.value)) {
                                    this.valueElement.value = '';
                                    if (this.styleElement) {
                                        this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;
                                        this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;
                                        this.styleElement.style.color = this.styleElement._jscOrigStyle.color;
                                    }
                                    this.exportColor(jsc.leaveValue | jsc.leaveStyle);
                                } else if (this.fromString(this.valueElement.value)) {
                                    // managed to import color successfully from the value -> OK, don't do anything
                                } else {
                                    this.exportColor();
                                }
                            } else {
                                // not an input element -> doesn't have any value
                                this.exportColor();
                            }
                        }
                    };

                    this.exportColor = function (flags) {
                        if (!(flags & jsc.leaveValue) && this.valueElement) {
                            var value = this.toString();
                            if (this.uppercase) {
                                value = value.toUpperCase();
                            }
                            if (this.hash) {
                                value = '#' + value;
                            }

                            if (jsc.isElementType(this.valueElement, 'input')) {
                                this.valueElement.value = value;
                            } else {
                                this.valueElement.innerHTML = value;
                            }
                        }
                        if (!(flags & jsc.leaveStyle)) {
                            if (this.styleElement) {
                                var bgColor = '#' + this.toString();
                                var fgColor = this.isLight() ? '#000' : '#FFF';

                                this.styleElement.style.backgroundImage = 'none';
                                this.styleElement.style.backgroundColor = bgColor;
                                this.styleElement.style.color = fgColor;

                                if (this.overwriteImportant) {
                                    this.styleElement.setAttribute('style', 'background: ' + bgColor + ' !important; ' + 'color: ' + fgColor + ' !important;');
                                }
                            }
                        }
                        if (!(flags & jsc.leavePad) && isPickerOwner()) {
                            redrawPad();
                        }
                        if (!(flags & jsc.leaveSld) && isPickerOwner()) {
                            redrawSld();
                        }
                    };

                    // h: 0-360
                    // s: 0-100
                    // v: 0-100
                    //
                    this.fromHSV = function (h, s, v, flags) {
                        // null = don't change
                        if (h !== null) {
                            if (isNaN(h)) {
                                return false;
                            }
                            h = Math.max(0, Math.min(360, h));
                        }
                        if (s !== null) {
                            if (isNaN(s)) {
                                return false;
                            }
                            s = Math.max(0, Math.min(100, this.maxS, s), this.minS);
                        }
                        if (v !== null) {
                            if (isNaN(v)) {
                                return false;
                            }
                            v = Math.max(0, Math.min(100, this.maxV, v), this.minV);
                        }

                        this.rgb = HSV_RGB(h === null ? this.hsv[0] : this.hsv[0] = h, s === null ? this.hsv[1] : this.hsv[1] = s, v === null ? this.hsv[2] : this.hsv[2] = v);

                        this.exportColor(flags);
                    };

                    // r: 0-255
                    // g: 0-255
                    // b: 0-255
                    //
                    this.fromRGB = function (r, g, b, flags) {
                        // null = don't change
                        if (r !== null) {
                            if (isNaN(r)) {
                                return false;
                            }
                            r = Math.max(0, Math.min(255, r));
                        }
                        if (g !== null) {
                            if (isNaN(g)) {
                                return false;
                            }
                            g = Math.max(0, Math.min(255, g));
                        }
                        if (b !== null) {
                            if (isNaN(b)) {
                                return false;
                            }
                            b = Math.max(0, Math.min(255, b));
                        }

                        var hsv = RGB_HSV(r === null ? this.rgb[0] : r, g === null ? this.rgb[1] : g, b === null ? this.rgb[2] : b);
                        if (hsv[0] !== null) {
                            this.hsv[0] = Math.max(0, Math.min(360, hsv[0]));
                        }
                        if (hsv[2] !== 0) {
                            this.hsv[1] = hsv[1] === null ? null : Math.max(0, this.minS, Math.min(100, this.maxS, hsv[1]));
                        }
                        this.hsv[2] = hsv[2] === null ? null : Math.max(0, this.minV, Math.min(100, this.maxV, hsv[2]));

                        // update RGB according to final HSV, as some values might be trimmed
                        var rgb = HSV_RGB(this.hsv[0], this.hsv[1], this.hsv[2]);
                        this.rgb[0] = rgb[0];
                        this.rgb[1] = rgb[1];
                        this.rgb[2] = rgb[2];

                        this.exportColor(flags);
                    };

                    this.fromString = function (str, flags) {
                        var m;
                        if (m = str.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i)) {
                            // HEX notation
                            //

                            if (m[1].length === 6) {
                                // 6-char notation
                                this.fromRGB(parseInt(m[1].substr(0, 2), 16), parseInt(m[1].substr(2, 2), 16), parseInt(m[1].substr(4, 2), 16), flags);
                            } else {
                                // 3-char notation
                                this.fromRGB(parseInt(m[1].charAt(0) + m[1].charAt(0), 16), parseInt(m[1].charAt(1) + m[1].charAt(1), 16), parseInt(m[1].charAt(2) + m[1].charAt(2), 16), flags);
                            }
                            return true;
                        } else if (m = str.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
                            var params = m[1].split(',');
                            var re = /^\s*(\d*)(\.\d+)?\s*$/;
                            var mR, mG, mB;
                            if (params.length >= 3 && (mR = params[0].match(re)) && (mG = params[1].match(re)) && (mB = params[2].match(re))) {
                                var r = parseFloat((mR[1] || '0') + (mR[2] || ''));
                                var g = parseFloat((mG[1] || '0') + (mG[2] || ''));
                                var b = parseFloat((mB[1] || '0') + (mB[2] || ''));
                                this.fromRGB(r, g, b, flags);
                                return true;
                            }
                        }
                        return false;
                    };

                    this.toString = function () {
                        return (0x100 | Math.round(this.rgb[0])).toString(16).substr(1) + (0x100 | Math.round(this.rgb[1])).toString(16).substr(1) + (0x100 | Math.round(this.rgb[2])).toString(16).substr(1);
                    };

                    this.toHEXString = function () {
                        return '#' + this.toString().toUpperCase();
                    };

                    this.toRGBString = function () {
                        return 'rgb(' + Math.round(this.rgb[0]) + ',' + Math.round(this.rgb[1]) + ',' + Math.round(this.rgb[2]) + ')';
                    };

                    this.isLight = function () {
                        return 0.213 * this.rgb[0] + 0.715 * this.rgb[1] + 0.072 * this.rgb[2] > 255 / 2;
                    };

                    this._processParentElementsInDOM = function () {
                        if (this._linkedElementsProcessed) {
                            return;
                        }
                        this._linkedElementsProcessed = true;

                        var elm = this.targetElement;
                        do {
                            // If the target element or one of its parent nodes has fixed position,
                            // then use fixed positioning instead
                            //
                            // Note: In Firefox, getComputedStyle returns null in a hidden iframe,
                            // that's why we need to check if the returned style object is non-empty
                            var currStyle = jsc.getStyle(elm);
                            if (currStyle && currStyle.position.toLowerCase() === 'fixed') {
                                this.fixed = true;
                            }

                            if (elm !== this.targetElement) {
                                // Ensure to attach onParentScroll only once to each parent element
                                // (multiple targetElements can share the same parent nodes)
                                //
                                // Note: It's not just offsetParents that can be scrollable,
                                // that's why we loop through all parent nodes
                                if (!elm._jscEventsAttached) {
                                    jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);
                                    elm._jscEventsAttached = true;
                                }
                            }
                        } while ((elm = elm.parentNode) && !jsc.isElementType(elm, 'body'));
                    };

                    // r: 0-255
                    // g: 0-255
                    // b: 0-255
                    //
                    // returns: [ 0-360, 0-100, 0-100 ]
                    //
                    function RGB_HSV(r, g, b) {
                        r /= 255;
                        g /= 255;
                        b /= 255;
                        var n = Math.min(Math.min(r, g), b);
                        var v = Math.max(Math.max(r, g), b);
                        var m = v - n;
                        if (m === 0) {
                            return [null, 0, 100 * v];
                        }
                        var h = r === n ? 3 + (b - g) / m : g === n ? 5 + (r - b) / m : 1 + (g - r) / m;
                        return [60 * (h === 6 ? 0 : h), 100 * (m / v), 100 * v];
                    }

                    // h: 0-360
                    // s: 0-100
                    // v: 0-100
                    //
                    // returns: [ 0-255, 0-255, 0-255 ]
                    //
                    function HSV_RGB(h, s, v) {
                        var u = 255 * (v / 100);

                        if (h === null) {
                            return [u, u, u];
                        }

                        h /= 60;
                        s /= 100;

                        var i = Math.floor(h);
                        var f = i % 2 ? h - i : 1 - (h - i);
                        var m = u * (1 - s);
                        var n = u * (1 - s * f);
                        switch (i) {
                            case 6:
                            case 0:
                                return [u, n, m];
                            case 1:
                                return [n, u, m];
                            case 2:
                                return [m, u, n];
                            case 3:
                                return [m, n, u];
                            case 4:
                                return [n, m, u];
                            case 5:
                                return [u, m, n];
                        }
                    }

                    function detachPicker() {
                        jsc.unsetClass(THIS.targetElement, THIS.activeClass);
                        jsc.picker.wrap.parentNode.removeChild(jsc.picker.wrap);
                        delete jsc.picker.owner;
                    }

                    function drawPicker() {

                        // At this point, when drawing the picker, we know what the parent elements are
                        // and we can do all related DOM operations, such as registering events on them
                        // or checking their positioning
                        THIS._processParentElementsInDOM();

                        if (!jsc.picker) {
                            jsc.picker = {
                                owner: null,
                                wrap: document.createElement('div'),
                                box: document.createElement('div'),
                                boxS: document.createElement('div'), // shadow area
                                boxB: document.createElement('div'), // border
                                pad: document.createElement('div'),
                                padB: document.createElement('div'), // border
                                padM: document.createElement('div'), // mouse/touch area
                                padPal: jsc.createPalette(),
                                cross: document.createElement('div'),
                                crossBY: document.createElement('div'), // border Y
                                crossBX: document.createElement('div'), // border X
                                crossLY: document.createElement('div'), // line Y
                                crossLX: document.createElement('div'), // line X
                                sld: document.createElement('div'),
                                sldB: document.createElement('div'), // border
                                sldM: document.createElement('div'), // mouse/touch area
                                sldGrad: jsc.createSliderGradient(),
                                sldPtrS: document.createElement('div'), // slider pointer spacer
                                sldPtrIB: document.createElement('div'), // slider pointer inner border
                                sldPtrMB: document.createElement('div'), // slider pointer middle border
                                sldPtrOB: document.createElement('div'), // slider pointer outer border
                                btn: document.createElement('div'),
                                btnT: document.createElement('span') // text
                            };

                            jsc.picker.pad.appendChild(jsc.picker.padPal.elm);
                            jsc.picker.padB.appendChild(jsc.picker.pad);
                            jsc.picker.cross.appendChild(jsc.picker.crossBY);
                            jsc.picker.cross.appendChild(jsc.picker.crossBX);
                            jsc.picker.cross.appendChild(jsc.picker.crossLY);
                            jsc.picker.cross.appendChild(jsc.picker.crossLX);
                            jsc.picker.padB.appendChild(jsc.picker.cross);
                            jsc.picker.box.appendChild(jsc.picker.padB);
                            jsc.picker.box.appendChild(jsc.picker.padM);

                            jsc.picker.sld.appendChild(jsc.picker.sldGrad.elm);
                            jsc.picker.sldB.appendChild(jsc.picker.sld);
                            jsc.picker.sldB.appendChild(jsc.picker.sldPtrOB);
                            jsc.picker.sldPtrOB.appendChild(jsc.picker.sldPtrMB);
                            jsc.picker.sldPtrMB.appendChild(jsc.picker.sldPtrIB);
                            jsc.picker.sldPtrIB.appendChild(jsc.picker.sldPtrS);
                            jsc.picker.box.appendChild(jsc.picker.sldB);
                            jsc.picker.box.appendChild(jsc.picker.sldM);

                            jsc.picker.btn.appendChild(jsc.picker.btnT);
                            jsc.picker.box.appendChild(jsc.picker.btn);

                            jsc.picker.boxB.appendChild(jsc.picker.box);
                            jsc.picker.wrap.appendChild(jsc.picker.boxS);
                            jsc.picker.wrap.appendChild(jsc.picker.boxB);
                        }

                        var p = jsc.picker;

                        var displaySlider = !!jsc.getSliderComponent(THIS);
                        var dims = jsc.getPickerDims(THIS);
                        var crossOuterSize = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize;
                        var padToSliderPadding = jsc.getPadToSliderPadding(THIS);
                        var borderRadius = Math.min(THIS.borderRadius, Math.round(THIS.padding * Math.PI)); // px
                        var padCursor = 'crosshair';

                        // wrap
                        p.wrap.style.clear = 'both';
                        p.wrap.style.width = dims[0] + 2 * THIS.borderWidth + 'px';
                        p.wrap.style.height = dims[1] + 2 * THIS.borderWidth + 'px';
                        p.wrap.style.zIndex = THIS.zIndex;

                        // picker
                        p.box.style.width = dims[0] + 'px';
                        p.box.style.height = dims[1] + 'px';

                        p.boxS.style.position = 'absolute';
                        p.boxS.style.left = '0';
                        p.boxS.style.top = '0';
                        p.boxS.style.width = '100%';
                        p.boxS.style.height = '100%';
                        jsc.setBorderRadius(p.boxS, borderRadius + 'px');

                        // picker border
                        p.boxB.style.position = 'relative';
                        p.boxB.style.border = THIS.borderWidth + 'px solid';
                        p.boxB.style.borderColor = THIS.borderColor;
                        p.boxB.style.background = THIS.backgroundColor;
                        jsc.setBorderRadius(p.boxB, borderRadius + 'px');

                        // IE hack:
                        // If the element is transparent, IE will trigger the event on the elements under it,
                        // e.g. on Canvas or on elements with border
                        p.padM.style.background = p.sldM.style.background = '#FFF';
                        jsc.setStyle(p.padM, 'opacity', '0');
                        jsc.setStyle(p.sldM, 'opacity', '0');

                        // pad
                        p.pad.style.position = 'relative';
                        p.pad.style.width = THIS.width + 'px';
                        p.pad.style.height = THIS.height + 'px';

                        // pad palettes (HSV and HVS)
                        p.padPal.draw(THIS.width, THIS.height, jsc.getPadYComponent(THIS));

                        // pad border
                        p.padB.style.position = 'absolute';
                        p.padB.style.left = THIS.padding + 'px';
                        p.padB.style.top = THIS.padding + 'px';
                        p.padB.style.border = THIS.insetWidth + 'px solid';
                        p.padB.style.borderColor = THIS.insetColor;

                        // pad mouse area
                        p.padM._jscInstance = THIS;
                        p.padM._jscControlName = 'pad';
                        p.padM.style.position = 'absolute';
                        p.padM.style.left = '0';
                        p.padM.style.top = '0';
                        p.padM.style.width = THIS.padding + 2 * THIS.insetWidth + THIS.width + padToSliderPadding / 2 + 'px';
                        p.padM.style.height = dims[1] + 'px';
                        p.padM.style.cursor = padCursor;

                        // pad cross
                        p.cross.style.position = 'absolute';
                        p.cross.style.left = p.cross.style.top = '0';
                        p.cross.style.width = p.cross.style.height = crossOuterSize + 'px';

                        // pad cross border Y and X
                        p.crossBY.style.position = p.crossBX.style.position = 'absolute';
                        p.crossBY.style.background = p.crossBX.style.background = THIS.pointerBorderColor;
                        p.crossBY.style.width = p.crossBX.style.height = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 'px';
                        p.crossBY.style.height = p.crossBX.style.width = crossOuterSize + 'px';
                        p.crossBY.style.left = p.crossBX.style.top = Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2) - THIS.pointerBorderWidth + 'px';
                        p.crossBY.style.top = p.crossBX.style.left = '0';

                        // pad cross line Y and X
                        p.crossLY.style.position = p.crossLX.style.position = 'absolute';
                        p.crossLY.style.background = p.crossLX.style.background = THIS.pointerColor;
                        p.crossLY.style.height = p.crossLX.style.width = crossOuterSize - 2 * THIS.pointerBorderWidth + 'px';
                        p.crossLY.style.width = p.crossLX.style.height = THIS.pointerThickness + 'px';
                        p.crossLY.style.left = p.crossLX.style.top = Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2) + 'px';
                        p.crossLY.style.top = p.crossLX.style.left = THIS.pointerBorderWidth + 'px';

                        // slider
                        p.sld.style.overflow = 'hidden';
                        p.sld.style.width = THIS.sliderSize + 'px';
                        p.sld.style.height = THIS.height + 'px';

                        // slider gradient
                        p.sldGrad.draw(THIS.sliderSize, THIS.height, '#000', '#000');

                        // slider border
                        p.sldB.style.display = displaySlider ? 'block' : 'none';
                        p.sldB.style.position = 'absolute';
                        p.sldB.style.right = THIS.padding + 'px';
                        p.sldB.style.top = THIS.padding + 'px';
                        p.sldB.style.border = THIS.insetWidth + 'px solid';
                        p.sldB.style.borderColor = THIS.insetColor;

                        // slider mouse area
                        p.sldM._jscInstance = THIS;
                        p.sldM._jscControlName = 'sld';
                        p.sldM.style.display = displaySlider ? 'block' : 'none';
                        p.sldM.style.position = 'absolute';
                        p.sldM.style.right = '0';
                        p.sldM.style.top = '0';
                        p.sldM.style.width = THIS.sliderSize + padToSliderPadding / 2 + THIS.padding + 2 * THIS.insetWidth + 'px';
                        p.sldM.style.height = dims[1] + 'px';
                        p.sldM.style.cursor = 'default';

                        // slider pointer inner and outer border
                        p.sldPtrIB.style.border = p.sldPtrOB.style.border = THIS.pointerBorderWidth + 'px solid ' + THIS.pointerBorderColor;

                        // slider pointer outer border
                        p.sldPtrOB.style.position = 'absolute';
                        p.sldPtrOB.style.left = -(2 * THIS.pointerBorderWidth + THIS.pointerThickness) + 'px';
                        p.sldPtrOB.style.top = '0';

                        // slider pointer middle border
                        p.sldPtrMB.style.border = THIS.pointerThickness + 'px solid ' + THIS.pointerColor;

                        // slider pointer spacer
                        p.sldPtrS.style.width = THIS.sliderSize + 'px';
                        p.sldPtrS.style.height = sliderPtrSpace + 'px';

                        // the Close button
                        function setBtnBorder() {
                            var insetColors = THIS.insetColor.split(/\s+/);
                            var outsetColor = insetColors.length < 2 ? insetColors[0] : insetColors[1] + ' ' + insetColors[0] + ' ' + insetColors[0] + ' ' + insetColors[1];
                            p.btn.style.borderColor = outsetColor;
                        }

                        p.btn.style.display = THIS.closable ? 'block' : 'none';
                        p.btn.style.position = 'absolute';
                        p.btn.style.left = THIS.padding + 'px';
                        p.btn.style.bottom = THIS.padding + 'px';
                        p.btn.style.padding = '0 15px';
                        p.btn.style.height = THIS.buttonHeight + 'px';
                        p.btn.style.border = THIS.insetWidth + 'px solid';
                        setBtnBorder();
                        p.btn.style.color = THIS.buttonColor;
                        p.btn.style.font = '12px sans-serif';
                        p.btn.style.textAlign = 'center';
                        try {
                            p.btn.style.cursor = 'pointer';
                        } catch (eOldIE) {
                            p.btn.style.cursor = 'hand';
                        }
                        p.btn.onmousedown = function () {
                            THIS.hide();
                        };
                        p.btnT.style.lineHeight = THIS.buttonHeight + 'px';
                        p.btnT.innerHTML = '';
                        p.btnT.appendChild(document.createTextNode(THIS.closeText));

                        // place pointers
                        redrawPad();
                        redrawSld();

                        // If we are changing the owner without first closing the picker,
                        // make sure to first deal with the old owner
                        if (jsc.picker.owner && jsc.picker.owner !== THIS) {
                            jsc.unsetClass(jsc.picker.owner.targetElement, THIS.activeClass);
                        }

                        // Set the new picker owner
                        jsc.picker.owner = THIS;

                        // The redrawPosition() method needs picker.owner to be set, that's why we call it here,
                        // after setting the owner
                        if (jsc.isElementType(container, 'body')) {
                            jsc.redrawPosition();
                        } else {
                            jsc._drawPosition(THIS, 0, 0, 'relative', false);
                        }

                        if (p.wrap.parentNode != container) {
                            container.appendChild(p.wrap);
                        }

                        jsc.setClass(THIS.targetElement, THIS.activeClass);
                    }

                    function redrawPad() {
                        // redraw the pad pointer
                        switch (jsc.getPadYComponent(THIS)) {
                            case 's':
                                var yComponent = 1;
                                break;
                            case 'v':
                                var yComponent = 2;
                                break;
                        }
                        var x = Math.round(THIS.hsv[0] / 360 * (THIS.width - 1));
                        var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));
                        var crossOuterSize = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize;
                        var ofs = -Math.floor(crossOuterSize / 2);
                        jsc.picker.cross.style.left = x + ofs + 'px';
                        jsc.picker.cross.style.top = y + ofs + 'px';

                        // redraw the slider
                        switch (jsc.getSliderComponent(THIS)) {
                            case 's':
                                var rgb1 = HSV_RGB(THIS.hsv[0], 100, THIS.hsv[2]);
                                var rgb2 = HSV_RGB(THIS.hsv[0], 0, THIS.hsv[2]);
                                var color1 = 'rgb(' + Math.round(rgb1[0]) + ',' + Math.round(rgb1[1]) + ',' + Math.round(rgb1[2]) + ')';
                                var color2 = 'rgb(' + Math.round(rgb2[0]) + ',' + Math.round(rgb2[1]) + ',' + Math.round(rgb2[2]) + ')';
                                jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);
                                break;
                            case 'v':
                                var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 100);
                                var color1 = 'rgb(' + Math.round(rgb[0]) + ',' + Math.round(rgb[1]) + ',' + Math.round(rgb[2]) + ')';
                                var color2 = '#000';
                                jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);
                                break;
                        }
                    }

                    function redrawSld() {
                        var sldComponent = jsc.getSliderComponent(THIS);
                        if (sldComponent) {
                            // redraw the slider pointer
                            switch (sldComponent) {
                                case 's':
                                    var yComponent = 1;
                                    break;
                                case 'v':
                                    var yComponent = 2;
                                    break;
                            }
                            var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));
                            jsc.picker.sldPtrOB.style.top = y - (2 * THIS.pointerBorderWidth + THIS.pointerThickness) - Math.floor(sliderPtrSpace / 2) + 'px';
                        }
                    }

                    function isPickerOwner() {
                        return jsc.picker && jsc.picker.owner === THIS;
                    }

                    function blurValue() {
                        THIS.importColor();
                    }

                    // Find the target element
                    if (typeof targetElement === 'string') {
                        var id = targetElement;
                        var elm = document.getElementById(id);
                        if (elm) {
                            this.targetElement = elm;
                        } else {
                            jsc.warn('Could not find target element with ID \'' + id + '\'');
                        }
                    } else if (targetElement) {
                        this.targetElement = targetElement;
                    } else {
                        jsc.warn('Invalid target element: \'' + targetElement + '\'');
                    }

                    if (this.targetElement._jscLinkedInstance) {
                        jsc.warn('Cannot link jscolor twice to the same element. Skipping.');
                        return;
                    }
                    this.targetElement._jscLinkedInstance = this;

                    // Find the value element
                    this.valueElement = jsc.fetchElement(this.valueElement);
                    // Find the style element
                    this.styleElement = jsc.fetchElement(this.styleElement);

                    var THIS = this;
                    var container = this.container ? jsc.fetchElement(this.container) : document.getElementsByTagName('body')[0];
                    var sliderPtrSpace = 3; // px

                    // For BUTTON elements it's important to stop them from sending the form when clicked
                    // (e.g. in Safari)
                    if (jsc.isElementType(this.targetElement, 'button')) {
                        if (this.targetElement.onclick) {
                            var origCallback = this.targetElement.onclick;
                            this.targetElement.onclick = function (evt) {
                                origCallback.call(this, evt);
                                return false;
                            };
                        } else {
                            this.targetElement.onclick = function () {
                                return false;
                            };
                        }
                    }

                    /*
                    var elm = this.targetElement;
                    do {
                        // If the target element or one of its offsetParents has fixed position,
                        // then use fixed positioning instead
                        //
                        // Note: In Firefox, getComputedStyle returns null in a hidden iframe,
                        // that's why we need to check if the returned style object is non-empty
                        var currStyle = jsc.getStyle(elm);
                        if (currStyle && currStyle.position.toLowerCase() === 'fixed') {
                            this.fixed = true;
                        }
                          if (elm !== this.targetElement) {
                            // attach onParentScroll so that we can recompute the picker position
                            // when one of the offsetParents is scrolled
                            if (!elm._jscEventsAttached) {
                                jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);
                                elm._jscEventsAttached = true;
                            }
                        }
                    } while ((elm = elm.offsetParent) && !jsc.isElementType(elm, 'body'));
                    */

                    // valueElement
                    if (this.valueElement) {
                        if (jsc.isElementType(this.valueElement, 'input')) {
                            var updateField = function updateField() {
                                THIS.fromString(THIS.valueElement.value, jsc.leaveValue);
                                jsc.dispatchFineChange(THIS);
                            };
                            jsc.attachEvent(this.valueElement, 'keyup', updateField);
                            jsc.attachEvent(this.valueElement, 'input', updateField);
                            jsc.attachEvent(this.valueElement, 'blur', blurValue);
                            this.valueElement.setAttribute('autocomplete', 'off');
                        }
                    }

                    // styleElement
                    if (this.styleElement) {
                        this.styleElement._jscOrigStyle = {
                            backgroundImage: this.styleElement.style.backgroundImage,
                            backgroundColor: this.styleElement.style.backgroundColor,
                            color: this.styleElement.style.color
                        };
                    }

                    if (this.value) {
                        // Try to set the color from the .value option and if unsuccessful,
                        // export the current color
                        this.fromString(this.value) || this.exportColor();
                    } else {
                        this.importColor();
                    }
                }

            };

            //================================
            // Public properties and methods
            //================================


            // By default, search for all elements with class="jscolor" and install a color picker on them.
            //
            // You can change what class name will be looked for by setting the property jscolor.lookupClass
            // anywhere in your HTML document. To completely disable the automatic lookup, set it to null.
            //
            jsc.jscolor.lookupClass = 'jscolor';

            jsc.jscolor.installByClassName = function (className) {
                var inputElms = document.getElementsByTagName('input');
                var buttonElms = document.getElementsByTagName('button');

                jsc.tryInstallOnElements(inputElms, className);
                jsc.tryInstallOnElements(buttonElms, className);
            };

            jsc.register();

            return jsc.jscolor;
        }();
    }
});

/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism-twilight&languages=markup+css+clike+javascript */
var _self = typeof window !== 'undefined' ? window // if in browser
: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
: {} // if in node js
;

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = function () {

    // Private helper vars
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    var uniqueId = 0;

    var _ = _self.Prism = {
        manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        util: {
            encode: function encode(tokens) {
                if (tokens instanceof Token) {
                    return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
                } else if (_.util.type(tokens) === 'Array') {
                    return tokens.map(_.util.encode);
                } else {
                    return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                }
            },

            type: function type(o) {
                return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
            },

            objId: function objId(obj) {
                if (!obj['__id']) {
                    Object.defineProperty(obj, '__id', { value: ++uniqueId });
                }
                return obj['__id'];
            },

            // Deep clone a language definition (e.g. to extend it)
            clone: function clone(o, visited) {
                var type = _.util.type(o);
                visited = visited || {};

                switch (type) {
                    case 'Object':
                        if (visited[_.util.objId(o)]) {
                            return visited[_.util.objId(o)];
                        }
                        var clone = {};
                        visited[_.util.objId(o)] = clone;

                        for (var key in o) {
                            if (o.hasOwnProperty(key)) {
                                clone[key] = _.util.clone(o[key], visited);
                            }
                        }

                        return clone;

                    case 'Array':
                        if (visited[_.util.objId(o)]) {
                            return visited[_.util.objId(o)];
                        }
                        var clone = [];
                        visited[_.util.objId(o)] = clone;

                        o.forEach(function (v, i) {
                            clone[i] = _.util.clone(v, visited);
                        });

                        return clone;
                }

                return o;
            }
        },

        languages: {
            extend: function extend(id, redef) {
                var lang = _.util.clone(_.languages[id]);

                for (var key in redef) {
                    lang[key] = redef[key];
                }

                return lang;
            },

            /**
             * Insert a token before another token in a language literal
             * As this needs to recreate the object (we cannot actually insert before keys in object literals),
             * we cannot just provide an object, we need anobject and a key.
             * @param inside The key (or language id) of the parent
             * @param before The key to insert before. If not provided, the function appends instead.
             * @param insert Object with the key/value pairs to insert
             * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
             */
            insertBefore: function insertBefore(inside, before, insert, root) {
                root = root || _.languages;
                var grammar = root[inside];

                if (arguments.length == 2) {
                    insert = arguments[1];

                    for (var newToken in insert) {
                        if (insert.hasOwnProperty(newToken)) {
                            grammar[newToken] = insert[newToken];
                        }
                    }

                    return grammar;
                }

                var ret = {};

                for (var token in grammar) {

                    if (grammar.hasOwnProperty(token)) {

                        if (token == before) {

                            for (var newToken in insert) {

                                if (insert.hasOwnProperty(newToken)) {
                                    ret[newToken] = insert[newToken];
                                }
                            }
                        }

                        ret[token] = grammar[token];
                    }
                }

                // Update references in other language definitions
                _.languages.DFS(_.languages, function (key, value) {
                    if (value === root[inside] && key != inside) {
                        this[key] = ret;
                    }
                });

                return root[inside] = ret;
            },

            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
                visited = visited || {};
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        callback.call(o, i, o[i], type || i);

                        if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
                            visited[_.util.objId(o[i])] = true;
                            _.languages.DFS(o[i], callback, null, visited);
                        } else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
                            visited[_.util.objId(o[i])] = true;
                            _.languages.DFS(o[i], callback, i, visited);
                        }
                    }
                }
            }
        },
        plugins: {},

        highlightAll: function highlightAll(async, callback) {
            _.highlightAllUnder(document, async, callback);
        },

        highlightAllUnder: function highlightAllUnder(container, async, callback) {
            var env = {
                callback: callback,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };

            _.hooks.run("before-highlightall", env);

            var elements = env.elements || container.querySelectorAll(env.selector);

            for (var i = 0, element; element = elements[i++];) {
                _.highlightElement(element, async === true, env.callback);
            }
        },

        highlightElement: function highlightElement(element, async, callback) {
            // Find language
            var language,
                grammar,
                parent = element;

            while (parent && !lang.test(parent.className)) {
                parent = parent.parentNode;
            }

            if (parent) {
                language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
                grammar = _.languages[language];
            }

            // Set language on the element, if not present
            element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

            if (element.parentNode) {
                // Set language on the parent, for styling
                parent = element.parentNode;

                if (/pre/i.test(parent.nodeName)) {
                    parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                }
            }

            var code = element.textContent;

            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };

            _.hooks.run('before-sanity-check', env);

            if (!env.code || !env.grammar) {
                if (env.code) {
                    _.hooks.run('before-highlight', env);
                    env.element.textContent = env.code;
                    _.hooks.run('after-highlight', env);
                }
                _.hooks.run('complete', env);
                return;
            }

            _.hooks.run('before-highlight', env);

            if (async && _self.Worker) {
                var worker = new Worker(_.filename);

                worker.onmessage = function (evt) {
                    env.highlightedCode = evt.data;

                    _.hooks.run('before-insert', env);

                    env.element.innerHTML = env.highlightedCode;

                    callback && callback.call(env.element);
                    _.hooks.run('after-highlight', env);
                    _.hooks.run('complete', env);
                };

                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code,
                    immediateClose: true
                }));
            } else {
                env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

                _.hooks.run('before-insert', env);

                env.element.innerHTML = env.highlightedCode;

                callback && callback.call(element);

                _.hooks.run('after-highlight', env);
                _.hooks.run('complete', env);
            }
        },

        highlight: function highlight(text, grammar, language) {
            var env = {
                code: text,
                grammar: grammar,
                language: language
            };
            _.hooks.run('before-tokenize', env);
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run('after-tokenize', env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
        },

        matchGrammar: function matchGrammar(text, strarr, grammar, index, startPos, oneshot, target) {
            var Token = _.Token;

            for (var token in grammar) {
                if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                    continue;
                }

                if (token == target) {
                    return;
                }

                var patterns = grammar[token];
                patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

                for (var j = 0; j < patterns.length; ++j) {
                    var pattern = patterns[j],
                        inside = pattern.inside,
                        lookbehind = !!pattern.lookbehind,
                        greedy = !!pattern.greedy,
                        lookbehindLength = 0,
                        alias = pattern.alias;

                    if (greedy && !pattern.pattern.global) {
                        // Without the global flag, lastIndex won't work
                        var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
                        pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
                    }

                    pattern = pattern.pattern || pattern;

                    // Don’t cache length as it changes during the loop
                    for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

                        var str = strarr[i];

                        if (strarr.length > text.length) {
                            // Something went terribly wrong, ABORT, ABORT!
                            return;
                        }

                        if (str instanceof Token) {
                            continue;
                        }

                        if (greedy && i != strarr.length - 1) {
                            pattern.lastIndex = pos;
                            var match = pattern.exec(text);
                            if (!match) {
                                break;
                            }

                            var from = match.index + (lookbehind ? match[1].length : 0),
                                to = match.index + match[0].length,
                                k = i,
                                p = pos;

                            for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                                p += strarr[k].length;
                                // Move the index i to the element in strarr that is closest to from
                                if (from >= p) {
                                    ++i;
                                    pos = p;
                                }
                            }

                            // If strarr[i] is a Token, then the match starts inside another Token, which is invalid
                            if (strarr[i] instanceof Token) {
                                continue;
                            }

                            // Number of tokens to delete and replace with the new match
                            delNum = k - i;
                            str = text.slice(pos, p);
                            match.index -= pos;
                        } else {
                            pattern.lastIndex = 0;

                            var match = pattern.exec(str),
                                delNum = 1;
                        }

                        if (!match) {
                            if (oneshot) {
                                break;
                            }

                            continue;
                        }

                        if (lookbehind) {
                            lookbehindLength = match[1] ? match[1].length : 0;
                        }

                        var from = match.index + lookbehindLength,
                            match = match[0].slice(lookbehindLength),
                            to = from + match.length,
                            before = str.slice(0, from),
                            after = str.slice(to);

                        var args = [i, delNum];

                        if (before) {
                            ++i;
                            pos += before.length;
                            args.push(before);
                        }

                        var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);

                        args.push(wrapped);

                        if (after) {
                            args.push(after);
                        }

                        Array.prototype.splice.apply(strarr, args);

                        if (delNum != 1) _.matchGrammar(text, strarr, grammar, i, pos, true, token);

                        if (oneshot) break;
                    }
                }
            }
        },

        tokenize: function tokenize(text, grammar, language) {
            var strarr = [text];

            var rest = grammar.rest;

            if (rest) {
                for (var token in rest) {
                    grammar[token] = rest[token];
                }

                delete grammar.rest;
            }

            _.matchGrammar(text, strarr, grammar, 0, 0, false);

            return strarr;
        },

        hooks: {
            all: {},

            add: function add(name, callback) {
                var hooks = _.hooks.all;

                hooks[name] = hooks[name] || [];

                hooks[name].push(callback);
            },

            run: function run(name, env) {
                var callbacks = _.hooks.all[name];

                if (!callbacks || !callbacks.length) {
                    return;
                }

                for (var i = 0, callback; callback = callbacks[i++];) {
                    callback(env);
                }
            }
        }
    };

    var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        // Copy of the full string this token was created from
        this.length = (matchedStr || "").length | 0;
        this.greedy = !!greedy;
    };

    Token.stringify = function (o, language, parent) {
        if (typeof o == 'string') {
            return o;
        }

        if (_.util.type(o) === 'Array') {
            return o.map(function (element) {
                return Token.stringify(element, language, o);
            }).join('');
        }

        var env = {
            type: o.type,
            content: Token.stringify(o.content, language, parent),
            tag: 'span',
            classes: ['token', o.type],
            attributes: {},
            language: language,
            parent: parent
        };

        if (o.alias) {
            var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
            Array.prototype.push.apply(env.classes, aliases);
        }

        _.hooks.run('wrap', env);

        var attributes = Object.keys(env.attributes).map(function (name) {
            return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
        }).join(' ');

        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
    };

    if (!_self.document) {
        if (!_self.addEventListener) {
            // in Node.js
            return _self.Prism;
        }

        if (!_.disableWorkerMessageHandler) {
            // In worker
            _self.addEventListener('message', function (evt) {
                var message = JSON.parse(evt.data),
                    lang = message.language,
                    code = message.code,
                    immediateClose = message.immediateClose;

                _self.postMessage(_.highlight(code, _.languages[lang], lang));
                if (immediateClose) {
                    _self.close();
                }
            }, false);
        }

        return _self.Prism;
    }

    //Get current script and highlight
    var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

    if (script) {
        _.filename = script.src;

        if (!_.manual && !script.hasAttribute('data-manual')) {
            if (document.readyState !== "loading") {
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(_.highlightAll);
                } else {
                    window.setTimeout(_.highlightAll, 16);
                }
            } else {
                document.addEventListener('DOMContentLoaded', _.highlightAll);
            }
        }
    }

    return _self.Prism;
}();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
    global.Prism = Prism;
}
;
Prism.languages.markup = {
    'comment': /<!--[\s\S]*?-->/,
    'prolog': /<\?[\s\S]+?\?>/,
    'doctype': /<!DOCTYPE[\s\S]+?>/i,
    'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
    'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        greedy: true,
        inside: {
            'tag': {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    'punctuation': /^<\/?/,
                    'namespace': /^[^\s>\/:]+:/
                }
            },
            'attr-value': {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: {
                    'punctuation': [/^=/, {
                        pattern: /(^|[^\\])["']/,
                        lookbehind: true
                    }]
                }
            },
            'punctuation': /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {
                    'namespace': /^[^\s>\/:]+:/
                }
            }

        }
    },
    'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

    if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
        pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
        inside: {
            'rule': /@[\w-]+/
            // See rest below
        }
    },
    'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
    'string': {
        pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    'important': /\B!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
        'style': {
            pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
            lookbehind: true,
            inside: Prism.languages.css,
            alias: 'language-css',
            greedy: true
        }
    });

    Prism.languages.insertBefore('inside', 'attr-value', {
        'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                'attr-name': {
                    pattern: /^\s*style/i,
                    inside: Prism.languages.markup.tag.inside
                },
                'punctuation': /^\s*=\s*['"]|['"]\s*$/,
                'attr-value': {
                    pattern: /.+/i,
                    inside: Prism.languages.css
                }
            },
            alias: 'language-css'
        }
    }, Prism.languages.markup.tag);
};
Prism.languages.clike = {
    'comment': [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
    }],
    'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'class-name': {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: true,
        inside: {
            punctuation: /[.\\]/
        }
    },
    'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    'boolean': /\b(?:true|false)\b/,
    'function': /[a-z0-9_]+(?=\()/i,
    'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    'punctuation': /[{}[\];(),.:]/
};

Prism.languages.javascript = Prism.languages.extend('clike', {
    'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    'number': /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
    'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: true,
        greedy: true
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
        alias: 'function'
    },
    'constant': /\b[A-Z][A-Z\d_]*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
        pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
        greedy: true,
        inside: {
            'interpolation': {
                pattern: /\${[^}]+}/,
                inside: {
                    'interpolation-punctuation': {
                        pattern: /^\${|}$/,
                        alias: 'punctuation'
                    },
                    rest: null // See below
                }
            },
            'string': /[\s\S]+/
        }
    }
});
Prism.languages.javascript['template-string'].inside['interpolation'].inside.rest = Prism.languages.javascript;

if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
        'script': {
            pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
            lookbehind: true,
            inside: Prism.languages.javascript,
            alias: 'language-javascript',
            greedy: true
        }
    });
}

Prism.languages.js = Prism.languages.javascript;

///// Begin 4-01
var win401 = '1. (\u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435)<br>\n- \u041E\u0431\u044A\u044F\u0432\u0438\u0442\u0435 \u0434\u0432\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: admin \u0438 name.<br>\n- \u0417\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 name \u0441\u0442\u0440\u043E\u043A\u0443 "Harry".<br>\n- \u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 name \u0432 admin.<br>\n- \u0412\u044B\u0432\u0435\u0434\u0438\u0442\u0435 admin (\u0434\u043E\u043B\u0436\u043D\u043E \u0432\u044B\u0432\u0435\u0441\u0442\u0438 "Harry").<br>';

var js401 = 'var admin, name;\nname="Harry";\nadmin=name;\nconsole.log(admin);';

var html401 = '';

var fun401 = function fun401() {
    elWin.innerHTML = '';
    var admin, name;
    name = "Harry";
    admin = name;
    console.log(admin);
};

TextWindows[401] = new Dz(html401, js401, win401, fun401);
////// End 4-01

// 2. (переменные)
// - Выберите какую-то формулу (например, математическую)
// - Объявите необходимые переменные
// - Выведите в консоль результат работы формулы
// Пример:
//     Я возьму формулу длины окружности (2 * Пи * радиус)
// Переменные и вывод у меня получатся такие:
//     var pi = 3.1415;
// var R = 10;
// console.log(2 * pi * R);


// var triangleSide_01=prompt("Введите значение стороны 1");
// var triangleSide_02=prompt("Введите значение стороны 2");
// var triangleSide_03=prompt("Введите значение стороны 3");
// triangleSide_01=parseInt(triangleSide_01);//перевожу значение в числа
// triangleSide_02=parseInt(triangleSide_02);//перевожу значение в числа
// triangleSide_03=parseInt(triangleSide_03);//перевожу значение в числа
// //проверяю существует ли треугольник с данными сторонами
// if (triangleSide_01+triangleSide_02>triangleSide_03 && triangleSide_01+triangleSide_03>triangleSide_02&&triangleSide_02+triangleSide_03>triangleSide_01) {
//
// //проверяю является ли треугольник прямоугольным
//     if (triangleSide_01 == Math.max(triangleSide_01, triangleSide_02, triangleSide_03) && Math.pow(triangleSide_01, 2) == Math.pow(triangleSide_02, 2) + Math.pow(triangleSide_03, 2)) {
//         Squre = (triangleSide_02 * triangleSide_03) / 2
//         radiusDescribed = (triangleSide_03 + triangleSide_02 - triangleSide_01) / 2;
//         console.log("Площадь прямоугольного треугольника=", Squre);
//         console.log("Радиус вписаной окружности в прямоугольный треугольник=", radiusDescribed);
//     }
//     else if (triangleSide_02 == Math.max(triangleSide_01, triangleSide_02, triangleSide_03) && Math.pow(triangleSide_02, 2) == Math.pow(triangleSide_01, 2) + Math.pow(triangleSide_03, 2)) {
//         Squre = (triangleSide_01 * triangleSide_03) / 2
//         radiusDescribed = (triangleSide_03 + triangleSide_01 - triangleSide_02) / 2;
//         console.log("Площадь прямоугольного треугольника=", Squre);
//         console.log("Радиус вписаной окружности в прямоугольный треугольник=", radiusDescribed);
//     }
//     else if (triangleSide_03 == Math.max(triangleSide_01, triangleSide_02, triangleSide_03) && Math.pow(triangleSide_03, 2) == Math.pow(triangleSide_01, 2) + Math.pow(triangleSide_02, 2)) {
//         Squre = (triangleSide_01 * triangleSide_02) / 2
//         radiusDescribed = (triangleSide_02 + triangleSide_01 - triangleSide_03) / 2;
//         console.log("Площадь прямоугольного треугольника=", Squre);
//         console.log("Радиус прямоугольного треугольника=", radiusDescribed);
//     }
//     //прверяю правельный ли треугольник, если да вычисляю по другой формуле
//     else if (triangleSide_03 == triangleSide_02 &&triangleSide_02 == triangleSide_01) {
//         Squre = (Math.sqrt(3) * Math.pow(triangleSide_01, 2)) / 4
//         radiusDescribed = (triangleSide_01) / (2 * Math.sqrt(3));
//         console.log("Площадь правильного треугольника=", Squre);
//         console.log("Радиус правильного треугольника=", radiusDescribed);
//     }
//     //если треугольник не прямоугольный, считаем по общим формулам
//     else {
//         perimetr = (triangleSide_01 + triangleSide_02 + triangleSide_03);// нахожу периметр
//         semipPerimeter = (perimetr / 2);// нахожу полупериметр
//         Squre = Math.sqrt(semipPerimeter * (semipPerimeter - triangleSide_01) * (semipPerimeter - triangleSide_02) * (semipPerimeter - triangleSide_03)).toFixed(8);// нахожу площадь через формулу Герона
//         radiusDescribed = (Squre / semipPerimeter).toFixed(8);//нахожу радиус вписаного круга
//         console.log("Радиус треугольника=", radiusDescribed);
//         console.log("Площадь треугольника=", Squre);
//     }
//     perimetr = (triangleSide_01 + triangleSide_02 + triangleSide_03);// нахожу периметр
//     console.log("Периметр треугольника", perimetr);
// }
// else {
//     alert("Вы ввели данные при которых треугольник не существует! Помните, что сумма любых двоих сторон должна быть больше третей!!!")
// }
///// Begin 4-03
var win403 = ' - \u041E\u0431\u044A\u044F\u0432\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E \u0441 \u043A\u0430\u043A\u0438\u043C-\u0442\u043E \u0447\u0438\u0441\u043B\u043E\u043C.<br>\n - \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E if..else, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u043E\u0434,<br>\n    \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C:<br>\n    \u2022 1, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0443\u043B\u044F,<br>\n   \u2022 -1, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 \u043D\u0443\u043B\u044F,<br>\n   \u2022 0, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0432\u043D\u043E \u043D\u0443\u043B\u044E.';

var js403 = 'var textNumber=document.getElementById(\'textNumber\');\nvar textNumberPrevious= textNumber.previousElementSibling;\ntextNumberPrevious.textContent=\'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter\';\nvar elDiv=document.createElement(\'b\');\n\n\n\ndocument.body.insertBefore(elDiv, textNumber );\nconsole.log(textNumberPrevious);\n\n\n\n\n\ntextNumber.addEventListener(\'keypress\', function(e){\n    var text = this.previousElementSibling;\n\n\n    if(isNaN(this.value)&&e.keyCode==\'13\'){\n        text.textContent=\'\u0412\u044B \u0432\u0432\u0435\u043B\u0438 \u043D\u0435 \u0447\u0438\u0441\u043B\u043E! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E!\';\n    }\n    else if(this.value && e.keyCode==\'13\'){\n\n        switch(true) {\n            case(this.value > 0)  :   text.textContent = "\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435"; break;\n            case(this.value < 0)  :   text.textContent = "\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"; break;\n            case(this.value == 0) :   text.textContent= "\u0420\u0430\u0432\u043D\u043E \u043D\u0443\u043B\u044E";\n        }\n    }\n\n});';

var html403 = '<label for="textNumber">Введите число от 0 до 99</label>\n' + '<input type="text" id="textNumber">';

var fun403 = function fun403() {
    elWin.innerHTML = html403;
    var textNumber = document.getElementById('textNumber');
    var textNumberPrevious = textNumber.previousElementSibling;
    textNumberPrevious.textContent = 'Введите число и нажмите Enter';
    var elDiv = document.createElement('b');

    elWin.insertBefore(elDiv, elWin.lastElementChild);

    textNumber.addEventListener('keypress', function (e) {
        var text = this.previousElementSibling;

        if (isNaN(this.value) && e.keyCode == '13') {
            text.textContent = 'Вы ввели не число! Введите число!';
        } else if (this.value && e.keyCode == '13') {

            switch (true) {
                case this.value > 0:
                    text.textContent = "Число положительное";break;
                case this.value < 0:
                    text.textContent = "Число отрицательное";break;
                case this.value == 0:
                    text.textContent = "Число равно нулю";
            }
        }
    });
};

TextWindows[403] = new Dz(html403, js403, win403, fun403);
///// End 4-03


///// Begin 4-05
var win405 = '5. (\u0446\u0438\u043A\u043B\u044B)<br>\n- \u041F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0446\u0438\u043A\u043B\u0430 for \u0432\u044B\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0451\u0442\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u043E\u0442 2 \u0434\u043E 10.<br>';

var js405 = 'for(var i=2; i<=10; i++){\n    var elCreate =document.createElement(\'p\');\n    elCreate.textContent=i;\n    elWin.appendChild(elCreate);\n}';

var html405 = '';

var fun405 = function fun405() {
    elWin.innerHTML = '';
    for (var i = 2; i <= 10; i++) {
        var elCreate = document.createElement('p');
        elCreate.textContent = i;
        elWin.appendChild(elCreate);
    }
};

TextWindows[405] = new Dz(html405, js405, win405, fun405);
///// End 4-05

// 6. (циклы)


///// Begin 4-06
var win406 = '\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u043C, \u0435\u0441\u043B\u0438 \u043E\u043D\u043E \u043D\u0438 \u043D\u0430 \u0447\u0442\u043E \u043D\u0435 \u0434\u0435\u043B\u0438\u0442\u0441\u044F, \u043A\u0440\u043E\u043C\u0435 \u0441\u0435\u0431\u044F \u0438 1.<br>\n\u0414\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u0447\u0438\u0441\u043B\u043E n \u043F\u0440\u043E\u0441\u0442\u043E\u0435, \u0435\u0441\u043B\u0438 \u043F\u0440\u0438 \u0434\u0435\u043B\u0435\u043D\u0438\u0438 \u043D\u0430 \u043B\u044E\u0431\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u0442 2 \u0434\u043E n-1 \u0435\u0441\u0442\u044C \u043E\u0441\u0442\u0430\u0442\u043E\u043A.<br>\n    \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043A\u043E\u0434, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0432\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u0438\u0437 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0430 \u043E\u0442 2 \u0434\u043E 10. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C: 2,3,5,7.<br>\nP.S. \u041A\u043E\u0434 \u0442\u0430\u043A\u0436\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043B\u0435\u0433\u043A\u043E \u043C\u043E\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043B\u044E\u0431\u044B\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u043E\u0432.<br>';

var js406 = 'function simple(min,max) {\n\n    var sim=[];\n    out: for ( min; min <= max; min++) {\n\n            for (devision = 2; devision < min; devision++) {\n                if (min % devision == 0)\n                {\n                    continue out;\n                }\n            }\n            sim.push(min);\n            // alert( i ); // \u043F\u0440\u043E\u0441\u0442\u043E\u0435\n        }\n\n    return sim;\n}\nconsole.log(simple(2,10));';

var html406 = '';

var fun406 = function fun406() {
    elWin.innerHTML = '';
    function simple(min, max) {

        var sim = [];
        out: for (min; min <= max; min++) {

            for (devision = 2; devision < min; devision++) {
                if (min % devision == 0) {
                    continue out;
                }
            }
            sim.push(min);
            // alert( i ); // простое
        }

        return sim;
    }
    console.log(simple(2, 10));
};

TextWindows[406] = new Dz(html406, js406, win406, fun406);
////// End 4-06

// elWin.innerHTML=`<p><label for="min">Введите минимальное число </label><input type="text" id="min"></p><p><label for="min">Введите максимальное число </label><input type="text" id="max"></p>`;
//
// var ell= document.getElementsByTagName("input");
// log( ell.getAttribute('id'));
// ell.addEventListener('input', (e)=>{
//     var max,min;
//     log(e.target);
//     if(e.target.getAttribute('id')=='min'){
//         min=e.target.value;
//     }
//     else{
//         max=e.target.value;
//     }
//
//     min&&max?simple(min,max):log('что то не так');
//     // log(e.target.value);
//     // // if()
// })
//
// function simple(min,max) {
//
//     var sim=[];
//     out: for ( min; min <= max; min++) {
//
//         for (var devision = 2; devision < min; devision++) {
//             if (min % devision == 0)
//             {
//                 continue out;
//             }
//         }
//         sim.push(min);
//         // alert( i ); // простое
//     }
//
//     return sim;
// }
// console.log(simple(2,10));


///// Begin 4-19
var win419 = '19. (events)\n\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u0430\u043A\u043E\u0439-\u0442\u043E header \u0441 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A".\n   \u041F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u043E\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0439 \u0431\u043B\u043E\u043A,\n    \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432\u043E\u0434\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438 \u043A\u043D\u043E\u043F\u043A\u0430 "\u0414\u0430!".\n   \u041F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u043E \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F (el.value)\n \u0415\u0441\u043B\u0438 \u043E\u043D\u043E \u043F\u0443\u0441\u0442\u043E\u0435, \u0442\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0434\u0435\u043B\u0430\u0435\u043C.\n   \u0415\u0441\u043B\u0438 \u043E\u043D\u043E \u043D\u0435 \u043F\u0443\u0441\u0442\u043E\u0435, \u0442\u043E \u0432\u044B\u0432\u043E\u0434\u0438\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C \u0438 \u043F\u0440\u044F\u0447\u0435\u043C \u0431\u043B\u043E\u043A.\n   \u041A\u043B\u0438\u043A \u0437\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u043C\u0438 \u0431\u043B\u043E\u043A\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u044F\u0442\u0430\u0442\u044C \u0431\u043B\u043E\u043A.';

var js419 = 'var button, educationOnOff, phone;\nbutton=document.querySelector(\'#buttonConteiner__button\');\neducationOnOff=document.querySelector(\'.formOnOff\');\nphone=document.querySelector(\'#phone\');\nbutton.addEventListener(\'click\', function (e){\n\n    educationOnOff.style.display=\'inline\';\n\n} );\neducationOnOff.addEventListener(\'submit\', function (e){\n\n    e.preventDefault();\n\n        if(phone.value==0){\n        alert(\'\u0412\u044B \u043D\u0435 \u0432\u0432\u0435\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440!\');\n    }\n    else {\n        alert(phone.value);\n        phone.value = \'\';\n        educationOnOff.style.display = \'none\';\n\n    }\n\n} );\neducationOnOff.firstElementChild.addEventListener(\'click\', function (e){\n;\n    if(e.target.tagName==\'ARTICLE\'){\n        educationOnOff.style.display=\'none\';\n    }\n\n} );';

var html419 = '<article class="buttonConteiner" id="buttonConteiner">\n        <a href="#" class="button_src"><button class="buttonConteiner__button" id="buttonConteiner__button">\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A</button></a>\n    </article>\n    <section class="formOnOff">\n    <article class="conteiner_form" id="conteiner_form">\n\n        <form action="index1.html" class="conteiner_form__form"><label for="phone" class="conteiner_form__input">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u041E\u041A</label><input type="text" id="phone" class="conteiner_form__input">\n            <input type="submit" value="OK!">\n        </form>\n    </article>\n    </section>';

var fun419 = function fun419() {
    elWin.innerHTML = '<article class="buttonConteiner" id="buttonConteiner">\n        <a href="#" class="button_src"><button class="buttonConteiner__button" id="buttonConteiner__button">\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A</button></a>\n    </article>\n    <section class="formOnOff">\n    <article class="conteiner_form" id="conteiner_form">\n\n        <form action="index1.html" class="conteiner_form__form"><label for="phone" class="conteiner_form__input">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u041E\u041A</label><input type="text" id="phone" class="conteiner_form__input">\n            <input type="submit" value="OK!">\n        </form>\n    </article>\n    </section>';

    var button, educationOnOff, phone;
    button = document.querySelector('#buttonConteiner__button');
    educationOnOff = document.querySelector('.formOnOff');
    phone = document.querySelector('#phone');
    button.addEventListener('click', function (e) {

        educationOnOff.style.display = 'inline';
    });
    educationOnOff.addEventListener('submit', function (e) {

        e.preventDefault();

        if (phone.value == 0) {
            alert('Вы не ввели телефонный номер!');
        } else {
            alert(phone.value);
            phone.value = '';
            educationOnOff.style.display = 'none';
        }
    });
    educationOnOff.firstElementChild.addEventListener('click', function (e) {
        ;
        if (e.target.tagName == 'ARTICLE') {
            educationOnOff.style.display = 'none';
        }
    });
};

TextWindows[419] = new Dz(html419, js419, win419, fun419);

////// End 4-19


///// Begin 5-01
var win501 = '- \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443 css \u0441 \u043F\u0430\u0440\u043E\u0439 \u0444\u0430\u0439\u043B\u043E\u0432 \u0441\u0442\u0438\u043B\u0435\u0439<br>\n- \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B \u0441 \u0438\u043C\u0435\u043D\u0430\u043C\u0438 \u044D\u0442\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432, \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B<br>\n- \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043A\u0440\u0438\u043F\u0442 \u0434\u043B\u044F node, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442:<br>\n  \u0447\u0438\u0442\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u0441 \u0438\u043C\u0435\u043D\u0430\u043C\u0438,<br>\n  \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0438\u043C\u0435\u043D \u043F\u043E \u043F\u0440\u043E\u0431\u0435\u043B\u0443 \u043D\u0430 \u043C\u0430\u0441\u0441\u0438\u0432 \u0438\u043C\u0435\u043D,<br>\n  \u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0430\u043C\u0438 \u0444\u0430\u0439\u043B\u044B,<br>\n  \u0441\u043A\u043B\u0435\u0438\u0432\u0430\u0442\u044C \u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u043E\u043A\u0443,<br>\n  \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0432 \u043D\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B.<br>\n- \u0412\u044B\u043B\u043E\u0436\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u043D\u0430 codepen \u0438 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u043A\u0430\u043A \u0414\u0417.<br>';

var js501 = 'var fs = require(\'fs\');\n    const jsList=fs.readFileSync(\'./src/js/HomeWorkJs/05/jsList.txt\', \'utf8\');\n    var list = jsList.split(\' \').reduce(function (list, currentValue) {\n        return list + fs.readFileSync(`./src/js/HomeWorkJs/04/${currentValue}`, `utf8`)\n\n    },0);\n    fs.writeFile(\'./src/js/HomeWorkJs/05/script.txt\', list);';

var html501 = '';

var fun501 = function fun501() {
    elWin.innerHTML = 'var fs = require(\'fs\');\n' + '    const jsList=fs.readFileSync(\'./src/js/HomeWorkJs/05/jsList.txt\', \'utf8\');\n' + '    var list = jsList.split(\' \').reduce(function (list, currentValue) {\n' + '        return list + fs.readFileSync(`./src/js/HomeWorkJs/04/\${currentValue}`, `utf8`)\n' + '\n' + '    },0);\n' + '    fs.writeFile(\'./src/js/HomeWorkJs/05/script.txt\', list);';
};

TextWindows[501] = new Dz(html501, js501, win501, fun501);
////// End 5-01


///// Begin 6-01
var win601 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 keydown, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u0431\u0440\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F (\u043D\u0430\u043F\u0435\u0447\u0430\u0442\u0430\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442) \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0435\u0433\u043E \u0432 API Wiki.<br>\n\n    \u0418\u0437 \u043E\u0442\u0432\u0435\u0442\u0430 API \u043D\u0443\u0436\u043D\u043E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A autocomplete \u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u043A \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443 \u043F\u043E\u0434 \u043F\u043E\u043B\u0435\u043C \u0432\u0432\u043E\u0434\u0430.<br>\n\n    \u0412\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0434\u043E\u043B\u0436\u043D\u043E \u0442\u0430\u043A: http://take.ms/m08P9<br>\n\n     \u041A\u043B\u0438\u043A \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435.<br>\n\n    \u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u044E, \u0447\u0442\u043E:<br>\n\n- \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u043E\u0436\u043D\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 var a = document.createElement(\'a\')<br>\n\n   - \u0441\u0441\u044B\u043B\u043A\u0443 \u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 a.href = "http://site.com"<br>\n\n    - \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 a.innerHTML = "Some text"<br>\n\n  - \u0447\u0442\u043E\u0431 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u043B\u043E \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0430\u0442\u0440\u0438\u0431\u0443\u0442 a.target = "_blank"<br>\n\n    - \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043C\u043E\u0436\u043D\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439<br>\n\ndocument.querySelector(\'.results\').appendChild(a)';

var js601 = 'let conteinerAjax = document.createElement(\'div\');\nlet textPressAjax = document.createElement(\'input\');\nconteinerAjax.classList.add(\'ajax\');\ntextPressAjax.setAttribute(\'id\', \'textPressAjax\');\ntextPressAjax.classList.add(\'ajax__search\');\ntextPressAjax.setAttribute(\'value\', \'\u041F\u043E\u0438\u0441\u043A...\');\ntextPressAjax.maxLength=\'20\';\nelWin.appendChild(conteinerAjax);\nconsole.log(textPressAjax);\nconteinerAjax.appendChild(textPressAjax);\ntextPressAjax.addEventListener(\'focus\', function (e) {\n    if (e.target.value == \'\u041F\u043E\u0438\u0441\u043A...\') {\n        e.target.value = \'\';\n    }\n})\ntextPressAjax.addEventListener(\'blur\', function (e) {\n    setTimeout(remuveDom, 500);\n})\ntextPressAjax.addEventListener(\'input\', axajSearch);\nfunction search() {\n    var seachText, spanPressAjax;\n    if (conteinerAjax.childElementCount != 1) {\n        remuveDom()\n    }\n    var params = {\n        action: \'opensearch\',\n        origin: \'*\',\n        format: \'json\',\n        search: \'\'\n    };\n    params.search = textPressAjax.value;\n    var body = Object.keys(params)\n        .map(function (prop) {\n            return prop + \'=\' + params[prop];\n        })\n        .join(\'&\');\n    var apiUrl = \'https://ru.wikipedia.org/w/api.php\';\n    var http = new XMLHttpRequest();\n    http.open(\'POST\', apiUrl);\n    http.addEventListener(\'readystatechange\', function () {\n        if (this.readyState == 4) {\n            if (this.status == 200) {\n                seachText = JSON.parse(this.responseText);\n                console.log(seachText.length);\n                for (var i = 0; i < seachText[1].length && i < 10; i++) {\n                    spanPressAjax = document.createElement(\'span\');\n                    spanPressAjax.classList.add(\'ajax__text\');\n                    spanPressAjax.innerHTML = `<a href="${seachText[3][i]}" target="_blank">${seachText[1][i]}</a>`;\n                    conteinerAjax.appendChild(spanPressAjax);\n                }\n            }\n        }\n    })\n    http.send(body);\n}\nvar time;\nfunction axajSearch() {\n    time && clearTimeout(time);\n    time=setTimeout(search,500);\n}\nfunction remuveDom() {\n    while (conteinerAjax.childElementCount != 1) {\n        conteinerAjax.lastElementChild.remove()\n    }\n}';

var html601 = '';

var fun601 = function fun601() {
    elWin.innerHTML = '';
    var conteinerAjax = document.createElement('div');
    var textPressAjax = document.createElement('input');

    conteinerAjax.classList.add('ajax');

    textPressAjax.setAttribute('id', 'textPressAjax');
    textPressAjax.classList.add('ajax__search');
    textPressAjax.setAttribute('value', 'Поиск...');
    textPressAjax.maxLength = '20';
    elWin.appendChild(conteinerAjax);

    conteinerAjax.appendChild(textPressAjax);

    textPressAjax.addEventListener('focus', function (e) {

        if (e.target.value == 'Поиск...') {
            e.target.value = '';
        }
    });

    textPressAjax.addEventListener('blur', function (e) {

        setTimeout(remuveDom, 500);
    });

    textPressAjax.addEventListener('input', axajSearch);

    function search() {
        var seachText, spanPressAjax;

        if (conteinerAjax.childElementCount != 1) {
            remuveDom();
        }
        var params = {
            action: 'opensearch',
            origin: '*',
            format: 'json',
            search: ''
        };
        params.search = textPressAjax.value;
        var body = Object.keys(params).map(function (prop) {
            return prop + '=' + params[prop];
        }).join('&');
        var apiUrl = 'https://ru.wikipedia.org/w/api.php';
        var http = new XMLHttpRequest();
        http.open('POST', apiUrl);
        http.addEventListener('readystatechange', function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    // success callback
                    seachText = JSON.parse(this.responseText);
                    console.log(seachText.length);

                    for (var i = 0; i < seachText[1].length && i < 10; i++) {

                        spanPressAjax = document.createElement('span');
                        spanPressAjax.classList.add('ajax__text');
                        spanPressAjax.innerHTML = '<a href="' + seachText[3][i] + '" target="_blank">' + seachText[1][i] + '</a>';
                        conteinerAjax.appendChild(spanPressAjax);
                    }
                }
            }
        });

        http.send(body);
    }

    var time;

    function axajSearch() {
        time && clearTimeout(time);
        time = setTimeout(search, 500);
    }

    function remuveDom() {
        while (conteinerAjax.childElementCount != 1) {
            conteinerAjax.lastElementChild.remove();
        }
    }
};

TextWindows[601] = new Dz(html601, js601, win601, fun601);
////// End 6-01


///// Begin 7-01

// var elSelect=document.querySelectorAll('.conteinerSelect'); //первый вариант
// // var elSelect=document.querySelectorAll('.upDown');
// // log(elSelect);
// var submit=document.querySelector('#formFruits');
// // console.log(submit);
// var i=0;
// while(elSelect[i]){
//     // log(elSelect[i]);
//     elSelect[i].addEventListener('click',function (e) {
//
//
//         if(e.target.classList.contains('up')||e.target.classList.contains('down'))
//         {
//             var first, last, next;
//
//
//             first = e.target.parentNode.previousElementSibling.firstElementChild;
//             // log(e.target.parentNode.previousElementSibling);
//             last = e.target.parentNode.previousElementSibling.lastElementChild;
//             // log(last);
//             next = first.nextElementSibling;
//
//
//
//             if (e.target.classList.contains('up')) {
//                 first.removeAttribute('selected', '');
//                 e.target.parentNode.previousElementSibling.insertBefore(last, first);
//
//                 last.setAttribute('selected', '');
//
//             }
//             if (e.target.classList.contains('down')) {
//                 first.removeAttribute('selected', '');
//                 e.target.parentNode.previousElementSibling.appendChild(first);
//                 next.setAttribute('selected', '');
//
//             }
//
//         }
//     });
// i++;
// }
//
// submit.addEventListener('submit',function (e) {
//     var form=document.querySelectorAll('select');
//     var i=0;
//     while(form[i]){
//         // console.log(form[i].value);
//         // console.log(form[i].getAttribute('name'));
//         localStorage.setItem(`${form[i].getAttribute('name')}`, `${form[i].value}`);
//         i++;
//     }
//     // console.log(form[1].form[i].value);
//     // var formData = new FormData(document.getElementById('formFruits'));
//     // console.log(e.target);
//     e.preventDefault();
//     alert('Ваш выбор сохранен!')
//     // console.log(formData);
//
// })
// ;(function (element){
//     var i=0,j=0,name, value, select;
//     var el=document.querySelectorAll(element);
//     // NodeList.prototype.filter=Array.prototype.filter;
//     HTMLCollection.prototype.filter=Array.prototype.filter;
//     // NodeList.prototype.filter=Array.prototype.filter;
//     // var er=el.filter(function (el){return el.getAttribute('name')=='harry'});
//     // log(er);
//     // console.log(el);
//     // log(el);
//     for(;i<el.length;i++){
//         name=el[i].getAttribute('name');
//         // log(name);
//         value=localStorage.getItem(name);
//         // log(value);
//         select=el[i].children.filter(function (el){return el.getAttribute('value')==value})
//         select[0].setAttribute('selected','');
//     }
//
//     // console.log(el[0].getAttribute('id'));
//     // while(localStorage.getItem(`${el[i].getAttribute('name')}`)){
//     //     el.firstElementChild.setAttribute('selected','');
//     // }
// })('.selectFormFruits');


var win701 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u0441 \u0441\u0435\u043B\u0435\u043A\u0442\u0430\u043C\u0438 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0442\u0430\u043A\u0443\u044E http://take.ms/OLk4v).<br>\n \u041F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0444\u043E\u0440\u043C\u044B \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0432 localStorage.<br>\n  \u0424\u043E\u0440\u043C\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430.<br>\n \u041F\u043E\u0441\u043B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u044B \u0442\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u043B\u0438\u0441\u044C.<br>';

var js701 = 'var elSelect=document.querySelectorAll(\'.conteinerSelect\'); //первый вариант\n' + '    var submit=document.querySelector(\'#formFruits\');\n' + '    var i=0;\n' + '    while(elSelect[i]){\n' + '        elSelect[i].addEventListener(\'click\',function (e) {\n' + '            if(e.target.classList.contains(\'up\')||e.target.classList.contains(\'down\'))\n' + '            {\n' + '                var first, last, next;\n' + '                first = e.target.parentNode.previousElementSibling.firstElementChild;\n' + '                last = e.target.parentNode.previousElementSibling.lastElementChild;\n' + '                next = first.nextElementSibling;\n' + '                if (e.target.classList.contains(\'up\')) {\n' + '                    first.removeAttribute(\'selected\', \'\');\n' + '                    e.target.parentNode.previousElementSibling.insertBefore(last, first);\n' + '                    last.setAttribute(\'selected\', \'\');\n' + '                }\n' + '                if (e.target.classList.contains(\'down\')) {\n' + '                    first.removeAttribute(\'selected\', \'\');\n' + '                    e.target.parentNode.previousElementSibling.appendChild(first);\n' + '                    next.setAttribute(\'selected\', \'\');\n' + '                }\n' + '            }\n' + '        });\n' + '        i++;\n' + '    }\n' + '    submit.addEventListener(\'submit\',function (e) {\n' + '        var form=document.querySelectorAll(\'select\');\n' + '        var i=0;\n' + '        while(form[i]){\n' + '            localStorage.setItem(`${form[i].getAttribute(\'name\')}`, `${form[i].value}`);\n' + '            i++;\n' + '        }\n' + '        e.preventDefault();\n' + '        alert(\'Ваш выбор сохранен!\')\n' + '    })\n' + '    ;(function (element){\n' + '        var i=0,j=0,name, value, select;\n' + '        var el=document.querySelectorAll(element);\n' + '        HTMLCollection.prototype.filter=Array.prototype.filter;\n' + '        for(;i<el.length;i++){\n' + '            name=el[i].getAttribute(\'name\');\n' + '            value=localStorage.getItem(name);\n' + '            select=el[i].children.filter(function (el){return el.getAttribute(\'value\')==value})\n' + '            select[0].setAttribute(\'selected\',\'\');\n' + '        }\n' + '    })(\'.selectFormFruits\');';

var html701 = '<div class="selectEvent">\n' + '        <article class="conteinerSelect">\n' + '            <label for="andy">Andy</label>\n' + '            <select name="andy" id="andy" form="formFruits" class="selectFormFruits">\n' + '                <option value="apple">Apple</option>\n' + '                <option value="orange">Orange</option>\n' + '                <option value="carrot">Carrot</option>\n' + '                <option value="cherry">Cherry</option>\n' + '            </select>\n' + '            <div class="upDown"><figure class="up" ></figure><figure class="down"></figure></div>\n' + '        </article>\n' + '        <article class="conteinerSelect">\n' + '            <label for="harry">Harry</label>\n' + '            <select name="harry" id="harry" form="formFruits" class="selectFormFruits" >\n' + '                <option value="apple">Apple</option>\n' + '                <option value="orange">Orange</option>\n' + '                <option value="carrot">Carrot</option>\n' + '                <option value="cherry">Cherry</option>\n' + '            </select>\n' + '            <div class="upDown"><figure class="up" ></figure><figure class="down"></figure></div>\n' + '        </article>\n' + '        </div>\n' + '        <form id="formFruits" >\n' + '            <input type="submit" value="Save">\n' + '        </form>';

var fun701 = function fun701() {
    elWin.innerHTML = html701;
    var elSelect = document.querySelectorAll('.conteinerSelect'); //первый вариант
    var submit = document.querySelector('#formFruits');
    var i = 0;
    while (elSelect[i]) {
        elSelect[i].addEventListener('click', function (e) {
            if (e.target.classList.contains('up') || e.target.classList.contains('down')) {
                var first, last, next;
                first = e.target.parentNode.previousElementSibling.firstElementChild;
                last = e.target.parentNode.previousElementSibling.lastElementChild;
                next = first.nextElementSibling;
                if (e.target.classList.contains('up')) {
                    first.removeAttribute('selected', '');
                    e.target.parentNode.previousElementSibling.insertBefore(last, first);
                    last.setAttribute('selected', '');
                }
                if (e.target.classList.contains('down')) {
                    first.removeAttribute('selected', '');
                    e.target.parentNode.previousElementSibling.appendChild(first);
                    next.setAttribute('selected', '');
                }
            }
        });
        i++;
    }
    submit.addEventListener('submit', function (e) {
        var form = document.querySelectorAll('select');
        var i = 0;
        while (form[i]) {
            localStorage.setItem('' + form[i].getAttribute('name'), '' + form[i].value);
            i++;
        }
        e.preventDefault();
        alert('Ваш выбор сохранен!');
    });(function (element) {
        var i = 0,
            j = 0,
            name,
            value,
            select;
        var el = document.querySelectorAll(element);
        HTMLCollection.prototype.filter = Array.prototype.filter;
        for (; i < el.length; i++) {
            name = el[i].getAttribute('name');
            value = localStorage.getItem(name);
            select = el[i].children.filter(function (el) {
                return el.getAttribute('value') == value;
            });
            select[0].setAttribute('selected', '');
        }
    })('.selectFormFruits');
};

TextWindows[701] = new Dz(html701, js701, win701, fun701);
////// End 7-01


///// Begin 7-02
var win702 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E (\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F Promise), \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435.<br>\nfunction delay(ms){ /* \u0432\u0430\u0448 \u043A\u043E\u0434 \u0442\u0443\u0442 */ }<br>\nfunction doStuff() { console.log(\'\u0410 \u0432\u043E\u0442 \u0438 \u044F!\'); }<br>\ndelay(2000).then(doStuff);<br>\n \u0415\u0441\u043B\u0438 \u0432 delay \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u043E\u0441\u044C \u0447\u0438\u0441\u043B\u043E, \u0442\u043E \u0434\u0435\u043B\u0430\u0435\u043C \u0441\u0432\u043E\u044E \u043E\u0448\u0438\u0431\u043A\u0443, \u043D\u0430\u043Fs\u0440\u0438\u043C\u0435\u0440 "Please specify duration".<br>\n \u0415\u0441\u043B\u0438 \u0432 delay \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0435 \u0447\u0438\u0441\u043B\u043E, \u0442\u043E \u0434\u0435\u043B\u0430\u0435\u043C \u0441\u0432\u043E\u044E \u043E\u0448\u0438\u0431\u043A\u0443, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "Duration is required to be a number".<br>';

var js702 = 'var log;\nelWin.innerHTML=\'html702\';\nlog(document.querySelectorAll(\'.promis\')[0]);\nfunction doStuff() { document.querySelectorAll(\'.promis\')[1].textContent=\'<\'img \'src=\'https://i.gifer.com/4dlj.gif\'>\' }\nvar delay=function (ms) {\n    ms&&( document.querySelectorAll(\'.promis\')[0].textContent=\'\u042F \u043F\u043E\u044F\u0432\u043B\u044E\u0441\u044C \u0447\u0435\u0440\u0435\u0437 \'+(ms/1000)+\' \u0441\u0435\u043A\u0443\u043D\u0434\u044B\');\n    if(typeof ms==\'number\'){\n    }\n    var tr= new Promise(function (resolve, reject) {\n        if(typeof ms==\'number\'){\n            setTimeout( resolve, ms) ;\n        }\n        else{\n            reject(ms)\n        }\n    });\n    return tr;\n};\n\ndelay(2000).then(doStuff).catch((r)=>log(\'Please enter a valid delay. You entered: \'+r));';

var html702 = '<div class="promis"></div><div class="promis"></div>';

var fun702 = function fun702() {
    var log;
    elWin.innerHTML = html702;

    function doStuff() {
        document.querySelectorAll('.promis')[1].innerHTML = '<img src="https://i.gifer.com/4dlj.gif">';
    }
    var delay = function delay(ms) {
        ms && (document.querySelectorAll('.promis')[0].textContent = 'Я появлюсь через ' + ms / 1000 + ' секунды');
        if (typeof ms == 'number') {}
        var tr = new Promise(function (resolve, reject) {
            if (typeof ms == 'number') {
                setTimeout(resolve, ms);
            } else {
                reject(ms);
            }
        });
        return tr;
    };

    delay(4000).then(doStuff).catch(function (r) {
        return log('Please enter a valid delay. You entered: ' + r);
    });
};

TextWindows[702] = new Dz(html702, js702, win702, fun702);
////// End 7-02


///// Begin 7-03
var win703 = '\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0438\u0441\u043A \u043F\u043E wiki, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F Promise.';

var js703 = 'let conteinerAjax = document.createElement(\'div\');\n    let textPressAjax = document.createElement(\'input\');\n    conteinerAjax.classList.add(\'ajax\');\n    textPressAjax.setAttribute(\'id\', \'textPressAjax\');\n    textPressAjax.classList.add(\'ajax__search\');\n    textPressAjax.setAttribute(\'value\', \'\u041F\u043E\u0438\u0441\u043A...\');\n    textPressAjax.maxLength = \'20\';\n    elWin.appendChild(conteinerAjax);\n    conteinerAjax.appendChild(textPressAjax);\ntextPressAjax.addEventListener(\'focus\', function (e) {\n        if (e.target.value == \'\u041F\u043E\u0438\u0441\u043A...\') {\n            e.target.value = \'\';\n        }\n    })\n    textPressAjax.addEventListener(\'blur\', function (e) {\n        setTimeout(remuveDom, 500);\n    })\n\n\n    function search() {\n        var seachText, spanPressAjax;\n        if (conteinerAjax.childElementCount != 1) {\n            remuveDom()\n        }\n\n        var params = {\n            action: \'opensearch\',\n            origin: \'*\',\n            format: \'json\',\n            search: \'\'\n        };\n        params.search = textPressAjax.value;\n        var body = Object.keys(params)\n            .map(function (prop) {\n                return prop + \'=\' + params[prop];\n            })\n            .join(\'&\');\n\n        return new Promise(function (resolve, reject) {\n\n            if (body.search != \'\') {\n                time && clearTimeout(time);\n                time = setTimeout(resolve, 500,body)\n            }\n            else {\n                reject(\'Something went wrong!\')\n            }\n        });\n\n    }\n\n    var time;\n    textPressAjax.addEventListener(\'input\', () => {\n\n        search().then((body) => {\n            // log(body);\n            var apiUrl = \'https://ru.wikipedia.org/w/api.php\';\n            var http = new XMLHttpRequest();\n            http.open(\'POST\', apiUrl);\n            http.addEventListener(\'readystatechange\', function () {\n\n                if (this.readyState == 4) {\n                    var seachText = JSON.parse(this.responseText);\n                    if (this.status == 200) {\n                        for (var i = 0; i < seachText[1].length && i < 10; i++) {\n\n                            var spanPressAjax = document.createElement(\'span\');\n                            spanPressAjax.classList.add(\'ajax__text\');\n                            spanPressAjax.innerHTML = `<a href="${seachText[3][i]}" target="_blank">${seachText[1][i]}</a>`;\n                            conteinerAjax.appendChild(spanPressAjax);\n                        }\n                    }\n                }\n            });\n            http.send(body);\n        });\n\n    });\n\n\n    function remuveDom() {\n        while (conteinerAjax.childElementCount != 1) {\n            conteinerAjax.lastElementChild.remove()\n        }\n    }\n';

var html703 = '';

var fun703 = function fun703() {
    elWin.innerHTML = html703;
    var conteinerAjax = document.createElement('div');
    var textPressAjax = document.createElement('input');
    conteinerAjax.classList.add('ajax');
    textPressAjax.setAttribute('id', 'textPressAjax');
    textPressAjax.classList.add('ajax__search');
    textPressAjax.setAttribute('value', 'Поиск...');
    textPressAjax.maxLength = '20';
    elWin.appendChild(conteinerAjax);
    conteinerAjax.appendChild(textPressAjax);

    textPressAjax.addEventListener('focus', function (e) {
        if (e.target.value == 'Поиск...') {
            e.target.value = '';
        }
    });
    textPressAjax.addEventListener('blur', function (e) {
        setTimeout(remuveDom, 500);
    });

    function search() {
        var seachText, spanPressAjax;
        if (conteinerAjax.childElementCount != 1) {
            remuveDom();
        }

        var params = {
            action: 'opensearch',
            origin: '*',
            format: 'json',
            search: ''
        };
        params.search = textPressAjax.value;
        var body = Object.keys(params).map(function (prop) {
            return prop + '=' + params[prop];
        }).join('&');

        return new Promise(function (resolve, reject) {

            if (body.search != '') {
                time && clearTimeout(time);
                time = setTimeout(resolve, 500, body);
            } else {
                reject('Something went wrong!');
            }
        });
    }

    var time;
    textPressAjax.addEventListener('input', function () {

        search().then(function (body) {
            // log(body);
            var apiUrl = 'https://ru.wikipedia.org/w/api.php';
            var http = new XMLHttpRequest();
            http.open('POST', apiUrl);
            http.addEventListener('readystatechange', function () {

                if (this.readyState == 4) {
                    var seachText = JSON.parse(this.responseText);
                    if (this.status == 200) {
                        for (var i = 0; i < seachText[1].length && i < 10; i++) {

                            var spanPressAjax = document.createElement('span');
                            spanPressAjax.classList.add('ajax__text');
                            spanPressAjax.innerHTML = '<a href="' + seachText[3][i] + '" target="_blank">' + seachText[1][i] + '</a>';
                            conteinerAjax.appendChild(spanPressAjax);
                        }
                    }
                }
            });
            http.send(body);
        });
    });

    function remuveDom() {
        while (conteinerAjax.childElementCount != 1) {
            conteinerAjax.lastElementChild.remove();
        }
    }
};

TextWindows[703] = new Dz(html703, js703, win703, fun703);
////// End 7-03


///// Begin 8-01


var win801 = '\u0415\u0441\u0442\u044C \u0441\u0430\u0439\u0442, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0438 \u043C\u043E\u0436\u0435\u0442 \u0443\u043A\u0430\u0437\u0430\u0442\u044C, \u0447\u0442\u043E \u0443 \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0441\u043E\u0431\u0430\u043A\u0430.<br>\n    \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0442\u0430\u043A\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B:<br>\n    var user1 = { name: "Harry", dog: null };<br>\nvar user2 = { name: "David", dog: { name: "Lucky" } };<br>\n\u041F\u043E\u0441\u043B\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C \u0441\u043E\u0431\u0430\u043A\u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0441\u043A\u0438\u0434\u043A\u0430,<br>\n    \u0437\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0432\u043E\u0442 \u0442\u0430\u043A\u043E\u0439 \u043A\u043E\u0434:<br>\n    function notify() {<br>\n        console.log("You have a dog! Use this code for 50% off: UG4H6QE");<br>\n    }\nfunction checkDogOwner(user, callback) {<br>\n    if (user && user.dog) {<br>\n        callback();<br>\n    }\n}\n// on registration success<br>\ncheckDogOwner(user, notify);<br>\n\n\u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043A\u0440\u044B\u0442\u044C \u0442\u0435\u0441\u0442\u0430\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 checkDogOwner.<br>';

var js801 = 'describe("function checkDogOwner() test", function () {\n    var user,\n        spy,\n        callBack;\n\n    beforeEach(function() {\n        user = { name: "David", dog: { name: "Lucky" } };\n        spy = {\n            foo: function() {}\n        };\n        spyOn(spy, "foo");\n        callBack = function() {\n            spy.foo();\n        };\n    });\n\n    it("function exist", function () {\n        expect(checkDogOwner).toBeDefined();\n    });\n\n    it("type of checkDogOwner is function", function () {\n        expect(typeof checkDogOwner).toBe("function");\n    });\n\n    it("function have 2 expected arguments", function () {\n        expect(checkDogOwner.length).toBe(2);\n    });\n\n    it("function returns undefined", function () {\n        expect(checkDogOwner()).toBe(void(0));\n        expect(checkDogOwner(user, callBack)).toBe(void(0));\n    });\n\n    it("function call with one any argument throw exeption", function () {\n        expect(() => checkDogOwner(user)).toThrow();\n    });\n\n    it("function call with second non-function callback argument throw exeption", function () {\n        callBack = 6;\n        expect(() => checkDogOwner(user, callBack)).toThrow();\n    });\n\n    it("function call callback function if first argument has not-null dog propertie", function () {\n        checkDogOwner(user, callBack);\n        expect(spy.foo).toHaveBeenCalled();\n    });\n\n    it("function don\'t call callback function if first argument has null or undefined dog propertie", function () {\n        user = 5;\n        checkDogOwner(user, callBack);\n        expect(spy.foo).not.toHaveBeenCalled();\n    });\n});\n';

var html801 = 'Спасибо за подсказки Ивану!';

var fun801 = function fun801() {
    elWin.innerHTML = html401;
};

TextWindows[801] = new Dz(html801, js801, win801, fun801);
////// End 8-01


///// Begin 8-02
var win802 = '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0442\u0435\u0441\u0442\u044B \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u043C\u0435\u0442\u043E\u0434\u0430 splice, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0435\u0441\u0442\u044C \u0443 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432.<br>\n\u0422\u043E \u0435\u0441\u0442\u044C, \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043C\u044B \u043F\u0438\u0448\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u0441\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u043C\u0430\u0441\u0441\u0438\u0432\u0430\u043C\u0438 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 splice.<br>\n\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0443\u0436\u043D\u043E \u043A\u0430\u0436\u0434\u0443\u044E \u043C\u0435\u043B\u043E\u0447\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u044D\u0442\u043E\u0433\u043E \u043C\u0435\u0442\u043E\u0434\u0430:<br>\n\u0435\u0441\u0442\u044C \u043B\u0438 \u043C\u0435\u0442\u043E\u0434 \u0432\u043E\u043E\u0431\u0449\u0435, \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B<br>\n(\u043D\u0430\u043F\u043E\u043C\u043D\u044E, \u0447\u0442\u043E \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435),<br>\n\u043A\u0430\u043A\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043C\u0435\u0442\u043E\u0434, \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043B\u0438 \u043E\u043D \u043E\u0442\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0432 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0435.<br>';

var js802 = 'describe(\'splice\', function () {\n    var arr,ar,arrayFun, funArray;\n\n    beforeEach(function () {\n        arr = ["\u042F", "\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine", "!"];\n        ar;\n\n    });\n    it(\'does the function exist\', function () {\n        expect((function(){\n\t\treturn Array.prototype.hasOwnProperty(\'splice\')\n\t\t})()).toBe(true);\n        \n\n    })\n\n    it(\'Will issue a function with two parameters\', function () {\n        expect((function () {\n            ar = arr.splice(0, 1);\n            return ar;\n\n        })()).toEqual(["\u042F"]);\n        expect((function () {\n            ar = arr.splice(1, 2);\n            return ar;\n\n        })()).toEqual(["Jasmine", "!"]);\n\n    })\n    it(\'how an array with two parameters changes\', function () {\n        expect((function () {\n            arr.splice(0, 1);\n            return arr;\n\n        })()).toEqual(["\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine", "!"]);\n\n        expect((function () {\n            arr.splice(1, 2);\n            return arr;\n\n        })()).toEqual(["\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443"]);\n\n\n    })\n    it(\'Will issue a function with 1 parameter\', function () {\n        expect((function () {\n            ar = arr.splice(3);\n            return ar;\n\n        })()).toEqual(["!"]);\n\n        expect((function () {\n            ar = arr.splice(1);\n            return ar;\n\n        })()).toEqual(["\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine"]);\n    })\n\n    it(\'how the array changes with a function with 1 parameter\', function () {\n        expect((function () {\n            arr.splice(3);\n            return arr;\n\n        })()).toEqual(["\u042F", "\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine"]);\n\n        expect((function () {\n            arr.splice(1);\n            return arr;\n\n        })()).toEqual(["\u042F"]);\n    })\n\n    it(\'how the array changes with the function of replacement and insertion\', function () {\n        expect((function () {\n            arr.splice(1, 0, "\u0440\u0435\u0430\u043B\u044C\u043D\u043E");\n            return arr;\n\n        })()).toEqual(["\u042F", "\u0440\u0435\u0430\u043B\u044C\u043D\u043E", "\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine", "!"]);\n\n        expect((function () {\n            arr.splice(0, 5, "\u041F\u0440\u0430\u0432\u0434\u0430!");\n            return arr;\n\n        })()).toEqual(["\u041F\u0440\u0430\u0432\u0434\u0430!"]);\n    })\n    it(\'that returns a function with a replacement or an insertion\', function () {\n        expect((function () {\n            ar =arr.splice(1, 0, "\u0440\u0435\u0430\u043B\u044C\u043D\u043E");\n            return ar;\n\n        })()).toEqual([]);\n\n        expect((function () {\n            ar=arr.splice(0, 5, "\u041F\u0440\u0430\u0432\u0434\u0430!");\n            return ar;\n\n        })()).toEqual(["\u042F", "\u0440\u0435\u0430\u043B\u044C\u043D\u043E", "\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine", "!"]);\n    })\n    it(\'If nothing is passed to the function or an empty string is passed\', function () {\n        expect((function () {\n            ar =arr.splice();\n            return ar;\n\n        })()).toEqual([]);\n\n        expect((function () {\n            ar=arr.splice(\'\');\n            return ar;\n\n        })()).toEqual(["\u042F", "\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine", "!"]);\n\n        expect((function () {\n            arr.splice(\'\');\n            return arr;\n\n        })()).toEqual([]);\n\n        expect((function () {\n            arr.splice();\n            return arr;\n\n        })()).toEqual([]);\n    })\n\n})\n';

var html802 = '';

var fun802 = function fun802() {
    elWin.innerHTML = '';
};

TextWindows[802] = new Dz(html802, js802, win802, fun802);
////// End 4-01

// .

//
// })
// })


///// Begin 10-01
var win1001 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C 2 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B: index.html \u0438 offline.html<br>\n\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0438\u043C\u0435\u0442\u044C textarea.<br>\n    \u0415\u0441\u043B\u0438 \u043C\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u043B\u0438 \u0442\u0430\u043C \u0447\u0442\u043E-\u0442\u043E, \u0442\u043E \u044D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0432 localStorage.<br>\n    \u0415\u0441\u043B\u0438 \u043C\u044B \u043E\u0431\u043D\u043E\u0432\u0438\u043B\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u0442\u043E \u043C\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043D\u0430\u0448 \u0442\u0435\u043A\u0441\u0442 \u0438 \u043C\u043E\u0447\u044C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u0438\u0441\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435.<br>\n    \u0415\u0441\u043B\u0438 \u043C\u044B \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u043B\u0438 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442, \u0442\u043E \u0434\u043E\u043B\u0436\u043D\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0432\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u043E\u0441\u0442\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0442\u0435\u043A\u0441\u0442 (\u0431\u0435\u0437 textarea).<br>\ndocument.querySelector(\'#task10\').addEventListener(\'input\',e=> {<br>\n    // localStorage.setItem(\'textArea\', \'\')<br>\n    log(document.querySelector(\'#task10\').value)<br>';

var js1001 = 'var textArea10=document.querySelector(\'#task10\');\n    var imgElement=document.querySelector(\'body > section > main > section.conteinerWin__text > img\');\n    var textArea10duscribe =document.querySelector(\'body > section > main > section.conteinerWin__text > section > section:nth-child(2) > textarea\');\n    var setButtonTextArea=document.querySelector(\'body > section > main > section.conteinerWin__text > button\');\n\n//\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0430\u0441\u044C \u043B\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430\n    if(imgElement.complete && imgElement.naturalHeight !== 0){\n        textArea10.value=!!localStorage.getItem(\'textArea\')?localStorage.getItem(\'textArea\'):\'\';\n        setButtonTextArea.onclick=setTextAreaValue;\n        window.onunload = setTextAreaValue;\n    }\n\n    else{\n        textArea10duscribe.value=localStorage.getItem(\'textArea\');\n    }\n\n//\u0412\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 localSorage\n    function setTextAreaValue() {\n        localStorage.setItem(\'textArea\',  document.querySelector(\'#task10\').value)\n    }';

var html1001 = '<section class="blok10">\n' + '                <section class="twoBlock10">\n' + '                    <textarea name="task10" id="task10" cols="30" rows="10" autofocus></textarea>\n' + '\n' + '                </section>\n' + '                <section class="twoBlock10">\n' + '                    <textarea name="task10"  cols="30" rows="10" data-textarea10="area" disabled></textarea>\n' + '                </section>\n' + '\n' + '            </section>\n' + '            <button>Сохранить</button>\n' + '            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" class="noDisplay" alt="">';

var fun1001 = function fun1001() {
    elWin.innerHTML = html1001;
    var textArea10 = document.querySelector('#task10');
    var imgElement = document.querySelector('body > section > main > section.conteinerWin__text > img');
    var textArea10duscribe = document.querySelector('body > section > main > section.conteinerWin__text > section > section:nth-child(2) > textarea');
    var setButtonTextArea = document.querySelector('body > section > main > section.conteinerWin__text > button');

    //проверяем загрузилась ли картинка
    if (imgElement.complete && imgElement.naturalHeight !== 0) {
        textArea10.value = !!localStorage.getItem('textArea') ? localStorage.getItem('textArea') : '';
        setButtonTextArea.onclick = setTextAreaValue;
        window.onunload = setTextAreaValue;
    } else {
        textArea10duscribe.value = localStorage.getItem('textArea');
    }

    //Вставляем данные из localSorage
    function setTextAreaValue() {
        localStorage.setItem('textArea', document.querySelector('#task10').value);
    }
};

TextWindows[1001] = new Dz(html1001, js1001, win1001, fun1001);
////// End 10-01


// console.log('loading: ' + document.readyState);
//
//
//
// document.addEventListener('DOMContentLoaded', function() {
//
//     console.log('document@DOMContentLoaded: ' + document.readyState);
//
// });
//
// window.onload = function() {
//
//     console.log('window@load: ' + document.readyState);
//
// };
//
//
// function imgLoaded(imgElement) {
//     log( );
// }
//

///// Begin 10-03
var win1003 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 (\u0432\u043E\u0442 \u0442\u0430\u043A\u0443\u044E: http://take.ms/saNQe), \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439.<br>\n\u041F\u0435\u0440\u0432\u0430\u044F \u0438 \u0432\u0442\u043E\u0440\u0430\u044F \u0433\u0430\u043B\u043E\u0447\u043A\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u043F\u043E\u043B\u044F \u0432\u0432\u043E\u0434\u0430 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A.<br>\n\u0422\u0440\u0435\u0442\u044C\u044F \u0433\u0430\u043B\u043E\u0447\u043A\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044F.<br>\n\u041B\u0435\u0432\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436 - \u044D\u0442\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E (\u0432 \u043A\u043E\u0434\u0435 \u043E\u043D\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u043E\u043C \u0438\u043B\u0438 \u0444\u0430\u0431\u0440\u0438\u043A\u043E\u0439).<br>\n\u0422\u043E \u0435\u0441\u0442\u044C \u043B\u0435\u0432\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436 \u0431\u044B\u043B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0441 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0433\u0430\u043B\u043E\u0447\u043A\u0430\u043C\u0438, \u043F\u0440\u0430\u0432\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436 \u0431\u044B\u043B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438.<br>\n<br>\nPS: \u043F\u043E\u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u043A\u043E\u0434 \u0442\u0430\u043A, \u0447\u0442\u043E\u0431 \u0440\u0430\u0437\u0431\u0438\u0442\u044C \u0432\u0441\u044E \u043B\u043E\u0433\u0438\u043A\u0443 \u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0438: \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F,<br>\n\u043F\u043E\u0442\u043E\u043C \u0432 \u043A\u043E\u043D\u0446\u0435 \u0441\u0432\u043E\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0434\u0440\u0443\u0433\u0443\u044E \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u0432 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B, \u0438 \u0442.\u0434.<br>\n\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440:<br>\nfunction handleAdd() {<br>\n  /* \u0432\u0435\u0448\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043A\u043B\u0438\u043A */<br>\n  /* \u0441\u043E\u0431\u0440\u0430\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u043F\u043E\u043B\u0435\u0439 \u0432 \u043E\u0434\u0438\u043D \u043E\u0431\u044A\u0435\u043A\u0442 options */<br>\n  createCharacter(options);<br>\n}<br>\nfunction createCharacter(options) {<br>\n  /* \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C document.createElement */<br>\n  addToPage(character);<br>\n}\nfunction addToPage(character) {<br>\n  /* \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043D\u0443\u0436\u043D\u044B\u0439 \u0431\u043B\u043E\u043A */<br>\n}<br>';

var js1003 = '// \u0440\u0438\u0441\u0443\u0435\u043C \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u043A\u0430 CharInfoArray-\u043E\u0431\u044D\u043A\u0442 \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C, elDom -\u0433\u0434\u0435 \u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C\n    function canvasChar(CharInfoArray, elDom) {\n        var properties = CharInfoArray;\n        if (elDom != undefined) {\n            var el = document.querySelector(elDom)\n            var ctx = el.getContext(\'2d\');\n            el.width = document.querySelector(\'.character\').clientWidth;\n            el.height = document.querySelector(\'.character\').clientHeight;\n        }\n        else {\n            var section, convas, elDivCanvas, Convas, ctx;\n            section = document.createElement(\'section\');\n            section.classList.add(\'character\');\n            convas = document.createElement(\'canvas\');\n            convas.classList.add(\'canvasChar\');\n            convas.setAttribute(\'data-char\', properties.charCount);\n            elDivCanvas = document.querySelector(\'.showingCharacters\');\n            elDivCanvas.appendChild(section);\n            section.appendChild(convas);\n            convas = Array.prototype.slice.call(document.querySelectorAll(\'canvas\'));\n            Convas = convas.filter(value => value.dataset.char == properties.charCount);\n            ctx = Convas[0].getContext(\'2d\');\n            Convas[0].width = document.querySelector(\'.character\').clientWidth;\n            Convas[0].height = document.querySelector(\'.character\').clientHeight;\n        }\n\n        ctx.lineWidth = .2;\n        ctx.strokeStyle = properties.colorPants;\n        ctx.fillStyle = properties.colorPants;\n\n// \u0440\u0438\u0441\u0443\u0435\u043C \u0448\u0442\u0430\u043D\u044B\n        ctx.beginPath();\n        ctx.moveTo(20, 110);\n        ctx.lineTo(70, 110);\n        ctx.lineTo(70, 170);\n        ctx.lineTo(50, 170);\n        ctx.lineTo(50, 130);\n        ctx.lineTo(40, 130);\n        ctx.lineTo(40, 170);\n        ctx.lineTo(20, 170);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.fill();\n\n        // \u0420\u0438\u0441\u0443\u0435\u043C \u0440\u0443\u043A\u0438\n        ctx.beginPath();\n        ctx.strokeStyle = \'#0f0105\';\n        ctx.fillStyle = \'#0f0105\'\n        ctx.fillRect(0, 66, 90, 13);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.fill();\n\n//\u0440\u0438\u0441\u0443\u0435\u043C \u0442\u0443\u043B\u043E\u0432\u0438\u0449\u0435\n        ctx.strokeStyle = properties.colorTShirt;\n        ctx.fillStyle = properties.colorTShirt;\n        ctx.beginPath();\n        ctx.moveTo(70, 110);\n        ctx.lineTo(20, 110);\n        ctx.lineTo(20, 78);\n        ctx.arc(45, 78, 25.9, getRadians(180), getRadians(360));\n        ctx.stroke(); // *22\n        ctx.fill();\n        ctx.stroke();\n\n//\u0420\u0438\u0441\u0443\u0435\u043C \u0433\u043E\u043B\u043E\u0432\u0443\n        ctx.beginPath();\n        ctx.strokeStyle = \'#d2b48c\';\n        ctx.fillStyle = \'#d2b48c\';\n        ctx.moveTo(39, 52);\n        ctx.lineTo(39, 49);\n        ctx.lineTo(50, 49);\n        ctx.lineTo(50, 52);\n        ctx.stroke();\n        ctx.fill();\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.strokeStyle = \'#d2b48c\';\n        ctx.fillStyle = \'#d2b48c\';\n        ctx.arc(45, 28, 23, getRadians(180), getRadians(360), true)\n        ctx.lineTo(70, 20);\n        ctx.lineTo(21, 20);\n        ctx.lineTo(21, 25);\n        ctx.stroke();\n        ctx.fill();\n        ctx.stroke();\n\n        //\u0440\u0438\u0441\u0443\u0435\u043C \u0440\u043E\u0442\n        ctx.beginPath();\n        ctx.strokeStyle = \'#fffacd\';\n        ctx.fillStyle = \'#0f0f0f\';\n        ctx.lineWidth = 1;\n        ctx.arc(45, 35, 10, getRadians(0), getRadians(180));\n        ctx.stroke();\n        ctx.fill();\n        ctx.stroke();\n\n        // \u0420\u0438\u0441\u0443\u043C \u0433\u043B\u0430\u0437\u0430\n        // \u041B\u0435\u0432\u044B\u0439 \u0433\u043B\u0430\u0437\n        ctx.beginPath();\n        ctx.moveTo(38, 23);\n        ctx.lineWidth = 3;\n        ctx.strokeStyle = \'#ffffff\';//\u0446\u0432\u0435\u0442 \u0433\u043B\u0430\u0437\u043D\u043E\u0433\u043E \u044F\u0431\u043B\u043E\u043A\u0430 \u043B\u0435\u0432\u043E\u0433\u043E\n        ctx.fillStyle = \'#0a0407\';//\u0446\u0432\u0435\u0442 \u0437\u0440\u0430\u0447\u043A\u0430 \u043B\u0435\u0432\u043E\u0433\u043E\n        ctx.arc(35, 23, 4, getRadians(0), getRadians(360));\n\n        //\u041F\u0440\u0430\u0432\u044B\u0439 \u0433\u043B\u0430\u0437\n        ctx.strokeStyle = \'#ffffff\';//\u0446\u0432\u0435\u0442 \u0433\u043B\u0430\u0437\u043D\u043E\u0433\u043E \u044F\u0431\u043B\u043E\u043A\u0430 \u043F\u0440\u0430\u0432\u043E\u0433\u043E\n        ctx.fillStyle = \'#0a0407\';//\u0446\u0432\u0435\u0442 \u0437\u0440\u0430\u0447\u043A\u0430 \u043F\u0440\u0430\u0432\u043E\u0433\u043E\n        ctx.moveTo(57, 23);\n        ctx.arc(55, 23, 4, getRadians(0), getRadians(360));\n        ctx.stroke();\n        ctx.fill();\n        ctx.stroke();\n\n        //\u0420\u0438\u0441\u0443\u0435\u043C \u0432\u043E\u043B\u043E\u0441\u044B\n        ctx.beginPath();\n        ctx.lineWidth = 1;\n        ctx.moveTo(20, 20);\n        ctx.strokeStyle = properties.colorHair;\n        ctx.fillStyle = properties.colorHair;\n        ctx.lineTo(20, 9);\n        ctx.quadraticCurveTo(45, -8, 70, 9);\n        ctx.lineTo(70, 20);\n        ctx.stroke();\n        ctx.fill();\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.strokeStyle = \'#100550\';\n        ctx.fillStyle = \'#100550\';\n        ctx.font = "14px Georgia";\n        ctx.textAlign = \'center\';\n        ctx.fillText(properties.nameChar, 45, 190);\n        ctx.closePath();\n\n        //\u0440\u0438\u0441\u0443\u0435\u043C \u0420\u0438\u0441\u0443\u043D\u043E\u043A\n        if (properties.pictureChar == \'true\') {\n            ctx.beginPath();\n            ctx.strokeStyle = \'#70a000\';\n            ctx.fillStyle = \'#70a000\'\n            ctx.fillRect(31, 70, 30, 30);\n            ctx.strokeStyle = \'#fff\';\n            ctx.fillStyle = \'#fff\';\n            ctx.font = "24px Georgia";\n            ctx.textAlign = \'center\';\n\n            ctx.fillText(\'H\', 45, 93);\n            ctx.closePath();\n            ctx.stroke(); // *22\n            ctx.fill();\n        }\n    }\n\n//\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u0432 \u0440\u0430\u0434\u0438\u0430\u043D\u044B\n    function getRadians(degrees) {\n        return (Math.PI / 180) * degrees;\n    }\n\n//\u0424\u0443\u043D\u043A\u0443\u0438\u044F \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0438\u043D\u043F\u0443\u0442\u043E\u0432\n    let noDisply = function (el, elNoDisply, displyValue, elInput) {\n        // var textInput = \'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\';\n        var elForm = document.querySelector(elNoDisply);\n        document.querySelector(el).addEventListener(\'change\', (e) => {\n            elForm.classList.toggle(\'noDisplay\');\n            if (elForm.dataset.input==\'inputName\') return elForm.value=\'\';\n        })\n        // var textInput = \'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\';\n        // var elFormChar = document.querySelector(el);\n        // elFormChar.addEventListener(\'change\', (e) => {\n        //     var colorHareArray = Array.prototype.slice.call(document.querySelectorAll(elNoDisply));\n        //     if (e.target.checked) {\n        //         return colorHareArray.map((i) => {\n        //             i.style.display = displyValue;\n        //         })\n        //     }\n        //     colorHareArray.map((i) => {\n        //         i.style.display = \'none\'\n        //     })\n        //     if (elInput) {\n        //         document.querySelector(elInput).value = textInput;\n        //     }\n        // })\n    }\n\n    noDisply(\'#checkColorPants\', \'#inputColorPants\');\n    noDisply(\'#checkColorHair\', \'#inputColorHair\');\n    noDisply(\'#checkColorT-shirt\', \'#inputColorT-shirt\');\n    noDisply(\'#checkName\', \'#inputName\');\n\n//\u0444\u0443\u043D\u043A\u0446\u0438\u044F \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0432 input\n//     let inputFocusBlur = function (el) {\n//         var elInput = document.querySelector(el);\n//         // elInput.addEventListener(\'focus\', (e) => {\n//         //     if (e.target.value = \'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\') {\n//         //         return e.target.value = \'\';\n//         //     }\n//         // })\n//         // elInput.addEventListener(\'blur\', (e) => {\n//         //     if (e.target.value == \'\') {\n//         //         return e.target.value = \'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\';\n//         //     }\n//         // })\n//         // elInput.addEventListener(\'input\', (e) => {\n//         //\n//         //     if (e.target.classList.contains(\'noDisplay\')) return log(\'ty\');\n//         // })\n//     }\n//     inputFocusBlur(\'.inputName\');\n\n    const Default = {\n\n        constructor: function (nameChar, colorHair, pictureChar, colorPants, colorTShirt) {\n\n            this.nameChar = nameChar,\n                this.colorHair = colorHair,\n                this.pictureChar = pictureChar,\n                this.colorPants = colorPants,\n                this.colorTShirt = colorTShirt\n            return this;\n        },\n        _nameChar: \'Nameless\',\n        _colorHair: \'A3FF58\',\n        _colorPants: \'3028FF\',\n        _colorTShirt: \'FF5F18\',\n        _picture: \'false\',\n        get charDrawing() {\n            canvasChar(this.charInfo)\n        },\n        get charInfo() {\n            var nameChar = this.nameChar != \'\' && this.nameChar != undefined && this.nameChar != \'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\' ? this.nameChar : this._nameChar;\n            var colorHair = this.colorHair != \'\' && this.colorHair != undefined ? (\'#\' + this.colorHair) : (\'#\' + this._colorHair);\n            var colorPants = this.colorPants != \'\' && this.colorPants != undefined ? (\'#\' + this.colorPants) : (\'#\' + this._colorPants);\n            var colorTShirt = this.colorTShirt != \'\' && this.colorTShirt != undefined ? (\'#\' + this.colorTShirt) : (\'#\' + this._colorTShirt);\n            if (this.pictureChar == (\'true\' || \'false\')) {\n                var pictureChar = this.pictureChar;\n            }\n            else {\n                var pictureChar = this._picture;\n            }\n            var charCount = this.count;\n            return {nameChar, colorHair, pictureChar, colorPants, colorTShirt, charCount}\n        },\n        count: 0,\n        id: 0,\n        get iDChar() {\n            ++this.id;\n            return this.id;\n        },\n        get countChar() {\n            ++this.count;\n            return this.count;\n        }\n    }\n    const CharDefault = Object.create(Default);\n    CharDefault.constructor = function (nameChar, colorHair, pictureChar, colorPants, colorTShirt, count) {\n        Default.constructor.apply(this, arguments);\n        this.count = count;\n        return this;\n    };\n\n    const User = {};\n    function addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {\n        var cg = Object.create(CharDefault);\n        User[Default.iDChar] = cg.constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt, Default.countChar);\n        return User;\n    }\n\n    function showChars() {\n        document.getElementsByName(\'formCharacter\')[0].addEventListener(\'submit\', (e) => {\n            let {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = getValue();\n            e.preventDefault();\n            addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt);\n            document.querySelector(\'.showingCharacters\').innerHTML = \'\';\n            for (var i = 1; i <= Default.count; i++) {\n                User[i].charDrawing;\n            }\n\n        })\n    }\n\n    showChars();\n\n//\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u0444\u043E\u0440\u043C\u044B\n    let getValue = function () {\n        var elInput = Array.prototype.slice.call(document.querySelectorAll(\'input\'));\n        var {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = Default;\n\n//\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B \u043B\u0438 \u0447\u0435\u043A\u0431\u043E\u043A\u0441\u044B\n        elInput[0].checked == true ? nameChar = elInput[1].value : nameChar;\n        elInput[2].checked == true ? colorHair = elInput[3].value : colorHair;\n        elInput[4].checked == true ? colorPants = elInput[5].value : colorPants;\n        elInput[6].checked == true ? colorTShirt = elInput[7].value : colorTShirt;\n        elInput[8].checked == true ? pictureChar = \'true\' : pictureChar;\n        var charOnline = Object.create(CharDefault).constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt);\n        return charOnline;\n    }\n\n\n    canvasChar(Default.charInfo, \'#canvasChar\');\n\n    function showCharOnline() {\n        document.querySelector(\'checkIn\');\n        var el = document.querySelector(\'.checkIn\');\n        el.addEventListener(\'change\', (e) => {\n            let charOnline = getValue();\n            canvasChar(charOnline.charInfo, \'#canvasChar\');\n        })\n    }\n\n    showCharOnline();';

var html1003 = '\n<article class="blockC">\n            <div class="characterCheckIn">\n            <section id="character" class="character">\n            <canvas id="canvasChar" class="canvasChar"></canvas>\n            </section>\n\n            <section id="checkIn" class="checkIn">\n            <div class="checkIn__check">\n\n\n            <label for="checkName" class="newCheckbox "><input type="checkbox" name="checkName"\n            class="checkCharacter" id="checkName"\n            form="formCharacter"> <span></span>\n            \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u043C\u044F </label>\n            <input type="text" class="inputName noDisplay" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"  data-input="inputName" id="inputName"  maxlength="11"\n            form="formCharacter">\n            </div>\n            <div class="checkIn__check">\n\n\n            <label for="checkColorHair" class="newCheckbox"><input type="checkbox" name="checkHair"\n            class="checkCharacter"\n            id="checkColorHair"\n            form="formCharacter"> <span></span>\n            \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0432\u043E\u043B\u043E\u0441 </label>\n\n            <input class="jscolor noDisplay" id="inputColorHair" value="">\n            <!--form="formCharacter" value="blond"-->\n            <!--id="colorHairBlond" name="colorHair"><span></span></label><label for="colorHairBlond" class="radio">\u0411\u043B\u043E\u043D\u0434\u0438\u043D <input type="radio" class="colorHair"-->\n            <!--form="formCharacter" value="blond"-->\n            <!--id="colorHairBlond" name="colorHair"><span></span></label>\n            <input class="jscolor" value="">\n            <!--<label for="colorHairBlond" class="radio">\u0411\u043B\u043E\u043D\u0434\u0438\u043D <input type="radio" class="colorHair"-->\n            <!--form="formCharacter" value="blond"-->\n            <!--id="colorHairBlond" name="colorHair"><span></span></label>-->\n            <!--<label for="colorHair\u0410ire" class="radio">\u041E\u0433\u043D\u0435\u043D\u044B\u0439 <input type="radio" class="colorHair"-->\n            <!--form="formCharacter" value="fire"-->\n            <!--id="colorHair\u0410ire" name="colorHair"><span></span></label>-->\n            <!--<label for="colorHairBlanks" class="radio">\u0411\u0440\u044E\u043D\u0435\u0442 <input type="radio" class="colorHair"-->\n            <!--form="formCharacter" value="blanks"-->\n            <!--id="colorHairBlanks" name="colorHair"><span></span></label>-->\n\n\n            </div>\n            <div class="checkIn__check">\n            <label for="checkColorPants" class="newCheckbox"><input type="checkbox" name="checkHair"\n            class="checkCharacter"\n            id="checkColorPants"\n            form="formCharacter"> <span></span>\n            \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0448\u0442\u0430\u043D\u043E\u0432 </label>\n\n            <input class="jscolor noDisplay" id="inputColorPants">\n            </div>\n            <div class="checkIn__check">\n            <label for="checkColorT-shirt" class="newCheckbox"><input type="checkbox" name="checkHair"\n            class="checkCharacter"\n            id="checkColorT-shirt"\n            form="formCharacter">\n            <span></span>\n            \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0438 </label>\n\n            <input class="jscolor noDisplay" id="inputColorT-shirt">\n            </div>\n            <div class="checkIn__check">\n\n\n            <label for="checkPicture" class="newCheckbox"><input type="checkbox" name="checkPicture"\n            class="checkCharacter"\n            id="checkPicture"\n            form="formCharacter"> <span></span>\n            \u0421 \u0440\u0438\u0441\u0443\u043D\u043A\u043E\u043C </label>\n\n            </div>\n\n\n            <form action="#" name="formCharacter" id="formCharacter">\n            <input type="submit" value="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430">\n            </form>\n\n            </section>\n\n            </div>\n            <section id="showingCharacters" class="showingCharacters">\n\n            </section>\n\n            </article>\n            ';

var fun1003 = function fun1003() {
    elWin.innerHTML = html1003;
    // рисуем человечка CharInfoArray-обэкт с описанием, elDom -где рисовать
    function canvasChar(CharInfoArray, elDom) {
        var properties = CharInfoArray;
        if (elDom != undefined) {
            var el = document.querySelector(elDom);
            var ctx = el.getContext('2d');
            el.width = document.querySelector('.character').clientWidth;
            el.height = document.querySelector('.character').clientHeight;
        } else {
            var section, convas, elDivCanvas, Convas, ctx;
            section = document.createElement('section');
            section.classList.add('character');
            convas = document.createElement('canvas');
            convas.classList.add('canvasChar');
            convas.setAttribute('data-char', properties.charCount);
            elDivCanvas = document.querySelector('.showingCharacters');
            elDivCanvas.appendChild(section);
            section.appendChild(convas);
            convas = Array.prototype.slice.call(document.querySelectorAll('canvas'));
            Convas = convas.filter(function (value) {
                return value.dataset.char == properties.charCount;
            });
            ctx = Convas[0].getContext('2d');
            Convas[0].width = document.querySelector('.character').clientWidth;
            Convas[0].height = document.querySelector('.character').clientHeight;
        }

        ctx.lineWidth = .2;
        ctx.strokeStyle = properties.colorPants;
        ctx.fillStyle = properties.colorPants;

        // рисуем штаны
        ctx.beginPath();
        ctx.moveTo(20, 110);
        ctx.lineTo(70, 110);
        ctx.lineTo(70, 170);
        ctx.lineTo(50, 170);
        ctx.lineTo(50, 130);
        ctx.lineTo(40, 130);
        ctx.lineTo(40, 170);
        ctx.lineTo(20, 170);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // Рисуем руки
        ctx.beginPath();
        ctx.strokeStyle = '#0f0105';
        ctx.fillStyle = '#0f0105';
        ctx.fillRect(0, 66, 90, 13);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //рисуем туловище
        ctx.strokeStyle = properties.colorTShirt;
        ctx.fillStyle = properties.colorTShirt;
        ctx.beginPath();
        ctx.moveTo(70, 110);
        ctx.lineTo(20, 110);
        ctx.lineTo(20, 78);
        ctx.arc(45, 78, 25.9, getRadians(180), getRadians(360));
        ctx.stroke(); // *22
        ctx.fill();
        ctx.stroke();

        //Рисуем голову
        ctx.beginPath();
        ctx.strokeStyle = '#d2b48c';
        ctx.fillStyle = '#d2b48c';
        ctx.moveTo(39, 52);
        ctx.lineTo(39, 49);
        ctx.lineTo(50, 49);
        ctx.lineTo(50, 52);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#d2b48c';
        ctx.fillStyle = '#d2b48c';
        ctx.arc(45, 28, 23, getRadians(180), getRadians(360), true);
        ctx.lineTo(70, 20);
        ctx.lineTo(21, 20);
        ctx.lineTo(21, 25);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        //рисуем рот
        ctx.beginPath();
        ctx.strokeStyle = '#fffacd';
        ctx.fillStyle = '#0f0f0f';
        ctx.lineWidth = 1;
        ctx.arc(45, 35, 10, getRadians(0), getRadians(180));
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        // Рисум глаза
        // Левый глаз
        ctx.beginPath();
        ctx.moveTo(38, 23);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ffffff'; //цвет глазного яблока левого
        ctx.fillStyle = '#0a0407'; //цвет зрачка левого
        ctx.arc(35, 23, 4, getRadians(0), getRadians(360));

        //Правый глаз
        ctx.strokeStyle = '#ffffff'; //цвет глазного яблока правого
        ctx.fillStyle = '#0a0407'; //цвет зрачка правого
        ctx.moveTo(57, 23);
        ctx.arc(55, 23, 4, getRadians(0), getRadians(360));
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        //Рисуем волосы
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(20, 20);
        ctx.strokeStyle = properties.colorHair;
        ctx.fillStyle = properties.colorHair;
        ctx.lineTo(20, 9);
        ctx.quadraticCurveTo(45, -8, 70, 9);
        ctx.lineTo(70, 20);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#100550';
        ctx.fillStyle = '#100550';
        ctx.font = "14px Georgia";
        ctx.textAlign = 'center';
        ctx.fillText(properties.nameChar, 45, 190);
        ctx.closePath();

        //рисуем Рисунок
        if (properties.pictureChar == 'true') {
            ctx.beginPath();
            ctx.strokeStyle = '#70a000';
            ctx.fillStyle = '#70a000';
            ctx.fillRect(31, 70, 30, 30);
            ctx.strokeStyle = '#fff';
            ctx.fillStyle = '#fff';
            ctx.font = "24px Georgia";
            ctx.textAlign = 'center';

            ctx.fillText('H', 45, 93);
            ctx.closePath();
            ctx.stroke(); // *22
            ctx.fill();
        }
    }

    //Функция преобразования градусов в радианы
    function getRadians(degrees) {
        return Math.PI / 180 * degrees;
    }

    //Функуия скрытия инпутов
    var noDisply = function noDisply(el, elNoDisply, displyValue, elInput) {
        // var textInput = 'Введите имя';
        var elForm = document.querySelector(elNoDisply);
        document.querySelector(el).addEventListener('change', function (e) {
            elForm.classList.toggle('noDisplay');
            if (elForm.dataset.input == 'inputName') return elForm.value = '';
        });
        // var textInput = 'Введите имя';
        // var elFormChar = document.querySelector(el);
        // elFormChar.addEventListener('change', (e) => {
        //     var colorHareArray = Array.prototype.slice.call(document.querySelectorAll(elNoDisply));
        //     if (e.target.checked) {
        //         return colorHareArray.map((i) => {
        //             i.style.display = displyValue;
        //         })
        //     }
        //     colorHareArray.map((i) => {
        //         i.style.display = 'none'
        //     })
        //     if (elInput) {
        //         document.querySelector(elInput).value = textInput;
        //     }
        // })
    };

    noDisply('#checkColorPants', '#inputColorPants');
    noDisply('#checkColorHair', '#inputColorHair');
    noDisply('#checkColorT-shirt', '#inputColorT-shirt');
    noDisply('#checkName', '#inputName');

    //функция скрытия первоначального текста в input
    //     let inputFocusBlur = function (el) {
    //         var elInput = document.querySelector(el);
    //         // elInput.addEventListener('focus', (e) => {
    //         //     if (e.target.value = 'Введите имя') {
    //         //         return e.target.value = '';
    //         //     }
    //         // })
    //         // elInput.addEventListener('blur', (e) => {
    //         //     if (e.target.value == '') {
    //         //         return e.target.value = 'Введите имя';
    //         //     }
    //         // })
    //         // elInput.addEventListener('input', (e) => {
    //         //
    //         //     if (e.target.classList.contains('noDisplay')) return log('ty');
    //         // })
    //     }
    //     inputFocusBlur('.inputName');

    var Default = {

        constructor: function constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {

            this.nameChar = nameChar, this.colorHair = colorHair, this.pictureChar = pictureChar, this.colorPants = colorPants, this.colorTShirt = colorTShirt;
            return this;
        },
        _nameChar: 'Nameless',
        _colorHair: 'A3FF58',
        _colorPants: '3028FF',
        _colorTShirt: 'FF5F18',
        _picture: 'false',
        get charDrawing() {
            canvasChar(this.charInfo);
        },
        get charInfo() {
            var nameChar = this.nameChar != '' && this.nameChar != undefined && this.nameChar != 'Введите имя' ? this.nameChar : this._nameChar;
            var colorHair = this.colorHair != '' && this.colorHair != undefined ? '#' + this.colorHair : '#' + this._colorHair;
            var colorPants = this.colorPants != '' && this.colorPants != undefined ? '#' + this.colorPants : '#' + this._colorPants;
            var colorTShirt = this.colorTShirt != '' && this.colorTShirt != undefined ? '#' + this.colorTShirt : '#' + this._colorTShirt;
            if (this.pictureChar == ('true' || 'false')) {
                var pictureChar = this.pictureChar;
            } else {
                var pictureChar = this._picture;
            }
            var charCount = this.count;
            return { nameChar: nameChar, colorHair: colorHair, pictureChar: pictureChar, colorPants: colorPants, colorTShirt: colorTShirt, charCount: charCount };
        },
        count: 0,
        id: 0,
        get iDChar() {
            ++this.id;
            return this.id;
        },
        get countChar() {
            ++this.count;
            return this.count;
        }
    };
    var CharDefault = Object.create(Default);
    CharDefault.constructor = function (nameChar, colorHair, pictureChar, colorPants, colorTShirt, count) {
        Default.constructor.apply(this, arguments);
        this.count = count;
        return this;
    };

    var User = {};
    function addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {
        var cg = Object.create(CharDefault);
        User[Default.iDChar] = cg.constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt, Default.countChar);
        return User;
    }

    function showChars() {
        document.getElementsByName('formCharacter')[0].addEventListener('submit', function (e) {
            var _getValue = getValue(),
                nameChar = _getValue.nameChar,
                colorHair = _getValue.colorHair,
                pictureChar = _getValue.pictureChar,
                colorPants = _getValue.colorPants,
                colorTShirt = _getValue.colorTShirt;

            e.preventDefault();
            addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
            document.querySelector('.showingCharacters').innerHTML = '';
            for (var i = 1; i <= Default.count; i++) {
                User[i].charDrawing;
            }
        });
    }

    showChars();

    //Собирает данные с формы
    var getValue = function getValue() {
        var elInput = Array.prototype.slice.call(document.querySelectorAll('input'));
        var nameChar = Default.nameChar,
            colorHair = Default.colorHair,
            pictureChar = Default.pictureChar,
            colorPants = Default.colorPants,
            colorTShirt = Default.colorTShirt;

        //проверяем отмеченны ли чекбоксы

        elInput[0].checked == true ? nameChar = elInput[1].value : nameChar;
        elInput[2].checked == true ? colorHair = elInput[3].value : colorHair;
        elInput[4].checked == true ? colorPants = elInput[5].value : colorPants;
        elInput[6].checked == true ? colorTShirt = elInput[7].value : colorTShirt;
        elInput[8].checked == true ? pictureChar = 'true' : pictureChar;
        var charOnline = Object.create(CharDefault).constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
        return charOnline;
    };

    canvasChar(Default.charInfo, '#canvasChar');

    function showCharOnline() {
        document.querySelector('checkIn');
        var el = document.querySelector('.checkIn');
        el.addEventListener('change', function (e) {
            var charOnline = getValue();
            canvasChar(charOnline.charInfo, '#canvasChar');
        });
    }

    showCharOnline();
};

TextWindows[1003] = new Dz(html1003, js1003, win1003, fun1003);
////// End 10-03


// // рисуем человечка CharInfoArray-обэкт с описанием, elDom -где рисовать
// function canvasChar(CharInfoArray, elDom) {
//     var properties = CharInfoArray;
//     if (elDom != undefined) {
//         var el = document.querySelector(elDom)
//         var ctx = el.getContext('2d');
//         el.width = document.querySelector('.character').clientWidth;
//         el.height = document.querySelector('.character').clientHeight;
//     }
//     else {
//         var section, convas, elDivCanvas, Convas, ctx;
//         section = document.createElement('section');
//         section.classList.add('character');
//         convas = document.createElement('canvas');
//         convas.classList.add('canvasChar');
//         convas.setAttribute('data-char', properties.charCount);
//         elDivCanvas = document.querySelector('.showingCharacters');
//         elDivCanvas.appendChild(section);
//         section.appendChild(convas);
//         convas = Array.prototype.slice.call(document.querySelectorAll('canvas'));
//         Convas = convas.filter(value => value.dataset.char == properties.charCount);
//         ctx = Convas[0].getContext('2d');
//         Convas[0].width = document.querySelector('.character').clientWidth;
//         Convas[0].height = document.querySelector('.character').clientHeight;
//     }
//
//     ctx.lineWidth = .2;
//     ctx.strokeStyle = properties.colorPants;
//     ctx.fillStyle = properties.colorPants;
//
// // рисуем штаны
//     ctx.beginPath();
//     ctx.moveTo(20, 110);
//     ctx.lineTo(70, 110);
//     ctx.lineTo(70, 170);
//     ctx.lineTo(50, 170);
//     ctx.lineTo(50, 130);
//     ctx.lineTo(40, 130);
//     ctx.lineTo(40, 170);
//     ctx.lineTo(20, 170);
//     ctx.closePath();
//     ctx.stroke();
//     ctx.fill();
//
//     // Рисуем руки
//     ctx.beginPath();
//     ctx.strokeStyle = '#0f0105';
//     ctx.fillStyle = '#0f0105'
//     ctx.fillRect(0, 66, 90, 13);
//     ctx.closePath();
//     ctx.stroke();
//     ctx.fill();
//
// //рисуем туловище
//     ctx.strokeStyle = properties.colorTShirt;
//     ctx.fillStyle = properties.colorTShirt;
//     ctx.beginPath();
//     ctx.moveTo(70, 110);
//     ctx.lineTo(20, 110);
//     ctx.lineTo(20, 78);
//     ctx.arc(45, 78, 25.9, getRadians(180), getRadians(360));
//     ctx.stroke(); // *22
//     ctx.fill();
//     ctx.stroke();
//
// //Рисуем голову
//     ctx.beginPath();
//     ctx.strokeStyle = '#d2b48c';
//     ctx.fillStyle = '#d2b48c';
//     ctx.moveTo(39, 52);
//     ctx.lineTo(39, 49);
//     ctx.lineTo(50, 49);
//     ctx.lineTo(50, 52);
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     ctx.beginPath();
//     ctx.strokeStyle = '#d2b48c';
//     ctx.fillStyle = '#d2b48c';
//     ctx.arc(45, 28, 23, getRadians(180), getRadians(360), true)
//     ctx.lineTo(70, 20);
//     ctx.lineTo(21, 20);
//     ctx.lineTo(21, 25);
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     //рисуем рот
//     ctx.beginPath();
//     ctx.strokeStyle = '#fffacd';
//     ctx.fillStyle = '#0f0f0f';
//     ctx.lineWidth = 1;
//     ctx.arc(45, 35, 10, getRadians(0), getRadians(180));
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     // Рисум глаза
//     // Левый глаз
//     ctx.beginPath();
//     ctx.moveTo(38, 23);
//     ctx.lineWidth = 3;
//     ctx.strokeStyle = '#ffffff';//цвет глазного яблока левого
//     ctx.fillStyle = '#0a0407';//цвет зрачка левого
//     ctx.arc(35, 23, 4, getRadians(0), getRadians(360));
//
//     //Правый глаз
//     ctx.strokeStyle = '#ffffff';//цвет глазного яблока правого
//     ctx.fillStyle = '#0a0407';//цвет зрачка правого
//     ctx.moveTo(57, 23);
//     ctx.arc(55, 23, 4, getRadians(0), getRadians(360));
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     //Рисуем волосы
//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.moveTo(20, 20);
//     ctx.strokeStyle = properties.colorHair;
//     ctx.fillStyle = properties.colorHair;
//     ctx.lineTo(20, 9);
//     ctx.quadraticCurveTo(45, -8, 70, 9);
//     ctx.lineTo(70, 20);
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     ctx.beginPath();
//     ctx.strokeStyle = '#100550';
//     ctx.fillStyle = '#100550';
//     ctx.font = "14px Georgia";
//     ctx.textAlign = 'center';
//     ctx.fillText(properties.nameChar, 45, 190);
//     ctx.closePath();
//
//     //рисуем Рисунок
//     if (properties.pictureChar == 'true') {
//         ctx.beginPath();
//         ctx.strokeStyle = '#70a000';
//         ctx.fillStyle = '#70a000'
//         ctx.fillRect(31, 70, 30, 30);
//         ctx.strokeStyle = '#fff';
//         ctx.fillStyle = '#fff';
//         ctx.font = "24px Georgia";
//         ctx.textAlign = 'center';
//
//         ctx.fillText('H', 45, 93);
//         ctx.closePath();
//         ctx.stroke(); // *22
//         ctx.fill();
//     }
// }
//
// //Функция преобразования градусов в радианы
// function getRadians(degrees) {
//     return (Math.PI / 180) * degrees;
// }
//
// //Функуия скрытия инпутов
// let noDisply = function (el, elNoDisply, displyValue, elInput) {
//     var textInput = 'Введите имя';
//     var elFormChar = document.querySelector(el);
//     elFormChar.addEventListener('change', (e) => {
//         var colorHareArray = Array.prototype.slice.call(document.querySelectorAll(elNoDisply));
//         if (e.target.checked) {
//             return colorHareArray.map((i) => {
//                 i.style.display = displyValue;
//             })
//         }
//         colorHareArray.map((i) => {
//             i.style.display = 'none'
//         })
//         if (elInput) {
//             document.querySelector(elInput).value = textInput;
//         }
//     })
// }
//
// noDisply('#checkColorPants', '#inputColorPants', 'flex');
// noDisply('#checkColorHair', '#inputColorHair', 'flex');
// noDisply('#checkColorT-shirt', '#inputColorT-shirt', 'flex');
// noDisply('#checkName', '#inputName', 'flex', '.inputName');
//
// //функция скрытия первоначального текста в input
// let inputFocusBlur = function (el) {
//     var elInput = document.querySelector(el);
//     elInput.addEventListener('focus', (e) => {
//         if (e.target.value = 'Введите имя') {
//             return e.target.value = '';
//         }
//     })
//     elInput.addEventListener('blur', (e) => {
//         if (e.target.value == '') {
//             return e.target.value = 'Введите имя';
//         }
//     })
//     elInput.addEventListener('input', (e) => {
//         if (e.target.style.display == 'none') return e.target.value = 'Введите имя';
//     })
// }
// inputFocusBlur('.inputName');
//
// const Default = {
//
//     constructor: function (nameChar, colorHair, pictureChar, colorPants, colorTShirt) {
//
//         this.nameChar = nameChar,
//             this.colorHair = colorHair,
//             this.pictureChar = pictureChar,
//             this.colorPants = colorPants,
//             this.colorTShirt = colorTShirt
//         return this;
//     },
//     _nameChar: 'Nameless',
//     _colorHair: 'A3FF58',
//     _colorPants: '3028FF',
//     _colorTShirt: 'FF5F18',
//     _picture: 'false',
//     get charDrawing() {
//         canvasChar(this.charInfo)
//     },
//     get charInfo() {
//         var nameChar = this.nameChar != '' && this.nameChar != undefined && this.nameChar != 'Введите имя' ? this.nameChar : this._nameChar;
//         var colorHair = this.colorHair != '' && this.colorHair != undefined ? ('#' + this.colorHair) : ('#' + this._colorHair);
//         var colorPants = this.colorPants != '' && this.colorPants != undefined ? ('#' + this.colorPants) : ('#' + this._colorPants);
//         var colorTShirt = this.colorTShirt != '' && this.colorTShirt != undefined ? ('#' + this.colorTShirt) : ('#' + this._colorTShirt);
//         if (this.pictureChar == ('true' || 'false')) {
//             var pictureChar = this.pictureChar;
//         }
//         else {
//             var pictureChar = this._picture;
//         }
//         var charCount = this.count;
//         return {nameChar, colorHair, pictureChar, colorPants, colorTShirt, charCount}
//     },
//     count: 0,
//     id: 0,
//     get iDChar() {
//         ++this.id;
//         return this.id;
//     },
//     get countChar() {
//         ++this.count;
//         return this.count;
//     }
// }
// const CharDefault = Object.create(Default);
// CharDefault.constructor = function (nameChar, colorHair, pictureChar, colorPants, colorTShirt, count) {
//     Default.constructor.apply(this, arguments);
//     this.count = count;
//     return this;
// };
//
// const User = {};
// function addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {
//     var cg = Object.create(CharDefault);
//     User[Default.iDChar] = cg.constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt, Default.countChar);
//     return User;
// }
//
// function showChars() {
//     document.getElementsByName('formCharacter')[0].addEventListener('submit', (e) => {
//         let {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = getValue();
//         e.preventDefault();
//         addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
//         document.querySelector('.showingCharacters').innerHTML = '';
//         for (var i = 1; i <= Default.count; i++) {
//             User[i].charDrawing;
//                     }
//
//     })
// }
//
// showChars();
//
// //Собирает данные с формы
// let getValue = function () {
//     var elInput = Array.prototype.slice.call(document.querySelectorAll('input'));
//     var {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = Default;
//
// //проверяем отмеченны ли чекбоксы
//     elInput[0].checked == true ? nameChar = elInput[1].value : nameChar;
//     elInput[2].checked == true ? colorHair = elInput[3].value : colorHair;
//     elInput[4].checked == true ? colorPants = elInput[5].value : colorPants;
//     elInput[6].checked == true ? colorTShirt = elInput[7].value : colorTShirt;
//     elInput[8].checked == true ? pictureChar = 'true' : pictureChar;
//     var charOnline = Object.create(CharDefault).constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
//     return charOnline;
// }
//
//
// canvasChar(Default.charInfo, '#canvasChar');
//
// function showCharOnline() {
//     document.querySelector('checkIn');
//     var el = document.querySelector('.checkIn');
//     el.addEventListener('change', (e) => {
//         let charOnline = getValue();
//         canvasChar(charOnline.charInfo, '#canvasChar');
//     })
// }
//
// showCharOnline();


///// Begin 11-02
var win1102 = '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u0438 (\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u043A\u043E\u0440\u043E\u0447\u0435):<br>\nconst getInitials = ...;<br>\nconsole.log(getInitials({ firstName: "Andy", lastName: "Davidson" })); // A.D.<br>\nconsole.log(getInitials({ firstName: "Andy" })); // A.<br>\nconsole.log(getInitials({ lastName: "Davidson" })); // D.<br>\n\n// ---<br>\nconst doubleArray = ...;<br>\n\nconsole.log(doubleArray([1, 2, 3])); // [1, 2, 3, 1, 2, 3]<br>\nconsole.log(doubleArray([{ one: 1, two: 2 }])); // [{ one: 1, two: 2 }, { one: 1, two: 2 }]<br>\n\n// ---<br>\nconst merge = ...<br>\n\nconsole.log(merge({ one: 1, two: 2 }, { two: 22, three: 3 })); // { one: 1, two: 22, three: 3 }<br>';

var js1102 = 'const doubleArray=function (a) {\n    return  [...a,...a]\n}\nconst merge = function (a) {\n\n    var result=new Object(),i=0;\n    while(arguments[i]){\n        Object.assign(result,arguments[i])\n        i++;\n    }\n    return result\n}\nconst getInitials=function ({firstName, lastName}={}) {\n    return ${firstName ? (firstName[0].toUpperCase() + \'.\') : \'\'}${lastName ? (lastName[0].toUpperCase() + \'.\') : \'\'};\n}';

var html1102 = '';

var fun1102 = function fun1102() {
    elWin.innerHTML = '';
    var doubleArray = function doubleArray(a) {
        return [].concat(_toConsumableArray(a), _toConsumableArray(a));
    };
    var merge = function merge(a) {

        var result = new Object(),
            i = 0;
        while (arguments[i]) {
            Object.assign(result, arguments[i]);
            i++;
        }
        return result;
    };
    var getInitials = function getInitials() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            firstName = _ref.firstName,
            lastName = _ref.lastName;

        return '' + (firstName ? firstName[0].toUpperCase() + '.' : '') + (lastName ? lastName[0].toUpperCase() + '.' : '');
    };
};

TextWindows[1102] = new Dz(html1102, js1102, win1102, fun1102);
////// End 11-02


///// Begin 12-01
var win1201 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \u0432 \u0432\u0438\u0434\u0435 \u043F\u043B\u044E\u0441\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u044C \u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B (\u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E).<br>\n\n\u041F\u043E\u0434 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u044B \u043D\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C\u0441\u044F \u0434\u0432\u0430 \u0441\u043F\u0438\u0441\u043A\u0430:<br>\n- \u0432 \u043B\u0435\u0432\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0443\u0436\u043D\u043E \u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438<br>\n- \u0432 \u043F\u0440\u0430\u0432\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0443\u0436\u043D\u043E \u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438<br>\n- \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u043E \u0438\u043C\u0435\u043D\u0430 \u0444\u0430\u0439\u043B\u043E\u0432 \u0438 \u0438\u0445 \u0440\u0430\u0437\u043C\u0435\u0440<br>\n- \u0440\u0430\u0437\u043C\u0435\u0440 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u043C \u0432\u0438\u0434\u0435 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 5.2 \u041C\u0431 \u0432\u043C\u0435\u0441\u0442\u043E 5292344 \u0431\u0430\u0439\u0442)<br>\n\n\u041A\u0442\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0430\u0442\u044C \u043A\u043B\u0430\u0441\u0441\u043D\u044B\u043C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u043C - \u043C\u043E\u0436\u0435\u0442 \u0442\u0430\u043A\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C:<br>\n- \u043A\u0440\u043E\u043C\u0435 \u0438\u043C\u0435\u043D\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C auto x 30px<br>\n- \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u0440\u043E\u043A \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430<br>\n- \u0432\u044B\u0432\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438, \u0435\u0441\u043B\u0438 \u0431\u044B\u043B \u0432\u044B\u0431\u0440\u0430\u043D \u0444\u0430\u0439\u043B \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u0431\u043E\u043B\u0435\u0435 5 \u041C\u0431 (\u043F\u0440\u044F\u0442\u0430\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0443 - \u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u043B\u044E\u0441\u0430)<br>';

var js1201 = 'document.querySelector(\'.inputImageMultiple\').addEventListener(\'change\',function(e){\n    loadImg(e);\n    })\ndocument.querySelector(\'.inputImageMultiple\').addEventListener(\'drop\',function(e){\n    loadImg(e);\n})\n//Type checking func- tions for type\nfunction testTypeImage(fileType, type) {\n    let arrTypeImage=type.filter(i=>{\n        return i==fileType.type.split(\'/\')[1];//\u0431\u0435\u0440\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0442\u043E\u0440\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u0442\u0438\u043F\u0430\n    })\n    return arrTypeImage.length;\n}\n//Size Checking Funcures\nfunction testSize(testFile, maxSize) {\n    return testFile.size<maxSize?true:false}\n\n    function exchangeByteForMb(byte) {\n        return (byte/(Math.pow(1024,2))).toFixed(2)\n    }\n\n\n// The function of deleting a parent block by its element\nfunction deleteImg(block, blockDeleteClass) {\n    document.querySelector(block).addEventListener(\'click\', (e) => {\nif(e.target.classList.contains(blockDeleteClass)){\n    e.preventDefault();\n    e.target.parentElement.remove();\n}\n        })\n\n}\ndeleteImg(\'.startFlex\',\'deleteImg\');\ndeleteImg(\'.startFlex__column\',\'infoNoImage__info__delete\');\n\n//function for processing the downloaded image\nfunction loadImg(e) {\n    var files=e.target.files;\n    if(files.length){\n        [].forEach.call(files, function (file) {\n            const reader = new FileReader();\n            //\u043F\u0440\u043E\u0432\u0435\u0442\u043A\u0430 \u043D\u0430 \u0442\u0438\u043F \u0437\u0430\u0448\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430 \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\n            exchangeByteForMb(file.size)>5&&console.log(\'55\');\n            if(testTypeImage(file,[\'gif\',\'jpeg\',\'pjpeg\',\'png\'])&&exchangeByteForMb(file.size)<5){\n                reader.onload = function(e) {\n                    var fileData = e.target.result;//base64\n                    var error = e.target.error;\n                    error&&log(\'\u0424\u0430\u0439\u043B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F!\');\n                    var block = \'<div class="blockFlexImgInfo">\n                               <img src="${fileData}" alt="">\n                             <a href="#" class="deleteImg "></a>\n                        <div class="blockFlexImgInfo__name">${file.name.split(\'.\')[0]}</div>\n                        <div class="blockFlexImgInfo__size">${exchangeByteForMb(file.size)} Mb</div>\n                    </div>\';\n                    document.querySelector(\'.blockFlexImg__square\').insertAdjacentHTML(\'afterEnd\', block);\n                };\n                reader.readAsDataURL(file);\n            }\n            else if(testTypeImage(file,[\'gif\',\'jpeg\',\'pjpeg\',\'png\'])){\n                var errorSize=document.createElement(\'div\');\n                errorSize.classList.add(\'errorSizeImg\');\n                errorSize.innerHTML=`Error: ${file.name.split(\'.\')[0]} \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442  \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 5 Mb!`;\n                document.querySelector(\'.errorSizeImgConteiner\').appendChild(errorSize);\n\n                setTimeout( ()=> document.querySelector(\'.errorSizeImg\').remove(),7000);\n\n                log (66666);\n            }\n            else {\n                var blockNoImage=\'<article class="infoNoImage">\n                        <div class="flex">\n                            <pre class="infoNoImage__info-maxSize">${file.name.split(\'.\')[0]}</pre>\n                            <pre class="infoNoImage__info">${file.type.split(\'/\')[1]}</pre>\n                            <pre class="infoNoImage__info">${exchangeByteForMb(file.size)} Mb</pre>\n                        </div>\n                        <pre class="infoNoImage__info__delete ">Delete </pre>\n                    </article>\';\n                document.querySelector(\'.startFlex__column\').insertAdjacentHTML(\'beforeEnd\', blockNoImage);\n            }\n        });\n        \n        e.target.value=\'\';\n    }\n}';

var html1201 = '<section class="block10 positionReletive">\n' + '                <article class="errorSizeImgConteiner">\n' + '                </article>\n' + '\n' + '                <section class="twoBlock10 startFlex">\n' + '                    <div class="blockFlexImg__square">\n' + '                        <input type="file" class="inputImageMultiple" multiple>\n' + '                    </div>\n' + '                </section>\n' + '                <section class="twoBlock10 startFlex__column">\n' + '                </section>\n' + '            </section>';

var fun1201 = function fun1201() {
    elWin.innerHTML = html1201;
    document.querySelector('.inputImageMultiple').addEventListener('change', function (e) {
        loadImg(e);
    });
    document.querySelector('.inputImageMultiple').addEventListener('drop', function (e) {
        loadImg(e);
    });
    //Type checking func- tions for type
    function testTypeImage(fileType, type) {
        var arrTypeImage = type.filter(function (i) {
            return i == fileType.type.split('/')[1]; //берем только вторую часть типа
        });
        return arrTypeImage.length;
    }
    //Size Checking Funcures
    function testSize(testFile, maxSize) {
        return testFile.size < maxSize ? true : false;
    }

    function exchangeByteForMb(byte) {
        return (byte / Math.pow(1024, 2)).toFixed(2);
    }

    // The function of deleting a parent block by its element
    function deleteImg(block, blockDeleteClass) {
        document.querySelector(block).addEventListener('click', function (e) {
            if (e.target.classList.contains(blockDeleteClass)) {
                e.preventDefault();
                e.target.parentElement.remove();
            }
        });
    }
    deleteImg('.startFlex', 'deleteImg');
    deleteImg('.startFlex__column', 'infoNoImage__info__delete');

    //function for processing the downloaded image
    function loadImg(e) {
        var files = e.target.files;
        if (files.length) {
            [].forEach.call(files, function (file) {
                var reader = new FileReader();
                //проветка на тип зашруженного файла и размер
                exchangeByteForMb(file.size) > 5 && console.log('55');
                if (testTypeImage(file, ['gif', 'jpeg', 'pjpeg', 'png']) && exchangeByteForMb(file.size) < 5) {
                    reader.onload = function (e) {
                        var fileData = e.target.result; //base64
                        var error = e.target.error;
                        error && log('Файл не загрузился!');
                        var block = '<div class="blockFlexImgInfo">\n                               <img src="' + fileData + '" alt="">\n                             <a href="#" class="deleteImg "></a>\n                        <div class="blockFlexImgInfo__name">' + file.name.split('.')[0] + '</div>\n                        <div class="blockFlexImgInfo__size">' + exchangeByteForMb(file.size) + ' Mb</div>\n                    </div>';
                        document.querySelector('.blockFlexImg__square').insertAdjacentHTML('afterEnd', block);
                    };
                    reader.readAsDataURL(file);
                } else if (testTypeImage(file, ['gif', 'jpeg', 'pjpeg', 'png'])) {
                    var errorSize = document.createElement('div');
                    errorSize.classList.add('errorSizeImg');
                    errorSize.innerHTML = 'Error: ' + file.name.split('.')[0] + ' \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442  \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 5 Mb!';
                    document.querySelector('.errorSizeImgConteiner').appendChild(errorSize);

                    setTimeout(function () {
                        return document.querySelector('.errorSizeImg').remove();
                    }, 7000);

                    log(66666);
                } else {
                    var blockNoImage = '<article class="infoNoImage">\n                        <div class="flex">\n                            <pre class="infoNoImage__info-maxSize">1. ' + file.name.split('.')[0] + '</pre>\n                            <pre class="infoNoImage__info">' + file.type.split('/')[1] + '</pre>\n                            <pre class="infoNoImage__info">' + exchangeByteForMb(file.size) + ' Mb</pre>\n                        </div>\n                        <pre class="infoNoImage__info__delete ">Delete </pre>\n                    </article>';
                    document.querySelector('.startFlex__column').insertAdjacentHTML('beforeEnd', blockNoImage);
                }
            });

            e.target.value = '';
        }
    }
};

TextWindows[1201] = new Dz(html1201, js1201, win1201, fun1201);
////// End 12-01


log($('ul')).first();
///// Begin 13-01
var win1301 = '- \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u043F\u0440\u0430\u0439\u0442 \u0441\u043E \u0441\u0432\u043E\u0438\u043C\u0438 \u0438\u043A\u043E\u043D\u043A\u0430\u043C\u0438<br>\n- \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0442\u0438\u043B\u0438 \u0434\u043B\u044F \u044D\u0442\u0438\u0445 \u0438\u043A\u043E\u043D\u043E\u043A, \u0447\u0442\u043E\u0431 \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u043F\u043E\u0442\u043E\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043A\u043B\u0430\u0441\u0441<br>\n(\u043F\u0440\u0438\u043C\u0435\u0440, <i class="icon icon-circle"></i>)<br>';

var js1301 = '$iconBackground: #6b96ad;\n' + '$iconSpitit:"../img/icon.png";\n' + '$maxCalum : 9;\n' + '$i: 0;\n' + '$widthBoth: -42.52;\n' + '.icon{\n' + '  background: $iconBackground;\n' + '  background-image: url($iconSpitit);\n' + '  width: 42.52px;\n' + '  height: 42.52px;\n' + '}\n' + '\n' + '@while $maxCalum>0 {\n' + '  .icon-#{$i} {\n' + '    background-position: $widthBoth+px 0px;\n' + '  }\n' + '  .icon-#{$i + 9} {\n' + '    background-position: $widthBoth+px #{-42.52}px;\n' + '  }\n' + '  .icon-#{$i + 18} {\n' + '    background-position: $widthBoth+px #{-85.04}px;\n' + '  }\n' + '  .icon-#{$i + 27} {\n' + '    background-position: $widthBoth+px #{-127.56}px;\n' + '  }\n' + '  .icon-#{$i + 36} {\n' + '    background-position: $widthBoth+px #{-170.08}px;\n' + '  }\n' + '  $maxCalum: $maxCalum - 1;\n' + '  $i: $i + 1;\n' + '  $widthBoth: $widthBoth - 42.52;\n' + '}\n' + '\n';

var html1301 = '<!--div.flex>div.icon.icon-$*36-->\n' + '\n' + '            <div class="flex">\n' + '                <div class="icon icon-1"></div>\n' + '                <div class="icon icon-2"></div>\n' + '                <div class="icon icon-3"></div>\n' + '                <div class="icon icon-4"></div>\n' + '                <div class="icon icon-5"></div>\n' + '                <div class="icon icon-6"></div>\n' + '                <div class="icon icon-7"></div>\n' + '                <div class="icon icon-8"></div>\n' + '                <div class="icon icon-9"></div>\n' + '                <div class="icon icon-10"></div>\n' + '                <div class="icon icon-11"></div>\n' + '                <div class="icon icon-12"></div>\n' + '                <div class="icon icon-13"></div>\n' + '                <div class="icon icon-14"></div>\n' + '                <div class="icon icon-15"></div>\n' + '                <div class="icon icon-16"></div>\n' + '                <div class="icon icon-17"></div>\n' + '                <div class="icon icon-18"></div>\n' + '                <div class="icon icon-19"></div>\n' + '                <div class="icon icon-20"></div>\n' + '                <div class="icon icon-21"></div>\n' + '                <div class="icon icon-22"></div>\n' + '                <div class="icon icon-23"></div>\n' + '                <div class="icon icon-24"></div>\n' + '                <div class="icon icon-25"></div>\n' + '                <div class="icon icon-26"></div>\n' + '                <div class="icon icon-27"></div>\n' + '                <div class="icon icon-28"></div>\n' + '                <div class="icon icon-29"></div>\n' + '                <div class="icon icon-30"></div>\n' + '                <div class="icon icon-31"></div>\n' + '                <div class="icon icon-32"></div>\n' + '                <div class="icon icon-33"></div>\n' + '                <div class="icon icon-34"></div>\n' + '                <div class="icon icon-35"></div>\n' + '                <div class="icon icon-36"></div>\n' + '            </div>';

var fun1301 = function fun1301() {
    elWin.innerHTML = html1301;
};

TextWindows[1301] = new Dz(html1301, js1301, win1301, fun1301);
////// End 13-01


///// Begin 13-02
var win1302 = '- \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C css-\u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0448\u0440\u0438\u0444\u0442\u0430, \u0447\u0442\u043E\u0431 \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u043D\u0435 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u0441\u0442\u0440\u0430\u0448\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E, \u0430 \u043F\u0438\u0441\u0430\u0442\u044C \u0442\u0430\u043A:<br>\n$name = "Proxima Nova"<br>\n$path = "fonts/proxima/"<br>\nfont($name, $path, "Proxima")<br>\nfont($name, $path, "ProximaBold", "bold")<br>\nfont($name, $path, "ProximaBoldItalic", "bold", "italic")<br>';

var js1302 = '// =============================================================================\n// String Replace\n// =============================================================================\n\n@function str-replace($string, $search, $replace: "") {\n  $index: str-index($string, $search);\n\n  @if $index {\n    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\n  }\n\n  @return $string;\n}\n\n// =============================================================================\n// Font Face\n// =============================================================================\n\n@mixin font-face($name, $path, $weight: null, $style: null, $exts: eot woff2 woff ttf svg) {\n  $src: null;\n\n  $extmods: (\n          eot: "?",\n          svg: "#" + str-replace($name, " ", "_")\n  );\n\n  $formats: (\n          otf: "opentype",\n          ttf: "truetype"\n  );\n\n  @each $ext in $exts {\n    $extmod: if(map-has-key($extmods, $ext), $ext + map-get($extmods, $ext), $ext);\n    $format: if(map-has-key($formats, $ext), map-get($formats, $ext), $ext);\n    $src: append($src, url(quote($path + "." + $extmod)) format(quote($format)), comma);\n  }\n\n  @font-face {\n    font-family: quote($name);\n    font-style: $style;\n    font-weight: $weight;\n    src: $src;\n  }\n}';

var html1302 = '';

var fun1302 = function fun1302() {
    elWin.innerHTML = '';
};

TextWindows[1302] = new Dz(html1302, js1302, win1302, fun1302);
////// End 13-02