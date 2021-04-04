// 그룹 단어 체커
// https://www.acmicpc.net/problem/1316

const solution = (N, words) => {
  let answer = N;
  for (let i = 0; i < N; i++) {
    const word = words[i];
    for (let j = 0; j < word.length - 1; j++) {
      if (word[j] !== word[j + 1]) {
        const sliceWord = word.slice(j + 1, word.length);

        if (sliceWord.includes(word[j])) {
          answer--;
          break;
        }
      }
    }
  }
  return answer;
};

const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `3
happy
new
year
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

const words = [];

for (let i = 0; i < N; i++) {
  words.push(input());
}

console.log(solution(N, words));

/*

## How
각 단어를 순차적으로 순회하면서 연속되지 않은 단어 중 현재 단어가 뒤에 나오게 된다면 그룹단어가 아니다.

따라서 순회중에 현재 단어가 현재 단어 다음부터 slice한 문자에 포함되어 있으면 그룹단어의 갯수를 줄인다.

반복하면 그룹단어의 갯수를 구할 수 있다.

## Retrospective

*/
