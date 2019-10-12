"use strict";
cc._RF.push(module, 'a77d4BjL7FJJb29ZsWhFkjh', 'LoginInterface');
// Script/SDK/base/LoginInterface.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginInterface = function () {
    function LoginInterface() {
        _classCallCheck(this, LoginInterface);
    }

    _createClass(LoginInterface, [{
        key: "logout",
        value: function logout() {}
    }, {
        key: "login",
        value: function login() {}
    }]);

    return LoginInterface;
}();

exports.default = LoginInterface;
module.exports = exports["default"];

cc._RF.pop();