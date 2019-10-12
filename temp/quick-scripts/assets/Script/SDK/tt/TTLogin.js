(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/tt/TTLogin.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7b20dnzeOdCO5aALo2zYXl2', 'TTLogin', __filename);
// Script/SDK/tt/TTLogin.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LoginInterface2 = require("../base/LoginInterface");

var _LoginInterface3 = _interopRequireDefault(_LoginInterface2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TTLogin = function (_LoginInterface) {
    _inherits(TTLogin, _LoginInterface);

    function TTLogin() {
        _classCallCheck(this, TTLogin);

        return _possibleConstructorReturn(this, (TTLogin.__proto__ || Object.getPrototypeOf(TTLogin)).call(this));
    }

    _createClass(TTLogin, [{
        key: "login",
        value: function login(func, param) {
            tt.login({
                force: false,
                success: function success(res) {
                    console.log("login\u8C03\u7528\u6210\u529F" + res.code + " " + res.anonymousCode);
                    tt.getUserInfo({
                        success: function success(res) {
                            console.log("getUserInfo\u8C03\u7528\u6210\u529F" + res.userInfo);
                            func();
                        },
                        fail: function fail(res) {
                            console.log("getUserInfo\u8C03\u7528\u5931\u8D25");
                            func();
                        }
                    });
                },
                fail: function fail(res) {
                    func();
                    // console.log(`login调用失败`);
                }
            });
        }
    }, {
        key: "logout",
        value: function logout() {}
    }]);

    return TTLogin;
}(_LoginInterface3.default);

exports.default = TTLogin;
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
        //# sourceMappingURL=TTLogin.js.map
        