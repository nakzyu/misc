// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  const map = {};

  const add = (arr) =>
    arr.forEach((name) => {
      if (name in map) {
        map[name] += 1;
      } else {
        map[name] = 1;
      }
    });

  add(participant);
  add(completion);

  return Object.entries(map).find(([name, freq]) => freq % 2)[0];
}
