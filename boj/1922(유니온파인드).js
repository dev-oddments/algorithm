const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `6
9
1 2 5
1 3 4
2 3 2
2 4 7
3 4 6
3 5 11
4 5 3
4 6 8
5 6 8
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const M = parseInt(input());

const parent = {};
const rank = {};

// 아래 세개의 함수는 승영님 코드 참고(최적화된 유니온 파인드)
function init(v) {
  parent[v] = v;
  rank[v] = 0;
}

function findParent(v) {
  if (parent[v] !== v) {
    parent[v] = findParent(parent[v]);
  }
  return parent[v];
}

function unionParent(v, u) {
  const root1 = findParent(v);
  const root2 = findParent(u);
  if (root1 !== root2) {
    if (rank[root1] > rank[root2]) {
      parent[root2] = root1;
    } else {
      parent[root1] = root2;
      if (rank[root1] == rank[root2]) {
        rank[root2]++;
      }
    }
  }
}

const computers = [];

for (let i = 0; i < M; i++) {
  computers.push(
    input()
      .split(' ')
      .map((A) => parseInt(A))
  );
}

for (let i = 0; i < N; i++) {
  init(i);
}

// 비용을 오름차순으로 정렬
computers.sort((a, b) => a[2] - b[2]);

let cost = 0;

for (let i = 0; i < M; i++) {
  const left = computers[i][0];
  const right = computers[i][1];
  const eachCost = computers[i][2];

  if (findParent(left) !== findParent(right)) {
    cost += eachCost;
    unionParent(left, right);
  }
}

console.log(cost);

/*

## How
유니온파인드 문제였다. 예전에 프로그래머스 섬 연결하기 문제를 못풀었던 기억이 있어서 유니온 파인드에 대해서 이해하자는 마음가짐으로 접근했다. 처음에는 문제 어떻게 풀어야할지 모르겠어서 포기했다가 유니온파인드 문제라는 것을 알고 동빈님 강의와 승영님이 정리해두신걸 보고 왜 이것을 적용해야하는지 이해할 수 있었다.

결론적으로 최소비용이 들게끔 전체 네트워크가 연결된 상황(MST)를 구해야하는 문제이다. 유니온 파인드를 이용해 그래프를 표현할 때 원소가 최상의 부모 노드를 가리킨다는 특성을 이용하면 된다. 컴퓨터 비용이 낮은 순으로 정렬해서 두 컴퓨터의 부모가 다르다면 그만큼 비용을 증가시키고 unionParent 함수로 합쳐주는 과정을 반복하면 해결할 수 있다.

## Retrospective
여러 코드들과 강의 및 글들을 참고하긴 했지만 유니온 파인드가 무엇인지 이해할 수 있는 유익한 시간이었다. 섬 연결하기 문제를 혼자힘으로 풀어보아야겠다.

*/
