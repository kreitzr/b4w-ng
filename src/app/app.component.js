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
        //   private _main_ball: any;
        this._obj_count = 0;
        this._balls = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.b4w.InitModule(new b4w_balls_module_1.BallsModule());
        // // this.timer = Observable.timer(0, 500);
        // // this.sub = this.timer.subscribe(this.genBall);
    };
    AppComponent.prototype.sliderChanged = function (e) {
        // this.sub.unsubscribe();
        // this.timer = Observable.timer(0, e.srcElement.value);
        // this.sub = this.timer.subscribe(this.genBall);
    };
    AppComponent.prototype.genBall = function () {
        //   let context = b4w.require("balls_main");
        //   console.log(this._main_ball);
        // let new_ball = this.m_obj.copy(this._main_ball, "Ball." + this._obj_count++);
        // let rand_x = (Math.random() * (1 - 0.100) + 0.0200).toFixed(2);
        // let rand_y = (Math.random() * (1 - 0.100) + 0.0200).toFixed(2);
        // this.m_trans.set_translation(new_ball, rand_x, rand_y, 5);
        // this.m_scenes.append_object(new_ball);
        // this._balls.push(new_ball);
        // this.m_phys.enable_simulation(new_ball);
        // // Start removing balls if count exceeds n-balls
        // if (this._balls.length > 200) {
        //     let old_ball = this._balls.shift();
        //     this.m_scenes.remove_object(old_ball);
        // }
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