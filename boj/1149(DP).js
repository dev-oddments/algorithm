// RGB거리
// https://www.acmicpc.net/problem/1149
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `3
26 40 83
49 60 57
13 89 99`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

const inputColors = [];

for (let i = 0; i < N; i++) {
  const rgbEach = input()
    .split(' ')
    .map((each) => parseInt(each));
  inputColors.push(rgbEach);
}

const colorSum = Array.from(Array(N), () => Array(3).fill(0));

inputColors.forEach((each, index) => {
  if (index === 0) {
    colorSum[index][0] = each[0];
    colorSum[index][1] = each[1];
    colorSum[index][2] = each[2];
  } else {
    colorSum[index][0] =
      each[0] + Math.min(colorSum[index - 1][1], colorSum[index - 1][2]);
    colorSum[index][1] =
      each[1] + Math.min(colorSum[index - 1][0], colorSum[index - 1][2]);
    colorSum[index][2] =
      each[2] + Math.min(colorSum[index - 1][0], colorSum[index - 1][1]);
  }
});

console.log(Math.min(...colorSum[N-1]));

/*

## How
이번주에 단비같이 주어진 실버 문제였다. DP의 기초적인 문제였는데 RGB 색상의 합이 최소가 되도록 선택하여 비용을 더해야 하는데 이전 집의 색을 배제해야 한다.

이에대한 점화식을 구해서 바텀업으로 문제의 요구사항을 구할 수 있도록 하였다.

## Retrospective

*/
