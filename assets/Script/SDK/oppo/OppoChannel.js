
import BaseChannel from "../base/BaseChannel";
import OppoBannerAd from "./OppoBannerAd";
import OppoInsertAd from "./OppoInsertAd";
import OppoRewardAd from "./OppoRewardAd";
import DevLogin from "../dev/DevLogin";
import OppoNativeAd from "./OppoNativeAd";
export default class OppoChannel extends BaseChannel {

    appId = ''
    adIds = null;
    constructor(id,adIds) {
        super(id);
        this.adIds = adIds;
        this.appId = adIds.appId;
        this.loginMgr = new DevLogin();
        // cc.log(' qg.getSystemInfoSync().platformVersionCode ', qg.getSystemInfoSync().platformVersionCode)
        // if (qg.getSystemInfoSync().platformVersionCode < 1031) {
        //     // 不支持广告
        // } else {
        //     // 支持广告
     
        // }

    }
    isVideoLvUp() {
        return true;
    }
    sevenButtonNum() {
        return 1;
    }
    vibrateShort() {
        qg.vibrateShort()
    }
    activeSkillLabel() {
        return '观看视频'
    }
    showShare(title, func) {
        this.openRewardAd((result) => {
            if (result) {
                func();
            }
        })
    }

    init() {
        let that = this
        qg.initAdService({
            appId: this.appId,
            isDebug: true,
            success:  (res)=> {
                // console.log("initAdService success",this.adIds);
             
                // this.bannerAd = new OppoBannerAd(this.adIds.bannerID)
                // console.log("initAdService  1111 vsuccess");
                // this.interstitialAd = new OppoInsertAd(this.adIds.insertID)
                // console.log("initAdService  22222 vsuccess");
                // this.rewardAd = new OppoRewardAd(this.adIds.rewardID)   
                // console.log("initAdService  33333 vsuccess");
                // this.nativeAd = new OppoNativeAd(this.adIds.nativeID)  
                // console.log("initAdService  44444 vsuccess");                  
            },
            fail: function (res) {
                console.log("initAdService fail:" + res.code + res.msg);
            },
            complete: function (res) {
                console.log("initAdService complete");
            }
        })
    }
}