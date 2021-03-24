// 로봇 청소기
// https://www.acmicpc.net/problem/14503

const turn = (direction) => {
  if (direction === 0) {
    return 3;
  }
  return direction - 1;
};

const solution = (r, c, d, arr) => {
  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];

  let dir = d;
  let row = r;
  let col = c;

  let clean = false;
  let answer = 1;

  arr[r][c] = 2;

  while (true) {
    clean = false;

    for (let i = 0; i < 4; i++) {
      dir = turn(dir);

      let ny = row + dy[dir];
      let nx = col + dx[dir];

      if (arr[ny][nx] === 0) {
        arr[ny][nx] = 2;
        answer++;
        row = ny;
        col = nx;

        clean = true;
        break;
      }
    }

    if (!clean) {
      if (arr[row - dy[dir]][col - dx[dir]] === 1) {
        return answer;
      }
      row = row - dy[dir];
      col = col - dx[dir];
    }
  }
};

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `11 10
7 4 0
1 1 1 1 1 1 1 1 1 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 1 1 1 1 0 1
1 0 0 1 1 0 0 0 0 1
1 0 1 1 0 0 0 0 0 1
1 0 0 0 0 0 0 0 0 1
1 0 0 0 0 0 0 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 1 1 0 1
1 0 0 0 0 0 0 0 0 1
1 1 1 1 1 1 1 1 1 1
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [M, N] = input()
  .split(' ')
  .map((each) => each | 0);

const [r, c, d] = input()
  .split(' ')
  .map((each) => each | 0);

const arr = Array.from(Array(M), () =>
  input()
    .split(' ')
    .map((each) => each | 0)
);
console.log(solution(r, c, d, arr));

/*

## How
왼쪽 방향으로 차례대로 탐색해야하므로 북 서 남 동 순으로 방향이 변화해야 한다. 이것에 맞춰 네 방향을 탐색하며 청소가 안되어 있는 경우 count를 증가시켰고 청소기를 이동시킨 후 탐색을 멈춘다.

만약 네 방향 모두 청소가 전부 되어있거나 이전 위치가 벽인 경우에는 이동 및 탐색을 멈추고 지금까지의 count된 숫자를 출력하도록 하였고 벽이 아닌 경우에는 방향을 유지한채 이전 위치로 이동하도록 하였다.

이 과정을 반복하면 청소하는 칸의 갯수를 출력할 수 있다.

## Retrospective

*/
