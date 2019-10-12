"use strict";
cc._RF.push(module, '8f680pj85FKX4OJG7AY87HI', 'SDKManager');
// Script/SDK/SDKManager.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _ChannelID = require("./ChannelID");

var _ChannelID2 = _interopRequireDefault(_ChannelID);

var _OppoChannel = require("./oppo/OppoChannel");

var _OppoChannel2 = _interopRequireDefault(_OppoChannel);

var _DevChannel = require("./dev/DevChannel");

var _DevChannel2 = _interopRequireDefault(_DevChannel);

var _VivoChannel = require("./vivo/VivoChannel");

var _VivoChannel2 = _interopRequireDefault(_VivoChannel);

var _TTChannel = require("./tt/TTChannel");

var _TTChannel2 = _interopRequireDefault(_TTChannel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SDKManager = (_temp = _class = function () {
    function SDKManager() {
        _classCallCheck(this, SDKManager);
    }

    _createClass(SDKManager, null, [{
        key: "init",
        value: function init(channelID) {
            this.channel = this.builder(channelID);
            console.log("sdk初始化完成" + this.channel);
            if (this.channel) {
                this.channel.init();
            }
        }
    }, {
        key: "isDev",
        value: function isDev() {
            return this.channel.getID() == _ChannelID2.default.TEST;
        }
    }, {
        key: "isWX",
        value: function isWX() {
            return this.channel.getID() == _ChannelID2.default.WX;
        }
    }, {
        key: "builder",
        value: function builder(id) {
            var channelManager = this.channelMap[id];
            if (!channelManager) {
                cc.log(' channelID ' + id);
                var adIds = _ChannelID.AdIDS[parseInt(id)];
                console.log(' adIds ', adIds);
                switch (id) {
                    case _ChannelID2.default.OPPO:
                        channelManager = new _OppoChannel2.default(id, adIds);
                        break;
                    case _ChannelID2.default.VIVO:
                        channelManager = new _VivoChannel2.default(id, adIds);
                        break;
                    case _ChannelID2.default.TT:
                        channelManager = new _TTChannel2.default(id, adIds);
                        break;
                    case _ChannelID2.default.DEV:
                        channelManager = new _DevChannel2.default(id);
                        break;

                }
                this.channelMap[id] = channelManager;
            }

            return channelManager;
        }
    }, {
        key: "getChannel",
        value: function getChannel() {
            return this.channel;
        }
    }]);

    return SDKManager;
}(), _class.UPDATE_GAME_ICON = 'sdk_update_game_icon', _class.START_GAME_ICON = 'start_update_game_icon', _class.channelMap = {}, _temp);
exports.default = SDKManager;
module.exports = exports["default"];

cc._RF.pop();