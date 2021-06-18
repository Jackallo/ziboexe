"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(text) {
    var trimmed = textTrimmer(text);
    for (var i = 0; i < trimmed.length / 2; i++) {
        var oppositeIndex = trimmed.length - 1 - i;
        if (trimmed[i] !== trimmed[oppositeIndex])
            return false;
    }
    return true;
}
exports.isPalindrome = isPalindrome;
function textTrimmer(text) {
    var trimmedText = "";
    for (var i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
            trimmedText += text[i];
        }
    }
    return trimmedText.toLowerCase();
}
