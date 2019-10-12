import { RewardADState } from "../base/BaseRewardAd";
import GlobalEvent from "../event/GlobalEvent";
let MusicManagerName = 'MusicManagerNamexxx'
export default class MusicManager {


    sourcePool = {}

    tempName;
    openName

    musicFlag = 1;

    constructor() {
        this.musicFlag = cc.sys.localStorage.getItem(MusicManagerName)
        this.musicFlag = this.musicFlag || 1;
        cc.log('MusicManager constructor ',this.musicFlag)
        GlobalEvent.instance().addEventListener(GlobalEvent.EVENT_HIDE, this.eventHide, this)
        GlobalEvent.instance().addEventListener(GlobalEvent.EVENT_SHOW, this.eventShow, this)
        GlobalEvent.instance().addEventListener(GlobalEvent.CHANGE_AD_STATE, this.changeAdState, this)
    }

    static ins;

    static instance() {
        if (!this.ins) {
            this.ins = new MusicManager();
        }
        return this.ins;
    }



    changeAdState(state) {
        cc.log(' changeAdState ',state)
        if (state == RewardADState.close) {
            this.eventShow();
        } else {
            this.eventHide();
        }
    }

    eventHide() {
        cc.log(' eventHide this.getMusicFlag()', this.getMusicFlag())
        if (this.getMusicFlag() && this.openName) {
            this.pause();
        }
    }

    eventShow() {
        let state = RewardADState.close // 如果广告没有关闭，回来也不应该有声音
        // if (SDKManager.getChannel()) {
        //     state = SDKManager.getChannel().getRewardAdState();
        // }
        cc.log(' eventShow this.getMusicFlag()', this.getMusicFlag())
        if (this.getMusicFlag() && state == RewardADState.close) {
            if (this.openName) {
                this.play(this.openName);
            }

            // this.resume();
        } else {
            cc.audioEngine.stopMusic();
        }
    }

    musicOpen() {
        if (this.openName) {
            this.play(this.openName)
        } else {
            this.resume();
        }
    }

    musicClose() {
        this.pause();
    }

    getMusicFlag() {
        return this.musicFlag == 1;
    }



    open(name) {
        // this.audioManager.setMusicFlag(true);
        this.musicFlag = 1;
        this.setItem(this.musicFlag)
        this.play(name);
    }

    setItem(value) {
        cc.sys.localStorage.setItem(MusicManagerName, value)
    }

    close() {
        // this.audioManager.setMusicFlag(false);
        // this.musicFlag = 2;
        this.setItem(2)
        if (this.tempName) {
            this.stop(this.tempName);
            this.tempName = null;
        }
        this.musicFlag = cc.sys.localStorage.getItem(MusicManagerName)
        cc.log(' close musicFlag is ',this.musicFlag)
    }

    play(name,isLoop = true) {
        this.openName = name;
        // if (this.audioManager.getMusicVolume() == 0) {
        //     return;
        // }
        if (this.tempName) {
            this.stop(this.tempName);
            this.tempName = null;
        }
        this.tempName = name;
        cc.loader.loadRes(name,cc.AudioClip,(err,res)=>{
            if(err){
                //console.log("AudioSource err ",err)
                cc.log("AudioSource err ",err);
                return ;
            }

             // this.openName = null;
             let audioId = cc.audioEngine.playMusic(res, isLoop);
             this.sourcePool[name] = audioId;
             if (!isLoop) {
                 cc.audioEngine.setFinishCallback(audioId, this.stop.bind(this, name));
             }
        });


    }

    pause() {
        if (!this.isPlaying()) {
            return;
        }

        cc.audioEngine.pauseMusic();


    }

    resume() {
        if (this.isPlaying()) {
            cc.log(' is already playing')
            return;
        }

        cc.audioEngine.resumeMusic();


    }

    stop(name) {
        if (!this.isPlaying()) {
            return;
        }
        cc.audioEngine.stopMusic();
        if (name) {
            let audioId = this.sourcePool[name];
            if (audioId) {
                this.sourcePool[name] = null;
            }
        }

    }

    setVolume(count) {
        cc.audioEngine.setMusicVolume(count);
    }

    isPlaying() {
        return cc.audioEngine.isMusicPlaying();
    }

}