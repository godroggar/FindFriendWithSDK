cc.Class({
    extends: cc.Component,
//需要更多源码联系Q:852183691
//或者
//关注微信公众号“史于二”
    properties: {
        audioSource: {
            type: cc.AudioSource,
            default: null
        },
        btn_click: {
            type: cc.AudioClip,
            default: null
        },
        gamewin: {
            type: cc.AudioClip,
            default: null
        },
        done: {
            type: cc.AudioClip,
            default: null
        },
        error: {
            type: cc.AudioClip,
            default: null
        },
        clock: {
            type: cc.AudioClip,
            default: null
        },
        uplock: {
            type: cc.AudioClip,
            default: null
        },
        getCoin: {
            type: cc.AudioClip,
            default: null
        },
        isOpen:true,
        isVoiceOpen:true,
    },

    // LIFE-CYCLE CALLBACKS: 

    playSound:function(soundtype)
    {
        if(this.isOpen){
            switch(soundtype){
                case "btn_click":
                    cc.audioEngine.play(this.btn_click, false, 1);
                    break;
                case "done":
                    cc.audioEngine.play(this.done, false, 1);
                    break;
                case "error":
                    cc.audioEngine.play(this.error, false, 1);
                    break;
                case "clock":
                    cc.audioEngine.play(this.clock, false, 1);
                    break;
                case "gamewin":
                    cc.audioEngine.play(this.gamewin, false, 1);
                    break;
                case "uplock":
                    cc.audioEngine.play(this.uplock, false, 1);
                    break;   
                case "getCoin":
                    cc.audioEngine.play(this.getCoin, false, 1);
                    break;   
            }
        }
    },

    playBg:function()
    {
        if(this.isOpen){
            this.audioSource.play();
        }
    },

    setVoiceIsOpen:function(isOpen){
        this.isVoiceOpen = isOpen;
        if(isOpen){
            try{
                if(str != null){
                    HiboGameJs.enableMic(0)
                }
            }catch(e){
                
            }
        }else{
            try{
                if(str != null){
                    HiboGameJs.enableMic(1)
                }
            }catch(e){
                
            }
        }

    },

    setIsOpen:function(isOpen){
        this.isOpen = isOpen;
        if(this.isOpen){
            this.playBg();
            try{
                if(str != null){
                    HiboGameJs.mute(0)
                }
            }catch(e){
                
            }
            
        }else{
            this.audioSource.pause();
            try{
                if(str != null){
                    HiboGameJs.mute(1)
                }
            }catch(e){
                
            }
        }
    },
});
