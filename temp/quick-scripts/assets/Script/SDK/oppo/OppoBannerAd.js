(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/oppo/OppoBannerAd.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '97dd87vjaVAlpyvWUqF4Gue', 'OppoBannerAd', __filename);
// Script/SDK/oppo/OppoBannerAd.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseBanner2 = require('../base/BaseBanner');

var _BaseBanner3 = _interopRequireDefault(_BaseBanner2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OppoBannerAd = function (_BaseBanner) {
    _inherits(OppoBannerAd, _BaseBanner);

    function OppoBannerAd() {
        _classCallCheck(this, OppoBannerAd);

        return _possibleConstructorReturn(this, (OppoBannerAd.__proto__ || Object.getPrototypeOf(OppoBannerAd)).apply(this, arguments));
    }

    _createClass(OppoBannerAd, [{
        key: 'create',
        value: function create(callback) {
            cc.log(' create BaseBanner ad laod this.adUnitID', this.adUnitID);

            this.destroyBanner();
            this.bannerAd = qg.createBannerAd({
                posId: this.adUnitID,
                style: {}
            });

            var that = this;
            function onLoad() {
                that.bannerAd.offShow(onLoad);
                callback(null);
                console.log('banner  ad load success');
            }
            this.bannerAd.onShow(onLoad);
            function onError(err) {
                callback(err);
                console.log('banner ad load fail  ', err);
                that.bannerAd.offError(onError);
            }
            this.bannerAd.onError(onError);

            function onClose() {
                that.bannerAd.offHide(onClose);
                // that.reLoad();
            }

            this.bannerAd.onHide(onClose);
        }
    }, {
        key: 'show',
        value: function show() {
            cc.log('show  OppoBanner');
            this.bannerAd.show();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.bannerAd.hide();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.bannerAd.destroy();
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return 120;
        }
    }]);

    return OppoBannerAd;
}(_BaseBanner3.default);

exports.default = OppoBannerAd;
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
        //# sourceMappingURL=OppoBannerAd.js.map
        