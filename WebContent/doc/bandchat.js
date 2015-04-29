define("localize/reslang", ["globalize", "localize/localizeSpec", G.appendLocalePostfix("locale/string/string.")], function(b, c) {
    b.culture(c.languageLocale);
    return b
});
define("bandConstants", ["localize/reslang"], function(b) {
    var c = {TOPBAR_HEIGHT: 66,HEADER_HEIGHT: 70,TEXT: {MAX_LENGTH: 10000},FORMAT: {PHOTO: ["png", "jpg", "jpeg", "gif"],PROFILE_IMG: ["png", "jpg", "jpeg"],AUDIO: ["mp3", "ogg", "wav", "wma", "wav", "midi", "mid", "3ga", "amr", "flac"],VIDEO: ["avi", "wmv", "mpg", "mpeg", "mov", "asf", "skm", "k3g", "flv", "mp4", "3gp", "m4v"],HAS_ICON: ["xls", "xlsx", "pdf", "zip", "ppt", "png", "alz", "bmp", "doc", "docx", "exe", "gif", "gul", "htm", "html", "hwp", "ico", "jpeg", "jpg", "etc", "ndoc", "pptx", "rtf", "tif", "tiff", "txt"],HAS_PREVIEW: ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "hwp", "pdf", "txt"],ETC: ["apk", "ipa"]},MEASURE: {FILE_SIZE: ["KB", "MB", "GB", "TB"]},UPLOAD: {MAX_SIZE: {PHOTO: 10 * 1024 * 1024,FILE: 2 * 1024 * 1024 * 1024,VIDEO: 1024 * 1024 * 1024},MAX_COUNT: {PHOTO_ONLY: 100,PHOTO: 100,FILE: 5,VIDEO: 1},PROGRESS_TITLE: {PHOTO: b.STR("pcweb.layer.progressbar.title.photo"),FILE: b.STR("pcweb.layer.progressbar.title.file"),VIDEO: b.STR("pcweb.layer.progressbar.title.video")}},BAND: {ROLE: {LEADER: "leader",CO_LEADER: "coleader",MEMBER: "member"},PERMITTED_OPERATION: {NAME_COVER_EDIT: "name_cover_edit",NOTICE_EDIT: "notice_edit",POSTING: "posting",SCHEDULE: "schedule",INVITATION: "invitation",CONTENTS_DELETION: "contents_deletion",BAN_MEMBER: "ban_member",SET_JOIN_TYPE: "set_join_type",MEDIA_DOWNLOAD: "media_download",ALBUM_NAME_EDIT: "album_name_edit",COMMENTING: "commenting",ACCESS_BIZ_CENTER: "access_biz_center",CREATE_SUBPOST: "create_subpost",SEND_CHARGED_POST_PUSH: "send_charged_post_push"},OPEN_TYPE: {PUBLIC: "public",CLOSED: "closed",SECRET: "secret"},JOIN_TYPE: {APPLICATION: "application",INVITATION: "invitation"},INTRODUCE: {MAX_LENGTH: 100},JOIN_QEUSTION: {MAX_LENGTH: 40},PERSONAL_INFO_AGREEMENTS: {BIRTHDAY: "birthday",CONTACTS: "contacts",EMAIL: "email",PHONE_NUMBER: "phone_number",PROFILE_IMAGE: "profile_image"},BAND_AGREEMENTS: {AD_AGREEMENT: "ad_agreement"}},CHAT: {MESSAGE_TYPE: {NORMAL: "1",STICKER: "10",PHOTO: "11",THIRD_PARTY_GIFT: "12",THIRD_PARTY: "13",AUDIO_MESSAGE: "14",INVITE: "101",QUIT: "102",CHANGE_MESSAGE_PERIOD: "103",OLD_APP_USER: "127",NOT_READ_MSG: "999998",DATE_MSG: "999999"}},SEARCH: {QUERY_TYPE: {NORMAL: "NORMAL",POST_ID: "POST_ID"}},THUMBNAIL_TYPE: {POST_PHOTO_FOLD: "s150",POST_PHOTO_UNFOLD: "w500"},COVER: {BELT_IMAGE_INDEX: {BAND_1: "belt_1",BAND_2: "belt_2",BAND_3: "belt_3",BAND_4: "belt_4",BAND_5: "belt_6",BAND_6: "belt_7",BAND_7: "belt_8",BAND_8: "belt_9",BAND_9: "belt_10",BAND_10: "belt_11",BAND_11: "belt_5",BAND_12: "belt_12",BAND_13: "belt_13",BAND_14: "belt_14",BAND_15: "belt_15"},BELT_IMAGE_INDEX_BAND_4: {BAND_1: "belt_1",BAND_2: "belt_2",BAND_3: "belt_3",BAND_4: "belt_4",BAND_5: "belt_6",BAND_6: "belt_7",BAND_7: "belt_8",BAND_8: "belt_9",BAND_9: "belt_10",BAND_10: "belt_11",BAND_11: "belt_5"}},BAND_COVER_VIEW_INFO: {LAYER: {INVITER_FACE_SIZE: "46"},SMALL: {CLASS_NAME: "more_than_4_band",INVITER_FACE_SIZE: "60"},BIG: {CLASS_NAME: "_4_less_band",INVITER_FACE_SIZE: "80"}},LANGUAGE: {en: {VALUE: "en",LABEL: "English"},ko: {VALUE: "ko",LABEL: "한국어"},ja: {VALUE: "ja",LABEL: "日本語"},"es-ES": {VALUE: "es-ES",LABEL: "Espanol"},"zh-CN": {VALUE: "zh-CN",LABEL: "简体中文"},"zh-TW": {VALUE: "zh-TW",LABEL: "繁體中文"},"zh-HK": {VALUE: "zh-HK",LABEL: "繁體中文(香港)"},th: {VALUE: "th",LABEL: "ไทย"}},STICKER: {SPRITE_SIZE_TYPE: {"104*100": {OS_TYPE: 2,RESOLUTION_TYPE: 2},"75*70": {OS_TYPE: 3,RESOLUTION_TYPE: 0}}},IMAGE_CROP_TYPE: {PROFILE: "profile",COVER: "cover"},POST: {VIEW_TYPE: {ANNIVERSARY: "anniversary",BIRTHDAY: "birthday"}}};
    return c
});
if (typeof JSON !== "object") {
    JSON = {}
}
(function() {
    function f(n) {
        return n < 10 ? "0" + n : n
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b","\t": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"}, rep;
    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }
    function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
        }
    }
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());
define("libs/json2/json2", (function(b) {
    return function() {
        var c, d;
        return c || b.JSON
    }
}(this)));
define("config/apiInfos", ["jquery", "localize/localizeSpec", "libs/json2/json2"], function(c, d, e) {
    var b = {get: function(g) {
            var f = g.replace(/http[s]?:\/\//, "").replace(/\/.*/, "");
            for (var h in b) {
                if (b[h].DOMAIN == f) {
                    return b[h]
                }
            }
        },makeApi: function(g, n, f) {
            var m = g.replace(/http[s]?:\/\//, "");
            var h = b[m];
            var o = /^proxy\:/;
            var l = o.test(n);
            n = n.replace(o, "");
            f = f || {};
            if (h) {
                for (var j = 0; h.DEFAULT_PARAMS && j < h.DEFAULT_PARAMS.length; j++) {
                    var k = h.DEFAULT_PARAMS[j];
                    f = b.__param_generator[k](f)
                }
                if (l) {
                    g = h.PROXY_PREFIX
                } else {
                    g = g.replace(m, h.DOMAIN)
                }
            }
            return g + n + "?" + c.param(f)
        },"api.band.us": {DOMAIN: window.apiDomain,DEFAULT_PARAMS: ["client_info", "language", "country", "version"],PROXY_PREFIX: "/api",USE_FLXHR: true,SUPPORT_JSONP: true},"api.sticker.band.us": {DOMAIN: window.apiStickerDomain,DEFAULT_PARAMS: ["language", "country", "version"],USE_FLXHR: true,SUPPORT_JSONP: true},"calendar-api.band.us": {DOMAIN: window.calendarApiDomain,DEFAULT_PARAMS: ["language", "country", "version", "locale"],USE_FLXHR: true,SUPPORT_JSONP: false},"ad-api.band.us": {DOMAIN: window.adApiDomain,DEFAULT_PARAMS: ["ad_token", "os_type"],USE_FLXHR: true,SUPPORT_JSONP: false},"up.band.us": {DOMAIN: window.uploadServerDomain,DEFAULT_PARAMS: ["language", "country", "version", "locale"],USE_FLXHR: true,SUPPORT_JSONP: false},"view.band.us": {DOMAIN: window.apiViewDomain,DEFAULT_PARAMS: ["language", "country", "version", "locale"]},"help.campmobile.com": {DOMAIN: window.helpServerDomain,DEFAULT_PARAMS: ["for_help.campmobile.com"],USE_FLXHR: true,SUPPORT_JSONP: true},__param_generator: {client_info: function(f) {
                f = f || {};
                var g = {language: d.languageLocale,country: d.countryCode,version: Number(f.version || 1),agent_type: "web",agent_version: f.agent_version || "3.3.1",resolution_type: 100};
                delete f.agent_version;
                c.extend(f, {client_info: e.stringify(g)});
                return f
            },locale: function(h) {
                var f = d.languageLocale + "-" + d.countryCode;
                var g = f.split("-");
                if (g.length == 3) {
                    f = g[0] + "-" + g[1]
                }
                h = h || {};
                h.locale = f;
                return h
            },language: function(f) {
                f = f || {};
                f.language = d.languageLocale;
                return f
            },country: function(f) {
                f = f || {};
                f.country = d.countryCode;
                return f
            },version: function(f) {
                f = f || {};
                f.version = f.version || "1";
                return f
            },"for_help.campmobile.com": function(f) {
                f = f || {};
                f.countryCode = d.countryCode;
                f.languageCode = (d.languageLocale + "-" + d.countryCode).split("-").slice(0, 2).join("-");
                f.serviceCode = "band";
                return f
            },ad_token: function(f) {
                f = f || {};
                f.ad_token = window.adToken;
                return f
            },os_type: function(f) {
                f.os_type = "web";
                return f
            }}};
    return b
});
/*!
 * jQuery Browser Plugin v0.0.6
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2013 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 2013-07-29T17:23:27-07:00
 */
(function(g, f, j) {
    var b, e;
    g.uaMatch = function(m) {
        m = m.toLowerCase();
        var l = /(opr)[\/]([\w.]+)/.exec(m) || /(chrome)[ \/]([\w.]+)/.exec(m) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(m) || /(webkit)[ \/]([\w.]+)/.exec(m) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(m) || /(msie) ([\w.]+)/.exec(m) || m.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(m) || m.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(m) || [];
        var k = /(ipad)/.exec(m) || /(iphone)/.exec(m) || /(android)/.exec(m) || /(windows phone)/.exec(m) || /(win)/.exec(m) || /(mac)/.exec(m) || /(linux)/.exec(m) || /(cros)/i.exec(m) || [];
        return {browser: l[3] || l[1] || "",version: l[2] || "0",platform: k[0] || ""}
    };
    b = g.uaMatch(f.navigator.userAgent);
    e = {};
    if (b.browser) {
        e[b.browser] = true;
        e.version = b.version;
        e.versionNumber = parseInt(b.version)
    }
    if (b.platform) {
        e[b.platform] = true
    }
    if (e.android || e.ipad || e.iphone || e["windows phone"]) {
        e.mobile = true
    }
    if (e.cros || e.mac || e.linux || e.win) {
        e.desktop = true
    }
    if (e.chrome || e.opr || e.safari) {
        e.webkit = true
    }
    if (e.rv) {
        var h = "msie";
        b.browser = h;
        e[h] = true
    }
    if (e.opr) {
        var d = "opera";
        b.browser = d;
        e[d] = true
    }
    if (e.safari && e.android) {
        var c = "android";
        b.browser = c;
        e[c] = true
    }
    e.name = b.browser;
    e.platform = b.platform;
    g.browser = e
})(jQuery, window);
define("libs/jquery/external/jquery.browser", ["jquery"], (function(b) {
    return function() {
        var c, d;
        return c || b.jQuery.browser
    }
}(this)));
(function(p) {
    var r;
    if (typeof module !== "undefined" && module.exports) {
        r = require("buffer").Buffer
    }
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var d = function(R) {
        var Q = {};
        for (var P = 0, O = R.length; P < O; P++) {
            Q[R.charAt(P)] = P
        }
        return Q
    }(n);
    var w = String.fromCharCode;
    var N = function(P) {
        var O = P.charCodeAt(0);
        return O < 128 ? P : O < 2048 ? w(192 | (O >>> 6)) + w(128 | (O & 63)) : w(224 | ((O >>> 12) & 15)) + w(128 | ((O >>> 6) & 63)) + w(128 | (O & 63))
    };
    var g = function(O) {
        return O.replace(/[^\x00-\x7F]/g, N)
    };
    var o = function(R) {
        var Q = [0, 2, 1][R.length % 3], O = R.charCodeAt(0) << 16 | ((R.length > 1 ? R.charCodeAt(1) : 0) << 8) | ((R.length > 2 ? R.charCodeAt(2) : 0)), P = [n.charAt(O >>> 18), n.charAt((O >>> 12) & 63), Q >= 2 ? "=" : n.charAt((O >>> 6) & 63), Q >= 1 ? "=" : n.charAt(O & 63)];
        return P.join("")
    };
    var j = p.btoa || function(O) {
        return O.replace(/[\s\S]{1,3}/g, o)
    };
    var m = r ? function(O) {
        return (new r(O)).toString("base64")
    } : function(O) {
        return j(g(O))
    };
    var f = function(O, P) {
        return !P ? m(O) : m(O).replace(/[+\/]/g, function(Q) {
            return Q == "+" ? "-" : "_"
        })
    };
    var v = function(O) {
        return f(O, true)
    };
    var e = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}/g;
    var s = function(O) {
        return w(O.length < 3 ? ((31 & O.charCodeAt(0)) << 6) | (63 & O.charCodeAt(1)) : ((15 & O.charCodeAt(0)) << 12) | ((63 & O.charCodeAt(1)) << 6) | (63 & O.charCodeAt(2)))
    };
    var c = function(O) {
        return O.replace(e, s)
    };
    var b = function(S) {
        var O = S.length, Q = O % 4, R = (O > 0 ? d[S.charAt(0)] << 18 : 0) | (O > 1 ? d[S.charAt(1)] << 12 : 0) | (O > 2 ? d[S.charAt(2)] << 6 : 0) | (O > 3 ? d[S.charAt(3)] : 0), P = [w(R >>> 16), w((R >>> 8) & 255), w(R & 255)];
        P.length -= [0, 0, 2, 1][Q];
        return P.join("")
    };
    var h = p.atob || function(O) {
        return O.replace(/[\s\S]{1,4}/g, b)
    };
    var x = r ? function(O) {
        return (new r(O, "base64")).toString()
    } : function(O) {
        return c(h(O))
    };
    var k = function(O) {
        return x(O.replace(/[-_]/g, function(P) {
            return P == "-" ? "+" : "/"
        }).replace(/[^A-Za-z0-9\+\/]/g, ""))
    };
    p.Base64 = {atob: h,btoa: j,fromBase64: k,toBase64: f,utob: g,encode: f,encodeURI: v,btou: c,decode: k};
    if (typeof Object.defineProperty === "function") {
        var l = function(O) {
            return {value: O,enumerable: false,writable: true,configurable: true}
        };
        p.Base64.extendString = function() {
            Object.defineProperty(String.prototype, "fromBase64", l(function() {
                return k(this)
            }));
            Object.defineProperty(String.prototype, "toBase64", l(function(O) {
                return f(this, O)
            }))
        }
    }
})(this);
define("libs/base64", (function(b) {
    return function() {
        var c, d;
        return c || b.Base64
    }
}(this)));
define("util/bandUtil", ["jquery", "underscore", "backbone", "bandConstants", "config/apiInfos", "libs/jquery/external/jquery.browser", "localize/localizeSpec", "libs/base64"], function(d, k, b, g, j, e, c, f) {
    var h = {containsChildInLayout: function(m, l) {
            return l.currentView instanceof m
        },makeThumbnailUrl: function(o, m) {
            o = h.replaceResDomain(o);
            var p = /\?/.test(o);
            var l = /type=/.test(o);
            var n = "type=" + m;
            if (p) {
                if (l) {
                    return o.replace(/type=[^&]+/, n)
                } else {
                    return o + "&" + n
                }
            } else {
                return o + "?" + n
            }
        },queryStringToObject: function(m) {
            var l = {};
            if (m) {
                m.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(o, n, r, p) {
                    l[n] = decodeURIComponent(p.replace(/\+/g, " "))
                })
            }
            return l
        },appendParamsToURL: function(l, m) {
            return l + (k.indexOf(l, "?") == -1 ? "?" + d.param(m) : "&" + d.param(m))
        },namespace: function(n) {
            var m = window;
            var l = n.split(".");
            for (var p = 0; p < l.length; p++) {
                var o = l[p];
                if (typeof m[o] == "undefined") {
                    m[o] = {}
                }
                m = m[o]
            }
            return m
        },getLargeMapUrl: function(o, m, n, l) {
            if (l) {
                return "http://map.naver.com/index.nhn?dlevel=11&lat=" + o + "&lng=" + m + "&title=" + encodeURIComponent(f.encode(n || "")) + "&enc=b64"
            } else {
                return "https://www.google.co.kr/maps/place/" + encodeURIComponent(n) + "/@" + o + "," + m
            }
        },getQueryString: function(m, p, n) {
            if (p == null) {
                p = ""
            }
            m = m.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var o = new RegExp("[\\?&]" + m + "=([^&#]*)");
            var l = o.exec(window.location.href);
            if (l == null) {
                return p
            } else {
                var r = l[1];
                if (n) {
                    r = r.replace(/\+/g, " ")
                }
                return decodeURIComponent(r)
            }
        },checkFileFormat: function(o, m, l) {
            o = o.toLowerCase();
            if (m == "FILE") {
                var n = k.union(g.FORMAT.AUDIO, g.FORMAT.VIDEO, g.FORMAT.ETC);
                return !k.contains(n, o)
            } else {
                var n = g.FORMAT[m];
                if (l && l.length > 0) {
                    n = l
                }
                return k.contains(n, o)
            }
        },toStringFileSize: function(m) {
            var l = "";
            if (m < 1024) {
                l = m + "B"
            } else {
                d.each(g.MEASURE.FILE_SIZE, function(n, p) {
                    var o = Math.floor(m / 1024);
                    if (o > 1024) {
                        m = o
                    } else {
                        l = o + p;
                        return false
                    }
                })
            }
            return l
        },checkMaxLength: function(n, l) {
            var m = n.val();
            if (m && m.length > l) {
                setTimeout(function() {
                    if (m.length > l) {
                        alert(G.STR("pcweb.noui.js.alert.limit_str_length", G.format(l, "n0", "en")));
                        n.val(m.substring(0, l));
                        n.trigger("update");
                        n.val(m.substring(0, l))
                    }
                }, 0);
                return false
            }
            return true
        },makeApi: function(l, m, n) {
            return j.makeApi(l, m, n)
        },resizeTo: function(m, l) {
            try {
                window.resizeTo(m, l)
            } catch (n) {
                setTimeout(k.bind(function() {
                    this.resizeTo(m, l)
                }, this), 500)
            }
        },v1FormatErrorHandle: function(l, m) {
            if (h.v1FormatError(l)) {
                if (l.result_data.message) {
                    alert(l.result_data.message)
                }
                h.functionCall(m, "error", l);
                return true
            }
            return false
        },v1FormatError: function(l) {
            return l.result_code && l.result_code != 1
        },functionCall: function(m, l) {
            m && typeof m[l] == "function" && m[l].apply(m, Array.prototype.slice.call(arguments, 2))
        },replaceHttpsRes: function(l) {
            if (location.protocol.match(/^https:/)) {
                l = l.replace("http://band.phinf.campmobile.net/", "https://ssl.pstatic.net/band.phinf/");
                l = l.replace("http://me2day.phinf.naver.net/", "https://ssl.pstatic.net/me2day.phinf/");
                l = l.replace("http://me2daythumb.phinf.naver.net/", "https://ssl.pstatic.net/me2daythumb.phinf/");
                l = l.replace("http://static.band.naver.com/", "https://ssl.pstatic.net/static.band/")
            }
            return l
        },replaceResDomain: function(l) {
            if (!l) {
                return null
            }
            l = l.replace("me2day.phinf.naver.net/", "band.phinf.campmobile.net/");
            return l
        }};
    return h
});
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(b) {
    if (typeof define === "function" && define.amd) {
        define("libs/jquery/external/cookie", ["jquery"], b)
    } else {
        b(jQuery)
    }
}(function(f) {
    var b = /\+/g;
    function e(h) {
        return h
    }
    function c(h) {
        return decodeURIComponent(h.replace(b, " "))
    }
    function g(h) {
        if (h.indexOf('"') === 0) {
            h = h.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            return d.json ? JSON.parse(h) : h
        } catch (j) {
        }
    }
    var d = f.cookie = function(r, p, x) {
        if (p !== undefined) {
            x = f.extend({}, d.defaults, x);
            if (typeof x.expires === "number") {
                var s = x.expires, w = x.expires = new Date();
                w.setDate(w.getDate() + s)
            }
            p = d.json ? JSON.stringify(p) : String(p);
            return (document.cookie = [d.raw ? r : encodeURIComponent(r), "=", d.raw ? p : encodeURIComponent(p), x.expires ? "; expires=" + x.expires.toUTCString() : "", x.path ? "; path=" + x.path : "", x.domain ? "; domain=" + x.domain : "", x.secure ? "; secure" : ""].join(""))
        }
        var h = d.raw ? e : c;
        var v = document.cookie.split("; ");
        var N = r ? undefined : {};
        for (var o = 0, m = v.length; o < m; o++) {
            var n = v[o].split("=");
            var j = h(n.shift());
            var k = h(n.join("="));
            if (r && r === j) {
                N = g(k);
                break
            }
            if (!r) {
                N[j] = g(k)
            }
        }
        return N
    };
    d.defaults = {};
    f.removeCookie = function(j, h) {
        if (f.cookie(j) !== undefined) {
            f.cookie(j, "", f.extend({}, h, {expires: -1}));
            return true
        }
        return false
    }
}));
define("util/bandCookie", ["jquery", "libs/jquery/external/cookie"], function(b) {
    var c = {COOKIE_NAMES: {language: "language",session: "band_session",simpleLogin: "simple_login",chattingBubble: "bd_chat_bubble"},DEFAULT_OPTIONS: {path: "/"},set: function(e, f, d) {
            d = b.extend({}, this.DEFAULT_OPTIONS, d);
            b.cookie(e, f, d)
        },get: function(d) {
            var e = b.cookie(d);
            if (!e || e == "null") {
                e = null
            }
            return e
        },remove: function(e, d) {
            d = b.extend({}, this.DEFAULT_OPTIONS, d);
            b.removeCookie(e, d)
        },getSession: function() {
            var d = this.get(this.COOKIE_NAMES.session);
            if (d) {
                this.set(this.COOKIE_NAMES.session, d, {expires: -1})
            }
            return d
        },removeSession: function() {
            return this.remove(this.COOKIE_NAMES.session, {domain: ".band.us"})
        },getLanguage: function() {
            return this.get(this.COOKIE_NAMES.language)
        },setLanguage: function(d) {
            this.remove(this.COOKIE_NAMES.language);
            this.set(this.COOKIE_NAMES.language, d, {expires: 3650,domain: ".band.us"})
        },getSimpleLogin: function() {
            return this.get(this.COOKIE_NAMES.simpleLogin)
        },setSimpleLogin: function() {
            this.set(this.COOKIE_NAMES.simpleLogin, "shown")
        },removeSimpleLogin: function() {
            this.remove(this.COOKIE_NAMES.simpleLogin)
        },setBoardHomeInvitation: function(f, d) {
            var e = this._makeBoardHomeKey(f, d);
            if (e == null) {
                return
            }
            this.set(e, "1", {expires: 31})
        },getBoardHomeInvitation: function(f, d) {
            var e = this._makeBoardHomeKey(f, d);
            if (e == null) {
                return null
            }
            return this.get(e)
        },_makeBoardHomeKey: function(e, d) {
            if (e == null || d == null) {
                return null
            }
            return ("board_invitation_layer_" + e + "|" + d)
        },setBoardHomeInvitation: function(f, d) {
            var e = this._makeBoardHomeKey(f, d);
            if (e == null) {
                return
            }
            this.set(e, "1", {expires: 31})
        },getNeedBandTypeSetting: function(e, d) {
            return this.get("need_band_type_setting_" + e + "_" + d)
        },setNeedBandTypeSetting: function(e, d) {
            return this.set("need_band_type_setting_" + e + "_" + d, "1")
        },removeBandTypeSetting: function(e, d) {
            return this.remove("need_band_type_setting_" + e + "_" + d)
        },getPromotion: function(d) {
            return this.get("band_evt_" + d)
        },setPromotion: function(d) {
            return this.set("band_evt_" + d, "1", {expires: 30})
        }};
    return c
});
define("user/models/userModel", ["jquery", "underscore", "backbone", "loginUserData", "util/customStringUtil", "util/bandUtil", "util/bandCookie"], function(g, e, j, d, c, b, h) {
    var f = j.Model.extend({url: b.makeApi("https://api.band.us", "/v1/get_profile"),initialize: function(k) {
        },simpleFetch: function(k) {
            this.fetch({success: function(n, l, m) {
                    b.functionCall(k, "success", n, l, m)
                },error: function(n, l, m) {
                    b.functionCall(k, "error", n, l, m)
                }})
        },hasCellphone: function() {
            return !c.isEmpty(this.get("cellphone"))
        },hasEmail: function() {
            return !c.isEmpty(this.get("email"))
        },hasPassword: function() {
            return this.get("is_exist_password")
        },getFace: function() {
            var k = g.trim(this.get("face")) || window.resBaseUrl + "/images/template/profile_354x354.gif";
            return k
        },getFaceThumbnail: function(k) {
            k = k || "s75";
            var l = g.trim(this.get("face")) || (k == "s75" ? window.resBaseUrl + "/images/template/profile_60x60.gif" : window.resBaseUrl + "/images/template/profile_354x354.gif");
            return b.makeThumbnailUrl(l, k)
        },getConnectedInfo: function() {
            var m = this.get("email");
            var k = this.get("naver_id");
            var p = !c.isEmpty(k);
            var o = !c.isEmpty(this.get("facebook_user_id"));
            var l = !c.isEmpty(this.get("line_user_id"));
            var n = !c.isEmpty(m) && this.get("is_email_verified") == true;
            return {naverId: k,email: m,connectedWithNaver: p,connectedWithFacebook: o,connectedWithLine: l,connectedWithEmail: n}
        },hasConnectedId: function() {
            var k = this.getConnectedInfo();
            return k.connectedWithNaver || k.connectedWithFacebook || k.connectedWithEmail
        },parse: function(k) {
            if (b.v1FormatErrorHandle(k)) {
                return false
            }
            return k.result_data || k
        },getUserNo: function() {
            return this.get("user_no")
        }});
    return f
});
define("band/models/bandModel", ["jquery", "underscore", "backbone", "util/bandUtil", "bandConstants"], function(e, c, g, b, f) {
    var d = g.Model.extend({defaults: {access_status: {},properties: {},view_type: "normal",need_horizontal_cover: false,preview: {},join_type: "invitation"},url: b.makeApi("https://api.band.us", "/v1.4/get_band_information"),idAttribute: "band_id",initialize: function(h) {
        },simpleFetch: function(h) {
            var j = {band_no: this.get("band_no")};
            this.fetch({update: true,remove: true,data: j,success: function(l, m, k) {
                    if (m.result_code && m.result_code != 1) {
                        b.functionCall(h, "error", m)
                    } else {
                        b.functionCall(h, "success", l, m, k)
                    }
                }})
        },hasFullNotices: function() {
            return !!this.get("band_notices") && this.get("band_notices").length >= 3
        },isAllowChatAll: function() {
            return this._isAllowedPermission("is_band_chat_enabled")
        },isAllowChat1N: function() {
            return this._isAllowedPermission("is_member_selectable_for_chat")
        },isAllowCellphone: function() {
            return this._isAllowedPermission("open_cellphone")
        },isAllowBirthday: function() {
            return this._isAllowedPermission("open_birthday")
        },isAllowBillSplit: function() {
            return this._isAllowedPermission("is_bill_split_enabled")
        },isAllowMemberInvitation: function() {
            return this._isAllowedPermission("is_member_selectable_for_invitation")
        },isAllowMemberListEnabled: function() {
            return this._isAllowedPermission("is_member_list_enabled")
        },isAllowSharingContents: function() {
            return this._isAllowedPermission("is_sharing_contents_enabled")
        },isAllowMention: function() {
            return this._isAllowedPermission("is_mention_enabled")
        },isAllowNamedVote: function() {
            return this._isAllowedPermission("is_named_vote_enabled")
        },isAllowRSVP: function() {
            return this._isAllowedPermission("is_rsvp_list_enabled")
        },_isAllowedPermission: function(k) {
            if (!k) {
                return true
            }
            var j = this.get("properties");
            var l = j[k];
            if (c.isBoolean(l)) {
                return l
            }
            if (c.isArray(l)) {
                var h = this.get("membership");
                return !(c.contains(l, h))
            }
            return true
        },isAllowPost: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.POSTING)
        },isAllowCreateSchedule: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.SCHEDULE)
        },isAllowDownload: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.MEDIA_DOWNLOAD)
        },isAllowNoticePost: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.NOTICE_EDIT)
        },isAllowPostCommentDeletion: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.CONTENTS_DELETION)
        },isAllowBandNameCoverEdit: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.NAME_COVER_EDIT)
        },isAllowBanMember: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.BAN_MEMBER)
        },isAllowAlbumNameEdit: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.ALBUM_NAME_EDIT)
        },isAllowCommenting: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.COMMENTING)
        },isAllowAccessBizCenter: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.ACCESS_BIZ_CENTER)
        },isAllowCreateSubpost: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.CREATE_SUBPOST)
        },isAllowSendChargedPostPush: function() {
            return this._isMemberPermittedOperation(f.BAND.PERMITTED_OPERATION.SEND_CHARGED_POST_PUSH)
        },_isMemberPermittedOperation: function(h) {
            if (!h) {
                return true
            }
            var j = this.get("properties");
            var k = j.permitted_operation;
            if (c.isArray(k)) {
                return c.contains(k, h)
            }
            return true
        },hasLeaderPermission: function(h) {
            return this.getLeaderNo() == h
        },isInvitedBand: function() {
            return !!this.get("inviter")
        },getBandCoverImageInfo: function() {
            var j = this.get("cover");
            if (j != null) {
                j = b.makeThumbnailUrl(j, "cover_a640")
            } else {
                j = resBaseUrl + "/images/template/default_cover_209x157.png"
            }
            var h = null;
            if (!(h = f.COVER.BELT_IMAGE_INDEX[this.get("theme_color")])) {
                h = "belt_1"
            }
            return {coverImage: j,beltImage: h}
        },getOriginalCoverImage: function() {
            return this.get("cover")
        },getOriginalBandId: function() {
            return this.get("band_id")
        },getBandID: function() {
            return this.get("band_id").replace(/^m2_/, "")
        },isLeaderOpenCellphone: function() {
            return this.get("leader_open_cellphone")
        },isLeaderOpenBirthday: function() {
            return this.get("leader_open_birthday")
        },isPostMembersBirthday: function() {
            return this.get("post_members_birthday")
        },getViewType: function() {
            return this.get("view_type")
        },isNormalViewType: function() {
            return this.getViewType() == "normal"
        },isPreviewViewType: function() {
            return this.getViewType() == "preview"
        },isCardViewType: function() {
            return this.getViewType() == "card"
        },isNeedHorizontalCover: function() {
            return !!this.get("need_horizontal_cover")
        },getBandName: function() {
            return this.get("name")
        },getBandNo: function() {
            return this.get("band_no")
        },setBandNo: function(h) {
            this.set("band_no", h)
        },getThemeColor: function() {
            return this.get("theme_color")
        },getLeaderNo: function() {
            return this.get("leader_no")
        },getSince: function() {
            return this.get("since")
        },getMemberCount: function() {
            return this.get("member_count")
        },getDescription: function() {
            return this.get("description")
        },getPreviewInfo: function() {
            return new d(this.get("preview"))
        },getJoinType: function() {
            return this.get("join_type")
        },isLeader: function(h) {
            return this.getLeaderNo() == h
        },getAskJoinQuestion: function() {
            return this.get("ask_join_question")
        },getJoinQuestion: function() {
            return this.get("join_question")
        },getName: function() {
            return this.get("name")
        },isShowAdAgreement: function() {
            return !!this.get("show_ad_agreement")
        },parse: function(h) {
            return h.result_data || h
        }});
    return d
});
define("member/models/memberModel", ["jquery", "underscore", "backbone", "util/bandUtil", "bandConstants"], function(e, d, g, c, f) {
    var b = g.Model.extend({defaults: {},idAttribute: "id",initialize: function(h) {
        },getFace: function() {
            var h = e.trim(this.get("member_profile_image_url")) || e.trim(this.get("face")) || window.resBaseUrl + "/images/template/profile_354x354.gif";
            return h
        },getFaceThumbnail: function(j, k) {
            j = j || "s75";
            var h = window.resBaseUrl + "/images/template/profile_354x354.gif";
            if (j == "s75") {
                h = window.resBaseUrl + "/images/template/profile_60x60.gif"
            }
            if (k) {
                h = window.resBaseUrl + "/images/template/profile_145x145.png"
            }
            var l = e.trim(this.get("member_profile_image_url")) || e.trim(this.get("face")) || e.trim(this.get("thumbnail")) || e.trim(this.get("profile_image_url")) || h;
            return c.makeThumbnailUrl(l, j)
        },isLeader: function() {
            return this.get("role") === f.BAND.ROLE.LEADER
        },isCoLeader: function() {
            return this.get("role") === f.BAND.ROLE.CO_LEADER
        },isNormalMember: function() {
            return this.get("role") === f.BAND.ROLE.MEMBER
        },isSameUser: function(h) {
            return this.getUserNo() == h
        },getUserNo: function() {
            return this.get("user_no")
        },getName: function() {
            return this.get("name")
        }});
    return b
});
define("band/collections/bandCollection", ["jquery", "underscore", "backbone", "band/models/bandModel", "member/models/memberModel", "util/bandUtil"], function(g, d, h, f, c, b) {
    var e = h.Collection.extend({defaults: {},model: f,url: b.makeApi("https://api.band.us", "/v1.4/get_band_list"),initialize: function(k, j) {
        },simpleFetch: function(j) {
            var k = {};
            this.fetch({data: k,reset: true,success: function(n, m, l) {
                    if (m.result_code && m.result_code != 1) {
                        if (m.result_data.message) {
                            alert(m.result_data.message)
                        }
                        b.functionCall(j, "error", m)
                    } else {
                        b.functionCall(j, "success", n, m, l)
                    }
                },error: function(n, m, l) {
                    b.functionCall(j, "error", n, m, l)
                }})
        },getFullBandCollection: function() {
            return this.fullBandList
        },getInvitationCollection: function() {
            return this.invitations
        },_setInvitation: function(l, j) {
            var k = g.map(l, function(n, m) {
                n.band.inviter = new c(n.inviter);
                n.band.invitation_id = n.invitation_id;
                n.band.member_count = n.member_count;
                n.band.member_thumbnail_list = n.member_thumbnail_list;
                n.band.join_type = n.join_type;
                return n.band
            });
            k = d.filter(k, function(m) {
                return d.where(j, {band_id: m.band_id}).length === 0
            });
            if (!this.invitations) {
                this.invitations = new h.Collection(k, {model: f})
            } else {
                this.invitations.reset(k)
            }
        },_createFullList: function() {
            var j = d.union(this.invitations.toJSON(), this.toJSON());
            if (!this.fullBandList) {
                this.fullBandList = new h.Collection(j, {model: f});
                this.fullBandList.listenTo(this, "remove", d.bind(function(k, l) {
                    this.fullBandList.remove(k)
                }, this));
                this.fullBandList.listenTo(this, "add", d.bind(function(k, l) {
                    this.fullBandList.add(k)
                }, this));
                this.fullBandList.listenTo(this, "reset", d.bind(function(k, m) {
                    var l = d.union(this.invitations.toJSON(), this.toJSON());
                    this.fullBandList.reset(l)
                }, this))
            } else {
                this.fullBandList.reset(j)
            }
        },parse: function(k) {
            var l = k.result_data.invitations;
            var j = k.result_data.bands;
            this._setInvitation(l, j);
            this._createFullList();
            return j
        }});
    return e
});
function q(b) {
    throw b
}
var t = void 0, u = !1;
var sjcl = {cipher: {},hash: {},keyexchange: {},mode: {},misc: {},codec: {},exception: {corrupt: function(b) {
            this.toString = function() {
                return "CORRUPT: " + this.message
            };
            this.message = b
        },invalid: function(b) {
            this.toString = function() {
                return "INVALID: " + this.message
            };
            this.message = b
        },bug: function(b) {
            this.toString = function() {
                return "BUG: " + this.message
            };
            this.message = b
        },notReady: function(b) {
            this.toString = function() {
                return "NOT READY: " + this.message
            };
            this.message = b
        }}};
"undefined" !== typeof module && module.exports && (module.exports = sjcl);
sjcl.cipher.aes = function(k) {
    this.k[0][0][0] || this.D();
    var j, r, p, o, n = this.k[0][4], m = this.k[1];
    j = k.length;
    var l = 1;
    4 !== j && (6 !== j && 8 !== j) && q(new sjcl.exception.invalid("invalid aes key size"));
    this.b = [p = k.slice(0), o = []];
    for (k = j; k < 4 * j + 28; k++) {
        r = p[k - 1];
        if (0 === k % j || 8 === j && 4 === k % j) {
            r = n[r >>> 24] << 24 ^ n[r >> 16 & 255] << 16 ^ n[r >> 8 & 255] << 8 ^ n[r & 255], 0 === k % j && (r = r << 8 ^ r >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))
        }
        p[k] = p[k - j] ^ r
    }
    for (j = 0; k; j++, k--) {
        r = p[j & 3 ? k : k - 4], o[j] = 4 >= k || 4 > j ? r : m[0][n[r >>> 24]] ^ m[1][n[r >> 16 & 255]] ^ m[2][n[r >> 8 & 255]] ^ m[3][n[r & 255]]
    }
};
sjcl.cipher.aes.prototype = {encrypt: function(b) {
        return y(this, b, 0)
    },decrypt: function(b) {
        return y(this, b, 1)
    },k: [[[], [], [], [], []], [[], [], [], [], []]],D: function() {
        var S = this.k[0], R = this.k[1], Q = S[4], P = R[4], O, N, x, w = [], s = [], v, o, r, j;
        for (O = 0; 256 > O; O++) {
            s[(w[O] = O << 1 ^ 283 * (O >> 7)) ^ O] = O
        }
        for (N = x = 0; !Q[N]; N ^= v || 1, x = s[x] || 1) {
            r = x ^ x << 1 ^ x << 2 ^ x << 3 ^ x << 4;
            r = r >> 8 ^ r & 255 ^ 99;
            Q[N] = r;
            P[r] = N;
            o = w[O = w[v = w[N]]];
            j = 16843009 * o ^ 65537 * O ^ 257 * v ^ 16843008 * N;
            o = 257 * w[r] ^ 16843008 * r;
            for (O = 0; 4 > O; O++) {
                S[O][N] = o = o << 24 ^ o >>> 8, R[O][r] = j = j << 24 ^ j >>> 8
            }
        }
        for (O = 0; 5 > O; O++) {
            S[O] = S[O].slice(0), R[O] = R[O].slice(0)
        }
    }};
function y(ac, ab, aa) {
    4 !== ab.length && q(new sjcl.exception.invalid("invalid aes block size"));
    var Z = ac.b[aa], Y = ab[0] ^ Z[0], X = ab[aa ? 3 : 1] ^ Z[1], W = ab[2] ^ Z[2];
    ab = ab[aa ? 1 : 3] ^ Z[3];
    var V, T, U, R = Z.length / 4 - 2, S, Q = 4, O = [0, 0, 0, 0];
    V = ac.k[aa];
    ac = V[0];
    var P = V[1], N = V[2], o = V[3], j = V[4];
    for (S = 0; S < R; S++) {
        V = ac[Y >>> 24] ^ P[X >> 16 & 255] ^ N[W >> 8 & 255] ^ o[ab & 255] ^ Z[Q], T = ac[X >>> 24] ^ P[W >> 16 & 255] ^ N[ab >> 8 & 255] ^ o[Y & 255] ^ Z[Q + 1], U = ac[W >>> 24] ^ P[ab >> 16 & 255] ^ N[Y >> 8 & 255] ^ o[X & 255] ^ Z[Q + 2], ab = ac[ab >>> 24] ^ P[Y >> 16 & 255] ^ N[X >> 8 & 255] ^ o[W & 255] ^ Z[Q + 3], Q += 4, Y = V, X = T, W = U
    }
    for (S = 0; 4 > S; S++) {
        O[aa ? 3 & -S : S] = j[Y >>> 24] << 24 ^ j[X >> 16 & 255] << 16 ^ j[W >> 8 & 255] << 8 ^ j[ab & 255] ^ Z[Q++], V = Y, Y = X, X = W, W = ab, ab = V
    }
    return O
}
sjcl.bitArray = {bitSlice: function(e, d, f) {
        e = sjcl.bitArray.P(e.slice(d / 32), 32 - (d & 31)).slice(1);
        return f === t ? e : sjcl.bitArray.clamp(e, f - d)
    },extract: function(f, e, h) {
        var g = Math.floor(-e - h & 31);
        return ((e + h - 1 ^ e) & -32 ? f[e / 32 | 0] << 32 - g ^ f[e / 32 + 1 | 0] >>> g : f[e / 32 | 0] >>> g) & (1 << h) - 1
    },concat: function(f, e) {
        if (0 === f.length || 0 === e.length) {
            return f.concat(e)
        }
        var h = f[f.length - 1], g = sjcl.bitArray.getPartial(h);
        return 32 === g ? f.concat(e) : sjcl.bitArray.P(e, g, h | 0, f.slice(0, f.length - 1))
    },bitLength: function(d) {
        var c = d.length;
        return 0 === c ? 0 : 32 * (c - 1) + sjcl.bitArray.getPartial(d[c - 1])
    },clamp: function(e, d) {
        if (32 * e.length < d) {
            return e
        }
        e = e.slice(0, Math.ceil(d / 32));
        var f = e.length;
        d &= 31;
        0 < f && d && (e[f - 1] = sjcl.bitArray.partial(d, e[f - 1] & 2147483648 >> d - 1, 1));
        return e
    },partial: function(e, d, f) {
        return 32 === e ? d : (f ? d | 0 : d << 32 - e) + 1099511627776 * e
    },getPartial: function(b) {
        return Math.round(b / 1099511627776) || 32
    },equal: function(f, e) {
        if (sjcl.bitArray.bitLength(f) !== sjcl.bitArray.bitLength(e)) {
            return u
        }
        var h = 0, g;
        for (g = 0; g < f.length; g++) {
            h |= f[g] ^ e[g]
        }
        return 0 === h
    },P: function(g, f, k, j) {
        var h;
        h = 0;
        for (j === t && (j = []); 32 <= f; f -= 32) {
            j.push(k), k = 0
        }
        if (0 === f) {
            return j.concat(g)
        }
        for (h = 0; h < g.length; h++) {
            j.push(k | g[h] >>> f), k = g[h] << 32 - f
        }
        h = g.length ? g[g.length - 1] : 0;
        g = sjcl.bitArray.getPartial(h);
        j.push(sjcl.bitArray.partial(f + g & 31, 32 < f + g ? k : j.pop(), 1));
        return j
    },l: function(d, c) {
        return [d[0] ^ c[0], d[1] ^ c[1], d[2] ^ c[2], d[3] ^ c[3]]
    }};
sjcl.codec.utf8String = {fromBits: function(g) {
        var f = "", k = sjcl.bitArray.bitLength(g), j, h;
        for (j = 0; j < k / 8; j++) {
            0 === (j & 3) && (h = g[j / 4]), f += String.fromCharCode(h >>> 24), h <<= 8
        }
        return decodeURIComponent(escape(f))
    },toBits: function(f) {
        f = unescape(encodeURIComponent(f));
        var e = [], h, g = 0;
        for (h = 0; h < f.length; h++) {
            g = g << 8 | f.charCodeAt(h), 3 === (h & 3) && (e.push(g), g = 0)
        }
        h & 3 && e.push(sjcl.bitArray.partial(8 * (h & 3), g));
        return e
    }};
sjcl.codec.hex = {fromBits: function(e) {
        var d = "", f;
        for (f = 0; f < e.length; f++) {
            d += ((e[f] | 0) + 263882790666240).toString(16).substr(4)
        }
        return d.substr(0, sjcl.bitArray.bitLength(e) / 4)
    },toBits: function(f) {
        var e, h = [], g;
        f = f.replace(/\s|0x/g, "");
        g = f.length;
        f += "00000000";
        for (e = 0; e < f.length; e += 8) {
            h.push(parseInt(f.substr(e, 8), 16) ^ 0)
        }
        return sjcl.bitArray.clamp(h, 4 * g)
    }};
sjcl.codec.base64 = {J: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits: function(k, j, r) {
        var p = "", o = 0, n = sjcl.codec.base64.J, m = 0, l = sjcl.bitArray.bitLength(k);
        r && (n = n.substr(0, 62) + "-_");
        for (r = 0; 6 * p.length < l; ) {
            p += n.charAt((m ^ k[r] >>> o) >>> 26), 6 > o ? (m = k[r] << 6 - o, o += 26, r++) : (m <<= 6, o -= 6)
        }
        for (; p.length & 3 && !j; ) {
            p += "="
        }
        return p
    },toBits: function(k, j) {
        k = k.replace(/\s|=/g, "");
        var r = [], p, o = 0, n = sjcl.codec.base64.J, m = 0, l;
        j && (n = n.substr(0, 62) + "-_");
        for (p = 0; p < k.length; p++) {
            l = n.indexOf(k.charAt(p)), 0 > l && q(new sjcl.exception.invalid("this isn't base64!")), 26 < o ? (o -= 26, r.push(m ^ l >>> o), m = l << 32 - o) : (o += 6, m ^= l << 32 - o)
        }
        o & 56 && r.push(sjcl.bitArray.partial(o & 56, m, 1));
        return r
    }};
sjcl.codec.base64url = {fromBits: function(b) {
        return sjcl.codec.base64.fromBits(b, 1, 1)
    },toBits: function(b) {
        return sjcl.codec.base64.toBits(b, 1)
    }};
sjcl.hash.sha256 = function(b) {
    this.b[0] || this.D();
    b ? (this.r = b.r.slice(0), this.o = b.o.slice(0), this.h = b.h) : this.reset()
};
sjcl.hash.sha256.hash = function(b) {
    return (new sjcl.hash.sha256).update(b).finalize()
};
sjcl.hash.sha256.prototype = {blockSize: 512,reset: function() {
        this.r = this.N.slice(0);
        this.o = [];
        this.h = 0;
        return this
    },update: function(e) {
        "string" === typeof e && (e = sjcl.codec.utf8String.toBits(e));
        var d, f = this.o = sjcl.bitArray.concat(this.o, e);
        d = this.h;
        e = this.h = d + sjcl.bitArray.bitLength(e);
        for (d = 512 + d & -512; d <= e; d += 512) {
            z(this, f.splice(0, 16))
        }
        return this
    },finalize: function() {
        var e, d = this.o, f = this.r, d = sjcl.bitArray.concat(d, [sjcl.bitArray.partial(1, 1)]);
        for (e = d.length + 2; e & 15; e++) {
            d.push(0)
        }
        d.push(Math.floor(this.h / 4294967296));
        for (d.push(this.h | 0); d.length; ) {
            z(this, d.splice(0, 16))
        }
        this.reset();
        return f
    },N: [],b: [],D: function() {
        function f(b) {
            return 4294967296 * (b - Math.floor(b)) | 0
        }
        var e = 0, h = 2, g;
        f: for (; 64 > e; h++) {
            for (g = 2; g * g <= h; g++) {
                if (0 === h % g) {
                    continue f
                }
            }
            8 > e && (this.N[e] = f(Math.pow(h, 0.5)));
            this.b[e] = f(Math.pow(h, 1 / 3));
            e++
        }
    }};
function z(W, V) {
    var U, T, S, R = V.slice(0), Q = W.r, P = W.b, N = Q[0], O = Q[1], w = Q[2], x = Q[3], o = Q[4], Y = Q[5], j = Q[6], X = Q[7];
    for (U = 0; 64 > U; U++) {
        16 > U ? T = R[U] : (T = R[U + 1 & 15], S = R[U + 14 & 15], T = R[U & 15] = (T >>> 7 ^ T >>> 18 ^ T >>> 3 ^ T << 25 ^ T << 14) + (S >>> 17 ^ S >>> 19 ^ S >>> 10 ^ S << 15 ^ S << 13) + R[U & 15] + R[U + 9 & 15] | 0), T = T + X + (o >>> 6 ^ o >>> 11 ^ o >>> 25 ^ o << 26 ^ o << 21 ^ o << 7) + (j ^ o & (Y ^ j)) + P[U], X = j, j = Y, Y = o, o = x + T | 0, x = w, w = O, O = N, N = T + (O & w ^ x & (O ^ w)) + (O >>> 2 ^ O >>> 13 ^ O >>> 22 ^ O << 30 ^ O << 19 ^ O << 10) | 0
    }
    Q[0] = Q[0] + N | 0;
    Q[1] = Q[1] + O | 0;
    Q[2] = Q[2] + w | 0;
    Q[3] = Q[3] + x | 0;
    Q[4] = Q[4] + o | 0;
    Q[5] = Q[5] + Y | 0;
    Q[6] = Q[6] + j | 0;
    Q[7] = Q[7] + X | 0
}
sjcl.mode.ccm = {name: "ccm",encrypt: function(x, w, v, s, r) {
        var p, o = w.slice(0), n = sjcl.bitArray, j = n.bitLength(v) / 8, m = n.bitLength(o) / 8;
        r = r || 64;
        s = s || [];
        7 > j && q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"));
        for (p = 2; 4 > p && m >>> 8 * p; p++) {
        }
        p < 15 - j && (p = 15 - j);
        v = n.clamp(v, 8 * (15 - p));
        w = sjcl.mode.ccm.L(x, w, v, s, r, p);
        o = sjcl.mode.ccm.p(x, o, v, w, r, p);
        return n.concat(o.data, o.tag)
    },decrypt: function(x, w, v, s, r) {
        r = r || 64;
        s = s || [];
        var p = sjcl.bitArray, o = p.bitLength(v) / 8, n = p.bitLength(w), j = p.clamp(w, n - r), m = p.bitSlice(w, n - r), n = (n - r) / 8;
        7 > o && q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"));
        for (w = 2; 4 > w && n >>> 8 * w; w++) {
        }
        w < 15 - o && (w = 15 - o);
        v = p.clamp(v, 8 * (15 - w));
        j = sjcl.mode.ccm.p(x, j, v, m, r, w);
        x = sjcl.mode.ccm.L(x, j.data, v, s, r, w);
        p.equal(j.tag, x) || q(new sjcl.exception.corrupt("ccm: tag doesn't match"));
        return j.data
    },L: function(v, s, r, p, o, n) {
        var m = [], k = sjcl.bitArray, j = k.l;
        o /= 8;
        (o % 2 || 4 > o || 16 < o) && q(new sjcl.exception.invalid("ccm: invalid tag length"));
        (4294967295 < p.length || 4294967295 < s.length) && q(new sjcl.exception.bug("ccm: can't deal with 4GiB or more data"));
        n = [k.partial(8, (p.length ? 64 : 0) | o - 2 << 2 | n - 1)];
        n = k.concat(n, r);
        n[3] |= k.bitLength(s) / 8;
        n = v.encrypt(n);
        if (p.length) {
            r = k.bitLength(p) / 8;
            65279 >= r ? m = [k.partial(16, r)] : 4294967295 >= r && (m = k.concat([k.partial(16, 65534)], [r]));
            m = k.concat(m, p);
            for (p = 0; p < m.length; p += 4) {
                n = v.encrypt(j(n, m.slice(p, p + 4).concat([0, 0, 0])))
            }
        }
        for (p = 0; p < s.length; p += 4) {
            n = v.encrypt(j(n, s.slice(p, p + 4).concat([0, 0, 0])))
        }
        return k.clamp(n, 8 * o)
    },p: function(x, w, v, s, r, p) {
        var o, n = sjcl.bitArray;
        o = n.l;
        var j = w.length, m = n.bitLength(w);
        v = n.concat([n.partial(8, p - 1)], v).concat([0, 0, 0]).slice(0, 4);
        s = n.bitSlice(o(s, x.encrypt(v)), 0, r);
        if (!j) {
            return {tag: s,data: []}
        }
        for (o = 0; o < j; o += 4) {
            v[3]++, r = x.encrypt(v), w[o] ^= r[0], w[o + 1] ^= r[1], w[o + 2] ^= r[2], w[o + 3] ^= r[3]
        }
        return {tag: s,data: n.clamp(w, m)}
    }};
sjcl.mode.ocb2 = {name: "ocb2",encrypt: function(S, R, Q, P, O, N) {
        128 !== sjcl.bitArray.bitLength(Q) && q(new sjcl.exception.invalid("ocb iv must be 128 bits"));
        var x, w = sjcl.mode.ocb2.H, s = sjcl.bitArray, v = s.l, o = [0, 0, 0, 0];
        Q = w(S.encrypt(Q));
        var r, j = [];
        P = P || [];
        O = O || 64;
        for (x = 0; x + 4 < R.length; x += 4) {
            r = R.slice(x, x + 4), o = v(o, r), j = j.concat(v(Q, S.encrypt(v(Q, r)))), Q = w(Q)
        }
        r = R.slice(x);
        R = s.bitLength(r);
        x = S.encrypt(v(Q, [0, 0, 0, R]));
        r = s.clamp(v(r.concat([0, 0, 0]), x), R);
        o = v(o, v(r.concat([0, 0, 0]), x));
        o = S.encrypt(v(o, v(Q, w(Q))));
        P.length && (o = v(o, N ? P : sjcl.mode.ocb2.pmac(S, P)));
        return j.concat(s.concat(r, s.clamp(o, O)))
    },decrypt: function(V, U, T, S, R, Q) {
        128 !== sjcl.bitArray.bitLength(T) && q(new sjcl.exception.invalid("ocb iv must be 128 bits"));
        R = R || 64;
        var P = sjcl.mode.ocb2.H, O = sjcl.bitArray, x = O.l, N = [0, 0, 0, 0], v = P(V.encrypt(T)), w, o, W = sjcl.bitArray.bitLength(U) - R, j = [];
        S = S || [];
        for (T = 0; T + 4 < W / 32; T += 4) {
            w = x(v, V.decrypt(x(v, U.slice(T, T + 4)))), N = x(N, w), j = j.concat(w), v = P(v)
        }
        o = W - 32 * T;
        w = V.encrypt(x(v, [0, 0, 0, o]));
        w = x(w, O.clamp(U.slice(T), o).concat([0, 0, 0]));
        N = x(N, w);
        N = V.encrypt(x(N, x(v, P(v))));
        S.length && (N = x(N, Q ? S : sjcl.mode.ocb2.pmac(V, S)));
        O.equal(O.clamp(N, R), O.bitSlice(U, W)) || q(new sjcl.exception.corrupt("ocb: tag doesn't match"));
        return j.concat(O.clamp(w, o))
    },pmac: function(k, j) {
        var r, p = sjcl.mode.ocb2.H, o = sjcl.bitArray, n = o.l, m = [0, 0, 0, 0], l = k.encrypt([0, 0, 0, 0]), l = n(l, p(p(l)));
        for (r = 0; r + 4 < j.length; r += 4) {
            l = p(l), m = n(m, k.encrypt(n(l, j.slice(r, r + 4))))
        }
        r = j.slice(r);
        128 > o.bitLength(r) && (l = n(l, p(l)), r = o.concat(r, [-2147483648, 0, 0, 0]));
        m = n(m, r);
        return k.encrypt(n(p(n(l, p(l))), m))
    },H: function(b) {
        return [b[0] << 1 ^ b[1] >>> 31, b[1] << 1 ^ b[2] >>> 31, b[2] << 1 ^ b[3] >>> 31, b[3] << 1 ^ 135 * (b[0] >>> 31)]
    }};
sjcl.mode.gcm = {name: "gcm",encrypt: function(h, g, m, l, k) {
        var j = g.slice(0);
        g = sjcl.bitArray;
        l = l || [];
        h = sjcl.mode.gcm.p(!0, h, j, l, m, k || 128);
        return g.concat(h.data, h.tag)
    },decrypt: function(k, j, r, p, o) {
        var n = j.slice(0), m = sjcl.bitArray, l = m.bitLength(n);
        o = o || 128;
        p = p || [];
        o <= l ? (j = m.bitSlice(n, l - o), n = m.bitSlice(n, 0, l - o)) : (j = n, n = []);
        k = sjcl.mode.gcm.p(u, k, n, p, r, o);
        m.equal(k.tag, j) || q(new sjcl.exception.corrupt("gcm: tag doesn't match"));
        return k.data
    },Z: function(k, j) {
        var r, p, o, n, m, l = sjcl.bitArray.l;
        o = [0, 0, 0, 0];
        n = j.slice(0);
        for (r = 0; 128 > r; r++) {
            (p = 0 !== (k[Math.floor(r / 32)] & 1 << 31 - r % 32)) && (o = l(o, n));
            m = 0 !== (n[3] & 1);
            for (p = 3; 0 < p; p--) {
                n[p] = n[p] >>> 1 | (n[p - 1] & 1) << 31
            }
            n[0] >>>= 1;
            m && (n[0] ^= -520093696)
        }
        return o
    },g: function(g, f, k) {
        var j, h = k.length;
        f = f.slice(0);
        for (j = 0; j < h; j += 4) {
            f[0] ^= 4294967295 & k[j], f[1] ^= 4294967295 & k[j + 1], f[2] ^= 4294967295 & k[j + 2], f[3] ^= 4294967295 & k[j + 3], f = sjcl.mode.gcm.Z(f, g)
        }
        return f
    },p: function(V, U, T, S, R, Q) {
        var P, O, x, N, v, w, o, W, j = sjcl.bitArray;
        w = T.length;
        o = j.bitLength(T);
        W = j.bitLength(S);
        O = j.bitLength(R);
        P = U.encrypt([0, 0, 0, 0]);
        96 === O ? (R = R.slice(0), R = j.concat(R, [1])) : (R = sjcl.mode.gcm.g(P, [0, 0, 0, 0], R), R = sjcl.mode.gcm.g(P, R, [0, 0, Math.floor(O / 4294967296), O & 4294967295]));
        O = sjcl.mode.gcm.g(P, [0, 0, 0, 0], S);
        v = R.slice(0);
        S = O.slice(0);
        V || (S = sjcl.mode.gcm.g(P, O, T));
        for (N = 0; N < w; N += 4) {
            v[3]++, x = U.encrypt(v), T[N] ^= x[0], T[N + 1] ^= x[1], T[N + 2] ^= x[2], T[N + 3] ^= x[3]
        }
        T = j.clamp(T, o);
        V && (S = sjcl.mode.gcm.g(P, O, T));
        V = [Math.floor(W / 4294967296), W & 4294967295, Math.floor(o / 4294967296), o & 4294967295];
        S = sjcl.mode.gcm.g(P, S, V);
        x = U.encrypt(R);
        S[0] ^= x[0];
        S[1] ^= x[1];
        S[2] ^= x[2];
        S[3] ^= x[3];
        return {tag: j.bitSlice(S, 0, Q),data: T}
    }};
sjcl.misc.hmac = function(g, f) {
    this.M = f = f || sjcl.hash.sha256;
    var k = [[], []], j, h = f.prototype.blockSize / 32;
    this.n = [new f, new f];
    g.length > h && (g = f.hash(g));
    for (j = 0; j < h; j++) {
        k[0][j] = g[j] ^ 909522486, k[1][j] = g[j] ^ 1549556828
    }
    this.n[0].update(k[0]);
    this.n[1].update(k[1]);
    this.G = new f(this.n[0])
};
sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function(b) {
    this.Q && q(new sjcl.exception.invalid("encrypt on already updated hmac called!"));
    this.update(b);
    return this.digest(b)
};
sjcl.misc.hmac.prototype.reset = function() {
    this.G = new this.M(this.n[0]);
    this.Q = u
};
sjcl.misc.hmac.prototype.update = function(b) {
    this.Q = !0;
    this.G.update(b)
};
sjcl.misc.hmac.prototype.digest = function() {
    var b = this.G.finalize(), b = (new this.M(this.n[1])).update(b).finalize();
    this.reset();
    return b
};
sjcl.misc.pbkdf2 = function(O, N, x, w, v) {
    x = x || 1000;
    (0 > w || 0 > x) && q(sjcl.exception.invalid("invalid params to pbkdf2"));
    "string" === typeof O && (O = sjcl.codec.utf8String.toBits(O));
    "string" === typeof N && (N = sjcl.codec.utf8String.toBits(N));
    v = v || sjcl.misc.hmac;
    O = new v(O);
    var s, r, p, m, o = [], j = sjcl.bitArray;
    for (m = 1; 32 * o.length < (w || 1); m++) {
        v = s = O.encrypt(j.concat(N, [m]));
        for (r = 1; r < x; r++) {
            s = O.encrypt(s);
            for (p = 0; p < s.length; p++) {
                v[p] ^= s[p]
            }
        }
        o = o.concat(v)
    }
    w && (o = j.clamp(o, w));
    return o
};
sjcl.prng = function(b) {
    this.c = [new sjcl.hash.sha256];
    this.i = [0];
    this.F = 0;
    this.s = {};
    this.C = 0;
    this.K = {};
    this.O = this.d = this.j = this.W = 0;
    this.b = [0, 0, 0, 0, 0, 0, 0, 0];
    this.f = [0, 0, 0, 0];
    this.A = t;
    this.B = b;
    this.q = u;
    this.w = {progress: {},seeded: {}};
    this.m = this.V = 0;
    this.t = 1;
    this.u = 2;
    this.S = 65536;
    this.I = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024];
    this.T = 30000;
    this.R = 80
};
sjcl.prng.prototype = {randomWords: function(j, h) {
        var o = [], n;
        n = this.isReady(h);
        var m;
        n === this.m && q(new sjcl.exception.notReady("generator isn't seeded"));
        if (n & this.u) {
            n = !(n & this.t);
            m = [];
            var l = 0, k;
            this.O = m[0] = (new Date).valueOf() + this.T;
            for (k = 0; 16 > k; k++) {
                m.push(4294967296 * Math.random() | 0)
            }
            for (k = 0; k < this.c.length && !(m = m.concat(this.c[k].finalize()), l += this.i[k], this.i[k] = 0, !n && this.F & 1 << k); k++) {
            }
            this.F >= 1 << this.c.length && (this.c.push(new sjcl.hash.sha256), this.i.push(0));
            this.d -= l;
            l > this.j && (this.j = l);
            this.F++;
            this.b = sjcl.hash.sha256.hash(this.b.concat(m));
            this.A = new sjcl.cipher.aes(this.b);
            for (n = 0; 4 > n && !(this.f[n] = this.f[n] + 1 | 0, this.f[n]); n++) {
            }
        }
        for (n = 0; n < j; n += 4) {
            0 === (n + 1) % this.S && A(this), m = B(this), o.push(m[0], m[1], m[2], m[3])
        }
        A(this);
        return o.slice(0, j)
    },setDefaultParanoia: function(d, c) {
        0 === d && "Setting paranoia=0 will ruin your security; use it only for testing" !== c && q("Setting paranoia=0 will ruin your security; use it only for testing");
        this.B = d
    },addEntropy: function(v, s, r) {
        r = r || "user";
        var p, o, n = (new Date).valueOf(), m = this.s[r], k = this.isReady(), j = 0;
        p = this.K[r];
        p === t && (p = this.K[r] = this.W++);
        m === t && (m = this.s[r] = 0);
        this.s[r] = (this.s[r] + 1) % this.c.length;
        switch (typeof v) {
            case "number":
                s === t && (s = 1);
                this.c[m].update([p, this.C++, 1, s, n, 1, v | 0]);
                break;
            case "object":
                r = Object.prototype.toString.call(v);
                if ("[object Uint32Array]" === r) {
                    o = [];
                    for (r = 0; r < v.length; r++) {
                        o.push(v[r])
                    }
                    v = o
                } else {
                    "[object Array]" !== r && (j = 1);
                    for (r = 0; r < v.length && !j; r++) {
                        "number" !== typeof v[r] && (j = 1)
                    }
                }
                if (!j) {
                    if (s === t) {
                        for (r = s = 0; r < v.length; r++) {
                            for (o = v[r]; 0 < o; ) {
                                s++, o >>>= 1
                            }
                        }
                    }
                    this.c[m].update([p, this.C++, 2, s, n, v.length].concat(v))
                }
                break;
            case "string":
                s === t && (s = v.length);
                this.c[m].update([p, this.C++, 3, s, n, v.length]);
                this.c[m].update(v);
                break;
            default:
                j = 1
        }
        j && q(new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string"));
        this.i[m] += s;
        this.d += s;
        k === this.m && (this.isReady() !== this.m && C("seeded", Math.max(this.j, this.d)), C("progress", this.getProgress()))
    },isReady: function(b) {
        b = this.I[b !== t ? b : this.B];
        return this.j && this.j >= b ? this.i[0] > this.R && (new Date).valueOf() > this.O ? this.u | this.t : this.t : this.d >= b ? this.u | this.m : this.m
    },getProgress: function(b) {
        b = this.I[b ? b : this.B];
        return this.j >= b ? 1 : this.d > b ? 1 : this.d / b
    },startCollectors: function() {
        this.q || (this.a = {loadTimeCollector: D(this, this.aa),mouseCollector: D(this, this.ba),keyboardCollector: D(this, this.$),accelerometerCollector: D(this, this.U)}, window.addEventListener ? (window.addEventListener("load", this.a.loadTimeCollector, u), window.addEventListener("mousemove", this.a.mouseCollector, u), window.addEventListener("keypress", this.a.keyboardCollector, u), window.addEventListener("devicemotion", this.a.accelerometerCollector, u)) : document.attachEvent ? (document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector)) : q(new sjcl.exception.bug("can't attach event")), this.q = !0)
    },stopCollectors: function() {
        this.q && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, u), window.removeEventListener("mousemove", this.a.mouseCollector, u), window.removeEventListener("keypress", this.a.keyboardCollector, u), window.removeEventListener("devicemotion", this.a.accelerometerCollector, u)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector), document.detachEvent("onmousemove", this.a.mouseCollector), document.detachEvent("keypress", this.a.keyboardCollector)), this.q = u)
    },addEventListener: function(d, c) {
        this.w[d][this.V++] = c
    },removeEventListener: function(h, g) {
        var m, l, k = this.w[h], j = [];
        for (l in k) {
            k.hasOwnProperty(l) && k[l] === g && j.push(l)
        }
        for (m = 0; m < j.length; m++) {
            l = j[m], delete k[l]
        }
    },$: function() {
        E(1)
    },ba: function(b) {
        sjcl.random.addEntropy([b.x || b.clientX || b.offsetX || 0, b.y || b.clientY || b.offsetY || 0], 2, "mouse");
        E(0)
    },aa: function() {
        E(2)
    },U: function(d) {
        d = d.accelerationIncludingGravity.x || d.accelerationIncludingGravity.y || d.accelerationIncludingGravity.z;
        if (window.orientation) {
            var c = window.orientation;
            "number" === typeof c && sjcl.random.addEntropy(c, 1, "accelerometer")
        }
        d && sjcl.random.addEntropy(d, 2, "accelerometer");
        E(0)
    }};
function C(g, f) {
    var k, j = sjcl.random.w[g], h = [];
    for (k in j) {
        j.hasOwnProperty(k) && h.push(j[k])
    }
    for (k = 0; k < h.length; k++) {
        h[k](f)
    }
}
function E(b) {
    window && window.performance && "function" === typeof window.performance.now ? sjcl.random.addEntropy(window.performance.now(), b, "loadtime") : sjcl.random.addEntropy((new Date).valueOf(), b, "loadtime")
}
function A(b) {
    b.b = B(b).concat(B(b));
    b.A = new sjcl.cipher.aes(b.b)
}
function B(d) {
    for (var c = 0; 4 > c && !(d.f[c] = d.f[c] + 1 | 0, d.f[c]); c++) {
    }
    return d.A.encrypt(d.f)
}
function D(d, c) {
    return function() {
        c.apply(d, arguments)
    }
}
sjcl.random = new sjcl.prng(6);
a: try {
    var F, G, H, I;
    if (I = "undefined" !== typeof module) {
        var J;
        if (J = module.exports) {
            var K;
            try {
                K = require("crypto")
            } catch (L) {
                K = null
            }
            J = (G = K) && G.randomBytes
        }
        I = J
    }
    if (I) {
        F = G.randomBytes(128), F = new Uint32Array((new Uint8Array(F)).buffer), sjcl.random.addEntropy(F, 1024, "crypto['randomBytes']")
    } else {
        if (window && Uint32Array) {
            H = new Uint32Array(32);
            if (window.crypto && window.crypto.getRandomValues) {
                window.crypto.getRandomValues(H)
            } else {
                if (window.msCrypto && window.msCrypto.getRandomValues) {
                    window.msCrypto.getRandomValues(H)
                } else {
                    break a
                }
            }
            sjcl.random.addEntropy(H, 1024, "crypto['getRandomValues']")
        }
    }
} catch (M) {
    "undefined" !== typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(M))
}
sjcl.json = {defaults: {v: 1,iter: 1000,ks: 128,ts: 64,mode: "ccm",adata: "",cipher: "aes"},Y: function(j, h, o, n) {
        o = o || {};
        n = n || {};
        var m = sjcl.json, l = m.e({iv: sjcl.random.randomWords(4, 0)}, m.defaults), k;
        m.e(l, o);
        o = l.adata;
        "string" === typeof l.salt && (l.salt = sjcl.codec.base64.toBits(l.salt));
        "string" === typeof l.iv && (l.iv = sjcl.codec.base64.toBits(l.iv));
        (!sjcl.mode[l.mode] || !sjcl.cipher[l.cipher] || "string" === typeof j && 100 >= l.iter || 64 !== l.ts && 96 !== l.ts && 128 !== l.ts || 128 !== l.ks && 192 !== l.ks && 256 !== l.ks || 2 > l.iv.length || 4 < l.iv.length) && q(new sjcl.exception.invalid("json encrypt: invalid parameters"));
        "string" === typeof j ? (k = sjcl.misc.cachedPbkdf2(j, l), j = k.key.slice(0, l.ks / 32), l.salt = k.salt) : sjcl.ecc && j instanceof sjcl.ecc.elGamal.publicKey && (k = j.kem(), l.kemtag = k.tag, j = k.key.slice(0, l.ks / 32));
        "string" === typeof h && (h = sjcl.codec.utf8String.toBits(h));
        "string" === typeof o && (o = sjcl.codec.utf8String.toBits(o));
        k = new sjcl.cipher[l.cipher](j);
        m.e(n, l);
        n.key = j;
        l.ct = sjcl.mode[l.mode].encrypt(k, h, l.iv, o, l.ts);
        return l
    },encrypt: function(h, g, m, l) {
        var k = sjcl.json, j = k.Y.apply(k, arguments);
        return k.encode(j)
    },X: function(h, g, m, l) {
        m = m || {};
        l = l || {};
        var k = sjcl.json;
        g = k.e(k.e(k.e({}, k.defaults), g), m, !0);
        var j;
        m = g.adata;
        "string" === typeof g.salt && (g.salt = sjcl.codec.base64.toBits(g.salt));
        "string" === typeof g.iv && (g.iv = sjcl.codec.base64.toBits(g.iv));
        (!sjcl.mode[g.mode] || !sjcl.cipher[g.cipher] || "string" === typeof h && 100 >= g.iter || 64 !== g.ts && 96 !== g.ts && 128 !== g.ts || 128 !== g.ks && 192 !== g.ks && 256 !== g.ks || !g.iv || 2 > g.iv.length || 4 < g.iv.length) && q(new sjcl.exception.invalid("json decrypt: invalid parameters"));
        "string" === typeof h ? (j = sjcl.misc.cachedPbkdf2(h, g), h = j.key.slice(0, g.ks / 32), g.salt = j.salt) : sjcl.ecc && h instanceof sjcl.ecc.elGamal.secretKey && (h = h.unkem(sjcl.codec.base64.toBits(g.kemtag)).slice(0, g.ks / 32));
        "string" === typeof m && (m = sjcl.codec.utf8String.toBits(m));
        j = new sjcl.cipher[g.cipher](h);
        m = sjcl.mode[g.mode].decrypt(j, g.ct, g.iv, m, g.ts);
        k.e(l, g);
        l.key = h;
        return sjcl.codec.utf8String.fromBits(m)
    },decrypt: function(g, f, k, j) {
        var h = sjcl.json;
        return h.X(g, h.decode(f), k, j)
    },encode: function(f) {
        var e, h = "{", g = "";
        for (e in f) {
            if (f.hasOwnProperty(e)) {
                switch (e.match(/^[a-z0-9]+$/i) || q(new sjcl.exception.invalid("json encode: invalid property name")), h += g + '"' + e + '":', g = ",", typeof f[e]) {
                    case "number":
                    case "boolean":
                        h += f[e];
                        break;
                    case "string":
                        h += '"' + escape(f[e]) + '"';
                        break;
                    case "object":
                        h += '"' + sjcl.codec.base64.fromBits(f[e], 0) + '"';
                        break;
                    default:
                        q(new sjcl.exception.bug("json encode: unsupported type"))
                }
            }
        }
        return h + "}"
    },decode: function(f) {
        f = f.replace(/\s/g, "");
        f.match(/^\{.*\}$/) || q(new sjcl.exception.invalid("json decode: this isn't json!"));
        f = f.replace(/^\{|\}$/g, "").split(/,/);
        var e = {}, h, g;
        for (h = 0; h < f.length; h++) {
            (g = f[h].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i)) || q(new sjcl.exception.invalid("json decode: this isn't json!")), e[g[2]] = g[3] ? parseInt(g[3], 10) : g[2].match(/^(ct|salt|iv)$/) ? sjcl.codec.base64.toBits(g[4]) : unescape(g[4])
        }
        return e
    },e: function(f, e, h) {
        f === t && (f = {});
        if (e === t) {
            return f
        }
        for (var g in e) {
            e.hasOwnProperty(g) && (h && (f[g] !== t && f[g] !== e[g]) && q(new sjcl.exception.invalid("required parameter overridden")), f[g] = e[g])
        }
        return f
    },ea: function(f, e) {
        var h = {}, g;
        for (g in f) {
            f.hasOwnProperty(g) && f[g] !== e[g] && (h[g] = f[g])
        }
        return h
    },da: function(f, e) {
        var h = {}, g;
        for (g = 0; g < e.length; g++) {
            f[e[g]] !== t && (h[e[g]] = f[e[g]])
        }
        return h
    }};
sjcl.encrypt = sjcl.json.encrypt;
sjcl.decrypt = sjcl.json.decrypt;
sjcl.misc.ca = {};
sjcl.misc.cachedPbkdf2 = function(f, e) {
    var h = sjcl.misc.ca, g;
    e = e || {};
    g = e.iter || 1000;
    h = h[f] = h[f] || {};
    g = h[g] = h[g] || {firstSalt: e.salt && e.salt.length ? e.salt.slice(0) : sjcl.random.randomWords(2, 0)};
    h = e.salt === t ? g.firstSalt : e.salt;
    g[h] = g[h] || sjcl.misc.pbkdf2(f, h, e.iter);
    return {key: g[h].slice(0),salt: h.slice(0)}
};
define("sjcl", (function(b) {
    return function() {
        var c, d;
        return c || b.sjcl
    }
}(this)));
define("util/security", ["jquery", "sjcl", "libs/json2/json2", "https://" + window.authDomain + "/s/login/getKey?_t=" + new Date().getTime()], function(d, c, f) {
    var e = {appendHmac: function(g) {
            if (g.indexOf("?") < 0) {
                return g + "?" + d.param(b())
            } else {
                return g + "&" + d.param(b())
            }
        },makeHmacParams: function() {
            return b()
        },invalid: function() {
            return !window.bandWebAuth
        }};
    var b = function() {
        return window.bandWebAuth && window.bandWebAuth.makeHmac()
    };
    return e
});
define("util/popupUtil", ["jquery", "underscore", "libs/jquery/external/jquery.browser"], function(d, b) {
    var c = {DEFAULT_POPUP_SETTTINGS: {centerBrowser: 0,centerScreen: 0,height: 500,left: 0,location: 0,menubar: 0,resizable: 0,scrollbars: 0,status: 0,width: 500,windowName: null,windowURL: null,top: 0,toolbar: 0,params: {}},_openPopup: function(j) {
            var h = j.width;
            var f = j.height;
            if (d.browser.msie) {
                h -= 4;
                f -= 4
            }
            var g = "height=" + f + ",width=" + h + ",toolbar=" + j.toolbar + ",scrollbars=" + j.scrollbars + ",status=" + j.status + ",resizable=" + j.resizable + ",location=" + j.location + ",menuBar=" + j.menubar;
            var k, l;
            if (j.centerBrowser) {
                if (d.browser.msie) {
                    k = (window.screenTop - 120) + ((((document.documentElement.clientHeight + 120) / 2) - (j.height / 2)));
                    l = window.screenLeft + ((((document.body.offsetWidth + 20) / 2) - (j.width / 2)))
                } else {
                    k = window.screenY + (((window.outerHeight / 2) - (j.height / 2)));
                    l = window.screenX + (((window.outerWidth / 2) - (j.width / 2)))
                }
                var n = window.open(j.windowURL, j.windowName, g + ",left=" + l + ",top=" + k);
                try {
                    n.focus()
                } catch (m) {
                }
                return n
            } else {
                if (j.centerScreen) {
                    k = (screen.height - j.height) / 2;
                    l = (screen.width - j.width) / 2;
                    var n = window.open(j.windowURL, j.windowName, g + ",left=" + l + ",top=" + k);
                    try {
                        n.focus()
                    } catch (m) {
                    }
                    return n
                } else {
                    var n = window.open(j.windowURL, j.windowName, g + ",left=" + j.left + ",top=" + j.top);
                    try {
                        n.focus()
                    } catch (m) {
                    }
                    return n
                }
            }
        },openGet: function(e) {
            var f = d.extend({}, this.DEFAULT_POPUP_SETTTINGS, e || {});
            if (!b.isEmpty(f.params)) {
                if (f.windowURL.indexOf("?") < 0) {
                    f.windowURL = f.windowURL + "?" + d.param(f.params)
                } else {
                    f.windowURL = f.windowURL + "&" + d.param(f.params)
                }
            }
            var g = this._openPopup(f);
            if (!g) {
                alert(G.STR("pcweb.noui.js.alert.guide_popup_block"));
                return
            }
            return g
        }};
    return c
});
define("loginpopup/controllers/loginPageOpener", ["jquery", "underscore", "marionette", "util/popupUtil"], function(e, b, f, c) {
    var d = f.Controller.extend({_API_DOMAIN: "https://" + window.apiDomain,initialize: function() {
        },_createCallbackUrl: function(k, g) {
            var j = {nextUrl: k || "http://" + this.__getNextUrl() + "/",nextTarget: g || "parent"};
            var h = "http://" + window.location.host + "/webapp/loginResult?" + e.param(j);
            return encodeURIComponent(h)
        },__getNextUrl: function() {
            var g = window.location.host;
            if (window.viewType == "mobile") {
                g = window.bandWebDomain;
                g = g + "/app/WebMainApp"
            }
            return g
        },doJoinPhone: function(k, g) {
            var j = this._createCallbackUrl(k, "parent");
            var h = "https://" + window.authDomain + "/sign_up_form?login_display=page&next_url=" + j;
            this._doLoginWithPopup(h, 470, 425)
        },goJoinPage: function(j) {
            var h = this._createCallbackUrl(j, "current");
            var g = "https://" + window.authDomain + "/sign_up_form?next_url=" + h;
            window.location.href = g
        },goLoginPage: function(j) {
            var h = this._createCallbackUrl(j, "current");
            var g = "https://" + window.authDomain + "/login_page?next_url=" + h;
            window.location.href = g
        },openLoginPopup: function(j) {
            var h = this._createCallbackUrl(j, "parent");
            var g = "https://" + window.authDomain + "/login_page?display=popup&next_url=" + h;
            this._doLoginWithPopup(g, 470, 548)
        },_doLoginWithPopup: function(h, j, g) {
            c.openGet({windowURL: h,windowName: "band_login_popup",width: j || 580,height: g || 550,centerBrowser: 1})
        }});
    return new d()
});
define("ajaxExtends/sameCookieChecker", ["jquery", "underscore", "marionette", "loginpopup/controllers/loginPageOpener", "util/bandCookie"], function(e, c, g, d, f) {
    var b = g.Controller.extend({initialize: function() {
            this.bandSessionCookie = null
        },doCheck: function(h) {
            if (this.bandSessionCookie && this.bandSessionCookie != f.getSession()) {
                if (f.getSession()) {
                    window.location.reload()
                } else {
                    d.goLoginPage(window.location.href, "current")
                }
                return false
            }
            this.bandSessionCookie = f.getSession();
            if (!this.bandSessionCookie) {
                d.goLoginPage(window.location.href, "current");
                return false
            }
            return true
        }});
    return new b()
});
define("ajaxExtends/validSessionChecker", ["jquery", "underscore", "marionette", "loginpopup/controllers/loginPageOpener", "localize/reslang", "util/bandCookie"], function(f, b, h, e, c, g) {
    var d = h.Controller.extend({initialize: function() {
            this.isDoingLogout = false
        },doCheck: function(j) {
            var l = j && j.code && (j.code == 22001 || j.code == 22002);
            var k = j && j.result_code && j.result_code == 300;
            if (!this.isDoingLogout && (l || k)) {
                this.isDoingLogout = true;
                g.removeSession();
                alert(c.STR("pcweb.noui.js.alert.session_expired"));
                e.goLoginPage(window.location.href, "current");
                return false
            }
            return true
        }});
    return new d()
});
define("ajaxExtends/validSecurityChecker", ["jquery", "underscore", "marionette", "loginpopup/controllers/loginPageOpener", "util/bandCookie", "localize/reslang", "util/security"], function(f, c, j, e, h, d, g) {
    var b = j.Controller.extend({initialize: function() {
        },doCheck: function(k) {
            if (g.invalid()) {
                h.removeSession();
                alert("Failed to initialize. Please retry.[sk04172]");
                e.goLoginPage(window.location.href, "current");
                return false
            }
            return true
        }});
    return new b()
});
define("ajaxExtends/ajaxExtendsForLogin", ["jquery", "underscore", "localize/reslang", "util/security", "ajaxExtends/sameCookieChecker", "ajaxExtends/validSessionChecker", "ajaxExtends/validSecurityChecker"], function(f, j, k, h, e, g, c) {
    var l = [];
    l.push(e);
    l.push(c);
    var b = f.ajaxSetup().beforeSend;
    f.ajaxSetup({beforeSend: function(o, m) {
            for (var n = 0; n < l.length; n++) {
                if (l[n].doCheck(m) == false) {
                    return false
                }
            }
            m.url = h.appendHmac(m.url);
            return typeof b == "function" ? b.apply(this, arguments) : true
        }});
    var d = f.ajax;
    f.ajax = function(p, o) {
        var m = o;
        if (typeof p === "object") {
            m = p
        }
        var n = m.error;
        m.error = function(v, w, s) {
            if (n) {
                n(v, w, s)
            }
        };
        var r = m.success;
        m.success = function(s, w, v) {
            if (!g.doCheck(s)) {
                return
            }
            if (r) {
                r(s, w, v)
            }
        };
        return d.apply(f, arguments)
    };
    return f
});
define("loginUserData", ["jquery", "underscore", "marionette", "user/models/userModel", "band/collections/bandCollection", "localize/reslang", "util/bandCookie", "util/bandUtil", "libs/json2/json2", "ajaxExtends/ajaxExtendsForLogin"], function(d, l, f, c, b, m, g, h, k) {
    function j() {
        return d.Deferred().resolve().promise()
    }
    var e = f.Controller.extend({_BAND_LIST_REFRESH_DELAY: 100,lastBandListRefreshTime: 0,userPromise: j(),bandListPromise: j(),initialize: function() {
            if (!g.getSession() || g.getSession() == "null") {
                return
            }
            this.user = new c();
            this.bandList = new b();
            this.refreshUser()
        },ready: function(n) {
            this.bandListPromise.then(n)
        },readyForUser: function(n) {
            this.userPromise.then(n)
        },getUser: function() {
            return this.user
        },getUserID: function() {
            return this.user.get("id")
        },getUserNO: function() {
            return this.user.get("user_no")
        },getBandList: function() {
            return this.bandList
        },getBand: function(n) {
            if (d.isNumeric(n)) {
                return this.bandList.where({band_no: parseInt(n, 10)})[0]
            }
            if (!n.match(/^m2_/) && !d.isNumeric(n)) {
                n = "m2_" + n
            }
            return this.bandList.get(n)
        },getInvitationBand: function(n) {
            if (d.isNumeric(n)) {
                return this.bandList.invitations.where({band_no: parseInt(n, 10)})[0]
            }
            if (!n.match(/^m2_/) && !d.isNumeric(n)) {
                n = "m2_" + n
            }
            return this.bandList.invitations.get(n)
        },isInvitation: function(n) {
            return !!this.getInvitationBand(n)
        },_fetchUserAndReturnPromise: function() {
            var n = d.Deferred();
            this.user.simpleFetch({success: l.bind(function(r, o, p) {
                    if (o.result_code != 1) {
                        n.reject(r, o, p)
                    } else {
                        n.resolve(this.user, this)
                    }
                }, this),error: function(r, o, p) {
                    n.reject(r, o, p)
                }});
            return n.promise()
        },_forceRefreshBandListAndReturnPromise: function() {
            var n = d.Deferred();
            this.refreshBandList({success: l.bind(function() {
                    n.resolve(this.user, this.bandList, this)
                }, this)}, true);
            return n.promise()
        },refreshUser: function(n) {
            this.userPromise = this._fetchUserAndReturnPromise();
            this.bandListPromise = this.userPromise.then(l.bind(this._forceRefreshBandListAndReturnPromise, this));
            if (n && l.isFunction(n.success)) {
                this.bandListPromise.then(n.success, n.error)
            }
        },refreshBandList: function(p, o) {
            var n = new Date().getTime();
            var r = n - this.lastBandListRefreshTime;
            if (o || r > this._BAND_LIST_REFRESH_DELAY) {
                this.bandList.simpleFetch(p);
                this.lastBandListRefreshTime = n
            } else {
                setTimeout(l.bind(function() {
                    h.functionCall(p, "success", this.bandList)
                }, this), 0)
            }
        }});
    return new e()
});
define("text", ["module"], function(d) {
    var n, h, f = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], m = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, k = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, c = typeof location !== "undefined" && location.href, e = c && location.protocol && location.protocol.replace(/\:/, ""), g = c && location.hostname, b = c && (location.port || undefined), l = [], j = (d.config && d.config()) || {};
    n = {version: "2.0.5",strip: function(o) {
            if (o) {
                o = o.replace(m, "");
                var p = o.match(k);
                if (p) {
                    o = p[1]
                }
            } else {
                o = ""
            }
            return o
        },jsEscape: function(o) {
            return o.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },createXhr: j.createXhr || function() {
            var s, o, p;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest()
            } else {
                if (typeof ActiveXObject !== "undefined") {
                    for (o = 0; o < 3; o += 1) {
                        p = f[o];
                        try {
                            s = new ActiveXObject(p)
                        } catch (r) {
                        }
                        if (s) {
                            f = [p];
                            break
                        }
                    }
                }
            }
            return s
        },parseName: function(r) {
            var x, w, o, v = false, p = r.indexOf("."), s = r.indexOf("./") === 0 || r.indexOf("../") === 0;
            if (p !== -1 && (!s || p > 1)) {
                x = r.substring(0, p);
                w = r.substring(p + 1, r.length)
            } else {
                x = r
            }
            o = w || x;
            p = o.indexOf("!");
            if (p !== -1) {
                v = o.substring(p + 1) === "strip";
                o = o.substring(0, p);
                if (w) {
                    w = o
                } else {
                    x = o
                }
            }
            return {moduleName: x,ext: w,strip: v}
        },xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,useXhr: function(s, N, p, o) {
            var w, x, v, r = n.xdRegExp.exec(s);
            if (!r) {
                return true
            }
            w = r[2];
            x = r[3];
            x = x.split(":");
            v = x[1];
            x = x[0];
            return (!w || w === N) && (!x || x.toLowerCase() === p.toLowerCase()) && ((!v && !x) || v === o)
        },finishLoad: function(o, r, s, p) {
            s = r ? n.strip(s) : s;
            if (j.isBuild) {
                l[o] = s
            }
            p(s)
        },load: function(v, x, w, s) {
            if (s.isBuild && !s.inlineText) {
                w();
                return
            }
            j.isBuild = s.isBuild;
            var p = n.parseName(v), N = p.moduleName + (p.ext ? "." + p.ext : ""), r = x.toUrl(N), o = (j.useXhr) || n.useXhr;
            if (!c || o(r, e, g, b)) {
                n.get(r, function(O) {
                    n.finishLoad(v, p.strip, O, w)
                }, function(O) {
                    if (w.error) {
                        w.error(O)
                    }
                })
            } else {
                x([N], function(O) {
                    n.finishLoad(p.moduleName + "." + p.ext, p.strip, O, w)
                })
            }
        },write: function(v, p, r, o) {
            if (l.hasOwnProperty(p)) {
                var s = n.jsEscape(l[p]);
                r.asModule(v + "!" + p, "define(function () { return '" + s + "';});\n")
            }
        },writeFile: function(w, p, N, O, r) {
            var x = n.parseName(p), o = x.ext ? "." + x.ext : "", s = x.moduleName + o, v = N.toUrl(x.moduleName + o) + ".js";
            n.load(s, N, function(P) {
                var Q = function(R) {
                    return O(v, R)
                };
                Q.asModule = function(R, S) {
                    return O.asModule(R, v, S)
                };
                n.write(w, s, Q, r)
            }, r)
        }};
    if (j.env === "node" || (!j.env && typeof process !== "undefined" && process.versions && !!process.versions.node)) {
        h = require.nodeRequire("fs");
        n.get = function(o, r) {
            var p = h.readFileSync(o, "utf8");
            if (p.indexOf("\uFEFF") === 0) {
                p = p.substring(1)
            }
            r(p)
        }
    } else {
        if (j.env === "xhr" || (!j.env && n.createXhr())) {
            n.get = function(p, w, o, s) {
                var r = n.createXhr(), v;
                r.open("GET", p, true);
                if (s) {
                    for (v in s) {
                        if (s.hasOwnProperty(v)) {
                            r.setRequestHeader(v.toLowerCase(), s[v])
                        }
                    }
                }
                if (j.onXhr) {
                    j.onXhr(r, p)
                }
                r.onreadystatechange = function(N) {
                    var x, O;
                    if (r.readyState === 4) {
                        x = r.status;
                        if (x > 399 && x < 600) {
                            O = new Error(p + " HTTP status: " + x);
                            O.xhr = r;
                            o(O)
                        } else {
                            w(r.responseText)
                        }
                    }
                };
                r.send(null)
            }
        } else {
            if (j.env === "rhino" || (!j.env && typeof Packages !== "undefined" && typeof java !== "undefined")) {
                n.get = function(o, N) {
                    var r, O, p = "utf-8", s = new java.io.File(o), v = java.lang.System.getProperty("line.separator"), x = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), p)), w = "";
                    try {
                        r = new java.lang.StringBuffer();
                        O = x.readLine();
                        if (O && O.length() && O.charAt(0) === 65279) {
                            O = O.substring(1)
                        }
                        r.append(O);
                        while ((O = x.readLine()) !== null) {
                            r.append(v);
                            r.append(O)
                        }
                        w = String(r.toString())
                    }finally {
                        x.close()
                    }
                    N(w)
                }
            }
        }
    }
    return n
});
define("text!chat/templates/chattingRoomPopupTemplate.html", [], function() {
    return '<div class="<%-channelTypeClass%>">\n    <div class="status_bar">\n      <strong class="_title"><span class="_room_title"></span><span class=\'member_num\'></span></strong>\n        <button class="pop_setting"><img src="<%-resBaseUrl%>/images/chat/icon_setting_default.png" width="26" height="6"></button>\n      <div class="pop_menu" style="display:none">\n        <ul class="menu_list">\n          <li class="chat_member"><a href="#"><%-G.STR(\'pcweb.chat.chatroom.menu.chatmember\')%></a></li>\n          <li class="invite_friends"><a href="#"><%-G.STR(\'pcweb.chat.chatroom.menu.invite\')%></a></li>\n          <li class="delete_chat"><a href="#"><%-G.STR(\'pcweb.chat.chatroom.menu.delete\')%></a></li>\n          <li class="quit_chatroom"><a href="#"><%-G.STR(\'pcweb.chat.chatroom.menu.quit\')%></a></li>\n        </ul>\n      </div>\n    </div>\n    <div class="chatroom chat_main">\n      <div id="chat_list">\n      \t<div class="chat_list">\n      \t</div>\t\t\n      </div>      \n    </div>\n\t<div class="new_message_alert_wrap">\n\t\t<p class="message_txt"></p>\n\t</div>\n\t<div class="_chat_input_wrap">\n\t</div>\t\n\n    <div class="deemed"></div>\n</div>'
});
define("text!chat/templates/messageTemplate.html", [], function() {
    return '<% var StringUtil = require(\'util/customStringUtil\');\t%>\n<% var BandUtil = require(\'util/bandUtil\');\t%>\n  <span class="pf_img"><img width="48" height="48" alt="<%- writer.name%>" src="<%- BandUtil.replaceHttpsRes(writer.face)%>"></span>\n  <span class="pf_name"><span class="author"><%- writer.name%></span> <span class="pf_nick"><%-writer.description%></span></span>\n  <div class="msg<%-msgOption%>">\n    <div class="msg_main">\n      <p class="_message_body_wrap">\n      \t<%=messageBody%>\n      </p>\n      <% if (reportable) { %>\n      <a href="#" class="chat_report _report_button"><%-G.STR(\'pcweb.chat.chatmessage.btn.report\') %></a>\n      <% } %>\n      <span class="msg_aside"><span class="read"><% if(message.read_count > 1){ %> <%-G.STR(\'pcweb.chat.chatmessage.label.read_count\',message.read_count - 1)%> <%}; %></span><span class="time"><%-G.getDisplayTime(new Date(message.created_at*1), \'H\') %></span></span>\n    </div>\n  </div>'
});
define("text!chat/templates/systemMessageTemplate.html", [], function() {
    return '<div class="log_inner">\n    <p class="_message_body_wrap"><%-message%></p>\n    <span class="lt"></span><span class="rt"></span><span class="lb"></span><span class="rb"></span>\n</div>'
});
define("text!chat/templates/messageBodyTemplate.html", [], function() {
    return '<% var StringUtil = require(\'util/customStringUtil\');\t%>\n<% var BandUtil = require(\'util/bandUtil\');\t%>\n\n\n<% if(message.type == 1){ %>\n\t<%= StringUtil.convertText(StringUtil.escapeXML(message.body)) %>\n<% } else if(message.type == 10) {%>\n<%   message.extras.sizes.pc = message.extras.sizes.pc || "0,0" %>\n\t<img class="_prevent_context" src="<%-BandUtil.replaceHttpsRes(stickerUrl)%>" height="<%- parseInt(message.extras.sizes.pc.split(\',\')[1]) %>" />\n<% } else if(message.type == 11) {%>\n\t<a target="_blank" href="<%-message.extras.url%>" class="image_clip" data-photo_no="<%-message.extras.photo_id%>"><img class="_loader" src="<%-message.extras.url + \'?type=s150\'%>" width="150" height="150" /></a>\n<% } else if(message.type == 12 || message.type == 13){ %>\t\n\t<% if(displayInfo && displayInfo.header) { %>\n\t\t<span class="app_alert">\n\t\t\t<% if(displayInfo.header.image) { %>\n        \t\t<img src="<%-displayInfo.header.image.url%>" alt="<%-displayInfo.header.text%>" height="45" width="45">\n\t\t\t<% } %>\n\t\t\t<%=StringUtil.convertText(StringUtil.escapeXML(displayInfo.header.text))%>\n\t\t</span>\n\t<% } %>\n\t\t\n\t<% if(displayInfo && displayInfo.body) { %>\n\t\t<%=StringUtil.convertText(StringUtil.escapeXML(displayInfo.body.text))%>\n\t\t<% if(displayInfo.body.image) { %>\n\t\t\t<% var resizedBodyUrl = displayInfo.body.image.url+"?type=m500" %>\n\t\t\t<% var hasOnlyImage = !displayInfo.header && !displayInfo.footer && !displayInfo.body.text %>\n\t\t\t<% var imageLink = hasOnlyImage ? "href=" + displayInfo.body.image.url : ""%>\n\t\t\t<span class="item_img">\t\t\t\t\n\t\t\t\t<a <%-imageLink%> target="_blank">\t\n\t\t\t\t\t<img width="100%" class="_prevent_context" src="<%-resizedBodyUrl%>" alt="">\n\t\t\t\t</a>\n\t\t\t</span>\n\t\t<% } else if(displayInfo.body.sticker) { %>\n\t\t\t<span class="item_img"><img class="no_radius _prevent_context" src="<%-displayInfo.body.sticker.url.replace(/%s/,\'pc\')%>" alt=""></span>\n\t\t<% } %>\t\t\t\n\t<% } %>\n\t\n\t<% if(displayInfo && displayInfo.footer && displayInfo.footer.text) { %>\n\t\t<% var actionUrl = (displayInfo.footer.action && displayInfo.footer.action.pc) || \'#\';%>\n\t\t<a href="<%-actionUrl%>" class="third_party_link"><%=StringUtil.convertText(StringUtil.escapeXML(displayInfo.footer.text))%></a>\n\t<% } %>            \n<%}%>'
});
define("chat/controllers/messageBodyRenderer", ["jquery", "underscore", "marionette", "text!chat/templates/messageBodyTemplate.html", "util/bandUtil", "bandConstants"], function(f, e, h, b, d, g) {
    var c = h.Controller.extend({initialize: function() {
            this._createSupportableMessageType()
        },_createSupportableMessageType: function() {
            this.supportableMessageTypeList = [];
            for (var j in g.CHAT.MESSAGE_TYPE) {
                this.supportableMessageTypeList.push(g.CHAT.MESSAGE_TYPE[j])
            }
        },isSupportableMessage: function(j) {
            return e.contains(this.supportableMessageTypeList, j.get("type") + "")
        },createMessageBody: function(l, m) {
            if (!this.isSupportableMessage(l)) {
                var n = e.template(b, {message: {type: "1",body: ""}});
                return n
            } else {
                var k = "";
                if (l.get("type") == g.CHAT.MESSAGE_TYPE.STICKER) {
                    if (l.get("extras").url.match(/static\.band\.naver\.com/)) {
                        k = l.get("extras").url.replace("/%s/", "/non_retina/")
                    } else {
                        k = l.get("extras").url.replace("/%s/", "/pc/")
                    }
                }
                var j = null;
                if (l.get("type") == g.CHAT.MESSAGE_TYPE.THIRD_PARTY_GIFT || l.get("type") == g.CHAT.MESSAGE_TYPE.THIRD_PARTY) {
                    j = l.get("extras").default_display_info;
                    if (m) {
                        j = l.get("extras").sender_display_info || j
                    } else {
                        j = l.get("extras").receiver_display_info || j
                    }
                }
                var n = e.template(b, {message: l.toJSON(),stickerUrl: k,displayInfo: j});
                return n
            }
        }});
    return new c()
});
define("text!module/templates/singleDimmedLayerTemplate.html", [], function() {
    return "<div class=\"dim on\"></div>\n<div class='_dimmed_body'></div>"
});
define("module/views/singleDimmedLayer", ["jquery", "underscore", "marionette", "text!module/templates/singleDimmedLayerTemplate.html"], function(e, c, f, d) {
    var b = f.Layout.extend({template: c.template(d),regions: {body: "._dimmed_body"},ui: {dimmedArea: ".dim"},events: {"click .dim": function() {
                if (this.isDialogMode()) {
                    return false
                }
                this.close()
            }},initialize: function(g) {
            g = g || {};
            this.layerType = g.layerType
        },isDialogMode: function() {
            return this.ui.dimmedArea.css("cursor") === "default"
        },setDialogMode: function() {
            this.ui.dimmedArea.css("cursor", "default")
        },unSetDialogMode: function() {
            this.ui.dimmedArea.css("cursor", "")
        },setTableTypeMode: function() {
            this.$el.addClass("dimmed_table");
            this.ui.dimmedArea.css("cursor", "default")
        },showTableType: function(h, g) {
            this.showNoCss(h, g);
            this.setTableTypeMode()
        },showLightTableType: function(h, g) {
            this.ui.dimmedArea.addClass("opacity_60");
            this.showTableType(h, g)
        },showDialog: function(h, g, j) {
            this.show(h, g, j);
            this.setDialogMode()
        },showLightDialog: function(h, g, j) {
            this.ui.dimmedArea.addClass("opacity_60");
            this.showDialog(h, g, j)
        },showClean: function(h, g, j) {
            this.ui.dimmedArea.addClass("invisible");
            this.show(h, g, j)
        },showLight: function(h, g, j) {
            this.ui.dimmedArea.addClass("opacity_60");
            this.show(h, g, j)
        },show: function(h, g, j) {
            if (g) {
                for (var k in g) {
                    this.listenTo(h, k, g[k])
                }
            }
            this.body.show(h);
            j = this._calculateCss(h, j);
            h.$el.css(j);
            this._adjustPosition(h);
            h.on("close", this.close, this);
            this.unSetDialogMode()
        },showNoCss: function(h, g) {
            if (g) {
                for (var j in g) {
                    this.listenTo(h, j, g[j])
                }
            }
            this.body.show(h);
            h.on("close", this.close, this);
            this.unSetDialogMode()
        },_calculateCss: function(h, j) {
            j = j || {};
            var g = e.extend({top: "50%",left: "50%","margin-left": -1 * h.$el.width() / 2,"margin-top": -1 * h.$el.height() / 2,position: "fixed",display: "block","z-index": this.ui.dimmedArea.css("z-index")}, c.result(h, "dimmedCssOptions"), j);
            if (g.top != "50%" && "margin-top" in j == false && "margin-top" in c.result(h, "dimmedCssOptions") == false) {
                g["margin-top"] = "0"
            }
            if (g.left != "50%" && "margin-left" in j == false && "margin-left" in c.result(h, "dimmedCssOptions") == false) {
                g["margin-left"] = "0"
            }
            return g
        },_adjustPosition: function(g) {
            if (g.$el.prop("style").top.indexOf("%") == -1) {
                if (g.$el.position().top + g.$el.height() > e(window).height()) {
                    var h = -1 * (g.$el.position().top + g.$el.height() - e(window).height());
                    g.$el.css("margin-top", h + "px")
                }
            }
            if (g.$el.prop("style").left.indexOf("%") == -1) {
                if (g.$el.position().left + g.$el.width() > e(window).width()) {
                    var j = -1 * (g.$el.position().left + g.$el.width() - e(window).width());
                    g.$el.css("margin-left", j + "px")
                }
            }
        }});
    return b
});
define("text!layers/templates/nowLoadingTemplate.html", [], function() {
    return '  <div class="ly_container">\n    <p><%-G.STR(\'pcweb.layer.loading.title.loading\')%></p>\n    <img src="<%-resBaseUrl%>/images/common/loading.gif" alt="Loading">\n  </div>\n  <div class="ly_footer">\n    <a href="#" class="btn btn_m" id="btn_upload_cancel"><span class="alt"><%-G.STR(\'pcweb.layer.loading.btn.cancel\')%></span></a>\n  </div>'
});
define("layers/views/nowLoadingView", ["jquery", "underscore", "marionette", "text!layers/templates/nowLoadingTemplate.html"], function(e, c, f, d) {
    var b = f.ItemView.extend({template: c.template(d),defaults: {},className: "ly ly_loading",id: "ly_upload_loading",events: {"click #btn_upload_cancel": function(g) {
                this.trigger("cancel");
                this.close();
                return false
            }},initialize: function(g) {
        }});
    return b
});
define("text!layers/templates/cautionTemplate.html", [], function() {
    return '<div class="caution_wrap">\n  <% if(title) { %>\n  <p class="caution_tit"><%=title%></p>\n  <% } %>\n  <% if(message) { %>\n  <p class="caution_txt"><%=message%></p>\n  <% } %>\n</div>\n<button type="button" class="invite_pop_close"><img src="<%-resBaseUrl%>/images/calendar/layer_close.gif" width="14" height="14"></button>'
});
define("layers/views/cautionView", ["jquery", "underscore", "marionette", "text!layers/templates/cautionTemplate.html"], function(e, c, f, d) {
    var b = f.ItemView.extend({template: c.template(d),className: "invite_pop caution_pop",events: {"click .invite_pop_close": function(g) {
                this.close();
                return false
            }},initialize: function(g) {
            this.title = g.title;
            this.message = g.message;
            this.closeAction = g.closeAction
        },serializeData: function() {
            return {title: this.title,message: this.message}
        },onClose: function() {
            if (this.closeAction && typeof this.closeAction == "function") {
                this.closeAction()
            }
        }});
    return b
});
define("text!layers/templates/confirmTemplate.html", [], function() {
    return '<% if (!!title) { %>\n<p class="layer_head"><%-title%></p>\n<% } %>\n<div class="layer_body">\n  <p class="alert_txt"><%=message%></p>\n  <div class="btn_wrap">\n    <button type="button" class="btn_cancel"><%-cancelBtnLabel%></button>\n    <button type="button" class="btn_confirm"><%-confirmBtnLabel%></button>\n  </div>\n</div>\n<a href="#" class="alert_layer_close"><img src="<%-resBaseUrl%>/images/calendar/layer_close.gif" alt="레이어 닫기" width="14" height="14"></a>'
});
define("layers/views/confirmView", ["jquery", "underscore", "marionette", "text!layers/templates/confirmTemplate.html", "localize/reslang"], function(e, c, g, f, d) {
    var b = g.ItemView.extend({template: c.template(f),className: "alert_layer",events: {"click .btn_confirm": function(h) {
                this.setConfirmed(true);
                this.close();
                return false
            },"click .btn_cancel": function(h) {
                this.close();
                return false
            },"click .alert_layer_close": function() {
                this.close();
                return false
            }},initialize: function(h) {
            this.title = h.title;
            this.message = h.message;
            this.cancelBtnLabel = h.cancelBtnLabel || d.STR("pcweb.confirm.body.btn.cancel_default");
            this.confirmBtnLabel = h.confirmBtnLabel || d.STR("pcweb.confirm.body.btn.confirm_default");
            this.confirmed = false
        },serializeData: function() {
            return {title: this.title,message: this.message,cancelBtnLabel: this.cancelBtnLabel,confirmBtnLabel: this.confirmBtnLabel}
        },onBeforeClose: function() {
            if (this.confirmed) {
                this.trigger("confirm")
            } else {
                this.trigger("cancel")
            }
        },setConfirmed: function(h) {
            this.confirmed = !!h
        }});
    return b
});
define("module/dimmedLayer", ["jquery", "underscore", "marionette", "module/views/singleDimmedLayer", "layers/views/nowLoadingView", "layers/views/cautionView", "layers/views/confirmView"], function(d, k, g, e, c, f, j) {
    function b(l, n) {
        var m = {};
        k.each(l, function(p, o) {
            if (k.contains(n, o) && k.isFunction(p)) {
                m[o] = p
            }
        });
        return m
    }
    var h = g.Controller.extend({_ESC_KEYCODE: 27,initialize: function() {
            this.viewPointers = [];
            this.wfnOnKeyUp = k.bind(function(m) {
                m.preventDefault();
                if (m.keyCode == this._ESC_KEYCODE) {
                    var l = this.viewPointers[this.viewPointers.length - 1];
                    if (l.isDialogMode() == false) {
                        l.close()
                    }
                }
            }, this)
        },setView: function() {
            var l = new e();
            l.render();
            this.viewPointers.push(l);
            l.on("close", k.bind(function(m) {
                this.viewPointers.splice(k.indexOf(this.viewPointers, m), 1);
                if (this.viewPointers.length === 0) {
                    d("html").css("overflowY", "auto");
                    this._dettachEventListener()
                }
            }, this, l));
            return l
        },showLoadingLayer: function(l) {
            l = d.extend({cancel: function() {
                }}, l);
            if (!this.loadingDimmedLayer) {
                var m = new c();
                m.on("cancel", l.cancel);
                this.loadingDimmedLayer = this.setView();
                this.appendElement(this.loadingDimmedLayer);
                this.loadingDimmedLayer.on("close", function() {
                    this.loadingDimmedLayer = null
                }, this);
                this.loadingDimmedLayer.showDialog(m)
            }
        },showTableType: function(n, m) {
            var l = this.setView();
            this.appendElementWithScroll(l);
            l.showTableType(n, m)
        },showLightTableType: function(n, m) {
            var l = this.setView();
            this.appendElementWithScroll(l);
            l.showLightTableType(n, m)
        },showDialog: function(n, m, o) {
            var l = this.setView();
            this.appendElement(l);
            l.showDialog(n, m, o)
        },showLightDialog: function(n, m, o) {
            var l = this.setView();
            this.appendElement(l);
            l.showLightDialog(n, m, o)
        },showClean: function(n, m, o) {
            var l = this.setView();
            this.appendElement(l);
            l.showClean(n, m, o)
        },showLight: function(n, m, o) {
            var l = this.setView();
            this.appendElement(l);
            l.showLight(n, m, o)
        },show: function(n, m, o) {
            var l = this.setView();
            this.appendElement(l);
            l.show(n, m, o)
        },appendElement: function(l) {
            d("body").append(l.$el);
            d("html").css("overflowY", "hidden");
            if (this.viewPointers.length === 1) {
                this._attachEventListener()
            }
        },appendElementWithScroll: function(l) {
            d("body").append(l.$el);
            d("html").removeAttr("style");
            if (this.viewPointers.length === 1) {
                this._attachEventListener()
            }
        },_attachEventListener: function() {
            d(document).on("keyup", this.wfnOnKeyUp)
        },_dettachEventListener: function() {
            if (this.wfnOnKeyUp) {
                d(document).off("keyup", this.wfnOnKeyUp)
            }
        },closeLoadingLayer: function() {
            if (this.loadingDimmedLayer) {
                this.loadingDimmedLayer.close()
            }
        },hide: function() {
            for (var l = this.viewPointers.length - 1; l >= 0; l--) {
                this.viewPointers[l].close()
            }
            this.viewPointers = [];
            d("html").css("overflowY", "auto")
        },showCaution: function(n, o) {
            var m = new f({title: n.title,message: n.message,closeAction: n.closeAction});
            if (o) {
                var l = b(o, ["close"]);
                m.on(l)
            }
            this.show(m)
        },showConfirm: function(o, n) {
            var m = new j({title: o.title,message: o.message,cancelBtnLabel: o.cancelBtnLabel,confirmBtnLabel: o.confirmBtnLabel});
            if (n) {
                var l = b(n, ["confirm", "cancel", "close"]);
                m.on(l)
            }
            this.show(m)
        }});
    return new h()
});
define("profile/models/profileModel", ["jquery", "underscore", "backbone", "util/bandUtil"], function(e, d, f, c) {
    var b = f.Model.extend({MODIFY_OPEN_CELLPHONE: "modify_open_cellphone",MODIFY_OPEN_BIRTHDAY: "modify_open_birthday",DEFAULT_PROFILE_IMG: window.resBaseUrl + "/images/template/profile_310x310.gif",DEFAULT_PROFILE_THUMBNAIL_IMG: window.resBaseUrl + "/images/template/profile_60x60.gif",defaults: {name: "",description: "",profile_image_url: "",is_open_cellphone: false,is_open_birthday: false},initialize: function(g, h) {
            h = h || {};
            this.bandNO = h.bandNO;
            this.bandName = h.bandName;
            this._isNullDefaultProfileImage = this.get("is_use_user_profile") && !this.get("profile_image_url");
            this.isDefaultProfileImage = this.get("is_use_user_profile")
        },hasBandMemberProfile: function() {
            return !!this.get("member_profile_image_url")
        },getAccountFace: function() {
            var g = e.trim(this.get("face")) || this.DEFAULT_PROFILE_IMG;
            return g
        },getAccountFaceThumbnail: function(g) {
            g = g || "s75";
            var h = e.trim(this.get("face")) || (g == "s75" ? this.DEFAULT_PROFILE_THUMBNAIL_IMG : this.DEFAULT_PROFILE_IMG);
            return c.makeThumbnailUrl(h, g)
        },getFace: function() {
            var g = e.trim(this.get("profile_image_url")) || this.DEFAULT_PROFILE_IMG;
            return g
        },getDefaultFace: function() {
            return this.DEFAULT_PROFILE_IMG
        },getFaceThumbnail: function(g) {
            g = g || "s75";
            var h = e.trim(this.get("profile_image_url")) || e.trim(this.get("thumbnail")) || (g == "s75" ? this.DEFAULT_PROFILE_THUMBNAIL_IMG : this.DEFAULT_PROFILE_IMG);
            return c.makeThumbnailUrl(h, g)
        },isModifyOpenCellphone: function() {
            return d.contains(this.get("permitted_operation"), this.MODIFY_OPEN_CELLPHONE)
        },isModifyOpenBirthday: function() {
            return d.contains(this.get("permitted_operation"), this.MODIFY_OPEN_BIRTHDAY)
        },getBandNO: function() {
            return this.bandNO
        },getBandName: function() {
            return this.bandName
        },isNullDefaultProfileImage: function() {
            return this._isNullDefaultProfileImage
        },isDefaultPorifleImage: function() {
            return this.isDefaultProfileImage
        },getUserNO: function() {
            return this.get("user_no")
        },getName: function() {
            return this.get("name")
        }});
    return b
});
define("text!profile/templates/profileTemplate.html", [], function() {
    return '<form>\n    <div class="profile_photo" style="width:310px;height:310px;">\n        <img src="<%-face%>" alt="<%-name%>" class="profile_photo_img" width="310" height="310" />\n        <div class="profile_cover"></div>\n        <% if (bandName) { %>\n        <div class="band_name"><%-bandName%></div>\n        <% } %>\n        <div class="profile_upload"><input type="file" id="band_profile_uploader"></div>\n        <button type="button" class="profile_pop_help"><img src="<%-resBaseUrl%>/images/member/ico_question.png" width="21" height="21" alt="프로필 도움말" /></button>\n        <div class="help_msg_box" style="display:none;">\n            <div class="box_inner">\n                <%=G.STR(\'pcweb.layer.memberprofile.msg.tooltip_profile_info\')%>\n            </div>\n        </div>\n    </div>\n    <div class="profile_info">\n        <div class="profile_info_group">\n            <div class="profile_simple_info">\n                <p class="name"><label for="name_txt" class="name_info"><%-G.STR(\'pcweb.layer.memberprofile.placeholder.name_info\')%></label><input type="text" class="name_txt" id="name_txt" maxlength="20" placeholder="<%-G.STR(\'pcweb.layer.memberprofile.placeholder.name_info\')%>" value="<%-name%>"/></p>\n                <div class="state"><label for="state_txt" class="state_info"><%-G.STR(\'pcweb.layer.memberprofile.placeholder.state_info\')%></label><input type="text" id="state_txt" class="state_txt" maxlength="50" placeholder="<%-G.STR(\'pcweb.layer.memberprofile.placeholder.state_info\')%>" value="<%-description%>" /></div>\n            </div>\n            <% if(isShowProfileDetail) { %>\n            <ul class="profile_detail_info">\n                <li class="birth">\n                    <% if(birthday) { %>\n                    <span class="check_wrap _noname"><input type="checkbox" id="member_birth" name="member_birth"<%-isOpenBirthday?" checked":""%>><label class="member_birth" for="member_birth"><span class="checkbox_fake"></span><%-G.STR(\'pcweb.layer.memberprofile.label.open_birth\')%> <br /><span class="info_open_txt"><%-birthday%></span></label></span>\n                    <% } else { %>\n                    <a href="<%-profileSettingUrl%>" class="info_open"><%-G.STR(\'pcweb.layer.memberprofile.label.open_birth\')%> <br /><span class="info_open_txt"><%-G.STR(\'pcweb.layer.memberprofile.label.input_birthday\')%></span></a>\n                    <% } %>\n                </li>\n                <li class="phone">\n                    <% if(cellphone) { %>\n                    <span class="check_wrap _noname"><input type="checkbox" id="phone_number" name="phone_number"<%-isOpenCellphone?" checked":""%>><label class="phone_number" for="phone_number"><span class="checkbox_fake"></span><%-G.STR(\'pcweb.layer.memberprofile.label.open_cellphone\')%> <br /><span class="info_open_txt"><%-cellphone%></span></label></span>\n                    <% } else { %>\n                    <a href="<%-profileSettingUrl%>" class="info_open"><%-G.STR(\'pcweb.layer.memberprofile.label.open_cellphone\')%> <br /><span class="info_open_txt"><%-G.STR(\'pcweb.layer.memberprofile.label.input_phone\')%></span></a>\n                    <% } %>\n                </li>\n            </ul>\n            <% } %>\n        </div>\n    </div>\n    <% if(isShowProfileDetail) { %>\n    <div class="info_profile_setting"><%=G.STR(\'pcweb.layer.memberprofile.label.user_profile_setting_desc\', profileSettingUrl)%></div>\n    <% } %>\n    <div class="agree_text _agree_profile_image_wrap" style="display:none;"><%-G.STR(\'pcweb.layer.memberprofile.label.agree_user_profile\')%></div>\n    <div class="profile_modify_complete">\n        <button class="profile_submit"><%-G.STR(\'pcweb.layer.memberprofile.btn.confirm\')%></button>\n    </div>\n</form>\n<button type="button" class="profile_pop_close"><img src="<%-resBaseUrl%>/images/member/layer_close.png" width="18" height="18" alt="프로필 닫기" /></button>'
});
define("config/pageInfos", ["localize/reslang", "bandConstants"], function(b, d) {
    var c = {parsePageRouteData: function(k, h) {
            var n = this[k];
            var m = {};
            var j = n.ROUTE_RULE;
            var f = j.match(/:[^\/]+/g);
            if (f) {
                for (var g = 0; g < f.length; g++) {
                    var l = f[g].replace(":", "");
                    m[l] = h[g]
                }
            }
            var e = h.slice(h.length - 1)[0] || {};
            if (typeof e === "string") {
                e = {}
            }
            return {pageInfo: n,pathVariables: m,params: e}
        },BAND_HOME: {NAME: "BAND_HOME",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.board"),ROUTE_RULE: "band/:band_no",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(f) {
                var e = typeof f != "object" ? f : f.getBandNo();
                return "#/band/" + e
            }},BAND_BOARD: {NAME: "BAND_BOARD",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.board"),ROUTE_RULE: "band/:band_no/board",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(e) {
                var f = c.BAND_HOME.URL_MAKE_FUNCTION(e);
                return f + "/board"
            }},BAND_POST_SEARCH: {NAME: "BAND_POST_SEARCH",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.board"),ROUTE_RULE: "band/:band_no/board/search",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(e, k, h, g) {
                var j = $.param(g || {});
                if (e == d.SEARCH.QUERY_TYPE.POST_ID) {
                    var f = c.BAND_BOARD.URL_MAKE_FUNCTION(k);
                    return f + "/search?query_type=POST_ID&query=" + h + "&" + j
                }
                var f = c.BAND_BOARD.URL_MAKE_FUNCTION(k);
                return f + "/search?query=" + h + "&" + j
            }},BAND_POST_DETAIL: {NAME: "BAND_POST_DETAIL",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.board"),ROUTE_RULE: "band/:band_no/post/:post_id",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(j, f, g) {
                var h = $.param(g || {});
                var k = c.BAND_HOME.URL_MAKE_FUNCTION(j);
                var e = typeof f != "object" ? f : f.getPostID();
                return k + "/post/" + e + (h ? "?" + h : "")
            }},BAND_ALBUM: {NAME: "BAND_ALBUM",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.gallery"),ROUTE_RULE: "band/:band_no/album",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(e) {
                var f = c.BAND_HOME.URL_MAKE_FUNCTION(e);
                return f + "/album"
            }},BAND_ALBUM_DETAIL: {NAME: "BAND_ALBUM_DETAIL",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.gallery"),ROUTE_RULE: "band/:band_no/album/:album_no",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(h, g) {
                var f = c.BAND_ALBUM.URL_MAKE_FUNCTION(h);
                var e = typeof g != "object" || typeof g == "number" ? g : g.get("no");
                e = e || "all";
                return f + "/" + e
            }},BAND_CALENDAR: {NAME: "BAND_CALENDAR",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.calendar"),ROUTE_RULE: "band/:band_no/calendar",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(f, e) {
                var g = c.BAND_HOME.URL_MAKE_FUNCTION(f);
                if (e) {
                    return g + "/calendar?scheduleID=" + e.get("schedule_id") + "&month=" + moment(e.get("start_at")).format("YYYY-MM")
                } else {
                    return g + "/calendar"
                }
            }},BAND_MEMBER: {NAME: "BAND_MEMBER",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.address"),ROUTE_RULE: "band/:band_no/member",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(e) {
                var f = c.BAND_HOME.URL_MAKE_FUNCTION(e);
                return f + "/member"
            }},BAND_SETTING: {NAME: "BAND_SETTING",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.band_setting"),ROUTE_RULE: "band/:band_no/setting",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(e) {
                var f = c.BAND_HOME.URL_MAKE_FUNCTION(e);
                return f + "/setting"
            }},BAND_CHANGE_NAME_AND_COVER_SETTING: {NAME: "BAND_CHANGE_NAME_AND_COVER_SETTING",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.change_band_name_and_cover"),ROUTE_RULE: "band/:band_no/setting/change_name_and_cover",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(e) {
                var f = c.BAND_HOME.URL_MAKE_FUNCTION(e);
                return f + "/setting/change_name_and_cover"
            }},SETTINGS: {NAME: "SETTINGS",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.preference"),ROUTE_RULE: "settings",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function() {
                return "#/settings"
            }},NOTICE: {NAME: "NOTICE",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.notice"),ROUTE_RULE: "notice",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function() {
                return "cs/#/notice"
            }},NOTICE_DETAIL: {NAME: "NOTICE_DETAIL",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.noticedetail"),ROUTE_RULE: "notice/:notice_id",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(g) {
                var e = c.NOTICE.URL_MAKE_FUNCTION();
                var f = typeof g != "object" ? g : g.get("id");
                return e + "/" + f
            }},HELP: {NAME: "HELP",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.guidedetail"),ROUTE_RULE: "help",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function() {
                return "cs/#/help"
            }},HELP_CATEGORY: {NAME: "HELP_CATEGORY",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.guidedetail"),ROUTE_RULE: "help/category/:category_no",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(g) {
                var e = c.HELP.URL_MAKE_FUNCTION();
                var f = typeof g != "object" ? g : g.get("helpCategoryNo");
                return e + "/category/" + f
            }},HELP_SEARCH: {NAME: "HELP_SEARCH",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.guidedetail"),ROUTE_RULE: "help/search",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(f) {
                var e = c.HELP.URL_MAKE_FUNCTION();
                return e + "/search?query=" + f
            }},HELP_DETAIL: {NAME: "HELP_DETAIL",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.guidedetail"),ROUTE_RULE: "help/detail/:help_no",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(f) {
                var e = c.HELP.URL_MAKE_FUNCTION();
                var g = typeof f != "object" ? f : f.get("helpNo");
                return e + "/detail/" + g
            }},CONTACT_US: {NAME: "CONTACT_US",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.default"),ROUTE_RULE: "contactUs",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function(f) {
                var e = "cs/#/contactUs";
                if (f) {
                    e += "?inquiryCategoryCode=" + f
                }
                return e
            }},TERMS: {NAME: "TERMS",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.agreement"),ROUTE_RULE: "terms",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function() {
                return "/policy/terms"
            }},PRIVACY: {NAME: "PRIVACY",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.privacy"),ROUTE_RULE: "privacy",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function() {
                return "/policy/privacy"
            }},OPERATING: {NAME: "OPERATING",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.operating"),ROUTE_RULE: "operating",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function() {
                return "/policy/operating"
            }},USURPATION: {NAME: "USURPATION",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.usurpation"),ROUTE_RULE: "usurpation",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function() {
                return "/policy/usurpation"
            }},INVITE: {NAME: "INVITE",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.default"),ROUTE_RULE: "invite",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function() {
                return "#/invite"
            }},CREATE_BAND: {NAME: "CREATE_BAND",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.create_band"),ROUTE_RULE: "create_band",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function() {
                return "#/create_band"
            }},USER_HOME: {NAME: "USER_HOME",PAGE_TITLE: b.STR("pcweb.noui.js.pagetitle.default"),ROUTE_RULE: "*actions",CSS_LIST: ["p_band.css"],URL_MAKE_FUNCTION: function() {
                return "#/"
            }}};
    return c
});
define("util/bandWebUrlUtil", ["jquery", "underscore", "backbone", "bandConstants", "config/pageInfos"], function(f, c, e, g, d) {
    var b = {makePCWebUrl: function(j) {
            var h = d[j] && d[j].URL_MAKE_FUNCTION;
            if (typeof h != "function") {
                return j
            }
            return h.apply(d, Array.prototype.slice.call(arguments, 1))
        },goForced: function(j) {
            if (!j || j == "") {
                return
            }
            var k = this.makePCWebUrl.apply(this, arguments);
            if (this._isExternalUrl(k)) {
                location.href = k;
                return
            }
            if (!this._isValidMainPage()) {
                k = "/" + k
            }
            var h = location.href;
            location.href = k;
            if (h == location.href) {
                if (e.history.root) {
                    Backbone.history.loadUrl()
                }
            }
        },_isExternalUrl: function(j) {
            var l = /http[s]?:\/\/([^#]+)/;
            var h = j.match(l);
            if (!h) {
                return false
            }
            var m = h[1];
            var k = window.location.href.match(l)[1];
            return m != k
        },_isValidMainPage: function() {
            return window.location.pathname == "/" || window.location.pathname.match(/^\/@/)
        }};
    return b
});
define("text!settings/templates/profileCropImageTemplate.html", [], function() {
    return '\n<p class="upload_notice"><strong><%=G.STR(\'pcweb.layer.cropimage.msg.upload_notice\')%></strong></p>\n<form class="upload_form">\n    <div class="before_upload">\n        <img src="<%-resBaseUrl%>/images/setting/img_no_upload.gif" width="430" height="430" />\n    </div>\n    <div class="after_upload">\n        <div class="_image_cropper10 image_cropper">\n            <div class="_no_image no_image" style="display: none;"><%-G.STR(\'pcweb.layer.cropimage.msg.gudie_no_image\')%></div>\n            <div style="" class="_crop_area crop_area">\n                <div class="background_box"><img class="_background_image image"></div>\n                <div class="_background_mask mask"></div>\n                <div class="_crop_box crop_box">\n                    <div class="image_box"><img class="_crop_box_image image"></div>\n                    <div class="_size_indicator size_indicator"></div>\n                    <div class="_crop_box_mask mask"></div>\n                    <button handletype="1" class="_resize_handle resize_handle type1" type="button"></button>\n                    <button handletype="2" class="_resize_handle resize_handle type2" type="button"></button>\n                    <button handletype="3" class="_resize_handle resize_handle type3" type="button"></button>\n                    <button handletype="4" class="_resize_handle resize_handle type4" type="button"></button>\n                </div>\n                <div class="_vertical_bar vertical_bar" style="display: none;"><div class="_thumb thumb"></div></div>\n                <div class="_horizontal_bar horizontal_bar" style="display: none;"><div class="_thumb thumb"></div></div>\n                <div style="display:none" class="_slider_container zoom_in_out">\n                    <button class="_zoom_in in" title="<%-G.STR(\'pcweb.layer.cropimage.btn.zoom_in\')%>" type="button"></button>\n                    <div class="_slider"></div>\n                    <!--<div class="_track control_area"><button type="button" class="slider-thumb control" style="top:130px"></button></div>-->\n                    <button class="_zoom_out out" title="<%-G.STR(\'pcweb.layer.cropimage.btn.zoom_out\')%>" type="button"></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="upload_txt"><%=G.STR(\'pcweb.layer.cropimage.msg.upload_guide\')%></div>\n    <div class="upload_wrap"><input id="upload_crop_image_anchor" type="file" /></div>\n    <div class="submit_wrap">\n        <input type="submit" class="submit_btn" value="<%-G.STR(\'pcweb.layer.cropimage.btn.submit\')%>" />\n    </div>\n</form>\n<button type="button" class="layer_close"><img src="<%-resBaseUrl%>/images/calendar/layer_close.gif" alt="" width="14" height="14" /></button>'
});
define("text!band/templates/bandCoverCropImageTemplate.html", [], function() {
    return '<p class="upload_notice"><strong><%=G.STR(\'pcweb.createbandhome.cropimage.msg.top_notice\')%></strong></p>\n<form class="upload_form">\n    <div class="before_upload">\n        <img src="<%-resBaseUrl%>/images/setting/img_no_upload.gif" width="430" height="430" />\n    </div>\n    <div class="after_upload cover_upload">\n        <div class="_image_cropper10 image_cropper">\n            <div class="_no_image no_image" style="display: none;"><%-G.STR(\'pcweb.createbandhome.cropimage.msg.gudie_no_image\')%></div>\n            <div style="" class="_crop_area crop_area">\n                <div class="background_box"><img class="_background_image image"></div>\n                <div class="_background_mask mask"></div>\n                <div class="_crop_box crop_box">\n                    <div class="image_box"><img class="_crop_box_image image"><span class="covering"></span></div>\n                    <div class="_size_indicator size_indicator"></div>\n                    <div class="_crop_box_mask mask"></div>\n                    <button handletype="1" class="_resize_handle resize_handle type1" type="button"></button>\n                    <button handletype="2" class="_resize_handle resize_handle type2" type="button"></button>\n                    <button handletype="3" class="_resize_handle resize_handle type3" type="button"></button>\n                    <button handletype="4" class="_resize_handle resize_handle type4" type="button"></button>\n                </div>\n                <div class="_vertical_bar vertical_bar" style="display: none;"><div class="_thumb thumb"></div></div>\n                <div class="_horizontal_bar horizontal_bar" style="display: none;"><div class="_thumb thumb"></div></div>\n                <div style="display:none" class="_slider_container zoom_in_out">\n                    <button class="_zoom_in in" title="<%-G.STR(\'pcweb.layer.cropimage.btn.zoom_in\')%>" type="button"></button>\n                    <div class="_slider"></div>\n                    <!--<div class="_track control_area"><button type="button" class="slider-thumb control" style="top:130px"></button></div>-->\n                    <button class="_zoom_out out" title="<%-G.STR(\'pcweb.layer.cropimage.btn.zoom_out\')%>" type="button"></button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="upload_txt"><%-G.STR(\'pcweb.createbandhome.cropimage.msg.upload_guide\')%></div>\n    <div class="upload_wrap"><input id="upload_crop_image_anchor" type="file" /></div>\n    <div class="submit_wrap">\n        <input type="submit" class="submit_btn" value="<%-G.STR(\'pcweb.layer.cropimage.btn.submit\')%>" />\n    </div>\n</form>\n<button type="button" class="layer_close"><img src="<%-resBaseUrl%>/images/calendar/layer_close.gif" alt="" width="14" height="14" /></button>'
});
define("util/upload/uploadConstants", [], function() {
    var b = {ERROR_COUNT_MESSAGE_SYMBOL: {PHOTO: "pcweb.noui.js.alert.photo_limit_count",FILE: "pcweb.noui.js.alert.file_limit_count"},ERROR_SIZE_MESSAGE_SYMBOL: {PHOTO: "pcweb.noui.js.alert.photo_limit_size",FILE: "pcweb.noui.js.alert.file_limit_size",VIDEO: "pcweb.noui.js.alert.video_limit_size"},ERROR_FORMAT_MESSAGE_SYMBOL: {PHOTO: "pcweb.noui.js.alert.photo_allow_format",FILE: "pcweb.noui.js.alert.file_not_allow",VIDEO: "pcweb.noui.js.alert.file_not_allow"}};
    return b
});
define("text!layers/templates/progressBarTemplate.html", [], function() {
    return '<div class="layer_head">\n  <strong><%-title%></strong>\n</div>\n<div class="layer_body">\n  <div class="loading_bar">\n    <span class="file_name"></span>\n    <span class="file_num"><!--<b>1</b>/5--></span>\n    <div class="loading_per"><div class="per_graph" style="width:0%;"></div><span class="per_txt">0%</span></div>\n  </div>\n  <button type="button" class="cancel_loading"><%-G.STR(\'pcweb.layer.progressbar.btn.cancel\')%></button>\n</div>'
});
define("layers/views/progressBarView", ["jquery", "underscore", "marionette", "text!layers/templates/progressBarTemplate.html"], function(e, b, f, d) {
    var c = f.ItemView.extend({template: b.template(d),className: "loading_layer",events: {"click .cancel_loading": function(g) {
                this.trigger("cancel");
                this.close();
                return false
            }},ui: {barBelt: "div.per_graph",barText: "span.per_txt",count: "span.file_num",filename: ".file_name"},initialize: function(g) {
            this.title = g.title
        },setProgressData: function(g) {
            var h = parseInt(g.currentFilePercent, 10) + "%";
            this.ui.barBelt.css("width", h);
            this.ui.barText.text(h);
            this.ui.count.html("<b>" + (g.currentFileIndex + 1) + "</b>/" + g.totalFileCount);
            this.ui.filename.text(g.currentFileName)
        },serializeData: function() {
            return {title: this.title}
        }});
    return c
});
define("module/progressBar", ["jquery", "underscore", "marionette", "module/dimmedLayer", "layers/views/progressBarView"], function(e, c, g, f, d) {
    var b = g.Controller.extend({initialize: function() {
        },progress: function(h) {
            if (!this.progressBarView || this.progressBarView.isClosed) {
                return
            }
            this.progressBarView.setProgressData(h)
        },show: function(j, h) {
            h = e.extend({cancel: function() {
                }}, h);
            if (!this.progressBarView) {
                this.progressBarView = new d({title: j});
                this.progressBarView.on("cancel", h.cancel);
                f.showDialog(this.progressBarView)
            }
        },hide: function() {
            if (!this.progressBarView) {
                return
            }
            this.progressBarView.close();
            this.progressBarView = null
        }});
    return new b()
});
define("util/upload/bandUploadValidators", ["jquery", "bandConstants", "util/upload/uploadConstants", "localize/reslang", "util/bandUtil"], function(f, g, c, e, d) {
    var b = [{name: "gifValidator",validate: function(r, j, w, h, N) {
                var v = function(O) {
                    O = O || [];
                    var R = 0;
                    for (var Q = 0; Q < O.length; Q++) {
                        var P = O[Q].original || O[Q].photo_url || O[Q].url || "";
                        var l = P.replace(/^.+\./, "");
                        if (l.toLowerCase() == "gif") {
                            R++
                        }
                    }
                    return R
                };
                if (w === "PHOTO") {
                    var k = v(h);
                    for (var s = 0, p = j.length; s < p; s++) {
                        var o = j[s];
                        var x = _(o.name.split(".")).last();
                        if (x.toLowerCase() == "gif") {
                            var m = 5 * 1024 * 1024;
                            if (o.size > m) {
                                alert(e.STR("pcweb.noui.js.alert.limit_size_filetype", "5MB", "GIF"));
                                return false
                            }
                            k++
                        }
                    }
                    var n = N.gifMaxCount || -1;
                    if (n > 0 && k > n) {
                        alert(e.STR("pcweb.noui.js.alert.limit_count_filetype", "GIF", n));
                        return false
                    }
                }
                return true
            }}, {name: "maxSizeValidator",validate: function(m, l, k, h, j) {
                var n = j.uploadLimit || g.UPLOAD.MAX_COUNT[k];
                if (n > 0 && m.selectFileLength + h.length > n) {
                    alert(e.STR(c.ERROR_COUNT_MESSAGE_SYMBOL[k], n));
                    return false
                }
                return true
            }}, {name: "fileFormatValidator",validate: function(o, k, s, h, x) {
                for (var p = 0, n = k.length; p < n; p++) {
                    var m = k[p];
                    var v = parseInt(x.fileSizeLimit, 10);
                    var w = m.size > v;
                    if (w) {
                        alert(e.STR(c.ERROR_SIZE_MESSAGE_SYMBOL[s], d.toStringFileSize(v)));
                        return false
                    }
                    var j = m.size === 0;
                    if (j) {
                        alert(e.STR("pcweb.noui.js.alert.zero_size_file"));
                        return false
                    }
                    if (!d.checkFileFormat(_(m.name.split(".")).last(), s, x.allowFileTypes)) {
                        var r = x.allowFileTypes || g.FORMAT[s];
                        if (s == "PHOTO") {
                            alert(e.STR(c.ERROR_FORMAT_MESSAGE_SYMBOL[s], "*" + r.join(",*")))
                        } else {
                            alert(e.STR(c.ERROR_FORMAT_MESSAGE_SYMBOL[s]))
                        }
                        return false
                    }
                }
                return true
            }}];
    return b
});
define("libCustom/swfUploadBugFix", [], function() {
    var b = {doFix: function() {
            SWFUpload.prototype.cleanUp = function(c) {
                try {
                    if (this.movieElement && typeof (c.CallFunction) === "unknown") {
                        this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
                        for (var e in c) {
                            try {
                                if (typeof (c[e]) === "function" && !HTMLObjectElement.prototype[e] && e[0] >= "A" && e[0] <= "Z") {
                                    c[e] = null
                                }
                            } catch (d) {
                            }
                        }
                    }
                } catch (f) {
                }
                window.__flash__removeCallback = function(g, h) {
                    try {
                        if (g) {
                            g[h] = null
                        }
                    } catch (j) {
                    }
                }
            }
        }};
    return b
});
var swfobject = function() {
    var aq = "undefined", aD = "object", ab = "Shockwave Flash", X = "ShockwaveFlash.ShockwaveFlash", aE = "application/x-shockwave-flash", ac = "SWFObjectExprInst", ax = "onreadystatechange", af = window, aL = document, aB = navigator, aa = false, Z = [aN], aG = [], ag = [], al = [], aJ, ad, ap, at, ak = false, aU = false, aH, an, aI = true, ah = function() {
        var b = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq, f = aB.userAgent.toLowerCase(), d = aB.platform.toLowerCase(), j = d ? /win/.test(d) : /win/.test(f), l = d ? /mac/.test(d) : /mac/.test(f), h = /webkit/.test(f) ? parseFloat(f.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, e = !+"\v1", g = [0, 0, 0], m = null;
        if (typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
            m = aB.plugins[ab].description;
            if (m && !(typeof aB.mimeTypes != aq && aB.mimeTypes[aE] && !aB.mimeTypes[aE].enabledPlugin)) {
                aa = true;
                e = false;
                m = m.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                g[0] = parseInt(m.replace(/^(.*)\..*$/, "$1"), 10);
                g[1] = parseInt(m.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                g[2] = /[a-zA-Z]/.test(m) ? parseInt(m.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof af.ActiveXObject != aq) {
                try {
                    var k = new ActiveXObject(X);
                    if (k) {
                        m = k.GetVariable("$version");
                        if (m) {
                            e = true;
                            m = m.split(" ")[1].split(",");
                            g = [parseInt(m[0], 10), parseInt(m[1], 10), parseInt(m[2], 10)]
                        }
                    }
                } catch (c) {
                }
            }
        }
        return {w3: b,pv: g,wk: h,ie: e,win: j,mac: l}
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
                        } catch (b) {
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
            var c = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
            c.parentNode.removeChild(c)
        } catch (b) {
            return
        }
        ak = true;
        var e = Z.length;
        for (var d = 0; d < e; d++) {
            Z[d]()
        }
    }
    function aj(b) {
        if (ak) {
            b()
        } else {
            Z[Z.length] = b
        }
    }
    function aC(b) {
        if (typeof af.addEventListener != aq) {
            af.addEventListener("load", b, false)
        } else {
            if (typeof aL.addEventListener != aq) {
                aL.addEventListener("load", b, false)
            } else {
                if (typeof af.attachEvent != aq) {
                    aM(af, "onload", b)
                } else {
                    if (typeof af.onload == "function") {
                        var c = af.onload;
                        af.onload = function() {
                            c();
                            b()
                        }
                    } else {
                        af.onload = b
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
        var e = aL.getElementsByTagName("body")[0];
        var c = ar(aD);
        c.setAttribute("type", aE);
        var b = e.appendChild(c);
        if (b) {
            var d = 0;
            (function() {
                if (typeof b.GetVariable != aq) {
                    var f = b.GetVariable("$version");
                    if (f) {
                        f = f.split(" ")[1].split(",");
                        ah.pv = [parseInt(f[0], 10), parseInt(f[1], 10), parseInt(f[2], 10)]
                    }
                } else {
                    if (d < 10) {
                        d++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                e.removeChild(c);
                b = null;
                am()
            })()
        } else {
            am()
        }
    }
    function am() {
        var h = aG.length;
        if (h > 0) {
            for (var j = 0; j < h; j++) {
                var d = aG[j].id;
                var n = aG[j].callbackFn;
                var b = {success: false,id: d};
                if (ah.pv[0] > 0) {
                    var k = aS(d);
                    if (k) {
                        if (ao(aG[j].swfVersion) && !(ah.wk && ah.wk < 312)) {
                            ay(d, true);
                            if (n) {
                                b.success = true;
                                b.ref = av(d);
                                n(b)
                            }
                        } else {
                            if (aG[j].expressInstall && au()) {
                                var f = {};
                                f.data = aG[j].expressInstall;
                                f.width = k.getAttribute("width") || "0";
                                f.height = k.getAttribute("height") || "0";
                                if (k.getAttribute("class")) {
                                    f.styleclass = k.getAttribute("class")
                                }
                                if (k.getAttribute("align")) {
                                    f.align = k.getAttribute("align")
                                }
                                var g = {};
                                var e = k.getElementsByTagName("param");
                                var m = e.length;
                                for (var l = 0; l < m; l++) {
                                    if (e[l].getAttribute("name").toLowerCase() != "movie") {
                                        g[e[l].getAttribute("name")] = e[l].getAttribute("value")
                                    }
                                }
                                ae(f, g, d, n)
                            } else {
                                aF(k);
                                if (n) {
                                    n(b)
                                }
                            }
                        }
                    }
                } else {
                    ay(d, true);
                    if (n) {
                        var c = av(d);
                        if (c && typeof c.SetVariable != aq) {
                            b.success = true;
                            b.ref = c
                        }
                        n(b)
                    }
                }
            }
        }
    }
    function av(c) {
        var e = null;
        var d = aS(c);
        if (d && d.nodeName == "OBJECT") {
            if (typeof d.SetVariable != aq) {
                e = d
            } else {
                var b = d.getElementsByTagName(aD)[0];
                if (b) {
                    e = b
                }
            }
        }
        return e
    }
    function au() {
        return !aU && ao("6.0.65") && (ah.win || ah.mac) && !(ah.wk && ah.wk < 312)
    }
    function ae(g, e, j, f) {
        aU = true;
        ap = f || null;
        at = {success: false,id: j};
        var b = aS(j);
        if (b) {
            if (b.nodeName == "OBJECT") {
                aJ = aO(b);
                ad = null
            } else {
                aJ = b;
                ad = j
            }
            g.id = ac;
            if (typeof g.width == aq || (!/%$/.test(g.width) && parseInt(g.width, 10) < 310)) {
                g.width = "310"
            }
            if (typeof g.height == aq || (!/%$/.test(g.height) && parseInt(g.height, 10) < 137)) {
                g.height = "137"
            }
            aL.title = aL.title.slice(0, 47) + " - Flash Player Installation";
            var c = ah.ie && ah.win ? "ActiveX" : "PlugIn", d = "MMredirectURL=" + af.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + c + "&MMdoctitle=" + aL.title;
            if (typeof e.flashvars != aq) {
                e.flashvars += "&" + d
            } else {
                e.flashvars = d
            }
            if (ah.ie && ah.win && b.readyState != 4) {
                var h = ar("div");
                j += "SWFObjectNew";
                h.setAttribute("id", j);
                b.parentNode.insertBefore(h, b);
                b.style.display = "none";
                (function() {
                    if (b.readyState == 4) {
                        b.parentNode.removeChild(b)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            aA(g, e, j)
        }
    }
    function aF(b) {
        if (ah.ie && ah.win && b.readyState != 4) {
            var c = ar("div");
            b.parentNode.insertBefore(c, b);
            c.parentNode.replaceChild(aO(b), c);
            b.style.display = "none";
            (function() {
                if (b.readyState == 4) {
                    b.parentNode.removeChild(b)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            b.parentNode.replaceChild(aO(b), b)
        }
    }
    function aO(c) {
        var e = ar("div");
        if (ah.win && ah.ie) {
            e.innerHTML = c.innerHTML
        } else {
            var f = c.getElementsByTagName(aD)[0];
            if (f) {
                var b = f.childNodes;
                if (b) {
                    var g = b.length;
                    for (var d = 0; d < g; d++) {
                        if (!(b[d].nodeType == 1 && b[d].nodeName == "PARAM") && !(b[d].nodeType == 8)) {
                            e.appendChild(b[d].cloneNode(true))
                        }
                    }
                }
            }
        }
        return e
    }
    function aA(f, h, d) {
        var e, b = aS(d);
        if (ah.wk && ah.wk < 312) {
            return e
        }
        if (b) {
            if (typeof f.id == aq) {
                f.id = d
            }
            if (ah.ie && ah.win) {
                var g = "";
                for (var k in f) {
                    if (f[k] != Object.prototype[k]) {
                        if (k.toLowerCase() == "data") {
                            h.movie = f[k]
                        } else {
                            if (k.toLowerCase() == "styleclass") {
                                g += ' class="' + f[k] + '"'
                            } else {
                                if (k.toLowerCase() != "classid") {
                                    g += " " + k + '="' + f[k] + '"'
                                }
                            }
                        }
                    }
                }
                var j = "";
                for (var l in h) {
                    if (h[l] != Object.prototype[l]) {
                        j += '<param name="' + l + '" value="' + h[l] + '" />'
                    }
                }
                b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + g + ">" + j + "</object>";
                ag[ag.length] = f.id;
                e = aS(f.id)
            } else {
                var c = ar(aD);
                c.setAttribute("type", aE);
                for (var m in f) {
                    if (f[m] != Object.prototype[m]) {
                        if (m.toLowerCase() == "styleclass") {
                            c.setAttribute("class", f[m])
                        } else {
                            if (m.toLowerCase() != "classid") {
                                c.setAttribute(m, f[m])
                            }
                        }
                    }
                }
                for (var n in h) {
                    if (h[n] != Object.prototype[n] && n.toLowerCase() != "movie") {
                        aQ(c, n, h[n])
                    }
                }
                b.parentNode.replaceChild(c, b);
                e = c
            }
        }
        return e
    }
    function aQ(c, e, d) {
        var b = ar("param");
        b.setAttribute("name", e);
        b.setAttribute("value", d);
        c.appendChild(b)
    }
    function aw(b) {
        var c = aS(b);
        if (c && c.nodeName == "OBJECT") {
            if (ah.ie && ah.win) {
                c.style.display = "none";
                (function() {
                    if (c.readyState == 4) {
                        aT(b)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                c.parentNode.removeChild(c)
            }
        }
    }
    function aT(b) {
        var c = aS(b);
        if (c) {
            for (var d in c) {
                if (typeof c[d] == "function") {
                    c[d] = null
                }
            }
            c.parentNode.removeChild(c)
        }
    }
    function aS(b) {
        var d = null;
        try {
            d = aL.getElementById(b)
        } catch (c) {
        }
        return d
    }
    function ar(b) {
        return aL.createElement(b)
    }
    function aM(b, d, c) {
        b.attachEvent(d, c);
        al[al.length] = [b, d, c]
    }
    function ao(b) {
        var c = ah.pv, d = b.split(".");
        d[0] = parseInt(d[0], 10);
        d[1] = parseInt(d[1], 10) || 0;
        d[2] = parseInt(d[2], 10) || 0;
        return (c[0] > d[0] || (c[0] == d[0] && c[1] > d[1]) || (c[0] == d[0] && c[1] == d[1] && c[2] >= d[2])) ? true : false
    }
    function az(c, g, b, d) {
        if (ah.ie && ah.mac) {
            return
        }
        var f = aL.getElementsByTagName("head")[0];
        if (!f) {
            return
        }
        var h = (b && typeof b == "string") ? b : "screen";
        if (d) {
            aH = null;
            an = null
        }
        if (!aH || an != h) {
            var e = ar("style");
            e.setAttribute("type", "text/css");
            e.setAttribute("media", h);
            aH = f.appendChild(e);
            if (ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
                aH = aL.styleSheets[aL.styleSheets.length - 1]
            }
            an = h
        }
        if (ah.ie && ah.win) {
            if (aH && typeof aH.addRule == aD) {
                aH.addRule(c, g)
            }
        } else {
            if (aH && typeof aL.createTextNode != aq) {
                aH.appendChild(aL.createTextNode(c + " {" + g + "}"))
            }
        }
    }
    function ay(b, d) {
        if (!aI) {
            return
        }
        var c = d ? "visible" : "hidden";
        if (ak && aS(b)) {
            aS(b).style.visibility = c
        } else {
            az("#" + b, "visibility:" + c)
        }
    }
    function ai(c) {
        var b = /[\\\"<>\.;]/;
        var d = b.exec(c) != null;
        return d && typeof encodeURIComponent != aq ? encodeURIComponent(c) : c
    }
    var aR = function() {
        if (ah.ie && ah.win) {
            window.attachEvent("onunload", function() {
                var b = al.length;
                for (var c = 0; c < b; c++) {
                    al[c][0].detachEvent(al[c][1], al[c][2])
                }
                var e = ag.length;
                for (var d = 0; d < e; d++) {
                    aw(ag[d])
                }
                for (var f in ah) {
                    ah[f] = null
                }
                ah = null;
                for (var g in swfobject) {
                    swfobject[g] = null
                }
                swfobject = null
            })
        }
    }();
    return {registerObject: function(b, f, d, c) {
            if (ah.w3 && b && f) {
                var e = {};
                e.id = b;
                e.swfVersion = f;
                e.expressInstall = d;
                e.callbackFn = c;
                aG[aG.length] = e;
                ay(b, false)
            } else {
                if (c) {
                    c({success: false,id: b})
                }
            }
        },getObjectById: function(b) {
            if (ah.w3) {
                return av(b)
            }
        },embedSWF: function(m, f, j, g, d, b, c, k, h, l) {
            var e = {success: false,id: f};
            if (ah.w3 && !(ah.wk && ah.wk < 312) && m && f && j && g && d) {
                ay(f, false);
                aj(function() {
                    j += "";
                    g += "";
                    var v = {};
                    if (h && typeof h === aD) {
                        for (var r in h) {
                            v[r] = h[r]
                        }
                    }
                    v.data = m;
                    v.width = j;
                    v.height = g;
                    var p = {};
                    if (k && typeof k === aD) {
                        for (var s in k) {
                            p[s] = k[s]
                        }
                    }
                    if (c && typeof c === aD) {
                        for (var n in c) {
                            if (typeof p.flashvars != aq) {
                                p.flashvars += "&" + n + "=" + c[n]
                            } else {
                                p.flashvars = n + "=" + c[n]
                            }
                        }
                    }
                    if (ao(d)) {
                        var o = aA(v, p, f);
                        if (v.id == f) {
                            ay(f, true)
                        }
                        e.success = true;
                        e.ref = o
                    } else {
                        if (b && au()) {
                            v.data = b;
                            ae(v, p, f, l);
                            return
                        } else {
                            ay(f, true)
                        }
                    }
                    if (l) {
                        l(e)
                    }
                })
            } else {
                if (l) {
                    l(e)
                }
            }
        },switchOffAutoHideShow: function() {
            aI = false
        },ua: ah,getFlashPlayerVersion: function() {
            return {major: ah.pv[0],minor: ah.pv[1],release: ah.pv[2]}
        },hasFlashPlayerVersion: ao,createSWF: function(b, c, d) {
            if (ah.w3) {
                return aA(b, c, d)
            } else {
                return undefined
            }
        },showExpressInstall: function(c, b, e, d) {
            if (ah.w3 && au()) {
                ae(c, b, e, d)
            }
        },removeSWF: function(b) {
            if (ah.w3) {
                aw(b)
            }
        },createCSS: function(c, b, d, e) {
            if (ah.w3) {
                az(c, b, d, e)
            }
        },addDomLoadEvent: aj,addLoadEvent: aC,getQueryParamValue: function(c) {
            var b = aL.location.search || aL.location.hash;
            if (b) {
                if (/\?/.test(b)) {
                    b = b.split("?")[1]
                }
                if (c == null) {
                    return ai(b)
                }
                var d = b.split("&");
                for (var e = 0; e < d.length; e++) {
                    if (d[e].substring(0, d[e].indexOf("=")) == c) {
                        return ai(d[e].substring((d[e].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },expressInstallCallback: function() {
            if (aU) {
                var b = aS(ac);
                if (b && aJ) {
                    b.parentNode.replaceChild(aJ, b);
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
var SWFUpload;
if (SWFUpload == undefined) {
    SWFUpload = function(b) {
        this.initSWFUpload(b)
    }
}
SWFUpload.prototype.initSWFUpload = function(c) {
    try {
        this.customSettings = {};
        this.settings = c;
        this.eventQueue = [];
        this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
        this.movieElement = null;
        SWFUpload.instances[this.movieName] = this;
        this.initSettings();
        this.loadFlash();
        this.displayDebugInfo()
    } catch (d) {
        delete SWFUpload.instances[this.movieName];
        throw d
    }
};
SWFUpload.instances = {};
SWFUpload.movieCount = 0;
SWFUpload.version = "2.2.0 2009-03-25";
SWFUpload.QUEUE_ERROR = {QUEUE_LIMIT_EXCEEDED: -100,FILE_EXCEEDS_SIZE_LIMIT: -110,ZERO_BYTE_FILE: -120,INVALID_FILETYPE: -130};
SWFUpload.UPLOAD_ERROR = {HTTP_ERROR: -200,MISSING_UPLOAD_URL: -210,IO_ERROR: -220,SECURITY_ERROR: -230,UPLOAD_LIMIT_EXCEEDED: -240,UPLOAD_FAILED: -250,SPECIFIED_FILE_ID_NOT_FOUND: -260,FILE_VALIDATION_FAILED: -270,FILE_CANCELLED: -280,UPLOAD_STOPPED: -290};
SWFUpload.FILE_STATUS = {QUEUED: -1,IN_PROGRESS: -2,ERROR: -3,COMPLETE: -4,CANCELLED: -5};
SWFUpload.BUTTON_ACTION = {SELECT_FILE: -100,SELECT_FILES: -110,START_UPLOAD: -120};
SWFUpload.CURSOR = {ARROW: -1,HAND: -2};
SWFUpload.WINDOW_MODE = {WINDOW: "window",TRANSPARENT: "transparent",OPAQUE: "opaque"};
SWFUpload.completeURL = function(e) {
    if (typeof (e) !== "string" || e.match(/^https?:\/\//i) || e.match(/^\//)) {
        return e
    }
    var f = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
    var d = window.location.pathname.lastIndexOf("/");
    if (d <= 0) {
        path = "/"
    } else {
        path = window.location.pathname.substr(0, d) + "/"
    }
    return path + e
};
SWFUpload.prototype.initSettings = function() {
    this.ensureDefault = function(c, d) {
        this.settings[c] = (this.settings[c] == undefined) ? d : this.settings[c]
    };
    this.ensureDefault("upload_url", "");
    this.ensureDefault("preserve_relative_urls", false);
    this.ensureDefault("file_post_name", "Filedata");
    this.ensureDefault("post_params", {});
    this.ensureDefault("use_query_string", false);
    this.ensureDefault("requeue_on_error", false);
    this.ensureDefault("http_success", []);
    this.ensureDefault("assume_success_timeout", 0);
    this.ensureDefault("file_types", "*.*");
    this.ensureDefault("file_types_description", "All Files");
    this.ensureDefault("file_size_limit", 0);
    this.ensureDefault("file_upload_limit", 0);
    this.ensureDefault("file_queue_limit", 0);
    this.ensureDefault("flash_url", "swfupload.swf");
    this.ensureDefault("prevent_swf_caching", true);
    this.ensureDefault("button_image_url", "");
    this.ensureDefault("button_width", 1);
    this.ensureDefault("button_height", 1);
    this.ensureDefault("button_text", "");
    this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
    this.ensureDefault("button_text_top_padding", 0);
    this.ensureDefault("button_text_left_padding", 0);
    this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
    this.ensureDefault("button_disabled", false);
    this.ensureDefault("button_placeholder_id", "");
    this.ensureDefault("button_placeholder", null);
    this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
    this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);
    this.ensureDefault("debug", false);
    this.settings.debug_enabled = this.settings.debug;
    this.settings.return_upload_start_handler = this.returnUploadStart;
    this.ensureDefault("swfupload_loaded_handler", null);
    this.ensureDefault("file_dialog_start_handler", null);
    this.ensureDefault("file_queued_handler", null);
    this.ensureDefault("file_queue_error_handler", null);
    this.ensureDefault("file_dialog_complete_handler", null);
    this.ensureDefault("upload_start_handler", null);
    this.ensureDefault("upload_progress_handler", null);
    this.ensureDefault("upload_error_handler", null);
    this.ensureDefault("upload_success_handler", null);
    this.ensureDefault("upload_complete_handler", null);
    this.ensureDefault("debug_handler", this.debugMessage);
    this.ensureDefault("custom_settings", {});
    this.customSettings = this.settings.custom_settings;
    if (!!this.settings.prevent_swf_caching) {
        this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + new Date().getTime()
    }
    if (!this.settings.preserve_relative_urls) {
        this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
        this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url)
    }
    delete this.ensureDefault
};
SWFUpload.prototype.loadFlash = function() {
    var d, c;
    if (document.getElementById(this.movieName) !== null) {
        throw "ID " + this.movieName + " is already in use. The Flash Object could not be added"
    }
    d = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;
    if (d == undefined) {
        throw "Could not find the placeholder element: " + this.settings.button_placeholder_id
    }
    c = document.createElement("div");
    c.innerHTML = this.getFlashHTML();
    d.parentNode.replaceChild(c.firstChild, d);
    if (window[this.movieName] == undefined) {
        window[this.movieName] = this.getMovieElement()
    }
};
SWFUpload.prototype.getFlashHTML = function() {
    return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.settings.flash_url, '" />', '<param name="quality" value="high" />', '<param name="menu" value="false" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("")
};
SWFUpload.prototype.getFlashVars = function() {
    var c = this.buildParamString();
    var d = this.settings.http_success.join(",");
    return ["movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(d), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(c), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("")
};
SWFUpload.prototype.getMovieElement = function() {
    if (this.movieElement == undefined) {
        this.movieElement = document.getElementById(this.movieName)
    }
    if (this.movieElement === null) {
        throw "Could not find Flash element"
    }
    return this.movieElement
};
SWFUpload.prototype.buildParamString = function() {
    var f = this.settings.post_params;
    var d = [];
    if (typeof (f) === "object") {
        for (var e in f) {
            if (f.hasOwnProperty(e)) {
                d.push(encodeURIComponent(e.toString()) + "=" + encodeURIComponent(f[e].toString()))
            }
        }
    }
    return d.join("&amp;")
};
SWFUpload.prototype.destroy = function() {
    try {
        this.cancelUpload(null, false);
        var g = null;
        g = this.getMovieElement();
        if (g && typeof (g.CallFunction) === "unknown") {
            for (var k in g) {
                try {
                    if (typeof (g[k]) === "function") {
                        g[k] = null
                    }
                } catch (h) {
                }
            }
            try {
                g.parentNode.removeChild(g)
            } catch (f) {
            }
        }
        window[this.movieName] = null;
        SWFUpload.instances[this.movieName] = null;
        delete SWFUpload.instances[this.movieName];
        this.movieElement = null;
        this.settings = null;
        this.customSettings = null;
        this.eventQueue = null;
        this.movieName = null;
        return true
    } catch (j) {
        return false
    }
};
SWFUpload.prototype.displayDebugInfo = function() {
    this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "\t", "upload_url:               ", this.settings.upload_url, "\n", "\t", "flash_url:                ", this.settings.flash_url, "\n", "\t", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "\t", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "\t", "http_success:             ", this.settings.http_success.join(", "), "\n", "\t", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "\t", "file_post_name:           ", this.settings.file_post_name, "\n", "\t", "post_params:              ", this.settings.post_params.toString(), "\n", "\t", "file_types:               ", this.settings.file_types, "\n", "\t", "file_types_description:   ", this.settings.file_types_description, "\n", "\t", "file_size_limit:          ", this.settings.file_size_limit, "\n", "\t", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "\t", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "\t", "debug:                    ", this.settings.debug.toString(), "\n", "\t", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "\t", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "\t", "button_placeholder:       ", (this.settings.button_placeholder ? "Set" : "Not Set"), "\n", "\t", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "\t", "button_width:             ", this.settings.button_width.toString(), "\n", "\t", "button_height:            ", this.settings.button_height.toString(), "\n", "\t", "button_text:              ", this.settings.button_text.toString(), "\n", "\t", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "\t", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "\t", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "\t", "button_action:            ", this.settings.button_action.toString(), "\n", "\t", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "\t", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "\t", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n", "\t", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler === "function").toString(), "\n", "\t", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler === "function").toString(), "\n", "\t", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler === "function").toString(), "\n", "\t", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler === "function").toString(), "\n", "\t", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler === "function").toString(), "\n", "\t", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler === "function").toString(), "\n", "\t", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler === "function").toString(), "\n", "\t", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler === "function").toString(), "\n", "\t", "debug_handler assigned:             ", (typeof this.settings.debug_handler === "function").toString(), "\n"].join(""))
};
SWFUpload.prototype.addSetting = function(d, f, e) {
    if (f == undefined) {
        return (this.settings[d] = e)
    } else {
        return (this.settings[d] = f)
    }
};
SWFUpload.prototype.getSetting = function(b) {
    if (this.settings[b] != undefined) {
        return this.settings[b]
    }
    return ""
};
SWFUpload.prototype.callFlash = function(functionName, argumentArray) {
    argumentArray = argumentArray || [];
    var movieElement = this.getMovieElement();
    var returnValue, returnString;
    try {
        returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>");
        returnValue = eval(returnString)
    } catch (ex) {
        throw "Call to " + functionName + " failed"
    }
    if (returnValue != undefined && typeof returnValue.post === "object") {
        returnValue = this.unescapeFilePostParams(returnValue)
    }
    return returnValue
};
SWFUpload.prototype.selectFile = function() {
    this.callFlash("SelectFile")
};
SWFUpload.prototype.selectFiles = function() {
    this.callFlash("SelectFiles")
};
SWFUpload.prototype.startUpload = function(b) {
    this.callFlash("StartUpload", [b])
};
SWFUpload.prototype.cancelUpload = function(d, c) {
    if (c !== false) {
        c = true
    }
    this.callFlash("CancelUpload", [d, c])
};
SWFUpload.prototype.stopUpload = function() {
    this.callFlash("StopUpload")
};
SWFUpload.prototype.getStats = function() {
    return this.callFlash("GetStats")
};
SWFUpload.prototype.setStats = function(b) {
    this.callFlash("SetStats", [b])
};
SWFUpload.prototype.getFile = function(b) {
    if (typeof (b) === "number") {
        return this.callFlash("GetFileByIndex", [b])
    } else {
        return this.callFlash("GetFile", [b])
    }
};
SWFUpload.prototype.addFileParam = function(e, d, f) {
    return this.callFlash("AddFileParam", [e, d, f])
};
SWFUpload.prototype.removeFileParam = function(d, c) {
    this.callFlash("RemoveFileParam", [d, c])
};
SWFUpload.prototype.setUploadURL = function(b) {
    this.settings.upload_url = b.toString();
    this.callFlash("SetUploadURL", [b])
};
SWFUpload.prototype.setPostParams = function(b) {
    this.settings.post_params = b;
    this.callFlash("SetPostParams", [b])
};
SWFUpload.prototype.addPostParam = function(d, c) {
    this.settings.post_params[d] = c;
    this.callFlash("SetPostParams", [this.settings.post_params])
};
SWFUpload.prototype.removePostParam = function(b) {
    delete this.settings.post_params[b];
    this.callFlash("SetPostParams", [this.settings.post_params])
};
SWFUpload.prototype.setFileTypes = function(d, c) {
    this.settings.file_types = d;
    this.settings.file_types_description = c;
    this.callFlash("SetFileTypes", [d, c])
};
SWFUpload.prototype.setFileSizeLimit = function(b) {
    this.settings.file_size_limit = b;
    this.callFlash("SetFileSizeLimit", [b])
};
SWFUpload.prototype.setFileUploadLimit = function(b) {
    this.settings.file_upload_limit = b;
    this.callFlash("SetFileUploadLimit", [b])
};
SWFUpload.prototype.setFileQueueLimit = function(b) {
    this.settings.file_queue_limit = b;
    this.callFlash("SetFileQueueLimit", [b])
};
SWFUpload.prototype.setFilePostName = function(b) {
    this.settings.file_post_name = b;
    this.callFlash("SetFilePostName", [b])
};
SWFUpload.prototype.setUseQueryString = function(b) {
    this.settings.use_query_string = b;
    this.callFlash("SetUseQueryString", [b])
};
SWFUpload.prototype.setRequeueOnError = function(b) {
    this.settings.requeue_on_error = b;
    this.callFlash("SetRequeueOnError", [b])
};
SWFUpload.prototype.setHTTPSuccess = function(b) {
    if (typeof b === "string") {
        b = b.replace(" ", "").split(",")
    }
    this.settings.http_success = b;
    this.callFlash("SetHTTPSuccess", [b])
};
SWFUpload.prototype.setAssumeSuccessTimeout = function(b) {
    this.settings.assume_success_timeout = b;
    this.callFlash("SetAssumeSuccessTimeout", [b])
};
SWFUpload.prototype.setDebugEnabled = function(b) {
    this.settings.debug_enabled = b;
    this.callFlash("SetDebugEnabled", [b])
};
SWFUpload.prototype.setButtonImageURL = function(b) {
    if (b == undefined) {
        b = ""
    }
    this.settings.button_image_url = b;
    this.callFlash("SetButtonImageURL", [b])
};
SWFUpload.prototype.setButtonDimensions = function(f, e) {
    this.settings.button_width = f;
    this.settings.button_height = e;
    var d = this.getMovieElement();
    if (d != undefined) {
        d.style.width = f + "px";
        d.style.height = e + "px"
    }
    this.callFlash("SetButtonDimensions", [f, e])
};
SWFUpload.prototype.setButtonText = function(b) {
    this.settings.button_text = b;
    this.callFlash("SetButtonText", [b])
};
SWFUpload.prototype.setButtonTextPadding = function(c, d) {
    this.settings.button_text_top_padding = d;
    this.settings.button_text_left_padding = c;
    this.callFlash("SetButtonTextPadding", [c, d])
};
SWFUpload.prototype.setButtonTextStyle = function(b) {
    this.settings.button_text_style = b;
    this.callFlash("SetButtonTextStyle", [b])
};
SWFUpload.prototype.setButtonDisabled = function(b) {
    this.settings.button_disabled = b;
    this.callFlash("SetButtonDisabled", [b])
};
SWFUpload.prototype.setButtonAction = function(b) {
    this.settings.button_action = b;
    this.callFlash("SetButtonAction", [b])
};
SWFUpload.prototype.setButtonCursor = function(b) {
    this.settings.button_cursor = b;
    this.callFlash("SetButtonCursor", [b])
};
SWFUpload.prototype.queueEvent = function(d, f) {
    if (f == undefined) {
        f = []
    } else {
        if (!(f instanceof Array)) {
            f = [f]
        }
    }
    var e = this;
    if (typeof this.settings[d] === "function") {
        this.eventQueue.push(function() {
            this.settings[d].apply(this, f)
        });
        setTimeout(function() {
            e.executeNextEvent()
        }, 0)
    } else {
        if (this.settings[d] !== null) {
            throw "Event handler " + d + " is unknown or is not a function"
        }
    }
};
SWFUpload.prototype.executeNextEvent = function() {
    var b = this.eventQueue ? this.eventQueue.shift() : null;
    if (typeof (b) === "function") {
        b.apply(this)
    }
};
SWFUpload.prototype.unescapeFilePostParams = function(m) {
    var k = /[$]([0-9a-f]{4})/i;
    var j = {};
    var l;
    if (m != undefined) {
        for (var h in m.post) {
            if (m.post.hasOwnProperty(h)) {
                l = h;
                var g;
                while ((g = k.exec(l)) !== null) {
                    l = l.replace(g[0], String.fromCharCode(parseInt("0x" + g[1], 16)))
                }
                j[l] = m.post[h]
            }
        }
        m.post = j
    }
    return m
};
SWFUpload.prototype.testExternalInterface = function() {
    try {
        return this.callFlash("TestExternalInterface")
    } catch (b) {
        return false
    }
};
SWFUpload.prototype.flashReady = function() {
    var b = this.getMovieElement();
    if (!b) {
        this.debug("Flash called back ready but the flash movie can't be found.");
        return
    }
    this.cleanUp(b);
    this.queueEvent("swfupload_loaded_handler")
};
SWFUpload.prototype.cleanUp = function(f) {
    try {
        if (this.movieElement && typeof (f.CallFunction) === "unknown") {
            this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
            for (var h in f) {
                try {
                    if (typeof (f[h]) === "function") {
                        f[h] = null
                    }
                } catch (e) {
                }
            }
        }
    } catch (g) {
    }
    window.__flash__removeCallback = function(d, c) {
        try {
            if (d) {
                d[c] = null
            }
        } catch (b) {
        }
    }
};
SWFUpload.prototype.fileDialogStart = function() {
    this.queueEvent("file_dialog_start_handler")
};
SWFUpload.prototype.fileQueued = function(b) {
    b = this.unescapeFilePostParams(b);
    this.queueEvent("file_queued_handler", b)
};
SWFUpload.prototype.fileQueueError = function(e, f, d) {
    e = this.unescapeFilePostParams(e);
    this.queueEvent("file_queue_error_handler", [e, f, d])
};
SWFUpload.prototype.fileDialogComplete = function(d, f, e) {
    this.queueEvent("file_dialog_complete_handler", [d, f, e])
};
SWFUpload.prototype.uploadStart = function(b) {
    b = this.unescapeFilePostParams(b);
    this.queueEvent("return_upload_start_handler", b)
};
SWFUpload.prototype.returnUploadStart = function(d) {
    var c;
    if (typeof this.settings.upload_start_handler === "function") {
        d = this.unescapeFilePostParams(d);
        c = this.settings.upload_start_handler.call(this, d)
    } else {
        if (this.settings.upload_start_handler != undefined) {
            throw "upload_start_handler must be a function"
        }
    }
    if (c === undefined) {
        c = true
    }
    c = !!c;
    this.callFlash("ReturnUploadStart", [c])
};
SWFUpload.prototype.uploadProgress = function(e, f, d) {
    e = this.unescapeFilePostParams(e);
    this.queueEvent("upload_progress_handler", [e, f, d])
};
SWFUpload.prototype.uploadError = function(e, f, d) {
    e = this.unescapeFilePostParams(e);
    this.queueEvent("upload_error_handler", [e, f, d])
};
SWFUpload.prototype.uploadSuccess = function(d, e, f) {
    d = this.unescapeFilePostParams(d);
    this.queueEvent("upload_success_handler", [d, e, f])
};
SWFUpload.prototype.uploadComplete = function(b) {
    b = this.unescapeFilePostParams(b);
    this.queueEvent("upload_complete_handler", b)
};
SWFUpload.prototype.debug = function(b) {
    this.queueEvent("debug_handler", b)
};
SWFUpload.prototype.debugMessage = function(h) {
    if (this.settings.debug) {
        var f, g = [];
        if (typeof h === "object" && typeof h.name === "string" && typeof h.message === "string") {
            for (var e in h) {
                if (h.hasOwnProperty(e)) {
                    g.push(e + ": " + h[e])
                }
            }
            f = g.join("\n") || "";
            g = f.split("\n");
            f = "EXCEPTION: " + g.join("\nEXCEPTION: ");
            SWFUpload.Console.writeLine(f)
        } else {
            SWFUpload.Console.writeLine(h)
        }
    }
};
SWFUpload.Console = {};
SWFUpload.Console.writeLine = function(g) {
    var e, f;
    try {
        e = document.getElementById("SWFUpload_Console");
        if (!e) {
            f = document.createElement("form");
            document.getElementsByTagName("body")[0].appendChild(f);
            e = document.createElement("textarea");
            e.id = "SWFUpload_Console";
            e.style.fontFamily = "monospace";
            e.setAttribute("wrap", "off");
            e.wrap = "off";
            e.style.overflow = "auto";
            e.style.width = "700px";
            e.style.height = "350px";
            e.style.margin = "5px";
            f.appendChild(e)
        }
        e.value += g + "\n";
        e.scrollTop = e.scrollHeight - e.clientHeight
    } catch (h) {
        alert("Exception: " + h.name + " Message: " + h.message)
    }
};
(function(d) {
    var c = {init: function(e, f) {
            return this.each(function() {
                var p = d(this);
                var o = p.clone();
                var l = d.extend({id: p.attr("id"),swf: "uploadify.swf",uploader: "uploadify.php",auto: true,buttonClass: "",buttonCursor: "hand",buttonImage: null,buttonText: "SELECT FILES",checkExisting: false,debug: false,fileObjName: "Filedata",fileSizeLimit: 0,fileTypeDesc: "All Files",fileTypeExts: "*.*",height: 30,itemTemplate: false,method: "post",multi: true,formData: {},preventCaching: true,progressData: "percentage",queueID: false,queueSizeLimit: 999,removeCompleted: true,removeTimeout: 3,requeueErrors: false,successTimeout: 30,uploadLimit: 0,width: 120,checkExistingQueue: true,overrideEvents: []}, e);
                var h = {assume_success_timeout: l.successTimeout,button_placeholder_id: l.id,button_width: l.width,button_height: l.height,button_text: null,button_text_style: null,button_text_top_padding: 0,button_text_left_padding: 0,button_action: (l.multi ? SWFUpload.BUTTON_ACTION.SELECT_FILES : SWFUpload.BUTTON_ACTION.SELECT_FILE),button_disabled: false,button_cursor: (l.buttonCursor == "arrow" ? SWFUpload.CURSOR.ARROW : SWFUpload.CURSOR.HAND),button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,debug: l.debug,requeue_on_error: l.requeueErrors,file_post_name: l.fileObjName,file_size_limit: l.fileSizeLimit,file_types: l.fileTypeExts,file_types_description: l.fileTypeDesc,file_queue_limit: l.queueSizeLimit,file_upload_limit: l.uploadLimit,flash_url: l.swf,prevent_swf_caching: l.preventCaching,post_params: l.formData,upload_url: l.uploader,use_query_string: (l.method == "get"),file_dialog_complete_handler: b.onDialogClose,file_dialog_start_handler: b.onDialogOpen,file_queued_handler: b.onSelect,file_queue_error_handler: b.onSelectError,swfupload_loaded_handler: l.onSWFReady,upload_complete_handler: b.onUploadComplete,upload_error_handler: b.onUploadError,upload_progress_handler: b.onUploadProgress,upload_start_handler: b.onUploadStart,upload_success_handler: b.onUploadSuccess};
                if (f) {
                    h = d.extend(h, f)
                }
                h = d.extend(h, l);
                var r = swfobject.getFlashPlayerVersion();
                var j = (r.major >= 9);
                if (j) {
                    window["uploadify_" + l.id] = new SWFUpload(h);
                    var k = window["uploadify_" + l.id];
                    p.data("uploadify", k);
                    var n = d("<div />", {id: l.id,"class": "uploadify",css: {height: l.height + "px",width: l.width + "px"}});
                    d("#" + k.movieName).wrap(n);
                    n = d("#" + l.id);
                    n.data("uploadify", k);
                    var g = d("<div />", {id: l.id + "-button","class": "uploadify-button " + l.buttonClass});
                    if (l.buttonImage) {
                        g.css({"background-image": "url('" + l.buttonImage + "')","text-indent": "-9999px"})
                    }
                    g.html('<span class="uploadify-button-text">' + l.buttonText + "</span>").css({height: l.height + "px","line-height": l.height + "px",width: l.width + "px"});
                    n.append(g);
                    d("#" + k.movieName).css({position: "absolute","z-index": 1});
                    if (!l.queueID) {
                        var m = d("<div />", {id: l.id + "-queue","class": "uploadify-queue"});
                        n.after(m);
                        k.settings.queueID = l.id + "-queue";
                        k.settings.defaultQueue = true
                    }
                    k.queueData = {files: {},filesSelected: 0,filesQueued: 0,filesReplaced: 0,filesCancelled: 0,filesErrored: 0,uploadsSuccessful: 0,uploadsErrored: 0,averageSpeed: 0,queueLength: 0,queueSize: 0,uploadSize: 0,queueBytesUploaded: 0,uploadQueue: [],errorMsg: "Some files were not added to the queue:"};
                    k.original = o;
                    k.wrapper = n;
                    k.button = g;
                    k.queue = m;
                    if (l.onInit) {
                        l.onInit.call(p, k)
                    }
                } else {
                    if (l.onFallback) {
                        l.onFallback.call(p)
                    }
                }
            })
        },cancel: function(e, g) {
            var f = arguments;
            this.each(function() {
                var o = d(this), k = o.data("uploadify"), l = k.settings, j = -1;
                if (f[0]) {
                    if (f[0] == "*") {
                        var h = k.queueData.queueLength;
                        d("#" + l.queueID).find(".uploadify-queue-item").each(function() {
                            j++;
                            if (f[1] === true) {
                                k.cancelUpload(d(this).attr("id"), false)
                            } else {
                                k.cancelUpload(d(this).attr("id"))
                            }
                            d(this).find(".data").removeClass("data").html(" - Cancelled");
                            d(this).find(".uploadify-progress-bar").remove();
                            d(this).delay(1000 + 100 * j).fadeOut(500, function() {
                                d(this).remove()
                            })
                        });
                        k.queueData.queueSize = 0;
                        k.queueData.queueLength = 0;
                        if (l.onClearQueue) {
                            l.onClearQueue.call(o, h)
                        }
                    } else {
                        for (var p = 0; p < f.length; p++) {
                            k.cancelUpload(f[p]);
                            d("#" + f[p]).find(".data").removeClass("data").html(" - Cancelled");
                            d("#" + f[p]).find(".uploadify-progress-bar").remove();
                            d("#" + f[p]).delay(1000 + 100 * p).fadeOut(500, function() {
                                d(this).remove()
                            })
                        }
                    }
                } else {
                    var m = d("#" + l.queueID).find(".uploadify-queue-item").get(0);
                    $item = d(m);
                    k.cancelUpload($item.attr("id"));
                    $item.find(".data").removeClass("data").html(" - Cancelled");
                    $item.find(".uploadify-progress-bar").remove();
                    $item.delay(1000).fadeOut(500, function() {
                        d(this).remove()
                    })
                }
            })
        },destroy: function() {
            this.each(function() {
                var g = d(this), e = g.data("uploadify"), f = e.settings;
                e.destroy();
                if (f.defaultQueue) {
                    d("#" + f.queueID).remove()
                }
                d("#" + f.id).replaceWith(e.original);
                if (f.onDestroy) {
                    f.onDestroy.call(this)
                }
                delete e
            })
        },disable: function(e) {
            this.each(function() {
                var h = d(this), f = h.data("uploadify"), g = f.settings;
                if (e) {
                    f.button.addClass("disabled");
                    if (g.onDisable) {
                        g.onDisable.call(this)
                    }
                } else {
                    f.button.removeClass("disabled");
                    if (g.onEnable) {
                        g.onEnable.call(this)
                    }
                }
                f.setButtonDisabled(e)
            })
        },settings: function(f, h, j) {
            var e = arguments;
            var g = h;
            this.each(function() {
                var m = d(this), k = m.data("uploadify"), l = k.settings;
                if (typeof (e[0]) == "object") {
                    for (var o in h) {
                        setData(o, h[o])
                    }
                }
                if (e.length === 1) {
                    g = l[f]
                } else {
                    switch (f) {
                        case "uploader":
                            k.setUploadURL(h);
                            break;
                        case "formData":
                            if (!j) {
                                h = d.extend(l.formData, h)
                            }
                            k.setPostParams(l.formData);
                            break;
                        case "method":
                            if (h == "get") {
                                k.setUseQueryString(true)
                            } else {
                                k.setUseQueryString(false)
                            }
                            break;
                        case "fileObjName":
                            k.setFilePostName(h);
                            break;
                        case "fileTypeExts":
                            k.setFileTypes(h, l.fileTypeDesc);
                            break;
                        case "fileTypeDesc":
                            k.setFileTypes(l.fileTypeExts, h);
                            break;
                        case "fileSizeLimit":
                            k.setFileSizeLimit(h);
                            break;
                        case "uploadLimit":
                            k.setFileUploadLimit(h);
                            break;
                        case "queueSizeLimit":
                            k.setFileQueueLimit(h);
                            break;
                        case "buttonImage":
                            k.button.css("background-image", settingValue);
                            break;
                        case "buttonCursor":
                            if (h == "arrow") {
                                k.setButtonCursor(SWFUpload.CURSOR.ARROW)
                            } else {
                                k.setButtonCursor(SWFUpload.CURSOR.HAND)
                            }
                            break;
                        case "buttonText":
                            d("#" + l.id + "-button").find(".uploadify-button-text").html(h);
                            break;
                        case "width":
                            k.setButtonDimensions(h, l.height);
                            break;
                        case "height":
                            k.setButtonDimensions(l.width, h);
                            break;
                        case "multi":
                            if (h) {
                                k.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES)
                            } else {
                                k.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE)
                            }
                            break
                    }
                    l[f] = h
                }
            });
            if (e.length === 1) {
                return g
            }
        },stop: function() {
            this.each(function() {
                var f = d(this), e = f.data("uploadify");
                e.queueData.averageSpeed = 0;
                e.queueData.uploadSize = 0;
                e.queueData.bytesUploaded = 0;
                e.queueData.uploadQueue = [];
                e.stopUpload()
            })
        },upload: function() {
            var e = arguments;
            this.each(function() {
                var g = d(this), f = g.data("uploadify");
                f.queueData.averageSpeed = 0;
                f.queueData.uploadSize = 0;
                f.queueData.bytesUploaded = 0;
                f.queueData.uploadQueue = [];
                if (e[0]) {
                    if (e[0] == "*") {
                        f.queueData.uploadSize = f.queueData.queueSize;
                        f.queueData.uploadQueue.push("*");
                        f.startUpload()
                    } else {
                        for (var h = 0; h < e.length; h++) {
                            f.queueData.uploadSize += f.queueData.files[e[h]].size;
                            f.queueData.uploadQueue.push(e[h])
                        }
                        f.startUpload(f.queueData.uploadQueue.shift())
                    }
                } else {
                    f.startUpload()
                }
            })
        }};
    var b = {onDialogOpen: function() {
            var e = this.settings;
            this.queueData.errorMsg = "Some files were not added to the queue:";
            this.queueData.filesReplaced = 0;
            this.queueData.filesCancelled = 0;
            if (e.onDialogOpen) {
                e.onDialogOpen.call(this)
            }
        },onDialogClose: function(e, g, h) {
            var f = this.settings;
            this.queueData.filesErrored = e - g;
            this.queueData.filesSelected = e;
            this.queueData.filesQueued = g - this.queueData.filesCancelled;
            this.queueData.queueLength = h;
            if (d.inArray("onDialogClose", f.overrideEvents) < 0) {
                if (this.queueData.filesErrored > 0) {
                    alert(this.queueData.errorMsg)
                }
            }
            if (f.onDialogClose) {
                f.onDialogClose.call(this, this.queueData)
            }
            if (f.auto) {
                d("#" + f.id).uploadify("upload", "*")
            }
        },onSelect: function(h) {
            var j = this.settings;
            var f = {};
            if (j.checkExistingQueue) {
                for (var g in this.queueData.files) {
                    f = this.queueData.files[g];
                    if (f.uploaded != true && f.name == h.name) {
                        var e = confirm('The file named "' + h.name + '" is already in the queue.\nDo you want to replace the existing item in the queue?');
                        if (!e) {
                            this.cancelUpload(h.id);
                            this.queueData.filesCancelled++;
                            return false
                        } else {
                            d("#" + f.id).remove();
                            this.cancelUpload(f.id);
                            this.queueData.filesReplaced++
                        }
                    }
                }
            }
            var k = Math.round(h.size / 1024);
            var p = "KB";
            if (k > 1000) {
                k = Math.round(k / 1000);
                p = "MB"
            }
            var m = k.toString().split(".");
            k = m[0];
            if (m.length > 1) {
                k += "." + m[1].substr(0, 2)
            }
            k += p;
            var l = h.name;
            if (l.length > 25) {
                l = l.substr(0, 25) + "..."
            }
            itemData = {fileID: h.id,instanceID: j.id,fileName: l,fileSize: k};
            if (j.itemTemplate == false) {
                j.itemTemplate = '<div id="${fileID}" class="uploadify-queue-item">					<div class="cancel">						<a href="javascript:$(\'#${instanceID}\').uploadify(\'cancel\', \'${fileID}\')">X</a>					</div>					<span class="fileName">${fileName} (${fileSize})</span><span class="data"></span>					<div class="uploadify-progress">						<div class="uploadify-progress-bar"><!--Progress Bar--></div>					</div>				</div>'
            }
            if (d.inArray("onSelect", j.overrideEvents) < 0) {
                itemHTML = j.itemTemplate;
                for (var o in itemData) {
                    itemHTML = itemHTML.replace(new RegExp("\\$\\{" + o + "\\}", "g"), itemData[o])
                }
                d("#" + j.queueID).append(itemHTML)
            }
            this.queueData.queueSize += h.size;
            this.queueData.files[h.id] = h;
            if (j.onSelect) {
                j.onSelect.apply(this, arguments)
            }
        },onSelectError: function(e, h, g) {
            var f = this.settings;
            if (d.inArray("onSelectError", f.overrideEvents) < 0) {
                switch (h) {
                    case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                        if (f.queueSizeLimit > g) {
                            this.queueData.errorMsg += "\nThe number of files selected exceeds the remaining upload limit (" + g + ")."
                        } else {
                            this.queueData.errorMsg += "\nThe number of files selected exceeds the queue size limit (" + f.queueSizeLimit + ")."
                        }
                        break;
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        this.queueData.errorMsg += '\nThe file "' + e.name + '" exceeds the size limit (' + f.fileSizeLimit + ").";
                        break;
                    case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                        this.queueData.errorMsg += '\nThe file "' + e.name + '" is empty.';
                        break;
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        this.queueData.errorMsg += '\nThe file "' + e.name + '" is not an accepted file type (' + f.fileTypeDesc + ").";
                        break
                }
            }
            if (h != SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
                delete this.queueData.files[e.id]
            }
            if (f.onSelectError) {
                f.onSelectError.apply(this, arguments)
            }
        },onQueueComplete: function() {
            if (this.settings.onQueueComplete) {
                this.settings.onQueueComplete.call(this, this.settings.queueData)
            }
        },onUploadComplete: function(g) {
            var h = this.settings, e = this;
            var f = this.getStats();
            this.queueData.queueLength = f.files_queued;
            if (this.queueData.uploadQueue[0] == "*") {
                if (this.queueData.queueLength > 0) {
                    this.startUpload()
                } else {
                    this.queueData.uploadQueue = [];
                    if (h.onQueueComplete) {
                        h.onQueueComplete.call(this, this.queueData)
                    }
                }
            } else {
                if (this.queueData.uploadQueue.length > 0) {
                    this.startUpload(this.queueData.uploadQueue.shift())
                } else {
                    this.queueData.uploadQueue = [];
                    if (h.onQueueComplete) {
                        h.onQueueComplete.call(this, this.queueData)
                    }
                }
            }
            if (d.inArray("onUploadComplete", h.overrideEvents) < 0) {
                if (h.removeCompleted) {
                    switch (g.filestatus) {
                        case SWFUpload.FILE_STATUS.COMPLETE:
                            setTimeout(function() {
                                if (d("#" + g.id)) {
                                    e.queueData.queueSize -= g.size;
                                    e.queueData.queueLength -= 1;
                                    delete e.queueData.files[g.id];
                                    d("#" + g.id).fadeOut(500, function() {
                                        d(this).remove()
                                    })
                                }
                            }, h.removeTimeout * 1000);
                            break;
                        case SWFUpload.FILE_STATUS.ERROR:
                            if (!h.requeueErrors) {
                                setTimeout(function() {
                                    if (d("#" + g.id)) {
                                        e.queueData.queueSize -= g.size;
                                        e.queueData.queueLength -= 1;
                                        delete e.queueData.files[g.id];
                                        d("#" + g.id).fadeOut(500, function() {
                                            d(this).remove()
                                        })
                                    }
                                }, h.removeTimeout * 1000)
                            }
                            break
                    }
                } else {
                    g.uploaded = true
                }
            }
            if (h.onUploadComplete) {
                h.onUploadComplete.call(this, g)
            }
        },onUploadError: function(f, k, j) {
            var g = this.settings;
            var h = "Error";
            switch (k) {
                case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
                    h = "HTTP Error (" + j + ")";
                    break;
                case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
                    h = "Missing Upload URL";
                    break;
                case SWFUpload.UPLOAD_ERROR.IO_ERROR:
                    h = "IO Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
                    h = "Security Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
                    alert("The upload limit has been reached (" + j + ").");
                    h = "Exceeds Upload Limit";
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
                    h = "Failed";
                    break;
                case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
                    break;
                case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
                    h = "Validation Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
                    h = "Cancelled";
                    this.queueData.queueSize -= f.size;
                    this.queueData.queueLength -= 1;
                    if (f.status == SWFUpload.FILE_STATUS.IN_PROGRESS || d.inArray(f.id, this.queueData.uploadQueue) >= 0) {
                        this.queueData.uploadSize -= f.size
                    }
                    if (g.onCancel) {
                        g.onCancel.call(this, f)
                    }
                    delete this.queueData.files[f.id];
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
                    h = "Stopped";
                    break
            }
            if (d.inArray("onUploadError", g.overrideEvents) < 0) {
                if (k != SWFUpload.UPLOAD_ERROR.FILE_CANCELLED && k != SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED) {
                    d("#" + f.id).addClass("uploadify-error")
                }
                d("#" + f.id).find(".uploadify-progress-bar").css("width", "1px");
                if (k != SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND && f.status != SWFUpload.FILE_STATUS.COMPLETE) {
                    d("#" + f.id).find(".data").html(" - " + h)
                }
            }
            var e = this.getStats();
            this.queueData.uploadsErrored = e.upload_errors;
            if (g.onUploadError) {
                g.onUploadError.call(this, f, k, j, h)
            }
        },onUploadProgress: function(h, o, l) {
            var j = this.settings;
            var f = new Date();
            var p = f.getTime();
            var m = p - this.timer;
            if (m > 500) {
                this.timer = p
            }
            var k = o - this.bytesLoaded;
            this.bytesLoaded = o;
            var e = this.queueData.queueBytesUploaded + o;
            var s = Math.round(o / l * 100);
            var r = "KB/s";
            var n = 0;
            var g = (k / 1024) / (m / 1000);
            g = Math.floor(g * 10) / 10;
            if (this.queueData.averageSpeed > 0) {
                this.queueData.averageSpeed = Math.floor((this.queueData.averageSpeed + g) / 2)
            } else {
                this.queueData.averageSpeed = Math.floor(g)
            }
            if (g > 1000) {
                n = (g * 0.001);
                this.queueData.averageSpeed = Math.floor(n);
                r = "MB/s"
            }
            if (d.inArray("onUploadProgress", j.overrideEvents) < 0) {
                if (j.progressData == "percentage") {
                    d("#" + h.id).find(".data").html(" - " + s + "%")
                } else {
                    if (j.progressData == "speed" && m > 500) {
                        d("#" + h.id).find(".data").html(" - " + this.queueData.averageSpeed + r)
                    }
                }
                d("#" + h.id).find(".uploadify-progress-bar").css("width", s + "%")
            }
            if (j.onUploadProgress) {
                j.onUploadProgress.call(this, h, o, l, e, this.queueData.uploadSize)
            }
        },onUploadStart: function(e) {
            var f = this.settings;
            var g = new Date();
            this.timer = g.getTime();
            this.bytesLoaded = 0;
            if (this.queueData.uploadQueue.length == 0) {
                this.queueData.uploadSize = e.size
            }
            if (f.checkExisting) {
                d.ajax({type: "POST",async: false,url: f.checkExisting,data: {filename: e.name},success: function(j) {
                        if (j == 1) {
                            var h = confirm('A file with the name "' + e.name + '" already exists on the server.\nWould you like to replace the existing file?');
                            if (!h) {
                                this.cancelUpload(e.id);
                                d("#" + e.id).remove();
                                if (this.queueData.uploadQueue.length > 0 && this.queueData.queueLength > 0) {
                                    if (this.queueData.uploadQueue[0] == "*") {
                                        this.startUpload()
                                    } else {
                                        this.startUpload(this.queueData.uploadQueue.shift())
                                    }
                                }
                            }
                        }
                    }})
            }
            if (f.onUploadStart) {
                f.onUploadStart.call(this, e)
            }
        },onUploadSuccess: function(g, j, e) {
            var h = this.settings;
            var f = this.getStats();
            this.queueData.uploadsSuccessful = f.successful_uploads;
            this.queueData.queueBytesUploaded += g.size;
            if (d.inArray("onUploadSuccess", h.overrideEvents) < 0) {
                d("#" + g.id).find(".data").html(" - Complete")
            }
            if (h.onUploadSuccess) {
                h.onUploadSuccess.call(this, g, j, e)
            }
        }};
    d.fn.uploadify = function(e) {
        if (c[e]) {
            return c[e].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof e === "object" || !e) {
                return c.init.apply(this, arguments)
            } else {
                d.error("The method " + e + " does not exist in $.uploadify")
            }
        }
    }
})($);
define("libs/jquery/external/jquery.uploadify", ["jquery"], (function(b) {
    return function() {
        var c, d;
        return c || b.jQuery
    }
}(this)));
define("util/upload/flashUploader", ["jquery", "util/bandUtil", "libCustom/swfUploadBugFix", "libs/jquery/external/jquery.browser", "libs/jquery/external/jquery.uploadify"], function(e, c, g, b) {
    g.doFix();
    var f = 0;
    var d = {setUpload: function(x) {
            var v = x;
            var w = v.height || v.elem.height();
            var h = v.width || v.elem.width();
            var n = v.uploadLimit;
            var r = v.fileTypeExts || "*.*";
            var j = v.paramName || "attachment";
            var m = n > 1 ? true : false;
            var k = "flash_" + v.elem.attr("id");
            var s = "_dummy_uploader_queue";
            var o = e("#" + s);
            if (o.length === 0) {
                e("body").append('<div id="' + s + '" style="display:none"></div>')
            }
            var p = "_dummy_uploader_pool";
            var l = e("#" + p);
            if (l.length === 0) {
                e("body").append('<div id="' + p + '" style="visible:hidden"></div>')
            }
            v.elem.uploadify({swf: resBaseUrl + "/swf/uploadify.swf",fileObjName: j,auto: false,height: w,width: h,removeTimeout: 1,checkExistingQueue: false,multi: m,successTimeout: 24 * 60 * 60,buttonText: "",queueID: s,preventCaching: false,fileTypeExts: r,uploader: v.url,overrideEvents: ["onDialogClose"],onInit: function(N) {
                    N.wrapper.addClass(k);
                    N.wrapper.attr("data-flash_index", N.movieName);
                    N.wrapper.css({position: "absolute",top: "-1000000px",left: "-100000px"})
                },onSWFReady: function() {
                    this.wrapper.css({position: "absolute",top: "0",left: "0"});
                    this.wrapper.find("object").css("left", "0");
                    this.wrapper.css("text-align", "left")
                },onUploadStart: function() {
                    this.cancel = false;
                    c.functionCall(v.callback, "submit", this)
                },onUploadProgress: function(P, Q, O) {
                    var N = {currentFileIndex: this.currentUploadIndex,totalFileCount: this.selectFileLength,currentFileLoaded: Q,currentFileTotal: O,currentFilePercent: Q / O * 100,currentFileName: P.name};
                    c.functionCall(v.callback, "progress", this, N)
                }});
            this.setFlashMethod(v.elem, v)
        },setFlashMethod: function(k, j) {
            var h = j;
            k.uploadify("settings", "onCancel", function() {
                this.cancel = true
            });
            k.uploadify("settings", "onQueueComplete", function() {
                if (this.cancel) {
                    c.functionCall(h.callback, "cancel", this)
                }
            });
            k.uploadify("settings", "onDialogClose", function(l) {
                window.currentUploaderId = h.elem.attr("id");
                this.selectFileLength = l.filesSelected;
                this.currentUploadIndex = 0;
                var m = [];
                if (h.callback.alreadyUploadedFiles) {
                    m = h.callback.alreadyUploadedFiles()
                }
                var p = [];
                for (var r in l.files) {
                    p.push(l.files[r])
                }
                if (l.errorMsg.indexOf("Some files were not added to the queue:") != -1 && l.errorMsg.indexOf("is empty.") != -1) {
                    p.push({name: "emptyFile.txt",size: 0})
                }
                for (var o = 0; o < h.validators.length; o++) {
                    var n = h.validators[o];
                    if (n && typeof n.validate == "function" && n.validate(this, p, h.type.toUpperCase(), m, h) == false) {
                        d.cancelUpload();
                        return false
                    }
                }
                if (l.filesQueued > 0) {
                    d.upload();
                    c.functionCall(h.callback, "start", this)
                }
            });
            k.uploadify("settings", "onUploadSuccess", function(m, o, l) {
                if (l) {
                    var n = JSON.parse(o);
                    h.callback.done(n, m, h.type, this)
                }
            });
            k.uploadify("settings", "onUploadComplete", function(l) {
                this.currentUploadIndex += 1;
                if (this.currentUploadIndex == this.selectFileLength) {
                    c.functionCall(h.callback, "complete", this);
                    this.selectFileLength = undefined
                }
            });
            k.uploadify("settings", "onDestroy", function() {
                if (this.remove) {
                    this.remove()
                }
            })
        },upload: function() {
            e("#" + window.currentUploaderId).uploadify("upload", "*")
        },cancelUpload: function() {
            e("#" + window.currentUploaderId).uploadify("cancel", "*")
        },removeUploader: function(j) {
            var h = j.attr("id");
            var k = e("#" + h);
            k.css({position: "absolute",top: "-10000000px",left: "-100000000px",height: "0px"});
            if (!k.data("uploadify")) {
                k.remove();
                return
            }
            k.attr("id", h + "_" + f++);
            e("#_dummy_uploader_pool").append(k);
            d.____destroyUplodify(j)
        },____destroyUplodify: function(h) {
            if (!b.msie || Number(b.version) >= 9) {
            }
        },uploadStatus: function(k, h) {
            if (typeof (k) == "object") {
                k = k.attr("id")
            }
            var j = e("#" + k);
            if (j.data("uploadify")) {
                if (h === true) {
                    j.css("z-index", "");
                    j.find("object").css("height", "")
                } else {
                    j.css("z-index", 0);
                    j.find("object").css("height", 0)
                }
            }
        }};
    return d
});
(function(b) {
    b.support.xhrFileUpload = !!(window.XMLHttpRequestUpload && window.FileReader);
    b.support.xhrFormDataFileUpload = !!window.FormData;
    b.widget("blueimp.fileupload", {options: {dropZone: b(document),pasteZone: b(document),fileInput: undefined,replaceFileInput: true,paramName: undefined,singleFileUploads: true,limitMultiFileUploads: undefined,sequentialUploads: false,limitConcurrentUploads: undefined,forceIframeTransport: false,redirect: undefined,redirectParamName: undefined,postMessage: undefined,multipart: true,maxChunkSize: undefined,uploadedBytes: undefined,recalculateProgress: true,progressInterval: 100,bitrateInterval: 500,formData: function(c) {
                return c.serializeArray()
            },add: function(d, c) {
                c.submit()
            },processData: false,contentType: false,cache: false},_refreshOptionsList: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],_BitrateTimer: function() {
            this.timestamp = +(new Date());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function(e, d, c) {
                var f = e - this.timestamp;
                if (!this.bitrate || !c || f > c) {
                    this.bitrate = (d - this.loaded) * (1000 / f) * 8;
                    this.loaded = d;
                    this.timestamp = e
                }
                return this.bitrate
            }
        },_isXHRUpload: function(c) {
            return !c.forceIframeTransport && ((!c.multipart && b.support.xhrFileUpload) || b.support.xhrFormDataFileUpload)
        },_getFormData: function(c) {
            var d;
            if (typeof c.formData === "function") {
                return c.formData(c.form)
            }
            if (b.isArray(c.formData)) {
                return c.formData
            }
            if (c.formData) {
                d = [];
                b.each(c.formData, function(e, f) {
                    d.push({name: e,value: f})
                });
                return d
            }
            return []
        },_getTotal: function(d) {
            var c = 0;
            b.each(d, function(e, f) {
                c += f.size || 1
            });
            return c
        },_onProgress: function(h, g) {
            if (h.lengthComputable) {
                var d = +(new Date()), f, c;
                if (g._time && g.progressInterval && (d - g._time < g.progressInterval) && h.loaded !== h.total) {
                    return
                }
                g._time = d;
                f = g.total || this._getTotal(g.files);
                c = parseInt(h.loaded / h.total * (g.chunkSize || f), 10) + (g.uploadedBytes || 0);
                this._loaded += c - (g.loaded || g.uploadedBytes || 0);
                g.lengthComputable = true;
                g.loaded = c;
                g.total = f;
                g.bitrate = g._bitrateTimer.getBitrate(d, c, g.bitrateInterval);
                this._trigger("progress", h, g);
                this._trigger("progressall", h, {lengthComputable: true,loaded: this._loaded,total: this._total,bitrate: this._bitrateTimer.getBitrate(d, this._loaded, g.bitrateInterval)})
            }
        },_initProgressListener: function(c) {
            var d = this, e = c.xhr ? c.xhr() : b.ajaxSettings.xhr();
            if (e.upload) {
                b(e.upload).bind("progress", function(f) {
                    var g = f.originalEvent;
                    f.lengthComputable = g.lengthComputable;
                    f.loaded = g.loaded;
                    f.total = g.total;
                    d._onProgress(f, c)
                });
                c.xhr = function() {
                    return e
                }
            }
        },_initXHRData: function(d) {
            var g, e = d.files[0], c = d.multipart || !b.support.xhrFileUpload, f = d.paramName[0];
            d.headers = d.headers || {};
            if (d.contentRange) {
                d.headers["Content-Range"] = d.contentRange
            }
            if (!c) {
                d.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(e.name) + '"';
                d.contentType = e.type;
                d.data = d.blob || e
            } else {
                if (b.support.xhrFormDataFileUpload) {
                    if (d.postMessage) {
                        g = this._getFormData(d);
                        if (d.blob) {
                            g.push({name: f,value: d.blob})
                        } else {
                            b.each(d.files, function(h, j) {
                                g.push({name: d.paramName[h] || f,value: j})
                            })
                        }
                    } else {
                        if (d.formData instanceof FormData) {
                            g = d.formData
                        } else {
                            g = new FormData();
                            b.each(this._getFormData(d), function(h, j) {
                                g.append(j.name, j.value)
                            })
                        }
                        if (d.blob) {
                            d.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(e.name) + '"';
                            g.append(f, d.blob, e.name)
                        } else {
                            b.each(d.files, function(h, j) {
                                if ((window.Blob && j instanceof Blob) || (window.File && j instanceof File)) {
                                    g.append(d.paramName[h] || f, j, j.name)
                                }
                            })
                        }
                    }
                    d.data = g
                }
            }
            d.blob = null
        },_initIframeSettings: function(c) {
            c.dataType = "iframe " + (c.dataType || "");
            c.formData = this._getFormData(c);
            if (c.redirect && b("<a></a>").prop("href", c.url).prop("host") !== location.host) {
                c.formData.push({name: c.redirectParamName || "redirect",value: c.redirect})
            }
        },_initDataSettings: function(c) {
            if (this._isXHRUpload(c)) {
                if (!this._chunkedUpload(c, true)) {
                    if (!c.data) {
                        this._initXHRData(c)
                    }
                    this._initProgressListener(c)
                }
                if (c.postMessage) {
                    c.dataType = "postmessage " + (c.dataType || "")
                }
            } else {
                this._initIframeSettings(c, "iframe")
            }
        },_getParamName: function(c) {
            var d = b(c.fileInput), e = c.paramName;
            if (!e) {
                e = [];
                d.each(function() {
                    var f = b(this), g = f.prop("name") || "files[]", h = (f.prop("files") || [1]).length;
                    while (h) {
                        e.push(g);
                        h -= 1
                    }
                });
                if (!e.length) {
                    e = [d.prop("name") || "files[]"]
                }
            } else {
                if (!b.isArray(e)) {
                    e = [e]
                }
            }
            return e
        },_initFormSettings: function(c) {
            if (!c.form || !c.form.length) {
                c.form = b(c.fileInput.prop("form"));
                if (!c.form.length) {
                    c.form = b(this.options.fileInput.prop("form"))
                }
            }
            c.paramName = this._getParamName(c);
            if (!c.url) {
                c.url = c.form.prop("action") || location.href
            }
            c.type = (c.type || c.form.prop("method") || "").toUpperCase();
            if (c.type !== "POST" && c.type !== "PUT" && c.type !== "PATCH") {
                c.type = "POST"
            }
            if (!c.formAcceptCharset) {
                c.formAcceptCharset = c.form.attr("accept-charset")
            }
        },_getAJAXSettings: function(d) {
            var c = b.extend({}, this.options, d);
            this._initFormSettings(c);
            this._initDataSettings(c);
            return c
        },_enhancePromise: function(c) {
            c.success = c.done;
            c.error = c.fail;
            c.complete = c.always;
            return c
        },_getXHRPromise: function(f, e, d) {
            var c = b.Deferred(), g = c.promise();
            e = e || this.options.context || g;
            if (f === true) {
                c.resolveWith(e, d)
            } else {
                if (f === false) {
                    c.rejectWith(e, d)
                }
            }
            g.abort = c.promise;
            return this._enhancePromise(g)
        },_getUploadedBytes: function(e) {
            var c = e.getResponseHeader("Range"), f = c && c.split("-"), d = f && f.length > 1 && parseInt(f[1], 10);
            return d && d + 1
        },_chunkedUpload: function(o, h) {
            var g = this, e = o.files[0], f = e.size, c = o.uploadedBytes = o.uploadedBytes || 0, d = o.maxChunkSize || f, k = e.slice || e.webkitSlice || e.mozSlice, l = b.Deferred(), n = l.promise(), j, m;
            if (!(this._isXHRUpload(o) && k && (c || d < f)) || o.data) {
                return false
            }
            if (h) {
                return true
            }
            if (c >= f) {
                e.error = "Uploaded bytes exceed file size";
                return this._getXHRPromise(false, o.context, [null, "error", e.error])
            }
            m = function(p) {
                var r = b.extend({}, o);
                r.blob = k.call(e, c, c + d, e.type);
                r.chunkSize = r.blob.size;
                r.contentRange = "bytes " + c + "-" + (c + r.chunkSize - 1) + "/" + f;
                g._initXHRData(r);
                g._initProgressListener(r);
                j = (b.ajax(r) || g._getXHRPromise(false, r.context)).done(function(s, w, v) {
                    c = g._getUploadedBytes(v) || (c + r.chunkSize);
                    if (!r.loaded) {
                        g._onProgress(b.Event("progress", {lengthComputable: true,loaded: c - r.uploadedBytes,total: c - r.uploadedBytes}), r)
                    }
                    o.uploadedBytes = r.uploadedBytes = c;
                    if (c < f) {
                        m()
                    } else {
                        l.resolveWith(r.context, [s, w, v])
                    }
                }).fail(function(s, w, v) {
                    l.rejectWith(r.context, [s, w, v])
                })
            };
            this._enhancePromise(n);
            n.abort = function() {
                return j.abort()
            };
            m();
            return n
        },_beforeSend: function(d, c) {
            if (this._active === 0) {
                this._trigger("start");
                this._bitrateTimer = new this._BitrateTimer()
            }
            this._active += 1;
            this._loaded += c.uploadedBytes || 0;
            this._total += this._getTotal(c.files)
        },_onDone: function(c, f, e, d) {
            if (!this._isXHRUpload(d)) {
                this._onProgress(b.Event("progress", {lengthComputable: true,loaded: 1,total: 1}), d)
            }
            d.result = c;
            d.textStatus = f;
            d.jqXHR = e;
            this._trigger("done", null, d)
        },_onFail: function(d, f, e, c) {
            c.jqXHR = d;
            c.textStatus = f;
            c.errorThrown = e;
            this._trigger("fail", null, c);
            if (c.recalculateProgress) {
                this._loaded -= c.loaded || c.uploadedBytes || 0;
                this._total -= c.total || this._getTotal(c.files)
            }
        },_onAlways: function(e, f, d, c) {
            this._active -= 1;
            c.textStatus = f;
            if (d && d.always) {
                c.jqXHR = d;
                c.result = e
            } else {
                c.jqXHR = e;
                c.errorThrown = d
            }
            this._trigger("always", null, c);
            if (this._active === 0) {
                this._trigger("stop");
                this._loaded = this._total = 0;
                this._bitrateTimer = null
            }
        },_onSend: function(j, g) {
            var h = this, l, c, k, d, m = h._getAJAXSettings(g), f = function() {
                h._sending += 1;
                m._bitrateTimer = new h._BitrateTimer();
                l = l || (((c || h._trigger("send", j, m) === false) && h._getXHRPromise(false, m.context, c)) || h._chunkedUpload(m) || b.ajax(m)).done(function(e, o, n) {
                    h._onDone(e, o, n, m)
                }).fail(function(e, o, n) {
                    h._onFail(e, o, n, m)
                }).always(function(p, r, o) {
                    h._sending -= 1;
                    h._onAlways(p, r, o, m);
                    if (m.limitConcurrentUploads && m.limitConcurrentUploads > h._sending) {
                        var n = h._slots.shift(), e;
                        while (n) {
                            e = n.state ? n.state() === "pending" : !n.isRejected();
                            if (e) {
                                n.resolve();
                                break
                            }
                            n = h._slots.shift()
                        }
                    }
                });
                return l
            };
            this._beforeSend(j, m);
            if (this.options.sequentialUploads || (this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    k = b.Deferred();
                    this._slots.push(k);
                    d = k.pipe(f)
                } else {
                    d = (this._sequence = this._sequence.pipe(f, f))
                }
                d.abort = function() {
                    c = [undefined, "abort", "abort"];
                    if (!l) {
                        if (k) {
                            k.rejectWith(m.context, c)
                        }
                        return f()
                    }
                    return l.abort()
                };
                return this._enhancePromise(d)
            }
            return f()
        },_onAdd: function(l, h) {
            var k = this, o = true, n = b.extend({}, this.options, h), f = n.limitMultiFileUploads, j = this._getParamName(n), d, c, m, g;
            if (!(n.singleFileUploads || f) || !this._isXHRUpload(n)) {
                m = [h.files];
                d = [j]
            } else {
                if (!n.singleFileUploads && f) {
                    m = [];
                    d = [];
                    for (g = 0; g < h.files.length; g += f) {
                        m.push(h.files.slice(g, g + f));
                        c = j.slice(g, g + f);
                        if (!c.length) {
                            c = j
                        }
                        d.push(c)
                    }
                } else {
                    d = j
                }
            }
            h.originalFiles = h.files;
            b.each(m || h.files, function(e, p) {
                var r = b.extend({}, h);
                r.files = m ? p : [p];
                r.paramName = d[e];
                r.submit = function() {
                    r.jqXHR = this.jqXHR = (k._trigger("submit", l, this) !== false) && k._onSend(l, this);
                    return this.jqXHR
                };
                o = k._trigger("add", l, r);
                return o
            });
            return o
        },_replaceFileInput: function(c) {
            var d = c.clone(true);
            b("<form></form>").append(d)[0].reset();
            c.after(d).detach();
            b.cleanData(c.unbind("remove"));
            this.options.fileInput = this.options.fileInput.map(function(e, f) {
                if (f === c[0]) {
                    return d[0]
                }
                return f
            });
            if (c[0] === this.element[0]) {
                this.element = d
            }
        },_handleFileTreeEntry: function(g, h) {
            var f = this, c = b.Deferred(), d = function(j) {
                if (j && !j.entry) {
                    j.entry = g
                }
                c.resolve([j])
            }, e;
            h = h || "";
            if (g.isFile) {
                if (g._file) {
                    g._file.relativePath = h;
                    c.resolve(g._file)
                } else {
                    g.file(function(j) {
                        j.relativePath = h;
                        c.resolve(j)
                    }, d)
                }
            } else {
                if (g.isDirectory) {
                    e = g.createReader();
                    e.readEntries(function(j) {
                        f._handleFileTreeEntries(j, h + g.name + "/").done(function(k) {
                            c.resolve(k)
                        }).fail(d)
                    }, d)
                } else {
                    c.resolve([])
                }
            }
            return c.promise()
        },_handleFileTreeEntries: function(c, e) {
            var d = this;
            return b.when.apply(b, b.map(c, function(f) {
                return d._handleFileTreeEntry(f, e)
            })).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },_getDroppedFiles: function(d) {
            d = d || {};
            var c = d.items;
            if (c && c.length && (c[0].webkitGetAsEntry || c[0].getAsEntry)) {
                return this._handleFileTreeEntries(b.map(c, function(f) {
                    var e;
                    if (f.webkitGetAsEntry) {
                        e = f.webkitGetAsEntry();
                        if (e) {
                            e._file = f.getAsFile()
                        }
                        return e
                    }
                    return f.getAsEntry()
                }))
            }
            return b.Deferred().resolve(b.makeArray(d.files)).promise()
        },_getSingleFileInputFiles: function(e) {
            e = b(e);
            var c = e.prop("webkitEntries") || e.prop("entries"), d, f;
            if (c && c.length) {
                return this._handleFileTreeEntries(c)
            }
            d = b.makeArray(e.prop("files"));
            if (!d.length) {
                f = e.prop("value");
                if (!f) {
                    return b.Deferred().resolve([]).promise()
                }
                d = [{name: f.replace(/^.*\\/, "")}]
            } else {
                if (d[0].name === undefined && d[0].fileName) {
                    b.each(d, function(g, h) {
                        h.name = h.fileName;
                        h.size = h.fileSize
                    })
                }
            }
            return b.Deferred().resolve(d).promise()
        },_getFileInputFiles: function(c) {
            if (!(c instanceof b) || c.length === 1) {
                return this._getSingleFileInputFiles(c)
            }
            return b.when.apply(b, b.map(c, this._getSingleFileInputFiles)).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },_onChange: function(f) {
            var c = this, d = {fileInput: b(f.target),form: b(f.target.form)};
            this._getFileInputFiles(d.fileInput).always(function(e) {
                d.files = e;
                if (c.options.replaceFileInput) {
                    c._replaceFileInput(d.fileInput)
                }
                if (c._trigger("change", f, d) !== false) {
                    c._onAdd(f, d)
                }
            })
        },_onPaste: function(g) {
            var f = g.originalEvent.clipboardData, c = (f && f.items) || [], d = {files: []};
            b.each(c, function(e, j) {
                var h = j.getAsFile && j.getAsFile();
                if (h) {
                    d.files.push(h)
                }
            });
            if (this._trigger("paste", g, d) === false || this._onAdd(g, d) === false) {
                return false
            }
        },_onDrop: function(g) {
            var c = this, f = g.dataTransfer = g.originalEvent.dataTransfer, d = {};
            if (f && f.files && f.files.length) {
                g.preventDefault()
            }
            this._getDroppedFiles(f).always(function(e) {
                d.files = e;
                if (c._trigger("drop", g, d) !== false) {
                    c._onAdd(g, d)
                }
            })
        },_onDragOver: function(d) {
            var c = d.dataTransfer = d.originalEvent.dataTransfer;
            if (this._trigger("dragover", d) === false) {
                return false
            }
            if (c && b.inArray("Files", c.types) !== -1) {
                c.dropEffect = "copy";
                d.preventDefault()
            }
        },_initEventHandlers: function() {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {dragover: this._onDragOver,drop: this._onDrop});
                this._on(this.options.pasteZone, {paste: this._onPaste})
            }
            this._on(this.options.fileInput, {change: this._onChange})
        },_destroyEventHandlers: function() {
            this._off(this.options.dropZone, "dragover drop");
            this._off(this.options.pasteZone, "paste");
            this._off(this.options.fileInput, "change")
        },_setOption: function(c, e) {
            var d = b.inArray(c, this._refreshOptionsList) !== -1;
            if (d) {
                this._destroyEventHandlers()
            }
            this._super(c, e);
            if (d) {
                this._initSpecialOptions();
                this._initEventHandlers()
            }
        },_initSpecialOptions: function() {
            var c = this.options;
            if (c.fileInput === undefined) {
                c.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]')
            } else {
                if (!(c.fileInput instanceof b)) {
                    c.fileInput = b(c.fileInput)
                }
            }
            if (!(c.dropZone instanceof b)) {
                c.dropZone = b(c.dropZone)
            }
            if (!(c.pasteZone instanceof b)) {
                c.pasteZone = b(c.pasteZone)
            }
        },_create: function() {
            var c = this.options;
            b.extend(c, b(this.element[0].cloneNode(false)).data());
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = this._loaded = this._total = 0;
            this._initEventHandlers()
        },_destroy: function() {
            this._destroyEventHandlers()
        },add: function(d) {
            var c = this;
            if (!d || this.options.disabled) {
                return
            }
            if (d.fileInput && !d.files) {
                this._getFileInputFiles(d.fileInput).always(function(e) {
                    d.files = e;
                    c._onAdd(null, d)
                })
            } else {
                d.files = b.makeArray(d.files);
                this._onAdd(null, d)
            }
        },send: function(g) {
            if (g && !this.options.disabled) {
                if (g.fileInput && !g.files) {
                    var e = this, c = b.Deferred(), h = c.promise(), d, f;
                    h.abort = function() {
                        f = true;
                        if (d) {
                            return d.abort()
                        }
                        c.reject(null, "abort", "abort");
                        return h
                    };
                    this._getFileInputFiles(g.fileInput).always(function(j) {
                        if (f) {
                            return
                        }
                        g.files = j;
                        d = e._onSend(null, g).then(function(k, m, l) {
                            c.resolve(k, m, l)
                        }, function(k, m, l) {
                            c.reject(k, m, l)
                        })
                    });
                    return this._enhancePromise(h)
                }
                g.files = b.makeArray(g.files);
                if (g.files.length) {
                    return this._onSend(null, g)
                }
            }
            return this._getXHRPromise(false, g && g.context)
        }})
}($));
define("widgets/fileupload", ["jquery", "jqueryUi"], function() {
});
define("util/upload/ajaxUploader", ["jquery", "util/bandUtil", "libs/jquery/external/jquery.browser", "widgets/fileupload"], function(e, d, b) {
    var c = {setUpload: function(g) {
            var f = g;
            f.elem.fileupload({url: f.url,dataType: "json",maxChunkSize: f.maxChunkSize,paramName: f.paramName || "attachment",sequentialUploads: true,xhrFields: {withCredentials: true},start: function(j, h) {
                    d.functionCall(f.callback, "start", this);
                    e.jqUploadXHRList = []
                },add: function(m, l) {
                    this.selectFileLength = l.originalFiles.length;
                    this.currentUploadIndex = 0;
                    var h = [];
                    if (f.callback.alreadyUploadedFiles) {
                        h = f.callback.alreadyUploadedFiles()
                    }
                    for (var k = 0; k < f.validators.length; k++) {
                        var j = f.validators[k];
                        if (j && typeof j.validate == "function" && j.validate(this, l.originalFiles, f.type.toUpperCase(), h, f) == false) {
                            return false
                        }
                    }
                    var n = l.submit().error(_.bind(function(o, r, p) {
                        if (p !== "abort") {
                            d.functionCall(f.callback, "fail", this)
                        }
                    }, this));
                    e.jqUploadXHRList.push(n)
                },submit: function() {
                    d.functionCall(f.callback, "submit", this)
                },done: function(j, h) {
                    this.currentUploadIndex += 1;
                    d.functionCall(f.callback, "done", h.result, h.files[0], f.type, this);
                    if (this.currentUploadIndex == this.selectFileLength) {
                        d.functionCall(f.callback, "complete", this)
                    }
                },progress: function(k, j) {
                    var h = {currentFileIndex: this.currentUploadIndex,totalFileCount: this.selectFileLength,currentFileLoaded: j.loaded,currentFileTotal: j.total,currentFilePercent: j.loaded / j.total * 100,currentFileName: j.files[0].name};
                    d.functionCall(f.callback, "progress", this, h)
                }})
        },cancelUpload: function(f) {
            e.each(e.jqUploadXHRList, function(g, h) {
                h.abort()
            });
            d.functionCall(f, "cancel", this)
        },removeUploader: function(f) {
        },uploadStatus: function(h, f) {
            if (typeof (h) == "object") {
                h = h.attr("id")
            }
            var g = e("#" + h);
            if (f) {
                g.fileupload("enable");
                g.show()
            } else {
                g.fileupload("disable");
                g.hide()
            }
        }};
    return c
});
var FlashDetect = new function() {
    var b = this;
    b.installed = false;
    b.raw = "";
    b.major = -1;
    b.minor = -1;
    b.revision = -1;
    b.revisionStr = "";
    var c = [{name: "ShockwaveFlash.ShockwaveFlash.7",version: function(j) {
                return e(j)
            }}, {name: "ShockwaveFlash.ShockwaveFlash.6",version: function(l) {
                var j = "6,0,21";
                try {
                    l.AllowScriptAccess = "always";
                    j = e(l)
                } catch (k) {
                }
                return j
            }}, {name: "ShockwaveFlash.ShockwaveFlash",version: function(j) {
                return e(j)
            }}];
    var e = function(l) {
        var j = -1;
        try {
            j = l.GetVariable("$version")
        } catch (k) {
        }
        return j
    };
    var h = function(j) {
        var l = -1;
        try {
            l = new ActiveXObject(j)
        } catch (k) {
            l = {activeXError: true}
        }
        return l
    };
    var d = function(k) {
        var j = k.split(",");
        return {raw: k,major: parseInt(j[0].split(" ")[1], 10),minor: parseInt(j[1], 10),revision: parseInt(j[2], 10),revisionStr: j[2]}
    };
    var g = function(m) {
        var k = m.split(/ +/);
        var l = k[2].split(/\./);
        var j = k[3];
        return {raw: m,major: parseInt(l[0], 10),minor: parseInt(l[1], 10),revisionStr: j,revision: f(j)}
    };
    var f = function(j) {
        return parseInt(j.replace(/[a-zA-Z]/g, ""), 10) || b.revision
    };
    b.majorAtLeast = function(j) {
        return b.major >= j
    };
    b.minorAtLeast = function(j) {
        return b.minor >= j
    };
    b.revisionAtLeast = function(j) {
        return b.revision >= j
    };
    b.versionAtLeast = function(k) {
        var l = [b.major, b.minor, b.revision];
        var j = Math.min(l.length, arguments.length);
        for (i = 0; i < j; i++) {
            if (l[i] >= arguments[i]) {
                if (i + 1 < j && l[i] == arguments[i]) {
                    continue
                } else {
                    return true
                }
            } else {
                return false
            }
        }
    };
    b.FlashDetect = function() {
        if (navigator.plugins && navigator.plugins.length > 0) {
            var m = "application/x-shockwave-flash";
            var l = navigator.mimeTypes;
            if (l && l[m] && l[m].enabledPlugin && l[m].enabledPlugin.description) {
                var j = l[m].enabledPlugin.description;
                var n = g(j);
                b.raw = n.raw;
                b.major = n.major;
                b.minor = n.minor;
                b.revisionStr = n.revisionStr;
                b.revision = n.revision;
                b.installed = true
            }
        } else {
            if (navigator.appVersion.indexOf("Mac") == -1 && window.execScript) {
                var j = -1;
                for (var k = 0; k < c.length && j == -1; k++) {
                    var o = h(c[k].name);
                    if (!o.activeXError) {
                        b.installed = true;
                        j = c[k].version(o);
                        if (j != -1) {
                            var n = d(j);
                            b.raw = n.raw;
                            b.major = n.major;
                            b.minor = n.minor;
                            b.revision = n.revision;
                            b.revisionStr = n.revisionStr
                        }
                    }
                }
            }
        }
    }()
};
FlashDetect.JS_RELEASE = "1.0.4";
define("libs/flash_detect", (function(b) {
    return function() {
        var c, d;
        return c || b.FlashDetect
    }
}(this)));
define("util/upload/uploadUtil", ["jquery", "bandConstants", "util/upload/uploadConstants", "localize/reslang", "module/progressBar", "util/bandUtil", "util/security", "util/upload/bandUploadValidators", "util/upload/flashUploader", "util/upload/ajaxUploader", "libs/jquery/external/jquery.browser", "libs/flash_detect"], function(d, g, b, l, m, h, f, j, k, o, e, c) {
    var n = {_determineUploader: function() {
            if (this.uploader) {
                return
            }
            if (this._getUploaderType() == "flash") {
                this.uploader = k
            } else {
                this.uploader = o
            }
        },_getUploaderType: function() {
            if (e.msie && e.versionNumber < 11 && c.installed && c.versionAtLeast(9, 0, 24)) {
                return "flash"
            } else {
                return "ajax"
            }
        },setFileUpload: function(r) {
            this._determineUploader();
            var s = r.type.toUpperCase();
            var p = d.extend({uploadLimit: g.UPLOAD.MAX_COUNT[s],fileSizeLimit: g.UPLOAD.MAX_SIZE[s] + "B",fileTypeExts: "*.*",allowFileTypes: g.FORMAT[s] || [],gifMaxCount: -1,progressbar: "progressbar" in r || true}, r, {validators: _.union(r.validators, j)});
            if (p.allowFileTypes.length > 0) {
                p.fileTypeExts = "*." + p.allowFileTypes.join(";*.")
            }
            p.callback = d.extend({}, r.callback, {start: _.bind(function(v) {
                    if (p.progressbar) {
                        m.show(g.UPLOAD.PROGRESS_TITLE[s], {cancel: _.bind(function() {
                                this.cancelUpload(p.callback)
                            }, this)})
                    }
                    h.functionCall(r.callback, "start")
                }, this),submit: function(v) {
                    if ("setUploadURL" in v) {
                        v.setUploadURL(f.appendHmac(p.url))
                    }
                },cancel: function(v) {
                    alert(l.STR("pcweb.noui.js.alert.file_upload_cancel"));
                    if (p.progressbar) {
                        m.hide()
                    }
                    h.functionCall(r.callback, "cancel")
                },progress: function(w, v) {
                    if (p.progressbar) {
                        m.progress(v)
                    }
                    h.functionCall(r.callback, "progress")
                },complete: function(v) {
                    if (p.progressbar) {
                        m.hide()
                    }
                    h.functionCall(r.callback, "complete")
                },fail: _.bind(function(v) {
                    alert(l.STR("pcweb.noui.js.alert.file_upload_fail"));
                    h.functionCall(r.callback, "fail");
                    this.cancelUpload(p.callback)
                }, this)});
            this.uploader.setUpload(p)
        },cancelUpload: function(p) {
            this._determineUploader();
            this.uploader.cancelUpload(p)
        },removeUploader: function(p) {
            this._determineUploader();
            this.uploader.removeUploader(p)
        },uploadStatus: function(r, p) {
            this._determineUploader();
            this.uploader.uploadStatus(r, p)
        }};
    return n
});
var ImageCropper = function(b) {
    this.initialize(b)
};
ImageCropper.prototype = {_htElementSelector: {no_image: "._no_image",crop_area: "._crop_area",background_image: "._background_image",background_mask: "._background_mask",crop_box: "._crop_box",crop_box_image: "._crop_box ._crop_box_image",vertical_bar: "._vertical_bar",vertical_bar_thumb: "._vertical_bar ._thumb",horizontal_bar: "._horizontal_bar",horizontal_bar_thumb: "._horizontal_bar ._thumb",resize_handles: "._crop_box ._resize_handle",size_indicator: "._crop_box ._size_indicator",slider_container: "._slider_container",slider_track: "._slider ._track",slider: "._slider_container ._slider"},_htOption: {},_htInstance: {},_htImageData: {},_htCropBoxData: {},_htDragData: {},_htCropBoxLimit: {},_welPreloadImage: null,_bMouseOver: false,_bMouseDrag: false,_bNotUseCropBox: false,initialize: function(c) {
        this._htOption = {nWidth: 450,nHeight: 450,nCropWidth: 100,nCropHeight: 100,bImageOnly: true,bCropBoxResizing: true,bKeepAspectRatio: true,bSizeIndicator: false,bMaxCropSize: false,sImageFitType: "inner"};
        for (var b in c) {
            this._htOption[b] = c[b]
        }
        this._htInstance = {};
        this._htImageData = {};
        this._htDragData = {};
        this._htEventHandler = {click: $.proxy(this._onClick, this),mouseover: $.proxy(this._onMouseOver, this),mouseout: $.proxy(this._onMouseOut, this),mousedown: $.proxy(this._onMouseDown, this),mousemove: $.proxy(this._onMouseMove, this),mouseup: $.proxy(this._onMouseUp, this),selectstart: function(d) {
                d.preventDefault()
            },imageload: $.proxy(this._onLoadImage, this),imageerror: $.proxy(this._onLoadError)};
        this._htCropBoxLimit = {};
        this._welPreloadImage = null;
        this._htCropBoxData = {nWidth: this._htOption.nCropWidth || this._htOption.nMaximumCropWidth,nHeight: this._htOption.nCropHeight || this._htOption.nMaximumCropHeight,nMinimumWidth: this._htOption.nMinimumCropWidth || this._htOption.nCropWidth,nMinimumHeight: this._htOption.nMinimumCropHeight || this._htOption.nCropHeight,nMaximumWidth: this._htOption.nMaximumCropWidth || this._htOption.nCropWidth,nMaximumHeight: this._htOption.nMaximumCropHeight || this._htOption.nCropHeight};
        if (!this._htOption.bCropBoxResizing) {
            this._getElement("resize_handles").hide()
        }
        if (this._htOption.sImageFitType == "zoom") {
            this._initializeZoomSlider()
        }
        this._attachEvent();
        this._getElement("root").width(this._htOption.nWidth).height(this._htOption.nHeight).show()
    },_getElement: function(b, c) {
        if (b && this._htElementSelector[b]) {
            return this._getElement("root").find(this._htElementSelector[b])
        } else {
            if (b == "root") {
                return $(this._htOption.elRoot)
            } else {
                return null
            }
        }
    },_initializeZoomSlider: function() {
        this._getElement("slider").slider({orientation: "vertical",range: false,animate: "fast",min: 0,max: 100,value: 0,change: $.proxy(function(b, c) {
                this._zoomImage(c.value / 100)
            }, this),slide: $.proxy(function(b, c) {
                this._zoomImage(c.value / 100)
            }, this),start: $.proxy(function() {
                this._bMouseDrag = true
            }, this),stop: $.proxy(function() {
                this._bMouseDrag = false
            }, this)})
    },_zoomIn: function() {
        var b = this._getElement("slider").slider("value") + ((100 - this._getElement("slider").slider("option", "min")) / 10);
        this._getElement("slider").slider("value", b)
    },_zoomOut: function() {
        var b = this._getElement("slider").slider("value") - ((100 - this._getElement("slider").slider("option", "min")) / 10);
        this._getElement("slider").slider("value", b)
    },_attachEvent: function() {
        this._getElement("root").bind("click", this._htEventHandler.click).bind("mousedown", this._htEventHandler.mousedown).bind("mouseover", this._htEventHandler.mouseover).bind("mouseout", this._htEventHandler.mouseout)
    },_onClick: function(c) {
        var b = $(c.target);
        if (b.hasClass("_zoom_in")) {
            this._zoomIn()
        } else {
            if (b.hasClass("_zoom_out")) {
                this._zoomOut()
            }
        }
    },_onMouseOver: function(b) {
        this._bMouseOver = true;
        if (!this._bMouseDrag && $(b.target).hasClass("_background_mask")) {
            this._showPositionBar()
        }
    },_onMouseOut: function() {
        this._bMouseOver = false;
        if (!this._bMouseDrag) {
            this._hidePositionBar()
        }
    },_onMouseDown: function(d) {
        var c = $(d.target);
        var b = "";
        if (c.hasClass("_crop_box_mask")) {
            b = "crop_box_move"
        } else {
            if (c.hasClass("_background_mask") && (this._htImageData.bVerticalBar || this._htImageData.bHorizontalBar)) {
                b = "background_move"
            } else {
                if (c.hasClass("_resize_handle")) {
                    b = "crop_box_resize"
                }
            }
        }
        if (b && this._htImageData.bLoaded) {
            var e = this._getElement("root").offset();
            this._htDragData = {sDragType: b,nContainerTop: e.top,nContainerLeft: e.left,nCropBoxRevisionTop: e.top + d.pageY - this._getElement("crop_box").offset().top,nCropBoxRevisionLeft: e.left + d.pageX - this._getElement("crop_box").offset().left,nImageTop: d.pageY - this._htImageData.nTop,nImageLeft: d.pageX - this._htImageData.nLeft,sHandleType: c.attr("handleType")};
            this._startMouseDrag();
            this._bMouseDrag = true
        }
        d.preventDefault()
    },_onMouseMove: function(d) {
        var b, c;
        if (this._htDragData.sDragType == "crop_box_move") {
            b = d.pageY - this._htDragData.nCropBoxRevisionTop;
            c = d.pageX - this._htDragData.nCropBoxRevisionLeft;
            this._setCropBoxOffset(b, c);
            $(this).trigger("cropBoxMove", this.getCropArea())
        } else {
            if (this._htDragData.sDragType == "background_move") {
                b = d.pageY - this._htDragData.nImageTop;
                c = d.pageX - this._htDragData.nImageLeft;
                this._moveBackground(b, c);
                $(this).trigger("backgroundMove", this.getCropArea())
            } else {
                if (this._htDragData.sDragType == "crop_box_resize") {
                    b = d.pageY - this._htDragData.nContainerTop;
                    c = d.pageX - this._htDragData.nContainerLeft;
                    this._resizeCropBox(b, c, this._htDragData.sHandleType)
                }
            }
        }
    },_onMouseUp: function(b) {
        if (!this._bMouseOver) {
            this._hidePositionBar()
        }
        if (this._htDragData.sDragType == "crop_box_resize") {
            this._htCropBoxData.nTop = this._htDragData.nCropBoxTop >= 0 ? this._htDragData.nCropBoxTop : this._htCropBoxData.nTop;
            this._htCropBoxData.nLeft = this._htDragData.nCropBoxLeft >= 0 ? this._htDragData.nCropBoxLeft : this._htCropBoxData.nLeft;
            this._htCropBoxData.nWidth = Math.min((this._htDragData.nCropBoxWidth || this._htCropBoxData.nResizedWidth) / this._htImageData.nRatio, this._htImageData.nWidth);
            this._htCropBoxData.nHeight = Math.min((this._htDragData.nCropBoxHeight || this._htCropBoxData.nResizedHeight) / this._htImageData.nRatio, this._htImageData.nHeight);
            this._htCropBoxData.nResizedWidth = this._htDragData.nCropBoxWidth || this._htCropBoxData.nResizedWidth;
            this._htCropBoxData.nResizedHeight = this._htDragData.nCropBoxHeight || this._htCropBoxData.nResizedHeight;
            this._refreshCropBoxLimit()
        }
        this._stopMouseDrag();
        this._bMouseDrag = false;
        this._htDragData = {}
    },_startMouseDrag: function() {
        $(document).bind("mousemove", this._htEventHandler.mousemove);
        $(document).bind("mouseup", this._htEventHandler.mouseup);
        this._getElement("root").bind("selectstart", this._htEventHandler.selectstart);
        this._getElement("root").css("MozUserSelect", "none")
    },_stopMouseDrag: function() {
        $(document).unbind("mousemove", this._htEventHandler.mousemove);
        $(document).unbind("mouseup", this._htEventHandler.mouseup);
        this._getElement("root").unbind("selectstart", this._htEventHandler.selectstart);
        this._getElement("root").css("MozUserSelect", "")
    },_moveBackground: function(b, e) {
        var d = this._htOption.nWidth - this._htImageData.nResizedWidth;
        var c = this._htOption.nHeight - this._htImageData.nResizedHeight;
        b = this._htOption.nHeight < this._htImageData.nResizedHeight ? Math.min(Math.max(b, c), 0) : c / 2;
        e = this._htOption.nWidth < this._htImageData.nResizedWidth ? Math.min(Math.max(e, d), 0) : d / 2;
        this._htImageData.nTop = b;
        this._htImageData.nLeft = e;
        this._getElement("background_image").css({top: b + "px",left: e + "px"});
        this._getElement("crop_box_image").css({top: (b - this._htCropBoxData.nTop - 1) + "px",left: (e - this._htCropBoxData.nLeft - 1) + "px"});
        this._setPositionBarOffset()
    },_resizeCropBox: function(l, n, p) {
        var O = Math.min(this._htCropBoxData.nMinimumWidth * this._htImageData.nRatio, this._htImageData.nResizedWidth);
        var x = Math.min(this._htCropBoxData.nMinimumHeight * this._htImageData.nRatio, this._htImageData.nResizedHeight);
        var o = Math.min(this._htCropBoxData.nMaximumWidth * this._htImageData.nRatio, this._htImageData.nResizedWidth);
        var N = Math.min(this._htCropBoxData.nMaximumHeight * this._htImageData.nRatio, this._htImageData.nResizedHeight);
        var ac = this._htCropBoxData.nResizedWidth - O;
        var m = this._htCropBoxData.nResizedHeight - x;
        var w = Math.min(this._htOption.nHeight, this._htOption.bImageOnly ? this._htImageData.nTop + this._htImageData.nResizedHeight : this._htOption.nHeight);
        var R = Math.min(this._htOption.nWidth, this._htOption.bImageOnly ? this._htImageData.nLeft + this._htImageData.nResizedWidth : this._htOption.nWidth);
        var aa = Math.min(Math.max(l, this._htCropBoxLimit.nTop), this._htCropBoxData.nTop + m);
        var X = Math.min(Math.max(n, this._htCropBoxLimit.nLeft), this._htCropBoxData.nLeft + ac);
        var W = Math.min(l, w);
        var U = Math.min(n, R);
        var T = Math.max(this._htCropBoxData.nResizedWidth + this._htCropBoxData.nLeft - X, O);
        var S = Math.max(this._htCropBoxData.nResizedHeight + this._htCropBoxData.nTop - aa, x);
        var Q = Math.max(U - this._htCropBoxData.nLeft, O);
        var P = Math.max(W - this._htCropBoxData.nTop, x);
        l = (p == "1" || p == "2") ? aa : this._htCropBoxData.nTop;
        n = (p == "1" || p == "3") ? X : this._htCropBoxData.nLeft;
        var r = (p == "1" || p == "3") ? T : Q;
        var Z = (p == "1" || p == "2") ? S : P;
        if (this._htOption.bKeepAspectRatio) {
            var ab = r / this._htCropBoxData.nResizedWidth;
            var s = Z / this._htCropBoxData.nResizedHeight;
            var k = Math.min(ab, s);
            r = this._htCropBoxData.nResizedWidth * k;
            Z = this._htCropBoxData.nResizedHeight * k;
            l = (p == "1" || p == "2") ? this._htCropBoxData.nTop - (Z - this._htCropBoxData.nResizedHeight) : this._htCropBoxData.nTop;
            n = (p == "1" || p == "3") ? this._htCropBoxData.nLeft + (this._htCropBoxData.nResizedWidth - r) : this._htCropBoxData.nLeft
        } else {
            if (this._htCropBoxData.nMinimumWidth != this._htCropBoxData.nMaximumWidth || this._htCropBoxData.nMinimumHeight != this._htCropBoxData.nMaximumHeight) {
                var v = Math.min((p == "1" || p == "3") ? this._htCropBoxData.nLeft - this._htImageData.nLeft + this._htCropBoxData.nResizedWidth : R - this._htCropBoxData.nLeft, this._htImageData.nResizedWidth);
                var Y = Math.min((p == "1" || p == "2") ? this._htCropBoxData.nTop - this._htImageData.nTop + this._htCropBoxData.nResizedHeight : w - this._htCropBoxData.nTop, this._htImageData.nResizedHeight);
                var ab = r / o;
                var s = Z / N;
                var j = Math.min(v / O, Y / x);
                r = Math.min(Math.max(r, O * s), Math.min(o * j, v));
                Z = Math.min(Math.max(Z, x * ab), Math.min(N * j, Y));
                l = (p == "1" || p == "2") ? this._htCropBoxData.nTop - (Math.max(Z, 3) - this._htCropBoxData.nResizedHeight) : this._htCropBoxData.nTop;
                n = (p == "1" || p == "3") ? this._htCropBoxData.nLeft - (Math.max(r, 3) - this._htCropBoxData.nResizedWidth) : this._htCropBoxData.nLeft
            }
        }
        this._htDragData.nCropBoxTop = Math.max(l, this._htImageData.nTop);
        this._htDragData.nCropBoxLeft = Math.max(n, this._htImageData.nLeft);
        this._htDragData.nCropBoxWidth = Math.min(r, this._htImageData.nResizedWidth);
        this._htDragData.nCropBoxHeight = Math.min(Z, this._htImageData.nResizedHeight);
        var V = this.getCropArea(l, n, r, Z);
        if (this._htOption.bSizeIndicator) {
            this._getElement("size_indicator").html(V.nCropWidth + ", " + V.nCropHeight)
        }
        this._getElement("crop_box").css({top: (l) + "px",left: (n) + "px",width: Math.max(Math.round(r - 2), 1) + "px",height: Math.max(Math.round(Z - 2), 1) + "px"});
        this._getElement("crop_box_image").css({top: (this._htImageData.nTop - l - 1) + "px",left: (this._htImageData.nLeft - n - 1) + "px"});
        $(this).trigger("cropBoxResize", V)
    },_showPositionBar: function() {
        if (this._htImageData.bVerticalBar) {
            var e = this._htOption.nHeight - 8;
            var c = this._htOption.nHeight * e / this._htImageData.nResizedHeight;
            this._getElement("vertical_bar").height(e).show();
            this._getElement("vertical_bar_thumb").height(c);
            this._htImageData.nVerticalBarHeight = e
        }
        if (this._htImageData.bHorizontalBar) {
            var d = this._htOption.nWidth - 8;
            var b = this._htOption.nWidth * d / this._htImageData.nResizedWidth;
            this._getElement("horizontal_bar").width(d).show();
            this._getElement("horizontal_bar_thumb").width(b);
            this._htImageData.nHorizontalBarWidth = d
        }
        if (this._htImageData.bVerticalBar || this._htImageData.bHorizontalBar) {
            this._setPositionBarOffset()
        }
    },_hidePositionBar: function() {
        this._getElement("vertical_bar").hide();
        this._getElement("horizontal_bar").hide()
    },_setPositionBarOffset: function(b, c) {
        if (this._htImageData.bVerticalBar) {
            var d = Math.abs((b || this._htImageData.nTop) * (this._htImageData.nVerticalBarHeight || 0) / this._htImageData.nResizedHeight);
            this._getElement("vertical_bar_thumb").css("top", d + "px")
        }
        if (this._htImageData.bHorizontalBar) {
            var e = Math.abs((c || this._htImageData.nLeft) * (this._htImageData.nHorizontalBarWidth || 0) / this._htImageData.nResizedWidth);
            this._getElement("horizontal_bar_thumb").css("left", e + "px")
        }
    },loadImage: function(c, b) {
        if (c && !this._htImageData.bLoading) {
            this._welPreloadImage = $("<img style='position:absolute;left:-9999px;'>");
            this._welPreloadImage.appendTo(document.body);
            this._welPreloadImage.bind("load", $.proxy(this._onLoadImage, this));
            this._welPreloadImage.bind("error", $.proxy(this._onLoadError, this));
            this._bNotUseCropBox = b;
            this._htImageData.bLoaded = false;
            this._welPreloadImage.attr("src", c)
        }
    },_onLoadImage: function(e) {
        var c = this._welPreloadImage.width();
        var b = this._welPreloadImage.height();
        var d = this._getImageResizedData(this._htOption.sImageFitType, c, b);
        this._htImageData = {sSrc: this._welPreloadImage.attr("src"),bLoaded: true,bLoading: false,nWidth: c,nHeight: b,nResizedWidth: d.nResizedWidth,nResizedHeight: d.nResizedHeight,nRatio: Math.min(d.nRatio, 1),nTop: (this._htOption.nHeight - d.nResizedHeight) / 2,nLeft: (this._htOption.nWidth - d.nResizedWidth) / 2,nBaseTop: (this._htOption.nHeight - d.nResizedHeight) / 2,nBaseLeft: (this._htOption.nWidth - d.nResizedWidth) / 2,bVerticalBar: Math.round(d.nResizedHeight) > this._htOption.nHeight,bHorizontalBar: Math.round(d.nResizedWidth) > this._htOption.nWidth};
        this._getElement("root").css("cursor", (this._htImageData.bVerticalBar || this._htImageData.bHorizontalBar ? "move" : "default"));
        this._getElement("background_image").width(this._htImageData.nResizedWidth).height(this._htImageData.nResizedHeight).css({top: this._htImageData.nTop + "px",left: this._htImageData.nLeft + "px"}).attr("src", this._htImageData.sSrc);
        this._getElement("no_image").hide();
        this._getElement("crop_area").show();
        this._resetCropBox();
        if (this._htOption.sImageFitType == "zoom" && (c > this._htOption.nWidth || b > this._htOption.nHeight)) {
            this._getElement("slider_container").show();
            this._getElement("slider").slider("option", "min", this._htImageData.nRatio * 100).slider("value", this._htImageData.nRatio * 100)
        } else {
            if (this._getElement("slider_container")) {
                this._getElement("slider_container").hide()
            }
        }
        $(this).trigger("loadImage", this.getCropArea());
        this._welPreloadImage.remove()
    },_zoomImage: function(c) {
        var b = this._htCropBoxData.nWidth * c;
        var h = this._htCropBoxData.nHeight * c;
        if (b > this._htOption.nWidth || h > this._htOption.nHeight) {
            c = Math.min(this._htOption.nWidth / this._htCropBoxData.nWidth, this._htOption.nHeight / this._htCropBoxData.nHeight);
            this._getElement("slider").slider("value", c * 100)
        }
        var f = (this._htCropBoxData.nTop - this._htImageData.nTop) / this._htImageData.nRatio;
        var g = (this._htCropBoxData.nLeft - this._htImageData.nLeft) / this._htImageData.nRatio;
        var e = (this._htImageData.nWidth * c);
        var d = (this._htImageData.nHeight * c);
        if (e > this._htOption.nWidth) {
            if (this._htImageData.nLeft + e < this._htOption.nWidth) {
                this._htImageData.nLeft = this._htOption.nWidth - e
            } else {
                this._htImageData.nLeft = Math.min(this._htImageData.nLeft + (this._htImageData.nResizedWidth - e) / 2, 0)
            }
        } else {
            this._htImageData.nLeft = (this._htOption.nWidth - e) / 2
        }
        if (d > this._htOption.nHeight) {
            if (this._htImageData.nTop + d < this._htOption.nHeight) {
                this._htImageData.nTop = this._htOption.nHeight - d
            } else {
                this._htImageData.nTop = Math.min(this._htImageData.nTop + (this._htImageData.nResizedHeight - d) / 2, 0)
            }
        } else {
            this._htImageData.nTop = (this._htOption.nHeight - d) / 2
        }
        f = f * c + this._htImageData.nTop;
        g = g * c + this._htImageData.nLeft;
        this._htImageData.nResizedWidth = e;
        this._htImageData.nResizedHeight = d;
        this._htImageData.bVerticalBar = d > this._htOption.nHeight;
        this._htImageData.bHorizontalBar = e > this._htOption.nWidth;
        this._htImageData.nRatio = c;
        this._getElement("root").css("cursor", (this._htImageData.bVerticalBar || this._htImageData.bHorizontalBar ? "move" : "default"));
        this._getElement("background_image").width(this._htImageData.nResizedWidth).height(this._htImageData.nResizedHeight).css({top: (this._htImageData.nTop) + "px",left: (this._htImageData.nLeft) + "px"});
        this._getElement("crop_box_image").width(this._htImageData.nResizedWidth).height(this._htImageData.nResizedHeight);
        this._setCropBoxSize(this._htCropBoxData.nWidth, this._htCropBoxData.nHeight);
        this._refreshCropBoxLimit();
        this._setCropBoxOffset(f, g);
        return true
    },_onLoadError: function(c) {
        this._welPreloadImage.remove();
        this._htImageData.bLoading = false;
        var b = $(this).trigger("loadError", {});
        if (b) {
            alert("이미지를 불러오지 못했습니다.\n\n다시 시도하여 주시기 바랍니다.")
        }
    },_getImageResizedData: function(c, e, b) {
        var f = Math.min(this._htOption.nWidth / e, 1);
        var g = Math.min(this._htOption.nHeight / b, 1);
        var d = 1;
        if (c == "inner" || c == "zoom") {
            d = Math.min(f, g);
            e = (e * Math.min(d, 1));
            b = (b * Math.min(d, 1))
        } else {
            if (c == "outer") {
                if (f > g) {
                    d = f;
                    e = Math.min(this._htOption.nWidth, e);
                    b = (b * d)
                } else {
                    d = g;
                    e = (e * d);
                    b = Math.min(this._htOption.nHeight, b)
                }
            }
        }
        return {nResizedWidth: e,nResizedHeight: b,nRatio: d}
    },_resetCropBox: function() {
        if (this._bNotUseCropBox) {
            this._getElement("crop_box").hide();
            this._getElement("background_mask").hide()
        } else {
            this._getElement("crop_box").show();
            this._getElement("background_mask").show();
            if (this._htCropBoxData.nTemporaryWidth && this._htCropBoxData.nTemporaryHeight) {
                this._setCropBoxSize(this._htCropBoxData.nTemporaryWidth, this._htCropBoxData.nTemporaryHeight);
                delete this._htCropBoxData.nTemporaryWidth;
                delete this._htCropBoxData.nTemporaryHeight
            } else {
                if (this._htOption.bMaxCropSize) {
                    var e = this._htImageData.nWidth / this._htCropBoxData.nMaximumWidth;
                    var f = this._htImageData.nHeight / this._htCropBoxData.nMaximumHeight;
                    var d = Math.min(e, f);
                    var c, b;
                    if (d < 1) {
                        c = e < f ? this._htImageData.nWidth : this._htCropBoxData.nMaximumWidth;
                        b = e < f ? this._htCropBoxData.nMaximumHeight : this._htImageData.nHeight
                    } else {
                        c = this._htCropBoxData.nMaximumWidth * d;
                        b = this._htCropBoxData.nMaximumHeight * d
                    }
                    this._setCropBoxSize(c, b)
                } else {
                    this._setCropBoxSize()
                }
            }
            this._refreshCropBoxLimit();
            if (typeof (this._htCropBoxData.nTemporaryTop) == "number" && typeof (this._htCropBoxData.nTemporaryLeft) == "number") {
                this._setCropBoxOffset((this._htCropBoxData.nTemporaryTop * this._htImageData.nRatio + this._htImageData.nTop), (this._htCropBoxData.nTemporaryLeft * this._htImageData.nRatio + this._htImageData.nLeft));
                delete this._htCropBoxData.nTemporaryLeft;
                delete this._htCropBoxData.nTemporaryLeft
            } else {
                this._setCropBoxOffset()
            }
            this._getElement("crop_box_image").attr("src", this._htImageData.sSrc).width(this._htImageData.nResizedWidth).height(this._htImageData.nResizedHeight);
            if (this._htOption.bSizeIndicator) {
                var g = this.getCropArea();
                this._getElement("size_indicator").show().text(g.nBaseCropWidth + ", " + g.nBaseCropHeight)
            }
        }
    },_refreshCropBoxLimit: function() {
        if (this._htImageData.bLoaded) {
            if (this._htOption.bImageOnly && (this._htImageData.nWidth >= this._htCropBoxData.nWidth && this._htImageData.nHeight >= this._htCropBoxData.nHeight)) {
                this._htCropBoxLimit = {nTop: Math.max(this._htImageData.nTop, 0),nBottom: Math.max(this._htImageData.nTop, 0) + Math.min(this._htImageData.nResizedHeight, this._htOption.nHeight) - this._htCropBoxData.nResizedHeight,nLeft: Math.max(this._htImageData.nLeft, 0),nRight: Math.max(this._htImageData.nLeft, 0) + Math.min(this._htImageData.nResizedWidth, this._htOption.nWidth) - this._htCropBoxData.nResizedWidth}
            } else {
                this._htCropBoxLimit = {nTop: 0,nBottom: this._htOption.nHeight - this._htCropBoxData.nResizedHeight,nLeft: 0,nRight: this._htOption.nWidth - this._htCropBoxData.nResizedWidth}
            }
        } else {
            this._htCropBoxLimit = {nTop: 0,nBottom: this._htOption.nHeight,nLeft: 0,nRight: this._htOption.nWidth}
        }
    },setBaseCropBoxSize: function(c, b) {
        this._htCropBoxData.nMaximumWidth = c;
        this._htCropBoxData.nMinimumWidth = c;
        this._htCropBoxData.nMaximumHeight = b;
        this._htCropBoxData.nMinimumHeight = b
    },setCropBoxSize: function(c, b) {
        if (c && b) {
            this._htCropBoxData.nTemporaryWidth = c;
            this._htCropBoxData.nTemporaryHeight = b
        }
    },_setCropBoxSize: function(c, b) {
        this._htCropBoxData.nWidth = Math.min(c || this._htCropBoxData.nMaximumWidth, this._htImageData.nWidth);
        this._htCropBoxData.nResizedWidth = (Math.min(this._htCropBoxData.nWidth * (this._htImageData.nRatio || 1), this._htOption.nWidth));
        this._htCropBoxData.nHeight = Math.min(b || this._htCropBoxData.nMaximumHeight, this._htImageData.nHeight);
        this._htCropBoxData.nResizedHeight = (Math.min(this._htCropBoxData.nHeight * (this._htImageData.nRatio || 1), this._htOption.nHeight));
        this._getElement("crop_box").css({width: Math.max(Math.round(this._htCropBoxData.nResizedWidth - 2), 1) + "px",height: Math.max(Math.round(this._htCropBoxData.nResizedHeight - 2), 1) + "px"})
    },setCropBoxOffset: function(b, c) {
        if (typeof (b) == "number" && typeof (c) == "number") {
            if (this._htImageData.bLoaded) {
                this._setCropBoxOffset(b * this._htImageData.nRatio + this._htImageData.nTop, c * this._htImageData.nRatio + this._htImageData.nLeft)
            } else {
                this._htCropBoxData.nTemporaryTop = b;
                this._htCropBoxData.nTemporaryLeft = c
            }
        }
    },_setCropBoxOffset: function(b, c) {
        b = typeof (b) == "number" ? b : (this._htOption.nHeight - this._htCropBoxData.nResizedHeight) / 2;
        c = typeof (c) == "number" ? c : (this._htOption.nWidth - this._htCropBoxData.nResizedWidth) / 2;
        this._htCropBoxData.nTop = Math.min(Math.max(b, this._htCropBoxLimit.nTop), this._htCropBoxLimit.nBottom);
        this._htCropBoxData.nLeft = Math.min(Math.max(c, this._htCropBoxLimit.nLeft), this._htCropBoxLimit.nRight);
        this._getElement("crop_box").css({top: (this._htCropBoxData.nTop) + "px",left: (this._htCropBoxData.nLeft) + "px"});
        this._getElement("crop_box_image").css({top: (this._htImageData.nTop - this._htCropBoxData.nTop - 1) + "px",left: (this._htImageData.nLeft - this._htCropBoxData.nLeft - 1) + "px"})
    },getCropArea: function(d, c, b, k) {
        var e = this._bNotUseCropBox ? this._htImageData.nWidth : Math.max((b || this._htCropBoxData.nResizedWidth) / this._htImageData.nRatio, 1);
        var h = this._bNotUseCropBox ? this._htImageData.nHeight : Math.max((k || this._htCropBoxData.nResizedHeight) / this._htImageData.nRatio, 1);
        var g = e;
        var j = h;
        var f;
        if (e > this._htCropBoxData.nMaximumWidth && h > this._htCropBoxData.nMaximumHeight) {
            f = Math.max(e / this._htCropBoxData.nMaximumWidth, h / this._htCropBoxData.nMaximumHeight);
            g = e / f;
            j = h / f
        } else {
            if (e > this._htCropBoxData.nMaximumWidth) {
                g = this._htCropBoxData.nMaximumWidth;
                j = h / (e / this._htCropBoxData.nMaximumWidth)
            } else {
                if (h > this._htCropBoxData.nMaximumHeight) {
                    g = e / (h / this._htCropBoxData.nMaximumHeight);
                    j = this._htCropBoxData.nMaximumHeight
                }
            }
        }
        g = this._htCropBoxData.nMaximumWidth == this._htCropBoxData.nMinimumWidth ? this._htCropBoxData.nMaximumWidth : g;
        j = this._htCropBoxData.nMaximumHeight == this._htCropBoxData.nMinimumHeight ? this._htCropBoxData.nMaximumHeight : j;
        return {sImageSrc: this._htImageData.sSrc || "",nImageTop: this._htImageData.nTop || 0,nImageLeft: this._htImageData.nLeft || 0,nImageWidth: this._htImageData.nWidth || 0,nImageHeight: this._htImageData.nHeight || 0,nImageRatio: this._htImageData.nRatio || 0,nCropTop: this._bNotUseCropBox ? 0 : (Math.round(((d || this._htCropBoxData.nTop) - this._htImageData.nTop) / this._htImageData.nRatio) || 0),nCropLeft: this._bNotUseCropBox ? 0 : (Math.round(((c || this._htCropBoxData.nLeft) - this._htImageData.nLeft) / this._htImageData.nRatio) || 0),nCropWidth: Math.round(e) || 0,nCropHeight: Math.round(h) || 0,nBaseCropWidth: Math.round(Math.min(g, this._htImageData.nWidth)) || 0,nBaseCropHeight: Math.round(Math.min(j, this._htImageData.nHeight)) || 0}
    },isNeedCrop: function(b) {
        b = b || this.getCropArea();
        return b.nImageWidth > b.nCropWidth || b.nImageHeight > b.nCropHeight || b.nCropWidth / b.nBaseCropWidth > 1 || b.nCropHeight / b.nBaseCropHeight > 1
    },isImageLoaded: function() {
        return this._htImageData.bLoaded
    },reset: function() {
        if (this._welPreloadImage) {
            this._welPreloadImage.remove()
        }
        this._getElement("no_image").show();
        this._getElement("crop_area").hide();
        this._htImageData = {}
    }};
define("util/imageCropper", ["jquery"], (function(b) {
    return function() {
        var c, d;
        return c || b.ImageCropper
    }
}(this)));
define("settings/views/cropImageView", ["jquery", "underscore", "marionette", "text!settings/templates/profileCropImageTemplate.html", "text!band/templates/bandCoverCropImageTemplate.html", "util/bandUtil", "bandConstants", "util/upload/uploadUtil", "util/imageCropper"], function(c, h, f, d, j, g, e, l, k) {
    var b = f.ItemView.extend({className: "profile_upload_layer",events: {"click .submit_wrap input": "afterCrop","click .submit_wrap button": "cancelCrop","click .layer_close": "cancelCrop"},ui: {bandCoverArea: "._covering"},getTemplate: function() {
            if (this.cropType == e.IMAGE_CROP_TYPE.PROFILE) {
                return h.template(d)
            } else {
                if (this.cropType == e.IMAGE_CROP_TYPE.COVER) {
                    return h.template(j)
                }
            }
        },initialize: function(m) {
            this.photoUrl = m.photoUrl;
            this.outputWidthSize = m.outputWidthSize || 209;
            this.outputHeightSize = m.outputHeightSize || 209;
            this.cropType = m.cropType;
            this.cropperOption = this._getCropperOption()
        },setCrop: function() {
            this.imageCropper = new k({elRoot: c(".image_cropper", this.$el),nWidth: 430,nHeight: 430,nCropWidth: this.cropperOption.nCropWidth,nCropHeight: this.cropperOption.nCropHeight,bMaxCropSize: true,bKeepAspectRatio: true,sImageFitType: "inner"});
            this.imageCropper.loadImage(g.replaceHttpsRes(this.photoUrl))
        },afterCrop: function(m) {
            this.trigger("afterCrop", this.getCropParameter(), this.getImageParameter(this.outputWidthSize, this.outputHeightSize));
            this.close();
            return false
        },getCropParameter: function() {
            this.cropData = this.imageCropper.getCropArea();
            return {url: this.photoUrl,xPoint: this.cropData.nCropLeft,yPoint: this.cropData.nCropTop,cropWidth: this.cropData.nCropWidth,cropHeight: this.cropData.nCropHeight}
        },getImageParameter: function(n, r) {
            var p = n / this.cropData.nCropWidth;
            var v = r / this.cropData.nCropHeight;
            var o = -this.cropData.nCropTop * v;
            var s = -this.cropData.nCropLeft * p;
            var m = {src: this.cropData.sImageSrc,style: {position: "absolute",top: o + "px",left: s + "px"},width: this.cropData.nImageWidth * p,height: this.cropData.nImageHeight * v};
            return m
        },cancelCrop: function() {
            this.close();
            return false
        },setUpload: function() {
            l.setFileUpload({elem: c("#upload_crop_image_anchor", this.$el),type: "photo",height: 28,width: 90,allowFileTypes: e.FORMAT.PROFILE_IMG,uploadLimit: 1,url: g.makeApi("https://up.band.us", "/v1/uploader/upload_photo.json"),callback: {done: h.bind(function(n, m) {
                        if (g.v1FormatErrorHandle(n)) {
                            return
                        }
                        this.photoUrl = n.result_data.url;
                        this.setCrop()
                    }, this)}})
        },serializeData: function() {
            return {photoUrl: this.photoUrl}
        },onRender: function() {
            setTimeout(h.bind(this.setUpload, this), 0);
            this.setCrop()
        },onItemBeforeClose: function() {
            l.removeUploader(this.$el.find("#upload_crop_image_anchor"))
        },_getCropperOption: function() {
            if (this.cropType == e.IMAGE_CROP_TYPE.PROFILE) {
                return {nCropWidth: 150,nCropHeight: 150}
            } else {
                if (this.cropType == e.IMAGE_CROP_TYPE.COVER) {
                    return {nCropWidth: 207,nCropHeight: 155}
                }
            }
        }});
    return b
});
define("module/cropImageModule", ["jquery", "underscore", "marionette", "settings/views/cropImageView", "module/dimmedLayer", "util/upload/uploadUtil", "util/bandUtil", "bandConstants"], function(c, j, e, b, g, k, h, d) {
    var f = e.Controller.extend({initialize: function(l) {
            this.elem = l.elem;
            this.outputWidthSize = l.outputWidthSize || 209;
            this.outputHeightSize = l.outputHeightSize || 209;
            this.cropType = l.cropType;
            this._createCropImageButton(l)
        },_createCropImageButton: function(l) {
            var m = c.extend({}, l, {type: "photo",allowFileTypes: d.FORMAT.PROFILE_IMG,url: h.makeApi("https://up.band.us", "/v1/uploader/upload_photo.json"),uploadLimit: 1,height: l.elem.outerHeight(true),width: l.elem.outerWidth(true),callback: {done: j.bind(function(o, n) {
                        if (h.v1FormatErrorHandle(o)) {
                            return
                        }
                        if (this.currentCropImageView) {
                            this.currentCropImageView.close()
                        }
                        this.currentCropImageView = new b({photoUrl: o.result_data.url,outputWidthSize: this.outputWidthSize,outputHeightSize: this.outputHeightSize,cropType: this.cropType});
                        g.showLight(this.currentCropImageView);
                        this.currentCropImageView.on("afterCrop", j.bind(function(r, p) {
                            this.trigger("complete:crop:temp", r, p)
                        }, this))
                    }, this)}});
            k.setFileUpload(m)
        },toggle: function(m) {
            var l = (m === true) || (typeof m === "undefined" && this._isShowed);
            k.uploadStatus(this.elem, l);
            this._isShowed = l
        },getCropParameter: function() {
            return this.currentCropImageView.getCropParameter()
        },getCropImageParameter: function(m, l) {
            return this.currentCropImageView.getImageParameter(m, l)
        },generateCropImage: function(m) {
            var l = this.getCropParameter(this.outputWidthSize, this.outputHeightSize);
            var n = {imageUrl: l.url,xpoint: l.xPoint,ypoint: l.yPoint,width: l.cropWidth,height: l.cropHeight};
            c.ajax({url: h.makeApi("https://up.band.us", "/v1/uploader/upload_cropping_photo.json"),data: n,success: function(o) {
                    if (h.v1FormatErrorHandle(o)) {
                        return
                    }
                    h.functionCall(m, "success", o.result_data)
                }})
        },destroy: function() {
            k.removeUploader(this.elem)
        }});
    return f
});
define("text!module/templates/singleLoadingTemplate.html", [], function() {
    return '<img src="<%-imageUrl%>" style="width:auto !important;height:auto !important;">'
});
define("module/views/singleLoadingView", ["jquery", "underscore", "marionette", "text!module/templates/singleLoadingTemplate.html"], function(e, d, f, b) {
    var c = f.Layout.extend({template: d.template(b),className: "loading",ui: {img: "img"},initialize: function(g) {
            this.imageUrl = window.resBaseUrl + "/images/template/data_loading.gif"
        },setLoadingImage: function(g) {
            if (!g) {
                return
            }
            this.imageUrl = g;
            if (typeof this.ui.img.attr == "function") {
                this.ui.img.attr("src", this.imageUrl)
            }
        },setTransparent: function(g) {
            g = !!g;
            this.$el.toggleClass("transparent", g)
        },serializeData: function() {
            return {imageUrl: this.imageUrl}
        }});
    return c
});
define("module/loading", ["jquery", "underscore", "backbone", "marionette", "module/views/singleLoadingView"], function(e, c, g, f, b) {
    var d = f.Controller.extend({initialize: function() {
        },_createLoadingView: function() {
            var j = new g.Model();
            var h = new b({model: j});
            return h
        },show: function(h, j) {
            h = h || e("body");
            if (h.$el) {
                this.showOnView(h, j)
            } else {
                this.showOnElement(h, j)
            }
        },showOnView: function(h, k) {
            var j = this.showOnElement(h.$el);
            this.listenToOnce(h, "beforeClose", function() {
                this.closeForcedOnElement(h.$el)
            }, this)
        },showOnElement: function(k, j) {
            j = e.extend({loadingImageUrl: null,transparent: false}, j);
            var h = this._increaseLoadingView(k);
            if (h) {
                h.setLoadingImage(j.loadingImageUrl)
            }
            if (j.transparent) {
                h.setTransparent(true)
            }
            return h
        },isLoading: function(h) {
            h = h || e("body");
            if (h.$el) {
                return this.isLoadingOnView(h)
            } else {
                return this.isLoadingOnElement(h)
            }
        },isLoadingOnView: function(h) {
            return this.isLoadingOnElement(h.$el)
        },isLoadingOnElement: function(h) {
            var j = e(h).data("loading_count") || 0;
            return j > 0
        },close: function(h) {
            h = h || e("body");
            if (h.$el) {
                this.closeOnView(h)
            } else {
                this.closeOnElement(h)
            }
        },closeForced: function(h) {
            h = h || e("body");
            if (h.$el) {
                this.closeForcedOnView(h)
            } else {
                this.closeForcedOnElement(h)
            }
        },closeOnView: function(h) {
            this.closeOnElement(h.$el)
        },closeForcedOnView: function(h) {
            this.closeForcedOnElement(h.$el)
        },closeOnElement: function(h) {
            this._decreaseLoadingView(h)
        },closeForcedOnElement: function(h) {
            var j = e(h);
            j.data("loading_count", 0);
            this._closeLoadingView(h)
        },_increaseLoadingView: function(j) {
            var l = e(j);
            var k = l.data("loading_count") || 0;
            l.data("loading_count", ++k);
            if (k == 1) {
                var h = this._createLoadingView();
                l.data("loading", h);
                setTimeout(function() {
                    if (l.data("loading_count") == k) {
                        l.append(h.render().$el)
                    }
                }, 100)
            }
            return l.data("loading")
        },_decreaseLoadingView: function(h) {
            var k = e(h);
            var j = k.data("loading_count") || 0;
            k.data("loading_count", --j);
            if (j <= 0) {
                this._closeLoadingView(h)
            }
        },_closeLoadingView: function(h) {
            var k = e(h);
            var j = k.data("loading");
            if (j) {
                j.close()
            }
            k.removeData("loading")
        }});
    return new d()
});
define("agreement/models/personalInfoAgreementModel", ["jquery", "underscore", "backbone", "util/bandUtil", "bandConstants"], function(d, c, f, b) {
    var e = f.Model.extend({url: b.makeApi("https://api.band.us", "/v1/get_personal_info_agreements"),idAttribute: "id",initialize: function(g) {
        },simpleFetch: function(g) {
            this.fetch({success: function(j, k, h) {
                    b.functionCall(g, "success", j, k, h)
                },error: function(j, k, h) {
                    b.functionCall(g, "error", j, k, h)
                }})
        },parse: function(g) {
            return g.result_data || g
        },isAgreeBirthday: function() {
            return this.get("birthday")
        },isAgreeContacts: function() {
            return this.get("contacts")
        },isAgreeEmail: function() {
            return this.get("email")
        },isAgreePhoneNumber: function() {
            return this.get("phone_number")
        },isAgreeProfileImage: function() {
            return this.get("profile_image")
        }});
    return e
});
define("agreement/controllers/personalInfoAgreementManager", ["jquery", "underscore", "marionette", "agreement/models/personalInfoAgreementModel", "util/bandUtil"], function(e, c, g, f, b) {
    var d = g.Controller.extend({initialize: function() {
            this.callbacks = [];
            this.isReady = false;
            this.personalInfoAgreementModel = new f()
        },_doReadyCallbacks: function() {
            this.isReady = true;
            c.each(this.callbacks, c.bind(function(h) {
                h(this.user, this.bandList, this)
            }, this));
            this.callbacks = []
        },ready: function(h) {
            if (this.isReady) {
                h(this.personalInfoAgreementModel, this)
            } else {
                this.callbacks.push(h)
            }
        },getRefreshedPersonalInfoAgreementModel: function(h) {
            this.personalInfoAgreementModel.simpleFetch({success: c.bind(function(l, j, k) {
                    this._doReadyCallbacks();
                    b.functionCall(h, "success", this.personalInfoAgreementModel)
                }, this)})
        },getPersonalInfoAgreementModel: function() {
            return this.personalInfoAgreementModel
        }});
    return new d()
});
define("agreement/controllers/personalInfoAgreementApiClient", ["jquery", "underscore", "marionette", "util/bandUtil"], function(e, c, f, b) {
    var d = f.Controller.extend({initialize: function(g) {
        },setPersonalInfoAgreements: function(g, h) {
            var j = {personal_info_items: g};
            e.ajax({url: b.makeApi("https://api.band.us", "/v1/set_personal_info_agreements"),type: "POST",data: j,success: function(k) {
                    b.functionCall(h, "success", k.result_data)
                }})
        }});
    return d
});
/*! http://mths.be/placeholder v2.0.8 by @mathias */
;
(function(k, m, g) {
    var c = Object.prototype.toString.call(k.operamini) == "[object OperaMini]";
    var b = "placeholder" in m.createElement("input") && !c;
    var h = "placeholder" in m.createElement("textarea") && !c;
    var n = g.fn;
    var f = g.valHooks;
    var d = g.propHooks;
    var p;
    var o;
    if (b && h) {
        o = n.placeholder = function() {
            return this
        };
        o.input = o.textarea = true
    } else {
        o = n.placeholder = function() {
            var s = this;
            s.filter((b ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({"focus.placeholder": e,"blur.placeholder": j}).data("placeholder-enabled", true).trigger("blur.placeholder");
            return s
        };
        o.input = b;
        o.textarea = h;
        p = {get: function(v) {
                var s = g(v);
                var w = s.data("placeholder-password");
                if (w) {
                    return w[0].value
                }
                return s.data("placeholder-enabled") && s.hasClass("placeholder") ? "" : v.value
            },set: function(v, x) {
                var s = g(v);
                var w = s.data("placeholder-password");
                if (w) {
                    return w[0].value = x
                }
                if (!s.data("placeholder-enabled")) {
                    return v.value = x
                }
                if (x == "") {
                    v.value = x;
                    if (v != r()) {
                        j.call(v)
                    }
                } else {
                    if (s.hasClass("placeholder")) {
                        e.call(v, true, x) || (v.value = x)
                    } else {
                        v.value = x
                    }
                }
                return s
            }};
        if (!b) {
            f.input = p;
            d.value = p
        }
        if (!h) {
            f.textarea = p;
            d.value = p
        }
        g(function() {
            g(m).delegate("form", "submit.placeholder", function() {
                var s = g(".placeholder", this).each(e);
                setTimeout(function() {
                    s.each(j)
                }, 10)
            })
        });
        g(k).bind("beforeunload.placeholder", function() {
            g(".placeholder").each(function() {
                this.value = ""
            })
        })
    }
    function l(v) {
        var s = {};
        var w = /^jQuery\d+$/;
        g.each(v.attributes, function(N, x) {
            if (x.specified && !w.test(x.name)) {
                s[x.name] = x.value
            }
        });
        return s
    }
    function e(v, w) {
        var s = this;
        var x = g(s);
        if (s.value == x.attr("placeholder") && x.hasClass("placeholder")) {
            if (x.data("placeholder-password")) {
                x = x.hide().next().show().attr("id", x.removeAttr("id").data("placeholder-id"));
                if (v === true) {
                    return x[0].value = w
                }
                x.focus()
            } else {
                s.value = "";
                x.removeClass("placeholder");
                s == r() && s.select()
            }
        }
    }
    function j() {
        var N;
        var s = this;
        var x = g(s);
        var w = this.id;
        if (s.value == "") {
            if (s.type == "password") {
                if (!x.data("placeholder-textinput")) {
                    try {
                        N = x.clone().attr({type: "text"})
                    } catch (v) {
                        N = g("<input>").attr(g.extend(l(this), {type: "text"}))
                    }
                    N.removeAttr("name").data({"placeholder-password": x,"placeholder-id": w}).bind("focus.placeholder", e);
                    x.data({"placeholder-textinput": N,"placeholder-id": w}).before(N)
                }
                x = x.removeAttr("id").hide().prev().attr("id", w).show()
            }
            x.addClass("placeholder");
            x[0].value = x.attr("placeholder")
        } else {
            x.removeClass("placeholder")
        }
    }
    function r() {
        try {
            return m.activeElement
        } catch (s) {
        }
    }
}(this, document, jQuery));
define("libs/jquery/external/placeholder", ["jquery"], (function(b) {
    return function() {
        var c, d;
        return c || b.jQuery
    }
}(this)));
define("profile/views/profileView", ["jquery", "underscore", "marionette", "loginUserData", "text!profile/templates/profileTemplate.html", "localize/reslang", "util/phoneNumberUtil", "util/bandWebUrlUtil", "util/bandUtil", "module/cropImageModule", "module/loading", "bandConstants", "agreement/controllers/personalInfoAgreementManager", "agreement/controllers/personalInfoAgreementApiClient", "moment", "libs/jquery/external/placeholder"], function(d, o, g, e, c, r, m, b, k, h, j, f, l, n, s) {
    var p = g.ItemView.extend({template: o.template(c),className: "member_profile_pop my_profile_pop",tagName: "div",events: {"click .profile_submit": function(v) {
                this._doSubmit();
                return false
            },"click .profile_pop_close": function(v) {
                this.close(true);
                return false
            },"click .profile_pop_help": function(v) {
                this.ui.helpMessageBox.toggle();
                return false
            },"focus .name": function() {
                this.ui.name.toggleClass("on", true)
            },"blur .name": function() {
                this.ui.name.toggleClass("on", false)
            },"focus .state": function() {
                this.ui.state.toggleClass("on", true)
            },"blur .state": function() {
                this.ui.state.toggleClass("on", false)
            }},ui: {name: ".name",state: ".state",nameInput: ".name_txt",nickInput: ".state_txt",checkboxBirthday: "li.birth input",checkboxCellphone: "li.phone input",helpMessageBox: ".help_msg_box",profileUploader: ".profile_upload input",profilePhotoImg: ".profile_photo_img",agreeProfileImageWrap: "._agree_profile_image_wrap"},initialize: function(v) {
            this.profileModel = this.model;
            this.confirmSharePosting = v.confirmSharePosting;
            this.personalInfoAgreementApiClient = new n()
        },_doSubmit: function() {
            var x = this.ui.nameInput.val();
            if (!x || !d.trim(x)) {
                alert(r.STR("pcweb.noui.js.alert.input_profile_name"));
                return
            }
            var N = {profile_image_url: this.ui.profilePhotoImg.attr("src") != this.profileModel.getDefaultFace() ? this.ui.profilePhotoImg.attr("src") : "",name: this.ui.nameInput.val(),description: this.ui.nickInput.val(),is_open_cellphone: this.ui.checkboxCellphone ? this.ui.checkboxCellphone.is(":checked") : false,is_open_birthday: this.ui.checkboxBirthday ? this.ui.checkboxBirthday.is(":checked") : false};
            this.profileModel.set(N);
            var O = this.profileModel.changedAttributes();
            if (O && O.profile_image_url && this.profileModel.get("profile_image_url")) {
                if (this.profileModel.isNullDefaultProfileImage()) {
                    var v = confirm(r.STR("pcweb.noui.js.confirm.update_default_profile_image"));
                    O.update_user_profile_image = v
                } else {
                    if (this.confirmSharePosting) {
                        var w = confirm(r.STR("pcweb.noui.js.confirm.create_profile_change_post"));
                        O.create_profile_image_change_post = w
                    }
                }
                j.show(this);
                this.cropImageModule.generateCropImage({success: o.bind(function(P) {
                        this.profileModel.set("profile_image_url", P.url);
                        O.profile_image_url = P.url;
                        O.profile_image_width = P.width;
                        O.profile_image_height = P.height;
                        this._closeWithConfirm(O)
                    }, this)})
            } else {
                this._closeWithConfirm(O)
            }
        },_closeWithConfirm: function(v) {
            this._setPersonalInfoAgreement();
            this.trigger("click:confirm", {model: this.profileModel,changed: v});
            this.close(true, v)
        },_setPersonalInfoAgreement: function() {
            if (!l.getPersonalInfoAgreementModel().isAgreeProfileImage()) {
                var v = f.BAND.PERSONAL_INFO_AGREEMENTS.PROFILE_IMAGE;
                this.personalInfoAgreementApiClient.setPersonalInfoAgreements(v)
            }
        },_onCompleteCropTemp: function(w, v) {
            this.cropParameter = w;
            this.ui.profilePhotoImg.css(v.style);
            this.ui.profilePhotoImg.attr("src", v.src);
            this.ui.profilePhotoImg.width(v.width);
            this.ui.profilePhotoImg.height(v.height)
        },_createCropImageModule: function() {
            setTimeout(o.bind(function() {
                this.cropImageModule = new h({elem: this.ui.profileUploader,outputWidthSize: 310,outputHeightSize: 310,cropType: f.IMAGE_CROP_TYPE.PROFILE});
                this.cropImageModule.on("complete:crop:temp", function(w, v) {
                    this._onCompleteCropTemp(w, v)
                }, this)
            }, this), 0)
        },_destroyCropImageModules: function() {
            if (this.cropImageModule) {
                this.cropImageModule.destroy()
            }
        },serializeData: function() {
            var w = r.getDisplayBirthday(this.profileModel.get("birthday"));
            if (this.profileModel.get("is_lunar")) {
                w = w + "(" + r.STR("pcweb.noui.js.etc.label_lunar") + ")"
            }
            var N = null;
            var v = this.profileModel.get("role");
            if (v === f.BAND.ROLE.LEADER) {
                N = r.STR("pcweb.layer.memberprofile.label.leader")
            } else {
                if (v === f.BAND.ROLE.CO_LEADER) {
                    N = r.STR("pcweb.layer.memberprofile.label.coleader")
                } else {
                    N = r.STR("pcweb.layer.memberprofile.label.member")
                }
            }
            var x = {name: this.profileModel.get("name"),description: this.profileModel.get("description"),face: this.profileModel.getFace() || this.profileModel.getDefaultFace(),birthday: w,cellphone: m.toDisplayPhoneNumber(this.profileModel.get("cellphone")),isOpenBirthday: this.profileModel.get("is_open_birthday"),isOpenCellphone: this.profileModel.get("is_open_cellphone"),isModifyOpenBirthday: this.profileModel.isModifyOpenBirthday(),isModifyOpenCellphone: this.profileModel.isModifyOpenCellphone(),profileSettingUrl: b.makePCWebUrl("SETTINGS"),roleLabel: N,since: this.profileModel.get("member_created_at") ? r.getDisplayTime(s(this.profileModel.get("member_created_at")).toDate(), "C") : null,bandName: this.profileModel.getBandName(),isShowProfileDetail: this.profileModel.isModifyOpenCellphone() && this.profileModel.isModifyOpenBirthday()};
            return x
        },onRender: function() {
            this._createCropImageModule();
            this.ui.nameInput.placeholder();
            this.ui.nickInput.placeholder();
            l.getRefreshedPersonalInfoAgreementModel({success: o.bind(function(v) {
                    if (!v.isAgreeProfileImage()) {
                        this.ui.agreeProfileImageWrap.show()
                    }
                }, this)})
        },onItemBeforeClose: function() {
            this._destroyCropImageModules()
        }});
    return p
});
define("text!profile/templates/memberProfileTemplate.html", [], function() {
    return '<div class="profile_photo">\n    <img src="<%-face%>" alt="<%-name%>" width="310" height="310" />\n    <div class="profile_cover"></div>\n</div>\n<div class="profile_info">\n    <div class="profile_info_group">\n        <div class="profile_simple_info">\n            <p class="name"><%-name%></p>\n            <% if(description) { %>\n            <div class="state" title="<%-description%>"><%-description%></div>\n            <% } %>\n        </div>\n        <% if(cellphone || birthday) { %>\n        <ul class="profile_detail_info">\n            <% if(birthday) { %>\n            <li class="birth"><%-birthday%></li>\n            <% } %>\n            <% if(cellphone) { %>\n            <li class="phone"><%-cellphone%></li>\n            <% } %>\n        </ul>\n        <% } %>\n    </div>\n    <% if(since) { %>\n    <div class="band_join_date"><span class="mark"><%-roleLabel%></span><p>Since <%-since%></p></div>\n    <% } %>\n</div>\n<button type="button" class="profile_pop_close"><img src="<%-resBaseUrl%>/images/member/layer_close.png" width="18" height="18" alt="프로필 닫기" /></button>'
});
define("profile/views/memberProfileView", ["underscore", "marionette", "text!profile/templates/memberProfileTemplate.html", "bandConstants", "util/phoneNumberUtil", "localize/reslang"], function(c, h, f, g, b, e) {
    var d = h.ItemView.extend({template: c.template(f),className: "member_profile_pop",tagName: "div",events: {"click .profile_pop_close": function() {
                this.close();
                return false
            }},initialize: function() {
            this.profileModel = this.model
        },serializeData: function() {
            var k = e.getDisplayBirthday(this.profileModel.get("birthday"));
            if (this.profileModel.get("is_lunar")) {
                k = k + "(" + e.STR("pcweb.noui.js.etc.label_lunar") + ")"
            }
            var m = null;
            var j = this.profileModel.get("role");
            if (j === g.BAND.ROLE.LEADER) {
                m = e.STR("pcweb.layer.memberprofile.label.leader")
            } else {
                if (j === g.BAND.ROLE.CO_LEADER) {
                    m = e.STR("pcweb.layer.memberprofile.label.coleader")
                } else {
                    m = e.STR("pcweb.layer.memberprofile.label.member")
                }
            }
            var l = {face: this.profileModel.getFace(),name: this.profileModel.get("name"),description: this.profileModel.get("description"),birthday: k,cellphone: b.toDisplayPhoneNumber(this.profileModel.get("cellphone")),since: this.profileModel.get("member_created_at") ? e.getDisplayTime(moment(this.profileModel.get("member_created_at")).toDate(), "C") : null,roleLabel: m};
            return l
        }});
    return d
});
define("profile/controllers/profileApiClient", ["jquery", "underscore", "marionette", "profile/models/profileModel", "loginUserData", "util/bandUtil"], function(g, f, h, e, d, c) {
    var b = h.Controller.extend({initialize: function(j) {
        },requestOthersProfile: function(m, k, l) {
            var j = {band_no: m,user_no: k};
            this._requestProfile(j, l)
        },requestMyProfile: function(l, k) {
            var j = {band_no: l};
            this._requestProfile(j, k)
        },_requestProfile: function(k, j) {
            g.ajax({url: c.makeApi("https://api.band.us", "/v1/get_member_with_band"),data: k,type: "POST",success: function(m) {
                    if (c.v1FormatErrorHandle(m)) {
                        return false
                    }
                    var l = new e(m.result_data.member, {bandNO: m.result_data.band.band_no,bandName: m.result_data.band.name});
                    c.functionCall(j, "success", l)
                },error: function(l) {
                    c.functionCall(j, "error", l)
                },complete: function(l) {
                    c.functionCall(j, "complete", l)
                }})
        },requestMyProfileForInvitation: function(l, j) {
            var k = {band_no: l};
            g.ajax({url: c.makeApi("https://api.band.us", "/v1/get_member_form_with_band"),data: k,type: "POST",success: function(n) {
                    if (c.v1FormatErrorHandle(n)) {
                        return false
                    }
                    var m = new e(n.result_data.member, {bandNO: n.result_data.band.band_no,bandName: n.result_data.band.name});
                    c.functionCall(j, "success", m)
                },error: function(m) {
                    c.functionCall(j, "error", m)
                },complete: function(m) {
                    c.functionCall(j, "complete", m)
                }})
        },requestMyProfileForOpenBand: function(l, j) {
            var k = {band_no: l};
            g.ajax({url: c.makeApi("https://api.band.us", "/v1.1/get_member_form"),data: k,type: "POST",success: function(n) {
                    if (c.v1FormatErrorHandle(n)) {
                        return false
                    }
                    var m = new e(n.result_data.member, {bandNO: n.result_data.band.band_no,bandName: n.result_data.band.name});
                    c.functionCall(j, "success", m)
                },error: function(m) {
                    c.functionCall(j, "error", m)
                },complete: function(m) {
                    c.functionCall(j, "complete", m)
                }})
        },updateProfile: function(j, m, k) {
            var l = {band_no: j.getBandNO()};
            f.each(m, function(o, n) {
                if (n == "is_open_birthday") {
                    l.open_birthday = o
                } else {
                    if (n == "is_open_cellphone") {
                        l.open_cellphone = o
                    } else {
                        l[n] = o
                    }
                }
            });
            g.ajax({url: c.makeApi("https://api.band.us", "/v1/set_member_profile"),type: "POST",data: l,success: f.bind(function(n) {
                    if (c.v1FormatErrorHandle(n, k)) {
                        return
                    }
                    g("._user_profile_desc").text(l.description);
                    c.functionCall(k, "success", n)
                }, this),error: f.bind(function(n) {
                    c.functionCall(k, "error", n)
                })})
        }});
    return b
});
define("profile/controllers/profileOpener", ["jquery", "underscore", "backbone", "marionette", "module/dimmedLayer", "loginUserData", "profile/models/profileModel", "profile/views/profileView", "profile/views/memberProfileView", "profile/controllers/profileApiClient", "util/bandUtil"], function(c, l, k, e, h, d, f, m, b, n, g) {
    var j = e.Controller.extend({initialize: function(o) {
            this.profileApiClient = new n()
        },showMyProfileForInvitation: function(p, o) {
            this.profileApiClient.requestMyProfileForInvitation(p, {success: l.bind(function(s) {
                    var r = new m({model: s,confirmSharePosting: false});
                    if (o && o.doInvitation) {
                        r.on("close", l.bind(function(v, w) {
                            if (v) {
                                o.doInvitation(w)
                            }
                        }, this))
                    }
                    h.showDialog(r)
                }, this)})
        },showMyProfileForOpenBand: function(p, o) {
            this.profileApiClient.requestMyProfileForOpenBand(p, {success: l.bind(function(s) {
                    var r = new m({model: s,confirmSharePosting: false});
                    if (o && o.doInvitation) {
                        r.on("close", l.bind(function(v, w) {
                            if (v) {
                                o.doInvitation(w)
                            }
                        }, this))
                    }
                    h.showDialog(r)
                }, this)})
        },showProfile: function(r, o, p) {
            if (o == d.getUser().get("user_no")) {
                this._showMyProfile(r, p)
            } else {
                this._showOthersProfile(r, o, p)
            }
        },_showMyProfile: function(p, o) {
            this.profileApiClient.requestMyProfile(p, {success: l.bind(function(r) {
                    this.__renderAndShowMyProfileView(r, true, o)
                }, this)})
        },_showOthersProfile: function(r, o, p) {
            this.profileApiClient.requestOthersProfile(r, o, {success: l.bind(function(s) {
                    this.__renderAndShowMemberProfileView(s, p)
                }, this)})
        },__renderAndShowMemberProfileView: function(o, r) {
            var p = new b({model: o});
            if (r && r.close) {
                p.on("close", l.bind(function() {
                    r.close(o)
                }, this))
            }
            h.show(p)
        },__renderAndShowMyProfileView: function(p, r, s) {
            var o = new m({model: p,confirmSharePosting: r});
            o.on("click:confirm", function(v) {
                if (v.changed) {
                    this.profileUpdate(v.model, v.changed, {success: function() {
                            if (v.changed && v.changed.update_user_profile_image) {
                                d.getUser().simpleFetch()
                            }
                            k.history.loadUrl()
                        }})
                }
            }, this);
            if (s && s.close) {
                o.on("close", l.bind(function() {
                    s.close(p)
                }, this))
            }
            h.show(o)
        },profileUpdate: function(o, r, p) {
            this.profileApiClient.updateProfile(o, r, {success: function(s) {
                    g.functionCall(p, "success", s)
                },error: function() {
                }})
        }});
    return new j()
});
define("text!photo/templates/photoDetailTemplate.html", [], function() {
    return '<a href="#" class="current_photo"><img class="_current_photo_img _prevent_context"src="<%-photoUrl%>" alt="" style="max-width:100%;position:relative;"></a>\n<div class="photo_info">\n  <div class="writer_info">\n    <span class="profile_photo"><img src="<%-authorFace%>" alt=""></span>\n    <span class="nickname"><%-authorName%></span>\n    <span class="date"><%-registeredAt%></span>\n  </div>\n  <div class="photo_event">\n  \t<% if(isAllowReport) { %>\n\t\t<a href="#" class="file_report" title=""><img src="<%-resBaseUrl%>/images/gallery/btn_report.png"/></a>\n\t<% } %>\n  \t<% if(isAllowDownload) { %>\n    \t<a href="#" class="file_down" title=""><img src="<%-resBaseUrl%>/images/gallery/btn_down_off.png" ></a>\n\t<% } %>\n\t<% if(isDeletable) { %>\n    \t<a href="#" class="file_del" title=""><img src="<%-resBaseUrl%>/images/gallery/btn_delete_off.png" ></a>\n\t<% } %>\n\t<% if(post_id) { %>\n\t<span class="bar">\n    \t<a href="#" class="photo_comment"><%-comment_count%></a>\n\t</span>\n\t<% } %>\n  </div>\n</div>'
});
define("text!photo/templates/photoDetailPostWrapperTemplate.html", [], function() {
    return '<!-- 여기에 postView가 삽입 될 것임.-->\n<a href="#" class="close_photo_comment" title="">\n\t<img src="<%-resBaseUrl%>/images/gallery/btn_close_off.png" alt="comment 닫기">\n</a>'
});
define("post/models/photoModel", ["jquery", "underscore", "backbone", "util/bandUtil"], function(e, c, f, b) {
    var d = f.Model.extend({idAttribute: "photo_no",initialize: function(g) {
        },getAuthorId: function() {
            return this.get("author").id
        },getPhotoNo: function() {
            return this.get("photo_no") || this.get("photoNo")
        },getPhotoId: function() {
            return this.get("photo_id")
        },getPhotoUrl: function() {
            return this.get("photo_url")
        },getWidth: function() {
            return this.get("width")
        },getHeight: function() {
            return this.get("height")
        },getContentType: function() {
            return this.get("content_type")
        },getOriginalUrl: function() {
            return this.get("original") || this.get("photo_url") || this.get("url")
        },getPhotoByType: function(g) {
            var h = this.getOriginalUrl();
            return b.makeThumbnailUrl(h, g)
        },getPhotoType: function() {
            var g = this.getOriginalUrl();
            return c.last(g.split(".")).toLowerCase()
        },isPromotionPhoto: function() {
            return !!this.get("is_promotion_photo")
        }});
    return d
});
define("post/collections/photoCollection", ["jquery", "underscore", "backbone", "post/models/photoModel", "util/bandUtil"], function(f, c, g, d, b) {
    var e = g.Collection.extend({_COUNT_PER_PAGE: 30,model: d,initialize: function(j, h) {
            this.photo_id = "";
            this._hasMore = true;
            if (h) {
                this.band_id = h.band_id;
                this.album_no = h.album_no;
                this.counPerPage = h.countPerPage;
                this.url = b.makeApi("https://api.band.us", "/v1/get_photos", {band_id: this.band_id,album_no: this.album_no,version: "20140411",count: this.counPerPage || this._COUNT_PER_PAGE})
            }
        },hasMore: function() {
            return this._hasMore
        },getTotalCount: function() {
            return this.totalCount
        },simpleFetch: function(h) {
            var j = {};
            this.fetch({update: true,data: j,success: function(m, l, k) {
                    b.functionCall(h, "success", m, l, k)
                },error: function(m, l, k) {
                    b.functionCall(h, "error", m, l, k)
                }})
        },fetchNext: function() {
            if (!this.isLoad) {
                this.isLoad = true;
                this.fetch({update: true,add: true,remove: false,data: {photo_id: this.last().get("photo_id")},success: c.bind(function(k, h, j) {
                        if (!h.result_data.photos || h.result_data.photos.length === 0) {
                            this._hasMore = false
                        }
                    }, this),complete: c.bind(function(k, h, j) {
                        this.isLoad = false
                    }, this)})
            }
        },parse: function(j) {
            if (b.v1FormatErrorHandle(j)) {
                return false
            }
            if (j.result_data[0]) {
                var h = f.map(j.result_data, function(l, k) {
                    l.media.photo_no = l.media.photoNo;
                    l.media.registered_at = l.created_at;
                    l.media.author = l.sender;
                    l.media.photo_url = l.media.originUrl;
                    return l.media
                });
                return h
            }
            this.totalCount = j.result_data.total_count;
            return j.result_data.photos
        }});
    return e
});
define("post/models/fileModel", ["jquery", "underscore", "backbone", "util/bandUtil", "moment"], function(e, c, g, b, f) {
    var d = g.Model.extend({defaults: {},initialize: function(h) {
        },isExpired: function() {
            return f().isAfter(f(this.get("expires_at")))
        },getFile: function(h) {
            e.ajax({url: b.makeApi("https://api.band.us", "/v1.1/get_file_url"),data: {band_no: this.get("band_no"),file_id: this.id},success: function(j) {
                    window.location.href = j.result_data.url
                },error: function() {
                    alert("Please try again in a few minutes")
                }})
        },isNdriveType: function() {
            return this.get("g2n_id") || this.get("type") == "ndrive"
        }});
    return d
});
define("post/collections/fileCollection", ["jquery", "underscore", "backbone", "post/models/fileModel"], function(e, b, f, d) {
    var c = f.Collection.extend({defaults: {},model: d,initialize: function(h, g) {
        }});
    return c
});
define("post/models/pollItemModel", ["jquery", "underscore", "backbone"], function(c, b, e) {
    var d = e.Model.extend({defaults: {},initialize: function(f) {
        }});
    return d
});
define("post/collections/pollItemCollection", ["jquery", "underscore", "backbone", "post/models/pollItemModel"], function(d, b, f, e) {
    var c = f.Collection.extend({defaults: {},model: e});
    return c
});
define("post/models/pollModel", ["jquery", "underscore", "backbone", "post/collections/pollItemCollection"], function(e, c, f, d) {
    var b = f.Model.extend({defaults: {is_subject_addible: false},initialize: function(g) {
            this.setRemainName();
            this.setMaxVoteCount();
            this.setSubjects()
        },getPollItemCollection: function() {
            if (!this.pollItemCollection) {
                this._createPollItemCollection()
            }
            return this.pollItemCollection
        },_createPollItemCollection: function() {
            this.pollItemCollection = new d(this.get("subjects"))
        },setRemainName: function() {
            var g = this.get("remain_member");
            g.remain_name = "";
            if (!this.get("is_anonymous")) {
                if (g.voters) {
                    g.remain_name = e.map(g.voters, function(h) {
                        return h.name
                    }).join(", ")
                }
            }
        },setMaxVoteCount: function() {
            var g = this.get("subjects");
            this.maxCount = 0;
            e.each(g, c.bind(function(h, j) {
                if (j.voter_count > this.maxCount) {
                    this.maxCount = j.voter_count
                }
            }, this))
        },setSubjects: function() {
            var g = this.get("subjects");
            e.each(g, c.bind(function(h, j) {
                g[h].checked = false;
                g[h].voters_name = "";
                g[h].is_max_count = this.getMaxVoteCount() == j.voter_count;
                if (j.voters) {
                    g[h].voters_name = e.map(j.voters, c.bind(function(k) {
                        if (k.id == this.get("user_id")) {
                            g[h].checked = true
                        }
                        if (!this.get("is_anonymous")) {
                            return k.name
                        }
                    }, this)).join(", ")
                }
            }, this))
        },getMaxVoteCount: function() {
            return this.maxCount
        },isSingleSelect: function() {
            return this.get("is_single_select") === true
        },getPollsPostId: function() {
            var g = this.get("post");
            if (g) {
                return g.get("post_id")
            }
        }});
    return b
});
define("post/models/videoModel", ["jquery", "underscore", "backbone"], function(d, b, e) {
    var c = e.Model.extend({defaults: {},initialize: function(f) {
            this.videoInfo = this.get("video")
        },getVideoId: function() {
            return this.videoInfo.videoId
        },getLogoImage: function() {
            return this.videoInfo.logo_image
        }});
    return c
});
define("post/models/locationModel", ["jquery", "underscore", "backbone", "util/bandUtil"], function(d, c, f, b) {
    var e = f.Model.extend({defaults: {},initialize: function(g) {
        },getGoogleImageUrl: function() {
            var g = this.get("latitude") + "," + this.get("longitude");
            return "http://maps.googleapis.com/maps/api/staticmap?zoom=15&size=574x150&sensor=false&center=" + g + "&markers=" + g
        },getLargeMapUrl: function() {
            return b.getLargeMapUrl(this.get("latitude"), this.get("longitude"), this.get("address"), this.get("country_code") == "KR")
        }});
    return e
});
define("post/models/todoItemModel", ["backbone"], function(c) {
    var b = c.Model.extend({});
    return b
});
define("post/collections/todoItemCollection", ["backbone", "post/models/todoItemModel"], function(d, c) {
    var b = d.Collection.extend({model: c});
    return b
});
define("post/models/todoModel", ["backbone", "post/collections/todoItemCollection"], function(d, b) {
    var c = d.Model.extend({getTodoItemCollection: function() {
            if (!this.todoItemCollection) {
                this.todoItemCollection = new b(this.get("tasks"))
            }
            return this.todoItemCollection
        }});
    return c
});
define("post/models/billSplitMemberModel", ["backbone", "member/models/memberModel"], function(d, b) {
    var c = d.Model.extend({initialize: function() {
            this.memberModel = new b(this.get("member"))
        },getMemberModel: function() {
            return this.memberModel
        }});
    return c
});
define("post/collections/billSplitMemberCollection", ["backbone", "post/models/billSplitMemberModel"], function(d, c) {
    var b = d.Collection.extend({model: c});
    return b
});
define("post/models/billSplitModel", ["backbone", "post/collections/billSplitMemberCollection"], function(d, c) {
    var b = d.Model.extend({getBillSplitMemberCollection: function() {
            if (!this.billSplitMemberColection) {
                this.billSplitMemberColection = new c(this.get("members"))
            }
            return this.billSplitMemberColection
        }});
    return b
});
define("post/models/snippetModel", ["backbone"], function(c) {
    var b = c.Model.extend({});
    return b
});
define("gallery/models/photoAlbumModel", ["jquery", "underscore", "backbone", "util/bandUtil", "localize/reslang"], function(f, d, g, c, e) {
    var b = g.Model.extend({_ALL_PHOTOS_NO: "all",idAttribute: "no",defaults: {},url: c.makeApi("https://api.band.us", "/v1/get_photo_album"),initialize: function(h) {
            this.band = h.band;
            this.albumNo = h.albumNo
        },simpleFetch: function(h) {
            if (this.albumNo == this._ALL_PHOTOS_NO) {
                this._initializeAllPhotosModel();
                c.functionCall(h, "success", this);
                return
            }
            var j = {band_id: this.band.get("band_id"),album_no: this.albumNo};
            this.fetch({data: j,success: function(l, m, k) {
                    c.functionCall(h, "success", l, m, k)
                }})
        },isNotAlbum: function() {
            return this.get("no") == null && this.get("owner").id == "anonymous"
        },_initializeAllPhotosModel: function() {
            this.set("name", e.STR("pcweb.noui.js.string.all_photos"));
            this.set("count", 0);
            this.set("owner", {id: "anonymous"});
            this.set("no", null)
        },parse: function(h) {
            if (c.v1FormatErrorHandle(h)) {
                return false
            }
            return (h.result_data && h.result_data.photo_album) || h
        }});
    return b
});
define("calendar/models/scheduleModel", ["jquery", "underscore", "backbone", "util/bandUtil", "localize/localizeSpec", "moment"], function(e, d, g, c, f) {
    var b = g.Model.extend({idAttribute: "schedule_id",url: c.makeApi("https://calendar-api.band.us", "/v1.1/schedule/get_schedule_with_id"),initialize: function(h) {
        },simpleFetch: function(h) {
            var j = {"DEVICE-TIME-ZONE-ID": moment().format("Z"),band_no: this.get("band_no"),schedule_id: this.get("schedule_id")};
            this.fetch({data: j,success: function(l, m, k) {
                    if (m.result_code && m.result_code != 1) {
                        if (m.result_data.message) {
                            alert(m.result_data.message)
                        }
                        c.functionCall(h, "error", l, m, k)
                    } else {
                        c.functionCall(h, "success", l, m, k)
                    }
                },error: function(l, m, k) {
                    c.functionCall(h, "error", l, m, k)
                }})
        },isMoreOneDay: function() {
            if (!this.get("end_at")) {
                return false
            }
            var h = moment(this.get("start_at"));
            var j = moment(this.get("end_at"));
            return j.isAfter(h, "days")
        },isRepeatStart: function() {
            if (!this.get("repeat_start_at")) {
                return false
            }
            var h = moment(this.get("start_at")).format("YYYY-MM-DD");
            var j = moment(this.get("repeat_start_at")).format("YYYY-MM-DD");
            return h == j
        },getDisplayDateTimeForSingleDay: function(j) {
            j = e.extend({useLunar: f.useLunar}, j);
            var h = G.getDisplayTime(moment(this.get("start_at")).toDate(), "B");
            h += j.useLunar && this.get("lunar_date_string") ? "(" + this.get("lunar_date_string") + ")" : "";
            if (!this.get("is_all_day")) {
                h += ", ";
                h += G.getDisplayTime(moment(this.get("start_at")).toDate(), "H");
                h += this.get("end_at") ? " - " + G.getDisplayTime(moment(this.get("end_at")).toDate(), "H") : ""
            }
            return h
        },getDisplayStartDateTime: function(j) {
            j = e.extend({useLunar: f.useLunar}, j);
            var h = G.getDisplayTime(moment(this.get("start_at")).toDate(), "B");
            h += j.useLunar && this.get("lunar_date_string") ? "(" + this.get("lunar_date_string") + ")" : "";
            if (!this.get("is_all_day")) {
                h += ", ";
                h += G.getDisplayTime(moment(this.get("start_at")).toDate(), "H")
            }
            return h
        },getDisplayEndDateTime: function(h) {
            if (!this.get("end_at")) {
                return
            }
            h = e.extend({useLunar: f.useLunar}, h);
            var j = G.getDisplayTime(moment(this.get("end_at")).toDate(), "B");
            j += h.useLunar && this.get("lunar_end_date_string") ? "(" + this.get("lunar_end_date_string") + ")" : "";
            if (!this.get("is_all_day")) {
                j += ", ";
                j += G.getDisplayTime(moment(this.get("end_at")).toDate(), "H")
            }
            return j
        },parse: function(j) {
            var h = (j.result_data || j);
            return h
        }});
    return b
});
define("post/models/subpostModel", ["backbone"], function(c) {
    var b = c.Model.extend({defaults: {},cloneSubpostModel: function() {
            return new b({header: {text: this.getTitle(),subtext: this.getSubText()},body: {text: this.getDescription(),image: {url: this.getImage().url,width: this.getImage().width,height: this.getImage().height},action: {android: this.getAndroidLink(),ios: this.getIOSLink(),pc: this.getWebLink()}}})
        },setTitle: function(d) {
            this.getHeader().text = d
        },setSubText: function(d) {
            this.getHeader().subtext = d
        },setDescription: function(d) {
            this.getBody().text = d
        },setWebLink: function(d) {
            this.getBody().action.pc = d
        },setAndroidLink: function(d) {
            this.getBody().action.android = d
        },setIOSLink: function(d) {
            this.getBody().action.ios = d
        },setImage: function(d) {
            d = d || {};
            this.getBody().image = _.pick(d, ["url", "width", "height"])
        },getHeader: function() {
            if (!this.get("header")) {
                this.set("header", {text: "",subtext: ""})
            }
            return this.get("header")
        },getBody: function() {
            if (!this.get("body")) {
                this.set("body", {text: "",image: {url: "",width: 0,height: 0},action: {pc: "",android: "",ios: ""}})
            }
            return this.get("body")
        },getTitle: function() {
            return this.getHeader().text
        },getSubText: function() {
            return this.getHeader().subtext
        },getDescription: function() {
            return this.getBody().text
        },getWebLink: function() {
            return this.getBody().action.pc
        },getAndroidLink: function() {
            return this.getBody().action.android
        },getIOSLink: function() {
            return this.getBody().action.ios
        },getImage: function() {
            return this.getBody().image
        },hasValidImage: function() {
            return !!this.getImage() && !!this.getImage().url && !!this.getImage().width && !!this.getImage().height
        },hasSomeLink: function() {
            return !!this.getAndroidLink() || !!this.getWebLink() || !!this.getIOSLink()
        }});
    return b
});
define("post/models/postModel", ["jquery", "underscore", "backbone", "loginUserData", "member/models/memberModel", "post/collections/photoCollection", "post/collections/fileCollection", "post/models/pollModel", "post/models/videoModel", "post/models/locationModel", "post/models/todoModel", "post/models/billSplitModel", "post/models/snippetModel", "gallery/models/photoAlbumModel", "calendar/models/scheduleModel", "post/models/subpostModel", "util/bandUtil", "bandConstants"], function(f, x, c, m, n, p, g, l, d, s, j, r, w, k, h, v, e, b) {
    var o = c.Model.extend({defaults: {},idAttribute: "post_id",initialize: function(N) {
            this.url = e.makeApi("https://api.band.us", "/v1.2.1/get_post_detail", {resolution_type: 100,band_no: this.get("band_no") || this.get("band_id"),post_id: this.get("post_id"),version: "20150204"});
            this.contents = {card: undefined,sticker: undefined,video: undefined,poll: undefined,location: undefined,todo: undefined,billSplit: undefined,snippet: undefined,photoAlbum: undefined,subpost: undefined,photo: new p(),file: new g(),isSet: false}
        },simpleFetch: function(N) {
            var O = {};
            this.fetch({data: O,success: function(Q, R, P) {
                    if (R.result_code && R.result_code != 1) {
                        if (R.result_data.message) {
                            alert(R.result_data.message)
                        }
                        e.functionCall(N, "error", Q, R, P)
                    } else {
                        Q.contents.isSet = false;
                        e.functionCall(N, "success", Q, R, P)
                    }
                },error: function(Q, R, P) {
                    e.functionCall(N, "error", Q, R, P)
                }})
        },isAnniversaryViewType: function() {
            return b.POST.VIEW_TYPE.ANNIVERSARY == this.getViewType()
        },isBirthdayViewType: function() {
            return b.POST.VIEW_TYPE.BIRTHDAY == this.getViewType()
        },getViewType: function() {
            return this.get("view_type")
        },getAuthor: function() {
            var N = this.get("author");
            if (N) {
                var O = new n(N);
                return O
            } else {
                return null
            }
        },getPostID: function() {
            return this.get("post_id")
        },getPostNo: function() {
            return this.get("post_no")
        },setPoll: function() {
            if (this.get("m2_poll")) {
                var N = f.extend({user_id: m.getUserID(),author_id: this.get("author").id,post: this}, this.get("m2_poll"));
                this.contents.poll = new l(N)
            }
        },setTodo: function() {
            if (this.get("todo")) {
                this.contents.todo = new j(this.get("todo"))
            }
        },setBillSplit: function() {
            if (this.get("bill_split")) {
                this.contents.billSplit = new r(this.get("bill_split"))
            }
        },setSnippet: function() {
            if (this.get("snippet")) {
                this.contents.snippet = new w(this.get("snippet"))
            }
        },setPhoto: function() {
            var P = this.get("photos") || [];
            for (var N = 0; N < P.length; N++) {
                var O = P[N];
                if (!!(O.video)) {
                    this.contents.video = new d(O)
                } else {
                    this.contents.photo.push(O)
                }
            }
        },setPromotionPhoto: function() {
            var P = this.get("author");
            var N = this.get("promotion_photos") || [];
            for (var O = 0; O < N.length; O++) {
                var Q = {photo_no: "promotion_photo_" + O,registered_at: this.get("pubDate"),is_promotion_photo: true};
                N[O] = x.extend(N[O], Q);
                N[O]["author"] = P;
                this.contents.photo.push(N[O])
            }
        },setMultimedias: function() {
            var N = this.get("multimedia") || [];
            for (var P = 0; P < N.length; P++) {
                var O = N[P];
                switch (O.type) {
                    case "ndrive":
                        this.contents.file.push(f.extend({band_id: this.get("band_id"),band_no: this.get("band_no"),file_name: O.title}, O));
                        break;
                    case "sticker":
                        this.contents.sticker = O;
                        break
                }
            }
            if (this.contents.file.length > 0) {
                var Q = new Date(this.contents.file.first().get("expires_at").replace(/00$/, ":00"));
                if (new Date() > Q) {
                    this.set("fileExpire", true)
                }
            }
        },setLocation: function() {
            if (this.get("location")) {
                this.contents.location = new s(this.get("location"))
            }
        },setSchedule: function() {
            if (this.get("schedule_info")) {
                this.contents.schedule = new h(this.get("schedule_info"));
                this.contents.schedule.set("band_no", this.get("band_no"))
            }
        },setDropboxList: function() {
            var N = this.get("dropbox_files") || [];
            for (var O = 0; O < N.length; O++) {
                if (this._isValidateDropboxItem(N[O])) {
                    this.contents.file.push({type: "dropbox",title: N[O].name,size: N[O].size,extension: x.last(N[O].name.split("."))})
                }
            }
        },_isValidateDropboxItem: function(N) {
            return N.name != null && N.link != null
        },setPhotoAlbum: function() {
            if (this.get("photo_album")) {
                this.contents.photoAlbum = new k(this.get("photo_album"))
            }
        },setSubpost: function() {
            if (this.get("subpost")) {
                this.contents.subpost = new v(this.get("subpost"))
            }
        },setContents: function() {
            this.setPoll();
            this.setTodo();
            this.setBillSplit();
            this.setSnippet();
            this.setLocation();
            this.setMultimedias();
            this.setDropboxList();
            this.setSchedule();
            this.setPhotoAlbum();
            this.setSubpost();
            this.setPhoto();
            this.setPromotionPhoto();
            this.contents.isSet = true
        },getContent: function(N) {
            if (!this.contents.isSet) {
                this.setContents()
            }
            var O = this.contents[N];
            if (O == this.contents.photo) {
                O = new p(O.toJSON())
            }
            return O
        },setContentPhoto: function(N) {
            this.contents.photo = new p(N.toJSON())
        },parse: function(O) {
            var N = (O.result_data && O.result_data.post || O);
            return N
        }});
    return o
});
define("post/collections/postCollection", ["jquery", "underscore", "backbone", "post/models/postModel", "util/bandUtil"], function(e, d, g, b, c) {
    var f = g.Collection.extend({defaults: {},url: c.makeApi("https://api.band.us", "/v1.4/get_posts", {version: "20150204"}),model: b,initialize: function(j, h) {
            h = h || {};
            this.band_no = h.band_no;
            this._hasMorePost = !j || !j.length
        },simpleFetch: function(h) {
            this._fetch(null, h)
        },fetchNextPost: function(h) {
            this._fetch({post_id: this.last().get("post_id")}, h)
        },hasMore: function() {
            return this.band_no && this._hasMorePost
        },_fetch: function(m, k) {
            if (!this.hasMore()) {
                return
            }
            var j = e.extend({include_video: true,resolution_type: 100,band_no: this.band_no,post_id: null}, m);
            if (!this.isLoad) {
                this.isLoad = true;
                var h = this;
                var l = this;
                this.fetch({data: j,update: true,add: true,remove: false,success: function(p, o, n) {
                        if (!o.result_data && !o.result_data.posts && !o.result_data.posts.length) {
                            h._hasMorePost = false
                        }
                        h = null;
                        c.functionCall(k, "success", p, o, n)
                    },complete: function(p, o, n) {
                        l.isLoad = false;
                        l = null
                    }})
            }
        },parse: function(h) {
            if (c.v1FormatErrorHandle(h)) {
                return false
            }
            return h.result_data.posts
        }});
    return f
});
define("post/collections/postSearchCollection", ["jquery", "underscore", "backbone", "post/models/postModel", "util/bandUtil"], function(f, d, g, b, c) {
    var e = g.Collection.extend({_COUNT_PER_PAGE: 20,defaults: {},model: b,url: c.makeApi("https://api.band.us", "/v1.2/search"),initialize: function(j, h) {
            this.band = h.band;
            this.query = h.query;
            this._hasMorePost = true
        },simpleFetch: function(h) {
            this._fetch(h)
        },fetchNextPost: function(h) {
            this._fetch(h)
        },getTotalCount: function() {
            return this.totalCount
        },hasMore: function() {
            return this.band && this._hasMorePost
        },_fetch: function(j) {
            if (!this.hasMore()) {
                return
            }
            var k = {band_id: this.band.get("band_id"),query: this.query,start: this.length + 1,count: this._COUNT_PER_PAGE};
            var h = this;
            this.fetch({data: k,update: true,add: true,remove: false,success: function(n, m, l) {
                    if (!m.result_data.posts.length) {
                        h._hasMorePost = false
                    }
                    h = null;
                    c.functionCall(j, "success", n, m, l)
                }})
        },parse: function(h) {
            if (c.v1FormatErrorHandle(h)) {
                return false
            }
            this.totalCount = h.result_data.total;
            return h.result_data.posts
        }});
    return e
});
define("post/controllers/postDataClient", ["jquery", "underscore", "marionette", "post/collections/postCollection", "post/collections/postSearchCollection", "post/models/postModel", "bandConstants", "util/bandUtil"], function(d, k, f, c, g, j, e, h) {
    var b = f.Controller.extend({initialize: function() {
        },createPostModel: function(o, l, n) {
            var m = new j({band_id: o,post_id: l});
            m.simpleFetch({success: function(r, s, p) {
                    h.functionCall(n, "success", r, s, p)
                },error: function(r, s, p) {
                    h.functionCall(n, "error", r, s, p)
                }});
            return m
        },createNoticeCollection: function(s, n) {
            var r = new c([]);
            var p = s.get("band_notices");
            if (p && p.length > 0) {
                for (var m = p.length - 1; m >= 0; m--) {
                    var o = p[m];
                    var l = new j(d.extend({}, o, {band_no: s.getBandNo(),isNoticeView: true}));
                    r.unshift(l)
                }
            }
            h.functionCall(n, "success", r)
        },createPostCollection: function(n, l, m) {
            if (l) {
                if (l.query_type.toUpperCase() == e.SEARCH.QUERY_TYPE.POST_ID) {
                    this._createSingPostCollection(n, l, m)
                } else {
                    this._createSearchPostCollection(n, l, m)
                }
            } else {
                this._createNormalPostCollection(n, l, m)
            }
        },_createSingPostCollection: function(n, l, m) {
            this.createPostModel(n.getBandNo(), l.query, {success: function(o, r, p) {
                    var s = new c([]);
                    s.add(o);
                    h.functionCall(m, "success", s, r, p)
                },error: function(p, o) {
                    h.functionCall(m, "error", p, o)
                }})
        },_createSearchPostCollection: function(o, l, m) {
            var n = new g([], {band: o,query: l.query});
            n.simpleFetch({success: function(s, r, p) {
                    h.functionCall(m, "success", s, r, p)
                }})
        },_createNormalPostCollection: function(o, l, m) {
            var n = new c([], {band_no: o.getBandNo()});
            n.simpleFetch({success: function(s, r, p) {
                    h.functionCall(m, "success", s, r, p)
                }})
        }});
    return b
});
define("photo/views/photoDetailPostWrapperView", ["jquery", "underscore", "marionette", "text!photo/templates/photoDetailPostWrapperTemplate.html", "post/controllers/postDataClient"], function(d, b, g, f, c) {
    var e = g.ItemView.extend({template: b.template(f),className: "photo_viewer_comment_pop posts_wrap",attributes: {style: "text-align:left"},events: {"click a.close_photo_comment": function(h) {
                this.close();
                return false
            }},dimmedCssOptions: {top: "",right: "0px",left: "","margin-left": ""},initialize: function(h) {
            this.band = h.band;
            this.photoModel = h.model
        },_getPostDataClient: function() {
            if (!this.postDataClient) {
                this.postDataClient = new c()
            }
            return this.postDataClient
        },_renderPost: function() {
            this._getPostDataClient().createPostModel(this.band.getBandNo(), this.photoModel.get("post_id"), {success: b.bind(function(h) {
                    this._createPostView(h)
                }, this)})
        },_createPostView: function(h) {
            require(["post/views/postView"], b.bind(function(k) {
                var j = new k({model: h,togglable: false,band: this.band,scrollObject: this.$el,isOpenedByPhotoDetail: true});
                j.on("refreshedCommentCount", b.bind(function(l) {
                    this.photoModel.set("comment_count", l.totalCount)
                }, this));
                this.once("before:close", function() {
                    j.close()
                }, this);
                this.$el.prepend(j.render().$el);
                j.focusCommentWriteBox()
            }, this))
        },onRender: function() {
            this._renderPost()
        }});
    return e
});
define("post/controllers/photoController", ["jquery", "underscore", "marionette", "post/collections/photoCollection", "util/bandUtil", "libs/json2/json2"], function(e, c, h, d, b, f) {
    var g = h.Controller.extend({initialize: function() {
        },uploadPhotos: function(m, n, j, l) {
            var k = "";
            if (typeof j == "string" || typeof j == "number") {
                k = j + ""
            } else {
                k: j && j.get("no")
            }
            this._uploadAllPhotos(m, n, k, l)
        },_uploadAllPhotos: function(m, n, j, k) {
            var l = {band_id: m.get("band_id"),photos: f.stringify(n),photo_album_no: j};
            e.ajax({url: b.makeApi("https://api.band.us", "/v1/create_photo", {version: "20130508"}),data: l,type: "POST",success: function(o) {
                    if (o.result_code != 1) {
                        if (o.result_data && o.result_data.message) {
                            alert(o.result_data.message)
                        }
                        b.functionCall(k, "error", o);
                        return
                    }
                    b.functionCall(k, "success", o)
                }})
        },deletePhoto: function(k, j) {
            var l = {photo_id: k.getPhotoId() || k.getPhotoNo()};
            e.ajax({url: b.makeApi("https://api.band.us", "/v1/delete_photo.json"),data: l,success: function(m) {
                    if (b.v1FormatErrorHandle(m, j)) {
                        return
                    }
                    k.trigger("destroy", k, k.collection);
                    b.functionCall(j, "success", k)
                }})
        }});
    return g
});
define("module/imageLoader", ["jquery", "underscore", "backbone", "marionette", "module/loading", "util/bandUtil", "libs/jquery/external/jquery.browser"], function(g, d, j, h, f, c, b) {
    var e = h.Controller.extend({_RETRY_COUNT: 5,_LOADING_TYPE_IMAGE: {NORMAL: "",TYPE1: window.resBaseUrl + "/images/gallery/img_default2.png"},initialize: function() {
        },loadImage: function(o, m) {
            var n = g(o);
            m = g.extend({url: n.attr("src"),width: n.attr("width") || n.width() || 100,height: n.attr("height") || n.height() || 100,loadingType: "NORMAL",transparent: false,onload: function() {
                },error: function() {
                }}, m);
            var l = this;
            if (!n.data("imageloader_created")) {
                n.data("imageloader_created", true);
                n.load(function() {
                    setTimeout(function() {
                        l._stopLoadingEffect(o);
                        c.functionCall(m, "onload")
                    }, 0)
                });
                if (b.msie && b.versionNumber < 9) {
                    n.ready(function() {
                        setTimeout(function() {
                            l._stopLoadingEffect(o);
                            c.functionCall(m, "onload")
                        }, 0)
                    })
                }
                n.error(d.bind(function() {
                    var p = g(o).data("image_load_retry_count") || 0;
                    if (p < this._RETRY_COUNT) {
                        setTimeout(d.bind(function() {
                            this.loadImage(o, m);
                            g(o).data("image_load_retry_count", ++p)
                        }, this), 2000)
                    } else {
                        c.functionCall(m, "error")
                    }
                }, this))
            }
            this._stopLoadingEffect(o);
            n.css("visibility", "hidden");
            n.attr("src", m.url);
            var k = l._createImageLoadingWrapper(o);
            f.show(k, {loadingImageUrl: this._LOADING_TYPE_IMAGE[m.loadingType],transparent: m.transparent});
            setTimeout(function() {
                if (!f.isLoading(k)) {
                    return
                }
                n.css("width", m.width + "px");
                n.css("height", m.height + "px")
            }, 0)
        },_stopLoadingEffect: function(m) {
            var l = g(m);
            var k = this._createImageLoadingWrapper(m);
            l.css("width", "");
            l.css("height", "");
            l.css("visibility", "");
            f.closeForced(k)
        },_createImageLoadingWrapper: function(m) {
            var k = g(m);
            var l = k.parent();
            return l
        }});
    return new e()
});
define("module/oauth2", ["jquery", "marionette", "util/popupUtil"], function(d, e, b) {
    var c = e.Controller.extend({openPopup: function(h, g, f) {
            f = f || {};
            b.openGet({windowURL: "https://" + window.authDomain + "/oauth2/authorize",windowName: f.windowName || null,width: 470,height: 640,centerBrowser: 1,params: {response_type: "token",client_id: h,redirect_uri: g}})
        }});
    return c
});
define("report/controllers/reportManager", ["jquery", "marionette", "util/bandUtil", "module/oauth2"], function(e, f, c, d) {
    var b = f.Controller.extend({_REPORT_OAUTH2_CLIENT_ID: "1006",_REPORT_CONTENTS_URL: "http://" + window.reportDomain + "/report/contents",_REPORT_INVITATION_URL: "http://" + window.reportDomain + "/report/invitation",_REPORT_CHAT_URL: "http://" + window.reportDomain + "/report/chat",initialize: function() {
            this.oauth2 = new d()
        },openPostReportPopup: function(g, h) {
            var j = c.appendParamsToURL(this._REPORT_CONTENTS_URL, {postId: g});
            this._openReportPopupWithOAuth2(j)
        },openCommentReportPopup: function(g, h, j) {
            var k = c.appendParamsToURL(this._REPORT_CONTENTS_URL, {postId: g,commentId: h});
            this._openReportPopupWithOAuth2(k)
        },openInvitationReportPopup: function(g, h) {
            var j = c.appendParamsToURL(this._REPORT_INVITATION_URL, {invitationId: g});
            this._openReportPopupWithOAuth2(j)
        },openChatReportPopup: function(k, h, g) {
            var j = c.appendParamsToURL(this._REPORT_CHAT_URL, {bandNo: k,channelId: h,messageId: g});
            this._openReportPopupWithOAuth2(j)
        },registerChatReportGlobalCallback: function(g) {
            window.getChatReportMessages = g
        },_openReportPopupWithOAuth2: function(g) {
            this.oauth2.openPopup(this._REPORT_OAUTH2_CLIENT_ID, g, {windowName: "band_report"})
        }});
    return b
});
define("photo/views/photoDetailView", ["jquery", "underscore", "backbone", "marionette", "text!photo/templates/photoDetailTemplate.html", "photo/views/photoDetailPostWrapperView", "post/controllers/photoController", "member/models/memberModel", "module/dimmedLayer", "module/imageLoader", "loginUserData", "localize/reslang", "util/bandUtil", "report/controllers/reportManager"], function(c, o, n, h, e, b, f, r, k, m, g, p, j, d) {
    var l = h.ItemView.extend({template: o.template(e),className: "photo_view",attributes: {style: "display:inline-block"},events: {"click a.photo_comment": function(s) {
                this.openPost();
                return false
            },"click a.file_report": function(s) {
                var v = new d();
                v.openPostReportPopup(this.photoModel.get("original_post_id") || this.photoModel.get("post_id"));
                return false
            },"click a.file_del": function(s) {
                if (confirm(p.STR("pcweb.noui.js.confirm.delete_photo"))) {
                    this.photoController.deletePhoto(this.photoModel, {success: o.bind(function(w, v) {
                            n.history.loadUrl()
                        }, this)})
                }
                return false
            },"click a.file_down": function(s) {
                var v = j.appendParamsToURL(this.photoModel.getOriginalUrl(), {attachment: ""});
                window.location.href = v;
                return false
            }},modelEvents: {"change:comment_count": function() {
                this.ui.commentCount.text(this.photoModel.get("comment_count"))
            }},ui: {commentCount: "a.photo_comment",imageTag: "img._current_photo_img"},initialize: function(s) {
            this.photoModel = this.model;
            this.band = s.band;
            this.isDeletable = s.isDeletable || false;
            this.isAllowDownload = s.isAllowDownload || false;
            this.isPromotionPhoto = this.photoModel.isPromotionPhoto();
            this.photoController = new f()
        },openPost: function() {
            var s = new b({band: this.band,model: this.model});
            k.show(s)
        },adjustUI: function() {
            if (this.isClosed) {
                return
            }
            var s = c(window).height() / 2;
            this.ui.imageTag.css({top: s - this.ui.imageTag.height() / 2 - 30})
        },serializeData: function() {
            var v = new r(this.model.get("author"));
            var s = g.getUserID() == v.get("id");
            return c.extend({post_id: null}, this.model.toJSON(), {photoUrl: this.model.getPhotoByType("e1280"),authorFace: v.getFaceThumbnail(),authorName: v.get("name"),registeredAt: p.getDisplayTime(this.model.get("registered_at"), "C"),isDeletable: this.isDeletable && (s || this.band.isAllowPostCommentDeletion()) && !this.isPromotionPhoto,isAllowDownload: this.isAllowDownload,isAllowReport: !this.photoModel.get("is_restricted") && !s && ((window.LocalizeSpec && window.LocalizeSpec.countryCode === "KR") || (window.LocalizeSpec && window.LocalizeSpec.languageLocale === "ko"))})
        },_attachListener: function() {
            this._detachListener();
            if (!this.wfnOnResize) {
                this.wfnOnResize = o.bind(function() {
                    this.adjustUI()
                }, this)
            }
            c(window).on("resize", this.wfnOnResize)
        },_detachListener: function() {
            if (this.wfnOnResize) {
                c(window).off("resize", this.wfnOnResize)
            }
        },onRender: function() {
            this.ui.imageTag.hide();
            this.adjustUI();
            this._attachListener();
            m.loadImage(this.ui.imageTag, {transparent: true,onload: o.bind(function() {
                    if (this.isClosed) {
                        return
                    }
                    this.ui.imageTag.show();
                    setTimeout(o.bind(function() {
                        this.adjustUI()
                    }, this), 0)
                }, this)})
        },onClose: function() {
            this._detachListener()
        }});
    return l
});
define("text!photo/templates/photoPopupViewerTemplate.html", [], function() {
    return '<img id="photo" src=<%-imgUrl%> class="_prevent_context">\n<script type="text/javascript">\n\tfunction fitImgSizeToWindow() {\n\t\tvar ratio = 1;\n\t\ttry {\n\t\t\tratio = parseInt(<%-width%>) / parseInt(<%-height%>);\n\t\t} catch(e) {\n\t\t}\n\n\t\tvar windowWidth = window.screen.width;\n\t\tvar windowHeight = window.screen.height;\n\t\tif (document.body && document.body.offsetWidth) {\n\t\t\twindowWidth = document.body.offsetWidth;\n\t\t\twindowHeight = document.body.offsetHeight;\n\t\t}\n\t\tif (document.compatMode==\'CSS1Compat\' &&\n\t\t\t\tdocument.documentElement &&\n\t\t\t\tdocument.documentElement.offsetWidth ) {\n\t\t\twindowWidth = document.documentElement.offsetWidth;\n\t\t\twindowHeight = document.documentElement.offsetHeight;\n\t\t}\n\t\tif (window.innerWidth && window.innerHeight) {\n\t\t\twindowWidth = window.innerWidth;\n\t\t\twindowHeight = window.innerHeight;\n\t\t}\n\n\n\t\tvar windowRatio = windowWidth / windowHeight;\n\n\t\tvar photo = window.document.getElementById("photo");\n\t\tif (windowRatio > ratio) { // 가로가 더 길 경우.\n\t\t\tphoto.style.width = (windowHeight * ratio) + "px";\n\t\t\tphoto.style.height = windowHeight + "px";\n\t\t} else {\n\t\t\tphoto.style.width = (windowWidth) + "px";\n\t\t\tphoto.style.height = (windowWidth / ratio) + "px";\n\t\t}\n\t};\n\twindow.onresize = function(){\n\t\tfitImgSizeToWindow();\n\t};\n\tfitImgSizeToWindow();\n\n\tif(document.addEventListener) {\n\t\tdocument.addEventListener("contextmenu",function(){\n\t\t\treturn false;\n\t\t});\n\t} else if(document.attachEvent) {\n\t\tdocument.attachEvent("oncontextmenu",function(){\n\t\t\treturn false;\n\t\t});\n\t}\n\n\n<\/script>'
});
define("text!module/templates/navigationWrapperTemplate.html", [], function() {
    return '  <div class="photo_view">\n\t<div class="_body"></div>\n    <a href="#" class="prev_photo _prev" title=""><img src="<%-resBaseUrl%>/images/gallery/btn_prev_off.png" ></a>\n    <a href="#" class="next_photo _next" title=""><img src="<%-resBaseUrl%>/images/gallery/btn_next_off.png" ></a>\n    <a href="#" class="close_photo _close" title=""><img src="<%-resBaseUrl%>/images/gallery/btn_close_off.png" ></a>\n  </div>'
});
define("module/views/navigationWrapperView", ["jquery", "underscore", "marionette", "text!module/templates/navigationWrapperTemplate.html"], function(d, b, f, c) {
    var e = f.Layout.extend({template: b.template(c),className: "photo_viewer_pop",regions: {body: "._body"},ui: {bodyWrap: "._body",prevBtn: "._prev",nextBtn: "._next"},events: {"click a._prev": function(g) {
                this.movePrev();
                return false
            },"click a._next": function(g) {
                this.moveNext();
                return false
            },"click a._close": function(g) {
                this.close();
                return false
            }},initialize: function(g) {
            this.itemView = g.itemView;
            this.targetCollection = g.targetCollection;
            this.targetModel = g.targetModel;
            this.viewParams = g.viewParams || {};
            this.callbacks = g.callbacks;
            this.currentIndex = this.targetCollection.indexOf(this.targetModel) || 0;
            for (var h in this.callbacks) {
                this.on(h, this.callbacks[h])
            }
        },getCurrent: function() {
            return {view: this.body.currentView,model: this.body.currentView.model}
        },moveNext: function() {
            var g = this.targetCollection.get(this.targetCollection.models[++this.currentIndex]);
            if (!g) {
                this.currentIndex--
            } else {
                this.renderItemView(g);
                this._triggerNavagated()
            }
            this.trigger("remained:next:" + (this.targetCollection.length - 1 - this.currentIndex))
        },movePrev: function() {
            var g = this.targetCollection.get(this.targetCollection.models[--this.currentIndex]);
            if (!g) {
                this.currentIndex++
            } else {
                this.renderItemView(g);
                this._triggerNavagated()
            }
            this.trigger("remained:prev:" + (this.currentIndex))
        },renderItemView: function(h) {
            var g = new this.itemView(d.extend({model: h}, this.viewParams));
            this.body.show(g);
            if (this.currentIndex === 0) {
                this.ui.prevBtn.hide()
            } else {
                this.ui.prevBtn.show()
            }
            if (this.currentIndex >= this.targetCollection.length - 1) {
                this.ui.nextBtn.hide()
            } else {
                this.ui.nextBtn.show()
            }
        },_triggerNavagated: function() {
            var g = this.getCurrent();
            this.trigger("navigated", g.view, g.view.model)
        },onKeyUp: function(g) {
            var h = g.target.nodeName.toLowerCase();
            g.preventDefault();
            if (g.keyCode == 37 && h != "textarea") {
                this.movePrev()
            } else {
                if (g.keyCode == 39 && h != "textarea") {
                    this.moveNext()
                }
            }
            return false
        },_attachListeners: function() {
            this._detachListeners();
            if (!this.wfnOnKeyUp) {
                this.wfnOnKeyUp = b.bind(this.onKeyUp, this);
                d(document).on("keyup", this.wfnOnKeyUp)
            }
        },_detachListeners: function() {
            if (this.wfnOnKeyUp) {
                d(document).off("keyup", this.wfnOnKeyUp)
            }
        },onRender: function() {
            this.renderItemView(this.targetModel);
            var g = this.getCurrent();
            this.trigger("initialized", g.view, g.view.model);
            this._attachListeners()
        },onClose: function() {
            this._detachListeners()
        }});
    return e
});
define("module/navigationLayer", ["jquery", "underscore", "marionette", "module/views/navigationWrapperView", "module/dimmedLayer"], function(d, c, g, f, e) {
    var b = g.Controller.extend({initialize: function() {
        },show: function(h) {
            var j = new f({targetCollection: h.targetCollection,targetModel: h.targetModel,itemView: h.itemView,viewParams: h.viewParams,callbacks: h.callbacks});
            e.show(j);
            return j
        }});
    return new b()
});
define("photo/controllers/photoViewerOpener", ["jquery", "underscore", "marionette", "photo/views/photoDetailView", "text!photo/templates/photoPopupViewerTemplate.html", "post/controllers/photoController", "module/navigationLayer", "loginUserData", "util/popupUtil"], function(c, l, h, k, j, d, g, f, b) {
    var e = h.Controller.extend({openPopup: function(n, p, m) {
            var s = n.replace(/^.+[\/]([^\/]+)[\/]([^\/]+)$/, "$1");
            var o = this.processImgUrlForPopup(n);
            var r = b.openGet({windowURL: "http://" + location.host + "/photo/photoViewer",windowName: "photoViewer_" + s,centerBrowser: 1,resizable: 1,width: 500,height: 500 * m / p,params: {key: o,width: p,height: m}})
        },processImgUrlForPopup: function(m) {
            if (!this._tempImgPool) {
                this._tempImgPool = {}
            }
            var n = m.replace(/^.+[\/]([^\/]+)[\/]([^\/]+)$/, "$1") + l.uniqueId("photo");
            this._tempImgPool[n] = m;
            return n
        },consumeImgUrlForPopup: function(n) {
            if (!this._tempImgPool) {
                return ""
            }
            var m = this._tempImgPool[n];
            delete this._tempImgPool[n];
            return m
        },openLayer: function(o, n) {
            var p = o.bShowPost;
            var m = c.extend({}, o);
            delete m.photoCollection;
            delete m.targetPhoto;
            delete m.bShowPost;
            delete m.useFetch;
            return g.show({targetCollection: o.photoCollection,targetModel: o.targetPhoto,itemView: k,viewParams: m,callbacks: {initialized: l.bind(function(s, r) {
                        if (p) {
                            s.openPost()
                        }
                    }, this),navigated: l.bind(function(s, r) {
                    }, this),"remained:next:2": l.bind(function(s, r) {
                        if (o.useFetch) {
                            o.photoCollection.fetchNext()
                        }
                    }, this),"remained:prev:2": l.bind(function(s, r) {
                    }, this)}})
        }});
    return new e()
});
define("util/audio/audioApiClient", ["jquery", "underscore", "marionette", "util/bandUtil"], function(e, d, f, c) {
    var b = f.Controller.extend({requestAudioUrlByComment: function(h, j) {
            var g = {comment_id: h.get("commentId")};
            e.ajax({url: c.makeApi("https://api.band.us", "/v1/get_audio_comment_url.json"),data: g,success: d.bind(function(k) {
                    if (c.v1FormatErrorHandle(k, j)) {
                        return
                    }
                    c.functionCall(j, "success", k.result_data)
                }, this)})
        },requestAudioUrlByChatting: function(h, k, j) {
            var g = {channel_id: h.get("buid"),msg_id: k.get("id")};
            e.ajax({url: c.makeApi("https://api.band.us", "/v1/chat/get_audio_url.json"),data: g,success: d.bind(function(l) {
                    if (c.v1FormatErrorHandle(l, j)) {
                        return
                    }
                    c.functionCall(j, "success", l.result_data)
                }, this)})
        }});
    return new b()
});
define("text!util/audio/audioPlayerTemplate.html", [], function() {
    return '<span class="_audio_player" style="position:absolute;"></span>\n<a class="player_status" href="#"><!--국제화-->정지</a>\n<span class="play_status">\n\t<span class="time_txt">\n\t\t<span class="minutes">0</span>:<span class="second">00</span>\n\t</span>\n</span>'
});
(function(c, d) {
    "function" === typeof define && define.amd ? define("libs/jquery/external/jquery.jplayer", ["jquery"], d) : c.jQuery ? d(c.jQuery) : d(c.Zepto)
})(this, function(d, g) {
    d.fn.jPlayer = function(b) {
        var l = "string" === typeof b, k = Array.prototype.slice.call(arguments, 1), f = this;
        b = !l && k.length ? d.extend.apply(null, [!0, b].concat(k)) : b;
        if (l && "_" === b.charAt(0)) {
            return f
        }
        l ? this.each(function() {
            var n = d(this).data("jPlayer"), m = n && d.isFunction(n[b]) ? n[b].apply(n, k) : n;
            if (m !== n && m !== g) {
                return f = m, !1
            }
        }) : this.each(function() {
            var m = d(this).data("jPlayer");
            m ? m.option(b || {}) : d(this).data("jPlayer", new d.jPlayer(b, this))
        });
        return f
    };
    d.jPlayer = function(b, k) {
        if (arguments.length) {
            this.element = d(k);
            this.options = d.extend(!0, {}, this.options, b);
            var f = this;
            this.element.bind("remove.jPlayer", function() {
                f.destroy()
            });
            this._init()
        }
    };
    "function" !== typeof d.fn.stop && (d.fn.stop = function() {
    });
    d.jPlayer.emulateMethods = "load play pause";
    d.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate";
    d.jPlayer.emulateOptions = "muted volume";
    d.jPlayer.reservedEvent = "ready flashreset resize repeat error warning";
    d.jPlayer.event = {};
    d.each("ready flashreset resize repeat click error warning loadstart progress suspend abort emptied stalled play pause loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange".split(" "), function() {
        d.jPlayer.event[this] = "jPlayer_" + this
    });
    d.jPlayer.htmlEvent = "loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough".split(" ");
    d.jPlayer.pause = function() {
        d.each(d.jPlayer.prototype.instances, function(b, f) {
            f.data("jPlayer").status.srcSet && f.jPlayer("pause")
        })
    };
    d.jPlayer.timeFormat = {showHour: !1,showMin: !0,showSec: !0,padHour: !1,padMin: !0,padSec: !0,sepHour: ":",sepMin: ":",sepSec: ""};
    var c = function() {
        this.init()
    };
    c.prototype = {init: function() {
            this.options = {timeFormat: d.jPlayer.timeFormat}
        },time: function(k) {
            var l = new Date(1000 * (k && "number" === typeof k ? k : 0)), f = l.getUTCHours();
            k = this.options.timeFormat.showHour ? l.getUTCMinutes() : l.getUTCMinutes() + 60 * f;
            l = this.options.timeFormat.showMin ? l.getUTCSeconds() : l.getUTCSeconds() + 60 * k;
            f = this.options.timeFormat.padHour && 10 > f ? "0" + f : f;
            k = this.options.timeFormat.padMin && 10 > k ? "0" + k : k;
            l = this.options.timeFormat.padSec && 10 > l ? "0" + l : l;
            f = "" + (this.options.timeFormat.showHour ? f + this.options.timeFormat.sepHour : "");
            f += this.options.timeFormat.showMin ? k + this.options.timeFormat.sepMin : "";
            return f += this.options.timeFormat.showSec ? l + this.options.timeFormat.sepSec : ""
        }};
    var j = new c;
    d.jPlayer.convertTime = function(b) {
        return j.time(b)
    };
    d.jPlayer.uaBrowser = function(k) {
        k = k.toLowerCase();
        var m = /(opera)(?:.*version)?[ \/]([\w.]+)/, f = /(msie) ([\w.]+)/, l = /(mozilla)(?:.*? rv:([\w.]+))?/;
        k = /(webkit)[ \/]([\w.]+)/.exec(k) || m.exec(k) || f.exec(k) || 0 > k.indexOf("compatible") && l.exec(k) || [];
        return {browser: k[1] || "",version: k[2] || "0"}
    };
    d.jPlayer.uaPlatform = function(k) {
        var m = k.toLowerCase(), f = /(android)/, l = /(mobile)/;
        k = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(m) || [];
        m = /(ipad|playbook)/.exec(m) || !l.exec(m) && f.exec(m) || [];
        k[1] && (k[1] = k[1].replace(/\s/g, "_"));
        return {platform: k[1] || "",tablet: m[1] || ""}
    };
    d.jPlayer.browser = {};
    d.jPlayer.platform = {};
    var e = d.jPlayer.uaBrowser(navigator.userAgent);
    e.browser && (d.jPlayer.browser[e.browser] = !0, d.jPlayer.browser.version = e.version);
    e = d.jPlayer.uaPlatform(navigator.userAgent);
    e.platform && (d.jPlayer.platform[e.platform] = !0, d.jPlayer.platform.mobile = !e.tablet, d.jPlayer.platform.tablet = !!e.tablet);
    d.jPlayer.getDocMode = function() {
        var b;
        d.jPlayer.browser.msie && (document.documentMode ? b = document.documentMode : (b = 5, document.compatMode && "CSS1Compat" === document.compatMode && (b = 7)));
        return b
    };
    d.jPlayer.browser.documentMode = d.jPlayer.getDocMode();
    d.jPlayer.nativeFeatures = {init: function() {
            var n = document, v = n.createElement("video"), k = {w3c: "fullscreenEnabled fullscreenElement requestFullscreen exitFullscreen fullscreenchange fullscreenerror".split(" "),moz: "mozFullScreenEnabled mozFullScreenElement mozRequestFullScreen mozCancelFullScreen mozfullscreenchange mozfullscreenerror".split(" "),webkit: " webkitCurrentFullScreenElement webkitRequestFullScreen webkitCancelFullScreen webkitfullscreenchange ".split(" "),webkitVideo: "webkitSupportsFullscreen webkitDisplayingFullscreen webkitEnterFullscreen webkitExitFullscreen  ".split(" ")}, s = ["w3c", "moz", "webkit", "webkitVideo"], p, o;
            this.fullscreen = v = {support: {w3c: !!n[k.w3c[0]],moz: !!n[k.moz[0]],webkit: "function" === typeof n[k.webkit[3]],webkitVideo: "function" === typeof v[k.webkitVideo[2]]},used: {}};
            p = 0;
            for (o = s.length; p < o; p++) {
                var r = s[p];
                if (v.support[r]) {
                    v.spec = r;
                    v.used[r] = !0;
                    break
                }
            }
            if (v.spec) {
                var m = k[v.spec];
                v.api = {fullscreenEnabled: !0,fullscreenElement: function(b) {
                        b = b ? b : n;
                        return b[m[1]]
                    },requestFullscreen: function(b) {
                        return b[m[2]]()
                    },exitFullscreen: function(b) {
                        b = b ? b : n;
                        return b[m[3]]()
                    }};
                v.event = {fullscreenchange: m[4],fullscreenerror: m[5]}
            } else {
                v.api = {fullscreenEnabled: !1,fullscreenElement: function() {
                        return null
                    },requestFullscreen: function() {
                    },exitFullscreen: function() {
                    }}, v.event = {}
            }
        }};
    d.jPlayer.nativeFeatures.init();
    d.jPlayer.focus = null;
    d.jPlayer.keyIgnoreElementNames = "INPUT TEXTAREA";
    var h = function(b) {
        var k = d.jPlayer.focus, f;
        k && (d.each(d.jPlayer.keyIgnoreElementNames.split(/\s+/g), function(m, l) {
            if (b.target.nodeName.toUpperCase() === l.toUpperCase()) {
                return f = !0, !1
            }
        }), f || d.each(k.options.keyBindings, function(m, l) {
            if (l && b.which === l.key && d.isFunction(l.fn)) {
                return b.preventDefault(), l.fn(k), !1
            }
        }))
    };
    d.jPlayer.keys = function(b) {
        d(document.documentElement).unbind("keydown.jPlayer");
        b && d(document.documentElement).bind("keydown.jPlayer", h)
    };
    d.jPlayer.keys(!0);
    d.jPlayer.prototype = {count: 0,version: {script: "2.5.0",needFlash: "2.5.0",flash: "unknown"},options: {swfPath: "js",solution: "html, flash",supplied: "mp3",preload: "metadata",volume: 0.8,muted: !1,playbackRate: 1,defaultPlaybackRate: 1,minPlaybackRate: 0.5,maxPlaybackRate: 4,wmode: "opaque",backgroundColor: "#000000",cssSelectorAncestor: "#jp_container_1",cssSelector: {videoPlay: ".jp-video-play",play: ".jp-play",pause: ".jp-pause",stop: ".jp-stop",seekBar: ".jp-seek-bar",playBar: ".jp-play-bar",mute: ".jp-mute",unmute: ".jp-unmute",volumeBar: ".jp-volume-bar",volumeBarValue: ".jp-volume-bar-value",volumeMax: ".jp-volume-max",playbackRateBar: ".jp-playback-rate-bar",playbackRateBarValue: ".jp-playback-rate-bar-value",currentTime: ".jp-current-time",duration: ".jp-duration",fullScreen: ".jp-full-screen",restoreScreen: ".jp-restore-screen",repeat: ".jp-repeat",repeatOff: ".jp-repeat-off",gui: ".jp-gui",noSolution: ".jp-no-solution"},smoothPlayBar: !1,fullScreen: !1,fullWindow: !1,autohide: {restored: !1,full: !0,fadeIn: 200,fadeOut: 600,hold: 1000},loop: !1,repeat: function(b) {
                b.jPlayer.options.loop ? d(this).unbind(".jPlayerRepeat").bind(d.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
                    d(this).jPlayer("play")
                }) : d(this).unbind(".jPlayerRepeat")
            },nativeVideoControls: {},noFullWindow: {msie: /msie [0-6]\./,ipad: /ipad.*?os [0-4]\./,iphone: /iphone/,ipod: /ipod/,android_pad: /android [0-3]\.(?!.*?mobile)/,android_phone: /android.*?mobile/,blackberry: /blackberry/,windows_ce: /windows ce/,iemobile: /iemobile/,webos: /webos/},noVolume: {ipad: /ipad/,iphone: /iphone/,ipod: /ipod/,android_pad: /android(?!.*?mobile)/,android_phone: /android.*?mobile/,blackberry: /blackberry/,windows_ce: /windows ce/,iemobile: /iemobile/,webos: /webos/,playbook: /playbook/},timeFormat: {},keyEnabled: !1,audioFullScreen: !1,keyBindings: {play: {key: 32,fn: function(b) {
                        b.status.paused ? b.play() : b.pause()
                    }},fullScreen: {key: 13,fn: function(b) {
                        (b.status.video || b.options.audioFullScreen) && b._setOption("fullScreen", !b.options.fullScreen)
                    }},muted: {key: 8,fn: function(b) {
                        b._muted(!b.options.muted)
                    }},volumeUp: {key: 38,fn: function(b) {
                        b.volume(b.options.volume + 0.1)
                    }},volumeDown: {key: 40,fn: function(b) {
                        b.volume(b.options.volume - 0.1)
                    }}},verticalVolume: !1,verticalPlaybackRate: !1,globalVolume: !1,idPrefix: "jp",noConflict: "jQuery",emulateHtml: !1,consoleAlerts: !0,errorAlerts: !1,warningAlerts: !1},optionsAudio: {size: {width: "0px",height: "0px",cssClass: ""},sizeFull: {width: "0px",height: "0px",cssClass: ""}},optionsVideo: {size: {width: "480px",height: "270px",cssClass: "jp-video-270p"},sizeFull: {width: "100%",height: "100%",cssClass: "jp-video-full"}},instances: {},status: {src: "",media: {},paused: !0,format: {},formatType: "",waitForPlay: !0,waitForLoad: !0,srcSet: !1,video: !1,seekPercent: 0,currentPercentRelative: 0,currentPercentAbsolute: 0,currentTime: 0,duration: 0,videoWidth: 0,videoHeight: 0,readyState: 0,networkState: 0,playbackRate: 1,ended: 0},internal: {ready: !1},solution: {html: !0,flash: !0},format: {mp3: {codec: 'audio/mpeg; codecs="mp3"',flashCanPlay: !0,media: "audio"},m4a: {codec: 'audio/mp4; codecs="mp4a.40.2"',flashCanPlay: !0,media: "audio"},m3u8a: {codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',flashCanPlay: !1,media: "audio"},m3ua: {codec: "audio/mpegurl",flashCanPlay: !1,media: "audio"},oga: {codec: 'audio/ogg; codecs="vorbis, opus"',flashCanPlay: !1,media: "audio"},flac: {codec: "audio/x-flac",flashCanPlay: !1,media: "audio"},wav: {codec: 'audio/wav; codecs="1"',flashCanPlay: !1,media: "audio"},webma: {codec: 'audio/webm; codecs="vorbis"',flashCanPlay: !1,media: "audio"},fla: {codec: "audio/x-flv",flashCanPlay: !0,media: "audio"},rtmpa: {codec: 'audio/rtmp; codecs="rtmp"',flashCanPlay: !0,media: "audio"},m4v: {codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay: !0,media: "video"},m3u8v: {codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay: !1,media: "video"},m3uv: {codec: "audio/mpegurl",flashCanPlay: !1,media: "video"},ogv: {codec: 'video/ogg; codecs="theora, vorbis"',flashCanPlay: !1,media: "video"},webmv: {codec: 'video/webm; codecs="vorbis, vp8"',flashCanPlay: !1,media: "video"},flv: {codec: "video/x-flv",flashCanPlay: !0,media: "video"},rtmpv: {codec: 'video/rtmp; codecs="rtmp"',flashCanPlay: !0,media: "video"}},_init: function() {
            var b = this;
            this.element.empty();
            this.status = d.extend({}, this.status);
            this.internal = d.extend({}, this.internal);
            this.options.timeFormat = d.extend({}, d.jPlayer.timeFormat, this.options.timeFormat);
            this.internal.cmdsIgnored = d.jPlayer.platform.ipad || d.jPlayer.platform.iphone || d.jPlayer.platform.ipod;
            this.internal.domNode = this.element.get(0);
            this.options.keyEnabled && !d.jPlayer.focus && (d.jPlayer.focus = this);
            this.formats = [];
            this.solutions = [];
            this.require = {};
            this.htmlElement = {};
            this.html = {};
            this.html.audio = {};
            this.html.video = {};
            this.flash = {};
            this.css = {};
            this.css.cs = {};
            this.css.jq = {};
            this.ancestorJq = [];
            this.options.volume = this._limitValue(this.options.volume, 0, 1);
            d.each(this.options.supplied.toLowerCase().split(","), function(p, o) {
                var n = o.replace(/^\s+|\s+$/g, "");
                if (b.format[n]) {
                    var m = !1;
                    d.each(b.formats, function(r, s) {
                        if (n === s) {
                            return m = !0, !1
                        }
                    });
                    m || b.formats.push(n)
                }
            });
            d.each(this.options.solution.toLowerCase().split(","), function(p, o) {
                var n = o.replace(/^\s+|\s+$/g, "");
                if (b.solution[n]) {
                    var m = !1;
                    d.each(b.solutions, function(r, s) {
                        if (n === s) {
                            return m = !0, !1
                        }
                    });
                    m || b.solutions.push(n)
                }
            });
            this.internal.instance = "jp_" + this.count;
            this.instances[this.internal.instance] = this.element;
            this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count);
            this.internal.self = d.extend({}, {id: this.element.attr("id"),jq: this.element});
            this.internal.audio = d.extend({}, {id: this.options.idPrefix + "_audio_" + this.count,jq: g});
            this.internal.video = d.extend({}, {id: this.options.idPrefix + "_video_" + this.count,jq: g});
            this.internal.flash = d.extend({}, {id: this.options.idPrefix + "_flash_" + this.count,jq: g,swf: this.options.swfPath + (".swf" !== this.options.swfPath.toLowerCase().slice(-4) ? (this.options.swfPath && "/" !== this.options.swfPath.slice(-1) ? "/" : "") + "Jplayer.swf" : "")});
            this.internal.poster = d.extend({}, {id: this.options.idPrefix + "_poster_" + this.count,jq: g});
            d.each(d.jPlayer.event, function(n, m) {
                b.options[n] !== g && (b.element.bind(m + ".jPlayer", b.options[n]), b.options[n] = g)
            });
            this.require.audio = !1;
            this.require.video = !1;
            d.each(this.formats, function(n, m) {
                b.require[b.format[m].media] = !0
            });
            this.options = this.require.video ? d.extend(!0, {}, this.optionsVideo, this.options) : d.extend(!0, {}, this.optionsAudio, this.options);
            this._setSize();
            this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
            this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
            this.status.noVolume = this._uaBlocklist(this.options.noVolume);
            d.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners();
            this._restrictNativeVideoControls();
            this.htmlElement.poster = document.createElement("img");
            this.htmlElement.poster.id = this.internal.poster.id;
            this.htmlElement.poster.onload = function() {
                b.status.video && !b.status.waitForPlay || b.internal.poster.jq.show()
            };
            this.element.append(this.htmlElement.poster);
            this.internal.poster.jq = d("#" + this.internal.poster.id);
            this.internal.poster.jq.css({width: this.status.width,height: this.status.height});
            this.internal.poster.jq.hide();
            this.internal.poster.jq.bind("click.jPlayer", function() {
                b._trigger(d.jPlayer.event.click)
            });
            this.html.audio.available = !1;
            this.require.audio && (this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio));
            this.html.video.available = !1;
            this.require.video && (this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video));
            this.flash.available = this._checkForFlash(10.1);
            this.html.canPlay = {};
            this.flash.canPlay = {};
            d.each(this.formats, function(n, m) {
                b.html.canPlay[m] = b.html[b.format[m].media].available && "" !== b.htmlElement[b.format[m].media].canPlayType(b.format[m].codec);
                b.flash.canPlay[m] = b.format[m].flashCanPlay && b.flash.available
            });
            this.html.desired = !1;
            this.flash.desired = !1;
            d.each(this.solutions, function(p, o) {
                if (0 === p) {
                    b[o].desired = !0
                } else {
                    var n = !1, m = !1;
                    d.each(b.formats, function(s, r) {
                        b[b.solutions[0]].canPlay[r] && ("video" === b.format[r].media ? m = !0 : n = !0)
                    });
                    b[o].desired = b.require.audio && !n || b.require.video && !m
                }
            });
            this.html.support = {};
            this.flash.support = {};
            d.each(this.formats, function(n, m) {
                b.html.support[m] = b.html.canPlay[m] && b.html.desired;
                b.flash.support[m] = b.flash.canPlay[m] && b.flash.desired
            });
            this.html.used = !1;
            this.flash.used = !1;
            d.each(this.solutions, function(n, m) {
                d.each(b.formats, function(p, o) {
                    if (b[m].support[o]) {
                        return b[m].used = !0, !1
                    }
                })
            });
            this._resetActive();
            this._resetGate();
            this._cssSelectorAncestor(this.options.cssSelectorAncestor);
            this.html.used || this.flash.used ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide() : (this._error({type: d.jPlayer.error.NO_SOLUTION,context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",message: d.jPlayer.errorMsg.NO_SOLUTION,hint: d.jPlayer.errorHint.NO_SOLUTION}), this.css.jq.noSolution.length && this.css.jq.noSolution.show());
            if (this.flash.used) {
                var l, k = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
                if (d.jPlayer.browser.msie && (9 > Number(d.jPlayer.browser.version) || 9 > d.jPlayer.browser.documentMode)) {
                    k = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + k + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                    l = document.createElement('<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>');
                    for (var f = 0; f < k.length; f++) {
                        l.appendChild(document.createElement(k[f]))
                    }
                } else {
                    f = function(n, p, m) {
                        var o = document.createElement("param");
                        o.setAttribute("name", p);
                        o.setAttribute("value", m);
                        n.appendChild(o)
                    }, l = document.createElement("object"), l.setAttribute("id", this.internal.flash.id), l.setAttribute("name", this.internal.flash.id), l.setAttribute("data", this.internal.flash.swf), l.setAttribute("type", "application/x-shockwave-flash"), l.setAttribute("width", "1"), l.setAttribute("height", "1"), l.setAttribute("tabindex", "-1"), f(l, "flashvars", k), f(l, "allowscriptaccess", "always"), f(l, "bgcolor", this.options.backgroundColor), f(l, "wmode", this.options.wmode)
                }
                this.element.append(l);
                this.internal.flash.jq = d(l)
            }
            this.status.playbackRateEnabled = this.html.used && !this.flash.used ? this._testPlaybackRate("audio") : !1;
            this._updatePlaybackRate();
            this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = d("#" + this.internal.audio.id)), this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = d("#" + this.internal.video.id), this.status.nativeVideoControls ? this.internal.video.jq.css({width: this.status.width,height: this.status.height}) : this.internal.video.jq.css({width: "0px",height: "0px"}), this.internal.video.jq.bind("click.jPlayer", function() {
                b._trigger(d.jPlayer.event.click)
            })));
            this.options.emulateHtml && this._emulateHtmlBridge();
            this.html.used && !this.flash.used && setTimeout(function() {
                b.internal.ready = !0;
                b.version.flash = "n/a";
                b._trigger(d.jPlayer.event.repeat);
                b._trigger(d.jPlayer.event.ready)
            }, 100);
            this._updateNativeVideoControls();
            this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
            d.jPlayer.prototype.count++
        },destroy: function() {
            this.clearMedia();
            this._removeUiClass();
            this.css.jq.currentTime.length && this.css.jq.currentTime.text("");
            this.css.jq.duration.length && this.css.jq.duration.text("");
            d.each(this.css.jq, function(b, f) {
                f.length && f.unbind(".jPlayer")
            });
            this.internal.poster.jq.unbind(".jPlayer");
            this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer");
            this._fullscreenRemoveEventListeners();
            this === d.jPlayer.focus && (d.jPlayer.focus = null);
            this.options.emulateHtml && this._destroyHtmlBridge();
            this.element.removeData("jPlayer");
            this.element.unbind(".jPlayer");
            this.element.empty();
            delete this.instances[this.internal.instance]
        },enable: function() {
        },disable: function() {
        },_testCanPlayType: function(b) {
            try {
                return b.canPlayType(this.format.mp3.codec), !0
            } catch (f) {
                return !1
            }
        },_testPlaybackRate: function(b) {
            b = document.createElement("string" === typeof b ? b : "audio");
            try {
                return "playbackRate" in b ? (b.playbackRate = 0.5, 0.5 === b.playbackRate) : !1
            } catch (f) {
                return !1
            }
        },_uaBlocklist: function(b) {
            var k = navigator.userAgent.toLowerCase(), f = !1;
            d.each(b, function(m, l) {
                if (l && l.test(k)) {
                    return f = !0, !1
                }
            });
            return f
        },_restrictNativeVideoControls: function() {
            this.require.audio && this.status.nativeVideoControls && (this.status.nativeVideoControls = !1, this.status.noFullWindow = !0)
        },_updateNativeVideoControls: function() {
            this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({width: this.status.width,height: this.status.height})) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({width: "0px",height: "0px"})))
        },_addHtmlEventListeners: function(b, k) {
            var f = this;
            b.preload = this.options.preload;
            b.muted = this.options.muted;
            b.volume = this.options.volume;
            this.status.playbackRateEnabled && (b.defaultPlaybackRate = this.options.defaultPlaybackRate, b.playbackRate = this.options.playbackRate);
            b.addEventListener("progress", function() {
                k.gate && (f.internal.cmdsIgnored && 0 < this.readyState && (f.internal.cmdsIgnored = !1), f._getHtmlStatus(b), f._updateInterface(), f._trigger(d.jPlayer.event.progress))
            }, !1);
            b.addEventListener("timeupdate", function() {
                k.gate && (f._getHtmlStatus(b), f._updateInterface(), f._trigger(d.jPlayer.event.timeupdate))
            }, !1);
            b.addEventListener("durationchange", function() {
                k.gate && (f._getHtmlStatus(b), f._updateInterface(), f._trigger(d.jPlayer.event.durationchange))
            }, !1);
            b.addEventListener("play", function() {
                k.gate && (f._updateButtons(!0), f._html_checkWaitForPlay(), f._trigger(d.jPlayer.event.play))
            }, !1);
            b.addEventListener("playing", function() {
                k.gate && (f._updateButtons(!0), f._seeked(), f._trigger(d.jPlayer.event.playing))
            }, !1);
            b.addEventListener("pause", function() {
                k.gate && (f._updateButtons(!1), f._trigger(d.jPlayer.event.pause))
            }, !1);
            b.addEventListener("waiting", function() {
                k.gate && (f._seeking(), f._trigger(d.jPlayer.event.waiting))
            }, !1);
            b.addEventListener("seeking", function() {
                k.gate && (f._seeking(), f._trigger(d.jPlayer.event.seeking))
            }, !1);
            b.addEventListener("seeked", function() {
                k.gate && (f._seeked(), f._trigger(d.jPlayer.event.seeked))
            }, !1);
            b.addEventListener("volumechange", function() {
                k.gate && (f.options.volume = b.volume, f.options.muted = b.muted, f._updateMute(), f._updateVolume(), f._trigger(d.jPlayer.event.volumechange))
            }, !1);
            b.addEventListener("ratechange", function() {
                k.gate && (f.options.defaultPlaybackRate = b.defaultPlaybackRate, f.options.playbackRate = b.playbackRate, f._updatePlaybackRate(), f._trigger(d.jPlayer.event.ratechange))
            }, !1);
            b.addEventListener("suspend", function() {
                k.gate && (f._seeked(), f._trigger(d.jPlayer.event.suspend))
            }, !1);
            b.addEventListener("ended", function() {
                k.gate && (d.jPlayer.browser.webkit || (f.htmlElement.media.currentTime = 0), f.htmlElement.media.pause(), f._updateButtons(!1), f._getHtmlStatus(b, !0), f._updateInterface(), f._trigger(d.jPlayer.event.ended))
            }, !1);
            b.addEventListener("error", function() {
                k.gate && (f._updateButtons(!1), f._seeked(), f.status.srcSet && (clearTimeout(f.internal.htmlDlyCmdId), f.status.waitForLoad = !0, f.status.waitForPlay = !0, f.status.video && !f.status.nativeVideoControls && f.internal.video.jq.css({width: "0px",height: "0px"}), f._validString(f.status.media.poster) && !f.status.nativeVideoControls && f.internal.poster.jq.show(), f.css.jq.videoPlay.length && f.css.jq.videoPlay.show(), f._error({type: d.jPlayer.error.URL,context: f.status.src,message: d.jPlayer.errorMsg.URL,hint: d.jPlayer.errorHint.URL})))
            }, !1);
            d.each(d.jPlayer.htmlEvent, function(m, l) {
                b.addEventListener(this, function() {
                    k.gate && f._trigger(d.jPlayer.event[l])
                }, !1)
            })
        },_getHtmlStatus: function(l, p) {
            var k = 0, o = 0, m = 0, n = 0;
            isFinite(l.duration) && (this.status.duration = l.duration);
            k = l.currentTime;
            o = 0 < this.status.duration ? 100 * k / this.status.duration : 0;
            "object" === typeof l.seekable && 0 < l.seekable.length ? (m = 0 < this.status.duration ? 100 * l.seekable.end(l.seekable.length - 1) / this.status.duration : 100, n = 0 < this.status.duration ? 100 * l.currentTime / l.seekable.end(l.seekable.length - 1) : 0) : (m = 100, n = o);
            p && (o = n = k = 0);
            this.status.seekPercent = m;
            this.status.currentPercentRelative = n;
            this.status.currentPercentAbsolute = o;
            this.status.currentTime = k;
            this.status.videoWidth = l.videoWidth;
            this.status.videoHeight = l.videoHeight;
            this.status.readyState = l.readyState;
            this.status.networkState = l.networkState;
            this.status.playbackRate = l.playbackRate;
            this.status.ended = l.ended
        },_resetStatus: function() {
            this.status = d.extend({}, this.status, d.jPlayer.prototype.status)
        },_trigger: function(b, k, f) {
            b = d.Event(b);
            b.jPlayer = {};
            b.jPlayer.version = d.extend({}, this.version);
            b.jPlayer.options = d.extend(!0, {}, this.options);
            b.jPlayer.status = d.extend(!0, {}, this.status);
            b.jPlayer.html = d.extend(!0, {}, this.html);
            b.jPlayer.flash = d.extend(!0, {}, this.flash);
            k && (b.jPlayer.error = d.extend({}, k));
            f && (b.jPlayer.warning = d.extend({}, f));
            this.element.trigger(b)
        },jPlayerFlashEvent: function(b, l) {
            if (b === d.jPlayer.event.ready) {
                if (!this.internal.ready) {
                    this.internal.ready = !0, this.internal.flash.jq.css({width: "0px",height: "0px"}), this.version.flash = l.version, this.version.needFlash !== this.version.flash && this._error({type: d.jPlayer.error.VERSION,context: this.version.flash,message: d.jPlayer.errorMsg.VERSION + this.version.flash,hint: d.jPlayer.errorHint.VERSION}), this._trigger(d.jPlayer.event.repeat), this._trigger(b)
                } else {
                    if (this.flash.gate) {
                        if (this.status.srcSet) {
                            var k = this.status.currentTime, f = this.status.paused;
                            this.setMedia(this.status.media);
                            this.volumeWorker(this.options.volume);
                            0 < k && (f ? this.pause(k) : this.play(k))
                        }
                        this._trigger(d.jPlayer.event.flashreset)
                    }
                }
            }
            if (this.flash.gate) {
                switch (b) {
                    case d.jPlayer.event.progress:
                        this._getFlashStatus(l);
                        this._updateInterface();
                        this._trigger(b);
                        break;
                    case d.jPlayer.event.timeupdate:
                        this._getFlashStatus(l);
                        this._updateInterface();
                        this._trigger(b);
                        break;
                    case d.jPlayer.event.play:
                        this._seeked();
                        this._updateButtons(!0);
                        this._trigger(b);
                        break;
                    case d.jPlayer.event.pause:
                        this._updateButtons(!1);
                        this._trigger(b);
                        break;
                    case d.jPlayer.event.ended:
                        this._updateButtons(!1);
                        this._trigger(b);
                        break;
                    case d.jPlayer.event.click:
                        this._trigger(b);
                        break;
                    case d.jPlayer.event.error:
                        this.status.waitForLoad = !0;
                        this.status.waitForPlay = !0;
                        this.status.video && this.internal.flash.jq.css({width: "0px",height: "0px"});
                        this._validString(this.status.media.poster) && this.internal.poster.jq.show();
                        this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show();
                        this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media);
                        this._updateButtons(!1);
                        this._error({type: d.jPlayer.error.URL,context: l.src,message: d.jPlayer.errorMsg.URL,hint: d.jPlayer.errorHint.URL});
                        break;
                    case d.jPlayer.event.seeking:
                        this._seeking();
                        this._trigger(b);
                        break;
                    case d.jPlayer.event.seeked:
                        this._seeked();
                        this._trigger(b);
                        break;
                    case d.jPlayer.event.ready:
                        break;
                    default:
                        this._trigger(b)
                }
            }
            return !1
        },_getFlashStatus: function(b) {
            this.status.seekPercent = b.seekPercent;
            this.status.currentPercentRelative = b.currentPercentRelative;
            this.status.currentPercentAbsolute = b.currentPercentAbsolute;
            this.status.currentTime = b.currentTime;
            this.status.duration = b.duration;
            this.status.videoWidth = b.videoWidth;
            this.status.videoHeight = b.videoHeight;
            this.status.readyState = 4;
            this.status.networkState = 0;
            this.status.playbackRate = 1;
            this.status.ended = !1
        },_updateButtons: function(b) {
            b === g ? b = !this.status.paused : this.status.paused = !b;
            this.css.jq.play.length && this.css.jq.pause.length && (b ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide()));
            this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide()));
            this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
        },_updateInterface: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%");
            this.css.jq.playBar.length && (this.options.smoothPlayBar ? this.css.jq.playBar.stop().animate({width: this.status.currentPercentAbsolute + "%"}, 250, "linear") : this.css.jq.playBar.width(this.status.currentPercentRelative + "%"));
            this.css.jq.currentTime.length && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime));
            this.css.jq.duration.length && this.css.jq.duration.text(this._convertTime(this.status.duration))
        },_convertTime: c.prototype.time,_seeking: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
        },_seeked: function() {
            this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
        },_resetGate: function() {
            this.html.audio.gate = !1;
            this.html.video.gate = !1;
            this.flash.gate = !1
        },_resetActive: function() {
            this.html.active = !1;
            this.flash.active = !1
        },_escapeHtml: function(b) {
            return b.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")
        },_qualifyURL: function(b) {
            var f = document.createElement("div");
            f.innerHTML = '<a href="' + this._escapeHtml(b) + '">x</a>';
            return f.firstChild.href
        },_absoluteMediaUrls: function(b) {
            var f = this;
            d.each(b, function(k, l) {
                f.format[k] && (b[k] = f._qualifyURL(l))
            });
            return b
        },setMedia: function(b) {
            var l = this, k = !1, f = this.status.media.poster !== b.poster;
            this._resetMedia();
            this._resetGate();
            this._resetActive();
            b = this._absoluteMediaUrls(b);
            d.each(this.formats, function(o, n) {
                var m = "video" === l.format[n].media;
                d.each(l.solutions, function(p, s) {
                    if (l[s].support[n] && l._validString(b[n])) {
                        var r = "html" === s;
                        m ? (r ? (l.html.video.gate = !0, l._html_setVideo(b), l.html.active = !0) : (l.flash.gate = !0, l._flash_setVideo(b), l.flash.active = !0), l.css.jq.videoPlay.length && l.css.jq.videoPlay.show(), l.status.video = !0) : (r ? (l.html.audio.gate = !0, l._html_setAudio(b), l.html.active = !0) : (l.flash.gate = !0, l._flash_setAudio(b), l.flash.active = !0), l.css.jq.videoPlay.length && l.css.jq.videoPlay.hide(), l.status.video = !1);
                        k = !0;
                        return !1
                    }
                });
                if (k) {
                    return !1
                }
            });
            k ? (this.status.nativeVideoControls && this.html.video.gate || !this._validString(b.poster) || (f ? this.htmlElement.poster.src = b.poster : this.internal.poster.jq.show()), this.status.srcSet = !0, this.status.media = d.extend({}, b), this._updateButtons(!1), this._updateInterface()) : this._error({type: d.jPlayer.error.NO_SUPPORT,context: "{supplied:'" + this.options.supplied + "'}",message: d.jPlayer.errorMsg.NO_SUPPORT,hint: d.jPlayer.errorHint.NO_SUPPORT})
        },_resetMedia: function() {
            this._resetStatus();
            this._updateButtons(!1);
            this._updateInterface();
            this._seeked();
            this.internal.poster.jq.hide();
            clearTimeout(this.internal.htmlDlyCmdId);
            this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
        },clearMedia: function() {
            this._resetMedia();
            this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia();
            this._resetGate();
            this._resetActive()
        },load: function() {
            this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
        },focus: function() {
            this.options.keyEnabled && (d.jPlayer.focus = this)
        },play: function(b) {
            b = "number" === typeof b ? b : NaN;
            this.status.srcSet ? (this.focus(), this.html.active ? this._html_play(b) : this.flash.active && this._flash_play(b)) : this._urlNotSetError("play")
        },videoPlay: function() {
            this.play()
        },pause: function(b) {
            b = "number" === typeof b ? b : NaN;
            this.status.srcSet ? this.html.active ? this._html_pause(b) : this.flash.active && this._flash_pause(b) : this._urlNotSetError("pause")
        },tellOthers: function(b, m) {
            var l = this, k = "function" === typeof m, f = Array.prototype.slice.call(arguments);
            "string" === typeof b && (k && f.splice(1, 1), d.each(this.instances, function() {
                l.element !== this && (k && !m.call(this.data("jPlayer"), l) || this.jPlayer.apply(this, f))
            }))
        },pauseOthers: function(b) {
            this.tellOthers("pause", function() {
                return this.status.srcSet
            }, b)
        },stop: function() {
            this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
        },playHead: function(b) {
            b = this._limitValue(b, 0, 100);
            this.status.srcSet ? this.html.active ? this._html_playHead(b) : this.flash.active && this._flash_playHead(b) : this._urlNotSetError("playHead")
        },_muted: function(b) {
            this.mutedWorker(b);
            this.options.globalVolume && this.tellOthers("mutedWorker", function() {
                return this.options.globalVolume
            }, b)
        },mutedWorker: function(b) {
            this.options.muted = b;
            this.html.used && this._html_setProperty("muted", b);
            this.flash.used && this._flash_mute(b);
            this.html.video.gate || this.html.audio.gate || (this._updateMute(b), this._updateVolume(this.options.volume), this._trigger(d.jPlayer.event.volumechange))
        },mute: function(b) {
            b = b === g ? !0 : !!b;
            this._muted(b)
        },unmute: function(b) {
            b = b === g ? !0 : !!b;
            this._muted(!b)
        },_updateMute: function(b) {
            b === g && (b = this.options.muted);
            this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) : b ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
        },volume: function(b) {
            this.volumeWorker(b);
            this.options.globalVolume && this.tellOthers("volumeWorker", function() {
                return this.options.globalVolume
            }, b)
        },volumeWorker: function(b) {
            b = this._limitValue(b, 0, 1);
            this.options.volume = b;
            this.html.used && this._html_setProperty("volume", b);
            this.flash.used && this._flash_volume(b);
            this.html.video.gate || this.html.audio.gate || (this._updateVolume(b), this._trigger(d.jPlayer.event.volumechange))
        },volumeBar: function(b) {
            if (this.css.jq.volumeBar.length) {
                var m = d(b.currentTarget), l = m.offset(), k = b.pageX - l.left, f = m.width();
                b = m.height() - b.pageY + l.top;
                m = m.height();
                this.options.verticalVolume ? this.volume(b / m) : this.volume(k / f)
            }
            this.options.muted && this._muted(!1)
        },volumeBarValue: function() {
        },_updateVolume: function(b) {
            b === g && (b = this.options.volume);
            b = this.options.muted ? 0 : b;
            this.status.noVolume ? (this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](100 * b + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
        },volumeMax: function() {
            this.volume(1);
            this.options.muted && this._muted(!1)
        },_cssSelectorAncestor: function(b) {
            var f = this;
            this.options.cssSelectorAncestor = b;
            this._removeUiClass();
            this.ancestorJq = b ? d(b) : [];
            b && 1 !== this.ancestorJq.length && this._warning({type: d.jPlayer.warning.CSS_SELECTOR_COUNT,context: b,message: d.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",hint: d.jPlayer.warningHint.CSS_SELECTOR_COUNT});
            this._addUiClass();
            d.each(this.options.cssSelector, function(l, k) {
                f._cssSelector(l, k)
            });
            this._updateInterface();
            this._updateButtons();
            this._updateAutohide();
            this._updateVolume();
            this._updateMute()
        },_cssSelector: function(b, k) {
            var f = this;
            "string" === typeof k ? d.jPlayer.prototype.options.cssSelector[b] ? (this.css.jq[b] && this.css.jq[b].length && this.css.jq[b].unbind(".jPlayer"), this.options.cssSelector[b] = k, this.css.cs[b] = this.options.cssSelectorAncestor + " " + k, this.css.jq[b] = k ? d(this.css.cs[b]) : [], this.css.jq[b].length && this.css.jq[b].bind("click.jPlayer", function(l) {
                l.preventDefault();
                f[b](l);
                d(this).blur()
            }), k && 1 !== this.css.jq[b].length && this._warning({type: d.jPlayer.warning.CSS_SELECTOR_COUNT,context: this.css.cs[b],message: d.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[b].length + " found for " + b + " method.",hint: d.jPlayer.warningHint.CSS_SELECTOR_COUNT})) : this._warning({type: d.jPlayer.warning.CSS_SELECTOR_METHOD,context: b,message: d.jPlayer.warningMsg.CSS_SELECTOR_METHOD,hint: d.jPlayer.warningHint.CSS_SELECTOR_METHOD}) : this._warning({type: d.jPlayer.warning.CSS_SELECTOR_STRING,context: k,message: d.jPlayer.warningMsg.CSS_SELECTOR_STRING,hint: d.jPlayer.warningHint.CSS_SELECTOR_STRING})
        },seekBar: function(b) {
            if (this.css.jq.seekBar.length) {
                var k = d(b.currentTarget), f = k.offset();
                b = b.pageX - f.left;
                k = k.width();
                this.playHead(100 * b / k)
            }
        },playBar: function() {
        },playbackRate: function(b) {
            this._setOption("playbackRate", b)
        },playbackRateBar: function(b) {
            if (this.css.jq.playbackRateBar.length) {
                var m = d(b.currentTarget), l = m.offset(), k = b.pageX - l.left, f = m.width();
                b = m.height() - b.pageY + l.top;
                m = m.height();
                this.playbackRate((this.options.verticalPlaybackRate ? b / m : k / f) * (this.options.maxPlaybackRate - this.options.minPlaybackRate) + this.options.minPlaybackRate)
            }
        },playbackRateBarValue: function() {
        },_updatePlaybackRate: function() {
            var b = (this.options.playbackRate - this.options.minPlaybackRate) / (this.options.maxPlaybackRate - this.options.minPlaybackRate);
            this.status.playbackRateEnabled ? (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.show(), this.css.jq.playbackRateBarValue.length && (this.css.jq.playbackRateBarValue.show(), this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate ? "height" : "width"](100 * b + "%"))) : (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.hide(), this.css.jq.playbackRateBarValue.length && this.css.jq.playbackRateBarValue.hide())
        },repeat: function() {
            this._loop(!0)
        },repeatOff: function() {
            this._loop(!1)
        },_loop: function(b) {
            this.options.loop !== b && (this.options.loop = b, this._updateButtons(), this._trigger(d.jPlayer.event.repeat))
        },currentTime: function() {
        },duration: function() {
        },gui: function() {
        },noSolution: function() {
        },option: function(b, n) {
            var m = b;
            if (0 === arguments.length) {
                return d.extend(!0, {}, this.options)
            }
            if ("string" === typeof b) {
                var l = b.split(".");
                if (n === g) {
                    for (var m = d.extend(!0, {}, this.options), k = 0; k < l.length; k++) {
                        if (m[l[k]] !== g) {
                            m = m[l[k]]
                        } else {
                            return this._warning({type: d.jPlayer.warning.OPTION_KEY,context: b,message: d.jPlayer.warningMsg.OPTION_KEY,hint: d.jPlayer.warningHint.OPTION_KEY}), g
                        }
                    }
                    return m
                }
                for (var k = m = {}, f = 0; f < l.length; f++) {
                    f < l.length - 1 ? (k[l[f]] = {}, k = k[l[f]]) : k[l[f]] = n
                }
            }
            this._setOptions(m);
            return this
        },_setOptions: function(b) {
            var f = this;
            d.each(b, function(l, k) {
                f._setOption(l, k)
            });
            return this
        },_setOption: function(b, l) {
            var k = this;
            switch (b) {
                case "volume":
                    this.volume(l);
                    break;
                case "muted":
                    this._muted(l);
                    break;
                case "globalVolume":
                    this.options[b] = l;
                    break;
                case "cssSelectorAncestor":
                    this._cssSelectorAncestor(l);
                    break;
                case "cssSelector":
                    d.each(l, function(m, n) {
                        k._cssSelector(m, n)
                    });
                    break;
                case "playbackRate":
                    this.options[b] = l = this._limitValue(l, this.options.minPlaybackRate, this.options.maxPlaybackRate);
                    this.html.used && this._html_setProperty("playbackRate", l);
                    this._updatePlaybackRate();
                    break;
                case "defaultPlaybackRate":
                    this.options[b] = l = this._limitValue(l, this.options.minPlaybackRate, this.options.maxPlaybackRate);
                    this.html.used && this._html_setProperty("defaultPlaybackRate", l);
                    this._updatePlaybackRate();
                    break;
                case "minPlaybackRate":
                    this.options[b] = l = this._limitValue(l, 0.1, this.options.maxPlaybackRate - 0.1);
                    this._updatePlaybackRate();
                    break;
                case "maxPlaybackRate":
                    this.options[b] = l = this._limitValue(l, this.options.minPlaybackRate + 0.1, 16);
                    this._updatePlaybackRate();
                    break;
                case "fullScreen":
                    if (this.options[b] !== l) {
                        var f = d.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
                        if (!f || f && !this.status.waitForPlay) {
                            f || (this.options[b] = l), l ? this._requestFullscreen() : this._exitFullscreen(), f || this._setOption("fullWindow", l)
                        }
                    }
                    break;
                case "fullWindow":
                    this.options[b] !== l && (this._removeUiClass(), this.options[b] = l, this._refreshSize());
                    break;
                case "size":
                    this.options.fullWindow || this.options[b].cssClass === l.cssClass || this._removeUiClass();
                    this.options[b] = d.extend({}, this.options[b], l);
                    this._refreshSize();
                    break;
                case "sizeFull":
                    this.options.fullWindow && this.options[b].cssClass !== l.cssClass && this._removeUiClass();
                    this.options[b] = d.extend({}, this.options[b], l);
                    this._refreshSize();
                    break;
                case "autohide":
                    this.options[b] = d.extend({}, this.options[b], l);
                    this._updateAutohide();
                    break;
                case "loop":
                    this._loop(l);
                    break;
                case "nativeVideoControls":
                    this.options[b] = d.extend({}, this.options[b], l);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this._restrictNativeVideoControls();
                    this._updateNativeVideoControls();
                    break;
                case "noFullWindow":
                    this.options[b] = d.extend({}, this.options[b], l);
                    this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls);
                    this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow);
                    this._restrictNativeVideoControls();
                    this._updateButtons();
                    break;
                case "noVolume":
                    this.options[b] = d.extend({}, this.options[b], l);
                    this.status.noVolume = this._uaBlocklist(this.options.noVolume);
                    this._updateVolume();
                    this._updateMute();
                    break;
                case "emulateHtml":
                    this.options[b] !== l && ((this.options[b] = l) ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
                    break;
                case "timeFormat":
                    this.options[b] = d.extend({}, this.options[b], l);
                    break;
                case "keyEnabled":
                    this.options[b] = l;
                    l || this !== d.jPlayer.focus || (d.jPlayer.focus = null);
                    break;
                case "keyBindings":
                    this.options[b] = d.extend(!0, {}, this.options[b], l);
                    break;
                case "audioFullScreen":
                    this.options[b] = l
            }
            return this
        },_refreshSize: function() {
            this._setSize();
            this._addUiClass();
            this._updateSize();
            this._updateButtons();
            this._updateAutohide();
            this._trigger(d.jPlayer.event.resize)
        },_setSize: function() {
            this.options.fullWindow ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass);
            this.element.css({width: this.status.width,height: this.status.height})
        },_addUiClass: function() {
            this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
        },_removeUiClass: function() {
            this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
        },_updateSize: function() {
            this.internal.poster.jq.css({width: this.status.width,height: this.status.height});
            !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({width: this.status.width,height: this.status.height}) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({width: this.status.width,height: this.status.height})
        },_updateAutohide: function() {
            var b = this, f = function() {
                b.css.jq.gui.fadeIn(b.options.autohide.fadeIn, function() {
                    clearTimeout(b.internal.autohideId);
                    b.internal.autohideId = setTimeout(function() {
                        b.css.jq.gui.fadeOut(b.options.autohide.fadeOut)
                    }, b.options.autohide.hold)
                })
            };
            this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), this.element.unbind(".jPlayerAutohide"), this.css.jq.gui.unbind(".jPlayerAutohide"), this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind("mousemove.jPlayer.jPlayerAutohide", f), this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide", f), this.css.jq.gui.hide()) : this.css.jq.gui.show())
        },fullScreen: function() {
            this._setOption("fullScreen", !0)
        },restoreScreen: function() {
            this._setOption("fullScreen", !1)
        },_fullscreenAddEventListeners: function() {
            var b = this, f = d.jPlayer.nativeFeatures.fullscreen;
            f.api.fullscreenEnabled && f.event.fullscreenchange && ("function" !== typeof this.internal.fullscreenchangeHandler && (this.internal.fullscreenchangeHandler = function() {
                b._fullscreenchange()
            }), document.addEventListener(f.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
        },_fullscreenRemoveEventListeners: function() {
            var b = d.jPlayer.nativeFeatures.fullscreen;
            this.internal.fullscreenchangeHandler && document.addEventListener(b.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
        },_fullscreenchange: function() {
            this.options.fullScreen && !d.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
        },_requestFullscreen: function() {
            var b = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0], f = d.jPlayer.nativeFeatures.fullscreen;
            f.used.webkitVideo && (b = this.htmlElement.video);
            f.api.fullscreenEnabled && f.api.requestFullscreen(b)
        },_exitFullscreen: function() {
            var b = d.jPlayer.nativeFeatures.fullscreen, f;
            b.used.webkitVideo && (f = this.htmlElement.video);
            b.api.fullscreenEnabled && b.api.exitFullscreen(f)
        },_html_initMedia: function(b) {
            var f = d(this.htmlElement.media).empty();
            d.each(b.track || [], function(l, k) {
                var m = document.createElement("track");
                m.setAttribute("kind", k.kind ? k.kind : "");
                m.setAttribute("src", k.src ? k.src : "");
                m.setAttribute("srclang", k.srclang ? k.srclang : "");
                m.setAttribute("label", k.label ? k.label : "");
                k.def && m.setAttribute("default", k.def);
                f.append(m)
            });
            this.htmlElement.media.src = this.status.src;
            "none" !== this.options.preload && this._html_load();
            this._trigger(d.jPlayer.event.timeupdate)
        },_html_setFormat: function(b) {
            var f = this;
            d.each(this.formats, function(k, l) {
                if (f.html.support[l] && b[l]) {
                    return f.status.src = b[l], f.status.format[l] = !0, f.status.formatType = l, !1
                }
            })
        },_html_setAudio: function(b) {
            this._html_setFormat(b);
            this.htmlElement.media = this.htmlElement.audio;
            this._html_initMedia(b)
        },_html_setVideo: function(b) {
            this._html_setFormat(b);
            this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(b.poster) ? b.poster : "");
            this.htmlElement.media = this.htmlElement.video;
            this._html_initMedia(b)
        },_html_resetMedia: function() {
            this.htmlElement.media && (this.htmlElement.media.id !== this.internal.video.id || this.status.nativeVideoControls || this.internal.video.jq.css({width: "0px",height: "0px"}), this.htmlElement.media.pause())
        },_html_clearMedia: function() {
            this.htmlElement.media && (this.htmlElement.media.src = "about:blank", this.htmlElement.media.load())
        },_html_load: function() {
            this.status.waitForLoad && (this.status.waitForLoad = !1, this.htmlElement.media.load());
            clearTimeout(this.internal.htmlDlyCmdId)
        },_html_play: function(k) {
            var f = this, m = this.htmlElement.media;
            this._html_load();
            if (isNaN(k)) {
                m.play()
            } else {
                this.internal.cmdsIgnored && m.play();
                try {
                    if (!m.seekable || "object" === typeof m.seekable && 0 < m.seekable.length) {
                        m.currentTime = k, m.play()
                    } else {
                        throw 1
                    }
                } catch (l) {
                    this.internal.htmlDlyCmdId = setTimeout(function() {
                        f.play(k)
                    }, 250);
                    return
                }
            }
            this._html_checkWaitForPlay()
        },_html_pause: function(k) {
            var f = this, m = this.htmlElement.media;
            0 < k ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId);
            m.pause();
            if (!isNaN(k)) {
                try {
                    if (!m.seekable || "object" === typeof m.seekable && 0 < m.seekable.length) {
                        m.currentTime = k
                    } else {
                        throw 1
                    }
                } catch (l) {
                    this.internal.htmlDlyCmdId = setTimeout(function() {
                        f.pause(k)
                    }, 250);
                    return
                }
            }
            0 < k && this._html_checkWaitForPlay()
        },_html_playHead: function(k) {
            var f = this, m = this.htmlElement.media;
            this._html_load();
            try {
                if ("object" === typeof m.seekable && 0 < m.seekable.length) {
                    m.currentTime = k * m.seekable.end(m.seekable.length - 1) / 100
                } else {
                    if (0 < m.duration && !isNaN(m.duration)) {
                        m.currentTime = k * m.duration / 100
                    } else {
                        throw "e"
                    }
                }
            } catch (l) {
                this.internal.htmlDlyCmdId = setTimeout(function() {
                    f.playHead(k)
                }, 250);
                return
            }
            this.status.waitForLoad || this._html_checkWaitForPlay()
        },_html_checkWaitForPlay: function() {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({width: this.status.width,height: this.status.height})))
        },_html_setProperty: function(k, f) {
            this.html.audio.available && (this.htmlElement.audio[k] = f);
            this.html.video.available && (this.htmlElement.video[k] = f)
        },_flash_setAudio: function(b) {
            var k = this;
            try {
                d.each(this.formats, function(l, m) {
                    if (k.flash.support[m] && b[m]) {
                        switch (m) {
                            case "m4a":
                            case "fla":
                                k._getMovie().fl_setAudio_m4a(b[m]);
                                break;
                            case "mp3":
                                k._getMovie().fl_setAudio_mp3(b[m]);
                                break;
                            case "rtmpa":
                                k._getMovie().fl_setAudio_rtmp(b[m])
                        }
                        k.status.src = b[m];
                        k.status.format[m] = !0;
                        k.status.formatType = m;
                        return !1
                    }
                }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
            } catch (f) {
                this._flashError(f)
            }
        },_flash_setVideo: function(b) {
            var k = this;
            try {
                d.each(this.formats, function(l, m) {
                    if (k.flash.support[m] && b[m]) {
                        switch (m) {
                            case "m4v":
                            case "flv":
                                k._getMovie().fl_setVideo_m4v(b[m]);
                                break;
                            case "rtmpv":
                                k._getMovie().fl_setVideo_rtmp(b[m])
                        }
                        k.status.src = b[m];
                        k.status.format[m] = !0;
                        k.status.formatType = m;
                        return !1
                    }
                }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
            } catch (f) {
                this._flashError(f)
            }
        },_flash_resetMedia: function() {
            this.internal.flash.jq.css({width: "0px",height: "0px"});
            this._flash_pause(NaN)
        },_flash_clearMedia: function() {
            try {
                this._getMovie().fl_clearMedia()
            } catch (b) {
                this._flashError(b)
            }
        },_flash_load: function() {
            try {
                this._getMovie().fl_load()
            } catch (b) {
                this._flashError(b)
            }
            this.status.waitForLoad = !1
        },_flash_play: function(k) {
            try {
                this._getMovie().fl_play(k)
            } catch (f) {
                this._flashError(f)
            }
            this.status.waitForLoad = !1;
            this._flash_checkWaitForPlay()
        },_flash_pause: function(k) {
            try {
                this._getMovie().fl_pause(k)
            } catch (f) {
                this._flashError(f)
            }
            0 < k && (this.status.waitForLoad = !1, this._flash_checkWaitForPlay())
        },_flash_playHead: function(k) {
            try {
                this._getMovie().fl_play_head(k)
            } catch (f) {
                this._flashError(f)
            }
            this.status.waitForLoad || this._flash_checkWaitForPlay()
        },_flash_checkWaitForPlay: function() {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.flash.jq.css({width: this.status.width,height: this.status.height})))
        },_flash_volume: function(k) {
            try {
                this._getMovie().fl_volume(k)
            } catch (f) {
                this._flashError(f)
            }
        },_flash_mute: function(k) {
            try {
                this._getMovie().fl_mute(k)
            } catch (f) {
                this._flashError(f)
            }
        },_getMovie: function() {
            return document[this.internal.flash.id]
        },_getFlashPluginVersion: function() {
            var k = 0, f;
            if (window.ActiveXObject) {
                try {
                    if (f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                        var m = f.GetVariable("$version");
                        m && (m = m.split(" ")[1].split(","), k = parseInt(m[0], 10) + "." + parseInt(m[1], 10))
                    }
                } catch (l) {
                }
            } else {
                navigator.plugins && 0 < navigator.mimeTypes.length && (f = navigator.plugins["Shockwave Flash"]) && (k = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1"))
            }
            return 1 * k
        },_checkForFlash: function(k) {
            var f = !1;
            this._getFlashPluginVersion() >= k && (f = !0);
            return f
        },_validString: function(b) {
            return b && "string" === typeof b
        },_limitValue: function(k, f, l) {
            return k < f ? f : k > l ? l : k
        },_urlNotSetError: function(b) {
            this._error({type: d.jPlayer.error.URL_NOT_SET,context: b,message: d.jPlayer.errorMsg.URL_NOT_SET,hint: d.jPlayer.errorHint.URL_NOT_SET})
        },_flashError: function(b) {
            var f;
            f = this.internal.ready ? "FLASH_DISABLED" : "FLASH";
            this._error({type: d.jPlayer.error[f],context: this.internal.flash.swf,message: d.jPlayer.errorMsg[f] + b.message,hint: d.jPlayer.errorHint[f]});
            this.internal.flash.jq.css({width: "1px",height: "1px"})
        },_error: function(b) {
            this._trigger(d.jPlayer.event.error, b);
            this.options.errorAlerts && this._alert("Error!" + (b.message ? "\n" + b.message : "") + (b.hint ? "\n" + b.hint : "") + "\nContext: " + b.context)
        },_warning: function(b) {
            this._trigger(d.jPlayer.event.warning, g, b);
            this.options.warningAlerts && this._alert("Warning!" + (b.message ? "\n" + b.message : "") + (b.hint ? "\n" + b.hint : "") + "\nContext: " + b.context)
        },_alert: function(b) {
            b = "jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + b;
            this.options.consoleAlerts ? console && console.log && console.log(b) : alert(b)
        },_emulateHtmlBridge: function() {
            var b = this;
            d.each(d.jPlayer.emulateMethods.split(/\s+/g), function(f, k) {
                b.internal.domNode[k] = function(l) {
                    b[k](l)
                }
            });
            d.each(d.jPlayer.event, function(l, k) {
                var f = !0;
                d.each(d.jPlayer.reservedEvent.split(/\s+/g), function(n, m) {
                    if (m === l) {
                        return f = !1
                    }
                });
                f && b.element.bind(k + ".jPlayer.jPlayerHtml", function() {
                    b._emulateHtmlUpdate();
                    var m = document.createEvent("Event");
                    m.initEvent(l, !1, !0);
                    b.internal.domNode.dispatchEvent(m)
                })
            })
        },_emulateHtmlUpdate: function() {
            var b = this;
            d.each(d.jPlayer.emulateStatus.split(/\s+/g), function(f, k) {
                b.internal.domNode[k] = b.status[k]
            });
            d.each(d.jPlayer.emulateOptions.split(/\s+/g), function(f, k) {
                b.internal.domNode[k] = b.options[k]
            })
        },_destroyHtmlBridge: function() {
            var b = this;
            this.element.unbind(".jPlayerHtml");
            d.each((d.jPlayer.emulateMethods + " " + d.jPlayer.emulateStatus + " " + d.jPlayer.emulateOptions).split(/\s+/g), function(f, k) {
                delete b.internal.domNode[k]
            })
        }};
    d.jPlayer.error = {FLASH: "e_flash",FLASH_DISABLED: "e_flash_disabled",NO_SOLUTION: "e_no_solution",NO_SUPPORT: "e_no_support",URL: "e_url",URL_NOT_SET: "e_url_not_set",VERSION: "e_version"};
    d.jPlayer.errorMsg = {FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",URL: "Media URL could not be loaded.",URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",VERSION: "jPlayer " + d.jPlayer.prototype.version.script + " needs Jplayer.swf version " + d.jPlayer.prototype.version.needFlash + " but found "};
    d.jPlayer.errorHint = {FLASH: "Check your swfPath option and that Jplayer.swf is there.",FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",NO_SOLUTION: "Review the jPlayer options: support and supplied.",NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",URL: "Check media URL is valid.",URL_NOT_SET: "Use setMedia() to set the media URL.",VERSION: "Update jPlayer files."};
    d.jPlayer.warning = {CSS_SELECTOR_COUNT: "e_css_selector_count",CSS_SELECTOR_METHOD: "e_css_selector_method",CSS_SELECTOR_STRING: "e_css_selector_string",OPTION_KEY: "e_option_key"};
    d.jPlayer.warningMsg = {CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",OPTION_KEY: "The option requested in jPlayer('option') is undefined."};
    d.jPlayer.warningHint = {CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",CSS_SELECTOR_METHOD: "Check your method name.",CSS_SELECTOR_STRING: "Check your css selector is a string.",OPTION_KEY: "Check your option name."}
});
define("util/audio/audioPlayer", ["jquery", "underscore", "marionette", "util/bandUtil", "libs/jquery/external/jquery.jplayer"], function(e, d, f, c) {
    var b = f.Controller.extend({_SWF_PATH: resBaseUrl + "/swf/Jplayer.swf",initialize: function(g) {
            this.el = g.el;
            this.audioFileUrl = g.audioFileUrl;
            this.el.jPlayer({ready: d.bind(function() {
                    this.setMedia(this.audioFileUrl);
                    this.trigger("ready")
                }, this),supplied: "m4a",swfPath: this._SWF_PATH});
            this._attachEventListener()
        },_attachEventListener: function() {
            this.el.on(e.jPlayer.event.progress, d.bind(function(g) {
                this.trigger("progress", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.timeupdate, d.bind(function(g) {
                this.trigger("timeupdate", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.error, d.bind(function(g) {
                this.trigger("error", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.abort, d.bind(function(g) {
                this.trigger("abort", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.pause, d.bind(function(g) {
                this.trigger("pause", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.stop, d.bind(function(g) {
                this.trigger("stop", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.play, d.bind(function(g) {
                this.el.jPlayer("tellOthers", "stop");
                this.trigger("play", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.ended, d.bind(function(g) {
                this.trigger("ended", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.loadeddata, d.bind(function(g) {
                this.trigger("loadeddata", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.loadedmetadata, d.bind(function(g) {
                this.trigger("loadedmetadata", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.seeking, d.bind(function(g) {
                this.trigger("seeking", g.jPlayer)
            }, this));
            this.el.on(e.jPlayer.event.seeked, d.bind(function(g) {
                this.trigger("seeked", g.jPlayer)
            }, this))
        },setMedia: function(g) {
            this.audioFileUrl = g;
            this.el.jPlayer("setMedia", {m4a: this.audioFileUrl})
        },play: function(g) {
            this.el.jPlayer("play", g)
        },pause: function(g) {
            this.el.jPlayer("pause", g)
        },stop: function() {
            this.el.jPlayer("stop")
        },destroy: function() {
            this.el.off();
            this.el.jPlayer("destroy")
        }});
    return b
});
define("util/audio/audioPlayerView", ["jquery", "underscore", "marionette", "text!util/audio/audioPlayerTemplate.html", "util/bandUtil", "util/audio/audioPlayer", "util/customStringUtil"], function(g, e, j, b, d, c, f) {
    var h = j.ItemView.extend({template: e.template(b),className: "voice_box stop",tagName: "span",events: {"click a.player_status": function(k) {
                this.togglePlayAudio();
                return false
            }},ui: {audioPlayer: "._audio_player",audioMin: ".time_txt span.minutes",audioSec: ".time_txt span.second"},initialize: function(k) {
            this.audioFileUrl = k.audioFileUrl;
            this.totalDuration = k.totalDuration
        },_initAudioPlayer: function() {
            this.audioPlayer = new c({el: this.ui.audioPlayer,audioFileUrl: this.audioFileUrl});
            this.audioPlayer.on("timeupdate", e.bind(function(k) {
                if (k.status.duration > 0 || k.status.currentTime > 0) {
                    this.updateTime(k.status.duration, k.status.currentTime)
                }
            }, this));
            this.audioPlayer.on("pause", e.bind(function(k) {
                this._stop()
            }, this));
            this.audioPlayer.on("ended", e.bind(function(k) {
                this._stop()
            }, this));
            this.ui.audioPlayer.find("img").hide();
            if (this.totalDuration) {
                this.updateTime(this.totalDuration, 0)
            }
        },updateTime: function(k, l) {
            var o = k - l;
            var m = f.zeropadWithParseInt(o / 60, 1);
            var n = f.zeropadWithParseInt(o % 60, 2);
            this.ui.audioMin.text(m);
            this.ui.audioSec.text(n)
        },togglePlayAudio: function() {
            var k = this.$el.hasClass("stop");
            if (k) {
                this._play()
            } else {
                this._stop()
            }
        },_play: function() {
            this.audioPlayer.play();
            this.$el.removeClass("stop")
        },_stop: function() {
            this.audioPlayer.stop();
            this.$el.addClass("stop")
        },onRender: function() {
            this._initAudioPlayer()
        },onBeforeClose: function() {
            this.audioPlayer.destroy()
        }});
    return h
});
define("util/audio/bandAudioPlayerCreator", ["jquery", "underscore", "marionette", "util/bandUtil", "util/audio/audioApiClient", "util/audio/audioPlayerView"], function(f, d, h, c, b, g) {
    var e = h.Controller.extend({createByComment: function(j, k, l) {
            b.requestAudioUrlByComment(j, {success: d.bind(function(m) {
                    this._createAndAttachEvent(m.audio_url, j.get("audio_duration"), k, l)
                }, this)})
        },createByChatting: function(j, m, k, l) {
            b.requestAudioUrlByChatting(j, m, {success: d.bind(function(n) {
                    this._createAndAttachEvent(n.audio_url, m.get("extras").audio_duration, k, l)
                }, this)})
        },_createAndAttachEvent: function(m, n, k, l) {
            var j = new g({audioFileUrl: m,totalDuration: n});
            j.render();
            if (l) {
                j.listenTo(l, "close", function() {
                    j.close()
                })
            }
            k.append(j.$el)
        }});
    return new e()
});
define("chat/views/chattingMessageItemView", ["jquery", "underscore", "marionette", "text!chat/templates/messageTemplate.html", "text!chat/templates/systemMessageTemplate.html", "chat/controllers/messageBodyRenderer", "profile/controllers/profileOpener", "loginUserData", "localize/reslang", "photo/controllers/photoViewerOpener", "bandConstants", "util/bandUtil", "util/audio/bandAudioPlayerCreator", "module/imageLoader"], function(e, p, j, c, b, k, o, g, r, f, h, l, d, n) {
    var m = j.ItemView.extend({className: function() {
            var s = "log_wrap";
            if (this.model.isSystemMessage()) {
                s += this._getClassNameByEvent()
            } else {
                s += this._getClassNameByUser()
            }
            return s
        },events: {"click span.pf_img": function(s) {
                if (this.writer) {
                    o.showProfile(this.chattingChannel.get("band_no"), this.writer.get("user_no"))
                }
                return false
            },"click a.image_clip": function(v) {
                var s = this.model.getPhotoSize();
                if (!!s) {
                    f.openPopup(this.model.get("extras").url, s.width, s.height)
                }
                return false
            },"click a.third_party_link[href='#']": function(s) {
                alert(r.STR("pcweb.noui.js.alert.not_supported_in_pc"));
                return false
            }},triggers: {"click ._report_button": "report"},modelEvents: {"change:read_count": function(s, v) {
                this._updateReadCountUI()
            }},ui: {readCount: "span.msg_aside span.read",imageClip: "a.image_clip",messageBodyWrap: "._message_body_wrap",needLoaderImg: "img._loader"},initialize: function(s) {
            this.MESSAGE_TEMPLATE = {};
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.NORMAL] = c;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.STICKER] = c;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.PHOTO] = c;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.THIRD_PARTY_GIFT] = c;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.THIRD_PARTY] = c;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.AUDIO_MESSAGE] = c;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.INVITE] = b;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.QUIT] = b;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.CHANGE_MESSAGE_PERIOD] = b;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.OLD_APP_USER] = b;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.NOT_READ_MSG] = b;
            this.MESSAGE_TEMPLATE[h.CHAT.MESSAGE_TYPE.DATE_MSG] = b;
            this.writer = s.writer;
            this.chattingChannel = s.chattingChannel;
            this.template = p.template(this.MESSAGE_TEMPLATE[this.model.get("type")] || b)
        },_updateReadCountUI: function() {
            var s = this.model.get("read_count");
            if (s > 1) {
                this.ui.readCount.text(r.STR("pcweb.chat.chatmessage.label.read_count", s - 1))
            }
        },getMessageData: function() {
            if (this.model.isSystemMessage()) {
                return this._createSystemMessageRenderData()
            } else {
                return this._createChatMessageRenderData()
            }
        },_getClassNameByUser: function() {
            if (this._isMyMessage()) {
                return " log_my"
            } else {
                return " log_friend"
            }
        },_getClassNameByEvent: function() {
            if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.NOT_READ_MSG) {
                return " log_event log_new"
            }
            return " log_event"
        },_isMyMessage: function() {
            return this.options.writer && g.getUserID() == this.options.writer.get("id")
        },_createSystemMessageRenderData: function() {
            var s = "";
            if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.INVITE) {
                s = r.STR("pcweb.noui.js.chat.msg_invite", this.model.get("extras").inviter.name, p.pluck(this.model.get("extras").invitees, "name").join(","))
            } else {
                if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.QUIT) {
                    s = r.STR("pcweb.noui.js.chat.msg_quit_room", this.model.get("extras").users[0].name)
                } else {
                    if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.CHANGE_MESSAGE_PERIOD) {
                        s = r.STR("pcweb.noui.js.chat.msg_change_message_period_" + this.model.get("extras").message_period, this.model.get("extras").name)
                    } else {
                        if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.OLD_APP_USER) {
                            s = r.STR("pcweb.noui.js.chat.msg_old_app_user", this.model.get("extras").users[0].name)
                        } else {
                            if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.DATE_MSG) {
                                s = this.model.get("message")
                            } else {
                                if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.NOT_READ_MSG) {
                                    s = this.model.get("message")
                                }
                            }
                        }
                    }
                }
            }
            return {message: s,notifiable: false}
        },_createChatMessageRenderData: function() {
            var s = "";
            if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.STICKER) {
                s = " msg_sticker"
            } else {
                if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.PHOTO) {
                    s = " msg_photo"
                } else {
                    if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.AUDIO_MESSAGE) {
                        s = " msg_voice"
                    } else {
                        if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.THIRD_PARTY) {
                            s = " log_3rd"
                        } else {
                            if (this.model.get("type") == h.CHAT.MESSAGE_TYPE.THIRD_PARTY_GIFT) {
                                s = " log_3rd"
                            }
                        }
                    }
                }
            }
            var x = k.createMessageBody(this.model, this._isMyMessage());
            var w = window.resBaseUrl + "/images/template/profile_60x60.gif";
            var v = e.extend({name: ""}, this.writer && this.writer.toJSON && this.writer.toJSON());
            v.face = l.makeThumbnailUrl(v.face || w, "s75");
            return {message: this.model.toJSON(),writer: v,msgOption: s,messageBody: x,notifiable: true,reportable: this.model.isReportableMessage() && !this._isMyMessage()}
        },serializeData: function() {
            return this.getMessageData()
        },_renderAudioPlayer: function() {
            var s = this.model.get("type") == h.CHAT.MESSAGE_TYPE.AUDIO_MESSAGE;
            if (s) {
                d.createByChatting(this.chattingChannel, this.model, this.ui.messageBodyWrap, this)
            }
        },_loadPhotoMessage: function() {
            n.loadImage(this.ui.needLoaderImg)
        },onRender: function() {
            this._updateReadCountUI();
            this._renderAudioPlayer();
            this._loadPhotoMessage()
        }});
    return m
});
define("chat/models/chattingMessageModel", ["jquery", "underscore", "backbone"], function(d, b, e) {
    var c = e.Model.extend({idAttribute: "id",defaults: {},initialize: function(f) {
            if (d.inArray(this.get("type"), [10, 11]) != -1) {
                this.set("extras", this.get("extras") || {});
                this.get("extras").url = this.get("extras").url || "";
                this.get("extras").sizes = this.get("extras").sizes || {pc: "0,0"};
                this.get("extras").sizes.pc = this.get("extras").sizes.pc || this.get("extras").sizes.non_retina
            }
        },isDifferentDate: function(f) {
            var g = new Date(this.get("created_at"));
            var h = new Date(f.get("created_at"));
            return g.getFullYear() != h.getFullYear() || g.getMonth() != h.getMonth() || g.getDate() != h.getDate()
        },isSystemMessage: function() {
            return d.inArray(this.get("type") * 1, [1, 10, 11, 12, 13, 14]) == -1
        },isReportableMessage: function() {
            return b.contains([1, 11, 14], this.get("type") * 1)
        },getPhotoSize: function() {
            var g = this.get("extras").size;
            if (/^\d+,\d+$/.test(g)) {
                var f = g.split(",");
                return {width: f[0],height: f[1]}
            }
        },getMessageId: function() {
            return this.get("id")
        }});
    return c
});
define("text!chat/templates/logPreviousTemplate.html", [], function() {
    return '<div class="log_wrap log_previous">\n    <a style="" href="#" class="log_inner"><span class="txt"><%-G.STR(\'pcweb.chat.chatroom.btn.more_previous\')%></span></a>\n</div>'
});
define("chat/views/chattingMessageListView", ["jquery", "underscore", "marionette", "chat/views/chattingMessageItemView", "chat/models/chattingMessageModel", "text!chat/templates/logPreviousTemplate.html", "localize/reslang", "bandConstants"], function(c, h, f, g, d, b, j, e) {
    var k = f.CollectionView.extend({_MIN_UNREAD_MESSAGE_DISPLAY_COUNT: 7,className: "_chat_list_container",triggers: {"click div.log_previous": "click:previous"},itemView: g,itemViewOptions: function(m, l) {
            return {writer: this.chattingUserCollection.where({id: m.get("writer_id")})[0],chattingChannel: this.chattingChannel}
        },collectionEvents: {"add:prevMessages": function(l) {
                this._hidePreviousBtnIfBeginRoom(l)
            }},initialize: function(l) {
            this.chattingUserCollection = l.chattingUserCollection;
            this.chattingChannel = l.chattingChannel;
            this.lastMessageNo = l.lastMessageNo
        },_hidePreviousBtnIfBeginRoom: function(l) {
            if (l.length < 20) {
                this.logPreviousEl.hide();
                this.$el.addClass("eoc")
            }
        },_createPreviousEl: function() {
            return c(h.template(b)())
        },_prependView: function(l) {
            if (!this.logPreviousEl) {
                this.logPreviousEl = this._createPreviousEl();
                this.$el.prepend(this.logPreviousEl)
            }
            this.logPreviousEl.after(l.el);
            this._hidePreviousBtnIfBeginRoom(this.collection)
        },_renderDateView: function(n, m) {
            if (!n || n.model.isDifferentDate(m.model)) {
                var l = new g({model: new d({message: j.getDisplayTime(new Date(m.model.get("created_at")), "B"),created_at: m.model.get("created_at"),type: e.CHAT.MESSAGE_TYPE.DATE_MSG})});
                if (!n) {
                    if (this.firstLineDateView) {
                        this.firstLineDateView.close()
                    }
                    this.firstLineDateView = l
                }
                m.$el.before(l.render().$el);
                l.listenTo(this, "close", l.close, l)
            }
        },_renderUnreadMessageView: function() {
            if (this.collection.length > 0 && this.collection.last().get("id") * 1 - this.lastMessageNo * 1 > this._MIN_UNREAD_MESSAGE_DISPLAY_COUNT) {
                var n = new g({model: new d({message: j.STR("pcweb.noui.js.chat.msg_unread"),type: e.CHAT.MESSAGE_TYPE.NOT_READ_MSG})});
                n.render();
                var l = this.collection.get(this.lastMessageNo);
                var m = l ? this.children.findByModel(l) : null;
                if (m) {
                    m.$el.after(n.$el)
                } else {
                    this._prependView(n)
                }
                setTimeout(h.bind(function() {
                    this.trigger("render:unreadview", n)
                }, this), 0)
            }
            setTimeout(h.bind(function() {
                if (!!n) {
                }
            }, this), 0)
        },onShow: function() {
            this._renderUnreadMessageView()
        },appendHtml: function(l, n, m) {
            if (m === 0) {
                this._prependView(n);
                this._renderDateView(null, n)
            } else {
                var o = l.children.findByModel(this.collection.at(m - 1));
                o.$el.after(n.el);
                this._renderDateView(o, n)
            }
        },onAfterItemAdded: function(l) {
            if (this.collection.last() == l.model) {
                this.trigger("add:newMessage", l)
            }
        }});
    return k
});
define("text!chat/templates/chattingMessageInputLayerTemplate.html", [], function() {
    return '<div class="chat_btn_wrap">\n\t<span class="pop_photo"><input type="file" class="find_photo" id="btn_chat_pop_photo_upload"></span>\n\t<button class="pop_sticker"><%-G.STR(\'pcweb.chat.chatinput.alt.add_sticker\')%></button>\n</div>\n<div class="_sticker_cont_wrap">\n</div>\t\n<div class="msg_form">\t\n\t<textarea type="input" name="msg_input" class="msg_input _use_keyup_event" placeholder="<%-G.STR(\'pcweb.chat.chatinput.placeholder.chat_input\')%>"/>\n\t<input type="submit" class="msg_sutmit" value="<%-G.STR(\'pcweb.chat.chatinput.btn.send\')%>" />\n</div>'
});
define("text!sticker/templates/stickerSelectLayoutTemplate.html", [], function() {
    return '  <div class="_sticker_header">\n  </div>\n  <div class="_sticker_collect">\n  </div>\n  <div class="_sticker_selected">\n  </div>\n  <div class="wrap_knob"></div>'
});
define("text!sticker/templates/stickerCollectionTemplate.html", [], function() {
    return '<style type="text/css">\n.<%-stickerAreaID%>.sticker_list li button{background-image:url(http://s.cmstatic.net<%=spriteImgUrl%>);}\n</style>\n<div class="sticker_list <%-stickerAreaID%> ">\n\t<ul>\n\t</ul>\n</div>'
});
define("text!sticker/templates/stickerTemplate.html", [], function() {
    return '<button type="button" class="thumb stkr_<%-index%> _prevent_context"><span class="alt"><%-packNo%>-<%-no%></span></button>'
});
define("sticker/views/stickerView", ["jquery", "underscore", "marionette", "text!sticker/templates/stickerTemplate.html"], function(e, c, f, d) {
    var b = f.ItemView.extend({template: c.template(d),tagName: "li",triggers: {click: "click",touchstart: "touchstart"},serializeData: function() {
            return this.model.toJSON()
        }});
    return b
});
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(e) {
    var c = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks) {
        for (var b = c.length; b; ) {
            e.event.fixHooks[c[--b]] = e.event.mouseHooks
        }
    }
    e.event.special.mousewheel = {setup: function() {
            if (this.addEventListener) {
                for (var f = c.length; f; ) {
                    this.addEventListener(c[--f], d, false)
                }
            } else {
                this.onmousewheel = d
            }
        },teardown: function() {
            if (this.removeEventListener) {
                for (var f = c.length; f; ) {
                    this.removeEventListener(c[--f], d, false)
                }
            } else {
                this.onmousewheel = null
            }
        }};
    e.fn.extend({mousewheel: function(f) {
            return f ? this.bind("mousewheel", f) : this.trigger("mousewheel")
        },unmousewheel: function(f) {
            return this.unbind("mousewheel", f)
        }});
    function d(l) {
        var j = l || window.event, h = [].slice.call(arguments, 1), m = 0, k = true, g = 0, f = 0;
        l = e.event.fix(j);
        l.type = "mousewheel";
        if (j.wheelDelta) {
            m = j.wheelDelta / 120
        }
        if (j.detail) {
            m = -j.detail / 3
        }
        f = m;
        if (j.axis !== undefined && j.axis === j.HORIZONTAL_AXIS) {
            f = 0;
            g = -1 * m
        }
        if (j.wheelDeltaY !== undefined) {
            f = j.wheelDeltaY / 120
        }
        if (j.wheelDeltaX !== undefined) {
            g = -1 * j.wheelDeltaX / 120
        }
        h.unshift(l, m, g, f);
        return (e.event.dispatch || e.event.handle).apply(this, h)
    }
})(jQuery);
define("libs/jquery/external/jquery.mousewheel", ["jquery"], (function(b) {
    return function() {
        var c, d;
        return c || b.jQuery
    }
}(this)));
(function(d) {
    var c = {init: function(f) {
            var g = {set_width: false,set_height: false,horizontalScroll: false,scrollInertia: 950,mouseWheel: true,mouseWheelPixels: "auto",autoDraggerLength: true,autoHideScrollbar: false,alwaysShowScrollbar: false,snapAmount: null,snapOffset: 0,scrollButtons: {enable: false,scrollType: "continuous",scrollSpeed: "auto",scrollAmount: 40},advanced: {updateOnBrowserResize: true,updateOnContentResize: false,autoExpandHorizontalScroll: false,autoScrollOnFocus: true,normalizeMouseWheelDelta: false},contentTouchScroll: true,callbacks: {onScrollStart: function() {
                    },onScroll: function() {
                    },onTotalScroll: function() {
                    },onTotalScrollBack: function() {
                    },onTotalScrollOffset: 0,onTotalScrollBackOffset: 0,whileScrolling: function() {
                    }},theme: "light"}, f = d.extend(true, g, f);
            return this.each(function() {
                var o = d(this);
                if (f.set_width) {
                    o.css("width", f.set_width)
                }
                if (f.set_height) {
                    o.css("height", f.set_height)
                }
                if (!d(document).data("mCustomScrollbar-index")) {
                    d(document).data("mCustomScrollbar-index", "1")
                } else {
                    var N = parseInt(d(document).data("mCustomScrollbar-index"));
                    d(document).data("mCustomScrollbar-index", N + 1)
                }
                o.wrapInner("<div class='mCustomScrollBox mCS-" + f.theme + "' id='mCSB_" + d(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + d(document).data("mCustomScrollbar-index"));
                var h = o.children(".mCustomScrollBox");
                if (f.horizontalScroll) {
                    h.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                    var m = h.children(".mCSB_h_wrapper");
                    m.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({width: m.children().outerWidth(),position: "relative"}).unwrap()
                } else {
                    h.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
                }
                var r = h.children(".mCSB_container");
                if (d.support.touch) {
                    r.addClass("mCS_touch")
                }
                r.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                var n = h.children(".mCSB_scrollTools"), j = n.children(".mCSB_draggerContainer"), v = j.children(".mCSB_dragger");
                if (f.horizontalScroll) {
                    v.data("minDraggerWidth", v.width())
                } else {
                    v.data("minDraggerHeight", v.height())
                }
                if (f.scrollButtons.enable) {
                    if (f.horizontalScroll) {
                        n.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")
                    } else {
                        n.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")
                    }
                }
                h.bind("scroll", function() {
                    if (!o.is(".mCS_disabled")) {
                        h.scrollTop(0).scrollLeft(0)
                    }
                });
                o.data({mCS_Init: true,mCustomScrollbarIndex: d(document).data("mCustomScrollbar-index"),horizontalScroll: f.horizontalScroll,scrollInertia: f.scrollInertia,scrollEasing: "mcsEaseOut",mouseWheel: f.mouseWheel,mouseWheelPixels: f.mouseWheelPixels,autoDraggerLength: f.autoDraggerLength,autoHideScrollbar: f.autoHideScrollbar,alwaysShowScrollbar: f.alwaysShowScrollbar,snapAmount: f.snapAmount,snapOffset: f.snapOffset,scrollButtons_enable: f.scrollButtons.enable,scrollButtons_scrollType: f.scrollButtons.scrollType,scrollButtons_scrollSpeed: f.scrollButtons.scrollSpeed,scrollButtons_scrollAmount: f.scrollButtons.scrollAmount,autoExpandHorizontalScroll: f.advanced.autoExpandHorizontalScroll,autoScrollOnFocus: f.advanced.autoScrollOnFocus,normalizeMouseWheelDelta: f.advanced.normalizeMouseWheelDelta,contentTouchScroll: f.contentTouchScroll,onScrollStart_Callback: f.callbacks.onScrollStart,onScroll_Callback: f.callbacks.onScroll,onTotalScroll_Callback: f.callbacks.onTotalScroll,onTotalScrollBack_Callback: f.callbacks.onTotalScrollBack,onTotalScroll_Offset: f.callbacks.onTotalScrollOffset,onTotalScrollBack_Offset: f.callbacks.onTotalScrollBackOffset,whileScrolling_Callback: f.callbacks.whileScrolling,bindEvent_scrollbar_drag: false,bindEvent_content_touch: false,bindEvent_scrollbar_click: false,bindEvent_mousewheel: false,bindEvent_buttonsContinuous_y: false,bindEvent_buttonsContinuous_x: false,bindEvent_buttonsPixels_y: false,bindEvent_buttonsPixels_x: false,bindEvent_focusin: false,bindEvent_autoHideScrollbar: false,mCSB_buttonScrollRight: false,mCSB_buttonScrollLeft: false,mCSB_buttonScrollDown: false,mCSB_buttonScrollUp: false});
                if (f.horizontalScroll) {
                    if (o.css("max-width") !== "none") {
                        if (!f.advanced.updateOnContentResize) {
                            f.advanced.updateOnContentResize = true
                        }
                    }
                } else {
                    if (o.css("max-height") !== "none") {
                        var x = false, w = parseInt(o.css("max-height"));
                        if (o.css("max-height").indexOf("%") >= 0) {
                            x = w, w = o.parent().height() * x / 100
                        }
                        o.css("overflow", "hidden");
                        h.css("max-height", w)
                    }
                }
                o.mCustomScrollbar("update");
                if (f.advanced.updateOnBrowserResize) {
                    var k, l = d(window).width(), O = d(window).height();
                    d(window).bind("resize." + o.data("mCustomScrollbarIndex"), function() {
                        if (k) {
                            clearTimeout(k)
                        }
                        k = setTimeout(function() {
                            if (!o.is(".mCS_disabled") && !o.is(".mCS_destroyed")) {
                                var Q = d(window).width(), P = d(window).height();
                                if (l !== Q || O !== P) {
                                    if (o.css("max-height") !== "none" && x) {
                                        h.css("max-height", o.parent().height() * x / 100)
                                    }
                                    o.mCustomScrollbar("update");
                                    l = Q;
                                    O = P
                                }
                            }
                        }, 150)
                    })
                }
                if (f.advanced.updateOnContentResize) {
                    var s;
                    if (f.horizontalScroll) {
                        var p = r.outerWidth()
                    } else {
                        var p = r.outerHeight()
                    }
                    s = setInterval(function() {
                        if (f.horizontalScroll) {
                            if (f.advanced.autoExpandHorizontalScroll) {
                                r.css({position: "absolute",width: "auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width: r.outerWidth(),position: "relative"}).unwrap()
                            }
                            var P = r.outerWidth()
                        } else {
                            var P = r.outerHeight()
                        }
                        if (P != p) {
                            o.mCustomScrollbar("update");
                            p = P
                        }
                    }, 300)
                }
            })
        },update: function() {
            var p = d(this), m = p.children(".mCustomScrollBox"), v = m.children(".mCSB_container");
            v.removeClass("mCS_no_scrollbar");
            p.removeClass("mCS_disabled mCS_destroyed");
            m.scrollTop(0).scrollLeft(0);
            var S = m.children(".mCSB_scrollTools"), r = S.children(".mCSB_draggerContainer"), o = r.children(".mCSB_dragger");
            if (p.data("horizontalScroll")) {
                var U = S.children(".mCSB_buttonLeft"), N = S.children(".mCSB_buttonRight"), g = m.width();
                if (p.data("autoExpandHorizontalScroll")) {
                    v.css({position: "absolute",width: "auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width: v.outerWidth(),position: "relative"}).unwrap()
                }
                var T = v.outerWidth()
            } else {
                var Q = S.children(".mCSB_buttonUp"), h = S.children(".mCSB_buttonDown"), w = m.height(), k = v.outerHeight()
            }
            if (k > w && !p.data("horizontalScroll")) {
                S.css("display", "block");
                var x = r.height();
                if (p.data("autoDraggerLength")) {
                    var O = Math.round(w / k * x), n = o.data("minDraggerHeight");
                    if (O <= n) {
                        o.css({height: n})
                    } else {
                        if (O >= x - 10) {
                            var s = x - 10;
                            o.css({height: s})
                        } else {
                            o.css({height: O})
                        }
                    }
                    o.children(".mCSB_dragger_bar").css({"line-height": o.height() + "px"})
                }
                var V = o.height(), R = (k - w) / (x - V);
                p.data("scrollAmount", R).mCustomScrollbar("scrolling", m, v, r, o, Q, h, U, N);
                var X = Math.abs(v.position().top);
                p.mCustomScrollbar("scrollTo", X, {scrollInertia: 0,trigger: "internal"})
            } else {
                if (T > g && p.data("horizontalScroll")) {
                    S.css("display", "block");
                    var j = r.width();
                    if (p.data("autoDraggerLength")) {
                        var l = Math.round(g / T * j), W = o.data("minDraggerWidth");
                        if (l <= W) {
                            o.css({width: W})
                        } else {
                            if (l >= j - 10) {
                                var f = j - 10;
                                o.css({width: f})
                            } else {
                                o.css({width: l})
                            }
                        }
                    }
                    var P = o.width(), R = (T - g) / (j - P);
                    p.data("scrollAmount", R).mCustomScrollbar("scrolling", m, v, r, o, Q, h, U, N);
                    var X = Math.abs(v.position().left);
                    p.mCustomScrollbar("scrollTo", X, {scrollInertia: 0,trigger: "internal"})
                } else {
                    m.unbind("mousewheel focusin");
                    if (p.data("horizontalScroll")) {
                        o.add(v).css("left", 0)
                    } else {
                        o.add(v).css("top", 0)
                    }
                    if (p.data("alwaysShowScrollbar")) {
                        if (!p.data("horizontalScroll")) {
                            o.css({height: r.height()})
                        } else {
                            if (p.data("horizontalScroll")) {
                                o.css({width: r.width()})
                            }
                        }
                    } else {
                        S.css("display", "none");
                        v.addClass("mCS_no_scrollbar")
                    }
                    p.data({bindEvent_mousewheel: false,bindEvent_focusin: false})
                }
            }
        },scrolling: function(k, v, p, m, T, g, W, R) {
            var n = d(this);
            if (!n.data("bindEvent_scrollbar_drag")) {
                var r, s, V, S, f;
                if (d.support.pointer) {
                    V = "pointerdown";
                    S = "pointermove";
                    f = "pointerup"
                } else {
                    if (d.support.msPointer) {
                        V = "MSPointerDown";
                        S = "MSPointerMove";
                        f = "MSPointerUp"
                    }
                }
                if (d.support.pointer || d.support.msPointer) {
                    m.bind(V, function(ad) {
                        ad.preventDefault();
                        n.data({on_drag: true});
                        m.addClass("mCSB_dragger_onDrag");
                        var ac = d(this), af = ac.offset(), ab = ad.originalEvent.pageX - af.left, ae = ad.originalEvent.pageY - af.top;
                        if (ab < ac.width() && ab > 0 && ae < ac.height() && ae > 0) {
                            r = ae;
                            s = ab
                        }
                    });
                    d(document).bind(S + "." + n.data("mCustomScrollbarIndex"), function(ad) {
                        ad.preventDefault();
                        if (n.data("on_drag")) {
                            var ac = m, af = ac.offset(), ab = ad.originalEvent.pageX - af.left, ae = ad.originalEvent.pageY - af.top;
                            Z(r, s, ae, ab)
                        }
                    }).bind(f + "." + n.data("mCustomScrollbarIndex"), function(x) {
                        n.data({on_drag: false});
                        m.removeClass("mCSB_dragger_onDrag")
                    })
                } else {
                    m.bind("mousedown touchstart", function(ad) {
                        ad.preventDefault();
                        ad.stopImmediatePropagation();
                        var ac = d(this), ag = ac.offset(), ab, af;
                        if (ad.type === "touchstart") {
                            var ae = ad.originalEvent.touches[0] || ad.originalEvent.changedTouches[0];
                            ab = ae.pageX - ag.left;
                            af = ae.pageY - ag.top
                        } else {
                            n.data({on_drag: true});
                            m.addClass("mCSB_dragger_onDrag");
                            ab = ad.pageX - ag.left;
                            af = ad.pageY - ag.top
                        }
                        if (ab < ac.width() && ab > 0 && af < ac.height() && af > 0) {
                            r = af;
                            s = ab
                        }
                    }).bind("touchmove", function(ad) {
                        ad.preventDefault();
                        ad.stopImmediatePropagation();
                        var ag = ad.originalEvent.touches[0] || ad.originalEvent.changedTouches[0], ac = d(this), af = ac.offset(), ab = ag.pageX - af.left, ae = ag.pageY - af.top;
                        Z(r, s, ae, ab)
                    });
                    d(document).bind("mousemove." + n.data("mCustomScrollbarIndex"), function(ad) {
                        if (n.data("on_drag")) {
                            var ac = m, af = ac.offset(), ab = ad.pageX - af.left, ae = ad.pageY - af.top;
                            Z(r, s, ae, ab)
                        }
                    }).bind("mouseup." + n.data("mCustomScrollbarIndex"), function(x) {
                        n.data({on_drag: false});
                        m.removeClass("mCSB_dragger_onDrag")
                    })
                }
                n.data({bindEvent_scrollbar_drag: true})
            }
            function Z(ac, ad, ae, ab) {
                if (n.data("horizontalScroll")) {
                    n.mCustomScrollbar("scrollTo", (m.position().left - (ad)) + ab, {moveDragger: true,trigger: "internal"})
                } else {
                    n.mCustomScrollbar("scrollTo", (m.position().top - (ac)) + ae, {moveDragger: true,trigger: "internal"})
                }
            }
            if (d.support.touch && n.data("contentTouchScroll")) {
                if (!n.data("bindEvent_content_touch")) {
                    var o, X, N, O, Q, Y, aa;
                    v.bind("touchstart", function(x) {
                        x.stopImmediatePropagation();
                        o = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                        X = d(this);
                        N = X.offset();
                        Q = o.pageX - N.left;
                        O = o.pageY - N.top;
                        Y = O;
                        aa = Q
                    });
                    v.bind("touchmove", function(x) {
                        x.preventDefault();
                        x.stopImmediatePropagation();
                        o = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                        X = d(this).parent();
                        N = X.offset();
                        Q = o.pageX - N.left;
                        O = o.pageY - N.top;
                        if (n.data("horizontalScroll")) {
                            n.mCustomScrollbar("scrollTo", aa - Q, {trigger: "internal"})
                        } else {
                            n.mCustomScrollbar("scrollTo", Y - O, {trigger: "internal"})
                        }
                    })
                }
            }
            if (!n.data("bindEvent_scrollbar_click")) {
                p.bind("click", function(ac) {
                    var x = (ac.pageY - p.offset().top) * n.data("scrollAmount"), ab = d(ac.target);
                    if (n.data("horizontalScroll")) {
                        x = (ac.pageX - p.offset().left) * n.data("scrollAmount")
                    }
                    if (ab.hasClass("mCSB_draggerContainer") || ab.hasClass("mCSB_draggerRail")) {
                        n.mCustomScrollbar("scrollTo", x, {trigger: "internal",scrollEasing: "draggerRailEase"})
                    }
                });
                n.data({bindEvent_scrollbar_click: true})
            }
            if (n.data("mouseWheel")) {
                if (!n.data("bindEvent_mousewheel")) {
                    k.bind("mousewheel", function(ae, ag) {
                        var ad, ac = n.data("mouseWheelPixels"), x = Math.abs(v.position().top), af = m.position().top, ab = p.height() - m.height();
                        if (n.data("normalizeMouseWheelDelta")) {
                            if (ag < 0) {
                                ag = -1
                            } else {
                                ag = 1
                            }
                        }
                        if (ac === "auto") {
                            ac = 100 + Math.round(n.data("scrollAmount") / 2)
                        }
                        if (n.data("horizontalScroll")) {
                            af = m.position().left;
                            ab = p.width() - m.width();
                            x = Math.abs(v.position().left)
                        }
                        if ((ag > 0 && af !== 0) || (ag < 0 && af !== ab)) {
                            ae.preventDefault();
                            ae.stopImmediatePropagation()
                        }
                        ad = x - (ag * ac);
                        n.mCustomScrollbar("scrollTo", ad, {trigger: "internal"})
                    });
                    n.data({bindEvent_mousewheel: true})
                }
            }
            if (n.data("scrollButtons_enable")) {
                if (n.data("scrollButtons_scrollType") === "pixels") {
                    if (n.data("horizontalScroll")) {
                        R.add(W).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", l, j);
                        n.data({bindEvent_buttonsContinuous_x: false});
                        if (!n.data("bindEvent_buttonsPixels_x")) {
                            R.bind("click", function(x) {
                                x.preventDefault();
                                w(Math.abs(v.position().left) + n.data("scrollButtons_scrollAmount"))
                            });
                            W.bind("click", function(x) {
                                x.preventDefault();
                                w(Math.abs(v.position().left) - n.data("scrollButtons_scrollAmount"))
                            });
                            n.data({bindEvent_buttonsPixels_x: true})
                        }
                    } else {
                        g.add(T).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", l, j);
                        n.data({bindEvent_buttonsContinuous_y: false});
                        if (!n.data("bindEvent_buttonsPixels_y")) {
                            g.bind("click", function(x) {
                                x.preventDefault();
                                w(Math.abs(v.position().top) + n.data("scrollButtons_scrollAmount"))
                            });
                            T.bind("click", function(x) {
                                x.preventDefault();
                                w(Math.abs(v.position().top) - n.data("scrollButtons_scrollAmount"))
                            });
                            n.data({bindEvent_buttonsPixels_y: true})
                        }
                    }
                    function w(x) {
                        if (!m.data("preventAction")) {
                            m.data("preventAction", true);
                            n.mCustomScrollbar("scrollTo", x, {trigger: "internal"})
                        }
                    }
                } else {
                    if (n.data("horizontalScroll")) {
                        R.add(W).unbind("click");
                        n.data({bindEvent_buttonsPixels_x: false});
                        if (!n.data("bindEvent_buttonsContinuous_x")) {
                            R.bind("mousedown touchstart MSPointerDown pointerdown", function(ab) {
                                ab.preventDefault();
                                var x = U();
                                n.data({mCSB_buttonScrollRight: setInterval(function() {
                                        n.mCustomScrollbar("scrollTo", Math.abs(v.position().left) + x, {trigger: "internal",scrollEasing: "easeOutCirc"})
                                    }, 17)})
                            });
                            var l = function(x) {
                                x.preventDefault();
                                clearInterval(n.data("mCSB_buttonScrollRight"))
                            };
                            R.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", l);
                            W.bind("mousedown touchstart MSPointerDown pointerdown", function(ab) {
                                ab.preventDefault();
                                var x = U();
                                n.data({mCSB_buttonScrollLeft: setInterval(function() {
                                        n.mCustomScrollbar("scrollTo", Math.abs(v.position().left) - x, {trigger: "internal",scrollEasing: "easeOutCirc"})
                                    }, 17)})
                            });
                            var j = function(x) {
                                x.preventDefault();
                                clearInterval(n.data("mCSB_buttonScrollLeft"))
                            };
                            W.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", j);
                            n.data({bindEvent_buttonsContinuous_x: true})
                        }
                    } else {
                        g.add(T).unbind("click");
                        n.data({bindEvent_buttonsPixels_y: false});
                        if (!n.data("bindEvent_buttonsContinuous_y")) {
                            g.bind("mousedown touchstart MSPointerDown pointerdown", function(ab) {
                                ab.preventDefault();
                                var x = U();
                                n.data({mCSB_buttonScrollDown: setInterval(function() {
                                        n.mCustomScrollbar("scrollTo", Math.abs(v.position().top) + x, {trigger: "internal",scrollEasing: "easeOutCirc"})
                                    }, 17)})
                            });
                            var P = function(x) {
                                x.preventDefault();
                                clearInterval(n.data("mCSB_buttonScrollDown"))
                            };
                            g.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", P);
                            T.bind("mousedown touchstart MSPointerDown pointerdown", function(ab) {
                                ab.preventDefault();
                                var x = U();
                                n.data({mCSB_buttonScrollUp: setInterval(function() {
                                        n.mCustomScrollbar("scrollTo", Math.abs(v.position().top) - x, {trigger: "internal",scrollEasing: "easeOutCirc"})
                                    }, 17)})
                            });
                            var h = function(x) {
                                x.preventDefault();
                                clearInterval(n.data("mCSB_buttonScrollUp"))
                            };
                            T.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", h);
                            n.data({bindEvent_buttonsContinuous_y: true})
                        }
                    }
                    function U() {
                        var x = n.data("scrollButtons_scrollSpeed");
                        if (n.data("scrollButtons_scrollSpeed") === "auto") {
                            x = Math.round((n.data("scrollInertia") + 100) / 40)
                        }
                        return x
                    }
                }
            }
            if (n.data("autoScrollOnFocus")) {
                if (!n.data("bindEvent_focusin")) {
                    k.bind("focusin", function() {
                        k.scrollTop(0).scrollLeft(0);
                        var x = d(document.activeElement);
                        if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                            var ad = v.position().top, ab = x.position().top, ac = k.height() - x.outerHeight();
                            if (n.data("horizontalScroll")) {
                                ad = v.position().left;
                                ab = x.position().left;
                                ac = k.width() - x.outerWidth()
                            }
                            if (ad + ab < 0 || ad + ab > ac) {
                                n.mCustomScrollbar("scrollTo", ab, {trigger: "internal"})
                            }
                        }
                    });
                    n.data({bindEvent_focusin: true})
                }
            }
            if (n.data("autoHideScrollbar") && !n.data("alwaysShowScrollbar")) {
                if (!n.data("bindEvent_autoHideScrollbar")) {
                    k.bind("mouseenter", function(x) {
                        k.addClass("mCS-mouse-over");
                        e.showScrollbar.call(k.children(".mCSB_scrollTools"))
                    }).bind("mouseleave touchend", function(x) {
                        k.removeClass("mCS-mouse-over");
                        if (x.type === "mouseleave") {
                            e.hideScrollbar.call(k.children(".mCSB_scrollTools"))
                        }
                    });
                    n.data({bindEvent_autoHideScrollbar: true})
                }
            }
        },scrollTo: function(f, g) {
            var k = d(this), r = {moveDragger: false,trigger: "external",callbacks: true,scrollInertia: k.data("scrollInertia"),scrollEasing: k.data("scrollEasing")}, g = d.extend(r, g), s, h = k.children(".mCustomScrollBox"), m = h.children(".mCSB_container"), w = h.children(".mCSB_scrollTools"), l = w.children(".mCSB_draggerContainer"), j = l.children(".mCSB_dragger"), N = draggerSpeed = g.scrollInertia, v, x, o, n;
            if (!m.hasClass("mCS_no_scrollbar")) {
                k.data({mCS_trigger: g.trigger});
                if (k.data("mCS_Init")) {
                    g.callbacks = false
                }
                if (f || f === 0) {
                    if (typeof (f) === "number") {
                        if (g.moveDragger) {
                            s = f;
                            if (k.data("horizontalScroll")) {
                                f = j.position().left * k.data("scrollAmount")
                            } else {
                                f = j.position().top * k.data("scrollAmount")
                            }
                            draggerSpeed = 0
                        } else {
                            s = f / k.data("scrollAmount")
                        }
                    } else {
                        if (typeof (f) === "string") {
                            var P;
                            if (f === "top") {
                                P = 0
                            } else {
                                if (f === "bottom" && !k.data("horizontalScroll")) {
                                    P = m.outerHeight() - h.height()
                                } else {
                                    if (f === "left") {
                                        P = 0
                                    } else {
                                        if (f === "right" && k.data("horizontalScroll")) {
                                            P = m.outerWidth() - h.width()
                                        } else {
                                            if (f === "first") {
                                                P = k.find(".mCSB_container").find(":first")
                                            } else {
                                                if (f === "last") {
                                                    P = k.find(".mCSB_container").find(":last")
                                                } else {
                                                    P = k.find(f)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (P.length === 1) {
                                if (k.data("horizontalScroll")) {
                                    f = P.position().left
                                } else {
                                    f = P.position().top
                                }
                                s = f / k.data("scrollAmount")
                            } else {
                                s = f = P
                            }
                        }
                    }
                    if (k.data("horizontalScroll")) {
                        if (k.data("onTotalScrollBack_Offset")) {
                            x = -k.data("onTotalScrollBack_Offset")
                        }
                        if (k.data("onTotalScroll_Offset")) {
                            n = h.width() - m.outerWidth() + k.data("onTotalScroll_Offset")
                        }
                        if (s < 0) {
                            s = f = 0;
                            clearInterval(k.data("mCSB_buttonScrollLeft"));
                            if (!x) {
                                v = true
                            }
                        } else {
                            if (s >= l.width() - j.width()) {
                                s = l.width() - j.width();
                                f = h.width() - m.outerWidth();
                                clearInterval(k.data("mCSB_buttonScrollRight"));
                                if (!n) {
                                    o = true
                                }
                            } else {
                                f = -f
                            }
                        }
                        var p = k.data("snapAmount");
                        if (p) {
                            f = Math.round(f / p) * p - k.data("snapOffset")
                        }
                        e.mTweenAxis.call(this, j[0], "left", Math.round(s), draggerSpeed, g.scrollEasing);
                        e.mTweenAxis.call(this, m[0], "left", Math.round(f), N, g.scrollEasing, {onStart: function() {
                                if (g.callbacks && !k.data("mCS_tweenRunning")) {
                                    O("onScrollStart")
                                }
                                if (k.data("autoHideScrollbar") && !k.data("alwaysShowScrollbar")) {
                                    e.showScrollbar.call(w)
                                }
                            },onUpdate: function() {
                                if (g.callbacks) {
                                    O("whileScrolling")
                                }
                            },onComplete: function() {
                                if (g.callbacks) {
                                    O("onScroll");
                                    if (v || (x && m.position().left >= x)) {
                                        O("onTotalScrollBack")
                                    }
                                    if (o || (n && m.position().left <= n)) {
                                        O("onTotalScroll")
                                    }
                                }
                                j.data("preventAction", false);
                                k.data("mCS_tweenRunning", false);
                                if (k.data("autoHideScrollbar") && !k.data("alwaysShowScrollbar")) {
                                    if (!h.hasClass("mCS-mouse-over")) {
                                        e.hideScrollbar.call(w)
                                    }
                                }
                            }})
                    } else {
                        if (k.data("onTotalScrollBack_Offset")) {
                            x = -k.data("onTotalScrollBack_Offset")
                        }
                        if (k.data("onTotalScroll_Offset")) {
                            n = h.height() - m.outerHeight() + k.data("onTotalScroll_Offset")
                        }
                        if (s < 0) {
                            s = f = 0;
                            clearInterval(k.data("mCSB_buttonScrollUp"));
                            if (!x) {
                                v = true
                            }
                        } else {
                            if (s >= l.height() - j.height()) {
                                s = l.height() - j.height();
                                f = h.height() - m.outerHeight();
                                clearInterval(k.data("mCSB_buttonScrollDown"));
                                if (!n) {
                                    o = true
                                }
                            } else {
                                f = -f
                            }
                        }
                        var p = k.data("snapAmount");
                        if (p) {
                            f = Math.round(f / p) * p - k.data("snapOffset")
                        }
                        e.mTweenAxis.call(this, j[0], "top", Math.round(s), draggerSpeed, g.scrollEasing);
                        e.mTweenAxis.call(this, m[0], "top", Math.round(f), N, g.scrollEasing, {onStart: function() {
                                if (g.callbacks && !k.data("mCS_tweenRunning")) {
                                    O("onScrollStart")
                                }
                                if (k.data("autoHideScrollbar") && !k.data("alwaysShowScrollbar")) {
                                    e.showScrollbar.call(w)
                                }
                            },onUpdate: function() {
                                if (g.callbacks) {
                                    O("whileScrolling")
                                }
                            },onComplete: function() {
                                if (g.callbacks) {
                                    O("onScroll");
                                    if (v || (x && m.position().top >= x)) {
                                        O("onTotalScrollBack")
                                    }
                                    if (o || (n && m.position().top <= n)) {
                                        O("onTotalScroll")
                                    }
                                }
                                j.data("preventAction", false);
                                k.data("mCS_tweenRunning", false);
                                if (k.data("autoHideScrollbar") && !k.data("alwaysShowScrollbar")) {
                                    if (!h.hasClass("mCS-mouse-over")) {
                                        e.hideScrollbar.call(w)
                                    }
                                }
                            }})
                    }
                    if (k.data("mCS_Init")) {
                        k.data({mCS_Init: false})
                    }
                }
            }
            function O(Q) {
                if (k.data("mCustomScrollbarIndex")) {
                    this.mcs = {top: m.position().top,left: m.position().left,draggerTop: j.position().top,draggerLeft: j.position().left,topPct: Math.round((100 * Math.abs(m.position().top)) / Math.abs(m.outerHeight() - h.height())),leftPct: Math.round((100 * Math.abs(m.position().left)) / Math.abs(m.outerWidth() - h.width()))};
                    switch (Q) {
                        case "onScrollStart":
                            k.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(k, this.mcs);
                            break;
                        case "whileScrolling":
                            k.data("whileScrolling_Callback").call(k, this.mcs);
                            break;
                        case "onScroll":
                            k.data("onScroll_Callback").call(k, this.mcs);
                            break;
                        case "onTotalScrollBack":
                            k.data("onTotalScrollBack_Callback").call(k, this.mcs);
                            break;
                        case "onTotalScroll":
                            k.data("onTotalScroll_Callback").call(k, this.mcs);
                            break
                    }
                }
            }
        },stop: function() {
            var h = d(this), f = h.children().children(".mCSB_container"), g = h.children().children().children().children(".mCSB_dragger");
            e.mTweenAxisStop.call(this, f[0]);
            e.mTweenAxisStop.call(this, g[0])
        },disable: function(f) {
            var l = d(this), g = l.children(".mCustomScrollBox"), j = g.children(".mCSB_container"), h = g.children(".mCSB_scrollTools"), k = h.children().children(".mCSB_dragger");
            g.unbind("mousewheel focusin mouseenter mouseleave touchend");
            j.unbind("touchstart touchmove");
            if (f) {
                if (l.data("horizontalScroll")) {
                    k.add(j).css("left", 0)
                } else {
                    k.add(j).css("top", 0)
                }
            }
            h.css("display", "none");
            j.addClass("mCS_no_scrollbar");
            l.data({bindEvent_mousewheel: false,bindEvent_focusin: false,bindEvent_content_touch: false,bindEvent_autoHideScrollbar: false}).addClass("mCS_disabled")
        },destroy: function() {
            var f = d(this);
            f.removeClass("mCustomScrollbar _mCS_" + f.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
            d(document).unbind("mousemove." + f.data("mCustomScrollbarIndex") + " mouseup." + f.data("mCustomScrollbarIndex") + " MSPointerMove." + f.data("mCustomScrollbarIndex") + " MSPointerUp." + f.data("mCustomScrollbarIndex"));
            d(window).unbind("resize." + f.data("mCustomScrollbarIndex"))
        }}, e = {showScrollbar: function() {
            this.stop().animate({opacity: 1}, "fast")
        },hideScrollbar: function() {
            this.stop().animate({opacity: 0}, "fast")
        },mTweenAxis: function(h, k, j, g, r, S) {
            var S = S || {}, P = S.onStart || function() {
            }, s = S.onUpdate || function() {
            }, Q = S.onComplete || function() {
            };
            var p = N(), n, l = 0, w = h.offsetTop, x = h.style;
            if (k === "left") {
                w = h.offsetLeft
            }
            var o = j - w;
            v();
            f();
            function N() {
                if (window.performance && window.performance.now) {
                    return window.performance.now()
                } else {
                    if (window.performance && window.performance.webkitNow) {
                        return window.performance.webkitNow()
                    } else {
                        if (Date.now) {
                            return Date.now()
                        } else {
                            return new Date().getTime()
                        }
                    }
                }
            }
            function R() {
                if (!l) {
                    P.call()
                }
                l = N() - p;
                O();
                if (l >= h._time) {
                    h._time = (l > h._time) ? l + n - (l - h._time) : l + n - 1;
                    if (h._time < l + 1) {
                        h._time = l + 1
                    }
                }
                if (h._time < g) {
                    h._id = _request(R)
                } else {
                    Q.call()
                }
            }
            function O() {
                if (g > 0) {
                    h.currVal = m(h._time, w, o, g, r);
                    x[k] = Math.round(h.currVal) + "px"
                } else {
                    x[k] = j + "px"
                }
                s.call()
            }
            function f() {
                n = 1000 / 60;
                h._time = l + n;
                _request = (!window.requestAnimationFrame) ? function(T) {
                    O();
                    return setTimeout(T, 0.01)
                } : window.requestAnimationFrame;
                h._id = _request(R)
            }
            function v() {
                if (h._id == null) {
                    return
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(h._id)
                } else {
                    window.cancelAnimationFrame(h._id)
                }
                h._id = null
            }
            function m(V, U, Z, Y, W) {
                switch (W) {
                    case "linear":
                        return Z * V / Y + U;
                        break;
                    case "easeOutQuad":
                        V /= Y;
                        return -Z * V * (V - 2) + U;
                        break;
                    case "easeInOutQuad":
                        V /= Y / 2;
                        if (V < 1) {
                            return Z / 2 * V * V + U
                        }
                        V--;
                        return -Z / 2 * (V * (V - 2) - 1) + U;
                        break;
                    case "easeOutCubic":
                        V /= Y;
                        V--;
                        return Z * (V * V * V + 1) + U;
                        break;
                    case "easeOutQuart":
                        V /= Y;
                        V--;
                        return -Z * (V * V * V * V - 1) + U;
                        break;
                    case "easeOutQuint":
                        V /= Y;
                        V--;
                        return Z * (V * V * V * V * V + 1) + U;
                        break;
                    case "easeOutCirc":
                        V /= Y;
                        V--;
                        return Z * Math.sqrt(1 - V * V) + U;
                        break;
                    case "easeOutSine":
                        return Z * Math.sin(V / Y * (Math.PI / 2)) + U;
                        break;
                    case "easeOutExpo":
                        return Z * (-Math.pow(2, -10 * V / Y) + 1) + U;
                        break;
                    case "mcsEaseOut":
                        var X = (V /= Y) * V, T = X * V;
                        return U + Z * (0.499999999999997 * T * X + -2.5 * X * X + 5.5 * T + -6.5 * X + 4 * V);
                        break;
                    case "draggerRailEase":
                        V /= Y / 2;
                        if (V < 1) {
                            return Z / 2 * V * V * V + U
                        }
                        V -= 2;
                        return Z / 2 * (V * V * V + 2) + U;
                        break
                }
            }
        },mTweenAxisStop: function(f) {
            if (f._id == null) {
                return
            }
            if (!window.requestAnimationFrame) {
                clearTimeout(f._id)
            } else {
                window.cancelAnimationFrame(f._id)
            }
            f._id = null
        },rafPolyfill: function() {
            var g = ["ms", "moz", "webkit", "o"], f = g.length;
            while (--f > -1 && !window.requestAnimationFrame) {
                window.requestAnimationFrame = window[g[f] + "RequestAnimationFrame"];
                window.cancelAnimationFrame = window[g[f] + "CancelAnimationFrame"] || window[g[f] + "CancelRequestAnimationFrame"]
            }
        }};
    e.rafPolyfill.call();
    d.support.touch = !!("ontouchstart" in window);
    d.support.pointer = window.navigator.pointerEnabled;
    d.support.msPointer = window.navigator.msPointerEnabled;
    var b = ("https:" == document.location.protocol) ? "https:" : "http:";
    d.event.special.mousewheel || document.write('<script src="' + b + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
    d.fn.mCustomScrollbar = function(f) {
        if (c[f]) {
            return c[f].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof f === "object" || !f) {
                return c.init.apply(this, arguments)
            } else {
                d.error("Method " + f + " does not exist")
            }
        }
    }
})(jQuery);
define("libs/jquery/external/jquery.mCustomScrollbar", ["jquery", "libs/jquery/external/jquery.mousewheel"], (function(b) {
    return function() {
        var c, d;
        return c || b.jQuery
    }
}(this)));
define("sticker/views/stickerCollectionView", ["jquery", "underscore", "marionette", "text!sticker/templates/stickerCollectionTemplate.html", "sticker/views/stickerView", "libs/jquery/external/jquery.mCustomScrollbar"], function(f, d, g, b, c) {
    var e = g.CompositeView.extend({template: d.template(b),itemView: c,itemViewContainer: "ul",className: "sticker_collect",initialize: function(h) {
            this.stickerCollection = this.collection;
            this.stickerPackModel = h.stickerPack
        },_createScrollBar: function() {
            this.$el.mCustomScrollbar({scrollButtons: {enable: true},scrollInertia: 150,advanced: {updateOnContentResize: true,autoScrollOnFocus: false}})
        },serializeData: function() {
            return {stickerAreaID: this.stickerPackModel.cid,spriteImgUrl: this.stickerCollection.first().get("spriteImgUrl")}
        },onShow: function() {
            this._createScrollBar()
        }});
    return e
});
define("sticker/models/stickerModel", ["jquery", "underscore", "backbone"], function(c, b, e) {
    var d = e.Model.extend({initialize: function(f) {
        },getStickerUrl: function() {
            return "http://s.cmstatic.net/band/sticker/" + this.get("packNo") + "/PC/" + this.get("no")
        }});
    return d
});
define("sticker/collections/singleTypeStickerCollection", ["jquery", "underscore", "backbone", "sticker/models/stickerModel", "util/bandUtil"], function(e, d, g, f, c) {
    var b = g.Collection.extend({model: f,url: c.makeApi("https://api.sticker.band.us", "/api/m2/sticker/shop/get_sprite.json"),initialize: function(j, h) {
            h = h || {};
            this.stickerPack = h.stickerPack;
            this.type = h.type || {};
            this.packNo = this.stickerPack.get("basic").no
        },simpleFetch: function(h) {
            var j = {pack_no: this.packNo,os_type: this.type.OS_TYPE,resolution_type: this.type.RESOLUTION_TYPE};
            this.fetch({dataType: "jsonp",data: j,success: function(m, k, l) {
                    c.functionCall(h, "success", m, k, l)
                },error: function(m, k, l) {
                    c.functionCall(h, "error", m, k, l)
                }})
        },parse: function(j) {
            var k = [];
            for (var h = 0; h < j.stickerIdList.length; h++) {
                var l = e.extend({}, j, {no: j.stickerIdList[h],index: h + 1});
                delete l.stickerIdList;
                k.push(l)
            }
            return k
        }});
    return b
});
define("text!sticker/templates/stickerTypeButtonListTemplate.html", [], function() {
    return '<button type="button" class="btn_nav prev"><span class="alt"></span></button>\n<ul class="sticker_nav">\n</ul>\n<button type="button" class="btn_nav next"><span class="alt"></span></button>'
});
define("text!sticker/templates/stickerTypeButtonTemplate.html", [], function() {
    return '<button type="button">\n    <img width="34" class="off"  src="http://s.cmstatic.net/band/sticker/<%-basic.no%>/PC/tab_off"><img width="34" class="on" alt="" src="http://s.cmstatic.net/band/sticker/<%-basic.no%>/PC/tab_on">\n</button>'
});
define("sticker/views/stickerTypeButtonView", ["jquery", "underscore", "marionette", "text!sticker/templates/stickerTypeButtonTemplate.html"], function(d, b, f, e) {
    var c = f.ItemView.extend({template: b.template(e),tagName: "li",triggers: {click: "click"},setSelected: function(g) {
            if (g) {
                this.$el.addClass("selected on")
            } else {
                this.$el.removeClass("selected on")
            }
        },serializeData: function() {
            return this.model.toJSON()
        }});
    return c
});
define("sticker/views/stickerTypeButtonListView", ["jquery", "underscore", "marionette", "text!sticker/templates/stickerTypeButtonListTemplate.html", "sticker/views/stickerTypeButtonView"], function(f, c, g, b, d) {
    var e = g.CompositeView.extend({template: c.template(b),className: "sticker_header",itemView: d,itemViewContainer: "ul.sticker_nav",events: {"click button.btn_nav.prev": function(h) {
                if (!f(h.currentTarget).hasClass("on")) {
                    return false
                }
                this.movePrev(c.bind(function() {
                    this.changeNavibuttonUI()
                }, this));
                return false
            },"click button.btn_nav.next": function(h) {
                if (!f(h.currentTarget).hasClass("on")) {
                    return false
                }
                this.moveNext(c.bind(function() {
                    this.changeNavibuttonUI()
                }, this));
                return false
            }},ui: {typeUl: "ul.sticker_nav",prevButton: "button.btn_nav.prev",nextButton: "button.btn_nav.next"},collectionEvents: {sync: function() {
                this.changeNavibuttonUI()
            }},initialize: function(h) {
        },changeNavibuttonUI: function() {
            if (this.ui.typeUl.position().left === 0) {
                this.ui.prevButton.removeClass("on")
            } else {
                this.ui.prevButton.addClass("on")
            }
            var k = this.ui.prevButton.outerWidth(true) + this.ui.nextButton.outerWidth(true);
            var h = this.$el.width() + (-1 * this.ui.typeUl.position().left);
            var j = h - k >= this.ui.typeUl.width();
            if (j) {
                this.ui.nextButton.removeClass("on")
            } else {
                this.ui.nextButton.addClass("on")
            }
        },onAfterItemAdded: function(h) {
            this.readjustSize()
        },movePrev: function(j) {
            var h = this.getItemWidth();
            this.ui.typeUl.animate({left: "+=" + h + "px"}, 100, function() {
                j()
            })
        },moveNext: function(j) {
            var h = this.getItemWidth();
            this.ui.typeUl.animate({left: "-=" + h + "px"}, 100, function() {
                j()
            })
        },readjustSize: function() {
            this.ui.typeUl.css("width", this.collection.length * this.getItemWidth())
        },getItemWidth: function() {
            if (!this.children.first().$el) {
                return 1
            }
            return this.children.first().$el.outerWidth(true)
        },selectPack: function(h) {
            if (!h) {
                h = this.collection.first()
            }
            if (!h) {
                return
            }
            this.children.each(function(j) {
                j.setSelected(false)
            });
            this.children.findByModel(h).setSelected(true)
        },_attachEventListener: function() {
            if (!this.fnOnResize) {
                this.fnOnResize = c.bind(function() {
                    this.changeNavibuttonUI()
                }, this)
            }
            f(window).on("resize", this.fnOnResize)
        },_detachEventListener: function() {
            if (this.fnOnResize) {
                f(window).off("resize", this.fnOnResize)
            }
            delete this.fnOnResize
        },onRender: function() {
            this._attachEventListener()
        },onBeforeClose: function() {
            this._detachEventListener()
        }});
    return e
});
define("sticker/models/stickerPackModel", ["jquery", "underscore", "backbone"], function(d, b, e) {
    var c = e.Model.extend({initialize: function(f) {
        }});
    return c
});
define("sticker/collections/stickerPackCollection", ["jquery", "underscore", "backbone", "sticker/models/stickerPackModel", "util/bandUtil"], function(e, c, g, d, b) {
    var f = g.Collection.extend({model: d,url: b.makeApi("https://api.sticker.band.us", "/api/m2/sticker/me/get_using_pack.json"),initialize: function(h) {
        },simpleFetch: function(h) {
            var j = {user_locale: "ko_KR"};
            this.fetch({dataType: "jsonp",data: j,success: function(m, k, l) {
                    b.functionCall(h, "success", m, k, l)
                },error: function(m, k, l) {
                    b.functionCall(h, "error", m, k, l)
                }})
        },parse: function(h) {
            return h.my_using_pack
        }});
    return f
});
define("sticker/views/stickerSelectLayout", ["jquery", "underscore", "marionette", "text!sticker/templates/stickerSelectLayoutTemplate.html", "sticker/views/stickerCollectionView", "sticker/collections/singleTypeStickerCollection", "sticker/views/stickerTypeButtonListView", "sticker/collections/stickerPackCollection", "util/bandUtil"], function(f, l, g, c, e, j, k, b, h) {
    var d = g.Layout.extend({template: l.template(c),_MIN_HEIGHT: 358,className: "sticker_collection",regions: {header: "div._sticker_header",body: "div._sticker_collect",selectedRegion: "div._sticker_selected"},ui: {headerWrap: "div._sticker_header",bodyWrap: "div._sticker_collect",selectedWrap: "div._sticker_selected"},initialize: function(m) {
            this.type = m.type || null
        },toggle: function(n, o) {
            var m = (n === true) || (typeof n === "undefined" && this.isVisible() == false);
            if (m) {
                this._show(o)
            } else {
                this._hide(o)
            }
            this.trigger("toggled", m)
        },_show: function(m) {
            this.$el.show()
        },_hide: function(n, m) {
            this.$el.hide()
        },getHeight: function() {
            return Math.max(this.$el.height(), this._MIN_HEIGHT)
        },renderResultView: function(m) {
            this.selectedRegion.show(m);
            this.ui.headerWrap.hide();
            this.ui.bodyWrap.hide()
        },closeResultView: function() {
            this.ui.headerWrap.show();
            this.ui.bodyWrap.show();
            this.selectedRegion.close()
        },isVisible: function() {
            return this.$el.is(":visible")
        },selectType: function(m) {
            this.renderHeader(m);
            this.renderBody(m)
        },renderHeader: function(m) {
            if (!this.header.currentView) {
                var n = new b();
                var o = new k({collection: n});
                this.listenTo(o, "itemview:click", function(p, r) {
                    this.selectType(r.model)
                }, this);
                this.listenTo(o, "close", function() {
                    n.reset([])
                }, this);
                this.header.show(o);
                n.simpleFetch({success: l.bind(function(p) {
                        this.selectType(p.first())
                    }, this)})
            }
            this.header.currentView.selectPack(m)
        },renderBody: function(m) {
            var n = new j([], {stickerPack: m,type: this.type});
            n.simpleFetch({success: l.bind(function() {
                    var o = new e({collection: n,stickerPack: m});
                    this.listenTo(o, "close", function() {
                        n.reset([])
                    }, this);
                    this.listenTo(o, "itemview:click itemview:touchstart", function(p, r) {
                        this.trigger("click:sticker", {sticker: r.model})
                    }, this);
                    this.body.show(o)
                }, this)})
        },onRender: function() {
            this.renderHeader()
        }});
    return d
});
(function(b) {
    jQuery.fn.getCursorPosition = function() {
        if (this.lengh == 0) {
            return -1
        }
        return b(this).getSelectionStart()
    };
    jQuery.fn.setCursorPosition = function(c) {
        if (this.lengh == 0) {
            return this
        }
        return b(this).setSelection(c, c)
    };
    jQuery.fn.getSelection = function() {
        if (this.lengh == 0) {
            return -1
        }
        var c = b(this).getSelectionStart();
        var d = b(this).getSelectionEnd();
        return this[0].value.substring(c, d)
    };
    jQuery.fn.getSelectionStart = function() {
        if (this.lengh == 0) {
            return -1
        }
        input = this[0];
        var d = input.value.length;
        if (input.createTextRange) {
            var c = document.selection.createRange().duplicate();
            c.moveEnd("character", input.value.length);
            if (c.text == "") {
                d = input.value.length
            }
            d = input.value.lastIndexOf(c.text)
        } else {
            if (typeof (input.selectionStart) != "undefined") {
                d = input.selectionStart
            }
        }
        return d
    };
    jQuery.fn.getSelectionEnd = function() {
        if (this.lengh == 0) {
            return -1
        }
        input = this[0];
        var d = input.value.length;
        if (input.createTextRange) {
            var c = document.selection.createRange().duplicate();
            c.moveStart("character", -input.value.length);
            if (c.text == "") {
                d = input.value.length
            }
            d = input.value.lastIndexOf(c.text)
        } else {
            if (typeof (input.selectionEnd) != "undefined") {
                d = input.selectionEnd
            }
        }
        return d
    };
    jQuery.fn.setSelection = function(d, e) {
        if (this.lengh == 0) {
            return this
        }
        input = this[0];
        if (input.createTextRange) {
            var c = input.createTextRange();
            c.collapse(true);
            c.moveEnd("character", e);
            c.moveStart("character", d);
            c.select()
        } else {
            if (input.setSelectionRange) {
                input.focus();
                input.setSelectionRange(d, e)
            }
        }
        return this
    }
})(jQuery);
define("libs/jquery/external/cursor", ["jquery"], (function(b) {
    return function() {
        var c, d;
        return c || b.jQuery
    }
}(this)));
define("chat/views/chattingMessageInputLayer", ["jquery", "underscore", "marionette", "localize/reslang", "text!chat/templates/chattingMessageInputLayerTemplate.html", "sticker/views/stickerSelectLayout", "util/bandUtil", "bandConstants", "util/upload/uploadUtil", "util/customStringUtil", "libs/jquery/external/placeholder", "libs/jquery/external/cursor"], function(d, k, g, l, h, c, j, f, m, e) {
    var b = g.Layout.extend({_MAX_TEXT_LENGTH: 1000,template: k.template(h),_UPLOAD_ELEMENT_QUERY: "#btn_chat_pop_photo_upload",tagName: "form",className: "chat_input",events: {"click .pop_sticker": function(n) {
                this.toggleStickerSelect();
                return false
            },"keydown textarea.msg_input": function(n) {
                var o = d(n.currentTarget);
                if (n.keyCode == 13) {
                    if (!n.shiftKey && o.val().replace(/\s/g, "").length > 0) {
                        this.sendMessage()
                    } else {
                        if (n.shiftKey) {
                            return true
                        }
                    }
                    return false
                }
                return true
            },"keyup textarea.msg_input": function(n) {
                this.toggleSendBtn()
            },"paste textarea.msg_input": function(n) {
                setTimeout(k.bind(function() {
                    this.toggleSendBtn()
                }, this), 100)
            },"click input.msg_sutmit": function(n) {
                this.sendMessage();
                return false
            }},ui: {inputbox: "textarea.msg_input",sendButton: "input.msg_sutmit",stickerButton: ".pop_sticker"},regions: {stickerSelectWrap: "div._sticker_cont_wrap"},initialize: function(n) {
            this.chattingChannel = n.chattingChannel
        },toggleSendBtn: function() {
            if (!j.checkMaxLength(this.ui.inputbox, this._MAX_TEXT_LENGTH)) {
                return false
            }
            if (d.trim(this.ui.inputbox.val()).length > 0) {
                this.ui.sendButton.css("opacity", "1");
                this.ui.sendButton.css("z-index", "1")
            } else {
                this.ui.sendButton.css("opacity", "0");
                this.ui.sendButton.css("z-index", "-11")
            }
        },sendMessage: function() {
            if (e.isEmpty(this.ui.inputbox.val())) {
                alert(l.STR("pcweb.noui.js.alert.empty_message"));
                return false
            } else {
                if (!j.checkMaxLength(this.ui.inputbox, this._MAX_TEXT_LENGTH)) {
                    return false
                }
            }
            this.trigger("submit:message", {text_message: this.ui.inputbox.val()});
            this.ui.inputbox.val("");
            this.toggleSendBtn()
        },toggleStickerSelect: function(o) {
            var n = (o === true) || (typeof o === "undefined" && d(".chat_pop").hasClass("on_sticker") == false);
            this._renderStickerSelect();
            this.stickerSelectLayout.toggle(n, false);
            d(".chat_pop").toggleClass("on_sticker", n)
        },focusMessageInput: function() {
            this.ui.inputbox.setCursorPosition(this.ui.inputbox.val().length)
        },_renderStickerSelect: function() {
            if (!this.stickerSelectLayout) {
                this.stickerSelectLayout = new c({type: f.STICKER.SPRITE_SIZE_TYPE["75*70"]});
                this.stickerSelectLayout.on("click:sticker", function(n) {
                    this.toggleStickerSelect(false);
                    this.trigger("select:sticker", n.sticker)
                }, this);
                this.stickerSelectLayout.on("toggled", function(n) {
                    this.ui.stickerButton.toggleClass("add")
                }, this);
                this.stickerSelectWrap.show(this.stickerSelectLayout)
            }
        },_createUploader: function() {
            m.setFileUpload({elem: d(this._UPLOAD_ELEMENT_QUERY, this.$el),type: "photo",height: 41,width: 41,uploadLimit: 1,url: j.makeApi("https://up.band.us", "/v1/uploader/upload_photo.json"),callback: {done: k.bind(function(o, n) {
                        if (j.v1FormatErrorHandle(o)) {
                            return
                        }
                        this._sendPhotoMessage(o.result_data.url, o.result_data.width, o.result_data.height)
                    }, this)}})
        },_sendPhotoMessage: function(o, p, n) {
            var r = {channel_id: this.chattingChannel.get("buid"),message_type: 11,extras: JSON.stringify({url: o,size: (p || 500) + "," + (n || 500)})};
            d.ajax({url: j.makeApi("https://api.band.us", "/v1/chat/send_message"),data: r,success: k.bind(function(s) {
                    if (j.v1FormatErrorHandle(s)) {
                        return
                    }
                    this.trigger("upload:photo", s.result_data)
                }, this)})
        },_removeUploader: function() {
            m.removeUploader(this.$el.find(this._UPLOAD_ELEMENT_QUERY))
        },onRender: function() {
            this.ui.inputbox.placeholder();
            this.toggleSendBtn()
        },onShow: function() {
            this._createUploader()
        },onBeforeClose: function() {
            d("body").removeClass("on_sticker");
            this._removeUploader()
        }});
    return b
});
!function(c) {
    if ("object" == typeof exports && "undefined" != typeof module) {
        module.exports = c()
    } else {
        if ("function" == typeof define && define.amd) {
            define("socketIO", [], c)
        } else {
            var b;
            "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.io = c()
        }
    }
}(function() {
    var f, c, b;
    return function d(g, l, j) {
        function h(r, n) {
            if (!l[r]) {
                if (!g[r]) {
                    var m = typeof require == "function" && require;
                    if (!n && m) {
                        return m(r, !0)
                    }
                    if (e) {
                        return e(r, !0)
                    }
                    throw new Error("Cannot find module '" + r + "'")
                }
                var p = l[r] = {exports: {}};
                g[r][0].call(p.exports, function(o) {
                    var s = g[r][1][o];
                    return h(s ? s : o)
                }, p, p.exports, d, g, l, j)
            }
            return l[r].exports
        }
        var e = typeof require == "function" && require;
        for (var k = 0; k < j.length; k++) {
            h(j[k])
        }
        return h
    }({1: [function(h, g, e) {
                g.exports = h("./lib/")
            }, {"./lib/": 2}],2: [function(l, m, o) {
                var j = l("./url");
                var h = l("socket.io-parser");
                var e = l("./manager");
                var k = l("debug")("socket.io-client");
                m.exports = o = n;
                var g = o.managers = {};
                function n(s, r) {
                    if (typeof s == "object") {
                        r = s;
                        s = undefined
                    }
                    r = r || {};
                    var p = j(s);
                    var v = p.source;
                    var x = p.id;
                    var w;
                    if (r.forceNew || r["force new connection"] || false === r.multiplex) {
                        k("ignoring socket cache for %s", v);
                        w = e(v, r)
                    } else {
                        if (!g[x]) {
                            k("new io instance for %s", v);
                            g[x] = e(v, r)
                        }
                        w = g[x]
                    }
                    return w.socket(p.path)
                }
                o.protocol = h.protocol;
                o.connect = n;
                o.Manager = l("./manager");
                o.Socket = l("./socket")
            }, {"./manager": 3,"./socket": 5,"./url": 6,debug: 10,"socket.io-parser": 46}],3: [function(l, m, p) {
                var j = l("./url");
                var s = l("engine.io-client");
                var k = l("./socket");
                var x = l("component-emitter");
                var h = l("socket.io-parser");
                var r = l("./on");
                var v = l("component-bind");
                var o = l("object-component");
                var g = l("debug")("socket.io-client:manager");
                var w = l("indexof");
                var n = l("backo2");
                m.exports = e;
                function e(O, N) {
                    if (!(this instanceof e)) {
                        return new e(O, N)
                    }
                    if (O && "object" == typeof O) {
                        N = O;
                        O = undefined
                    }
                    N = N || {};
                    N.path = N.path || "/socket.io";
                    this.nsps = {};
                    this.subs = [];
                    this.opts = N;
                    this.reconnection(N.reconnection !== false);
                    this.reconnectionAttempts(N.reconnectionAttempts || Infinity);
                    this.reconnectionDelay(N.reconnectionDelay || 1000);
                    this.reconnectionDelayMax(N.reconnectionDelayMax || 5000);
                    this.randomizationFactor(N.randomizationFactor || 0.5);
                    this.backoff = new n({min: this.reconnectionDelay(),max: this.reconnectionDelayMax(),jitter: this.randomizationFactor()});
                    this.timeout(null == N.timeout ? 20000 : N.timeout);
                    this.readyState = "closed";
                    this.uri = O;
                    this.connected = [];
                    this.encoding = false;
                    this.packetBuffer = [];
                    this.encoder = new h.Encoder;
                    this.decoder = new h.Decoder;
                    this.autoConnect = N.autoConnect !== false;
                    if (this.autoConnect) {
                        this.open()
                    }
                }
                e.prototype.emitAll = function() {
                    this.emit.apply(this, arguments);
                    for (var N in this.nsps) {
                        this.nsps[N].emit.apply(this.nsps[N], arguments)
                    }
                };
                e.prototype.updateSocketIds = function() {
                    for (var N in this.nsps) {
                        this.nsps[N].id = this.engine.id
                    }
                };
                x(e.prototype);
                e.prototype.reconnection = function(N) {
                    if (!arguments.length) {
                        return this._reconnection
                    }
                    this._reconnection = !!N;
                    return this
                };
                e.prototype.reconnectionAttempts = function(N) {
                    if (!arguments.length) {
                        return this._reconnectionAttempts
                    }
                    this._reconnectionAttempts = N;
                    return this
                };
                e.prototype.reconnectionDelay = function(N) {
                    if (!arguments.length) {
                        return this._reconnectionDelay
                    }
                    this._reconnectionDelay = N;
                    this.backoff && this.backoff.setMin(N);
                    return this
                };
                e.prototype.randomizationFactor = function(N) {
                    if (!arguments.length) {
                        return this._randomizationFactor
                    }
                    this._randomizationFactor = N;
                    this.backoff && this.backoff.setJitter(N);
                    return this
                };
                e.prototype.reconnectionDelayMax = function(N) {
                    if (!arguments.length) {
                        return this._reconnectionDelayMax
                    }
                    this._reconnectionDelayMax = N;
                    this.backoff && this.backoff.setMax(N);
                    return this
                };
                e.prototype.timeout = function(N) {
                    if (!arguments.length) {
                        return this._timeout
                    }
                    this._timeout = N;
                    return this
                };
                e.prototype.maybeReconnectOnOpen = function() {
                    if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
                        this.reconnect()
                    }
                };
                e.prototype.open = e.prototype.connect = function(Q) {
                    g("readyState %s", this.readyState);
                    if (~this.readyState.indexOf("open")) {
                        return this
                    }
                    g("opening %s", this.uri);
                    this.engine = s(this.uri, this.opts);
                    var N = this.engine;
                    var P = this;
                    this.readyState = "opening";
                    this.skipReconnect = false;
                    var S = r(N, "open", function() {
                        P.onopen();
                        Q && Q()
                    });
                    var O = r(N, "error", function(V) {
                        g("connect_error");
                        P.cleanup();
                        P.readyState = "closed";
                        P.emitAll("connect_error", V);
                        if (Q) {
                            var U = new Error("Connection error");
                            U.data = V;
                            Q(U)
                        } else {
                            P.maybeReconnectOnOpen()
                        }
                    });
                    if (false !== this._timeout) {
                        var R = this._timeout;
                        g("connect attempt will timeout after %d", R);
                        var T = setTimeout(function() {
                            g("connect attempt timed out after %d", R);
                            S.destroy();
                            N.close();
                            N.emit("error", "timeout");
                            P.emitAll("connect_timeout", R)
                        }, R);
                        this.subs.push({destroy: function() {
                                clearTimeout(T)
                            }})
                    }
                    this.subs.push(S);
                    this.subs.push(O);
                    return this
                };
                e.prototype.onopen = function() {
                    g("open");
                    this.cleanup();
                    this.readyState = "open";
                    this.emit("open");
                    var N = this.engine;
                    this.subs.push(r(N, "data", v(this, "ondata")));
                    this.subs.push(r(this.decoder, "decoded", v(this, "ondecoded")));
                    this.subs.push(r(N, "error", v(this, "onerror")));
                    this.subs.push(r(N, "close", v(this, "onclose")))
                };
                e.prototype.ondata = function(N) {
                    this.decoder.add(N)
                };
                e.prototype.ondecoded = function(N) {
                    this.emit("packet", N)
                };
                e.prototype.onerror = function(N) {
                    g("error", N);
                    this.emitAll("error", N)
                };
                e.prototype.socket = function(P) {
                    var N = this.nsps[P];
                    if (!N) {
                        N = new k(this, P);
                        this.nsps[P] = N;
                        var O = this;
                        N.on("connect", function() {
                            N.id = O.engine.id;
                            if (!~w(O.connected, N)) {
                                O.connected.push(N)
                            }
                        })
                    }
                    return N
                };
                e.prototype.destroy = function(N) {
                    var O = w(this.connected, N);
                    if (~O) {
                        this.connected.splice(O, 1)
                    }
                    if (this.connected.length) {
                        return
                    }
                    this.close()
                };
                e.prototype.packet = function(O) {
                    g("writing packet %j", O);
                    var N = this;
                    if (!N.encoding) {
                        N.encoding = true;
                        this.encoder.encode(O, function(Q) {
                            for (var P = 0; P < Q.length; P++) {
                                N.engine.write(Q[P])
                            }
                            N.encoding = false;
                            N.processPacketQueue()
                        })
                    } else {
                        N.packetBuffer.push(O)
                    }
                };
                e.prototype.processPacketQueue = function() {
                    if (this.packetBuffer.length > 0 && !this.encoding) {
                        var N = this.packetBuffer.shift();
                        this.packet(N)
                    }
                };
                e.prototype.cleanup = function() {
                    var N;
                    while (N = this.subs.shift()) {
                        N.destroy()
                    }
                    this.packetBuffer = [];
                    this.encoding = false;
                    this.decoder.destroy()
                };
                e.prototype.close = e.prototype.disconnect = function() {
                    this.skipReconnect = true;
                    this.backoff.reset();
                    this.readyState = "closed";
                    this.engine && this.engine.close()
                };
                e.prototype.onclose = function(N) {
                    g("close");
                    this.cleanup();
                    this.backoff.reset();
                    this.readyState = "closed";
                    this.emit("close", N);
                    if (this._reconnection && !this.skipReconnect) {
                        this.reconnect()
                    }
                };
                e.prototype.reconnect = function() {
                    if (this.reconnecting || this.skipReconnect) {
                        return this
                    }
                    var N = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) {
                        g("reconnect failed");
                        this.backoff.reset();
                        this.emitAll("reconnect_failed");
                        this.reconnecting = false
                    } else {
                        var O = this.backoff.duration();
                        g("will wait %dms before reconnect attempt", O);
                        this.reconnecting = true;
                        var P = setTimeout(function() {
                            if (N.skipReconnect) {
                                return
                            }
                            g("attempting reconnect");
                            N.emitAll("reconnect_attempt", N.backoff.attempts);
                            N.emitAll("reconnecting", N.backoff.attempts);
                            if (N.skipReconnect) {
                                return
                            }
                            N.open(function(Q) {
                                if (Q) {
                                    g("reconnect attempt error");
                                    N.reconnecting = false;
                                    N.reconnect();
                                    N.emitAll("reconnect_error", Q.data)
                                } else {
                                    g("reconnect success");
                                    N.onreconnect()
                                }
                            })
                        }, O);
                        this.subs.push({destroy: function() {
                                clearTimeout(P)
                            }})
                    }
                };
                e.prototype.onreconnect = function() {
                    var N = this.backoff.attempts;
                    this.reconnecting = false;
                    this.backoff.reset();
                    this.updateSocketIds();
                    this.emitAll("reconnect", N)
                }
            }, {"./on": 4,"./socket": 5,"./url": 6,backo2: 7,"component-bind": 8,"component-emitter": 9,debug: 10,"engine.io-client": 11,indexof: 42,"object-component": 43,"socket.io-parser": 46}],4: [function(j, h, g) {
                h.exports = e;
                function e(m, l, k) {
                    m.on(l, k);
                    return {destroy: function() {
                            m.removeListener(l, k)
                        }}
                }
            }, {}],5: [function(j, k, m) {
                var g = j("socket.io-parser");
                var r = j("component-emitter");
                var l = j("to-array");
                var o = j("./on");
                var p = j("component-bind");
                var e = j("debug")("socket.io-client:socket");
                var n = j("has-binary");
                k.exports = m = h;
                var v = {connect: 1,connect_error: 1,connect_timeout: 1,disconnect: 1,error: 1,reconnect: 1,reconnect_attempt: 1,reconnect_failed: 1,reconnect_error: 1,reconnecting: 1};
                var s = r.prototype.emit;
                function h(x, w) {
                    this.io = x;
                    this.nsp = w;
                    this.json = this;
                    this.ids = 0;
                    this.acks = {};
                    if (this.io.autoConnect) {
                        this.open()
                    }
                    this.receiveBuffer = [];
                    this.sendBuffer = [];
                    this.connected = false;
                    this.disconnected = true
                }
                r(h.prototype);
                h.prototype.subEvents = function() {
                    if (this.subs) {
                        return
                    }
                    var w = this.io;
                    this.subs = [o(w, "open", p(this, "onopen")), o(w, "packet", p(this, "onpacket")), o(w, "close", p(this, "onclose"))]
                };
                h.prototype.open = h.prototype.connect = function() {
                    if (this.connected) {
                        return this
                    }
                    this.subEvents();
                    this.io.open();
                    if ("open" == this.io.readyState) {
                        this.onopen()
                    }
                    return this
                };
                h.prototype.send = function() {
                    var w = l(arguments);
                    w.unshift("message");
                    this.emit.apply(this, w);
                    return this
                };
                h.prototype.emit = function(N) {
                    if (v.hasOwnProperty(N)) {
                        s.apply(this, arguments);
                        return this
                    }
                    var x = l(arguments);
                    var w = g.EVENT;
                    if (n(x)) {
                        w = g.BINARY_EVENT
                    }
                    var O = {type: w,data: x};
                    if ("function" == typeof x[x.length - 1]) {
                        e("emitting packet with ack id %d", this.ids);
                        this.acks[this.ids] = x.pop();
                        O.id = this.ids++
                    }
                    if (this.connected) {
                        this.packet(O)
                    } else {
                        this.sendBuffer.push(O)
                    }
                    return this
                };
                h.prototype.packet = function(w) {
                    w.nsp = this.nsp;
                    this.io.packet(w)
                };
                h.prototype.onopen = function() {
                    e("transport is open - connecting");
                    if ("/" != this.nsp) {
                        this.packet({type: g.CONNECT})
                    }
                };
                h.prototype.onclose = function(w) {
                    e("close (%s)", w);
                    this.connected = false;
                    this.disconnected = true;
                    delete this.id;
                    this.emit("disconnect", w)
                };
                h.prototype.onpacket = function(w) {
                    if (w.nsp != this.nsp) {
                        return
                    }
                    switch (w.type) {
                        case g.CONNECT:
                            this.onconnect();
                            break;
                        case g.EVENT:
                            this.onevent(w);
                            break;
                        case g.BINARY_EVENT:
                            this.onevent(w);
                            break;
                        case g.ACK:
                            this.onack(w);
                            break;
                        case g.BINARY_ACK:
                            this.onack(w);
                            break;
                        case g.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case g.ERROR:
                            this.emit("error", w.data);
                            break
                    }
                };
                h.prototype.onevent = function(x) {
                    var w = x.data || [];
                    e("emitting event %j", w);
                    if (null != x.id) {
                        e("attaching ack callback to event");
                        w.push(this.ack(x.id))
                    }
                    if (this.connected) {
                        s.apply(this, w)
                    } else {
                        this.receiveBuffer.push(w)
                    }
                };
                h.prototype.ack = function(N) {
                    var w = this;
                    var x = false;
                    return function() {
                        if (x) {
                            return
                        }
                        x = true;
                        var O = l(arguments);
                        e("sending ack %j", O);
                        var P = n(O) ? g.BINARY_ACK : g.ACK;
                        w.packet({type: P,id: N,data: O})
                    }
                };
                h.prototype.onack = function(x) {
                    e("calling ack %s with %j", x.id, x.data);
                    var w = this.acks[x.id];
                    w.apply(this, x.data);
                    delete this.acks[x.id]
                };
                h.prototype.onconnect = function() {
                    this.connected = true;
                    this.disconnected = false;
                    this.emit("connect");
                    this.emitBuffered()
                };
                h.prototype.emitBuffered = function() {
                    var w;
                    for (w = 0; w < this.receiveBuffer.length; w++) {
                        s.apply(this, this.receiveBuffer[w])
                    }
                    this.receiveBuffer = [];
                    for (w = 0; w < this.sendBuffer.length; w++) {
                        this.packet(this.sendBuffer[w])
                    }
                    this.sendBuffer = []
                };
                h.prototype.ondisconnect = function() {
                    e("server disconnect (%s)", this.nsp);
                    this.destroy();
                    this.onclose("io server disconnect")
                };
                h.prototype.destroy = function() {
                    if (this.subs) {
                        for (var w = 0; w < this.subs.length; w++) {
                            this.subs[w].destroy()
                        }
                        this.subs = null
                    }
                    this.io.destroy(this)
                };
                h.prototype.close = h.prototype.disconnect = function() {
                    if (this.connected) {
                        e("performing disconnect (%s)", this.nsp);
                        this.packet({type: g.DISCONNECT})
                    }
                    this.destroy();
                    if (this.connected) {
                        this.onclose("io client disconnect")
                    }
                    return this
                }
            }, {"./on": 4,"component-bind": 8,"component-emitter": 9,debug: 10,"has-binary": 38,"socket.io-parser": 46,"to-array": 50}],6: [function(h, g, e) {
                (function(l) {
                    var m = h("parseuri");
                    var j = h("debug")("socket.io-client:url");
                    g.exports = k;
                    function k(n, p) {
                        var o = n;
                        var p = p || l.location;
                        if (null == n) {
                            n = p.protocol + "//" + p.host
                        }
                        if ("string" == typeof n) {
                            if ("/" == n.charAt(0)) {
                                if ("/" == n.charAt(1)) {
                                    n = p.protocol + n
                                } else {
                                    n = p.hostname + n
                                }
                            }
                            if (!/^(https?|wss?):\/\//.test(n)) {
                                j("protocol-less url %s", n);
                                if ("undefined" != typeof p) {
                                    n = p.protocol + "//" + n
                                } else {
                                    n = "https://" + n
                                }
                            }
                            j("parse %s", n);
                            o = m(n)
                        }
                        if (!o.port) {
                            if (/^(http|ws)$/.test(o.protocol)) {
                                o.port = "80"
                            } else {
                                if (/^(http|ws)s$/.test(o.protocol)) {
                                    o.port = "443"
                                }
                            }
                        }
                        o.path = o.path || "/";
                        o.id = o.protocol + "://" + o.host + ":" + o.port;
                        o.href = o.protocol + "://" + o.host + (p && p.port == o.port ? "" : ":" + o.port);
                        return o
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {debug: 10,parseuri: 44}],7: [function(h, g, e) {
                g.exports = j;
                function j(k) {
                    k = k || {};
                    this.ms = k.min || 100;
                    this.max = k.max || 10000;
                    this.factor = k.factor || 2;
                    this.jitter = k.jitter > 0 && k.jitter <= 1 ? k.jitter : 0;
                    this.attempts = 0
                }
                j.prototype.duration = function() {
                    var k = this.ms * Math.pow(this.factor, this.attempts++);
                    if (this.jitter) {
                        var l = Math.random();
                        var m = Math.floor(l * this.jitter * k);
                        k = (Math.floor(l * 10) & 1) == 0 ? k - m : k + m
                    }
                    return Math.min(k, this.max) | 0
                };
                j.prototype.reset = function() {
                    this.attempts = 0
                };
                j.prototype.setMin = function(k) {
                    this.ms = k
                };
                j.prototype.setMax = function(k) {
                    this.max = k
                };
                j.prototype.setJitter = function(k) {
                    this.jitter = k
                }
            }, {}],8: [function(h, g, e) {
                var j = [].slice;
                g.exports = function(m, l) {
                    if ("string" == typeof l) {
                        l = m[l]
                    }
                    if ("function" != typeof l) {
                        throw new Error("bind() requires a function")
                    }
                    var k = j.call(arguments, 2);
                    return function() {
                        return l.apply(m, k.concat(j.call(arguments)))
                    }
                }
            }, {}],9: [function(k, h, g) {
                h.exports = j;
                function j(l) {
                    if (l) {
                        return e(l)
                    }
                }
                function e(m) {
                    for (var l in j.prototype) {
                        m[l] = j.prototype[l]
                    }
                    return m
                }
                j.prototype.on = j.prototype.addEventListener = function(m, l) {
                    this._callbacks = this._callbacks || {};
                    (this._callbacks[m] = this._callbacks[m] || []).push(l);
                    return this
                };
                j.prototype.once = function(o, n) {
                    var m = this;
                    this._callbacks = this._callbacks || {};
                    function l() {
                        m.off(o, l);
                        n.apply(this, arguments)
                    }
                    l.fn = n;
                    this.on(o, l);
                    return this
                };
                j.prototype.off = j.prototype.removeListener = j.prototype.removeAllListeners = j.prototype.removeEventListener = function(p, n) {
                    this._callbacks = this._callbacks || {};
                    if (0 == arguments.length) {
                        this._callbacks = {};
                        return this
                    }
                    var o = this._callbacks[p];
                    if (!o) {
                        return this
                    }
                    if (1 == arguments.length) {
                        delete this._callbacks[p];
                        return this
                    }
                    var l;
                    for (var m = 0; m < o.length; m++) {
                        l = o[m];
                        if (l === n || l.fn === n) {
                            o.splice(m, 1);
                            break
                        }
                    }
                    return this
                };
                j.prototype.emit = function(p) {
                    this._callbacks = this._callbacks || {};
                    var m = [].slice.call(arguments, 1), o = this._callbacks[p];
                    if (o) {
                        o = o.slice(0);
                        for (var n = 0, l = o.length; n < l; ++n) {
                            o[n].apply(this, m)
                        }
                    }
                    return this
                };
                j.prototype.listeners = function(l) {
                    this._callbacks = this._callbacks || {};
                    return this._callbacks[l] || []
                };
                j.prototype.hasListeners = function(l) {
                    return !!this.listeners(l).length
                }
            }, {}],10: [function(l, j, h) {
                j.exports = g;
                function g(e) {
                    if (!g.enabled(e)) {
                        return function() {
                        }
                    }
                    return function(n) {
                        n = k(n);
                        var p = new Date;
                        var o = p - (g[e] || p);
                        g[e] = p;
                        n = e + " " + n + " +" + g.humanize(o);
                        window.console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                    }
                }
                g.names = [];
                g.skips = [];
                g.enable = function(o) {
                    try {
                        localStorage.debug = o
                    } catch (s) {
                    }
                    var r = (o || "").split(/[\s,]+/), n = r.length;
                    for (var p = 0; p < n; p++) {
                        o = r[p].replace("*", ".*?");
                        if (o[0] === "-") {
                            g.skips.push(new RegExp("^" + o.substr(1) + "$"))
                        } else {
                            g.names.push(new RegExp("^" + o + "$"))
                        }
                    }
                };
                g.disable = function() {
                    g.enable("")
                };
                g.humanize = function(n) {
                    var p = 1000, o = 60 * 1000, e = 60 * o;
                    if (n >= e) {
                        return (n / e).toFixed(1) + "h"
                    }
                    if (n >= o) {
                        return (n / o).toFixed(1) + "m"
                    }
                    if (n >= p) {
                        return (n / p | 0) + "s"
                    }
                    return n + "ms"
                };
                g.enabled = function(n) {
                    for (var o = 0, e = g.skips.length; o < e; o++) {
                        if (g.skips[o].test(n)) {
                            return false
                        }
                    }
                    for (var o = 0, e = g.names.length; o < e; o++) {
                        if (g.names[o].test(n)) {
                            return true
                        }
                    }
                    return false
                };
                function k(e) {
                    if (e instanceof Error) {
                        return e.stack || e.message
                    }
                    return e
                }
                try {
                    if (window.localStorage) {
                        g.enable(localStorage.debug)
                    }
                } catch (m) {
                }
            }, {}],11: [function(h, g, e) {
                g.exports = h("./lib/")
            }, {"./lib/": 12}],12: [function(h, g, e) {
                g.exports = h("./socket");
                g.exports.parser = h("engine.io-parser")
            }, {"./socket": 13,"engine.io-parser": 25}],13: [function(h, g, e) {
                (function(m) {
                    var p = h("./transports");
                    var w = h("component-emitter");
                    var k = h("debug")("engine.io-client:socket");
                    var s = h("indexof");
                    var j = h("engine.io-parser");
                    var o = h("parseuri");
                    var r = h("parsejson");
                    var n = h("parseqs");
                    g.exports = l;
                    function x() {
                    }
                    function l(P, O) {
                        if (!(this instanceof l)) {
                            return new l(P, O)
                        }
                        O = O || {};
                        if (P && "object" == typeof P) {
                            O = P;
                            P = null
                        }
                        if (P) {
                            P = o(P);
                            O.host = P.host;
                            O.secure = P.protocol == "https" || P.protocol == "wss";
                            O.port = P.port;
                            if (P.query) {
                                O.query = P.query
                            }
                        }
                        this.secure = null != O.secure ? O.secure : m.location && "https:" == location.protocol;
                        if (O.host) {
                            var N = O.host.split(":");
                            O.hostname = N.shift();
                            if (N.length) {
                                O.port = N.pop()
                            } else {
                                if (!O.port) {
                                    O.port = this.secure ? "443" : "80"
                                }
                            }
                        }
                        this.agent = O.agent || false;
                        this.hostname = O.hostname || (m.location ? location.hostname : "localhost");
                        this.port = O.port || (m.location && location.port ? location.port : this.secure ? 443 : 80);
                        this.query = O.query || {};
                        if ("string" == typeof this.query) {
                            this.query = n.decode(this.query)
                        }
                        this.upgrade = false !== O.upgrade;
                        this.path = (O.path || "/engine.io").replace(/\/$/, "") + "/";
                        this.forceJSONP = !!O.forceJSONP;
                        this.jsonp = false !== O.jsonp;
                        this.forceBase64 = !!O.forceBase64;
                        this.enablesXDR = !!O.enablesXDR;
                        this.timestampParam = O.timestampParam || "t";
                        this.timestampRequests = O.timestampRequests;
                        this.transports = O.transports || ["polling", "websocket"];
                        this.readyState = "";
                        this.writeBuffer = [];
                        this.callbackBuffer = [];
                        this.policyPort = O.policyPort || 843;
                        this.rememberUpgrade = O.rememberUpgrade || false;
                        this.binaryType = null;
                        this.onlyBinaryUpgrades = O.onlyBinaryUpgrades;
                        this.pfx = O.pfx || null;
                        this.key = O.key || null;
                        this.passphrase = O.passphrase || null;
                        this.cert = O.cert || null;
                        this.ca = O.ca || null;
                        this.ciphers = O.ciphers || null;
                        this.rejectUnauthorized = O.rejectUnauthorized || null;
                        this.open()
                    }
                    l.priorWebsocketSuccess = false;
                    w(l.prototype);
                    l.protocol = j.protocol;
                    l.Socket = l;
                    l.Transport = h("./transport");
                    l.transports = h("./transports");
                    l.parser = h("engine.io-parser");
                    l.prototype.createTransport = function(N) {
                        k('creating transport "%s"', N);
                        var O = v(this.query);
                        O.EIO = j.protocol;
                        O.transport = N;
                        if (this.id) {
                            O.sid = this.id
                        }
                        var P = new p[N]({agent: this.agent,hostname: this.hostname,port: this.port,secure: this.secure,path: this.path,query: O,forceJSONP: this.forceJSONP,jsonp: this.jsonp,forceBase64: this.forceBase64,enablesXDR: this.enablesXDR,timestampRequests: this.timestampRequests,timestampParam: this.timestampParam,policyPort: this.policyPort,socket: this,pfx: this.pfx,key: this.key,passphrase: this.passphrase,cert: this.cert,ca: this.ca,ciphers: this.ciphers,rejectUnauthorized: this.rejectUnauthorized});
                        return P
                    };
                    function v(O) {
                        var P = {};
                        for (var N in O) {
                            if (O.hasOwnProperty(N)) {
                                P[N] = O[N]
                            }
                        }
                        return P
                    }
                    l.prototype.open = function() {
                        var P;
                        if (this.rememberUpgrade && l.priorWebsocketSuccess && this.transports.indexOf("websocket") != -1) {
                            P = "websocket"
                        } else {
                            if (0 == this.transports.length) {
                                var N = this;
                                setTimeout(function() {
                                    N.emit("error", "No transports available")
                                }, 0);
                                return
                            } else {
                                P = this.transports[0]
                            }
                        }
                        this.readyState = "opening";
                        var P;
                        try {
                            P = this.createTransport(P)
                        } catch (O) {
                            this.transports.shift();
                            this.open();
                            return
                        }
                        P.open();
                        this.setTransport(P)
                    };
                    l.prototype.setTransport = function(O) {
                        k("setting transport %s", O.name);
                        var N = this;
                        if (this.transport) {
                            k("clearing existing transport %s", this.transport.name);
                            this.transport.removeAllListeners()
                        }
                        this.transport = O;
                        O.on("drain", function() {
                            N.onDrain()
                        }).on("packet", function(P) {
                            N.onPacket(P)
                        }).on("error", function(P) {
                            N.onError(P)
                        }).on("close", function() {
                            N.onClose("transport close")
                        })
                    };
                    l.prototype.probe = function(N) {
                        k('probing transport "%s"', N);
                        var Q = this.createTransport(N, {probe: 1}), S = false, W = this;
                        l.priorWebsocketSuccess = false;
                        function R() {
                            if (W.onlyBinaryUpgrades) {
                                var Y = !this.supportsBinary && W.transport.supportsBinary;
                                S = S || Y
                            }
                            if (S) {
                                return
                            }
                            k('probe transport "%s" opened', N);
                            Q.send([{type: "ping",data: "probe"}]);
                            Q.once("packet", function(aa) {
                                if (S) {
                                    return
                                }
                                if ("pong" == aa.type && "probe" == aa.data) {
                                    k('probe transport "%s" pong', N);
                                    W.upgrading = true;
                                    W.emit("upgrading", Q);
                                    if (!Q) {
                                        return
                                    }
                                    l.priorWebsocketSuccess = "websocket" == Q.name;
                                    k('pausing current transport "%s"', W.transport.name);
                                    W.transport.pause(function() {
                                        if (S) {
                                            return
                                        }
                                        if ("closed" == W.readyState) {
                                            return
                                        }
                                        k("changing transport and sending upgrade packet");
                                        O();
                                        W.setTransport(Q);
                                        Q.send([{type: "upgrade"}]);
                                        W.emit("upgrade", Q);
                                        Q = null;
                                        W.upgrading = false;
                                        W.flush()
                                    })
                                } else {
                                    k('probe transport "%s" failed', N);
                                    var Z = new Error("probe error");
                                    Z.transport = Q.name;
                                    W.emit("upgradeError", Z)
                                }
                            })
                        }
                        function U() {
                            if (S) {
                                return
                            }
                            S = true;
                            O();
                            Q.close();
                            Q = null
                        }
                        function T(Z) {
                            var Y = new Error("probe error: " + Z);
                            Y.transport = Q.name;
                            U();
                            k('probe transport "%s" failed because of error: %s', N, Z);
                            W.emit("upgradeError", Y)
                        }
                        function X() {
                            T("transport closed")
                        }
                        function V() {
                            T("socket closed")
                        }
                        function P(Y) {
                            if (Q && Y.name != Q.name) {
                                k('"%s" works - aborting "%s"', Y.name, Q.name);
                                U()
                            }
                        }
                        function O() {
                            Q.removeListener("open", R);
                            Q.removeListener("error", T);
                            Q.removeListener("close", X);
                            W.removeListener("close", V);
                            W.removeListener("upgrading", P)
                        }
                        Q.once("open", R);
                        Q.once("error", T);
                        Q.once("close", X);
                        this.once("close", V);
                        this.once("upgrading", P);
                        Q.open()
                    };
                    l.prototype.onOpen = function() {
                        k("socket open");
                        this.readyState = "open";
                        l.priorWebsocketSuccess = "websocket" == this.transport.name;
                        this.emit("open");
                        this.flush();
                        if ("open" == this.readyState && this.upgrade && this.transport.pause) {
                            k("starting upgrade probes");
                            for (var O = 0, N = this.upgrades.length; O < N; O++) {
                                this.probe(this.upgrades[O])
                            }
                        }
                    };
                    l.prototype.onPacket = function(O) {
                        if ("opening" == this.readyState || "open" == this.readyState) {
                            k('socket receive: type "%s", data "%s"', O.type, O.data);
                            this.emit("packet", O);
                            this.emit("heartbeat");
                            switch (O.type) {
                                case "open":
                                    this.onHandshake(r(O.data));
                                    break;
                                case "pong":
                                    this.setPing();
                                    break;
                                case "error":
                                    var N = new Error("server error");
                                    N.code = O.data;
                                    this.emit("error", N);
                                    break;
                                case "message":
                                    this.emit("data", O.data);
                                    this.emit("message", O.data);
                                    break
                            }
                        } else {
                            k('packet received with socket readyState "%s"', this.readyState)
                        }
                    };
                    l.prototype.onHandshake = function(N) {
                        this.emit("handshake", N);
                        this.id = N.sid;
                        this.transport.query.sid = N.sid;
                        this.upgrades = this.filterUpgrades(N.upgrades);
                        this.pingInterval = N.pingInterval;
                        this.pingTimeout = N.pingTimeout;
                        this.onOpen();
                        if ("closed" == this.readyState) {
                            return
                        }
                        this.setPing();
                        this.removeListener("heartbeat", this.onHeartbeat);
                        this.on("heartbeat", this.onHeartbeat)
                    };
                    l.prototype.onHeartbeat = function(O) {
                        clearTimeout(this.pingTimeoutTimer);
                        var N = this;
                        N.pingTimeoutTimer = setTimeout(function() {
                            if ("closed" == N.readyState) {
                                return
                            }
                            N.onClose("ping timeout")
                        }, O || N.pingInterval + N.pingTimeout)
                    };
                    l.prototype.setPing = function() {
                        var N = this;
                        clearTimeout(N.pingIntervalTimer);
                        N.pingIntervalTimer = setTimeout(function() {
                            k("writing ping packet - expecting pong within %sms", N.pingTimeout);
                            N.ping();
                            N.onHeartbeat(N.pingTimeout)
                        }, N.pingInterval)
                    };
                    l.prototype.ping = function() {
                        this.sendPacket("ping")
                    };
                    l.prototype.onDrain = function() {
                        for (var N = 0; N < this.prevBufferLen; N++) {
                            if (this.callbackBuffer[N]) {
                                this.callbackBuffer[N]()
                            }
                        }
                        this.writeBuffer.splice(0, this.prevBufferLen);
                        this.callbackBuffer.splice(0, this.prevBufferLen);
                        this.prevBufferLen = 0;
                        if (this.writeBuffer.length == 0) {
                            this.emit("drain")
                        } else {
                            this.flush()
                        }
                    };
                    l.prototype.flush = function() {
                        if ("closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                            k("flushing %d packets in socket", this.writeBuffer.length);
                            this.transport.send(this.writeBuffer);
                            this.prevBufferLen = this.writeBuffer.length;
                            this.emit("flush")
                        }
                    };
                    l.prototype.write = l.prototype.send = function(O, N) {
                        this.sendPacket("message", O, N);
                        return this
                    };
                    l.prototype.sendPacket = function(O, P, N) {
                        if ("closing" == this.readyState || "closed" == this.readyState) {
                            return
                        }
                        var Q = {type: O,data: P};
                        this.emit("packetCreate", Q);
                        this.writeBuffer.push(Q);
                        this.callbackBuffer.push(N);
                        this.flush()
                    };
                    l.prototype.close = function() {
                        if ("opening" == this.readyState || "open" == this.readyState) {
                            this.readyState = "closing";
                            var N = this;
                            function Q() {
                                N.onClose("forced close");
                                k("socket closing - telling transport to close");
                                N.transport.close()
                            }
                            function O() {
                                N.removeListener("upgrade", O);
                                N.removeListener("upgradeError", O);
                                Q()
                            }
                            function P() {
                                N.once("upgrade", O);
                                N.once("upgradeError", O)
                            }
                            if (this.writeBuffer.length) {
                                this.once("drain", function() {
                                    if (this.upgrading) {
                                        P()
                                    } else {
                                        Q()
                                    }
                                })
                            } else {
                                if (this.upgrading) {
                                    P()
                                } else {
                                    Q()
                                }
                            }
                        }
                        return this
                    };
                    l.prototype.onError = function(N) {
                        k("socket error %j", N);
                        l.priorWebsocketSuccess = false;
                        this.emit("error", N);
                        this.onClose("transport error", N)
                    };
                    l.prototype.onClose = function(O, P) {
                        if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                            k('socket close with reason: "%s"', O);
                            var N = this;
                            clearTimeout(this.pingIntervalTimer);
                            clearTimeout(this.pingTimeoutTimer);
                            setTimeout(function() {
                                N.writeBuffer = [];
                                N.callbackBuffer = [];
                                N.prevBufferLen = 0
                            }, 0);
                            this.transport.removeAllListeners("close");
                            this.transport.close();
                            this.transport.removeAllListeners();
                            this.readyState = "closed";
                            this.id = null;
                            this.emit("close", O, P)
                        }
                    };
                    l.prototype.filterUpgrades = function(P) {
                        var Q = [];
                        for (var O = 0, N = P.length; O < N; O++) {
                            if (~s(this.transports, P[O])) {
                                Q.push(P[O])
                            }
                        }
                        return Q
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {"./transport": 14,"./transports": 15,"component-emitter": 9,debug: 22,"engine.io-parser": 25,indexof: 42,parsejson: 34,parseqs: 35,parseuri: 36}],14: [function(j, g, e) {
                var l = j("engine.io-parser");
                var h = j("component-emitter");
                g.exports = k;
                function k(m) {
                    this.path = m.path;
                    this.hostname = m.hostname;
                    this.port = m.port;
                    this.secure = m.secure;
                    this.query = m.query;
                    this.timestampParam = m.timestampParam;
                    this.timestampRequests = m.timestampRequests;
                    this.readyState = "";
                    this.agent = m.agent || false;
                    this.socket = m.socket;
                    this.enablesXDR = m.enablesXDR;
                    this.pfx = m.pfx;
                    this.key = m.key;
                    this.passphrase = m.passphrase;
                    this.cert = m.cert;
                    this.ca = m.ca;
                    this.ciphers = m.ciphers;
                    this.rejectUnauthorized = m.rejectUnauthorized
                }
                h(k.prototype);
                k.timestamps = 0;
                k.prototype.onError = function(o, n) {
                    var m = new Error(o);
                    m.type = "TransportError";
                    m.description = n;
                    this.emit("error", m);
                    return this
                };
                k.prototype.open = function() {
                    if ("closed" == this.readyState || "" == this.readyState) {
                        this.readyState = "opening";
                        this.doOpen()
                    }
                    return this
                };
                k.prototype.close = function() {
                    if ("opening" == this.readyState || "open" == this.readyState) {
                        this.doClose();
                        this.onClose()
                    }
                    return this
                };
                k.prototype.send = function(m) {
                    if ("open" == this.readyState) {
                        this.write(m)
                    } else {
                        throw new Error("Transport not open")
                    }
                };
                k.prototype.onOpen = function() {
                    this.readyState = "open";
                    this.writable = true;
                    this.emit("open")
                };
                k.prototype.onData = function(m) {
                    var n = l.decodePacket(m, this.socket.binaryType);
                    this.onPacket(n)
                };
                k.prototype.onPacket = function(m) {
                    this.emit("packet", m)
                };
                k.prototype.onClose = function() {
                    this.readyState = "closed";
                    this.emit("close")
                }
            }, {"component-emitter": 9,"engine.io-parser": 25}],15: [function(h, g, e) {
                (function(m) {
                    var l = h("xmlhttprequest");
                    var k = h("./polling-xhr");
                    var o = h("./polling-jsonp");
                    var j = h("./websocket");
                    e.polling = n;
                    e.websocket = j;
                    function n(s) {
                        var N;
                        var v = false;
                        var r = false;
                        var x = false !== s.jsonp;
                        if (m.location) {
                            var w = "https:" == location.protocol;
                            var p = location.port;
                            if (!p) {
                                p = w ? 443 : 80
                            }
                            v = s.hostname != location.hostname || p != s.port;
                            r = s.secure != w
                        }
                        s.xdomain = v;
                        s.xscheme = r;
                        N = new l(s);
                        if ("open" in N && !s.forceJSONP) {
                            return new k(s)
                        } else {
                            if (!x) {
                                throw new Error("JSONP disabled")
                            }
                            return new o(s)
                        }
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {"./polling-jsonp": 16,"./polling-xhr": 17,"./websocket": 19,xmlhttprequest: 20}],16: [function(h, g, e) {
                (function(j) {
                    var s = h("./polling");
                    var l = h("component-inherit");
                    g.exports = n;
                    var p = /\n/g;
                    var k = /\\n/g;
                    var r;
                    var o = 0;
                    function m() {
                    }
                    function n(w) {
                        s.call(this, w);
                        this.query = this.query || {};
                        if (!r) {
                            if (!j.___eio) {
                                j.___eio = []
                            }
                            r = j.___eio
                        }
                        this.index = r.length;
                        var v = this;
                        r.push(function(x) {
                            v.onData(x)
                        });
                        this.query.j = this.index;
                        if (j.document && j.addEventListener) {
                            j.addEventListener("beforeunload", function() {
                                if (v.script) {
                                    v.script.onerror = m
                                }
                            }, false)
                        }
                    }
                    l(n, s);
                    n.prototype.supportsBinary = false;
                    n.prototype.doClose = function() {
                        if (this.script) {
                            this.script.parentNode.removeChild(this.script);
                            this.script = null
                        }
                        if (this.form) {
                            this.form.parentNode.removeChild(this.form);
                            this.form = null;
                            this.iframe = null
                        }
                        s.prototype.doClose.call(this)
                    };
                    n.prototype.doPoll = function() {
                        var w = this;
                        var v = document.createElement("script");
                        if (this.script) {
                            this.script.parentNode.removeChild(this.script);
                            this.script = null
                        }
                        v.async = true;
                        v.src = this.uri();
                        v.onerror = function(O) {
                            w.onError("jsonp poll error", O)
                        };
                        var N = document.getElementsByTagName("script")[0];
                        N.parentNode.insertBefore(v, N);
                        this.script = v;
                        var x = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                        if (x) {
                            setTimeout(function() {
                                var O = document.createElement("iframe");
                                document.body.appendChild(O);
                                document.body.removeChild(O)
                            }, 100)
                        }
                    };
                    n.prototype.doWrite = function(Q, S) {
                        var T = this;
                        if (!this.form) {
                            var w = document.createElement("form");
                            var x = document.createElement("textarea");
                            var v = this.iframeId = "eio_iframe_" + this.index;
                            var P;
                            w.className = "socketio";
                            w.style.position = "absolute";
                            w.style.top = "-1000px";
                            w.style.left = "-1000px";
                            w.target = v;
                            w.method = "POST";
                            w.setAttribute("accept-charset", "utf-8");
                            x.name = "d";
                            w.appendChild(x);
                            document.body.appendChild(w);
                            this.form = w;
                            this.area = x
                        }
                        this.form.action = this.uri();
                        function N() {
                            O();
                            S()
                        }
                        function O() {
                            if (T.iframe) {
                                try {
                                    T.form.removeChild(T.iframe)
                                } catch (V) {
                                    T.onError("jsonp polling iframe removal error", V)
                                }
                            }
                            try {
                                var U = '<iframe src="javascript:0" name="' + T.iframeId + '">';
                                P = document.createElement(U)
                            } catch (V) {
                                P = document.createElement("iframe");
                                P.name = T.iframeId;
                                P.src = "javascript:0"
                            }
                            P.id = T.iframeId;
                            T.form.appendChild(P);
                            T.iframe = P
                        }
                        O();
                        Q = Q.replace(k, "\\\n");
                        this.area.value = Q.replace(p, "\\n");
                        try {
                            this.form.submit()
                        } catch (R) {
                        }
                        if (this.iframe.attachEvent) {
                            this.iframe.onreadystatechange = function() {
                                if (T.iframe.readyState == "complete") {
                                    N()
                                }
                            }
                        } else {
                            this.iframe.onload = N
                        }
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {"./polling": 18,"component-inherit": 21}],17: [function(h, g, e) {
                (function(l) {
                    var r = h("xmlhttprequest");
                    var s = h("./polling");
                    var p = h("component-emitter");
                    var m = h("component-inherit");
                    var k = h("debug")("engine.io-client:polling-xhr");
                    g.exports = o;
                    g.exports.Request = j;
                    function n() {
                    }
                    function o(x) {
                        s.call(this, x);
                        if (l.location) {
                            var N = "https:" == location.protocol;
                            var w = location.port;
                            if (!w) {
                                w = N ? 443 : 80
                            }
                            this.xd = x.hostname != l.location.hostname || w != x.port;
                            this.xs = x.secure != N
                        }
                    }
                    m(o, s);
                    o.prototype.supportsBinary = true;
                    o.prototype.request = function(w) {
                        w = w || {};
                        w.uri = this.uri();
                        w.xd = this.xd;
                        w.xs = this.xs;
                        w.agent = this.agent || false;
                        w.supportsBinary = this.supportsBinary;
                        w.enablesXDR = this.enablesXDR;
                        w.pfx = this.pfx;
                        w.key = this.key;
                        w.passphrase = this.passphrase;
                        w.cert = this.cert;
                        w.ca = this.ca;
                        w.ciphers = this.ciphers;
                        w.rejectUnauthorized = this.rejectUnauthorized;
                        return new j(w)
                    };
                    o.prototype.doWrite = function(P, x) {
                        var O = typeof P !== "string" && P !== undefined;
                        var N = this.request({method: "POST",data: P,isBinary: O});
                        var w = this;
                        N.on("success", x);
                        N.on("error", function(Q) {
                            w.onError("xhr post error", Q)
                        });
                        this.sendXhr = N
                    };
                    o.prototype.doPoll = function() {
                        k("xhr poll");
                        var x = this.request();
                        var w = this;
                        x.on("data", function(N) {
                            w.onData(N)
                        });
                        x.on("error", function(N) {
                            w.onError("xhr poll error", N)
                        });
                        this.pollXhr = x
                    };
                    function j(w) {
                        this.method = w.method || "GET";
                        this.uri = w.uri;
                        this.xd = !!w.xd;
                        this.xs = !!w.xs;
                        this.async = false !== w.async;
                        this.data = undefined != w.data ? w.data : null;
                        this.agent = w.agent;
                        this.isBinary = w.isBinary;
                        this.supportsBinary = w.supportsBinary;
                        this.enablesXDR = w.enablesXDR;
                        this.pfx = w.pfx;
                        this.key = w.key;
                        this.passphrase = w.passphrase;
                        this.cert = w.cert;
                        this.ca = w.ca;
                        this.ciphers = w.ciphers;
                        this.rejectUnauthorized = w.rejectUnauthorized;
                        this.create()
                    }
                    p(j.prototype);
                    j.prototype.create = function() {
                        var x = {agent: this.agent,xdomain: this.xd,xscheme: this.xs,enablesXDR: this.enablesXDR};
                        x.pfx = this.pfx;
                        x.key = this.key;
                        x.passphrase = this.passphrase;
                        x.cert = this.cert;
                        x.ca = this.ca;
                        x.ciphers = this.ciphers;
                        x.rejectUnauthorized = this.rejectUnauthorized;
                        var O = this.xhr = new r(x);
                        var w = this;
                        try {
                            k("xhr open %s: %s", this.method, this.uri);
                            O.open(this.method, this.uri, this.async);
                            if (this.supportsBinary) {
                                O.responseType = "arraybuffer"
                            }
                            if ("POST" == this.method) {
                                try {
                                    if (this.isBinary) {
                                        O.setRequestHeader("Content-type", "application/octet-stream")
                                    } else {
                                        O.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                    }
                                } catch (N) {
                                }
                            }
                            if ("withCredentials" in O) {
                                O.withCredentials = true
                            }
                            if (this.hasXDR()) {
                                O.onload = function() {
                                    w.onLoad()
                                };
                                O.onerror = function() {
                                    w.onError(O.responseText)
                                }
                            } else {
                                O.onreadystatechange = function() {
                                    if (4 != O.readyState) {
                                        return
                                    }
                                    if (200 == O.status || 1223 == O.status) {
                                        w.onLoad()
                                    } else {
                                        setTimeout(function() {
                                            w.onError(O.status)
                                        }, 0)
                                    }
                                }
                            }
                            k("xhr data %s", this.data);
                            O.send(this.data)
                        } catch (N) {
                            setTimeout(function() {
                                w.onError(N)
                            }, 0);
                            return
                        }
                        if (l.document) {
                            this.index = j.requestsCount++;
                            j.requests[this.index] = this
                        }
                    };
                    j.prototype.onSuccess = function() {
                        this.emit("success");
                        this.cleanup()
                    };
                    j.prototype.onData = function(w) {
                        this.emit("data", w);
                        this.onSuccess()
                    };
                    j.prototype.onError = function(w) {
                        this.emit("error", w);
                        this.cleanup(true)
                    };
                    j.prototype.cleanup = function(w) {
                        if ("undefined" == typeof this.xhr || null === this.xhr) {
                            return
                        }
                        if (this.hasXDR()) {
                            this.xhr.onload = this.xhr.onerror = n
                        } else {
                            this.xhr.onreadystatechange = n
                        }
                        if (w) {
                            try {
                                this.xhr.abort()
                            } catch (x) {
                            }
                        }
                        if (l.document) {
                            delete j.requests[this.index]
                        }
                        this.xhr = null
                    };
                    j.prototype.onLoad = function() {
                        var w;
                        try {
                            var N;
                            try {
                                N = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                            } catch (x) {
                            }
                            if (N === "application/octet-stream") {
                                w = this.xhr.response
                            } else {
                                if (!this.supportsBinary) {
                                    w = this.xhr.responseText
                                } else {
                                    w = "ok"
                                }
                            }
                        } catch (x) {
                            this.onError(x)
                        }
                        if (null != w) {
                            this.onData(w)
                        }
                    };
                    j.prototype.hasXDR = function() {
                        return "undefined" !== typeof l.XDomainRequest && !this.xs && this.enablesXDR
                    };
                    j.prototype.abort = function() {
                        this.cleanup()
                    };
                    if (l.document) {
                        j.requestsCount = 0;
                        j.requests = {};
                        if (l.attachEvent) {
                            l.attachEvent("onunload", v)
                        } else {
                            if (l.addEventListener) {
                                l.addEventListener("beforeunload", v, false)
                            }
                        }
                    }
                    function v() {
                        for (var w in j.requests) {
                            if (j.requests.hasOwnProperty(w)) {
                                j.requests[w].abort()
                            }
                        }
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {"./polling": 18,"component-emitter": 9,"component-inherit": 21,debug: 22,xmlhttprequest: 20}],18: [function(h, j, m) {
                var o = h("../transport");
                var l = h("parseqs");
                var e = h("engine.io-parser");
                var n = h("component-inherit");
                var g = h("debug")("engine.io-client:polling");
                j.exports = p;
                var k = function() {
                    var r = h("xmlhttprequest");
                    var s = new r({xdomain: false});
                    return null != s.responseType
                }();
                function p(s) {
                    var r = s && s.forceBase64;
                    if (!k || r) {
                        this.supportsBinary = false
                    }
                    o.call(this, s)
                }
                n(p, o);
                p.prototype.name = "polling";
                p.prototype.doOpen = function() {
                    this.poll()
                };
                p.prototype.pause = function(r) {
                    var x = 0;
                    var s = this;
                    this.readyState = "pausing";
                    function w() {
                        g("paused");
                        s.readyState = "paused";
                        r()
                    }
                    if (this.polling || !this.writable) {
                        var v = 0;
                        if (this.polling) {
                            g("we are currently polling - waiting to pause");
                            v++;
                            this.once("pollComplete", function() {
                                g("pre-pause polling complete");
                                --v || w()
                            })
                        }
                        if (!this.writable) {
                            g("we are currently writing - waiting to pause");
                            v++;
                            this.once("drain", function() {
                                g("pre-pause writing complete");
                                --v || w()
                            })
                        }
                    } else {
                        w()
                    }
                };
                p.prototype.poll = function() {
                    g("polling");
                    this.polling = true;
                    this.doPoll();
                    this.emit("poll")
                };
                p.prototype.onData = function(s) {
                    var r = this;
                    g("polling got data %s", s);
                    var v = function(N, w, x) {
                        if ("opening" == r.readyState) {
                            r.onOpen()
                        }
                        if ("close" == N.type) {
                            r.onClose();
                            return false
                        }
                        r.onPacket(N)
                    };
                    e.decodePayload(s, this.socket.binaryType, v);
                    if ("closed" != this.readyState) {
                        this.polling = false;
                        this.emit("pollComplete");
                        if ("open" == this.readyState) {
                            this.poll()
                        } else {
                            g('ignoring poll - transport state "%s"', this.readyState)
                        }
                    }
                };
                p.prototype.doClose = function() {
                    var r = this;
                    function s() {
                        g("writing close packet");
                        r.write([{type: "close"}])
                    }
                    if ("open" == this.readyState) {
                        g("transport open - closing");
                        s()
                    } else {
                        g("transport not open - deferring close");
                        this.once("open", s)
                    }
                };
                p.prototype.write = function(v) {
                    var s = this;
                    this.writable = false;
                    var r = function() {
                        s.writable = true;
                        s.emit("drain")
                    };
                    var s = this;
                    e.encodePayload(v, this.supportsBinary, function(w) {
                        s.doWrite(w, r)
                    })
                };
                p.prototype.uri = function() {
                    var v = this.query || {};
                    var s = this.secure ? "https" : "http";
                    var r = "";
                    if (false !== this.timestampRequests) {
                        v[this.timestampParam] = +new Date + "-" + o.timestamps++
                    }
                    if (!this.supportsBinary && !v.sid) {
                        v.b64 = 1
                    }
                    v = l.encode(v);
                    if (this.port && ("https" == s && this.port != 443 || "http" == s && this.port != 80)) {
                        r = ":" + this.port
                    }
                    if (v.length) {
                        v = "?" + v
                    }
                    return s + "://" + this.hostname + r + this.path + v
                }
            }, {"../transport": 14,"component-inherit": 21,debug: 22,"engine.io-parser": 25,parseqs: 35,xmlhttprequest: 20}],19: [function(j, k, m) {
                var o = j("../transport");
                var e = j("engine.io-parser");
                var l = j("parseqs");
                var n = j("component-inherit");
                var g = j("debug")("engine.io-client:websocket");
                var p = j("ws");
                k.exports = h;
                function h(s) {
                    var r = s && s.forceBase64;
                    if (r) {
                        this.supportsBinary = false
                    }
                    o.call(this, s)
                }
                n(h, o);
                h.prototype.name = "websocket";
                h.prototype.supportsBinary = true;
                h.prototype.doOpen = function() {
                    if (!this.check()) {
                        return
                    }
                    var r = this;
                    var w = this.uri();
                    var v = void 0;
                    var s = {agent: this.agent};
                    s.pfx = this.pfx;
                    s.key = this.key;
                    s.passphrase = this.passphrase;
                    s.cert = this.cert;
                    s.ca = this.ca;
                    s.ciphers = this.ciphers;
                    s.rejectUnauthorized = this.rejectUnauthorized;
                    this.ws = new p(w, v, s);
                    if (this.ws.binaryType === undefined) {
                        this.supportsBinary = false
                    }
                    this.ws.binaryType = "arraybuffer";
                    this.addEventListeners()
                };
                h.prototype.addEventListeners = function() {
                    var r = this;
                    this.ws.onopen = function() {
                        r.onOpen()
                    };
                    this.ws.onclose = function() {
                        r.onClose()
                    };
                    this.ws.onmessage = function(s) {
                        r.onData(s.data)
                    };
                    this.ws.onerror = function(s) {
                        r.onError("websocket error", s)
                    }
                };
                if ("undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
                    h.prototype.onData = function(s) {
                        var r = this;
                        setTimeout(function() {
                            o.prototype.onData.call(r, s)
                        }, 0)
                    }
                }
                h.prototype.write = function(w) {
                    var s = this;
                    this.writable = false;
                    for (var v = 0, r = w.length; v < r; v++) {
                        e.encodePacket(w[v], this.supportsBinary, function(N) {
                            try {
                                s.ws.send(N)
                            } catch (O) {
                                g("websocket closed before onclose event")
                            }
                        })
                    }
                    function x() {
                        s.writable = true;
                        s.emit("drain")
                    }
                    setTimeout(x, 0)
                };
                h.prototype.onClose = function() {
                    o.prototype.onClose.call(this)
                };
                h.prototype.doClose = function() {
                    if (typeof this.ws !== "undefined") {
                        this.ws.close()
                    }
                };
                h.prototype.uri = function() {
                    var v = this.query || {};
                    var s = this.secure ? "wss" : "ws";
                    var r = "";
                    if (this.port && ("wss" == s && this.port != 443 || "ws" == s && this.port != 80)) {
                        r = ":" + this.port
                    }
                    if (this.timestampRequests) {
                        v[this.timestampParam] = +new Date
                    }
                    if (!this.supportsBinary) {
                        v.b64 = 1
                    }
                    v = l.encode(v);
                    if (v.length) {
                        v = "?" + v
                    }
                    return s + "://" + this.hostname + r + this.path + v
                };
                h.prototype.check = function() {
                    return !!p && !("__initialize" in p && this.name === h.prototype.name)
                }
            }, {"../transport": 14,"component-inherit": 21,debug: 22,"engine.io-parser": 25,parseqs: 35,ws: 37}],20: [function(j, h, g) {
                var e = j("has-cors");
                h.exports = function(n) {
                    var m = n.xdomain;
                    var k = n.xscheme;
                    var l = n.enablesXDR;
                    try {
                        if ("undefined" != typeof XMLHttpRequest && (!m || e)) {
                            return new XMLHttpRequest
                        }
                    } catch (o) {
                    }
                    try {
                        if ("undefined" != typeof XDomainRequest && !k && l) {
                            return new XDomainRequest
                        }
                    } catch (o) {
                    }
                    if (!m) {
                        try {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        } catch (o) {
                        }
                    }
                }
            }, {"has-cors": 40}],21: [function(h, g, e) {
                g.exports = function(k, j) {
                    var l = function() {
                    };
                    l.prototype = j.prototype;
                    k.prototype = new l;
                    k.prototype.constructor = k
                }
            }, {}],22: [function(l, g, e) {
                e = g.exports = l("./debug");
                e.log = h;
                e.formatArgs = j;
                e.save = k;
                e.load = m;
                e.useColors = n;
                e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];
                function n() {
                    return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
                }
                e.formatters.j = function(o) {
                    return JSON.stringify(o)
                };
                function j() {
                    var p = arguments;
                    var s = this.useColors;
                    p[0] = (s ? "%c" : "") + this.namespace + (s ? " %c" : " ") + p[0] + (s ? "%c " : " ") + "+" + e.humanize(this.diff);
                    if (!s) {
                        return p
                    }
                    var v = "color: " + this.color;
                    p = [p[0], v, "color: inherit"].concat(Array.prototype.slice.call(p, 1));
                    var o = 0;
                    var r = 0;
                    p[0].replace(/%[a-z%]/g, function(w) {
                        if ("%" === w) {
                            return
                        }
                        o++;
                        if ("%c" === w) {
                            r = o
                        }
                    });
                    p.splice(r, 0, v);
                    return p
                }
                function h() {
                    return "object" == typeof console && "function" == typeof console.log && Function.prototype.apply.call(console.log, console, arguments)
                }
                function k(o) {
                    try {
                        if (null == o) {
                            localStorage.removeItem("debug")
                        } else {
                            localStorage.debug = o
                        }
                    } catch (p) {
                    }
                }
                function m() {
                    var o;
                    try {
                        o = localStorage.debug
                    } catch (p) {
                    }
                    return o
                }
                e.enable(m())
            }, {"./debug": 23}],23: [function(j, k, m) {
                m = k.exports = h;
                m.coerce = l;
                m.disable = n;
                m.enable = o;
                m.enabled = r;
                m.humanize = j("ms");
                m.names = [];
                m.skips = [];
                m.formatters = {};
                var e = 0;
                var g;
                function p() {
                    return m.colors[e++ % m.colors.length]
                }
                function h(x) {
                    function w() {
                    }
                    w.enabled = false;
                    function s() {
                        var N = s;
                        var R = +new Date;
                        var Q = R - (g || R);
                        N.diff = Q;
                        N.prev = g;
                        N.curr = R;
                        g = R;
                        if (null == N.useColors) {
                            N.useColors = m.useColors()
                        }
                        if (null == N.color && N.useColors) {
                            N.color = p()
                        }
                        var P = Array.prototype.slice.call(arguments);
                        P[0] = m.coerce(P[0]);
                        if ("string" !== typeof P[0]) {
                            P = ["%o"].concat(P)
                        }
                        var O = 0;
                        P[0] = P[0].replace(/%([a-z%])/g, function(T, V) {
                            if (T === "%") {
                                return T
                            }
                            O++;
                            var U = m.formatters[V];
                            if ("function" === typeof U) {
                                var W = P[O];
                                T = U.call(N, W);
                                P.splice(O, 1);
                                O--
                            }
                            return T
                        });
                        if ("function" === typeof m.formatArgs) {
                            P = m.formatArgs.apply(N, P)
                        }
                        var S = s.log || m.log || console.log.bind(console);
                        S.apply(N, P)
                    }
                    s.enabled = true;
                    var v = m.enabled(x) ? s : w;
                    v.namespace = x;
                    return v
                }
                function o(x) {
                    m.save(x);
                    var w = (x || "").split(/[\s,]+/);
                    var s = w.length;
                    for (var v = 0; v < s; v++) {
                        if (!w[v]) {
                            continue
                        }
                        x = w[v].replace(/\*/g, ".*?");
                        if (x[0] === "-") {
                            m.skips.push(new RegExp("^" + x.substr(1) + "$"))
                        } else {
                            m.names.push(new RegExp("^" + x + "$"))
                        }
                    }
                }
                function n() {
                    m.enable("")
                }
                function r(v) {
                    var w, s;
                    for (w = 0, s = m.skips.length; w < s; w++) {
                        if (m.skips[w].test(v)) {
                            return false
                        }
                    }
                    for (w = 0, s = m.names.length; w < s; w++) {
                        if (m.names[w].test(v)) {
                            return true
                        }
                    }
                    return false
                }
                function l(s) {
                    if (s instanceof Error) {
                        return s.stack || s.message
                    }
                    return s
                }
            }, {ms: 24}],24: [function(e, g, l) {
                var x = 1000;
                var j = x * 60;
                var o = j * 60;
                var p = o * 24;
                var r = p * 365.25;
                g.exports = function(m, h) {
                    h = h || {};
                    if ("string" == typeof m) {
                        return k(m)
                    }
                    return h["long"] ? w(m) : n(m)
                };
                function k(s) {
                    var h = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(s);
                    if (!h) {
                        return
                    }
                    var N = parseFloat(h[1]);
                    var m = (h[2] || "ms").toLowerCase();
                    switch (m) {
                        case "years":
                        case "year":
                        case "y":
                            return N * r;
                        case "days":
                        case "day":
                        case "d":
                            return N * p;
                        case "hours":
                        case "hour":
                        case "h":
                            return N * o;
                        case "minutes":
                        case "minute":
                        case "m":
                            return N * j;
                        case "seconds":
                        case "second":
                        case "s":
                            return N * x;
                        case "ms":
                            return N
                    }
                }
                function n(h) {
                    if (h >= p) {
                        return Math.round(h / p) + "d"
                    }
                    if (h >= o) {
                        return Math.round(h / o) + "h"
                    }
                    if (h >= j) {
                        return Math.round(h / j) + "m"
                    }
                    if (h >= x) {
                        return Math.round(h / x) + "s"
                    }
                    return h + "ms"
                }
                function w(h) {
                    return v(h, p, "day") || v(h, o, "hour") || v(h, j, "minute") || v(h, x, "second") || h + " ms"
                }
                function v(m, s, h) {
                    if (m < s) {
                        return
                    }
                    if (m < s * 1.5) {
                        return Math.floor(m / s) + " " + h
                    }
                    return Math.ceil(m / s) + " " + h + "s"
                }
            }, {}],25: [function(h, g, e) {
                (function(N) {
                    var v = h("./keys");
                    var s = h("has-binary");
                    var p = h("arraybuffer.slice");
                    var P = h("base64-arraybuffer");
                    var l = h("after");
                    var j = h("utf8");
                    var S = navigator.userAgent.match(/Android/i);
                    var x = /PhantomJS/i.test(navigator.userAgent);
                    var r = S || x;
                    e.protocol = 3;
                    var w = e.packets = {open: 0,close: 1,ping: 2,pong: 3,message: 4,upgrade: 5,noop: 6};
                    var m = v(w);
                    var n = {type: "error",data: "parser error"};
                    var o = h("blob");
                    e.encodePacket = function(W, Z, X, Y) {
                        if ("function" == typeof Z) {
                            Y = Z;
                            Z = false
                        }
                        if ("function" == typeof X) {
                            Y = X;
                            X = null
                        }
                        var U = W.data === undefined ? undefined : W.data.buffer || W.data;
                        if (N.ArrayBuffer && U instanceof ArrayBuffer) {
                            return k(W, Z, Y)
                        } else {
                            if (o && U instanceof N.Blob) {
                                return Q(W, Z, Y)
                            }
                        }
                        if (U && U.base64) {
                            return O(W, Y)
                        }
                        var V = w[W.type];
                        if (undefined !== W.data) {
                            V += X ? j.encode(String(W.data)) : String(W.data)
                        }
                        return Y("" + V)
                    };
                    function O(V, W) {
                        var U = "b" + e.packets[V.type] + V.data.data;
                        return W(U)
                    }
                    function k(Y, aa, Z) {
                        if (!aa) {
                            return e.encodeBase64Packet(Y, Z)
                        }
                        var X = Y.data;
                        var W = new Uint8Array(X);
                        var V = new Uint8Array(1 + X.byteLength);
                        V[0] = w[Y.type];
                        for (var U = 0; U < W.length; U++) {
                            V[U + 1] = W[U]
                        }
                        return Z(V.buffer)
                    }
                    function R(V, X, W) {
                        if (!X) {
                            return e.encodeBase64Packet(V, W)
                        }
                        var U = new FileReader;
                        U.onload = function() {
                            V.data = U.result;
                            e.encodePacket(V, X, true, W)
                        };
                        return U.readAsArrayBuffer(V.data)
                    }
                    function Q(W, Y, X) {
                        if (!Y) {
                            return e.encodeBase64Packet(W, X)
                        }
                        if (r) {
                            return R(W, Y, X)
                        }
                        var V = new Uint8Array(1);
                        V[0] = w[W.type];
                        var U = new o([V.buffer, W.data]);
                        return X(U)
                    }
                    e.encodeBase64Packet = function(U, ab) {
                        var ac = "b" + e.packets[U.type];
                        if (o && U.data instanceof o) {
                            var Y = new FileReader;
                            Y.onload = function() {
                                var ad = Y.result.split(",")[1];
                                ab(ac + ad)
                            };
                            return Y.readAsDataURL(U.data)
                        }
                        var aa;
                        try {
                            aa = String.fromCharCode.apply(null, new Uint8Array(U.data))
                        } catch (Z) {
                            var V = new Uint8Array(U.data);
                            var W = new Array(V.length);
                            for (var X = 0; X < V.length; X++) {
                                W[X] = V[X]
                            }
                            aa = String.fromCharCode.apply(null, W)
                        }
                        ac += N.btoa(aa);
                        return ab(ac)
                    };
                    e.decodePacket = function(Y, aa, U) {
                        if (typeof Y == "string" || Y === undefined) {
                            if (Y.charAt(0) == "b") {
                                return e.decodeBase64Packet(Y.substr(1), aa)
                            }
                            if (U) {
                                try {
                                    Y = j.decode(Y)
                                } catch (Z) {
                                    return n
                                }
                            }
                            var X = Y.charAt(0);
                            if (Number(X) != X || !m[X]) {
                                return n
                            }
                            if (Y.length > 1) {
                                return {type: m[X],data: Y.substring(1)}
                            } else {
                                return {type: m[X]}
                            }
                        }
                        var V = new Uint8Array(Y);
                        var X = V[0];
                        var W = p(Y, 1);
                        if (o && aa === "blob") {
                            W = new o([W])
                        }
                        return {type: m[X],data: W}
                    };
                    e.decodeBase64Packet = function(W, X) {
                        var U = m[W.charAt(0)];
                        if (!N.ArrayBuffer) {
                            return {type: U,data: {base64: true,data: W.substr(1)}}
                        }
                        var V = P.decode(W.substr(1));
                        if (X === "blob" && o) {
                            V = new o([V])
                        }
                        return {type: U,data: V}
                    };
                    e.encodePayload = function(X, Z, Y) {
                        if (typeof Z == "function") {
                            Y = Z;
                            Z = null
                        }
                        var W = s(X);
                        if (Z && W) {
                            if (o && !r) {
                                return e.encodePayloadAsBlob(X, Y)
                            }
                            return e.encodePayloadAsArrayBuffer(X, Y)
                        }
                        if (!X.length) {
                            return Y("0:")
                        }
                        function U(aa) {
                            return aa.length + ":" + aa
                        }
                        function V(ab, aa) {
                            e.encodePacket(ab, !W ? false : Z, true, function(ac) {
                                aa(null, U(ac))
                            })
                        }
                        T(X, V, function(ab, aa) {
                            return Y(aa.join(""))
                        })
                    };
                    function T(Y, aa, V) {
                        var U = new Array(Y.length);
                        var Z = l(Y.length, V);
                        var W = function(ac, ad, ab) {
                            aa(ad, function(ae, af) {
                                U[ac] = af;
                                ab(ae, U)
                            })
                        };
                        for (var X = 0; X < Y.length; X++) {
                            W(X, Y[X], Z)
                        }
                    }
                    e.decodePayload = function(ab, U, ae) {
                        if (typeof ab != "string") {
                            return e.decodePayloadAsBinary(ab, U, ae)
                        }
                        if (typeof U === "function") {
                            ae = U;
                            U = null
                        }
                        var V;
                        if (ab == "") {
                            return ae(n, 0, 1)
                        }
                        var W = "", X, Y;
                        for (var ac = 0, Z = ab.length; ac < Z; ac++) {
                            var aa = ab.charAt(ac);
                            if (":" != aa) {
                                W += aa
                            } else {
                                if ("" == W || W != (X = Number(W))) {
                                    return ae(n, 0, 1)
                                }
                                Y = ab.substr(ac + 1, X);
                                if (W != Y.length) {
                                    return ae(n, 0, 1)
                                }
                                if (Y.length) {
                                    V = e.decodePacket(Y, U, true);
                                    if (n.type == V.type && n.data == V.data) {
                                        return ae(n, 0, 1)
                                    }
                                    var ad = ae(V, ac + X, Z);
                                    if (false === ad) {
                                        return
                                    }
                                }
                                ac += X;
                                W = ""
                            }
                        }
                        if (W != "") {
                            return ae(n, 0, 1)
                        }
                    };
                    e.encodePayloadAsArrayBuffer = function(V, W) {
                        if (!V.length) {
                            return W(new ArrayBuffer(0))
                        }
                        function U(Y, X) {
                            e.encodePacket(Y, true, true, function(Z) {
                                return X(null, Z)
                            })
                        }
                        T(V, U, function(Y, aa) {
                            var ab = aa.reduce(function(ad, ae) {
                                var ac;
                                if (typeof ae === "string") {
                                    ac = ae.length
                                } else {
                                    ac = ae.byteLength
                                }
                                return ad + ac.toString().length + ac + 2
                            }, 0);
                            var Z = new Uint8Array(ab);
                            var X = 0;
                            aa.forEach(function(ag) {
                                var ac = typeof ag === "string";
                                var af = ag;
                                if (ac) {
                                    var ad = new Uint8Array(ag.length);
                                    for (var ae = 0; ae < ag.length; ae++) {
                                        ad[ae] = ag.charCodeAt(ae)
                                    }
                                    af = ad.buffer
                                }
                                if (ac) {
                                    Z[X++] = 0
                                } else {
                                    Z[X++] = 1
                                }
                                var ah = af.byteLength.toString();
                                for (var ae = 0; ae < ah.length; ae++) {
                                    Z[X++] = parseInt(ah[ae])
                                }
                                Z[X++] = 255;
                                var ad = new Uint8Array(af);
                                for (var ae = 0; ae < ad.length; ae++) {
                                    Z[X++] = ad[ae]
                                }
                            });
                            return W(Z.buffer)
                        })
                    };
                    e.encodePayloadAsBlob = function(V, W) {
                        function U(Y, X) {
                            e.encodePacket(Y, true, true, function(af) {
                                var ad = new Uint8Array(1);
                                ad[0] = 1;
                                if (typeof af === "string") {
                                    var aa = new Uint8Array(af.length);
                                    for (var ac = 0; ac < af.length; ac++) {
                                        aa[ac] = af.charCodeAt(ac)
                                    }
                                    af = aa.buffer;
                                    ad[0] = 0
                                }
                                var Z = af instanceof ArrayBuffer ? af.byteLength : af.size;
                                var ag = Z.toString();
                                var ae = new Uint8Array(ag.length + 1);
                                for (var ac = 0; ac < ag.length; ac++) {
                                    ae[ac] = parseInt(ag[ac])
                                }
                                ae[ag.length] = 255;
                                if (o) {
                                    var ab = new o([ad.buffer, ae.buffer, af]);
                                    X(null, ab)
                                }
                            })
                        }
                        T(V, U, function(Y, X) {
                            return W(new o(X))
                        })
                    };
                    e.decodePayloadAsBinary = function(aa, U, ag) {
                        if (typeof U === "function") {
                            ag = U;
                            U = null
                        }
                        var af = aa;
                        var ah = [];
                        var ad = false;
                        while (af.byteLength > 0) {
                            var V = new Uint8Array(af);
                            var W = V[0] === 0;
                            var ae = "";
                            for (var Z = 1; ; Z++) {
                                if (V[Z] == 255) {
                                    break
                                }
                                if (ae.length > 310) {
                                    ad = true;
                                    break
                                }
                                ae += V[Z]
                            }
                            if (ad) {
                                return ag(n, 0, 1)
                            }
                            af = p(af, 2 + ae.length);
                            ae = parseInt(ae);
                            var Y = p(af, 0, ae);
                            if (W) {
                                try {
                                    Y = String.fromCharCode.apply(null, new Uint8Array(Y))
                                } catch (ab) {
                                    var X = new Uint8Array(Y);
                                    Y = "";
                                    for (var Z = 0; Z < X.length; Z++) {
                                        Y += String.fromCharCode(X[Z])
                                    }
                                }
                            }
                            ah.push(Y);
                            af = p(af, ae)
                        }
                        var ac = ah.length;
                        ah.forEach(function(ai, aj) {
                            ag(e.decodePacket(ai, U, true), aj, ac)
                        })
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {"./keys": 26,after: 27,"arraybuffer.slice": 28,"base64-arraybuffer": 29,blob: 30,"has-binary": 31,utf8: 33}],26: [function(j, g, e) {
                g.exports = Object.keys || function h(n) {
                    var k = [];
                    var l = Object.prototype.hasOwnProperty;
                    for (var m in n) {
                        if (l.call(n, m)) {
                            k.push(m)
                        }
                    }
                    return k
                }
            }, {}],27: [function(j, g, e) {
                g.exports = k;
                function k(o, p, n) {
                    var l = false;
                    n = n || h;
                    m.count = o;
                    return o === 0 ? p() : m;
                    function m(s, r) {
                        if (m.count <= 0) {
                            throw new Error("after called too many times")
                        }
                        --m.count;
                        if (s) {
                            l = true;
                            p(s);
                            p = n
                        } else {
                            if (m.count === 0 && !l) {
                                p(null, r)
                            }
                        }
                    }
                }
                function h() {
                }
            }, {}],28: [function(h, g, e) {
                g.exports = function(o, r, l) {
                    var k = o.byteLength;
                    r = r || 0;
                    l = l || k;
                    if (o.slice) {
                        return o.slice(r, l)
                    }
                    if (r < 0) {
                        r += k
                    }
                    if (l < 0) {
                        l += k
                    }
                    if (l > k) {
                        l = k
                    }
                    if (r >= k || r >= l || k === 0) {
                        return new ArrayBuffer(0)
                    }
                    var p = new Uint8Array(o);
                    var j = new Uint8Array(l - r);
                    for (var m = r, n = 0; m < l; m++, n++) {
                        j[n] = p[m]
                    }
                    return j.buffer
                }
            }, {}],29: [function(h, g, e) {
                (function(j) {
                    e.encode = function(o) {
                        var m = new Uint8Array(o), n, k = m.length, l = "";
                        for (n = 0; n < k; n += 3) {
                            l += j[m[n] >> 2];
                            l += j[(m[n] & 3) << 4 | m[n + 1] >> 4];
                            l += j[(m[n + 1] & 15) << 2 | m[n + 2] >> 6];
                            l += j[m[n + 2] & 63]
                        }
                        if (k % 3 === 2) {
                            l = l.substring(0, l.length - 1) + "="
                        } else {
                            if (k % 3 === 1) {
                                l = l.substring(0, l.length - 2) + "=="
                            }
                        }
                        return l
                    };
                    e.decode = function(v) {
                        var l = v.length * 0.75, w = v.length, s, n = 0, o, m, k, N;
                        if (v[v.length - 1] === "=") {
                            l--;
                            if (v[v.length - 2] === "=") {
                                l--
                            }
                        }
                        var r = new ArrayBuffer(l), x = new Uint8Array(r);
                        for (s = 0; s < w; s += 4) {
                            o = j.indexOf(v[s]);
                            m = j.indexOf(v[s + 1]);
                            k = j.indexOf(v[s + 2]);
                            N = j.indexOf(v[s + 3]);
                            x[n++] = o << 2 | m >> 4;
                            x[n++] = (m & 15) << 4 | k >> 2;
                            x[n++] = (k & 3) << 6 | N & 63
                        }
                        return r
                    }
                })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
            }, {}],30: [function(h, g, e) {
                (function(n) {
                    var m = n.BlobBuilder || n.WebKitBlobBuilder || n.MSBlobBuilder || n.MozBlobBuilder;
                    var k = function() {
                        try {
                            var o = new Blob(["hi"]);
                            return o.size == 2
                        } catch (p) {
                            return false
                        }
                    }();
                    var l = m && m.prototype.append && m.prototype.getBlob;
                    function j(r, o) {
                        o = o || {};
                        var s = new m;
                        for (var p = 0; p < r.length; p++) {
                            s.append(r[p])
                        }
                        return o.type ? s.getBlob(o.type) : s.getBlob()
                    }
                    g.exports = function() {
                        if (k) {
                            return n.Blob
                        } else {
                            if (l) {
                                return j
                            } else {
                                return undefined
                            }
                        }
                    }()
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {}],31: [function(h, g, e) {
                (function(l) {
                    var j = h("isarray");
                    g.exports = k;
                    function k(n) {
                        function m(r) {
                            if (!r) {
                                return false
                            }
                            if (l.Buffer && l.Buffer.isBuffer(r) || l.ArrayBuffer && r instanceof ArrayBuffer || l.Blob && r instanceof Blob || l.File && r instanceof File) {
                                return true
                            }
                            if (j(r)) {
                                for (var p = 0; p < r.length; p++) {
                                    if (m(r[p])) {
                                        return true
                                    }
                                }
                            } else {
                                if (r && "object" == typeof r) {
                                    if (r.toJSON) {
                                        r = r.toJSON()
                                    }
                                    for (var o in r) {
                                        if (r.hasOwnProperty(o) && m(r[o])) {
                                            return true
                                        }
                                    }
                                }
                            }
                            return false
                        }
                        return m(n)
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {isarray: 32}],32: [function(h, g, e) {
                g.exports = Array.isArray || function(j) {
                    return Object.prototype.toString.call(j) == "[object Array]"
                }
            }, {}],33: [function(h, g, e) {
                (function(j) {
                    (function(P) {
                        var r = typeof e == "object" && e;
                        var V = typeof g == "object" && g && g.exports == r && g;
                        var O = typeof j == "object" && j;
                        if (O.global === O || O.window === O) {
                            P = O
                        }
                        var N = String.fromCharCode;
                        function p(Z) {
                            var Y = [];
                            var X = 0;
                            var aa = Z.length;
                            var ab;
                            var W;
                            while (X < aa) {
                                ab = Z.charCodeAt(X++);
                                if (ab >= 55296 && ab <= 56319 && X < aa) {
                                    W = Z.charCodeAt(X++);
                                    if ((W & 64512) == 56320) {
                                        Y.push(((ab & 1023) << 10) + (W & 1023) + 65536)
                                    } else {
                                        Y.push(ab);
                                        X--
                                    }
                                } else {
                                    Y.push(ab)
                                }
                            }
                            return Y
                        }
                        function S(aa) {
                            var Y = aa.length;
                            var X = -1;
                            var Z;
                            var W = "";
                            while (++X < Y) {
                                Z = aa[X];
                                if (Z > 65535) {
                                    Z -= 65536;
                                    W += N(Z >>> 10 & 1023 | 55296);
                                    Z = 56320 | Z & 1023
                                }
                                W += N(Z)
                            }
                            return W
                        }
                        function o(X, W) {
                            return N(X >> W & 63 | 128)
                        }
                        function R(W) {
                            if ((W & 4294967168) == 0) {
                                return N(W)
                            }
                            var X = "";
                            if ((W & 4294965248) == 0) {
                                X = N(W >> 6 & 31 | 192)
                            } else {
                                if ((W & 4294901760) == 0) {
                                    X = N(W >> 12 & 15 | 224);
                                    X += o(W, 6)
                                } else {
                                    if ((W & 4292870144) == 0) {
                                        X = N(W >> 18 & 7 | 240);
                                        X += o(W, 12);
                                        X += o(W, 6)
                                    }
                                }
                            }
                            X += N(W & 63 | 128);
                            return X
                        }
                        function Q(Z) {
                            var Y = p(Z);
                            var aa = Y.length;
                            var X = -1;
                            var W;
                            var ab = "";
                            while (++X < aa) {
                                W = Y[X];
                                ab += R(W)
                            }
                            return ab
                        }
                        function k() {
                            if (w >= v) {
                                throw Error("Invalid byte index")
                            }
                            var W = x[w] & 255;
                            w++;
                            if ((W & 192) == 128) {
                                return W & 63
                            }
                            throw Error("Invalid continuation byte")
                        }
                        function m() {
                            var X;
                            var W;
                            var aa;
                            var Z;
                            var Y;
                            if (w > v) {
                                throw Error("Invalid byte index")
                            }
                            if (w == v) {
                                return false
                            }
                            X = x[w] & 255;
                            w++;
                            if ((X & 128) == 0) {
                                return X
                            }
                            if ((X & 224) == 192) {
                                var W = k();
                                Y = (X & 31) << 6 | W;
                                if (Y >= 128) {
                                    return Y
                                } else {
                                    throw Error("Invalid continuation byte")
                                }
                            }
                            if ((X & 240) == 224) {
                                W = k();
                                aa = k();
                                Y = (X & 15) << 12 | W << 6 | aa;
                                if (Y >= 2048) {
                                    return Y
                                } else {
                                    throw Error("Invalid continuation byte")
                                }
                            }
                            if ((X & 248) == 240) {
                                W = k();
                                aa = k();
                                Z = k();
                                Y = (X & 15) << 18 | W << 12 | aa << 6 | Z;
                                if (Y >= 65536 && Y <= 1114111) {
                                    return Y
                                }
                            }
                            throw Error("Invalid UTF-8 detected")
                        }
                        var x;
                        var v;
                        var w;
                        function l(Y) {
                            x = p(Y);
                            v = x.length;
                            w = 0;
                            var W = [];
                            var X;
                            while ((X = m()) !== false) {
                                W.push(X)
                            }
                            return S(W)
                        }
                        var n = {version: "2.0.0",encode: Q,decode: l};
                        if (typeof f == "function" && typeof f.amd == "object" && f.amd) {
                            f(function() {
                                return n
                            })
                        } else {
                            if (r && !r.nodeType) {
                                if (V) {
                                    V.exports = n
                                } else {
                                    var T = {};
                                    var s = T.hasOwnProperty;
                                    for (var U in n) {
                                        s.call(n, U) && (r[U] = n[U])
                                    }
                                }
                            } else {
                                P.utf8 = n
                            }
                        }
                    })(this)
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {}],34: [function(h, g, e) {
                (function(n) {
                    var j = /^[\],:{}\s]*$/;
                    var m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
                    var p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
                    var r = /(?:^|:|,)(?:\s*\[)+/g;
                    var o = /^\s+/;
                    var l = /\s+$/;
                    g.exports = function k(s) {
                        if ("string" != typeof s || !s) {
                            return null
                        }
                        s = s.replace(o, "").replace(l, "");
                        if (n.JSON && JSON.parse) {
                            return JSON.parse(s)
                        }
                        if (j.test(s.replace(m, "@").replace(p, "]").replace(r, ""))) {
                            return new Function("return " + s)()
                        }
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {}],35: [function(h, g, e) {
                e.encode = function(k) {
                    var l = "";
                    for (var j in k) {
                        if (k.hasOwnProperty(j)) {
                            if (l.length) {
                                l += "&"
                            }
                            l += encodeURIComponent(j) + "=" + encodeURIComponent(k[j])
                        }
                    }
                    return l
                };
                e.decode = function(j) {
                    var n = {};
                    var o = j.split("&");
                    for (var m = 0, k = o.length; m < k; m++) {
                        var p = o[m].split("=");
                        n[decodeURIComponent(p[0])] = decodeURIComponent(p[1])
                    }
                    return n
                }
            }, {}],36: [function(j, g, e) {
                var h = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
                var l = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                g.exports = function k(w) {
                    var v = w, o = w.indexOf("["), s = w.indexOf("]");
                    if (o != -1 && s != -1) {
                        w = w.substring(0, o) + w.substring(o, s).replace(/:/g, ";") + w.substring(s, w.length)
                    }
                    var n = h.exec(w || ""), r = {}, p = 14;
                    while (p--) {
                        r[l[p]] = n[p] || ""
                    }
                    if (o != -1 && s != -1) {
                        r.source = v;
                        r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":");
                        r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
                        r.ipv6uri = true
                    }
                    return r
                }
            }, {}],37: [function(l, j, g) {
                var k = function() {
                    return this
                }();
                var h = k.WebSocket || k.MozWebSocket;
                j.exports = h ? e : null;
                function e(p, o, n) {
                    var m;
                    if (o) {
                        m = new h(p, o)
                    } else {
                        m = new h(p)
                    }
                    return m
                }
                if (h) {
                    e.prototype = h.prototype
                }
            }, {}],38: [function(h, g, e) {
                (function(l) {
                    var j = h("isarray");
                    g.exports = k;
                    function k(n) {
                        function m(r) {
                            if (!r) {
                                return false
                            }
                            if (l.Buffer && l.Buffer.isBuffer(r) || l.ArrayBuffer && r instanceof ArrayBuffer || l.Blob && r instanceof Blob || l.File && r instanceof File) {
                                return true
                            }
                            if (j(r)) {
                                for (var p = 0; p < r.length; p++) {
                                    if (m(r[p])) {
                                        return true
                                    }
                                }
                            } else {
                                if (r && "object" == typeof r) {
                                    if (r.toJSON) {
                                        r = r.toJSON()
                                    }
                                    for (var o in r) {
                                        if (Object.prototype.hasOwnProperty.call(r, o) && m(r[o])) {
                                            return true
                                        }
                                    }
                                }
                            }
                            return false
                        }
                        return m(n)
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {isarray: 39}],39: [function(h, g, e) {
                g.exports = h(32)
            }, {}],40: [function(k, g, e) {
                var j = k("global");
                try {
                    g.exports = "XMLHttpRequest" in j && "withCredentials" in new j.XMLHttpRequest
                } catch (h) {
                    g.exports = false
                }
            }, {global: 41}],41: [function(h, g, e) {
                g.exports = function() {
                    return this
                }()
            }, {}],42: [function(j, g, e) {
                var h = [].indexOf;
                g.exports = function(k, m) {
                    if (h) {
                        return k.indexOf(m)
                    }
                    for (var l = 0; l < k.length; ++l) {
                        if (k[l] === m) {
                            return l
                        }
                    }
                    return -1
                }
            }, {}],43: [function(j, h, e) {
                var g = Object.prototype.hasOwnProperty;
                e.keys = Object.keys || function(m) {
                    var l = [];
                    for (var k in m) {
                        if (g.call(m, k)) {
                            l.push(k)
                        }
                    }
                    return l
                };
                e.values = function(m) {
                    var l = [];
                    for (var k in m) {
                        if (g.call(m, k)) {
                            l.push(m[k])
                        }
                    }
                    return l
                };
                e.merge = function(l, k) {
                    for (var m in k) {
                        if (g.call(k, m)) {
                            l[m] = k[m]
                        }
                    }
                    return l
                };
                e.length = function(k) {
                    return e.keys(k).length
                };
                e.isEmpty = function(k) {
                    return 0 == e.length(k)
                }
            }, {}],44: [function(j, g, e) {
                var h = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
                var l = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                g.exports = function k(r) {
                    var n = h.exec(r || ""), p = {}, o = 14;
                    while (o--) {
                        p[l[o]] = n[o] || ""
                    }
                    return p
                }
            }, {}],45: [function(h, g, e) {
                (function(k) {
                    var j = h("isarray");
                    var l = h("./is-buffer");
                    e.deconstructPacket = function(r) {
                        var n = [];
                        var m = r.data;
                        function p(x) {
                            if (!x) {
                                return x
                            }
                            if (l(x)) {
                                var N = {_placeholder: true,num: n.length};
                                n.push(x);
                                return N
                            } else {
                                if (j(x)) {
                                    var w = new Array(x.length);
                                    for (var v = 0; v < x.length; v++) {
                                        w[v] = p(x[v])
                                    }
                                    return w
                                } else {
                                    if ("object" == typeof x && !(x instanceof Date)) {
                                        var w = {};
                                        for (var s in x) {
                                            w[s] = p(x[s])
                                        }
                                        return w
                                    }
                                }
                            }
                            return x
                        }
                        var o = r;
                        o.data = p(m);
                        o.attachments = n.length;
                        return {packet: o,buffers: n}
                    };
                    e.reconstructPacket = function(p, n) {
                        var m = 0;
                        function o(w) {
                            if (w && w._placeholder) {
                                var r = n[w.num];
                                return r
                            } else {
                                if (j(w)) {
                                    for (var v = 0; v < w.length; v++) {
                                        w[v] = o(w[v])
                                    }
                                    return w
                                } else {
                                    if (w && "object" == typeof w) {
                                        for (var s in w) {
                                            w[s] = o(w[s])
                                        }
                                        return w
                                    }
                                }
                            }
                            return w
                        }
                        p.data = o(p.data);
                        p.attachments = undefined;
                        return p
                    };
                    e.removeBlobs = function(o, r) {
                        function p(N, O, v) {
                            if (!N) {
                                return N
                            }
                            if (k.Blob && N instanceof Blob || k.File && N instanceof File) {
                                m++;
                                var s = new FileReader;
                                s.onload = function() {
                                    if (v) {
                                        v[O] = this.result
                                    } else {
                                        n = this.result
                                    }
                                    if (!--m) {
                                        r(n)
                                    }
                                };
                                s.readAsArrayBuffer(N)
                            } else {
                                if (j(N)) {
                                    for (var x = 0; x < N.length; x++) {
                                        p(N[x], x, N)
                                    }
                                } else {
                                    if (N && "object" == typeof N && !l(N)) {
                                        for (var w in N) {
                                            p(N[w], w, N)
                                        }
                                    }
                                }
                            }
                        }
                        var m = 0;
                        var n = o;
                        p(n);
                        if (!m) {
                            r(n)
                        }
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {"./is-buffer": 47,isarray: 48}],46: [function(h, j, n) {
                var g = h("debug")("socket.io-parser");
                var N = h("json3");
                var r = h("isarray");
                var v = h("component-emitter");
                var p = h("./binary");
                var e = h("./is-buffer");
                n.protocol = 4;
                n.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"];
                n.CONNECT = 0;
                n.DISCONNECT = 1;
                n.EVENT = 2;
                n.ACK = 3;
                n.ERROR = 4;
                n.BINARY_EVENT = 5;
                n.BINARY_ACK = 6;
                n.Encoder = m;
                n.Decoder = x;
                function m() {
                }
                m.prototype.encode = function(P, Q) {
                    g("encoding packet %j", P);
                    if (n.BINARY_EVENT == P.type || n.BINARY_ACK == P.type) {
                        k(P, Q)
                    } else {
                        var O = l(P);
                        Q([O])
                    }
                };
                function l(P) {
                    var Q = "";
                    var O = false;
                    Q += P.type;
                    if (n.BINARY_EVENT == P.type || n.BINARY_ACK == P.type) {
                        Q += P.attachments;
                        Q += "-"
                    }
                    if (P.nsp && "/" != P.nsp) {
                        O = true;
                        Q += P.nsp
                    }
                    if (null != P.id) {
                        if (O) {
                            Q += ",";
                            O = false
                        }
                        Q += P.id
                    }
                    if (null != P.data) {
                        if (O) {
                            Q += ","
                        }
                        Q += N.stringify(P.data)
                    }
                    g("encoded %j as %s", P, Q);
                    return Q
                }
                function k(P, Q) {
                    function O(U) {
                        var S = p.deconstructPacket(U);
                        var T = l(S.packet);
                        var R = S.buffers;
                        R.unshift(T);
                        Q(R)
                    }
                    p.removeBlobs(P, O)
                }
                function x() {
                    this.reconstructor = null
                }
                v(x.prototype);
                x.prototype.add = function(P) {
                    var O;
                    if ("string" == typeof P) {
                        O = o(P);
                        if (n.BINARY_EVENT == O.type || n.BINARY_ACK == O.type) {
                            this.reconstructor = new w(O);
                            if (this.reconstructor.reconPack.attachments === 0) {
                                this.emit("decoded", O)
                            }
                        } else {
                            this.emit("decoded", O)
                        }
                    } else {
                        if (e(P) || P.base64) {
                            if (!this.reconstructor) {
                                throw new Error("got binary data when not reconstructing a packet")
                            } else {
                                O = this.reconstructor.takeBinaryData(P);
                                if (O) {
                                    this.reconstructor = null;
                                    this.emit("decoded", O)
                                }
                            }
                        } else {
                            throw new Error("Unknown type: " + P)
                        }
                    }
                };
                function o(T) {
                    var S = {};
                    var P = 0;
                    S.type = Number(T.charAt(0));
                    if (null == n.types[S.type]) {
                        return s()
                    }
                    if (n.BINARY_EVENT == S.type || n.BINARY_ACK == S.type) {
                        var O = "";
                        while (T.charAt(++P) != "-") {
                            O += T.charAt(P);
                            if (P == T.length) {
                                break
                            }
                        }
                        if (O != Number(O) || T.charAt(P) != "-") {
                            throw new Error("Illegal attachments")
                        }
                        S.attachments = Number(O)
                    }
                    if ("/" == T.charAt(P + 1)) {
                        S.nsp = "";
                        while (++P) {
                            var U = T.charAt(P);
                            if ("," == U) {
                                break
                            }
                            S.nsp += U;
                            if (P == T.length) {
                                break
                            }
                        }
                    } else {
                        S.nsp = "/"
                    }
                    var Q = T.charAt(P + 1);
                    if ("" !== Q && Number(Q) == Q) {
                        S.id = "";
                        while (++P) {
                            var U = T.charAt(P);
                            if (null == U || Number(U) != U) {
                                --P;
                                break
                            }
                            S.id += T.charAt(P);
                            if (P == T.length) {
                                break
                            }
                        }
                        S.id = Number(S.id)
                    }
                    if (T.charAt(++P)) {
                        try {
                            S.data = N.parse(T.substr(P))
                        } catch (R) {
                            return s()
                        }
                    }
                    g("decoded %s as %j", T, S);
                    return S
                }
                x.prototype.destroy = function() {
                    if (this.reconstructor) {
                        this.reconstructor.finishedReconstruction()
                    }
                };
                function w(O) {
                    this.reconPack = O;
                    this.buffers = []
                }
                w.prototype.takeBinaryData = function(O) {
                    this.buffers.push(O);
                    if (this.buffers.length == this.reconPack.attachments) {
                        var P = p.reconstructPacket(this.reconPack, this.buffers);
                        this.finishedReconstruction();
                        return P
                    }
                    return null
                };
                w.prototype.finishedReconstruction = function() {
                    this.reconPack = null;
                    this.buffers = []
                };
                function s(O) {
                    return {type: n.ERROR,data: "parser error"}
                }
            }, {"./binary": 45,"./is-buffer": 47,"component-emitter": 9,debug: 10,isarray: 48,json3: 49}],47: [function(h, g, e) {
                (function(j) {
                    g.exports = k;
                    function k(l) {
                        return j.Buffer && j.Buffer.isBuffer(l) || j.ArrayBuffer && l instanceof ArrayBuffer
                    }
                }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
            }, {}],48: [function(h, g, e) {
                g.exports = h(32)
            }, {}],49: [function(h, g, e) {
                (function(ag) {
                    var v = {}.toString, o, j, Z;
                    var X = typeof f === "function" && f.amd;
                    var al = typeof JSON == "object" && JSON;
                    var af = typeof e == "object" && e && !e.nodeType && e;
                    if (af && al) {
                        af.stringify = al.stringify;
                        af.parse = al.parse
                    } else {
                        af = ag.JSON = al || {}
                    }
                    var Q = new Date(-3509827334573292);
                    try {
                        Q = Q.getUTCFullYear() == -109252 && Q.getUTCMonth() === 0 && Q.getUTCDate() === 1 && Q.getUTCHours() == 10 && Q.getUTCMinutes() == 37 && Q.getUTCSeconds() == 6 && Q.getUTCMilliseconds() == 708
                    } catch (w) {
                    }
                    function l(an) {
                        if (l[an] !== Z) {
                            return l[an]
                        }
                        var ao;
                        if (an == "bug-string-char-index") {
                            ao = "a"[0] != "a"
                        } else {
                            if (an == "json") {
                                ao = l("json-stringify") && l("json-parse")
                            } else {
                                var aw, at = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                if (an == "json-stringify") {
                                    var au = af.stringify, av = typeof au == "function" && Q;
                                    if (av) {
                                        (aw = function() {
                                            return 1
                                        }).toJSON = aw;
                                        try {
                                            av = au(0) === "0" && au(new Number) === "0" && au(new String) == '""' && au(v) === Z && au(Z) === Z && au() === Z && au(aw) === "1" && au([aw]) == "[1]" && au([Z]) == "[null]" && au(null) == "null" && au([Z, v, null]) == "[null,null,null]" && au({a: [aw, true, false, null, "\x00\b\n\f\r	"]}) == at && au(null, aw) === "1" && au([1, 2], null, 1) == "[\n 1,\n 2\n]" && au(new Date(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && au(new Date(8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && au(new Date(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && au(new Date(-1)) == '"1969-12-31T23:59:59.999Z"'
                                        } catch (ap) {
                                            av = false
                                        }
                                    }
                                    ao = av
                                }
                                if (an == "json-parse") {
                                    var ar = af.parse;
                                    if (typeof ar == "function") {
                                        try {
                                            if (ar("0") === 0 && !ar(false)) {
                                                aw = ar(at);
                                                var aq = aw.a.length == 5 && aw.a[0] === 1;
                                                if (aq) {
                                                    try {
                                                        aq = !ar('"	"')
                                                    } catch (ap) {
                                                    }
                                                    if (aq) {
                                                        try {
                                                            aq = ar("01") !== 1
                                                        } catch (ap) {
                                                        }
                                                    }
                                                    if (aq) {
                                                        try {
                                                            aq = ar("1.") !== 1
                                                        } catch (ap) {
                                                        }
                                                    }
                                                }
                                            }
                                        } catch (ap) {
                                            aq = false
                                        }
                                    }
                                    ao = aq
                                }
                            }
                        }
                        return l[an] = !!ao
                    }
                    if (!l("json")) {
                        var ah = "[object Function]";
                        var ae = "[object Date]";
                        var ab = "[object Number]";
                        var ac = "[object String]";
                        var T = "[object Array]";
                        var P = "[object Boolean]";
                        var U = l("bug-string-char-index");
                        if (!Q) {
                            var p = Math.floor;
                            var am = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                            var S = function(an, ao) {
                                return am[ao] + 365 * (an - 1970) + p((an - 1969 + (ao = +(ao > 1))) / 4) - p((an - 1901 + ao) / 100) + p((an - 1601 + ao) / 400)
                            }
                        }
                        if (!(o = {}.hasOwnProperty)) {
                            o = function(ap) {
                                var an = {}, ao;
                                if ((an.__proto__ = null, an.__proto__ = {toString: 1}, an).toString != v) {
                                    o = function(at) {
                                        var ar = this.__proto__, aq = at in (this.__proto__ = null, this);
                                        this.__proto__ = ar;
                                        return aq
                                    }
                                } else {
                                    ao = an.constructor;
                                    o = function(ar) {
                                        var aq = (this.constructor || ao).prototype;
                                        return ar in this && !(ar in aq && this[ar] === aq[ar])
                                    }
                                }
                                an = null;
                                return o.call(this, ap)
                            }
                        }
                        var ai = {"boolean": 1,number: 1,string: 1,undefined: 1};
                        var s = function(an, ap) {
                            var ao = typeof an[ap];
                            return ao == "object" ? !!an[ap] : !ai[ao]
                        };
                        j = function(ap, at) {
                            var aq = 0, an, ao, ar;
                            (an = function() {
                                this.valueOf = 0
                            }).prototype.valueOf = 0;
                            ao = new an;
                            for (ar in ao) {
                                if (o.call(ao, ar)) {
                                    aq++
                                }
                            }
                            an = ao = null;
                            if (!aq) {
                                ao = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                                j = function(av, az) {
                                    var ay = v.call(av) == ah, ax, aw;
                                    var au = !ay && typeof av.constructor != "function" && s(av, "hasOwnProperty") ? av.hasOwnProperty : o;
                                    for (ax in av) {
                                        if (!(ay && ax == "prototype") && au.call(av, ax)) {
                                            az(ax)
                                        }
                                    }
                                    for (aw = ao.length; ax = ao[--aw]; au.call(av, ax) && az(ax)) {
                                    }
                                }
                            } else {
                                if (aq == 2) {
                                    j = function(av, ay) {
                                        var au = {}, ax = v.call(av) == ah, aw;
                                        for (aw in av) {
                                            if (!(ax && aw == "prototype") && !o.call(au, aw) && (au[aw] = 1) && o.call(av, aw)) {
                                                ay(aw)
                                            }
                                        }
                                    }
                                } else {
                                    j = function(av, ay) {
                                        var ax = v.call(av) == ah, aw, au;
                                        for (aw in av) {
                                            if (!(ax && aw == "prototype") && o.call(av, aw) && !(au = aw === "constructor")) {
                                                ay(aw)
                                            }
                                        }
                                        if (au || o.call(av, aw = "constructor")) {
                                            ay(aw)
                                        }
                                    }
                                }
                            }
                            return j(ap, at)
                        };
                        if (!l("json-stringify")) {
                            var n = {92: "\\\\",34: '\\"',8: "\\b",12: "\\f",10: "\\n",13: "\\r",9: "\\t"};
                            var Y = "000000";
                            var r = function(an, ao) {
                                return (Y + (ao || 0)).slice(-an)
                            };
                            var N = "\\u00";
                            var R = function(au) {
                                var an = '"', aq = 0, ar = au.length, at = ar > 10 && U, ap;
                                if (at) {
                                    ap = au.split("")
                                }
                                for (; aq < ar; aq++) {
                                    var ao = au.charCodeAt(aq);
                                    switch (ao) {
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 12:
                                        case 13:
                                        case 34:
                                        case 92:
                                            an += n[ao];
                                            break;
                                        default:
                                            if (ao < 32) {
                                                an += N + r(2, ao.toString(16));
                                                break
                                            }
                                            an += at ? ap[aq] : U ? au.charAt(aq) : au[aq]
                                    }
                                }
                                return an + '"'
                            };
                            var m = function(au, aL, ar, ax, aI, an, av) {
                                var aE, ap, aB, aK, aJ, aw, aH, aF, aC, az, aD, ao, at, aq, aG, aA;
                                try {
                                    aE = aL[au]
                                } catch (ay) {
                                }
                                if (typeof aE == "object" && aE) {
                                    ap = v.call(aE);
                                    if (ap == ae && !o.call(aE, "toJSON")) {
                                        if (aE > -1 / 0 && aE < 1 / 0) {
                                            if (S) {
                                                aJ = p(aE / 86400000);
                                                for (aB = p(aJ / 365.2425) + 1970 - 1; S(aB + 1, 0) <= aJ; aB++) {
                                                }
                                                for (aK = p((aJ - S(aB, 0)) / 30.42); S(aB, aK + 1) <= aJ; aK++) {
                                                }
                                                aJ = 1 + aJ - S(aB, aK);
                                                aw = (aE % 86400000 + 86400000) % 86400000;
                                                aH = p(aw / 3600000) % 24;
                                                aF = p(aw / 60000) % 60;
                                                aC = p(aw / 1000) % 60;
                                                az = aw % 1000
                                            } else {
                                                aB = aE.getUTCFullYear();
                                                aK = aE.getUTCMonth();
                                                aJ = aE.getUTCDate();
                                                aH = aE.getUTCHours();
                                                aF = aE.getUTCMinutes();
                                                aC = aE.getUTCSeconds();
                                                az = aE.getUTCMilliseconds()
                                            }
                                            aE = (aB <= 0 || aB >= 10000 ? (aB < 0 ? "-" : "+") + r(6, aB < 0 ? -aB : aB) : r(4, aB)) + "-" + r(2, aK + 1) + "-" + r(2, aJ) + "T" + r(2, aH) + ":" + r(2, aF) + ":" + r(2, aC) + "." + r(3, az) + "Z"
                                        } else {
                                            aE = null
                                        }
                                    } else {
                                        if (typeof aE.toJSON == "function" && (ap != ab && ap != ac && ap != T || o.call(aE, "toJSON"))) {
                                            aE = aE.toJSON(au)
                                        }
                                    }
                                }
                                if (ar) {
                                    aE = ar.call(aL, au, aE)
                                }
                                if (aE === null) {
                                    return "null"
                                }
                                ap = v.call(aE);
                                if (ap == P) {
                                    return "" + aE
                                } else {
                                    if (ap == ab) {
                                        return aE > -1 / 0 && aE < 1 / 0 ? "" + aE : "null"
                                    } else {
                                        if (ap == ac) {
                                            return R("" + aE)
                                        }
                                    }
                                }
                                if (typeof aE == "object") {
                                    for (aq = av.length; aq--; ) {
                                        if (av[aq] === aE) {
                                            throw TypeError()
                                        }
                                    }
                                    av.push(aE);
                                    aD = [];
                                    aG = an;
                                    an += aI;
                                    if (ap == T) {
                                        for (at = 0, aq = aE.length; at < aq; at++) {
                                            ao = m(at, aE, ar, ax, aI, an, av);
                                            aD.push(ao === Z ? "null" : ao)
                                        }
                                        aA = aD.length ? aI ? "[\n" + an + aD.join(",\n" + an) + "\n" + aG + "]" : "[" + aD.join(",") + "]" : "[]"
                                    } else {
                                        j(ax || aE, function(aN) {
                                            var aM = m(aN, aE, ar, ax, aI, an, av);
                                            if (aM !== Z) {
                                                aD.push(R(aN) + ":" + (aI ? " " : "") + aM)
                                            }
                                        });
                                        aA = aD.length ? aI ? "{\n" + an + aD.join(",\n" + an) + "\n" + aG + "}" : "{" + aD.join(",") + "}" : "{}"
                                    }
                                    av.pop();
                                    return aA
                                }
                            };
                            af.stringify = function(an, ap, aq) {
                                var ao, ax, av, au;
                                if (typeof ap == "function" || typeof ap == "object" && ap) {
                                    if ((au = v.call(ap)) == ah) {
                                        ax = ap
                                    } else {
                                        if (au == T) {
                                            av = {};
                                            for (var at = 0, ar = ap.length, aw; at < ar; aw = ap[at++], (au = v.call(aw), au == ac || au == ab) && (av[aw] = 1)) {
                                            }
                                        }
                                    }
                                }
                                if (aq) {
                                    if ((au = v.call(aq)) == ab) {
                                        if ((aq -= aq % 1) > 0) {
                                            for (ao = "", aq > 10 && (aq = 10); ao.length < aq; ao += " ") {
                                            }
                                        }
                                    } else {
                                        if (au == ac) {
                                            ao = aq.length <= 10 ? aq : aq.slice(0, 10)
                                        }
                                    }
                                }
                                return m("", (aw = {}, aw[""] = an, aw), ax, av, ao, "", [])
                            }
                        }
                        if (!l("json-parse")) {
                            var aa = String.fromCharCode;
                            var k = {92: "\\",34: '"',47: "/",98: "\b",116: "	",110: "\n",102: "\f",114: "\r"};
                            var V, ak;
                            var W = function() {
                                V = ak = null;
                                throw SyntaxError()
                            };
                            var O = function() {
                                var at = ak, aq = at.length, ar, ap, an, au, ao;
                                while (V < aq) {
                                    ao = at.charCodeAt(V);
                                    switch (ao) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            V++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            ar = U ? at.charAt(V) : at[V];
                                            V++;
                                            return ar;
                                        case 34:
                                            for (ar = "@", V++; V < aq; ) {
                                                ao = at.charCodeAt(V);
                                                if (ao < 32) {
                                                    W()
                                                } else {
                                                    if (ao == 92) {
                                                        ao = at.charCodeAt(++V);
                                                        switch (ao) {
                                                            case 92:
                                                            case 34:
                                                            case 47:
                                                            case 98:
                                                            case 116:
                                                            case 110:
                                                            case 102:
                                                            case 114:
                                                                ar += k[ao];
                                                                V++;
                                                                break;
                                                            case 117:
                                                                ap = ++V;
                                                                for (an = V + 4; V < an; V++) {
                                                                    ao = at.charCodeAt(V);
                                                                    if (!(ao >= 48 && ao <= 57 || ao >= 97 && ao <= 102 || ao >= 65 && ao <= 70)) {
                                                                        W()
                                                                    }
                                                                }
                                                                ar += aa("0x" + at.slice(ap, V));
                                                                break;
                                                            default:
                                                                W()
                                                        }
                                                    } else {
                                                        if (ao == 34) {
                                                            break
                                                        }
                                                        ao = at.charCodeAt(V);
                                                        ap = V;
                                                        while (ao >= 32 && ao != 92 && ao != 34) {
                                                            ao = at.charCodeAt(++V)
                                                        }
                                                        ar += at.slice(ap, V)
                                                    }
                                                }
                                            }
                                            if (at.charCodeAt(V) == 34) {
                                                V++;
                                                return ar
                                            }
                                            W();
                                        default:
                                            ap = V;
                                            if (ao == 45) {
                                                au = true;
                                                ao = at.charCodeAt(++V)
                                            }
                                            if (ao >= 48 && ao <= 57) {
                                                if (ao == 48 && (ao = at.charCodeAt(V + 1), ao >= 48 && ao <= 57)) {
                                                    W()
                                                }
                                                au = false;
                                                for (; V < aq && (ao = at.charCodeAt(V), ao >= 48 && ao <= 57); V++) {
                                                }
                                                if (at.charCodeAt(V) == 46) {
                                                    an = ++V;
                                                    for (; an < aq && (ao = at.charCodeAt(an), ao >= 48 && ao <= 57); an++) {
                                                    }
                                                    if (an == V) {
                                                        W()
                                                    }
                                                    V = an
                                                }
                                                ao = at.charCodeAt(V);
                                                if (ao == 101 || ao == 69) {
                                                    ao = at.charCodeAt(++V);
                                                    if (ao == 43 || ao == 45) {
                                                        V++
                                                    }
                                                    for (an = V; an < aq && (ao = at.charCodeAt(an), ao >= 48 && ao <= 57); an++) {
                                                    }
                                                    if (an == V) {
                                                        W()
                                                    }
                                                    V = an
                                                }
                                                return +at.slice(ap, V)
                                            }
                                            if (au) {
                                                W()
                                            }
                                            if (at.slice(V, V + 4) == "true") {
                                                V += 4;
                                                return true
                                            } else {
                                                if (at.slice(V, V + 5) == "false") {
                                                    V += 5;
                                                    return false
                                                } else {
                                                    if (at.slice(V, V + 4) == "null") {
                                                        V += 4;
                                                        return null
                                                    }
                                                }
                                            }
                                            W()
                                    }
                                }
                                return "$"
                            };
                            var aj = function(ao) {
                                var an, ap;
                                if (ao == "$") {
                                    W()
                                }
                                if (typeof ao == "string") {
                                    if ((U ? ao.charAt(0) : ao[0]) == "@") {
                                        return ao.slice(1)
                                    }
                                    if (ao == "[") {
                                        an = [];
                                        for (; ; ap || (ap = true)) {
                                            ao = O();
                                            if (ao == "]") {
                                                break
                                            }
                                            if (ap) {
                                                if (ao == ",") {
                                                    ao = O();
                                                    if (ao == "]") {
                                                        W()
                                                    }
                                                } else {
                                                    W()
                                                }
                                            }
                                            if (ao == ",") {
                                                W()
                                            }
                                            an.push(aj(ao))
                                        }
                                        return an
                                    } else {
                                        if (ao == "{") {
                                            an = {};
                                            for (; ; ap || (ap = true)) {
                                                ao = O();
                                                if (ao == "}") {
                                                    break
                                                }
                                                if (ap) {
                                                    if (ao == ",") {
                                                        ao = O();
                                                        if (ao == "}") {
                                                            W()
                                                        }
                                                    } else {
                                                        W()
                                                    }
                                                }
                                                if (ao == "," || typeof ao != "string" || (U ? ao.charAt(0) : ao[0]) != "@" || O() != ":") {
                                                    W()
                                                }
                                                an[ao.slice(1)] = aj(O())
                                            }
                                            return an
                                        }
                                    }
                                    W()
                                }
                                return ao
                            };
                            var ad = function(ap, ao, aq) {
                                var an = x(ap, ao, aq);
                                if (an === Z) {
                                    delete ap[ao]
                                } else {
                                    ap[ao] = an
                                }
                            };
                            var x = function(aq, ap, ar) {
                                var ao = aq[ap], an;
                                if (typeof ao == "object" && ao) {
                                    if (v.call(ao) == T) {
                                        for (an = ao.length; an--; ) {
                                            ad(ao, an, ar)
                                        }
                                    } else {
                                        j(ao, function(at) {
                                            ad(ao, at, ar)
                                        })
                                    }
                                }
                                return ar.call(aq, ap, ao)
                            };
                            af.parse = function(ap, aq) {
                                var an, ao;
                                V = 0;
                                ak = "" + ap;
                                an = aj(O());
                                if (O() != "$") {
                                    W()
                                }
                                V = ak = null;
                                return aq && v.call(aq) == ah ? x((ao = {}, ao[""] = an, ao), "", aq) : an
                            }
                        }
                    }
                    if (X) {
                        f(function() {
                            return af
                        })
                    }
                })(this)
            }, {}],50: [function(j, h, e) {
                h.exports = g;
                function g(m, k) {
                    var n = [];
                    k = k || 0;
                    for (var l = k || 0; l < m.length; l++) {
                        n[l - k] = m[l]
                    }
                    return n
                }
            }, {}]}, {}, [1])(1)
});
(function() {
    var c, f, e = function(g, h) {
        return function() {
            return g.apply(h, arguments)
        }
    }, d = function(k, h) {
        for (var g in h) {
            if (b.call(h, g)) {
                k[g] = h[g]
            }
        }
        function j() {
            this.constructor = k
        }
        j.prototype = h.prototype;
        k.prototype = new j();
        k.__super__ = h.prototype;
        return k
    }, b = {}.hasOwnProperty;
    c = function(j) {
        var h, g;
        h = (function() {
            function k() {
                this.listeners = {}
            }
            k.prototype.on = function(l, m) {
                if (!l) {
                    throw new Error("type is not defined.")
                }
                if (typeof m !== "function") {
                    throw new Error("listener must be a function.")
                }
                if (this.listeners[l]) {
                    return this.listeners[l].push(m)
                } else {
                    return this.listeners[l] = [m]
                }
            };
            k.prototype.once = function(l, m) {
                if (!l) {
                    throw new Error("type is not defined.")
                }
                if (typeof m !== "function") {
                    throw new Error("listener must be a function.")
                }
                c = function() {
                    this.removeListener(l, c);
                    return m.apply(this, arguments)
                };
                return this.on(l, c)
            };
            k.prototype.emit = function() {
                var n, m, l, r, p, o;
                o = arguments[0];
                if (!o) {
                    throw new Error("type is not defined.")
                }
                if (!this.listeners[o]) {
                    return
                }
                n = Array.prototype.slice.call(arguments, 1);
                p = this.listeners[o];
                for (m = 0, l = p.length; m < l; m++) {
                    r = p[m];
                    r.apply(this, n)
                }
            };
            k.prototype.removeListener = function(p, s) {
                var o, n, m, l, r, v;
                if (!p) {
                    throw new Error("type is not defined.")
                }
                if (typeof s !== "function") {
                    throw new Error("listener must be a function.")
                }
                if (!this.listeners[p]) {
                    return
                }
                l = -1;
                r = this.listeners[p];
                for (o = n = 0, m = r.length; n < m; o = ++n) {
                    v = r[o];
                    if (v === s) {
                        l = o;
                        break
                    }
                }
                if (l >= 0) {
                    this.listeners[p].splice(l, 1)
                }
            };
            k.prototype.removeAllListeners = function(l) {
                if (arguments.length === 0) {
                    this.listeners = {}
                } else {
                    if (l) {
                        delete this.listeners[l]
                    }
                }
            };
            return k
        })();
        g = (function(m) {
            var n, k;
            d(l, m);
            n = {AUTH_FAIL: "accessDenied",SERVER_ERROR: "serverError"};
            k = {SYSTEM: "sys",MESSAGE: "msg",ACK: "ack",JOIN: "join",QUIT: "quit",KICK: "kick",BLOCK: "block"};
            l.prototype.VERSION = "2.0.0";
            function l(s, r, p, o) {
                this.serviceId = s;
                this.channelId = r;
                this.userId = p;
                this.accessToken = o;
                this.sendAck = e(this.sendAck, this);
                this.sendMessage = e(this.sendMessage, this);
                this.disconnect = e(this.disconnect, this);
                l.__super__.constructor.call(this)
            }
            l.prototype.connect = function(r, s) {
                var w, v, p, o;
                this.disconnect();
                this.socket = o = j(r + "/chat", {multiplex: false,timeout: 1000,reconnection: true,reconnectionDelay: 1000,reconnectionDelayMax: 1000,query: {serviceId: this.serviceId,channelId: this.channelId,userId: this.userId,accessToken: this.accessToken}});
                w = new Date();
                p = this;
                o.on("connect", function() {
                    w = void 0;
                    p.emit("connect")
                });
                o.on("reconnecting", function() {
                    return p.emit("error", new Error("reconnecting"))
                });
                o.on("disconnect", function() {
                    p.emit("disconnect")
                });
                o.on(k.SYSTEM, function(x) {
                    p.emit(k.SYSTEM, x)
                });
                o.on(k.MESSAGE, function(x) {
                    p.emit(k.MESSAGE, x)
                });
                o.on(k.ACK, function(x) {
                    p.emit(k.ACK, x)
                });
                o.on(k.JOIN, function(x) {
                    p.emit(k.JOIN, x)
                });
                o.on(k.QUIT, function(x) {
                    p.emit(k.QUIT, x)
                });
                o.on(k.KICK, function(x) {
                    p.emit(k.KICK, x)
                });
                o.on(k.BLOCK, function(x) {
                    p.emit(k.BLOCK, x)
                });
                v = void 0;
                o.on("error", function(x) {
                    if (x === n.AUTH_FAIL) {
                        p.emit(n.AUTH_FAIL);
                        o.disconnect()
                    } else {
                        if (x === n.SERVER_ERROR) {
                            p.emit("fatal", new Error(n.SERVER_ERROR));
                            o.disconnect()
                        } else {
                            v = x instanceof Error ? x : new Error(x);
                            p.emit("error", x)
                        }
                    }
                });
                o.on("connect_error", function(N) {
                    var x;
                    v = N instanceof Error ? N : new Error(N);
                    p.emit("error", v);
                    if (s > 0 && w !== void 0) {
                        x = new Date().getTime() - w.getTime();
                        if (x > s) {
                            o.io.reconnectionAttempts(0)
                        }
                    }
                });
                o.on("reconnect_failed", function() {
                    p.emit("fatal", v);
                    p.disconnect()
                });
                return this
            };
            l.prototype.disconnect = function() {
                var o;
                if (this.socket) {
                    o = this.socket.connected;
                    this.socket.removeAllListeners();
                    this.socket.disconnect();
                    delete this.socket;
                    if (o) {
                        this.emit("disconnect")
                    }
                }
            };
            l.prototype.sendMessage = function(o, s, r, p, v) {
                if (this.socket) {
                    if (typeof p !== "string") {
                        p = ""
                    }
                    return this.socket.emit("send", {sessionKey: o,message: r,messageTypeCode: s,extras: p}, v)
                }
            };
            l.prototype.sendAck = function(o, p, r) {
                if (this.socket) {
                    return this.socket.emit("ack", {sessionKey: o,messageSerialNumber: p}, r)
                }
            };
            return l
        })(h);
        return g
    };
    if (typeof module !== "undefined" && module.exports) {
        f = require("socket.io-client");
        module.exports = c(f)
    } else {
        if (typeof define === "function" && define.amd) {
            define("chatClient", ["socketIO"], function(g) {
                return c(g)
            })
        } else {
            this.campmobile = {core: {SimpleChatClient: c(window.io)}}
        }
    }
}).call(this);
define("chat/collections/chattingMessageCollection", ["jquery", "underscore", "backbone", "chat/models/chattingMessageModel", "util/bandUtil"], function(f, d, g, e, c) {
    var b = g.Collection.extend({url: c.makeApi("https://api.band.us", "/api/chat/get_messages.json"),model: e,comparator: function(h) {
            return parseInt(h.get("id"), 10)
        },initialize: function(j, h) {
            this.since = h && h.since || 0;
            this.channelID = h && h.channelID;
            window.chatCollection = this
        },simpleFetch: function(h) {
            this._fetch({fromMessageNo: this.getLastMessageNo()}, h)
        },correctMessages: function() {
            if (this.isCorrectDoing) {
                this.addedSinceCorrect = true;
                return
            }
            this.addedSinceCorrect = false;
            var h = this._getLostMessageNos();
            if (h == "") {
                return
            }
            this.isCorrectDoing = true;
            this._fetch({messageNos: h}, {success: d.bind(function(l, j, k) {
                    this.isCorrectDoing = false;
                    if (this.addedSinceCorrect) {
                        this.correctMessages()
                    }
                }, this),error: d.bind(function(l, j, k) {
                    this.isCorrectDoing = false;
                    if (this.addedSinceCorrect) {
                        this.correctMessages()
                    }
                }, this)})
        },addPrevMessages: function(h) {
            this.add(h);
            this.trigger("add:prevMessages", h)
        },getLastMessageNo: function() {
            return this.length === 0 ? 0 : this.last().get("id")
        },_getLostMessageNos: function() {
            if (this.length === 0) {
                return ""
            }
            var h = this.getLastMessageNo();
            h--;
            var k = [];
            while (h > this.first().get("id") * 1) {
                var j = this.get(h);
                if (!j) {
                    k.push(h)
                }
                h--;
                if (k.length >= 50) {
                    break
                }
            }
            return k.join(",")
        },_fetch: function(h, j) {
            var k = {channel_id: this.channelID,from_message_no: h.fromMessageNo,last_message_no: h.lastMessageNo,message_nos: h.messageNos};
            this.fetch({data: k,add: true,update: true,remove: false,success: function(n, l, m) {
                    c.functionCall(j, "success", n, l, m)
                },error: function(n, l, m) {
                    c.functionCall(j, "error", n, l, m)
                }})
        },parse: function(h) {
            this.since = h.server_time;
            return h.messages
        }});
    return b
});
define("chat/models/chattingUserModel", ["jquery", "underscore", "backbone", "util/bandUtil"], function(e, c, f, b) {
    var d = f.Model.extend({defaults: {},idAttribute: "user_no",initialize: function(g) {
        },getFace: function() {
            var g = e.trim(this.get("face")) || window.resBaseUrl + "/images/template/profile_60x60.gif";
            return g
        },getFaceThumbnail: function(g) {
            return b.makeThumbnailUrl(this.getFace(), g || "s75")
        }});
    return d
});
define("chat/collections/chattingUserCollection", ["jquery", "underscore", "backbone", "chat/models/chattingUserModel", "util/bandUtil"], function(f, d, g, e, c) {
    var b = g.Collection.extend({defaults: {},url: c.makeApi("https://api.band.us", "/v1.1/chat/sync_channel"),model: e,comparator: function(h) {
            return h.get("name")
        },initialize: function(j, h) {
            this.since = h && h.since || 0;
            this.channelID = h && h.channelID
        },simpleFetch: function(h) {
            var j = {channel_id: this.channelID,since: this.since,fields: "users"};
            this.fetch({data: j,validate: true,add: true,update: true,remove: false,success: function(m, k, l) {
                    c.functionCall(h, "success", m, k, l)
                },error: function(m, k, l) {
                    c.functionCall(h, "error", m, k, l)
                }})
        },getReadyUsers: function() {
            var h = new b(this.toJSON());
            h.reset(h.where({status: "ready"}));
            return h
        },exclude: function() {
            d.each(arguments, function(h) {
                this.remove(h)
            }, this);
            return this
        },parse: function(h) {
            this.since = h.result_data.server_time;
            return h.result_data.users
        }});
    return b
});
define("chat/models/chattingChannelModel", ["jquery", "underscore", "backbone", "bandConstants", "util/bandUtil", "localize/reslang"], function(f, d, h, g, c, e) {
    var b;
    b = h.Model.extend({defaults: {},validate: function(j) {
            return j.user_status != "ready"
        },initialize: function(j) {
        },getType: function() {
            if (this.isPrivate()) {
                return "private"
            } else {
                if (this.isDefaultChannel()) {
                    return "band"
                } else {
                    return "public"
                }
            }
        },isPrivate: function() {
            return this.get("type") == "private"
        },isDefaultChannel: function() {
            return this.get("is_default_channel") === true
        },getThumbnail: function() {
            var j = "";
            if (this.getType() == "band") {
                j = f.trim(this.get("band_cover"));
                if (j != "") {
                    j = c.makeThumbnailUrl(j, "w200")
                } else {
                    j = resBaseUrl + "/images/template/default_cover_209x157.png"
                }
            } else {
                if (this.getType() == "public") {
                    j = window.resBaseUrl + "/images/template/profile_44x44_group.gif"
                } else {
                    j = f.trim(this.get("profile_url"));
                    if (!j) {
                        j = window.resBaseUrl + "/images/template/profile_60x60.gif"
                    } else {
                        j = c.makeThumbnailUrl(j, "s75")
                    }
                }
            }
            return j
        },getBeltImage: function() {
            var j = g.COVER.BELT_IMAGE_INDEX[this.get("theme_color")];
            if (!j) {
                j = "belt_1"
            }
            return j
        },createRoomTitle: function(k) {
            var j = "";
            if (this.isPrivate()) {
                j = this.get("name")
            } else {
                if (this.isDefaultChannel()) {
                    j = this.get("name")
                } else {
                    j = e.STR("pcweb.noui.js.chat.title_groupchat")
                }
                j += " (" + e.STR("pcweb.noui.js.chat.label_npeople", k) + ")"
            }
            return j
        },getBandNo: function() {
            return this.get("band_no")
        },getChannelId: function() {
            return this.get("buid")
        }});
    return b
});
define("chat/controllers/chattingController", ["jquery", "underscore", "marionette", "chatClient", "chat/collections/chattingMessageCollection", "chat/collections/chattingUserCollection", "chat/models/chattingChannelModel", "util/bandUtil", "util/bandCookie", "bandConstants", "libs/json2/json2", "libs/base64", "loginUserData"], function(d, o, k, b, p, j, r, m, l, h, n, g, f) {
    function c() {
    }
    var e = k.Controller.extend({_MAX_READCOUNT_REQUEST_COUNT: 200,_SERVER_ADDRESS: window.wssServerDomain || "wss1.band.us",_SERVER_PORT: 443,_SERVICE_ID: "band",initialize: function(s) {
            this.channelID = s.channelID;
            this.since = 0;
            this.chatClient = this._createChatClient();
            this._chatClientConnected = false
        },initChatRoom: function() {
            this.chatClient.serviceId = this._SERVICE_ID;
            this.chatClient.channelId = this.channelID;
            this.chatClient.userId = f.getUserID();
            this.chatClient.accessToken = this._createAuthKey();
            this.chatClient.connect("https://" + this._SERVER_ADDRESS)
        },_createChatClient: function() {
            var s = new b();
            s.on("connect", o.bind(function() {
                c("onConnected", arguments);
                this._chatClientConnected = true;
                this.trigger("connected")
            }, this));
            s.on("msg", o.bind(function(w) {
                c("onNotify", arguments);
                this._chatClientConnected = true;
                var v = this._makeMessageFromRawMessage(w.message);
                this.trigger("recieve:message", v);
                this.trigger("ack:message")
            }, this));
            s.on("sys", o.bind(function(w) {
                c("onNotifySystemMsg", arguments);
                var v = w.message;
                this._chatClientConnected = true;
                this.trigger("recieve:systemmessage", v)
            }, this));
            s.on("join", o.bind(function(x) {
                c("onNotifyJoin", arguments);
                var w = x.message;
                this._chatClientConnected = true;
                var v = this._makeMessageFromRawMessage(w);
                if (v.type != null && v.type != 0) {
                    this.trigger("recieve:message", v)
                }
                this.trigger("join:user")
            }, this));
            s.on("quit", o.bind(function(x) {
                c("onNotifyQuit", arguments);
                var w = x.message;
                this._chatClientConnected = true;
                var v = this._makeMessageFromRawMessage(w);
                if (v.type != null && v.type != 0) {
                    this.trigger("recieve:message", v)
                }
                this.trigger("quit:user")
            }, this));
            s.on("kick", o.bind(function(x) {
                c("onNotifyKick", arguments);
                var w = x.message;
                this._chatClientConnected = true;
                var v = this._makeMessageFromRawMessage(w);
                if (v.type != null && v.type != 0) {
                    this.trigger("recieve:message", v)
                }
                this.trigger("kick:user")
            }, this));
            s.on("ack", o.bind(function(v) {
                c("onNotifyAck", arguments);
                this._chatClientConnected = true;
                this.trigger("ack:message", v)
            }, this));
            s.on("accessDenied", o.bind(function() {
                c("onAccessDenied", arguments);
                this._chatClientConnected = false;
                this.trigger("error:fail:authorization")
            }, this));
            s.on("error", o.bind(function(v) {
                c("onError", arguments);
                this._chatClientConnected = false;
                this.trigger("error", v)
            }, this));
            s.on("fatal", o.bind(function(v) {
                c("onFatal", arguments);
                this._chatClientConnected = false;
                this.trigger("fatal", v)
            }, this));
            s.on("disconnect", o.bind(function() {
                c("onDisconnected", arguments);
                this._chatClientConnected = false
            }, this));
            return s
        },_makeMessageFromRawMessage: function(v) {
            var s = {};
            try {
                s = n.parse(v.extras)
            } catch (w) {
            }
            return {id: v.serialNumber,extras: s,type: v.typeCode,body: v.contents,created_at: v.createTime * 1,writer_id: v.userId}
        },sendMessage: function(s) {
            if (!this.checkValid()) {
                return
            }
            this.chatClient.sendMessage(this._createSessionKey(), 1, s, "", o.bind(function(w, v) {
                if (w) {
                    this.trigger("fail:auth")
                } else {
                    if (!v.isSuccess && v.errorCode == -5) {
                        this.trigger("fail:auth")
                    }
                }
            }, this))
        },sendSticker: function(v) {
            if (!this.checkValid()) {
                return
            }
            var s = {pack_no: v.get("packNo"),sticker_id: v.get("no")};
            this.chatClient.sendMessage(this._createSessionKey(), 10, "m2_sticker", n.stringify(s), o.bind(function(x, w) {
                if (x) {
                    this.trigger("fail:auth")
                } else {
                    if (!w.isSuccess && w.errorCode == -5) {
                        this.trigger("fail:auth")
                    }
                }
            }, this))
        },ackMessage: function(s) {
            if (!this.checkValid()) {
                return
            }
            if (d.isNumeric(s) && this.chatClient) {
                this.lastAckMessageID = s;
                this.chatClient.sendAck(this._createSessionKey(), s, o.bind(function(w, v) {
                    if (w) {
                        this.trigger("fail:auth")
                    } else {
                        if (!v.isSuccess && v.errorCode == -5) {
                            this.trigger("fail:auth")
                        }
                    }
                }, this))
            }
        },getLastAckMessageID: function() {
            return this.lastAckMessageID
        },getPrevMessages: function(v, x) {
            var s = v.first().get("id");
            var w = {channel_id: this.channelID,from_message_no: s - 19,to_message_no: s};
            this._getMessages(w, x)
        },_getMessages: function(s, v) {
            d.ajax({url: m.makeApi("https://api.band.us", "/v1/chat/get_messages.json"),data: s,success: o.bind(function(w) {
                    if (m.v1FormatErrorHandle(w, v)) {
                        return
                    }
                    m.functionCall(v, "success", w.result_data)
                }, this)})
        },deleteMessages: function(v) {
            var s = {channel_id: this.channelID};
            d.ajax({url: m.makeApi("https://api.band.us", "/v1/chat/delete_messages.json"),data: s,success: o.bind(function(w) {
                    if (m.v1FormatErrorHandle(w, v)) {
                        return
                    }
                    m.functionCall(v, "success", w.result_data)
                }, this)})
        },quitChatroom: function(v) {
            var s = {channel_id: this.channelID};
            d.ajax({url: m.makeApi("https://api.band.us", "/v1/chat/quit_channel.json"),data: s,success: o.bind(function(w) {
                    if (m.v1FormatErrorHandle(w, v)) {
                        return
                    }
                    m.functionCall(v, "success", w.result_data)
                }, this)})
        },leaveChatroom: function(v) {
            var s = {channel_id: this.channelID};
            d.ajax({url: m.makeApi("https://api.band.us", "/v1/chat/leave_channel.json"),data: s,success: o.bind(function(w) {
                    if (m.v1FormatErrorHandle(w, v)) {
                        return
                    }
                    m.functionCall(v, "success", w.result_data)
                }, this)})
        },sendAckToAPI: function(s, w) {
            var v = {channel_id: this.channelID,message_no: s};
            if (d.isNumeric(s)) {
                d.ajax({url: m.makeApi("https://api.band.us", "/v1/chat/ack_message"),data: v,success: o.bind(function(x) {
                        if (m.v1FormatErrorHandle(x, w)) {
                            return
                        }
                        m.functionCall(w, "success")
                    }, this)})
            }
        },checkValid: function() {
            if (!l.getSession()) {
                this.trigger("fail:auth");
                return false
            }
            if (!this.chatClient) {
                this.trigger("fail:auth");
                return false
            }
            return true
        },disconnect: function(s) {
            if (this.chatClient) {
                try {
                    this.chatClient.disconnect()
                } catch (v) {
                }
            }
            this.chatClient = null
        },syncChannel: function(v) {
            var s = {channel_id: this.channelID,since: this.since,resolution_type: 100};
            d.ajax({url: m.makeApi("https://api.band.us", "/v1.1/chat/sync_channel"),data: s,success: o.bind(function(w) {
                    if (m.v1FormatError(w)) {
                        m.functionCall(v, "error", w);
                        return
                    }
                    this.since = w.result_data.server_time;
                    m.functionCall(v, "success", {chattingMessageCollection: new p(w.result_data.messages, {channelID: this.channelID,since: this.since,validate: true}),chattingUserCollection: new j(w.result_data.users, {channelID: this.channelID,since: this.since,validate: true}),channel: new r(w.result_data.channel),lastMessageNo: w.result_data.last_message_no})
                }, this)})
        },_updateReadCountByID: function(w, v, x) {
            var s = w.get(v * 1);
            if (s) {
                s.set("read_count", x)
            }
        },updateReadCounts: function(s, v) {
            if (s.length === 0) {
                return
            }
            this._getReadCount(s, {success: o.bind(function(w) {
                    var x = null;
                    d.each(w.read_counts, o.bind(function(N, O) {
                        if (!x) {
                            this._updateReadCountByID(s, N * 1, O);
                            x = {id: N * 1,count: O}
                        } else {
                            for (var P = x.id + 1; P < N * 1; P++) {
                                this._updateReadCountByID(s, P, x.count)
                            }
                            this._updateReadCountByID(s, N, O);
                            x = {id: N * 1,count: O}
                        }
                    }, this))
                }, this)})
        },_getReadCount: function(s, w) {
            var v = {channel_id: s.channelID,from_message_no: Math.max(s.first().get("id") * 1, s.last().get("id") * 1 - this._MAX_READCOUNT_REQUEST_COUNT + 1),to_message_no: s.last().get("id")};
            d.ajax({url: m.makeApi("https://api.band.us", "/v1/chat/get_read_counts.json"),data: v,success: o.bind(function(x) {
                    if (m.v1FormatErrorHandle(x, w)) {
                        return
                    }
                    m.functionCall(w, "success", x.result_data)
                }, this)})
        },_createAuthKey: function() {
            var s = {authTokenValue: l.getSession()};
            return n.stringify(s)
        },_createSessionKey: function() {
            return encodeURIComponent(l.getSession())
        },join: function(v) {
            var s = {channel_id: this.channelID};
            d.ajax({url: m.makeApi("https://api.band.us", "/v1.1/join_chat_channel"),data: s,success: o.bind(function(w) {
                    if (m.v1FormatErrorHandle(w, v)) {
                        return
                    }
                    m.functionCall(v, "success", w.result_data)
                }, this)})
        },isChatClientConnected: function() {
            return this._chatClientConnected
        }});
    return e
});
define("module/domEventManager", ["jquery", "underscore", "backbone", "marionette", "libs/jquery/external/jquery.browser"], function(e, d, g, f, c) {
    var b = f.Controller.extend({initialize: function() {
            this.___custom_listeners = {}
        },_attachListener: function(h) {
            if (h.match(/^window:scroll/)) {
                if (!this.wfnDetectScroll) {
                    this.wfnDetectScroll = d.bind(function() {
                        if (this.isWindowScrollBottom()) {
                            this.trigger("window:scroll:bottom", e(window).scrollTop())
                        }
                        this.trigger("window:scroll", e(window).scrollTop())
                    }, this);
                    e(window).on("scroll", this.wfnDetectScroll)
                }
            } else {
                if (h.match(/^window:focus/)) {
                    if (!this.wfnOnFocus) {
                        this.wfnOnFocus = d.bind(function() {
                            this.trigger("window:focus")
                        }, this);
                        if (c.msie) {
                            e(document).on("focusin", this.wfnOnFocus)
                        } else {
                            e(window).on("focus", this.wfnOnFocus)
                        }
                    }
                } else {
                    if (h.match(/^window:blur/)) {
                        if (!this.wfnOnBlur) {
                            this.wfnOnBlur = d.bind(function() {
                                this.trigger("window:blur")
                            }, this);
                            if (c.msie) {
                                e(document).on("focusout", this.wfnOnBlur)
                            } else {
                                e(window).on("blur", this.wfnOnBlur)
                            }
                        }
                    }
                }
            }
        },_detachListener: function(h) {
            if (h.match(/^window:scroll/)) {
                if (this.wfnDetectScroll) {
                    e(window).off("scroll", this.wfnDetectScroll);
                    delete this.wfnDetectScroll
                }
            } else {
                if (h.match(/^window:focus/)) {
                    if (!this.wfnOnFocus) {
                        if (c.msie) {
                            e(document).off("focusin", this.wfnOnFocus)
                        } else {
                            e(window).off("focus", this.wfnOnFocus)
                        }
                        delete this.wfnOnFocus
                    }
                } else {
                    if (h.match(/^window:blur/)) {
                        if (!this.wfnOnBlur) {
                            if (c.msie) {
                                e(document).off("focusout", this.wfnOnBlur)
                            } else {
                                e(window).off("blur", this.wfnOnBlur)
                            }
                            delete this.wfnOnBlur
                        }
                    }
                }
            }
            delete this.___custom_listeners[_name]
        },_increaseListenCount: function(j, k) {
            var h = this.___custom_listeners[j];
            if (!h) {
                h = this.___custom_listeners[j] = new g.Collection([])
            }
            if (h.length === 0) {
                this._attachListener(j)
            }
            h.add({id: k})
        },_decreaseListenCount: function(k, l) {
            if (!k) {
                for (var h in this.___custom_listeners) {
                    this.___custom_listeners[h].remove(l);
                    if (this.___custom_listeners[h].length == 0) {
                        this._detachListener(h)
                    }
                }
            } else {
                var j = this.___custom_listeners[k];
                if (!j) {
                    return
                }
                j.remove(l);
                if (this.___custom_listeners[k].length == 0) {
                    this._detachListener(k)
                }
            }
        },on: function(h, k, j) {
            this._increaseListenCount(h, j._listenerId);
            g.Events.on.apply(this, arguments)
        },off: function(h, k, j) {
            this._decreaseListenCount(h, j._listenerId);
            g.Events.off.apply(this, arguments)
        },isWindowScrollBottom: function() {
            var k = e(document).height();
            var l = e(window).height();
            var h = e(window).scrollTop();
            var j = k - l;
            return h > j - 50
        }});
    return new b()
});
(function(e) {
    var O = "default", f = "granted", h = "denied", j = [f, O, h], g = {pageVisibility: false,autoClose: 0}, k = {}, P = "", Q = (function() {
        var R = false;
        try {
            R = !!(e.Notification || e.webkitNotifications || navigator.mozNotification || (e.external && e.external.msIsSiteMode() !== undefined))
        } catch (S) {
        }
        return R
    }()), b = Math.floor((Math.random() * 10) + 1), c = function(R) {
        return (R && (R).constructor === Function)
    }, m = function(R) {
        return (R && (R).constructor === String)
    }, l = function(R) {
        return (R && (R).constructor === Object)
    }, p = function(U, T) {
        var R, S;
        for (R in T) {
            S = T[R];
            if (!(R in U) || (U[R] !== S && (!(R in k) || k[R] !== S))) {
                U[R] = S
            }
        }
        return U
    }, d = function() {
    }, s = g;
    function N(T, R) {
        var S;
        if (e.Notification) {
            S = new e.Notification(T, {icon: m(R.icon) ? R.icon : R.icon.x32,body: R.body || P,tag: R.tag || P})
        } else {
            if (e.webkitNotifications) {
                S = e.webkitNotifications.createNotification(R.icon, T, R.body);
                S.show()
            } else {
                if (navigator.mozNotification) {
                    S = navigator.mozNotification.createNotification(T, R.body, R.icon);
                    S.show()
                } else {
                    if (e.external && e.external.msIsSiteMode()) {
                        e.external.msSiteModeClearIconOverlay();
                        e.external.msSiteModeSetIconOverlay((m(R.icon) ? R.icon : R.icon.x16), T);
                        e.external.msSiteModeActivate();
                        S = {ieVerification: b + 1}
                    }
                }
            }
        }
        return S
    }
    function x(R) {
        return {on: function(S, T) {
                if (R && R.addEventListener) {
                    R.addEventListener(S, T)
                }
            },close: function() {
                if (R) {
                    if (R.close) {
                        R.close()
                    } else {
                        if (e.external && e.external.msIsSiteMode()) {
                            if (R.ieVerification === b) {
                                e.external.msSiteModeClearIconOverlay()
                            }
                        }
                    }
                }
            }}
    }
    function n(S) {
        if (!Q) {
            return
        }
        var R = c(S) ? S : d;
        if (e.webkitNotifications && e.webkitNotifications.checkPermission) {
            e.webkitNotifications.requestPermission(R)
        } else {
            if (e.Notification && e.Notification.requestPermission) {
                e.Notification.requestPermission(R)
            }
        }
    }
    function r() {
        var R;
        if (!Q) {
            return
        }
        if (e.Notification && e.Notification.permissionLevel) {
            R = e.Notification.permissionLevel()
        } else {
            if (e.webkitNotifications && e.webkitNotifications.checkPermission) {
                R = j[e.webkitNotifications.checkPermission()]
            } else {
                if (navigator.mozNotification) {
                    R = f
                } else {
                    if (e.Notification && e.Notification.permission) {
                        R = e.Notification.permission
                    } else {
                        if (e.external && (e.external.msIsSiteMode() !== undefined)) {
                            R = e.external.msIsSiteMode() ? f : O
                        }
                    }
                }
            }
        }
        return R
    }
    function w(R) {
        if (R && l(R)) {
            p(s, R)
        }
        return s
    }
    function v() {
        return s.pageVisibility ? (document.hidden || document.msHidden || document.mozHidden || document.webkitHidden) : true
    }
    function o(U, R) {
        var T, S;
        if (Q && v() && m(U) && (R && (m(R.icon) || l(R.icon))) && (r() === f)) {
            T = N(U, R)
        }
        S = x(T);
        if (s.autoClose && T && !T.ieVerification && T.addEventListener) {
            T.addEventListener("show", function() {
                var V = S;
                e.setTimeout(function() {
                    V.close()
                }, s.autoClose)
            })
        }
        return S
    }
    e.notify = {PERMISSION_DEFAULT: O,PERMISSION_GRANTED: f,PERMISSION_DENIED: h,isSupported: Q,config: w,createNotification: o,permissionLevel: r,requestPermission: n};
    if (c(Object.seal)) {
        Object.seal(e.notify)
    }
}(window));
define("libs/notification/desktop-notify", (function(b) {
    return function() {
        var c, d;
        return c || b.notify
    }
}(this)));
/*!
  * jQuery pinify Plugin v1.3
  * http://ie9ify.codeplex.com
  *
  * Copyright 2011, Brandon Satrom and Clark Sell
  * Licensed under an Apache Foundation License.
  * http://github.com/bsatrom/pinify
  *
  * Date: Thursday February 02 2012 12:44:28 -06
  */
(function() {
    var b = Object.prototype.hasOwnProperty;
    (function(f) {
        var g, e, d, c;
        e = function(h, k, j) {
            if (f("meta[name=" + h + "]").length && h !== "msapplication-task") {
                return
            }
            if (!k.length) {
                return
            }
            return f("<meta>", {name: h,content: k}).appendTo(j)
        };
        c = function() {
            return (!!window.external) && ("msIsSiteMode" in window.external)
        };
        g = function(j, h) {
            try {
                return j()
            } catch (k) {
                return h
            }
        };
        d = {init: function(j) {
                var h;
                h = {applicationName: document.title.toString(),favIcon: "http://" + location.host + "/favicon.ico",navColor: "",startUrl: "http://" + location.host,tooltip: document.title.toString(),window: "width=800;height=600",target: "",tasks: []};
                j = f.extend({}, h, j);
                return this.each(function() {
                    var l, k;
                    k = j.tasks;
                    l = this;
                    if (f("link[type^=image]").length === 0) {
                        f("<link />", {rel: "shortcut icon",type: "image/ico",href: j.favIcon}).appendTo(this)
                    }
                    e("application-name", j.applicationName, this);
                    e("msapplication-tooltip", j.tooltip, this);
                    e("msapplication-starturl", j.startUrl, this);
                    e("msapplication-navbutton-color", j.navColor, this);
                    e("msapplication-window", j.window, this);
                    return f.each(k, function(m, n) {
                        return e("msapplication-task", "name=" + n.name + ";action-uri=" + n.action + ";icon-uri=" + n.icon + ";window-type=" + n.target, l)
                    })
                })
            },enablePinning: function(h) {
                return this.each(function() {
                    h = h || "Drag this image to your Windows 7 Taskbar to pin this site with IE9";
                    return f(this).addClass("msPinSite").attr({title: h})
                })
            },enableSiteMode: function(h) {
                h = h || "click";
                return this.each(function() {
                    return f(this).bind(h, function(j) {
                        j.preventDefault();
                        try {
                            return window.external.msAddSiteMode()
                        } catch (k) {
                        }
                    })
                })
            },pinTeaser: function(k) {
                var j, h, l;
                if (window.external.msIsSiteMode()) {
                    this
                }
                l = f(this);
                h = {type: "hangingChad",icon: document.location.pathname.slice(0, document.location.pathname.lastIndexOf("/")) + "/favicon.ico",pinText: "Drag this image to the taskbar to pin this site",secondaryText: "Simply drag the icon or tab to the taskbar to pin.",addStartLink: false,linkText: "Click here to add this site to the start menu",sticky: true,timeout: 1000,style: {linkColor: "rgb(0, 108, 172)",backgroundColor: "rgb(0, 108, 172)",textColor: "white",backgroundImage: null,leftBackgroundImage: null,rightBackgroundImage: null,closeButtonImage: null}};
                j = {topHat: function() {
                        var n, m;
                        l.addClass("pinify-topHat-container pinify-teaser").css("color", k.style.textColor);
                        if (k.style.backgroundImage) {
                            l.css("background-image", k.style.backgroundImage)
                        }
                        n = f("<div>", {"class": "pinify-topHat-alignment"}).appendTo(l);
                        m = f("<div>", {"class": "pinify-topHat-content"}).appendTo(n);
                        f("<img>", {id: "pinify-topHat-logo",src: k.icon,alt: "Drag Me","class": "msPinSite"}).appendTo(m);
                        return f("<span>").addClass("pinify-topHat-text").text(k.pinText).appendTo(m)
                    },brandedTopHat: function() {
                        var m;
                        l.addClass("pinify-brandedTopHat-container pinify-teaser").css("color", k.style.textColor);
                        if (k.style.backgoundImage) {
                            l.css("background-image", k.style.backgroundImage)
                        }
                        m = f("<div>", {"class": "pinify-brandedTopHat-content"}).appendTo(l);
                        f("<img>", {id: "pinify-brandedTopHat-firstLogo",src: k.icon,alt: "Drag Me","class": "msPinSite"}).appendTo(m);
                        f("<img>", {id: "pinify-brandedTopHat-secondLogo",src: k.icon,alt: "Drag Me","class": "msPinSite"}).appendTo(m);
                        f("<img>", {id: "pinify-brandedTopHat-thirdLogo",src: k.icon,alt: "Drag Me","class": "msPinSite"}).appendTo(m);
                        f("<div>", {"class": "pinify-mainText"}).text(k.pinText).appendTo(m);
                        return f("<div>", {"class": "pinify-brandedTopHat-secondaryText"}).text(k.secondaryText).appendTo(m)
                    },doubleTopHat: function() {
                        var m, o, n, p;
                        l.addClass("pinify-doubleTopHat-container pinify-teaser").css("color", k.style.textColor);
                        o = f("<div>", {"class": "pinify-doubleTopHat-left"}).appendTo(l);
                        if (k.style.leftBackgroundImage) {
                            f(o).css("background-image", k.style.leftBackgoundImage)
                        }
                        m = f("<div>", {id: "pinify-doubleTopHat-leftBar"}).appendTo(o);
                        f("<img>", {id: "pinify-doubleTopHat-logo",src: k.icon,alt: "Drag Me","class": "msPinSite"}).appendTo(m);
                        p = f("<div>", {"class": "pinify-doubleTopHat-right"}).appendTo(l);
                        if (k.style.rightBackgroundImage) {
                            f(p).css("background-image", k.style.rightBackgoundImage)
                        }
                        f("<div>", {id: "pinify-doubleTopHat-rightBar"}).appendTo(p);
                        n = f("<div>", {id: "pinify-doubleTopHat-rightBarMainContent"}).appendTo(p);
                        f("<div>", {"class": "pinify-mainText"}).text(k.pinText).appendTo(n);
                        return f("<div>", {"class": "pinify-doubleTopHat-lighterText"}).text(k.secondaryText).appendTo(p)
                    },hangingChad: function() {
                        l.hide();
                        l.css({color: k.style.textColor,"background-color": k.style.backgroundColor}).addClass("pinify-hanging-container pinify-teaser");
                        f("<img>", {src: k.icon,"class": "msPinSite"}).appendTo(l);
                        f("<div>", {"class": "pinify-hanging-content"}).appendTo(l);
                        f("<div>", {id: "pinify-pinText"}).text(k.pinText).appendTo(l);
                        return l.fadeIn("slow")
                    }};
                k = f.extend({}, h, k);
                return this.each(function() {
                    j[k.type]();
                    if (!k.sticky) {
                        this.delay(k.timeout).fadeOut("slow")
                    } else {
                        f("<div>").addClass("pinify-closePin").click(function() {
                            f(".pinify-teaser").slideUp("slow");
                            return l.slideUp("slow")
                        }).appendTo(l)
                    }
                    if (!k.addStartLink) {
                        return
                    }
                    return f("<a>").addClass("pinify-addSiteLink").attr("href", "#").click(function(m) {
                        m.preventDefault();
                        try {
                            return window.external.msAddSiteMode()
                        } catch (n) {
                        }
                    }).css("color", k.linkColor).appendTo(l).text(k.linkText)
                })
            }};
        f.fn.pinify = function(h) {
            if (!c()) {
                return this
            }
            if (d[h]) {
                return d[h].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                if (typeof h === "object" || !h) {
                    return d.init.apply(this, arguments)
                } else {
                    return f.error("Method " + h + " does not exist on jQuery.pinify")
                }
            }
        };
        return f.pinify = {firstRunState: function(h) {
                if (!c()) {
                    return 0
                }
                if (h) {
                    h = false
                }
                return g(function() {
                    return window.external.msIsSiteModeFirstRun(h)
                }, 0)
            },isPinned: function() {
                if (!c()) {
                    return false
                }
                return g(function() {
                    return window.external.msIsSiteMode()
                }, false)
            },addJumpList: function(j) {
                var h;
                if (!c()) {
                    return false
                }
                h = {title: "",items: []};
                j = f.extend({}, h, j);
                return g(function() {
                    var k;
                    if (window.external.msIsSiteMode()) {
                        window.external.msSiteModeClearJumpList();
                        window.external.msSiteModeCreateJumpList(j.title);
                        k = j.items;
                        f.each(k, function(l, m) {
                            return window.external.msSiteModeAddJumpListItem(m.name, m.url, m.icon, m.target)
                        });
                        return window.external.msSiteModeShowJumpList()
                    }
                })
            },clearJumpList: function() {
                if (!c()) {
                    return this
                }
                return g(function() {
                    if (window.external.msIsSiteMode()) {
                        return window.external.msSiteModeClearJumpList()
                    }
                })
            },addOverlay: function(j) {
                var h;
                if (!c()) {
                    return this
                }
                h = {title: "",icon: ""};
                j = f.extend({}, h, j);
                return g(function() {
                    if (window.external.msIsSiteMode()) {
                        window.external.msSiteModeClearIconOverlay();
                        return window.external.msSiteModeSetIconOverlay(j.icon, j.title)
                    }
                })
            },clearOverlay: function() {
                if (!c()) {
                    return this
                }
                return g(function() {
                    if (window.external.msIsSiteMode()) {
                        return window.external.msSiteModeClearIconOverlay()
                    }
                })
            },flashTaskbar: function() {
                if (!c()) {
                    return this
                }
                return g(function() {
                    if (window.external.msIsSiteMode()) {
                        return window.external.msSiteModeActivate()
                    }
                })
            },createThumbbarButtons: function(j) {
                var h;
                if (!c()) {
                    return this
                }
                h = {buttons: []};
                j = f.extend({}, h, j);
                return g(function() {
                    var k, m, l;
                    if (window.external.msIsSiteMode()) {
                        m = [];
                        k = (function() {
                            function n() {
                            }
                            n.prototype.button = null;
                            n.prototype.alternateStyle = null;
                            n.prototype.activeStyle = 0;
                            n.prototype.click = null;
                            n.prototype.hidden = false;
                            return n
                        })();
                        l = function(n) {
                            var p, o;
                            p = m[n.buttonID];
                            p.click();
                            if (p.alternateStyle) {
                                o = p.activeStyle === 0 ? p.alternateStyle : 0;
                                window.external.msSiteModeShowButtonStyle(p.button, o);
                                return p.activeStyle = o
                            }
                        };
                        f.each(j.buttons, function(o, s) {
                            var r, n, v, p;
                            n = window.external.msSiteModeAddThumbBarButton(s.icon, s.name);
                            if (s.alternateStyle) {
                                p = s.alternateStyle;
                                r = window.external.msSiteModeAddButtonStyle(n, p.icon, p.name)
                            }
                            v = new k;
                            v.button = n;
                            v.alternateStyle = r;
                            v.click = s.click;
                            v.hidden = s.hidden || false;
                            m[n] = v;
                            if (document.addEventListener) {
                                return document.addEventListener("msthumbnailclick", l, false)
                            } else {
                                if (document.attachEvent) {
                                    return document.attachEvent("onmsthumbnailclick", l)
                                }
                            }
                        });
                        window.onunload = function() {
                            var o, p, n;
                            n = [];
                            for (o in m) {
                                if (!b.call(m, o)) {
                                    continue
                                }
                                p = m[o];
                                n.push(window.external.msSiteModeUpdateThumbBarButton(p.button, true, false))
                            }
                            return n
                        };
                        window.onload = function() {
                            var o, p, n;
                            n = [];
                            for (o in m) {
                                if (!b.call(m, o)) {
                                    continue
                                }
                                p = m[o];
                                n.push(!p.hidden ? window.external.msSiteModeUpdateThumbBarButton(p.button, true, true) : void 0)
                            }
                            return n
                        };
                        return window.external.msSiteModeShowThumbBar()
                    }
                })
            }}
    })(jQuery)
}).call(this);
define("libs/jquery/external/jquery.pinify", ["jquery"], (function(b) {
    return function() {
        var c, d;
        return c || b.jQuery
    }
}(this)));
/*!!
 * Title Alert 0.7
 * 
 * Copyright (c) 2009 ESN | http://esn.me
 * Jonatan Heyman | http://heyman.info
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 */
;
(function(b) {
    b.titleAlert = function(f, d) {
        if (b.titleAlert._running) {
            b.titleAlert.stop()
        }
        b.titleAlert._settings = d = b.extend({}, b.titleAlert.defaults, d);
        if (d.requireBlur && b.titleAlert.hasFocus) {
            return
        }
        d.originalTitleInterval = d.originalTitleInterval || d.interval;
        b.titleAlert._running = true;
        b.titleAlert._initialText = document.title;
        document.title = f;
        var c = true;
        var e = function() {
            if (!b.titleAlert._running) {
                return
            }
            c = !c;
            document.title = (c ? f : b.titleAlert._initialText);
            b.titleAlert._intervalToken = setTimeout(e, (c ? d.interval : d.originalTitleInterval))
        };
        b.titleAlert._intervalToken = setTimeout(e, d.interval);
        if (d.stopOnMouseMove) {
            b(document).mousemove(function(g) {
                b(this).unbind(g);
                b.titleAlert.stop()
            })
        }
        if (d.duration > 0) {
            b.titleAlert._timeoutToken = setTimeout(function() {
                b.titleAlert.stop()
            }, d.duration)
        }
    };
    b.titleAlert.defaults = {interval: 500,originalTitleInterval: null,duration: 0,stopOnFocus: true,requireBlur: false,stopOnMouseMove: false};
    b.titleAlert.stop = function() {
        clearTimeout(b.titleAlert._intervalToken);
        clearTimeout(b.titleAlert._timeoutToken);
        document.title = b.titleAlert._initialText;
        b.titleAlert._timeoutToken = null;
        b.titleAlert._intervalToken = null;
        b.titleAlert._initialText = null;
        b.titleAlert._running = false;
        b.titleAlert._settings = null
    };
    b.titleAlert.hasFocus = true;
    b.titleAlert._running = false;
    b.titleAlert._intervalToken = null;
    b.titleAlert._timeoutToken = null;
    b.titleAlert._initialText = null;
    b.titleAlert._settings = null;
    b.titleAlert._focus = function() {
        b.titleAlert.hasFocus = true;
        if (b.titleAlert._running && b.titleAlert._settings.stopOnFocus) {
            var c = b.titleAlert._initialText;
            b.titleAlert.stop();
            setTimeout(function() {
                if (b.titleAlert._running) {
                    return
                }
                document.title = ".";
                document.title = c
            }, 1000)
        }
    };
    b.titleAlert._blur = function() {
        b.titleAlert.hasFocus = false
    };
    b(window).bind("focus", b.titleAlert._focus);
    b(window).bind("blur", b.titleAlert._blur)
})(jQuery);
define("libs/jquery/external/jquery.titlealert", ["jquery"], (function(b) {
    return function() {
        var c, d;
        return c || b.jQuery
    }
}(this)));
define("module/bandNotification", ["jquery", "underscore", "marionette", "localize/reslang", "module/domEventManager", "util/audio/audioPlayer", "libs/jquery/external/jquery.browser", "libs/notification/desktop-notify", "libs/jquery/external/jquery.pinify", "libs/jquery/external/jquery.titlealert"], function(c, h, g, j, k, e, d, b) {
    var f = g.Controller.extend({_AUTO_CLOSE_DELAY: 15 * 1000,initialize: function() {
            b.config({autoClose: this._AUTO_CLOSE_DELAY})
        },start: function() {
            if (this.isStarted) {
                return
            }
            this.isStarted = true;
            this._attachEventListener()
        },isBlured: function() {
            return !document.hasFocus()
        },isActivate: function() {
            return false
        },show: function(l, n, o) {
            if (!this.isStarted) {
                return
            }
            if (!l) {
                return
            }
            n = n || "BAND";
            o = o || function() {
                window.open("", "_self").focus()
            };
            if (this.isBlured()) {
                if (this.isActivate()) {
                    if (this.lastNotification) {
                        this.lastNotification.close()
                    }
                    this.lastNotification = b.createNotification(n, {body: l,icon: "/favicon.ico"});
                    this.lastNotification.on("click", o);
                    try {
                        window.external.msSiteModeSetIconOverlay(resBaseUrl + "/images/@sample_new.ico", "으으응")
                    } catch (m) {
                    }
                } else {
                    c.titleAlert(l, {stopOnFocus: true})
                }
            }
        },_createIETeaser: function() {
            var m = c("<div style='height:100px;border:1px solid;background-color:#AAFFAA;color:#000000;font-size:20px'>알림 기능을 사용하려면, 이곳을 클릭하여 시작화면에 등록하세요.</div>");
            m.pinify("enableSiteMode", "click");
            var l = c("<div class='draggable' style='z-index:1000;position:fixed;right:0px;bottom:0px'>");
            l.pinify("pinTeaser", {icon: "/favicon.ico",pinText: "위 아이콘을 끌어서 작업표시줄에 놓아 고정시키면, 밴드서비스의 알림을 작업표시줄에서 확인하실 수 있게 됩니다.",textColor: "white",mainContentSelector: "body"});
            l.prepend(m);
            return l
        },_createHTML5Teaser: function() {
            var l = c("<div class='draggable' style='z-index:1000;position:fixed;right:0px;bottom:0px'>");
            var m = c("<div style='height:100px;border:1px solid;background-color:#AAFFAA;color:#000000;font-size:20px'>알림 기능을 사용하려면, 이곳을 클릭하여 알림을 허용하세요.</br></div>");
            l.prepend(m);
            l.on("click", h.bind(function() {
                b.requestPermission(h.bind(function() {
                    this.show("밴드 알림 기능이 허용되었습니다.");
                    l.remove()
                }, this))
            }, this));
            return l
        },showPermissionView: function() {
            if (!b.isSupported) {
                return
            }
            if (b.permissionLevel() != b.PERMISSION_DEFAULT) {
                return
            }
            if (window.external && "msIsSiteMode" in window.external && !window.external.msIsSiteMode()) {
            } else {
                if (!this.teaser) {
                    this.teaser = this._createHTML5Teaser();
                    c("body").append(this.teaser)
                }
                this.teaser.show()
            }
        },_attachEventListener: function() {
            this.listenTo(k, "window:focus", function() {
                if (this.isActivate()) {
                    try {
                        window.external.msSiteModeClearIconOverlay()
                    } catch (l) {
                    }
                }
                if (c.titleAlert._running) {
                    c.titleAlert.stop()
                }
                this.trigger("focus")
            }, this);
            this.listenTo(k, "window:blur", function() {
                this.trigger("blur")
            }, this)
        }});
    return new f()
});
define("chat/controllers/chattingReportHelper", ["underscore", "marionette", "report/controllers/reportManager"], function(c, e, b) {
    var d = e.Controller.extend({initialize: function(f) {
            this.chattingChannel = f.chattingChannel;
            this.chattingMessageCollection = f.chattingMessageCollection;
            this.chattingController = f.chattingController;
            this.chattingUserCollection = f.chattingUserCollection
        },report: function(j) {
            var h = this.chattingChannel.getBandNo();
            var g = this.chattingChannel.getChannelId();
            var f = new b();
            f.registerChatReportGlobalCallback(c.bind(this.getChattingRoomReportData, this));
            f.openChatReportPopup(h, g, j)
        },getChattingRoomReportData: function(k, g, j) {
            if ((this.chattingChannel.getBandNo() + "") !== (k + "") || (this.chattingChannel.getChannelId() + "") !== (g + "")) {
                try {
                    alert("Report failed. Invalid parameters.");
                    console.log("invalidate parameters. expected : " + this.chattingChannel.getBandNo() + ", " + this.chattingChannel.getChannelId() + ", {baseMessageId}");
                    console.log("but.                     active : " + k + ", " + g + ", " + j);
                    console.log("but.                     active : " + typeof (k) + ", " + typeof (g) + ", " + typeof (j))
                } catch (h) {
                }
                return null
            }
            var f = this._getChattingMessagesToReport(j);
            return this._toReportObject(f)
        },_getChattingMessagesToReport: function(g) {
            var f = this.chattingMessageCollection.indexOf(this.chattingMessageCollection.get(g));
            var h = this.chattingMessageCollection.slice(Math.max(f - 20, 0), f + 20);
            return c.filter(h, function(j) {
                return this.isReportContentMessage(j.get("type"))
            }, this)
        },_toReportObject: function(f) {
            return {channel: c.pick(this.chattingChannel.toJSON(), ["name", "type", "buid", "user_count", "band_name", "band_no", "is_default_channel"]),messages: c.map(f, function(j) {
                    var g = {id: j.get("id"),type: j.get("type"),body: j.get("body"),extras: j.get("extras"),tid: j.get("tid"),created_at: j.get("created_at"),member_count: j.get("member_count"),read_count: j.get("read_count")};
                    var h = this.chattingUserCollection.findWhere({id: j.get("writer_id")});
                    if (h) {
                        g.writer = h.toJSON()
                    }
                    return g
                }, this)}
        },isReportContentMessage: function(f) {
            return c.contains([1, 10, 11, 14], (f * 1))
        }});
    return d
});
define("log/band_stats/config/bandStatsConstants", [], function() {
    var b = {APP_KEY: "bbc59b0b5f7a1c6efe950f6236ccda35",APP_USAGE_STAT_CODE: {LOGIN_EXECUTE: 0,NOT_LOGIN_EXECUTE: 1},SCV_PAGE_NO: {BAND_LIST: 1,NEWS: 2,BAND_POST_LIST: 4,BAND_POST_DETAIL: 5,CHAT_LIST: 6,BAND_ALBUM: 7,BAND_MEMBER: 8,BAND_CALENDAR: 9,BAND_CHAT_ROOM: 13},INFLOW_METHOD_TYPE: {NEWS: "news",EXTERNAL: "external"}};
    return b
});
/*!
 * jQuery UA plugin v0.9.7
 * https://github.com/terkel/jquery-ua
 *
 * Copyright (c) 2012 Takeru Suzuki - http://terkel.jp/
 * Licensed under the MIT license - http://www.opensource.org/licenses/MIT
 */
(function(d) {
    var g, c, f;
    d.ua = d.ua || {init: function() {
            g = this.platform = this.detect(this.data.platforms);
            c = this.browser = this.detect(this.data.browsers);
            f = this.engine = this.detect(this.data.engines)
        },detect: function(o) {
            var b = navigator.userAgent.toLowerCase(), w = {}, h, r, m, e, p, s, l, n, k, v;
            for (p = 0, s = o.length; p < s; p++) {
                l = o[p];
                h = l.name;
                r = l.versionSearch;
                m = l.flags;
                e = l.versionNames;
                if (b.indexOf(h) !== -1) {
                    w.name = h.replace(/\s/g, "");
                    w[w.name] = true;
                    w.version = ("" + (new RegExp(r + "(\\d+((\\.|_)\\d+)*)").exec(b) || [, 0])[1]).replace(/_/g, ".");
                    w.versionMajor = parseInt(w.version, 10);
                    if (m) {
                        for (n = 0, k = m.length; n < k; n++) {
                            w[m[n]] = true
                        }
                    }
                    if (e) {
                        for (n = 0, k = e.length; n < k; n++) {
                            v = e[n];
                            if (w.version.indexOf(v.number) === 0) {
                                w.versionName = v.name;
                                w[w.versionName] = true;
                                break
                            }
                        }
                    }
                    if (o === d.ua.data.platforms) {
                        w.mobile = /mobile|phone/.test(b) || w.blackberry;
                        w.tablet = /tablet/.test(b) || w.ipad || (w.android && !/mobile/.test(b));
                        if (w.ios) {
                            w.versionName = "ios" + w.versionMajor
                        }
                    }
                    break
                }
            }
            if (!w.name) {
                w.unknown = true;
                w.name = "";
                w.version = "";
                w.versionMajor = ""
            }
            return w
        },data: {platforms: [{name: "windows phone",versionSearch: "windows phone os ",versionNames: [{number: "7.5",name: "mango"}]}, {name: "win",versionSearch: "windows(?: nt)? ",versionNames: [{number: "6.2",name: "win8"}, {number: "6.1",name: "win7"}, {number: "6.0",name: "winvista"}, {number: "5.2",name: "winxp"}, {number: "5.1",name: "winxp"}, {number: "5.0",name: "win2000"}]}, {name: "ipad",versionSearch: "cpu os ",flags: ["ios"]}, {name: "ipod",versionSearch: "iphone os ",flags: ["ios"]}, {name: "iphone",versionSearch: "iphone os ",flags: ["ios"]}, {name: "mac",versionSearch: "os x ",versionNames: [{number: "10.8",name: "mountainlion"}, {number: "10.7",name: "lion"}, {number: "10.6",name: "snowleopard"}, {number: "10.5",name: "leopard"}, {number: "10.4",name: "tiger"}, {number: "10.3",name: "panther"}, {number: "10.2",name: "jaguar"}, {number: "10.1",name: "puma"}, {number: "10.0",name: "cheetah"}]}, {name: "android",versionSearch: "android ",versionNames: [{number: "4.1",name: "jellybean"}, {number: "4.0",name: "icecreamsandwich"}, {number: "3.",name: "honeycomb"}, {number: "2.3",name: "gingerbread"}, {number: "2.2",name: "froyo"}, {number: "2.",name: "eclair"}, {number: "1.6",name: "donut"}, {number: "1.5",name: "cupcake"}]}, {name: "blackberry",versionSearch: "(?:blackberry\\d{4}[a-z]?|version)/"}, {name: "linux"}],browsers: [{name: "iemobile",versionSearch: "iemobile/"}, {name: "msie",versionSearch: "msie "}, {name: "firefox",versionSearch: "firefox/"}, {name: "chrome",versionSearch: "chrome/"}, {name: "safari",versionSearch: "version/"}, {name: "opera",versionSearch: "version/"}],engines: [{name: "trident",versionSearch: "trident/"}, {name: "webkit",versionSearch: "webkit/"}, {name: "gecko",versionSearch: "rv:"}, {name: "presto",versionSearch: "presto/"}]}};
    d.ua.init();
    d("html").addClass([g.name, g.versionName, c.name, c.name + c.versionMajor, f.name, f.name + f.versionMajor].join(" "))
})(jQuery);
define("libs/jquery/external/jquery.ua", ["jquery"], (function(b) {
    return function() {
        var c, d;
        return c || b.jQuery.ua
    }
}(this)));
define("log/band_stats/config/statApiInfo", ["jquery", "localize/localizeSpec", "log/band_stats/config/bandStatsConstants", "loginUserData", "libs/json2/json2", "libs/jquery/external/jquery.ua"], function(f, g, d, b, h, c) {
    var e = {makeLogApiUrl: function(l, r, k) {
            var p = l.replace(/http[s]?:\/\//, "");
            var j = e[p];
            var s = /^proxy\:/;
            var o = s.test(r);
            r = r.replace(s, "");
            k = k || {};
            if (j) {
                for (var m = 0; j.DEFAULT_PARAMS && m < j.DEFAULT_PARAMS.length; m++) {
                    var n = j.DEFAULT_PARAMS[m];
                    k = e.__param_generator[n](k)
                }
                if (o) {
                    l = j.PROXY_PREFIX
                } else {
                    l = l.replace(p, j.DOMAIN)
                }
            }
            return l + r + "?" + f.param(k)
        },"api.band.us": {DOMAIN: window.apiDomain,DEFAULT_PARAMS: ["language", "country", "akey"],PROXY_PREFIX: "/api",USE_FLXHR: true,SUPPORT_JSONP: true},"scv.band.us": {DOMAIN: window.scvDomain,DEFAULT_PARAMS: ["timestamp", "client"],USE_FLXHR: true,SUPPORT_JSONP: true},__param_generator: {timestamp: function(j) {
                j = j || {};
                j.timestamp = new Date().getTime();
                return j
            },client: function(j) {
                var k = {user_no: b.getUserNO(),type: "bandweb",country: g.countryCode,language: g.languageLocale};
                f.extend(j, {client: h.stringify(k)});
                return j
            },language: function(j) {
                j = j || {};
                j.language = g.languageLocale;
                return j
            },country: function(j) {
                j = j || {};
                j.country = g.countryCode;
                return j
            },akey: function(j) {
                j = j || {};
                j.akey = d.APP_KEY;
                return j
            },locale: function(l) {
                var j = g.languageLocale + "-" + g.countryCode;
                var k = j.split("-");
                if (k.length == 3) {
                    j = k[0] + "-" + k[1]
                }
                l = l || {};
                l.locale = j;
                return l
            },user_locale: function(j) {
            },timezone: function(j) {
            },os_name: function(j) {
            },os_version: function(j) {
            }}};
    return e
});
define("log/band_stats/models/scvDataModel", ["jquery", "underscore", "backbone"], function(d, c, e) {
    var b = e.Model.extend({defaults: {tp: undefined,ts: undefined,pg: undefined,rf: undefined},initialize: function(f) {
            this.setPageNo(f);
            this.setTimeStamp();
            this.setReferer()
        },setBandNo: function(f) {
            this.set("bn", f)
        },setLogType: function(f) {
            this.set("tp", f)
        },setPageNo: function(f) {
            this.set("pg", f)
        },setTimeStamp: function(f) {
            f = f || new Date().getTime();
            this.set("ts", f)
        },setReferer: function(g) {
            var f = e.history.location.origin + "/" + e.history.location.hash;
            g = g || f;
            this.set("rf", g)
        },setInflowMethod: function(f) {
            this.set("im", f)
        },setPostNo: function(f) {
            this.set("pn", f)
        },setPostId: function(f) {
            this.set("pi", f)
        },setSectionNo: function(f) {
            this.set("sc", f)
        }});
    return b
});
define("log/band_stats/controllers/bandStatLogClient", ["jquery", "underscore", "marionette", "log/band_stats/models/scvDataModel", "log/band_stats/config/statApiInfo", "log/band_stats/config/bandStatsConstants", "libs/jquery/external/jquery.browser"], function(h, f, j, e, c, g, b) {
    var d = j.Controller.extend({initialize: function(k) {
        },logAppUsageStat: function(l) {
            var m = {code: g.APP_USAGE_STAT_CODE.LOGIN_EXECUTE,user_id: l};
            var k = c.makeLogApiUrl("https://api.band.us", "/api/m2/add_stat.json", m);
            this._call(k)
        },logPageVIew: function(k) {
            k.setLogType("pv");
            this._logForScv(k)
        },logClick: function(k) {
            k.setLogType("cl");
            this._logForScv(k)
        },logScetionExposure: function(k) {
            k.setLogType("se");
            this._logForScv(k)
        },_logForScv: function(l) {
            var m = [];
            m.push(l.toJSON());
            var n = {data: JSON.stringify(m)};
            var k = c.makeLogApiUrl("https://scv.band.us", "/band/v1/logs", n);
            this._call(k)
        },_call: function(k) {
            var l = document.createElement("IMG");
            if (b.msie && b.versionNumber < 8) {
                l.src = k
            } else {
                l.setAttribute("src", k)
            }
        }});
    return new d()
});
define("log/band_stats/bandStatsUtil", ["jquery", "underscore", "marionette", "config/pageInfos", "log/band_stats/config/statApiInfo", "log/band_stats/controllers/bandStatLogClient", "log/band_stats/models/scvDataModel", "log/band_stats/config/bandStatsConstants"], function(d, j, h, f, b, k, c, g) {
    var e = h.Controller.extend({initialize: function(l) {
            this.inflowMethod = {NEWS: false}
        },logPageVIew: function(n) {
            var l = n.pageInfo.NAME;
            var m = n.pathVariables;
            switch (l) {
                case f.USER_HOME.NAME:
                    this.__logPageView(g.SCV_PAGE_NO.BAND_LIST);
                    break;
                case f.BAND_ALBUM.NAME:
                    this.__logPageView(g.SCV_PAGE_NO.BAND_ALBUM, m.band_no);
                    break;
                case f.BAND_CALENDAR.NAME:
                    this.__logPageView(g.SCV_PAGE_NO.BAND_CALENDAR, m.band_no);
                    break;
                case f.BAND_MEMBER.NAME:
                    this.__logPageView(g.SCV_PAGE_NO.BAND_MEMBER, m.band_no);
                    break;
                case f.BAND_POST_DETAIL.NAME:
                    break;
                case f.BAND_BOARD.NAME:
                case f.BAND_HOME.NAME:
                default:
                    this.__logPageView(g.SCV_PAGE_NO.BAND_POST_LIST, m.band_no)
            }
        },logChatListPageVIew: function() {
            this.__logPageView(g.SCV_PAGE_NO.CHAT_LIST)
        },logNewsPageVIew: function() {
            this.__logPageView(g.SCV_PAGE_NO.NEWS)
        },logChattingRoomPageView: function(l) {
            this.__logPageView(g.SCV_PAGE_NO.BAND_CHAT_ROOM, l)
        },logPostDetail: function(m, l) {
            this.__logPageView(g.SCV_PAGE_NO.BAND_POST_DETAIL, m, l)
        },__logPageView: function(m, o, l) {
            var n = new c(m);
            if (o != undefined) {
                n.setBandNo(o)
            }
            if (l != undefined) {
                n.setPostNo(l)
            }
            this.__addInflowMethod(n);
            this._initInflowMethod();
            k.logPageVIew(n)
        },__addInflowMethod: function(l) {
            if (this.inflowMethod.NEWS) {
                l.setInflowMethod(g.INFLOW_METHOD_TYPE.NEWS)
            }
        },_initInflowMethod: function() {
            j.each(this.inflowMethod, function(l) {
                l = false
            })
        },clickNews: function(l) {
            l = l || {};
            this.inflowMethod.NEWS = true
        }});
    return new e()
});
/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @author Ariel Flesler
 * @version 1.4.6
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 *		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number, Function} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number, Function} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @desc Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @desc Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
;
(function(d) {
    var b = d.scrollTo = function(g, f, e) {
        d(window).scrollTo(g, f, e)
    };
    b.defaults = {axis: "xy",duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1,limit: true};
    b.window = function(e) {
        return d(window)._scrollable()
    };
    d.fn._scrollable = function() {
        return this.map(function() {
            var f = this, e = !f.nodeName || d.inArray(f.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if (!e) {
                return f
            }
            var g = (f.contentWindow || f).document || f.ownerDocument || f;
            return /webkit/i.test(navigator.userAgent) || g.compatMode == "BackCompat" ? g.body : g.documentElement
        })
    };
    d.fn.scrollTo = function(g, f, e) {
        if (typeof f == "object") {
            e = f;
            f = 0
        }
        if (typeof e == "function") {
            e = {onAfter: e}
        }
        if (g == "max") {
            g = 9000000000
        }
        e = d.extend({}, b.defaults, e);
        f = f || e.duration;
        e.queue = e.queue && e.axis.length > 1;
        if (e.queue) {
            f /= 2
        }
        e.offset = c(e.offset);
        e.over = c(e.over);
        return this._scrollable().each(function() {
            if (g == null) {
                return
            }
            var n = this, l = d(n), m = g, k, h = {}, o = l.is("html,body");
            switch (typeof m) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(m)) {
                        m = c(m);
                        break
                    }
                    m = d(m, this);
                    if (!m.length) {
                        return
                    }
                case "object":
                    if (m.is || m.style) {
                        k = (m = d(m)).offset()
                    }
            }
            d.each(e.axis.split(""), function(v, w) {
                var x = w == "x" ? "Left" : "Top", O = x.toLowerCase(), s = "scroll" + x, r = n[s], p = b.max(n, w);
                if (k) {
                    h[s] = k[O] + (o ? 0 : r - l.offset()[O]);
                    if (e.margin) {
                        h[s] -= parseInt(m.css("margin" + x)) || 0;
                        h[s] -= parseInt(m.css("border" + x + "Width")) || 0
                    }
                    h[s] += e.offset[O] || 0;
                    if (e.over[O]) {
                        h[s] += m[w == "x" ? "width" : "height"]() * e.over[O]
                    }
                } else {
                    var N = m[O];
                    h[s] = N.slice && N.slice(-1) == "%" ? parseFloat(N) / 100 * p : N
                }
                if (e.limit && /^\d+$/.test(h[s])) {
                    h[s] = h[s] <= 0 ? 0 : Math.min(h[s], p)
                }
                if (!v && e.queue) {
                    if (r != h[s]) {
                        j(e.onAfterFirst)
                    }
                    delete h[s]
                }
            });
            j(e.onAfter);
            function j(p) {
                l.animate(h, f, e.easing, p && function() {
                    p.call(this, m, e)
                })
            }
        }).end()
    };
    b.max = function(l, k) {
        var j = k == "x" ? "Width" : "Height", f = "scroll" + j;
        if (!d(l).is("html,body")) {
            return l[f] - d(l)[j.toLowerCase()]()
        }
        var h = "client" + j, g = l.ownerDocument.documentElement, e = l.ownerDocument.body;
        return Math.max(g[f], e[f]) - Math.min(g[h], e[h])
    };
    function c(e) {
        return typeof e == "object" ? e : {top: e,left: e}
    }
})(jQuery);
define("libs/jquery/external/jquery.scrollTo", ["jquery"], (function(b) {
    return function() {
        var c, d;
        return c || b.jQuery
    }
}(this)));
define("chat/views/chattingRoomPopupView", ["jquery", "underscore", "marionette", "text!chat/templates/chattingRoomPopupTemplate.html", "chat/views/chattingMessageListView", "chat/views/chattingMessageInputLayer", "chat/controllers/chattingController", "chat/collections/chattingUserCollection", "util/customStringUtil", "loginUserData", "localize/reslang", "bandConstants", "module/domEventManager", "module/bandNotification", "module/loading", "chat/controllers/chattingReportHelper", "log/band_stats/bandStatsUtil", "libs/jquery/external/jquery.titlealert", "libs/jquery/external/jquery.scrollTo"], function(f, w, h, d, s, e, k, n, p, o, l, c, j, r, g, v, m) {
    var b = h.Layout.extend({_BROWSER_TITLE_MIN_LENGTH: 18,_CHANNEL_TYPE: {PUBLIC: "public",PRIVATE: "private",BAND: "band"},_ACK_DELAY_TIME: 1500,_SCROLL_BOTTOM_GAP: 50,template: w.template(d),events: {"click .pop_setting": function(x) {
                this.toggleMenu();
                return false
            },"click li.chat_member": function(x) {
                this.trigger("click:memberlist");
                return false
            },"click li.invite_friends": function(x) {
                this.trigger("click:invite");
                return false
            },"click li.delete_chat": function(x) {
                if (confirm(l.STR("pcweb.noui.js.alert.delete_chat"))) {
                    this.chattingController.deleteMessages({success: w.bind(function() {
                            this.toggleMenu();
                            this.chattingMessageCollection.reset([]);
                            this._renderChattingMessageList()
                        }, this)})
                }
                return false
            },"click li.quit_chatroom": function(x) {
                if (confirm(l.STR("pcweb.noui.js.chat.confirm_quit_room"))) {
                    this.chattingController.quitChatroom({success: w.bind(function() {
                            this.trigger("quit:chatroom")
                        }, this)})
                }
                return false
            },"click div.new_message_alert_wrap": function(x) {
                this.goScrollEnd();
                return false
            }},ui: {roomTitleBar: "div.status_bar strong._title",settingButton: "a.pop_setting",menuLayer: "div.pop_menu",scrollObject: "div.chatroom",dimmed: "div.deemed",menuMember: "ul.menu_list li.chat_member",menuInvite: "ul.menu_list li.invite_friends",menuQuit: "ul.menu_list li.quit_chatroom",alertViewWrap: "div.new_message_alert_wrap",alertViewMessage: "div.new_message_alert_wrap p.message_txt"},regions: {chattingMessageListWrap: "div.chat_list",chattingMessageInputWrap: "div._chat_input_wrap"},initialize: function(x) {
            this.chattingMessageCollection = x.chattingMessageCollection;
            this.chattingUserCollection = x.chattingUserCollection;
            this.chattingChannel = x.chattingChannel;
            this.lastMessageNo = x.lastMessageNo;
            this.wasScrollEnd = true;
            this.chattingController = x.chattingController;
            this._initChattingController();
            m.logChattingRoomPageView(this.chattingChannel.getBandNo())
        },_initChattingController: function() {
            this.listenTo(this.chattingController, "connected", function(x) {
                g.close();
                this.chattingMessageInputWrap.currentView.focusMessageInput();
                this._sendAck()
            }, this);
            this.listenTo(this.chattingController, "recieve:message", function(x) {
                this._addMessage(x)
            }, this);
            this.listenTo(this.chattingController, "join:user", function(x) {
                this._refreshUser()
            }, this);
            this.listenTo(this.chattingController, "quit:user", function(x) {
                this._refreshUser()
            }, this);
            this.listenTo(this.chattingController, "kick:user", function(x) {
                this._refreshUser()
            }, this);
            this.listenTo(this.chattingController, "ack:message", function(x) {
                this.chattingController.updateReadCounts(this.chattingMessageCollection)
            }, this)
        },_attachEventListener: function() {
            this.listenTo(j, "window:focus", function() {
                this._changeRoomTitle();
                this._sendAck()
            }, this)
        },_addMessage: function(x) {
            this.wasScrollEnd = this.isScrollEnd();
            this.chattingMessageCollection.add(x);
            this.chattingMessageCollection.correctMessages();
            this._sendAck()
        },_refreshUser: function() {
            this.chattingUserCollection.simpleFetch({success: w.bind(function() {
                    this._changeRoomTitle()
                }, this)})
        },toggleMenu: function() {
            this.ui.settingButton.toggleClass("on");
            this.ui.dimmed.toggle();
            this.ui.menuLayer.toggle()
        },isScrollEnd: function() {
            var x = this.ui.scrollObject.scrollTop() + this.ui.scrollObject.height() + this._SCROLL_BOTTOM_GAP >= this.ui.scrollObject.prop("scrollHeight");
            this.wasScrollEnd = x;
            return x
        },goScrollEnd: function() {
            setTimeout(w.bind(function() {
                this.ui.scrollObject.scrollTop(this.ui.scrollObject.prop("scrollHeight"));
                this.wasScrollEnd = true
            }, this), 100)
        },_sendAck: function() {
            if (!r.isBlured() && !this.ackTimer) {
                this.ackTimer = setTimeout(w.bind(function() {
                    if (this.chattingMessageCollection.length > 0) {
                        this.chattingController.ackMessage(this.chattingMessageCollection.last().get("id"))
                    }
                    this.ackTimer = null
                }, this), this._ACK_DELAY_TIME)
            }
        },_showAlertView: function(N) {
            var x = null;
            if (N.message.type == c.CHAT.MESSAGE_TYPE.NORMAL) {
                x = N.writer.name + " : " + N.message.body
            } else {
                if (N.message.type == c.CHAT.MESSAGE_TYPE.STICKER) {
                    x = N.writer.name + " : " + l.STR("pcweb.noui.js.chat.msg_send_sticker")
                } else {
                    if (N.message.type == c.CHAT.MESSAGE_TYPE.PHOTO) {
                        x = N.writer.name + " : " + l.STR("pcweb.noui.js.chat.msg_send_photo")
                    } else {
                        if (N.message.type == c.CHAT.MESSAGE_TYPE.AUDIO_MESSAGE) {
                            x = N.writer.name + " : " + l.STR("pcweb.noui.js.chat.msg_send_audio")
                        }
                    }
                }
            }
            if (x) {
                this.ui.alertViewMessage.html(x);
                this.ui.alertViewWrap.show();
                this.ui.alertViewWrap.stop(true).animate({opacity: 1}).animate({opacity: 1}, 3000).animate({opacity: 0}, w.bind(function() {
                    this.ui.alertViewWrap.hide()
                }, this))
            }
        },_renderChattingMessageList: function() {
            var x = new s({collection: this.chattingMessageCollection,chattingUserCollection: this.chattingUserCollection,chattingChannel: this.chattingChannel,lastMessageNo: this.lastMessageNo});
            x.on("add:newMessage", function(R) {
                var O = R.getMessageData();
                if (this.wasScrollEnd) {
                    this.goScrollEnd()
                } else {
                    this._showAlertView(O)
                }
                if (r.isBlured() && O.notifiable) {
                    var P = this.chattingMessageCollection.last().get("id") * 1 - this.chattingController.getLastAckMessageID() * 1;
                    var Q = "";
                    if (P && P > 0) {
                        Q = "(" + P + ")"
                    }
                    var N = Q + l.STR("pcweb.noui.js.chat.title_new_message");
                    r.show(N + "\n" + O.writer.name + " : " + O.message.body, l.STR("pcweb.noui.js.chat.label_chat"), function() {
                        window.open("", "_self").focus()
                    })
                }
            }, this);
            x.on("click:previous", function(N) {
                this.chattingController.getPrevMessages(this.chattingMessageCollection, {success: w.bind(function(O) {
                        var P = this.ui.scrollObject.prop("scrollHeight");
                        this.chattingMessageCollection.addPrevMessages(O.messages);
                        this.ui.scrollObject.scrollTop(this.ui.scrollObject.prop("scrollHeight") - P)
                    }, this)})
            }, this);
            x.on("render:unreadview", function(O) {
                var P = this.ui.scrollObject.height();
                var N = O.$el.height();
                this.ui.scrollObject.scrollTo(O.$el, {offset: {top: -(P / 2 - N),left: 0}})
            }, this);
            x.on("itemview:report", function(P, O) {
                var Q = O.model;
                if (Q.isReportableMessage()) {
                    var N = new v({chattingChannel: this.chattingChannel,chattingMessageCollection: this.chattingMessageCollection,chattingUserCollection: this.chattingUserCollection,chattingController: this.chattingController});
                    N.report(Q.getMessageId())
                }
            }, this);
            this.chattingMessageListWrap.show(x)
        },_renderChattingMessageInput: function() {
            var x = new e({chattingChannel: this.chattingChannel});
            x.on("submit:message", function(N) {
                this.chattingController.sendMessage(N.text_message);
                this.goScrollEnd()
            }, this);
            x.on("select:sticker", function(N) {
                this.chattingController.sendSticker(N);
                this.goScrollEnd()
            }, this);
            x.on("upload:photo", function(N) {
                this.chattingMessageCollection.add(N.message);
                this.goScrollEnd()
            }, this);
            this.chattingMessageInputWrap.show(x);
            if (this.chattingController.isChatClientConnected()) {
                x.focusMessageInput()
            }
        },_changeMenuUI: function() {
            if (this.chattingChannel.isPrivate()) {
                this.ui.menuLayer.toggleClass("menu_num_4", false);
                this.ui.menuMember.hide()
            } else {
                this.ui.menuLayer.toggleClass("menu_num_4", true)
            }
        },_renderBrowserTitle: function() {
            var x = "BAND";
            var N = this.chattingUserCollection.getReadyUsers();
            var O = N.length;
            N.remove(o.getUser());
            if (this.chattingChannel.getType() == this._CHANNEL_TYPE.BAND) {
                x = this.chattingChannel.get("name")
            } else {
                if (N.length > 2) {
                    N.reset(N.slice(0, 2));
                    x = l.STR("pcweb.noui.js.chat.browser_title", N.pluck("name").join(","), O - 2)
                } else {
                    x = N.pluck("name").join(",")
                }
            }
            if (x.length > this._BROWSER_TITLE_MIN_LENGTH) {
                document.title = x.substring(0, this._BROWSER_TITLE_MIN_LENGTH) + "..." + l.STR("pcweb.noui.js.chat.label_chat")
            } else {
                document.title = x + l.STR("pcweb.noui.js.chat.label_chat")
            }
        },_changeRoomTitle: function() {
            this.ui.roomTitleBar.text(this._createRoomTitle());
            this._renderBrowserTitle()
        },_createRoomTitle: function() {
            return this.chattingChannel.createRoomTitle(this.chattingUserCollection.getReadyUsers().length)
        },_getRoomTypeClassName: function() {
            var x = "";
            var N = this.chattingChannel.getType();
            if (N == this._CHANNEL_TYPE.PUBLIC) {
                x = "nn"
            } else {
                if (N == this._CHANNEL_TYPE.PRIVATE) {
                    x = ""
                } else {
                    if (N == this._CHANNEL_TYPE.BAND) {
                        x = "all"
                    }
                }
            }
            return x
        },serializeData: function() {
            var x = this._getRoomTypeClassName();
            return {channelTypeClass: x}
        },onRender: function() {
            if (!this.chattingController.isChatClientConnected()) {
                g.show()
            }
            this.ui.alertViewWrap.hide().css("opacity", 0);
            this._changeRoomTitle();
            r.start();
            this._attachEventListener()
        },onShow: function() {
            this._renderChattingMessageList();
            this._renderChattingMessageInput();
            this._changeMenuUI();
            this._sendAck()
        }});
    return b
});
define("text!chat/templates/chattableMemberListTemplate.html", [], function() {
    return '\t<div class="status_bar">\n      <strong><%-G.STR(\'pcweb.chat.chatmemberlist.title.chat_member\')%></strong>\n    </div>\n    <div class="member_main">\n      <ul class="member_list">\n      </ul>\n    </div>\n    <div class="confirm_box">\n      <button class="btn_confirm" href="#"><span><%-G.STR(\'pcweb.chat.chatmemberlist.btn.confirm\')%></span></a>\n    </div>\n    <div class="deemed"></div>'
});
define("text!chat/templates/chattableMemberTemplate.html", [], function() {
    return '<img src="<%-thumbnail%>" class="profile" alt="" width="44" height="44">\n<span class="member_name"><%-name%></span>\n<a href="#" class="go_chat"><%-G.STR(\'pcweb.chat.chatmemberlist.label.one_to_one\')%></a>'
});
define("chat/views/chattableMemberView", ["jquery", "underscore", "marionette", "text!chat/templates/chattableMemberTemplate.html", "profile/controllers/profileOpener"], function(d, b, g, f, e) {
    var c = g.ItemView.extend({template: b.template(f),tagName: "li",triggers: {"click a.go_chat": "click:gochat"},events: {"click img.profile": function(h) {
                e.showProfile(this.bandNo, this.chattingUserModel.get("user_no"));
                return false
            }},initialize: function(h) {
            this.chattingUserModel = this.model;
            this.bandNo = h.bandNo
        },serializeData: function() {
            return d.extend(this.model.toJSON(), {thumbnail: this.chattingUserModel.getFaceThumbnail()})
        }});
    return c
});
define("chat/controllers/chattingOpener", ["jquery", "underscore", "marionette", "util/bandUtil", "util/popupUtil", "module/dimmedLayer", "globalize"], function(g, d, j, c, f, h, e) {
    var b = j.Controller.extend({openChatting: function(l, m) {
            var k = "band_chat_" + l;
            k = k.replace(/\-/g, "_");
            var n = {channelID: l};
            if (m) {
                n.withJoin = m
            }
            f.openGet({windowURL: "http://" + location.host + "/chat/chattingRoom",windowName: k,width: 470,height: 640,centerBrowser: 1,resizable: 1,params: n})
        },createChatting: function(k, n, m) {
            var l = {type: k.length === 1 ? "private" : "public",user_nos: d.pluck(k, "userNO").join(",")};
            if (!!m) {
                l.band_no = m
            }
            g.ajax({url: c.makeApi("https://api.band.us", "/v1.1/create_chat_channel"),data: l,success: d.bind(function(s) {
                    var o = this;
                    if (c.v1FormatErrorHandle(s, n)) {
                        return
                    }
                    var r = s.result_data;
                    if (r.channel && r.channel.buid) {
                        var p = k.length > 1 ? "pcweb.noui.js.confirm.chat_popup_open_confirm_message_plural" : "pcweb.noui.js.confirm.chat_popup_open_confirm_message_singular";
                        var w = {message: e.STR(p, k[0].name, k.length - 1),cancelBtnLabel: e.STR("pcweb.noui.js.confirm.chat_popup_open_confirm_cancelBtnLabel"),confirmBtnLabel: e.STR("pcweb.noui.js.confirm.chat_popup_open_confirm_confirmBtnLabel")};
                        if (r.message) {
                            w.message = r.message
                        }
                        var v = {confirm: function() {
                                o.openChatting(r.channel.buid)
                            },close: function() {
                                c.functionCall(n, "success", r)
                            }};
                        h.showConfirm(w, v)
                    }
                }, this)})
        },inviteUsers: function(k, m, n) {
            var l = {channel_id: k,user_nos: m.join(",")};
            g.ajax({url: c.makeApi("https://api.band.us", "/v1.1/invite_chat_users"),data: l,success: d.bind(function(o) {
                    if (c.v1FormatErrorHandle(o, n)) {
                        return
                    }
                    c.functionCall(n, "success", o.result_data);
                    if (o.result_data.message) {
                        alert(o.result_data.message)
                    }
                }, this)})
        }});
    return new b()
});
define("chat/views/chattableMemberListView", ["jquery", "underscore", "marionette", "text!chat/templates/chattableMemberListTemplate.html", "chat/views/chattableMemberView", "chat/controllers/chattingOpener"], function(f, d, h, e, c, b) {
    var g = h.CompositeView.extend({template: d.template(e),className: "member_list",itemView: c,itemViewContainer: "ul.member_list",events: {"click .btn_confirm": function(j) {
                this.close();
                return false
            }},itemEvents: {"click:gochat": function(j, m, k) {
                var n = m.model;
                var l = [{userNO: n.get("user_no"),name: n.get("name")}];
                b.createChatting(l, null, this.channel.get("band_no"))
            }},initialize: function(j) {
            this.channel = j.channel
        },buildItemView: function(k, j, l) {
            return new j({model: k,bandNo: this.channel.get("band_no")})
        }});
    return g
});
define("text!chat/templates/chattingInvitationLayerTemplate.html", [], function() {
    return '      <div class="status_bar">\n        <strong><%-G.STR(\'pcweb.chat.chatinvitation.title.select_member\')%></strong>\n\t\t<div class="pop_form">\n           <div class="band_select _custom_selector_wrap">\n            <a href="#" class="selected_name _custom_selector_selected">&nbsp;</a>\n            <ul class="band_list _custom_selector_list_wrap" style="display:none">\n            </ul>\n          </div>\n          <div class="member_search">\n          \t<input type="text" id="search_input" name="search_input" placeholder="<%-G.STR(\'pcweb.chat.chatinvitation.placeholder.search_member\')%>" class="search_input">\n            <button class="search_x"><img src="<%-resBaseUrl%>/images/chat/input_x.gif" alt="" width="17" height="17" /></button>\n            <button type="submit" class="search_submit"><img src="<%-resBaseUrl%>/images/chat/search_submit.png" alt="" width="18" height="18" /></button>\n          </div>\n        </div>\n      </div>\n      <div class="chat_layer_main">\n        <form method="post" action="#">\n          <div class="member_main">\n          \t<div class="_member_list_wrap">\n          \t</div>\n            \n\t\t\t\n          </div>\n\t\t  <div class="_selected_member_wrap">\n\t\t  </div>\n          <div class="confirm_box">\n            <button type="button" class="btn_cancel"><span><%-G.STR(\'pcweb.chat.chatinvitation.btn.cancel\')%></span></button>\n            <button type="sutmit" class="btn_confirm"><span><%-G.STR(\'pcweb.chat.chatinvitation.btn.invite\')%></span></button>\n          </div>\n        </form>\n        <div class="dim"></div>\n      </div>'
});
define("band/controllers/bandCollectionFetcher", ["jquery", "underscore", "marionette", "band/collections/bandCollection", "util/bandUtil"], function(f, c, g, d, b) {
    var e = g.Controller.extend({initialize: function() {
        },createSharableBandCollection: function(h, j) {
            this._createBandCollectionByFilter("sharing_contents", f.extend({}, j, {success: function(l) {
                    h = h || -1;
                    var k = f.isNumeric(h) ? h : h.getBandNo();
                    l.remove(l.findWhere({band_no: k}));
                    b.functionCall(j, "success", l)
                }}))
        },createMemberInvitableBandCollection: function(h, j) {
            this._createBandCollectionByFilter("invite_member", f.extend({}, j, {success: function(l) {
                    h = h || -1;
                    var k = f.isNumeric(h) ? h : h.getBandNo();
                    l.remove(l.findWhere({band_no: k}));
                    b.functionCall(j, "success", l)
                }}))
        },createChatInvitableBandCollection: function(h) {
            this._createBandCollectionByFilter("invite_chat", f.extend({}, h, {success: function(j) {
                    b.functionCall(h, "success", j)
                }}))
        },_createBandCollectionByFilter: function(h, j) {
            var k = {filter: h};
            f.ajax({url: b.makeApi("https://api.band.us", "/v1.1/get_band_list_with_filter"),data: k,success: function(l) {
                    if (b.v1FormatErrorHandle(l, j)) {
                        return
                    }
                    b.functionCall(j, "success", new d(l.result_data))
                }})
        }});
    return new e()
});
define("member/collections/memberCollection", ["jquery", "underscore", "backbone", "member/models/memberModel", "util/bandUtil"], function(f, d, g, c, b) {
    var e = g.Collection.extend({_COUNT_PER_PAGE: 40,defaults: {},model: c,url: b.makeApi("https://api.band.us", "/api/m2/get_band_members.json"),comparator: function(h) {
            return h.get("name")
        },initialize: function(j, h) {
            this.band = h && h.band || "";
            this._hasMore = true;
            this._bandNo = undefined
        },getBandNo: function() {
            return this._bandNo
        },simpleFetch: function(h) {
            this._fetch(h)
        },fetchNext: function(h) {
            if (!this.hasMore()) {
                return
            }
            this._fetch(h)
        },fetchAll: function(h) {
            this._fetch(h, true)
        },_fetch: function(j, m) {
            if (this._isLoad) {
                return
            }
            this._isLoad = true;
            var l = {band_id: this.band.get("band_id")};
            if (!m) {
                d.extend(l, {member_offset: this.length,member_count: this._COUNT_PER_PAGE})
            }
            var h = this;
            var k = this;
            this.fetch({data: l,add: true,update: true,remove: false,success: function(p, n, o) {
                    if (m || !n.members.length || n.members.length < h._COUNT_PER_PAGE) {
                        h._hasMore = false
                    }
                    h = null;
                    b.functionCall(j, "success", p, n, o)
                },error: function(p, n, o) {
                    b.functionCall(j, "error", p, n, o)
                },complete: function() {
                    k._isLoad = false;
                    k = null
                }})
        },getTotalMemberCount: function() {
            return this._totalMemberCount
        },hasMore: function() {
            return this._hasMore
        },hasMoreForCollectionFetcher: function() {
            return this._isMoreMeber
        },parse: function(h) {
            if (h.code) {
                switch (h.code) {
                    case 1001:
                        alert(h.localizedDescription);
                        location.href = "/";
                        break
                }
                return false
            }
            this._totalMemberCount = h.member_total_count;
            return h.members
        }});
    return e
});
define("member/collections/memberCollectionFetcher", ["jquery", "underscore", "marionette", "member/collections/memberCollection", "util/bandUtil"], function(f, d, g, e, c) {
    var b = g.Controller.extend({initialize: function() {
        },createDelegateLeaderMemberCollection: function(j, h) {
            this._createMemberCollectionByFilter(j, "delegate_leader", f.extend({}, h, {success: function(k) {
                    c.functionCall(h, "success", k)
                }}))
        },createKickMemberMemberCollection: function(j, h) {
            this._createMemberCollectionByFilter(j, "kick_member", f.extend({}, h, {success: function(k) {
                    c.functionCall(h, "success", k)
                }}))
        },createInviteChatMemberCollection: function(j, h) {
            this._createMemberCollectionByFilter(j, "invite_chat", f.extend({}, h, {success: function(k) {
                    c.functionCall(h, "success", k)
                }}))
        },_createMemberCollectionByFilter: function(l, h, j) {
            var k = {band_no: l,filter: h};
            f.ajax({url: c.makeApi("https://api.band.us", "/v1.1/get_members_of_band_with_filter"),data: k,success: function(n) {
                    if (c.v1FormatErrorHandle(n, j)) {
                        return
                    }
                    var m = new e(n.result_data.members);
                    m._totalMemberCount = n.result_data.member_count;
                    m._isMoreMeber = n.result_data.is_more_member;
                    m._bandNo = l;
                    c.functionCall(j, "success", m)
                }})
        }});
    return new b()
});
define("member/collections/searchMemberCollection", ["jquery", "underscore", "backbone", "member/models/memberModel", "util/bandUtil"], function(e, d, g, c, b) {
    var f = g.Collection.extend({model: c,url: b.makeApi("https://api.band.us", "/v1/search_member"),comparator: function(h) {
            return h.get("name")
        },initialize: function(j, h) {
            this.bandNo = h && h.bandNo || "";
            this.query = ""
        },simpleFetch: function(h) {
            this._fetch(h)
        },_fetch: function(j, l) {
            if (this._isLoad) {
                return
            }
            this._isLoad = true;
            var k = {band_no: this.bandNo,query: this.query};
            var h = this;
            this.fetch({data: k,add: true,update: true,remove: true,success: function(o, n, m) {
                    if (n.result_code == 1) {
                        b.functionCall(j, "success", new f(n.result_data.members), n, m);
                        return
                    }
                    if (n.result_data && n.result_data.message) {
                        alert(n.result_data.message)
                    }
                    b.functionCall(j, "error", new f(n.result_data.members), n, m)
                },error: function() {
                    alert(G.STR("pcweb.noui.js.alert.unknown_error"))
                },complete: function() {
                    h._isLoad = false;
                    h = null
                }})
        },getTotalMemberCount: function() {
            return this._totalMemberCount
        },parse: function(h) {
            if (h.code) {
                switch (h.code) {
                    case 1001:
                        alert(h.localizedDescription);
                        location.href = "/";
                        break
                }
                return false
            }
            this._totalMemberCount = h.result_data.member_total_count;
            return h.members
        },setQuery: function(h) {
            this.query = h
        }});
    return f
});
define("text!chat/templates/selectableMemberTemplate.html", [], function() {
    return '<img src="<%-thumbnail%>" class="profile" alt="" width="44" height="44">\n<span class="member_name"><%-name%></span>\n<span class="check_wrap">\n\t<input type="checkbox" id="check_member_<%-cid%>" name="check_member_<%-cid%>" value="">\n\t<label class="check_member" for="check_member_<%-cid%>">\n\t\t<span class="checkbox_fake"></span>1:1\n\t</label>\n</span>'
});
define("chat/views/selectableMemberView", ["jquery", "underscore", "marionette", "text!chat/templates/selectableMemberTemplate.html", "profile/controllers/profileOpener"], function(d, c, g, b, f) {
    var e = g.ItemView.extend({template: c.template(b),tagName: "li",events: {"change .check_wrap input": function(h) {
                var j = this.ui.checkbox.is(":checked");
                if (j) {
                    this.trigger("selected")
                } else {
                    this.trigger("unselected")
                }
            },"click img.profile": function(h) {
                f.showProfile(this.bandNo, this.memberModel.get("user_no"));
                return false
            }},ui: {checkbox: ".check_wrap input"},initialize: function(h) {
            this.selected = h.selected;
            this.bandNo = h.bandNo;
            this.memberModel = this.model
        },select: function() {
            this.ui.checkbox.prop("checked", true)
        },unSelect: function() {
            this.ui.checkbox.prop("checked", false)
        },serializeData: function() {
            return d.extend(this.memberModel.toJSON(), {thumbnail: this.memberModel.getFaceThumbnail(),cid: this.memberModel.cid})
        },onRender: function() {
            if (this.selected) {
                this.select()
            }
        }});
    return e
});
define("chat/views/selectableMemberListView", ["jquery", "underscore", "marionette", "chat/views/selectableMemberView"], function(c, b, f, e) {
    var d = f.CollectionView.extend({_RENDER_USER_SIZE: 30,itemView: e,itemViewOptions: function(h, g) {
            var j = false;
            if (this.selectedMemberCollection) {
                j = this.selectedMemberCollection.get(h.get("id")) !== undefined
            }
            return {bandNo: this.remainedMemberCollection._bandNo,selected: j}
        },className: "member_list",tagName: "ul",initialize: function(g) {
            this.selectedMemberCollection = g.selectedMemberCollection;
            this.remainedMemberCollection = g.fullMemberCollection;
            this.listenTo(this.selectedMemberCollection, "remove", function(j, k, h) {
                this.unSelect(j)
            }, this)
        },_findView: function(j) {
            var g = this.collection.findWhere({user_no: j.get("user_no")});
            var h = g ? this.children.findByModel(g) : null;
            return h
        },select: function(h) {
            var g = this._findView(h);
            if (g) {
                g.select()
            }
        },unSelect: function(h) {
            var g = this._findView(h);
            if (g) {
                g.unSelect()
            }
        },renderNextMore: function() {
            for (var h = 0; h < this._RENDER_USER_SIZE && this.remainedMemberCollection.length > 0; h++) {
                var g = this.remainedMemberCollection.shift();
                this.collection.add(g)
            }
            return this.remainedMemberCollection.length > 0
        },onRender: function() {
            this.renderNextMore()
        },onClose: function() {
            this.remainedMemberCollection.reset([]);
            delete this.selectedMemberCollection;
            delete this.remainedMemberCollection
        }});
    return d
});
define("text!chat/templates/selectedMemberListTemplate.html", [], function() {
    return '<button class="btn_preview">\n\t<img src="<%-resBaseUrl%>/images/chat/pop_member_preview.gif" width="40" height="75">\n</button>\n<div class="profile_list_wrap">\n\t<ul style="left:0px">\n\t</ul>\n</div>\n<button class="btn_next">\n\t<img src="<%-resBaseUrl%>/images/chat/pop_member_next.gif" width="40" height="75">\n</button>\n'
});
define("text!chat/templates/selectedMemberTemplate.html", [], function() {
    return '<img src="<%-thumbnail%>" alt="<%-name%>" width="44" height="44">\n<a href="#" class="uncheck">\n\t<img src="<%-resBaseUrl%>/images/chat/pop_close.png" width="20" height="21">\n</a>'
});
define("chat/views/selectedMemberView", ["jquery", "underscore", "marionette", "text!chat/templates/selectedMemberTemplate.html"], function(e, b, f, d) {
    var c = f.ItemView.extend({template: b.template(d),tagName: "li",triggers: {"click a.uncheck": "click:uncheck"},initialize: function(g) {
            this.memberModel = this.model
        },serializeData: function() {
            return e.extend(this.memberModel.toJSON(), {thumbnail: this.memberModel.getFaceThumbnail()})
        }});
    return c
});
define("chat/views/selectedMemberListView", ["jquery", "underscore", "marionette", "text!chat/templates/selectedMemberListTemplate.html", "chat/views/selectedMemberView"], function(e, d, g, f, c) {
    var b = g.CompositeView.extend({template: d.template(f),itemView: c,itemViewContainer: "ul",className: "selected_member",events: {"click .btn_preview": function(h) {
                if (this.ui.prevBtn.hasClass("on")) {
                    this.movePrev()
                }
                return false
            },"click .btn_next": function(h) {
                if (this.ui.nextBtn.hasClass("on")) {
                    this.moveNext()
                }
                return false
            }},ui: {ulWrap: "div.profile_list_wrap",listWrap: "ul",prevBtn: ".btn_preview",nextBtn: ".btn_next"},initialize: function(h) {
            this.on("itemview:click:uncheck", function(k, j) {
                this.collection.remove(k.model)
            }, this)
        },movePrev: function(j) {
            if (!e.isNumeric(j)) {
                j = 1
            }
            var h = this;
            this.ui.listWrap.animate({left: "+=" + (this._getItemWidth() * j) + "px"}, 100, function() {
                h._changeUI();
                h = null
            })
        },moveNext: function(j) {
            if (!e.isNumeric(j)) {
                j = 1
            }
            var h = this;
            this.ui.listWrap.animate({left: "-=" + (this._getItemWidth() * j) + "px"}, 100, function() {
                h._changeUI();
                h = null
            })
        },moveLast: function() {
            var h = Math.max(0, this.children.length - this._getFirstUIIndex() - this._getOneLineSize());
            this.moveNext(h);
            this._changeUI()
        },_changeUI: function() {
            if (!this.ui.listWrap.css || this.children.length === 0) {
                return
            }
            if (this.ui.listWrap.css("left") === "0px") {
                this.ui.prevBtn.removeClass("on")
            } else {
                this.ui.prevBtn.addClass("on")
            }
            if (this.children.length > 0 && this._getFirstUIIndex() + this._getOneLineSize() < this.children.length) {
                this.ui.nextBtn.addClass("on")
            } else {
                this.ui.nextBtn.removeClass("on")
            }
            this.readjustSize()
        },_getFirstUIIndex: function() {
            return parseInt(parseInt(this.ui.listWrap.css("left"), 10) * -1 / this._getItemWidth(), 10)
        },_getItemWidth: function() {
            if (!this.children.first().$el) {
                return 1
            }
            return this.children.first().$el.outerWidth(true)
        },_getOneLineSize: function() {
            return parseInt(this.ui.ulWrap.width() / this._getItemWidth(), 10)
        },readjustSize: function() {
            this.ui.listWrap.css("width", this.collection.length * this._getItemWidth())
        },_attachEventListener: function() {
            if (!this.fnOnResize) {
                this.fnOnResize = d.bind(function() {
                    this._changeUI()
                }, this)
            }
            e(window).on("resize", this.fnOnResize)
        },_detachEventListener: function() {
            if (this.fnOnResize) {
                e(window).off("resize", this.fnOnResize)
            }
            delete this.fnOnResize
        },onRender: function() {
            this.$el.hide();
            this._attachEventListener()
        },onAfterItemAdded: function() {
            this.$el.show();
            this._changeUI();
            this.moveLast()
        },onItemRemoved: function() {
            if (this.children.length == 0) {
                this.$el.hide()
            } else {
                if (this.children.length <= this._getFirstUIIndex()) {
                    this.movePrev(Math.min(this._getOneLineSize(), this.children.length))
                }
                this._changeUI()
            }
        },onBeforeClose: function() {
            this._detachEventListener()
        }});
    return b
});
define("text!util/customSelectorTemplate.html", [], function() {
    return '<div class="select_wrap _custom_selector_wrap">\n\t<button type="button" class="selected_name _custom_selector_selected"></button>\n\t<ul class="radio_list _custom_selector_list_wrap" style="display:none">\n\t</ul>\n</div>'
});
define("text!util/customSelectorItemListTemplate.html", [], function() {
    return '<% for(var i = 0 ; i < itemList.length; i++ ) { %>\n\t<% var value = itemList[i].value; %>\n\t<% var labelID = selectorName + "_" + i; %>\n\t<% var label = itemList[i].label; %>\n\t<% var selectedLabel = itemList[i].selectedLabel; %>\t\n\t<li class="_custom_selector_item" data-value="<%-value%>" <%if(selectedLabel){%>data-selected_label="<%-selectedLabel%>"<%}%>>\n\t\t<label for="<%-labelID%>"><%-label%></label>\n\t\t<input type="radio" id="<%-labelID%>" value="" name="<%-selectorName%>">\n\t</li>\n<% } %>'
});
define("util/customSelector", ["jquery", "underscore", "marionette", "text!util/customSelectorTemplate.html", "text!util/customSelectorItemListTemplate.html", "libs/jquery/external/jquery.scrollTo"], function(e, c, g, b, f) {
    var d = g.Controller.extend({initialize: function(h) {
            h = h || {};
            this.wrapToggleClassName = h.wrapToggleClassName || "visible";
            this.selectorName = h.selectorName || "_selector_" + parseInt(Math.random() * 1000000000000000, 10);
            this.itemList = h.itemList || null;
            this.maxCountForLayer = h.maxCountForLayer || null;
            this.openDirection = h.openDirection || "down";
            this._create(h.el)
        },reset: function(j) {
            if (j) {
                if ("length" in j || "itemList" in j) {
                    this.selectorName = j.selectorName || this.selectorName;
                    var k = {selectorName: this.selectorName,itemList: j.itemList || j};
                    var h = c.template(f)(k);
                    this.listWrap.html(h)
                }
            }
            this.select(this.listWrap.find("._custom_selector_item:first").data("value"))
        },select: function(j) {
            var h = this.listWrap.find("[data-value='" + j + "']");
            if (h.length > 0) {
                this._setSelectedLabel(h);
                this._selectedItem = h;
                this._focusedItem = this._selectedItem
            }
        },val: function(h) {
            if (h) {
                this.select(h)
            } else {
                return this.anchorSelected.data("value")
            }
        },isEnabled: function() {
            return !this.wrap.hasClass("disabled")
        },enable: function(h) {
            this.wrap.toggleClass("disabled", !h)
        },disable: function(h) {
            this.enable(!h)
        },selected: function() {
            return this._selectedItem
        },hideLayer: function() {
            this.listWrap.hide();
            this.wrap.removeClass(this.wrapToggleClassName);
            this.trigger("hide")
        },showLayer: function() {
            this.listWrap.show();
            this.wrap.addClass(this.wrapToggleClassName);
            this.listWrap.scrollTo(this._focusedItem);
            this.trigger("show");
            if (this.maxCountForLayer) {
                this.listWrap.height(this.listWrap.find("._custom_selector_item:first").outerHeight(true) * Math.min(this.listWrap.find("._custom_selector_item").length, this.maxCountForLayer))
            }
            if (this.openDirection == "up") {
                this.listWrap.css({top: "auto",bottom: (this.anchorSelected.outerHeight(true) - 1) + "px"})
            }
        },getElement: function() {
            return this.wrap
        },scrollTo: function(j) {
            if (typeof j == "number") {
                var h = this.listWrap.find("._custom_selector_item:nth-child(" + (j + 1) + ")");
                this._focusedItem = h
            } else {
                var h = this.listWrap.find("._custom_selector_item[data-value='" + j + "']");
                this._focusedItem = h
            }
        },_create: function(h) {
            if (!h || !h.length || h.length < 1) {
                h = e(c.template(b)())
            }
            this._createOneSelector(e(h[0]))
        },_setSelectedLabel: function(h) {
            this.listWrap.find("li").removeClass("selected");
            h.addClass("selected");
            var j = {oldValue: this.anchorSelected.data("value"),oldName: this.anchorSelected.text(),newValue: h.data("value"),newName: h.data("selected_label") || h.text(),el: h};
            if (this.selectedOutter) {
                this.anchorSelected.html(e(this.selectedOutter).text(j.newName))
            } else {
                this.anchorSelected.text(j.newName)
            }
            this.anchorSelected.data("value", j.newValue);
            return j
        },_createOneSelector: function(h) {
            this.wrap = h.hasClass("_custom_selector_wrap") ? h : h.find("._custom_selector_wrap");
            if (this.wrap.find("._custom_selector_selected,._custom_selector_list_wrap").length === 0) {
                this.wrap.html(e(c.template(b)()).html())
            }
            this.listWrap = h.find("._custom_selector_list_wrap");
            this.anchorSelected = h.find("._custom_selector_selected");
            this.selectedOutter = this.anchorSelected.find("> :nth-child(1)");
            this.selectedOutter = this.selectedOutter.length > 0 ? this.selectedOutter : null;
            h.on("click", "._custom_selector_item", c.bind(function(m) {
                m.stopPropagation();
                m.preventDefault();
                var k = e(m.currentTarget);
                var l = this._setSelectedLabel(k);
                this.hideLayer();
                var j = this._selectedItem != k;
                this._selectedItem = k;
                this._focusedItem = this._selectedItem;
                if (j) {
                    this.trigger("change", l)
                }
            }, this));
            h.find("._custom_selector_selected").click(c.bind(function(j) {
                j.stopPropagation();
                j.preventDefault();
                if (!this.isEnabled()) {
                    return
                }
                if (this.listWrap.is(":visible")) {
                    this.hideLayer()
                } else {
                    this.showLayer()
                }
            }, this));
            this.reset(this.itemList);
            this.wrap.on("remove", c.bind(function() {
                this.destroy()
            }, this));
            this._attachEventListener()
        },_attachEventListener: function() {
            this._detachEventListener();
            if (!this.wfBodyClickEventListener) {
                this.wfBodyClickEventListener = c.bind(function(h) {
                    var j = e(h.target);
                    if (j.closest(this.wrap).length === 0) {
                        this.hideLayer()
                    }
                }, this);
                e(document).on("mousedown", this.wfBodyClickEventListener)
            }
        },_detachEventListener: function() {
            if (this.wfBodyClickEventListener) {
                e(document).off("mousedown", this.wfBodyClickEventListener)
            }
            this.wfBodyClickEventListener = null
        },destroy: function() {
            this._detachEventListener();
            this.off()
        }});
    return d
});
define("chat/views/chattingInvitationLayerView", ["jquery", "underscore", "marionette", "text!chat/templates/chattingInvitationLayerTemplate.html", "band/controllers/bandCollectionFetcher", "member/collections/memberCollectionFetcher", "member/collections/memberCollection", "member/collections/searchMemberCollection", "chat/views/selectableMemberListView", "chat/views/selectedMemberListView", "chat/controllers/chattingOpener", "util/customSelector", "loginUserData", "localize/reslang", "libs/jquery/external/placeholder", "libs/jquery/external/jquery.mCustomScrollbar"], function(h, m, l, g, r, j, c, f, p, b, o, d, k, n) {
    var e = l.Layout.extend({template: m.template(g),className: function() {
            if (this._isChannelSpecified()) {
                return "chat_pop member_search"
            } else {
                return "chat_pop type_layer"
            }
        },events: {"click .btn_confirm": function(s) {
                this._startChatting();
                return false
            },"keydown input.search_input": function(s) {
                if (s.keyCode == 13) {
                    this._renderMemberListBySearch(this.ui.searchInput.val());
                    return false
                }
            },"keyup input.search_input": function(s) {
                this.toggleDeleteBtn()
            },"paste input.search_input": function(s) {
                setTimeout(m.bind(function() {
                    this.toggleDeleteBtn()
                }, this), 100)
            },"click button.search_x": function(s) {
                this.ui.searchInput.val("");
                this.toggleDeleteBtn();
                return false
            },"click .search_submit": function(s) {
                this._renderMemberListBySearch(this.ui.searchInput.val());
                return false
            }},triggers: {"click button.btn_cancel": "cancel"},regions: {memberListWrap: "div._member_list_wrap",selectedMemberWrap: "div._selected_member_wrap"},ui: {bandSelectWrap: "div.band_select",bandListUl: "div.band_select ul.band_list",innerDimmed: "div.dim",searchInput: "input.search_input",searchBtn: "input.search_submit",inputDeleteBtn: "button.search_x",selectedCount: "button.btn_confirm span:first",memberScrollObject: "div.member_main"},initialize: function(s) {
            this.selectedMemberCollection = new c([]);
            this.listenTo(this.selectedMemberCollection, "add", function() {
                this._chageInviteesCountUI()
            }, this);
            this.listenTo(this.selectedMemberCollection, "remove", function() {
                this._chageInviteesCountUI()
            }, this);
            this.listenTo(this.selectedMemberCollection, "reset", function() {
                this._chageInviteesCountUI()
            }, this);
            this.channel = s.channel;
            this.chattingUserCollection = s.chattingUserCollection
        },_startChatting: function() {
            if (this.selectedMemberCollection.length === 0) {
                return false
            }
            var s = this.channel && !this.channel.isPrivate();
            if (s) {
                this._inviteUsersToChattingRoom()
            } else {
                this._createChattingRoom()
            }
        },_inviteUsersToChattingRoom: function() {
            var s = this.selectedMemberCollection.pluck("user_no");
            o.inviteUsers(this.channel.get("buid"), s, {success: m.bind(function(v) {
                    this.trigger("complete")
                }, this)})
        },_createChattingRoom: function() {
            var s = this.selectedMemberCollection.map(function(x) {
                return {userNO: x.get("user_no"),name: x.get("name")}
            }), w = k.getBand(this.bandSelector.val());
            if (this.chattingUserCollection) {
                var v = this.chattingUserCollection.getReadyUsers().exclude(k.getUser().getUserNo()).map(function(x) {
                    return {userNO: x.get("user_no"),name: x.get("name")}
                });
                s = s.concat(v);
                s = m.uniq(s, false, function(x) {
                    return x.userNO
                });
                if (s.length === 1) {
                    this.trigger("complete");
                    return
                }
            }
            o.createChatting(s, {success: m.bind(function(x) {
                    this.trigger("complete")
                }, this)}, !!w ? w.get("band_no") : null)
        },_createBandSelector: function() {
            this.bandSelector = new d({el: this.ui.bandSelectWrap});
            this.bandSelector.on("show", function() {
                this.ui.bandSelectWrap.addClass("on");
                this.ui.bandListUl.addClass("on");
                this.ui.innerDimmed.show()
            }, this);
            this.bandSelector.on("hide", function() {
                this.ui.bandSelectWrap.removeClass("on");
                this.ui.bandListUl.removeClass("on");
                this.ui.innerDimmed.hide()
            }, this);
            this.bandSelector.on("change", function(s) {
                this.selectedMemberCollection.reset([]);
                this._renderMemberListByBand(s.newValue)
            }, this)
        },toggleDeleteBtn: function() {
            if (h.trim(this.ui.searchInput.val()).length > 0) {
                this.ui.inputDeleteBtn.css("z-index", "1");
                this.ui.inputDeleteBtn.show();
                this.ui.searchBtn.addClass("on")
            } else {
                this.ui.inputDeleteBtn.css("z-index", "-1");
                this.ui.inputDeleteBtn.hide();
                this.ui.searchBtn.removeClass("on")
            }
        },_chageInviteesCountUI: function() {
            this.ui.selectedCount.text(n.STR("pcweb.chat.chatinvitation.label.invite_count"));
            if (this.selectedMemberCollection.length > 0) {
                this.ui.selectedCount.text(this.ui.selectedCount.text() + " (" + this.selectedMemberCollection.length + ")")
            }
        },_renderBandSelector: function() {
            this.ui.bandListUl.remove("li");
            r.createChatInvitableBandCollection({success: m.bind(function(w) {
                    var s = w.filter(m.bind(function(x) {
                        if (this._isBandSpecified()) {
                            return x.get("band_no") == this.channel.get("band_no")
                        } else {
                            return true
                        }
                    }, this));
                    var v = m.map(s, function(x) {
                        return {value: x.get("band_no"),label: x.get("name"),selectedLabel: x.get("name")}
                    });
                    this.bandSelector.reset(v);
                    if (this._isBandSpecified()) {
                        this.bandSelector.disable(true)
                    }
                    this._renderMemberListByBand(this.bandSelector.val())
                }, this)})
        },_renderMemberListByBand: function(s) {
            j.createInviteChatMemberCollection(s, {success: m.bind(function(w) {
                    if (this.chattingUserCollection) {
                        var v = w.filter(m.bind(function(x) {
                            return this.chattingUserCollection.getReadyUsers().some(function(N) {
                                return N.get("user_no") == x.get("user_no")
                            })
                        }, this));
                        w.remove(v)
                    }
                    this._renderMemberList(w);
                    this.ui.searchInput.val("")
                }, this)})
        },_renderMemberListBySearch: function(s) {
            var v = new f([], {bandNo: this.bandSelector.val()});
            v.setQuery(s);
            v.simpleFetch({success: m.bind(function(x) {
                    if (this.chattingUserCollection) {
                        var w = x.filter(m.bind(function(N) {
                            return this.chattingUserCollection.getReadyUsers().some(function(O) {
                                return O.get("user_no") == N.get("user_no")
                            })
                        }, this));
                        x.remove(w)
                    }
                    this._renderMemberList(x)
                }, this)})
        },_renderMemberList: function(s) {
            this.ui.memberScrollObject.scrollTop(0);
            var v = new p({collection: new c(),selectedMemberCollection: this.selectedMemberCollection,fullMemberCollection: s});
            v.on("itemview:selected", function(w) {
                this.selectedMemberCollection.add(w.model)
            }, this);
            v.on("itemview:unselected", function(w) {
                this.selectedMemberCollection.remove(w.model)
            }, this);
            this.memberListWrap.show(v)
        },_renderselectedMemberWrap: function() {
            var s = new b({collection: this.selectedMemberCollection});
            this.selectedMemberWrap.show(s)
        },_createLayerScroll: function() {
            if (this._isCreatedLayerScroll) {
                return
            }
            this.ui.memberScrollObject.mCustomScrollbar({scrollButtons: {enable: true},scrollInertia: 150,advanced: {updateOnContentResize: true,autoScrollOnFocus: false},callbacks: {onTotalScrollOffset: 50,onTotalScroll: m.bind(function() {
                        var s = this.ui.memberScrollObject.scrollTop() + this.ui.memberScrollObject.height() + 50 >= this.ui.memberScrollObject.prop("scrollHeight");
                        if (s && this.memberListWrap.currentView && !this.memberListWrap.currentView.isClosed) {
                            this.memberListWrap.currentView.renderNextMore()
                        }
                    }, this)}});
            this._isCreatedLayerScroll = true
        },_isChannelSpecified: function() {
            return !!this.options.channel
        },_isBandSpecified: function() {
            return this._isChannelSpecified() && !!this.options.channel.get("band_no")
        },onRender: function() {
            this.ui.searchInput.placeholder();
            this._createBandSelector();
            this._renderBandSelector();
            this._renderselectedMemberWrap();
            this.toggleDeleteBtn();
            this._createLayerScroll()
        },onClose: function() {
            this.selectedMemberCollection.reset([]);
            delete this.selectedMemberCollection;
            this.ui.memberScrollObject.mCustomScrollbar("destroy")
        }});
    return e
});
define("module/cssManager", ["jquery", "underscore", "marionette"], function(d, c, e) {
    var b = e.Controller.extend({_CSS_PATH_PREFIX: resBaseUrl + "/css/",initialize: function() {
            this.headTag = d("head")
        },useCss: function(h) {
            if (!h || h.length < 1) {
                return
            }
            var g = [];
            var l = this.headTag.find("link[rel='stylesheet']");
            for (var j = 0; j < l.length; j++) {
                var k = new RegExp("^.*" + this._CSS_PATH_PREFIX.replace(/([\/\.])/g, "\\$1"));
                var f = l[j].href.replace(k, "").replace(/\?.*/, "");
                g.push(f);
                if (c.contains(h, f) == false) {
                    d(l[j]).remove()
                }
            }
            this.addCss(c.difference(h, g))
        },addCss: function(g) {
            if (typeof g == "string") {
                g = [g]
            }
            for (var h = 0; h < g.length; h++) {
                var j = g[h];
                var f = this._CSS_PATH_PREFIX + j;
                if (/http[s]?:\/\//.test(j)) {
                    f = j
                }
                f += "?_=" + window.version;
                if (document.createStyleSheet) {
                    cssCache = d(document.createStyleSheet(f))
                } else {
                    cssCache = d("<link>");
                    cssCache.attr("type", "text/css");
                    cssCache.attr("rel", "stylesheet");
                    cssCache.attr("href", f);
                    this.headTag.append(cssCache)
                }
            }
        }});
    return new b()
});
define("util/firefoxKeyEventHack", ["jquery", "libs/jquery/external/jquery.browser"], function(h, j) {
    if (j.mozilla) {
        var d = "_use_keyup_event";
        var b = 500;
        var l = null;
        var c = "";
        var e = null;
        var k = function() {
            if (c != e.val()) {
                e.keyup();
                e.trigger("update")
            }
            c = e.val()
        };
        var f = function() {
            if (l) {
                clearInterval(l);
                c = "";
                e = null
            }
        };
        var g = function(m) {
            f();
            e = m;
            l = setInterval(k, b)
        };
        h(document.body).on("focus", "textarea." + d + ",input." + d, function(m) {
            g(h(m.currentTarget))
        });
        h(document.body).on("blur", "textarea." + d + ",input." + d, function(m) {
            f()
        })
    }
    return h
});
define("applications/chattingRoomApp", ["jquery", "jqueryUi", "underscore", "marionette", "loginUserData", "localize/reslang", "chat/views/chattingRoomPopupView", "chat/views/chattableMemberListView", "chat/views/chattingInvitationLayerView", "chat/controllers/chattingController", "module/cssManager", "util/firefoxKeyEventHack"], function(f, m, r, n, l, s, p, e, d, j, k) {
    var c = new n.Application();
    c.addRegions({body: "body div._contents_body"});
    c.addInitializer(function(v) {
        k.useCss(["template.css", "post.css", "chat.css", "layer.css", "skin.css", "member.css", "external/jquery.mCustomScrollbar.css"]);
        l.readyForUser(r.bind(function(w) {
            this.channelID = v.channelID;
            this.withJoin = v.withJoin;
            this.connectToChannel()
        }, this))
    });
    c.connectToChannel = function() {
        this.chattingController = new j({channelID: this.channelID});
        if (this.withJoin) {
            this.chattingController.join({success: r.bind(function() {
                    this._doSyncChannel()
                }, this)})
        } else {
            this._doSyncChannel()
        }
    };
    c._doSyncChannel = function() {
        this._connectChatClient();
        this.chattingController.syncChannel({success: r.bind(function(v) {
                this._setDataToMemberProperty(v);
                if (this.chattingMessageCollection.length > 0) {
                    this.chattingController.sendAckToAPI(this.chattingMessageCollection.last().get("id"))
                }
                this.showChattingRoomPopupView()
            }, this)})
    };
    c._setDataToMemberProperty = function(v) {
        this.chattingMessageCollection = v.chattingMessageCollection;
        this.chattingUserCollection = v.chattingUserCollection;
        this.chattingChannel = v.channel;
        this.lastMessageNo = v.lastMessageNo
    };
    c._connectChatClient = function() {
        this.listenTo(this.chattingController, "fail:auth", function(v) {
            alert(s.STR("pcweb.noui.js.chat.alert_invalid_login_chat"));
            this.closeWindow()
        }, this);
        this.listenTo(this.chattingController, "error:fail:authorization", function(v) {
            alert(s.STR("pcweb.noui.js.chat.alert_invalid_chat_room"));
            this.closeWindow()
        }, this);
        this.listenToOnce(this.chattingController, "connected", function() {
            this.trigger("connected:channel")
        });
        this.chattingController.initChatRoom();
        f(window).on("beforeunload", r.bind(function() {
            try {
                this.chattingController.leaveChatroom();
                this.chattingController.disconnect()
            } catch (v) {
            }
        }, this))
    };
    c.showChattingRoomPopupView = function h() {
        var v = new p({chattingController: this.chattingController,chattingMessageCollection: this.chattingMessageCollection,chattingUserCollection: this.chattingUserCollection,chattingChannel: this.chattingChannel,lastMessageNo: this.lastMessageNo});
        v.on("click:memberlist", this.showMemberList, this);
        v.on("click:invite", this.showChattingInvitationLayer, this);
        v.on("quit:chatroom", this.closeWindow, this);
        v.on("disconnected", this.closeWindow, this);
        this.body.show(v)
    };
    c.showMemberList = function b() {
        var v = new e({collection: this.chattingUserCollection.getReadyUsers().exclude(l.getUser().getUserNo()),channel: this.chattingChannel});
        v.on("close", function() {
            this.showChattingRoomPopupView()
        }, this);
        this.body.show(v)
    };
    c.showChattingInvitationLayer = function o(v) {
        var w = new d({channel: this.chattingChannel,chattingUserCollection: v || this.chattingUserCollection});
        w.on("cancel complete", function() {
            this.chattingUserCollection.simpleFetch({success: r.bind(function() {
                    this.showChattingRoomPopupView()
                }, this)})
        }, this);
        this.body.show(w)
    };
    c.closeWindow = function g() {
        try {
            window.open("", "_self").close()
        } catch (v) {
        }
    };
    return c
});
