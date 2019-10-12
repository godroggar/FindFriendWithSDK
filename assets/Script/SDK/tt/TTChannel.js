import BaseChannel from "../base/BaseChannel";
import TTLogin from "./TTLogin";
import TTBanner from "./TTBanner";
import TTVideoAd from "./TTVideoAd";
import TTShare from "./TTShare";
import TTRecorder from "./TTRecorder";
export default class TTChannel extends BaseChannel {


    constructor(id,adIds) {
        super(id)
        this.loginMgr = new TTLogin();
        this.recorder = new TTRecorder()
        this.bannerAd = new TTBanner(adIds.bannerID);
        this.rewardAd = new TTVideoAd(adIds.rewardID);
        this.share = new TTShare(adIds.shareTitle);
    }

    isHaveRank(){
        return false
    }

    isHaveGameBox() {
        return false;
    }
    showImage(imgUrl) {
        tt.previewImage({
            current: imgUrl, // 当前显示图片的http链接
            urls: [imgUrl] // 需要预览的图片http链接列表
        })
    }

    jumpToApp(appID) {
        tt.navigateToMiniProgram({
            appId: appID,
            success: () => {

            }
        })
    }

    postMessage(message){
        let context = tt.getOpenDataContext()
        if(context){
            message.channelID = this.id;
            context.postMessage(message)
        }
      }




    vibrateShort() {
        tt.vibrateShort();
    }
}
