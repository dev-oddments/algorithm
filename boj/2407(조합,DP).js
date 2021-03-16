// 조합
// https://www.acmicpc.net/problem/2407

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `5 3`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .split(' ')
  .map((each) => parseInt(each));

const dp = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

function combination(n, r) {
  console.log(n, r, dp);
  if (n === r || r === 0) {
    return 1;
  }

  if (dp[n][r] !== 0) {
    return dp[n][r];
  }

  dp[n][r] = BigInt(combination(n - 1, r - 1)) + BigInt(combination(n - 1, r));

  return dp[n][r];
};


console.log(combination(N, M).toString());

// function factorial(num) {
//   if (num === 0 || num === 1) return 1;
//   for (let i = num - 1n; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// }

// if (N === M || M === 0) {
//   console.log(1);
// } else {
//   console.log(
//     BigInt(factorial(N) / (factorial(N - M) * factorial(M))).toString()
//   );
// }

/*

## How
조합을 다 구하는게 아니라 갯수를 구하는 것이므로 공식써서 풀었다가 BigInt를 안써서 계속 틀렸다. BigInt에 대해서는 이슈에 정리해두었다.

DP로 풀 수도 있는데 일반적인 이차원 배열을 만들어 combination(n-1, r-1) + combination(n-1, r)로 카운트된 숫자를 메모이제이션 하는 방식으로 구할 수 있다.

## Retrospective

*/
