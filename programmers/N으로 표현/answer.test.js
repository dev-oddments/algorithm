function makeRepeatN(N, count) {
  return Number(Array(count).join(N));
}

function solution(N, number) {
  if (N === number) {
    return 1;
  }
  let set = new Array(8).fill();

  for (let i = 0; i < 8; i++) {
    set[i] = new Set();
    set[i].add(makeRepeatN(N, i + 2));

    console.log(set[i]);
    for (let j = 0; j < i; j++) {
      for (const left of set[j]) {
        for (const right of set[i - j - 1]) {
          set[i].add(left + right);
          set[i].add(left - right);
          set[i].add(left * right);
          set[i].add(left / right);
        }
      }
    }
    if (set[i].has(number)) {
      return i + 1;
    }
  }
  return -1;
}

test('Test case', () => {
  expect(solution(5, 12)).toEqual(4);
  expect(solution(2, 11)).toEqual(3);
});
