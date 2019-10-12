(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

require('./rt-sys.js');
require('./rt_input.js');
require('./rt-game.js');
require('./rt-jsb.js');

require('./jsb-node.js');
require('./jsb-audio.js');
require('./jsb-loader.js');
require('./jsb-editbox.js');

},{"./jsb-audio.js":2,"./jsb-editbox.js":3,"./jsb-loader.js":4,"./jsb-node.js":5,"./rt-game.js":6,"./rt-jsb.js":7,"./rt-sys.js":8,"./rt_input.js":9}],2:[function(require,module,exports){
'use strict';

/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

cc.Audio = function (src) {
    this.src = src;
    this.volume = 1;
    this.loop = false;
    this.id = -1;
};

cc.AudioEngine = {};

cc.AudioEngine.AudioState = {
    ERROR: -1,
    INITIALZING: 0,
    PLAYING: 1,
    PAUSED: 2,
    STOPPED: 3
};

(function (proto) {

    function playInnerAudio(src, loop, volume) {
        var innerAudio = qg.createInnerAudioContext();
        innerAudio.state = cc.AudioEngine.AudioState.PLAYING;
        innerAudio.src = "" + src;
        innerAudio.loop = loop;
        innerAudio.volume = volume;
        innerAudio.play();
        return innerAudio;
    }

    // Using the new audioEngine
    cc.audioEngine = {};

    cc.audioEngine.setMaxWebAudioSize = function () {};
    cc.audioEngine.audios = [];

    cc.Audio.State = cc.AudioEngine.AudioState;

    proto.play = function () {
        var clip = this.src;
        if (typeof this.volume !== 'number') {
            this.volume = 1;
        }
        var path;
        if (typeof clip === 'string') {
            // backward compatibility since 1.10
            cc.warnID(8401, 'cc.audioEngine', 'cc.AudioClip', 'AudioClip', 'cc.AudioClip', 'audio');
            path = clip;
        } else {
            if (!clip) {
                return;
            }
            path = clip._nativeAsset;
        }
        var md5Pipe = cc.loader.md5Pipe;
        if (md5Pipe) {
            path = md5Pipe.transformURL(path);
        }
        var innerAudio = playInnerAudio(path, this.loop, this.volume);
        this.id = innerAudio;
        return innerAudio;
    };

    proto.pause = function () {
        if (this.id != -1) {
            this.id.state = cc.AudioEngine.AudioState.PAUSED;
            this.id.pause();
        }
    };

    proto.resume = function () {
        if (this.id != -1) {
            this.id.state = cc.AudioEngine.AudioState.PLAYING;
            this.id.play();
        }
    };

    proto.stop = function () {
        if (this.id != -1) {
            this.id.state = cc.AudioEngine.AudioState.STOPPED;
            this.id.stop();
            this.id = -1;
        }
    };

    proto.destroy = function () {};

    proto.setLoop = function (loop) {
        if (this.id != -1) {
            this.loop = loop;
            this.id.loop = loop;
        }
    };

    proto.getLoop = function () {
        return this.loop;
    };

    proto.setVolume = function (volume) {
        if (this.id != -1) {
            this.volume = volume;
            this.id.volume = volume;
        }
    };

    proto.getVolume = function () {
        return this.volume;
    };

    proto.setCurrentTime = function (time) {
        if (this.id != -1) {
            this.id.seek(time);
        }
    };

    proto.getCurrentTime = function () {
        if (this.id != -1) {
            return new Number(this.id.currentTime);
        }
        return new Number(0);
    };

    proto.getDuration = function () {
        if (this.id != -1) {
            return new Number(this.id.duration);
        }
        return new Number(0);
    };

    proto.getState = function () {
        if (this.id != -1 && this.id.currentTime <= this.id.duration) {
            return this.id.state;
        }
        return cc.AudioEngine.AudioState.ERROR;
    };

    proto.setFinishCallback = function (id, callback) {
        if (this.id != -1) {
            this.id.onEnded(callback);
        }
    };

    // polyfill audioEngine

    var _music = {
        id: -1,
        clip: '',
        loop: false,
        volume: 1
    };
    var _effect = {
        volume: 1
    };

    cc.audioEngine.play = function (clip, loop, volume) {
        if (typeof volume !== 'number') {
            volume = 1;
        }
        var path;
        if (typeof clip === 'string') {
            // backward compatibility since 1.10
            cc.warnID(8401, 'cc.audioEngine', 'cc.AudioClip', 'AudioClip', 'cc.AudioClip', 'audio');
            path = clip;
        } else {
            if (!clip) {
                return;
            }
            path = clip._nativeAsset;
        }
        var md5Pipe = cc.loader.md5Pipe;
        if (md5Pipe) {
            path = md5Pipe.transformURL(path);
        }
        var innerAudio = playInnerAudio(path, loop, volume);
        cc.audioEngine.audios.push(innerAudio);
        return innerAudio;
    };
    cc.audioEngine.playMusic = function (clip, loop) {
        cc.audioEngine.stop(_music.id);
        _music.id = cc.audioEngine.play(clip, loop, _music.volume);
        _music.loop = loop;
        _music.clip = clip;
        return _music.id;
    };
    cc.audioEngine.stopMusic = function () {
        _music.id.state = cc.AudioEngine.AudioState.STOPPED;
        _music.id.stop();
    };
    cc.audioEngine.pauseMusic = function () {
        _music.id.state = cc.AudioEngine.AudioState.PAUSED;
        _music.id.pause();
        return _music.id;
    };
    cc.audioEngine.resumeMusic = function () {
        _music.id.state = cc.AudioEngine.AudioState.PLAYING;
        _music.id.play();
        return _music.id;
    };
    cc.audioEngine.getMusicVolume = function () {
        return _music.volume;
    };
    cc.audioEngine.setMusicVolume = function (volume) {
        _music.volume = volume;
        _music.id.volume = _music.volume;
        return volume;
    };
    cc.audioEngine.isMusicPlaying = function () {
        return cc.audioEngine.getState(_music.id) === cc.AudioEngine.AudioState.PLAYING;
    };
    cc.audioEngine.playEffect = function (clip, loop) {
        var volume = _effect.volume;

        if (typeof clip === 'string') {
            return cc.audioEngine.play(path, loop, volume);
        } else {
            if (!clip) {
                return;
            }
            if (clip.loaded) {
                return cc.audioEngine.play(clip._nativeAsset, loop, volume);
            } else {
                cc.loader.load({
                    url: clip.nativeUrl,
                    skips: ['Loader']
                }, function (err, audioNativeAsset) {
                    if (err) {
                        cc.error(err);
                        return;
                    }
                    if (!clip.loaded) {
                        clip._nativeAsset = audioNativeAsset;
                        cc.audioEngine.play(audioNativeAsset, loop, volume);
                    }
                });

                return -1;
            }
        }
    };
    cc.audioEngine.setEffectsVolume = function (volume) {
        for (var id in cc.audioEngine.audios) {
            if (id === _music.id) continue;
            cc.audioEngine.setVolume(id, volume);
        }

        _effect.volume = volume;
    };
    cc.audioEngine.getEffectsVolume = function () {
        return _effect.volume;
    };
    cc.audioEngine.pauseEffect = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            return id.pause();
        }
    };
    cc.audioEngine.pauseAllEffects = function () {
        var musicPlay = cc.audioEngine.getState(_music.id) === cc.AudioEngine.AudioState.PLAYING;
        cc.audioEngine.pauseAll();
        if (musicPlay) {
            _music.id.play();
        }
    };
    cc.audioEngine.resumeEffect = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            cc.audioEngine.resume(id);
        }
    };
    cc.audioEngine.resumeAllEffects = function () {
        var musicPaused = cc.audioEngine.getState(_music.id) === cc.AudioEngine.AudioState.PAUSED;
        cc.audioEngine.resumeAll();
        if (musicPaused && cc.audioEngine.getState(_music.id) === cc.AudioEngine.AudioState.PLAYING) {
            cc.audioEngine.pause(_music.id);
        }
    };
    cc.audioEngine.stopEffect = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            return id.stop();
        }
    };
    cc.audioEngine.stopAllEffects = function () {
        var musicPlaying = cc.audioEngine.getState(_music.id) === cc.AudioEngine.AudioState.PLAYING;
        var currentTime = cc.audioEngine.getCurrentTime(_music.id);
        cc.audioEngine.stopAll();
        if (musicPlaying) {
            _music.id = cc.audioEngine.play(_music.clip, _music.loop);
            _music.id.seek(currentTime);
        }
    };

    // Function Implement in C++
    cc.audioEngine.getMaxAudioInstance = function () {
        return 24;
    };
    cc.audioEngine.getState = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1 && id.currentTime <= id.duration) {
            return id.state;
        }
        return cc.AudioEngine.AudioState.ERROR;
    };
    cc.audioEngine.pauseAll = function () {
        cc.audioEngine.audios.forEach(function (element) {
            cc.audioEngine.pause(element);
        });
    };
    cc.audioEngine.resumeAll = function () {
        cc.audioEngine.audios.forEach(function (element) {
            cc.audioEngine.resume(element);
        });
    };
    cc.audioEngine.stopAll = function () {
        cc.audioEngine.audios.forEach(function (element) {
            cc.audioEngine.stop(element);
        });
    };
    cc.audioEngine.stop = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);

        if (index > -1) {
            id.state = cc.AudioEngine.AudioState.STOPPED;
            id.stop();
            cc.audioEngine.audios = cc.audioEngine.audios.filter(function (item) {
                return item !== id;
            });
        }
    };
    cc.audioEngine.pause = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            id.state = cc.AudioEngine.AudioState.PAUSED;
            id.pause();
        }
        return id;
    };
    cc.audioEngine.resume = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            id.state = cc.AudioEngine.AudioState.PLAYING;
            id.play();
        }
        return id;
    };

    // incompatible implementation for game pause & resume
    cc.audioEngine._break = cc.audioEngine.pauseAll;
    cc.audioEngine._restore = cc.audioEngine.resumeAll;

    // deprecated

    cc.audioEngine._uncache = cc.audioEngine.uncache;
    cc.audioEngine.uncache = function (clip) {
        // No used in vivo
    };

    cc.audioEngine._preload = cc.audioEngine.preload;
    cc.audioEngine.preload = function (filePath, callback) {
        cc.warn('`cc.audioEngine.preload` is deprecated, use `cc.loader.loadRes(url, cc.AudioClip)` instead please.');
    };

    cc.audioEngine.setFinishCallback = function (id, callback) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            id.onEnded(callback);
        }
    };

    cc.audioEngine.getCurrentTime = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            return id.currentTime;
        }
        return new Number(0);
    };

    cc.audioEngine.setCurrentTime = function (id, time) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            id.seek(time);
        }
    };

    cc.audioEngine.setLoop = function (id, loop) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            id.loop = loop;
        }
    };

    cc.audioEngine.isLoop = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            return id.loop;
        }
        return false;
    };

    cc.audioEngine.setVolume = function (id, volume) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            id.volume = volume;
        }
    };

    cc.audioEngine.getVolume = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            return id.volume;
        }
        return new Number(0);
    };

    cc.audioEngine.getDuration = function (id) {
        var index = cc.audioEngine.audios.indexOf(id);
        if (index > -1) {
            return new Number(id.duration);
        }
        return new Number(0);
    };

    cc.audioEngine.setMaxAudioInstance = function (num) {};
})(cc.Audio.prototype);

},{}],3:[function(require,module,exports){
'use strict';

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

(function () {
    if (!(cc && cc.EditBox)) {
        return;
    }

    var KeyboardReturnType = cc.EditBox.KeyboardReturnType;
    var InputMode = cc.EditBox.InputMode;
    var InputFlag = cc.EditBox.InputFlag;
    var _p = cc.EditBox._EditBoxImpl.prototype;

    function getInputType(type) {
        switch (type) {
            case InputMode.EMAIL_ADDR:
                return 'email';
            case InputMode.NUMERIC:
            case InputMode.DECIMAL:
                return 'number';
            case InputMode.PHONE_NUMBER:
                return 'phone';
            case InputMode.URL:
                return 'url';
            case InputMode.SINGLE_LINE:
            case InputMode.ANY:
            default:
                return 'text';
        }
    }

    function getKeyboardReturnType(type) {
        switch (type) {
            case KeyboardReturnType.DEFAULT:
            case KeyboardReturnType.DONE:
                return 'done';
            case KeyboardReturnType.SEND:
                return 'send';
            case KeyboardReturnType.SEARCH:
                return 'search';
            case KeyboardReturnType.GO:
                return 'go';
            case KeyboardReturnType.NEXT:
                return 'next';
        }
        return 'done';
    }

    function updateLabelsInvisible(editBox) {
        var placeholderLabel = editBox._placeholderLabel;
        var textLabel = editBox._textLabel;
        var displayText = editBox._impl._text;

        placeholderLabel.node.active = displayText === '';
        textLabel.node.active = displayText !== '';
    }

    cc.EditBox.prototype.editBoxEditingDidBegan = function () {
        cc.Component.EventHandler.emitEvents(this.editingDidBegan, this);
        this.node.emit('editing-did-began', this);
    };

    cc.EditBox.prototype.editBoxEditingDidEnded = function () {
        cc.Component.EventHandler.emitEvents(this.editingDidEnded, this);
        this.node.emit('editing-did-ended', this);
    };

    cc.EditBox.prototype._updateStayOnTop = function () {
        // jsb not support
    };

    _p.createInput = function () {
        var editBoxImpl = this;

        var multiline = this._inputMode === InputMode.ANY;
        var inputTypeString = getInputType(editBoxImpl._inputMode);
        if (editBoxImpl._inputFlag === InputFlag.PASSWORD) inputTypeString = 'password';

        var rect = this._getRect();

        qg.showKeyboard({
            defaultValue: editBoxImpl._text,
            maxLength: editBoxImpl._maxLength,
            multiple: multiline,
            confirmHold: false,
            confirmType: getKeyboardReturnType(editBoxImpl._returnType)
        });
        if (this._delegate) {
            var editBox = this._delegate;
            cc.Component.EventHandler.emitEvents(editBox.editingDidBegan, editBox);
            editBox.node.emit('editing-did-began', editBox);
            updateLabelsInvisible(editBox);
        }

        function onConfirm(res) {
            editBoxImpl._delegate && editBoxImpl._delegate.editBoxEditingReturn && editBoxImpl._delegate.editBoxEditingReturn();
        }
        qg.onKeyboardConfirm(onConfirm);

        function onInput(res) {
            if (res.value.length > editBoxImpl._maxLength) {
                res.value = res.value.slice(0, editBoxImpl._maxLength);
            }
            if (editBoxImpl._delegate && editBoxImpl._delegate.editBoxTextChanged) {
                if (editBoxImpl._text !== res.value) {
                    editBoxImpl._text = res.value;
                    editBoxImpl._delegate.editBoxTextChanged(editBoxImpl._text);
                }
            }
        }
        qg.onKeyboardInput(onInput);

        function onComplete(res) {
            editBoxImpl._endEditing();
            qg.offKeyboardConfirm(onConfirm);
            qg.offKeyboardInput(onInput);
            qg.offKeyboardComplete(onComplete);
        }
        qg.onKeyboardComplete(onComplete);
    };

    _p.setTabIndex = function (index) {
        // not support
    };

    _p.setFocus = function () {
        this._beginEditing();
    };

    _p.isFocused = function () {
        return this._editing;
    };

    _p.stayOnTop = function (flag) {
        // not support
    };

    _p._updateMatrix = function () {};

    _p._updateSize = function (newWidth, newHeight) {
        // not support
    };

    _p._getRect = function () {
        var node = this._node,
            scaleX = cc.view._scaleX,
            scaleY = cc.view._scaleY;
        var dpr = cc.view._devicePixelRatio;

        var math = cc.vmath;
        var matrix = math.mat4.create();
        node.getWorldMatrix(matrix);
        var contentSize = node._contentSize;
        var vec3 = cc.v3();
        vec3.x = -node._anchorPoint.x * contentSize.width;
        vec3.y = -node._anchorPoint.y * contentSize.height;

        math.mat4.translate(matrix, matrix, vec3);

        scaleX /= dpr;
        scaleY /= dpr;

        var finalScaleX = matrix.m00 * scaleX;
        var finaleScaleY = matrix.m05 * scaleY;

        return {
            x: matrix.m12 * finalScaleX,
            y: matrix.m13 * finaleScaleY,
            width: contentSize.width * finalScaleX,
            height: contentSize.height * finaleScaleY
        };
    };

    _p.setMaxLength = function (maxLength) {
        if (!isNaN(maxLength)) {
            if (maxLength < 0) {
                //we can't set Number.MAX_VALUE to input's maxLength property
                //so we use a magic number here, it should works at most use cases.
                maxLength = 65535;
            }
            this._maxLength = maxLength;
        }
    };

    _p.setString = function (text) {
        this._text = text;
        this._updateInput();
        updateLabelsInvisible(this._delegate);
    };

    _p._updateInput = function () {
        var tmpText = this._text;
        if (this._inputFlag === InputFlag.PASSWORD) {
            tmpText = tmpText.replace(/./g, '*');
        }
        this._delegate._textLabel.string = tmpText;
    };

    _p.setFontSize = function (fontSize) {
        this._edFontSize = fontSize || this._edFontSize;
        this._delegate._textLabel.fontSize = this._edFontSize;
    };

    _p.setFontColor = function (color) {
        this._textColor = color;
        this._delegate._textLabel.fontColor = this._textColor;
    };

    _p.setInputMode = function (inputMode) {
        this._inputMode = inputMode;
    };

    _p.setInputFlag = function (inputFlag) {
        this._inputFlag = inputFlag;
    };

    _p.setReturnType = function (returnType) {
        this._returnType = returnType;
    };

    _p._beginEditing = function () {
        this.createInput();
    };

    _p._endEditing = function () {
        var self = this;
        if (this._editing) {
            self._endEditingOnMobile();
            if (self._delegate && self._delegate.editBoxEditingDidEnded) {
                self._delegate.editBoxEditingDidEnded();
            }
        }
        this._editing = false;
    };

    _p.clear = function () {
        this._node = null;
        this.setDelegate(null);
    };
})();

},{}],4:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

