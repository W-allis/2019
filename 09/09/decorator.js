var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target) {
    console.log(target);
    return target;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.run = function () {
        console.log('Car is running');
    };
    Car = __decorate([
        log
    ], Car);
    return Car;
}());
var c1 = new Car();
c1.run();
