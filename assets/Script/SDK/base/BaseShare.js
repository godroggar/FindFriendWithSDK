
export default class BaseShare {
    shareFlag = false;
    callback = null;
    title = ''
    constructor(title){
        this.title = title;
    }
    share(title, func) { }
    shareSuccess(){}
}