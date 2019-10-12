(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/vivo/VivoRewardAd.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a30f2tPeFZIv5IafIMh8UR7', 'VivoRewardAd', __filename);
// Script/SDK/vivo/VivoRewardAd.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseRewardAd2 = require("../base/BaseRewardAd");

var _BaseRewardAd3 = _interopRequireDefault(_BaseRewardAd2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VivoRewardAd = function (_BaseRewardAd) {
    _inherits(VivoRewardAd, _BaseRewardAd);

    function VivoRewardAd() {
        _classCallCheck(this, VivoRewardAd);

        return _possibleConstructorReturn(this, (VivoRewardAd.__proto__ || Object.getPrototypeOf(VivoRewardAd)).apply(this, arguments));
    }

    _createClass(VivoRewardAd, [{
        key: "createVideoAd",
        value: function createVideoAd(id) {
            var _this2 = this;

            this.rewardedVideoAd = qg.createRewardedVideoAd({
                posId: id
            });
            this.rewardedVideoAd.onLoad(function () {
                console.log("激励视频已加载");
                // this.isFinish = true;
                // callback(null)
                // this.isFinish = true;
            });
            this.rewardedVideoAd.onError(function (err) {
                console.log("激励视频异常", err);
                if (_this2.rewardCallback) {
                    _this2.rewardCallback(false);
                }
                D.control.showTip(function () {
                    _this2.show(_this2.rewardCallback);
                });
            });
            this.rewardedVideoAd.onClose(function (res) {
                // GlobalEvent.instance().resume()
                _this2.state = _BaseRewardAd2.RewardADState.close;
                if (res && res.isEnded) {
                    console.log("正常播放结束，可以下发游戏奖励");
                    _this2.rewardCallback(true);
                } else {
                    console.log("播放中途退出，不下发游戏奖励");
                    _this2.rewardCallback(false);
                }
                // this.load();
            });
        }
    }]);

    return VivoRewardAd;
}(_BaseRewardAd3.default);

exports.default = VivoRewardAd;
module.exports = exports["default"];

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
        //# sourceMappingURL=VivoRewardAd.js.map
        