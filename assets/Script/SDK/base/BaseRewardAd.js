
export class RewardADState {
    static close = 0;
    static open = 1
}
export default class BaseRewardAd {

    state = RewardADState.close;

    rewardedVideoAd;

    rewardCallback = null;

    constructor(id) {
        this.createVideoAd(id);

    }

    getState() {
        return this.state;
    }

     createVideoAd(id){}

    show(callback) {
        if (!this.rewardedVideoAd) {
            callback(false)
            return;
        }
        this.rewardCallback = callback;
        this.rewardedVideoAd.show().then(() => {
            this.state = RewardADState.open;
        }).catch(() => {
            // 失败重试
            this.rewardedVideoAd.load()
                .then(() => {
                    this.rewardedVideoAd.show()
                    this.state = RewardADState.open;
                    D.sdk.hideBanner();
                })
                .catch(err => {
                    console.log('激励视频 广告显示失败')
                    callback(false)

                })
        })
    }

    callback(num) {

    }
}