function downloadScript(item, callback) {
    require(item.url);
    return null;
}

function downloadAudio(item) {
    return item.url;
}

function loadAudio(item, callback) {
    var loadByDeserializedAsset = item._owner instanceof cc.AudioClip;
    if (loadByDeserializedAsset) {
        return item.url;
    } else {
        var audioClip = new cc.AudioClip();
        // obtain user url through nativeUrl
        audioClip._setRawAsset(item.rawUrl, false);
        // obtain download url through _nativeAsset
        audioClip._nativeAsset = item.url;
        return audioClip;
    }
}

function downloadImage(item, callback) {
    var img = new Image();
    img.src = item.url;
    img.onload = function (info) {
        callback(null, img);
    };
    // Don't return anything to use async loading.
}

function _getFontFamily(fontHandle) {
    var ttfIndex = fontHandle.lastIndexOf(".ttf");
    if (ttfIndex === -1) return fontHandle;

    var slashPos = fontHandle.lastIndexOf("/");
    var fontFamilyName;
    if (slashPos === -1) {
        fontFamilyName = fontHandle.substring(0, ttfIndex) + "_LABEL";
    } else {
        fontFamilyName = fontHandle.substring(slashPos + 1, ttfIndex) + "_LABEL";
    }
    if (fontFamilyName.indexOf(' ') !== -1) {
        fontFamilyName = '"' + fontFamilyName + '"';
    }
    return fontFamilyName;
}
var loadFont = void 0;
function downloadText(item, callback) {
    var url = item.url;

    qg.readFile({
        uri: url,
        encoding: "utf8",
        success: function success(params) {
            callback(null, params.text);
        },
        fail: function fail(params) {
            callback(new Error('Download text failed: ' + url), null);
        }
    });
};

