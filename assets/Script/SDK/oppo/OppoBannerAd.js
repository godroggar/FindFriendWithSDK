
import BaseBanner from "../base/BaseBanner";

export default class OppoBannerAd extends BaseBanner{

    create(callback) {
        cc.log(' create BaseBanner ad laod this.adUnitID',this.adUnitID)

        this.destroyBanner();
        this.bannerAd = qg.createBannerAd({
            posId: this.adUnitID,
            style: {}
        });

        let that = this;
        function onLoad(){
            that.bannerAd.offShow(onLoad)
            callback(null)
            console.log('banner  ad load success')
        }
        this.bannerAd.onShow(onLoad)
        function onError(err){
            callback(err)
            console.log('banner ad load fail  ', err)
            that.bannerAd.offError(onError)
        }
        this.bannerAd.onError(onError)

        function onClose(){
            that.bannerAd.offHide(onClose)
            // that.reLoad();
        }

        this.bannerAd.onHide(onClose)
    }

    show() {
        cc.log('show  OppoBanner')
        this.bannerAd.show();
    }

    hide() {
        this.bannerAd.hide()
    }

    destroy(){
        this.bannerAd.destroy();
    }
    getHeight(){
        return 120;
    }    
}