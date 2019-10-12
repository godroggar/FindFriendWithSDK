(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/tt/TTShare.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '87d927WehVBaYJp7TmeoWh0', 'TTShare', __filename);
// Script/SDK/tt/TTShare.js

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseShare2 = require('../base/BaseShare');

var _BaseShare3 = _interopRequireDefault(_BaseShare2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TTShare = function (_BaseShare) {
  _inherits(TTShare, _BaseShare);

  function TTShare(title) {
    _classCallCheck(this, TTShare);

    var _this = _possibleConstructorReturn(this, (TTShare.__proto__ || Object.getPrototypeOf(TTShare)).call(this, title));

    tt.showShareMenu({
      withShareTicket: true
    });
    tt.updateShareMenu({
      withShareTicket: true
    });
    wx.onShareAppMessage(function () {
      var _this2 = this;

      // 用户点击了“转发”按钮
      var visibleOrigin = cc.view.getVisibleOrigin();
      var visibleSize = cc.view.getFrameSize();

      return {
        title: title,
        imageUrl: canvas.toTempFilePathSync({
          x: visibleOrigin.x,
          y: visibleOrigin.y,
          destWidth: visibleSize.width,
          destHeight: visibleSize.height
        }),
        success: function success() {
          console.log('分享成功');
          _this2.shareSuccess();
        },
        fail: function fail(e) {
          console.log('分享失败', e);
        }
      };
    });
    return _this;
  }

  _createClass(TTShare, [{
    key: 'share',
    value: function share(title, func, isShowRecorder) {
      var _this3 = this;

      // this.callback = func;

      var videoPath = D.sdk.getRecorder().getVideoPath();
      console.log('shareAppMessage title ', title, ' isShowRecorder ', isShowRecorder, ' videoPath ', videoPath);
      if (isShowRecorder && videoPath) {

        tt.shareAppMessage({
          channel: 'video',
          title: title || this.title,
          extra: {
            videoPath: videoPath
          },
          success: function success() {
            console.log('分享成功');
            if (func) {
              func(true);
            }
            _this3.shareSuccess();
          },
          fail: function fail(e) {
            console.log('分享失败', e);
            if (e.errMsg.indexOf('short') >= 0) {
              _this3.share(title, func, false);
            } else {
              func(false);
            }
          }
          // x: visibleOrigin.x,
          // y: visibleOrigin.y,
          // imageUrl: canvas.toTempFilePathSync({
          //   destWidth: visibleSize.width,
          //   destHeight: visibleSize.height
          // })
        });
      } else {
        tt.shareAppMessage({
          channel: 'article',
          title: '分享创作',
          description: title || this.title,
          success: function success() {
            console.log('SDK分享成功');
            if (func) {
              func(true);
            }
            _this3.shareSuccess();
          },
          fail: function fail(e) {
            func(false);
            console.log('SDK分享失败');
            // ToastController.instance().show("分享失败")
          }
          // x: visibleOrigin.x,
          // y: visibleOrigin.y,
          // imageUrl: canvas.toTempFilePathSync({
          //   destWidth: visibleSize.width,
          //   destHeight: visibleSize.height
          // })
        });
      }

      this.shareFlag = true;
    }
  }, {
    key: 'getShareInfo',
    value: function getShareInfo(shareTicket, func) {
      if (shareTicket) {
        tt.getShareInfo({
          shareTicket: shareTicket,
          success: function success() {},
          fail: function fail() {}
        });
      }
    }
  }]);

  return TTShare;
}(_BaseShare3.default);

exports.default = TTShare;
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
        //# sourceMappingURL=TTShare.js.map
        