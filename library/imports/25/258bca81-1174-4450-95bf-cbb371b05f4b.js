"use strict";
cc._RF.push(module, '258bcqBEXREUJW/y7NxsF9L', 'BaseShare');
// Script/SDK/base/BaseShare.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseShare = function () {
    function BaseShare(title) {
        _classCallCheck(this, BaseShare);

        this.shareFlag = false;
        this.callback = null;
        this.title = '';

        this.title = title;
    }

    _createClass(BaseShare, [{
        key: 'share',
        value: function share(title, func) {}
    }, {
        key: 'shareSuccess',
        value: function shareSuccess() {}
    }]);

    return BaseShare;
}();

exports.default = BaseShare;
module.exports = exports['default'];

cc._RF.pop();