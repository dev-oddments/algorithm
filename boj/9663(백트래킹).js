// N-Queen
// https://www.acmicpc.net/problem/9663
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `8`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function isValid(col) {
  for (let i = 0; i < col; i++) {
    if (
      chessBoard[i] === chessBoard[col] ||
      col - i === Math.abs(chessBoard[col] - chessBoard[i])
    ) {
      return false;
    }
  }
  return true;
}

function dfs(col) {
  if (col == N) {
    answer++;
    return;
  }

  for (let i = 0; i < N; i++) {
    chessBoard[col] = i;
    if (isValid(col)) {
      dfs(col + 1);
    }
  }
}

let answer = 0;

const N = parseInt(input());
let chessBoard = Array(N).fill(0);

dfs(0);
console.log(answer);

/*

## How
문제는 두문장으로 구성되어있었고 input도 1개만 받게끔 되어있는 문제였다.

배열에 index를 x라고 두고 x에 각 index에 초기화되는 값을 y라고 둘 수 있다. 이런 형태로 N 크기의 1차원 배열을 만든다.

재귀로 가능한 경우의 수를 구할 수 있는데 명백하게 불가능한 상황에 대해서는 가지를 칠 수 있다.

가지를 칠 수 있는 상황은 다음과 같다.

1. 같은 행 혹은 열에 퀸이 존재하는 경우
2. 대각선에 퀸이 존재하는 경우

이 두가지에 해당하지 않는 경우에만 true를 반환하는 함수를 만들어서 재귀 호출을 하게끔 처리하였다.

재귀함수의 index가 N까지 가는 경우 count를 증가시켰고 최종 count가 서로 공격할 수 없게 놓는 경우의 수이다.

## Retrospective

*/
