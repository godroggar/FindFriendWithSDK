"use strict";
cc._RF.push(module, '39b1aRbTTZC7oyLUzRQDDs3', 'GlobalEvent');
// Script/SDK/event/GlobalEvent.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _EventDispatcher2 = require('./EventDispatcher');

var _EventDispatcher3 = _interopRequireDefault(_EventDispatcher2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalEvent = (_temp = _class = function (_EventDispatcher) {
    _inherits(GlobalEvent, _EventDispatcher);

    _createClass(GlobalEvent, [{
        key: 'pause',
        value: function pause() {
            this.publish(GlobalEvent.EVENT_HIDE);
        }
    }, {
        key: 'resume',
        value: function resume() {
            this.publish(GlobalEvent.EVENT_SHOW);
        }
    }, {
        key: 'changeAdState',
        value: function changeAdState(state) {
            this.publish(GlobalEvent.CHANGE_AD_STATE, state);
        }
    }], [{
        key: 'instance',
        value: function instance() {
            if (!this.ins) {
                this.ins = new GlobalEvent();
            }
            return this.ins;
        }
    }]);

    function GlobalEvent() {
        _classCallCheck(this, GlobalEvent);

        var _this = _possibleConstructorReturn(this, (GlobalEvent.__proto__ || Object.getPrototypeOf(GlobalEvent)).call(this));

        cc.game.on(cc.game.EVENT_HIDE, function () {
            _this.pause();
        });

        cc.game.on(cc.game.EVENT_SHOW, function () {
            _this.resume();
        });
        return _this;
    }

    return GlobalEvent;
}(_EventDispatcher3.default), _class.EVENT_HIDE = 'EVENT_HIDE', _class.EVENT_SHOW = 'EVENT_SHOW', _class.CHANGE_AD_STATE = 'EVENT_CHANGE_AD_STATE', _temp);
exports.default = GlobalEvent;
module.exports = exports['default'];

cc._RF.pop();