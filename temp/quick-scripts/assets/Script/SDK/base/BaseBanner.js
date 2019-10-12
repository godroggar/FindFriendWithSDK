(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/base/BaseBanner.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ff269NLg05HNbS8BbPVyYzL', 'BaseBanner', __filename);
// Script/SDK/base/BaseBanner.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseBanner = function () {
    //加载完成

    function BaseBanner(id) {
        _classCallCheck(this, BaseBanner);

        this.adUnitID = '';
        this.isShow = 0;
        this.finish = false;
        this.bannerAd = null;
        this.isShowing = false;

        this.adUnitID = id;
        this.init();
    } // 游戏逻辑是否要求显示

    _createClass(BaseBanner, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.create(function (err) {
                if (!err) {
                    _this.finish = true;
                    if (_this.isShow == 1) {
                        _this.showBanner();
                    } else if (_this.isShow == 2) {
                        _this.hideBanner();
                    }
                } else {
                    _this.reLoad();
                }
            });
        }
    }, {
        key: 'reLoad',
        value: function reLoad() {
            var _this2 = this;

            console.log(' reLoad ');
            var id = setTimeout(function () {
                _this2.init();
                clearTimeout(id);
            }, 8000);
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return 0;
        }
    }, {
        key: 'showBanner',
        value: function showBanner() {
            cc.log(' show banner =====================');
            this.isShow = 1;
            if (!this.finish) {
                return;
            }
            if (this.isShowing) {
                return;
            }
            this.isShowing = true;
            if (!this.bannerAd) {
                return;
            }
            this.show();
        }
    }, {
        key: 'hideBanner',
        value: function hideBanner() {
            if (!this.bannerAd) {
                return;
            }
            this.isShow = 2;
            if (!this.finish) {
                return;
            }
            if (!this.isShowing) {
                return;
            }
            this.isShowing = false;
            this.hide();
        }
    }, {
        key: 'destroyBanner',
        value: function destroyBanner() {
            if (!this.bannerAd) {
                return;
            }
            this.destroy();
            this.isShow = 0;
            this.finish = false;
            this.bannerAd = null;
        }
    }, {
        key: 'pause',
        value: function pause() {
            if (this.isShowing) {
                this.hide();
            }
        }
    }, {
        key: 'resume',
        value: function resume() {
            if (this.isShowing) {
                this.show();
            }
        }
    }, {
        key: 'show',
        value: function show() {}
    }, {
        key: 'hide',
        value: function hide() {}
    }, {
        key: 'destroy',
        value: function destroy() {}
    }, {
        key: 'create',
        value: function create(callback) {}
    }]);

    return BaseBanner;
}();

exports.default = BaseBanner;
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
        //# sourceMappingURL=BaseBanner.js.map
        