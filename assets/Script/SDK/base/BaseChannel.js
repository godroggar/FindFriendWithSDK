
let isNull = function (obj) {
    return obj == null || obj == undefined;
}

export default class BaseChannel {


    id;

    sdk;

    loginMgr;


    rewardAd;


    recorder;

    bannerAd;

    share;

    // protected exchagneVolume:ExchangeVolume;

    interstitialAd;

    nativeAd;

    constructor(id) {
        this.id = id;
    }
    getRewardAd() {
        return this.rewardAd;
    }

    getBannerAd() {
        return this.bannerAd;
    }

    getShare() {
        return this.share;
    }
    getID() {
        return this.id;
    }


    isHaveNativeAd() {
        return this.nativeAd != undefined;
    }

    reportAdClick(adId){
        if(this.isHaveNativeAd()){
            this.nativeAd.reportAdClick(adId)
        }
    }

    getBannerHeight(){
        if(this.isHaveBannerAd()){
           return  this.bannerAd.getHeight();
        }
        return 0;
    }

    nativeAddEventListener(eventName,func,target){
        if(this.isHaveNativeAd()){
            cc.log(' nativeAddEventListener ',this.nativeAd)
            this.nativeAd.addEventListener(eventName,func,target)
        }
    }

    reportAdShow(adId) {
        if(this.isHaveNativeAd()){
            this.nativeAd.reportAdShow(adId)
        }
    }

    getAdItems(){
        if(this.isHaveNativeAd()){
            this.nativeAd.getAdItems()
        }
        return []
    }

    isHaveBannerAd() {
        console.log("isHaveBannerAd"+this.bannerAd != undefined);
        return this.bannerAd != undefined;
        
    }



    isHaveStore() {
        return this.payMgr != undefined;
    }

    /**
     * 
     */
    isHaveShare() {
        return this.share != undefined;
    }

    // 初始化结束
    initFinish() {

    }

    //初始化sdk
    init() {
        // cc.log(" ",this.data);

    }


    recorderStart(obj) {
        console.log('recorderStart this.isHaveRecorder()  ',this.isHaveRecorder())
        if (this.isHaveRecorder()) {
            this.recorder.start(obj)
        }
    }

    getRecorder() {
        return this.recorder;
    }


    recorderStop(isSave = false) {
        console.log('recorderStop this.isHaveRecorder()  ',this.isHaveRecorder(),isSave)
        if (this.isHaveRecorder()) {
            this.recorder.stop(isSave)
        }
    }

    //添加sdk代码
    addScript(url) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = "" + this.id;
        script.onload = this.initFinish.bind(this);
        script.src = url;
        script.onerror = function () {
            // script.src = url;
            cc.error(" load script error ", url);
        }
        head.appendChild(script);
    }



    /**
     * 显示商城 如果没有不重写
     */
    showStore() {

    }
    /**
     * 免费复活
     */
    freeRevive() {

    }

    login() {
        this.loginMgr.login()
    }

    logout() {
        this.loginMgr.logout();
    }

    showBanner() {
        if (this.bannerAd) {
            console.log("show banner");
            this.bannerAd.showBanner();
        }else{
            console.log("no banner");
        }
    }

    hideBanner() {
        if (this.bannerAd) {
            this.bannerAd.hideBanner();
        }
    }


    showShare(title, func,isShowRecorder) {
        if (this.isHaveShare()) {
            this.share.share(title, (result)=>{
                if(result){
                    func()
                    //D.control.UITipCback(1)
                }else{

                }
            },isShowRecorder)
        } else {
            func();
        }
    }

    activeSkillLabel() {
        return '分享释放'
    }


    // hideShare() {

    // }

    // getExchangeVolume(){
    //     return this.exchagneVolume;
    // }


    openRewardAd(func) {
        if (this.isHaveRewardAd()) {
            this.rewardAd.show((isFinish) => {
                if (isFinish) {
                    func(true)
                } else {
                    func(false)

                }
            })
        } else {
            func(true)
        }
    }

    isHaveRewardAd() {
        return !isNull(this.rewardAd);
    }

    getRewardAdState() {
        if (this.rewardAd) {
            return this.rewardAd.getState();
        }
        return RewardADState.close;
    }
    isHaveFollow() {
        return false;
    }

    isHaveRecorder() {
        return !isNull(this.recorder)
    }


    showImage(imageUrl) {

    }

    jumpToApp(appID) {

    }

    getAds(num, func) {

    }


    isHaveInterstitalAd() {
        return !isNull(this.interstitialAd);
    }

    showInterstitialAd(func) {
        if (this.isHaveInterstitalAd()) {
            this.interstitialAd.show(func)
        }
    }

    intoLobby() {

    }
    isHaveGameBox() {
        return false;
    }
    isHaveRank() {
        return false;
    }
    postMessage(message) {

    }


    vibarate() {
        if (ShakeManager.instance().getFlag()) {
            this.vibrateShort();
        }
    }

    vibrateShort() {

    }

    createGameClubButton() { }

    hideGameClubButton() { }

    showGameClubButton() {

    }
}