const canSum = (targetSum: number, numbers: number[]): boolean => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  numbers.forEach((num) => (table[num] = true));

  for (let i = 0; i <= targetSum; i++) {
    const currnet = table[i];
    if (!currnet) continue;

    for (let j = 0; j < targetSum; j++) {
      if (i + numbers[j] <= targetSum) table[i + numbers[j]] = true;
      else break;
    }
  }

  return table[targetSum];
};

console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [2, 3]));
// console.log(canSum(300, [7, 14]));
