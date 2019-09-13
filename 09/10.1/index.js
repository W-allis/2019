"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var random = function (start, end) { return Math.round(Math.random() * (end - start)) + start; };
function quickSort(arr) {
    var _index = random(0, arr.length - 1);
    var between = arr[_index], result = [between];
    if (arr.length === 0 || arr.length === 1)
        return arr;
    var compare = function (between) { return function (param) { return param <= between; }; };
    var moreOrLess = compare(between);
    result.push.apply(result, __spread(quickSort(arr.filter(function (item, index) { return !moreOrLess(item) && index !== _index; }))));
    result.unshift.apply(result, __spread(quickSort(arr.filter(function (item, index) { return moreOrLess(item) && index !== _index; }))));
    return result;
}
// const arr = [...Array(11).keys()].map(item => random(0, 100))
var arr = [10, 37, 20, 10, 44, 48, 54, 31, 32, 94, 13];
console.log(quickSort(arr));
