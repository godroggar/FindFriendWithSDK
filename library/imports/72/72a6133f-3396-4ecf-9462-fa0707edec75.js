"use strict";
cc._RF.push(module, '72a61M/M5ZOz5Ri+gcH7ex1', 'VivoInsertAd');
// Script/SDK/vivo/VivoInsertAd.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InterstitialAd2 = require('../base/InterstitialAd');

var _InterstitialAd3 = _interopRequireDefault(_InterstitialAd2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VivoInsertAd = function (_InterstitialAd) {
    _inherits(VivoInsertAd, _InterstitialAd);

    function VivoInsertAd(id) {
        _classCallCheck(this, VivoInsertAd);

        var _this = _possibleConstructorReturn(this, (VivoInsertAd.__proto__ || Object.getPrototypeOf(VivoInsertAd)).call(this));

        _this.interstitialAd = null;
        _this.finish = false;

        _this.load(id);
        return _this;
    }

    _createClass(VivoInsertAd, [{
        key: 'show',
        value: function show(func) {
            var that = this;
            if (this.interstitialAd) {
                this.interstitialAd.show().then(function () {
                    D.sdk.getBannerAd().pause();
                }).catch(function (err) {
                    that.interstitialAd.load().then(function () {
                        that.interstitialAd.show();
                        D.sdk.getBannerAd().pause();
                    }).catch(function (err) {
                        console.log(' show insert err 2 ', err);
                    });
                });
            }
        }
    }, {
        key: 'isLoad',
        value: function isLoad() {
            return this.finish;
        }
    }, {
        key: 'load',
        value: function load(id) {
            var _this2 = this;

            this.interstitialAd = qg.createInterstitialAd({
                posId: id
            });
            this.interstitialAd.onLoad(function () {
                console.log('插屏广告加载成功');
                _this2.finish = true;
            });
            this.interstitialAd.onError(function (err) {
                console.log('VivoInsertAd load fail ', err);
                _this2.finish = false;
            });
            this.interstitialAd.onClose(function () {
                D.sdk.getBannerAd().resume();
            });
        }
    }]);

    return VivoInsertAd;
}(_InterstitialAd3.default);

exports.default = VivoInsertAd;
module.exports = exports['default'];

cc._RF.pop();