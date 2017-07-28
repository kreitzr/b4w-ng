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
var b4w_service_1 = require("./b4w.service");
var AppComponent = (function () {
    function AppComponent(b4w) {
        this.b4w = b4w;
        this.name = 'Blend4Web Test';
        this.balls = new b4w_balls_module_1.BallsModule();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.b4w.InitModule(this.balls);
        // // this.timer = Observable.timer(0, 500);
        // // this.sub = this.timer.subscribe(this.genBall);
    };
    AppComponent.prototype.sliderChanged = function (e) {
        this.balls.genBall();
        // this.sub.unsubscribe();
        // this.timer = Observable.timer(0, e.srcElement.value);
        // this.sub = this.timer.subscribe(this.genBall);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('Destroy timer');
        this.sub.unsubscribe();
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