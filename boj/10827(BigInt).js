// a^b
// https://www.acmicpc.net/problem/10827

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `0.1 1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [a, b] = input()
  .split(' ')
  .map((each) => Number(each));

const aArr = a.toString().split('');
const indexOfDot = aArr.indexOf('.');

const dotPosition = (
  BigInt(10 ** aArr.slice(indexOfDot + 1, aArr.length).length) ** BigInt(b)
).toString();

const converToInt =
  aArr.slice(0, indexOfDot).join('') +
  aArr.slice(indexOfDot + 1, aArr.length).join('');

const calc = (BigInt(converToInt) ** BigInt(b)).toString();

const index = calc.length - dotPosition.length + 1;

if (index >= 0) {
  return console.log(
    calc.slice(0, index) + '.' + calc.slice(index, calc.length)
  );
}

return console.log('0.' + '0'.repeat(-index) + calc);

/*

## How
조합에 BigInt를 써야 하는 문제를 접하고 BigInt 관련 문제를 한 번 더 풀어보고 싶어서 선정했다.

소수의 거듭제곱을 구하는 문제인데 그대로 연선 헤 버리면 오차가 생기게 된다. 따라서 `.`의 위치를 기억하고. 을 없애버린 뒤 정수화한 수를 BigInt로 연산해서. 이 있어야 할 위치에 추가하도록 하면 된다.

`.`의 위치는 이렇게 계산할 수 있다. 먼저 "10 ^ (`.` 이후의 숫자 개수)"에 "b 만큼 거듭제곱한 수의 길이"를 구한다. 전체 연산 결과 길이에서 해당 길이를 뺀 뒤 + 1 하면 연산 후 `.`이 있어야 할 위치를 구할 수 있다.

이렇게  점의 위치를 구하면 음수인 경우가 생기는데 "0. + (0 * 길이) + 계산한 수" 로 처리하면 된다.

## Retrospective

*/
