"use strict";
// export function vectorZip(x: number[], y: number[]): number[][] {
//   let couples: number[][] = [];
//   for (let i = 0; i < x.length; i++) {
//     for (let j = 0; j < y.length; j++) {
//       couples.push([x[i], y[j]]);
//       // couples = [...couples, [x[i], y[j]]];
//       // couples = couples.concat([[x[i], y[j]]]);
//     }
//   }
//   return couples;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.vectorZipByRecursion = void 0;
// export function vectorZip(xs: number[], ys: number[]): number[][] {
//   return xs.reduce((couples: number[][], x: number) => couples.concat(ys.map(y => [x,y]), [])
// }
function vectorZipByRecursion(xs, ys) {
    var x = xs[0], rest = xs.slice(1);
    var couple = ys.map(function (y) { return [x, y]; });
    return x === undefined ? [] : couple.concat(vectorZipByRecursion(rest, ys));
}
exports.vectorZipByRecursion = vectorZipByRecursion;
