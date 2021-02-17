function solution(brown, yellow) {
  let area = brown + yellow;

  for (let height = 3; height < area / 2; height++) {
    if (area % height !== 0) {
      continue;
    }

    let width = area / height;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

test('Test case', () => {
  expect(solution(10, 2)).toEqual([4, 3]);
  expect(solution(8, 1)).toEqual([3, 3]);
  expect(solution(24, 24)).toEqual([8, 6]);
});
