"use strict";
exports.__esModule = true;
exports["default"] = new /** @class */ (function () {
    function ValidatorFn() {
        this.maxLength = function (params) {
            return function (value) {
                if (!value)
                    return false;
                if (value.length > params)
                    return false;
                return true;
            };
        };
        this.required = function (params) {
            return function (value) {
                if (!value)
                    return false;
                return true;
            };
        };
        this.max = function (params) {
            return function (value) {
                if (!value)
                    return false;
                if (value > params)
                    return false;
                return true;
            };
        };
    }
    return ValidatorFn;
}());
