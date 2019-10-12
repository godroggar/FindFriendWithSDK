cc.Class({
    extends: cc.Component,
//需要更多源码联系Q:852183691
//或者
//关注微信公众号“史于二”
    properties: {
        gameApplication:{
            default:null,
            type:Object
        }  
    },

    onLoad: function () {
        this.gameApplication = cc.find("GameApplication").getComponent("GameApplication");
    },

    start () {
        if (typeof bid !== 'undefined' && typeof mid !== 'undefined' && typeof lid !== 'undefined') {
            this.gameApplication.openLevelView(bid,mid);
        }
    },

    onPlayBtnClicked(){
        cc.log("onPlayBtnClicked");

        this.gameApplication.openMainView();
        this.gameApplication.soundManager.playSound("btn_click");
    },

    // setProgress:function(node,progress){
    //     node.string = progress + "%";
    // }
    // update (dt) {},
});
