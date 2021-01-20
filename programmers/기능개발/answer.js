function solution(progresses, speeds) {
  let answer = [];
  let buffer = [];

  buffer = progresses.map((val, i) => {
    return Math.ceil((100 - val) / speeds[i]);
  });

  let max = buffer[0];
  let count = 0;

  buffer.forEach((val, i) => {
    if (max >= val) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      max = val;
    }
  });

  answer.push(count);

  return answer;
}