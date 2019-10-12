

export default class EventDispatcher {

    eventMap = {};

    constructor(){
        this.eventMap = {}
    }

    addEventListener(eventName,callback , target){
        // cc.log('EventDispatcher addEventListener ',eventName)
        let list = this.eventMap[eventName];
        if(!list){
            list = [];
            this.eventMap[eventName] = list;
            // cc.log('EventDispatcher addEventListener 111111',eventName)
            list.push({handler:callback,target:target});
        }else{
            if(!this.has(eventName,callback,target)){
                // cc.log('EventDispatcher addEventListener 22222222',eventName)
                list.push({handler:callback,target:target});
            }
        }
    }
 
    has(eventName,callback,target){
        let list =  this.eventMap[eventName];
        // cc.log('EventDispatcher has ',eventName,list)
        if(list){
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                if(element.handler === callback && element.target === target){
                    return element;
                }
            }
        }        
        return null;
    }

    removeEventListener(eventName ,callback,target){
        let list=  this.eventMap[eventName];
        if(list){
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                if(element.handler === callback && element.target === target){
                    list.splice(index,1);
                    return;
                }
            }
        }         
    }

     publish(eventName,data,data2,data3){
        let list =  this.eventMap[eventName];
        if(list){
            list.forEach(element => {
                element.handler.call(element.target,data,data2,data3);
            });
        }
    }

    removeAllEventListener(){
        this.eventMap = {};
    }

    removeEventListenerByName(eventName){
        this.eventMap[eventName] = []
    }

}