const gridTraveler = (m: number, n: number): number => {
  // Array(m+1).fill(Array(n+1)) => m개수만큼 새로운 어레이를 채우는게아니라,
  // 하나의 레퍼런스를 갖는 어레이로 채우기때문에 오류 발생

  const table = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const currnet = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += currnet;
      if (i + 1 <= m) table[i + 1][j] += currnet;
    }
  }

  console.log(table);
  return table[m][n];
};

console.log(gridTraveler(3, 2));
