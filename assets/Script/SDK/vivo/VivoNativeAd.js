

import BaseNativeAd from '../base/BaseNativeAd'
import NativeAdItemModel from '../base/NativeAdItemModel';
import { SDKEvent } from '../ChannelID';

export default class VivoNativeAd extends BaseNativeAd{

    create(callback) {
        this.destroyNative();
        this.nativeAd = qg.createNativeAd({
            posId: this.adUnitID,
        });

        let that = this;
        function onLoad(res){
            that.nativeAd.offLoad(this)
            callback(null)
            console.log('banner  ad load success')
            if( res.adList ){
                for (let index = 0; index <  res.adList.length; index++) {
                    const element =  res.adList[index];
                    let adItem = new NativeAdItemModel()
                    adItem.initWithOppo(element)
                }
                that.publish(SDKEvent.NATIVE_AD_LOAD_FINISH,that.adItems)
            }
        }
        this.nativeAd.onLoad(onLoad)
        function onError(err){
            callback(err)
            console.log('banner ad load fail  ', err)
            that.nativeAd.offError(this)
        }
        this.nativeAd.onError(onError)
    }

    reportAdClick(adId){
        if (!this.nativeAd) {
            return
        }        
        this.nativeAd.reportAdClick({
            adId: adId
        })
    }

    reportAdShow(adId) {
        if (!this.nativeAd) {
            return
        }        
        this.nativeAd.reportAdShow({
            adId: adId
        })
    }
    destroy(){
        this.nativeAd.destroy();
    }
}