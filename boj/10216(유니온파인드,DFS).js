const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `2
2
0 0 1
1 0 1
3
0 0 1
2 0 1
10 0 5
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

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

let T = parseInt(input());

for (let tc = 0; tc < T; tc++) {
  let N = parseInt(input());
  let arr = Array.from(Array(N), () => Array(3).fill(0));
  for (let i = 0; i < N; i++) {
    const [x, y, r] = input()
      .split(' ')
      .map((each) => parseInt(each));

    arr[i][0] = x;
    arr[i][1] = y;
    arr[i][2] = r;
    init(i);
  }

  let answer = N;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      let xPos = arr[i][0] - arr[j][0];
      let yPos = arr[i][1] - arr[j][1];
      let radius = arr[i][2] + arr[j][2];
      let edistPow = Math.pow(xPos, 2) + Math.pow(yPos, 2); // 유클리드 거리의 제곱
      if (edistPow <= Math.pow(radius, 2)) {
        if (findParent(i) !== findParent(j)) {
          unionParent(i, j);
          answer--;
        }
      }
    }
  }
  console.log(answer);
}

/*

## How
어려웠다. 좌표상에 원이 있다고 생각해보자 두 원이 겹치는 것을 확인하려면 어떻게 해야할까? 유클리드 거리를 구하고 각각의 반지름을 더한 것보다 작거나 같은지 보면 된다.

유클리드 거리는 피타고라스 정의를 통해 유도할 수 있다. 두개의 좌표의 x와 y의 값의 각각의 차이를 제곱하여 더한 뒤 루트를 씌우면 두 점 간의 거리를 구할 수 있다는 규칙이다.(상단의 코드는 이 규칙에 대해 제곱을 해서 구했다)

이렇게 유클리드 거리를 이용해 두 점 사이의 거리를 구하고 그것이 각 좌표에 해당하는 원의 반지름보다 작거나 같으면 두 원이 겹쳐있다고 볼 수 있다.

두 원이 겹친다는 조건이 맞다면 유니온 파인드를 이용해 최상의 노드가 다르다면 두 트리를 합친 뒤 N부터 시작하는 count를 1씩 감소시키는 식으로 문제의 요구사항인 적군 진영의 그룹 갯수를 구할 수 있다.

## Retrospective

*/