function downloadBinary(item, callback) {
    var url = item.url;

    qg.readFile({
        uri: url,
        encoding: "binary",
        success: function success(params) {
            callback(null, params.text);
        },
        fail: function fail(params) {
            callback(new Error('Download text failed: ' + url), null);
        }
    });
};
loadFont = function loadFont(item, callback) {
    var url = item.url;
    var fontFamilyName = _getFontFamily(url);

    var fontFace = new FontFace(fontFamilyName, "url('" + url + "')");
    document.fonts.add(fontFace);

    fontFace.load();
    fontFace.loaded.then(function () {
        callback(null, fontFamilyName);
    }, function () {
        cc.warnID(4933, fontFamilyName);
        callback(null, fontFamilyName);
    });
};

cc.loader.addDownloadHandlers({
    // JS
    'js': downloadScript,
    'jsc': downloadScript,

    // Images
    'png': downloadImage,
    'jpg': downloadImage,
    'bmp': downloadImage,
    'jpeg': downloadImage,
    'gif': downloadImage,
    'ico': downloadImage,
    'tiff': downloadImage,
    'webp': downloadImage,
    'image': downloadImage,
    'pvr': downloadImage,
    'etc': downloadImage,

    // Audio
    'mp3': downloadAudio,
    'ogg': downloadAudio,
    'wav': downloadAudio,
    'mp4': downloadAudio,
    'm4a': downloadAudio,

    // Text
    'txt': downloadText,
    'xml': downloadText,
    'vsh': downloadText,
    'fsh': downloadText,
    'atlas': downloadText,

    'tmx': downloadText,
    'tsx': downloadText,

    'json': downloadText,
    'ExportJson': downloadText,
    'plist': downloadText,

    'fnt': downloadText,

    'binary': downloadBinary,
    'bin': downloadBinary,

    'default': downloadText
});

