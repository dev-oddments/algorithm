// 휴게소 세우기
// https://www.acmicpc.net/problem/1477

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `6 7 800
622 411 201 555 755 82
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function binarySearch(left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let newGasStation = 0;

    for (let i = 1; i < N + 2; i++) {
      const distance = arr[i] - arr[i - 1];
      newGasStation += Math.floor(distance / mid);
      if (distance % mid === 0) {
        newGasStation--;
      }
    }

    if (newGasStation <= M) {
      right = mid - 1;
      continue;
    }

    left = mid + 1;
  }

  return left;
}

const [N, M, L] = input()
  .split(' ')
  .map((each) => parseInt(each));

const arr = input()
  .split(' ')
  .map((each) => parseInt(each));

arr.unshift(0);
arr.push(L);
arr.sort((a, b) => a - b);

console.log(binarySearch(1, L - 1));

/*

## How
이 문제도 이분 탐색을 활용한 파라메트릭 서치를 사용하여 풀이했다.

0부터 L까지 이미 존재하는 휴게소 사이로 M 개만큼의 휴게소가 각각 1개 이상씩 들어가야 한다는 것이 핵심 포인트이다. 이 경우에 첫 번째 휴게소까지의 거리가 최소가 되는 값을 구하면 된다.

0과 L을 입력으로 주어지는 휴게소 위치 앞뒤로 넣고 left를 1, right를 L - 1로 둔다. left가 right보다 커지기 전까지 순회하며 mid를 두 값의 합의 절반으로 구한다.

새로운 주유소의 위치를 카운트할 변수를 만들고 N + 2 만큼 순회하면서 (두 주유소 거리 / mid) 한 만큼 해당 변수를 증가시키고 나머지가 0인 경우 겹친 경우라는 의미이므로 1 감소시킨다.

해당 카운트 변수의 값이 M보다 크면 left에 mid + 1을 넣고 아니라면 right에 mid - 1을 넣어 left를 출력하면 최소가 되는 첫 번째 휴게소까지의 거리를 구할 수 있다.

## Retrospective

*/
