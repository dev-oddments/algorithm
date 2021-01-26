function getGcd(a, b) {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
}

function solution(w, h) {
  let gcd = getGcd(w, h);
  let answer = w * h - gcd * ((w / gcd) + (h / gcd) - 1);

  return answer;
}

test('gcd', () => {
  expect(getGcd(8, 12)).toEqual(4);
});

test('Test case', () => {
  expect(solution(8, 12)).toEqual(80);
});
