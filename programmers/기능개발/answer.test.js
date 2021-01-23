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

test('Test case', () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toBe([2, 1]);
  expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toBe([
    1,
    3,
    2,
  ]);
});