cc.loader.addLoadHandlers({
    // Font
    'font': loadFont,
    'eot': loadFont,
    'ttf': loadFont,
    'woff': loadFont,
    'svg': loadFont,
    'ttc': loadFont,

    // Audio
    'mp3': loadAudio,
    'ogg': loadAudio,
    'wav': loadAudio,
    'mp4': loadAudio,
    'm4a': loadAudio
});

},{}],5:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

var math = cc.vmath;

var _typedArray_temp = new Float32Array(16);
var _mat4_temp = math.mat4.create();

function _mat4ToArray(typedArray, mat4) {
  typedArray[0] = mat4.m00;
  typedArray[1] = mat4.m01;
  typedArray[2] = mat4.m02;
  typedArray[3] = mat4.m03;
  typedArray[4] = mat4.m04;
  typedArray[5] = mat4.m05;
  typedArray[6] = mat4.m06;
  typedArray[7] = mat4.m07;
  typedArray[8] = mat4.m08;
  typedArray[9] = mat4.m09;
  typedArray[10] = mat4.m10;
  typedArray[11] = mat4.m11;
  typedArray[12] = mat4.m12;
  typedArray[13] = mat4.m13;
  typedArray[14] = mat4.m14;
  typedArray[15] = mat4.m15;
}

cc.Node.prototype.getWorldRTInAB = function () {
  this.getWorldRT(_mat4_temp);
  _mat4ToArray(_typedArray_temp, _mat4_temp);
  return _typedArray_temp;
};

