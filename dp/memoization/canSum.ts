export {};

const canSum = (targetSum: number, arr: number[]): boolean => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  return arr.some((num) => canSum(targetSum - num, arr));
};

console.log(canSum(7, [2, 4]));
console.log(canSum(7, [2, 3]));
console.log(canSum(2, [7, 14]));

const canSumMemo = (
  targetSum: number,
  arr: number[],
  memo: Record<number, boolean>
): boolean => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  return arr.some((num) => {
    const remainder = targetSum - num;
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
