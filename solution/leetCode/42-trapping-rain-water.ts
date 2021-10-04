//  318 / 320 test cases passed. space할당하지않고 two pointer를 사용해야 전체 통과하는듯
function trap(height: number[]): number {
  const maxHeight = Math.max(...height);
  const terrain = Array(maxHeight)
    .fill(1)
    .map(() => Array(height.length).fill(1))
    .map((row, col) => {
      const currnetHeight = maxHeight - col;
      //col => 현재 높이
      return row.map((item, index) => {
        //index of item => element의 index. height[index] => 해당 item의 높이
        // 구조물이 존재하면 채우고
        if (height[index] >= currnetHeight) return 0;
        // 구조물이 존재하지 않으면 아이템을 그대로 return함 (이미 1으로 채워져있음)
        return item;
      });
    });

  const fillable = terrain.map((row) => {
    let start;
    let end;

    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) {
        start = i;
        break;
      }
    }
    for (let j = row.length - 1; j >= 0; j--) {
      if (row[j] === 0) {
        end = j;
        break;
      }
    }

    return row.slice(start, end).reduce((a, b) => a + b, 0);
  });

  return fillable.reduce((a, b) => a + b, 0);
}
