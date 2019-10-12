(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/oppo/OppoInsertAd.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0206dD0yDtDv7joApv196ZJ', 'OppoInsertAd', __filename);
// Script/SDK/oppo/OppoInsertAd.js

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

var OppoInsertAd = function (_InterstitialAd) {
    _inherits(OppoInsertAd, _InterstitialAd);

    function OppoInsertAd(id) {
        _classCallCheck(this, OppoInsertAd);

        var _this = _possibleConstructorReturn(this, (OppoInsertAd.__proto__ || Object.getPrototypeOf(OppoInsertAd)).call(this));

        _this.interstitialAd = null;
        _this.finish = false;

        _this.load(id);
        return _this;
    }

    _createClass(OppoInsertAd, [{
        key: 'show',
        value: function show(func) {
            cc.log(' show insert ad ');
            var that = this;
            if (this.interstitialAd) {

                this.interstitialAd.load();
                // this.interstitialAd.show().then(() => {
                //     // D.sdk.getBannerAd().pause();
                // }).catch((err) => {
                //         that.interstitialAd.load().then(() => {
                //             that.interstitialAd.show()
                //             // D.sdk.getBannerAd().pause();
                //         }).catch((err)=>{

                //         })
                //     })
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

            this.interstitialAd = qg.createInsertAd({
                posId: id
            });

            cc.log(' insert ad laod ', id);
            this.interstitialAd.onLoad(function () {
                console.log('插屏广告加载成功');
                _this2.finish = true;
                _this2.interstitialAd.show();
            });
            this.interstitialAd.onError(function (err) {
                console.log('VivoInsertAd load fail ', err);
                _this2.finish = false;
            });
            // this.interstitialAd.onClose(() => {
            //     D.sdk.getBannerAd().resume();
            // })
        }
    }]);

    return OppoInsertAd;
}(_InterstitialAd3.default);

exports.default = OppoInsertAd;
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
        //# sourceMappingURL=OppoInsertAd.js.map
        