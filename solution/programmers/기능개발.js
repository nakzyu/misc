// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length > 0) {
    progresses = progresses.map((pro, i) => (pro += speeds[i]));

    let completed = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      completed += 1;
    }
    if (completed) {
      answer.push(completed);
    }
  }

  return answer;
}
