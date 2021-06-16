"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVowel = void 0;
function isVowel(char) {
    if (char.length !== 1) {
        throw new Error("A string was provided, a character was expected.");
    }
    return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}
exports.isVowel = isVowel;
