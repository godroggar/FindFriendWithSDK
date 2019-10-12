(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/base/BaseRewardAd.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bc0cazfRXFDWZ+moWebrvFj', 'BaseRewardAd', __filename);
// Script/SDK/base/BaseRewardAd.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RewardADState = exports.RewardADState = (_temp = _class = function RewardADState() {
    _classCallCheck(this, RewardADState);
}, _class.close = 0, _class.open = 1, _temp);

var BaseRewardAd = function () {
    function BaseRewardAd(id) {
        _classCallCheck(this, BaseRewardAd);

        this.state = RewardADState.close;
        this.rewardCallback = null;

        this.createVideoAd(id);
    }

    _createClass(BaseRewardAd, [{
        key: 'getState',
        value: function getState() {
            return this.state;
        }
    }, {
        key: 'createVideoAd',
        value: function createVideoAd(id) {}
    }, {
        key: 'show',
        value: function show(callback) {
            var _this = this;

            if (!this.rewardedVideoAd) {
                callback(false);
                return;
            }
            this.rewardCallback = callback;
            this.rewardedVideoAd.show().then(function () {
                _this.state = RewardADState.open;
            }).catch(function () {
                // 失败重试
                _this.rewardedVideoAd.load().then(function () {
                    _this.rewardedVideoAd.show();
                    _this.state = RewardADState.open;
                    D.sdk.hideBanner();
                }).catch(function (err) {
                    console.log('激励视频 广告显示失败');
                    callback(false);
                });
            });
        }
    }, {
        key: 'callback',
        value: function callback(num) {}
    }]);

    return BaseRewardAd;
}();

exports.default = BaseRewardAd;

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
        //# sourceMappingURL=BaseRewardAd.js.map
        