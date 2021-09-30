"use strict";
exports.__esModule = true;
var canSum = function (targetSum, arr) {
    if (targetSum === 0)
        return true;
    if (targetSum < 0)
        return false;
    return arr.some(function (num) { return canSum(targetSum - num, arr); });
};
console.log(canSum(7, [2, 4]));
console.log(canSum(7, [2, 3]));
console.log(canSum(2, [7, 14]));
var canSumMemo = function (targetSum, arr, memo) {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return true;
    if (targetSum < 0)
        return false;
    return arr.some(function (num) {
        var remainder = targetSum - num;
        if (canSumMemo(remainder, arr, memo) === true) {
            memo[remainder] = true;
            return true;
        }
        memo[targetSum] = false;
        return false;
    });
};
console.log(canSumMemo(7, [2, 4], {}));
console.log(canSumMemo(7, [2, 3], {}));
console.log(canSumMemo(300, [7, 14], {}));
