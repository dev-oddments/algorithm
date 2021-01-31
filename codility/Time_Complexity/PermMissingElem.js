function solution(A) {
  let a = A.map(() => 0);
  a.push(0);

  A.forEach((each) => {
    a[each - 1] = 1;
  });

  return a.indexOf(0) + 1;
}
