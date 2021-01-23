function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let ing = new Array(bridge_length).fill(0);

  let currentTruck = truck_weights.shift();
  let currentWeight = 0;

  ing.unshift(currentTruck);
  ing.pop();

  currentWeight += currentTruck;

  time++;

  while (currentWeight) {
    currentWeight -= ing.pop();
    currentTruck = truck_weights.shift();

    if (currentTruck + currentWeight <= weight) {
      ing.unshift(currentTruck);
      currentWeight += currentTruck;
    } else {
      ing.unshift(0);
      truck_weights.unshift(currentTruck);
    }
    time++;
  }
  return time;
}

test('Test case', () => {
  expect(solution(2, 10, [7, 4, 5, 6])).toBe(8);
  expect(solution(100, 100, [10])).toBe(101);
  expect(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(
    110
  );
});
