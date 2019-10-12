(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/tt/TTVideoAd.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '41234ij4stET6fTgrsMmKdm', 'TTVideoAd', __filename);
// Script/SDK/tt/TTVideoAd.js

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

var TTVideoAd = function (_BaseRewardAd) {
  _inherits(TTVideoAd, _BaseRewardAd);

  function TTVideoAd() {
    _classCallCheck(this, TTVideoAd);

    return _possibleConstructorReturn(this, (TTVideoAd.__proto__ || Object.getPrototypeOf(TTVideoAd)).apply(this, arguments));
  }

  _createClass(TTVideoAd, [{
    key: "createVideoAd",
    value: function createVideoAd(id) {
      var _this2 = this;

      if (!tt.createRewardedVideoAd) {
        return;
      }
      this.rewardedVideoAd = tt.createRewardedVideoAd({ adUnitId: id });
      if (this.rewardedVideoAd) {
        this.rewardedVideoAd.onLoad(function () {
          // this.loadFinish = true
        });
        this.rewardedVideoAd.onError(function (err) {

          console.log(err);
          ToastController.instance().show('视频加载失败，无法获得奖励');
          if (_this2.rewardCallback) {
            _this2.rewardCallback(false);
          }
        });
        this.rewardedVideoAd.onClose(function (res) {
          // this.resume()
          // GlobalEvent.instance().resume();
          _this2.state = _BaseRewardAd2.RewardADState.close;
          // this.publish(RewardADState.close)
          // 用户点击了【关闭广告】按钮
          // 小于 2.1.0 的基础库版本，res 是一个 undefined
          if (res && res.isEnded || res === undefined) {
            // 正常播放结束，可以下发游戏奖励
            if (_this2.rewardCallback) {
              _this2.rewardCallback(true);
            }
          } else {
            // 播放中途退出，不下发游戏奖励
            if (_this2.rewardCallback) {
              _this2.rewardCallback(false);
              // ToastController.instance().intoLayer('ui.not_finish');
            }
          }
        });
      }
    }
  }]);

  return TTVideoAd;
}(_BaseRewardAd3.default);

exports.default = TTVideoAd;
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
        //# sourceMappingURL=TTVideoAd.js.map
        