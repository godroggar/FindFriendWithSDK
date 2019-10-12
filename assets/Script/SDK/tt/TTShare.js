
import BaseShare from "../base/BaseShare";
export default class TTShare extends BaseShare {

  constructor(title) {
    super(title);
    tt.showShareMenu({
      withShareTicket: true,
    });
    tt.updateShareMenu({
      withShareTicket: true
    })
    wx.onShareAppMessage(function () {
      // 用户点击了“转发”按钮
      let visibleOrigin = cc.view.getVisibleOrigin();
      let visibleSize = cc.view.getFrameSize();

      return {
        title: title,
        imageUrl: canvas.toTempFilePathSync({
          x: visibleOrigin.x,
          y: visibleOrigin.y,
          destWidth: visibleSize.width,
          destHeight: visibleSize.height
        }),
        success: () => {
          console.log('分享成功')
          this.shareSuccess();
        },
        fail: (e) => {
          console.log('分享失败', e)
        }
      }
    })
  }

  share(title, func, isShowRecorder) {
    // this.callback = func;
  
    let videoPath = D.sdk.getRecorder().getVideoPath();
    console.log('shareAppMessage title ', title,' isShowRecorder ',isShowRecorder,' videoPath ',videoPath)
    if (isShowRecorder && videoPath) {
      
      tt.shareAppMessage({
        channel: 'video',
        title: title || this.title,
        extra: {
          videoPath: videoPath,
        },
        success: () => {
          console.log('分享成功');
          if (func) {
            func(true);
          }
          this.shareSuccess();
        },
        fail: (e) => {
          console.log('分享失败', e);
          if (e.errMsg.indexOf('short') >= 0) {
            this.share(title, func, false)
          } else {
            func(false);
          }
          

        }
        // x: visibleOrigin.x,
        // y: visibleOrigin.y,
        // imageUrl: canvas.toTempFilePathSync({
        //   destWidth: visibleSize.width,
        //   destHeight: visibleSize.height
        // })
      })
    } else {
      tt.shareAppMessage({
        channel: 'article',
        title: '分享创作',
        description: title || this.title,
        success: () => {
          console.log('SDK分享成功');
          if (func) {
            func(true);
          }
          this.shareSuccess();
        },
        fail: (e) => {
          func(false);
          console.log('SDK分享失败');
          // ToastController.instance().show("分享失败")
        }
        // x: visibleOrigin.x,
        // y: visibleOrigin.y,
        // imageUrl: canvas.toTempFilePathSync({
        //   destWidth: visibleSize.width,
        //   destHeight: visibleSize.height
        // })
      })
    }

    this.shareFlag = true;
  }

  getShareInfo(shareTicket, func) {
    if (shareTicket) {
      tt.getShareInfo({
        shareTicket: shareTicket,
        success: () => {

        },
        fail: () => {

        }
      });
    }

  }


}
