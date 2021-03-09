// 벽 부수고 이동하기
// https://www.acmicpc.net/problem/2206

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `6 4
0100
1110
1000
0000
0111
0000
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .split(' ')
  .map((each) => parseInt(each));

const arr = [];
const visited = [];

for (let row = 0; row < N; row++) {
  const col = input()
    .split('')
    .map((each) => parseInt(each));
  arr.push(col);
  visited.push(
    Array(M)
      .fill()
      .map(() => Array(1).fill(0))
  );
}

const dy = [1, -1, 0, 0];
const dx = [0, 0, -1, 1];

function bfs() {
  visited[0][0][0] = 1;

  const q = [[0, 0, 0]];

  while (q.length !== 0) {
    const [y, x, w] = q.shift();

    if (y === N - 1 && x === M - 1) {
      return visited[N - 1][M - 1][w];
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      const nw = w + 1;

      if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
        continue;
      }

      if (visited[ny][nx][w]) {
        continue;
      }

      if (arr[ny][nx] === 0) {
        visited[ny][nx][w] = visited[y][x][w] + 1;
        q.push([ny, nx, w]);
      }

      if (arr[ny][nx] === 1 && nw <= 1) {
        visited[ny][nx][nw] = visited[y][x][w] + 1;
        q.push([ny, nx, nw]);
      }
    }
  }

  return -1;
}

console.log(bfs());

/*

## How
최단거리를 구하는 문제이므로 BFS를 사용한다. 만약 가중치가 있는 최단경로라면 다익스트라를 사용해야 한다.

visited 배열에 벽을 부쉈는지 여부를 포함시키는 것이 핵심이었다. 즉 3차원 배열을 만들어야 했다.

벽을 부순적이 있는지에 대한 조건을 포함하여 벽인지 아닌지를 판별해 (M - 1, N - 1)까지 도착했을 때 visited 배열에 캐싱한 값을 출력하도록 하면 된다.

## Retrospective

*/
