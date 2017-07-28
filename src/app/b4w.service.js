"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Blend4WebService = (function () {
    function Blend4WebService() {
    }
    Blend4WebService.prototype.GetModule = function (moduleName) {
        return b4w.require(moduleName + '_main');
    };
    Blend4WebService.prototype.InitModule = function (module) {
        b4w.register(module.name + '_main', module.context);
        b4w.require(module.name + '_main').init();
    };
    return Blend4WebService;
}());
Blend4WebService = __decorate([
    core_1.Injectable()
], Blend4WebService);
exports.Blend4WebService = Blend4WebService;
//# sourceMappingURL=b4w.service.js.map