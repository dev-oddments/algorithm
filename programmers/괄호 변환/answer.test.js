function solution(p) {
  let answer = '';
  let openBracketCount = 0;
  let closeBracketCount = 0;
  let checkString = true;

  if (p.length === 0) {
    // 1
    return answer;
  }

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') {
      openBracketCount += 1;
    }
    if (p[i] === ')') {
      closeBracketCount += 1;
    }

    if (openBracketCount < closeBracketCount) {
      checkString = false;
    }

    if (openBracketCount === closeBracketCount) {
      if (checkString === true) {
        // 2, 3
        answer += p.slice(0, i + 1) + solution(p.slice(i + 1));

        return answer;
      }

      // 4-1,2,3
      answer = '(' + solution(p.slice(i + 1)) + ')';

      // 4-4
      for (let j = 1; j < i; j++) {
        answer += p[j] === '(' ? ')' : '(';
      }

      // 4-5
      return answer;
    }
  }
}

test('Test case', () => {
  expect(solution('(()())()')).toEqual('(()())()');
  expect(solution(')(')).toEqual('()');
  expect(solution('()))((()')).toEqual('()(())()');
});
