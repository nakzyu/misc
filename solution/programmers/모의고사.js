function solution(answers) {
  const s1 = answers
    .map((answer, i) => {
      const val = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
      return answer === val[i % 5];
    })
    .filter((item) => item === true).length;

  const s2 = answers
    .map((answer, i) => {
      const val = { 0: 2, 1: 1, 2: 2, 3: 3, 4: 2, 5: 4, 6: 2, 7: 5 };
      return answer === val[i % 8];
    })
    .filter((item) => item === true).length;

  const s3 = answers
    .map((answer, i) => {
      const val = {
        0: 3,
        1: 3,
        2: 1,
        3: 1,
        4: 2,
        5: 2,
        6: 4,
        7: 4,
        8: 5,
        9: 5,
      };
      return answer === val[i % 10];
    })
    .filter((item) => item === true).length;

  const answer = [];

  const target = Math.max(s1, s2, s3);
  if (target === s1) answer.push(1);
  if (target === s2) answer.push(2);
  if (target === s3) answer.push(3);

  return answer;
}
