"use strict";
cc._RF.push(module, '7c6b2eyQGRERZHiwHc7bTF6', 'OppoChannel');
// Script/SDK/oppo/OppoChannel.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OppoChannel = function (_BaseChannel) {
    _inherits(OppoChannel, _BaseChannel);

    function OppoChannel(id, adIds) {
        _classCallCheck(this, OppoChannel);

        var _this = _possibleConstructorReturn(this, (OppoChannel.__proto__ || Object.getPrototypeOf(OppoChannel)).call(this, id));

        _this.appId = '';
        _this.adIds = null;

        _this.adIds = adIds;
        _this.appId = adIds.appId;
        _this.loginMgr = new _DevLogin2.default();
        // cc.log(' qg.getSystemInfoSync().platformVersionCode ', qg.getSystemInfoSync().platformVersionCode)
        // if (qg.getSystemInfoSync().platformVersionCode < 1031) {
        //     // 不支持广告
        // } else {
        //     // 支持广告

        // }

        return _this;
    }

    _createClass(OppoChannel, [{
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
            return '观看视频';
        }
    }, {
        key: "showShare",
        value: function showShare(title, func) {
            this.openRewardAd(function (result) {
                if (result) {
                    func();
                }
            });
        }
    }, {
        key: "init",
        value: function init() {
            var that = this;
            qg.initAdService({
                appId: this.appId,
                isDebug: true,
                success: function success(res) {
                    // console.log("initAdService success",this.adIds);

                    // this.bannerAd = new OppoBannerAd(this.adIds.bannerID)
                    // console.log("initAdService  1111 vsuccess");
                    // this.interstitialAd = new OppoInsertAd(this.adIds.insertID)
                    // console.log("initAdService  22222 vsuccess");
                    // this.rewardAd = new OppoRewardAd(this.adIds.rewardID)   
                    // console.log("initAdService  33333 vsuccess");
                    // this.nativeAd = new OppoNativeAd(this.adIds.nativeID)  
                    // console.log("initAdService  44444 vsuccess");                  
                },
                fail: function fail(res) {
                    console.log("initAdService fail:" + res.code + res.msg);
                },
                complete: function complete(res) {
                    console.log("initAdService complete");
                }
            });
        }
    }]);

    return OppoChannel;
}(_BaseChannel3.default);

exports.default = OppoChannel;
module.exports = exports["default"];

cc._RF.pop();