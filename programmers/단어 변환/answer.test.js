function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  let visited = Array(words.length).fill(0);
  let queue = [begin];

  function BFS() {
    while (queue.length !== 0) {
      let node = queue.shift();

      if (node === target) {
        return visited[words.indexOf(node)];
      }

      for (let i = 0; i < words.length; i++) {
        if (visited[i] === 0) {
          let diffCount = 0;
          for (let j = 0; j < words.length; j++) {
            if (node[j] != words[i][j]) {
              diffCount++;
            }

            if (diffCount > 1) {
              break;
            }
          }

          if (diffCount === 1) {
            queue.push(words[i]);
            if (node == begin) {
              visited[i] = 1;
              continue;
            }

            visited[i] = visited[words.indexOf(node)] + 1;
          }
        }
      }
    }
  }

  return BFS();
}

test('Test case', () => {
  expect(
    solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
  ).toEqual(4);
  expect(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])).toEqual(
    0
  );
});
