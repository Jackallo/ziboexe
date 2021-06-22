"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
function factorial(n) {
    // return factorialByRecursion(n);
    return factorialByAlgorithm(n);
}
exports.factorial = factorial;
function factorialByRecursion(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
function factorialByAlgorithm(n) {
    var result = 1;
    if (n === 0 || n === 1) {
        return result;
    }
    else {
        for (var i = n; i >= 1; i--) {
            result = result * i;
        }
        return result;
    }
}
