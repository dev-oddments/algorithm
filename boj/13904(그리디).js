// 과제
// https://www.acmicpc.net/problem/13904

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `7
4 60
4 40
1 20
2 50
3 30
4 10
6 5
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

const visited = Array(N).fill(false);

const arr = [];

for (let i = 0; i < N; i++) {
  arr.push(
    input()
      .split(' ')
      .map((each) => parseInt(each))
  );
}

arr.sort((a, b) => b[1] - a[1] || a[0] - b[0]);

const maxPeriod = Math.max(...arr.map(a => a[0]));

let result = 0;
for (let i = maxPeriod; i > 0; i--) {
    for (let j = 0; j < arr.length; j++) {
        if (!visited[j] && arr[j][0] >= i) {
            result += arr[j][1];
            visited[j] = true;

            break;
        }
    }
}

console.log(result);

/*

## How
1. input으로 받은 과제마감일과 점수를 각각 오름차순, 내림차순으로 정렬하여 가장 긴 과제 마감일만큼 루프를 돌린다.
2. 아직 해결하지 못한 && 기간이 지나지 않은 과제인 경우 해결했다는 표시를 하고 해당 점수를 더하도록 하면 된다.

## Retrospective

*/