cc.Node.prototype.getWorldMatrixInAB = function () {
  this._updateWorldMatrix();
  _mat4ToArray(_typedArray_temp, this._worldMatrix);
  return _typedArray_temp;
};

},{}],6:[function(require,module,exports){
"use strict";

cc.game.restart = function () {};

qg.onHide(function (data) {
    cc.game.emit(cc.game.EVENT_HIDE);
});

qg.onShow(function () {
    cc.game.emit(cc.game.EVENT_SHOW);
});

},{}],7:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

if (!jsb.fileUtils) {
    jsb.fileUtils = {
        getStringFromFile: function getStringFromFile(url) {
            var result = qg.readFileSync && qg.readFileSync({
                uri: url,
                encoding: 'utf8'
            });

            return result && result.text;
        },

        getDataFromFile: function getDataFromFile(url) {
            var result = qg.readFileSync && qg.readFileSync({
                uri: url,
                encoding: 'binary'
            });

            return result && result.text;
        },

        getWritablePath: function getWritablePath() {
            // return `${rt.env.USER_DATA_PATH}/`;
            return 'internal://files/';
        },

        writeToFile: function writeToFile(map, url) {
            var str = JSON.stringify(map);
            var result = qg.writeFileSync && qg.writeFileSync({
                uri: url,
                encoding: 'utf8',
                text: str
            });

            if (result !== 'success') {
                throw new Error('writeToFile fail');
            }
        },

        getValueMapFromFile: function getValueMapFromFile(url) {
            var map_object = {};
            var read = qg.readFileSync && qg.readFileSync({
                uri: url,
                encoding: 'utf8'
            });
            if (!read || !read.text) {
                return map_object;
            }

            try {
                map_object = JSON.parse(read.text);
            } catch (error) {}

            return map_object;
        }
    };
}

