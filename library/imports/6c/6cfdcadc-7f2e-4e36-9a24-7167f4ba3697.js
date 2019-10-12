"use strict";
cc._RF.push(module, '6cfdcrcfy5ONpokcWf0ujaX', 'TTBanner');
// Script/SDK/tt/TTBanner.js

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

var TTBanner = function (_BaseBanner) {
    _inherits(TTBanner, _BaseBanner);

    function TTBanner() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TTBanner);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TTBanner.__proto__ || Object.getPrototypeOf(TTBanner)).call.apply(_ref, [this].concat(args))), _this), _this.bannerHeight = 0, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TTBanner, [{
        key: 'create',
        value: function create(callback) {
            var winSize = tt.getSystemInfoSync();

            // console.log(winSize);
            // let bannerHeight = 120;
            var bannerWidth = 200;
            this.bannerHeight = bannerWidth / 16 * 9;
            this.destroyBanner();
            if (!tt.createBannerAd) {
                return;
            }
            this.bannerAd = tt.createBannerAd({
                adUnitId: this.adUnitID,
                style: {
                    left: (winSize.windowWidth - bannerWidth) / 2,
                    top: winSize.windowHeight - bannerWidth / 16 * 9, // 根据系统约定尺寸计算出广告高度
                    width: bannerWidth
                }
            });
            var that = this;
            function onLoad() {
                //
                callback(null);
                console.log('banner 广告加载成功');
                that.bannerAd.offLoad(onLoad);
            }
            this.bannerAd.onLoad(onLoad);
            function onError(err) {
                callback(err);
                console.log('banner 广告加载失败 ', err);
                that.bannerAd.offError(this);
            }
            this.bannerAd.onError(onError);
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this.bannerHeight;
        }
    }, {
        key: 'show',
        value: function show() {
            if (!tt.createBannerAd) {
                return;
            }
            this.bannerAd.show();
        }
    }, {
        key: 'hide',
        value: function hide() {
            if (!tt.createBannerAd) {
                return;
            }
            this.bannerAd.hide();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (!tt.createBannerAd) {
                return;
            }
            this.bannerAd.destroy();
        }
    }]);

    return TTBanner;
}(_BaseBanner3.default);

exports.default = TTBanner;
module.exports = exports['default'];

cc._RF.pop();