# [단어 변환 / 43163](https://programmers.co.kr/learn/courses/30/lessons/43163?language=javascript)
## What
###### Description

두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

    1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
    2. words에 있는 단어로만 변환할 수 있습니다.
    

예를 들어 begin이 hit, target가 cog, words가 \[hot,dot,dog,lot,log,cog\]라면 hit -> hot -> dot -> dog -> cog와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

##### 제한사항

*   각 단어는 알파벳 소문자로만 이루어져 있습니다.
*   각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
*   words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
*   begin과 target은 같지 않습니다.
*   변환할 수 없는 경우에는 0를 return 합니다.

##### 입출력 예

<table class="table"><thead><tr><th>begin</th><th>target</th><th>words</th><th>return</th></tr></thead><tbody><tr><td><q>hit</q></td><td><q>cog</q></td><td>[<q>hot</q>, <q>dot</q>, <q>dog</q>, <q>lot</q>, <q>log</q>, <q>cog</q>]</td><td>4</td></tr><tr><td><q>hit</q></td><td><q>cog</q></td><td>[<q>hot</q>, <q>dot</q>, <q>dog</q>, <q>lot</q>, <q>log</q>]</td><td>0</td></tr></tbody></table>

##### 입출력 예 설명

예제 #1  
문제에 나온 예와 같습니다.

예제 #2  
target인 cog는 words 안에 없기 때문에 변환할 수 없습니다.
> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/courses/30/lessons/43163

## How
이 문제는 bfs로 풀 수 있다. visited 라는 리스트를 만들어 조건에 맞게 targe에 도달하기까지 몇번 반복했는지를 담을 수 있도록 하였다.

같은 bfs 문제이다보니 가장 먼 노드 문제를 풀이했을때와 유사하게 진행된다. queue 리스트가 공백이 될 때 까지 while문이 반복되며 종료조건은 queue에 담긴 값이 target에 도달하는 순간 거기까지 진행하는데 반복한 회수를 반환하도록 처리하였다.

diffCount를 둬서 words의 각 단어를 begin의 인덱스와 1 on 1 비교하여 1 이상이 되는 순간 순회를 멈추도록 하였고 1인 경우에만 visited의 해당 word index에 반복횟수를 1 증가시키도록 하였다.

위 과정을 반복하면 탈출조건을 만나는 순간 문제에서 요구하는 거리를 구할 수 있다.

## Retrospective