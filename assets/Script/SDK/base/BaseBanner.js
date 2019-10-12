
export default class BaseBanner {
    adUnitID = ''

    isShow = 0// 游戏逻辑是否要求显示

    finish = false;//加载完成

    bannerAd = null;

    isShowing = false

    constructor(id) {
        this.adUnitID = id;
        this.init();
    }

    init() {
        this.create((err) => {
            if (!err) {
                this.finish = true
                if (this.isShow == 1) {
                    this.showBanner()
                } else if (this.isShow == 2) {
                    this.hideBanner();
                }
            } else {
                this.reLoad();
            }
        })
    }

    reLoad() {
        console.log(' reLoad ')
        let id = setTimeout(() => {
            this.init();
            clearTimeout(id)
        }, 8000)
    }

    getHeight() {
        return 0;
    }



    showBanner() {
        cc.log(' show banner =====================')
        this.isShow = 1;
        if (!this.finish) {
            return;
        }
        if (this.isShowing) {
            return;
        }
        this.isShowing = true;
        if (!this.bannerAd) {
            return
        }
        this.show()
    }

    hideBanner() {
        if (!this.bannerAd) {
            return
        }
        this.isShow = 2;
        if (!this.finish) {
            return;
        }
        if (!this.isShowing) {
            return;
        }
        this.isShowing = false;
        this.hide()
    }

    destroyBanner() {
        if (!this.bannerAd) {
            return
        }
        this.destroy();
        this.isShow = 0
        this.finish = false;
        this.bannerAd = null;
    }
    pause() {
        if (this.isShowing) {
            this.hide();
        }
    }

    resume() {
        if (this.isShowing) {
            this.show();
        }
    }
    show() {

    }
    hide() { }
    destroy() { }
    create(callback) { }
}