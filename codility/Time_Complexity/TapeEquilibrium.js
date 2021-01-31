// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let secondArr = [];

  let sumArr = A.reduce((a, b) => a + b, 0);

  A.pop();
  secondArr = A.map((each) => {
    sumArr -= each;
    return sumArr;
  });

  let result = [];
  let accum = 0;

  for (let i = 0; i < A.length; i++) {
    accum += A[i];
    result.push(Math.abs(secondArr[i] - accum));
  }

  return Math.min.apply(null, result);
}
