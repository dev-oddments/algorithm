// 최소 힙
// https://www.acmicpc.net/problem/1927

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
    if (parentNode <= currentNode) return;

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
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    const length = this.nodes.length;
    let minimum = index;
    if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;
    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
        minimum = leftChildIndex;
      }
    }
    if (this.nodes[leftChildIndex] > this.nodes[rightChildIndex]) {
      if (
        rightChildIndex <= length &&
        this.nodes[rightChildIndex] < this.nodes[minimum]
      ) {
        minimum = rightChildIndex;
      }
    } else {
      if (
        leftChildIndex <= length &&
        this.nodes[leftChildIndex] < this.nodes[minimum]
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

const solution = (arr) => {
  const heap = new MinHeap();
  const answer = [];
  arr.forEach((each) => {
    if (each === 0) {
      if (!heap.isEmpty()) {
        answer.push(heap.extract());
      } else {
        answer.push(0);
      }
    } else {
      heap.bubbleUp();

      heap.insert(each);
    }
  });

  return answer.join('\n');
};

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `9
0
12345678
1
2
0
0
0
0
32
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const TC = input() | 0;

const arr = [];

for (let i = 0; i < TC; i++) {
  arr.push(input() | 0);
}

console.log(solution(arr));

/*

## How

## Retrospective

*/
