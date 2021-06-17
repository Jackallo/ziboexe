"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverseOfString = void 0;
function inverseOfString(text) {
    // return inverseOfStringByMethods(text);
    return inverseOfStringByRecursion(text);
    // return inverseOfStringByAlgorithm(text);
}
exports.inverseOfString = inverseOfString;
function inverseOfStringByMethods(text) {
    if (text == "")
        throw new Error("A string is expected");
    // const splittedText = text.split("");
    // const reversedText = splittedText.reverse();
    // const joinedText = reversedText.join("");
    return text.split("").reverse().join("");
    // return joinedText;
}
function inverseOfStringByAlgorithm(text) {
    var reversedText = "";
    for (var i = text.length - 1; i >= 0; i--) {
        reversedText += text[i];
    }
    return reversedText;
}
function inverseOfStringByRecursion(text) {
    return text == ""
        ? ""
        : lastOf(text) + inverseOfStringByRecursion(text.slice(0, -1));
}
function lastOf(text) {
    var lastIndex = text.length - 1;
    return text[lastIndex];
}
