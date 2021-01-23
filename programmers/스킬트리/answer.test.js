function solution(skill, skill_trees) {
  let answer = skill_trees.length;

  skill_trees.forEach((val) => {
    let check = skill.split('');
    let flag = false;

    for (let i = 0; i < val.length; i++) {
      if (check.length && check.includes(val[i])) {
        if (val[i] === check[0]) {
          check.shift();
        } else {
          flag = true;
          break;
        }
      }
    }

    if (flag) {
      answer--;
    }
  });
  return answer;
}

test('Test case', () => {
  expect(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2);
  expect(solution('C', ['A', 'ABC', 'C', 'CDS'])).toBe(4);
});
