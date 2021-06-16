"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxOfArray = void 0;
function maxOfArray(array) {
    // return maxOfArrayByAlgorithm(array);
    // return maxOfArrayByMathMax(array);
    // return maxOfArrayByReduce(array);
    return maxOfArrayByRecursion(array);
}
exports.maxOfArray = maxOfArray;
function maxOfArrayByAlgorithm(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        var currentItem = array[i];
        max = maxOfTwo(max, currentItem);
    }
    return max;
}
function maxOfArrayByMathMax(array) {
    return Math.max.apply(Math, array);
}
function maxOfArrayByReduce(array) {
    return array.reduce(function (max, currentItem) {
        return max == null ? currentItem : maxOfTwo(max, currentItem);
    }, null);
}
function maxOfArrayByRecursion(array) {
    if (array.length == 0) {
        return null;
    }
    var first = array[0], rest = array.slice(1);
    if (rest.length == 1) {
        var last = rest[0];
        return maxOfTwo(first, last);
    }
    return maxOfArrayByRecursion(rest);
}
function maxOfTwo(x, y) {
    return x >= y ? x : y;
}
