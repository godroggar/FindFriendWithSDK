(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/vivo/VivoChannel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '12a69ER2v9Bzr2pKoAB4dyW', 'VivoChannel', __filename);
// Script/SDK/vivo/VivoChannel.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VivoChannel = function (_BaseChannel) {
    _inherits(VivoChannel, _BaseChannel);

    function VivoChannel(id, adIds) {
        _classCallCheck(this, VivoChannel);

        var _this = _possibleConstructorReturn(this, (VivoChannel.__proto__ || Object.getPrototypeOf(VivoChannel)).call(this, id));

        _this.appId = '';

        _this.appId = adIds.appId;
        _this.loginMgr = new _DevLogin2.default();
        cc.log(' qg.getSystemInfoSync().platformVersionCode ', qg.getSystemInfoSync().platformVersionCode);
        if (qg.getSystemInfoSync().platformVersionCode < 1031) {
            // 不支持广告
        } else {
                // 支持广告
                // this.bannerAd = new VivoBannerAd(adIds.bannerID)
                // this.interstitialAd = new VivoInsertAd(adIds.insertID)
                // this.rewardAd = new VivoRewardAd(adIds.rewardID)         
            }

        return _this;
    }

    _createClass(VivoChannel, [{
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
        value: function init() {}
    }]);

    return VivoChannel;
}(_BaseChannel3.default);

exports.default = VivoChannel;
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
        //# sourceMappingURL=VivoChannel.js.map
        