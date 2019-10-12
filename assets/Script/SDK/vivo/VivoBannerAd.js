
import BaseBanner from "../base/BaseBanner";

export default class VivoBannerAd extends BaseBanner{

    create(callback) {
        this.destroyBanner();
        this.bannerAd = qg.createBannerAd({
            posId: this.adUnitID,
            style: {}
        });

        let that = this;
        function onLoad(){
            that.bannerAd.offLoad(onLoad)
            callback(null)
            console.log('banner  ad load success')
        }
        this.bannerAd.onLoad(onLoad)
        function onError(err){
            callback(err)
            console.log('banner ad load fail  ', err)
            that.bannerAd.offError(onError)
        }
        this.bannerAd.onError(onError)

        function onClose(){
            that.bannerAd.offClose(onClose)
            // that.reLoad();
        }

        this.bannerAd.onClose(onClose)
    }

    getHeight(){
        return 120;
    }

    show() {
        this.bannerAd.show();
    }

    hide() {
        this.bannerAd.hide()
    }

    destroy(){
        this.bannerAd.destroy();
    }
}