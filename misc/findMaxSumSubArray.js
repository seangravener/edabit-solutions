const input = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
const input2 = [-2, 10, 7, -5, 15, 6]; // 33
const input3 = [1, 10, -1, 11, 5, -30, -7, 20, 25, -35]; // 45
const input4 = [-15, -14, -10, -19, -5, -21, -10]; // -5

function findMaxSumSubArray(A) {
  if (A.length < 1) return 0;

  const sums = A.reduce((acc, curr) => {
    const prev = acc[acc.length - 1] || 0;
    const newSum = Math.max(curr, prev + curr);

    return [...acc, newSum];
  }, []);

  return Math.max(...sums);
}

console.log(findMaxSumSubArray(input2));
console.log(findMaxSumSubArray(input3));
console.log(findMaxSumSubArray(input4));
