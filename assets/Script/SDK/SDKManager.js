

import ChannelID, { AdIDS } from "./ChannelID";
import OppoChannel from './oppo/OppoChannel'
import DevChannel from "./dev/DevChannel";
import VivoChannel from "./vivo/VivoChannel";
import TTChannel from "./tt/TTChannel";
export default class SDKManager {

    static UPDATE_GAME_ICON = 'sdk_update_game_icon'
    static START_GAME_ICON = 'start_update_game_icon'

    static channel;

    static channelMap = {};
    static init(channelID) {
        this.channel = this.builder(channelID);
        console.log("sdk初始化完成"+this.channel);
        if (this.channel) {
            this.channel.init();
        }
    }

    static isDev() {
        return this.channel.getID() == ChannelID.TEST;
    }

    static isWX() {
        return this.channel.getID() == ChannelID.WX;

    }
    static builder(id) {
        let channelManager = this.channelMap[id];
        if (!channelManager) {
            cc.log(' channelID ' + id);
            let adIds = AdIDS[parseInt(id)]
            console.log(' adIds ', adIds)
            switch (id) {
                case ChannelID.OPPO:
                    channelManager = new OppoChannel(id, adIds);
                    break;
                case ChannelID.VIVO:
                    channelManager = new VivoChannel(id, adIds);
                    break;
                case ChannelID.TT:
                    channelManager = new TTChannel(id, adIds);
                    break;
                case ChannelID.DEV:
                    channelManager = new DevChannel(id);
                    break;

            }
            this.channelMap[id] = channelManager;
        }

        return channelManager;
    }

    static getChannel() {
        return this.channel;
    }


}
