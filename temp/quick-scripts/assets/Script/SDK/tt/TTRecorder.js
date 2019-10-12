(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/tt/TTRecorder.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '264dcgemjpOeozf83+TMV2A', 'TTRecorder', __filename);
// Script/SDK/tt/TTRecorder.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseRecorder2 = require('../base/BaseRecorder');

var _BaseRecorder3 = _interopRequireDefault(_BaseRecorder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TTRecorder = function (_BaseRecorder) {
    _inherits(TTRecorder, _BaseRecorder);

    function TTRecorder() {
        _classCallCheck(this, TTRecorder);

        var _this = _possibleConstructorReturn(this, (TTRecorder.__proto__ || Object.getPrototypeOf(TTRecorder)).call(this));

        _this.isSave = true;

        _this.recorder = tt.getGameRecorderManager();
        _this.recorder.onStart(function (res) {
            console.log('录屏开始', res);
            _this.changeState(1);
            // do somethine;
        });
        _this.recorder.onStop(function (res) {
            // console.log(res.videoPath);
            // do somethine;
            console.log('录屏结束', res);
            _this.clipVideo(res, [15, 0], function (r) {
                if (r) {
                    // if (this.isSave) {
                    _this.videoPath = r.videoPath;
                    // }
                } else {
                    _this.videoPath = null;
                }

                _this.changeState(0);
            });
        });

        _this.recorder.onResume(function () {
            console.log('TTRecorder onResume');
        });
        _this.recorder.onPause(function () {
            console.log('TTRecorder onPuase');
        });

        _this.recorder.onError(function (res) {
            console.log('TTRecorder onPuase');
            _this.videoPath = null;
        });
        return _this;
    }

    _createClass(TTRecorder, [{
        key: 'clipVideo',
        value: function clipVideo(res, timeRange, func) {
            this.recorder.clipVideo({
                path: res.videoPath,
                timeRange: timeRange,
                success: function success(r) {
                    console.log(r.videoPath);
                    func(r);
                },
                fail: function fail() {
                    func(null);
                }
            });
        }
    }, {
        key: 'recordClip',
        value: function recordClip(func) {
            this.recorder.recordClip({
                timeRange: [15, 0],
                success: function success(r) {
                    console.log(r.index); // 裁剪唯一索引

                    func(r);
                }
            });
        }
    }, {
        key: 'start',
        value: function start() {
            console.log(' recorder start ', this.isOpen());
            if (this.isOpen()) {
                return;
            }
            // this.changeState(ItemState.GOT)
            this.recorder.start({
                duration: 300
            });
        }
    }, {
        key: 'stop',
        value: function stop() {
            var isSave = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            console.log(' recorder stop ', this.isClose(), isSave);
            if (this.isClose()) {
                return;
            }
            // this.changeState(ItemState.NOT_GET)
            this.isSave = isSave;
            this.recorder.stop();
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.recorder.pause();
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.recorder.resume();
        }
    }]);

    return TTRecorder;
}(_BaseRecorder3.default);

exports.default = TTRecorder;
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
        //# sourceMappingURL=TTRecorder.js.map
        