export {};

// recursion
const fib = (n: number): number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// recursion + memoization
const fib2 = (n: number, memo: Record<number, number>): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  return memo[n];
};

fib(10);
console.log(fib2(50, {}));
