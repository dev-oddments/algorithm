# [가장 먼 노드 / 49189](https://programmers.co.kr/learn/courses/30/lessons/49189?language=javascript)
## What
###### Description

n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

##### 제한사항

*   노드의 개수 n은 2 이상 20,000 이하입니다.
*   간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
*   vertex 배열 각 행 \[a, b\]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.

##### 입출력 예

<table class="table"><thead><tr><th>n</th><th>vertex</th><th>return</th></tr></thead><tbody><tr><td>6</td><td>[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]</td><td>3</td></tr></tbody></table>

##### 입출력 예 설명

예제의 그래프를 표현하면 아래 그림과 같고, 1번 노드에서 가장 멀리 떨어진 노드는 4,5,6번 노드입니다.

![image.png](https://grepp-programmers.s3.amazonaws.com/files/ybm/fadbae38bb/dec85ab5-0273-47b3-ba73-fc0b5f6be28a.png)
> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/courses/30/lessons/49189

## How
그래프 순회로 가장 긴 간선을 가지는 노드의 개수를 구하는 문제이다. bfs를 이용해 풀어야 하며 그 과정에서 queue를 활용해야 한다.

visited 배열을 만들어 기준 노드와 거리를 넣는 방식으로 문제를 해결하였다. 마지막에 최대값에 해당하는 길이가 몇개인지만 체크하면 된다.

queue에 담긴 직전 접근한 노드의 정보를 node 변수에 담아 접근 가능 여부, 접근했는지를 체크하여 각각의 경우에 맞게 처리해 준다.

접근 가능한 경우에 접근했던 경우 접근하지 았았던 경우를 생각해보자.

1. 접근 했다면 다음 순회로 넘어간다.
2. 접근 안 했다면 vsisted의 위치 값에 1을 더해준다.

두 경우 모두 edge의 앞부분을 splice로 떼어내고 그만큼 index를 재정의한다. 이 과정을 모든 노드에 접근할 때(edge의 길이가 0이 될 때까지)까지 반복하면 된다.

## Retrospective
