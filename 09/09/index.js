"use strict";
// enum Status = {  }
var Subscriber = /** @class */ (function () {
    function Subscriber() {
    }
    return Subscriber;
}());
var Subject = /** @class */ (function () {
    function Subject(observable) {
        var _this = this;
        this.destination = {
            next: function (value) { },
            complete: function () { },
            error: function (error) { }
        };
        this._subscribe = 'pedding';
        this.observable = function () {
            // const observe = new Observer()
            observable(_this);
        };
    }
    Subject.prototype.next = function (value) {
        if (this._subscribe !== 'pedding')
            return;
        try {
            this.destination.next(value);
        }
        catch (error) {
            this.error(error);
        }
    };
    Subject.prototype.complete = function () {
        if (this._subscribe !== 'pedding')
            return;
        try {
            this.destination.complete && this.destination.complete();
        }
        catch (error) {
            this.error(error);
        }
    };
    Subject.prototype.error = function (error) {
        if (this._subscribe !== 'pedding')
            return;
        try {
            this.destination.error && this.destination.error(error);
        }
        catch (error) {
            throw error;
        }
        this.unsubscribe();
    };
    Subject.prototype.unsubscribe = function () {
        this._subscribe = 'errorOrComplete';
    };
    Subject.prototype.subscribe = function (ObserverOrNext, error, complete) {
        if (typeof ObserverOrNext === 'function') {
            this.destination = { next: ObserverOrNext, error: error, complete: complete };
        }
        if (typeof ObserverOrNext === 'object') {
            this.destination = { next: ObserverOrNext.next, error: ObserverOrNext.error, complete: ObserverOrNext.complete };
        }
        this.observable();
    };
    return Subject;
}());
var instance = new Subject(function (observe) {
    observe.next(1);
    observe.next(2);
    // observe.unsubscribe()
    setTimeout(function () {
        observe.next(3);
    }, 3000);
});
instance.subscribe(function (res) {
    console.log(res);
}, function (error) {
    console.error(error);
});
instance.subscribe(function (res) {
    console.log(res);
});
