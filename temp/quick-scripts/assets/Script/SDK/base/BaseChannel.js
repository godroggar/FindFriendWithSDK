(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/base/BaseChannel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7a19bA5FGtPyoNylbdrLgkS', 'BaseChannel', __filename);
// Script/SDK/base/BaseChannel.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isNull = function isNull(obj) {
    return obj == null || obj == undefined;
};

var BaseChannel = function () {

    // protected exchagneVolume:ExchangeVolume;

    function BaseChannel(id) {
        _classCallCheck(this, BaseChannel);

        this.id = id;
    }

    _createClass(BaseChannel, [{
        key: 'getRewardAd',
        value: function getRewardAd() {
            return this.rewardAd;
        }
    }, {
        key: 'getBannerAd',
        value: function getBannerAd() {
            return this.bannerAd;
        }
    }, {
        key: 'getShare',
        value: function getShare() {
            return this.share;
        }
    }, {
        key: 'getID',
        value: function getID() {
            return this.id;
        }
    }, {
        key: 'isHaveNativeAd',
        value: function isHaveNativeAd() {
            return this.nativeAd != undefined;
        }
    }, {
        key: 'reportAdClick',
        value: function reportAdClick(adId) {
            if (this.isHaveNativeAd()) {
                this.nativeAd.reportAdClick(adId);
            }
        }
    }, {
        key: 'getBannerHeight',
        value: function getBannerHeight() {
            if (this.isHaveBannerAd()) {
                return this.bannerAd.getHeight();
            }
            return 0;
        }
    }, {
        key: 'nativeAddEventListener',
        value: function nativeAddEventListener(eventName, func, target) {
            if (this.isHaveNativeAd()) {
                cc.log(' nativeAddEventListener ', this.nativeAd);
                this.nativeAd.addEventListener(eventName, func, target);
            }
        }
    }, {
        key: 'reportAdShow',
        value: function reportAdShow(adId) {
            if (this.isHaveNativeAd()) {
                this.nativeAd.reportAdShow(adId);
            }
        }
    }, {
        key: 'getAdItems',
        value: function getAdItems() {
            if (this.isHaveNativeAd()) {
                this.nativeAd.getAdItems();
            }
            return [];
        }
    }, {
        key: 'isHaveBannerAd',
        value: function isHaveBannerAd() {
            console.log("isHaveBannerAd" + this.bannerAd != undefined);
            return this.bannerAd != undefined;
        }
    }, {
        key: 'isHaveStore',
        value: function isHaveStore() {
            return this.payMgr != undefined;
        }

        /**
         * 
         */

    }, {
        key: 'isHaveShare',
        value: function isHaveShare() {
            return this.share != undefined;
        }

        // 初始化结束

    }, {
        key: 'initFinish',
        value: function initFinish() {}

        //初始化sdk

    }, {
        key: 'init',
        value: function init() {
            // cc.log(" ",this.data);

        }
    }, {
        key: 'recorderStart',
        value: function recorderStart(obj) {
            console.log('recorderStart this.isHaveRecorder()  ', this.isHaveRecorder());
            if (this.isHaveRecorder()) {
                this.recorder.start(obj);
            }
        }
    }, {
        key: 'getRecorder',
        value: function getRecorder() {
            return this.recorder;
        }
    }, {
        key: 'recorderStop',
        value: function recorderStop() {
            var isSave = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            console.log('recorderStop this.isHaveRecorder()  ', this.isHaveRecorder(), isSave);
            if (this.isHaveRecorder()) {
                this.recorder.stop(isSave);
            }
        }

        //添加sdk代码

    }, {
        key: 'addScript',
        value: function addScript(url) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = "" + this.id;
            script.onload = this.initFinish.bind(this);
            script.src = url;
            script.onerror = function () {
                // script.src = url;
                cc.error(" load script error ", url);
            };
            head.appendChild(script);
        }

        /**
         * 显示商城 如果没有不重写
         */

    }, {
        key: 'showStore',
        value: function showStore() {}
        /**
         * 免费复活
         */

    }, {
        key: 'freeRevive',
        value: function freeRevive() {}
    }, {
        key: 'login',
        value: function login() {
            this.loginMgr.login();
        }
    }, {
        key: 'logout',
        value: function logout() {
            this.loginMgr.logout();
        }
    }, {
        key: 'showBanner',
        value: function showBanner() {
            if (this.bannerAd) {
                console.log("show banner");
                this.bannerAd.showBanner();
            } else {
                console.log("no banner");
            }
        }
    }, {
        key: 'hideBanner',
        value: function hideBanner() {
            if (this.bannerAd) {
                this.bannerAd.hideBanner();
            }
        }
    }, {
        key: 'showShare',
        value: function showShare(title, func, isShowRecorder) {
            if (this.isHaveShare()) {
                this.share.share(title, function (result) {
                    if (result) {
                        func();
                        //D.control.UITipCback(1)
                    } else {}
                }, isShowRecorder);
            } else {
                func();
            }
        }
    }, {
        key: 'activeSkillLabel',
        value: function activeSkillLabel() {
            return '分享释放';
        }

        // hideShare() {

        // }

        // getExchangeVolume(){
        //     return this.exchagneVolume;
        // }


    }, {
        key: 'openRewardAd',
        value: function openRewardAd(func) {
            if (this.isHaveRewardAd()) {
                this.rewardAd.show(function (isFinish) {
                    if (isFinish) {
                        func(true);
                    } else {
                        func(false);
                    }
                });
            } else {
                func(true);
            }
        }
    }, {
        key: 'isHaveRewardAd',
        value: function isHaveRewardAd() {
            return !isNull(this.rewardAd);
        }
    }, {
        key: 'getRewardAdState',
        value: function getRewardAdState() {
            if (this.rewardAd) {
                return this.rewardAd.getState();
            }
            return RewardADState.close;
        }
    }, {
        key: 'isHaveFollow',
        value: function isHaveFollow() {
            return false;
        }
    }, {
        key: 'isHaveRecorder',
        value: function isHaveRecorder() {
            return !isNull(this.recorder);
        }
    }, {
        key: 'showImage',
        value: function showImage(imageUrl) {}
    }, {
        key: 'jumpToApp',
        value: function jumpToApp(appID) {}
    }, {
        key: 'getAds',
        value: function getAds(num, func) {}
    }, {
        key: 'isHaveInterstitalAd',
        value: function isHaveInterstitalAd() {
            return !isNull(this.interstitialAd);
        }
    }, {
        key: 'showInterstitialAd',
        value: function showInterstitialAd(func) {
            if (this.isHaveInterstitalAd()) {
                this.interstitialAd.show(func);
            }
        }
    }, {
        key: 'intoLobby',
        value: function intoLobby() {}
    }, {
        key: 'isHaveGameBox',
        value: function isHaveGameBox() {
            return false;
        }
    }, {
        key: 'isHaveRank',
        value: function isHaveRank() {
            return false;
        }
    }, {
        key: 'postMessage',
        value: function postMessage(message) {}
    }, {
        key: 'vibarate',
        value: function vibarate() {
            if (ShakeManager.instance().getFlag()) {
                this.vibrateShort();
            }
        }
    }, {
        key: 'vibrateShort',
        value: function vibrateShort() {}
    }, {
        key: 'createGameClubButton',
        value: function createGameClubButton() {}
    }, {
        key: 'hideGameClubButton',
        value: function hideGameClubButton() {}
    }, {
        key: 'showGameClubButton',
        value: function showGameClubButton() {}
    }]);

    return BaseChannel;
}();

exports.default = BaseChannel;
module.exports = exports['default'];

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=BaseChannel.js.map
        