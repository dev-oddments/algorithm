const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `3
0 1 0
0 0 1
1 0 0
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

const answer = [];

for (let row = 0; row < N; row++) {
  const col = input()
    .split(' ')
    .map((each) => parseInt(each));

    answer.push(col);
}

for (let k = 0; k < N; k++) {
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            if (answer[row][k] == 1 && answer[k][col] == 1) {
                answer[row][col] = 1;
            }
        }
    }
}

answer.forEach((e) => console.log(e.join(' ')));

/*

## How
Floyed Warshall 알고리즘을 사용하면 쉽게 풀 수 있다. 이외에도 DFS와 BFS를 활용해 풀 수 있다.

한 정점에서 다른 정점까지의 최단거리는 다익스트라나 벨만 포드 알고리즘을 사용한다. 모든 정점에서 모든 정점으로의 최단거리를 구할 때 Floyed Warshall 알고리리즘을 사용할 수 있다.

문제에서는 i에서 j로 갈 수 있는지 여부를 판별하라고 요구한다. 여기서 Floyed Warshall을 사용하여 i에서 k로, k에서 j로 가는 것이 가능한지 여부를 판별하면 된다.

해당 조건이 부합하는 경우 해당 경로에 1을 대입하여 문제를 해결할 수 있다.

## Retrospective

*/
