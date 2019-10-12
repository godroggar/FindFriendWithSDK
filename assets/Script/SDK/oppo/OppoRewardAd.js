import BaseRewardAd, { RewardADState } from "../base/BaseRewardAd";

export default class OppoRewardAd extends BaseRewardAd {

    createVideoAd(id) {
        this.rewardedVideoAd = qg.createRewardedVideoAd({
            posId: id
        });
        this.rewardedVideoAd.onLoad(() => {
            console.log("激励视频已加载");
            // this.isFinish = true;
            // callback(null)
            // this.isFinish = true;
        });
        this.rewardedVideoAd.onError(err => {
            console.log("激励视频异常", err);
            if(this.rewardCallback){
                this.rewardCallback(false)
            }
        });
        this.rewardedVideoAd.onClose(res => {
            // GlobalEvent.instance().resume()
            this.state = RewardADState.close;
            if (res && res.isEnded) {
                console.log("正常播放结束，可以下发游戏奖励");
                this.rewardCallback(true)
            } else {
                console.log("播放中途退出，不下发游戏奖励");
                this.rewardCallback(false)
            }
            // this.load();
        });
    }



}