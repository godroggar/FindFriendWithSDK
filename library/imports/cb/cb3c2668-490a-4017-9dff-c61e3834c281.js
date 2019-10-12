"use strict";
cc._RF.push(module, 'cb3c2ZoSQpAF53/xh44NMKB', 'NativeAdItemModel');
// Script/SDK/base/NativeAdItemModel.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NativeAdItemModel = function () {
    function NativeAdItemModel() {
        _classCallCheck(this, NativeAdItemModel);
    }

    _createClass(NativeAdItemModel, [{
        key: "initWithOppo",


        //获取广告类型，取值说明：0：无 1：纯文字 2：图片 3：图文混合 4：视频


        //“广告”标签图片


        //推广应用的Icon图标


        //广告标题
        value: function initWithOppo(res) {
            this.adId = res.adId;
            this.title = res.title;
            this.desc = res.desc;
            this.iconUrlList = res.iconUrlList;
            this.imgUrlList = res.imgUrlList;
            this.logoUrl = res.logoUrl;
            this.clickBtnTxt = res.clickBtnTxt;
            this.creativeType = res.creativeType;
            this.interactionType = res.interactionType;
        }
        //获取广告点击之后的交互类型，取值说明： 0：无 1：浏览类 2：下载类 3：浏览器（下载中间页广告） 4：打开应用首页 5：打开应用详情页


        //点击按钮文本描述


        //广告图片


        //广告描述


        //广告标识，用来上报曝光与点击

    }, {
        key: "getID",
        value: function getID() {
            return this.adId;
        }
    }, {
        key: "getTitle",
        value: function getTitle() {
            return this.title;
        }
    }, {
        key: "getDesc",
        value: function getDesc() {
            return this.desc;
        }
    }, {
        key: "getIconList",
        value: function getIconList() {
            return this.iconUrlList;
        }
    }, {
        key: "getImgList",
        value: function getImgList() {
            return this.imgUrlList;
        }
    }, {
        key: "getButtonText",
        value: function getButtonText() {
            return this.clickBtnTxt;
        }
    }]);

    return NativeAdItemModel;
}();

exports.default = NativeAdItemModel;
module.exports = exports["default"];

cc._RF.pop();