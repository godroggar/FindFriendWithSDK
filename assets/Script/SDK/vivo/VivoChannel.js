
import BaseChannel from "../base/BaseChannel";
import VivoBannerAd from "./VivoBannerAd";
import VivoInsertAd from "./VivoInsertAd";
import VivoRewardAd from "./VivoRewardAd";
import DevLogin from "../dev/DevLogin";
export default class VivoChannel extends BaseChannel {

    appId = ''
    constructor(id,adIds) {
        super(id);
        this.appId = adIds.appId;
        this.loginMgr = new DevLogin();
        cc.log(' qg.getSystemInfoSync().platformVersionCode ', qg.getSystemInfoSync().platformVersionCode)
        if (qg.getSystemInfoSync().platformVersionCode < 1031) {
            // 不支持广告
        } else {
            // 支持广告
            // this.bannerAd = new VivoBannerAd(adIds.bannerID)
            // this.interstitialAd = new VivoInsertAd(adIds.insertID)
            // this.rewardAd = new VivoRewardAd(adIds.rewardID)         
        }

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

    }
}