"use strict";
cc._RF.push(module, '87317Q4zt9JQo2cDhDFnZaD', 'TTInterstitialAd');
// Script/SDK/tt/TTInterstitialAd.js

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

var TTInterstitialAd = function (_InterstitialAd) {
    _inherits(TTInterstitialAd, _InterstitialAd);

    function TTInterstitialAd(id) {
        _classCallCheck(this, TTInterstitialAd);

        var _this = _possibleConstructorReturn(this, (TTInterstitialAd.__proto__ || Object.getPrototypeOf(TTInterstitialAd)).call(this));

        _this.interstitialAd = null;
        _this.finish = false;

        _this.load(id);
        return _this;
    }

    _createClass(TTInterstitialAd, [{
        key: 'show',
        value: function show(func) {
            if (this.interstitialAd) {
                this.interstitialAd.show(function (code) {
                    cc.log(' insterstitailAd show result ', code);
                    if (!code) {
                        func(null);
                    } else {
                        func(code);
                    }
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

            // 创建插屏广告实例，提前初始化
            if (wx.createInterstitialAd) {
                this.interstitialAd = wx.createInterstitialAd({
                    adUnitId: id
                });
                this.interstitialAd.onLoad(function () {
                    cc.log('插屏 广告加载成功');
                    _this2.finish = true;
                });
                this.interstitialAd.onError(function (err) {
                    cc.log(err);
                });
                this.interstitialAd.onClose(function (res) {
                    cc.log('插屏 广告关闭');
                });
            }
        }

        // loaded(code){
        //     console.log(' InterstitailAd loaded code ',code)
        //     if(this.interstitialAd){
        //         this.interstitialAd.offLoad(this.loaded.bind(this))
        //     }
        //     this.finish = true
        // }

    }]);

    return TTInterstitialAd;
}(_InterstitialAd3.default);

exports.default = TTInterstitialAd;
module.exports = exports['default'];

cc._RF.pop();