if (!jsb.saveImageData) {
    if (qg.saveImageTempSync && qg.copyFileSync) {
        jsb.saveImageData = function (data, width, height, filePath) {
            var index = filePath.lastIndexOf(".");
            if (index === -1) {
                return false;
            }
            var fileType = filePath.substr(index + 1);
            var tempFilePath = qg.saveImageTempSync({
                'data': data,
                'width': width,
                'height': height,
                'fileType': fileType
            });
            if (tempFilePath === '') {
                return false;
            }
            var savedFilePath = qg.copyFileSync({
                srcUri: tempFilePath,
                dstUri: filePath
            });
            if (savedFilePath === filePath) {
                return true;
            }
            return false;
        };
    } else {
        jsb.saveImageData = function (data, width, height, filePath) {
            // 旧版本不支持该方法
        };
    }
}

if (!jsb.setPreferredFramesPerSecond) {
    jsb.setPreferredFramesPerSecond = function (fps) {
        qg.setPreferredFramesPerSecond(fps);
    };
}

var _motionEnabled = false;
jsb.device.setMotionEnabled = function (enabled) {
    if (_motionEnabled === enabled) return;
    if (enabled) {
        qg.subscribeAccelerometer({
            callback: function callback(data) {
                var event = new DeviceMotionEvent();
                event._accelerationIncludingGravity.x = data.x;
                event._accelerationIncludingGravity.y = data.y;
                event._accelerationIncludingGravity.z = data.z;
                jsb.device.dispatchDeviceMotionEvent(event);
            }
        });
    } else {
        qg.unsubscribeAccelerometer();
    }
    _motionEnabled = enabled;
};

},{}],8:[function(require,module,exports){
'use strict';

/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
(function () {
  'use strict';

  var sys = cc.sys;
  var noop = function noop() {};

  sys.getNetworkType = noop;

  sys.getBatteryLevel = function () {
    var batteryInfo = qg.getBatteryInfoSync();

    return batteryInfo && batteryInfo.level;
  };

  sys.garbageCollect = noop;

  sys.restartVM = noop;
  sys.isObjectValid = noop;
})();

},{}],9:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

jsb.inputBox = {
  onConfirm: function onConfirm(cb) {
    qg.onKeyboardConfirm(cb);
  },
  offConfirm: function offConfirm(cb) {
    qg.offKeyboardConfirm(cb);
  },

  onComplete: function onComplete(cb) {
    qg.onKeyboardComplete(cb);
  },
  offComplete: function offComplete(cb) {
    qg.offKeyboardComplete(cb);
  },

  onInput: function onInput(cb) {
    qg.onKeyboardInput(cb);
  },
  offInput: function offInput(cb) {
    qg.offKeyboardInput(cb);
  },

  /**
   * @param {string}		options.defaultValue
   * @param {number}		options.maxLength
   * @param {bool}        options.multiple
   * @param {bool}        options.confirmHold
   * @param {string}      options.confirmType
   * @param {string}      options.inputType
   * 
   * Values of options.confirmType can be [done|next|search|go|send].
   * Values of options.inputType can be [text|email|number|phone|password].
   */
  show: function show(options) {
    qg.showKeyboard(options);
  },
  hide: function hide() {
    qg.hideKeyboard();
  }
};

},{}]},{},[1]);
