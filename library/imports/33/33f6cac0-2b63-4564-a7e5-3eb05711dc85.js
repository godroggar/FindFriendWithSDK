"use strict";
cc._RF.push(module, '33f6crAK2NFZKflPrBXEdyF', 'DevLogin');
// Script/SDK/dev/DevLogin.js

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

var DevLogin = function (_LoginInterface) {
    _inherits(DevLogin, _LoginInterface);

    function DevLogin() {
        _classCallCheck(this, DevLogin);

        return _possibleConstructorReturn(this, (DevLogin.__proto__ || Object.getPrototypeOf(DevLogin)).call(this));
    }

    _createClass(DevLogin, [{
        key: "login",
        value: function login() {}
    }, {
        key: "logout",
        value: function logout() {}
    }]);

    return DevLogin;
}(_LoginInterface3.default);

exports.default = DevLogin;
module.exports = exports["default"];

cc._RF.pop();