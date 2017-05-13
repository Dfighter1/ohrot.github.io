class OPlayer {
    constructor(element) {
        this.element = element;
        this.step = 5;
    }
    
    play() {
        this.element.play();
        return this;
    }
    pause() {
        this.element.pause();
        return this;
    }
    togglePlay() {
        if(this.element.paused) this.play();
        else this.pause();
        return this;
    }
    
    forward() {
        if (this.element.duration>this.element.currentTime+this.step)
            this.element.currentTime += this.step;
        else
            this.element.currentTime = this.element.duration;
        return this;
    }
    rewind() {
        if (this.element.currentTime-this.step>0)
            this.element.currentTime -= this.step;
        else
            this.element.currentTime = 0;
        return this;
    }
    
    incStep() {
        this.step += 1;
        return this;
    }
    decStep() {
        if (this.step>0) this.step -= 1;
        return this;
    }
    
    incSpeed() {
        console.log('incSpeed');
        var playbackRate = this.element.playbackRate * 1.05;
        if(playbackRate>2) playbackRate = 2;
        this.element.playbackRate = playbackRate;
        toast.setText('재생 속도 증가 : '+playbackRate.toFixed(2)).show();
        return this;
    }
    decSpeed() {
        var playbackRate = this.element.playbackRate / 1.05;
        if(playbackRate<0.5) playbackRate = 0.5;
        this.element.playbackRate = playbackRate;
        toast.setText('재생 속도 감소 : '+playbackRate.toFixed(2)).show();
        return this;
    }
    resetSpeed() {
        this.element.playbackRate = 1;
        toast.setText('재생 속도 초기화 : 1').show();
        return this;
    }
    
    volumeUp() {
        var volume = this.element.volume + 0.1;
        if (volume > 1) volume = 1;
        this.element.volume = volume;
        toast.setText('볼륨 : ' + (volume*100).toFixed(0) + '%');
    }
    volumeDown() {
        var volume = this.element.volume - 0.1;
        if (volume < 0) volume = 0;
        this.element.volume = volume;
        toast.setText('볼륨 : ' + (volume*100).toFixed(0) + '%');
    }
    
    
    control(e) {
        switch (e.keyCode) {
            case 32 :
                // space : toggle play
                if(this.element.paused) this.play();
                else this.pause();
                break;
            case 39 :
                // → : forward
                this.forward();
                break;
            case 37 :
                // ← : rewind
                this.rewind();
                break;
            case 38 :
                // ↑ : increase step
                this.incStep();
                break;
            case 40 :
                // ↓ : decrease step
                this.decStep();
                break;
            case 67 :
                // c : increase speed
                this.incSpeed();
                break;
            case 90 :
                // z : decrease speed
                this.decSpeed();
                break;
            case 88 :
                // x : reset speed
                this.resetSpeed();
                break;
        }
        return this;
    }
}