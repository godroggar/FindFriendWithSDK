"use strict";
cc._RF.push(module, '187fdTAIrRItZpYVC2jjbGW', 'BaseRecorder');
// Script/SDK/base/BaseRecorder.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecoderState = exports.RecoderState = (_temp = _class = function RecoderState() {
    _classCallCheck(this, RecoderState);
}, _class.CLOSE = 0, _class.OPEN = 1, _temp);

var BaseRecorder = function () {
    function BaseRecorder() {
        _classCallCheck(this, BaseRecorder);

        this.videoPath = null;
        this.state = RecoderState.CLOSE;
    }

    _createClass(BaseRecorder, [{
        key: 'start',
        value: function start(obj) {}
    }, {
        key: 'pause',
        value: function pause() {}
    }, {
        key: 'resume',
        value: function resume() {}
    }, {
        key: 'stop',
        value: function stop() {
            var isSave = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        }
        //记录精彩的视频片段

    }, {
        key: 'recordClip',
        value: function recordClip(object) {}
    }, {
        key: 'changeState',
        value: function changeState(s) {
            this.state = s;
        }
    }, {
        key: 'getVideoPath',
        value: function getVideoPath() {
            return this.videoPath;
        }
    }, {
        key: 'isOpen',
        value: function isOpen() {
            console.log('isOpen  this.state ', this.state, RecoderState.OPEN);
            return this.state == RecoderState.OPEN;
        }
    }, {
        key: 'isClose',
        value: function isClose() {
            console.log('isClose  this.state ', this.state, RecoderState.CLOSE);
            return this.state == RecoderState.CLOSE;
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this.state;
        }
    }]);

    return BaseRecorder;
}();

exports.default = BaseRecorder;

cc._RF.pop();