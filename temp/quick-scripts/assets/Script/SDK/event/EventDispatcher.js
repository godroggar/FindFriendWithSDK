(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SDK/event/EventDispatcher.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4bb45bduqpIv5MmChrnExHC', 'EventDispatcher', __filename);
// Script/SDK/event/EventDispatcher.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventDispatcher = function () {
    function EventDispatcher() {
        _classCallCheck(this, EventDispatcher);

        this.eventMap = {};

        this.eventMap = {};
    }

    _createClass(EventDispatcher, [{
        key: "addEventListener",
        value: function addEventListener(eventName, callback, target) {
            // cc.log('EventDispatcher addEventListener ',eventName)
            var list = this.eventMap[eventName];
            if (!list) {
                list = [];
                this.eventMap[eventName] = list;
                // cc.log('EventDispatcher addEventListener 111111',eventName)
                list.push({ handler: callback, target: target });
            } else {
                if (!this.has(eventName, callback, target)) {
                    // cc.log('EventDispatcher addEventListener 22222222',eventName)
                    list.push({ handler: callback, target: target });
                }
            }
        }
    }, {
        key: "has",
        value: function has(eventName, callback, target) {
            var list = this.eventMap[eventName];
            // cc.log('EventDispatcher has ',eventName,list)
            if (list) {
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    if (element.handler === callback && element.target === target) {
                        return element;
                    }
                }
            }
            return null;
        }
    }, {
        key: "removeEventListener",
        value: function removeEventListener(eventName, callback, target) {
            var list = this.eventMap[eventName];
            if (list) {
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    if (element.handler === callback && element.target === target) {
                        list.splice(index, 1);
                        return;
                    }
                }
            }
        }
    }, {
        key: "publish",
        value: function publish(eventName, data, data2, data3) {
            var list = this.eventMap[eventName];
            if (list) {
                list.forEach(function (element) {
                    element.handler.call(element.target, data, data2, data3);
                });
            }
        }
    }, {
        key: "removeAllEventListener",
        value: function removeAllEventListener() {
            this.eventMap = {};
        }
    }, {
        key: "removeEventListenerByName",
        value: function removeEventListenerByName(eventName) {
            this.eventMap[eventName] = [];
        }
    }]);

    return EventDispatcher;
}();

exports.default = EventDispatcher;
module.exports = exports["default"];

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=EventDispatcher.js.map
        