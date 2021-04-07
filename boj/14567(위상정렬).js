// 선수과목(Prerequisite)
// https://www.acmicpc.net/problem/14567

const solution = (N, graph, degree) => {
  const semester = new Array(N + 1).fill(0);

  const queue = [];

  for (let i = 1; i <= N; i++) {
    if (!degree[i]) {
      queue.push([i, 1]);
    }
  }

  for (let i = 1; i <= N; i++) {
    const [index, count] = queue.shift();

    semester[index] = count;

    for (let i = 0; i < graph[index].length; i++) {
      const next = graph[index][i];

      degree[next]--;

      if (degree[next] === 0) {
        queue.push([next, count + 1]);
      }
    }
  }

  return semester.slice(1).join(' ');
};

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `6 4
1 2
1 3
2 5
4 5
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .split(' ')
  .map((each) => parseInt(each));

const graph = Array.from(new Array(N + 1), () => new Array());

const degree = new Array(N + 1).fill(0);

for (let i = 0; i < M; i++) {
  const [start, end] = input()
    .split(' ')
    .map((each) => parseInt(each));

  graph[start].push(end);

  degree[end]++;
}

console.log(solution(N, graph, degree));

/*

## How
위상정렬로 풀어야 하는 문제였다.

위상정렬이란 사이클이 없는 방향그래프(Directed Acyclic Graph)에서 모든 노드를 방향성에 거스르지 않도록 순서대로 나열하는 것을 의미한다.

즉, 어떤 일을 할 때 순서대로 정렬하여 순서를 찾을 수 있다.

위상정렬은 스택 및 큐 자료구조를 이용해 구현할 수 있다.

가장 낮은 degree를 큐에 enqueue하고 하나씩 dequeue 하면서 연결된 다음 degree에 해당하는 것들을 enqueue 한다.

위상정렬의 시간 복잡도는 O(V + E) 이다.

문제의 목적은 선수과목이 존재하는 상황에서 모든 과목에 대해 각 과목을 이수하려면 최소 몇 학기가 걸리는지 구하는 것이다.

위상정렬로 순서를 구하면서 index에 수강 학기 수를 저장하는 식으로 풀면 된다.

## Retrospective

*/
