export {};

/**
 * Write a function `howSum(targetSum, numbers)`
 * that takes in a targetSum and a array of numbers a s arguments.
 *
 * The function should return an array containing
 * any combination of elements that add up to exactly the targetSum.
 * If there is no combination that adds up to the targetSum,
 * then return null.
 *
 * If There re multiple combinations possible, you may return any single one.
 */

const howSum = (
  targetSum: number,
  numbers: number[],
  ways: number[] = []
): number[] => {
  const sum = ways.reduce((a, b) => a + b, 0);

  if (targetSum - sum === 0) {
    return ways;
  }
  if (targetSum - sum < 0) {
    return [];
  }

  const answer = numbers
    .map((num) => howSum(targetSum, numbers, [...ways, num]))
    .filter((arr) => arr.length);

  if (!answer.length) return [];
  return answer[0];
};

const howSum2 = (targetSum: number, numbers: number[]): number[] | null => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum2(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }

  return null;
};

const howSum3 = (
  targetSum: number,
  numbers: number[],
  memo: Record<number, number[] | null> = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum3(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3])); // [3,2,2]
console.log(howSum2(7, [2, 4])); // [3,2,2]
console.log(howSum3(7, [5, 3, 4, 7])); // [4,3]
