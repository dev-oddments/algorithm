// 기타 레슨
// https://www.acmicpc.net/problem/2343
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `9 3
1 2 3 4 5 6 7 8 9
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function binarySearch(left, right, target) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let rangeSum = 0;
    let countToTarget = 0;

    for (let i = 0; i < N; i++) {
      if (rangeSum + arr[i] > mid) {
        countToTarget++;
        rangeSum = 0;
      }
      rangeSum += arr[i];
    }

    if (countToTarget < target) {
      right = mid - 1;
      continue;
    }

    left = mid + 1;
  }

  return left;
}

const [N, M] = input()
  .split(' ')
  .map((each) => parseInt(each));

const arr = input()
  .split(' ')
  .map((each) => parseInt(each));

let min = Math.max(...arr);
let max = arr.reduce((prev, cur) => prev + cur);

console.log(binarySearch(min, max, M));


/*

## How
강의를 M 분할하여 블루레이에 저장할 경우 한 개의 블루레이의 최소 크기를 구하는 문제이다.

순서는 바뀌면 안 되고 정렬된 데이터를 기준으로 구간을 M 만큼 나누었을 때 더한 값이 최소 크기가 되게끔 하면 되므로 이진 탐색의 아이디어를 사용하면 구할 수 있다.

이진 탐색은 중앙에 있는 값을 기준으로 target 값이 왼쪽 오른쪽에 있는지 판별하여 다시 그 범위에의 중앙에 있는 값으로 같은 형태로 반복하여 target을 찾는 형태로 사용한다.

최솟값(left)을 레슨 중 가장 큰 값으로 하고 최댓값(right)을 모든 구간의 합으로 하여 최솟값이 최댓값보다 작거나 같은 경우 순회하도록 하고 mid 값은 둘을 더하고 2를 나눈 값으로 둔다.

N 번 순회를 하면서 지금까지의 합이 mid보다 작은 경우 계속 더하고 큰 경우 디스크 개수를 1 증가시키고 더한 값을 리셋하여 디스크 개수를 구한다.

디스크 개수가 정해진 디스크 개수보다 작은 경우에는 right에 mid에서 1을 뺀 값을 넣고 그 반대의 경우에는 left에 mid에서 1 더한 값을 넣는다.

이렇게 반복하면 최종적으로 left의 값이 한장이 가질 수 있는 최소 크기가 된다.

이런식으로 값 자체를 찾는게 아닌 범위에서 일치하는 값을 찾는 알고리즘을 파라메트릭 서치라고 한다.

## Retrospective

*/
