// 피보나치 함수
// https://www.acmicpc.net/problem/1003

const solution = (tc, arr) => {
  const memo = Array(41).fill(false);

  const dp = (index) => {
    if (index === 0) {
      return 0;
    }

    if (index === 1 || index < 0) {
      return 1;
    }

    if (!memo[index]) {
      memo[index] = dp(index - 1) + dp(index - 2);
    }

    return memo[index];
  };

  const answer = [];

  arr.forEach((each) => {
    answer.push([dp(each - 1), dp(each)].join(' '));
  });

  return answer.join('\n');
};

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `3
0
1
3
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const TC = input() | 0;

const arr = [];

for (let i = 0; i < TC; i++) {
  arr.push(input() | 0);
}

console.log(solution(TC, arr));

/*

## How
일반적인 피보나치 느낌이 아니었다. 탑다운에 메모이제이션을 해서 그 다음 DP를 해야하는 상황을 횟수를 줄여주는게 키포인트였다.

이런식으로 비틀린 경우 아이디어를 생각해내는게 중요한 것 같다.

## Retrospective

*/
