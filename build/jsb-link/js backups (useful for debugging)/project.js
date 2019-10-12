window.__require = function e(t, n, i) {
function o(r, c) {
if (!n[r]) {
if (!t[r]) {
var s = r.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + r + "'");
}
}
var u = n[r] = {
exports: {}
};
t[r][0].call(u.exports, function(e) {
return o(t[r][1][e] || e);
}, u, u.exports, e, t, n, i);
}
return n[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < i.length; r++) o(i[r]);
return o;
}({
AnimFunc: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "069bcLwjtNB/LYJrOEJbxa+", "AnimFunc");
cc.Class({
extends: cc.Component,
properties: {},
shake: function() {
cc.log("helpBtnShake");
var e = cc.rotateTo(.1, 15), t = cc.rotateTo(.1, 0), n = cc.rotateTo(.1, -15), i = cc.rotateTo(.12, 0), o = cc.repeat(cc.sequence(e, t, n, i), 3);
this.node.stopAllActions();
this.node.runAction(o);
}
});
cc._RF.pop();
}, {} ],
BaseBanner: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ff269NLg05HNbS8BbPVyYzL", "BaseBanner");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}();
var o = function() {
function e(t) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, e);
this.adUnitID = "";
this.isShow = 0;
this.finish = !1;
this.bannerAd = null;
this.isShowing = !1;
this.adUnitID = t;
this.init();
}
i(e, [ {
key: "init",
value: function() {
var e = this;
this.create(function(t) {
if (t) e.reLoad(); else {
e.finish = !0;
1 == e.isShow ? e.showBanner() : 2 == e.isShow && e.hideBanner();
}
});
}
}, {
key: "reLoad",
value: function() {
var e = this;
console.log(" reLoad ");
var t = setTimeout(function() {
e.init();
clearTimeout(t);
}, 8e3);
}
}, {
key: "getHeight",
value: function() {
return 0;
}
}, {
key: "showBanner",
value: function() {
cc.log(" show banner =====================");
this.isShow = 1;
if (this.finish && !this.isShowing) {
this.isShowing = !0;
this.bannerAd && this.show();
}
}
}, {
key: "hideBanner",
value: function() {
if (this.bannerAd) {
this.isShow = 2;
if (this.finish && this.isShowing) {
this.isShowing = !1;
this.hide();
}
}
}
}, {
key: "destroyBanner",
value: function() {
if (this.bannerAd) {
this.destroy();
this.isShow = 0;
this.finish = !1;
this.bannerAd = null;
}
}
}, {
key: "pause",
value: function() {
this.isShowing && this.hide();
}
}, {
key: "resume",
value: function() {
this.isShowing && this.show();
}
}, {
key: "show",
value: function() {}
}, {
key: "hide",
value: function() {}
}, {
key: "destroy",
value: function() {}
}, {
key: "create",
value: function(e) {}
} ]);
return e;
}();
n.default = o;
t.exports = n.default;
cc._RF.pop();
}, {} ],
BaseChannel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7a19bA5FGtPyoNylbdrLgkS", "BaseChannel");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}();
var o = function(e) {
return null == e || void 0 == e;
}, a = function() {
function e(t) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, e);
this.id = t;
}
i(e, [ {
key: "getRewardAd",
value: function() {
return this.rewardAd;
}
}, {
key: "getBannerAd",
value: function() {
return this.bannerAd;
}
}, {
key: "getShare",
value: function() {
return this.share;
}
}, {
key: "getID",
value: function() {
return this.id;
}
}, {
key: "isHaveNativeAd",
value: function() {
return void 0 != this.nativeAd;
}
}, {
key: "reportAdClick",
value: function(e) {
this.isHaveNativeAd() && this.nativeAd.reportAdClick(e);
}
}, {
key: "getBannerHeight",
value: function() {
return this.isHaveBannerAd() ? this.bannerAd.getHeight() : 0;
}
}, {
key: "nativeAddEventListener",
value: function(e, t, n) {
if (this.isHaveNativeAd()) {
cc.log(" nativeAddEventListener ", this.nativeAd);
this.nativeAd.addEventListener(e, t, n);
}
}
}, {
key: "reportAdShow",
value: function(e) {
this.isHaveNativeAd() && this.nativeAd.reportAdShow(e);
}
}, {
key: "getAdItems",
value: function() {
this.isHaveNativeAd() && this.nativeAd.getAdItems();
return [];
}
}, {
key: "isHaveBannerAd",
value: function() {
console.log("isHaveBannerAd" + this.bannerAd != void 0);
return void 0 != this.bannerAd;
}
}, {
key: "isHaveStore",
value: function() {
return void 0 != this.payMgr;
}
}, {
key: "isHaveShare",
value: function() {
return void 0 != this.share;
}
}, {
key: "initFinish",
value: function() {}
}, {
key: "init",
value: function() {}
}, {
key: "recorderStart",
value: function(e) {
console.log("recorderStart this.isHaveRecorder()  ", this.isHaveRecorder());
this.isHaveRecorder() && this.recorder.start(e);
}
}, {
key: "getRecorder",
value: function() {
return this.recorder;
}
}, {
key: "recorderStop",
value: function() {
var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
console.log("recorderStop this.isHaveRecorder()  ", this.isHaveRecorder(), e);
this.isHaveRecorder() && this.recorder.stop(e);
}
}, {
key: "addScript",
value: function(e) {
var t = document.getElementsByTagName("head")[0], n = document.createElement("script");
n.type = "text/javascript";
n.id = "" + this.id;
n.onload = this.initFinish.bind(this);
n.src = e;
n.onerror = function() {
cc.error(" load script error ", e);
};
t.appendChild(n);
}
}, {
key: "showStore",
value: function() {}
}, {
key: "freeRevive",
value: function() {}
}, {
key: "login",
value: function() {
this.loginMgr.login();
}
}, {
key: "logout",
value: function() {
this.loginMgr.logout();
}
}, {
key: "showBanner",
value: function() {
if (this.bannerAd) {
console.log("show banner");
this.bannerAd.showBanner();
} else console.log("no banner");
}
}, {
key: "hideBanner",
value: function() {
this.bannerAd && this.bannerAd.hideBanner();
}
}, {
key: "showShare",
value: function(e, t, n) {
this.isHaveShare() ? this.share.share(e, function(e) {
e && t();
}, n) : t();
}
}, {
key: "activeSkillLabel",
value: function() {
return "分享释放";
}
}, {
key: "openRewardAd",
value: function(e) {
this.isHaveRewardAd() ? this.rewardAd.show(function(t) {
e(!!t);
}) : e(!0);
}
}, {
key: "isHaveRewardAd",
value: function() {
return !o(this.rewardAd);
}
}, {
key: "getRewardAdState",
value: function() {
return this.rewardAd ? this.rewardAd.getState() : RewardADState.close;
}
}, {
key: "isHaveFollow",
value: function() {
return !1;
}
}, {
key: "isHaveRecorder",
value: function() {
return !o(this.recorder);
}
}, {
key: "showImage",
value: function(e) {}
}, {
key: "jumpToApp",
value: function(e) {}
}, {
key: "getAds",
value: function(e, t) {}
}, {
key: "isHaveInterstitalAd",
value: function() {
return !o(this.interstitialAd);
}
}, {
key: "showInterstitialAd",
value: function(e) {
this.isHaveInterstitalAd() && this.interstitialAd.show(e);
}
}, {
key: "intoLobby",
value: function() {}
}, {
key: "isHaveGameBox",
value: function() {
return !1;
}
}, {
key: "isHaveRank",
value: function() {
return !1;
}
}, {
key: "postMessage",
value: function(e) {}
}, {
key: "vibarate",
value: function() {
ShakeManager.instance().getFlag() && this.vibrateShort();
}
}, {
key: "vibrateShort",
value: function() {}
}, {
key: "createGameClubButton",
value: function() {}
}, {
key: "hideGameClubButton",
value: function() {}
}, {
key: "showGameClubButton",
value: function() {}
} ]);
return e;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {} ],
BaseNativeAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1f80ed8vNdKa7XJYupJoJCU", "BaseNativeAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../event/EventDispatcher"));
var a = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
i(t, [ {
key: "getAdItems",
value: function() {
return this.adItems;
}
} ]);
function t(e) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var n = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
n.adUnitID = "";
n.nativeAd = null;
n.adItems = [];
n.adItems = [];
n.adUnitID = e;
n.init();
return n;
}
i(t, [ {
key: "init",
value: function() {
this.create(function(e) {
console.log(" BaesNativeAd init err ", e);
});
}
}, {
key: "reLoad",
value: function() {
console.log(" reLoad ");
}
}, {
key: "reportAdClick",
value: function(e) {}
}, {
key: "reportAdShow",
value: function(e) {}
}, {
key: "destroyNative",
value: function() {
if (this.nativeAd) {
this.destroy();
this.nativeAd = null;
}
}
}, {
key: "destroy",
value: function() {}
}, {
key: "create",
value: function(e) {}
} ]);
return t;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {
"../event/EventDispatcher": "EventDispatcher"
} ],
BaseRecorder: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "187fdTAIrRItZpYVC2jjbGW", "BaseRecorder");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i, o, a = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}();
function r(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var c = n.RecoderState = (o = i = function e() {
r(this, e);
}, i.CLOSE = 0, i.OPEN = 1, o), s = function() {
function e() {
r(this, e);
this.videoPath = null;
this.state = c.CLOSE;
}
a(e, [ {
key: "start",
value: function(e) {}
}, {
key: "pause",
value: function() {}
}, {
key: "resume",
value: function() {}
}, {
key: "stop",
value: function() {
!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
}
}, {
key: "recordClip",
value: function(e) {}
}, {
key: "changeState",
value: function(e) {
this.state = e;
}
}, {
key: "getVideoPath",
value: function() {
return this.videoPath;
}
}, {
key: "isOpen",
value: function() {
console.log("isOpen  this.state ", this.state, c.OPEN);
return this.state == c.OPEN;
}
}, {
key: "isClose",
value: function() {
console.log("isClose  this.state ", this.state, c.CLOSE);
return this.state == c.CLOSE;
}
}, {
key: "getState",
value: function() {
return this.state;
}
} ]);
return e;
}();
n.default = s;
cc._RF.pop();
}, {} ],
BaseRewardAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bc0cazfRXFDWZ+moWebrvFj", "BaseRewardAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i, o, a = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}();
function r(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var c = n.RewardADState = (o = i = function e() {
r(this, e);
}, i.close = 0, i.open = 1, o), s = function() {
function e(t) {
r(this, e);
this.state = c.close;
this.rewardCallback = null;
this.createVideoAd(t);
}
a(e, [ {
key: "getState",
value: function() {
return this.state;
}
}, {
key: "createVideoAd",
value: function(e) {}
}, {
key: "show",
value: function(e) {
var t = this;
if (this.rewardedVideoAd) {
this.rewardCallback = e;
this.rewardedVideoAd.show().then(function() {
t.state = c.open;
}).catch(function() {
t.rewardedVideoAd.load().then(function() {
t.rewardedVideoAd.show();
t.state = c.open;
D.sdk.hideBanner();
}).catch(function(t) {
console.log("激励视频 广告显示失败");
e(!1);
});
});
} else e(!1);
}
}, {
key: "callback",
value: function(e) {}
} ]);
return e;
}();
n.default = s;
cc._RF.pop();
}, {} ],
BaseShare: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "258bcqBEXREUJW/y7NxsF9L", "BaseShare");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}();
var o = function() {
function e(t) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, e);
this.shareFlag = !1;
this.callback = null;
this.title = "";
this.title = t;
}
i(e, [ {
key: "share",
value: function(e, t) {}
}, {
key: "shareSuccess",
value: function() {}
} ]);
return e;
}();
n.default = o;
t.exports = n.default;
cc._RF.pop();
}, {} ],
ChannelID: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "02b82UacelKWYVFycSEL9JP", "ChannelID");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i, o, a, r;
function c(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var s = (o = i = function e() {
c(this, e);
}, i.DEV = 0, i.WX = 1, i.VIVO = 2, i.TT = 3, i.OPPO = 4, o);
n.default = s;
n.AdIDS = [ {}, {}, {
bannerID: "2d00b6c0ce7043d792613ff00a9f5c1b",
rewardID: "153619f6be814602802e0d42a8324ce0",
insertID: "4e7c8524f1b04f2793523671369d1f03"
}, {
bannerID: "2ku7gkd7m0lu9nfwi7",
rewardID: "1c03eg1nc0n91638ac",
shareTitle: "hello world"
}, {
appId: "30167490",
bannerID: "101783",
rewardID: "101784",
insertID: "101781",
nativeID: "105055"
} ], n.SDKEvent = (r = a = function e() {
c(this, e);
}, a.NATIVE_AD_LOAD_FINISH = "natieve_ad_load_finish", r);
cc._RF.pop();
}, {} ],
1: [ function(e, t, n) {
t.exports = {
O_RDONLY: 0,
O_WRONLY: 1,
O_RDWR: 2,
S_IFMT: 61440,
S_IFREG: 32768,
S_IFDIR: 16384,
S_IFCHR: 8192,
S_IFBLK: 24576,
S_IFIFO: 4096,
S_IFLNK: 40960,
S_IFSOCK: 49152,
O_CREAT: 512,
O_EXCL: 2048,
O_NOCTTY: 131072,
O_TRUNC: 1024,
O_APPEND: 8,
O_DIRECTORY: 1048576,
O_NOFOLLOW: 256,
O_SYNC: 128,
O_SYMLINK: 2097152,
O_NONBLOCK: 4,
S_IRWXU: 448,
S_IRUSR: 256,
S_IWUSR: 128,
S_IXUSR: 64,
S_IRWXG: 56,
S_IRGRP: 32,
S_IWGRP: 16,
S_IXGRP: 8,
S_IRWXO: 7,
S_IROTH: 4,
S_IWOTH: 2,
S_IXOTH: 1,
E2BIG: 7,
EACCES: 13,
EADDRINUSE: 48,
EADDRNOTAVAIL: 49,
EAFNOSUPPORT: 47,
EAGAIN: 35,
EALREADY: 37,
EBADF: 9,
EBADMSG: 94,
EBUSY: 16,
ECANCELED: 89,
ECHILD: 10,
ECONNABORTED: 53,
ECONNREFUSED: 61,
ECONNRESET: 54,
EDEADLK: 11,
EDESTADDRREQ: 39,
EDOM: 33,
EDQUOT: 69,
EEXIST: 17,
EFAULT: 14,
EFBIG: 27,
EHOSTUNREACH: 65,
EIDRM: 90,
EILSEQ: 92,
EINPROGRESS: 36,
EINTR: 4,
EINVAL: 22,
EIO: 5,
EISCONN: 56,
EISDIR: 21,
ELOOP: 62,
EMFILE: 24,
EMLINK: 31,
EMSGSIZE: 40,
EMULTIHOP: 95,
ENAMETOOLONG: 63,
ENETDOWN: 50,
ENETRESET: 52,
ENETUNREACH: 51,
ENFILE: 23,
ENOBUFS: 55,
ENODATA: 96,
ENODEV: 19,
ENOENT: 2,
ENOEXEC: 8,
ENOLCK: 77,
ENOLINK: 97,
ENOMEM: 12,
ENOMSG: 91,
ENOPROTOOPT: 42,
ENOSPC: 28,
ENOSR: 98,
ENOSTR: 99,
ENOSYS: 78,
ENOTCONN: 57,
ENOTDIR: 20,
ENOTEMPTY: 66,
ENOTSOCK: 38,
ENOTSUP: 45,
ENOTTY: 25,
ENXIO: 6,
EOPNOTSUPP: 102,
EOVERFLOW: 84,
EPERM: 1,
EPIPE: 32,
EPROTO: 100,
EPROTONOSUPPORT: 43,
EPROTOTYPE: 41,
ERANGE: 34,
EROFS: 30,
ESPIPE: 29,
ESRCH: 3,
ESTALE: 70,
ETIME: 101,
ETIMEDOUT: 60,
ETXTBSY: 26,
EWOULDBLOCK: 35,
EXDEV: 18,
SIGHUP: 1,
SIGINT: 2,
SIGQUIT: 3,
SIGILL: 4,
SIGTRAP: 5,
SIGABRT: 6,
SIGIOT: 6,
SIGBUS: 10,
SIGFPE: 8,
SIGKILL: 9,
SIGUSR1: 30,
SIGSEGV: 11,
SIGUSR2: 31,
SIGPIPE: 13,
SIGALRM: 14,
SIGTERM: 15,
SIGCHLD: 20,
SIGCONT: 19,
SIGSTOP: 17,
SIGTSTP: 18,
SIGTTIN: 21,
SIGTTOU: 22,
SIGURG: 16,
SIGXCPU: 24,
SIGXFSZ: 25,
SIGVTALRM: 26,
SIGPROF: 27,
SIGWINCH: 28,
SIGIO: 23,
SIGSYS: 12,
SSL_OP_ALL: 2147486719,
SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
SSL_OP_CISCO_ANYCONNECT: 32768,
SSL_OP_COOKIE_EXCHANGE: 8192,
SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
SSL_OP_EPHEMERAL_RSA: 0,
SSL_OP_LEGACY_SERVER_CONNECT: 4,
SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 32,
SSL_OP_MICROSOFT_SESS_ID_BUG: 1,
SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
SSL_OP_NETSCAPE_CA_DN_BUG: 536870912,
SSL_OP_NETSCAPE_CHALLENGE_BUG: 2,
SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 1073741824,
SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 8,
SSL_OP_NO_COMPRESSION: 131072,
SSL_OP_NO_QUERY_MTU: 4096,
SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
SSL_OP_NO_SSLv2: 16777216,
SSL_OP_NO_SSLv3: 33554432,
SSL_OP_NO_TICKET: 16384,
SSL_OP_NO_TLSv1: 67108864,
SSL_OP_NO_TLSv1_1: 268435456,
SSL_OP_NO_TLSv1_2: 134217728,
SSL_OP_PKCS1_CHECK_1: 0,
SSL_OP_PKCS1_CHECK_2: 0,
SSL_OP_SINGLE_DH_USE: 1048576,
SSL_OP_SINGLE_ECDH_USE: 524288,
SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 128,
SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
SSL_OP_TLS_BLOCK_PADDING_BUG: 512,
SSL_OP_TLS_D5_BUG: 256,
SSL_OP_TLS_ROLLBACK_BUG: 8388608,
ENGINE_METHOD_DSA: 2,
ENGINE_METHOD_DH: 4,
ENGINE_METHOD_RAND: 8,
ENGINE_METHOD_ECDH: 16,
ENGINE_METHOD_ECDSA: 32,
ENGINE_METHOD_CIPHERS: 64,
ENGINE_METHOD_DIGESTS: 128,
ENGINE_METHOD_STORE: 256,
ENGINE_METHOD_PKEY_METHS: 512,
ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
ENGINE_METHOD_ALL: 65535,
ENGINE_METHOD_NONE: 0,
DH_CHECK_P_NOT_SAFE_PRIME: 2,
DH_CHECK_P_NOT_PRIME: 1,
DH_UNABLE_TO_CHECK_GENERATOR: 4,
DH_NOT_SUITABLE_GENERATOR: 8,
NPN_ENABLED: 1,
RSA_PKCS1_PADDING: 1,
RSA_SSLV23_PADDING: 2,
RSA_NO_PADDING: 3,
RSA_PKCS1_OAEP_PADDING: 4,
RSA_X931_PADDING: 5,
RSA_PKCS1_PSS_PADDING: 6,
POINT_CONVERSION_COMPRESSED: 2,
POINT_CONVERSION_UNCOMPRESSED: 4,
POINT_CONVERSION_HYBRID: 6,
F_OK: 0,
R_OK: 4,
W_OK: 2,
X_OK: 1,
UV_UDP_REUSEADDR: 4
};
}, {} ],
2: [ function(e, t, n) {
var i = [].indexOf;
t.exports = function(e, t) {
if (i) return e.indexOf(t);
for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
return -1;
};
}, {} ],
3: [ function(e, t, n) {
"function" == typeof Object.create ? t.exports = function(e, t) {
e.super_ = t;
e.prototype = Object.create(t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
} : t.exports = function(e, t) {
e.super_ = t;
var n = function() {};
n.prototype = t.prototype;
e.prototype = new n();
e.prototype.constructor = e;
};
}, {} ],
4: [ function(e, t, n) {
var i, o, a = t.exports = {};
function r() {
throw new Error("setTimeout has not been defined");
}
function c() {
throw new Error("clearTimeout has not been defined");
}
(function() {
try {
i = "function" == typeof setTimeout ? setTimeout : r;
} catch (e) {
i = r;
}
try {
o = "function" == typeof clearTimeout ? clearTimeout : c;
} catch (e) {
o = c;
}
})();
function s(e) {
if (i === setTimeout) return setTimeout(e, 0);
if ((i === r || !i) && setTimeout) {
i = setTimeout;
return setTimeout(e, 0);
}
try {
return i(e, 0);
} catch (t) {
try {
return i.call(null, e, 0);
} catch (t) {
return i.call(this, e, 0);
}
}
}
var l, u = [], d = !1, h = -1;
function f() {
if (d && l) {
d = !1;
l.length ? u = l.concat(u) : h = -1;
u.length && p();
}
}
function p() {
if (!d) {
var e = s(f);
d = !0;
for (var t = u.length; t; ) {
l = u;
u = [];
for (;++h < t; ) l && l[h].run();
h = -1;
t = u.length;
}
l = null;
d = !1;
(function(e) {
if (o === clearTimeout) return clearTimeout(e);
if ((o === c || !o) && clearTimeout) {
o = clearTimeout;
return clearTimeout(e);
}
try {
o(e);
} catch (t) {
try {
return o.call(null, e);
} catch (t) {
return o.call(this, e);
}
}
})(e);
}
}
a.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
u.push(new g(e, t));
1 !== u.length || d || s(p);
};
function g(e, t) {
this.fun = e;
this.array = t;
}
g.prototype.run = function() {
this.fun.apply(null, this.array);
};
a.title = "browser";
a.browser = !0;
a.env = {};
a.argv = [];
a.version = "";
a.versions = {};
function y() {}
a.on = y;
a.addListener = y;
a.once = y;
a.off = y;
a.removeListener = y;
a.removeAllListeners = y;
a.emit = y;
a.prependListener = y;
a.prependOnceListener = y;
a.listeners = function(e) {
return [];
};
a.binding = function(e) {
throw new Error("process.binding is not supported");
};
a.cwd = function() {
return "/";
};
a.chdir = function(e) {
throw new Error("process.chdir is not supported");
};
a.umask = function() {
return 0;
};
}, {} ],
5: [ function(e, t, n) {
t.exports = function(e) {
return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
};
}, {} ],
6: [ function(e, t, n) {
(function(t, i) {
var o = /%[sdj%]/g;
n.format = function(e) {
if (!v(e)) {
for (var t = [], n = 0; n < arguments.length; n++) t.push(c(arguments[n]));
return t.join(" ");
}
n = 1;
for (var i = arguments, a = i.length, r = String(e).replace(o, function(e) {
if ("%%" === e) return "%";
if (n >= a) return e;
switch (e) {
case "%s":
return String(i[n++]);

case "%d":
return Number(i[n++]);

case "%j":
try {
return JSON.stringify(i[n++]);
} catch (e) {
return "[Circular]";
}

default:
return e;
}
}), s = i[n]; n < a; s = i[++n]) g(s) || !w(s) ? r += " " + s : r += " " + c(s);
return r;
};
n.deprecate = function(e, o) {
if (m(i.process)) return function() {
return n.deprecate(e, o).apply(this, arguments);
};
if (!0 === t.noDeprecation) return e;
var a = !1;
return function() {
if (!a) {
if (t.throwDeprecation) throw new Error(o);
t.traceDeprecation ? console.trace(o) : console.error(o);
a = !0;
}
return e.apply(this, arguments);
};
};
var a, r = {};
n.debuglog = function(e) {
m(a) && (a = t.env.NODE_DEBUG || "");
e = e.toUpperCase();
if (!r[e]) if (new RegExp("\\b" + e + "\\b", "i").test(a)) {
var i = t.pid;
r[e] = function() {
var t = n.format.apply(n, arguments);
console.error("%s %d: %s", e, i, t);
};
} else r[e] = function() {};
return r[e];
};
function c(e, t) {
var i = {
seen: [],
stylize: l
};
arguments.length >= 3 && (i.depth = arguments[2]);
arguments.length >= 4 && (i.colors = arguments[3]);
p(t) ? i.showHidden = t : t && n._extend(i, t);
m(i.showHidden) && (i.showHidden = !1);
m(i.depth) && (i.depth = 2);
m(i.colors) && (i.colors = !1);
m(i.customInspect) && (i.customInspect = !0);
i.colors && (i.stylize = s);
return u(i, e, i.depth);
}
n.inspect = c;
c.colors = {
bold: [ 1, 22 ],
italic: [ 3, 23 ],
underline: [ 4, 24 ],
inverse: [ 7, 27 ],
white: [ 37, 39 ],
grey: [ 90, 39 ],
black: [ 30, 39 ],
blue: [ 34, 39 ],
cyan: [ 36, 39 ],
green: [ 32, 39 ],
magenta: [ 35, 39 ],
red: [ 31, 39 ],
yellow: [ 33, 39 ]
};
c.styles = {
special: "cyan",
number: "yellow",
boolean: "yellow",
undefined: "grey",
null: "bold",
string: "green",
date: "magenta",
regexp: "red"
};
function s(e, t) {
var n = c.styles[t];
return n ? "[" + c.colors[n][0] + "m" + e + "[" + c.colors[n][1] + "m" : e;
}
function l(e, t) {
return e;
}
function u(e, t, i) {
if (e.customInspect && t && A(t.inspect) && t.inspect !== n.inspect && (!t.constructor || t.constructor.prototype !== t)) {
var o = t.inspect(i, e);
v(o) || (o = u(e, o, i));
return o;
}
var a = function(e, t) {
if (m(t)) return e.stylize("undefined", "undefined");
if (v(t)) {
var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
return e.stylize(n, "string");
}
if (y(t)) return e.stylize("" + t, "number");
if (p(t)) return e.stylize("" + t, "boolean");
if (g(t)) return e.stylize("null", "null");
}(e, t);
if (a) return a;
var r = Object.keys(t), c = function(e) {
var t = {};
e.forEach(function(e, n) {
t[e] = !0;
});
return t;
}(r);
e.showHidden && (r = Object.getOwnPropertyNames(t));
if (S(t) && (r.indexOf("message") >= 0 || r.indexOf("description") >= 0)) return d(t);
if (0 === r.length) {
if (A(t)) {
var s = t.name ? ": " + t.name : "";
return e.stylize("[Function" + s + "]", "special");
}
if (b(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
if (_(t)) return e.stylize(Date.prototype.toString.call(t), "date");
if (S(t)) return d(t);
}
var l, w = "", C = !1, I = [ "{", "}" ];
if (f(t)) {
C = !0;
I = [ "[", "]" ];
}
if (A(t)) {
w = " [Function" + (t.name ? ": " + t.name : "") + "]";
}
b(t) && (w = " " + RegExp.prototype.toString.call(t));
_(t) && (w = " " + Date.prototype.toUTCString.call(t));
S(t) && (w = " " + d(t));
if (0 === r.length && (!C || 0 == t.length)) return I[0] + w + I[1];
if (i < 0) return b(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
e.seen.push(t);
l = C ? function(e, t, n, i, o) {
for (var a = [], r = 0, c = t.length; r < c; ++r) O(t, String(r)) ? a.push(h(e, t, n, i, String(r), !0)) : a.push("");
o.forEach(function(o) {
o.match(/^\d+$/) || a.push(h(e, t, n, i, o, !0));
});
return a;
}(e, t, i, c, r) : r.map(function(n) {
return h(e, t, i, c, n, C);
});
e.seen.pop();
return function(e, t, n) {
if (e.reduce(function(e, t) {
0;
t.indexOf("\n") >= 0 && 0;
return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
}, 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
return n[0] + t + " " + e.join(", ") + " " + n[1];
}(l, w, I);
}
function d(e) {
return "[" + Error.prototype.toString.call(e) + "]";
}
function h(e, t, n, i, o, a) {
var r, c, s;
(s = Object.getOwnPropertyDescriptor(t, o) || {
value: t[o]
}).get ? c = s.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : s.set && (c = e.stylize("[Setter]", "special"));
O(i, o) || (r = "[" + o + "]");
c || (e.seen.indexOf(s.value) < 0 ? (c = g(n) ? u(e, s.value, null) : u(e, s.value, n - 1)).indexOf("\n") > -1 && (c = a ? c.split("\n").map(function(e) {
return "  " + e;
}).join("\n").substr(2) : "\n" + c.split("\n").map(function(e) {
return "   " + e;
}).join("\n")) : c = e.stylize("[Circular]", "special"));
if (m(r)) {
if (a && o.match(/^\d+$/)) return c;
if ((r = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
r = r.substr(1, r.length - 2);
r = e.stylize(r, "name");
} else {
r = r.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
r = e.stylize(r, "string");
}
}
return r + ": " + c;
}
function f(e) {
return Array.isArray(e);
}
n.isArray = f;
function p(e) {
return "boolean" == typeof e;
}
n.isBoolean = p;
function g(e) {
return null === e;
}
n.isNull = g;
n.isNullOrUndefined = function(e) {
return null == e;
};
function y(e) {
return "number" == typeof e;
}
n.isNumber = y;
function v(e) {
return "string" == typeof e;
}
n.isString = v;
n.isSymbol = function(e) {
return "symbol" == typeof e;
};
function m(e) {
return void 0 === e;
}
n.isUndefined = m;
function b(e) {
return w(e) && "[object RegExp]" === C(e);
}
n.isRegExp = b;
function w(e) {
return "object" == typeof e && null !== e;
}
n.isObject = w;
function _(e) {
return w(e) && "[object Date]" === C(e);
}
n.isDate = _;
function S(e) {
return w(e) && ("[object Error]" === C(e) || e instanceof Error);
}
n.isError = S;
function A(e) {
return "function" == typeof e;
}
n.isFunction = A;
n.isPrimitive = function(e) {
return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e;
};
n.isBuffer = e("./support/isBuffer");
function C(e) {
return Object.prototype.toString.call(e);
}
function I(e) {
return e < 10 ? "0" + e.toString(10) : e.toString(10);
}
var T = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
n.log = function() {
console.log("%s - %s", function() {
var e = new Date(), t = [ I(e.getHours()), I(e.getMinutes()), I(e.getSeconds()) ].join(":");
return [ e.getDate(), T[e.getMonth()], t ].join(" ");
}(), n.format.apply(n, arguments));
};
n.inherits = e("inherits");
n._extend = function(e, t) {
if (!t || !w(t)) return e;
for (var n = Object.keys(t), i = n.length; i--; ) e[n[i]] = t[n[i]];
return e;
};
function O(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}
}).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"./support/isBuffer": 5,
_process: 4,
inherits: 3
} ],
7: [ function(require, module, exports) {
var indexOf = require("indexof"), Object_keys = function(e) {
if (Object.keys) return Object.keys(e);
var t = [];
for (var n in e) t.push(n);
return t;
}, forEach = function(e, t) {
if (e.forEach) return e.forEach(t);
for (var n = 0; n < e.length; n++) t(e[n], n, e);
}, defineProp = function() {
try {
Object.defineProperty({}, "_", {});
return function(e, t, n) {
Object.defineProperty(e, t, {
writable: !0,
enumerable: !1,
configurable: !0,
value: n
});
};
} catch (e) {
return function(e, t, n) {
e[t] = n;
};
}
}(), globals = [ "Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape" ];
function Context() {}
Context.prototype = {};
var Script = exports.Script = function(e) {
if (!(this instanceof Script)) return new Script(e);
this.code = e;
};
Script.prototype.runInContext = function(e) {
if (!(e instanceof Context)) throw new TypeError("needs a 'context' argument.");
var t = document.createElement("iframe");
t.style || (t.style = {});
t.style.display = "none";
document.body.appendChild(t);
var n = t.contentWindow, i = n.eval, o = n.execScript;
if (!i && o) {
o.call(n, "null");
i = n.eval;
}
forEach(Object_keys(e), function(t) {
n[t] = e[t];
});
forEach(globals, function(t) {
e[t] && (n[t] = e[t]);
});
var a = Object_keys(n), r = i.call(n, this.code);
forEach(Object_keys(n), function(t) {
(t in e || -1 === indexOf(a, t)) && (e[t] = n[t]);
});
forEach(globals, function(t) {
t in e || defineProp(e, t, n[t]);
});
document.body.removeChild(t);
return r;
};
Script.prototype.runInThisContext = function() {
return eval(this.code);
};
Script.prototype.runInNewContext = function(e) {
var t = Script.createContext(e), n = this.runInContext(t);
forEach(Object_keys(t), function(n) {
e[n] = t[n];
});
return n;
};
forEach(Object_keys(Script.prototype), function(e) {
exports[e] = Script[e] = function(t) {
var n = Script(t);
return n[e].apply(n, [].slice.call(arguments, 1));
};
});
exports.createScript = function(e) {
return exports.Script(e);
};
exports.createContext = Script.createContext = function(e) {
var t = new Context();
"object" == typeof e && forEach(Object_keys(e), function(n) {
t[n] = e[n];
});
return t;
};
}, {
indexof: 2
} ],
DevChannel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2856aw/NtFBCYn6Hzy6HD4b", "DevChannel");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = a(e("../base/BaseChannel")), o = a(e("./DevLogin"));
function a(e) {
return e && e.__esModule ? e : {
default: e
};
}
var r = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, i.default);
function t(e) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var n = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
n.loginMgr = new o.default();
return n;
}
return t;
}();
n.default = r;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseChannel": "BaseChannel",
"./DevLogin": "DevLogin"
} ],
DevLogin: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "33f6crAK2NFZKflPrBXEdyF", "DevLogin");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../base/LoginInterface"));
var a = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
return function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
}
i(t, [ {
key: "login",
value: function() {}
}, {
key: "logout",
value: function() {}
} ]);
return t;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/LoginInterface": "LoginInterface"
} ],
Enemy: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cfe104AL1BA4ZYID8PM1eVV", "Enemy");
e("./HexCell");
cc.Class({
extends: cc.Component,
properties: {
emeny: {
default: null,
type: cc.Node
},
_axialCoordinate: {
default: cc.v2(0, 0),
visible: !1
},
axialCoordinate: {
get: function() {
return this._axialCoordinate;
},
set: function(e) {
this._axialCoordinate = cc.v2(e.x, e.y);
}
}
},
onLoad: function() {},
start: function() {},
moveTo: function() {}
});
cc._RF.pop();
}, {
"./HexCell": "HexCell"
} ],
EventDispatcher: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4bb45bduqpIv5MmChrnExHC", "EventDispatcher");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}();
var o = function() {
function e() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, e);
this.eventMap = {};
this.eventMap = {};
}
i(e, [ {
key: "addEventListener",
value: function(e, t, n) {
var i = this.eventMap[e];
if (i) this.has(e, t, n) || i.push({
handler: t,
target: n
}); else {
i = [];
this.eventMap[e] = i;
i.push({
handler: t,
target: n
});
}
}
}, {
key: "has",
value: function(e, t, n) {
var i = this.eventMap[e];
if (i) for (var o = 0; o < i.length; o++) {
var a = i[o];
if (a.handler === t && a.target === n) return a;
}
return null;
}
}, {
key: "removeEventListener",
value: function(e, t, n) {
var i = this.eventMap[e];
if (i) for (var o = 0; o < i.length; o++) {
var a = i[o];
if (a.handler === t && a.target === n) {
i.splice(o, 1);
return;
}
}
}
}, {
key: "publish",
value: function(e, t, n, i) {
var o = this.eventMap[e];
o && o.forEach(function(e) {
e.handler.call(e.target, t, n, i);
});
}
}, {
key: "removeAllEventListener",
value: function() {
this.eventMap = {};
}
}, {
key: "removeEventListenerByName",
value: function(e) {
this.eventMap[e] = [];
}
} ]);
return e;
}();
n.default = o;
t.exports = n.default;
cc._RF.pop();
}, {} ],
GameApplication: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f08152UaoRPB64U7d0m5V+q", "GameApplication");
e("constants");
var i = e("../GameLogic/SoundManager");
cc.Class({
extends: cc.Component,
properties: {
soundManager: {
default: null,
type: i
},
missions: {
default: []
},
missionsCB: {
default: []
},
conf: {
default: {}
},
confCB: {
default: []
},
createShortcuted: {
default: 0,
type: cc.Integer
},
effectView: {
default: null,
type: cc.Node
},
StepView: {
default: null,
type: cc.Node,
visible: !1
},
StepView_prefab: {
default: null,
type: cc.Prefab
},
HeartView: {
default: null,
type: cc.Node,
visible: !1
},
HeartView_prefab: {
default: null,
type: cc.Prefab
},
CoinView: {
default: null,
type: cc.Node,
visible: !1
},
CoinView_prefab: {
default: null,
type: cc.Prefab
},
SharaView: {
default: null,
type: cc.Node,
visible: !1
},
SharaView_prefab: {
default: null,
type: cc.Prefab
},
fbView_prefab: {
default: null,
type: cc.Prefab
},
_playTimes: {
default: 0,
type: cc.Integer
},
playTimes: {
get: function() {
return this._playTimes;
},
set: function(e) {
this._playTimes = e;
SDK().plusPlayTimes();
}
},
uiAtlas: {
default: null,
type: cc.SpriteAtlas
},
rewardList: {
default: [],
type: [ cc.Node ],
visible: !1
}
},
lerpACtion: function(e, t, n, i) {
null == this.agent && (this.agent = new cc.Node("agent"));
this.agent.stopAllActions();
var o = this.agent;
null != e && (o.x = e);
var a = n / .02, r = t / a;
o.runAction(cc.repeat(cc.sequence(cc.callFunc(function() {
i(o);
}.bind(this), this), cc.moveBy(.02, cc.v2(r, 0))), a + 1));
},
start: function() {
this.setLanguage(window.nameArr[4]);
SDK().init();
},
getConf: function(e, t) {
if (null != this.conf[e]) {
if (t) {
console.log("从cache读取：" + e);
t(this.conf[e]);
}
} else {
console.log("从硬盘读取：" + e);
cc.loader.loadRes(e, function(n, i) {
this.conf[e] = i.json;
null != t && t(i.json);
}.bind(this));
}
},
onLoad: function() {
window.gameApplication = this;
var e = cc.director.getCollisionManager();
e.enabled = !0;
e.enabledDebugDraw = !1;
e.enabledDrawBoundingBox = !1;
cc.loader.loadRes("conf/missions", function(e, t) {
this.missions = t.json;
this.invokeMissionCB();
}.bind(this));
this.openMainView();
this.curShowIdx = 0;
},
onDestroy: function() {
cc.director.getCollisionManager().enabled = !1;
},
setLanguage: function(t) {
e("LanguageData").init(t);
},
getMissions: function(e) {
null != this.missions && this.missions.length > 0 ? e(this.missions) : this.missionsCB.push(e);
},
invokeMissionCB: function() {
var e = this;
this.missionsCB.length > 0 && this.missionsCB.forEach(function(t) {
null != t && t(e.missions);
});
},
setNodeActive: function(e, t, n) {
var i = cc.find("Canvas/" + e);
if (null != i) if (t) {
i.active = t;
if ("MainView" == i.name || "GameView" == i.name) {
null != (a = cc.find("top", i)) && (a.active = !0);
var o = cc.find("GoGame", i);
null != o && (o.active = !1);
i.runAction(cc.moveTo(.5, cc.v2(0, 0)));
}
if (n) {
(r = cc.find("Bg", i)).scale = 0;
r.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)));
} else {
i.opacity = 0;
i.runAction(cc.fadeIn(.5));
}
} else {
if ("MainView" == i.name) {
var a;
null != (a = cc.find("top", i)) && (a.active = !1);
i.runAction(cc.sequence(cc.moveTo(.5, cc.v2(0, -cc.winSize.height)), cc.callFunc(function() {
i.active = !0;
}.bind(this), this)));
} else "GameView" == i.name && i.runAction(cc.sequence(cc.moveTo(.5, cc.v2(0, cc.winSize.height)), cc.callFunc(function() {
i.active = t;
}.bind(this), this)));
if (n) {
var r;
(r = cc.find("Bg", i)).runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
i.active = !1;
}.bind(this), this)));
} else i.runAction(cc.fadeOut(.5));
}
},
openMainView: function(e) {
if (null != window.mainScirpt) {
window.mainScirpt.refreashVal();
e && this.scheduleOnce(function() {
window.gameApplication.flyReward(1, "starBig", window.mainScirpt.starts, null);
}.bind(this), 1);
}
this.setNodeActive("MainView", !0);
this.setNodeActive("GameView", !1);
this.openRankView(!1);
},
openGameView: function() {
this.setNodeActive("GameView", !0);
this.setNodeActive("MainView", !1);
this.openRankView(!1);
},
openPopView: function(e, t) {
this.setNodeActive(e, t, !0);
},
openRankView: function(e) {
this.openPopView("RankView", e);
},
openGiftView: function(e) {
this.openPopView("GiftView", e);
},
openSetting: function(e) {
this.openPopView("SettingView", e);
},
settingClick: function(e, t) {
"1" == t ? this.openSetting(!0) : "2" == t && this.openSetting(!1);
},
showVideoView: function(e, t) {
if (null == this.VideoView) {
var n = cc.instantiate(this.VideoView_prefab), i = cc.find("Canvas");
n.parent = i;
n.width = window.width;
n.height = window.height;
this.VideoView = n;
}
this.VideoView.active = !0;
this.VideoView.setSiblingIndex(this.VideoView.parent.childrenCount);
var o = this.VideoView.getChildByName("Bg");
o.scale = 0;
o.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)));
var a = this.VideoView.getChildByName("Bg").getChildByName("Light");
a.stopAllActions();
a.runAction(cc.repeatForever(cc.rotateBy(1.1, 100)));
var r = this.VideoView.getChildByName("Bg").getChildByName("Sure"), c = r.getChildByName("Text").getComponent(cc.Label);
r.off(cc.Node.EventType.TOUCH_END);
var s = 0;
this.checkDailyCount("video", !1, function(n) {
s = 5 - n;
r.getComponent(cc.Button).interactable = s > 0;
if (t) c.string = "免费(" + s + ")"; else {
c.string = "免费";
r.getComponent(cc.Button).interactable = !0;
}
r.on(cc.Node.EventType.TOUCH_END, function(n) {
if (s > 0 || !t) {
window.gameApplication.soundManager.playSound("btn_click");
this.onVideoBtnClick(function(t) {
e(t);
this.VideoView.active = !t;
}.bind(this), t);
}
}, this);
}.bind(this));
var l = this.VideoView.getChildByName("Bg").getChildByName("Later");
l.off(cc.Node.EventType.TOUCH_END);
l.on(cc.Node.EventType.TOUCH_END, function(t) {
window.gameApplication.soundManager.playSound("btn_click");
e(!1);
this.VideoView.active = !1;
}, this);
},
showCoinView: function(e, t) {
if (null == this.CoinView) {
var n = cc.instantiate(this.CoinView_prefab), i = cc.find("Canvas");
n.parent = i;
n.width = window.width;
n.height = window.height;
this.CoinView = n;
}
this.CoinView.active = !0;
this.CoinView.setSiblingIndex(this.CoinView.parent.childrenCount);
var o = this.CoinView.getChildByName("Bg");
o.scale = 0;
o.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)));
var a = this.CoinView.getChildByName("Bg").getChildByName("Bg").getChildByName("Light");
a.stopAllActions();
a.runAction(cc.repeatForever(cc.rotateBy(1.1, 100)));
var r = this.CoinView.getChildByName("Bg").getChildByName("Bg").getChildByName("Sure"), c = r.getChildByName("Text").getComponent(cc.Label);
r.off(cc.Node.EventType.TOUCH_END);
var s = 0;
this.checkDailyCount("coinVideo", !1, function(n) {
s = 100 - n;
r.getComponent(cc.Button).interactable = s > 0;
if (t) c.string = "免费(" + s + ")"; else {
c.string = "免费";
r.getComponent(cc.Button).interactable = !0;
}
r.on(cc.Node.EventType.TOUCH_END, function(n) {
if (s > 0 || !t) {
window.gameApplication.soundManager.playSound("btn_click");
this.onVideoBtnClick(function(t) {
t && o.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
this.CoinView.active = !1;
}.bind(this), this)));
e(t);
}.bind(this), t);
}
}, this);
}.bind(this));
var l = this.CoinView.getChildByName("Bg").getChildByName("Later");
l.off(cc.Node.EventType.TOUCH_END);
l.on(cc.Node.EventType.TOUCH_END, function(t) {
window.gameApplication.soundManager.playSound("btn_click");
e(!1);
o.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
this.CoinView.active = !1;
}.bind(this), this)));
}, this);
},
showHeartView: function(e, t) {
if (null == this.HeartView) {
var n = cc.instantiate(this.HeartView_prefab), i = cc.find("Canvas");
n.parent = i;
n.width = window.width;
n.height = window.height;
this.HeartView = n;
}
this.HeartView.active = !0;
this.HeartView.setSiblingIndex(this.HeartView.parent.childrenCount);
var o = this.HeartView.getChildByName("Bg");
o.scale = 0;
o.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)));
var a = this.HeartView.getChildByName("Bg").getChildByName("Bg").getChildByName("Light");
a.stopAllActions();
a.runAction(cc.repeatForever(cc.rotateBy(1.1, 100)));
var r = this.HeartView.getChildByName("Bg").getChildByName("Bg").getChildByName("Video"), c = r.getChildByName("Text").getComponent(cc.Label);
r.off(cc.Node.EventType.TOUCH_END);
var s = 0;
this.checkDailyCount("heartVideo", !1, function(n) {
s = 5 - n;
r.getComponent(cc.Button).interactable = s > 0;
if (t) c.string = "免费(" + s + ")"; else {
c.string = "免费";
r.getComponent(cc.Button).interactable = !0;
}
r.on(cc.Node.EventType.TOUCH_END, function(n) {
if (s > 0 || !t) {
window.gameApplication.soundManager.playSound("btn_click");
this.onVideoBtnClick(function(t) {
t && o.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
this.HeartView.active = !1;
}.bind(this), this)));
e(t);
}.bind(this), t);
}
}, this);
}.bind(this));
var l = this.HeartView.getChildByName("Bg").getChildByName("Bg").getChildByName("Share"), u = l.getChildByName("Text").getComponent(cc.Label);
l.off(cc.Node.EventType.TOUCH_END);
var d = 0;
this.checkDailyCount("heartShare", !1, function(n) {
d = 5 - n;
l.getComponent(cc.Button).interactable = d > 0;
if (t) u.string = "FREE(" + d + ")"; else {
u.string = "FREE";
l.getComponent(cc.Button).interactable = !0;
}
l.on(cc.Node.EventType.TOUCH_END, function(n) {
if (d > 0 || !t) {
window.gameApplication.soundManager.playSound("btn_click");
this.onShareBtnClick(function(t) {
t && o.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
this.HeartView.active = !1;
}.bind(this), this)));
e(t);
}.bind(this), t);
}
}, this);
}.bind(this));
var h = this.HeartView.getChildByName("Bg").getChildByName("Later");
h.off(cc.Node.EventType.TOUCH_END);
h.on(cc.Node.EventType.TOUCH_END, function(t) {
window.gameApplication.soundManager.playSound("btn_click");
e(!1);
o.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
this.HeartView.active = !1;
}.bind(this), this)));
}, this);
},
showStepView: function(e, t) {
if (null == this.StepView) {
var n = cc.instantiate(this.StepView_prefab), i = cc.find("Canvas");
n.parent = i;
n.width = window.width;
n.height = window.height;
this.StepView = n;
}
this.StepView.active = !0;
this.StepView.setSiblingIndex(this.StepView.parent.childrenCount);
var o = this.StepView.getChildByName("Bg");
o.scale = 0;
o.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)));
var a = this.StepView.getChildByName("Bg").getChildByName("Bg").getChildByName("Video");
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function(n) {
window.gameApplication.soundManager.playSound("btn_click");
this.onVideoBtnClick(function(t) {
t && o.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
this.StepView.active = !1;
}.bind(this), this)));
e(t);
}.bind(this), t);
}, this);
var r = this.StepView.getChildByName("Bg").getChildByName("Bg").getChildByName("Coin");
r.off(cc.Node.EventType.TOUCH_END);
r.on(cc.Node.EventType.TOUCH_END, function(t) {
window.gameApplication.soundManager.playSound("btn_click");
SDK().getItem("coins", function(t) {
if (t >= 100) {
t -= 100;
SDK().setItem({
coins: t
});
e(!0);
o.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
this.StepView.active = !1;
}.bind(this), this)));
} else window.gameApplication.showCoinView(function(t) {
t && o.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
this.StepView.active = !1;
}.bind(this), this)));
e(t);
}.bind(this), !1);
}.bind(this));
}, this);
var c = this.StepView.getChildByName("Bg").getChildByName("Later");
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function(t) {
window.gameApplication.soundManager.playSound("btn_click");
e(!1);
o.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
this.StepView.active = !1;
}.bind(this), this)));
}, this);
},
onVideoBtnClick: function(e, t) {
D.sdk.openRewardAd(e(!0));
},
checkDailyCount: function(e, t, n) {
var i = new Date(), o = i.getMonth(), a = i.getDate();
SDK().getItem(o + "_" + a + "_" + e, function(i) {
null == i && (i = 0);
i = parseInt(i);
if (t) {
i += 1;
var r = {};
r[o + "_" + a + "_" + e] = i;
SDK().setItem(r);
}
null != n && n(i);
});
},
onGiftBtnClick: function(e) {
SDK().showInterstitialAd(function(t) {
if (null == t) {
console.log("没有观看成功");
this.fbFail(1);
} else if (t) e(!0); else {
console.log("没有观看成功");
this.fbFail(1);
}
}.bind(this), !0);
},
showSharaView: function(e) {
if (null == this.SharaView) {
var t = cc.instantiate(this.SharaView_prefab), n = cc.find("Canvas");
t.parent = n;
t.width = window.width;
t.height = window.height;
this.SharaView = t;
}
this.SharaView.active = !0;
var i = this.SharaView.getChildByName("Bg").getChildByName("Sure");
i.off(cc.Node.EventType.TOUCH_END);
i.on(cc.Node.EventType.TOUCH_END, function(t) {
this.onShareBtnClick(function(t) {
e(t);
t && (this.SharaView.active = !1);
}.bind(this));
window.gameApplication.soundManager.playSound("btn_click");
}, this);
var o = this.SharaView.getChildByName("Bg").getChildByName("Later");
o.off(cc.Node.EventType.TOUCH_END);
o.on(cc.Node.EventType.TOUCH_END, function(e) {
this.SharaView.active = !1;
window.gameApplication.soundManager.playSound("btn_click");
}, this);
},
onShareBtnClick: function(e, t) {
SDK().getItem("all", function(n) {
D.sdk.showShare("", function() {
e(!0);
}, t);
}.bind(this));
},
fbFail: function(e) {
var t = cc.instantiate(this.fbView_prefab), n = cc.find("Canvas");
t.parent = n;
t.width = window.width;
t.height = window.height;
var i = t.getChildByName("Okay");
i.off(cc.Node.EventType.TOUCH_END);
i.on(cc.Node.EventType.TOUCH_END, function(e) {
this.fbView.active = !1;
i.parent.destroy();
window.gameApplication.soundManager.playSound("button");
}, this);
this.fbView = t;
if (1 == e) {
this.fbView.getChildByName("Bg").getChildByName("VideoText").active = !0;
this.fbView.getChildByName("Bg").getChildByName("ShareText").active = !1;
} else {
this.fbView.getChildByName("Bg").getChildByName("VideoText").active = !1;
this.fbView.getChildByName("Bg").getChildByName("ShareText").active = !0;
}
this.fbView.active = !0;
},
popClick: function(e, t) {
SDK().switchGameAsync(t);
},
shake: function(e) {
e.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.1, 5).easing(cc.easeIn(2)), cc.rotateTo(.2, -5).easing(cc.easeIn(2)), cc.rotateTo(.2, 5).easing(cc.easeIn(2)), cc.rotateTo(.1, 0).easing(cc.easeIn(2)), cc.delayTime(.5))));
},
scaleUpAndDowm: function(e) {
e.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, 1.1).easing(cc.easeIn(2)), cc.scaleTo(.6, .9).easing(cc.easeIn(2)), cc.scaleTo(.6, 1.1).easing(cc.easeIn(2)), cc.scaleTo(.6, .9).easing(cc.easeIn(2)))));
},
flyReward: function(e, t, n, i, o) {
window.gameApplication.soundManager.playSound("getCoin");
var a = void 0;
if (null != i) {
a = i.parent.convertToWorldSpaceAR(i.position);
a = this.effectView.convertToNodeSpaceAR(a);
} else a = cc.v2(0, 0);
var r = n.parent.convertToWorldSpaceAR(n.position);
r = this.effectView.convertToNodeSpaceAR(r);
for (var c = 0; c < e; c++) {
var s = this.rewardList.pop();
null == s && (s = new cc.Node(c));
var l = s.getComponent(cc.Sprite);
null == l && (l = s.addComponent(cc.Sprite));
s.parent = this.effectView;
s.position = a;
l.spriteFrame = this.uiAtlas.getSpriteFrame(t);
this.flyAnim(s, r, o, c);
}
},
flyAnim: function(e, t, n, i) {
e.scale = 0;
this.scheduleOnce(function() {
e.runAction(cc.spawn(cc.moveTo(.8, cc.v2(t.x, t.y)), cc.sequence(cc.scaleTo(.4, 1.1), cc.scaleTo(.4, 0), cc.callFunc(function() {
null != n && n();
this.rewardList.push(e);
}.bind(this), this))));
}.bind(this), .1 * i);
}
});
cc._RF.pop();
}, {
"../GameLogic/SoundManager": "SoundManager",
LanguageData: "LanguageData",
constants: 1
} ],
GameView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3a5f4xh9CRAI6wc4y+upnjw", "GameView");
var i, o = e("../../Utils/Utils"), a = e("./HexCell"), r = e("./Role"), c = e("./Enemy"), s = e("./Tower"), l = 100;
cc.Class({
extends: cc.Component,
properties: {
shootings: {
default: [],
type: [ cc.Node ]
},
invAgain: {
default: null,
type: cc.Node
},
mission: {
default: null
},
gm: {
default: null,
type: cc.Node
},
title: {
default: null,
type: cc.Label
},
star1: {
default: null,
type: cc.Node
},
star2: {
default: null,
type: cc.Node
},
star3: {
default: null,
type: cc.Node
},
moves: {
default: null,
type: cc.Label
},
best: {
default: null,
type: cc.RichText
},
tileBox: {
default: null,
type: cc.Node
},
iceBox: {
default: null,
type: cc.Node
},
maxValidMoves: {
default: 0,
type: cc.Integer,
visible: !1
},
movesLeft: {
default: 0,
type: cc.Integer,
visible: !1
},
moved: {
default: 0,
type: cc.Integer,
visible: !1
},
leaveSteps: {
default: null,
type: cc.Node
},
levelDimensions: {
default: cc.v2(0, 0),
visible: !1
},
gridOffset: {
default: cc.v2(0, 0),
visible: !1
},
hexCellPrefab: {
default: null,
type: cc.Node
},
icePrefab: {
default: null,
type: cc.Node
},
rolePrefab: {
default: null,
type: cc.Node
},
enemyPrefab: {
default: null,
type: cc.Node
},
enemyPrefab1: {
default: null,
type: cc.Node
},
enemyPrefab2: {
default: null,
type: cc.Node
},
endPrefab: {
default: null,
type: cc.Node
},
allCells: {
default: [],
type: [ a ]
},
allTowers: {
default: [],
type: [ s ]
},
myRole: {
default: null,
type: r
},
enemys: {
default: []
},
helplines: {
default: []
},
stepsLines: {
default: []
},
endObj: {
default: null,
type: r
},
selectedLines: {
default: []
},
mouseIsDown: !1,
userInputEnabled: !1,
gameOver: !1,
prevTilePosition: {
default: cc.v2(-1e3, -1e3),
visible: !1
},
mouseOffsetPos: {
default: cc.v2(0, 0),
visible: !1
},
touchPos: {
default: cc.v2(0, 0),
visible: !1
},
movePlus: {
get: function() {
return [ cc.v2(0, 1), cc.v2(-1, 0), cc.v2(0, -1), cc.v2(1, 0) ];
}
},
helpPath: {
default: []
},
helpShaked: {
default: []
},
helpBtn: {
default: null,
type: cc.Node
},
helpCountLabel: {
default: null,
type: cc.Label
},
_helpCount: {
default: 0,
type: cc.Integer
},
helpCount: {
get: function() {
return this._helpCount;
},
set: function(e) {
this._helpCount = e;
this.helpCountLabel.string = e.toString();
var t = {};
t.my_help = this._helpCount > 0 ? this._helpCount : -1;
SDK().setItem(t, null);
this.helpBtn.getChildByName("icon").active = !0;
this.helpBtn.getChildByName("num").active = !0;
}
},
shareFriendTip: {
default: null,
type: cc.Node
},
adSprite: {
default: null,
type: cc.Sprite
},
receiveGiftNode: {
default: null,
type: cc.Node
},
giftBtn: {
default: null,
type: cc.Node
},
preBtn: {
default: null,
type: cc.Node
},
nextBtn: {
default: null,
type: cc.Node
},
endView: {
default: null,
type: cc.Node
},
endView_Stars: {
default: null,
type: cc.Node
},
endView_title: {
default: null,
type: cc.Label
},
endView_text: {
default: null,
type: cc.RichText
},
gameApplication: {
default: null,
type: Object
},
isMoving: !1,
lastDirection: {
default: -1,
type: cc.Integer
},
turnBackCount: {
default: 0,
type: cc.Integer
},
timesNode: {
default: null,
type: cc.Node
},
timesVal: {
default: null,
type: cc.Label
},
timesLeft: {
default: 0,
type: cc.Integer
},
timeOutflowCB: {
default: null
},
timeIsUpNode: {
default: null,
type: cc.Node
},
timeIsUpEndNode: {
default: null,
type: cc.Node
},
gotMoreTime: !1,
opad_game_id: null,
isinigame: !1
},
onLoad: function() {
this.node.width = cc.winSize.width;
this.node.height = cc.winSize.height;
},
plusMoreHelp: function() {
this.helpCount += plusHelp;
},
clearHelp: function() {
this.helpCount = 0;
},
clearData: function() {
SDK().clearData();
},
onEnable: function() {
this.scheduleOnce(function() {
this.init();
}, .7);
this.unschedule(this.shootingStars);
this.schedule(this.shootingStars, 4);
},
shootingStars: function() {
for (var e = 0; e < this.shootings.length; e += 1) this.shootAnim(this.shootings[e]);
},
shootAnim: function(e) {
var t = 3 * Math.random();
e.x = cc.winSize.width + 100;
e.y = o.GetRandomNum(.5 * cc.winSize.height, 2 * cc.winSize.height);
this.scheduleOnce(function() {
e.runAction(cc.moveBy(.5, cc.v2(-2.5 * cc.winSize.width, -2.5 * cc.winSize.width)));
}.bind(this), t);
},
start: function() {
var e = cc.find("GameApplication");
null != e && (this.gameApplication = e.getComponent("GameApplication"));
if ("undefined" != typeof this.gameApplication && null != this.gameApplication) {
this.gm.active = !1;
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
this.onMouseDown(e);
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
this.onMouseMove(e);
}, this);
} else this.onBackBtnClicked();
},
onDisable: function() {
this.clear();
},
clear: function() {
this.unschedule(this.timeOutflow);
this.clearTile();
this.allCells.splice(0, this.allCells.length);
this.allTowers.splice(0, this.allTowers.length);
this.selectedLines.splice(0, this.selectedLines.length);
this.enemys.splice(0, this.enemys.length);
this.helplines.splice(0, this.helplines.length);
this.myRole = null;
this.helpShaked.splice(0, this.helpShaked.length);
null != this.helpPath && this.helpPath.length > 0 && this.helpPath.splice(0, this.helpPath.length);
l = 100;
this.mouseIsDown = !1;
this.gameOver = !1;
this.movesLeft = 0;
this.moved = 0;
this.turnBackCount = 0;
this.lastDirection = -1;
this.isMoving = !1;
this.currentLineColor = 0;
this.oldCurrentLineColor = 0;
},
clearTile: function() {
if (this.tileBox.childrenCount > 0) for (var e = 0; e < this.tileBox.childrenCount; e++) {
if (null != (t = this.tileBox.children[e])) {
t.active = !1;
t.destroy();
}
}
if (this.iceBox.childrenCount > 0) for (e = 0; e < this.iceBox.childrenCount; e++) {
var t;
if (null != (t = this.iceBox.children[e])) {
t.active = !1;
t.destroy();
}
}
},
init: function() {
var e = this;
this.selectedLines = [];
this.enemys = [];
this.helplines = [];
this.helpPath = [];
this.myRole = null;
this.isMoving = !1;
this.endView.active = !1;
this.timeIsUpNode.active = !1;
this.gotMoreTime = !1;
if (null != bid && bid > 0 && null != mid && mid > 0 && null != lid && lid > 0) {
var t = "conf/level_detail/b_" + bid + "/" + mid + "/" + lid;
this.gameApplication.getConf(t, function(e) {
this.mission = e;
console.log(e);
this.initGame();
}.bind(this));
var n = [];
lid > 1 && n.push(lid - 1);
lid < 100 && n.push(lid + 1);
n.forEach(function(t) {
var n = "conf/level_detail/b_" + bid + "/" + mid + "/" + t;
e.gameApplication.getConf(n, null);
});
this.initHelpBtn();
} else this.onBackBtnClicked();
},
initHelpBtn: function() {
var e = this;
SDK().getItem("my_help", function(t) {
e.helpCount = 0 == t ? 5 : -1 == t ? 0 : t;
}.bind(this));
},
initGame: function() {
D.sdk.hideBanner();
D.sdk.recorderStart();
D.sdk.recorderStart();
if (!this.isinigame) {
this.isinigame = !0;
var e = this.judgeIdx(mid, lid);
window.lastPlay = e;
this.timeIsUpNode.active = !1;
this.timeIsUpEndNode.active = !1;
this.gotMoreTime = !1;
this.leaveSteps.active = !1;
this.endView.active = !1;
this.clear();
var t = this.mission.lines.length;
this.turnBackCount = 0;
this.helpShaked.splice(0, this.helpShaked.length);
this.lastDirection = -1;
var n = "conf/level_list/level_" + bid + "_" + mid;
this.gameApplication.getConf(n, function(e) {}.bind(this));
this.moves.string = "0/" + t;
this.preBtn.active = !1;
this.nextBtn.active = !1;
SDK().getItem(bid + "_" + mid + "_" + lid + "_moves", function(e) {
this.best.string = e <= 0 ? "-" : e.toString();
}.bind(this));
var i = cc.v2(this.mission.x, this.mission.y);
this.createGrid(i, this.mission.walls, this.mission.ice, this.mission.tower, function() {
this.scheduleOnce(function() {
this.createRole(this.mission.start, this.mission.end);
this.initHelpPath(o.cloneObj(this.mission.lines));
this.mission.enemy.length > 0 && this.createEnemy(this.mission.enemy);
if (1 == mid) {
this.moved = 0;
this.maxValidMoves = this.getSteps();
this.maxValidMoves = this.maxValidMoves + 15;
this.movesLeft = this.maxValidMoves;
this.leaveSteps.active = !0;
this.updateUI();
}
if (3 == mid) {
var e = 12;
e = lid <= 5 ? 62 : lid <= 20 ? 65 : lid <= 45 ? 70 : lid <= 75 ? 75 : 80;
this.timesLeft = e;
this.timesNode.active = !0;
this.timesVal.string = e.toString();
var t = e;
this.schedule(this.timeOutflow, 1, t, 1);
} else {
this.timesLeft = -1;
this.timesNode.active = !1;
}
}.bind(this), .5);
}.bind(this));
}
},
initHelpPath: function(e) {
if (2 != mid && 4 != mid && 6 != mid) this.helpPath = e; else {
this.helpPath = [];
this.helpPath.push(this.myRole.axialCoordinate);
for (var t = 0; e.length > 0; ) {
for (var n = 0; n < e.length; n++) {
var i = e[n];
if (null != i) {
i = this.checkXY(i, 0, 0);
for (var o = this.checkMovePos(i), a = 0; a < o.length; a++) {
var r = this.helpPath[this.helpPath.length - 1];
if (o[a].x == r.x && o[a].y == r.y) {
this.helpPath.push(e[n]);
e.splice(n, 1);
break;
}
}
}
}
if (++t >= 500) {
e.splice(0, e.length);
e = [];
}
}
}
this.stepsLines = this.helpPath;
},
timeOutflow: function() {
var e = this;
if (this.timesLeft > 0) {
this.timesLeft--;
this.timesLeft < 10 && this.timesLeft > 1 && this.schedule(function() {
e.gameApplication.soundManager.playSound("clock");
}, .5, 2, 0);
this.timesNode.active = !0;
this.timesVal.string = this.timesLeft.toString();
this.timesLeft < 10 ? this.timesVal.node.color = cc.hexToColor("#ef3a40") : this.timesVal.node.color = cc.hexToColor("#ffffff");
if (0 == this.timesLeft) {
this.gameOver = !0;
if (this.gotMoreTime) {
this.timeIsUpNode.active = !1;
this.timeIsUpEndNode.active = !0;
} else {
SDK().hasVideoAd();
this.timeIsUpNode.active = !0;
this.timeIsUpEndNode.active = !1;
}
this.stopAllAction();
}
}
},
getMoreTime: function(e, t) {
e.target.getComponent(cc.Button).interactable = !1;
1 == t ? window.gameApplication.onVideoBtnClick(function(t) {
if (t) {
this.addTime();
this.timeIsUpNode.active = !1;
}
e.target.getComponent(cc.Button).interactable = !0;
}.bind(this), !1) : 2 == t && SDK().getItem("coins", function(t) {
if (t >= 100) {
t -= 100;
SDK().setItem({
coins: t
});
this.addTime();
} else window.gameApplication.showCoinView(function(e) {
e && this.addTime();
}.bind(this), !1);
e.target.getComponent(cc.Button).interactable = !0;
}.bind(this));
},
addTime: function() {
this.timesLeft = 10;
this.timesNode.active = !0;
this.timesVal.string = "10";
this.timeIsUpNode.active = !1;
this.gotMoreTime = !0;
this.gameOver = !1;
this.unschedule(this.timeOutflow);
this.schedule(this.timeOutflow, 1, 10, 1);
},
getMoreTimeInv: function(e) {
var t = this;
SDK().getItem("all", function(n) {
SDK().share(n, function(n) {
if (n) {
t.timesLeft = 10;
t.timesNode.active = !0;
t.timesVal.string = "10";
t.gotMoreTime = !0;
t.gameOver = !1;
t.unschedule(this.timeOutflow);
t.schedule(t.timeOutflow, 1, 10, 1);
} else t.showInvAgain(3, e);
e.target.getComponent(cc.Button).interactable = !0;
}.bind(this));
}.bind(this));
},
restarGame: function(e) {
this.myRole.node.stopAllActions();
this.unschedule(this.timeOutflow);
this.timesVal.node.color = cc.hexToColor("#ffffff");
this.timeIsUpNode.active = !1;
this.gotMoreTime = !1;
this.endView.active = !1;
this.selectedLines.splice(0, this.selectedLines.length);
this.enemys.splice(0, this.enemys.length);
this.helplines.splice(0, this.helplines.length);
this.helpPath.splice(0, this.helpPath.length);
this.helpShaked.splice(0, this.helpShaked.length);
this.isMoving = !1;
this.movesLeft = this.maxValidMoves;
this.moved = 0;
this.turnBackCount = 0;
this.lastDirection = -1;
if (null != e && e > 0) this.scheduleOnce(function() {
this.gameOver = !1;
this.onyRole = null;
this.initGame();
}, e); else {
this.gameOver = !1;
this.myRole = null;
this.initGame();
}
},
getSteps: function() {
var e = [], t = null, n = 0;
if (null == t) {
t = this.checkXY(this.stepsLines[0], 0, 0);
n = 0;
}
e.push(cc.v2(t.x, t.y));
for (var i = 1; n < this.stepsLines.length; ) for (var o = !0; n < this.stepsLines.length && o; ) {
t = this.checkXY(this.stepsLines[n], 0, 0);
e.push(cc.v2(t.x, t.y));
if (this.getCellByCoordinate(t)) {
if (this.checkCanMoveCount(this.checkMove(t)) > 2 && e.length > 1) {
o = !1;
i++;
}
}
n++;
}
return i;
},
help: function() {
if (!(this.gameOver || null == this.myRole || this.helpPath.length <= 0)) {
var e = null, t = 0;
if (this.selectedLines.length > 0) for (var n = this.helpPath.length - 1; n >= 0; n--) for (var i = this.checkXY(this.helpPath[n], 0, 0), o = cc.v2(i.x, i.y), a = this.selectedLines.length - 1; a >= 0; a--) {
var r = this.selectedLines[a];
if (null == e && o.equals(r)) {
e = o;
t = n;
break;
}
}
if (null == e) {
e = this.checkXY(this.helpPath[0], 0, 0);
t = 0;
}
this.showHelpLine(e, t);
}
},
showHelpLine: function(e, t) {
if (!(this.helpPath.length <= 0)) {
var n = cc.v2(e.x, e.y);
this.helplines.length > 0 && (n = this.helplines[this.helplines.length - 1]);
for (var i = 0; i < this.helpPath.length; i++) {
var a = this.helpPath[i];
if (n.equals(a)) {
n = cc.v2(a.x, a.y);
t = i;
break;
}
}
t < this.helpPath.length - 1 && this.helpCount--;
if (this.helplines.length <= 0) {
!n.equals(this.myRole.axialCoordinate) && o.isNeighbors(n, this.myRole.axialCoordinate) && this.helplines.push(cc.v2(this.myRole.axialCoordinate.x, this.myRole.axialCoordinate.y));
this.helplines.push(cc.v2(n.x, n.y));
}
for (var r = !0; ++t < this.helpPath.length && r; ) {
e = this.checkXY(this.helpPath[t], 0, 0);
this.helplines.push(cc.v2(e.x, e.y));
if (c = this.getCellByCoordinate(e)) {
this.checkCanMoveCount(this.checkMove(e)) > 2 && this.helplines.length > 1 && !c.isIce && this.helplines.length > this.selectedLines.length && (r = !1);
}
}
if (this.helplines.length > 1) for (i = 0; i < this.helplines.length; i++) {
var c, s = this.helplines[i];
(c = this.getCellByCoordinate(s)) && (0 == i ? c.showStartHelp(this.helplines[i + 1]) : i == this.helplines.length - 1 ? c.showEndHelp(this.helplines[this.helplines.length - 2]) : c.showHelp(this.helplines[i - 1], this.helplines[i + 1]));
}
}
},
update: function(e) {
if (!this.gameOver) {
if (this.enemys.length > 0) for (var t = 0; t < this.enemys.length; t++) {
var n = this.enemys[t];
this.roundMove(n);
}
if (this.allTowers.length > 0) for (t = 0; t < this.allTowers.length; t++) {
var i = this.allTowers[t];
this.towerShoot(i);
}
}
},
towerShoot: function(e) {
if (!e.isShooting) {
e.isShooting = !0;
e.bubble.active = !0;
var t = this.checkMove(e.bubbleAxialCoordinate), n = -1;
-1 != e.direction && t[e.direction] && (n = e.direction);
if (-1 == n) {
var i = cc.callFunc(function() {
e.bubble.getComponent("NormalAnimation").play();
}, this), o = cc.delayTime(1), a = cc.callFunc(function() {
e.bubbleAxialCoordinate = e.axialCoordinate;
e.bubble.position = cc.pCompMult(e.node.getPosition(), cc.v2(.5, .5));
e.bubble.opacity = 0;
}, this), r = cc.delayTime(e.delay), c = cc.callFunc(function() {
e.isShooting = !1;
e.bubble.opacity = 255;
}, this), s = cc.sequence(i, o, a, r, c);
e.bubble.runAction(s);
} else {
var l, u = e.bubbleAxialCoordinate.add(this.movePlus[n]), d = this.getCellByCoordinate(u), h = this.tileBox.convertToWorldSpaceAR(d.node.getPosition()), f = e.node.convertToNodeSpaceAR(h);
l = 1 == n ? cc.v2(-1 * f.y, -1 * f.x) : 2 == n ? cc.v2(-1 * f.x, -1 * f.y) : 3 == n ? cc.v2(f.y, f.x) : cc.v2(f.x, f.y);
var p = cc.moveTo(.3 * e.s, l.y, l.x);
i = cc.callFunc(function() {
e.bubbleAxialCoordinate = u;
e.isShooting = !1;
}, this), s = cc.sequence(p, i);
e.bubble.runAction(s);
}
}
},
roundMove: function(e) {
if (!e.isMoving) {
e.isMoving = !0;
var t = this.checkMove(e.axialCoordinate), n = -1;
if (-1 != e.direction && t[e.direction] && 1 == this.checkMoveDirectionCount(t, e.direction) || -1 != e.direction && t[e.direction] && Math.random() > .6) n = e.direction; else for (;-1 == n; ) {
var i = o.GetRandomNum(0, 3);
t[i] && (n = i);
}
e.direction = n;
var a = e.axialCoordinate.add(this.movePlus[n]), r = this.getCellByCoordinate(a).node.getPosition(), c = cc.moveTo(1, r.x, r.y), s = cc.callFunc(function() {
e.axialCoordinate = a;
e.isMoving = !1;
}, this), l = cc.sequence(c, s);
e.node.runAction(l);
}
},
onMouseDown: function(e) {
if (!this.gameOver && null != this.myRole) {
this.mouseIsDown = !0;
this.touchPos = this.tileBox.convertToNodeSpaceAR(e.getLocation());
}
},
onMouseMove: function(e) {
if (!this.gameOver && null != this.myRole && this.mouseIsDown) {
var t = this.tileBox.convertToNodeSpaceAR(e.getLocation()), n = t.x - this.touchPos.x, i = t.y - this.touchPos.y;
if (Math.abs(n) < 30 && Math.abs(i) < 30) return;
Math.abs(n) > Math.abs(i) ? n < 0 ? this.doAction(1, !0) : this.doAction(3, !0) : i > 0 ? this.doAction(0, !0) : this.doAction(2, !0);
this.mouseIsDown = !1;
}
},
getCellByCoordinate: function(e) {
for (var t = 0; t < this.allCells.length; t++) {
var n = this.allCells[t];
if (n.axialCoordinate.equals(e)) return n;
}
return null;
},
stopAllAction: function() {
cc.log("stopAllAction");
},
die: function() {
this.isinigame = !1;
this.unschedule(this.timeOutflow);
this.gameOver = !0;
this.myRole.playDie();
this.gameApplication.soundManager.playSound("error");
this.scheduleOnce(function() {
this.gameApplication.openMainView();
}.bind(this), 1);
},
showGameOver: function() {
D.sdk.showBanner();
D.sdk.recorderStop();
this.isinigame = !1;
if (null != bid && bid > 0 && null != mid && mid > 0 && null != lid && lid > 0) {
var e = [];
lid < 100 && e.push(lid + 1);
e.forEach(function(e) {
var t = "conf/level_detail/b_" + bid + "/" + mid + "/" + e;
window.gameApplication.getConf(t, null);
});
}
this.gameApplication.soundManager.playSound("gamewin");
this.unschedule(this.timeOutflow);
this.timeIsUpNode.active = !1;
var t = this;
this.gameOver = !0;
this.endView.active = !0;
this.stopAllAction();
var n = 0;
n = this.turnBackCount <= 0 ? 3 : this.turnBackCount <= 6 ? 2 : 1;
this.endView_title.string = 3 == n ? "很棒" : 2 == n ? "很好" : "清除";
this.endView_title.string = "完成";
this.endView_text.string = "您一共走了 " + this.moved + " 步";
this.giftBtn.active = !0;
SDK().getItem(bid + "_" + mid + "_" + lid, function(e) {
SDK().getItem("curIdx", function(e) {
var t = this.judgeIdx(mid, lid);
if (t + 1 > e) {
var n = {};
window.curIdx = t + 1;
n.curIdx = window.curIdx;
SDK().setItem(n, function() {
window.mainScirpt.initStage(window.curIdx);
}.bind(this));
}
}.bind(this));
if (e < 1) {
var t = {};
t[bid + "_" + mid + "_" + lid] = 1;
var n = 0;
SDK().setItem(t, function() {
++n >= 2 && this.scheduleOnce(function() {
var e = this.judgeIdx(mid, lid);
window.mainScirpt.initStage(e);
e % 10 == 0 && 0 != e && window.timeGiftScript.showTimeGiftView(2);
}.bind(this), 1);
}.bind(this));
SDK().getItem("all", function(e) {
e += 1;
SDK().setRankScore(2, e, "{}", null);
SDK().setItem({
all: e
}, function() {
++n >= 2 && this.scheduleOnce(function() {
var e = this.judgeIdx(mid, lid);
window.mainScirpt.initStage(e);
e % 10 == 0 && 0 != e && window.timeGiftScript.showTimeGiftView(2);
}.bind(this), 1);
}.bind(this));
}.bind(this));
SDK().getItem(bid + "_" + mid, function(e) {
e += 1;
var t = {};
t[bid + "_" + mid] = e;
SDK().setItem(t, null);
}.bind(this));
} else this.scheduleOnce(function() {}.bind(this), 1);
}.bind(this));
SDK().getItem(bid + "_" + mid + "_" + lid + "_moves", function(e) {
if (t.moved < e || e <= 0) {
var n = {};
n[bid + "_" + mid + "_" + lid + "_moves"] = t.moved;
SDK().setItem(n, null);
}
}.bind(this));
this.gameApplication.playTimes++;
},
StartRecourd: function() {
D.sdk.showShare("", function() {
backToMain();
}, !0);
},
backToMain: function() {
this.endView.active = !1;
this.gameApplication.openMainView();
},
judgeIdx: function(e, t) {
var n = 0;
if (t >= 50) {
t -= 50;
n = (n = 300) + 10 * (e - 1) + 50 * Math.floor((t - 1) / 10) + t % 10;
} else n = 10 * (e - 1) + 60 * Math.floor((t - 1) / 10) + (t - 1) % 10;
return n;
},
onOpAdClicked: function() {
null != this.opad_game_id && SDK().switchGameAsync(this.opad_game_id);
},
checkWin: function() {
var e = this.myRole.axialCoordinate.equals(this.endObj.axialCoordinate);
if (e) {
this.isinigame = !1;
this.showGameOver();
}
return e;
},
moveEnd: function() {
this.isMoving = !1;
if (!this.checkWin()) {
var e = this.checkMove();
this.gameApplication.soundManager.playSound("done");
if (this.getCellByCoordinate(this.myRole.axialCoordinate).isIce && e[this.lastDirection]) this.doAction(this.lastDirection, !0); else {
this.moved++;
this.movesLeft--;
if (this.turnBackCount > 0 && this.turnBackCount % 2 == 0 && !o.inArray(this.turnBackCount, this.helpShaked)) {
this.helpBtnShake();
this.helpShaked.push(this.turnBackCount);
}
this.myRole.setArrow(e[0], e[1], e[2], e[3]);
}
}
this.updateUI();
},
addSelectedLines: function(e) {
var t = this;
if (this.selectedLines.length >= 2 && e.equals(this.selectedLines[this.selectedLines.length - 2])) {
var n = this.selectedLines.pop();
this.getCellByCoordinate(n).hideLine();
} else this.selectedLines.push(cc.v2(e.x, e.y));
this.selectedLines.length > 1 && this.scheduleOnce(function() {
for (var e = 0; e <= t.selectedLines.length - 1; e++) {
var n = t.selectedLines[e];
(i = t.getCellByCoordinate(n)).hideLine();
}
for (e = 0; e <= t.selectedLines.length - 1; e++) {
n = t.selectedLines[e];
var i = t.getCellByCoordinate(n);
0 == e ? i.showStartLine(t.selectedLines[e + 1]) : e == t.selectedLines.length - 1 ? i.showEndLine(t.selectedLines[t.selectedLines.length - 2]) : i.showLine(t.selectedLines[e - 1], t.selectedLines[e + 1]);
}
}, .08);
},
doAction: function(e, t) {
if (!this.isMoving && !this.gameOver) {
this.isMoving = !0;
this.myRole.hideArrow();
var n = this, i = this.checkMove();
if (!t && this.checkMoveDirectionCount(i, e) > 1) this.moveEnd(); else if (i[e]) {
var o = this.myRole.axialCoordinate.add(this.movePlus[e]);
if (null != (l = this.getCellByCoordinate(o))) {
(0 == e ? 2 == this.lastDirection : 3 == e ? 1 == this.lastDirection : 1 == e ? 3 == this.lastDirection : 0 == this.lastDirection) && this.turnBackCount++;
this.lastDirection = e;
var a = l.node.getPosition(), r = cc.moveTo(.12, a.x, a.y), c = cc.callFunc(function() {
n.myRole.axialCoordinate = o;
n.isMoving = !1;
n.checkWin() || n.doAction(e, !1);
}, this);
this.addSelectedLines(o);
var s = cc.sequence(r, c);
n.myRole.node.runAction(s);
}
} else {
this.gameApplication.soundManager.playSound("done");
if (1 == this.checkMoveDirectionCount(i, e)) {
e = this.getkMoveDirection(i, e);
if (!this.checkWin()) {
var l;
if ((l = this.getCellByCoordinate(this.myRole.axialCoordinate)).isIce) this.moveEnd(); else {
this.isMoving = !1;
n.doAction(e, !0);
}
}
} else this.moveEnd();
}
}
},
getkMoveDirection: function(e, t) {
var n;
n = 0 == t ? 2 : 3 == t ? 1 : 1 == t ? 3 : 0;
for (var i = 0; i < e.length; i++) {
if (e[i] && i != n) return i;
}
},
checkCanMoveCount: function(e) {
for (var t = 0, n = 0; n < e.length; n++) {
e[n] && t++;
}
return t;
},
checkMoveDirectionCount: function(e, t) {
var n;
n = 0 == t ? 2 : 3 == t ? 1 : 1 == t ? 3 : 0;
for (var i = 0, o = 0; o < e.length; o++) {
e[o] && o != n && i++;
}
return i;
},
checkMove: function(e) {
null == e && (e = this.myRole.axialCoordinate);
var t = o.getNeighborsOBJ(e), n = !0, i = !0, a = !0, r = !0, c = this.getCellByCoordinate(e);
if (null != c) {
c.leftActive && (i = !1);
c.rightActive && (r = !1);
c.topActive && (n = !1);
c.bottomActive && (a = !1);
}
if (n) {
var s = this.getCellByCoordinate(t.t);
null != s && s.bottomActive && (n = !1);
}
if (a) {
var l = this.getCellByCoordinate(t.b);
null != l && l.topActive && (a = !1);
}
if (i) {
var u = this.getCellByCoordinate(t.l);
null != u && u.rightActive && (i = !1);
}
if (r) {
var d = this.getCellByCoordinate(t.r);
null != d && d.leftActive && (r = !1);
}
return [ n, i, a, r ];
},
checkMovePos: function(e) {
null == e && (e = this.myRole.axialCoordinate);
var t = o.getNeighborsOBJ(e), n = t.t, i = t.l, a = t.b, r = t.r, c = this.getCellByCoordinate(e);
if (null != c) {
c.leftActive && (i = cc.v2(-1, -1));
c.rightActive && (r = cc.v2(-1, -1));
c.topActive && (n = cc.v2(-1, -1));
c.bottomActive && (a = cc.v2(-1, -1));
}
if (n) {
var s = this.getCellByCoordinate(t.t);
null != s && s.bottomActive && (n = cc.v2(-1, -1));
}
if (a) {
var l = this.getCellByCoordinate(t.b);
null != l && l.topActive && (a = cc.v2(-1, -1));
}
if (i) {
var u = this.getCellByCoordinate(t.l);
null != u && u.rightActive && (i = cc.v2(-1, -1));
}
if (r) {
var d = this.getCellByCoordinate(t.r);
null != d && d.leftActive && (r = cc.v2(-1, -1));
}
return [ n, i, a, r ];
},
createEnemy: function(e) {
var t = l / 100;
if (!(e.length <= 0)) for (var n = 0; n < e.length; n++) {
var i, o = e[n], a = this.getCellByCoordinate(cc.v2(o.x, o.y)), r = Math.random();
(i = r < .33 ? cc.instantiate(this.enemyPrefab) : r < .66 ? cc.instantiate(this.enemyPrefab1) : cc.instantiate(this.enemyPrefab2)).parent = this.tileBox;
i.setScale(t);
i.setPosition(a.node.getPosition());
i.active = !0;
(o = i.getComponent(c)).axialCoordinate = a.axialCoordinate;
this.enemys.push(o);
}
},
createRole: function(e, t) {
var n = l / 100;
e = this.checkXY(e, 0, 0);
t = this.checkXY(t, 0, 0);
var i = this.getCellByCoordinate(cc.v2(e.x, e.y)), o = this.getCellByCoordinate(cc.v2(t.x, t.y)), a = cc.instantiate(this.rolePrefab);
a.parent = this.tileBox;
a.setScale(n);
a.setPosition(i.node.getPosition());
a.active = !0;
var c = a.getComponent(r);
this.myRole = c;
this.myRole.init();
this.myRole.axialCoordinate = i.axialCoordinate;
this.selectedLines.push(cc.v2(i.axialCoordinate.x, i.axialCoordinate.y));
var s = this.checkMove();
this.myRole.setArrow(s[0], s[1], s[2], s[3]);
var u = cc.instantiate(this.endPrefab);
u.parent = this.tileBox;
u.setScale(n);
u.setPosition(o.node.getPosition());
u.active = !0;
this.endNode = u;
var d = u.getComponent(r);
this.endObj = d;
this.endObj.axialCoordinate = o.axialCoordinate;
this.myRole.gameView = this;
this.myRole.setDark(4 == mid);
},
collisionCallback: function() {
this.die();
},
createGrid: function(e, t, n, r, c) {
this.gridOffset.x = 0;
this.gridOffset.y = 0;
Math.max(e.x, e.y);
var s = cc.winSize, u = this.tileBox.getContentSize(), d = u.height, h = s.width;
if (d < (l = (h - (lineWidth - lineWidth * e.x)) / e.x) * e.y) {
var f = ((h = u.height) - (lineWidth - lineWidth * e.y)) / e.y;
if (f < l) {
l = f;
this.gridOffset.x = .5 * (s.width - e.x * l + e.x * lineWidth);
}
}
var p, g = i = l;
this.levelDimensions = e;
var y = cc.v2(0, 0), v = cc.v2(0, 0), m = .5 * (u.height - this.levelDimensions.y * l + this.levelDimensions.y * lineWidth);
this.gridOffset.y = -1 * u.height + m;
for (var b = 0; b < this.levelDimensions.x; b++) for (var w = 0; w < this.levelDimensions.y; w++) {
y.x = b;
y.y = w;
(v = o.axialToScreen(y, i)).x += this.gridOffset.x;
v.y += this.gridOffset.y;
(p = cc.instantiate(this.hexCellPrefab)).parent = this.tileBox;
p.setPosition(v.add(cc.v2(0, 1e3)));
p.setContentSize(cc.size(g, g));
p.active = !0;
var _ = this;
w % 2 == 0 ? p.runAction(cc.sequence(cc.moveTo(.2 + .05 * y.y, v.x, v.y), cc.callFunc(function() {
_.gameApplication.soundManager.playSound("uplock");
}))) : p.runAction(cc.moveTo(.2 + .05 * y.y, v.x, v.y));
p.name = "grid" + b.toString() + "_" + w.toString();
p.zIndex = 0;
(C = p.getComponent(a)).scaleChild(g / 100, g / 100);
C.axialCoordinate = y;
this.allCells.push(C);
}
if (!(null == t || t.length <= 0)) {
for (_ = this, b = 0; b < t.length; b++) {
var S, A, C, I = t[b], T = _.checkXY(I.w1, 0, 0), O = _.checkXY(I.d1, 0, 0);
if (T.x < O.x || T.y > O.y) {
S = T;
A = O;
} else {
S = O;
A = T;
}
(C = this.getCellByCoordinate(cc.v2(S.x, S.y - 1))) ? S.x == A.x ? C.setLeft(!0) : C.setTop(!0) : (C = this.getCellByCoordinate(cc.v2(S.x, S.y))) ? S.x == A.x ? C.setRight(!0) : C.setBottom(!0) : (C = this.getCellByCoordinate(cc.v2(S.x - 1, S.y - 1))) && (S.x == A.x ? C.setRight(!0) : C.setBottom(!0));
}
this.scheduleOnce(function() {
this.scheduleOnce(function() {
if (null != n && n.length > 0) for (var e = 0; e < n.length; e++) {
var t = n[e], i = this.getCellByCoordinate(cc.v2(t.x, t.y));
if (null != i) {
i.setIce(!0);
var o = cc.instantiate(this.icePrefab);
o.parent = this.iceBox;
o.setPosition(i.node.getPosition());
o.setContentSize(i.node.getContentSize());
o.active = !0;
o.setScale(.3, .3);
o.runAction(cc.scaleTo(.35, 1, 1));
}
}
}.bind(this), 1);
if (null != r && r.length > 0) for (var e = 0; e < r.length; e++) {
var t, i, o = r[e], a = _.checkXY(o.w1, 0, 0), s = _.checkXY(o.d1, 0, 0), l = null;
if (a.x < s.x || a.y > s.y) {
t = a;
i = s;
} else {
t = s;
i = a;
}
1 == o.direction ? null == (l = this.getCellByCoordinate(cc.v2(Math.max(t.x, i.x) - 1, i.y))) && (l = this.getCellByCoordinate(cc.v2(Math.max(t.x, i.x), i.y))) : 3 == o.direction ? null == (l = this.getCellByCoordinate(cc.v2(Math.max(t.x, i.x), i.y))) && (l = this.getCellByCoordinate(cc.v2(Math.max(t.x, i.x) - 1, i.y))) : 0 == o.direction ? null == (l = this.getCellByCoordinate(cc.v2(t.x, Math.min(t.y, i.y)))) && (l = this.getCellByCoordinate(cc.v2(t.x, Math.max(t.y, i.y)))) : 2 == o.direction && null == (l = this.getCellByCoordinate(cc.v2(t.x, Math.max(t.y, i.y) - 1))) && (l = this.getCellByCoordinate(cc.v2(t.x, Math.max(t.y, i.y))));
if (null != l) {
if (t.x == i.x) if (1 == o.direction) {
l.setRightTower(!0);
this.pushTower(l.rightTower, l.axialCoordinate, o);
} else {
l.setLeftTower(!0);
this.pushTower(l.leftTower, l.axialCoordinate, o);
} else if (0 == o.direction) {
l.setTopTower(!0);
this.pushTower(l.topTower, l.axialCoordinate, o);
} else {
l.setBottomTower(!0);
this.pushTower(l.bottomTower, l.axialCoordinate, o);
}
l.node.zIndex = 1;
}
}
c && c();
}.bind(this), .5 + .05 * this.levelDimensions.y);
}
},
pushTower: function(e, t, n) {
var i = e.getComponent(s);
i.axialCoordinate = t;
i.init(n);
this.allTowers.push(i);
},
checkXY: function(e, t, n) {
null == e.x && (e.x = n);
null == e.y && (e.y = t);
return e;
},
updateUI: function() {
this.moves.string = this.movesLeft + "/" + this.maxValidMoves;
if (this.movesLeft <= 0 && 1 == mid) {
this.gameOver = !0;
window.gameApplication.showStepView(function(e) {
if (e) {
this.gameOver = !1;
this.movesLeft = 5;
this.updateUI();
} else {
this.isinigame = !1;
this.gameApplication.openMainView();
}
}.bind(this), !1);
}
},
setStar: function(e, t, n) {},
onBackBtnClicked: function(e) {
this.isinigame = !1;
null != this.gameApplication && this.gameApplication.soundManager.playSound("btn_click");
this.gameApplication.openMainView();
D.sdk.showBanner();
},
onNextBtnClicked: function(e) {
var t = e.target.getComponent(cc.Button);
t.interactable = !1;
this.scheduleOnce(function() {
t.interactable = !0;
}, 1);
this.gameApplication.soundManager.playSound("btn_click");
this.nextGame(t);
},
onPreviousBtnClicked: function(e) {
var t = e.target.getComponent(cc.Button);
t.interactable = !1;
this.scheduleOnce(function() {
t.interactable = !0;
}, 1);
this.gameApplication.soundManager.playSound("btn_click");
this.prevGame();
},
onReStarBtnClicked: function(e) {
this.isinigame = !1;
this.timeIsUpNode.active = !1;
var t = e.target.getComponent(cc.Button);
t.interactable = !1;
this.scheduleOnce(function() {
t.interactable = !0;
}, .2);
window.gameApplication.soundManager.playSound("btn_click");
window.gameApplication.openMainView();
},
onHelpBtnClicked: function(e) {
if (!(this.gameOver || null == this.myRole || this.helpPath.length <= 0)) if (this.helpCount > 0) {
window.gameApplication.soundManager.playSound("btn_click");
this.help();
} else {
window.gameApplication.soundManager.playSound("btn_click");
this.shareFriendTip.active = !0;
}
},
onWatchVideoBtnClicked: function(e) {
e.target.getComponent(cc.Button).interactable = !1;
var t = this;
SDK().showVideoAd(function(n) {
n ? t.helpCount = plusHelp : cc.log("播放视频广告失败");
e.target.getComponent(cc.Button).interactable = !0;
t.shareFriendTip.active = !1;
}.bind(this));
},
onShareInvBtnClicked: function(e) {
this.gameApplication.soundManager.playSound("btn_click");
var t = this;
this.gameApplication.soundManager.playSound("done");
SDK().getItem("all", function(e) {
D.sdk.openRewardAd(function() {
t.helpCount = plusHelp;
this.shareFriendTip.active = !1;
});
}.bind(this));
},
showInvAgain: function(e, t) {
var n = this;
this.invAgain.active = !0;
cc.find("box/btn_4", this.invAgain).getComponent(cc.Button).node.on("click", function() {
1 == e ? n.onShareInvBtnClicked(t) : 2 == e ? n.onShareBtnClicked(t) : 3 == e && n.getMoreTimeInv(t);
n.invAgain.active = !1;
}, this);
},
onCloseWatchVideoTipClicked: function() {
this.gameApplication.soundManager.playSound("btn_click");
this.shareFriendTip.active = !1;
},
onShareBtnClicked: function(e) {
var t = this;
this.gameApplication.soundManager.playSound("btn_click");
e.target.getComponent(cc.Button).interactable = !1;
e.target.active = !0;
this.gameApplication.soundManager.playSound("done");
SDK().getItem("all", function(n) {
SDK().share(n, function(n) {
e.target.getComponent(cc.Button).interactable = !0;
e.target.active = !0;
n || t.showInvAgain(2, e);
});
}.bind(this));
},
helpBtnShake: function() {
this.helpBtn.getComponent("AnimFunc").shake();
},
onGiftBtnClicked: function() {
this.receiveGiftNode.active = !1;
},
onPlayInterstitialGiftBtnClicked: function(e) {
var t = this;
t.gameApplication.soundManager.playSound("done");
SDK().showInterstitialAd(function(e) {
t.helpCount += 1;
t.receiveGiftNode.active = !0;
t.giftBtn.active = !1;
console.log("_______OKOK");
}, !0);
}
});
cc._RF.pop();
}, {
"../../Utils/Utils": "Utils",
"./Enemy": "Enemy",
"./HexCell": "HexCell",
"./Role": "Role",
"./Tower": "Tower"
} ],
GlobalEvent: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "39b1aRbTTZC7oyLUzRQDDs3", "GlobalEvent");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i, o, a = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), r = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("./EventDispatcher"));
var c = (o = i = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, r.default);
a(t, [ {
key: "pause",
value: function() {
this.publish(t.EVENT_HIDE);
}
}, {
key: "resume",
value: function() {
this.publish(t.EVENT_SHOW);
}
}, {
key: "changeAdState",
value: function(e) {
this.publish(t.CHANGE_AD_STATE, e);
}
} ], [ {
key: "instance",
value: function() {
this.ins || (this.ins = new t());
return this.ins;
}
} ]);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var e = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
cc.game.on(cc.game.EVENT_HIDE, function() {
e.pause();
});
cc.game.on(cc.game.EVENT_SHOW, function() {
e.resume();
});
return e;
}
return t;
}(), i.EVENT_HIDE = "EVENT_HIDE", i.EVENT_SHOW = "EVENT_SHOW", i.CHANGE_AD_STATE = "EVENT_CHANGE_AD_STATE", 
o);
n.default = c;
t.exports = n.default;
cc._RF.pop();
}, {
"./EventDispatcher": "EventDispatcher"
} ],
HexCell: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9f2d9wJS0FLXJ2cTn40JI4b", "HexCell");
cc.Class({
extends: cc.Component,
properties: {
help_end: {
default: null,
type: cc.Node
},
help_start: {
default: null,
type: cc.Node
},
line_end: {
default: null,
type: cc.Node
},
line_start: {
default: null,
type: cc.Node
},
_axialCoordinate: {
default: cc.v2(0, 0),
visible: !1
},
axialCoordinate: {
get: function() {
return this._axialCoordinate;
},
set: function(e) {
this._axialCoordinate = cc.v2(e.x, e.y);
this.onUpdateAxialCoordinate();
}
},
iceNode: {
default: null,
type: cc.Node
},
isIce: {
get: function() {
return this.iceNode.active;
}
},
leftTower: {
default: null,
type: cc.Node
},
rightTower: {
default: null,
type: cc.Node
},
bottomTower: {
default: null,
type: cc.Node
},
topTower: {
default: null,
type: cc.Node
},
hasTower: {
get: function() {
return this.leftTower.active || this.rightTower.active || this.bottomTower.active || this.topTower.active;
}
},
coordinateText: {
default: null,
type: cc.Label
},
left: {
default: null,
type: cc.Node
},
right: {
default: null,
type: cc.Node
},
top: {
default: null,
type: cc.Node
},
bottom: {
default: null,
type: cc.Node
},
leftActive: {
get: function() {
return this.left.active;
}
},
rightActive: {
get: function() {
return this.right.active;
}
},
topActive: {
get: function() {
return this.top.active;
}
},
bottomActive: {
get: function() {
return this.bottom.active;
}
}
},
onLoad: function() {
this.initHexcell();
},
start: function() {},
scaleChild: function(e, t) {
this.line_end.setScale(e, t);
this.line_start.setScale(e, t);
this.help_end.setScale(e, t);
this.help_start.setScale(e, t);
this.leftTower.getComponent("Tower").setScaleXY(e, t);
this.topTower.getComponent("Tower").setScaleXY(e, t);
this.rightTower.getComponent("Tower").setScaleXY(e, t);
this.bottomTower.getComponent("Tower").setScaleXY(e, t);
},
showStartLine: function(e) {
if (null != e) {
this.line_start.active = !0;
this.axialCoordinate.x == e.x ? this.axialCoordinate.y > e.y ? this.line_start.setRotation(90) : this.line_start.setRotation(-90) : this.axialCoordinate.x > e.x ? this.line_start.setRotation(180) : this.line_start.setRotation(0);
}
},
showEndLine: function(e) {
if (null != e) {
this.line_end.active = !0;
this.axialCoordinate.x == e.x ? this.axialCoordinate.y > e.y ? this.line_end.setRotation(90) : this.line_end.setRotation(-90) : this.axialCoordinate.x > e.x ? this.line_end.setRotation(180) : this.line_end.setRotation(0);
}
},
showLine: function(e, t) {
this.showStartLine(t);
this.showEndLine(e);
},
hideLine: function() {
this.line_start.active = !1;
this.line_end.active = !1;
},
showStartHelp: function(e) {
if (null != e) {
this.help_start.active = !0;
this.axialCoordinate.x == e.x ? this.axialCoordinate.y > e.y ? this.help_start.setRotation(90) : this.help_start.setRotation(-90) : this.axialCoordinate.x > e.x ? this.help_start.setRotation(180) : this.help_start.setRotation(0);
}
},
showEndHelp: function(e) {
if (null != e) {
this.help_end.active = !0;
this.axialCoordinate.x == e.x ? this.axialCoordinate.y > e.y ? this.help_end.setRotation(90) : this.help_end.setRotation(-90) : this.axialCoordinate.x > e.x ? this.help_end.setRotation(180) : this.help_end.setRotation(0);
}
},
showHelp: function(e, t) {
this.showStartHelp(t);
this.showEndHelp(e);
},
hideHelpLine: function() {
this.help_start.active = !1;
this.help_end.active = !1;
},
setIce: function(e) {
this.iceNode.active = !0;
},
setLeft: function(e) {
this.left.active = e;
},
setRight: function(e) {
this.right.active = e;
},
setTop: function(e) {
this.top.active = e;
},
setBottom: function(e) {
this.bottom.active = e;
},
setLeftTower: function(e) {
this.leftTower.active = e;
},
setRightTower: function(e) {
this.rightTower.active = e;
},
setTopTower: function(e) {
this.topTower.active = e;
},
setBottomTower: function(e) {
this.bottomTower.active = e;
},
initHexcell: function() {
this.reset();
},
onUpdateAxialCoordinate: function() {
this.coordinateText.string = parseInt(this.axialCoordinate.x) + "," + parseInt(this.axialCoordinate.y);
this.coordinateText.node.active = isDebug;
},
reset: function(e) {
!!arguments[0] && arguments[0];
this.setLeft(!1);
this.setRight(!1);
this.setTop(!1);
this.setBottom(!1);
this.setLeftTower(!1);
this.setRightTower(!1);
this.setTopTower(!1);
this.setBottomTower(!1);
}
});
cc._RF.pop();
}, {} ],
InterstitialAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "97bacVhLahDqpDP/J63fkgi", "InterstitialAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}();
var o = function() {
function e() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, e);
}
i(e, [ {
key: "show",
value: function(e) {}
}, {
key: "load",
value: function(e) {}
}, {
key: "isLoad",
value: function() {}
} ]);
return e;
}();
n.default = o;
t.exports = n.default;
cc._RF.pop();
}, {} ],
LanguageData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
var i = e("polyglot.min"), o = null;
window.i18n || (window.i18n = {
languages: {},
curLang: ""
});
0;
function a(e) {
return window.i18n.languages[e];
}
function r(e) {
e && (o ? o.replace(e) : o = new i({
phrases: e,
allowMissing: !0
}));
}
t.exports = {
init: function(e) {
if (e !== window.i18n.curLang) {
var t = a(e) || {};
window.i18n.curLang = e;
r(t);
this.inst = o;
}
},
t: function(e, t) {
if (o) return o.t(e, t);
},
inst: o,
updateSceneRenderers: function() {
for (var e = cc.director.getScene().children, t = [], n = 0; n < e.length; ++n) {
var i = e[n].getComponentsInChildren("LocalizedLabel");
Array.prototype.push.apply(t, i);
}
for (var o = 0; o < t.length; ++o) {
var a = t[o];
a.node.active && a.updateLabel();
}
for (var r = [], c = 0; c < e.length; ++c) {
var s = e[c].getComponentsInChildren("LocalizedSprite");
Array.prototype.push.apply(r, s);
}
for (var l = 0; l < r.length; ++l) {
var u = r[l];
u.node.active && u.updateSprite(window.i18n.curLang);
}
}
};
cc._RF.pop();
}, {
"polyglot.min": "polyglot.min"
} ],
LevelView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f23f1EV0cJDq6BQzHk3MAdR", "LevelView");
cc.Class({
extends: cc.Component,
properties: {
title: {
default: null,
type: cc.Label
},
starts: {
default: null,
type: cc.Node
},
pageView: {
default: null,
type: cc.PageView
},
content: {
default: null,
type: cc.Node
},
levelItem: {
default: null,
type: cc.Node
},
levelPage: {
default: null,
type: cc.Node
},
levels: {
default: {}
},
bid: {
default: 0,
type: cc.Integer
},
mid: {
default: 0,
type: cc.Integer
},
_lastOpenLid: {
default: 0,
type: cc.Integer
},
lastOpenLid: {
get: function() {
return this._lastOpenLid;
},
set: function(e) {
this._lastOpenLid = e;
this.updateCurrpage();
}
},
gameApplication: {
default: null,
type: Object
},
lastLid: {
default: 0,
type: cc.Integer
}
},
onLoad: function() {
this.gameApplication = cc.find("GameApplication").getComponent("GameApplication");
},
start: function() {},
init: function(e, t) {
this.title.string = "";
if (null == this.levels || Object.keys(this.levels).length <= 0 || this.bid != e || this.mid != t) {
this.bid = e;
this.mid = t;
var n = "conf/level_list/level_" + e + "_" + t;
this.gameApplication.getConf(n, function(e) {
this.levels = e;
this.initContents();
}.bind(this));
} else {
this.bid = e;
this.mid = t;
this.initContents();
}
var i = this;
SDK().getItem(e + "_" + t, function(n) {
i.starts.getComponent(cc.Label).string = n.toString();
var o = n + 1, a = [];
a.push(o);
o > 1 && a.push(o - 1);
a.forEach(function(n) {
var o = "conf/level_detail/b_" + e + "/" + t + "/" + n;
i.gameApplication.getConf(o, null);
});
}.bind(this));
},
initContents: function() {
var e = this;
e.hideAllItem();
this.title.string = e.levels.title;
this.lastLid = 0;
this.bid = e.levels.bid;
this.mid = e.levels.mid;
var t = 1;
e.levels.levels.forEach(function(n) {
e.initLevels(n, t);
t++;
});
this.pageView._updatePageView();
},
initLevels: function(e, t) {
var n = this;
cc.log("++++++++++open:" + e + "--idx:" + t + " -:- " + openAllLevel);
if (!(t < 1 || t > 4)) {
var i = cc.instantiate(this.levelPage);
i.active = !0;
this.pageView.addPage(i);
for (var o = i.getChildByName("content"), a = (e.total_level, function(i) {
var a = i.toString(), r = o.getChildByName(a);
if (i > e.total_level) r.active = !1; else {
var s = 25 * (t - 1) + i;
r.tag = s;
n.setItem(r, 0, !1, s);
c = n;
SDK().getItem(c.bid + "_" + c.mid + "_" + s, function(e) {
var t = !1;
if (s <= c.lastLid + 1 || e > 0) {
t = !0;
c.setItem(r, e, t, s);
} else openAllLevel && c.setItem(r, e, !0, s);
e > 0 && (c.lastLid = s);
}, r, s);
}
}), r = 1; r <= 25; r++) {
var c;
a(r);
}
}
},
setItem: function(e, t, n, i) {
cc.find("unlock", e).active = n;
cc.find("lock", e).active = !n;
cc.find("unlock/text", e).getComponent(cc.Label).string = i;
cc.find("lock/text", e).getComponent(cc.Label).string = i;
e.active = !0;
n && (this.lastOpenLid = i);
},
updateCurrpage: function() {
var e = Math.ceil(this.lastOpenLid / 30) - 1;
e = e >= 0 ? e : 0;
this.pageView.scrollToPage(e, !1);
},
hideAllItem: function() {
this.pageView.removeAllPages();
},
onBackBtnClicked: function() {
this.hideAllItem();
this.gameApplication.openMainView();
this.gameApplication.soundManager.playSound("btn_click");
}
});
cc._RF.pop();
}, {} ],
LoadLanguage: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "34293WOrRBK/o/Y7g1Pej5+", "LoadLanguage");
var i = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../SDK/SDKManager"));
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
cc.director.loadScene("main");
i.default.init(0);
window.D.sdk = i.default.getChannel();
}
});
cc._RF.pop();
}, {
"../SDK/SDKManager": "SDKManager"
} ],
LoadingView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "961c4S3IrNHB4M+zHyOMk6f", "LoadingView");
cc.Class({
extends: cc.Component,
properties: {
gameApplication: {
default: null,
type: Object
}
},
onLoad: function() {
this.gameApplication = cc.find("GameApplication").getComponent("GameApplication");
},
start: function() {
"undefined" != typeof bid && "undefined" != typeof mid && "undefined" != typeof lid && this.gameApplication.openLevelView(bid, mid);
},
onPlayBtnClicked: function() {
cc.log("onPlayBtnClicked");
this.gameApplication.openMainView();
this.gameApplication.soundManager.playSound("btn_click");
}
});
cc._RF.pop();
}, {} ],
LocalizedLabel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
var i = e("LanguageData");
cc.Class({
extends: cc.Component,
editor: {
executeInEditMode: !0,
menu: "i18n/LocalizedLabel"
},
properties: {
dataID: {
get: function() {
return this._dataID;
},
set: function(e) {
if (this._dataID !== e) {
this._dataID = e;
this.updateLabel();
}
}
},
_dataID: ""
},
onLoad: function() {
0;
i.inst || i.init();
this.fetchRender();
},
fetchRender: function() {
var e = this.getComponent(cc.Label);
if (e) {
this.label = e;
this.updateLabel();
} else ;
},
updateLabel: function() {
if (this.label) {
i.t(this.dataID) && (this.label.string = i.t(this.dataID));
} else cc.error("Failed to update localized label, label component is invalid!");
}
});
cc._RF.pop();
}, {
LanguageData: "LanguageData"
} ],
LocalizedSprite: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
var i = e("SpriteFrameSet");
cc.Class({
extends: cc.Component,
editor: {
executeInEditMode: !0,
inspector: "packages://i18n/inspector/localized-sprite.js",
menu: "i18n/LocalizedSprite"
},
properties: {
spriteFrameSet: {
default: [],
type: i
}
},
onLoad: function() {
this.fetchRender();
},
fetchRender: function() {
var e = this.getComponent(cc.Sprite);
if (e) {
this.sprite = e;
this.updateSprite(window.i18n.curLang);
} else ;
},
getSpriteFrameByLang: function(e) {
for (var t = 0; t < this.spriteFrameSet.length; ++t) if (this.spriteFrameSet[t].language === e) return this.spriteFrameSet[t].spriteFrame;
},
updateSprite: function(e) {
if (this.sprite) {
var t = this.getSpriteFrameByLang(e);
!t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame);
this.sprite.spriteFrame = t;
} else cc.error("Failed to update localized sprite, sprite component is invalid!");
}
});
cc._RF.pop();
}, {
SpriteFrameSet: "SpriteFrameSet"
} ],
LoginInterface: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a77d4BjL7FJJb29ZsWhFkjh", "LoginInterface");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}();
var o = function() {
function e() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, e);
}
i(e, [ {
key: "logout",
value: function() {}
}, {
key: "login",
value: function() {}
} ]);
return e;
}();
n.default = o;
t.exports = n.default;
cc._RF.pop();
}, {} ],
MainView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5a326YqAwhD+IfA3lH1oKVk", "MainView");
e("vm");
var i = [ cc.color(248, 181, 81, 255), cc.color(174, 93, 161, 255), cc.color(50, 177, 108, 255), cc.color(54, 46, 43, 255), cc.color(0, 0, 0, 255), cc.color(0, 160, 233, 255) ], o = cc.color(229, 229, 229, 255);
cc.Class({
extends: cc.Component,
properties: {
title: {
default: null,
type: cc.Label
},
hearts: {
default: null,
type: cc.Node
},
starts: {
default: null,
type: cc.Node
},
coins: {
default: null,
type: cc.Node
},
content: {
default: null,
type: cc.Node
},
scrollView: {
default: null,
type: cc.ScrollView
},
stageItem: {
default: null,
type: cc.Node
},
missionSpriteAtlas: {
default: null,
type: cc.SpriteAtlas
},
missions: {
default: null
},
gameApplication: {
default: null,
type: Object
},
missionNodes: {
default: []
},
curIdx: {
default: 0,
type: cc.Integer,
visible: !1
},
minIdx: {
default: 0,
type: cc.Integer,
visible: !1
},
maxIdx: {
default: 0,
type: cc.Integer,
visible: !1
},
uiAtlas: {
default: null,
type: cc.SpriteAtlas
},
reTime: {
default: 0,
type: cc.Float,
visible: !1
},
reviveBtn: {
default: null,
type: cc.Button
},
reviveTime: {
default: null,
type: cc.Label
},
reviveNum: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this.reTime = 300;
SDK().getItem("reHeart", function(e) {
this.reviveNum.string = e;
}.bind(this));
this.reviveHeartCount();
this.node.width = cc.winSize.width;
this.node.height = cc.winSize.height;
window.mainScirpt = this;
this.gameApplication = cc.find("GameApplication").getComponent("GameApplication");
this.init();
this.scrollView.node.on("scroll-to-bottom", this.scorllToBottom, this);
this.scrollView.node.on("scroll-to-top", this.scorllToTop, this);
this.minIdx = null;
this.maxIdx = null;
},
scorllToBottom: function(e) {
this.minIdx > 0 && this.initStage(this.minIdx - 10);
},
scorllToTop: function(e) {
this.maxIdx < 540 && this.initStage(this.maxIdx + 10);
},
init: function() {
null == this.missions || Object.keys(this.missions).length <= 0 ? this.gameApplication.getMissions(function(e) {
this.missions = e;
this.initContents();
}.bind(this)) : this.initContents();
SDK().getItem("all", function(e) {
this.starts.getComponent(cc.Label).string = e.toString();
}.bind(this));
},
onEnable: function() {
null != this.missions && Object.keys(this.missions).length > 0 && this.initContents();
this.refreashVal();
D.sdk.showBanner();
},
refreashVal: function() {
if (null != this.starts) {
SDK().getItem("all", function(e) {
this.starts.getComponent(cc.Label).string = e.toString();
}.bind(this));
SDK().getItem("hearts", function(e) {
this.hearts.getComponent(cc.Label).string = e.toString();
}.bind(this));
SDK().getItem("coins", function(e) {
this.coins.getComponent(cc.Label).string = e.toString();
}.bind(this));
}
},
initContents: function() {
this.content.active = !1;
if (null != window.lastPlay) {
this.initStage(window.lastPlay);
this.content.active = !0;
} else SDK().getItem("curIdx", function(e) {
null == e && (e = 0);
window.curIdx = e;
this.initMissionItem(e);
this.content.active = !0;
}.bind(this));
},
initMissionItem: function(e) {
e >= 10 && this.initStage(e - 10);
this.initStage(e);
e < 540 && this.initStage(e + 10);
this.scheduleOnce(function() {
this.menuClick(null, "goCur");
}.bind(this), 2);
},
initStage: function(e) {
var t = this.judgeType(e), n = this.missions[t.type], i = t.bigStage, a = this.missionNodes[i];
null == a && (a = cc.instantiate(this.stageItem));
a.parent = this.content;
a.name = "" + i;
SDK().getItem("lock_" + i, function(e) {
var r = !1;
e > 0 && (r = !1);
0 == i && (r = !1);
for (var c = 0; c < 10; c += 1) {
var s = cc.find("Bg/Stage" + c, a), l = c + i, u = this.judgeML(t, c);
if (u.lid > n.stars) s.active = !1; else {
s.active = !0;
var d = cc.find("Small", s).getComponent(cc.Sprite), h = cc.find("Num", d.node).getComponent(cc.Label), f = cc.find("CurPoint", d.node), p = cc.find("Lock", d.node);
if (l % 10 == 0) {
h.string = "";
0 == l && (h.string = "");
} else h.string = l;
if (l == window.curIdx) {
f.active = !0;
f.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 20)), cc.moveBy(.5, cc.v2(0, -20)))));
var g = u.mid, y = u.lid;
if (null != g && g > 0 && null != y && y > 0) {
var v = [];
y > 1 && v.push(y - 1);
v.push(y);
y < 100 && v.push(y + 1);
v.forEach(function(e) {
var t = "conf/level_detail/b_1/" + g + "/" + e;
window.gameApplication.getConf(t, null);
});
}
} else {
f.stopAllActions();
f.active = !1;
}
if (l == i) {
d.spriteFrame = this.uiAtlas.getSpriteFrame(t.type + "Big");
d.node.color = cc.color(255, 255, 255, 255);
} else d.node.color = o;
if (r) {
p.active = !0;
s.off(cc.Node.EventType.TOUCH_END);
if (l % 10 == 0) {
p.active = !1;
(m = {}).mid = u.mid;
m.lid = u.lid;
m.bigStage = t.bigStage;
m.idx = c;
this.initStageClick(m, s, r);
}
} else {
p.active = !1;
var m;
(m = {}).mid = u.mid;
m.lid = u.lid;
m.bigStage = t.bigStage;
m.idx = c;
window.curIdx;
this.initStageClick(m, s, r);
this.checkstagePass(u, l, d, t);
}
}
}
a.active = !0;
this.missionNodes[i] = a;
(i > this.maxIdx || null == this.maxIdx) && (this.maxIdx = i);
if (i < this.minIdx || null == this.minIdx) {
this.minIdx = i;
a.setSiblingIndex(0);
}
}.bind(this));
},
checkstagePass: function(e, t, n, o) {
SDK().getItem("1_" + e.mid + "_" + e.lid, function(e) {
e > 0 && t % 10 != 0 && (n.node.color = i[o.type]);
}.bind(this));
},
initStageClick: function(e, t, n) {
var i = cc.find("GoGame", this.node);
t.off(cc.Node.EventType.TOUCH_END);
t.on(cc.Node.EventType.TOUCH_END, function(o) {
null != i && (i.active = !0);
this.gameApplication.soundManager.playSound("btn_click");
var a = o.target.name.substr(5, 6);
a % 10 == 0 && 0 != a && n ? this.gameApplication.showSharaView(function(t) {
if (t) {
var n = {};
n["lock_" + e.bigStage] = 1;
SDK().setItem(n, function() {
this.initStage(e.bigStage);
}.bind(this));
}
null != i && (i.active = !1);
}.bind(this)) : SDK().getItem("hearts", function(o) {
if (o > 0) {
o -= 1;
SDK().setItem({
hearts: o
});
null != this.hearts && (this.hearts.getComponent(cc.Label).string = o);
window.gameApplication.flyReward(1, "heartSprite", t, this.hearts, function() {
this.goGame(e, t, n);
}.bind(this));
} else window.gameApplication.showHeartView(function(a) {
if (a) {
o = 4;
null != this.hearts && (this.hearts.getComponent(cc.Label).string = o);
SDK().setItem({
hearts: o
});
window.gameApplication.flyReward(1, "heartSprite", t, this.hearts, function() {
this.goGame(e, t, n);
}.bind(this));
} else null != i && (i.active = !1);
}.bind(this), !1);
}.bind(this));
}, this);
},
goGame: function(e, t, n) {
window.bid = 1;
window.mid = e.mid;
window.lid = e.lid;
this.gameApplication.openGameView();
},
judgeType: function(e) {
var t = 0, n = 60, i = !1;
if (e >= 300) {
e -= 300;
i = !0;
n = 50;
}
for (;e >= n; ) {
e -= n;
t += 1;
}
e = Math.floor(e / 10);
var o = {};
o.type = e;
o.count = t;
o.bigStage = 10 * e + t * n;
i && (o.bigStage = o.bigStage + 300);
return o;
},
judgeML: function(e, t) {
var n = {};
n.mid = e.type + 1;
var i = 0;
e.bigStage >= 300 && (i = 5);
n.lid = 1 + t + 10 * (i + e.count);
return n;
},
hideAllItem: function() {
this.content.childrenCount > 0 && this.content.children.forEach(function(e) {
e.active = !1;
e.destroy();
});
},
menuClick: function(e, t) {
window.gameApplication.soundManager.playSound("btn_click");
if ("addHeart" == t) window.gameApplication.showHeartView(function(e) {
e && SDK().getItem("hearts", function(e) {
e += 5;
window.gameApplication.flyReward(5, "heartSprite", window.mainScirpt.hearts, null);
null != this.hearts && (this.hearts.getComponent(cc.Label).string = e);
SDK().setItem({
hearts: e
});
}.bind(this), !1);
}.bind(this), !1); else if ("addCoin" == t) window.gameApplication.showCoinView(function(e) {
e && SDK().getItem("coins", function(e) {
e += 100;
window.gameApplication.flyReward(10, "coin", window.mainScirpt.coins, null);
null != this.coins && (this.coins.getComponent(cc.Label).string = e);
SDK().setItem({
coins: e
});
}.bind(this), !1);
}.bind(this), !1); else if ("goCur" == t) {
var n = this.judgeType(window.curIdx), i = n.bigStage, o = this.missionNodes[i];
if (null == o) return;
var a = 995;
a = a * (5 - (window.curIdx - n.bigStage)) / 10;
var r = this.scrollView.getMaxScrollOffset();
this.scrollView.scrollToOffset(cc.v2(0, r.y - o.y + a), .5);
} else if ("reHeart" == t) {
if (0 == parseInt(this.reviveNum.string)) return;
this.reviveNum.string = 0;
SDK().getItem("reHeart", function(e) {
SDK().setItem({
reHeart: 0
}, function() {
SDK().getItem("hearts", function(t) {
t = parseInt(t);
t += e;
Math.abs(this.node.y - 0) < 10 && window.gameApplication.flyReward(e, "heartSprite", window.mainScirpt.hearts, this.reviveBtn.node, function() {
null != window.mainScirpt.hearts && (window.mainScirpt.hearts.getComponent(cc.Label).string = t.toString());
}.bind(this));
SDK().setItem({
hearts: t
}, null);
}.bind(this));
}.bind(this));
}.bind(this));
}
},
reviveHeartCount: function() {
if (this.reTime <= 0) {
this.reTime = 300;
SDK().getItem("reHeart", function(e) {
e += 1;
this.reviveNum.string = e;
SDK().setItem({
reHeart: e
});
}.bind(this));
} else {
var e = this.reTime, t = e / 60 < 10 ? "0" + Math.floor(e / 60) : "" + Math.floor(e / 60), n = e % 60 < 10 ? "0" + Math.floor(e % 60) : "" + Math.floor(e % 60);
if (e <= 0) {
t = "00";
n = "00";
}
this.reviveTime.string = t + ":" + n;
}
this.scheduleOnce(function() {
this.reviveHeartCount();
}.bind(this), 1);
},
update: function(e) {
this.reTime = this.reTime - e;
}
});
cc._RF.pop();
}, {
vm: 7
} ],
MusicManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f6c044dN/JPs7BAJhkfThIW", "MusicManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = e("../base/BaseRewardAd"), a = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../event/GlobalEvent"));
var r = "MusicManagerNamexxx", c = function() {
function e() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, e);
this.sourcePool = {};
this.musicFlag = 1;
this.musicFlag = cc.sys.localStorage.getItem(r);
this.musicFlag = this.musicFlag || 1;
cc.log("MusicManager constructor ", this.musicFlag);
a.default.instance().addEventListener(a.default.EVENT_HIDE, this.eventHide, this);
a.default.instance().addEventListener(a.default.EVENT_SHOW, this.eventShow, this);
a.default.instance().addEventListener(a.default.CHANGE_AD_STATE, this.changeAdState, this);
}
i(e, [ {
key: "changeAdState",
value: function(e) {
cc.log(" changeAdState ", e);
e == o.RewardADState.close ? this.eventShow() : this.eventHide();
}
}, {
key: "eventHide",
value: function() {
cc.log(" eventHide this.getMusicFlag()", this.getMusicFlag());
this.getMusicFlag() && this.openName && this.pause();
}
}, {
key: "eventShow",
value: function() {
var e = o.RewardADState.close;
cc.log(" eventShow this.getMusicFlag()", this.getMusicFlag());
this.getMusicFlag() && e == o.RewardADState.close ? this.openName && this.play(this.openName) : cc.audioEngine.stopMusic();
}
}, {
key: "musicOpen",
value: function() {
this.openName ? this.play(this.openName) : this.resume();
}
}, {
key: "musicClose",
value: function() {
this.pause();
}
}, {
key: "getMusicFlag",
value: function() {
return 1 == this.musicFlag;
}
}, {
key: "open",
value: function(e) {
this.musicFlag = 1;
this.setItem(this.musicFlag);
this.play(e);
}
}, {
key: "setItem",
value: function(e) {
cc.sys.localStorage.setItem(r, e);
}
}, {
key: "close",
value: function() {
this.setItem(2);
if (this.tempName) {
this.stop(this.tempName);
this.tempName = null;
}
this.musicFlag = cc.sys.localStorage.getItem(r);
cc.log(" close musicFlag is ", this.musicFlag);
}
}, {
key: "play",
value: function(e) {
var t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
this.openName = e;
if (this.tempName) {
this.stop(this.tempName);
this.tempName = null;
}
this.tempName = e;
cc.loader.loadRes(e, cc.AudioClip, function(i, o) {
if (i) cc.log("AudioSource err ", i); else {
var a = cc.audioEngine.playMusic(o, n);
t.sourcePool[e] = a;
n || cc.audioEngine.setFinishCallback(a, t.stop.bind(t, e));
}
});
}
}, {
key: "pause",
value: function() {
this.isPlaying() && cc.audioEngine.pauseMusic();
}
}, {
key: "resume",
value: function() {
this.isPlaying() ? cc.log(" is already playing") : cc.audioEngine.resumeMusic();
}
}, {
key: "stop",
value: function(e) {
if (this.isPlaying()) {
cc.audioEngine.stopMusic();
if (e) {
this.sourcePool[e] && (this.sourcePool[e] = null);
}
}
}
}, {
key: "setVolume",
value: function(e) {
cc.audioEngine.setMusicVolume(e);
}
}, {
key: "isPlaying",
value: function() {
return cc.audioEngine.isMusicPlaying();
}
} ], [ {
key: "instance",
value: function() {
this.ins || (this.ins = new e());
return this.ins;
}
} ]);
return e;
}();
n.default = c;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseRewardAd": "BaseRewardAd",
"../event/GlobalEvent": "GlobalEvent"
} ],
NativeAdItemModel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cb3c2ZoSQpAF53/xh44NMKB", "NativeAdItemModel");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}();
var o = function() {
function e() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, e);
}
i(e, [ {
key: "initWithOppo",
value: function(e) {
this.adId = e.adId;
this.title = e.title;
this.desc = e.desc;
this.iconUrlList = e.iconUrlList;
this.imgUrlList = e.imgUrlList;
this.logoUrl = e.logoUrl;
this.clickBtnTxt = e.clickBtnTxt;
this.creativeType = e.creativeType;
this.interactionType = e.interactionType;
}
}, {
key: "getID",
value: function() {
return this.adId;
}
}, {
key: "getTitle",
value: function() {
return this.title;
}
}, {
key: "getDesc",
value: function() {
return this.desc;
}
}, {
key: "getIconList",
value: function() {
return this.iconUrlList;
}
}, {
key: "getImgList",
value: function() {
return this.imgUrlList;
}
}, {
key: "getButtonText",
value: function() {
return this.clickBtnTxt;
}
} ]);
return e;
}();
n.default = o;
t.exports = n.default;
cc._RF.pop();
}, {} ],
NormalAnimation: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "43480EzecBHBogcLHmzK8wB", "NormalAnimation");
cc.Class({
extends: cc.Component,
properties: {
loop: !0,
isplay: !0,
sprite: {
default: null,
type: cc.Sprite
},
sprites: {
default: [],
type: [ cc.SpriteFrame ]
},
fps: {
default: 5,
type: cc.Integer
},
index: {
default: 0,
type: cc.Integer,
visible: !1
},
delta: {
default: 0,
type: cc.Integer,
visible: !1
},
rotationForever: !1
},
onLoad: function() {
this.rotationForever && this.rotation();
},
rotation: function() {
var e = cc.repeatForever(cc.rotateBy(.3, 90));
this.rotationSeq = this.node.runAction(e);
},
play: function() {
this.scheduleOnce(function() {
null != this.rotationSeq && this.node.stopAction(this.rotationSeq);
}, .1);
this.index = 0;
this.delta = 0;
this.isplay = !0;
this.node.opacity = 255;
this.sprite.node.active = !0;
},
update: function(e) {
if (this.isplay) {
this.delta += e;
if (this.fps > 0 && this.sprites.length > 0) {
var t = 1 / this.fps;
if (t < this.delta) {
this.delta = t > 0 ? this.delta - t : 0;
this.sprite.spriteFrame = this.sprites[this.index];
this.index = this.index + 1 >= this.sprites.length ? 0 : this.index + 1;
if (this.index <= 0 && 0 == this.loop) {
this.rotation();
this.isplay = !1;
this.sprite.spriteFrame = this.sprites[0];
this.node.opacity = 0;
}
}
}
}
}
});
cc._RF.pop();
}, {} ],
OppoBannerAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "97dd87vjaVAlpyvWUqF4Gue", "OppoBannerAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../base/BaseBanner"));
var a = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
return function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
}
i(t, [ {
key: "create",
value: function(e) {
cc.log(" create BaseBanner ad laod this.adUnitID", this.adUnitID);
this.destroyBanner();
this.bannerAd = qg.createBannerAd({
posId: this.adUnitID,
style: {}
});
var t = this;
this.bannerAd.onShow(function n() {
t.bannerAd.offShow(n);
e(null);
console.log("banner  ad load success");
});
this.bannerAd.onError(function n(i) {
e(i);
console.log("banner ad load fail  ", i);
t.bannerAd.offError(n);
});
this.bannerAd.onHide(function e() {
t.bannerAd.offHide(e);
});
}
}, {
key: "show",
value: function() {
cc.log("show  OppoBanner");
this.bannerAd.show();
}
}, {
key: "hide",
value: function() {
this.bannerAd.hide();
}
}, {
key: "destroy",
value: function() {
this.bannerAd.destroy();
}
}, {
key: "getHeight",
value: function() {
return 120;
}
} ]);
return t;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseBanner": "BaseBanner"
} ],
OppoChannel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7c6b2eyQGRERZHiwHc7bTF6", "OppoChannel");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = r(e("../base/BaseChannel")), a = (r(e("./OppoBannerAd")), r(e("./OppoInsertAd")), 
r(e("./OppoRewardAd")), r(e("../dev/DevLogin")));
r(e("./OppoNativeAd"));
function r(e) {
return e && e.__esModule ? e : {
default: e
};
}
var c = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t(e, n) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var i = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
i.appId = "";
i.adIds = null;
i.adIds = n;
i.appId = n.appId;
i.loginMgr = new a.default();
return i;
}
i(t, [ {
key: "isVideoLvUp",
value: function() {
return !0;
}
}, {
key: "sevenButtonNum",
value: function() {
return 1;
}
}, {
key: "vibrateShort",
value: function() {
qg.vibrateShort();
}
}, {
key: "activeSkillLabel",
value: function() {
return "观看视频";
}
}, {
key: "showShare",
value: function(e, t) {
this.openRewardAd(function(e) {
e && t();
});
}
}, {
key: "init",
value: function() {
qg.initAdService({
appId: this.appId,
isDebug: !0,
success: function(e) {},
fail: function(e) {
console.log("initAdService fail:" + e.code + e.msg);
},
complete: function(e) {
console.log("initAdService complete");
}
});
}
} ]);
return t;
}();
n.default = c;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseChannel": "BaseChannel",
"../dev/DevLogin": "DevLogin",
"./OppoBannerAd": "OppoBannerAd",
"./OppoInsertAd": "OppoInsertAd",
"./OppoNativeAd": "OppoNativeAd",
"./OppoRewardAd": "OppoRewardAd"
} ],
OppoInsertAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0206dD0yDtDv7joApv196ZJ", "OppoInsertAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../base/InterstitialAd"));
var a = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t(e) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var n = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
n.interstitialAd = null;
n.finish = !1;
n.load(e);
return n;
}
i(t, [ {
key: "show",
value: function(e) {
cc.log(" show insert ad ");
this.interstitialAd && this.interstitialAd.load();
}
}, {
key: "isLoad",
value: function() {
return this.finish;
}
}, {
key: "load",
value: function(e) {
var t = this;
this.interstitialAd = qg.createInsertAd({
posId: e
});
cc.log(" insert ad laod ", e);
this.interstitialAd.onLoad(function() {
console.log("插屏广告加载成功");
t.finish = !0;
t.interstitialAd.show();
});
this.interstitialAd.onError(function(e) {
console.log("VivoInsertAd load fail ", e);
t.finish = !1;
});
}
} ]);
return t;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/InterstitialAd": "InterstitialAd"
} ],
OppoNativeAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "24192tmi4xMT5hnYFPPCZD7", "OppoNativeAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = c(e("../base/BaseNativeAd")), a = c(e("../base/NativeAdItemModel")), r = e("../ChannelID");
function c(e) {
return e && e.__esModule ? e : {
default: e
};
}
var s = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
return function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
}
i(t, [ {
key: "create",
value: function(e) {
console.log("OppoNativeAd create 1111");
this.destroyNative();
console.log("OppoNativeAd create 2222", this.adUnitID);
this.nativeAd = qg.createNativeAd({
posId: this.adUnitID
});
console.log("OppoNativeAd create 33333", this.nativeAd);
var t = this;
this.nativeAd.onLoad(function n(i) {
console.log("OppoNativeAd  ad load success", i);
t.nativeAd.offLoad(n);
e(null);
if (i.adList) {
for (var o = 0; o < i.adList.length; o++) {
var c = i.adList[o], s = new a.default();
s.initWithOppo(c);
t.adItems.push(s);
}
console.log("OppoNativeAd onLoad ================  ", i.adList);
t.publish(r.SDKEvent.NATIVE_AD_LOAD_FINISH, t.adItems);
}
});
this.nativeAd.onError(function n(i) {
console.log("OppoNativeAd ad load fail  ", i);
e(i);
t.nativeAd.offError(n);
});
this.nativeAd.load();
}
}, {
key: "reportAdClick",
value: function(e) {
this.nativeAd && this.nativeAd.reportAdClick({
adId: e
});
}
}, {
key: "reportAdShow",
value: function(e) {
this.nativeAd && this.nativeAd.reportAdShow({
adId: e
});
}
}, {
key: "destroy",
value: function() {
this.nativeAd.destroy();
}
} ]);
return t;
}();
n.default = s;
t.exports = n.default;
cc._RF.pop();
}, {
"../ChannelID": "ChannelID",
"../base/BaseNativeAd": "BaseNativeAd",
"../base/NativeAdItemModel": "NativeAdItemModel"
} ],
OppoRewardAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7d49asfWF9E+o7VY64cJFIs", "OppoRewardAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = e("../base/BaseRewardAd"), a = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(o);
var r = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, a.default);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
return function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
}
i(t, [ {
key: "createVideoAd",
value: function(e) {
var t = this;
this.rewardedVideoAd = qg.createRewardedVideoAd({
posId: e
});
this.rewardedVideoAd.onLoad(function() {
console.log("激励视频已加载");
});
this.rewardedVideoAd.onError(function(e) {
console.log("激励视频异常", e);
t.rewardCallback && t.rewardCallback(!1);
});
this.rewardedVideoAd.onClose(function(e) {
t.state = o.RewardADState.close;
if (e && e.isEnded) {
console.log("正常播放结束，可以下发游戏奖励");
t.rewardCallback(!0);
} else {
console.log("播放中途退出，不下发游戏奖励");
t.rewardCallback(!1);
}
});
}
} ]);
return t;
}();
n.default = r;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseRewardAd": "BaseRewardAd"
} ],
Player: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e32198K/PFAYI3D//JNhj6H", "Player");
cc.Class({
extends: cc.Component,
properties: {
age: {
default: 0,
type: cc.Integer
},
avatar: {
default: ""
},
group_id: {
default: 0,
type: cc.Integer
},
is_rebot: {
default: 0,
type: cc.Integer
},
pname: {
default: ""
},
score: {
default: 0,
type: cc.Integer
},
sex: {
default: 0,
type: cc.Integer
},
user_id: {
default: 0,
type: cc.Integer
}
},
setUserInfo: function(e) {
this.age = e.age;
this.avatar = e.avatar;
this.group_id = e.group_id;
this.is_rebot = e.is_rebot;
this.pname = this.substrName(e.name, 6);
this.score = e.score;
this.sex = e.sex;
this.user_id = e.user_id;
},
substrName: function(e, t) {
if (e.replace(/[\u4e00-\u9fa5]/g, "**").length <= t) return e;
for (var n = 0, i = "", o = 0; o < e.length; o++) {
/[\u4e00-\u9fa5]/.test(e[o]) ? n += 2 : n += 1;
if (n > t) break;
i += e[o];
}
return i + " ...";
}
});
cc._RF.pop();
}, {} ],
RankView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "04fa0UaF89AfJ9fdL6pdcUD", "RankView");
cc.Class({
extends: cc.Component,
properties: {
worldBtn: {
default: null,
type: cc.Node
},
friendBtn: {
default: null,
type: cc.Node
},
worldList: {
default: null,
type: cc.Node
},
friendList: {
default: null,
type: cc.Node
},
worldContent: {
default: null,
type: cc.Node
},
friendContent: {
default: null,
type: cc.Node
},
headSpriteList: {
default: {},
visible: !1
},
worldPlayer: {
default: [],
visible: !1
},
friendPlayer: {
default: [],
visible: !1
},
worldUIPlayer: {
default: [],
visible: !1
},
friendUIPlayer: {
default: [],
visible: !1
},
prefab_player: {
default: null,
type: cc.Prefab
}
},
onEnable: function() {
this.LoadRank();
},
menuClick: function(e, t) {
window.gameApplication.soundManager.playSound("btn_click");
"openRank" == t ? window.gameApplication.openRankView(!0) : "closeRank" == t && window.gameApplication.openRankView(!1);
},
LoadRank: function() {
SDK().getFriendsRank(2, 20, 0, function(e) {
this.GetFriendRank(e);
}.bind(this));
},
GetFriendRank: function(e) {
this.friendPlayer = e;
for (var t = 0; t < this.friendPlayer.length; t += 1) {
var n, i, o, a, r, c;
if (t >= this.friendUIPlayer.length) {
i = (n = cc.instantiate(this.prefab_player)).getChildByName("Head").getComponent(cc.Sprite);
o = n.getChildByName("Name").getComponent(cc.Label);
a = n.getChildByName("No").getComponent(cc.Label);
r = n.getChildByName("Score").getChildByName("Num").getComponent(cc.Label);
c = n.getChildByName("Play");
this.friendUIPlayer[t] = {};
this.friendUIPlayer[t].playerBar = n;
this.friendUIPlayer[t].Head = i;
this.friendUIPlayer[t].Name = o;
this.friendUIPlayer[t].No = a;
this.friendUIPlayer[t].Score = r;
this.friendUIPlayer[t].playBtn = c;
} else {
n = this.friendUIPlayer[t].playerBar;
i = this.friendUIPlayer[t].Head;
o = this.friendUIPlayer[t].Name;
a = this.friendUIPlayer[t].No;
r = this.friendUIPlayer[t].Score;
c = this.friendUIPlayer[t].playBtn;
}
n.parent = this.friendContent;
n.active = !1;
this.LoadSprite(this.friendPlayer[t].headUrl, i, this.headSpriteList[this.friendPlayer[t].id]);
o.string = this.friendPlayer[t].name;
o.node.active = !0;
a.string = this.friendPlayer[t].No;
a.node.active = !0;
r.string = this.friendPlayer[t].score;
r.node.active = !0;
this.friendPlayer[t].id == SDK().getSelfInfo().id ? c.active = !1 : c.active = !0;
c.tag = this.friendPlayer[t].id;
c.off(cc.Node.EventType.TOUCH_END);
c.on(cc.Node.EventType.TOUCH_END, function(e) {
SDK().playWith(e.target.tag, null, function(e) {
e && SDK().getItem("coins", function(e) {
e += 20;
window.gameApplication.flyReward(2, "coin", window.mainScirpt.coins, function() {
this.node.active && window.gameApplication.openGameView(!0);
null != window.mainScirpt.coins && (window.mainScirpt.coins.getComponent(cc.Label).string = e);
}.bind(this));
SDK().setItem({
coins: e
});
}.bind(this), !1);
}.bind(this));
}.bind(this), this);
}
if (this.friendPlayer.length < this.friendUIPlayer.length) for (t = this.friendPlayer.length; t < this.friendUIPlayer.length; t += 1) this.friendUIPlayer[t].playerBar.active = !1;
},
GetWorldRank: function(e) {
this.worldPlayer = e;
for (var t = !1, n = 0; n < this.worldPlayer.length; n += 1) this.LoadRankData(n, this.worldPlayer[n]) && (t = !0);
var i = this.worldPlayer.length;
if (!t) {
i += 1;
SDK().getRankScore(2, function(e) {
this.LoadRankData(i - 1, e);
}.bind(this));
}
if (i < this.worldUIPlayer.length) for (n = this.worldPlayer.length; n < this.worldUIPlayer.length; n += 1) this.worldUIPlayer[n].playerBar.active = !1;
},
LoadRankData: function(e, t) {
var n, i, o, a, r, c = !1;
if (e >= this.worldUIPlayer.length) {
i = (n = cc.instantiate(this.prefab_player)).getComponent(cc.Sprite);
o = n.getChildByName("No").getComponent(cc.Label);
a = n.getChildByName("Score").getChildByName("Num").getComponent(cc.Label);
r = n.getChildByName("HeadMask").getChildByName("Head").getComponent(cc.Sprite);
n.getChildByName("Name").active = !1;
this.worldUIPlayer[e] = {};
this.worldUIPlayer[e].playerBar = n;
this.worldUIPlayer[e].mainBg = i;
this.worldUIPlayer[e].No = o;
this.worldUIPlayer[e].Score = a;
this.worldUIPlayer[e].Head = r;
} else {
n = this.worldUIPlayer[e].playerBar;
i = this.worldUIPlayer[e].mainBg;
o = this.worldUIPlayer[e].No;
a = this.worldUIPlayer[e].Score;
r = this.worldUIPlayer[e].Head;
}
n.color = e % 2 == 0 ? cc.color(248, 181, 81, 255) : cc.color(254, 152, 0, 255);
o.node.active = !0;
a.node.active = !0;
n.name = t.id;
n.parent = this.worldContent;
t.id == SDK().getSelfInfo().id && (c = !0);
n.getChildByName("Play").active = !1;
o.string = t.no;
a.string = t.score;
this.LoadSprite(t.headUrl, r, this.headSpriteList[t.id]);
return c;
},
LoadSprite: function(e, t, n) {
if (null == n) cc.loader.load(e, function(e, i) {
n = new cc.SpriteFrame(i);
t.spriteFrame = n;
t.node.parent.active = !0;
}); else {
t.spriteFrame = n;
t.node.parent.active = !0;
}
}
});
cc._RF.pop();
}, {} ],
Role: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "01249Rk7stLqpgK0u1Ta5FD", "Role");
e("./HexCell");
cc.Class({
extends: cc.Component,
properties: {
bg: {
default: null,
type: cc.Node
},
die: {
default: null,
type: cc.Node
},
arrowNode: {
default: null,
type: cc.Node
},
leftNode: {
default: null,
type: cc.Node
},
rightNode: {
default: null,
type: cc.Node
},
bottomNode: {
default: null,
type: cc.Node
},
topNode: {
default: null,
type: cc.Node
},
_axialCoordinate: {
default: cc.v2(0, 0),
visible: !1
},
axialCoordinate: {
get: function() {
return this._axialCoordinate;
},
set: function(e) {
this._axialCoordinate = cc.v2(e.x, e.y);
}
},
gameView: {
default: null
},
darkNode: {
default: null,
type: cc.Node
}
},
onLoad: function() {},
start: function() {},
init: function() {
this.bg.active = !0;
this.die.active = !1;
},
onCollisionEnter: function(e, t) {
null != this.gameView && null != e.node && e.node.opacity > 0 && e.node.active && this.gameView.collisionCallback();
},
setDark: function(e) {
this.darkNode.active = e;
},
setArrow: function(e, t, n, i) {
this.topNode.active = e;
this.bottomNode.active = n;
this.leftNode.active = t;
this.rightNode.active = i;
this.arrowNode.active = !0;
},
hideArrow: function() {
this.arrowNode.active = !1;
},
playDie: function(e) {
var t = this;
this.bg.active = !0;
this.die.active = !1;
this.die.setContentSize(cc.size(100, 100));
this.blinking(this.bg, function() {
t.bg.active = !1;
t.die.active = !0;
t.blinking(t.die, function() {
t.die.setContentSize(cc.size(180, 180));
t.blinking(t.die, function() {
t.scheduleOnce(function() {
t.die.runAction(cc.fadeOut(.2));
}, .1);
});
});
});
},
blinking: function(e, t) {
var n = cc.delayTime(.12), i = cc.fadeOut(.01), o = cc.delayTime(.1), a = cc.fadeIn(.01), r = cc.callFunc(function() {
t && t();
}), c = cc.repeat(cc.sequence(n, i, o, a), 2);
e.stopAllActions();
e.runAction(cc.sequence(c, r));
},
moveTo: function() {}
});
cc._RF.pop();
}, {
"./HexCell": "HexCell"
} ],
RotationForever: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fb6faggz8ZGIIj857YwdZTb", "RotationForever");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = cc.repeatForever(cc.rotateBy(.3, 90));
this.node.runAction(e);
}
});
cc._RF.pop();
}, {} ],
SDKInit: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b086e/Q6KtCPKXgcuhY8vDt", "SDKInit");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
SDKManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8f680pj85FKX4OJG7AY87HI", "SDKManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i, o, a = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), r = e("./ChannelID"), c = h(r), s = h(e("./oppo/OppoChannel")), l = h(e("./dev/DevChannel")), u = h(e("./vivo/VivoChannel")), d = h(e("./tt/TTChannel"));
function h(e) {
return e && e.__esModule ? e : {
default: e
};
}
var f = (o = i = function() {
function e() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, e);
}
a(e, null, [ {
key: "init",
value: function(e) {
this.channel = this.builder(e);
console.log("sdk初始化完成" + this.channel);
this.channel && this.channel.init();
}
}, {
key: "isDev",
value: function() {
return this.channel.getID() == c.default.TEST;
}
}, {
key: "isWX",
value: function() {
return this.channel.getID() == c.default.WX;
}
}, {
key: "builder",
value: function(e) {
var t = this.channelMap[e];
if (!t) {
cc.log(" channelID " + e);
var n = r.AdIDS[parseInt(e)];
console.log(" adIds ", n);
switch (e) {
case c.default.OPPO:
t = new s.default(e, n);
break;

case c.default.VIVO:
t = new u.default(e, n);
break;

case c.default.TT:
t = new d.default(e, n);
break;

case c.default.DEV:
t = new l.default(e);
}
this.channelMap[e] = t;
}
return t;
}
}, {
key: "getChannel",
value: function() {
return this.channel;
}
} ]);
return e;
}(), i.UPDATE_GAME_ICON = "sdk_update_game_icon", i.START_GAME_ICON = "start_update_game_icon", 
i.channelMap = {}, o);
n.default = f;
t.exports = n.default;
cc._RF.pop();
}, {
"./ChannelID": "ChannelID",
"./dev/DevChannel": "DevChannel",
"./oppo/OppoChannel": "OppoChannel",
"./tt/TTChannel": "TTChannel",
"./vivo/VivoChannel": "VivoChannel"
} ],
SDKUtils: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d14deOZzBVA6bqNWaGWZ5SG", "SDKUtils");
var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = {};
Math.sqrt(3);
o.prefixInteger = function(e, t) {
return (Array(t).join("0") + e).slice(-t);
};
o.offsetToAxial = function(e) {
e.x = e.x - Math.floor(e.y / 2);
return e;
};
o.axialToScreen = function(e, t) {
var n = t * e.y + .5 * t - e.y * lineWidth, i = t * e.x + .5 * t - e.x * lineWidth;
return cc.v2(i, n);
};
o.screenToAxial = function(e, t) {
var n = cc.v2(0, 0), i = Math.abs(Math.round((e.y - .5 * t) / t)), o = Math.abs(Math.round((e.x - .5 * t) / t));
n.x = Math.floor((e.x + o * lineWidth) / t);
n.y = Math.floor((e.y + i * lineWidth) / t);
return n;
};
o.calculateCubicZ = function(e) {
return -e.x - e.y;
};
o.axialToOffset = function(e) {
return e;
};
o.getNeighbors = function(e) {
var t = cc.v2(0, 0), n = [];
t.x = e.x + 1;
t.y = e.y;
n.push(cc.v2(t.x, t.y));
t.x = e.x - 1;
t.y = e.y;
n.push(cc.v2(t.x, t.y));
t.x = e.x;
t.y = e.y - 1;
n.push(cc.v2(t.x, t.y));
t.x = e.x;
t.y = e.y + 1;
n.push(cc.v2(t.x, t.y));
return n;
};
o.getNeighborsOBJ = function(e) {
var t = cc.v2(0, 0), n = {};
t.x = e.x + 1;
t.y = e.y;
n.r = cc.v2(t.x, t.y);
t.x = e.x - 1;
t.y = e.y;
n.l = cc.v2(t.x, t.y);
t.x = e.x;
t.y = e.y - 1;
n.b = cc.v2(t.x, t.y);
t.x = e.x;
t.y = e.y + 1;
n.t = cc.v2(t.x, t.y);
return n;
};
o.isNeighbors = function(e, t) {
for (var n = this.getNeighbors(e), i = !1, o = 0; o < n.length; o++) n[o].equals(t) && (i = !0);
return i;
};
o.cloneObj = function(e) {
var t = e && e.constructor === Array ? [] : {};
for (var n in e) if (e.hasOwnProperty(n)) {
if (!e[n]) {
t[n] = e[n];
continue;
}
t[n] = "object" === i(e[n]) ? o.cloneObj(e[n]) : e[n];
}
return t;
};
o.GetRandomNum = function(e, t) {
switch (arguments.length) {
case 1:
return parseInt(Math.random() * e + 1, 10);

case 2:
return parseInt(Math.random() * (t - e + 1) + e, 10);

default:
return 0;
}
};
o.inArray = function(e, t) {
for (var n = t.length; n--; ) if (parseInt(t[n]) === parseInt(e)) return !0;
return !1;
};
t.exports = o;
cc._RF.pop();
}, {} ],
SettingView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "64507eJPGxKyIteLWqvXb01", "SettingView");
e("util");
cc.Class({
extends: cc.Component,
properties: {
selectView: {
default: null,
type: cc.ScrollView
},
curLang: {
default: null,
type: cc.Label
},
musicSprite: {
default: null,
type: cc.Sprite
},
selectContent: {
default: null,
type: cc.Node
},
selectItem: {
default: null,
type: cc.Node
},
musicOn: {
default: null,
type: cc.SpriteFrame
},
musicOff: {
default: null,
type: cc.SpriteFrame
}
},
onLoad: function() {
this.initToggle();
},
initToggle: function() {
SDK().getItem("curLang", function(e) {
null == e && (e = 0);
for (var t = 0; t < window.langArr.length; t += 1) {
var n = cc.instantiate(this.selectItem);
n.parent = this.selectContent;
n.toggle = n.getComponent(cc.Toggle);
if (t != e) n.toggle.isChecked = !1; else {
n.toggle.isChecked = !0;
this.curLang.string = window.langArr[t];
}
cc.find("Name", n).getComponent(cc.Label).string = window.langArr[t];
n.on("toggle", this.languageSelect, this);
n.active = !0;
}
}.bind(this));
},
languageSelect: function(e) {
var t = e.target;
t.toggle.isChecked && (this.curLang.string = window.langArr[t.tag]);
},
menuClick: function(e, t) {
if ("music" == t) if (window.gameApplication.soundManager.isOpen) {
this.musicSprite.spriteFrame = this.musicOff;
window.gameApplication.soundManager.setIsOpen(!1);
} else {
this.musicSprite.spriteFrame = this.musicOn;
window.gameApplication.soundManager.setIsOpen(!0);
} else if ("select" == t) {
Math.abs(this.selectView.node.height - 400) < .01 ? window.gameApplication.lerpACtion(400, -400, .5, function(e) {
this.selectView.node.height = e.x;
Math.abs(this.selectView.node.height - 0) < 1 && (this.selectView.node.height = 0);
}.bind(this)) : Math.abs(this.selectView.node.height - 0) < .01 && window.gameApplication.lerpACtion(0, 400, .5, function(e) {
this.selectView.node.height = e.x;
Math.abs(this.selectView.node.height - 400) < 1 && (this.selectView.node.height = 400);
}.bind(this));
}
},
start: function() {}
});
cc._RF.pop();
}, {
util: 6
} ],
SoundManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2e203tup99JJ5nSDvFuy7AM", "SoundManager");
cc.Class({
extends: cc.Component,
properties: {
audioSource: {
type: cc.AudioSource,
default: null
},
btn_click: {
type: cc.AudioClip,
default: null
},
gamewin: {
type: cc.AudioClip,
default: null
},
done: {
type: cc.AudioClip,
default: null
},
error: {
type: cc.AudioClip,
default: null
},
clock: {
type: cc.AudioClip,
default: null
},
uplock: {
type: cc.AudioClip,
default: null
},
getCoin: {
type: cc.AudioClip,
default: null
},
isOpen: !0,
isVoiceOpen: !0
},
playSound: function(e) {
if (this.isOpen) switch (e) {
case "btn_click":
cc.audioEngine.play(this.btn_click, !1, 1);
break;

case "done":
cc.audioEngine.play(this.done, !1, 1);
break;

case "error":
cc.audioEngine.play(this.error, !1, 1);
break;

case "clock":
cc.audioEngine.play(this.clock, !1, 1);
break;

case "gamewin":
cc.audioEngine.play(this.gamewin, !1, 1);
break;

case "uplock":
cc.audioEngine.play(this.uplock, !1, 1);
break;

case "getCoin":
cc.audioEngine.play(this.getCoin, !1, 1);
}
},
playBg: function() {
this.isOpen && this.audioSource.play();
},
setVoiceIsOpen: function(e) {
this.isVoiceOpen = e;
if (e) try {
null != str && HiboGameJs.enableMic(0);
} catch (e) {} else try {
null != str && HiboGameJs.enableMic(1);
} catch (e) {}
},
setIsOpen: function(e) {
this.isOpen = e;
if (this.isOpen) {
this.playBg();
try {
null != str && HiboGameJs.mute(0);
} catch (e) {}
} else {
this.audioSource.pause();
try {
null != str && HiboGameJs.mute(1);
} catch (e) {}
}
}
});
cc._RF.pop();
}, {} ],
SoundView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8d517UYugxLZJs3U0+eMM8u", "SoundView");
var i = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("./MusicManager"));
cc.Class({
extends: cc.Component,
properties: {
music_1: {
default: null,
type: cc.Node,
serializable: !0
},
audioClip: {
default: null,
type: cc.AudioClip,
serializable: !0
}
},
start: function() {
var e = i.default.instance().getMusicFlag();
cc.log(" SoundView start flag ", e);
this.music_1.active = e;
e && i.default.instance().play("AquariumGameplayMusic", !0);
},
onButtonClick: function() {
if (i.default.instance().getMusicFlag()) {
i.default.instance().close();
this.music_1.active = !1;
} else {
this.music_1.active = !0;
i.default.instance().open("AquariumGameplayMusic");
}
}
});
cc._RF.pop();
}, {
"./MusicManager": "MusicManager"
} ],
SpriteFrameSet: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
var i = cc.Class({
name: "SpriteFrameSet",
properties: {
language: "",
spriteFrame: cc.SpriteFrame
}
});
t.exports = i;
cc._RF.pop();
}, {} ],
TTBanner: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6cfdcrcfy5ONpokcWf0ujaX", "TTBanner");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../base/BaseBanner"));
function a(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}
var r = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t() {
var e, n, i, o;
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
for (var r = arguments.length, c = Array(r), s = 0; s < r; s++) c[s] = arguments[s];
return o = (n = i = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(c))), 
i.bannerHeight = 0, n), a(i, o);
}
i(t, [ {
key: "create",
value: function(e) {
var t = tt.getSystemInfoSync();
this.bannerHeight = 112.5;
this.destroyBanner();
if (tt.createBannerAd) {
this.bannerAd = tt.createBannerAd({
adUnitId: this.adUnitID,
style: {
left: (t.windowWidth - 200) / 2,
top: t.windowHeight - 112.5,
width: 200
}
});
var n = this;
this.bannerAd.onLoad(function t() {
e(null);
console.log("banner 广告加载成功");
n.bannerAd.offLoad(t);
});
this.bannerAd.onError(function(t) {
e(t);
console.log("banner 广告加载失败 ", t);
n.bannerAd.offError(this);
});
}
}
}, {
key: "getHeight",
value: function() {
return this.bannerHeight;
}
}, {
key: "show",
value: function() {
tt.createBannerAd && this.bannerAd.show();
}
}, {
key: "hide",
value: function() {
tt.createBannerAd && this.bannerAd.hide();
}
}, {
key: "destroy",
value: function() {
tt.createBannerAd && this.bannerAd.destroy();
}
} ]);
return t;
}();
n.default = r;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseBanner": "BaseBanner"
} ],
TTChannel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a02e0ACiLFCArHpszp0cbGQ", "TTChannel");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = u(e("../base/BaseChannel")), a = u(e("./TTLogin")), r = u(e("./TTBanner")), c = u(e("./TTVideoAd")), s = u(e("./TTShare")), l = u(e("./TTRecorder"));
function u(e) {
return e && e.__esModule ? e : {
default: e
};
}
var d = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t(e, n) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var i = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
i.loginMgr = new a.default();
i.recorder = new l.default();
i.bannerAd = new r.default(n.bannerID);
i.rewardAd = new c.default(n.rewardID);
i.share = new s.default(n.shareTitle);
return i;
}
i(t, [ {
key: "isHaveRank",
value: function() {
return !1;
}
}, {
key: "isHaveGameBox",
value: function() {
return !1;
}
}, {
key: "showImage",
value: function(e) {
tt.previewImage({
current: e,
urls: [ e ]
});
}
}, {
key: "jumpToApp",
value: function(e) {
tt.navigateToMiniProgram({
appId: e,
success: function() {}
});
}
}, {
key: "postMessage",
value: function(e) {
var t = tt.getOpenDataContext();
if (t) {
e.channelID = this.id;
t.postMessage(e);
}
}
}, {
key: "vibrateShort",
value: function() {
tt.vibrateShort();
}
} ]);
return t;
}();
n.default = d;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseChannel": "BaseChannel",
"./TTBanner": "TTBanner",
"./TTLogin": "TTLogin",
"./TTRecorder": "TTRecorder",
"./TTShare": "TTShare",
"./TTVideoAd": "TTVideoAd"
} ],
TTInterstitialAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "87317Q4zt9JQo2cDhDFnZaD", "TTInterstitialAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../base/InterstitialAd"));
var a = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t(e) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var n = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
n.interstitialAd = null;
n.finish = !1;
n.load(e);
return n;
}
i(t, [ {
key: "show",
value: function(e) {
this.interstitialAd && this.interstitialAd.show(function(t) {
cc.log(" insterstitailAd show result ", t);
e(t || null);
});
}
}, {
key: "isLoad",
value: function() {
return this.finish;
}
}, {
key: "load",
value: function(e) {
var t = this;
if (wx.createInterstitialAd) {
this.interstitialAd = wx.createInterstitialAd({
adUnitId: e
});
this.interstitialAd.onLoad(function() {
cc.log("插屏 广告加载成功");
t.finish = !0;
});
this.interstitialAd.onError(function(e) {
cc.log(e);
});
this.interstitialAd.onClose(function(e) {
cc.log("插屏 广告关闭");
});
}
}
} ]);
return t;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/InterstitialAd": "InterstitialAd"
} ],
TTLogin: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7b20dnzeOdCO5aALo2zYXl2", "TTLogin");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../base/LoginInterface"));
var a = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
return function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
}
i(t, [ {
key: "login",
value: function(e, t) {
tt.login({
force: !1,
success: function(t) {
console.log("login调用成功" + t.code + " " + t.anonymousCode);
tt.getUserInfo({
success: function(t) {
console.log("getUserInfo调用成功" + t.userInfo);
e();
},
fail: function(t) {
console.log("getUserInfo调用失败");
e();
}
});
},
fail: function(t) {
e();
}
});
}
}, {
key: "logout",
value: function() {}
} ]);
return t;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/LoginInterface": "LoginInterface"
} ],
TTRecorder: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "264dcgemjpOeozf83+TMV2A", "TTRecorder");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../base/BaseRecorder"));
var a = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var e = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
e.isSave = !0;
e.recorder = tt.getGameRecorderManager();
e.recorder.onStart(function(t) {
console.log("录屏开始", t);
e.changeState(1);
});
e.recorder.onStop(function(t) {
console.log("录屏结束", t);
e.clipVideo(t, [ 15, 0 ], function(t) {
e.videoPath = t ? t.videoPath : null;
e.changeState(0);
});
});
e.recorder.onResume(function() {
console.log("TTRecorder onResume");
});
e.recorder.onPause(function() {
console.log("TTRecorder onPuase");
});
e.recorder.onError(function(t) {
console.log("TTRecorder onPuase");
e.videoPath = null;
});
return e;
}
i(t, [ {
key: "clipVideo",
value: function(e, t, n) {
this.recorder.clipVideo({
path: e.videoPath,
timeRange: t,
success: function(e) {
console.log(e.videoPath);
n(e);
},
fail: function() {
n(null);
}
});
}
}, {
key: "recordClip",
value: function(e) {
this.recorder.recordClip({
timeRange: [ 15, 0 ],
success: function(t) {
console.log(t.index);
e(t);
}
});
}
}, {
key: "start",
value: function() {
console.log(" recorder start ", this.isOpen());
this.isOpen() || this.recorder.start({
duration: 300
});
}
}, {
key: "stop",
value: function() {
var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
console.log(" recorder stop ", this.isClose(), e);
if (!this.isClose()) {
this.isSave = e;
this.recorder.stop();
}
}
}, {
key: "pause",
value: function() {
this.recorder.pause();
}
}, {
key: "resume",
value: function() {
this.recorder.resume();
}
} ]);
return t;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseRecorder": "BaseRecorder"
} ],
TTShare: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "87d927WehVBaYJp7TmeoWh0", "TTShare");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../base/BaseShare"));
var a = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t(e) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var n = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
tt.showShareMenu({
withShareTicket: !0
});
tt.updateShareMenu({
withShareTicket: !0
});
wx.onShareAppMessage(function() {
var t = this, n = cc.view.getVisibleOrigin(), i = cc.view.getFrameSize();
return {
title: e,
imageUrl: canvas.toTempFilePathSync({
x: n.x,
y: n.y,
destWidth: i.width,
destHeight: i.height
}),
success: function() {
console.log("分享成功");
t.shareSuccess();
},
fail: function(e) {
console.log("分享失败", e);
}
};
});
return n;
}
i(t, [ {
key: "share",
value: function(e, t, n) {
var i = this, o = D.sdk.getRecorder().getVideoPath();
console.log("shareAppMessage title ", e, " isShowRecorder ", n, " videoPath ", o);
n && o ? tt.shareAppMessage({
channel: "video",
title: e || this.title,
extra: {
videoPath: o
},
success: function() {
console.log("分享成功");
t && t(!0);
i.shareSuccess();
},
fail: function(n) {
console.log("分享失败", n);
n.errMsg.indexOf("short") >= 0 ? i.share(e, t, !1) : t(!1);
}
}) : tt.shareAppMessage({
channel: "article",
title: "分享创作",
description: e || this.title,
success: function() {
console.log("SDK分享成功");
t && t(!0);
i.shareSuccess();
},
fail: function(e) {
t(!1);
console.log("SDK分享失败");
}
});
this.shareFlag = !0;
}
}, {
key: "getShareInfo",
value: function(e, t) {
e && tt.getShareInfo({
shareTicket: e,
success: function() {},
fail: function() {}
});
}
} ]);
return t;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseShare": "BaseShare"
} ],
TTVideoAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "41234ij4stET6fTgrsMmKdm", "TTVideoAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = e("../base/BaseRewardAd"), a = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(o);
var r = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, a.default);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
return function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
}
i(t, [ {
key: "createVideoAd",
value: function(e) {
var t = this;
if (tt.createRewardedVideoAd) {
this.rewardedVideoAd = tt.createRewardedVideoAd({
adUnitId: e
});
if (this.rewardedVideoAd) {
this.rewardedVideoAd.onLoad(function() {});
this.rewardedVideoAd.onError(function(e) {
console.log(e);
ToastController.instance().show("视频加载失败，无法获得奖励");
t.rewardCallback && t.rewardCallback(!1);
});
this.rewardedVideoAd.onClose(function(e) {
t.state = o.RewardADState.close;
e && e.isEnded || void 0 === e ? t.rewardCallback && t.rewardCallback(!0) : t.rewardCallback && t.rewardCallback(!1);
});
}
}
}
} ]);
return t;
}();
n.default = r;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseRewardAd": "BaseRewardAd"
} ],
TimeGift: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6f2aaGixZ5Fyol6rIab6HGA", "TimeGift");
var i = [ 3, 50 ], o = [ 2, 100 ];
cc.Class({
extends: cc.Component,
properties: {
giftView: {
default: null,
type: cc.Node
},
giftBtn: {
default: null,
type: cc.Node
},
giftMask: {
default: null,
type: cc.Node
},
giftTip: {
default: null,
type: cc.Node
},
giftTimeText: {
default: null,
type: cc.Label
},
giftTime: {
default: 0,
visible: !1
},
heartsNum: {
default: null,
type: cc.Label
},
coinsNum: {
default: null,
type: cc.Label
}
},
onLoad: function() {
window.timeGiftScript = this;
SDK().getItem("giftTime", function(e) {
e = parseInt(e);
this.giftTime = e;
}.bind(this));
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
this.openBtn();
}, this);
},
openBtn: function() {
window.gameApplication.soundManager.playSound("btn_click");
this.giftTip.active && this.showTimeGiftView(1);
},
start: function() {
this.checkTime(!0);
},
showTimeGiftView: function(e) {
console.log(e);
var t = 0, n = 0;
if (1 == e) {
t = o[0];
n = o[1];
} else if (2 == e) {
t = i[0];
n = i[1];
}
this.heartsNum.string = "+" + t;
this.coinsNum.string = "+" + n;
window.gameApplication.openGiftView(!0);
var a = this.giftView.getChildByName("Bg"), r = a.getChildByName("Later"), c = a.getChildByName("ReceiveView"), s = c.getChildByName("Light0"), l = c.getChildByName("Light1"), u = c.getChildByName("Receive"), d = c.getChildByName("Double");
s.runAction(cc.repeatForever(cc.repeatForever(cc.rotateBy(1, 120))));
l.runAction(cc.repeatForever(cc.rotateBy(1, 120)));
u.off(cc.Node.EventType.TOUCH_END);
u.on(cc.Node.EventType.TOUCH_END, function(i) {
window.gameApplication.soundManager.playSound("btn_click");
1 == e && this.resetTime();
SDK().getItem("hearts", function(e) {
e = parseInt(e);
e += t;
window.gameApplication.flyReward(t, "heartSprite", window.mainScirpt.hearts, null);
SDK().setItem({
hearts: e
}, null);
null != window.mainScirpt.hearts && (window.mainScirpt.hearts.getComponent(cc.Label).string = e.toString());
}.bind(this));
SDK().getItem("coins", function(e) {
e = parseInt(e);
e += n;
window.gameApplication.flyReward(.1 * n, "coin", window.mainScirpt.coins, null);
SDK().setItem({
coins: e
}, function() {
window.mainScirpt.refreashVal();
});
null != window.mainScirpt.coins && (window.mainScirpt.coins.getComponent(cc.Label).string = e.toString());
}.bind(this));
window.gameApplication.openGiftView(!1);
}, this);
d.off(cc.Node.EventType.TOUCH_END);
d.on(cc.Node.EventType.TOUCH_END, function(i) {
window.gameApplication.soundManager.playSound("btn_click");
window.gameApplication.onVideoBtnClick(function(i) {
if (i) {
1 == e && this.resetTime();
SDK().getItem("hearts", function(e) {
e = parseInt(e);
e += 3 * t;
window.gameApplication.flyReward(3 * t, "heartSprite", window.mainScirpt.hearts, null);
SDK().setItem({
hearts: e
}, null);
null != window.mainScirpt.hearts && (window.mainScirpt.hearts.getComponent(cc.Label).string = e.toString());
}.bind(this));
SDK().getItem("coins", function(e) {
e = parseInt(e);
e += 3 * n;
window.gameApplication.flyReward(.3 * n, "coin", window.mainScirpt.coins, null);
SDK().setItem({
coins: e
}, function() {
window.mainScirpt.refreashVal();
});
null != window.mainScirpt.coins && (window.mainScirpt.coins.getComponent(cc.Label).string = e.toString());
}.bind(this));
window.gameApplication.openGiftView(!1);
}
}.bind(this));
}, this);
r.off(cc.Node.EventType.TOUCH_END);
r.on(cc.Node.EventType.TOUCH_END, function(e) {
window.gameApplication.soundManager.playSound("btn_click");
window.gameApplication.openGiftView(!1);
}, this);
},
resetTime: function() {
var e = Date.parse(new Date());
e /= 1e3;
this.giftTime = e;
SDK().setItem({
giftTime: this.giftTime
}, null);
},
checkTime: function(e) {
var t = Date.parse(new Date());
if ((t /= 1e3) - this.giftTime > 10800) {
if (!this.giftTip.active && this.giftMask.active || e) {
this.giftTip.active = !0;
this.giftMask.active = !1;
this.giftTimeText.node.active = !0;
this.giftBtn.stopAllActions();
window.gameApplication.shake(this.giftBtn.getChildByName("Gift"));
}
} else {
if (this.giftTip.active && !this.giftMask.active || e) {
this.giftTip.active = !1;
this.giftTip.stopAllActions();
this.giftMask.active = !0;
this.giftTimeText.node.active = !0;
this.giftBtn.getChildByName("Gift").stopAllActions();
this.giftBtn.getChildByName("Gift").rotation = 0;
}
var n = t - this.giftTime, i = (n = 10800 - n) / 60, o = 0;
if (i >= 60) {
o = Math.floor(i / 60);
i = i % 60 * 60;
}
var a = i / 60 < 10 ? "0" + Math.floor(i / 60) : "" + Math.floor(i / 60), r = n % 60 < 10 ? "0" + Math.floor(n % 60) : "" + Math.floor(n % 60);
if (n <= 0) {
a = "00";
r = "00";
}
this.giftTimeText.string = o > 0 ? o + ":" + a + ":" + r : a + ":" + r;
}
this.scheduleOnce(function() {
this.checkTime(!1);
}.bind(this), 1);
}
});
cc._RF.pop();
}, {} ],
TipView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "82001RAO8NNf5QiLY116wXd", "TipView");
cc.Class({
extends: cc.Component,
properties: {
callback: {
default: null,
serializable: !1
}
},
start: function() {},
setCallback: function(e) {
this.callback = e;
},
onButtonClose: function() {
this.node.active = !1;
},
onButtonTipClick: function() {
this.node.active = !1;
if (this.callback) {
this.callback();
this.callback = null;
}
}
});
cc._RF.pop();
}, {} ],
Tower: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fffd1g1zLBJ9Zn7NHAXbn3T", "Tower");
e("./HexCell");
cc.Class({
extends: cc.Component,
properties: {
bubble: {
default: null,
type: cc.Node
},
bubbleAxialCoordinate: {
default: cc.v2(0, 0),
visible: !1
},
_axialCoordinate: {
default: cc.v2(0, 0),
visible: !1
},
axialCoordinate: {
get: function() {
return this._axialCoordinate;
},
set: function(e) {
this._axialCoordinate = cc.v2(e.x, e.y);
this.bubbleAxialCoordinate = cc.v2(e.x, e.y);
}
},
isShooting: !1,
direction: {
default: -1,
type: cc.Integer,
visible: !1
},
f: {
default: 0,
type: cc.Integer,
visible: !1
},
s: {
default: 0,
type: cc.Integer,
visible: !1
},
delay: {
default: 0,
type: cc.Integer,
visible: !1
},
size: {
default: cc.size(0, 0),
type: cc.Size,
visible: !1
},
scaleX: {
default: 1,
type: cc.Integer,
visible: !1
},
scaleY: {
default: 1,
type: cc.Integer,
visible: !1
}
},
init: function(e) {
this.direction = e.direction;
this.f = e.f;
this.s = e.s;
this.delay = e.delay;
this.isShooting = !1;
this.bubble.active = !1;
this.node.setContentSize(this.size);
this.bubble.setScale(this.scaleX, this.scaleY);
},
setScaleXY: function(e, t) {
this.size = cc.size(34 * e, 51 * t);
this.scaleX = e;
this.scaleY = t;
},
onLoad: function() {},
start: function() {}
});
cc._RF.pop();
}, {
"./HexCell": "HexCell"
} ],
Utils: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3e427LrtQhKv7l/kjbf8v9+", "Utils");
var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = {}, a = Math.sqrt(3);
o.offsetToAxial = function(e) {
e.x = e.x - Math.floor(e.y / 2);
return e;
};
o.axialToScreen = function(e, t) {
var n = t * e.y + .5 * t - e.y * lineWidth, i = t * e.x + .5 * t - e.x * lineWidth;
return cc.v2(i, n);
};
o.screenToAxial = function(e, t) {
var n = cc.v2(0, 0);
n.y = e.x / (1.5 * t);
n.x = (e.y - e.x / a) / (a * t);
var i = this.calculateCubicZ(n), o = Math.round(n.x), r = Math.round(n.y), c = Math.round(i);
if (o + r + c == 0) {
e.x = o;
e.y = r;
} else {
var s = Math.abs(n.x - o), l = Math.abs(n.y - r), u = Math.abs(i - c);
if (s > l && s > u) {
e.x = -r - c;
e.y = r;
} else if (l > s && l > u) {
e.x = o;
e.y = -o - c;
} else if (u > s && u > l) {
e.x = o;
e.y = r;
}
}
return e;
};
o.calculateCubicZ = function(e) {
return -e.x - e.y;
};
o.axialToOffset = function(e) {
e.x = e.x + Math.floor(e.y / 2);
return e;
};
o.getNeighbors = function(e) {
var t = cc.v2(0, 0), n = [];
t.x = e.x + 1;
t.y = e.y;
n.push(cc.v2(t.x, t.y));
t.x = e.x - 1;
t.y = e.y;
n.push(cc.v2(t.x, t.y));
t.x = e.x;
t.y = e.y - 1;
n.push(cc.v2(t.x, t.y));
t.x = e.x;
t.y = e.y + 1;
n.push(cc.v2(t.x, t.y));
return n;
};
o.getNeighborsOBJ = function(e) {
var t = cc.v2(0, 0), n = {};
t.x = e.x + 1;
t.y = e.y;
n.r = cc.v2(t.x, t.y);
t.x = e.x - 1;
t.y = e.y;
n.l = cc.v2(t.x, t.y);
t.x = e.x;
t.y = e.y - 1;
n.b = cc.v2(t.x, t.y);
t.x = e.x;
t.y = e.y + 1;
n.t = cc.v2(t.x, t.y);
return n;
};
o.isNeighbors = function(e, t) {
for (var n = this.getNeighbors(e), i = !1, o = 0; o < n.length; o++) n[o].equals(t) && (i = !0);
return i;
};
o.cloneObj = function(e) {
var t = e && e.constructor === Array ? [] : {};
for (var n in e) if (e.hasOwnProperty(n)) {
if (!e[n]) {
t[n] = e[n];
continue;
}
t[n] = "object" === i(e[n]) ? o.cloneObj(e[n]) : e[n];
}
return t;
};
o.GetRandomNum = function(e, t) {
switch (arguments.length) {
case 1:
return parseInt(Math.random() * e + 1, 10);

case 2:
return parseInt(Math.random() * (t - e + 1) + e, 10);

default:
return 0;
}
};
o.inArray = function(e, t) {
for (var n = t.length; n--; ) if (parseInt(t[n]) === parseInt(e)) return !0;
return !1;
};
t.exports = o;
cc._RF.pop();
}, {} ],
VivoBannerAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c1916b2DZhLcpjgNlvbb4cw", "VivoBannerAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../base/BaseBanner"));
var a = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
return function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
}
i(t, [ {
key: "create",
value: function(e) {
this.destroyBanner();
this.bannerAd = qg.createBannerAd({
posId: this.adUnitID,
style: {}
});
var t = this;
this.bannerAd.onLoad(function n() {
t.bannerAd.offLoad(n);
e(null);
console.log("banner  ad load success");
});
this.bannerAd.onError(function n(i) {
e(i);
console.log("banner ad load fail  ", i);
t.bannerAd.offError(n);
});
this.bannerAd.onClose(function e() {
t.bannerAd.offClose(e);
});
}
}, {
key: "getHeight",
value: function() {
return 120;
}
}, {
key: "show",
value: function() {
this.bannerAd.show();
}
}, {
key: "hide",
value: function() {
this.bannerAd.hide();
}
}, {
key: "destroy",
value: function() {
this.bannerAd.destroy();
}
} ]);
return t;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseBanner": "BaseBanner"
} ],
VivoChannel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "12a69ER2v9Bzr2pKoAB4dyW", "VivoChannel");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = r(e("../base/BaseChannel")), a = (r(e("./VivoBannerAd")), r(e("./VivoInsertAd")), 
r(e("./VivoRewardAd")), r(e("../dev/DevLogin")));
function r(e) {
return e && e.__esModule ? e : {
default: e
};
}
var c = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t(e, n) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var i = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
i.appId = "";
i.appId = n.appId;
i.loginMgr = new a.default();
cc.log(" qg.getSystemInfoSync().platformVersionCode ", qg.getSystemInfoSync().platformVersionCode);
qg.getSystemInfoSync().platformVersionCode;
return i;
}
i(t, [ {
key: "isVideoLvUp",
value: function() {
return !0;
}
}, {
key: "sevenButtonNum",
value: function() {
return 1;
}
}, {
key: "vibrateShort",
value: function() {
qg.vibrateShort();
}
}, {
key: "activeSkillLabel",
value: function() {
return "观看视频";
}
}, {
key: "showShare",
value: function(e, t) {
this.openRewardAd(function(e) {
e && t();
});
}
}, {
key: "init",
value: function() {}
} ]);
return t;
}();
n.default = c;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseChannel": "BaseChannel",
"../dev/DevLogin": "DevLogin",
"./VivoBannerAd": "VivoBannerAd",
"./VivoInsertAd": "VivoInsertAd",
"./VivoRewardAd": "VivoRewardAd"
} ],
VivoInsertAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "72a61M/M5ZOz5Ri+gcH7ex1", "VivoInsertAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("../base/InterstitialAd"));
var a = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t(e) {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
var n = function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
n.interstitialAd = null;
n.finish = !1;
n.load(e);
return n;
}
i(t, [ {
key: "show",
value: function(e) {
var t = this;
this.interstitialAd && this.interstitialAd.show().then(function() {
D.sdk.getBannerAd().pause();
}).catch(function(e) {
t.interstitialAd.load().then(function() {
t.interstitialAd.show();
D.sdk.getBannerAd().pause();
}).catch(function(e) {
console.log(" show insert err 2 ", e);
});
});
}
}, {
key: "isLoad",
value: function() {
return this.finish;
}
}, {
key: "load",
value: function(e) {
var t = this;
this.interstitialAd = qg.createInterstitialAd({
posId: e
});
this.interstitialAd.onLoad(function() {
console.log("插屏广告加载成功");
t.finish = !0;
});
this.interstitialAd.onError(function(e) {
console.log("VivoInsertAd load fail ", e);
t.finish = !1;
});
this.interstitialAd.onClose(function() {
D.sdk.getBannerAd().resume();
});
}
} ]);
return t;
}();
n.default = a;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/InterstitialAd": "InterstitialAd"
} ],
VivoNativeAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ddfc7y5rrNDW5SiZxCwUA5r", "VivoNativeAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = c(e("../base/BaseNativeAd")), a = c(e("../base/NativeAdItemModel")), r = e("../ChannelID");
function c(e) {
return e && e.__esModule ? e : {
default: e
};
}
var s = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, o.default);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
return function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
}
i(t, [ {
key: "create",
value: function(e) {
this.destroyNative();
this.nativeAd = qg.createNativeAd({
posId: this.adUnitID
});
var t = this;
this.nativeAd.onLoad(function(n) {
t.nativeAd.offLoad(this);
e(null);
console.log("banner  ad load success");
if (n.adList) {
for (var i = 0; i < n.adList.length; i++) {
var o = n.adList[i];
new a.default().initWithOppo(o);
}
t.publish(r.SDKEvent.NATIVE_AD_LOAD_FINISH, t.adItems);
}
});
this.nativeAd.onError(function(n) {
e(n);
console.log("banner ad load fail  ", n);
t.nativeAd.offError(this);
});
}
}, {
key: "reportAdClick",
value: function(e) {
this.nativeAd && this.nativeAd.reportAdClick({
adId: e
});
}
}, {
key: "reportAdShow",
value: function(e) {
this.nativeAd && this.nativeAd.reportAdShow({
adId: e
});
}
}, {
key: "destroy",
value: function() {
this.nativeAd.destroy();
}
} ]);
return t;
}();
n.default = s;
t.exports = n.default;
cc._RF.pop();
}, {
"../ChannelID": "ChannelID",
"../base/BaseNativeAd": "BaseNativeAd",
"../base/NativeAdItemModel": "NativeAdItemModel"
} ],
VivoRewardAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a30f2tPeFZIv5IafIMh8UR7", "VivoRewardAd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = void 0;
var i = function() {
function e(e, t) {
for (var n = 0; n < t.length; n++) {
var i = t[n];
i.enumerable = i.enumerable || !1;
i.configurable = !0;
"value" in i && (i.writable = !0);
Object.defineProperty(e, i.key, i);
}
}
return function(t, n, i) {
n && e(t.prototype, n);
i && e(t, i);
return t;
};
}(), o = e("../base/BaseRewardAd"), a = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(o);
var r = function(e) {
(function(e, t) {
if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
e.prototype = Object.create(t && t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
})(t, a.default);
function t() {
(function(e, t) {
if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
})(this, t);
return function(e, t) {
if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return !t || "object" != typeof t && "function" != typeof t ? e : t;
}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
}
i(t, [ {
key: "createVideoAd",
value: function(e) {
var t = this;
this.rewardedVideoAd = qg.createRewardedVideoAd({
posId: e
});
this.rewardedVideoAd.onLoad(function() {
console.log("激励视频已加载");
});
this.rewardedVideoAd.onError(function(e) {
console.log("激励视频异常", e);
t.rewardCallback && t.rewardCallback(!1);
D.control.showTip(function() {
t.show(t.rewardCallback);
});
});
this.rewardedVideoAd.onClose(function(e) {
t.state = o.RewardADState.close;
if (e && e.isEnded) {
console.log("正常播放结束，可以下发游戏奖励");
t.rewardCallback(!0);
} else {
console.log("播放中途退出，不下发游戏奖励");
t.rewardCallback(!1);
}
});
}
} ]);
return t;
}();
n.default = r;
t.exports = n.default;
cc._RF.pop();
}, {
"../base/BaseRewardAd": "BaseRewardAd"
} ],
ZoominForever1: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2f1b5ntEa5NbYY+SYDZzHax", "ZoominForever1");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = cc.repeatForever(cc.sequence(cc.scaleTo(.48, 1.25, 1.25), cc.delayTime(.38), cc.scaleTo(.78, 1, 1), cc.delayTime(.68)));
this.node.runAction(e);
}
});
cc._RF.pop();
}, {} ],
ZoominForever: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0bfed705u9G85RWvZFfoZtO", "ZoominForever");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = cc.repeatForever(cc.sequence(cc.scaleTo(.88, 1.1, 1.1), cc.scaleTo(.88, .9, .9)));
this.node.runAction(e);
}
});
cc._RF.pop();
}, {} ],
en: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8c6d6rX4b5LH43PcfbdRlsr", "en");
var i;
function o(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
window.i18n || (window.i18n = {});
window.i18n.languages || (window.i18n.languages = {});
window.i18n.languages.en = {
label_text: (i = {
helpTip: "Slide the screen to direct the direction \n and find the exit of the maze!",
watchAdTip: "Watch video AD to unlock \nthis level in advance!",
watchAdBtn: "Unlock",
invBtn: "PK VS Friends",
watchAdHelip: "You can get 5 more help\n after watching the AD!"
}, o(i, "watchAdBtn", "WATCH VIDEO"), o(i, "shareAdHelp", "Get more tips!"), o(i, "shareAdHelpText", "Invite friend to get 3 tips!"), 
o(i, "shareAdBtn", "INVITE"), o(i, "later", "LATER"), o(i, "replay", "Okay"), o(i, "timeisup", "watch a video for more time!"), 
o(i, "timeisup_share", "share to friends \nfor more time now!"), o(i, "timeisup_end", "Out of time!"), 
o(i, "noads", "Video is missing! \nTry again later."), o(i, "inv_again", "This player can't receive messages right now.close this dialog to refresh this list."), 
o(i, "queding", "OKAY"), o(i, "receiveGift", "Wow! you got 1 help!"), o(i, "getCoins", "Get more coins."), 
o(i, "getCoinText", "Watch a video to get 100 coins?"), o(i, "getHearts", "Get more hearts."), 
o(i, "getHeartText", "Pick a friend or watch a ads to get 5 hearts."), o(i, "giftTitel", "Gifts"), 
o(i, "settingTitel", "Setting"), o(i, "langTitel", "Language:"), o(i, "musicTitel", "music:"), 
o(i, "moveTitel", "Get more steps！"), o(i, "unlockTitel", "Unlock Stage"), o(i, "unlockText", "Invite friend to unlock the rest stage"), 
o(i, "failTitel", "fail"), o(i, "videoText", "Video is missing.Please try again."), 
o(i, "shareText", "Please share to another group or friend."), i)
};
cc._RF.pop();
}, {} ],
es: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a5f8aTtyHxGh6vbhg7qoj0q", "es");
var i;
function o(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
window.i18n || (window.i18n = {});
window.i18n.languages || (window.i18n.languages = {});
window.i18n.languages.es = {
label_text: (i = {
helpTip: "Deslice la pantalla para guiar la dirección y encontrar la salida del laberinto.",
watchAdTip: "¡Mira el anuncio de video \n para desbloquear este nivel por adelantado!",
watchAdBtn: "Desbloquear nivel",
invBtn: "Invita amigos",
watchAdHelip: "Mire el video \n obtenga 5 ayuda!"
}, o(i, "watchAdBtn", "Invitación"), o(i, "shareAdHelp", "Obtenga más consejos!"), 
o(i, "shareAdHelpText", "¡Invita a tus amigos a obtener 3 consejos!"), o(i, "shareAdBtn", "Compartir"), 
o(i, "later", "Cerrar"), o(i, "replay", "Está bien"), o(i, "timeisup", "¡Mira el video para tener más tiempo!"), 
o(i, "timeisup_share", "¡Compártalo con amigos, \n extra 5 segundos!"), o(i, "timeisup_end", "¡Se acabó el tiempo!"), 
o(i, "noads", "El anuncio falta temporalmente, \n por favor intente más tarde."), 
o(i, "inv_again", "No se pueden enviar invitaciones a los usuarios actuales, intente invitar a otros usuarios."), 
o(i, "queding", "Determinar"), o(i, "receiveGift", "Felicidades! ¡Obtén ayuda!"), 
o(i, "getCoins", "Consigue más monedas"), o(i, "getCoinText", "Mira el video para obtener 100 monedas de oro?"), 
o(i, "getHearts", "Obtenga más fuerza física."), o(i, "getHeartText", "Invita a un amigo o mira un video para obtener 5 puntos fuertes individuales"), 
o(i, "giftTitel", "Paquete de regalo"), o(i, "settingTitel", "Ajuste"), o(i, "langTitel", "Idioma:"), 
o(i, "musicTitel", "Música:"), o(i, "moveTitel", "Out of moves!"), o(i, "moveTitel", "Obtenga más pasos!"), 
o(i, "unlockTitel", "Desbloquear nivel"), o(i, "unlockText", "Invita a tus amigos a desbloquear el nivel"), 
o(i, "failTitel", "FAIL"), o(i, "videoText", "Video falta. Por favor, intentelo de nuevo."), 
o(i, "shareText", "Por favor compartir a otro grupo de o amigo."), i)
};
cc._RF.pop();
}, {} ],
facebook111: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "de06etC19tFMbU3EZT0VK+O", "facebook111");
var i = e("../Utils/Utils"), o = e("./script/sdk_ad"), a = "AD_LOADING", r = "AD_LOAD_SUCCESS", c = "AD_COMPLETE", s = [ 0x5b7d1cf0050f3, 0x63feaccfa70df ], l = "160840521263423", u = {}, d = 2, h = 1, f = 1, p = 0, g = function() {
this.cb = null;
this.videoAd = null;
this.videoAdState = null;
this.InterstitialAd = null;
this.InterstitialAdState = null;
this.sdk_ad = null;
};
g.prototype.getGameId = function() {
return l;
};
g.prototype.openVideoAd = function() {
return h >= 1;
};
g.prototype.openinterstitialAd = function() {
return f >= 1;
};
g.prototype.getInterstitialCount = function() {
return d;
};
g.prototype.isPlayOpAD = function() {
return 10 * cc.random0To1() <= p;
};
g.prototype.setUp = function(e, t, n, i) {
console.log("setUp__interstitialCount", n);
console.log("interstitialCount", d);
d = n;
h = e;
f = t;
p = i;
console.log("__________________interstitialCount:", d);
if (f >= 1 && p >= 1) {
var a = cc.find("Canvas/sdk_ad");
null != a && (this.sdk_ad = a.getComponent(o));
this.reLoadOpAd();
}
};
g.prototype.switchGameAsync = function(e) {
if ("undefined" == typeof FBInstant) return !1;
FBInstant.switchGameAsync(e).catch(function(e) {});
};
g.prototype.reLoadOpAd = function() {
cc.log("reLoadOpAd:");
if (null != this.sdk_ad && f >= 1 && p >= 1) {
var e = this, t = new XMLHttpRequest();
t.onreadystatechange = function() {
if (4 == t.readyState && 200 == t.status) {
var n = JSON.parse(t.responseText);
console.log("______________response", n);
if (500 != n.code) {
var i = n.data.rows[0];
if (null != i) {
var o = i.pic3, a = i.pic2, r = i.pic1, c = i.game_id;
e.sdk_ad.setAd(o, a, r, c);
}
}
}
};
t.open("GET", "https://haiwai.31home.com:8003/games.recommend?game_id=" + l + "&amount=1", !0);
t.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
t.send();
console.log("https://haiwai.31home.com:8003/games.recommend?game_id=" + l + "&amount=1");
}
};
g.prototype.init = function() {
this.initOP();
if ("undefined" != typeof FBInstant) {
this.loadVideoAd();
this.loadInterstitialAd();
u.name = FBInstant.player.getName();
cc.loader.load(FBInstant.player.getPhoto(), function(e, t) {
u.head = new cc.SpriteFrame(t);
});
u.id = FBInstant.player.getID();
FBInstant.getLocale();
e("LanguageData").init("en");
} else {
e("LanguageData").init("en");
}
};
g.prototype.initOP = function() {
var e = this, t = new XMLHttpRequest();
t.onreadystatechange = function() {
if (4 == t.readyState && 200 == t.status) {
var n = JSON.parse(t.responseText);
console.log("response", n);
if (500 != n.code) {
var i = n.data, o = i.interstitial_op, a = i.interstitial_count, r = i.video_on, c = i.interstitial_on;
e.setUp(r, c, a, o);
}
}
};
t.open("GET", "https://haiwai.31home.com:8003/games.detail?game_id=" + SDK().getGameId(), !0);
t.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
t.send();
};
g.prototype.isGM = function() {
if ("undefined" == typeof FBInstant) return !1;
var e = FBInstant.player.getID();
return i.inArray(e, s);
};
g.prototype.clearData = function() {
if ("undefined" == typeof FBInstant) return !1;
SDK().setScore({
all: 0
}, null);
SDK().setScore({
my_help: 0
}, null);
for (var e = 1; e <= 6; e++) {
for (var t = 1; t <= 100; t++) {
var n = {};
n["1_" + e + "_" + t] = 0;
this.setScore(n, null);
var i = {};
i["1_" + e + "_" + t + "_moves"] = 0;
this.setScore(i, null);
}
var o = {};
o["1_" + e] = 0;
this.setScore(o, null);
var a = {};
a["unlock_1_" + e] = 0;
SDK().setScore(a, null);
}
};
g.prototype.getLocale = function() {
if ("undefined" != typeof FBInstant) return FBInstant.getLocale();
};
g.prototype.canCreateShortcutAsync = function(e) {
"undefined" != typeof FBInstant && FBInstant.canCreateShortcutAsync().then(function(t) {
t ? FBInstant.createShortcutAsync().then(function() {
null != e && e(!0);
}).catch(function() {
null != e && e(!1);
}) : null != e && e(!1);
});
};
g.prototype.share = function(e, t) {
if ("undefined" != typeof FBInstant) {
var n = this;
FBInstant.context.chooseAsync().then(function() {
console.log("FBInstant.context.getID():", FBInstant.context.getID());
n.doShare(e);
null != t && t(!0);
}).catch(function(e) {
console.log("catch", e);
null != e.code && "SAME_CONTEXT" == e.code && null != t && t(!1);
});
} else null != t && t(!0);
};
g.prototype.doShare = function(e) {
var t = this.getName() + " finish " + e + " missions,Can you beat me?";
this.getName();
cc.loader.loadRes("texture2d/game_icon", cc.Texture2D, function(e, n) {
var i = document.createElement("canvas"), o = i.getContext("2d");
i.width = 600;
i.height = 420;
var a = n.getHtmlElementObj();
o.drawImage(a, 0, 0);
var r = i.toDataURL("image/png");
FBInstant.updateAsync({
action: "CUSTOM",
cta: "Play Game",
template: "join_fight",
image: r,
text: t,
data: {
myReplayData: "..."
},
strategy: "IMMEDIATE",
notification: "NO_PUSH"
}).then(function() {});
});
};
g.prototype.loadInterstitialAd = function() {
"undefined" != typeof FBInstant && this.openinterstitialAd() && FBInstant.getInterstitialAdAsync("160840521263423_160841827929959").then(function(e) {
this.InterstitialAd = e;
this.InterstitialAdState = a;
return this.InterstitialAd.loadAsync();
}.bind(this)).catch(function(e) {}.bind(this)).then(function() {
this.InterstitialAdState = r;
}.bind(this));
};
g.prototype.stat = function(e, t) {
var n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 == n.readyState && 200 == n.status) JSON.parse(n.responseText);
};
n.open("GET", "https://haiwai.31home.com:8003/games.stat?game_id=" + t + "&type=" + e, !0);
n.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
n.send();
};
g.prototype.onOpAdBtnClicked = function() {
null != this.sdk_ad && this.sdk_ad.onPlayBtnClicked();
};
g.prototype.getOpAdPic = function(e) {
return null == this.sdk_ad ? null : 1 == e ? this.sdk_ad.pic1 : 2 == e ? this.sdk_ad.pic2 : 3 == e ? this.sdk_ad.pic3 : void 0;
};
g.prototype.showInterstitialAd = function(e, t) {
if ("undefined" != typeof FBInstant) {
console.log("FB_SDK.prototype.showInterstitialAd", this.InterstitialAd);
console.log("this.sdk_ad", this.sdk_ad);
console.log("interstitialOn", f);
if (!(f < 1)) if (null != this.sdk_ad && p >= 1 && i.GetRandomNum(1, 10) <= p && !t || null == this.InterstitialAd && null != this.sdk_ad && !t) {
console.log("sdk_ad:", this.sdk_ad);
this.sdk_ad.show();
this.stat(1, this.sdk_ad.game_id);
e && e(!0);
} else if (null != this.InterstitialAd) this.InterstitialAd.showAsync().then(function() {
this.InterstitialAdState = c;
e && e(!0);
this.loadInterstitialAd();
}.bind(this)).catch(function(t) {
this.InterstitialAdState = c;
e && e(!1);
}.bind(this)); else {
e && e(!1);
this.loadInterstitialAd();
}
} else e && e(!1);
};
g.prototype.loadVideoAd = function() {
"undefined" != typeof FBInstant && this.openVideoAd() && FBInstant.getRewardedVideoAsync("160840521263423_160841467929995").then(function(e) {
this.videoAd = e;
this.videoAdState = a;
return this.videoAd.loadAsync();
}.bind(this)).then(function() {
this.videoAdState = r;
}.bind(this));
};
g.prototype.hasVideoAd = function() {
return "undefined" != typeof FBInstant && null != this.videoAd;
};
g.prototype.showVideoAd = function(e) {
if ("undefined" != typeof FBInstant) if (null != this.videoAd) this.videoAd.showAsync().then(function() {
this.videoAdState = c;
e && e(!0);
this.loadVideoAd();
}.bind(this)).catch(function(t) {
this.videoAdState = c;
e && e(!1);
this.loadVideoAd();
}.bind(this)); else {
e && e(!1);
this.loadVideoAd();
} else e && e(!0);
};
g.prototype.getName = function() {
return "undefined" == typeof FBInstant ? "undefined" : FBInstant.player.getName();
};
g.prototype.getItem = function(e, t) {
if ("undefined" == typeof FBInstant) {
"undefined" != typeof (n = JSON.parse(cc.sys.localStorage.getItem(e))) && null != n || (n = 0);
t(n, e);
} else {
var n = 0;
FBInstant.player.getDataAsync([ "" + e ]).then(function(i) {
n = "undefined" == typeof i[e] ? 0 : i[e];
t(n, e);
});
}
};
g.prototype.setItem = function(e, t) {
if ("undefined" == typeof FBInstant) {
for (var n in e) cc.sys.localStorage.setItem(n, e[n]);
null != t && t();
} else FBInstant.player.setDataAsync(e).then(function() {
null != t && t();
});
};
g.prototype.playWith = function(e, t, n) {
if ("undefined" != typeof FBInstant) {
var i = this;
FBInstant.context.createAsync(e).then(function() {
i.doShare(t);
n(null != n);
});
} else null != n && n(!0);
};
g.prototype.getFriendsInfo = function(e) {
if ("undefined" == typeof FBInstant) {
console.log("set rank fail");
null != e && e({});
} else {
var t = [];
FBInstant.player.getConnectedPlayersAsync().then(function(n) {
for (var i = 0; i < n.length; i += 1) {
t[i] = {};
t[i].id = n[i].getID();
t[i].name = n[i].getName();
t[i].headUrl = n[i].getPhoto();
}
null != e && e(t);
});
}
};
g.prototype.getSelfInfo = function(e) {
if ("undefined" != typeof FBInstant) {
null != e && e(u);
return u;
}
console.log("set rank fail");
null !== e && e({});
};
g.prototype.setRankScore = function(e, t, n, i) {
if ("undefined" == typeof FBInstant) console.log("set rank fail"); else {
var o, a = FBInstant.context.getID();
null != a && (a = "." + a);
if (1 == e) {
o = "Friends";
if (null == a) {
console.log(FBInstant.context.getType());
a = "";
return;
}
} else {
if (2 != e) {
null != i && i("wrong type");
console.log("wrong type");
return;
}
o = "World";
a = "";
}
FBInstant.getLeaderboardAsync(o + a).then(function(e) {
console.log(e.getName());
return e.setScoreAsync(t, n);
}).then(function() {
return console.log("Score saved");
}).catch(function(e) {
return console.error(e);
});
}
};
g.prototype.getRankScore = function(e, t) {
if ("undefined" == typeof FBInstant) console.log("get self rank fail"); else {
var n, i = FBInstant.context.getID();
null != i && (i = "." + i);
if (1 == e) {
n = "Friends";
if (null == i) {
console.log(FBInstant.context.getType());
i = "";
return;
}
} else {
if (2 != e) {
null != t && t("wrong type");
console.log("wrong type");
return;
}
n = "World";
i = "";
}
FBInstant.getLeaderboardAsync(n + i).then(function(e) {
return e.getPlayerEntryAsync();
}).then(function(e) {
var n = {};
n.id = e.getPlayer().getID();
n.no = e.getRank();
n.name = e.getPlayer().getName();
n.score = e.getScore();
n.headUrl = e.getPlayer().getPhoto();
t(n);
}).catch(function(e) {
return console.error(e);
});
}
};
g.prototype.getPercent = function(e) {
if ("undefined" == typeof FBInstant) {
console.log("get rank fail");
null != e && e();
} else FBInstant.getLeaderboardAsync("World").then(function(e) {
return e.getEntryCountAsync();
}).then(function(t) {
null != e && e(t);
});
};
g.prototype.getRank = function(e, t, n, i) {
if ("undefined" == typeof FBInstant) console.log("get rank fail"); else {
var o, a = FBInstant.context.getID();
null != a && (a = "." + a);
if (1 == e) {
o = "Friends";
if (null == a) {
console.log(FBInstant.context.getType());
a = "";
null != i && i([]);
return;
}
} else {
if (2 != e) {
null != i && i("wrong type");
console.log("wrong type");
return;
}
o = "World";
a = "";
}
var r = [];
FBInstant.getLeaderboardAsync(o + a).then(function(e) {
return e.getEntriesAsync(t, n);
}).then(function(e) {
for (var t = 0; t < e.length; t++) {
r[t] = {};
r[t].id = e[t].getPlayer().getID();
r[t].no = e[t].getRank();
r[t].name = e[t].getPlayer().getName();
r[t].score = e[t].getScore();
r[t].headUrl = e[t].getPlayer().getPhoto();
}
null != i && i(r);
}).catch(function(e) {
return console.error(e);
});
}
};
g.prototype.postRankToMessage = function(e, t) {
if ("undefined" == typeof FBInstant) console.log("post rank fail"); else {
var n, i = FBInstant.context.getID();
null != i && (i = "." + i);
if (1 == e) {
n = "Friends";
if (null == i) {
console.log(FBInstant.context.getType());
i = "";
return;
}
} else {
if (2 != e) {
null != t && t("wrong type");
console.log("wrong type");
return;
}
n = "World";
i = "";
}
FBInstant.updateAsync({
action: "LEADERBOARD",
name: n + i
}).then(function() {
return console.log("Update Posted");
}).catch(function(e) {
return console.error(e);
});
}
};
t.exports = function() {
var e;
return function() {
e || (e = new g());
return e;
};
}();
cc._RF.pop();
}, {
"../Utils/Utils": "Utils",
"./script/sdk_ad": "sdk_ad",
LanguageData: "LanguageData"
} ],
facebook: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6542a5UC9RCqLxrtQE6lpYc", "facebook");
var i = e("./utils/SDKUtils"), o = e("./script/sdk_ad"), a = "AD_LOADING", r = "AD_LOAD_SUCCESS", c = "AD_COMPLETE", s = "281530152603837", l = 2, u = 1, d = 1, h = 0, f = {}, p = function() {
this.cb = null;
this.videoAd = null;
this.videoAdState = null;
this.InterstitialAd = null;
this.InterstitialAdState = null;
this.playTimes = 0;
this.sdk_ad = null;
};
p.prototype.init = function() {
this.initOP();
if ("undefined" != typeof FBInstant) {
this.playTimes = 0;
this.loadVideoAd();
this.loadInterstitialAd();
f.name = FBInstant.player.getName();
cc.loader.load(FBInstant.player.getPhoto(), function(e, t) {
f.head = new cc.SpriteFrame(t);
});
f.id = FBInstant.player.getID();
this.getLocale();
} else e("LanguageData");
};
p.prototype.initOP = function() {
var e = this, t = new XMLHttpRequest();
t.onreadystatechange = function() {
if (4 == t.readyState && 200 == t.status) {
var n = JSON.parse(t.responseText);
console.log("response", n);
if (500 != n.code) {
var i = n.data, o = i.interstitial_op, a = i.interstitial_count, r = i.video_on, c = i.interstitial_on;
e.setUp(r, c, a, o);
}
}
};
t.open("GET", "https://baidu.com:8003/games.detail?game_id=" + SDK().getGameId(), !0);
t.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
t.send();
};
p.prototype.setUp = function(e, t, n, i) {
l = n;
u = e;
h = i;
if ((d = t) >= 1 && h >= 1) {
var a = cc.find("Canvas/sdk_ad");
null != a && (this.sdk_ad = a.getComponent(o));
this.reLoadOpAd();
}
};
p.prototype.reLoadOpAd = function() {
if (null != this.sdk_ad && d >= 1 && h >= 1) {
var e = this, t = new XMLHttpRequest();
t.onreadystatechange = function() {
if (4 == t.readyState && 200 == t.status) {
var n = JSON.parse(t.responseText);
if (500 != n.code) {
var i = n.data.rows[0];
if (null != i) {
var o = i.pic3, a = i.game_id;
e.sdk_ad.setAd(o, a);
}
}
}
};
t.open("GET", "https://baidu.com:8003/games.recommend?game_id=" + s + "&amount=1", !0);
t.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
t.send();
}
};
p.prototype.getRecommendGames = function(e, t) {
var n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 == n.readyState && 200 == n.status) {
var e = JSON.parse(n.responseText);
500 != e.code ? null != t && t(!0, e) : null != t && t(!1, {});
}
};
n.open("GET", "https://baidu.com:8003/games.recommend?game_id=" + s + "&amount=" + e, !0);
n.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
n.send();
};
p.prototype.getItem = function(e, t) {
var n = cc.sys.localStorage.getItem(e);
null != n && null !== n && "" != n && "undefined" != n || cc.sys.localStorage.setItem(e, null);
if ("undefined" == typeof FBInstant) {
"undefined" != typeof (i = JSON.parse(cc.sys.localStorage.getItem(e))) && null != i || (i = 0);
t(i, e);
} else {
var i = 0;
FBInstant.player.getDataAsync([ "" + e ]).then(function(n) {
i = "undefined" == typeof n[e] ? 0 : n[e];
t(i, e);
});
}
};
p.prototype.setItem = function(e, t) {
if ("undefined" == typeof FBInstant) {
for (var n in e) cc.sys.localStorage.setItem(n, e[n]);
null != t && t();
} else FBInstant.player.setDataAsync(e).then(function() {
null != t && t();
});
};
p.prototype.getLocale = function() {
if ("undefined" != typeof FBInstant) return FBInstant.getLocale();
};
p.prototype.getGameId = function() {
return s;
};
p.prototype.getName = function() {
return "undefined" == typeof FBInstant ? "undefined" : FBInstant.player.getName();
};
p.prototype.canCreateShortcutAsync = function(e) {
"undefined" != typeof FBInstant && FBInstant.canCreateShortcutAsync().then(function(t) {
t ? FBInstant.createShortcutAsync().then(function() {
null != e && e(!0);
}).catch(function() {
null != e && e(!1);
}) : null != e && e(!1);
});
};
p.prototype.switchGameAsync = function(e) {
if ("undefined" == typeof FBInstant) return !1;
FBInstant.switchGameAsync(e).catch(function(e) {});
};
p.prototype.getCatalogAsync = function(e) {
"undefined" != typeof FBInstant ? FBInstant.payments.getCatalogAsync().then(function(t) {
console.log(t);
e(t);
}) : null != e && e([]);
};
p.prototype.purchaseAsync = function(e, t, n) {
"undefined" != typeof FBInstant ? FBInstant.payments.purchaseAsync({
productID: e,
developerPayload: t
}).then(function(e) {
console.log(!0, e);
n(e);
}).catch(function(e) {
n(!1, null);
}) : null != n && n(!1, null);
};
p.prototype.getPurchasesAsync = function(e) {
"undefined" != typeof FBInstant ? FBInstant.payments.getPurchasesAsync().then(function(t) {
e(t);
}).catch(function(t) {
e([]);
}) : null != e && e(!1, null);
};
p.prototype.consumePurchaseAsync = function(e, t) {
"undefined" != typeof FBInstant ? FBInstant.payments.consumePurchaseAsync(e).then(function() {
t(!0);
}).catch(function(e) {
t(!1);
}) : null != t && t(!1, null);
};
p.prototype.share = function(e, t) {
if ("undefined" != typeof FBInstant) {
var n = this;
FBInstant.context.chooseAsync().then(function() {
n.doShare(e);
null != t && t(!0);
}).catch(function(e) {
null != e.code && "SAME_CONTEXT" == e.code && null != t && t(!1);
});
} else null != t && t(!0);
};
p.prototype.doShare = function(e) {
var t = this.getName() + " finish " + e + " stars,Can you beat me?";
this.getName();
cc.loader.loadRes("texture2d/game_icon", cc.Texture2D, function(e, n) {
var i = document.createElement("canvas"), o = i.getContext("2d");
i.width = 600;
i.height = 420;
var a = n.getHtmlElementObj();
o.drawImage(a, 0, 0);
var r = i.toDataURL("image/png");
FBInstant.updateAsync({
action: "CUSTOM",
cta: "Play Game",
template: "join_fight",
image: r,
text: t,
data: {
myReplayData: "..."
},
strategy: "IMMEDIATE",
notification: "NO_PUSH"
}).then(function() {});
});
};
p.prototype.shareBestScore3Times = function(e) {
SDK().getItem("share_times", function(t) {
var n = Math.floor(Date.now() / 1e3);
if (null == t || t <= 0 || t - n < 0) {
var i = {};
i.share_times = n + 180;
SDK().setItem(i, function() {
SDK().shareBestScore(e);
});
}
});
};
p.prototype.shareBestScore = function(e, t) {
null != e && "" != e || (e = "all");
this.getItem(e, function(e) {
SDK().share(e, function(e) {
t && t(e);
});
}.bind(this));
};
p.prototype.plusPlayTimes = function() {
this.playTimes++;
if (this.playTimes > 1 && this.playTimes % this.getInterstitialCount() == 0 && this.playTimes >= this.getInterstitialCount() || this.getInterstitialCount() <= 1 && this.playTimes > 1) {
var e = 200 + 1e3 * Math.random();
setTimeout(function() {
this.showInterstitialAd(function(e) {
console.log("播放Done");
}, !1);
}.bind(this), e);
}
this.playTimes % 5 == 0 && this.canCreateShortcutAsync();
5 == this.playTimes && this.shareBestScore("all", null);
};
p.prototype.openVideoAd = function() {
return u >= 1;
};
p.prototype.openinterstitialAd = function() {
return d >= 1;
};
p.prototype.getInterstitialCount = function() {
return l;
};
p.prototype.isPlayOpAD = function() {
return 10 * cc.random0To1() <= h;
};
p.prototype.loadInterstitialAd = function() {
"undefined" != typeof FBInstant && this.openinterstitialAd() && FBInstant.getInterstitialAdAsync("281530152603837_281531689270350").then(function(e) {
this.InterstitialAd = e;
this.InterstitialAdState = a;
return this.InterstitialAd.loadAsync();
}.bind(this)).catch(function(e) {}.bind(this)).then(function() {
this.InterstitialAdState = r;
}.bind(this));
};
p.prototype.showInterstitialAd = function(e, t) {
if (!(d < 1)) if (null != this.sdk_ad && h >= 1 && i.GetRandomNum(1, 10) <= h && !t || null == this.InterstitialAd && null != this.sdk_ad && !t) {
console.log("sdk_ad:", this.sdk_ad);
this.sdk_ad.show();
this.stat(1, this.sdk_ad.game_id);
e && e(!0);
} else if (null != this.InterstitialAd) {
if ("undefined" == typeof FBInstant) {
e && e(!1);
return;
}
this.InterstitialAd.showAsync().then(function() {
this.InterstitialAdState = c;
e && e(!0);
this.loadInterstitialAd();
}.bind(this)).catch(function(t) {
this.InterstitialAdState = c;
e && e(!1);
}.bind(this));
} else {
e && e(!1);
this.loadInterstitialAd();
}
};
p.prototype.loadVideoAd = function() {
"undefined" != typeof FBInstant && this.openVideoAd() && FBInstant.getRewardedVideoAsync("281530152603837_281532319270287").then(function(e) {
this.videoAd = e;
this.videoAdState = a;
return this.videoAd.loadAsync();
}.bind(this)).then(function() {
this.videoAdState = r;
}.bind(this));
};
p.prototype.hasVideoAd = function() {
return "undefined" != typeof FBInstant && null != this.videoAd;
};
p.prototype.showVideoAd = function(e) {
if ("undefined" != typeof FBInstant) if (null != this.videoAd) this.videoAd.showAsync().then(function() {
this.videoAdState = c;
e && e(!0);
this.loadVideoAd();
}.bind(this)).catch(function(t) {
this.videoAdState = c;
e && e(!1);
this.loadVideoAd();
}.bind(this)); else {
e && e(!1);
this.loadVideoAd();
} else e && e(!1);
};
p.prototype.stat = function(e, t) {
var n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 == n.readyState && 200 == n.status) JSON.parse(n.responseText);
};
n.open("GET", "https://baidu.com:8003/games.stat?game_id=" + t + "&type=" + e, !0);
n.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
n.send();
};
p.prototype.playWith = function(e, t, n) {
if ("undefined" != typeof FBInstant) {
var i = this;
FBInstant.context.createAsync(e).then(function() {
i.doShare(t);
n(null != n);
}).catch(n(!1));
} else null != n && n(!0);
};
p.prototype.getSelfInfo = function(e) {
if ("undefined" != typeof FBInstant) {
null != e && e(f);
return f;
}
console.log("set rank fail");
null !== e && e({});
};
p.prototype.setRankScore = function(e, t, n, i) {
if ("undefined" == typeof FBInstant) console.log("set rank fail"); else {
var o, a = FBInstant.context.getID();
null != a && (a = "." + a);
if (1 == e) {
o = "Friends";
if (null == a) {
console.log(FBInstant.context.getType());
a = "";
return;
}
} else {
if (2 != e) {
null != i && i("wrong type");
console.log("wrong type");
return;
}
o = "World";
a = "";
}
FBInstant.getLeaderboardAsync(o + a).then(function(e) {
console.log(e.getName());
return e.setScoreAsync(t, n);
}).then(function() {
return console.log("Score saved");
}).catch(function(e) {
return console.error(e);
});
}
};
p.prototype.getRankScore = function(e, t) {
if ("undefined" == typeof FBInstant) console.log("get self rank fail"); else {
var n, i = FBInstant.context.getID();
null != i && (i = "." + i);
if (1 == e) {
n = "Friends";
if (null == i) {
console.log(FBInstant.context.getType());
i = "";
return;
}
} else {
if (2 != e) {
null != t && t("wrong type");
console.log("wrong type");
return;
}
n = "World";
i = "";
}
FBInstant.getLeaderboardAsync(n + i).then(function(e) {
return e.getPlayerEntryAsync();
}).then(function(e) {
var n = {};
n.id = e.getPlayer().getID();
n.no = e.getRank();
n.name = e.getPlayer().getName();
n.score = e.getScore();
n.headUrl = e.getPlayer().getPhoto();
t(n);
}).catch(function(e) {
return console.error(e);
});
}
};
p.prototype.getPercent = function(e) {
if ("undefined" == typeof FBInstant) {
console.log("get rank fail");
null != e && e();
} else FBInstant.getLeaderboardAsync("World").then(function(e) {
return e.getEntryCountAsync();
}).then(function(t) {
null != e && e(t);
});
};
p.prototype.getRank = function(e, t, n, i) {
if ("undefined" == typeof FBInstant) console.log("get rank fail"); else {
var o, a = FBInstant.context.getID();
null != a && (a = "." + a);
if (1 == e) {
o = "Friends";
if (null == a) {
console.log(FBInstant.context.getType());
a = "";
null != i && i([]);
return;
}
} else {
if (2 != e) {
null != i && i("wrong type");
console.log("wrong type");
return;
}
o = "World";
a = "";
}
var r = [];
FBInstant.getLeaderboardAsync(o + a).then(function(e) {
return e.getEntriesAsync(t, n);
}).then(function(e) {
for (var t = 0; t < e.length; t++) {
r[t] = {};
r[t].id = e[t].getPlayer().getID();
r[t].no = e[t].getRank();
r[t].name = e[t].getPlayer().getName();
r[t].score = e[t].getScore();
r[t].headUrl = e[t].getPlayer().getPhoto();
}
null != i && i(r);
}).catch(function(e) {
return console.error(e);
});
}
};
p.prototype.getFriendsRank = function(e, t, n, i) {
if ("undefined" == typeof FBInstant) {
console.log("getFriendsInfo fail");
null != i && i({});
} else {
var o, a = FBInstant.context.getID();
null != a && (a = "." + a);
if (1 == e) {
o = "Friends";
if (null == a) {
console.log(FBInstant.context.getType());
a = "";
null != i && i([]);
return;
}
} else {
if (2 != e) {
null != i && i("wrong type");
console.log("wrong type");
return;
}
o = "World";
a = "";
}
var r = [];
FBInstant.getLeaderboardAsync(o + a).then(function(e) {
return e.getConnectedPlayerEntriesAsync(t, n);
}).then(function(e) {
for (var t = 0; t < e.length; t += 1) {
r[t] = {};
r[t].id = e[t].getPlayer().getID();
r[t].name = e[t].getPlayer().getName();
r[t].headUrl = e[t].getPlayer().getPhoto();
r[t].No = e[t].getRank();
r[t].score = e[t].getScore();
}
null != i && i(r);
});
}
};
p.prototype.postRankToMessage = function(e, t) {
if ("undefined" == typeof FBInstant) console.log("post rank fail"); else {
var n, i = FBInstant.context.getID();
null != i && (i = "." + i);
if (1 == e) {
n = "Friends";
if (null == i) {
console.log(FBInstant.context.getType());
i = "";
return;
}
} else {
if (2 != e) {
null != t && t("wrong type");
console.log("wrong type");
return;
}
n = "World";
i = "";
}
FBInstant.updateAsync({
action: "LEADERBOARD",
name: n + i
}).then(function() {
return console.log("Update Posted");
}).catch(function(e) {
return console.error(e);
});
}
};
t.exports = function() {
var e;
return function() {
e || (e = new p());
return e;
};
}();
cc._RF.pop();
}, {
"./script/sdk_ad": "sdk_ad",
"./utils/SDKUtils": "SDKUtils",
LanguageData: "LanguageData"
} ],
globals: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f774aa2KJxEp68y3WRvT7GZ", "globals");
window.SDK = e("../SDK/facebook");
window.playTimesAD = 2;
window.isDebug = !1;
window.wx, window.tt;
window.lineWidth = 6;
window.plusHelp = 5;
window.openAllLevel = !1;
window.langArr = [ "English", "Português", "El español", "भारत गणराज्य", "中文" ];
window.nameArr = [ "en", "pt", "es", "in", "zh" ];
window.D = {
sdk: null
};
cc._RF.pop();
}, {
"../SDK/facebook": "facebook"
} ],
in: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "912d1ipPJ1OWJpXTL4aCmxu", "in");
var i;
function o(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
window.i18n || (window.i18n = {});
window.i18n.languages || (window.i18n.languages = {});
window.i18n.languages.in = {
label_text: (i = {
helpTip: "दिशा निर्देशित करने और भूलभुलैया के बाहर निकलने के लिए स्क्रीन स्लाइड करें! !",
watchAdTip: "अग्रिम में इस स्तर को अनलॉक करने के लिए वीडियो विज्ञापन \n देखें!",
watchAdBtn: "स्तर अनलॉक करें",
invBtn: "दोस्तों को आमंत्रित करें",
watchAdHelip: "वीडियो देखें \n 5 सहायता प्राप्त करें!"
}, o(i, "watchAdBtn", "आमंत्रण"), o(i, "shareAdHelp", "और सुझाव प्राप्त करें!"), 
o(i, "shareAdHelpText", "दोस्तों को 3 युक्तियाँ प्राप्त करने के लिए आमंत्रित करें!"), 
o(i, "shareAdBtn", "शेयर"), o(i, "later", "पास"), o(i, "replay", "ठीक"), o(i, "timeisup", "अधिक समय पाने के लिए वीडियो देखें!"), 
o(i, "timeisup_share", "दोस्तों के साथ साझा करें, \n अतिरिक्त 5 सेकंड!"), o(i, "timeisup_end", "समय खत्म हो गया है!"), 
o(i, "noads", "विज्ञापन अस्थायी रूप से गायब है, \n कृपया बाद में प्रयास करें।"), 
o(i, "inv_again", "वर्तमान उपयोगकर्ताओं को निमंत्रण नहीं भेज सकते हैं, कृपया अन्य उपयोगकर्ताओं को आमंत्रित करने का प्रयास करें।"), 
o(i, "queding", "निर्धारित"), o(i, "receiveGift", "बधाई! सहायता प्राप्त करें!"), 
o(i, "getCoins", "अधिक सिक्के प्राप्त करें।"), o(i, "getCoinText", "100 स्वर्ण सिक्के प्राप्त करने के लिए वीडियो देखें?"), 
o(i, "getHearts", "अधिक शारीरिक शक्ति प्राप्त करें।"), o(i, "getHeartText", "5 व्यक्तिगत शक्तियों को पाने के लिए किसी मित्र को आमंत्रित करें या वीडियो देखें"), 
o(i, "giftTitel", "उपहार पैकेज"), o(i, "settingTitel", "सेट करें"), o(i, "langTitel", "भाषा:"), 
o(i, "musicTitel", "संगीत:"), o(i, "moveTitel", "और कदम उठाएं!"), o(i, "unlockTitel", "स्तर अनलॉक करें"), 
o(i, "unlockText", "स्तर को अनलॉक करने के लिए मित्रों को आमंत्रित करें"), o(i, "failTitel", "असफल"), 
o(i, "videoText", "वीडियो गुम है। कृपया पुनः प्रयास करें।"), o(i, "shareText", "एक और समूह या दोस्त को साझा करें।"), 
i)
};
cc._RF.pop();
}, {} ],
"polyglot.min": [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};
(function(e, o) {
"function" == typeof define && define.amd ? define([], function() {
return o(e);
}) : "object" == ("undefined" == typeof n ? "undefined" : i(n)) ? t.exports = o(e) : e.Polyglot = o(e);
})(void 0, function(e) {
function t(e) {
e = e || {}, this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en", 
this.allowMissing = !!e.allowMissing, this.warn = e.warn || a;
}
function n(e, t, n) {
var i, a;
return null != n && e ? i = function(e) {
return e.replace(/^\s+|\s+$/g, "");
}((a = e.split(r))[o(t, n)] || a[0]) : i = e, i;
}
function o(e, t) {
return c[function(e) {
var t = function(e) {
var t, n, i, o = {};
for (t in e) if (e.hasOwnProperty(t)) {
n = e[t];
for (i in n) o[n[i]] = t;
}
return o;
}(s);
return t[e] || t.en;
}(e)](t);
}
function a(t) {
e.console && e.console.warn && e.console.warn("WARNING: " + t);
}
t.VERSION = "0.4.3", t.prototype.locale = function(e) {
return e && (this.currentLocale = e), this.currentLocale;
}, t.prototype.extend = function(e, t) {
var n;
for (var o in e) e.hasOwnProperty(o) && (n = e[o], t && (o = t + "." + o), "object" == ("undefined" == typeof n ? "undefined" : i(n)) ? this.extend(n, o) : this.phrases[o] = n);
}, t.prototype.clear = function() {
this.phrases = {};
}, t.prototype.replace = function(e) {
this.clear(), this.extend(e);
}, t.prototype.t = function(e, t) {
var i, o;
return "number" == typeof (t = null == t ? {} : t) && (t = {
smart_count: t
}), "string" == typeof this.phrases[e] ? i = this.phrases[e] : "string" == typeof t._ ? i = t._ : this.allowMissing ? i = e : (this.warn('Missing translation for key: "' + e + '"'), 
o = e), "string" == typeof i && (t = function(e) {
var t = {};
for (var n in e) t[n] = e[n];
return t;
}(t), o = function(e, t) {
for (var n in t) "_" !== n && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}", "g"), t[n]));
return e;
}(o = n(i, this.currentLocale, t.smart_count), t)), o;
}, t.prototype.has = function(e) {
return e in this.phrases;
};
var r = "||||", c = {
chinese: function(e) {
return 0;
},
german: function(e) {
return 1 !== e ? 1 : 0;
},
french: function(e) {
return e > 1 ? 1 : 0;
},
russian: function(e) {
return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
},
czech: function(e) {
return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
},
polish: function(e) {
return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
},
icelandic: function(e) {
return e % 10 != 1 || e % 100 == 11 ? 1 : 0;
}
}, s = {
chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
french: [ "fr", "tl", "pt-br" ],
russian: [ "hr", "ru" ],
czech: [ "cs" ],
polish: [ "pl" ],
icelandic: [ "is" ]
};
return t;
});
cc._RF.pop();
}, {} ],
pt: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b879aUD7d5JHJbnkZ5rdQt8", "pt");
var i;
function o(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
window.i18n || (window.i18n = {});
window.i18n.languages || (window.i18n.languages = {});
window.i18n.languages.pt = {
label_text: (i = {
helpTip: "Deslize a tela para guiar a direção e encontrar a saída do labirinto! !",
watchAdTip: "Veja o anúncio de vídeo\n para desbloquear este nível antecipadamente!",
watchAdBtn: "Nível de desbloqueio",
invBtn: "Convide amigos",
watchAdHelip: "Assista ao vídeo\n receba 5 ajuda!"
}, o(i, "watchAdBtn", "Convite"), o(i, "shareAdHelp", "Obtenha mais dicas!"), o(i, "shareAdHelpText", "Convide amigos para receber 3 dicas!"), 
o(i, "shareAdBtn", "Compartilhar"), o(i, "later", "Fechar"), o(i, "replay", "Okay"), 
o(i, "timeisup", "Assista ao vídeo para ganhar mais tempo!"), o(i, "timeisup_share", "Compartilhe com os amigos,\n extra 5 segundos!"), 
o(i, "timeisup_end", "O tempo acabou!"), o(i, "noads", "O anúncio está temporariamente ausente,\n por favor tente mais tarde."), 
o(i, "inv_again", "Não é possível enviar convites para usuários atuais, por favor, tente convidar outros usuários."), 
o(i, "queding", "Determinar"), o(i, "receiveGift", "Parabéns! Consiga uma ajuda!"), 
o(i, "getCoins", "Consiga mais moedas."), o(i, "getCoinText", "Assista ao vídeo para receber 100 moedas de ouro?"), 
o(i, "getHearts", "Obtenha mais força física."), o(i, "getHeartText", "Convide um amigo ou assista a um vídeo para obter cinco pontos fortes individuais"), 
o(i, "giftTitel", "Pacote de presente"), o(i, "settingTitel", "Configuração"), o(i, "langTitel", "Idioma:"), 
o(i, "musicTitel", "Music:"), o(i, "moveTitel", "Obtenha mais passos！"), o(i, "unlockTitel", "Nível de desbloqueio"), 
o(i, "unlockText", "Convide amigos para desbloquear o nível"), o(i, "failTitel", "fail"), 
o(i, "videoText", "Vídeo Falta. Por favor, tente de novo."), o(i, "shareText", "Por favor parte para outro Grupo ou Amigo."), 
i)
};
cc._RF.pop();
}, {} ],
sdk_ad: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7bbceGVbB9GqazOzZL48/et", "sdk_ad");
cc.Class({
extends: cc.Component,
properties: {
adSprite: {
default: null,
type: cc.Sprite
},
pic: {
default: ""
},
game_id: {
default: ""
},
hasAd: !1
},
onLoad: function() {},
show: function() {
null != this.node && this.node.setPosition(cc.v2(0, 0));
},
setAd: function(e, t) {
if (null != this.node && null != this.adSprite) {
this.pic = e;
this.game_id = t;
var n = this, i = this.pic;
cc.loader.load(i, function(e, t) {
n.adSprite.spriteFrame = new cc.SpriteFrame(t);
});
this.hasAd = !0;
}
},
onCloseBtnClicked: function() {
this.node.setPosition(cc.v2(1500, 1500));
SDK().reLoadOpAd();
SDK().stat(2, this.game_id);
},
onPlayBtnClicked: function() {
this.onCloseBtnClicked();
SDK().switchGameAsync(this.game_id);
}
});
cc._RF.pop();
}, {} ],
zh: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "052f3sYjnRNDY4qAIzWph5c", "zh");
var i;
function o(e, t, n) {
t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
}) : e[t] = n;
return e;
}
window.i18n || (window.i18n = {});
window.i18n.languages || (window.i18n.languages = {});
window.i18n.languages.zh = {
label_text: (i = {
helpTip: "滑动屏幕指引方向，找出迷宫的出口！!",
watchAdTip: "观看视频广告 \n可提前解锁此关卡!",
watchAdBtn: "解锁关卡",
invBtn: "邀请好友",
watchAdHelip: "观看视频  \n可获得5个帮助!"
}, o(i, "watchAdBtn", "邀请"), o(i, "shareAdHelp", "获得更多提示!"), o(i, "shareAdHelpText", "观看视频可以获得5个提示!"), 
o(i, "shareAdBtn", "分享"), o(i, "later", "关闭"), o(i, "replay", "好的"), o(i, "timeisup", "观看视频获得更多时间!"), 
o(i, "timeisup_share", "分享给好友获得\n额外的5秒时间!"), o(i, "timeisup_end", "时间到了!"), o(i, "noads", "广告暂时缺失，\n请稍后尝试。"), 
o(i, "inv_again", "不能给当前用户发送邀请，请尝试邀请其他用户."), o(i, "queding", "确定"), o(i, "receiveGift", "恭喜！获得一个帮助!"), 
o(i, "getCoins", "获取更多的金币。"), o(i, "getCoinText", "看视频来获得100金币?"), o(i, "getHearts", "获取更多的体力。"), 
o(i, "getHeartText", "观看视频获得五个体力"), o(i, "giftTitel", "礼包"), o(i, "settingTitel", "设置"), 
o(i, "langTitel", "语言:"), o(i, "musicTitel", "音乐:"), o(i, "moveTitel", "获得更多步数!"), 
o(i, "unlockTitel", "解锁关卡"), o(i, "unlockText", "邀请好友来解锁关卡"), o(i, "failTitel", "失败"), 
o(i, "videoText", "视频不见了，请再试一次。"), o(i, "shareText", "请与另一个朋友或群组分享。"), i)
};
cc._RF.pop();
}, {} ]
}, {}, [ "globals", "GameApplication", "Player", "SoundManager", "ChannelID", "SDKManager", "TipView", "BaseBanner", "BaseChannel", "BaseNativeAd", "BaseRecorder", "BaseRewardAd", "BaseShare", "InterstitialAd", "LoginInterface", "NativeAdItemModel", "DevChannel", "DevLogin", "EventDispatcher", "GlobalEvent", "facebook", "facebook111", "OppoBannerAd", "OppoChannel", "OppoInsertAd", "OppoNativeAd", "OppoRewardAd", "sdk_ad", "MusicManager", "SoundView", "TTBanner", "TTChannel", "TTInterstitialAd", "TTLogin", "TTRecorder", "TTShare", "TTVideoAd", "SDKUtils", "VivoBannerAd", "VivoChannel", "VivoInsertAd", "VivoNativeAd", "VivoRewardAd", "AnimFunc", "NormalAnimation", "RotationForever", "ZoominForever", "ZoominForever1", "Enemy", "GameView", "HexCell", "Role", "Tower", "LevelView", "LoadLanguage", "LoadingView", "MainView", "RankView", "SDKInit", "SettingView", "TimeGift", "Utils", "en", "es", "in", "pt", "zh", "LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min" ]);