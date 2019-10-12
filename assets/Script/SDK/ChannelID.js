export default class ChannelID {
    static DEV = 0;
    static WX = 1;
    static VIVO = 2;
    static TT = 3;
    static OPPO = 4;
}

export let AdIDS = [
    //0 dev
    {},
    {// 1 WX
    },
    {//2 vivo
        appId:'100002540',
        bannerID: '2d00b6c0ce7043d792613ff00a9f5c1b',
        rewardID: '153619f6be814602802e0d42a8324ce0',
        insertID: '4e7c8524f1b04f2793523671369d1f03',     
    },
    {//3 tt
        bannerID: '2ku7gkd7m0lu9nfwi7',
        rewardID: '1c03eg1nc0n91638ac',
        shareTitle: 'hello world',     
    },
    {//4 oppo
        appId: '30167490',
        bannerID: '101783',
        rewardID: '101784',
        insertID: '101781',
        nativeID: '105055'
    }
]

export class SDKEvent {
    static NATIVE_AD_LOAD_FINISH = 'natieve_ad_load_finish'
}
