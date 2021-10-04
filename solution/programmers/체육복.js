// https://programmers.co.kr/learn/courses/30/lessons/42862#

function solution(n, lost, reserve) {
  const students = Array(n).fill(1);
  lost.forEach((l) => (students[l - 1] -= 1));
  reserve.forEach((r) => (students[r - 1] += 1));
  students.forEach((s, i) => {
    if (students[i - 1] && students[i - 1] === 2 && students[i] === 0) {
      students[i - 1] -= 1;
      students[i] += 1;
      return;
    }
    if (students[i + 1] && students[i + 1] === 2 && students[i] === 0) {
      students[i + 1] -= 1;
      students[i] += 1;
      return;
    }
  });

  return students.filter((number) => number).length;
}
