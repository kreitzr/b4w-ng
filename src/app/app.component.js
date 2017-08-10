"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var b4w_balls_module_1 = require("./b4w-balls-module");
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var b4w_service_1 = require("./b4w.service");
var AppComponent = (function () {
    function AppComponent(b4w) {
        var _this = this;
        this.b4w = b4w;
        this.name = 'Blend4Web Test';
        this.interval1 = 500;
        this.interval2 = 500;
        this.recordEnabled = false;
        this.subs = {};
        this.balls = new b4w_balls_module_1.BallsModule();
        this.initScene = function () {
            _this.subs['Color1'] = Rx_1.Observable.timer(0, 2000).subscribe(function () {
                _this.balls.genBall('Color1');
            });
            _this.subs['Color2'] = Rx_1.Observable.timer(1000, 2000).subscribe(function () {
                _this.balls.genBall('Color2');
            });
        };
        this.enableAudioCapture = function () {
            var audio = document.querySelector('audio');
            if (_this.recordEnabled) {
                navigator.getUserMedia({
                    audio: true
                }, function (stream) {
                    audio.src = URL.createObjectURL(stream);
                    audio.play();
                    _this.audioStream = stream;
                    var source = _this.audioContext.createMediaStreamSource(stream);
                    source.connect(_this.analyser);
                    // analyser.connect(this.audioContext.destination);
                    _this.visualize();
                }, function (err) {
                    console.log('Error!');
                });
            }
            else {
                _this.audioStream.getAudioTracks().forEach(function (track) {
                    track.stop();
                });
            }
        };
        this.visualize = function () {
            if (_this.recordEnabled) {
                requestAnimationFrame(_this.visualize);
            }
            _this.analyser.fftSize = 32;
            _this.analyser.minDecibels = -40;
            _this.analyser.maxDecibels = -10;
            var bufferLength = _this.analyser.frequencyBinCount;
            var dataArray = new Uint8Array(bufferLength);
            // let dataArray = new Float32Array(bufferLength);
            _this.analyser.getByteFrequencyData(dataArray);
            // this.analyser.getFloatFrequencyData(dataArray);
            var getAverage = function (data) {
                var sum = 0;
                for (var i = 0; i < data.length; i++) {
                    sum += data[i];
                    return sum / data.length;
                }
            };
            var avg = getAverage(dataArray);
            if (avg > 0) {
                console.log(avg);
                _this.balls.genBall('Color1');
            }
        };
        this.balls.onLoadCallback$.subscribe(this.initScene);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.audioContext = new AudioContext();
        this.analyser = this.audioContext.createAnalyser();
        this.b4w.InitModule(this.balls);
    };
    AppComponent.prototype.initTimers = function (id, value) {
        var _this = this;
        this.subs[id].unsubscribe();
        this.subs[id] = Rx_1.Observable.timer(value / 2, value).subscribe(function () {
            _this.balls.genBall(id);
        });
    };
    AppComponent.prototype.sliderChanged = function (e) {
        this.initTimers(e.target.id, e.target.value);
    };
    AppComponent.prototype.recordModeChanged = function () {
        var _this = this;
        if (this.recordEnabled) {
            // Clear ball timers
            Object.keys(this.subs).forEach(function (key) {
                _this.subs[key].unsubscribe();
            });
        }
        this.enableAudioCapture();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('Destroy timer');
        // this.sub1.unsubscribe();
        // this.sub2.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [b4w_service_1.Blend4WebService]
    }),
    __metadata("design:paramtypes", [b4w_service_1.Blend4WebService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map