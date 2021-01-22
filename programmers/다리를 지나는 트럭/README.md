# 프로그래머스 / 다리를 지나는 트럭 - 42583

## What
https://programmers.co.kr/learn/courses/30/lessons/42583#

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
