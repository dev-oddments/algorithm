// 예산
// https://www.acmicpc.net/problem/2512
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `4
120 110 140 150
485
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

    let sum = 0;

    for (let i = 0; i < N; i++) {
      if (arr[i] >= mid) {
        sum += mid;
        continue;
      }

      sum += arr[i];
    }

    if (sum <= M) {
      left = mid + 1;
      answer = Math.max(answer, mid);
      continue;
    }

    right = mid - 1;
  }

  return answer;
}

const N = parseInt(input());

const arr = input()
  .split(' ')
  .map((each) => parseInt(each));

const M = parseInt(input());

let max = Math.max(...arr);

console.log(binarySearch(1, max));

/*

## How
이 문제도 이진 탐색 - 파나 메트릭 서치를 사용하면 풀 수 있다.

left는 1, right는 요청한 예산 중 가장 큰 값으로 정한다. 이 둘을 더해 2로 나눈 값을 mid로 하여 left가 right보다 클 때까지 반복한다.

N 번 만큼 순회하면서 값을 더해가는데 mid보다 index에 해당하는 요청 예산이 크거나 같으면 mid 값을 더하고 아니면 해당 요청 예산을 더해나간다.

다 더한 값이 총예산보다 작을 경우 right에 mid - 1을 대입하고 아니라면 left에 mid + 1을 대입한다. 만약 이전에 answer에 값이 대입되어 있는 경우 mid가 더 크면 mid를 answer에 대입한다. 

순회가 끝난 후 answer를 출력하면 요구한 값인 배정된 예산 중 최댓값을 구할 수 있다.

## Retrospective

*/
