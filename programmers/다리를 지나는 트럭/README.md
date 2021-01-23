# [다리를 지나는 트럭 / 42583](https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript)
## What
###### 문제 설명

트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge\_length이고 다리는 무게 weight까지 견딥니다.  
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 \[7, 4, 5, 6\]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

<table class="table"><thead><tr><th>경과 시간</th><th>다리를 지난 트럭</th><th>다리를 건너는 트럭</th><th>대기 트럭</th></tr></thead><tbody><tr><td>0</td><td>[]</td><td>[]</td><td>[7,4,5,6]</td></tr><tr><td>1~2</td><td>[]</td><td>[7]</td><td>[4,5,6]</td></tr><tr><td>3</td><td>[7]</td><td>[4]</td><td>[5,6]</td></tr><tr><td>4</td><td>[7]</td><td>[4,5]</td><td>[6]</td></tr><tr><td>5</td><td>[7,4]</td><td>[5]</td><td>[6]</td></tr><tr><td>6~7</td><td>[7,4,5]</td><td>[6]</td><td>[]</td></tr><tr><td>8</td><td>[7,4,5,6]</td><td>[]</td><td>[]</td></tr></tbody></table>

따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리 길이 bridge\_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck\_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

##### 제한 조건

*   bridge\_length는 1 이상 10,000 이하입니다.
*   weight는 1 이상 10,000 이하입니다.
*   truck\_weights의 길이는 1 이상 10,000 이하입니다.
*   모든 트럭의 무게는 1 이상 weight 이하입니다.

##### 입출력 예

<table class="table"><thead><tr><th>bridge_length</th><th>weight</th><th>truck_weights</th><th>return</th></tr></thead><tbody><tr><td>2</td><td>10</td><td>[7,4,5,6]</td><td>8</td></tr><tr><td>100</td><td>100</td><td>[10]</td><td>101</td></tr><tr><td>100</td><td>100</td><td>[10,10,10,10,10,10,10,10,10,10]</td><td>110</td></tr></tbody></table>

[출처](http://icpckorea.org/2016/ONLINE/problem.pdf)

※ 공지 - 2020년 4월 06일 테스트케이스가 추가되었습니다.

## How
시간이 증가함에 따라 트럭의 이동 시켜 도착하도록 만들고 현재 다리 위의 무게(currentWeight)를 기준으로 truck_weights queue에 들어 있는 트럭을 출발시키는 등 각각의 경우를 조건을 걸어 처리하였다.

먼저 시간이 증가하는 것에 따라 생각하는 게 좋겠다 싶어 while loop을 만들었고 반복문이 실행될 때마다 time이라는 변수를 1씩 증가하도록 하였다. 다리 위의 무게(currentWeight)가 0이 되면 종료하도록 조건을 걸었다.

ing이라는 리스트를 다리 길이(bridge_length)만큼 만들어 새로운 트럭이 들어가면 트럭 무게에 해당하는 값을 unshift 메서드로 넣도록 하였다.

while loop이 돌면서 ing에 가장 처음에 넣은 값을 pop 해서 다리 위의 무게(currentWeight)에서 뺀 값을 currentWeight에 반영하였다.

현재 다리 위의 무게(currentWeight)에 추가적인 트럭이 진입할 수 있는지를 파악할 수 있도록 currentTruck의 값에 truck_wieghts의 0번째 원소를 shift해서currentTruck에 대입하였고 진입할 수 없는 경우 않는 경우 shift 한 값을 unshift를 통해 원래의 리스트로 복구시켰다.

다리 위 상황이 다음 트럭이 진입할 수 있는 상황이라면 currentTruck 값을 unshift를 통해 ing 리스트에 추가하였고 여유가 없다면 0을 추가하였다.

이 과정을 반복하여 몇 초의 시간이 소요되는지를 return 하도록 구현하였다.

## Retrospective
Python dequeue의 popleft처럼 JS에서는 shift를 사용할 수 있다. unshift를 이용하면 반대 방향에 특정 원소를 push를 하는 것도 가능했다. 이를 활용해서 문제를 풀긴 했는데 다른 분들 풀이 설명을 보니 이렇게 풀면 모든 테스트케이스를 통과하긴 하지만 시간복잡도 이슈가 있다고 한다.

shift 자체가 O(N)의 시간복잡도를 가지고 있어서 반복적으로 사용되는 경우 reverse 해서 스택처럼 쓰는 게 시간복잡도 상으로 좋다고 한다. 추후에 이렇게 리팩토링해야겠다.
