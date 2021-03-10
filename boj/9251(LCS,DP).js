// LCS(최장 공통 부분 수열)
// https://www.acmicpc.net/problem/9251
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `ACAYKP
CAPCAK`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const firstArr = input().split('');
const secondArr = input().split('');

const dp = Array.from(Array(firstArr.length + 1), () =>
  Array(secondArr.length + 1).fill(0)
);

for (let i = 1; i <= firstArr.length; i++) {
  for (let j = 1; j <= secondArr.length; j++) {
    if (firstArr[i - 1] === secondArr[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
      continue;
    }
    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}

console.log(dp[firstArr.length][secondArr.length]);

/*

## How
어느정도 풀이가 유형화 되어 있었다.

1. DP바텀업으로 2중 for문으로 두 문자열을 순회하면서 index에 따라 두 문자열 크기의 2차원 배열에 같은 값인 경우 왼쪽 대각선 위에 캐싱된 값에 1을 더한 값을 각각의 index + 1한 위치에 넣는다.
2. 같은 값이 아닌 경우 왼쪽 혹은 상단 값 중 큰 값을 각각의 index + 1한 위치에 넣는다.

순회가 끝나고 2차원 배열 마지막 index에 캐싱한 값을 출력하면 문제에서 요구하는 최장 공통 부분 수열의 길이를 구할 수 있다.

## Retrospective

*/
