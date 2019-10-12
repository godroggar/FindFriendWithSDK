"use strict";
cc._RF.push(module, 'c1916b2DZhLcpjgNlvbb4cw', 'VivoBannerAd');
// Script/SDK/vivo/VivoBannerAd.js

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

var VivoBannerAd = function (_BaseBanner) {
    _inherits(VivoBannerAd, _BaseBanner);

    function VivoBannerAd() {
        _classCallCheck(this, VivoBannerAd);

        return _possibleConstructorReturn(this, (VivoBannerAd.__proto__ || Object.getPrototypeOf(VivoBannerAd)).apply(this, arguments));
    }

    _createClass(VivoBannerAd, [{
        key: 'create',
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
                console.log('banner  ad load success');
            }
            this.bannerAd.onLoad(onLoad);
            function onError(err) {
                callback(err);
                console.log('banner ad load fail  ', err);
                that.bannerAd.offError(onError);
            }
            this.bannerAd.onError(onError);

            function onClose() {
                that.bannerAd.offClose(onClose);
                // that.reLoad();
            }

            this.bannerAd.onClose(onClose);
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return 120;
        }
    }, {
        key: 'show',
        value: function show() {
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
    }]);

    return VivoBannerAd;
}(_BaseBanner3.default);

exports.default = VivoBannerAd;
module.exports = exports['default'];

cc._RF.pop();