// recursion
var fib = function (n) {
    if (n <= 2)
        return 1;
    return fib(n - 1) + fib(n - 2);
};
// recursion + memoization
var fib2 = function (n, memo) {
    if (n in memo)
        return memo[n];
    if (n <= 2)
        return 1;
    memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
    return memo[n];
};
fib(10);
console.log(fib2(50, {}));
