function solution(lines) {
  let maxVal = 0;
  let log = [];
  let logPoint = [];

  lines.forEach((each) => {
    const [_, time, duration] = each.split(' ');

    const [hour, min, sec] = time.split(':').map((eachTime) => {
      return parseFloat(eachTime, 10);
    });
    const finTime = Math.round((hour * 3600 + min * 60 + sec) * 1000) / 1000;
    const startTime =
      Math.round((finTime - parseFloat(duration) + 0.001) * 1000) / 1000;

    log.push([startTime, finTime]);
    logPoint.push(startTime, finTime);
  });

  logPoint.sort();

  for (let i = 0; i < logPoint.length; i++) {
    let count = 0;
    const beginRange = logPoint[i];
    const endRange = logPoint[i] + 1;

     for (let j = 0; j < log.length; j++) {
      const [startPoint, endPoint] = log[j];

      if (
        (startPoint >= beginRange && startPoint < endRange) ||
        (endPoint >= beginRange && endPoint < endRange) ||
        (startPoint <= beginRange && endPoint >= endRange)
      ) {
        count++;
      }
    }

    if (count > maxVal) {
      maxVal = count;
    }
  }
  return maxVal;
}

test('Test case', () => {
  expect(
    solution([`2016-09-15 01:00:04.001 2.0s`, `2016-09-15 01:00:07.000 2s`])
  ).toEqual(1);
  expect(
    solution(['2016-09-15 01:00:04.002 2.0s', '2016-09-15 01:00:07.000 2s'])
  ).toEqual(2);
  expect(
    solution([
      '2016-09-15 20:59:57.421 0.351s',
      '2016-09-15 20:59:58.233 1.181s',
      '2016-09-15 20:59:58.299 0.8s',
      '2016-09-15 20:59:58.688 1.041s',
      '2016-09-15 20:59:59.591 1.412s',
      '2016-09-15 21:00:00.464 1.466s',
      '2016-09-15 21:00:00.741 1.581s',
      '2016-09-15 21:00:00.748 2.31s',
      '2016-09-15 21:00:00.966 0.381s',
      '2016-09-15 21:00:02.066 2.62s',
    ])
  ).toEqual(7);
});
