function solution(number, k) {
  const stack = [];

  const numbers = number.split('').map((each) => each * 1);

  numbers.forEach((each) => {
    while (k > 0 && stack.slice(-1)[0] < each) {
      stack.pop();
      k--;
    }
    stack.push(each);
  });

  // number = "54321", k = 4의 형태로 입력이 주어진 경우
  return stack.slice(0, stack.length - k).join('');;
}

test('Test case', () => {
  expect(solution('1924', 2)).toEqual('94');
  expect(solution('1231234', 3)).toEqual('3234');
  expect(solution('4177252841', 4)).toEqual('775841');
  expect(solution('54321', 4)).toEqual('5');

});
