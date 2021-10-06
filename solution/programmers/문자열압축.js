function solution(s) {
  if (s.length === 1) return 1;
  const leng = s.length;
  const ans = [];
  for (let i = 1; i <= leng / 2; i++) {
    const map = [];
    let prev = 0;
    for (let j = i; prev < leng; j += i) {
      const str = s
        .split("")
        .slice(prev, j)
        .reduce((a, b) => a + b, "");

      if (map.length === 0) {
        map.push([str, 1]);
      } else if (map[map.length - 1][0] === str) {
        map[map.length - 1][1] += 1;
      } else {
        map.push([str, 1]);
      }
      prev = j;
    }
    ans.push(map);
  }

  let min = +Infinity;

  min = Math.min(
    min,
    ...ans.map((result) => {
      let acc = "";
      result.forEach(([str, freq]) => {
        if (freq === 1) {
          acc += str;
          return;
        }
        acc += str + freq;
      });
      return acc.split("").length;
    })
  );
  return min;
}
