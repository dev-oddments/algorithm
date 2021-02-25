const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `4
5
3
7
5
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

let answer = 0;

let num = Array(N)
.fill(0)

for(let i = 0; i < N; i++) {
    num[i] = parseInt(input());
}

for (let j = N - 1; j >= 0; --j) {
    while (num[j] <= num[j - 1]) {
        num[j - 1]--;
        answer++;
    }
}

console.log(answer);

/*

## How
그리다 문제이다. 일단 문제 자체를 이해하는 데 오래 걸렸다. 문제에 대해서 설명해보자면 난이도가 어려운 순으로 입력이 주어지고 쉬운 난이도가 어려운 난이도보다 점수를 많이 주도록 되어있다. 이렇게 되어있지 않은 부분에 해당 난이도의 점수를 다음 난이도 보다 작게 만들도록 하여 몇 점을 내리면 되는지를 구하면 된다.

마지막 입력받은 수에서 출발하여 생각하는 게 핵심이다. 나중에 입력받을수록 난도가 낮은 것이므로 그 이전에 입력받은 수보다 작아야만 한다. for 문으로 입력받은 만큼 순회하여 내부적으로 그 이전 입력받은 수 보다 작아지도록 하는 조건 및 반복문을 두어 count를 구하면 해결할 수 있다.

## Retrospective

*/
