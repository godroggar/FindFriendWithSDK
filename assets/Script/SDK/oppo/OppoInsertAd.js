
import InterstitialAd from "../base/InterstitialAd";


export default class OppoInsertAd extends InterstitialAd {
    interstitialAd = null;

    finish = false

    constructor(id) {
        super()
        this.load(id);
    }


    show(func) {
        cc.log(' show insert ad ')
        let that = this
        if (this.interstitialAd) {
            
            this.interstitialAd.load();
            // this.interstitialAd.show().then(() => {
            //     // D.sdk.getBannerAd().pause();
            // }).catch((err) => {
            //         that.interstitialAd.load().then(() => {
            //             that.interstitialAd.show()
            //             // D.sdk.getBannerAd().pause();
            //         }).catch((err)=>{

            //         })
            //     })
        }
    }


    isLoad() {
        return this.finish;
    }

    load(id) {
        this.interstitialAd = qg.createInsertAd({
            posId: id
        });
      
        cc.log(' insert ad laod ',id)
        this.interstitialAd.onLoad(() => {
            console.log('插屏广告加载成功')
            this.finish = true
            this.interstitialAd.show()
        })
        this.interstitialAd.onError((err) => {
            console.log('VivoInsertAd load fail ', err);
            this.finish = false;
        })
        // this.interstitialAd.onClose(() => {
        //     D.sdk.getBannerAd().resume();
        // })
    }
}
