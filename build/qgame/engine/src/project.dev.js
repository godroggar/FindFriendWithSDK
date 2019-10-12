window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AnimFunc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "069bcLwjtNB/LYJrOEJbxa+", "AnimFunc");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      shake: function shake() {
        cc.log("helpBtnShake");
        var a1 = cc.rotateTo(.1, 15);
        var a2 = cc.rotateTo(.1, 0);
        var a3 = cc.rotateTo(.1, -15);
        var a4 = cc.rotateTo(.12, 0);
        var rep = cc.repeat(cc.sequence(a1, a2, a3, a4), 3);
        this.node.stopAllActions();
        this.node.runAction(rep);
      }
    });
    cc._RF.pop();
  }, {} ],
  BaseBanner: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ff269NLg05HNbS8BbPVyYzL", "BaseBanner");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var BaseBanner = function() {
      function BaseBanner(id) {
        _classCallCheck(this, BaseBanner);
        this.adUnitID = "";
        this.isShow = 0;
        this.finish = false;
        this.bannerAd = null;
        this.isShowing = false;
        this.adUnitID = id;
        this.init();
      }
      _createClass(BaseBanner, [ {
        key: "init",
        value: function init() {
          var _this = this;
          this.create(function(err) {
            if (err) _this.reLoad(); else {
              _this.finish = true;
              1 == _this.isShow ? _this.showBanner() : 2 == _this.isShow && _this.hideBanner();
            }
          });
        }
      }, {
        key: "reLoad",
        value: function reLoad() {
          var _this2 = this;
          console.log(" reLoad ");
          var id = setTimeout(function() {
            _this2.init();
            clearTimeout(id);
          }, 8e3);
        }
      }, {
        key: "getHeight",
        value: function getHeight() {
          return 0;
        }
      }, {
        key: "showBanner",
        value: function showBanner() {
          cc.log(" show banner =====================");
          this.isShow = 1;
          if (!this.finish) return;
          if (this.isShowing) return;
          this.isShowing = true;
          if (!this.bannerAd) return;
          this.show();
        }
      }, {
        key: "hideBanner",
        value: function hideBanner() {
          if (!this.bannerAd) return;
          this.isShow = 2;
          if (!this.finish) return;
          if (!this.isShowing) return;
          this.isShowing = false;
          this.hide();
        }
      }, {
        key: "destroyBanner",
        value: function destroyBanner() {
          if (!this.bannerAd) return;
          this.destroy();
          this.isShow = 0;
          this.finish = false;
          this.bannerAd = null;
        }
      }, {
        key: "pause",
        value: function pause() {
          this.isShowing && this.hide();
        }
      }, {
        key: "resume",
        value: function resume() {
          this.isShowing && this.show();
        }
      }, {
        key: "show",
        value: function show() {}
      }, {
        key: "hide",
        value: function hide() {}
      }, {
        key: "destroy",
        value: function destroy() {}
      }, {
        key: "create",
        value: function create(callback) {}
      } ]);
      return BaseBanner;
    }();
    exports.default = BaseBanner;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  BaseChannel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a19bA5FGtPyoNylbdrLgkS", "BaseChannel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var isNull = function isNull(obj) {
      return null == obj || void 0 == obj;
    };
    var BaseChannel = function() {
      function BaseChannel(id) {
        _classCallCheck(this, BaseChannel);
        this.id = id;
      }
      _createClass(BaseChannel, [ {
        key: "getRewardAd",
        value: function getRewardAd() {
          return this.rewardAd;
        }
      }, {
        key: "getBannerAd",
        value: function getBannerAd() {
          return this.bannerAd;
        }
      }, {
        key: "getShare",
        value: function getShare() {
          return this.share;
        }
      }, {
        key: "getID",
        value: function getID() {
          return this.id;
        }
      }, {
        key: "isHaveNativeAd",
        value: function isHaveNativeAd() {
          return void 0 != this.nativeAd;
        }
      }, {
        key: "reportAdClick",
        value: function reportAdClick(adId) {
          this.isHaveNativeAd() && this.nativeAd.reportAdClick(adId);
        }
      }, {
        key: "getBannerHeight",
        value: function getBannerHeight() {
          if (this.isHaveBannerAd()) return this.bannerAd.getHeight();
          return 0;
        }
      }, {
        key: "nativeAddEventListener",
        value: function nativeAddEventListener(eventName, func, target) {
          if (this.isHaveNativeAd()) {
            cc.log(" nativeAddEventListener ", this.nativeAd);
            this.nativeAd.addEventListener(eventName, func, target);
          }
        }
      }, {
        key: "reportAdShow",
        value: function reportAdShow(adId) {
          this.isHaveNativeAd() && this.nativeAd.reportAdShow(adId);
        }
      }, {
        key: "getAdItems",
        value: function getAdItems() {
          this.isHaveNativeAd() && this.nativeAd.getAdItems();
          return [];
        }
      }, {
        key: "isHaveBannerAd",
        value: function isHaveBannerAd() {
          console.log("isHaveBannerAd" + this.bannerAd != void 0);
          return void 0 != this.bannerAd;
        }
      }, {
        key: "isHaveStore",
        value: function isHaveStore() {
          return void 0 != this.payMgr;
        }
      }, {
        key: "isHaveShare",
        value: function isHaveShare() {
          return void 0 != this.share;
        }
      }, {
        key: "initFinish",
        value: function initFinish() {}
      }, {
        key: "init",
        value: function init() {}
      }, {
        key: "recorderStart",
        value: function recorderStart(obj) {
          console.log("recorderStart this.isHaveRecorder()  ", this.isHaveRecorder());
          this.isHaveRecorder() && this.recorder.start(obj);
        }
      }, {
        key: "getRecorder",
        value: function getRecorder() {
          return this.recorder;
        }
      }, {
        key: "recorderStop",
        value: function recorderStop() {
          var isSave = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          console.log("recorderStop this.isHaveRecorder()  ", this.isHaveRecorder(), isSave);
          this.isHaveRecorder() && this.recorder.stop(isSave);
        }
      }, {
        key: "addScript",
        value: function addScript(url) {
          var head = document.getElementsByTagName("head")[0];
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.id = "" + this.id;
          script.onload = this.initFinish.bind(this);
          script.src = url;
          script.onerror = function() {
            cc.error(" load script error ", url);
          };
          head.appendChild(script);
        }
      }, {
        key: "showStore",
        value: function showStore() {}
      }, {
        key: "freeRevive",
        value: function freeRevive() {}
      }, {
        key: "login",
        value: function login() {
          this.loginMgr.login();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loginMgr.logout();
        }
      }, {
        key: "showBanner",
        value: function showBanner() {
          if (this.bannerAd) {
            console.log("show banner");
            this.bannerAd.showBanner();
          } else console.log("no banner");
        }
      }, {
        key: "hideBanner",
        value: function hideBanner() {
          this.bannerAd && this.bannerAd.hideBanner();
        }
      }, {
        key: "showShare",
        value: function showShare(title, func, isShowRecorder) {
          this.isHaveShare() ? this.share.share(title, function(result) {
            result && func();
          }, isShowRecorder) : func();
        }
      }, {
        key: "activeSkillLabel",
        value: function activeSkillLabel() {
          return "\u5206\u4eab\u91ca\u653e";
        }
      }, {
        key: "openRewardAd",
        value: function openRewardAd(func) {
          this.isHaveRewardAd() ? this.rewardAd.show(function(isFinish) {
            func(!!isFinish);
          }) : func(true);
        }
      }, {
        key: "isHaveRewardAd",
        value: function isHaveRewardAd() {
          return !isNull(this.rewardAd);
        }
      }, {
        key: "getRewardAdState",
        value: function getRewardAdState() {
          if (this.rewardAd) return this.rewardAd.getState();
          return RewardADState.close;
        }
      }, {
        key: "isHaveFollow",
        value: function isHaveFollow() {
          return false;
        }
      }, {
        key: "isHaveRecorder",
        value: function isHaveRecorder() {
          return !isNull(this.recorder);
        }
      }, {
        key: "showImage",
        value: function showImage(imageUrl) {}
      }, {
        key: "jumpToApp",
        value: function jumpToApp(appID) {}
      }, {
        key: "getAds",
        value: function getAds(num, func) {}
      }, {
        key: "isHaveInterstitalAd",
        value: function isHaveInterstitalAd() {
          return !isNull(this.interstitialAd);
        }
      }, {
        key: "showInterstitialAd",
        value: function showInterstitialAd(func) {
          this.isHaveInterstitalAd() && this.interstitialAd.show(func);
        }
      }, {
        key: "intoLobby",
        value: function intoLobby() {}
      }, {
        key: "isHaveGameBox",
        value: function isHaveGameBox() {
          return false;
        }
      }, {
        key: "isHaveRank",
        value: function isHaveRank() {
          return false;
        }
      }, {
        key: "postMessage",
        value: function postMessage(message) {}
      }, {
        key: "vibarate",
        value: function vibarate() {
          ShakeManager.instance().getFlag() && this.vibrateShort();
        }
      }, {
        key: "vibrateShort",
        value: function vibrateShort() {}
      }, {
        key: "createGameClubButton",
        value: function createGameClubButton() {}
      }, {
        key: "hideGameClubButton",
        value: function hideGameClubButton() {}
      }, {
        key: "showGameClubButton",
        value: function showGameClubButton() {}
      } ]);
      return BaseChannel;
    }();
    exports.default = BaseChannel;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  BaseNativeAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f80ed8vNdKa7XJYupJoJCU", "BaseNativeAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _EventDispatcher2 = require("../event/EventDispatcher");
    var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var BaseNativeAd = function(_EventDispatcher) {
      _inherits(BaseNativeAd, _EventDispatcher);
      _createClass(BaseNativeAd, [ {
        key: "getAdItems",
        value: function getAdItems() {
          return this.adItems;
        }
      } ]);
      function BaseNativeAd(id) {
        _classCallCheck(this, BaseNativeAd);
        var _this = _possibleConstructorReturn(this, (BaseNativeAd.__proto__ || Object.getPrototypeOf(BaseNativeAd)).call(this));
        _this.adUnitID = "";
        _this.nativeAd = null;
        _this.adItems = [];
        _this.adItems = [];
        _this.adUnitID = id;
        _this.init();
        return _this;
      }
      _createClass(BaseNativeAd, [ {
        key: "init",
        value: function init() {
          this.create(function(err) {
            console.log(" BaesNativeAd init err ", err);
            !err;
          });
        }
      }, {
        key: "reLoad",
        value: function reLoad() {
          console.log(" reLoad ");
        }
      }, {
        key: "reportAdClick",
        value: function reportAdClick(adId) {}
      }, {
        key: "reportAdShow",
        value: function reportAdShow(adId) {}
      }, {
        key: "destroyNative",
        value: function destroyNative() {
          if (!this.nativeAd) return;
          this.destroy();
          this.nativeAd = null;
        }
      }, {
        key: "destroy",
        value: function destroy() {}
      }, {
        key: "create",
        value: function create(callback) {}
      } ]);
      return BaseNativeAd;
    }(_EventDispatcher3.default);
    exports.default = BaseNativeAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../event/EventDispatcher": "EventDispatcher"
  } ],
  BaseRecorder: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "187fdTAIrRItZpYVC2jjbGW", "BaseRecorder");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _class, _temp;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var RecoderState = exports.RecoderState = (_temp = _class = function RecoderState() {
      _classCallCheck(this, RecoderState);
    }, _class.CLOSE = 0, _class.OPEN = 1, _temp);
    var BaseRecorder = function() {
      function BaseRecorder() {
        _classCallCheck(this, BaseRecorder);
        this.videoPath = null;
        this.state = RecoderState.CLOSE;
      }
      _createClass(BaseRecorder, [ {
        key: "start",
        value: function start(obj) {}
      }, {
        key: "pause",
        value: function pause() {}
      }, {
        key: "resume",
        value: function resume() {}
      }, {
        key: "stop",
        value: function stop() {
          var isSave = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        }
      }, {
        key: "recordClip",
        value: function recordClip(object) {}
      }, {
        key: "changeState",
        value: function changeState(s) {
          this.state = s;
        }
      }, {
        key: "getVideoPath",
        value: function getVideoPath() {
          return this.videoPath;
        }
      }, {
        key: "isOpen",
        value: function isOpen() {
          console.log("isOpen  this.state ", this.state, RecoderState.OPEN);
          return this.state == RecoderState.OPEN;
        }
      }, {
        key: "isClose",
        value: function isClose() {
          console.log("isClose  this.state ", this.state, RecoderState.CLOSE);
          return this.state == RecoderState.CLOSE;
        }
      }, {
        key: "getState",
        value: function getState() {
          return this.state;
        }
      } ]);
      return BaseRecorder;
    }();
    exports.default = BaseRecorder;
    cc._RF.pop();
  }, {} ],
  BaseRewardAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc0cazfRXFDWZ+moWebrvFj", "BaseRewardAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _class, _temp;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var RewardADState = exports.RewardADState = (_temp = _class = function RewardADState() {
      _classCallCheck(this, RewardADState);
    }, _class.close = 0, _class.open = 1, _temp);
    var BaseRewardAd = function() {
      function BaseRewardAd(id) {
        _classCallCheck(this, BaseRewardAd);
        this.state = RewardADState.close;
        this.rewardCallback = null;
        this.createVideoAd(id);
      }
      _createClass(BaseRewardAd, [ {
        key: "getState",
        value: function getState() {
          return this.state;
        }
      }, {
        key: "createVideoAd",
        value: function createVideoAd(id) {}
      }, {
        key: "show",
        value: function show(callback) {
          var _this = this;
          if (!this.rewardedVideoAd) {
            callback(false);
            return;
          }
          this.rewardCallback = callback;
          this.rewardedVideoAd.show().then(function() {
            _this.state = RewardADState.open;
          }).catch(function() {
            _this.rewardedVideoAd.load().then(function() {
              _this.rewardedVideoAd.show();
              _this.state = RewardADState.open;
              D.sdk.hideBanner();
            }).catch(function(err) {
              console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25");
              callback(false);
            });
          });
        }
      }, {
        key: "callback",
        value: function callback(num) {}
      } ]);
      return BaseRewardAd;
    }();
    exports.default = BaseRewardAd;
    cc._RF.pop();
  }, {} ],
  BaseShare: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "258bcqBEXREUJW/y7NxsF9L", "BaseShare");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var BaseShare = function() {
      function BaseShare(title) {
        _classCallCheck(this, BaseShare);
        this.shareFlag = false;
        this.callback = null;
        this.title = "";
        this.title = title;
      }
      _createClass(BaseShare, [ {
        key: "share",
        value: function share(title, func) {}
      }, {
        key: "shareSuccess",
        value: function shareSuccess() {}
      } ]);
      return BaseShare;
    }();
    exports.default = BaseShare;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  ChannelID: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02b82UacelKWYVFycSEL9JP", "ChannelID");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _class, _temp, _class2, _temp2;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var ChannelID = (_temp = _class = function ChannelID() {
      _classCallCheck(this, ChannelID);
    }, _class.DEV = 0, _class.WX = 1, _class.VIVO = 2, _class.TT = 3, _class.OPPO = 4, 
    _temp);
    exports.default = ChannelID;
    var AdIDS = exports.AdIDS = [ {}, {}, {
      appId: "100002540",
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
    } ];
    var SDKEvent = exports.SDKEvent = (_temp2 = _class2 = function SDKEvent() {
      _classCallCheck(this, SDKEvent);
    }, _class2.NATIVE_AD_LOAD_FINISH = "natieve_ad_load_finish", _temp2);
    cc._RF.pop();
  }, {} ],
  1: [ function(require, module, exports) {
    module.exports = {
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
  2: [ function(require, module, exports) {
    var indexOf = [].indexOf;
    module.exports = function(arr, obj) {
      if (indexOf) return arr.indexOf(obj);
      for (var i = 0; i < arr.length; ++i) if (arr[i] === obj) return i;
      return -1;
    };
  }, {} ],
  3: [ function(require, module, exports) {
    "function" === typeof Object.create ? module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    } : module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }, {} ],
  4: [ function(require, module, exports) {
    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
      throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        cachedSetTimeout = "function" === typeof setTimeout ? setTimeout : defaultSetTimout;
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        cachedClearTimeout = "function" === typeof clearTimeout ? clearTimeout : defaultClearTimeout;
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      if (!draining || !currentQueue) return;
      draining = false;
      currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1;
      queue.length && drainQueue();
    }
    function drainQueue() {
      if (draining) return;
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) currentQueue && currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }
    process.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
      queue.push(new Item(fun, args));
      1 !== queue.length || draining || runTimeout(drainQueue);
    };
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    process.title = "browser";
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = "";
    process.versions = {};
    function noop() {}
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    process.listeners = function(name) {
      return [];
    };
    process.binding = function(name) {
      throw new Error("process.binding is not supported");
    };
    process.cwd = function() {
      return "/";
    };
    process.chdir = function(dir) {
      throw new Error("process.chdir is not supported");
    };
    process.umask = function() {
      return 0;
    };
  }, {} ],
  5: [ function(require, module, exports) {
    module.exports = function isBuffer(arg) {
      return arg && "object" === typeof arg && "function" === typeof arg.copy && "function" === typeof arg.fill && "function" === typeof arg.readUInt8;
    };
  }, {} ],
  6: [ function(require, module, exports) {
    (function(process, global) {
      var formatRegExp = /%[sdj%]/g;
      exports.format = function(f) {
        if (!isString(f)) {
          var objects = [];
          for (var i = 0; i < arguments.length; i++) objects.push(inspect(arguments[i]));
          return objects.join(" ");
        }
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x) {
          if ("%%" === x) return "%";
          if (i >= len) return x;
          switch (x) {
           case "%s":
            return String(args[i++]);

           case "%d":
            return Number(args[i++]);

           case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }

           default:
            return x;
          }
        });
        for (var x = args[i]; i < len; x = args[++i]) isNull(x) || !isObject(x) ? str += " " + x : str += " " + inspect(x);
        return str;
      };
      exports.deprecate = function(fn, msg) {
        if (isUndefined(global.process)) return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
        if (true === process.noDeprecation) return fn;
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (process.throwDeprecation) throw new Error(msg);
            process.traceDeprecation ? console.trace(msg) : console.error(msg);
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      };
      var debugs = {};
      var debugEnviron;
      exports.debuglog = function(set) {
        isUndefined(debugEnviron) && (debugEnviron = process.env.NODE_DEBUG || "");
        set = set.toUpperCase();
        if (!debugs[set]) if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else debugs[set] = function() {};
        return debugs[set];
      };
      function inspect(obj, opts) {
        var ctx = {
          seen: [],
          stylize: stylizeNoColor
        };
        arguments.length >= 3 && (ctx.depth = arguments[2]);
        arguments.length >= 4 && (ctx.colors = arguments[3]);
        isBoolean(opts) ? ctx.showHidden = opts : opts && exports._extend(ctx, opts);
        isUndefined(ctx.showHidden) && (ctx.showHidden = false);
        isUndefined(ctx.depth) && (ctx.depth = 2);
        isUndefined(ctx.colors) && (ctx.colors = false);
        isUndefined(ctx.customInspect) && (ctx.customInspect = true);
        ctx.colors && (ctx.stylize = stylizeWithColor);
        return formatValue(ctx, obj, ctx.depth);
      }
      exports.inspect = inspect;
      inspect.colors = {
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
      inspect.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      };
      function stylizeWithColor(str, styleType) {
        var style = inspect.styles[styleType];
        return style ? "\x1b[" + inspect.colors[style][0] + "m" + str + "\x1b[" + inspect.colors[style][1] + "m" : str;
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function arrayToHash(array) {
        var hash = {};
        array.forEach(function(val, idx) {
          hash[val] = true;
        });
        return hash;
      }
      function formatValue(ctx, value, recurseTimes) {
        if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx);
          isString(ret) || (ret = formatValue(ctx, ret, recurseTimes));
          return ret;
        }
        var primitive = formatPrimitive(ctx, value);
        if (primitive) return primitive;
        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);
        ctx.showHidden && (keys = Object.getOwnPropertyNames(value));
        if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
        if (0 === keys.length) {
          if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
          }
          if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
          if (isError(value)) return formatError(value);
        }
        var base = "", array = false, braces = [ "{", "}" ];
        if (isArray(value)) {
          array = true;
          braces = [ "[", "]" ];
        }
        if (isFunction(value)) {
          var n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        isRegExp(value) && (base = " " + RegExp.prototype.toString.call(value));
        isDate(value) && (base = " " + Date.prototype.toUTCString.call(value));
        isError(value) && (base = " " + formatError(value));
        if (0 === keys.length && (!array || 0 == value.length)) return braces[0] + base + braces[1];
        if (recurseTimes < 0) return isRegExp(value) ? ctx.stylize(RegExp.prototype.toString.call(value), "regexp") : ctx.stylize("[Object]", "special");
        ctx.seen.push(value);
        var output;
        output = array ? formatArray(ctx, value, recurseTimes, visibleKeys, keys) : keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      function formatPrimitive(ctx, value) {
        if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
        if (isString(value)) {
          var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx.stylize(simple, "string");
        }
        if (isNumber(value)) return ctx.stylize("" + value, "number");
        if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
        if (isNull(value)) return ctx.stylize("null", "null");
      }
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) hasOwnProperty(value, String(i)) ? output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true)) : output.push("");
        keys.forEach(function(key) {
          key.match(/^\d+$/) || output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        });
        return output;
      }
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || {
          value: value[key]
        };
        desc.get ? str = desc.set ? ctx.stylize("[Getter/Setter]", "special") : ctx.stylize("[Getter]", "special") : desc.set && (str = ctx.stylize("[Setter]", "special"));
        hasOwnProperty(visibleKeys, key) || (name = "[" + key + "]");
        if (!str) if (ctx.seen.indexOf(desc.value) < 0) {
          str = isNull(recurseTimes) ? formatValue(ctx, desc.value, null) : formatValue(ctx, desc.value, recurseTimes - 1);
          str.indexOf("\n") > -1 && (str = array ? str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").substr(2) : "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n"));
        } else str = ctx.stylize("[Circular]", "special");
        if (isUndefined(name)) {
          if (array && key.match(/^\d+$/)) return str;
          name = JSON.stringify("" + key);
          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, "name");
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
          }
        }
        return name + ": " + str;
      }
      function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function(prev, cur) {
          numLinesEst++;
          cur.indexOf("\n") >= 0 && numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) return braces[0] + ("" === base ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      function isArray(ar) {
        return Array.isArray(ar);
      }
      exports.isArray = isArray;
      function isBoolean(arg) {
        return "boolean" === typeof arg;
      }
      exports.isBoolean = isBoolean;
      function isNull(arg) {
        return null === arg;
      }
      exports.isNull = isNull;
      function isNullOrUndefined(arg) {
        return null == arg;
      }
      exports.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return "number" === typeof arg;
      }
      exports.isNumber = isNumber;
      function isString(arg) {
        return "string" === typeof arg;
      }
      exports.isString = isString;
      function isSymbol(arg) {
        return "symbol" === typeof arg;
      }
      exports.isSymbol = isSymbol;
      function isUndefined(arg) {
        return void 0 === arg;
      }
      exports.isUndefined = isUndefined;
      function isRegExp(re) {
        return isObject(re) && "[object RegExp]" === objectToString(re);
      }
      exports.isRegExp = isRegExp;
      function isObject(arg) {
        return "object" === typeof arg && null !== arg;
      }
      exports.isObject = isObject;
      function isDate(d) {
        return isObject(d) && "[object Date]" === objectToString(d);
      }
      exports.isDate = isDate;
      function isError(e) {
        return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error);
      }
      exports.isError = isError;
      function isFunction(arg) {
        return "function" === typeof arg;
      }
      exports.isFunction = isFunction;
      function isPrimitive(arg) {
        return null === arg || "boolean" === typeof arg || "number" === typeof arg || "string" === typeof arg || "symbol" === typeof arg || "undefined" === typeof arg;
      }
      exports.isPrimitive = isPrimitive;
      exports.isBuffer = require("./support/isBuffer");
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? "0" + n.toString(10) : n.toString(10);
      }
      var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
      function timestamp() {
        var d = new Date();
        var time = [ pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds()) ].join(":");
        return [ d.getDate(), months[d.getMonth()], time ].join(" ");
      }
      exports.log = function() {
        console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
      };
      exports.inherits = require("inherits");
      exports._extend = function(origin, add) {
        if (!add || !isObject(add)) return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) origin[keys[i]] = add[keys[i]];
        return origin;
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
    }).call(this, require("_process"), "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "./support/isBuffer": 5,
    _process: 4,
    inherits: 3
  } ],
  7: [ function(require, module, exports) {
    var indexOf = require("indexof");
    var Object_keys = function(obj) {
      if (Object.keys) return Object.keys(obj);
      var res = [];
      for (var key in obj) res.push(key);
      return res;
    };
    var forEach = function(xs, fn) {
      if (xs.forEach) return xs.forEach(fn);
      for (var i = 0; i < xs.length; i++) fn(xs[i], i, xs);
    };
    var defineProp = function() {
      try {
        Object.defineProperty({}, "_", {});
        return function(obj, name, value) {
          Object.defineProperty(obj, name, {
            writable: true,
            enumerable: false,
            configurable: true,
            value: value
          });
        };
      } catch (e) {
        return function(obj, name, value) {
          obj[name] = value;
        };
      }
    }();
    var globals = [ "Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape" ];
    function Context() {}
    Context.prototype = {};
    var Script = exports.Script = function NodeScript(code) {
      if (!(this instanceof Script)) return new Script(code);
      this.code = code;
    };
    Script.prototype.runInContext = function(context) {
      if (!(context instanceof Context)) throw new TypeError("needs a 'context' argument.");
      var iframe = document.createElement("iframe");
      iframe.style || (iframe.style = {});
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      var win = iframe.contentWindow;
      var wEval = win.eval, wExecScript = win.execScript;
      if (!wEval && wExecScript) {
        wExecScript.call(win, "null");
        wEval = win.eval;
      }
      forEach(Object_keys(context), function(key) {
        win[key] = context[key];
      });
      forEach(globals, function(key) {
        context[key] && (win[key] = context[key]);
      });
      var winKeys = Object_keys(win);
      var res = wEval.call(win, this.code);
      forEach(Object_keys(win), function(key) {
        (key in context || -1 === indexOf(winKeys, key)) && (context[key] = win[key]);
      });
      forEach(globals, function(key) {
        key in context || defineProp(context, key, win[key]);
      });
      document.body.removeChild(iframe);
      return res;
    };
    Script.prototype.runInThisContext = function() {
      return eval(this.code);
    };
    Script.prototype.runInNewContext = function(context) {
      var ctx = Script.createContext(context);
      var res = this.runInContext(ctx);
      forEach(Object_keys(ctx), function(key) {
        context[key] = ctx[key];
      });
      return res;
    };
    forEach(Object_keys(Script.prototype), function(name) {
      exports[name] = Script[name] = function(code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
      };
    });
    exports.createScript = function(code) {
      return exports.Script(code);
    };
    exports.createContext = Script.createContext = function(context) {
      var copy = new Context();
      "object" === typeof context && forEach(Object_keys(context), function(key) {
        copy[key] = context[key];
      });
      return copy;
    };
  }, {
    indexof: 2
  } ],
  DevChannel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2856aw/NtFBCYn6Hzy6HD4b", "DevChannel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _BaseChannel2 = require("../base/BaseChannel");
    var _BaseChannel3 = _interopRequireDefault(_BaseChannel2);
    var _DevLogin = require("./DevLogin");
    var _DevLogin2 = _interopRequireDefault(_DevLogin);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var DevChannel = function(_BaseChannel) {
      _inherits(DevChannel, _BaseChannel);
      function DevChannel(id) {
        _classCallCheck(this, DevChannel);
        var _this = _possibleConstructorReturn(this, (DevChannel.__proto__ || Object.getPrototypeOf(DevChannel)).call(this, id));
        _this.loginMgr = new _DevLogin2.default();
        return _this;
      }
      return DevChannel;
    }(_BaseChannel3.default);
    exports.default = DevChannel;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseChannel": "BaseChannel",
    "./DevLogin": "DevLogin"
  } ],
  DevLogin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33f6crAK2NFZKflPrBXEdyF", "DevLogin");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _LoginInterface2 = require("../base/LoginInterface");
    var _LoginInterface3 = _interopRequireDefault(_LoginInterface2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var DevLogin = function(_LoginInterface) {
      _inherits(DevLogin, _LoginInterface);
      function DevLogin() {
        _classCallCheck(this, DevLogin);
        return _possibleConstructorReturn(this, (DevLogin.__proto__ || Object.getPrototypeOf(DevLogin)).call(this));
      }
      _createClass(DevLogin, [ {
        key: "login",
        value: function login() {}
      }, {
        key: "logout",
        value: function logout() {}
      } ]);
      return DevLogin;
    }(_LoginInterface3.default);
    exports.default = DevLogin;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/LoginInterface": "LoginInterface"
  } ],
  Enemy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfe104AL1BA4ZYID8PM1eVV", "Enemy");
    "use strict";
    var HexCell = require("./HexCell");
    cc.Class({
      extends: cc.Component,
      properties: {
        emeny: {
          default: null,
          type: cc.Node
        },
        _axialCoordinate: {
          default: cc.v2(0, 0),
          visible: false
        },
        axialCoordinate: {
          get: function get() {
            return this._axialCoordinate;
          },
          set: function set(val) {
            this._axialCoordinate = cc.v2(val.x, val.y);
          }
        }
      },
      onLoad: function onLoad() {},
      start: function start() {},
      moveTo: function moveTo() {}
    });
    cc._RF.pop();
  }, {
    "./HexCell": "HexCell"
  } ],
  EventDispatcher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4bb45bduqpIv5MmChrnExHC", "EventDispatcher");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var EventDispatcher = function() {
      function EventDispatcher() {
        _classCallCheck(this, EventDispatcher);
        this.eventMap = {};
        this.eventMap = {};
      }
      _createClass(EventDispatcher, [ {
        key: "addEventListener",
        value: function addEventListener(eventName, callback, target) {
          var list = this.eventMap[eventName];
          if (list) this.has(eventName, callback, target) || list.push({
            handler: callback,
            target: target
          }); else {
            list = [];
            this.eventMap[eventName] = list;
            list.push({
              handler: callback,
              target: target
            });
          }
        }
      }, {
        key: "has",
        value: function has(eventName, callback, target) {
          var list = this.eventMap[eventName];
          if (list) for (var index = 0; index < list.length; index++) {
            var element = list[index];
            if (element.handler === callback && element.target === target) return element;
          }
          return null;
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(eventName, callback, target) {
          var list = this.eventMap[eventName];
          if (list) for (var index = 0; index < list.length; index++) {
            var element = list[index];
            if (element.handler === callback && element.target === target) {
              list.splice(index, 1);
              return;
            }
          }
        }
      }, {
        key: "publish",
        value: function publish(eventName, data, data2, data3) {
          var list = this.eventMap[eventName];
          list && list.forEach(function(element) {
            element.handler.call(element.target, data, data2, data3);
          });
        }
      }, {
        key: "removeAllEventListener",
        value: function removeAllEventListener() {
          this.eventMap = {};
        }
      }, {
        key: "removeEventListenerByName",
        value: function removeEventListenerByName(eventName) {
          this.eventMap[eventName] = [];
        }
      } ]);
      return EventDispatcher;
    }();
    exports.default = EventDispatcher;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  GameApplication: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f08152UaoRPB64U7d0m5V+q", "GameApplication");
    "use strict";
    var _constants = require("constants");
    var SoundManager = require("../GameLogic/SoundManager");
    cc.Class({
      extends: cc.Component,
      properties: {
        soundManager: {
          default: null,
          type: SoundManager
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
          visible: false
        },
        StepView_prefab: {
          default: null,
          type: cc.Prefab
        },
        HeartView: {
          default: null,
          type: cc.Node,
          visible: false
        },
        HeartView_prefab: {
          default: null,
          type: cc.Prefab
        },
        CoinView: {
          default: null,
          type: cc.Node,
          visible: false
        },
        CoinView_prefab: {
          default: null,
          type: cc.Prefab
        },
        SharaView: {
          default: null,
          type: cc.Node,
          visible: false
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
          get: function get() {
            return this._playTimes;
          },
          set: function set(val) {
            this._playTimes = val;
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
          visible: false
        }
      },
      lerpACtion: function lerpACtion(start, disVal, time, callback) {
        null == this.agent && (this.agent = new cc.Node("agent"));
        this.agent.stopAllActions();
        var ob = this.agent;
        null != start && (ob.x = start);
        var repeatTime = time / .02;
        var repeatVal = disVal / repeatTime;
        ob.runAction(cc.repeat(cc.sequence(cc.callFunc(function() {
          callback(ob);
        }.bind(this), this), cc.moveBy(.02, cc.v2(repeatVal, 0))), repeatTime + 1));
      },
      start: function start() {
        this.setLanguage(window.nameArr[4]);
        SDK().init();
      },
      getConf: function getConf(path, cb) {
        if (null != this.conf[path]) {
          if (cb) {
            console.log("\u4ececache\u8bfb\u53d6\uff1a" + path);
            cb(this.conf[path]);
          }
        } else {
          console.log("\u4ece\u786c\u76d8\u8bfb\u53d6\uff1a" + path);
          cc.loader.loadRes(path, function(err, results) {
            this.conf[path] = results.json;
            null != cb && cb(results.json);
          }.bind(this));
        }
      },
      onLoad: function onLoad() {
        window.gameApplication = this;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = false;
        manager.enabledDrawBoundingBox = false;
        cc.loader.loadRes("conf/missions", function(err, results) {
          this.missions = results.json;
          this.invokeMissionCB();
        }.bind(this));
        this.openMainView();
        this.curShowIdx = 0;
      },
      onDestroy: function onDestroy() {
        cc.director.getCollisionManager().enabled = false;
      },
      setLanguage: function setLanguage(language) {
        var i18n = require("LanguageData");
        i18n.init(language);
      },
      getMissions: function getMissions(cb) {
        try {
          null != this.missions && this.missions.length > 0 ? cb(this.missions) : this.missionsCB.push(cb);
        } catch (error) {}
      },
      invokeMissionCB: function invokeMissionCB() {
        var self = this;
        try {
          console.log("\u8fdb\u5165try missionCB");
          this.missionsCB.length > 0 && this.missionsCB.forEach(function(cb) {
            null != cb && cb(self.missions);
          });
          console.log("\u51fa\u53bbtry missionCB");
        } catch (error) {
          console.log("missonsCB.length\u51fa\u9519");
        }
      },
      setNodeActive: function setNodeActive(nodePath, active, isPop) {
        var view = cc.find("Canvas/" + nodePath);
        if (null != view) if (active) {
          view.active = active;
          if ("MainView" == view.name || "GameView" == view.name) {
            var top = cc.find("top", view);
            null != top && (top.active = true);
            var goGame = cc.find("GoGame", view);
            null != goGame && (goGame.active = false);
            view.runAction(cc.moveTo(.5, cc.v2(0, 0)));
          }
          if (isPop) {
            var Bg = cc.find("Bg", view);
            Bg.scale = 0;
            Bg.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)));
          } else {
            view.opacity = 0;
            view.runAction(cc.fadeIn(.5));
          }
        } else {
          if ("MainView" == view.name) {
            var top = cc.find("top", view);
            null != top && (top.active = false);
            view.runAction(cc.sequence(cc.moveTo(.5, cc.v2(0, -cc.winSize.height)), cc.callFunc(function() {
              view.active = true;
            }.bind(this), this)));
          } else "GameView" == view.name && view.runAction(cc.sequence(cc.moveTo(.5, cc.v2(0, cc.winSize.height)), cc.callFunc(function() {
            view.active = active;
          }.bind(this), this)));
          if (isPop) {
            var Bg = cc.find("Bg", view);
            Bg.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
              view.active = false;
            }.bind(this), this)));
          } else view.runAction(cc.fadeOut(.5));
        }
      },
      openMainView: function openMainView(isReward) {
        if (null != window.mainScirpt) {
          window.mainScirpt.refreashVal();
          isReward && this.scheduleOnce(function() {
            window.gameApplication.flyReward(1, "starBig", window.mainScirpt.starts, null);
          }.bind(this), 1);
        }
        this.setNodeActive("MainView", true);
        this.setNodeActive("GameView", false);
        this.openRankView(false);
      },
      openGameView: function openGameView() {
        this.setNodeActive("GameView", true);
        this.setNodeActive("MainView", false);
        this.openRankView(false);
      },
      openPopView: function openPopView(viewName, isOpen) {
        this.setNodeActive(viewName, isOpen, true);
      },
      openRankView: function openRankView(isOpen) {
        this.openPopView("RankView", isOpen);
      },
      openGiftView: function openGiftView(isOpen) {
        this.openPopView("GiftView", isOpen);
      },
      openSetting: function openSetting(isOpen) {
        this.openPopView("SettingView", isOpen);
      },
      settingClick: function settingClick(event, type) {
        "1" == type ? this.openSetting(true) : "2" == type && this.openSetting(false);
      },
      showVideoView: function showVideoView(cb, isCount) {
        if (null == this.VideoView) {
          var view = cc.instantiate(this.VideoView_prefab);
          var Canvas = cc.find("Canvas");
          view.parent = Canvas;
          view.width = window.width;
          view.height = window.height;
          this.VideoView = view;
        }
        this.VideoView.active = true;
        this.VideoView.setSiblingIndex(this.VideoView.parent.childrenCount);
        var Bg = this.VideoView.getChildByName("Bg");
        Bg.scale = 0;
        Bg.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)));
        var light = this.VideoView.getChildByName("Bg").getChildByName("Light");
        light.stopAllActions();
        light.runAction(cc.repeatForever(cc.rotateBy(1.1, 100)));
        var sureBtn = this.VideoView.getChildByName("Bg").getChildByName("Sure");
        var sureText = sureBtn.getChildByName("Text").getComponent(cc.Label);
        sureBtn.off(cc.Node.EventType.TOUCH_END);
        var viewCount = 0;
        this.checkDailyCount("video", false, function(val) {
          viewCount = 5 - val;
          sureBtn.getComponent(cc.Button).interactable = viewCount > 0;
          if (isCount) sureText.string = "\u514d\u8d39(" + viewCount + ")"; else {
            sureText.string = "\u514d\u8d39";
            sureBtn.getComponent(cc.Button).interactable = true;
          }
          sureBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
            if (viewCount > 0 || !isCount) {
              window.gameApplication.soundManager.playSound("btn_click");
              this.onVideoBtnClick(function(isCompleted) {
                cb(isCompleted);
                this.VideoView.active = !isCompleted;
              }.bind(this), isCount);
            }
          }, this);
        }.bind(this));
        var laterBtn = this.VideoView.getChildByName("Bg").getChildByName("Later");
        laterBtn.off(cc.Node.EventType.TOUCH_END);
        laterBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
          window.gameApplication.soundManager.playSound("btn_click");
          cb(false);
          this.VideoView.active = false;
        }, this);
      },
      showCoinView: function showCoinView(cb, isCount) {
        if (null == this.CoinView) {
          var view = cc.instantiate(this.CoinView_prefab);
          var Canvas = cc.find("Canvas");
          view.parent = Canvas;
          view.width = window.width;
          view.height = window.height;
          this.CoinView = view;
        }
        this.CoinView.active = true;
        this.CoinView.setSiblingIndex(this.CoinView.parent.childrenCount);
        var Bg = this.CoinView.getChildByName("Bg");
        Bg.scale = 0;
        Bg.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)));
        var light = this.CoinView.getChildByName("Bg").getChildByName("Bg").getChildByName("Light");
        light.stopAllActions();
        light.runAction(cc.repeatForever(cc.rotateBy(1.1, 100)));
        var sureBtn = this.CoinView.getChildByName("Bg").getChildByName("Bg").getChildByName("Sure");
        var sureText = sureBtn.getChildByName("Text").getComponent(cc.Label);
        sureBtn.off(cc.Node.EventType.TOUCH_END);
        var viewCount = 0;
        this.checkDailyCount("coinVideo", false, function(val) {
          viewCount = 100 - val;
          sureBtn.getComponent(cc.Button).interactable = viewCount > 0;
          if (isCount) sureText.string = "\u514d\u8d39(" + viewCount + ")"; else {
            sureText.string = "\u514d\u8d39";
            sureBtn.getComponent(cc.Button).interactable = true;
          }
          sureBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
            if (viewCount > 0 || !isCount) {
              window.gameApplication.soundManager.playSound("btn_click");
              this.onVideoBtnClick(function(isCompleted) {
                isCompleted && Bg.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
                  this.CoinView.active = false;
                }.bind(this), this)));
                cb(isCompleted);
              }.bind(this), isCount);
            }
          }, this);
        }.bind(this));
        var laterBtn = this.CoinView.getChildByName("Bg").getChildByName("Later");
        laterBtn.off(cc.Node.EventType.TOUCH_END);
        laterBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
          window.gameApplication.soundManager.playSound("btn_click");
          cb(false);
          Bg.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
            this.CoinView.active = false;
          }.bind(this), this)));
        }, this);
      },
      showHeartView: function showHeartView(cb, isCount) {
        if (null == this.HeartView) {
          var view = cc.instantiate(this.HeartView_prefab);
          var Canvas = cc.find("Canvas");
          view.parent = Canvas;
          view.width = window.width;
          view.height = window.height;
          this.HeartView = view;
        }
        this.HeartView.active = true;
        this.HeartView.setSiblingIndex(this.HeartView.parent.childrenCount);
        var Bg = this.HeartView.getChildByName("Bg");
        Bg.scale = 0;
        Bg.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)));
        var light = this.HeartView.getChildByName("Bg").getChildByName("Bg").getChildByName("Light");
        light.stopAllActions();
        light.runAction(cc.repeatForever(cc.rotateBy(1.1, 100)));
        var sureBtn = this.HeartView.getChildByName("Bg").getChildByName("Bg").getChildByName("Video");
        var sureText = sureBtn.getChildByName("Text").getComponent(cc.Label);
        sureBtn.off(cc.Node.EventType.TOUCH_END);
        var viewCount = 0;
        this.checkDailyCount("heartVideo", false, function(val) {
          viewCount = 5 - val;
          sureBtn.getComponent(cc.Button).interactable = viewCount > 0;
          if (isCount) sureText.string = "\u514d\u8d39(" + viewCount + ")"; else {
            sureText.string = "\u514d\u8d39";
            sureBtn.getComponent(cc.Button).interactable = true;
          }
          sureBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
            if (viewCount > 0 || !isCount) {
              window.gameApplication.soundManager.playSound("btn_click");
              this.onVideoBtnClick(function(isCompleted) {
                isCompleted && Bg.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
                  this.HeartView.active = false;
                }.bind(this), this)));
                cb(isCompleted);
              }.bind(this), isCount);
            }
          }, this);
        }.bind(this));
        var sureBtn1 = this.HeartView.getChildByName("Bg").getChildByName("Bg").getChildByName("Share");
        var sureText1 = sureBtn1.getChildByName("Text").getComponent(cc.Label);
        sureBtn1.off(cc.Node.EventType.TOUCH_END);
        var viewCount1 = 0;
        this.checkDailyCount("heartShare", false, function(val) {
          viewCount1 = 5 - val;
          sureBtn1.getComponent(cc.Button).interactable = viewCount1 > 0;
          if (isCount) sureText1.string = "FREE(" + viewCount1 + ")"; else {
            sureText1.string = "FREE";
            sureBtn1.getComponent(cc.Button).interactable = true;
          }
          sureBtn1.on(cc.Node.EventType.TOUCH_END, function(event) {
            if (viewCount1 > 0 || !isCount) {
              window.gameApplication.soundManager.playSound("btn_click");
              this.onShareBtnClick(function(isCompleted) {
                isCompleted && Bg.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
                  this.HeartView.active = false;
                }.bind(this), this)));
                cb(isCompleted);
              }.bind(this), isCount);
            }
          }, this);
        }.bind(this));
        var laterBtn = this.HeartView.getChildByName("Bg").getChildByName("Later");
        laterBtn.off(cc.Node.EventType.TOUCH_END);
        laterBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
          window.gameApplication.soundManager.playSound("btn_click");
          cb(false);
          Bg.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
            this.HeartView.active = false;
          }.bind(this), this)));
        }, this);
      },
      showStepView: function showStepView(cb, isCount) {
        if (null == this.StepView) {
          var view = cc.instantiate(this.StepView_prefab);
          var Canvas = cc.find("Canvas");
          view.parent = Canvas;
          view.width = window.width;
          view.height = window.height;
          this.StepView = view;
        }
        this.StepView.active = true;
        this.StepView.setSiblingIndex(this.StepView.parent.childrenCount);
        var Bg = this.StepView.getChildByName("Bg");
        Bg.scale = 0;
        Bg.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut(2)));
        var sureBtn = this.StepView.getChildByName("Bg").getChildByName("Bg").getChildByName("Video");
        sureBtn.off(cc.Node.EventType.TOUCH_END);
        sureBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
          window.gameApplication.soundManager.playSound("btn_click");
          this.onVideoBtnClick(function(isCompleted) {
            isCompleted && Bg.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
              this.StepView.active = false;
            }.bind(this), this)));
            cb(isCompleted);
          }.bind(this), isCount);
        }, this);
        var sureBtn1 = this.StepView.getChildByName("Bg").getChildByName("Bg").getChildByName("Coin");
        sureBtn1.off(cc.Node.EventType.TOUCH_END);
        sureBtn1.on(cc.Node.EventType.TOUCH_END, function(event) {
          window.gameApplication.soundManager.playSound("btn_click");
          SDK().getItem("coins", function(coin) {
            if (coin >= 100) {
              coin -= 100;
              SDK().setItem({
                coins: coin
              });
              cb(true);
              Bg.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
                this.StepView.active = false;
              }.bind(this), this)));
            } else window.gameApplication.showCoinView(function(isCompleted) {
              isCompleted && Bg.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
                this.StepView.active = false;
              }.bind(this), this)));
              cb(isCompleted);
            }.bind(this), false);
          }.bind(this));
        }, this);
        var laterBtn = this.StepView.getChildByName("Bg").getChildByName("Later");
        laterBtn.off(cc.Node.EventType.TOUCH_END);
        laterBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
          window.gameApplication.soundManager.playSound("btn_click");
          cb(false);
          Bg.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeSineIn(2)), cc.callFunc(function() {
            this.StepView.active = false;
          }.bind(this), this)));
        }, this);
      },
      onVideoBtnClick: function onVideoBtnClick(cb, isCount) {},
      checkDailyCount: function checkDailyCount(key, isAdd, cb) {
        var myDate = new Date();
        var month = myDate.getMonth();
        var day = myDate.getDate();
        SDK().getItem(month + "_" + day + "_" + key, function(val) {
          null == val && (val = 0);
          val = parseInt(val);
          if (isAdd) {
            val += 1;
            var param = {};
            param[month + "_" + day + "_" + key] = val;
            SDK().setItem(param);
          }
          null != cb && cb(val);
        });
      },
      onGiftBtnClick: function onGiftBtnClick(cb) {
        SDK().showInterstitialAd(function(isCompleted) {
          if (null == isCompleted) {
            console.log("\u6ca1\u6709\u89c2\u770b\u6210\u529f");
            this.fbFail(1);
          } else if (isCompleted) cb(true); else {
            console.log("\u6ca1\u6709\u89c2\u770b\u6210\u529f");
            this.fbFail(1);
          }
        }.bind(this), true);
      },
      showSharaView: function showSharaView(cb) {
        if (null == this.SharaView) {
          var view = cc.instantiate(this.SharaView_prefab);
          var Canvas = cc.find("Canvas");
          view.parent = Canvas;
          view.width = window.width;
          view.height = window.height;
          this.SharaView = view;
        }
        this.SharaView.active = true;
        var sureBtn = this.SharaView.getChildByName("Bg").getChildByName("Sure");
        sureBtn.off(cc.Node.EventType.TOUCH_END);
        sureBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
          this.onShareBtnClick(function(isCompleted) {
            cb(isCompleted);
            isCompleted && (this.SharaView.active = false);
          }.bind(this));
          window.gameApplication.soundManager.playSound("btn_click");
        }, this);
        var laterBtn = this.SharaView.getChildByName("Bg").getChildByName("Later");
        laterBtn.off(cc.Node.EventType.TOUCH_END);
        laterBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
          this.SharaView.active = false;
          window.gameApplication.soundManager.playSound("btn_click");
        }, this);
      },
      onShareBtnClick: function onShareBtnClick(cb, isCount) {
        SDK().getItem("all", function(score) {}.bind(this));
      },
      fbFail: function fbFail(type) {
        var view = cc.instantiate(this.fbView_prefab);
        var Canvas = cc.find("Canvas");
        view.parent = Canvas;
        view.width = window.width;
        view.height = window.height;
        var btn = view.getChildByName("Okay");
        btn.off(cc.Node.EventType.TOUCH_END);
        btn.on(cc.Node.EventType.TOUCH_END, function(event) {
          this.fbView.active = false;
          btn.parent.destroy();
          window.gameApplication.soundManager.playSound("button");
        }, this);
        this.fbView = view;
        if (1 == type) {
          this.fbView.getChildByName("Bg").getChildByName("VideoText").active = true;
          this.fbView.getChildByName("Bg").getChildByName("ShareText").active = false;
        } else {
          this.fbView.getChildByName("Bg").getChildByName("VideoText").active = false;
          this.fbView.getChildByName("Bg").getChildByName("ShareText").active = true;
        }
        this.fbView.active = true;
      },
      popClick: function popClick(event, type) {
        SDK().switchGameAsync(type);
      },
      shake: function shake(node) {
        node.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.1, 5).easing(cc.easeIn(2)), cc.rotateTo(.2, -5).easing(cc.easeIn(2)), cc.rotateTo(.2, 5).easing(cc.easeIn(2)), cc.rotateTo(.1, 0).easing(cc.easeIn(2)), cc.delayTime(.5))));
      },
      scaleUpAndDowm: function scaleUpAndDowm(node) {
        node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, 1.1).easing(cc.easeIn(2)), cc.scaleTo(.6, .9).easing(cc.easeIn(2)), cc.scaleTo(.6, 1.1).easing(cc.easeIn(2)), cc.scaleTo(.6, .9).easing(cc.easeIn(2)))));
      },
      flyReward: function flyReward(num, name, target, start, cb) {
        window.gameApplication.soundManager.playSound("getCoin");
        var begin = void 0;
        if (null != start) {
          begin = start.parent.convertToWorldSpaceAR(start.position);
          begin = this.effectView.convertToNodeSpaceAR(begin);
        } else begin = cc.v2(0, 0);
        var dis = target.parent.convertToWorldSpaceAR(target.position);
        dis = this.effectView.convertToNodeSpaceAR(dis);
        for (var i = 0; i < num; i++) {
          var reward = this.rewardList.pop();
          null == reward && (reward = new cc.Node(i));
          var sprite = reward.getComponent(cc.Sprite);
          null == sprite && (sprite = reward.addComponent(cc.Sprite));
          reward.parent = this.effectView;
          reward.position = begin;
          sprite.spriteFrame = this.uiAtlas.getSpriteFrame(name);
          this.flyAnim(reward, dis, cb, i);
        }
      },
      flyAnim: function flyAnim(reward, dis, cb, i) {
        reward.scale = 0;
        this.scheduleOnce(function() {
          reward.runAction(cc.spawn(cc.moveTo(.8, cc.v2(dis.x, dis.y)), cc.sequence(cc.scaleTo(.4, 1.1), cc.scaleTo(.4, 0), cc.callFunc(function() {
            null != cb && cb();
            this.rewardList.push(reward);
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
  GameView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a5f4xh9CRAI6wc4y+upnjw", "GameView");
    "use strict";
    var Utils = require("../../Utils/Utils");
    var HexCell = require("./HexCell");
    var Role = require("./Role");
    var Enemy = require("./Enemy");
    var Tower = require("./Tower");
    var colors = [ "#5d3eaf", "#4ba3e8", "#9d9e9d", "#67798a", "#f19b38" ];
    var hexTileHeight = 100;
    var sideLength;
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
          visible: false
        },
        movesLeft: {
          default: 0,
          type: cc.Integer,
          visible: false
        },
        moved: {
          default: 0,
          type: cc.Integer,
          visible: false
        },
        leaveSteps: {
          default: null,
          type: cc.Node
        },
        levelDimensions: {
          default: cc.v2(0, 0),
          visible: false
        },
        gridOffset: {
          default: cc.v2(0, 0),
          visible: false
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
          type: [ HexCell ]
        },
        allTowers: {
          default: [],
          type: [ Tower ]
        },
        myRole: {
          default: null,
          type: Role
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
          type: Role
        },
        selectedLines: {
          default: []
        },
        mouseIsDown: false,
        userInputEnabled: false,
        gameOver: false,
        prevTilePosition: {
          default: cc.v2(-1e3, -1e3),
          visible: false
        },
        mouseOffsetPos: {
          default: cc.v2(0, 0),
          visible: false
        },
        touchPos: {
          default: cc.v2(0, 0),
          visible: false
        },
        movePlus: {
          get: function get() {
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
          get: function get() {
            return this._helpCount;
          },
          set: function set(v) {
            this._helpCount = v;
            this.helpCountLabel.string = v.toString();
            var param = {};
            param["my_help"] = this._helpCount > 0 ? this._helpCount : -1;
            SDK().setItem(param, null);
            this.helpBtn.getChildByName("icon").active = true;
            this.helpBtn.getChildByName("num").active = true;
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
        isMoving: false,
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
        gotMoreTime: false,
        opad_game_id: null,
        isinigame: false
      },
      onLoad: function onLoad() {
        this.node.width = cc.winSize.width;
        this.node.height = cc.winSize.height;
      },
      plusMoreHelp: function plusMoreHelp() {
        this.helpCount += plusHelp;
      },
      clearHelp: function clearHelp() {
        this.helpCount = 0;
      },
      clearData: function clearData() {
        SDK().clearData();
      },
      onEnable: function onEnable() {
        this.scheduleOnce(function() {
          this.init();
        }, .7);
        this.unschedule(this.shootingStars);
        this.schedule(this.shootingStars, 4);
      },
      shootingStars: function shootingStars() {
        for (var i = 0; i < this.shootings.length; i += 1) this.shootAnim(this.shootings[i]);
      },
      shootAnim: function shootAnim(node) {
        var delay = 3 * Math.random();
        node.x = cc.winSize.width + 100;
        node.y = Utils.GetRandomNum(.5 * cc.winSize.height, 2 * cc.winSize.height);
        this.scheduleOnce(function() {
          node.runAction(cc.moveBy(.5, cc.v2(-2.5 * cc.winSize.width, -2.5 * cc.winSize.width)));
        }.bind(this), delay);
      },
      start: function start() {
        var gameApplicationNode = cc.find("GameApplication");
        null != gameApplicationNode && (this.gameApplication = gameApplicationNode.getComponent("GameApplication"));
        if ("undefined" === typeof this.gameApplication || null == this.gameApplication) {
          this.onBackBtnClicked();
          return;
        }
        this.gm.active = false;
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          this.onMouseDown(event);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          this.onMouseMove(event);
        }, this);
      },
      onDisable: function onDisable() {
        this.clear();
      },
      clear: function clear() {
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
        hexTileHeight = 100;
        this.mouseIsDown = false;
        this.gameOver = false;
        this.movesLeft = 0;
        this.moved = 0;
        this.turnBackCount = 0;
        this.lastDirection = -1;
        this.isMoving = false;
        this.currentLineColor = 0;
        this.oldCurrentLineColor = 0;
      },
      clearTile: function clearTile() {
        if (this.tileBox.childrenCount > 0) for (var i = 0; i < this.tileBox.childrenCount; i++) {
          var n = this.tileBox.children[i];
          if (null != n) {
            n.active = false;
            n.destroy();
          }
        }
        if (this.iceBox.childrenCount > 0) for (var i = 0; i < this.iceBox.childrenCount; i++) {
          var n = this.iceBox.children[i];
          if (null != n) {
            n.active = false;
            n.destroy();
          }
        }
      },
      init: function init() {
        var self = this;
        this.selectedLines = [];
        this.enemys = [];
        this.helplines = [];
        this.helpPath = [];
        this.myRole = null;
        this.isMoving = false;
        this.endView.active = false;
        this.timeIsUpNode.active = false;
        this.gotMoreTime = false;
        if (null != bid && bid > 0 && null != mid && mid > 0 && null != lid && lid > 0) {
          var path = "conf/level_detail/b_" + bid + "/" + mid + "/" + lid;
          this.gameApplication.getConf(path, function(results) {
            this.mission = results;
            console.log(results);
            this.initGame();
          }.bind(this));
          var arr = [];
          lid > 1 && arr.push(lid - 1);
          lid < 100 && arr.push(lid + 1);
          arr.forEach(function(tmp_lid) {
            var tmp_path = "conf/level_detail/b_" + bid + "/" + mid + "/" + tmp_lid;
            self.gameApplication.getConf(tmp_path, null);
          });
          this.initHelpBtn();
        } else this.onBackBtnClicked();
      },
      initHelpBtn: function initHelpBtn() {
        var self = this;
        SDK().getItem("my_help", function(count) {
          self.helpCount = 0 == count ? 5 : -1 == count ? 0 : count;
        }.bind(this));
      },
      initGame: function initGame() {
        if (this.isinigame) return;
        this.isinigame = true;
        var curIdx = this.judgeIdx(mid, lid);
        window.lastPlay = curIdx;
        this.timeIsUpNode.active = false;
        this.timeIsUpEndNode.active = false;
        this.gotMoreTime = false;
        this.leaveSteps.active = false;
        this.endView.active = false;
        this.clear();
        var lines = this.mission["lines"];
        var linesCount = lines.length;
        this.turnBackCount = 0;
        this.helpShaked.splice(0, this.helpShaked.length);
        this.lastDirection = -1;
        var path = "conf/level_list/level_" + bid + "_" + mid;
        this.gameApplication.getConf(path, function(results) {
          var levelInfo = results;
        }.bind(this));
        this.moves.string = "0/" + linesCount;
        this.preBtn.active = false;
        this.nextBtn.active = false;
        SDK().getItem(bid + "_" + mid + "_" + lid + "_moves", function(best) {
          this.best.string = best <= 0 ? "-" : best.toString();
        }.bind(this));
        var grid = cc.v2(this.mission["x"], this.mission["y"]);
        this.createGrid(grid, this.mission["walls"], this.mission["ice"], this.mission["tower"], function() {
          this.scheduleOnce(function() {
            this.createRole(this.mission["start"], this.mission["end"]);
            this.initHelpPath(Utils.cloneObj(this.mission["lines"]));
            var enemy = this.mission["enemy"];
            enemy.length > 0 && this.createEnemy(this.mission["enemy"]);
            if (1 == mid) {
              this.moved = 0;
              this.maxValidMoves = this.getSteps();
              this.maxValidMoves = this.maxValidMoves + 15;
              this.movesLeft = this.maxValidMoves;
              this.leaveSteps.active = true;
              this.updateUI();
            }
            if (3 == mid) {
              var t = 12;
              t = lid <= 5 ? 62 : lid <= 20 ? 65 : lid <= 45 ? 70 : lid <= 75 ? 75 : 80;
              this.timesLeft = t;
              this.timesNode.active = true;
              this.timesVal.string = t.toString();
              var interval = 1;
              var repeat = t;
              var delay = 1;
              this.schedule(this.timeOutflow, interval, repeat, delay);
            } else {
              this.timesLeft = -1;
              this.timesNode.active = false;
            }
          }.bind(this), .5);
        }.bind(this));
      },
      initHelpPath: function initHelpPath(helpPath) {
        if (2 != mid && 4 != mid && 6 != mid) this.helpPath = helpPath; else {
          this.helpPath = [];
          this.helpPath.push(this.myRole.axialCoordinate);
          var test = 0;
          while (helpPath.length > 0) {
            for (var i = 0; i < helpPath.length; i++) {
              var path = helpPath[i];
              if (null != path) {
                path = this.checkXY(path, 0, 0);
                var canMovePath = this.checkMovePos(path);
                for (var j = 0; j < canMovePath.length; j++) {
                  var testV2 = this.helpPath[this.helpPath.length - 1];
                  if (canMovePath[j].x == testV2.x && canMovePath[j].y == testV2.y) {
                    this.helpPath.push(helpPath[i]);
                    helpPath.splice(i, 1);
                    break;
                  }
                }
              }
            }
            test++;
            if (test >= 500) {
              helpPath.splice(0, helpPath.length);
              helpPath = [];
            }
          }
        }
        this.stepsLines = this.helpPath;
      },
      timeOutflow: function timeOutflow() {
        var self = this;
        if (this.timesLeft > 0) {
          this.timesLeft--;
          this.timesLeft < 10 && this.timesLeft > 1 && this.schedule(function() {
            self.gameApplication.soundManager.playSound("clock");
          }, .5, 2, 0);
          this.timesNode.active = true;
          this.timesVal.string = this.timesLeft.toString();
          this.timesLeft < 10 ? this.timesVal.node.color = cc.hexToColor("#ef3a40") : this.timesVal.node.color = cc.hexToColor("#ffffff");
          if (0 == this.timesLeft) {
            this.gameOver = true;
            if (this.gotMoreTime) {
              this.timeIsUpNode.active = false;
              this.timeIsUpEndNode.active = true;
            } else {
              SDK().hasVideoAd() || true, this.timeIsUpNode.active = true;
              this.timeIsUpEndNode.active = false;
            }
            this.stopAllAction();
          }
        }
      },
      getMoreTime: function getMoreTime(event, type) {
        event.target.getComponent(cc.Button).interactable = false;
        1 == type ? window.gameApplication.onVideoBtnClick(function(isCompleted) {
          if (isCompleted) {
            this.addTime();
            this.timeIsUpNode.active = false;
          }
          event.target.getComponent(cc.Button).interactable = true;
        }.bind(this), false) : 2 == type && SDK().getItem("coins", function(coin) {
          if (coin >= 100) {
            coin -= 100;
            SDK().setItem({
              coins: coin
            });
            this.addTime();
          } else window.gameApplication.showCoinView(function(isCompleted) {
            isCompleted && this.addTime();
          }.bind(this), false);
          event.target.getComponent(cc.Button).interactable = true;
        }.bind(this));
      },
      addTime: function addTime() {
        this.timesLeft = 10;
        this.timesNode.active = true;
        this.timesVal.string = "10";
        var interval = 1;
        var repeat = 10;
        var delay = 1;
        this.timeIsUpNode.active = false;
        this.gotMoreTime = true;
        this.gameOver = false;
        this.unschedule(this.timeOutflow);
        this.schedule(this.timeOutflow, interval, repeat, delay);
      },
      getMoreTimeInv: function getMoreTimeInv(event) {
        var self = this;
        SDK().getItem("all", function(score) {
          SDK().share(score, function(isCompleted) {
            if (isCompleted) {
              self.timesLeft = 10;
              self.timesNode.active = true;
              self.timesVal.string = "10";
              var interval = 1;
              var repeat = 10;
              var delay = 1;
              self.gotMoreTime = true;
              self.gameOver = false;
              self.unschedule(this.timeOutflow);
              self.schedule(self.timeOutflow, interval, repeat, delay);
            } else self.showInvAgain(3, event);
            event.target.getComponent(cc.Button).interactable = true;
          }.bind(this));
        }.bind(this));
      },
      restarGame: function restarGame(delay) {
        this.myRole.node.stopAllActions();
        this.unschedule(this.timeOutflow);
        this.timesVal.node.color = cc.hexToColor("#ffffff");
        this.timeIsUpNode.active = false;
        this.gotMoreTime = false;
        this.endView.active = false;
        this.selectedLines.splice(0, this.selectedLines.length);
        this.enemys.splice(0, this.enemys.length);
        this.helplines.splice(0, this.helplines.length);
        this.helpPath.splice(0, this.helpPath.length);
        this.helpShaked.splice(0, this.helpShaked.length);
        this.isMoving = false;
        this.movesLeft = this.maxValidMoves;
        this.moved = 0;
        this.turnBackCount = 0;
        this.lastDirection = -1;
        if (null != delay && delay > 0) this.scheduleOnce(function() {
          this.gameOver = false;
          this.onyRole = null;
          this.initGame();
        }, delay); else {
          this.gameOver = false;
          this.myRole = null;
          this.initGame();
        }
      },
      getSteps: function getSteps() {
        var lines = [];
        var helpStart = null;
        var helpIdx = 0;
        if (null == helpStart) {
          helpStart = this.checkXY(this.stepsLines[0], 0, 0);
          helpIdx = 0;
        }
        lines.push(cc.v2(helpStart.x, helpStart.y));
        var stepCount = 1;
        while (helpIdx < this.stepsLines.length) {
          var isContinue = true;
          while (helpIdx < this.stepsLines.length && isContinue) {
            helpStart = this.checkXY(this.stepsLines[helpIdx], 0, 0);
            lines.push(cc.v2(helpStart.x, helpStart.y));
            var hc = this.getCellByCoordinate(helpStart);
            if (hc) {
              var canMove = this.checkCanMoveCount(this.checkMove(helpStart));
              if (canMove > 2 && lines.length > 1) {
                isContinue = false;
                stepCount++;
              }
            }
            helpIdx++;
          }
        }
        return stepCount;
      },
      help: function help() {
        if (this.gameOver || null == this.myRole) return;
        if (this.helpPath.length <= 0) return;
        var helpStart = null;
        var helpIdx = 0;
        if (this.selectedLines.length > 0) for (var i = this.helpPath.length - 1; i >= 0; i--) {
          var tmpPath = this.checkXY(this.helpPath[i], 0, 0);
          var path = cc.v2(tmpPath.x, tmpPath.y);
          for (var j = this.selectedLines.length - 1; j >= 0; j--) {
            var selected = this.selectedLines[j];
            if (null == helpStart && path.equals(selected)) {
              helpStart = path;
              helpIdx = i;
              break;
            }
          }
        }
        if (null == helpStart) {
          helpStart = this.checkXY(this.helpPath[0], 0, 0);
          helpIdx = 0;
        }
        this.showHelpLine(helpStart, helpIdx);
      },
      showHelpLine: function showHelpLine(helpStart, helpIdx) {
        if (this.helpPath.length <= 0) return;
        var self = this;
        var startV2 = cc.v2(helpStart.x, helpStart.y);
        this.helplines.length > 0 && (startV2 = this.helplines[this.helplines.length - 1]);
        for (var i = 0; i < this.helpPath.length; i++) {
          var v2 = this.helpPath[i];
          if (startV2.equals(v2)) {
            startV2 = cc.v2(v2.x, v2.y);
            helpIdx = i;
            break;
          }
        }
        helpIdx < this.helpPath.length - 1 && this.helpCount--;
        if (this.helplines.length <= 0) {
          !startV2.equals(this.myRole.axialCoordinate) && Utils.isNeighbors(startV2, this.myRole.axialCoordinate) && self.helplines.push(cc.v2(this.myRole.axialCoordinate.x, this.myRole.axialCoordinate.y));
          self.helplines.push(cc.v2(startV2.x, startV2.y));
        }
        var isContinue = true;
        while (++helpIdx < this.helpPath.length && isContinue) {
          helpStart = this.checkXY(this.helpPath[helpIdx], 0, 0);
          self.helplines.push(cc.v2(helpStart.x, helpStart.y));
          var hc = self.getCellByCoordinate(helpStart);
          if (hc) {
            var canMove = this.checkCanMoveCount(this.checkMove(helpStart));
            canMove > 2 && self.helplines.length > 1 && !hc.isIce && self.helplines.length > self.selectedLines.length && (isContinue = false);
          }
        }
        if (self.helplines.length > 1) for (var i = 0; i < self.helplines.length; i++) {
          var tmp_coordinate = self.helplines[i];
          var hc = self.getCellByCoordinate(tmp_coordinate);
          hc && (0 == i ? hc.showStartHelp(self.helplines[i + 1]) : i == self.helplines.length - 1 ? hc.showEndHelp(self.helplines[self.helplines.length - 2]) : hc.showHelp(self.helplines[i - 1], self.helplines[i + 1]));
        }
      },
      update: function update(dt) {
        if (this.gameOver) return;
        if (this.enemys.length > 0) for (var i = 0; i < this.enemys.length; i++) {
          var enemy = this.enemys[i];
          this.roundMove(enemy);
        }
        if (this.allTowers.length > 0) for (var i = 0; i < this.allTowers.length; i++) {
          var tower = this.allTowers[i];
          this.towerShoot(tower);
        }
      },
      towerShoot: function towerShoot(tower) {
        if (!tower.isShooting) {
          tower.isShooting = true;
          tower.bubble.active = true;
          var canMove = this.checkMove(tower.bubbleAxialCoordinate);
          var direction = -1;
          -1 != tower.direction && canMove[tower.direction] && (direction = tower.direction);
          if (-1 == direction) {
            var cb1 = cc.callFunc(function() {
              tower.bubble.getComponent("NormalAnimation").play();
            }, this);
            var delay0 = cc.delayTime(1);
            var cb2 = cc.callFunc(function() {
              tower.bubbleAxialCoordinate = tower.axialCoordinate;
              tower.bubble.position = cc.pCompMult(tower.node.getPosition(), cc.v2(.5, .5));
              tower.bubble.opacity = 0;
            }, this);
            var delay = cc.delayTime(tower["delay"]);
            var cb4 = cc.callFunc(function() {
              tower.isShooting = false;
              tower.bubble.opacity = 255;
            }, this);
            var seq = cc.sequence(cb1, delay0, cb2, delay, cb4);
            tower.bubble.runAction(seq);
          } else {
            var scale = hexTileHeight / 100;
            var nextPos = tower.bubbleAxialCoordinate.add(this.movePlus[direction]);
            var hc = this.getCellByCoordinate(nextPos);
            var worldPosition = this.tileBox.convertToWorldSpaceAR(hc.node.getPosition());
            var hcPos_tmp = tower.node.convertToNodeSpaceAR(worldPosition);
            var hcPos;
            hcPos = 1 == direction ? cc.v2(-1 * hcPos_tmp.y, -1 * hcPos_tmp.x) : 2 == direction ? cc.v2(-1 * hcPos_tmp.x, -1 * hcPos_tmp.y) : 3 == direction ? cc.v2(hcPos_tmp.y, hcPos_tmp.x) : cc.v2(hcPos_tmp.x, hcPos_tmp.y);
            var a1 = cc.moveTo(.3 * tower["s"], hcPos.y, hcPos.x);
            var cb1 = cc.callFunc(function() {
              tower.bubbleAxialCoordinate = nextPos;
              tower.isShooting = false;
            }, this);
            var seq = cc.sequence(a1, cb1);
            tower.bubble.runAction(seq);
          }
        }
      },
      roundMove: function roundMove(enemy) {
        if (!enemy.isMoving) {
          enemy.isMoving = true;
          var canMove = this.checkMove(enemy.axialCoordinate);
          var direction = -1;
          if (-1 != enemy.direction && canMove[enemy.direction] && 1 == this.checkMoveDirectionCount(canMove, enemy.direction) || -1 != enemy.direction && canMove[enemy.direction] && Math.random() > .6) direction = enemy.direction; else while (-1 == direction) {
            var idx = Utils.GetRandomNum(0, 3);
            canMove[idx] && (direction = idx);
          }
          enemy.direction = direction;
          var nextPos = enemy.axialCoordinate.add(this.movePlus[direction]);
          var hc = this.getCellByCoordinate(nextPos);
          var hcPos = hc.node.getPosition();
          var a1 = cc.moveTo(1, hcPos.x, hcPos.y);
          var cb1 = cc.callFunc(function() {
            enemy.axialCoordinate = nextPos;
            enemy.isMoving = false;
          }, this);
          var seq = cc.sequence(a1, cb1);
          enemy.node.runAction(seq);
        }
      },
      onMouseDown: function onMouseDown(event) {
        if (this.gameOver || null == this.myRole) return;
        this.mouseIsDown = true;
        this.touchPos = this.tileBox.convertToNodeSpaceAR(event.getLocation());
      },
      onMouseMove: function onMouseMove(event) {
        if (this.gameOver || null == this.myRole) return;
        if (this.mouseIsDown) {
          var movePos = this.tileBox.convertToNodeSpaceAR(event.getLocation());
          var offsetX = movePos.x - this.touchPos.x;
          var offsetY = movePos.y - this.touchPos.y;
          if (Math.abs(offsetX) < 30 && Math.abs(offsetY) < 30) return;
          Math.abs(offsetX) > Math.abs(offsetY) ? offsetX < 0 ? this.doAction(1, true) : this.doAction(3, true) : offsetY > 0 ? this.doAction(0, true) : this.doAction(2, true);
          this.mouseIsDown = false;
        }
      },
      getCellByCoordinate: function getCellByCoordinate(_coordinate) {
        for (var i = 0; i < this.allCells.length; i++) {
          var hc = this.allCells[i];
          if (hc.axialCoordinate.equals(_coordinate)) return hc;
        }
        return null;
      },
      stopAllAction: function stopAllAction() {
        cc.log("stopAllAction");
      },
      die: function die() {
        this.isinigame = false;
        this.unschedule(this.timeOutflow);
        this.gameOver = true;
        this.myRole.playDie();
        this.gameApplication.soundManager.playSound("error");
        this.scheduleOnce(function() {
          this.gameApplication.openMainView();
        }.bind(this), 1);
      },
      showGameOver: function showGameOver() {
        this.isinigame = false;
        if (null != bid && bid > 0 && null != mid && mid > 0 && null != lid && lid > 0) {
          var arr = [];
          lid < 100 && arr.push(lid + 1);
          arr.forEach(function(tmp_lid) {
            var tmp_path = "conf/level_detail/b_" + bid + "/" + mid + "/" + tmp_lid;
            window.gameApplication.getConf(tmp_path, null);
          });
        }
        this.gameApplication.soundManager.playSound("gamewin");
        this.unschedule(this.timeOutflow);
        this.timeIsUpNode.active = false;
        var self = this;
        this.gameOver = true;
        this.endView.active = true;
        this.stopAllAction();
        var curr_star = 0;
        curr_star = this.turnBackCount <= 0 ? 3 : this.turnBackCount <= 6 ? 2 : 1;
        this.endView_title.string = 3 == curr_star ? "\u5f88\u68d2" : 2 == curr_star ? "\u5f88\u597d" : "\u6e05\u9664";
        this.endView_title.string = "\u5b8c\u6210";
        this.endView_text.string = "\u60a8\u4e00\u5171\u8d70\u4e86 " + this.moved + " \u6b65";
        this.giftBtn.active = true;
        SDK().getItem(bid + "_" + mid + "_" + lid, function(star) {
          SDK().getItem("curIdx", function(idx) {
            var curIdx = this.judgeIdx(mid, lid);
            if (curIdx + 1 > idx) {
              var param = {};
              window.curIdx = curIdx + 1;
              param.curIdx = window.curIdx;
              SDK().setItem(param, function() {
                window.mainScirpt.initStage(window.curIdx);
              }.bind(this));
            }
          }.bind(this));
          if (star < 1) {
            var param = {};
            param[bid + "_" + mid + "_" + lid] = 1;
            var saveCount = 0;
            SDK().setItem(param, function() {
              saveCount++;
              saveCount >= 2 && this.scheduleOnce(function() {
                var curIdx = this.judgeIdx(mid, lid);
                window.mainScirpt.initStage(curIdx);
                curIdx % 10 == 0 && 0 != curIdx && window.timeGiftScript.showTimeGiftView(2);
              }.bind(this), 1);
            }.bind(this));
            var plusStar = curr_star - star;
            SDK().getItem("all", function(score) {
              score += 1;
              SDK().setRankScore(2, score, "{}", null);
              SDK().setItem({
                all: score
              }, function() {
                saveCount++;
                saveCount >= 2 && this.scheduleOnce(function() {
                  var curIdx = this.judgeIdx(mid, lid);
                  window.mainScirpt.initStage(curIdx);
                  curIdx % 10 == 0 && 0 != curIdx && window.timeGiftScript.showTimeGiftView(2);
                }.bind(this), 1);
              }.bind(this));
            }.bind(this));
            SDK().getItem(bid + "_" + mid, function(score) {
              score += 1;
              var param = {};
              param[bid + "_" + mid] = score;
              SDK().setItem(param, null);
            }.bind(this));
          } else this.scheduleOnce(function() {}.bind(this), 1);
        }.bind(this));
        SDK().getItem(bid + "_" + mid + "_" + lid + "_moves", function(best) {
          if (self.moved < best || best <= 0) {
            var param = {};
            param[bid + "_" + mid + "_" + lid + "_moves"] = self.moved;
            SDK().setItem(param, null);
          }
        }.bind(this));
        this.gameApplication.playTimes++;
      },
      StartRecourd: function StartRecourd() {},
      backToMain: function backToMain() {
        this.endView.active = false;
        this.gameApplication.openMainView();
      },
      judgeIdx: function judgeIdx(mid, lid) {
        var idx = 0;
        if (lid >= 50) {
          lid -= 50;
          idx = 300;
          idx = idx + 10 * (mid - 1) + 50 * Math.floor((lid - 1) / 10) + lid % 10;
        } else idx = 10 * (mid - 1) + 60 * Math.floor((lid - 1) / 10) + (lid - 1) % 10;
        return idx;
      },
      onOpAdClicked: function onOpAdClicked() {
        null != this.opad_game_id && SDK().switchGameAsync(this.opad_game_id);
      },
      checkWin: function checkWin() {
        var isWin = this.myRole.axialCoordinate.equals(this.endObj.axialCoordinate);
        if (isWin) {
          this.isinigame = false;
          this.showGameOver();
        }
        return isWin;
      },
      moveEnd: function moveEnd() {
        this.isMoving = false;
        if (!this.checkWin()) {
          var canMove = this.checkMove();
          this.gameApplication.soundManager.playSound("done");
          var hc = this.getCellByCoordinate(this.myRole.axialCoordinate);
          if (hc.isIce && canMove[this.lastDirection]) this.doAction(this.lastDirection, true); else {
            this.moved++;
            this.movesLeft--;
            if (this.turnBackCount > 0 && this.turnBackCount % 2 == 0 && !Utils.inArray(this.turnBackCount, this.helpShaked)) {
              this.helpBtnShake();
              this.helpShaked.push(this.turnBackCount);
            }
            this.myRole.setArrow(canMove[0], canMove[1], canMove[2], canMove[3]);
          }
        }
        this.updateUI();
      },
      addSelectedLines: function addSelectedLines(coordinate) {
        var self = this;
        if (this.selectedLines.length >= 2 && coordinate.equals(this.selectedLines[this.selectedLines.length - 2])) {
          var tmp_coordinate = this.selectedLines.pop();
          var hc = this.getCellByCoordinate(tmp_coordinate);
          hc.hideLine();
        } else this.selectedLines.push(cc.v2(coordinate.x, coordinate.y));
        this.selectedLines.length > 1 && this.scheduleOnce(function() {
          for (var i = 0; i <= self.selectedLines.length - 1; i++) {
            var tmp_coordinate = self.selectedLines[i];
            var hc = self.getCellByCoordinate(tmp_coordinate);
            hc.hideLine();
          }
          for (var i = 0; i <= self.selectedLines.length - 1; i++) {
            var tmp_coordinate = self.selectedLines[i];
            var hc = self.getCellByCoordinate(tmp_coordinate);
            0 == i ? hc.showStartLine(self.selectedLines[i + 1]) : i == self.selectedLines.length - 1 ? hc.showEndLine(self.selectedLines[self.selectedLines.length - 2]) : hc.showLine(self.selectedLines[i - 1], self.selectedLines[i + 1]);
          }
        }, .08);
      },
      doAction: function doAction(direction, manual) {
        if (this.isMoving || this.gameOver) return;
        this.isMoving = true;
        this.myRole.hideArrow();
        var self = this;
        var canMove = this.checkMove();
        if (!manual && this.checkMoveDirectionCount(canMove, direction) > 1) {
          this.moveEnd();
          return;
        }
        if (canMove[direction]) {
          var nextPos = this.myRole.axialCoordinate.add(this.movePlus[direction]);
          var hc = this.getCellByCoordinate(nextPos);
          if (null != hc) {
            var isTurnBack = false;
            isTurnBack = 0 == direction ? 2 == this.lastDirection : 3 == direction ? 1 == this.lastDirection : 1 == direction ? 3 == this.lastDirection : 0 == this.lastDirection;
            isTurnBack && this.turnBackCount++;
            this.lastDirection = direction;
            var hcPos = hc.node.getPosition();
            var a1 = cc.moveTo(.12, hcPos.x, hcPos.y);
            var cb1 = cc.callFunc(function() {
              self.myRole.axialCoordinate = nextPos;
              self.isMoving = false;
              self.checkWin() || self.doAction(direction, false);
            }, this);
            this.addSelectedLines(nextPos);
            var seq = cc.sequence(a1, cb1);
            self.myRole.node.runAction(seq);
          }
        } else {
          this.gameApplication.soundManager.playSound("done");
          if (1 == this.checkMoveDirectionCount(canMove, direction)) {
            direction = this.getkMoveDirection(canMove, direction);
            if (!this.checkWin()) {
              var hc = this.getCellByCoordinate(this.myRole.axialCoordinate);
              if (hc.isIce) this.moveEnd(); else {
                this.isMoving = false;
                self.doAction(direction, true);
              }
            }
          } else this.moveEnd();
        }
      },
      getkMoveDirection: function getkMoveDirection(canMove, direction) {
        var c;
        c = 0 == direction ? 2 : 3 == direction ? 1 : 1 == direction ? 3 : 0;
        var count = 0;
        for (var i = 0; i < canMove.length; i++) {
          var v = canMove[i];
          if (v && i != c) return i;
        }
      },
      checkCanMoveCount: function checkCanMoveCount(canMove) {
        var c;
        var count = 0;
        for (var i = 0; i < canMove.length; i++) {
          var v = canMove[i];
          v && count++;
        }
        return count;
      },
      checkMoveDirectionCount: function checkMoveDirectionCount(canMove, direction) {
        var c;
        c = 0 == direction ? 2 : 3 == direction ? 1 : 1 == direction ? 3 : 0;
        var count = 0;
        for (var i = 0; i < canMove.length; i++) {
          var v = canMove[i];
          v && i != c && count++;
        }
        return count;
      },
      checkMove: function checkMove(axialCoordinate) {
        null == axialCoordinate && (axialCoordinate = this.myRole.axialCoordinate);
        var neighbors = Utils.getNeighborsOBJ(axialCoordinate);
        var t = true, l = true, d = true, r = true;
        var hc = this.getCellByCoordinate(axialCoordinate);
        if (null != hc) {
          hc.leftActive && (l = false);
          hc.rightActive && (r = false);
          hc.topActive && (t = false);
          hc.bottomActive && (d = false);
        }
        if (t) {
          var tc = this.getCellByCoordinate(neighbors.t);
          null != tc && tc.bottomActive && (t = false);
        }
        if (d) {
          var dc = this.getCellByCoordinate(neighbors.b);
          null != dc && dc.topActive && (d = false);
        }
        if (l) {
          var lc = this.getCellByCoordinate(neighbors.l);
          null != lc && lc.rightActive && (l = false);
        }
        if (r) {
          var rc = this.getCellByCoordinate(neighbors.r);
          null != rc && rc.leftActive && (r = false);
        }
        return [ t, l, d, r ];
      },
      checkMovePos: function checkMovePos(axialCoordinate) {
        null == axialCoordinate && (axialCoordinate = this.myRole.axialCoordinate);
        var neighbors = Utils.getNeighborsOBJ(axialCoordinate);
        var t = neighbors.t, l = neighbors.l, d = neighbors.b, r = neighbors.r;
        var hc = this.getCellByCoordinate(axialCoordinate);
        if (null != hc) {
          hc.leftActive && (l = cc.v2(-1, -1));
          hc.rightActive && (r = cc.v2(-1, -1));
          hc.topActive && (t = cc.v2(-1, -1));
          hc.bottomActive && (d = cc.v2(-1, -1));
        }
        if (t) {
          var tc = this.getCellByCoordinate(neighbors.t);
          null != tc && tc.bottomActive && (t = cc.v2(-1, -1));
        }
        if (d) {
          var dc = this.getCellByCoordinate(neighbors.b);
          null != dc && dc.topActive && (d = cc.v2(-1, -1));
        }
        if (l) {
          var lc = this.getCellByCoordinate(neighbors.l);
          null != lc && lc.rightActive && (l = cc.v2(-1, -1));
        }
        if (r) {
          var rc = this.getCellByCoordinate(neighbors.r);
          null != rc && rc.leftActive && (r = cc.v2(-1, -1));
        }
        return [ t, l, d, r ];
      },
      createEnemy: function createEnemy(enemys) {
        var scale = hexTileHeight / 100;
        if (enemys.length <= 0) return;
        for (var i = 0; i < enemys.length; i++) {
          var enemy = enemys[i];
          var hc = this.getCellByCoordinate(cc.v2(enemy.x, enemy.y));
          var enemy_GO;
          var random = Math.random();
          enemy_GO = random < .33 ? cc.instantiate(this.enemyPrefab) : random < .66 ? cc.instantiate(this.enemyPrefab1) : cc.instantiate(this.enemyPrefab2);
          enemy_GO.parent = this.tileBox;
          enemy_GO.setScale(scale);
          enemy_GO.setPosition(hc.node.getPosition());
          enemy_GO.active = true;
          var enemy = enemy_GO.getComponent(Enemy);
          enemy.axialCoordinate = hc.axialCoordinate;
          this.enemys.push(enemy);
        }
      },
      createRole: function createRole(start, end) {
        var scale = hexTileHeight / 100;
        start = this.checkXY(start, 0, 0);
        end = this.checkXY(end, 0, 0);
        var hc = this.getCellByCoordinate(cc.v2(start.x, start.y));
        var hc1 = this.getCellByCoordinate(cc.v2(end.x, end.y));
        var role_GO = cc.instantiate(this.rolePrefab);
        role_GO.parent = this.tileBox;
        role_GO.setScale(scale);
        role_GO.setPosition(hc.node.getPosition());
        role_GO.active = true;
        var role = role_GO.getComponent(Role);
        this.myRole = role;
        this.myRole.init();
        this.myRole.axialCoordinate = hc.axialCoordinate;
        this.selectedLines.push(cc.v2(hc.axialCoordinate.x, hc.axialCoordinate.y));
        var canMove = this.checkMove();
        this.myRole.setArrow(canMove[0], canMove[1], canMove[2], canMove[3]);
        var end_GO = cc.instantiate(this.endPrefab);
        end_GO.parent = this.tileBox;
        end_GO.setScale(scale);
        end_GO.setPosition(hc1.node.getPosition());
        end_GO.active = true;
        this.endNode = end_GO;
        var endObj = end_GO.getComponent(Role);
        this.endObj = endObj;
        this.endObj.axialCoordinate = hc1.axialCoordinate;
        this.myRole.gameView = this;
        this.myRole.setDark(4 == mid);
      },
      collisionCallback: function collisionCallback() {
        this.die();
      },
      createGrid: function createGrid(_levelDimensions, walls, ices, towers, cb) {
        this.gridOffset.x = 0;
        this.gridOffset.y = 0;
        var maxL = Math.max(_levelDimensions.x, _levelDimensions.y);
        var winSize = cc.winSize;
        var tileBoxSize = this.tileBox.getContentSize();
        var tileBoxHeight = tileBoxSize.height;
        var hexH = winSize.width;
        hexTileHeight = (hexH - (lineWidth - lineWidth * _levelDimensions.x)) / _levelDimensions.x;
        var nowHeight = hexTileHeight * _levelDimensions.y;
        if (tileBoxHeight < nowHeight) {
          hexH = tileBoxSize.height;
          var testHexTileHeight = (hexH - (lineWidth - lineWidth * _levelDimensions.y)) / _levelDimensions.y;
          if (testHexTileHeight < hexTileHeight) {
            hexTileHeight = testHexTileHeight;
            this.gridOffset.x = .5 * (winSize.width - _levelDimensions.x * hexTileHeight + _levelDimensions.x * lineWidth);
          }
        }
        sideLength = hexTileHeight;
        var sizeW = sideLength;
        var sizeH = sideLength;
        this.levelDimensions = _levelDimensions;
        var hexTile;
        var hc;
        var axialPoint = cc.v2(0, 0);
        var screenPoint = cc.v2(0, 0);
        var test = .5 * (tileBoxSize.height - this.levelDimensions.y * hexTileHeight + this.levelDimensions.y * lineWidth);
        this.gridOffset.y = -1 * tileBoxSize.height + test;
        for (var i = 0; i < this.levelDimensions.x; i++) for (var j = 0; j < this.levelDimensions.y; j++) {
          axialPoint.x = i;
          axialPoint.y = j;
          screenPoint = Utils.axialToScreen(axialPoint, sideLength);
          screenPoint.x += this.gridOffset.x;
          screenPoint.y += this.gridOffset.y;
          hexTile = cc.instantiate(this.hexCellPrefab);
          hexTile.parent = this.tileBox;
          hexTile.setPosition(screenPoint.add(cc.v2(0, 1e3)));
          hexTile.setContentSize(cc.size(sizeW, sizeW));
          hexTile.active = true;
          var self = this;
          j % 2 == 0 ? hexTile.runAction(cc.sequence(cc.moveTo(.2 + .05 * axialPoint.y, screenPoint.x, screenPoint.y), cc.callFunc(function() {
            self.gameApplication.soundManager.playSound("uplock");
          }))) : hexTile.runAction(cc.moveTo(.2 + .05 * axialPoint.y, screenPoint.x, screenPoint.y));
          hexTile.name = "grid" + i.toString() + "_" + j.toString();
          hexTile.zIndex = 0;
          hc = hexTile.getComponent(HexCell);
          hc.scaleChild(sizeW / 100, sizeW / 100);
          hc.axialCoordinate = axialPoint;
          this.allCells.push(hc);
        }
        if (null == walls || walls.length <= 0) return;
        var self = this;
        var wx = 0, wy = 0, dx = 0, dy = 0;
        for (var i = 0; i < walls.length; i++) {
          var wall = walls[i];
          var tmp_w1 = self.checkXY(wall["w1"], wx, wy);
          var tmp_d1 = self.checkXY(wall["d1"], dx, dy);
          var w1;
          var d1;
          var hc;
          if (tmp_w1.x < tmp_d1.x || tmp_w1.y > tmp_d1.y) {
            w1 = tmp_w1;
            d1 = tmp_d1;
          } else {
            w1 = tmp_d1;
            d1 = tmp_w1;
          }
          (hc = this.getCellByCoordinate(cc.v2(w1.x, w1.y - 1))) ? w1.x == d1.x ? hc.setLeft(true) : hc.setTop(true) : (hc = this.getCellByCoordinate(cc.v2(w1.x, w1.y))) ? w1.x == d1.x ? hc.setRight(true) : hc.setBottom(true) : (hc = this.getCellByCoordinate(cc.v2(w1.x - 1, w1.y - 1))) && (w1.x == d1.x ? hc.setRight(true) : hc.setBottom(true));
        }
        this.scheduleOnce(function() {
          this.scheduleOnce(function() {
            if (null != ices && ices.length > 0) for (var i = 0; i < ices.length; i++) {
              var ice = ices[i];
              var hc = this.getCellByCoordinate(cc.v2(ice.x, ice.y));
              if (null != hc) {
                hc.setIce(true);
                var iceNode = cc.instantiate(this.icePrefab);
                iceNode.parent = this.iceBox;
                iceNode.setPosition(hc.node.getPosition());
                iceNode.setContentSize(hc.node.getContentSize());
                iceNode.active = true;
                iceNode.setScale(.3, .3);
                iceNode.runAction(cc.scaleTo(.35, 1, 1));
              }
            }
          }.bind(this), 1);
          if (null != towers && towers.length > 0) for (var i = 0; i < towers.length; i++) {
            var tower = towers[i];
            var tmp_w1 = self.checkXY(tower["w1"], wx, wy);
            var tmp_d1 = self.checkXY(tower["d1"], dx, dy);
            var w1;
            var d1;
            var hc = null;
            if (tmp_w1.x < tmp_d1.x || tmp_w1.y > tmp_d1.y) {
              w1 = tmp_w1;
              d1 = tmp_d1;
            } else {
              w1 = tmp_d1;
              d1 = tmp_w1;
            }
            if (1 == tower["direction"]) {
              hc = this.getCellByCoordinate(cc.v2(Math.max(w1.x, d1.x) - 1, d1.y));
              null == hc && (hc = this.getCellByCoordinate(cc.v2(Math.max(w1.x, d1.x), d1.y)));
            } else if (3 == tower["direction"]) {
              hc = this.getCellByCoordinate(cc.v2(Math.max(w1.x, d1.x), d1.y));
              null == hc && (hc = this.getCellByCoordinate(cc.v2(Math.max(w1.x, d1.x) - 1, d1.y)));
            } else if (0 == tower["direction"]) {
              hc = this.getCellByCoordinate(cc.v2(w1.x, Math.min(w1.y, d1.y)));
              null == hc && (hc = this.getCellByCoordinate(cc.v2(w1.x, Math.max(w1.y, d1.y))));
            } else if (2 == tower["direction"]) {
              hc = this.getCellByCoordinate(cc.v2(w1.x, Math.max(w1.y, d1.y) - 1));
              null == hc && (hc = this.getCellByCoordinate(cc.v2(w1.x, Math.max(w1.y, d1.y))));
            }
            if (null != hc) {
              if (w1.x == d1.x) if (1 == tower["direction"]) {
                hc.setRightTower(true);
                this.pushTower(hc.rightTower, hc.axialCoordinate, tower);
              } else {
                hc.setLeftTower(true);
                this.pushTower(hc.leftTower, hc.axialCoordinate, tower);
              } else if (0 == tower["direction"]) {
                hc.setTopTower(true);
                this.pushTower(hc.topTower, hc.axialCoordinate, tower);
              } else {
                hc.setBottomTower(true);
                this.pushTower(hc.bottomTower, hc.axialCoordinate, tower);
              }
              hc.node.zIndex = 1;
            }
          }
          cb && cb();
        }.bind(this), .5 + .05 * this.levelDimensions.y);
      },
      pushTower: function pushTower(node, axialCoordinate, config) {
        var tower = node.getComponent(Tower);
        tower.axialCoordinate = axialCoordinate;
        tower.init(config);
        this.allTowers.push(tower);
      },
      checkXY: function checkXY(dict, x, y) {
        null == dict["x"] && (dict["x"] = y);
        null == dict["y"] && (dict["y"] = x);
        return dict;
      },
      updateUI: function updateUI() {
        this.moves.string = this.movesLeft + "/" + this.maxValidMoves;
        if (this.movesLeft <= 0 && 1 == mid) {
          this.gameOver = true;
          window.gameApplication.showStepView(function(isOk) {
            if (isOk) {
              this.gameOver = false;
              this.movesLeft = 5;
              this.updateUI();
            } else {
              this.isinigame = false;
              this.gameApplication.openMainView();
            }
          }.bind(this), false);
        }
      },
      setStar: function setStar(node, score, f) {},
      onBackBtnClicked: function onBackBtnClicked(event) {
        this.isinigame = false;
        null != this.gameApplication && this.gameApplication.soundManager.playSound("btn_click");
        this.gameApplication.openMainView();
      },
      onNextBtnClicked: function onNextBtnClicked(event) {
        var btn = event.target.getComponent(cc.Button);
        btn.interactable = false;
        this.scheduleOnce(function() {
          btn.interactable = true;
        }, 1);
        this.gameApplication.soundManager.playSound("btn_click");
        this.nextGame(btn);
      },
      onPreviousBtnClicked: function onPreviousBtnClicked(event) {
        var btn = event.target.getComponent(cc.Button);
        btn.interactable = false;
        this.scheduleOnce(function() {
          btn.interactable = true;
        }, 1);
        this.gameApplication.soundManager.playSound("btn_click");
        this.prevGame();
      },
      onReStarBtnClicked: function onReStarBtnClicked(event) {
        this.isinigame = false;
        this.timeIsUpNode.active = false;
        var btn = event.target.getComponent(cc.Button);
        btn.interactable = false;
        this.scheduleOnce(function() {
          btn.interactable = true;
        }, .2);
        window.gameApplication.soundManager.playSound("btn_click");
        window.gameApplication.openMainView();
      },
      onHelpBtnClicked: function onHelpBtnClicked(event) {
        if (this.gameOver || null == this.myRole) return;
        if (this.helpPath.length <= 0) return;
        if (this.helpCount > 0) {
          window.gameApplication.soundManager.playSound("btn_click");
          this.help();
        } else {
          window.gameApplication.soundManager.playSound("btn_click");
          this.shareFriendTip.active = true;
        }
      },
      onWatchVideoBtnClicked: function onWatchVideoBtnClicked(event) {
        event.target.getComponent(cc.Button).interactable = false;
        var self = this;
        SDK().showVideoAd(function(isCompleted) {
          isCompleted ? self.helpCount = plusHelp : cc.log("\u64ad\u653e\u89c6\u9891\u5e7f\u544a\u5931\u8d25");
          event.target.getComponent(cc.Button).interactable = true;
          self.shareFriendTip.active = false;
        }.bind(this));
      },
      onShareInvBtnClicked: function onShareInvBtnClicked(event) {
        this.gameApplication.soundManager.playSound("btn_click");
        var self = this;
        this.gameApplication.soundManager.playSound("done");
        SDK().getItem("all", function(score) {}.bind(this));
      },
      showInvAgain: function showInvAgain(type, event) {
        var self = this;
        this.invAgain.active = true;
        var btn = cc.find("box/btn_4", this.invAgain).getComponent(cc.Button);
        btn.node.on("click", function() {
          1 == type ? self.onShareInvBtnClicked(event) : 2 == type ? self.onShareBtnClicked(event) : 3 == type && self.getMoreTimeInv(event);
          self.invAgain.active = false;
        }, this);
      },
      onCloseWatchVideoTipClicked: function onCloseWatchVideoTipClicked() {
        this.gameApplication.soundManager.playSound("btn_click");
        this.shareFriendTip.active = false;
      },
      onShareBtnClicked: function onShareBtnClicked(event) {
        var self = this;
        this.gameApplication.soundManager.playSound("btn_click");
        event.target.getComponent(cc.Button).interactable = false;
        event.target.active = true;
        this.gameApplication.soundManager.playSound("done");
        SDK().getItem("all", function(score) {
          SDK().share(score, function(isCompleted) {
            event.target.getComponent(cc.Button).interactable = true;
            event.target.active = true;
            isCompleted || self.showInvAgain(2, event);
          });
        }.bind(this));
      },
      helpBtnShake: function helpBtnShake() {
        this.helpBtn.getComponent("AnimFunc").shake();
      },
      onGiftBtnClicked: function onGiftBtnClicked() {
        this.receiveGiftNode.active = false;
      },
      onPlayInterstitialGiftBtnClicked: function onPlayInterstitialGiftBtnClicked(event) {
        var self = this;
        self.gameApplication.soundManager.playSound("done");
        SDK().showInterstitialAd(function(isCompleted) {
          self.helpCount += 1;
          self.receiveGiftNode.active = true;
          self.giftBtn.active = false;
          console.log("_______OKOK");
        }, true);
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
  GlobalEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "39b1aRbTTZC7oyLUzRQDDs3", "GlobalEvent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _class, _temp;
    var _EventDispatcher2 = require("./EventDispatcher");
    var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var GlobalEvent = (_temp = _class = function(_EventDispatcher) {
      _inherits(GlobalEvent, _EventDispatcher);
      _createClass(GlobalEvent, [ {
        key: "pause",
        value: function pause() {
          this.publish(GlobalEvent.EVENT_HIDE);
        }
      }, {
        key: "resume",
        value: function resume() {
          this.publish(GlobalEvent.EVENT_SHOW);
        }
      }, {
        key: "changeAdState",
        value: function changeAdState(state) {
          this.publish(GlobalEvent.CHANGE_AD_STATE, state);
        }
      } ], [ {
        key: "instance",
        value: function instance() {
          this.ins || (this.ins = new GlobalEvent());
          return this.ins;
        }
      } ]);
      function GlobalEvent() {
        _classCallCheck(this, GlobalEvent);
        var _this = _possibleConstructorReturn(this, (GlobalEvent.__proto__ || Object.getPrototypeOf(GlobalEvent)).call(this));
        cc.game.on(cc.game.EVENT_HIDE, function() {
          _this.pause();
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          _this.resume();
        });
        return _this;
      }
      return GlobalEvent;
    }(_EventDispatcher3.default), _class.EVENT_HIDE = "EVENT_HIDE", _class.EVENT_SHOW = "EVENT_SHOW", 
    _class.CHANGE_AD_STATE = "EVENT_CHANGE_AD_STATE", _temp);
    exports.default = GlobalEvent;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "./EventDispatcher": "EventDispatcher"
  } ],
  HexCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f2d9wJS0FLXJ2cTn40JI4b", "HexCell");
    "use strict";
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
          visible: false
        },
        axialCoordinate: {
          get: function get() {
            return this._axialCoordinate;
          },
          set: function set(val) {
            this._axialCoordinate = cc.v2(val.x, val.y);
            this.onUpdateAxialCoordinate();
          }
        },
        iceNode: {
          default: null,
          type: cc.Node
        },
        isIce: {
          get: function get() {
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
          get: function get() {
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
          get: function get() {
            return this.left.active;
          }
        },
        rightActive: {
          get: function get() {
            return this.right.active;
          }
        },
        topActive: {
          get: function get() {
            return this.top.active;
          }
        },
        bottomActive: {
          get: function get() {
            return this.bottom.active;
          }
        }
      },
      onLoad: function onLoad() {
        this.initHexcell();
      },
      start: function start() {},
      scaleChild: function scaleChild(x, y) {
        this.line_end.setScale(x, y);
        this.line_start.setScale(x, y);
        this.help_end.setScale(x, y);
        this.help_start.setScale(x, y);
        this.leftTower.getComponent("Tower").setScaleXY(x, y);
        this.topTower.getComponent("Tower").setScaleXY(x, y);
        this.rightTower.getComponent("Tower").setScaleXY(x, y);
        this.bottomTower.getComponent("Tower").setScaleXY(x, y);
      },
      showStartLine: function showStartLine(nextNode) {
        if (null == nextNode) return;
        this.line_start.active = true;
        this.axialCoordinate.x == nextNode.x ? this.axialCoordinate.y > nextNode.y ? this.line_start.setRotation(90) : this.line_start.setRotation(-90) : this.axialCoordinate.x > nextNode.x ? this.line_start.setRotation(180) : this.line_start.setRotation(0);
      },
      showEndLine: function showEndLine(boforeNode) {
        if (null == boforeNode) return;
        this.line_end.active = true;
        this.axialCoordinate.x == boforeNode.x ? this.axialCoordinate.y > boforeNode.y ? this.line_end.setRotation(90) : this.line_end.setRotation(-90) : this.axialCoordinate.x > boforeNode.x ? this.line_end.setRotation(180) : this.line_end.setRotation(0);
      },
      showLine: function showLine(nextNode, boforeNode) {
        this.showStartLine(boforeNode);
        this.showEndLine(nextNode);
      },
      hideLine: function hideLine() {
        this.line_start.active = false;
        this.line_end.active = false;
      },
      showStartHelp: function showStartHelp(nextNode) {
        if (null == nextNode) return;
        this.help_start.active = true;
        this.axialCoordinate.x == nextNode.x ? this.axialCoordinate.y > nextNode.y ? this.help_start.setRotation(90) : this.help_start.setRotation(-90) : this.axialCoordinate.x > nextNode.x ? this.help_start.setRotation(180) : this.help_start.setRotation(0);
      },
      showEndHelp: function showEndHelp(boforeNode) {
        if (null == boforeNode) return;
        this.help_end.active = true;
        this.axialCoordinate.x == boforeNode.x ? this.axialCoordinate.y > boforeNode.y ? this.help_end.setRotation(90) : this.help_end.setRotation(-90) : this.axialCoordinate.x > boforeNode.x ? this.help_end.setRotation(180) : this.help_end.setRotation(0);
      },
      showHelp: function showHelp(nextNode, boforeNode) {
        this.showStartHelp(boforeNode);
        this.showEndHelp(nextNode);
      },
      hideHelpLine: function hideHelpLine() {
        this.help_start.active = false;
        this.help_end.active = false;
      },
      setIce: function setIce(isIce) {
        this.iceNode.active = true;
      },
      setLeft: function setLeft(isShow) {
        this.left.active = isShow;
      },
      setRight: function setRight(isShow) {
        this.right.active = isShow;
      },
      setTop: function setTop(isShow) {
        this.top.active = isShow;
      },
      setBottom: function setBottom(isShow) {
        this.bottom.active = isShow;
      },
      setLeftTower: function setLeftTower(isShow) {
        this.leftTower.active = isShow;
      },
      setRightTower: function setRightTower(isShow) {
        this.rightTower.active = isShow;
      },
      setTopTower: function setTopTower(isShow) {
        this.topTower.active = isShow;
      },
      setBottomTower: function setBottomTower(isShow) {
        this.bottomTower.active = isShow;
      },
      initHexcell: function initHexcell() {
        this.reset();
      },
      onUpdateAxialCoordinate: function onUpdateAxialCoordinate() {
        this.coordinateText.string = parseInt(this.axialCoordinate.x) + "," + parseInt(this.axialCoordinate.y);
        this.coordinateText.node.active = isDebug;
      },
      reset: function reset(isClear) {
        var isClear = !!arguments[0] && arguments[0];
        this.setLeft(false);
        this.setRight(false);
        this.setTop(false);
        this.setBottom(false);
        this.setLeftTower(false);
        this.setRightTower(false);
        this.setTopTower(false);
        this.setBottomTower(false);
      }
    });
    cc._RF.pop();
  }, {} ],
  InterstitialAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97bacVhLahDqpDP/J63fkgi", "InterstitialAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var InterstitialAd = function() {
      function InterstitialAd() {
        _classCallCheck(this, InterstitialAd);
      }
      _createClass(InterstitialAd, [ {
        key: "show",
        value: function show(func) {}
      }, {
        key: "load",
        value: function load(id) {}
      }, {
        key: "isLoad",
        value: function isLoad() {}
      } ]);
      return InterstitialAd;
    }();
    exports.default = InterstitialAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  LanguageData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
    "use strict";
    var Polyglot = require("polyglot.min");
    var polyInst = null;
    window.i18n || (window.i18n = {
      languages: {},
      curLang: ""
    });
    false;
    function loadLanguageData(language) {
      return window.i18n.languages[language];
    }
    function initPolyglot(data) {
      data && (polyInst ? polyInst.replace(data) : polyInst = new Polyglot({
        phrases: data,
        allowMissing: true
      }));
    }
    module.exports = {
      init: function init(language) {
        if (language === window.i18n.curLang) return;
        var data = loadLanguageData(language) || {};
        window.i18n.curLang = language;
        initPolyglot(data);
        this.inst = polyInst;
      },
      t: function t(key, opt) {
        if (polyInst) return polyInst.t(key, opt);
      },
      inst: polyInst,
      updateSceneRenderers: function updateSceneRenderers() {
        var rootNodes = cc.director.getScene().children;
        var allLocalizedLabels = [];
        for (var i = 0; i < rootNodes.length; ++i) {
          var labels = rootNodes[i].getComponentsInChildren("LocalizedLabel");
          Array.prototype.push.apply(allLocalizedLabels, labels);
        }
        for (var _i = 0; _i < allLocalizedLabels.length; ++_i) {
          var label = allLocalizedLabels[_i];
          if (!label.node.active) continue;
          label.updateLabel();
        }
        var allLocalizedSprites = [];
        for (var _i2 = 0; _i2 < rootNodes.length; ++_i2) {
          var sprites = rootNodes[_i2].getComponentsInChildren("LocalizedSprite");
          Array.prototype.push.apply(allLocalizedSprites, sprites);
        }
        for (var _i3 = 0; _i3 < allLocalizedSprites.length; ++_i3) {
          var sprite = allLocalizedSprites[_i3];
          if (!sprite.node.active) continue;
          sprite.updateSprite(window.i18n.curLang);
        }
      }
    };
    cc._RF.pop();
  }, {
    "polyglot.min": "polyglot.min"
  } ],
  LevelView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f23f1EV0cJDq6BQzHk3MAdR", "LevelView");
    "use strict";
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
          get: function get() {
            return this._lastOpenLid;
          },
          set: function set(val) {
            this._lastOpenLid = val;
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
      onLoad: function onLoad() {
        this.gameApplication = cc.find("GameApplication").getComponent("GameApplication");
      },
      start: function start() {},
      init: function init(bid, mid) {
        this.title.string = "";
        if (null == this.levels || Object.keys(this.levels).length <= 0 || this.bid != bid || this.mid != mid) {
          this.bid = bid;
          this.mid = mid;
          var path = "conf/level_list/level_" + bid + "_" + mid;
          this.gameApplication.getConf(path, function(results) {
            this.levels = results;
            this.initContents();
          }.bind(this));
        } else {
          this.bid = bid;
          this.mid = mid;
          this.initContents();
        }
        var self = this;
        SDK().getItem(bid + "_" + mid, function(score) {
          self.starts.getComponent(cc.Label).string = score.toString();
          var tmpId = score + 1;
          var arr = [];
          arr.push(tmpId);
          tmpId > 1 && arr.push(tmpId - 1);
          arr.forEach(function(tmp_lid) {
            var tmp_path = "conf/level_detail/b_" + bid + "/" + mid + "/" + tmp_lid;
            self.gameApplication.getConf(tmp_path, null);
          });
        }.bind(this));
      },
      initContents: function initContents() {
        var self = this;
        self.hideAllItem();
        this.title.string = self.levels.title;
        this.lastLid = 0;
        this.bid = self.levels.bid;
        this.mid = self.levels.mid;
        var idx = 1;
        self.levels.levels.forEach(function(level) {
          self.initLevels(level, idx);
          idx++;
        });
        this.pageView._updatePageView();
      },
      initLevels: function initLevels(level, idx) {
        var _this = this;
        cc.log("++++++++++open:" + level + "--idx:" + idx + " -:- " + openAllLevel);
        if (idx < 1 || idx > 4) return;
        var pageNode = cc.instantiate(this.levelPage);
        pageNode.active = true;
        this.pageView.addPage(pageNode);
        var pageContent = pageNode.getChildByName("content");
        var total_level = level["total_level"];
        var _loop = function _loop(i) {
          var i_str = i.toString();
          var itemNode = pageContent.getChildByName(i_str);
          if (i > level["total_level"]) itemNode.active = false; else {
            var lid = 25 * (idx - 1) + i;
            itemNode.tag = lid;
            _this.setItem(itemNode, 0, false, lid);
            self = _this;
            SDK().getItem(self.bid + "_" + self.mid + "_" + lid, function(score) {
              var isOpen = false;
              if (lid <= self.lastLid + 1 || score > 0) {
                isOpen = true;
                self.setItem(itemNode, score, isOpen, lid);
              } else openAllLevel && self.setItem(itemNode, score, true, lid);
              score > 0 && (self.lastLid = lid);
            }, itemNode, lid);
          }
        };
        for (var i = 1; i <= 25; i++) {
          var self;
          _loop(i);
        }
      },
      setItem: function setItem(node, score, isOpen, lid) {
        cc.find("unlock", node).active = isOpen;
        cc.find("lock", node).active = !isOpen;
        cc.find("unlock/text", node).getComponent(cc.Label).string = lid;
        cc.find("lock/text", node).getComponent(cc.Label).string = lid;
        node.active = true;
        isOpen && (this.lastOpenLid = lid);
      },
      updateCurrpage: function updateCurrpage() {
        var pageAt = Math.ceil(this.lastOpenLid / 30) - 1;
        pageAt = pageAt >= 0 ? pageAt : 0;
        this.pageView.scrollToPage(pageAt, false);
      },
      hideAllItem: function hideAllItem() {
        this.pageView.removeAllPages();
      },
      onBackBtnClicked: function onBackBtnClicked() {
        this.hideAllItem();
        this.gameApplication.openMainView();
        this.gameApplication.soundManager.playSound("btn_click");
      }
    });
    cc._RF.pop();
  }, {} ],
  LoadLanguage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34293WOrRBK/o/Y7g1Pej5+", "LoadLanguage");
    "use strict";
    var _SDKManager = require("../SDK/SDKManager");
    var _SDKManager2 = _interopRequireDefault(_SDKManager);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        cc.director.loadScene("main");
      }
    });
    cc._RF.pop();
  }, {
    "../SDK/SDKManager": "SDKManager"
  } ],
  LoadingView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "961c4S3IrNHB4M+zHyOMk6f", "LoadingView");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        gameApplication: {
          default: null,
          type: Object
        }
      },
      onLoad: function onLoad() {
        this.gameApplication = cc.find("GameApplication").getComponent("GameApplication");
      },
      start: function start() {
        "undefined" !== typeof bid && "undefined" !== typeof mid && "undefined" !== typeof lid && this.gameApplication.openLevelView(bid, mid);
      },
      onPlayBtnClicked: function onPlayBtnClicked() {
        cc.log("onPlayBtnClicked");
        this.gameApplication.openMainView();
        this.gameApplication.soundManager.playSound("btn_click");
      }
    });
    cc._RF.pop();
  }, {} ],
  LocalizedLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
    "use strict";
    var i18n = require("LanguageData");
    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function later() {
          timeout = null;
          immediate || func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        callNow && func.apply(context, args);
      };
    }
    cc.Class({
      extends: cc.Component,
      editor: {
        executeInEditMode: true,
        menu: "i18n/LocalizedLabel"
      },
      properties: {
        dataID: {
          get: function get() {
            return this._dataID;
          },
          set: function set(val) {
            if (this._dataID !== val) {
              this._dataID = val;
              false;
              this.updateLabel();
            }
          }
        },
        _dataID: ""
      },
      onLoad: function onLoad() {
        false;
        i18n.inst || i18n.init();
        this.fetchRender();
      },
      fetchRender: function fetchRender() {
        var label = this.getComponent(cc.Label);
        if (label) {
          this.label = label;
          this.updateLabel();
          return;
        }
      },
      updateLabel: function updateLabel() {
        if (!this.label) {
          cc.error("Failed to update localized label, label component is invalid!");
          return;
        }
        var localizedString = i18n.t(this.dataID);
        localizedString && (this.label.string = i18n.t(this.dataID));
      }
    });
    cc._RF.pop();
  }, {
    LanguageData: "LanguageData"
  } ],
  LocalizedSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
    "use strict";
    var SpriteFrameSet = require("SpriteFrameSet");
    cc.Class({
      extends: cc.Component,
      editor: {
        executeInEditMode: true,
        inspector: "packages://i18n/inspector/localized-sprite.js",
        menu: "i18n/LocalizedSprite"
      },
      properties: {
        spriteFrameSet: {
          default: [],
          type: SpriteFrameSet
        }
      },
      onLoad: function onLoad() {
        this.fetchRender();
      },
      fetchRender: function fetchRender() {
        var sprite = this.getComponent(cc.Sprite);
        if (sprite) {
          this.sprite = sprite;
          this.updateSprite(window.i18n.curLang);
          return;
        }
      },
      getSpriteFrameByLang: function getSpriteFrameByLang(lang) {
        for (var i = 0; i < this.spriteFrameSet.length; ++i) if (this.spriteFrameSet[i].language === lang) return this.spriteFrameSet[i].spriteFrame;
      },
      updateSprite: function updateSprite(language) {
        if (!this.sprite) {
          cc.error("Failed to update localized sprite, sprite component is invalid!");
          return;
        }
        var spriteFrame = this.getSpriteFrameByLang(language);
        !spriteFrame && this.spriteFrameSet[0] && (spriteFrame = this.spriteFrameSet[0].spriteFrame);
        this.sprite.spriteFrame = spriteFrame;
      }
    });
    cc._RF.pop();
  }, {
    SpriteFrameSet: "SpriteFrameSet"
  } ],
  LoginInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a77d4BjL7FJJb29ZsWhFkjh", "LoginInterface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var LoginInterface = function() {
      function LoginInterface() {
        _classCallCheck(this, LoginInterface);
      }
      _createClass(LoginInterface, [ {
        key: "logout",
        value: function logout() {}
      }, {
        key: "login",
        value: function login() {}
      } ]);
      return LoginInterface;
    }();
    exports.default = LoginInterface;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  MainView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a326YqAwhD+IfA3lH1oKVk", "MainView");
    "use strict";
    var _vm = require("vm");
    var stageColor = [ cc.color(248, 181, 81, 255), cc.color(174, 93, 161, 255), cc.color(50, 177, 108, 255), cc.color(54, 46, 43, 255), cc.color(0, 0, 0, 255), cc.color(0, 160, 233, 255) ];
    var gray = cc.color(229, 229, 229, 255);
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
          visible: false
        },
        minIdx: {
          default: 0,
          type: cc.Integer,
          visible: false
        },
        maxIdx: {
          default: 0,
          type: cc.Integer,
          visible: false
        },
        uiAtlas: {
          default: null,
          type: cc.SpriteAtlas
        },
        reTime: {
          default: 0,
          type: cc.Float,
          visible: false
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
      onLoad: function onLoad() {
        this.reTime = 300;
        SDK().getItem("reHeart", function(count) {
          this.reviveNum.string = count;
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
      scorllToBottom: function scorllToBottom(event) {
        this.minIdx > 0 && this.initStage(this.minIdx - 10);
      },
      scorllToTop: function scorllToTop(event) {
        this.maxIdx < 540 && this.initStage(this.maxIdx + 10);
      },
      init: function init() {
        null == this.missions || Object.keys(this.missions).length <= 0 ? this.gameApplication.getMissions(function(results) {
          this.missions = results;
          this.initContents();
        }.bind(this)) : this.initContents();
        SDK().getItem("all", function(score) {
          this.starts.getComponent(cc.Label).string = score.toString();
        }.bind(this));
      },
      onEnable: function onEnable() {
        null != this.missions && Object.keys(this.missions).length > 0 && this.initContents();
        this.refreashVal();
      },
      refreashVal: function refreashVal() {
        if (null == this.starts) return;
        SDK().getItem("all", function(score) {
          this.starts.getComponent(cc.Label).string = score.toString();
        }.bind(this));
        SDK().getItem("hearts", function(heart) {
          this.hearts.getComponent(cc.Label).string = heart.toString();
        }.bind(this));
        SDK().getItem("coins", function(coin) {
          this.coins.getComponent(cc.Label).string = coin.toString();
        }.bind(this));
      },
      initContents: function initContents() {
        this.content.active = false;
        if (null != window.lastPlay) {
          this.initStage(window.lastPlay);
          this.content.active = true;
        } else SDK().getItem("curIdx", function(val) {
          null == val && (val = 0);
          window.curIdx = val;
          this.initMissionItem(val);
          this.content.active = true;
        }.bind(this));
      },
      initMissionItem: function initMissionItem(val) {
        var initMission;
        val >= 10 && this.initStage(val - 10);
        this.initStage(val);
        val < 540 && this.initStage(val + 10);
        this.scheduleOnce(function() {
          this.menuClick(null, "goCur");
        }.bind(this), 2);
      },
      initStage: function initStage(val) {
        var curMission = this.judgeType(val);
        var mission = this.missions[curMission.type];
        var bigStage = curMission.bigStage;
        var cannonNode = this.missionNodes[bigStage];
        null == cannonNode && (cannonNode = cc.instantiate(this.stageItem));
        cannonNode.parent = this.content;
        cannonNode.name = "" + bigStage;
        SDK().getItem("lock_" + bigStage, function(lockCount) {
          var islock = false;
          lockCount > 0 && (islock = false);
          0 == bigStage && (islock = false);
          for (var i = 0; i < 10; i += 1) {
            var item = cc.find("Bg/Stage" + i, cannonNode);
            var val = i + bigStage;
            var mlInfo = this.judgeML(curMission, i);
            if (mlInfo.lid > mission.stars) item.active = false; else {
              item.active = true;
              var small = cc.find("Small", item).getComponent(cc.Sprite);
              var num = cc.find("Num", small.node).getComponent(cc.Label);
              var curPoint = cc.find("CurPoint", small.node);
              var lock = cc.find("Lock", small.node);
              if (val % 10 == 0) {
                num.string = "";
                0 == val && (num.string = "");
              } else num.string = val;
              if (val == window.curIdx) {
                curPoint.active = true;
                curPoint.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 20)), cc.moveBy(.5, cc.v2(0, -20)))));
                var mid = mlInfo.mid;
                var lid = mlInfo.lid;
                if (null != mid && mid > 0 && null != lid && lid > 0) {
                  var arr = [];
                  lid > 1 && arr.push(lid - 1);
                  arr.push(lid);
                  lid < 100 && arr.push(lid + 1);
                  arr.forEach(function(tmp_lid) {
                    var tmp_path = "conf/level_detail/b_1/" + mid + "/" + tmp_lid;
                    window.gameApplication.getConf(tmp_path, null);
                  });
                }
              } else {
                curPoint.stopAllActions();
                curPoint.active = false;
              }
              if (val == bigStage) {
                small.spriteFrame = this.uiAtlas.getSpriteFrame(curMission.type + "Big");
                small.node.color = cc.color(255, 255, 255, 255);
              } else small.node.color = gray;
              if (islock) {
                lock.active = true;
                item.off(cc.Node.EventType.TOUCH_END);
                if (val % 10 == 0) {
                  lock.active = false;
                  var info = {};
                  info.mid = mlInfo.mid;
                  info.lid = mlInfo.lid;
                  info.bigStage = curMission.bigStage;
                  info.idx = i;
                  this.initStageClick(info, item, islock);
                }
              } else {
                lock.active = false;
                var info = {};
                info.mid = mlInfo.mid;
                info.lid = mlInfo.lid;
                info.bigStage = curMission.bigStage;
                info.idx = i;
                val <= window.curIdx || true, this.initStageClick(info, item, islock);
                this.checkstagePass(mlInfo, val, small, curMission);
              }
            }
          }
          cannonNode.active = true;
          this.missionNodes[bigStage] = cannonNode;
          (bigStage > this.maxIdx || null == this.maxIdx) && (this.maxIdx = bigStage);
          if (bigStage < this.minIdx || null == this.minIdx) {
            this.minIdx = bigStage;
            cannonNode.setSiblingIndex(0);
          }
        }.bind(this));
      },
      checkstagePass: function checkstagePass(mlInfo, val, small, curMission) {
        SDK().getItem("1_" + mlInfo.mid + "_" + mlInfo.lid, function(star) {
          star > 0 && val % 10 != 0 && (small.node.color = stageColor[curMission.type]);
        }.bind(this));
      },
      initStageClick: function initStageClick(stageInfo, item, islock) {
        var goGame = cc.find("GoGame", this.node);
        item.off(cc.Node.EventType.TOUCH_END);
        item.on(cc.Node.EventType.TOUCH_END, function(event) {
          null != goGame && (goGame.active = true);
          this.gameApplication.soundManager.playSound("btn_click");
          var idx = event.target.name.substr(5, 6);
          idx % 10 == 0 && 0 != idx && islock ? this.gameApplication.showSharaView(function(isComplited) {
            if (isComplited) {
              var param = {};
              param["lock_" + stageInfo.bigStage] = 1;
              SDK().setItem(param, function() {
                this.initStage(stageInfo.bigStage);
              }.bind(this));
            }
            null != goGame && (goGame.active = false);
          }.bind(this)) : SDK().getItem("hearts", function(heart) {
            if (heart > 0) {
              heart -= 1;
              SDK().setItem({
                hearts: heart
              });
              null != this.hearts && (this.hearts.getComponent(cc.Label).string = heart);
              window.gameApplication.flyReward(1, "heartSprite", item, this.hearts, function() {
                this.goGame(stageInfo, item, islock);
              }.bind(this));
            } else window.gameApplication.showHeartView(function(isComplited) {
              if (isComplited) {
                heart = 4;
                null != this.hearts && (this.hearts.getComponent(cc.Label).string = heart);
                SDK().setItem({
                  hearts: heart
                });
                window.gameApplication.flyReward(1, "heartSprite", item, this.hearts, function() {
                  this.goGame(stageInfo, item, islock);
                }.bind(this));
              } else null != goGame && (goGame.active = false);
            }.bind(this), false);
          }.bind(this));
        }, this);
      },
      goGame: function goGame(stageInfo, item, islock) {
        window.bid = 1;
        window.mid = stageInfo.mid;
        window.lid = stageInfo.lid;
        this.gameApplication.openGameView();
      },
      judgeType: function judgeType(stage) {
        var count = 0;
        var disVal = 60;
        var isFix = false;
        if (stage >= 300) {
          stage -= 300;
          isFix = true;
          disVal = 50;
        }
        while (stage >= disVal) {
          stage -= disVal;
          count += 1;
        }
        stage = Math.floor(stage / 10);
        var param = {};
        param.type = stage;
        param.count = count;
        param.bigStage = 10 * stage + count * disVal;
        isFix && (param.bigStage = param.bigStage + 300);
        return param;
      },
      judgeML: function judgeML(curMission, i) {
        var info = {};
        info.mid = curMission.type + 1;
        var fixCount = 0;
        curMission.bigStage >= 300 && (fixCount = 5);
        info.lid = 1 + i + 10 * (fixCount + curMission.count);
        return info;
      },
      hideAllItem: function hideAllItem() {
        this.content.childrenCount > 0 && this.content.children.forEach(function(n) {
          n.active = false;
          n.destroy();
        });
      },
      menuClick: function menuClick(event, type) {
        window.gameApplication.soundManager.playSound("btn_click");
        if ("addHeart" == type) window.gameApplication.showHeartView(function(isComplited) {
          isComplited && SDK().getItem("hearts", function(heart) {
            heart += 5;
            window.gameApplication.flyReward(5, "heartSprite", window.mainScirpt.hearts, null);
            null != this.hearts && (this.hearts.getComponent(cc.Label).string = heart);
            SDK().setItem({
              hearts: heart
            });
          }.bind(this), false);
        }.bind(this), false); else if ("addCoin" == type) window.gameApplication.showCoinView(function(isCompleted) {
          isCompleted && SDK().getItem("coins", function(coin) {
            coin += 100;
            window.gameApplication.flyReward(10, "coin", window.mainScirpt.coins, null);
            null != this.coins && (this.coins.getComponent(cc.Label).string = coin);
            SDK().setItem({
              coins: coin
            });
          }.bind(this), false);
        }.bind(this), false); else if ("goCur" == type) {
          var curMission = this.judgeType(window.curIdx);
          var bigStage = curMission.bigStage;
          var cannonNode = this.missionNodes[bigStage];
          if (null == cannonNode) return;
          var height = 995;
          var fix = window.curIdx - curMission.bigStage;
          height = height * (5 - fix) / 10;
          var maxScrollOffset = this.scrollView.getMaxScrollOffset();
          this.scrollView.scrollToOffset(cc.v2(0, maxScrollOffset.y - cannonNode.y + height), .5);
        } else if ("reHeart" == type) {
          if (0 == parseInt(this.reviveNum.string)) return;
          this.reviveNum.string = 0;
          SDK().getItem("reHeart", function(count) {
            SDK().setItem({
              reHeart: 0
            }, function() {
              SDK().getItem("hearts", function(Heart) {
                Heart = parseInt(Heart);
                Heart += count;
                Math.abs(this.node.y - 0) < 10 && window.gameApplication.flyReward(count, "heartSprite", window.mainScirpt.hearts, this.reviveBtn.node, function() {
                  null != window.mainScirpt.hearts && (window.mainScirpt.hearts.getComponent(cc.Label).string = Heart.toString());
                }.bind(this));
                SDK().setItem({
                  hearts: Heart
                }, null);
              }.bind(this));
            }.bind(this));
          }.bind(this));
        }
      },
      reviveHeartCount: function reviveHeartCount() {
        if (this.reTime <= 0) {
          this.reTime = 300;
          SDK().getItem("reHeart", function(count) {
            count += 1;
            this.reviveNum.string = count;
            SDK().setItem({
              reHeart: count
            });
          }.bind(this));
        } else {
          var temp = this.reTime;
          var tempMin = temp / 60;
          var min = temp / 60 < 10 ? "0" + Math.floor(temp / 60) : "" + Math.floor(temp / 60);
          var sec = temp % 60 < 10 ? "0" + Math.floor(temp % 60) : "" + Math.floor(temp % 60);
          if (temp <= 0) {
            min = "00";
            sec = "00";
          }
          this.reviveTime.string = min + ":" + sec;
        }
        this.scheduleOnce(function() {
          this.reviveHeartCount();
        }.bind(this), 1);
      },
      update: function update(dt) {
        this.reTime = this.reTime - dt;
      }
    });
    cc._RF.pop();
  }, {
    vm: 7
  } ],
  MusicManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6c044dN/JPs7BAJhkfThIW", "MusicManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseRewardAd = require("../base/BaseRewardAd");
    var _GlobalEvent = require("../event/GlobalEvent");
    var _GlobalEvent2 = _interopRequireDefault(_GlobalEvent);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var MusicManagerName = "MusicManagerNamexxx";
    var MusicManager = function() {
      function MusicManager() {
        _classCallCheck(this, MusicManager);
        this.sourcePool = {};
        this.musicFlag = 1;
        this.musicFlag = cc.sys.localStorage.getItem(MusicManagerName);
        this.musicFlag = this.musicFlag || 1;
        cc.log("MusicManager constructor ", this.musicFlag);
        _GlobalEvent2.default.instance().addEventListener(_GlobalEvent2.default.EVENT_HIDE, this.eventHide, this);
        _GlobalEvent2.default.instance().addEventListener(_GlobalEvent2.default.EVENT_SHOW, this.eventShow, this);
        _GlobalEvent2.default.instance().addEventListener(_GlobalEvent2.default.CHANGE_AD_STATE, this.changeAdState, this);
      }
      _createClass(MusicManager, [ {
        key: "changeAdState",
        value: function changeAdState(state) {
          cc.log(" changeAdState ", state);
          state == _BaseRewardAd.RewardADState.close ? this.eventShow() : this.eventHide();
        }
      }, {
        key: "eventHide",
        value: function eventHide() {
          cc.log(" eventHide this.getMusicFlag()", this.getMusicFlag());
          this.getMusicFlag() && this.openName && this.pause();
        }
      }, {
        key: "eventShow",
        value: function eventShow() {
          var state = _BaseRewardAd.RewardADState.close;
          cc.log(" eventShow this.getMusicFlag()", this.getMusicFlag());
          this.getMusicFlag() && state == _BaseRewardAd.RewardADState.close ? this.openName && this.play(this.openName) : cc.audioEngine.stopMusic();
        }
      }, {
        key: "musicOpen",
        value: function musicOpen() {
          this.openName ? this.play(this.openName) : this.resume();
        }
      }, {
        key: "musicClose",
        value: function musicClose() {
          this.pause();
        }
      }, {
        key: "getMusicFlag",
        value: function getMusicFlag() {
          return 1 == this.musicFlag;
        }
      }, {
        key: "open",
        value: function open(name) {
          this.musicFlag = 1;
          this.setItem(this.musicFlag);
          this.play(name);
        }
      }, {
        key: "setItem",
        value: function setItem(value) {
          cc.sys.localStorage.setItem(MusicManagerName, value);
        }
      }, {
        key: "close",
        value: function close() {
          this.setItem(2);
          if (this.tempName) {
            this.stop(this.tempName);
            this.tempName = null;
          }
          this.musicFlag = cc.sys.localStorage.getItem(MusicManagerName);
          cc.log(" close musicFlag is ", this.musicFlag);
        }
      }, {
        key: "play",
        value: function play(name) {
          var _this = this;
          var isLoop = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          this.openName = name;
          if (this.tempName) {
            this.stop(this.tempName);
            this.tempName = null;
          }
          this.tempName = name;
          cc.loader.loadRes(name, cc.AudioClip, function(err, res) {
            if (err) {
              cc.log("AudioSource err ", err);
              return;
            }
            var audioId = cc.audioEngine.playMusic(res, isLoop);
            _this.sourcePool[name] = audioId;
            isLoop || cc.audioEngine.setFinishCallback(audioId, _this.stop.bind(_this, name));
          });
        }
      }, {
        key: "pause",
        value: function pause() {
          if (!this.isPlaying()) return;
          cc.audioEngine.pauseMusic();
        }
      }, {
        key: "resume",
        value: function resume() {
          if (this.isPlaying()) {
            cc.log(" is already playing");
            return;
          }
          cc.audioEngine.resumeMusic();
        }
      }, {
        key: "stop",
        value: function stop(name) {
          if (!this.isPlaying()) return;
          cc.audioEngine.stopMusic();
          if (name) {
            var audioId = this.sourcePool[name];
            audioId && (this.sourcePool[name] = null);
          }
        }
      }, {
        key: "setVolume",
        value: function setVolume(count) {
          cc.audioEngine.setMusicVolume(count);
        }
      }, {
        key: "isPlaying",
        value: function isPlaying() {
          return cc.audioEngine.isMusicPlaying();
        }
      } ], [ {
        key: "instance",
        value: function instance() {
          this.ins || (this.ins = new MusicManager());
          return this.ins;
        }
      } ]);
      return MusicManager;
    }();
    exports.default = MusicManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseRewardAd": "BaseRewardAd",
    "../event/GlobalEvent": "GlobalEvent"
  } ],
  NativeAdItemModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb3c2ZoSQpAF53/xh44NMKB", "NativeAdItemModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var NativeAdItemModel = function() {
      function NativeAdItemModel() {
        _classCallCheck(this, NativeAdItemModel);
      }
      _createClass(NativeAdItemModel, [ {
        key: "initWithOppo",
        value: function initWithOppo(res) {
          this.adId = res.adId;
          this.title = res.title;
          this.desc = res.desc;
          this.iconUrlList = res.iconUrlList;
          this.imgUrlList = res.imgUrlList;
          this.logoUrl = res.logoUrl;
          this.clickBtnTxt = res.clickBtnTxt;
          this.creativeType = res.creativeType;
          this.interactionType = res.interactionType;
        }
      }, {
        key: "getID",
        value: function getID() {
          return this.adId;
        }
      }, {
        key: "getTitle",
        value: function getTitle() {
          return this.title;
        }
      }, {
        key: "getDesc",
        value: function getDesc() {
          return this.desc;
        }
      }, {
        key: "getIconList",
        value: function getIconList() {
          return this.iconUrlList;
        }
      }, {
        key: "getImgList",
        value: function getImgList() {
          return this.imgUrlList;
        }
      }, {
        key: "getButtonText",
        value: function getButtonText() {
          return this.clickBtnTxt;
        }
      } ]);
      return NativeAdItemModel;
    }();
    exports.default = NativeAdItemModel;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  NormalAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43480EzecBHBogcLHmzK8wB", "NormalAnimation");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        loop: true,
        isplay: true,
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
          visible: false
        },
        delta: {
          default: 0,
          type: cc.Integer,
          visible: false
        },
        rotationForever: false
      },
      onLoad: function onLoad() {
        this.rotationForever && this.rotation();
      },
      rotation: function rotation() {
        var seq = cc.repeatForever(cc.rotateBy(.3, 90));
        this.rotationSeq = this.node.runAction(seq);
      },
      play: function play() {
        this.scheduleOnce(function() {
          null != this.rotationSeq && this.node.stopAction(this.rotationSeq);
        }, .1);
        this.index = 0;
        this.delta = 0;
        this.isplay = true;
        this.node.opacity = 255;
        this.sprite.node.active = true;
      },
      update: function update(dt) {
        if (this.isplay) {
          this.delta += dt;
          if (this.fps > 0 && this.sprites.length > 0) {
            var rate = 1 / this.fps;
            if (rate < this.delta) {
              this.delta = rate > 0 ? this.delta - rate : 0;
              this.sprite.spriteFrame = this.sprites[this.index];
              this.index = this.index + 1 >= this.sprites.length ? 0 : this.index + 1;
              if (this.index <= 0 && false == this.loop) {
                this.rotation();
                this.isplay = false;
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
  OppoBannerAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97dd87vjaVAlpyvWUqF4Gue", "OppoBannerAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseBanner2 = require("../base/BaseBanner");
    var _BaseBanner3 = _interopRequireDefault(_BaseBanner2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var OppoBannerAd = function(_BaseBanner) {
      _inherits(OppoBannerAd, _BaseBanner);
      function OppoBannerAd() {
        _classCallCheck(this, OppoBannerAd);
        return _possibleConstructorReturn(this, (OppoBannerAd.__proto__ || Object.getPrototypeOf(OppoBannerAd)).apply(this, arguments));
      }
      _createClass(OppoBannerAd, [ {
        key: "create",
        value: function create(callback) {
          cc.log(" create BaseBanner ad laod this.adUnitID", this.adUnitID);
          this.destroyBanner();
          this.bannerAd = qg.createBannerAd({
            posId: this.adUnitID,
            style: {}
          });
          var that = this;
          function onLoad() {
            that.bannerAd.offShow(onLoad);
            callback(null);
            console.log("banner  ad load success");
          }
          this.bannerAd.onShow(onLoad);
          function onError(err) {
            callback(err);
            console.log("banner ad load fail  ", err);
            that.bannerAd.offError(onError);
          }
          this.bannerAd.onError(onError);
          function onClose() {
            that.bannerAd.offHide(onClose);
          }
          this.bannerAd.onHide(onClose);
        }
      }, {
        key: "show",
        value: function show() {
          cc.log("show  OppoBanner");
          this.bannerAd.show();
        }
      }, {
        key: "hide",
        value: function hide() {
          this.bannerAd.hide();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.bannerAd.destroy();
        }
      }, {
        key: "getHeight",
        value: function getHeight() {
          return 120;
        }
      } ]);
      return OppoBannerAd;
    }(_BaseBanner3.default);
    exports.default = OppoBannerAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseBanner": "BaseBanner"
  } ],
  OppoChannel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c6b2eyQGRERZHiwHc7bTF6", "OppoChannel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseChannel2 = require("../base/BaseChannel");
    var _BaseChannel3 = _interopRequireDefault(_BaseChannel2);
    var _OppoBannerAd = require("./OppoBannerAd");
    var _OppoBannerAd2 = _interopRequireDefault(_OppoBannerAd);
    var _OppoInsertAd = require("./OppoInsertAd");
    var _OppoInsertAd2 = _interopRequireDefault(_OppoInsertAd);
    var _OppoRewardAd = require("./OppoRewardAd");
    var _OppoRewardAd2 = _interopRequireDefault(_OppoRewardAd);
    var _DevLogin = require("../dev/DevLogin");
    var _DevLogin2 = _interopRequireDefault(_DevLogin);
    var _OppoNativeAd = require("./OppoNativeAd");
    var _OppoNativeAd2 = _interopRequireDefault(_OppoNativeAd);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var OppoChannel = function(_BaseChannel) {
      _inherits(OppoChannel, _BaseChannel);
      function OppoChannel(id, adIds) {
        _classCallCheck(this, OppoChannel);
        var _this = _possibleConstructorReturn(this, (OppoChannel.__proto__ || Object.getPrototypeOf(OppoChannel)).call(this, id));
        _this.appId = "";
        _this.adIds = null;
        _this.adIds = adIds;
        _this.appId = adIds.appId;
        _this.loginMgr = new _DevLogin2.default();
        return _this;
      }
      _createClass(OppoChannel, [ {
        key: "isVideoLvUp",
        value: function isVideoLvUp() {
          return true;
        }
      }, {
        key: "sevenButtonNum",
        value: function sevenButtonNum() {
          return 1;
        }
      }, {
        key: "vibrateShort",
        value: function vibrateShort() {
          qg.vibrateShort();
        }
      }, {
        key: "activeSkillLabel",
        value: function activeSkillLabel() {
          return "\u89c2\u770b\u89c6\u9891";
        }
      }, {
        key: "showShare",
        value: function showShare(title, func) {
          this.openRewardAd(function(result) {
            result && func();
          });
        }
      }, {
        key: "init",
        value: function init() {
          var that = this;
          qg.initAdService({
            appId: this.appId,
            isDebug: true,
            success: function success(res) {},
            fail: function fail(res) {
              console.log("initAdService fail:" + res.code + res.msg);
            },
            complete: function complete(res) {
              console.log("initAdService complete");
            }
          });
        }
      } ]);
      return OppoChannel;
    }(_BaseChannel3.default);
    exports.default = OppoChannel;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseChannel": "BaseChannel",
    "../dev/DevLogin": "DevLogin",
    "./OppoBannerAd": "OppoBannerAd",
    "./OppoInsertAd": "OppoInsertAd",
    "./OppoNativeAd": "OppoNativeAd",
    "./OppoRewardAd": "OppoRewardAd"
  } ],
  OppoInsertAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0206dD0yDtDv7joApv196ZJ", "OppoInsertAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _InterstitialAd2 = require("../base/InterstitialAd");
    var _InterstitialAd3 = _interopRequireDefault(_InterstitialAd2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var OppoInsertAd = function(_InterstitialAd) {
      _inherits(OppoInsertAd, _InterstitialAd);
      function OppoInsertAd(id) {
        _classCallCheck(this, OppoInsertAd);
        var _this = _possibleConstructorReturn(this, (OppoInsertAd.__proto__ || Object.getPrototypeOf(OppoInsertAd)).call(this));
        _this.interstitialAd = null;
        _this.finish = false;
        _this.load(id);
        return _this;
      }
      _createClass(OppoInsertAd, [ {
        key: "show",
        value: function show(func) {
          cc.log(" show insert ad ");
          var that = this;
          this.interstitialAd && this.interstitialAd.load();
        }
      }, {
        key: "isLoad",
        value: function isLoad() {
          return this.finish;
        }
      }, {
        key: "load",
        value: function load(id) {
          var _this2 = this;
          this.interstitialAd = qg.createInsertAd({
            posId: id
          });
          cc.log(" insert ad laod ", id);
          this.interstitialAd.onLoad(function() {
            console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
            _this2.finish = true;
            _this2.interstitialAd.show();
          });
          this.interstitialAd.onError(function(err) {
            console.log("VivoInsertAd load fail ", err);
            _this2.finish = false;
          });
        }
      } ]);
      return OppoInsertAd;
    }(_InterstitialAd3.default);
    exports.default = OppoInsertAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/InterstitialAd": "InterstitialAd"
  } ],
  OppoNativeAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24192tmi4xMT5hnYFPPCZD7", "OppoNativeAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseNativeAd2 = require("../base/BaseNativeAd");
    var _BaseNativeAd3 = _interopRequireDefault(_BaseNativeAd2);
    var _NativeAdItemModel = require("../base/NativeAdItemModel");
    var _NativeAdItemModel2 = _interopRequireDefault(_NativeAdItemModel);
    var _ChannelID = require("../ChannelID");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var OppoNativeAd = function(_BaseNativeAd) {
      _inherits(OppoNativeAd, _BaseNativeAd);
      function OppoNativeAd() {
        _classCallCheck(this, OppoNativeAd);
        return _possibleConstructorReturn(this, (OppoNativeAd.__proto__ || Object.getPrototypeOf(OppoNativeAd)).apply(this, arguments));
      }
      _createClass(OppoNativeAd, [ {
        key: "create",
        value: function create(callback) {
          console.log("OppoNativeAd create 1111");
          this.destroyNative();
          console.log("OppoNativeAd create 2222", this.adUnitID);
          this.nativeAd = qg.createNativeAd({
            posId: this.adUnitID
          });
          console.log("OppoNativeAd create 33333", this.nativeAd);
          var that = this;
          function onLoad(res) {
            console.log("OppoNativeAd  ad load success", res);
            that.nativeAd.offLoad(onLoad);
            callback(null);
            if (res.adList) {
              for (var index = 0; index < res.adList.length; index++) {
                var element = res.adList[index];
                var adItem = new _NativeAdItemModel2.default();
                adItem.initWithOppo(element);
                that.adItems.push(adItem);
              }
              console.log("OppoNativeAd onLoad ================  ", res.adList);
              that.publish(_ChannelID.SDKEvent.NATIVE_AD_LOAD_FINISH, that.adItems);
            }
          }
          this.nativeAd.onLoad(onLoad);
          function onError(err) {
            console.log("OppoNativeAd ad load fail  ", err);
            callback(err);
            that.nativeAd.offError(onError);
          }
          this.nativeAd.onError(onError);
          this.nativeAd.load();
        }
      }, {
        key: "reportAdClick",
        value: function reportAdClick(adId) {
          if (!this.nativeAd) return;
          this.nativeAd.reportAdClick({
            adId: adId
          });
        }
      }, {
        key: "reportAdShow",
        value: function reportAdShow(adId) {
          if (!this.nativeAd) return;
          this.nativeAd.reportAdShow({
            adId: adId
          });
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.nativeAd.destroy();
        }
      } ]);
      return OppoNativeAd;
    }(_BaseNativeAd3.default);
    exports.default = OppoNativeAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../ChannelID": "ChannelID",
    "../base/BaseNativeAd": "BaseNativeAd",
    "../base/NativeAdItemModel": "NativeAdItemModel"
  } ],
  OppoRewardAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d49asfWF9E+o7VY64cJFIs", "OppoRewardAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseRewardAd2 = require("../base/BaseRewardAd");
    var _BaseRewardAd3 = _interopRequireDefault(_BaseRewardAd2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var OppoRewardAd = function(_BaseRewardAd) {
      _inherits(OppoRewardAd, _BaseRewardAd);
      function OppoRewardAd() {
        _classCallCheck(this, OppoRewardAd);
        return _possibleConstructorReturn(this, (OppoRewardAd.__proto__ || Object.getPrototypeOf(OppoRewardAd)).apply(this, arguments));
      }
      _createClass(OppoRewardAd, [ {
        key: "createVideoAd",
        value: function createVideoAd(id) {
          var _this2 = this;
          this.rewardedVideoAd = qg.createRewardedVideoAd({
            posId: id
          });
          this.rewardedVideoAd.onLoad(function() {
            console.log("\u6fc0\u52b1\u89c6\u9891\u5df2\u52a0\u8f7d");
          });
          this.rewardedVideoAd.onError(function(err) {
            console.log("\u6fc0\u52b1\u89c6\u9891\u5f02\u5e38", err);
            _this2.rewardCallback && _this2.rewardCallback(false);
          });
          this.rewardedVideoAd.onClose(function(res) {
            _this2.state = _BaseRewardAd2.RewardADState.close;
            if (res && res.isEnded) {
              console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1");
              _this2.rewardCallback(true);
            } else {
              console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1");
              _this2.rewardCallback(false);
            }
          });
        }
      } ]);
      return OppoRewardAd;
    }(_BaseRewardAd3.default);
    exports.default = OppoRewardAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseRewardAd": "BaseRewardAd"
  } ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e32198K/PFAYI3D//JNhj6H", "Player");
    "use strict";
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
      setUserInfo: function setUserInfo(userInfo) {
        this.age = userInfo.age;
        this.avatar = userInfo.avatar;
        this.group_id = userInfo.group_id;
        this.is_rebot = userInfo.is_rebot;
        this.pname = this.substrName(userInfo.name, 6);
        this.score = userInfo.score;
        this.sex = userInfo.sex;
        this.user_id = userInfo.user_id;
      },
      substrName: function substrName(str, n) {
        if (str.replace(/[\u4e00-\u9fa5]/g, "**").length <= n) return str;
        var len = 0;
        var tmpStr = "";
        for (var i = 0; i < str.length; i++) {
          /[\u4e00-\u9fa5]/.test(str[i]) ? len += 2 : len += 1;
          if (len > n) break;
          tmpStr += str[i];
        }
        return tmpStr + " ...";
      }
    });
    cc._RF.pop();
  }, {} ],
  RankView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04fa0UaF89AfJ9fdL6pdcUD", "RankView");
    "use strict";
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
          visible: false
        },
        worldPlayer: {
          default: [],
          visible: false
        },
        friendPlayer: {
          default: [],
          visible: false
        },
        worldUIPlayer: {
          default: [],
          visible: false
        },
        friendUIPlayer: {
          default: [],
          visible: false
        },
        prefab_player: {
          default: null,
          type: cc.Prefab
        }
      },
      onEnable: function onEnable() {
        this.LoadRank();
      },
      menuClick: function menuClick(event, type) {
        window.gameApplication.soundManager.playSound("btn_click");
        "openRank" == type ? window.gameApplication.openRankView(true) : "closeRank" == type && window.gameApplication.openRankView(false);
      },
      LoadRank: function LoadRank() {
        SDK().getFriendsRank(2, 20, 0, function(list) {
          this.GetFriendRank(list);
        }.bind(this));
      },
      GetFriendRank: function GetFriendRank(list) {
        this.friendPlayer = list;
        for (var i = 0; i < this.friendPlayer.length; i += 1) {
          var playerBar;
          var Head;
          var Name;
          var No;
          var Score;
          var playBtn;
          if (i >= this.friendUIPlayer.length) {
            playerBar = cc.instantiate(this.prefab_player);
            Head = playerBar.getChildByName("Head").getComponent(cc.Sprite);
            Name = playerBar.getChildByName("Name").getComponent(cc.Label);
            No = playerBar.getChildByName("No").getComponent(cc.Label);
            Score = playerBar.getChildByName("Score").getChildByName("Num").getComponent(cc.Label);
            playBtn = playerBar.getChildByName("Play");
            this.friendUIPlayer[i] = {};
            this.friendUIPlayer[i].playerBar = playerBar;
            this.friendUIPlayer[i].Head = Head;
            this.friendUIPlayer[i].Name = Name;
            this.friendUIPlayer[i].No = No;
            this.friendUIPlayer[i].Score = Score;
            this.friendUIPlayer[i].playBtn = playBtn;
          } else {
            playerBar = this.friendUIPlayer[i].playerBar;
            Head = this.friendUIPlayer[i].Head;
            Name = this.friendUIPlayer[i].Name;
            No = this.friendUIPlayer[i].No;
            Score = this.friendUIPlayer[i].Score;
            playBtn = this.friendUIPlayer[i].playBtn;
          }
          playerBar.parent = this.friendContent;
          playerBar.active = false;
          this.LoadSprite(this.friendPlayer[i].headUrl, Head, this.headSpriteList[this.friendPlayer[i].id]);
          Name.string = this.friendPlayer[i].name;
          Name.node.active = true;
          No.string = this.friendPlayer[i].No;
          No.node.active = true;
          Score.string = this.friendPlayer[i].score;
          Score.node.active = true;
          this.friendPlayer[i].id == SDK().getSelfInfo().id ? playBtn.active = false : playBtn.active = true;
          playBtn.tag = this.friendPlayer[i].id;
          playBtn.off(cc.Node.EventType.TOUCH_END);
          playBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
            SDK().playWith(event.target.tag, null, function(isCompleted) {
              isCompleted && SDK().getItem("coins", function(coin) {
                coin += 20;
                window.gameApplication.flyReward(2, "coin", window.mainScirpt.coins, function() {
                  this.node.active && window.gameApplication.openGameView(true);
                  null != window.mainScirpt.coins && (window.mainScirpt.coins.getComponent(cc.Label).string = coin);
                }.bind(this));
                SDK().setItem({
                  coins: coin
                });
              }.bind(this), false);
            }.bind(this));
          }.bind(this), this);
        }
        if (this.friendPlayer.length < this.friendUIPlayer.length) for (var i = this.friendPlayer.length; i < this.friendUIPlayer.length; i += 1) this.friendUIPlayer[i].playerBar.active = false;
      },
      GetWorldRank: function GetWorldRank(list) {
        this.worldPlayer = list;
        var isOnRank = false;
        for (var i = 0; i < this.worldPlayer.length; i += 1) this.LoadRankData(i, this.worldPlayer[i]) && (isOnRank = true);
        var listLength = this.worldPlayer.length;
        if (!isOnRank) {
          listLength += 1;
          SDK().getRankScore(2, function(info) {
            this.LoadRankData(listLength - 1, info);
          }.bind(this));
        }
        if (listLength < this.worldUIPlayer.length) for (var i = this.worldPlayer.length; i < this.worldUIPlayer.length; i += 1) this.worldUIPlayer[i].playerBar.active = false;
      },
      LoadRankData: function LoadRankData(i, playerData) {
        var isOnRank = false;
        var playerBar;
        var mainBg;
        var No;
        var Score;
        var Head;
        if (i >= this.worldUIPlayer.length) {
          playerBar = cc.instantiate(this.prefab_player);
          mainBg = playerBar.getComponent(cc.Sprite);
          No = playerBar.getChildByName("No").getComponent(cc.Label);
          Score = playerBar.getChildByName("Score").getChildByName("Num").getComponent(cc.Label);
          Head = playerBar.getChildByName("HeadMask").getChildByName("Head").getComponent(cc.Sprite);
          var Name = playerBar.getChildByName("Name");
          Name.active = false;
          this.worldUIPlayer[i] = {};
          this.worldUIPlayer[i].playerBar = playerBar;
          this.worldUIPlayer[i].mainBg = mainBg;
          this.worldUIPlayer[i].No = No;
          this.worldUIPlayer[i].Score = Score;
          this.worldUIPlayer[i].Head = Head;
        } else {
          playerBar = this.worldUIPlayer[i].playerBar;
          mainBg = this.worldUIPlayer[i].mainBg;
          No = this.worldUIPlayer[i].No;
          Score = this.worldUIPlayer[i].Score;
          Head = this.worldUIPlayer[i].Head;
        }
        playerBar.color = i % 2 == 0 ? cc.color(248, 181, 81, 255) : cc.color(254, 152, 0, 255);
        No.node.active = true;
        Score.node.active = true;
        playerBar.name = playerData.id;
        playerBar.parent = this.worldContent;
        playerData.id == SDK().getSelfInfo().id && (isOnRank = true);
        var playBtn = playerBar.getChildByName("Play");
        playBtn.active = false;
        No.string = playerData.no;
        Score.string = playerData.score;
        this.LoadSprite(playerData.headUrl, Head, this.headSpriteList[playerData.id]);
        return isOnRank;
      },
      LoadSprite: function LoadSprite(url, sprite, saver) {
        if (null == saver) cc.loader.load(url, function(err, texture) {
          saver = new cc.SpriteFrame(texture);
          sprite.spriteFrame = saver;
          sprite.node.parent.active = true;
        }); else {
          sprite.spriteFrame = saver;
          sprite.node.parent.active = true;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Role: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01249Rk7stLqpgK0u1Ta5FD", "Role");
    "use strict";
    var HexCell = require("./HexCell");
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
          visible: false
        },
        axialCoordinate: {
          get: function get() {
            return this._axialCoordinate;
          },
          set: function set(val) {
            this._axialCoordinate = cc.v2(val.x, val.y);
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
      onLoad: function onLoad() {},
      start: function start() {},
      init: function init() {
        this.bg.active = true;
        this.die.active = false;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        null != this.gameView && null != other.node && other.node.opacity > 0 && other.node.active && this.gameView.collisionCallback();
      },
      setDark: function setDark(isDark) {
        this.darkNode.active = isDark;
      },
      setArrow: function setArrow(t, l, d, r) {
        this.topNode.active = t;
        this.bottomNode.active = d;
        this.leftNode.active = l;
        this.rightNode.active = r;
        this.arrowNode.active = true;
      },
      hideArrow: function hideArrow() {
        this.arrowNode.active = false;
      },
      playDie: function playDie(cb) {
        var self = this;
        this.bg.active = true;
        this.die.active = false;
        this.die.setContentSize(cc.size(100, 100));
        this.blinking(this.bg, function() {
          self.bg.active = false;
          self.die.active = true;
          self.blinking(self.die, function() {
            self.die.setContentSize(cc.size(180, 180));
            self.blinking(self.die, function() {
              self.scheduleOnce(function() {
                self.die.runAction(cc.fadeOut(.2));
              }, .1);
            });
          });
        });
      },
      blinking: function blinking(node, cb) {
        var a1 = cc.delayTime(.12);
        var a2 = cc.fadeOut(.01);
        var a3 = cc.delayTime(.1);
        var a4 = cc.fadeIn(.01);
        var b1 = cc.callFunc(function() {
          cb && cb();
        });
        var seq = cc.repeat(cc.sequence(a1, a2, a3, a4), 2);
        node.stopAllActions();
        node.runAction(cc.sequence(seq, b1));
      },
      moveTo: function moveTo() {}
    });
    cc._RF.pop();
  }, {
    "./HexCell": "HexCell"
  } ],
  RotationForever: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb6faggz8ZGIIj857YwdZTb", "RotationForever");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var seq = cc.repeatForever(cc.rotateBy(.3, 90));
        this.node.runAction(seq);
      }
    });
    cc._RF.pop();
  }, {} ],
  SDKInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b086e/Q6KtCPKXgcuhY8vDt", "SDKInit");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  SDKManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f680pj85FKX4OJG7AY87HI", "SDKManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _class, _temp;
    var _ChannelID = require("./ChannelID");
    var _ChannelID2 = _interopRequireDefault(_ChannelID);
    var _OppoChannel = require("./oppo/OppoChannel");
    var _OppoChannel2 = _interopRequireDefault(_OppoChannel);
    var _DevChannel = require("./dev/DevChannel");
    var _DevChannel2 = _interopRequireDefault(_DevChannel);
    var _VivoChannel = require("./vivo/VivoChannel");
    var _VivoChannel2 = _interopRequireDefault(_VivoChannel);
    var _TTChannel = require("./tt/TTChannel");
    var _TTChannel2 = _interopRequireDefault(_TTChannel);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var SDKManager = (_temp = _class = function() {
      function SDKManager() {
        _classCallCheck(this, SDKManager);
      }
      _createClass(SDKManager, null, [ {
        key: "init",
        value: function init(channelID) {
          this.channel = this.builder(channelID);
          console.log("sdk\u521d\u59cb\u5316\u5b8c\u6210" + this.channel);
          this.channel && this.channel.init();
        }
      }, {
        key: "isDev",
        value: function isDev() {
          return this.channel.getID() == _ChannelID2.default.TEST;
        }
      }, {
        key: "isWX",
        value: function isWX() {
          return this.channel.getID() == _ChannelID2.default.WX;
        }
      }, {
        key: "builder",
        value: function builder(id) {
          var channelManager = this.channelMap[id];
          if (!channelManager) {
            cc.log(" channelID " + id);
            var adIds = _ChannelID.AdIDS[parseInt(id)];
            console.log(" adIds ", adIds);
            switch (id) {
             case _ChannelID2.default.OPPO:
              channelManager = new _OppoChannel2.default(id, adIds);
              break;

             case _ChannelID2.default.VIVO:
              channelManager = new _VivoChannel2.default(id, adIds);
              break;

             case _ChannelID2.default.TT:
              channelManager = new _TTChannel2.default(id, adIds);
              break;

             case _ChannelID2.default.DEV:
              channelManager = new _DevChannel2.default(id);
            }
            this.channelMap[id] = channelManager;
          }
          return channelManager;
        }
      }, {
        key: "getChannel",
        value: function getChannel() {
          return this.channel;
        }
      } ]);
      return SDKManager;
    }(), _class.UPDATE_GAME_ICON = "sdk_update_game_icon", _class.START_GAME_ICON = "start_update_game_icon", 
    _class.channelMap = {}, _temp);
    exports.default = SDKManager;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "./ChannelID": "ChannelID",
    "./dev/DevChannel": "DevChannel",
    "./oppo/OppoChannel": "OppoChannel",
    "./tt/TTChannel": "TTChannel",
    "./vivo/VivoChannel": "VivoChannel"
  } ],
  SDKUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d14deOZzBVA6bqNWaGWZ5SG", "SDKUtils");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var utils = {};
    var rootThree = Math.sqrt(3);
    utils.prefixInteger = function(num, length) {
      return (Array(length).join("0") + num).slice(-length);
    };
    utils.offsetToAxial = function(offsetPt) {
      offsetPt.x = offsetPt.x - Math.floor(offsetPt.y / 2);
      return offsetPt;
    };
    utils.axialToScreen = function(axialPoint, sideLength) {
      var tileY = sideLength * axialPoint.y + .5 * sideLength - axialPoint.y * lineWidth;
      var tileX = sideLength * axialPoint.x + .5 * sideLength - axialPoint.x * lineWidth;
      return cc.v2(tileX, tileY);
    };
    utils.screenToAxial = function(screenPoint, sideLength) {
      var axialPoint = cc.v2(0, 0);
      var y = Math.abs(Math.round((screenPoint.y - .5 * sideLength) / sideLength));
      var x = Math.abs(Math.round((screenPoint.x - .5 * sideLength) / sideLength));
      axialPoint.x = Math.floor((screenPoint.x + x * lineWidth) / sideLength);
      axialPoint.y = Math.floor((screenPoint.y + y * lineWidth) / sideLength);
      return axialPoint;
    };
    utils.calculateCubicZ = function(newAxialPoint) {
      return -newAxialPoint.x - newAxialPoint.y;
    };
    utils.axialToOffset = function(axialPt) {
      return axialPt;
    };
    utils.getNeighbors = function(axialPoint) {
      var neighbourPoint = cc.v2(0, 0);
      var neighbors = [];
      neighbourPoint.x = axialPoint.x + 1;
      neighbourPoint.y = axialPoint.y;
      neighbors.push(cc.v2(neighbourPoint.x, neighbourPoint.y));
      neighbourPoint.x = axialPoint.x - 1;
      neighbourPoint.y = axialPoint.y;
      neighbors.push(cc.v2(neighbourPoint.x, neighbourPoint.y));
      neighbourPoint.x = axialPoint.x;
      neighbourPoint.y = axialPoint.y - 1;
      neighbors.push(cc.v2(neighbourPoint.x, neighbourPoint.y));
      neighbourPoint.x = axialPoint.x;
      neighbourPoint.y = axialPoint.y + 1;
      neighbors.push(cc.v2(neighbourPoint.x, neighbourPoint.y));
      return neighbors;
    };
    utils.getNeighborsOBJ = function(axialPoint) {
      var neighbourPoint = cc.v2(0, 0);
      var neighbors = {};
      neighbourPoint.x = axialPoint.x + 1;
      neighbourPoint.y = axialPoint.y;
      neighbors.r = cc.v2(neighbourPoint.x, neighbourPoint.y);
      neighbourPoint.x = axialPoint.x - 1;
      neighbourPoint.y = axialPoint.y;
      neighbors.l = cc.v2(neighbourPoint.x, neighbourPoint.y);
      neighbourPoint.x = axialPoint.x;
      neighbourPoint.y = axialPoint.y - 1;
      neighbors.b = cc.v2(neighbourPoint.x, neighbourPoint.y);
      neighbourPoint.x = axialPoint.x;
      neighbourPoint.y = axialPoint.y + 1;
      neighbors.t = cc.v2(neighbourPoint.x, neighbourPoint.y);
      return neighbors;
    };
    utils.isNeighbors = function(axialPoint, axialPoint1) {
      var neighbors = this.getNeighbors(axialPoint);
      var returnVal = false;
      for (var i = 0; i < neighbors.length; i++) neighbors[i].equals(axialPoint1) && (returnVal = true);
      return returnVal;
    };
    utils.cloneObj = function(obj) {
      var o = obj && obj.constructor === Array ? [] : {};
      for (var i in obj) if (obj.hasOwnProperty(i)) {
        if (!obj[i]) {
          o[i] = obj[i];
          continue;
        }
        o[i] = "object" === _typeof(obj[i]) ? utils.cloneObj(obj[i]) : obj[i];
      }
      return o;
    };
    utils.GetRandomNum = function(minNum, maxNum) {
      switch (arguments.length) {
       case 1:
        return parseInt(Math.random() * minNum + 1, 10);

       case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);

       default:
        return 0;
      }
    };
    utils.inArray = function(obj, arr) {
      var i = arr.length;
      while (i--) if (parseInt(arr[i]) === parseInt(obj)) return true;
      return false;
    };
    module.exports = utils;
    cc._RF.pop();
  }, {} ],
  SettingView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64507eJPGxKyIteLWqvXb01", "SettingView");
    "use strict";
    var _util = require("util");
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
      onLoad: function onLoad() {
        this.initToggle();
      },
      initToggle: function initToggle() {
        SDK().getItem("curLang", function(idx) {
          null == idx && (idx = 0);
          for (var i = 0; i < window.langArr.length; i += 1) {
            var newItem = cc.instantiate(this.selectItem);
            newItem.parent = this.selectContent;
            newItem.toggle = newItem.getComponent(cc.Toggle);
            if (i != idx) newItem.toggle.isChecked = false; else {
              newItem.toggle.isChecked = true;
              this.curLang.string = window.langArr[i];
            }
            var name = cc.find("Name", newItem).getComponent(cc.Label);
            name.string = window.langArr[i];
            newItem.on("toggle", this.languageSelect, this);
            newItem.active = true;
          }
        }.bind(this));
      },
      languageSelect: function languageSelect(event) {
        var item = event.target;
        item.toggle.isChecked && (this.curLang.string = window.langArr[item.tag]);
      },
      menuClick: function menuClick(event, type) {
        if ("music" == type) if (window.gameApplication.soundManager.isOpen) {
          this.musicSprite.spriteFrame = this.musicOff;
          window.gameApplication.soundManager.setIsOpen(false);
        } else {
          this.musicSprite.spriteFrame = this.musicOn;
          window.gameApplication.soundManager.setIsOpen(true);
        } else if ("select" == type) {
          var length = 400;
          Math.abs(this.selectView.node.height - length) < .01 ? window.gameApplication.lerpACtion(length, -length, .5, function(ob) {
            this.selectView.node.height = ob.x;
            Math.abs(this.selectView.node.height - 0) < 1 && (this.selectView.node.height = 0);
          }.bind(this)) : Math.abs(this.selectView.node.height - 0) < .01 && window.gameApplication.lerpACtion(0, length, .5, function(ob) {
            this.selectView.node.height = ob.x;
            Math.abs(this.selectView.node.height - length) < 1 && (this.selectView.node.height = length);
          }.bind(this));
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    util: 6
  } ],
  SoundManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e203tup99JJ5nSDvFuy7AM", "SoundManager");
    "use strict";
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
        isOpen: true,
        isVoiceOpen: true
      },
      playSound: function playSound(soundtype) {
        if (this.isOpen) switch (soundtype) {
         case "btn_click":
          cc.audioEngine.play(this.btn_click, false, 1);
          break;

         case "done":
          cc.audioEngine.play(this.done, false, 1);
          break;

         case "error":
          cc.audioEngine.play(this.error, false, 1);
          break;

         case "clock":
          cc.audioEngine.play(this.clock, false, 1);
          break;

         case "gamewin":
          cc.audioEngine.play(this.gamewin, false, 1);
          break;

         case "uplock":
          cc.audioEngine.play(this.uplock, false, 1);
          break;

         case "getCoin":
          cc.audioEngine.play(this.getCoin, false, 1);
        }
      },
      playBg: function playBg() {
        this.isOpen && this.audioSource.play();
      },
      setVoiceIsOpen: function setVoiceIsOpen(isOpen) {
        this.isVoiceOpen = isOpen;
        if (isOpen) try {
          null != str && HiboGameJs.enableMic(0);
        } catch (e) {} else try {
          null != str && HiboGameJs.enableMic(1);
        } catch (e) {}
      },
      setIsOpen: function setIsOpen(isOpen) {
        this.isOpen = isOpen;
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
  SoundView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d517UYugxLZJs3U0+eMM8u", "SoundView");
    "use strict";
    var _MusicManager = require("./MusicManager");
    var _MusicManager2 = _interopRequireDefault(_MusicManager);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var musicName = "AquariumGameplayMusic";
    cc.Class({
      extends: cc.Component,
      properties: {
        music_1: {
          default: null,
          type: cc.Node,
          serializable: true
        },
        audioClip: {
          default: null,
          type: cc.AudioClip,
          serializable: true
        }
      },
      start: function start() {
        var flag = _MusicManager2.default.instance().getMusicFlag();
        cc.log(" SoundView start flag ", flag);
        this.music_1.active = flag;
        flag && _MusicManager2.default.instance().play(musicName, true);
      },
      onButtonClick: function onButtonClick() {
        var flag = _MusicManager2.default.instance().getMusicFlag();
        if (flag) {
          _MusicManager2.default.instance().close();
          this.music_1.active = false;
        } else {
          this.music_1.active = true;
          _MusicManager2.default.instance().open(musicName);
        }
      }
    });
    cc._RF.pop();
  }, {
    "./MusicManager": "MusicManager"
  } ],
  SpriteFrameSet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
    "use strict";
    var SpriteFrameSet = cc.Class({
      name: "SpriteFrameSet",
      properties: {
        language: "",
        spriteFrame: cc.SpriteFrame
      }
    });
    module.exports = SpriteFrameSet;
    cc._RF.pop();
  }, {} ],
  TTBanner: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cfdcrcfy5ONpokcWf0ujaX", "TTBanner");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseBanner2 = require("../base/BaseBanner");
    var _BaseBanner3 = _interopRequireDefault(_BaseBanner2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var TTBanner = function(_BaseBanner) {
      _inherits(TTBanner, _BaseBanner);
      function TTBanner() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, TTBanner);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TTBanner.__proto__ || Object.getPrototypeOf(TTBanner)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.bannerHeight = 0, _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(TTBanner, [ {
        key: "create",
        value: function create(callback) {
          var winSize = tt.getSystemInfoSync();
          var bannerWidth = 200;
          this.bannerHeight = bannerWidth / 16 * 9;
          this.destroyBanner();
          if (!tt.createBannerAd) return;
          this.bannerAd = tt.createBannerAd({
            adUnitId: this.adUnitID,
            style: {
              left: (winSize.windowWidth - bannerWidth) / 2,
              top: winSize.windowHeight - bannerWidth / 16 * 9,
              width: bannerWidth
            }
          });
          var that = this;
          function onLoad() {
            callback(null);
            console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
            that.bannerAd.offLoad(onLoad);
          }
          this.bannerAd.onLoad(onLoad);
          function onError(err) {
            callback(err);
            console.log("banner \u5e7f\u544a\u52a0\u8f7d\u5931\u8d25 ", err);
            that.bannerAd.offError(this);
          }
          this.bannerAd.onError(onError);
        }
      }, {
        key: "getHeight",
        value: function getHeight() {
          return this.bannerHeight;
        }
      }, {
        key: "show",
        value: function show() {
          if (!tt.createBannerAd) return;
          this.bannerAd.show();
        }
      }, {
        key: "hide",
        value: function hide() {
          if (!tt.createBannerAd) return;
          this.bannerAd.hide();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (!tt.createBannerAd) return;
          this.bannerAd.destroy();
        }
      } ]);
      return TTBanner;
    }(_BaseBanner3.default);
    exports.default = TTBanner;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseBanner": "BaseBanner"
  } ],
  TTChannel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a02e0ACiLFCArHpszp0cbGQ", "TTChannel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseChannel2 = require("../base/BaseChannel");
    var _BaseChannel3 = _interopRequireDefault(_BaseChannel2);
    var _TTLogin = require("./TTLogin");
    var _TTLogin2 = _interopRequireDefault(_TTLogin);
    var _TTBanner = require("./TTBanner");
    var _TTBanner2 = _interopRequireDefault(_TTBanner);
    var _TTVideoAd = require("./TTVideoAd");
    var _TTVideoAd2 = _interopRequireDefault(_TTVideoAd);
    var _TTShare = require("./TTShare");
    var _TTShare2 = _interopRequireDefault(_TTShare);
    var _TTRecorder = require("./TTRecorder");
    var _TTRecorder2 = _interopRequireDefault(_TTRecorder);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var TTChannel = function(_BaseChannel) {
      _inherits(TTChannel, _BaseChannel);
      function TTChannel(id, adIds) {
        _classCallCheck(this, TTChannel);
        var _this = _possibleConstructorReturn(this, (TTChannel.__proto__ || Object.getPrototypeOf(TTChannel)).call(this, id));
        _this.loginMgr = new _TTLogin2.default();
        _this.recorder = new _TTRecorder2.default();
        _this.bannerAd = new _TTBanner2.default(adIds.bannerID);
        _this.rewardAd = new _TTVideoAd2.default(adIds.rewardID);
        _this.share = new _TTShare2.default(adIds.shareTitle);
        return _this;
      }
      _createClass(TTChannel, [ {
        key: "isHaveRank",
        value: function isHaveRank() {
          return false;
        }
      }, {
        key: "isHaveGameBox",
        value: function isHaveGameBox() {
          return false;
        }
      }, {
        key: "showImage",
        value: function showImage(imgUrl) {
          tt.previewImage({
            current: imgUrl,
            urls: [ imgUrl ]
          });
        }
      }, {
        key: "jumpToApp",
        value: function jumpToApp(appID) {
          tt.navigateToMiniProgram({
            appId: appID,
            success: function success() {}
          });
        }
      }, {
        key: "postMessage",
        value: function postMessage(message) {
          var context = tt.getOpenDataContext();
          if (context) {
            message.channelID = this.id;
            context.postMessage(message);
          }
        }
      }, {
        key: "vibrateShort",
        value: function vibrateShort() {
          tt.vibrateShort();
        }
      } ]);
      return TTChannel;
    }(_BaseChannel3.default);
    exports.default = TTChannel;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseChannel": "BaseChannel",
    "./TTBanner": "TTBanner",
    "./TTLogin": "TTLogin",
    "./TTRecorder": "TTRecorder",
    "./TTShare": "TTShare",
    "./TTVideoAd": "TTVideoAd"
  } ],
  TTInterstitialAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87317Q4zt9JQo2cDhDFnZaD", "TTInterstitialAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _InterstitialAd2 = require("../base/InterstitialAd");
    var _InterstitialAd3 = _interopRequireDefault(_InterstitialAd2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var TTInterstitialAd = function(_InterstitialAd) {
      _inherits(TTInterstitialAd, _InterstitialAd);
      function TTInterstitialAd(id) {
        _classCallCheck(this, TTInterstitialAd);
        var _this = _possibleConstructorReturn(this, (TTInterstitialAd.__proto__ || Object.getPrototypeOf(TTInterstitialAd)).call(this));
        _this.interstitialAd = null;
        _this.finish = false;
        _this.load(id);
        return _this;
      }
      _createClass(TTInterstitialAd, [ {
        key: "show",
        value: function show(func) {
          this.interstitialAd && this.interstitialAd.show(function(code) {
            cc.log(" insterstitailAd show result ", code);
            func(code || null);
          });
        }
      }, {
        key: "isLoad",
        value: function isLoad() {
          return this.finish;
        }
      }, {
        key: "load",
        value: function load(id) {
          var _this2 = this;
          if (wx.createInterstitialAd) {
            this.interstitialAd = wx.createInterstitialAd({
              adUnitId: id
            });
            this.interstitialAd.onLoad(function() {
              cc.log("\u63d2\u5c4f \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
              _this2.finish = true;
            });
            this.interstitialAd.onError(function(err) {
              cc.log(err);
            });
            this.interstitialAd.onClose(function(res) {
              cc.log("\u63d2\u5c4f \u5e7f\u544a\u5173\u95ed");
            });
          }
        }
      } ]);
      return TTInterstitialAd;
    }(_InterstitialAd3.default);
    exports.default = TTInterstitialAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/InterstitialAd": "InterstitialAd"
  } ],
  TTLogin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b20dnzeOdCO5aALo2zYXl2", "TTLogin");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _LoginInterface2 = require("../base/LoginInterface");
    var _LoginInterface3 = _interopRequireDefault(_LoginInterface2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var TTLogin = function(_LoginInterface) {
      _inherits(TTLogin, _LoginInterface);
      function TTLogin() {
        _classCallCheck(this, TTLogin);
        return _possibleConstructorReturn(this, (TTLogin.__proto__ || Object.getPrototypeOf(TTLogin)).call(this));
      }
      _createClass(TTLogin, [ {
        key: "login",
        value: function login(func, param) {
          tt.login({
            force: false,
            success: function success(res) {
              console.log("login\u8c03\u7528\u6210\u529f" + res.code + " " + res.anonymousCode);
              tt.getUserInfo({
                success: function success(res) {
                  console.log("getUserInfo\u8c03\u7528\u6210\u529f" + res.userInfo);
                  func();
                },
                fail: function fail(res) {
                  console.log("getUserInfo\u8c03\u7528\u5931\u8d25");
                  func();
                }
              });
            },
            fail: function fail(res) {
              func();
            }
          });
        }
      }, {
        key: "logout",
        value: function logout() {}
      } ]);
      return TTLogin;
    }(_LoginInterface3.default);
    exports.default = TTLogin;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/LoginInterface": "LoginInterface"
  } ],
  TTRecorder: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "264dcgemjpOeozf83+TMV2A", "TTRecorder");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseRecorder2 = require("../base/BaseRecorder");
    var _BaseRecorder3 = _interopRequireDefault(_BaseRecorder2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var TTRecorder = function(_BaseRecorder) {
      _inherits(TTRecorder, _BaseRecorder);
      function TTRecorder() {
        _classCallCheck(this, TTRecorder);
        var _this = _possibleConstructorReturn(this, (TTRecorder.__proto__ || Object.getPrototypeOf(TTRecorder)).call(this));
        _this.isSave = true;
        _this.recorder = tt.getGameRecorderManager();
        _this.recorder.onStart(function(res) {
          console.log("\u5f55\u5c4f\u5f00\u59cb", res);
          _this.changeState(1);
        });
        _this.recorder.onStop(function(res) {
          console.log("\u5f55\u5c4f\u7ed3\u675f", res);
          _this.clipVideo(res, [ 15, 0 ], function(r) {
            _this.videoPath = r ? r.videoPath : null;
            _this.changeState(0);
          });
        });
        _this.recorder.onResume(function() {
          console.log("TTRecorder onResume");
        });
        _this.recorder.onPause(function() {
          console.log("TTRecorder onPuase");
        });
        _this.recorder.onError(function(res) {
          console.log("TTRecorder onPuase");
          _this.videoPath = null;
        });
        return _this;
      }
      _createClass(TTRecorder, [ {
        key: "clipVideo",
        value: function clipVideo(res, timeRange, func) {
          this.recorder.clipVideo({
            path: res.videoPath,
            timeRange: timeRange,
            success: function success(r) {
              console.log(r.videoPath);
              func(r);
            },
            fail: function fail() {
              func(null);
            }
          });
        }
      }, {
        key: "recordClip",
        value: function recordClip(func) {
          this.recorder.recordClip({
            timeRange: [ 15, 0 ],
            success: function success(r) {
              console.log(r.index);
              func(r);
            }
          });
        }
      }, {
        key: "start",
        value: function start() {
          console.log(" recorder start ", this.isOpen());
          if (this.isOpen()) return;
          this.recorder.start({
            duration: 300
          });
        }
      }, {
        key: "stop",
        value: function stop() {
          var isSave = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          console.log(" recorder stop ", this.isClose(), isSave);
          if (this.isClose()) return;
          this.isSave = isSave;
          this.recorder.stop();
        }
      }, {
        key: "pause",
        value: function pause() {
          this.recorder.pause();
        }
      }, {
        key: "resume",
        value: function resume() {
          this.recorder.resume();
        }
      } ]);
      return TTRecorder;
    }(_BaseRecorder3.default);
    exports.default = TTRecorder;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseRecorder": "BaseRecorder"
  } ],
  TTShare: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87d927WehVBaYJp7TmeoWh0", "TTShare");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseShare2 = require("../base/BaseShare");
    var _BaseShare3 = _interopRequireDefault(_BaseShare2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var TTShare = function(_BaseShare) {
      _inherits(TTShare, _BaseShare);
      function TTShare(title) {
        _classCallCheck(this, TTShare);
        var _this = _possibleConstructorReturn(this, (TTShare.__proto__ || Object.getPrototypeOf(TTShare)).call(this, title));
        tt.showShareMenu({
          withShareTicket: true
        });
        tt.updateShareMenu({
          withShareTicket: true
        });
        wx.onShareAppMessage(function() {
          var _this2 = this;
          var visibleOrigin = cc.view.getVisibleOrigin();
          var visibleSize = cc.view.getFrameSize();
          return {
            title: title,
            imageUrl: canvas.toTempFilePathSync({
              x: visibleOrigin.x,
              y: visibleOrigin.y,
              destWidth: visibleSize.width,
              destHeight: visibleSize.height
            }),
            success: function success() {
              console.log("\u5206\u4eab\u6210\u529f");
              _this2.shareSuccess();
            },
            fail: function fail(e) {
              console.log("\u5206\u4eab\u5931\u8d25", e);
            }
          };
        });
        return _this;
      }
      _createClass(TTShare, [ {
        key: "share",
        value: function share(title, func, isShowRecorder) {
          var _this3 = this;
          var videoPath = D.sdk.getRecorder().getVideoPath();
          console.log("shareAppMessage title ", title, " isShowRecorder ", isShowRecorder, " videoPath ", videoPath);
          isShowRecorder && videoPath ? tt.shareAppMessage({
            channel: "video",
            title: title || this.title,
            extra: {
              videoPath: videoPath
            },
            success: function success() {
              console.log("\u5206\u4eab\u6210\u529f");
              func && func(true);
              _this3.shareSuccess();
            },
            fail: function fail(e) {
              console.log("\u5206\u4eab\u5931\u8d25", e);
              e.errMsg.indexOf("short") >= 0 ? _this3.share(title, func, false) : func(false);
            }
          }) : tt.shareAppMessage({
            channel: "article",
            title: "\u5206\u4eab\u521b\u4f5c",
            description: title || this.title,
            success: function success() {
              console.log("SDK\u5206\u4eab\u6210\u529f");
              func && func(true);
              _this3.shareSuccess();
            },
            fail: function fail(e) {
              func(false);
              console.log("SDK\u5206\u4eab\u5931\u8d25");
            }
          });
          this.shareFlag = true;
        }
      }, {
        key: "getShareInfo",
        value: function getShareInfo(shareTicket, func) {
          shareTicket && tt.getShareInfo({
            shareTicket: shareTicket,
            success: function success() {},
            fail: function fail() {}
          });
        }
      } ]);
      return TTShare;
    }(_BaseShare3.default);
    exports.default = TTShare;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseShare": "BaseShare"
  } ],
  TTVideoAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41234ij4stET6fTgrsMmKdm", "TTVideoAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseRewardAd2 = require("../base/BaseRewardAd");
    var _BaseRewardAd3 = _interopRequireDefault(_BaseRewardAd2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var TTVideoAd = function(_BaseRewardAd) {
      _inherits(TTVideoAd, _BaseRewardAd);
      function TTVideoAd() {
        _classCallCheck(this, TTVideoAd);
        return _possibleConstructorReturn(this, (TTVideoAd.__proto__ || Object.getPrototypeOf(TTVideoAd)).apply(this, arguments));
      }
      _createClass(TTVideoAd, [ {
        key: "createVideoAd",
        value: function createVideoAd(id) {
          var _this2 = this;
          if (!tt.createRewardedVideoAd) return;
          this.rewardedVideoAd = tt.createRewardedVideoAd({
            adUnitId: id
          });
          if (this.rewardedVideoAd) {
            this.rewardedVideoAd.onLoad(function() {});
            this.rewardedVideoAd.onError(function(err) {
              console.log(err);
              ToastController.instance().show("\u89c6\u9891\u52a0\u8f7d\u5931\u8d25\uff0c\u65e0\u6cd5\u83b7\u5f97\u5956\u52b1");
              _this2.rewardCallback && _this2.rewardCallback(false);
            });
            this.rewardedVideoAd.onClose(function(res) {
              _this2.state = _BaseRewardAd2.RewardADState.close;
              res && res.isEnded || void 0 === res ? _this2.rewardCallback && _this2.rewardCallback(true) : _this2.rewardCallback && _this2.rewardCallback(false);
            });
          }
        }
      } ]);
      return TTVideoAd;
    }(_BaseRewardAd3.default);
    exports.default = TTVideoAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseRewardAd": "BaseRewardAd"
  } ],
  TimeGift: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f2aaGixZ5Fyol6rIab6HGA", "TimeGift");
    "use strict";
    var passVal = [ 3, 50 ];
    var timeVal = [ 2, 100 ];
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
          visible: false
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
      onLoad: function onLoad() {
        window.timeGiftScript = this;
        SDK().getItem("giftTime", function(time) {
          time = parseInt(time);
          this.giftTime = time;
        }.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          this.openBtn();
        }, this);
      },
      openBtn: function openBtn() {
        window.gameApplication.soundManager.playSound("btn_click");
        this.giftTip.active && this.showTimeGiftView(1);
      },
      start: function start() {
        this.checkTime(true);
      },
      showTimeGiftView: function showTimeGiftView(type) {
        console.log(type);
        var heartVal = 0;
        var coinVal = 0;
        if (1 == type) {
          heartVal = timeVal[0];
          coinVal = timeVal[1];
        } else if (2 == type) {
          heartVal = passVal[0];
          coinVal = passVal[1];
        }
        this.heartsNum.string = "+" + heartVal;
        this.coinsNum.string = "+" + coinVal;
        window.gameApplication.openGiftView(true);
        var bg = this.giftView.getChildByName("Bg");
        var later = bg.getChildByName("Later");
        var receive = bg.getChildByName("ReceiveView");
        var lightBg0 = receive.getChildByName("Light0");
        var lightBg1 = receive.getChildByName("Light1");
        var receiveBtn = receive.getChildByName("Receive");
        var doubleBtn = receive.getChildByName("Double");
        lightBg0.runAction(cc.repeatForever(cc.repeatForever(cc.rotateBy(1, 120))));
        lightBg1.runAction(cc.repeatForever(cc.rotateBy(1, 120)));
        receiveBtn.off(cc.Node.EventType.TOUCH_END);
        receiveBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
          window.gameApplication.soundManager.playSound("btn_click");
          1 == type && this.resetTime();
          SDK().getItem("hearts", function(Heart) {
            Heart = parseInt(Heart);
            Heart += heartVal;
            window.gameApplication.flyReward(heartVal, "heartSprite", window.mainScirpt.hearts, null);
            SDK().setItem({
              hearts: Heart
            }, null);
            null != window.mainScirpt.hearts && (window.mainScirpt.hearts.getComponent(cc.Label).string = Heart.toString());
          }.bind(this));
          SDK().getItem("coins", function(Coin) {
            Coin = parseInt(Coin);
            Coin += coinVal;
            window.gameApplication.flyReward(.1 * coinVal, "coin", window.mainScirpt.coins, null);
            SDK().setItem({
              coins: Coin
            }, function() {
              window.mainScirpt.refreashVal();
            });
            null != window.mainScirpt.coins && (window.mainScirpt.coins.getComponent(cc.Label).string = Coin.toString());
          }.bind(this));
          window.gameApplication.openGiftView(false);
        }, this);
        doubleBtn.off(cc.Node.EventType.TOUCH_END);
        doubleBtn.on(cc.Node.EventType.TOUCH_END, function(event) {
          window.gameApplication.soundManager.playSound("btn_click");
          window.gameApplication.onVideoBtnClick(function(isCompleted) {
            if (isCompleted) {
              1 == type && this.resetTime();
              SDK().getItem("hearts", function(Heart) {
                Heart = parseInt(Heart);
                Heart += 3 * heartVal;
                window.gameApplication.flyReward(3 * heartVal, "heartSprite", window.mainScirpt.hearts, null);
                SDK().setItem({
                  hearts: Heart
                }, null);
                null != window.mainScirpt.hearts && (window.mainScirpt.hearts.getComponent(cc.Label).string = Heart.toString());
              }.bind(this));
              SDK().getItem("coins", function(Coin) {
                Coin = parseInt(Coin);
                Coin += 3 * coinVal;
                window.gameApplication.flyReward(.3 * coinVal, "coin", window.mainScirpt.coins, null);
                SDK().setItem({
                  coins: Coin
                }, function() {
                  window.mainScirpt.refreashVal();
                });
                null != window.mainScirpt.coins && (window.mainScirpt.coins.getComponent(cc.Label).string = Coin.toString());
              }.bind(this));
              window.gameApplication.openGiftView(false);
            }
          }.bind(this));
        }, this);
        later.off(cc.Node.EventType.TOUCH_END);
        later.on(cc.Node.EventType.TOUCH_END, function(event) {
          window.gameApplication.soundManager.playSound("btn_click");
          window.gameApplication.openGiftView(false);
        }, this);
      },
      resetTime: function resetTime() {
        var timestamp = Date.parse(new Date());
        timestamp /= 1e3;
        this.giftTime = timestamp;
        SDK().setItem({
          giftTime: this.giftTime
        }, null);
      },
      checkTime: function checkTime(isStart) {
        var timestamp = Date.parse(new Date());
        timestamp /= 1e3;
        if (timestamp - this.giftTime > 10800) {
          if (!this.giftTip.active && this.giftMask.active || isStart) {
            this.giftTip.active = true;
            this.giftMask.active = false;
            this.giftTimeText.node.active = true;
            this.giftBtn.stopAllActions();
            window.gameApplication.shake(this.giftBtn.getChildByName("Gift"));
          }
        } else {
          if (this.giftTip.active && !this.giftMask.active || isStart) {
            this.giftTip.active = false;
            this.giftTip.stopAllActions();
            this.giftMask.active = true;
            this.giftTimeText.node.active = true;
            this.giftBtn.getChildByName("Gift").stopAllActions();
            this.giftBtn.getChildByName("Gift").rotation = 0;
          }
          var temp = timestamp - this.giftTime;
          temp = 10800 - temp;
          var tempMin = temp / 60;
          var hor = 0;
          if (tempMin >= 60) {
            var count = Math.floor(tempMin / 60);
            hor = count;
            tempMin = tempMin % 60 * 60;
          }
          var min = tempMin / 60 < 10 ? "0" + Math.floor(tempMin / 60) : "" + Math.floor(tempMin / 60);
          var sec = temp % 60 < 10 ? "0" + Math.floor(temp % 60) : "" + Math.floor(temp % 60);
          if (temp <= 0) {
            min = "00";
            sec = "00";
          }
          this.giftTimeText.string = hor > 0 ? hor + ":" + min + ":" + sec : min + ":" + sec;
        }
        this.scheduleOnce(function() {
          this.checkTime(false);
        }.bind(this), 1);
      }
    });
    cc._RF.pop();
  }, {} ],
  TipView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82001RAO8NNf5QiLY116wXd", "TipView");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        callback: {
          default: null,
          serializable: false
        }
      },
      start: function start() {},
      setCallback: function setCallback(cb) {
        this.callback = cb;
      },
      onButtonClose: function onButtonClose() {
        this.node.active = false;
      },
      onButtonTipClick: function onButtonTipClick() {
        this.node.active = false;
        if (this.callback) {
          this.callback();
          this.callback = null;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Tower: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fffd1g1zLBJ9Zn7NHAXbn3T", "Tower");
    "use strict";
    var HexCell = require("./HexCell");
    cc.Class({
      extends: cc.Component,
      properties: {
        bubble: {
          default: null,
          type: cc.Node
        },
        bubbleAxialCoordinate: {
          default: cc.v2(0, 0),
          visible: false
        },
        _axialCoordinate: {
          default: cc.v2(0, 0),
          visible: false
        },
        axialCoordinate: {
          get: function get() {
            return this._axialCoordinate;
          },
          set: function set(val) {
            this._axialCoordinate = cc.v2(val.x, val.y);
            this.bubbleAxialCoordinate = cc.v2(val.x, val.y);
          }
        },
        isShooting: false,
        direction: {
          default: -1,
          type: cc.Integer,
          visible: false
        },
        f: {
          default: 0,
          type: cc.Integer,
          visible: false
        },
        s: {
          default: 0,
          type: cc.Integer,
          visible: false
        },
        delay: {
          default: 0,
          type: cc.Integer,
          visible: false
        },
        size: {
          default: cc.size(0, 0),
          type: cc.Size,
          visible: false
        },
        scaleX: {
          default: 1,
          type: cc.Integer,
          visible: false
        },
        scaleY: {
          default: 1,
          type: cc.Integer,
          visible: false
        }
      },
      init: function init(config) {
        this.direction = config.direction;
        this.f = config.f;
        this.s = config.s;
        this.delay = config.delay;
        this.isShooting = false;
        this.bubble.active = false;
        this.node.setContentSize(this.size);
        this.bubble.setScale(this.scaleX, this.scaleY);
      },
      setScaleXY: function setScaleXY(x, y) {
        this.size = cc.size(34 * x, 51 * y);
        this.scaleX = x;
        this.scaleY = y;
      },
      onLoad: function onLoad() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {
    "./HexCell": "HexCell"
  } ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e427LrtQhKv7l/kjbf8v9+", "Utils");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var utils = {};
    var rootThree = Math.sqrt(3);
    utils.offsetToAxial = function(offsetPt) {
      offsetPt.x = offsetPt.x - Math.floor(offsetPt.y / 2);
      return offsetPt;
    };
    utils.axialToScreen = function(axialPoint, sideLength) {
      var tileY = sideLength * axialPoint.y + .5 * sideLength - axialPoint.y * lineWidth;
      var tileX = sideLength * axialPoint.x + .5 * sideLength - axialPoint.x * lineWidth;
      return cc.v2(tileX, tileY);
    };
    utils.screenToAxial = function(screenPoint, sideLength) {
      var axialPoint = cc.v2(0, 0);
      axialPoint.y = screenPoint.x / (1.5 * sideLength);
      axialPoint.x = (screenPoint.y - screenPoint.x / rootThree) / (rootThree * sideLength);
      var cubicZ = this.calculateCubicZ(axialPoint);
      var round_x = Math.round(axialPoint.x);
      var round_y = Math.round(axialPoint.y);
      var round_z = Math.round(cubicZ);
      if (round_x + round_y + round_z == 0) {
        screenPoint.x = round_x;
        screenPoint.y = round_y;
      } else {
        var delta_x = Math.abs(axialPoint.x - round_x);
        var delta_y = Math.abs(axialPoint.y - round_y);
        var delta_z = Math.abs(cubicZ - round_z);
        if (delta_x > delta_y && delta_x > delta_z) {
          screenPoint.x = -round_y - round_z;
          screenPoint.y = round_y;
        } else if (delta_y > delta_x && delta_y > delta_z) {
          screenPoint.x = round_x;
          screenPoint.y = -round_x - round_z;
        } else if (delta_z > delta_x && delta_z > delta_y) {
          screenPoint.x = round_x;
          screenPoint.y = round_y;
        }
      }
      return screenPoint;
    };
    utils.calculateCubicZ = function(newAxialPoint) {
      return -newAxialPoint.x - newAxialPoint.y;
    };
    utils.axialToOffset = function(axialPt) {
      axialPt.x = axialPt.x + Math.floor(axialPt.y / 2);
      return axialPt;
    };
    utils.getNeighbors = function(axialPoint) {
      var neighbourPoint = cc.v2(0, 0);
      var neighbors = [];
      neighbourPoint.x = axialPoint.x + 1;
      neighbourPoint.y = axialPoint.y;
      neighbors.push(cc.v2(neighbourPoint.x, neighbourPoint.y));
      neighbourPoint.x = axialPoint.x - 1;
      neighbourPoint.y = axialPoint.y;
      neighbors.push(cc.v2(neighbourPoint.x, neighbourPoint.y));
      neighbourPoint.x = axialPoint.x;
      neighbourPoint.y = axialPoint.y - 1;
      neighbors.push(cc.v2(neighbourPoint.x, neighbourPoint.y));
      neighbourPoint.x = axialPoint.x;
      neighbourPoint.y = axialPoint.y + 1;
      neighbors.push(cc.v2(neighbourPoint.x, neighbourPoint.y));
      return neighbors;
    };
    utils.getNeighborsOBJ = function(axialPoint) {
      var neighbourPoint = cc.v2(0, 0);
      var neighbors = {};
      neighbourPoint.x = axialPoint.x + 1;
      neighbourPoint.y = axialPoint.y;
      neighbors.r = cc.v2(neighbourPoint.x, neighbourPoint.y);
      neighbourPoint.x = axialPoint.x - 1;
      neighbourPoint.y = axialPoint.y;
      neighbors.l = cc.v2(neighbourPoint.x, neighbourPoint.y);
      neighbourPoint.x = axialPoint.x;
      neighbourPoint.y = axialPoint.y - 1;
      neighbors.b = cc.v2(neighbourPoint.x, neighbourPoint.y);
      neighbourPoint.x = axialPoint.x;
      neighbourPoint.y = axialPoint.y + 1;
      neighbors.t = cc.v2(neighbourPoint.x, neighbourPoint.y);
      return neighbors;
    };
    utils.isNeighbors = function(axialPoint, axialPoint1) {
      var neighbors = this.getNeighbors(axialPoint);
      var returnVal = false;
      for (var i = 0; i < neighbors.length; i++) neighbors[i].equals(axialPoint1) && (returnVal = true);
      return returnVal;
    };
    utils.cloneObj = function(obj) {
      var o = obj && obj.constructor === Array ? [] : {};
      for (var i in obj) if (obj.hasOwnProperty(i)) {
        if (!obj[i]) {
          o[i] = obj[i];
          continue;
        }
        o[i] = "object" === _typeof(obj[i]) ? utils.cloneObj(obj[i]) : obj[i];
      }
      return o;
    };
    utils.GetRandomNum = function(minNum, maxNum) {
      switch (arguments.length) {
       case 1:
        return parseInt(Math.random() * minNum + 1, 10);

       case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);

       default:
        return 0;
      }
    };
    utils.inArray = function(obj, arr) {
      var i = arr.length;
      while (i--) if (parseInt(arr[i]) === parseInt(obj)) return true;
      return false;
    };
    module.exports = utils;
    cc._RF.pop();
  }, {} ],
  VivoBannerAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1916b2DZhLcpjgNlvbb4cw", "VivoBannerAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseBanner2 = require("../base/BaseBanner");
    var _BaseBanner3 = _interopRequireDefault(_BaseBanner2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var VivoBannerAd = function(_BaseBanner) {
      _inherits(VivoBannerAd, _BaseBanner);
      function VivoBannerAd() {
        _classCallCheck(this, VivoBannerAd);
        return _possibleConstructorReturn(this, (VivoBannerAd.__proto__ || Object.getPrototypeOf(VivoBannerAd)).apply(this, arguments));
      }
      _createClass(VivoBannerAd, [ {
        key: "create",
        value: function create(callback) {
          this.destroyBanner();
          this.bannerAd = qg.createBannerAd({
            posId: this.adUnitID,
            style: {}
          });
          var that = this;
          function onLoad() {
            that.bannerAd.offLoad(onLoad);
            callback(null);
            console.log("banner  ad load success");
          }
          this.bannerAd.onLoad(onLoad);
          function onError(err) {
            callback(err);
            console.log("banner ad load fail  ", err);
            that.bannerAd.offError(onError);
          }
          this.bannerAd.onError(onError);
          function onClose() {
            that.bannerAd.offClose(onClose);
          }
          this.bannerAd.onClose(onClose);
        }
      }, {
        key: "getHeight",
        value: function getHeight() {
          return 120;
        }
      }, {
        key: "show",
        value: function show() {
          this.bannerAd.show();
        }
      }, {
        key: "hide",
        value: function hide() {
          this.bannerAd.hide();
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.bannerAd.destroy();
        }
      } ]);
      return VivoBannerAd;
    }(_BaseBanner3.default);
    exports.default = VivoBannerAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseBanner": "BaseBanner"
  } ],
  VivoChannel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12a69ER2v9Bzr2pKoAB4dyW", "VivoChannel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseChannel2 = require("../base/BaseChannel");
    var _BaseChannel3 = _interopRequireDefault(_BaseChannel2);
    var _VivoBannerAd = require("./VivoBannerAd");
    var _VivoBannerAd2 = _interopRequireDefault(_VivoBannerAd);
    var _VivoInsertAd = require("./VivoInsertAd");
    var _VivoInsertAd2 = _interopRequireDefault(_VivoInsertAd);
    var _VivoRewardAd = require("./VivoRewardAd");
    var _VivoRewardAd2 = _interopRequireDefault(_VivoRewardAd);
    var _DevLogin = require("../dev/DevLogin");
    var _DevLogin2 = _interopRequireDefault(_DevLogin);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var VivoChannel = function(_BaseChannel) {
      _inherits(VivoChannel, _BaseChannel);
      function VivoChannel(id, adIds) {
        _classCallCheck(this, VivoChannel);
        var _this = _possibleConstructorReturn(this, (VivoChannel.__proto__ || Object.getPrototypeOf(VivoChannel)).call(this, id));
        _this.appId = "";
        _this.appId = adIds.appId;
        _this.loginMgr = new _DevLogin2.default();
        cc.log(" qg.getSystemInfoSync().platformVersionCode ", qg.getSystemInfoSync().platformVersionCode);
        qg.getSystemInfoSync().platformVersionCode < 1031;
        return _this;
      }
      _createClass(VivoChannel, [ {
        key: "isVideoLvUp",
        value: function isVideoLvUp() {
          return true;
        }
      }, {
        key: "sevenButtonNum",
        value: function sevenButtonNum() {
          return 1;
        }
      }, {
        key: "vibrateShort",
        value: function vibrateShort() {
          qg.vibrateShort();
        }
      }, {
        key: "activeSkillLabel",
        value: function activeSkillLabel() {
          return "\u89c2\u770b\u89c6\u9891";
        }
      }, {
        key: "showShare",
        value: function showShare(title, func) {
          this.openRewardAd(function(result) {
            result && func();
          });
        }
      }, {
        key: "init",
        value: function init() {}
      } ]);
      return VivoChannel;
    }(_BaseChannel3.default);
    exports.default = VivoChannel;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseChannel": "BaseChannel",
    "../dev/DevLogin": "DevLogin",
    "./VivoBannerAd": "VivoBannerAd",
    "./VivoInsertAd": "VivoInsertAd",
    "./VivoRewardAd": "VivoRewardAd"
  } ],
  VivoInsertAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72a61M/M5ZOz5Ri+gcH7ex1", "VivoInsertAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _InterstitialAd2 = require("../base/InterstitialAd");
    var _InterstitialAd3 = _interopRequireDefault(_InterstitialAd2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var VivoInsertAd = function(_InterstitialAd) {
      _inherits(VivoInsertAd, _InterstitialAd);
      function VivoInsertAd(id) {
        _classCallCheck(this, VivoInsertAd);
        var _this = _possibleConstructorReturn(this, (VivoInsertAd.__proto__ || Object.getPrototypeOf(VivoInsertAd)).call(this));
        _this.interstitialAd = null;
        _this.finish = false;
        _this.load(id);
        return _this;
      }
      _createClass(VivoInsertAd, [ {
        key: "show",
        value: function show(func) {
          var that = this;
          this.interstitialAd && this.interstitialAd.show().then(function() {
            D.sdk.getBannerAd().pause();
          }).catch(function(err) {
            that.interstitialAd.load().then(function() {
              that.interstitialAd.show();
              D.sdk.getBannerAd().pause();
            }).catch(function(err) {
              console.log(" show insert err 2 ", err);
            });
          });
        }
      }, {
        key: "isLoad",
        value: function isLoad() {
          return this.finish;
        }
      }, {
        key: "load",
        value: function load(id) {
          var _this2 = this;
          this.interstitialAd = qg.createInterstitialAd({
            posId: id
          });
          this.interstitialAd.onLoad(function() {
            console.log("\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
            _this2.finish = true;
          });
          this.interstitialAd.onError(function(err) {
            console.log("VivoInsertAd load fail ", err);
            _this2.finish = false;
          });
          this.interstitialAd.onClose(function() {
            D.sdk.getBannerAd().resume();
          });
        }
      } ]);
      return VivoInsertAd;
    }(_InterstitialAd3.default);
    exports.default = VivoInsertAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/InterstitialAd": "InterstitialAd"
  } ],
  VivoNativeAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ddfc7y5rrNDW5SiZxCwUA5r", "VivoNativeAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseNativeAd2 = require("../base/BaseNativeAd");
    var _BaseNativeAd3 = _interopRequireDefault(_BaseNativeAd2);
    var _NativeAdItemModel = require("../base/NativeAdItemModel");
    var _NativeAdItemModel2 = _interopRequireDefault(_NativeAdItemModel);
    var _ChannelID = require("../ChannelID");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var VivoNativeAd = function(_BaseNativeAd) {
      _inherits(VivoNativeAd, _BaseNativeAd);
      function VivoNativeAd() {
        _classCallCheck(this, VivoNativeAd);
        return _possibleConstructorReturn(this, (VivoNativeAd.__proto__ || Object.getPrototypeOf(VivoNativeAd)).apply(this, arguments));
      }
      _createClass(VivoNativeAd, [ {
        key: "create",
        value: function create(callback) {
          this.destroyNative();
          this.nativeAd = qg.createNativeAd({
            posId: this.adUnitID
          });
          var that = this;
          function onLoad(res) {
            that.nativeAd.offLoad(this);
            callback(null);
            console.log("banner  ad load success");
            if (res.adList) {
              for (var index = 0; index < res.adList.length; index++) {
                var element = res.adList[index];
                var adItem = new _NativeAdItemModel2.default();
                adItem.initWithOppo(element);
              }
              that.publish(_ChannelID.SDKEvent.NATIVE_AD_LOAD_FINISH, that.adItems);
            }
          }
          this.nativeAd.onLoad(onLoad);
          function onError(err) {
            callback(err);
            console.log("banner ad load fail  ", err);
            that.nativeAd.offError(this);
          }
          this.nativeAd.onError(onError);
        }
      }, {
        key: "reportAdClick",
        value: function reportAdClick(adId) {
          if (!this.nativeAd) return;
          this.nativeAd.reportAdClick({
            adId: adId
          });
        }
      }, {
        key: "reportAdShow",
        value: function reportAdShow(adId) {
          if (!this.nativeAd) return;
          this.nativeAd.reportAdShow({
            adId: adId
          });
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.nativeAd.destroy();
        }
      } ]);
      return VivoNativeAd;
    }(_BaseNativeAd3.default);
    exports.default = VivoNativeAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../ChannelID": "ChannelID",
    "../base/BaseNativeAd": "BaseNativeAd",
    "../base/NativeAdItemModel": "NativeAdItemModel"
  } ],
  VivoRewardAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a30f2tPeFZIv5IafIMh8UR7", "VivoRewardAd");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseRewardAd2 = require("../base/BaseRewardAd");
    var _BaseRewardAd3 = _interopRequireDefault(_BaseRewardAd2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var VivoRewardAd = function(_BaseRewardAd) {
      _inherits(VivoRewardAd, _BaseRewardAd);
      function VivoRewardAd() {
        _classCallCheck(this, VivoRewardAd);
        return _possibleConstructorReturn(this, (VivoRewardAd.__proto__ || Object.getPrototypeOf(VivoRewardAd)).apply(this, arguments));
      }
      _createClass(VivoRewardAd, [ {
        key: "createVideoAd",
        value: function createVideoAd(id) {
          var _this2 = this;
          this.rewardedVideoAd = qg.createRewardedVideoAd({
            posId: id
          });
          this.rewardedVideoAd.onLoad(function() {
            console.log("\u6fc0\u52b1\u89c6\u9891\u5df2\u52a0\u8f7d");
          });
          this.rewardedVideoAd.onError(function(err) {
            console.log("\u6fc0\u52b1\u89c6\u9891\u5f02\u5e38", err);
            _this2.rewardCallback && _this2.rewardCallback(false);
            D.control.showTip(function() {
              _this2.show(_this2.rewardCallback);
            });
          });
          this.rewardedVideoAd.onClose(function(res) {
            _this2.state = _BaseRewardAd2.RewardADState.close;
            if (res && res.isEnded) {
              console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1");
              _this2.rewardCallback(true);
            } else {
              console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1");
              _this2.rewardCallback(false);
            }
          });
        }
      } ]);
      return VivoRewardAd;
    }(_BaseRewardAd3.default);
    exports.default = VivoRewardAd;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "../base/BaseRewardAd": "BaseRewardAd"
  } ],
  ZoominForever1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f1b5ntEa5NbYY+SYDZzHax", "ZoominForever1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var seq = cc.repeatForever(cc.sequence(cc.scaleTo(.48, 1.25, 1.25), cc.delayTime(.38), cc.scaleTo(.78, 1, 1), cc.delayTime(.68)));
        this.node.runAction(seq);
      }
    });
    cc._RF.pop();
  }, {} ],
  ZoominForever: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0bfed705u9G85RWvZFfoZtO", "ZoominForever");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        var seq = cc.repeatForever(cc.sequence(cc.scaleTo(.88, 1.1, 1.1), cc.scaleTo(.88, .9, .9)));
        this.node.runAction(seq);
      }
    });
    cc._RF.pop();
  }, {} ],
  en: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8c6d6rX4b5LH43PcfbdRlsr", "en");
    "use strict";
    var _label_text;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages["en"] = {
      label_text: (_label_text = {
        helpTip: "Slide the screen to direct the direction \n and find the exit of the maze!",
        watchAdTip: "Watch video AD to unlock \nthis level in advance!",
        watchAdBtn: "Unlock",
        invBtn: "PK VS Friends",
        watchAdHelip: "You can get 5 more help\n after watching the AD!"
      }, _defineProperty(_label_text, "watchAdBtn", "WATCH VIDEO"), _defineProperty(_label_text, "shareAdHelp", "Get more tips!"), 
      _defineProperty(_label_text, "shareAdHelpText", "Invite friend to get 3 tips!"), 
      _defineProperty(_label_text, "shareAdBtn", "INVITE"), _defineProperty(_label_text, "later", "LATER"), 
      _defineProperty(_label_text, "replay", "Okay"), _defineProperty(_label_text, "timeisup", "watch a video for more time!"), 
      _defineProperty(_label_text, "timeisup_share", "share to friends \nfor more time now!"), 
      _defineProperty(_label_text, "timeisup_end", "Out of time!"), _defineProperty(_label_text, "noads", "Video is missing! \nTry again later."), 
      _defineProperty(_label_text, "inv_again", "This player can't receive messages right now.close this dialog to refresh this list."), 
      _defineProperty(_label_text, "queding", "OKAY"), _defineProperty(_label_text, "receiveGift", "Wow! you got 1 help!"), 
      _defineProperty(_label_text, "getCoins", "Get more coins."), _defineProperty(_label_text, "getCoinText", "Watch a video to get 100 coins?"), 
      _defineProperty(_label_text, "getHearts", "Get more hearts."), _defineProperty(_label_text, "getHeartText", "Pick a friend or watch a ads to get 5 hearts."), 
      _defineProperty(_label_text, "giftTitel", "Gifts"), _defineProperty(_label_text, "settingTitel", "Setting"), 
      _defineProperty(_label_text, "langTitel", "Language:"), _defineProperty(_label_text, "musicTitel", "music:"), 
      _defineProperty(_label_text, "moveTitel", "Get more steps\uff01"), _defineProperty(_label_text, "unlockTitel", "Unlock Stage"), 
      _defineProperty(_label_text, "unlockText", "Invite friend to unlock the rest stage"), 
      _defineProperty(_label_text, "failTitel", "fail"), _defineProperty(_label_text, "videoText", "Video is missing.Please try again."), 
      _defineProperty(_label_text, "shareText", "Please\xa0share\xa0to\xa0another\xa0group\xa0or\xa0friend."), 
      _label_text)
    };
    cc._RF.pop();
  }, {} ],
  es: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5f8aTtyHxGh6vbhg7qoj0q", "es");
    "use strict";
    var _label_text;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages["es"] = {
      label_text: (_label_text = {
        helpTip: "Deslice la pantalla para guiar la direcci\xf3n y encontrar la salida del laberinto.",
        watchAdTip: "\xa1Mira el anuncio de video \n para desbloquear este nivel por adelantado!",
        watchAdBtn: "Desbloquear nivel",
        invBtn: "Invita amigos",
        watchAdHelip: "Mire el video \n obtenga 5 ayuda!"
      }, _defineProperty(_label_text, "watchAdBtn", "Invitaci\xf3n"), _defineProperty(_label_text, "shareAdHelp", "Obtenga m\xe1s consejos!"), 
      _defineProperty(_label_text, "shareAdHelpText", "\xa1Invita a tus amigos a obtener 3 consejos!"), 
      _defineProperty(_label_text, "shareAdBtn", "Compartir"), _defineProperty(_label_text, "later", "Cerrar"), 
      _defineProperty(_label_text, "replay", "Est\xe1 bien"), _defineProperty(_label_text, "timeisup", "\xa1Mira el video para tener m\xe1s tiempo!"), 
      _defineProperty(_label_text, "timeisup_share", "\xa1Comp\xe1rtalo con amigos, \n extra 5 segundos!"), 
      _defineProperty(_label_text, "timeisup_end", "\xa1Se acab\xf3 el tiempo!"), _defineProperty(_label_text, "noads", "El anuncio falta temporalmente, \n por favor intente m\xe1s tarde."), 
      _defineProperty(_label_text, "inv_again", "No se pueden enviar invitaciones a los usuarios actuales, intente invitar a otros usuarios."), 
      _defineProperty(_label_text, "queding", "Determinar"), _defineProperty(_label_text, "receiveGift", "Felicidades! \xa1Obt\xe9n ayuda!"), 
      _defineProperty(_label_text, "getCoins", "Consigue m\xe1s monedas"), _defineProperty(_label_text, "getCoinText", "Mira el video para obtener 100 monedas de oro?"), 
      _defineProperty(_label_text, "getHearts", "Obtenga m\xe1s fuerza f\xedsica."), _defineProperty(_label_text, "getHeartText", "Invita a un amigo o mira un video para obtener 5 puntos fuertes individuales"), 
      _defineProperty(_label_text, "giftTitel", "Paquete de regalo"), _defineProperty(_label_text, "settingTitel", "Ajuste"), 
      _defineProperty(_label_text, "langTitel", "Idioma:"), _defineProperty(_label_text, "musicTitel", "M\xfasica:"), 
      _defineProperty(_label_text, "moveTitel", "Out of moves!"), _defineProperty(_label_text, "moveTitel", "Obtenga m\xe1s pasos!"), 
      _defineProperty(_label_text, "unlockTitel", "Desbloquear nivel"), _defineProperty(_label_text, "unlockText", "Invita a tus amigos a desbloquear el nivel"), 
      _defineProperty(_label_text, "failTitel", "FAIL"), _defineProperty(_label_text, "videoText", "Video falta. Por favor, intentelo de nuevo."), 
      _defineProperty(_label_text, "shareText", "Por favor compartir a otro grupo de o amigo."), 
      _label_text)
    };
    cc._RF.pop();
  }, {} ],
  facebook111: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de06etC19tFMbU3EZT0VK+O", "facebook111");
    "use strict";
    var Utils = require("../Utils/Utils");
    var SDK_AD = require("./script/sdk_ad");
    var GAME_CHECK_URL = "https://haiwai.31home.com:8003/games.detail";
    var GAME_RECOMMEND_URL = "https://haiwai.31home.com:8003/games.recommend";
    var GAME_STAT_URL = "https://haiwai.31home.com:8003/games.stat";
    var ELoadState = {
      AD_LOADING: "AD_LOADING",
      AD_LOAD_SUCCESS: "AD_LOAD_SUCCESS",
      AD_LOAD_FAIL: "AD_LOAD_FAIL",
      AD_COMPLETE: "AD_COMPLETE"
    };
    var GM_PIDS = [ 0x5b7d1cf0050f3, 0x63feaccfa70df ];
    var video_ad_ids = "160840521263423_160841467929995";
    var interstitial_ad_ids = "160840521263423_160841827929959";
    var game_id = "160840521263423";
    var MyPlayer = {};
    var interstitialCount = 2;
    var videoOn = 1;
    var interstitialOn = 1;
    var interstitialOp = 0;
    var FB_SDK = function FB_SDK() {
      this.cb = null;
      this.videoAd = null;
      this.videoAdState = null;
      this.InterstitialAd = null;
      this.InterstitialAdState = null;
      this.sdk_ad = null;
    };
    FB_SDK.prototype.getGameId = function() {
      return game_id;
    };
    FB_SDK.prototype.openVideoAd = function() {
      return videoOn >= 1;
    };
    FB_SDK.prototype.openinterstitialAd = function() {
      return interstitialOn >= 1;
    };
    FB_SDK.prototype.getInterstitialCount = function() {
      return interstitialCount;
    };
    FB_SDK.prototype.isPlayOpAD = function() {
      var test = 10 * cc.random0To1();
      return test <= interstitialOp;
    };
    FB_SDK.prototype.setUp = function(video_on, interstitial_on, interstitial_count, interstitial_op) {
      console.log("setUp__interstitialCount", interstitial_count);
      console.log("interstitialCount", interstitialCount);
      interstitialCount = interstitial_count;
      videoOn = video_on;
      interstitialOn = interstitial_on;
      interstitialOp = interstitial_op;
      console.log("__________________interstitialCount:", interstitialCount);
      if (interstitialOn >= 1 && interstitialOp >= 1) {
        var sdkADNode = cc.find("Canvas/sdk_ad");
        null != sdkADNode && (this.sdk_ad = sdkADNode.getComponent(SDK_AD));
        this.reLoadOpAd();
      }
    };
    FB_SDK.prototype.switchGameAsync = function(game_id) {
      if ("undefined" === typeof FBInstant) return false;
      FBInstant.switchGameAsync(game_id).catch(function(e) {});
    };
    FB_SDK.prototype.reLoadOpAd = function() {
      cc.log("reLoadOpAd:");
      if (null != this.sdk_ad && interstitialOn >= 1 && interstitialOp >= 1) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (4 == xhr.readyState && 200 == xhr.status) {
            var response = JSON.parse(xhr.responseText);
            console.log("______________response", response);
            var code = response.code;
            if (500 != code) {
              var data = response.data.rows[0];
              if (null != data) {
                var pic3 = data.pic3;
                var pic2 = data.pic2;
                var pic1 = data.pic1;
                var gid = data.game_id;
                self.sdk_ad.setAd(pic3, pic2, pic1, gid);
              }
            }
          }
        };
        xhr.open("GET", GAME_RECOMMEND_URL + "?game_id=" + game_id + "&amount=1", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        console.log(GAME_RECOMMEND_URL + "?game_id=" + game_id + "&amount=1");
      }
    };
    FB_SDK.prototype.init = function() {
      this.initOP();
      if ("undefined" === typeof FBInstant) {
        var _i18n = require("LanguageData");
        _i18n.init("en");
        return;
      }
      this.loadVideoAd();
      this.loadInterstitialAd();
      MyPlayer.name = FBInstant.player.getName();
      cc.loader.load(FBInstant.player.getPhoto(), function(err, texture) {
        MyPlayer.head = new cc.SpriteFrame(texture);
      });
      MyPlayer.id = FBInstant.player.getID();
      var locale = FBInstant.getLocale();
      var i18n = require("LanguageData");
      i18n.init("en");
    };
    FB_SDK.prototype.initOP = function() {
      var self = this;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (4 == xhr.readyState && 200 == xhr.status) {
          var response = JSON.parse(xhr.responseText);
          console.log("response", response);
          var code = response.code;
          if (500 != code) {
            var data = response.data;
            var interstitial_op = data.interstitial_op;
            var interstitial_count = data.interstitial_count;
            var video_on = data.video_on;
            var interstitial_on = data.interstitial_on;
            self.setUp(video_on, interstitial_on, interstitial_count, interstitial_op);
          }
        }
      };
      xhr.open("GET", GAME_CHECK_URL + "?game_id=" + SDK().getGameId(), true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send();
    };
    FB_SDK.prototype.isGM = function() {
      if ("undefined" === typeof FBInstant) return false;
      var playerID = FBInstant.player.getID();
      return Utils.inArray(playerID, GM_PIDS);
    };
    FB_SDK.prototype.clearData = function() {
      if ("undefined" === typeof FBInstant) return false;
      SDK().setScore({
        all: 0
      }, null);
      SDK().setScore({
        my_help: 0
      }, null);
      var bid = 1;
      for (var mid = 1; mid <= 6; mid++) {
        for (var lid = 1; lid <= 100; lid++) {
          var param = {};
          param[bid + "_" + mid + "_" + lid] = 0;
          this.setScore(param, null);
          var param1 = {};
          param1[bid + "_" + mid + "_" + lid + "_moves"] = 0;
          this.setScore(param1, null);
        }
        var param2 = {};
        param2[bid + "_" + mid] = 0;
        this.setScore(param2, null);
        var param3 = {};
        param3["unlock_" + bid + "_" + mid] = 0;
        SDK().setScore(param3, null);
      }
    };
    FB_SDK.prototype.getLocale = function() {
      if ("undefined" === typeof FBInstant) return;
      return FBInstant.getLocale();
    };
    FB_SDK.prototype.canCreateShortcutAsync = function(cb) {
      if ("undefined" === typeof FBInstant) return;
      FBInstant.canCreateShortcutAsync().then(function(canCreateShortcut) {
        canCreateShortcut ? FBInstant.createShortcutAsync().then(function() {
          null != cb && cb(true);
        }).catch(function() {
          null != cb && cb(false);
        }) : null != cb && cb(false);
      });
    };
    FB_SDK.prototype.share = function(score, cb) {
      if ("undefined" === typeof FBInstant) {
        null != cb && cb(true);
        return;
      }
      var self = this;
      FBInstant.context.chooseAsync().then(function() {
        console.log("FBInstant.context.getID():", FBInstant.context.getID());
        self.doShare(score);
        null != cb && cb(true);
      }).catch(function(e) {
        console.log("catch", e);
        null != e.code && "SAME_CONTEXT" == e.code && null != cb && cb(false);
      });
    };
    FB_SDK.prototype.doShare = function(score) {
      var self = this;
      var en_text = self.getName() + " finish " + score + " missions,Can you beat me?";
      var cn_text = self.getName() + "\u5411\u4f60\u53d1\u8d77\u6311\u6218\uff01\u4ed6\u5df2\u7ecf\u5230\u4e86 " + score + " \u5c42\uff01";
      var framePath = "texture2d/game_icon";
      cc.loader.loadRes(framePath, cc.Texture2D, function(err, texture) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = 600;
        canvas.height = 420;
        var image = texture.getHtmlElementObj();
        ctx.drawImage(image, 0, 0);
        var base64Picture = canvas.toDataURL("image/png");
        FBInstant.updateAsync({
          action: "CUSTOM",
          cta: "Play Game",
          template: "join_fight",
          image: base64Picture,
          text: en_text,
          data: {
            myReplayData: "..."
          },
          strategy: "IMMEDIATE",
          notification: "NO_PUSH"
        }).then(function() {});
      });
    };
    FB_SDK.prototype.loadInterstitialAd = function() {
      if ("undefined" === typeof FBInstant) return;
      if (!this.openinterstitialAd()) return;
      FBInstant.getInterstitialAdAsync(interstitial_ad_ids).then(function(interstitial) {
        this.InterstitialAd = interstitial;
        this.InterstitialAdState = ELoadState.AD_LOADING;
        return this.InterstitialAd.loadAsync();
      }.bind(this)).catch(function(e) {}.bind(this)).then(function() {
        this.InterstitialAdState = ELoadState.AD_LOAD_SUCCESS;
      }.bind(this));
    };
    FB_SDK.prototype.stat = function(type, gid) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (4 == xhr.readyState && 200 == xhr.status) var response = JSON.parse(xhr.responseText);
      };
      xhr.open("GET", GAME_STAT_URL + "?game_id=" + gid + "&type=" + type, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send();
    };
    FB_SDK.prototype.onOpAdBtnClicked = function() {
      null != this.sdk_ad && this.sdk_ad.onPlayBtnClicked();
    };
    FB_SDK.prototype.getOpAdPic = function(picNum) {
      if (null == this.sdk_ad) return null;
      if (1 == picNum) return this.sdk_ad.pic1;
      if (2 == picNum) return this.sdk_ad.pic2;
      if (3 == picNum) return this.sdk_ad.pic3;
    };
    FB_SDK.prototype.showInterstitialAd = function(cb, noOp) {
      if ("undefined" === typeof FBInstant) {
        cb && cb(false);
        return;
      }
      console.log("FB_SDK.prototype.showInterstitialAd", this.InterstitialAd);
      console.log("this.sdk_ad", this.sdk_ad);
      console.log("interstitialOn", interstitialOn);
      if (interstitialOn < 1) return;
      if (null != this.sdk_ad && interstitialOp >= 1 && Utils.GetRandomNum(1, 10) <= interstitialOp && !noOp || null == this.InterstitialAd && null != this.sdk_ad && !noOp) {
        console.log("sdk_ad:", this.sdk_ad);
        this.sdk_ad.show();
        this.stat(1, this.sdk_ad.game_id);
        cb && cb(true);
      } else if (null != this.InterstitialAd) this.InterstitialAd.showAsync().then(function() {
        this.InterstitialAdState = ELoadState.AD_COMPLETE;
        cb && cb(true);
        this.loadInterstitialAd();
      }.bind(this)).catch(function(e) {
        this.InterstitialAdState = ELoadState.AD_COMPLETE;
        cb && cb(false);
      }.bind(this)); else {
        cb && cb(false);
        this.loadInterstitialAd();
      }
    };
    FB_SDK.prototype.loadVideoAd = function() {
      if ("undefined" === typeof FBInstant) return;
      if (!this.openVideoAd()) return;
      FBInstant.getRewardedVideoAsync(video_ad_ids).then(function(rewardedVideo) {
        this.videoAd = rewardedVideo;
        this.videoAdState = ELoadState.AD_LOADING;
        return this.videoAd.loadAsync();
      }.bind(this)).then(function() {
        this.videoAdState = ELoadState.AD_LOAD_SUCCESS;
      }.bind(this));
    };
    FB_SDK.prototype.hasVideoAd = function() {
      if ("undefined" === typeof FBInstant) return false;
      return null != this.videoAd;
    };
    FB_SDK.prototype.showVideoAd = function(cb) {
      if ("undefined" === typeof FBInstant) {
        cb && cb(true);
        return;
      }
      if (null != this.videoAd) this.videoAd.showAsync().then(function() {
        this.videoAdState = ELoadState.AD_COMPLETE;
        cb && cb(true);
        this.loadVideoAd();
      }.bind(this)).catch(function(e) {
        this.videoAdState = ELoadState.AD_COMPLETE;
        cb && cb(false);
        this.loadVideoAd();
      }.bind(this)); else {
        cb && cb(false);
        this.loadVideoAd();
      }
    };
    FB_SDK.prototype.getName = function() {
      if ("undefined" === typeof FBInstant) return "undefined";
      return FBInstant.player.getName();
    };
    FB_SDK.prototype.getItem = function(key, cb) {
      if ("undefined" === typeof FBInstant) {
        var score = JSON.parse(cc.sys.localStorage.getItem(key));
        "undefined" !== typeof score && null != score || (score = 0);
        cb(score, key);
      } else {
        var score = 0;
        FBInstant.player.getDataAsync([ "" + key ]).then(function(data) {
          score = "undefined" === typeof data[key] ? 0 : data[key];
          cb(score, key);
        });
      }
    };
    FB_SDK.prototype.setItem = function(param, cb) {
      if ("undefined" === typeof FBInstant) {
        for (var p in param) cc.sys.localStorage.setItem(p, param[p]);
        null != cb && cb();
      } else FBInstant.player.setDataAsync(param).then(function() {
        null != cb && cb();
      });
    };
    FB_SDK.prototype.playWith = function(id, score, cb) {
      if ("undefined" === typeof FBInstant) {
        null != cb && cb(true);
        return;
      }
      var self = this;
      FBInstant.context.createAsync(id).then(function() {
        self.doShare(score);
        cb(null != cb);
      });
    };
    FB_SDK.prototype.getFriendsInfo = function(cb) {
      if ("undefined" === typeof FBInstant) {
        console.log("set rank fail");
        null != cb && cb({});
      } else {
        var playerList = [];
        FBInstant.player.getConnectedPlayersAsync().then(function(players) {
          for (var i = 0; i < players.length; i += 1) {
            playerList[i] = {};
            playerList[i].id = players[i].getID();
            playerList[i].name = players[i].getName();
            playerList[i].headUrl = players[i].getPhoto();
          }
          null != cb && cb(playerList);
        });
      }
    };
    FB_SDK.prototype.getSelfInfo = function(cb) {
      if ("undefined" !== typeof FBInstant) {
        null != cb && cb(MyPlayer);
        return MyPlayer;
      }
      console.log("set rank fail");
      null !== cb && cb({});
    };
    FB_SDK.prototype.setRankScore = function(type, score, extra, cb) {
      if ("undefined" === typeof FBInstant) console.log("set rank fail"); else {
        var rankName;
        var contextID = FBInstant.context.getID();
        null != contextID && (contextID = "." + contextID);
        if (1 == type) {
          rankName = "Friends";
          if (null == contextID) {
            console.log(FBInstant.context.getType());
            contextID = "";
            return;
          }
        } else {
          if (2 != type) {
            null != cb && cb("wrong type");
            console.log("wrong type");
            return;
          }
          rankName = "World";
          contextID = "";
        }
        FBInstant.getLeaderboardAsync(rankName + contextID).then(function(leaderboard) {
          console.log(leaderboard.getName());
          return leaderboard.setScoreAsync(score, extra);
        }).then(function() {
          return console.log("Score saved");
        }).catch(function(error) {
          return console.error(error);
        });
      }
    };
    FB_SDK.prototype.getRankScore = function(type, cb) {
      if ("undefined" === typeof FBInstant) console.log("get self rank fail"); else {
        var rankName;
        var contextID = FBInstant.context.getID();
        null != contextID && (contextID = "." + contextID);
        if (1 == type) {
          rankName = "Friends";
          if (null == contextID) {
            console.log(FBInstant.context.getType());
            contextID = "";
            return;
          }
        } else {
          if (2 != type) {
            null != cb && cb("wrong type");
            console.log("wrong type");
            return;
          }
          rankName = "World";
          contextID = "";
        }
        FBInstant.getLeaderboardAsync(rankName + contextID).then(function(leaderboard) {
          return leaderboard.getPlayerEntryAsync();
        }).then(function(entry) {
          var info = {};
          info.id = entry.getPlayer().getID();
          info.no = entry.getRank();
          info.name = entry.getPlayer().getName();
          info.score = entry.getScore();
          info.headUrl = entry.getPlayer().getPhoto();
          cb(info);
        }).catch(function(error) {
          return console.error(error);
        });
      }
    };
    FB_SDK.prototype.getPercent = function(cb) {
      if ("undefined" === typeof FBInstant) {
        console.log("get rank fail");
        null != cb && cb();
      } else FBInstant.getLeaderboardAsync("World").then(function(leaderboard) {
        return leaderboard.getEntryCountAsync();
      }).then(function(count) {
        null != cb && cb(count);
      });
    };
    FB_SDK.prototype.getRank = function(type, num, offset, cb) {
      if ("undefined" === typeof FBInstant) console.log("get rank fail"); else {
        var rankName;
        var contextID = FBInstant.context.getID();
        null != contextID && (contextID = "." + contextID);
        if (1 == type) {
          rankName = "Friends";
          if (null == contextID) {
            console.log(FBInstant.context.getType());
            contextID = "";
            null != cb && cb([]);
            return;
          }
        } else {
          if (2 != type) {
            null != cb && cb("wrong type");
            console.log("wrong type");
            return;
          }
          rankName = "World";
          contextID = "";
        }
        var playerList = [];
        FBInstant.getLeaderboardAsync(rankName + contextID).then(function(leaderboard) {
          return leaderboard.getEntriesAsync(num, offset);
        }).then(function(entries) {
          for (var i = 0; i < entries.length; i++) {
            playerList[i] = {};
            playerList[i].id = entries[i].getPlayer().getID();
            playerList[i].no = entries[i].getRank();
            playerList[i].name = entries[i].getPlayer().getName();
            playerList[i].score = entries[i].getScore();
            playerList[i].headUrl = entries[i].getPlayer().getPhoto();
          }
          null != cb && cb(playerList);
        }).catch(function(error) {
          return console.error(error);
        });
      }
    };
    FB_SDK.prototype.postRankToMessage = function(type, cb) {
      if ("undefined" === typeof FBInstant) console.log("post rank fail"); else {
        var rankName;
        var contextID = FBInstant.context.getID();
        null != contextID && (contextID = "." + contextID);
        if (1 == type) {
          rankName = "Friends";
          if (null == contextID) {
            console.log(FBInstant.context.getType());
            contextID = "";
            return;
          }
        } else {
          if (2 != type) {
            null != cb && cb("wrong type");
            console.log("wrong type");
            return;
          }
          rankName = "World";
          contextID = "";
        }
        FBInstant.updateAsync({
          action: "LEADERBOARD",
          name: rankName + contextID
        }).then(function() {
          return console.log("Update Posted");
        }).catch(function(error) {
          return console.error(error);
        });
      }
    };
    module.exports = function() {
      var instance;
      return function() {
        instance || (instance = new FB_SDK());
        return instance;
      };
    }();
    cc._RF.pop();
  }, {
    "../Utils/Utils": "Utils",
    "./script/sdk_ad": "sdk_ad",
    LanguageData: "LanguageData"
  } ],
  facebook: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6542a5UC9RCqLxrtQE6lpYc", "facebook");
    "use strict";
    var Utils = require("./utils/SDKUtils");
    var SDK_AD = require("./script/sdk_ad");
    var GAME_CHECK_URL = "https://baidu.com:8003/games.detail";
    var GAME_RECOMMEND_URL = "https://baidu.com:8003/games.recommend";
    var GAME_STAT_URL = "https://baidu.com:8003/games.stat";
    var ELoadState = {
      AD_LOADING: "AD_LOADING",
      AD_LOAD_SUCCESS: "AD_LOAD_SUCCESS",
      AD_LOAD_FAIL: "AD_LOAD_FAIL",
      AD_COMPLETE: "AD_COMPLETE"
    };
    var sdkADName = "Canvas/sdk_ad";
    var video_ad_ids = "281530152603837_281532319270287";
    var interstitial_ad_ids = "281530152603837_281531689270350";
    var game_id = "281530152603837";
    var interstitialCount = 2;
    var videoOn = 1;
    var interstitialOn = 1;
    var interstitialOp = 0;
    var rankName_friends = "Friends";
    var rankName_world = "World";
    var MyPlayer = {};
    var FB_SDK = function FB_SDK() {
      this.cb = null;
      this.videoAd = null;
      this.videoAdState = null;
      this.InterstitialAd = null;
      this.InterstitialAdState = null;
      this.playTimes = 0;
      this.sdk_ad = null;
    };
    FB_SDK.prototype.init = function() {
      this.initOP();
      if ("undefined" === typeof FBInstant) {
        var i18n = require("LanguageData");
        return;
      }
      this.playTimes = 0;
      MyPlayer.name = FBInstant.player.getName();
      cc.loader.load(FBInstant.player.getPhoto(), function(err, texture) {
        MyPlayer.head = new cc.SpriteFrame(texture);
      });
      MyPlayer.id = FBInstant.player.getID();
      var locale = this.getLocale();
    };
    FB_SDK.prototype.initOP = function() {
      var self = this;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (4 == xhr.readyState && 200 == xhr.status) {
          var response = JSON.parse(xhr.responseText);
          console.log("response", response);
          var code = response.code;
          if (500 != code) {
            var data = response.data;
            var interstitial_op = data.interstitial_op;
            var interstitial_count = data.interstitial_count;
            var video_on = data.video_on;
            var interstitial_on = data.interstitial_on;
            self.setUp(video_on, interstitial_on, interstitial_count, interstitial_op);
          }
        }
      };
      xhr.open("GET", GAME_CHECK_URL + "?game_id=" + SDK().getGameId(), true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send();
    };
    FB_SDK.prototype.setUp = function(video_on, interstitial_on, interstitial_count, interstitial_op) {
      interstitialCount = interstitial_count;
      videoOn = video_on;
      interstitialOn = interstitial_on;
      interstitialOp = interstitial_op;
      if (interstitialOn >= 1 && interstitialOp >= 1) {
        var sdkADNode = cc.find(sdkADName);
        null != sdkADNode && (this.sdk_ad = sdkADNode.getComponent(SDK_AD));
        this.reLoadOpAd();
      }
    };
    FB_SDK.prototype.reLoadOpAd = function() {
      if (null != this.sdk_ad && interstitialOn >= 1 && interstitialOp >= 1) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (4 == xhr.readyState && 200 == xhr.status) {
            var response = JSON.parse(xhr.responseText);
            var code = response.code;
            if (500 != code) {
              var data = response.data.rows[0];
              if (null != data) {
                var pic = data.pic3;
                var gid = data.game_id;
                self.sdk_ad.setAd(pic, gid);
              }
            }
          }
        };
        xhr.open("GET", GAME_RECOMMEND_URL + "?game_id=" + game_id + "&amount=1", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
      }
    };
    FB_SDK.prototype.getRecommendGames = function(amount, cb) {
      var self = this;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (4 == xhr.readyState && 200 == xhr.status) {
          var response = JSON.parse(xhr.responseText);
          var code = response.code;
          500 != code ? null != cb && cb(true, response) : null != cb && cb(false, {});
        }
      };
      xhr.open("GET", GAME_RECOMMEND_URL + "?game_id=" + game_id + "&amount=" + amount, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send();
    };
    var numCount = 0;
    FB_SDK.prototype.getItem = function(key, cb) {
      var temp = cc.sys.localStorage.getItem(key);
      null != temp && null !== temp && "" != temp && "undefined" != temp || cc.sys.localStorage.setItem(key, null);
      if ("undefined" === typeof FBInstant) {
        var score = JSON.parse(cc.sys.localStorage.getItem(key));
        "undefined" !== typeof score && null != score || (score = 0);
        cb(score, key);
      } else {
        var score = 0;
        FBInstant.player.getDataAsync([ "" + key ]).then(function(data) {
          score = "undefined" === typeof data[key] ? 0 : data[key];
          cb(score, key);
        });
      }
    };
    FB_SDK.prototype.setItem = function(param, cb) {
      if ("undefined" === typeof FBInstant) {
        for (var p in param) cc.sys.localStorage.setItem(p, param[p]);
        null != cb && cb();
      } else FBInstant.player.setDataAsync(param).then(function() {
        null != cb && cb();
      });
    };
    FB_SDK.prototype.getLocale = function() {
      if ("undefined" === typeof FBInstant) return;
      return FBInstant.getLocale();
    };
    FB_SDK.prototype.getGameId = function() {
      return game_id;
    };
    FB_SDK.prototype.getName = function() {
      if ("undefined" === typeof FBInstant) return "undefined";
      return FBInstant.player.getName();
    };
    FB_SDK.prototype.canCreateShortcutAsync = function(cb) {
      if ("undefined" === typeof FBInstant) return;
      FBInstant.canCreateShortcutAsync().then(function(canCreateShortcut) {
        canCreateShortcut ? FBInstant.createShortcutAsync().then(function() {
          null != cb && cb(true);
        }).catch(function() {
          null != cb && cb(false);
        }) : null != cb && cb(false);
      });
    };
    FB_SDK.prototype.switchGameAsync = function(game_id) {
      if ("undefined" === typeof FBInstant) return false;
      FBInstant.switchGameAsync(game_id).catch(function(e) {});
    };
    FB_SDK.prototype.getCatalogAsync = function(cb) {
      if ("undefined" === typeof FBInstant) {
        null != cb && cb([]);
        return;
      }
      FBInstant.payments.getCatalogAsync().then(function(catalog) {
        console.log(catalog);
        cb(catalog);
      });
    };
    FB_SDK.prototype.purchaseAsync = function(productID, developerPayload, cb) {
      if ("undefined" === typeof FBInstant) {
        null != cb && cb(false, null);
        return;
      }
      FBInstant.payments.purchaseAsync({
        productID: productID,
        developerPayload: developerPayload
      }).then(function(purchase) {
        console.log(true, purchase);
        cb(purchase);
      }).catch(function(e) {
        cb(false, null);
      });
    };
    FB_SDK.prototype.getPurchasesAsync = function(cb) {
      if ("undefined" === typeof FBInstant) {
        null != cb && cb(false, null);
        return;
      }
      FBInstant.payments.getPurchasesAsync().then(function(purchases) {
        cb(purchases);
      }).catch(function(e) {
        cb([]);
      });
    };
    FB_SDK.prototype.consumePurchaseAsync = function(purchaseToken, cb) {
      if ("undefined" === typeof FBInstant) {
        null != cb && cb(false, null);
        return;
      }
      FBInstant.payments.consumePurchaseAsync(purchaseToken).then(function() {
        cb(true);
      }).catch(function(e) {
        cb(false);
      });
    };
    FB_SDK.prototype.share = function(score, cb) {
      if ("undefined" === typeof FBInstant) {
        null != cb && cb(true);
        return;
      }
      var self = this;
      FBInstant.context.chooseAsync().then(function() {
        self.doShare(score);
        null != cb && cb(true);
      }).catch(function(e) {
        null != e.code && "SAME_CONTEXT" == e.code && null != cb && cb(false);
      });
    };
    FB_SDK.prototype.doShare = function(score) {
      var self = this;
      var en_text = self.getName() + " finish " + score + " stars,Can you beat me?";
      var cn_text = self.getName() + "\u5411\u4f60\u53d1\u8d77\u6311\u6218\uff01\u4ed6\u5df2\u7ecf\u5230\u4e86 " + score + " \u5c42\uff01";
      var framePath = "texture2d/game_icon";
      cc.loader.loadRes(framePath, cc.Texture2D, function(err, texture) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = 600;
        canvas.height = 420;
        var image = texture.getHtmlElementObj();
        ctx.drawImage(image, 0, 0);
        var base64Picture = canvas.toDataURL("image/png");
        FBInstant.updateAsync({
          action: "CUSTOM",
          cta: "Play Game",
          template: "join_fight",
          image: base64Picture,
          text: en_text,
          data: {
            myReplayData: "..."
          },
          strategy: "IMMEDIATE",
          notification: "NO_PUSH"
        }).then(function() {});
      });
    };
    FB_SDK.prototype.shareBestScore3Times = function(key) {
      SDK().getItem("share_times", function(t) {
        var now = Math.floor(Date.now() / 1e3);
        if (null == t || t <= 0 || t - now < 0) {
          var param = {};
          param["share_times"] = now + 180;
          SDK().setItem(param, function() {
            SDK().shareBestScore(key);
          });
        }
      });
    };
    FB_SDK.prototype.shareBestScore = function(key, cb) {
      null != key && "" != key || (key = "all");
      this.getItem(key, function(score) {
        SDK().share(score, function(isCompleted) {
          cb && cb(isCompleted);
        });
      }.bind(this));
    };
    FB_SDK.prototype.plusPlayTimes = function() {
      this.playTimes++;
      if (this.playTimes > 1 && this.playTimes % this.getInterstitialCount() == 0 && this.playTimes >= this.getInterstitialCount() || this.getInterstitialCount() <= 1 && this.playTimes > 1) {
        var delayTime = 200 + 1e3 * Math.random();
        setTimeout(function() {
          this.showInterstitialAd(function(isCompleted) {
            console.log("\u64ad\u653eDone");
          }, false);
        }.bind(this), delayTime);
      }
      this.playTimes % 5 == 0 && this.canCreateShortcutAsync();
      5 == this.playTimes && this.shareBestScore("all", null);
    };
    FB_SDK.prototype.openVideoAd = function() {
      return videoOn >= 1;
    };
    FB_SDK.prototype.openinterstitialAd = function() {
      return interstitialOn >= 1;
    };
    FB_SDK.prototype.getInterstitialCount = function() {
      return interstitialCount;
    };
    FB_SDK.prototype.isPlayOpAD = function() {
      var test = 10 * cc.random0To1();
      return test <= interstitialOp;
    };
    FB_SDK.prototype.loadInterstitialAd = function() {
      if ("undefined" === typeof FBInstant) return;
      if (!this.openinterstitialAd()) return;
      FBInstant.getInterstitialAdAsync(interstitial_ad_ids).then(function(interstitial) {
        this.InterstitialAd = interstitial;
        this.InterstitialAdState = ELoadState.AD_LOADING;
        return this.InterstitialAd.loadAsync();
      }.bind(this)).catch(function(e) {}.bind(this)).then(function() {
        this.InterstitialAdState = ELoadState.AD_LOAD_SUCCESS;
      }.bind(this));
    };
    FB_SDK.prototype.showInterstitialAd = function(cb, noOp) {
      if (interstitialOn < 1) return;
      if (null != this.sdk_ad && interstitialOp >= 1 && Utils.GetRandomNum(1, 10) <= interstitialOp && !noOp || null == this.InterstitialAd && null != this.sdk_ad && !noOp) {
        console.log("sdk_ad:", this.sdk_ad);
        this.sdk_ad.show();
        this.stat(1, this.sdk_ad.game_id);
        cb && cb(true);
      } else if (null != this.InterstitialAd) {
        if ("undefined" === typeof FBInstant) {
          cb && cb(false);
          return;
        }
        this.InterstitialAd.showAsync().then(function() {
          this.InterstitialAdState = ELoadState.AD_COMPLETE;
          cb && cb(true);
          this.loadInterstitialAd();
        }.bind(this)).catch(function(e) {
          this.InterstitialAdState = ELoadState.AD_COMPLETE;
          cb && cb(false);
        }.bind(this));
      } else {
        cb && cb(false);
        this.loadInterstitialAd();
      }
    };
    FB_SDK.prototype.loadVideoAd = function() {
      if ("undefined" === typeof FBInstant) return;
      if (!this.openVideoAd()) return;
      FBInstant.getRewardedVideoAsync(video_ad_ids).then(function(rewardedVideo) {
        this.videoAd = rewardedVideo;
        this.videoAdState = ELoadState.AD_LOADING;
        return this.videoAd.loadAsync();
      }.bind(this)).then(function() {
        this.videoAdState = ELoadState.AD_LOAD_SUCCESS;
      }.bind(this));
    };
    FB_SDK.prototype.hasVideoAd = function() {
      if ("undefined" === typeof FBInstant) return false;
      return null != this.videoAd;
    };
    FB_SDK.prototype.showVideoAd = function(cb) {
      if ("undefined" === typeof FBInstant) {
        cb && cb(false);
        return;
      }
      if (null != this.videoAd) this.videoAd.showAsync().then(function() {
        this.videoAdState = ELoadState.AD_COMPLETE;
        cb && cb(true);
        this.loadVideoAd();
      }.bind(this)).catch(function(e) {
        this.videoAdState = ELoadState.AD_COMPLETE;
        cb && cb(false);
        this.loadVideoAd();
      }.bind(this)); else {
        cb && cb(false);
        this.loadVideoAd();
      }
    };
    FB_SDK.prototype.stat = function(type, gid) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (4 == xhr.readyState && 200 == xhr.status) var response = JSON.parse(xhr.responseText);
      };
      xhr.open("GET", GAME_STAT_URL + "?game_id=" + gid + "&type=" + type, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send();
    };
    FB_SDK.prototype.playWith = function(id, score, cb) {
      if ("undefined" === typeof FBInstant) {
        null != cb && cb(true);
        return;
      }
      var self = this;
      FBInstant.context.createAsync(id).then(function() {
        self.doShare(score);
        cb(null != cb);
      }).catch(cb(false));
    };
    FB_SDK.prototype.getSelfInfo = function(cb) {
      if ("undefined" !== typeof FBInstant) {
        null != cb && cb(MyPlayer);
        return MyPlayer;
      }
      console.log("set rank fail");
      null !== cb && cb({});
    };
    FB_SDK.prototype.setRankScore = function(type, score, extra, cb) {
      if ("undefined" === typeof FBInstant) console.log("set rank fail"); else {
        var rankName;
        var contextID = FBInstant.context.getID();
        null != contextID && (contextID = "." + contextID);
        if (1 == type) {
          rankName = rankName_friends;
          if (null == contextID) {
            console.log(FBInstant.context.getType());
            contextID = "";
            return;
          }
        } else {
          if (2 != type) {
            null != cb && cb("wrong type");
            console.log("wrong type");
            return;
          }
          rankName = rankName_world;
          contextID = "";
        }
        FBInstant.getLeaderboardAsync(rankName + contextID).then(function(leaderboard) {
          console.log(leaderboard.getName());
          return leaderboard.setScoreAsync(score, extra);
        }).then(function() {
          return console.log("Score saved");
        }).catch(function(error) {
          return console.error(error);
        });
      }
    };
    FB_SDK.prototype.getRankScore = function(type, cb) {
      if ("undefined" === typeof FBInstant) console.log("get self rank fail"); else {
        var rankName;
        var contextID = FBInstant.context.getID();
        null != contextID && (contextID = "." + contextID);
        if (1 == type) {
          rankName = rankName_friends;
          if (null == contextID) {
            console.log(FBInstant.context.getType());
            contextID = "";
            return;
          }
        } else {
          if (2 != type) {
            null != cb && cb("wrong type");
            console.log("wrong type");
            return;
          }
          rankName = rankName_world;
          contextID = "";
        }
        FBInstant.getLeaderboardAsync(rankName + contextID).then(function(leaderboard) {
          return leaderboard.getPlayerEntryAsync();
        }).then(function(entry) {
          var info = {};
          info.id = entry.getPlayer().getID();
          info.no = entry.getRank();
          info.name = entry.getPlayer().getName();
          info.score = entry.getScore();
          info.headUrl = entry.getPlayer().getPhoto();
          cb(info);
        }).catch(function(error) {
          return console.error(error);
        });
      }
    };
    FB_SDK.prototype.getPercent = function(cb) {
      if ("undefined" === typeof FBInstant) {
        console.log("get rank fail");
        null != cb && cb();
      } else FBInstant.getLeaderboardAsync("World").then(function(leaderboard) {
        return leaderboard.getEntryCountAsync();
      }).then(function(count) {
        null != cb && cb(count);
      });
    };
    FB_SDK.prototype.getRank = function(type, num, offset, cb) {
      if ("undefined" === typeof FBInstant) console.log("get rank fail"); else {
        var rankName;
        var contextID = FBInstant.context.getID();
        null != contextID && (contextID = "." + contextID);
        if (1 == type) {
          rankName = rankName_friends;
          if (null == contextID) {
            console.log(FBInstant.context.getType());
            contextID = "";
            null != cb && cb([]);
            return;
          }
        } else {
          if (2 != type) {
            null != cb && cb("wrong type");
            console.log("wrong type");
            return;
          }
          rankName = rankName_world;
          contextID = "";
        }
        var playerList = [];
        FBInstant.getLeaderboardAsync(rankName + contextID).then(function(leaderboard) {
          return leaderboard.getEntriesAsync(num, offset);
        }).then(function(entries) {
          for (var i = 0; i < entries.length; i++) {
            playerList[i] = {};
            playerList[i].id = entries[i].getPlayer().getID();
            playerList[i].no = entries[i].getRank();
            playerList[i].name = entries[i].getPlayer().getName();
            playerList[i].score = entries[i].getScore();
            playerList[i].headUrl = entries[i].getPlayer().getPhoto();
          }
          null != cb && cb(playerList);
        }).catch(function(error) {
          return console.error(error);
        });
      }
    };
    FB_SDK.prototype.getFriendsRank = function(type, num, offset, cb) {
      if ("undefined" === typeof FBInstant) {
        console.log("getFriendsInfo fail");
        null != cb && cb({});
      } else {
        var rankName;
        var contextID = FBInstant.context.getID();
        null != contextID && (contextID = "." + contextID);
        if (1 == type) {
          rankName = rankName_friends;
          if (null == contextID) {
            console.log(FBInstant.context.getType());
            contextID = "";
            null != cb && cb([]);
            return;
          }
        } else {
          if (2 != type) {
            null != cb && cb("wrong type");
            console.log("wrong type");
            return;
          }
          rankName = rankName_world;
          contextID = "";
        }
        var playerList = [];
        FBInstant.getLeaderboardAsync(rankName + contextID).then(function(leaderboard) {
          return leaderboard.getConnectedPlayerEntriesAsync(num, offset);
        }).then(function(entries) {
          for (var i = 0; i < entries.length; i += 1) {
            playerList[i] = {};
            playerList[i].id = entries[i].getPlayer().getID();
            playerList[i].name = entries[i].getPlayer().getName();
            playerList[i].headUrl = entries[i].getPlayer().getPhoto();
            playerList[i].No = entries[i].getRank();
            playerList[i].score = entries[i].getScore();
          }
          null != cb && cb(playerList);
        });
      }
    };
    FB_SDK.prototype.postRankToMessage = function(type, cb) {
      if ("undefined" === typeof FBInstant) console.log("post rank fail"); else {
        var rankName;
        var contextID = FBInstant.context.getID();
        null != contextID && (contextID = "." + contextID);
        if (1 == type) {
          rankName = rankName_friends;
          if (null == contextID) {
            console.log(FBInstant.context.getType());
            contextID = "";
            return;
          }
        } else {
          if (2 != type) {
            null != cb && cb("wrong type");
            console.log("wrong type");
            return;
          }
          rankName = rankName_world;
          contextID = "";
        }
        FBInstant.updateAsync({
          action: "LEADERBOARD",
          name: rankName + contextID
        }).then(function() {
          return console.log("Update Posted");
        }).catch(function(error) {
          return console.error(error);
        });
      }
    };
    module.exports = function() {
      var instance;
      return function() {
        instance || (instance = new FB_SDK());
        return instance;
      };
    }();
    cc._RF.pop();
  }, {
    "./script/sdk_ad": "sdk_ad",
    "./utils/SDKUtils": "SDKUtils",
    LanguageData: "LanguageData"
  } ],
  globals: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f774aa2KJxEp68y3WRvT7GZ", "globals");
    "use strict";
    window.SDK = require("../SDK/facebook");
    window.playTimesAD = 2;
    window.isDebug = false;
    window.wx == window.tt;
    window.lineWidth = 6;
    window.plusHelp = 5;
    window.openAllLevel = false;
    window.langArr = [ "English", "Portugu\xeas", "El espa\xf1ol", "\u092d\u093e\u0930\u0924 \u0917\u0923\u0930\u093e\u091c\u094d\u092f", "\u4e2d\u6587" ];
    window.nameArr = [ "en", "pt", "es", "in", "zh" ];
    window.D = {
      sdk: null
    };
    cc._RF.pop();
  }, {
    "../SDK/facebook": "facebook"
  } ],
  in: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "912d1ipPJ1OWJpXTL4aCmxu", "in");
    "use strict";
    var _label_text;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages["in"] = {
      label_text: (_label_text = {
        helpTip: "\u0926\u093f\u0936\u093e \u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093f\u0924 \u0915\u0930\u0928\u0947 \u0914\u0930 \u092d\u0942\u0932\u092d\u0941\u0932\u0948\u092f\u093e \u0915\u0947 \u092c\u093e\u0939\u0930 \u0928\u093f\u0915\u0932\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0938\u094d\u0915\u094d\u0930\u0940\u0928 \u0938\u094d\u0932\u093e\u0907\u0921 \u0915\u0930\u0947\u0902! !",
        watchAdTip: "\u0905\u0917\u094d\u0930\u093f\u092e \u092e\u0947\u0902 \u0907\u0938 \u0938\u094d\u0924\u0930 \u0915\u094b \u0905\u0928\u0932\u0949\u0915 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0935\u0940\u0921\u093f\u092f\u094b \u0935\u093f\u091c\u094d\u091e\u093e\u092a\u0928 \n \u0926\u0947\u0916\u0947\u0902!",
        watchAdBtn: "\u0938\u094d\u0924\u0930 \u0905\u0928\u0932\u0949\u0915 \u0915\u0930\u0947\u0902",
        invBtn: "\u0926\u094b\u0938\u094d\u0924\u094b\u0902 \u0915\u094b \u0906\u092e\u0902\u0924\u094d\u0930\u093f\u0924 \u0915\u0930\u0947\u0902",
        watchAdHelip: "\u0935\u0940\u0921\u093f\u092f\u094b \u0926\u0947\u0916\u0947\u0902 \n 5 \u0938\u0939\u093e\u092f\u0924\u093e \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902!"
      }, _defineProperty(_label_text, "watchAdBtn", "\u0906\u092e\u0902\u0924\u094d\u0930\u0923"), 
      _defineProperty(_label_text, "shareAdHelp", "\u0914\u0930 \u0938\u0941\u091d\u093e\u0935 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902!"), 
      _defineProperty(_label_text, "shareAdHelpText", "\u0926\u094b\u0938\u094d\u0924\u094b\u0902 \u0915\u094b 3 \u092f\u0941\u0915\u094d\u0924\u093f\u092f\u093e\u0901 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0906\u092e\u0902\u0924\u094d\u0930\u093f\u0924 \u0915\u0930\u0947\u0902!"), 
      _defineProperty(_label_text, "shareAdBtn", "\u0936\u0947\u092f\u0930"), _defineProperty(_label_text, "later", "\u092a\u093e\u0938"), 
      _defineProperty(_label_text, "replay", "\u0920\u0940\u0915"), _defineProperty(_label_text, "timeisup", "\u0905\u0927\u093f\u0915 \u0938\u092e\u092f \u092a\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0935\u0940\u0921\u093f\u092f\u094b \u0926\u0947\u0916\u0947\u0902!"), 
      _defineProperty(_label_text, "timeisup_share", "\u0926\u094b\u0938\u094d\u0924\u094b\u0902 \u0915\u0947 \u0938\u093e\u0925 \u0938\u093e\u091d\u093e \u0915\u0930\u0947\u0902, \n \u0905\u0924\u093f\u0930\u093f\u0915\u094d\u0924 5 \u0938\u0947\u0915\u0902\u0921!"), 
      _defineProperty(_label_text, "timeisup_end", "\u0938\u092e\u092f \u0916\u0924\u094d\u092e \u0939\u094b \u0917\u092f\u093e \u0939\u0948!"), 
      _defineProperty(_label_text, "noads", "\u0935\u093f\u091c\u094d\u091e\u093e\u092a\u0928 \u0905\u0938\u094d\u0925\u093e\u092f\u0940 \u0930\u0942\u092a \u0938\u0947 \u0917\u093e\u092f\u092c \u0939\u0948, \n \u0915\u0943\u092a\u092f\u093e \u092c\u093e\u0926 \u092e\u0947\u0902 \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902\u0964"), 
      _defineProperty(_label_text, "inv_again", "\u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u094b \u0928\u093f\u092e\u0902\u0924\u094d\u0930\u0923 \u0928\u0939\u0940\u0902 \u092d\u0947\u091c \u0938\u0915\u0924\u0947 \u0939\u0948\u0902, \u0915\u0943\u092a\u092f\u093e \u0905\u0928\u094d\u092f \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u094b \u0906\u092e\u0902\u0924\u094d\u0930\u093f\u0924 \u0915\u0930\u0928\u0947 \u0915\u093e \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902\u0964"), 
      _defineProperty(_label_text, "queding", "\u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924"), 
      _defineProperty(_label_text, "receiveGift", "\u092c\u0927\u093e\u0908! \u0938\u0939\u093e\u092f\u0924\u093e \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902!"), 
      _defineProperty(_label_text, "getCoins", "\u0905\u0927\u093f\u0915 \u0938\u093f\u0915\u094d\u0915\u0947 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902\u0964"), 
      _defineProperty(_label_text, "getCoinText", "100 \u0938\u094d\u0935\u0930\u094d\u0923 \u0938\u093f\u0915\u094d\u0915\u0947 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0935\u0940\u0921\u093f\u092f\u094b \u0926\u0947\u0916\u0947\u0902?"), 
      _defineProperty(_label_text, "getHearts", "\u0905\u0927\u093f\u0915 \u0936\u093e\u0930\u0940\u0930\u093f\u0915 \u0936\u0915\u094d\u0924\u093f \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902\u0964"), 
      _defineProperty(_label_text, "getHeartText", "5 \u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u0936\u0915\u094d\u0924\u093f\u092f\u094b\u0902 \u0915\u094b \u092a\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0915\u093f\u0938\u0940 \u092e\u093f\u0924\u094d\u0930 \u0915\u094b \u0906\u092e\u0902\u0924\u094d\u0930\u093f\u0924 \u0915\u0930\u0947\u0902 \u092f\u093e \u0935\u0940\u0921\u093f\u092f\u094b \u0926\u0947\u0916\u0947\u0902"), 
      _defineProperty(_label_text, "giftTitel", "\u0909\u092a\u0939\u093e\u0930 \u092a\u0948\u0915\u0947\u091c"), 
      _defineProperty(_label_text, "settingTitel", "\u0938\u0947\u091f \u0915\u0930\u0947\u0902"), 
      _defineProperty(_label_text, "langTitel", "\u092d\u093e\u0937\u093e:"), _defineProperty(_label_text, "musicTitel", "\u0938\u0902\u0917\u0940\u0924:"), 
      _defineProperty(_label_text, "moveTitel", "\u0914\u0930 \u0915\u0926\u092e \u0909\u0920\u093e\u090f\u0902!"), 
      _defineProperty(_label_text, "unlockTitel", "\u0938\u094d\u0924\u0930 \u0905\u0928\u0932\u0949\u0915 \u0915\u0930\u0947\u0902"), 
      _defineProperty(_label_text, "unlockText", "\u0938\u094d\u0924\u0930 \u0915\u094b \u0905\u0928\u0932\u0949\u0915 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u092e\u093f\u0924\u094d\u0930\u094b\u0902 \u0915\u094b \u0906\u092e\u0902\u0924\u094d\u0930\u093f\u0924 \u0915\u0930\u0947\u0902"), 
      _defineProperty(_label_text, "failTitel", "\u0905\u0938\u092b\u0932"), _defineProperty(_label_text, "videoText", "\u0935\u0940\u0921\u093f\u092f\u094b \u0917\u0941\u092e \u0939\u0948\u0964 \u0915\u0943\u092a\u092f\u093e \u092a\u0941\u0928\u0903 \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902\u0964"), 
      _defineProperty(_label_text, "shareText", "\u090f\u0915 \u0914\u0930 \u0938\u092e\u0942\u0939 \u092f\u093e \u0926\u094b\u0938\u094d\u0924 \u0915\u094b \u0938\u093e\u091d\u093e \u0915\u0930\u0947\u0902\u0964"), 
      _label_text)
    };
    cc._RF.pop();
  }, {} ],
  "polyglot.min": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    (function(e, t) {
      "function" == typeof define && define.amd ? define([], function() {
        return t(e);
      }) : "object" == ("undefined" === typeof exports ? "undefined" : _typeof(exports)) ? module.exports = t(e) : e.Polyglot = t(e);
    })(void 0, function(e) {
      function t(e) {
        e = e || {}, this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en", 
        this.allowMissing = !!e.allowMissing, this.warn = e.warn || c;
      }
      function s(e) {
        var t, n, r, i = {};
        for (t in e) if (e.hasOwnProperty(t)) {
          n = e[t];
          for (r in n) i[n[r]] = t;
        }
        return i;
      }
      function o(e) {
        var t = /^\s+|\s+$/g;
        return e.replace(t, "");
      }
      function u(e, t, r) {
        var i, s, u;
        return null != r && e ? (s = e.split(n), u = s[f(t, r)] || s[0], i = o(u)) : i = e, 
        i;
      }
      function a(e) {
        var t = s(i);
        return t[e] || t.en;
      }
      function f(e, t) {
        return r[a(e)](t);
      }
      function l(e, t) {
        for (var n in t) "_" !== n && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}", "g"), t[n]));
        return e;
      }
      function c(t) {
        e.console && e.console.warn && e.console.warn("WARNING: " + t);
      }
      function h(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
      }
      t.VERSION = "0.4.3", t.prototype.locale = function(e) {
        return e && (this.currentLocale = e), this.currentLocale;
      }, t.prototype.extend = function(e, t) {
        var n;
        for (var r in e) e.hasOwnProperty(r) && (n = e[r], t && (r = t + "." + r), "object" == ("undefined" === typeof n ? "undefined" : _typeof(n)) ? this.extend(n, r) : this.phrases[r] = n);
      }, t.prototype.clear = function() {
        this.phrases = {};
      }, t.prototype.replace = function(e) {
        this.clear(), this.extend(e);
      }, t.prototype.t = function(e, t) {
        var n, r;
        return t = null == t ? {} : t, "number" == typeof t && (t = {
          smart_count: t
        }), "string" == typeof this.phrases[e] ? n = this.phrases[e] : "string" == typeof t._ ? n = t._ : this.allowMissing ? n = e : (this.warn('Missing translation for key: "' + e + '"'), 
        r = e), "string" == typeof n && (t = h(t), r = u(n, this.currentLocale, t.smart_count), 
        r = l(r, t)), r;
      }, t.prototype.has = function(e) {
        return e in this.phrases;
      };
      var n = "||||", r = {
        chinese: function chinese(e) {
          return 0;
        },
        german: function german(e) {
          return 1 !== e ? 1 : 0;
        },
        french: function french(e) {
          return e > 1 ? 1 : 0;
        },
        russian: function russian(e) {
          return e % 10 === 1 && e % 100 !== 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
        },
        czech: function czech(e) {
          return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
        },
        polish: function polish(e) {
          return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
        },
        icelandic: function icelandic(e) {
          return e % 10 !== 1 || e % 100 === 11 ? 1 : 0;
        }
      }, i = {
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
  pt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b879aUD7d5JHJbnkZ5rdQt8", "pt");
    "use strict";
    var _label_text;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages["pt"] = {
      label_text: (_label_text = {
        helpTip: "Deslize a tela para guiar a dire\xe7\xe3o e encontrar a sa\xedda do labirinto! !",
        watchAdTip: "Veja o an\xfancio de v\xeddeo\n para desbloquear este n\xedvel antecipadamente!",
        watchAdBtn: "N\xedvel de desbloqueio",
        invBtn: "Convide amigos",
        watchAdHelip: "Assista ao v\xeddeo\n receba 5 ajuda!"
      }, _defineProperty(_label_text, "watchAdBtn", "Convite"), _defineProperty(_label_text, "shareAdHelp", "Obtenha mais dicas!"), 
      _defineProperty(_label_text, "shareAdHelpText", "Convide amigos para receber 3 dicas!"), 
      _defineProperty(_label_text, "shareAdBtn", "Compartilhar"), _defineProperty(_label_text, "later", "Fechar"), 
      _defineProperty(_label_text, "replay", "Okay"), _defineProperty(_label_text, "timeisup", "Assista ao v\xeddeo para ganhar mais tempo!"), 
      _defineProperty(_label_text, "timeisup_share", "Compartilhe com os amigos,\n extra 5 segundos!"), 
      _defineProperty(_label_text, "timeisup_end", "O tempo acabou!"), _defineProperty(_label_text, "noads", "O an\xfancio est\xe1 temporariamente ausente,\n por favor tente mais tarde."), 
      _defineProperty(_label_text, "inv_again", "N\xe3o \xe9 poss\xedvel enviar convites para usu\xe1rios atuais, por favor, tente convidar outros usu\xe1rios."), 
      _defineProperty(_label_text, "queding", "Determinar"), _defineProperty(_label_text, "receiveGift", "Parab\xe9ns! Consiga uma ajuda!"), 
      _defineProperty(_label_text, "getCoins", "Consiga mais moedas."), _defineProperty(_label_text, "getCoinText", "Assista ao v\xeddeo para receber 100 moedas de ouro?"), 
      _defineProperty(_label_text, "getHearts", "Obtenha mais for\xe7a f\xedsica."), _defineProperty(_label_text, "getHeartText", "Convide um amigo ou assista a um v\xeddeo para obter cinco pontos fortes individuais"), 
      _defineProperty(_label_text, "giftTitel", "Pacote de presente"), _defineProperty(_label_text, "settingTitel", "Configura\xe7\xe3o"), 
      _defineProperty(_label_text, "langTitel", "Idioma:"), _defineProperty(_label_text, "musicTitel", "Music:"), 
      _defineProperty(_label_text, "moveTitel", "Obtenha mais passos\uff01"), _defineProperty(_label_text, "unlockTitel", "N\xedvel de desbloqueio"), 
      _defineProperty(_label_text, "unlockText", "Convide amigos para desbloquear o n\xedvel"), 
      _defineProperty(_label_text, "failTitel", "fail"), _defineProperty(_label_text, "videoText", "V\xeddeo Falta. Por favor, tente de novo."), 
      _defineProperty(_label_text, "shareText", "Por favor parte para outro Grupo ou Amigo."), 
      _label_text)
    };
    cc._RF.pop();
  }, {} ],
  sdk_ad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bbceGVbB9GqazOzZL48/et", "sdk_ad");
    "use strict";
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
        hasAd: false
      },
      onLoad: function onLoad() {},
      show: function show() {
        null != this.node && this.node.setPosition(cc.v2(0, 0));
      },
      setAd: function setAd(pic, game_id) {
        if (null == this.node || null == this.adSprite) return;
        this.pic = pic;
        this.game_id = game_id;
        var self = this;
        var remoteUrl = this.pic;
        cc.loader.load(remoteUrl, function(err, texture) {
          self.adSprite.spriteFrame = new cc.SpriteFrame(texture);
        });
        this.hasAd = true;
      },
      onCloseBtnClicked: function onCloseBtnClicked() {
        this.node.setPosition(cc.v2(1500, 1500));
        SDK().reLoadOpAd();
        SDK().stat(2, this.game_id);
      },
      onPlayBtnClicked: function onPlayBtnClicked() {
        this.onCloseBtnClicked();
        SDK().switchGameAsync(this.game_id);
      }
    });
    cc._RF.pop();
  }, {} ],
  zh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "052f3sYjnRNDY4qAIzWph5c", "zh");
    "use strict";
    var _label_text;
    function _defineProperty(obj, key, value) {
      key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      }) : obj[key] = value;
      return obj;
    }
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages["zh"] = {
      label_text: (_label_text = {
        helpTip: "\u6ed1\u52a8\u5c4f\u5e55\u6307\u5f15\u65b9\u5411\uff0c\u627e\u51fa\u8ff7\u5bab\u7684\u51fa\u53e3\uff01!",
        watchAdTip: "\u89c2\u770b\u89c6\u9891\u5e7f\u544a \n\u53ef\u63d0\u524d\u89e3\u9501\u6b64\u5173\u5361!",
        watchAdBtn: "\u89e3\u9501\u5173\u5361",
        invBtn: "\u9080\u8bf7\u597d\u53cb",
        watchAdHelip: "\u89c2\u770b\u89c6\u9891  \n\u53ef\u83b7\u5f975\u4e2a\u5e2e\u52a9!"
      }, _defineProperty(_label_text, "watchAdBtn", "\u9080\u8bf7"), _defineProperty(_label_text, "shareAdHelp", "\u83b7\u5f97\u66f4\u591a\u63d0\u793a!"), 
      _defineProperty(_label_text, "shareAdHelpText", "\u89c2\u770b\u89c6\u9891\u53ef\u4ee5\u83b7\u5f975\u4e2a\u63d0\u793a!"), 
      _defineProperty(_label_text, "shareAdBtn", "\u5206\u4eab"), _defineProperty(_label_text, "later", "\u5173\u95ed"), 
      _defineProperty(_label_text, "replay", "\u597d\u7684"), _defineProperty(_label_text, "timeisup", "\u89c2\u770b\u89c6\u9891\u83b7\u5f97\u66f4\u591a\u65f6\u95f4!"), 
      _defineProperty(_label_text, "timeisup_share", "\u5206\u4eab\u7ed9\u597d\u53cb\u83b7\u5f97\n\u989d\u5916\u76845\u79d2\u65f6\u95f4!"), 
      _defineProperty(_label_text, "timeisup_end", "\u65f6\u95f4\u5230\u4e86!"), _defineProperty(_label_text, "noads", "\u5e7f\u544a\u6682\u65f6\u7f3a\u5931\uff0c\n\u8bf7\u7a0d\u540e\u5c1d\u8bd5\u3002"), 
      _defineProperty(_label_text, "inv_again", "\u4e0d\u80fd\u7ed9\u5f53\u524d\u7528\u6237\u53d1\u9001\u9080\u8bf7\uff0c\u8bf7\u5c1d\u8bd5\u9080\u8bf7\u5176\u4ed6\u7528\u6237."), 
      _defineProperty(_label_text, "queding", "\u786e\u5b9a"), _defineProperty(_label_text, "receiveGift", "\u606d\u559c\uff01\u83b7\u5f97\u4e00\u4e2a\u5e2e\u52a9!"), 
      _defineProperty(_label_text, "getCoins", "\u83b7\u53d6\u66f4\u591a\u7684\u91d1\u5e01\u3002"), 
      _defineProperty(_label_text, "getCoinText", "\u770b\u89c6\u9891\u6765\u83b7\u5f97100\u91d1\u5e01?"), 
      _defineProperty(_label_text, "getHearts", "\u83b7\u53d6\u66f4\u591a\u7684\u4f53\u529b\u3002"), 
      _defineProperty(_label_text, "getHeartText", "\u89c2\u770b\u89c6\u9891\u83b7\u5f97\u4e94\u4e2a\u4f53\u529b"), 
      _defineProperty(_label_text, "giftTitel", "\u793c\u5305"), _defineProperty(_label_text, "settingTitel", "\u8bbe\u7f6e"), 
      _defineProperty(_label_text, "langTitel", "\u8bed\u8a00:"), _defineProperty(_label_text, "musicTitel", "\u97f3\u4e50:"), 
      _defineProperty(_label_text, "moveTitel", "\u83b7\u5f97\u66f4\u591a\u6b65\u6570!"), 
      _defineProperty(_label_text, "unlockTitel", "\u89e3\u9501\u5173\u5361"), _defineProperty(_label_text, "unlockText", "\u9080\u8bf7\u597d\u53cb\u6765\u89e3\u9501\u5173\u5361"), 
      _defineProperty(_label_text, "failTitel", "\u5931\u8d25"), _defineProperty(_label_text, "videoText", "\u89c6\u9891\u4e0d\u89c1\u4e86\uff0c\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002"), 
      _defineProperty(_label_text, "shareText", "\u8bf7\u4e0e\u53e6\u4e00\u4e2a\u670b\u53cb\u6216\u7fa4\u7ec4\u5206\u4eab\u3002"), 
      _label_text)
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "globals", "GameApplication", "Player", "SoundManager", "ChannelID", "SDKManager", "TipView", "BaseBanner", "BaseChannel", "BaseNativeAd", "BaseRecorder", "BaseRewardAd", "BaseShare", "InterstitialAd", "LoginInterface", "NativeAdItemModel", "DevChannel", "DevLogin", "EventDispatcher", "GlobalEvent", "facebook", "facebook111", "OppoBannerAd", "OppoChannel", "OppoInsertAd", "OppoNativeAd", "OppoRewardAd", "sdk_ad", "MusicManager", "SoundView", "TTBanner", "TTChannel", "TTInterstitialAd", "TTLogin", "TTRecorder", "TTShare", "TTVideoAd", "SDKUtils", "VivoBannerAd", "VivoChannel", "VivoInsertAd", "VivoNativeAd", "VivoRewardAd", "AnimFunc", "NormalAnimation", "RotationForever", "ZoominForever", "ZoominForever1", "Enemy", "GameView", "HexCell", "Role", "Tower", "LevelView", "LoadLanguage", "LoadingView", "MainView", "RankView", "SDKInit", "SettingView", "TimeGift", "Utils", "en", "es", "in", "pt", "zh", "LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min" ]);