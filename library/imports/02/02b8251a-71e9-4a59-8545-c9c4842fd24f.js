"use strict";
cc._RF.push(module, '02b82UacelKWYVFycSEL9JP', 'ChannelID');
// Script/SDK/ChannelID.js

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class, _temp, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChannelID = (_temp = _class = function ChannelID() {
    _classCallCheck(this, ChannelID);
}, _class.DEV = 0, _class.WX = 1, _class.VIVO = 2, _class.TT = 3, _class.OPPO = 4, _temp);
exports.default = ChannelID;
var AdIDS = exports.AdIDS = [
//0 dev
{}, {// 1 WX
}, { //2 vivo
    appId: '100002540',
    bannerID: '2d00b6c0ce7043d792613ff00a9f5c1b',
    rewardID: '153619f6be814602802e0d42a8324ce0',
    insertID: '4e7c8524f1b04f2793523671369d1f03'
}, { //3 tt
    bannerID: '2ku7gkd7m0lu9nfwi7',
    rewardID: '1c03eg1nc0n91638ac',
    shareTitle: 'hello world'
}, { //4 oppo
    appId: '30167490',
    bannerID: '101783',
    rewardID: '101784',
    insertID: '101781',
    nativeID: '105055'
}];

var SDKEvent = exports.SDKEvent = (_temp2 = _class2 = function SDKEvent() {
    _classCallCheck(this, SDKEvent);
}, _class2.NATIVE_AD_LOAD_FINISH = 'natieve_ad_load_finish', _temp2);

cc._RF.pop();