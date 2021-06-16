export function maxOfArray(array: number[]): number | null {
  // return maxOfArrayByAlgorithm(array);
  // return maxOfArrayByMathMax(array);
  // return maxOfArrayByReduce(array);
  return maxOfArrayByRecursion(array);
}

function maxOfArrayByAlgorithm(array: number[]): number {
  let max: number = array[0];
  for (let i = 1; i < array.length; i++) {
    const currentItem = array[i];
    max = maxOfTwo(max, currentItem);
  }
  return max;
}
function maxOfArrayByMathMax(array: number[]): number {
  return Math.max(...array);
}

function maxOfArrayByReduce(array: number[]): number | null {
  return array.reduce(
    (max, currentItem) =>
      max == null ? currentItem : maxOfTwo(max as number, currentItem),
    null as number | null
  );
}

function maxOfArrayByRecursion(array: number[]): number | null {
  if (array.length == 0) {
    return null;
  }
  const [first, ...rest] = array;
  if (rest.length == 1) {
    const [last] = rest;
    return maxOfTwo(first, last);
  }
  return maxOfArrayByRecursion(rest);
}

function maxOfTwo(x: number, y: number): number {
  return x >= y ? x : y;
}
