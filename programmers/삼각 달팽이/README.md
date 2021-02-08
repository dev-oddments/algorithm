# [삼각 달팽이 / 68645](https://programmers.co.kr/learn/courses/30/lessons/68645?language=javascript)
## What
###### Description

정수 n이 매개변수로 주어집니다. 다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.

![examples.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/e1e53b93-dcdf-446f-b47f-e8ec1292a5e0/examples.png)

* * *

##### 제한사항

*   n은 1 이상 1,000 이하입니다.

* * *

##### 입출력 예

<table class="table"><thead><tr><th>n</th><th>result</th></tr></thead><tbody><tr><td>4</td><td><code>[1,2,9,3,10,8,4,5,6,7]</code></td></tr><tr><td>5</td><td><code>[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]</code></td></tr><tr><td>6</td><td><code>[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]</code></td></tr></tbody></table>

* * *

##### 입출력 예 설명

입출력 예 #1

*   문제 예시와 같습니다.

입출력 예 #2

*   문제 예시와 같습니다.

입출력 예 #3

*   문제 예시와 같습니다.
> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/courses/30/lessons/68645

## How
아래, 오른쪽, 위 이렇게 반복적으로 반시계 방향으로 삼각형을 순회한다고 가정하고 배열의 맨 윗줄부터 채우도록 요구하는 문제이다. 즉, 이 세 가지 경우를 나눠서 반복하면 된다.

이차원 배열에 각 경우에 맞는 형태로 방향을 이동하며 값을 채워나간다. dx와 dy 배열을 정의해서 방향에 따라 위치 index를 변경할 수 있도록 하였다. 값을 1씩 증가하여 해당 index의 값으로 반영한다. 높이만큼 반복하면 해당 높이 변수를 1만큼 줄여 다음 방향으로 반복한다. 방향에 대한 부분은 1을 더하고 3을 나눈 나머지를 방향으로 정의해서 아까 정의한 dx, xy의 인덱스로 넣어 위치를 이동할 수 있도록 하는 것을 반복하면 n이 0이 되는 시점에 배열을 모두 채우고 순회가 종료된다.

마지막으로 각 배열을 뒤로 이어붙이면 문제에서 요구한 배열의 형태가 된다.

## Retrospective