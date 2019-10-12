import BaseBanner from "../base/BaseBanner";
export default class TTBanner extends BaseBanner {

    bannerHeight = 0;
    create(callback) {
        let winSize = tt.getSystemInfoSync();

        // console.log(winSize);
        // let bannerHeight = 120;
        let bannerWidth = 200;
        this.bannerHeight = (bannerWidth / 16 * 9)
        this.destroyBanner();
        if(!tt.createBannerAd){
            return;
        }
        this.bannerAd = tt.createBannerAd({
            adUnitId: this.adUnitID,
            style: {
                left: (winSize.windowWidth - bannerWidth) / 2,
                top: winSize.windowHeight- (bannerWidth / 16 * 9), // 根据系统约定尺寸计算出广告高度
                width: bannerWidth
            }
        })
        let that = this;
        function onLoad() {
            //
            callback(null)
            console.log('banner 广告加载成功')
            that.bannerAd.offLoad(onLoad)
        }
        this.bannerAd.onLoad(onLoad)
        function onError(err) {
            callback(err)
            console.log('banner 广告加载失败 ', err)
            that.bannerAd.offError(this)
        }
        this.bannerAd.onError(onError)
    }

    
    getHeight(){
        return this.bannerHeight;
    }

    show() {
        if(!tt.createBannerAd){
            return;
        }        
        this.bannerAd.show();
    }

    hide() {
        if(!tt.createBannerAd){
            return;
        }        
        this.bannerAd.hide();
    }

     destroy() {
        if(!tt.createBannerAd){
            return;
        }        
        this.bannerAd.destroy()
    }
}
