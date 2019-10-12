"use strict";
cc._RF.push(module, '1f80ed8vNdKa7XJYupJoJCU', 'BaseNativeAd');
// Script/SDK/base/BaseNativeAd.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = require('../event/EventDispatcher');

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseNativeAd = function (_EventDispatcher) {
    _inherits(BaseNativeAd, _EventDispatcher);

    _createClass(BaseNativeAd, [{
        key: 'getAdItems',


        // finish = false;//加载完成

        value: function getAdItems() {
            return this.adItems;
        }
    }]);

    function BaseNativeAd(id) {
        _classCallCheck(this, BaseNativeAd);

        var _this = _possibleConstructorReturn(this, (BaseNativeAd.__proto__ || Object.getPrototypeOf(BaseNativeAd)).call(this));

        _this.adUnitID = '';
        _this.nativeAd = null;
        _this.adItems = [];

        _this.adItems = [];
        _this.adUnitID = id;
        _this.init();
        return _this;
    }

    _createClass(BaseNativeAd, [{
        key: 'init',
        value: function init() {
            this.create(function (err) {
                console.log(' BaesNativeAd init err ', err);
                if (!err) {} else {
                    // this.reLoad();
                }
            });
        }
    }, {
        key: 'reLoad',
        value: function reLoad() {
            console.log(' reLoad ');
            // let id = setTimeout(() => {
            //     this.init();
            //     clearTimeout(id)
            // }, 8000)
        }
    }, {
        key: 'reportAdClick',
        value: function reportAdClick(adId) {}
    }, {
        key: 'reportAdShow',
        value: function reportAdShow(adId) {}
    }, {
        key: 'destroyNative',
        value: function destroyNative() {
            if (!this.nativeAd) {
                return;
            }
            this.destroy();
            // this.isShow = 0
            // this.finish = false;
            this.nativeAd = null;
        }
    }, {
        key: 'destroy',
        value: function destroy() {}
    }, {
        key: 'create',
        value: function create(callback) {}
    }]);

    return BaseNativeAd;
}(_EventDispatcher3.default);

exports.default = BaseNativeAd;
module.exports = exports['default'];

cc._RF.pop();