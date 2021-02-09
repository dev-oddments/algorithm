# [큰 수 만들기 / 42883](https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript)
## What
###### Description

어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 \[19, 12, 14, 92, 94, 24\] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

##### 제한 조건

*   number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.
*   k는 1 이상 `number의 자릿수` 미만인 자연수입니다.

##### 입출력 예

<table class="table"><thead><tr><th>number</th><th>k</th><th>return</th></tr></thead><tbody><tr><td><q>1924</q></td><td>2</td><td><q>94</q></td></tr><tr><td><q>1231234</q></td><td>3</td><td><q>3234</q></td></tr><tr><td><q>4177252841</q></td><td>4</td><td><q>775841</q></td></tr></tbody></table>

[출처](http://hsin.hr/coci/archive/2011_2012/contest4_tasks.pdf)
> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/courses/30/lessons/42883

## How
이 문제는 그리디 문제이다. 가장 큰 값을 지속적으로 선택해서 k만큼 제외된 수 중 가장 큰 수를 만들어야만 한다.

numbers 배열의 수를 분해하여 forEach로 순회해나간다. 만약 k가 0보다 크고 스택의 마지막 값 보다 numbers 배열의 현재 index 값이 크다면 해당 조건이 성립할 동안 stack의 pop 연산을 수행하고 k의 길이를 pop 연산 한만큼 줄인다. 앞서 pop 한 수가 제외된 수가 되며 반복문이 끝나면 현재 index의 값을 stack에 넣는다. 이것을 반복하면 k만큼 제외된 수 중 가장 큰 수를 구할 수 있다.

하지만 이렇게 풀 경우 후처리를 하지 않으면 12번 테스트 케이스를 통과하지 못한다. 해당 테스트케이스의 형태는 number에 "54321", k에 4가 들어가는 형태이다. 이 경우 pop 연산이 전혀 일어날 수 없으므로 기대한 값인 "5"가 출력되지 않고 "54321"이 출력되게 된다. 따라서 이에대한 후처리를 해줘야만 하는데 k가 줄어들지 않은 상황이므로 그만큼 slice를 함으로서 해결할 수 있다.

## Retrospective
