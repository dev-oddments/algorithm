// Contact
// https://www.acmicpc.net/problem/1013
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString().trim()
  : `3
10010111
011000100110001
0110001011001
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());

let re = new RegExp('^((100+1+|01)+)$');

for (let i = 0; i < N; i++) {
  let signal = input();

  if (re.test(signal)) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

/*

## How
정규식 문제로 골랐던거라 정규식을 사용해야겠다고 생각했다. 문제에서 제시한 규칙 자체도 정규식을 사용할 수 있게끔 주고 있었다.

정규식을 사용하지 않는다면 오토마타 전이 그래프(Deterministic Finite Accepter)를 그리고 코드를 작성하면 된다고 한다.

문제에서 각각의 케이스를 주며 설명해주고 있는데 `+`는 앞의 문자가 하나 이상 나오면 된다는 의미이고 `(`, `)`는 문자를 그룹화 한다는 의미이다. `|`는 or 연산자이다.

위 정규표현식 규칙을 사용하여 완성된 표현식을 문제에서 아래와 같이 제공한다.

`(100+1+ | 01)+`

해당 패턴을 그냥 사용한다면 문제가 생겨서 앵커로 감싸주어야 한다. `^`로 시작 문자열과 `$`로 끝 문자열임을 알 수 있도록 처리해주어야 한다.

https://ko.javascript.info/regexp-anchors


## Retrospective

*/
