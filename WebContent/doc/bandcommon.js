 /*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
(function(a2, aF) {
    var ah, w, aB = typeof aF, aK = a2.location, l = a2.document, bW = l.documentElement, bi = a2.jQuery, H = a2.$, Z = {}, a6 = [], s = "1.10.2", aH = a6.concat, an = a6.push, a4 = a6.slice, aL = a6.indexOf, y = Z.toString, U = Z.hasOwnProperty, aP = s.trim, bJ = function(e, b4) {
        return new bJ.fn.init(e, b4, w)
    }, bA = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ab = /\S+/g, B = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, br = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, a = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, bh = /^[\],:{}\s]*$/, bk = /(?:^|:|,)(?:\s*\[)+/g, bG = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, aY = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, bS = /^-ms-/, aU = /-([\da-z])/gi, L = function(e, b4) {
        return b4.toUpperCase()
    }, bX = function(e) {
        if (l.addEventListener || e.type === "load" || l.readyState === "complete") {
            bl();
            bJ.ready()
        }
    }, bl = function() {
        if (l.addEventListener) {
            l.removeEventListener("DOMContentLoaded", bX, false);
            a2.removeEventListener("load", bX, false)
        } else {
            l.detachEvent("onreadystatechange", bX);
            a2.detachEvent("onload", bX)
        }
    };
    bJ.fn = bJ.prototype = {jquery: s,constructor: bJ,init: function(e, b6, b5) {
            var b4, b7;
            if (!e) {
                return this
            }
            if (typeof e === "string") {
                if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                    b4 = [null, e, null]
                } else {
                    b4 = br.exec(e)
                }
                if (b4 && (b4[1] || !b6)) {
                    if (b4[1]) {
                        b6 = b6 instanceof bJ ? b6[0] : b6;
                        bJ.merge(this, bJ.parseHTML(b4[1], b6 && b6.nodeType ? b6.ownerDocument || b6 : l, true));
                        if (a.test(b4[1]) && bJ.isPlainObject(b6)) {
                            for (b4 in b6) {
                                if (bJ.isFunction(this[b4])) {
                                    this[b4](b6[b4])
                                } else {
                                    this.attr(b4, b6[b4])
                                }
                            }
                        }
                        return this
                    } else {
                        b7 = l.getElementById(b4[2]);
                        if (b7 && b7.parentNode) {
                            if (b7.id !== b4[2]) {
                                return b5.find(e)
                            }
                            this.length = 1;
                            this[0] = b7
                        }
                        this.context = l;
                        this.selector = e;
                        return this
                    }
                } else {
                    if (!b6 || b6.jquery) {
                        return (b6 || b5).find(e)
                    } else {
                        return this.constructor(b6).find(e)
                    }
                }
            } else {
                if (e.nodeType) {
                    this.context = this[0] = e;
                    this.length = 1;
                    return this
                } else {
                    if (bJ.isFunction(e)) {
                        return b5.ready(e)
                    }
                }
            }
            if (e.selector !== aF) {
                this.selector = e.selector;
                this.context = e.context
            }
            return bJ.makeArray(e, this)
        },selector: "",length: 0,toArray: function() {
            return a4.call(this)
        },get: function(e) {
            return e == null ? this.toArray() : (e < 0 ? this[this.length + e] : this[e])
        },pushStack: function(e) {
            var b4 = bJ.merge(this.constructor(), e);
            b4.prevObject = this;
            b4.context = this.context;
            return b4
        },each: function(b4, e) {
            return bJ.each(this, b4, e)
        },ready: function(e) {
            bJ.ready.promise().done(e);
            return this
        },slice: function() {
            return this.pushStack(a4.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(b5) {
            var e = this.length, b4 = +b5 + (b5 < 0 ? e : 0);
            return this.pushStack(b4 >= 0 && b4 < e ? [this[b4]] : [])
        },map: function(e) {
            return this.pushStack(bJ.map(this, function(b5, b4) {
                return e.call(b5, b4, b5)
            }))
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: an,sort: [].sort,splice: [].splice};
    bJ.fn.init.prototype = bJ.fn;
    bJ.extend = bJ.fn.extend = function() {
        var e, b9, b4, b5, cc, ca, b8 = arguments[0] || {}, b7 = 1, b6 = arguments.length, cb = false;
        if (typeof b8 === "boolean") {
            cb = b8;
            b8 = arguments[1] || {};
            b7 = 2
        }
        if (typeof b8 !== "object" && !bJ.isFunction(b8)) {
            b8 = {}
        }
        if (b6 === b7) {
            b8 = this;
            --b7
        }
        for (; b7 < b6; b7++) {
            if ((cc = arguments[b7]) != null) {
                for (b5 in cc) {
                    e = b8[b5];
                    b4 = cc[b5];
                    if (b8 === b4) {
                        continue
                    }
                    if (cb && b4 && (bJ.isPlainObject(b4) || (b9 = bJ.isArray(b4)))) {
                        if (b9) {
                            b9 = false;
                            ca = e && bJ.isArray(e) ? e : []
                        } else {
                            ca = e && bJ.isPlainObject(e) ? e : {}
                        }
                        b8[b5] = bJ.extend(cb, ca, b4)
                    } else {
                        if (b4 !== aF) {
                            b8[b5] = b4
                        }
                    }
                }
            }
        }
        return b8
    };
    bJ.extend({expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),noConflict: function(e) {
            if (a2.$ === bJ) {
                a2.$ = H
            }
            if (e && a2.jQuery === bJ) {
                a2.jQuery = bi
            }
            return bJ
        },isReady: false,readyWait: 1,holdReady: function(e) {
            if (e) {
                bJ.readyWait++
            } else {
                bJ.ready(true)
            }
        },ready: function(e) {
            if (e === true ? --bJ.readyWait : bJ.isReady) {
                return
            }
            if (!l.body) {
                return setTimeout(bJ.ready)
            }
            bJ.isReady = true;
            if (e !== true && --bJ.readyWait > 0) {
                return
            }
            ah.resolveWith(l, [bJ]);
            if (bJ.fn.trigger) {
                bJ(l).trigger("ready").off("ready")
            }
        },isFunction: function(e) {
            return bJ.type(e) === "function"
        },isArray: Array.isArray || function(e) {
            return bJ.type(e) === "array"
        },isWindow: function(e) {
            return e != null && e == e.window
        },isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },type: function(e) {
            if (e == null) {
                return String(e)
            }
            return typeof e === "object" || typeof e === "function" ? Z[y.call(e)] || "object" : typeof e
        },isPlainObject: function(b6) {
            var b4;
            if (!b6 || bJ.type(b6) !== "object" || b6.nodeType || bJ.isWindow(b6)) {
                return false
            }
            try {
                if (b6.constructor && !U.call(b6, "constructor") && !U.call(b6.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (b5) {
                return false
            }
            if (bJ.support.ownLast) {
                for (b4 in b6) {
                    return U.call(b6, b4)
                }
            }
            for (b4 in b6) {
            }
            return b4 === aF || U.call(b6, b4)
        },isEmptyObject: function(b4) {
            var e;
            for (e in b4) {
                return false
            }
            return true
        },error: function(e) {
            throw new Error(e)
        },parseHTML: function(b7, b5, b6) {
            if (!b7 || typeof b7 !== "string") {
                return null
            }
            if (typeof b5 === "boolean") {
                b6 = b5;
                b5 = false
            }
            b5 = b5 || l;
            var b4 = a.exec(b7), e = !b6 && [];
            if (b4) {
                return [b5.createElement(b4[1])]
            }
            b4 = bJ.buildFragment([b7], b5, e);
            if (e) {
                bJ(e).remove()
            }
            return bJ.merge([], b4.childNodes)
        },parseJSON: function(e) {
            if (a2.JSON && a2.JSON.parse) {
                return a2.JSON.parse(e)
            }
            if (e === null) {
                return e
            }
            if (typeof e === "string") {
                e = bJ.trim(e);
                if (e) {
                    if (bh.test(e.replace(bG, "@").replace(aY, "]").replace(bk, ""))) {
                        return (new Function("return " + e))()
                    }
                }
            }
            bJ.error("Invalid JSON: " + e)
        },parseXML: function(b6) {
            var b4, b5;
            if (!b6 || typeof b6 !== "string") {
                return null
            }
            try {
                if (a2.DOMParser) {
                    b5 = new DOMParser();
                    b4 = b5.parseFromString(b6, "text/xml")
                } else {
                    b4 = new ActiveXObject("Microsoft.XMLDOM");
                    b4.async = "false";
                    b4.loadXML(b6)
                }
            } catch (b7) {
                b4 = aF
            }
            if (!b4 || !b4.documentElement || b4.getElementsByTagName("parsererror").length) {
                bJ.error("Invalid XML: " + b6)
            }
            return b4
        },noop: function() {
        },globalEval: function(e) {
            if (e && bJ.trim(e)) {
                (a2.execScript || function(b4) {
                    a2["eval"].call(a2, b4)
                })(e)
            }
        },camelCase: function(e) {
            return e.replace(bS, "ms-").replace(aU, L)
        },nodeName: function(b4, e) {
            return b4.nodeName && b4.nodeName.toLowerCase() === e.toLowerCase()
        },each: function(b8, b9, b4) {
            var b7, b5 = 0, b6 = b8.length, e = aa(b8);
            if (b4) {
                if (e) {
                    for (; b5 < b6; b5++) {
                        b7 = b9.apply(b8[b5], b4);
                        if (b7 === false) {
                            break
                        }
                    }
                } else {
                    for (b5 in b8) {
                        b7 = b9.apply(b8[b5], b4);
                        if (b7 === false) {
                            break
                        }
                    }
                }
            } else {
                if (e) {
                    for (; b5 < b6; b5++) {
                        b7 = b9.call(b8[b5], b5, b8[b5]);
                        if (b7 === false) {
                            break
                        }
                    }
                } else {
                    for (b5 in b8) {
                        b7 = b9.call(b8[b5], b5, b8[b5]);
                        if (b7 === false) {
                            break
                        }
                    }
                }
            }
            return b8
        },trim: aP && !aP.call("\uFEFF\xA0") ? function(e) {
            return e == null ? "" : aP.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(B, "")
        },makeArray: function(e, b5) {
            var b4 = b5 || [];
            if (e != null) {
                if (aa(Object(e))) {
                    bJ.merge(b4, typeof e === "string" ? [e] : e)
                } else {
                    an.call(b4, e)
                }
            }
            return b4
        },inArray: function(b6, b4, b5) {
            var e;
            if (b4) {
                if (aL) {
                    return aL.call(b4, b6, b5)
                }
                e = b4.length;
                b5 = b5 ? b5 < 0 ? Math.max(0, e + b5) : b5 : 0;
                for (; b5 < e; b5++) {
                    if (b5 in b4 && b4[b5] === b6) {
                        return b5
                    }
                }
            }
            return -1
        },merge: function(b7, b5) {
            var e = b5.length, b6 = b7.length, b4 = 0;
            if (typeof e === "number") {
                for (; b4 < e; b4++) {
                    b7[b6++] = b5[b4]
                }
            } else {
                while (b5[b4] !== aF) {
                    b7[b6++] = b5[b4++]
                }
            }
            b7.length = b6;
            return b7
        },grep: function(b4, b9, e) {
            var b8, b5 = [], b6 = 0, b7 = b4.length;
            e = !!e;
            for (; b6 < b7; b6++) {
                b8 = !!b9(b4[b6], b6);
                if (e !== b8) {
                    b5.push(b4[b6])
                }
            }
            return b5
        },map: function(b5, ca, e) {
            var b9, b7 = 0, b8 = b5.length, b4 = aa(b5), b6 = [];
            if (b4) {
                for (; b7 < b8; b7++) {
                    b9 = ca(b5[b7], b7, e);
                    if (b9 != null) {
                        b6[b6.length] = b9
                    }
                }
            } else {
                for (b7 in b5) {
                    b9 = ca(b5[b7], b7, e);
                    if (b9 != null) {
                        b6[b6.length] = b9
                    }
                }
            }
            return aH.apply([], b6)
        },guid: 1,proxy: function(b7, b6) {
            var e, b5, b4;
            if (typeof b6 === "string") {
                b4 = b7[b6];
                b6 = b7;
                b7 = b4
            }
            if (!bJ.isFunction(b7)) {
                return aF
            }
            e = a4.call(arguments, 2);
            b5 = function() {
                return b7.apply(b6 || this, e.concat(a4.call(arguments)))
            };
            b5.guid = b7.guid = b7.guid || bJ.guid++;
            return b5
        },access: function(e, b8, ca, b9, b6, cc, cb) {
            var b5 = 0, b4 = e.length, b7 = ca == null;
            if (bJ.type(ca) === "object") {
                b6 = true;
                for (b5 in ca) {
                    bJ.access(e, b8, b5, ca[b5], true, cc, cb)
                }
            } else {
                if (b9 !== aF) {
                    b6 = true;
                    if (!bJ.isFunction(b9)) {
                        cb = true
                    }
                    if (b7) {
                        if (cb) {
                            b8.call(e, b9);
                            b8 = null
                        } else {
                            b7 = b8;
                            b8 = function(ce, cd, cf) {
                                return b7.call(bJ(ce), cf)
                            }
                        }
                    }
                    if (b8) {
                        for (; b5 < b4; b5++) {
                            b8(e[b5], ca, cb ? b9 : b9.call(e[b5], b5, b8(e[b5], ca)))
                        }
                    }
                }
            }
            return b6 ? e : b7 ? b8.call(e) : b4 ? b8(e[0], ca) : cc
        },now: function() {
            return (new Date()).getTime()
        },swap: function(b8, b7, b9, b6) {
            var b5, b4, e = {};
            for (b4 in b7) {
                e[b4] = b8.style[b4];
                b8.style[b4] = b7[b4]
            }
            b5 = b9.apply(b8, b6 || []);
            for (b4 in b7) {
                b8.style[b4] = e[b4]
            }
            return b5
        }});
    bJ.ready.promise = function(b7) {
        if (!ah) {
            ah = bJ.Deferred();
            if (l.readyState === "complete") {
                setTimeout(bJ.ready)
            } else {
                if (l.addEventListener) {
                    l.addEventListener("DOMContentLoaded", bX, false);
                    a2.addEventListener("load", bX, false)
                } else {
                    l.attachEvent("onreadystatechange", bX);
                    a2.attachEvent("onload", bX);
                    var b6 = false;
                    try {
                        b6 = a2.frameElement == null && l.documentElement
                    } catch (b5) {
                    }
                    if (b6 && b6.doScroll) {
                        (function b4() {
                            if (!bJ.isReady) {
                                try {
                                    b6.doScroll("left")
                                } catch (b8) {
                                    return setTimeout(b4, 50)
                                }
                                bl();
                                bJ.ready()
                            }
                        })()
                    }
                }
            }
        }
        return ah.promise(b7)
    };
    bJ.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(b4, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    function aa(b5) {
        var b4 = b5.length, e = bJ.type(b5);
        if (bJ.isWindow(b5)) {
            return false
        }
        if (b5.nodeType === 1 && b4) {
            return true
        }
        return e === "array" || e !== "function" && (b4 === 0 || typeof b4 === "number" && b4 > 0 && (b4 - 1) in b5)
    }
    w = bJ(l);
    /*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */
    (function(dd, ci) {
        var cx, dg, cd, cn, cG, cJ, cU, dk, cH, cX, cB, co, c6, c1, de, cc, cE, c8 = "sizzle" + -(new Date()), cI = dd.document, dh = 0, c2 = 0, b7 = cz(), c7 = cz(), cF = cz(), cV = false, cD = function(dl, e) {
            if (dl === e) {
                cV = true;
                return 0
            }
            return 0
        }, dc = typeof ci, cP = 1 << 31, cN = ({}).hasOwnProperty, da = [], db = da.pop, cL = da.push, b5 = da.push, cm = da.slice, cb = da.indexOf || function(dm) {
            var dl = 0, e = this.length;
            for (; dl < e; dl++) {
                if (this[dl] === dm) {
                    return dl
                }
            }
            return -1
        }, b6 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cp = "[\\x20\\t\\r\\n\\f]", b4 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", cK = b4.replace("w", "w#"), c4 = "\\[" + cp + "*(" + b4 + ")" + cp + "*(?:([*^$|!~]?=)" + cp + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cK + ")|)|)" + cp + "*\\]", ck = ":(" + b4 + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + c4.replace(3, 8) + ")*)|.*)\\)|)", cr = new RegExp("^" + cp + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cp + "+$", "g"), cu = new RegExp("^" + cp + "*," + cp + "*"), cA = new RegExp("^" + cp + "*([>+~]|" + cp + ")" + cp + "*"), cZ = new RegExp(cp + "*[+~]"), ct = new RegExp("=" + cp + "*([^\\]'\"]*)" + cp + "*\\]", "g"), cR = new RegExp(ck), cS = new RegExp("^" + cK + "$"), c0 = {ID: new RegExp("^#(" + b4 + ")"),CLASS: new RegExp("^\\.(" + b4 + ")"),TAG: new RegExp("^(" + b4.replace("w", "w*") + ")"),ATTR: new RegExp("^" + c4),PSEUDO: new RegExp("^" + ck),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cp + "*(even|odd|(([+-]|)(\\d*)n|)" + cp + "*(?:([+-]|)" + cp + "*(\\d+)|))" + cp + "*\\)|)", "i"),bool: new RegExp("^(?:" + b6 + ")$", "i"),needsContext: new RegExp("^" + cp + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cp + "*((?:-\\d)?\\d*)" + cp + "*\\)|)(?=[^-]|$)", "i")}, cO = /^[^{]+\{\s*\[native \w/, cQ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ca = /^(?:input|select|textarea|button)$/i, cl = /^h\d$/i, cM = /'|\\/g, cs = new RegExp("\\\\([\\da-f]{1,6}" + cp + "?|(" + cp + ")|.)", "ig"), c3 = function(e, dn, dl) {
            var dm = "0x" + dn - 65536;
            return dm !== dm || dl ? dn : dm < 0 ? String.fromCharCode(dm + 65536) : String.fromCharCode(dm >> 10 | 55296, dm & 1023 | 56320)
        };
        try {
            b5.apply((da = cm.call(cI.childNodes)), cI.childNodes);
            da[cI.childNodes.length].nodeType
        } catch (cC) {
            b5 = {apply: da.length ? function(dl, e) {
                    cL.apply(dl, cm.call(e))
                } : function(dn, dm) {
                    var e = dn.length, dl = 0;
                    while ((dn[e++] = dm[dl++])) {
                    }
                    dn.length = e - 1
                }}
        }
        function cv(dt, dl, dx, dz) {
            var dy, dq, dr, dv, dw, dp, dn, e, dm, du;
            if ((dl ? dl.ownerDocument || dl : cI) !== cB) {
                cX(dl)
            }
            dl = dl || cB;
            dx = dx || [];
            if (!dt || typeof dt !== "string") {
                return dx
            }
            if ((dv = dl.nodeType) !== 1 && dv !== 9) {
                return []
            }
            if (c6 && !dz) {
                if ((dy = cQ.exec(dt))) {
                    if ((dr = dy[1])) {
                        if (dv === 9) {
                            dq = dl.getElementById(dr);
                            if (dq && dq.parentNode) {
                                if (dq.id === dr) {
                                    dx.push(dq);
                                    return dx
                                }
                            } else {
                                return dx
                            }
                        } else {
                            if (dl.ownerDocument && (dq = dl.ownerDocument.getElementById(dr)) && cE(dl, dq) && dq.id === dr) {
                                dx.push(dq);
                                return dx
                            }
                        }
                    } else {
                        if (dy[2]) {
                            b5.apply(dx, dl.getElementsByTagName(dt));
                            return dx
                        } else {
                            if ((dr = dy[3]) && dg.getElementsByClassName && dl.getElementsByClassName) {
                                b5.apply(dx, dl.getElementsByClassName(dr));
                                return dx
                            }
                        }
                    }
                }
                if (dg.qsa && (!c1 || !c1.test(dt))) {
                    e = dn = c8;
                    dm = dl;
                    du = dv === 9 && dt;
                    if (dv === 1 && dl.nodeName.toLowerCase() !== "object") {
                        dp = cg(dt);
                        if ((dn = dl.getAttribute("id"))) {
                            e = dn.replace(cM, "\\$&")
                        } else {
                            dl.setAttribute("id", e)
                        }
                        e = "[id='" + e + "'] ";
                        dw = dp.length;
                        while (dw--) {
                            dp[dw] = e + ch(dp[dw])
                        }
                        dm = cZ.test(dt) && dl.parentNode || dl;
                        du = dp.join(",")
                    }
                    if (du) {
                        try {
                            b5.apply(dx, dm.querySelectorAll(du));
                            return dx
                        } catch (ds) {
                        }finally {
                            if (!dn) {
                                dl.removeAttribute("id")
                            }
                        }
                    }
                }
            }
            return df(dt.replace(cr, "$1"), dl, dx, dz)
        }
        function cz() {
            var dl = [];
            function e(dm, dn) {
                if (dl.push(dm += " ") > cn.cacheLength) {
                    delete e[dl.shift()]
                }
                return (e[dm] = dn)
            }
            return e
        }
        function cj(e) {
            e[c8] = true;
            return e
        }
        function ce(dl) {
            var dn = cB.createElement("div");
            try {
                return !!dl(dn)
            } catch (dm) {
                return false
            }finally {
                if (dn.parentNode) {
                    dn.parentNode.removeChild(dn)
                }
                dn = null
            }
        }
        function di(dl, dn) {
            var e = dl.split("|"), dm = dl.length;
            while (dm--) {
                cn.attrHandle[e[dm]] = dn
            }
        }
        function b8(dl, e) {
            var dn = e && dl, dm = dn && dl.nodeType === 1 && e.nodeType === 1 && (~e.sourceIndex || cP) - (~dl.sourceIndex || cP);
            if (dm) {
                return dm
            }
            if (dn) {
                while ((dn = dn.nextSibling)) {
                    if (dn === e) {
                        return -1
                    }
                }
            }
            return dl ? 1 : -1
        }
        function cw(e) {
            return function(dm) {
                var dl = dm.nodeName.toLowerCase();
                return dl === "input" && dm.type === e
            }
        }
        function b9(e) {
            return function(dm) {
                var dl = dm.nodeName.toLowerCase();
                return (dl === "input" || dl === "button") && dm.type === e
            }
        }
        function c5(e) {
            return cj(function(dl) {
                dl = +dl;
                return cj(function(dm, dr) {
                    var dp, dn = e([], dm.length, dl), dq = dn.length;
                    while (dq--) {
                        if (dm[(dp = dn[dq])]) {
                            dm[dp] = !(dr[dp] = dm[dp])
                        }
                    }
                })
            })
        }
        cJ = cv.isXML = function(e) {
            var dl = e && (e.ownerDocument || e).documentElement;
            return dl ? dl.nodeName !== "HTML" : false
        };
        dg = cv.support = {};
        cX = cv.setDocument = function(dl) {
            var dm = dl ? dl.ownerDocument || dl : cI, e = dm.defaultView;
            if (dm === cB || dm.nodeType !== 9 || !dm.documentElement) {
                return cB
            }
            cB = dm;
            co = dm.documentElement;
            c6 = !cJ(dm);
            if (e && e.attachEvent && e !== e.top) {
                e.attachEvent("onbeforeunload", function() {
                    cX()
                })
            }
            dg.attributes = ce(function(dn) {
                dn.className = "i";
                return !dn.getAttribute("className")
            });
            dg.getElementsByTagName = ce(function(dn) {
                dn.appendChild(dm.createComment(""));
                return !dn.getElementsByTagName("*").length
            });
            dg.getElementsByClassName = ce(function(dn) {
                dn.innerHTML = "<div class='a'></div><div class='a i'></div>";
                dn.firstChild.className = "i";
                return dn.getElementsByClassName("i").length === 2
            });
            dg.getById = ce(function(dn) {
                co.appendChild(dn).id = c8;
                return !dm.getElementsByName || !dm.getElementsByName(c8).length
            });
            if (dg.getById) {
                cn.find.ID = function(dq, dp) {
                    if (typeof dp.getElementById !== dc && c6) {
                        var dn = dp.getElementById(dq);
                        return dn && dn.parentNode ? [dn] : []
                    }
                };
                cn.filter.ID = function(dp) {
                    var dn = dp.replace(cs, c3);
                    return function(dq) {
                        return dq.getAttribute("id") === dn
                    }
                }
            } else {
                delete cn.find.ID;
                cn.filter.ID = function(dp) {
                    var dn = dp.replace(cs, c3);
                    return function(dr) {
                        var dq = typeof dr.getAttributeNode !== dc && dr.getAttributeNode("id");
                        return dq && dq.value === dn
                    }
                }
            }
            cn.find.TAG = dg.getElementsByTagName ? function(dn, dp) {
                if (typeof dp.getElementsByTagName !== dc) {
                    return dp.getElementsByTagName(dn)
                }
            } : function(dn, ds) {
                var dt, dr = [], dq = 0, dp = ds.getElementsByTagName(dn);
                if (dn === "*") {
                    while ((dt = dp[dq++])) {
                        if (dt.nodeType === 1) {
                            dr.push(dt)
                        }
                    }
                    return dr
                }
                return dp
            };
            cn.find.CLASS = dg.getElementsByClassName && function(dp, dn) {
                if (typeof dn.getElementsByClassName !== dc && c6) {
                    return dn.getElementsByClassName(dp)
                }
            };
            de = [];
            c1 = [];
            if ((dg.qsa = cO.test(dm.querySelectorAll))) {
                ce(function(dn) {
                    dn.innerHTML = "<select><option selected=''></option></select>";
                    if (!dn.querySelectorAll("[selected]").length) {
                        c1.push("\\[" + cp + "*(?:value|" + b6 + ")")
                    }
                    if (!dn.querySelectorAll(":checked").length) {
                        c1.push(":checked")
                    }
                });
                ce(function(dp) {
                    var dn = dm.createElement("input");
                    dn.setAttribute("type", "hidden");
                    dp.appendChild(dn).setAttribute("t", "");
                    if (dp.querySelectorAll("[t^='']").length) {
                        c1.push("[*^$]=" + cp + "*(?:''|\"\")")
                    }
                    if (!dp.querySelectorAll(":enabled").length) {
                        c1.push(":enabled", ":disabled")
                    }
                    dp.querySelectorAll("*,:x");
                    c1.push(",.*:")
                })
            }
            if ((dg.matchesSelector = cO.test((cc = co.webkitMatchesSelector || co.mozMatchesSelector || co.oMatchesSelector || co.msMatchesSelector)))) {
                ce(function(dn) {
                    dg.disconnectedMatch = cc.call(dn, "div");
                    cc.call(dn, "[s!='']:x");
                    de.push("!=", ck)
                })
            }
            c1 = c1.length && new RegExp(c1.join("|"));
            de = de.length && new RegExp(de.join("|"));
            cE = cO.test(co.contains) || co.compareDocumentPosition ? function(dp, dn) {
                var dr = dp.nodeType === 9 ? dp.documentElement : dp, dq = dn && dn.parentNode;
                return dp === dq || !!(dq && dq.nodeType === 1 && (dr.contains ? dr.contains(dq) : dp.compareDocumentPosition && dp.compareDocumentPosition(dq) & 16))
            } : function(dp, dn) {
                if (dn) {
                    while ((dn = dn.parentNode)) {
                        if (dn === dp) {
                            return true
                        }
                    }
                }
                return false
            };
            cD = co.compareDocumentPosition ? function(dp, dn) {
                if (dp === dn) {
                    cV = true;
                    return 0
                }
                var dq = dn.compareDocumentPosition && dp.compareDocumentPosition && dp.compareDocumentPosition(dn);
                if (dq) {
                    if (dq & 1 || (!dg.sortDetached && dn.compareDocumentPosition(dp) === dq)) {
                        if (dp === dm || cE(cI, dp)) {
                            return -1
                        }
                        if (dn === dm || cE(cI, dn)) {
                            return 1
                        }
                        return cH ? (cb.call(cH, dp) - cb.call(cH, dn)) : 0
                    }
                    return dq & 4 ? -1 : 1
                }
                return dp.compareDocumentPosition ? -1 : 1
            } : function(dp, dn) {
                var dv, ds = 0, du = dp.parentNode, dr = dn.parentNode, dq = [dp], dt = [dn];
                if (dp === dn) {
                    cV = true;
                    return 0
                } else {
                    if (!du || !dr) {
                        return dp === dm ? -1 : dn === dm ? 1 : du ? -1 : dr ? 1 : cH ? (cb.call(cH, dp) - cb.call(cH, dn)) : 0
                    } else {
                        if (du === dr) {
                            return b8(dp, dn)
                        }
                    }
                }
                dv = dp;
                while ((dv = dv.parentNode)) {
                    dq.unshift(dv)
                }
                dv = dn;
                while ((dv = dv.parentNode)) {
                    dt.unshift(dv)
                }
                while (dq[ds] === dt[ds]) {
                    ds++
                }
                return ds ? b8(dq[ds], dt[ds]) : dq[ds] === cI ? -1 : dt[ds] === cI ? 1 : 0
            };
            return dm
        };
        cv.matches = function(dl, e) {
            return cv(dl, null, null, e)
        };
        cv.matchesSelector = function(dm, dp) {
            if ((dm.ownerDocument || dm) !== cB) {
                cX(dm)
            }
            dp = dp.replace(ct, "='$1']");
            if (dg.matchesSelector && c6 && (!de || !de.test(dp)) && (!c1 || !c1.test(dp))) {
                try {
                    var dl = cc.call(dm, dp);
                    if (dl || dg.disconnectedMatch || dm.document && dm.document.nodeType !== 11) {
                        return dl
                    }
                } catch (dn) {
                }
            }
            return cv(dp, cB, null, [dm]).length > 0
        };
        cv.contains = function(e, dl) {
            if ((e.ownerDocument || e) !== cB) {
                cX(e)
            }
            return cE(e, dl)
        };
        cv.attr = function(dm, e) {
            if ((dm.ownerDocument || dm) !== cB) {
                cX(dm)
            }
            var dl = cn.attrHandle[e.toLowerCase()], dn = dl && cN.call(cn.attrHandle, e.toLowerCase()) ? dl(dm, e, !c6) : ci;
            return dn === ci ? dg.attributes || !c6 ? dm.getAttribute(e) : (dn = dm.getAttributeNode(e)) && dn.specified ? dn.value : null : dn
        };
        cv.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        cv.uniqueSort = function(dm) {
            var dn, dp = [], e = 0, dl = 0;
            cV = !dg.detectDuplicates;
            cH = !dg.sortStable && dm.slice(0);
            dm.sort(cD);
            if (cV) {
                while ((dn = dm[dl++])) {
                    if (dn === dm[dl]) {
                        e = dp.push(dl)
                    }
                }
                while (e--) {
                    dm.splice(dp[e], 1)
                }
            }
            return dm
        };
        cG = cv.getText = function(dp) {
            var dn, dl = "", dm = 0, e = dp.nodeType;
            if (!e) {
                for (; (dn = dp[dm]); dm++) {
                    dl += cG(dn)
                }
            } else {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof dp.textContent === "string") {
                        return dp.textContent
                    } else {
                        for (dp = dp.firstChild; dp; dp = dp.nextSibling) {
                            dl += cG(dp)
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return dp.nodeValue
                    }
                }
            }
            return dl
        };
        cn = cv.selectors = {cacheLength: 50,createPseudo: cj,match: c0,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: true}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: true},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(e) {
                    e[1] = e[1].replace(cs, c3);
                    e[3] = (e[4] || e[5] || "").replace(cs, c3);
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " "
                    }
                    return e.slice(0, 4)
                },CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) {
                            cv.error(e[0])
                        }
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +((e[7] + e[8]) || e[3] === "odd")
                    } else {
                        if (e[3]) {
                            cv.error(e[0])
                        }
                    }
                    return e
                },PSEUDO: function(dl) {
                    var e, dm = !dl[5] && dl[2];
                    if (c0.CHILD.test(dl[0])) {
                        return null
                    }
                    if (dl[3] && dl[4] !== ci) {
                        dl[2] = dl[4]
                    } else {
                        if (dm && cR.test(dm) && (e = cg(dm, true)) && (e = dm.indexOf(")", dm.length - e) - dm.length)) {
                            dl[0] = dl[0].slice(0, e);
                            dl[2] = dm.slice(0, e)
                        }
                    }
                    return dl.slice(0, 3)
                }},filter: {TAG: function(dl) {
                    var e = dl.replace(cs, c3).toLowerCase();
                    return dl === "*" ? function() {
                        return true
                    } : function(dm) {
                        return dm.nodeName && dm.nodeName.toLowerCase() === e
                    }
                },CLASS: function(e) {
                    var dl = b7[e + " "];
                    return dl || (dl = new RegExp("(^|" + cp + ")" + e + "(" + cp + "|$)")) && b7(e, function(dm) {
                        return dl.test(typeof dm.className === "string" && dm.className || typeof dm.getAttribute !== dc && dm.getAttribute("class") || "")
                    })
                },ATTR: function(dm, dl, e) {
                    return function(dp) {
                        var dn = cv.attr(dp, dm);
                        if (dn == null) {
                            return dl === "!="
                        }
                        if (!dl) {
                            return true
                        }
                        dn += "";
                        return dl === "=" ? dn === e : dl === "!=" ? dn !== e : dl === "^=" ? e && dn.indexOf(e) === 0 : dl === "*=" ? e && dn.indexOf(e) > -1 : dl === "$=" ? e && dn.slice(-e.length) === e : dl === "~=" ? (" " + dn + " ").indexOf(e) > -1 : dl === "|=" ? dn === e || dn.slice(0, e.length + 1) === e + "-" : false
                    }
                },CHILD: function(dl, dp, dn, dq, dm) {
                    var ds = dl.slice(0, 3) !== "nth", e = dl.slice(-4) !== "last", dr = dp === "of-type";
                    return dq === 1 && dm === 0 ? function(dt) {
                        return !!dt.parentNode
                    } : function(dz, dx, dC) {
                        var dt, dF, dA, dE, dB, dw, dy = ds !== e ? "nextSibling" : "previousSibling", dD = dz.parentNode, dv = dr && dz.nodeName.toLowerCase(), du = !dC && !dr;
                        if (dD) {
                            if (ds) {
                                while (dy) {
                                    dA = dz;
                                    while ((dA = dA[dy])) {
                                        if (dr ? dA.nodeName.toLowerCase() === dv : dA.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    dw = dy = dl === "only" && !dw && "nextSibling"
                                }
                                return true
                            }
                            dw = [e ? dD.firstChild : dD.lastChild];
                            if (e && du) {
                                dF = dD[c8] || (dD[c8] = {});
                                dt = dF[dl] || [];
                                dB = dt[0] === dh && dt[1];
                                dE = dt[0] === dh && dt[2];
                                dA = dB && dD.childNodes[dB];
                                while ((dA = ++dB && dA && dA[dy] || (dE = dB = 0) || dw.pop())) {
                                    if (dA.nodeType === 1 && ++dE && dA === dz) {
                                        dF[dl] = [dh, dB, dE];
                                        break
                                    }
                                }
                            } else {
                                if (du && (dt = (dz[c8] || (dz[c8] = {}))[dl]) && dt[0] === dh) {
                                    dE = dt[1]
                                } else {
                                    while ((dA = ++dB && dA && dA[dy] || (dE = dB = 0) || dw.pop())) {
                                        if ((dr ? dA.nodeName.toLowerCase() === dv : dA.nodeType === 1) && ++dE) {
                                            if (du) {
                                                (dA[c8] || (dA[c8] = {}))[dl] = [dh, dE]
                                            }
                                            if (dA === dz) {
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            dE -= dm;
                            return dE === dq || (dE % dq === 0 && dE / dq >= 0)
                        }
                    }
                },PSEUDO: function(dn, dm) {
                    var e, dl = cn.pseudos[dn] || cn.setFilters[dn.toLowerCase()] || cv.error("unsupported pseudo: " + dn);
                    if (dl[c8]) {
                        return dl(dm)
                    }
                    if (dl.length > 1) {
                        e = [dn, dn, "", dm];
                        return cn.setFilters.hasOwnProperty(dn.toLowerCase()) ? cj(function(dr, dt) {
                            var dq, dp = dl(dr, dm), ds = dp.length;
                            while (ds--) {
                                dq = cb.call(dr, dp[ds]);
                                dr[dq] = !(dt[dq] = dp[ds])
                            }
                        }) : function(dp) {
                            return dl(dp, 0, e)
                        }
                    }
                    return dl
                }},pseudos: {not: cj(function(e) {
                    var dl = [], dm = [], dn = cU(e.replace(cr, "$1"));
                    return dn[c8] ? cj(function(dq, dv, dt, dr) {
                        var du, dp = dn(dq, null, dr, []), ds = dq.length;
                        while (ds--) {
                            if ((du = dp[ds])) {
                                dq[ds] = !(dv[ds] = du)
                            }
                        }
                    }) : function(dr, dq, dp) {
                        dl[0] = dr;
                        dn(dl, null, dp, dm);
                        return !dm.pop()
                    }
                }),has: cj(function(e) {
                    return function(dl) {
                        return cv(e, dl).length > 0
                    }
                }),contains: cj(function(e) {
                    return function(dl) {
                        return (dl.textContent || dl.innerText || cG(dl)).indexOf(e) > -1
                    }
                }),lang: cj(function(e) {
                    if (!cS.test(e || "")) {
                        cv.error("unsupported lang: " + e)
                    }
                    e = e.replace(cs, c3).toLowerCase();
                    return function(dm) {
                        var dl;
                        do {
                            if ((dl = c6 ? dm.lang : dm.getAttribute("xml:lang") || dm.getAttribute("lang"))) {
                                dl = dl.toLowerCase();
                                return dl === e || dl.indexOf(e + "-") === 0
                            }
                        } while ((dm = dm.parentNode) && dm.nodeType === 1);
                        return false
                    }
                }),target: function(e) {
                    var dl = dd.location && dd.location.hash;
                    return dl && dl.slice(1) === e.id
                },root: function(e) {
                    return e === co
                },focus: function(e) {
                    return e === cB.activeElement && (!cB.hasFocus || cB.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },enabled: function(e) {
                    return e.disabled === false
                },disabled: function(e) {
                    return e.disabled === true
                },checked: function(e) {
                    var dl = e.nodeName.toLowerCase();
                    return (dl === "input" && !!e.checked) || (dl === "option" && !!e.selected)
                },selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) {
                            return false
                        }
                    }
                    return true
                },parent: function(e) {
                    return !cn.pseudos.empty(e)
                },header: function(e) {
                    return cl.test(e.nodeName)
                },input: function(e) {
                    return ca.test(e.nodeName)
                },button: function(dl) {
                    var e = dl.nodeName.toLowerCase();
                    return e === "input" && dl.type === "button" || e === "button"
                },text: function(dl) {
                    var e;
                    return dl.nodeName.toLowerCase() === "input" && dl.type === "text" && ((e = dl.getAttribute("type")) == null || e.toLowerCase() === dl.type)
                },first: c5(function() {
                    return [0]
                }),last: c5(function(e, dl) {
                    return [dl - 1]
                }),eq: c5(function(e, dm, dl) {
                    return [dl < 0 ? dl + dm : dl]
                }),even: c5(function(e, dm) {
                    var dl = 0;
                    for (; dl < dm; dl += 2) {
                        e.push(dl)
                    }
                    return e
                }),odd: c5(function(e, dm) {
                    var dl = 1;
                    for (; dl < dm; dl += 2) {
                        e.push(dl)
                    }
                    return e
                }),lt: c5(function(e, dn, dm) {
                    var dl = dm < 0 ? dm + dn : dm;
                    for (; --dl >= 0; ) {
                        e.push(dl)
                    }
                    return e
                }),gt: c5(function(e, dn, dm) {
                    var dl = dm < 0 ? dm + dn : dm;
                    for (; ++dl < dn; ) {
                        e.push(dl)
                    }
                    return e
                })}};
        cn.pseudos.nth = cn.pseudos.eq;
        for (cx in {radio: true,checkbox: true,file: true,password: true,image: true}) {
            cn.pseudos[cx] = cw(cx)
        }
        for (cx in {submit: true,reset: true}) {
            cn.pseudos[cx] = b9(cx)
        }
        function cT() {
        }
        cT.prototype = cn.filters = cn.pseudos;
        cn.setFilters = new cT();
        function cg(dp, du) {
            var dl, dq, ds, dt, dr, dm, e, dn = c7[dp + " "];
            if (dn) {
                return du ? 0 : dn.slice(0)
            }
            dr = dp;
            dm = [];
            e = cn.preFilter;
            while (dr) {
                if (!dl || (dq = cu.exec(dr))) {
                    if (dq) {
                        dr = dr.slice(dq[0].length) || dr
                    }
                    dm.push(ds = [])
                }
                dl = false;
                if ((dq = cA.exec(dr))) {
                    dl = dq.shift();
                    ds.push({value: dl,type: dq[0].replace(cr, " ")});
                    dr = dr.slice(dl.length)
                }
                for (dt in cn.filter) {
                    if ((dq = c0[dt].exec(dr)) && (!e[dt] || (dq = e[dt](dq)))) {
                        dl = dq.shift();
                        ds.push({value: dl,type: dt,matches: dq});
                        dr = dr.slice(dl.length)
                    }
                }
                if (!dl) {
                    break
                }
            }
            return du ? dr.length : dr ? cv.error(dp) : c7(dp, dm).slice(0)
        }
        function ch(dn) {
            var dm = 0, dl = dn.length, e = "";
            for (; dm < dl; dm++) {
                e += dn[dm].value
            }
            return e
        }
        function cq(dp, dm, dn) {
            var e = dm.dir, dq = dn && e === "parentNode", dl = c2++;
            return dm.first ? function(dt, ds, dr) {
                while ((dt = dt[e])) {
                    if (dt.nodeType === 1 || dq) {
                        return dp(dt, ds, dr)
                    }
                }
            } : function(dv, dt, ds) {
                var dx, dr, du, dw = dh + " " + dl;
                if (ds) {
                    while ((dv = dv[e])) {
                        if (dv.nodeType === 1 || dq) {
                            if (dp(dv, dt, ds)) {
                                return true
                            }
                        }
                    }
                } else {
                    while ((dv = dv[e])) {
                        if (dv.nodeType === 1 || dq) {
                            du = dv[c8] || (dv[c8] = {});
                            if ((dr = du[e]) && dr[0] === dw) {
                                if ((dx = dr[1]) === true || dx === cd) {
                                    return dx === true
                                }
                            } else {
                                dr = du[e] = [dw];
                                dr[1] = dp(dv, dt, ds) || cd;
                                if (dr[1] === true) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }
        function dj(e) {
            return e.length > 1 ? function(dp, dn, dl) {
                var dm = e.length;
                while (dm--) {
                    if (!e[dm](dp, dn, dl)) {
                        return false
                    }
                }
                return true
            } : e[0]
        }
        function cY(e, dl, dm, dn, dr) {
            var dp, du = [], dq = 0, ds = e.length, dt = dl != null;
            for (; dq < ds; dq++) {
                if ((dp = e[dq])) {
                    if (!dm || dm(dp, dn, dr)) {
                        du.push(dp);
                        if (dt) {
                            dl.push(dq)
                        }
                    }
                }
            }
            return du
        }
        function cf(dm, dl, dp, dn, dq, e) {
            if (dn && !dn[c8]) {
                dn = cf(dn)
            }
            if (dq && !dq[c8]) {
                dq = cf(dq, e)
            }
            return cj(function(dB, dy, dt, dA) {
                var dD, dz, dv, du = [], dC = [], ds = dy.length, dr = dB || cy(dl || "*", dt.nodeType ? [dt] : dt, []), dw = dm && (dB || !dl) ? cY(dr, du, dm, dt, dA) : dr, dx = dp ? dq || (dB ? dm : ds || dn) ? [] : dy : dw;
                if (dp) {
                    dp(dw, dx, dt, dA)
                }
                if (dn) {
                    dD = cY(dx, dC);
                    dn(dD, [], dt, dA);
                    dz = dD.length;
                    while (dz--) {
                        if ((dv = dD[dz])) {
                            dx[dC[dz]] = !(dw[dC[dz]] = dv)
                        }
                    }
                }
                if (dB) {
                    if (dq || dm) {
                        if (dq) {
                            dD = [];
                            dz = dx.length;
                            while (dz--) {
                                if ((dv = dx[dz])) {
                                    dD.push((dw[dz] = dv))
                                }
                            }
                            dq(null, (dx = []), dD, dA)
                        }
                        dz = dx.length;
                        while (dz--) {
                            if ((dv = dx[dz]) && (dD = dq ? cb.call(dB, dv) : du[dz]) > -1) {
                                dB[dD] = !(dy[dD] = dv)
                            }
                        }
                    }
                } else {
                    dx = cY(dx === dy ? dx.splice(ds, dx.length) : dx);
                    if (dq) {
                        dq(null, dy, dx, dA)
                    } else {
                        b5.apply(dy, dx)
                    }
                }
            })
        }
        function c9(dr) {
            var dl, dp, dm, dq = dr.length, du = cn.relative[dr[0].type], dv = du || cn.relative[" "], dn = du ? 1 : 0, ds = cq(function(dw) {
                return dw === dl
            }, dv, true), dt = cq(function(dw) {
                return cb.call(dl, dw) > -1
            }, dv, true), e = [function(dy, dx, dw) {
                    return (!du && (dw || dx !== dk)) || ((dl = dx).nodeType ? ds(dy, dx, dw) : dt(dy, dx, dw))
                }];
            for (; dn < dq; dn++) {
                if ((dp = cn.relative[dr[dn].type])) {
                    e = [cq(dj(e), dp)]
                } else {
                    dp = cn.filter[dr[dn].type].apply(null, dr[dn].matches);
                    if (dp[c8]) {
                        dm = ++dn;
                        for (; dm < dq; dm++) {
                            if (cn.relative[dr[dm].type]) {
                                break
                            }
                        }
                        return cf(dn > 1 && dj(e), dn > 1 && ch(dr.slice(0, dn - 1).concat({value: dr[dn - 2].type === " " ? "*" : ""})).replace(cr, "$1"), dp, dn < dm && c9(dr.slice(dn, dm)), dm < dq && c9((dr = dr.slice(dm))), dm < dq && ch(dr))
                    }
                    e.push(dp)
                }
            }
            return dj(e)
        }
        function cW(dn, dm) {
            var dq = 0, e = dm.length > 0, dp = dn.length > 0, dl = function(dA, du, dz, dy, dG) {
                var dv, dw, dB, dF = [], dE = 0, dx = "0", dr = dA && [], dC = dG != null, dD = dk, dt = dA || dp && cn.find.TAG("*", dG && du.parentNode || du), ds = (dh += dD == null ? 1 : Math.random() || 0.1);
                if (dC) {
                    dk = du !== cB && du;
                    cd = dq
                }
                for (; (dv = dt[dx]) != null; dx++) {
                    if (dp && dv) {
                        dw = 0;
                        while ((dB = dn[dw++])) {
                            if (dB(dv, du, dz)) {
                                dy.push(dv);
                                break
                            }
                        }
                        if (dC) {
                            dh = ds;
                            cd = ++dq
                        }
                    }
                    if (e) {
                        if ((dv = !dB && dv)) {
                            dE--
                        }
                        if (dA) {
                            dr.push(dv)
                        }
                    }
                }
                dE += dx;
                if (e && dx !== dE) {
                    dw = 0;
                    while ((dB = dm[dw++])) {
                        dB(dr, dF, du, dz)
                    }
                    if (dA) {
                        if (dE > 0) {
                            while (dx--) {
                                if (!(dr[dx] || dF[dx])) {
                                    dF[dx] = db.call(dy)
                                }
                            }
                        }
                        dF = cY(dF)
                    }
                    b5.apply(dy, dF);
                    if (dC && !dA && dF.length > 0 && (dE + dm.length) > 1) {
                        cv.uniqueSort(dy)
                    }
                }
                if (dC) {
                    dh = ds;
                    dk = dD
                }
                return dr
            };
            return e ? cj(dl) : dl
        }
        cU = cv.compile = function(e, dq) {
            var dm, dl = [], dp = [], dn = cF[e + " "];
            if (!dn) {
                if (!dq) {
                    dq = cg(e)
                }
                dm = dq.length;
                while (dm--) {
                    dn = c9(dq[dm]);
                    if (dn[c8]) {
                        dl.push(dn)
                    } else {
                        dp.push(dn)
                    }
                }
                dn = cF(e, cW(dp, dl))
            }
            return dn
        };
        function cy(dl, dp, dn) {
            var dm = 0, e = dp.length;
            for (; dm < e; dm++) {
                cv(dl, dp[dm], dn)
            }
            return dn
        }
        function df(dm, e, dn, dr) {
            var dp, dt, dl, du, ds, dq = cg(dm);
            if (!dr) {
                if (dq.length === 1) {
                    dt = dq[0] = dq[0].slice(0);
                    if (dt.length > 2 && (dl = dt[0]).type === "ID" && dg.getById && e.nodeType === 9 && c6 && cn.relative[dt[1].type]) {
                        e = (cn.find.ID(dl.matches[0].replace(cs, c3), e) || [])[0];
                        if (!e) {
                            return dn
                        }
                        dm = dm.slice(dt.shift().value.length)
                    }
                    dp = c0.needsContext.test(dm) ? 0 : dt.length;
                    while (dp--) {
                        dl = dt[dp];
                        if (cn.relative[(du = dl.type)]) {
                            break
                        }
                        if ((ds = cn.find[du])) {
                            if ((dr = ds(dl.matches[0].replace(cs, c3), cZ.test(dt[0].type) && e.parentNode || e))) {
                                dt.splice(dp, 1);
                                dm = dr.length && ch(dt);
                                if (!dm) {
                                    b5.apply(dn, dr);
                                    return dn
                                }
                                break
                            }
                        }
                    }
                }
            }
            cU(dm, dq)(dr, e, !c6, dn, cZ.test(dm));
            return dn
        }
        dg.sortStable = c8.split("").sort(cD).join("") === c8;
        dg.detectDuplicates = cV;
        cX();
        dg.sortDetached = ce(function(e) {
            return e.compareDocumentPosition(cB.createElement("div")) & 1
        });
        if (!ce(function(e) {
            e.innerHTML = "<a href='#'></a>";
            return e.firstChild.getAttribute("href") === "#"
        })) {
            di("type|href|height|width", function(dl, e, dm) {
                if (!dm) {
                    return dl.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2)
                }
            })
        }
        if (!dg.attributes || !ce(function(e) {
            e.innerHTML = "<input/>";
            e.firstChild.setAttribute("value", "");
            return e.firstChild.getAttribute("value") === ""
        })) {
            di("value", function(dl, e, dm) {
                if (!dm && dl.nodeName.toLowerCase() === "input") {
                    return dl.defaultValue
                }
            })
        }
        if (!ce(function(e) {
            return e.getAttribute("disabled") == null
        })) {
            di(b6, function(dl, e, dn) {
                var dm;
                if (!dn) {
                    return (dm = dl.getAttributeNode(e)) && dm.specified ? dm.value : dl[e] === true ? e.toLowerCase() : null
                }
            })
        }
        bJ.find = cv;
        bJ.expr = cv.selectors;
        bJ.expr[":"] = bJ.expr.pseudos;
        bJ.unique = cv.uniqueSort;
        bJ.text = cv.getText;
        bJ.isXMLDoc = cv.isXML;
        bJ.contains = cv.contains
    })(a2);
    var bZ = {};
    function ad(b4) {
        var e = bZ[b4] = {};
        bJ.each(b4.match(ab) || [], function(b6, b5) {
            e[b5] = true
        });
        return e
    }
    bJ.Callbacks = function(cd) {
        cd = typeof cd === "string" ? (bZ[cd] || ad(cd)) : bJ.extend({}, cd);
        var b7, b6, e, b8, b9, b5, ca = [], cb = !cd.once && [], b4 = function(ce) {
            b6 = cd.memory && ce;
            e = true;
            b9 = b5 || 0;
            b5 = 0;
            b8 = ca.length;
            b7 = true;
            for (; ca && b9 < b8; b9++) {
                if (ca[b9].apply(ce[0], ce[1]) === false && cd.stopOnFalse) {
                    b6 = false;
                    break
                }
            }
            b7 = false;
            if (ca) {
                if (cb) {
                    if (cb.length) {
                        b4(cb.shift())
                    }
                } else {
                    if (b6) {
                        ca = []
                    } else {
                        cc.disable()
                    }
                }
            }
        }, cc = {add: function() {
                if (ca) {
                    var cf = ca.length;
                    (function ce(cg) {
                        bJ.each(cg, function(ci, ch) {
                            var cj = bJ.type(ch);
                            if (cj === "function") {
                                if (!cd.unique || !cc.has(ch)) {
                                    ca.push(ch)
                                }
                            } else {
                                if (ch && ch.length && cj !== "string") {
                                    ce(ch)
                                }
                            }
                        })
                    })(arguments);
                    if (b7) {
                        b8 = ca.length
                    } else {
                        if (b6) {
                            b5 = cf;
                            b4(b6)
                        }
                    }
                }
                return this
            },remove: function() {
                if (ca) {
                    bJ.each(arguments, function(cg, ce) {
                        var cf;
                        while ((cf = bJ.inArray(ce, ca, cf)) > -1) {
                            ca.splice(cf, 1);
                            if (b7) {
                                if (cf <= b8) {
                                    b8--
                                }
                                if (cf <= b9) {
                                    b9--
                                }
                            }
                        }
                    })
                }
                return this
            },has: function(ce) {
                return ce ? bJ.inArray(ce, ca) > -1 : !!(ca && ca.length)
            },empty: function() {
                ca = [];
                b8 = 0;
                return this
            },disable: function() {
                ca = cb = b6 = aF;
                return this
            },disabled: function() {
                return !ca
            },lock: function() {
                cb = aF;
                if (!b6) {
                    cc.disable()
                }
                return this
            },locked: function() {
                return !cb
            },fireWith: function(cf, ce) {
                if (ca && (!e || cb)) {
                    ce = ce || [];
                    ce = [cf, ce.slice ? ce.slice() : ce];
                    if (b7) {
                        cb.push(ce)
                    } else {
                        b4(ce)
                    }
                }
                return this
            },fire: function() {
                cc.fireWith(this, arguments);
                return this
            },fired: function() {
                return !!e
            }};
        return cc
    };
    bJ.extend({Deferred: function(b5) {
            var b4 = [["resolve", "done", bJ.Callbacks("once memory"), "resolved"], ["reject", "fail", bJ.Callbacks("once memory"), "rejected"], ["notify", "progress", bJ.Callbacks("memory")]], b6 = "pending", b7 = {state: function() {
                    return b6
                },always: function() {
                    e.done(arguments).fail(arguments);
                    return this
                },then: function() {
                    var b8 = arguments;
                    return bJ.Deferred(function(b9) {
                        bJ.each(b4, function(cb, ca) {
                            var cd = ca[0], cc = bJ.isFunction(b8[cb]) && b8[cb];
                            e[ca[1]](function() {
                                var ce = cc && cc.apply(this, arguments);
                                if (ce && bJ.isFunction(ce.promise)) {
                                    ce.promise().done(b9.resolve).fail(b9.reject).progress(b9.notify)
                                } else {
                                    b9[cd + "With"](this === b7 ? b9.promise() : this, cc ? [ce] : arguments)
                                }
                            })
                        });
                        b8 = null
                    }).promise()
                },promise: function(b8) {
                    return b8 != null ? bJ.extend(b8, b7) : b7
                }}, e = {};
            b7.pipe = b7.then;
            bJ.each(b4, function(b9, b8) {
                var cb = b8[2], ca = b8[3];
                b7[b8[1]] = cb.add;
                if (ca) {
                    cb.add(function() {
                        b6 = ca
                    }, b4[b9 ^ 1][2].disable, b4[2][2].lock)
                }
                e[b8[0]] = function() {
                    e[b8[0] + "With"](this === e ? b7 : this, arguments);
                    return this
                };
                e[b8[0] + "With"] = cb.fireWith
            });
            b7.promise(e);
            if (b5) {
                b5.call(e, e)
            }
            return e
        },when: function(b7) {
            var b5 = 0, b9 = a4.call(arguments), e = b9.length, b4 = e !== 1 || (b7 && bJ.isFunction(b7.promise)) ? e : 0, cc = b4 === 1 ? b7 : bJ.Deferred(), b6 = function(ce, cf, cd) {
                return function(cg) {
                    cf[ce] = this;
                    cd[ce] = arguments.length > 1 ? a4.call(arguments) : cg;
                    if (cd === cb) {
                        cc.notifyWith(cf, cd)
                    } else {
                        if (!(--b4)) {
                            cc.resolveWith(cf, cd)
                        }
                    }
                }
            }, cb, b8, ca;
            if (e > 1) {
                cb = new Array(e);
                b8 = new Array(e);
                ca = new Array(e);
                for (; b5 < e; b5++) {
                    if (b9[b5] && bJ.isFunction(b9[b5].promise)) {
                        b9[b5].promise().done(b6(b5, ca, b9)).fail(cc.reject).progress(b6(b5, b8, cb))
                    } else {
                        --b4
                    }
                }
            }
            if (!b4) {
                cc.resolveWith(ca, b9)
            }
            return cc.promise()
        }});
    bJ.support = (function(cf) {
        var ce, cc, cb, cd, ca, b6, b8, b5, b7, b4 = l.createElement("div");
        b4.setAttribute("className", "t");
        b4.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        ce = b4.getElementsByTagName("*") || [];
        cc = b4.getElementsByTagName("a")[0];
        if (!cc || !cc.style || !ce.length) {
            return cf
        }
        cd = l.createElement("select");
        b6 = cd.appendChild(l.createElement("option"));
        cb = b4.getElementsByTagName("input")[0];
        cc.style.cssText = "top:1px;float:left;opacity:.5";
        cf.getSetAttribute = b4.className !== "t";
        cf.leadingWhitespace = b4.firstChild.nodeType === 3;
        cf.tbody = !b4.getElementsByTagName("tbody").length;
        cf.htmlSerialize = !!b4.getElementsByTagName("link").length;
        cf.style = /top/.test(cc.getAttribute("style"));
        cf.hrefNormalized = cc.getAttribute("href") === "/a";
        cf.opacity = /^0.5/.test(cc.style.opacity);
        cf.cssFloat = !!cc.style.cssFloat;
        cf.checkOn = !!cb.value;
        cf.optSelected = b6.selected;
        cf.enctype = !!l.createElement("form").enctype;
        cf.html5Clone = l.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        cf.inlineBlockNeedsLayout = false;
        cf.shrinkWrapBlocks = false;
        cf.pixelPosition = false;
        cf.deleteExpando = true;
        cf.noCloneEvent = true;
        cf.reliableMarginRight = true;
        cf.boxSizingReliable = true;
        cb.checked = true;
        cf.noCloneChecked = cb.cloneNode(true).checked;
        cd.disabled = true;
        cf.optDisabled = !b6.disabled;
        try {
            delete b4.test
        } catch (b9) {
            cf.deleteExpando = false
        }
        cb = l.createElement("input");
        cb.setAttribute("value", "");
        cf.input = cb.getAttribute("value") === "";
        cb.value = "t";
        cb.setAttribute("type", "radio");
        cf.radioValue = cb.value === "t";
        cb.setAttribute("checked", "t");
        cb.setAttribute("name", "t");
        ca = l.createDocumentFragment();
        ca.appendChild(cb);
        cf.appendChecked = cb.checked;
        cf.checkClone = ca.cloneNode(true).cloneNode(true).lastChild.checked;
        if (b4.attachEvent) {
            b4.attachEvent("onclick", function() {
                cf.noCloneEvent = false
            });
            b4.cloneNode(true).click()
        }
        for (b7 in {submit: true,change: true,focusin: true}) {
            b4.setAttribute(b8 = "on" + b7, "t");
            cf[b7 + "Bubbles"] = b8 in a2 || b4.attributes[b8].expando === false
        }
        b4.style.backgroundClip = "content-box";
        b4.cloneNode(true).style.backgroundClip = "";
        cf.clearCloneStyle = b4.style.backgroundClip === "content-box";
        for (b7 in bJ(cf)) {
            break
        }
        cf.ownLast = b7 !== "0";
        bJ(function() {
            var cg, cj, ci, ch = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", e = l.getElementsByTagName("body")[0];
            if (!e) {
                return
            }
            cg = l.createElement("div");
            cg.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            e.appendChild(cg).appendChild(b4);
            b4.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            ci = b4.getElementsByTagName("td");
            ci[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            b5 = (ci[0].offsetHeight === 0);
            ci[0].style.display = "";
            ci[1].style.display = "none";
            cf.reliableHiddenOffsets = b5 && (ci[0].offsetHeight === 0);
            b4.innerHTML = "";
            b4.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            bJ.swap(e, e.style.zoom != null ? {zoom: 1} : {}, function() {
                cf.boxSizing = b4.offsetWidth === 4
            });
            if (a2.getComputedStyle) {
                cf.pixelPosition = (a2.getComputedStyle(b4, null) || {}).top !== "1%";
                cf.boxSizingReliable = (a2.getComputedStyle(b4, null) || {width: "4px"}).width === "4px";
                cj = b4.appendChild(l.createElement("div"));
                cj.style.cssText = b4.style.cssText = ch;
                cj.style.marginRight = cj.style.width = "0";
                b4.style.width = "1px";
                cf.reliableMarginRight = !parseFloat((a2.getComputedStyle(cj, null) || {}).marginRight)
            }
            if (typeof b4.style.zoom !== aB) {
                b4.innerHTML = "";
                b4.style.cssText = ch + "width:1px;padding:1px;display:inline;zoom:1";
                cf.inlineBlockNeedsLayout = (b4.offsetWidth === 3);
                b4.style.display = "block";
                b4.innerHTML = "<div></div>";
                b4.firstChild.style.width = "5px";
                cf.shrinkWrapBlocks = (b4.offsetWidth !== 3);
                if (cf.inlineBlockNeedsLayout) {
                    e.style.zoom = 1
                }
            }
            e.removeChild(cg);
            cg = b4 = ci = cj = null
        });
        ce = cd = ca = b6 = cc = cb = null;
        return cf
    })({});
    var bw = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, aM = /([A-Z])/g;
    function ba(b6, b4, b8, b7) {
        if (!bJ.acceptData(b6)) {
            return
        }
        var ca, b9, cb = bJ.expando, cc = b6.nodeType, e = cc ? bJ.cache : b6, b5 = cc ? b6[cb] : b6[cb] && cb;
        if ((!b5 || !e[b5] || (!b7 && !e[b5].data)) && b8 === aF && typeof b4 === "string") {
            return
        }
        if (!b5) {
            if (cc) {
                b5 = b6[cb] = a6.pop() || bJ.guid++
            } else {
                b5 = cb
            }
        }
        if (!e[b5]) {
            e[b5] = cc ? {} : {toJSON: bJ.noop}
        }
        if (typeof b4 === "object" || typeof b4 === "function") {
            if (b7) {
                e[b5] = bJ.extend(e[b5], b4)
            } else {
                e[b5].data = bJ.extend(e[b5].data, b4)
            }
        }
        b9 = e[b5];
        if (!b7) {
            if (!b9.data) {
                b9.data = {}
            }
            b9 = b9.data
        }
        if (b8 !== aF) {
            b9[bJ.camelCase(b4)] = b8
        }
        if (typeof b4 === "string") {
            ca = b9[b4];
            if (ca == null) {
                ca = b9[bJ.camelCase(b4)]
            }
        } else {
            ca = b9
        }
        return ca
    }
    function Y(b7, b5, e) {
        if (!bJ.acceptData(b7)) {
            return
        }
        var b9, b6, b8 = b7.nodeType, b4 = b8 ? bJ.cache : b7, ca = b8 ? b7[bJ.expando] : bJ.expando;
        if (!b4[ca]) {
            return
        }
        if (b5) {
            b9 = e ? b4[ca] : b4[ca].data;
            if (b9) {
                if (!bJ.isArray(b5)) {
                    if (b5 in b9) {
                        b5 = [b5]
                    } else {
                        b5 = bJ.camelCase(b5);
                        if (b5 in b9) {
                            b5 = [b5]
                        } else {
                            b5 = b5.split(" ")
                        }
                    }
                } else {
                    b5 = b5.concat(bJ.map(b5, bJ.camelCase))
                }
                b6 = b5.length;
                while (b6--) {
                    delete b9[b5[b6]]
                }
                if (e ? !M(b9) : !bJ.isEmptyObject(b9)) {
                    return
                }
            }
        }
        if (!e) {
            delete b4[ca].data;
            if (!M(b4[ca])) {
                return
            }
        }
        if (b8) {
            bJ.cleanData([b7], true)
        } else {
            if (bJ.support.deleteExpando || b4 != b4.window) {
                delete b4[ca]
            } else {
                b4[ca] = null
            }
        }
    }
    bJ.extend({cache: {},noData: {applet: true,embed: true,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData: function(e) {
            e = e.nodeType ? bJ.cache[e[bJ.expando]] : e[bJ.expando];
            return !!e && !M(e)
        },data: function(b4, e, b5) {
            return ba(b4, e, b5)
        },removeData: function(b4, e) {
            return Y(b4, e)
        },_data: function(b4, e, b5) {
            return ba(b4, e, b5, true)
        },_removeData: function(b4, e) {
            return Y(b4, e, true)
        },acceptData: function(b4) {
            if (b4.nodeType && b4.nodeType !== 1 && b4.nodeType !== 9) {
                return false
            }
            var e = b4.nodeName && bJ.noData[b4.nodeName.toLowerCase()];
            return !e || e !== true && b4.getAttribute("classid") === e
        }});
    bJ.fn.extend({data: function(b6, b9) {
            var b4, e, b8 = null, b5 = 0, b7 = this[0];
            if (b6 === aF) {
                if (this.length) {
                    b8 = bJ.data(b7);
                    if (b7.nodeType === 1 && !bJ._data(b7, "parsedAttrs")) {
                        b4 = b7.attributes;
                        for (; b5 < b4.length; b5++) {
                            e = b4[b5].name;
                            if (e.indexOf("data-") === 0) {
                                e = bJ.camelCase(e.slice(5));
                                by(b7, e, b8[e])
                            }
                        }
                        bJ._data(b7, "parsedAttrs", true)
                    }
                }
                return b8
            }
            if (typeof b6 === "object") {
                return this.each(function() {
                    bJ.data(this, b6)
                })
            }
            return arguments.length > 1 ? this.each(function() {
                bJ.data(this, b6, b9)
            }) : b7 ? by(b7, b6, bJ.data(b7, b6)) : null
        },removeData: function(e) {
            return this.each(function() {
                bJ.removeData(this, e)
            })
        }});
    function by(b6, b5, b7) {
        if (b7 === aF && b6.nodeType === 1) {
            var b4 = "data-" + b5.replace(aM, "-$1").toLowerCase();
            b7 = b6.getAttribute(b4);
            if (typeof b7 === "string") {
                try {
                    b7 = b7 === "true" ? true : b7 === "false" ? false : b7 === "null" ? null : +b7 + "" === b7 ? +b7 : bw.test(b7) ? bJ.parseJSON(b7) : b7
                } catch (b8) {
                }
                bJ.data(b6, b5, b7)
            } else {
                b7 = aF
            }
        }
        return b7
    }
    function M(b4) {
        var e;
        for (e in b4) {
            if (e === "data" && bJ.isEmptyObject(b4[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }
    bJ.extend({queue: function(b5, b4, b6) {
            var e;
            if (b5) {
                b4 = (b4 || "fx") + "queue";
                e = bJ._data(b5, b4);
                if (b6) {
                    if (!e || bJ.isArray(b6)) {
                        e = bJ._data(b5, b4, bJ.makeArray(b6))
                    } else {
                        e.push(b6)
                    }
                }
                return e || []
            }
        },dequeue: function(b8, b7) {
            b7 = b7 || "fx";
            var b4 = bJ.queue(b8, b7), b9 = b4.length, b6 = b4.shift(), e = bJ._queueHooks(b8, b7), b5 = function() {
                bJ.dequeue(b8, b7)
            };
            if (b6 === "inprogress") {
                b6 = b4.shift();
                b9--
            }
            if (b6) {
                if (b7 === "fx") {
                    b4.unshift("inprogress")
                }
                delete e.stop;
                b6.call(b8, b5, e)
            }
            if (!b9 && e) {
                e.empty.fire()
            }
        },_queueHooks: function(b5, b4) {
            var e = b4 + "queueHooks";
            return bJ._data(b5, e) || bJ._data(b5, e, {empty: bJ.Callbacks("once memory").add(function() {
                    bJ._removeData(b5, b4 + "queue");
                    bJ._removeData(b5, e)
                })})
        }});
    bJ.fn.extend({queue: function(e, b4) {
            var b5 = 2;
            if (typeof e !== "string") {
                b4 = e;
                e = "fx";
                b5--
            }
            if (arguments.length < b5) {
                return bJ.queue(this[0], e)
            }
            return b4 === aF ? this : this.each(function() {
                var b6 = bJ.queue(this, e, b4);
                bJ._queueHooks(this, e);
                if (e === "fx" && b6[0] !== "inprogress") {
                    bJ.dequeue(this, e)
                }
            })
        },dequeue: function(e) {
            return this.each(function() {
                bJ.dequeue(this, e)
            })
        },delay: function(b4, e) {
            b4 = bJ.fx ? bJ.fx.speeds[b4] || b4 : b4;
            e = e || "fx";
            return this.queue(e, function(b6, b5) {
                var b7 = setTimeout(b6, b4);
                b5.stop = function() {
                    clearTimeout(b7)
                }
            })
        },clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },promise: function(b5, b9) {
            var b4, b6 = 1, ca = bJ.Deferred(), b8 = this, e = this.length, b7 = function() {
                if (!(--b6)) {
                    ca.resolveWith(b8, [b8])
                }
            };
            if (typeof b5 !== "string") {
                b9 = b5;
                b5 = aF
            }
            b5 = b5 || "fx";
            while (e--) {
                b4 = bJ._data(b8[e], b5 + "queueHooks");
                if (b4 && b4.empty) {
                    b6++;
                    b4.empty.add(b7)
                }
            }
            b7();
            return ca.promise(b9)
        }});
    var a8, b0, bM = /[\t\r\n\f]/g, ai = /\r/g, aE = /^(?:input|select|textarea|button|object)$/i, C = /^(?:a|area)$/i, ap = /^(?:checked|selected)$/i, bP = bJ.support.getSetAttribute, bF = bJ.support.input;
    bJ.fn.extend({attr: function(e, b4) {
            return bJ.access(this, bJ.attr, e, b4, arguments.length > 1)
        },removeAttr: function(e) {
            return this.each(function() {
                bJ.removeAttr(this, e)
            })
        },prop: function(e, b4) {
            return bJ.access(this, bJ.prop, e, b4, arguments.length > 1)
        },removeProp: function(e) {
            e = bJ.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = aF;
                    delete this[e]
                } catch (b4) {
                }
            })
        },addClass: function(ca) {
            var b4, e, cb, b7, b5, b6 = 0, b8 = this.length, b9 = typeof ca === "string" && ca;
            if (bJ.isFunction(ca)) {
                return this.each(function(cc) {
                    bJ(this).addClass(ca.call(this, cc, this.className))
                })
            }
            if (b9) {
                b4 = (ca || "").match(ab) || [];
                for (; b6 < b8; b6++) {
                    e = this[b6];
                    cb = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bM, " ") : " ");
                    if (cb) {
                        b5 = 0;
                        while ((b7 = b4[b5++])) {
                            if (cb.indexOf(" " + b7 + " ") < 0) {
                                cb += b7 + " "
                            }
                        }
                        e.className = bJ.trim(cb)
                    }
                }
            }
            return this
        },removeClass: function(ca) {
            var b4, e, cb, b7, b5, b6 = 0, b8 = this.length, b9 = arguments.length === 0 || typeof ca === "string" && ca;
            if (bJ.isFunction(ca)) {
                return this.each(function(cc) {
                    bJ(this).removeClass(ca.call(this, cc, this.className))
                })
            }
            if (b9) {
                b4 = (ca || "").match(ab) || [];
                for (; b6 < b8; b6++) {
                    e = this[b6];
                    cb = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bM, " ") : "");
                    if (cb) {
                        b5 = 0;
                        while ((b7 = b4[b5++])) {
                            while (cb.indexOf(" " + b7 + " ") >= 0) {
                                cb = cb.replace(" " + b7 + " ", " ")
                            }
                        }
                        e.className = ca ? bJ.trim(cb) : ""
                    }
                }
            }
            return this
        },toggleClass: function(b5, e) {
            var b4 = typeof b5;
            if (typeof e === "boolean" && b4 === "string") {
                return e ? this.addClass(b5) : this.removeClass(b5)
            }
            if (bJ.isFunction(b5)) {
                return this.each(function(b6) {
                    bJ(this).toggleClass(b5.call(this, b6, this.className, e), e)
                })
            }
            return this.each(function() {
                if (b4 === "string") {
                    var b8, b7 = 0, b6 = bJ(this), b9 = b5.match(ab) || [];
                    while ((b8 = b9[b7++])) {
                        if (b6.hasClass(b8)) {
                            b6.removeClass(b8)
                        } else {
                            b6.addClass(b8)
                        }
                    }
                } else {
                    if (b4 === aB || b4 === "boolean") {
                        if (this.className) {
                            bJ._data(this, "__className__", this.className)
                        }
                        this.className = this.className || b5 === false ? "" : bJ._data(this, "__className__") || ""
                    }
                }
            })
        },hasClass: function(e) {
            var b6 = " " + e + " ", b5 = 0, b4 = this.length;
            for (; b5 < b4; b5++) {
                if (this[b5].nodeType === 1 && (" " + this[b5].className + " ").replace(bM, " ").indexOf(b6) >= 0) {
                    return true
                }
            }
            return false
        },val: function(b6) {
            var b4, e, b7, b5 = this[0];
            if (!arguments.length) {
                if (b5) {
                    e = bJ.valHooks[b5.type] || bJ.valHooks[b5.nodeName.toLowerCase()];
                    if (e && "get" in e && (b4 = e.get(b5, "value")) !== aF) {
                        return b4
                    }
                    b4 = b5.value;
                    return typeof b4 === "string" ? b4.replace(ai, "") : b4 == null ? "" : b4
                }
                return
            }
            b7 = bJ.isFunction(b6);
            return this.each(function(b8) {
                var b9;
                if (this.nodeType !== 1) {
                    return
                }
                if (b7) {
                    b9 = b6.call(this, b8, bJ(this).val())
                } else {
                    b9 = b6
                }
                if (b9 == null) {
                    b9 = ""
                } else {
                    if (typeof b9 === "number") {
                        b9 += ""
                    } else {
                        if (bJ.isArray(b9)) {
                            b9 = bJ.map(b9, function(ca) {
                                return ca == null ? "" : ca + ""
                            })
                        }
                    }
                }
                e = bJ.valHooks[this.type] || bJ.valHooks[this.nodeName.toLowerCase()];
                if (!e || !("set" in e) || e.set(this, b9, "value") === aF) {
                    this.value = b9
                }
            })
        }});
    bJ.extend({valHooks: {option: {get: function(e) {
                    var b4 = bJ.find.attr(e, "value");
                    return b4 != null ? b4 : e.text
                }},select: {get: function(e) {
                    var b9, b5, cb = e.options, b7 = e.selectedIndex, b6 = e.type === "select-one" || b7 < 0, ca = b6 ? null : [], b8 = b6 ? b7 + 1 : cb.length, b4 = b7 < 0 ? b8 : b6 ? b7 : 0;
                    for (; b4 < b8; b4++) {
                        b5 = cb[b4];
                        if ((b5.selected || b4 === b7) && (bJ.support.optDisabled ? !b5.disabled : b5.getAttribute("disabled") === null) && (!b5.parentNode.disabled || !bJ.nodeName(b5.parentNode, "optgroup"))) {
                            b9 = bJ(b5).val();
                            if (b6) {
                                return b9
                            }
                            ca.push(b9)
                        }
                    }
                    return ca
                },set: function(b7, b8) {
                    var b9, b6, b4 = b7.options, e = bJ.makeArray(b8), b5 = b4.length;
                    while (b5--) {
                        b6 = b4[b5];
                        if ((b6.selected = bJ.inArray(bJ(b6).val(), e) >= 0)) {
                            b9 = true
                        }
                    }
                    if (!b9) {
                        b7.selectedIndex = -1
                    }
                    return e
                }}},attr: function(b7, b6, b8) {
            var e, b5, b4 = b7.nodeType;
            if (!b7 || b4 === 3 || b4 === 8 || b4 === 2) {
                return
            }
            if (typeof b7.getAttribute === aB) {
                return bJ.prop(b7, b6, b8)
            }
            if (b4 !== 1 || !bJ.isXMLDoc(b7)) {
                b6 = b6.toLowerCase();
                e = bJ.attrHooks[b6] || (bJ.expr.match.bool.test(b6) ? b0 : a8)
            }
            if (b8 !== aF) {
                if (b8 === null) {
                    bJ.removeAttr(b7, b6)
                } else {
                    if (e && "set" in e && (b5 = e.set(b7, b8, b6)) !== aF) {
                        return b5
                    } else {
                        b7.setAttribute(b6, b8 + "");
                        return b8
                    }
                }
            } else {
                if (e && "get" in e && (b5 = e.get(b7, b6)) !== null) {
                    return b5
                } else {
                    b5 = bJ.find.attr(b7, b6);
                    return b5 == null ? aF : b5
                }
            }
        },removeAttr: function(b5, b7) {
            var e, b6, b4 = 0, b8 = b7 && b7.match(ab);
            if (b8 && b5.nodeType === 1) {
                while ((e = b8[b4++])) {
                    b6 = bJ.propFix[e] || e;
                    if (bJ.expr.match.bool.test(e)) {
                        if (bF && bP || !ap.test(e)) {
                            b5[b6] = false
                        } else {
                            b5[bJ.camelCase("default-" + e)] = b5[b6] = false
                        }
                    } else {
                        bJ.attr(b5, e, "")
                    }
                    b5.removeAttribute(bP ? e : b6)
                }
            }
        },attrHooks: {type: {set: function(e, b4) {
                    if (!bJ.support.radioValue && b4 === "radio" && bJ.nodeName(e, "input")) {
                        var b5 = e.value;
                        e.setAttribute("type", b4);
                        if (b5) {
                            e.value = b5
                        }
                        return b4
                    }
                }}},propFix: {"for": "htmlFor","class": "className"},prop: function(b8, b6, b9) {
            var b5, e, b7, b4 = b8.nodeType;
            if (!b8 || b4 === 3 || b4 === 8 || b4 === 2) {
                return
            }
            b7 = b4 !== 1 || !bJ.isXMLDoc(b8);
            if (b7) {
                b6 = bJ.propFix[b6] || b6;
                e = bJ.propHooks[b6]
            }
            if (b9 !== aF) {
                return e && "set" in e && (b5 = e.set(b8, b9, b6)) !== aF ? b5 : (b8[b6] = b9)
            } else {
                return e && "get" in e && (b5 = e.get(b8, b6)) !== null ? b5 : b8[b6]
            }
        },propHooks: {tabIndex: {get: function(b4) {
                    var e = bJ.find.attr(b4, "tabindex");
                    return e ? parseInt(e, 10) : aE.test(b4.nodeName) || C.test(b4.nodeName) && b4.href ? 0 : -1
                }}}});
    b0 = {set: function(b4, b5, e) {
            if (b5 === false) {
                bJ.removeAttr(b4, e)
            } else {
                if (bF && bP || !ap.test(e)) {
                    b4.setAttribute(!bP && bJ.propFix[e] || e, e)
                } else {
                    b4[bJ.camelCase("default-" + e)] = b4[e] = true
                }
            }
            return e
        }};
    bJ.each(bJ.expr.match.bool.source.match(/\w+/g), function(b5, b4) {
        var e = bJ.expr.attrHandle[b4] || bJ.find.attr;
        bJ.expr.attrHandle[b4] = bF && bP || !ap.test(b4) ? function(b9, b7, ca) {
            var b8 = bJ.expr.attrHandle[b7], b6 = ca ? aF : (bJ.expr.attrHandle[b7] = aF) != e(b9, b7, ca) ? b7.toLowerCase() : null;
            bJ.expr.attrHandle[b7] = b8;
            return b6
        } : function(b7, b6, b8) {
            return b8 ? aF : b7[bJ.camelCase("default-" + b6)] ? b6.toLowerCase() : null
        }
    });
    if (!bF || !bP) {
        bJ.attrHooks.value = {set: function(b4, b5, e) {
                if (bJ.nodeName(b4, "input")) {
                    b4.defaultValue = b5
                } else {
                    return a8 && a8.set(b4, b5, e)
                }
            }}
    }
    if (!bP) {
        a8 = {set: function(b5, b6, b4) {
                var e = b5.getAttributeNode(b4);
                if (!e) {
                    b5.setAttributeNode((e = b5.ownerDocument.createAttribute(b4)))
                }
                e.value = b6 += "";
                return b4 === "value" || b6 === b5.getAttribute(b4) ? b6 : aF
            }};
        bJ.expr.attrHandle.id = bJ.expr.attrHandle.name = bJ.expr.attrHandle.coords = function(b5, b4, b6) {
            var e;
            return b6 ? aF : (e = b5.getAttributeNode(b4)) && e.value !== "" ? e.value : null
        };
        bJ.valHooks.button = {get: function(b5, b4) {
                var e = b5.getAttributeNode(b4);
                return e && e.specified ? e.value : aF
            },set: a8.set};
        bJ.attrHooks.contenteditable = {set: function(b4, b5, e) {
                a8.set(b4, b5 === "" ? false : b5, e)
            }};
        bJ.each(["width", "height"], function(b4, e) {
            bJ.attrHooks[e] = {set: function(b5, b6) {
                    if (b6 === "") {
                        b5.setAttribute(e, "auto");
                        return b6
                    }
                }}
        })
    }
    if (!bJ.support.hrefNormalized) {
        bJ.each(["href", "src"], function(b4, e) {
            bJ.propHooks[e] = {get: function(b5) {
                    return b5.getAttribute(e, 4)
                }}
        })
    }
    if (!bJ.support.style) {
        bJ.attrHooks.style = {get: function(e) {
                return e.style.cssText || aF
            },set: function(e, b4) {
                return (e.style.cssText = b4 + "")
            }}
    }
    if (!bJ.support.optSelected) {
        bJ.propHooks.selected = {get: function(b4) {
                var e = b4.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                }
                return null
            }}
    }
    bJ.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        bJ.propFix[this.toLowerCase()] = this
    });
    if (!bJ.support.enctype) {
        bJ.propFix.enctype = "encoding"
    }
    bJ.each(["radio", "checkbox"], function() {
        bJ.valHooks[this] = {set: function(e, b4) {
                if (bJ.isArray(b4)) {
                    return (e.checked = bJ.inArray(bJ(e).val(), b4) >= 0)
                }
            }};
        if (!bJ.support.checkOn) {
            bJ.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    });
    var bH = /^(?:input|select|textarea)$/i, a3 = /^key/, bN = /^(?:mouse|contextmenu)|click/, bB = /^(?:focusinfocus|focusoutblur)$/, bu = /^([^.]*)(?:\.(.+)|)$/;
    function Q() {
        return true
    }
    function W() {
        return false
    }
    function aj() {
        try {
            return l.activeElement
        } catch (e) {
        }
    }
    bJ.event = {global: {},add: function(b7, cc, ch, b9, b8) {
            var ca, ci, cj, b5, ce, cb, cg, b6, cf, e, b4, cd = bJ._data(b7);
            if (!cd) {
                return
            }
            if (ch.handler) {
                b5 = ch;
                ch = b5.handler;
                b8 = b5.selector
            }
            if (!ch.guid) {
                ch.guid = bJ.guid++
            }
            if (!(ci = cd.events)) {
                ci = cd.events = {}
            }
            if (!(cb = cd.handle)) {
                cb = cd.handle = function(ck) {
                    return typeof bJ !== aB && (!ck || bJ.event.triggered !== ck.type) ? bJ.event.dispatch.apply(cb.elem, arguments) : aF
                };
                cb.elem = b7
            }
            cc = (cc || "").match(ab) || [""];
            cj = cc.length;
            while (cj--) {
                ca = bu.exec(cc[cj]) || [];
                cf = b4 = ca[1];
                e = (ca[2] || "").split(".").sort();
                if (!cf) {
                    continue
                }
                ce = bJ.event.special[cf] || {};
                cf = (b8 ? ce.delegateType : ce.bindType) || cf;
                ce = bJ.event.special[cf] || {};
                cg = bJ.extend({type: cf,origType: b4,data: b9,handler: ch,guid: ch.guid,selector: b8,needsContext: b8 && bJ.expr.match.needsContext.test(b8),namespace: e.join(".")}, b5);
                if (!(b6 = ci[cf])) {
                    b6 = ci[cf] = [];
                    b6.delegateCount = 0;
                    if (!ce.setup || ce.setup.call(b7, b9, e, cb) === false) {
                        if (b7.addEventListener) {
                            b7.addEventListener(cf, cb, false)
                        } else {
                            if (b7.attachEvent) {
                                b7.attachEvent("on" + cf, cb)
                            }
                        }
                    }
                }
                if (ce.add) {
                    ce.add.call(b7, cg);
                    if (!cg.handler.guid) {
                        cg.handler.guid = ch.guid
                    }
                }
                if (b8) {
                    b6.splice(b6.delegateCount++, 0, cg)
                } else {
                    b6.push(cg)
                }
                bJ.event.global[cf] = true
            }
            b7 = null
        },remove: function(b6, cc, cj, b7, cb) {
            var b9, cg, ca, b8, ci, ch, ce, b5, cf, e, b4, cd = bJ.hasData(b6) && bJ._data(b6);
            if (!cd || !(ch = cd.events)) {
                return
            }
            cc = (cc || "").match(ab) || [""];
            ci = cc.length;
            while (ci--) {
                ca = bu.exec(cc[ci]) || [];
                cf = b4 = ca[1];
                e = (ca[2] || "").split(".").sort();
                if (!cf) {
                    for (cf in ch) {
                        bJ.event.remove(b6, cf + cc[ci], cj, b7, true)
                    }
                    continue
                }
                ce = bJ.event.special[cf] || {};
                cf = (b7 ? ce.delegateType : ce.bindType) || cf;
                b5 = ch[cf] || [];
                ca = ca[2] && new RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)");
                b8 = b9 = b5.length;
                while (b9--) {
                    cg = b5[b9];
                    if ((cb || b4 === cg.origType) && (!cj || cj.guid === cg.guid) && (!ca || ca.test(cg.namespace)) && (!b7 || b7 === cg.selector || b7 === "**" && cg.selector)) {
                        b5.splice(b9, 1);
                        if (cg.selector) {
                            b5.delegateCount--
                        }
                        if (ce.remove) {
                            ce.remove.call(b6, cg)
                        }
                    }
                }
                if (b8 && !b5.length) {
                    if (!ce.teardown || ce.teardown.call(b6, e, cd.handle) === false) {
                        bJ.removeEvent(b6, cf, cd.handle)
                    }
                    delete ch[cf]
                }
            }
            if (bJ.isEmptyObject(ch)) {
                delete cd.handle;
                bJ._removeData(b6, "events")
            }
        },trigger: function(b4, cb, b7, ci) {
            var cc, b6, cg, ch, ce, ca, b9, b8 = [b7 || l], cf = U.call(b4, "type") ? b4.type : b4, b5 = U.call(b4, "namespace") ? b4.namespace.split(".") : [];
            cg = ca = b7 = b7 || l;
            if (b7.nodeType === 3 || b7.nodeType === 8) {
                return
            }
            if (bB.test(cf + bJ.event.triggered)) {
                return
            }
            if (cf.indexOf(".") >= 0) {
                b5 = cf.split(".");
                cf = b5.shift();
                b5.sort()
            }
            b6 = cf.indexOf(":") < 0 && "on" + cf;
            b4 = b4[bJ.expando] ? b4 : new bJ.Event(cf, typeof b4 === "object" && b4);
            b4.isTrigger = ci ? 2 : 3;
            b4.namespace = b5.join(".");
            b4.namespace_re = b4.namespace ? new RegExp("(^|\\.)" + b5.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            b4.result = aF;
            if (!b4.target) {
                b4.target = b7
            }
            cb = cb == null ? [b4] : bJ.makeArray(cb, [b4]);
            ce = bJ.event.special[cf] || {};
            if (!ci && ce.trigger && ce.trigger.apply(b7, cb) === false) {
                return
            }
            if (!ci && !ce.noBubble && !bJ.isWindow(b7)) {
                ch = ce.delegateType || cf;
                if (!bB.test(ch + cf)) {
                    cg = cg.parentNode
                }
                for (; cg; cg = cg.parentNode) {
                    b8.push(cg);
                    ca = cg
                }
                if (ca === (b7.ownerDocument || l)) {
                    b8.push(ca.defaultView || ca.parentWindow || a2)
                }
            }
            b9 = 0;
            while ((cg = b8[b9++]) && !b4.isPropagationStopped()) {
                b4.type = b9 > 1 ? ch : ce.bindType || cf;
                cc = (bJ._data(cg, "events") || {})[b4.type] && bJ._data(cg, "handle");
                if (cc) {
                    cc.apply(cg, cb)
                }
                cc = b6 && cg[b6];
                if (cc && bJ.acceptData(cg) && cc.apply && cc.apply(cg, cb) === false) {
                    b4.preventDefault()
                }
            }
            b4.type = cf;
            if (!ci && !b4.isDefaultPrevented()) {
                if ((!ce._default || ce._default.apply(b8.pop(), cb) === false) && bJ.acceptData(b7)) {
                    if (b6 && b7[cf] && !bJ.isWindow(b7)) {
                        ca = b7[b6];
                        if (ca) {
                            b7[b6] = null
                        }
                        bJ.event.triggered = cf;
                        try {
                            b7[cf]()
                        } catch (cd) {
                        }
                        bJ.event.triggered = aF;
                        if (ca) {
                            b7[b6] = ca
                        }
                    }
                }
            }
            return b4.result
        },dispatch: function(e) {
            e = bJ.event.fix(e);
            var b7, b8, cc, b4, b6, cb = [], ca = a4.call(arguments), b5 = (bJ._data(this, "events") || {})[e.type] || [], b9 = bJ.event.special[e.type] || {};
            ca[0] = e;
            e.delegateTarget = this;
            if (b9.preDispatch && b9.preDispatch.call(this, e) === false) {
                return
            }
            cb = bJ.event.handlers.call(this, e, b5);
            b7 = 0;
            while ((b4 = cb[b7++]) && !e.isPropagationStopped()) {
                e.currentTarget = b4.elem;
                b6 = 0;
                while ((cc = b4.handlers[b6++]) && !e.isImmediatePropagationStopped()) {
                    if (!e.namespace_re || e.namespace_re.test(cc.namespace)) {
                        e.handleObj = cc;
                        e.data = cc.data;
                        b8 = ((bJ.event.special[cc.origType] || {}).handle || cc.handler).apply(b4.elem, ca);
                        if (b8 !== aF) {
                            if ((e.result = b8) === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (b9.postDispatch) {
                b9.postDispatch.call(this, e)
            }
            return e.result
        },handlers: function(e, b5) {
            var b4, ca, b8, b7, b9 = [], b6 = b5.delegateCount, cb = e.target;
            if (b6 && cb.nodeType && (!e.button || e.type !== "click")) {
                for (; cb != this; cb = cb.parentNode || this) {
                    if (cb.nodeType === 1 && (cb.disabled !== true || e.type !== "click")) {
                        b8 = [];
                        for (b7 = 0; b7 < b6; b7++) {
                            ca = b5[b7];
                            b4 = ca.selector + " ";
                            if (b8[b4] === aF) {
                                b8[b4] = ca.needsContext ? bJ(b4, this).index(cb) >= 0 : bJ.find(b4, this, null, [cb]).length
                            }
                            if (b8[b4]) {
                                b8.push(ca)
                            }
                        }
                        if (b8.length) {
                            b9.push({elem: cb,handlers: b8})
                        }
                    }
                }
            }
            if (b6 < b5.length) {
                b9.push({elem: this,handlers: b5.slice(b6)})
            }
            return b9
        },fix: function(b6) {
            if (b6[bJ.expando]) {
                return b6
            }
            var b4, b9, b8, b5 = b6.type, e = b6, b7 = this.fixHooks[b5];
            if (!b7) {
                this.fixHooks[b5] = b7 = bN.test(b5) ? this.mouseHooks : a3.test(b5) ? this.keyHooks : {}
            }
            b8 = b7.props ? this.props.concat(b7.props) : this.props;
            b6 = new bJ.Event(e);
            b4 = b8.length;
            while (b4--) {
                b9 = b8[b4];
                b6[b9] = e[b9]
            }
            if (!b6.target) {
                b6.target = e.srcElement || l
            }
            if (b6.target.nodeType === 3) {
                b6.target = b6.target.parentNode
            }
            b6.metaKey = !!b6.metaKey;
            return b7.filter ? b7.filter(b6, e) : b6
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(b4, e) {
                if (b4.which == null) {
                    b4.which = e.charCode != null ? e.charCode : e.keyCode
                }
                return b4
            }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(b6, b5) {
                var e, b7, b8, b4 = b5.button, b9 = b5.fromElement;
                if (b6.pageX == null && b5.clientX != null) {
                    b7 = b6.target.ownerDocument || l;
                    b8 = b7.documentElement;
                    e = b7.body;
                    b6.pageX = b5.clientX + (b8 && b8.scrollLeft || e && e.scrollLeft || 0) - (b8 && b8.clientLeft || e && e.clientLeft || 0);
                    b6.pageY = b5.clientY + (b8 && b8.scrollTop || e && e.scrollTop || 0) - (b8 && b8.clientTop || e && e.clientTop || 0)
                }
                if (!b6.relatedTarget && b9) {
                    b6.relatedTarget = b9 === b6.target ? b5.toElement : b9
                }
                if (!b6.which && b4 !== aF) {
                    b6.which = (b4 & 1 ? 1 : (b4 & 2 ? 3 : (b4 & 4 ? 2 : 0)))
                }
                return b6
            }},special: {load: {noBubble: true},focus: {trigger: function() {
                    if (this !== aj() && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (b4) {
                        }
                    }
                },delegateType: "focusin"},blur: {trigger: function() {
                    if (this === aj() && this.blur) {
                        this.blur();
                        return false
                    }
                },delegateType: "focusout"},click: {trigger: function() {
                    if (bJ.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                },_default: function(e) {
                    return bJ.nodeName(e.target, "a")
                }},beforeunload: {postDispatch: function(e) {
                    if (e.result !== aF) {
                        e.originalEvent.returnValue = e.result
                    }
                }}},simulate: function(b5, b7, b6, b4) {
            var b8 = bJ.extend(new bJ.Event(), b6, {type: b5,isSimulated: true,originalEvent: {}});
            if (b4) {
                bJ.event.trigger(b8, null, b7)
            } else {
                bJ.event.dispatch.call(b7, b8)
            }
            if (b8.isDefaultPrevented()) {
                b6.preventDefault()
            }
        }};
    bJ.removeEvent = l.removeEventListener ? function(b4, e, b5) {
        if (b4.removeEventListener) {
            b4.removeEventListener(e, b5, false)
        }
    } : function(b5, b4, b6) {
        var e = "on" + b4;
        if (b5.detachEvent) {
            if (typeof b5[e] === aB) {
                b5[e] = null
            }
            b5.detachEvent(e, b6)
        }
    };
    bJ.Event = function(b4, e) {
        if (!(this instanceof bJ.Event)) {
            return new bJ.Event(b4, e)
        }
        if (b4 && b4.type) {
            this.originalEvent = b4;
            this.type = b4.type;
            this.isDefaultPrevented = (b4.defaultPrevented || b4.returnValue === false || b4.getPreventDefault && b4.getPreventDefault()) ? Q : W
        } else {
            this.type = b4
        }
        if (e) {
            bJ.extend(this, e)
        }
        this.timeStamp = b4 && b4.timeStamp || bJ.now();
        this[bJ.expando] = true
    };
    bJ.Event.prototype = {isDefaultPrevented: W,isPropagationStopped: W,isImmediatePropagationStopped: W,preventDefault: function() {
            var b4 = this.originalEvent;
            this.isDefaultPrevented = Q;
            if (!b4) {
                return
            }
            if (b4.preventDefault) {
                b4.preventDefault()
            } else {
                b4.returnValue = false
            }
        },stopPropagation: function() {
            var b4 = this.originalEvent;
            this.isPropagationStopped = Q;
            if (!b4) {
                return
            }
            if (b4.stopPropagation) {
                b4.stopPropagation()
            }
            b4.cancelBubble = true
        },stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = Q;
            this.stopPropagation()
        }};
    bJ.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(b4, e) {
        bJ.event.special[b4] = {delegateType: e,bindType: e,handle: function(b7) {
                var b5, b9 = this, b8 = b7.relatedTarget, b6 = b7.handleObj;
                if (!b8 || (b8 !== b9 && !bJ.contains(b9, b8))) {
                    b7.type = b6.origType;
                    b5 = b6.handler.apply(this, arguments);
                    b7.type = e
                }
                return b5
            }}
    });
    if (!bJ.support.submitBubbles) {
        bJ.event.special.submit = {setup: function() {
                if (bJ.nodeName(this, "form")) {
                    return false
                }
                bJ.event.add(this, "click._submit keypress._submit", function(b6) {
                    var b5 = b6.target, b4 = bJ.nodeName(b5, "input") || bJ.nodeName(b5, "button") ? b5.form : aF;
                    if (b4 && !bJ._data(b4, "submitBubbles")) {
                        bJ.event.add(b4, "submit._submit", function(e) {
                            e._submit_bubble = true
                        });
                        bJ._data(b4, "submitBubbles", true)
                    }
                })
            },postDispatch: function(e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode && !e.isTrigger) {
                        bJ.event.simulate("submit", this.parentNode, e, true)
                    }
                }
            },teardown: function() {
                if (bJ.nodeName(this, "form")) {
                    return false
                }
                bJ.event.remove(this, "._submit")
            }}
    }
    if (!bJ.support.changeBubbles) {
        bJ.event.special.change = {setup: function() {
                if (bH.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        bJ.event.add(this, "propertychange._change", function(e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        bJ.event.add(this, "click._change", function(e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false
                            }
                            bJ.event.simulate("change", this, e, true)
                        })
                    }
                    return false
                }
                bJ.event.add(this, "beforeactivate._change", function(b5) {
                    var b4 = b5.target;
                    if (bH.test(b4.nodeName) && !bJ._data(b4, "changeBubbles")) {
                        bJ.event.add(b4, "change._change", function(e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                bJ.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        bJ._data(b4, "changeBubbles", true)
                    }
                })
            },handle: function(b4) {
                var e = b4.target;
                if (this !== e || b4.isSimulated || b4.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return b4.handleObj.handler.apply(this, arguments)
                }
            },teardown: function() {
                bJ.event.remove(this, "._change");
                return !bH.test(this.nodeName)
            }}
    }
    if (!bJ.support.focusinBubbles) {
        bJ.each({focus: "focusin",blur: "focusout"}, function(b6, e) {
            var b4 = 0, b5 = function(b7) {
                bJ.event.simulate(e, b7.target, bJ.event.fix(b7), true)
            };
            bJ.event.special[e] = {setup: function() {
                    if (b4++ === 0) {
                        l.addEventListener(b6, b5, true)
                    }
                },teardown: function() {
                    if (--b4 === 0) {
                        l.removeEventListener(b6, b5, true)
                    }
                }}
        })
    }
    bJ.fn.extend({on: function(b5, e, b8, b7, b4) {
            var b6, b9;
            if (typeof b5 === "object") {
                if (typeof e !== "string") {
                    b8 = b8 || e;
                    e = aF
                }
                for (b6 in b5) {
                    this.on(b6, e, b8, b5[b6], b4)
                }
                return this
            }
            if (b8 == null && b7 == null) {
                b7 = e;
                b8 = e = aF
            } else {
                if (b7 == null) {
                    if (typeof e === "string") {
                        b7 = b8;
                        b8 = aF
                    } else {
                        b7 = b8;
                        b8 = e;
                        e = aF
                    }
                }
            }
            if (b7 === false) {
                b7 = W
            } else {
                if (!b7) {
                    return this
                }
            }
            if (b4 === 1) {
                b9 = b7;
                b7 = function(ca) {
                    bJ().off(ca);
                    return b9.apply(this, arguments)
                };
                b7.guid = b9.guid || (b9.guid = bJ.guid++)
            }
            return this.each(function() {
                bJ.event.add(this, b5, b7, b8, e)
            })
        },one: function(b4, e, b6, b5) {
            return this.on(b4, e, b6, b5, 1)
        },off: function(b5, e, b7) {
            var b4, b6;
            if (b5 && b5.preventDefault && b5.handleObj) {
                b4 = b5.handleObj;
                bJ(b5.delegateTarget).off(b4.namespace ? b4.origType + "." + b4.namespace : b4.origType, b4.selector, b4.handler);
                return this
            }
            if (typeof b5 === "object") {
                for (b6 in b5) {
                    this.off(b6, e, b5[b6])
                }
                return this
            }
            if (e === false || typeof e === "function") {
                b7 = e;
                e = aF
            }
            if (b7 === false) {
                b7 = W
            }
            return this.each(function() {
                bJ.event.remove(this, b5, b7, e)
            })
        },trigger: function(e, b4) {
            return this.each(function() {
                bJ.event.trigger(e, b4, this)
            })
        },triggerHandler: function(e, b5) {
            var b4 = this[0];
            if (b4) {
                return bJ.event.trigger(e, b5, b4, true)
            }
        }});
    var am = /^.[^:#\[\.,]*$/, bt = /^(?:parents|prev(?:Until|All))/, x = bJ.expr.match.needsContext, bx = {children: true,contents: true,next: true,prev: true};
    bJ.fn.extend({find: function(b4) {
            var b7, b6 = [], b5 = this, e = b5.length;
            if (typeof b4 !== "string") {
                return this.pushStack(bJ(b4).filter(function() {
                    for (b7 = 0; b7 < e; b7++) {
                        if (bJ.contains(b5[b7], this)) {
                            return true
                        }
                    }
                }))
            }
            for (b7 = 0; b7 < e; b7++) {
                bJ.find(b4, b5[b7], b6)
            }
            b6 = this.pushStack(e > 1 ? bJ.unique(b6) : b6);
            b6.selector = this.selector ? this.selector + " " + b4 : b4;
            return b6
        },has: function(b6) {
            var b5, b4 = bJ(b6, this), e = b4.length;
            return this.filter(function() {
                for (b5 = 0; b5 < e; b5++) {
                    if (bJ.contains(this, b4[b5])) {
                        return true
                    }
                }
            })
        },not: function(e) {
            return this.pushStack(aN(this, e || [], true))
        },filter: function(e) {
            return this.pushStack(aN(this, e || [], false))
        },is: function(e) {
            return !!aN(this, typeof e === "string" && x.test(e) ? bJ(e) : e || [], false).length
        },closest: function(b7, b6) {
            var b8, b5 = 0, e = this.length, b4 = [], b9 = x.test(b7) || typeof b7 !== "string" ? bJ(b7, b6 || this.context) : 0;
            for (; b5 < e; b5++) {
                for (b8 = this[b5]; b8 && b8 !== b6; b8 = b8.parentNode) {
                    if (b8.nodeType < 11 && (b9 ? b9.index(b8) > -1 : b8.nodeType === 1 && bJ.find.matchesSelector(b8, b7))) {
                        b8 = b4.push(b8);
                        break
                    }
                }
            }
            return this.pushStack(b4.length > 1 ? bJ.unique(b4) : b4)
        },index: function(e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            }
            if (typeof e === "string") {
                return bJ.inArray(this[0], bJ(e))
            }
            return bJ.inArray(e.jquery ? e[0] : e, this)
        },add: function(e, b4) {
            var b6 = typeof e === "string" ? bJ(e, b4) : bJ.makeArray(e && e.nodeType ? [e] : e), b5 = bJ.merge(this.get(), b6);
            return this.pushStack(bJ.unique(b5))
        },addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }});
    function aW(b4, e) {
        do {
            b4 = b4[e]
        } while (b4 && b4.nodeType !== 1);
        return b4
    }
    bJ.each({parent: function(b4) {
            var e = b4.parentNode;
            return e && e.nodeType !== 11 ? e : null
        },parents: function(e) {
            return bJ.dir(e, "parentNode")
        },parentsUntil: function(b4, e, b5) {
            return bJ.dir(b4, "parentNode", b5)
        },next: function(e) {
            return aW(e, "nextSibling")
        },prev: function(e) {
            return aW(e, "previousSibling")
        },nextAll: function(e) {
            return bJ.dir(e, "nextSibling")
        },prevAll: function(e) {
            return bJ.dir(e, "previousSibling")
        },nextUntil: function(b4, e, b5) {
            return bJ.dir(b4, "nextSibling", b5)
        },prevUntil: function(b4, e, b5) {
            return bJ.dir(b4, "previousSibling", b5)
        },siblings: function(e) {
            return bJ.sibling((e.parentNode || {}).firstChild, e)
        },children: function(e) {
            return bJ.sibling(e.firstChild)
        },contents: function(e) {
            return bJ.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : bJ.merge([], e.childNodes)
        }}, function(e, b4) {
        bJ.fn[e] = function(b7, b5) {
            var b6 = bJ.map(this, b4, b7);
            if (e.slice(-5) !== "Until") {
                b5 = b7
            }
            if (b5 && typeof b5 === "string") {
                b6 = bJ.filter(b5, b6)
            }
            if (this.length > 1) {
                if (!bx[e]) {
                    b6 = bJ.unique(b6)
                }
                if (bt.test(e)) {
                    b6 = b6.reverse()
                }
            }
            return this.pushStack(b6)
        }
    });
    bJ.extend({filter: function(b6, e, b5) {
            var b4 = e[0];
            if (b5) {
                b6 = ":not(" + b6 + ")"
            }
            return e.length === 1 && b4.nodeType === 1 ? bJ.find.matchesSelector(b4, b6) ? [b4] : [] : bJ.find.matches(b6, bJ.grep(e, function(b7) {
                return b7.nodeType === 1
            }))
        },dir: function(b5, b4, b7) {
            var e = [], b6 = b5[b4];
            while (b6 && b6.nodeType !== 9 && (b7 === aF || b6.nodeType !== 1 || !bJ(b6).is(b7))) {
                if (b6.nodeType === 1) {
                    e.push(b6)
                }
                b6 = b6[b4]
            }
            return e
        },sibling: function(b5, b4) {
            var e = [];
            for (; b5; b5 = b5.nextSibling) {
                if (b5.nodeType === 1 && b5 !== b4) {
                    e.push(b5)
                }
            }
            return e
        }});
    function aN(b5, e, b4) {
        if (bJ.isFunction(e)) {
            return bJ.grep(b5, function(b7, b6) {
                return !!e.call(b7, b6, b7) !== b4
            })
        }
        if (e.nodeType) {
            return bJ.grep(b5, function(b6) {
                return (b6 === e) !== b4
            })
        }
        if (typeof e === "string") {
            if (am.test(e)) {
                return bJ.filter(e, b5, b4)
            }
            e = bJ.filter(e, b5)
        }
        return bJ.grep(b5, function(b6) {
            return (bJ.inArray(b6, e) >= 0) !== b4
        })
    }
    function z(e) {
        var b5 = d.split("|"), b4 = e.createDocumentFragment();
        if (b4.createElement) {
            while (b5.length) {
                b4.createElement(b5.pop())
            }
        }
        return b4
    }
    var d = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", az = / jQuery\d+="(?:null|\d+)"/g, J = new RegExp("<(?:" + d + ")[\\s/>]", "i"), b3 = /^\s+/, aC = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, m = /<([\w:]+)/, bY = /<tbody/i, I = /<|&#?\w+;/, ak = /<(?:script|style|link)/i, q = /^(?:checkbox|radio)$/i, bU = /checked\s*(?:[^=]|=\s*.checked.)/i, bz = /^$|\/(?:java|ecma)script/i, aq = /^true\/(.*)/, aJ = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, S = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],area: [1, "<map>", "</map>"],param: [1, "<object>", "</object>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: bJ.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, aR = z(l), j = aR.appendChild(l.createElement("div"));
    S.optgroup = S.option;
    S.tbody = S.tfoot = S.colgroup = S.caption = S.thead;
    S.th = S.td;
    bJ.fn.extend({text: function(e) {
            return bJ.access(this, function(b4) {
                return b4 === aF ? bJ.text(this) : this.empty().append((this[0] && this[0].ownerDocument || l).createTextNode(b4))
            }, null, e, arguments.length)
        },append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b4 = a0(this, e);
                    b4.appendChild(e)
                }
            })
        },prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b4 = a0(this, e);
                    b4.insertBefore(e, b4.firstChild)
                }
            })
        },before: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this)
                }
            })
        },after: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
            })
        },remove: function(e, b7) {
            var b6, b4 = e ? bJ.filter(e, this) : this, b5 = 0;
            for (; (b6 = b4[b5]) != null; b5++) {
                if (!b7 && b6.nodeType === 1) {
                    bJ.cleanData(k(b6))
                }
                if (b6.parentNode) {
                    if (b7 && bJ.contains(b6.ownerDocument, b6)) {
                        bs(k(b6, "script"))
                    }
                    b6.parentNode.removeChild(b6)
                }
            }
            return this
        },empty: function() {
            var b4, e = 0;
            for (; (b4 = this[e]) != null; e++) {
                if (b4.nodeType === 1) {
                    bJ.cleanData(k(b4, false))
                }
                while (b4.firstChild) {
                    b4.removeChild(b4.firstChild)
                }
                if (b4.options && bJ.nodeName(b4, "select")) {
                    b4.options.length = 0
                }
            }
            return this
        },clone: function(b4, e) {
            b4 = b4 == null ? false : b4;
            e = e == null ? b4 : e;
            return this.map(function() {
                return bJ.clone(this, b4, e)
            })
        },html: function(e) {
            return bJ.access(this, function(b7) {
                var b6 = this[0] || {}, b5 = 0, b4 = this.length;
                if (b7 === aF) {
                    return b6.nodeType === 1 ? b6.innerHTML.replace(az, "") : aF
                }
                if (typeof b7 === "string" && !ak.test(b7) && (bJ.support.htmlSerialize || !J.test(b7)) && (bJ.support.leadingWhitespace || !b3.test(b7)) && !S[(m.exec(b7) || ["", ""])[1].toLowerCase()]) {
                    b7 = b7.replace(aC, "<$1></$2>");
                    try {
                        for (; b5 < b4; b5++) {
                            b6 = this[b5] || {};
                            if (b6.nodeType === 1) {
                                bJ.cleanData(k(b6, false));
                                b6.innerHTML = b7
                            }
                        }
                        b6 = 0
                    } catch (b8) {
                    }
                }
                if (b6) {
                    this.empty().append(b7)
                }
            }, null, e, arguments.length)
        },replaceWith: function() {
            var e = bJ.map(this, function(b5) {
                return [b5.nextSibling, b5.parentNode]
            }), b4 = 0;
            this.domManip(arguments, function(b7) {
                var b6 = e[b4++], b5 = e[b4++];
                if (b5) {
                    if (b6 && b6.parentNode !== b5) {
                        b6 = this.nextSibling
                    }
                    bJ(this).remove();
                    b5.insertBefore(b7, b6)
                }
            }, true);
            return b4 ? this : this.remove()
        },detach: function(e) {
            return this.remove(e, true)
        },domManip: function(cc, ch, b5) {
            cc = aH.apply([], cc);
            var ca, b6, e, b8, cf, cb, b9 = 0, b7 = this.length, ce = this, cg = b7 - 1, cd = cc[0], b4 = bJ.isFunction(cd);
            if (b4 || !(b7 <= 1 || typeof cd !== "string" || bJ.support.checkClone || !bU.test(cd))) {
                return this.each(function(cj) {
                    var ci = ce.eq(cj);
                    if (b4) {
                        cc[0] = cd.call(this, cj, ci.html())
                    }
                    ci.domManip(cc, ch, b5)
                })
            }
            if (b7) {
                cb = bJ.buildFragment(cc, this[0].ownerDocument, false, !b5 && this);
                ca = cb.firstChild;
                if (cb.childNodes.length === 1) {
                    cb = ca
                }
                if (ca) {
                    b8 = bJ.map(k(cb, "script"), t);
                    e = b8.length;
                    for (; b9 < b7; b9++) {
                        b6 = cb;
                        if (b9 !== cg) {
                            b6 = bJ.clone(b6, true, true);
                            if (e) {
                                bJ.merge(b8, k(b6, "script"))
                            }
                        }
                        ch.call(this[b9], b6, b9)
                    }
                    if (e) {
                        cf = b8[b8.length - 1].ownerDocument;
                        bJ.map(b8, bd);
                        for (b9 = 0; b9 < e; b9++) {
                            b6 = b8[b9];
                            if (bz.test(b6.type || "") && !bJ._data(b6, "globalEval") && bJ.contains(cf, b6)) {
                                if (b6.src) {
                                    bJ._evalUrl(b6.src)
                                } else {
                                    bJ.globalEval((b6.text || b6.textContent || b6.innerHTML || "").replace(aJ, ""))
                                }
                            }
                        }
                    }
                    cb = ca = null
                }
            }
            return this
        }});
    function a0(b4, e) {
        return bJ.nodeName(b4, "table") && bJ.nodeName(e.nodeType === 1 ? e : e.firstChild, "tr") ? b4.getElementsByTagName("tbody")[0] || b4.appendChild(b4.ownerDocument.createElement("tbody")) : b4
    }
    function t(e) {
        e.type = (bJ.find.attr(e, "type") !== null) + "/" + e.type;
        return e
    }
    function bd(b4) {
        var e = aq.exec(b4.type);
        if (e) {
            b4.type = e[1]
        } else {
            b4.removeAttribute("type")
        }
        return b4
    }
    function bs(e, b5) {
        var b6, b4 = 0;
        for (; (b6 = e[b4]) != null; b4++) {
            bJ._data(b6, "globalEval", !b5 || bJ._data(b5[b4], "globalEval"))
        }
    }
    function ar(ca, b4) {
        if (b4.nodeType !== 1 || !bJ.hasData(ca)) {
            return
        }
        var b7, b6, e, b9 = bJ._data(ca), b8 = bJ._data(b4, b9), b5 = b9.events;
        if (b5) {
            delete b8.handle;
            b8.events = {};
            for (b7 in b5) {
                for (b6 = 0, e = b5[b7].length; b6 < e; b6++) {
                    bJ.event.add(b4, b7, b5[b7][b6])
                }
            }
        }
        if (b8.data) {
            b8.data = bJ.extend({}, b8.data)
        }
    }
    function P(b7, b4) {
        var b8, b6, b5;
        if (b4.nodeType !== 1) {
            return
        }
        b8 = b4.nodeName.toLowerCase();
        if (!bJ.support.noCloneEvent && b4[bJ.expando]) {
            b5 = bJ._data(b4);
            for (b6 in b5.events) {
                bJ.removeEvent(b4, b6, b5.handle)
            }
            b4.removeAttribute(bJ.expando)
        }
        if (b8 === "script" && b4.text !== b7.text) {
            t(b4).text = b7.text;
            bd(b4)
        } else {
            if (b8 === "object") {
                if (b4.parentNode) {
                    b4.outerHTML = b7.outerHTML
                }
                if (bJ.support.html5Clone && (b7.innerHTML && !bJ.trim(b4.innerHTML))) {
                    b4.innerHTML = b7.innerHTML
                }
            } else {
                if (b8 === "input" && q.test(b7.type)) {
                    b4.defaultChecked = b4.checked = b7.checked;
                    if (b4.value !== b7.value) {
                        b4.value = b7.value
                    }
                } else {
                    if (b8 === "option") {
                        b4.defaultSelected = b4.selected = b7.defaultSelected
                    } else {
                        if (b8 === "input" || b8 === "textarea") {
                            b4.defaultValue = b7.defaultValue
                        }
                    }
                }
            }
        }
    }
    bJ.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, b4) {
        bJ.fn[e] = function(b5) {
            var b6, b8 = 0, b7 = [], ca = bJ(b5), b9 = ca.length - 1;
            for (; b8 <= b9; b8++) {
                b6 = b8 === b9 ? this : this.clone(true);
                bJ(ca[b8])[b4](b6);
                an.apply(b7, b6.get())
            }
            return this.pushStack(b7)
        }
    });
    function k(b6, e) {
        var b4, b7, b5 = 0, b8 = typeof b6.getElementsByTagName !== aB ? b6.getElementsByTagName(e || "*") : typeof b6.querySelectorAll !== aB ? b6.querySelectorAll(e || "*") : aF;
        if (!b8) {
            for (b8 = [], b4 = b6.childNodes || b6; (b7 = b4[b5]) != null; b5++) {
                if (!e || bJ.nodeName(b7, e)) {
                    b8.push(b7)
                } else {
                    bJ.merge(b8, k(b7, e))
                }
            }
        }
        return e === aF || e && bJ.nodeName(b6, e) ? bJ.merge([b6], b8) : b8
    }
    function bV(e) {
        if (q.test(e.type)) {
            e.defaultChecked = e.checked
        }
    }
    bJ.extend({clone: function(b4, b6, e) {
            var b8, b5, cb, b7, b9, ca = bJ.contains(b4.ownerDocument, b4);
            if (bJ.support.html5Clone || bJ.isXMLDoc(b4) || !J.test("<" + b4.nodeName + ">")) {
                cb = b4.cloneNode(true)
            } else {
                j.innerHTML = b4.outerHTML;
                j.removeChild(cb = j.firstChild)
            }
            if ((!bJ.support.noCloneEvent || !bJ.support.noCloneChecked) && (b4.nodeType === 1 || b4.nodeType === 11) && !bJ.isXMLDoc(b4)) {
                b8 = k(cb);
                b9 = k(b4);
                for (b7 = 0; (b5 = b9[b7]) != null; ++b7) {
                    if (b8[b7]) {
                        P(b5, b8[b7])
                    }
                }
            }
            if (b6) {
                if (e) {
                    b9 = b9 || k(b4);
                    b8 = b8 || k(cb);
                    for (b7 = 0; (b5 = b9[b7]) != null; b7++) {
                        ar(b5, b8[b7])
                    }
                } else {
                    ar(b4, cb)
                }
            }
            b8 = k(cb, "script");
            if (b8.length > 0) {
                bs(b8, !ca && k(b4, "script"))
            }
            b8 = b9 = b5 = null;
            return cb
        },buildFragment: function(b4, b6, cb, cg) {
            var cc, b8, ca, cf, ch, ce, b5, b9 = b4.length, b7 = z(b6), e = [], cd = 0;
            for (; cd < b9; cd++) {
                b8 = b4[cd];
                if (b8 || b8 === 0) {
                    if (bJ.type(b8) === "object") {
                        bJ.merge(e, b8.nodeType ? [b8] : b8)
                    } else {
                        if (!I.test(b8)) {
                            e.push(b6.createTextNode(b8))
                        } else {
                            cf = cf || b7.appendChild(b6.createElement("div"));
                            ch = (m.exec(b8) || ["", ""])[1].toLowerCase();
                            b5 = S[ch] || S._default;
                            cf.innerHTML = b5[1] + b8.replace(aC, "<$1></$2>") + b5[2];
                            cc = b5[0];
                            while (cc--) {
                                cf = cf.lastChild
                            }
                            if (!bJ.support.leadingWhitespace && b3.test(b8)) {
                                e.push(b6.createTextNode(b3.exec(b8)[0]))
                            }
                            if (!bJ.support.tbody) {
                                b8 = ch === "table" && !bY.test(b8) ? cf.firstChild : b5[1] === "<table>" && !bY.test(b8) ? cf : 0;
                                cc = b8 && b8.childNodes.length;
                                while (cc--) {
                                    if (bJ.nodeName((ce = b8.childNodes[cc]), "tbody") && !ce.childNodes.length) {
                                        b8.removeChild(ce)
                                    }
                                }
                            }
                            bJ.merge(e, cf.childNodes);
                            cf.textContent = "";
                            while (cf.firstChild) {
                                cf.removeChild(cf.firstChild)
                            }
                            cf = b7.lastChild
                        }
                    }
                }
            }
            if (cf) {
                b7.removeChild(cf)
            }
            if (!bJ.support.appendChecked) {
                bJ.grep(k(e, "input"), bV)
            }
            cd = 0;
            while ((b8 = e[cd++])) {
                if (cg && bJ.inArray(b8, cg) !== -1) {
                    continue
                }
                ca = bJ.contains(b8.ownerDocument, b8);
                cf = k(b7.appendChild(b8), "script");
                if (ca) {
                    bs(cf)
                }
                if (cb) {
                    cc = 0;
                    while ((b8 = cf[cc++])) {
                        if (bz.test(b8.type || "")) {
                            cb.push(b8)
                        }
                    }
                }
            }
            cf = null;
            return b7
        },cleanData: function(b4, cc) {
            var b6, cb, b5, b7, b8 = 0, cd = bJ.expando, e = bJ.cache, b9 = bJ.support.deleteExpando, ca = bJ.event.special;
            for (; (b6 = b4[b8]) != null; b8++) {
                if (cc || bJ.acceptData(b6)) {
                    b5 = b6[cd];
                    b7 = b5 && e[b5];
                    if (b7) {
                        if (b7.events) {
                            for (cb in b7.events) {
                                if (ca[cb]) {
                                    bJ.event.remove(b6, cb)
                                } else {
                                    bJ.removeEvent(b6, cb, b7.handle)
                                }
                            }
                        }
                        if (e[b5]) {
                            delete e[b5];
                            if (b9) {
                                delete b6[cd]
                            } else {
                                if (typeof b6.removeAttribute !== aB) {
                                    b6.removeAttribute(cd)
                                } else {
                                    b6[cd] = null
                                }
                            }
                            a6.push(b5)
                        }
                    }
                }
            }
        },_evalUrl: function(e) {
            return bJ.ajax({url: e,type: "GET",dataType: "script",async: false,global: false,"throws": true})
        }});
    bJ.fn.extend({wrapAll: function(e) {
            if (bJ.isFunction(e)) {
                return this.each(function(b5) {
                    bJ(this).wrapAll(e.call(this, b5))
                })
            }
            if (this[0]) {
                var b4 = bJ(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    b4.insertBefore(this[0])
                }
                b4.map(function() {
                    var b5 = this;
                    while (b5.firstChild && b5.firstChild.nodeType === 1) {
                        b5 = b5.firstChild
                    }
                    return b5
                }).append(this)
            }
            return this
        },wrapInner: function(e) {
            if (bJ.isFunction(e)) {
                return this.each(function(b4) {
                    bJ(this).wrapInner(e.call(this, b4))
                })
            }
            return this.each(function() {
                var b4 = bJ(this), b5 = b4.contents();
                if (b5.length) {
                    b5.wrapAll(e)
                } else {
                    b4.append(e)
                }
            })
        },wrap: function(e) {
            var b4 = bJ.isFunction(e);
            return this.each(function(b5) {
                bJ(this).wrapAll(b4 ? e.call(this, b5) : e)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                if (!bJ.nodeName(this, "body")) {
                    bJ(this).replaceWith(this.childNodes)
                }
            }).end()
        }});
    var aD, bo, D, bg = /alpha\([^)]*\)/i, aS = /opacity\s*=\s*([^)]*)/, bn = /^(top|right|bottom|left)$/, E = /^(none|table(?!-c[ea]).+)/, aX = /^margin/, a9 = new RegExp("^(" + bA + ")(.*)$", "i"), V = new RegExp("^(" + bA + ")(?!px)[a-z%]+$", "i"), R = new RegExp("^([+-])=(" + bA + ")", "i"), bj = {BODY: "block"}, bc = {position: "absolute",visibility: "hidden",display: "block"}, bC = {letterSpacing: 0,fontWeight: 400}, bT = ["Top", "Right", "Bottom", "Left"], au = ["Webkit", "O", "Moz", "ms"];
    function b(b6, b4) {
        if (b4 in b6) {
            return b4
        }
        var b7 = b4.charAt(0).toUpperCase() + b4.slice(1), e = b4, b5 = au.length;
        while (b5--) {
            b4 = au[b5] + b7;
            if (b4 in b6) {
                return b4
            }
        }
        return e
    }
    function O(b4, e) {
        b4 = e || b4;
        return bJ.css(b4, "display") === "none" || !bJ.contains(b4.ownerDocument, b4)
    }
    function p(b9, e) {
        var ca, b7, b8, b4 = [], b5 = 0, b6 = b9.length;
        for (; b5 < b6; b5++) {
            b7 = b9[b5];
            if (!b7.style) {
                continue
            }
            b4[b5] = bJ._data(b7, "olddisplay");
            ca = b7.style.display;
            if (e) {
                if (!b4[b5] && ca === "none") {
                    b7.style.display = ""
                }
                if (b7.style.display === "" && O(b7)) {
                    b4[b5] = bJ._data(b7, "olddisplay", bE(b7.nodeName))
                }
            } else {
                if (!b4[b5]) {
                    b8 = O(b7);
                    if (ca && ca !== "none" || !b8) {
                        bJ._data(b7, "olddisplay", b8 ? ca : bJ.css(b7, "display"))
                    }
                }
            }
        }
        for (b5 = 0; b5 < b6; b5++) {
            b7 = b9[b5];
            if (!b7.style) {
                continue
            }
            if (!e || b7.style.display === "none" || b7.style.display === "") {
                b7.style.display = e ? b4[b5] || "" : "none"
            }
        }
        return b9
    }
    bJ.fn.extend({css: function(e, b4) {
            return bJ.access(this, function(b9, b6, ca) {
                var b5, b8, cb = {}, b7 = 0;
                if (bJ.isArray(b6)) {
                    b8 = bo(b9);
                    b5 = b6.length;
                    for (; b7 < b5; b7++) {
                        cb[b6[b7]] = bJ.css(b9, b6[b7], false, b8)
                    }
                    return cb
                }
                return ca !== aF ? bJ.style(b9, b6, ca) : bJ.css(b9, b6)
            }, e, b4, arguments.length > 1)
        },show: function() {
            return p(this, true)
        },hide: function() {
            return p(this)
        },toggle: function(e) {
            if (typeof e === "boolean") {
                return e ? this.show() : this.hide()
            }
            return this.each(function() {
                if (O(this)) {
                    bJ(this).show()
                } else {
                    bJ(this).hide()
                }
            })
        }});
    bJ.extend({cssHooks: {opacity: {get: function(b5, b4) {
                    if (b4) {
                        var e = D(b5, "opacity");
                        return e === "" ? "1" : e
                    }
                }}},cssNumber: {columnCount: true,fillOpacity: true,fontWeight: true,lineHeight: true,opacity: true,order: true,orphans: true,widows: true,zIndex: true,zoom: true},cssProps: {"float": bJ.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(b6, b5, cc, b7) {
            if (!b6 || b6.nodeType === 3 || b6.nodeType === 8 || !b6.style) {
                return
            }
            var ca, cb, cd, b8 = bJ.camelCase(b5), b4 = b6.style;
            b5 = bJ.cssProps[b8] || (bJ.cssProps[b8] = b(b4, b8));
            cd = bJ.cssHooks[b5] || bJ.cssHooks[b8];
            if (cc !== aF) {
                cb = typeof cc;
                if (cb === "string" && (ca = R.exec(cc))) {
                    cc = (ca[1] + 1) * ca[2] + parseFloat(bJ.css(b6, b5));
                    cb = "number"
                }
                if (cc == null || cb === "number" && isNaN(cc)) {
                    return
                }
                if (cb === "number" && !bJ.cssNumber[b8]) {
                    cc += "px"
                }
                if (!bJ.support.clearCloneStyle && cc === "" && b5.indexOf("background") === 0) {
                    b4[b5] = "inherit"
                }
                if (!cd || !("set" in cd) || (cc = cd.set(b6, cc, b7)) !== aF) {
                    try {
                        b4[b5] = cc
                    } catch (b9) {
                    }
                }
            } else {
                if (cd && "get" in cd && (ca = cd.get(b6, false, b7)) !== aF) {
                    return ca
                }
                return b4[b5]
            }
        },css: function(b9, b7, b4, b8) {
            var b6, ca, e, b5 = bJ.camelCase(b7);
            b7 = bJ.cssProps[b5] || (bJ.cssProps[b5] = b(b9.style, b5));
            e = bJ.cssHooks[b7] || bJ.cssHooks[b5];
            if (e && "get" in e) {
                ca = e.get(b9, true, b4)
            }
            if (ca === aF) {
                ca = D(b9, b7, b8)
            }
            if (ca === "normal" && b7 in bC) {
                ca = bC[b7]
            }
            if (b4 === "" || b4) {
                b6 = parseFloat(ca);
                return b4 === true || bJ.isNumeric(b6) ? b6 || 0 : ca
            }
            return ca
        }});
    if (a2.getComputedStyle) {
        bo = function(e) {
            return a2.getComputedStyle(e, null)
        };
        D = function(b7, b5, b9) {
            var b6, b4, cb, b8 = b9 || bo(b7), ca = b8 ? b8.getPropertyValue(b5) || b8[b5] : aF, e = b7.style;
            if (b8) {
                if (ca === "" && !bJ.contains(b7.ownerDocument, b7)) {
                    ca = bJ.style(b7, b5)
                }
                if (V.test(ca) && aX.test(b5)) {
                    b6 = e.width;
                    b4 = e.minWidth;
                    cb = e.maxWidth;
                    e.minWidth = e.maxWidth = e.width = ca;
                    ca = b8.width;
                    e.width = b6;
                    e.minWidth = b4;
                    e.maxWidth = cb
                }
            }
            return ca
        }
    } else {
        if (l.documentElement.currentStyle) {
            bo = function(e) {
                return e.currentStyle
            };
            D = function(b6, b4, b9) {
                var b5, b8, ca, b7 = b9 || bo(b6), cb = b7 ? b7[b4] : aF, e = b6.style;
                if (cb == null && e && e[b4]) {
                    cb = e[b4]
                }
                if (V.test(cb) && !bn.test(b4)) {
                    b5 = e.left;
                    b8 = b6.runtimeStyle;
                    ca = b8 && b8.left;
                    if (ca) {
                        b8.left = b6.currentStyle.left
                    }
                    e.left = b4 === "fontSize" ? "1em" : cb;
                    cb = e.pixelLeft + "px";
                    e.left = b5;
                    if (ca) {
                        b8.left = ca
                    }
                }
                return cb === "" ? "auto" : cb
            }
        }
    }
    function aI(e, b5, b6) {
        var b4 = a9.exec(b5);
        return b4 ? Math.max(0, b4[1] - (b6 || 0)) + (b4[2] || "px") : b5
    }
    function av(b7, b4, e, b9, b6) {
        var b5 = e === (b9 ? "border" : "content") ? 4 : b4 === "width" ? 1 : 0, b8 = 0;
        for (; b5 < 4; b5 += 2) {
            if (e === "margin") {
                b8 += bJ.css(b7, e + bT[b5], true, b6)
            }
            if (b9) {
                if (e === "content") {
                    b8 -= bJ.css(b7, "padding" + bT[b5], true, b6)
                }
                if (e !== "margin") {
                    b8 -= bJ.css(b7, "border" + bT[b5] + "Width", true, b6)
                }
            } else {
                b8 += bJ.css(b7, "padding" + bT[b5], true, b6);
                if (e !== "padding") {
                    b8 += bJ.css(b7, "border" + bT[b5] + "Width", true, b6)
                }
            }
        }
        return b8
    }
    function u(b7, b4, e) {
        var b6 = true, b8 = b4 === "width" ? b7.offsetWidth : b7.offsetHeight, b5 = bo(b7), b9 = bJ.support.boxSizing && bJ.css(b7, "boxSizing", false, b5) === "border-box";
        if (b8 <= 0 || b8 == null) {
            b8 = D(b7, b4, b5);
            if (b8 < 0 || b8 == null) {
                b8 = b7.style[b4]
            }
            if (V.test(b8)) {
                return b8
            }
            b6 = b9 && (bJ.support.boxSizingReliable || b8 === b7.style[b4]);
            b8 = parseFloat(b8) || 0
        }
        return (b8 + av(b7, b4, e || (b9 ? "border" : "content"), b6, b5)) + "px"
    }
    function bE(b5) {
        var b4 = l, e = bj[b5];
        if (!e) {
            e = a1(b5, b4);
            if (e === "none" || !e) {
                aD = (aD || bJ("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b4.documentElement);
                b4 = (aD[0].contentWindow || aD[0].contentDocument).document;
                b4.write("<!doctype html><html><body>");
                b4.close();
                e = a1(b5, b4);
                aD.detach()
            }
            bj[b5] = e
        }
        return e
    }
    function a1(e, b6) {
        var b4 = bJ(b6.createElement(e)).appendTo(b6.body), b5 = bJ.css(b4[0], "display");
        b4.remove();
        return b5
    }
    bJ.each(["height", "width"], function(b4, e) {
        bJ.cssHooks[e] = {get: function(b7, b6, b5) {
                if (b6) {
                    return b7.offsetWidth === 0 && E.test(bJ.css(b7, "display")) ? bJ.swap(b7, bc, function() {
                        return u(b7, e, b5)
                    }) : u(b7, e, b5)
                }
            },set: function(b7, b8, b5) {
                var b6 = b5 && bo(b7);
                return aI(b7, b8, b5 ? av(b7, e, b5, bJ.support.boxSizing && bJ.css(b7, "boxSizing", false, b6) === "border-box", b6) : 0)
            }}
    });
    if (!bJ.support.opacity) {
        bJ.cssHooks.opacity = {get: function(b4, e) {
                return aS.test((e && b4.currentStyle ? b4.currentStyle.filter : b4.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
            },set: function(b7, b8) {
                var b6 = b7.style, b4 = b7.currentStyle, e = bJ.isNumeric(b8) ? "alpha(opacity=" + b8 * 100 + ")" : "", b5 = b4 && b4.filter || b6.filter || "";
                b6.zoom = 1;
                if ((b8 >= 1 || b8 === "") && bJ.trim(b5.replace(bg, "")) === "" && b6.removeAttribute) {
                    b6.removeAttribute("filter");
                    if (b8 === "" || b4 && !b4.filter) {
                        return
                    }
                }
                b6.filter = bg.test(b5) ? b5.replace(bg, e) : b5 + " " + e
            }}
    }
    bJ(function() {
        if (!bJ.support.reliableMarginRight) {
            bJ.cssHooks.marginRight = {get: function(b4, e) {
                    if (e) {
                        return bJ.swap(b4, {display: "inline-block"}, D, [b4, "marginRight"])
                    }
                }}
        }
        if (!bJ.support.pixelPosition && bJ.fn.position) {
            bJ.each(["top", "left"], function(e, b4) {
                bJ.cssHooks[b4] = {get: function(b6, b5) {
                        if (b5) {
                            b5 = D(b6, b4);
                            return V.test(b5) ? bJ(b6).position()[b4] + "px" : b5
                        }
                    }}
            })
        }
    });
    if (bJ.expr && bJ.expr.filters) {
        bJ.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || (!bJ.support.reliableHiddenOffsets && ((e.style && e.style.display) || bJ.css(e, "display")) === "none")
        };
        bJ.expr.filters.visible = function(e) {
            return !bJ.expr.filters.hidden(e)
        }
    }
    bJ.each({margin: "",padding: "",border: "Width"}, function(e, b4) {
        bJ.cssHooks[e + b4] = {expand: function(b7) {
                var b6 = 0, b5 = {}, b8 = typeof b7 === "string" ? b7.split(" ") : [b7];
                for (; b6 < 4; b6++) {
                    b5[e + bT[b6] + b4] = b8[b6] || b8[b6 - 2] || b8[0]
                }
                return b5
            }};
        if (!aX.test(e)) {
            bJ.cssHooks[e + b4].set = aI
        }
    });
    var bv = /%20/g, aQ = /\[\]$/, T = /\r?\n/g, c = /^(?:submit|button|image|reset|file)$/i, at = /^(?:input|select|textarea|keygen)/i;
    bJ.fn.extend({serialize: function() {
            return bJ.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var e = bJ.prop(this, "elements");
                return e ? bJ.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !bJ(this).is(":disabled") && at.test(this.nodeName) && !c.test(e) && (this.checked || !q.test(e))
            }).map(function(e, b4) {
                var b5 = bJ(this).val();
                return b5 == null ? null : bJ.isArray(b5) ? bJ.map(b5, function(b6) {
                    return {name: b4.name,value: b6.replace(T, "\r\n")}
                }) : {name: b4.name,value: b5.replace(T, "\r\n")}
            }).get()
        }});
    bJ.param = function(e, b5) {
        var b6, b4 = [], b7 = function(b8, b9) {
            b9 = bJ.isFunction(b9) ? b9() : (b9 == null ? "" : b9);
            b4[b4.length] = encodeURIComponent(b8) + "=" + encodeURIComponent(b9)
        };
        if (b5 === aF) {
            b5 = bJ.ajaxSettings && bJ.ajaxSettings.traditional
        }
        if (bJ.isArray(e) || (e.jquery && !bJ.isPlainObject(e))) {
            bJ.each(e, function() {
                b7(this.name, this.value)
            })
        } else {
            for (b6 in e) {
                i(b6, e[b6], b5, b7)
            }
        }
        return b4.join("&").replace(bv, "+")
    };
    function i(b5, b7, b4, b6) {
        var e;
        if (bJ.isArray(b7)) {
            bJ.each(b7, function(b9, b8) {
                if (b4 || aQ.test(b5)) {
                    b6(b5, b8)
                } else {
                    i(b5 + "[" + (typeof b8 === "object" ? b9 : "") + "]", b8, b4, b6)
                }
            })
        } else {
            if (!b4 && bJ.type(b7) === "object") {
                for (e in b7) {
                    i(b5 + "[" + e + "]", b7[e], b4, b6)
                }
            } else {
                b6(b5, b7)
            }
        }
    }
    bJ.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(b4, e) {
        bJ.fn[e] = function(b6, b5) {
            return arguments.length > 0 ? this.on(e, null, b6, b5) : this.trigger(e)
        }
    });
    bJ.fn.extend({hover: function(e, b4) {
            return this.mouseenter(e).mouseleave(b4 || e)
        },bind: function(e, b5, b4) {
            return this.on(e, null, b5, b4)
        },unbind: function(e, b4) {
            return this.off(e, null, b4)
        },delegate: function(e, b4, b6, b5) {
            return this.on(b4, e, b6, b5)
        },undelegate: function(e, b4, b5) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(b4, e || "**", b5)
        }});
    var b2, X, bO = bJ.now(), ay = /\?/, ao = /#.*$/, N = /([?&])_=[^&]*/, af = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, A = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, o = /^(?:GET|HEAD)$/, aG = /^\/\//, aT = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, b1 = bJ.fn.load, v = {}, a7 = {}, aV = "*/".concat("*");
    try {
        X = aK.href
    } catch (bf) {
        X = l.createElement("a");
        X.href = "";
        X = X.href
    }
    b2 = aT.exec(X.toLowerCase()) || [];
    function bL(e) {
        return function(b7, b8) {
            if (typeof b7 !== "string") {
                b8 = b7;
                b7 = "*"
            }
            var b4, b5 = 0, b6 = b7.toLowerCase().match(ab) || [];
            if (bJ.isFunction(b8)) {
                while ((b4 = b6[b5++])) {
                    if (b4[0] === "+") {
                        b4 = b4.slice(1) || "*";
                        (e[b4] = e[b4] || []).unshift(b8)
                    } else {
                        (e[b4] = e[b4] || []).push(b8)
                    }
                }
            }
        }
    }
    function n(e, b5, b9, b6) {
        var b4 = {}, b7 = (e === a7);
        function b8(ca) {
            var cb;
            b4[ca] = true;
            bJ.each(e[ca] || [], function(cd, cc) {
                var ce = cc(b5, b9, b6);
                if (typeof ce === "string" && !b7 && !b4[ce]) {
                    b5.dataTypes.unshift(ce);
                    b8(ce);
                    return false
                } else {
                    if (b7) {
                        return !(cb = ce)
                    }
                }
            });
            return cb
        }
        return b8(b5.dataTypes[0]) || !b4["*"] && b8("*")
    }
    function r(b5, b6) {
        var e, b4, b7 = bJ.ajaxSettings.flatOptions || {};
        for (b4 in b6) {
            if (b6[b4] !== aF) {
                (b7[b4] ? b5 : (e || (e = {})))[b4] = b6[b4]
            }
        }
        if (e) {
            bJ.extend(true, b5, e)
        }
        return b5
    }
    bJ.fn.load = function(b6, b9, ca) {
        if (typeof b6 !== "string" && b1) {
            return b1.apply(this, arguments)
        }
        var e, b5, b7, b4 = this, b8 = b6.indexOf(" ");
        if (b8 >= 0) {
            e = b6.slice(b8, b6.length);
            b6 = b6.slice(0, b8)
        }
        if (bJ.isFunction(b9)) {
            ca = b9;
            b9 = aF
        } else {
            if (b9 && typeof b9 === "object") {
                b7 = "POST"
            }
        }
        if (b4.length > 0) {
            bJ.ajax({url: b6,type: b7,dataType: "html",data: b9}).done(function(cb) {
                b5 = arguments;
                b4.html(e ? bJ("<div>").append(bJ.parseHTML(cb)).find(e) : cb)
            }).complete(ca && function(cc, cb) {
                b4.each(ca, b5 || [cc.responseText, cb, cc])
            })
        }
        return this
    };
    bJ.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, b4) {
        bJ.fn[b4] = function(b5) {
            return this.on(b4, b5)
        }
    });
    bJ.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: X,type: "GET",isLocal: A.test(b2[1]),global: true,processData: true,async: true,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": aV,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": true,"text json": bJ.parseJSON,"text xml": bJ.parseXML},flatOptions: {url: true,context: true}},ajaxSetup: function(b4, e) {
            return e ? r(r(b4, bJ.ajaxSettings), e) : r(bJ.ajaxSettings, b4)
        },ajaxPrefilter: bL(v),ajaxTransport: bL(a7),ajax: function(b8, b5) {
            if (typeof b8 === "object") {
                b5 = b8;
                b8 = aF
            }
            b5 = b5 || {};
            var ch, cj, b9, co, cd, b4, ck, b6, cc = bJ.ajaxSetup({}, b5), cq = cc.context || cc, cf = cc.context && (cq.nodeType || cq.jquery) ? bJ(cq) : bJ.event, cp = bJ.Deferred(), cm = bJ.Callbacks("once memory"), ca = cc.statusCode || {}, cg = {}, cn = {}, b7 = 0, cb = "canceled", ci = {readyState: 0,getResponseHeader: function(cr) {
                    var e;
                    if (b7 === 2) {
                        if (!b6) {
                            b6 = {};
                            while ((e = af.exec(co))) {
                                b6[e[1].toLowerCase()] = e[2]
                            }
                        }
                        e = b6[cr.toLowerCase()]
                    }
                    return e == null ? null : e
                },getAllResponseHeaders: function() {
                    return b7 === 2 ? co : null
                },setRequestHeader: function(cr, cs) {
                    var e = cr.toLowerCase();
                    if (!b7) {
                        cr = cn[e] = cn[e] || cr;
                        cg[cr] = cs
                    }
                    return this
                },overrideMimeType: function(e) {
                    if (!b7) {
                        cc.mimeType = e
                    }
                    return this
                },statusCode: function(cr) {
                    var e;
                    if (cr) {
                        if (b7 < 2) {
                            for (e in cr) {
                                ca[e] = [ca[e], cr[e]]
                            }
                        } else {
                            ci.always(cr[ci.status])
                        }
                    }
                    return this
                },abort: function(cr) {
                    var e = cr || cb;
                    if (ck) {
                        ck.abort(e)
                    }
                    ce(0, e);
                    return this
                }};
            cp.promise(ci).complete = cm.add;
            ci.success = ci.done;
            ci.error = ci.fail;
            cc.url = ((b8 || cc.url || X) + "").replace(ao, "").replace(aG, b2[1] + "//");
            cc.type = b5.method || b5.type || cc.method || cc.type;
            cc.dataTypes = bJ.trim(cc.dataType || "*").toLowerCase().match(ab) || [""];
            if (cc.crossDomain == null) {
                ch = aT.exec(cc.url.toLowerCase());
                cc.crossDomain = !!(ch && (ch[1] !== b2[1] || ch[2] !== b2[2] || (ch[3] || (ch[1] === "http:" ? "80" : "443")) !== (b2[3] || (b2[1] === "http:" ? "80" : "443"))))
            }
            if (cc.data && cc.processData && typeof cc.data !== "string") {
                cc.data = bJ.param(cc.data, cc.traditional)
            }
            n(v, cc, b5, ci);
            if (b7 === 2) {
                return ci
            }
            b4 = cc.global;
            if (b4 && bJ.active++ === 0) {
                bJ.event.trigger("ajaxStart")
            }
            cc.type = cc.type.toUpperCase();
            cc.hasContent = !o.test(cc.type);
            b9 = cc.url;
            if (!cc.hasContent) {
                if (cc.data) {
                    b9 = (cc.url += (ay.test(b9) ? "&" : "?") + cc.data);
                    delete cc.data
                }
                if (cc.cache === false) {
                    cc.url = N.test(b9) ? b9.replace(N, "$1_=" + bO++) : b9 + (ay.test(b9) ? "&" : "?") + "_=" + bO++
                }
            }
            if (cc.ifModified) {
                if (bJ.lastModified[b9]) {
                    ci.setRequestHeader("If-Modified-Since", bJ.lastModified[b9])
                }
                if (bJ.etag[b9]) {
                    ci.setRequestHeader("If-None-Match", bJ.etag[b9])
                }
            }
            if (cc.data && cc.hasContent && cc.contentType !== false || b5.contentType) {
                ci.setRequestHeader("Content-Type", cc.contentType)
            }
            ci.setRequestHeader("Accept", cc.dataTypes[0] && cc.accepts[cc.dataTypes[0]] ? cc.accepts[cc.dataTypes[0]] + (cc.dataTypes[0] !== "*" ? ", " + aV + "; q=0.01" : "") : cc.accepts["*"]);
            for (cj in cc.headers) {
                ci.setRequestHeader(cj, cc.headers[cj])
            }
            if (cc.beforeSend && (cc.beforeSend.call(cq, ci, cc) === false || b7 === 2)) {
                return ci.abort()
            }
            cb = "abort";
            for (cj in {success: 1,error: 1,complete: 1}) {
                ci[cj](cc[cj])
            }
            ck = n(a7, cc, b5, ci);
            if (!ck) {
                ce(-1, "No Transport")
            } else {
                ci.readyState = 1;
                if (b4) {
                    cf.trigger("ajaxSend", [ci, cc])
                }
                if (cc.async && cc.timeout > 0) {
                    cd = setTimeout(function() {
                        ci.abort("timeout")
                    }, cc.timeout)
                }
                try {
                    b7 = 1;
                    ck.send(cg, ce)
                } catch (cl) {
                    if (b7 < 2) {
                        ce(-1, cl)
                    } else {
                        throw cl
                    }
                }
            }
            function ce(cv, cr, cw, ct) {
                var e, cz, cx, cu, cy, cs = cr;
                if (b7 === 2) {
                    return
                }
                b7 = 2;
                if (cd) {
                    clearTimeout(cd)
                }
                ck = aF;
                co = ct || "";
                ci.readyState = cv > 0 ? 4 : 0;
                e = cv >= 200 && cv < 300 || cv === 304;
                if (cw) {
                    cu = g(cc, ci, cw)
                }
                cu = ae(cc, cu, ci, e);
                if (e) {
                    if (cc.ifModified) {
                        cy = ci.getResponseHeader("Last-Modified");
                        if (cy) {
                            bJ.lastModified[b9] = cy
                        }
                        cy = ci.getResponseHeader("etag");
                        if (cy) {
                            bJ.etag[b9] = cy
                        }
                    }
                    if (cv === 204 || cc.type === "HEAD") {
                        cs = "nocontent"
                    } else {
                        if (cv === 304) {
                            cs = "notmodified"
                        } else {
                            cs = cu.state;
                            cz = cu.data;
                            cx = cu.error;
                            e = !cx
                        }
                    }
                } else {
                    cx = cs;
                    if (cv || !cs) {
                        cs = "error";
                        if (cv < 0) {
                            cv = 0
                        }
                    }
                }
                ci.status = cv;
                ci.statusText = (cr || cs) + "";
                if (e) {
                    cp.resolveWith(cq, [cz, cs, ci])
                } else {
                    cp.rejectWith(cq, [ci, cs, cx])
                }
                ci.statusCode(ca);
                ca = aF;
                if (b4) {
                    cf.trigger(e ? "ajaxSuccess" : "ajaxError", [ci, cc, e ? cz : cx])
                }
                cm.fireWith(cq, [ci, cs]);
                if (b4) {
                    cf.trigger("ajaxComplete", [ci, cc]);
                    if (!(--bJ.active)) {
                        bJ.event.trigger("ajaxStop")
                    }
                }
            }
            return ci
        },getJSON: function(e, b4, b5) {
            return bJ.get(e, b4, b5, "json")
        },getScript: function(e, b4) {
            return bJ.get(e, aF, b4, "script")
        }});
    bJ.each(["get", "post"], function(e, b4) {
        bJ[b4] = function(b5, b7, b8, b6) {
            if (bJ.isFunction(b7)) {
                b6 = b6 || b8;
                b8 = b7;
                b7 = aF
            }
            return bJ.ajax({url: b5,type: b4,dataType: b6,data: b7,success: b8})
        }
    });
    function g(cb, ca, b7) {
        var e, b6, b5, b8, b4 = cb.contents, b9 = cb.dataTypes;
        while (b9[0] === "*") {
            b9.shift();
            if (b6 === aF) {
                b6 = cb.mimeType || ca.getResponseHeader("Content-Type")
            }
        }
        if (b6) {
            for (b8 in b4) {
                if (b4[b8] && b4[b8].test(b6)) {
                    b9.unshift(b8);
                    break
                }
            }
        }
        if (b9[0] in b7) {
            b5 = b9[0]
        } else {
            for (b8 in b7) {
                if (!b9[0] || cb.converters[b8 + " " + b9[0]]) {
                    b5 = b8;
                    break
                }
                if (!e) {
                    e = b8
                }
            }
            b5 = b5 || e
        }
        if (b5) {
            if (b5 !== b9[0]) {
                b9.unshift(b5)
            }
            return b7[b5]
        }
    }
    function ae(cf, b7, cc, b5) {
        var b4, ca, cd, b8, b6, ce = {}, cb = cf.dataTypes.slice();
        if (cb[1]) {
            for (cd in cf.converters) {
                ce[cd.toLowerCase()] = cf.converters[cd]
            }
        }
        ca = cb.shift();
        while (ca) {
            if (cf.responseFields[ca]) {
                cc[cf.responseFields[ca]] = b7
            }
            if (!b6 && b5 && cf.dataFilter) {
                b7 = cf.dataFilter(b7, cf.dataType)
            }
            b6 = ca;
            ca = cb.shift();
            if (ca) {
                if (ca === "*") {
                    ca = b6
                } else {
                    if (b6 !== "*" && b6 !== ca) {
                        cd = ce[b6 + " " + ca] || ce["* " + ca];
                        if (!cd) {
                            for (b4 in ce) {
                                b8 = b4.split(" ");
                                if (b8[1] === ca) {
                                    cd = ce[b6 + " " + b8[0]] || ce["* " + b8[0]];
                                    if (cd) {
                                        if (cd === true) {
                                            cd = ce[b4]
                                        } else {
                                            if (ce[b4] !== true) {
                                                ca = b8[0];
                                                cb.unshift(b8[1])
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (cd !== true) {
                            if (cd && cf["throws"]) {
                                b7 = cd(b7)
                            } else {
                                try {
                                    b7 = cd(b7)
                                } catch (b9) {
                                    return {state: "parsererror",error: cd ? b9 : "No conversion from " + b6 + " to " + ca}
                                }
                            }
                        }
                    }
                }
            }
        }
        return {state: "success",data: b7}
    }
    bJ.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(e) {
                bJ.globalEval(e);
                return e
            }}});
    bJ.ajaxPrefilter("script", function(e) {
        if (e.cache === aF) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    bJ.ajaxTransport("script", function(b5) {
        if (b5.crossDomain) {
            var e, b4 = l.head || bJ("head")[0] || l.documentElement;
            return {send: function(b6, b7) {
                    e = l.createElement("script");
                    e.async = true;
                    if (b5.scriptCharset) {
                        e.charset = b5.scriptCharset
                    }
                    e.src = b5.url;
                    e.onload = e.onreadystatechange = function(b9, b8) {
                        if (b8 || !e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (e.parentNode) {
                                e.parentNode.removeChild(e)
                            }
                            e = null;
                            if (!b8) {
                                b7(200, "success")
                            }
                        }
                    };
                    b4.insertBefore(e, b4.firstChild)
                },abort: function() {
                    if (e) {
                        e.onload(aF, true)
                    }
                }}
        }
    });
    var bq = [], a5 = /(=)\?(?=&|$)|\?\?/;
    bJ.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var e = bq.pop() || (bJ.expando + "_" + (bO++));
            this[e] = true;
            return e
        }});
    bJ.ajaxPrefilter("json jsonp", function(b6, e, b7) {
        var b9, b4, b5, b8 = b6.jsonp !== false && (a5.test(b6.url) ? "url" : typeof b6.data === "string" && !(b6.contentType || "").indexOf("application/x-www-form-urlencoded") && a5.test(b6.data) && "data");
        if (b8 || b6.dataTypes[0] === "jsonp") {
            b9 = b6.jsonpCallback = bJ.isFunction(b6.jsonpCallback) ? b6.jsonpCallback() : b6.jsonpCallback;
            if (b8) {
                b6[b8] = b6[b8].replace(a5, "$1" + b9)
            } else {
                if (b6.jsonp !== false) {
                    b6.url += (ay.test(b6.url) ? "&" : "?") + b6.jsonp + "=" + b9
                }
            }
            b6.converters["script json"] = function() {
                if (!b5) {
                    bJ.error(b9 + " was not called")
                }
                return b5[0]
            };
            b6.dataTypes[0] = "json";
            b4 = a2[b9];
            a2[b9] = function() {
                b5 = arguments
            };
            b7.always(function() {
                a2[b9] = b4;
                if (b6[b9]) {
                    b6.jsonpCallback = e.jsonpCallback;
                    bq.push(b9)
                }
                if (b5 && bJ.isFunction(b4)) {
                    b4(b5[0])
                }
                b5 = b4 = aF
            });
            return "script"
        }
    });
    var ag, aw, ax = 0, aO = a2.ActiveXObject && function() {
        var e;
        for (e in ag) {
            ag[e](aF, true)
        }
    };
    function bD() {
        try {
            return new a2.XMLHttpRequest()
        } catch (b4) {
        }
    }
    function be() {
        try {
            return new a2.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b4) {
        }
    }
    bJ.ajaxSettings.xhr = a2.ActiveXObject ? function() {
        return !this.isLocal && bD() || be()
    } : bD;
    aw = bJ.ajaxSettings.xhr();
    bJ.support.cors = !!aw && ("withCredentials" in aw);
    aw = bJ.support.ajax = !!aw;
    if (aw) {
        bJ.ajaxTransport(function(e) {
            if (!e.crossDomain || bJ.support.cors) {
                var b4;
                return {send: function(ca, b5) {
                        var b8, b6, b9 = e.xhr();
                        if (e.username) {
                            b9.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            b9.open(e.type, e.url, e.async)
                        }
                        if (e.xhrFields) {
                            for (b6 in e.xhrFields) {
                                b9[b6] = e.xhrFields[b6]
                            }
                        }
                        if (e.mimeType && b9.overrideMimeType) {
                            b9.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !ca["X-Requested-With"]) {
                            ca["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (b6 in ca) {
                                b9.setRequestHeader(b6, ca[b6])
                            }
                        } catch (b7) {
                        }
                        b9.send((e.hasContent && e.data) || null);
                        b4 = function(cd, cc) {
                            var cb, ce, ch, cf;
                            try {
                                if (b4 && (cc || b9.readyState === 4)) {
                                    b4 = aF;
                                    if (b8) {
                                        b9.onreadystatechange = bJ.noop;
                                        if (aO) {
                                            delete ag[b8]
                                        }
                                    }
                                    if (cc) {
                                        if (b9.readyState !== 4) {
                                            b9.abort()
                                        }
                                    } else {
                                        cf = {};
                                        cb = b9.status;
                                        ce = b9.getAllResponseHeaders();
                                        if (typeof b9.responseText === "string") {
                                            cf.text = b9.responseText
                                        }
                                        try {
                                            ch = b9.statusText
                                        } catch (cg) {
                                            ch = ""
                                        }
                                        if (!cb && e.isLocal && !e.crossDomain) {
                                            cb = cf.text ? 200 : 404
                                        } else {
                                            if (cb === 1223) {
                                                cb = 204
                                            }
                                        }
                                    }
                                }
                            } catch (ci) {
                                if (!cc) {
                                    b5(-1, ci)
                                }
                            }
                            if (cf) {
                                b5(cb, ch, cf, ce)
                            }
                        };
                        if (!e.async) {
                            b4()
                        } else {
                            if (b9.readyState === 4) {
                                setTimeout(b4)
                            } else {
                                b8 = ++ax;
                                if (aO) {
                                    if (!ag) {
                                        ag = {};
                                        bJ(a2).unload(aO)
                                    }
                                    ag[b8] = b4
                                }
                                b9.onreadystatechange = b4
                            }
                        }
                    },abort: function() {
                        if (b4) {
                            b4(aF, true)
                        }
                    }}
            }
        })
    }
    var K, ac, bR = /^(?:toggle|show|hide)$/, bK = new RegExp("^(?:([+-])=|)(" + bA + ")([a-z%]*)$", "i"), bQ = /queueHooks$/, aA = [h], aZ = {"*": [function(e, b9) {
                var cb = this.createTween(e, b9), b7 = cb.cur(), b6 = bK.exec(b9), ca = b6 && b6[3] || (bJ.cssNumber[e] ? "" : "px"), b4 = (bJ.cssNumber[e] || ca !== "px" && +b7) && bK.exec(bJ.css(cb.elem, e)), b5 = 1, b8 = 20;
                if (b4 && b4[3] !== ca) {
                    ca = ca || b4[3];
                    b6 = b6 || [];
                    b4 = +b7 || 1;
                    do {
                        b5 = b5 || ".5";
                        b4 = b4 / b5;
                        bJ.style(cb.elem, e, b4 + ca)
                    } while (b5 !== (b5 = cb.cur() / b7) && b5 !== 1 && --b8)
                }
                if (b6) {
                    b4 = cb.start = +b4 || +b7 || 0;
                    cb.unit = ca;
                    cb.end = b6[1] ? b4 + (b6[1] + 1) * b6[2] : +b6[2]
                }
                return cb
            }]};
    function bm() {
        setTimeout(function() {
            K = aF
        });
        return (K = bJ.now())
    }
    function bb(b7, b9, b6) {
        var b4, b8 = (aZ[b9] || []).concat(aZ["*"]), e = 0, b5 = b8.length;
        for (; e < b5; e++) {
            if ((b4 = b8[e].call(b6, b9, b7))) {
                return b4
            }
        }
    }
    function f(b5, b9, cc) {
        var cd, e, b8 = 0, b4 = aA.length, cb = bJ.Deferred().always(function() {
            delete b7.elem
        }), b7 = function() {
            if (e) {
                return false
            }
            var cj = K || bm(), cg = Math.max(0, b6.startTime + b6.duration - cj), ce = cg / b6.duration || 0, ci = 1 - ce, cf = 0, ch = b6.tweens.length;
            for (; cf < ch; cf++) {
                b6.tweens[cf].run(ci)
            }
            cb.notifyWith(b5, [b6, ci, cg]);
            if (ci < 1 && ch) {
                return cg
            } else {
                cb.resolveWith(b5, [b6]);
                return false
            }
        }, b6 = cb.promise({elem: b5,props: bJ.extend({}, b9),opts: bJ.extend(true, {specialEasing: {}}, cc),originalProperties: b9,originalOptions: cc,startTime: K || bm(),duration: cc.duration,tweens: [],createTween: function(cg, ce) {
                var cf = bJ.Tween(b5, b6.opts, cg, ce, b6.opts.specialEasing[cg] || b6.opts.easing);
                b6.tweens.push(cf);
                return cf
            },stop: function(cf) {
                var ce = 0, cg = cf ? b6.tweens.length : 0;
                if (e) {
                    return this
                }
                e = true;
                for (; ce < cg; ce++) {
                    b6.tweens[ce].run(1)
                }
                if (cf) {
                    cb.resolveWith(b5, [b6, cf])
                } else {
                    cb.rejectWith(b5, [b6, cf])
                }
                return this
            }}), ca = b6.props;
        al(ca, b6.opts.specialEasing);
        for (; b8 < b4; b8++) {
            cd = aA[b8].call(b6, b5, ca, b6.opts);
            if (cd) {
                return cd
            }
        }
        bJ.map(ca, bb, b6);
        if (bJ.isFunction(b6.opts.start)) {
            b6.opts.start.call(b5, b6)
        }
        bJ.fx.timer(bJ.extend(b7, {elem: b5,anim: b6,queue: b6.opts.queue}));
        return b6.progress(b6.opts.progress).done(b6.opts.done, b6.opts.complete).fail(b6.opts.fail).always(b6.opts.always)
    }
    function al(b6, b8) {
        var b5, b4, b9, b7, e;
        for (b5 in b6) {
            b4 = bJ.camelCase(b5);
            b9 = b8[b4];
            b7 = b6[b5];
            if (bJ.isArray(b7)) {
                b9 = b7[1];
                b7 = b6[b5] = b7[0]
            }
            if (b5 !== b4) {
                b6[b4] = b7;
                delete b6[b5]
            }
            e = bJ.cssHooks[b4];
            if (e && "expand" in e) {
                b7 = e.expand(b7);
                delete b6[b4];
                for (b5 in b7) {
                    if (!(b5 in b6)) {
                        b6[b5] = b7[b5];
                        b8[b5] = b9
                    }
                }
            } else {
                b8[b4] = b9
            }
        }
    }
    bJ.Animation = bJ.extend(f, {tweener: function(b4, b7) {
            if (bJ.isFunction(b4)) {
                b7 = b4;
                b4 = ["*"]
            } else {
                b4 = b4.split(" ")
            }
            var b6, e = 0, b5 = b4.length;
            for (; e < b5; e++) {
                b6 = b4[e];
                aZ[b6] = aZ[b6] || [];
                aZ[b6].unshift(b7)
            }
        },prefilter: function(b4, e) {
            if (e) {
                aA.unshift(b4)
            } else {
                aA.push(b4)
            }
        }});
    function h(b6, ca, e) {
        var b5, cc, b8, cf, cg, cd, b7 = this, cb = {}, b4 = b6.style, b9 = b6.nodeType && O(b6), ce = bJ._data(b6, "fxshow");
        if (!e.queue) {
            cg = bJ._queueHooks(b6, "fx");
            if (cg.unqueued == null) {
                cg.unqueued = 0;
                cd = cg.empty.fire;
                cg.empty.fire = function() {
                    if (!cg.unqueued) {
                        cd()
                    }
                }
            }
            cg.unqueued++;
            b7.always(function() {
                b7.always(function() {
                    cg.unqueued--;
                    if (!bJ.queue(b6, "fx").length) {
                        cg.empty.fire()
                    }
                })
            })
        }
        if (b6.nodeType === 1 && ("height" in ca || "width" in ca)) {
            e.overflow = [b4.overflow, b4.overflowX, b4.overflowY];
            if (bJ.css(b6, "display") === "inline" && bJ.css(b6, "float") === "none") {
                if (!bJ.support.inlineBlockNeedsLayout || bE(b6.nodeName) === "inline") {
                    b4.display = "inline-block"
                } else {
                    b4.zoom = 1
                }
            }
        }
        if (e.overflow) {
            b4.overflow = "hidden";
            if (!bJ.support.shrinkWrapBlocks) {
                b7.always(function() {
                    b4.overflow = e.overflow[0];
                    b4.overflowX = e.overflow[1];
                    b4.overflowY = e.overflow[2]
                })
            }
        }
        for (b5 in ca) {
            cc = ca[b5];
            if (bR.exec(cc)) {
                delete ca[b5];
                b8 = b8 || cc === "toggle";
                if (cc === (b9 ? "hide" : "show")) {
                    continue
                }
                cb[b5] = ce && ce[b5] || bJ.style(b6, b5)
            }
        }
        if (!bJ.isEmptyObject(cb)) {
            if (ce) {
                if ("hidden" in ce) {
                    b9 = ce.hidden
                }
            } else {
                ce = bJ._data(b6, "fxshow", {})
            }
            if (b8) {
                ce.hidden = !b9
            }
            if (b9) {
                bJ(b6).show()
            } else {
                b7.done(function() {
                    bJ(b6).hide()
                })
            }
            b7.done(function() {
                var ch;
                bJ._removeData(b6, "fxshow");
                for (ch in cb) {
                    bJ.style(b6, ch, cb[ch])
                }
            });
            for (b5 in cb) {
                cf = bb(b9 ? ce[b5] : 0, b5, b7);
                if (!(b5 in ce)) {
                    ce[b5] = cf.start;
                    if (b9) {
                        cf.end = cf.start;
                        cf.start = b5 === "width" || b5 === "height" ? 1 : 0
                    }
                }
            }
        }
    }
    function F(b5, b4, b7, e, b6) {
        return new F.prototype.init(b5, b4, b7, e, b6)
    }
    bJ.Tween = F;
    F.prototype = {constructor: F,init: function(b6, b4, b8, e, b7, b5) {
            this.elem = b6;
            this.prop = b8;
            this.easing = b7 || "swing";
            this.options = b4;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = b5 || (bJ.cssNumber[b8] ? "" : "px")
        },cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },run: function(b5) {
            var b4, e = F.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = b4 = bJ.easing[this.easing](b5, this.options.duration * b5, 0, 1, this.options.duration)
            } else {
                this.pos = b4 = b5
            }
            this.now = (this.end - this.start) * b4 + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (e && e.set) {
                e.set(this)
            } else {
                F.propHooks._default.set(this)
            }
            return this
        }};
    F.prototype.init.prototype = F.prototype;
    F.propHooks = {_default: {get: function(b4) {
                var e;
                if (b4.elem[b4.prop] != null && (!b4.elem.style || b4.elem.style[b4.prop] == null)) {
                    return b4.elem[b4.prop]
                }
                e = bJ.css(b4.elem, b4.prop, "");
                return !e || e === "auto" ? 0 : e
            },set: function(e) {
                if (bJ.fx.step[e.prop]) {
                    bJ.fx.step[e.prop](e)
                } else {
                    if (e.elem.style && (e.elem.style[bJ.cssProps[e.prop]] != null || bJ.cssHooks[e.prop])) {
                        bJ.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }}};
    F.propHooks.scrollTop = F.propHooks.scrollLeft = {set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }};
    bJ.each(["toggle", "show", "hide"], function(b4, e) {
        var b5 = bJ.fn[e];
        bJ.fn[e] = function(b6, b8, b7) {
            return b6 == null || typeof b6 === "boolean" ? b5.apply(this, arguments) : this.animate(bI(e, true), b6, b8, b7)
        }
    });
    bJ.fn.extend({fadeTo: function(e, b6, b5, b4) {
            return this.filter(O).css("opacity", 0).show().end().animate({opacity: b6}, e, b5, b4)
        },animate: function(b9, b6, b8, b7) {
            var b5 = bJ.isEmptyObject(b9), e = bJ.speed(b6, b8, b7), b4 = function() {
                var ca = f(this, bJ.extend({}, b9), e);
                if (b5 || bJ._data(this, "finish")) {
                    ca.stop(true)
                }
            };
            b4.finish = b4;
            return b5 || e.queue === false ? this.each(b4) : this.queue(e.queue, b4)
        },stop: function(b5, b4, e) {
            var b6 = function(b7) {
                var b8 = b7.stop;
                delete b7.stop;
                b8(e)
            };
            if (typeof b5 !== "string") {
                e = b4;
                b4 = b5;
                b5 = aF
            }
            if (b4 && b5 !== false) {
                this.queue(b5 || "fx", [])
            }
            return this.each(function() {
                var ca = true, b7 = b5 != null && b5 + "queueHooks", b9 = bJ.timers, b8 = bJ._data(this);
                if (b7) {
                    if (b8[b7] && b8[b7].stop) {
                        b6(b8[b7])
                    }
                } else {
                    for (b7 in b8) {
                        if (b8[b7] && b8[b7].stop && bQ.test(b7)) {
                            b6(b8[b7])
                        }
                    }
                }
                for (b7 = b9.length; b7--; ) {
                    if (b9[b7].elem === this && (b5 == null || b9[b7].queue === b5)) {
                        b9[b7].anim.stop(e);
                        ca = false;
                        b9.splice(b7, 1)
                    }
                }
                if (ca || !e) {
                    bJ.dequeue(this, b5)
                }
            })
        },finish: function(e) {
            if (e !== false) {
                e = e || "fx"
            }
            return this.each(function() {
                var b6, b9 = bJ._data(this), b5 = b9[e + "queue"], b4 = b9[e + "queueHooks"], b8 = bJ.timers, b7 = b5 ? b5.length : 0;
                b9.finish = true;
                bJ.queue(this, e, []);
                if (b4 && b4.stop) {
                    b4.stop.call(this, true)
                }
                for (b6 = b8.length; b6--; ) {
                    if (b8[b6].elem === this && b8[b6].queue === e) {
                        b8[b6].anim.stop(true);
                        b8.splice(b6, 1)
                    }
                }
                for (b6 = 0; b6 < b7; b6++) {
                    if (b5[b6] && b5[b6].finish) {
                        b5[b6].finish.call(this)
                    }
                }
                delete b9.finish
            })
        }});
    function bI(b5, b7) {
        var b6, e = {height: b5}, b4 = 0;
        b7 = b7 ? 1 : 0;
        for (; b4 < 4; b4 += 2 - b7) {
            b6 = bT[b4];
            e["margin" + b6] = e["padding" + b6] = b5
        }
        if (b7) {
            e.opacity = e.width = b5
        }
        return e
    }
    bJ.each({slideDown: bI("show"),slideUp: bI("hide"),slideToggle: bI("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, b4) {
        bJ.fn[e] = function(b5, b7, b6) {
            return this.animate(b4, b5, b7, b6)
        }
    });
    bJ.speed = function(b5, b6, b4) {
        var e = b5 && typeof b5 === "object" ? bJ.extend({}, b5) : {complete: b4 || !b4 && b6 || bJ.isFunction(b5) && b5,duration: b5,easing: b4 && b6 || b6 && !bJ.isFunction(b6) && b6};
        e.duration = bJ.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in bJ.fx.speeds ? bJ.fx.speeds[e.duration] : bJ.fx.speeds._default;
        if (e.queue == null || e.queue === true) {
            e.queue = "fx"
        }
        e.old = e.complete;
        e.complete = function() {
            if (bJ.isFunction(e.old)) {
                e.old.call(this)
            }
            if (e.queue) {
                bJ.dequeue(this, e.queue)
            }
        };
        return e
    };
    bJ.easing = {linear: function(e) {
            return e
        },swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }};
    bJ.timers = [];
    bJ.fx = F.prototype.init;
    bJ.fx.tick = function() {
        var b5, b4 = bJ.timers, e = 0;
        K = bJ.now();
        for (; e < b4.length; e++) {
            b5 = b4[e];
            if (!b5() && b4[e] === b5) {
                b4.splice(e--, 1)
            }
        }
        if (!b4.length) {
            bJ.fx.stop()
        }
        K = aF
    };
    bJ.fx.timer = function(e) {
        if (e() && bJ.timers.push(e)) {
            bJ.fx.start()
        }
    };
    bJ.fx.interval = 13;
    bJ.fx.start = function() {
        if (!ac) {
            ac = setInterval(bJ.fx.tick, bJ.fx.interval)
        }
    };
    bJ.fx.stop = function() {
        clearInterval(ac);
        ac = null
    };
    bJ.fx.speeds = {slow: 600,fast: 200,_default: 400};
    bJ.fx.step = {};
    if (bJ.expr && bJ.expr.filters) {
        bJ.expr.filters.animated = function(e) {
            return bJ.grep(bJ.timers, function(b4) {
                return e === b4.elem
            }).length
        }
    }
    bJ.fn.offset = function(b4) {
        if (arguments.length) {
            return b4 === aF ? this : this.each(function(b9) {
                bJ.offset.setOffset(this, b4, b9)
            })
        }
        var e, b8, b6 = {top: 0,left: 0}, b5 = this[0], b7 = b5 && b5.ownerDocument;
        if (!b7) {
            return
        }
        e = b7.documentElement;
        if (!bJ.contains(e, b5)) {
            return b6
        }
        if (typeof b5.getBoundingClientRect !== aB) {
            b6 = b5.getBoundingClientRect()
        }
        b8 = bp(b7);
        return {top: b6.top + (b8.pageYOffset || e.scrollTop) - (e.clientTop || 0),left: b6.left + (b8.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)}
    };
    bJ.offset = {setOffset: function(b6, cf, b9) {
            var ca = bJ.css(b6, "position");
            if (ca === "static") {
                b6.style.position = "relative"
            }
            var b8 = bJ(b6), b4 = b8.offset(), e = bJ.css(b6, "top"), cd = bJ.css(b6, "left"), ce = (ca === "absolute" || ca === "fixed") && bJ.inArray("auto", [e, cd]) > -1, cc = {}, cb = {}, b5, b7;
            if (ce) {
                cb = b8.position();
                b5 = cb.top;
                b7 = cb.left
            } else {
                b5 = parseFloat(e) || 0;
                b7 = parseFloat(cd) || 0
            }
            if (bJ.isFunction(cf)) {
                cf = cf.call(b6, b9, b4)
            }
            if (cf.top != null) {
                cc.top = (cf.top - b4.top) + b5
            }
            if (cf.left != null) {
                cc.left = (cf.left - b4.left) + b7
            }
            if ("using" in cf) {
                cf.using.call(b6, cc)
            } else {
                b8.css(cc)
            }
        }};
    bJ.fn.extend({position: function() {
            if (!this[0]) {
                return
            }
            var b5, b6, e = {top: 0,left: 0}, b4 = this[0];
            if (bJ.css(b4, "position") === "fixed") {
                b6 = b4.getBoundingClientRect()
            } else {
                b5 = this.offsetParent();
                b6 = this.offset();
                if (!bJ.nodeName(b5[0], "html")) {
                    e = b5.offset()
                }
                e.top += bJ.css(b5[0], "borderTopWidth", true);
                e.left += bJ.css(b5[0], "borderLeftWidth", true)
            }
            return {top: b6.top - e.top - bJ.css(b4, "marginTop", true),left: b6.left - e.left - bJ.css(b4, "marginLeft", true)}
        },offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || bW;
                while (e && (!bJ.nodeName(e, "html") && bJ.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e || bW
            })
        }});
    bJ.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(b5, b4) {
        var e = /Y/.test(b4);
        bJ.fn[b5] = function(b6) {
            return bJ.access(this, function(b7, ca, b9) {
                var b8 = bp(b7);
                if (b9 === aF) {
                    return b8 ? (b4 in b8) ? b8[b4] : b8.document.documentElement[ca] : b7[ca]
                }
                if (b8) {
                    b8.scrollTo(!e ? b9 : bJ(b8).scrollLeft(), e ? b9 : bJ(b8).scrollTop())
                } else {
                    b7[ca] = b9
                }
            }, b5, b6, arguments.length, null)
        }
    });
    function bp(e) {
        return bJ.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    bJ.each({Height: "height",Width: "width"}, function(e, b4) {
        bJ.each({padding: "inner" + e,content: b4,"": "outer" + e}, function(b5, b6) {
            bJ.fn[b6] = function(ca, b9) {
                var b8 = arguments.length && (b5 || typeof ca !== "boolean"), b7 = b5 || (ca === true || b9 === true ? "margin" : "border");
                return bJ.access(this, function(cc, cb, cd) {
                    var ce;
                    if (bJ.isWindow(cc)) {
                        return cc.document.documentElement["client" + e]
                    }
                    if (cc.nodeType === 9) {
                        ce = cc.documentElement;
                        return Math.max(cc.body["scroll" + e], ce["scroll" + e], cc.body["offset" + e], ce["offset" + e], ce["client" + e])
                    }
                    return cd === aF ? bJ.css(cc, cb, b7) : bJ.style(cc, cb, cd, b7)
                }, b4, b8 ? ca : aF, b8, null)
            }
        })
    });
    bJ.fn.size = function() {
        return this.length
    };
    bJ.fn.andSelf = bJ.fn.addBack;
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = bJ
    } else {
        a2.jQuery = a2.$ = bJ;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return bJ
            })
        }
    }
})(window);
var swfobject = function() {
    var aq = "undefined", aD = "object", ab = "Shockwave Flash", X = "ShockwaveFlash.ShockwaveFlash", aE = "application/x-shockwave-flash", ac = "SWFObjectExprInst", ax = "onreadystatechange", af = window, aL = document, aB = navigator, aa = false, Z = [aN], aG = [], ag = [], al = [], aJ, ad, ap, at, ak = false, aU = false, aH, an, aI = true, ah = function() {
        var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq, e = aB.userAgent.toLowerCase(), c = aB.platform.toLowerCase(), h = c ? /win/.test(c) : /win/.test(e), j = c ? /mac/.test(c) : /mac/.test(e), g = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, d = !+"\v1", f = [0, 0, 0], k = null;
        if (typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
            k = aB.plugins[ab].description;
            if (k && !(typeof aB.mimeTypes != aq && aB.mimeTypes[aE] && !aB.mimeTypes[aE].enabledPlugin)) {
                aa = true;
                d = false;
                k = k.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                f[0] = parseInt(k.replace(/^(.*)\..*$/, "$1"), 10);
                f[1] = parseInt(k.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                f[2] = /[a-zA-Z]/.test(k) ? parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof af.ActiveXObject != aq) {
                try {
                    var i = new ActiveXObject(X);
                    if (i) {
                        k = i.GetVariable("$version");
                        if (k) {
                            d = true;
                            k = k.split(" ")[1].split(",");
                            f = [parseInt(k[0], 10), parseInt(k[1], 10), parseInt(k[2], 10)]
                        }
                    }
                } catch (b) {
                }
            }
        }
        return {w3: a,pv: f,wk: g,ie: d,win: h,mac: j}
    }(), aK = function() {
        if (!ah.w3) {
            return
        }
        if ((typeof aL.readyState != aq && aL.readyState == "complete") || (typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {
            aP()
        }
        if (!ak) {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("DOMContentLoaded", aP, false)
            }
            if (ah.ie && ah.win) {
                aL.attachEvent(ax, function() {
                    if (aL.readyState == "complete") {
                        aL.detachEvent(ax, arguments.callee);
                        aP()
                    }
                });
                if (af == top) {
                    (function() {
                        if (ak) {
                            return
                        }
                        try {
                            aL.documentElement.doScroll("left")
                        } catch (a) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        aP()
                    })()
                }
            }
            if (ah.wk) {
                (function() {
                    if (ak) {
                        return
                    }
                    if (!/loaded|complete/.test(aL.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    aP()
                })()
            }
            aC(aP)
        }
    }();
    function aP() {
        if (ak) {
            return
        }
        try {
            var b = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
            b.parentNode.removeChild(b)
        } catch (a) {
            return
        }
        ak = true;
        var d = Z.length;
        for (var c = 0; c < d; c++) {
            Z[c]()
        }
    }
    function aj(a) {
        if (ak) {
            a()
        } else {
            Z[Z.length] = a
        }
    }
    function aC(a) {
        if (typeof af.addEventListener != aq) {
            af.addEventListener("load", a, false)
        } else {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("load", a, false)
            } else {
                if (typeof af.attachEvent != aq) {
                    aM(af, "onload", a)
                } else {
                    if (typeof af.onload == "function") {
                        var b = af.onload;
                        af.onload = function() {
                            b();
                            a()
                        }
                    } else {
                        af.onload = a
                    }
                }
            }
        }
    }
    function aN() {
        if (aa) {
            Y()
        } else {
            am()
        }
    }
    function Y() {
        var d = aL.getElementsByTagName("body")[0];
        var b = ar(aD);
        b.setAttribute("type", aE);
        var a = d.appendChild(b);
        if (a) {
            var c = 0;
            (function() {
                if (typeof a.GetVariable != aq) {
                    var e = a.GetVariable("$version");
                    if (e) {
                        e = e.split(" ")[1].split(",");
                        ah.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)]
                    }
                } else {
                    if (c < 10) {
                        c++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                d.removeChild(b);
                a = null;
                am()
            })()
        } else {
            am()
        }
    }
    function am() {
        var g = aG.length;
        if (g > 0) {
            for (var h = 0; h < g; h++) {
                var c = aG[h].id;
                var l = aG[h].callbackFn;
                var a = {success: false,id: c};
                if (ah.pv[0] > 0) {
                    var i = aS(c);
                    if (i) {
                        if (ao(aG[h].swfVersion) && !(ah.wk && ah.wk < 312)) {
                            ay(c, true);
                            if (l) {
                                a.success = true;
                                a.ref = av(c);
                                l(a)
                            }
                        } else {
                            if (aG[h].expressInstall && au()) {
                                var e = {};
                                e.data = aG[h].expressInstall;
                                e.width = i.getAttribute("width") || "0";
                                e.height = i.getAttribute("height") || "0";
                                if (i.getAttribute("class")) {
                                    e.styleclass = i.getAttribute("class")
                                }
                                if (i.getAttribute("align")) {
                                    e.align = i.getAttribute("align")
                                }
                                var f = {};
                                var d = i.getElementsByTagName("param");
                                var k = d.length;
                                for (var j = 0; j < k; j++) {
                                    if (d[j].getAttribute("name").toLowerCase() != "movie") {
                                        f[d[j].getAttribute("name")] = d[j].getAttribute("value")
                                    }
                                }
                                ae(e, f, c, l)
                            } else {
                                aF(i);
                                if (l) {
                                    l(a)
                                }
                            }
                        }
                    }
                } else {
                    ay(c, true);
                    if (l) {
                        var b = av(c);
                        if (b && typeof b.SetVariable != aq) {
                            a.success = true;
                            a.ref = b
                        }
                        l(a)
                    }
                }
            }
        }
    }
    function av(b) {
        var d = null;
        var c = aS(b);
        if (c && c.nodeName == "OBJECT") {
            if (typeof c.SetVariable != aq) {
                d = c
            } else {
                var a = c.getElementsByTagName(aD)[0];
                if (a) {
                    d = a
                }
            }
        }
        return d
    }
    function au() {
        return !aU && ao("6.0.65") && (ah.win || ah.mac) && !(ah.wk && ah.wk < 312)
    }
    function ae(f, d, h, e) {
        aU = true;
        ap = e || null;
        at = {success: false,id: h};
        var a = aS(h);
        if (a) {
            if (a.nodeName == "OBJECT") {
                aJ = aO(a);
                ad = null
            } else {
                aJ = a;
                ad = h
            }
            f.id = ac;
            if (typeof f.width == aq || (!/%$/.test(f.width) && parseInt(f.width, 10) < 310)) {
                f.width = "310"
            }
            if (typeof f.height == aq || (!/%$/.test(f.height) && parseInt(f.height, 10) < 137)) {
                f.height = "137"
            }
            aL.title = aL.title.slice(0, 47) + " - Flash Player Installation";
            var b = ah.ie && ah.win ? "ActiveX" : "PlugIn", c = "MMredirectURL=" + af.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + b + "&MMdoctitle=" + aL.title;
            if (typeof d.flashvars != aq) {
                d.flashvars += "&" + c
            } else {
                d.flashvars = c
            }
            if (ah.ie && ah.win && a.readyState != 4) {
                var g = ar("div");
                h += "SWFObjectNew";
                g.setAttribute("id", h);
                a.parentNode.insertBefore(g, a);
                a.style.display = "none";
                (function() {
                    if (a.readyState == 4) {
                        a.parentNode.removeChild(a)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            aA(f, d, h)
        }
    }
    function aF(a) {
        if (ah.ie && ah.win && a.readyState != 4) {
            var b = ar("div");
            a.parentNode.insertBefore(b, a);
            b.parentNode.replaceChild(aO(a), b);
            a.style.display = "none";
            (function() {
                if (a.readyState == 4) {
                    a.parentNode.removeChild(a)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            a.parentNode.replaceChild(aO(a), a)
        }
    }
    function aO(b) {
        var d = ar("div");
        if (ah.win && ah.ie) {
            d.innerHTML = b.innerHTML
        } else {
            var e = b.getElementsByTagName(aD)[0];
            if (e) {
                var a = e.childNodes;
                if (a) {
                    var f = a.length;
                    for (var c = 0; c < f; c++) {
                        if (!(a[c].nodeType == 1 && a[c].nodeName == "PARAM") && !(a[c].nodeType == 8)) {
                            d.appendChild(a[c].cloneNode(true))
                        }
                    }
                }
            }
        }
        return d
    }
    function aA(e, g, c) {
        var d, a = aS(c);
        if (ah.wk && ah.wk < 312) {
            return d
        }
        if (a) {
            if (typeof e.id == aq) {
                e.id = c
            }
            if (ah.ie && ah.win) {
                var f = "";
                for (var i in e) {
                    if (e[i] != Object.prototype[i]) {
                        if (i.toLowerCase() == "data") {
                            g.movie = e[i]
                        } else {
                            if (i.toLowerCase() == "styleclass") {
                                f += ' class="' + e[i] + '"'
                            } else {
                                if (i.toLowerCase() != "classid") {
                                    f += " " + i + '="' + e[i] + '"'
                                }
                            }
                        }
                    }
                }
                var h = "";
                for (var j in g) {
                    if (g[j] != Object.prototype[j]) {
                        h += '<param name="' + j + '" value="' + g[j] + '" />'
                    }
                }
                a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>";
                ag[ag.length] = e.id;
                d = aS(e.id)
            } else {
                var b = ar(aD);
                b.setAttribute("type", aE);
                for (var k in e) {
                    if (e[k] != Object.prototype[k]) {
                        if (k.toLowerCase() == "styleclass") {
                            b.setAttribute("class", e[k])
                        } else {
                            if (k.toLowerCase() != "classid") {
                                b.setAttribute(k, e[k])
                            }
                        }
                    }
                }
                for (var l in g) {
                    if (g[l] != Object.prototype[l] && l.toLowerCase() != "movie") {
                        aQ(b, l, g[l])
                    }
                }
                a.parentNode.replaceChild(b, a);
                d = b
            }
        }
        return d
    }
    function aQ(b, d, c) {
        var a = ar("param");
        a.setAttribute("name", d);
        a.setAttribute("value", c);
        b.appendChild(a)
    }
    function aw(a) {
        var b = aS(a);
        if (b && b.nodeName == "OBJECT") {
            if (ah.ie && ah.win) {
                b.style.display = "none";
                (function() {
                    if (b.readyState == 4) {
                        aT(a)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                b.parentNode.removeChild(b)
            }
        }
    }
    function aT(a) {
        var b = aS(a);
        if (b) {
            for (var c in b) {
                if (typeof b[c] == "function") {
                    b[c] = null
                }
            }
            b.parentNode.removeChild(b)
        }
    }
    function aS(a) {
        var c = null;
        try {
            c = aL.getElementById(a)
        } catch (b) {
        }
        return c
    }
    function ar(a) {
        return aL.createElement(a)
    }
    function aM(a, c, b) {
        a.attachEvent(c, b);
        al[al.length] = [a, c, b]
    }
    function ao(a) {
        var b = ah.pv, c = a.split(".");
        c[0] = parseInt(c[0], 10);
        c[1] = parseInt(c[1], 10) || 0;
        c[2] = parseInt(c[2], 10) || 0;
        return (b[0] > c[0] || (b[0] == c[0] && b[1] > c[1]) || (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2])) ? true : false
    }
    function az(b, f, a, c) {
        if (ah.ie && ah.mac) {
            return
        }
        var e = aL.getElementsByTagName("head")[0];
        if (!e) {
            return
        }
        var g = (a && typeof a == "string") ? a : "screen";
        if (c) {
            aH = null;
            an = null
        }
        if (!aH || an != g) {
            var d = ar("style");
            d.setAttribute("type", "text/css");
            d.setAttribute("media", g);
            aH = e.appendChild(d);
            if (ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
                aH = aL.styleSheets[aL.styleSheets.length - 1]
            }
            an = g
        }
        if (ah.ie && ah.win) {
            if (aH && typeof aH.addRule == aD) {
                aH.addRule(b, f)
            }
        } else {
            if (aH && typeof aL.createTextNode != aq) {
                aH.appendChild(aL.createTextNode(b + " {" + f + "}"))
            }
        }
    }
    function ay(a, c) {
        if (!aI) {
            return
        }
        var b = c ? "visible" : "hidden";
        if (ak && aS(a)) {
            aS(a).style.visibility = b
        } else {
            az("#" + a, "visibility:" + b)
        }
    }
    function ai(b) {
        var a = /[\\\"<>\.;]/;
        var c = a.exec(b) != null;
        return c && typeof encodeURIComponent != aq ? encodeURIComponent(b) : b
    }
    var aR = function() {
        if (ah.ie && ah.win) {
            window.attachEvent("onunload", function() {
                var a = al.length;
                for (var b = 0; b < a; b++) {
                    al[b][0].detachEvent(al[b][1], al[b][2])
                }
                var d = ag.length;
                for (var c = 0; c < d; c++) {
                    aw(ag[c])
                }
                for (var e in ah) {
                    ah[e] = null
                }
                ah = null;
                for (var f in swfobject) {
                    swfobject[f] = null
                }
                swfobject = null
            })
        }
    }();
    return {registerObject: function(a, e, c, b) {
            if (ah.w3 && a && e) {
                var d = {};
                d.id = a;
                d.swfVersion = e;
                d.expressInstall = c;
                d.callbackFn = b;
                aG[aG.length] = d;
                ay(a, false)
            } else {
                if (b) {
                    b({success: false,id: a})
                }
            }
        },getObjectById: function(a) {
            if (ah.w3) {
                return av(a)
            }
        },embedSWF: function(k, e, h, f, c, a, b, i, g, j) {
            var d = {success: false,id: e};
            if (ah.w3 && !(ah.wk && ah.wk < 312) && k && e && h && f && c) {
                ay(e, false);
                aj(function() {
                    h += "";
                    f += "";
                    var q = {};
                    if (g && typeof g === aD) {
                        for (var o in g) {
                            q[o] = g[o]
                        }
                    }
                    q.data = k;
                    q.width = h;
                    q.height = f;
                    var n = {};
                    if (i && typeof i === aD) {
                        for (var p in i) {
                            n[p] = i[p]
                        }
                    }
                    if (b && typeof b === aD) {
                        for (var l in b) {
                            if (typeof n.flashvars != aq) {
                                n.flashvars += "&" + l + "=" + b[l]
                            } else {
                                n.flashvars = l + "=" + b[l]
                            }
                        }
                    }
                    if (ao(c)) {
                        var m = aA(q, n, e);
                        if (q.id == e) {
                            ay(e, true)
                        }
                        d.success = true;
                        d.ref = m
                    } else {
                        if (a && au()) {
                            q.data = a;
                            ae(q, n, e, j);
                            return
                        } else {
                            ay(e, true)
                        }
                    }
                    if (j) {
                        j(d)
                    }
                })
            } else {
                if (j) {
                    j(d)
                }
            }
        },switchOffAutoHideShow: function() {
            aI = false
        },ua: ah,getFlashPlayerVersion: function() {
            return {major: ah.pv[0],minor: ah.pv[1],release: ah.pv[2]}
        },hasFlashPlayerVersion: ao,createSWF: function(a, b, c) {
            if (ah.w3) {
                return aA(a, b, c)
            } else {
                return undefined
            }
        },showExpressInstall: function(b, a, d, c) {
            if (ah.w3 && au()) {
                ae(b, a, d, c)
            }
        },removeSWF: function(a) {
            if (ah.w3) {
                aw(a)
            }
        },createCSS: function(b, a, c, d) {
            if (ah.w3) {
                az(b, a, c, d)
            }
        },addDomLoadEvent: aj,addLoadEvent: aC,getQueryParamValue: function(b) {
            var a = aL.location.search || aL.location.hash;
            if (a) {
                if (/\?/.test(a)) {
                    a = a.split("?")[1]
                }
                if (b == null) {
                    return ai(a)
                }
                var c = a.split("&");
                for (var d = 0; d < c.length; d++) {
                    if (c[d].substring(0, c[d].indexOf("=")) == b) {
                        return ai(c[d].substring((c[d].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },expressInstallCallback: function() {
            if (aU) {
                var a = aS(ac);
                if (a && aJ) {
                    a.parentNode.replaceChild(aJ, a);
                    if (ad) {
                        ay(ad, true);
                        if (ah.ie && ah.win) {
                            aJ.style.display = "block"
                        }
                    }
                    if (ap) {
                        ap(at)
                    }
                }
                aU = false
            }
        }}
}();
define("libs/flash/swfobject", (function(a) {
    return function() {
        var b, c;
        return b || a.swfobject
    }
}(this)));
(function(o) {
    var d = o, s = o.document, k = "undefined", e = true, u = false, t = "", f = "object", l = "function", q = "string", j = "div", c = "onunload", h = "none", r = null, m = null, g = null, i = null, b = o.setTimeout, a = o.clearTimeout, p = o.setInterval, n = o.clearInterval;
    o.flensed = {};
    m = o.flensed;
    m.checkplayer = function(V, ag, M, Z) {
        if (typeof g._ins !== k) {
            if (g._ins.ready()) {
                setTimeout(function() {
                    ag(g._ins)
                }, 0)
            }
            return g._ins
        }
        var x = "6.0.65", X = [], F = null, C = u, D = null, ai = null, Q = t, A = u, J = null, y = [], P = {}, Y = [], B = null, ae = null, ad = null, K = null, E = u, af = null, I = u, R = u, N = u, ac = null;
        var w = function() {
            if ((typeof V !== k) && (V !== null) && (V !== u)) {
                ae = V + t
            } else {
                ae = "0.0.0"
            }
            if (typeof ag === l) {
                ad = ag
            }
            if (typeof M !== k) {
                E = !(!M)
            }
            if (typeof Z === l) {
                K = Z
            }
            function ak() {
                a(D);
                try {
                    d.detachEvent(c, ak)
                } catch (an) {
                }
            }
            try {
                d.attachEvent(c, ak)
            } catch (al) {
            }
            (function am() {
                try {
                    m.bindEvent(d, c, W)
                } catch (an) {
                    D = b(arguments.callee, 25);
                    return
                }
                ak();
                af = m.ua.pv.join(".");
                D = b(ab, 1)
            })()
        }();
        function ab() {
            try {
                B = s.getElementsByTagName("body")[0]
            } catch (al) {
            }
            if ((typeof B === k) || (B === null)) {
                D = b(ab, 25);
                return
            }
            try {
                o.swfobject.getObjectById("a");
                i = o.swfobject
            } catch (ak) {
                D = b(ab, 25);
                return
            }
            R = i.hasFlashPlayerVersion(x);
            I = i.hasFlashPlayerVersion(ae);
            ah();
            if (typeof ad === l) {
                ad(H)
            }
            A = e;
            if (I) {
                S()
            } else {
                if (E && !C) {
                    T()
                }
            }
        }
        function W() {
            if (typeof d.detachEvent !== k) {
                d.detachEvent(c, W)
            }
            g._ins = null;
            if ((typeof J !== k) && (J !== null)) {
                try {
                    J.updateSWFCallback = null;
                    aa = null
                } catch (an) {
                }
                J = null
            }
            try {
                for (var am in H) {
                    if (H[am] !== Object.prototype[am]) {
                        try {
                            H[am] = null
                        } catch (al) {
                        }
                    }
                }
            } catch (ak) {
            }
            H = null;
            B = null;
            v();
            Y = null;
            ad = null;
            K = null;
            try {
                for (var aq in g) {
                    if (g[aq] !== Object.prototype[aq]) {
                        try {
                            g[aq] = null
                        } catch (ap) {
                        }
                    }
                }
            } catch (ao) {
            }
            g = null;
            m.checkplayer = null;
            m = null;
            o = null
        }
        function aj(al, am, ak) {
            Y[Y.length] = {func: al,funcName: am,args: ak}
        }
        function S() {
            if (!A) {
                F = b(S, 25);
                return
            }
            var am = 0;
            try {
                am = Y.length
            } catch (an) {
            }
            for (var al = 0; al < am; al++) {
                try {
                    Y[al].func.apply(H, Y[al].args);
                    Y[al] = u
                } catch (ak) {
                    I = u;
                    ah();
                    if (typeof ad === l) {
                        ad(H)
                    } else {
                        throw new o.Error("checkplayer::" + Y[al].funcName + "() call failed.")
                    }
                }
            }
            Y = null
        }
        function v() {
            a(D);
            D = null;
            a(F);
            F = null;
            for (var al in P) {
                if (P[al] !== Object.prototype[al]) {
                    n(P[al]);
                    P[al] = u
                }
            }
            for (var ak in X) {
                if (X[ak] !== Object.prototype[ak]) {
                    a(X[ak]);
                    X[ak] = u
                }
            }
        }
        function ah() {
            try {
                H.playerVersionDetected = af;
                H.checkPassed = I;
                H.updateable = R;
                H.updateStatus = N;
                H.updateControlsContainer = ac
            } catch (ak) {
            }
        }
        function L(aq, al) {
            var an = al ? "visible" : "hidden";
            var ap = m.getObjectById(aq);
            try {
                if (ap !== null && (typeof ap.style !== k) && (ap.style !== null)) {
                    ap.style.visibility = an
                } else {
                    try {
                        m.createCSS("#" + aq, "visibility:" + an)
                    } catch (ao) {
                    }
                }
            } catch (am) {
                try {
                    m.createCSS("#" + aq, "visibility:" + an)
                } catch (ak) {
                }
            }
        }
        function T() {
            var ap = B;
            if ((typeof ap === k) || (ap === null)) {
                X[X.length] = b(T, 25);
                return
            }
            try {
                i.getObjectById("a")
            } catch (ao) {
                X[X.length] = b(T, 25);
                return
            }
            if (!C) {
                C = e;
                v();
                if (R) {
                    Q = "CheckPlayerUpdate";
                    ai = Q + "SWF";
                    m.createCSS("#" + Q, "width:221px;height:145px;position:absolute;left:5px;top:5px;border:none;background-color:#000000;display:block;");
                    m.createCSS("#" + ai, "display:inline;position:absolute;left:1px;top:1px;");
                    ac = s.createElement(j);
                    ac.id = Q;
                    ap.appendChild(ac);
                    L(ac.id, u);
                    ah();
                    var ar = null;
                    try {
                        ar = d.top.location.toString()
                    } catch (ak) {
                        ar = d.location.toString()
                    }
                    var am = {swfId: ai,MMredirectURL: ar.replace(/&/g, "%26"),MMplayerType: (m.ua.ie && m.ua.win ? "ActiveX" : "PlugIn"),MMdoctitle: s.title.slice(0, 47) + " - Flash Player Installation"};
                    var aq = {allowScriptAccess: "always"};
                    var an = {id: ai,name: ai};
                    try {
                        O(window.resBaseUrl + "/swf/updateplayer.swf", {appendToId: Q}, "219", "143", am, aq, an, {swfTimeout: 3000,swfCB: z}, e)
                    } catch (al) {
                        U();
                        return
                    }
                } else {
                    U()
                }
            }
        }
        function U(ak) {
            if (typeof ak === k) {
                ak = "Flash Player not detected or not updateable."
            }
            N = g.UPDATE_FAILED;
            ah();
            if (typeof K === l) {
                K(H)
            } else {
                throw new o.Error("checkplayer::UpdatePlayer(): " + ak)
            }
        }
        function z(ak) {
            if (ak.status === g.SWF_LOADED) {
                a(P["continueUpdate_" + ai]);
                P["continueUpdate_" + ai] = u;
                J = ak.srcElem;
                J.updateSWFCallback = aa;
                N = g.UPDATE_INIT;
                ah();
                if (typeof K === l) {
                    K(H)
                }
                L(ac.id, e)
            } else {
                if (ak.status === g.SWF_FAILED || ak.status === g.SWF_TIMEOUT) {
                    U()
                }
            }
        }
        function aa(al) {
            try {
                if (al === 0) {
                    N = g.UPDATE_SUCCESSFUL;
                    ac.style.display = h;
                    try {
                        d.open(t, "_self", t);
                        d.close();
                        o.self.opener = d;
                        o.self.close()
                    } catch (am) {
                    }
                } else {
                    if (al === 1) {
                        N = g.UPDATE_CANCELED;
                        ac.style.display = h
                    } else {
                        if (al === 2) {
                            ac.style.display = h;
                            U("The Flash Player update failed.");
                            return
                        } else {
                            if (al === 3) {
                                ac.style.display = h;
                                U("The Flash Player update timed out.");
                                return
                            }
                        }
                    }
                }
            } catch (ak) {
            }
            ah();
            if (typeof K === l) {
                K(H)
            }
        }
        function O(aE, aq, at, al, an, ap, av, aC, aA) {
            if (aq !== null && (typeof aq === q || typeof aq.replaceId === q)) {
                L(((typeof aq === q) ? aq : aq.replaceId), u)
            }
            if (!A && !aA) {
                aj(O, "DoSWF", arguments);
                return
            }
            if (I || aA) {
                at += t;
                al += t;
                var ay = (typeof av === f) ? av : {};
                ay.data = aE;
                ay.width = at;
                ay.height = al;
                var ax = (typeof ap === f) ? ap : {};
                if (typeof an === f) {
                    for (var aB in an) {
                        if (an[aB] !== Object.prototype[aB]) {
                            if (typeof ax.flashvars !== k) {
                                ax.flashvars += "&" + aB + "=" + an[aB]
                            } else {
                                ax.flashvars = aB + "=" + an[aB]
                            }
                        }
                    }
                }
                var aD = null;
                if (typeof av.id !== k) {
                    aD = av.id
                } else {
                    if (aq !== null && (typeof aq === q || typeof aq.replaceId === q)) {
                        aD = ((typeof aq === q) ? aq : aq.replaceId)
                    } else {
                        aD = "swf_" + y.length
                    }
                }
                var aF = null;
                if (aq === null || aq === u || typeof aq.appendToId === q) {
                    var am = null;
                    if (aq !== null && aq !== u && typeof aq.appendToId === q) {
                        am = m.getObjectById(aq.appendToId)
                    } else {
                        am = B
                    }
                    var ar = s.createElement(j);
                    aF = (ar.id = aD);
                    am.appendChild(ar)
                } else {
                    aF = ((typeof aq.replaceId === q) ? aq.replaceId : aq)
                }
                var aw = function() {
                }, az = 0, ak = t, au = null;
                if (typeof aC !== k && aC !== null) {
                    if (typeof aC === f) {
                        if (typeof aC.swfCB !== k && aC.swfCB !== null) {
                            aw = aC.swfCB
                        }
                        if (typeof aC.swfTimeout !== k && (o.parseInt(aC.swfTimeout, 10) > 0)) {
                            az = aC.swfTimeout
                        }
                        if (typeof aC.swfEICheck !== k && aC.swfEICheck !== null && aC.swfEICheck !== t) {
                            ak = aC.swfEICheck
                        }
                    } else {
                        if (typeof aC === l) {
                            aw = aC
                        }
                    }
                }
                try {
                    au = i.createSWF(ay, ax, aF)
                } catch (ao) {
                }
                if (au !== null) {
                    y[y.length] = aD;
                    if (typeof aw === l) {
                        aw({status: g.SWF_INIT,srcId: aD,srcElem: au});
                        P[aD] = p(function() {
                            var aH = m.getObjectById(aD);
                            if ((typeof aH !== k) && (aH !== null) && (aH.nodeName === "OBJECT" || aH.nodeName === "EMBED")) {
                                var aG = 0;
                                try {
                                    aG = aH.PercentLoaded()
                                } catch (aI) {
                                }
                                if (aG > 0) {
                                    if (az > 0) {
                                        a(P["DoSWFtimeout_" + aD]);
                                        P["DoSWFtimeout_" + aD] = u
                                    }
                                    if (aG < 100) {
                                        b(function() {
                                            aw({status: g.SWF_LOADING,srcId: aD,srcElem: aH})
                                        }, 1)
                                    } else {
                                        n(P[aD]);
                                        P[aD] = u;
                                        b(function() {
                                            aw({status: g.SWF_LOADED,srcId: aD,srcElem: aH})
                                        }, 1);
                                        if (ak !== t) {
                                            var aJ = u;
                                            P[aD] = p(function() {
                                                if (!aJ && typeof aH[ak] === l) {
                                                    aJ = e;
                                                    try {
                                                        aH[ak]();
                                                        n(P[aD]);
                                                        P[aD] = u;
                                                        aw({status: g.SWF_EI_READY,srcId: aD,srcElem: aH})
                                                    } catch (aK) {
                                                    }
                                                    aJ = u
                                                }
                                            }, 25)
                                        }
                                    }
                                }
                            }
                        }, 50);
                        if (az > 0) {
                            P["DoSWFtimeout_" + aD] = b(function() {
                                var aH = m.getObjectById(aD);
                                if ((typeof aH !== k) && (aH !== null) && (aH.nodeName === "OBJECT" || aH.nodeName === "EMBED")) {
                                    var aG = 0;
                                    try {
                                        aG = aH.PercentLoaded()
                                    } catch (aI) {
                                    }
                                    if (aG <= 0) {
                                        n(P[aD]);
                                        P[aD] = u;
                                        if (m.ua.ie && m.ua.win && aH.readyState !== 4) {
                                            aH.id = "removeSWF_" + aH.id;
                                            aH.style.display = h;
                                            P[aH.id] = p(function() {
                                                if (aH.readyState === 4) {
                                                    n(P[aH.id]);
                                                    P[aH.id] = u;
                                                    i.removeSWF(aH.id)
                                                }
                                            }, 500)
                                        } else {
                                            i.removeSWF(aH.id)
                                        }
                                        P[aD] = u;
                                        P["DoSWFtimeout_" + aD] = u;
                                        aw({status: g.SWF_TIMEOUT,srcId: aD,srcElem: aH})
                                    }
                                }
                            }, az)
                        }
                    }
                } else {
                    if (typeof aw === l) {
                        aw({status: g.SWF_FAILED,srcId: aD,srcElem: null})
                    } else {
                        throw new o.Error("checkplayer::DoSWF(): SWF could not be loaded.")
                    }
                }
            } else {
                if (typeof aw === l) {
                    aw({status: g.SWF_FAILED,srcId: aD,srcElem: null})
                } else {
                    throw new o.Error("checkplayer::DoSWF(): Minimum Flash Version not detected.")
                }
            }
        }
        var H = {playerVersionDetected: af,versionChecked: ae,checkPassed: I,UpdatePlayer: T,DoSWF: function(ap, aq, an, ao, al, ak, am, ar) {
                O(ap, aq, an, ao, al, ak, am, ar, u)
            },ready: function() {
                return A
            },updateable: R,updateStatus: N,updateControlsContainer: ac};
        g._ins = H;
        return H
    };
    g = m.checkplayer;
    g.UPDATE_INIT = 1;
    g.UPDATE_SUCCESSFUL = 2;
    g.UPDATE_CANCELED = 3;
    g.UPDATE_FAILED = 4;
    g.SWF_INIT = 5;
    g.SWF_LOADING = 6;
    g.SWF_LOADED = 7;
    g.SWF_FAILED = 8;
    g.SWF_TIMEOUT = 9;
    g.SWF_EI_READY = 10;
    g.module_ready = function() {
    }
})(window);
define("libs/flash/checkplayer", ["libs/flash/swfobject"], function() {
});
(function(global) {
    var win = global, doc = global.document, UNDEF = "undefined", JSTRUE = true, JSFALSE = false, EMPTY = "", OBJECT = "object", JSSTR = "string", _flensed = null, dynamicStylesheet = null, dynamicStylesheetMedia = null, PARSEINT = global.parseInt, SETTIMEOUT = global.setTimeout;
    _flensed = global.flensed;
    _flensed.getObjectById = function(idStr) {
        try {
            if (doc.layers) {
                return doc.layers[idStr]
            } else {
                if (doc.all) {
                    return doc.all[idStr]
                } else {
                    if (doc.getElementById) {
                        return doc.getElementById(idStr)
                    }
                }
            }
        } catch (err) {
        }
        return null
    };
    _flensed.createCSS = function(sel, decl, media, newStyle) {
        if (_flensed.ua.ie && _flensed.ua.mac) {
            return
        }
        var h = doc.getElementsByTagName("head")[0];
        if (!h) {
            return
        }
        var m = (media && typeof media === JSSTR) ? media : "screen";
        if (newStyle) {
            dynamicStylesheet = null;
            dynamicStylesheetMedia = null
        }
        if (!dynamicStylesheet || dynamicStylesheetMedia !== m) {
            var s = doc.createElement("style");
            s.setAttribute("type", "text/css");
            s.setAttribute("media", m);
            dynamicStylesheet = h.appendChild(s);
            if (_flensed.ua.ie && _flensed.ua.win && typeof doc.styleSheets !== UNDEF && doc.styleSheets.length > 0) {
                dynamicStylesheet = doc.styleSheets[doc.styleSheets.length - 1]
            }
            dynamicStylesheetMedia = m
        }
        if (_flensed.ua.ie && _flensed.ua.win) {
            if (dynamicStylesheet && typeof dynamicStylesheet.addRule === OBJECT) {
                dynamicStylesheet.addRule(sel, decl)
            }
        } else {
            if (dynamicStylesheet && typeof doc.createTextNode !== UNDEF) {
                dynamicStylesheet.appendChild(doc.createTextNode(sel + " {" + decl + "}"))
            }
        }
    };
    _flensed.bindEvent = function(obj, eventName, handlerFunc) {
        eventName = eventName.toLowerCase();
        try {
            if (typeof obj.addEventListener !== UNDEF) {
                obj.addEventListener(eventName.replace(/^on/, EMPTY), handlerFunc, JSFALSE)
            } else {
                if (typeof obj.attachEvent !== UNDEF) {
                    obj.attachEvent(eventName, handlerFunc)
                }
            }
        } catch (err) {
        }
    };
    _flensed.unbindEvent = function(obj, eventName, handlerFunc) {
        eventName = eventName.toLowerCase();
        try {
            if (typeof obj.removeEventListener !== UNDEF) {
                obj.removeEventListener(eventName.replace(/^on/, EMPTY), handlerFunc, JSFALSE)
            } else {
                if (typeof obj.detachEvent !== UNDEF) {
                    obj.detachEvent(eventName, handlerFunc)
                }
            }
        } catch (err) {
        }
    };
    _flensed.throwUnhandledError = function(errDescription) {
        throw new global.Error(errDescription)
    };
    _flensed.error = function(code, name, description, srcElement) {
        return {number: code,name: name,description: description,message: description,srcElement: srcElement,toString: function() {
                return code + ", " + name + ", " + description
            }}
    };
    _flensed.ua = function() {
        var SHOCKWAVE_FLASH = "Shockwave Flash", SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash", FLASH_MIME_TYPE = "application/x-shockwave-flash", nav = global.navigator, w3cdom = typeof doc.getElementById !== UNDEF && typeof doc.getElementsByTagName !== UNDEF && typeof doc.createElement !== UNDEF, playerVersion = [0, 0, 0], d = null;
        if (typeof nav.plugins !== UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] === OBJECT) {
            d = nav.plugins[SHOCKWAVE_FLASH].description;
            if (d && !(typeof nav.mimeTypes !== UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
                d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                playerVersion[0] = PARSEINT(d.replace(/^(.*)\..*$/, "$1"), 10);
                playerVersion[1] = PARSEINT(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                playerVersion[2] = /r/.test(d) ? PARSEINT(d.replace(/^.*r(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof win.ActiveXObject !== UNDEF) {
                try {
                    var a = new global.ActiveXObject(SHOCKWAVE_FLASH_AX);
                    if (a) {
                        d = a.GetVariable("$version");
                        if (d) {
                            d = d.split(" ")[1].split(",");
                            playerVersion = [PARSEINT(d[0], 10), PARSEINT(d[1], 10), PARSEINT(d[2], 10)]
                        }
                    }
                } catch (err) {
                }
            }
        }
        var u = nav.userAgent.toLowerCase(), p = nav.platform.toLowerCase(), webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : JSFALSE, ie = JSFALSE, ieVer = 0, windows = p ? /win/.test(p) : /win/.test(u), mac = p ? /mac/.test(p) : /mac/.test(u);
        /*@cc_on
			ie = JSTRUE;
			try { ieVer = PARSEINT(u.match(/msie (\d+)/)[1],10); } catch (err2) { }
			@if (@_win32)
				windows = JSTRUE;
			@elif (@_mac)
				mac = JSTRUE;
			@end
		@*/
        ;
        return {w3cdom: w3cdom,pv: playerVersion,webkit: webkit,ie: ie,ieVer: ieVer,win: windows,mac: mac}
    }()
})(window);
define("libs/flXHR/flensed", ["libs/flash/swfobject", "libs/flash/checkplayer"], function() {
});
(function(c) {
    var D = c, g = c.document, y = "undefined", a = true, K = false, f = "", n = "object", j = "function", M = "string", k = "div", d = "onunload", F = null, x = null, J = null, p = null, w = 0, h = [], l = null, q = null, E = "flXHR.js", m = "flensed.js", i = "checkplayer.js", z = window.resBaseUrl + "/swf/flXHR.swf", t = c.parseInt, v = c.setTimeout, e = c.clearTimeout, r = c.setInterval, u = c.clearInterval, N = "instanceId", I = "readyState", C = "onreadystatechange", L = "ontimeout", B = "onerror", H = "loadPolicyURL", b = "noCacheHeader", o = "sendTimeout", A = "appendToId", s = "swfIdPrefix";
    if (typeof c.flensed === y) {
        c.flensed = {}
    }
    if (typeof c.flensed.flXHR !== y) {
        return
    }
    x = c.flensed;
    v(function() {
        var O = K, Z = g.getElementsByTagName("script"), T = Z.length;
        try {
            x.base_path.toLowerCase();
            O = a
        } catch (R) {
            x.base_path = f
        }
        function X(ag, af, ah) {
            for (var ae = 0; ae < T; ae++) {
                if (typeof Z[ae].src !== y) {
                    if (Z[ae].src.indexOf(ag) >= 0) {
                        break
                    }
                }
            }
            var ad = g.createElement("script");
            ad.setAttribute("src", x.base_path + ag);
            if (typeof af !== y) {
                ad.setAttribute("type", af)
            }
            if (typeof ah !== y) {
                ad.setAttribute("language", ah)
            }
            g.getElementsByTagName("head")[0].appendChild(ad)
        }
        if ((typeof Z !== y) && (Z !== null)) {
            if (!O) {
                var aa = 0;
                for (var S = 0; S < T; S++) {
                    if (typeof Z[S].src !== y) {
                        if (((aa = Z[S].src.indexOf(m)) >= 0) || ((aa = Z[S].src.indexOf(E)) >= 0)) {
                            x.base_path = Z[S].src.substr(0, aa);
                            break
                        }
                    }
                }
            }
        }
        try {
            x.checkplayer.module_ready()
        } catch (Y) {
            X(i, "text/javascript")
        }
        var ab = null;
        (function ac() {
            try {
                x.ua.pv.join(".")
            } catch (ad) {
                ab = v(arguments.callee, 25);
                return
            }
            x.bindEvent(D, d, function() {
                try {
                    c.flensed.unbindEvent(D, d, arguments.callee);
                    for (var ag in q) {
                        if (q[ag] !== Object.prototype[ag]) {
                            try {
                                q[ag] = null
                            } catch (af) {
                            }
                        }
                    }
                    x.flXHR = null;
                    q = null;
                    x = null;
                    p = null;
                    J = null
                } catch (ae) {
                }
            })
        })();
        function W() {
            e(ab);
            try {
                D.detachEvent(d, W)
            } catch (ad) {
            }
        }
        if (ab !== null) {
            try {
                D.attachEvent(d, W)
            } catch (V) {
            }
        }
        var Q = null;
        function P() {
            e(Q);
            try {
                D.detachEvent(d, P)
            } catch (ad) {
            }
        }
        try {
            D.attachEvent(d, P)
        } catch (U) {
        }
    }, 0);
    x.flXHR = function(aL) {
        var Y = K;
        if (aL !== null && typeof aL === n) {
            if (typeof aL.instancePooling !== y) {
                Y = !(!aL.instancePooling);
                if (Y) {
                    var aA = function() {
                        for (var aU = 0; aU < h.length; aU++) {
                            var aV = h[aU];
                            if (aV[I] === 4) {
                                aV.Reset();
                                aV.Configure(aL);
                                return aV
                            }
                        }
                        return null
                    }();
                    if (aA !== null) {
                        return aA
                    }
                }
            }
        }
        var aQ = ++w, af = [], ac = null, ae = null, V = null, W = null, aG = -1, az = 0, Z = null, ay = null, ar = null, aP = null, ah = null, O = null, aF = null, X = a, aw = K, aS = "flXHR_" + aQ, ap = a, aD = K, Q = "flXHR_swf", ab = "flXHRhideSwf", T = null, aB = -1, R = f, aE = null, ax = null, aI = null;
        var S = function() {
            if (typeof aL === n && aL !== null) {
                if ((typeof aL[N] !== y) && (aL[N] !== null) && (aL[N] !== f)) {
                    aS = aL[N]
                }
                if ((typeof aL[s] !== y) && (aL[s] !== null) && (aL[s] !== f)) {
                    Q = aL[s]
                }
                if ((typeof aL[A] !== y) && (aL[A] !== null) && (aL[A] !== f)) {
                    T = aL[A]
                }
                if ((typeof aL[H] !== y) && (aL[H] !== null) && (aL[H] !== f)) {
                    R = aL[H]
                }
                if (typeof aL[b] !== y) {
                    ap = !(!aL[b])
                }
                if (typeof aL.autoUpdatePlayer !== y) {
                    aD = !(!aL.autoUpdatePlayer)
                }
                if ((typeof aL[o] !== y) && ((F = t(aL[o], 10)) > 0)) {
                    aB = F
                }
                if ((typeof aL[C] !== y) && (aL[C] !== null)) {
                    aE = aL[C]
                }
                if ((typeof aL[B] !== y) && (aL[B] !== null)) {
                    ax = aL[B]
                }
                if ((typeof aL[L] !== y) && (aL[L] !== null)) {
                    aI = aL[L]
                }
            }
            W = Q + "_" + aQ;
            function aU() {
                e(ac);
                try {
                    D.detachEvent(d, aU)
                } catch (aX) {
                }
            }
            try {
                D.attachEvent(d, aU)
            } catch (aV) {
            }
            (function aW() {
                try {
                    x.bindEvent(D, d, aC)
                } catch (aX) {
                    ac = v(arguments.callee, 25);
                    return
                }
                aU();
                ac = v(aN, 1)
            })()
        }();
        function aN() {
            if (T === null) {
                O = g.getElementsByTagName("body")[0]
            } else {
                O = x.getObjectById(T)
            }
            try {
                O.nodeName.toLowerCase();
                x.checkplayer.module_ready();
                J = x.checkplayer
            } catch (aV) {
                ac = v(aN, 25);
                return
            }
            if ((p === null) && (typeof J._ins === y)) {
                try {
                    p = new J(q.MIN_PLAYER_VERSION, aO, K, am)
                } catch (aU) {
                    aJ(q.DEPENDENCY_ERROR, "flXHR: checkplayer Init Failed", "The initialization of the 'checkplayer' library failed to complete.");
                    return
                }
            } else {
                p = J._ins;
                ad()
            }
        }
        function ad() {
            if (p === null || !p.checkPassed) {
                ac = v(ad, 25);
                return
            }
            if (l === null && T === null) {
                x.createCSS("." + ab, "left:-1px;top:0px;width:1px;height:1px;position:absolute;");
                l = a
            }
            var aY = g.createElement(k);
            aY.id = W;
            aY.className = ab;
            O.appendChild(aY);
            O = null;
            var aV = {}, aZ = {allowScriptAccess: "always"}, aW = {id: W,name: W,styleclass: ab}, aX = {swfCB: aM,swfEICheck: "reset"};
            try {
                p.DoSWF(z, W, "1", "1", aV, aZ, aW, aX)
            } catch (aU) {
                aJ(q.DEPENDENCY_ERROR, "flXHR: checkplayer Call Failed", "A call to the 'checkplayer' library failed to complete.");
                return
            }
        }
        function aM(aU) {
            if (aU.status !== J.SWF_EI_READY) {
                return
            }
            P();
            aP = x.getObjectById(W);
            aP.setId(W);
            if (R !== f) {
                aP.loadPolicy(R)
            }
            aP.autoNoCacheHeader(ap);
            aP.doOnReadyStateChange = ai;
            aP.doOnError = aJ;
            aP.sendProcessed = al;
            aP.chunkResponse = au;
            aG = 0;
            at();
            aR();
            if (typeof aE === j) {
                try {
                    aE(ah)
                } catch (aV) {
                    aJ(q.HANDLER_ERROR, "flXHR::onreadystatechange(): Error", "An error occurred in the handler function. (" + aV.message + ")");
                    return
                }
            }
            ao()
        }
        function aC() {
            try {
                c.flensed.unbindEvent(D, d, aC)
            } catch (aX) {
            }
            try {
                for (var aY = 0; aY < h.length; aY++) {
                    if (h[aY] === ah) {
                        h[aY] = K
                    }
                }
            } catch (a5) {
            }
            try {
                for (var a0 in ah) {
                    if (ah[a0] !== Object.prototype[a0]) {
                        try {
                            ah[a0] = null
                        } catch (a4) {
                        }
                    }
                }
            } catch (a3) {
            }
            ah = null;
            P();
            if ((typeof aP !== y) && (aP !== null)) {
                try {
                    aP.abort()
                } catch (a2) {
                }
                try {
                    aP.doOnReadyStateChange = null;
                    ai = null
                } catch (a1) {
                }
                try {
                    aP.doOnError = null;
                    doOnError = null
                } catch (aZ) {
                }
                try {
                    aP.sendProcessed = null;
                    al = null
                } catch (aW) {
                }
                try {
                    aP.chunkResponse = null;
                    au = null
                } catch (aV) {
                }
                aP = null;
                try {
                    c.swfobject.removeSWF(W)
                } catch (aU) {
                }
            }
            aK();
            aE = null;
            ax = null;
            aI = null;
            aF = null;
            O = null
        }
        function au() {
            if (typeof arguments[0] === M) {
                aF = ((aF !== null) ? aF : f);
                aF += arguments[0]
            }
        }
        function ai() {
            if (typeof arguments[0] !== y) {
                aG = arguments[0]
            }
            if (aG === 4) {
                P();
                Z = aF;
                aF = null
            }
            if (typeof arguments[1] !== y) {
                ay = arguments[1]
            }
            if (typeof arguments[2] !== y) {
                ar = arguments[2]
            }
            aa(aG)
        }
        function aa(aU) {
            az = aU;
            at();
            aR();
            ah[I] = Math.max(0, aU);
            if (typeof aE === j) {
                try {
                    aE(ah)
                } catch (aV) {
                    aJ(q.HANDLER_ERROR, "flXHR::onreadystatechange(): Error", "An error occurred in the handler function. (" + aV.message + ")");
                    return
                }
            }
        }
        function aJ() {
            P();
            aK();
            aw = a;
            var aX;
            try {
                aX = new x.error(arguments[0], arguments[1], arguments[2], ah)
            } catch (aY) {
                function aV() {
                    this.number = 0;
                    this.name = "flXHR Error: Unknown";
                    this.description = "Unknown error from 'flXHR' library.";
                    this.message = this.description;
                    this.srcElement = ah;
                    var a2 = this.number, a1 = this.name, a4 = this.description;
                    function a3() {
                        return a2 + ", " + a1 + ", " + a4
                    }
                    this.toString = a3
                }
                aX = new aV()
            }
            var aZ = K;
            try {
                if (typeof ax === j) {
                    ax(aX);
                    aZ = a
                }
            } catch (aU) {
                var aW = aX.toString();
                function a0() {
                    this.number = q.HANDLER_ERROR;
                    this.name = "flXHR::onerror(): Error";
                    this.description = "An error occured in the handler function. (" + aU.message + ")\nPrevious:[" + aW + "]";
                    this.message = this.description;
                    this.srcElement = ah;
                    var a2 = this.number, a1 = this.name, a4 = this.description;
                    function a3() {
                        return a2 + ", " + a1 + ", " + a4
                    }
                    this.toString = a3
                }
                aX = new a0()
            }
            if (!aZ) {
                v(function() {
                    x.throwUnhandledError(aX.toString())
                }, 1)
            }
        }
        function U() {
            aj();
            aw = a;
            if (typeof aI === j) {
                try {
                    aI(ah)
                } catch (aU) {
                    aJ(q.HANDLER_ERROR, "flXHR::ontimeout(): Error", "An error occurred in the handler function. (" + aU.message + ")");
                    return
                }
            } else {
                aJ(q.TIMEOUT_ERROR, "flXHR: Operation Timed out", "The requested operation timed out.")
            }
        }
        function P() {
            e(ac);
            ac = null;
            e(V);
            V = null;
            e(ae);
            ae = null
        }
        function aT(aV, aW, aU) {
            af[af.length] = {func: aV,funcName: aW,args: aU};
            X = K
        }
        function aK() {
            if (!X) {
                X = a;
                var aV = af.length;
                for (var aU = 0; aU < aV; aU++) {
                    try {
                        af[aU] = K
                    } catch (aW) {
                    }
                }
                af = []
            }
        }
        function ao() {
            if (aG < 0) {
                ae = v(ao, 25);
                return
            }
            if (!X) {
                for (var aU = 0; aU < af.length; aU++) {
                    try {
                        if (af[aU] !== K) {
                            af[aU].func.apply(ah, af[aU].args);
                            af[aU] = K
                        }
                    } catch (aV) {
                        aJ(q.HANDLER_ERROR, "flXHR::" + af[aU].funcName + "(): Error", "An error occurred in the " + af[aU].funcName + "() function.");
                        return
                    }
                }
                X = a
            }
        }
        function aR() {
            try {
                ah[N] = aS;
                ah[I] = az;
                ah.status = ay;
                ah.statusText = ar;
                ah.responseText = Z;
                ah[C] = aE;
                ah[B] = ax;
                ah[L] = aI;
                ah[H] = R;
                ah[b] = ap
            } catch (aU) {
            }
        }
        function at() {
            try {
                aS = ah[N];
                if (ah.timeout !== null && (F = t(ah.timeout, 10)) > 0) {
                    aB = F
                }
                aE = ah[C];
                ax = ah[B];
                aI = ah[L];
                if (ah[H] !== null) {
                    if ((ah[H] !== R) && (aG >= 0)) {
                        aP.loadPolicy(ah[H])
                    }
                    R = ah[H]
                }
                if (ah[b] !== null) {
                    if ((ah[b] !== ap) && (aG >= 0)) {
                        aP.autoNoCacheHeader(ah[b])
                    }
                    ap = ah[b]
                }
            } catch (aU) {
            }
        }
        function aH() {
            aj();
            try {
                aP.reset()
            } catch (aU) {
            }
            ay = null;
            ar = null;
            Z = null;
            aF = null;
            aw = K;
            aR();
            R = f;
            at()
        }
        function aO(aU) {
            if (aU.checkPassed) {
                ad()
            } else {
                if (!aD) {
                    aJ(q.PLAYER_VERSION_ERROR, "flXHR: Insufficient Flash Player Version", "The Flash Player was either not detected, or the detected version (" + aU.playerVersionDetected + ") was not at least the minimum version (" + q.MIN_PLAYER_VERSION + ") needed by the 'flXHR' library.")
                } else {
                    p.UpdatePlayer()
                }
            }
        }
        function am(aU) {
            if (aU.updateStatus === J.UPDATE_CANCELED) {
                aJ(q.PLAYER_VERSION_ERROR, "flXHR: Flash Player Update Canceled", "The Flash Player was not updated.")
            } else {
                if (aU.updateStatus === J.UPDATE_FAILED) {
                    aJ(q.PLAYER_VERSION_ERROR, "flXHR: Flash Player Update Failed", "The Flash Player was either not detected or could not be updated.")
                }
            }
        }
        function al() {
            if (aB !== null && aB > 0) {
                V = v(U, aB)
            }
        }
        function aj() {
            P();
            aK();
            at();
            aG = 0;
            az = 0;
            try {
                aP.abort()
            } catch (aU) {
                aJ(q.CALL_ERROR, "flXHR::abort(): Failed", "The abort() call failed to complete.")
            }
            aR()
        }
        function aq() {
            at();
            if (typeof arguments[0] === y || typeof arguments[1] === y) {
                aJ(q.CALL_ERROR, "flXHR::open(): Failed", "The open() call requires 'method' and 'url' parameters.")
            } else {
                if (aG > 0 || aw) {
                    aH()
                }
                if (az === 0) {
                    ai(1)
                } else {
                    aG = 1
                }
                var aW = arguments[0], aV = arguments[1], aU = (typeof arguments[2] !== y) ? arguments[2] : a, aZ = (typeof arguments[3] !== y) ? arguments[3] : f, aY = (typeof arguments[4] !== y) ? arguments[4] : f;
                try {
                    aP.autoNoCacheHeader(ap);
                    aP.open(aW, aV, aU, aZ, aY)
                } catch (aX) {
                    aJ(q.CALL_ERROR, "flXHR::open(): Failed", "The open() call failed to complete.")
                }
            }
        }
        function av() {
            at();
            if (aG <= 1 && !aw) {
                var aU = (typeof arguments[0] !== y) ? arguments[0] : f;
                if (az === 1) {
                    ai(2)
                } else {
                    aG = 2
                }
                try {
                    aP.autoNoCacheHeader(ap);
                    aP.send(aU)
                } catch (aV) {
                    aJ(q.CALL_ERROR, "flXHR::send(): Failed", "The send() call failed to complete.")
                }
            } else {
                aJ(q.CALL_ERROR, "flXHR::send(): Failed", "The send() call cannot be made at this time.")
            }
        }
        function ag() {
            at();
            if (typeof arguments[0] === y || typeof arguments[1] === y) {
                aJ(q.CALL_ERROR, "flXHR::setRequestHeader(): Failed", "The setRequestHeader() call requires 'name' and 'value' parameters.")
            } else {
                if (!aw) {
                    var aV = (typeof arguments[0] !== y) ? arguments[0] : f, aU = (typeof arguments[1] !== y) ? arguments[1] : f;
                    try {
                        aP.setRequestHeader(aV, aU)
                    } catch (aW) {
                        aJ(q.CALL_ERROR, "flXHR::setRequestHeader(): Failed", "The setRequestHeader() call failed to complete.")
                    }
                }
            }
        }
        function ak() {
            at();
            return f
        }
        function an() {
            at();
            return []
        }
        ah = {readyState: az,responseText: Z,status: ay,statusText: ar,timeout: aB,open: function() {
                at();
                if (ah[I] === 0) {
                    aa(1)
                }
                if (!X || aG < 0) {
                    aT(aq, "open", arguments);
                    return
                }
                aq.apply({}, arguments)
            },send: function() {
                at();
                if (ah[I] === 1) {
                    aa(2)
                }
                if (!X || aG < 0) {
                    aT(av, "send", arguments);
                    return
                }
                av.apply({}, arguments)
            },abort: aj,setRequestHeader: function() {
                at();
                if (!X || aG < 0) {
                    aT(ag, "setRequestHeader", arguments);
                    return
                }
                ag.apply({}, arguments)
            },getResponseHeader: ak,getAllResponseHeaders: an,onreadystatechange: aE,ontimeout: aI,instanceId: aS,loadPolicyURL: R,noCacheHeader: ap,onerror: ax,Configure: function(aU) {
                if (typeof aU === n && aU !== null) {
                    if ((typeof aU[N] !== y) && (aU[N] !== null) && (aU[N] !== f)) {
                        aS = aU[N]
                    }
                    if (typeof aU[b] !== y) {
                        ap = !(!aU[b]);
                        if (aG >= 0) {
                            aP.autoNoCacheHeader(ap)
                        }
                    }
                    if ((typeof aU[C] !== y) && (aU[C] !== null)) {
                        aE = aU[C]
                    }
                    if ((typeof aU[B] !== y) && (aU[B] !== null)) {
                        ax = aU[B]
                    }
                    if ((typeof aU[L] !== y) && (aU[L] !== null)) {
                        aI = aU[L]
                    }
                    if ((typeof aU[o] !== y) && ((F = t(aU[o], 10)) > 0)) {
                        aB = F
                    }
                    if ((typeof aU[H] !== y) && (aU[H] !== null) && (aU[H] !== f) && (aU[H] !== R)) {
                        R = aU[H];
                        if (aG >= 0) {
                            aP.loadPolicy(R)
                        }
                    }
                    aR()
                }
            },Reset: aH,Destroy: aC};
        if (Y) {
            h[h.length] = ah
        }
        return ah
    };
    q = x.flXHR;
    q.HANDLER_ERROR = 10;
    q.CALL_ERROR = 11;
    q.TIMEOUT_ERROR = 12;
    q.DEPENDENCY_ERROR = 13;
    q.PLAYER_VERSION_ERROR = 14;
    q.SECURITY_ERROR = 15;
    q.COMMUNICATION_ERROR = 16;
    q.MIN_PLAYER_VERSION = "9.0.124";
    q.module_ready = function() {
    }
})(window);
define("libs/flXHR/flXHR", ["libs/flash/swfobject", "libs/flash/checkplayer", "libs/flXHR/flensed"], function() {
});
(function(d) {
    d.flxhrProxy = flensed.flXHR;
    var c = [], b = /^(?:post|get)$/i, a = {instancePooling: true,autoUpdatePlayer: true};
    d.flxhrProxy.registerOptions = function(f, e) {
        e = d.extend({}, a, e || {});
        c.push(function(g) {
            if (g.substring(0, f.length) === f) {
                return e
            }
        })
    };
    d.ajaxPrefilter(function(e) {
        var h, g;
        if (e.async && b.test(e.type)) {
            for (var f = 0; f < c.length; f++) {
                if (g = c[f](e.url)) {
                    h = g
                }
            }
            if (h || e.flxhr) {
                e.flxhrOptions = h || a;
                return "__flxhr__"
            }
        }
    });
    d.ajaxTransport("__flxhr__", function(e, f, g) {
        e.dataTypes.shift();
        if (!e.async) {
            return
        }
        var h;
        return {send: function(o, j) {
                var k = e.flxhrOptions || a, n = g.__flXHR__ = new d.flxhrProxy(k), m;
                h = function(i, p) {
                    if (h && (p || n.readyState === 4)) {
                        h = n.onreadystatechange = n.onerror = null;
                        if (p) {
                            if (!(m = (p !== "abort"))) {
                                n.abort()
                            }
                            j(i, p)
                        } else {
                            var q = {}, r = n.responseXML;
                            if (r && r.documentElement) {
                                q.xml = r
                            }
                            q.text = n.responseText;
                            j(n.status, n.statusText, q, n.getAllResponseHeaders())
                        }
                    }
                };
                if (d.isFunction(k.onerror)) {
                    g.fail(function() {
                        if (m) {
                            k.onerror.apply(this, arguments)
                        }
                    })
                }
                n.onreadystatechange = h;
                n.onerror = function(i) {
                    j(-1, i)
                };
                n.open(e.type, e.url, e.async, e.username, e.password);
                for (var l in o) {
                    n.setRequestHeader(l, o[l])
                }
                n.send((e.hasContent && e.data) || null)
            },abort: function() {
                if (h) {
                    h(0, "abort")
                }
            }}
    })
})(jQuery);
define("libs/jquery/external/jquery.flXHR", ["jquery", "libs/flXHR/flXHR"], (function(a) {
    return function() {
        var b, c;
        return b || a.jQuery
    }
}(this)));
define("libCustom/jqueryDefaultSettings", ["jquery", "libs/jquery/external/jquery.flXHR"], function(b) {
    b.ajaxSetup({timeout: 60 * 60 * 1000,dataType: "json",xhrFields: {withCredentials: true},async: true,cache: false});
    var a = b.ajax;
    b.ajax = function(e, d) {
        var c = d;
        if (typeof e === "object") {
            c = e
        }
        if (!b.support.cors) {
            c.flxhr = true;
            var f = require("config/apiInfos");
            if (f) {
                var g = f.get(c.url || e);
                if (g && g.SUPPORT_JSONP && /json/i.test(c.dataType || b.ajaxSettings.dataType) && /get/i.test(c.type || b.ajaxSettings.type)) {
                    c.type = "GET";
                    c.dataType = "jsonp";
                    c.flxhr = false
                }
            }
        }
        return a.apply(b, arguments)
    };
    return b
});
/*! jQuery UI - v1.10.4 - 2014-03-19
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(b, f) {
    var a = 0, e = /^ui-id-\d+$/;
    b.ui = b.ui || {};
    b.extend(b.ui, {version: "1.10.4",keyCode: {BACKSPACE: 8,COMMA: 188,DELETE: 46,DOWN: 40,END: 35,ENTER: 13,ESCAPE: 27,HOME: 36,LEFT: 37,NUMPAD_ADD: 107,NUMPAD_DECIMAL: 110,NUMPAD_DIVIDE: 111,NUMPAD_ENTER: 108,NUMPAD_MULTIPLY: 106,NUMPAD_SUBTRACT: 109,PAGE_DOWN: 34,PAGE_UP: 33,PERIOD: 190,RIGHT: 39,SPACE: 32,TAB: 9,UP: 38}});
    b.fn.extend({focus: (function(g) {
            return function(h, i) {
                return typeof h === "number" ? this.each(function() {
                    var j = this;
                    setTimeout(function() {
                        b(j).focus();
                        if (i) {
                            i.call(j)
                        }
                    }, h)
                }) : g.apply(this, arguments)
            }
        })(b.fn.focus),scrollParent: function() {
            var g;
            if ((b.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                g = this.parents().filter(function() {
                    return (/(relative|absolute|fixed)/).test(b.css(this, "position")) && (/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
                }).eq(0)
            } else {
                g = this.parents().filter(function() {
                    return (/(auto|scroll)/).test(b.css(this, "overflow") + b.css(this, "overflow-y") + b.css(this, "overflow-x"))
                }).eq(0)
            }
            return (/fixed/).test(this.css("position")) || !g.length ? b(document) : g
        },zIndex: function(j) {
            if (j !== f) {
                return this.css("zIndex", j)
            }
            if (this.length) {
                var h = b(this[0]), g, i;
                while (h.length && h[0] !== document) {
                    g = h.css("position");
                    if (g === "absolute" || g === "relative" || g === "fixed") {
                        i = parseInt(h.css("zIndex"), 10);
                        if (!isNaN(i) && i !== 0) {
                            return i
                        }
                    }
                    h = h.parent()
                }
            }
            return 0
        },uniqueId: function() {
            return this.each(function() {
                if (!this.id) {
                    this.id = "ui-id-" + (++a)
                }
            })
        },removeUniqueId: function() {
            return this.each(function() {
                if (e.test(this.id)) {
                    b(this).removeAttr("id")
                }
            })
        }});
    function d(i, g) {
        var k, j, h, l = i.nodeName.toLowerCase();
        if ("area" === l) {
            k = i.parentNode;
            j = k.name;
            if (!i.href || !j || k.nodeName.toLowerCase() !== "map") {
                return false
            }
            h = b("img[usemap=#" + j + "]")[0];
            return !!h && c(h)
        }
        return (/input|select|textarea|button|object/.test(l) ? !i.disabled : "a" === l ? i.href || g : g) && c(i)
    }
    function c(g) {
        return b.expr.filters.visible(g) && !b(g).parents().addBack().filter(function() {
            return b.css(this, "visibility") === "hidden"
        }).length
    }
    b.extend(b.expr[":"], {data: b.expr.createPseudo ? b.expr.createPseudo(function(g) {
            return function(h) {
                return !!b.data(h, g)
            }
        }) : function(j, h, g) {
            return !!b.data(j, g[3])
        },focusable: function(g) {
            return d(g, !isNaN(b.attr(g, "tabindex")))
        },tabbable: function(i) {
            var g = b.attr(i, "tabindex"), h = isNaN(g);
            return (h || g >= 0) && d(i, !h)
        }});
    if (!b("<a>").outerWidth(1).jquery) {
        b.each(["Width", "Height"], function(j, g) {
            var h = g === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], k = g.toLowerCase(), m = {innerWidth: b.fn.innerWidth,innerHeight: b.fn.innerHeight,outerWidth: b.fn.outerWidth,outerHeight: b.fn.outerHeight};
            function l(o, n, i, p) {
                b.each(h, function() {
                    n -= parseFloat(b.css(o, "padding" + this)) || 0;
                    if (i) {
                        n -= parseFloat(b.css(o, "border" + this + "Width")) || 0
                    }
                    if (p) {
                        n -= parseFloat(b.css(o, "margin" + this)) || 0
                    }
                });
                return n
            }
            b.fn["inner" + g] = function(i) {
                if (i === f) {
                    return m["inner" + g].call(this)
                }
                return this.each(function() {
                    b(this).css(k, l(this, i) + "px")
                })
            };
            b.fn["outer" + g] = function(i, n) {
                if (typeof i !== "number") {
                    return m["outer" + g].call(this, i)
                }
                return this.each(function() {
                    b(this).css(k, l(this, i, true, n) + "px")
                })
            }
        })
    }
    if (!b.fn.addBack) {
        b.fn.addBack = function(g) {
            return this.add(g == null ? this.prevObject : this.prevObject.filter(g))
        }
    }
    if (b("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        b.fn.removeData = (function(g) {
            return function(h) {
                if (arguments.length) {
                    return g.call(this, b.camelCase(h))
                } else {
                    return g.call(this)
                }
            }
        })(b.fn.removeData)
    }
    b.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    b.support.selectstart = "onselectstart" in document.createElement("div");
    b.fn.extend({disableSelection: function() {
            return this.bind((b.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(g) {
                g.preventDefault()
            })
        },enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }});
    b.extend(b.ui, {plugin: {add: function(h, j, l) {
                var g, k = b.ui[h].prototype;
                for (g in l) {
                    k.plugins[g] = k.plugins[g] || [];
                    k.plugins[g].push([j, l[g]])
                }
            },call: function(g, j, h) {
                var k, l = g.plugins[j];
                if (!l || !g.element[0].parentNode || g.element[0].parentNode.nodeType === 11) {
                    return
                }
                for (k = 0; k < l.length; k++) {
                    if (g.options[l[k][0]]) {
                        l[k][1].apply(g.element, h)
                    }
                }
            }},hasScroll: function(j, h) {
            if (b(j).css("overflow") === "hidden") {
                return false
            }
            var g = (h && h === "left") ? "scrollLeft" : "scrollTop", i = false;
            if (j[g] > 0) {
                return true
            }
            j[g] = 1;
            i = (j[g] > 0);
            j[g] = 0;
            return i
        }})
})(jQuery);
(function(b, e) {
    var a = 0, d = Array.prototype.slice, c = b.cleanData;
    b.cleanData = function(f) {
        for (var g = 0, h; (h = f[g]) != null; g++) {
            try {
                b(h).triggerHandler("remove")
            } catch (j) {
            }
        }
        c(f)
    };
    b.widget = function(f, g, n) {
        var k, l, i, m, h = {}, j = f.split(".")[0];
        f = f.split(".")[1];
        k = j + "-" + f;
        if (!n) {
            n = g;
            g = b.Widget
        }
        b.expr[":"][k.toLowerCase()] = function(o) {
            return !!b.data(o, k)
        };
        b[j] = b[j] || {};
        l = b[j][f];
        i = b[j][f] = function(o, p) {
            if (!this._createWidget) {
                return new i(o, p)
            }
            if (arguments.length) {
                this._createWidget(o, p)
            }
        };
        b.extend(i, l, {version: n.version,_proto: b.extend({}, n),_childConstructors: []});
        m = new g();
        m.options = b.widget.extend({}, m.options);
        b.each(n, function(p, o) {
            if (!b.isFunction(o)) {
                h[p] = o;
                return
            }
            h[p] = (function() {
                var q = function() {
                    return g.prototype[p].apply(this, arguments)
                }, r = function(s) {
                    return g.prototype[p].apply(this, s)
                };
                return function() {
                    var u = this._super, s = this._superApply, t;
                    this._super = q;
                    this._superApply = r;
                    t = o.apply(this, arguments);
                    this._super = u;
                    this._superApply = s;
                    return t
                }
            })()
        });
        i.prototype = b.widget.extend(m, {widgetEventPrefix: l ? (m.widgetEventPrefix || f) : f}, h, {constructor: i,namespace: j,widgetName: f,widgetFullName: k});
        if (l) {
            b.each(l._childConstructors, function(p, q) {
                var o = q.prototype;
                b.widget(o.namespace + "." + o.widgetName, i, q._proto)
            });
            delete l._childConstructors
        } else {
            g._childConstructors.push(i)
        }
        b.widget.bridge(f, i)
    };
    b.widget.extend = function(k) {
        var g = d.call(arguments, 1), j = 0, f = g.length, h, i;
        for (; j < f; j++) {
            for (h in g[j]) {
                i = g[j][h];
                if (g[j].hasOwnProperty(h) && i !== e) {
                    if (b.isPlainObject(i)) {
                        k[h] = b.isPlainObject(k[h]) ? b.widget.extend({}, k[h], i) : b.widget.extend({}, i)
                    } else {
                        k[h] = i
                    }
                }
            }
        }
        return k
    };
    b.widget.bridge = function(g, f) {
        var h = f.prototype.widgetFullName || g;
        b.fn[g] = function(k) {
            var i = typeof k === "string", j = d.call(arguments, 1), l = this;
            k = !i && j.length ? b.widget.extend.apply(null, [k].concat(j)) : k;
            if (i) {
                this.each(function() {
                    var n, m = b.data(this, h);
                    if (!m) {
                        return b.error("cannot call methods on " + g + " prior to initialization; attempted to call method '" + k + "'")
                    }
                    if (!b.isFunction(m[k]) || k.charAt(0) === "_") {
                        return b.error("no such method '" + k + "' for " + g + " widget instance")
                    }
                    n = m[k].apply(m, j);
                    if (n !== m && n !== e) {
                        l = n && n.jquery ? l.pushStack(n.get()) : n;
                        return false
                    }
                })
            } else {
                this.each(function() {
                    var m = b.data(this, h);
                    if (m) {
                        m.option(k || {})._init()
                    } else {
                        b.data(this, h, new f(k, this))
                    }
                })
            }
            return l
        }
    };
    b.Widget = function() {
    };
    b.Widget._childConstructors = [];
    b.Widget.prototype = {widgetName: "widget",widgetEventPrefix: "",defaultElement: "<div>",options: {disabled: false,create: null},_createWidget: function(f, g) {
            g = b(g || this.defaultElement || this)[0];
            this.element = b(g);
            this.uuid = a++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = b.widget.extend({}, this.options, this._getCreateOptions(), f);
            this.bindings = b();
            this.hoverable = b();
            this.focusable = b();
            if (g !== this) {
                b.data(g, this.widgetFullName, this);
                this._on(true, this.element, {remove: function(h) {
                        if (h.target === g) {
                            this.destroy()
                        }
                    }});
                this.document = b(g.style ? g.ownerDocument : g.document || g);
                this.window = b(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },_getCreateOptions: b.noop,_getCreateEventData: b.noop,_create: b.noop,_init: b.noop,destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },_destroy: b.noop,widget: function() {
            return this.element
        },option: function(j, k) {
            var f = j, l, h, g;
            if (arguments.length === 0) {
                return b.widget.extend({}, this.options)
            }
            if (typeof j === "string") {
                f = {};
                l = j.split(".");
                j = l.shift();
                if (l.length) {
                    h = f[j] = b.widget.extend({}, this.options[j]);
                    for (g = 0; g < l.length - 1; g++) {
                        h[l[g]] = h[l[g]] || {};
                        h = h[l[g]]
                    }
                    j = l.pop();
                    if (arguments.length === 1) {
                        return h[j] === e ? null : h[j]
                    }
                    h[j] = k
                } else {
                    if (arguments.length === 1) {
                        return this.options[j] === e ? null : this.options[j]
                    }
                    f[j] = k
                }
            }
            this._setOptions(f);
            return this
        },_setOptions: function(f) {
            var g;
            for (g in f) {
                this._setOption(g, f[g])
            }
            return this
        },_setOption: function(f, g) {
            this.options[f] = g;
            if (f === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!g).attr("aria-disabled", g);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            }
            return this
        },enable: function() {
            return this._setOption("disabled", false)
        },disable: function() {
            return this._setOption("disabled", true)
        },_on: function(i, h, g) {
            var j, f = this;
            if (typeof i !== "boolean") {
                g = h;
                h = i;
                i = false
            }
            if (!g) {
                g = h;
                h = this.element;
                j = this.widget()
            } else {
                h = j = b(h);
                this.bindings = this.bindings.add(h)
            }
            b.each(g, function(p, o) {
                function m() {
                    if (!i && (f.options.disabled === true || b(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof o === "string" ? f[o] : o).apply(f, arguments)
                }
                if (typeof o !== "string") {
                    m.guid = o.guid = o.guid || m.guid || b.guid++
                }
                var n = p.match(/^(\w+)\s*(.*)$/), l = n[1] + f.eventNamespace, k = n[2];
                if (k) {
                    j.delegate(k, l, m)
                } else {
                    h.bind(l, m)
                }
            })
        },_off: function(g, f) {
            f = (f || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            g.unbind(f).undelegate(f)
        },_delay: function(i, h) {
            function g() {
                return (typeof i === "string" ? f[i] : i).apply(f, arguments)
            }
            var f = this;
            return setTimeout(g, h || 0)
        },_hoverable: function(f) {
            this.hoverable = this.hoverable.add(f);
            this._on(f, {mouseenter: function(g) {
                    b(g.currentTarget).addClass("ui-state-hover")
                },mouseleave: function(g) {
                    b(g.currentTarget).removeClass("ui-state-hover")
                }})
        },_focusable: function(f) {
            this.focusable = this.focusable.add(f);
            this._on(f, {focusin: function(g) {
                    b(g.currentTarget).addClass("ui-state-focus")
                },focusout: function(g) {
                    b(g.currentTarget).removeClass("ui-state-focus")
                }})
        },_trigger: function(f, g, h) {
            var k, j, i = this.options[f];
            h = h || {};
            g = b.Event(g);
            g.type = (f === this.widgetEventPrefix ? f : this.widgetEventPrefix + f).toLowerCase();
            g.target = this.element[0];
            j = g.originalEvent;
            if (j) {
                for (k in j) {
                    if (!(k in g)) {
                        g[k] = j[k]
                    }
                }
            }
            this.element.trigger(g, h);
            return !(b.isFunction(i) && i.apply(this.element[0], [g].concat(h)) === false || g.isDefaultPrevented())
        }};
    b.each({show: "fadeIn",hide: "fadeOut"}, function(g, f) {
        b.Widget.prototype["_" + g] = function(j, i, l) {
            if (typeof i === "string") {
                i = {effect: i}
            }
            var k, h = !i ? g : i === true || typeof i === "number" ? f : i.effect || f;
            i = i || {};
            if (typeof i === "number") {
                i = {duration: i}
            }
            k = !b.isEmptyObject(i);
            i.complete = l;
            if (i.delay) {
                j.delay(i.delay)
            }
            if (k && b.effects && b.effects.effect[h]) {
                j[g](i)
            } else {
                if (h !== g && j[h]) {
                    j[h](i.duration, i.easing, l)
                } else {
                    j.queue(function(m) {
                        b(this)[g]();
                        if (l) {
                            l.call(j[0])
                        }
                        m()
                    })
                }
            }
        }
    })
})(jQuery);
(function(b, c) {
    var a = false;
    b(document).mouseup(function() {
        a = false
    });
    b.widget("ui.mouse", {version: "1.10.4",options: {cancel: "input,textarea,button,select,option",distance: 1,delay: 0},_mouseInit: function() {
            var d = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return d._mouseDown(e)
            }).bind("click." + this.widgetName, function(e) {
                if (true === b.data(e.target, d.widgetName + ".preventClickEvent")) {
                    b.removeData(e.target, d.widgetName + ".preventClickEvent");
                    e.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },_mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },_mouseDown: function(f) {
            if (a) {
                return
            }
            (this._mouseStarted && this._mouseUp(f));
            this._mouseDownEvent = f;
            var e = this, g = (f.which === 1), d = (typeof this.options.cancel === "string" && f.target.nodeName ? b(f.target).closest(this.options.cancel).length : false);
            if (!g || d || !this._mouseCapture(f)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(f) && this._mouseDelayMet(f)) {
                this._mouseStarted = (this._mouseStart(f) !== false);
                if (!this._mouseStarted) {
                    f.preventDefault();
                    return true
                }
            }
            if (true === b.data(f.target, this.widgetName + ".preventClickEvent")) {
                b.removeData(f.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function(h) {
                return e._mouseMove(h)
            };
            this._mouseUpDelegate = function(h) {
                return e._mouseUp(h)
            };
            b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            f.preventDefault();
            a = true;
            return true
        },_mouseMove: function(d) {
            if (b.ui.ie && (!document.documentMode || document.documentMode < 9) && !d.button) {
                return this._mouseUp(d)
            }
            if (this._mouseStarted) {
                this._mouseDrag(d);
                return d.preventDefault()
            }
            if (this._mouseDistanceMet(d) && this._mouseDelayMet(d)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, d) !== false);
                (this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d))
            }
            return !this._mouseStarted
        },_mouseUp: function(d) {
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (d.target === this._mouseDownEvent.target) {
                    b.data(d.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(d)
            }
            return false
        },_mouseDistanceMet: function(d) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - d.pageX), Math.abs(this._mouseDownEvent.pageY - d.pageY)) >= this.options.distance)
        },_mouseDelayMet: function() {
            return this.mouseDelayMet
        },_mouseStart: function() {
        },_mouseDrag: function() {
        },_mouseStop: function() {
        },_mouseCapture: function() {
            return true
        }})
})(jQuery);
(function(e, c) {
    e.ui = e.ui || {};
    var j, k = Math.max, o = Math.abs, m = Math.round, d = /left|center|right/, h = /top|center|bottom/, a = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, b = /%$/, g = e.fn.position;
    function n(r, q, p) {
        return [parseFloat(r[0]) * (b.test(r[0]) ? q / 100 : 1), parseFloat(r[1]) * (b.test(r[1]) ? p / 100 : 1)]
    }
    function i(p, q) {
        return parseInt(e.css(p, q), 10) || 0
    }
    function f(q) {
        var p = q[0];
        if (p.nodeType === 9) {
            return {width: q.width(),height: q.height(),offset: {top: 0,left: 0}}
        }
        if (e.isWindow(p)) {
            return {width: q.width(),height: q.height(),offset: {top: q.scrollTop(),left: q.scrollLeft()}}
        }
        if (p.preventDefault) {
            return {width: 0,height: 0,offset: {top: p.pageY,left: p.pageX}}
        }
        return {width: q.outerWidth(),height: q.outerHeight(),offset: q.offset()}
    }
    e.position = {scrollbarWidth: function() {
            if (j !== c) {
                return j
            }
            var q, p, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), r = s.children()[0];
            e("body").append(s);
            q = r.offsetWidth;
            s.css("overflow", "scroll");
            p = r.offsetWidth;
            if (q === p) {
                p = s[0].clientWidth
            }
            s.remove();
            return (j = q - p)
        },getScrollInfo: function(t) {
            var s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"), q = s === "scroll" || (s === "auto" && t.width < t.element[0].scrollWidth), p = r === "scroll" || (r === "auto" && t.height < t.element[0].scrollHeight);
            return {width: p ? e.position.scrollbarWidth() : 0,height: q ? e.position.scrollbarWidth() : 0}
        },getWithinInfo: function(q) {
            var r = e(q || window), p = e.isWindow(r[0]), s = !!r[0] && r[0].nodeType === 9;
            return {element: r,isWindow: p,isDocument: s,offset: r.offset() || {left: 0,top: 0},scrollLeft: r.scrollLeft(),scrollTop: r.scrollTop(),width: p ? r.width() : r.outerWidth(),height: p ? r.height() : r.outerHeight()}
        }};
    e.fn.position = function(z) {
        if (!z || !z.of) {
            return g.apply(this, arguments)
        }
        z = e.extend({}, z);
        var A, w, u, y, t, p, v = e(z.of), s = e.position.getWithinInfo(z.within), q = e.position.getScrollInfo(s), x = (z.collision || "flip").split(" "), r = {};
        p = f(v);
        if (v[0].preventDefault) {
            z.at = "left top"
        }
        w = p.width;
        u = p.height;
        y = p.offset;
        t = e.extend({}, y);
        e.each(["my", "at"], function() {
            var D = (z[this] || "").split(" "), C, B;
            if (D.length === 1) {
                D = d.test(D[0]) ? D.concat(["center"]) : h.test(D[0]) ? ["center"].concat(D) : ["center", "center"]
            }
            D[0] = d.test(D[0]) ? D[0] : "center";
            D[1] = h.test(D[1]) ? D[1] : "center";
            C = a.exec(D[0]);
            B = a.exec(D[1]);
            r[this] = [C ? C[0] : 0, B ? B[0] : 0];
            z[this] = [l.exec(D[0])[0], l.exec(D[1])[0]]
        });
        if (x.length === 1) {
            x[1] = x[0]
        }
        if (z.at[0] === "right") {
            t.left += w
        } else {
            if (z.at[0] === "center") {
                t.left += w / 2
            }
        }
        if (z.at[1] === "bottom") {
            t.top += u
        } else {
            if (z.at[1] === "center") {
                t.top += u / 2
            }
        }
        A = n(r.at, w, u);
        t.left += A[0];
        t.top += A[1];
        return this.each(function() {
            var C, M, E = e(this), H = E.outerWidth(), D = E.outerHeight(), F = i(this, "marginLeft"), B = i(this, "marginTop"), L = H + F + i(this, "marginRight") + q.width, K = D + B + i(this, "marginBottom") + q.height, I = e.extend({}, t), J = n(r.my, E.outerWidth(), E.outerHeight());
            if (z.my[0] === "right") {
                I.left -= H
            } else {
                if (z.my[0] === "center") {
                    I.left -= H / 2
                }
            }
            if (z.my[1] === "bottom") {
                I.top -= D
            } else {
                if (z.my[1] === "center") {
                    I.top -= D / 2
                }
            }
            I.left += J[0];
            I.top += J[1];
            if (!e.support.offsetFractions) {
                I.left = m(I.left);
                I.top = m(I.top)
            }
            C = {marginLeft: F,marginTop: B};
            e.each(["left", "top"], function(O, N) {
                if (e.ui.position[x[O]]) {
                    e.ui.position[x[O]][N](I, {targetWidth: w,targetHeight: u,elemWidth: H,elemHeight: D,collisionPosition: C,collisionWidth: L,collisionHeight: K,offset: [A[0] + J[0], A[1] + J[1]],my: z.my,at: z.at,within: s,elem: E})
                }
            });
            if (z.using) {
                M = function(Q) {
                    var S = y.left - I.left, P = S + w - H, R = y.top - I.top, O = R + u - D, N = {target: {element: v,left: y.left,top: y.top,width: w,height: u},element: {element: E,left: I.left,top: I.top,width: H,height: D},horizontal: P < 0 ? "left" : S > 0 ? "right" : "center",vertical: O < 0 ? "top" : R > 0 ? "bottom" : "middle"};
                    if (w < H && o(S + P) < w) {
                        N.horizontal = "center"
                    }
                    if (u < D && o(R + O) < u) {
                        N.vertical = "middle"
                    }
                    if (k(o(S), o(P)) > k(o(R), o(O))) {
                        N.important = "horizontal"
                    } else {
                        N.important = "vertical"
                    }
                    z.using.call(this, Q, N)
                }
            }
            E.offset(e.extend(I, {using: M}))
        })
    };
    e.ui.position = {fit: {left: function(t, s) {
                var r = s.within, v = r.isWindow ? r.scrollLeft : r.offset.left, x = r.width, u = t.left - s.collisionPosition.marginLeft, w = v - u, q = u + s.collisionWidth - x - v, p;
                if (s.collisionWidth > x) {
                    if (w > 0 && q <= 0) {
                        p = t.left + w + s.collisionWidth - x - v;
                        t.left += w - p
                    } else {
                        if (q > 0 && w <= 0) {
                            t.left = v
                        } else {
                            if (w > q) {
                                t.left = v + x - s.collisionWidth
                            } else {
                                t.left = v
                            }
                        }
                    }
                } else {
                    if (w > 0) {
                        t.left += w
                    } else {
                        if (q > 0) {
                            t.left -= q
                        } else {
                            t.left = k(t.left - u, t.left)
                        }
                    }
                }
            },top: function(s, r) {
                var q = r.within, w = q.isWindow ? q.scrollTop : q.offset.top, x = r.within.height, u = s.top - r.collisionPosition.marginTop, v = w - u, t = u + r.collisionHeight - x - w, p;
                if (r.collisionHeight > x) {
                    if (v > 0 && t <= 0) {
                        p = s.top + v + r.collisionHeight - x - w;
                        s.top += v - p
                    } else {
                        if (t > 0 && v <= 0) {
                            s.top = w
                        } else {
                            if (v > t) {
                                s.top = w + x - r.collisionHeight
                            } else {
                                s.top = w
                            }
                        }
                    }
                } else {
                    if (v > 0) {
                        s.top += v
                    } else {
                        if (t > 0) {
                            s.top -= t
                        } else {
                            s.top = k(s.top - u, s.top)
                        }
                    }
                }
            }},flip: {left: function(v, u) {
                var t = u.within, z = t.offset.left + t.scrollLeft, C = t.width, r = t.isWindow ? t.scrollLeft : t.offset.left, w = v.left - u.collisionPosition.marginLeft, A = w - r, q = w + u.collisionWidth - C - r, y = u.my[0] === "left" ? -u.elemWidth : u.my[0] === "right" ? u.elemWidth : 0, B = u.at[0] === "left" ? u.targetWidth : u.at[0] === "right" ? -u.targetWidth : 0, s = -2 * u.offset[0], p, x;
                if (A < 0) {
                    p = v.left + y + B + s + u.collisionWidth - C - z;
                    if (p < 0 || p < o(A)) {
                        v.left += y + B + s
                    }
                } else {
                    if (q > 0) {
                        x = v.left - u.collisionPosition.marginLeft + y + B + s - r;
                        if (x > 0 || o(x) < q) {
                            v.left += y + B + s
                        }
                    }
                }
            },top: function(u, t) {
                var s = t.within, B = s.offset.top + s.scrollTop, C = s.height, p = s.isWindow ? s.scrollTop : s.offset.top, w = u.top - t.collisionPosition.marginTop, y = w - p, v = w + t.collisionHeight - C - p, z = t.my[1] === "top", x = z ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0, D = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0, r = -2 * t.offset[1], A, q;
                if (y < 0) {
                    q = u.top + x + D + r + t.collisionHeight - C - B;
                    if ((u.top + x + D + r) > y && (q < 0 || q < o(y))) {
                        u.top += x + D + r
                    }
                } else {
                    if (v > 0) {
                        A = u.top - t.collisionPosition.marginTop + x + D + r - p;
                        if ((u.top + x + D + r) > v && (A > 0 || o(A) < v)) {
                            u.top += x + D + r
                        }
                    }
                }
            }},flipfit: {left: function() {
                e.ui.position.flip.left.apply(this, arguments);
                e.ui.position.fit.left.apply(this, arguments)
            },top: function() {
                e.ui.position.flip.top.apply(this, arguments);
                e.ui.position.fit.top.apply(this, arguments)
            }}};
    (function() {
        var t, v, q, s, r, p = document.getElementsByTagName("body")[0], u = document.createElement("div");
        t = document.createElement(p ? "div" : "body");
        q = {visibility: "hidden",width: 0,height: 0,border: 0,margin: 0,background: "none"};
        if (p) {
            e.extend(q, {position: "absolute",left: "-1000px",top: "-1000px"})
        }
        for (r in q) {
            t.style[r] = q[r]
        }
        t.appendChild(u);
        v = p || document.documentElement;
        v.insertBefore(t, v.firstChild);
        u.style.cssText = "position: absolute; left: 10.7432222px;";
        s = e(u).offset().left;
        e.support.offsetFractions = s > 10 && s < 11;
        t.innerHTML = "";
        v.removeChild(t)
    })()
}(jQuery));
(function(a, b) {
    a.widget("ui.draggable", a.ui.mouse, {version: "1.10.4",widgetEventPrefix: "drag",options: {addClasses: true,appendTo: "parent",axis: false,connectToSortable: false,containment: false,cursor: "auto",cursorAt: false,grid: false,handle: false,helper: "original",iframeFix: false,opacity: false,refreshPositions: false,revert: false,revertDuration: 500,scope: "default",scroll: true,scrollSensitivity: 20,scrollSpeed: 20,snap: false,snapMode: "both",snapTolerance: 20,stack: false,zIndex: false,drag: null,start: null,stop: null},_create: function() {
            if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            }
            if (this.options.addClasses) {
                this.element.addClass("ui-draggable")
            }
            if (this.options.disabled) {
                this.element.addClass("ui-draggable-disabled")
            }
            this._mouseInit()
        },_destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy()
        },_mouseCapture: function(c) {
            var d = this.options;
            if (this.helper || d.disabled || a(c.target).closest(".ui-resizable-handle").length > 0) {
                return false
            }
            this.handle = this._getHandle(c);
            if (!this.handle) {
                return false
            }
            a(d.iframeFix === true ? "iframe" : d.iframeFix).each(function() {
                a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px",height: this.offsetHeight + "px",position: "absolute",opacity: "0.001",zIndex: 1000}).css(a(this).offset()).appendTo("body")
            });
            return true
        },_mouseStart: function(c) {
            var d = this.options;
            this.helper = this._createHelper(c);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offsetParent = this.helper.offsetParent();
            this.offsetParentCssPosition = this.offsetParent.css("position");
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left};
            this.offset.scroll = false;
            a.extend(this.offset, {click: {left: c.pageX - this.offset.left,top: c.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()});
            this.originalPosition = this.position = this._generatePosition(c);
            this.originalPageX = c.pageX;
            this.originalPageY = c.pageY;
            (d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt));
            this._setContainment();
            if (this._trigger("start", c) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if (a.ui.ddmanager && !d.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, c)
            }
            this._mouseDrag(c, true);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStart(this, c)
            }
            return true
        },_mouseDrag: function(c, e) {
            if (this.offsetParentCssPosition === "fixed") {
                this.offset.parent = this._getParentOffset()
            }
            this.position = this._generatePosition(c);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!e) {
                var d = this._uiHash();
                if (this._trigger("drag", c, d) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = d.position
            }
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, c)
            }
            return false
        },_mouseStop: function(d) {
            var c = this, e = false;
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                e = a.ui.ddmanager.drop(this, d)
            }
            if (this.dropped) {
                e = this.dropped;
                this.dropped = false
            }
            if (this.options.helper === "original" && !a.contains(this.element[0].ownerDocument, this.element[0])) {
                return false
            }
            if ((this.options.revert === "invalid" && !e) || (this.options.revert === "valid" && e) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, e))) {
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (c._trigger("stop", d) !== false) {
                        c._clear()
                    }
                })
            } else {
                if (this._trigger("stop", d) !== false) {
                    this._clear()
                }
            }
            return false
        },_mouseUp: function(c) {
            a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            });
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStop(this, c)
            }
            return a.ui.mouse.prototype._mouseUp.call(this, c)
        },cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({})
            } else {
                this._clear()
            }
            return this
        },_getHandle: function(c) {
            return this.options.handle ? !!a(c.target).closest(this.element.find(this.options.handle)).length : true
        },_createHelper: function(d) {
            var e = this.options, c = a.isFunction(e.helper) ? a(e.helper.apply(this.element[0], [d])) : (e.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!c.parents("body").length) {
                c.appendTo((e.appendTo === "parent" ? this.element[0].parentNode : e.appendTo))
            }
            if (c[0] !== this.element[0] && !(/(fixed|absolute)/).test(c.css("position"))) {
                c.css("position", "absolute")
            }
            return c
        },_adjustOffsetFromHelper: function(c) {
            if (typeof c === "string") {
                c = c.split(" ")
            }
            if (a.isArray(c)) {
                c = {left: +c[0],top: +c[1] || 0}
            }
            if ("left" in c) {
                this.offset.click.left = c.left + this.margins.left
            }
            if ("right" in c) {
                this.offset.click.left = this.helperProportions.width - c.right + this.margins.left
            }
            if ("top" in c) {
                this.offset.click.top = c.top + this.margins.top
            }
            if ("bottom" in c) {
                this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
            }
        },_getParentOffset: function() {
            var c = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) {
                c.left += this.scrollParent.scrollLeft();
                c.top += this.scrollParent.scrollTop()
            }
            if ((this.offsetParent[0] === document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && a.ui.ie)) {
                c = {top: 0,left: 0}
            }
            return {top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        },_getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var c = this.element.position();
                return {top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            } else {
                return {top: 0,left: 0}
            }
        },_cacheMargins: function() {
            this.margins = {left: (parseInt(this.element.css("marginLeft"), 10) || 0),top: (parseInt(this.element.css("marginTop"), 10) || 0),right: (parseInt(this.element.css("marginRight"), 10) || 0),bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)}
        },_cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
        },_setContainment: function() {
            var e, g, d, f = this.options;
            if (!f.containment) {
                this.containment = null;
                return
            }
            if (f.containment === "window") {
                this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (f.containment === "document") {
                this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (f.containment.constructor === Array) {
                this.containment = f.containment;
                return
            }
            if (f.containment === "parent") {
                f.containment = this.helper[0].parentNode
            }
            g = a(f.containment);
            d = g[0];
            if (!d) {
                return
            }
            e = g.css("overflow") !== "hidden";
            this.containment = [(parseInt(g.css("borderLeftWidth"), 10) || 0) + (parseInt(g.css("paddingLeft"), 10) || 0), (parseInt(g.css("borderTopWidth"), 10) || 0) + (parseInt(g.css("paddingTop"), 10) || 0), (e ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(g.css("borderRightWidth"), 10) || 0) - (parseInt(g.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(g.css("borderBottomWidth"), 10) || 0) - (parseInt(g.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
            this.relative_container = g
        },_convertPositionTo: function(f, g) {
            if (!g) {
                g = this.position
            }
            var e = f === "absolute" ? 1 : -1, c = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
            if (!this.offset.scroll) {
                this.offset.scroll = {top: c.scrollTop(),left: c.scrollLeft()}
            }
            return {top: (g.top + this.offset.relative.top * e + this.offset.parent.top * e - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * e)),left: (g.left + this.offset.relative.left * e + this.offset.parent.left * e - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * e))}
        },_generatePosition: function(d) {
            var c, i, j, f, e = this.options, k = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = d.pageX, g = d.pageY;
            if (!this.offset.scroll) {
                this.offset.scroll = {top: k.scrollTop(),left: k.scrollLeft()}
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (this.relative_container) {
                        i = this.relative_container.offset();
                        c = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]
                    } else {
                        c = this.containment
                    }
                    if (d.pageX - this.offset.click.left < c[0]) {
                        h = c[0] + this.offset.click.left
                    }
                    if (d.pageY - this.offset.click.top < c[1]) {
                        g = c[1] + this.offset.click.top
                    }
                    if (d.pageX - this.offset.click.left > c[2]) {
                        h = c[2] + this.offset.click.left
                    }
                    if (d.pageY - this.offset.click.top > c[3]) {
                        g = c[3] + this.offset.click.top
                    }
                }
                if (e.grid) {
                    j = e.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY;
                    g = c ? ((j - this.offset.click.top >= c[1] || j - this.offset.click.top > c[3]) ? j : ((j - this.offset.click.top >= c[1]) ? j - e.grid[1] : j + e.grid[1])) : j;
                    f = e.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / e.grid[0]) * e.grid[0] : this.originalPageX;
                    h = c ? ((f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2]) ? f : ((f - this.offset.click.left >= c[0]) ? f - e.grid[0] : f + e.grid[0])) : f
                }
            }
            return {top: (g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top)),left: (h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left))}
        },_clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false
        },_trigger: function(c, d, e) {
            e = e || this._uiHash();
            a.ui.plugin.call(this, c, [d, e]);
            if (c === "drag") {
                this.positionAbs = this._convertPositionTo("absolute")
            }
            return a.Widget.prototype._trigger.call(this, c, d, e)
        },plugins: {},_uiHash: function() {
            return {helper: this.helper,position: this.position,originalPosition: this.originalPosition,offset: this.positionAbs}
        }});
    a.ui.plugin.add("draggable", "connectToSortable", {start: function(d, f) {
            var e = a(this).data("ui-draggable"), g = e.options, c = a.extend({}, f, {item: e.element});
            e.sortables = [];
            a(g.connectToSortable).each(function() {
                var h = a.data(this, "ui-sortable");
                if (h && !h.options.disabled) {
                    e.sortables.push({instance: h,shouldRevert: h.options.revert});
                    h.refreshPositions();
                    h._trigger("activate", d, c)
                }
            })
        },stop: function(d, f) {
            var e = a(this).data("ui-draggable"), c = a.extend({}, f, {item: e.element});
            a.each(e.sortables, function() {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    e.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert) {
                        this.instance.options.revert = this.shouldRevert
                    }
                    this.instance._mouseStop(d);
                    this.instance.options.helper = this.instance.options._helper;
                    if (e.options.helper === "original") {
                        this.instance.currentItem.css({top: "auto",left: "auto"})
                    }
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", d, c)
                }
            })
        },drag: function(d, f) {
            var e = a(this).data("ui-draggable"), c = this;
            a.each(e.sortables, function() {
                var g = false, h = this;
                this.instance.positionAbs = e.positionAbs;
                this.instance.helperProportions = e.helperProportions;
                this.instance.offset.click = e.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    g = true;
                    a.each(e.sortables, function() {
                        this.instance.positionAbs = e.positionAbs;
                        this.instance.helperProportions = e.helperProportions;
                        this.instance.offset.click = e.offset.click;
                        if (this !== h && this.instance._intersectsWith(this.instance.containerCache) && a.contains(h.instance.element[0], this.instance.element[0])) {
                            g = false
                        }
                        return g
                    })
                }
                if (g) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = a(c).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function() {
                            return f.helper[0]
                        };
                        d.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(d, true);
                        this.instance._mouseStart(d, true, true);
                        this.instance.offset.click.top = e.offset.click.top;
                        this.instance.offset.click.left = e.offset.click.left;
                        this.instance.offset.parent.left -= e.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= e.offset.parent.top - this.instance.offset.parent.top;
                        e._trigger("toSortable", d);
                        e.dropped = this.instance.element;
                        e.currentItem = e.element;
                        this.instance.fromOutside = e
                    }
                    if (this.instance.currentItem) {
                        this.instance._mouseDrag(d)
                    }
                } else {
                    if (this.instance.isOver) {
                        this.instance.isOver = 0;
                        this.instance.cancelHelperRemoval = true;
                        this.instance.options.revert = false;
                        this.instance._trigger("out", d, this.instance._uiHash(this.instance));
                        this.instance._mouseStop(d, true);
                        this.instance.options.helper = this.instance.options._helper;
                        this.instance.currentItem.remove();
                        if (this.instance.placeholder) {
                            this.instance.placeholder.remove()
                        }
                        e._trigger("fromSortable", d);
                        e.dropped = false
                    }
                }
            })
        }});
    a.ui.plugin.add("draggable", "cursor", {start: function() {
            var c = a("body"), d = a(this).data("ui-draggable").options;
            if (c.css("cursor")) {
                d._cursor = c.css("cursor")
            }
            c.css("cursor", d.cursor)
        },stop: function() {
            var c = a(this).data("ui-draggable").options;
            if (c._cursor) {
                a("body").css("cursor", c._cursor)
            }
        }});
    a.ui.plugin.add("draggable", "opacity", {start: function(d, e) {
            var c = a(e.helper), f = a(this).data("ui-draggable").options;
            if (c.css("opacity")) {
                f._opacity = c.css("opacity")
            }
            c.css("opacity", f.opacity)
        },stop: function(c, d) {
            var e = a(this).data("ui-draggable").options;
            if (e._opacity) {
                a(d.helper).css("opacity", e._opacity)
            }
        }});
    a.ui.plugin.add("draggable", "scroll", {start: function() {
            var c = a(this).data("ui-draggable");
            if (c.scrollParent[0] !== document && c.scrollParent[0].tagName !== "HTML") {
                c.overflowOffset = c.scrollParent.offset()
            }
        },drag: function(e) {
            var d = a(this).data("ui-draggable"), f = d.options, c = false;
            if (d.scrollParent[0] !== document && d.scrollParent[0].tagName !== "HTML") {
                if (!f.axis || f.axis !== "x") {
                    if ((d.overflowOffset.top + d.scrollParent[0].offsetHeight) - e.pageY < f.scrollSensitivity) {
                        d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop + f.scrollSpeed
                    } else {
                        if (e.pageY - d.overflowOffset.top < f.scrollSensitivity) {
                            d.scrollParent[0].scrollTop = c = d.scrollParent[0].scrollTop - f.scrollSpeed
                        }
                    }
                }
                if (!f.axis || f.axis !== "y") {
                    if ((d.overflowOffset.left + d.scrollParent[0].offsetWidth) - e.pageX < f.scrollSensitivity) {
                        d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft + f.scrollSpeed
                    } else {
                        if (e.pageX - d.overflowOffset.left < f.scrollSensitivity) {
                            d.scrollParent[0].scrollLeft = c = d.scrollParent[0].scrollLeft - f.scrollSpeed
                        }
                    }
                }
            } else {
                if (!f.axis || f.axis !== "x") {
                    if (e.pageY - a(document).scrollTop() < f.scrollSensitivity) {
                        c = a(document).scrollTop(a(document).scrollTop() - f.scrollSpeed)
                    } else {
                        if (a(window).height() - (e.pageY - a(document).scrollTop()) < f.scrollSensitivity) {
                            c = a(document).scrollTop(a(document).scrollTop() + f.scrollSpeed)
                        }
                    }
                }
                if (!f.axis || f.axis !== "y") {
                    if (e.pageX - a(document).scrollLeft() < f.scrollSensitivity) {
                        c = a(document).scrollLeft(a(document).scrollLeft() - f.scrollSpeed)
                    } else {
                        if (a(window).width() - (e.pageX - a(document).scrollLeft()) < f.scrollSensitivity) {
                            c = a(document).scrollLeft(a(document).scrollLeft() + f.scrollSpeed)
                        }
                    }
                }
            }
            if (c !== false && a.ui.ddmanager && !f.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(d, e)
            }
        }});
    a.ui.plugin.add("draggable", "snap", {start: function() {
            var c = a(this).data("ui-draggable"), d = c.options;
            c.snapElements = [];
            a(d.snap.constructor !== String ? (d.snap.items || ":data(ui-draggable)") : d.snap).each(function() {
                var f = a(this), e = f.offset();
                if (this !== c.element[0]) {
                    c.snapElements.push({item: this,width: f.outerWidth(),height: f.outerHeight(),top: e.top,left: e.left})
                }
            })
        },drag: function(u, p) {
            var c, z, j, k, s, n, m, A, v, h, g = a(this).data("ui-draggable"), q = g.options, y = q.snapTolerance, x = p.offset.left, w = x + g.helperProportions.width, f = p.offset.top, e = f + g.helperProportions.height;
            for (v = g.snapElements.length - 1; v >= 0; v--) {
                s = g.snapElements[v].left;
                n = s + g.snapElements[v].width;
                m = g.snapElements[v].top;
                A = m + g.snapElements[v].height;
                if (w < s - y || x > n + y || e < m - y || f > A + y || !a.contains(g.snapElements[v].item.ownerDocument, g.snapElements[v].item)) {
                    if (g.snapElements[v].snapping) {
                        (g.options.snap.release && g.options.snap.release.call(g.element, u, a.extend(g._uiHash(), {snapItem: g.snapElements[v].item})))
                    }
                    g.snapElements[v].snapping = false;
                    continue
                }
                if (q.snapMode !== "inner") {
                    c = Math.abs(m - e) <= y;
                    z = Math.abs(A - f) <= y;
                    j = Math.abs(s - w) <= y;
                    k = Math.abs(n - x) <= y;
                    if (c) {
                        p.position.top = g._convertPositionTo("relative", {top: m - g.helperProportions.height,left: 0}).top - g.margins.top
                    }
                    if (z) {
                        p.position.top = g._convertPositionTo("relative", {top: A,left: 0}).top - g.margins.top
                    }
                    if (j) {
                        p.position.left = g._convertPositionTo("relative", {top: 0,left: s - g.helperProportions.width}).left - g.margins.left
                    }
                    if (k) {
                        p.position.left = g._convertPositionTo("relative", {top: 0,left: n}).left - g.margins.left
                    }
                }
                h = (c || z || j || k);
                if (q.snapMode !== "outer") {
                    c = Math.abs(m - f) <= y;
                    z = Math.abs(A - e) <= y;
                    j = Math.abs(s - x) <= y;
                    k = Math.abs(n - w) <= y;
                    if (c) {
                        p.position.top = g._convertPositionTo("relative", {top: m,left: 0}).top - g.margins.top
                    }
                    if (z) {
                        p.position.top = g._convertPositionTo("relative", {top: A - g.helperProportions.height,left: 0}).top - g.margins.top
                    }
                    if (j) {
                        p.position.left = g._convertPositionTo("relative", {top: 0,left: s}).left - g.margins.left
                    }
                    if (k) {
                        p.position.left = g._convertPositionTo("relative", {top: 0,left: n - g.helperProportions.width}).left - g.margins.left
                    }
                }
                if (!g.snapElements[v].snapping && (c || z || j || k || h)) {
                    (g.options.snap.snap && g.options.snap.snap.call(g.element, u, a.extend(g._uiHash(), {snapItem: g.snapElements[v].item})))
                }
                g.snapElements[v].snapping = (c || z || j || k || h)
            }
        }});
    a.ui.plugin.add("draggable", "stack", {start: function() {
            var c, e = this.data("ui-draggable").options, d = a.makeArray(a(e.stack)).sort(function(g, f) {
                return (parseInt(a(g).css("zIndex"), 10) || 0) - (parseInt(a(f).css("zIndex"), 10) || 0)
            });
            if (!d.length) {
                return
            }
            c = parseInt(a(d[0]).css("zIndex"), 10) || 0;
            a(d).each(function(f) {
                a(this).css("zIndex", c + f)
            });
            this.css("zIndex", (c + d.length))
        }});
    a.ui.plugin.add("draggable", "zIndex", {start: function(d, e) {
            var c = a(e.helper), f = a(this).data("ui-draggable").options;
            if (c.css("zIndex")) {
                f._zIndex = c.css("zIndex")
            }
            c.css("zIndex", f.zIndex)
        },stop: function(c, d) {
            var e = a(this).data("ui-draggable").options;
            if (e._zIndex) {
                a(d.helper).css("zIndex", e._zIndex)
            }
        }})
})(jQuery);
(function(b, c) {
    function a(e, d, f) {
        return (e > d) && (e < (d + f))
    }
    b.widget("ui.droppable", {version: "1.10.4",widgetEventPrefix: "drop",options: {accept: "*",activeClass: false,addClasses: true,greedy: false,hoverClass: false,scope: "default",tolerance: "intersect",activate: null,deactivate: null,drop: null,out: null,over: null},_create: function() {
            var e, f = this.options, d = f.accept;
            this.isover = false;
            this.isout = true;
            this.accept = b.isFunction(d) ? d : function(g) {
                return g.is(d)
            };
            this.proportions = function() {
                if (arguments.length) {
                    e = arguments[0]
                } else {
                    return e ? e : e = {width: this.element[0].offsetWidth,height: this.element[0].offsetHeight}
                }
            };
            b.ui.ddmanager.droppables[f.scope] = b.ui.ddmanager.droppables[f.scope] || [];
            b.ui.ddmanager.droppables[f.scope].push(this);
            (f.addClasses && this.element.addClass("ui-droppable"))
        },_destroy: function() {
            var e = 0, d = b.ui.ddmanager.droppables[this.options.scope];
            for (; e < d.length; e++) {
                if (d[e] === this) {
                    d.splice(e, 1)
                }
            }
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },_setOption: function(d, e) {
            if (d === "accept") {
                this.accept = b.isFunction(e) ? e : function(f) {
                    return f.is(e)
                }
            }
            b.Widget.prototype._setOption.apply(this, arguments)
        },_activate: function(e) {
            var d = b.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.addClass(this.options.activeClass)
            }
            if (d) {
                this._trigger("activate", e, this.ui(d))
            }
        },_deactivate: function(e) {
            var d = b.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.removeClass(this.options.activeClass)
            }
            if (d) {
                this._trigger("deactivate", e, this.ui(d))
            }
        },_over: function(e) {
            var d = b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass)
                }
                this._trigger("over", e, this.ui(d))
            }
        },_out: function(e) {
            var d = b.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("out", e, this.ui(d))
            }
        },_drop: function(e, f) {
            var d = f || b.ui.ddmanager.current, g = false;
            if (!d || (d.currentItem || d.element)[0] === this.element[0]) {
                return false
            }
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var h = b.data(this, "ui-droppable");
                if (h.options.greedy && !h.options.disabled && h.options.scope === d.options.scope && h.accept.call(h.element[0], (d.currentItem || d.element)) && b.ui.intersect(d, b.extend(h, {offset: h.element.offset()}), h.options.tolerance)) {
                    g = true;
                    return false
                }
            });
            if (g) {
                return false
            }
            if (this.accept.call(this.element[0], (d.currentItem || d.element))) {
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass)
                }
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("drop", e, this.ui(d));
                return this.element
            }
            return false
        },ui: function(d) {
            return {draggable: (d.currentItem || d.element),helper: d.helper,position: d.position,offset: d.positionAbs}
        }});
    b.ui.intersect = function(q, j, o) {
        if (!j.offset) {
            return false
        }
        var h, i, f = (q.positionAbs || q.position.absolute).left, n = (q.positionAbs || q.position.absolute).top, e = f + q.helperProportions.width, m = n + q.helperProportions.height, g = j.offset.left, p = j.offset.top, d = g + j.proportions().width, k = p + j.proportions().height;
        switch (o) {
            case "fit":
                return (g <= f && e <= d && p <= n && m <= k);
            case "intersect":
                return (g < f + (q.helperProportions.width / 2) && e - (q.helperProportions.width / 2) < d && p < n + (q.helperProportions.height / 2) && m - (q.helperProportions.height / 2) < k);
            case "pointer":
                h = ((q.positionAbs || q.position.absolute).left + (q.clickOffset || q.offset.click).left);
                i = ((q.positionAbs || q.position.absolute).top + (q.clickOffset || q.offset.click).top);
                return a(i, p, j.proportions().height) && a(h, g, j.proportions().width);
            case "touch":
                return ((n >= p && n <= k) || (m >= p && m <= k) || (n < p && m > k)) && ((f >= g && f <= d) || (e >= g && e <= d) || (f < g && e > d));
            default:
                return false
        }
    };
    b.ui.ddmanager = {current: null,droppables: {"default": []},prepareOffsets: function(g, k) {
            var f, e, d = b.ui.ddmanager.droppables[g.options.scope] || [], h = k ? k.type : null, l = (g.currentItem || g.element).find(":data(ui-droppable)").addBack();
            droppablesLoop: for (f = 0; f < d.length; f++) {
                if (d[f].options.disabled || (g && !d[f].accept.call(d[f].element[0], (g.currentItem || g.element)))) {
                    continue
                }
                for (e = 0; e < l.length; e++) {
                    if (l[e] === d[f].element[0]) {
                        d[f].proportions().height = 0;
                        continue droppablesLoop
                    }
                }
                d[f].visible = d[f].element.css("display") !== "none";
                if (!d[f].visible) {
                    continue
                }
                if (h === "mousedown") {
                    d[f]._activate.call(d[f], k)
                }
                d[f].offset = d[f].element.offset();
                d[f].proportions({width: d[f].element[0].offsetWidth,height: d[f].element[0].offsetHeight})
            }
        },drop: function(d, e) {
            var f = false;
            b.each((b.ui.ddmanager.droppables[d.options.scope] || []).slice(), function() {
                if (!this.options) {
                    return
                }
                if (!this.options.disabled && this.visible && b.ui.intersect(d, this, this.options.tolerance)) {
                    f = this._drop.call(this, e) || f
                }
                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (d.currentItem || d.element))) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, e)
                }
            });
            return f
        },dragStart: function(d, e) {
            d.element.parentsUntil("body").bind("scroll.droppable", function() {
                if (!d.options.refreshPositions) {
                    b.ui.ddmanager.prepareOffsets(d, e)
                }
            })
        },drag: function(d, e) {
            if (d.options.refreshPositions) {
                b.ui.ddmanager.prepareOffsets(d, e)
            }
            b.each(b.ui.ddmanager.droppables[d.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return
                }
                var i, g, f, h = b.ui.intersect(d, this, this.options.tolerance), j = !h && this.isover ? "isout" : (h && !this.isover ? "isover" : null);
                if (!j) {
                    return
                }
                if (this.options.greedy) {
                    g = this.options.scope;
                    f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return b.data(this, "ui-droppable").options.scope === g
                    });
                    if (f.length) {
                        i = b.data(f[0], "ui-droppable");
                        i.greedyChild = (j === "isover")
                    }
                }
                if (i && j === "isover") {
                    i.isover = false;
                    i.isout = true;
                    i._out.call(i, e)
                }
                this[j] = true;
                this[j === "isout" ? "isover" : "isout"] = false;
                this[j === "isover" ? "_over" : "_out"].call(this, e);
                if (i && j === "isout") {
                    i.isout = false;
                    i.isover = true;
                    i._over.call(i, e)
                }
            })
        },dragStop: function(d, e) {
            d.element.parentsUntil("body").unbind("scroll.droppable");
            if (!d.options.refreshPositions) {
                b.ui.ddmanager.prepareOffsets(d, e)
            }
        }}
})(jQuery);
(function(c, d) {
    function b(e) {
        return parseInt(e, 10) || 0
    }
    function a(e) {
        return !isNaN(parseInt(e, 10))
    }
    c.widget("ui.resizable", c.ui.mouse, {version: "1.10.4",widgetEventPrefix: "resize",options: {alsoResize: false,animate: false,animateDuration: "slow",animateEasing: "swing",aspectRatio: false,autoHide: false,containment: false,ghost: false,grid: false,handles: "e,s,se",helper: false,maxHeight: null,maxWidth: null,minHeight: 10,minWidth: 10,zIndex: 90,resize: null,start: null,stop: null},_create: function() {
            var l, f, j, g, e, h = this, k = this.options;
            this.element.addClass("ui-resizable");
            c.extend(this, {_aspectRatio: !!(k.aspectRatio),aspectRatio: k.aspectRatio,originalElement: this.element,_proportionallyResizeElements: [],_helper: k.helper || k.ghost || k.animate ? k.helper || "ui-resizable-helper" : null});
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
                this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"),width: this.element.outerWidth(),height: this.element.outerHeight(),top: this.element.css("top"),left: this.element.css("left")}));
                this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable"));
                this.elementIsWrapper = true;
                this.element.css({marginLeft: this.originalElement.css("marginLeft"),marginTop: this.originalElement.css("marginTop"),marginRight: this.originalElement.css("marginRight"),marginBottom: this.originalElement.css("marginBottom")});
                this.originalElement.css({marginLeft: 0,marginTop: 0,marginRight: 0,marginBottom: 0});
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({position: "static",zoom: 1,display: "block"}));
                this.originalElement.css({margin: this.originalElement.css("margin")});
                this._proportionallyResize()
            }
            this.handles = k.handles || (!c(".ui-resizable-handle", this.element).length ? "e,s,se" : {n: ".ui-resizable-n",e: ".ui-resizable-e",s: ".ui-resizable-s",w: ".ui-resizable-w",se: ".ui-resizable-se",sw: ".ui-resizable-sw",ne: ".ui-resizable-ne",nw: ".ui-resizable-nw"});
            if (this.handles.constructor === String) {
                if (this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw"
                }
                l = this.handles.split(",");
                this.handles = {};
                for (f = 0; f < l.length; f++) {
                    j = c.trim(l[f]);
                    e = "ui-resizable-" + j;
                    g = c("<div class='ui-resizable-handle " + e + "'></div>");
                    g.css({zIndex: k.zIndex});
                    if ("se" === j) {
                        g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
                    }
                    this.handles[j] = ".ui-resizable-" + j;
                    this.element.append(g)
                }
            }
            this._renderAxis = function(q) {
                var n, o, m, p;
                q = q || this.element;
                for (n in this.handles) {
                    if (this.handles[n].constructor === String) {
                        this.handles[n] = c(this.handles[n], this.element).show()
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        o = c(this.handles[n], this.element);
                        p = /sw|ne|nw|se|n|s/.test(n) ? o.outerHeight() : o.outerWidth();
                        m = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
                        q.css(m, p);
                        this._proportionallyResize()
                    }
                    if (!c(this.handles[n]).length) {
                        continue
                    }
                }
            };
            this._renderAxis(this.element);
            this._handles = c(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                if (!h.resizing) {
                    if (this.className) {
                        g = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    h.axis = g && g[1] ? g[1] : "se"
                }
            });
            if (k.autoHide) {
                this._handles.hide();
                c(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    if (k.disabled) {
                        return
                    }
                    c(this).removeClass("ui-resizable-autohide");
                    h._handles.show()
                }).mouseleave(function() {
                    if (k.disabled) {
                        return
                    }
                    if (!h.resizing) {
                        c(this).addClass("ui-resizable-autohide");
                        h._handles.hide()
                    }
                })
            }
            this._mouseInit()
        },_destroy: function() {
            this._mouseDestroy();
            var f, e = function(g) {
                c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                e(this.element);
                f = this.element;
                this.originalElement.css({position: f.css("position"),width: f.outerWidth(),height: f.outerHeight(),top: f.css("top"),left: f.css("left")}).insertAfter(f);
                f.remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            e(this.originalElement);
            return this
        },_mouseCapture: function(g) {
            var f, h, e = false;
            for (f in this.handles) {
                h = c(this.handles[f])[0];
                if (h === g.target || c.contains(h, g.target)) {
                    e = true
                }
            }
            return !this.options.disabled && e
        },_mouseStart: function(g) {
            var k, h, j, i = this.options, f = this.element.position(), e = this.element;
            this.resizing = true;
            if ((/absolute/).test(e.css("position"))) {
                e.css({position: "absolute",top: e.css("top"),left: e.css("left")})
            } else {
                if (e.is(".ui-draggable")) {
                    e.css({position: "absolute",top: f.top,left: f.left})
                }
            }
            this._renderProxy();
            k = b(this.helper.css("left"));
            h = b(this.helper.css("top"));
            if (i.containment) {
                k += c(i.containment).scrollLeft() || 0;
                h += c(i.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {left: k,top: h};
            this.size = this._helper ? {width: this.helper.width(),height: this.helper.height()} : {width: e.width(),height: e.height()};
            this.originalSize = this._helper ? {width: e.outerWidth(),height: e.outerHeight()} : {width: e.width(),height: e.height()};
            this.originalPosition = {left: k,top: h};
            this.sizeDiff = {width: e.outerWidth() - e.width(),height: e.outerHeight() - e.height()};
            this.originalMousePosition = {left: g.pageX,top: g.pageY};
            this.aspectRatio = (typeof i.aspectRatio === "number") ? i.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            j = c(".ui-resizable-" + this.axis).css("cursor");
            c("body").css("cursor", j === "auto" ? this.axis + "-resize" : j);
            e.addClass("ui-resizable-resizing");
            this._propagate("start", g);
            return true
        },_mouseDrag: function(e) {
            var k, g = this.helper, l = {}, i = this.originalMousePosition, m = this.axis, o = this.position.top, f = this.position.left, n = this.size.width, j = this.size.height, q = (e.pageX - i.left) || 0, p = (e.pageY - i.top) || 0, h = this._change[m];
            if (!h) {
                return false
            }
            k = h.apply(this, [e, q, p]);
            this._updateVirtualBoundaries(e.shiftKey);
            if (this._aspectRatio || e.shiftKey) {
                k = this._updateRatio(k, e)
            }
            k = this._respectSize(k, e);
            this._updateCache(k);
            this._propagate("resize", e);
            if (this.position.top !== o) {
                l.top = this.position.top + "px"
            }
            if (this.position.left !== f) {
                l.left = this.position.left + "px"
            }
            if (this.size.width !== n) {
                l.width = this.size.width + "px"
            }
            if (this.size.height !== j) {
                l.height = this.size.height + "px"
            }
            g.css(l);
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize()
            }
            if (!c.isEmptyObject(l)) {
                this._trigger("resize", e, this.ui())
            }
            return false
        },_mouseStop: function(h) {
            this.resizing = false;
            var g, e, f, k, n, j, m, i = this.options, l = this;
            if (this._helper) {
                g = this._proportionallyResizeElements;
                e = g.length && (/textarea/i).test(g[0].nodeName);
                f = e && c.ui.hasScroll(g[0], "left") ? 0 : l.sizeDiff.height;
                k = e ? 0 : l.sizeDiff.width;
                n = {width: (l.helper.width() - k),height: (l.helper.height() - f)};
                j = (parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left)) || null;
                m = (parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top)) || null;
                if (!i.animate) {
                    this.element.css(c.extend(n, {top: m,left: j}))
                }
                l.helper.height(l.size.height);
                l.helper.width(l.size.width);
                if (this._helper && !i.animate) {
                    this._proportionallyResize()
                }
            }
            c("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", h);
            if (this._helper) {
                this.helper.remove()
            }
            return false
        },_updateVirtualBoundaries: function(g) {
            var i, h, f, k, e, j = this.options;
            e = {minWidth: a(j.minWidth) ? j.minWidth : 0,maxWidth: a(j.maxWidth) ? j.maxWidth : Infinity,minHeight: a(j.minHeight) ? j.minHeight : 0,maxHeight: a(j.maxHeight) ? j.maxHeight : Infinity};
            if (this._aspectRatio || g) {
                i = e.minHeight * this.aspectRatio;
                f = e.minWidth / this.aspectRatio;
                h = e.maxHeight * this.aspectRatio;
                k = e.maxWidth / this.aspectRatio;
                if (i > e.minWidth) {
                    e.minWidth = i
                }
                if (f > e.minHeight) {
                    e.minHeight = f
                }
                if (h < e.maxWidth) {
                    e.maxWidth = h
                }
                if (k < e.maxHeight) {
                    e.maxHeight = k
                }
            }
            this._vBoundaries = e
        },_updateCache: function(e) {
            this.offset = this.helper.offset();
            if (a(e.left)) {
                this.position.left = e.left
            }
            if (a(e.top)) {
                this.position.top = e.top
            }
            if (a(e.height)) {
                this.size.height = e.height
            }
            if (a(e.width)) {
                this.size.width = e.width
            }
        },_updateRatio: function(g) {
            var h = this.position, f = this.size, e = this.axis;
            if (a(g.height)) {
                g.width = (g.height * this.aspectRatio)
            } else {
                if (a(g.width)) {
                    g.height = (g.width / this.aspectRatio)
                }
            }
            if (e === "sw") {
                g.left = h.left + (f.width - g.width);
                g.top = null
            }
            if (e === "nw") {
                g.top = h.top + (f.height - g.height);
                g.left = h.left + (f.width - g.width)
            }
            return g
        },_respectSize: function(j) {
            var g = this._vBoundaries, m = this.axis, p = a(j.width) && g.maxWidth && (g.maxWidth < j.width), k = a(j.height) && g.maxHeight && (g.maxHeight < j.height), h = a(j.width) && g.minWidth && (g.minWidth > j.width), n = a(j.height) && g.minHeight && (g.minHeight > j.height), f = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, i = /sw|nw|w/.test(m), e = /nw|ne|n/.test(m);
            if (h) {
                j.width = g.minWidth
            }
            if (n) {
                j.height = g.minHeight
            }
            if (p) {
                j.width = g.maxWidth
            }
            if (k) {
                j.height = g.maxHeight
            }
            if (h && i) {
                j.left = f - g.minWidth
            }
            if (p && i) {
                j.left = f - g.maxWidth
            }
            if (n && e) {
                j.top = l - g.minHeight
            }
            if (k && e) {
                j.top = l - g.maxHeight
            }
            if (!j.width && !j.height && !j.left && j.top) {
                j.top = null
            } else {
                if (!j.width && !j.height && !j.top && j.left) {
                    j.left = null
                }
            }
            return j
        },_proportionallyResize: function() {
            if (!this._proportionallyResizeElements.length) {
                return
            }
            var h, f, l, e, k, g = this.helper || this.element;
            for (h = 0; h < this._proportionallyResizeElements.length; h++) {
                k = this._proportionallyResizeElements[h];
                if (!this.borderDif) {
                    this.borderDif = [];
                    l = [k.css("borderTopWidth"), k.css("borderRightWidth"), k.css("borderBottomWidth"), k.css("borderLeftWidth")];
                    e = [k.css("paddingTop"), k.css("paddingRight"), k.css("paddingBottom"), k.css("paddingLeft")];
                    for (f = 0; f < l.length; f++) {
                        this.borderDif[f] = (parseInt(l[f], 10) || 0) + (parseInt(e[f], 10) || 0)
                    }
                }
                k.css({height: (g.height() - this.borderDif[0] - this.borderDif[2]) || 0,width: (g.width() - this.borderDif[1] - this.borderDif[3]) || 0})
            }
        },_renderProxy: function() {
            var e = this.element, f = this.options;
            this.elementOffset = e.offset();
            if (this._helper) {
                this.helper = this.helper || c("<div style='overflow:hidden;'></div>");
                this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1,height: this.element.outerHeight() - 1,position: "absolute",left: this.elementOffset.left + "px",top: this.elementOffset.top + "px",zIndex: ++f.zIndex});
                this.helper.appendTo("body").disableSelection()
            } else {
                this.helper = this.element
            }
        },_change: {e: function(f, e) {
                return {width: this.originalSize.width + e}
            },w: function(g, e) {
                var f = this.originalSize, h = this.originalPosition;
                return {left: h.left + e,width: f.width - e}
            },n: function(h, f, e) {
                var g = this.originalSize, i = this.originalPosition;
                return {top: i.top + e,height: g.height - e}
            },s: function(g, f, e) {
                return {height: this.originalSize.height + e}
            },se: function(g, f, e) {
                return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [g, f, e]))
            },sw: function(g, f, e) {
                return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [g, f, e]))
            },ne: function(g, f, e) {
                return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [g, f, e]))
            },nw: function(g, f, e) {
                return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [g, f, e]))
            }},_propagate: function(f, e) {
            c.ui.plugin.call(this, f, [e, this.ui()]);
            (f !== "resize" && this._trigger(f, e, this.ui()))
        },plugins: {},ui: function() {
            return {originalElement: this.originalElement,element: this.element,helper: this.helper,position: this.position,size: this.size,originalSize: this.originalSize,originalPosition: this.originalPosition}
        }});
    c.ui.plugin.add("resizable", "animate", {stop: function(h) {
            var m = c(this).data("ui-resizable"), j = m.options, g = m._proportionallyResizeElements, e = g.length && (/textarea/i).test(g[0].nodeName), f = e && c.ui.hasScroll(g[0], "left") ? 0 : m.sizeDiff.height, l = e ? 0 : m.sizeDiff.width, i = {width: (m.size.width - l),height: (m.size.height - f)}, k = (parseInt(m.element.css("left"), 10) + (m.position.left - m.originalPosition.left)) || null, n = (parseInt(m.element.css("top"), 10) + (m.position.top - m.originalPosition.top)) || null;
            m.element.animate(c.extend(i, n && k ? {top: n,left: k} : {}), {duration: j.animateDuration,easing: j.animateEasing,step: function() {
                    var o = {width: parseInt(m.element.css("width"), 10),height: parseInt(m.element.css("height"), 10),top: parseInt(m.element.css("top"), 10),left: parseInt(m.element.css("left"), 10)};
                    if (g && g.length) {
                        c(g[0]).css({width: o.width,height: o.height})
                    }
                    m._updateCache(o);
                    m._propagate("resize", h)
                }})
        }});
    c.ui.plugin.add("resizable", "containment", {start: function() {
            var m, g, q, e, l, h, r, n = c(this).data("ui-resizable"), k = n.options, j = n.element, f = k.containment, i = (f instanceof c) ? f.get(0) : (/parent/.test(f)) ? j.parent().get(0) : f;
            if (!i) {
                return
            }
            n.containerElement = c(i);
            if (/document/.test(f) || f === document) {
                n.containerOffset = {left: 0,top: 0};
                n.containerPosition = {left: 0,top: 0};
                n.parentData = {element: c(document),left: 0,top: 0,width: c(document).width(),height: c(document).height() || document.body.parentNode.scrollHeight}
            } else {
                m = c(i);
                g = [];
                c(["Top", "Right", "Left", "Bottom"]).each(function(p, o) {
                    g[p] = b(m.css("padding" + o))
                });
                n.containerOffset = m.offset();
                n.containerPosition = m.position();
                n.containerSize = {height: (m.innerHeight() - g[3]),width: (m.innerWidth() - g[1])};
                q = n.containerOffset;
                e = n.containerSize.height;
                l = n.containerSize.width;
                h = (c.ui.hasScroll(i, "left") ? i.scrollWidth : l);
                r = (c.ui.hasScroll(i) ? i.scrollHeight : e);
                n.parentData = {element: i,left: q.left,top: q.top,width: h,height: r}
            }
        },resize: function(f) {
            var k, q, j, i, l = c(this).data("ui-resizable"), h = l.options, n = l.containerOffset, m = l.position, p = l._aspectRatio || f.shiftKey, e = {top: 0,left: 0}, g = l.containerElement;
            if (g[0] !== document && (/static/).test(g.css("position"))) {
                e = n
            }
            if (m.left < (l._helper ? n.left : 0)) {
                l.size.width = l.size.width + (l._helper ? (l.position.left - n.left) : (l.position.left - e.left));
                if (p) {
                    l.size.height = l.size.width / l.aspectRatio
                }
                l.position.left = h.helper ? n.left : 0
            }
            if (m.top < (l._helper ? n.top : 0)) {
                l.size.height = l.size.height + (l._helper ? (l.position.top - n.top) : l.position.top);
                if (p) {
                    l.size.width = l.size.height * l.aspectRatio
                }
                l.position.top = l._helper ? n.top : 0
            }
            l.offset.left = l.parentData.left + l.position.left;
            l.offset.top = l.parentData.top + l.position.top;
            k = Math.abs((l._helper ? l.offset.left - e.left : (l.offset.left - e.left)) + l.sizeDiff.width);
            q = Math.abs((l._helper ? l.offset.top - e.top : (l.offset.top - n.top)) + l.sizeDiff.height);
            j = l.containerElement.get(0) === l.element.parent().get(0);
            i = /relative|absolute/.test(l.containerElement.css("position"));
            if (j && i) {
                k -= Math.abs(l.parentData.left)
            }
            if (k + l.size.width >= l.parentData.width) {
                l.size.width = l.parentData.width - k;
                if (p) {
                    l.size.height = l.size.width / l.aspectRatio
                }
            }
            if (q + l.size.height >= l.parentData.height) {
                l.size.height = l.parentData.height - q;
                if (p) {
                    l.size.width = l.size.height * l.aspectRatio
                }
            }
        },stop: function() {
            var k = c(this).data("ui-resizable"), f = k.options, l = k.containerOffset, e = k.containerPosition, g = k.containerElement, i = c(k.helper), n = i.offset(), m = i.outerWidth() - k.sizeDiff.width, j = i.outerHeight() - k.sizeDiff.height;
            if (k._helper && !f.animate && (/relative/).test(g.css("position"))) {
                c(this).css({left: n.left - e.left - l.left,width: m,height: j})
            }
            if (k._helper && !f.animate && (/static/).test(g.css("position"))) {
                c(this).css({left: n.left - e.left - l.left,width: m,height: j})
            }
        }});
    c.ui.plugin.add("resizable", "alsoResize", {start: function() {
            var e = c(this).data("ui-resizable"), g = e.options, f = function(h) {
                c(h).each(function() {
                    var i = c(this);
                    i.data("ui-resizable-alsoresize", {width: parseInt(i.width(), 10),height: parseInt(i.height(), 10),left: parseInt(i.css("left"), 10),top: parseInt(i.css("top"), 10)})
                })
            };
            if (typeof (g.alsoResize) === "object" && !g.alsoResize.parentNode) {
                if (g.alsoResize.length) {
                    g.alsoResize = g.alsoResize[0];
                    f(g.alsoResize)
                } else {
                    c.each(g.alsoResize, function(h) {
                        f(h)
                    })
                }
            } else {
                f(g.alsoResize)
            }
        },resize: function(g, i) {
            var f = c(this).data("ui-resizable"), j = f.options, h = f.originalSize, l = f.originalPosition, k = {height: (f.size.height - h.height) || 0,width: (f.size.width - h.width) || 0,top: (f.position.top - l.top) || 0,left: (f.position.left - l.left) || 0}, e = function(m, n) {
                c(m).each(function() {
                    var q = c(this), r = c(this).data("ui-resizable-alsoresize"), p = {}, o = n && n.length ? n : q.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    c.each(o, function(s, u) {
                        var t = (r[u] || 0) + (k[u] || 0);
                        if (t && t >= 0) {
                            p[u] = t || null
                        }
                    });
                    q.css(p)
                })
            };
            if (typeof (j.alsoResize) === "object" && !j.alsoResize.nodeType) {
                c.each(j.alsoResize, function(m, n) {
                    e(m, n)
                })
            } else {
                e(j.alsoResize)
            }
        },stop: function() {
            c(this).removeData("resizable-alsoresize")
        }});
    c.ui.plugin.add("resizable", "ghost", {start: function() {
            var f = c(this).data("ui-resizable"), g = f.options, e = f.size;
            f.ghost = f.originalElement.clone();
            f.ghost.css({opacity: 0.25,display: "block",position: "relative",height: e.height,width: e.width,margin: 0,left: 0,top: 0}).addClass("ui-resizable-ghost").addClass(typeof g.ghost === "string" ? g.ghost : "");
            f.ghost.appendTo(f.helper)
        },resize: function() {
            var e = c(this).data("ui-resizable");
            if (e.ghost) {
                e.ghost.css({position: "relative",height: e.size.height,width: e.size.width})
            }
        },stop: function() {
            var e = c(this).data("ui-resizable");
            if (e.ghost && e.helper) {
                e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }});
    c.ui.plugin.add("resizable", "grid", {resize: function() {
            var r = c(this).data("ui-resizable"), i = r.options, s = r.size, k = r.originalSize, n = r.originalPosition, t = r.axis, f = typeof i.grid === "number" ? [i.grid, i.grid] : i.grid, p = (f[0] || 1), m = (f[1] || 1), h = Math.round((s.width - k.width) / p) * p, g = Math.round((s.height - k.height) / m) * m, l = k.width + h, e = k.height + g, j = i.maxWidth && (i.maxWidth < l), u = i.maxHeight && (i.maxHeight < e), q = i.minWidth && (i.minWidth > l), v = i.minHeight && (i.minHeight > e);
            i.grid = f;
            if (q) {
                l = l + p
            }
            if (v) {
                e = e + m
            }
            if (j) {
                l = l - p
            }
            if (u) {
                e = e - m
            }
            if (/^(se|s|e)$/.test(t)) {
                r.size.width = l;
                r.size.height = e
            } else {
                if (/^(ne)$/.test(t)) {
                    r.size.width = l;
                    r.size.height = e;
                    r.position.top = n.top - g
                } else {
                    if (/^(sw)$/.test(t)) {
                        r.size.width = l;
                        r.size.height = e;
                        r.position.left = n.left - h
                    } else {
                        if (e - m > 0) {
                            r.size.height = e;
                            r.position.top = n.top - g
                        } else {
                            r.size.height = m;
                            r.position.top = n.top + k.height - m
                        }
                        if (l - p > 0) {
                            r.size.width = l;
                            r.position.left = n.left - h
                        } else {
                            r.size.width = p;
                            r.position.left = n.left + k.width - p
                        }
                    }
                }
            }
        }})
})(jQuery);
(function(a, b) {
    a.widget("ui.selectable", a.ui.mouse, {version: "1.10.4",options: {appendTo: "body",autoRefresh: true,distance: 0,filter: "*",tolerance: "touch",selected: null,selecting: null,start: null,stop: null,unselected: null,unselecting: null},_create: function() {
            var d, c = this;
            this.element.addClass("ui-selectable");
            this.dragged = false;
            this.refresh = function() {
                d = a(c.options.filter, c.element[0]);
                d.addClass("ui-selectee");
                d.each(function() {
                    var e = a(this), f = e.offset();
                    a.data(this, "selectable-item", {element: this,$element: e,left: f.left,top: f.top,right: f.left + e.outerWidth(),bottom: f.top + e.outerHeight(),startselected: false,selected: e.hasClass("ui-selected"),selecting: e.hasClass("ui-selecting"),unselecting: e.hasClass("ui-unselecting")})
                })
            };
            this.refresh();
            this.selectees = d.addClass("ui-selectee");
            this._mouseInit();
            this.helper = a("<div class='ui-selectable-helper'></div>")
        },_destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        },_mouseStart: function(e) {
            var d = this, c = this.options;
            this.opos = [e.pageX, e.pageY];
            if (this.options.disabled) {
                return
            }
            this.selectees = a(c.filter, this.element[0]);
            this._trigger("start", e);
            a(c.appendTo).append(this.helper);
            this.helper.css({left: e.pageX,top: e.pageY,width: 0,height: 0});
            if (c.autoRefresh) {
                this.refresh()
            }
            this.selectees.filter(".ui-selected").each(function() {
                var f = a.data(this, "selectable-item");
                f.startselected = true;
                if (!e.metaKey && !e.ctrlKey) {
                    f.$element.removeClass("ui-selected");
                    f.selected = false;
                    f.$element.addClass("ui-unselecting");
                    f.unselecting = true;
                    d._trigger("unselecting", e, {unselecting: f.element})
                }
            });
            a(e.target).parents().addBack().each(function() {
                var f, g = a.data(this, "selectable-item");
                if (g) {
                    f = (!e.metaKey && !e.ctrlKey) || !g.$element.hasClass("ui-selected");
                    g.$element.removeClass(f ? "ui-unselecting" : "ui-selected").addClass(f ? "ui-selecting" : "ui-unselecting");
                    g.unselecting = !f;
                    g.selecting = f;
                    g.selected = f;
                    if (f) {
                        d._trigger("selecting", e, {selecting: g.element})
                    } else {
                        d._trigger("unselecting", e, {unselecting: g.element})
                    }
                    return false
                }
            })
        },_mouseDrag: function(j) {
            this.dragged = true;
            if (this.options.disabled) {
                return
            }
            var g, i = this, e = this.options, d = this.opos[0], h = this.opos[1], c = j.pageX, f = j.pageY;
            if (d > c) {
                g = c;
                c = d;
                d = g
            }
            if (h > f) {
                g = f;
                f = h;
                h = g
            }
            this.helper.css({left: d,top: h,width: c - d,height: f - h});
            this.selectees.each(function() {
                var k = a.data(this, "selectable-item"), l = false;
                if (!k || k.element === i.element[0]) {
                    return
                }
                if (e.tolerance === "touch") {
                    l = (!(k.left > c || k.right < d || k.top > f || k.bottom < h))
                } else {
                    if (e.tolerance === "fit") {
                        l = (k.left > d && k.right < c && k.top > h && k.bottom < f)
                    }
                }
                if (l) {
                    if (k.selected) {
                        k.$element.removeClass("ui-selected");
                        k.selected = false
                    }
                    if (k.unselecting) {
                        k.$element.removeClass("ui-unselecting");
                        k.unselecting = false
                    }
                    if (!k.selecting) {
                        k.$element.addClass("ui-selecting");
                        k.selecting = true;
                        i._trigger("selecting", j, {selecting: k.element})
                    }
                } else {
                    if (k.selecting) {
                        if ((j.metaKey || j.ctrlKey) && k.startselected) {
                            k.$element.removeClass("ui-selecting");
                            k.selecting = false;
                            k.$element.addClass("ui-selected");
                            k.selected = true
                        } else {
                            k.$element.removeClass("ui-selecting");
                            k.selecting = false;
                            if (k.startselected) {
                                k.$element.addClass("ui-unselecting");
                                k.unselecting = true
                            }
                            i._trigger("unselecting", j, {unselecting: k.element})
                        }
                    }
                    if (k.selected) {
                        if (!j.metaKey && !j.ctrlKey && !k.startselected) {
                            k.$element.removeClass("ui-selected");
                            k.selected = false;
                            k.$element.addClass("ui-unselecting");
                            k.unselecting = true;
                            i._trigger("unselecting", j, {unselecting: k.element})
                        }
                    }
                }
            });
            return false
        },_mouseStop: function(d) {
            var c = this;
            this.dragged = false;
            a(".ui-unselecting", this.element[0]).each(function() {
                var e = a.data(this, "selectable-item");
                e.$element.removeClass("ui-unselecting");
                e.unselecting = false;
                e.startselected = false;
                c._trigger("unselected", d, {unselected: e.element})
            });
            a(".ui-selecting", this.element[0]).each(function() {
                var e = a.data(this, "selectable-item");
                e.$element.removeClass("ui-selecting").addClass("ui-selected");
                e.selecting = false;
                e.selected = true;
                e.startselected = true;
                c._trigger("selected", d, {selected: e.element})
            });
            this._trigger("stop", d);
            this.helper.remove();
            return false
        }})
})(jQuery);
(function(b, d) {
    function a(f, e, g) {
        return (f > e) && (f < (e + g))
    }
    function c(e) {
        return (/left|right/).test(e.css("float")) || (/inline|table-cell/).test(e.css("display"))
    }
    b.widget("ui.sortable", b.ui.mouse, {version: "1.10.4",widgetEventPrefix: "sort",ready: false,options: {appendTo: "parent",axis: false,connectWith: false,containment: false,cursor: "auto",cursorAt: false,dropOnEmpty: true,forcePlaceholderSize: false,forceHelperSize: false,grid: false,handle: false,helper: "original",items: "> *",opacity: false,placeholder: false,revert: false,scroll: true,scrollSensitivity: 20,scrollSpeed: 20,scope: "default",tolerance: "intersect",zIndex: 1000,activate: null,beforeStop: null,change: null,deactivate: null,out: null,over: null,receive: null,remove: null,sort: null,start: null,stop: null,update: null},_create: function() {
            var e = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? e.axis === "x" || c(this.items[0].item) : false;
            this.offset = this.element.offset();
            this._mouseInit();
            this.ready = true
        },_destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) {
                this.items[e].item.removeData(this.widgetName + "-item")
            }
            return this
        },_setOption: function(e, f) {
            if (e === "disabled") {
                this.options[e] = f;
                this.widget().toggleClass("ui-sortable-disabled", !!f)
            } else {
                b.Widget.prototype._setOption.apply(this, arguments)
            }
        },_mouseCapture: function(g, h) {
            var e = null, i = false, f = this;
            if (this.reverting) {
                return false
            }
            if (this.options.disabled || this.options.type === "static") {
                return false
            }
            this._refreshItems(g);
            b(g.target).parents().each(function() {
                if (b.data(this, f.widgetName + "-item") === f) {
                    e = b(this);
                    return false
                }
            });
            if (b.data(g.target, f.widgetName + "-item") === f) {
                e = b(g.target)
            }
            if (!e) {
                return false
            }
            if (this.options.handle && !h) {
                b(this.options.handle, e).find("*").addBack().each(function() {
                    if (this === g.target) {
                        i = true
                    }
                });
                if (!i) {
                    return false
                }
            }
            this.currentItem = e;
            this._removeCurrentsFromItems();
            return true
        },_mouseStart: function(h, j, f) {
            var g, e, k = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(h);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left};
            b.extend(this.offset, {click: {left: h.pageX - this.offset.left,top: h.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()});
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(h);
            this.originalPageX = h.pageX;
            this.originalPageY = h.pageY;
            (k.cursorAt && this._adjustOffsetFromHelper(k.cursorAt));
            this.domPosition = {prev: this.currentItem.prev()[0],parent: this.currentItem.parent()[0]};
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide()
            }
            this._createPlaceholder();
            if (k.containment) {
                this._setContainment()
            }
            if (k.cursor && k.cursor !== "auto") {
                e = this.document.find("body");
                this.storedCursor = e.css("cursor");
                e.css("cursor", k.cursor);
                this.storedStylesheet = b("<style>*{ cursor: " + k.cursor + " !important; }</style>").appendTo(e)
            }
            if (k.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity")
                }
                this.helper.css("opacity", k.opacity)
            }
            if (k.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex")
                }
                this.helper.css("zIndex", k.zIndex)
            }
            if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset()
            }
            this._trigger("start", h, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions()
            }
            if (!f) {
                for (g = this.containers.length - 1; g >= 0; g--) {
                    this.containers[g]._trigger("activate", h, this._uiHash(this))
                }
            }
            if (b.ui.ddmanager) {
                b.ui.ddmanager.current = this
            }
            if (b.ui.ddmanager && !k.dropBehaviour) {
                b.ui.ddmanager.prepareOffsets(this, h)
            }
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(h);
            return true
        },_mouseDrag: function(j) {
            var g, h, f, l, k = this.options, e = false;
            this.position = this._generatePosition(j);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs
            }
            if (this.options.scroll) {
                if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - j.pageY < k.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop + k.scrollSpeed
                    } else {
                        if (j.pageY - this.overflowOffset.top < k.scrollSensitivity) {
                            this.scrollParent[0].scrollTop = e = this.scrollParent[0].scrollTop - k.scrollSpeed
                        }
                    }
                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - j.pageX < k.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft + k.scrollSpeed
                    } else {
                        if (j.pageX - this.overflowOffset.left < k.scrollSensitivity) {
                            this.scrollParent[0].scrollLeft = e = this.scrollParent[0].scrollLeft - k.scrollSpeed
                        }
                    }
                } else {
                    if (j.pageY - b(document).scrollTop() < k.scrollSensitivity) {
                        e = b(document).scrollTop(b(document).scrollTop() - k.scrollSpeed)
                    } else {
                        if (b(window).height() - (j.pageY - b(document).scrollTop()) < k.scrollSensitivity) {
                            e = b(document).scrollTop(b(document).scrollTop() + k.scrollSpeed)
                        }
                    }
                    if (j.pageX - b(document).scrollLeft() < k.scrollSensitivity) {
                        e = b(document).scrollLeft(b(document).scrollLeft() - k.scrollSpeed)
                    } else {
                        if (b(window).width() - (j.pageX - b(document).scrollLeft()) < k.scrollSensitivity) {
                            e = b(document).scrollLeft(b(document).scrollLeft() + k.scrollSpeed)
                        }
                    }
                }
                if (e !== false && b.ui.ddmanager && !k.dropBehaviour) {
                    b.ui.ddmanager.prepareOffsets(this, j)
                }
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            for (g = this.items.length - 1; g >= 0; g--) {
                h = this.items[g];
                f = h.item[0];
                l = this._intersectsWithPointer(h);
                if (!l) {
                    continue
                }
                if (h.instance !== this.currentContainer) {
                    continue
                }
                if (f !== this.currentItem[0] && this.placeholder[l === 1 ? "next" : "prev"]()[0] !== f && !b.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !b.contains(this.element[0], f) : true)) {
                    this.direction = l === 1 ? "down" : "up";
                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(h)) {
                        this._rearrange(j, h)
                    } else {
                        break
                    }
                    this._trigger("change", j, this._uiHash());
                    break
                }
            }
            this._contactContainers(j);
            if (b.ui.ddmanager) {
                b.ui.ddmanager.drag(this, j)
            }
            this._trigger("sort", j, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },_mouseStop: function(g, i) {
            if (!g) {
                return
            }
            if (b.ui.ddmanager && !this.options.dropBehaviour) {
                b.ui.ddmanager.drop(this, g)
            }
            if (this.options.revert) {
                var f = this, j = this.placeholder.offset(), e = this.options.axis, h = {};
                if (!e || e === "x") {
                    h.left = j.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)
                }
                if (!e || e === "y") {
                    h.top = j.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                }
                this.reverting = true;
                b(this.helper).animate(h, parseInt(this.options.revert, 10) || 500, function() {
                    f._clear(g)
                })
            } else {
                this._clear(g, i)
            }
            return false
        },cancel: function() {
            if (this.dragging) {
                this._mouseUp({target: null});
                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else {
                    this.currentItem.show()
                }
                for (var e = this.containers.length - 1; e >= 0; e--) {
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[e].containerCache.over) {
                        this.containers[e]._trigger("out", null, this._uiHash(this));
                        this.containers[e].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0])
                }
                if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove()
                }
                b.extend(this, {helper: null,dragging: false,reverting: false,_noFinalSort: null});
                if (this.domPosition.prev) {
                    b(this.domPosition.prev).after(this.currentItem)
                } else {
                    b(this.domPosition.parent).prepend(this.currentItem)
                }
            }
            return this
        },serialize: function(g) {
            var e = this._getItemsAsjQuery(g && g.connected), f = [];
            g = g || {};
            b(e).each(function() {
                var h = (b(g.item || this).attr(g.attribute || "id") || "").match(g.expression || (/(.+)[\-=_](.+)/));
                if (h) {
                    f.push((g.key || h[1] + "[]") + "=" + (g.key && g.expression ? h[1] : h[2]))
                }
            });
            if (!f.length && g.key) {
                f.push(g.key + "=")
            }
            return f.join("&")
        },toArray: function(g) {
            var e = this._getItemsAsjQuery(g && g.connected), f = [];
            g = g || {};
            e.each(function() {
                f.push(b(g.item || this).attr(g.attribute || "id") || "")
            });
            return f
        },_intersectsWith: function(q) {
            var g = this.positionAbs.left, f = g + this.helperProportions.width, o = this.positionAbs.top, n = o + this.helperProportions.height, h = q.left, e = h + q.width, s = q.top, m = s + q.height, u = this.offset.click.top, k = this.offset.click.left, j = (this.options.axis === "x") || ((o + u) > s && (o + u) < m), p = (this.options.axis === "y") || ((g + k) > h && (g + k) < e), i = j && p;
            if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > q[this.floating ? "width" : "height"])) {
                return i
            } else {
                return (h < g + (this.helperProportions.width / 2) && f - (this.helperProportions.width / 2) < e && s < o + (this.helperProportions.height / 2) && n - (this.helperProportions.height / 2) < m)
            }
        },_intersectsWithPointer: function(g) {
            var h = (this.options.axis === "x") || a(this.positionAbs.top + this.offset.click.top, g.top, g.height), f = (this.options.axis === "y") || a(this.positionAbs.left + this.offset.click.left, g.left, g.width), j = h && f, e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
            if (!j) {
                return false
            }
            return this.floating ? (((i && i === "right") || e === "down") ? 2 : 1) : (e && (e === "down" ? 2 : 1))
        },_intersectsWithSides: function(h) {
            var f = a(this.positionAbs.top + this.offset.click.top, h.top + (h.height / 2), h.height), g = a(this.positionAbs.left + this.offset.click.left, h.left + (h.width / 2), h.width), e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection();
            if (this.floating && i) {
                return ((i === "right" && g) || (i === "left" && !g))
            } else {
                return e && ((e === "down" && f) || (e === "up" && !f))
            }
        },_getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e !== 0 && (e > 0 ? "down" : "up")
        },_getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e !== 0 && (e > 0 ? "right" : "left")
        },refresh: function(e) {
            this._refreshItems(e);
            this.refreshPositions();
            return this
        },_connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },_getItemsAsjQuery: function(e) {
            var g, f, n, k, l = [], h = [], m = this._connectWith();
            if (m && e) {
                for (g = m.length - 1; g >= 0; g--) {
                    n = b(m[g]);
                    for (f = n.length - 1; f >= 0; f--) {
                        k = b.data(n[f], this.widgetFullName);
                        if (k && k !== this && !k.options.disabled) {
                            h.push([b.isFunction(k.options.items) ? k.options.items.call(k.element) : b(k.options.items, k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), k])
                        }
                    }
                }
            }
            h.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options,item: this.currentItem}) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            function o() {
                l.push(this)
            }
            for (g = h.length - 1; g >= 0; g--) {
                h[g][0].each(o)
            }
            return b(l)
        },_removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items, function(g) {
                for (var f = 0; f < e.length; f++) {
                    if (e[f] === g.item[0]) {
                        return false
                    }
                }
                return true
            })
        },_refreshItems: function(e) {
            this.items = [];
            this.containers = [this];
            var k, g, p, l, o, f, r, q, m = this.items, h = [[b.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : b(this.options.items, this.element), this]], n = this._connectWith();
            if (n && this.ready) {
                for (k = n.length - 1; k >= 0; k--) {
                    p = b(n[k]);
                    for (g = p.length - 1; g >= 0; g--) {
                        l = b.data(p[g], this.widgetFullName);
                        if (l && l !== this && !l.options.disabled) {
                            h.push([b.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {item: this.currentItem}) : b(l.options.items, l.element), l]);
                            this.containers.push(l)
                        }
                    }
                }
            }
            for (k = h.length - 1; k >= 0; k--) {
                o = h[k][1];
                f = h[k][0];
                for (g = 0, q = f.length; g < q; g++) {
                    r = b(f[g]);
                    r.data(this.widgetName + "-item", o);
                    m.push({item: r,instance: o,width: 0,height: 0,left: 0,top: 0})
                }
            }
        },refreshPositions: function(e) {
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset()
            }
            var g, h, f, j;
            for (g = this.items.length - 1; g >= 0; g--) {
                h = this.items[g];
                if (h.instance !== this.currentContainer && this.currentContainer && h.item[0] !== this.currentItem[0]) {
                    continue
                }
                f = this.options.toleranceElement ? b(this.options.toleranceElement, h.item) : h.item;
                if (!e) {
                    h.width = f.outerWidth();
                    h.height = f.outerHeight()
                }
                j = f.offset();
                h.left = j.left;
                h.top = j.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (g = this.containers.length - 1; g >= 0; g--) {
                    j = this.containers[g].element.offset();
                    this.containers[g].containerCache.left = j.left;
                    this.containers[g].containerCache.top = j.top;
                    this.containers[g].containerCache.width = this.containers[g].element.outerWidth();
                    this.containers[g].containerCache.height = this.containers[g].element.outerHeight()
                }
            }
            return this
        },_createPlaceholder: function(f) {
            f = f || this;
            var e, g = f.options;
            if (!g.placeholder || g.placeholder.constructor === String) {
                e = g.placeholder;
                g.placeholder = {element: function() {
                        var i = f.currentItem[0].nodeName.toLowerCase(), h = b("<" + i + ">", f.document[0]).addClass(e || f.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        if (i === "tr") {
                            f.currentItem.children().each(function() {
                                b("<td>&#160;</td>", f.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(h)
                            })
                        } else {
                            if (i === "img") {
                                h.attr("src", f.currentItem.attr("src"))
                            }
                        }
                        if (!e) {
                            h.css("visibility", "hidden")
                        }
                        return h
                    },update: function(h, i) {
                        if (e && !g.forcePlaceholderSize) {
                            return
                        }
                        if (!i.height()) {
                            i.height(f.currentItem.innerHeight() - parseInt(f.currentItem.css("paddingTop") || 0, 10) - parseInt(f.currentItem.css("paddingBottom") || 0, 10))
                        }
                        if (!i.width()) {
                            i.width(f.currentItem.innerWidth() - parseInt(f.currentItem.css("paddingLeft") || 0, 10) - parseInt(f.currentItem.css("paddingRight") || 0, 10))
                        }
                    }}
            }
            f.placeholder = b(g.placeholder.element.call(f.element, f.currentItem));
            f.currentItem.after(f.placeholder);
            g.placeholder.update(f, f.placeholder)
        },_contactContainers: function(e) {
            var l, h, p, m, n, r, f, s, k, o, g = null, q = null;
            for (l = this.containers.length - 1; l >= 0; l--) {
                if (b.contains(this.currentItem[0], this.containers[l].element[0])) {
                    continue
                }
                if (this._intersectsWith(this.containers[l].containerCache)) {
                    if (g && b.contains(this.containers[l].element[0], g.element[0])) {
                        continue
                    }
                    g = this.containers[l];
                    q = l
                } else {
                    if (this.containers[l].containerCache.over) {
                        this.containers[l]._trigger("out", e, this._uiHash(this));
                        this.containers[l].containerCache.over = 0
                    }
                }
            }
            if (!g) {
                return
            }
            if (this.containers.length === 1) {
                if (!this.containers[q].containerCache.over) {
                    this.containers[q]._trigger("over", e, this._uiHash(this));
                    this.containers[q].containerCache.over = 1
                }
            } else {
                p = 10000;
                m = null;
                o = g.floating || c(this.currentItem);
                n = o ? "left" : "top";
                r = o ? "width" : "height";
                f = this.positionAbs[n] + this.offset.click[n];
                for (h = this.items.length - 1; h >= 0; h--) {
                    if (!b.contains(this.containers[q].element[0], this.items[h].item[0])) {
                        continue
                    }
                    if (this.items[h].item[0] === this.currentItem[0]) {
                        continue
                    }
                    if (o && !a(this.positionAbs.top + this.offset.click.top, this.items[h].top, this.items[h].height)) {
                        continue
                    }
                    s = this.items[h].item.offset()[n];
                    k = false;
                    if (Math.abs(s - f) > Math.abs(s + this.items[h][r] - f)) {
                        k = true;
                        s += this.items[h][r]
                    }
                    if (Math.abs(s - f) < p) {
                        p = Math.abs(s - f);
                        m = this.items[h];
                        this.direction = k ? "up" : "down"
                    }
                }
                if (!m && !this.options.dropOnEmpty) {
                    return
                }
                if (this.currentContainer === this.containers[q]) {
                    return
                }
                m ? this._rearrange(e, m, null, true) : this._rearrange(e, null, this.containers[q].element, true);
                this._trigger("change", e, this._uiHash());
                this.containers[q]._trigger("change", e, this._uiHash(this));
                this.currentContainer = this.containers[q];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[q]._trigger("over", e, this._uiHash(this));
                this.containers[q].containerCache.over = 1
            }
        },_createHelper: function(f) {
            var g = this.options, e = b.isFunction(g.helper) ? b(g.helper.apply(this.element[0], [f, this.currentItem])) : (g.helper === "clone" ? this.currentItem.clone() : this.currentItem);
            if (!e.parents("body").length) {
                b(g.appendTo !== "parent" ? g.appendTo : this.currentItem[0].parentNode)[0].appendChild(e[0])
            }
            if (e[0] === this.currentItem[0]) {
                this._storedCSS = {width: this.currentItem[0].style.width,height: this.currentItem[0].style.height,position: this.currentItem.css("position"),top: this.currentItem.css("top"),left: this.currentItem.css("left")}
            }
            if (!e[0].style.width || g.forceHelperSize) {
                e.width(this.currentItem.width())
            }
            if (!e[0].style.height || g.forceHelperSize) {
                e.height(this.currentItem.height())
            }
            return e
        },_adjustOffsetFromHelper: function(e) {
            if (typeof e === "string") {
                e = e.split(" ")
            }
            if (b.isArray(e)) {
                e = {left: +e[0],top: +e[1] || 0}
            }
            if ("left" in e) {
                this.offset.click.left = e.left + this.margins.left
            }
            if ("right" in e) {
                this.offset.click.left = this.helperProportions.width - e.right + this.margins.left
            }
            if ("top" in e) {
                this.offset.click.top = e.top + this.margins.top
            }
            if ("bottom" in e) {
                this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top
            }
        },_getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) {
                e.left += this.scrollParent.scrollLeft();
                e.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && b.ui.ie)) {
                e = {top: 0,left: 0}
            }
            return {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        },_getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var e = this.currentItem.position();
                return {top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            } else {
                return {top: 0,left: 0}
            }
        },_cacheMargins: function() {
            this.margins = {left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)}
        },_cacheHelperProportions: function() {
            this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
        },_setContainment: function() {
            var f, h, e, g = this.options;
            if (g.containment === "parent") {
                g.containment = this.helper[0].parentNode
            }
            if (g.containment === "document" || g.containment === "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b(g.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b(g.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(g.containment)) {
                f = b(g.containment)[0];
                h = b(g.containment).offset();
                e = (b(f).css("overflow") !== "hidden");
                this.containment = [h.left + (parseInt(b(f).css("borderLeftWidth"), 10) || 0) + (parseInt(b(f).css("paddingLeft"), 10) || 0) - this.margins.left, h.top + (parseInt(b(f).css("borderTopWidth"), 10) || 0) + (parseInt(b(f).css("paddingTop"), 10) || 0) - this.margins.top, h.left + (e ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(b(f).css("borderLeftWidth"), 10) || 0) - (parseInt(b(f).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, h.top + (e ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(b(f).css("borderTopWidth"), 10) || 0) - (parseInt(b(f).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },_convertPositionTo: function(g, i) {
            if (!i) {
                i = this.position
            }
            var f = g === "absolute" ? 1 : -1, e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = (/(html|body)/i).test(e[0].tagName);
            return {top: (i.top + this.offset.relative.top * f + this.offset.parent.top * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (h ? 0 : e.scrollTop())) * f)),left: (i.left + this.offset.relative.left * f + this.offset.parent.left * f - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : e.scrollLeft()) * f))}
        },_generatePosition: function(h) {
            var j, i, k = this.options, g = h.pageX, f = h.pageY, e = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, l = (/(html|body)/i).test(e[0].tagName);
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset()
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (h.pageX - this.offset.click.left < this.containment[0]) {
                        g = this.containment[0] + this.offset.click.left
                    }
                    if (h.pageY - this.offset.click.top < this.containment[1]) {
                        f = this.containment[1] + this.offset.click.top
                    }
                    if (h.pageX - this.offset.click.left > this.containment[2]) {
                        g = this.containment[2] + this.offset.click.left
                    }
                    if (h.pageY - this.offset.click.top > this.containment[3]) {
                        f = this.containment[3] + this.offset.click.top
                    }
                }
                if (k.grid) {
                    j = this.originalPageY + Math.round((f - this.originalPageY) / k.grid[1]) * k.grid[1];
                    f = this.containment ? ((j - this.offset.click.top >= this.containment[1] && j - this.offset.click.top <= this.containment[3]) ? j : ((j - this.offset.click.top >= this.containment[1]) ? j - k.grid[1] : j + k.grid[1])) : j;
                    i = this.originalPageX + Math.round((g - this.originalPageX) / k.grid[0]) * k.grid[0];
                    g = this.containment ? ((i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2]) ? i : ((i - this.offset.click.left >= this.containment[0]) ? i - k.grid[0] : i + k.grid[0])) : i
                }
            }
            return {top: (f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (l ? 0 : e.scrollTop())))),left: (g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : l ? 0 : e.scrollLeft())))}
        },_rearrange: function(j, h, f, g) {
            f ? f[0].appendChild(this.placeholder[0]) : h.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? h.item[0] : h.item[0].nextSibling));
            this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function() {
                if (e === this.counter) {
                    this.refreshPositions(!g)
                }
            })
        },_clear: function(f, h) {
            this.reverting = false;
            var e, j = [];
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem)
            }
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (e in this._storedCSS) {
                    if (this._storedCSS[e] === "auto" || this._storedCSS[e] === "static") {
                        this._storedCSS[e] = ""
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            if (this.fromOutside && !h) {
                j.push(function(i) {
                    this._trigger("receive", i, this._uiHash(this.fromOutside))
                })
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !h) {
                j.push(function(i) {
                    this._trigger("update", i, this._uiHash())
                })
            }
            if (this !== this.currentContainer) {
                if (!h) {
                    j.push(function(i) {
                        this._trigger("remove", i, this._uiHash())
                    });
                    j.push((function(i) {
                        return function(k) {
                            i._trigger("receive", k, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer));
                    j.push((function(i) {
                        return function(k) {
                            i._trigger("update", k, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer))
                }
            }
            function g(l, i, k) {
                return function(m) {
                    k._trigger(l, m, i._uiHash(i))
                }
            }
            for (e = this.containers.length - 1; e >= 0; e--) {
                if (!h) {
                    j.push(g("deactivate", this, this.containers[e]))
                }
                if (this.containers[e].containerCache.over) {
                    j.push(g("out", this, this.containers[e]));
                    this.containers[e].containerCache.over = 0
                }
            }
            if (this.storedCursor) {
                this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove()
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity)
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
            }
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!h) {
                    this._trigger("beforeStop", f, this._uiHash());
                    for (e = 0; e < j.length; e++) {
                        j[e].call(this, f)
                    }
                    this._trigger("stop", f, this._uiHash())
                }
                this.fromOutside = false;
                return false
            }
            if (!h) {
                this._trigger("beforeStop", f, this._uiHash())
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (this.helper[0] !== this.currentItem[0]) {
                this.helper.remove()
            }
            this.helper = null;
            if (!h) {
                for (e = 0; e < j.length; e++) {
                    j[e].call(this, f)
                }
                this._trigger("stop", f, this._uiHash())
            }
            this.fromOutside = false;
            return true
        },_trigger: function() {
            if (b.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel()
            }
        },_uiHash: function(e) {
            var f = e || this;
            return {helper: f.helper,placeholder: f.placeholder || b([]),position: f.position,originalPosition: f.originalPosition,offset: f.positionAbs,item: f.currentItem,sender: e ? e.element : null}
        }})
})(jQuery);
(function(a, c) {
    var b = "ui-effects-";
    a.effects = {effect: {}};
    /*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
    (function(r, g) {
        var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", k = /^([\-+])=\s*(\d+\.?\d*)/, j = [{re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse: function(s) {
                    return [s[1], s[2], s[3], s[4]]
                }}, {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse: function(s) {
                    return [s[1] * 2.55, s[2] * 2.55, s[3] * 2.55, s[4]]
                }}, {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse: function(s) {
                    return [parseInt(s[1], 16), parseInt(s[2], 16), parseInt(s[3], 16)]
                }}, {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,parse: function(s) {
                    return [parseInt(s[1] + s[1], 16), parseInt(s[2] + s[2], 16), parseInt(s[3] + s[3], 16)]
                }}, {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space: "hsla",parse: function(s) {
                    return [s[1], s[2] / 100, s[3] / 100, s[4]]
                }}], h = r.Color = function(t, u, s, v) {
            return new r.Color.fn.parse(t, u, s, v)
        }, m = {rgba: {props: {red: {idx: 0,type: "byte"},green: {idx: 1,type: "byte"},blue: {idx: 2,type: "byte"}}},hsla: {props: {hue: {idx: 0,type: "degrees"},saturation: {idx: 1,type: "percent"},lightness: {idx: 2,type: "percent"}}}}, q = {"byte": {floor: true,max: 255},percent: {max: 1},degrees: {mod: 360,floor: true}}, p = h.support = {}, e = r("<p>")[0], d, o = r.each;
        e.style.cssText = "background-color:rgba(1,1,1,.5)";
        p.rgba = e.style.backgroundColor.indexOf("rgba") > -1;
        o(m, function(s, t) {
            t.cache = "_" + s;
            t.props.alpha = {idx: 3,type: "percent",def: 1}
        });
        function l(t, v, u) {
            var s = q[v.type] || {};
            if (t == null) {
                return (u || !v.def) ? null : v.def
            }
            t = s.floor ? ~~t : parseFloat(t);
            if (isNaN(t)) {
                return v.def
            }
            if (s.mod) {
                return (t + s.mod) % s.mod
            }
            return 0 > t ? 0 : s.max < t ? s.max : t
        }
        function i(s) {
            var u = h(), t = u._rgba = [];
            s = s.toLowerCase();
            o(j, function(z, A) {
                var x, y = A.re.exec(s), w = y && A.parse(y), v = A.space || "rgba";
                if (w) {
                    x = u[v](w);
                    u[m[v].cache] = x[m[v].cache];
                    t = u._rgba = x._rgba;
                    return false
                }
            });
            if (t.length) {
                if (t.join() === "0,0,0,0") {
                    r.extend(t, d.transparent)
                }
                return u
            }
            return d[s]
        }
        h.fn = r.extend(h.prototype, {parse: function(y, w, s, x) {
                if (y === g) {
                    this._rgba = [null, null, null, null];
                    return this
                }
                if (y.jquery || y.nodeType) {
                    y = r(y).css(w);
                    w = g
                }
                var v = this, u = r.type(y), t = this._rgba = [];
                if (w !== g) {
                    y = [y, w, s, x];
                    u = "array"
                }
                if (u === "string") {
                    return this.parse(i(y) || d._default)
                }
                if (u === "array") {
                    o(m.rgba.props, function(z, A) {
                        t[A.idx] = l(y[A.idx], A)
                    });
                    return this
                }
                if (u === "object") {
                    if (y instanceof h) {
                        o(m, function(z, A) {
                            if (y[A.cache]) {
                                v[A.cache] = y[A.cache].slice()
                            }
                        })
                    } else {
                        o(m, function(A, B) {
                            var z = B.cache;
                            o(B.props, function(C, D) {
                                if (!v[z] && B.to) {
                                    if (C === "alpha" || y[C] == null) {
                                        return
                                    }
                                    v[z] = B.to(v._rgba)
                                }
                                v[z][D.idx] = l(y[C], D, true)
                            });
                            if (v[z] && r.inArray(null, v[z].slice(0, 3)) < 0) {
                                v[z][3] = 1;
                                if (B.from) {
                                    v._rgba = B.from(v[z])
                                }
                            }
                        })
                    }
                    return this
                }
            },is: function(u) {
                var s = h(u), v = true, t = this;
                o(m, function(w, y) {
                    var z, x = s[y.cache];
                    if (x) {
                        z = t[y.cache] || y.to && y.to(t._rgba) || [];
                        o(y.props, function(A, B) {
                            if (x[B.idx] != null) {
                                v = (x[B.idx] === z[B.idx]);
                                return v
                            }
                        })
                    }
                    return v
                });
                return v
            },_space: function() {
                var s = [], t = this;
                o(m, function(u, v) {
                    if (t[v.cache]) {
                        s.push(u)
                    }
                });
                return s.pop()
            },transition: function(t, z) {
                var u = h(t), v = u._space(), w = m[v], x = this.alpha() === 0 ? h("transparent") : this, y = x[w.cache] || w.to(x._rgba), s = y.slice();
                u = u[w.cache];
                o(w.props, function(D, F) {
                    var C = F.idx, B = y[C], A = u[C], E = q[F.type] || {};
                    if (A === null) {
                        return
                    }
                    if (B === null) {
                        s[C] = A
                    } else {
                        if (E.mod) {
                            if (A - B > E.mod / 2) {
                                B += E.mod
                            } else {
                                if (B - A > E.mod / 2) {
                                    B -= E.mod
                                }
                            }
                        }
                        s[C] = l((A - B) * z + B, F)
                    }
                });
                return this[v](s)
            },blend: function(v) {
                if (this._rgba[3] === 1) {
                    return this
                }
                var u = this._rgba.slice(), t = u.pop(), s = h(v)._rgba;
                return h(r.map(u, function(w, x) {
                    return (1 - t) * s[x] + t * w
                }))
            },toRgbaString: function() {
                var t = "rgba(", s = r.map(this._rgba, function(u, w) {
                    return u == null ? (w > 2 ? 1 : 0) : u
                });
                if (s[3] === 1) {
                    s.pop();
                    t = "rgb("
                }
                return t + s.join() + ")"
            },toHslaString: function() {
                var t = "hsla(", s = r.map(this.hsla(), function(u, w) {
                    if (u == null) {
                        u = w > 2 ? 1 : 0
                    }
                    if (w && w < 3) {
                        u = Math.round(u * 100) + "%"
                    }
                    return u
                });
                if (s[3] === 1) {
                    s.pop();
                    t = "hsl("
                }
                return t + s.join() + ")"
            },toHexString: function(s) {
                var t = this._rgba.slice(), u = t.pop();
                if (s) {
                    t.push(~~(u * 255))
                }
                return "#" + r.map(t, function(w) {
                    w = (w || 0).toString(16);
                    return w.length === 1 ? "0" + w : w
                }).join("")
            },toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }});
        h.fn.parse.prototype = h.fn;
        function f(u, t, s) {
            s = (s + 1) % 1;
            if (s * 6 < 1) {
                return u + (t - u) * s * 6
            }
            if (s * 2 < 1) {
                return t
            }
            if (s * 3 < 2) {
                return u + (t - u) * ((2 / 3) - s) * 6
            }
            return u
        }
        m.hsla.to = function(v) {
            if (v[0] == null || v[1] == null || v[2] == null) {
                return [null, null, null, v[3]]
            }
            var t = v[0] / 255, y = v[1] / 255, z = v[2] / 255, B = v[3], A = Math.max(t, y, z), w = Math.min(t, y, z), C = A - w, D = A + w, u = D * 0.5, x, E;
            if (w === A) {
                x = 0
            } else {
                if (t === A) {
                    x = (60 * (y - z) / C) + 360
                } else {
                    if (y === A) {
                        x = (60 * (z - t) / C) + 120
                    } else {
                        x = (60 * (t - y) / C) + 240
                    }
                }
            }
            if (C === 0) {
                E = 0
            } else {
                if (u <= 0.5) {
                    E = C / D
                } else {
                    E = C / (2 - D)
                }
            }
            return [Math.round(x) % 360, E, u, B == null ? 1 : B]
        };
        m.hsla.from = function(x) {
            if (x[0] == null || x[1] == null || x[2] == null) {
                return [null, null, null, x[3]]
            }
            var w = x[0] / 360, v = x[1], u = x[2], t = x[3], y = u <= 0.5 ? u * (1 + v) : u + v - u * v, z = 2 * u - y;
            return [Math.round(f(z, y, w + (1 / 3)) * 255), Math.round(f(z, y, w) * 255), Math.round(f(z, y, w - (1 / 3)) * 255), t]
        };
        o(m, function(t, v) {
            var u = v.props, s = v.cache, x = v.to, w = v.from;
            h.fn[t] = function(C) {
                if (x && !this[s]) {
                    this[s] = x(this._rgba)
                }
                if (C === g) {
                    return this[s].slice()
                }
                var z, B = r.type(C), y = (B === "array" || B === "object") ? C : arguments, A = this[s].slice();
                o(u, function(D, F) {
                    var E = y[B === "object" ? D : F.idx];
                    if (E == null) {
                        E = A[F.idx]
                    }
                    A[F.idx] = l(E, F)
                });
                if (w) {
                    z = h(w(A));
                    z[s] = A;
                    return z
                } else {
                    return h(A)
                }
            };
            o(u, function(y, z) {
                if (h.fn[y]) {
                    return
                }
                h.fn[y] = function(D) {
                    var F = r.type(D), C = (y === "alpha" ? (this._hsla ? "hsla" : "rgba") : t), B = this[C](), E = B[z.idx], A;
                    if (F === "undefined") {
                        return E
                    }
                    if (F === "function") {
                        D = D.call(this, E);
                        F = r.type(D)
                    }
                    if (D == null && z.empty) {
                        return this
                    }
                    if (F === "string") {
                        A = k.exec(D);
                        if (A) {
                            D = E + parseFloat(A[2]) * (A[1] === "+" ? 1 : -1)
                        }
                    }
                    B[z.idx] = D;
                    return this[C](B)
                }
            })
        });
        h.hook = function(t) {
            var s = t.split(" ");
            o(s, function(u, v) {
                r.cssHooks[v] = {set: function(z, A) {
                        var x, y, w = "";
                        if (A !== "transparent" && (r.type(A) !== "string" || (x = i(A)))) {
                            A = h(x || A);
                            if (!p.rgba && A._rgba[3] !== 1) {
                                y = v === "backgroundColor" ? z.parentNode : z;
                                while ((w === "" || w === "transparent") && y && y.style) {
                                    try {
                                        w = r.css(y, "backgroundColor");
                                        y = y.parentNode
                                    } catch (B) {
                                    }
                                }
                                A = A.blend(w && w !== "transparent" ? w : "_default")
                            }
                            A = A.toRgbaString()
                        }
                        try {
                            z.style[v] = A
                        } catch (B) {
                        }
                    }};
                r.fx.step[v] = function(w) {
                    if (!w.colorInit) {
                        w.start = h(w.elem, v);
                        w.end = h(w.end);
                        w.colorInit = true
                    }
                    r.cssHooks[v].set(w.elem, w.start.transition(w.end, w.pos))
                }
            })
        };
        h.hook(n);
        r.cssHooks.borderColor = {expand: function(t) {
                var s = {};
                o(["Top", "Right", "Bottom", "Left"], function(v, u) {
                    s["border" + u + "Color"] = t
                });
                return s
            }};
        d = r.Color.names = {aqua: "#00ffff",black: "#000000",blue: "#0000ff",fuchsia: "#ff00ff",gray: "#808080",green: "#008000",lime: "#00ff00",maroon: "#800000",navy: "#000080",olive: "#808000",purple: "#800080",red: "#ff0000",silver: "#c0c0c0",teal: "#008080",white: "#ffffff",yellow: "#ffff00",transparent: [null, null, null, 0],_default: "#ffffff"}
    })(jQuery);
    (function() {
        var e = ["add", "remove", "toggle"], f = {border: 1,borderBottom: 1,borderColor: 1,borderLeft: 1,borderRight: 1,borderTop: 1,borderWidth: 1,margin: 1,padding: 1};
        a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(h, i) {
            a.fx.step[i] = function(j) {
                if (j.end !== "none" && !j.setAttr || j.pos === 1 && !j.setAttr) {
                    jQuery.style(j.elem, i, j.end);
                    j.setAttr = true
                }
            }
        });
        function g(l) {
            var i, h, j = l.ownerDocument.defaultView ? l.ownerDocument.defaultView.getComputedStyle(l, null) : l.currentStyle, k = {};
            if (j && j.length && j[0] && j[j[0]]) {
                h = j.length;
                while (h--) {
                    i = j[h];
                    if (typeof j[i] === "string") {
                        k[a.camelCase(i)] = j[i]
                    }
                }
            } else {
                for (i in j) {
                    if (typeof j[i] === "string") {
                        k[i] = j[i]
                    }
                }
            }
            return k
        }
        function d(h, j) {
            var l = {}, i, k;
            for (i in j) {
                k = j[i];
                if (h[i] !== k) {
                    if (!f[i]) {
                        if (a.fx.step[i] || !isNaN(parseFloat(k))) {
                            l[i] = k
                        }
                    }
                }
            }
            return l
        }
        if (!a.fn.addBack) {
            a.fn.addBack = function(h) {
                return this.add(h == null ? this.prevObject : this.prevObject.filter(h))
            }
        }
        a.effects.animateClass = function(h, i, l, k) {
            var j = a.speed(i, l, k);
            return this.queue(function() {
                var o = a(this), m = o.attr("class") || "", n, p = j.children ? o.find("*").addBack() : o;
                p = p.map(function() {
                    var q = a(this);
                    return {el: q,start: g(this)}
                });
                n = function() {
                    a.each(e, function(q, r) {
                        if (h[r]) {
                            o[r + "Class"](h[r])
                        }
                    })
                };
                n();
                p = p.map(function() {
                    this.end = g(this.el[0]);
                    this.diff = d(this.start, this.end);
                    return this
                });
                o.attr("class", m);
                p = p.map(function() {
                    var s = this, q = a.Deferred(), r = a.extend({}, j, {queue: false,complete: function() {
                            q.resolve(s)
                        }});
                    this.el.animate(this.diff, r);
                    return q.promise()
                });
                a.when.apply(a, p.get()).done(function() {
                    n();
                    a.each(arguments, function() {
                        var q = this.el;
                        a.each(this.diff, function(r) {
                            q.css(r, "")
                        })
                    });
                    j.complete.call(o[0])
                })
            })
        };
        a.fn.extend({addClass: (function(h) {
                return function(j, i, l, k) {
                    return i ? a.effects.animateClass.call(this, {add: j}, i, l, k) : h.apply(this, arguments)
                }
            })(a.fn.addClass),removeClass: (function(h) {
                return function(j, i, l, k) {
                    return arguments.length > 1 ? a.effects.animateClass.call(this, {remove: j}, i, l, k) : h.apply(this, arguments)
                }
            })(a.fn.removeClass),toggleClass: (function(h) {
                return function(k, j, i, m, l) {
                    if (typeof j === "boolean" || j === c) {
                        if (!i) {
                            return h.apply(this, arguments)
                        } else {
                            return a.effects.animateClass.call(this, (j ? {add: k} : {remove: k}), i, m, l)
                        }
                    } else {
                        return a.effects.animateClass.call(this, {toggle: k}, j, i, m)
                    }
                }
            })(a.fn.toggleClass),switchClass: function(h, j, i, l, k) {
                return a.effects.animateClass.call(this, {add: j,remove: h}, i, l, k)
            }})
    })();
    (function() {
        a.extend(a.effects, {version: "1.10.4",save: function(g, h) {
                for (var f = 0; f < h.length; f++) {
                    if (h[f] !== null) {
                        g.data(b + h[f], g[0].style[h[f]])
                    }
                }
            },restore: function(g, j) {
                var h, f;
                for (f = 0; f < j.length; f++) {
                    if (j[f] !== null) {
                        h = g.data(b + j[f]);
                        if (h === c) {
                            h = ""
                        }
                        g.css(j[f], h)
                    }
                }
            },setMode: function(f, g) {
                if (g === "toggle") {
                    g = f.is(":hidden") ? "show" : "hide"
                }
                return g
            },getBaseline: function(g, h) {
                var i, f;
                switch (g[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = 0.5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = g[0] / h.height
                }
                switch (g[1]) {
                    case "left":
                        f = 0;
                        break;
                    case "center":
                        f = 0.5;
                        break;
                    case "right":
                        f = 1;
                        break;
                    default:
                        f = g[1] / h.width
                }
                return {x: f,y: i}
            },createWrapper: function(g) {
                if (g.parent().is(".ui-effects-wrapper")) {
                    return g.parent()
                }
                var h = {width: g.outerWidth(true),height: g.outerHeight(true),"float": g.css("float")}, k = a("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%",background: "transparent",border: "none",margin: 0,padding: 0}), f = {width: g.width(),height: g.height()}, j = document.activeElement;
                try {
                    j.id
                } catch (i) {
                    j = document.body
                }
                g.wrap(k);
                if (g[0] === j || a.contains(g[0], j)) {
                    a(j).focus()
                }
                k = g.parent();
                if (g.css("position") === "static") {
                    k.css({position: "relative"});
                    g.css({position: "relative"})
                } else {
                    a.extend(h, {position: g.css("position"),zIndex: g.css("z-index")});
                    a.each(["top", "left", "bottom", "right"], function(l, m) {
                        h[m] = g.css(m);
                        if (isNaN(parseInt(h[m], 10))) {
                            h[m] = "auto"
                        }
                    });
                    g.css({position: "relative",top: 0,left: 0,right: "auto",bottom: "auto"})
                }
                g.css(f);
                return k.css(h).show()
            },removeWrapper: function(f) {
                var g = document.activeElement;
                if (f.parent().is(".ui-effects-wrapper")) {
                    f.parent().replaceWith(f);
                    if (f[0] === g || a.contains(f[0], g)) {
                        a(g).focus()
                    }
                }
                return f
            },setTransition: function(g, i, f, h) {
                h = h || {};
                a.each(i, function(k, j) {
                    var l = g.cssUnit(j);
                    if (l[0] > 0) {
                        h[j] = l[0] * f + l[1]
                    }
                });
                return h
            }});
        function d(g, f, h, i) {
            if (a.isPlainObject(g)) {
                f = g;
                g = g.effect
            }
            g = {effect: g};
            if (f == null) {
                f = {}
            }
            if (a.isFunction(f)) {
                i = f;
                h = null;
                f = {}
            }
            if (typeof f === "number" || a.fx.speeds[f]) {
                i = h;
                h = f;
                f = {}
            }
            if (a.isFunction(h)) {
                i = h;
                h = null
            }
            if (f) {
                a.extend(g, f)
            }
            h = h || f.duration;
            g.duration = a.fx.off ? 0 : typeof h === "number" ? h : h in a.fx.speeds ? a.fx.speeds[h] : a.fx.speeds._default;
            g.complete = i || f.complete;
            return g
        }
        function e(f) {
            if (!f || typeof f === "number" || a.fx.speeds[f]) {
                return true
            }
            if (typeof f === "string" && !a.effects.effect[f]) {
                return true
            }
            if (a.isFunction(f)) {
                return true
            }
            if (typeof f === "object" && !f.effect) {
                return true
            }
            return false
        }
        a.fn.extend({effect: function() {
                var h = d.apply(this, arguments), j = h.mode, f = h.queue, g = a.effects.effect[h.effect];
                if (a.fx.off || !g) {
                    if (j) {
                        return this[j](h.duration, h.complete)
                    } else {
                        return this.each(function() {
                            if (h.complete) {
                                h.complete.call(this)
                            }
                        })
                    }
                }
                function i(m) {
                    var n = a(this), l = h.complete, o = h.mode;
                    function k() {
                        if (a.isFunction(l)) {
                            l.call(n[0])
                        }
                        if (a.isFunction(m)) {
                            m()
                        }
                    }
                    if (n.is(":hidden") ? o === "hide" : o === "show") {
                        n[o]();
                        k()
                    } else {
                        g.call(n[0], h, k)
                    }
                }
                return f === false ? this.each(i) : this.queue(f || "fx", i)
            },show: (function(f) {
                return function(h) {
                    if (e(h)) {
                        return f.apply(this, arguments)
                    } else {
                        var g = d.apply(this, arguments);
                        g.mode = "show";
                        return this.effect.call(this, g)
                    }
                }
            })(a.fn.show),hide: (function(f) {
                return function(h) {
                    if (e(h)) {
                        return f.apply(this, arguments)
                    } else {
                        var g = d.apply(this, arguments);
                        g.mode = "hide";
                        return this.effect.call(this, g)
                    }
                }
            })(a.fn.hide),toggle: (function(f) {
                return function(h) {
                    if (e(h) || typeof h === "boolean") {
                        return f.apply(this, arguments)
                    } else {
                        var g = d.apply(this, arguments);
                        g.mode = "toggle";
                        return this.effect.call(this, g)
                    }
                }
            })(a.fn.toggle),cssUnit: function(f) {
                var g = this.css(f), h = [];
                a.each(["em", "px", "%", "pt"], function(j, k) {
                    if (g.indexOf(k) > 0) {
                        h = [parseFloat(g), k]
                    }
                });
                return h
            }})
    })();
    (function() {
        var d = {};
        a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(f, e) {
            d[e] = function(g) {
                return Math.pow(g, f + 2)
            }
        });
        a.extend(d, {Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },Elastic: function(e) {
                return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
            },Back: function(e) {
                return e * e * (3 * e - 2)
            },Bounce: function(g) {
                var e, f = 4;
                while (g < ((e = Math.pow(2, --f)) - 1) / 11) {
                }
                return 1 / Math.pow(4, 3 - f) - 7.5625 * Math.pow((e * 3 - 2) / 22 - g, 2)
            }});
        a.each(d, function(f, e) {
            a.easing["easeIn" + f] = e;
            a.easing["easeOut" + f] = function(g) {
                return 1 - e(1 - g)
            };
            a.easing["easeInOut" + f] = function(g) {
                return g < 0.5 ? e(g * 2) / 2 : 1 - e(g * -2 + 2) / 2
            }
        })
    })()
})(jQuery);
(function(b, d) {
    var a = /up|down|vertical/, c = /up|left|vertical|horizontal/;
    b.effects.effect.blind = function(g, m) {
        var h = b(this), q = ["position", "top", "bottom", "left", "right", "height", "width"], n = b.effects.setMode(h, g.mode || "hide"), r = g.direction || "up", j = a.test(r), i = j ? "height" : "width", p = j ? "top" : "left", t = c.test(r), l = {}, s = n === "show", f, e, k;
        if (h.parent().is(".ui-effects-wrapper")) {
            b.effects.save(h.parent(), q)
        } else {
            b.effects.save(h, q)
        }
        h.show();
        f = b.effects.createWrapper(h).css({overflow: "hidden"});
        e = f[i]();
        k = parseFloat(f.css(p)) || 0;
        l[i] = s ? e : 0;
        if (!t) {
            h.css(j ? "bottom" : "right", 0).css(j ? "top" : "left", "auto").css({position: "absolute"});
            l[p] = s ? k : e + k
        }
        if (s) {
            f.css(i, 0);
            if (!t) {
                f.css(p, k + e)
            }
        }
        f.animate(l, {duration: g.duration,easing: g.easing,queue: false,complete: function() {
                if (n === "hide") {
                    h.hide()
                }
                b.effects.restore(h, q);
                b.effects.removeWrapper(h);
                m()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.bounce = function(m, l) {
        var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(c, m.mode || "effect"), j = k === "hide", v = k === "show", w = m.direction || "up", e = m.distance, h = m.times || 5, x = h * 2 + (v || j ? 1 : 0), u = m.duration / x, p = m.easing, f = (w === "up" || w === "down") ? "top" : "left", n = (w === "up" || w === "left"), t, g, s, q = c.queue(), r = q.length;
        if (v || j) {
            d.push("opacity")
        }
        a.effects.save(c, d);
        c.show();
        a.effects.createWrapper(c);
        if (!e) {
            e = c[f === "top" ? "outerHeight" : "outerWidth"]() / 3
        }
        if (v) {
            s = {opacity: 1};
            s[f] = 0;
            c.css("opacity", 0).css(f, n ? -e * 2 : e * 2).animate(s, u, p)
        }
        if (j) {
            e = e / Math.pow(2, h - 1)
        }
        s = {};
        s[f] = 0;
        for (t = 0; t < h; t++) {
            g = {};
            g[f] = (n ? "-=" : "+=") + e;
            c.animate(g, u, p).animate(s, u, p);
            e = j ? e * 2 : e / 2
        }
        if (j) {
            g = {opacity: 0};
            g[f] = (n ? "-=" : "+=") + e;
            c.animate(g, u, p)
        }
        c.queue(function() {
            if (j) {
                c.hide()
            }
            a.effects.restore(c, d);
            a.effects.removeWrapper(c);
            l()
        });
        if (r > 1) {
            q.splice.apply(q, [1, 0].concat(q.splice(r, x + 1)))
        }
        c.dequeue()
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.clip = function(f, i) {
        var g = a(this), m = ["position", "top", "bottom", "left", "right", "height", "width"], l = a.effects.setMode(g, f.mode || "hide"), p = l === "show", n = f.direction || "vertical", k = n === "vertical", q = k ? "height" : "width", j = k ? "top" : "left", h = {}, d, e, c;
        a.effects.save(g, m);
        g.show();
        d = a.effects.createWrapper(g).css({overflow: "hidden"});
        e = (g[0].tagName === "IMG") ? d : g;
        c = e[q]();
        if (p) {
            e.css(q, 0);
            e.css(j, c / 2)
        }
        h[q] = p ? c : 0;
        h[j] = p ? 0 : c / 2;
        e.animate(h, {queue: false,duration: f.duration,easing: f.easing,complete: function() {
                if (!p) {
                    g.hide()
                }
                a.effects.restore(g, m);
                a.effects.removeWrapper(g);
                i()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.drop = function(d, h) {
        var e = a(this), j = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], i = a.effects.setMode(e, d.mode || "hide"), l = i === "show", k = d.direction || "left", f = (k === "up" || k === "down") ? "top" : "left", m = (k === "up" || k === "left") ? "pos" : "neg", g = {opacity: l ? 1 : 0}, c;
        a.effects.save(e, j);
        e.show();
        a.effects.createWrapper(e);
        c = d.distance || e[f === "top" ? "outerHeight" : "outerWidth"](true) / 2;
        if (l) {
            e.css("opacity", 0).css(f, m === "pos" ? -c : c)
        }
        g[f] = (l ? (m === "pos" ? "+=" : "-=") : (m === "pos" ? "-=" : "+=")) + c;
        e.animate(g, {queue: false,duration: d.duration,easing: d.easing,complete: function() {
                if (i === "hide") {
                    e.hide()
                }
                a.effects.restore(e, j);
                a.effects.removeWrapper(e);
                h()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.explode = function(s, r) {
        var k = s.pieces ? Math.round(Math.sqrt(s.pieces)) : 3, d = k, c = a(this), m = a.effects.setMode(c, s.mode || "hide"), w = m === "show", g = c.show().css("visibility", "hidden").offset(), t = Math.ceil(c.outerWidth() / d), q = Math.ceil(c.outerHeight() / k), h = [], v, u, e, p, n, l;
        function x() {
            h.push(this);
            if (h.length === k * d) {
                f()
            }
        }
        for (v = 0; v < k; v++) {
            p = g.top + v * q;
            l = v - (k - 1) / 2;
            for (u = 0; u < d; u++) {
                e = g.left + u * t;
                n = u - (d - 1) / 2;
                c.clone().appendTo("body").wrap("<div></div>").css({position: "absolute",visibility: "visible",left: -u * t,top: -v * q}).parent().addClass("ui-effects-explode").css({position: "absolute",overflow: "hidden",width: t,height: q,left: e + (w ? n * t : 0),top: p + (w ? l * q : 0),opacity: w ? 0 : 1}).animate({left: e + (w ? 0 : n * t),top: p + (w ? 0 : l * q),opacity: w ? 1 : 0}, s.duration || 500, s.easing, x)
            }
        }
        function f() {
            c.css({visibility: "visible"});
            a(h).remove();
            if (!w) {
                c.hide()
            }
            r()
        }
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.fade = function(f, c) {
        var d = a(this), e = a.effects.setMode(d, f.mode || "toggle");
        d.animate({opacity: e}, {queue: false,duration: f.duration,easing: f.easing,complete: c})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.fold = function(e, i) {
        var f = a(this), n = ["position", "top", "bottom", "left", "right", "height", "width"], k = a.effects.setMode(f, e.mode || "hide"), r = k === "show", l = k === "hide", t = e.size || 15, m = /([0-9]+)%/.exec(t), s = !!e.horizFirst, j = r !== s, g = j ? ["width", "height"] : ["height", "width"], h = e.duration / 2, d, c, q = {}, p = {};
        a.effects.save(f, n);
        f.show();
        d = a.effects.createWrapper(f).css({overflow: "hidden"});
        c = j ? [d.width(), d.height()] : [d.height(), d.width()];
        if (m) {
            t = parseInt(m[1], 10) / 100 * c[l ? 0 : 1]
        }
        if (r) {
            d.css(s ? {height: 0,width: t} : {height: t,width: 0})
        }
        q[g[0]] = r ? c[0] : t;
        p[g[1]] = r ? c[1] : 0;
        d.animate(q, h, e.easing).animate(p, h, e.easing, function() {
            if (l) {
                f.hide()
            }
            a.effects.restore(f, n);
            a.effects.removeWrapper(f);
            i()
        })
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.highlight = function(h, c) {
        var e = a(this), d = ["backgroundImage", "backgroundColor", "opacity"], g = a.effects.setMode(e, h.mode || "show"), f = {backgroundColor: e.css("backgroundColor")};
        if (g === "hide") {
            f.opacity = 0
        }
        a.effects.save(e, d);
        e.show().css({backgroundImage: "none",backgroundColor: h.color || "#ffff99"}).animate(f, {queue: false,duration: h.duration,easing: h.easing,complete: function() {
                if (g === "hide") {
                    e.hide()
                }
                a.effects.restore(e, d);
                c()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.pulsate = function(c, g) {
        var e = a(this), k = a.effects.setMode(e, c.mode || "show"), p = k === "show", l = k === "hide", q = (p || k === "hide"), m = ((c.times || 5) * 2) + (q ? 1 : 0), f = c.duration / m, n = 0, j = e.queue(), d = j.length, h;
        if (p || !e.is(":visible")) {
            e.css("opacity", 0).show();
            n = 1
        }
        for (h = 1; h < m; h++) {
            e.animate({opacity: n}, f, c.easing);
            n = 1 - n
        }
        e.animate({opacity: n}, f, c.easing);
        e.queue(function() {
            if (l) {
                e.hide()
            }
            g()
        });
        if (d > 1) {
            j.splice.apply(j, [1, 0].concat(j.splice(d, m + 1)))
        }
        e.dequeue()
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.puff = function(j, c) {
        var h = a(this), i = a.effects.setMode(h, j.mode || "hide"), f = i === "hide", g = parseInt(j.percent, 10) || 150, e = g / 100, d = {height: h.height(),width: h.width(),outerHeight: h.outerHeight(),outerWidth: h.outerWidth()};
        a.extend(j, {effect: "scale",queue: false,fade: true,mode: i,complete: c,percent: f ? g : 100,from: f ? d : {height: d.height * e,width: d.width * e,outerHeight: d.outerHeight * e,outerWidth: d.outerWidth * e}});
        h.effect(j)
    };
    a.effects.effect.scale = function(c, f) {
        var d = a(this), l = a.extend(true, {}, c), g = a.effects.setMode(d, c.mode || "effect"), h = parseInt(c.percent, 10) || (parseInt(c.percent, 10) === 0 ? 0 : (g === "hide" ? 0 : 100)), j = c.direction || "both", k = c.origin, e = {height: d.height(),width: d.width(),outerHeight: d.outerHeight(),outerWidth: d.outerWidth()}, i = {y: j !== "horizontal" ? (h / 100) : 1,x: j !== "vertical" ? (h / 100) : 1};
        l.effect = "size";
        l.queue = false;
        l.complete = f;
        if (g !== "effect") {
            l.origin = k || ["middle", "center"];
            l.restore = true
        }
        l.from = c.from || (g === "show" ? {height: 0,width: 0,outerHeight: 0,outerWidth: 0} : e);
        l.to = {height: e.height * i.y,width: e.width * i.x,outerHeight: e.outerHeight * i.y,outerWidth: e.outerWidth * i.x};
        if (l.fade) {
            if (g === "show") {
                l.from.opacity = 0;
                l.to.opacity = 1
            }
            if (g === "hide") {
                l.from.opacity = 1;
                l.to.opacity = 0
            }
        }
        d.effect(l)
    };
    a.effects.effect.size = function(l, k) {
        var q, i, j, c = a(this), p = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], n = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], m = ["width", "height", "overflow"], g = ["fontSize"], s = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], h = a.effects.setMode(c, l.mode || "effect"), r = l.restore || h !== "effect", v = l.scale || "both", t = l.origin || ["middle", "center"], u = c.css("position"), e = r ? p : n, f = {height: 0,width: 0,outerHeight: 0,outerWidth: 0};
        if (h === "show") {
            c.show()
        }
        q = {height: c.height(),width: c.width(),outerHeight: c.outerHeight(),outerWidth: c.outerWidth()};
        if (l.mode === "toggle" && h === "show") {
            c.from = l.to || f;
            c.to = l.from || q
        } else {
            c.from = l.from || (h === "show" ? f : q);
            c.to = l.to || (h === "hide" ? f : q)
        }
        j = {from: {y: c.from.height / q.height,x: c.from.width / q.width},to: {y: c.to.height / q.height,x: c.to.width / q.width}};
        if (v === "box" || v === "both") {
            if (j.from.y !== j.to.y) {
                e = e.concat(s);
                c.from = a.effects.setTransition(c, s, j.from.y, c.from);
                c.to = a.effects.setTransition(c, s, j.to.y, c.to)
            }
            if (j.from.x !== j.to.x) {
                e = e.concat(d);
                c.from = a.effects.setTransition(c, d, j.from.x, c.from);
                c.to = a.effects.setTransition(c, d, j.to.x, c.to)
            }
        }
        if (v === "content" || v === "both") {
            if (j.from.y !== j.to.y) {
                e = e.concat(g).concat(m);
                c.from = a.effects.setTransition(c, g, j.from.y, c.from);
                c.to = a.effects.setTransition(c, g, j.to.y, c.to)
            }
        }
        a.effects.save(c, e);
        c.show();
        a.effects.createWrapper(c);
        c.css("overflow", "hidden").css(c.from);
        if (t) {
            i = a.effects.getBaseline(t, q);
            c.from.top = (q.outerHeight - c.outerHeight()) * i.y;
            c.from.left = (q.outerWidth - c.outerWidth()) * i.x;
            c.to.top = (q.outerHeight - c.to.outerHeight) * i.y;
            c.to.left = (q.outerWidth - c.to.outerWidth) * i.x
        }
        c.css(c.from);
        if (v === "content" || v === "both") {
            s = s.concat(["marginTop", "marginBottom"]).concat(g);
            d = d.concat(["marginLeft", "marginRight"]);
            m = p.concat(s).concat(d);
            c.find("*[width]").each(function() {
                var w = a(this), o = {height: w.height(),width: w.width(),outerHeight: w.outerHeight(),outerWidth: w.outerWidth()};
                if (r) {
                    a.effects.save(w, m)
                }
                w.from = {height: o.height * j.from.y,width: o.width * j.from.x,outerHeight: o.outerHeight * j.from.y,outerWidth: o.outerWidth * j.from.x};
                w.to = {height: o.height * j.to.y,width: o.width * j.to.x,outerHeight: o.height * j.to.y,outerWidth: o.width * j.to.x};
                if (j.from.y !== j.to.y) {
                    w.from = a.effects.setTransition(w, s, j.from.y, w.from);
                    w.to = a.effects.setTransition(w, s, j.to.y, w.to)
                }
                if (j.from.x !== j.to.x) {
                    w.from = a.effects.setTransition(w, d, j.from.x, w.from);
                    w.to = a.effects.setTransition(w, d, j.to.x, w.to)
                }
                w.css(w.from);
                w.animate(w.to, l.duration, l.easing, function() {
                    if (r) {
                        a.effects.restore(w, m)
                    }
                })
            })
        }
        c.animate(c.to, {queue: false,duration: l.duration,easing: l.easing,complete: function() {
                if (c.to.opacity === 0) {
                    c.css("opacity", c.from.opacity)
                }
                if (h === "hide") {
                    c.hide()
                }
                a.effects.restore(c, e);
                if (!r) {
                    if (u === "static") {
                        c.css({position: "relative",top: c.to.top,left: c.to.left})
                    } else {
                        a.each(["top", "left"], function(o, w) {
                            c.css(w, function(y, A) {
                                var z = parseInt(A, 10), x = o ? c.to.left : c.to.top;
                                if (A === "auto") {
                                    return x + "px"
                                }
                                return z + x + "px"
                            })
                        })
                    }
                }
                a.effects.removeWrapper(c);
                k()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.shake = function(l, k) {
        var c = a(this), d = ["position", "top", "bottom", "left", "right", "height", "width"], j = a.effects.setMode(c, l.mode || "effect"), u = l.direction || "left", e = l.distance || 20, h = l.times || 3, v = h * 2 + 1, q = Math.round(l.duration / v), g = (u === "up" || u === "down") ? "top" : "left", f = (u === "up" || u === "left"), t = {}, s = {}, r = {}, p, m = c.queue(), n = m.length;
        a.effects.save(c, d);
        c.show();
        a.effects.createWrapper(c);
        t[g] = (f ? "-=" : "+=") + e;
        s[g] = (f ? "+=" : "-=") + e * 2;
        r[g] = (f ? "-=" : "+=") + e * 2;
        c.animate(t, q, l.easing);
        for (p = 1; p < h; p++) {
            c.animate(s, q, l.easing).animate(r, q, l.easing)
        }
        c.animate(s, q, l.easing).animate(t, q / 2, l.easing).queue(function() {
            if (j === "hide") {
                c.hide()
            }
            a.effects.restore(c, d);
            a.effects.removeWrapper(c);
            k()
        });
        if (n > 1) {
            m.splice.apply(m, [1, 0].concat(m.splice(n, v + 1)))
        }
        c.dequeue()
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.slide = function(e, i) {
        var f = a(this), k = ["position", "top", "bottom", "left", "right", "width", "height"], j = a.effects.setMode(f, e.mode || "show"), m = j === "show", l = e.direction || "left", g = (l === "up" || l === "down") ? "top" : "left", d = (l === "up" || l === "left"), c, h = {};
        a.effects.save(f, k);
        f.show();
        c = e.distance || f[g === "top" ? "outerHeight" : "outerWidth"](true);
        a.effects.createWrapper(f).css({overflow: "hidden"});
        if (m) {
            f.css(g, d ? (isNaN(c) ? "-" + c : -c) : c)
        }
        h[g] = (m ? (d ? "+=" : "-=") : (d ? "-=" : "+=")) + c;
        f.animate(h, {queue: false,duration: e.duration,easing: e.easing,complete: function() {
                if (j === "hide") {
                    f.hide()
                }
                a.effects.restore(f, k);
                a.effects.removeWrapper(f);
                i()
            }})
    }
})(jQuery);
(function(a, b) {
    a.effects.effect.transfer = function(d, h) {
        var f = a(this), k = a(d.to), n = k.css("position") === "fixed", j = a("body"), l = n ? j.scrollTop() : 0, m = n ? j.scrollLeft() : 0, c = k.offset(), g = {top: c.top - l,left: c.left - m,height: k.innerHeight(),width: k.innerWidth()}, i = f.offset(), e = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(d.className).css({top: i.top - l,left: i.left - m,height: f.innerHeight(),width: f.innerWidth(),position: n ? "fixed" : "absolute"}).animate(g, d.duration, d.easing, function() {
            e.remove();
            h()
        })
    }
})(jQuery);
define("jqueryUi", ["jquery"], (function(a) {
    return function() {
        var b, c;
        return b || a.jQuery
    }
}(this)));
/*!
 * Globalize
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(j, g) {
    var r, w, l, x, p, v, u, t, m, a, k, y, q, c, n, s, z, o, i, h, d, f, e, b;
    r = function(A) {
        return new r.prototype.init(A)
    };
    if (typeof require !== "undefined" && typeof exports !== "undefined" && typeof module !== "undefined") {
        module.exports = r
    } else {
        j.Globalize = r
    }
    r.cultures = {};
    r.prototype = {constructor: r,init: function(A) {
            this.cultures = r.cultures;
            this.cultureSelector = A;
            return this
        }};
    r.prototype.init.prototype = r.prototype;
    r.cultures["default"] = {name: "en",englishName: "English",nativeName: "English",isRTL: false,language: "en",numberFormat: {pattern: ["-n"],decimals: 2,",": ",",".": ".",groupSizes: [3],"+": "+","-": "-","NaN": "NaN",negativeInfinity: "-Infinity",positiveInfinity: "Infinity",percent: {pattern: ["-n %", "n %"],decimals: 2,groupSizes: [3],",": ",",".": ".",symbol: "%"},currency: {pattern: ["($n)", "$n"],decimals: 2,groupSizes: [3],",": ",",".": ".",symbol: "$"}},calendars: {standard: {name: "Gregorian_USEnglish","/": "/",":": ":",firstDay: 0,days: {names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]},months: {names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]},AM: ["AM", "am", "AM"],PM: ["PM", "pm", "PM"],eras: [{name: "A.D.",start: null,offset: 0}],twoDigitYearMax: 2029,patterns: {d: "M/d/yyyy",D: "dddd, MMMM dd, yyyy",t: "h:mm tt",T: "h:mm:ss tt",f: "dddd, MMMM dd, yyyy h:mm tt",F: "dddd, MMMM dd, yyyy h:mm:ss tt",M: "MMMM dd",Y: "yyyy MMMM",S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"}}},messages: {}};
    r.cultures["default"].calendar = r.cultures["default"].calendars.standard;
    r.cultures.en = r.cultures["default"];
    r.cultureSelector = "en";
    w = /^0x[a-f0-9]+$/i;
    l = /^[+\-]?infinity$/i;
    x = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/;
    p = /^\s+|\s+$/g;
    v = function(D, C) {
        if (D.indexOf) {
            return D.indexOf(C)
        }
        for (var A = 0, B = D.length; A < B; A++) {
            if (D[A] === C) {
                return A
            }
        }
        return -1
    };
    u = function(B, A) {
        return B.substr(B.length - A.length) === A
    };
    t = function() {
        var K, C, A, B, H, I, F = arguments[0] || {}, E = 1, D = arguments.length, J = false;
        if (typeof F === "boolean") {
            J = F;
            F = arguments[1] || {};
            E = 2
        }
        if (typeof F !== "object" && !a(F)) {
            F = {}
        }
        for (; E < D; E++) {
            if ((K = arguments[E]) != null) {
                for (C in K) {
                    A = F[C];
                    B = K[C];
                    if (F === B) {
                        continue
                    }
                    if (J && B && (k(B) || (H = m(B)))) {
                        if (H) {
                            H = false;
                            I = A && m(A) ? A : []
                        } else {
                            I = A && k(A) ? A : {}
                        }
                        F[C] = t(J, I, B)
                    } else {
                        if (B !== g) {
                            F[C] = B
                        }
                    }
                }
            }
        }
        return F
    };
    m = Array.isArray || function(A) {
        return Object.prototype.toString.call(A) === "[object Array]"
    };
    a = function(A) {
        return Object.prototype.toString.call(A) === "[object Function]"
    };
    k = function(A) {
        return Object.prototype.toString.call(A) === "[object Object]"
    };
    y = function(B, A) {
        return B.indexOf(A) === 0
    };
    q = function(A) {
        return (A + "").replace(p, "")
    };
    c = function(A) {
        if (isNaN(A)) {
            return NaN
        }
        return Math[A < 0 ? "ceil" : "floor"](A)
    };
    n = function(D, B, C) {
        var A;
        for (A = D.length; A < B; A += 1) {
            D = (C ? ("0" + D) : (D + "0"))
        }
        return D
    };
    s = function(D, A) {
        var C = 0, F = false;
        for (var E = 0, B = D.length; E < B; E++) {
            var H = D.charAt(E);
            switch (H) {
                case "'":
                    if (F) {
                        A.push("'")
                    } else {
                        C++
                    }
                    F = false;
                    break;
                case "\\":
                    if (F) {
                        A.push("\\")
                    }
                    F = !F;
                    break;
                default:
                    A.push(H);
                    F = false;
                    break
            }
        }
        return C
    };
    z = function(E, D) {
        D = D || "F";
        var C, B = E.patterns, A = D.length;
        if (A === 1) {
            C = B[D];
            if (!C) {
                throw "Invalid date format string '" + D + "'."
            }
            D = C
        } else {
            if (A === 2 && D.charAt(0) === "%") {
                D = D.charAt(1)
            }
        }
        return D
    };
    o = function(V, Z, aa) {
        var N = aa.calendar, J = N.convert, ac;
        if (!Z || !Z.length || Z === "i") {
            if (aa && aa.name.length) {
                if (J) {
                    ac = o(V, N.patterns.F, aa)
                } else {
                    var K = new Date(V.getTime()), R = d(V, N.eras);
                    K.setFullYear(f(V, N, R));
                    ac = K.toLocaleString()
                }
            } else {
                ac = V.toString()
            }
            return ac
        }
        var W = N.eras, B = Z === "s";
        Z = z(N, Z);
        ac = [];
        var F, X = ["0", "00", "000"], L, M, A = /([^d]|^)(d|dd)([^d]|$)/g, ab = 0, S = h(), C;
        function I(ad, ag) {
            var af, ae = ad + "";
            if (ag > 1 && ae.length < ag) {
                af = (X[ag - 2] + ae);
                return af.substr(af.length - ag, ag)
            } else {
                af = ae
            }
            return af
        }
        function Y() {
            if (L || M) {
                return L
            }
            L = A.test(Z);
            M = true;
            return L
        }
        function D(ae, ad) {
            if (C) {
                return C[ad]
            }
            switch (ad) {
                case 0:
                    return ae.getFullYear();
                case 1:
                    return ae.getMonth();
                case 2:
                    return ae.getDate();
                default:
                    throw "Invalid part value " + ad
            }
        }
        if (!B && J) {
            C = J.fromGregorian(V)
        }
        for (; ; ) {
            var H = S.lastIndex, Q = S.exec(Z);
            var O = Z.slice(H, Q ? Q.index : Z.length);
            ab += s(O, ac);
            if (!Q) {
                break
            }
            if (ab % 2) {
                ac.push(Q[0]);
                continue
            }
            var T = Q[0], E = T.length;
            switch (T) {
                case "ddd":
                case "dddd":
                    var P = (E === 3) ? N.days.namesAbbr : N.days.names;
                    ac.push(P[V.getDay()]);
                    break;
                case "d":
                case "dd":
                    L = true;
                    ac.push(I(D(V, 2), E));
                    break;
                case "MMM":
                case "MMMM":
                    var U = D(V, 1);
                    ac.push((N.monthsGenitive && Y()) ? (N.monthsGenitive[E === 3 ? "namesAbbr" : "names"][U]) : (N.months[E === 3 ? "namesAbbr" : "names"][U]));
                    break;
                case "M":
                case "MM":
                    ac.push(I(D(V, 1) + 1, E));
                    break;
                case "y":
                case "yy":
                case "yyyy":
                    U = C ? C[0] : f(V, N, d(V, W), B);
                    if (E < 4) {
                        U = U % 100
                    }
                    ac.push(I(U, E));
                    break;
                case "h":
                case "hh":
                    F = V.getHours() % 12;
                    if (F === 0) {
                        F = 12
                    }
                    ac.push(I(F, E));
                    break;
                case "H":
                case "HH":
                    ac.push(I(V.getHours(), E));
                    break;
                case "m":
                case "mm":
                    ac.push(I(V.getMinutes(), E));
                    break;
                case "s":
                case "ss":
                    ac.push(I(V.getSeconds(), E));
                    break;
                case "t":
                case "tt":
                    U = V.getHours() < 12 ? (N.AM ? N.AM[0] : " ") : (N.PM ? N.PM[0] : " ");
                    ac.push(E === 1 ? U.charAt(0) : U);
                    break;
                case "f":
                case "ff":
                case "fff":
                    ac.push(I(V.getMilliseconds(), 3).substr(0, E));
                    break;
                case "z":
                case "zz":
                    F = V.getTimezoneOffset() / 60;
                    ac.push((F <= 0 ? "+" : "-") + I(Math.floor(Math.abs(F)), E));
                    break;
                case "zzz":
                    F = V.getTimezoneOffset() / 60;
                    ac.push((F <= 0 ? "+" : "-") + I(Math.floor(Math.abs(F)), 2) + ":" + I(Math.abs(V.getTimezoneOffset() % 60), 2));
                    break;
                case "g":
                case "gg":
                    if (N.eras) {
                        ac.push(N.eras[d(V, W)].name)
                    }
                    break;
                case "/":
                    ac.push(N["/"]);
                    break;
                default:
                    throw "Invalid date format pattern '" + T + "'."
            }
        }
        return ac.join("")
    };
    (function() {
        var A;
        A = function(I, J, Q) {
            var F = Q.groupSizes, B = F[0], C = 1, N = Math.pow(10, J), D = Math.round(I * N) / N;
            if (!isFinite(D)) {
                D = I
            }
            I = D;
            var H = I + "", P = "", M = H.split(/e/i), O = M.length > 1 ? parseInt(M[1], 10) : 0;
            H = M[0];
            M = H.split(".");
            H = M[0];
            P = M.length > 1 ? M[1] : "";
            var E;
            if (O > 0) {
                P = n(P, O, false);
                H += P.slice(0, O);
                P = P.substr(O)
            } else {
                if (O < 0) {
                    O = -O;
                    H = n(H, O + 1, true);
                    P = H.slice(-O, H.length) + P;
                    H = H.slice(0, -O)
                }
            }
            if (J > 0) {
                P = Q["."] + ((P.length > J) ? P.slice(0, J) : n(P, J))
            } else {
                P = ""
            }
            var L = H.length - 1, R = Q[","], K = "";
            while (L >= 0) {
                if (B === 0 || B > L) {
                    return H.slice(0, L + 1) + (K.length ? (R + K + P) : P)
                }
                K = H.slice(L - B + 1, L + 1) + (K.length ? (R + K) : "");
                L -= B;
                if (C < F.length) {
                    B = F[C];
                    C++
                }
            }
            return H.slice(0, L + 1) + R + K + P
        };
        i = function(N, M, F) {
            if (!isFinite(N)) {
                if (N === Infinity) {
                    return F.numberFormat.positiveInfinity
                }
                if (N === -Infinity) {
                    return F.numberFormat.negativeInfinity
                }
                return F.numberFormat.NaN
            }
            if (!M || M === "i") {
                return F.name.length ? N.toLocaleString() : N.toString()
            }
            M = M || "D";
            var D = F.numberFormat, E = Math.abs(N), H = -1, L;
            if (M.length > 1) {
                H = parseInt(M.slice(1), 10)
            }
            var K = M.charAt(0).toUpperCase(), O;
            switch (K) {
                case "D":
                    L = "n";
                    E = c(E);
                    if (H !== -1) {
                        E = n("" + E, H, true)
                    }
                    if (N < 0) {
                        E = "-" + E
                    }
                    break;
                case "N":
                    O = D;
                case "C":
                    O = O || D.currency;
                case "P":
                    O = O || D.percent;
                    L = N < 0 ? O.pattern[0] : (O.pattern[1] || "n");
                    if (H === -1) {
                        H = O.decimals
                    }
                    E = A(E * (K === "P" ? 100 : 1), H, O);
                    break;
                default:
                    throw "Bad number format specifier: " + K
            }
            var B = /n|\$|-|%/g, J = "";
            for (; ; ) {
                var I = B.lastIndex, C = B.exec(L);
                J += L.slice(I, C ? C.index : L.length);
                if (!C) {
                    break
                }
                switch (C[0]) {
                    case "n":
                        J += E;
                        break;
                    case "$":
                        J += D.currency.symbol;
                        break;
                    case "-":
                        if (/[1-9]/.test(E)) {
                            J += D["-"]
                        }
                        break;
                    case "%":
                        J += D.percent.symbol;
                        break
                }
            }
            return J
        }
    }());
    h = function() {
        return (/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g)
    };
    d = function(C, B) {
        if (!B) {
            return 0
        }
        var F, E = C.getTime();
        for (var D = 0, A = B.length; D < A; D++) {
            F = B[D].start;
            if (F === null || E >= F) {
                return D
            }
        }
        return 0
    };
    f = function(B, D, A, E) {
        var C = B.getFullYear();
        if (!E && D.eras) {
            C -= D.eras[A].offset
        }
        return C
    };
    (function() {
        var B, A, D, C, H, F, E;
        B = function(N, L) {
            if (L < 100) {
                var J = new Date(), I = d(J), M = f(J, N, I), K = N.twoDigitYearMax;
                K = typeof K === "string" ? new Date().getFullYear() % 100 + parseInt(K, 10) : K;
                L += M - (M % 100);
                if (L > K) {
                    L -= 100
                }
            }
            return L
        };
        A = function(M, L, J) {
            var I, N = M.days, K = M._upperDays;
            if (!K) {
                M._upperDays = K = [E(N.names), E(N.namesAbbr), E(N.namesShort)]
            }
            L = F(L);
            if (J) {
                I = v(K[1], L);
                if (I === -1) {
                    I = v(K[2], L)
                }
            } else {
                I = v(K[0], L)
            }
            return I
        };
        D = function(P, O, K) {
            var I = P.months, J = P.monthsGenitive || P.months, M = P._upperMonths, N = P._upperMonthsGen;
            if (!M) {
                P._upperMonths = M = [E(I.names), E(I.namesAbbr)];
                P._upperMonthsGen = N = [E(J.names), E(J.namesAbbr)]
            }
            O = F(O);
            var L = v(K ? M[1] : M[0], O);
            if (L < 0) {
                L = v(K ? N[1] : N[0], O)
            }
            return L
        };
        C = function(I, T) {
            var V = I._parseRegExp;
            if (!V) {
                I._parseRegExp = V = {}
            } else {
                var M = V[T];
                if (M) {
                    return M
                }
            }
            var S = z(I, T).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), Q = ["^"], J = [], P = 0, L = 0, Y = h(), N;
            while ((N = Y.exec(S)) !== null) {
                var X = S.slice(P, N.index);
                P = Y.lastIndex;
                L += s(X, Q);
                if (L % 2) {
                    Q.push(N[0]);
                    continue
                }
                var K = N[0], O = K.length, U;
                switch (K) {
                    case "dddd":
                    case "ddd":
                    case "MMMM":
                    case "MMM":
                    case "gg":
                    case "g":
                        U = "(\\D+)";
                        break;
                    case "tt":
                    case "t":
                        U = "(\\D*)";
                        break;
                    case "yyyy":
                    case "fff":
                    case "ff":
                    case "f":
                        U = "(\\d{" + O + "})";
                        break;
                    case "dd":
                    case "d":
                    case "MM":
                    case "M":
                    case "yy":
                    case "y":
                    case "HH":
                    case "H":
                    case "hh":
                    case "h":
                    case "mm":
                    case "m":
                    case "ss":
                    case "s":
                        U = "(\\d\\d?)";
                        break;
                    case "zzz":
                        U = "([+-]?\\d\\d?:\\d{2})";
                        break;
                    case "zz":
                    case "z":
                        U = "([+-]?\\d\\d?)";
                        break;
                    case "/":
                        U = "(\\/)";
                        break;
                    default:
                        throw "Invalid date format pattern '" + K + "'."
                }
                if (U) {
                    Q.push(U)
                }
                J.push(N[0])
            }
            s(S.slice(P), Q);
            Q.push("$");
            var W = Q.join("").replace(/\s+/g, "\\s+"), R = {regExp: W,groups: J};
            return V[T] = R
        };
        H = function(K, I, J) {
            return K < I || K > J
        };
        F = function(I) {
            return I.split("\u00A0").join(" ").toUpperCase()
        };
        E = function(I) {
            var L = [];
            for (var K = 0, J = I.length; K < J; K++) {
                L[K] = F(I[K])
            }
            return L
        };
        e = function(ac, aj, ak) {
            ac = q(ac);
            var V = ak.calendar, ap = C(V, aj), P = new RegExp(ap.regExp).exec(ac);
            if (P === null) {
                return null
            }
            var al = ap.groups, aa = null, T = null, ao = null, an = null, U = null, N = 0, af, ae = 0, am = 0, I = 0, K = null, W = false;
            for (var ag = 0, ai = al.length; ag < ai; ag++) {
                var J = P[ag + 1];
                if (J) {
                    var ab = al[ag], M = ab.length, O = parseInt(J, 10);
                    switch (ab) {
                        case "dd":
                        case "d":
                            an = O;
                            if (H(an, 1, 31)) {
                                return null
                            }
                            break;
                        case "MMM":
                        case "MMMM":
                            ao = D(V, J, M === 3);
                            if (H(ao, 0, 11)) {
                                return null
                            }
                            break;
                        case "M":
                        case "MM":
                            ao = O - 1;
                            if (H(ao, 0, 11)) {
                                return null
                            }
                            break;
                        case "y":
                        case "yy":
                        case "yyyy":
                            T = M < 4 ? B(V, O) : O;
                            if (H(T, 0, 9999)) {
                                return null
                            }
                            break;
                        case "h":
                        case "hh":
                            N = O;
                            if (N === 12) {
                                N = 0
                            }
                            if (H(N, 0, 11)) {
                                return null
                            }
                            break;
                        case "H":
                        case "HH":
                            N = O;
                            if (H(N, 0, 23)) {
                                return null
                            }
                            break;
                        case "m":
                        case "mm":
                            ae = O;
                            if (H(ae, 0, 59)) {
                                return null
                            }
                            break;
                        case "s":
                        case "ss":
                            am = O;
                            if (H(am, 0, 59)) {
                                return null
                            }
                            break;
                        case "tt":
                        case "t":
                            W = V.PM && (J === V.PM[0] || J === V.PM[1] || J === V.PM[2]);
                            if (!W && (!V.AM || (J !== V.AM[0] && J !== V.AM[1] && J !== V.AM[2]))) {
                                return null
                            }
                            break;
                        case "f":
                        case "ff":
                        case "fff":
                            I = O * Math.pow(10, 3 - M);
                            if (H(I, 0, 999)) {
                                return null
                            }
                            break;
                        case "ddd":
                        case "dddd":
                            U = A(V, J, M === 3);
                            if (H(U, 0, 6)) {
                                return null
                            }
                            break;
                        case "zzz":
                            var L = J.split(/:/);
                            if (L.length !== 2) {
                                return null
                            }
                            af = parseInt(L[0], 10);
                            if (H(af, -12, 13)) {
                                return null
                            }
                            var R = parseInt(L[1], 10);
                            if (H(R, 0, 59)) {
                                return null
                            }
                            K = (af * 60) + (y(J, "-") ? -R : R);
                            break;
                        case "z":
                        case "zz":
                            af = O;
                            if (H(af, -12, 13)) {
                                return null
                            }
                            K = af * 60;
                            break;
                        case "g":
                        case "gg":
                            var X = J;
                            if (!X || !V.eras) {
                                return null
                            }
                            X = q(X.toLowerCase());
                            for (var ah = 0, ad = V.eras.length; ah < ad; ah++) {
                                if (X === V.eras[ah].name.toLowerCase()) {
                                    aa = ah;
                                    break
                                }
                            }
                            if (aa === null) {
                                return null
                            }
                            break
                    }
                }
            }
            var S = new Date(), Z, Q = V.convert;
            Z = Q ? Q.fromGregorian(S)[0] : S.getFullYear();
            if (T === null) {
                T = Z
            } else {
                if (V.eras) {
                    T += V.eras[(aa || 0)].offset
                }
            }
            if (ao === null) {
                ao = 0
            }
            if (an === null) {
                an = 1
            }
            if (Q) {
                S = Q.toGregorian(T, ao, an);
                if (S === null) {
                    return null
                }
            } else {
                S.setFullYear(T, ao, an);
                if (S.getDate() !== an) {
                    return null
                }
                if (U !== null && S.getDay() !== U) {
                    return null
                }
            }
            if (W && N < 12) {
                N += 12
            }
            S.setHours(N, ae, am, I);
            if (K !== null) {
                var Y = S.getMinutes() - (K + S.getTimezoneOffset());
                S.setHours(S.getHours() + parseInt(Y / 60, 10), Y % 60)
            }
            return S
        }
    }());
    b = function(D, C, B) {
        var F = C["-"], E = C["+"], A;
        switch (B) {
            case "n -":
                F = " " + F;
                E = " " + E;
            case "n-":
                if (u(D, F)) {
                    A = ["-", D.substr(0, D.length - F.length)]
                } else {
                    if (u(D, E)) {
                        A = ["+", D.substr(0, D.length - E.length)]
                    }
                }
                break;
            case "- n":
                F += " ";
                E += " ";
            case "-n":
                if (y(D, F)) {
                    A = ["-", D.substr(F.length)]
                } else {
                    if (y(D, E)) {
                        A = ["+", D.substr(E.length)]
                    }
                }
                break;
            case "(n)":
                if (y(D, "(") && u(D, ")")) {
                    A = ["-", D.substr(1, D.length - 2)]
                }
                break
        }
        return A || ["", D]
    };
    r.prototype.findClosestCulture = function(A) {
        return r.findClosestCulture.call(this, A)
    };
    r.prototype.format = function(A, B, C) {
        return r.format.call(this, A, B, C)
    };
    r.prototype.localize = function(A, B) {
        return r.localize.call(this, A, B)
    };
    r.prototype.parseInt = function(B, A, C) {
        return r.parseInt.call(this, B, A, C)
    };
    r.prototype.parseFloat = function(B, A, C) {
        return r.parseFloat.call(this, B, A, C)
    };
    r.prototype.culture = function(A) {
        return r.culture.call(this, A)
    };
    r.addCultureInfo = function(E, B, D) {
        var C = {}, A = false;
        if (typeof E !== "string") {
            D = E;
            E = this.culture().name;
            C = this.cultures[E]
        } else {
            if (typeof B !== "string") {
                D = B;
                A = (this.cultures[E] == null);
                C = this.cultures[E] || this.cultures["default"]
            } else {
                A = true;
                C = this.cultures[B]
            }
        }
        this.cultures[E] = t(true, {}, C, D);
        if (A) {
            this.cultures[E].calendar = this.cultures[E].calendars.standard
        }
    };
    r.findClosestCulture = function(A) {
        var J;
        if (!A) {
            return this.findClosestCulture(this.cultureSelector) || this.cultures["default"]
        }
        if (typeof A === "string") {
            A = A.split(",")
        }
        if (m(A)) {
            var C, N = this.cultures, L = A, I, D = L.length, M = [];
            for (I = 0; I < D; I++) {
                A = q(L[I]);
                var B, H = A.split(";");
                C = q(H[0]);
                if (H.length === 1) {
                    B = 1
                } else {
                    A = q(H[1]);
                    if (A.indexOf("q=") === 0) {
                        A = A.substr(2);
                        B = parseFloat(A);
                        B = isNaN(B) ? 0 : B
                    } else {
                        B = 1
                    }
                }
                M.push({lang: C,pri: B})
            }
            M.sort(function(P, O) {
                if (P.pri < O.pri) {
                    return 1
                } else {
                    if (P.pri > O.pri) {
                        return -1
                    }
                }
                return 0
            });
            for (I = 0; I < D; I++) {
                C = M[I].lang;
                J = N[C];
                if (J) {
                    return J
                }
            }
            for (I = 0; I < D; I++) {
                C = M[I].lang;
                do {
                    var K = C.lastIndexOf("-");
                    if (K === -1) {
                        break
                    }
                    C = C.substr(0, K);
                    J = N[C];
                    if (J) {
                        return J
                    }
                } while (1)
            }
            for (I = 0; I < D; I++) {
                C = M[I].lang;
                for (var F in N) {
                    var E = N[F];
                    if (E.language == C) {
                        return E
                    }
                }
            }
        } else {
            if (typeof A === "object") {
                return A
            }
        }
        return J || null
    };
    r.format = function(B, C, D) {
        var A = this.findClosestCulture(D);
        if (B instanceof Date) {
            B = o(B, C, A)
        } else {
            if (typeof B === "number") {
                B = i(B, C, A)
            }
        }
        return B
    };
    r.localize = function(A, B) {
        return this.findClosestCulture(B).messages[A] || this.cultures["default"].messages[A]
    };
    r.parseDate = function(J, H, E) {
        E = this.findClosestCulture(E);
        var C, A, B;
        if (H) {
            if (typeof H === "string") {
                H = [H]
            }
            if (H.length) {
                for (var F = 0, D = H.length; F < D; F++) {
                    var I = H[F];
                    if (I) {
                        C = e(J, I, E);
                        if (C) {
                            break
                        }
                    }
                }
            }
        } else {
            B = E.calendar.patterns;
            for (A in B) {
                C = e(J, B[A], E);
                if (C) {
                    break
                }
            }
        }
        return C || null
    };
    r.parseInt = function(B, A, C) {
        return c(r.parseFloat(B, A, C))
    };
    r.parseFloat = function(P, I, K) {
        if (typeof I !== "number") {
            K = I;
            I = 10
        }
        var R = this.findClosestCulture(K);
        var U = NaN, F = R.numberFormat;
        if (P.indexOf(R.numberFormat.currency.symbol) > -1) {
            P = P.replace(R.numberFormat.currency.symbol, "");
            P = P.replace(R.numberFormat.currency["."], R.numberFormat["."])
        }
        if (P.indexOf(R.numberFormat.percent.symbol) > -1) {
            P = P.replace(R.numberFormat.percent.symbol, "")
        }
        P = P.replace(/ /g, "");
        if (l.test(P)) {
            U = parseFloat(P)
        } else {
            if (!I && w.test(P)) {
                U = parseInt(P, 16)
            } else {
                var C = b(P, F, F.pattern[0]), T = C[0], J = C[1];
                if (T === "" && F.pattern[0] !== "(n)") {
                    C = b(P, F, "(n)");
                    T = C[0];
                    J = C[1]
                }
                if (T === "" && F.pattern[0] !== "-n") {
                    C = b(P, F, "-n");
                    T = C[0];
                    J = C[1]
                }
                T = T || "+";
                var O, L, S = J.indexOf("e");
                if (S < 0) {
                    S = J.indexOf("E")
                }
                if (S < 0) {
                    L = J;
                    O = null
                } else {
                    L = J.substr(0, S);
                    O = J.substr(S + 1)
                }
                var Q, H, D = F["."], A = L.indexOf(D);
                if (A < 0) {
                    Q = L;
                    H = null
                } else {
                    Q = L.substr(0, A);
                    H = L.substr(A + D.length)
                }
                var M = F[","];
                Q = Q.split(M).join("");
                var E = M.replace(/\u00A0/g, " ");
                if (M !== E) {
                    Q = Q.split(E).join("")
                }
                var N = T + Q;
                if (H !== null) {
                    N += "." + H
                }
                if (O !== null) {
                    var B = b(O, F, "-n");
                    N += "e" + (B[0] || "+") + B[1]
                }
                if (x.test(N)) {
                    U = parseFloat(N)
                }
            }
        }
        return U
    };
    r.culture = function(A) {
        if (typeof A !== "undefined") {
            this.cultureSelector = A
        }
        return this.findClosestCulture(A) || this.cultures["default"]
    }
}(this));
define("libs/globalize/globalize", function() {
});
define("localize/localizeSpec", [], function() {
    var a = {languageLocale: "en",countryCode: "KR",login: {useNaver: false,useFaceBook: true,usePhoneNumber: true,useLine: true},ttsLanguageLocale: "en-us",noticeType: "ko-KR",helpType: "ko-KR",agreementType: "ko-KR",useNaverMap: false,useLunar: false,isShowBirthAndPhone: true,isShowCustomerInquiry: true};
    window.LocalizeSpec = window.LocalizeSpec || a;
    return window.LocalizeSpec
});
(function() {
    var w = this;
    var k = w._;
    var D = {};
    var C = Array.prototype, f = Object.prototype, r = Function.prototype;
    var H = C.push, o = C.slice, y = C.concat, d = f.toString, j = f.hasOwnProperty;
    var L = C.forEach, q = C.map, E = C.reduce, c = C.reduceRight, b = C.filter, B = C.every, p = C.some, n = C.indexOf, l = C.lastIndexOf, u = Array.isArray, e = Object.keys, F = r.bind;
    var M = function(N) {
        if (N instanceof M) {
            return N
        }
        if (!(this instanceof M)) {
            return new M(N)
        }
        this._wrapped = N
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = M
        }
        exports._ = M
    } else {
        w._ = M
    }
    M.VERSION = "1.4.4";
    var I = M.each = M.forEach = function(S, R, Q) {
        if (S == null) {
            return
        }
        if (L && S.forEach === L) {
            S.forEach(R, Q)
        } else {
            if (S.length === +S.length) {
                for (var P = 0, N = S.length; P < N; P++) {
                    if (R.call(Q, S[P], P, S) === D) {
                        return
                    }
                }
            } else {
                for (var O in S) {
                    if (M.has(S, O)) {
                        if (R.call(Q, S[O], O, S) === D) {
                            return
                        }
                    }
                }
            }
        }
    };
    M.map = M.collect = function(Q, P, O) {
        var N = [];
        if (Q == null) {
            return N
        }
        if (q && Q.map === q) {
            return Q.map(P, O)
        }
        I(Q, function(T, R, S) {
            N[N.length] = P.call(O, T, R, S)
        });
        return N
    };
    var g = "Reduce of empty array with no initial value";
    M.reduce = M.foldl = M.inject = function(R, Q, N, P) {
        var O = arguments.length > 2;
        if (R == null) {
            R = []
        }
        if (E && R.reduce === E) {
            if (P) {
                Q = M.bind(Q, P)
            }
            return O ? R.reduce(Q, N) : R.reduce(Q)
        }
        I(R, function(U, S, T) {
            if (!O) {
                N = U;
                O = true
            } else {
                N = Q.call(P, N, U, S, T)
            }
        });
        if (!O) {
            throw new TypeError(g)
        }
        return N
    };
    M.reduceRight = M.foldr = function(T, Q, N, P) {
        var O = arguments.length > 2;
        if (T == null) {
            T = []
        }
        if (c && T.reduceRight === c) {
            if (P) {
                Q = M.bind(Q, P)
            }
            return O ? T.reduceRight(Q, N) : T.reduceRight(Q)
        }
        var S = T.length;
        if (S !== +S) {
            var R = M.keys(T);
            S = R.length
        }
        I(T, function(W, U, V) {
            U = R ? R[--S] : --S;
            if (!O) {
                N = T[U];
                O = true
            } else {
                N = Q.call(P, N, T[U], U, V)
            }
        });
        if (!O) {
            throw new TypeError(g)
        }
        return N
    };
    M.find = M.detect = function(Q, P, O) {
        var N;
        A(Q, function(T, R, S) {
            if (P.call(O, T, R, S)) {
                N = T;
                return true
            }
        });
        return N
    };
    M.filter = M.select = function(Q, P, O) {
        var N = [];
        if (Q == null) {
            return N
        }
        if (b && Q.filter === b) {
            return Q.filter(P, O)
        }
        I(Q, function(T, R, S) {
            if (P.call(O, T, R, S)) {
                N[N.length] = T
            }
        });
        return N
    };
    M.reject = function(P, O, N) {
        return M.filter(P, function(S, Q, R) {
            return !O.call(N, S, Q, R)
        }, N)
    };
    M.every = M.all = function(Q, P, O) {
        P || (P = M.identity);
        var N = true;
        if (Q == null) {
            return N
        }
        if (B && Q.every === B) {
            return Q.every(P, O)
        }
        I(Q, function(T, R, S) {
            if (!(N = N && P.call(O, T, R, S))) {
                return D
            }
        });
        return !!N
    };
    var A = M.some = M.any = function(Q, P, O) {
        P || (P = M.identity);
        var N = false;
        if (Q == null) {
            return N
        }
        if (p && Q.some === p) {
            return Q.some(P, O)
        }
        I(Q, function(T, R, S) {
            if (N || (N = P.call(O, T, R, S))) {
                return D
            }
        });
        return !!N
    };
    M.contains = M.include = function(O, N) {
        if (O == null) {
            return false
        }
        if (n && O.indexOf === n) {
            return O.indexOf(N) != -1
        }
        return A(O, function(P) {
            return P === N
        })
    };
    M.invoke = function(P, Q) {
        var N = o.call(arguments, 2);
        var O = M.isFunction(Q);
        return M.map(P, function(R) {
            return (O ? Q : R[Q]).apply(R, N)
        })
    };
    M.pluck = function(O, N) {
        return M.map(O, function(P) {
            return P[N]
        })
    };
    M.where = function(O, N, P) {
        if (M.isEmpty(N)) {
            return P ? null : []
        }
        return M[P ? "find" : "filter"](O, function(R) {
            for (var Q in N) {
                if (N[Q] !== R[Q]) {
                    return false
                }
            }
            return true
        })
    };
    M.findWhere = function(O, N) {
        return M.where(O, N, true)
    };
    M.max = function(Q, P, O) {
        if (!P && M.isArray(Q) && Q[0] === +Q[0] && Q.length < 65535) {
            return Math.max.apply(Math, Q)
        }
        if (!P && M.isEmpty(Q)) {
            return -Infinity
        }
        var N = {computed: -Infinity,value: -Infinity};
        I(Q, function(U, R, T) {
            var S = P ? P.call(O, U, R, T) : U;
            S >= N.computed && (N = {value: U,computed: S})
        });
        return N.value
    };
    M.min = function(Q, P, O) {
        if (!P && M.isArray(Q) && Q[0] === +Q[0] && Q.length < 65535) {
            return Math.min.apply(Math, Q)
        }
        if (!P && M.isEmpty(Q)) {
            return Infinity
        }
        var N = {computed: Infinity,value: Infinity};
        I(Q, function(U, R, T) {
            var S = P ? P.call(O, U, R, T) : U;
            S < N.computed && (N = {value: U,computed: S})
        });
        return N.value
    };
    M.shuffle = function(Q) {
        var P;
        var O = 0;
        var N = [];
        I(Q, function(R) {
            P = M.random(O++);
            N[O - 1] = N[P];
            N[P] = R
        });
        return N
    };
    var a = function(N) {
        return M.isFunction(N) ? N : function(O) {
            return O[N]
        }
    };
    M.sortBy = function(Q, P, N) {
        var O = a(P);
        return M.pluck(M.map(Q, function(T, R, S) {
            return {value: T,index: R,criteria: O.call(N, T, R, S)}
        }).sort(function(U, T) {
            var S = U.criteria;
            var R = T.criteria;
            if (S !== R) {
                if (S > R || S === void 0) {
                    return 1
                }
                if (S < R || R === void 0) {
                    return -1
                }
            }
            return U.index < T.index ? -1 : 1
        }), "value")
    };
    var t = function(S, R, O, Q) {
        var N = {};
        var P = a(R || M.identity);
        I(S, function(V, T) {
            var U = P.call(O, V, T, S);
            Q(N, U, V)
        });
        return N
    };
    M.groupBy = function(P, O, N) {
        return t(P, O, N, function(Q, R, S) {
            (M.has(Q, R) ? Q[R] : (Q[R] = [])).push(S)
        })
    };
    M.countBy = function(P, O, N) {
        return t(P, O, N, function(Q, R) {
            if (!M.has(Q, R)) {
                Q[R] = 0
            }
            Q[R]++
        })
    };
    M.sortedIndex = function(U, T, Q, P) {
        Q = Q == null ? M.identity : a(Q);
        var S = Q.call(P, T);
        var N = 0, R = U.length;
        while (N < R) {
            var O = (N + R) >>> 1;
            Q.call(P, U[O]) < S ? N = O + 1 : R = O
        }
        return N
    };
    M.toArray = function(N) {
        if (!N) {
            return []
        }
        if (M.isArray(N)) {
            return o.call(N)
        }
        if (N.length === +N.length) {
            return M.map(N, M.identity)
        }
        return M.values(N)
    };
    M.size = function(N) {
        if (N == null) {
            return 0
        }
        return (N.length === +N.length) ? N.length : M.keys(N).length
    };
    M.first = M.head = M.take = function(P, O, N) {
        if (P == null) {
            return void 0
        }
        return (O != null) && !N ? o.call(P, 0, O) : P[0]
    };
    M.initial = function(P, O, N) {
        return o.call(P, 0, P.length - ((O == null) || N ? 1 : O))
    };
    M.last = function(P, O, N) {
        if (P == null) {
            return void 0
        }
        if ((O != null) && !N) {
            return o.call(P, Math.max(P.length - O, 0))
        } else {
            return P[P.length - 1]
        }
    };
    M.rest = M.tail = M.drop = function(P, O, N) {
        return o.call(P, (O == null) || N ? 1 : O)
    };
    M.compact = function(N) {
        return M.filter(N, M.identity)
    };
    var x = function(O, P, N) {
        I(O, function(Q) {
            if (M.isArray(Q)) {
                P ? H.apply(N, Q) : x(Q, P, N)
            } else {
                N.push(Q)
            }
        });
        return N
    };
    M.flatten = function(O, N) {
        return x(O, N, [])
    };
    M.without = function(N) {
        return M.difference(N, o.call(arguments, 1))
    };
    M.uniq = M.unique = function(T, S, R, Q) {
        if (M.isFunction(S)) {
            Q = R;
            R = S;
            S = false
        }
        var O = R ? M.map(T, R, Q) : T;
        var P = [];
        var N = [];
        I(O, function(V, U) {
            if (S ? (!U || N[N.length - 1] !== V) : !M.contains(N, V)) {
                N.push(V);
                P.push(T[U])
            }
        });
        return P
    };
    M.union = function() {
        return M.uniq(y.apply(C, arguments))
    };
    M.intersection = function(O) {
        var N = o.call(arguments, 1);
        return M.filter(M.uniq(O), function(P) {
            return M.every(N, function(Q) {
                return M.indexOf(Q, P) >= 0
            })
        })
    };
    M.difference = function(O) {
        var N = y.apply(C, o.call(arguments, 1));
        return M.filter(O, function(P) {
            return !M.contains(N, P)
        })
    };
    M.zip = function() {
        var N = o.call(arguments);
        var Q = M.max(M.pluck(N, "length"));
        var P = new Array(Q);
        for (var O = 0; O < Q; O++) {
            P[O] = M.pluck(N, "" + O)
        }
        return P
    };
    M.object = function(R, P) {
        if (R == null) {
            return {}
        }
        var N = {};
        for (var Q = 0, O = R.length; Q < O; Q++) {
            if (P) {
                N[R[Q]] = P[Q]
            } else {
                N[R[Q][0]] = R[Q][1]
            }
        }
        return N
    };
    M.indexOf = function(R, P, Q) {
        if (R == null) {
            return -1
        }
        var O = 0, N = R.length;
        if (Q) {
            if (typeof Q == "number") {
                O = (Q < 0 ? Math.max(0, N + Q) : Q)
            } else {
                O = M.sortedIndex(R, P);
                return R[O] === P ? O : -1
            }
        }
        if (n && R.indexOf === n) {
            return R.indexOf(P, Q)
        }
        for (; O < N; O++) {
            if (R[O] === P) {
                return O
            }
        }
        return -1
    };
    M.lastIndexOf = function(R, P, Q) {
        if (R == null) {
            return -1
        }
        var N = Q != null;
        if (l && R.lastIndexOf === l) {
            return N ? R.lastIndexOf(P, Q) : R.lastIndexOf(P)
        }
        var O = (N ? Q : R.length);
        while (O--) {
            if (R[O] === P) {
                return O
            }
        }
        return -1
    };
    M.range = function(S, Q, R) {
        if (arguments.length <= 1) {
            Q = S || 0;
            S = 0
        }
        R = arguments[2] || 1;
        var O = Math.max(Math.ceil((Q - S) / R), 0);
        var N = 0;
        var P = new Array(O);
        while (N < O) {
            P[N++] = S;
            S += R
        }
        return P
    };
    M.bind = function(P, O) {
        if (P.bind === F && F) {
            return F.apply(P, o.call(arguments, 1))
        }
        var N = o.call(arguments, 2);
        return function() {
            return P.apply(O, N.concat(o.call(arguments)))
        }
    };
    M.partial = function(O) {
        var N = o.call(arguments, 1);
        return function() {
            return O.apply(this, N.concat(o.call(arguments)))
        }
    };
    M.bindAll = function(O) {
        var N = o.call(arguments, 1);
        if (N.length === 0) {
            N = M.functions(O)
        }
        I(N, function(P) {
            O[P] = M.bind(O[P], O)
        });
        return O
    };
    M.memoize = function(P, O) {
        var N = {};
        O || (O = M.identity);
        return function() {
            var Q = O.apply(this, arguments);
            return M.has(N, Q) ? N[Q] : (N[Q] = P.apply(this, arguments))
        }
    };
    M.delay = function(O, P) {
        var N = o.call(arguments, 2);
        return setTimeout(function() {
            return O.apply(null, N)
        }, P)
    };
    M.defer = function(N) {
        return M.delay.apply(M, [N, 1].concat(o.call(arguments, 1)))
    };
    M.throttle = function(S, U) {
        var Q, P, T, N;
        var R = 0;
        var O = function() {
            R = new Date;
            T = null;
            N = S.apply(Q, P)
        };
        return function() {
            var V = new Date;
            var W = U - (V - R);
            Q = this;
            P = arguments;
            if (W <= 0) {
                clearTimeout(T);
                T = null;
                R = V;
                N = S.apply(Q, P)
            } else {
                if (!T) {
                    T = setTimeout(O, W)
                }
            }
            return N
        }
    };
    M.debounce = function(P, R, O) {
        var Q, N;
        return function() {
            var V = this, U = arguments;
            var T = function() {
                Q = null;
                if (!O) {
                    N = P.apply(V, U)
                }
            };
            var S = O && !Q;
            clearTimeout(Q);
            Q = setTimeout(T, R);
            if (S) {
                N = P.apply(V, U)
            }
            return N
        }
    };
    M.once = function(P) {
        var N = false, O;
        return function() {
            if (N) {
                return O
            }
            N = true;
            O = P.apply(this, arguments);
            P = null;
            return O
        }
    };
    M.wrap = function(N, O) {
        return function() {
            var P = [N];
            H.apply(P, arguments);
            return O.apply(this, P)
        }
    };
    M.compose = function() {
        var N = arguments;
        return function() {
            var O = arguments;
            for (var P = N.length - 1; P >= 0; P--) {
                O = [N[P].apply(this, O)]
            }
            return O[0]
        }
    };
    M.after = function(O, N) {
        if (O <= 0) {
            return N()
        }
        return function() {
            if (--O < 1) {
                return N.apply(this, arguments)
            }
        }
    };
    M.keys = e || function(P) {
        if (P !== Object(P)) {
            throw new TypeError("Invalid object")
        }
        var O = [];
        for (var N in P) {
            if (M.has(P, N)) {
                O[O.length] = N
            }
        }
        return O
    };
    M.values = function(P) {
        var N = [];
        for (var O in P) {
            if (M.has(P, O)) {
                N.push(P[O])
            }
        }
        return N
    };
    M.pairs = function(P) {
        var O = [];
        for (var N in P) {
            if (M.has(P, N)) {
                O.push([N, P[N]])
            }
        }
        return O
    };
    M.invert = function(P) {
        var N = {};
        for (var O in P) {
            if (M.has(P, O)) {
                N[P[O]] = O
            }
        }
        return N
    };
    M.functions = M.methods = function(P) {
        var O = [];
        for (var N in P) {
            if (M.isFunction(P[N])) {
                O.push(N)
            }
        }
        return O.sort()
    };
    M.extend = function(N) {
        I(o.call(arguments, 1), function(O) {
            if (O) {
                for (var P in O) {
                    N[P] = O[P]
                }
            }
        });
        return N
    };
    M.pick = function(O) {
        var P = {};
        var N = y.apply(C, o.call(arguments, 1));
        I(N, function(Q) {
            if (Q in O) {
                P[Q] = O[Q]
            }
        });
        return P
    };
    M.omit = function(P) {
        var Q = {};
        var O = y.apply(C, o.call(arguments, 1));
        for (var N in P) {
            if (!M.contains(O, N)) {
                Q[N] = P[N]
            }
        }
        return Q
    };
    M.defaults = function(N) {
        I(o.call(arguments, 1), function(O) {
            if (O) {
                for (var P in O) {
                    if (N[P] == null) {
                        N[P] = O[P]
                    }
                }
            }
        });
        return N
    };
    M.clone = function(N) {
        if (!M.isObject(N)) {
            return N
        }
        return M.isArray(N) ? N.slice() : M.extend({}, N)
    };
    M.tap = function(O, N) {
        N(O);
        return O
    };
    var J = function(U, T, O, P) {
        if (U === T) {
            return U !== 0 || 1 / U == 1 / T
        }
        if (U == null || T == null) {
            return U === T
        }
        if (U instanceof M) {
            U = U._wrapped
        }
        if (T instanceof M) {
            T = T._wrapped
        }
        var R = d.call(U);
        if (R != d.call(T)) {
            return false
        }
        switch (R) {
            case "[object String]":
                return U == String(T);
            case "[object Number]":
                return U != +U ? T != +T : (U == 0 ? 1 / U == 1 / T : U == +T);
            case "[object Date]":
            case "[object Boolean]":
                return +U == +T;
            case "[object RegExp]":
                return U.source == T.source && U.global == T.global && U.multiline == T.multiline && U.ignoreCase == T.ignoreCase
        }
        if (typeof U != "object" || typeof T != "object") {
            return false
        }
        var N = O.length;
        while (N--) {
            if (O[N] == U) {
                return P[N] == T
            }
        }
        O.push(U);
        P.push(T);
        var W = 0, X = true;
        if (R == "[object Array]") {
            W = U.length;
            X = W == T.length;
            if (X) {
                while (W--) {
                    if (!(X = J(U[W], T[W], O, P))) {
                        break
                    }
                }
            }
        } else {
            var S = U.constructor, Q = T.constructor;
            if (S !== Q && !(M.isFunction(S) && (S instanceof S) && M.isFunction(Q) && (Q instanceof Q))) {
                return false
            }
            for (var V in U) {
                if (M.has(U, V)) {
                    W++;
                    if (!(X = M.has(T, V) && J(U[V], T[V], O, P))) {
                        break
                    }
                }
            }
            if (X) {
                for (V in T) {
                    if (M.has(T, V) && !(W--)) {
                        break
                    }
                }
                X = !W
            }
        }
        O.pop();
        P.pop();
        return X
    };
    M.isEqual = function(O, N) {
        return J(O, N, [], [])
    };
    M.isEmpty = function(O) {
        if (O == null) {
            return true
        }
        if (M.isArray(O) || M.isString(O)) {
            return O.length === 0
        }
        for (var N in O) {
            if (M.has(O, N)) {
                return false
            }
        }
        return true
    };
    M.isElement = function(N) {
        return !!(N && N.nodeType === 1)
    };
    M.isArray = u || function(N) {
        return d.call(N) == "[object Array]"
    };
    M.isObject = function(N) {
        return N === Object(N)
    };
    I(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(N) {
        M["is" + N] = function(O) {
            return d.call(O) == "[object " + N + "]"
        }
    });
    if (!M.isArguments(arguments)) {
        M.isArguments = function(N) {
            return !!(N && M.has(N, "callee"))
        }
    }
    if (typeof (/./) !== "function") {
        M.isFunction = function(N) {
            return typeof N === "function"
        }
    }
    M.isFinite = function(N) {
        return isFinite(N) && !isNaN(parseFloat(N))
    };
    M.isNaN = function(N) {
        return M.isNumber(N) && N != +N
    };
    M.isBoolean = function(N) {
        return N === true || N === false || d.call(N) == "[object Boolean]"
    };
    M.isNull = function(N) {
        return N === null
    };
    M.isUndefined = function(N) {
        return N === void 0
    };
    M.has = function(O, N) {
        return j.call(O, N)
    };
    M.noConflict = function() {
        w._ = k;
        return this
    };
    M.identity = function(N) {
        return N
    };
    M.times = function(R, Q, P) {
        var N = Array(R);
        for (var O = 0; O < R; O++) {
            N[O] = Q.call(P, O)
        }
        return N
    };
    M.random = function(O, N) {
        if (N == null) {
            N = O;
            O = 0
        }
        return O + Math.floor(Math.random() * (N - O + 1))
    };
    var m = {escape: {"&": "&amp;","<": "&lt;",">": "&gt;",'"': "&quot;","'": "&#x27;","/": "&#x2F;"}};
    m.unescape = M.invert(m.escape);
    var K = {escape: new RegExp("[" + M.keys(m.escape).join("") + "]", "g"),unescape: new RegExp("(" + M.keys(m.unescape).join("|") + ")", "g")};
    M.each(["escape", "unescape"], function(N) {
        M[N] = function(O) {
            if (O == null) {
                return ""
            }
            return ("" + O).replace(K[N], function(P) {
                return m[N][P]
            })
        }
    });
    M.result = function(N, P) {
        if (N == null) {
            return null
        }
        var O = N[P];
        return M.isFunction(O) ? O.call(N) : O
    };
    M.mixin = function(N) {
        I(M.functions(N), function(O) {
            var P = M[O] = N[O];
            M.prototype[O] = function() {
                var Q = [this._wrapped];
                H.apply(Q, arguments);
                return s.call(this, P.apply(M, Q))
            }
        })
    };
    var z = 0;
    M.uniqueId = function(N) {
        var O = ++z + "";
        return N ? N + O : O
    };
    M.templateSettings = {evaluate: /<%([\s\S]+?)%>/g,interpolate: /<%=([\s\S]+?)%>/g,escape: /<%-([\s\S]+?)%>/g};
    var v = /(.)^/;
    var h = {"'": "'","\\": "\\","\r": "r","\n": "n","\t": "t","\u2028": "u2028","\u2029": "u2029"};
    var i = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    M.template = function(V, Q, P) {
        var O;
        P = M.defaults({}, P, M.templateSettings);
        var R = new RegExp([(P.escape || v).source, (P.interpolate || v).source, (P.evaluate || v).source].join("|") + "|$", "g");
        var S = 0;
        var N = "__p+='";
        if (!V.replace) {
            for (var W in V) {
                console.log(W + " : " + V[W])
            }
        }
        V.replace(R, function(Y, Z, X, ab, aa) {
            N += V.slice(S, aa).replace(i, function(ac) {
                return "\\" + h[ac]
            });
            if (Z) {
                N += "'+\n((__t=(" + Z + "))==null?'':_.escape(__t))+\n'"
            }
            if (X) {
                N += "'+\n((__t=(" + X + "))==null?'':__t)+\n'"
            }
            if (ab) {
                N += "';\n" + ab + "\n__p+='"
            }
            S = aa + Y.length;
            return Y
        });
        N += "';\n";
        if (!P.variable) {
            N = "with(obj||{}){\n" + N + "}\n"
        }
        N = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + N + "return __p;\n";
        try {
            O = new Function(P.variable || "obj", "_", N)
        } catch (T) {
            T.source = N;
            throw T
        }
        if (Q) {
            return O(Q, M)
        }
        var U = function(X) {
            return O.call(this, X, M)
        };
        U.source = "function(" + (P.variable || "obj") + "){\n" + N + "}";
        return U
    };
    M.chain = function(N) {
        return M(N).chain()
    };
    var s = function(N) {
        return this._chain ? M(N).chain() : N
    };
    M.mixin(M);
    I(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(N) {
        var O = C[N];
        M.prototype[N] = function() {
            var P = this._wrapped;
            O.apply(P, arguments);
            if ((N == "shift" || N == "splice") && P.length === 0) {
                delete P[0]
            }
            return s.call(this, P)
        }
    });
    I(["concat", "join", "slice"], function(N) {
        var O = C[N];
        M.prototype[N] = function() {
            return s.call(this, O.apply(this._wrapped, arguments))
        }
    });
    M.extend(M.prototype, {chain: function() {
            this._chain = true;
            return this
        },value: function() {
            return this._wrapped
        }})
}).call(this);
define("underscore", (function(a) {
    return function() {
        var b, c;
        return b || a._
    }
}(this)));
(function(a, b) {
    G = Globalize;
    G.appendLocalePostfix = function(d, c) {
        var e = "en";
        e = (a.LocalizeSpec && a.LocalizeSpec.languageLocale) || e;
        if (c) {
            return d.replace(c, e)
        } else {
            return d + e
        }
    };
    G.imageUrl = function(c) {
        var d = "en";
        d = (a.LocalizeSpec && a.LocalizeSpec.languageLocale) || d;
        return "/images/locale/" + d + "/" + c
    };
    G.STR = function(e) {
        var f = G.localize(e);
        if (!f) {
            if (typeof console != "undefined" && typeof console.log == "function") {
                console.log("Warn : not found message key : '" + e + "'")
            }
            return ""
        }
        if (arguments.length > 1) {
            for (var c = 1; c < arguments.length; c++) {
                var h = (c - 1);
                var d = new RegExp("{(" + h + ")(:[^}]*)?}");
                var g = d.exec(f);
                if (!g) {
                    continue
                }
                f = f.replace(g[0], arguments[c])
            }
        }
        return f
    };
    G.getNationInfo = function(d) {
        var c = $.trim(G.STR("pcweb.noui.js.countrycode." + d));
        var e = /^([^0-9]+)\s?([0-9]+)$/.exec(c);
        if (e == null) {
            return null
        }
        return {displayName: c,nationCode: d,nationName: e[1] || "",regionNum: e[2] || ""}
    };
    G.getNationCodeList = function() {
        var d = G.culture().messages;
        var e = [];
        for (var c in d) {
            if (/pcweb\.noui\.js\.countrycode/.test(c)) {
                e.push(c.replace(/pcweb\.noui\.js\.countrycode\./, ""))
            }
        }
        return e
    };
    G.getNationInfoList = function() {
        var c = G.getNationCodeList();
        var d = _.map(c, function(e) {
            return G.getNationInfo(e)
        });
        d = _.filter(d, function(e) {
            return !!e
        });
        return d
    };
    G.sortedNationInfo = function(c) {
        var e = a.LocalizeSpec && a.LocalizeSpec.countryCode;
        c = c || e;
        var d = G.getNationInfoList();
        d = _.sortBy(d, function(f) {
            if (c && c === f.nationCode) {
                return " "
            }
            return f.displayName
        });
        return d
    };
    G.getDayString = function(c) {
        c = c || 0;
        return G.culture().calendar.days.names[c]
    };
    G.getDisplayMonth = function(c) {
        return G.format(new Date(0, c - 1, 1), "MMMM")
    };
    G.getDisplayDay = function(c) {
        return G.STR("pcweb.noui.js.etc.nth_day", c)
    };
    G.getDisplayBirthday = function(d) {
        if (/^\d{4}$/.test(d + "") == false) {
            return ""
        }
        var e = parseInt(d.substring(0, 2), 10);
        var c = parseInt(d.substring(2), 10);
        return G.getDisplayTime(new Date(0, e - 1, c), "G")
    };
    G.getDisplayTime = function(d, c) {
        var e = G.__getDateTime(d);
        return G.format(e, G.__getTimeFormatPattern(c))
    };
    G.getDisplayRelativeTime = function(f, d) {
        var h = G.__getDateTime(f);
        var e = new Date();
        var c = Math.floor((e.getTime() - h.getTime()) / 1000);
        var g = null;
        if (c < 60) {
            g = G.STR("pcweb.noui.js.etc.right_now")
        } else {
            if (c < 60 * 60) {
                g = G.STR("pcweb.noui.js.etc.minuted_before", Math.floor(c / 60))
            } else {
                if (c < 60 * 60 * 24) {
                    g = G.STR("pcweb.noui.js.etc.hour_before", Math.floor(c / (60 * 60)))
                } else {
                    g = G.getDisplayTime(h, d)
                }
            }
        }
        return g
    };
    G.__getDateTime = function(d) {
        var e = d;
        if (typeof (d) == "string") {
            var c = /msie/.test(navigator.userAgent.toLowerCase());
            if (c) {
                e = new Date(d.replace(/\-/g, "/"))
            } else {
                e = new Date(d.replace(/00$/, ":00"))
            }
        } else {
            if (typeof (d) == "number") {
                e = new Date(d)
            }
        }
        return e
    };
    G.__getTimeFormatPattern = function(d) {
        var c = {A: "0",B: "1",C: "2",D: "3",E: "4",F: "5",G: "6",H: "7",I: "8",J: "9",K: "가",L: "나"};
        return c[d] || d
    }
}(this));
define("globalize", ["libs/globalize/globalize", "localize/localizeSpec", "underscore"], (function(a) {
    return function() {
        var b, c;
        return b || a.G
    }
}(this)));
(function(a, b) {
    if (typeof define === "function" && define.amd) {
        define("backbone", ["underscore", "jquery", "exports"], function(e, f, d) {
            a.Backbone = b(a, d, e, f)
        })
    } else {
        if (typeof exports !== "undefined") {
            var c = require("underscore");
            b(a, exports, c)
        } else {
            a.Backbone = b(a, {}, a._, (a.jQuery || a.Zepto || a.ender || a.$))
        }
    }
}(this, function(v, B, O, z) {
    var D = v.Backbone;
    var g = [];
    var F = g.push;
    var o = g.slice;
    var u = g.splice;
    B.VERSION = "1.1.2";
    B.$ = z;
    B.noConflict = function() {
        v.Backbone = D;
        return this
    };
    B.emulateHTTP = false;
    B.emulateJSON = false;
    var M = B.Events = {on: function(P, S, R) {
            if (!y(this, "on", P, [S, R]) || !S) {
                return this
            }
            this._events || (this._events = {});
            var Q = this._events[P] || (this._events[P] = []);
            Q.push({callback: S,context: R,ctx: R || this});
            return this
        },once: function(Q, T, R) {
            if (!y(this, "once", Q, [T, R]) || !T) {
                return this
            }
            var P = this;
            var S = O.once(function() {
                P.off(Q, S);
                T.apply(this, arguments)
            });
            S._callback = T;
            return this.on(Q, S, R)
        },off: function(P, Y, Q) {
            var W, X, Z, V, U, R, T, S;
            if (!this._events || !y(this, "off", P, [Y, Q])) {
                return this
            }
            if (!P && !Y && !Q) {
                this._events = void 0;
                return this
            }
            V = P ? [P] : O.keys(this._events);
            for (U = 0, R = V.length; U < R; U++) {
                P = V[U];
                if (Z = this._events[P]) {
                    this._events[P] = W = [];
                    if (Y || Q) {
                        for (T = 0, S = Z.length; T < S; T++) {
                            X = Z[T];
                            if ((Y && Y !== X.callback && Y !== X.callback._callback) || (Q && Q !== X.context)) {
                                W.push(X)
                            }
                        }
                    }
                    if (!W.length) {
                        delete this._events[P]
                    }
                }
            }
            return this
        },trigger: function(R) {
            if (!this._events) {
                return this
            }
            var Q = o.call(arguments, 1);
            if (!y(this, "trigger", R, Q)) {
                return this
            }
            var S = this._events[R];
            var P = this._events.all;
            if (S) {
                b(S, Q)
            }
            if (P) {
                b(P, arguments)
            }
            return this
        },stopListening: function(S, Q, U) {
            var R = this._listeningTo;
            if (!R) {
                return this
            }
            var P = !Q && !U;
            if (!U && typeof Q === "object") {
                U = this
            }
            if (S) {
                (R = {})[S._listenId] = S
            }
            for (var T in R) {
                S = R[T];
                S.off(Q, U, this);
                if (P || O.isEmpty(S._events)) {
                    delete this._listeningTo[T]
                }
            }
            return this
        }};
    var x = /\s+/;
    var y = function(W, U, Q, T) {
        if (!Q) {
            return true
        }
        if (typeof Q === "object") {
            for (var S in Q) {
                W[U].apply(W, [S, Q[S]].concat(T))
            }
            return false
        }
        if (x.test(Q)) {
            var V = Q.split(x);
            for (var R = 0, P = V.length; R < P; R++) {
                W[U].apply(W, [V[R]].concat(T))
            }
            return false
        }
        return true
    };
    var b = function(U, S) {
        var V, T = -1, R = U.length, Q = S[0], P = S[1], W = S[2];
        switch (S.length) {
            case 0:
                while (++T < R) {
                    (V = U[T]).callback.call(V.ctx)
                }
                return;
            case 1:
                while (++T < R) {
                    (V = U[T]).callback.call(V.ctx, Q)
                }
                return;
            case 2:
                while (++T < R) {
                    (V = U[T]).callback.call(V.ctx, Q, P)
                }
                return;
            case 3:
                while (++T < R) {
                    (V = U[T]).callback.call(V.ctx, Q, P, W)
                }
                return;
            default:
                while (++T < R) {
                    (V = U[T]).callback.apply(V.ctx, S)
                }
                return
        }
    };
    var E = {listenTo: "on",listenToOnce: "once"};
    O.each(E, function(P, Q) {
        M[Q] = function(T, R, V) {
            var S = this._listeningTo || (this._listeningTo = {});
            var U = T._listenId || (T._listenId = O.uniqueId("l"));
            S[U] = T;
            if (!V && typeof R === "object") {
                V = this
            }
            T[P](R, V, this);
            return this
        }
    });
    M.bind = M.on;
    M.unbind = M.off;
    O.extend(B, M);
    var H = B.Model = function(P, R) {
        var Q = P || {};
        R || (R = {});
        this.cid = O.uniqueId("c");
        this.attributes = {};
        if (R.collection) {
            this.collection = R.collection
        }
        if (R.parse) {
            Q = this.parse(Q, R) || {}
        }
        Q = O.defaults({}, Q, O.result(this, "defaults"));
        this.set(Q, R);
        this.changed = {};
        this.initialize.apply(this, arguments)
    };
    O.extend(H.prototype, M, {changed: null,validationError: null,idAttribute: "id",initialize: function() {
        },toJSON: function(P) {
            return O.clone(this.attributes)
        },sync: function() {
            return B.sync.apply(this, arguments)
        },get: function(P) {
            return this.attributes[P]
        },escape: function(P) {
            return O.escape(this.get(P))
        },has: function(P) {
            return this.get(P) != null
        },set: function(X, P, ab) {
            var V, Y, Z, W, U, aa, R, T;
            if (X == null) {
                return this
            }
            if (typeof X === "object") {
                Y = X;
                ab = P
            } else {
                (Y = {})[X] = P
            }
            ab || (ab = {});
            if (!this._validate(Y, ab)) {
                return false
            }
            Z = ab.unset;
            U = ab.silent;
            W = [];
            aa = this._changing;
            this._changing = true;
            if (!aa) {
                this._previousAttributes = O.clone(this.attributes);
                this.changed = {}
            }
            T = this.attributes, R = this._previousAttributes;
            if (this.idAttribute in Y) {
                this.id = Y[this.idAttribute]
            }
            for (V in Y) {
                P = Y[V];
                if (!O.isEqual(T[V], P)) {
                    W.push(V)
                }
                if (!O.isEqual(R[V], P)) {
                    this.changed[V] = P
                } else {
                    delete this.changed[V]
                }
                Z ? delete T[V] : T[V] = P
            }
            if (!U) {
                if (W.length) {
                    this._pending = ab
                }
                for (var S = 0, Q = W.length; S < Q; S++) {
                    this.trigger("change:" + W[S], this, T[W[S]], ab)
                }
            }
            if (aa) {
                return this
            }
            if (!U) {
                while (this._pending) {
                    ab = this._pending;
                    this._pending = false;
                    this.trigger("change", this, ab)
                }
            }
            this._pending = false;
            this._changing = false;
            return this
        },unset: function(P, Q) {
            return this.set(P, void 0, O.extend({}, Q, {unset: true}))
        },clear: function(Q) {
            var P = {};
            for (var R in this.attributes) {
                P[R] = void 0
            }
            return this.set(P, O.extend({}, Q, {unset: true}))
        },hasChanged: function(P) {
            if (P == null) {
                return !O.isEmpty(this.changed)
            }
            return O.has(this.changed, P)
        },changedAttributes: function(R) {
            if (!R) {
                return this.hasChanged() ? O.clone(this.changed) : false
            }
            var T, S = false;
            var Q = this._changing ? this._previousAttributes : this.attributes;
            for (var P in R) {
                if (O.isEqual(Q[P], (T = R[P]))) {
                    continue
                }
                (S || (S = {}))[P] = T
            }
            return S
        },previous: function(P) {
            if (P == null || !this._previousAttributes) {
                return null
            }
            return this._previousAttributes[P]
        },previousAttributes: function() {
            return O.clone(this._previousAttributes)
        },fetch: function(Q) {
            Q = Q ? O.clone(Q) : {};
            if (Q.parse === void 0) {
                Q.parse = true
            }
            var P = this;
            var R = Q.success;
            Q.success = function(S) {
                if (!P.set(P.parse(S, Q), Q)) {
                    return false
                }
                if (R) {
                    R(P, S, Q)
                }
                P.trigger("sync", P, S, Q)
            };
            K(this, Q);
            return this.sync("read", this, Q)
        },save: function(T, Q, X) {
            var U, P, W, R = this.attributes;
            if (T == null || typeof T === "object") {
                U = T;
                X = Q
            } else {
                (U = {})[T] = Q
            }
            X = O.extend({validate: true}, X);
            if (U && !X.wait) {
                if (!this.set(U, X)) {
                    return false
                }
            } else {
                if (!this._validate(U, X)) {
                    return false
                }
            }
            if (U && X.wait) {
                this.attributes = O.extend({}, R, U)
            }
            if (X.parse === void 0) {
                X.parse = true
            }
            var S = this;
            var V = X.success;
            X.success = function(Z) {
                S.attributes = R;
                var Y = S.parse(Z, X);
                if (X.wait) {
                    Y = O.extend(U || {}, Y)
                }
                if (O.isObject(Y) && !S.set(Y, X)) {
                    return false
                }
                if (V) {
                    V(S, Z, X)
                }
                S.trigger("sync", S, Z, X)
            };
            K(this, X);
            P = this.isNew() ? "create" : (X.patch ? "patch" : "update");
            if (P === "patch") {
                X.attrs = U
            }
            W = this.sync(P, this, X);
            if (U && X.wait) {
                this.attributes = R
            }
            return W
        },destroy: function(Q) {
            Q = Q ? O.clone(Q) : {};
            var P = this;
            var T = Q.success;
            var R = function() {
                P.trigger("destroy", P, P.collection, Q)
            };
            Q.success = function(U) {
                if (Q.wait || P.isNew()) {
                    R()
                }
                if (T) {
                    T(P, U, Q)
                }
                if (!P.isNew()) {
                    P.trigger("sync", P, U, Q)
                }
            };
            if (this.isNew()) {
                Q.success();
                return false
            }
            K(this, Q);
            var S = this.sync("delete", this, Q);
            if (!Q.wait) {
                R()
            }
            return S
        },url: function() {
            var P = O.result(this, "urlRoot") || O.result(this.collection, "url") || s();
            if (this.isNew()) {
                return P
            }
            return P.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },parse: function(Q, P) {
            return Q
        },clone: function() {
            return new this.constructor(this.attributes)
        },isNew: function() {
            return !this.has(this.idAttribute)
        },isValid: function(P) {
            return this._validate({}, O.extend(P || {}, {validate: true}))
        },_validate: function(R, Q) {
            if (!Q.validate || !this.validate) {
                return true
            }
            R = O.extend({}, this.attributes, R);
            var P = this.validationError = this.validate(R, Q) || null;
            if (!P) {
                return true
            }
            this.trigger("invalid", this, P, O.extend(Q, {validationError: P}));
            return false
        }});
    var a = ["keys", "values", "pairs", "invert", "pick", "omit"];
    O.each(a, function(P) {
        H.prototype[P] = function() {
            var Q = o.call(arguments);
            Q.unshift(this.attributes);
            return O[P].apply(O, Q)
        }
    });
    var c = B.Collection = function(Q, P) {
        P || (P = {});
        if (P.model) {
            this.model = P.model
        }
        if (P.comparator !== void 0) {
            this.comparator = P.comparator
        }
        this._reset();
        this.initialize.apply(this, arguments);
        if (Q) {
            this.reset(Q, O.extend({silent: true}, P))
        }
    };
    var p = {add: true,remove: true,merge: true};
    var N = {add: true,remove: false};
    O.extend(c.prototype, M, {model: H,initialize: function() {
        },toJSON: function(P) {
            return this.map(function(Q) {
                return Q.toJSON(P)
            })
        },sync: function() {
            return B.sync.apply(this, arguments)
        },add: function(Q, P) {
            return this.set(Q, O.extend({merge: false}, P, N))
        },remove: function(V, S) {
            var U = !O.isArray(V);
            V = U ? [V] : O.clone(V);
            S || (S = {});
            var T, P, R, Q;
            for (T = 0, P = V.length; T < P; T++) {
                Q = V[T] = this.get(V[T]);
                if (!Q) {
                    continue
                }
                delete this._byId[Q.id];
                delete this._byId[Q.cid];
                R = this.indexOf(Q);
                this.models.splice(R, 1);
                this.length--;
                if (!S.silent) {
                    S.index = R;
                    Q.trigger("remove", Q, this, S)
                }
                this._removeReference(Q, S)
            }
            return U ? V[0] : V
        },set: function(ai, Q) {
            Q = O.defaults({}, Q, p);
            if (Q.parse) {
                ai = this.parse(ai, Q)
            }
            var T = !O.isArray(ai);
            ai = T ? (ai ? [ai] : []) : O.clone(ai);
            var ae, ac, Y, R, aa, X, ah;
            var V = Q.at;
            var ag = this.model;
            var P = this.comparator && (V == null) && Q.sort !== false;
            var af = O.isString(this.comparator) ? this.comparator : null;
            var ak = [], ab = [], Z = {};
            var W = Q.add, S = Q.merge, aj = Q.remove;
            var ad = !P && W && aj ? [] : false;
            for (ae = 0, ac = ai.length; ae < ac; ae++) {
                aa = ai[ae] || {};
                if (aa instanceof H) {
                    Y = R = aa
                } else {
                    Y = aa[ag.prototype.idAttribute || "id"]
                }
                if (X = this.get(Y)) {
                    if (aj) {
                        Z[X.cid] = true
                    }
                    if (S) {
                        aa = aa === R ? R.attributes : aa;
                        if (Q.parse) {
                            aa = X.parse(aa, Q)
                        }
                        X.set(aa, Q);
                        if (P && !ah && X.hasChanged(af)) {
                            ah = true
                        }
                    }
                    ai[ae] = X
                } else {
                    if (W) {
                        R = ai[ae] = this._prepareModel(aa, Q);
                        if (!R) {
                            continue
                        }
                        ak.push(R);
                        this._addReference(R, Q)
                    }
                }
                R = X || R;
                if (ad && (R.isNew() || !Z[R.id])) {
                    ad.push(R)
                }
                Z[R.id] = true
            }
            if (aj) {
                for (ae = 0, ac = this.length; ae < ac; ++ae) {
                    if (!Z[(R = this.models[ae]).cid]) {
                        ab.push(R)
                    }
                }
                if (ab.length) {
                    this.remove(ab, Q)
                }
            }
            if (ak.length || (ad && ad.length)) {
                if (P) {
                    ah = true
                }
                this.length += ak.length;
                if (V != null) {
                    for (ae = 0, ac = ak.length; ae < ac; ae++) {
                        this.models.splice(V + ae, 0, ak[ae])
                    }
                } else {
                    if (ad) {
                        this.models.length = 0
                    }
                    var U = ad || ak;
                    for (ae = 0, ac = U.length; ae < ac; ae++) {
                        this.models.push(U[ae])
                    }
                }
            }
            if (ah) {
                this.sort({silent: true})
            }
            if (!Q.silent) {
                for (ae = 0, ac = ak.length; ae < ac; ae++) {
                    (R = ak[ae]).trigger("add", R, this, Q)
                }
                if (ah || (ad && ad.length)) {
                    this.trigger("sort", this, Q)
                }
            }
            return T ? ai[0] : ai
        },reset: function(S, Q) {
            Q || (Q = {});
            for (var R = 0, P = this.models.length; R < P; R++) {
                this._removeReference(this.models[R], Q)
            }
            Q.previousModels = this.models;
            this._reset();
            S = this.add(S, O.extend({silent: true}, Q));
            if (!Q.silent) {
                this.trigger("reset", this, Q)
            }
            return S
        },push: function(Q, P) {
            return this.add(Q, O.extend({at: this.length}, P))
        },pop: function(Q) {
            var P = this.at(this.length - 1);
            this.remove(P, Q);
            return P
        },unshift: function(Q, P) {
            return this.add(Q, O.extend({at: 0}, P))
        },shift: function(Q) {
            var P = this.at(0);
            this.remove(P, Q);
            return P
        },slice: function() {
            return o.apply(this.models, arguments)
        },get: function(P) {
            if (P == null) {
                return void 0
            }
            return this._byId[P] || this._byId[P.id] || this._byId[P.cid]
        },at: function(P) {
            return this.models[P]
        },where: function(P, Q) {
            if (O.isEmpty(P)) {
                return Q ? void 0 : []
            }
            return this[Q ? "find" : "filter"](function(R) {
                for (var S in P) {
                    if (P[S] !== R.get(S)) {
                        return false
                    }
                }
                return true
            })
        },findWhere: function(P) {
            return this.where(P, true)
        },sort: function(P) {
            if (!this.comparator) {
                throw new Error("Cannot sort a set without a comparator")
            }
            P || (P = {});
            if (O.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this)
            } else {
                this.models.sort(O.bind(this.comparator, this))
            }
            if (!P.silent) {
                this.trigger("sort", this, P)
            }
            return this
        },pluck: function(P) {
            return O.invoke(this.models, "get", P)
        },fetch: function(P) {
            P = P ? O.clone(P) : {};
            if (P.parse === void 0) {
                P.parse = true
            }
            var R = P.success;
            var Q = this;
            P.success = function(S) {
                var T = P.reset ? "reset" : "set";
                Q[T](S, P);
                if (R) {
                    R(Q, S, P)
                }
                Q.trigger("sync", Q, S, P)
            };
            K(this, P);
            return this.sync("read", this, P)
        },create: function(Q, P) {
            P = P ? O.clone(P) : {};
            if (!(Q = this._prepareModel(Q, P))) {
                return false
            }
            if (!P.wait) {
                this.add(Q, P)
            }
            var S = this;
            var R = P.success;
            P.success = function(T, U) {
                if (P.wait) {
                    S.add(T, P)
                }
                if (R) {
                    R(T, U, P)
                }
            };
            Q.save(null, P);
            return Q
        },parse: function(Q, P) {
            return Q
        },clone: function() {
            return new this.constructor(this.models)
        },_reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },_prepareModel: function(R, Q) {
            if (R instanceof H) {
                return R
            }
            Q = Q ? O.clone(Q) : {};
            Q.collection = this;
            var P = new this.model(R, Q);
            if (!P.validationError) {
                return P
            }
            this.trigger("invalid", this, P.validationError, Q);
            return false
        },_addReference: function(Q, P) {
            this._byId[Q.cid] = Q;
            if (Q.id != null) {
                this._byId[Q.id] = Q
            }
            if (!Q.collection) {
                Q.collection = this
            }
            Q.on("all", this._onModelEvent, this)
        },_removeReference: function(Q, P) {
            if (this === Q.collection) {
                delete Q.collection
            }
            Q.off("all", this._onModelEvent, this)
        },_onModelEvent: function(R, Q, S, P) {
            if ((R === "add" || R === "remove") && S !== this) {
                return
            }
            if (R === "destroy") {
                this.remove(Q, P)
            }
            if (Q && R === "change:" + Q.idAttribute) {
                delete this._byId[Q.previous(Q.idAttribute)];
                if (Q.id != null) {
                    this._byId[Q.id] = Q
                }
            }
            this.trigger.apply(this, arguments)
        }});
    var A = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    O.each(A, function(P) {
        c.prototype[P] = function() {
            var Q = o.call(arguments);
            Q.unshift(this.models);
            return O[P].apply(O, Q)
        }
    });
    var l = ["groupBy", "countBy", "sortBy", "indexBy"];
    O.each(l, function(P) {
        c.prototype[P] = function(S, Q) {
            var R = O.isFunction(S) ? S : function(T) {
                return T.get(S)
            };
            return O[P](this.models, R, Q)
        }
    });
    var J = B.View = function(P) {
        this.cid = O.uniqueId("view");
        P || (P = {});
        O.extend(this, O.pick(P, e));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    };
    var w = /^(\S+)\s*(.*)$/;
    var e = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    O.extend(J.prototype, M, {tagName: "div",$: function(P) {
            return this.$el.find(P)
        },initialize: function() {
        },render: function() {
            return this
        },remove: function() {
            this.$el.remove();
            this.stopListening();
            return this
        },setElement: function(P, Q) {
            if (this.$el) {
                this.undelegateEvents()
            }
            this.$el = P instanceof B.$ ? P : B.$(P);
            this.el = this.$el[0];
            if (Q !== false) {
                this.delegateEvents()
            }
            return this
        },delegateEvents: function(T) {
            if (!(T || (T = O.result(this, "events")))) {
                return this
            }
            this.undelegateEvents();
            for (var S in T) {
                var U = T[S];
                if (!O.isFunction(U)) {
                    U = this[T[S]]
                }
                if (!U) {
                    continue
                }
                var R = S.match(w);
                var Q = R[1], P = R[2];
                U = O.bind(U, this);
                Q += ".delegateEvents" + this.cid;
                if (P === "") {
                    this.$el.on(Q, U)
                } else {
                    this.$el.on(Q, P, U)
                }
            }
            return this
        },undelegateEvents: function() {
            this.$el.off(".delegateEvents" + this.cid);
            return this
        },_ensureElement: function() {
            if (!this.el) {
                var P = O.extend({}, O.result(this, "attributes"));
                if (this.id) {
                    P.id = O.result(this, "id")
                }
                if (this.className) {
                    P["class"] = O.result(this, "className")
                }
                var Q = B.$("<" + O.result(this, "tagName") + ">").attr(P);
                this.setElement(Q, false)
            } else {
                this.setElement(O.result(this, "el"), false)
            }
        }});
    B.sync = function(V, Q, P) {
        var S = k[V];
        O.defaults(P || (P = {}), {emulateHTTP: B.emulateHTTP,emulateJSON: B.emulateJSON});
        var U = {type: S,dataType: "json"};
        if (!P.url) {
            U.url = O.result(Q, "url") || s()
        }
        if (P.data == null && Q && (V === "create" || V === "update" || V === "patch")) {
            U.contentType = "application/json";
            U.data = JSON.stringify(P.attrs || Q.toJSON(P))
        }
        if (P.emulateJSON) {
            U.contentType = "application/x-www-form-urlencoded";
            U.data = U.data ? {model: U.data} : {}
        }
        if (P.emulateHTTP && (S === "PUT" || S === "DELETE" || S === "PATCH")) {
            U.type = "POST";
            if (P.emulateJSON) {
                U.data._method = S
            }
            var R = P.beforeSend;
            P.beforeSend = function(W) {
                W.setRequestHeader("X-HTTP-Method-Override", S);
                if (R) {
                    return R.apply(this, arguments)
                }
            }
        }
        if (U.type !== "GET" && !P.emulateJSON) {
            U.processData = false
        }
        if (U.type === "PATCH" && j) {
            U.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
        }
        var T = P.xhr = B.ajax(O.extend(U, P));
        Q.trigger("request", Q, T, P);
        return T
    };
    var j = typeof window !== "undefined" && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);
    var k = {create: "POST",update: "PUT",patch: "PATCH","delete": "DELETE",read: "GET"};
    B.ajax = function() {
        return B.$.ajax.apply(B.$, arguments)
    };
    var q = B.Router = function(P) {
        P || (P = {});
        if (P.routes) {
            this.routes = P.routes
        }
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    };
    var r = /\((.*?)\)/g;
    var t = /(\(\?)?:\w+/g;
    var d = /\*\w+/g;
    var h = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    O.extend(q.prototype, M, {initialize: function() {
        },route: function(Q, R, S) {
            if (!O.isRegExp(Q)) {
                Q = this._routeToRegExp(Q)
            }
            if (O.isFunction(R)) {
                S = R;
                R = ""
            }
            if (!S) {
                S = this[R]
            }
            var P = this;
            B.history.route(Q, function(U) {
                var T = P._extractParameters(Q, U);
                P.execute(S, T);
                P.trigger.apply(P, ["route:" + R].concat(T));
                P.trigger("route", R, T);
                B.history.trigger("route", P, R, T)
            });
            return this
        },execute: function(Q, P) {
            if (Q) {
                Q.apply(this, P)
            }
        },navigate: function(Q, P) {
            B.history.navigate(Q, P);
            return this
        },_bindRoutes: function() {
            if (!this.routes) {
                return
            }
            this.routes = O.result(this, "routes");
            var Q, P = O.keys(this.routes);
            while ((Q = P.pop()) != null) {
                this.route(Q, this.routes[Q])
            }
        },_routeToRegExp: function(P) {
            P = P.replace(h, "\\$&").replace(r, "(?:$1)?").replace(t, function(R, Q) {
                return Q ? R : "([^/?]+)"
            }).replace(d, "([^?]*?)");
            return new RegExp("^" + P + "(?:\\?([\\s\\S]*))?$")
        },_extractParameters: function(P, Q) {
            var R = P.exec(Q).slice(1);
            return O.map(R, function(T, S) {
                if (S === R.length - 1) {
                    return T || null
                }
                return T ? decodeURIComponent(T) : null
            })
        }});
    var i = B.History = function() {
        this.handlers = [];
        O.bindAll(this, "checkUrl");
        if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history
        }
    };
    var C = /^[#\/]|\s+$/g;
    var f = /^\/+|\/+$/g;
    var L = /msie [\w.]+/;
    var n = /\/$/;
    var I = /#.*$/;
    i.started = false;
    O.extend(i.prototype, M, {interval: 50,atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },getHash: function(Q) {
            var P = (Q || this).location.href.match(/#(.*)$/);
            return P ? P[1] : ""
        },getFragment: function(R, Q) {
            if (R == null) {
                if (this._hasPushState || !this._wantsHashChange || Q) {
                    R = decodeURI(this.location.pathname + this.location.search);
                    var P = this.root.replace(n, "");
                    if (!R.indexOf(P)) {
                        R = R.slice(P.length)
                    }
                } else {
                    R = this.getHash()
                }
            }
            return R.replace(C, "")
        },start: function(R) {
            if (i.started) {
                throw new Error("Backbone.history has already been started")
            }
            i.started = true;
            this.options = O.extend({root: "/"}, this.options, R);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var Q = this.getFragment();
            var P = document.documentMode;
            var S = (L.exec(navigator.userAgent.toLowerCase()) && (!P || P <= 7));
            this.root = ("/" + this.root + "/").replace(f, "/");
            if (S && this._wantsHashChange) {
                var T = this;
                var W = 'javascript:document.open();document.domain="' + document.domain + '";document.close();';
                var V = z("<iframe></iframe>").attr("src", W).hide().bind("load", function() {
                    T.frame = V.contentWindow
                }).appendTo("body");
                this.navigate(Q)
            }
            if (this._hasPushState) {
                B.$(window).on("popstate", this.checkUrl)
            } else {
                if (this._wantsHashChange && ("onhashchange" in window) && !S) {
                    B.$(window).on("hashchange", this.checkUrl)
                } else {
                    if (this._wantsHashChange) {
                        this._checkUrlInterval = setInterval(this.checkUrl, this.interval)
                    }
                }
            }
            this.fragment = Q;
            var U = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    this.fragment = this.getFragment(null, true);
                    this.location.replace(this.root + "#" + this.fragment);
                    return true
                } else {
                    if (this._hasPushState && this.atRoot() && U.hash) {
                        this.fragment = this.getHash().replace(C, "");
                        this.history.replaceState({}, document.title, this.root + this.fragment)
                    }
                }
            }
            if (!this.options.silent) {
                return this.loadUrl()
            }
        },stop: function() {
            B.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            if (this._checkUrlInterval) {
                clearInterval(this._checkUrlInterval)
            }
            i.started = false
        },route: function(P, Q) {
            this.handlers.unshift({route: P,callback: Q})
        },checkUrl: function(Q) {
            var P = this.getFragment();
            if (P === this.fragment && this.iframe) {
                P = this.getFragment(this.getHash(this.iframe))
            }
            if (P === this.fragment) {
                return false
            }
            if (this.iframe) {
                this.navigate(P)
            }
            this.loadUrl()
        },loadUrl: function(P) {
            P = this.fragment = this.getFragment(P);
            return O.any(this.handlers, function(Q) {
                if (Q.route.test(P)) {
                    Q.callback(P);
                    return true
                }
            })
        },navigate: function(R, Q) {
            if (!i.started) {
                return false
            }
            if (!Q || Q === true) {
                Q = {trigger: !!Q}
            }
            var P = this.root + (R = this.getFragment(R || ""));
            R = R.replace(I, "");
            if (this.fragment === R) {
                return
            }
            this.fragment = R;
            if (R === "" && P !== "/") {
                P = P.slice(0, -1)
            }
            if (this._hasPushState) {
                this.history[Q.replace ? "replaceState" : "pushState"]({}, document.title, P)
            } else {
                if (this._wantsHashChange) {
                    this._updateHash(this.location, R, Q.replace);
                    if (this.iframe && (R !== this.getFragment(this.getHash(this.iframe)))) {
                        if (!Q.replace) {
                            this.iframe.document.open().close()
                        }
                        this._updateHash(this.iframe.location, R, Q.replace)
                    }
                } else {
                    return this.location.assign(P)
                }
            }
            if (Q.trigger) {
                return this.loadUrl(R)
            }
        },_updateHash: function(P, R, S) {
            if (S) {
                var Q = P.href.replace(/(javascript:|#).*$/, "");
                P.replace(Q + "#" + R)
            } else {
                P.hash = "#" + R
            }
        }});
    B.history = new i;
    var m = function(P, R) {
        var Q = this;
        var T;
        if (P && O.has(P, "constructor")) {
            T = P.constructor
        } else {
            T = function() {
                return Q.apply(this, arguments)
            }
        }
        O.extend(T, Q, R);
        var S = function() {
            this.constructor = T
        };
        S.prototype = Q.prototype;
        T.prototype = new S;
        if (P) {
            O.extend(T.prototype, P)
        }
        T.__super__ = Q.prototype;
        return T
    };
    H.extend = c.extend = q.extend = J.extend = i.extend = m;
    var s = function() {
        throw new Error('A "url" property or function must be specified')
    };
    var K = function(R, Q) {
        var P = Q.error;
        Q.error = function(S) {
            if (P) {
                P(R, S, Q)
            }
            R.trigger("error", R, S, Q)
        }
    };
    return B
}));
define("libCustom/backboneDefaultSettings", ["jquery", "underscore", "backbone"], function(b, a, c) {
    c.$ = b;
    c.$.ajaxSetup({dataType: "json",xhrFields: {withCredentials: true}});
    window.Backbone = c;
    return c
});
(function(b, c) {
    if (typeof exports === "object") {
        var a = require("underscore");
        var d = require("backbone");
        module.exports = c(a, d)
    } else {
        if (typeof define === "function" && define.amd) {
            define("backbone.wreqr", ["underscore", "backbone"], c)
        }
    }
}(this, function(a, b) {
    b.Wreqr = (function(f, e, c) {
        var d = {};
        d.Handlers = (function(i, h) {
            var g = function(j) {
                this.options = j;
                this._wreqrHandlers = {};
                if (h.isFunction(this.initialize)) {
                    this.initialize(j)
                }
            };
            g.extend = i.Model.extend;
            h.extend(g.prototype, i.Events, {setHandlers: function(j) {
                    h.each(j, function(m, k) {
                        var l = null;
                        if (h.isObject(m) && !h.isFunction(m)) {
                            l = m.context;
                            m = m.callback
                        }
                        this.setHandler(k, m, l)
                    }, this)
                },setHandler: function(k, m, l) {
                    var j = {callback: m,context: l};
                    this._wreqrHandlers[k] = j;
                    this.trigger("handler:add", k, m, l)
                },hasHandler: function(j) {
                    return !!this._wreqrHandlers[j]
                },getHandler: function(k) {
                    var j = this._wreqrHandlers[k];
                    if (!j) {
                        return
                    }
                    return function() {
                        var l = Array.prototype.slice.apply(arguments);
                        return j.callback.apply(j.context, l)
                    }
                },removeHandler: function(j) {
                    delete this._wreqrHandlers[j]
                },removeAllHandlers: function() {
                    this._wreqrHandlers = {}
                }});
            return g
        })(f, c);
        d.CommandStorage = (function() {
            var g = function(h) {
                this.options = h;
                this._commands = {};
                if (c.isFunction(this.initialize)) {
                    this.initialize(h)
                }
            };
            c.extend(g.prototype, f.Events, {getCommands: function(i) {
                    var h = this._commands[i];
                    if (!h) {
                        h = {command: i,instances: []};
                        this._commands[i] = h
                    }
                    return h
                },addCommand: function(i, h) {
                    var j = this.getCommands(i);
                    j.instances.push(h)
                },clearCommands: function(h) {
                    var i = this.getCommands(h);
                    i.instances = []
                }});
            return g
        })();
        d.Commands = (function(g) {
            return g.Handlers.extend({storageType: g.CommandStorage,constructor: function(i) {
                    this.options = i || {};
                    this._initializeStorage(this.options);
                    this.on("handler:add", this._executeCommands, this);
                    var h = Array.prototype.slice.call(arguments);
                    g.Handlers.prototype.constructor.apply(this, h)
                },execute: function(i, h) {
                    i = arguments[0];
                    h = Array.prototype.slice.call(arguments, 1);
                    if (this.hasHandler(i)) {
                        this.getHandler(i).apply(this, h)
                    } else {
                        this.storage.addCommand(i, h)
                    }
                },_executeCommands: function(h, j, i) {
                    var k = this.storage.getCommands(h);
                    c.each(k.instances, function(l) {
                        j.apply(i, l)
                    });
                    this.storage.clearCommands(h)
                },_initializeStorage: function(h) {
                    var j;
                    var i = h.storageType || this.storageType;
                    if (c.isFunction(i)) {
                        j = new i()
                    } else {
                        j = i
                    }
                    this.storage = j
                }})
        })(d);
        d.RequestResponse = (function(g) {
            return g.Handlers.extend({request: function() {
                    var i = arguments[0];
                    var h = Array.prototype.slice.call(arguments, 1);
                    if (this.hasHandler(i)) {
                        return this.getHandler(i).apply(this, h)
                    }
                }})
        })(d);
        d.EventAggregator = (function(i, g) {
            var h = function() {
            };
            h.extend = i.Model.extend;
            g.extend(h.prototype, i.Events);
            return h
        })(f, c);
        return d
    })(b, b.Marionette, a);
    return b.Wreqr
}));
(function(b, c) {
    if (typeof exports === "object") {
        var a = require("underscore");
        var d = require("backbone");
        module.exports = c(a, d)
    } else {
        if (typeof define === "function" && define.amd) {
            define("backbone.babysitter", ["underscore", "backbone"], c)
        }
    }
}(this, function(a, b) {
    b.ChildViewContainer = (function(f, e) {
        var c = function(g) {
            this._views = {};
            this._indexByModel = {};
            this._indexByCustom = {};
            this._updateLength();
            e.each(g, this.add, this)
        };
        e.extend(c.prototype, {add: function(g, i) {
                var h = g.cid;
                this._views[h] = g;
                if (g.model) {
                    this._indexByModel[g.model.cid] = h
                }
                if (i) {
                    this._indexByCustom[i] = h
                }
                this._updateLength();
                return this
            },findByModel: function(g) {
                return this.findByModelCid(g.cid)
            },findByModelCid: function(g) {
                var h = this._indexByModel[g];
                return this.findByCid(h)
            },findByCustom: function(h) {
                var g = this._indexByCustom[h];
                return this.findByCid(g)
            },findByIndex: function(g) {
                return e.values(this._views)[g]
            },findByCid: function(g) {
                return this._views[g]
            },remove: function(g) {
                var h = g.cid;
                if (g.model) {
                    delete this._indexByModel[g.model.cid]
                }
                e.any(this._indexByCustom, function(j, i) {
                    if (j === h) {
                        delete this._indexByCustom[i];
                        return true
                    }
                }, this);
                delete this._views[h];
                this._updateLength();
                return this
            },call: function(g) {
                this.apply(g, e.tail(arguments))
            },apply: function(h, g) {
                e.each(this._views, function(i) {
                    if (e.isFunction(i[h])) {
                        i[h].apply(i, g || [])
                    }
                })
            },_updateLength: function() {
                this.length = e.size(this._views)
            }});
        var d = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        e.each(d, function(g) {
            c.prototype[g] = function() {
                var h = e.values(this._views);
                var i = [h].concat(e.toArray(arguments));
                return e[g].apply(e, i)
            }
        });
        return c
    })(b, a);
    return b.ChildViewContainer
}));
/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */
(function(c, e) {
    if (typeof exports === "object") {
        var b = require("underscore");
        var f = require("backbone");
        var d = require("backbone.wreqr");
        var a = require("backbone.babysitter");
        module.exports = e(b, f, d, a)
    } else {
        if (typeof define === "function" && define.amd) {
            define("marionette", ["underscore", "backbone", "backbone.wreqr", "backbone.babysitter"], e)
        }
    }
}(this, function(a, c) {
    var b = (function(e, i, d) {
        var h = {};
        i.Marionette = h;
        h.$ = i.$;
        var f = Array.prototype.slice;
        function g(l, k) {
            var j = new Error(l);
            j.name = k || "Error";
            throw j
        }
        h.extend = i.Model.extend;
        h.getOption = function(l, j) {
            if (!l || !j) {
                return
            }
            var k;
            if (l.options && (j in l.options) && (l.options[j] !== undefined)) {
                k = l.options[j]
            } else {
                k = l[j]
            }
            return k
        };
        h.normalizeMethods = function(k) {
            var j = {}, l;
            d.each(k, function(n, m) {
                l = n;
                if (!d.isFunction(l)) {
                    l = this[l]
                }
                if (!l) {
                    return
                }
                j[m] = l
            }, this);
            return j
        };
        h.normalizeUIKeys = function(k, j) {
            if (typeof (k) === "undefined") {
                return
            }
            d.each(d.keys(k), function(l) {
                var m = /@ui.[a-zA-Z_$0-9]*/g;
                if (l.match(m)) {
                    k[l.replace(m, function(n) {
                        return j[n.slice(4)]
                    })] = k[l];
                    delete k[l]
                }
            });
            return k
        };
        h.triggerMethod = (function() {
            var k = /(^|:)(\w)/gi;
            function l(n, o, m) {
                return m.toUpperCase()
            }
            var j = function(n) {
                var m = "on" + n.replace(k, l);
                var o = this[m];
                if (d.isFunction(this.trigger)) {
                    this.trigger.apply(this, arguments)
                }
                if (d.isFunction(o)) {
                    return o.apply(this, d.tail(arguments))
                }
            };
            return j
        })();
        h.MonitorDOMRefresh = (function(k) {
            function n(o) {
                o._isShown = true;
                l(o)
            }
            function m(o) {
                o._isRendered = true;
                l(o)
            }
            function l(o) {
                if (o._isShown && o._isRendered && j(o)) {
                    if (d.isFunction(o.triggerMethod)) {
                        o.triggerMethod("dom:refresh")
                    }
                }
            }
            function j(o) {
                return k.contains(o.el)
            }
            return function(o) {
                o.listenTo(o, "show", function() {
                    n(o)
                });
                o.listenTo(o, "render", function() {
                    m(o)
                })
            }
        })(document.documentElement);
        (function(o) {
            function n(t, r, p, q) {
                var s = q.split(/\s+/);
                d.each(s, function(u) {
                    var v = t[u];
                    if (!v) {
                        g("Method '" + u + "' was configured as an event handler, but does not exist.")
                    }
                    t.listenTo(r, p, v)
                })
            }
            function j(r, q, p, s) {
                r.listenTo(q, p, s)
            }
            function l(t, r, p, q) {
                var s = q.split(/\s+/);
                d.each(s, function(u) {
                    var v = t[u];
                    t.stopListening(r, p, v)
                })
            }
            function k(r, q, p, s) {
                r.stopListening(q, p, s)
            }
            function m(s, p, t, r, q) {
                if (!p || !t) {
                    return
                }
                if (d.isFunction(t)) {
                    t = t.call(s)
                }
                d.each(t, function(v, u) {
                    if (d.isFunction(v)) {
                        r(s, p, u, v)
                    } else {
                        q(s, p, u, v)
                    }
                })
            }
            o.bindEntityEvents = function(q, p, r) {
                m(q, p, r, j, n)
            };
            o.unbindEntityEvents = function(q, p, r) {
                m(q, p, r, k, l)
            }
        })(h);
        h.Callbacks = function() {
            this._deferred = h.$.Deferred();
            this._callbacks = []
        };
        d.extend(h.Callbacks.prototype, {add: function(k, j) {
                this._callbacks.push({cb: k,ctx: j});
                this._deferred.done(function(m, l) {
                    if (j) {
                        m = j
                    }
                    k.call(m, l)
                })
            },run: function(j, k) {
                this._deferred.resolve(k, j)
            },reset: function() {
                var j = this._callbacks;
                this._deferred = h.$.Deferred();
                this._callbacks = [];
                d.each(j, function(k) {
                    this.add(k.cb, k.ctx)
                }, this)
            }});
        h.Controller = function(j) {
            this.triggerMethod = h.triggerMethod;
            this.options = j || {};
            if (d.isFunction(this.initialize)) {
                this.initialize(this.options)
            }
        };
        h.Controller.extend = h.extend;
        d.extend(h.Controller.prototype, i.Events, {close: function() {
                this.stopListening();
                var j = Array.prototype.slice.call(arguments);
                this.triggerMethod.apply(this, ["close"].concat(j));
                this.unbind()
            }});
        h.Region = function(k) {
            this.options = k || {};
            this.el = h.getOption(this, "el");
            if (!this.el) {
                g("An 'el' must be specified for a region.", "NoElError")
            }
            if (this.initialize) {
                var j = Array.prototype.slice.apply(arguments);
                this.initialize.apply(this, j)
            }
        };
        d.extend(h.Region, {buildRegion: function(k, q) {
                var o = d.isString(k);
                var n = d.isString(k.selector);
                var r = d.isUndefined(k.regionType);
                var l = d.isFunction(k);
                if (!l && !o && !n) {
                    g("Region must be specified as a Region type, a selector string or an object with selector property")
                }
                var j, m;
                if (o) {
                    j = k
                }
                if (k.selector) {
                    j = k.selector;
                    delete k.selector
                }
                if (l) {
                    m = k
                }
                if (!l && r) {
                    m = q
                }
                if (k.regionType) {
                    m = k.regionType;
                    delete k.regionType
                }
                if (o || l) {
                    k = {}
                }
                k.el = j;
                var p = new m(k);
                if (k.parentEl) {
                    p.getEl = function(s) {
                        var t = k.parentEl;
                        if (d.isFunction(t)) {
                            t = t()
                        }
                        return t.find(s)
                    }
                }
                return p
            }});
        d.extend(h.Region.prototype, i.Events, {show: function(l) {
                this.ensureEl();
                var j = l.isClosed || d.isUndefined(l.$el);
                var k = l !== this.currentView;
                if (k) {
                    this.close()
                }
                l.render();
                h.triggerMethod.call(this, "before:show", l);
                h.triggerMethod.call(l, "before:show");
                if (k || j) {
                    this.open(l)
                }
                this.currentView = l;
                h.triggerMethod.call(this, "show", l);
                h.triggerMethod.call(l, "show")
            },ensureEl: function() {
                if (!this.$el || this.$el.length === 0) {
                    this.$el = this.getEl(this.el)
                }
            },getEl: function(j) {
                return h.$(j)
            },open: function(j) {
                this.$el.empty().append(j.el)
            },close: function() {
                var j = this.currentView;
                if (!j || j.isClosed) {
                    return
                }
                if (j.close) {
                    j.close()
                } else {
                    if (j.remove) {
                        j.remove()
                    }
                }
                h.triggerMethod.call(this, "close", j);
                delete this.currentView
            },attachView: function(j) {
                this.currentView = j
            },reset: function() {
                this.close();
                delete this.$el
            }});
        h.Region.extend = h.extend;
        h.RegionManager = (function(l) {
            var k = l.Controller.extend({constructor: function(m) {
                    this._regions = {};
                    l.Controller.prototype.constructor.call(this, m)
                },addRegions: function(m, n) {
                    var o = {};
                    d.each(m, function(q, p) {
                        if (d.isString(q)) {
                            q = {selector: q}
                        }
                        if (q.selector) {
                            q = d.defaults({}, q, n)
                        }
                        var r = this.addRegion(p, q);
                        o[p] = r
                    }, this);
                    return o
                },addRegion: function(o, p) {
                    var r;
                    var n = d.isObject(p);
                    var m = d.isString(p);
                    var q = !!p.selector;
                    if (m || (n && q)) {
                        r = l.Region.buildRegion(p, l.Region)
                    } else {
                        if (d.isFunction(p)) {
                            r = l.Region.buildRegion(p, l.Region)
                        } else {
                            r = p
                        }
                    }
                    this._store(o, r);
                    this.triggerMethod("region:add", o, r);
                    return r
                },get: function(m) {
                    return this._regions[m]
                },removeRegion: function(m) {
                    var n = this._regions[m];
                    this._remove(m, n)
                },removeRegions: function() {
                    d.each(this._regions, function(n, m) {
                        this._remove(m, n)
                    }, this)
                },closeRegions: function() {
                    d.each(this._regions, function(n, m) {
                        n.close()
                    }, this)
                },close: function() {
                    this.removeRegions();
                    l.Controller.prototype.close.apply(this, arguments)
                },_store: function(m, n) {
                    this._regions[m] = n;
                    this._setLength()
                },_remove: function(m, n) {
                    n.close();
                    delete this._regions[m];
                    this._setLength();
                    this.triggerMethod("region:remove", m, n)
                },_setLength: function() {
                    this.length = d.size(this._regions)
                }});
            var j = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
            d.each(j, function(m) {
                k.prototype[m] = function() {
                    var o = d.values(this._regions);
                    var n = [o].concat(d.toArray(arguments));
                    return d[m].apply(d, n)
                }
            });
            return k
        })(h);
        h.TemplateCache = function(j) {
            this.templateId = j
        };
        d.extend(h.TemplateCache, {templateCaches: {},get: function(j) {
                var k = this.templateCaches[j];
                if (!k) {
                    k = new h.TemplateCache(j);
                    this.templateCaches[j] = k
                }
                return k.load()
            },clear: function() {
                var k;
                var j = f.call(arguments);
                var l = j.length;
                if (l > 0) {
                    for (k = 0; k < l; k++) {
                        delete this.templateCaches[j[k]]
                    }
                } else {
                    this.templateCaches = {}
                }
            }});
        d.extend(h.TemplateCache.prototype, {load: function() {
                if (this.compiledTemplate) {
                    return this.compiledTemplate
                }
                var j = this.loadTemplate(this.templateId);
                this.compiledTemplate = this.compileTemplate(j);
                return this.compiledTemplate
            },loadTemplate: function(j) {
                var k = h.$(j).html();
                if (!k || k.length === 0) {
                    g("Could not find template: '" + j + "'", "NoTemplateError")
                }
                return k
            },compileTemplate: function(j) {
                return d.template(j)
            }});
        h.Renderer = {render: function(k, l) {
                if (!k) {
                    g("Cannot render the template since it's false, null or undefined.", "TemplateNotFoundError")
                }
                var j;
                if (typeof k === "function") {
                    j = k
                } else {
                    j = h.TemplateCache.get(k)
                }
                return j(l)
            }};
        h.View = i.View.extend({constructor: function(j) {
                if (d.isObject(this.behaviors)) {
                    new h.Behaviors(this)
                }
                this.options = d.extend({}, d.result(this, "options"), d.isFunction(j) ? j.call(this) : j);
                this.events = this.normalizeUIKeys(d.result(this, "events"));
                i.View.prototype.constructor.apply(this, arguments);
                h.MonitorDOMRefresh(this);
                this.listenTo(this, "show", this.onShowCalled)
            },triggerMethod: h.triggerMethod,normalizeMethods: h.normalizeMethods,getTemplate: function() {
                return h.getOption(this, "template")
            },mixinTemplateHelpers: function(j) {
                j = j || {};
                var k = h.getOption(this, "templateHelpers");
                if (d.isFunction(k)) {
                    k = k.call(this)
                }
                return d.extend(j, k)
            },normalizeUIKeys: function(k) {
                var j = d.result(this, "ui");
                return h.normalizeUIKeys(k, j)
            },configureTriggers: function() {
                if (!this.triggers) {
                    return
                }
                var k = {};
                var j = this.normalizeUIKeys(d.result(this, "triggers"));
                d.each(j, function(n, m) {
                    var o = d.isObject(n);
                    var l = o ? n.event : n;
                    k[m] = function(u) {
                        if (u) {
                            var p = u.preventDefault;
                            var t = u.stopPropagation;
                            var s = o ? n.preventDefault : p;
                            var r = o ? n.stopPropagation : t;
                            if (s && p) {
                                p.apply(u)
                            }
                            if (r && t) {
                                t.apply(u)
                            }
                        }
                        var q = {view: this,model: this.model,collection: this.collection};
                        this.triggerMethod(l, q)
                    }
                }, this);
                return k
            },delegateEvents: function(j) {
                this._delegateDOMEvents(j);
                h.bindEntityEvents(this, this.model, h.getOption(this, "modelEvents"));
                h.bindEntityEvents(this, this.collection, h.getOption(this, "collectionEvents"))
            },_delegateDOMEvents: function(j) {
                j = j || this.events;
                if (d.isFunction(j)) {
                    j = j.call(this)
                }
                var l = {};
                var m = d.result(this, "behaviorEvents") || {};
                var k = this.configureTriggers();
                d.extend(l, m, j, k);
                i.View.prototype.delegateEvents.call(this, l)
            },undelegateEvents: function() {
                var j = Array.prototype.slice.call(arguments);
                i.View.prototype.undelegateEvents.apply(this, j);
                h.unbindEntityEvents(this, this.model, h.getOption(this, "modelEvents"));
                h.unbindEntityEvents(this, this.collection, h.getOption(this, "collectionEvents"))
            },onShowCalled: function() {
            },close: function() {
                if (this.isClosed) {
                    return
                }
                var j = Array.prototype.slice.call(arguments);
                var k = this.triggerMethod.apply(this, ["before:close"].concat(j));
                if (k === false) {
                    return
                }
                this.isClosed = true;
                this.triggerMethod.apply(this, ["close"].concat(j));
                this.unbindUIElements();
                this.remove()
            },bindUIElements: function() {
                if (!this.ui) {
                    return
                }
                if (!this._uiBindings) {
                    this._uiBindings = this.ui
                }
                var j = d.result(this, "_uiBindings");
                this.ui = {};
                d.each(d.keys(j), function(l) {
                    var k = j[l];
                    this.ui[l] = this.$(k)
                }, this)
            },unbindUIElements: function() {
                if (!this.ui || !this._uiBindings) {
                    return
                }
                d.each(this.ui, function(k, j) {
                    delete this.ui[j]
                }, this);
                this.ui = this._uiBindings;
                delete this._uiBindings
            }});
        h.ItemView = h.View.extend({constructor: function() {
                h.View.prototype.constructor.apply(this, arguments)
            },serializeData: function() {
                var j = {};
                if (this.model) {
                    j = this.model.toJSON()
                } else {
                    if (this.collection) {
                        j = {items: this.collection.toJSON()}
                    }
                }
                return j
            },render: function() {
                this.isClosed = false;
                this.triggerMethod("before:render", this);
                this.triggerMethod("item:before:render", this);
                var l = this.serializeData();
                l = this.mixinTemplateHelpers(l);
                var k = this.getTemplate();
                var j = h.Renderer.render(k, l);
                this.$el.html(j);
                this.bindUIElements();
                this.triggerMethod("render", this);
                this.triggerMethod("item:rendered", this);
                return this
            },close: function() {
                if (this.isClosed) {
                    return
                }
                this.triggerMethod("item:before:close");
                h.View.prototype.close.apply(this, arguments);
                this.triggerMethod("item:closed")
            }});
        h.CollectionView = h.View.extend({itemViewEventPrefix: "itemview",constructor: function(j) {
                this._initChildViewStorage();
                h.View.prototype.constructor.apply(this, arguments);
                this._initialEvents();
                this.initRenderBuffer()
            },initRenderBuffer: function() {
                this.elBuffer = document.createDocumentFragment();
                this._bufferedChildren = []
            },startBuffering: function() {
                this.initRenderBuffer();
                this.isBuffering = true
            },endBuffering: function() {
                this.isBuffering = false;
                this.appendBuffer(this, this.elBuffer);
                this._triggerShowBufferedChildren();
                this.initRenderBuffer()
            },_triggerShowBufferedChildren: function() {
                if (this._isShown) {
                    d.each(this._bufferedChildren, function(j) {
                        h.triggerMethod.call(j, "show")
                    });
                    this._bufferedChildren = []
                }
            },_initialEvents: function() {
                if (this.collection) {
                    this.listenTo(this.collection, "add", this.addChildView);
                    this.listenTo(this.collection, "remove", this.removeItemView);
                    this.listenTo(this.collection, "reset", this.render)
                }
            },addChildView: function(m, n, k) {
                this.closeEmptyView();
                var l = this.getItemView(m);
                var j = this.collection.indexOf(m);
                this.addItemView(m, l, j)
            },onShowCalled: function() {
                this.children.each(function(j) {
                    h.triggerMethod.call(j, "show")
                })
            },triggerBeforeRender: function() {
                this.triggerMethod("before:render", this);
                this.triggerMethod("collection:before:render", this)
            },triggerRendered: function() {
                this.triggerMethod("render", this);
                this.triggerMethod("collection:rendered", this)
            },render: function() {
                this.isClosed = false;
                this.triggerBeforeRender();
                this._renderChildren();
                this.triggerRendered();
                return this
            },_renderChildren: function() {
                this.startBuffering();
                this.closeEmptyView();
                this.closeChildren();
                if (!this.isEmpty(this.collection)) {
                    this.showCollection()
                } else {
                    this.showEmptyView()
                }
                this.endBuffering()
            },showCollection: function() {
                var j;
                this.collection.each(function(l, k) {
                    j = this.getItemView(l);
                    this.addItemView(l, j, k)
                }, this)
            },showEmptyView: function() {
                var k = this.getEmptyView();
                if (k && !this._showingEmptyView) {
                    this._showingEmptyView = true;
                    var j = new i.Model();
                    this.addItemView(j, k, 0)
                }
            },closeEmptyView: function() {
                if (this._showingEmptyView) {
                    this.closeChildren();
                    delete this._showingEmptyView
                }
            },getEmptyView: function() {
                return h.getOption(this, "emptyView")
            },getItemView: function(k) {
                var j = h.getOption(this, "itemView");
                if (!j) {
                    g("An `itemView` must be specified", "NoItemViewError")
                }
                return j
            },addItemView: function(m, l, k) {
                var n = h.getOption(this, "itemViewOptions");
                if (d.isFunction(n)) {
                    n = n.call(this, m, k)
                }
                var j = this.buildItemView(m, l, n);
                this.addChildViewEventForwarding(j);
                this.triggerMethod("before:item:added", j);
                this.children.add(j);
                this.renderItemView(j, k);
                if (this._isShown && !this.isBuffering) {
                    h.triggerMethod.call(j, "show")
                }
                this.triggerMethod("after:item:added", j);
                return j
            },addChildViewEventForwarding: function(j) {
                var k = h.getOption(this, "itemViewEventPrefix");
                this.listenTo(j, "all", function() {
                    var m = f.call(arguments);
                    var n = m[0];
                    var l = this.normalizeMethods(this.getItemEvents());
                    m[0] = k + ":" + n;
                    m.splice(1, 0, j);
                    if (typeof l !== "undefined" && d.isFunction(l[n])) {
                        l[n].apply(this, m)
                    }
                    h.triggerMethod.apply(this, m)
                }, this)
            },getItemEvents: function() {
                if (d.isFunction(this.itemEvents)) {
                    return this.itemEvents.call(this)
                }
                return this.itemEvents
            },renderItemView: function(j, k) {
                j.render();
                this.appendHtml(this, j, k)
            },buildItemView: function(l, j, m) {
                var k = d.extend({model: l}, m);
                return new j(k)
            },removeItemView: function(k) {
                var j = this.children.findByModel(k);
                this.removeChildView(j);
                this.checkEmpty()
            },removeChildView: function(j) {
                if (j) {
                    this.stopListening(j);
                    if (j.close) {
                        j.close()
                    } else {
                        if (j.remove) {
                            j.remove()
                        }
                    }
                    this.children.remove(j)
                }
                this.triggerMethod("item:removed", j)
            },isEmpty: function(j) {
                return !this.collection || this.collection.length === 0
            },checkEmpty: function() {
                if (this.isEmpty(this.collection)) {
                    this.showEmptyView()
                }
            },appendBuffer: function(k, j) {
                k.$el.append(j)
            },appendHtml: function(j, l, k) {
                if (j.isBuffering) {
                    j.elBuffer.appendChild(l.el);
                    j._bufferedChildren.push(l)
                } else {
                    j.$el.append(l.el)
                }
            },_initChildViewStorage: function() {
                this.children = new i.ChildViewContainer()
            },close: function() {
                if (this.isClosed) {
                    return
                }
                this.triggerMethod("collection:before:close");
                this.closeChildren();
                this.triggerMethod("collection:closed");
                h.View.prototype.close.apply(this, arguments)
            },closeChildren: function() {
                this.children.each(function(j) {
                    this.removeChildView(j)
                }, this);
                this.checkEmpty()
            }});
        h.CompositeView = h.CollectionView.extend({constructor: function() {
                h.CollectionView.prototype.constructor.apply(this, arguments)
            },_initialEvents: function() {
                this.once("render", function() {
                    if (this.collection) {
                        this.listenTo(this.collection, "add", this.addChildView);
                        this.listenTo(this.collection, "remove", this.removeItemView);
                        this.listenTo(this.collection, "reset", this._renderChildren)
                    }
                })
            },getItemView: function(k) {
                var j = h.getOption(this, "itemView") || this.constructor;
                if (!j) {
                    g("An `itemView` must be specified", "NoItemViewError")
                }
                return j
            },serializeData: function() {
                var j = {};
                if (this.model) {
                    j = this.model.toJSON()
                }
                return j
            },render: function() {
                this.isRendered = true;
                this.isClosed = false;
                this.resetItemViewContainer();
                this.triggerBeforeRender();
                var j = this.renderModel();
                this.$el.html(j);
                this.bindUIElements();
                this.triggerMethod("composite:model:rendered");
                this._renderChildren();
                this.triggerMethod("composite:rendered");
                this.triggerRendered();
                return this
            },_renderChildren: function() {
                if (this.isRendered) {
                    this.triggerMethod("composite:collection:before:render");
                    h.CollectionView.prototype._renderChildren.call(this);
                    this.triggerMethod("composite:collection:rendered")
                }
            },renderModel: function() {
                var k = {};
                k = this.serializeData();
                k = this.mixinTemplateHelpers(k);
                var j = this.getTemplate();
                return h.Renderer.render(j, k)
            },appendBuffer: function(k, j) {
                var l = this.getItemViewContainer(k);
                l.append(j)
            },appendHtml: function(j, l, k) {
                if (j.isBuffering) {
                    j.elBuffer.appendChild(l.el);
                    j._bufferedChildren.push(l)
                } else {
                    var m = this.getItemViewContainer(j);
                    m.append(l.el)
                }
            },getItemViewContainer: function(m) {
                if ("$itemViewContainer" in m) {
                    return m.$itemViewContainer
                }
                var k;
                var l = h.getOption(m, "itemViewContainer");
                if (l) {
                    var j = d.isFunction(l) ? l.call(this) : l;
                    k = m.$(j);
                    if (k.length <= 0) {
                        g("The specified `itemViewContainer` was not found: " + m.itemViewContainer, "ItemViewContainerMissingError")
                    }
                } else {
                    k = m.$el
                }
                m.$itemViewContainer = k;
                return k
            },resetItemViewContainer: function() {
                if (this.$itemViewContainer) {
                    delete this.$itemViewContainer
                }
            }});
        h.Layout = h.ItemView.extend({regionType: h.Region,constructor: function(j) {
                j = j || {};
                this._firstRender = true;
                this._initializeRegions(j);
                h.ItemView.prototype.constructor.call(this, j)
            },render: function() {
                if (this.isClosed) {
                    this._initializeRegions()
                }
                if (this._firstRender) {
                    this._firstRender = false
                } else {
                    if (!this.isClosed) {
                        this._reInitializeRegions()
                    }
                }
                return h.ItemView.prototype.render.apply(this, arguments)
            },close: function() {
                if (this.isClosed) {
                    return
                }
                this.regionManager.close();
                h.ItemView.prototype.close.apply(this, arguments)
            },addRegion: function(j, k) {
                var l = {};
                l[j] = k;
                return this._buildRegions(l)[j]
            },addRegions: function(j) {
                this.regions = d.extend({}, this.regions, j);
                return this._buildRegions(j)
            },removeRegion: function(j) {
                delete this.regions[j];
                return this.regionManager.removeRegion(j)
            },_buildRegions: function(l) {
                var j = this;
                var k = {regionType: h.getOption(this, "regionType"),parentEl: function() {
                        return j.$el
                    }};
                return this.regionManager.addRegions(l, k)
            },_initializeRegions: function(j) {
                var k;
                this._initRegionManager();
                if (d.isFunction(this.regions)) {
                    k = this.regions(j)
                } else {
                    k = this.regions || {}
                }
                this.addRegions(k)
            },_reInitializeRegions: function() {
                this.regionManager.closeRegions();
                this.regionManager.each(function(j) {
                    j.reset()
                })
            },_initRegionManager: function() {
                this.regionManager = new h.RegionManager();
                this.listenTo(this.regionManager, "region:add", function(j, k) {
                    this[j] = k;
                    this.trigger("region:add", j, k)
                });
                this.listenTo(this.regionManager, "region:remove", function(j, k) {
                    delete this[j];
                    this.trigger("region:remove", j, k)
                })
            }});
        h.Behavior = (function(j, l) {
            function k(n, m) {
                this.view = m;
                this.defaults = j.result(this, "defaults") || {};
                this.options = j.extend({}, this.defaults, n);
                this.$ = function() {
                    return this.view.$.apply(this.view, arguments)
                };
                this.initialize.apply(this, arguments)
            }
            j.extend(k.prototype, {initialize: function() {
                },triggerMethod: h.triggerMethod});
            j.extend(k, {extend: l.View.extend});
            return k
        })(d, i);
        h.Behaviors = (function(m, l) {
            function j(n) {
                this.behaviors = j.parseBehaviors(n, n.behaviors);
                j.wrap(n, this.behaviors, ["bindUIElements", "unbindUIElements", "delegateEvents", "undelegateEvents", "onShow", "onClose", "behaviorEvents", "triggerMethod", "setElement"])
            }
            var k = {setElement: function(o, n) {
                    o.apply(this, l.tail(arguments, 2));
                    l.each(n, function(p) {
                        p.$el = this.$el
                    }, this)
                },onShow: function(p, n) {
                    var o = l.tail(arguments, 2);
                    l.each(n, function(q) {
                        m.triggerMethod.apply(q, ["show"].concat(o))
                    });
                    if (l.isFunction(p)) {
                        p.apply(this, o)
                    }
                },onClose: function(o, n) {
                    var p = l.tail(arguments, 2);
                    l.each(n, function(q) {
                        m.triggerMethod.apply(q, ["close"].concat(p))
                    });
                    if (l.isFunction(o)) {
                        o.apply(this, p)
                    }
                },bindUIElements: function(o, n) {
                    o.apply(this);
                    l.invoke(n, o)
                },unbindUIElements: function(o, n) {
                    o.apply(this);
                    l.invoke(n, o)
                },triggerMethod: function(p, n) {
                    var o = l.tail(arguments, 2);
                    p.apply(this, o);
                    l.each(n, function(q) {
                        p.apply(q, o)
                    })
                },delegateEvents: function(p, n) {
                    var o = l.tail(arguments, 2);
                    p.apply(this, o);
                    l.each(n, function(q) {
                        m.bindEntityEvents(this, this.model, m.getOption(q, "modelEvents"));
                        m.bindEntityEvents(this, this.collection, m.getOption(q, "collectionEvents"))
                    }, this)
                },undelegateEvents: function(p, n) {
                    var o = l.tail(arguments, 2);
                    p.apply(this, o);
                    l.each(n, function(q) {
                        m.unbindEntityEvents(this, this.model, m.getOption(q, "modelEvents"));
                        m.unbindEntityEvents(this, this.collection, m.getOption(q, "collectionEvents"))
                    }, this)
                },behaviorEvents: function(q, n) {
                    var o = {};
                    var p = l.result(this, "ui");
                    l.each(n, function(r, t) {
                        var v = {};
                        var w = l.result(r, "events") || {};
                        var s = l.result(r, "ui");
                        var u = l.extend({}, p, s);
                        w = m.normalizeUIKeys(w, u);
                        l.each(l.keys(w), function(z) {
                            var y = (new Array(t + 2)).join(" ");
                            var x = z + y;
                            var A = l.isFunction(w[z]) ? w[z] : r[w[z]];
                            v[x] = l.bind(A, r)
                        });
                        o = l.extend(o, v)
                    });
                    return o
                }};
            l.extend(j, {behaviorsLookup: function() {
                    throw new Error("You must define where your behaviors are stored. See https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.behaviors.md#behaviorslookup")
                },getBehaviorClass: function(n, o) {
                    if (n.behaviorClass) {
                        return n.behaviorClass
                    }
                    return l.isFunction(j.behaviorsLookup) ? j.behaviorsLookup.apply(this, arguments)[o] : j.behaviorsLookup[o]
                },parseBehaviors: function(o, n) {
                    return l.map(n, function(p, q) {
                        var r = j.getBehaviorClass(p, q);
                        return new r(p, o)
                    })
                },wrap: function(o, n, p) {
                    l.each(p, function(q) {
                        o[q] = l.partial(k[q], o[q], n)
                    })
                }});
            return j
        })(h, d);
        h.AppRouter = i.Router.extend({constructor: function(k) {
                i.Router.prototype.constructor.apply(this, arguments);
                this.options = k || {};
                var l = h.getOption(this, "appRoutes");
                var j = this._getController();
                this.processAppRoutes(j, l)
            },appRoute: function(l, k) {
                var j = this._getController();
                this._addAppRoute(j, l, k)
            },processAppRoutes: function(j, l) {
                if (!l) {
                    return
                }
                var k = d.keys(l).reverse();
                d.each(k, function(m) {
                    this._addAppRoute(j, m, l[m])
                }, this)
            },_getController: function() {
                return h.getOption(this, "controller")
            },_addAppRoute: function(j, l, k) {
                var m = j[k];
                if (!m) {
                    g("Method '" + k + "' was not found on the controller")
                }
                this.route(l, k, d.bind(m, j))
            }});
        h.Application = function(j) {
            this._initRegionManager();
            this._initCallbacks = new h.Callbacks();
            this.vent = new i.Wreqr.EventAggregator();
            this.commands = new i.Wreqr.Commands();
            this.reqres = new i.Wreqr.RequestResponse();
            this.submodules = {};
            d.extend(this, j);
            this.triggerMethod = h.triggerMethod
        };
        d.extend(h.Application.prototype, i.Events, {execute: function() {
                this.commands.execute.apply(this.commands, arguments)
            },request: function() {
                return this.reqres.request.apply(this.reqres, arguments)
            },addInitializer: function(j) {
                this._initCallbacks.add(j)
            },start: function(j) {
                this.triggerMethod("initialize:before", j);
                this._initCallbacks.run(j, this);
                this.triggerMethod("initialize:after", j);
                this.triggerMethod("start", j)
            },addRegions: function(j) {
                return this._regionManager.addRegions(j)
            },closeRegions: function() {
                this._regionManager.closeRegions()
            },removeRegion: function(j) {
                this._regionManager.removeRegion(j)
            },getRegion: function(j) {
                return this._regionManager.get(j)
            },module: function(j, m) {
                var l = h.Module.getClass(m);
                var k = f.call(arguments);
                k.unshift(this);
                return l.create.apply(l, k)
            },_initRegionManager: function() {
                this._regionManager = new h.RegionManager();
                this.listenTo(this._regionManager, "region:add", function(j, k) {
                    this[j] = k
                });
                this.listenTo(this._regionManager, "region:remove", function(j, k) {
                    delete this[j]
                })
            }});
        h.Application.extend = h.extend;
        h.Module = function(k, l, j) {
            this.moduleName = k;
            this.options = d.extend({}, this.options, j);
            this.initialize = j.initialize || this.initialize;
            this.submodules = {};
            this._setupInitializersAndFinalizers();
            this.app = l;
            this.startWithParent = true;
            this.triggerMethod = h.triggerMethod;
            if (d.isFunction(this.initialize)) {
                this.initialize(this.options, k, l)
            }
        };
        h.Module.extend = h.extend;
        d.extend(h.Module.prototype, i.Events, {initialize: function() {
            },addInitializer: function(j) {
                this._initializerCallbacks.add(j)
            },addFinalizer: function(j) {
                this._finalizerCallbacks.add(j)
            },start: function(j) {
                if (this._isInitialized) {
                    return
                }
                d.each(this.submodules, function(k) {
                    if (k.startWithParent) {
                        k.start(j)
                    }
                });
                this.triggerMethod("before:start", j);
                this._initializerCallbacks.run(j, this);
                this._isInitialized = true;
                this.triggerMethod("start", j)
            },stop: function() {
                if (!this._isInitialized) {
                    return
                }
                this._isInitialized = false;
                h.triggerMethod.call(this, "before:stop");
                d.each(this.submodules, function(j) {
                    j.stop()
                });
                this._finalizerCallbacks.run(undefined, this);
                this._initializerCallbacks.reset();
                this._finalizerCallbacks.reset();
                h.triggerMethod.call(this, "stop")
            },addDefinition: function(j, k) {
                this._runModuleDefinition(j, k)
            },_runModuleDefinition: function(k, l) {
                if (!k) {
                    return
                }
                var j = d.flatten([this, this.app, i, h, h.$, d, l]);
                k.apply(this, j)
            },_setupInitializersAndFinalizers: function() {
                this._initializerCallbacks = new h.Callbacks();
                this._finalizerCallbacks = new h.Callbacks()
            }});
        d.extend(h.Module, {create: function(p, j, k) {
                var l = p;
                var n = f.call(arguments);
                n.splice(0, 3);
                j = j.split(".");
                var m = j.length;
                var o = [];
                o[m - 1] = k;
                d.each(j, function(q, r) {
                    var s = l;
                    l = this._getModule(s, q, p, k);
                    this._addModuleDefinition(s, l, o[r], n)
                }, this);
                return l
            },_getModule: function(p, m, q, o, l) {
                var k = d.extend({}, o);
                var j = this.getClass(o);
                var n = p[m];
                if (!n) {
                    n = new j(m, q, k);
                    p[m] = n;
                    p.submodules[m] = n
                }
                return n
            },getClass: function(k) {
                var j = h.Module;
                if (!k) {
                    return j
                }
                if (k.prototype instanceof j) {
                    return k
                }
                return k.moduleClass || j
            },_addModuleDefinition: function(o, k, n, j) {
                var m = this._getDefine(n);
                var l = this._getStartWithParent(n, k);
                if (m) {
                    k.addDefinition(m, j)
                }
                this._addStartWithParent(o, k, l)
            },_getStartWithParent: function(l, j) {
                var k;
                if (d.isFunction(l) && (l.prototype instanceof h.Module)) {
                    k = j.constructor.prototype.startWithParent;
                    return d.isUndefined(k) ? true : k
                }
                if (d.isObject(l)) {
                    k = l.startWithParent;
                    return d.isUndefined(k) ? true : k
                }
                return true
            },_getDefine: function(j) {
                if (d.isFunction(j) && !(j.prototype instanceof h.Module)) {
                    return j
                }
                if (d.isObject(j)) {
                    return j.define
                }
                return null
            },_addStartWithParent: function(l, j, k) {
                j.startWithParent = j.startWithParent && k;
                if (!j.startWithParent || !!j.startWithParentIsConfigured) {
                    return
                }
                j.startWithParentIsConfigured = true;
                l.addInitializer(function(m) {
                    if (j.startWithParent) {
                        j.start(m)
                    }
                })
            }});
        return h
    })(this, c, a);
    return c.Marionette
}));
(function(B) {
    var P, aA = "2.6.0", aW = typeof global !== "undefined" ? global : this, ak, U = Math.round, aa, u = 0, e = 1, aP = 2, t = 3, au = 4, r = 5, R = 6, aw = {}, aJ = {_isAMomentObject: null,_i: null,_f: null,_l: null,_strict: null,_isUTC: null,_offset: null,_pf: null,_lang: null}, aj = (typeof module !== "undefined" && module.exports), b = /^\/?Date\((\-?\d+)/i, aZ = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, aC = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, an = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Z = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, f = /\d\d?/, ab = /\d{1,3}/, C = /\d{1,4}/, a7 = /[+\-]?\d{1,6}/, aU = /\d+/, H = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, n = /Z|[\+\-]\d\d:?\d\d/gi, j = /T/i, aL = /[\+\-]?\d+(\.\d{1,3})?/, bb = /\d{1,2}/, Y = /\d/, p = /\d\d/, aY = /\d{3}/, aK = /\d{4}/, af = /[+-]?\d{6}/, W = /[+-]?\d+/, aI = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, S = "YYYY-MM-DDTHH:mm:ssZ", aX = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], E = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], X = /([\+\-]|\d\d)/gi, aE = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), A = {Milliseconds: 1,Seconds: 1000,Minutes: 60000,Hours: 3600000,Days: 86400000,Months: 2592000000,Years: 31536000000}, c = {ms: "millisecond",s: "second",m: "minute",h: "hour",d: "day",D: "date",w: "week",W: "isoWeek",M: "month",Q: "quarter",y: "year",DDD: "dayOfYear",e: "weekday",E: "isoWeekday",gg: "weekYear",GG: "isoWeekYear"}, aT = {dayofyear: "dayOfYear",isoweekday: "isoWeekday",isoweek: "isoWeek",weekyear: "weekYear",isoweekyear: "isoWeekYear"}, ai = {}, aO = "DDD w W M D d".split(" "), al = "M D H h m s w W".split(" "), aQ = {M: function() {
            return this.month() + 1
        },MMM: function(i) {
            return this.lang().monthsShort(this, i)
        },MMMM: function(i) {
            return this.lang().months(this, i)
        },D: function() {
            return this.date()
        },DDD: function() {
            return this.dayOfYear()
        },d: function() {
            return this.day()
        },dd: function(i) {
            return this.lang().weekdaysMin(this, i)
        },ddd: function(i) {
            return this.lang().weekdaysShort(this, i)
        },dddd: function(i) {
            return this.lang().weekdays(this, i)
        },w: function() {
            return this.week()
        },W: function() {
            return this.isoWeek()
        },YY: function() {
            return I(this.year() % 100, 2)
        },YYYY: function() {
            return I(this.year(), 4)
        },YYYYY: function() {
            return I(this.year(), 5)
        },YYYYYY: function() {
            var bc = this.year(), i = bc >= 0 ? "+" : "-";
            return i + I(Math.abs(bc), 6)
        },gg: function() {
            return I(this.weekYear() % 100, 2)
        },gggg: function() {
            return I(this.weekYear(), 4)
        },ggggg: function() {
            return I(this.weekYear(), 5)
        },GG: function() {
            return I(this.isoWeekYear() % 100, 2)
        },GGGG: function() {
            return I(this.isoWeekYear(), 4)
        },GGGGG: function() {
            return I(this.isoWeekYear(), 5)
        },e: function() {
            return this.weekday()
        },E: function() {
            return this.isoWeekday()
        },a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), true)
        },A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), false)
        },H: function() {
            return this.hours()
        },h: function() {
            return this.hours() % 12 || 12
        },m: function() {
            return this.minutes()
        },s: function() {
            return this.seconds()
        },S: function() {
            return K(this.milliseconds() / 100)
        },SS: function() {
            return I(K(this.milliseconds() / 10), 2)
        },SSS: function() {
            return I(this.milliseconds(), 3)
        },SSSS: function() {
            return I(this.milliseconds(), 3)
        },Z: function() {
            var bc = -this.zone(), i = "+";
            if (bc < 0) {
                bc = -bc;
                i = "-"
            }
            return i + I(K(bc / 60), 2) + ":" + I(K(bc) % 60, 2)
        },ZZ: function() {
            var bc = -this.zone(), i = "+";
            if (bc < 0) {
                bc = -bc;
                i = "-"
            }
            return i + I(K(bc / 60), 2) + I(K(bc) % 60, 2)
        },z: function() {
            return this.zoneAbbr()
        },zz: function() {
            return this.zoneName()
        },X: function() {
            return this.unix()
        },Q: function() {
            return this.quarter()
        }}, T = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];
    function ad() {
        return {empty: false,unusedTokens: [],unusedInput: [],overflow: -2,charsLeftOver: 0,nullInput: false,invalidMonth: null,invalidFormat: false,userInvalidated: false,iso: false}
    }
    function a9(bc, i) {
        var be = true;
        function bd() {
            if (P.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
                console.warn("Deprecation warning: " + bc)
            }
        }
        return ay(function() {
            if (be) {
                bd();
                be = false
            }
            return i.apply(this, arguments)
        }, i)
    }
    function M(bc, i) {
        return function(bd) {
            return I(bc.call(this, bd), i)
        }
    }
    function g(i, bc) {
        return function(bd) {
            return this.lang().ordinal(i.call(this, bd), bc)
        }
    }
    while (aO.length) {
        aa = aO.pop();
        aQ[aa + "o"] = g(aQ[aa], aa)
    }
    while (al.length) {
        aa = al.pop();
        aQ[aa + aa] = M(aQ[aa], 2)
    }
    aQ.DDDD = M(aQ.DDD, 3);
    function aF() {
    }
    function J(i) {
        a3(i);
        ay(this, i)
    }
    function ac(bg) {
        var bi = l(bg), bh = bi.year || 0, bc = bi.quarter || 0, bd = bi.month || 0, i = bi.week || 0, bl = bi.day || 0, bj = bi.hour || 0, bf = bi.minute || 0, bk = bi.second || 0, be = bi.millisecond || 0;
        this._milliseconds = +be + bk * 1000 + bf * 60000 + bj * 3600000;
        this._days = +bl + i * 7;
        this._months = +bd + bc * 3 + bh * 12;
        this._data = {};
        this._bubble()
    }
    function ay(bd, bc) {
        for (var be in bc) {
            if (bc.hasOwnProperty(be)) {
                bd[be] = bc[be]
            }
        }
        if (bc.hasOwnProperty("toString")) {
            bd.toString = bc.toString
        }
        if (bc.hasOwnProperty("valueOf")) {
            bd.valueOf = bc.valueOf
        }
        return bd
    }
    function a5(bd) {
        var bc = {}, be;
        for (be in bd) {
            if (bd.hasOwnProperty(be) && aJ.hasOwnProperty(be)) {
                bc[be] = bd[be]
            }
        }
        return bc
    }
    function k(i) {
        if (i < 0) {
            return Math.ceil(i)
        } else {
            return Math.floor(i)
        }
    }
    function I(bf, be, bd) {
        var bc = "" + Math.abs(bf), i = bf >= 0;
        while (bc.length < be) {
            bc = "0" + bc
        }
        return (i ? (bd ? "+" : "") : "-") + bc
    }
    function D(bd, bg, bf, be) {
        var bc = bg._milliseconds, bh = bg._days, i = bg._months;
        be = be == null ? true : be;
        if (bc) {
            bd._d.setTime(+bd._d + bc * bf)
        }
        if (bh) {
            aM(bd, "Date", ba(bd, "Date") + bh * bf)
        }
        if (i) {
            a6(bd, ba(bd, "Month") + i * bf)
        }
        if (be) {
            P.updateOffset(bd, bh || i)
        }
    }
    function a(i) {
        return Object.prototype.toString.call(i) === "[object Array]"
    }
    function d(i) {
        return Object.prototype.toString.call(i) === "[object Date]" || i instanceof Date
    }
    function aN(bh, bg, bd) {
        var bc = Math.min(bh.length, bg.length), be = Math.abs(bh.length - bg.length), bi = 0, bf;
        for (bf = 0; bf < bc; bf++) {
            if ((bd && bh[bf] !== bg[bf]) || (!bd && K(bh[bf]) !== K(bg[bf]))) {
                bi++
            }
        }
        return bi + be
    }
    function aS(bc) {
        if (bc) {
            var i = bc.toLowerCase().replace(/(.)s$/, "$1");
            bc = c[bc] || aT[i] || i
        }
        return bc
    }
    function l(bd) {
        var bc = {}, i, be;
        for (be in bd) {
            if (bd.hasOwnProperty(be)) {
                i = aS(be);
                if (i) {
                    bc[i] = bd[be]
                }
            }
        }
        return bc
    }
    function aq(bc) {
        var i, bd;
        if (bc.indexOf("week") === 0) {
            i = 7;
            bd = "day"
        } else {
            if (bc.indexOf("month") === 0) {
                i = 12;
                bd = "month"
            } else {
                return
            }
        }
        P[bc] = function(bi, bf) {
            var bh, be, bj = P.fn._lang[bc], bg = [];
            if (typeof bi === "number") {
                bf = bi;
                bi = B
            }
            be = function(bl) {
                var bk = P().utc().set(bd, bl);
                return bj.call(P.fn._lang, bk, bi || "")
            };
            if (bf != null) {
                return be(bf)
            } else {
                for (bh = 0; bh < i; bh++) {
                    bg.push(be(bh))
                }
                return bg
            }
        }
    }
    function K(i) {
        var bd = +i, bc = 0;
        if (bd !== 0 && isFinite(bd)) {
            if (bd >= 0) {
                bc = Math.floor(bd)
            } else {
                bc = Math.ceil(bd)
            }
        }
        return bc
    }
    function a1(i, bc) {
        return new Date(Date.UTC(i, bc + 1, 0)).getUTCDate()
    }
    function aD(i, bd, bc) {
        return y(P([i, 11, 31 + bd - bc]), bd, bc).week
    }
    function aV(i) {
        return aH(i) ? 366 : 365
    }
    function aH(i) {
        return (i % 4 === 0 && i % 100 !== 0) || i % 400 === 0
    }
    function a3(i) {
        var bc;
        if (i._a && i._pf.overflow === -2) {
            bc = i._a[e] < 0 || i._a[e] > 11 ? e : i._a[aP] < 1 || i._a[aP] > a1(i._a[u], i._a[e]) ? aP : i._a[t] < 0 || i._a[t] > 23 ? t : i._a[au] < 0 || i._a[au] > 59 ? au : i._a[r] < 0 || i._a[r] > 59 ? r : i._a[R] < 0 || i._a[R] > 999 ? R : -1;
            if (i._pf._overflowDayOfYear && (bc < u || bc > aP)) {
                bc = aP
            }
            i._pf.overflow = bc
        }
    }
    function az(i) {
        if (i._isValid == null) {
            i._isValid = !isNaN(i._d.getTime()) && i._pf.overflow < 0 && !i._pf.empty && !i._pf.invalidMonth && !i._pf.nullInput && !i._pf.invalidFormat && !i._pf.userInvalidated;
            if (i._strict) {
                i._isValid = i._isValid && i._pf.charsLeftOver === 0 && i._pf.unusedTokens.length === 0
            }
        }
        return i._isValid
    }
    function z(i) {
        return i ? i.toLowerCase().replace("_", "-") : i
    }
    function v(i, bc) {
        return bc._isUTC ? P(i).zone(bc._offset || 0) : P(i).local()
    }
    ay(aF.prototype, {set: function(bc) {
            var be, bd;
            for (bd in bc) {
                be = bc[bd];
                if (typeof be === "function") {
                    this[bd] = be
                } else {
                    this["_" + bd] = be
                }
            }
        },_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months: function(i) {
            return this._months[i.month()]
        },_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort: function(i) {
            return this._monthsShort[i.month()]
        },monthsParse: function(bc) {
            var bd, bf, be;
            if (!this._monthsParse) {
                this._monthsParse = []
            }
            for (bd = 0; bd < 12; bd++) {
                if (!this._monthsParse[bd]) {
                    bf = P.utc([2000, bd]);
                    be = "^" + this.months(bf, "") + "|^" + this.monthsShort(bf, "");
                    this._monthsParse[bd] = new RegExp(be.replace(".", ""), "i")
                }
                if (this._monthsParse[bd].test(bc)) {
                    return bd
                }
            }
        },_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays: function(i) {
            return this._weekdays[i.day()]
        },_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort: function(i) {
            return this._weekdaysShort[i.day()]
        },_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin: function(i) {
            return this._weekdaysMin[i.day()]
        },weekdaysParse: function(bf) {
            var bc, be, bd;
            if (!this._weekdaysParse) {
                this._weekdaysParse = []
            }
            for (bc = 0; bc < 7; bc++) {
                if (!this._weekdaysParse[bc]) {
                    be = P([2000, 1]).day(bc);
                    bd = "^" + this.weekdays(be, "") + "|^" + this.weekdaysShort(be, "") + "|^" + this.weekdaysMin(be, "");
                    this._weekdaysParse[bc] = new RegExp(bd.replace(".", ""), "i")
                }
                if (this._weekdaysParse[bc].test(bf)) {
                    return bc
                }
            }
        },_longDateFormat: {LT: "h:mm A",L: "MM/DD/YYYY",LL: "MMMM D YYYY",LLL: "MMMM D YYYY LT",LLLL: "dddd, MMMM D YYYY LT"},longDateFormat: function(bc) {
            var i = this._longDateFormat[bc];
            if (!i && this._longDateFormat[bc.toUpperCase()]) {
                i = this._longDateFormat[bc.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(bd) {
                    return bd.slice(1)
                });
                this._longDateFormat[bc] = i
            }
            return i
        },isPM: function(i) {
            return ((i + "").toLowerCase().charAt(0) === "p")
        },_meridiemParse: /[ap]\.?m?\.?/i,meridiem: function(i, bc, bd) {
            if (i > 11) {
                return bd ? "pm" : "PM"
            } else {
                return bd ? "am" : "AM"
            }
        },_calendar: {sameDay: "[Today at] LT",nextDay: "[Tomorrow at] LT",nextWeek: "dddd [at] LT",lastDay: "[Yesterday at] LT",lastWeek: "[Last] dddd [at] LT",sameElse: "L"},calendar: function(bc, bd) {
            var i = this._calendar[bc];
            return typeof i === "function" ? i.apply(bd) : i
        },_relativeTime: {future: "in %s",past: "%s ago",s: "a few seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"},relativeTime: function(be, bd, bc, bf) {
            var i = this._relativeTime[bc];
            return (typeof i === "function") ? i(be, bd, bc, bf) : i.replace(/%d/i, be)
        },pastFuture: function(bd, i) {
            var bc = this._relativeTime[bd > 0 ? "future" : "past"];
            return typeof bc === "function" ? bc(i) : bc.replace(/%s/i, i)
        },ordinal: function(i) {
            return this._ordinal.replace("%d", i)
        },_ordinal: "%d",preparse: function(i) {
            return i
        },postformat: function(i) {
            return i
        },week: function(i) {
            return y(i, this._week.dow, this._week.doy).week
        },_week: {dow: 0,doy: 6},_invalidDate: "Invalid date",invalidDate: function() {
            return this._invalidDate
        }});
    function ah(bc, i) {
        i.abbr = bc;
        if (!aw[bc]) {
            aw[bc] = new aF()
        }
        aw[bc].set(i);
        return aw[bc]
    }
    function a0(i) {
        delete aw[i]
    }
    function ax(bg) {
        var bf = 0, bd, bi, bh, be, bc = function(i) {
            if (!aw[i] && aj) {
                try {
                    require("./lang/" + i)
                } catch (bj) {
                }
            }
            return aw[i]
        };
        if (!bg) {
            return P.fn._lang
        }
        if (!a(bg)) {
            bi = bc(bg);
            if (bi) {
                return bi
            }
            bg = [bg]
        }
        while (bf < bg.length) {
            be = z(bg[bf]).split("-");
            bd = be.length;
            bh = z(bg[bf + 1]);
            bh = bh ? bh.split("-") : null;
            while (bd > 0) {
                bi = bc(be.slice(0, bd).join("-"));
                if (bi) {
                    return bi
                }
                if (bh && bh.length >= bd && aN(be, bh, true) >= bd - 1) {
                    break
                }
                bd--
            }
            bf++
        }
        return P.fn._lang
    }
    function ag(i) {
        if (i.match(/\[[\s\S]/)) {
            return i.replace(/^\[|\]$/g, "")
        }
        return i.replace(/\\/g, "")
    }
    function q(be) {
        var bf = be.match(an), bc, bd;
        for (bc = 0, bd = bf.length; bc < bd; bc++) {
            if (aQ[bf[bc]]) {
                bf[bc] = aQ[bf[bc]]
            } else {
                bf[bc] = ag(bf[bc])
            }
        }
        return function(bg) {
            var i = "";
            for (bc = 0; bc < bd; bc++) {
                i += bf[bc] instanceof Function ? bf[bc].call(bg, be) : bf[bc]
            }
            return i
        }
    }
    function am(i, bc) {
        if (!i.isValid()) {
            return i.lang().invalidDate()
        }
        bc = a8(bc, i.lang());
        if (!ai[bc]) {
            ai[bc] = q(bc)
        }
        return ai[bc](i)
    }
    function a8(be, bf) {
        var bc = 5;
        function bd(i) {
            return bf.longDateFormat(i) || i
        }
        Z.lastIndex = 0;
        while (bc >= 0 && Z.test(be)) {
            be = be.replace(Z, bd);
            Z.lastIndex = 0;
            bc -= 1
        }
        return be
    }
    function ap(be, bd) {
        var bc, i = bd._strict;
        switch (be) {
            case "Q":
                return Y;
            case "DDDD":
                return aY;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return i ? aK : C;
            case "Y":
            case "G":
            case "g":
                return W;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return i ? af : a7;
            case "S":
                if (i) {
                    return Y
                }
            case "SS":
                if (i) {
                    return p
                }
            case "SSS":
                if (i) {
                    return aY
                }
            case "DDD":
                return ab;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return H;
            case "a":
            case "A":
                return ax(bd._l)._meridiemParse;
            case "X":
                return aL;
            case "Z":
            case "ZZ":
                return n;
            case "T":
                return j;
            case "SSSS":
                return aU;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return i ? p : f;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return f;
            case "Do":
                return bb;
            default:
                bc = new RegExp(a4(at(be.replace("\\", "")), "i"));
                return bc
        }
    }
    function w(bc) {
        bc = bc || "";
        var i = (bc.match(n) || []), bf = i[i.length - 1] || [], be = (bf + "").match(X) || ["-", 0, 0], bd = +(be[1] * 60) + K(be[2]);
        return be[0] === "+" ? -bd : bd
    }
    function ar(bf, bd, be) {
        var bc, i = be._a;
        switch (bf) {
            case "Q":
                if (bd != null) {
                    i[e] = (K(bd) - 1) * 3
                }
                break;
            case "M":
            case "MM":
                if (bd != null) {
                    i[e] = K(bd) - 1
                }
                break;
            case "MMM":
            case "MMMM":
                bc = ax(be._l).monthsParse(bd);
                if (bc != null) {
                    i[e] = bc
                } else {
                    be._pf.invalidMonth = bd
                }
                break;
            case "D":
            case "DD":
                if (bd != null) {
                    i[aP] = K(bd)
                }
                break;
            case "Do":
                if (bd != null) {
                    i[aP] = K(parseInt(bd, 10))
                }
                break;
            case "DDD":
            case "DDDD":
                if (bd != null) {
                    be._dayOfYear = K(bd)
                }
                break;
            case "YY":
                i[u] = P.parseTwoDigitYear(bd);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                i[u] = K(bd);
                break;
            case "a":
            case "A":
                be._isPm = ax(be._l).isPM(bd);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                i[t] = K(bd);
                break;
            case "m":
            case "mm":
                i[au] = K(bd);
                break;
            case "s":
            case "ss":
                i[r] = K(bd);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                i[R] = K(("0." + bd) * 1000);
                break;
            case "X":
                be._d = new Date(parseFloat(bd) * 1000);
                break;
            case "Z":
            case "ZZ":
                be._useUTC = true;
                be._tzm = w(bd);
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "dd":
            case "ddd":
            case "dddd":
            case "e":
            case "E":
                bf = bf.substr(0, 1);
            case "gg":
            case "gggg":
            case "GG":
            case "GGGG":
            case "GGGGG":
                bf = bf.substr(0, 2);
                if (bd) {
                    be._w = be._w || {};
                    be._w[bf] = bd
                }
                break
        }
    }
    function ae(bg) {
        var bi, bh, bl = [], be, bk, bd, bm, bn, bf, bj, bc;
        if (bg._d) {
            return
        }
        be = m(bg);
        if (bg._w && bg._a[aP] == null && bg._a[e] == null) {
            bd = function(bo) {
                var i = parseInt(bo, 10);
                return bo ? (bo.length < 3 ? (i > 68 ? 1900 + i : 2000 + i) : i) : (bg._a[u] == null ? P().weekYear() : bg._a[u])
            };
            bm = bg._w;
            if (bm.GG != null || bm.W != null || bm.E != null) {
                bn = s(bd(bm.GG), bm.W || 1, bm.E, 4, 1)
            } else {
                bf = ax(bg._l);
                bj = bm.d != null ? a2(bm.d, bf) : (bm.e != null ? parseInt(bm.e, 10) + bf._week.dow : 0);
                bc = parseInt(bm.w, 10) || 1;
                if (bm.d != null && bj < bf._week.dow) {
                    bc++
                }
                bn = s(bd(bm.gg), bc, bj, bf._week.doy, bf._week.dow)
            }
            bg._a[u] = bn.year;
            bg._dayOfYear = bn.dayOfYear
        }
        if (bg._dayOfYear) {
            bk = bg._a[u] == null ? be[u] : bg._a[u];
            if (bg._dayOfYear > aV(bk)) {
                bg._pf._overflowDayOfYear = true
            }
            bh = F(bk, 0, bg._dayOfYear);
            bg._a[e] = bh.getUTCMonth();
            bg._a[aP] = bh.getUTCDate()
        }
        for (bi = 0; bi < 3 && bg._a[bi] == null; ++bi) {
            bg._a[bi] = bl[bi] = be[bi]
        }
        for (; bi < 7; bi++) {
            bg._a[bi] = bl[bi] = (bg._a[bi] == null) ? (bi === 2 ? 1 : 0) : bg._a[bi]
        }
        bl[t] += K((bg._tzm || 0) / 60);
        bl[au] += K((bg._tzm || 0) % 60);
        bg._d = (bg._useUTC ? F : ao).apply(null, bl)
    }
    function aB(bc) {
        var i;
        if (bc._d) {
            return
        }
        i = l(bc._i);
        bc._a = [i.year, i.month, i.day, i.hour, i.minute, i.second, i.millisecond];
        ae(bc)
    }
    function m(bc) {
        var i = new Date();
        if (bc._useUTC) {
            return [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()]
        } else {
            return [i.getFullYear(), i.getMonth(), i.getDate()]
        }
    }
    function O(bf) {
        bf._a = [];
        bf._pf.empty = true;
        var be = ax(bf._l), bi = "" + bf._i, bh, bd, bl, bg, bk, bc = bi.length, bj = 0;
        bl = a8(bf._f, be).match(an) || [];
        for (bh = 0; bh < bl.length; bh++) {
            bg = bl[bh];
            bd = (bi.match(ap(bg, bf)) || [])[0];
            if (bd) {
                bk = bi.substr(0, bi.indexOf(bd));
                if (bk.length > 0) {
                    bf._pf.unusedInput.push(bk)
                }
                bi = bi.slice(bi.indexOf(bd) + bd.length);
                bj += bd.length
            }
            if (aQ[bg]) {
                if (bd) {
                    bf._pf.empty = false
                } else {
                    bf._pf.unusedTokens.push(bg)
                }
                ar(bg, bd, bf)
            } else {
                if (bf._strict && !bd) {
                    bf._pf.unusedTokens.push(bg)
                }
            }
        }
        bf._pf.charsLeftOver = bc - bj;
        if (bi.length > 0) {
            bf._pf.unusedInput.push(bi)
        }
        if (bf._isPm && bf._a[t] < 12) {
            bf._a[t] += 12
        }
        if (bf._isPm === false && bf._a[t] === 12) {
            bf._a[t] = 0
        }
        ae(bf);
        a3(bf)
    }
    function at(i) {
        return i.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(bc, bg, bf, be, bd) {
            return bg || bf || be || bd
        })
    }
    function a4(i) {
        return i.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function aR(bc) {
        var bg, be, bf, bd, bh;
        if (bc._f.length === 0) {
            bc._pf.invalidFormat = true;
            bc._d = new Date(NaN);
            return
        }
        for (bd = 0; bd < bc._f.length; bd++) {
            bh = 0;
            bg = ay({}, bc);
            bg._pf = ad();
            bg._f = bc._f[bd];
            O(bg);
            if (!az(bg)) {
                continue
            }
            bh += bg._pf.charsLeftOver;
            bh += bg._pf.unusedTokens.length * 10;
            bg._pf.score = bh;
            if (bf == null || bh < bf) {
                bf = bh;
                be = bg
            }
        }
        ay(bc, be || bg)
    }
    function h(bf) {
        var bg, bc, be = bf._i, bd = aI.exec(be);
        if (bd) {
            bf._pf.iso = true;
            for (bg = 0, bc = aX.length; bg < bc; bg++) {
                if (aX[bg][1].exec(be)) {
                    bf._f = aX[bg][0] + (bd[6] || " ");
                    break
                }
            }
            for (bg = 0, bc = E.length; bg < bc; bg++) {
                if (E[bg][1].exec(be)) {
                    bf._f += E[bg][0];
                    break
                }
            }
            if (be.match(n)) {
                bf._f += "Z"
            }
            O(bf)
        } else {
            P.createFromInputFallback(bf)
        }
    }
    function N(bd) {
        var bc = bd._i, i = b.exec(bc);
        if (bc === B) {
            bd._d = new Date()
        } else {
            if (i) {
                bd._d = new Date(+i[1])
            } else {
                if (typeof bc === "string") {
                    h(bd)
                } else {
                    if (a(bc)) {
                        bd._a = bc.slice(0);
                        ae(bd)
                    } else {
                        if (d(bc)) {
                            bd._d = new Date(+bc)
                        } else {
                            if (typeof (bc) === "object") {
                                aB(bd)
                            } else {
                                if (typeof (bc) === "number") {
                                    bd._d = new Date(bc)
                                } else {
                                    P.createFromInputFallback(bd)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function ao(bi, i, bg, bf, bh, be, bd) {
        var bc = new Date(bi, i, bg, bf, bh, be, bd);
        if (bi < 1970) {
            bc.setFullYear(bi)
        }
        return bc
    }
    function F(bc) {
        var i = new Date(Date.UTC.apply(null, arguments));
        if (bc < 1970) {
            i.setUTCFullYear(bc)
        }
        return i
    }
    function a2(i, bc) {
        if (typeof i === "string") {
            if (!isNaN(i)) {
                i = parseInt(i, 10)
            } else {
                i = bc.weekdaysParse(i);
                if (typeof i !== "number") {
                    return null
                }
            }
        }
        return i
    }
    function aG(i, bd, bc, be, bf) {
        return bf.relativeTime(bd || 1, !!bc, i, be)
    }
    function x(bd, i, bc) {
        var bi = U(Math.abs(bd) / 1000), be = U(bi / 60), bh = U(be / 60), bj = U(bh / 24), bf = U(bj / 365), bg = bi < 45 && ["s", bi] || be === 1 && ["m"] || be < 45 && ["mm", be] || bh === 1 && ["h"] || bh < 22 && ["hh", bh] || bj === 1 && ["d"] || bj <= 25 && ["dd", bj] || bj <= 45 && ["M"] || bj < 345 && ["MM", U(bj / 30)] || bf === 1 && ["y"] || ["yy", bf];
        bg[2] = i;
        bg[3] = bd > 0;
        bg[4] = bc;
        return aG.apply({}, bg)
    }
    function y(bf, bd, bg) {
        var bc = bg - bd, i = bg - bf.day(), be;
        if (i > bc) {
            i -= 7
        }
        if (i < bc - 7) {
            i += 7
        }
        be = P(bf).add("d", i);
        return {week: Math.ceil(be.dayOfYear() / 7),year: be.year()}
    }
    function s(bf, be, bg, bi, i) {
        var bh = F(bf, 0, 1).getUTCDay(), bd, bc;
        bg = bg != null ? bg : i;
        bd = i - bh + (bh > bi ? 7 : 0) - (bh < i ? 7 : 0);
        bc = 7 * (be - 1) + (bg - i) + bd + 1;
        return {year: bc > 0 ? bf : bf - 1,dayOfYear: bc > 0 ? bc : aV(bf - 1) + bc}
    }
    function L(bc) {
        var i = bc._i, bd = bc._f;
        if (i === null || (bd === B && i === "")) {
            return P.invalid({nullInput: true})
        }
        if (typeof i === "string") {
            bc._i = i = ax().preparse(i)
        }
        if (P.isMoment(i)) {
            bc = a5(i);
            bc._d = new Date(+i._d)
        } else {
            if (bd) {
                if (a(bd)) {
                    aR(bc)
                } else {
                    O(bc)
                }
            } else {
                N(bc)
            }
        }
        return new J(bc)
    }
    P = function(bc, bd, be, i) {
        var bf;
        if (typeof (be) === "boolean") {
            i = be;
            be = B
        }
        bf = {};
        bf._isAMomentObject = true;
        bf._i = bc;
        bf._f = bd;
        bf._l = be;
        bf._strict = i;
        bf._isUTC = false;
        bf._pf = ad();
        return L(bf)
    };
    P.suppressDeprecationWarnings = false;
    P.createFromInputFallback = a9("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(i) {
        i._d = new Date(i._i)
    });
    P.utc = function(bc, bd, be, i) {
        var bf;
        if (typeof (be) === "boolean") {
            i = be;
            be = B
        }
        bf = {};
        bf._isAMomentObject = true;
        bf._useUTC = true;
        bf._isUTC = true;
        bf._l = be;
        bf._i = bc;
        bf._f = bd;
        bf._strict = i;
        bf._pf = ad();
        return L(bf).utc()
    };
    P.unix = function(i) {
        return P(i * 1000)
    };
    P.duration = function(bc, bg) {
        var bh = bc, bf = null, i, be, bd;
        if (P.isDuration(bc)) {
            bh = {ms: bc._milliseconds,d: bc._days,M: bc._months}
        } else {
            if (typeof bc === "number") {
                bh = {};
                if (bg) {
                    bh[bg] = bc
                } else {
                    bh.milliseconds = bc
                }
            } else {
                if (!!(bf = aZ.exec(bc))) {
                    i = (bf[1] === "-") ? -1 : 1;
                    bh = {y: 0,d: K(bf[aP]) * i,h: K(bf[t]) * i,m: K(bf[au]) * i,s: K(bf[r]) * i,ms: K(bf[R]) * i}
                } else {
                    if (!!(bf = aC.exec(bc))) {
                        i = (bf[1] === "-") ? -1 : 1;
                        bd = function(bj) {
                            var bi = bj && parseFloat(bj.replace(",", "."));
                            return (isNaN(bi) ? 0 : bi) * i
                        };
                        bh = {y: bd(bf[2]),M: bd(bf[3]),d: bd(bf[4]),h: bd(bf[5]),m: bd(bf[6]),s: bd(bf[7]),w: bd(bf[8])}
                    }
                }
            }
        }
        be = new ac(bh);
        if (P.isDuration(bc) && bc.hasOwnProperty("_lang")) {
            be._lang = bc._lang
        }
        return be
    };
    P.version = aA;
    P.defaultFormat = S;
    P.momentProperties = aJ;
    P.updateOffset = function() {
    };
    P.lang = function(bc, i) {
        var bd;
        if (!bc) {
            return P.fn._lang._abbr
        }
        if (i) {
            ah(z(bc), i)
        } else {
            if (i === null) {
                a0(bc);
                bc = "en"
            } else {
                if (!aw[bc]) {
                    ax(bc)
                }
            }
        }
        bd = P.duration.fn._lang = P.fn._lang = ax(bc);
        return bd._abbr
    };
    P.langData = function(i) {
        if (i && i._lang && i._lang._abbr) {
            i = i._lang._abbr
        }
        return ax(i)
    };
    P.isMoment = function(i) {
        return i instanceof J || (i != null && i.hasOwnProperty("_isAMomentObject"))
    };
    P.isDuration = function(i) {
        return i instanceof ac
    };
    for (aa = T.length - 1; aa >= 0; --aa) {
        aq(T[aa])
    }
    P.normalizeUnits = function(i) {
        return aS(i)
    };
    P.invalid = function(bc) {
        var i = P.utc(NaN);
        if (bc != null) {
            ay(i._pf, bc)
        } else {
            i._pf.userInvalidated = true
        }
        return i
    };
    P.parseZone = function() {
        return P.apply(null, arguments).parseZone()
    };
    P.parseTwoDigitYear = function(i) {
        return K(i) + (K(i) > 68 ? 1900 : 2000)
    };
    ay(P.fn = J.prototype, {clone: function() {
            return P(this)
        },valueOf: function() {
            return +this._d + ((this._offset || 0) * 60000)
        },unix: function() {
            return Math.floor(+this / 1000)
        },toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },toISOString: function() {
            var i = P(this).utc();
            if (0 < i.year() && i.year() <= 9999) {
                return am(i, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            } else {
                return am(i, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }
        },toArray: function() {
            var i = this;
            return [i.year(), i.month(), i.date(), i.hours(), i.minutes(), i.seconds(), i.milliseconds()]
        },isValid: function() {
            return az(this)
        },isDSTShifted: function() {
            if (this._a) {
                return this.isValid() && aN(this._a, (this._isUTC ? P.utc(this._a) : P(this._a)).toArray()) > 0
            }
            return false
        },parsingFlags: function() {
            return ay({}, this._pf)
        },invalidAt: function() {
            return this._pf.overflow
        },utc: function() {
            return this.zone(0)
        },local: function() {
            this.zone(0);
            this._isUTC = false;
            return this
        },format: function(bc) {
            var i = am(this, bc || P.defaultFormat);
            return this.lang().postformat(i)
        },add: function(i, bd) {
            var bc;
            if (typeof i === "string") {
                bc = P.duration(+bd, i)
            } else {
                bc = P.duration(i, bd)
            }
            D(this, bc, 1);
            return this
        },subtract: function(i, bd) {
            var bc;
            if (typeof i === "string") {
                bc = P.duration(+bd, i)
            } else {
                bc = P.duration(i, bd)
            }
            D(this, bc, -1);
            return this
        },diff: function(bf, be, i) {
            var bg = v(bf, this), bc = (this.zone() - bg.zone()) * 60000, bh, bd;
            be = aS(be);
            if (be === "year" || be === "month") {
                bh = (this.daysInMonth() + bg.daysInMonth()) * 43200000;
                bd = ((this.year() - bg.year()) * 12) + (this.month() - bg.month());
                bd += ((this - P(this).startOf("month")) - (bg - P(bg).startOf("month"))) / bh;
                bd -= ((this.zone() - P(this).startOf("month").zone()) - (bg.zone() - P(bg).startOf("month").zone())) * 60000 / bh;
                if (be === "year") {
                    bd = bd / 12
                }
            } else {
                bh = (this - bg);
                bd = be === "second" ? bh / 1000 : be === "minute" ? bh / 60000 : be === "hour" ? bh / 3600000 : be === "day" ? (bh - bc) / 86400000 : be === "week" ? (bh - bc) / 604800000 : bh
            }
            return i ? bd : k(bd)
        },from: function(bc, i) {
            return P.duration(this.diff(bc)).lang(this.lang()._abbr).humanize(!i)
        },fromNow: function(i) {
            return this.from(P(), i)
        },calendar: function() {
            var i = v(P(), this).startOf("day"), bd = this.diff(i, "days", true), bc = bd < -6 ? "sameElse" : bd < -1 ? "lastWeek" : bd < 0 ? "lastDay" : bd < 1 ? "sameDay" : bd < 2 ? "nextDay" : bd < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(bc, this))
        },isLeapYear: function() {
            return aH(this.year())
        },isDST: function() {
            return (this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone())
        },day: function(bc) {
            var i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (bc != null) {
                bc = a2(bc, this.lang());
                return this.add({d: bc - i})
            } else {
                return i
            }
        },month: o("Month", true),startOf: function(i) {
            i = aS(i);
            switch (i) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            if (i === "week") {
                this.weekday(0)
            } else {
                if (i === "isoWeek") {
                    this.isoWeekday(1)
                }
            }
            if (i === "quarter") {
                this.month(Math.floor(this.month() / 3) * 3)
            }
            return this
        },endOf: function(i) {
            i = aS(i);
            return this.startOf(i).add((i === "isoWeek" ? "week" : i), 1).subtract("ms", 1)
        },isAfter: function(bc, i) {
            i = typeof i !== "undefined" ? i : "millisecond";
            return +this.clone().startOf(i) > +P(bc).startOf(i)
        },isBefore: function(bc, i) {
            i = typeof i !== "undefined" ? i : "millisecond";
            return +this.clone().startOf(i) < +P(bc).startOf(i)
        },isSame: function(bc, i) {
            i = i || "ms";
            return +this.clone().startOf(i) === +v(bc, this).startOf(i)
        },min: function(i) {
            i = P.apply(null, arguments);
            return i < this ? this : i
        },max: function(i) {
            i = P.apply(null, arguments);
            return i > this ? this : i
        },zone: function(i, bc) {
            var bd = this._offset || 0;
            if (i != null) {
                if (typeof i === "string") {
                    i = w(i)
                }
                if (Math.abs(i) < 16) {
                    i = i * 60
                }
                this._offset = i;
                this._isUTC = true;
                if (bd !== i) {
                    if (!bc || this._changeInProgress) {
                        D(this, P.duration(bd - i, "m"), 1, false)
                    } else {
                        if (!this._changeInProgress) {
                            this._changeInProgress = true;
                            P.updateOffset(this, true);
                            this._changeInProgress = null
                        }
                    }
                }
            } else {
                return this._isUTC ? bd : this._d.getTimezoneOffset()
            }
            return this
        },zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },parseZone: function() {
            if (this._tzm) {
                this.zone(this._tzm)
            } else {
                if (typeof this._i === "string") {
                    this.zone(this._i)
                }
            }
            return this
        },hasAlignedHourOffset: function(i) {
            if (!i) {
                i = 0
            } else {
                i = P(i).zone()
            }
            return (this.zone() - i) % 60 === 0
        },daysInMonth: function() {
            return a1(this.year(), this.month())
        },dayOfYear: function(i) {
            var bc = U((P(this).startOf("day") - P(this).startOf("year")) / 86400000) + 1;
            return i == null ? bc : this.add("d", (i - bc))
        },quarter: function(i) {
            return i == null ? Math.ceil((this.month() + 1) / 3) : this.month((i - 1) * 3 + this.month() % 3)
        },weekYear: function(i) {
            var bc = y(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return i == null ? bc : this.add("y", (i - bc))
        },isoWeekYear: function(i) {
            var bc = y(this, 1, 4).year;
            return i == null ? bc : this.add("y", (i - bc))
        },week: function(i) {
            var bc = this.lang().week(this);
            return i == null ? bc : this.add("d", (i - bc) * 7)
        },isoWeek: function(i) {
            var bc = y(this, 1, 4).week;
            return i == null ? bc : this.add("d", (i - bc) * 7)
        },weekday: function(i) {
            var bc = (this.day() + 7 - this.lang()._week.dow) % 7;
            return i == null ? bc : this.add("d", i - bc)
        },isoWeekday: function(i) {
            return i == null ? this.day() || 7 : this.day(this.day() % 7 ? i : i - 7)
        },isoWeeksInYear: function() {
            return aD(this.year(), 1, 4)
        },weeksInYear: function() {
            var i = this._lang._week;
            return aD(this.year(), i.dow, i.doy)
        },get: function(i) {
            i = aS(i);
            return this[i]()
        },set: function(i, bc) {
            i = aS(i);
            if (typeof this[i] === "function") {
                this[i](bc)
            }
            return this
        },lang: function(i) {
            if (i === B) {
                return this._lang
            } else {
                this._lang = ax(i);
                return this
            }
        }});
    function a6(i, bc) {
        var bd;
        if (typeof bc === "string") {
            bc = i.lang().monthsParse(bc);
            if (typeof bc !== "number") {
                return i
            }
        }
        bd = Math.min(i.date(), a1(i.year(), bc));
        i._d["set" + (i._isUTC ? "UTC" : "") + "Month"](bc, bd);
        return i
    }
    function ba(bc, i) {
        return bc._d["get" + (bc._isUTC ? "UTC" : "") + i]()
    }
    function aM(bc, i, bd) {
        if (i === "Month") {
            return a6(bc, bd)
        } else {
            return bc._d["set" + (bc._isUTC ? "UTC" : "") + i](bd)
        }
    }
    function o(i, bc) {
        return function(bd) {
            if (bd != null) {
                aM(this, i, bd);
                P.updateOffset(this, bc);
                return this
            } else {
                return ba(this, i)
            }
        }
    }
    P.fn.millisecond = P.fn.milliseconds = o("Milliseconds", false);
    P.fn.second = P.fn.seconds = o("Seconds", false);
    P.fn.minute = P.fn.minutes = o("Minutes", false);
    P.fn.hour = P.fn.hours = o("Hours", true);
    P.fn.date = o("Date", true);
    P.fn.dates = a9("dates accessor is deprecated. Use date instead.", o("Date", true));
    P.fn.year = o("FullYear", true);
    P.fn.years = a9("years accessor is deprecated. Use year instead.", o("FullYear", true));
    P.fn.days = P.fn.day;
    P.fn.months = P.fn.month;
    P.fn.weeks = P.fn.week;
    P.fn.isoWeeks = P.fn.isoWeek;
    P.fn.quarters = P.fn.quarter;
    P.fn.toJSON = P.fn.toISOString;
    ay(P.duration.fn = ac.prototype, {_bubble: function() {
            var bd = this._milliseconds, bi = this._days, i = this._months, bg = this._data, bh, bf, bc, be;
            bg.milliseconds = bd % 1000;
            bh = k(bd / 1000);
            bg.seconds = bh % 60;
            bf = k(bh / 60);
            bg.minutes = bf % 60;
            bc = k(bf / 60);
            bg.hours = bc % 24;
            bi += k(bc / 24);
            bg.days = bi % 30;
            i += k(bi / 30);
            bg.months = i % 12;
            be = k(i / 12);
            bg.years = be
        },weeks: function() {
            return k(this.days() / 7)
        },valueOf: function() {
            return this._milliseconds + this._days * 86400000 + (this._months % 12) * 2592000000 + K(this._months / 12) * 31536000000
        },humanize: function(bc) {
            var bd = +this, i = x(bd, !bc, this.lang());
            if (bc) {
                i = this.lang().pastFuture(bd, i)
            }
            return this.lang().postformat(i)
        },add: function(i, bd) {
            var bc = P.duration(i, bd);
            this._milliseconds += bc._milliseconds;
            this._days += bc._days;
            this._months += bc._months;
            this._bubble();
            return this
        },subtract: function(i, bd) {
            var bc = P.duration(i, bd);
            this._milliseconds -= bc._milliseconds;
            this._days -= bc._days;
            this._months -= bc._months;
            this._bubble();
            return this
        },get: function(i) {
            i = aS(i);
            return this[i.toLowerCase() + "s"]()
        },as: function(i) {
            i = aS(i);
            return this["as" + i.charAt(0).toUpperCase() + i.slice(1) + "s"]()
        },lang: P.fn.lang,toIsoString: function() {
            var be = Math.abs(this.years()), i = Math.abs(this.months()), bg = Math.abs(this.days()), bc = Math.abs(this.hours()), bd = Math.abs(this.minutes()), bf = Math.abs(this.seconds() + this.milliseconds() / 1000);
            if (!this.asSeconds()) {
                return "P0D"
            }
            return (this.asSeconds() < 0 ? "-" : "") + "P" + (be ? be + "Y" : "") + (i ? i + "M" : "") + (bg ? bg + "D" : "") + ((bc || bd || bf) ? "T" : "") + (bc ? bc + "H" : "") + (bd ? bd + "M" : "") + (bf ? bf + "S" : "")
        }});
    function V(i) {
        P.duration.fn[i] = function() {
            return this._data[i]
        }
    }
    function av(i, bc) {
        P.duration.fn["as" + i] = function() {
            return +this / bc
        }
    }
    for (aa in A) {
        if (A.hasOwnProperty(aa)) {
            av(aa, A[aa]);
            V(aa.toLowerCase())
        }
    }
    av("Weeks", 604800000);
    P.duration.fn.asMonths = function() {
        return (+this - this.years() * 31536000000) / 2592000000 + this.years() * 12
    };
    P.lang("en", {ordinal: function(bd) {
            var i = bd % 10, bc = (K(bd % 100 / 10) === 1) ? "th" : (i === 1) ? "st" : (i === 2) ? "nd" : (i === 3) ? "rd" : "th";
            return bd + bc
        }});
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("ar-ma", {months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),weekdays: "Ø§Ù„Ø£ØØ¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),weekdaysShort: "Ø§ØØ¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),weekdaysMin: "Ø_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",sameElse: "L"},relativeTime: {future: "ÙÙŠ %s",past: "Ù…Ù†Ø° %s",s: "Ø«ÙˆØ§Ù†",m: "Ø¯Ù‚ÙŠÙ‚Ø©",mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",h: "Ø³Ø§Ø¹Ø©",hh: "%d Ø³Ø§Ø¹Ø§Øª",d: "ÙŠÙˆÙ…",dd: "%d Ø£ÙŠØ§Ù…",M: "Ø´Ù‡Ø±",MM: "%d Ø£Ø´Ù‡Ø±",y: "Ø³Ù†Ø©",yy: "%d Ø³Ù†ÙˆØ§Øª"},week: {dow: 6,doy: 12}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("ar", {months: "ÙŠÙ†Ø§ÙŠØ±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_ÙØ¨Ø±Ø§ÙŠØ±/ Ø´Ø¨Ø§Ø·_Ù…Ø§Ø±Ø³/ Ø¢Ø°Ø§Ø±_Ø£Ø¨Ø±ÙŠÙ„/ Ù†ÙŠØ³Ø§Ù†_Ù…Ø§ÙŠÙˆ/ Ø£ÙŠØ§Ø±_ÙŠÙˆÙ†ÙŠÙˆ/ ØØ²ÙŠØ±Ø§Ù†_ÙŠÙˆÙ„ÙŠÙˆ/ ØªÙ…ÙˆØ²_Ø£ØºØ³Ø·Ø³/ Ø¢Ø¨_Ø³Ø¨ØªÙ…Ø¨Ø±/ Ø£ÙŠÙ„ÙˆÙ„_Ø£ÙƒØªÙˆØ¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„_Ù†ÙˆÙÙ…Ø¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_Ø¯ÙŠØ³Ù…Ø¨Ø±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„".split("_"),monthsShort: "ÙŠÙ†Ø§ÙŠØ±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_ÙØ¨Ø±Ø§ÙŠØ±/ Ø´Ø¨Ø§Ø·_Ù…Ø§Ø±Ø³/ Ø¢Ø°Ø§Ø±_Ø£Ø¨Ø±ÙŠÙ„/ Ù†ÙŠØ³Ø§Ù†_Ù…Ø§ÙŠÙˆ/ Ø£ÙŠØ§Ø±_ÙŠÙˆÙ†ÙŠÙˆ/ ØØ²ÙŠØ±Ø§Ù†_ÙŠÙˆÙ„ÙŠÙˆ/ ØªÙ…ÙˆØ²_Ø£ØºØ³Ø·Ø³/ Ø¢Ø¨_Ø³Ø¨ØªÙ…Ø¨Ø±/ Ø£ÙŠÙ„ÙˆÙ„_Ø£ÙƒØªÙˆØ¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„_Ù†ÙˆÙÙ…Ø¨Ø±/ ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ_Ø¯ÙŠØ³Ù…Ø¨Ø±/ ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„".split("_"),weekdays: "Ø§Ù„Ø£ØØ¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),weekdaysShort: "Ø§Ù„Ø£ØØ¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),weekdaysMin: "Ø_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",sameElse: "L"},relativeTime: {future: "ÙÙŠ %s",past: "Ù…Ù†Ø° %s",s: "Ø«ÙˆØ§Ù†",m: "Ø¯Ù‚ÙŠÙ‚Ø©",mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",h: "Ø³Ø§Ø¹Ø©",hh: "%d Ø³Ø§Ø¹Ø§Øª",d: "ÙŠÙˆÙ…",dd: "%d Ø£ÙŠØ§Ù…",M: "Ø´Ù‡Ø±",MM: "%d Ø£Ø´Ù‡Ø±",y: "Ø³Ù†Ø©",yy: "%d Ø³Ù†ÙˆØ§Øª"},week: {dow: 6,doy: 12}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("bg", {months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),monthsShort: "ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),longDateFormat: {LT: "H:mm",L: "D.MM.YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[Ð”Ð½ÐµÑ Ð²] LT",nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT",nextWeek: "dddd [Ð²] LT",lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
                    }
                },sameElse: "L"},relativeTime: {future: "ÑÐ»ÐµÐ´ %s",past: "Ð¿Ñ€ÐµÐ´Ð¸ %s",s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",h: "Ñ‡Ð°Ñ",hh: "%d Ñ‡Ð°ÑÐ°",d: "Ð´ÐµÐ½",dd: "%d Ð´Ð½Ð¸",M: "Ð¼ÐµÑÐµÑ†",MM: "%d Ð¼ÐµÑÐµÑ†Ð°",y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"},ordinal: function(be) {
                var bd = be % 10, bc = be % 100;
                if (be === 0) {
                    return be + "-ÐµÐ²"
                } else {
                    if (bc === 0) {
                        return be + "-ÐµÐ½"
                    } else {
                        if (bc > 10 && bc < 20) {
                            return be + "-Ñ‚Ð¸"
                        } else {
                            if (bd === 1) {
                                return be + "-Ð²Ð¸"
                            } else {
                                if (bd === 2) {
                                    return be + "-Ñ€Ð¸"
                                } else {
                                    if (bd === 7 || bd === 8) {
                                        return be + "-Ð¼Ð¸"
                                    } else {
                                        return be + "-Ñ‚Ð¸"
                                    }
                                }
                            }
                        }
                    }
                }
            },week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(bf) {
        function bg(bj, bi, bh) {
            var bk = {mm: "munutenn",MM: "miz",dd: "devezh"};
            return bj + " " + i(bk[bh], bj)
        }
        function be(bh) {
            switch (bc(bh)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return bh + " bloaz";
                default:
                    return bh + " vloaz"
            }
        }
        function bc(bh) {
            if (bh > 9) {
                return bc(bh % 10)
            }
            return bh
        }
        function i(bi, bh) {
            if (bh === 2) {
                return bd(bi)
            }
            return bi
        }
        function bd(bi) {
            var bh = {m: "v",b: "v",d: "z"};
            if (bh[bi.charAt(0)] === B) {
                return bi
            }
            return bh[bi.charAt(0)] + bi.substring(1)
        }
        return bf.lang("br", {months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),longDateFormat: {LT: "h[e]mm A",L: "DD/MM/YYYY",LL: "D [a viz] MMMM YYYY",LLL: "D [a viz] MMMM YYYY LT",LLLL: "dddd, D [a viz] MMMM YYYY LT"},calendar: {sameDay: "[Hiziv da] LT",nextDay: "[Warc'hoazh da] LT",nextWeek: "dddd [da] LT",lastDay: "[Dec'h da] LT",lastWeek: "dddd [paset da] LT",sameElse: "L"},relativeTime: {future: "a-benn %s",past: "%s 'zo",s: "un nebeud segondennoÃ¹",m: "ur vunutenn",mm: bg,h: "un eur",hh: "%d eur",d: "un devezh",dd: bg,M: "ur miz",MM: bg,y: "ur bloaz",yy: be},ordinal: function(bi) {
                var bh = (bi === 1) ? "aÃ±" : "vet";
                return bi + bh
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        function bc(bg, bf, be) {
            var bd = bg + " ";
            switch (be) {
                case "m":
                    return bf ? "jedna minuta" : "jedne minute";
                case "mm":
                    if (bg === 1) {
                        bd += "minuta"
                    } else {
                        if (bg === 2 || bg === 3 || bg === 4) {
                            bd += "minute"
                        } else {
                            bd += "minuta"
                        }
                    }
                    return bd;
                case "h":
                    return bf ? "jedan sat" : "jednog sata";
                case "hh":
                    if (bg === 1) {
                        bd += "sat"
                    } else {
                        if (bg === 2 || bg === 3 || bg === 4) {
                            bd += "sata"
                        } else {
                            bd += "sati"
                        }
                    }
                    return bd;
                case "dd":
                    if (bg === 1) {
                        bd += "dan"
                    } else {
                        bd += "dana"
                    }
                    return bd;
                case "MM":
                    if (bg === 1) {
                        bd += "mjesec"
                    } else {
                        if (bg === 2 || bg === 3 || bg === 4) {
                            bd += "mjeseca"
                        } else {
                            bd += "mjeseci"
                        }
                    }
                    return bd;
                case "yy":
                    if (bg === 1) {
                        bd += "godina"
                    } else {
                        if (bg === 2 || bg === 3 || bg === 4) {
                            bd += "godine"
                        } else {
                            bd += "godina"
                        }
                    }
                    return bd
            }
        }
        return i.lang("bs", {months: "januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),longDateFormat: {LT: "H:mm",L: "DD. MM. YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY LT",LLLL: "dddd, D. MMMM YYYY LT"},calendar: {sameDay: "[danas u] LT",nextDay: "[sutra u] LT",nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },lastDay: "[juÄer u] LT",lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[proÅ¡lu] dddd [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                },sameElse: "L"},relativeTime: {future: "za %s",past: "prije %s",s: "par sekundi",m: bc,mm: bc,h: bc,hh: bc,d: "dan",dd: bc,M: "mjesec",MM: bc,y: "godinu",yy: bc},ordinal: "%d.",week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("ca", {months: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),longDateFormat: {LT: "H:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: function() {
                    return "[avui a " + ((this.hours() !== 1) ? "les" : "la") + "] LT"
                },nextDay: function() {
                    return "[demÃ  a " + ((this.hours() !== 1) ? "les" : "la") + "] LT"
                },nextWeek: function() {
                    return "dddd [a " + ((this.hours() !== 1) ? "les" : "la") + "] LT"
                },lastDay: function() {
                    return "[ahir a " + ((this.hours() !== 1) ? "les" : "la") + "] LT"
                },lastWeek: function() {
                    return "[el] dddd [passat a " + ((this.hours() !== 1) ? "les" : "la") + "] LT"
                },sameElse: "L"},relativeTime: {future: "en %s",past: "fa %s",s: "uns segons",m: "un minut",mm: "%d minuts",h: "una hora",hh: "%d hores",d: "un dia",dd: "%d dies",M: "un mes",MM: "%d mesos",y: "un any",yy: "%d anys"},ordinal: "%dÂº",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(be) {
        var i = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã_Å™Ãjen_listopad_prosinec".split("_"), bd = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ãj_lis_pro".split("_");
        function bc(bg) {
            return (bg > 1) && (bg < 5) && (~~(bg / 10) !== 1)
        }
        function bf(bj, bi, bh, bk) {
            var bg = bj + " ";
            switch (bh) {
                case "s":
                    return (bi || bk) ? "pÃ¡r sekund" : "pÃ¡r sekundami";
                case "m":
                    return bi ? "minuta" : (bk ? "minutu" : "minutou");
                case "mm":
                    if (bi || bk) {
                        return bg + (bc(bj) ? "minuty" : "minut")
                    } else {
                        return bg + "minutami"
                    }
                    break;
                case "h":
                    return bi ? "hodina" : (bk ? "hodinu" : "hodinou");
                case "hh":
                    if (bi || bk) {
                        return bg + (bc(bj) ? "hodiny" : "hodin")
                    } else {
                        return bg + "hodinami"
                    }
                    break;
                case "d":
                    return (bi || bk) ? "den" : "dnem";
                case "dd":
                    if (bi || bk) {
                        return bg + (bc(bj) ? "dny" : "dnÃ")
                    } else {
                        return bg + "dny"
                    }
                    break;
                case "M":
                    return (bi || bk) ? "mÄ›sÃc" : "mÄ›sÃcem";
                case "MM":
                    if (bi || bk) {
                        return bg + (bc(bj) ? "mÄ›sÃce" : "mÄ›sÃcÅ¯")
                    } else {
                        return bg + "mÄ›sÃci"
                    }
                    break;
                case "y":
                    return (bi || bk) ? "rok" : "rokem";
                case "yy":
                    if (bi || bk) {
                        return bg + (bc(bj) ? "roky" : "let")
                    } else {
                        return bg + "lety"
                    }
                    break
            }
        }
        return be.lang("cs", {months: i,monthsShort: bd,monthsParse: (function(bg, bi) {
                var bh, bj = [];
                for (bh = 0; bh < 12; bh++) {
                    bj[bh] = new RegExp("^" + bg[bh] + "$|^" + bi[bh] + "$", "i")
                }
                return bj
            }(i, bd)),weekdays: "nedÄ›le_pondÄ›lÃ_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),longDateFormat: {LT: "H.mm",L: "DD.Â MM.Â YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY LT",LLLL: "dddd D. MMMM YYYY LT"},calendar: {sameDay: "[dnes v] LT",nextDay: "[zÃtra v] LT",nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve stÅ™edu v] LT";
                        case 4:
                            return "[ve Ätvrtek v] LT";
                        case 5:
                            return "[v pÃ¡tek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },lastDay: "[vÄera v] LT",lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[minulÃ©] dddd [v] LT";
                        case 3:
                            return "[minulou stÅ™edu v] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },sameElse: "L"},relativeTime: {future: "za %s",past: "pÅ™ed %s",s: bf,m: bf,mm: bf,h: bf,hh: bf,d: bf,dd: bf,M: bf,MM: bf,y: bf,yy: bf},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("cv", {months: "ÐºÄƒÑ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€ÄƒÑ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ã§Ä•Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Äƒ_Ã§ÑƒÑ€Ð»Ð°_Ð°Ð²ÄƒÐ½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"),monthsShort: "ÐºÄƒÑ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ã§Ä•Ñ€_ÑƒÑ‚Äƒ_Ã§ÑƒÑ€_Ð°Ð²_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"),weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÄ•Ã§Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÄƒÐ¼Ð°Ñ‚ÐºÑƒÐ½".split("_"),weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÄ•Ã§_ÑÑ€Ð½_ÑˆÄƒÐ¼".split("_"),weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÃ§_ÑÑ€_ÑˆÐ¼".split("_"),longDateFormat: {LT: "HH:mm",L: "DD-MM-YYYY",LL: "YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•]",LLL: "YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•], LT",LLLL: "dddd, YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•], LT"},calendar: {sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",lastDay: "[Ä”Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",nextWeek: "[Ã‡Ð¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ä•] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",sameElse: "L"},relativeTime: {future: function(bd) {
                    var bc = /ÑÐµÑ…ÐµÑ‚$/i.exec(bd) ? "Ñ€ÐµÐ½" : /Ã§ÑƒÐ»$/i.exec(bd) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½";
                    return bd + bc
                },past: "%s ÐºÐ°ÑÐ»Ð»Ð°",s: "Ð¿Ä•Ñ€-Ð¸Ðº Ã§ÐµÐºÐºÑƒÐ½Ñ‚",m: "Ð¿Ä•Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",h: "Ð¿Ä•Ñ€ ÑÐµÑ…ÐµÑ‚",hh: "%d ÑÐµÑ…ÐµÑ‚",d: "Ð¿Ä•Ñ€ ÐºÑƒÐ½",dd: "%d ÐºÑƒÐ½",M: "Ð¿Ä•Ñ€ ÑƒÐ¹ÄƒÑ…",MM: "%d ÑƒÐ¹ÄƒÑ…",y: "Ð¿Ä•Ñ€ Ã§ÑƒÐ»",yy: "%d Ã§ÑƒÐ»"},ordinal: "%d-Ð¼Ä•Ñˆ",week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("cy", {months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[Heddiw am] LT",nextDay: "[Yfory am] LT",nextWeek: "dddd [am] LT",lastDay: "[Ddoe am] LT",lastWeek: "dddd [diwethaf am] LT",sameElse: "L"},relativeTime: {future: "mewn %s",past: "%s yn Ã l",s: "ychydig eiliadau",m: "munud",mm: "%d munud",h: "awr",hh: "%d awr",d: "diwrnod",dd: "%d diwrnod",M: "mis",MM: "%d mis",y: "blwyddyn",yy: "%d flynedd"},ordinal: function(be) {
                var bc = be, bd = "", bf = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                if (bc > 20) {
                    if (bc === 40 || bc === 50 || bc === 60 || bc === 80 || bc === 100) {
                        bd = "fed"
                    } else {
                        bd = "ain"
                    }
                } else {
                    if (bc > 0) {
                        bd = bf[bc]
                    }
                }
                return be + bd
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("da", {months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D. MMMM, YYYY LT"},calendar: {sameDay: "[I dag kl.] LT",nextDay: "[I morgen kl.] LT",nextWeek: "dddd [kl.] LT",lastDay: "[I gÃ¥r kl.] LT",lastWeek: "[sidste] dddd [kl] LT",sameElse: "L"},relativeTime: {future: "om %s",past: "%s siden",s: "fÃ¥ sekunder",m: "et minut",mm: "%d minutter",h: "en time",hh: "%d timer",d: "en dag",dd: "%d dage",M: "en mÃ¥ned",MM: "%d mÃ¥neder",y: "et Ã¥r",yy: "%d Ã¥r"},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(bc) {
        function i(bf, be, bd, bh) {
            var bg = {m: ["eine Minute", "einer Minute"],h: ["eine Stunde", "einer Stunde"],d: ["ein Tag", "einem Tag"],dd: [bf + " Tage", bf + " Tagen"],M: ["ein Monat", "einem Monat"],MM: [bf + " Monate", bf + " Monaten"],y: ["ein Jahr", "einem Jahr"],yy: [bf + " Jahre", bf + " Jahren"]};
            return be ? bg[bd][0] : bg[bd][1]
        }
        return bc.lang("de", {months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat: {LT: "HH:mm [Uhr]",L: "DD.MM.YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY LT",LLLL: "dddd, D. MMMM YYYY LT"},calendar: {sameDay: "[Heute um] LT",sameElse: "L",nextDay: "[Morgen um] LT",nextWeek: "dddd [um] LT",lastDay: "[Gestern um] LT",lastWeek: "[letzten] dddd [um] LT"},relativeTime: {future: "in %s",past: "vor %s",s: "ein paar Sekunden",m: i,mm: "%d Minuten",h: i,hh: "%d Stunden",d: i,dd: i,M: i,MM: i,y: i,yy: i},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("el", {monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„ÎÎ¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿ÎÎ¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎÎ¼Î²ÏÎ¹Î¿Ï‚".split("_"),monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),months: function(bd, bc) {
                if (/D/.test(bc.substring(0, bc.indexOf("MMMM")))) {
                    return this._monthsGenitiveEl[bd.month()]
                } else {
                    return this._monthsNominativeEl[bd.month()]
                }
            },monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„ÎÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î ÎÎ¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),meridiem: function(bc, bd, be) {
                if (bc > 11) {
                    return be ? "Î¼Î¼" : "ÎœÎœ"
                } else {
                    return be ? "Ï€Î¼" : "Î Îœ"
                }
            },longDateFormat: {LT: "h:mm A",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendarEl: {sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT",nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT",nextWeek: "dddd [{}] LT",lastDay: "[Î§Î¸ÎµÏ‚ {}] LT",lastWeek: "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT",sameElse: "L"},calendar: function(be, bf) {
                var bd = this._calendarEl[be], bc = bf && bf.hours();
                return bd.replace("{}", (bc % 12 === 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚"))
            },relativeTime: {future: "ÏƒÎµ %s",past: "%s Ï€ÏÎ¹Î½",s: "Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",m: "ÎÎ½Î± Î»ÎµÏ€Ï„ÏŒ",mm: "%d Î»ÎµÏ€Ï„Î¬",h: "Î¼Î¯Î± ÏŽÏÎ±",hh: "%d ÏŽÏÎµÏ‚",d: "Î¼Î¯Î± Î¼ÎÏÎ±",dd: "%d Î¼ÎÏÎµÏ‚",M: "ÎÎ½Î±Ï‚ Î¼Î®Î½Î±Ï‚",MM: "%d Î¼Î®Î½ÎµÏ‚",y: "ÎÎ½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"},ordinal: function(bc) {
                return bc + "Î·"
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("en-au", {months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat: {LT: "h:mm A",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[Today at] LT",nextDay: "[Tomorrow at] LT",nextWeek: "dddd [at] LT",lastDay: "[Yesterday at] LT",lastWeek: "[Last] dddd [at] LT",sameElse: "L"},relativeTime: {future: "in %s",past: "%s ago",s: "a few seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"},ordinal: function(be) {
                var bc = be % 10, bd = (~~(be % 100 / 10) === 1) ? "th" : (bc === 1) ? "st" : (bc === 2) ? "nd" : (bc === 3) ? "rd" : "th";
                return be + bd
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("en-ca", {months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat: {LT: "h:mm A",L: "YYYY-MM-DD",LL: "D MMMM, YYYY",LLL: "D MMMM, YYYY LT",LLLL: "dddd, D MMMM, YYYY LT"},calendar: {sameDay: "[Today at] LT",nextDay: "[Tomorrow at] LT",nextWeek: "dddd [at] LT",lastDay: "[Yesterday at] LT",lastWeek: "[Last] dddd [at] LT",sameElse: "L"},relativeTime: {future: "in %s",past: "%s ago",s: "a few seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"},ordinal: function(be) {
                var bc = be % 10, bd = (~~(be % 100 / 10) === 1) ? "th" : (bc === 1) ? "st" : (bc === 2) ? "nd" : (bc === 3) ? "rd" : "th";
                return be + bd
            }})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("en-gb", {months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[Today at] LT",nextDay: "[Tomorrow at] LT",nextWeek: "dddd [at] LT",lastDay: "[Yesterday at] LT",lastWeek: "[Last] dddd [at] LT",sameElse: "L"},relativeTime: {future: "in %s",past: "%s ago",s: "a few seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"},ordinal: function(be) {
                var bc = be % 10, bd = (~~(be % 100 / 10) === 1) ? "th" : (bc === 1) ? "st" : (bc === 2) ? "nd" : (bc === 3) ? "rd" : "th";
                return be + bd
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("eo", {months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort: "jan_feb_mar_apr_maj_jun_jul_aÅg_sep_okt_nov_dec".split("_"),weekdays: "DimanÄ‰o_Lundo_Mardo_Merkredo_Ä´aÅdo_Vendredo_Sabato".split("_"),weekdaysShort: "Dim_Lun_Mard_Merk_Ä´aÅ_Ven_Sab".split("_"),weekdaysMin: "Di_Lu_Ma_Me_Ä´a_Ve_Sa".split("_"),longDateFormat: {LT: "HH:mm",L: "YYYY-MM-DD",LL: "D[-an de] MMMM, YYYY",LLL: "D[-an de] MMMM, YYYY LT",LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"},meridiem: function(bc, bd, be) {
                if (bc > 11) {
                    return be ? "p.t.m." : "P.T.M."
                } else {
                    return be ? "a.t.m." : "A.T.M."
                }
            },calendar: {sameDay: "[HodiaÅ je] LT",nextDay: "[MorgaÅ je] LT",nextWeek: "dddd [je] LT",lastDay: "[HieraÅ je] LT",lastWeek: "[pasinta] dddd [je] LT",sameElse: "L"},relativeTime: {future: "je %s",past: "antaÅ %s",s: "sekundoj",m: "minuto",mm: "%d minutoj",h: "horo",hh: "%d horoj",d: "tago",dd: "%d tagoj",M: "monato",MM: "%d monatoj",y: "jaro",yy: "%d jaroj"},ordinal: "%da",week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(bd) {
        var bc = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), i = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        return bd.lang("es", {months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort: function(be, bf) {
                if (/-MMM-/.test(bf)) {
                    return i[be.month()]
                } else {
                    return bc[be.month()]
                }
            },weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_SÃ¡".split("_"),longDateFormat: {LT: "H:mm",L: "DD/MM/YYYY",LL: "D [de] MMMM [del] YYYY",LLL: "D [de] MMMM [del] YYYY LT",LLLL: "dddd, D [de] MMMM [del] YYYY LT"},calendar: {sameDay: function() {
                    return "[hoy a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
                },nextDay: function() {
                    return "[maÃ±ana a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
                },nextWeek: function() {
                    return "dddd [a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
                },lastDay: function() {
                    return "[ayer a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
                },lastWeek: function() {
                    return "[el] dddd [pasado a la" + ((this.hours() !== 1) ? "s" : "") + "] LT"
                },sameElse: "L"},relativeTime: {future: "en %s",past: "hace %s",s: "unos segundos",m: "un minuto",mm: "%d minutos",h: "una hora",hh: "%d horas",d: "un dÃa",dd: "%d dÃas",M: "un mes",MM: "%d meses",y: "un aÃ±o",yy: "%d aÃ±os"},ordinal: "%dÂº",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(bc) {
        function i(bf, be, bd, bh) {
            var bg = {s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"],m: ["Ã¼he minuti", "Ã¼ks minut"],mm: [bf + " minuti", bf + " minutit"],h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"],hh: [bf + " tunni", bf + " tundi"],d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"],M: ["kuu aja", "kuu aega", "Ã¼ks kuu"],MM: [bf + " kuu", bf + " kuud"],y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"],yy: [bf + " aasta", bf + " aastat"]};
            if (be) {
                return bg[bd][2] ? bg[bd][2] : bg[bd][1]
            }
            return bh ? bg[bd][0] : bg[bd][1]
        }
        return bc.lang("et", {months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),weekdaysShort: "P_E_T_K_N_R_L".split("_"),weekdaysMin: "P_E_T_K_N_R_L".split("_"),longDateFormat: {LT: "H:mm",L: "DD.MM.YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY LT",LLLL: "dddd, D. MMMM YYYY LT"},calendar: {sameDay: "[TÃ¤na,] LT",nextDay: "[Homme,] LT",nextWeek: "[JÃ¤rgmine] dddd LT",lastDay: "[Eile,] LT",lastWeek: "[Eelmine] dddd LT",sameElse: "L"},relativeTime: {future: "%s pÃ¤rast",past: "%s tagasi",s: i,m: i,mm: i,h: i,hh: i,d: i,dd: "%d pÃ¤eva",M: i,MM: i,y: i,yy: i},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("eu", {months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),longDateFormat: {LT: "HH:mm",L: "YYYY-MM-DD",LL: "YYYY[ko] MMMM[ren] D[a]",LLL: "YYYY[ko] MMMM[ren] D[a] LT",LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT",l: "YYYY-M-D",ll: "YYYY[ko] MMM D[a]",lll: "YYYY[ko] MMM D[a] LT",llll: "ddd, YYYY[ko] MMM D[a] LT"},calendar: {sameDay: "[gaur] LT[etan]",nextDay: "[bihar] LT[etan]",nextWeek: "dddd LT[etan]",lastDay: "[atzo] LT[etan]",lastWeek: "[aurreko] dddd LT[etan]",sameElse: "L"},relativeTime: {future: "%s barru",past: "duela %s",s: "segundo batzuk",m: "minutu bat",mm: "%d minutu",h: "ordu bat",hh: "%d ordu",d: "egun bat",dd: "%d egun",M: "hilabete bat",MM: "%d hilabete",y: "urte bat",yy: "%d urte"},ordinal: "%d.",week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(bd) {
        var i = {"1": "Û±","2": "Û²","3": "Û³","4": "Û´","5": "Ûµ","6": "Û¶","7": "Û·","8": "Û¸","9": "Û¹","0": "Û°"}, bc = {"Û±": "1","Û²": "2","Û³": "3","Û´": "4","Ûµ": "5","Û¶": "6","Û·": "7","Û¸": "8","Û¹": "9","Û°": "0"};
        return bd.lang("fa", {months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),weekdays: "ÛŒÚ©\u200cØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡\u200cØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬\u200cØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),weekdaysShort: "ÛŒÚ©\u200cØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡\u200cØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬\u200cØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},meridiem: function(be, bg, bf) {
                if (be < 12) {
                    return "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±"
                } else {
                    return "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"
                }
            },calendar: {sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT",lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",sameElse: "L"},relativeTime: {future: "Ø¯Ø± %s",past: "%s Ù¾ÛŒØ´",s: "Ú†Ù†Ø¯ÛŒÙ† Ø«Ø§Ù†ÛŒÙ‡",m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡",h: "ÛŒÚ© Ø³Ø§Ø¹Øª",hh: "%d Ø³Ø§Ø¹Øª",d: "ÛŒÚ© Ø±ÙˆØ²",dd: "%d Ø±ÙˆØ²",M: "ÛŒÚ© Ù…Ø§Ù‡",MM: "%d Ù…Ø§Ù‡",y: "ÛŒÚ© Ø³Ø§Ù„",yy: "%d Ø³Ø§Ù„"},preparse: function(be) {
                return be.replace(/[Û°-Û¹]/g, function(bf) {
                    return bc[bf]
                }).replace(/ØŒ/g, ",")
            },postformat: function(be) {
                return be.replace(/\d/g, function(bf) {
                    return i[bf]
                }).replace(/,/g, "ØŒ")
            },ordinal: "%dÙ…",week: {dow: 6,doy: 12}})
    }));
    (function(i) {
        i(P)
    }(function(be) {
        var bd = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "), bc = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", bd[7], bd[8], bd[9]];
        function bf(bj, bi, bh, bk) {
            var bg = "";
            switch (bh) {
                case "s":
                    return bk ? "muutaman sekunnin" : "muutama sekunti";
                case "m":
                    return bk ? "minuutin" : "minuutti";
                case "mm":
                    bg = bk ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return bk ? "tunnin" : "tunti";
                case "hh":
                    bg = bk ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return bk ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
                case "dd":
                    bg = bk ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
                    break;
                case "M":
                    return bk ? "kuukauden" : "kuukausi";
                case "MM":
                    bg = bk ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return bk ? "vuoden" : "vuosi";
                case "yy":
                    bg = bk ? "vuoden" : "vuotta";
                    break
            }
            bg = i(bj, bk) + " " + bg;
            return bg
        }
        function i(bg, bh) {
            return bg < 10 ? (bh ? bc[bg] : bd[bg]) : bg
        }
        return be.lang("fi", {months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),longDateFormat: {LT: "HH.mm",L: "DD.MM.YYYY",LL: "Do MMMM[ta] YYYY",LLL: "Do MMMM[ta] YYYY, [klo] LT",LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",l: "D.M.YYYY",ll: "Do MMM YYYY",lll: "Do MMM YYYY, [klo] LT",llll: "ddd, Do MMM YYYY, [klo] LT"},calendar: {sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT",nextDay: "[huomenna] [klo] LT",nextWeek: "dddd [klo] LT",lastDay: "[eilen] [klo] LT",lastWeek: "[viime] dddd[na] [klo] LT",sameElse: "L"},relativeTime: {future: "%s pÃ¤Ã¤stÃ¤",past: "%s sitten",s: bf,m: bf,mm: bf,h: bf,hh: bf,d: bf,dd: bf,M: bf,MM: bf,y: bf,yy: bf},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("fo", {months: "januar_februar_mars_aprÃl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃggjadagur_leygardagur".split("_"),weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ_ley".split("_"),weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D. MMMM, YYYY LT"},calendar: {sameDay: "[Ã dag kl.] LT",nextDay: "[Ã morgin kl.] LT",nextWeek: "dddd [kl.] LT",lastDay: "[Ã gjÃ¡r kl.] LT",lastWeek: "[sÃÃ°stu] dddd [kl] LT",sameElse: "L"},relativeTime: {future: "um %s",past: "%s sÃÃ°ani",s: "fÃ¡ sekund",m: "ein minutt",mm: "%d minuttir",h: "ein tÃmi",hh: "%d tÃmar",d: "ein dagur",dd: "%d dagar",M: "ein mÃ¡naÃ°i",MM: "%d mÃ¡naÃ°ir",y: "eitt Ã¡r",yy: "%d Ã¡r"},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("fr-ca", {months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat: {LT: "HH:mm",L: "YYYY-MM-DD",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: "[Aujourd'hui Ã ] LT",nextDay: "[Demain Ã ] LT",nextWeek: "dddd [Ã ] LT",lastDay: "[Hier Ã ] LT",lastWeek: "dddd [dernier Ã ] LT",sameElse: "L"},relativeTime: {future: "dans %s",past: "il y a %s",s: "quelques secondes",m: "une minute",mm: "%d minutes",h: "une heure",hh: "%d heures",d: "un jour",dd: "%d jours",M: "un mois",MM: "%d mois",y: "un an",yy: "%d ans"},ordinal: function(bc) {
                return bc + (bc === 1 ? "er" : "")
            }})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("fr", {months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: "[Aujourd'hui Ã ] LT",nextDay: "[Demain Ã ] LT",nextWeek: "dddd [Ã ] LT",lastDay: "[Hier Ã ] LT",lastWeek: "dddd [dernier Ã ] LT",sameElse: "L"},relativeTime: {future: "dans %s",past: "il y a %s",s: "quelques secondes",m: "une minute",mm: "%d minutes",h: "une heure",hh: "%d heures",d: "un jour",dd: "%d jours",M: "un mois",MM: "%d mois",y: "un an",yy: "%d ans"},ordinal: function(bc) {
                return bc + (bc === 1 ? "er" : "")
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("gl", {months: "Xaneiro_Febreiro_Marzo_Abril_Maio_XuÃ±o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort: "Xan._Feb._Mar._Abr._Mai._XuÃ±._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays: "Domingo_Luns_Martes_MÃ©rcores_Xoves_Venres_SÃ¡bado".split("_"),weekdaysShort: "Dom._Lun._Mar._MÃ©r._Xov._Ven._SÃ¡b.".split("_"),weekdaysMin: "Do_Lu_Ma_MÃ©_Xo_Ve_SÃ¡".split("_"),longDateFormat: {LT: "H:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: function() {
                    return "[hoxe " + ((this.hours() !== 1) ? "Ã¡s" : "Ã¡") + "] LT"
                },nextDay: function() {
                    return "[maÃ±Ã¡ " + ((this.hours() !== 1) ? "Ã¡s" : "Ã¡") + "] LT"
                },nextWeek: function() {
                    return "dddd [" + ((this.hours() !== 1) ? "Ã¡s" : "a") + "] LT"
                },lastDay: function() {
                    return "[onte " + ((this.hours() !== 1) ? "Ã¡" : "a") + "] LT"
                },lastWeek: function() {
                    return "[o] dddd [pasado " + ((this.hours() !== 1) ? "Ã¡s" : "a") + "] LT"
                },sameElse: "L"},relativeTime: {future: function(bc) {
                    if (bc === "uns segundos") {
                        return "nuns segundos"
                    }
                    return "en " + bc
                },past: "hai %s",s: "uns segundos",m: "un minuto",mm: "%d minutos",h: "unha hora",hh: "%d horas",d: "un dÃa",dd: "%d dÃas",M: "un mes",MM: "%d meses",y: "un ano",yy: "%d anos"},ordinal: "%dÂº",week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("he", {months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D [×‘]MMMM YYYY",LLL: "D [×‘]MMMM YYYY LT",LLLL: "dddd, D [×‘]MMMM YYYY LT",l: "D/M/YYYY",ll: "D MMM YYYY",lll: "D MMM YYYY LT",llll: "ddd, D MMM YYYY LT"},calendar: {sameDay: "[×”×™×•× ×‘Ö¾]LT",nextDay: "[×ž×—×¨ ×‘Ö¾]LT",nextWeek: "dddd [×‘×©×¢×”] LT",lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT",lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",sameElse: "L"},relativeTime: {future: "×‘×¢×•×“ %s",past: "×œ×¤× ×™ %s",s: "×ž×¡×¤×¨ ×©× ×™×•×ª",m: "×“×§×”",mm: "%d ×“×§×•×ª",h: "×©×¢×”",hh: function(bc) {
                    if (bc === 2) {
                        return "×©×¢×ª×™×™×"
                    }
                    return bc + " ×©×¢×•×ª"
                },d: "×™×•×",dd: function(bc) {
                    if (bc === 2) {
                        return "×™×•×ž×™×™×"
                    }
                    return bc + " ×™×ž×™×"
                },M: "×—×•×“×©",MM: function(bc) {
                    if (bc === 2) {
                        return "×—×•×“×©×™×™×"
                    }
                    return bc + " ×—×•×“×©×™×"
                },y: "×©× ×”",yy: function(bc) {
                    if (bc === 2) {
                        return "×©× ×ª×™×™×"
                    }
                    return bc + " ×©× ×™×"
                }}})
    }));
    (function(i) {
        i(P)
    }(function(bd) {
        var i = {"1": "à¥§","2": "à¥¨","3": "à¥©","4": "à¥ª","5": "à¥«","6": "à¥¬","7": "à¥","8": "à¥®","9": "à¥¯","0": "à¥¦"}, bc = {"à¥§": "1","à¥¨": "2","à¥©": "3","à¥ª": "4","à¥«": "5","à¥¬": "6","à¥": "7","à¥®": "8","à¥¯": "9","à¥¦": "0"};
        return bd.lang("hi", {months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),longDateFormat: {LT: "A h:mm à¤¬à¤œà¥‡",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY, LT",LLLL: "dddd, D MMMM YYYY, LT"},calendar: {sameDay: "[à¤†à¤œ] LT",nextDay: "[à¤•à¤²] LT",nextWeek: "dddd, LT",lastDay: "[à¤•à¤²] LT",lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",sameElse: "L"},relativeTime: {future: "%s à¤®à¥‡à¤‚",past: "%s à¤ªà¤¹à¤²à¥‡",s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",mm: "%d à¤®à¤¿à¤¨à¤Ÿ",h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",hh: "%d à¤˜à¤‚à¤Ÿà¥‡",d: "à¤à¤• à¤¦à¤¿à¤¨",dd: "%d à¤¦à¤¿à¤¨",M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",MM: "%d à¤®à¤¹à¥€à¤¨à¥‡",y: "à¤à¤• à¤µà¤°à¥à¤·",yy: "%d à¤µà¤°à¥à¤·"},preparse: function(be) {
                return be.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥à¥®à¥¯à¥¦]/g, function(bf) {
                    return bc[bf]
                })
            },postformat: function(be) {
                return be.replace(/\d/g, function(bf) {
                    return i[bf]
                })
            },meridiem: function(be, bg, bf) {
                if (be < 4) {
                    return "à¤°à¤¾à¤¤"
                } else {
                    if (be < 10) {
                        return "à¤¸à¥à¤¬à¤¹"
                    } else {
                        if (be < 17) {
                            return "à¤¦à¥‹à¤ªà¤¹à¤°"
                        } else {
                            if (be < 20) {
                                return "à¤¶à¤¾à¤®"
                            } else {
                                return "à¤°à¤¾à¤¤"
                            }
                        }
                    }
                }
            },week: {dow: 0,doy: 6}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        function bc(bg, bf, be) {
            var bd = bg + " ";
            switch (be) {
                case "m":
                    return bf ? "jedna minuta" : "jedne minute";
                case "mm":
                    if (bg === 1) {
                        bd += "minuta"
                    } else {
                        if (bg === 2 || bg === 3 || bg === 4) {
                            bd += "minute"
                        } else {
                            bd += "minuta"
                        }
                    }
                    return bd;
                case "h":
                    return bf ? "jedan sat" : "jednog sata";
                case "hh":
                    if (bg === 1) {
                        bd += "sat"
                    } else {
                        if (bg === 2 || bg === 3 || bg === 4) {
                            bd += "sata"
                        } else {
                            bd += "sati"
                        }
                    }
                    return bd;
                case "dd":
                    if (bg === 1) {
                        bd += "dan"
                    } else {
                        bd += "dana"
                    }
                    return bd;
                case "MM":
                    if (bg === 1) {
                        bd += "mjesec"
                    } else {
                        if (bg === 2 || bg === 3 || bg === 4) {
                            bd += "mjeseca"
                        } else {
                            bd += "mjeseci"
                        }
                    }
                    return bd;
                case "yy":
                    if (bg === 1) {
                        bd += "godina"
                    } else {
                        if (bg === 2 || bg === 3 || bg === 4) {
                            bd += "godine"
                        } else {
                            bd += "godina"
                        }
                    }
                    return bd
            }
        }
        return i.lang("hr", {months: "sjeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),monthsShort: "sje._vel._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),longDateFormat: {LT: "H:mm",L: "DD. MM. YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY LT",LLLL: "dddd, D. MMMM YYYY LT"},calendar: {sameDay: "[danas u] LT",nextDay: "[sutra u] LT",nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },lastDay: "[juÄer u] LT",lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[proÅ¡lu] dddd [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                },sameElse: "L"},relativeTime: {future: "za %s",past: "prije %s",s: "par sekundi",m: bc,mm: bc,h: bc,hh: bc,d: "dan",dd: bc,M: "mjesec",MM: bc,y: "godinu",yy: bc},ordinal: "%d.",week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(bd) {
        var bc = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ");
        function be(bi, bh, bg, bk) {
            var bf = bi, bj;
            switch (bg) {
                case "s":
                    return (bk || bh) ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
                case "m":
                    return "egy" + (bk || bh ? " perc" : " perce");
                case "mm":
                    return bf + (bk || bh ? " perc" : " perce");
                case "h":
                    return "egy" + (bk || bh ? " Ã³ra" : " Ã³rÃ¡ja");
                case "hh":
                    return bf + (bk || bh ? " Ã³ra" : " Ã³rÃ¡ja");
                case "d":
                    return "egy" + (bk || bh ? " nap" : " napja");
                case "dd":
                    return bf + (bk || bh ? " nap" : " napja");
                case "M":
                    return "egy" + (bk || bh ? " hÃ³nap" : " hÃ³napja");
                case "MM":
                    return bf + (bk || bh ? " hÃ³nap" : " hÃ³napja");
                case "y":
                    return "egy" + (bk || bh ? " Ã©v" : " Ã©ve");
                case "yy":
                    return bf + (bk || bh ? " Ã©v" : " Ã©ve")
            }
            return ""
        }
        function i(bf) {
            return (bf ? "" : "[mÃºlt] ") + "[" + bc[this.day()] + "] LT[-kor]"
        }
        return bd.lang("hu", {months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"),weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),longDateFormat: {LT: "H:mm",L: "YYYY.MM.DD.",LL: "YYYY. MMMM D.",LLL: "YYYY. MMMM D., LT",LLLL: "YYYY. MMMM D., dddd LT"},meridiem: function(bf, bg, bh) {
                if (bf < 12) {
                    return bh === true ? "de" : "DE"
                } else {
                    return bh === true ? "du" : "DU"
                }
            },calendar: {sameDay: "[ma] LT[-kor]",nextDay: "[holnap] LT[-kor]",nextWeek: function() {
                    return i.call(this, true)
                },lastDay: "[tegnap] LT[-kor]",lastWeek: function() {
                    return i.call(this, false)
                },sameElse: "L"},relativeTime: {future: "%s mÃºlva",past: "%s",s: be,m: be,mm: be,h: be,hh: be,d: be,dd: be,M: be,MM: be,y: be,yy: be},ordinal: "%d.",week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(be) {
        function bd(bg, bi) {
            var bf = {nominative: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_"),accusative: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_")}, bh = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(bi) ? "accusative" : "nominative";
            return bf[bh][bg.month()]
        }
        function bc(bf, bh) {
            var bg = "Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_");
            return bg[bf.month()]
        }
        function i(bf, bh) {
            var bg = "Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_");
            return bg[bf.day()]
        }
        return be.lang("hy-am", {months: bd,monthsShort: bc,weekdays: i,weekdaysShort: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),weekdaysMin: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),longDateFormat: {LT: "HH:mm",L: "DD.MM.YYYY",LL: "D MMMM YYYY Õ©.",LLL: "D MMMM YYYY Õ©., LT",LLLL: "dddd, D MMMM YYYY Õ©., LT"},calendar: {sameDay: "[Õ¡ÕµÕ½Ö…Ö€] LT",nextDay: "[Õ¾Õ¡Õ²Õ¨] LT",lastDay: "[Õ¥Ö€Õ¥Õ¯] LT",nextWeek: function() {
                    return "dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                },lastWeek: function() {
                    return "[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                },sameElse: "L"},relativeTime: {future: "%s Õ°Õ¥Õ¿Õ¸",past: "%s Õ¡Õ¼Õ¡Õ»",s: "Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",m: "Ö€Õ¸ÕºÕ¥",mm: "%d Ö€Õ¸ÕºÕ¥",h: "ÕªÕ¡Õ´",hh: "%d ÕªÕ¡Õ´",d: "Ö…Ö€",dd: "%d Ö…Ö€",M: "Õ¡Õ´Õ«Õ½",MM: "%d Õ¡Õ´Õ«Õ½",y: "Õ¿Õ¡Ö€Õ«",yy: "%d Õ¿Õ¡Ö€Õ«"},meridiem: function(bf) {
                if (bf < 4) {
                    return "Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡"
                } else {
                    if (bf < 12) {
                        return "Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡"
                    } else {
                        if (bf < 17) {
                            return "ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡"
                        } else {
                            return "Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"
                        }
                    }
                }
            },ordinal: function(bf, bg) {
                switch (bg) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        if (bf === 1) {
                            return bf + "-Õ«Õ¶"
                        }
                        return bf + "-Ö€Õ¤";
                    default:
                        return bf
                }
            },week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("id", {months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat: {LT: "HH.mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY [pukul] LT",LLLL: "dddd, D MMMM YYYY [pukul] LT"},meridiem: function(bc, bd, be) {
                if (bc < 11) {
                    return "pagi"
                } else {
                    if (bc < 15) {
                        return "siang"
                    } else {
                        if (bc < 19) {
                            return "sore"
                        } else {
                            return "malam"
                        }
                    }
                }
            },calendar: {sameDay: "[Hari ini pukul] LT",nextDay: "[Besok pukul] LT",nextWeek: "dddd [pukul] LT",lastDay: "[Kemarin pukul] LT",lastWeek: "dddd [lalu pukul] LT",sameElse: "L"},relativeTime: {future: "dalam %s",past: "%s yang lalu",s: "beberapa detik",m: "semenit",mm: "%d menit",h: "sejam",hh: "%d jam",d: "sehari",dd: "%d hari",M: "sebulan",MM: "%d bulan",y: "setahun",yy: "%d tahun"},week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(bc) {
        function i(be) {
            if (be % 100 === 11) {
                return true
            } else {
                if (be % 10 === 1) {
                    return false
                }
            }
            return true
        }
        function bd(bh, bg, bf, bi) {
            var be = bh + " ";
            switch (bf) {
                case "s":
                    return bg || bi ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
                case "m":
                    return bg ? "mÃnÃºta" : "mÃnÃºtu";
                case "mm":
                    if (i(bh)) {
                        return be + (bg || bi ? "mÃnÃºtur" : "mÃnÃºtum")
                    } else {
                        if (bg) {
                            return be + "mÃnÃºta"
                        }
                    }
                    return be + "mÃnÃºtu";
                case "hh":
                    if (i(bh)) {
                        return be + (bg || bi ? "klukkustundir" : "klukkustundum")
                    }
                    return be + "klukkustund";
                case "d":
                    if (bg) {
                        return "dagur"
                    }
                    return bi ? "dag" : "degi";
                case "dd":
                    if (i(bh)) {
                        if (bg) {
                            return be + "dagar"
                        }
                        return be + (bi ? "daga" : "dÃ¶gum")
                    } else {
                        if (bg) {
                            return be + "dagur"
                        }
                    }
                    return be + (bi ? "dag" : "degi");
                case "M":
                    if (bg) {
                        return "mÃ¡nuÃ°ur"
                    }
                    return bi ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
                case "MM":
                    if (i(bh)) {
                        if (bg) {
                            return be + "mÃ¡nuÃ°ir"
                        }
                        return be + (bi ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um")
                    } else {
                        if (bg) {
                            return be + "mÃ¡nuÃ°ur"
                        }
                    }
                    return be + (bi ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
                case "y":
                    return bg || bi ? "Ã¡r" : "Ã¡ri";
                case "yy":
                    if (i(bh)) {
                        return be + (bg || bi ? "Ã¡r" : "Ã¡rum")
                    }
                    return be + (bg || bi ? "Ã¡r" : "Ã¡ri")
            }
        }
        return bc.lang("is", {months: "janÃºar_febrÃºar_mars_aprÃl_maÃ_jÃºnÃ_jÃºlÃ_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),monthsShort: "jan_feb_mar_apr_maÃ_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),longDateFormat: {LT: "H:mm",L: "DD/MM/YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY [kl.] LT",LLLL: "dddd, D. MMMM YYYY [kl.] LT"},calendar: {sameDay: "[Ã dag kl.] LT",nextDay: "[Ã¡ morgun kl.] LT",nextWeek: "dddd [kl.] LT",lastDay: "[Ã gÃ¦r kl.] LT",lastWeek: "[sÃÃ°asta] dddd [kl.] LT",sameElse: "L"},relativeTime: {future: "eftir %s",past: "fyrir %s sÃÃ°an",s: bd,m: bd,mm: bd,h: "klukkustund",hh: bd,d: bd,dd: bd,M: bd,MM: bd,y: bd,yy: bd},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("it", {months: "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),monthsShort: "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),weekdays: "Domenica_LunedÃ¬_MartedÃ¬_MercoledÃ¬_GiovedÃ¬_VenerdÃ¬_Sabato".split("_"),weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[Oggi alle] LT",nextDay: "[Domani alle] LT",nextWeek: "dddd [alle] LT",lastDay: "[Ieri alle] LT",lastWeek: "[lo scorso] dddd [alle] LT",sameElse: "L"},relativeTime: {future: function(bc) {
                    return ((/^[0-9].+$/).test(bc) ? "tra" : "in") + " " + bc
                },past: "%s fa",s: "alcuni secondi",m: "un minuto",mm: "%d minuti",h: "un'ora",hh: "%d ore",d: "un giorno",dd: "%d giorni",M: "un mese",MM: "%d mesi",y: "un anno",yy: "%d anni"},ordinal: "%dÂº",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("ja", {months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),longDateFormat: {LT: "Ahæ™‚måˆ†",L: "YYYY/MM/DD",LL: "YYYYå¹´MæœˆDæ—¥",LLL: "YYYYå¹´MæœˆDæ—¥LT",LLLL: "YYYYå¹´MæœˆDæ—¥LT dddd"},meridiem: function(bc, be, bd) {
                if (bc < 12) {
                    return "åˆå‰"
                } else {
                    return "åˆå¾Œ"
                }
            },calendar: {sameDay: "[ä»Šæ—¥] LT",nextDay: "[æ˜Žæ—¥] LT",nextWeek: "[æ¥é€±]dddd LT",lastDay: "[æ˜¨æ—¥] LT",lastWeek: "[å‰é€±]dddd LT",sameElse: "L"},relativeTime: {future: "%så¾Œ",past: "%så‰",s: "æ•°ç§’",m: "1åˆ†",mm: "%dåˆ†",h: "1æ™‚é–“",hh: "%dæ™‚é–“",d: "1æ—¥",dd: "%dæ—¥",M: "1ãƒ¶æœˆ",MM: "%dãƒ¶æœˆ",y: "1å¹´",yy: "%då¹´"}})
    }));
    (function(i) {
        i(P)
    }(function(bd) {
        function bc(bf, bh) {
            var be = {nominative: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"),accusative: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡".split("_")}, bg = (/D[oD] *MMMM?/).test(bh) ? "accusative" : "nominative";
            return be[bg][bf.month()]
        }
        function i(be, bh) {
            var bf = {nominative: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"),accusative: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_")}, bg = (/(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/).test(bh) ? "accusative" : "nominative";
            return bf[bg][be.day()]
        }
        return bd.lang("ka", {months: bc,monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"),weekdays: i,weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"),weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"),longDateFormat: {LT: "h:mm A",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]",nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]",lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]",nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]",lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”",sameElse: "L"},relativeTime: {future: function(be) {
                    return (/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/).test(be) ? be.replace(/áƒ˜$/, "áƒ¨áƒ˜") : be + "áƒ¨áƒ˜"
                },past: function(be) {
                    if ((/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/).test(be)) {
                        return be.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ")
                    }
                    if ((/áƒ¬áƒ”áƒšáƒ˜/).test(be)) {
                        return be.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ")
                    }
                },s: "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜",m: "áƒ¬áƒ£áƒ—áƒ˜",mm: "%d áƒ¬áƒ£áƒ—áƒ˜",h: "áƒ¡áƒáƒáƒ—áƒ˜",hh: "%d áƒ¡áƒáƒáƒ—áƒ˜",d: "áƒ“áƒ¦áƒ”",dd: "%d áƒ“áƒ¦áƒ”",M: "áƒ—áƒ•áƒ”",MM: "%d áƒ—áƒ•áƒ”",y: "áƒ¬áƒ”áƒšáƒ˜",yy: "%d áƒ¬áƒ”áƒšáƒ˜"},ordinal: function(be) {
                if (be === 0) {
                    return be
                }
                if (be === 1) {
                    return be + "-áƒšáƒ˜"
                }
                if ((be < 20) || (be <= 100 && (be % 20 === 0)) || (be % 100 === 0)) {
                    return "áƒ›áƒ”-" + be
                }
                return be + "-áƒ”"
            },week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("km", {months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž·áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž·áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),weekdaysShort: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),weekdaysMin: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[ážáŸ’áž„áŸƒáž“áŸˆ áž˜áŸ‰áŸ„áž„] LT",nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT",lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",sameElse: "L"},relativeTime: {future: "%sáž‘áŸ€áž",past: "%sáž˜áž»áž“",s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",m: "áž˜áž½áž™áž“áž¶áž‘áž¸",mm: "%d áž“áž¶áž‘áž¸",h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„",hh: "%d áž˜áŸ‰áŸ„áž„",d: "áž˜áž½áž™ážáŸ’áž„áŸƒ",dd: "%d ážáŸ’áž„áŸƒ",M: "áž˜áž½áž™ážáŸ‚",MM: "%d ážáŸ‚",y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",yy: "%d áž†áŸ’áž“áž¶áŸ†"},week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("ko", {months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),longDateFormat: {LT: "A hì‹œ mmë¶„",L: "YYYY.MM.DD",LL: "YYYYë…„ MMMM Dì¼",LLL: "YYYYë…„ MMMM Dì¼ LT",LLLL: "YYYYë…„ MMMM Dì¼ dddd LT"},meridiem: function(bc, be, bd) {
                return bc < 12 ? "ì˜¤ì „" : "ì˜¤í›„"
            },calendar: {sameDay: "ì˜¤ëŠ˜ LT",nextDay: "ë‚´ì¼ LT",nextWeek: "dddd LT",lastDay: "ì–´ì œ LT",lastWeek: "ì§€ë‚œì£¼ dddd LT",sameElse: "L"},relativeTime: {future: "%s í›„",past: "%s ì „",s: "ëª‡ì´ˆ",ss: "%dì´ˆ",m: "ì¼ë¶„",mm: "%dë¶„",h: "í•œì‹œê°„",hh: "%dì‹œê°„",d: "í•˜ë£¨",dd: "%dì¼",M: "í•œë‹¬",MM: "%dë‹¬",y: "ì¼ë…„",yy: "%dë…„"},ordinal: "%dì¼",meridiemParse: /(ì˜¤ì „|ì˜¤í›„)/,isPM: function(bc) {
                return bc === "ì˜¤í›„"
            }})
    }));
    (function(i) {
        i(P)
    }(function(bf) {
        function bc(bk, bj, bi, bm) {
            var bl = {m: ["eng Minutt", "enger Minutt"],h: ["eng Stonn", "enger Stonn"],d: ["een Dag", "engem Dag"],dd: [bk + " Deeg", bk + " Deeg"],M: ["ee Mount", "engem Mount"],MM: [bk + " MÃ©int", bk + " MÃ©int"],y: ["ee Joer", "engem Joer"],yy: [bk + " Joer", bk + " Joer"]};
            return bj ? bl[bi][0] : bl[bi][1]
        }
        function be(bi) {
            var bj = bi.substr(0, bi.indexOf(" "));
            if (bd(bj)) {
                return "a " + bi
            }
            return "an " + bi
        }
        function i(bi) {
            var bj = bi.substr(0, bi.indexOf(" "));
            if (bd(bj)) {
                return "viru " + bi
            }
            return "virun " + bi
        }
        function bh(bi) {
            var bj = this.format("d");
            if (bg(bj)) {
                return "[Leschte] dddd [um] LT"
            }
            return "[Leschten] dddd [um] LT"
        }
        function bg(bi) {
            bi = parseInt(bi, 10);
            switch (bi) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 6:
                    return true;
                default:
                    return false
            }
        }
        function bd(bj) {
            bj = parseInt(bj, 10);
            if (isNaN(bj)) {
                return false
            }
            if (bj < 0) {
                return true
            } else {
                if (bj < 10) {
                    if (4 <= bj && bj <= 7) {
                        return true
                    }
                    return false
                } else {
                    if (bj < 100) {
                        var bi = bj % 10, bk = bj / 10;
                        if (bi === 0) {
                            return bd(bk)
                        }
                        return bd(bi)
                    } else {
                        if (bj < 10000) {
                            while (bj >= 10) {
                                bj = bj / 10
                            }
                            return bd(bj)
                        } else {
                            bj = bj / 1000;
                            return bd(bj)
                        }
                    }
                }
            }
        }
        return bf.lang("lb", {months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),longDateFormat: {LT: "H:mm [Auer]",L: "DD.MM.YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY LT",LLLL: "dddd, D. MMMM YYYY LT"},calendar: {sameDay: "[Haut um] LT",sameElse: "L",nextDay: "[Muer um] LT",nextWeek: "dddd [um] LT",lastDay: "[GÃ«schter um] LT",lastWeek: bh},relativeTime: {future: be,past: i,s: "e puer Sekonnen",m: bc,mm: "%d Minutten",h: bc,hh: "%d Stonnen",d: bc,dd: bc,M: bc,MM: bc,y: bc,yy: bc},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(bj) {
        var bh = {m: "minutÄ—_minutÄ—s_minutÄ™",mm: "minutÄ—s_minuÄiÅ³_minutes",h: "valanda_valandos_valandÄ…",hh: "valandos_valandÅ³_valandas",d: "diena_dienos_dienÄ…",dd: "dienos_dienÅ³_dienas",M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",y: "metai_metÅ³_metus",yy: "metai_metÅ³_metus"}, be = "pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis_sekmadienis".split("_");
        function bf(bm, bl, bk, bn) {
            if (bl) {
                return "kelios sekundÄ—s"
            } else {
                return bn ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"
            }
        }
        function bg(bm, bl, bk, bn) {
            return bl ? i(bk)[0] : (bn ? i(bk)[1] : i(bk)[2])
        }
        function bi(bk) {
            return bk % 10 === 0 || (bk > 10 && bk < 20)
        }
        function i(bk) {
            return bh[bk].split("_")
        }
        function bd(bn, bm, bl, bo) {
            var bk = bn + " ";
            if (bn === 1) {
                return bk + bg(bn, bm, bl[0], bo)
            } else {
                if (bm) {
                    return bk + (bi(bn) ? i(bl)[1] : i(bl)[0])
                } else {
                    if (bo) {
                        return bk + i(bl)[1]
                    } else {
                        return bk + (bi(bn) ? i(bl)[1] : i(bl)[2])
                    }
                }
            }
        }
        function bc(bm, bl) {
            var bn = bl.indexOf("dddd HH:mm") === -1, bk = be[bm.weekday()];
            return bn ? bk : bk.substring(0, bk.length - 2) + "Ä¯"
        }
        return bj.lang("lt", {months: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾Ä—lio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays: bc,weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"),longDateFormat: {LT: "HH:mm",L: "YYYY-MM-DD",LL: "YYYY [m.] MMMM D [d.]",LLL: "YYYY [m.] MMMM D [d.], LT [val.]",LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",l: "YYYY-MM-DD",ll: "YYYY [m.] MMMM D [d.]",lll: "YYYY [m.] MMMM D [d.], LT [val.]",llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar: {sameDay: "[Å iandien] LT",nextDay: "[Rytoj] LT",nextWeek: "dddd LT",lastDay: "[Vakar] LT",lastWeek: "[PraÄ—jusÄ¯] dddd LT",sameElse: "L"},relativeTime: {future: "po %s",past: "prieÅ¡ %s",s: bf,m: bg,mm: bd,h: bg,hh: bd,d: bg,dd: bd,M: bg,MM: bd,y: bg,yy: bd},ordinal: function(bk) {
                return bk + "-oji"
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(bd) {
        var i = {mm: "minÅ«ti_minÅ«tes_minÅ«te_minÅ«tes",hh: "stundu_stundas_stunda_stundas",dd: "dienu_dienas_diena_dienas",MM: "mÄ“nesi_mÄ“neÅ¡us_mÄ“nesis_mÄ“neÅ¡i",yy: "gadu_gadus_gads_gadi"};
        function bc(bi, bh, bg) {
            var bf = bi.split("_");
            if (bg) {
                return bh % 10 === 1 && bh !== 11 ? bf[2] : bf[3]
            } else {
                return bh % 10 === 1 && bh !== 11 ? bf[0] : bf[1]
            }
        }
        function be(bh, bg, bf) {
            return bh + " " + bc(i[bf], bh, bg)
        }
        return bd.lang("lv", {months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),longDateFormat: {LT: "HH:mm",L: "DD.MM.YYYY",LL: "YYYY. [gada] D. MMMM",LLL: "YYYY. [gada] D. MMMM, LT",LLLL: "YYYY. [gada] D. MMMM, dddd, LT"},calendar: {sameDay: "[Å odien pulksten] LT",nextDay: "[RÄ«t pulksten] LT",nextWeek: "dddd [pulksten] LT",lastDay: "[Vakar pulksten] LT",lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT",sameElse: "L"},relativeTime: {future: "%s vÄ“lÄk",past: "%s agrÄk",s: "daÅ¾as sekundes",m: "minÅ«ti",mm: be,h: "stundu",hh: be,d: "dienu",dd: be,M: "mÄ“nesi",MM: be,y: "gadu",yy: be},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("mk", {months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),longDateFormat: {LT: "H:mm",L: "D.MM.YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",nextWeek: "dddd [Ð²Ð¾] LT",lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Ð’Ð¾ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ð’Ð¾ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
                    }
                },sameElse: "L"},relativeTime: {future: "Ð¿Ð¾ÑÐ»Ðµ %s",past: "Ð¿Ñ€ÐµÐ´ %s",s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",h: "Ñ‡Ð°Ñ",hh: "%d Ñ‡Ð°ÑÐ°",d: "Ð´ÐµÐ½",dd: "%d Ð´ÐµÐ½Ð°",M: "Ð¼ÐµÑÐµÑ†",MM: "%d Ð¼ÐµÑÐµÑ†Ð¸",y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"},ordinal: function(be) {
                var bd = be % 10, bc = be % 100;
                if (be === 0) {
                    return be + "-ÐµÐ²"
                } else {
                    if (bc === 0) {
                        return be + "-ÐµÐ½"
                    } else {
                        if (bc > 10 && bc < 20) {
                            return be + "-Ñ‚Ð¸"
                        } else {
                            if (bd === 1) {
                                return be + "-Ð²Ð¸"
                            } else {
                                if (bd === 2) {
                                    return be + "-Ñ€Ð¸"
                                } else {
                                    if (bd === 7 || bd === 8) {
                                        return be + "-Ð¼Ð¸"
                                    } else {
                                        return be + "-Ñ‚Ð¸"
                                    }
                                }
                            }
                        }
                    }
                }
            },week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("ml", {months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"),monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"),weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"),weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"),weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"),longDateFormat: {LT: "A h:mm -à´¨àµ",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY, LT",LLLL: "dddd, D MMMM YYYY, LT"},calendar: {sameDay: "[à´‡à´¨àµà´¨àµ] LT",nextDay: "[à´¨à´¾à´³àµ†] LT",nextWeek: "dddd, LT",lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT",lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT",sameElse: "L"},relativeTime: {future: "%s à´•à´´à´¿à´žàµà´žàµ",past: "%s à´®àµàµ»à´ªàµ",s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾",m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ",mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ",h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼",hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼",d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚",dd: "%d à´¦à´¿à´µà´¸à´‚",M: "à´’à´°àµ à´®à´¾à´¸à´‚",MM: "%d à´®à´¾à´¸à´‚",y: "à´’à´°àµ à´µàµ¼à´·à´‚",yy: "%d à´µàµ¼à´·à´‚"},meridiem: function(bc, be, bd) {
                if (bc < 4) {
                    return "à´°à´¾à´¤àµà´°à´¿"
                } else {
                    if (bc < 12) {
                        return "à´°à´¾à´µà´¿à´²àµ†"
                    } else {
                        if (bc < 17) {
                            return "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ"
                        } else {
                            if (bc < 20) {
                                return "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚"
                            } else {
                                return "à´°à´¾à´¤àµà´°à´¿"
                            }
                        }
                    }
                }
            }})
    }));
    (function(i) {
        i(P)
    }(function(bd) {
        var i = {"1": "à¥§","2": "à¥¨","3": "à¥©","4": "à¥ª","5": "à¥«","6": "à¥¬","7": "à¥","8": "à¥®","9": "à¥¯","0": "à¥¦"}, bc = {"à¥§": "1","à¥¨": "2","à¥©": "3","à¥ª": "4","à¥«": "5","à¥¬": "6","à¥": "7","à¥®": "8","à¥¯": "9","à¥¦": "0"};
        return bd.lang("mr", {months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),longDateFormat: {LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY, LT",LLLL: "dddd, D MMMM YYYY, LT"},calendar: {sameDay: "[à¤†à¤œ] LT",nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT",nextWeek: "dddd, LT",lastDay: "[à¤•à¤¾à¤²] LT",lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",sameElse: "L"},relativeTime: {future: "%s à¤¨à¤‚à¤¤à¤°",past: "%s à¤ªà¥‚à¤°à¥à¤µà¥€",s: "à¤¸à¥‡à¤•à¤‚à¤¦",m: "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ",mm: "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡",h: "à¤à¤• à¤¤à¤¾à¤¸",hh: "%d à¤¤à¤¾à¤¸",d: "à¤à¤• à¤¦à¤¿à¤µà¤¸",dd: "%d à¤¦à¤¿à¤µà¤¸",M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",MM: "%d à¤®à¤¹à¤¿à¤¨à¥‡",y: "à¤à¤• à¤µà¤°à¥à¤·",yy: "%d à¤µà¤°à¥à¤·à¥‡"},preparse: function(be) {
                return be.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥à¥®à¥¯à¥¦]/g, function(bf) {
                    return bc[bf]
                })
            },postformat: function(be) {
                return be.replace(/\d/g, function(bf) {
                    return i[bf]
                })
            },meridiem: function(be, bg, bf) {
                if (be < 4) {
                    return "à¤°à¤¾à¤¤à¥à¤°à¥€"
                } else {
                    if (be < 10) {
                        return "à¤¸à¤•à¤¾à¤³à¥€"
                    } else {
                        if (be < 17) {
                            return "à¤¦à¥à¤ªà¤¾à¤°à¥€"
                        } else {
                            if (be < 20) {
                                return "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€"
                            } else {
                                return "à¤°à¤¾à¤¤à¥à¤°à¥€"
                            }
                        }
                    }
                }
            },week: {dow: 0,doy: 6}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("ms-my", {months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat: {LT: "HH.mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY [pukul] LT",LLLL: "dddd, D MMMM YYYY [pukul] LT"},meridiem: function(bc, bd, be) {
                if (bc < 11) {
                    return "pagi"
                } else {
                    if (bc < 15) {
                        return "tengahari"
                    } else {
                        if (bc < 19) {
                            return "petang"
                        } else {
                            return "malam"
                        }
                    }
                }
            },calendar: {sameDay: "[Hari ini pukul] LT",nextDay: "[Esok pukul] LT",nextWeek: "dddd [pukul] LT",lastDay: "[Kelmarin pukul] LT",lastWeek: "dddd [lepas pukul] LT",sameElse: "L"},relativeTime: {future: "dalam %s",past: "%s yang lepas",s: "beberapa saat",m: "seminit",mm: "%d minit",h: "sejam",hh: "%d jam",d: "sehari",dd: "%d hari",M: "sebulan",MM: "%d bulan",y: "setahun",yy: "%d tahun"},week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("nb", {months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),longDateFormat: {LT: "H.mm",L: "DD.MM.YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY [kl.] LT",LLLL: "dddd D. MMMM YYYY [kl.] LT"},calendar: {sameDay: "[i dag kl.] LT",nextDay: "[i morgen kl.] LT",nextWeek: "dddd [kl.] LT",lastDay: "[i gÃ¥r kl.] LT",lastWeek: "[forrige] dddd [kl.] LT",sameElse: "L"},relativeTime: {future: "om %s",past: "for %s siden",s: "noen sekunder",m: "ett minutt",mm: "%d minutter",h: "en time",hh: "%d timer",d: "en dag",dd: "%d dager",M: "en mÃ¥ned",MM: "%d mÃ¥neder",y: "ett Ã¥r",yy: "%d Ã¥r"},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(bd) {
        var i = {"1": "à¥§","2": "à¥¨","3": "à¥©","4": "à¥ª","5": "à¥«","6": "à¥¬","7": "à¥","8": "à¥®","9": "à¥¯","0": "à¥¦"}, bc = {"à¥§": "1","à¥¨": "2","à¥©": "3","à¥ª": "4","à¥«": "5","à¥¬": "6","à¥": "7","à¥®": "8","à¥¯": "9","à¥¦": "0"};
        return bd.lang("ne", {months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),weekdaysMin: "à¤†à¤‡._à¤¸à¥‹._à¤®à¤™à¥_à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),longDateFormat: {LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY, LT",LLLL: "dddd, D MMMM YYYY, LT"},preparse: function(be) {
                return be.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥à¥®à¥¯à¥¦]/g, function(bf) {
                    return bc[bf]
                })
            },postformat: function(be) {
                return be.replace(/\d/g, function(bf) {
                    return i[bf]
                })
            },meridiem: function(be, bg, bf) {
                if (be < 3) {
                    return "à¤°à¤¾à¤¤à¥€"
                } else {
                    if (be < 10) {
                        return "à¤¬à¤¿à¤¹à¤¾à¤¨"
                    } else {
                        if (be < 15) {
                            return "à¤¦à¤¿à¤‰à¤à¤¸à¥‹"
                        } else {
                            if (be < 18) {
                                return "à¤¬à¥‡à¤²à¥à¤•à¤¾"
                            } else {
                                if (be < 20) {
                                    return "à¤¸à¤¾à¤à¤"
                                } else {
                                    return "à¤°à¤¾à¤¤à¥€"
                                }
                            }
                        }
                    }
                }
            },calendar: {sameDay: "[à¤†à¤œ] LT",nextDay: "[à¤à¥‹à¤²à¥€] LT",nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",lastDay: "[à¤¹à¤¿à¤œà¥‹] LT",lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT",sameElse: "L"},relativeTime: {future: "%sà¤®à¤¾",past: "%s à¤…à¤—à¤¾à¤¡à¥€",s: "à¤•à¥‡à¤¹à¥€ à¤¸à¤®à¤¯",m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾",d: "à¤à¤• à¤¦à¤¿à¤¨",dd: "%d à¤¦à¤¿à¤¨",M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾",y: "à¤à¤• à¤¬à¤°à¥à¤·",yy: "%d à¤¬à¤°à¥à¤·"},week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(bd) {
        var bc = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), i = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        return bd.lang("nl", {months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort: function(be, bf) {
                if (/-MMM-/.test(bf)) {
                    return i[be.month()]
                } else {
                    return bc[be.month()]
                }
            },weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),longDateFormat: {LT: "HH:mm",L: "DD-MM-YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: "[vandaag om] LT",nextDay: "[morgen om] LT",nextWeek: "dddd [om] LT",lastDay: "[gisteren om] LT",lastWeek: "[afgelopen] dddd [om] LT",sameElse: "L"},relativeTime: {future: "over %s",past: "%s geleden",s: "een paar seconden",m: "Ã©Ã©n minuut",mm: "%d minuten",h: "Ã©Ã©n uur",hh: "%d uur",d: "Ã©Ã©n dag",dd: "%d dagen",M: "Ã©Ã©n maand",MM: "%d maanden",y: "Ã©Ã©n jaar",yy: "%d jaar"},ordinal: function(be) {
                return be + ((be === 1 || be === 8 || be >= 20) ? "ste" : "de")
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("nn", {months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort: "sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"),weekdaysMin: "su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"),longDateFormat: {LT: "HH:mm",L: "DD.MM.YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: "[I dag klokka] LT",nextDay: "[I morgon klokka] LT",nextWeek: "dddd [klokka] LT",lastDay: "[I gÃ¥r klokka] LT",lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT",sameElse: "L"},relativeTime: {future: "om %s",past: "for %s sidan",s: "nokre sekund",m: "eit minutt",mm: "%d minutt",h: "ein time",hh: "%d timar",d: "ein dag",dd: "%d dagar",M: "ein mÃ¥nad",MM: "%d mÃ¥nader",y: "eit Ã¥r",yy: "%d Ã¥r"},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(be) {
        var bd = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"), i = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_");
        function bc(bg) {
            return (bg % 10 < 5) && (bg % 10 > 1) && ((~~(bg / 10) % 10) !== 1)
        }
        function bf(bj, bi, bh) {
            var bg = bj + " ";
            switch (bh) {
                case "m":
                    return bi ? "minuta" : "minutÄ™";
                case "mm":
                    return bg + (bc(bj) ? "minuty" : "minut");
                case "h":
                    return bi ? "godzina" : "godzinÄ™";
                case "hh":
                    return bg + (bc(bj) ? "godziny" : "godzin");
                case "MM":
                    return bg + (bc(bj) ? "miesiÄ…ce" : "miesiÄ™cy");
                case "yy":
                    return bg + (bc(bj) ? "lata" : "lat")
            }
        }
        return be.lang("pl", {months: function(bh, bg) {
                if (/D MMMM/.test(bg)) {
                    return i[bh.month()]
                } else {
                    return bd[bh.month()]
                }
            },monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),weekdaysShort: "nie_pon_wt_Å›r_czw_pt_sb".split("_"),weekdaysMin: "N_Pn_Wt_Åšr_Cz_Pt_So".split("_"),longDateFormat: {LT: "HH:mm",L: "DD.MM.YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[DziÅ› o] LT",nextDay: "[Jutro o] LT",nextWeek: "[W] dddd [o] LT",lastDay: "[Wczoraj o] LT",lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                        case 3:
                            return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                        case 6:
                            return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
                        default:
                            return "[W zeszÅ‚y] dddd [o] LT"
                    }
                },sameElse: "L"},relativeTime: {future: "za %s",past: "%s temu",s: "kilka sekund",m: bf,mm: bf,h: bf,hh: bf,d: "1 dzieÅ„",dd: "%d dni",M: "miesiÄ…c",MM: bf,y: "rok",yy: bf},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("pt-br", {months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays: "domingo_segunda-feira_terÃ§a-feira_quarta-feira_quinta-feira_sexta-feira_sÃ¡bado".split("_"),weekdaysShort: "dom_seg_ter_qua_qui_sex_sÃ¡b".split("_"),weekdaysMin: "dom_2Âª_3Âª_4Âª_5Âª_6Âª_sÃ¡b".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D [de] MMMM [de] YYYY",LLL: "D [de] MMMM [de] YYYY [Ã s] LT",LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] LT"},calendar: {sameDay: "[Hoje Ã s] LT",nextDay: "[AmanhÃ£ Ã s] LT",nextWeek: "dddd [Ã s] LT",lastDay: "[Ontem Ã s] LT",lastWeek: function() {
                    return (this.day() === 0 || this.day() === 6) ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                },sameElse: "L"},relativeTime: {future: "em %s",past: "%s atrÃ¡s",s: "segundos",m: "um minuto",mm: "%d minutos",h: "uma hora",hh: "%d horas",d: "um dia",dd: "%d dias",M: "um mÃªs",MM: "%d meses",y: "um ano",yy: "%d anos"},ordinal: "%dÂº"})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("pt", {months: "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays: "domingo_segunda-feira_terÃ§a-feira_quarta-feira_quinta-feira_sexta-feira_sÃ¡bado".split("_"),weekdaysShort: "dom_seg_ter_qua_qui_sex_sÃ¡b".split("_"),weekdaysMin: "dom_2Âª_3Âª_4Âª_5Âª_6Âª_sÃ¡b".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D [de] MMMM [de] YYYY",LLL: "D [de] MMMM [de] YYYY LT",LLLL: "dddd, D [de] MMMM [de] YYYY LT"},calendar: {sameDay: "[Hoje Ã s] LT",nextDay: "[AmanhÃ£ Ã s] LT",nextWeek: "dddd [Ã s] LT",lastDay: "[Ontem Ã s] LT",lastWeek: function() {
                    return (this.day() === 0 || this.day() === 6) ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                },sameElse: "L"},relativeTime: {future: "em %s",past: "%s atrÃ¡s",s: "segundos",m: "um minuto",mm: "%d minutos",h: "uma hora",hh: "%d horas",d: "um dia",dd: "%d dias",M: "um mÃªs",MM: "%d meses",y: "um ano",yy: "%d anos"},ordinal: "%dÂº",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        function bc(bf, be, bd) {
            var bh = {mm: "minute",hh: "ore",dd: "zile",MM: "luni",yy: "ani"}, bg = " ";
            if (bf % 100 >= 20 || (bf >= 100 && bf % 100 === 0)) {
                bg = " de "
            }
            return bf + bg + bh[bd]
        }
        return i.lang("ro", {months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),longDateFormat: {LT: "H:mm",L: "DD.MM.YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY H:mm",LLLL: "dddd, D MMMM YYYY H:mm"},calendar: {sameDay: "[azi la] LT",nextDay: "[mÃ¢ine la] LT",nextWeek: "dddd [la] LT",lastDay: "[ieri la] LT",lastWeek: "[fosta] dddd [la] LT",sameElse: "L"},relativeTime: {future: "peste %s",past: "%s Ã®n urmÄƒ",s: "cÃ¢teva secunde",m: "un minut",mm: bc,h: "o orÄƒ",hh: bc,d: "o zi",dd: bc,M: "o lunÄƒ",MM: bc,y: "un an",yy: bc},week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(bf) {
        function bd(bj, bi) {
            var bh = bj.split("_");
            return bi % 10 === 1 && bi % 100 !== 11 ? bh[0] : (bi % 10 >= 2 && bi % 10 <= 4 && (bi % 100 < 10 || bi % 100 >= 20) ? bh[1] : bh[2])
        }
        function bg(bj, bi, bh) {
            var bk = {mm: bi ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"};
            if (bh === "m") {
                return bi ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ"
            } else {
                return bj + " " + bd(bk[bh], +bj)
            }
        }
        function be(bi, bk) {
            var bh = {nominative: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),accusative: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_")}, bj = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(bk) ? "accusative" : "nominative";
            return bh[bj][bi.month()]
        }
        function bc(bh, bk) {
            var bj = {nominative: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),accusative: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_")}, bi = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(bk) ? "accusative" : "nominative";
            return bj[bi][bh.month()]
        }
        function i(bh, bk) {
            var bi = {nominative: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),accusative: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_")}, bj = (/\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ)? ?\] ?dddd/).test(bk) ? "accusative" : "nominative";
            return bi[bj][bh.day()]
        }
        return bf.lang("ru", {months: be,monthsShort: bc,weekdays: i,weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),monthsParse: [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹|Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i],longDateFormat: {LT: "HH:mm",L: "DD.MM.YYYY",LL: "D MMMM YYYY Ð³.",LLL: "D MMMM YYYY Ð³., LT",LLLL: "dddd, D MMMM YYYY Ð³., LT"},calendar: {sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT",nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð° Ð²] LT",lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",nextWeek: function() {
                    return this.day() === 2 ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT"
                },lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd [Ð²] LT"
                    }
                },sameElse: "L"},relativeTime: {future: "Ñ‡ÐµÑ€ÐµÐ· %s",past: "%s Ð½Ð°Ð·Ð°Ð´",s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",m: bg,mm: bg,h: "Ñ‡Ð°Ñ",hh: bg,d: "Ð´ÐµÐ½ÑŒ",dd: bg,M: "Ð¼ÐµÑÑÑ†",MM: bg,y: "Ð³Ð¾Ð´",yy: bg},meridiem: function(bh, bj, bi) {
                if (bh < 4) {
                    return "Ð½Ð¾Ñ‡Ð¸"
                } else {
                    if (bh < 12) {
                        return "ÑƒÑ‚Ñ€Ð°"
                    } else {
                        if (bh < 17) {
                            return "Ð´Ð½Ñ"
                        } else {
                            return "Ð²ÐµÑ‡ÐµÑ€Ð°"
                        }
                    }
                }
            },ordinal: function(bh, bi) {
                switch (bi) {
                    case "M":
                    case "d":
                    case "DDD":
                        return bh + "-Ð¹";
                    case "D":
                        return bh + "-Ð³Ð¾";
                    case "w":
                    case "W":
                        return bh + "-Ñ";
                    default:
                        return bh
                }
            },week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(be) {
        var i = "januÃ¡r_februÃ¡r_marec_aprÃl_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"), bd = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_");
        function bc(bg) {
            return (bg > 1) && (bg < 5)
        }
        function bf(bj, bi, bh, bk) {
            var bg = bj + " ";
            switch (bh) {
                case "s":
                    return (bi || bk) ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
                case "m":
                    return bi ? "minÃºta" : (bk ? "minÃºtu" : "minÃºtou");
                case "mm":
                    if (bi || bk) {
                        return bg + (bc(bj) ? "minÃºty" : "minÃºt")
                    } else {
                        return bg + "minÃºtami"
                    }
                    break;
                case "h":
                    return bi ? "hodina" : (bk ? "hodinu" : "hodinou");
                case "hh":
                    if (bi || bk) {
                        return bg + (bc(bj) ? "hodiny" : "hodÃn")
                    } else {
                        return bg + "hodinami"
                    }
                    break;
                case "d":
                    return (bi || bk) ? "deÅˆ" : "dÅˆom";
                case "dd":
                    if (bi || bk) {
                        return bg + (bc(bj) ? "dni" : "dnÃ")
                    } else {
                        return bg + "dÅˆami"
                    }
                    break;
                case "M":
                    return (bi || bk) ? "mesiac" : "mesiacom";
                case "MM":
                    if (bi || bk) {
                        return bg + (bc(bj) ? "mesiace" : "mesiacov")
                    } else {
                        return bg + "mesiacmi"
                    }
                    break;
                case "y":
                    return (bi || bk) ? "rok" : "rokom";
                case "yy":
                    if (bi || bk) {
                        return bg + (bc(bj) ? "roky" : "rokov")
                    } else {
                        return bg + "rokmi"
                    }
                    break
            }
        }
        return be.lang("sk", {months: i,monthsShort: bd,monthsParse: (function(bg, bi) {
                var bh, bj = [];
                for (bh = 0; bh < 12; bh++) {
                    bj[bh] = new RegExp("^" + bg[bh] + "$|^" + bi[bh] + "$", "i")
                }
                return bj
            }(i, bd)),weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),longDateFormat: {LT: "H:mm",L: "DD.MM.YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY LT",LLLL: "dddd D. MMMM YYYY LT"},calendar: {sameDay: "[dnes o] LT",nextDay: "[zajtra o] LT",nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo Å¡tvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },lastDay: "[vÄera o] LT",lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulÃº nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[minulÃ½] dddd [o] LT";
                        case 3:
                            return "[minulÃº stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [o] LT";
                        case 6:
                            return "[minulÃº sobotu o] LT"
                    }
                },sameElse: "L"},relativeTime: {future: "za %s",past: "pred %s",s: bf,m: bf,mm: bf,h: bf,hh: bf,d: bf,dd: bf,M: bf,MM: bf,y: bf,yy: bf},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        function bc(bg, bf, be) {
            var bd = bg + " ";
            switch (be) {
                case "m":
                    return bf ? "ena minuta" : "eno minuto";
                case "mm":
                    if (bg === 1) {
                        bd += "minuta"
                    } else {
                        if (bg === 2) {
                            bd += "minuti"
                        } else {
                            if (bg === 3 || bg === 4) {
                                bd += "minute"
                            } else {
                                bd += "minut"
                            }
                        }
                    }
                    return bd;
                case "h":
                    return bf ? "ena ura" : "eno uro";
                case "hh":
                    if (bg === 1) {
                        bd += "ura"
                    } else {
                        if (bg === 2) {
                            bd += "uri"
                        } else {
                            if (bg === 3 || bg === 4) {
                                bd += "ure"
                            } else {
                                bd += "ur"
                            }
                        }
                    }
                    return bd;
                case "dd":
                    if (bg === 1) {
                        bd += "dan"
                    } else {
                        bd += "dni"
                    }
                    return bd;
                case "MM":
                    if (bg === 1) {
                        bd += "mesec"
                    } else {
                        if (bg === 2) {
                            bd += "meseca"
                        } else {
                            if (bg === 3 || bg === 4) {
                                bd += "mesece"
                            } else {
                                bd += "mesecev"
                            }
                        }
                    }
                    return bd;
                case "yy":
                    if (bg === 1) {
                        bd += "leto"
                    } else {
                        if (bg === 2) {
                            bd += "leti"
                        } else {
                            if (bg === 3 || bg === 4) {
                                bd += "leta"
                            } else {
                                bd += "let"
                            }
                        }
                    }
                    return bd
            }
        }
        return i.lang("sl", {months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"),weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"),longDateFormat: {LT: "H:mm",L: "DD. MM. YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY LT",LLLL: "dddd, D. MMMM YYYY LT"},calendar: {sameDay: "[danes ob] LT",nextDay: "[jutri ob] LT",nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },lastDay: "[vÄeraj ob] LT",lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[prejÅ¡nja] dddd [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejÅ¡nji] dddd [ob] LT"
                    }
                },sameElse: "L"},relativeTime: {future: "Äez %s",past: "%s nazaj",s: "nekaj sekund",m: bc,mm: bc,h: bc,hh: bc,d: "en dan",dd: bc,M: "en mesec",MM: bc,y: "eno leto",yy: bc},ordinal: "%d.",week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("sq", {months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"),monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"),weekdays: "E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"),weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"),weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"),meridiem: function(bc, bd, be) {
                return bc < 12 ? "PD" : "MD"
            },longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[Sot nÃ«] LT",nextDay: "[NesÃ«r nÃ«] LT",nextWeek: "dddd [nÃ«] LT",lastDay: "[Dje nÃ«] LT",lastWeek: "dddd [e kaluar nÃ«] LT",sameElse: "L"},relativeTime: {future: "nÃ« %s",past: "%s mÃ« parÃ«",s: "disa sekonda",m: "njÃ« minutÃ«",mm: "%d minuta",h: "njÃ« orÃ«",hh: "%d orÃ«",d: "njÃ« ditÃ«",dd: "%d ditÃ«",M: "njÃ« muaj",MM: "%d muaj",y: "njÃ« vit",yy: "%d vite"},ordinal: "%d.",week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(bc) {
        var i = {words: {m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"],dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"],MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"],yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"]},correctGrammaticalCase: function(be, bd) {
                return be === 1 ? bd[0] : (be >= 2 && be <= 4 ? bd[1] : bd[2])
            },translate: function(bg, be, bd) {
                var bf = i.words[bd];
                if (bd.length === 1) {
                    return be ? bf[0] : bf[1]
                } else {
                    return bg + " " + i.correctGrammaticalCase(bg, bf)
                }
            }};
        return bc.lang("sr-cyr", {months: ["Ñ˜Ð°Ð½ÑƒÐ°Ñ€", "Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€", "Ð¼Ð°Ñ€Ñ‚", "Ð°Ð¿Ñ€Ð¸Ð»", "Ð¼Ð°Ñ˜", "Ñ˜ÑƒÐ½", "Ñ˜ÑƒÐ»", "Ð°Ð²Ð³ÑƒÑÑ‚", "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€", "Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€", "Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€", "Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€"],monthsShort: ["Ñ˜Ð°Ð½.", "Ñ„ÐµÐ±.", "Ð¼Ð°Ñ€.", "Ð°Ð¿Ñ€.", "Ð¼Ð°Ñ˜", "Ñ˜ÑƒÐ½", "Ñ˜ÑƒÐ»", "Ð°Ð²Ð³.", "ÑÐµÐ¿.", "Ð¾ÐºÑ‚.", "Ð½Ð¾Ð².", "Ð´ÐµÑ†."],weekdays: ["Ð½ÐµÐ´ÐµÑ™Ð°", "Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº", "ÑƒÑ‚Ð¾Ñ€Ð°Ðº", "ÑÑ€ÐµÐ´Ð°", "Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº", "Ð¿ÐµÑ‚Ð°Ðº", "ÑÑƒÐ±Ð¾Ñ‚Ð°"],weekdaysShort: ["Ð½ÐµÐ´.", "Ð¿Ð¾Ð½.", "ÑƒÑ‚Ð¾.", "ÑÑ€Ðµ.", "Ñ‡ÐµÑ‚.", "Ð¿ÐµÑ‚.", "ÑÑƒÐ±."],weekdaysMin: ["Ð½Ðµ", "Ð¿Ð¾", "ÑƒÑ‚", "ÑÑ€", "Ñ‡Ðµ", "Ð¿Ðµ", "ÑÑƒ"],longDateFormat: {LT: "H:mm",L: "DD. MM. YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY LT",LLLL: "dddd, D. MMMM YYYY LT"},calendar: {sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
                        case 3:
                            return "[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
                        case 6:
                            return "[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ñƒ] dddd [Ñƒ] LT"
                    }
                },lastDay: "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",lastWeek: function() {
                    var bd = ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"];
                    return bd[this.day()]
                },sameElse: "L"},relativeTime: {future: "Ð·Ð° %s",past: "Ð¿Ñ€Ðµ %s",s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",m: i.translate,mm: i.translate,h: i.translate,hh: i.translate,d: "Ð´Ð°Ð½",dd: i.translate,M: "Ð¼ÐµÑÐµÑ†",MM: i.translate,y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",yy: i.translate},ordinal: "%d.",week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(bc) {
        var i = {words: {m: ["jedan minut", "jedne minute"],mm: ["minut", "minute", "minuta"],h: ["jedan sat", "jednog sata"],hh: ["sat", "sata", "sati"],dd: ["dan", "dana", "dana"],MM: ["mesec", "meseca", "meseci"],yy: ["godina", "godine", "godina"]},correctGrammaticalCase: function(be, bd) {
                return be === 1 ? bd[0] : (be >= 2 && be <= 4 ? bd[1] : bd[2])
            },translate: function(bg, be, bd) {
                var bf = i.words[bd];
                if (bd.length === 1) {
                    return be ? bf[0] : bf[1]
                } else {
                    return bg + " " + i.correctGrammaticalCase(bg, bf)
                }
            }};
        return bc.lang("sr", {months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "Äetvrtak", "petak", "subota"],weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "Äet.", "pet.", "sub."],weekdaysMin: ["ne", "po", "ut", "sr", "Äe", "pe", "su"],longDateFormat: {LT: "H:mm",L: "DD. MM. YYYY",LL: "D. MMMM YYYY",LLL: "D. MMMM YYYY LT",LLLL: "dddd, D. MMMM YYYY LT"},calendar: {sameDay: "[danas u] LT",nextDay: "[sutra u] LT",nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },lastDay: "[juÄe u] LT",lastWeek: function() {
                    var bd = ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"];
                    return bd[this.day()]
                },sameElse: "L"},relativeTime: {future: "za %s",past: "pre %s",s: "nekoliko sekundi",m: i.translate,mm: i.translate,h: i.translate,hh: i.translate,d: "dan",dd: i.translate,M: "mesec",MM: i.translate,y: "godinu",yy: i.translate},ordinal: "%d.",week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("sv", {months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),longDateFormat: {LT: "HH:mm",L: "YYYY-MM-DD",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: "[Idag] LT",nextDay: "[Imorgon] LT",lastDay: "[IgÃ¥r] LT",nextWeek: "dddd LT",lastWeek: "[FÃ¶rra] dddd[en] LT",sameElse: "L"},relativeTime: {future: "om %s",past: "fÃ¶r %s sedan",s: "nÃ¥gra sekunder",m: "en minut",mm: "%d minuter",h: "en timme",hh: "%d timmar",d: "en dag",dd: "%d dagar",M: "en mÃ¥nad",MM: "%d mÃ¥nader",y: "ett Ã¥r",yy: "%d Ã¥r"},ordinal: function(be) {
                var bc = be % 10, bd = (~~(be % 100 / 10) === 1) ? "e" : (bc === 1) ? "a" : (bc === 2) ? "a" : (bc === 3) ? "e" : "e";
                return be + bd
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("ta", {months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY, LT",LLLL: "dddd, D MMMM YYYY, LT"},calendar: {sameDay: "[à®‡à®©à¯à®±à¯] LT",nextDay: "[à®¨à®¾à®³à¯ˆ] LT",nextWeek: "dddd, LT",lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT",lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",sameElse: "L"},relativeTime: {future: "%s à®‡à®²à¯",past: "%s à®®à¯à®©à¯",s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",d: "à®’à®°à¯ à®¨à®¾à®³à¯",dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯",M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯",MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯",y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"},ordinal: function(bc) {
                return bc + "à®µà®¤à¯"
            },meridiem: function(bc, be, bd) {
                if (bc >= 6 && bc <= 10) {
                    return " à®•à®¾à®²à¯ˆ"
                } else {
                    if (bc >= 10 && bc <= 14) {
                        return " à®¨à®£à¯à®ªà®•à®²à¯"
                    } else {
                        if (bc >= 14 && bc <= 18) {
                            return " à®Žà®±à¯à®ªà®¾à®Ÿà¯"
                        } else {
                            if (bc >= 18 && bc <= 20) {
                                return " à®®à®¾à®²à¯ˆ"
                            } else {
                                if (bc >= 20 && bc <= 24) {
                                    return " à®‡à®°à®µà¯"
                                } else {
                                    if (bc >= 0 && bc <= 6) {
                                        return " à®µà¯ˆà®•à®±à¯ˆ"
                                    }
                                }
                            }
                        }
                    }
                }
            },week: {dow: 0,doy: 6}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("th", {months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),monthsShort: "à¸¡à¸à¸£à¸²_à¸à¸¸à¸¡à¸ à¸²_à¸¡à¸µà¸™à¸²_à¹€à¸¡à¸©à¸²_à¸žà¸¤à¸©à¸ à¸²_à¸¡à¸´à¸–à¸¸à¸™à¸²_à¸à¸£à¸à¸Žà¸²_à¸ªà¸´à¸‡à¸«à¸²_à¸à¸±à¸™à¸¢à¸²_à¸•à¸¸à¸¥à¸²_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²_à¸˜à¸±à¸™à¸§à¸²".split("_"),weekdays: "à¸à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),weekdaysShort: "à¸à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),weekdaysMin: "à¸à¸²._à¸ˆ._à¸._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),longDateFormat: {LT: "H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ",L: "YYYY/MM/DD",LL: "D MMMM YYYY",LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² LT",LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² LT"},meridiem: function(bc, be, bd) {
                if (bc < 12) {
                    return "à¸à¹ˆà¸à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
                } else {
                    return "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
                }
            },calendar: {sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",lastDay: "[à¹€à¸¡à¸·à¹ˆà¸à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",sameElse: "L"},relativeTime: {future: "à¸à¸µà¸ %s",past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",m: "1 à¸™à¸²à¸—à¸µ",mm: "%d à¸™à¸²à¸—à¸µ",h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",d: "1 à¸§à¸±à¸™",dd: "%d à¸§à¸±à¸™",M: "1 à¹€à¸”à¸·à¸à¸™",MM: "%d à¹€à¸”à¸·à¸à¸™",y: "1 à¸›à¸µ",yy: "%d à¸›à¸µ"}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("tl-ph", {months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat: {LT: "HH:mm",L: "MM/D/YYYY",LL: "MMMM D, YYYY",LLL: "MMMM D, YYYY LT",LLLL: "dddd, MMMM DD, YYYY LT"},calendar: {sameDay: "[Ngayon sa] LT",nextDay: "[Bukas sa] LT",nextWeek: "dddd [sa] LT",lastDay: "[Kahapon sa] LT",lastWeek: "dddd [huling linggo] LT",sameElse: "L"},relativeTime: {future: "sa loob ng %s",past: "%s ang nakalipas",s: "ilang segundo",m: "isang minuto",mm: "%d minuto",h: "isang oras",hh: "%d oras",d: "isang araw",dd: "%d araw",M: "isang buwan",MM: "%d buwan",y: "isang taon",yy: "%d taon"},ordinal: function(bc) {
                return bc
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(bc) {
        var i = {1: "'inci",5: "'inci",8: "'inci",70: "'inci",80: "'inci",2: "'nci",7: "'nci",20: "'nci",50: "'nci",3: "'Ã¼ncÃ¼",4: "'Ã¼ncÃ¼",100: "'Ã¼ncÃ¼",6: "'ncÄ±",9: "'uncu",10: "'uncu",30: "'uncu",60: "'Ä±ncÄ±",90: "'Ä±ncÄ±"};
        return bc.lang("tr", {months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),longDateFormat: {LT: "HH:mm",L: "DD.MM.YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd, D MMMM YYYY LT"},calendar: {sameDay: "[bugÃ¼n saat] LT",nextDay: "[yarÄ±n saat] LT",nextWeek: "[haftaya] dddd [saat] LT",lastDay: "[dÃ¼n] LT",lastWeek: "[geÃ§en hafta] dddd [saat] LT",sameElse: "L"},relativeTime: {future: "%s sonra",past: "%s Ã¶nce",s: "birkaÃ§ saniye",m: "bir dakika",mm: "%d dakika",h: "bir saat",hh: "%d saat",d: "bir gÃ¼n",dd: "%d gÃ¼n",M: "bir ay",MM: "%d ay",y: "bir yÄ±l",yy: "%d yÄ±l"},ordinal: function(bf) {
                if (bf === 0) {
                    return bf + "'Ä±ncÄ±"
                }
                var be = bf % 10, bd = bf % 100 - be, bg = bf >= 100 ? 100 : null;
                return bf + (i[be] || i[bd] || i[bg])
            },week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("tzm-la", {months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: "[asdkh g] LT",nextDay: "[aska g] LT",nextWeek: "dddd [g] LT",lastDay: "[assant g] LT",lastWeek: "dddd [g] LT",sameElse: "L"},relativeTime: {future: "dadkh s yan %s",past: "yan %s",s: "imik",m: "minuá¸",mm: "%d minuá¸",h: "saÉ›a",hh: "%d tassaÉ›in",d: "ass",dd: "%d ossan",M: "ayowr",MM: "%d iyyirn",y: "asgas",yy: "%d isgasn"},week: {dow: 6,doy: 12}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("tzm", {months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "dddd D MMMM YYYY LT"},calendar: {sameDay: "[â´°âµ™â´·âµ… â´´] LT",nextDay: "[â´°âµ™â´½â´° â´´] LT",nextWeek: "dddd [â´´] LT",lastDay: "[â´°âµšâ´°âµâµœ â´´] LT",lastWeek: "dddd [â´´] LT",sameElse: "L"},relativeTime: {future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s",past: "âµ¢â´°âµ %s",s: "âµ‰âµŽâµ‰â´½",m: "âµŽâµ‰âµâµ“â´º",mm: "%d âµŽâµ‰âµâµ“â´º",h: "âµ™â´°âµ„â´°",hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ",d: "â´°âµ™âµ™",dd: "%d oâµ™âµ™â´°âµ",M: "â´°âµ¢oâµ“âµ”",MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ",y: "â´°âµ™â´³â´°âµ™",yy: "%d âµ‰âµ™â´³â´°âµ™âµ"},week: {dow: 6,doy: 12}})
    }));
    (function(i) {
        i(P)
    }(function(bf) {
        function bd(bj, bi) {
            var bh = bj.split("_");
            return bi % 10 === 1 && bi % 100 !== 11 ? bh[0] : (bi % 10 >= 2 && bi % 10 <= 4 && (bi % 100 < 10 || bi % 100 >= 20) ? bh[1] : bh[2])
        }
        function bg(bj, bi, bh) {
            var bk = {mm: "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",hh: "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"};
            if (bh === "m") {
                return bi ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ"
            } else {
                if (bh === "h") {
                    return bi ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ"
                } else {
                    return bj + " " + bd(bk[bh], +bj)
                }
            }
        }
        function be(bi, bk) {
            var bh = {nominative: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_"),accusative: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_")}, bj = (/D[oD]? *MMMM?/).test(bk) ? "accusative" : "nominative";
            return bh[bj][bi.month()]
        }
        function i(bh, bk) {
            var bi = {nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")}, bj = (/(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/).test(bk) ? "accusative" : ((/\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/).test(bk) ? "genitive" : "nominative");
            return bi[bj][bh.day()]
        }
        function bc(bh) {
            return function() {
                return bh + "Ð¾" + (this.hours() === 11 ? "Ð±" : "") + "] LT"
            }
        }
        return bf.lang("uk", {months: be,monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),weekdays: i,weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),longDateFormat: {LT: "HH:mm",L: "DD.MM.YYYY",LL: "D MMMM YYYY Ñ€.",LLL: "D MMMM YYYY Ñ€., LT",LLLL: "dddd, D MMMM YYYY Ñ€., LT"},calendar: {sameDay: bc("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),nextDay: bc("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),lastDay: bc("[Ð’Ñ‡Ð¾Ñ€Ð° "),nextWeek: bc("[Ð£] dddd ["),lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return bc("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return bc("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
                    }
                },sameElse: "L"},relativeTime: {future: "Ð·Ð° %s",past: "%s Ñ‚Ð¾Ð¼Ñƒ",s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",m: bg,mm: bg,h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",hh: bg,d: "Ð´ÐµÐ½ÑŒ",dd: bg,M: "Ð¼Ñ–ÑÑÑ†ÑŒ",MM: bg,y: "Ñ€Ñ–Ðº",yy: bg},meridiem: function(bh, bj, bi) {
                if (bh < 4) {
                    return "Ð½Ð¾Ñ‡Ñ–"
                } else {
                    if (bh < 12) {
                        return "Ñ€Ð°Ð½ÐºÑƒ"
                    } else {
                        if (bh < 17) {
                            return "Ð´Ð½Ñ"
                        } else {
                            return "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
                        }
                    }
                }
            },ordinal: function(bh, bi) {
                switch (bi) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return bh + "-Ð¹";
                    case "D":
                        return bh + "-Ð³Ð¾";
                    default:
                        return bh
                }
            },week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("uz", {months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"),weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"),weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM YYYY",LLL: "D MMMM YYYY LT",LLLL: "D MMMM YYYY, dddd LT"},calendar: {sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",nextDay: "[ÐÑ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]",nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",sameElse: "L"},relativeTime: {future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°",past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½",s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚",m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°",mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°",h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚",hh: "%d ÑÐ¾Ð°Ñ‚",d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½",dd: "%d ÐºÑƒÐ½",M: "Ð±Ð¸Ñ€ Ð¾Ð¹",MM: "%d Ð¾Ð¹",y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»",yy: "%d Ð¹Ð¸Ð»"},week: {dow: 1,doy: 7}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("vi", {months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdays: "chá»§ nháºt_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),longDateFormat: {LT: "HH:mm",L: "DD/MM/YYYY",LL: "D MMMM [nÄƒm] YYYY",LLL: "D MMMM [nÄƒm] YYYY LT",LLLL: "dddd, D MMMM [nÄƒm] YYYY LT",l: "DD/M/YYYY",ll: "D MMM YYYY",lll: "D MMM YYYY LT",llll: "ddd, D MMM YYYY LT"},calendar: {sameDay: "[HÃ´m nay lÃºc] LT",nextDay: "[NgÃ y mai lÃºc] LT",nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT",lastDay: "[HÃ´m qua lÃºc] LT",lastWeek: "dddd [tuáº§n rá»“i lÃºc] LT",sameElse: "L"},relativeTime: {future: "%s tá»›i",past: "%s trÆ°á»›c",s: "vÃ i giÃ¢y",m: "má»™t phÃºt",mm: "%d phÃºt",h: "má»™t giá»",hh: "%d giá»",d: "má»™t ngÃ y",dd: "%d ngÃ y",M: "má»™t thÃ¡ng",MM: "%d thÃ¡ng",y: "má»™t nÄƒm",yy: "%d nÄƒm"},ordinal: function(bc) {
                return bc
            },week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("zh-cn", {months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…".split("_"),weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…".split("_"),weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…".split("_"),longDateFormat: {LT: "Ahç‚¹mm",L: "YYYY-MM-DD",LL: "YYYYå¹´MMMDæ—¥",LLL: "YYYYå¹´MMMDæ—¥LT",LLLL: "YYYYå¹´MMMDæ—¥ddddLT",l: "YYYY-MM-DD",ll: "YYYYå¹´MMMDæ—¥",lll: "YYYYå¹´MMMDæ—¥LT",llll: "YYYYå¹´MMMDæ—¥ddddLT"},meridiem: function(bc, be, bd) {
                var bf = bc * 100 + be;
                if (bf < 600) {
                    return "å‡Œæ™¨"
                } else {
                    if (bf < 900) {
                        return "æ—©ä¸Š"
                    } else {
                        if (bf < 1130) {
                            return "ä¸Šåˆ"
                        } else {
                            if (bf < 1230) {
                                return "ä¸åˆ"
                            } else {
                                if (bf < 1800) {
                                    return "ä¸‹åˆ"
                                } else {
                                    return "æ™šä¸Š"
                                }
                            }
                        }
                    }
                }
            },calendar: {sameDay: function() {
                    return this.minutes() === 0 ? "[ä»Šå¤©]Ah[ç‚¹æ•´]" : "[ä»Šå¤©]LT"
                },nextDay: function() {
                    return this.minutes() === 0 ? "[æ˜Žå¤©]Ah[ç‚¹æ•´]" : "[æ˜Žå¤©]LT"
                },lastDay: function() {
                    return this.minutes() === 0 ? "[æ˜¨å¤©]Ah[ç‚¹æ•´]" : "[æ˜¨å¤©]LT"
                },nextWeek: function() {
                    var bc, bd;
                    bc = i().startOf("week");
                    bd = this.unix() - bc.unix() >= 7 * 24 * 3600 ? "[ä¸‹]" : "[æœ¬]";
                    return this.minutes() === 0 ? bd + "dddAhç‚¹æ•´" : bd + "dddAhç‚¹mm"
                },lastWeek: function() {
                    var bc, bd;
                    bc = i().startOf("week");
                    bd = this.unix() < bc.unix() ? "[ä¸Š]" : "[æœ¬]";
                    return this.minutes() === 0 ? bd + "dddAhç‚¹æ•´" : bd + "dddAhç‚¹mm"
                },sameElse: "LL"},ordinal: function(bc, bd) {
                switch (bd) {
                    case "d":
                    case "D":
                    case "DDD":
                        return bc + "æ—¥";
                    case "M":
                        return bc + "æœˆ";
                    case "w":
                    case "W":
                        return bc + "å‘¨";
                    default:
                        return bc
                }
            },relativeTime: {future: "%så†…",past: "%så‰",s: "å‡ ç§’",m: "1åˆ†é’Ÿ",mm: "%dåˆ†é’Ÿ",h: "1å°æ—¶",hh: "%då°æ—¶",d: "1å¤©",dd: "%då¤©",M: "1ä¸ªæœˆ",MM: "%dä¸ªæœˆ",y: "1å¹´",yy: "%då¹´"},week: {dow: 1,doy: 4}})
    }));
    (function(i) {
        i(P)
    }(function(i) {
        return i.lang("zh-tw", {months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…".split("_"),weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…".split("_"),weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…".split("_"),longDateFormat: {LT: "Ahé»žmm",L: "YYYYå¹´MMMDæ—¥",LL: "YYYYå¹´MMMDæ—¥",LLL: "YYYYå¹´MMMDæ—¥LT",LLLL: "YYYYå¹´MMMDæ—¥ddddLT",l: "YYYYå¹´MMMDæ—¥",ll: "YYYYå¹´MMMDæ—¥",lll: "YYYYå¹´MMMDæ—¥LT",llll: "YYYYå¹´MMMDæ—¥ddddLT"},meridiem: function(bc, be, bd) {
                var bf = bc * 100 + be;
                if (bf < 900) {
                    return "æ—©ä¸Š"
                } else {
                    if (bf < 1130) {
                        return "ä¸Šåˆ"
                    } else {
                        if (bf < 1230) {
                            return "ä¸åˆ"
                        } else {
                            if (bf < 1800) {
                                return "ä¸‹åˆ"
                            } else {
                                return "æ™šä¸Š"
                            }
                        }
                    }
                }
            },calendar: {sameDay: "[ä»Šå¤©]LT",nextDay: "[æ˜Žå¤©]LT",nextWeek: "[ä¸‹]ddddLT",lastDay: "[æ˜¨å¤©]LT",lastWeek: "[ä¸Š]ddddLT",sameElse: "L"},ordinal: function(bc, bd) {
                switch (bd) {
                    case "d":
                    case "D":
                    case "DDD":
                        return bc + "æ—¥";
                    case "M":
                        return bc + "æœˆ";
                    case "w":
                    case "W":
                        return bc + "é€±";
                    default:
                        return bc
                }
            },relativeTime: {future: "%så…§",past: "%så‰",s: "å¹¾ç§’",m: "ä¸€åˆ†é˜",mm: "%dåˆ†é˜",h: "ä¸€å°æ™‚",hh: "%då°æ™‚",d: "ä¸€å¤©",dd: "%då¤©",M: "ä¸€å€‹æœˆ",MM: "%då€‹æœˆ",y: "ä¸€å¹´",yy: "%då¹´"}})
    }));
    P.lang("en");
    function Q(i) {
        if (typeof ender !== "undefined") {
            return
        }
        ak = aW.moment;
        if (i) {
            aW.moment = a9("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", P)
        } else {
            aW.moment = P
        }
    }
    if (aj) {
        module.exports = P
    } else {
        if (typeof define === "function" && define.amd) {
            define("moment", ["require", "exports", "module"], function(bc, i, bd) {
                if (bd.config && bd.config() && bd.config().noGlobal === true) {
                    aW.moment = ak
                }
                return P
            });
            Q(true)
        } else {
            Q()
        }
    }
}).call(this);
define("analytics/GoogleAnalytics", [], function() {
    var a = {init: function() {
            if (window.location.host.indexOf("www") > -1) {
                (function(d, e, j, h, f, c, b) {
                    d.GoogleAnalyticsObject = f;
                    d[f] = d[f] || function() {
                        (d[f].q = d[f].q || []).push(arguments)
                    }, d[f].l = 1 * new Date();
                    c = e.createElement(j), b = e.getElementsByTagName(j)[0];
                    c.async = 1;
                    c.src = h;
                    b.parentNode.insertBefore(c, b)
                })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
                ga("create", "UA-56997570-1", "auto");
                ga("send", "pageview")
            }
        }};
    return a
});
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */
;
var split;
split = split || function(b) {
    var d = String.prototype.split, c = /()??/.exec("")[1] === b, a;
    a = function(m, j, i) {
        if (Object.prototype.toString.call(j) !== "[object RegExp]") {
            return d.call(m, j, i)
        }
        var g = [], h = (j.ignoreCase ? "i" : "") + (j.multiline ? "m" : "") + (j.extended ? "x" : "") + (j.sticky ? "y" : ""), e = 0, j = new RegExp(j.source, h + "g"), f, k, l, n;
        m += "";
        if (!c) {
            f = new RegExp("^" + j.source + "$(?!\\s)", h)
        }
        i = i === b ? -1 >>> 0 : i >>> 0;
        while (k = j.exec(m)) {
            l = k.index + k[0].length;
            if (l > e) {
                g.push(m.slice(e, k.index));
                if (!c && k.length > 1) {
                    k[0].replace(f, function() {
                        for (var o = 1; o < arguments.length - 2; o++) {
                            if (arguments[o] === b) {
                                k[o] = b
                            }
                        }
                    })
                }
                if (k.length > 1 && k.index < m.length) {
                    Array.prototype.push.apply(g, k.slice(1))
                }
                n = k[0].length;
                e = l;
                if (g.length >= i) {
                    break
                }
            }
            if (j.lastIndex === k.index) {
                j.lastIndex++
            }
        }
        if (e === m.length) {
            if (n || !j.test("")) {
                g.push("")
            }
        } else {
            g.push(m.slice(e))
        }
        return g.length > i ? g.slice(0, i) : g
    };
    String.prototype.split = function(f, e) {
        return a(this, f, e)
    };
    return a
}();
define("libCustom/stringSplitFixCrossBrowser", function() {
});
define("util/customStringUtil", ["underscore"], function(a) {
    var c = /(https?:\/\/)?([a-zA-z0-9\-]+\.)?([a-zA-Z0-9\-\.\@]+\.([a-zA-Z\-]{2,})+)(\:[0-9]+)*([\/\#\?]($|[^\"\'\)\s\]\}]+))*(?![\w\@\.])/g;
    var b = {isEmpty: function(d) {
            return d == undefined || d.replace(/\s|　/gi, "") == ""
        },extractUrlString: function(f) {
            if (!f) {
                return null
            }
            var d = f.match(c);
            if (d) {
                var e = a.filter(d, function(g) {
                    var h = false;
                    g.replace(c, function(j, i, p, o, n, m, l, k) {
                        if (o && o.indexOf("@") === -1) {
                            h = true
                        }
                        return j
                    });
                    return h
                });
                return e
            }
            return null
        },convertText: function(h) {
            h = h || "";
            var i = "";
            var e = ["com", "edu", "gov", "mil", "net", "org", "biz", "info", "name", "museum", "us", "ca", "uk", "kr"];
            var d = /<band:refer user_no=["'][\d]+["']>([^<]+)<\/band:refer>/g;
            var f = /\n/g;
            var g = /  /g;
            i = h.replace(g, " &nbsp;").replace(d, function(k, j, l) {
                return "<a>" + j + "</a>"
            }).replace(c, function(k, j, q, p, o, n, m, l) {
                if (p && p.indexOf("@") > -1) {
                    return k
                } else {
                    if (k.indexOf("://") > 0) {
                        return '<a href="' + k + '" target="_blank" class="outer_link word_break" >' + k + "</a>"
                    } else {
                        if (a.contains(e, o)) {
                            return '<a href="http://' + k + '" target="_blank" class="outer_link word_break" >' + k + "</a>"
                        } else {
                            return k
                        }
                    }
                }
            }).replace(f, "<br/>");
            return i
        },escapeXML: function(d) {
            return !d ? "" : d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        },unescapeForBandContents: function(d) {
            return !d ? "" : d.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        },escapeForBandContents: function(d) {
            return !d ? "" : d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        },convertForBandContents: function(g) {
            g = g || "";
            var e = g.split(/(<band:[^>]+>[^<]+<\/band:[^>]+>)/);
            var f = /<band:[^>]+>([^<]+)<\/band:[^>]+>/;
            for (var d = 0; d < e.length; d++) {
                if (e[d].match(f)) {
                    e[d] = e[d].replace(f, function(i, h) {
                        return i.replace(h, b.escapeForBandContents(a.unescape(h)))
                    })
                } else {
                    e[d] = b.escapeForBandContents(e[d])
                }
            }
            return e.join("")
        },zeropadWithParseInt: function(d, e) {
            d = d || "0";
            d = parseInt(d, 10);
            d = d + "";
            e = e || 0;
            while (d.length < e) {
                d = "0" + d
            }
            return d
        },ellipsisByLength: function(d, e) {
            if (d.length > e) {
                return d.substring(0, e) + "..."
            }
            return d
        }};
    return b
});
define("app_common", ["jquery", "libCustom/jqueryDefaultSettings", "jqueryUi", "globalize", "underscore", "backbone", "libCustom/backboneDefaultSettings", "marionette", "moment", "analytics/GoogleAnalytics", "libCustom/stringSplitFixCrossBrowser", "util/customStringUtil"], function() {
    var a = require("analytics/GoogleAnalytics");
    a.init()
});
