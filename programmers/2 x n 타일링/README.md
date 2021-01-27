# [2 x n 타일링 / 12900](https://programmers.co.kr/learn/courses/30/lessons/12900?language=javascript)
## What
###### 문제 설명

가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

*   타일을 가로로 배치 하는 경우
*   타일을 세로로 배치 하는 경우

예를들어서 n이 7인 직사각형은 다음과 같이 채울 수 있습니다.

![Imgur](https://i.imgur.com/29ANX0f.png)

직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.

##### 제한사항

*   가로의 길이 n은 60,000이하의 자연수 입니다.
*   경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.

* * *

##### 입출력 예

<table class="table"><thead><tr><th>n</th><th>result</th></tr></thead><tbody><tr><td>4</td><td>5</td></tr></tbody></table>

##### 입출력 예 설명

입출력 예 #1  
다음과 같이 5가지 방법이 있다.

![Imgur](https://i.imgur.com/keiKrD3.png)

![Imgur](https://i.imgur.com/O9GdTE0.png)

![Imgur](https://i.imgur.com/IZBmc6M.png)

![Imgur](https://i.imgur.com/29LWVzK.png)

![Imgur](https://i.imgur.com/z64JbNf.png)

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/courses/30/lessons/12900

## How
DP 문제이다. 높이가 2이고 너비가 n인 직사 학형에 2x1, 1x2 타일을 배치할 수 있는 경우의 수를 구하는 문제였다. 직접 그림을 그려보면 쉽게 아래와 같은 점화식(피보나치와 같아서 익숙하다)을 유도할 수 있다.

`d[n] = d[n-1] + d[n-2]`

DP를 사용하는 이유는 중복을 제거하기 위해서이다. 위 식이 가능한 이유는 맨 오른쪽에 놓이는 경우를 나눠보면 이해할 수 있다.

1. 1x2 타일 하나를 놓는 경우 &lt;- d[n-1]의 경우의 수와 같다.
2. 2x1 타일 두 개로 놓는 경우 &lt;- d[n-2]의 경우의 수와 같다.

즉 n이 1이 증가할수록 두 가지 측면에서 메모이지이 션 된 값을 더하면 된다는 것이다. bottom-up 형식으로 for 문을 돌려서 문제를 풀 수 있었다.

## Retrospective
예전에 C++로 풀었던 기록이 있었다. 그 당시 DP로 접근하지 않고 이상하게 풀었던 기억과 함께 이게 왜 이렇게 되는지 이해가 안 되었던 기억도 난다. 이번에는 바로 이해하고 풀 수 있어서 좋았다.