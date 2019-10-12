(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/sound/MusicManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f6c044dN/JPs7BAJhkfThIW', 'MusicManager', __filename);
// Script/SDK/sound/MusicManager.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseRewardAd = require("../base/BaseRewardAd");

var _GlobalEvent = require("../event/GlobalEvent");

var _GlobalEvent2 = _interopRequireDefault(_GlobalEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MusicManagerName = 'MusicManagerNamexxx';

var MusicManager = function () {
    function MusicManager() {
        _classCallCheck(this, MusicManager);

        this.sourcePool = {};
        this.musicFlag = 1;

        this.musicFlag = cc.sys.localStorage.getItem(MusicManagerName);
        this.musicFlag = this.musicFlag || 1;
        cc.log('MusicManager constructor ', this.musicFlag);
        _GlobalEvent2.default.instance().addEventListener(_GlobalEvent2.default.EVENT_HIDE, this.eventHide, this);
        _GlobalEvent2.default.instance().addEventListener(_GlobalEvent2.default.EVENT_SHOW, this.eventShow, this);
        _GlobalEvent2.default.instance().addEventListener(_GlobalEvent2.default.CHANGE_AD_STATE, this.changeAdState, this);
    }

    _createClass(MusicManager, [{
        key: "changeAdState",
        value: function changeAdState(state) {
            cc.log(' changeAdState ', state);
            if (state == _BaseRewardAd.RewardADState.close) {
                this.eventShow();
            } else {
                this.eventHide();
            }
        }
    }, {
        key: "eventHide",
        value: function eventHide() {
            cc.log(' eventHide this.getMusicFlag()', this.getMusicFlag());
            if (this.getMusicFlag() && this.openName) {
                this.pause();
            }
        }
    }, {
        key: "eventShow",
        value: function eventShow() {
            var state = _BaseRewardAd.RewardADState.close; // 如果广告没有关闭，回来也不应该有声音
            // if (SDKManager.getChannel()) {
            //     state = SDKManager.getChannel().getRewardAdState();
            // }
            cc.log(' eventShow this.getMusicFlag()', this.getMusicFlag());
            if (this.getMusicFlag() && state == _BaseRewardAd.RewardADState.close) {
                if (this.openName) {
                    this.play(this.openName);
                }

                // this.resume();
            } else {
                cc.audioEngine.stopMusic();
            }
        }
    }, {
        key: "musicOpen",
        value: function musicOpen() {
            if (this.openName) {
                this.play(this.openName);
            } else {
                this.resume();
            }
        }
    }, {
        key: "musicClose",
        value: function musicClose() {
            this.pause();
        }
    }, {
        key: "getMusicFlag",
        value: function getMusicFlag() {
            return this.musicFlag == 1;
        }
    }, {
        key: "open",
        value: function open(name) {
            // this.audioManager.setMusicFlag(true);
            this.musicFlag = 1;
            this.setItem(this.musicFlag);
            this.play(name);
        }
    }, {
        key: "setItem",
        value: function setItem(value) {
            cc.sys.localStorage.setItem(MusicManagerName, value);
        }
    }, {
        key: "close",
        value: function close() {
            // this.audioManager.setMusicFlag(false);
            // this.musicFlag = 2;
            this.setItem(2);
            if (this.tempName) {
                this.stop(this.tempName);
                this.tempName = null;
            }
            this.musicFlag = cc.sys.localStorage.getItem(MusicManagerName);
            cc.log(' close musicFlag is ', this.musicFlag);
        }
    }, {
        key: "play",
        value: function play(name) {
            var _this = this;

            var isLoop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this.openName = name;
            // if (this.audioManager.getMusicVolume() == 0) {
            //     return;
            // }
            if (this.tempName) {
                this.stop(this.tempName);
                this.tempName = null;
            }
            this.tempName = name;
            cc.loader.loadRes(name, cc.AudioClip, function (err, res) {
                if (err) {
                    //console.log("AudioSource err ",err)
                    cc.log("AudioSource err ", err);
                    return;
                }

                // this.openName = null;
                var audioId = cc.audioEngine.playMusic(res, isLoop);
                _this.sourcePool[name] = audioId;
                if (!isLoop) {
                    cc.audioEngine.setFinishCallback(audioId, _this.stop.bind(_this, name));
                }
            });
        }
    }, {
        key: "pause",
        value: function pause() {
            if (!this.isPlaying()) {
                return;
            }

            cc.audioEngine.pauseMusic();
        }
    }, {
        key: "resume",
        value: function resume() {
            if (this.isPlaying()) {
                cc.log(' is already playing');
                return;
            }

            cc.audioEngine.resumeMusic();
        }
    }, {
        key: "stop",
        value: function stop(name) {
            if (!this.isPlaying()) {
                return;
            }
            cc.audioEngine.stopMusic();
            if (name) {
                var audioId = this.sourcePool[name];
                if (audioId) {
                    this.sourcePool[name] = null;
                }
            }
        }
    }, {
        key: "setVolume",
        value: function setVolume(count) {
            cc.audioEngine.setMusicVolume(count);
        }
    }, {
        key: "isPlaying",
        value: function isPlaying() {
            return cc.audioEngine.isMusicPlaying();
        }
    }], [{
        key: "instance",
        value: function instance() {
            if (!this.ins) {
                this.ins = new MusicManager();
            }
            return this.ins;
        }
    }]);

    return MusicManager;
}();

exports.default = MusicManager;
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
        //# sourceMappingURL=MusicManager.js.map
        