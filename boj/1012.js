const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let answer = [];

const T = parseInt(input());

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

for (let i = 0; i < T; i++) {
  const [M, N, K] = input()
    .split(' ')
    .map((each) => parseInt(each));

  let farm = Array(N)
    .fill()
    .map(() => Array(M).fill(0));
  let visited = Array(N)
    .fill()
    .map(() => Array(M).fill(false));

  for (let j = 0; j < K; j++) {
    const [X, Y] = input()
      .split(' ')
      .map((each) => parseInt(each));
    farm[Y][X] = 1;
  }


  function dfs(x, y) {
    for (let i = 0; i < 4; i++) {
      let setY = y + dy[i];
      let setX = x + dx[i];

      if (setX < 0 || setY < 0 || M <= setX || N <= setY) {
        continue;
      }

      if (!farm[setY][setX] || visited[setY][setX]) {
        continue;
      }
      visited[setY][setX] = true;
      dfs(setX, setY);
    }
  }

  let count = 0;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      if (farm[row][col] === 1 && !visited[row][col]) {
        count++;
        dfs(col, row);
      }
    }
  }

  answer.push(count);
}

answer.forEach((e) => console.log(e));

/*

## How
input 관련해서 헷갈리는 부분이 있어 래준님 코드를 참고하여 깔끔하게 처리할 수 있었다.

DFS, BFS 모두 사용하여 풀 수 있는 문제이다. 나는 DFS를 사용했다.

농장을 순회하면서 배추를 발견하고 방문하지 않았다면 위, 아래, 왼쪽, 오른쪽을 각각 검사하여 배추가 존재하는 경우 방문된 것으로 처리한 뒤 탐색이 끝나면 count를 1 증가시켰다.

방문하지 않은 배추가 없을 때 까지 이를 반복하고 count를 출력하면 정답이다.

## Retrospective
자바스크립트로 처음 도전한 백준 문제였는데 input 관련한 코드 템플릿을 제공받을 수 있어서 이것에 대해 고민하고 적용하는 시간을 줄일 수 있었다. 동균님에게 감사하다.

*/
