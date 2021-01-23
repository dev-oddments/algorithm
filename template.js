const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const { mkdirSync, existsSync, writeFileSync } = require('fs');
const TurndownService = require('turndown');

const problemNumber = process.argv[2];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 800,
  });

  await page.goto(
    `https://programmers.co.kr/learn/courses/30/lessons/${problemNumber}?language=javascript`
  );

  const content = await page.content();
  const $ = cheerio.load(content);

  const title = $('.algorithm-title').text().trim();

  const turndownService = new TurndownService();
  turndownService.keep(['table']);

  const problemDescription = turndownService.turndown(
    $('.guide-section-description').html()
  );

  const initSolution = $('.CodeMirror-line').text() + '\n\n';

  let testCase = [];

  await $('table')
    .last()
    .find('tbody > tr')
    .each(function () {
      const getTestCase = $(this)
        .text()
        .trim()
        .split('\n')
        .map(function (item) {
          if (!isNaN(item)) {
            return parseInt(item, 10);
          }
          return item;
        });
      testCase.push(getTestCase);
    });

  let testCode = `test('Test case', () => {`;

  testCase.forEach((eachCase) => {
    testCode += '  expect(solution(';
    eachCase.forEach((each, index) => {
      if (index === eachCase.length - 1) {
        return (testCode += ')).toBe(' + each + ');\n');
      }
      return (testCode += each + (index < eachCase.length - 2 ? ', ' : ''));
    });
  });

  testCode += '});';

  if (!existsSync(`programmers/${title}`)) {
    mkdirSync(`programmers/${title}`);
    writeFileSync(`programmers/${title}/answer.test.js`, initSolution + testCode);
    writeFileSync(
      `programmers/${title}/README.md`,
      `# ${title}\n## What\n` +
        problemDescription +
        '\n\n## How\n\n## Retrospective'
    );
  } else {
    console.log('이미 폴더가 존재합니다.');
  }

  browser.close();
})();
