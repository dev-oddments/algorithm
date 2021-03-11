// 평범한 배낭
// https://www.acmicpc.net/problem/12865

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `4 7
6 13
4 8
3 6
5 12`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, K] = input()
  .split(' ')
  .map((each) => parseInt(each));

const arr = [[0, 0]];

for (let i = 0; i < N; i++) {
  arr.push(
    input()
      .split(' ')
      .map((each) => parseInt(each))
  );
}

const dp = Array.from(Array(N + 1), () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const weight = arr[i][0];
  const value = arr[i][1];

  for (let j = 1; j <= K; j++) {
    if (j >= weight) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
      continue;
    }
    dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp[N][K]);

/*

## How
유명한 DP 문제이다. 조건에 맞게 점화식을 잘 세우면 된다.

N x K 배열을 만들어서 각 물건의 무게에 따른 가치를 메모이지이 션 하여 채워나간다.

점화식에 해당하는 수도 코드는 아래와 같다.

if j <= weight:
    dp[i][j] = Max((dp[i][j - weight] + value), dp[i - 1][j]) # 무게만큼 뺀 위치의 가치 + 현재 가치 vs 이전 물품 최댓값
else:
    dp[i][j] = dp[i - 1][j] # 이전 물품 최댓값

이를 코드로 옮기면 배낭에 넣을 수 있는 가치의 최댓값을 구할 수 있다.

## Retrospective

*/
