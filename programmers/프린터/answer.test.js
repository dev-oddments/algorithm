function solution(priorities, location) {
  let answer = 0;

  let flag = false;
  while (priorities.length > 0) {
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] > priorities[0]) {
        flag = true;
        break;
      }
    }

    if (flag) {
      flag = false;
      priorities.push(priorities[0]);
      priorities.shift(priorities[0]);

      if (location === 0) {
        location += priorities.length - 1;
        continue;
      }

      location--;
       continue;
    }

    priorities.shift(priorities[0]);
    answer = answer + 1;

    if (location === 0) {
      break;
    }

    location--;
  }
  return answer;
}

test('Test case', () => {
  expect(solution([2, 1, 3, 2], 2)).toEqual(1);
  expect(solution([1, 1, 9, 1, 1, 1], 0)).toEqual(5);
});
