// https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  const possibles = [];

  const exclude = (arr, targetIdx) => {
    arr.splice(targetIdx, 1);
    return arr;
  };

  const pick = (acc, strings) => {
    possibles.push(acc);
    if (!strings.length) {
      return;
    }
    strings.forEach((string, i) => {
      //attach left
      pick(acc + string, exclude([...strings], i));
      //attach right
      pick(string + acc, exclude([...strings], i));
    });
  };

  const strings = numbers.split("");

  strings.forEach((string, i) => {
    pick(string, exclude([...strings], i));
  });

  const set = {};
  possibles.forEach((string) => {
    set[+string] = true;
  });

  const max = Math.max(...Object.keys(set));

  const ans = Object.keys(set).map((key) => {
    let counter = 0;
    for (let i = 1; i <= max && i <= key; i++) {
      if (Number.isInteger(key / i)) counter += 1;
    }
    if (counter === 2) return 1;
    return 0;
  });

  return ans.reduce((a, b) => a + b, 0);
}
