function solution(n) {
  let dy = [1, 0, -1];
  let dx = [0, 1, -1];

  let answer = [];
  let arr = new Array(n).fill().map((_, i) => new Array(i + 1));

  let baseCount = 0;
  let direction = 0;

  let y = -1;
  let x = 0;

  while (n) {
    for (let i = 0; i < n; i++) {
      y += dy[direction];
      x += dx[direction];
      arr[y][x] = ++baseCount;
    }
    direction++;
    direction %= 3;
    n--;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      answer.push(arr[i][j]);
    }
  }
  return answer;
}

test('Test case', () => {
  expect(solution(4)).toEqual([1, 2, 9, 3, 10, 8, 4, 5, 6, 7]);
  expect(solution(5)).toEqual([
    1,
    2,
    12,
    3,
    13,
    11,
    4,
    14,
    15,
    10,
    5,
    6,
    7,
    8,
    9,
  ]);
  expect(solution(6)).toEqual([
    1,
    2,
    15,
    3,
    16,
    14,
    4,
    17,
    21,
    13,
    5,
    18,
    19,
    20,
    12,
    6,
    7,
    8,
    9,
    10,
    11,
  ]);
});
