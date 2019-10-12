import MusicManager from "./MusicManager";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
let musicName = 'AquariumGameplayMusic'
cc.Class({
    extends: cc.Component,

    properties: {
        music_1: {
            // ATTRIBUTES:
            default: null,        // The default value will be used only when the component attaching
            // to a node for the first time
            type: cc.Node, // optional, default is typeof default
            serializable: true,   // optional, default is true
        },
        audioClip: {
            default: null,        // The default value will be used only when the component attaching
            // to a node for the first time
            type: cc.AudioClip, // optional, default is typeof default
            serializable: true,   // optional, default is true
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        let flag = MusicManager.instance().getMusicFlag();
        cc.log(' SoundView start flag ',flag)
        this.music_1.active = flag
        if(flag){
            MusicManager.instance().play(musicName,true)
        }
    },

    // update (dt) {},

    onButtonClick() {
        let flag = MusicManager.instance().getMusicFlag();
        if(flag){
            MusicManager.instance().close()
            this.music_1.active = false;
        }else{
            this.music_1.active = true;
            MusicManager.instance().open(musicName);
        }
    } 
});
