import EventDispatcher from "../event/EventDispatcher";

export default class BaseNativeAd extends EventDispatcher{
    adUnitID = ''



    // finish = false;//加载完成

    nativeAd = null;

    adItems = []

    getAdItems(){
        return this.adItems;
    }

    constructor(id) {
        super();
        this.adItems = []
        this.adUnitID = id;
        this.init();
    }

    init() {
        this.create((err) => {
            console.log(' BaesNativeAd init err ',err)
            if (!err) {
  
            } else {
                // this.reLoad();
            }
        })
    }

    reLoad() {
        console.log(' reLoad ')
        // let id = setTimeout(() => {
        //     this.init();
        //     clearTimeout(id)
        // }, 8000)
    }

    reportAdClick(adId){

    }

    reportAdShow(adId) {

    }


    destroyNative() {
        if (!this.nativeAd) {
            return
        }
        this.destroy();
        // this.isShow = 0
        // this.finish = false;
        this.nativeAd = null;
    }

    destroy() { }
    create(callback) { }  
}