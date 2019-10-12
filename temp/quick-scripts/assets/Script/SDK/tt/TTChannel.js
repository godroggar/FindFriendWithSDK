(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/tt/TTChannel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a02e0ACiLFCArHpszp0cbGQ', 'TTChannel', __filename);
// Script/SDK/tt/TTChannel.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TTChannel = function (_BaseChannel) {
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

    _createClass(TTChannel, [{
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
                current: imgUrl, // 当前显示图片的http链接
                urls: [imgUrl] // 需要预览的图片http链接列表
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
    }]);

    return TTChannel;
}(_BaseChannel3.default);

exports.default = TTChannel;
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
        //# sourceMappingURL=TTChannel.js.map
        