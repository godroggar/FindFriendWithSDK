"use strict";
cc._RF.push(module, '8d517UYugxLZJs3U0+eMM8u', 'SoundView');
// Script/SDK/sound/SoundView.js

'use strict';

var _MusicManager = require('./MusicManager');

var _MusicManager2 = _interopRequireDefault(_MusicManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var musicName = 'AquariumGameplayMusic';
cc.Class({
    extends: cc.Component,

    properties: {
        music_1: {
            // ATTRIBUTES:
            default: null, // The default value will be used only when the component attaching
            // to a node for the first time
            type: cc.Node, // optional, default is typeof default
            serializable: true // optional, default is true
        },
        audioClip: {
            default: null, // The default value will be used only when the component attaching
            // to a node for the first time
            type: cc.AudioClip, // optional, default is typeof default
            serializable: true // optional, default is true
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var flag = _MusicManager2.default.instance().getMusicFlag();
        cc.log(' SoundView start flag ', flag);
        this.music_1.active = flag;
        if (flag) {
            _MusicManager2.default.instance().play(musicName, true);
        }
    },


    // update (dt) {},

    onButtonClick: function onButtonClick() {
        var flag = _MusicManager2.default.instance().getMusicFlag();
        if (flag) {
            _MusicManager2.default.instance().close();
            this.music_1.active = false;
        } else {
            this.music_1.active = true;
            _MusicManager2.default.instance().open(musicName);
        }
    }
});

cc._RF.pop();