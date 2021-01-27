# 코딩 테스트 연습

## 코테 연습 방식
- WIP

## [programmers problem template generator](https://github.com/dididy/algorithm/blob/master/template.js)
VSCode로 프로그래머스 문제 풀이를 하고 있는데 중복되는 작업이 있어 이 과정을 자동화하기 위해서 제작하였다. 도그 푸딩 해보고 npm에 패키지 형태로 배포해봐야겠다.

### 사용 방법
```bash
npm init -y
npm i -D turndown cheerio puppeteer jest @types/jest
```

node가 설치되어 있다고 가정했다. 환경 구성은 위처럼 하면 된다. 이후 template.js 파일을 package.json이 있는 루트 폴더에 복사한다.

```bash
node template.js 42587
```

숫자는 문제 번호이다. 실행시키면 문제 번호에 해당하는 문제 제목으로 폴더가 만들어지고 폴더 내부에 README.md와 answer.test.js 파일이 생성되게 된다.

```bash
jest --watchAll --coverage
```

위 명령어를 실행하면 저장할 때마다 테스트케이스가 실행되게 된다. package.json scripts 항목에 추가하면 편하게 사용할 수 있다. jest가 설정되어 있으니 기호에 따라 TDD 방식으로 코딩 테스트 문제를 푸는 것도 가능하다!

### 크롤링
첫 번째로 프로그래머스의 robots.txt를 확인했다. 문제와 관련된 URL에는 크롤링 하는 부분에 disallow가 되어있지 않아서 크롤링이 가능하다고 판단했다.

프로그래머스에서 cheerio 만으로 크롤링이 불가능하게끔 되어있어 puppeteer를 병행하여 사용했다. 크게 제목, 문제 설명에 관한 부분, 초기 코드 이렇게 세 부분의 크롤링을 시도하였고 조금의 어려움이 있었지만 모두 성공하였다.

jest에 --watch 옵션을 주고 테스트케이스를 설정하면 저장할 때마다 테스트케이스를 통과하는지를 알 수 있어서 편한데 이것도 자동으로 만들어 주고 싶었다. 크롤링을 통해 확보한 입출력 예의 result 전까지를 expect 내부에 인자로 넣고 result를 toBe에 넣는 식으로 테스트 코드를 자동 생성되도록 하였다.

### 파일 생성
README.md 파일을 생성할 때 제목, 문제 설명, 어떻게 풀었는지, 회고 등의 항목을 각각 Markdown으로 자동으로 만들어주도록 하였다. 즉, 프로그래머스를 키지 않더라도 VSCode만으로 문제를 확인할 수 있다. 문제 설명 부분은 table을 제외하고 [TurnDown](https://github.com/domchristie/turndown)를 이용해 모두 html에서 markdown으로 변경하였다.

파일을 만들 때 저작권은 프로그래머스에 있다고 명시하는 부분을 추가하였다.
