export function vectorZip(x: number[], y: number[]): number[][] {
  let couples: number[][] = [];
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      couples.push([x[i], y[j]]);
      // couples = [...couples, [x[i], y[j]]];
      // couples = couples.concat([[x[i], y[j]]]);
    }
  }
  return couples;
}

// export function vectorZip(xs: number[], ys: number[]): number[][] {
//   return xs.reduce((couples: number[][], x: number) => couples.concat(ys.map(y => [x,y]), [])
// }

// export function vectorZipByRecursion(xs: number[], ys: number[]): number[][] {
//   const [x, ...rest] = xs;
//   const couple = ys.map((y) => [x, y]);
//   return x === undefined ? [] : couple.concat(vectorZipByRecursion(rest, ys));
// }
