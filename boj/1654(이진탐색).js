// 랜선 자르기
// https://www.acmicpc.net/problem/1654
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `4 11
802
743
457
539
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function binarySearch(left, right) {
  let answer = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let count = 0;

    for (let i = 0; i < K; i++) {
      count += Math.floor(arr[i] / mid);
    }

    if (count >= N) {
      left = mid + 1;
      answer = Math.max(answer, mid);
      continue;
    }
    right = mid - 1;
  }

  return answer;
}

const [K, N] = input()
  .split(' ')
  .map((each) => parseInt(each));

const arr = [];

for (let i = 0; i < K; i++) {
  arr.push(parseInt(input()));
}

let max = arr.reduce((prev, cur) => prev + cur);

console.log(binarySearch(1, max));

/*

## How
이진 탐색을 응용한 파나 메트릭 서치를 사용하면 풀 수 있다.

가지고 있는 K 개의 랜선의 길이 중 가장 큰 값을 기준으로 right, 1을 left로 둔다. mid는 left와 right를 더한 값의 절반으로 계산한다.

결국 N 개 이상의 랜선으로 만들 수 있도록 하는 최대 랜선의 길이를 구해야 하는데 이를 위해 K 개의 랜선의 길이를 순회하면서 mid로 나눈 값을 더해나가면 현재 길이로 몇 개의 랜선을 만들 수 있는지 파악할 수 있다.

만약 N 개 미만의 랜선이라면 right에 mid - 1한 값을 더하고 N 개 이상이면 left에 mid + 1한 값을 대입한 뒤 answer에 기존 answer와 mid 중 큰 값을 대입한다.

left와 right가 같아지거나 left가 더 커지면 순회를 종료하고 answer를 출력하면 N 개로 만들었을 때 가장 큰 길이를 구할 수 있다.


## Retrospective

*/
