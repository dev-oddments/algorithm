// 특정 거리의 도시 찾기
// https://www.acmicpc.net/problem/18352

class MinHeap {
  constructor() {
    this.nodes = [];
  }

  isEmpty() {
    return this.nodes.length === 0;
  }

  insert(value) {
    this.nodes.push(value);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;

    const currentNode = this.nodes[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.nodes[parentIndex];

    if (parentNode[1] <= currentNode[1]) return;

    this.nodes[index] = parentNode;
    this.nodes[parentIndex] = currentNode;
    index = parentIndex;
    this.bubbleUp(index);
  }

  extract() {
    const min = this.nodes[0];
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return min;
    }
    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.nodes.length;
    let minimum = index;

    if (!this.nodes[rightChildIndex] && !this.nodes[leftChildIndex]) return;
    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex][1] < this.nodes[minimum][1]) {
        minimum = leftChildIndex;
      }
      return;
    }

    if (this.nodes[leftChildIndex][1] > this.nodes[rightChildIndex][1]) {
      if (
        rightChildIndex <= length &&
        this.nodes[rightChildIndex][1] < this.nodes[minimum][1]
      ) {
        minimum = rightChildIndex;
      }
    } else {
      if (
        leftChildIndex <= length &&
        this.nodes[leftChildIndex][1] < this.nodes[minimum][1]
      ) {
        minimum = leftChildIndex;
      }
    }

    if (minimum !== index) {
      let t = this.nodes[minimum];
      this.nodes[minimum] = this.nodes[index];
      this.nodes[index] = t;
      this.trickleDown(minimum);
    }
  }
}

function dijkstra(N, K, X, graph) {
  const visit = Array(N + 1).fill(Infinity);
  const heap = new MinHeap();

  heap.insert([X, 0]);

  visit[X] = 0;

  while (!heap.isEmpty()) {
    const [vertex, weight] = heap.extract();

    if (weight > K) {
      continue;
    }

    for (let i = 0; i < graph[vertex].length; i++) {
      if (weight + 1 < visit[graph[vertex][i]]) {
        visit[graph[vertex][i]] = weight + 1;
        heap.insert([graph[vertex][i], weight + 1]);
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

---

루프돌때 정렬하는 부분에 최소힙을 적용할 수 있을까 싶어서 최소힙을 적용해봤는데 의도한대로 작동하였다.

## Retrospective

*/
