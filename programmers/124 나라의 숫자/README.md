# [124 나라의 숫자 / 12899](https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript)
## What
###### Description

124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

1.  124 나라에는 자연수만 존재합니다.
2.  124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.

예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

<table class="table"><thead><tr><th>10진법</th><th>124 나라</th><th>10진법</th><th>124 나라</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>6</td><td>14</td></tr><tr><td>2</td><td>2</td><td>7</td><td>21</td></tr><tr><td>3</td><td>4</td><td>8</td><td>22</td></tr><tr><td>4</td><td>11</td><td>9</td><td>24</td></tr><tr><td>5</td><td>12</td><td>10</td><td>41</td></tr></tbody></table>

자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

##### 제한사항

*   n은 500,000,000이하의 자연수 입니다.

* * *

##### 입출력 예

<table class="table"><thead><tr><th>n</th><th>result</th></tr></thead><tbody><tr><td>1</td><td>1</td></tr><tr><td>2</td><td>2</td></tr><tr><td>3</td><td>4</td></tr><tr><td>4</td><td>11</td></tr></tbody></table>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/courses/30/lessons/12899

## How
문제 설명에서 예시를 보면 3단위로 자릿수가 변화함을 알 수 있고 이를 통해 3진수 형태로 생각하고 풀면 된다는 단서를 얻었다. 즉, 기존 10진법 수를 3으로 나눈 몫과 나머지를 가지고 아이디어를 생각해 보았다. 기존의 수가 0이 아닌 조건인 상황에서 실행되도록 while 문을 설정하고 loop를 돌 때마다 기존의 수를 3으로 나눴고 나머지에 해당하는 수에 조건을 걸어 각각 나머지가 0이면 4를 변수에 수에 붙이고 1이면 1, 2면 2를 붙이도록 하여 124 나라의 숫자 형식에 맞도록 구현하였다. 나머지가 0인 경우 즉, 나누어떨어지게 되면 124 나라 숫자의 자릿수가 바뀌게 되므로 1을 빼주었다.

## Retrospective