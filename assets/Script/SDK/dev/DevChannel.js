import BaseChannel from "../base/BaseChannel";
import DevLogin from "./DevLogin";
export default class DevChannel  extends BaseChannel{

    constructor(id){
        super(id)
        this.loginMgr = new DevLogin();
    }
   
}