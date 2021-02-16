function solution(people, limit) {
  people = people.sort((a, b) => a - b);

  let answer = 0;
  let last = people.length - 1;

  for (let front = 0; front <= last; front++, answer++) {
    if (front !== last && people[front] + people[last] > limit) {
      front--;
      last--;
      continue;
    }
    if (people[front] + people[last] <= limit) {
      last--;
      continue;
    }
  }

  return answer;
}

test('Test case', () => {
  expect(solution([70, 50, 80, 50], 100)).toEqual(3);
  expect(solution([70, 80, 50], 100)).toEqual(3);
});
