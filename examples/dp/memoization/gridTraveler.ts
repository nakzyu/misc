export {};

let ways = 0;

// recursion
const gridTraveler = (m: number, n: number): number => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
// console.log(gridTraveler(18, 18));

const gridTravelerMemo = (
  m: number,
  n: number,
  memo: Record<string, number>
): number => {
  const tag = m + "," + n;
  if (tag in memo) return memo[tag];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[tag] =
    gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
  return memo[tag];
};

console.log(gridTravelerMemo(1, 1, {}));
console.log(gridTravelerMemo(2, 3, {}));
console.log(gridTravelerMemo(3, 2, {}));
console.log(gridTravelerMemo(18, 18, {}));
