// 벽 부수고 이동하기 2
// https://www.acmicpc.net/problem/14442

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `6 4 1
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

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(item) {
    const node = new Node(item);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size += 1;
  }

  dequeue() {
    let popedItem;
    if (this.head !== null) {
      popedItem = this.head.item;
      this.head = this.head.next;
      this.size -= 1;
    }

    return popedItem;
  }
}

const [N, M, K] = input()
  .split(' ')
  .map((each) => parseInt(each));

const arr = Array.from(Array(N).fill(), () =>
  input()
    .split('')
    .map((v) => +v)
);

const visited = Array.from(Array(N).fill(), () =>
  Array.from(Array(M).fill(), () => Array(11).fill(0))
);

const dy = [1, -1, 0, 0];
const dx = [0, 0, -1, 1];

function bfs() {
  visited[0][0][0] = 1;
  let q = new Queue();

  q.enqueue([0, 0, 0]);

  while (!q.isEmpty()) {
    const [y, x, w] = q.dequeue();

    if (y === N - 1 && x === M - 1) {
      return visited[y][x][w];
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      const nw = w + 1;

      if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
        continue;
      }

      if (arr[ny][nx] === 0 && !visited[ny][nx][w]) {
        visited[ny][nx][w] = visited[y][x][w] + 1;
        q.enqueue([ny, nx, w]);
      }

      if (arr[ny][nx] === 1 && !visited[ny][nx][nw] && nw <= K) {
        visited[ny][nx][nw] = visited[y][x][w] + 1;
        q.enqueue([ny, nx, nw]);
      }
    }
  }

  return -1;
}

console.log(bfs());

/*

## How
벽 부수고 이동하기 1(2206)와 비교했을 때 벽을 부술 수 있는 개수도 주어지는 정도의 차이가 있다. 즉 원래 작성했던 코드에서 해당 부분만 수정하면 된다.

풀이법은 같다. 최단경로이므로 BFS를 사용해야 하며 visited에 벽을 부순 횟수도 포함하도록 3차원 배열을 만들어 이동한 곳이 1인지 0인지에 따라 또, 벽을 부술수 있는지 여부를 체크해서 이동거리를 캐싱하고 마지막 위치 (M-1, N-1)에 도달했을 때 이를 출려하면 된다.

## Retrospective

*/
