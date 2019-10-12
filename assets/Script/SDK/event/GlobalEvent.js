import EventDispatcher from "./EventDispatcher";
export default class GlobalEvent extends EventDispatcher {

    static EVENT_HIDE = 'EVENT_HIDE'

    static EVENT_SHOW = 'EVENT_SHOW'

    static CHANGE_AD_STATE = 'EVENT_CHANGE_AD_STATE'
    static ins;

    static instance() {
        if (!this.ins) {
            this.ins = new GlobalEvent();
        }
        return this.ins;
    }


    pause(){
        this.publish(GlobalEvent.EVENT_HIDE)
    }

    resume(){
        this.publish(GlobalEvent.EVENT_SHOW)
    }

    changeAdState(state){
        this.publish(GlobalEvent.CHANGE_AD_STATE,state)
    }

    constructor() {
        super()

        cc.game.on(cc.game.EVENT_HIDE, () => {
            this.pause();
        });

        cc.game.on(cc.game.EVENT_SHOW, () => {
            this.resume();
        });
    }

}
