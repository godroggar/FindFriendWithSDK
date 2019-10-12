(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/dev/DevChannel.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2856aw/NtFBCYn6Hzy6HD4b', 'DevChannel', __filename);
// Script/SDK/dev/DevChannel.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _BaseChannel2 = require("../base/BaseChannel");

var _BaseChannel3 = _interopRequireDefault(_BaseChannel2);

var _DevLogin = require("./DevLogin");

var _DevLogin2 = _interopRequireDefault(_DevLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DevChannel = function (_BaseChannel) {
    _inherits(DevChannel, _BaseChannel);

    function DevChannel(id) {
        _classCallCheck(this, DevChannel);

        var _this = _possibleConstructorReturn(this, (DevChannel.__proto__ || Object.getPrototypeOf(DevChannel)).call(this, id));

        _this.loginMgr = new _DevLogin2.default();
        return _this;
    }

    return DevChannel;
}(_BaseChannel3.default);

exports.default = DevChannel;
module.exports = exports["default"];

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
        //# sourceMappingURL=DevChannel.js.map
        