// https://programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
  const isChangeable = (wordA, wordB) => {
    const b = wordB.split("");
    const samePortion = wordA
      .split("")
      .map((str, i) => {
        if (b[i] === str) return 1;
        return 0;
      })
      .reduce((a, b) => a + b, 0);
    if (wordB.length - 1 === samePortion) return true;
    return false;
  };

  let min = +Infinity;

  const go = (str, origin, t, steps) => {
    if (str === t) {
      min = Math.min(steps.length, min);
      return;
    }

    words.forEach((word) => {
      if (steps.find((w) => w === word)) return;
      if (isChangeable(str, word)) {
        go(word, origin, t, [...steps, word]);
      }
    });
  };

  go(begin, begin, target, []);

  if (min === Infinity) return 0;
  return min;
}
