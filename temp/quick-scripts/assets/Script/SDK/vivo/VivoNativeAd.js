(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/vivo/VivoNativeAd.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ddfc7y5rrNDW5SiZxCwUA5r', 'VivoNativeAd', __filename);
// Script/SDK/vivo/VivoNativeAd.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseNativeAd2 = require('../base/BaseNativeAd');

var _BaseNativeAd3 = _interopRequireDefault(_BaseNativeAd2);

var _NativeAdItemModel = require('../base/NativeAdItemModel');

var _NativeAdItemModel2 = _interopRequireDefault(_NativeAdItemModel);

var _ChannelID = require('../ChannelID');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VivoNativeAd = function (_BaseNativeAd) {
    _inherits(VivoNativeAd, _BaseNativeAd);

    function VivoNativeAd() {
        _classCallCheck(this, VivoNativeAd);

        return _possibleConstructorReturn(this, (VivoNativeAd.__proto__ || Object.getPrototypeOf(VivoNativeAd)).apply(this, arguments));
    }

    _createClass(VivoNativeAd, [{
        key: 'create',
        value: function create(callback) {
            this.destroyNative();
            this.nativeAd = qg.createNativeAd({
                posId: this.adUnitID
            });

            var that = this;
            function onLoad(res) {
                that.nativeAd.offLoad(this);
                callback(null);
                console.log('banner  ad load success');
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
                console.log('banner ad load fail  ', err);
                that.nativeAd.offError(this);
            }
            this.nativeAd.onError(onError);
        }
    }, {
        key: 'reportAdClick',
        value: function reportAdClick(adId) {
            if (!this.nativeAd) {
                return;
            }
            this.nativeAd.reportAdClick({
                adId: adId
            });
        }
    }, {
        key: 'reportAdShow',
        value: function reportAdShow(adId) {
            if (!this.nativeAd) {
                return;
            }
            this.nativeAd.reportAdShow({
                adId: adId
            });
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.nativeAd.destroy();
        }
    }]);

    return VivoNativeAd;
}(_BaseNativeAd3.default);

exports.default = VivoNativeAd;
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
        //# sourceMappingURL=VivoNativeAd.js.map
        