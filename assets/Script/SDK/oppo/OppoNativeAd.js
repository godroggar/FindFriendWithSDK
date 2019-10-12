

import BaseNativeAd from '../base/BaseNativeAd'
import NativeAdItemModel from '../base/NativeAdItemModel';
import { SDKEvent } from '../ChannelID';

export default class OppoNativeAd extends BaseNativeAd{

    create(callback) {

        console.log('OppoNativeAd create 1111')
        this.destroyNative();
        console.log('OppoNativeAd create 2222',this.adUnitID)
        this.nativeAd = qg.createNativeAd({
            posId: this.adUnitID,
        });
        console.log('OppoNativeAd create 33333', this.nativeAd )
        let that = this;
        function onLoad(res){
            console.log('OppoNativeAd  ad load success',res)
            that.nativeAd.offLoad(onLoad)
            callback(null)
            if( res.adList ){
                for (let index = 0; index <  res.adList.length; index++) {
                    const element =  res.adList[index];
                    let adItem = new NativeAdItemModel()
                    adItem.initWithOppo(element)
                    that.adItems.push(adItem)
                }
                console.log('OppoNativeAd onLoad ================  ',res.adList )
                that.publish(SDKEvent.NATIVE_AD_LOAD_FINISH,that.adItems)
            }
        }
        this.nativeAd.onLoad(onLoad)
        function onError(err){
            console.log('OppoNativeAd ad load fail  ', err)
            callback(err)
          
            that.nativeAd.offError(onError)
        }
        this.nativeAd.onError(onError)

        this.nativeAd.load();
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