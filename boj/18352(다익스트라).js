// 특정 거리의 도시 찾기
// https://www.acmicpc.net/problem/18352

function dijkstra(N, K, X, graph) {
  const visit = Array(N + 1).fill(Infinity);
  const queue = [];

  queue.push([X, 0]);

  visit[X] = 0;

  while (queue.length !== 0) {
    queue.sort((a, b) => {
      return a[1] - b[1];
    });

    const [vertex, weight] = queue.shift();

    if (weight > K) {
      continue;
    }

    for (let i = 0; i < graph[vertex].length; i++) {
      if (weight + 1 < visit[graph[vertex][i]]) {
        visit[graph[vertex][i]] = weight + 1;
        queue.push([graph[vertex][i], weight + 1]);
      }
    }
  }

  const answer = [];

  for (let i = 0; i < visit.length; i++) {
    if (visit[i] === K) {
      answer.push(i);
    }
  }

  if (answer.length === 0) {
    return '-1';
  }

  return answer.join('\n');
}

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `4 4 1 1
1 2
1 3
2 3
2 4
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M, K, X] = input()
  .split(' ')
  .map((each) => parseInt(each));

const graph = Array(N + 1);

for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}

for (let i = 0; i < M; i++) {
  const [A, B] = input()
    .split(' ')
    .map((each) => parseInt(each));

  graph[A].push(B);
}

console.log(dijkstra(N, K, X, graph));

/*

## How
다익스트라 문제이다. 일단 다익스트라에 대해서 정리가 안되어있어서 개념부터 다시 보았다.

다익스트라는 음의 가중치가 없는 그래프의 시작점에서 특정 노드까지 최단 거리를 구하는 알고리즘이다.

문제에서 가중치는 1로 동일했다. BFS와 유사하게 접근하면 된다. 다만 우선순위 큐를 사용해서 정점의 번호와 최단거리 pair를 enqueue한다.

자바스크립트에는 기본으로 제공되는 우선순위 큐 자료구조가 없어서 루프를 돌 때 마다 정렬하는 식으로 타협을 봤다.

## Retrospective

*/
