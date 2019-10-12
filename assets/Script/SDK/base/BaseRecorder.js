
export class RecoderState {
    static CLOSE = 0;
    static OPEN = 1;
}
export default class BaseRecorder {


    recorder;

    videoPath = null;

    state = RecoderState.CLOSE;
    start(obj) { }
    pause() { }
    resume() { }
    stop(isSave = true) { }
    //记录精彩的视频片段
    recordClip(object) { }

    changeState(s) {
        this.state = s;
    }

    getVideoPath() {
        return this.videoPath;
    }

    isOpen() {
        console.log('isOpen  this.state ',this.state,RecoderState.OPEN)
        return this.state == RecoderState.OPEN;
    }

    isClose() {
        console.log('isClose  this.state ',this.state,RecoderState.CLOSE)
        return this.state == RecoderState.CLOSE;
    }

    getState() {
        return this.state;
    }

}
