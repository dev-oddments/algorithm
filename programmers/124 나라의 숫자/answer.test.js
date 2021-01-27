function solution(n) {
  let answer = '';
  let rest = 0;

  while (n > 0) {
    rest = n % 3;
    n = Math.floor(n / 3);

    if (rest === 0) {
      answer = '4' + answer;;
      n--;
    }

    if (rest === 1) {
      answer = '1' + answer;
    }

    if (rest === 2) {
      answer = '2' + answer;
    }
  }

  return answer;
}

test('Test case', () => {
  expect(solution(1)).toEqual("1");
  expect(solution(2)).toEqual("2");
  expect(solution(3)).toEqual("4");
  expect(solution(4)).toEqual("11");
});
