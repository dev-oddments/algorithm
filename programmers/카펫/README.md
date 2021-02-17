# [카펫 / 42842](https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript)
## What
###### Description

Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

![carpet.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b1ebb809-f333-4df2-bc81-02682900dc2d/carpet.png)

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

##### 제한사항

*   갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
*   노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
*   카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

##### 입출력 예

<table class="table"><thead><tr><th>brown</th><th>yellow</th><th>return</th></tr></thead><tbody><tr><td>10</td><td>2</td><td>[4, 3]</td></tr><tr><td>8</td><td>1</td><td>[3, 3]</td></tr><tr><td>24</td><td>24</td><td>[8, 6]</td></tr></tbody></table>

[출처](http://hsin.hr/coci/archive/2010_2011/contest4_tasks.pdf)

※ 공지 - 2020년 2월 3일 테스트케이스가 추가되었습니다.  
※ 공지 - 2020년 5월 11일 웹접근성을 고려하여 빨간색을 노란색으로 수정하였습니다.
> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/courses/30/lessons/42842

## How
해당 문제의 카테고리는 완전탐색이다. 매개변수로 주어지는 것은 갈색 격자의 수와 노란색 격자의 수이다. 이것을 기반으로 원래의 카펫 가로 세로 길이를 유추해야 한다.

각 격자의 수를 더한 값은 가로와 세로를 곱한 값과 같다. 이것을 변수화 하여 규칙에 따라 가로와 세로를 곱한 값이 해당 변수와 같아지도록 하는 지점을 찾도록 탐색하면 된다.

높이를 기준으로 넓이의 절반까지 순회하도록 하였다. yellow가 0인 경우가 없으므로 높이는 3부터 시작하게된다. 순회문 내부에 넓이와 높이 기준으로 약수인 것만 거르도록 하는 조건을 추가했다.

brown은 yellow에 1 크기만큼 테두리 형태로 존재한다. 즉, yellow의 갯수는 (높이 - 2) * (너비 - 2)로 구할 수 있다. 해당 조건에 부합하는 경우 너비와 높이를 배열 형태로 담아 return 하면 된다.

## Retrospective
