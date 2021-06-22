export function factorial(n: number): number {
  // return factorialByRecursion(n);
  return factorialByAlgorithm(n);
}

function factorialByRecursion(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorialByAlgorithm(n: number): number {
  let result = 1;
  if (n === 0 || n === 1) {
    return result;
  } else {
    for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
}
