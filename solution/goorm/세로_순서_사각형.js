// https://level.goorm.io/exam/49912/알고리즘-어로즈-셀프레벨테스트-1차/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const fill = (arr, n) => {
    for (let i = 0; i < n; i++) {
      arr[i] = [];
    }
    return arr;
  };
  const arr = fill([], line).map(
    (row, col) =>
      (col = fill([], line)
        .map((_) => 1)
        .map((_, i) => col + 1 + i * line))
  );
  arr.forEach((item) => {
    item[item.length - 1] = item[item.length - 1] + " ";
    console.log(item.join(" "));
  });

  rl.close();
}).on("close", function () {
  process.exit();
});
