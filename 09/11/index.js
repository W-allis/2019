"use strict";
var validatorFn = new /** @class */ (function () {
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
        this.required = function (required) {
            return function (value) {
                if (!required)
                    return true;
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
var FormControl = /** @class */ (function () {
    function FormControl(value, rules) {
        var _this = this;
        this.value = undefined;
        this.error = '';
        // public validators: { message: string, handler: TargetControl }[] = []
        this.validators = [];
        this.value = value;
        !(rules instanceof Array) && (rules = [rules]);
        rules.forEach(function (rule) {
            if (rule.hasOwnProperty('required')) {
                _this.validators.push({
                    message: rule.message,
                    handler: validatorFn.required(rule.required)
                });
            }
            if (rule.hasOwnProperty('max')) {
                _this.validators.push({
                    message: rule.message,
                    handler: validatorFn.max(rule.max)
                });
            }
            if (rule.hasOwnProperty('maxLength')) {
                _this.validators.push({
                    message: rule.message,
                    handler: validatorFn.maxLength(rule.maxLength)
                });
            }
            if (rule.hasOwnProperty('validator')) {
                _this.validators.push({
                    message: rule.message,
                    handler: rule.validator
                });
            }
        });
    }
    FormControl.prototype.validate = function () {
        var i = 0, curr;
        while (curr = this.validators[i++]) {
            if (!curr.handler(this.value)) {
                this.error = curr.message;
                // this.error = 
                return false;
            }
        }
        return true;
    };
    return FormControl;
}());
var FormGroup = /** @class */ (function () {
    function FormGroup(validators) {
        this.validators = {};
        this.errors = {};
        this.validators = validators;
    }
    FormGroup.prototype.validate = function (callback) {
        var _this = this;
        var valid = Object.keys(this.validators).every(function (key) { return _this.validators[key].validate(); });
        // 收集错误日志逻辑需更新
        this.errors = Object.keys(this.validators).reduce(function (total, curr) { return (total[curr] = _this.validators[curr].error, total); }, {});
        callback(valid);
    };
    FormGroup.prototype.validateField = function () {
    };
    FormGroup.prototype.resetForm = function () {
    };
    return FormGroup;
}());
var loginModel = {
    name: 12,
    password: '321'
};
var loginForm = new FormGroup({
    name: new FormControl(loginModel.name, [{
            required: false,
            message: '用户名不能为空'
        }, {
            max: 10,
            message: '用户名不能大于10'
        }]),
    password: new FormControl(loginModel.password, {
        required: true,
        message: '密码不能为空'
    })
});
loginForm.validate(function (valid) {
    console.log(valid);
});
console.log(loginForm);
